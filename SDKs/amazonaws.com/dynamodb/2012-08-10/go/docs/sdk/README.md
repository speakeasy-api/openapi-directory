# SDK

## Overview

<fullname>Amazon DynamoDB</fullname> <p>Amazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability. DynamoDB lets you offload the administrative burdens of operating and scaling a distributed database, so that you don't have to worry about hardware provisioning, setup and configuration, replication, software patching, or cluster scaling.</p> <p>With DynamoDB, you can create database tables that can store and retrieve any amount of data, and serve any level of request traffic. You can scale up or scale down your tables' throughput capacity without downtime or performance degradation, and use the Amazon Web Services Management Console to monitor resource utilization and performance metrics.</p> <p>DynamoDB automatically spreads the data and traffic for your tables over a sufficient number of servers to handle your throughput and storage requirements, while maintaining consistent and fast performance. All of your data is stored on solid state disks (SSDs) and automatically replicated across multiple Availability Zones in an Amazon Web Services Region, providing built-in high availability and data durability.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/dynamodb/>
### Available Operations

* [BatchExecuteStatement](#batchexecutestatement) - <p>This operation allows you to perform batch reads or writes on data stored in DynamoDB, using PartiQL. Each read statement in a <code>BatchExecuteStatement</code> must specify an equality condition on all key attributes. This enforces that each <code>SELECT</code> statement in a batch returns at most a single item.</p> <note> <p>The entire batch must consist of either read statements or write statements, you cannot mix both in one batch.</p> </note> <important> <p>A HTTP 200 response does not mean that all statements in the BatchExecuteStatement succeeded. Error details for individual statements can be found under the <a href="https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchStatementResponse.html#DDB-Type-BatchStatementResponse-Error">Error</a> field of the <code>BatchStatementResponse</code> for each statement.</p> </important>
* [BatchGetItem](#batchgetitem) - <p>The <code>BatchGetItem</code> operation returns the attributes of one or more items from one or more tables. You identify requested items by primary key.</p> <p>A single operation can retrieve up to 16 MB of data, which can contain as many as 100 items. <code>BatchGetItem</code> returns a partial result if the response size limit is exceeded, the table's provisioned throughput is exceeded, or an internal processing failure occurs. If a partial result is returned, the operation returns a value for <code>UnprocessedKeys</code>. You can use this value to retry the operation starting with the next item to get.</p> <important> <p>If you request more than 100 items, <code>BatchGetItem</code> returns a <code>ValidationException</code> with the message "Too many items requested for the BatchGetItem call."</p> </important> <p>For example, if you ask to retrieve 100 items, but each individual item is 300 KB in size, the system returns 52 items (so as not to exceed the 16 MB limit). It also returns an appropriate <code>UnprocessedKeys</code> value so you can get the next page of results. If desired, your application can include its own logic to assemble the pages of results into one dataset.</p> <p>If <i>none</i> of the items can be processed due to insufficient provisioned throughput on all of the tables in the request, then <code>BatchGetItem</code> returns a <code>ProvisionedThroughputExceededException</code>. If <i>at least one</i> of the items is successfully processed, then <code>BatchGetItem</code> completes successfully, while returning the keys of the unread items in <code>UnprocessedKeys</code>.</p> <important> <p>If DynamoDB returns any unprocessed items, you should retry the batch operation on those items. However, <i>we strongly recommend that you use an exponential backoff algorithm</i>. If you retry the batch operation immediately, the underlying read or write requests can still fail due to throttling on the individual tables. If you delay the batch operation using exponential backoff, the individual requests in the batch are much more likely to succeed.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ErrorHandling.html#BatchOperations">Batch Operations and Error Handling</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> </important> <p>By default, <code>BatchGetItem</code> performs eventually consistent reads on every table in the request. If you want strongly consistent reads instead, you can set <code>ConsistentRead</code> to <code>true</code> for any or all tables.</p> <p>In order to minimize response latency, <code>BatchGetItem</code> may retrieve items in parallel.</p> <p>When designing your application, keep in mind that DynamoDB does not return items in any particular order. To help parse the response by item, include the primary key values for the items in your request in the <code>ProjectionExpression</code> parameter.</p> <p>If a requested item does not exist, it is not returned in the result. Requests for nonexistent items consume the minimum read capacity units according to the type of read. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.html#CapacityUnitCalculations">Working with Tables</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
* [BatchWriteItem](#batchwriteitem) - <p>The <code>BatchWriteItem</code> operation puts or deletes multiple items in one or more tables. A single call to <code>BatchWriteItem</code> can transmit up to 16MB of data over the network, consisting of up to 25 item put or delete operations. While individual items can be up to 400 KB once stored, it's important to note that an item's representation might be greater than 400KB while being sent in DynamoDB's JSON format for the API call. For more details on this distinction, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html">Naming Rules and Data Types</a>.</p> <note> <p> <code>BatchWriteItem</code> cannot update items. If you perform a <code>BatchWriteItem</code> operation on an existing item, that item's values will be overwritten by the operation and it will appear like it was updated. To update items, we recommend you use the <code>UpdateItem</code> action.</p> </note> <p>The individual <code>PutItem</code> and <code>DeleteItem</code> operations specified in <code>BatchWriteItem</code> are atomic; however <code>BatchWriteItem</code> as a whole is not. If any requested operations fail because the table's provisioned throughput is exceeded or an internal processing failure occurs, the failed operations are returned in the <code>UnprocessedItems</code> response parameter. You can investigate and optionally resend the requests. Typically, you would call <code>BatchWriteItem</code> in a loop. Each iteration would check for unprocessed items and submit a new <code>BatchWriteItem</code> request with those unprocessed items until all items have been processed.</p> <p>If <i>none</i> of the items can be processed due to insufficient provisioned throughput on all of the tables in the request, then <code>BatchWriteItem</code> returns a <code>ProvisionedThroughputExceededException</code>.</p> <important> <p>If DynamoDB returns any unprocessed items, you should retry the batch operation on those items. However, <i>we strongly recommend that you use an exponential backoff algorithm</i>. If you retry the batch operation immediately, the underlying read or write requests can still fail due to throttling on the individual tables. If you delay the batch operation using exponential backoff, the individual requests in the batch are much more likely to succeed.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ErrorHandling.html#Programming.Errors.BatchOperations">Batch Operations and Error Handling</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> </important> <p>With <code>BatchWriteItem</code>, you can efficiently write or delete large amounts of data, such as from Amazon EMR, or copy data from another database into DynamoDB. In order to improve performance with these large-scale operations, <code>BatchWriteItem</code> does not behave in the same way as individual <code>PutItem</code> and <code>DeleteItem</code> calls would. For example, you cannot specify conditions on individual put and delete requests, and <code>BatchWriteItem</code> does not return deleted items in the response.</p> <p>If you use a programming language that supports concurrency, you can use threads to write items in parallel. Your application must include the necessary logic to manage the threads. With languages that don't support threading, you must update or delete the specified items one at a time. In both situations, <code>BatchWriteItem</code> performs the specified put and delete operations in parallel, giving you the power of the thread pool approach without having to introduce complexity into your application.</p> <p>Parallel processing reduces latency, but each specified put and delete request consumes the same number of write capacity units whether it is processed in parallel or not. Delete operations on nonexistent items consume one write capacity unit.</p> <p>If one or more of the following is true, DynamoDB rejects the entire batch write operation:</p> <ul> <li> <p>One or more tables specified in the <code>BatchWriteItem</code> request does not exist.</p> </li> <li> <p>Primary key attributes specified on an item in the request do not match those in the corresponding table's primary key schema.</p> </li> <li> <p>You try to perform multiple operations on the same item in the same <code>BatchWriteItem</code> request. For example, you cannot put and delete the same item in the same <code>BatchWriteItem</code> request. </p> </li> <li> <p> Your request contains at least two items with identical hash and range keys (which essentially is two put operations). </p> </li> <li> <p>There are more than 25 requests in the batch.</p> </li> <li> <p>Any individual item in a batch exceeds 400 KB.</p> </li> <li> <p>The total request size exceeds 16 MB.</p> </li> </ul>
* [CreateBackup](#createbackup) - <p>Creates a backup for an existing table.</p> <p> Each time you create an on-demand backup, the entire table data is backed up. There is no limit to the number of on-demand backups that can be taken. </p> <p> When you create an on-demand backup, a time marker of the request is cataloged, and the backup is created asynchronously, by applying all changes until the time of the request to the last full table snapshot. Backup requests are processed instantaneously and become available for restore within minutes. </p> <p>You can call <code>CreateBackup</code> at a maximum rate of 50 times per second.</p> <p>All backups in DynamoDB work without consuming any provisioned throughput on the table.</p> <p> If you submit a backup request on 2018-12-14 at 14:25:00, the backup is guaranteed to contain all data committed to the table up to 14:24:00, and data committed after 14:26:00 will not be. The backup might contain data modifications made between 14:24:00 and 14:26:00. On-demand backup does not support causal consistency. </p> <p> Along with data, the following are also included on the backups: </p> <ul> <li> <p>Global secondary indexes (GSIs)</p> </li> <li> <p>Local secondary indexes (LSIs)</p> </li> <li> <p>Streams</p> </li> <li> <p>Provisioned read and write capacity</p> </li> </ul>
* [CreateGlobalTable](#createglobaltable) - <p>Creates a global table from an existing table. A global table creates a replication relationship between two or more DynamoDB tables with the same table name in the provided Regions. </p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29 (Legacy)</a> of global tables. We recommend using <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> when creating new global tables, as it provides greater flexibility, higher efficiency and consumes less write capacity than 2017.11.29 (Legacy). To determine which version you are using, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.DetermineVersion.html">Determining the version</a>. To update existing global tables from version 2017.11.29 (Legacy) to version 2019.11.21 (Current), see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_upgrade.html"> Updating global tables</a>. </p> </important> <p>If you want to add a new replica table to a global table, each of the following conditions must be true:</p> <ul> <li> <p>The table must have the same primary key as all of the other replicas.</p> </li> <li> <p>The table must have the same name as all of the other replicas.</p> </li> <li> <p>The table must have DynamoDB Streams enabled, with the stream containing both the new and the old images of the item.</p> </li> <li> <p>None of the replica tables in the global table can contain any data.</p> </li> </ul> <p> If global secondary indexes are specified, then the following conditions must also be met: </p> <ul> <li> <p> The global secondary indexes must have the same name. </p> </li> <li> <p> The global secondary indexes must have the same hash key and sort key (if present). </p> </li> </ul> <p> If local secondary indexes are specified, then the following conditions must also be met: </p> <ul> <li> <p> The local secondary indexes must have the same name. </p> </li> <li> <p> The local secondary indexes must have the same hash key and sort key (if present). </p> </li> </ul> <important> <p> Write capacity settings should be set consistently across your replica tables and secondary indexes. DynamoDB strongly recommends enabling auto scaling to manage the write capacity settings for all of your global tables replicas and indexes. </p> <p> If you prefer to manage write capacity settings manually, you should provision equal replicated write capacity units to your replica tables. You should also provision equal replicated write capacity units to matching secondary indexes across your global table. </p> </important>
* [CreateTable](#createtable) - <p>The <code>CreateTable</code> operation adds a new table to your account. In an Amazon Web Services account, table names must be unique within each Region. That is, you can have two tables with same name if you create the tables in different Regions.</p> <p> <code>CreateTable</code> is an asynchronous operation. Upon receiving a <code>CreateTable</code> request, DynamoDB immediately returns a response with a <code>TableStatus</code> of <code>CREATING</code>. After the table is created, DynamoDB sets the <code>TableStatus</code> to <code>ACTIVE</code>. You can perform read and write operations only on an <code>ACTIVE</code> table. </p> <p>You can optionally define secondary indexes on the new table, as part of the <code>CreateTable</code> operation. If you want to create multiple tables with secondary indexes on them, you must create the tables sequentially. Only one table with secondary indexes can be in the <code>CREATING</code> state at any given time.</p> <p>You can use the <code>DescribeTable</code> action to check the table status.</p>
* [DeleteBackup](#deletebackup) - <p>Deletes an existing backup of a table.</p> <p>You can call <code>DeleteBackup</code> at a maximum rate of 10 times per second.</p>
* [DeleteItem](#deleteitem) - <p>Deletes a single item in a table by primary key. You can perform a conditional delete operation that deletes the item if it exists, or if it has an expected attribute value.</p> <p>In addition to deleting an item, you can also return the item's attribute values in the same operation, using the <code>ReturnValues</code> parameter.</p> <p>Unless you specify conditions, the <code>DeleteItem</code> is an idempotent operation; running it multiple times on the same item or attribute does <i>not</i> result in an error response.</p> <p>Conditional deletes are useful for deleting items only if specific conditions are met. If those conditions are met, DynamoDB performs the delete. Otherwise, the item is not deleted.</p>
* [DeleteTable](#deletetable) - <p>The <code>DeleteTable</code> operation deletes a table and all of its items. After a <code>DeleteTable</code> request, the specified table is in the <code>DELETING</code> state until DynamoDB completes the deletion. If the table is in the <code>ACTIVE</code> state, you can delete it. If a table is in <code>CREATING</code> or <code>UPDATING</code> states, then DynamoDB returns a <code>ResourceInUseException</code>. If the specified table does not exist, DynamoDB returns a <code>ResourceNotFoundException</code>. If table is already in the <code>DELETING</code> state, no error is returned. </p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> of global tables. </p> </important> <note> <p>DynamoDB might continue to accept data read and write operations, such as <code>GetItem</code> and <code>PutItem</code>, on a table in the <code>DELETING</code> state until the table deletion is complete.</p> </note> <p>When you delete a table, any indexes on that table are also deleted.</p> <p>If you have DynamoDB Streams enabled on the table, then the corresponding stream on that table goes into the <code>DISABLED</code> state, and the stream is automatically deleted after 24 hours.</p> <p>Use the <code>DescribeTable</code> action to check the status of the table. </p>
* [DescribeBackup](#describebackup) - <p>Describes an existing backup of a table.</p> <p>You can call <code>DescribeBackup</code> at a maximum rate of 10 times per second.</p>
* [DescribeContinuousBackups](#describecontinuousbackups) - <p>Checks the status of continuous backups and point in time recovery on the specified table. Continuous backups are <code>ENABLED</code> on all tables at table creation. If point in time recovery is enabled, <code>PointInTimeRecoveryStatus</code> will be set to ENABLED.</p> <p> After continuous backups and point in time recovery are enabled, you can restore to any point in time within <code>EarliestRestorableDateTime</code> and <code>LatestRestorableDateTime</code>. </p> <p> <code>LatestRestorableDateTime</code> is typically 5 minutes before the current time. You can restore your table to any point in time during the last 35 days. </p> <p>You can call <code>DescribeContinuousBackups</code> at a maximum rate of 10 times per second.</p>
* [DescribeContributorInsights](#describecontributorinsights) - Returns information about contributor insights for a given table or global secondary index.
* [DescribeEndpoints](#describeendpoints) - Returns the regional endpoint information. This action must be included in your VPC endpoint policies, or access to the DescribeEndpoints API will be denied. For more information on policy permissions, please see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/inter-network-traffic-privacy.html#inter-network-traffic-DescribeEndpoints">Internetwork traffic privacy</a>.
* [DescribeExport](#describeexport) - Describes an existing table export.
* [DescribeGlobalTable](#describeglobaltable) - <p>Returns information about the specified global table.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29 (Legacy)</a> of global tables. We recommend using <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> when creating new global tables, as it provides greater flexibility, higher efficiency and consumes less write capacity than 2017.11.29 (Legacy). To determine which version you are using, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.DetermineVersion.html">Determining the version</a>. To update existing global tables from version 2017.11.29 (Legacy) to version 2019.11.21 (Current), see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_upgrade.html"> Updating global tables</a>. </p> </important>
* [DescribeGlobalTableSettings](#describeglobaltablesettings) - <p>Describes Region-specific settings for a global table.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29 (Legacy)</a> of global tables. We recommend using <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> when creating new global tables, as it provides greater flexibility, higher efficiency and consumes less write capacity than 2017.11.29 (Legacy). To determine which version you are using, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.DetermineVersion.html">Determining the version</a>. To update existing global tables from version 2017.11.29 (Legacy) to version 2019.11.21 (Current), see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_upgrade.html"> Updating global tables</a>. </p> </important>
* [DescribeImport](#describeimport) -  Represents the properties of the import. 
* [DescribeKinesisStreamingDestination](#describekinesisstreamingdestination) - Returns information about the status of Kinesis streaming.
* [DescribeLimits](#describelimits) - <p>Returns the current provisioned-capacity quotas for your Amazon Web Services account in a Region, both for the Region as a whole and for any one DynamoDB table that you create there.</p> <p>When you establish an Amazon Web Services account, the account has initial quotas on the maximum read capacity units and write capacity units that you can provision across all of your DynamoDB tables in a given Region. Also, there are per-table quotas that apply when you create a table there. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Service, Account, and Table Quotas</a> page in the <i>Amazon DynamoDB Developer Guide</i>.</p> <p>Although you can increase these quotas by filing a case at <a href="https://console.aws.amazon.com/support/home#/">Amazon Web Services Support Center</a>, obtaining the increase is not instantaneous. The <code>DescribeLimits</code> action lets you write code to compare the capacity you are currently using to those quotas imposed by your account so that you have enough time to apply for an increase before you hit a quota.</p> <p>For example, you could use one of the Amazon Web Services SDKs to do the following:</p> <ol> <li> <p>Call <code>DescribeLimits</code> for a particular Region to obtain your current account quotas on provisioned capacity there.</p> </li> <li> <p>Create a variable to hold the aggregate read capacity units provisioned for all your tables in that Region, and one to hold the aggregate write capacity units. Zero them both.</p> </li> <li> <p>Call <code>ListTables</code> to obtain a list of all your DynamoDB tables.</p> </li> <li> <p>For each table name listed by <code>ListTables</code>, do the following:</p> <ul> <li> <p>Call <code>DescribeTable</code> with the table name.</p> </li> <li> <p>Use the data returned by <code>DescribeTable</code> to add the read capacity units and write capacity units provisioned for the table itself to your variables.</p> </li> <li> <p>If the table has one or more global secondary indexes (GSIs), loop over these GSIs and add their provisioned capacity values to your variables as well.</p> </li> </ul> </li> <li> <p>Report the account quotas for that Region returned by <code>DescribeLimits</code>, along with the total current provisioned capacity levels you have calculated.</p> </li> </ol> <p>This will let you see whether you are getting close to your account-level quotas.</p> <p>The per-table quotas apply only when you are creating a new table. They restrict the sum of the provisioned capacity of the new table itself and all its global secondary indexes.</p> <p>For existing tables and their GSIs, DynamoDB doesn't let you increase provisioned capacity extremely rapidly, but the only quota that applies is that the aggregate provisioned capacity over all your tables and GSIs cannot exceed either of the per-account quotas.</p> <note> <p> <code>DescribeLimits</code> should only be called periodically. You can expect throttling errors if you call it more than once in a minute.</p> </note> <p>The <code>DescribeLimits</code> Request element has no content.</p>
* [DescribeTable](#describetable) - <p>Returns information about the table, including the current status of the table, when it was created, the primary key schema, and any indexes on the table.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> of global tables. </p> </important> <note> <p>If you issue a <code>DescribeTable</code> request immediately after a <code>CreateTable</code> request, DynamoDB might return a <code>ResourceNotFoundException</code>. This is because <code>DescribeTable</code> uses an eventually consistent query, and the metadata for your table might not be available at that moment. Wait for a few seconds, and then try the <code>DescribeTable</code> request again.</p> </note>
* [DescribeTableReplicaAutoScaling](#describetablereplicaautoscaling) - <p>Describes auto scaling settings across replicas of the global table at once.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> of global tables.</p> </important>
* [DescribeTimeToLive](#describetimetolive) - Gives a description of the Time to Live (TTL) status on the specified table. 
* [DisableKinesisStreamingDestination](#disablekinesisstreamingdestination) - Stops replication from the DynamoDB table to the Kinesis data stream. This is done without deleting either of the resources.
* [EnableKinesisStreamingDestination](#enablekinesisstreamingdestination) - Starts table data replication to the specified Kinesis data stream at a timestamp chosen during the enable workflow. If this operation doesn't return results immediately, use DescribeKinesisStreamingDestination to check if streaming to the Kinesis data stream is ACTIVE.
* [ExecuteStatement](#executestatement) - <p>This operation allows you to perform reads and singleton writes on data stored in DynamoDB, using PartiQL.</p> <p>For PartiQL reads (<code>SELECT</code> statement), if the total number of processed items exceeds the maximum dataset size limit of 1 MB, the read stops and results are returned to the user as a <code>LastEvaluatedKey</code> value to continue the read in a subsequent operation. If the filter criteria in <code>WHERE</code> clause does not match any data, the read will return an empty result set.</p> <p>A single <code>SELECT</code> statement response can return up to the maximum number of items (if using the Limit parameter) or a maximum of 1 MB of data (and then apply any filtering to the results using <code>WHERE</code> clause). If <code>LastEvaluatedKey</code> is present in the response, you need to paginate the result set. If <code>NextToken</code> is present, you need to paginate the result set and include <code>NextToken</code>.</p>
* [ExecuteTransaction](#executetransaction) - <p>This operation allows you to perform transactional reads or writes on data stored in DynamoDB, using PartiQL.</p> <note> <p>The entire transaction must consist of either read statements or write statements, you cannot mix both in one transaction. The EXISTS function is an exception and can be used to check the condition of specific attributes of the item in a similar manner to <code>ConditionCheck</code> in the <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/transaction-apis.html#transaction-apis-txwriteitems">TransactWriteItems</a> API.</p> </note>
* [ExportTableToPointInTime](#exporttabletopointintime) - Exports table data to an S3 bucket. The table must have point in time recovery enabled, and you can export data from any time within the point in time recovery window.
* [GetItem](#getitem) - <p>The <code>GetItem</code> operation returns a set of attributes for the item with the given primary key. If there is no matching item, <code>GetItem</code> does not return any data and there will be no <code>Item</code> element in the response.</p> <p> <code>GetItem</code> provides an eventually consistent read by default. If your application requires a strongly consistent read, set <code>ConsistentRead</code> to <code>true</code>. Although a strongly consistent read might take more time than an eventually consistent read, it always returns the last updated value.</p>
* [ImportTable](#importtable) -  Imports table data from an S3 bucket. 
* [ListBackups](#listbackups) - <p>List backups associated with an Amazon Web Services account. To list backups for a given table, specify <code>TableName</code>. <code>ListBackups</code> returns a paginated list of results with at most 1 MB worth of items in a page. You can also specify a maximum number of entries to be returned in a page.</p> <p>In the request, start time is inclusive, but end time is exclusive. Note that these boundaries are for the time at which the original backup was requested.</p> <p>You can call <code>ListBackups</code> a maximum of five times per second.</p>
* [ListContributorInsights](#listcontributorinsights) - Returns a list of ContributorInsightsSummary for a table and all its global secondary indexes.
* [ListExports](#listexports) - Lists completed exports within the past 90 days.
* [ListGlobalTables](#listglobaltables) - <p>Lists all global tables that have a replica in the specified Region.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29 (Legacy)</a> of global tables. We recommend using <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> when creating new global tables, as it provides greater flexibility, higher efficiency and consumes less write capacity than 2017.11.29 (Legacy). To determine which version you are using, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.DetermineVersion.html">Determining the version</a>. To update existing global tables from version 2017.11.29 (Legacy) to version 2019.11.21 (Current), see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_upgrade.html"> Updating global tables</a>. </p> </important>
* [ListImports](#listimports) -  Lists completed imports within the past 90 days. 
* [ListTables](#listtables) - Returns an array of table names associated with the current account and endpoint. The output from <code>ListTables</code> is paginated, with each page returning a maximum of 100 table names.
* [ListTagsOfResource](#listtagsofresource) - <p>List all tags on an Amazon DynamoDB resource. You can call ListTagsOfResource up to 10 times per second, per account.</p> <p>For an overview on tagging DynamoDB resources, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tagging.html">Tagging for DynamoDB</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
* [PutItem](#putitem) - <p>Creates a new item, or replaces an old item with a new item. If an item that has the same primary key as the new item already exists in the specified table, the new item completely replaces the existing item. You can perform a conditional put operation (add a new item if one with the specified primary key doesn't exist), or replace an existing item if it has certain attribute values. You can return the item's attribute values in the same operation, using the <code>ReturnValues</code> parameter.</p> <p>When you add an item, the primary key attributes are the only required attributes. </p> <p>Empty String and Binary attribute values are allowed. Attribute values of type String and Binary must have a length greater than zero if the attribute is used as a key attribute for a table or index. Set type attributes cannot be empty. </p> <p>Invalid Requests with empty values will be rejected with a <code>ValidationException</code> exception.</p> <note> <p>To prevent a new item from replacing an existing item, use a conditional expression that contains the <code>attribute_not_exists</code> function with the name of the attribute being used as the partition key for the table. Since every record must contain that attribute, the <code>attribute_not_exists</code> function will only succeed if no matching item exists.</p> </note> <p>For more information about <code>PutItem</code>, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithItems.html">Working with Items</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
* [Query](#query) - <p>You must provide the name of the partition key attribute and a single value for that attribute. <code>Query</code> returns all items with that partition key value. Optionally, you can provide a sort key attribute and use a comparison operator to refine the search results.</p> <p>Use the <code>KeyConditionExpression</code> parameter to provide a specific value for the partition key. The <code>Query</code> operation will return all of the items from the table or index with that partition key value. You can optionally narrow the scope of the <code>Query</code> operation by specifying a sort key value and a comparison operator in <code>KeyConditionExpression</code>. To further refine the <code>Query</code> results, you can optionally provide a <code>FilterExpression</code>. A <code>FilterExpression</code> determines which items within the results should be returned to you. All of the other results are discarded. </p> <p> A <code>Query</code> operation always returns a result set. If no matching items are found, the result set will be empty. Queries that do not return results consume the minimum number of read capacity units for that type of read operation. </p> <note> <p> DynamoDB calculates the number of read capacity units consumed based on item size, not on the amount of data that is returned to an application. The number of capacity units consumed will be the same whether you request all of the attributes (the default behavior) or just some of them (using a projection expression). The number will also be the same whether or not you use a <code>FilterExpression</code>. </p> </note> <p> <code>Query</code> results are always sorted by the sort key value. If the data type of the sort key is Number, the results are returned in numeric order; otherwise, the results are returned in order of UTF-8 bytes. By default, the sort order is ascending. To reverse the order, set the <code>ScanIndexForward</code> parameter to false. </p> <p> A single <code>Query</code> operation will read up to the maximum number of items set (if using the <code>Limit</code> parameter) or a maximum of 1 MB of data and then apply any filtering to the results using <code>FilterExpression</code>. If <code>LastEvaluatedKey</code> is present in the response, you will need to paginate the result set. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Query.html#Query.Pagination">Paginating the Results</a> in the <i>Amazon DynamoDB Developer Guide</i>. </p> <p> <code>FilterExpression</code> is applied after a <code>Query</code> finishes, but before the results are returned. A <code>FilterExpression</code> cannot contain partition key or sort key attributes. You need to specify those attributes in the <code>KeyConditionExpression</code>. </p> <note> <p> A <code>Query</code> operation can return an empty result set and a <code>LastEvaluatedKey</code> if all the items read for the page of results are filtered out. </p> </note> <p>You can query a table, a local secondary index, or a global secondary index. For a query on a table or on a local secondary index, you can set the <code>ConsistentRead</code> parameter to <code>true</code> and obtain a strongly consistent result. Global secondary indexes support eventually consistent reads only, so do not specify <code>ConsistentRead</code> when querying a global secondary index.</p>
* [RestoreTableFromBackup](#restoretablefrombackup) - <p>Creates a new table from an existing backup. Any number of users can execute up to 50 concurrent restores (any type of restore) in a given account. </p> <p>You can call <code>RestoreTableFromBackup</code> at a maximum rate of 10 times per second.</p> <p>You must manually set up the following on the restored table:</p> <ul> <li> <p>Auto scaling policies</p> </li> <li> <p>IAM policies</p> </li> <li> <p>Amazon CloudWatch metrics and alarms</p> </li> <li> <p>Tags</p> </li> <li> <p>Stream settings</p> </li> <li> <p>Time to Live (TTL) settings</p> </li> </ul>
* [RestoreTableToPointInTime](#restoretabletopointintime) - <p>Restores the specified table to the specified point in time within <code>EarliestRestorableDateTime</code> and <code>LatestRestorableDateTime</code>. You can restore your table to any point in time during the last 35 days. Any number of users can execute up to 4 concurrent restores (any type of restore) in a given account. </p> <p> When you restore using point in time recovery, DynamoDB restores your table data to the state based on the selected date and time (day:hour:minute:second) to a new table. </p> <p> Along with data, the following are also included on the new restored table using point in time recovery: </p> <ul> <li> <p>Global secondary indexes (GSIs)</p> </li> <li> <p>Local secondary indexes (LSIs)</p> </li> <li> <p>Provisioned read and write capacity</p> </li> <li> <p>Encryption settings</p> <important> <p> All these settings come from the current settings of the source table at the time of restore. </p> </important> </li> </ul> <p>You must manually set up the following on the restored table:</p> <ul> <li> <p>Auto scaling policies</p> </li> <li> <p>IAM policies</p> </li> <li> <p>Amazon CloudWatch metrics and alarms</p> </li> <li> <p>Tags</p> </li> <li> <p>Stream settings</p> </li> <li> <p>Time to Live (TTL) settings</p> </li> <li> <p>Point in time recovery settings</p> </li> </ul>
* [Scan](#scan) - <p>The <code>Scan</code> operation returns one or more items and item attributes by accessing every item in a table or a secondary index. To have DynamoDB return fewer items, you can provide a <code>FilterExpression</code> operation.</p> <p>If the total number of scanned items exceeds the maximum dataset size limit of 1 MB, the scan stops and results are returned to the user as a <code>LastEvaluatedKey</code> value to continue the scan in a subsequent operation. The results also include the number of items exceeding the limit. A scan can result in no table data meeting the filter criteria. </p> <p>A single <code>Scan</code> operation reads up to the maximum number of items set (if using the <code>Limit</code> parameter) or a maximum of 1 MB of data and then apply any filtering to the results using <code>FilterExpression</code>. If <code>LastEvaluatedKey</code> is present in the response, you need to paginate the result set. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Scan.html#Scan.Pagination">Paginating the Results</a> in the <i>Amazon DynamoDB Developer Guide</i>. </p> <p> <code>Scan</code> operations proceed sequentially; however, for faster performance on a large table or secondary index, applications can request a parallel <code>Scan</code> operation by providing the <code>Segment</code> and <code>TotalSegments</code> parameters. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Scan.html#Scan.ParallelScan">Parallel Scan</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> <p> <code>Scan</code> uses eventually consistent reads when accessing the data in a table; therefore, the result set might not include the changes to data in the table immediately before the operation began. If you need a consistent copy of the data, as of the time that the <code>Scan</code> begins, you can set the <code>ConsistentRead</code> parameter to <code>true</code>.</p>
* [TagResource](#tagresource) - <p>Associate a set of tags with an Amazon DynamoDB resource. You can then activate these user-defined tags so that they appear on the Billing and Cost Management console for cost allocation tracking. You can call TagResource up to five times per second, per account. </p> <p>For an overview on tagging DynamoDB resources, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tagging.html">Tagging for DynamoDB</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
* [TransactGetItems](#transactgetitems) - <p> <code>TransactGetItems</code> is a synchronous operation that atomically retrieves multiple items from one or more tables (but not from indexes) in a single account and Region. A <code>TransactGetItems</code> call can contain up to 100 <code>TransactGetItem</code> objects, each of which contains a <code>Get</code> structure that specifies an item to retrieve from a table in the account and Region. A call to <code>TransactGetItems</code> cannot retrieve items from tables in more than one Amazon Web Services account or Region. The aggregate size of the items in the transaction cannot exceed 4 MB.</p> <p>DynamoDB rejects the entire <code>TransactGetItems</code> request if any of the following is true:</p> <ul> <li> <p>A conflicting operation is in the process of updating an item to be read.</p> </li> <li> <p>There is insufficient provisioned capacity for the transaction to be completed.</p> </li> <li> <p>There is a user error, such as an invalid data format.</p> </li> <li> <p>The aggregate size of the items in the transaction exceeded 4 MB.</p> </li> </ul>
* [TransactWriteItems](#transactwriteitems) - <p> <code>TransactWriteItems</code> is a synchronous write operation that groups up to 100 action requests. These actions can target items in different tables, but not in different Amazon Web Services accounts or Regions, and no two actions can target the same item. For example, you cannot both <code>ConditionCheck</code> and <code>Update</code> the same item. The aggregate size of the items in the transaction cannot exceed 4 MB.</p> <p>The actions are completed atomically so that either all of them succeed, or all of them fail. They are defined by the following objects:</p> <ul> <li> <p> <code>Put</code>  —   Initiates a <code>PutItem</code> operation to write a new item. This structure specifies the primary key of the item to be written, the name of the table to write it in, an optional condition expression that must be satisfied for the write to succeed, a list of the item's attributes, and a field indicating whether to retrieve the item's attributes if the condition is not met.</p> </li> <li> <p> <code>Update</code>  —   Initiates an <code>UpdateItem</code> operation to update an existing item. This structure specifies the primary key of the item to be updated, the name of the table where it resides, an optional condition expression that must be satisfied for the update to succeed, an expression that defines one or more attributes to be updated, and a field indicating whether to retrieve the item's attributes if the condition is not met.</p> </li> <li> <p> <code>Delete</code>  —   Initiates a <code>DeleteItem</code> operation to delete an existing item. This structure specifies the primary key of the item to be deleted, the name of the table where it resides, an optional condition expression that must be satisfied for the deletion to succeed, and a field indicating whether to retrieve the item's attributes if the condition is not met.</p> </li> <li> <p> <code>ConditionCheck</code>  —   Applies a condition to an item that is not being modified by the transaction. This structure specifies the primary key of the item to be checked, the name of the table where it resides, a condition expression that must be satisfied for the transaction to succeed, and a field indicating whether to retrieve the item's attributes if the condition is not met.</p> </li> </ul> <p>DynamoDB rejects the entire <code>TransactWriteItems</code> request if any of the following is true:</p> <ul> <li> <p>A condition in one of the condition expressions is not met.</p> </li> <li> <p>An ongoing operation is in the process of updating the same item.</p> </li> <li> <p>There is insufficient provisioned capacity for the transaction to be completed.</p> </li> <li> <p>An item size becomes too large (bigger than 400 KB), a local secondary index (LSI) becomes too large, or a similar validation error occurs because of changes made by the transaction.</p> </li> <li> <p>The aggregate size of the items in the transaction exceeds 4 MB.</p> </li> <li> <p>There is a user error, such as an invalid data format.</p> </li> </ul>
* [UntagResource](#untagresource) - <p>Removes the association of tags from an Amazon DynamoDB resource. You can call <code>UntagResource</code> up to five times per second, per account. </p> <p>For an overview on tagging DynamoDB resources, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tagging.html">Tagging for DynamoDB</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
* [UpdateContinuousBackups](#updatecontinuousbackups) - <p> <code>UpdateContinuousBackups</code> enables or disables point in time recovery for the specified table. A successful <code>UpdateContinuousBackups</code> call returns the current <code>ContinuousBackupsDescription</code>. Continuous backups are <code>ENABLED</code> on all tables at table creation. If point in time recovery is enabled, <code>PointInTimeRecoveryStatus</code> will be set to ENABLED.</p> <p> Once continuous backups and point in time recovery are enabled, you can restore to any point in time within <code>EarliestRestorableDateTime</code> and <code>LatestRestorableDateTime</code>. </p> <p> <code>LatestRestorableDateTime</code> is typically 5 minutes before the current time. You can restore your table to any point in time during the last 35 days. </p>
* [UpdateContributorInsights](#updatecontributorinsights) - Updates the status for contributor insights for a specific table or index. CloudWatch Contributor Insights for DynamoDB graphs display the partition key and (if applicable) sort key of frequently accessed items and frequently throttled items in plaintext. If you require the use of Amazon Web Services Key Management Service (KMS) to encrypt this table’s partition key and sort key data with an Amazon Web Services managed key or customer managed key, you should not enable CloudWatch Contributor Insights for DynamoDB for this table.
* [UpdateGlobalTable](#updateglobaltable) - <p>Adds or removes replicas in the specified global table. The global table must already exist to be able to use this operation. Any replica to be added must be empty, have the same name as the global table, have the same key schema, have DynamoDB Streams enabled, and have the same provisioned and maximum write capacity units.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29 (Legacy)</a> of global tables. We recommend using <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> when creating new global tables, as it provides greater flexibility, higher efficiency and consumes less write capacity than 2017.11.29 (Legacy). To determine which version you are using, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.DetermineVersion.html">Determining the version</a>. To update existing global tables from version 2017.11.29 (Legacy) to version 2019.11.21 (Current), see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_upgrade.html"> Updating global tables</a>. </p> </important> <note> <p> This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29</a> of global tables. If you are using global tables <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21</a> you can use <a href="https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTable.html">DescribeTable</a> instead. </p> <p> Although you can use <code>UpdateGlobalTable</code> to add replicas and remove replicas in a single request, for simplicity we recommend that you issue separate requests for adding or removing replicas. </p> </note> <p> If global secondary indexes are specified, then the following conditions must also be met: </p> <ul> <li> <p> The global secondary indexes must have the same name. </p> </li> <li> <p> The global secondary indexes must have the same hash key and sort key (if present). </p> </li> <li> <p> The global secondary indexes must have the same provisioned and maximum write capacity units. </p> </li> </ul>
* [UpdateGlobalTableSettings](#updateglobaltablesettings) - <p>Updates settings for a global table.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29 (Legacy)</a> of global tables. We recommend using <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> when creating new global tables, as it provides greater flexibility, higher efficiency and consumes less write capacity than 2017.11.29 (Legacy). To determine which version you are using, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.DetermineVersion.html">Determining the version</a>. To update existing global tables from version 2017.11.29 (Legacy) to version 2019.11.21 (Current), see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_upgrade.html"> Updating global tables</a>. </p> </important>
* [UpdateItem](#updateitem) - <p>Edits an existing item's attributes, or adds a new item to the table if it does not already exist. You can put, delete, or add attribute values. You can also perform a conditional update on an existing item (insert a new attribute name-value pair if it doesn't exist, or replace an existing name-value pair if it has certain expected attribute values).</p> <p>You can also return the item's attribute values in the same <code>UpdateItem</code> operation using the <code>ReturnValues</code> parameter.</p>
* [UpdateTable](#updatetable) - <p>Modifies the provisioned throughput settings, global secondary indexes, or DynamoDB Streams settings for a given table.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> of global tables. </p> </important> <p>You can only perform one of the following operations at once:</p> <ul> <li> <p>Modify the provisioned throughput settings of the table.</p> </li> <li> <p>Remove a global secondary index from the table.</p> </li> <li> <p>Create a new global secondary index on the table. After the index begins backfilling, you can use <code>UpdateTable</code> to perform other operations.</p> </li> </ul> <p> <code>UpdateTable</code> is an asynchronous operation; while it is executing, the table status changes from <code>ACTIVE</code> to <code>UPDATING</code>. While it is <code>UPDATING</code>, you cannot issue another <code>UpdateTable</code> request. When the table returns to the <code>ACTIVE</code> state, the <code>UpdateTable</code> operation is complete.</p>
* [UpdateTableReplicaAutoScaling](#updatetablereplicaautoscaling) - <p>Updates auto scaling settings on your global tables at once.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> of global tables. </p> </important>
* [UpdateTimeToLive](#updatetimetolive) - <p>The <code>UpdateTimeToLive</code> method enables or disables Time to Live (TTL) for the specified table. A successful <code>UpdateTimeToLive</code> call returns the current <code>TimeToLiveSpecification</code>. It can take up to one hour for the change to fully process. Any additional <code>UpdateTimeToLive</code> calls for the same table during this one hour duration result in a <code>ValidationException</code>. </p> <p>TTL compares the current time in epoch time format to the time stored in the TTL attribute of an item. If the epoch time value stored in the attribute is less than the current time, the item is marked as expired and subsequently deleted.</p> <note> <p> The epoch time format is the number of seconds elapsed since 12:00:00 AM January 1, 1970 UTC. </p> </note> <p>DynamoDB deletes expired items on a best-effort basis to ensure availability of throughput for other data operations. </p> <important> <p>DynamoDB typically deletes expired items within two days of expiration. The exact duration within which an item gets deleted after expiration is specific to the nature of the workload. Items that have expired and not been deleted will still show up in reads, queries, and scans.</p> </important> <p>As items are deleted, they are removed from any local secondary index and global secondary index immediately in the same eventually consistent way as a standard delete operation.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/TTL.html">Time To Live</a> in the Amazon DynamoDB Developer Guide. </p>

## BatchExecuteStatement

<p>This operation allows you to perform batch reads or writes on data stored in DynamoDB, using PartiQL. Each read statement in a <code>BatchExecuteStatement</code> must specify an equality condition on all key attributes. This enforces that each <code>SELECT</code> statement in a batch returns at most a single item.</p> <note> <p>The entire batch must consist of either read statements or write statements, you cannot mix both in one batch.</p> </note> <important> <p>A HTTP 200 response does not mean that all statements in the BatchExecuteStatement succeeded. Error details for individual statements can be found under the <a href="https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchStatementResponse.html#DDB-Type-BatchStatementResponse-Error">Error</a> field of the <code>BatchStatementResponse</code> for each statement.</p> </important>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BatchExecuteStatement(ctx, operations.BatchExecuteStatementRequest{
        BatchExecuteStatementInput: shared.BatchExecuteStatementInput{
            ReturnConsumedCapacity: shared.ReturnConsumedCapacityEnumTotal.ToPointer(),
            Statements: []shared.BatchStatementRequest{
                shared.BatchStatementRequest{
                    ConsistentRead: sdk.Bool(false),
                    Parameters: []shared.AttributeValue{
                        shared.AttributeValue{
                            B: sdk.String("doloremque"),
                            Bool: sdk.Bool(false),
                            Bs: []string{
                                "ut",
                                "maiores",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "dolore": shared.AttributeValue{},
                                "iusto": shared.AttributeValue{},
                            },
                            N: sdk.String("dicta"),
                            Ns: []string{
                                "enim",
                                "accusamus",
                                "commodi",
                            },
                            Null: sdk.Bool(false),
                            S: sdk.String("repudiandae"),
                            Ss: []string{
                                "ipsum",
                            },
                        },
                    },
                    Statement: "quidem",
                },
                shared.BatchStatementRequest{
                    ConsistentRead: sdk.Bool(false),
                    Parameters: []shared.AttributeValue{
                        shared.AttributeValue{
                            B: sdk.String("excepturi"),
                            Bool: sdk.Bool(false),
                            Bs: []string{
                                "modi",
                                "praesentium",
                                "rem",
                                "voluptates",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "sint": shared.AttributeValue{},
                                "veritatis": shared.AttributeValue{},
                                "itaque": shared.AttributeValue{},
                                "incidunt": shared.AttributeValue{},
                            },
                            N: sdk.String("enim"),
                            Ns: []string{
                                "est",
                            },
                            Null: sdk.Bool(false),
                            S: sdk.String("quibusdam"),
                            Ss: []string{
                                "deserunt",
                            },
                        },
                        shared.AttributeValue{
                            B: sdk.String("distinctio"),
                            Bool: sdk.Bool(false),
                            Bs: []string{
                                "labore",
                                "modi",
                                "qui",
                                "aliquid",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "perferendis": shared.AttributeValue{},
                                "magni": shared.AttributeValue{},
                                "assumenda": shared.AttributeValue{},
                            },
                            N: sdk.String("ipsam"),
                            Ns: []string{
                                "fugit",
                            },
                            Null: sdk.Bool(false),
                            S: sdk.String("dolorum"),
                            Ss: []string{
                                "tempora",
                                "facilis",
                                "tempore",
                            },
                        },
                        shared.AttributeValue{
                            B: sdk.String("labore"),
                            Bool: sdk.Bool(false),
                            Bs: []string{
                                "eum",
                                "non",
                                "eligendi",
                                "sint",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "necessitatibus": shared.AttributeValue{},
                                "sint": shared.AttributeValue{},
                                "officia": shared.AttributeValue{},
                            },
                            N: sdk.String("dolor"),
                            Ns: []string{
                                "a",
                                "dolorum",
                                "in",
                                "in",
                            },
                            Null: sdk.Bool(false),
                            S: sdk.String("illum"),
                            Ss: []string{
                                "rerum",
                                "dicta",
                                "magnam",
                                "cumque",
                            },
                        },
                    },
                    Statement: "facere",
                },
                shared.BatchStatementRequest{
                    ConsistentRead: sdk.Bool(false),
                    Parameters: []shared.AttributeValue{
                        shared.AttributeValue{
                            B: sdk.String("aliquid"),
                            Bool: sdk.Bool(false),
                            Bs: []string{
                                "accusamus",
                                "non",
                                "occaecati",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "delectus": shared.AttributeValue{},
                                "quidem": shared.AttributeValue{},
                                "provident": shared.AttributeValue{},
                                "nam": shared.AttributeValue{},
                            },
                            N: sdk.String("id"),
                            Ns: []string{
                                "deleniti",
                                "sapiente",
                                "amet",
                            },
                            Null: sdk.Bool(false),
                            S: sdk.String("deserunt"),
                            Ss: []string{
                                "vel",
                                "natus",
                            },
                        },
                        shared.AttributeValue{
                            B: sdk.String("omnis"),
                            Bool: sdk.Bool(false),
                            Bs: []string{
                                "perferendis",
                                "nihil",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "id": shared.AttributeValue{},
                                "labore": shared.AttributeValue{},
                                "labore": shared.AttributeValue{},
                            },
                            N: sdk.String("suscipit"),
                            Ns: []string{
                                "nobis",
                                "eum",
                                "vero",
                            },
                            Null: sdk.Bool(false),
                            S: sdk.String("aspernatur"),
                            Ss: []string{
                                "magnam",
                            },
                        },
                    },
                    Statement: "et",
                },
            },
        },
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("ullam"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("quos"),
        XAmzSecurityToken: sdk.String("sint"),
        XAmzSignature: sdk.String("accusantium"),
        XAmzSignedHeaders: sdk.String("mollitia"),
        XAmzTarget: operations.BatchExecuteStatementXAmzTargetEnumDynamoDb20120810BatchExecuteStatement,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchExecuteStatementOutput != nil {
        // handle response
    }
}
```

## BatchGetItem

<p>The <code>BatchGetItem</code> operation returns the attributes of one or more items from one or more tables. You identify requested items by primary key.</p> <p>A single operation can retrieve up to 16 MB of data, which can contain as many as 100 items. <code>BatchGetItem</code> returns a partial result if the response size limit is exceeded, the table's provisioned throughput is exceeded, or an internal processing failure occurs. If a partial result is returned, the operation returns a value for <code>UnprocessedKeys</code>. You can use this value to retry the operation starting with the next item to get.</p> <important> <p>If you request more than 100 items, <code>BatchGetItem</code> returns a <code>ValidationException</code> with the message "Too many items requested for the BatchGetItem call."</p> </important> <p>For example, if you ask to retrieve 100 items, but each individual item is 300 KB in size, the system returns 52 items (so as not to exceed the 16 MB limit). It also returns an appropriate <code>UnprocessedKeys</code> value so you can get the next page of results. If desired, your application can include its own logic to assemble the pages of results into one dataset.</p> <p>If <i>none</i> of the items can be processed due to insufficient provisioned throughput on all of the tables in the request, then <code>BatchGetItem</code> returns a <code>ProvisionedThroughputExceededException</code>. If <i>at least one</i> of the items is successfully processed, then <code>BatchGetItem</code> completes successfully, while returning the keys of the unread items in <code>UnprocessedKeys</code>.</p> <important> <p>If DynamoDB returns any unprocessed items, you should retry the batch operation on those items. However, <i>we strongly recommend that you use an exponential backoff algorithm</i>. If you retry the batch operation immediately, the underlying read or write requests can still fail due to throttling on the individual tables. If you delay the batch operation using exponential backoff, the individual requests in the batch are much more likely to succeed.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ErrorHandling.html#BatchOperations">Batch Operations and Error Handling</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> </important> <p>By default, <code>BatchGetItem</code> performs eventually consistent reads on every table in the request. If you want strongly consistent reads instead, you can set <code>ConsistentRead</code> to <code>true</code> for any or all tables.</p> <p>In order to minimize response latency, <code>BatchGetItem</code> may retrieve items in parallel.</p> <p>When designing your application, keep in mind that DynamoDB does not return items in any particular order. To help parse the response by item, include the primary key values for the items in your request in the <code>ProjectionExpression</code> parameter.</p> <p>If a requested item does not exist, it is not returned in the result. Requests for nonexistent items consume the minimum read capacity units according to the type of read. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.html#CapacityUnitCalculations">Working with Tables</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BatchGetItem(ctx, operations.BatchGetItemRequest{
        BatchGetItemInput: shared.BatchGetItemInput{
            RequestItems: map[string]shared.KeysAndAttributes{
                "mollitia": shared.KeysAndAttributes{
                    AttributesToGet: []string{
                        "eum",
                        "dolor",
                    },
                    ConsistentRead: sdk.Bool(false),
                    ExpressionAttributeNames: map[string]string{
                        "odit": "nemo",
                        "quasi": "iure",
                        "doloribus": "debitis",
                        "eius": "maxime",
                    },
                    Keys: []map[string]shared.AttributeValue{
                        map[string]shared.AttributeValue{
                            "in": shared.AttributeValue{
                                B: sdk.String("architecto"),
                                Bool: sdk.Bool(false),
                                Bs: []string{
                                    "repudiandae",
                                },
                                L: []shared.AttributeValue{
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                },
                                M: map[string]shared.AttributeValue{
                                    "nihil": shared.AttributeValue{},
                                    "repellat": shared.AttributeValue{},
                                    "quibusdam": shared.AttributeValue{},
                                },
                                N: sdk.String("sed"),
                                Ns: []string{
                                    "pariatur",
                                    "accusantium",
                                    "consequuntur",
                                    "praesentium",
                                },
                                Null: sdk.Bool(false),
                                S: sdk.String("natus"),
                                Ss: []string{
                                    "sunt",
                                },
                            },
                            "quo": shared.AttributeValue{
                                B: sdk.String("illum"),
                                Bool: sdk.Bool(false),
                                Bs: []string{
                                    "maxime",
                                    "ea",
                                    "excepturi",
                                    "odit",
                                },
                                L: []shared.AttributeValue{
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                },
                                M: map[string]shared.AttributeValue{
                                    "ab": shared.AttributeValue{},
                                },
                                N: sdk.String("maiores"),
                                Ns: []string{
                                    "ipsam",
                                    "voluptate",
                                    "autem",
                                },
                                Null: sdk.Bool(false),
                                S: sdk.String("nam"),
                                Ss: []string{
                                    "pariatur",
                                },
                            },
                            "nemo": shared.AttributeValue{
                                B: sdk.String("voluptatibus"),
                                Bool: sdk.Bool(false),
                                Bs: []string{
                                    "fugiat",
                                },
                                L: []shared.AttributeValue{
                                    shared.AttributeValue{},
                                },
                                M: map[string]shared.AttributeValue{
                                    "cumque": shared.AttributeValue{},
                                },
                                N: sdk.String("corporis"),
                                Ns: []string{
                                    "libero",
                                    "nobis",
                                    "dolores",
                                    "quis",
                                },
                                Null: sdk.Bool(false),
                                S: sdk.String("totam"),
                                Ss: []string{
                                    "eaque",
                                    "quis",
                                },
                            },
                        },
                        map[string]shared.AttributeValue{
                            "eos": shared.AttributeValue{
                                B: sdk.String("perferendis"),
                                Bool: sdk.Bool(false),
                                Bs: []string{
                                    "minus",
                                },
                                L: []shared.AttributeValue{
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                },
                                M: map[string]shared.AttributeValue{
                                    "vero": shared.AttributeValue{},
                                },
                                N: sdk.String("nostrum"),
                                Ns: []string{
                                    "recusandae",
                                    "omnis",
                                    "facilis",
                                    "perspiciatis",
                                },
                                Null: sdk.Bool(false),
                                S: sdk.String("voluptatem"),
                                Ss: []string{
                                    "consequuntur",
                                    "blanditiis",
                                    "error",
                                    "eaque",
                                },
                            },
                        },
                        map[string]shared.AttributeValue{
                            "rerum": shared.AttributeValue{
                                B: sdk.String("adipisci"),
                                Bool: sdk.Bool(false),
                                Bs: []string{
                                    "earum",
                                    "modi",
                                    "iste",
                                    "dolorum",
                                },
                                L: []shared.AttributeValue{
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                },
                                M: map[string]shared.AttributeValue{
                                    "provident": shared.AttributeValue{},
                                    "nobis": shared.AttributeValue{},
                                    "libero": shared.AttributeValue{},
                                    "delectus": shared.AttributeValue{},
                                },
                                N: sdk.String("quaerat"),
                                Ns: []string{
                                    "aliquid",
                                    "dolorem",
                                    "dolorem",
                                },
                                Null: sdk.Bool(false),
                                S: sdk.String("dolor"),
                                Ss: []string{
                                    "ipsum",
                                },
                            },
                            "hic": shared.AttributeValue{
                                B: sdk.String("excepturi"),
                                Bool: sdk.Bool(false),
                                Bs: []string{
                                    "voluptate",
                                    "dignissimos",
                                    "reiciendis",
                                },
                                L: []shared.AttributeValue{
                                    shared.AttributeValue{},
                                },
                                M: map[string]shared.AttributeValue{
                                    "numquam": shared.AttributeValue{},
                                    "veritatis": shared.AttributeValue{},
                                    "ipsa": shared.AttributeValue{},
                                },
                                N: sdk.String("ipsa"),
                                Ns: []string{
                                    "odio",
                                    "quaerat",
                                },
                                Null: sdk.Bool(false),
                                S: sdk.String("accusamus"),
                                Ss: []string{
                                    "voluptatibus",
                                    "voluptas",
                                    "natus",
                                },
                            },
                            "eos": shared.AttributeValue{
                                B: sdk.String("atque"),
                                Bool: sdk.Bool(false),
                                Bs: []string{
                                    "fugiat",
                                },
                                L: []shared.AttributeValue{
                                    shared.AttributeValue{},
                                },
                                M: map[string]shared.AttributeValue{
                                    "dolorum": shared.AttributeValue{},
                                    "iusto": shared.AttributeValue{},
                                    "voluptate": shared.AttributeValue{},
                                },
                                N: sdk.String("dolorum"),
                                Ns: []string{
                                    "omnis",
                                    "necessitatibus",
                                    "distinctio",
                                },
                                Null: sdk.Bool(false),
                                S: sdk.String("asperiores"),
                                Ss: []string{
                                    "ipsum",
                                    "voluptate",
                                },
                            },
                        },
                    },
                    ProjectionExpression: sdk.String("id"),
                },
                "saepe": shared.KeysAndAttributes{
                    AttributesToGet: []string{
                        "aspernatur",
                        "perferendis",
                    },
                    ConsistentRead: sdk.Bool(false),
                    ExpressionAttributeNames: map[string]string{
                        "optio": "accusamus",
                    },
                    Keys: []map[string]shared.AttributeValue{
                        map[string]shared.AttributeValue{
                            "suscipit": shared.AttributeValue{
                                B: sdk.String("deserunt"),
                                Bool: sdk.Bool(false),
                                Bs: []string{
                                    "minima",
                                    "repellendus",
                                    "totam",
                                },
                                L: []shared.AttributeValue{
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                },
                                M: map[string]shared.AttributeValue{
                                    "at": shared.AttributeValue{},
                                },
                                N: sdk.String("quaerat"),
                                Ns: []string{
                                    "vel",
                                    "quod",
                                },
                                Null: sdk.Bool(false),
                                S: sdk.String("officiis"),
                                Ss: []string{
                                    "dolorum",
                                },
                            },
                            "a": shared.AttributeValue{
                                B: sdk.String("esse"),
                                Bool: sdk.Bool(false),
                                Bs: []string{
                                    "iusto",
                                    "ipsum",
                                    "quisquam",
                                },
                                L: []shared.AttributeValue{
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                },
                                M: map[string]shared.AttributeValue{
                                    "tempore": shared.AttributeValue{},
                                },
                                N: sdk.String("accusamus"),
                                Ns: []string{
                                    "enim",
                                    "dolorem",
                                },
                                Null: sdk.Bool(false),
                                S: sdk.String("sapiente"),
                                Ss: []string{
                                    "nihil",
                                    "sit",
                                    "expedita",
                                },
                            },
                            "neque": shared.AttributeValue{
                                B: sdk.String("sed"),
                                Bool: sdk.Bool(false),
                                Bs: []string{
                                    "libero",
                                    "voluptas",
                                },
                                L: []shared.AttributeValue{
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                },
                                M: map[string]shared.AttributeValue{
                                    "ipsum": shared.AttributeValue{},
                                    "incidunt": shared.AttributeValue{},
                                },
                                N: sdk.String("qui"),
                                Ns: []string{
                                    "maxime",
                                    "pariatur",
                                    "soluta",
                                },
                                Null: sdk.Bool(false),
                                S: sdk.String("dicta"),
                                Ss: []string{
                                    "totam",
                                    "incidunt",
                                    "aspernatur",
                                },
                            },
                            "dolores": shared.AttributeValue{
                                B: sdk.String("distinctio"),
                                Bool: sdk.Bool(false),
                                Bs: []string{
                                    "aliquid",
                                    "quam",
                                    "molestias",
                                },
                                L: []shared.AttributeValue{
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                },
                                M: map[string]shared.AttributeValue{
                                    "neque": shared.AttributeValue{},
                                },
                                N: sdk.String("fugit"),
                                Ns: []string{
                                    "odio",
                                },
                                Null: sdk.Bool(false),
                                S: sdk.String("sunt"),
                                Ss: []string{
                                    "nam",
                                    "hic",
                                },
                            },
                        },
                        map[string]shared.AttributeValue{
                            "cumque": shared.AttributeValue{
                                B: sdk.String("soluta"),
                                Bool: sdk.Bool(false),
                                Bs: []string{
                                    "et",
                                    "saepe",
                                    "ipsum",
                                },
                                L: []shared.AttributeValue{
                                    shared.AttributeValue{},
                                },
                                M: map[string]shared.AttributeValue{
                                    "quos": shared.AttributeValue{},
                                    "tempore": shared.AttributeValue{},
                                    "cupiditate": shared.AttributeValue{},
                                },
                                N: sdk.String("aperiam"),
                                Ns: []string{
                                    "dolorem",
                                    "dolore",
                                    "labore",
                                    "adipisci",
                                },
                                Null: sdk.Bool(false),
                                S: sdk.String("dolorum"),
                                Ss: []string{
                                    "quae",
                                },
                            },
                        },
                    },
                    ProjectionExpression: sdk.String("aut"),
                },
                "quas": shared.KeysAndAttributes{
                    AttributesToGet: []string{
                        "consequatur",
                        "est",
                        "repellendus",
                        "porro",
                    },
                    ConsistentRead: sdk.Bool(false),
                    ExpressionAttributeNames: map[string]string{
                        "ut": "facilis",
                        "cupiditate": "qui",
                        "quae": "laudantium",
                        "odio": "occaecati",
                    },
                    Keys: []map[string]shared.AttributeValue{
                        map[string]shared.AttributeValue{
                            "vero": shared.AttributeValue{
                                B: sdk.String("omnis"),
                                Bool: sdk.Bool(false),
                                Bs: []string{
                                    "ipsum",
                                    "delectus",
                                },
                                L: []shared.AttributeValue{
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                },
                                M: map[string]shared.AttributeValue{
                                    "vero": shared.AttributeValue{},
                                },
                                N: sdk.String("tenetur"),
                                Ns: []string{
                                    "hic",
                                    "distinctio",
                                },
                                Null: sdk.Bool(false),
                                S: sdk.String("quod"),
                                Ss: []string{
                                    "similique",
                                    "facilis",
                                },
                            },
                            "vero": shared.AttributeValue{
                                B: sdk.String("ducimus"),
                                Bool: sdk.Bool(false),
                                Bs: []string{
                                    "quibusdam",
                                    "illum",
                                },
                                L: []shared.AttributeValue{
                                    shared.AttributeValue{},
                                },
                                M: map[string]shared.AttributeValue{
                                    "impedit": shared.AttributeValue{},
                                    "aut": shared.AttributeValue{},
                                    "voluptatibus": shared.AttributeValue{},
                                },
                                N: sdk.String("exercitationem"),
                                Ns: []string{
                                    "fugit",
                                    "porro",
                                    "maiores",
                                    "doloribus",
                                },
                                Null: sdk.Bool(false),
                                S: sdk.String("iusto"),
                                Ss: []string{
                                    "ducimus",
                                    "alias",
                                    "officia",
                                    "tempora",
                                },
                            },
                            "ipsam": shared.AttributeValue{
                                B: sdk.String("ea"),
                                Bool: sdk.Bool(false),
                                Bs: []string{
                                    "vel",
                                },
                                L: []shared.AttributeValue{
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                },
                                M: map[string]shared.AttributeValue{
                                    "ratione": shared.AttributeValue{},
                                    "ex": shared.AttributeValue{},
                                },
                                N: sdk.String("laudantium"),
                                Ns: []string{
                                    "dolor",
                                },
                                Null: sdk.Bool(false),
                                S: sdk.String("maiores"),
                                Ss: []string{
                                    "ex",
                                },
                            },
                            "nulla": shared.AttributeValue{
                                B: sdk.String("excepturi"),
                                Bool: sdk.Bool(false),
                                Bs: []string{
                                    "nostrum",
                                    "sapiente",
                                    "quisquam",
                                    "saepe",
                                },
                                L: []shared.AttributeValue{
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                },
                                M: map[string]shared.AttributeValue{
                                    "corporis": shared.AttributeValue{},
                                    "veniam": shared.AttributeValue{},
                                    "aliquid": shared.AttributeValue{},
                                    "inventore": shared.AttributeValue{},
                                },
                                N: sdk.String("magnam"),
                                Ns: []string{
                                    "quo",
                                    "consectetur",
                                },
                                Null: sdk.Bool(false),
                                S: sdk.String("recusandae"),
                                Ss: []string{
                                    "minima",
                                },
                            },
                        },
                        map[string]shared.AttributeValue{
                            "a": shared.AttributeValue{
                                B: sdk.String("libero"),
                                Bool: sdk.Bool(false),
                                Bs: []string{
                                    "aut",
                                },
                                L: []shared.AttributeValue{
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                },
                                M: map[string]shared.AttributeValue{
                                    "aliquam": shared.AttributeValue{},
                                    "fugit": shared.AttributeValue{},
                                    "accusamus": shared.AttributeValue{},
                                    "inventore": shared.AttributeValue{},
                                },
                                N: sdk.String("non"),
                                Ns: []string{
                                    "dolorum",
                                },
                                Null: sdk.Bool(false),
                                S: sdk.String("laborum"),
                                Ss: []string{
                                    "velit",
                                    "eum",
                                    "autem",
                                    "nobis",
                                },
                            },
                        },
                        map[string]shared.AttributeValue{
                            "assumenda": shared.AttributeValue{
                                B: sdk.String("nulla"),
                                Bool: sdk.Bool(false),
                                Bs: []string{
                                    "libero",
                                    "quasi",
                                },
                                L: []shared.AttributeValue{
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                },
                                M: map[string]shared.AttributeValue{
                                    "explicabo": shared.AttributeValue{},
                                    "provident": shared.AttributeValue{},
                                },
                                N: sdk.String("ipsa"),
                                Ns: []string{
                                    "magnam",
                                    "odio",
                                },
                                Null: sdk.Bool(false),
                                S: sdk.String("eius"),
                                Ss: []string{
                                    "esse",
                                    "rem",
                                },
                            },
                            "fuga": shared.AttributeValue{
                                B: sdk.String("reprehenderit"),
                                Bool: sdk.Bool(false),
                                Bs: []string{
                                    "fugiat",
                                    "ut",
                                    "eum",
                                },
                                L: []shared.AttributeValue{
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                },
                                M: map[string]shared.AttributeValue{
                                    "eos": shared.AttributeValue{},
                                    "praesentium": shared.AttributeValue{},
                                    "quisquam": shared.AttributeValue{},
                                    "veritatis": shared.AttributeValue{},
                                },
                                N: sdk.String("ipsa"),
                                Ns: []string{
                                    "quidem",
                                    "neque",
                                    "quo",
                                },
                                Null: sdk.Bool(false),
                                S: sdk.String("illum"),
                                Ss: []string{
                                    "fuga",
                                    "eius",
                                    "eos",
                                    "voluptas",
                                },
                            },
                            "ab": shared.AttributeValue{
                                B: sdk.String("cupiditate"),
                                Bool: sdk.Bool(false),
                                Bs: []string{
                                    "tempora",
                                },
                                L: []shared.AttributeValue{
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                },
                                M: map[string]shared.AttributeValue{
                                    "aspernatur": shared.AttributeValue{},
                                    "sequi": shared.AttributeValue{},
                                },
                                N: sdk.String("quo"),
                                Ns: []string{
                                    "recusandae",
                                    "aperiam",
                                },
                                Null: sdk.Bool(false),
                                S: sdk.String("distinctio"),
                                Ss: []string{
                                    "dignissimos",
                                    "inventore",
                                    "nihil",
                                    "totam",
                                },
                            },
                        },
                        map[string]shared.AttributeValue{
                            "aliquam": shared.AttributeValue{
                                B: sdk.String("odio"),
                                Bool: sdk.Bool(false),
                                Bs: []string{
                                    "commodi",
                                    "sapiente",
                                    "dolores",
                                },
                                L: []shared.AttributeValue{
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                },
                                M: map[string]shared.AttributeValue{
                                    "accusantium": shared.AttributeValue{},
                                    "porro": shared.AttributeValue{},
                                },
                                N: sdk.String("eum"),
                                Ns: []string{
                                    "praesentium",
                                    "consequuntur",
                                    "deleniti",
                                },
                                Null: sdk.Bool(false),
                                S: sdk.String("fugit"),
                                Ss: []string{
                                    "mollitia",
                                    "incidunt",
                                    "atque",
                                },
                            },
                            "explicabo": shared.AttributeValue{
                                B: sdk.String("minima"),
                                Bool: sdk.Bool(false),
                                Bs: []string{
                                    "fugit",
                                    "sapiente",
                                },
                                L: []shared.AttributeValue{
                                    shared.AttributeValue{},
                                },
                                M: map[string]shared.AttributeValue{
                                    "explicabo": shared.AttributeValue{},
                                },
                                N: sdk.String("saepe"),
                                Ns: []string{
                                    "atque",
                                    "et",
                                    "esse",
                                },
                                Null: sdk.Bool(false),
                                S: sdk.String("eveniet"),
                                Ss: []string{
                                    "veritatis",
                                    "esse",
                                    "quod",
                                    "nam",
                                },
                            },
                            "vero": shared.AttributeValue{
                                B: sdk.String("aliquid"),
                                Bool: sdk.Bool(false),
                                Bs: []string{
                                    "saepe",
                                },
                                L: []shared.AttributeValue{
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                },
                                M: map[string]shared.AttributeValue{
                                    "molestiae": shared.AttributeValue{},
                                    "rerum": shared.AttributeValue{},
                                    "occaecati": shared.AttributeValue{},
                                },
                                N: sdk.String("minima"),
                                Ns: []string{
                                    "eligendi",
                                    "sit",
                                    "culpa",
                                },
                                Null: sdk.Bool(false),
                                S: sdk.String("tempore"),
                                Ss: []string{
                                    "cumque",
                                },
                            },
                            "consequuntur": shared.AttributeValue{
                                B: sdk.String("consequatur"),
                                Bool: sdk.Bool(false),
                                Bs: []string{
                                    "quaerat",
                                    "sapiente",
                                    "consectetur",
                                    "esse",
                                },
                                L: []shared.AttributeValue{
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                },
                                M: map[string]shared.AttributeValue{
                                    "a": shared.AttributeValue{},
                                    "nulla": shared.AttributeValue{},
                                    "quas": shared.AttributeValue{},
                                },
                                N: sdk.String("esse"),
                                Ns: []string{
                                    "a",
                                },
                                Null: sdk.Bool(false),
                                S: sdk.String("error"),
                                Ss: []string{
                                    "pariatur",
                                    "possimus",
                                    "quia",
                                },
                            },
                        },
                    },
                    ProjectionExpression: sdk.String("eveniet"),
                },
                "asperiores": shared.KeysAndAttributes{
                    AttributesToGet: []string{
                        "veritatis",
                        "consequuntur",
                        "quasi",
                        "similique",
                    },
                    ConsistentRead: sdk.Bool(false),
                    ExpressionAttributeNames: map[string]string{
                        "aliquid": "tenetur",
                        "quae": "earum",
                        "vel": "in",
                    },
                    Keys: []map[string]shared.AttributeValue{
                        map[string]shared.AttributeValue{
                            "illum": shared.AttributeValue{
                                B: sdk.String("soluta"),
                                Bool: sdk.Bool(false),
                                Bs: []string{
                                    "aliquam",
                                },
                                L: []shared.AttributeValue{
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                },
                                M: map[string]shared.AttributeValue{
                                    "ullam": shared.AttributeValue{},
                                },
                                N: sdk.String("reprehenderit"),
                                Ns: []string{
                                    "nisi",
                                    "aut",
                                },
                                Null: sdk.Bool(false),
                                S: sdk.String("voluptatum"),
                                Ss: []string{
                                    "quibusdam",
                                },
                            },
                            "ex": shared.AttributeValue{
                                B: sdk.String("deleniti"),
                                Bool: sdk.Bool(false),
                                Bs: []string{
                                    "dolorum",
                                    "architecto",
                                    "omnis",
                                    "tenetur",
                                },
                                L: []shared.AttributeValue{
                                    shared.AttributeValue{},
                                },
                                M: map[string]shared.AttributeValue{
                                    "et": shared.AttributeValue{},
                                    "voluptate": shared.AttributeValue{},
                                    "ipsa": shared.AttributeValue{},
                                    "minima": shared.AttributeValue{},
                                },
                                N: sdk.String("veritatis"),
                                Ns: []string{
                                    "adipisci",
                                },
                                Null: sdk.Bool(false),
                                S: sdk.String("iste"),
                                Ss: []string{
                                    "accusantium",
                                    "rem",
                                    "aut",
                                    "laudantium",
                                },
                            },
                            "eum": shared.AttributeValue{
                                B: sdk.String("mollitia"),
                                Bool: sdk.Bool(false),
                                Bs: []string{
                                    "corrupti",
                                },
                                L: []shared.AttributeValue{
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                },
                                M: map[string]shared.AttributeValue{
                                    "dolor": shared.AttributeValue{},
                                },
                                N: sdk.String("occaecati"),
                                Ns: []string{
                                    "impedit",
                                    "explicabo",
                                },
                                Null: sdk.Bool(false),
                                S: sdk.String("voluptas"),
                                Ss: []string{
                                    "dignissimos",
                                },
                            },
                        },
                        map[string]shared.AttributeValue{
                            "maiores": shared.AttributeValue{
                                B: sdk.String("natus"),
                                Bool: sdk.Bool(false),
                                Bs: []string{
                                    "voluptatibus",
                                },
                                L: []shared.AttributeValue{
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                },
                                M: map[string]shared.AttributeValue{
                                    "aperiam": shared.AttributeValue{},
                                    "ea": shared.AttributeValue{},
                                    "quaerat": shared.AttributeValue{},
                                    "consequuntur": shared.AttributeValue{},
                                },
                                N: sdk.String("repellendus"),
                                Ns: []string{
                                    "maxime",
                                    "dignissimos",
                                    "officia",
                                },
                                Null: sdk.Bool(false),
                                S: sdk.String("asperiores"),
                                Ss: []string{
                                    "quae",
                                    "quaerat",
                                },
                            },
                        },
                    },
                    ProjectionExpression: sdk.String("porro"),
                },
            },
            ReturnConsumedCapacity: shared.ReturnConsumedCapacityEnumNone.ToPointer(),
        },
        RequestItems: sdk.String("labore"),
        XAmzAlgorithm: sdk.String("ab"),
        XAmzContentSha256: sdk.String("adipisci"),
        XAmzCredential: sdk.String("fuga"),
        XAmzDate: sdk.String("id"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("velit"),
        XAmzSignedHeaders: sdk.String("culpa"),
        XAmzTarget: operations.BatchGetItemXAmzTargetEnumDynamoDb20120810BatchGetItem,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetItemOutput != nil {
        // handle response
    }
}
```

## BatchWriteItem

<p>The <code>BatchWriteItem</code> operation puts or deletes multiple items in one or more tables. A single call to <code>BatchWriteItem</code> can transmit up to 16MB of data over the network, consisting of up to 25 item put or delete operations. While individual items can be up to 400 KB once stored, it's important to note that an item's representation might be greater than 400KB while being sent in DynamoDB's JSON format for the API call. For more details on this distinction, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html">Naming Rules and Data Types</a>.</p> <note> <p> <code>BatchWriteItem</code> cannot update items. If you perform a <code>BatchWriteItem</code> operation on an existing item, that item's values will be overwritten by the operation and it will appear like it was updated. To update items, we recommend you use the <code>UpdateItem</code> action.</p> </note> <p>The individual <code>PutItem</code> and <code>DeleteItem</code> operations specified in <code>BatchWriteItem</code> are atomic; however <code>BatchWriteItem</code> as a whole is not. If any requested operations fail because the table's provisioned throughput is exceeded or an internal processing failure occurs, the failed operations are returned in the <code>UnprocessedItems</code> response parameter. You can investigate and optionally resend the requests. Typically, you would call <code>BatchWriteItem</code> in a loop. Each iteration would check for unprocessed items and submit a new <code>BatchWriteItem</code> request with those unprocessed items until all items have been processed.</p> <p>If <i>none</i> of the items can be processed due to insufficient provisioned throughput on all of the tables in the request, then <code>BatchWriteItem</code> returns a <code>ProvisionedThroughputExceededException</code>.</p> <important> <p>If DynamoDB returns any unprocessed items, you should retry the batch operation on those items. However, <i>we strongly recommend that you use an exponential backoff algorithm</i>. If you retry the batch operation immediately, the underlying read or write requests can still fail due to throttling on the individual tables. If you delay the batch operation using exponential backoff, the individual requests in the batch are much more likely to succeed.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ErrorHandling.html#Programming.Errors.BatchOperations">Batch Operations and Error Handling</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> </important> <p>With <code>BatchWriteItem</code>, you can efficiently write or delete large amounts of data, such as from Amazon EMR, or copy data from another database into DynamoDB. In order to improve performance with these large-scale operations, <code>BatchWriteItem</code> does not behave in the same way as individual <code>PutItem</code> and <code>DeleteItem</code> calls would. For example, you cannot specify conditions on individual put and delete requests, and <code>BatchWriteItem</code> does not return deleted items in the response.</p> <p>If you use a programming language that supports concurrency, you can use threads to write items in parallel. Your application must include the necessary logic to manage the threads. With languages that don't support threading, you must update or delete the specified items one at a time. In both situations, <code>BatchWriteItem</code> performs the specified put and delete operations in parallel, giving you the power of the thread pool approach without having to introduce complexity into your application.</p> <p>Parallel processing reduces latency, but each specified put and delete request consumes the same number of write capacity units whether it is processed in parallel or not. Delete operations on nonexistent items consume one write capacity unit.</p> <p>If one or more of the following is true, DynamoDB rejects the entire batch write operation:</p> <ul> <li> <p>One or more tables specified in the <code>BatchWriteItem</code> request does not exist.</p> </li> <li> <p>Primary key attributes specified on an item in the request do not match those in the corresponding table's primary key schema.</p> </li> <li> <p>You try to perform multiple operations on the same item in the same <code>BatchWriteItem</code> request. For example, you cannot put and delete the same item in the same <code>BatchWriteItem</code> request. </p> </li> <li> <p> Your request contains at least two items with identical hash and range keys (which essentially is two put operations). </p> </li> <li> <p>There are more than 25 requests in the batch.</p> </li> <li> <p>Any individual item in a batch exceeds 400 KB.</p> </li> <li> <p>The total request size exceeds 16 MB.</p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BatchWriteItem(ctx, operations.BatchWriteItemRequest{
        BatchWriteItemInput: shared.BatchWriteItemInput{
            RequestItems: map[string][]shared.WriteRequest{
                "recusandae": []shared.WriteRequest{
                    shared.WriteRequest{
                        DeleteRequest: &shared.DeleteRequest{
                            Key: map[string]shared.AttributeValue{
                                "vel": shared.AttributeValue{
                                    B: sdk.String("ducimus"),
                                    Bool: sdk.Bool(false),
                                    Bs: []string{
                                        "vel",
                                        "labore",
                                        "possimus",
                                    },
                                    L: []shared.AttributeValue{
                                        shared.AttributeValue{},
                                        shared.AttributeValue{},
                                        shared.AttributeValue{},
                                    },
                                    M: map[string]shared.AttributeValue{
                                        "commodi": shared.AttributeValue{},
                                        "in": shared.AttributeValue{},
                                        "corporis": shared.AttributeValue{},
                                    },
                                    N: sdk.String("reiciendis"),
                                    Ns: []string{
                                        "nemo",
                                        "recusandae",
                                        "aliquid",
                                        "aperiam",
                                    },
                                    Null: sdk.Bool(false),
                                    S: sdk.String("cum"),
                                    Ss: []string{
                                        "in",
                                    },
                                },
                                "exercitationem": shared.AttributeValue{
                                    B: sdk.String("earum"),
                                    Bool: sdk.Bool(false),
                                    Bs: []string{
                                        "numquam",
                                        "doloribus",
                                        "suscipit",
                                        "reiciendis",
                                    },
                                    L: []shared.AttributeValue{
                                        shared.AttributeValue{},
                                        shared.AttributeValue{},
                                        shared.AttributeValue{},
                                    },
                                    M: map[string]shared.AttributeValue{
                                        "necessitatibus": shared.AttributeValue{},
                                        "dolore": shared.AttributeValue{},
                                        "sunt": shared.AttributeValue{},
                                        "asperiores": shared.AttributeValue{},
                                    },
                                    N: sdk.String("adipisci"),
                                    Ns: []string{
                                        "amet",
                                    },
                                    Null: sdk.Bool(false),
                                    S: sdk.String("beatae"),
                                    Ss: []string{
                                        "a",
                                        "debitis",
                                    },
                                },
                                "consectetur": shared.AttributeValue{
                                    B: sdk.String("corporis"),
                                    Bool: sdk.Bool(false),
                                    Bs: []string{
                                        "laboriosam",
                                        "ipsa",
                                        "voluptates",
                                    },
                                    L: []shared.AttributeValue{
                                        shared.AttributeValue{},
                                        shared.AttributeValue{},
                                        shared.AttributeValue{},
                                    },
                                    M: map[string]shared.AttributeValue{
                                        "accusamus": shared.AttributeValue{},
                                    },
                                    N: sdk.String("similique"),
                                    Ns: []string{
                                        "aspernatur",
                                        "voluptas",
                                    },
                                    Null: sdk.Bool(false),
                                    S: sdk.String("voluptas"),
                                    Ss: []string{
                                        "minima",
                                        "nobis",
                                    },
                                },
                                "dolorum": shared.AttributeValue{
                                    B: sdk.String("adipisci"),
                                    Bool: sdk.Bool(false),
                                    Bs: []string{
                                        "dolores",
                                        "blanditiis",
                                        "in",
                                        "dolore",
                                    },
                                    L: []shared.AttributeValue{
                                        shared.AttributeValue{},
                                        shared.AttributeValue{},
                                    },
                                    M: map[string]shared.AttributeValue{
                                        "temporibus": shared.AttributeValue{},
                                        "ullam": shared.AttributeValue{},
                                        "adipisci": shared.AttributeValue{},
                                        "cum": shared.AttributeValue{},
                                    },
                                    N: sdk.String("blanditiis"),
                                    Ns: []string{
                                        "hic",
                                        "nesciunt",
                                        "culpa",
                                    },
                                    Null: sdk.Bool(false),
                                    S: sdk.String("corrupti"),
                                    Ss: []string{
                                        "totam",
                                        "hic",
                                        "exercitationem",
                                        "nobis",
                                    },
                                },
                            },
                        },
                        PutRequest: &shared.PutRequest{
                            Item: map[string]shared.AttributeValue{
                                "rerum": shared.AttributeValue{
                                    B: sdk.String("sed"),
                                    Bool: sdk.Bool(false),
                                    Bs: []string{
                                        "explicabo",
                                        "asperiores",
                                        "facilis",
                                        "voluptate",
                                    },
                                    L: []shared.AttributeValue{
                                        shared.AttributeValue{},
                                        shared.AttributeValue{},
                                        shared.AttributeValue{},
                                    },
                                    M: map[string]shared.AttributeValue{
                                        "iste": shared.AttributeValue{},
                                    },
                                    N: sdk.String("dolore"),
                                    Ns: []string{
                                        "sed",
                                        "in",
                                        "commodi",
                                    },
                                    Null: sdk.Bool(false),
                                    S: sdk.String("quidem"),
                                    Ss: []string{
                                        "voluptas",
                                    },
                                },
                            },
                        },
                    },
                    shared.WriteRequest{
                        DeleteRequest: &shared.DeleteRequest{
                            Key: map[string]shared.AttributeValue{
                                "architecto": shared.AttributeValue{
                                    B: sdk.String("suscipit"),
                                    Bool: sdk.Bool(false),
                                    Bs: []string{
                                        "debitis",
                                        "illo",
                                        "reiciendis",
                                        "perferendis",
                                    },
                                    L: []shared.AttributeValue{
                                        shared.AttributeValue{},
                                        shared.AttributeValue{},
                                        shared.AttributeValue{},
                                    },
                                    M: map[string]shared.AttributeValue{
                                        "incidunt": shared.AttributeValue{},
                                        "sed": shared.AttributeValue{},
                                        "provident": shared.AttributeValue{},
                                        "eius": shared.AttributeValue{},
                                    },
                                    N: sdk.String("necessitatibus"),
                                    Ns: []string{
                                        "ea",
                                    },
                                    Null: sdk.Bool(false),
                                    S: sdk.String("occaecati"),
                                    Ss: []string{
                                        "voluptatibus",
                                        "tempora",
                                        "tempora",
                                    },
                                },
                                "voluptate": shared.AttributeValue{
                                    B: sdk.String("reiciendis"),
                                    Bool: sdk.Bool(false),
                                    Bs: []string{
                                        "sit",
                                        "non",
                                    },
                                    L: []shared.AttributeValue{
                                        shared.AttributeValue{},
                                        shared.AttributeValue{},
                                        shared.AttributeValue{},
                                        shared.AttributeValue{},
                                    },
                                    M: map[string]shared.AttributeValue{
                                        "facilis": shared.AttributeValue{},
                                        "quaerat": shared.AttributeValue{},
                                        "incidunt": shared.AttributeValue{},
                                    },
                                    N: sdk.String("ipsam"),
                                    Ns: []string{
                                        "rem",
                                        "sit",
                                        "nobis",
                                        "error",
                                    },
                                    Null: sdk.Bool(false),
                                    S: sdk.String("veniam"),
                                    Ss: []string{
                                        "recusandae",
                                        "reiciendis",
                                    },
                                },
                                "nulla": shared.AttributeValue{
                                    B: sdk.String("magni"),
                                    Bool: sdk.Bool(false),
                                    Bs: []string{
                                        "saepe",
                                    },
                                    L: []shared.AttributeValue{
                                        shared.AttributeValue{},
                                        shared.AttributeValue{},
                                    },
                                    M: map[string]shared.AttributeValue{
                                        "in": shared.AttributeValue{},
                                        "officiis": shared.AttributeValue{},
                                    },
                                    N: sdk.String("beatae"),
                                    Ns: []string{
                                        "exercitationem",
                                        "praesentium",
                                        "cum",
                                    },
                                    Null: sdk.Bool(false),
                                    S: sdk.String("laboriosam"),
                                    Ss: []string{
                                        "voluptatum",
                                        "error",
                                        "hic",
                                    },
                                },
                            },
                        },
                        PutRequest: &shared.PutRequest{
                            Item: map[string]shared.AttributeValue{
                                "debitis": shared.AttributeValue{
                                    B: sdk.String("neque"),
                                    Bool: sdk.Bool(false),
                                    Bs: []string{
                                        "nostrum",
                                        "officia",
                                        "dolorum",
                                    },
                                    L: []shared.AttributeValue{
                                        shared.AttributeValue{},
                                        shared.AttributeValue{},
                                        shared.AttributeValue{},
                                    },
                                    M: map[string]shared.AttributeValue{
                                        "tempora": shared.AttributeValue{},
                                        "atque": shared.AttributeValue{},
                                        "fugit": shared.AttributeValue{},
                                        "ut": shared.AttributeValue{},
                                    },
                                    N: sdk.String("fugiat"),
                                    Ns: []string{
                                        "culpa",
                                    },
                                    Null: sdk.Bool(false),
                                    S: sdk.String("expedita"),
                                    Ss: []string{
                                        "consequatur",
                                        "esse",
                                    },
                                },
                                "ipsam": shared.AttributeValue{
                                    B: sdk.String("sit"),
                                    Bool: sdk.Bool(false),
                                    Bs: []string{
                                        "quas",
                                        "repudiandae",
                                        "corporis",
                                    },
                                    L: []shared.AttributeValue{
                                        shared.AttributeValue{},
                                    },
                                    M: map[string]shared.AttributeValue{
                                        "ex": shared.AttributeValue{},
                                        "sed": shared.AttributeValue{},
                                        "sit": shared.AttributeValue{},
                                    },
                                    N: sdk.String("vel"),
                                    Ns: []string{
                                        "saepe",
                                        "error",
                                    },
                                    Null: sdk.Bool(false),
                                    S: sdk.String("consequatur"),
                                    Ss: []string{
                                        "reiciendis",
                                        "dolorem",
                                    },
                                },
                                "harum": shared.AttributeValue{
                                    B: sdk.String("dicta"),
                                    Bool: sdk.Bool(false),
                                    Bs: []string{
                                        "occaecati",
                                    },
                                    L: []shared.AttributeValue{
                                        shared.AttributeValue{},
                                        shared.AttributeValue{},
                                    },
                                    M: map[string]shared.AttributeValue{
                                        "atque": shared.AttributeValue{},
                                        "laborum": shared.AttributeValue{},
                                        "nam": shared.AttributeValue{},
                                    },
                                    N: sdk.String("tenetur"),
                                    Ns: []string{
                                        "alias",
                                        "amet",
                                    },
                                    Null: sdk.Bool(false),
                                    S: sdk.String("deserunt"),
                                    Ss: []string{
                                        "unde",
                                        "reiciendis",
                                    },
                                },
                            },
                        },
                    },
                    shared.WriteRequest{
                        DeleteRequest: &shared.DeleteRequest{
                            Key: map[string]shared.AttributeValue{
                                "repellendus": shared.AttributeValue{
                                    B: sdk.String("delectus"),
                                    Bool: sdk.Bool(false),
                                    Bs: []string{
                                        "perferendis",
                                        "est",
                                        "quidem",
                                        "reprehenderit",
                                    },
                                    L: []shared.AttributeValue{
                                        shared.AttributeValue{},
                                        shared.AttributeValue{},
                                        shared.AttributeValue{},
                                        shared.AttributeValue{},
                                    },
                                    M: map[string]shared.AttributeValue{
                                        "praesentium": shared.AttributeValue{},
                                        "mollitia": shared.AttributeValue{},
                                        "veniam": shared.AttributeValue{},
                                    },
                                    N: sdk.String("voluptatem"),
                                    Ns: []string{
                                        "repudiandae",
                                        "quasi",
                                        "atque",
                                        "reprehenderit",
                                    },
                                    Null: sdk.Bool(false),
                                    S: sdk.String("asperiores"),
                                    Ss: []string{
                                        "suscipit",
                                        "quidem",
                                        "maxime",
                                    },
                                },
                                "et": shared.AttributeValue{
                                    B: sdk.String("esse"),
                                    Bool: sdk.Bool(false),
                                    Bs: []string{
                                        "assumenda",
                                    },
                                    L: []shared.AttributeValue{
                                        shared.AttributeValue{},
                                        shared.AttributeValue{},
                                    },
                                    M: map[string]shared.AttributeValue{
                                        "error": shared.AttributeValue{},
                                        "officiis": shared.AttributeValue{},
                                        "officiis": shared.AttributeValue{},
                                    },
                                    N: sdk.String("accusamus"),
                                    Ns: []string{
                                        "minima",
                                        "aspernatur",
                                        "ex",
                                    },
                                    Null: sdk.Bool(false),
                                    S: sdk.String("maiores"),
                                    Ss: []string{
                                        "at",
                                        "error",
                                        "blanditiis",
                                    },
                                },
                                "suscipit": shared.AttributeValue{
                                    B: sdk.String("repudiandae"),
                                    Bool: sdk.Bool(false),
                                    Bs: []string{
                                        "atque",
                                        "sunt",
                                        "recusandae",
                                    },
                                    L: []shared.AttributeValue{
                                        shared.AttributeValue{},
                                        shared.AttributeValue{},
                                        shared.AttributeValue{},
                                    },
                                    M: map[string]shared.AttributeValue{
                                        "labore": shared.AttributeValue{},
                                        "reiciendis": shared.AttributeValue{},
                                        "doloremque": shared.AttributeValue{},
                                        "repudiandae": shared.AttributeValue{},
                                    },
                                    N: sdk.String("dicta"),
                                    Ns: []string{
                                        "beatae",
                                    },
                                    Null: sdk.Bool(false),
                                    S: sdk.String("dolores"),
                                    Ss: []string{
                                        "laboriosam",
                                        "velit",
                                    },
                                },
                            },
                        },
                        PutRequest: &shared.PutRequest{
                            Item: map[string]shared.AttributeValue{
                                "molestias": shared.AttributeValue{
                                    B: sdk.String("magnam"),
                                    Bool: sdk.Bool(false),
                                    Bs: []string{
                                        "consequuntur",
                                        "occaecati",
                                        "officiis",
                                        "perspiciatis",
                                    },
                                    L: []shared.AttributeValue{
                                        shared.AttributeValue{},
                                        shared.AttributeValue{},
                                    },
                                    M: map[string]shared.AttributeValue{
                                        "eveniet": shared.AttributeValue{},
                                    },
                                    N: sdk.String("occaecati"),
                                    Ns: []string{
                                        "fugit",
                                    },
                                    Null: sdk.Bool(false),
                                    S: sdk.String("id"),
                                    Ss: []string{
                                        "reprehenderit",
                                        "error",
                                    },
                                },
                                "illo": shared.AttributeValue{
                                    B: sdk.String("corporis"),
                                    Bool: sdk.Bool(false),
                                    Bs: []string{
                                        "eveniet",
                                        "non",
                                        "vero",
                                    },
                                    L: []shared.AttributeValue{
                                        shared.AttributeValue{},
                                    },
                                    M: map[string]shared.AttributeValue{
                                        "ipsa": shared.AttributeValue{},
                                        "totam": shared.AttributeValue{},
                                    },
                                    N: sdk.String("quae"),
                                    Ns: []string{
                                        "eveniet",
                                        "qui",
                                    },
                                    Null: sdk.Bool(false),
                                    S: sdk.String("cum"),
                                    Ss: []string{
                                        "necessitatibus",
                                        "ratione",
                                    },
                                },
                                "laborum": shared.AttributeValue{
                                    B: sdk.String("distinctio"),
                                    Bool: sdk.Bool(false),
                                    Bs: []string{
                                        "rem",
                                        "aliquam",
                                        "ad",
                                    },
                                    L: []shared.AttributeValue{
                                        shared.AttributeValue{},
                                        shared.AttributeValue{},
                                        shared.AttributeValue{},
                                        shared.AttributeValue{},
                                    },
                                    M: map[string]shared.AttributeValue{
                                        "corporis": shared.AttributeValue{},
                                    },
                                    N: sdk.String("perspiciatis"),
                                    Ns: []string{
                                        "mollitia",
                                        "voluptas",
                                    },
                                    Null: sdk.Bool(false),
                                    S: sdk.String("alias"),
                                    Ss: []string{
                                        "reiciendis",
                                        "dolores",
                                        "id",
                                        "minima",
                                    },
                                },
                                "dolore": shared.AttributeValue{
                                    B: sdk.String("dolorum"),
                                    Bool: sdk.Bool(false),
                                    Bs: []string{
                                        "quae",
                                    },
                                    L: []shared.AttributeValue{
                                        shared.AttributeValue{},
                                        shared.AttributeValue{},
                                        shared.AttributeValue{},
                                        shared.AttributeValue{},
                                    },
                                    M: map[string]shared.AttributeValue{
                                        "quaerat": shared.AttributeValue{},
                                        "molestiae": shared.AttributeValue{},
                                        "ex": shared.AttributeValue{},
                                    },
                                    N: sdk.String("ut"),
                                    Ns: []string{
                                        "adipisci",
                                        "debitis",
                                        "laudantium",
                                    },
                                    Null: sdk.Bool(false),
                                    S: sdk.String("eum"),
                                    Ss: []string{
                                        "recusandae",
                                        "esse",
                                    },
                                },
                            },
                        },
                    },
                },
                "provident": []shared.WriteRequest{
                    shared.WriteRequest{
                        DeleteRequest: &shared.DeleteRequest{
                            Key: map[string]shared.AttributeValue{
                                "reiciendis": shared.AttributeValue{
                                    B: sdk.String("provident"),
                                    Bool: sdk.Bool(false),
                                    Bs: []string{
                                        "ullam",
                                    },
                                    L: []shared.AttributeValue{
                                        shared.AttributeValue{},
                                    },
                                    M: map[string]shared.AttributeValue{
                                        "nostrum": shared.AttributeValue{},
                                        "mollitia": shared.AttributeValue{},
                                        "provident": shared.AttributeValue{},
                                    },
                                    N: sdk.String("possimus"),
                                    Ns: []string{
                                        "ex",
                                        "aliquid",
                                        "accusantium",
                                    },
                                    Null: sdk.Bool(false),
                                    S: sdk.String("repellat"),
                                    Ss: []string{
                                        "ullam",
                                        "in",
                                        "nam",
                                        "earum",
                                    },
                                },
                                "officia": shared.AttributeValue{
                                    B: sdk.String("laborum"),
                                    Bool: sdk.Bool(false),
                                    Bs: []string{
                                        "modi",
                                        "voluptatibus",
                                        "molestias",
                                        "officiis",
                                    },
                                    L: []shared.AttributeValue{
                                        shared.AttributeValue{},
                                        shared.AttributeValue{},
                                        shared.AttributeValue{},
                                        shared.AttributeValue{},
                                    },
                                    M: map[string]shared.AttributeValue{
                                        "vitae": shared.AttributeValue{},
                                        "rerum": shared.AttributeValue{},
                                        "tempora": shared.AttributeValue{},
                                        "quis": shared.AttributeValue{},
                                    },
                                    N: sdk.String("inventore"),
                                    Ns: []string{
                                        "cumque",
                                    },
                                    Null: sdk.Bool(false),
                                    S: sdk.String("quae"),
                                    Ss: []string{
                                        "velit",
                                    },
                                },
                            },
                        },
                        PutRequest: &shared.PutRequest{
                            Item: map[string]shared.AttributeValue{
                                "eum": shared.AttributeValue{
                                    B: sdk.String("eius"),
                                    Bool: sdk.Bool(false),
                                    Bs: []string{
                                        "at",
                                        "impedit",
                                        "eos",
                                    },
                                    L: []shared.AttributeValue{
                                        shared.AttributeValue{},
                                        shared.AttributeValue{},
                                        shared.AttributeValue{},
                                        shared.AttributeValue{},
                                    },
                                    M: map[string]shared.AttributeValue{
                                        "dicta": shared.AttributeValue{},
                                        "minima": shared.AttributeValue{},
                                    },
                                    N: sdk.String("beatae"),
                                    Ns: []string{
                                        "provident",
                                        "earum",
                                        "soluta",
                                    },
                                    Null: sdk.Bool(false),
                                    S: sdk.String("hic"),
                                    Ss: []string{
                                        "eaque",
                                        "earum",
                                        "perspiciatis",
                                        "maiores",
                                    },
                                },
                            },
                        },
                    },
                    shared.WriteRequest{
                        DeleteRequest: &shared.DeleteRequest{
                            Key: map[string]shared.AttributeValue{
                                "aliquid": shared.AttributeValue{
                                    B: sdk.String("porro"),
                                    Bool: sdk.Bool(false),
                                    Bs: []string{
                                        "dolorem",
                                        "fugit",
                                    },
                                    L: []shared.AttributeValue{
                                        shared.AttributeValue{},
                                        shared.AttributeValue{},
                                        shared.AttributeValue{},
                                        shared.AttributeValue{},
                                    },
                                    M: map[string]shared.AttributeValue{
                                        "ratione": shared.AttributeValue{},
                                        "animi": shared.AttributeValue{},
                                        "necessitatibus": shared.AttributeValue{},
                                    },
                                    N: sdk.String("nulla"),
                                    Ns: []string{
                                        "quasi",
                                    },
                                    Null: sdk.Bool(false),
                                    S: sdk.String("et"),
                                    Ss: []string{
                                        "natus",
                                        "occaecati",
                                    },
                                },
                                "suscipit": shared.AttributeValue{
                                    B: sdk.String("adipisci"),
                                    Bool: sdk.Bool(false),
                                    Bs: []string{
                                        "magni",
                                    },
                                    L: []shared.AttributeValue{
                                        shared.AttributeValue{},
                                        shared.AttributeValue{},
                                        shared.AttributeValue{},
                                        shared.AttributeValue{},
                                    },
                                    M: map[string]shared.AttributeValue{
                                        "necessitatibus": shared.AttributeValue{},
                                        "ipsa": shared.AttributeValue{},
                                        "tempora": shared.AttributeValue{},
                                        "nihil": shared.AttributeValue{},
                                    },
                                    N: sdk.String("molestiae"),
                                    Ns: []string{
                                        "iusto",
                                    },
                                    Null: sdk.Bool(false),
                                    S: sdk.String("esse"),
                                    Ss: []string{
                                        "maiores",
                                        "reiciendis",
                                        "vel",
                                    },
                                },
                                "architecto": shared.AttributeValue{
                                    B: sdk.String("fugiat"),
                                    Bool: sdk.Bool(false),
                                    Bs: []string{
                                        "dicta",
                                    },
                                    L: []shared.AttributeValue{
                                        shared.AttributeValue{},
                                        shared.AttributeValue{},
                                    },
                                    M: map[string]shared.AttributeValue{
                                        "esse": shared.AttributeValue{},
                                        "ex": shared.AttributeValue{},
                                    },
                                    N: sdk.String("consectetur"),
                                    Ns: []string{
                                        "ipsa",
                                        "laborum",
                                    },
                                    Null: sdk.Bool(false),
                                    S: sdk.String("sunt"),
                                    Ss: []string{
                                        "fugiat",
                                        "expedita",
                                    },
                                },
                                "aliquid": shared.AttributeValue{
                                    B: sdk.String("officia"),
                                    Bool: sdk.Bool(false),
                                    Bs: []string{
                                        "aliquid",
                                        "perferendis",
                                    },
                                    L: []shared.AttributeValue{
                                        shared.AttributeValue{},
                                        shared.AttributeValue{},
                                    },
                                    M: map[string]shared.AttributeValue{
                                        "iste": shared.AttributeValue{},
                                        "id": shared.AttributeValue{},
                                    },
                                    N: sdk.String("ab"),
                                    Ns: []string{
                                        "possimus",
                                        "voluptates",
                                        "mollitia",
                                    },
                                    Null: sdk.Bool(false),
                                    S: sdk.String("laborum"),
                                    Ss: []string{
                                        "ad",
                                        "deleniti",
                                        "enim",
                                    },
                                },
                            },
                        },
                        PutRequest: &shared.PutRequest{
                            Item: map[string]shared.AttributeValue{
                                "repellendus": shared.AttributeValue{
                                    B: sdk.String("ex"),
                                    Bool: sdk.Bool(false),
                                    Bs: []string{
                                        "ex",
                                        "ut",
                                        "ad",
                                        "expedita",
                                    },
                                    L: []shared.AttributeValue{
                                        shared.AttributeValue{},
                                    },
                                    M: map[string]shared.AttributeValue{
                                        "cum": shared.AttributeValue{},
                                        "aliquid": shared.AttributeValue{},
                                        "beatae": shared.AttributeValue{},
                                    },
                                    N: sdk.String("voluptatum"),
                                    Ns: []string{
                                        "veritatis",
                                        "rerum",
                                        "est",
                                    },
                                    Null: sdk.Bool(false),
                                    S: sdk.String("culpa"),
                                    Ss: []string{
                                        "sapiente",
                                    },
                                },
                            },
                        },
                    },
                },
                "officiis": []shared.WriteRequest{
                    shared.WriteRequest{
                        DeleteRequest: &shared.DeleteRequest{
                            Key: map[string]shared.AttributeValue{
                                "pariatur": shared.AttributeValue{
                                    B: sdk.String("debitis"),
                                    Bool: sdk.Bool(false),
                                    Bs: []string{
                                        "alias",
                                    },
                                    L: []shared.AttributeValue{
                                        shared.AttributeValue{},
                                        shared.AttributeValue{},
                                        shared.AttributeValue{},
                                    },
                                    M: map[string]shared.AttributeValue{
                                        "ex": shared.AttributeValue{},
                                        "sapiente": shared.AttributeValue{},
                                        "rem": shared.AttributeValue{},
                                        "minus": shared.AttributeValue{},
                                    },
                                    N: sdk.String("nemo"),
                                    Ns: []string{
                                        "ratione",
                                        "ullam",
                                        "perferendis",
                                        "illum",
                                    },
                                    Null: sdk.Bool(false),
                                    S: sdk.String("totam"),
                                    Ss: []string{
                                        "quibusdam",
                                        "nam",
                                        "ipsam",
                                        "culpa",
                                    },
                                },
                                "dolor": shared.AttributeValue{
                                    B: sdk.String("aliquam"),
                                    Bool: sdk.Bool(false),
                                    Bs: []string{
                                        "deleniti",
                                    },
                                    L: []shared.AttributeValue{
                                        shared.AttributeValue{},
                                    },
                                    M: map[string]shared.AttributeValue{
                                        "dolor": shared.AttributeValue{},
                                        "consequatur": shared.AttributeValue{},
                                    },
                                    N: sdk.String("architecto"),
                                    Ns: []string{
                                        "modi",
                                    },
                                    Null: sdk.Bool(false),
                                    S: sdk.String("fugit"),
                                    Ss: []string{
                                        "laudantium",
                                    },
                                },
                                "quae": shared.AttributeValue{
                                    B: sdk.String("dolor"),
                                    Bool: sdk.Bool(false),
                                    Bs: []string{
                                        "ipsam",
                                        "consequuntur",
                                        "ipsa",
                                        "quas",
                                    },
                                    L: []shared.AttributeValue{
                                        shared.AttributeValue{},
                                        shared.AttributeValue{},
                                        shared.AttributeValue{},
                                        shared.AttributeValue{},
                                    },
                                    M: map[string]shared.AttributeValue{
                                        "officiis": shared.AttributeValue{},
                                        "esse": shared.AttributeValue{},
                                        "necessitatibus": shared.AttributeValue{},
                                        "sed": shared.AttributeValue{},
                                    },
                                    N: sdk.String("veniam"),
                                    Ns: []string{
                                        "expedita",
                                    },
                                    Null: sdk.Bool(false),
                                    S: sdk.String("eum"),
                                    Ss: []string{
                                        "voluptatum",
                                        "magnam",
                                    },
                                },
                            },
                        },
                        PutRequest: &shared.PutRequest{
                            Item: map[string]shared.AttributeValue{
                                "ab": shared.AttributeValue{
                                    B: sdk.String("porro"),
                                    Bool: sdk.Bool(false),
                                    Bs: []string{
                                        "nobis",
                                        "laboriosam",
                                    },
                                    L: []shared.AttributeValue{
                                        shared.AttributeValue{},
                                        shared.AttributeValue{},
                                        shared.AttributeValue{},
                                        shared.AttributeValue{},
                                    },
                                    M: map[string]shared.AttributeValue{
                                        "voluptatem": shared.AttributeValue{},
                                    },
                                    N: sdk.String("exercitationem"),
                                    Ns: []string{
                                        "quasi",
                                        "nisi",
                                        "at",
                                        "vero",
                                    },
                                    Null: sdk.Bool(false),
                                    S: sdk.String("est"),
                                    Ss: []string{
                                        "sequi",
                                        "doloribus",
                                        "repudiandae",
                                    },
                                },
                                "optio": shared.AttributeValue{
                                    B: sdk.String("occaecati"),
                                    Bool: sdk.Bool(false),
                                    Bs: []string{
                                        "voluptate",
                                        "blanditiis",
                                    },
                                    L: []shared.AttributeValue{
                                        shared.AttributeValue{},
                                        shared.AttributeValue{},
                                        shared.AttributeValue{},
                                    },
                                    M: map[string]shared.AttributeValue{
                                        "numquam": shared.AttributeValue{},
                                        "nemo": shared.AttributeValue{},
                                    },
                                    N: sdk.String("quos"),
                                    Ns: []string{
                                        "aspernatur",
                                        "ducimus",
                                    },
                                    Null: sdk.Bool(false),
                                    S: sdk.String("nesciunt"),
                                    Ss: []string{
                                        "laudantium",
                                        "incidunt",
                                        "quasi",
                                    },
                                },
                            },
                        },
                    },
                },
            },
            ReturnConsumedCapacity: shared.ReturnConsumedCapacityEnumTotal.ToPointer(),
            ReturnItemCollectionMetrics: shared.ReturnItemCollectionMetricsEnumNone.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("nisi"),
        XAmzCredential: sdk.String("consequuntur"),
        XAmzDate: sdk.String("consectetur"),
        XAmzSecurityToken: sdk.String("aperiam"),
        XAmzSignature: sdk.String("cupiditate"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
        XAmzTarget: operations.BatchWriteItemXAmzTargetEnumDynamoDb20120810BatchWriteItem,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchWriteItemOutput != nil {
        // handle response
    }
}
```

## CreateBackup

<p>Creates a backup for an existing table.</p> <p> Each time you create an on-demand backup, the entire table data is backed up. There is no limit to the number of on-demand backups that can be taken. </p> <p> When you create an on-demand backup, a time marker of the request is cataloged, and the backup is created asynchronously, by applying all changes until the time of the request to the last full table snapshot. Backup requests are processed instantaneously and become available for restore within minutes. </p> <p>You can call <code>CreateBackup</code> at a maximum rate of 50 times per second.</p> <p>All backups in DynamoDB work without consuming any provisioned throughput on the table.</p> <p> If you submit a backup request on 2018-12-14 at 14:25:00, the backup is guaranteed to contain all data committed to the table up to 14:24:00, and data committed after 14:26:00 will not be. The backup might contain data modifications made between 14:24:00 and 14:26:00. On-demand backup does not support causal consistency. </p> <p> Along with data, the following are also included on the backups: </p> <ul> <li> <p>Global secondary indexes (GSIs)</p> </li> <li> <p>Local secondary indexes (LSIs)</p> </li> <li> <p>Streams</p> </li> <li> <p>Provisioned read and write capacity</p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateBackup(ctx, operations.CreateBackupRequest{
        CreateBackupInput: shared.CreateBackupInput{
            BackupName: "soluta",
            TableName: "alias",
        },
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("eos"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("iste"),
        XAmzSecurityToken: sdk.String("magni"),
        XAmzSignature: sdk.String("inventore"),
        XAmzSignedHeaders: sdk.String("fuga"),
        XAmzTarget: operations.CreateBackupXAmzTargetEnumDynamoDb20120810CreateBackup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateBackupOutput != nil {
        // handle response
    }
}
```

## CreateGlobalTable

<p>Creates a global table from an existing table. A global table creates a replication relationship between two or more DynamoDB tables with the same table name in the provided Regions. </p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29 (Legacy)</a> of global tables. We recommend using <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> when creating new global tables, as it provides greater flexibility, higher efficiency and consumes less write capacity than 2017.11.29 (Legacy). To determine which version you are using, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.DetermineVersion.html">Determining the version</a>. To update existing global tables from version 2017.11.29 (Legacy) to version 2019.11.21 (Current), see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_upgrade.html"> Updating global tables</a>. </p> </important> <p>If you want to add a new replica table to a global table, each of the following conditions must be true:</p> <ul> <li> <p>The table must have the same primary key as all of the other replicas.</p> </li> <li> <p>The table must have the same name as all of the other replicas.</p> </li> <li> <p>The table must have DynamoDB Streams enabled, with the stream containing both the new and the old images of the item.</p> </li> <li> <p>None of the replica tables in the global table can contain any data.</p> </li> </ul> <p> If global secondary indexes are specified, then the following conditions must also be met: </p> <ul> <li> <p> The global secondary indexes must have the same name. </p> </li> <li> <p> The global secondary indexes must have the same hash key and sort key (if present). </p> </li> </ul> <p> If local secondary indexes are specified, then the following conditions must also be met: </p> <ul> <li> <p> The local secondary indexes must have the same name. </p> </li> <li> <p> The local secondary indexes must have the same hash key and sort key (if present). </p> </li> </ul> <important> <p> Write capacity settings should be set consistently across your replica tables and secondary indexes. DynamoDB strongly recommends enabling auto scaling to manage the write capacity settings for all of your global tables replicas and indexes. </p> <p> If you prefer to manage write capacity settings manually, you should provision equal replicated write capacity units to your replica tables. You should also provision equal replicated write capacity units to matching secondary indexes across your global table. </p> </important>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateGlobalTable(ctx, operations.CreateGlobalTableRequest{
        CreateGlobalTableInput: shared.CreateGlobalTableInput{
            GlobalTableName: "accusamus",
            ReplicationGroup: []shared.Replica{
                shared.Replica{
                    RegionName: sdk.String("distinctio"),
                },
                shared.Replica{
                    RegionName: sdk.String("omnis"),
                },
                shared.Replica{
                    RegionName: sdk.String("delectus"),
                },
                shared.Replica{
                    RegionName: sdk.String("minima"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("praesentium"),
        XAmzContentSha256: sdk.String("maxime"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("temporibus"),
        XAmzSecurityToken: sdk.String("quos"),
        XAmzSignature: sdk.String("commodi"),
        XAmzSignedHeaders: sdk.String("itaque"),
        XAmzTarget: operations.CreateGlobalTableXAmzTargetEnumDynamoDb20120810CreateGlobalTable,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateGlobalTableOutput != nil {
        // handle response
    }
}
```

## CreateTable

<p>The <code>CreateTable</code> operation adds a new table to your account. In an Amazon Web Services account, table names must be unique within each Region. That is, you can have two tables with same name if you create the tables in different Regions.</p> <p> <code>CreateTable</code> is an asynchronous operation. Upon receiving a <code>CreateTable</code> request, DynamoDB immediately returns a response with a <code>TableStatus</code> of <code>CREATING</code>. After the table is created, DynamoDB sets the <code>TableStatus</code> to <code>ACTIVE</code>. You can perform read and write operations only on an <code>ACTIVE</code> table. </p> <p>You can optionally define secondary indexes on the new table, as part of the <code>CreateTable</code> operation. If you want to create multiple tables with secondary indexes on them, you must create the tables sequentially. Only one table with secondary indexes can be in the <code>CREATING</code> state at any given time.</p> <p>You can use the <code>DescribeTable</code> action to check the table status.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateTable(ctx, operations.CreateTableRequest{
        CreateTableInput: shared.CreateTableInput{
            AttributeDefinitions: []shared.AttributeDefinition{
                shared.AttributeDefinition{
                    AttributeName: "totam",
                    AttributeType: shared.ScalarAttributeTypeEnumB,
                },
                shared.AttributeDefinition{
                    AttributeName: "modi",
                    AttributeType: shared.ScalarAttributeTypeEnumB,
                },
            },
            BillingMode: shared.BillingModeEnumPayPerRequest.ToPointer(),
            DeletionProtectionEnabled: sdk.Bool(false),
            GlobalSecondaryIndexes: []shared.GlobalSecondaryIndex{
                shared.GlobalSecondaryIndex{
                    IndexName: "ipsam",
                    KeySchema: []shared.KeySchemaElement{
                        shared.KeySchemaElement{
                            AttributeName: "alias",
                            KeyType: shared.KeyTypeEnumHash,
                        },
                        shared.KeySchemaElement{
                            AttributeName: "non",
                            KeyType: shared.KeyTypeEnumRange,
                        },
                    },
                    Projection: shared.Projection{
                        NonKeyAttributes: []string{
                            "sint",
                            "nulla",
                        },
                        ProjectionType: shared.ProjectionTypeEnumKeysOnly.ToPointer(),
                    },
                    ProvisionedThroughput: &shared.ProvisionedThroughput{
                        ReadCapacityUnits: 458503,
                        WriteCapacityUnits: 364463,
                    },
                },
            },
            KeySchema: []shared.KeySchemaElement{
                shared.KeySchemaElement{
                    AttributeName: "est",
                    KeyType: shared.KeyTypeEnumHash,
                },
                shared.KeySchemaElement{
                    AttributeName: "sint",
                    KeyType: shared.KeyTypeEnumRange,
                },
            },
            LocalSecondaryIndexes: []shared.LocalSecondaryIndex{
                shared.LocalSecondaryIndex{
                    IndexName: "hic",
                    KeySchema: []shared.KeySchemaElement{
                        shared.KeySchemaElement{
                            AttributeName: "asperiores",
                            KeyType: shared.KeyTypeEnumHash,
                        },
                        shared.KeySchemaElement{
                            AttributeName: "voluptas",
                            KeyType: shared.KeyTypeEnumRange,
                        },
                        shared.KeySchemaElement{
                            AttributeName: "delectus",
                            KeyType: shared.KeyTypeEnumHash,
                        },
                        shared.KeySchemaElement{
                            AttributeName: "minus",
                            KeyType: shared.KeyTypeEnumRange,
                        },
                    },
                    Projection: shared.Projection{
                        NonKeyAttributes: []string{
                            "consectetur",
                            "velit",
                            "atque",
                        },
                        ProjectionType: shared.ProjectionTypeEnumAll.ToPointer(),
                    },
                },
                shared.LocalSecondaryIndex{
                    IndexName: "impedit",
                    KeySchema: []shared.KeySchemaElement{
                        shared.KeySchemaElement{
                            AttributeName: "soluta",
                            KeyType: shared.KeyTypeEnumRange,
                        },
                    },
                    Projection: shared.Projection{
                        NonKeyAttributes: []string{
                            "dolore",
                            "iusto",
                            "voluptate",
                        },
                        ProjectionType: shared.ProjectionTypeEnumAll.ToPointer(),
                    },
                },
                shared.LocalSecondaryIndex{
                    IndexName: "dignissimos",
                    KeySchema: []shared.KeySchemaElement{
                        shared.KeySchemaElement{
                            AttributeName: "quo",
                            KeyType: shared.KeyTypeEnumRange,
                        },
                    },
                    Projection: shared.Projection{
                        NonKeyAttributes: []string{
                            "iure",
                            "odit",
                            "voluptatibus",
                            "vel",
                        },
                        ProjectionType: shared.ProjectionTypeEnumAll.ToPointer(),
                    },
                },
                shared.LocalSecondaryIndex{
                    IndexName: "quibusdam",
                    KeySchema: []shared.KeySchemaElement{
                        shared.KeySchemaElement{
                            AttributeName: "facere",
                            KeyType: shared.KeyTypeEnumRange,
                        },
                    },
                    Projection: shared.Projection{
                        NonKeyAttributes: []string{
                            "voluptatibus",
                        },
                        ProjectionType: shared.ProjectionTypeEnumAll.ToPointer(),
                    },
                },
            },
            ProvisionedThroughput: &shared.ProvisionedThroughput{
                ReadCapacityUnits: 782090,
                WriteCapacityUnits: 304198,
            },
            SSESpecification: &shared.SSESpecification{
                Enabled: sdk.Bool(false),
                KMSMasterKeyID: sdk.String("velit"),
                SSEType: shared.SSETypeEnumAes256.ToPointer(),
            },
            StreamSpecification: &shared.StreamSpecification{
                StreamEnabled: false,
                StreamViewType: shared.StreamViewTypeEnumNewImage.ToPointer(),
            },
            TableClass: shared.TableClassEnumStandard.ToPointer(),
            TableName: "ea",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "vero",
                    Value: "excepturi",
                },
            },
        },
        XAmzAlgorithm: sdk.String("eum"),
        XAmzContentSha256: sdk.String("velit"),
        XAmzCredential: sdk.String("ut"),
        XAmzDate: sdk.String("perspiciatis"),
        XAmzSecurityToken: sdk.String("earum"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("impedit"),
        XAmzTarget: operations.CreateTableXAmzTargetEnumDynamoDb20120810CreateTable,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateTableOutput != nil {
        // handle response
    }
}
```

## DeleteBackup

<p>Deletes an existing backup of a table.</p> <p>You can call <code>DeleteBackup</code> at a maximum rate of 10 times per second.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteBackup(ctx, operations.DeleteBackupRequest{
        DeleteBackupInput: shared.DeleteBackupInput{
            BackupArn: "voluptatibus",
        },
        XAmzAlgorithm: sdk.String("iste"),
        XAmzContentSha256: sdk.String("itaque"),
        XAmzCredential: sdk.String("alias"),
        XAmzDate: sdk.String("nisi"),
        XAmzSecurityToken: sdk.String("itaque"),
        XAmzSignature: sdk.String("velit"),
        XAmzSignedHeaders: sdk.String("laborum"),
        XAmzTarget: operations.DeleteBackupXAmzTargetEnumDynamoDb20120810DeleteBackup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteBackupOutput != nil {
        // handle response
    }
}
```

## DeleteItem

<p>Deletes a single item in a table by primary key. You can perform a conditional delete operation that deletes the item if it exists, or if it has an expected attribute value.</p> <p>In addition to deleting an item, you can also return the item's attribute values in the same operation, using the <code>ReturnValues</code> parameter.</p> <p>Unless you specify conditions, the <code>DeleteItem</code> is an idempotent operation; running it multiple times on the same item or attribute does <i>not</i> result in an error response.</p> <p>Conditional deletes are useful for deleting items only if specific conditions are met. If those conditions are met, DynamoDB performs the delete. Otherwise, the item is not deleted.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteItem(ctx, operations.DeleteItemRequest{
        DeleteItemInput: shared.DeleteItemInput{
            ConditionExpression: sdk.String("non"),
            ConditionalOperator: shared.ConditionalOperatorEnumAnd.ToPointer(),
            Expected: map[string]shared.ExpectedAttributeValue{
                "sit": shared.ExpectedAttributeValue{
                    AttributeValueList: []shared.AttributeValue{
                        shared.AttributeValue{
                            B: sdk.String("consequatur"),
                            Bool: sdk.Bool(false),
                            Bs: []string{
                                "recusandae",
                                "ea",
                                "quidem",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "placeat": shared.AttributeValue{},
                                "perspiciatis": shared.AttributeValue{},
                                "expedita": shared.AttributeValue{},
                            },
                            N: sdk.String("deleniti"),
                            Ns: []string{
                                "voluptate",
                                "ullam",
                                "unde",
                                "necessitatibus",
                            },
                            Null: sdk.Bool(false),
                            S: sdk.String("animi"),
                            Ss: []string{
                                "ipsam",
                                "corporis",
                                "est",
                                "error",
                            },
                        },
                    },
                    ComparisonOperator: shared.ComparisonOperatorEnumGe.ToPointer(),
                    Exists: sdk.Bool(false),
                    Value: &shared.AttributeValue{
                        B: sdk.String("labore"),
                        Bool: sdk.Bool(false),
                        Bs: []string{
                            "vero",
                        },
                        L: []shared.AttributeValue{
                            shared.AttributeValue{},
                        },
                        M: map[string]shared.AttributeValue{
                            "inventore": shared.AttributeValue{},
                        },
                        N: sdk.String("dolorem"),
                        Ns: []string{
                            "qui",
                            "iste",
                        },
                        Null: sdk.Bool(false),
                        S: sdk.String("ex"),
                        Ss: []string{
                            "soluta",
                            "libero",
                        },
                    },
                },
                "rem": shared.ExpectedAttributeValue{
                    AttributeValueList: []shared.AttributeValue{
                        shared.AttributeValue{
                            B: sdk.String("odio"),
                            Bool: sdk.Bool(false),
                            Bs: []string{
                                "alias",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "quae": shared.AttributeValue{},
                                "quae": shared.AttributeValue{},
                            },
                            N: sdk.String("modi"),
                            Ns: []string{
                                "exercitationem",
                            },
                            Null: sdk.Bool(false),
                            S: sdk.String("itaque"),
                            Ss: []string{
                                "ipsum",
                            },
                        },
                        shared.AttributeValue{
                            B: sdk.String("unde"),
                            Bool: sdk.Bool(false),
                            Bs: []string{
                                "distinctio",
                                "maxime",
                                "quia",
                                "quia",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "libero": shared.AttributeValue{},
                                "dicta": shared.AttributeValue{},
                                "id": shared.AttributeValue{},
                            },
                            N: sdk.String("libero"),
                            Ns: []string{
                                "officia",
                                "quos",
                                "placeat",
                                "sit",
                            },
                            Null: sdk.Bool(false),
                            S: sdk.String("iusto"),
                            Ss: []string{
                                "voluptates",
                            },
                        },
                        shared.AttributeValue{
                            B: sdk.String("inventore"),
                            Bool: sdk.Bool(false),
                            Bs: []string{
                                "totam",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "distinctio": shared.AttributeValue{},
                                "voluptatem": shared.AttributeValue{},
                                "autem": shared.AttributeValue{},
                                "esse": shared.AttributeValue{},
                            },
                            N: sdk.String("dolores"),
                            Ns: []string{
                                "beatae",
                                "est",
                                "facere",
                                "corrupti",
                            },
                            Null: sdk.Bool(false),
                            S: sdk.String("molestiae"),
                            Ss: []string{
                                "accusamus",
                                "necessitatibus",
                                "tempore",
                            },
                        },
                    },
                    ComparisonOperator: shared.ComparisonOperatorEnumBetween.ToPointer(),
                    Exists: sdk.Bool(false),
                    Value: &shared.AttributeValue{
                        B: sdk.String("ea"),
                        Bool: sdk.Bool(false),
                        Bs: []string{
                            "ipsam",
                            "rerum",
                        },
                        L: []shared.AttributeValue{
                            shared.AttributeValue{},
                            shared.AttributeValue{},
                            shared.AttributeValue{},
                        },
                        M: map[string]shared.AttributeValue{
                            "officiis": shared.AttributeValue{},
                            "voluptatibus": shared.AttributeValue{},
                        },
                        N: sdk.String("cum"),
                        Ns: []string{
                            "alias",
                            "quia",
                            "quidem",
                            "fuga",
                        },
                        Null: sdk.Bool(false),
                        S: sdk.String("repudiandae"),
                        Ss: []string{
                            "expedita",
                        },
                    },
                },
            },
            ExpressionAttributeNames: map[string]string{
                "eos": "quibusdam",
                "odio": "praesentium",
                "odit": "explicabo",
                "corporis": "error",
            },
            ExpressionAttributeValues: map[string]shared.AttributeValue{
                "adipisci": shared.AttributeValue{
                    B: sdk.String("recusandae"),
                    Bool: sdk.Bool(false),
                    Bs: []string{
                        "ut",
                        "quidem",
                        "quis",
                    },
                    L: []shared.AttributeValue{
                        shared.AttributeValue{},
                    },
                    M: map[string]shared.AttributeValue{
                        "molestiae": shared.AttributeValue{},
                        "delectus": shared.AttributeValue{},
                        "cupiditate": shared.AttributeValue{},
                    },
                    N: sdk.String("fugit"),
                    Ns: []string{
                        "numquam",
                        "nesciunt",
                    },
                    Null: sdk.Bool(false),
                    S: sdk.String("at"),
                    Ss: []string{
                        "dignissimos",
                        "optio",
                        "necessitatibus",
                    },
                },
                "corporis": shared.AttributeValue{
                    B: sdk.String("qui"),
                    Bool: sdk.Bool(false),
                    Bs: []string{
                        "voluptatum",
                        "cupiditate",
                        "minima",
                    },
                    L: []shared.AttributeValue{
                        shared.AttributeValue{},
                        shared.AttributeValue{},
                        shared.AttributeValue{},
                        shared.AttributeValue{},
                    },
                    M: map[string]shared.AttributeValue{
                        "neque": shared.AttributeValue{},
                        "in": shared.AttributeValue{},
                    },
                    N: sdk.String("minus"),
                    Ns: []string{
                        "modi",
                        "corporis",
                    },
                    Null: sdk.Bool(false),
                    S: sdk.String("magnam"),
                    Ss: []string{
                        "maiores",
                        "tempore",
                        "aperiam",
                        "libero",
                    },
                },
                "ratione": shared.AttributeValue{
                    B: sdk.String("labore"),
                    Bool: sdk.Bool(false),
                    Bs: []string{
                        "occaecati",
                        "voluptas",
                        "quo",
                    },
                    L: []shared.AttributeValue{
                        shared.AttributeValue{},
                    },
                    M: map[string]shared.AttributeValue{
                        "fuga": shared.AttributeValue{},
                        "nostrum": shared.AttributeValue{},
                        "est": shared.AttributeValue{},
                        "impedit": shared.AttributeValue{},
                    },
                    N: sdk.String("delectus"),
                    Ns: []string{
                        "vero",
                        "odit",
                        "repellat",
                    },
                    Null: sdk.Bool(false),
                    S: sdk.String("pariatur"),
                    Ss: []string{
                        "reprehenderit",
                        "aperiam",
                    },
                },
                "odio": shared.AttributeValue{
                    B: sdk.String("minima"),
                    Bool: sdk.Bool(false),
                    Bs: []string{
                        "ducimus",
                        "excepturi",
                    },
                    L: []shared.AttributeValue{
                        shared.AttributeValue{},
                    },
                    M: map[string]shared.AttributeValue{
                        "veritatis": shared.AttributeValue{},
                        "ducimus": shared.AttributeValue{},
                        "voluptate": shared.AttributeValue{},
                    },
                    N: sdk.String("pariatur"),
                    Ns: []string{
                        "similique",
                        "optio",
                        "ex",
                        "quaerat",
                    },
                    Null: sdk.Bool(false),
                    S: sdk.String("commodi"),
                    Ss: []string{
                        "placeat",
                        "quidem",
                        "exercitationem",
                        "quam",
                    },
                },
            },
            Key: map[string]shared.AttributeValue{
                "modi": shared.AttributeValue{
                    B: sdk.String("ipsa"),
                    Bool: sdk.Bool(false),
                    Bs: []string{
                        "vero",
                        "sequi",
                        "repudiandae",
                    },
                    L: []shared.AttributeValue{
                        shared.AttributeValue{},
                        shared.AttributeValue{},
                        shared.AttributeValue{},
                    },
                    M: map[string]shared.AttributeValue{
                        "earum": shared.AttributeValue{},
                    },
                    N: sdk.String("veniam"),
                    Ns: []string{
                        "dolores",
                        "nam",
                        "dicta",
                    },
                    Null: sdk.Bool(false),
                    S: sdk.String("consequuntur"),
                    Ss: []string{
                        "nobis",
                        "ipsa",
                        "ducimus",
                        "maiores",
                    },
                },
            },
            ReturnConsumedCapacity: shared.ReturnConsumedCapacityEnumIndexes.ToPointer(),
            ReturnItemCollectionMetrics: shared.ReturnItemCollectionMetricsEnumSize.ToPointer(),
            ReturnValues: shared.ReturnValueEnumAllOld.ToPointer(),
            TableName: "pariatur",
        },
        XAmzAlgorithm: sdk.String("libero"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("nemo"),
        XAmzSecurityToken: sdk.String("aliquam"),
        XAmzSignature: sdk.String("nostrum"),
        XAmzSignedHeaders: sdk.String("doloribus"),
        XAmzTarget: operations.DeleteItemXAmzTargetEnumDynamoDb20120810DeleteItem,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteItemOutput != nil {
        // handle response
    }
}
```

## DeleteTable

<p>The <code>DeleteTable</code> operation deletes a table and all of its items. After a <code>DeleteTable</code> request, the specified table is in the <code>DELETING</code> state until DynamoDB completes the deletion. If the table is in the <code>ACTIVE</code> state, you can delete it. If a table is in <code>CREATING</code> or <code>UPDATING</code> states, then DynamoDB returns a <code>ResourceInUseException</code>. If the specified table does not exist, DynamoDB returns a <code>ResourceNotFoundException</code>. If table is already in the <code>DELETING</code> state, no error is returned. </p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> of global tables. </p> </important> <note> <p>DynamoDB might continue to accept data read and write operations, such as <code>GetItem</code> and <code>PutItem</code>, on a table in the <code>DELETING</code> state until the table deletion is complete.</p> </note> <p>When you delete a table, any indexes on that table are also deleted.</p> <p>If you have DynamoDB Streams enabled on the table, then the corresponding stream on that table goes into the <code>DISABLED</code> state, and the stream is automatically deleted after 24 hours.</p> <p>Use the <code>DescribeTable</code> action to check the status of the table. </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteTable(ctx, operations.DeleteTableRequest{
        DeleteTableInput: shared.DeleteTableInput{
            TableName: "eligendi",
        },
        XAmzAlgorithm: sdk.String("sint"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("animi"),
        XAmzSecurityToken: sdk.String("quas"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("molestias"),
        XAmzTarget: operations.DeleteTableXAmzTargetEnumDynamoDb20120810DeleteTable,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteTableOutput != nil {
        // handle response
    }
}
```

## DescribeBackup

<p>Describes an existing backup of a table.</p> <p>You can call <code>DescribeBackup</code> at a maximum rate of 10 times per second.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeBackup(ctx, operations.DescribeBackupRequest{
        DescribeBackupInput: shared.DescribeBackupInput{
            BackupArn: "odio",
        },
        XAmzAlgorithm: sdk.String("eaque"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("quos"),
        XAmzSecurityToken: sdk.String("iste"),
        XAmzSignature: sdk.String("assumenda"),
        XAmzSignedHeaders: sdk.String("tempore"),
        XAmzTarget: operations.DescribeBackupXAmzTargetEnumDynamoDb20120810DescribeBackup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeBackupOutput != nil {
        // handle response
    }
}
```

## DescribeContinuousBackups

<p>Checks the status of continuous backups and point in time recovery on the specified table. Continuous backups are <code>ENABLED</code> on all tables at table creation. If point in time recovery is enabled, <code>PointInTimeRecoveryStatus</code> will be set to ENABLED.</p> <p> After continuous backups and point in time recovery are enabled, you can restore to any point in time within <code>EarliestRestorableDateTime</code> and <code>LatestRestorableDateTime</code>. </p> <p> <code>LatestRestorableDateTime</code> is typically 5 minutes before the current time. You can restore your table to any point in time during the last 35 days. </p> <p>You can call <code>DescribeContinuousBackups</code> at a maximum rate of 10 times per second.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeContinuousBackups(ctx, operations.DescribeContinuousBackupsRequest{
        DescribeContinuousBackupsInput: shared.DescribeContinuousBackupsInput{
            TableName: "libero",
        },
        XAmzAlgorithm: sdk.String("velit"),
        XAmzContentSha256: sdk.String("doloremque"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("impedit"),
        XAmzSecurityToken: sdk.String("cum"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("adipisci"),
        XAmzTarget: operations.DescribeContinuousBackupsXAmzTargetEnumDynamoDb20120810DescribeContinuousBackups,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeContinuousBackupsOutput != nil {
        // handle response
    }
}
```

## DescribeContributorInsights

Returns information about contributor insights for a given table or global secondary index.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeContributorInsights(ctx, operations.DescribeContributorInsightsRequest{
        DescribeContributorInsightsInput: shared.DescribeContributorInsightsInput{
            IndexName: sdk.String("saepe"),
            TableName: "deserunt",
        },
        XAmzAlgorithm: sdk.String("doloremque"),
        XAmzContentSha256: sdk.String("quis"),
        XAmzCredential: sdk.String("veniam"),
        XAmzDate: sdk.String("libero"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("cupiditate"),
        XAmzSignedHeaders: sdk.String("molestiae"),
        XAmzTarget: operations.DescribeContributorInsightsXAmzTargetEnumDynamoDb20120810DescribeContributorInsights,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeContributorInsightsOutput != nil {
        // handle response
    }
}
```

## DescribeEndpoints

Returns the regional endpoint information. This action must be included in your VPC endpoint policies, or access to the DescribeEndpoints API will be denied. For more information on policy permissions, please see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/inter-network-traffic-privacy.html#inter-network-traffic-DescribeEndpoints">Internetwork traffic privacy</a>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeEndpoints(ctx, operations.DescribeEndpointsRequest{
        RequestBody: map[string]interface{}{
            "possimus": "non",
            "magnam": "itaque",
            "sed": "asperiores",
            "veniam": "consequuntur",
        },
        XAmzAlgorithm: sdk.String("facere"),
        XAmzContentSha256: sdk.String("laudantium"),
        XAmzCredential: sdk.String("odit"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("amet"),
        XAmzSignature: sdk.String("exercitationem"),
        XAmzSignedHeaders: sdk.String("ab"),
        XAmzTarget: operations.DescribeEndpointsXAmzTargetEnumDynamoDb20120810DescribeEndpoints,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeEndpointsResponse != nil {
        // handle response
    }
}
```

## DescribeExport

Describes an existing table export.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeExport(ctx, operations.DescribeExportRequest{
        DescribeExportInput: shared.DescribeExportInput{
            ExportArn: "velit",
        },
        XAmzAlgorithm: sdk.String("facilis"),
        XAmzContentSha256: sdk.String("tempore"),
        XAmzCredential: sdk.String("nisi"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("quaerat"),
        XAmzSignature: sdk.String("blanditiis"),
        XAmzSignedHeaders: sdk.String("distinctio"),
        XAmzTarget: operations.DescribeExportXAmzTargetEnumDynamoDb20120810DescribeExport,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeExportOutput != nil {
        // handle response
    }
}
```

## DescribeGlobalTable

<p>Returns information about the specified global table.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29 (Legacy)</a> of global tables. We recommend using <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> when creating new global tables, as it provides greater flexibility, higher efficiency and consumes less write capacity than 2017.11.29 (Legacy). To determine which version you are using, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.DetermineVersion.html">Determining the version</a>. To update existing global tables from version 2017.11.29 (Legacy) to version 2019.11.21 (Current), see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_upgrade.html"> Updating global tables</a>. </p> </important>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeGlobalTable(ctx, operations.DescribeGlobalTableRequest{
        DescribeGlobalTableInput: shared.DescribeGlobalTableInput{
            GlobalTableName: "nisi",
        },
        XAmzAlgorithm: sdk.String("quis"),
        XAmzContentSha256: sdk.String("nisi"),
        XAmzCredential: sdk.String("libero"),
        XAmzDate: sdk.String("minus"),
        XAmzSecurityToken: sdk.String("facere"),
        XAmzSignature: sdk.String("facilis"),
        XAmzSignedHeaders: sdk.String("ipsum"),
        XAmzTarget: operations.DescribeGlobalTableXAmzTargetEnumDynamoDb20120810DescribeGlobalTable,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeGlobalTableOutput != nil {
        // handle response
    }
}
```

## DescribeGlobalTableSettings

<p>Describes Region-specific settings for a global table.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29 (Legacy)</a> of global tables. We recommend using <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> when creating new global tables, as it provides greater flexibility, higher efficiency and consumes less write capacity than 2017.11.29 (Legacy). To determine which version you are using, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.DetermineVersion.html">Determining the version</a>. To update existing global tables from version 2017.11.29 (Legacy) to version 2019.11.21 (Current), see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_upgrade.html"> Updating global tables</a>. </p> </important>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeGlobalTableSettings(ctx, operations.DescribeGlobalTableSettingsRequest{
        DescribeGlobalTableSettingsInput: shared.DescribeGlobalTableSettingsInput{
            GlobalTableName: "ad",
        },
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("consequuntur"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("rerum"),
        XAmzSignedHeaders: sdk.String("eos"),
        XAmzTarget: operations.DescribeGlobalTableSettingsXAmzTargetEnumDynamoDb20120810DescribeGlobalTableSettings,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeGlobalTableSettingsOutput != nil {
        // handle response
    }
}
```

## DescribeImport

 Represents the properties of the import. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeImport(ctx, operations.DescribeImportRequest{
        DescribeImportInput: shared.DescribeImportInput{
            ImportArn: "reprehenderit",
        },
        XAmzAlgorithm: sdk.String("nostrum"),
        XAmzContentSha256: sdk.String("neque"),
        XAmzCredential: sdk.String("iusto"),
        XAmzDate: sdk.String("est"),
        XAmzSecurityToken: sdk.String("rem"),
        XAmzSignature: sdk.String("eligendi"),
        XAmzSignedHeaders: sdk.String("fugiat"),
        XAmzTarget: operations.DescribeImportXAmzTargetEnumDynamoDb20120810DescribeImport,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeImportOutput != nil {
        // handle response
    }
}
```

## DescribeKinesisStreamingDestination

Returns information about the status of Kinesis streaming.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeKinesisStreamingDestination(ctx, operations.DescribeKinesisStreamingDestinationRequest{
        DescribeKinesisStreamingDestinationInput: shared.DescribeKinesisStreamingDestinationInput{
            TableName: "unde",
        },
        XAmzAlgorithm: sdk.String("officiis"),
        XAmzContentSha256: sdk.String("ducimus"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("error"),
        XAmzSignature: sdk.String("porro"),
        XAmzSignedHeaders: sdk.String("vitae"),
        XAmzTarget: operations.DescribeKinesisStreamingDestinationXAmzTargetEnumDynamoDb20120810DescribeKinesisStreamingDestination,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeKinesisStreamingDestinationOutput != nil {
        // handle response
    }
}
```

## DescribeLimits

<p>Returns the current provisioned-capacity quotas for your Amazon Web Services account in a Region, both for the Region as a whole and for any one DynamoDB table that you create there.</p> <p>When you establish an Amazon Web Services account, the account has initial quotas on the maximum read capacity units and write capacity units that you can provision across all of your DynamoDB tables in a given Region. Also, there are per-table quotas that apply when you create a table there. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Service, Account, and Table Quotas</a> page in the <i>Amazon DynamoDB Developer Guide</i>.</p> <p>Although you can increase these quotas by filing a case at <a href="https://console.aws.amazon.com/support/home#/">Amazon Web Services Support Center</a>, obtaining the increase is not instantaneous. The <code>DescribeLimits</code> action lets you write code to compare the capacity you are currently using to those quotas imposed by your account so that you have enough time to apply for an increase before you hit a quota.</p> <p>For example, you could use one of the Amazon Web Services SDKs to do the following:</p> <ol> <li> <p>Call <code>DescribeLimits</code> for a particular Region to obtain your current account quotas on provisioned capacity there.</p> </li> <li> <p>Create a variable to hold the aggregate read capacity units provisioned for all your tables in that Region, and one to hold the aggregate write capacity units. Zero them both.</p> </li> <li> <p>Call <code>ListTables</code> to obtain a list of all your DynamoDB tables.</p> </li> <li> <p>For each table name listed by <code>ListTables</code>, do the following:</p> <ul> <li> <p>Call <code>DescribeTable</code> with the table name.</p> </li> <li> <p>Use the data returned by <code>DescribeTable</code> to add the read capacity units and write capacity units provisioned for the table itself to your variables.</p> </li> <li> <p>If the table has one or more global secondary indexes (GSIs), loop over these GSIs and add their provisioned capacity values to your variables as well.</p> </li> </ul> </li> <li> <p>Report the account quotas for that Region returned by <code>DescribeLimits</code>, along with the total current provisioned capacity levels you have calculated.</p> </li> </ol> <p>This will let you see whether you are getting close to your account-level quotas.</p> <p>The per-table quotas apply only when you are creating a new table. They restrict the sum of the provisioned capacity of the new table itself and all its global secondary indexes.</p> <p>For existing tables and their GSIs, DynamoDB doesn't let you increase provisioned capacity extremely rapidly, but the only quota that applies is that the aggregate provisioned capacity over all your tables and GSIs cannot exceed either of the per-account quotas.</p> <note> <p> <code>DescribeLimits</code> should only be called periodically. You can expect throttling errors if you call it more than once in a minute.</p> </note> <p>The <code>DescribeLimits</code> Request element has no content.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeLimits(ctx, operations.DescribeLimitsRequest{
        RequestBody: map[string]interface{}{
            "esse": "fugiat",
            "ad": "aspernatur",
        },
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("iusto"),
        XAmzDate: sdk.String("dignissimos"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("illo"),
        XAmzSignedHeaders: sdk.String("ab"),
        XAmzTarget: operations.DescribeLimitsXAmzTargetEnumDynamoDb20120810DescribeLimits,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeLimitsOutput != nil {
        // handle response
    }
}
```

## DescribeTable

<p>Returns information about the table, including the current status of the table, when it was created, the primary key schema, and any indexes on the table.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> of global tables. </p> </important> <note> <p>If you issue a <code>DescribeTable</code> request immediately after a <code>CreateTable</code> request, DynamoDB might return a <code>ResourceNotFoundException</code>. This is because <code>DescribeTable</code> uses an eventually consistent query, and the metadata for your table might not be available at that moment. Wait for a few seconds, and then try the <code>DescribeTable</code> request again.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeTable(ctx, operations.DescribeTableRequest{
        DescribeTableInput: shared.DescribeTableInput{
            TableName: "incidunt",
        },
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("tempore"),
        XAmzDate: sdk.String("veniam"),
        XAmzSecurityToken: sdk.String("eos"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("earum"),
        XAmzTarget: operations.DescribeTableXAmzTargetEnumDynamoDb20120810DescribeTable,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeTableOutput != nil {
        // handle response
    }
}
```

## DescribeTableReplicaAutoScaling

<p>Describes auto scaling settings across replicas of the global table at once.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> of global tables.</p> </important>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeTableReplicaAutoScaling(ctx, operations.DescribeTableReplicaAutoScalingRequest{
        DescribeTableReplicaAutoScalingInput: shared.DescribeTableReplicaAutoScalingInput{
            TableName: "reprehenderit",
        },
        XAmzAlgorithm: sdk.String("praesentium"),
        XAmzContentSha256: sdk.String("nemo"),
        XAmzCredential: sdk.String("repellat"),
        XAmzDate: sdk.String("quisquam"),
        XAmzSecurityToken: sdk.String("sequi"),
        XAmzSignature: sdk.String("nihil"),
        XAmzSignedHeaders: sdk.String("deleniti"),
        XAmzTarget: operations.DescribeTableReplicaAutoScalingXAmzTargetEnumDynamoDb20120810DescribeTableReplicaAutoScaling,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeTableReplicaAutoScalingOutput != nil {
        // handle response
    }
}
```

## DescribeTimeToLive

Gives a description of the Time to Live (TTL) status on the specified table. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeTimeToLive(ctx, operations.DescribeTimeToLiveRequest{
        DescribeTimeToLiveInput: shared.DescribeTimeToLiveInput{
            TableName: "illo",
        },
        XAmzAlgorithm: sdk.String("labore"),
        XAmzContentSha256: sdk.String("assumenda"),
        XAmzCredential: sdk.String("aliquam"),
        XAmzDate: sdk.String("quisquam"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("laudantium"),
        XAmzSignedHeaders: sdk.String("repudiandae"),
        XAmzTarget: operations.DescribeTimeToLiveXAmzTargetEnumDynamoDb20120810DescribeTimeToLive,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeTimeToLiveOutput != nil {
        // handle response
    }
}
```

## DisableKinesisStreamingDestination

Stops replication from the DynamoDB table to the Kinesis data stream. This is done without deleting either of the resources.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DisableKinesisStreamingDestination(ctx, operations.DisableKinesisStreamingDestinationRequest{
        KinesisStreamingDestinationInput: shared.KinesisStreamingDestinationInput{
            StreamArn: "consequatur",
            TableName: "maxime",
        },
        XAmzAlgorithm: sdk.String("aspernatur"),
        XAmzContentSha256: sdk.String("nam"),
        XAmzCredential: sdk.String("expedita"),
        XAmzDate: sdk.String("quas"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("repudiandae"),
        XAmzSignedHeaders: sdk.String("rerum"),
        XAmzTarget: operations.DisableKinesisStreamingDestinationXAmzTargetEnumDynamoDb20120810DisableKinesisStreamingDestination,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.KinesisStreamingDestinationOutput != nil {
        // handle response
    }
}
```

## EnableKinesisStreamingDestination

Starts table data replication to the specified Kinesis data stream at a timestamp chosen during the enable workflow. If this operation doesn't return results immediately, use DescribeKinesisStreamingDestination to check if streaming to the Kinesis data stream is ACTIVE.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.EnableKinesisStreamingDestination(ctx, operations.EnableKinesisStreamingDestinationRequest{
        KinesisStreamingDestinationInput: shared.KinesisStreamingDestinationInput{
            StreamArn: "dignissimos",
            TableName: "corporis",
        },
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("similique"),
        XAmzCredential: sdk.String("repellendus"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("commodi"),
        XAmzSignedHeaders: sdk.String("impedit"),
        XAmzTarget: operations.EnableKinesisStreamingDestinationXAmzTargetEnumDynamoDb20120810EnableKinesisStreamingDestination,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.KinesisStreamingDestinationOutput != nil {
        // handle response
    }
}
```

## ExecuteStatement

<p>This operation allows you to perform reads and singleton writes on data stored in DynamoDB, using PartiQL.</p> <p>For PartiQL reads (<code>SELECT</code> statement), if the total number of processed items exceeds the maximum dataset size limit of 1 MB, the read stops and results are returned to the user as a <code>LastEvaluatedKey</code> value to continue the read in a subsequent operation. If the filter criteria in <code>WHERE</code> clause does not match any data, the read will return an empty result set.</p> <p>A single <code>SELECT</code> statement response can return up to the maximum number of items (if using the Limit parameter) or a maximum of 1 MB of data (and then apply any filtering to the results using <code>WHERE</code> clause). If <code>LastEvaluatedKey</code> is present in the response, you need to paginate the result set. If <code>NextToken</code> is present, you need to paginate the result set and include <code>NextToken</code>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ExecuteStatement(ctx, operations.ExecuteStatementRequest{
        ExecuteStatementInput: shared.ExecuteStatementInput{
            ConsistentRead: sdk.Bool(false),
            Limit: sdk.Int64(415033),
            NextToken: sdk.String("aut"),
            Parameters: []shared.AttributeValue{
                shared.AttributeValue{
                    B: sdk.String("ad"),
                    Bool: sdk.Bool(false),
                    Bs: []string{
                        "amet",
                    },
                    L: []shared.AttributeValue{
                        shared.AttributeValue{},
                        shared.AttributeValue{},
                        shared.AttributeValue{},
                        shared.AttributeValue{},
                    },
                    M: map[string]shared.AttributeValue{
                        "quidem": shared.AttributeValue{},
                        "cum": shared.AttributeValue{},
                        "amet": shared.AttributeValue{},
                    },
                    N: sdk.String("quasi"),
                    Ns: []string{
                        "laudantium",
                    },
                    Null: sdk.Bool(false),
                    S: sdk.String("doloremque"),
                    Ss: []string{
                        "iusto",
                        "amet",
                        "provident",
                        "dolorum",
                    },
                },
            },
            ReturnConsumedCapacity: shared.ReturnConsumedCapacityEnumNone.ToPointer(),
            Statement: "provident",
        },
        XAmzAlgorithm: sdk.String("repudiandae"),
        XAmzContentSha256: sdk.String("consequatur"),
        XAmzCredential: sdk.String("nemo"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("itaque"),
        XAmzSignature: sdk.String("facilis"),
        XAmzSignedHeaders: sdk.String("corrupti"),
        XAmzTarget: operations.ExecuteStatementXAmzTargetEnumDynamoDb20120810ExecuteStatement,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExecuteStatementOutput != nil {
        // handle response
    }
}
```

## ExecuteTransaction

<p>This operation allows you to perform transactional reads or writes on data stored in DynamoDB, using PartiQL.</p> <note> <p>The entire transaction must consist of either read statements or write statements, you cannot mix both in one transaction. The EXISTS function is an exception and can be used to check the condition of specific attributes of the item in a similar manner to <code>ConditionCheck</code> in the <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/transaction-apis.html#transaction-apis-txwriteitems">TransactWriteItems</a> API.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ExecuteTransaction(ctx, operations.ExecuteTransactionRequest{
        ExecuteTransactionInput: shared.ExecuteTransactionInput{
            ClientRequestToken: sdk.String("aperiam"),
            ReturnConsumedCapacity: shared.ReturnConsumedCapacityEnumTotal.ToPointer(),
            TransactStatements: []shared.ParameterizedStatement{
                shared.ParameterizedStatement{
                    Parameters: []shared.AttributeValue{
                        shared.AttributeValue{
                            B: sdk.String("totam"),
                            Bool: sdk.Bool(false),
                            Bs: []string{
                                "voluptatem",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "sunt": shared.AttributeValue{},
                            },
                            N: sdk.String("a"),
                            Ns: []string{
                                "occaecati",
                            },
                            Null: sdk.Bool(false),
                            S: sdk.String("atque"),
                            Ss: []string{
                                "at",
                            },
                        },
                    },
                    Statement: "labore",
                },
                shared.ParameterizedStatement{
                    Parameters: []shared.AttributeValue{
                        shared.AttributeValue{
                            B: sdk.String("esse"),
                            Bool: sdk.Bool(false),
                            Bs: []string{
                                "perferendis",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "aperiam": shared.AttributeValue{},
                                "dignissimos": shared.AttributeValue{},
                            },
                            N: sdk.String("repellat"),
                            Ns: []string{
                                "porro",
                            },
                            Null: sdk.Bool(false),
                            S: sdk.String("provident"),
                            Ss: []string{
                                "eligendi",
                            },
                        },
                        shared.AttributeValue{
                            B: sdk.String("dignissimos"),
                            Bool: sdk.Bool(false),
                            Bs: []string{
                                "soluta",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "officia": shared.AttributeValue{},
                                "amet": shared.AttributeValue{},
                                "tenetur": shared.AttributeValue{},
                                "aspernatur": shared.AttributeValue{},
                            },
                            N: sdk.String("quo"),
                            Ns: []string{
                                "illum",
                                "laborum",
                                "dignissimos",
                                "vero",
                            },
                            Null: sdk.Bool(false),
                            S: sdk.String("qui"),
                            Ss: []string{
                                "repellat",
                            },
                        },
                        shared.AttributeValue{
                            B: sdk.String("explicabo"),
                            Bool: sdk.Bool(false),
                            Bs: []string{
                                "exercitationem",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "ab": shared.AttributeValue{},
                                "illo": shared.AttributeValue{},
                            },
                            N: sdk.String("hic"),
                            Ns: []string{
                                "delectus",
                                "non",
                                "distinctio",
                            },
                            Null: sdk.Bool(false),
                            S: sdk.String("in"),
                            Ss: []string{
                                "labore",
                                "numquam",
                            },
                        },
                        shared.AttributeValue{
                            B: sdk.String("repudiandae"),
                            Bool: sdk.Bool(false),
                            Bs: []string{
                                "in",
                                "explicabo",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "aperiam": shared.AttributeValue{},
                                "odit": shared.AttributeValue{},
                                "deleniti": shared.AttributeValue{},
                            },
                            N: sdk.String("enim"),
                            Ns: []string{
                                "similique",
                                "minima",
                            },
                            Null: sdk.Bool(false),
                            S: sdk.String("libero"),
                            Ss: []string{
                                "sit",
                                "modi",
                            },
                        },
                    },
                    Statement: "eum",
                },
                shared.ParameterizedStatement{
                    Parameters: []shared.AttributeValue{
                        shared.AttributeValue{
                            B: sdk.String("mollitia"),
                            Bool: sdk.Bool(false),
                            Bs: []string{
                                "fugiat",
                                "nostrum",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "reiciendis": shared.AttributeValue{},
                                "ab": shared.AttributeValue{},
                            },
                            N: sdk.String("modi"),
                            Ns: []string{
                                "aut",
                            },
                            Null: sdk.Bool(false),
                            S: sdk.String("eveniet"),
                            Ss: []string{
                                "commodi",
                                "numquam",
                            },
                        },
                    },
                    Statement: "dolorum",
                },
                shared.ParameterizedStatement{
                    Parameters: []shared.AttributeValue{
                        shared.AttributeValue{
                            B: sdk.String("voluptate"),
                            Bool: sdk.Bool(false),
                            Bs: []string{
                                "nesciunt",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "minus": shared.AttributeValue{},
                                "sunt": shared.AttributeValue{},
                                "distinctio": shared.AttributeValue{},
                                "iusto": shared.AttributeValue{},
                            },
                            N: sdk.String("quas"),
                            Ns: []string{
                                "facilis",
                            },
                            Null: sdk.Bool(false),
                            S: sdk.String("amet"),
                            Ss: []string{
                                "fuga",
                                "alias",
                            },
                        },
                        shared.AttributeValue{
                            B: sdk.String("rem"),
                            Bool: sdk.Bool(false),
                            Bs: []string{
                                "quos",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "veritatis": shared.AttributeValue{},
                                "quae": shared.AttributeValue{},
                                "eaque": shared.AttributeValue{},
                                "saepe": shared.AttributeValue{},
                            },
                            N: sdk.String("delectus"),
                            Ns: []string{
                                "nulla",
                                "officia",
                                "sed",
                            },
                            Null: sdk.Bool(false),
                            S: sdk.String("voluptatem"),
                            Ss: []string{
                                "eveniet",
                            },
                        },
                        shared.AttributeValue{
                            B: sdk.String("hic"),
                            Bool: sdk.Bool(false),
                            Bs: []string{
                                "incidunt",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "necessitatibus": shared.AttributeValue{},
                            },
                            N: sdk.String("harum"),
                            Ns: []string{
                                "beatae",
                            },
                            Null: sdk.Bool(false),
                            S: sdk.String("aliquid"),
                            Ss: []string{
                                "optio",
                                "voluptatibus",
                            },
                        },
                        shared.AttributeValue{
                            B: sdk.String("molestias"),
                            Bool: sdk.Bool(false),
                            Bs: []string{
                                "libero",
                                "totam",
                                "sequi",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "impedit": shared.AttributeValue{},
                                "ducimus": shared.AttributeValue{},
                            },
                            N: sdk.String("odit"),
                            Ns: []string{
                                "reiciendis",
                            },
                            Null: sdk.Bool(false),
                            S: sdk.String("repellat"),
                            Ss: []string{
                                "laborum",
                                "natus",
                                "accusamus",
                                "doloremque",
                            },
                        },
                    },
                    Statement: "nisi",
                },
            },
        },
        XAmzAlgorithm: sdk.String("rerum"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("voluptates"),
        XAmzDate: sdk.String("non"),
        XAmzSecurityToken: sdk.String("rem"),
        XAmzSignature: sdk.String("quia"),
        XAmzSignedHeaders: sdk.String("ullam"),
        XAmzTarget: operations.ExecuteTransactionXAmzTargetEnumDynamoDb20120810ExecuteTransaction,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExecuteTransactionOutput != nil {
        // handle response
    }
}
```

## ExportTableToPointInTime

Exports table data to an S3 bucket. The table must have point in time recovery enabled, and you can export data from any time within the point in time recovery window.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ExportTableToPointInTime(ctx, operations.ExportTableToPointInTimeRequest{
        ExportTableToPointInTimeInput: shared.ExportTableToPointInTimeInput{
            ClientToken: sdk.String("quisquam"),
            ExportFormat: shared.ExportFormatEnumDynamodbJSON.ToPointer(),
            ExportTime: types.MustTimeFromString("2020-09-26T09:11:55.543Z"),
            S3Bucket: "quae",
            S3BucketOwner: sdk.String("officiis"),
            S3Prefix: sdk.String("architecto"),
            S3SseAlgorithm: shared.S3SseAlgorithmEnumAes256.ToPointer(),
            S3SseKmsKeyID: sdk.String("enim"),
            TableArn: "optio",
        },
        XAmzAlgorithm: sdk.String("rem"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("facilis"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("a"),
        XAmzSignature: sdk.String("iste"),
        XAmzSignedHeaders: sdk.String("dicta"),
        XAmzTarget: operations.ExportTableToPointInTimeXAmzTargetEnumDynamoDb20120810ExportTableToPointInTime,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExportTableToPointInTimeOutput != nil {
        // handle response
    }
}
```

## GetItem

<p>The <code>GetItem</code> operation returns a set of attributes for the item with the given primary key. If there is no matching item, <code>GetItem</code> does not return any data and there will be no <code>Item</code> element in the response.</p> <p> <code>GetItem</code> provides an eventually consistent read by default. If your application requires a strongly consistent read, set <code>ConsistentRead</code> to <code>true</code>. Although a strongly consistent read might take more time than an eventually consistent read, it always returns the last updated value.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetItem(ctx, operations.GetItemRequest{
        GetItemInput: shared.GetItemInput{
            AttributesToGet: []string{
                "ullam",
                "dolore",
                "modi",
            },
            ConsistentRead: sdk.Bool(false),
            ExpressionAttributeNames: map[string]string{
                "maxime": "modi",
                "consequuntur": "assumenda",
                "vero": "doloribus",
                "impedit": "porro",
            },
            Key: map[string]shared.AttributeValue{
                "totam": shared.AttributeValue{
                    B: sdk.String("reiciendis"),
                    Bool: sdk.Bool(false),
                    Bs: []string{
                        "sint",
                    },
                    L: []shared.AttributeValue{
                        shared.AttributeValue{},
                        shared.AttributeValue{},
                    },
                    M: map[string]shared.AttributeValue{
                        "iure": shared.AttributeValue{},
                        "odio": shared.AttributeValue{},
                    },
                    N: sdk.String("nesciunt"),
                    Ns: []string{
                        "vel",
                        "neque",
                        "corporis",
                        "voluptas",
                    },
                    Null: sdk.Bool(false),
                    S: sdk.String("consequuntur"),
                    Ss: []string{
                        "reprehenderit",
                        "distinctio",
                        "eius",
                    },
                },
                "ipsa": shared.AttributeValue{
                    B: sdk.String("rem"),
                    Bool: sdk.Bool(false),
                    Bs: []string{
                        "accusantium",
                        "veniam",
                        "saepe",
                        "neque",
                    },
                    L: []shared.AttributeValue{
                        shared.AttributeValue{},
                        shared.AttributeValue{},
                        shared.AttributeValue{},
                        shared.AttributeValue{},
                    },
                    M: map[string]shared.AttributeValue{
                        "quos": shared.AttributeValue{},
                        "doloribus": shared.AttributeValue{},
                    },
                    N: sdk.String("fugiat"),
                    Ns: []string{
                        "delectus",
                        "velit",
                        "vitae",
                    },
                    Null: sdk.Bool(false),
                    S: sdk.String("nesciunt"),
                    Ss: []string{
                        "illo",
                        "repellat",
                        "nemo",
                    },
                },
                "doloribus": shared.AttributeValue{
                    B: sdk.String("possimus"),
                    Bool: sdk.Bool(false),
                    Bs: []string{
                        "incidunt",
                        "explicabo",
                        "ipsam",
                    },
                    L: []shared.AttributeValue{
                        shared.AttributeValue{},
                        shared.AttributeValue{},
                        shared.AttributeValue{},
                    },
                    M: map[string]shared.AttributeValue{
                        "alias": shared.AttributeValue{},
                        "quidem": shared.AttributeValue{},
                        "nesciunt": shared.AttributeValue{},
                        "commodi": shared.AttributeValue{},
                    },
                    N: sdk.String("sapiente"),
                    Ns: []string{
                        "veniam",
                    },
                    Null: sdk.Bool(false),
                    S: sdk.String("debitis"),
                    Ss: []string{
                        "sint",
                        "ut",
                        "numquam",
                    },
                },
                "tenetur": shared.AttributeValue{
                    B: sdk.String("adipisci"),
                    Bool: sdk.Bool(false),
                    Bs: []string{
                        "in",
                        "minima",
                        "ex",
                    },
                    L: []shared.AttributeValue{
                        shared.AttributeValue{},
                        shared.AttributeValue{},
                        shared.AttributeValue{},
                        shared.AttributeValue{},
                    },
                    M: map[string]shared.AttributeValue{
                        "beatae": shared.AttributeValue{},
                    },
                    N: sdk.String("hic"),
                    Ns: []string{
                        "quisquam",
                        "dolor",
                    },
                    Null: sdk.Bool(false),
                    S: sdk.String("ducimus"),
                    Ss: []string{
                        "minima",
                        "architecto",
                        "qui",
                    },
                },
            },
            ProjectionExpression: sdk.String("aliquid"),
            ReturnConsumedCapacity: shared.ReturnConsumedCapacityEnumIndexes.ToPointer(),
            TableName: "incidunt",
        },
        XAmzAlgorithm: sdk.String("adipisci"),
        XAmzContentSha256: sdk.String("praesentium"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("exercitationem"),
        XAmzSecurityToken: sdk.String("expedita"),
        XAmzSignature: sdk.String("facilis"),
        XAmzSignedHeaders: sdk.String("impedit"),
        XAmzTarget: operations.GetItemXAmzTargetEnumDynamoDb20120810GetItem,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetItemOutput != nil {
        // handle response
    }
}
```

## ImportTable

 Imports table data from an S3 bucket. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ImportTable(ctx, operations.ImportTableRequest{
        ImportTableInput: shared.ImportTableInput{
            ClientToken: sdk.String("sit"),
            InputCompressionType: shared.InputCompressionTypeEnumZstd.ToPointer(),
            InputFormat: shared.InputFormatEnumIon,
            InputFormatOptions: &shared.InputFormatOptions{
                Csv: &shared.CsvOptions{
                    Delimiter: sdk.String("consequuntur"),
                    HeaderList: []string{
                        "deserunt",
                    },
                },
            },
            S3BucketSource: shared.S3BucketSource{
                S3Bucket: "modi",
                S3BucketOwner: sdk.String("veniam"),
                S3KeyPrefix: sdk.String("quod"),
            },
            TableCreationParameters: shared.TableCreationParameters{
                AttributeDefinitions: []shared.AttributeDefinition{
                    shared.AttributeDefinition{
                        AttributeName: "a",
                        AttributeType: shared.ScalarAttributeTypeEnumB,
                    },
                    shared.AttributeDefinition{
                        AttributeName: "enim",
                        AttributeType: shared.ScalarAttributeTypeEnumB,
                    },
                    shared.AttributeDefinition{
                        AttributeName: "assumenda",
                        AttributeType: shared.ScalarAttributeTypeEnumB,
                    },
                    shared.AttributeDefinition{
                        AttributeName: "architecto",
                        AttributeType: shared.ScalarAttributeTypeEnumS,
                    },
                },
                BillingMode: shared.BillingModeEnumPayPerRequest.ToPointer(),
                GlobalSecondaryIndexes: []shared.GlobalSecondaryIndex{
                    shared.GlobalSecondaryIndex{
                        IndexName: "nobis",
                        KeySchema: []shared.KeySchemaElement{
                            shared.KeySchemaElement{
                                AttributeName: "quia",
                                KeyType: shared.KeyTypeEnumHash,
                            },
                            shared.KeySchemaElement{
                                AttributeName: "vel",
                                KeyType: shared.KeyTypeEnumRange,
                            },
                            shared.KeySchemaElement{
                                AttributeName: "debitis",
                                KeyType: shared.KeyTypeEnumHash,
                            },
                            shared.KeySchemaElement{
                                AttributeName: "architecto",
                                KeyType: shared.KeyTypeEnumHash,
                            },
                        },
                        Projection: shared.Projection{
                            NonKeyAttributes: []string{
                                "veritatis",
                            },
                            ProjectionType: shared.ProjectionTypeEnumKeysOnly.ToPointer(),
                        },
                        ProvisionedThroughput: &shared.ProvisionedThroughput{
                            ReadCapacityUnits: 765833,
                            WriteCapacityUnits: 435531,
                        },
                    },
                },
                KeySchema: []shared.KeySchemaElement{
                    shared.KeySchemaElement{
                        AttributeName: "quod",
                        KeyType: shared.KeyTypeEnumHash,
                    },
                    shared.KeySchemaElement{
                        AttributeName: "recusandae",
                        KeyType: shared.KeyTypeEnumHash,
                    },
                    shared.KeySchemaElement{
                        AttributeName: "magnam",
                        KeyType: shared.KeyTypeEnumHash,
                    },
                    shared.KeySchemaElement{
                        AttributeName: "laboriosam",
                        KeyType: shared.KeyTypeEnumHash,
                    },
                },
                ProvisionedThroughput: &shared.ProvisionedThroughput{
                    ReadCapacityUnits: 486272,
                    WriteCapacityUnits: 616941,
                },
                SSESpecification: &shared.SSESpecification{
                    Enabled: sdk.Bool(false),
                    KMSMasterKeyID: sdk.String("provident"),
                    SSEType: shared.SSETypeEnumKms.ToPointer(),
                },
                TableName: "doloribus",
            },
        },
        XAmzAlgorithm: sdk.String("facilis"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("itaque"),
        XAmzDate: sdk.String("laboriosam"),
        XAmzSecurityToken: sdk.String("unde"),
        XAmzSignature: sdk.String("modi"),
        XAmzSignedHeaders: sdk.String("perspiciatis"),
        XAmzTarget: operations.ImportTableXAmzTargetEnumDynamoDb20120810ImportTable,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImportTableOutput != nil {
        // handle response
    }
}
```

## ListBackups

<p>List backups associated with an Amazon Web Services account. To list backups for a given table, specify <code>TableName</code>. <code>ListBackups</code> returns a paginated list of results with at most 1 MB worth of items in a page. You can also specify a maximum number of entries to be returned in a page.</p> <p>In the request, start time is inclusive, but end time is exclusive. Note that these boundaries are for the time at which the original backup was requested.</p> <p>You can call <code>ListBackups</code> a maximum of five times per second.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListBackups(ctx, operations.ListBackupsRequest{
        ListBackupsInput: shared.ListBackupsInput{
            BackupType: shared.BackupTypeFilterEnumAll.ToPointer(),
            ExclusiveStartBackupArn: sdk.String("cum"),
            Limit: sdk.Int64(135548),
            TableName: sdk.String("libero"),
            TimeRangeLowerBound: types.MustTimeFromString("2022-06-11T04:54:39.342Z"),
            TimeRangeUpperBound: types.MustTimeFromString("2020-08-11T00:10:00.229Z"),
        },
        XAmzAlgorithm: sdk.String("id"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("autem"),
        XAmzDate: sdk.String("quo"),
        XAmzSecurityToken: sdk.String("nesciunt"),
        XAmzSignature: sdk.String("illum"),
        XAmzSignedHeaders: sdk.String("nemo"),
        XAmzTarget: operations.ListBackupsXAmzTargetEnumDynamoDb20120810ListBackups,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBackupsOutput != nil {
        // handle response
    }
}
```

## ListContributorInsights

Returns a list of ContributorInsightsSummary for a table and all its global secondary indexes.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListContributorInsights(ctx, operations.ListContributorInsightsRequest{
        ListContributorInsightsInput: shared.ListContributorInsightsInput{
            MaxResults: sdk.Int64(848722),
            NextToken: sdk.String("facilis"),
            TableName: sdk.String("non"),
        },
        MaxResults: sdk.String("mollitia"),
        NextToken: sdk.String("assumenda"),
        XAmzAlgorithm: sdk.String("recusandae"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("ad"),
        XAmzSecurityToken: sdk.String("facere"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("eveniet"),
        XAmzTarget: operations.ListContributorInsightsXAmzTargetEnumDynamoDb20120810ListContributorInsights,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListContributorInsightsOutput != nil {
        // handle response
    }
}
```

## ListExports

Lists completed exports within the past 90 days.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListExports(ctx, operations.ListExportsRequest{
        ListExportsInput: shared.ListExportsInput{
            MaxResults: sdk.Int64(673191),
            NextToken: sdk.String("incidunt"),
            TableArn: sdk.String("maxime"),
        },
        MaxResults: sdk.String("ipsam"),
        NextToken: sdk.String("alias"),
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("molestias"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("est"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("labore"),
        XAmzTarget: operations.ListExportsXAmzTargetEnumDynamoDb20120810ListExports,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListExportsOutput != nil {
        // handle response
    }
}
```

## ListGlobalTables

<p>Lists all global tables that have a replica in the specified Region.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29 (Legacy)</a> of global tables. We recommend using <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> when creating new global tables, as it provides greater flexibility, higher efficiency and consumes less write capacity than 2017.11.29 (Legacy). To determine which version you are using, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.DetermineVersion.html">Determining the version</a>. To update existing global tables from version 2017.11.29 (Legacy) to version 2019.11.21 (Current), see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_upgrade.html"> Updating global tables</a>. </p> </important>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListGlobalTables(ctx, operations.ListGlobalTablesRequest{
        ListGlobalTablesInput: shared.ListGlobalTablesInput{
            ExclusiveStartGlobalTableName: sdk.String("quo"),
            Limit: sdk.Int64(19462),
            RegionName: sdk.String("fugit"),
        },
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("quaerat"),
        XAmzDate: sdk.String("eligendi"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("nostrum"),
        XAmzSignedHeaders: sdk.String("officiis"),
        XAmzTarget: operations.ListGlobalTablesXAmzTargetEnumDynamoDb20120810ListGlobalTables,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListGlobalTablesOutput != nil {
        // handle response
    }
}
```

## ListImports

 Lists completed imports within the past 90 days. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListImports(ctx, operations.ListImportsRequest{
        ListImportsInput: shared.ListImportsInput{
            NextToken: sdk.String("unde"),
            PageSize: sdk.Int64(860311),
            TableArn: sdk.String("error"),
        },
        NextToken: sdk.String("mollitia"),
        PageSize: sdk.String("magnam"),
        XAmzAlgorithm: sdk.String("nostrum"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("corrupti"),
        XAmzDate: sdk.String("fuga"),
        XAmzSecurityToken: sdk.String("facere"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("quasi"),
        XAmzTarget: operations.ListImportsXAmzTargetEnumDynamoDb20120810ListImports,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListImportsOutput != nil {
        // handle response
    }
}
```

## ListTables

Returns an array of table names associated with the current account and endpoint. The output from <code>ListTables</code> is paginated, with each page returning a maximum of 100 table names.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTables(ctx, operations.ListTablesRequest{
        ExclusiveStartTableName: sdk.String("deserunt"),
        Limit: sdk.String("quod"),
        ListTablesInput: shared.ListTablesInput{
            ExclusiveStartTableName: sdk.String("laboriosam"),
            Limit: sdk.Int64(41179),
        },
        XAmzAlgorithm: sdk.String("voluptatem"),
        XAmzContentSha256: sdk.String("facere"),
        XAmzCredential: sdk.String("necessitatibus"),
        XAmzDate: sdk.String("maxime"),
        XAmzSecurityToken: sdk.String("consequatur"),
        XAmzSignature: sdk.String("eaque"),
        XAmzSignedHeaders: sdk.String("architecto"),
        XAmzTarget: operations.ListTablesXAmzTargetEnumDynamoDb20120810ListTables,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTablesOutput != nil {
        // handle response
    }
}
```

## ListTagsOfResource

<p>List all tags on an Amazon DynamoDB resource. You can call ListTagsOfResource up to 10 times per second, per account.</p> <p>For an overview on tagging DynamoDB resources, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tagging.html">Tagging for DynamoDB</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTagsOfResource(ctx, operations.ListTagsOfResourceRequest{
        ListTagsOfResourceInput: shared.ListTagsOfResourceInput{
            NextToken: sdk.String("similique"),
            ResourceArn: "porro",
        },
        XAmzAlgorithm: sdk.String("blanditiis"),
        XAmzContentSha256: sdk.String("quae"),
        XAmzCredential: sdk.String("magni"),
        XAmzDate: sdk.String("officiis"),
        XAmzSecurityToken: sdk.String("sed"),
        XAmzSignature: sdk.String("necessitatibus"),
        XAmzSignedHeaders: sdk.String("impedit"),
        XAmzTarget: operations.ListTagsOfResourceXAmzTargetEnumDynamoDb20120810ListTagsOfResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsOfResourceOutput != nil {
        // handle response
    }
}
```

## PutItem

<p>Creates a new item, or replaces an old item with a new item. If an item that has the same primary key as the new item already exists in the specified table, the new item completely replaces the existing item. You can perform a conditional put operation (add a new item if one with the specified primary key doesn't exist), or replace an existing item if it has certain attribute values. You can return the item's attribute values in the same operation, using the <code>ReturnValues</code> parameter.</p> <p>When you add an item, the primary key attributes are the only required attributes. </p> <p>Empty String and Binary attribute values are allowed. Attribute values of type String and Binary must have a length greater than zero if the attribute is used as a key attribute for a table or index. Set type attributes cannot be empty. </p> <p>Invalid Requests with empty values will be rejected with a <code>ValidationException</code> exception.</p> <note> <p>To prevent a new item from replacing an existing item, use a conditional expression that contains the <code>attribute_not_exists</code> function with the name of the attribute being used as the partition key for the table. Since every record must contain that attribute, the <code>attribute_not_exists</code> function will only succeed if no matching item exists.</p> </note> <p>For more information about <code>PutItem</code>, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithItems.html">Working with Items</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutItem(ctx, operations.PutItemRequest{
        PutItemInput: shared.PutItemInput{
            ConditionExpression: sdk.String("ipsa"),
            ConditionalOperator: shared.ConditionalOperatorEnumOr.ToPointer(),
            Expected: map[string]shared.ExpectedAttributeValue{
                "maiores": shared.ExpectedAttributeValue{
                    AttributeValueList: []shared.AttributeValue{
                        shared.AttributeValue{
                            B: sdk.String("maiores"),
                            Bool: sdk.Bool(false),
                            Bs: []string{
                                "asperiores",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "suscipit": shared.AttributeValue{},
                            },
                            N: sdk.String("earum"),
                            Ns: []string{
                                "velit",
                                "eius",
                                "esse",
                                "in",
                            },
                            Null: sdk.Bool(false),
                            S: sdk.String("eligendi"),
                            Ss: []string{
                                "neque",
                            },
                        },
                        shared.AttributeValue{
                            B: sdk.String("vero"),
                            Bool: sdk.Bool(false),
                            Bs: []string{
                                "accusantium",
                                "qui",
                                "impedit",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "dicta": shared.AttributeValue{},
                                "odit": shared.AttributeValue{},
                            },
                            N: sdk.String("corporis"),
                            Ns: []string{
                                "alias",
                                "error",
                                "vel",
                            },
                            Null: sdk.Bool(false),
                            S: sdk.String("accusantium"),
                            Ss: []string{
                                "laboriosam",
                                "ex",
                                "quas",
                            },
                        },
                        shared.AttributeValue{
                            B: sdk.String("veritatis"),
                            Bool: sdk.Bool(false),
                            Bs: []string{
                                "quae",
                                "similique",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "magni": shared.AttributeValue{},
                                "deserunt": shared.AttributeValue{},
                            },
                            N: sdk.String("delectus"),
                            Ns: []string{
                                "sed",
                                "nesciunt",
                                "maxime",
                            },
                            Null: sdk.Bool(false),
                            S: sdk.String("quis"),
                            Ss: []string{
                                "aliquam",
                                "excepturi",
                                "maiores",
                            },
                        },
                    },
                    ComparisonOperator: shared.ComparisonOperatorEnumGt.ToPointer(),
                    Exists: sdk.Bool(false),
                    Value: &shared.AttributeValue{
                        B: sdk.String("velit"),
                        Bool: sdk.Bool(false),
                        Bs: []string{
                            "amet",
                            "nemo",
                            "ipsa",
                            "quisquam",
                        },
                        L: []shared.AttributeValue{
                            shared.AttributeValue{},
                            shared.AttributeValue{},
                            shared.AttributeValue{},
                            shared.AttributeValue{},
                        },
                        M: map[string]shared.AttributeValue{
                            "molestiae": shared.AttributeValue{},
                            "aliquid": shared.AttributeValue{},
                            "asperiores": shared.AttributeValue{},
                        },
                        N: sdk.String("a"),
                        Ns: []string{
                            "perspiciatis",
                            "accusantium",
                            "dicta",
                        },
                        Null: sdk.Bool(false),
                        S: sdk.String("minus"),
                        Ss: []string{
                            "eveniet",
                            "porro",
                        },
                    },
                },
                "tempore": shared.ExpectedAttributeValue{
                    AttributeValueList: []shared.AttributeValue{
                        shared.AttributeValue{
                            B: sdk.String("modi"),
                            Bool: sdk.Bool(false),
                            Bs: []string{
                                "fugit",
                                "eius",
                                "sequi",
                                "eligendi",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "blanditiis": shared.AttributeValue{},
                                "sint": shared.AttributeValue{},
                            },
                            N: sdk.String("repellat"),
                            Ns: []string{
                                "animi",
                                "maiores",
                                "itaque",
                                "nulla",
                            },
                            Null: sdk.Bool(false),
                            S: sdk.String("deserunt"),
                            Ss: []string{
                                "velit",
                                "officiis",
                            },
                        },
                        shared.AttributeValue{
                            B: sdk.String("enim"),
                            Bool: sdk.Bool(false),
                            Bs: []string{
                                "saepe",
                                "eum",
                                "repudiandae",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "impedit": shared.AttributeValue{},
                                "quasi": shared.AttributeValue{},
                                "blanditiis": shared.AttributeValue{},
                            },
                            N: sdk.String("eius"),
                            Ns: []string{
                                "eos",
                                "nobis",
                                "natus",
                                "minus",
                            },
                            Null: sdk.Bool(false),
                            S: sdk.String("quia"),
                            Ss: []string{
                                "reprehenderit",
                                "quod",
                            },
                        },
                        shared.AttributeValue{
                            B: sdk.String("quos"),
                            Bool: sdk.Bool(false),
                            Bs: []string{
                                "amet",
                                "molestiae",
                                "amet",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "perferendis": shared.AttributeValue{},
                                "necessitatibus": shared.AttributeValue{},
                            },
                            N: sdk.String("architecto"),
                            Ns: []string{
                                "dolore",
                                "sunt",
                                "maiores",
                            },
                            Null: sdk.Bool(false),
                            S: sdk.String("neque"),
                            Ss: []string{
                                "earum",
                            },
                        },
                    },
                    ComparisonOperator: shared.ComparisonOperatorEnumLt.ToPointer(),
                    Exists: sdk.Bool(false),
                    Value: &shared.AttributeValue{
                        B: sdk.String("ipsam"),
                        Bool: sdk.Bool(false),
                        Bs: []string{
                            "exercitationem",
                        },
                        L: []shared.AttributeValue{
                            shared.AttributeValue{},
                            shared.AttributeValue{},
                        },
                        M: map[string]shared.AttributeValue{
                            "ad": shared.AttributeValue{},
                            "nisi": shared.AttributeValue{},
                        },
                        N: sdk.String("tenetur"),
                        Ns: []string{
                            "quibusdam",
                            "nemo",
                        },
                        Null: sdk.Bool(false),
                        S: sdk.String("suscipit"),
                        Ss: []string{
                            "sit",
                            "quidem",
                            "repellendus",
                            "perferendis",
                        },
                    },
                },
                "id": shared.ExpectedAttributeValue{
                    AttributeValueList: []shared.AttributeValue{
                        shared.AttributeValue{
                            B: sdk.String("sed"),
                            Bool: sdk.Bool(false),
                            Bs: []string{
                                "repellat",
                                "repudiandae",
                                "architecto",
                                "adipisci",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "dolore": shared.AttributeValue{},
                                "voluptatibus": shared.AttributeValue{},
                                "iure": shared.AttributeValue{},
                            },
                            N: sdk.String("explicabo"),
                            Ns: []string{
                                "soluta",
                                "dolorum",
                                "velit",
                                "earum",
                            },
                            Null: sdk.Bool(false),
                            S: sdk.String("praesentium"),
                            Ss: []string{
                                "non",
                                "quasi",
                                "mollitia",
                            },
                        },
                        shared.AttributeValue{
                            B: sdk.String("accusamus"),
                            Bool: sdk.Bool(false),
                            Bs: []string{
                                "cumque",
                                "doloremque",
                                "expedita",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "deserunt": shared.AttributeValue{},
                            },
                            N: sdk.String("aliquid"),
                            Ns: []string{
                                "magni",
                                "tempora",
                                "possimus",
                            },
                            Null: sdk.Bool(false),
                            S: sdk.String("dolor"),
                            Ss: []string{
                                "sed",
                                "accusamus",
                                "optio",
                            },
                        },
                        shared.AttributeValue{
                            B: sdk.String("delectus"),
                            Bool: sdk.Bool(false),
                            Bs: []string{
                                "quo",
                                "quos",
                                "asperiores",
                                "voluptatum",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "accusantium": shared.AttributeValue{},
                                "illo": shared.AttributeValue{},
                            },
                            N: sdk.String("aut"),
                            Ns: []string{
                                "nostrum",
                                "at",
                                "possimus",
                                "neque",
                            },
                            Null: sdk.Bool(false),
                            S: sdk.String("pariatur"),
                            Ss: []string{
                                "sapiente",
                                "mollitia",
                            },
                        },
                        shared.AttributeValue{
                            B: sdk.String("quae"),
                            Bool: sdk.Bool(false),
                            Bs: []string{
                                "aperiam",
                                "non",
                                "voluptates",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "quisquam": shared.AttributeValue{},
                                "quas": shared.AttributeValue{},
                            },
                            N: sdk.String("consequuntur"),
                            Ns: []string{
                                "inventore",
                                "aliquid",
                                "laudantium",
                                "est",
                            },
                            Null: sdk.Bool(false),
                            S: sdk.String("dolor"),
                            Ss: []string{
                                "consectetur",
                                "cumque",
                            },
                        },
                    },
                    ComparisonOperator: shared.ComparisonOperatorEnumGt.ToPointer(),
                    Exists: sdk.Bool(false),
                    Value: &shared.AttributeValue{
                        B: sdk.String("voluptatum"),
                        Bool: sdk.Bool(false),
                        Bs: []string{
                            "adipisci",
                            "recusandae",
                        },
                        L: []shared.AttributeValue{
                            shared.AttributeValue{},
                            shared.AttributeValue{},
                        },
                        M: map[string]shared.AttributeValue{
                            "numquam": shared.AttributeValue{},
                            "sequi": shared.AttributeValue{},
                            "voluptatum": shared.AttributeValue{},
                        },
                        N: sdk.String("sit"),
                        Ns: []string{
                            "veritatis",
                            "tenetur",
                            "autem",
                        },
                        Null: sdk.Bool(false),
                        S: sdk.String("quidem"),
                        Ss: []string{
                            "porro",
                            "deserunt",
                            "magni",
                        },
                    },
                },
                "nihil": shared.ExpectedAttributeValue{
                    AttributeValueList: []shared.AttributeValue{
                        shared.AttributeValue{
                            B: sdk.String("animi"),
                            Bool: sdk.Bool(false),
                            Bs: []string{
                                "alias",
                                "fuga",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "maxime": shared.AttributeValue{},
                                "aliquam": shared.AttributeValue{},
                            },
                            N: sdk.String("iste"),
                            Ns: []string{
                                "eligendi",
                                "placeat",
                            },
                            Null: sdk.Bool(false),
                            S: sdk.String("voluptas"),
                            Ss: []string{
                                "unde",
                                "illo",
                                "nihil",
                            },
                        },
                        shared.AttributeValue{
                            B: sdk.String("inventore"),
                            Bool: sdk.Bool(false),
                            Bs: []string{
                                "ipsam",
                                "quasi",
                                "cumque",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "facere": shared.AttributeValue{},
                                "facilis": shared.AttributeValue{},
                                "beatae": shared.AttributeValue{},
                            },
                            N: sdk.String("cumque"),
                            Ns: []string{
                                "labore",
                                "expedita",
                                "corrupti",
                                "rem",
                            },
                            Null: sdk.Bool(false),
                            S: sdk.String("atque"),
                            Ss: []string{
                                "cum",
                                "pariatur",
                                "sapiente",
                                "quo",
                            },
                        },
                    },
                    ComparisonOperator: shared.ComparisonOperatorEnumLe.ToPointer(),
                    Exists: sdk.Bool(false),
                    Value: &shared.AttributeValue{
                        B: sdk.String("quod"),
                        Bool: sdk.Bool(false),
                        Bs: []string{
                            "porro",
                            "id",
                            "excepturi",
                            "occaecati",
                        },
                        L: []shared.AttributeValue{
                            shared.AttributeValue{},
                            shared.AttributeValue{},
                            shared.AttributeValue{},
                        },
                        M: map[string]shared.AttributeValue{
                            "esse": shared.AttributeValue{},
                            "hic": shared.AttributeValue{},
                            "maxime": shared.AttributeValue{},
                            "accusantium": shared.AttributeValue{},
                        },
                        N: sdk.String("soluta"),
                        Ns: []string{
                            "pariatur",
                        },
                        Null: sdk.Bool(false),
                        S: sdk.String("eligendi"),
                        Ss: []string{
                            "veritatis",
                            "aut",
                            "laudantium",
                            "iusto",
                        },
                    },
                },
            },
            ExpressionAttributeNames: map[string]string{
                "voluptates": "tempora",
            },
            ExpressionAttributeValues: map[string]shared.AttributeValue{
                "rerum": shared.AttributeValue{
                    B: sdk.String("doloremque"),
                    Bool: sdk.Bool(false),
                    Bs: []string{
                        "eum",
                    },
                    L: []shared.AttributeValue{
                        shared.AttributeValue{},
                        shared.AttributeValue{},
                        shared.AttributeValue{},
                        shared.AttributeValue{},
                    },
                    M: map[string]shared.AttributeValue{
                        "reprehenderit": shared.AttributeValue{},
                        "voluptatum": shared.AttributeValue{},
                    },
                    N: sdk.String("blanditiis"),
                    Ns: []string{
                        "atque",
                        "rerum",
                    },
                    Null: sdk.Bool(false),
                    S: sdk.String("deserunt"),
                    Ss: []string{
                        "nostrum",
                        "atque",
                        "architecto",
                    },
                },
            },
            Item: map[string]shared.AttributeValue{
                "enim": shared.AttributeValue{
                    B: sdk.String("rem"),
                    Bool: sdk.Bool(false),
                    Bs: []string{
                        "quae",
                    },
                    L: []shared.AttributeValue{
                        shared.AttributeValue{},
                        shared.AttributeValue{},
                        shared.AttributeValue{},
                    },
                    M: map[string]shared.AttributeValue{
                        "enim": shared.AttributeValue{},
                        "labore": shared.AttributeValue{},
                        "sapiente": shared.AttributeValue{},
                        "saepe": shared.AttributeValue{},
                    },
                    N: sdk.String("delectus"),
                    Ns: []string{
                        "natus",
                        "cumque",
                        "natus",
                    },
                    Null: sdk.Bool(false),
                    S: sdk.String("quaerat"),
                    Ss: []string{
                        "quia",
                        "officiis",
                        "mollitia",
                        "cumque",
                    },
                },
                "quis": shared.AttributeValue{
                    B: sdk.String("enim"),
                    Bool: sdk.Bool(false),
                    Bs: []string{
                        "nemo",
                        "illum",
                    },
                    L: []shared.AttributeValue{
                        shared.AttributeValue{},
                    },
                    M: map[string]shared.AttributeValue{
                        "odio": shared.AttributeValue{},
                    },
                    N: sdk.String("minus"),
                    Ns: []string{
                        "recusandae",
                        "voluptates",
                        "praesentium",
                        "dicta",
                    },
                    Null: sdk.Bool(false),
                    S: sdk.String("fugit"),
                    Ss: []string{
                        "aliquid",
                    },
                },
                "necessitatibus": shared.AttributeValue{
                    B: sdk.String("sed"),
                    Bool: sdk.Bool(false),
                    Bs: []string{
                        "sunt",
                        "nesciunt",
                        "delectus",
                    },
                    L: []shared.AttributeValue{
                        shared.AttributeValue{},
                        shared.AttributeValue{},
                        shared.AttributeValue{},
                    },
                    M: map[string]shared.AttributeValue{
                        "deserunt": shared.AttributeValue{},
                        "modi": shared.AttributeValue{},
                    },
                    N: sdk.String("sunt"),
                    Ns: []string{
                        "eius",
                        "voluptatum",
                        "ipsa",
                        "at",
                    },
                    Null: sdk.Bool(false),
                    S: sdk.String("dolorem"),
                    Ss: []string{
                        "aspernatur",
                        "inventore",
                        "sequi",
                        "fugit",
                    },
                },
            },
            ReturnConsumedCapacity: shared.ReturnConsumedCapacityEnumNone.ToPointer(),
            ReturnItemCollectionMetrics: shared.ReturnItemCollectionMetricsEnumNone.ToPointer(),
            ReturnValues: shared.ReturnValueEnumNone.ToPointer(),
            TableName: "dolorem",
        },
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("aperiam"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("nulla"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("illo"),
        XAmzSignedHeaders: sdk.String("magnam"),
        XAmzTarget: operations.PutItemXAmzTargetEnumDynamoDb20120810PutItem,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutItemOutput != nil {
        // handle response
    }
}
```

## Query

<p>You must provide the name of the partition key attribute and a single value for that attribute. <code>Query</code> returns all items with that partition key value. Optionally, you can provide a sort key attribute and use a comparison operator to refine the search results.</p> <p>Use the <code>KeyConditionExpression</code> parameter to provide a specific value for the partition key. The <code>Query</code> operation will return all of the items from the table or index with that partition key value. You can optionally narrow the scope of the <code>Query</code> operation by specifying a sort key value and a comparison operator in <code>KeyConditionExpression</code>. To further refine the <code>Query</code> results, you can optionally provide a <code>FilterExpression</code>. A <code>FilterExpression</code> determines which items within the results should be returned to you. All of the other results are discarded. </p> <p> A <code>Query</code> operation always returns a result set. If no matching items are found, the result set will be empty. Queries that do not return results consume the minimum number of read capacity units for that type of read operation. </p> <note> <p> DynamoDB calculates the number of read capacity units consumed based on item size, not on the amount of data that is returned to an application. The number of capacity units consumed will be the same whether you request all of the attributes (the default behavior) or just some of them (using a projection expression). The number will also be the same whether or not you use a <code>FilterExpression</code>. </p> </note> <p> <code>Query</code> results are always sorted by the sort key value. If the data type of the sort key is Number, the results are returned in numeric order; otherwise, the results are returned in order of UTF-8 bytes. By default, the sort order is ascending. To reverse the order, set the <code>ScanIndexForward</code> parameter to false. </p> <p> A single <code>Query</code> operation will read up to the maximum number of items set (if using the <code>Limit</code> parameter) or a maximum of 1 MB of data and then apply any filtering to the results using <code>FilterExpression</code>. If <code>LastEvaluatedKey</code> is present in the response, you will need to paginate the result set. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Query.html#Query.Pagination">Paginating the Results</a> in the <i>Amazon DynamoDB Developer Guide</i>. </p> <p> <code>FilterExpression</code> is applied after a <code>Query</code> finishes, but before the results are returned. A <code>FilterExpression</code> cannot contain partition key or sort key attributes. You need to specify those attributes in the <code>KeyConditionExpression</code>. </p> <note> <p> A <code>Query</code> operation can return an empty result set and a <code>LastEvaluatedKey</code> if all the items read for the page of results are filtered out. </p> </note> <p>You can query a table, a local secondary index, or a global secondary index. For a query on a table or on a local secondary index, you can set the <code>ConsistentRead</code> parameter to <code>true</code> and obtain a strongly consistent result. Global secondary indexes support eventually consistent reads only, so do not specify <code>ConsistentRead</code> when querying a global secondary index.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.Query(ctx, operations.QueryRequest{
        ExclusiveStartKey: sdk.String("delectus"),
        Limit: sdk.String("numquam"),
        QueryInput: shared.QueryInput{
            AttributesToGet: []string{
                "nobis",
                "ex",
                "repellat",
                "quae",
            },
            ConditionalOperator: shared.ConditionalOperatorEnumOr.ToPointer(),
            ConsistentRead: sdk.Bool(false),
            ExclusiveStartKey: map[string]shared.AttributeValue{
                "hic": shared.AttributeValue{
                    B: sdk.String("excepturi"),
                    Bool: sdk.Bool(false),
                    Bs: []string{
                        "sed",
                        "beatae",
                    },
                    L: []shared.AttributeValue{
                        shared.AttributeValue{},
                        shared.AttributeValue{},
                        shared.AttributeValue{},
                    },
                    M: map[string]shared.AttributeValue{
                        "animi": shared.AttributeValue{},
                        "dolore": shared.AttributeValue{},
                    },
                    N: sdk.String("tenetur"),
                    Ns: []string{
                        "esse",
                        "animi",
                    },
                    Null: sdk.Bool(false),
                    S: sdk.String("laudantium"),
                    Ss: []string{
                        "eveniet",
                        "earum",
                    },
                },
                "velit": shared.AttributeValue{
                    B: sdk.String("officiis"),
                    Bool: sdk.Bool(false),
                    Bs: []string{
                        "rerum",
                        "itaque",
                    },
                    L: []shared.AttributeValue{
                        shared.AttributeValue{},
                        shared.AttributeValue{},
                    },
                    M: map[string]shared.AttributeValue{
                        "explicabo": shared.AttributeValue{},
                        "impedit": shared.AttributeValue{},
                    },
                    N: sdk.String("aliquid"),
                    Ns: []string{
                        "facilis",
                        "ipsum",
                    },
                    Null: sdk.Bool(false),
                    S: sdk.String("ut"),
                    Ss: []string{
                        "architecto",
                        "praesentium",
                    },
                },
                "eveniet": shared.AttributeValue{
                    B: sdk.String("dolor"),
                    Bool: sdk.Bool(false),
                    Bs: []string{
                        "libero",
                        "iste",
                        "illo",
                    },
                    L: []shared.AttributeValue{
                        shared.AttributeValue{},
                        shared.AttributeValue{},
                        shared.AttributeValue{},
                        shared.AttributeValue{},
                    },
                    M: map[string]shared.AttributeValue{
                        "temporibus": shared.AttributeValue{},
                        "sint": shared.AttributeValue{},
                        "iusto": shared.AttributeValue{},
                    },
                    N: sdk.String("enim"),
                    Ns: []string{
                        "aperiam",
                        "voluptates",
                        "laudantium",
                        "tempora",
                    },
                    Null: sdk.Bool(false),
                    S: sdk.String("quae"),
                    Ss: []string{
                        "illum",
                        "rem",
                        "tenetur",
                    },
                },
            },
            ExpressionAttributeNames: map[string]string{
                "modi": "earum",
                "architecto": "aliquam",
                "labore": "maiores",
            },
            ExpressionAttributeValues: map[string]shared.AttributeValue{
                "saepe": shared.AttributeValue{
                    B: sdk.String("consequatur"),
                    Bool: sdk.Bool(false),
                    Bs: []string{
                        "debitis",
                        "facere",
                    },
                    L: []shared.AttributeValue{
                        shared.AttributeValue{},
                        shared.AttributeValue{},
                        shared.AttributeValue{},
                        shared.AttributeValue{},
                    },
                    M: map[string]shared.AttributeValue{
                        "aliquam": shared.AttributeValue{},
                        "dolorum": shared.AttributeValue{},
                        "deserunt": shared.AttributeValue{},
                        "ad": shared.AttributeValue{},
                    },
                    N: sdk.String("reiciendis"),
                    Ns: []string{
                        "porro",
                    },
                    Null: sdk.Bool(false),
                    S: sdk.String("laborum"),
                    Ss: []string{
                        "quibusdam",
                        "omnis",
                        "aut",
                    },
                },
            },
            FilterExpression: sdk.String("ipsam"),
            IndexName: sdk.String("officia"),
            KeyConditionExpression: sdk.String("cupiditate"),
            KeyConditions: map[string]shared.Condition{
                "quia": shared.Condition{
                    AttributeValueList: []shared.AttributeValue{
                        shared.AttributeValue{
                            B: sdk.String("accusantium"),
                            Bool: sdk.Bool(false),
                            Bs: []string{
                                "nisi",
                                "molestiae",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "sed": shared.AttributeValue{},
                                "odit": shared.AttributeValue{},
                                "iusto": shared.AttributeValue{},
                            },
                            N: sdk.String("expedita"),
                            Ns: []string{
                                "repellendus",
                            },
                            Null: sdk.Bool(false),
                            S: sdk.String("nesciunt"),
                            Ss: []string{
                                "sint",
                            },
                        },
                        shared.AttributeValue{
                            B: sdk.String("dolore"),
                            Bool: sdk.Bool(false),
                            Bs: []string{
                                "accusantium",
                                "distinctio",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "est": shared.AttributeValue{},
                                "aliquam": shared.AttributeValue{},
                            },
                            N: sdk.String("delectus"),
                            Ns: []string{
                                "voluptatum",
                                "iusto",
                                "quod",
                            },
                            Null: sdk.Bool(false),
                            S: sdk.String("voluptatibus"),
                            Ss: []string{
                                "non",
                                "ullam",
                            },
                        },
                        shared.AttributeValue{
                            B: sdk.String("laborum"),
                            Bool: sdk.Bool(false),
                            Bs: []string{
                                "doloribus",
                                "animi",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "non": shared.AttributeValue{},
                                "necessitatibus": shared.AttributeValue{},
                            },
                            N: sdk.String("distinctio"),
                            Ns: []string{
                                "laboriosam",
                                "voluptatem",
                                "optio",
                                "sequi",
                            },
                            Null: sdk.Bool(false),
                            S: sdk.String("sunt"),
                            Ss: []string{
                                "voluptatibus",
                            },
                        },
                        shared.AttributeValue{
                            B: sdk.String("doloremque"),
                            Bool: sdk.Bool(false),
                            Bs: []string{
                                "amet",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "nostrum": shared.AttributeValue{},
                                "temporibus": shared.AttributeValue{},
                            },
                            N: sdk.String("ratione"),
                            Ns: []string{
                                "nisi",
                            },
                            Null: sdk.Bool(false),
                            S: sdk.String("dignissimos"),
                            Ss: []string{
                                "itaque",
                                "vitae",
                                "est",
                                "accusantium",
                            },
                        },
                    },
                    ComparisonOperator: shared.ComparisonOperatorEnumContains,
                },
                "minus": shared.Condition{
                    AttributeValueList: []shared.AttributeValue{
                        shared.AttributeValue{
                            B: sdk.String("possimus"),
                            Bool: sdk.Bool(false),
                            Bs: []string{
                                "odio",
                                "provident",
                                "sapiente",
                                "aperiam",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "provident": shared.AttributeValue{},
                            },
                            N: sdk.String("ex"),
                            Ns: []string{
                                "unde",
                                "alias",
                                "impedit",
                                "sequi",
                            },
                            Null: sdk.Bool(false),
                            S: sdk.String("commodi"),
                            Ss: []string{
                                "expedita",
                                "in",
                            },
                        },
                        shared.AttributeValue{
                            B: sdk.String("quisquam"),
                            Bool: sdk.Bool(false),
                            Bs: []string{
                                "enim",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "distinctio": shared.AttributeValue{},
                                "mollitia": shared.AttributeValue{},
                                "impedit": shared.AttributeValue{},
                                "accusamus": shared.AttributeValue{},
                            },
                            N: sdk.String("et"),
                            Ns: []string{
                                "blanditiis",
                                "cum",
                                "dicta",
                            },
                            Null: sdk.Bool(false),
                            S: sdk.String("impedit"),
                            Ss: []string{
                                "eveniet",
                                "repudiandae",
                            },
                        },
                        shared.AttributeValue{
                            B: sdk.String("sed"),
                            Bool: sdk.Bool(false),
                            Bs: []string{
                                "quas",
                                "impedit",
                                "vel",
                                "eligendi",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "beatae": shared.AttributeValue{},
                                "veritatis": shared.AttributeValue{},
                            },
                            N: sdk.String("maiores"),
                            Ns: []string{
                                "vero",
                                "quidem",
                                "illo",
                                "quo",
                            },
                            Null: sdk.Bool(false),
                            S: sdk.String("dignissimos"),
                            Ss: []string{
                                "distinctio",
                                "possimus",
                                "cum",
                                "suscipit",
                            },
                        },
                    },
                    ComparisonOperator: shared.ComparisonOperatorEnumNotContains,
                },
            },
            Limit: sdk.Int64(934782),
            ProjectionExpression: sdk.String("quod"),
            QueryFilter: map[string]shared.Condition{
                "quaerat": shared.Condition{
                    AttributeValueList: []shared.AttributeValue{
                        shared.AttributeValue{
                            B: sdk.String("ducimus"),
                            Bool: sdk.Bool(false),
                            Bs: []string{
                                "rerum",
                                "deserunt",
                                "odit",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "beatae": shared.AttributeValue{},
                            },
                            N: sdk.String("iusto"),
                            Ns: []string{
                                "magnam",
                                "odio",
                            },
                            Null: sdk.Bool(false),
                            S: sdk.String("nulla"),
                            Ss: []string{
                                "cupiditate",
                                "illo",
                                "exercitationem",
                                "laborum",
                            },
                        },
                    },
                    ComparisonOperator: shared.ComparisonOperatorEnumNotContains,
                },
                "fugit": shared.Condition{
                    AttributeValueList: []shared.AttributeValue{
                        shared.AttributeValue{
                            B: sdk.String("dolorum"),
                            Bool: sdk.Bool(false),
                            Bs: []string{
                                "nostrum",
                                "illum",
                                "quibusdam",
                                "commodi",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "consectetur": shared.AttributeValue{},
                            },
                            N: sdk.String("temporibus"),
                            Ns: []string{
                                "ipsa",
                                "maiores",
                                "exercitationem",
                                "culpa",
                            },
                            Null: sdk.Bool(false),
                            S: sdk.String("repudiandae"),
                            Ss: []string{
                                "sapiente",
                            },
                        },
                        shared.AttributeValue{
                            B: sdk.String("neque"),
                            Bool: sdk.Bool(false),
                            Bs: []string{
                                "suscipit",
                                "harum",
                                "ducimus",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "laudantium": shared.AttributeValue{},
                            },
                            N: sdk.String("iusto"),
                            Ns: []string{
                                "molestiae",
                                "quis",
                                "iure",
                            },
                            Null: sdk.Bool(false),
                            S: sdk.String("ab"),
                            Ss: []string{
                                "amet",
                                "sapiente",
                            },
                        },
                        shared.AttributeValue{
                            B: sdk.String("corporis"),
                            Bool: sdk.Bool(false),
                            Bs: []string{
                                "iure",
                                "quisquam",
                                "provident",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "nemo": shared.AttributeValue{},
                                "enim": shared.AttributeValue{},
                                "ipsam": shared.AttributeValue{},
                            },
                            N: sdk.String("minima"),
                            Ns: []string{
                                "perferendis",
                                "corrupti",
                            },
                            Null: sdk.Bool(false),
                            S: sdk.String("doloremque"),
                            Ss: []string{
                                "numquam",
                                "doloremque",
                                "cum",
                                "nobis",
                            },
                        },
                        shared.AttributeValue{
                            B: sdk.String("similique"),
                            Bool: sdk.Bool(false),
                            Bs: []string{
                                "impedit",
                                "nisi",
                                "cumque",
                                "soluta",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "nam": shared.AttributeValue{},
                                "enim": shared.AttributeValue{},
                            },
                            N: sdk.String("maiores"),
                            Ns: []string{
                                "necessitatibus",
                            },
                            Null: sdk.Bool(false),
                            S: sdk.String("maxime"),
                            Ss: []string{
                                "voluptatem",
                                "provident",
                                "adipisci",
                            },
                        },
                    },
                    ComparisonOperator: shared.ComparisonOperatorEnumEq,
                },
            },
            ReturnConsumedCapacity: shared.ReturnConsumedCapacityEnumIndexes.ToPointer(),
            ScanIndexForward: sdk.Bool(false),
            Select: shared.SelectEnumCount.ToPointer(),
            TableName: "omnis",
        },
        XAmzAlgorithm: sdk.String("explicabo"),
        XAmzContentSha256: sdk.String("vel"),
        XAmzCredential: sdk.String("cum"),
        XAmzDate: sdk.String("id"),
        XAmzSecurityToken: sdk.String("possimus"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("ipsam"),
        XAmzTarget: operations.QueryXAmzTargetEnumDynamoDb20120810Query,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QueryOutput != nil {
        // handle response
    }
}
```

## RestoreTableFromBackup

<p>Creates a new table from an existing backup. Any number of users can execute up to 50 concurrent restores (any type of restore) in a given account. </p> <p>You can call <code>RestoreTableFromBackup</code> at a maximum rate of 10 times per second.</p> <p>You must manually set up the following on the restored table:</p> <ul> <li> <p>Auto scaling policies</p> </li> <li> <p>IAM policies</p> </li> <li> <p>Amazon CloudWatch metrics and alarms</p> </li> <li> <p>Tags</p> </li> <li> <p>Stream settings</p> </li> <li> <p>Time to Live (TTL) settings</p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RestoreTableFromBackup(ctx, operations.RestoreTableFromBackupRequest{
        RestoreTableFromBackupInput: shared.RestoreTableFromBackupInput{
            BackupArn: "nostrum",
            BillingModeOverride: shared.BillingModeEnumProvisioned.ToPointer(),
            GlobalSecondaryIndexOverride: []shared.GlobalSecondaryIndex{
                shared.GlobalSecondaryIndex{
                    IndexName: "quasi",
                    KeySchema: []shared.KeySchemaElement{
                        shared.KeySchemaElement{
                            AttributeName: "nobis",
                            KeyType: shared.KeyTypeEnumHash,
                        },
                        shared.KeySchemaElement{
                            AttributeName: "voluptate",
                            KeyType: shared.KeyTypeEnumHash,
                        },
                        shared.KeySchemaElement{
                            AttributeName: "expedita",
                            KeyType: shared.KeyTypeEnumHash,
                        },
                    },
                    Projection: shared.Projection{
                        NonKeyAttributes: []string{
                            "possimus",
                            "fugit",
                            "voluptatem",
                            "repudiandae",
                        },
                        ProjectionType: shared.ProjectionTypeEnumKeysOnly.ToPointer(),
                    },
                    ProvisionedThroughput: &shared.ProvisionedThroughput{
                        ReadCapacityUnits: 411626,
                        WriteCapacityUnits: 179906,
                    },
                },
                shared.GlobalSecondaryIndex{
                    IndexName: "aliquam",
                    KeySchema: []shared.KeySchemaElement{
                        shared.KeySchemaElement{
                            AttributeName: "hic",
                            KeyType: shared.KeyTypeEnumRange,
                        },
                        shared.KeySchemaElement{
                            AttributeName: "asperiores",
                            KeyType: shared.KeyTypeEnumHash,
                        },
                        shared.KeySchemaElement{
                            AttributeName: "nesciunt",
                            KeyType: shared.KeyTypeEnumRange,
                        },
                    },
                    Projection: shared.Projection{
                        NonKeyAttributes: []string{
                            "provident",
                            "beatae",
                            "ipsa",
                        },
                        ProjectionType: shared.ProjectionTypeEnumKeysOnly.ToPointer(),
                    },
                    ProvisionedThroughput: &shared.ProvisionedThroughput{
                        ReadCapacityUnits: 721138,
                        WriteCapacityUnits: 827314,
                    },
                },
                shared.GlobalSecondaryIndex{
                    IndexName: "quo",
                    KeySchema: []shared.KeySchemaElement{
                        shared.KeySchemaElement{
                            AttributeName: "tempore",
                            KeyType: shared.KeyTypeEnumHash,
                        },
                        shared.KeySchemaElement{
                            AttributeName: "fugit",
                            KeyType: shared.KeyTypeEnumHash,
                        },
                        shared.KeySchemaElement{
                            AttributeName: "voluptate",
                            KeyType: shared.KeyTypeEnumHash,
                        },
                    },
                    Projection: shared.Projection{
                        NonKeyAttributes: []string{
                            "provident",
                            "laboriosam",
                        },
                        ProjectionType: shared.ProjectionTypeEnumInclude.ToPointer(),
                    },
                    ProvisionedThroughput: &shared.ProvisionedThroughput{
                        ReadCapacityUnits: 68292,
                        WriteCapacityUnits: 929067,
                    },
                },
            },
            LocalSecondaryIndexOverride: []shared.LocalSecondaryIndex{
                shared.LocalSecondaryIndex{
                    IndexName: "eaque",
                    KeySchema: []shared.KeySchemaElement{
                        shared.KeySchemaElement{
                            AttributeName: "qui",
                            KeyType: shared.KeyTypeEnumHash,
                        },
                    },
                    Projection: shared.Projection{
                        NonKeyAttributes: []string{
                            "quidem",
                        },
                        ProjectionType: shared.ProjectionTypeEnumAll.ToPointer(),
                    },
                },
                shared.LocalSecondaryIndex{
                    IndexName: "amet",
                    KeySchema: []shared.KeySchemaElement{
                        shared.KeySchemaElement{
                            AttributeName: "illum",
                            KeyType: shared.KeyTypeEnumRange,
                        },
                        shared.KeySchemaElement{
                            AttributeName: "unde",
                            KeyType: shared.KeyTypeEnumRange,
                        },
                    },
                    Projection: shared.Projection{
                        NonKeyAttributes: []string{
                            "tempore",
                            "amet",
                            "debitis",
                            "nobis",
                        },
                        ProjectionType: shared.ProjectionTypeEnumInclude.ToPointer(),
                    },
                },
                shared.LocalSecondaryIndex{
                    IndexName: "temporibus",
                    KeySchema: []shared.KeySchemaElement{
                        shared.KeySchemaElement{
                            AttributeName: "atque",
                            KeyType: shared.KeyTypeEnumRange,
                        },
                        shared.KeySchemaElement{
                            AttributeName: "sit",
                            KeyType: shared.KeyTypeEnumRange,
                        },
                        shared.KeySchemaElement{
                            AttributeName: "veniam",
                            KeyType: shared.KeyTypeEnumHash,
                        },
                    },
                    Projection: shared.Projection{
                        NonKeyAttributes: []string{
                            "vero",
                            "earum",
                            "doloremque",
                        },
                        ProjectionType: shared.ProjectionTypeEnumAll.ToPointer(),
                    },
                },
                shared.LocalSecondaryIndex{
                    IndexName: "alias",
                    KeySchema: []shared.KeySchemaElement{
                        shared.KeySchemaElement{
                            AttributeName: "tempora",
                            KeyType: shared.KeyTypeEnumRange,
                        },
                    },
                    Projection: shared.Projection{
                        NonKeyAttributes: []string{
                            "atque",
                            "officia",
                        },
                        ProjectionType: shared.ProjectionTypeEnumKeysOnly.ToPointer(),
                    },
                },
            },
            ProvisionedThroughputOverride: &shared.ProvisionedThroughput{
                ReadCapacityUnits: 101770,
                WriteCapacityUnits: 953564,
            },
            SSESpecificationOverride: &shared.SSESpecification{
                Enabled: sdk.Bool(false),
                KMSMasterKeyID: sdk.String("laborum"),
                SSEType: shared.SSETypeEnumAes256.ToPointer(),
            },
            TargetTableName: "quod",
        },
        XAmzAlgorithm: sdk.String("a"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("accusantium"),
        XAmzDate: sdk.String("commodi"),
        XAmzSecurityToken: sdk.String("atque"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("tenetur"),
        XAmzTarget: operations.RestoreTableFromBackupXAmzTargetEnumDynamoDb20120810RestoreTableFromBackup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RestoreTableFromBackupOutput != nil {
        // handle response
    }
}
```

## RestoreTableToPointInTime

<p>Restores the specified table to the specified point in time within <code>EarliestRestorableDateTime</code> and <code>LatestRestorableDateTime</code>. You can restore your table to any point in time during the last 35 days. Any number of users can execute up to 4 concurrent restores (any type of restore) in a given account. </p> <p> When you restore using point in time recovery, DynamoDB restores your table data to the state based on the selected date and time (day:hour:minute:second) to a new table. </p> <p> Along with data, the following are also included on the new restored table using point in time recovery: </p> <ul> <li> <p>Global secondary indexes (GSIs)</p> </li> <li> <p>Local secondary indexes (LSIs)</p> </li> <li> <p>Provisioned read and write capacity</p> </li> <li> <p>Encryption settings</p> <important> <p> All these settings come from the current settings of the source table at the time of restore. </p> </important> </li> </ul> <p>You must manually set up the following on the restored table:</p> <ul> <li> <p>Auto scaling policies</p> </li> <li> <p>IAM policies</p> </li> <li> <p>Amazon CloudWatch metrics and alarms</p> </li> <li> <p>Tags</p> </li> <li> <p>Stream settings</p> </li> <li> <p>Time to Live (TTL) settings</p> </li> <li> <p>Point in time recovery settings</p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RestoreTableToPointInTime(ctx, operations.RestoreTableToPointInTimeRequest{
        RestoreTableToPointInTimeInput: shared.RestoreTableToPointInTimeInput{
            BillingModeOverride: shared.BillingModeEnumProvisioned.ToPointer(),
            GlobalSecondaryIndexOverride: []shared.GlobalSecondaryIndex{
                shared.GlobalSecondaryIndex{
                    IndexName: "quod",
                    KeySchema: []shared.KeySchemaElement{
                        shared.KeySchemaElement{
                            AttributeName: "sapiente",
                            KeyType: shared.KeyTypeEnumRange,
                        },
                    },
                    Projection: shared.Projection{
                        NonKeyAttributes: []string{
                            "voluptate",
                            "inventore",
                            "facere",
                            "maxime",
                        },
                        ProjectionType: shared.ProjectionTypeEnumInclude.ToPointer(),
                    },
                    ProvisionedThroughput: &shared.ProvisionedThroughput{
                        ReadCapacityUnits: 66596,
                        WriteCapacityUnits: 405789,
                    },
                },
                shared.GlobalSecondaryIndex{
                    IndexName: "consectetur",
                    KeySchema: []shared.KeySchemaElement{
                        shared.KeySchemaElement{
                            AttributeName: "sed",
                            KeyType: shared.KeyTypeEnumRange,
                        },
                        shared.KeySchemaElement{
                            AttributeName: "sequi",
                            KeyType: shared.KeyTypeEnumRange,
                        },
                        shared.KeySchemaElement{
                            AttributeName: "voluptatum",
                            KeyType: shared.KeyTypeEnumHash,
                        },
                        shared.KeySchemaElement{
                            AttributeName: "laborum",
                            KeyType: shared.KeyTypeEnumRange,
                        },
                    },
                    Projection: shared.Projection{
                        NonKeyAttributes: []string{
                            "tenetur",
                            "sapiente",
                        },
                        ProjectionType: shared.ProjectionTypeEnumAll.ToPointer(),
                    },
                    ProvisionedThroughput: &shared.ProvisionedThroughput{
                        ReadCapacityUnits: 240292,
                        WriteCapacityUnits: 250298,
                    },
                },
            },
            LocalSecondaryIndexOverride: []shared.LocalSecondaryIndex{
                shared.LocalSecondaryIndex{
                    IndexName: "illum",
                    KeySchema: []shared.KeySchemaElement{
                        shared.KeySchemaElement{
                            AttributeName: "tenetur",
                            KeyType: shared.KeyTypeEnumRange,
                        },
                        shared.KeySchemaElement{
                            AttributeName: "ipsam",
                            KeyType: shared.KeyTypeEnumHash,
                        },
                        shared.KeySchemaElement{
                            AttributeName: "laborum",
                            KeyType: shared.KeyTypeEnumRange,
                        },
                        shared.KeySchemaElement{
                            AttributeName: "voluptates",
                            KeyType: shared.KeyTypeEnumHash,
                        },
                    },
                    Projection: shared.Projection{
                        NonKeyAttributes: []string{
                            "quas",
                        },
                        ProjectionType: shared.ProjectionTypeEnumKeysOnly.ToPointer(),
                    },
                },
                shared.LocalSecondaryIndex{
                    IndexName: "commodi",
                    KeySchema: []shared.KeySchemaElement{
                        shared.KeySchemaElement{
                            AttributeName: "aliquid",
                            KeyType: shared.KeyTypeEnumRange,
                        },
                        shared.KeySchemaElement{
                            AttributeName: "quidem",
                            KeyType: shared.KeyTypeEnumHash,
                        },
                        shared.KeySchemaElement{
                            AttributeName: "et",
                            KeyType: shared.KeyTypeEnumRange,
                        },
                        shared.KeySchemaElement{
                            AttributeName: "magni",
                            KeyType: shared.KeyTypeEnumRange,
                        },
                    },
                    Projection: shared.Projection{
                        NonKeyAttributes: []string{
                            "a",
                            "impedit",
                            "unde",
                            "ut",
                        },
                        ProjectionType: shared.ProjectionTypeEnumInclude.ToPointer(),
                    },
                },
                shared.LocalSecondaryIndex{
                    IndexName: "voluptas",
                    KeySchema: []shared.KeySchemaElement{
                        shared.KeySchemaElement{
                            AttributeName: "recusandae",
                            KeyType: shared.KeyTypeEnumRange,
                        },
                        shared.KeySchemaElement{
                            AttributeName: "facere",
                            KeyType: shared.KeyTypeEnumHash,
                        },
                        shared.KeySchemaElement{
                            AttributeName: "iste",
                            KeyType: shared.KeyTypeEnumRange,
                        },
                        shared.KeySchemaElement{
                            AttributeName: "dolor",
                            KeyType: shared.KeyTypeEnumRange,
                        },
                    },
                    Projection: shared.Projection{
                        NonKeyAttributes: []string{
                            "eaque",
                        },
                        ProjectionType: shared.ProjectionTypeEnumKeysOnly.ToPointer(),
                    },
                },
                shared.LocalSecondaryIndex{
                    IndexName: "laboriosam",
                    KeySchema: []shared.KeySchemaElement{
                        shared.KeySchemaElement{
                            AttributeName: "autem",
                            KeyType: shared.KeyTypeEnumRange,
                        },
                        shared.KeySchemaElement{
                            AttributeName: "explicabo",
                            KeyType: shared.KeyTypeEnumRange,
                        },
                        shared.KeySchemaElement{
                            AttributeName: "doloremque",
                            KeyType: shared.KeyTypeEnumHash,
                        },
                    },
                    Projection: shared.Projection{
                        NonKeyAttributes: []string{
                            "velit",
                        },
                        ProjectionType: shared.ProjectionTypeEnumKeysOnly.ToPointer(),
                    },
                },
            },
            ProvisionedThroughputOverride: &shared.ProvisionedThroughput{
                ReadCapacityUnits: 339094,
                WriteCapacityUnits: 242532,
            },
            RestoreDateTime: types.MustTimeFromString("2022-06-12T06:49:22.979Z"),
            SSESpecificationOverride: &shared.SSESpecification{
                Enabled: sdk.Bool(false),
                KMSMasterKeyID: sdk.String("maxime"),
                SSEType: shared.SSETypeEnumKms.ToPointer(),
            },
            SourceTableArn: sdk.String("cumque"),
            SourceTableName: sdk.String("doloremque"),
            TargetTableName: "totam",
            UseLatestRestorableTime: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("est"),
        XAmzDate: sdk.String("fugit"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("necessitatibus"),
        XAmzSignedHeaders: sdk.String("iste"),
        XAmzTarget: operations.RestoreTableToPointInTimeXAmzTargetEnumDynamoDb20120810RestoreTableToPointInTime,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RestoreTableToPointInTimeOutput != nil {
        // handle response
    }
}
```

## Scan

<p>The <code>Scan</code> operation returns one or more items and item attributes by accessing every item in a table or a secondary index. To have DynamoDB return fewer items, you can provide a <code>FilterExpression</code> operation.</p> <p>If the total number of scanned items exceeds the maximum dataset size limit of 1 MB, the scan stops and results are returned to the user as a <code>LastEvaluatedKey</code> value to continue the scan in a subsequent operation. The results also include the number of items exceeding the limit. A scan can result in no table data meeting the filter criteria. </p> <p>A single <code>Scan</code> operation reads up to the maximum number of items set (if using the <code>Limit</code> parameter) or a maximum of 1 MB of data and then apply any filtering to the results using <code>FilterExpression</code>. If <code>LastEvaluatedKey</code> is present in the response, you need to paginate the result set. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Scan.html#Scan.Pagination">Paginating the Results</a> in the <i>Amazon DynamoDB Developer Guide</i>. </p> <p> <code>Scan</code> operations proceed sequentially; however, for faster performance on a large table or secondary index, applications can request a parallel <code>Scan</code> operation by providing the <code>Segment</code> and <code>TotalSegments</code> parameters. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Scan.html#Scan.ParallelScan">Parallel Scan</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> <p> <code>Scan</code> uses eventually consistent reads when accessing the data in a table; therefore, the result set might not include the changes to data in the table immediately before the operation began. If you need a consistent copy of the data, as of the time that the <code>Scan</code> begins, you can set the <code>ConsistentRead</code> parameter to <code>true</code>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.Scan(ctx, operations.ScanRequest{
        ExclusiveStartKey: sdk.String("dicta"),
        Limit: sdk.String("ipsam"),
        ScanInput: shared.ScanInput{
            AttributesToGet: []string{
                "cumque",
            },
            ConditionalOperator: shared.ConditionalOperatorEnumOr.ToPointer(),
            ConsistentRead: sdk.Bool(false),
            ExclusiveStartKey: map[string]shared.AttributeValue{
                "beatae": shared.AttributeValue{
                    B: sdk.String("sunt"),
                    Bool: sdk.Bool(false),
                    Bs: []string{
                        "beatae",
                        "autem",
                        "ducimus",
                    },
                    L: []shared.AttributeValue{
                        shared.AttributeValue{},
                        shared.AttributeValue{},
                        shared.AttributeValue{},
                    },
                    M: map[string]shared.AttributeValue{
                        "necessitatibus": shared.AttributeValue{},
                        "ipsum": shared.AttributeValue{},
                        "impedit": shared.AttributeValue{},
                    },
                    N: sdk.String("quos"),
                    Ns: []string{
                        "distinctio",
                        "voluptatem",
                        "non",
                        "quaerat",
                    },
                    Null: sdk.Bool(false),
                    S: sdk.String("consequatur"),
                    Ss: []string{
                        "repellendus",
                        "commodi",
                        "quibusdam",
                    },
                },
            },
            ExpressionAttributeNames: map[string]string{
                "voluptas": "quaerat",
            },
            ExpressionAttributeValues: map[string]shared.AttributeValue{
                "tenetur": shared.AttributeValue{
                    B: sdk.String("assumenda"),
                    Bool: sdk.Bool(false),
                    Bs: []string{
                        "enim",
                        "ullam",
                    },
                    L: []shared.AttributeValue{
                        shared.AttributeValue{},
                        shared.AttributeValue{},
                        shared.AttributeValue{},
                    },
                    M: map[string]shared.AttributeValue{
                        "ex": shared.AttributeValue{},
                    },
                    N: sdk.String("quibusdam"),
                    Ns: []string{
                        "quia",
                    },
                    Null: sdk.Bool(false),
                    S: sdk.String("commodi"),
                    Ss: []string{
                        "quibusdam",
                    },
                },
                "numquam": shared.AttributeValue{
                    B: sdk.String("rem"),
                    Bool: sdk.Bool(false),
                    Bs: []string{
                        "omnis",
                        "neque",
                        "corporis",
                        "quod",
                    },
                    L: []shared.AttributeValue{
                        shared.AttributeValue{},
                    },
                    M: map[string]shared.AttributeValue{
                        "excepturi": shared.AttributeValue{},
                        "recusandae": shared.AttributeValue{},
                        "quos": shared.AttributeValue{},
                        "dicta": shared.AttributeValue{},
                    },
                    N: sdk.String("sapiente"),
                    Ns: []string{
                        "consequatur",
                    },
                    Null: sdk.Bool(false),
                    S: sdk.String("soluta"),
                    Ss: []string{
                        "sequi",
                        "recusandae",
                        "labore",
                        "adipisci",
                    },
                },
                "magni": shared.AttributeValue{
                    B: sdk.String("aperiam"),
                    Bool: sdk.Bool(false),
                    Bs: []string{
                        "illum",
                    },
                    L: []shared.AttributeValue{
                        shared.AttributeValue{},
                        shared.AttributeValue{},
                    },
                    M: map[string]shared.AttributeValue{
                        "beatae": shared.AttributeValue{},
                    },
                    N: sdk.String("aliquid"),
                    Ns: []string{
                        "voluptate",
                        "vel",
                    },
                    Null: sdk.Bool(false),
                    S: sdk.String("minima"),
                    Ss: []string{
                        "vel",
                    },
                },
                "laboriosam": shared.AttributeValue{
                    B: sdk.String("quaerat"),
                    Bool: sdk.Bool(false),
                    Bs: []string{
                        "rem",
                    },
                    L: []shared.AttributeValue{
                        shared.AttributeValue{},
                        shared.AttributeValue{},
                    },
                    M: map[string]shared.AttributeValue{
                        "assumenda": shared.AttributeValue{},
                    },
                    N: sdk.String("provident"),
                    Ns: []string{
                        "sed",
                        "inventore",
                        "voluptatibus",
                        "unde",
                    },
                    Null: sdk.Bool(false),
                    S: sdk.String("deserunt"),
                    Ss: []string{
                        "consequatur",
                        "adipisci",
                        "doloremque",
                        "optio",
                    },
                },
            },
            FilterExpression: sdk.String("tempora"),
            IndexName: sdk.String("debitis"),
            Limit: sdk.Int64(763937),
            ProjectionExpression: sdk.String("maxime"),
            ReturnConsumedCapacity: shared.ReturnConsumedCapacityEnumIndexes.ToPointer(),
            ScanFilter: map[string]shared.Condition{
                "id": shared.Condition{
                    AttributeValueList: []shared.AttributeValue{
                        shared.AttributeValue{
                            B: sdk.String("quos"),
                            Bool: sdk.Bool(false),
                            Bs: []string{
                                "iure",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "natus": shared.AttributeValue{},
                            },
                            N: sdk.String("voluptatem"),
                            Ns: []string{
                                "laudantium",
                                "facilis",
                            },
                            Null: sdk.Bool(false),
                            S: sdk.String("laudantium"),
                            Ss: []string{
                                "aut",
                                "quia",
                            },
                        },
                    },
                    ComparisonOperator: shared.ComparisonOperatorEnumNotNull,
                },
            },
            Segment: sdk.Int64(312690),
            Select: shared.SelectEnumAllProjectedAttributes.ToPointer(),
            TableName: "accusamus",
            TotalSegments: sdk.Int64(481307),
        },
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("neque"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("quisquam"),
        XAmzSignature: sdk.String("praesentium"),
        XAmzSignedHeaders: sdk.String("tempora"),
        XAmzTarget: operations.ScanXAmzTargetEnumDynamoDb20120810Scan,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScanOutput != nil {
        // handle response
    }
}
```

## TagResource

<p>Associate a set of tags with an Amazon DynamoDB resource. You can then activate these user-defined tags so that they appear on the Billing and Cost Management console for cost allocation tracking. You can call TagResource up to five times per second, per account. </p> <p>For an overview on tagging DynamoDB resources, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tagging.html">Tagging for DynamoDB</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        TagResourceInput: shared.TagResourceInput{
            ResourceArn: "ipsam",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "sequi",
                    Value: "magni",
                },
                shared.Tag{
                    Key: "voluptatem",
                    Value: "est",
                },
                shared.Tag{
                    Key: "amet",
                    Value: "veritatis",
                },
                shared.Tag{
                    Key: "error",
                    Value: "voluptatibus",
                },
            },
        },
        XAmzAlgorithm: sdk.String("numquam"),
        XAmzContentSha256: sdk.String("rerum"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("earum"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("numquam"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumDynamoDb20120810TagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TransactGetItems

<p> <code>TransactGetItems</code> is a synchronous operation that atomically retrieves multiple items from one or more tables (but not from indexes) in a single account and Region. A <code>TransactGetItems</code> call can contain up to 100 <code>TransactGetItem</code> objects, each of which contains a <code>Get</code> structure that specifies an item to retrieve from a table in the account and Region. A call to <code>TransactGetItems</code> cannot retrieve items from tables in more than one Amazon Web Services account or Region. The aggregate size of the items in the transaction cannot exceed 4 MB.</p> <p>DynamoDB rejects the entire <code>TransactGetItems</code> request if any of the following is true:</p> <ul> <li> <p>A conflicting operation is in the process of updating an item to be read.</p> </li> <li> <p>There is insufficient provisioned capacity for the transaction to be completed.</p> </li> <li> <p>There is a user error, such as an invalid data format.</p> </li> <li> <p>The aggregate size of the items in the transaction exceeded 4 MB.</p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TransactGetItems(ctx, operations.TransactGetItemsRequest{
        TransactGetItemsInput: shared.TransactGetItemsInput{
            ReturnConsumedCapacity: shared.ReturnConsumedCapacityEnumTotal.ToPointer(),
            TransactItems: []shared.TransactGetItem{
                shared.TransactGetItem{
                    Get: shared.Get{
                        ExpressionAttributeNames: map[string]string{
                            "animi": "voluptatum",
                            "aliquid": "nihil",
                            "facilis": "optio",
                        },
                        Key: map[string]shared.AttributeValue{
                            "eos": shared.AttributeValue{
                                B: sdk.String("magnam"),
                                Bool: sdk.Bool(false),
                                Bs: []string{
                                    "aliquid",
                                },
                                L: []shared.AttributeValue{
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                },
                                M: map[string]shared.AttributeValue{
                                    "ad": shared.AttributeValue{},
                                    "quos": shared.AttributeValue{},
                                },
                                N: sdk.String("illo"),
                                Ns: []string{
                                    "quibusdam",
                                    "fugiat",
                                },
                                Null: sdk.Bool(false),
                                S: sdk.String("impedit"),
                                Ss: []string{
                                    "atque",
                                    "voluptates",
                                    "maiores",
                                },
                            },
                            "nemo": shared.AttributeValue{
                                B: sdk.String("illo"),
                                Bool: sdk.Bool(false),
                                Bs: []string{
                                    "cumque",
                                    "expedita",
                                    "modi",
                                    "cumque",
                                },
                                L: []shared.AttributeValue{
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                },
                                M: map[string]shared.AttributeValue{
                                    "ipsum": shared.AttributeValue{},
                                    "accusamus": shared.AttributeValue{},
                                    "quisquam": shared.AttributeValue{},
                                },
                                N: sdk.String("quasi"),
                                Ns: []string{
                                    "quo",
                                },
                                Null: sdk.Bool(false),
                                S: sdk.String("temporibus"),
                                Ss: []string{
                                    "id",
                                    "quibusdam",
                                    "ipsa",
                                },
                            },
                        },
                        ProjectionExpression: sdk.String("accusamus"),
                        TableName: "placeat",
                    },
                },
                shared.TransactGetItem{
                    Get: shared.Get{
                        ExpressionAttributeNames: map[string]string{
                            "similique": "delectus",
                            "saepe": "facere",
                        },
                        Key: map[string]shared.AttributeValue{
                            "at": shared.AttributeValue{
                                B: sdk.String("molestias"),
                                Bool: sdk.Bool(false),
                                Bs: []string{
                                    "temporibus",
                                },
                                L: []shared.AttributeValue{
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                },
                                M: map[string]shared.AttributeValue{
                                    "numquam": shared.AttributeValue{},
                                    "corrupti": shared.AttributeValue{},
                                },
                                N: sdk.String("similique"),
                                Ns: []string{
                                    "esse",
                                    "reiciendis",
                                },
                                Null: sdk.Bool(false),
                                S: sdk.String("iste"),
                                Ss: []string{
                                    "occaecati",
                                },
                            },
                            "aut": shared.AttributeValue{
                                B: sdk.String("impedit"),
                                Bool: sdk.Bool(false),
                                Bs: []string{
                                    "quos",
                                    "blanditiis",
                                },
                                L: []shared.AttributeValue{
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                },
                                M: map[string]shared.AttributeValue{
                                    "provident": shared.AttributeValue{},
                                },
                                N: sdk.String("quas"),
                                Ns: []string{
                                    "vero",
                                },
                                Null: sdk.Bool(false),
                                S: sdk.String("fuga"),
                                Ss: []string{
                                    "maiores",
                                    "error",
                                    "recusandae",
                                },
                            },
                            "a": shared.AttributeValue{
                                B: sdk.String("consectetur"),
                                Bool: sdk.Bool(false),
                                Bs: []string{
                                    "voluptatibus",
                                    "assumenda",
                                    "repellendus",
                                    "omnis",
                                },
                                L: []shared.AttributeValue{
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                },
                                M: map[string]shared.AttributeValue{
                                    "voluptatibus": shared.AttributeValue{},
                                    "aut": shared.AttributeValue{},
                                },
                                N: sdk.String("quam"),
                                Ns: []string{
                                    "similique",
                                    "asperiores",
                                    "modi",
                                },
                                Null: sdk.Bool(false),
                                S: sdk.String("facere"),
                                Ss: []string{
                                    "quis",
                                },
                            },
                        },
                        ProjectionExpression: sdk.String("in"),
                        TableName: "sed",
                    },
                },
                shared.TransactGetItem{
                    Get: shared.Get{
                        ExpressionAttributeNames: map[string]string{
                            "porro": "fugiat",
                            "soluta": "ipsa",
                        },
                        Key: map[string]shared.AttributeValue{
                            "labore": shared.AttributeValue{
                                B: sdk.String("vero"),
                                Bool: sdk.Bool(false),
                                Bs: []string{
                                    "quas",
                                },
                                L: []shared.AttributeValue{
                                    shared.AttributeValue{},
                                },
                                M: map[string]shared.AttributeValue{
                                    "praesentium": shared.AttributeValue{},
                                },
                                N: sdk.String("iusto"),
                                Ns: []string{
                                    "enim",
                                    "iure",
                                    "laudantium",
                                    "modi",
                                },
                                Null: sdk.Bool(false),
                                S: sdk.String("magnam"),
                                Ss: []string{
                                    "nulla",
                                    "repudiandae",
                                    "quibusdam",
                                    "praesentium",
                                },
                            },
                            "enim": shared.AttributeValue{
                                B: sdk.String("animi"),
                                Bool: sdk.Bool(false),
                                Bs: []string{
                                    "quae",
                                    "eum",
                                    "nostrum",
                                },
                                L: []shared.AttributeValue{
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                },
                                M: map[string]shared.AttributeValue{
                                    "ratione": shared.AttributeValue{},
                                    "blanditiis": shared.AttributeValue{},
                                },
                                N: sdk.String("quidem"),
                                Ns: []string{
                                    "reiciendis",
                                    "placeat",
                                    "dolores",
                                    "consequatur",
                                },
                                Null: sdk.Bool(false),
                                S: sdk.String("nesciunt"),
                                Ss: []string{
                                    "quidem",
                                },
                            },
                            "voluptas": shared.AttributeValue{
                                B: sdk.String("quo"),
                                Bool: sdk.Bool(false),
                                Bs: []string{
                                    "dignissimos",
                                    "omnis",
                                    "omnis",
                                },
                                L: []shared.AttributeValue{
                                    shared.AttributeValue{},
                                },
                                M: map[string]shared.AttributeValue{
                                    "quidem": shared.AttributeValue{},
                                },
                                N: sdk.String("molestiae"),
                                Ns: []string{
                                    "vitae",
                                    "dolor",
                                    "ad",
                                    "atque",
                                },
                                Null: sdk.Bool(false),
                                S: sdk.String("ut"),
                                Ss: []string{
                                    "reprehenderit",
                                    "deserunt",
                                    "itaque",
                                    "et",
                                },
                            },
                            "eos": shared.AttributeValue{
                                B: sdk.String("impedit"),
                                Bool: sdk.Bool(false),
                                Bs: []string{
                                    "praesentium",
                                    "natus",
                                },
                                L: []shared.AttributeValue{
                                    shared.AttributeValue{},
                                },
                                M: map[string]shared.AttributeValue{
                                    "laudantium": shared.AttributeValue{},
                                    "aspernatur": shared.AttributeValue{},
                                    "eligendi": shared.AttributeValue{},
                                    "repudiandae": shared.AttributeValue{},
                                },
                                N: sdk.String("dicta"),
                                Ns: []string{
                                    "ullam",
                                },
                                Null: sdk.Bool(false),
                                S: sdk.String("iusto"),
                                Ss: []string{
                                    "voluptate",
                                },
                            },
                        },
                        ProjectionExpression: sdk.String("sed"),
                        TableName: "dolorem",
                    },
                },
                shared.TransactGetItem{
                    Get: shared.Get{
                        ExpressionAttributeNames: map[string]string{
                            "exercitationem": "amet",
                        },
                        Key: map[string]shared.AttributeValue{
                            "voluptate": shared.AttributeValue{
                                B: sdk.String("pariatur"),
                                Bool: sdk.Bool(false),
                                Bs: []string{
                                    "a",
                                    "fuga",
                                    "totam",
                                    "cupiditate",
                                },
                                L: []shared.AttributeValue{
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                },
                                M: map[string]shared.AttributeValue{
                                    "omnis": shared.AttributeValue{},
                                    "quam": shared.AttributeValue{},
                                    "exercitationem": shared.AttributeValue{},
                                    "voluptates": shared.AttributeValue{},
                                },
                                N: sdk.String("sequi"),
                                Ns: []string{
                                    "commodi",
                                    "vel",
                                },
                                Null: sdk.Bool(false),
                                S: sdk.String("rem"),
                                Ss: []string{
                                    "aperiam",
                                    "perspiciatis",
                                },
                            },
                            "fugit": shared.AttributeValue{
                                B: sdk.String("itaque"),
                                Bool: sdk.Bool(false),
                                Bs: []string{
                                    "cumque",
                                    "dolor",
                                    "repellendus",
                                },
                                L: []shared.AttributeValue{
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                },
                                M: map[string]shared.AttributeValue{
                                    "minima": shared.AttributeValue{},
                                    "a": shared.AttributeValue{},
                                    "beatae": shared.AttributeValue{},
                                    "vitae": shared.AttributeValue{},
                                },
                                N: sdk.String("veritatis"),
                                Ns: []string{
                                    "earum",
                                    "laborum",
                                    "dicta",
                                    "voluptatem",
                                },
                                Null: sdk.Bool(false),
                                S: sdk.String("odit"),
                                Ss: []string{
                                    "pariatur",
                                    "enim",
                                },
                            },
                        },
                        ProjectionExpression: sdk.String("numquam"),
                        TableName: "architecto",
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("est"),
        XAmzContentSha256: sdk.String("quaerat"),
        XAmzCredential: sdk.String("facere"),
        XAmzDate: sdk.String("vitae"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("alias"),
        XAmzSignedHeaders: sdk.String("sapiente"),
        XAmzTarget: operations.TransactGetItemsXAmzTargetEnumDynamoDb20120810TransactGetItems,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransactGetItemsOutput != nil {
        // handle response
    }
}
```

## TransactWriteItems

<p> <code>TransactWriteItems</code> is a synchronous write operation that groups up to 100 action requests. These actions can target items in different tables, but not in different Amazon Web Services accounts or Regions, and no two actions can target the same item. For example, you cannot both <code>ConditionCheck</code> and <code>Update</code> the same item. The aggregate size of the items in the transaction cannot exceed 4 MB.</p> <p>The actions are completed atomically so that either all of them succeed, or all of them fail. They are defined by the following objects:</p> <ul> <li> <p> <code>Put</code>  —   Initiates a <code>PutItem</code> operation to write a new item. This structure specifies the primary key of the item to be written, the name of the table to write it in, an optional condition expression that must be satisfied for the write to succeed, a list of the item's attributes, and a field indicating whether to retrieve the item's attributes if the condition is not met.</p> </li> <li> <p> <code>Update</code>  —   Initiates an <code>UpdateItem</code> operation to update an existing item. This structure specifies the primary key of the item to be updated, the name of the table where it resides, an optional condition expression that must be satisfied for the update to succeed, an expression that defines one or more attributes to be updated, and a field indicating whether to retrieve the item's attributes if the condition is not met.</p> </li> <li> <p> <code>Delete</code>  —   Initiates a <code>DeleteItem</code> operation to delete an existing item. This structure specifies the primary key of the item to be deleted, the name of the table where it resides, an optional condition expression that must be satisfied for the deletion to succeed, and a field indicating whether to retrieve the item's attributes if the condition is not met.</p> </li> <li> <p> <code>ConditionCheck</code>  —   Applies a condition to an item that is not being modified by the transaction. This structure specifies the primary key of the item to be checked, the name of the table where it resides, a condition expression that must be satisfied for the transaction to succeed, and a field indicating whether to retrieve the item's attributes if the condition is not met.</p> </li> </ul> <p>DynamoDB rejects the entire <code>TransactWriteItems</code> request if any of the following is true:</p> <ul> <li> <p>A condition in one of the condition expressions is not met.</p> </li> <li> <p>An ongoing operation is in the process of updating the same item.</p> </li> <li> <p>There is insufficient provisioned capacity for the transaction to be completed.</p> </li> <li> <p>An item size becomes too large (bigger than 400 KB), a local secondary index (LSI) becomes too large, or a similar validation error occurs because of changes made by the transaction.</p> </li> <li> <p>The aggregate size of the items in the transaction exceeds 4 MB.</p> </li> <li> <p>There is a user error, such as an invalid data format.</p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TransactWriteItems(ctx, operations.TransactWriteItemsRequest{
        TransactWriteItemsInput: shared.TransactWriteItemsInput{
            ClientRequestToken: sdk.String("officiis"),
            ReturnConsumedCapacity: shared.ReturnConsumedCapacityEnumNone.ToPointer(),
            ReturnItemCollectionMetrics: shared.ReturnItemCollectionMetricsEnumSize.ToPointer(),
            TransactItems: []shared.TransactWriteItem{
                shared.TransactWriteItem{
                    ConditionCheck: &shared.ConditionCheck{
                        ConditionExpression: "odio",
                        ExpressionAttributeNames: map[string]string{
                            "ipsa": "distinctio",
                            "placeat": "quod",
                            "eligendi": "sit",
                        },
                        ExpressionAttributeValues: map[string]shared.AttributeValue{
                            "distinctio": shared.AttributeValue{
                                B: sdk.String("distinctio"),
                                Bool: sdk.Bool(false),
                                Bs: []string{
                                    "illum",
                                    "soluta",
                                    "magnam",
                                    "laudantium",
                                },
                                L: []shared.AttributeValue{
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                },
                                M: map[string]shared.AttributeValue{
                                    "doloremque": shared.AttributeValue{},
                                    "corrupti": shared.AttributeValue{},
                                },
                                N: sdk.String("reiciendis"),
                                Ns: []string{
                                    "aliquam",
                                    "repudiandae",
                                    "amet",
                                },
                                Null: sdk.Bool(false),
                                S: sdk.String("natus"),
                                Ss: []string{
                                    "officiis",
                                },
                            },
                            "eum": shared.AttributeValue{
                                B: sdk.String("rerum"),
                                Bool: sdk.Bool(false),
                                Bs: []string{
                                    "ab",
                                    "ad",
                                    "blanditiis",
                                    "porro",
                                },
                                L: []shared.AttributeValue{
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                },
                                M: map[string]shared.AttributeValue{
                                    "ut": shared.AttributeValue{},
                                    "earum": shared.AttributeValue{},
                                    "ullam": shared.AttributeValue{},
                                    "numquam": shared.AttributeValue{},
                                },
                                N: sdk.String("enim"),
                                Ns: []string{
                                    "occaecati",
                                    "itaque",
                                    "fuga",
                                },
                                Null: sdk.Bool(false),
                                S: sdk.String("consectetur"),
                                Ss: []string{
                                    "aspernatur",
                                    "explicabo",
                                },
                            },
                            "suscipit": shared.AttributeValue{
                                B: sdk.String("ipsa"),
                                Bool: sdk.Bool(false),
                                Bs: []string{
                                    "sint",
                                    "nobis",
                                    "qui",
                                    "accusantium",
                                },
                                L: []shared.AttributeValue{
                                    shared.AttributeValue{},
                                },
                                M: map[string]shared.AttributeValue{
                                    "recusandae": shared.AttributeValue{},
                                    "voluptate": shared.AttributeValue{},
                                    "deleniti": shared.AttributeValue{},
                                    "est": shared.AttributeValue{},
                                },
                                N: sdk.String("et"),
                                Ns: []string{
                                    "quibusdam",
                                    "quos",
                                    "maiores",
                                },
                                Null: sdk.Bool(false),
                                S: sdk.String("quidem"),
                                Ss: []string{
                                    "culpa",
                                    "doloremque",
                                },
                            },
                            "fuga": shared.AttributeValue{
                                B: sdk.String("dicta"),
                                Bool: sdk.Bool(false),
                                Bs: []string{
                                    "suscipit",
                                },
                                L: []shared.AttributeValue{
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                },
                                M: map[string]shared.AttributeValue{
                                    "dignissimos": shared.AttributeValue{},
                                    "fugit": shared.AttributeValue{},
                                    "ratione": shared.AttributeValue{},
                                    "possimus": shared.AttributeValue{},
                                },
                                N: sdk.String("quaerat"),
                                Ns: []string{
                                    "natus",
                                },
                                Null: sdk.Bool(false),
                                S: sdk.String("esse"),
                                Ss: []string{
                                    "deserunt",
                                    "ratione",
                                    "ipsa",
                                    "debitis",
                                },
                            },
                        },
                        Key: map[string]shared.AttributeValue{
                            "deserunt": shared.AttributeValue{
                                B: sdk.String("hic"),
                                Bool: sdk.Bool(false),
                                Bs: []string{
                                    "consequuntur",
                                    "ipsam",
                                },
                                L: []shared.AttributeValue{
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                },
                                M: map[string]shared.AttributeValue{
                                    "omnis": shared.AttributeValue{},
                                },
                                N: sdk.String("dicta"),
                                Ns: []string{
                                    "explicabo",
                                },
                                Null: sdk.Bool(false),
                                S: sdk.String("consequatur"),
                                Ss: []string{
                                    "consequatur",
                                },
                            },
                            "fugiat": shared.AttributeValue{
                                B: sdk.String("voluptatum"),
                                Bool: sdk.Bool(false),
                                Bs: []string{
                                    "hic",
                                },
                                L: []shared.AttributeValue{
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                },
                                M: map[string]shared.AttributeValue{
                                    "itaque": shared.AttributeValue{},
                                    "distinctio": shared.AttributeValue{},
                                    "iusto": shared.AttributeValue{},
                                },
                                N: sdk.String("dignissimos"),
                                Ns: []string{
                                    "occaecati",
                                    "assumenda",
                                    "sunt",
                                },
                                Null: sdk.Bool(false),
                                S: sdk.String("odit"),
                                Ss: []string{
                                    "deleniti",
                                    "optio",
                                    "quasi",
                                    "repellat",
                                },
                            },
                            "atque": shared.AttributeValue{
                                B: sdk.String("magnam"),
                                Bool: sdk.Bool(false),
                                Bs: []string{
                                    "amet",
                                    "corrupti",
                                    "sunt",
                                },
                                L: []shared.AttributeValue{
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                },
                                M: map[string]shared.AttributeValue{
                                    "illum": shared.AttributeValue{},
                                    "porro": shared.AttributeValue{},
                                    "quaerat": shared.AttributeValue{},
                                    "magni": shared.AttributeValue{},
                                },
                                N: sdk.String("cumque"),
                                Ns: []string{
                                    "in",
                                    "commodi",
                                    "maxime",
                                },
                                Null: sdk.Bool(false),
                                S: sdk.String("sed"),
                                Ss: []string{
                                    "consequuntur",
                                    "possimus",
                                    "delectus",
                                    "harum",
                                },
                            },
                        },
                        ReturnValuesOnConditionCheckFailure: shared.ReturnValuesOnConditionCheckFailureEnumAllOld.ToPointer(),
                        TableName: "eligendi",
                    },
                    Delete: &shared.Delete{
                        ConditionExpression: sdk.String("hic"),
                        ExpressionAttributeNames: map[string]string{
                            "illo": "nobis",
                            "esse": "nisi",
                            "explicabo": "sequi",
                            "alias": "reiciendis",
                        },
                        ExpressionAttributeValues: map[string]shared.AttributeValue{
                            "numquam": shared.AttributeValue{
                                B: sdk.String("vitae"),
                                Bool: sdk.Bool(false),
                                Bs: []string{
                                    "nam",
                                    "architecto",
                                    "rerum",
                                    "assumenda",
                                },
                                L: []shared.AttributeValue{
                                    shared.AttributeValue{},
                                },
                                M: map[string]shared.AttributeValue{
                                    "hic": shared.AttributeValue{},
                                },
                                N: sdk.String("repellendus"),
                                Ns: []string{
                                    "ab",
                                    "magnam",
                                    "pariatur",
                                },
                                Null: sdk.Bool(false),
                                S: sdk.String("expedita"),
                                Ss: []string{
                                    "tempore",
                                    "recusandae",
                                },
                            },
                            "nostrum": shared.AttributeValue{
                                B: sdk.String("officia"),
                                Bool: sdk.Bool(false),
                                Bs: []string{
                                    "laudantium",
                                    "corporis",
                                },
                                L: []shared.AttributeValue{
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                },
                                M: map[string]shared.AttributeValue{
                                    "deleniti": shared.AttributeValue{},
                                    "necessitatibus": shared.AttributeValue{},
                                    "aspernatur": shared.AttributeValue{},
                                },
                                N: sdk.String("dolores"),
                                Ns: []string{
                                    "vero",
                                    "eos",
                                    "voluptatem",
                                },
                                Null: sdk.Bool(false),
                                S: sdk.String("temporibus"),
                                Ss: []string{
                                    "quae",
                                    "commodi",
                                    "a",
                                },
                            },
                            "minus": shared.AttributeValue{
                                B: sdk.String("sed"),
                                Bool: sdk.Bool(false),
                                Bs: []string{
                                    "quia",
                                    "iusto",
                                    "ab",
                                },
                                L: []shared.AttributeValue{
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                },
                                M: map[string]shared.AttributeValue{
                                    "blanditiis": shared.AttributeValue{},
                                },
                                N: sdk.String("sint"),
                                Ns: []string{
                                    "ullam",
                                    "molestiae",
                                    "itaque",
                                    "rem",
                                },
                                Null: sdk.Bool(false),
                                S: sdk.String("nemo"),
                                Ss: []string{
                                    "recusandae",
                                    "omnis",
                                },
                            },
                        },
                        Key: map[string]shared.AttributeValue{
                            "aliquam": shared.AttributeValue{
                                B: sdk.String("dolor"),
                                Bool: sdk.Bool(false),
                                Bs: []string{
                                    "quibusdam",
                                    "magni",
                                    "consequuntur",
                                },
                                L: []shared.AttributeValue{
                                    shared.AttributeValue{},
                                },
                                M: map[string]shared.AttributeValue{
                                    "commodi": shared.AttributeValue{},
                                    "ipsam": shared.AttributeValue{},
                                },
                                N: sdk.String("vel"),
                                Ns: []string{
                                    "modi",
                                    "nisi",
                                    "explicabo",
                                },
                                Null: sdk.Bool(false),
                                S: sdk.String("modi"),
                                Ss: []string{
                                    "odio",
                                },
                            },
                        },
                        ReturnValuesOnConditionCheckFailure: shared.ReturnValuesOnConditionCheckFailureEnumAllOld.ToPointer(),
                        TableName: "voluptatum",
                    },
                    Put: &shared.Put{
                        ConditionExpression: sdk.String("tempora"),
                        ExpressionAttributeNames: map[string]string{
                            "quam": "dolorum",
                            "libero": "ratione",
                            "molestiae": "optio",
                            "saepe": "maiores",
                        },
                        ExpressionAttributeValues: map[string]shared.AttributeValue{
                            "sed": shared.AttributeValue{
                                B: sdk.String("eos"),
                                Bool: sdk.Bool(false),
                                Bs: []string{
                                    "quis",
                                },
                                L: []shared.AttributeValue{
                                    shared.AttributeValue{},
                                },
                                M: map[string]shared.AttributeValue{
                                    "labore": shared.AttributeValue{},
                                    "fugiat": shared.AttributeValue{},
                                    "quidem": shared.AttributeValue{},
                                },
                                N: sdk.String("exercitationem"),
                                Ns: []string{
                                    "modi",
                                    "quasi",
                                },
                                Null: sdk.Bool(false),
                                S: sdk.String("quae"),
                                Ss: []string{
                                    "possimus",
                                    "quo",
                                    "suscipit",
                                },
                            },
                        },
                        Item: map[string]shared.AttributeValue{
                            "sint": shared.AttributeValue{
                                B: sdk.String("est"),
                                Bool: sdk.Bool(false),
                                Bs: []string{
                                    "provident",
                                    "alias",
                                    "deserunt",
                                    "fugit",
                                },
                                L: []shared.AttributeValue{
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                },
                                M: map[string]shared.AttributeValue{
                                    "molestiae": shared.AttributeValue{},
                                    "maxime": shared.AttributeValue{},
                                    "facere": shared.AttributeValue{},
                                    "impedit": shared.AttributeValue{},
                                },
                                N: sdk.String("cupiditate"),
                                Ns: []string{
                                    "quasi",
                                    "maiores",
                                    "voluptatem",
                                },
                                Null: sdk.Bool(false),
                                S: sdk.String("aliquid"),
                                Ss: []string{
                                    "unde",
                                    "corrupti",
                                    "quae",
                                },
                            },
                            "facere": shared.AttributeValue{
                                B: sdk.String("ea"),
                                Bool: sdk.Bool(false),
                                Bs: []string{
                                    "nam",
                                    "amet",
                                    "adipisci",
                                },
                                L: []shared.AttributeValue{
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                },
                                M: map[string]shared.AttributeValue{
                                    "similique": shared.AttributeValue{},
                                    "fuga": shared.AttributeValue{},
                                    "consectetur": shared.AttributeValue{},
                                    "labore": shared.AttributeValue{},
                                },
                                N: sdk.String("laudantium"),
                                Ns: []string{
                                    "adipisci",
                                    "veritatis",
                                    "nam",
                                    "voluptatibus",
                                },
                                Null: sdk.Bool(false),
                                S: sdk.String("magnam"),
                                Ss: []string{
                                    "ducimus",
                                },
                            },
                        },
                        ReturnValuesOnConditionCheckFailure: shared.ReturnValuesOnConditionCheckFailureEnumNone.ToPointer(),
                        TableName: "necessitatibus",
                    },
                    Update: &shared.Update{
                        ConditionExpression: sdk.String("numquam"),
                        ExpressionAttributeNames: map[string]string{
                            "eligendi": "sapiente",
                            "alias": "impedit",
                            "numquam": "aspernatur",
                            "nobis": "nihil",
                        },
                        ExpressionAttributeValues: map[string]shared.AttributeValue{
                            "reiciendis": shared.AttributeValue{
                                B: sdk.String("vitae"),
                                Bool: sdk.Bool(false),
                                Bs: []string{
                                    "nisi",
                                    "consequuntur",
                                },
                                L: []shared.AttributeValue{
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                },
                                M: map[string]shared.AttributeValue{
                                    "excepturi": shared.AttributeValue{},
                                },
                                N: sdk.String("corrupti"),
                                Ns: []string{
                                    "perferendis",
                                    "quibusdam",
                                    "impedit",
                                },
                                Null: sdk.Bool(false),
                                S: sdk.String("ducimus"),
                                Ss: []string{
                                    "nisi",
                                    "dolor",
                                },
                            },
                            "fugit": shared.AttributeValue{
                                B: sdk.String("dolore"),
                                Bool: sdk.Bool(false),
                                Bs: []string{
                                    "maxime",
                                    "expedita",
                                    "accusantium",
                                    "ea",
                                },
                                L: []shared.AttributeValue{
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                },
                                M: map[string]shared.AttributeValue{
                                    "optio": shared.AttributeValue{},
                                    "est": shared.AttributeValue{},
                                    "inventore": shared.AttributeValue{},
                                },
                                N: sdk.String("consequuntur"),
                                Ns: []string{
                                    "sit",
                                    "dolores",
                                    "enim",
                                    "aspernatur",
                                },
                                Null: sdk.Bool(false),
                                S: sdk.String("perspiciatis"),
                                Ss: []string{
                                    "odio",
                                },
                            },
                            "alias": shared.AttributeValue{
                                B: sdk.String("quidem"),
                                Bool: sdk.Bool(false),
                                Bs: []string{
                                    "possimus",
                                    "ipsam",
                                    "odio",
                                },
                                L: []shared.AttributeValue{
                                    shared.AttributeValue{},
                                },
                                M: map[string]shared.AttributeValue{
                                    "at": shared.AttributeValue{},
                                },
                                N: sdk.String("illum"),
                                Ns: []string{
                                    "sint",
                                    "exercitationem",
                                    "cum",
                                },
                                Null: sdk.Bool(false),
                                S: sdk.String("voluptatum"),
                                Ss: []string{
                                    "placeat",
                                    "reiciendis",
                                    "dolores",
                                },
                            },
                        },
                        Key: map[string]shared.AttributeValue{
                            "pariatur": shared.AttributeValue{
                                B: sdk.String("facilis"),
                                Bool: sdk.Bool(false),
                                Bs: []string{
                                    "nemo",
                                    "natus",
                                    "nisi",
                                },
                                L: []shared.AttributeValue{
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                },
                                M: map[string]shared.AttributeValue{
                                    "dolor": shared.AttributeValue{},
                                },
                                N: sdk.String("nostrum"),
                                Ns: []string{
                                    "tenetur",
                                },
                                Null: sdk.Bool(false),
                                S: sdk.String("molestiae"),
                                Ss: []string{
                                    "ullam",
                                    "velit",
                                },
                            },
                            "adipisci": shared.AttributeValue{
                                B: sdk.String("cupiditate"),
                                Bool: sdk.Bool(false),
                                Bs: []string{
                                    "numquam",
                                    "fugiat",
                                    "molestiae",
                                },
                                L: []shared.AttributeValue{
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                    shared.AttributeValue{},
                                },
                                M: map[string]shared.AttributeValue{
                                    "saepe": shared.AttributeValue{},
                                    "amet": shared.AttributeValue{},
                                    "distinctio": shared.AttributeValue{},
                                    "vel": shared.AttributeValue{},
                                },
                                N: sdk.String("necessitatibus"),
                                Ns: []string{
                                    "nesciunt",
                                    "corrupti",
                                    "cupiditate",
                                },
                                Null: sdk.Bool(false),
                                S: sdk.String("voluptatibus"),
                                Ss: []string{
                                    "dolorum",
                                    "soluta",
                                },
                            },
                        },
                        ReturnValuesOnConditionCheckFailure: shared.ReturnValuesOnConditionCheckFailureEnumNone.ToPointer(),
                        TableName: "in",
                        UpdateExpression: "delectus",
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("commodi"),
        XAmzContentSha256: sdk.String("commodi"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("ullam"),
        XAmzSecurityToken: sdk.String("ullam"),
        XAmzSignature: sdk.String("doloremque"),
        XAmzSignedHeaders: sdk.String("est"),
        XAmzTarget: operations.TransactWriteItemsXAmzTargetEnumDynamoDb20120810TransactWriteItems,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransactWriteItemsOutput != nil {
        // handle response
    }
}
```

## UntagResource

<p>Removes the association of tags from an Amazon DynamoDB resource. You can call <code>UntagResource</code> up to five times per second, per account. </p> <p>For an overview on tagging DynamoDB resources, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tagging.html">Tagging for DynamoDB</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        UntagResourceInput: shared.UntagResourceInput{
            ResourceArn: "qui",
            TagKeys: []string{
                "adipisci",
                "totam",
                "qui",
            },
        },
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("eligendi"),
        XAmzCredential: sdk.String("incidunt"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("est"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumDynamoDb20120810UntagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateContinuousBackups

<p> <code>UpdateContinuousBackups</code> enables or disables point in time recovery for the specified table. A successful <code>UpdateContinuousBackups</code> call returns the current <code>ContinuousBackupsDescription</code>. Continuous backups are <code>ENABLED</code> on all tables at table creation. If point in time recovery is enabled, <code>PointInTimeRecoveryStatus</code> will be set to ENABLED.</p> <p> Once continuous backups and point in time recovery are enabled, you can restore to any point in time within <code>EarliestRestorableDateTime</code> and <code>LatestRestorableDateTime</code>. </p> <p> <code>LatestRestorableDateTime</code> is typically 5 minutes before the current time. You can restore your table to any point in time during the last 35 days. </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateContinuousBackups(ctx, operations.UpdateContinuousBackupsRequest{
        UpdateContinuousBackupsInput: shared.UpdateContinuousBackupsInput{
            PointInTimeRecoverySpecification: shared.PointInTimeRecoverySpecification{
                PointInTimeRecoveryEnabled: false,
            },
            TableName: "possimus",
        },
        XAmzAlgorithm: sdk.String("odit"),
        XAmzContentSha256: sdk.String("consectetur"),
        XAmzCredential: sdk.String("inventore"),
        XAmzDate: sdk.String("minima"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("facilis"),
        XAmzSignedHeaders: sdk.String("deserunt"),
        XAmzTarget: operations.UpdateContinuousBackupsXAmzTargetEnumDynamoDb20120810UpdateContinuousBackups,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateContinuousBackupsOutput != nil {
        // handle response
    }
}
```

## UpdateContributorInsights

Updates the status for contributor insights for a specific table or index. CloudWatch Contributor Insights for DynamoDB graphs display the partition key and (if applicable) sort key of frequently accessed items and frequently throttled items in plaintext. If you require the use of Amazon Web Services Key Management Service (KMS) to encrypt this table’s partition key and sort key data with an Amazon Web Services managed key or customer managed key, you should not enable CloudWatch Contributor Insights for DynamoDB for this table.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateContributorInsights(ctx, operations.UpdateContributorInsightsRequest{
        UpdateContributorInsightsInput: shared.UpdateContributorInsightsInput{
            ContributorInsightsAction: shared.ContributorInsightsActionEnumEnable,
            IndexName: sdk.String("ipsam"),
            TableName: "voluptatem",
        },
        XAmzAlgorithm: sdk.String("illo"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("incidunt"),
        XAmzDate: sdk.String("eveniet"),
        XAmzSecurityToken: sdk.String("quae"),
        XAmzSignature: sdk.String("ea"),
        XAmzSignedHeaders: sdk.String("asperiores"),
        XAmzTarget: operations.UpdateContributorInsightsXAmzTargetEnumDynamoDb20120810UpdateContributorInsights,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateContributorInsightsOutput != nil {
        // handle response
    }
}
```

## UpdateGlobalTable

<p>Adds or removes replicas in the specified global table. The global table must already exist to be able to use this operation. Any replica to be added must be empty, have the same name as the global table, have the same key schema, have DynamoDB Streams enabled, and have the same provisioned and maximum write capacity units.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29 (Legacy)</a> of global tables. We recommend using <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> when creating new global tables, as it provides greater flexibility, higher efficiency and consumes less write capacity than 2017.11.29 (Legacy). To determine which version you are using, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.DetermineVersion.html">Determining the version</a>. To update existing global tables from version 2017.11.29 (Legacy) to version 2019.11.21 (Current), see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_upgrade.html"> Updating global tables</a>. </p> </important> <note> <p> This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29</a> of global tables. If you are using global tables <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21</a> you can use <a href="https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTable.html">DescribeTable</a> instead. </p> <p> Although you can use <code>UpdateGlobalTable</code> to add replicas and remove replicas in a single request, for simplicity we recommend that you issue separate requests for adding or removing replicas. </p> </note> <p> If global secondary indexes are specified, then the following conditions must also be met: </p> <ul> <li> <p> The global secondary indexes must have the same name. </p> </li> <li> <p> The global secondary indexes must have the same hash key and sort key (if present). </p> </li> <li> <p> The global secondary indexes must have the same provisioned and maximum write capacity units. </p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateGlobalTable(ctx, operations.UpdateGlobalTableRequest{
        UpdateGlobalTableInput: shared.UpdateGlobalTableInput{
            GlobalTableName: "veniam",
            ReplicaUpdates: []shared.ReplicaUpdate{
                shared.ReplicaUpdate{
                    Create: &shared.CreateReplicaAction{
                        RegionName: "asperiores",
                    },
                    Delete: &shared.DeleteReplicaAction{
                        RegionName: "eum",
                    },
                },
                shared.ReplicaUpdate{
                    Create: &shared.CreateReplicaAction{
                        RegionName: "deserunt",
                    },
                    Delete: &shared.DeleteReplicaAction{
                        RegionName: "repudiandae",
                    },
                },
                shared.ReplicaUpdate{
                    Create: &shared.CreateReplicaAction{
                        RegionName: "nemo",
                    },
                    Delete: &shared.DeleteReplicaAction{
                        RegionName: "molestias",
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("expedita"),
        XAmzCredential: sdk.String("quisquam"),
        XAmzDate: sdk.String("praesentium"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("assumenda"),
        XAmzSignedHeaders: sdk.String("repudiandae"),
        XAmzTarget: operations.UpdateGlobalTableXAmzTargetEnumDynamoDb20120810UpdateGlobalTable,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateGlobalTableOutput != nil {
        // handle response
    }
}
```

## UpdateGlobalTableSettings

<p>Updates settings for a global table.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29 (Legacy)</a> of global tables. We recommend using <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> when creating new global tables, as it provides greater flexibility, higher efficiency and consumes less write capacity than 2017.11.29 (Legacy). To determine which version you are using, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.DetermineVersion.html">Determining the version</a>. To update existing global tables from version 2017.11.29 (Legacy) to version 2019.11.21 (Current), see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_upgrade.html"> Updating global tables</a>. </p> </important>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateGlobalTableSettings(ctx, operations.UpdateGlobalTableSettingsRequest{
        UpdateGlobalTableSettingsInput: shared.UpdateGlobalTableSettingsInput{
            GlobalTableBillingMode: shared.BillingModeEnumPayPerRequest.ToPointer(),
            GlobalTableGlobalSecondaryIndexSettingsUpdate: []shared.GlobalTableGlobalSecondaryIndexSettingsUpdate{
                shared.GlobalTableGlobalSecondaryIndexSettingsUpdate{
                    IndexName: "commodi",
                    ProvisionedWriteCapacityAutoScalingSettingsUpdate: &shared.AutoScalingSettingsUpdate{
                        AutoScalingDisabled: sdk.Bool(false),
                        AutoScalingRoleArn: sdk.String("vitae"),
                        MaximumUnits: sdk.Int64(147297),
                        MinimumUnits: sdk.Int64(724073),
                        ScalingPolicyUpdate: &shared.AutoScalingPolicyUpdate{
                            PolicyName: sdk.String("ex"),
                            TargetTrackingScalingPolicyConfiguration: shared.AutoScalingTargetTrackingScalingPolicyConfigurationUpdate{
                                DisableScaleIn: sdk.Bool(false),
                                ScaleInCooldown: sdk.Int64(203396),
                                ScaleOutCooldown: sdk.Int64(797712),
                                TargetValue: 1761.04,
                            },
                        },
                    },
                    ProvisionedWriteCapacityUnits: sdk.Int64(186),
                },
            },
            GlobalTableName: "ad",
            GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate: &shared.AutoScalingSettingsUpdate{
                AutoScalingDisabled: sdk.Bool(false),
                AutoScalingRoleArn: sdk.String("a"),
                MaximumUnits: sdk.Int64(816825),
                MinimumUnits: sdk.Int64(662515),
                ScalingPolicyUpdate: &shared.AutoScalingPolicyUpdate{
                    PolicyName: sdk.String("atque"),
                    TargetTrackingScalingPolicyConfiguration: shared.AutoScalingTargetTrackingScalingPolicyConfigurationUpdate{
                        DisableScaleIn: sdk.Bool(false),
                        ScaleInCooldown: sdk.Int64(310648),
                        ScaleOutCooldown: sdk.Int64(45850),
                        TargetValue: 4898.21,
                    },
                },
            },
            GlobalTableProvisionedWriteCapacityUnits: sdk.Int64(463895),
            ReplicaSettingsUpdate: []shared.ReplicaSettingsUpdate{
                shared.ReplicaSettingsUpdate{
                    RegionName: "fuga",
                    ReplicaGlobalSecondaryIndexSettingsUpdate: []shared.ReplicaGlobalSecondaryIndexSettingsUpdate{
                        shared.ReplicaGlobalSecondaryIndexSettingsUpdate{
                            IndexName: "deleniti",
                            ProvisionedReadCapacityAutoScalingSettingsUpdate: &shared.AutoScalingSettingsUpdate{
                                AutoScalingDisabled: sdk.Bool(false),
                                AutoScalingRoleArn: sdk.String("officia"),
                                MaximumUnits: sdk.Int64(572450),
                                MinimumUnits: sdk.Int64(674077),
                                ScalingPolicyUpdate: &shared.AutoScalingPolicyUpdate{
                                    PolicyName: sdk.String("dolor"),
                                    TargetTrackingScalingPolicyConfiguration: shared.AutoScalingTargetTrackingScalingPolicyConfigurationUpdate{
                                        DisableScaleIn: sdk.Bool(false),
                                        ScaleInCooldown: sdk.Int64(322773),
                                        ScaleOutCooldown: sdk.Int64(847740),
                                        TargetValue: 229.66,
                                    },
                                },
                            },
                            ProvisionedReadCapacityUnits: sdk.Int64(561399),
                        },
                        shared.ReplicaGlobalSecondaryIndexSettingsUpdate{
                            IndexName: "voluptas",
                            ProvisionedReadCapacityAutoScalingSettingsUpdate: &shared.AutoScalingSettingsUpdate{
                                AutoScalingDisabled: sdk.Bool(false),
                                AutoScalingRoleArn: sdk.String("expedita"),
                                MaximumUnits: sdk.Int64(375378),
                                MinimumUnits: sdk.Int64(981865),
                                ScalingPolicyUpdate: &shared.AutoScalingPolicyUpdate{
                                    PolicyName: sdk.String("ea"),
                                    TargetTrackingScalingPolicyConfiguration: shared.AutoScalingTargetTrackingScalingPolicyConfigurationUpdate{
                                        DisableScaleIn: sdk.Bool(false),
                                        ScaleInCooldown: sdk.Int64(428199),
                                        ScaleOutCooldown: sdk.Int64(965726),
                                        TargetValue: 8810.67,
                                    },
                                },
                            },
                            ProvisionedReadCapacityUnits: sdk.Int64(970097),
                        },
                    },
                    ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate: &shared.AutoScalingSettingsUpdate{
                        AutoScalingDisabled: sdk.Bool(false),
                        AutoScalingRoleArn: sdk.String("consequatur"),
                        MaximumUnits: sdk.Int64(148714),
                        MinimumUnits: sdk.Int64(33407),
                        ScalingPolicyUpdate: &shared.AutoScalingPolicyUpdate{
                            PolicyName: sdk.String("voluptates"),
                            TargetTrackingScalingPolicyConfiguration: shared.AutoScalingTargetTrackingScalingPolicyConfigurationUpdate{
                                DisableScaleIn: sdk.Bool(false),
                                ScaleInCooldown: sdk.Int64(590280),
                                ScaleOutCooldown: sdk.Int64(978460),
                                TargetValue: 3114.49,
                            },
                        },
                    },
                    ReplicaProvisionedReadCapacityUnits: sdk.Int64(256647),
                    ReplicaTableClass: shared.TableClassEnumStandard.ToPointer(),
                },
                shared.ReplicaSettingsUpdate{
                    RegionName: "cum",
                    ReplicaGlobalSecondaryIndexSettingsUpdate: []shared.ReplicaGlobalSecondaryIndexSettingsUpdate{
                        shared.ReplicaGlobalSecondaryIndexSettingsUpdate{
                            IndexName: "dolores",
                            ProvisionedReadCapacityAutoScalingSettingsUpdate: &shared.AutoScalingSettingsUpdate{
                                AutoScalingDisabled: sdk.Bool(false),
                                AutoScalingRoleArn: sdk.String("enim"),
                                MaximumUnits: sdk.Int64(471966),
                                MinimumUnits: sdk.Int64(728948),
                                ScalingPolicyUpdate: &shared.AutoScalingPolicyUpdate{
                                    PolicyName: sdk.String("omnis"),
                                    TargetTrackingScalingPolicyConfiguration: shared.AutoScalingTargetTrackingScalingPolicyConfigurationUpdate{
                                        DisableScaleIn: sdk.Bool(false),
                                        ScaleInCooldown: sdk.Int64(569196),
                                        ScaleOutCooldown: sdk.Int64(179588),
                                        TargetValue: 7890.36,
                                    },
                                },
                            },
                            ProvisionedReadCapacityUnits: sdk.Int64(547184),
                        },
                        shared.ReplicaGlobalSecondaryIndexSettingsUpdate{
                            IndexName: "repellendus",
                            ProvisionedReadCapacityAutoScalingSettingsUpdate: &shared.AutoScalingSettingsUpdate{
                                AutoScalingDisabled: sdk.Bool(false),
                                AutoScalingRoleArn: sdk.String("cum"),
                                MaximumUnits: sdk.Int64(842935),
                                MinimumUnits: sdk.Int64(667418),
                                ScalingPolicyUpdate: &shared.AutoScalingPolicyUpdate{
                                    PolicyName: sdk.String("commodi"),
                                    TargetTrackingScalingPolicyConfiguration: shared.AutoScalingTargetTrackingScalingPolicyConfigurationUpdate{
                                        DisableScaleIn: sdk.Bool(false),
                                        ScaleInCooldown: sdk.Int64(630747),
                                        ScaleOutCooldown: sdk.Int64(421273),
                                        TargetValue: 1204.32,
                                    },
                                },
                            },
                            ProvisionedReadCapacityUnits: sdk.Int64(926266),
                        },
                    },
                    ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate: &shared.AutoScalingSettingsUpdate{
                        AutoScalingDisabled: sdk.Bool(false),
                        AutoScalingRoleArn: sdk.String("sapiente"),
                        MaximumUnits: sdk.Int64(661764),
                        MinimumUnits: sdk.Int64(140917),
                        ScalingPolicyUpdate: &shared.AutoScalingPolicyUpdate{
                            PolicyName: sdk.String("inventore"),
                            TargetTrackingScalingPolicyConfiguration: shared.AutoScalingTargetTrackingScalingPolicyConfigurationUpdate{
                                DisableScaleIn: sdk.Bool(false),
                                ScaleInCooldown: sdk.Int64(612238),
                                ScaleOutCooldown: sdk.Int64(542187),
                                TargetValue: 1295.31,
                            },
                        },
                    },
                    ReplicaProvisionedReadCapacityUnits: sdk.Int64(356007),
                    ReplicaTableClass: shared.TableClassEnumStandardInfrequentAccess.ToPointer(),
                },
            },
        },
        XAmzAlgorithm: sdk.String("doloribus"),
        XAmzContentSha256: sdk.String("pariatur"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("similique"),
        XAmzSecurityToken: sdk.String("iste"),
        XAmzSignature: sdk.String("eveniet"),
        XAmzSignedHeaders: sdk.String("nam"),
        XAmzTarget: operations.UpdateGlobalTableSettingsXAmzTargetEnumDynamoDb20120810UpdateGlobalTableSettings,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateGlobalTableSettingsOutput != nil {
        // handle response
    }
}
```

## UpdateItem

<p>Edits an existing item's attributes, or adds a new item to the table if it does not already exist. You can put, delete, or add attribute values. You can also perform a conditional update on an existing item (insert a new attribute name-value pair if it doesn't exist, or replace an existing name-value pair if it has certain expected attribute values).</p> <p>You can also return the item's attribute values in the same <code>UpdateItem</code> operation using the <code>ReturnValues</code> parameter.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateItem(ctx, operations.UpdateItemRequest{
        UpdateItemInput: shared.UpdateItemInput{
            AttributeUpdates: map[string]shared.AttributeValueUpdate{
                "labore": shared.AttributeValueUpdate{
                    Action: shared.AttributeActionEnumPut.ToPointer(),
                    Value: &shared.AttributeValue{
                        B: sdk.String("voluptatibus"),
                        Bool: sdk.Bool(false),
                        Bs: []string{
                            "nulla",
                            "dolorem",
                        },
                        L: []shared.AttributeValue{
                            shared.AttributeValue{},
                            shared.AttributeValue{},
                            shared.AttributeValue{},
                            shared.AttributeValue{},
                        },
                        M: map[string]shared.AttributeValue{
                            "perferendis": shared.AttributeValue{},
                            "quaerat": shared.AttributeValue{},
                            "excepturi": shared.AttributeValue{},
                            "aliquid": shared.AttributeValue{},
                        },
                        N: sdk.String("dolore"),
                        Ns: []string{
                            "illum",
                        },
                        Null: sdk.Bool(false),
                        S: sdk.String("laboriosam"),
                        Ss: []string{
                            "dicta",
                            "atque",
                            "ratione",
                        },
                    },
                },
                "vitae": shared.AttributeValueUpdate{
                    Action: shared.AttributeActionEnumDelete.ToPointer(),
                    Value: &shared.AttributeValue{
                        B: sdk.String("atque"),
                        Bool: sdk.Bool(false),
                        Bs: []string{
                            "culpa",
                            "temporibus",
                        },
                        L: []shared.AttributeValue{
                            shared.AttributeValue{},
                            shared.AttributeValue{},
                            shared.AttributeValue{},
                            shared.AttributeValue{},
                        },
                        M: map[string]shared.AttributeValue{
                            "cupiditate": shared.AttributeValue{},
                            "suscipit": shared.AttributeValue{},
                        },
                        N: sdk.String("reiciendis"),
                        Ns: []string{
                            "delectus",
                            "ab",
                            "mollitia",
                            "possimus",
                        },
                        Null: sdk.Bool(false),
                        S: sdk.String("praesentium"),
                        Ss: []string{
                            "quam",
                        },
                    },
                },
                "animi": shared.AttributeValueUpdate{
                    Action: shared.AttributeActionEnumDelete.ToPointer(),
                    Value: &shared.AttributeValue{
                        B: sdk.String("voluptatum"),
                        Bool: sdk.Bool(false),
                        Bs: []string{
                            "quisquam",
                        },
                        L: []shared.AttributeValue{
                            shared.AttributeValue{},
                        },
                        M: map[string]shared.AttributeValue{
                            "architecto": shared.AttributeValue{},
                            "sint": shared.AttributeValue{},
                            "eligendi": shared.AttributeValue{},
                            "occaecati": shared.AttributeValue{},
                        },
                        N: sdk.String("quis"),
                        Ns: []string{
                            "officia",
                            "iste",
                            "unde",
                        },
                        Null: sdk.Bool(false),
                        S: sdk.String("quas"),
                        Ss: []string{
                            "ducimus",
                            "voluptatum",
                        },
                    },
                },
            },
            ConditionExpression: sdk.String("sapiente"),
            ConditionalOperator: shared.ConditionalOperatorEnumOr.ToPointer(),
            Expected: map[string]shared.ExpectedAttributeValue{
                "hic": shared.ExpectedAttributeValue{
                    AttributeValueList: []shared.AttributeValue{
                        shared.AttributeValue{
                            B: sdk.String("sint"),
                            Bool: sdk.Bool(false),
                            Bs: []string{
                                "iste",
                                "cupiditate",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "a": shared.AttributeValue{},
                                "dolor": shared.AttributeValue{},
                                "voluptatum": shared.AttributeValue{},
                            },
                            N: sdk.String("molestias"),
                            Ns: []string{
                                "repudiandae",
                                "eaque",
                                "consectetur",
                                "autem",
                            },
                            Null: sdk.Bool(false),
                            S: sdk.String("vitae"),
                            Ss: []string{
                                "incidunt",
                                "modi",
                            },
                        },
                        shared.AttributeValue{
                            B: sdk.String("quos"),
                            Bool: sdk.Bool(false),
                            Bs: []string{
                                "voluptate",
                                "error",
                                "reprehenderit",
                                "reprehenderit",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "voluptates": shared.AttributeValue{},
                            },
                            N: sdk.String("delectus"),
                            Ns: []string{
                                "delectus",
                            },
                            Null: sdk.Bool(false),
                            S: sdk.String("exercitationem"),
                            Ss: []string{
                                "laboriosam",
                            },
                        },
                    },
                    ComparisonOperator: shared.ComparisonOperatorEnumEq.ToPointer(),
                    Exists: sdk.Bool(false),
                    Value: &shared.AttributeValue{
                        B: sdk.String("sed"),
                        Bool: sdk.Bool(false),
                        Bs: []string{
                            "debitis",
                            "a",
                            "itaque",
                        },
                        L: []shared.AttributeValue{
                            shared.AttributeValue{},
                            shared.AttributeValue{},
                            shared.AttributeValue{},
                            shared.AttributeValue{},
                        },
                        M: map[string]shared.AttributeValue{
                            "cupiditate": shared.AttributeValue{},
                            "adipisci": shared.AttributeValue{},
                            "aliquam": shared.AttributeValue{},
                            "illo": shared.AttributeValue{},
                        },
                        N: sdk.String("veniam"),
                        Ns: []string{
                            "necessitatibus",
                        },
                        Null: sdk.Bool(false),
                        S: sdk.String("possimus"),
                        Ss: []string{
                            "itaque",
                            "explicabo",
                        },
                    },
                },
            },
            ExpressionAttributeNames: map[string]string{
                "non": "delectus",
                "incidunt": "quod",
            },
            ExpressionAttributeValues: map[string]shared.AttributeValue{
                "ullam": shared.AttributeValue{
                    B: sdk.String("quam"),
                    Bool: sdk.Bool(false),
                    Bs: []string{
                        "voluptates",
                        "officia",
                        "est",
                        "in",
                    },
                    L: []shared.AttributeValue{
                        shared.AttributeValue{},
                    },
                    M: map[string]shared.AttributeValue{
                        "consequatur": shared.AttributeValue{},
                        "delectus": shared.AttributeValue{},
                    },
                    N: sdk.String("incidunt"),
                    Ns: []string{
                        "nemo",
                        "est",
                    },
                    Null: sdk.Bool(false),
                    S: sdk.String("quo"),
                    Ss: []string{
                        "delectus",
                        "laboriosam",
                        "laboriosam",
                        "quam",
                    },
                },
            },
            Key: map[string]shared.AttributeValue{
                "officia": shared.AttributeValue{
                    B: sdk.String("repellat"),
                    Bool: sdk.Bool(false),
                    Bs: []string{
                        "soluta",
                        "tempore",
                        "culpa",
                    },
                    L: []shared.AttributeValue{
                        shared.AttributeValue{},
                        shared.AttributeValue{},
                        shared.AttributeValue{},
                        shared.AttributeValue{},
                    },
                    M: map[string]shared.AttributeValue{
                        "atque": shared.AttributeValue{},
                    },
                    N: sdk.String("ad"),
                    Ns: []string{
                        "voluptates",
                        "ut",
                        "nesciunt",
                        "ab",
                    },
                    Null: sdk.Bool(false),
                    S: sdk.String("quibusdam"),
                    Ss: []string{
                        "quidem",
                        "delectus",
                    },
                },
                "nemo": shared.AttributeValue{
                    B: sdk.String("cumque"),
                    Bool: sdk.Bool(false),
                    Bs: []string{
                        "sequi",
                        "atque",
                        "maiores",
                    },
                    L: []shared.AttributeValue{
                        shared.AttributeValue{},
                        shared.AttributeValue{},
                        shared.AttributeValue{},
                    },
                    M: map[string]shared.AttributeValue{
                        "totam": shared.AttributeValue{},
                        "quod": shared.AttributeValue{},
                        "aspernatur": shared.AttributeValue{},
                    },
                    N: sdk.String("eaque"),
                    Ns: []string{
                        "nam",
                        "ex",
                        "odio",
                        "delectus",
                    },
                    Null: sdk.Bool(false),
                    S: sdk.String("minus"),
                    Ss: []string{
                        "distinctio",
                        "eius",
                    },
                },
                "eos": shared.AttributeValue{
                    B: sdk.String("veniam"),
                    Bool: sdk.Bool(false),
                    Bs: []string{
                        "sint",
                        "occaecati",
                        "debitis",
                        "laboriosam",
                    },
                    L: []shared.AttributeValue{
                        shared.AttributeValue{},
                    },
                    M: map[string]shared.AttributeValue{
                        "incidunt": shared.AttributeValue{},
                    },
                    N: sdk.String("porro"),
                    Ns: []string{
                        "reiciendis",
                        "voluptate",
                        "tempore",
                    },
                    Null: sdk.Bool(false),
                    S: sdk.String("in"),
                    Ss: []string{
                        "possimus",
                        "tenetur",
                        "recusandae",
                    },
                },
            },
            ReturnConsumedCapacity: shared.ReturnConsumedCapacityEnumNone.ToPointer(),
            ReturnItemCollectionMetrics: shared.ReturnItemCollectionMetricsEnumSize.ToPointer(),
            ReturnValues: shared.ReturnValueEnumUpdatedOld.ToPointer(),
            TableName: "harum",
            UpdateExpression: sdk.String("ad"),
        },
        XAmzAlgorithm: sdk.String("quod"),
        XAmzContentSha256: sdk.String("ratione"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("dolore"),
        XAmzSignature: sdk.String("nam"),
        XAmzSignedHeaders: sdk.String("officia"),
        XAmzTarget: operations.UpdateItemXAmzTargetEnumDynamoDb20120810UpdateItem,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateItemOutput != nil {
        // handle response
    }
}
```

## UpdateTable

<p>Modifies the provisioned throughput settings, global secondary indexes, or DynamoDB Streams settings for a given table.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> of global tables. </p> </important> <p>You can only perform one of the following operations at once:</p> <ul> <li> <p>Modify the provisioned throughput settings of the table.</p> </li> <li> <p>Remove a global secondary index from the table.</p> </li> <li> <p>Create a new global secondary index on the table. After the index begins backfilling, you can use <code>UpdateTable</code> to perform other operations.</p> </li> </ul> <p> <code>UpdateTable</code> is an asynchronous operation; while it is executing, the table status changes from <code>ACTIVE</code> to <code>UPDATING</code>. While it is <code>UPDATING</code>, you cannot issue another <code>UpdateTable</code> request. When the table returns to the <code>ACTIVE</code> state, the <code>UpdateTable</code> operation is complete.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateTable(ctx, operations.UpdateTableRequest{
        UpdateTableInput: shared.UpdateTableInput{
            AttributeDefinitions: []shared.AttributeDefinition{
                shared.AttributeDefinition{
                    AttributeName: "cupiditate",
                    AttributeType: shared.ScalarAttributeTypeEnumS,
                },
                shared.AttributeDefinition{
                    AttributeName: "saepe",
                    AttributeType: shared.ScalarAttributeTypeEnumS,
                },
                shared.AttributeDefinition{
                    AttributeName: "eaque",
                    AttributeType: shared.ScalarAttributeTypeEnumN,
                },
                shared.AttributeDefinition{
                    AttributeName: "eveniet",
                    AttributeType: shared.ScalarAttributeTypeEnumB,
                },
            },
            BillingMode: shared.BillingModeEnumPayPerRequest.ToPointer(),
            DeletionProtectionEnabled: sdk.Bool(false),
            GlobalSecondaryIndexUpdates: []shared.GlobalSecondaryIndexUpdate{
                shared.GlobalSecondaryIndexUpdate{
                    Create: &shared.CreateGlobalSecondaryIndexAction{
                        IndexName: "aut",
                        KeySchema: []shared.KeySchemaElement{
                            shared.KeySchemaElement{
                                AttributeName: "nostrum",
                                KeyType: shared.KeyTypeEnumHash,
                            },
                            shared.KeySchemaElement{
                                AttributeName: "nam",
                                KeyType: shared.KeyTypeEnumHash,
                            },
                            shared.KeySchemaElement{
                                AttributeName: "odio",
                                KeyType: shared.KeyTypeEnumHash,
                            },
                        },
                        Projection: shared.Projection{
                            NonKeyAttributes: []string{
                                "veritatis",
                                "autem",
                                "earum",
                                "minima",
                            },
                            ProjectionType: shared.ProjectionTypeEnumKeysOnly.ToPointer(),
                        },
                        ProvisionedThroughput: &shared.ProvisionedThroughput{
                            ReadCapacityUnits: 821672,
                            WriteCapacityUnits: 200501,
                        },
                    },
                    Delete: &shared.DeleteGlobalSecondaryIndexAction{
                        IndexName: "corrupti",
                    },
                    Update: &shared.UpdateGlobalSecondaryIndexAction{
                        IndexName: "nostrum",
                        ProvisionedThroughput: shared.ProvisionedThroughput{
                            ReadCapacityUnits: 682327,
                            WriteCapacityUnits: 195789,
                        },
                    },
                },
                shared.GlobalSecondaryIndexUpdate{
                    Create: &shared.CreateGlobalSecondaryIndexAction{
                        IndexName: "maxime",
                        KeySchema: []shared.KeySchemaElement{
                            shared.KeySchemaElement{
                                AttributeName: "laborum",
                                KeyType: shared.KeyTypeEnumRange,
                            },
                            shared.KeySchemaElement{
                                AttributeName: "autem",
                                KeyType: shared.KeyTypeEnumHash,
                            },
                        },
                        Projection: shared.Projection{
                            NonKeyAttributes: []string{
                                "rerum",
                            },
                            ProjectionType: shared.ProjectionTypeEnumKeysOnly.ToPointer(),
                        },
                        ProvisionedThroughput: &shared.ProvisionedThroughput{
                            ReadCapacityUnits: 593366,
                            WriteCapacityUnits: 897434,
                        },
                    },
                    Delete: &shared.DeleteGlobalSecondaryIndexAction{
                        IndexName: "fugit",
                    },
                    Update: &shared.UpdateGlobalSecondaryIndexAction{
                        IndexName: "autem",
                        ProvisionedThroughput: shared.ProvisionedThroughput{
                            ReadCapacityUnits: 763709,
                            WriteCapacityUnits: 910726,
                        },
                    },
                },
                shared.GlobalSecondaryIndexUpdate{
                    Create: &shared.CreateGlobalSecondaryIndexAction{
                        IndexName: "fugiat",
                        KeySchema: []shared.KeySchemaElement{
                            shared.KeySchemaElement{
                                AttributeName: "a",
                                KeyType: shared.KeyTypeEnumRange,
                            },
                            shared.KeySchemaElement{
                                AttributeName: "sapiente",
                                KeyType: shared.KeyTypeEnumRange,
                            },
                            shared.KeySchemaElement{
                                AttributeName: "facilis",
                                KeyType: shared.KeyTypeEnumRange,
                            },
                        },
                        Projection: shared.Projection{
                            NonKeyAttributes: []string{
                                "et",
                                "accusantium",
                            },
                            ProjectionType: shared.ProjectionTypeEnumInclude.ToPointer(),
                        },
                        ProvisionedThroughput: &shared.ProvisionedThroughput{
                            ReadCapacityUnits: 390230,
                            WriteCapacityUnits: 245849,
                        },
                    },
                    Delete: &shared.DeleteGlobalSecondaryIndexAction{
                        IndexName: "tempore",
                    },
                    Update: &shared.UpdateGlobalSecondaryIndexAction{
                        IndexName: "expedita",
                        ProvisionedThroughput: shared.ProvisionedThroughput{
                            ReadCapacityUnits: 940639,
                            WriteCapacityUnits: 505113,
                        },
                    },
                },
            },
            ProvisionedThroughput: &shared.ProvisionedThroughput{
                ReadCapacityUnits: 113540,
                WriteCapacityUnits: 478773,
            },
            ReplicaUpdates: []shared.ReplicationGroupUpdate{
                shared.ReplicationGroupUpdate{
                    Create: &shared.CreateReplicationGroupMemberAction{
                        GlobalSecondaryIndexes: []shared.ReplicaGlobalSecondaryIndex{
                            shared.ReplicaGlobalSecondaryIndex{
                                IndexName: "molestiae",
                                ProvisionedThroughputOverride: &shared.ProvisionedThroughputOverride{
                                    ReadCapacityUnits: sdk.Int64(722151),
                                },
                            },
                        },
                        KMSMasterKeyID: sdk.String("aperiam"),
                        ProvisionedThroughputOverride: &shared.ProvisionedThroughputOverride{
                            ReadCapacityUnits: sdk.Int64(112788),
                        },
                        RegionName: "mollitia",
                        TableClassOverride: shared.TableClassEnumStandardInfrequentAccess.ToPointer(),
                    },
                    Delete: &shared.DeleteReplicationGroupMemberAction{
                        RegionName: "at",
                    },
                    Update: &shared.UpdateReplicationGroupMemberAction{
                        GlobalSecondaryIndexes: []shared.ReplicaGlobalSecondaryIndex{
                            shared.ReplicaGlobalSecondaryIndex{
                                IndexName: "quam",
                                ProvisionedThroughputOverride: &shared.ProvisionedThroughputOverride{
                                    ReadCapacityUnits: sdk.Int64(534509),
                                },
                            },
                            shared.ReplicaGlobalSecondaryIndex{
                                IndexName: "rem",
                                ProvisionedThroughputOverride: &shared.ProvisionedThroughputOverride{
                                    ReadCapacityUnits: sdk.Int64(424553),
                                },
                            },
                            shared.ReplicaGlobalSecondaryIndex{
                                IndexName: "eos",
                                ProvisionedThroughputOverride: &shared.ProvisionedThroughputOverride{
                                    ReadCapacityUnits: sdk.Int64(286464),
                                },
                            },
                            shared.ReplicaGlobalSecondaryIndex{
                                IndexName: "sunt",
                                ProvisionedThroughputOverride: &shared.ProvisionedThroughputOverride{
                                    ReadCapacityUnits: sdk.Int64(501591),
                                },
                            },
                        },
                        KMSMasterKeyID: sdk.String("iste"),
                        ProvisionedThroughputOverride: &shared.ProvisionedThroughputOverride{
                            ReadCapacityUnits: sdk.Int64(879418),
                        },
                        RegionName: "distinctio",
                        TableClassOverride: shared.TableClassEnumStandard.ToPointer(),
                    },
                },
                shared.ReplicationGroupUpdate{
                    Create: &shared.CreateReplicationGroupMemberAction{
                        GlobalSecondaryIndexes: []shared.ReplicaGlobalSecondaryIndex{
                            shared.ReplicaGlobalSecondaryIndex{
                                IndexName: "blanditiis",
                                ProvisionedThroughputOverride: &shared.ProvisionedThroughputOverride{
                                    ReadCapacityUnits: sdk.Int64(499451),
                                },
                            },
                            shared.ReplicaGlobalSecondaryIndex{
                                IndexName: "consectetur",
                                ProvisionedThroughputOverride: &shared.ProvisionedThroughputOverride{
                                    ReadCapacityUnits: sdk.Int64(958060),
                                },
                            },
                        },
                        KMSMasterKeyID: sdk.String("quis"),
                        ProvisionedThroughputOverride: &shared.ProvisionedThroughputOverride{
                            ReadCapacityUnits: sdk.Int64(33323),
                        },
                        RegionName: "ratione",
                        TableClassOverride: shared.TableClassEnumStandard.ToPointer(),
                    },
                    Delete: &shared.DeleteReplicationGroupMemberAction{
                        RegionName: "asperiores",
                    },
                    Update: &shared.UpdateReplicationGroupMemberAction{
                        GlobalSecondaryIndexes: []shared.ReplicaGlobalSecondaryIndex{
                            shared.ReplicaGlobalSecondaryIndex{
                                IndexName: "sint",
                                ProvisionedThroughputOverride: &shared.ProvisionedThroughputOverride{
                                    ReadCapacityUnits: sdk.Int64(821993),
                                },
                            },
                        },
                        KMSMasterKeyID: sdk.String("tempore"),
                        ProvisionedThroughputOverride: &shared.ProvisionedThroughputOverride{
                            ReadCapacityUnits: sdk.Int64(992244),
                        },
                        RegionName: "quasi",
                        TableClassOverride: shared.TableClassEnumStandard.ToPointer(),
                    },
                },
                shared.ReplicationGroupUpdate{
                    Create: &shared.CreateReplicationGroupMemberAction{
                        GlobalSecondaryIndexes: []shared.ReplicaGlobalSecondaryIndex{
                            shared.ReplicaGlobalSecondaryIndex{
                                IndexName: "nobis",
                                ProvisionedThroughputOverride: &shared.ProvisionedThroughputOverride{
                                    ReadCapacityUnits: sdk.Int64(892640),
                                },
                            },
                            shared.ReplicaGlobalSecondaryIndex{
                                IndexName: "labore",
                                ProvisionedThroughputOverride: &shared.ProvisionedThroughputOverride{
                                    ReadCapacityUnits: sdk.Int64(84438),
                                },
                            },
                        },
                        KMSMasterKeyID: sdk.String("minima"),
                        ProvisionedThroughputOverride: &shared.ProvisionedThroughputOverride{
                            ReadCapacityUnits: sdk.Int64(165483),
                        },
                        RegionName: "itaque",
                        TableClassOverride: shared.TableClassEnumStandardInfrequentAccess.ToPointer(),
                    },
                    Delete: &shared.DeleteReplicationGroupMemberAction{
                        RegionName: "expedita",
                    },
                    Update: &shared.UpdateReplicationGroupMemberAction{
                        GlobalSecondaryIndexes: []shared.ReplicaGlobalSecondaryIndex{
                            shared.ReplicaGlobalSecondaryIndex{
                                IndexName: "placeat",
                                ProvisionedThroughputOverride: &shared.ProvisionedThroughputOverride{
                                    ReadCapacityUnits: sdk.Int64(838227),
                                },
                            },
                            shared.ReplicaGlobalSecondaryIndex{
                                IndexName: "voluptate",
                                ProvisionedThroughputOverride: &shared.ProvisionedThroughputOverride{
                                    ReadCapacityUnits: sdk.Int64(935493),
                                },
                            },
                            shared.ReplicaGlobalSecondaryIndex{
                                IndexName: "minima",
                                ProvisionedThroughputOverride: &shared.ProvisionedThroughputOverride{
                                    ReadCapacityUnits: sdk.Int64(141986),
                                },
                            },
                        },
                        KMSMasterKeyID: sdk.String("odit"),
                        ProvisionedThroughputOverride: &shared.ProvisionedThroughputOverride{
                            ReadCapacityUnits: sdk.Int64(259374),
                        },
                        RegionName: "error",
                        TableClassOverride: shared.TableClassEnumStandard.ToPointer(),
                    },
                },
            },
            SSESpecification: &shared.SSESpecification{
                Enabled: sdk.Bool(false),
                KMSMasterKeyID: sdk.String("dolorum"),
                SSEType: shared.SSETypeEnumAes256.ToPointer(),
            },
            StreamSpecification: &shared.StreamSpecification{
                StreamEnabled: false,
                StreamViewType: shared.StreamViewTypeEnumKeysOnly.ToPointer(),
            },
            TableClass: shared.TableClassEnumStandard.ToPointer(),
            TableName: "sunt",
        },
        XAmzAlgorithm: sdk.String("amet"),
        XAmzContentSha256: sdk.String("cum"),
        XAmzCredential: sdk.String("iusto"),
        XAmzDate: sdk.String("corrupti"),
        XAmzSecurityToken: sdk.String("non"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("vero"),
        XAmzTarget: operations.UpdateTableXAmzTargetEnumDynamoDb20120810UpdateTable,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateTableOutput != nil {
        // handle response
    }
}
```

## UpdateTableReplicaAutoScaling

<p>Updates auto scaling settings on your global tables at once.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> of global tables. </p> </important>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateTableReplicaAutoScaling(ctx, operations.UpdateTableReplicaAutoScalingRequest{
        UpdateTableReplicaAutoScalingInput: shared.UpdateTableReplicaAutoScalingInput{
            GlobalSecondaryIndexUpdates: []shared.GlobalSecondaryIndexAutoScalingUpdate{
                shared.GlobalSecondaryIndexAutoScalingUpdate{
                    IndexName: sdk.String("minima"),
                    ProvisionedWriteCapacityAutoScalingUpdate: &shared.AutoScalingSettingsUpdate{
                        AutoScalingDisabled: sdk.Bool(false),
                        AutoScalingRoleArn: sdk.String("omnis"),
                        MaximumUnits: sdk.Int64(924623),
                        MinimumUnits: sdk.Int64(102754),
                        ScalingPolicyUpdate: &shared.AutoScalingPolicyUpdate{
                            PolicyName: sdk.String("voluptatibus"),
                            TargetTrackingScalingPolicyConfiguration: shared.AutoScalingTargetTrackingScalingPolicyConfigurationUpdate{
                                DisableScaleIn: sdk.Bool(false),
                                ScaleInCooldown: sdk.Int64(419156),
                                ScaleOutCooldown: sdk.Int64(449861),
                                TargetValue: 9956.71,
                            },
                        },
                    },
                },
                shared.GlobalSecondaryIndexAutoScalingUpdate{
                    IndexName: sdk.String("amet"),
                    ProvisionedWriteCapacityAutoScalingUpdate: &shared.AutoScalingSettingsUpdate{
                        AutoScalingDisabled: sdk.Bool(false),
                        AutoScalingRoleArn: sdk.String("cumque"),
                        MaximumUnits: sdk.Int64(291666),
                        MinimumUnits: sdk.Int64(762581),
                        ScalingPolicyUpdate: &shared.AutoScalingPolicyUpdate{
                            PolicyName: sdk.String("quo"),
                            TargetTrackingScalingPolicyConfiguration: shared.AutoScalingTargetTrackingScalingPolicyConfigurationUpdate{
                                DisableScaleIn: sdk.Bool(false),
                                ScaleInCooldown: sdk.Int64(922207),
                                ScaleOutCooldown: sdk.Int64(273349),
                                TargetValue: 7293.86,
                            },
                        },
                    },
                },
                shared.GlobalSecondaryIndexAutoScalingUpdate{
                    IndexName: sdk.String("suscipit"),
                    ProvisionedWriteCapacityAutoScalingUpdate: &shared.AutoScalingSettingsUpdate{
                        AutoScalingDisabled: sdk.Bool(false),
                        AutoScalingRoleArn: sdk.String("illum"),
                        MaximumUnits: sdk.Int64(478576),
                        MinimumUnits: sdk.Int64(401083),
                        ScalingPolicyUpdate: &shared.AutoScalingPolicyUpdate{
                            PolicyName: sdk.String("sint"),
                            TargetTrackingScalingPolicyConfiguration: shared.AutoScalingTargetTrackingScalingPolicyConfigurationUpdate{
                                DisableScaleIn: sdk.Bool(false),
                                ScaleInCooldown: sdk.Int64(400145),
                                ScaleOutCooldown: sdk.Int64(996101),
                                TargetValue: 9570.32,
                            },
                        },
                    },
                },
                shared.GlobalSecondaryIndexAutoScalingUpdate{
                    IndexName: sdk.String("consectetur"),
                    ProvisionedWriteCapacityAutoScalingUpdate: &shared.AutoScalingSettingsUpdate{
                        AutoScalingDisabled: sdk.Bool(false),
                        AutoScalingRoleArn: sdk.String("eligendi"),
                        MaximumUnits: sdk.Int64(353424),
                        MinimumUnits: sdk.Int64(471315),
                        ScalingPolicyUpdate: &shared.AutoScalingPolicyUpdate{
                            PolicyName: sdk.String("eius"),
                            TargetTrackingScalingPolicyConfiguration: shared.AutoScalingTargetTrackingScalingPolicyConfigurationUpdate{
                                DisableScaleIn: sdk.Bool(false),
                                ScaleInCooldown: sdk.Int64(489597),
                                ScaleOutCooldown: sdk.Int64(361113),
                                TargetValue: 165.9,
                            },
                        },
                    },
                },
            },
            ProvisionedWriteCapacityAutoScalingUpdate: &shared.AutoScalingSettingsUpdate{
                AutoScalingDisabled: sdk.Bool(false),
                AutoScalingRoleArn: sdk.String("architecto"),
                MaximumUnits: sdk.Int64(229733),
                MinimumUnits: sdk.Int64(359810),
                ScalingPolicyUpdate: &shared.AutoScalingPolicyUpdate{
                    PolicyName: sdk.String("nihil"),
                    TargetTrackingScalingPolicyConfiguration: shared.AutoScalingTargetTrackingScalingPolicyConfigurationUpdate{
                        DisableScaleIn: sdk.Bool(false),
                        ScaleInCooldown: sdk.Int64(887865),
                        ScaleOutCooldown: sdk.Int64(293799),
                        TargetValue: 2985.9,
                    },
                },
            },
            ReplicaUpdates: []shared.ReplicaAutoScalingUpdate{
                shared.ReplicaAutoScalingUpdate{
                    RegionName: "ipsam",
                    ReplicaGlobalSecondaryIndexUpdates: []shared.ReplicaGlobalSecondaryIndexAutoScalingUpdate{
                        shared.ReplicaGlobalSecondaryIndexAutoScalingUpdate{
                            IndexName: sdk.String("hic"),
                            ProvisionedReadCapacityAutoScalingUpdate: &shared.AutoScalingSettingsUpdate{
                                AutoScalingDisabled: sdk.Bool(false),
                                AutoScalingRoleArn: sdk.String("praesentium"),
                                MaximumUnits: sdk.Int64(728379),
                                MinimumUnits: sdk.Int64(9912),
                                ScalingPolicyUpdate: &shared.AutoScalingPolicyUpdate{
                                    PolicyName: sdk.String("totam"),
                                    TargetTrackingScalingPolicyConfiguration: shared.AutoScalingTargetTrackingScalingPolicyConfigurationUpdate{
                                        DisableScaleIn: sdk.Bool(false),
                                        ScaleInCooldown: sdk.Int64(272518),
                                        ScaleOutCooldown: sdk.Int64(777193),
                                        TargetValue: 2244.31,
                                    },
                                },
                            },
                        },
                    },
                    ReplicaProvisionedReadCapacityAutoScalingUpdate: &shared.AutoScalingSettingsUpdate{
                        AutoScalingDisabled: sdk.Bool(false),
                        AutoScalingRoleArn: sdk.String("sunt"),
                        MaximumUnits: sdk.Int64(605089),
                        MinimumUnits: sdk.Int64(464490),
                        ScalingPolicyUpdate: &shared.AutoScalingPolicyUpdate{
                            PolicyName: sdk.String("officiis"),
                            TargetTrackingScalingPolicyConfiguration: shared.AutoScalingTargetTrackingScalingPolicyConfigurationUpdate{
                                DisableScaleIn: sdk.Bool(false),
                                ScaleInCooldown: sdk.Int64(118236),
                                ScaleOutCooldown: sdk.Int64(566444),
                                TargetValue: 2336.18,
                            },
                        },
                    },
                },
                shared.ReplicaAutoScalingUpdate{
                    RegionName: "deserunt",
                    ReplicaGlobalSecondaryIndexUpdates: []shared.ReplicaGlobalSecondaryIndexAutoScalingUpdate{
                        shared.ReplicaGlobalSecondaryIndexAutoScalingUpdate{
                            IndexName: sdk.String("incidunt"),
                            ProvisionedReadCapacityAutoScalingUpdate: &shared.AutoScalingSettingsUpdate{
                                AutoScalingDisabled: sdk.Bool(false),
                                AutoScalingRoleArn: sdk.String("corporis"),
                                MaximumUnits: sdk.Int64(308866),
                                MinimumUnits: sdk.Int64(381639),
                                ScalingPolicyUpdate: &shared.AutoScalingPolicyUpdate{
                                    PolicyName: sdk.String("ducimus"),
                                    TargetTrackingScalingPolicyConfiguration: shared.AutoScalingTargetTrackingScalingPolicyConfigurationUpdate{
                                        DisableScaleIn: sdk.Bool(false),
                                        ScaleInCooldown: sdk.Int64(947309),
                                        ScaleOutCooldown: sdk.Int64(568560),
                                        TargetValue: 2641.25,
                                    },
                                },
                            },
                        },
                    },
                    ReplicaProvisionedReadCapacityAutoScalingUpdate: &shared.AutoScalingSettingsUpdate{
                        AutoScalingDisabled: sdk.Bool(false),
                        AutoScalingRoleArn: sdk.String("corrupti"),
                        MaximumUnits: sdk.Int64(472429),
                        MinimumUnits: sdk.Int64(260046),
                        ScalingPolicyUpdate: &shared.AutoScalingPolicyUpdate{
                            PolicyName: sdk.String("placeat"),
                            TargetTrackingScalingPolicyConfiguration: shared.AutoScalingTargetTrackingScalingPolicyConfigurationUpdate{
                                DisableScaleIn: sdk.Bool(false),
                                ScaleInCooldown: sdk.Int64(145973),
                                ScaleOutCooldown: sdk.Int64(815618),
                                TargetValue: 3683.72,
                            },
                        },
                    },
                },
                shared.ReplicaAutoScalingUpdate{
                    RegionName: "nobis",
                    ReplicaGlobalSecondaryIndexUpdates: []shared.ReplicaGlobalSecondaryIndexAutoScalingUpdate{
                        shared.ReplicaGlobalSecondaryIndexAutoScalingUpdate{
                            IndexName: sdk.String("labore"),
                            ProvisionedReadCapacityAutoScalingUpdate: &shared.AutoScalingSettingsUpdate{
                                AutoScalingDisabled: sdk.Bool(false),
                                AutoScalingRoleArn: sdk.String("perspiciatis"),
                                MaximumUnits: sdk.Int64(494972),
                                MinimumUnits: sdk.Int64(181873),
                                ScalingPolicyUpdate: &shared.AutoScalingPolicyUpdate{
                                    PolicyName: sdk.String("qui"),
                                    TargetTrackingScalingPolicyConfiguration: shared.AutoScalingTargetTrackingScalingPolicyConfigurationUpdate{
                                        DisableScaleIn: sdk.Bool(false),
                                        ScaleInCooldown: sdk.Int64(233217),
                                        ScaleOutCooldown: sdk.Int64(188399),
                                        TargetValue: 9041.93,
                                    },
                                },
                            },
                        },
                        shared.ReplicaGlobalSecondaryIndexAutoScalingUpdate{
                            IndexName: sdk.String("iure"),
                            ProvisionedReadCapacityAutoScalingUpdate: &shared.AutoScalingSettingsUpdate{
                                AutoScalingDisabled: sdk.Bool(false),
                                AutoScalingRoleArn: sdk.String("aliquid"),
                                MaximumUnits: sdk.Int64(738592),
                                MinimumUnits: sdk.Int64(853701),
                                ScalingPolicyUpdate: &shared.AutoScalingPolicyUpdate{
                                    PolicyName: sdk.String("rem"),
                                    TargetTrackingScalingPolicyConfiguration: shared.AutoScalingTargetTrackingScalingPolicyConfigurationUpdate{
                                        DisableScaleIn: sdk.Bool(false),
                                        ScaleInCooldown: sdk.Int64(977472),
                                        ScaleOutCooldown: sdk.Int64(886684),
                                        TargetValue: 3578.67,
                                    },
                                },
                            },
                        },
                        shared.ReplicaGlobalSecondaryIndexAutoScalingUpdate{
                            IndexName: sdk.String("repellendus"),
                            ProvisionedReadCapacityAutoScalingUpdate: &shared.AutoScalingSettingsUpdate{
                                AutoScalingDisabled: sdk.Bool(false),
                                AutoScalingRoleArn: sdk.String("aut"),
                                MaximumUnits: sdk.Int64(31605),
                                MinimumUnits: sdk.Int64(727789),
                                ScalingPolicyUpdate: &shared.AutoScalingPolicyUpdate{
                                    PolicyName: sdk.String("excepturi"),
                                    TargetTrackingScalingPolicyConfiguration: shared.AutoScalingTargetTrackingScalingPolicyConfigurationUpdate{
                                        DisableScaleIn: sdk.Bool(false),
                                        ScaleInCooldown: sdk.Int64(485438),
                                        ScaleOutCooldown: sdk.Int64(609161),
                                        TargetValue: 8874.22,
                                    },
                                },
                            },
                        },
                        shared.ReplicaGlobalSecondaryIndexAutoScalingUpdate{
                            IndexName: sdk.String("delectus"),
                            ProvisionedReadCapacityAutoScalingUpdate: &shared.AutoScalingSettingsUpdate{
                                AutoScalingDisabled: sdk.Bool(false),
                                AutoScalingRoleArn: sdk.String("magni"),
                                MaximumUnits: sdk.Int64(23236),
                                MinimumUnits: sdk.Int64(243247),
                                ScalingPolicyUpdate: &shared.AutoScalingPolicyUpdate{
                                    PolicyName: sdk.String("voluptatum"),
                                    TargetTrackingScalingPolicyConfiguration: shared.AutoScalingTargetTrackingScalingPolicyConfigurationUpdate{
                                        DisableScaleIn: sdk.Bool(false),
                                        ScaleInCooldown: sdk.Int64(471642),
                                        ScaleOutCooldown: sdk.Int64(204781),
                                        TargetValue: 1357.75,
                                    },
                                },
                            },
                        },
                    },
                    ReplicaProvisionedReadCapacityAutoScalingUpdate: &shared.AutoScalingSettingsUpdate{
                        AutoScalingDisabled: sdk.Bool(false),
                        AutoScalingRoleArn: sdk.String("eaque"),
                        MaximumUnits: sdk.Int64(360334),
                        MinimumUnits: sdk.Int64(587489),
                        ScalingPolicyUpdate: &shared.AutoScalingPolicyUpdate{
                            PolicyName: sdk.String("aut"),
                            TargetTrackingScalingPolicyConfiguration: shared.AutoScalingTargetTrackingScalingPolicyConfigurationUpdate{
                                DisableScaleIn: sdk.Bool(false),
                                ScaleInCooldown: sdk.Int64(772604),
                                ScaleOutCooldown: sdk.Int64(801781),
                                TargetValue: 7748.66,
                            },
                        },
                    },
                },
                shared.ReplicaAutoScalingUpdate{
                    RegionName: "architecto",
                    ReplicaGlobalSecondaryIndexUpdates: []shared.ReplicaGlobalSecondaryIndexAutoScalingUpdate{
                        shared.ReplicaGlobalSecondaryIndexAutoScalingUpdate{
                            IndexName: sdk.String("perspiciatis"),
                            ProvisionedReadCapacityAutoScalingUpdate: &shared.AutoScalingSettingsUpdate{
                                AutoScalingDisabled: sdk.Bool(false),
                                AutoScalingRoleArn: sdk.String("ea"),
                                MaximumUnits: sdk.Int64(262231),
                                MinimumUnits: sdk.Int64(44509),
                                ScalingPolicyUpdate: &shared.AutoScalingPolicyUpdate{
                                    PolicyName: sdk.String("voluptatem"),
                                    TargetTrackingScalingPolicyConfiguration: shared.AutoScalingTargetTrackingScalingPolicyConfigurationUpdate{
                                        DisableScaleIn: sdk.Bool(false),
                                        ScaleInCooldown: sdk.Int64(247838),
                                        ScaleOutCooldown: sdk.Int64(109695),
                                        TargetValue: 1928.8,
                                    },
                                },
                            },
                        },
                    },
                    ReplicaProvisionedReadCapacityAutoScalingUpdate: &shared.AutoScalingSettingsUpdate{
                        AutoScalingDisabled: sdk.Bool(false),
                        AutoScalingRoleArn: sdk.String("rerum"),
                        MaximumUnits: sdk.Int64(215182),
                        MinimumUnits: sdk.Int64(891063),
                        ScalingPolicyUpdate: &shared.AutoScalingPolicyUpdate{
                            PolicyName: sdk.String("quis"),
                            TargetTrackingScalingPolicyConfiguration: shared.AutoScalingTargetTrackingScalingPolicyConfigurationUpdate{
                                DisableScaleIn: sdk.Bool(false),
                                ScaleInCooldown: sdk.Int64(54677),
                                ScaleOutCooldown: sdk.Int64(277418),
                                TargetValue: 2814.36,
                            },
                        },
                    },
                },
            },
            TableName: "delectus",
        },
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("ullam"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("reprehenderit"),
        XAmzSignature: sdk.String("eos"),
        XAmzSignedHeaders: sdk.String("assumenda"),
        XAmzTarget: operations.UpdateTableReplicaAutoScalingXAmzTargetEnumDynamoDb20120810UpdateTableReplicaAutoScaling,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateTableReplicaAutoScalingOutput != nil {
        // handle response
    }
}
```

## UpdateTimeToLive

<p>The <code>UpdateTimeToLive</code> method enables or disables Time to Live (TTL) for the specified table. A successful <code>UpdateTimeToLive</code> call returns the current <code>TimeToLiveSpecification</code>. It can take up to one hour for the change to fully process. Any additional <code>UpdateTimeToLive</code> calls for the same table during this one hour duration result in a <code>ValidationException</code>. </p> <p>TTL compares the current time in epoch time format to the time stored in the TTL attribute of an item. If the epoch time value stored in the attribute is less than the current time, the item is marked as expired and subsequently deleted.</p> <note> <p> The epoch time format is the number of seconds elapsed since 12:00:00 AM January 1, 1970 UTC. </p> </note> <p>DynamoDB deletes expired items on a best-effort basis to ensure availability of throughput for other data operations. </p> <important> <p>DynamoDB typically deletes expired items within two days of expiration. The exact duration within which an item gets deleted after expiration is specific to the nature of the workload. Items that have expired and not been deleted will still show up in reads, queries, and scans.</p> </important> <p>As items are deleted, they are removed from any local secondary index and global secondary index immediately in the same eventually consistent way as a standard delete operation.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/TTL.html">Time To Live</a> in the Amazon DynamoDB Developer Guide. </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateTimeToLive(ctx, operations.UpdateTimeToLiveRequest{
        UpdateTimeToLiveInput: shared.UpdateTimeToLiveInput{
            TableName: "cumque",
            TimeToLiveSpecification: shared.TimeToLiveSpecification{
                AttributeName: "ut",
                Enabled: false,
            },
        },
        XAmzAlgorithm: sdk.String("quae"),
        XAmzContentSha256: sdk.String("nihil"),
        XAmzCredential: sdk.String("quam"),
        XAmzDate: sdk.String("assumenda"),
        XAmzSecurityToken: sdk.String("consequatur"),
        XAmzSignature: sdk.String("cumque"),
        XAmzSignedHeaders: sdk.String("placeat"),
        XAmzTarget: operations.UpdateTimeToLiveXAmzTargetEnumDynamoDb20120810UpdateTimeToLive,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateTimeToLiveOutput != nil {
        // handle response
    }
}
```
