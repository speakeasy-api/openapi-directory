# SDK

## Overview

<fullname>Amazon DynamoDB</fullname> <p>Amazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability. DynamoDB lets you offload the administrative burdens of operating and scaling a distributed database, so that you don't have to worry about hardware provisioning, setup and configuration, replication, software patching, or cluster scaling.</p> <p>With DynamoDB, you can create database tables that can store and retrieve any amount of data, and serve any level of request traffic. You can scale up or scale down your tables' throughput capacity without downtime or performance degradation, and use the Amazon Web Services Management Console to monitor resource utilization and performance metrics.</p> <p>DynamoDB automatically spreads the data and traffic for your tables over a sufficient number of servers to handle your throughput and storage requirements, while maintaining consistent and fast performance. All of your data is stored on solid state disks (SSDs) and automatically replicated across multiple Availability Zones in an Amazon Web Services Region, providing built-in high availability and data durability.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/dynamodb/>
### Available Operations

* [batchExecuteStatement](#batchexecutestatement) - <p>This operation allows you to perform batch reads or writes on data stored in DynamoDB, using PartiQL. Each read statement in a <code>BatchExecuteStatement</code> must specify an equality condition on all key attributes. This enforces that each <code>SELECT</code> statement in a batch returns at most a single item.</p> <note> <p>The entire batch must consist of either read statements or write statements, you cannot mix both in one batch.</p> </note> <important> <p>A HTTP 200 response does not mean that all statements in the BatchExecuteStatement succeeded. Error details for individual statements can be found under the <a href="https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchStatementResponse.html#DDB-Type-BatchStatementResponse-Error">Error</a> field of the <code>BatchStatementResponse</code> for each statement.</p> </important>
* [batchGetItem](#batchgetitem) - <p>The <code>BatchGetItem</code> operation returns the attributes of one or more items from one or more tables. You identify requested items by primary key.</p> <p>A single operation can retrieve up to 16 MB of data, which can contain as many as 100 items. <code>BatchGetItem</code> returns a partial result if the response size limit is exceeded, the table's provisioned throughput is exceeded, or an internal processing failure occurs. If a partial result is returned, the operation returns a value for <code>UnprocessedKeys</code>. You can use this value to retry the operation starting with the next item to get.</p> <important> <p>If you request more than 100 items, <code>BatchGetItem</code> returns a <code>ValidationException</code> with the message "Too many items requested for the BatchGetItem call."</p> </important> <p>For example, if you ask to retrieve 100 items, but each individual item is 300 KB in size, the system returns 52 items (so as not to exceed the 16 MB limit). It also returns an appropriate <code>UnprocessedKeys</code> value so you can get the next page of results. If desired, your application can include its own logic to assemble the pages of results into one dataset.</p> <p>If <i>none</i> of the items can be processed due to insufficient provisioned throughput on all of the tables in the request, then <code>BatchGetItem</code> returns a <code>ProvisionedThroughputExceededException</code>. If <i>at least one</i> of the items is successfully processed, then <code>BatchGetItem</code> completes successfully, while returning the keys of the unread items in <code>UnprocessedKeys</code>.</p> <important> <p>If DynamoDB returns any unprocessed items, you should retry the batch operation on those items. However, <i>we strongly recommend that you use an exponential backoff algorithm</i>. If you retry the batch operation immediately, the underlying read or write requests can still fail due to throttling on the individual tables. If you delay the batch operation using exponential backoff, the individual requests in the batch are much more likely to succeed.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ErrorHandling.html#BatchOperations">Batch Operations and Error Handling</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> </important> <p>By default, <code>BatchGetItem</code> performs eventually consistent reads on every table in the request. If you want strongly consistent reads instead, you can set <code>ConsistentRead</code> to <code>true</code> for any or all tables.</p> <p>In order to minimize response latency, <code>BatchGetItem</code> may retrieve items in parallel.</p> <p>When designing your application, keep in mind that DynamoDB does not return items in any particular order. To help parse the response by item, include the primary key values for the items in your request in the <code>ProjectionExpression</code> parameter.</p> <p>If a requested item does not exist, it is not returned in the result. Requests for nonexistent items consume the minimum read capacity units according to the type of read. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.html#CapacityUnitCalculations">Working with Tables</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
* [batchWriteItem](#batchwriteitem) - <p>The <code>BatchWriteItem</code> operation puts or deletes multiple items in one or more tables. A single call to <code>BatchWriteItem</code> can transmit up to 16MB of data over the network, consisting of up to 25 item put or delete operations. While individual items can be up to 400 KB once stored, it's important to note that an item's representation might be greater than 400KB while being sent in DynamoDB's JSON format for the API call. For more details on this distinction, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html">Naming Rules and Data Types</a>.</p> <note> <p> <code>BatchWriteItem</code> cannot update items. If you perform a <code>BatchWriteItem</code> operation on an existing item, that item's values will be overwritten by the operation and it will appear like it was updated. To update items, we recommend you use the <code>UpdateItem</code> action.</p> </note> <p>The individual <code>PutItem</code> and <code>DeleteItem</code> operations specified in <code>BatchWriteItem</code> are atomic; however <code>BatchWriteItem</code> as a whole is not. If any requested operations fail because the table's provisioned throughput is exceeded or an internal processing failure occurs, the failed operations are returned in the <code>UnprocessedItems</code> response parameter. You can investigate and optionally resend the requests. Typically, you would call <code>BatchWriteItem</code> in a loop. Each iteration would check for unprocessed items and submit a new <code>BatchWriteItem</code> request with those unprocessed items until all items have been processed.</p> <p>If <i>none</i> of the items can be processed due to insufficient provisioned throughput on all of the tables in the request, then <code>BatchWriteItem</code> returns a <code>ProvisionedThroughputExceededException</code>.</p> <important> <p>If DynamoDB returns any unprocessed items, you should retry the batch operation on those items. However, <i>we strongly recommend that you use an exponential backoff algorithm</i>. If you retry the batch operation immediately, the underlying read or write requests can still fail due to throttling on the individual tables. If you delay the batch operation using exponential backoff, the individual requests in the batch are much more likely to succeed.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ErrorHandling.html#Programming.Errors.BatchOperations">Batch Operations and Error Handling</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> </important> <p>With <code>BatchWriteItem</code>, you can efficiently write or delete large amounts of data, such as from Amazon EMR, or copy data from another database into DynamoDB. In order to improve performance with these large-scale operations, <code>BatchWriteItem</code> does not behave in the same way as individual <code>PutItem</code> and <code>DeleteItem</code> calls would. For example, you cannot specify conditions on individual put and delete requests, and <code>BatchWriteItem</code> does not return deleted items in the response.</p> <p>If you use a programming language that supports concurrency, you can use threads to write items in parallel. Your application must include the necessary logic to manage the threads. With languages that don't support threading, you must update or delete the specified items one at a time. In both situations, <code>BatchWriteItem</code> performs the specified put and delete operations in parallel, giving you the power of the thread pool approach without having to introduce complexity into your application.</p> <p>Parallel processing reduces latency, but each specified put and delete request consumes the same number of write capacity units whether it is processed in parallel or not. Delete operations on nonexistent items consume one write capacity unit.</p> <p>If one or more of the following is true, DynamoDB rejects the entire batch write operation:</p> <ul> <li> <p>One or more tables specified in the <code>BatchWriteItem</code> request does not exist.</p> </li> <li> <p>Primary key attributes specified on an item in the request do not match those in the corresponding table's primary key schema.</p> </li> <li> <p>You try to perform multiple operations on the same item in the same <code>BatchWriteItem</code> request. For example, you cannot put and delete the same item in the same <code>BatchWriteItem</code> request. </p> </li> <li> <p> Your request contains at least two items with identical hash and range keys (which essentially is two put operations). </p> </li> <li> <p>There are more than 25 requests in the batch.</p> </li> <li> <p>Any individual item in a batch exceeds 400 KB.</p> </li> <li> <p>The total request size exceeds 16 MB.</p> </li> </ul>
* [createBackup](#createbackup) - <p>Creates a backup for an existing table.</p> <p> Each time you create an on-demand backup, the entire table data is backed up. There is no limit to the number of on-demand backups that can be taken. </p> <p> When you create an on-demand backup, a time marker of the request is cataloged, and the backup is created asynchronously, by applying all changes until the time of the request to the last full table snapshot. Backup requests are processed instantaneously and become available for restore within minutes. </p> <p>You can call <code>CreateBackup</code> at a maximum rate of 50 times per second.</p> <p>All backups in DynamoDB work without consuming any provisioned throughput on the table.</p> <p> If you submit a backup request on 2018-12-14 at 14:25:00, the backup is guaranteed to contain all data committed to the table up to 14:24:00, and data committed after 14:26:00 will not be. The backup might contain data modifications made between 14:24:00 and 14:26:00. On-demand backup does not support causal consistency. </p> <p> Along with data, the following are also included on the backups: </p> <ul> <li> <p>Global secondary indexes (GSIs)</p> </li> <li> <p>Local secondary indexes (LSIs)</p> </li> <li> <p>Streams</p> </li> <li> <p>Provisioned read and write capacity</p> </li> </ul>
* [createGlobalTable](#createglobaltable) - <p>Creates a global table from an existing table. A global table creates a replication relationship between two or more DynamoDB tables with the same table name in the provided Regions. </p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29 (Legacy)</a> of global tables. We recommend using <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> when creating new global tables, as it provides greater flexibility, higher efficiency and consumes less write capacity than 2017.11.29 (Legacy). To determine which version you are using, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.DetermineVersion.html">Determining the version</a>. To update existing global tables from version 2017.11.29 (Legacy) to version 2019.11.21 (Current), see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_upgrade.html"> Updating global tables</a>. </p> </important> <p>If you want to add a new replica table to a global table, each of the following conditions must be true:</p> <ul> <li> <p>The table must have the same primary key as all of the other replicas.</p> </li> <li> <p>The table must have the same name as all of the other replicas.</p> </li> <li> <p>The table must have DynamoDB Streams enabled, with the stream containing both the new and the old images of the item.</p> </li> <li> <p>None of the replica tables in the global table can contain any data.</p> </li> </ul> <p> If global secondary indexes are specified, then the following conditions must also be met: </p> <ul> <li> <p> The global secondary indexes must have the same name. </p> </li> <li> <p> The global secondary indexes must have the same hash key and sort key (if present). </p> </li> </ul> <p> If local secondary indexes are specified, then the following conditions must also be met: </p> <ul> <li> <p> The local secondary indexes must have the same name. </p> </li> <li> <p> The local secondary indexes must have the same hash key and sort key (if present). </p> </li> </ul> <important> <p> Write capacity settings should be set consistently across your replica tables and secondary indexes. DynamoDB strongly recommends enabling auto scaling to manage the write capacity settings for all of your global tables replicas and indexes. </p> <p> If you prefer to manage write capacity settings manually, you should provision equal replicated write capacity units to your replica tables. You should also provision equal replicated write capacity units to matching secondary indexes across your global table. </p> </important>
* [createTable](#createtable) - <p>The <code>CreateTable</code> operation adds a new table to your account. In an Amazon Web Services account, table names must be unique within each Region. That is, you can have two tables with same name if you create the tables in different Regions.</p> <p> <code>CreateTable</code> is an asynchronous operation. Upon receiving a <code>CreateTable</code> request, DynamoDB immediately returns a response with a <code>TableStatus</code> of <code>CREATING</code>. After the table is created, DynamoDB sets the <code>TableStatus</code> to <code>ACTIVE</code>. You can perform read and write operations only on an <code>ACTIVE</code> table. </p> <p>You can optionally define secondary indexes on the new table, as part of the <code>CreateTable</code> operation. If you want to create multiple tables with secondary indexes on them, you must create the tables sequentially. Only one table with secondary indexes can be in the <code>CREATING</code> state at any given time.</p> <p>You can use the <code>DescribeTable</code> action to check the table status.</p>
* [deleteBackup](#deletebackup) - <p>Deletes an existing backup of a table.</p> <p>You can call <code>DeleteBackup</code> at a maximum rate of 10 times per second.</p>
* [deleteItem](#deleteitem) - <p>Deletes a single item in a table by primary key. You can perform a conditional delete operation that deletes the item if it exists, or if it has an expected attribute value.</p> <p>In addition to deleting an item, you can also return the item's attribute values in the same operation, using the <code>ReturnValues</code> parameter.</p> <p>Unless you specify conditions, the <code>DeleteItem</code> is an idempotent operation; running it multiple times on the same item or attribute does <i>not</i> result in an error response.</p> <p>Conditional deletes are useful for deleting items only if specific conditions are met. If those conditions are met, DynamoDB performs the delete. Otherwise, the item is not deleted.</p>
* [deleteTable](#deletetable) - <p>The <code>DeleteTable</code> operation deletes a table and all of its items. After a <code>DeleteTable</code> request, the specified table is in the <code>DELETING</code> state until DynamoDB completes the deletion. If the table is in the <code>ACTIVE</code> state, you can delete it. If a table is in <code>CREATING</code> or <code>UPDATING</code> states, then DynamoDB returns a <code>ResourceInUseException</code>. If the specified table does not exist, DynamoDB returns a <code>ResourceNotFoundException</code>. If table is already in the <code>DELETING</code> state, no error is returned. </p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> of global tables. </p> </important> <note> <p>DynamoDB might continue to accept data read and write operations, such as <code>GetItem</code> and <code>PutItem</code>, on a table in the <code>DELETING</code> state until the table deletion is complete.</p> </note> <p>When you delete a table, any indexes on that table are also deleted.</p> <p>If you have DynamoDB Streams enabled on the table, then the corresponding stream on that table goes into the <code>DISABLED</code> state, and the stream is automatically deleted after 24 hours.</p> <p>Use the <code>DescribeTable</code> action to check the status of the table. </p>
* [describeBackup](#describebackup) - <p>Describes an existing backup of a table.</p> <p>You can call <code>DescribeBackup</code> at a maximum rate of 10 times per second.</p>
* [describeContinuousBackups](#describecontinuousbackups) - <p>Checks the status of continuous backups and point in time recovery on the specified table. Continuous backups are <code>ENABLED</code> on all tables at table creation. If point in time recovery is enabled, <code>PointInTimeRecoveryStatus</code> will be set to ENABLED.</p> <p> After continuous backups and point in time recovery are enabled, you can restore to any point in time within <code>EarliestRestorableDateTime</code> and <code>LatestRestorableDateTime</code>. </p> <p> <code>LatestRestorableDateTime</code> is typically 5 minutes before the current time. You can restore your table to any point in time during the last 35 days. </p> <p>You can call <code>DescribeContinuousBackups</code> at a maximum rate of 10 times per second.</p>
* [describeContributorInsights](#describecontributorinsights) - Returns information about contributor insights for a given table or global secondary index.
* [describeEndpoints](#describeendpoints) - Returns the regional endpoint information. This action must be included in your VPC endpoint policies, or access to the DescribeEndpoints API will be denied. For more information on policy permissions, please see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/inter-network-traffic-privacy.html#inter-network-traffic-DescribeEndpoints">Internetwork traffic privacy</a>.
* [describeExport](#describeexport) - Describes an existing table export.
* [describeGlobalTable](#describeglobaltable) - <p>Returns information about the specified global table.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29 (Legacy)</a> of global tables. We recommend using <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> when creating new global tables, as it provides greater flexibility, higher efficiency and consumes less write capacity than 2017.11.29 (Legacy). To determine which version you are using, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.DetermineVersion.html">Determining the version</a>. To update existing global tables from version 2017.11.29 (Legacy) to version 2019.11.21 (Current), see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_upgrade.html"> Updating global tables</a>. </p> </important>
* [describeGlobalTableSettings](#describeglobaltablesettings) - <p>Describes Region-specific settings for a global table.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29 (Legacy)</a> of global tables. We recommend using <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> when creating new global tables, as it provides greater flexibility, higher efficiency and consumes less write capacity than 2017.11.29 (Legacy). To determine which version you are using, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.DetermineVersion.html">Determining the version</a>. To update existing global tables from version 2017.11.29 (Legacy) to version 2019.11.21 (Current), see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_upgrade.html"> Updating global tables</a>. </p> </important>
* [describeImport](#describeimport) -  Represents the properties of the import. 
* [describeKinesisStreamingDestination](#describekinesisstreamingdestination) - Returns information about the status of Kinesis streaming.
* [describeLimits](#describelimits) - <p>Returns the current provisioned-capacity quotas for your Amazon Web Services account in a Region, both for the Region as a whole and for any one DynamoDB table that you create there.</p> <p>When you establish an Amazon Web Services account, the account has initial quotas on the maximum read capacity units and write capacity units that you can provision across all of your DynamoDB tables in a given Region. Also, there are per-table quotas that apply when you create a table there. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Service, Account, and Table Quotas</a> page in the <i>Amazon DynamoDB Developer Guide</i>.</p> <p>Although you can increase these quotas by filing a case at <a href="https://console.aws.amazon.com/support/home#/">Amazon Web Services Support Center</a>, obtaining the increase is not instantaneous. The <code>DescribeLimits</code> action lets you write code to compare the capacity you are currently using to those quotas imposed by your account so that you have enough time to apply for an increase before you hit a quota.</p> <p>For example, you could use one of the Amazon Web Services SDKs to do the following:</p> <ol> <li> <p>Call <code>DescribeLimits</code> for a particular Region to obtain your current account quotas on provisioned capacity there.</p> </li> <li> <p>Create a variable to hold the aggregate read capacity units provisioned for all your tables in that Region, and one to hold the aggregate write capacity units. Zero them both.</p> </li> <li> <p>Call <code>ListTables</code> to obtain a list of all your DynamoDB tables.</p> </li> <li> <p>For each table name listed by <code>ListTables</code>, do the following:</p> <ul> <li> <p>Call <code>DescribeTable</code> with the table name.</p> </li> <li> <p>Use the data returned by <code>DescribeTable</code> to add the read capacity units and write capacity units provisioned for the table itself to your variables.</p> </li> <li> <p>If the table has one or more global secondary indexes (GSIs), loop over these GSIs and add their provisioned capacity values to your variables as well.</p> </li> </ul> </li> <li> <p>Report the account quotas for that Region returned by <code>DescribeLimits</code>, along with the total current provisioned capacity levels you have calculated.</p> </li> </ol> <p>This will let you see whether you are getting close to your account-level quotas.</p> <p>The per-table quotas apply only when you are creating a new table. They restrict the sum of the provisioned capacity of the new table itself and all its global secondary indexes.</p> <p>For existing tables and their GSIs, DynamoDB doesn't let you increase provisioned capacity extremely rapidly, but the only quota that applies is that the aggregate provisioned capacity over all your tables and GSIs cannot exceed either of the per-account quotas.</p> <note> <p> <code>DescribeLimits</code> should only be called periodically. You can expect throttling errors if you call it more than once in a minute.</p> </note> <p>The <code>DescribeLimits</code> Request element has no content.</p>
* [describeTable](#describetable) - <p>Returns information about the table, including the current status of the table, when it was created, the primary key schema, and any indexes on the table.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> of global tables. </p> </important> <note> <p>If you issue a <code>DescribeTable</code> request immediately after a <code>CreateTable</code> request, DynamoDB might return a <code>ResourceNotFoundException</code>. This is because <code>DescribeTable</code> uses an eventually consistent query, and the metadata for your table might not be available at that moment. Wait for a few seconds, and then try the <code>DescribeTable</code> request again.</p> </note>
* [describeTableReplicaAutoScaling](#describetablereplicaautoscaling) - <p>Describes auto scaling settings across replicas of the global table at once.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> of global tables.</p> </important>
* [describeTimeToLive](#describetimetolive) - Gives a description of the Time to Live (TTL) status on the specified table. 
* [disableKinesisStreamingDestination](#disablekinesisstreamingdestination) - Stops replication from the DynamoDB table to the Kinesis data stream. This is done without deleting either of the resources.
* [enableKinesisStreamingDestination](#enablekinesisstreamingdestination) - Starts table data replication to the specified Kinesis data stream at a timestamp chosen during the enable workflow. If this operation doesn't return results immediately, use DescribeKinesisStreamingDestination to check if streaming to the Kinesis data stream is ACTIVE.
* [executeStatement](#executestatement) - <p>This operation allows you to perform reads and singleton writes on data stored in DynamoDB, using PartiQL.</p> <p>For PartiQL reads (<code>SELECT</code> statement), if the total number of processed items exceeds the maximum dataset size limit of 1 MB, the read stops and results are returned to the user as a <code>LastEvaluatedKey</code> value to continue the read in a subsequent operation. If the filter criteria in <code>WHERE</code> clause does not match any data, the read will return an empty result set.</p> <p>A single <code>SELECT</code> statement response can return up to the maximum number of items (if using the Limit parameter) or a maximum of 1 MB of data (and then apply any filtering to the results using <code>WHERE</code> clause). If <code>LastEvaluatedKey</code> is present in the response, you need to paginate the result set. If <code>NextToken</code> is present, you need to paginate the result set and include <code>NextToken</code>.</p>
* [executeTransaction](#executetransaction) - <p>This operation allows you to perform transactional reads or writes on data stored in DynamoDB, using PartiQL.</p> <note> <p>The entire transaction must consist of either read statements or write statements, you cannot mix both in one transaction. The EXISTS function is an exception and can be used to check the condition of specific attributes of the item in a similar manner to <code>ConditionCheck</code> in the <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/transaction-apis.html#transaction-apis-txwriteitems">TransactWriteItems</a> API.</p> </note>
* [exportTableToPointInTime](#exporttabletopointintime) - Exports table data to an S3 bucket. The table must have point in time recovery enabled, and you can export data from any time within the point in time recovery window.
* [getItem](#getitem) - <p>The <code>GetItem</code> operation returns a set of attributes for the item with the given primary key. If there is no matching item, <code>GetItem</code> does not return any data and there will be no <code>Item</code> element in the response.</p> <p> <code>GetItem</code> provides an eventually consistent read by default. If your application requires a strongly consistent read, set <code>ConsistentRead</code> to <code>true</code>. Although a strongly consistent read might take more time than an eventually consistent read, it always returns the last updated value.</p>
* [importTable](#importtable) -  Imports table data from an S3 bucket. 
* [listBackups](#listbackups) - <p>List backups associated with an Amazon Web Services account. To list backups for a given table, specify <code>TableName</code>. <code>ListBackups</code> returns a paginated list of results with at most 1 MB worth of items in a page. You can also specify a maximum number of entries to be returned in a page.</p> <p>In the request, start time is inclusive, but end time is exclusive. Note that these boundaries are for the time at which the original backup was requested.</p> <p>You can call <code>ListBackups</code> a maximum of five times per second.</p>
* [listContributorInsights](#listcontributorinsights) - Returns a list of ContributorInsightsSummary for a table and all its global secondary indexes.
* [listExports](#listexports) - Lists completed exports within the past 90 days.
* [listGlobalTables](#listglobaltables) - <p>Lists all global tables that have a replica in the specified Region.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29 (Legacy)</a> of global tables. We recommend using <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> when creating new global tables, as it provides greater flexibility, higher efficiency and consumes less write capacity than 2017.11.29 (Legacy). To determine which version you are using, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.DetermineVersion.html">Determining the version</a>. To update existing global tables from version 2017.11.29 (Legacy) to version 2019.11.21 (Current), see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_upgrade.html"> Updating global tables</a>. </p> </important>
* [listImports](#listimports) -  Lists completed imports within the past 90 days. 
* [listTables](#listtables) - Returns an array of table names associated with the current account and endpoint. The output from <code>ListTables</code> is paginated, with each page returning a maximum of 100 table names.
* [listTagsOfResource](#listtagsofresource) - <p>List all tags on an Amazon DynamoDB resource. You can call ListTagsOfResource up to 10 times per second, per account.</p> <p>For an overview on tagging DynamoDB resources, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tagging.html">Tagging for DynamoDB</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
* [putItem](#putitem) - <p>Creates a new item, or replaces an old item with a new item. If an item that has the same primary key as the new item already exists in the specified table, the new item completely replaces the existing item. You can perform a conditional put operation (add a new item if one with the specified primary key doesn't exist), or replace an existing item if it has certain attribute values. You can return the item's attribute values in the same operation, using the <code>ReturnValues</code> parameter.</p> <p>When you add an item, the primary key attributes are the only required attributes. </p> <p>Empty String and Binary attribute values are allowed. Attribute values of type String and Binary must have a length greater than zero if the attribute is used as a key attribute for a table or index. Set type attributes cannot be empty. </p> <p>Invalid Requests with empty values will be rejected with a <code>ValidationException</code> exception.</p> <note> <p>To prevent a new item from replacing an existing item, use a conditional expression that contains the <code>attribute_not_exists</code> function with the name of the attribute being used as the partition key for the table. Since every record must contain that attribute, the <code>attribute_not_exists</code> function will only succeed if no matching item exists.</p> </note> <p>For more information about <code>PutItem</code>, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithItems.html">Working with Items</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
* [query](#query) - <p>You must provide the name of the partition key attribute and a single value for that attribute. <code>Query</code> returns all items with that partition key value. Optionally, you can provide a sort key attribute and use a comparison operator to refine the search results.</p> <p>Use the <code>KeyConditionExpression</code> parameter to provide a specific value for the partition key. The <code>Query</code> operation will return all of the items from the table or index with that partition key value. You can optionally narrow the scope of the <code>Query</code> operation by specifying a sort key value and a comparison operator in <code>KeyConditionExpression</code>. To further refine the <code>Query</code> results, you can optionally provide a <code>FilterExpression</code>. A <code>FilterExpression</code> determines which items within the results should be returned to you. All of the other results are discarded. </p> <p> A <code>Query</code> operation always returns a result set. If no matching items are found, the result set will be empty. Queries that do not return results consume the minimum number of read capacity units for that type of read operation. </p> <note> <p> DynamoDB calculates the number of read capacity units consumed based on item size, not on the amount of data that is returned to an application. The number of capacity units consumed will be the same whether you request all of the attributes (the default behavior) or just some of them (using a projection expression). The number will also be the same whether or not you use a <code>FilterExpression</code>. </p> </note> <p> <code>Query</code> results are always sorted by the sort key value. If the data type of the sort key is Number, the results are returned in numeric order; otherwise, the results are returned in order of UTF-8 bytes. By default, the sort order is ascending. To reverse the order, set the <code>ScanIndexForward</code> parameter to false. </p> <p> A single <code>Query</code> operation will read up to the maximum number of items set (if using the <code>Limit</code> parameter) or a maximum of 1 MB of data and then apply any filtering to the results using <code>FilterExpression</code>. If <code>LastEvaluatedKey</code> is present in the response, you will need to paginate the result set. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Query.html#Query.Pagination">Paginating the Results</a> in the <i>Amazon DynamoDB Developer Guide</i>. </p> <p> <code>FilterExpression</code> is applied after a <code>Query</code> finishes, but before the results are returned. A <code>FilterExpression</code> cannot contain partition key or sort key attributes. You need to specify those attributes in the <code>KeyConditionExpression</code>. </p> <note> <p> A <code>Query</code> operation can return an empty result set and a <code>LastEvaluatedKey</code> if all the items read for the page of results are filtered out. </p> </note> <p>You can query a table, a local secondary index, or a global secondary index. For a query on a table or on a local secondary index, you can set the <code>ConsistentRead</code> parameter to <code>true</code> and obtain a strongly consistent result. Global secondary indexes support eventually consistent reads only, so do not specify <code>ConsistentRead</code> when querying a global secondary index.</p>
* [restoreTableFromBackup](#restoretablefrombackup) - <p>Creates a new table from an existing backup. Any number of users can execute up to 50 concurrent restores (any type of restore) in a given account. </p> <p>You can call <code>RestoreTableFromBackup</code> at a maximum rate of 10 times per second.</p> <p>You must manually set up the following on the restored table:</p> <ul> <li> <p>Auto scaling policies</p> </li> <li> <p>IAM policies</p> </li> <li> <p>Amazon CloudWatch metrics and alarms</p> </li> <li> <p>Tags</p> </li> <li> <p>Stream settings</p> </li> <li> <p>Time to Live (TTL) settings</p> </li> </ul>
* [restoreTableToPointInTime](#restoretabletopointintime) - <p>Restores the specified table to the specified point in time within <code>EarliestRestorableDateTime</code> and <code>LatestRestorableDateTime</code>. You can restore your table to any point in time during the last 35 days. Any number of users can execute up to 4 concurrent restores (any type of restore) in a given account. </p> <p> When you restore using point in time recovery, DynamoDB restores your table data to the state based on the selected date and time (day:hour:minute:second) to a new table. </p> <p> Along with data, the following are also included on the new restored table using point in time recovery: </p> <ul> <li> <p>Global secondary indexes (GSIs)</p> </li> <li> <p>Local secondary indexes (LSIs)</p> </li> <li> <p>Provisioned read and write capacity</p> </li> <li> <p>Encryption settings</p> <important> <p> All these settings come from the current settings of the source table at the time of restore. </p> </important> </li> </ul> <p>You must manually set up the following on the restored table:</p> <ul> <li> <p>Auto scaling policies</p> </li> <li> <p>IAM policies</p> </li> <li> <p>Amazon CloudWatch metrics and alarms</p> </li> <li> <p>Tags</p> </li> <li> <p>Stream settings</p> </li> <li> <p>Time to Live (TTL) settings</p> </li> <li> <p>Point in time recovery settings</p> </li> </ul>
* [scan](#scan) - <p>The <code>Scan</code> operation returns one or more items and item attributes by accessing every item in a table or a secondary index. To have DynamoDB return fewer items, you can provide a <code>FilterExpression</code> operation.</p> <p>If the total number of scanned items exceeds the maximum dataset size limit of 1 MB, the scan stops and results are returned to the user as a <code>LastEvaluatedKey</code> value to continue the scan in a subsequent operation. The results also include the number of items exceeding the limit. A scan can result in no table data meeting the filter criteria. </p> <p>A single <code>Scan</code> operation reads up to the maximum number of items set (if using the <code>Limit</code> parameter) or a maximum of 1 MB of data and then apply any filtering to the results using <code>FilterExpression</code>. If <code>LastEvaluatedKey</code> is present in the response, you need to paginate the result set. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Scan.html#Scan.Pagination">Paginating the Results</a> in the <i>Amazon DynamoDB Developer Guide</i>. </p> <p> <code>Scan</code> operations proceed sequentially; however, for faster performance on a large table or secondary index, applications can request a parallel <code>Scan</code> operation by providing the <code>Segment</code> and <code>TotalSegments</code> parameters. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Scan.html#Scan.ParallelScan">Parallel Scan</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> <p> <code>Scan</code> uses eventually consistent reads when accessing the data in a table; therefore, the result set might not include the changes to data in the table immediately before the operation began. If you need a consistent copy of the data, as of the time that the <code>Scan</code> begins, you can set the <code>ConsistentRead</code> parameter to <code>true</code>.</p>
* [tagResource](#tagresource) - <p>Associate a set of tags with an Amazon DynamoDB resource. You can then activate these user-defined tags so that they appear on the Billing and Cost Management console for cost allocation tracking. You can call TagResource up to five times per second, per account. </p> <p>For an overview on tagging DynamoDB resources, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tagging.html">Tagging for DynamoDB</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
* [transactGetItems](#transactgetitems) - <p> <code>TransactGetItems</code> is a synchronous operation that atomically retrieves multiple items from one or more tables (but not from indexes) in a single account and Region. A <code>TransactGetItems</code> call can contain up to 100 <code>TransactGetItem</code> objects, each of which contains a <code>Get</code> structure that specifies an item to retrieve from a table in the account and Region. A call to <code>TransactGetItems</code> cannot retrieve items from tables in more than one Amazon Web Services account or Region. The aggregate size of the items in the transaction cannot exceed 4 MB.</p> <p>DynamoDB rejects the entire <code>TransactGetItems</code> request if any of the following is true:</p> <ul> <li> <p>A conflicting operation is in the process of updating an item to be read.</p> </li> <li> <p>There is insufficient provisioned capacity for the transaction to be completed.</p> </li> <li> <p>There is a user error, such as an invalid data format.</p> </li> <li> <p>The aggregate size of the items in the transaction exceeded 4 MB.</p> </li> </ul>
* [transactWriteItems](#transactwriteitems) - <p> <code>TransactWriteItems</code> is a synchronous write operation that groups up to 100 action requests. These actions can target items in different tables, but not in different Amazon Web Services accounts or Regions, and no two actions can target the same item. For example, you cannot both <code>ConditionCheck</code> and <code>Update</code> the same item. The aggregate size of the items in the transaction cannot exceed 4 MB.</p> <p>The actions are completed atomically so that either all of them succeed, or all of them fail. They are defined by the following objects:</p> <ul> <li> <p> <code>Put</code>  —   Initiates a <code>PutItem</code> operation to write a new item. This structure specifies the primary key of the item to be written, the name of the table to write it in, an optional condition expression that must be satisfied for the write to succeed, a list of the item's attributes, and a field indicating whether to retrieve the item's attributes if the condition is not met.</p> </li> <li> <p> <code>Update</code>  —   Initiates an <code>UpdateItem</code> operation to update an existing item. This structure specifies the primary key of the item to be updated, the name of the table where it resides, an optional condition expression that must be satisfied for the update to succeed, an expression that defines one or more attributes to be updated, and a field indicating whether to retrieve the item's attributes if the condition is not met.</p> </li> <li> <p> <code>Delete</code>  —   Initiates a <code>DeleteItem</code> operation to delete an existing item. This structure specifies the primary key of the item to be deleted, the name of the table where it resides, an optional condition expression that must be satisfied for the deletion to succeed, and a field indicating whether to retrieve the item's attributes if the condition is not met.</p> </li> <li> <p> <code>ConditionCheck</code>  —   Applies a condition to an item that is not being modified by the transaction. This structure specifies the primary key of the item to be checked, the name of the table where it resides, a condition expression that must be satisfied for the transaction to succeed, and a field indicating whether to retrieve the item's attributes if the condition is not met.</p> </li> </ul> <p>DynamoDB rejects the entire <code>TransactWriteItems</code> request if any of the following is true:</p> <ul> <li> <p>A condition in one of the condition expressions is not met.</p> </li> <li> <p>An ongoing operation is in the process of updating the same item.</p> </li> <li> <p>There is insufficient provisioned capacity for the transaction to be completed.</p> </li> <li> <p>An item size becomes too large (bigger than 400 KB), a local secondary index (LSI) becomes too large, or a similar validation error occurs because of changes made by the transaction.</p> </li> <li> <p>The aggregate size of the items in the transaction exceeds 4 MB.</p> </li> <li> <p>There is a user error, such as an invalid data format.</p> </li> </ul>
* [untagResource](#untagresource) - <p>Removes the association of tags from an Amazon DynamoDB resource. You can call <code>UntagResource</code> up to five times per second, per account. </p> <p>For an overview on tagging DynamoDB resources, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tagging.html">Tagging for DynamoDB</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
* [updateContinuousBackups](#updatecontinuousbackups) - <p> <code>UpdateContinuousBackups</code> enables or disables point in time recovery for the specified table. A successful <code>UpdateContinuousBackups</code> call returns the current <code>ContinuousBackupsDescription</code>. Continuous backups are <code>ENABLED</code> on all tables at table creation. If point in time recovery is enabled, <code>PointInTimeRecoveryStatus</code> will be set to ENABLED.</p> <p> Once continuous backups and point in time recovery are enabled, you can restore to any point in time within <code>EarliestRestorableDateTime</code> and <code>LatestRestorableDateTime</code>. </p> <p> <code>LatestRestorableDateTime</code> is typically 5 minutes before the current time. You can restore your table to any point in time during the last 35 days. </p>
* [updateContributorInsights](#updatecontributorinsights) - Updates the status for contributor insights for a specific table or index. CloudWatch Contributor Insights for DynamoDB graphs display the partition key and (if applicable) sort key of frequently accessed items and frequently throttled items in plaintext. If you require the use of Amazon Web Services Key Management Service (KMS) to encrypt this table’s partition key and sort key data with an Amazon Web Services managed key or customer managed key, you should not enable CloudWatch Contributor Insights for DynamoDB for this table.
* [updateGlobalTable](#updateglobaltable) - <p>Adds or removes replicas in the specified global table. The global table must already exist to be able to use this operation. Any replica to be added must be empty, have the same name as the global table, have the same key schema, have DynamoDB Streams enabled, and have the same provisioned and maximum write capacity units.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29 (Legacy)</a> of global tables. We recommend using <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> when creating new global tables, as it provides greater flexibility, higher efficiency and consumes less write capacity than 2017.11.29 (Legacy). To determine which version you are using, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.DetermineVersion.html">Determining the version</a>. To update existing global tables from version 2017.11.29 (Legacy) to version 2019.11.21 (Current), see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_upgrade.html"> Updating global tables</a>. </p> </important> <note> <p> This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29</a> of global tables. If you are using global tables <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21</a> you can use <a href="https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTable.html">DescribeTable</a> instead. </p> <p> Although you can use <code>UpdateGlobalTable</code> to add replicas and remove replicas in a single request, for simplicity we recommend that you issue separate requests for adding or removing replicas. </p> </note> <p> If global secondary indexes are specified, then the following conditions must also be met: </p> <ul> <li> <p> The global secondary indexes must have the same name. </p> </li> <li> <p> The global secondary indexes must have the same hash key and sort key (if present). </p> </li> <li> <p> The global secondary indexes must have the same provisioned and maximum write capacity units. </p> </li> </ul>
* [updateGlobalTableSettings](#updateglobaltablesettings) - <p>Updates settings for a global table.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29 (Legacy)</a> of global tables. We recommend using <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> when creating new global tables, as it provides greater flexibility, higher efficiency and consumes less write capacity than 2017.11.29 (Legacy). To determine which version you are using, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.DetermineVersion.html">Determining the version</a>. To update existing global tables from version 2017.11.29 (Legacy) to version 2019.11.21 (Current), see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_upgrade.html"> Updating global tables</a>. </p> </important>
* [updateItem](#updateitem) - <p>Edits an existing item's attributes, or adds a new item to the table if it does not already exist. You can put, delete, or add attribute values. You can also perform a conditional update on an existing item (insert a new attribute name-value pair if it doesn't exist, or replace an existing name-value pair if it has certain expected attribute values).</p> <p>You can also return the item's attribute values in the same <code>UpdateItem</code> operation using the <code>ReturnValues</code> parameter.</p>
* [updateTable](#updatetable) - <p>Modifies the provisioned throughput settings, global secondary indexes, or DynamoDB Streams settings for a given table.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> of global tables. </p> </important> <p>You can only perform one of the following operations at once:</p> <ul> <li> <p>Modify the provisioned throughput settings of the table.</p> </li> <li> <p>Remove a global secondary index from the table.</p> </li> <li> <p>Create a new global secondary index on the table. After the index begins backfilling, you can use <code>UpdateTable</code> to perform other operations.</p> </li> </ul> <p> <code>UpdateTable</code> is an asynchronous operation; while it is executing, the table status changes from <code>ACTIVE</code> to <code>UPDATING</code>. While it is <code>UPDATING</code>, you cannot issue another <code>UpdateTable</code> request. When the table returns to the <code>ACTIVE</code> state, the <code>UpdateTable</code> operation is complete.</p>
* [updateTableReplicaAutoScaling](#updatetablereplicaautoscaling) - <p>Updates auto scaling settings on your global tables at once.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> of global tables. </p> </important>
* [updateTimeToLive](#updatetimetolive) - <p>The <code>UpdateTimeToLive</code> method enables or disables Time to Live (TTL) for the specified table. A successful <code>UpdateTimeToLive</code> call returns the current <code>TimeToLiveSpecification</code>. It can take up to one hour for the change to fully process. Any additional <code>UpdateTimeToLive</code> calls for the same table during this one hour duration result in a <code>ValidationException</code>. </p> <p>TTL compares the current time in epoch time format to the time stored in the TTL attribute of an item. If the epoch time value stored in the attribute is less than the current time, the item is marked as expired and subsequently deleted.</p> <note> <p> The epoch time format is the number of seconds elapsed since 12:00:00 AM January 1, 1970 UTC. </p> </note> <p>DynamoDB deletes expired items on a best-effort basis to ensure availability of throughput for other data operations. </p> <important> <p>DynamoDB typically deletes expired items within two days of expiration. The exact duration within which an item gets deleted after expiration is specific to the nature of the workload. Items that have expired and not been deleted will still show up in reads, queries, and scans.</p> </important> <p>As items are deleted, they are removed from any local secondary index and global secondary index immediately in the same eventually consistent way as a standard delete operation.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/TTL.html">Time To Live</a> in the Amazon DynamoDB Developer Guide. </p>

## batchExecuteStatement

<p>This operation allows you to perform batch reads or writes on data stored in DynamoDB, using PartiQL. Each read statement in a <code>BatchExecuteStatement</code> must specify an equality condition on all key attributes. This enforces that each <code>SELECT</code> statement in a batch returns at most a single item.</p> <note> <p>The entire batch must consist of either read statements or write statements, you cannot mix both in one batch.</p> </note> <important> <p>A HTTP 200 response does not mean that all statements in the BatchExecuteStatement succeeded. Error details for individual statements can be found under the <a href="https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchStatementResponse.html#DDB-Type-BatchStatementResponse-Error">Error</a> field of the <code>BatchStatementResponse</code> for each statement.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchExecuteStatementRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchExecuteStatementInput;
use \OpenAPI\OpenAPI\Models\Shared\ReturnConsumedCapacityEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchStatementRequest;
use \OpenAPI\OpenAPI\Models\Shared\AttributeValue;
use \OpenAPI\OpenAPI\Models\Operations\BatchExecuteStatementXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchExecuteStatementRequest();
    $request->batchExecuteStatementInput = new BatchExecuteStatementInput();
    $request->batchExecuteStatementInput->returnConsumedCapacity = ReturnConsumedCapacityEnum::TOTAL;
    $request->batchExecuteStatementInput->statements = [
        new BatchStatementRequest(),
        new BatchStatementRequest(),
        new BatchStatementRequest(),
    ];
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'tempora';
    $request->xAmzTarget = BatchExecuteStatementXAmzTargetEnum::DYNAMO_DB20120810_BATCH_EXECUTE_STATEMENT;

    $response = $sdk->sdk->batchExecuteStatement($request);

    if ($response->batchExecuteStatementOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchGetItem

<p>The <code>BatchGetItem</code> operation returns the attributes of one or more items from one or more tables. You identify requested items by primary key.</p> <p>A single operation can retrieve up to 16 MB of data, which can contain as many as 100 items. <code>BatchGetItem</code> returns a partial result if the response size limit is exceeded, the table's provisioned throughput is exceeded, or an internal processing failure occurs. If a partial result is returned, the operation returns a value for <code>UnprocessedKeys</code>. You can use this value to retry the operation starting with the next item to get.</p> <important> <p>If you request more than 100 items, <code>BatchGetItem</code> returns a <code>ValidationException</code> with the message "Too many items requested for the BatchGetItem call."</p> </important> <p>For example, if you ask to retrieve 100 items, but each individual item is 300 KB in size, the system returns 52 items (so as not to exceed the 16 MB limit). It also returns an appropriate <code>UnprocessedKeys</code> value so you can get the next page of results. If desired, your application can include its own logic to assemble the pages of results into one dataset.</p> <p>If <i>none</i> of the items can be processed due to insufficient provisioned throughput on all of the tables in the request, then <code>BatchGetItem</code> returns a <code>ProvisionedThroughputExceededException</code>. If <i>at least one</i> of the items is successfully processed, then <code>BatchGetItem</code> completes successfully, while returning the keys of the unread items in <code>UnprocessedKeys</code>.</p> <important> <p>If DynamoDB returns any unprocessed items, you should retry the batch operation on those items. However, <i>we strongly recommend that you use an exponential backoff algorithm</i>. If you retry the batch operation immediately, the underlying read or write requests can still fail due to throttling on the individual tables. If you delay the batch operation using exponential backoff, the individual requests in the batch are much more likely to succeed.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ErrorHandling.html#BatchOperations">Batch Operations and Error Handling</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> </important> <p>By default, <code>BatchGetItem</code> performs eventually consistent reads on every table in the request. If you want strongly consistent reads instead, you can set <code>ConsistentRead</code> to <code>true</code> for any or all tables.</p> <p>In order to minimize response latency, <code>BatchGetItem</code> may retrieve items in parallel.</p> <p>When designing your application, keep in mind that DynamoDB does not return items in any particular order. To help parse the response by item, include the primary key values for the items in your request in the <code>ProjectionExpression</code> parameter.</p> <p>If a requested item does not exist, it is not returned in the result. Requests for nonexistent items consume the minimum read capacity units according to the type of read. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.html#CapacityUnitCalculations">Working with Tables</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetItemRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchGetItemInput;
use \OpenAPI\OpenAPI\Models\Shared\KeysAndAttributes;
use \OpenAPI\OpenAPI\Models\Shared\AttributeValue;
use \OpenAPI\OpenAPI\Models\Shared\ReturnConsumedCapacityEnum;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetItemXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetItemRequest();
    $request->batchGetItemInput = new BatchGetItemInput();
    $request->batchGetItemInput->requestItems = [
        'molestiae' => new KeysAndAttributes(),
        'minus' => new KeysAndAttributes(),
    ];
    $request->batchGetItemInput->returnConsumedCapacity = ReturnConsumedCapacityEnum::NONE;
    $request->requestItems = 'voluptatum';
    $request->xAmzAlgorithm = 'iusto';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'nisi';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'temporibus';
    $request->xAmzSignature = 'ab';
    $request->xAmzSignedHeaders = 'quis';
    $request->xAmzTarget = BatchGetItemXAmzTargetEnum::DYNAMO_DB20120810_BATCH_GET_ITEM;

    $response = $sdk->sdk->batchGetItem($request);

    if ($response->batchGetItemOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchWriteItem

<p>The <code>BatchWriteItem</code> operation puts or deletes multiple items in one or more tables. A single call to <code>BatchWriteItem</code> can transmit up to 16MB of data over the network, consisting of up to 25 item put or delete operations. While individual items can be up to 400 KB once stored, it's important to note that an item's representation might be greater than 400KB while being sent in DynamoDB's JSON format for the API call. For more details on this distinction, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html">Naming Rules and Data Types</a>.</p> <note> <p> <code>BatchWriteItem</code> cannot update items. If you perform a <code>BatchWriteItem</code> operation on an existing item, that item's values will be overwritten by the operation and it will appear like it was updated. To update items, we recommend you use the <code>UpdateItem</code> action.</p> </note> <p>The individual <code>PutItem</code> and <code>DeleteItem</code> operations specified in <code>BatchWriteItem</code> are atomic; however <code>BatchWriteItem</code> as a whole is not. If any requested operations fail because the table's provisioned throughput is exceeded or an internal processing failure occurs, the failed operations are returned in the <code>UnprocessedItems</code> response parameter. You can investigate and optionally resend the requests. Typically, you would call <code>BatchWriteItem</code> in a loop. Each iteration would check for unprocessed items and submit a new <code>BatchWriteItem</code> request with those unprocessed items until all items have been processed.</p> <p>If <i>none</i> of the items can be processed due to insufficient provisioned throughput on all of the tables in the request, then <code>BatchWriteItem</code> returns a <code>ProvisionedThroughputExceededException</code>.</p> <important> <p>If DynamoDB returns any unprocessed items, you should retry the batch operation on those items. However, <i>we strongly recommend that you use an exponential backoff algorithm</i>. If you retry the batch operation immediately, the underlying read or write requests can still fail due to throttling on the individual tables. If you delay the batch operation using exponential backoff, the individual requests in the batch are much more likely to succeed.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ErrorHandling.html#Programming.Errors.BatchOperations">Batch Operations and Error Handling</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> </important> <p>With <code>BatchWriteItem</code>, you can efficiently write or delete large amounts of data, such as from Amazon EMR, or copy data from another database into DynamoDB. In order to improve performance with these large-scale operations, <code>BatchWriteItem</code> does not behave in the same way as individual <code>PutItem</code> and <code>DeleteItem</code> calls would. For example, you cannot specify conditions on individual put and delete requests, and <code>BatchWriteItem</code> does not return deleted items in the response.</p> <p>If you use a programming language that supports concurrency, you can use threads to write items in parallel. Your application must include the necessary logic to manage the threads. With languages that don't support threading, you must update or delete the specified items one at a time. In both situations, <code>BatchWriteItem</code> performs the specified put and delete operations in parallel, giving you the power of the thread pool approach without having to introduce complexity into your application.</p> <p>Parallel processing reduces latency, but each specified put and delete request consumes the same number of write capacity units whether it is processed in parallel or not. Delete operations on nonexistent items consume one write capacity unit.</p> <p>If one or more of the following is true, DynamoDB rejects the entire batch write operation:</p> <ul> <li> <p>One or more tables specified in the <code>BatchWriteItem</code> request does not exist.</p> </li> <li> <p>Primary key attributes specified on an item in the request do not match those in the corresponding table's primary key schema.</p> </li> <li> <p>You try to perform multiple operations on the same item in the same <code>BatchWriteItem</code> request. For example, you cannot put and delete the same item in the same <code>BatchWriteItem</code> request. </p> </li> <li> <p> Your request contains at least two items with identical hash and range keys (which essentially is two put operations). </p> </li> <li> <p>There are more than 25 requests in the batch.</p> </li> <li> <p>Any individual item in a batch exceeds 400 KB.</p> </li> <li> <p>The total request size exceeds 16 MB.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchWriteItemRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchWriteItemInput;
use \OpenAPI\OpenAPI\Models\Shared\WriteRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AttributeValue;
use \OpenAPI\OpenAPI\Models\Shared\PutRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReturnConsumedCapacityEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReturnItemCollectionMetricsEnum;
use \OpenAPI\OpenAPI\Models\Operations\BatchWriteItemXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchWriteItemRequest();
    $request->batchWriteItemInput = new BatchWriteItemInput();
    $request->batchWriteItemInput->requestItems = [
        'deserunt' => [
            new WriteRequest(),
        ],
    ];
    $request->batchWriteItemInput->returnConsumedCapacity = ReturnConsumedCapacityEnum::TOTAL;
    $request->batchWriteItemInput->returnItemCollectionMetrics = ReturnItemCollectionMetricsEnum::NONE;
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'at';
    $request->xAmzSecurityToken = 'at';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->xAmzTarget = BatchWriteItemXAmzTargetEnum::DYNAMO_DB20120810_BATCH_WRITE_ITEM;

    $response = $sdk->sdk->batchWriteItem($request);

    if ($response->batchWriteItemOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createBackup

<p>Creates a backup for an existing table.</p> <p> Each time you create an on-demand backup, the entire table data is backed up. There is no limit to the number of on-demand backups that can be taken. </p> <p> When you create an on-demand backup, a time marker of the request is cataloged, and the backup is created asynchronously, by applying all changes until the time of the request to the last full table snapshot. Backup requests are processed instantaneously and become available for restore within minutes. </p> <p>You can call <code>CreateBackup</code> at a maximum rate of 50 times per second.</p> <p>All backups in DynamoDB work without consuming any provisioned throughput on the table.</p> <p> If you submit a backup request on 2018-12-14 at 14:25:00, the backup is guaranteed to contain all data committed to the table up to 14:24:00, and data committed after 14:26:00 will not be. The backup might contain data modifications made between 14:24:00 and 14:26:00. On-demand backup does not support causal consistency. </p> <p> Along with data, the following are also included on the backups: </p> <ul> <li> <p>Global secondary indexes (GSIs)</p> </li> <li> <p>Local secondary indexes (LSIs)</p> </li> <li> <p>Streams</p> </li> <li> <p>Provisioned read and write capacity</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateBackupRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateBackupInput;
use \OpenAPI\OpenAPI\Models\Operations\CreateBackupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateBackupRequest();
    $request->createBackupInput = new CreateBackupInput();
    $request->createBackupInput->backupName = 'quod';
    $request->createBackupInput->tableName = 'quod';
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'porro';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'officia';
    $request->xAmzTarget = CreateBackupXAmzTargetEnum::DYNAMO_DB20120810_CREATE_BACKUP;

    $response = $sdk->sdk->createBackup($request);

    if ($response->createBackupOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createGlobalTable

<p>Creates a global table from an existing table. A global table creates a replication relationship between two or more DynamoDB tables with the same table name in the provided Regions. </p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29 (Legacy)</a> of global tables. We recommend using <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> when creating new global tables, as it provides greater flexibility, higher efficiency and consumes less write capacity than 2017.11.29 (Legacy). To determine which version you are using, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.DetermineVersion.html">Determining the version</a>. To update existing global tables from version 2017.11.29 (Legacy) to version 2019.11.21 (Current), see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_upgrade.html"> Updating global tables</a>. </p> </important> <p>If you want to add a new replica table to a global table, each of the following conditions must be true:</p> <ul> <li> <p>The table must have the same primary key as all of the other replicas.</p> </li> <li> <p>The table must have the same name as all of the other replicas.</p> </li> <li> <p>The table must have DynamoDB Streams enabled, with the stream containing both the new and the old images of the item.</p> </li> <li> <p>None of the replica tables in the global table can contain any data.</p> </li> </ul> <p> If global secondary indexes are specified, then the following conditions must also be met: </p> <ul> <li> <p> The global secondary indexes must have the same name. </p> </li> <li> <p> The global secondary indexes must have the same hash key and sort key (if present). </p> </li> </ul> <p> If local secondary indexes are specified, then the following conditions must also be met: </p> <ul> <li> <p> The local secondary indexes must have the same name. </p> </li> <li> <p> The local secondary indexes must have the same hash key and sort key (if present). </p> </li> </ul> <important> <p> Write capacity settings should be set consistently across your replica tables and secondary indexes. DynamoDB strongly recommends enabling auto scaling to manage the write capacity settings for all of your global tables replicas and indexes. </p> <p> If you prefer to manage write capacity settings manually, you should provision equal replicated write capacity units to your replica tables. You should also provision equal replicated write capacity units to matching secondary indexes across your global table. </p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateGlobalTableRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateGlobalTableInput;
use \OpenAPI\OpenAPI\Models\Shared\Replica;
use \OpenAPI\OpenAPI\Models\Operations\CreateGlobalTableXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateGlobalTableRequest();
    $request->createGlobalTableInput = new CreateGlobalTableInput();
    $request->createGlobalTableInput->globalTableName = 'occaecati';
    $request->createGlobalTableInput->replicationGroup = [
        new Replica(),
    ];
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'optio';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'beatae';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->xAmzTarget = CreateGlobalTableXAmzTargetEnum::DYNAMO_DB20120810_CREATE_GLOBAL_TABLE;

    $response = $sdk->sdk->createGlobalTable($request);

    if ($response->createGlobalTableOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createTable

<p>The <code>CreateTable</code> operation adds a new table to your account. In an Amazon Web Services account, table names must be unique within each Region. That is, you can have two tables with same name if you create the tables in different Regions.</p> <p> <code>CreateTable</code> is an asynchronous operation. Upon receiving a <code>CreateTable</code> request, DynamoDB immediately returns a response with a <code>TableStatus</code> of <code>CREATING</code>. After the table is created, DynamoDB sets the <code>TableStatus</code> to <code>ACTIVE</code>. You can perform read and write operations only on an <code>ACTIVE</code> table. </p> <p>You can optionally define secondary indexes on the new table, as part of the <code>CreateTable</code> operation. If you want to create multiple tables with secondary indexes on them, you must create the tables sequentially. Only one table with secondary indexes can be in the <code>CREATING</code> state at any given time.</p> <p>You can use the <code>DescribeTable</code> action to check the table status.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateTableRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateTableInput;
use \OpenAPI\OpenAPI\Models\Shared\AttributeDefinition;
use \OpenAPI\OpenAPI\Models\Shared\ScalarAttributeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BillingModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GlobalSecondaryIndex;
use \OpenAPI\OpenAPI\Models\Shared\KeySchemaElement;
use \OpenAPI\OpenAPI\Models\Shared\KeyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Projection;
use \OpenAPI\OpenAPI\Models\Shared\ProjectionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProvisionedThroughput;
use \OpenAPI\OpenAPI\Models\Shared\LocalSecondaryIndex;
use \OpenAPI\OpenAPI\Models\Shared\SSESpecification;
use \OpenAPI\OpenAPI\Models\Shared\SSETypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\StreamSpecification;
use \OpenAPI\OpenAPI\Models\Shared\StreamViewTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TableClassEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateTableXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTableRequest();
    $request->createTableInput = new CreateTableInput();
    $request->createTableInput->attributeDefinitions = [
        new AttributeDefinition(),
        new AttributeDefinition(),
    ];
    $request->createTableInput->billingMode = BillingModeEnum::PROVISIONED;
    $request->createTableInput->deletionProtectionEnabled = false;
    $request->createTableInput->globalSecondaryIndexes = [
        new GlobalSecondaryIndex(),
        new GlobalSecondaryIndex(),
        new GlobalSecondaryIndex(),
        new GlobalSecondaryIndex(),
    ];
    $request->createTableInput->keySchema = [
        new KeySchemaElement(),
        new KeySchemaElement(),
        new KeySchemaElement(),
    ];
    $request->createTableInput->localSecondaryIndexes = [
        new LocalSecondaryIndex(),
        new LocalSecondaryIndex(),
    ];
    $request->createTableInput->provisionedThroughput = new ProvisionedThroughput();
    $request->createTableInput->provisionedThroughput->readCapacityUnits = 216550;
    $request->createTableInput->provisionedThroughput->writeCapacityUnits = 568434;
    $request->createTableInput->sseSpecification = new SSESpecification();
    $request->createTableInput->sseSpecification->enabled = false;
    $request->createTableInput->sseSpecification->kmsMasterKeyId = 'aspernatur';
    $request->createTableInput->sseSpecification->sseType = SSETypeEnum::AES256;
    $request->createTableInput->streamSpecification = new StreamSpecification();
    $request->createTableInput->streamSpecification->streamEnabled = false;
    $request->createTableInput->streamSpecification->streamViewType = StreamViewTypeEnum::OLD_IMAGE;
    $request->createTableInput->tableClass = TableClassEnum::STANDARD_INFREQUENT_ACCESS;
    $request->createTableInput->tableName = 'sed';
    $request->createTableInput->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'laboriosam';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'fuga';
    $request->xAmzSignedHeaders = 'in';
    $request->xAmzTarget = CreateTableXAmzTargetEnum::DYNAMO_DB20120810_CREATE_TABLE;

    $response = $sdk->sdk->createTable($request);

    if ($response->createTableOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteBackup

<p>Deletes an existing backup of a table.</p> <p>You can call <code>DeleteBackup</code> at a maximum rate of 10 times per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBackupRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteBackupInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBackupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteBackupRequest();
    $request->deleteBackupInput = new DeleteBackupInput();
    $request->deleteBackupInput->backupArn = 'corporis';
    $request->xAmzAlgorithm = 'iste';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->xAmzTarget = DeleteBackupXAmzTargetEnum::DYNAMO_DB20120810_DELETE_BACKUP;

    $response = $sdk->sdk->deleteBackup($request);

    if ($response->deleteBackupOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteItem

<p>Deletes a single item in a table by primary key. You can perform a conditional delete operation that deletes the item if it exists, or if it has an expected attribute value.</p> <p>In addition to deleting an item, you can also return the item's attribute values in the same operation, using the <code>ReturnValues</code> parameter.</p> <p>Unless you specify conditions, the <code>DeleteItem</code> is an idempotent operation; running it multiple times on the same item or attribute does <i>not</i> result in an error response.</p> <p>Conditional deletes are useful for deleting items only if specific conditions are met. If those conditions are met, DynamoDB performs the delete. Otherwise, the item is not deleted.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteItemRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteItemInput;
use \OpenAPI\OpenAPI\Models\Shared\ConditionalOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExpectedAttributeValue;
use \OpenAPI\OpenAPI\Models\Shared\AttributeValue;
use \OpenAPI\OpenAPI\Models\Shared\ComparisonOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReturnConsumedCapacityEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReturnItemCollectionMetricsEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReturnValueEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeleteItemXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteItemRequest();
    $request->deleteItemInput = new DeleteItemInput();
    $request->deleteItemInput->conditionExpression = 'est';
    $request->deleteItemInput->conditionalOperator = ConditionalOperatorEnum::OR;
    $request->deleteItemInput->expected = [
        'dolores' => new ExpectedAttributeValue(),
        'dolorem' => new ExpectedAttributeValue(),
        'corporis' => new ExpectedAttributeValue(),
    ];
    $request->deleteItemInput->expressionAttributeNames = [
        'nobis' => 'enim',
    ];
    $request->deleteItemInput->expressionAttributeValues = [
        'nemo' => new AttributeValue(),
        'minima' => new AttributeValue(),
        'excepturi' => new AttributeValue(),
    ];
    $request->deleteItemInput->key = [
        'iure' => new AttributeValue(),
    ];
    $request->deleteItemInput->returnConsumedCapacity = ReturnConsumedCapacityEnum::TOTAL;
    $request->deleteItemInput->returnItemCollectionMetrics = ReturnItemCollectionMetricsEnum::NONE;
    $request->deleteItemInput->returnValues = ReturnValueEnum::UPDATED_NEW;
    $request->deleteItemInput->tableName = 'architecto';
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'culpa';
    $request->xAmzDate = 'consequuntur';
    $request->xAmzSecurityToken = 'repellat';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'occaecati';
    $request->xAmzTarget = DeleteItemXAmzTargetEnum::DYNAMO_DB20120810_DELETE_ITEM;

    $response = $sdk->sdk->deleteItem($request);

    if ($response->deleteItemOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTable

<p>The <code>DeleteTable</code> operation deletes a table and all of its items. After a <code>DeleteTable</code> request, the specified table is in the <code>DELETING</code> state until DynamoDB completes the deletion. If the table is in the <code>ACTIVE</code> state, you can delete it. If a table is in <code>CREATING</code> or <code>UPDATING</code> states, then DynamoDB returns a <code>ResourceInUseException</code>. If the specified table does not exist, DynamoDB returns a <code>ResourceNotFoundException</code>. If table is already in the <code>DELETING</code> state, no error is returned. </p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> of global tables. </p> </important> <note> <p>DynamoDB might continue to accept data read and write operations, such as <code>GetItem</code> and <code>PutItem</code>, on a table in the <code>DELETING</code> state until the table deletion is complete.</p> </note> <p>When you delete a table, any indexes on that table are also deleted.</p> <p>If you have DynamoDB Streams enabled on the table, then the corresponding stream on that table goes into the <code>DISABLED</code> state, and the stream is automatically deleted after 24 hours.</p> <p>Use the <code>DescribeTable</code> action to check the status of the table. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTableRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteTableInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTableXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTableRequest();
    $request->deleteTableInput = new DeleteTableInput();
    $request->deleteTableInput->tableName = 'numquam';
    $request->xAmzAlgorithm = 'commodi';
    $request->xAmzContentSha256 = 'quam';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'velit';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'quia';
    $request->xAmzSignedHeaders = 'quis';
    $request->xAmzTarget = DeleteTableXAmzTargetEnum::DYNAMO_DB20120810_DELETE_TABLE;

    $response = $sdk->sdk->deleteTable($request);

    if ($response->deleteTableOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeBackup

<p>Describes an existing backup of a table.</p> <p>You can call <code>DescribeBackup</code> at a maximum rate of 10 times per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeBackupRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeBackupInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeBackupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeBackupRequest();
    $request->describeBackupInput = new DescribeBackupInput();
    $request->describeBackupInput->backupArn = 'vitae';
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'animi';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'odit';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'sequi';
    $request->xAmzSignedHeaders = 'tenetur';
    $request->xAmzTarget = DescribeBackupXAmzTargetEnum::DYNAMO_DB20120810_DESCRIBE_BACKUP;

    $response = $sdk->sdk->describeBackup($request);

    if ($response->describeBackupOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeContinuousBackups

<p>Checks the status of continuous backups and point in time recovery on the specified table. Continuous backups are <code>ENABLED</code> on all tables at table creation. If point in time recovery is enabled, <code>PointInTimeRecoveryStatus</code> will be set to ENABLED.</p> <p> After continuous backups and point in time recovery are enabled, you can restore to any point in time within <code>EarliestRestorableDateTime</code> and <code>LatestRestorableDateTime</code>. </p> <p> <code>LatestRestorableDateTime</code> is typically 5 minutes before the current time. You can restore your table to any point in time during the last 35 days. </p> <p>You can call <code>DescribeContinuousBackups</code> at a maximum rate of 10 times per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeContinuousBackupsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeContinuousBackupsInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeContinuousBackupsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeContinuousBackupsRequest();
    $request->describeContinuousBackupsInput = new DescribeContinuousBackupsInput();
    $request->describeContinuousBackupsInput->tableName = 'ipsam';
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'possimus';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'temporibus';
    $request->xAmzSignedHeaders = 'laborum';
    $request->xAmzTarget = DescribeContinuousBackupsXAmzTargetEnum::DYNAMO_DB20120810_DESCRIBE_CONTINUOUS_BACKUPS;

    $response = $sdk->sdk->describeContinuousBackups($request);

    if ($response->describeContinuousBackupsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeContributorInsights

Returns information about contributor insights for a given table or global secondary index.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeContributorInsightsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeContributorInsightsInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeContributorInsightsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeContributorInsightsRequest();
    $request->describeContributorInsightsInput = new DescribeContributorInsightsInput();
    $request->describeContributorInsightsInput->indexName = 'quasi';
    $request->describeContributorInsightsInput->tableName = 'reiciendis';
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'omnis';
    $request->xAmzTarget = DescribeContributorInsightsXAmzTargetEnum::DYNAMO_DB20120810_DESCRIBE_CONTRIBUTOR_INSIGHTS;

    $response = $sdk->sdk->describeContributorInsights($request);

    if ($response->describeContributorInsightsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeEndpoints

Returns the regional endpoint information. This action must be included in your VPC endpoint policies, or access to the DescribeEndpoints API will be denied. For more information on policy permissions, please see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/inter-network-traffic-privacy.html#inter-network-traffic-DescribeEndpoints">Internetwork traffic privacy</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEndpointsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEndpointsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeEndpointsRequest();
    $request->requestBody = [
        'cum' => 'perferendis',
        'doloremque' => 'reprehenderit',
    ];
    $request->xAmzAlgorithm = 'ut';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'dolore';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'dicta';
    $request->xAmzTarget = DescribeEndpointsXAmzTargetEnum::DYNAMO_DB20120810_DESCRIBE_ENDPOINTS;

    $response = $sdk->sdk->describeEndpoints($request);

    if ($response->describeEndpointsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeExport

Describes an existing table export.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeExportRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeExportInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeExportXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeExportRequest();
    $request->describeExportInput = new DescribeExportInput();
    $request->describeExportInput->exportArn = 'harum';
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'commodi';
    $request->xAmzDate = 'repudiandae';
    $request->xAmzSecurityToken = 'quae';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'quidem';
    $request->xAmzTarget = DescribeExportXAmzTargetEnum::DYNAMO_DB20120810_DESCRIBE_EXPORT;

    $response = $sdk->sdk->describeExport($request);

    if ($response->describeExportOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeGlobalTable

<p>Returns information about the specified global table.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29 (Legacy)</a> of global tables. We recommend using <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> when creating new global tables, as it provides greater flexibility, higher efficiency and consumes less write capacity than 2017.11.29 (Legacy). To determine which version you are using, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.DetermineVersion.html">Determining the version</a>. To update existing global tables from version 2017.11.29 (Legacy) to version 2019.11.21 (Current), see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_upgrade.html"> Updating global tables</a>. </p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeGlobalTableRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeGlobalTableInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeGlobalTableXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeGlobalTableRequest();
    $request->describeGlobalTableInput = new DescribeGlobalTableInput();
    $request->describeGlobalTableInput->globalTableName = 'molestias';
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'modi';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'rem';
    $request->xAmzSignature = 'voluptates';
    $request->xAmzSignedHeaders = 'quasi';
    $request->xAmzTarget = DescribeGlobalTableXAmzTargetEnum::DYNAMO_DB20120810_DESCRIBE_GLOBAL_TABLE;

    $response = $sdk->sdk->describeGlobalTable($request);

    if ($response->describeGlobalTableOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeGlobalTableSettings

<p>Describes Region-specific settings for a global table.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29 (Legacy)</a> of global tables. We recommend using <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> when creating new global tables, as it provides greater flexibility, higher efficiency and consumes less write capacity than 2017.11.29 (Legacy). To determine which version you are using, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.DetermineVersion.html">Determining the version</a>. To update existing global tables from version 2017.11.29 (Legacy) to version 2019.11.21 (Current), see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_upgrade.html"> Updating global tables</a>. </p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeGlobalTableSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeGlobalTableSettingsInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeGlobalTableSettingsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeGlobalTableSettingsRequest();
    $request->describeGlobalTableSettingsInput = new DescribeGlobalTableSettingsInput();
    $request->describeGlobalTableSettingsInput->globalTableName = 'repudiandae';
    $request->xAmzAlgorithm = 'sint';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'itaque';
    $request->xAmzDate = 'incidunt';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'consequatur';
    $request->xAmzSignedHeaders = 'est';
    $request->xAmzTarget = DescribeGlobalTableSettingsXAmzTargetEnum::DYNAMO_DB20120810_DESCRIBE_GLOBAL_TABLE_SETTINGS;

    $response = $sdk->sdk->describeGlobalTableSettings($request);

    if ($response->describeGlobalTableSettingsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeImport

 Represents the properties of the import. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeImportRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeImportInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeImportXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeImportRequest();
    $request->describeImportInput = new DescribeImportInput();
    $request->describeImportInput->importArn = 'quibusdam';
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'qui';
    $request->xAmzTarget = DescribeImportXAmzTargetEnum::DYNAMO_DB20120810_DESCRIBE_IMPORT;

    $response = $sdk->sdk->describeImport($request);

    if ($response->describeImportOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeKinesisStreamingDestination

Returns information about the status of Kinesis streaming.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeKinesisStreamingDestinationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeKinesisStreamingDestinationInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeKinesisStreamingDestinationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeKinesisStreamingDestinationRequest();
    $request->describeKinesisStreamingDestinationInput = new DescribeKinesisStreamingDestinationInput();
    $request->describeKinesisStreamingDestinationInput->tableName = 'aliquid';
    $request->xAmzAlgorithm = 'cupiditate';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'magni';
    $request->xAmzSecurityToken = 'assumenda';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'alias';
    $request->xAmzTarget = DescribeKinesisStreamingDestinationXAmzTargetEnum::DYNAMO_DB20120810_DESCRIBE_KINESIS_STREAMING_DESTINATION;

    $response = $sdk->sdk->describeKinesisStreamingDestination($request);

    if ($response->describeKinesisStreamingDestinationOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeLimits

<p>Returns the current provisioned-capacity quotas for your Amazon Web Services account in a Region, both for the Region as a whole and for any one DynamoDB table that you create there.</p> <p>When you establish an Amazon Web Services account, the account has initial quotas on the maximum read capacity units and write capacity units that you can provision across all of your DynamoDB tables in a given Region. Also, there are per-table quotas that apply when you create a table there. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Service, Account, and Table Quotas</a> page in the <i>Amazon DynamoDB Developer Guide</i>.</p> <p>Although you can increase these quotas by filing a case at <a href="https://console.aws.amazon.com/support/home#/">Amazon Web Services Support Center</a>, obtaining the increase is not instantaneous. The <code>DescribeLimits</code> action lets you write code to compare the capacity you are currently using to those quotas imposed by your account so that you have enough time to apply for an increase before you hit a quota.</p> <p>For example, you could use one of the Amazon Web Services SDKs to do the following:</p> <ol> <li> <p>Call <code>DescribeLimits</code> for a particular Region to obtain your current account quotas on provisioned capacity there.</p> </li> <li> <p>Create a variable to hold the aggregate read capacity units provisioned for all your tables in that Region, and one to hold the aggregate write capacity units. Zero them both.</p> </li> <li> <p>Call <code>ListTables</code> to obtain a list of all your DynamoDB tables.</p> </li> <li> <p>For each table name listed by <code>ListTables</code>, do the following:</p> <ul> <li> <p>Call <code>DescribeTable</code> with the table name.</p> </li> <li> <p>Use the data returned by <code>DescribeTable</code> to add the read capacity units and write capacity units provisioned for the table itself to your variables.</p> </li> <li> <p>If the table has one or more global secondary indexes (GSIs), loop over these GSIs and add their provisioned capacity values to your variables as well.</p> </li> </ul> </li> <li> <p>Report the account quotas for that Region returned by <code>DescribeLimits</code>, along with the total current provisioned capacity levels you have calculated.</p> </li> </ol> <p>This will let you see whether you are getting close to your account-level quotas.</p> <p>The per-table quotas apply only when you are creating a new table. They restrict the sum of the provisioned capacity of the new table itself and all its global secondary indexes.</p> <p>For existing tables and their GSIs, DynamoDB doesn't let you increase provisioned capacity extremely rapidly, but the only quota that applies is that the aggregate provisioned capacity over all your tables and GSIs cannot exceed either of the per-account quotas.</p> <note> <p> <code>DescribeLimits</code> should only be called periodically. You can expect throttling errors if you call it more than once in a minute.</p> </note> <p>The <code>DescribeLimits</code> Request element has no content.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeLimitsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeLimitsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeLimitsRequest();
    $request->requestBody = [
        'dolorum' => 'excepturi',
    ];
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'tempore';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'eum';
    $request->xAmzSignedHeaders = 'non';
    $request->xAmzTarget = DescribeLimitsXAmzTargetEnum::DYNAMO_DB20120810_DESCRIBE_LIMITS;

    $response = $sdk->sdk->describeLimits($request);

    if ($response->describeLimitsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeTable

<p>Returns information about the table, including the current status of the table, when it was created, the primary key schema, and any indexes on the table.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> of global tables. </p> </important> <note> <p>If you issue a <code>DescribeTable</code> request immediately after a <code>CreateTable</code> request, DynamoDB might return a <code>ResourceNotFoundException</code>. This is because <code>DescribeTable</code> uses an eventually consistent query, and the metadata for your table might not be available at that moment. Wait for a few seconds, and then try the <code>DescribeTable</code> request again.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTableRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeTableInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTableXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeTableRequest();
    $request->describeTableInput = new DescribeTableInput();
    $request->describeTableInput->tableName = 'eligendi';
    $request->xAmzAlgorithm = 'sint';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'necessitatibus';
    $request->xAmzSecurityToken = 'sint';
    $request->xAmzSignature = 'officia';
    $request->xAmzSignedHeaders = 'dolor';
    $request->xAmzTarget = DescribeTableXAmzTargetEnum::DYNAMO_DB20120810_DESCRIBE_TABLE;

    $response = $sdk->sdk->describeTable($request);

    if ($response->describeTableOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeTableReplicaAutoScaling

<p>Describes auto scaling settings across replicas of the global table at once.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> of global tables.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTableReplicaAutoScalingRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeTableReplicaAutoScalingInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTableReplicaAutoScalingXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeTableReplicaAutoScalingRequest();
    $request->describeTableReplicaAutoScalingInput = new DescribeTableReplicaAutoScalingInput();
    $request->describeTableReplicaAutoScalingInput->tableName = 'debitis';
    $request->xAmzAlgorithm = 'a';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'rerum';
    $request->xAmzTarget = DescribeTableReplicaAutoScalingXAmzTargetEnum::DYNAMO_DB20120810_DESCRIBE_TABLE_REPLICA_AUTO_SCALING;

    $response = $sdk->sdk->describeTableReplicaAutoScaling($request);

    if ($response->describeTableReplicaAutoScalingOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeTimeToLive

Gives a description of the Time to Live (TTL) status on the specified table. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTimeToLiveRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeTimeToLiveInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTimeToLiveXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeTimeToLiveRequest();
    $request->describeTimeToLiveInput = new DescribeTimeToLiveInput();
    $request->describeTimeToLiveInput->tableName = 'dicta';
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'cumque';
    $request->xAmzCredential = 'facere';
    $request->xAmzDate = 'ea';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->xAmzTarget = DescribeTimeToLiveXAmzTargetEnum::DYNAMO_DB20120810_DESCRIBE_TIME_TO_LIVE;

    $response = $sdk->sdk->describeTimeToLive($request);

    if ($response->describeTimeToLiveOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disableKinesisStreamingDestination

Stops replication from the DynamoDB table to the Kinesis data stream. This is done without deleting either of the resources.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisableKinesisStreamingDestinationRequest;
use \OpenAPI\OpenAPI\Models\Shared\KinesisStreamingDestinationInput;
use \OpenAPI\OpenAPI\Models\Operations\DisableKinesisStreamingDestinationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisableKinesisStreamingDestinationRequest();
    $request->kinesisStreamingDestinationInput = new KinesisStreamingDestinationInput();
    $request->kinesisStreamingDestinationInput->streamArn = 'non';
    $request->kinesisStreamingDestinationInput->tableName = 'occaecati';
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'id';
    $request->xAmzTarget = DisableKinesisStreamingDestinationXAmzTargetEnum::DYNAMO_DB20120810_DISABLE_KINESIS_STREAMING_DESTINATION;

    $response = $sdk->sdk->disableKinesisStreamingDestination($request);

    if ($response->kinesisStreamingDestinationOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enableKinesisStreamingDestination

Starts table data replication to the specified Kinesis data stream at a timestamp chosen during the enable workflow. If this operation doesn't return results immediately, use DescribeKinesisStreamingDestination to check if streaming to the Kinesis data stream is ACTIVE.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\EnableKinesisStreamingDestinationRequest;
use \OpenAPI\OpenAPI\Models\Shared\KinesisStreamingDestinationInput;
use \OpenAPI\OpenAPI\Models\Operations\EnableKinesisStreamingDestinationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnableKinesisStreamingDestinationRequest();
    $request->kinesisStreamingDestinationInput = new KinesisStreamingDestinationInput();
    $request->kinesisStreamingDestinationInput->streamArn = 'blanditiis';
    $request->kinesisStreamingDestinationInput->tableName = 'deleniti';
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'nisi';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'omnis';
    $request->xAmzTarget = EnableKinesisStreamingDestinationXAmzTargetEnum::DYNAMO_DB20120810_ENABLE_KINESIS_STREAMING_DESTINATION;

    $response = $sdk->sdk->enableKinesisStreamingDestination($request);

    if ($response->kinesisStreamingDestinationOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## executeStatement

<p>This operation allows you to perform reads and singleton writes on data stored in DynamoDB, using PartiQL.</p> <p>For PartiQL reads (<code>SELECT</code> statement), if the total number of processed items exceeds the maximum dataset size limit of 1 MB, the read stops and results are returned to the user as a <code>LastEvaluatedKey</code> value to continue the read in a subsequent operation. If the filter criteria in <code>WHERE</code> clause does not match any data, the read will return an empty result set.</p> <p>A single <code>SELECT</code> statement response can return up to the maximum number of items (if using the Limit parameter) or a maximum of 1 MB of data (and then apply any filtering to the results using <code>WHERE</code> clause). If <code>LastEvaluatedKey</code> is present in the response, you need to paginate the result set. If <code>NextToken</code> is present, you need to paginate the result set and include <code>NextToken</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ExecuteStatementRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExecuteStatementInput;
use \OpenAPI\OpenAPI\Models\Shared\AttributeValue;
use \OpenAPI\OpenAPI\Models\Shared\ReturnConsumedCapacityEnum;
use \OpenAPI\OpenAPI\Models\Operations\ExecuteStatementXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExecuteStatementRequest();
    $request->executeStatementInput = new ExecuteStatementInput();
    $request->executeStatementInput->consistentRead = false;
    $request->executeStatementInput->limit = 474867;
    $request->executeStatementInput->nextToken = 'perferendis';
    $request->executeStatementInput->parameters = [
        new AttributeValue(),
        new AttributeValue(),
    ];
    $request->executeStatementInput->returnConsumedCapacity = ReturnConsumedCapacityEnum::INDEXES;
    $request->executeStatementInput->statement = 'distinctio';
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'eum';
    $request->xAmzTarget = ExecuteStatementXAmzTargetEnum::DYNAMO_DB20120810_EXECUTE_STATEMENT;

    $response = $sdk->sdk->executeStatement($request);

    if ($response->executeStatementOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## executeTransaction

<p>This operation allows you to perform transactional reads or writes on data stored in DynamoDB, using PartiQL.</p> <note> <p>The entire transaction must consist of either read statements or write statements, you cannot mix both in one transaction. The EXISTS function is an exception and can be used to check the condition of specific attributes of the item in a similar manner to <code>ConditionCheck</code> in the <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/transaction-apis.html#transaction-apis-txwriteitems">TransactWriteItems</a> API.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ExecuteTransactionRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExecuteTransactionInput;
use \OpenAPI\OpenAPI\Models\Shared\ReturnConsumedCapacityEnum;
use \OpenAPI\OpenAPI\Models\Shared\ParameterizedStatement;
use \OpenAPI\OpenAPI\Models\Shared\AttributeValue;
use \OpenAPI\OpenAPI\Models\Operations\ExecuteTransactionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExecuteTransactionRequest();
    $request->executeTransactionInput = new ExecuteTransactionInput();
    $request->executeTransactionInput->clientRequestToken = 'vero';
    $request->executeTransactionInput->returnConsumedCapacity = ReturnConsumedCapacityEnum::INDEXES;
    $request->executeTransactionInput->transactStatements = [
        new ParameterizedStatement(),
    ];
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'et';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'ullam';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'quos';
    $request->xAmzSignedHeaders = 'sint';
    $request->xAmzTarget = ExecuteTransactionXAmzTargetEnum::DYNAMO_DB20120810_EXECUTE_TRANSACTION;

    $response = $sdk->sdk->executeTransaction($request);

    if ($response->executeTransactionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportTableToPointInTime

Exports table data to an S3 bucket. The table must have point in time recovery enabled, and you can export data from any time within the point in time recovery window.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ExportTableToPointInTimeRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExportTableToPointInTimeInput;
use \OpenAPI\OpenAPI\Models\Shared\ExportFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\S3SseAlgorithmEnum;
use \OpenAPI\OpenAPI\Models\Operations\ExportTableToPointInTimeXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportTableToPointInTimeRequest();
    $request->exportTableToPointInTimeInput = new ExportTableToPointInTimeInput();
    $request->exportTableToPointInTimeInput->clientToken = 'accusantium';
    $request->exportTableToPointInTimeInput->exportFormat = ExportFormatEnum::ION;
    $request->exportTableToPointInTimeInput->exportTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-01-16T22:43:33.071Z');
    $request->exportTableToPointInTimeInput->s3Bucket = 'ad';
    $request->exportTableToPointInTimeInput->s3BucketOwner = 'eum';
    $request->exportTableToPointInTimeInput->s3Prefix = 'dolor';
    $request->exportTableToPointInTimeInput->s3SseAlgorithm = S3SseAlgorithmEnum::KMS;
    $request->exportTableToPointInTimeInput->s3SseKmsKeyId = 'odit';
    $request->exportTableToPointInTimeInput->tableArn = 'nemo';
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'eius';
    $request->xAmzSignature = 'maxime';
    $request->xAmzSignedHeaders = 'deleniti';
    $request->xAmzTarget = ExportTableToPointInTimeXAmzTargetEnum::DYNAMO_DB20120810_EXPORT_TABLE_TO_POINT_IN_TIME;

    $response = $sdk->sdk->exportTableToPointInTime($request);

    if ($response->exportTableToPointInTimeOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getItem

<p>The <code>GetItem</code> operation returns a set of attributes for the item with the given primary key. If there is no matching item, <code>GetItem</code> does not return any data and there will be no <code>Item</code> element in the response.</p> <p> <code>GetItem</code> provides an eventually consistent read by default. If your application requires a strongly consistent read, set <code>ConsistentRead</code> to <code>true</code>. Although a strongly consistent read might take more time than an eventually consistent read, it always returns the last updated value.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetItemRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetItemInput;
use \OpenAPI\OpenAPI\Models\Shared\AttributeValue;
use \OpenAPI\OpenAPI\Models\Shared\ReturnConsumedCapacityEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetItemXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetItemRequest();
    $request->getItemInput = new GetItemInput();
    $request->getItemInput->attributesToGet = [
        'in',
        'architecto',
        'architecto',
    ];
    $request->getItemInput->consistentRead = false;
    $request->getItemInput->expressionAttributeNames = [
        'ullam' => 'expedita',
        'nihil' => 'repellat',
        'quibusdam' => 'sed',
        'saepe' => 'pariatur',
    ];
    $request->getItemInput->key = [
        'consequuntur' => new AttributeValue(),
    ];
    $request->getItemInput->projectionExpression = 'praesentium';
    $request->getItemInput->returnConsumedCapacity = ReturnConsumedCapacityEnum::TOTAL;
    $request->getItemInput->tableName = 'magni';
    $request->xAmzAlgorithm = 'sunt';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'maxime';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->xAmzTarget = GetItemXAmzTargetEnum::DYNAMO_DB20120810_GET_ITEM;

    $response = $sdk->sdk->getItem($request);

    if ($response->getItemOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importTable

 Imports table data from an S3 bucket. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ImportTableRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImportTableInput;
use \OpenAPI\OpenAPI\Models\Shared\InputCompressionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InputFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\InputFormatOptions;
use \OpenAPI\OpenAPI\Models\Shared\CsvOptions;
use \OpenAPI\OpenAPI\Models\Shared\S3BucketSource;
use \OpenAPI\OpenAPI\Models\Shared\TableCreationParameters;
use \OpenAPI\OpenAPI\Models\Shared\AttributeDefinition;
use \OpenAPI\OpenAPI\Models\Shared\ScalarAttributeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BillingModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GlobalSecondaryIndex;
use \OpenAPI\OpenAPI\Models\Shared\KeySchemaElement;
use \OpenAPI\OpenAPI\Models\Shared\KeyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Projection;
use \OpenAPI\OpenAPI\Models\Shared\ProjectionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProvisionedThroughput;
use \OpenAPI\OpenAPI\Models\Shared\SSESpecification;
use \OpenAPI\OpenAPI\Models\Shared\SSETypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ImportTableXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportTableRequest();
    $request->importTableInput = new ImportTableInput();
    $request->importTableInput->clientToken = 'odit';
    $request->importTableInput->inputCompressionType = InputCompressionTypeEnum::ZSTD;
    $request->importTableInput->inputFormat = InputFormatEnum::DYNAMODB_JSON;
    $request->importTableInput->inputFormatOptions = new InputFormatOptions();
    $request->importTableInput->inputFormatOptions->csv = new CsvOptions();
    $request->importTableInput->inputFormatOptions->csv->delimiter = 'ab';
    $request->importTableInput->inputFormatOptions->csv->headerList = [
        'quidem',
        'ipsam',
        'voluptate',
        'autem',
    ];
    $request->importTableInput->s3BucketSource = new S3BucketSource();
    $request->importTableInput->s3BucketSource->s3Bucket = 'nam';
    $request->importTableInput->s3BucketSource->s3BucketOwner = 'eaque';
    $request->importTableInput->s3BucketSource->s3KeyPrefix = 'pariatur';
    $request->importTableInput->tableCreationParameters = new TableCreationParameters();
    $request->importTableInput->tableCreationParameters->attributeDefinitions = [
        new AttributeDefinition(),
        new AttributeDefinition(),
    ];
    $request->importTableInput->tableCreationParameters->billingMode = BillingModeEnum::PAY_PER_REQUEST;
    $request->importTableInput->tableCreationParameters->globalSecondaryIndexes = [
        new GlobalSecondaryIndex(),
    ];
    $request->importTableInput->tableCreationParameters->keySchema = [
        new KeySchemaElement(),
        new KeySchemaElement(),
        new KeySchemaElement(),
        new KeySchemaElement(),
    ];
    $request->importTableInput->tableCreationParameters->provisionedThroughput = new ProvisionedThroughput();
    $request->importTableInput->tableCreationParameters->provisionedThroughput->readCapacityUnits = 230742;
    $request->importTableInput->tableCreationParameters->provisionedThroughput->writeCapacityUnits = 11714;
    $request->importTableInput->tableCreationParameters->sseSpecification = new SSESpecification();
    $request->importTableInput->tableCreationParameters->sseSpecification->enabled = false;
    $request->importTableInput->tableCreationParameters->sseSpecification->kmsMasterKeyId = 'cumque';
    $request->importTableInput->tableCreationParameters->sseSpecification->sseType = SSETypeEnum::AES256;
    $request->importTableInput->tableCreationParameters->tableName = 'hic';
    $request->xAmzAlgorithm = 'libero';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'dolores';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'eaque';
    $request->xAmzTarget = ImportTableXAmzTargetEnum::DYNAMO_DB20120810_IMPORT_TABLE;

    $response = $sdk->sdk->importTable($request);

    if ($response->importTableOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listBackups

<p>List backups associated with an Amazon Web Services account. To list backups for a given table, specify <code>TableName</code>. <code>ListBackups</code> returns a paginated list of results with at most 1 MB worth of items in a page. You can also specify a maximum number of entries to be returned in a page.</p> <p>In the request, start time is inclusive, but end time is exclusive. Note that these boundaries are for the time at which the original backup was requested.</p> <p>You can call <code>ListBackups</code> a maximum of five times per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListBackupsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListBackupsInput;
use \OpenAPI\OpenAPI\Models\Shared\BackupTypeFilterEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListBackupsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListBackupsRequest();
    $request->listBackupsInput = new ListBackupsInput();
    $request->listBackupsInput->backupType = BackupTypeFilterEnum::SYSTEM;
    $request->listBackupsInput->exclusiveStartBackupArn = 'nesciunt';
    $request->listBackupsInput->limit = 179490;
    $request->listBackupsInput->tableName = 'perferendis';
    $request->listBackupsInput->timeRangeLowerBound = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-17T07:12:29.048Z');
    $request->listBackupsInput->timeRangeUpperBound = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-11T06:25:10.430Z');
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'nostrum';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'perspiciatis';
    $request->xAmzTarget = ListBackupsXAmzTargetEnum::DYNAMO_DB20120810_LIST_BACKUPS;

    $response = $sdk->sdk->listBackups($request);

    if ($response->listBackupsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listContributorInsights

Returns a list of ContributorInsightsSummary for a table and all its global secondary indexes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListContributorInsightsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListContributorInsightsInput;
use \OpenAPI\OpenAPI\Models\Operations\ListContributorInsightsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListContributorInsightsRequest();
    $request->listContributorInsightsInput = new ListContributorInsightsInput();
    $request->listContributorInsightsInput->maxResults = 31838;
    $request->listContributorInsightsInput->nextToken = 'porro';
    $request->listContributorInsightsInput->tableName = 'consequuntur';
    $request->maxResults = 'blanditiis';
    $request->nextToken = 'error';
    $request->xAmzAlgorithm = 'eaque';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'rerum';
    $request->xAmzDate = 'adipisci';
    $request->xAmzSecurityToken = 'asperiores';
    $request->xAmzSignature = 'earum';
    $request->xAmzSignedHeaders = 'modi';
    $request->xAmzTarget = ListContributorInsightsXAmzTargetEnum::DYNAMO_DB20120810_LIST_CONTRIBUTOR_INSIGHTS;

    $response = $sdk->sdk->listContributorInsights($request);

    if ($response->listContributorInsightsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listExports

Lists completed exports within the past 90 days.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListExportsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListExportsInput;
use \OpenAPI\OpenAPI\Models\Operations\ListExportsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListExportsRequest();
    $request->listExportsInput = new ListExportsInput();
    $request->listExportsInput->maxResults = 613966;
    $request->listExportsInput->nextToken = 'dolorum';
    $request->listExportsInput->tableArn = 'deleniti';
    $request->maxResults = 'pariatur';
    $request->nextToken = 'provident';
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'libero';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'quaerat';
    $request->xAmzSecurityToken = 'quos';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'dolorem';
    $request->xAmzTarget = ListExportsXAmzTargetEnum::DYNAMO_DB20120810_LIST_EXPORTS;

    $response = $sdk->sdk->listExports($request);

    if ($response->listExportsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listGlobalTables

<p>Lists all global tables that have a replica in the specified Region.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29 (Legacy)</a> of global tables. We recommend using <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> when creating new global tables, as it provides greater flexibility, higher efficiency and consumes less write capacity than 2017.11.29 (Legacy). To determine which version you are using, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.DetermineVersion.html">Determining the version</a>. To update existing global tables from version 2017.11.29 (Legacy) to version 2019.11.21 (Current), see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_upgrade.html"> Updating global tables</a>. </p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListGlobalTablesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListGlobalTablesInput;
use \OpenAPI\OpenAPI\Models\Operations\ListGlobalTablesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListGlobalTablesRequest();
    $request->listGlobalTablesInput = new ListGlobalTablesInput();
    $request->listGlobalTablesInput->exclusiveStartGlobalTableName = 'dolorem';
    $request->listGlobalTablesInput->limit = 222443;
    $request->listGlobalTablesInput->regionName = 'qui';
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->xAmzTarget = ListGlobalTablesXAmzTargetEnum::DYNAMO_DB20120810_LIST_GLOBAL_TABLES;

    $response = $sdk->sdk->listGlobalTables($request);

    if ($response->listGlobalTablesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listImports

 Lists completed imports within the past 90 days. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListImportsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListImportsInput;
use \OpenAPI\OpenAPI\Models\Operations\ListImportsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListImportsRequest();
    $request->listImportsInput = new ListImportsInput();
    $request->listImportsInput->nextToken = 'amet';
    $request->listImportsInput->pageSize = 680545;
    $request->listImportsInput->tableArn = 'numquam';
    $request->nextToken = 'veritatis';
    $request->pageSize = 'ipsa';
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'odio';
    $request->xAmzDate = 'quaerat';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'voluptatibus';
    $request->xAmzTarget = ListImportsXAmzTargetEnum::DYNAMO_DB20120810_LIST_IMPORTS;

    $response = $sdk->sdk->listImports($request);

    if ($response->listImportsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTables

Returns an array of table names associated with the current account and endpoint. The output from <code>ListTables</code> is paginated, with each page returning a maximum of 100 table names.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTablesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTablesInput;
use \OpenAPI\OpenAPI\Models\Operations\ListTablesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTablesRequest();
    $request->exclusiveStartTableName = 'voluptas';
    $request->limit = 'natus';
    $request->listTablesInput = new ListTablesInput();
    $request->listTablesInput->exclusiveStartTableName = 'eos';
    $request->listTablesInput->limit = 542499;
    $request->xAmzAlgorithm = 'sit';
    $request->xAmzContentSha256 = 'fugiat';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'soluta';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'voluptate';
    $request->xAmzTarget = ListTablesXAmzTargetEnum::DYNAMO_DB20120810_LIST_TABLES;

    $response = $sdk->sdk->listTables($request);

    if ($response->listTablesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsOfResource

<p>List all tags on an Amazon DynamoDB resource. You can call ListTagsOfResource up to 10 times per second, per account.</p> <p>For an overview on tagging DynamoDB resources, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tagging.html">Tagging for DynamoDB</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsOfResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTagsOfResourceInput;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsOfResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsOfResourceRequest();
    $request->listTagsOfResourceInput = new ListTagsOfResourceInput();
    $request->listTagsOfResourceInput->nextToken = 'dolorum';
    $request->listTagsOfResourceInput->resourceArn = 'deleniti';
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'necessitatibus';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'asperiores';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'voluptate';
    $request->xAmzTarget = ListTagsOfResourceXAmzTargetEnum::DYNAMO_DB20120810_LIST_TAGS_OF_RESOURCE;

    $response = $sdk->sdk->listTagsOfResource($request);

    if ($response->listTagsOfResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putItem

<p>Creates a new item, or replaces an old item with a new item. If an item that has the same primary key as the new item already exists in the specified table, the new item completely replaces the existing item. You can perform a conditional put operation (add a new item if one with the specified primary key doesn't exist), or replace an existing item if it has certain attribute values. You can return the item's attribute values in the same operation, using the <code>ReturnValues</code> parameter.</p> <p>When you add an item, the primary key attributes are the only required attributes. </p> <p>Empty String and Binary attribute values are allowed. Attribute values of type String and Binary must have a length greater than zero if the attribute is used as a key attribute for a table or index. Set type attributes cannot be empty. </p> <p>Invalid Requests with empty values will be rejected with a <code>ValidationException</code> exception.</p> <note> <p>To prevent a new item from replacing an existing item, use a conditional expression that contains the <code>attribute_not_exists</code> function with the name of the attribute being used as the partition key for the table. Since every record must contain that attribute, the <code>attribute_not_exists</code> function will only succeed if no matching item exists.</p> </note> <p>For more information about <code>PutItem</code>, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithItems.html">Working with Items</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutItemRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutItemInput;
use \OpenAPI\OpenAPI\Models\Shared\ConditionalOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExpectedAttributeValue;
use \OpenAPI\OpenAPI\Models\Shared\AttributeValue;
use \OpenAPI\OpenAPI\Models\Shared\ComparisonOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReturnConsumedCapacityEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReturnItemCollectionMetricsEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReturnValueEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutItemXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutItemRequest();
    $request->putItemInput = new PutItemInput();
    $request->putItemInput->conditionExpression = 'id';
    $request->putItemInput->conditionalOperator = ConditionalOperatorEnum::OR;
    $request->putItemInput->expected = [
        'aspernatur' => new ExpectedAttributeValue(),
        'perferendis' => new ExpectedAttributeValue(),
    ];
    $request->putItemInput->expressionAttributeNames = [
        'optio' => 'accusamus',
    ];
    $request->putItemInput->expressionAttributeValues = [
        'saepe' => new AttributeValue(),
        'suscipit' => new AttributeValue(),
    ];
    $request->putItemInput->item = [
        'provident' => new AttributeValue(),
        'minima' => new AttributeValue(),
        'repellendus' => new AttributeValue(),
    ];
    $request->putItemInput->returnConsumedCapacity = ReturnConsumedCapacityEnum::TOTAL;
    $request->putItemInput->returnItemCollectionMetrics = ReturnItemCollectionMetricsEnum::NONE;
    $request->putItemInput->returnValues = ReturnValueEnum::NONE;
    $request->putItemInput->tableName = 'at';
    $request->xAmzAlgorithm = 'quaerat';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'quod';
    $request->xAmzSecurityToken = 'officiis';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->xAmzTarget = PutItemXAmzTargetEnum::DYNAMO_DB20120810_PUT_ITEM;

    $response = $sdk->sdk->putItem($request);

    if ($response->putItemOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## query

<p>You must provide the name of the partition key attribute and a single value for that attribute. <code>Query</code> returns all items with that partition key value. Optionally, you can provide a sort key attribute and use a comparison operator to refine the search results.</p> <p>Use the <code>KeyConditionExpression</code> parameter to provide a specific value for the partition key. The <code>Query</code> operation will return all of the items from the table or index with that partition key value. You can optionally narrow the scope of the <code>Query</code> operation by specifying a sort key value and a comparison operator in <code>KeyConditionExpression</code>. To further refine the <code>Query</code> results, you can optionally provide a <code>FilterExpression</code>. A <code>FilterExpression</code> determines which items within the results should be returned to you. All of the other results are discarded. </p> <p> A <code>Query</code> operation always returns a result set. If no matching items are found, the result set will be empty. Queries that do not return results consume the minimum number of read capacity units for that type of read operation. </p> <note> <p> DynamoDB calculates the number of read capacity units consumed based on item size, not on the amount of data that is returned to an application. The number of capacity units consumed will be the same whether you request all of the attributes (the default behavior) or just some of them (using a projection expression). The number will also be the same whether or not you use a <code>FilterExpression</code>. </p> </note> <p> <code>Query</code> results are always sorted by the sort key value. If the data type of the sort key is Number, the results are returned in numeric order; otherwise, the results are returned in order of UTF-8 bytes. By default, the sort order is ascending. To reverse the order, set the <code>ScanIndexForward</code> parameter to false. </p> <p> A single <code>Query</code> operation will read up to the maximum number of items set (if using the <code>Limit</code> parameter) or a maximum of 1 MB of data and then apply any filtering to the results using <code>FilterExpression</code>. If <code>LastEvaluatedKey</code> is present in the response, you will need to paginate the result set. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Query.html#Query.Pagination">Paginating the Results</a> in the <i>Amazon DynamoDB Developer Guide</i>. </p> <p> <code>FilterExpression</code> is applied after a <code>Query</code> finishes, but before the results are returned. A <code>FilterExpression</code> cannot contain partition key or sort key attributes. You need to specify those attributes in the <code>KeyConditionExpression</code>. </p> <note> <p> A <code>Query</code> operation can return an empty result set and a <code>LastEvaluatedKey</code> if all the items read for the page of results are filtered out. </p> </note> <p>You can query a table, a local secondary index, or a global secondary index. For a query on a table or on a local secondary index, you can set the <code>ConsistentRead</code> parameter to <code>true</code> and obtain a strongly consistent result. Global secondary indexes support eventually consistent reads only, so do not specify <code>ConsistentRead</code> when querying a global secondary index.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\QueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\QueryInput;
use \OpenAPI\OpenAPI\Models\Shared\ConditionalOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\AttributeValue;
use \OpenAPI\OpenAPI\Models\Shared\Condition;
use \OpenAPI\OpenAPI\Models\Shared\ComparisonOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReturnConsumedCapacityEnum;
use \OpenAPI\OpenAPI\Models\Shared\SelectEnum;
use \OpenAPI\OpenAPI\Models\Operations\QueryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryRequest();
    $request->exclusiveStartKey = 'a';
    $request->limit = 'esse';
    $request->queryInput = new QueryInput();
    $request->queryInput->attributesToGet = [
        'iusto',
        'ipsum',
        'quisquam',
    ];
    $request->queryInput->conditionalOperator = ConditionalOperatorEnum::OR;
    $request->queryInput->consistentRead = false;
    $request->queryInput->exclusiveStartKey = [
        'tempore' => new AttributeValue(),
    ];
    $request->queryInput->expressionAttributeNames = [
        'numquam' => 'enim',
        'dolorem' => 'sapiente',
        'totam' => 'nihil',
        'sit' => 'expedita',
    ];
    $request->queryInput->expressionAttributeValues = [
        'sed' => new AttributeValue(),
    ];
    $request->queryInput->filterExpression = 'vel';
    $request->queryInput->indexName = 'libero';
    $request->queryInput->keyConditionExpression = 'voluptas';
    $request->queryInput->keyConditions = [
        'quam' => new Condition(),
        'ipsum' => new Condition(),
        'incidunt' => new Condition(),
    ];
    $request->queryInput->limit = 186458;
    $request->queryInput->projectionExpression = 'cupiditate';
    $request->queryInput->queryFilter = [
        'pariatur' => new Condition(),
        'soluta' => new Condition(),
        'dicta' => new Condition(),
        'laborum' => new Condition(),
    ];
    $request->queryInput->returnConsumedCapacity = ReturnConsumedCapacityEnum::TOTAL;
    $request->queryInput->scanIndexForward = false;
    $request->queryInput->select = SelectEnum::ALL_PROJECTED_ATTRIBUTES;
    $request->queryInput->tableName = 'aspernatur';
    $request->xAmzAlgorithm = 'dolores';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'quam';
    $request->xAmzSignature = 'molestias';
    $request->xAmzSignedHeaders = 'temporibus';
    $request->xAmzTarget = QueryXAmzTargetEnum::DYNAMO_DB20120810_QUERY;

    $response = $sdk->sdk->query($request);

    if ($response->queryOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## restoreTableFromBackup

<p>Creates a new table from an existing backup. Any number of users can execute up to 50 concurrent restores (any type of restore) in a given account. </p> <p>You can call <code>RestoreTableFromBackup</code> at a maximum rate of 10 times per second.</p> <p>You must manually set up the following on the restored table:</p> <ul> <li> <p>Auto scaling policies</p> </li> <li> <p>IAM policies</p> </li> <li> <p>Amazon CloudWatch metrics and alarms</p> </li> <li> <p>Tags</p> </li> <li> <p>Stream settings</p> </li> <li> <p>Time to Live (TTL) settings</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RestoreTableFromBackupRequest;
use \OpenAPI\OpenAPI\Models\Shared\RestoreTableFromBackupInput;
use \OpenAPI\OpenAPI\Models\Shared\BillingModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GlobalSecondaryIndex;
use \OpenAPI\OpenAPI\Models\Shared\KeySchemaElement;
use \OpenAPI\OpenAPI\Models\Shared\KeyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Projection;
use \OpenAPI\OpenAPI\Models\Shared\ProjectionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProvisionedThroughput;
use \OpenAPI\OpenAPI\Models\Shared\LocalSecondaryIndex;
use \OpenAPI\OpenAPI\Models\Shared\SSESpecification;
use \OpenAPI\OpenAPI\Models\Shared\SSETypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\RestoreTableFromBackupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RestoreTableFromBackupRequest();
    $request->restoreTableFromBackupInput = new RestoreTableFromBackupInput();
    $request->restoreTableFromBackupInput->backupArn = 'qui';
    $request->restoreTableFromBackupInput->billingModeOverride = BillingModeEnum::PROVISIONED;
    $request->restoreTableFromBackupInput->globalSecondaryIndexOverride = [
        new GlobalSecondaryIndex(),
    ];
    $request->restoreTableFromBackupInput->localSecondaryIndexOverride = [
        new LocalSecondaryIndex(),
    ];
    $request->restoreTableFromBackupInput->provisionedThroughputOverride = new ProvisionedThroughput();
    $request->restoreTableFromBackupInput->provisionedThroughputOverride->readCapacityUnits = 488056;
    $request->restoreTableFromBackupInput->provisionedThroughputOverride->writeCapacityUnits = 124833;
    $request->restoreTableFromBackupInput->sseSpecificationOverride = new SSESpecification();
    $request->restoreTableFromBackupInput->sseSpecificationOverride->enabled = false;
    $request->restoreTableFromBackupInput->sseSpecificationOverride->kmsMasterKeyId = 'ullam';
    $request->restoreTableFromBackupInput->sseSpecificationOverride->sseType = SSETypeEnum::KMS;
    $request->restoreTableFromBackupInput->targetTableName = 'hic';
    $request->xAmzAlgorithm = 'voluptatem';
    $request->xAmzContentSha256 = 'cumque';
    $request->xAmzCredential = 'soluta';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'et';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'ipsum';
    $request->xAmzTarget = RestoreTableFromBackupXAmzTargetEnum::DYNAMO_DB20120810_RESTORE_TABLE_FROM_BACKUP;

    $response = $sdk->sdk->restoreTableFromBackup($request);

    if ($response->restoreTableFromBackupOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## restoreTableToPointInTime

<p>Restores the specified table to the specified point in time within <code>EarliestRestorableDateTime</code> and <code>LatestRestorableDateTime</code>. You can restore your table to any point in time during the last 35 days. Any number of users can execute up to 4 concurrent restores (any type of restore) in a given account. </p> <p> When you restore using point in time recovery, DynamoDB restores your table data to the state based on the selected date and time (day:hour:minute:second) to a new table. </p> <p> Along with data, the following are also included on the new restored table using point in time recovery: </p> <ul> <li> <p>Global secondary indexes (GSIs)</p> </li> <li> <p>Local secondary indexes (LSIs)</p> </li> <li> <p>Provisioned read and write capacity</p> </li> <li> <p>Encryption settings</p> <important> <p> All these settings come from the current settings of the source table at the time of restore. </p> </important> </li> </ul> <p>You must manually set up the following on the restored table:</p> <ul> <li> <p>Auto scaling policies</p> </li> <li> <p>IAM policies</p> </li> <li> <p>Amazon CloudWatch metrics and alarms</p> </li> <li> <p>Tags</p> </li> <li> <p>Stream settings</p> </li> <li> <p>Time to Live (TTL) settings</p> </li> <li> <p>Point in time recovery settings</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RestoreTableToPointInTimeRequest;
use \OpenAPI\OpenAPI\Models\Shared\RestoreTableToPointInTimeInput;
use \OpenAPI\OpenAPI\Models\Shared\BillingModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GlobalSecondaryIndex;
use \OpenAPI\OpenAPI\Models\Shared\KeySchemaElement;
use \OpenAPI\OpenAPI\Models\Shared\KeyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Projection;
use \OpenAPI\OpenAPI\Models\Shared\ProjectionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProvisionedThroughput;
use \OpenAPI\OpenAPI\Models\Shared\LocalSecondaryIndex;
use \OpenAPI\OpenAPI\Models\Shared\SSESpecification;
use \OpenAPI\OpenAPI\Models\Shared\SSETypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\RestoreTableToPointInTimeXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RestoreTableToPointInTimeRequest();
    $request->restoreTableToPointInTimeInput = new RestoreTableToPointInTimeInput();
    $request->restoreTableToPointInTimeInput->billingModeOverride = BillingModeEnum::PROVISIONED;
    $request->restoreTableToPointInTimeInput->globalSecondaryIndexOverride = [
        new GlobalSecondaryIndex(),
        new GlobalSecondaryIndex(),
        new GlobalSecondaryIndex(),
    ];
    $request->restoreTableToPointInTimeInput->localSecondaryIndexOverride = [
        new LocalSecondaryIndex(),
        new LocalSecondaryIndex(),
        new LocalSecondaryIndex(),
    ];
    $request->restoreTableToPointInTimeInput->provisionedThroughputOverride = new ProvisionedThroughput();
    $request->restoreTableToPointInTimeInput->provisionedThroughputOverride->readCapacityUnits = 731694;
    $request->restoreTableToPointInTimeInput->provisionedThroughputOverride->writeCapacityUnits = 584476;
    $request->restoreTableToPointInTimeInput->restoreDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-14T21:26:14.171Z');
    $request->restoreTableToPointInTimeInput->sseSpecificationOverride = new SSESpecification();
    $request->restoreTableToPointInTimeInput->sseSpecificationOverride->enabled = false;
    $request->restoreTableToPointInTimeInput->sseSpecificationOverride->kmsMasterKeyId = 'dolorem';
    $request->restoreTableToPointInTimeInput->sseSpecificationOverride->sseType = SSETypeEnum::AES256;
    $request->restoreTableToPointInTimeInput->sourceTableArn = 'labore';
    $request->restoreTableToPointInTimeInput->sourceTableName = 'adipisci';
    $request->restoreTableToPointInTimeInput->targetTableName = 'dolorum';
    $request->restoreTableToPointInTimeInput->useLatestRestorableTime = false;
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'quae';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'quas';
    $request->xAmzSecurityToken = 'itaque';
    $request->xAmzSignature = 'consequatur';
    $request->xAmzSignedHeaders = 'est';
    $request->xAmzTarget = RestoreTableToPointInTimeXAmzTargetEnum::DYNAMO_DB20120810_RESTORE_TABLE_TO_POINT_IN_TIME;

    $response = $sdk->sdk->restoreTableToPointInTime($request);

    if ($response->restoreTableToPointInTimeOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## scan

<p>The <code>Scan</code> operation returns one or more items and item attributes by accessing every item in a table or a secondary index. To have DynamoDB return fewer items, you can provide a <code>FilterExpression</code> operation.</p> <p>If the total number of scanned items exceeds the maximum dataset size limit of 1 MB, the scan stops and results are returned to the user as a <code>LastEvaluatedKey</code> value to continue the scan in a subsequent operation. The results also include the number of items exceeding the limit. A scan can result in no table data meeting the filter criteria. </p> <p>A single <code>Scan</code> operation reads up to the maximum number of items set (if using the <code>Limit</code> parameter) or a maximum of 1 MB of data and then apply any filtering to the results using <code>FilterExpression</code>. If <code>LastEvaluatedKey</code> is present in the response, you need to paginate the result set. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Scan.html#Scan.Pagination">Paginating the Results</a> in the <i>Amazon DynamoDB Developer Guide</i>. </p> <p> <code>Scan</code> operations proceed sequentially; however, for faster performance on a large table or secondary index, applications can request a parallel <code>Scan</code> operation by providing the <code>Segment</code> and <code>TotalSegments</code> parameters. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Scan.html#Scan.ParallelScan">Parallel Scan</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p> <p> <code>Scan</code> uses eventually consistent reads when accessing the data in a table; therefore, the result set might not include the changes to data in the table immediately before the operation began. If you need a consistent copy of the data, as of the time that the <code>Scan</code> begins, you can set the <code>ConsistentRead</code> parameter to <code>true</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ScanRequest;
use \OpenAPI\OpenAPI\Models\Shared\ScanInput;
use \OpenAPI\OpenAPI\Models\Shared\ConditionalOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\AttributeValue;
use \OpenAPI\OpenAPI\Models\Shared\ReturnConsumedCapacityEnum;
use \OpenAPI\OpenAPI\Models\Shared\Condition;
use \OpenAPI\OpenAPI\Models\Shared\ComparisonOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\SelectEnum;
use \OpenAPI\OpenAPI\Models\Operations\ScanXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ScanRequest();
    $request->exclusiveStartKey = 'repellendus';
    $request->limit = 'porro';
    $request->scanInput = new ScanInput();
    $request->scanInput->attributesToGet = [
        'ut',
        'facilis',
        'cupiditate',
        'qui',
    ];
    $request->scanInput->conditionalOperator = ConditionalOperatorEnum::AND;
    $request->scanInput->consistentRead = false;
    $request->scanInput->exclusiveStartKey = [
        'odio' => new AttributeValue(),
        'occaecati' => new AttributeValue(),
        'voluptatibus' => new AttributeValue(),
    ];
    $request->scanInput->expressionAttributeNames = [
        'vero' => 'omnis',
        'quis' => 'ipsum',
        'delectus' => 'voluptate',
        'consectetur' => 'vero',
    ];
    $request->scanInput->expressionAttributeValues = [
        'dignissimos' => new AttributeValue(),
        'hic' => new AttributeValue(),
        'distinctio' => new AttributeValue(),
        'quod' => new AttributeValue(),
    ];
    $request->scanInput->filterExpression = 'odio';
    $request->scanInput->indexName = 'similique';
    $request->scanInput->limit = 708548;
    $request->scanInput->projectionExpression = 'vero';
    $request->scanInput->returnConsumedCapacity = ReturnConsumedCapacityEnum::TOTAL;
    $request->scanInput->scanFilter = [
        'quibusdam' => new Condition(),
        'illum' => new Condition(),
    ];
    $request->scanInput->segment = 194342;
    $request->scanInput->select = SelectEnum::SPECIFIC_ATTRIBUTES;
    $request->scanInput->tableName = 'impedit';
    $request->scanInput->totalSegments = 13236;
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'exercitationem';
    $request->xAmzCredential = 'nulla';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'porro';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'doloribus';
    $request->xAmzTarget = ScanXAmzTargetEnum::DYNAMO_DB20120810_SCAN;

    $response = $sdk->sdk->scan($request);

    if ($response->scanOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

<p>Associate a set of tags with an Amazon DynamoDB resource. You can then activate these user-defined tags so that they appear on the Billing and Cost Management console for cost allocation tracking. You can call TagResource up to five times per second, per account. </p> <p>For an overview on tagging DynamoDB resources, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tagging.html">Tagging for DynamoDB</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagResourceInput;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->tagResourceInput = new TagResourceInput();
    $request->tagResourceInput->resourceArn = 'iusto';
    $request->tagResourceInput->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'ducimus';
    $request->xAmzContentSha256 = 'alias';
    $request->xAmzCredential = 'officia';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'aspernatur';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::DYNAMO_DB20120810_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transactGetItems

<p> <code>TransactGetItems</code> is a synchronous operation that atomically retrieves multiple items from one or more tables (but not from indexes) in a single account and Region. A <code>TransactGetItems</code> call can contain up to 100 <code>TransactGetItem</code> objects, each of which contains a <code>Get</code> structure that specifies an item to retrieve from a table in the account and Region. A call to <code>TransactGetItems</code> cannot retrieve items from tables in more than one Amazon Web Services account or Region. The aggregate size of the items in the transaction cannot exceed 4 MB.</p> <p>DynamoDB rejects the entire <code>TransactGetItems</code> request if any of the following is true:</p> <ul> <li> <p>A conflicting operation is in the process of updating an item to be read.</p> </li> <li> <p>There is insufficient provisioned capacity for the transaction to be completed.</p> </li> <li> <p>There is a user error, such as an invalid data format.</p> </li> <li> <p>The aggregate size of the items in the transaction exceeded 4 MB.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TransactGetItemsRequest;
use \OpenAPI\OpenAPI\Models\Shared\TransactGetItemsInput;
use \OpenAPI\OpenAPI\Models\Shared\ReturnConsumedCapacityEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransactGetItem;
use \OpenAPI\OpenAPI\Models\Shared\Get;
use \OpenAPI\OpenAPI\Models\Shared\AttributeValue;
use \OpenAPI\OpenAPI\Models\Operations\TransactGetItemsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransactGetItemsRequest();
    $request->transactGetItemsInput = new TransactGetItemsInput();
    $request->transactGetItemsInput->returnConsumedCapacity = ReturnConsumedCapacityEnum::TOTAL;
    $request->transactGetItemsInput->transactItems = [
        new TransactGetItem(),
        new TransactGetItem(),
        new TransactGetItem(),
        new TransactGetItem(),
    ];
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'ratione';
    $request->xAmzCredential = 'ex';
    $request->xAmzDate = 'laudantium';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'maiores';
    $request->xAmzTarget = TransactGetItemsXAmzTargetEnum::DYNAMO_DB20120810_TRANSACT_GET_ITEMS;

    $response = $sdk->sdk->transactGetItems($request);

    if ($response->transactGetItemsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transactWriteItems

<p> <code>TransactWriteItems</code> is a synchronous write operation that groups up to 100 action requests. These actions can target items in different tables, but not in different Amazon Web Services accounts or Regions, and no two actions can target the same item. For example, you cannot both <code>ConditionCheck</code> and <code>Update</code> the same item. The aggregate size of the items in the transaction cannot exceed 4 MB.</p> <p>The actions are completed atomically so that either all of them succeed, or all of them fail. They are defined by the following objects:</p> <ul> <li> <p> <code>Put</code>  —   Initiates a <code>PutItem</code> operation to write a new item. This structure specifies the primary key of the item to be written, the name of the table to write it in, an optional condition expression that must be satisfied for the write to succeed, a list of the item's attributes, and a field indicating whether to retrieve the item's attributes if the condition is not met.</p> </li> <li> <p> <code>Update</code>  —   Initiates an <code>UpdateItem</code> operation to update an existing item. This structure specifies the primary key of the item to be updated, the name of the table where it resides, an optional condition expression that must be satisfied for the update to succeed, an expression that defines one or more attributes to be updated, and a field indicating whether to retrieve the item's attributes if the condition is not met.</p> </li> <li> <p> <code>Delete</code>  —   Initiates a <code>DeleteItem</code> operation to delete an existing item. This structure specifies the primary key of the item to be deleted, the name of the table where it resides, an optional condition expression that must be satisfied for the deletion to succeed, and a field indicating whether to retrieve the item's attributes if the condition is not met.</p> </li> <li> <p> <code>ConditionCheck</code>  —   Applies a condition to an item that is not being modified by the transaction. This structure specifies the primary key of the item to be checked, the name of the table where it resides, a condition expression that must be satisfied for the transaction to succeed, and a field indicating whether to retrieve the item's attributes if the condition is not met.</p> </li> </ul> <p>DynamoDB rejects the entire <code>TransactWriteItems</code> request if any of the following is true:</p> <ul> <li> <p>A condition in one of the condition expressions is not met.</p> </li> <li> <p>An ongoing operation is in the process of updating the same item.</p> </li> <li> <p>There is insufficient provisioned capacity for the transaction to be completed.</p> </li> <li> <p>An item size becomes too large (bigger than 400 KB), a local secondary index (LSI) becomes too large, or a similar validation error occurs because of changes made by the transaction.</p> </li> <li> <p>The aggregate size of the items in the transaction exceeds 4 MB.</p> </li> <li> <p>There is a user error, such as an invalid data format.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TransactWriteItemsRequest;
use \OpenAPI\OpenAPI\Models\Shared\TransactWriteItemsInput;
use \OpenAPI\OpenAPI\Models\Shared\ReturnConsumedCapacityEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReturnItemCollectionMetricsEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransactWriteItem;
use \OpenAPI\OpenAPI\Models\Shared\ConditionCheck;
use \OpenAPI\OpenAPI\Models\Shared\AttributeValue;
use \OpenAPI\OpenAPI\Models\Shared\ReturnValuesOnConditionCheckFailureEnum;
use \OpenAPI\OpenAPI\Models\Shared\Delete;
use \OpenAPI\OpenAPI\Models\Shared\Put;
use \OpenAPI\OpenAPI\Models\Shared\Update;
use \OpenAPI\OpenAPI\Models\Operations\TransactWriteItemsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransactWriteItemsRequest();
    $request->transactWriteItemsInput = new TransactWriteItemsInput();
    $request->transactWriteItemsInput->clientRequestToken = 'quasi';
    $request->transactWriteItemsInput->returnConsumedCapacity = ReturnConsumedCapacityEnum::TOTAL;
    $request->transactWriteItemsInput->returnItemCollectionMetrics = ReturnItemCollectionMetricsEnum::NONE;
    $request->transactWriteItemsInput->transactItems = [
        new TransactWriteItem(),
        new TransactWriteItem(),
        new TransactWriteItem(),
    ];
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'nostrum';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'quisquam';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'impedit';
    $request->xAmzTarget = TransactWriteItemsXAmzTargetEnum::DYNAMO_DB20120810_TRANSACT_WRITE_ITEMS;

    $response = $sdk->sdk->transactWriteItems($request);

    if ($response->transactWriteItemsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

<p>Removes the association of tags from an Amazon DynamoDB resource. You can call <code>UntagResource</code> up to five times per second, per account. </p> <p>For an overview on tagging DynamoDB resources, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tagging.html">Tagging for DynamoDB</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UntagResourceInput;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->untagResourceInput = new UntagResourceInput();
    $request->untagResourceInput->resourceArn = 'corporis';
    $request->untagResourceInput->tagKeys = [
        'aliquid',
        'inventore',
    ];
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'consectetur';
    $request->xAmzSecurityToken = 'recusandae';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'minima';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::DYNAMO_DB20120810_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateContinuousBackups

<p> <code>UpdateContinuousBackups</code> enables or disables point in time recovery for the specified table. A successful <code>UpdateContinuousBackups</code> call returns the current <code>ContinuousBackupsDescription</code>. Continuous backups are <code>ENABLED</code> on all tables at table creation. If point in time recovery is enabled, <code>PointInTimeRecoveryStatus</code> will be set to ENABLED.</p> <p> Once continuous backups and point in time recovery are enabled, you can restore to any point in time within <code>EarliestRestorableDateTime</code> and <code>LatestRestorableDateTime</code>. </p> <p> <code>LatestRestorableDateTime</code> is typically 5 minutes before the current time. You can restore your table to any point in time during the last 35 days. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateContinuousBackupsRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateContinuousBackupsInput;
use \OpenAPI\OpenAPI\Models\Shared\PointInTimeRecoverySpecification;
use \OpenAPI\OpenAPI\Models\Operations\UpdateContinuousBackupsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateContinuousBackupsRequest();
    $request->updateContinuousBackupsInput = new UpdateContinuousBackupsInput();
    $request->updateContinuousBackupsInput->pointInTimeRecoverySpecification = new PointInTimeRecoverySpecification();
    $request->updateContinuousBackupsInput->pointInTimeRecoverySpecification->pointInTimeRecoveryEnabled = false;
    $request->updateContinuousBackupsInput->tableName = 'eaque';
    $request->xAmzAlgorithm = 'a';
    $request->xAmzContentSha256 = 'libero';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'aut';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'impedit';
    $request->xAmzSignedHeaders = 'aliquam';
    $request->xAmzTarget = UpdateContinuousBackupsXAmzTargetEnum::DYNAMO_DB20120810_UPDATE_CONTINUOUS_BACKUPS;

    $response = $sdk->sdk->updateContinuousBackups($request);

    if ($response->updateContinuousBackupsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateContributorInsights

Updates the status for contributor insights for a specific table or index. CloudWatch Contributor Insights for DynamoDB graphs display the partition key and (if applicable) sort key of frequently accessed items and frequently throttled items in plaintext. If you require the use of Amazon Web Services Key Management Service (KMS) to encrypt this table’s partition key and sort key data with an Amazon Web Services managed key or customer managed key, you should not enable CloudWatch Contributor Insights for DynamoDB for this table.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateContributorInsightsRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateContributorInsightsInput;
use \OpenAPI\OpenAPI\Models\Shared\ContributorInsightsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateContributorInsightsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateContributorInsightsRequest();
    $request->updateContributorInsightsInput = new UpdateContributorInsightsInput();
    $request->updateContributorInsightsInput->contributorInsightsAction = ContributorInsightsActionEnum::ENABLE;
    $request->updateContributorInsightsInput->indexName = 'accusamus';
    $request->updateContributorInsightsInput->tableName = 'inventore';
    $request->xAmzAlgorithm = 'non';
    $request->xAmzContentSha256 = 'et';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'placeat';
    $request->xAmzSignature = 'velit';
    $request->xAmzSignedHeaders = 'eum';
    $request->xAmzTarget = UpdateContributorInsightsXAmzTargetEnum::DYNAMO_DB20120810_UPDATE_CONTRIBUTOR_INSIGHTS;

    $response = $sdk->sdk->updateContributorInsights($request);

    if ($response->updateContributorInsightsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateGlobalTable

<p>Adds or removes replicas in the specified global table. The global table must already exist to be able to use this operation. Any replica to be added must be empty, have the same name as the global table, have the same key schema, have DynamoDB Streams enabled, and have the same provisioned and maximum write capacity units.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29 (Legacy)</a> of global tables. We recommend using <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> when creating new global tables, as it provides greater flexibility, higher efficiency and consumes less write capacity than 2017.11.29 (Legacy). To determine which version you are using, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.DetermineVersion.html">Determining the version</a>. To update existing global tables from version 2017.11.29 (Legacy) to version 2019.11.21 (Current), see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_upgrade.html"> Updating global tables</a>. </p> </important> <note> <p> This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29</a> of global tables. If you are using global tables <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21</a> you can use <a href="https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTable.html">DescribeTable</a> instead. </p> <p> Although you can use <code>UpdateGlobalTable</code> to add replicas and remove replicas in a single request, for simplicity we recommend that you issue separate requests for adding or removing replicas. </p> </note> <p> If global secondary indexes are specified, then the following conditions must also be met: </p> <ul> <li> <p> The global secondary indexes must have the same name. </p> </li> <li> <p> The global secondary indexes must have the same hash key and sort key (if present). </p> </li> <li> <p> The global secondary indexes must have the same provisioned and maximum write capacity units. </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGlobalTableRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateGlobalTableInput;
use \OpenAPI\OpenAPI\Models\Shared\ReplicaUpdate;
use \OpenAPI\OpenAPI\Models\Shared\CreateReplicaAction;
use \OpenAPI\OpenAPI\Models\Shared\DeleteReplicaAction;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGlobalTableXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateGlobalTableRequest();
    $request->updateGlobalTableInput = new UpdateGlobalTableInput();
    $request->updateGlobalTableInput->globalTableName = 'autem';
    $request->updateGlobalTableInput->replicaUpdates = [
        new ReplicaUpdate(),
        new ReplicaUpdate(),
        new ReplicaUpdate(),
        new ReplicaUpdate(),
    ];
    $request->xAmzAlgorithm = 'quas';
    $request->xAmzContentSha256 = 'assumenda';
    $request->xAmzCredential = 'nulla';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'tempora';
    $request->xAmzTarget = UpdateGlobalTableXAmzTargetEnum::DYNAMO_DB20120810_UPDATE_GLOBAL_TABLE;

    $response = $sdk->sdk->updateGlobalTable($request);

    if ($response->updateGlobalTableOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateGlobalTableSettings

<p>Updates settings for a global table.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29 (Legacy)</a> of global tables. We recommend using <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> when creating new global tables, as it provides greater flexibility, higher efficiency and consumes less write capacity than 2017.11.29 (Legacy). To determine which version you are using, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.DetermineVersion.html">Determining the version</a>. To update existing global tables from version 2017.11.29 (Legacy) to version 2019.11.21 (Current), see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_upgrade.html"> Updating global tables</a>. </p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGlobalTableSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateGlobalTableSettingsInput;
use \OpenAPI\OpenAPI\Models\Shared\BillingModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GlobalTableGlobalSecondaryIndexSettingsUpdate;
use \OpenAPI\OpenAPI\Models\Shared\AutoScalingSettingsUpdate;
use \OpenAPI\OpenAPI\Models\Shared\AutoScalingPolicyUpdate;
use \OpenAPI\OpenAPI\Models\Shared\AutoScalingTargetTrackingScalingPolicyConfigurationUpdate;
use \OpenAPI\OpenAPI\Models\Shared\ReplicaSettingsUpdate;
use \OpenAPI\OpenAPI\Models\Shared\ReplicaGlobalSecondaryIndexSettingsUpdate;
use \OpenAPI\OpenAPI\Models\Shared\TableClassEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGlobalTableSettingsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateGlobalTableSettingsRequest();
    $request->updateGlobalTableSettingsInput = new UpdateGlobalTableSettingsInput();
    $request->updateGlobalTableSettingsInput->globalTableBillingMode = BillingModeEnum::PROVISIONED;
    $request->updateGlobalTableSettingsInput->globalTableGlobalSecondaryIndexSettingsUpdate = [
        new GlobalTableGlobalSecondaryIndexSettingsUpdate(),
    ];
    $request->updateGlobalTableSettingsInput->globalTableName = 'provident';
    $request->updateGlobalTableSettingsInput->globalTableProvisionedWriteCapacityAutoScalingSettingsUpdate = new AutoScalingSettingsUpdate();
    $request->updateGlobalTableSettingsInput->globalTableProvisionedWriteCapacityAutoScalingSettingsUpdate->autoScalingDisabled = false;
    $request->updateGlobalTableSettingsInput->globalTableProvisionedWriteCapacityAutoScalingSettingsUpdate->autoScalingRoleArn = 'ipsa';
    $request->updateGlobalTableSettingsInput->globalTableProvisionedWriteCapacityAutoScalingSettingsUpdate->maximumUnits = 476477;
    $request->updateGlobalTableSettingsInput->globalTableProvisionedWriteCapacityAutoScalingSettingsUpdate->minimumUnits = 301598;
    $request->updateGlobalTableSettingsInput->globalTableProvisionedWriteCapacityAutoScalingSettingsUpdate->scalingPolicyUpdate = new AutoScalingPolicyUpdate();
    $request->updateGlobalTableSettingsInput->globalTableProvisionedWriteCapacityAutoScalingSettingsUpdate->scalingPolicyUpdate->policyName = 'odio';
    $request->updateGlobalTableSettingsInput->globalTableProvisionedWriteCapacityAutoScalingSettingsUpdate->scalingPolicyUpdate->targetTrackingScalingPolicyConfiguration = new AutoScalingTargetTrackingScalingPolicyConfigurationUpdate();
    $request->updateGlobalTableSettingsInput->globalTableProvisionedWriteCapacityAutoScalingSettingsUpdate->scalingPolicyUpdate->targetTrackingScalingPolicyConfiguration->disableScaleIn = false;
    $request->updateGlobalTableSettingsInput->globalTableProvisionedWriteCapacityAutoScalingSettingsUpdate->scalingPolicyUpdate->targetTrackingScalingPolicyConfiguration->scaleInCooldown = 262118;
    $request->updateGlobalTableSettingsInput->globalTableProvisionedWriteCapacityAutoScalingSettingsUpdate->scalingPolicyUpdate->targetTrackingScalingPolicyConfiguration->scaleOutCooldown = 458515;
    $request->updateGlobalTableSettingsInput->globalTableProvisionedWriteCapacityAutoScalingSettingsUpdate->scalingPolicyUpdate->targetTrackingScalingPolicyConfiguration->targetValue = 4561.41;
    $request->updateGlobalTableSettingsInput->globalTableProvisionedWriteCapacityUnits = 524593;
    $request->updateGlobalTableSettingsInput->replicaSettingsUpdate = [
        new ReplicaSettingsUpdate(),
        new ReplicaSettingsUpdate(),
        new ReplicaSettingsUpdate(),
    ];
    $request->xAmzAlgorithm = 'reprehenderit';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'fugiat';
    $request->xAmzDate = 'ut';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'assumenda';
    $request->xAmzTarget = UpdateGlobalTableSettingsXAmzTargetEnum::DYNAMO_DB20120810_UPDATE_GLOBAL_TABLE_SETTINGS;

    $response = $sdk->sdk->updateGlobalTableSettings($request);

    if ($response->updateGlobalTableSettingsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateItem

<p>Edits an existing item's attributes, or adds a new item to the table if it does not already exist. You can put, delete, or add attribute values. You can also perform a conditional update on an existing item (insert a new attribute name-value pair if it doesn't exist, or replace an existing name-value pair if it has certain expected attribute values).</p> <p>You can also return the item's attribute values in the same <code>UpdateItem</code> operation using the <code>ReturnValues</code> parameter.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateItemRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateItemInput;
use \OpenAPI\OpenAPI\Models\Shared\AttributeValueUpdate;
use \OpenAPI\OpenAPI\Models\Shared\AttributeActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\AttributeValue;
use \OpenAPI\OpenAPI\Models\Shared\ConditionalOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExpectedAttributeValue;
use \OpenAPI\OpenAPI\Models\Shared\ComparisonOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReturnConsumedCapacityEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReturnItemCollectionMetricsEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReturnValueEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateItemXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateItemRequest();
    $request->updateItemInput = new UpdateItemInput();
    $request->updateItemInput->attributeUpdates = [
        'praesentium' => new AttributeValueUpdate(),
    ];
    $request->updateItemInput->conditionExpression = 'quisquam';
    $request->updateItemInput->conditionalOperator = ConditionalOperatorEnum::AND;
    $request->updateItemInput->expected = [
        'id' => new ExpectedAttributeValue(),
    ];
    $request->updateItemInput->expressionAttributeNames = [
        'neque' => 'quo',
        'illum' => 'quo',
        'fuga' => 'eius',
    ];
    $request->updateItemInput->expressionAttributeValues = [
        'voluptas' => new AttributeValue(),
    ];
    $request->updateItemInput->key = [
        'cupiditate' => new AttributeValue(),
    ];
    $request->updateItemInput->returnConsumedCapacity = ReturnConsumedCapacityEnum::INDEXES;
    $request->updateItemInput->returnItemCollectionMetrics = ReturnItemCollectionMetricsEnum::SIZE;
    $request->updateItemInput->returnValues = ReturnValueEnum::UPDATED_NEW;
    $request->updateItemInput->tableName = 'ipsam';
    $request->updateItemInput->updateExpression = 'aspernatur';
    $request->xAmzAlgorithm = 'sequi';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'aperiam';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'quod';
    $request->xAmzTarget = UpdateItemXAmzTargetEnum::DYNAMO_DB20120810_UPDATE_ITEM;

    $response = $sdk->sdk->updateItem($request);

    if ($response->updateItemOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTable

<p>Modifies the provisioned throughput settings, global secondary indexes, or DynamoDB Streams settings for a given table.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> of global tables. </p> </important> <p>You can only perform one of the following operations at once:</p> <ul> <li> <p>Modify the provisioned throughput settings of the table.</p> </li> <li> <p>Remove a global secondary index from the table.</p> </li> <li> <p>Create a new global secondary index on the table. After the index begins backfilling, you can use <code>UpdateTable</code> to perform other operations.</p> </li> </ul> <p> <code>UpdateTable</code> is an asynchronous operation; while it is executing, the table status changes from <code>ACTIVE</code> to <code>UPDATING</code>. While it is <code>UPDATING</code>, you cannot issue another <code>UpdateTable</code> request. When the table returns to the <code>ACTIVE</code> state, the <code>UpdateTable</code> operation is complete.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTableRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateTableInput;
use \OpenAPI\OpenAPI\Models\Shared\AttributeDefinition;
use \OpenAPI\OpenAPI\Models\Shared\ScalarAttributeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BillingModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GlobalSecondaryIndexUpdate;
use \OpenAPI\OpenAPI\Models\Shared\CreateGlobalSecondaryIndexAction;
use \OpenAPI\OpenAPI\Models\Shared\KeySchemaElement;
use \OpenAPI\OpenAPI\Models\Shared\KeyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Projection;
use \OpenAPI\OpenAPI\Models\Shared\ProjectionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProvisionedThroughput;
use \OpenAPI\OpenAPI\Models\Shared\DeleteGlobalSecondaryIndexAction;
use \OpenAPI\OpenAPI\Models\Shared\UpdateGlobalSecondaryIndexAction;
use \OpenAPI\OpenAPI\Models\Shared\ReplicationGroupUpdate;
use \OpenAPI\OpenAPI\Models\Shared\CreateReplicationGroupMemberAction;
use \OpenAPI\OpenAPI\Models\Shared\ReplicaGlobalSecondaryIndex;
use \OpenAPI\OpenAPI\Models\Shared\ProvisionedThroughputOverride;
use \OpenAPI\OpenAPI\Models\Shared\TableClassEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeleteReplicationGroupMemberAction;
use \OpenAPI\OpenAPI\Models\Shared\UpdateReplicationGroupMemberAction;
use \OpenAPI\OpenAPI\Models\Shared\SSESpecification;
use \OpenAPI\OpenAPI\Models\Shared\SSETypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\StreamSpecification;
use \OpenAPI\OpenAPI\Models\Shared\StreamViewTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTableXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTableRequest();
    $request->updateTableInput = new UpdateTableInput();
    $request->updateTableInput->attributeDefinitions = [
        new AttributeDefinition(),
        new AttributeDefinition(),
    ];
    $request->updateTableInput->billingMode = BillingModeEnum::PROVISIONED;
    $request->updateTableInput->deletionProtectionEnabled = false;
    $request->updateTableInput->globalSecondaryIndexUpdates = [
        new GlobalSecondaryIndexUpdate(),
        new GlobalSecondaryIndexUpdate(),
    ];
    $request->updateTableInput->provisionedThroughput = new ProvisionedThroughput();
    $request->updateTableInput->provisionedThroughput->readCapacityUnits = 518835;
    $request->updateTableInput->provisionedThroughput->writeCapacityUnits = 882710;
    $request->updateTableInput->replicaUpdates = [
        new ReplicationGroupUpdate(),
        new ReplicationGroupUpdate(),
    ];
    $request->updateTableInput->sseSpecification = new SSESpecification();
    $request->updateTableInput->sseSpecification->enabled = false;
    $request->updateTableInput->sseSpecification->kmsMasterKeyId = 'odio';
    $request->updateTableInput->sseSpecification->sseType = SSETypeEnum::KMS;
    $request->updateTableInput->streamSpecification = new StreamSpecification();
    $request->updateTableInput->streamSpecification->streamEnabled = false;
    $request->updateTableInput->streamSpecification->streamViewType = StreamViewTypeEnum::OLD_IMAGE;
    $request->updateTableInput->tableClass = TableClassEnum::STANDARD_INFREQUENT_ACCESS;
    $request->updateTableInput->tableName = 'dolores';
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'porro';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'quas';
    $request->xAmzSignedHeaders = 'praesentium';
    $request->xAmzTarget = UpdateTableXAmzTargetEnum::DYNAMO_DB20120810_UPDATE_TABLE;

    $response = $sdk->sdk->updateTable($request);

    if ($response->updateTableOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTableReplicaAutoScaling

<p>Updates auto scaling settings on your global tables at once.</p> <important> <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a> of global tables. </p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTableReplicaAutoScalingRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateTableReplicaAutoScalingInput;
use \OpenAPI\OpenAPI\Models\Shared\GlobalSecondaryIndexAutoScalingUpdate;
use \OpenAPI\OpenAPI\Models\Shared\AutoScalingSettingsUpdate;
use \OpenAPI\OpenAPI\Models\Shared\AutoScalingPolicyUpdate;
use \OpenAPI\OpenAPI\Models\Shared\AutoScalingTargetTrackingScalingPolicyConfigurationUpdate;
use \OpenAPI\OpenAPI\Models\Shared\ReplicaAutoScalingUpdate;
use \OpenAPI\OpenAPI\Models\Shared\ReplicaGlobalSecondaryIndexAutoScalingUpdate;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTableReplicaAutoScalingXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTableReplicaAutoScalingRequest();
    $request->updateTableReplicaAutoScalingInput = new UpdateTableReplicaAutoScalingInput();
    $request->updateTableReplicaAutoScalingInput->globalSecondaryIndexUpdates = [
        new GlobalSecondaryIndexAutoScalingUpdate(),
    ];
    $request->updateTableReplicaAutoScalingInput->provisionedWriteCapacityAutoScalingUpdate = new AutoScalingSettingsUpdate();
    $request->updateTableReplicaAutoScalingInput->provisionedWriteCapacityAutoScalingUpdate->autoScalingDisabled = false;
    $request->updateTableReplicaAutoScalingInput->provisionedWriteCapacityAutoScalingUpdate->autoScalingRoleArn = 'deleniti';
    $request->updateTableReplicaAutoScalingInput->provisionedWriteCapacityAutoScalingUpdate->maximumUnits = 143829;
    $request->updateTableReplicaAutoScalingInput->provisionedWriteCapacityAutoScalingUpdate->minimumUnits = 681393;
    $request->updateTableReplicaAutoScalingInput->provisionedWriteCapacityAutoScalingUpdate->scalingPolicyUpdate = new AutoScalingPolicyUpdate();
    $request->updateTableReplicaAutoScalingInput->provisionedWriteCapacityAutoScalingUpdate->scalingPolicyUpdate->policyName = 'mollitia';
    $request->updateTableReplicaAutoScalingInput->provisionedWriteCapacityAutoScalingUpdate->scalingPolicyUpdate->targetTrackingScalingPolicyConfiguration = new AutoScalingTargetTrackingScalingPolicyConfigurationUpdate();
    $request->updateTableReplicaAutoScalingInput->provisionedWriteCapacityAutoScalingUpdate->scalingPolicyUpdate->targetTrackingScalingPolicyConfiguration->disableScaleIn = false;
    $request->updateTableReplicaAutoScalingInput->provisionedWriteCapacityAutoScalingUpdate->scalingPolicyUpdate->targetTrackingScalingPolicyConfiguration->scaleInCooldown = 277596;
    $request->updateTableReplicaAutoScalingInput->provisionedWriteCapacityAutoScalingUpdate->scalingPolicyUpdate->targetTrackingScalingPolicyConfiguration->scaleOutCooldown = 539224;
    $request->updateTableReplicaAutoScalingInput->provisionedWriteCapacityAutoScalingUpdate->scalingPolicyUpdate->targetTrackingScalingPolicyConfiguration->targetValue = 1288.6;
    $request->updateTableReplicaAutoScalingInput->replicaUpdates = [
        new ReplicaAutoScalingUpdate(),
        new ReplicaAutoScalingUpdate(),
    ];
    $request->updateTableReplicaAutoScalingInput->tableName = 'nisi';
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'ratione';
    $request->xAmzSecurityToken = 'explicabo';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'occaecati';
    $request->xAmzTarget = UpdateTableReplicaAutoScalingXAmzTargetEnum::DYNAMO_DB20120810_UPDATE_TABLE_REPLICA_AUTO_SCALING;

    $response = $sdk->sdk->updateTableReplicaAutoScaling($request);

    if ($response->updateTableReplicaAutoScalingOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTimeToLive

<p>The <code>UpdateTimeToLive</code> method enables or disables Time to Live (TTL) for the specified table. A successful <code>UpdateTimeToLive</code> call returns the current <code>TimeToLiveSpecification</code>. It can take up to one hour for the change to fully process. Any additional <code>UpdateTimeToLive</code> calls for the same table during this one hour duration result in a <code>ValidationException</code>. </p> <p>TTL compares the current time in epoch time format to the time stored in the TTL attribute of an item. If the epoch time value stored in the attribute is less than the current time, the item is marked as expired and subsequently deleted.</p> <note> <p> The epoch time format is the number of seconds elapsed since 12:00:00 AM January 1, 1970 UTC. </p> </note> <p>DynamoDB deletes expired items on a best-effort basis to ensure availability of throughput for other data operations. </p> <important> <p>DynamoDB typically deletes expired items within two days of expiration. The exact duration within which an item gets deleted after expiration is specific to the nature of the workload. Items that have expired and not been deleted will still show up in reads, queries, and scans.</p> </important> <p>As items are deleted, they are removed from any local secondary index and global secondary index immediately in the same eventually consistent way as a standard delete operation.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/TTL.html">Time To Live</a> in the Amazon DynamoDB Developer Guide. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTimeToLiveRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateTimeToLiveInput;
use \OpenAPI\OpenAPI\Models\Shared\TimeToLiveSpecification;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTimeToLiveXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTimeToLiveRequest();
    $request->updateTimeToLiveInput = new UpdateTimeToLiveInput();
    $request->updateTimeToLiveInput->tableName = 'atque';
    $request->updateTimeToLiveInput->timeToLiveSpecification = new TimeToLiveSpecification();
    $request->updateTimeToLiveInput->timeToLiveSpecification->attributeName = 'et';
    $request->updateTimeToLiveInput->timeToLiveSpecification->enabled = false;
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'eveniet';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'nam';
    $request->xAmzTarget = UpdateTimeToLiveXAmzTargetEnum::DYNAMO_DB20120810_UPDATE_TIME_TO_LIVE;

    $response = $sdk->sdk->updateTimeToLive($request);

    if ($response->updateTimeToLiveOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
