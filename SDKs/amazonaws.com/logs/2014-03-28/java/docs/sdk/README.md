# SDK

## Overview

<p>You can use Amazon CloudWatch Logs to monitor, store, and access your log files from EC2 instances, CloudTrail, and other sources. You can then retrieve the associated log data from CloudWatch Logs using the CloudWatch console. Alternatively, you can use CloudWatch Logs commands in the Amazon Web Services CLI, CloudWatch Logs API, or CloudWatch Logs SDK.</p> <p>You can use CloudWatch Logs to:</p> <ul> <li> <p> <b>Monitor logs from EC2 instances in real time</b>: You can use CloudWatch Logs to monitor applications and systems using log data. For example, CloudWatch Logs can track the number of errors that occur in your application logs. Then, it can send you a notification whenever the rate of errors exceeds a threshold that you specify. CloudWatch Logs uses your log data for monitoring so no code changes are required. For example, you can monitor application logs for specific literal terms (such as "NullReferenceException"). You can also count the number of occurrences of a literal term at a particular position in log data (such as "404" status codes in an Apache access log). When the term you are searching for is found, CloudWatch Logs reports the data to a CloudWatch metric that you specify.</p> </li> <li> <p> <b>Monitor CloudTrail logged events</b>: You can create alarms in CloudWatch and receive notifications of particular API activity as captured by CloudTrail. You can use the notification to perform troubleshooting.</p> </li> <li> <p> <b>Archive log data</b>: You can use CloudWatch Logs to store your log data in highly durable storage. You can change the log retention setting so that any log events earlier than this setting are automatically deleted. The CloudWatch Logs agent helps to quickly send both rotated and non-rotated log data off of a host and into the log service. You can then access the raw log data when you need it.</p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/logs/>
### Available Operations

* [associateKmsKey](#associatekmskey) - <p>Associates the specified KMS key with the specified log group.</p> <p>Associating a KMS key with a log group overrides any existing associations between the log group and a KMS key. After a KMS key is associated with a log group, all newly ingested data for the log group is encrypted using the KMS key. This association is stored as long as the data encrypted with the KMS keyis still within CloudWatch Logs. This enables CloudWatch Logs to decrypt this data whenever it is requested.</p> <important> <p>CloudWatch Logs supports only symmetric KMS keys. Do not use an associate an asymmetric KMS key with your log group. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using Symmetric and Asymmetric Keys</a>.</p> </important> <p>It can take up to 5 minutes for this operation to take effect.</p> <p>If you attempt to associate a KMS key with a log group but the KMS key does not exist or the KMS key is disabled, you receive an <code>InvalidParameterException</code> error. </p>
* [cancelExportTask](#cancelexporttask) - <p>Cancels the specified export task.</p> <p>The task must be in the <code>PENDING</code> or <code>RUNNING</code> state.</p>
* [createExportTask](#createexporttask) - <p>Creates an export task so that you can efficiently export data from a log group to an Amazon S3 bucket. When you perform a <code>CreateExportTask</code> operation, you must use credentials that have permission to write to the S3 bucket that you specify as the destination.</p> <p>Exporting log data to S3 buckets that are encrypted by KMS is supported. Exporting log data to Amazon S3 buckets that have S3 Object Lock enabled with a retention period is also supported.</p> <p>Exporting to S3 buckets that are encrypted with AES-256 is supported. </p> <p>This is an asynchronous call. If all the required information is provided, this operation initiates an export task and responds with the ID of the task. After the task has started, you can use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeExportTasks.html">DescribeExportTasks</a> to get the status of the export task. Each account can only have one active (<code>RUNNING</code> or <code>PENDING</code>) export task at a time. To cancel an export task, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CancelExportTask.html">CancelExportTask</a>.</p> <p>You can export logs from multiple log groups or multiple time ranges to the same S3 bucket. To separate log data for each export task, specify a prefix to be used as the Amazon S3 key prefix for all exported objects.</p> <note> <p>Time-based sorting on chunks of log data inside an exported file is not guaranteed. You can sort the exported log field data by using Linux utilities.</p> </note>
* [createLogGroup](#createloggroup) - <p>Creates a log group with the specified name. You can create up to 20,000 log groups per account.</p> <p>You must use the following guidelines when naming a log group:</p> <ul> <li> <p>Log group names must be unique within a Region for an Amazon Web Services account.</p> </li> <li> <p>Log group names can be between 1 and 512 characters long.</p> </li> <li> <p>Log group names consist of the following characters: a-z, A-Z, 0-9, '_' (underscore), '-' (hyphen), '/' (forward slash), '.' (period), and '#' (number sign)</p> </li> </ul> <p>When you create a log group, by default the log events in the log group do not expire. To set a retention policy so that events expire and are deleted after a specified time, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutRetentionPolicy.html">PutRetentionPolicy</a>.</p> <p>If you associate an KMS key with the log group, ingested data is encrypted using the KMS key. This association is stored as long as the data encrypted with the KMS key is still within CloudWatch Logs. This enables CloudWatch Logs to decrypt this data whenever it is requested.</p> <p>If you attempt to associate a KMS key with the log group but the KMS keydoes not exist or the KMS key is disabled, you receive an <code>InvalidParameterException</code> error. </p> <important> <p>CloudWatch Logs supports only symmetric KMS keys. Do not associate an asymmetric KMS key with your log group. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using Symmetric and Asymmetric Keys</a>.</p> </important>
* [createLogStream](#createlogstream) - <p>Creates a log stream for the specified log group. A log stream is a sequence of log events that originate from a single source, such as an application instance or a resource that is being monitored.</p> <p>There is no limit on the number of log streams that you can create for a log group. There is a limit of 50 TPS on <code>CreateLogStream</code> operations, after which transactions are throttled.</p> <p>You must use the following guidelines when naming a log stream:</p> <ul> <li> <p>Log stream names must be unique within the log group.</p> </li> <li> <p>Log stream names can be between 1 and 512 characters long.</p> </li> <li> <p>Don't use ':' (colon) or '*' (asterisk) characters.</p> </li> </ul>
* [deleteDataProtectionPolicy](#deletedataprotectionpolicy) - <p>Deletes the data protection policy from the specified log group. </p> <p>For more information about data protection policies, see <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDataProtectionPolicy.html">PutDataProtectionPolicy</a>.</p>
* [deleteDestination](#deletedestination) - Deletes the specified destination, and eventually disables all the subscription filters that publish to it. This operation does not delete the physical resource encapsulated by the destination.
* [deleteLogGroup](#deleteloggroup) - Deletes the specified log group and permanently deletes all the archived log events associated with the log group.
* [deleteLogStream](#deletelogstream) - Deletes the specified log stream and permanently deletes all the archived log events associated with the log stream.
* [deleteMetricFilter](#deletemetricfilter) - Deletes the specified metric filter.
* [deleteQueryDefinition](#deletequerydefinition) - <p>Deletes a saved CloudWatch Logs Insights query definition. A query definition contains details about a saved CloudWatch Logs Insights query.</p> <p>Each <code>DeleteQueryDefinition</code> operation can delete one query definition.</p> <p>You must have the <code>logs:DeleteQueryDefinition</code> permission to be able to perform this operation.</p>
* [deleteResourcePolicy](#deleteresourcepolicy) - Deletes a resource policy from this account. This revokes the access of the identities in that policy to put log events to this account.
* [deleteRetentionPolicy](#deleteretentionpolicy) - <p>Deletes the specified retention policy.</p> <p>Log events do not expire if they belong to log groups without a retention policy.</p>
* [deleteSubscriptionFilter](#deletesubscriptionfilter) - Deletes the specified subscription filter.
* [describeDestinations](#describedestinations) - Lists all your destinations. The results are ASCII-sorted by destination name.
* [describeExportTasks](#describeexporttasks) - Lists the specified export tasks. You can list all your export tasks or filter the results based on task ID or task status.
* [describeLogGroups](#describeloggroups) - <p>Lists the specified log groups. You can list all your log groups or filter the results by prefix. The results are ASCII-sorted by log group name.</p> <p>CloudWatch Logs doesn’t support IAM policies that control access to the <code>DescribeLogGroups</code> action by using the <code>aws:ResourceTag/<i>key-name</i> </code> condition key. Other CloudWatch Logs actions do support the use of the <code>aws:ResourceTag/<i>key-name</i> </code> condition key to control access. For more information about using tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Controlling access to Amazon Web Services resources using tags</a>.</p> <p>If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account and view data from the linked source accounts. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p>
* [describeLogStreams](#describelogstreams) - <p>Lists the log streams for the specified log group. You can list all the log streams or filter the results by prefix. You can also control how the results are ordered.</p> <p>You can specify the log group to search by using either <code>logGroupIdentifier</code> or <code>logGroupName</code>. You must include one of these two parameters, but you can't include both. </p> <p>This operation has a limit of five transactions per second, after which transactions are throttled.</p> <p>If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account and view data from the linked source accounts. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p>
* [describeMetricFilters](#describemetricfilters) - Lists the specified metric filters. You can list all of the metric filters or filter the results by log name, prefix, metric name, or metric namespace. The results are ASCII-sorted by filter name.
* [describeQueries](#describequeries) - Returns a list of CloudWatch Logs Insights queries that are scheduled, running, or have been run recently in this account. You can request all queries or limit it to queries of a specific log group or queries with a certain status.
* [describeQueryDefinitions](#describequerydefinitions) - <p>This operation returns a paginated list of your saved CloudWatch Logs Insights query definitions.</p> <p>You can use the <code>queryDefinitionNamePrefix</code> parameter to limit the results to only the query definitions that have names that start with a certain string.</p>
* [describeResourcePolicies](#describeresourcepolicies) - Lists the resource policies in this account.
* [describeSubscriptionFilters](#describesubscriptionfilters) - Lists the subscription filters for the specified log group. You can list all the subscription filters or filter the results by prefix. The results are ASCII-sorted by filter name.
* [disassociateKmsKey](#disassociatekmskey) - <p>Disassociates the associated KMS key from the specified log group.</p> <p>After the KMS key is disassociated from the log group, CloudWatch Logs stops encrypting newly ingested data for the log group. All previously ingested data remains encrypted, and CloudWatch Logs requires permissions for the KMS key whenever the encrypted data is requested.</p> <p>Note that it can take up to 5 minutes for this operation to take effect.</p>
* [filterLogEvents](#filterlogevents) - <p>Lists log events from the specified log group. You can list all the log events or filter the results using a filter pattern, a time range, and the name of the log stream.</p> <p>You must have the <code>logs;FilterLogEvents</code> permission to perform this operation.</p> <p>You can specify the log group to search by using either <code>logGroupIdentifier</code> or <code>logGroupName</code>. You must include one of these two parameters, but you can't include both. </p> <p>By default, this operation returns as many log events as can fit in 1 MB (up to 10,000 log events) or all the events found within the specified time range. If the results include a token, that means there are more log events available. You can get additional results by specifying the token in a subsequent call. This operation can return empty results while there are more log events available through the token.</p> <p>The returned log events are sorted by event timestamp, the timestamp when the event was ingested by CloudWatch Logs, and the ID of the <code>PutLogEvents</code> request.</p> <p>If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account and view data from the linked source accounts. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p>
* [getDataProtectionPolicy](#getdataprotectionpolicy) - Returns information about a log group data protection policy.
* [getLogEvents](#getlogevents) - <p>Lists log events from the specified log stream. You can list all of the log events or filter using a time range.</p> <p>By default, this operation returns as many log events as can fit in a response size of 1MB (up to 10,000 log events). You can get additional log events by specifying one of the tokens in a subsequent call. This operation can return empty results while there are more log events available through the token.</p> <p>If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account and view data from the linked source accounts. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p> <p>You can specify the log group to search by using either <code>logGroupIdentifier</code> or <code>logGroupName</code>. You must include one of these two parameters, but you can't include both. </p>
* [getLogGroupFields](#getloggroupfields) - <p>Returns a list of the fields that are included in log events in the specified log group. Includes the percentage of log events that contain each field. The search is limited to a time period that you specify.</p> <p>You can specify the log group to search by using either <code>logGroupIdentifier</code> or <code>logGroupName</code>. You must specify one of these parameters, but you can't specify both. </p> <p>In the results, fields that start with <code>@</code> are fields generated by CloudWatch Logs. For example, <code>@timestamp</code> is the timestamp of each log event. For more information about the fields that are generated by CloudWatch logs, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_AnalyzeLogData-discoverable-fields.html">Supported Logs and Discovered Fields</a>.</p> <p>The response results are sorted by the frequency percentage, starting with the highest percentage.</p> <p>If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account and view data from the linked source accounts. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p>
* [getLogRecord](#getlogrecord) - <p>Retrieves all of the fields and values of a single log event. All fields are retrieved, even if the original query that produced the <code>logRecordPointer</code> retrieved only a subset of fields. Fields are returned as field name/field value pairs.</p> <p>The full unparsed log event is returned within <code>@message</code>.</p>
* [getQueryResults](#getqueryresults) - <p>Returns the results from the specified query.</p> <p>Only the fields requested in the query are returned, along with a <code>@ptr</code> field, which is the identifier for the log record. You can use the value of <code>@ptr</code> in a <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogRecord.html">GetLogRecord</a> operation to get the full log record.</p> <p> <code>GetQueryResults</code> does not start running a query. To run a query, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StartQuery.html">StartQuery</a>.</p> <p>If the value of the <code>Status</code> field in the output is <code>Running</code>, this operation returns only partial results. If you see a value of <code>Scheduled</code> or <code>Running</code> for the status, you can retry the operation later to see the final results. </p> <p>If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account to start queries in linked source accounts. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p>
* [listTagsForResource](#listtagsforresource) - Displays the tags associated with a CloudWatch Logs resource. Currently, log groups and destinations support tagging.
* [~~listTagsLogGroup~~](#listtagsloggroup) - <important> <p>The ListTagsLogGroup operation is on the path to deprecation. We recommend that you use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListTagsForResource.html">ListTagsForResource</a> instead.</p> </important> <p>Lists the tags for the specified log group.</p> :warning: **Deprecated**
* [putDataProtectionPolicy](#putdataprotectionpolicy) - <p>Creates a data protection policy for the specified log group. A data protection policy can help safeguard sensitive data that's ingested by the log group by auditing and masking the sensitive log data.</p> <important> <p>Sensitive data is detected and masked when it is ingested into the log group. When you set a data protection policy, log events ingested into the log group before that time are not masked.</p> </important> <p>By default, when a user views a log event that includes masked data, the sensitive data is replaced by asterisks. A user who has the <code>logs:Unmask</code> permission can use a <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogEvents.html">GetLogEvents</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_FilterLogEvents.html">FilterLogEvents</a> operation with the <code>unmask</code> parameter set to <code>true</code> to view the unmasked log events. Users with the <code>logs:Unmask</code> can also view unmasked data in the CloudWatch Logs console by running a CloudWatch Logs Insights query with the <code>unmask</code> query command.</p> <p>For more information, including a list of types of data that can be audited and masked, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/mask-sensitive-log-data.html">Protect sensitive log data with masking</a>.</p>
* [putDestination](#putdestination) - <p>Creates or updates a destination. This operation is used only to create destinations for cross-account subscriptions.</p> <p>A destination encapsulates a physical resource (such as an Amazon Kinesis stream). With a destination, you can subscribe to a real-time stream of log events for a different account, ingested using <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutLogEvents.html">PutLogEvents</a>.</p> <p>Through an access policy, a destination controls what is written to it. By default, <code>PutDestination</code> does not set any access policy with the destination, which means a cross-account user cannot call <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutSubscriptionFilter.html">PutSubscriptionFilter</a> against this destination. To enable this, the destination owner must call <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDestinationPolicy.html">PutDestinationPolicy</a> after <code>PutDestination</code>.</p> <p>To perform a <code>PutDestination</code> operation, you must also have the <code>iam:PassRole</code> permission.</p>
* [putDestinationPolicy](#putdestinationpolicy) - Creates or updates an access policy associated with an existing destination. An access policy is an <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies_overview.html">IAM policy document</a> that is used to authorize claims to register a subscription filter against a given destination.
* [putLogEvents](#putlogevents) - <p>Uploads a batch of log events to the specified log stream.</p> <important> <p>The sequence token is now ignored in <code>PutLogEvents</code> actions. <code>PutLogEvents</code> actions are always accepted and never return <code>InvalidSequenceTokenException</code> or <code>DataAlreadyAcceptedException</code> even if the sequence token is not valid. You can use parallel <code>PutLogEvents</code> actions on the same log stream. </p> </important> <p>The batch of events must satisfy the following constraints:</p> <ul> <li> <p>The maximum batch size is 1,048,576 bytes. This size is calculated as the sum of all event messages in UTF-8, plus 26 bytes for each log event.</p> </li> <li> <p>None of the log events in the batch can be more than 2 hours in the future.</p> </li> <li> <p>None of the log events in the batch can be more than 14 days in the past. Also, none of the log events can be from earlier than the retention period of the log group.</p> </li> <li> <p>The log events in the batch must be in chronological order by their timestamp. The timestamp is the time that the event occurred, expressed as the number of milliseconds after <code>Jan 1, 1970 00:00:00 UTC</code>. (In Amazon Web Services Tools for PowerShell and the Amazon Web Services SDK for .NET, the timestamp is specified in .NET format: <code>yyyy-mm-ddThh:mm:ss</code>. For example, <code>2017-09-15T13:45:30</code>.) </p> </li> <li> <p>A batch of log events in a single request cannot span more than 24 hours. Otherwise, the operation fails.</p> </li> <li> <p>The maximum number of log events in a batch is 10,000.</p> </li> <li> <important> <p>The quota of five requests per second per log stream has been removed. Instead, <code>PutLogEvents</code> actions are throttled based on a per-second per-account quota. You can request an increase to the per-second throttling quota by using the Service Quotas service.</p> </important> </li> </ul> <p>If a call to <code>PutLogEvents</code> returns "UnrecognizedClientException" the most likely cause is a non-valid Amazon Web Services access key ID or secret key. </p>
* [putMetricFilter](#putmetricfilter) - <p>Creates or updates a metric filter and associates it with the specified log group. With metric filters, you can configure rules to extract metric data from log events ingested through <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutLogEvents.html">PutLogEvents</a>.</p> <p>The maximum number of metric filters that can be associated with a log group is 100.</p> <p>When you create a metric filter, you can also optionally assign a unit and dimensions to the metric that is created.</p> <important> <p>Metrics extracted from log events are charged as custom metrics. To prevent unexpected high charges, do not specify high-cardinality fields such as <code>IPAddress</code> or <code>requestID</code> as dimensions. Each different value found for a dimension is treated as a separate metric and accrues charges as a separate custom metric. </p> <p>CloudWatch Logs disables a metric filter if it generates 1,000 different name/value pairs for your specified dimensions within a certain amount of time. This helps to prevent accidental high charges.</p> <p>You can also set up a billing alarm to alert you if your charges are higher than expected. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html"> Creating a Billing Alarm to Monitor Your Estimated Amazon Web Services Charges</a>. </p> </important>
* [putQueryDefinition](#putquerydefinition) - <p>Creates or updates a query definition for CloudWatch Logs Insights. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AnalyzingLogData.html">Analyzing Log Data with CloudWatch Logs Insights</a>.</p> <p>To update a query definition, specify its <code>queryDefinitionId</code> in your request. The values of <code>name</code>, <code>queryString</code>, and <code>logGroupNames</code> are changed to the values that you specify in your update operation. No current values are retained from the current query definition. For example, imagine updating a current query definition that includes log groups. If you don't specify the <code>logGroupNames</code> parameter in your update operation, the query definition changes to contain no log groups.</p> <p>You must have the <code>logs:PutQueryDefinition</code> permission to be able to perform this operation.</p>
* [putResourcePolicy](#putresourcepolicy) - Creates or updates a resource policy allowing other Amazon Web Services services to put log events to this account, such as Amazon Route 53. An account can have up to 10 resource policies per Amazon Web Services Region.
* [putRetentionPolicy](#putretentionpolicy) - <p>Sets the retention of the specified log group. With a retention policy, you can configure the number of days for which to retain log events in the specified log group.</p> <note> <p>CloudWatch Logs doesn’t immediately delete log events when they reach their retention setting. It typically takes up to 72 hours after that before log events are deleted, but in rare situations might take longer.</p> <p>To illustrate, imagine that you change a log group to have a longer retention setting when it contains log events that are past the expiration date, but haven’t been deleted. Those log events will take up to 72 hours to be deleted after the new retention date is reached. To make sure that log data is deleted permanently, keep a log group at its lower retention setting until 72 hours after the previous retention period ends. Alternatively, wait to change the retention setting until you confirm that the earlier log events are deleted. </p> </note>
* [putSubscriptionFilter](#putsubscriptionfilter) - <p>Creates or updates a subscription filter and associates it with the specified log group. With subscription filters, you can subscribe to a real-time stream of log events ingested through <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutLogEvents.html">PutLogEvents</a> and have them delivered to a specific destination. When log events are sent to the receiving service, they are Base64 encoded and compressed with the GZIP format.</p> <p>The following destinations are supported for subscription filters:</p> <ul> <li> <p>An Amazon Kinesis data stream belonging to the same account as the subscription filter, for same-account delivery.</p> </li> <li> <p>A logical destination that belongs to a different account, for cross-account delivery.</p> </li> <li> <p>An Amazon Kinesis Data Firehose delivery stream that belongs to the same account as the subscription filter, for same-account delivery.</p> </li> <li> <p>An Lambda function that belongs to the same account as the subscription filter, for same-account delivery.</p> </li> </ul> <p>Each log group can have up to two subscription filters associated with it. If you are updating an existing filter, you must specify the correct name in <code>filterName</code>. </p> <p>To perform a <code>PutSubscriptionFilter</code> operation, you must also have the <code>iam:PassRole</code> permission.</p>
* [startQuery](#startquery) - <p>Schedules a query of a log group using CloudWatch Logs Insights. You specify the log group and time range to query and the query string to use.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html">CloudWatch Logs Insights Query Syntax</a>.</p> <p>Queries time out after 15 minutes of runtime. If your queries are timing out, reduce the time range being searched or partition your query into a number of queries.</p> <p>If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account to start a query in a linked source account. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>. For a cross-account <code>StartQuery</code> operation, the query definition must be defined in the monitoring account.</p> <p>You can have up to 20 concurrent CloudWatch Logs insights queries, including queries that have been added to dashboards. </p>
* [stopQuery](#stopquery) - Stops a CloudWatch Logs Insights query that is in progress. If the query has already ended, the operation returns an error indicating that the specified query is not running.
* [~~tagLogGroup~~](#tagloggroup) - <important> <p>The TagLogGroup operation is on the path to deprecation. We recommend that you use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_TagResource.html">TagResource</a> instead.</p> </important> <p>Adds or updates the specified tags for the specified log group.</p> <p>To list the tags for a log group, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListTagsForResource.html">ListTagsForResource</a>. To remove tags, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UntagResource.html">UntagResource</a>.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Working-with-log-groups-and-streams.html#log-group-tagging">Tag Log Groups in Amazon CloudWatch Logs</a> in the <i>Amazon CloudWatch Logs User Guide</i>.</p> <p>CloudWatch Logs doesn’t support IAM policies that prevent users from assigning specified tags to log groups using the <code>aws:Resource/<i>key-name</i> </code> or <code>aws:TagKeys</code> condition keys. For more information about using tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Controlling access to Amazon Web Services resources using tags</a>.</p> :warning: **Deprecated**
* [tagResource](#tagresource) - <p>Assigns one or more tags (key-value pairs) to the specified CloudWatch Logs resource. Currently, the only CloudWatch Logs resources that can be tagged are log groups and destinations. </p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can use the <code>TagResource</code> action with a resource that already has tags. If you specify a new tag key for the alarm, this tag is appended to the list of tags associated with the alarm. If you specify a tag key that is already associated with the alarm, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a CloudWatch Logs resource.</p>
* [testMetricFilter](#testmetricfilter) - Tests the filter pattern of a metric filter against a sample of log event messages. You can use this operation to validate the correctness of a metric filter pattern.
* [~~untagLogGroup~~](#untagloggroup) - <important> <p>The UntagLogGroup operation is on the path to deprecation. We recommend that you use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UntagResource.html">UntagResource</a> instead.</p> </important> <p>Removes the specified tags from the specified log group.</p> <p>To list the tags for a log group, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListTagsForResource.html">ListTagsForResource</a>. To add tags, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_TagResource.html">TagResource</a>.</p> <p>CloudWatch Logs doesn’t support IAM policies that prevent users from assigning specified tags to log groups using the <code>aws:Resource/<i>key-name</i> </code> or <code>aws:TagKeys</code> condition keys. </p> :warning: **Deprecated**
* [untagResource](#untagresource) - Removes one or more tags from the specified resource.

## associateKmsKey

<p>Associates the specified KMS key with the specified log group.</p> <p>Associating a KMS key with a log group overrides any existing associations between the log group and a KMS key. After a KMS key is associated with a log group, all newly ingested data for the log group is encrypted using the KMS key. This association is stored as long as the data encrypted with the KMS keyis still within CloudWatch Logs. This enables CloudWatch Logs to decrypt this data whenever it is requested.</p> <important> <p>CloudWatch Logs supports only symmetric KMS keys. Do not use an associate an asymmetric KMS key with your log group. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using Symmetric and Asymmetric Keys</a>.</p> </important> <p>It can take up to 5 minutes for this operation to take effect.</p> <p>If you attempt to associate a KMS key with a log group but the KMS key does not exist or the KMS key is disabled, you receive an <code>InvalidParameterException</code> error. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateKmsKeyRequest;
import org.openapis.openapi.models.operations.AssociateKmsKeyResponse;
import org.openapis.openapi.models.operations.AssociateKmsKeyXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateKmsKeyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateKmsKeyRequest req = new AssociateKmsKeyRequest(                new AssociateKmsKeyRequest("suscipit", "iure");, AssociateKmsKeyXAmzTargetEnum.LOGS20140328_ASSOCIATE_KMS_KEY) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "ipsa";
                xAmzDate = "delectus";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "molestiae";
            }};            

            AssociateKmsKeyResponse res = sdk.sdk.associateKmsKey(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cancelExportTask

<p>Cancels the specified export task.</p> <p>The task must be in the <code>PENDING</code> or <code>RUNNING</code> state.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelExportTaskRequest;
import org.openapis.openapi.models.operations.CancelExportTaskResponse;
import org.openapis.openapi.models.operations.CancelExportTaskXAmzTargetEnum;
import org.openapis.openapi.models.shared.CancelExportTaskRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelExportTaskRequest req = new CancelExportTaskRequest(                new CancelExportTaskRequest("placeat");, CancelExportTaskXAmzTargetEnum.LOGS20140328_CANCEL_EXPORT_TASK) {{
                xAmzAlgorithm = "voluptatum";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "excepturi";
                xAmzDate = "nisi";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "temporibus";
                xAmzSignedHeaders = "ab";
            }};            

            CancelExportTaskResponse res = sdk.sdk.cancelExportTask(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createExportTask

<p>Creates an export task so that you can efficiently export data from a log group to an Amazon S3 bucket. When you perform a <code>CreateExportTask</code> operation, you must use credentials that have permission to write to the S3 bucket that you specify as the destination.</p> <p>Exporting log data to S3 buckets that are encrypted by KMS is supported. Exporting log data to Amazon S3 buckets that have S3 Object Lock enabled with a retention period is also supported.</p> <p>Exporting to S3 buckets that are encrypted with AES-256 is supported. </p> <p>This is an asynchronous call. If all the required information is provided, this operation initiates an export task and responds with the ID of the task. After the task has started, you can use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeExportTasks.html">DescribeExportTasks</a> to get the status of the export task. Each account can only have one active (<code>RUNNING</code> or <code>PENDING</code>) export task at a time. To cancel an export task, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CancelExportTask.html">CancelExportTask</a>.</p> <p>You can export logs from multiple log groups or multiple time ranges to the same S3 bucket. To separate log data for each export task, specify a prefix to be used as the Amazon S3 key prefix for all exported objects.</p> <note> <p>Time-based sorting on chunks of log data inside an exported file is not guaranteed. You can sort the exported log field data by using Linux utilities.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateExportTaskRequest;
import org.openapis.openapi.models.operations.CreateExportTaskResponse;
import org.openapis.openapi.models.operations.CreateExportTaskXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateExportTaskRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateExportTaskRequest req = new CreateExportTaskRequest(                new CreateExportTaskRequest("veritatis", 648172L, "perferendis", 368241L) {{
                                destinationPrefix = "repellendus";
                                logStreamNamePrefix = "sapiente";
                                taskName = "quo";
                            }};, CreateExportTaskXAmzTargetEnum.LOGS20140328_CREATE_EXPORT_TASK) {{
                xAmzAlgorithm = "odit";
                xAmzContentSha256 = "at";
                xAmzCredential = "at";
                xAmzDate = "maiores";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "quod";
                xAmzSignedHeaders = "quod";
            }};            

            CreateExportTaskResponse res = sdk.sdk.createExportTask(req);

            if (res.createExportTaskResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createLogGroup

<p>Creates a log group with the specified name. You can create up to 20,000 log groups per account.</p> <p>You must use the following guidelines when naming a log group:</p> <ul> <li> <p>Log group names must be unique within a Region for an Amazon Web Services account.</p> </li> <li> <p>Log group names can be between 1 and 512 characters long.</p> </li> <li> <p>Log group names consist of the following characters: a-z, A-Z, 0-9, '_' (underscore), '-' (hyphen), '/' (forward slash), '.' (period), and '#' (number sign)</p> </li> </ul> <p>When you create a log group, by default the log events in the log group do not expire. To set a retention policy so that events expire and are deleted after a specified time, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutRetentionPolicy.html">PutRetentionPolicy</a>.</p> <p>If you associate an KMS key with the log group, ingested data is encrypted using the KMS key. This association is stored as long as the data encrypted with the KMS key is still within CloudWatch Logs. This enables CloudWatch Logs to decrypt this data whenever it is requested.</p> <p>If you attempt to associate a KMS key with the log group but the KMS keydoes not exist or the KMS key is disabled, you receive an <code>InvalidParameterException</code> error. </p> <important> <p>CloudWatch Logs supports only symmetric KMS keys. Do not associate an asymmetric KMS key with your log group. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using Symmetric and Asymmetric Keys</a>.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateLogGroupRequest;
import org.openapis.openapi.models.operations.CreateLogGroupResponse;
import org.openapis.openapi.models.operations.CreateLogGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateLogGroupRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateLogGroupRequest req = new CreateLogGroupRequest(                new CreateLogGroupRequest("totam") {{
                                kmsKeyId = "porro";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("dicta", "nam");
                                    put("officia", "occaecati");
                                    put("fugit", "deleniti");
                                }};
                            }};, CreateLogGroupXAmzTargetEnum.LOGS20140328_CREATE_LOG_GROUP) {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "optio";
                xAmzCredential = "totam";
                xAmzDate = "beatae";
                xAmzSecurityToken = "commodi";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "modi";
            }};            

            CreateLogGroupResponse res = sdk.sdk.createLogGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createLogStream

<p>Creates a log stream for the specified log group. A log stream is a sequence of log events that originate from a single source, such as an application instance or a resource that is being monitored.</p> <p>There is no limit on the number of log streams that you can create for a log group. There is a limit of 50 TPS on <code>CreateLogStream</code> operations, after which transactions are throttled.</p> <p>You must use the following guidelines when naming a log stream:</p> <ul> <li> <p>Log stream names must be unique within the log group.</p> </li> <li> <p>Log stream names can be between 1 and 512 characters long.</p> </li> <li> <p>Don't use ':' (colon) or '*' (asterisk) characters.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateLogStreamRequest;
import org.openapis.openapi.models.operations.CreateLogStreamResponse;
import org.openapis.openapi.models.operations.CreateLogStreamXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateLogStreamRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateLogStreamRequest req = new CreateLogStreamRequest(                new CreateLogStreamRequest("impedit", "cum");, CreateLogStreamXAmzTargetEnum.LOGS20140328_CREATE_LOG_STREAM) {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "excepturi";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "ad";
                xAmzSignedHeaders = "natus";
            }};            

            CreateLogStreamResponse res = sdk.sdk.createLogStream(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDataProtectionPolicy

<p>Deletes the data protection policy from the specified log group. </p> <p>For more information about data protection policies, see <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDataProtectionPolicy.html">PutDataProtectionPolicy</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDataProtectionPolicyRequest;
import org.openapis.openapi.models.operations.DeleteDataProtectionPolicyResponse;
import org.openapis.openapi.models.operations.DeleteDataProtectionPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteDataProtectionPolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDataProtectionPolicyRequest req = new DeleteDataProtectionPolicyRequest(                new DeleteDataProtectionPolicyRequest("iste");, DeleteDataProtectionPolicyXAmzTargetEnum.LOGS20140328_DELETE_DATA_PROTECTION_POLICY) {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "natus";
                xAmzCredential = "laboriosam";
                xAmzDate = "hic";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "fuga";
                xAmzSignedHeaders = "in";
            }};            

            DeleteDataProtectionPolicyResponse res = sdk.sdk.deleteDataProtectionPolicy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDestination

Deletes the specified destination, and eventually disables all the subscription filters that publish to it. This operation does not delete the physical resource encapsulated by the destination.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDestinationRequest;
import org.openapis.openapi.models.operations.DeleteDestinationResponse;
import org.openapis.openapi.models.operations.DeleteDestinationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteDestinationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDestinationRequest req = new DeleteDestinationRequest(                new DeleteDestinationRequest("iste");, DeleteDestinationXAmzTargetEnum.LOGS20140328_DELETE_DESTINATION) {{
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "quidem";
                xAmzDate = "architecto";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "est";
            }};            

            DeleteDestinationResponse res = sdk.sdk.deleteDestination(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteLogGroup

Deletes the specified log group and permanently deletes all the archived log events associated with the log group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteLogGroupRequest;
import org.openapis.openapi.models.operations.DeleteLogGroupResponse;
import org.openapis.openapi.models.operations.DeleteLogGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteLogGroupRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteLogGroupRequest req = new DeleteLogGroupRequest(                new DeleteLogGroupRequest("laborum");, DeleteLogGroupXAmzTargetEnum.LOGS20140328_DELETE_LOG_GROUP) {{
                xAmzAlgorithm = "dolores";
                xAmzContentSha256 = "dolorem";
                xAmzCredential = "corporis";
                xAmzDate = "explicabo";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "omnis";
            }};            

            DeleteLogGroupResponse res = sdk.sdk.deleteLogGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteLogStream

Deletes the specified log stream and permanently deletes all the archived log events associated with the log stream.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteLogStreamRequest;
import org.openapis.openapi.models.operations.DeleteLogStreamResponse;
import org.openapis.openapi.models.operations.DeleteLogStreamXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteLogStreamRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteLogStreamRequest req = new DeleteLogStreamRequest(                new DeleteLogStreamRequest("minima", "excepturi");, DeleteLogStreamXAmzTargetEnum.LOGS20140328_DELETE_LOG_STREAM) {{
                xAmzAlgorithm = "accusantium";
                xAmzContentSha256 = "iure";
                xAmzCredential = "culpa";
                xAmzDate = "doloribus";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "mollitia";
            }};            

            DeleteLogStreamResponse res = sdk.sdk.deleteLogStream(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteMetricFilter

Deletes the specified metric filter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteMetricFilterRequest;
import org.openapis.openapi.models.operations.DeleteMetricFilterResponse;
import org.openapis.openapi.models.operations.DeleteMetricFilterXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteMetricFilterRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteMetricFilterRequest req = new DeleteMetricFilterRequest(                new DeleteMetricFilterRequest("culpa", "consequuntur");, DeleteMetricFilterXAmzTargetEnum.LOGS20140328_DELETE_METRIC_FILTER) {{
                xAmzAlgorithm = "repellat";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "occaecati";
                xAmzDate = "numquam";
                xAmzSecurityToken = "commodi";
                xAmzSignature = "quam";
                xAmzSignedHeaders = "molestiae";
            }};            

            DeleteMetricFilterResponse res = sdk.sdk.deleteMetricFilter(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteQueryDefinition

<p>Deletes a saved CloudWatch Logs Insights query definition. A query definition contains details about a saved CloudWatch Logs Insights query.</p> <p>Each <code>DeleteQueryDefinition</code> operation can delete one query definition.</p> <p>You must have the <code>logs:DeleteQueryDefinition</code> permission to be able to perform this operation.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteQueryDefinitionRequest;
import org.openapis.openapi.models.operations.DeleteQueryDefinitionResponse;
import org.openapis.openapi.models.operations.DeleteQueryDefinitionXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteQueryDefinitionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("velit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteQueryDefinitionRequest req = new DeleteQueryDefinitionRequest(                new DeleteQueryDefinitionRequest("error");, DeleteQueryDefinitionXAmzTargetEnum.LOGS20140328_DELETE_QUERY_DEFINITION) {{
                xAmzAlgorithm = "quia";
                xAmzContentSha256 = "quis";
                xAmzCredential = "vitae";
                xAmzDate = "laborum";
                xAmzSecurityToken = "animi";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "odit";
            }};            

            DeleteQueryDefinitionResponse res = sdk.sdk.deleteQueryDefinition(req);

            if (res.deleteQueryDefinitionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteResourcePolicy

Deletes a resource policy from this account. This revokes the access of the identities in that policy to put log events to this account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteResourcePolicyRequest;
import org.openapis.openapi.models.operations.DeleteResourcePolicyResponse;
import org.openapis.openapi.models.operations.DeleteResourcePolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteResourcePolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteResourcePolicyRequest req = new DeleteResourcePolicyRequest(                new DeleteResourcePolicyRequest() {{
                                policyName = "sequi";
                            }};, DeleteResourcePolicyXAmzTargetEnum.LOGS20140328_DELETE_RESOURCE_POLICY) {{
                xAmzAlgorithm = "tenetur";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "id";
                xAmzDate = "possimus";
                xAmzSecurityToken = "aut";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "error";
            }};            

            DeleteResourcePolicyResponse res = sdk.sdk.deleteResourcePolicy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRetentionPolicy

<p>Deletes the specified retention policy.</p> <p>Log events do not expire if they belong to log groups without a retention policy.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRetentionPolicyRequest;
import org.openapis.openapi.models.operations.DeleteRetentionPolicyResponse;
import org.openapis.openapi.models.operations.DeleteRetentionPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteRetentionPolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteRetentionPolicyRequest req = new DeleteRetentionPolicyRequest(                new DeleteRetentionPolicyRequest("laborum");, DeleteRetentionPolicyXAmzTargetEnum.LOGS20140328_DELETE_RETENTION_POLICY) {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "voluptatibus";
                xAmzDate = "vero";
                xAmzSecurityToken = "nihil";
                xAmzSignature = "praesentium";
                xAmzSignedHeaders = "voluptatibus";
            }};            

            DeleteRetentionPolicyResponse res = sdk.sdk.deleteRetentionPolicy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSubscriptionFilter

Deletes the specified subscription filter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSubscriptionFilterRequest;
import org.openapis.openapi.models.operations.DeleteSubscriptionFilterResponse;
import org.openapis.openapi.models.operations.DeleteSubscriptionFilterXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteSubscriptionFilterRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteSubscriptionFilterRequest req = new DeleteSubscriptionFilterRequest(                new DeleteSubscriptionFilterRequest("omnis", "voluptate");, DeleteSubscriptionFilterXAmzTargetEnum.LOGS20140328_DELETE_SUBSCRIPTION_FILTER) {{
                xAmzAlgorithm = "cum";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "doloremque";
                xAmzDate = "reprehenderit";
                xAmzSecurityToken = "ut";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "dicta";
            }};            

            DeleteSubscriptionFilterResponse res = sdk.sdk.deleteSubscriptionFilter(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeDestinations

Lists all your destinations. The results are ASCII-sorted by destination name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeDestinationsRequest;
import org.openapis.openapi.models.operations.DescribeDestinationsResponse;
import org.openapis.openapi.models.operations.DescribeDestinationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeDestinationsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeDestinationsRequest req = new DescribeDestinationsRequest(                new DescribeDestinationsRequest() {{
                                destinationNamePrefix = "dolore";
                                limit = 480894L;
                                nextToken = "dicta";
                            }};, DescribeDestinationsXAmzTargetEnum.LOGS20140328_DESCRIBE_DESTINATIONS) {{
                xAmzAlgorithm = "harum";
                xAmzContentSha256 = "enim";
                xAmzCredential = "accusamus";
                xAmzDate = "commodi";
                xAmzSecurityToken = "repudiandae";
                xAmzSignature = "quae";
                xAmzSignedHeaders = "ipsum";
                limit = "quidem";
                nextToken = "molestias";
            }};            

            DescribeDestinationsResponse res = sdk.sdk.describeDestinations(req);

            if (res.describeDestinationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeExportTasks

Lists the specified export tasks. You can list all your export tasks or filter the results based on task ID or task status.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeExportTasksRequest;
import org.openapis.openapi.models.operations.DescribeExportTasksResponse;
import org.openapis.openapi.models.operations.DescribeExportTasksXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeExportTasksRequest;
import org.openapis.openapi.models.shared.ExportTaskStatusCodeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeExportTasksRequest req = new DescribeExportTasksRequest(                new DescribeExportTasksRequest() {{
                                limit = 865103L;
                                nextToken = "modi";
                                statusCode = ExportTaskStatusCodeEnum.PENDING;
                                taskId = "rem";
                            }};, DescribeExportTasksXAmzTargetEnum.LOGS20140328_DESCRIBE_EXPORT_TASKS) {{
                xAmzAlgorithm = "voluptates";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "repudiandae";
                xAmzDate = "sint";
                xAmzSecurityToken = "veritatis";
                xAmzSignature = "itaque";
                xAmzSignedHeaders = "incidunt";
            }};            

            DescribeExportTasksResponse res = sdk.sdk.describeExportTasks(req);

            if (res.describeExportTasksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeLogGroups

<p>Lists the specified log groups. You can list all your log groups or filter the results by prefix. The results are ASCII-sorted by log group name.</p> <p>CloudWatch Logs doesn’t support IAM policies that control access to the <code>DescribeLogGroups</code> action by using the <code>aws:ResourceTag/<i>key-name</i> </code> condition key. Other CloudWatch Logs actions do support the use of the <code>aws:ResourceTag/<i>key-name</i> </code> condition key to control access. For more information about using tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Controlling access to Amazon Web Services resources using tags</a>.</p> <p>If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account and view data from the linked source accounts. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeLogGroupsRequest;
import org.openapis.openapi.models.operations.DescribeLogGroupsResponse;
import org.openapis.openapi.models.operations.DescribeLogGroupsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeLogGroupsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeLogGroupsRequest req = new DescribeLogGroupsRequest(                new DescribeLogGroupsRequest() {{
                                accountIdentifiers = new String[]{{
                                    add("est"),
                                }};
                                includeLinkedAccounts = false;
                                limit = 842342L;
                                logGroupNamePattern = "explicabo";
                                logGroupNamePrefix = "deserunt";
                                nextToken = "distinctio";
                            }};, DescribeLogGroupsXAmzTargetEnum.LOGS20140328_DESCRIBE_LOG_GROUPS) {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "labore";
                xAmzCredential = "modi";
                xAmzDate = "qui";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "cupiditate";
                xAmzSignedHeaders = "quos";
                limit = "perferendis";
                nextToken = "magni";
            }};            

            DescribeLogGroupsResponse res = sdk.sdk.describeLogGroups(req);

            if (res.describeLogGroupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeLogStreams

<p>Lists the log streams for the specified log group. You can list all the log streams or filter the results by prefix. You can also control how the results are ordered.</p> <p>You can specify the log group to search by using either <code>logGroupIdentifier</code> or <code>logGroupName</code>. You must include one of these two parameters, but you can't include both. </p> <p>This operation has a limit of five transactions per second, after which transactions are throttled.</p> <p>If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account and view data from the linked source accounts. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeLogStreamsRequest;
import org.openapis.openapi.models.operations.DescribeLogStreamsResponse;
import org.openapis.openapi.models.operations.DescribeLogStreamsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeLogStreamsRequest;
import org.openapis.openapi.models.shared.OrderByEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("assumenda") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeLogStreamsRequest req = new DescribeLogStreamsRequest(                new DescribeLogStreamsRequest() {{
                                descending = false;
                                limit = 369808L;
                                logGroupIdentifier = "alias";
                                logGroupName = "fugit";
                                logStreamNamePrefix = "dolorum";
                                nextToken = "excepturi";
                                orderBy = OrderByEnum.LOG_STREAM_NAME;
                            }};, DescribeLogStreamsXAmzTargetEnum.LOGS20140328_DESCRIBE_LOG_STREAMS) {{
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "tempore";
                xAmzCredential = "labore";
                xAmzDate = "delectus";
                xAmzSecurityToken = "eum";
                xAmzSignature = "non";
                xAmzSignedHeaders = "eligendi";
                limit = "sint";
                nextToken = "aliquid";
            }};            

            DescribeLogStreamsResponse res = sdk.sdk.describeLogStreams(req);

            if (res.describeLogStreamsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeMetricFilters

Lists the specified metric filters. You can list all of the metric filters or filter the results by log name, prefix, metric name, or metric namespace. The results are ASCII-sorted by filter name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeMetricFiltersRequest;
import org.openapis.openapi.models.operations.DescribeMetricFiltersResponse;
import org.openapis.openapi.models.operations.DescribeMetricFiltersXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeMetricFiltersRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeMetricFiltersRequest req = new DescribeMetricFiltersRequest(                new DescribeMetricFiltersRequest() {{
                                filterNamePrefix = "necessitatibus";
                                limit = 572252L;
                                logGroupName = "officia";
                                metricName = "dolor";
                                metricNamespace = "debitis";
                                nextToken = "a";
                            }};, DescribeMetricFiltersXAmzTargetEnum.LOGS20140328_DESCRIBE_METRIC_FILTERS) {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "in";
                xAmzCredential = "in";
                xAmzDate = "illum";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "rerum";
                xAmzSignedHeaders = "dicta";
                limit = "magnam";
                nextToken = "cumque";
            }};            

            DescribeMetricFiltersResponse res = sdk.sdk.describeMetricFilters(req);

            if (res.describeMetricFiltersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeQueries

Returns a list of CloudWatch Logs Insights queries that are scheduled, running, or have been run recently in this account. You can request all queries or limit it to queries of a specific log group or queries with a certain status.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeQueriesRequest;
import org.openapis.openapi.models.operations.DescribeQueriesResponse;
import org.openapis.openapi.models.operations.DescribeQueriesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeQueriesRequest;
import org.openapis.openapi.models.shared.QueryStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facere") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeQueriesRequest req = new DescribeQueriesRequest(                new DescribeQueriesRequest() {{
                                logGroupName = "ea";
                                maxResults = 396506L;
                                nextToken = "laborum";
                                status = QueryStatusEnum.UNKNOWN;
                            }};, DescribeQueriesXAmzTargetEnum.LOGS20140328_DESCRIBE_QUERIES) {{
                xAmzAlgorithm = "non";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "enim";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "provident";
            }};            

            DescribeQueriesResponse res = sdk.sdk.describeQueries(req);

            if (res.describeQueriesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeQueryDefinitions

<p>This operation returns a paginated list of your saved CloudWatch Logs Insights query definitions.</p> <p>You can use the <code>queryDefinitionNamePrefix</code> parameter to limit the results to only the query definitions that have names that start with a certain string.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeQueryDefinitionsRequest;
import org.openapis.openapi.models.operations.DescribeQueryDefinitionsResponse;
import org.openapis.openapi.models.operations.DescribeQueryDefinitionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeQueryDefinitionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeQueryDefinitionsRequest req = new DescribeQueryDefinitionsRequest(                new DescribeQueryDefinitionsRequest() {{
                                maxResults = 659669L;
                                nextToken = "blanditiis";
                                queryDefinitionNamePrefix = "deleniti";
                            }};, DescribeQueryDefinitionsXAmzTargetEnum.LOGS20140328_DESCRIBE_QUERY_DEFINITIONS) {{
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "amet";
                xAmzCredential = "deserunt";
                xAmzDate = "nisi";
                xAmzSecurityToken = "vel";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "omnis";
            }};            

            DescribeQueryDefinitionsResponse res = sdk.sdk.describeQueryDefinitions(req);

            if (res.describeQueryDefinitionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeResourcePolicies

Lists the resource policies in this account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeResourcePoliciesRequest;
import org.openapis.openapi.models.operations.DescribeResourcePoliciesResponse;
import org.openapis.openapi.models.operations.DescribeResourcePoliciesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeResourcePoliciesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeResourcePoliciesRequest req = new DescribeResourcePoliciesRequest(                new DescribeResourcePoliciesRequest() {{
                                limit = 19193L;
                                nextToken = "nihil";
                            }};, DescribeResourcePoliciesXAmzTargetEnum.LOGS20140328_DESCRIBE_RESOURCE_POLICIES) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "id";
                xAmzDate = "labore";
                xAmzSecurityToken = "labore";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "natus";
            }};            

            DescribeResourcePoliciesResponse res = sdk.sdk.describeResourcePolicies(req);

            if (res.describeResourcePoliciesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeSubscriptionFilters

Lists the subscription filters for the specified log group. You can list all the subscription filters or filter the results by prefix. The results are ASCII-sorted by filter name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeSubscriptionFiltersRequest;
import org.openapis.openapi.models.operations.DescribeSubscriptionFiltersResponse;
import org.openapis.openapi.models.operations.DescribeSubscriptionFiltersXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeSubscriptionFiltersRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeSubscriptionFiltersRequest req = new DescribeSubscriptionFiltersRequest(                new DescribeSubscriptionFiltersRequest("eum") {{
                                filterNamePrefix = "vero";
                                limit = 135474L;
                                nextToken = "architecto";
                            }};, DescribeSubscriptionFiltersXAmzTargetEnum.LOGS20140328_DESCRIBE_SUBSCRIPTION_FILTERS) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "et";
                xAmzCredential = "excepturi";
                xAmzDate = "ullam";
                xAmzSecurityToken = "provident";
                xAmzSignature = "quos";
                xAmzSignedHeaders = "sint";
                limit = "accusantium";
                nextToken = "mollitia";
            }};            

            DescribeSubscriptionFiltersResponse res = sdk.sdk.describeSubscriptionFilters(req);

            if (res.describeSubscriptionFiltersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateKmsKey

<p>Disassociates the associated KMS key from the specified log group.</p> <p>After the KMS key is disassociated from the log group, CloudWatch Logs stops encrypting newly ingested data for the log group. All previously ingested data remains encrypted, and CloudWatch Logs requires permissions for the KMS key whenever the encrypted data is requested.</p> <p>Note that it can take up to 5 minutes for this operation to take effect.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateKmsKeyRequest;
import org.openapis.openapi.models.operations.DisassociateKmsKeyResponse;
import org.openapis.openapi.models.operations.DisassociateKmsKeyXAmzTargetEnum;
import org.openapis.openapi.models.shared.DisassociateKmsKeyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateKmsKeyRequest req = new DisassociateKmsKeyRequest(                new DisassociateKmsKeyRequest("mollitia");, DisassociateKmsKeyXAmzTargetEnum.LOGS20140328_DISASSOCIATE_KMS_KEY) {{
                xAmzAlgorithm = "ad";
                xAmzContentSha256 = "eum";
                xAmzCredential = "dolor";
                xAmzDate = "necessitatibus";
                xAmzSecurityToken = "odit";
                xAmzSignature = "nemo";
                xAmzSignedHeaders = "quasi";
            }};            

            DisassociateKmsKeyResponse res = sdk.sdk.disassociateKmsKey(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## filterLogEvents

<p>Lists log events from the specified log group. You can list all the log events or filter the results using a filter pattern, a time range, and the name of the log stream.</p> <p>You must have the <code>logs;FilterLogEvents</code> permission to perform this operation.</p> <p>You can specify the log group to search by using either <code>logGroupIdentifier</code> or <code>logGroupName</code>. You must include one of these two parameters, but you can't include both. </p> <p>By default, this operation returns as many log events as can fit in 1 MB (up to 10,000 log events) or all the events found within the specified time range. If the results include a token, that means there are more log events available. You can get additional results by specifying the token in a subsequent call. This operation can return empty results while there are more log events available through the token.</p> <p>The returned log events are sorted by event timestamp, the timestamp when the event was ingested by CloudWatch Logs, and the ID of the <code>PutLogEvents</code> request.</p> <p>If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account and view data from the linked source accounts. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FilterLogEventsRequest;
import org.openapis.openapi.models.operations.FilterLogEventsResponse;
import org.openapis.openapi.models.operations.FilterLogEventsXAmzTargetEnum;
import org.openapis.openapi.models.shared.FilterLogEventsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            FilterLogEventsRequest req = new FilterLogEventsRequest(                new FilterLogEventsRequest() {{
                                endTime = 984043L;
                                filterPattern = "debitis";
                                interleaved = false;
                                limit = 260341L;
                                logGroupIdentifier = "maxime";
                                logGroupName = "deleniti";
                                logStreamNamePrefix = "facilis";
                                logStreamNames = new String[]{{
                                    add("architecto"),
                                    add("architecto"),
                                }};
                                nextToken = "repudiandae";
                                startTime = 352312L;
                                unmask = false;
                            }};, FilterLogEventsXAmzTargetEnum.LOGS20140328_FILTER_LOG_EVENTS) {{
                xAmzAlgorithm = "expedita";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "repellat";
                xAmzDate = "quibusdam";
                xAmzSecurityToken = "sed";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "pariatur";
                limit = "accusantium";
                nextToken = "consequuntur";
            }};            

            FilterLogEventsResponse res = sdk.sdk.filterLogEvents(req);

            if (res.filterLogEventsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDataProtectionPolicy

Returns information about a log group data protection policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDataProtectionPolicyRequest;
import org.openapis.openapi.models.operations.GetDataProtectionPolicyResponse;
import org.openapis.openapi.models.operations.GetDataProtectionPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetDataProtectionPolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDataProtectionPolicyRequest req = new GetDataProtectionPolicyRequest(                new GetDataProtectionPolicyRequest("natus");, GetDataProtectionPolicyXAmzTargetEnum.LOGS20140328_GET_DATA_PROTECTION_POLICY) {{
                xAmzAlgorithm = "magni";
                xAmzContentSha256 = "sunt";
                xAmzCredential = "quo";
                xAmzDate = "illum";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "maxime";
                xAmzSignedHeaders = "ea";
            }};            

            GetDataProtectionPolicyResponse res = sdk.sdk.getDataProtectionPolicy(req);

            if (res.getDataProtectionPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLogEvents

<p>Lists log events from the specified log stream. You can list all of the log events or filter using a time range.</p> <p>By default, this operation returns as many log events as can fit in a response size of 1MB (up to 10,000 log events). You can get additional log events by specifying one of the tokens in a subsequent call. This operation can return empty results while there are more log events available through the token.</p> <p>If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account and view data from the linked source accounts. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p> <p>You can specify the log group to search by using either <code>logGroupIdentifier</code> or <code>logGroupName</code>. You must include one of these two parameters, but you can't include both. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLogEventsRequest;
import org.openapis.openapi.models.operations.GetLogEventsResponse;
import org.openapis.openapi.models.operations.GetLogEventsXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetLogEventsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLogEventsRequest req = new GetLogEventsRequest(                new GetLogEventsRequest("odit") {{
                                endTime = 407183L;
                                limit = 33222L;
                                logGroupIdentifier = "ab";
                                logGroupName = "maiores";
                                nextToken = "quidem";
                                startFromHead = false;
                                startTime = 373291L;
                                unmask = false;
                            }};, GetLogEventsXAmzTargetEnum.LOGS20140328_GET_LOG_EVENTS) {{
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "autem";
                xAmzCredential = "nam";
                xAmzDate = "eaque";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "nemo";
                xAmzSignedHeaders = "voluptatibus";
                limit = "perferendis";
                nextToken = "fugiat";
            }};            

            GetLogEventsResponse res = sdk.sdk.getLogEvents(req);

            if (res.getLogEventsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLogGroupFields

<p>Returns a list of the fields that are included in log events in the specified log group. Includes the percentage of log events that contain each field. The search is limited to a time period that you specify.</p> <p>You can specify the log group to search by using either <code>logGroupIdentifier</code> or <code>logGroupName</code>. You must specify one of these parameters, but you can't specify both. </p> <p>In the results, fields that start with <code>@</code> are fields generated by CloudWatch Logs. For example, <code>@timestamp</code> is the timestamp of each log event. For more information about the fields that are generated by CloudWatch logs, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_AnalyzeLogData-discoverable-fields.html">Supported Logs and Discovered Fields</a>.</p> <p>The response results are sorted by the frequency percentage, starting with the highest percentage.</p> <p>If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account and view data from the linked source accounts. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLogGroupFieldsRequest;
import org.openapis.openapi.models.operations.GetLogGroupFieldsResponse;
import org.openapis.openapi.models.operations.GetLogGroupFieldsXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetLogGroupFieldsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLogGroupFieldsRequest req = new GetLogGroupFieldsRequest(                new GetLogGroupFieldsRequest() {{
                                logGroupIdentifier = "aut";
                                logGroupName = "cumque";
                                time = 359978L;
                            }};, GetLogGroupFieldsXAmzTargetEnum.LOGS20140328_GET_LOG_GROUP_FIELDS) {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "libero";
                xAmzCredential = "nobis";
                xAmzDate = "dolores";
                xAmzSecurityToken = "quis";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "dignissimos";
            }};            

            GetLogGroupFieldsResponse res = sdk.sdk.getLogGroupFields(req);

            if (res.getLogGroupFieldsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLogRecord

<p>Retrieves all of the fields and values of a single log event. All fields are retrieved, even if the original query that produced the <code>logRecordPointer</code> retrieved only a subset of fields. Fields are returned as field name/field value pairs.</p> <p>The full unparsed log event is returned within <code>@message</code>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLogRecordRequest;
import org.openapis.openapi.models.operations.GetLogRecordResponse;
import org.openapis.openapi.models.operations.GetLogRecordXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetLogRecordRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLogRecordRequest req = new GetLogRecordRequest(                new GetLogRecordRequest("quis") {{
                                unmask = false;
                            }};, GetLogRecordXAmzTargetEnum.LOGS20140328_GET_LOG_RECORD) {{
                xAmzAlgorithm = "nesciunt";
                xAmzContentSha256 = "eos";
                xAmzCredential = "perferendis";
                xAmzDate = "dolores";
                xAmzSecurityToken = "minus";
                xAmzSignature = "quam";
                xAmzSignedHeaders = "dolor";
            }};            

            GetLogRecordResponse res = sdk.sdk.getLogRecord(req);

            if (res.getLogRecordResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getQueryResults

<p>Returns the results from the specified query.</p> <p>Only the fields requested in the query are returned, along with a <code>@ptr</code> field, which is the identifier for the log record. You can use the value of <code>@ptr</code> in a <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogRecord.html">GetLogRecord</a> operation to get the full log record.</p> <p> <code>GetQueryResults</code> does not start running a query. To run a query, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StartQuery.html">StartQuery</a>.</p> <p>If the value of the <code>Status</code> field in the output is <code>Running</code>, this operation returns only partial results. If you see a value of <code>Scheduled</code> or <code>Running</code> for the status, you can retry the operation later to see the final results. </p> <p>If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account to start queries in linked source accounts. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQueryResultsRequest;
import org.openapis.openapi.models.operations.GetQueryResultsResponse;
import org.openapis.openapi.models.operations.GetQueryResultsXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetQueryResultsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetQueryResultsRequest req = new GetQueryResultsRequest(                new GetQueryResultsRequest("nostrum");, GetQueryResultsXAmzTargetEnum.LOGS20140328_GET_QUERY_RESULTS) {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "omnis";
                xAmzDate = "facilis";
                xAmzSecurityToken = "perspiciatis";
                xAmzSignature = "voluptatem";
                xAmzSignedHeaders = "porro";
            }};            

            GetQueryResultsResponse res = sdk.sdk.getQueryResults(req);

            if (res.getQueryResultsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Displays the tags associated with a CloudWatch Logs resource. Currently, log groups and destinations support tagging.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.operations.ListTagsForResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTagsForResourceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceRequest("blanditiis");, ListTagsForResourceXAmzTargetEnum.LOGS20140328_LIST_TAGS_FOR_RESOURCE) {{
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "eaque";
                xAmzCredential = "occaecati";
                xAmzDate = "rerum";
                xAmzSecurityToken = "adipisci";
                xAmzSignature = "asperiores";
                xAmzSignedHeaders = "earum";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~listTagsLogGroup~~

<important> <p>The ListTagsLogGroup operation is on the path to deprecation. We recommend that you use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListTagsForResource.html">ListTagsForResource</a> instead.</p> </important> <p>Lists the tags for the specified log group.</p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsLogGroupRequest;
import org.openapis.openapi.models.operations.ListTagsLogGroupResponse;
import org.openapis.openapi.models.operations.ListTagsLogGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTagsLogGroupRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsLogGroupRequest req = new ListTagsLogGroupRequest(                new ListTagsLogGroupRequest("iste");, ListTagsLogGroupXAmzTargetEnum.LOGS20140328_LIST_TAGS_LOG_GROUP) {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "pariatur";
                xAmzDate = "provident";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "delectus";
            }};            

            ListTagsLogGroupResponse res = sdk.sdk.listTagsLogGroup(req);

            if (res.listTagsLogGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putDataProtectionPolicy

<p>Creates a data protection policy for the specified log group. A data protection policy can help safeguard sensitive data that's ingested by the log group by auditing and masking the sensitive log data.</p> <important> <p>Sensitive data is detected and masked when it is ingested into the log group. When you set a data protection policy, log events ingested into the log group before that time are not masked.</p> </important> <p>By default, when a user views a log event that includes masked data, the sensitive data is replaced by asterisks. A user who has the <code>logs:Unmask</code> permission can use a <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogEvents.html">GetLogEvents</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_FilterLogEvents.html">FilterLogEvents</a> operation with the <code>unmask</code> parameter set to <code>true</code> to view the unmasked log events. Users with the <code>logs:Unmask</code> can also view unmasked data in the CloudWatch Logs console by running a CloudWatch Logs Insights query with the <code>unmask</code> query command.</p> <p>For more information, including a list of types of data that can be audited and masked, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/mask-sensitive-log-data.html">Protect sensitive log data with masking</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutDataProtectionPolicyRequest;
import org.openapis.openapi.models.operations.PutDataProtectionPolicyResponse;
import org.openapis.openapi.models.operations.PutDataProtectionPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.PutDataProtectionPolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quaerat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutDataProtectionPolicyRequest req = new PutDataProtectionPolicyRequest(                new PutDataProtectionPolicyRequest("quos", "aliquid");, PutDataProtectionPolicyXAmzTargetEnum.LOGS20140328_PUT_DATA_PROTECTION_POLICY) {{
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "dolorem";
                xAmzCredential = "dolor";
                xAmzDate = "qui";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "excepturi";
            }};            

            PutDataProtectionPolicyResponse res = sdk.sdk.putDataProtectionPolicy(req);

            if (res.putDataProtectionPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putDestination

<p>Creates or updates a destination. This operation is used only to create destinations for cross-account subscriptions.</p> <p>A destination encapsulates a physical resource (such as an Amazon Kinesis stream). With a destination, you can subscribe to a real-time stream of log events for a different account, ingested using <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutLogEvents.html">PutLogEvents</a>.</p> <p>Through an access policy, a destination controls what is written to it. By default, <code>PutDestination</code> does not set any access policy with the destination, which means a cross-account user cannot call <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutSubscriptionFilter.html">PutSubscriptionFilter</a> against this destination. To enable this, the destination owner must call <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDestinationPolicy.html">PutDestinationPolicy</a> after <code>PutDestination</code>.</p> <p>To perform a <code>PutDestination</code> operation, you must also have the <code>iam:PassRole</code> permission.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutDestinationRequest;
import org.openapis.openapi.models.operations.PutDestinationResponse;
import org.openapis.openapi.models.operations.PutDestinationXAmzTargetEnum;
import org.openapis.openapi.models.shared.PutDestinationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutDestinationRequest req = new PutDestinationRequest(                new PutDestinationRequest("voluptate", "dignissimos", "reiciendis") {{
                                tags = new java.util.HashMap<String, String>() {{
                                    put("dolorum", "numquam");
                                }};
                            }};, PutDestinationXAmzTargetEnum.LOGS20140328_PUT_DESTINATION) {{
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "ipsa";
                xAmzDate = "iure";
                xAmzSecurityToken = "odio";
                xAmzSignature = "quaerat";
                xAmzSignedHeaders = "accusamus";
            }};            

            PutDestinationResponse res = sdk.sdk.putDestination(req);

            if (res.putDestinationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putDestinationPolicy

Creates or updates an access policy associated with an existing destination. An access policy is an <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies_overview.html">IAM policy document</a> that is used to authorize claims to register a subscription filter against a given destination.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutDestinationPolicyRequest;
import org.openapis.openapi.models.operations.PutDestinationPolicyResponse;
import org.openapis.openapi.models.operations.PutDestinationPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.PutDestinationPolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutDestinationPolicyRequest req = new PutDestinationPolicyRequest(                new PutDestinationPolicyRequest("voluptatibus", "voluptas") {{
                                forceUpdate = false;
                            }};, PutDestinationPolicyXAmzTargetEnum.LOGS20140328_PUT_DESTINATION_POLICY) {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "eos";
                xAmzCredential = "atque";
                xAmzDate = "sit";
                xAmzSecurityToken = "fugiat";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "soluta";
            }};            

            PutDestinationPolicyResponse res = sdk.sdk.putDestinationPolicy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putLogEvents

<p>Uploads a batch of log events to the specified log stream.</p> <important> <p>The sequence token is now ignored in <code>PutLogEvents</code> actions. <code>PutLogEvents</code> actions are always accepted and never return <code>InvalidSequenceTokenException</code> or <code>DataAlreadyAcceptedException</code> even if the sequence token is not valid. You can use parallel <code>PutLogEvents</code> actions on the same log stream. </p> </important> <p>The batch of events must satisfy the following constraints:</p> <ul> <li> <p>The maximum batch size is 1,048,576 bytes. This size is calculated as the sum of all event messages in UTF-8, plus 26 bytes for each log event.</p> </li> <li> <p>None of the log events in the batch can be more than 2 hours in the future.</p> </li> <li> <p>None of the log events in the batch can be more than 14 days in the past. Also, none of the log events can be from earlier than the retention period of the log group.</p> </li> <li> <p>The log events in the batch must be in chronological order by their timestamp. The timestamp is the time that the event occurred, expressed as the number of milliseconds after <code>Jan 1, 1970 00:00:00 UTC</code>. (In Amazon Web Services Tools for PowerShell and the Amazon Web Services SDK for .NET, the timestamp is specified in .NET format: <code>yyyy-mm-ddThh:mm:ss</code>. For example, <code>2017-09-15T13:45:30</code>.) </p> </li> <li> <p>A batch of log events in a single request cannot span more than 24 hours. Otherwise, the operation fails.</p> </li> <li> <p>The maximum number of log events in a batch is 10,000.</p> </li> <li> <important> <p>The quota of five requests per second per log stream has been removed. Instead, <code>PutLogEvents</code> actions are throttled based on a per-second per-account quota. You can request an increase to the per-second throttling quota by using the Service Quotas service.</p> </important> </li> </ul> <p>If a call to <code>PutLogEvents</code> returns "UnrecognizedClientException" the most likely cause is a non-valid Amazon Web Services access key ID or secret key. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutLogEventsRequest;
import org.openapis.openapi.models.operations.PutLogEventsResponse;
import org.openapis.openapi.models.operations.PutLogEventsXAmzTargetEnum;
import org.openapis.openapi.models.shared.InputLogEvent;
import org.openapis.openapi.models.shared.PutLogEventsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutLogEventsRequest req = new PutLogEventsRequest(                new PutLogEventsRequest(                new org.openapis.openapi.models.shared.InputLogEvent[]{{
                                                add(new InputLogEvent("deleniti", 607045L) {{
                                                    message = "voluptate";
                                                    timestamp = 677082L;
                                                }}),
                                                add(new InputLogEvent("asperiores", 469497L) {{
                                                    message = "necessitatibus";
                                                    timestamp = 714697L;
                                                }}),
                                            }}, "ipsum", "voluptate") {{
                                sequenceToken = "id";
                            }};, PutLogEventsXAmzTargetEnum.LOGS20140328_PUT_LOG_EVENTS) {{
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "eius";
                xAmzCredential = "aspernatur";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "amet";
                xAmzSignature = "optio";
                xAmzSignedHeaders = "accusamus";
            }};            

            PutLogEventsResponse res = sdk.sdk.putLogEvents(req);

            if (res.putLogEventsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putMetricFilter

<p>Creates or updates a metric filter and associates it with the specified log group. With metric filters, you can configure rules to extract metric data from log events ingested through <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutLogEvents.html">PutLogEvents</a>.</p> <p>The maximum number of metric filters that can be associated with a log group is 100.</p> <p>When you create a metric filter, you can also optionally assign a unit and dimensions to the metric that is created.</p> <important> <p>Metrics extracted from log events are charged as custom metrics. To prevent unexpected high charges, do not specify high-cardinality fields such as <code>IPAddress</code> or <code>requestID</code> as dimensions. Each different value found for a dimension is treated as a separate metric and accrues charges as a separate custom metric. </p> <p>CloudWatch Logs disables a metric filter if it generates 1,000 different name/value pairs for your specified dimensions within a certain amount of time. This helps to prevent accidental high charges.</p> <p>You can also set up a billing alarm to alert you if your charges are higher than expected. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html"> Creating a Billing Alarm to Monitor Your Estimated Amazon Web Services Charges</a>. </p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutMetricFilterRequest;
import org.openapis.openapi.models.operations.PutMetricFilterResponse;
import org.openapis.openapi.models.operations.PutMetricFilterXAmzTargetEnum;
import org.openapis.openapi.models.shared.MetricTransformation;
import org.openapis.openapi.models.shared.PutMetricFilterRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StandardUnitEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutMetricFilterRequest req = new PutMetricFilterRequest(                new PutMetricFilterRequest("saepe", "suscipit", "deserunt",                 new org.openapis.openapi.models.shared.MetricTransformation[]{{
                                                add(new MetricTransformation("esse", "harum", "iusto") {{
                                                    defaultValue = 3246.83;
                                                    dimensions = new java.util.HashMap<String, String>() {{
                                                        put("totam", "similique");
                                                        put("alias", "at");
                                                        put("quaerat", "tempora");
                                                        put("vel", "quod");
                                                    }};
                                                    metricName = "officiis";
                                                    metricNamespace = "qui";
                                                    metricValue = "dolorum";
                                                    unit = StandardUnitEnum.COUNT_SECOND;
                                                }}),
                                                add(new MetricTransformation("neque", "sed", "vel") {{
                                                    defaultValue = 2155.07;
                                                    dimensions = new java.util.HashMap<String, String>() {{
                                                        put("tenetur", "amet");
                                                        put("tempore", "accusamus");
                                                        put("numquam", "enim");
                                                        put("dolorem", "sapiente");
                                                    }};
                                                    metricName = "totam";
                                                    metricNamespace = "nihil";
                                                    metricValue = "sit";
                                                    unit = StandardUnitEnum.TERABYTES_SECOND;
                                                }}),
                                                add(new MetricTransformation("soluta", "dicta", "laborum") {{
                                                    defaultValue = 7304.42;
                                                    dimensions = new java.util.HashMap<String, String>() {{
                                                        put("deserunt", "quam");
                                                        put("ipsum", "incidunt");
                                                    }};
                                                    metricName = "qui";
                                                    metricNamespace = "cupiditate";
                                                    metricValue = "maxime";
                                                    unit = StandardUnitEnum.GIGABITS_SECOND;
                                                }}),
                                            }});, PutMetricFilterXAmzTargetEnum.LOGS20140328_PUT_METRIC_FILTER) {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "incidunt";
                xAmzCredential = "aspernatur";
                xAmzDate = "dolores";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "aliquid";
            }};            

            PutMetricFilterResponse res = sdk.sdk.putMetricFilter(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putQueryDefinition

<p>Creates or updates a query definition for CloudWatch Logs Insights. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AnalyzingLogData.html">Analyzing Log Data with CloudWatch Logs Insights</a>.</p> <p>To update a query definition, specify its <code>queryDefinitionId</code> in your request. The values of <code>name</code>, <code>queryString</code>, and <code>logGroupNames</code> are changed to the values that you specify in your update operation. No current values are retained from the current query definition. For example, imagine updating a current query definition that includes log groups. If you don't specify the <code>logGroupNames</code> parameter in your update operation, the query definition changes to contain no log groups.</p> <p>You must have the <code>logs:PutQueryDefinition</code> permission to be able to perform this operation.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutQueryDefinitionRequest;
import org.openapis.openapi.models.operations.PutQueryDefinitionResponse;
import org.openapis.openapi.models.operations.PutQueryDefinitionXAmzTargetEnum;
import org.openapis.openapi.models.shared.PutQueryDefinitionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutQueryDefinitionRequest req = new PutQueryDefinitionRequest(                new PutQueryDefinitionRequest("molestias", "temporibus") {{
                                logGroupNames = new String[]{{
                                    add("neque"),
                                }};
                                queryDefinitionId = "fugit";
                            }};, PutQueryDefinitionXAmzTargetEnum.LOGS20140328_PUT_QUERY_DEFINITION) {{
                xAmzAlgorithm = "magni";
                xAmzContentSha256 = "odio";
                xAmzCredential = "sunt";
                xAmzDate = "ullam";
                xAmzSecurityToken = "nam";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "voluptatem";
            }};            

            PutQueryDefinitionResponse res = sdk.sdk.putQueryDefinition(req);

            if (res.putQueryDefinitionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putResourcePolicy

Creates or updates a resource policy allowing other Amazon Web Services services to put log events to this account, such as Amazon Route 53. An account can have up to 10 resource policies per Amazon Web Services Region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutResourcePolicyRequest;
import org.openapis.openapi.models.operations.PutResourcePolicyResponse;
import org.openapis.openapi.models.operations.PutResourcePolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.PutResourcePolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cumque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutResourcePolicyRequest req = new PutResourcePolicyRequest(                new PutResourcePolicyRequest() {{
                                policyDocument = "soluta";
                                policyName = "nobis";
                            }};, PutResourcePolicyXAmzTargetEnum.LOGS20140328_PUT_RESOURCE_POLICY) {{
                xAmzAlgorithm = "et";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "ipsum";
                xAmzDate = "veritatis";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "quos";
                xAmzSignedHeaders = "tempore";
            }};            

            PutResourcePolicyResponse res = sdk.sdk.putResourcePolicy(req);

            if (res.putResourcePolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putRetentionPolicy

<p>Sets the retention of the specified log group. With a retention policy, you can configure the number of days for which to retain log events in the specified log group.</p> <note> <p>CloudWatch Logs doesn’t immediately delete log events when they reach their retention setting. It typically takes up to 72 hours after that before log events are deleted, but in rare situations might take longer.</p> <p>To illustrate, imagine that you change a log group to have a longer retention setting when it contains log events that are past the expiration date, but haven’t been deleted. Those log events will take up to 72 hours to be deleted after the new retention date is reached. To make sure that log data is deleted permanently, keep a log group at its lower retention setting until 72 hours after the previous retention period ends. Alternatively, wait to change the retention setting until you confirm that the earlier log events are deleted. </p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutRetentionPolicyRequest;
import org.openapis.openapi.models.operations.PutRetentionPolicyResponse;
import org.openapis.openapi.models.operations.PutRetentionPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.PutRetentionPolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutRetentionPolicyRequest req = new PutRetentionPolicyRequest(                new PutRetentionPolicyRequest("aperiam", 961937L);, PutRetentionPolicyXAmzTargetEnum.LOGS20140328_PUT_RETENTION_POLICY) {{
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "dolore";
                xAmzCredential = "labore";
                xAmzDate = "adipisci";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "quae";
            }};            

            PutRetentionPolicyResponse res = sdk.sdk.putRetentionPolicy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putSubscriptionFilter

<p>Creates or updates a subscription filter and associates it with the specified log group. With subscription filters, you can subscribe to a real-time stream of log events ingested through <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutLogEvents.html">PutLogEvents</a> and have them delivered to a specific destination. When log events are sent to the receiving service, they are Base64 encoded and compressed with the GZIP format.</p> <p>The following destinations are supported for subscription filters:</p> <ul> <li> <p>An Amazon Kinesis data stream belonging to the same account as the subscription filter, for same-account delivery.</p> </li> <li> <p>A logical destination that belongs to a different account, for cross-account delivery.</p> </li> <li> <p>An Amazon Kinesis Data Firehose delivery stream that belongs to the same account as the subscription filter, for same-account delivery.</p> </li> <li> <p>An Lambda function that belongs to the same account as the subscription filter, for same-account delivery.</p> </li> </ul> <p>Each log group can have up to two subscription filters associated with it. If you are updating an existing filter, you must specify the correct name in <code>filterName</code>. </p> <p>To perform a <code>PutSubscriptionFilter</code> operation, you must also have the <code>iam:PassRole</code> permission.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutSubscriptionFilterRequest;
import org.openapis.openapi.models.operations.PutSubscriptionFilterResponse;
import org.openapis.openapi.models.operations.PutSubscriptionFilterXAmzTargetEnum;
import org.openapis.openapi.models.shared.DistributionEnum;
import org.openapis.openapi.models.shared.PutSubscriptionFilterRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutSubscriptionFilterRequest req = new PutSubscriptionFilterRequest(                new PutSubscriptionFilterRequest("quas", "itaque", "consequatur", "est") {{
                                distribution = DistributionEnum.BY_LOG_STREAM;
                                roleArn = "porro";
                            }};, PutSubscriptionFilterXAmzTargetEnum.LOGS20140328_PUT_SUBSCRIPTION_FILTER) {{
                xAmzAlgorithm = "doloribus";
                xAmzContentSha256 = "ut";
                xAmzCredential = "facilis";
                xAmzDate = "cupiditate";
                xAmzSecurityToken = "qui";
                xAmzSignature = "quae";
                xAmzSignedHeaders = "laudantium";
            }};            

            PutSubscriptionFilterResponse res = sdk.sdk.putSubscriptionFilter(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startQuery

<p>Schedules a query of a log group using CloudWatch Logs Insights. You specify the log group and time range to query and the query string to use.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html">CloudWatch Logs Insights Query Syntax</a>.</p> <p>Queries time out after 15 minutes of runtime. If your queries are timing out, reduce the time range being searched or partition your query into a number of queries.</p> <p>If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account to start a query in a linked source account. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>. For a cross-account <code>StartQuery</code> operation, the query definition must be defined in the monitoring account.</p> <p>You can have up to 20 concurrent CloudWatch Logs insights queries, including queries that have been added to dashboards. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartQueryRequest;
import org.openapis.openapi.models.operations.StartQueryResponse;
import org.openapis.openapi.models.operations.StartQueryXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartQueryRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartQueryRequest req = new StartQueryRequest(                new StartQueryRequest(580447L, "voluptatibus", 787542L) {{
                                limit = 876506L;
                                logGroupIdentifiers = new String[]{{
                                    add("quis"),
                                    add("ipsum"),
                                    add("delectus"),
                                }};
                                logGroupName = "voluptate";
                                logGroupNames = new String[]{{
                                    add("vero"),
                                }};
                            }};, StartQueryXAmzTargetEnum.LOGS20140328_START_QUERY) {{
                xAmzAlgorithm = "tenetur";
                xAmzContentSha256 = "dignissimos";
                xAmzCredential = "hic";
                xAmzDate = "distinctio";
                xAmzSecurityToken = "quod";
                xAmzSignature = "odio";
                xAmzSignedHeaders = "similique";
            }};            

            StartQueryResponse res = sdk.sdk.startQuery(req);

            if (res.startQueryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopQuery

Stops a CloudWatch Logs Insights query that is in progress. If the query has already ended, the operation returns an error indicating that the specified query is not running.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopQueryRequest;
import org.openapis.openapi.models.operations.StopQueryResponse;
import org.openapis.openapi.models.operations.StopQueryXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopQueryRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopQueryRequest req = new StopQueryRequest(                new StopQueryRequest("vero");, StopQueryXAmzTargetEnum.LOGS20140328_STOP_QUERY) {{
                xAmzAlgorithm = "ducimus";
                xAmzContentSha256 = "dolore";
                xAmzCredential = "quibusdam";
                xAmzDate = "illum";
                xAmzSecurityToken = "sequi";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "impedit";
            }};            

            StopQueryResponse res = sdk.sdk.stopQuery(req);

            if (res.stopQueryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~tagLogGroup~~

<important> <p>The TagLogGroup operation is on the path to deprecation. We recommend that you use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_TagResource.html">TagResource</a> instead.</p> </important> <p>Adds or updates the specified tags for the specified log group.</p> <p>To list the tags for a log group, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListTagsForResource.html">ListTagsForResource</a>. To remove tags, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UntagResource.html">UntagResource</a>.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Working-with-log-groups-and-streams.html#log-group-tagging">Tag Log Groups in Amazon CloudWatch Logs</a> in the <i>Amazon CloudWatch Logs User Guide</i>.</p> <p>CloudWatch Logs doesn’t support IAM policies that prevent users from assigning specified tags to log groups using the <code>aws:Resource/<i>key-name</i> </code> or <code>aws:TagKeys</code> condition keys. For more information about using tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Controlling access to Amazon Web Services resources using tags</a>.</p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagLogGroupRequest;
import org.openapis.openapi.models.operations.TagLogGroupResponse;
import org.openapis.openapi.models.operations.TagLogGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagLogGroupRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagLogGroupRequest req = new TagLogGroupRequest(                new TagLogGroupRequest("voluptatibus",                 new java.util.HashMap<String, String>() {{
                                                put("nulla", "fugit");
                                                put("porro", "maiores");
                                            }});, TagLogGroupXAmzTargetEnum.LOGS20140328_TAG_LOG_GROUP) {{
                xAmzAlgorithm = "doloribus";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "eligendi";
                xAmzDate = "ducimus";
                xAmzSecurityToken = "alias";
                xAmzSignature = "officia";
                xAmzSignedHeaders = "tempora";
            }};            

            TagLogGroupResponse res = sdk.sdk.tagLogGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

<p>Assigns one or more tags (key-value pairs) to the specified CloudWatch Logs resource. Currently, the only CloudWatch Logs resources that can be tagged are log groups and destinations. </p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can use the <code>TagResource</code> action with a resource that already has tags. If you specify a new tag key for the alarm, this tag is appended to the list of tags associated with the alarm. If you specify a tag key that is already associated with the alarm, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a CloudWatch Logs resource.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.operations.TagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequest("ea",                 new java.util.HashMap<String, String>() {{
                                                put("vel", "possimus");
                                            }});, TagResourceXAmzTargetEnum.LOGS20140328_TAG_RESOURCE) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "ratione";
                xAmzCredential = "ex";
                xAmzDate = "laudantium";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "maiores";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testMetricFilter

Tests the filter pattern of a metric filter against a sample of log event messages. You can use this operation to validate the correctness of a metric filter pattern.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestMetricFilterRequest;
import org.openapis.openapi.models.operations.TestMetricFilterResponse;
import org.openapis.openapi.models.operations.TestMetricFilterXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TestMetricFilterRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TestMetricFilterRequest req = new TestMetricFilterRequest(                new TestMetricFilterRequest("ex",                 new String[]{{
                                                add("excepturi"),
                                                add("voluptatibus"),
                                                add("nostrum"),
                                                add("sapiente"),
                                            }});, TestMetricFilterXAmzTargetEnum.LOGS20140328_TEST_METRIC_FILTER) {{
                xAmzAlgorithm = "quisquam";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "ea";
                xAmzDate = "impedit";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "veniam";
                xAmzSignedHeaders = "aliquid";
            }};            

            TestMetricFilterResponse res = sdk.sdk.testMetricFilter(req);

            if (res.testMetricFilterResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~untagLogGroup~~

<important> <p>The UntagLogGroup operation is on the path to deprecation. We recommend that you use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UntagResource.html">UntagResource</a> instead.</p> </important> <p>Removes the specified tags from the specified log group.</p> <p>To list the tags for a log group, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListTagsForResource.html">ListTagsForResource</a>. To add tags, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_TagResource.html">TagResource</a>.</p> <p>CloudWatch Logs doesn’t support IAM policies that prevent users from assigning specified tags to log groups using the <code>aws:Resource/<i>key-name</i> </code> or <code>aws:TagKeys</code> condition keys. </p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagLogGroupRequest;
import org.openapis.openapi.models.operations.UntagLogGroupResponse;
import org.openapis.openapi.models.operations.UntagLogGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UntagLogGroupRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("inventore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagLogGroupRequest req = new UntagLogGroupRequest(                new UntagLogGroupRequest("magnam",                 new String[]{{
                                                add("quo"),
                                                add("consectetur"),
                                            }});, UntagLogGroupXAmzTargetEnum.LOGS20140328_UNTAG_LOG_GROUP) {{
                xAmzAlgorithm = "recusandae";
                xAmzContentSha256 = "aspernatur";
                xAmzCredential = "minima";
                xAmzDate = "eaque";
                xAmzSecurityToken = "a";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "aut";
            }};            

            UntagLogGroupResponse res = sdk.sdk.untagLogGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Removes one or more tags from the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.operations.UntagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UntagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequest("deleniti",                 new String[]{{
                                                add("aliquam"),
                                                add("fugit"),
                                                add("accusamus"),
                                                add("inventore"),
                                            }});, UntagResourceXAmzTargetEnum.LOGS20140328_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "non";
                xAmzContentSha256 = "et";
                xAmzCredential = "dolorum";
                xAmzDate = "laborum";
                xAmzSecurityToken = "placeat";
                xAmzSignature = "velit";
                xAmzSignedHeaders = "eum";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
