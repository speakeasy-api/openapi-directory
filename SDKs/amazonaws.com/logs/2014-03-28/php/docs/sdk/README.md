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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateKmsKeyRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateKmsKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateKmsKeyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateKmsKeyRequest();
    $request->associateKmsKeyRequest = new AssociateKmsKeyRequest();
    $request->associateKmsKeyRequest->kmsKeyId = 'error';
    $request->associateKmsKeyRequest->logGroupName = 'deserunt';
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'tempora';
    $request->xAmzTarget = AssociateKmsKeyXAmzTargetEnum::LOGS20140328_ASSOCIATE_KMS_KEY;

    $response = $sdk->sdk->associateKmsKey($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cancelExportTask

<p>Cancels the specified export task.</p> <p>The task must be in the <code>PENDING</code> or <code>RUNNING</code> state.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelExportTaskRequest;
use \OpenAPI\OpenAPI\Models\Shared\CancelExportTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\CancelExportTaskXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelExportTaskRequest();
    $request->cancelExportTaskRequest = new CancelExportTaskRequest();
    $request->cancelExportTaskRequest->taskId = 'suscipit';
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'minus';
    $request->xAmzCredential = 'placeat';
    $request->xAmzDate = 'voluptatum';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'nisi';
    $request->xAmzTarget = CancelExportTaskXAmzTargetEnum::LOGS20140328_CANCEL_EXPORT_TASK;

    $response = $sdk->sdk->cancelExportTask($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createExportTask

<p>Creates an export task so that you can efficiently export data from a log group to an Amazon S3 bucket. When you perform a <code>CreateExportTask</code> operation, you must use credentials that have permission to write to the S3 bucket that you specify as the destination.</p> <p>Exporting log data to S3 buckets that are encrypted by KMS is supported. Exporting log data to Amazon S3 buckets that have S3 Object Lock enabled with a retention period is also supported.</p> <p>Exporting to S3 buckets that are encrypted with AES-256 is supported. </p> <p>This is an asynchronous call. If all the required information is provided, this operation initiates an export task and responds with the ID of the task. After the task has started, you can use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeExportTasks.html">DescribeExportTasks</a> to get the status of the export task. Each account can only have one active (<code>RUNNING</code> or <code>PENDING</code>) export task at a time. To cancel an export task, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CancelExportTask.html">CancelExportTask</a>.</p> <p>You can export logs from multiple log groups or multiple time ranges to the same S3 bucket. To separate log data for each export task, specify a prefix to be used as the Amazon S3 key prefix for all exported objects.</p> <note> <p>Time-based sorting on chunks of log data inside an exported file is not guaranteed. You can sort the exported log field data by using Linux utilities.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateExportTaskRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateExportTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateExportTaskXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateExportTaskRequest();
    $request->createExportTaskRequest = new CreateExportTaskRequest();
    $request->createExportTaskRequest->destination = 'recusandae';
    $request->createExportTaskRequest->destinationPrefix = 'temporibus';
    $request->createExportTaskRequest->from = 71036;
    $request->createExportTaskRequest->logGroupName = 'quis';
    $request->createExportTaskRequest->logStreamNamePrefix = 'veritatis';
    $request->createExportTaskRequest->taskName = 'deserunt';
    $request->createExportTaskRequest->to = 20218;
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'repellendus';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'odit';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'at';
    $request->xAmzTarget = CreateExportTaskXAmzTargetEnum::LOGS20140328_CREATE_EXPORT_TASK;

    $response = $sdk->sdk->createExportTask($request);

    if ($response->createExportTaskResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createLogGroup

<p>Creates a log group with the specified name. You can create up to 20,000 log groups per account.</p> <p>You must use the following guidelines when naming a log group:</p> <ul> <li> <p>Log group names must be unique within a Region for an Amazon Web Services account.</p> </li> <li> <p>Log group names can be between 1 and 512 characters long.</p> </li> <li> <p>Log group names consist of the following characters: a-z, A-Z, 0-9, '_' (underscore), '-' (hyphen), '/' (forward slash), '.' (period), and '#' (number sign)</p> </li> </ul> <p>When you create a log group, by default the log events in the log group do not expire. To set a retention policy so that events expire and are deleted after a specified time, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutRetentionPolicy.html">PutRetentionPolicy</a>.</p> <p>If you associate an KMS key with the log group, ingested data is encrypted using the KMS key. This association is stored as long as the data encrypted with the KMS key is still within CloudWatch Logs. This enables CloudWatch Logs to decrypt this data whenever it is requested.</p> <p>If you attempt to associate a KMS key with the log group but the KMS keydoes not exist or the KMS key is disabled, you receive an <code>InvalidParameterException</code> error. </p> <important> <p>CloudWatch Logs supports only symmetric KMS keys. Do not associate an asymmetric KMS key with your log group. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using Symmetric and Asymmetric Keys</a>.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateLogGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateLogGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateLogGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateLogGroupRequest();
    $request->createLogGroupRequest = new CreateLogGroupRequest();
    $request->createLogGroupRequest->kmsKeyId = 'maiores';
    $request->createLogGroupRequest->logGroupName = 'molestiae';
    $request->createLogGroupRequest->tags = [
        'quod' => 'esse',
        'totam' => 'porro',
        'dolorum' => 'dicta',
        'nam' => 'officia',
    ];
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'optio';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'beatae';
    $request->xAmzTarget = CreateLogGroupXAmzTargetEnum::LOGS20140328_CREATE_LOG_GROUP;

    $response = $sdk->sdk->createLogGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createLogStream

<p>Creates a log stream for the specified log group. A log stream is a sequence of log events that originate from a single source, such as an application instance or a resource that is being monitored.</p> <p>There is no limit on the number of log streams that you can create for a log group. There is a limit of 50 TPS on <code>CreateLogStream</code> operations, after which transactions are throttled.</p> <p>You must use the following guidelines when naming a log stream:</p> <ul> <li> <p>Log stream names must be unique within the log group.</p> </li> <li> <p>Log stream names can be between 1 and 512 characters long.</p> </li> <li> <p>Don't use ':' (colon) or '*' (asterisk) characters.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateLogStreamRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateLogStreamRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateLogStreamXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateLogStreamRequest();
    $request->createLogStreamRequest = new CreateLogStreamRequest();
    $request->createLogStreamRequest->logGroupName = 'commodi';
    $request->createLogStreamRequest->logStreamName = 'molestiae';
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'impedit';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->xAmzTarget = CreateLogStreamXAmzTargetEnum::LOGS20140328_CREATE_LOG_STREAM;

    $response = $sdk->sdk->createLogStream($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDataProtectionPolicy

<p>Deletes the data protection policy from the specified log group. </p> <p>For more information about data protection policies, see <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDataProtectionPolicy.html">PutDataProtectionPolicy</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDataProtectionPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteDataProtectionPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDataProtectionPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDataProtectionPolicyRequest();
    $request->deleteDataProtectionPolicyRequest = new DeleteDataProtectionPolicyRequest();
    $request->deleteDataProtectionPolicyRequest->logGroupIdentifier = 'aspernatur';
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'sed';
    $request->xAmzSecurityToken = 'iste';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'natus';
    $request->xAmzTarget = DeleteDataProtectionPolicyXAmzTargetEnum::LOGS20140328_DELETE_DATA_PROTECTION_POLICY;

    $response = $sdk->sdk->deleteDataProtectionPolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDestination

Deletes the specified destination, and eventually disables all the subscription filters that publish to it. This operation does not delete the physical resource encapsulated by the destination.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDestinationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteDestinationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDestinationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDestinationRequest();
    $request->deleteDestinationRequest = new DeleteDestinationRequest();
    $request->deleteDestinationRequest->destinationName = 'laboriosam';
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'fuga';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'iste';
    $request->xAmzSignedHeaders = 'iure';
    $request->xAmzTarget = DeleteDestinationXAmzTargetEnum::LOGS20140328_DELETE_DESTINATION;

    $response = $sdk->sdk->deleteDestination($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteLogGroup

Deletes the specified log group and permanently deletes all the archived log events associated with the log group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLogGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteLogGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLogGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteLogGroupRequest();
    $request->deleteLogGroupRequest = new DeleteLogGroupRequest();
    $request->deleteLogGroupRequest->logGroupName = 'saepe';
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'est';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'laborum';
    $request->xAmzTarget = DeleteLogGroupXAmzTargetEnum::LOGS20140328_DELETE_LOG_GROUP;

    $response = $sdk->sdk->deleteLogGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteLogStream

Deletes the specified log stream and permanently deletes all the archived log events associated with the log stream.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLogStreamRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteLogStreamRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLogStreamXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteLogStreamRequest();
    $request->deleteLogStreamRequest = new DeleteLogStreamRequest();
    $request->deleteLogStreamRequest->logGroupName = 'dolores';
    $request->deleteLogStreamRequest->logStreamName = 'dolorem';
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'explicabo';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'nemo';
    $request->xAmzSignedHeaders = 'minima';
    $request->xAmzTarget = DeleteLogStreamXAmzTargetEnum::LOGS20140328_DELETE_LOG_STREAM;

    $response = $sdk->sdk->deleteLogStream($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteMetricFilter

Deletes the specified metric filter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMetricFilterRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteMetricFilterRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMetricFilterXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteMetricFilterRequest();
    $request->deleteMetricFilterRequest = new DeleteMetricFilterRequest();
    $request->deleteMetricFilterRequest->filterName = 'excepturi';
    $request->deleteMetricFilterRequest->logGroupName = 'accusantium';
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'culpa';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'dolorem';
    $request->xAmzTarget = DeleteMetricFilterXAmzTargetEnum::LOGS20140328_DELETE_METRIC_FILTER;

    $response = $sdk->sdk->deleteMetricFilter($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteQueryDefinition

<p>Deletes a saved CloudWatch Logs Insights query definition. A query definition contains details about a saved CloudWatch Logs Insights query.</p> <p>Each <code>DeleteQueryDefinition</code> operation can delete one query definition.</p> <p>You must have the <code>logs:DeleteQueryDefinition</code> permission to be able to perform this operation.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteQueryDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteQueryDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteQueryDefinitionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteQueryDefinitionRequest();
    $request->deleteQueryDefinitionRequest = new DeleteQueryDefinitionRequest();
    $request->deleteQueryDefinitionRequest->queryDefinitionId = 'culpa';
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'repellat';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'numquam';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'quam';
    $request->xAmzTarget = DeleteQueryDefinitionXAmzTargetEnum::LOGS20140328_DELETE_QUERY_DEFINITION;

    $response = $sdk->sdk->deleteQueryDefinition($request);

    if ($response->deleteQueryDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteResourcePolicy

Deletes a resource policy from this account. This revokes the access of the identities in that policy to put log events to this account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteResourcePolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteResourcePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteResourcePolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteResourcePolicyRequest();
    $request->deleteResourcePolicyRequest = new DeleteResourcePolicyRequest();
    $request->deleteResourcePolicyRequest->policyName = 'molestiae';
    $request->xAmzAlgorithm = 'velit';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'quia';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'vitae';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'animi';
    $request->xAmzTarget = DeleteResourcePolicyXAmzTargetEnum::LOGS20140328_DELETE_RESOURCE_POLICY;

    $response = $sdk->sdk->deleteResourcePolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRetentionPolicy

<p>Deletes the specified retention policy.</p> <p>Log events do not expire if they belong to log groups without a retention policy.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRetentionPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteRetentionPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRetentionPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRetentionPolicyRequest();
    $request->deleteRetentionPolicyRequest = new DeleteRetentionPolicyRequest();
    $request->deleteRetentionPolicyRequest->logGroupName = 'enim';
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'sequi';
    $request->xAmzDate = 'tenetur';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'possimus';
    $request->xAmzTarget = DeleteRetentionPolicyXAmzTargetEnum::LOGS20140328_DELETE_RETENTION_POLICY;

    $response = $sdk->sdk->deleteRetentionPolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSubscriptionFilter

Deletes the specified subscription filter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSubscriptionFilterRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteSubscriptionFilterRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSubscriptionFilterXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSubscriptionFilterRequest();
    $request->deleteSubscriptionFilterRequest = new DeleteSubscriptionFilterRequest();
    $request->deleteSubscriptionFilterRequest->filterName = 'aut';
    $request->deleteSubscriptionFilterRequest->logGroupName = 'quasi';
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'vero';
    $request->xAmzTarget = DeleteSubscriptionFilterXAmzTargetEnum::LOGS20140328_DELETE_SUBSCRIPTION_FILTER;

    $response = $sdk->sdk->deleteSubscriptionFilter($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeDestinations

Lists all your destinations. The results are ASCII-sorted by destination name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDestinationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeDestinationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDestinationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDestinationsRequest();
    $request->describeDestinationsRequest = new DescribeDestinationsRequest();
    $request->describeDestinationsRequest->destinationNamePrefix = 'nihil';
    $request->describeDestinationsRequest->limit = 509624;
    $request->describeDestinationsRequest->nextToken = 'voluptatibus';
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'doloremque';
    $request->xAmzSignedHeaders = 'reprehenderit';
    $request->xAmzTarget = DescribeDestinationsXAmzTargetEnum::LOGS20140328_DESCRIBE_DESTINATIONS;
    $request->limit = 'ut';
    $request->nextToken = 'maiores';

    $response = $sdk->sdk->describeDestinations($request);

    if ($response->describeDestinationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeExportTasks

Lists the specified export tasks. You can list all your export tasks or filter the results based on task ID or task status.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeExportTasksRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeExportTasksRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExportTaskStatusCodeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeExportTasksXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeExportTasksRequest();
    $request->describeExportTasksRequest = new DescribeExportTasksRequest();
    $request->describeExportTasksRequest->limit = 120196;
    $request->describeExportTasksRequest->nextToken = 'corporis';
    $request->describeExportTasksRequest->statusCode = ExportTaskStatusCodeEnum::COMPLETED;
    $request->describeExportTasksRequest->taskId = 'iusto';
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'harum';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'repudiandae';
    $request->xAmzSignedHeaders = 'quae';
    $request->xAmzTarget = DescribeExportTasksXAmzTargetEnum::LOGS20140328_DESCRIBE_EXPORT_TASKS;

    $response = $sdk->sdk->describeExportTasks($request);

    if ($response->describeExportTasksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeLogGroups

<p>Lists the specified log groups. You can list all your log groups or filter the results by prefix. The results are ASCII-sorted by log group name.</p> <p>CloudWatch Logs doesn’t support IAM policies that control access to the <code>DescribeLogGroups</code> action by using the <code>aws:ResourceTag/<i>key-name</i> </code> condition key. Other CloudWatch Logs actions do support the use of the <code>aws:ResourceTag/<i>key-name</i> </code> condition key to control access. For more information about using tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Controlling access to Amazon Web Services resources using tags</a>.</p> <p>If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account and view data from the linked source accounts. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeLogGroupsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeLogGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeLogGroupsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeLogGroupsRequest();
    $request->describeLogGroupsRequest = new DescribeLogGroupsRequest();
    $request->describeLogGroupsRequest->accountIdentifiers = [
        'quidem',
    ];
    $request->describeLogGroupsRequest->includeLinkedAccounts = false;
    $request->describeLogGroupsRequest->limit = 565189;
    $request->describeLogGroupsRequest->logGroupNamePattern = 'excepturi';
    $request->describeLogGroupsRequest->logGroupNamePrefix = 'pariatur';
    $request->describeLogGroupsRequest->nextToken = 'modi';
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'rem';
    $request->xAmzCredential = 'voluptates';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'repudiandae';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'veritatis';
    $request->xAmzTarget = DescribeLogGroupsXAmzTargetEnum::LOGS20140328_DESCRIBE_LOG_GROUPS;
    $request->limit = 'itaque';
    $request->nextToken = 'incidunt';

    $response = $sdk->sdk->describeLogGroups($request);

    if ($response->describeLogGroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeLogStreams

<p>Lists the log streams for the specified log group. You can list all the log streams or filter the results by prefix. You can also control how the results are ordered.</p> <p>You can specify the log group to search by using either <code>logGroupIdentifier</code> or <code>logGroupName</code>. You must include one of these two parameters, but you can't include both. </p> <p>This operation has a limit of five transactions per second, after which transactions are throttled.</p> <p>If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account and view data from the linked source accounts. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeLogStreamsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeLogStreamsRequest;
use \OpenAPI\OpenAPI\Models\Shared\OrderByEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeLogStreamsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeLogStreamsRequest();
    $request->describeLogStreamsRequest = new DescribeLogStreamsRequest();
    $request->describeLogStreamsRequest->descending = false;
    $request->describeLogStreamsRequest->limit = 318569;
    $request->describeLogStreamsRequest->logGroupIdentifier = 'consequatur';
    $request->describeLogStreamsRequest->logGroupName = 'est';
    $request->describeLogStreamsRequest->logStreamNamePrefix = 'quibusdam';
    $request->describeLogStreamsRequest->nextToken = 'explicabo';
    $request->describeLogStreamsRequest->orderBy = OrderByEnum::LAST_EVENT_TIME;
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'cupiditate';
    $request->xAmzTarget = DescribeLogStreamsXAmzTargetEnum::LOGS20140328_DESCRIBE_LOG_STREAMS;
    $request->limit = 'quos';
    $request->nextToken = 'perferendis';

    $response = $sdk->sdk->describeLogStreams($request);

    if ($response->describeLogStreamsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeMetricFilters

Lists the specified metric filters. You can list all of the metric filters or filter the results by log name, prefix, metric name, or metric namespace. The results are ASCII-sorted by filter name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeMetricFiltersRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeMetricFiltersRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeMetricFiltersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeMetricFiltersRequest();
    $request->describeMetricFiltersRequest = new DescribeMetricFiltersRequest();
    $request->describeMetricFiltersRequest->filterNamePrefix = 'magni';
    $request->describeMetricFiltersRequest->limit = 828940;
    $request->describeMetricFiltersRequest->logGroupName = 'ipsam';
    $request->describeMetricFiltersRequest->metricName = 'alias';
    $request->describeMetricFiltersRequest->metricNamespace = 'fugit';
    $request->describeMetricFiltersRequest->nextToken = 'dolorum';
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'tempore';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'eum';
    $request->xAmzTarget = DescribeMetricFiltersXAmzTargetEnum::LOGS20140328_DESCRIBE_METRIC_FILTERS;
    $request->limit = 'non';
    $request->nextToken = 'eligendi';

    $response = $sdk->sdk->describeMetricFilters($request);

    if ($response->describeMetricFiltersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeQueries

Returns a list of CloudWatch Logs Insights queries that are scheduled, running, or have been run recently in this account. You can request all queries or limit it to queries of a specific log group or queries with a certain status.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeQueriesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeQueriesRequest;
use \OpenAPI\OpenAPI\Models\Shared\QueryStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeQueriesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeQueriesRequest();
    $request->describeQueriesRequest = new DescribeQueriesRequest();
    $request->describeQueriesRequest->logGroupName = 'sint';
    $request->describeQueriesRequest->maxResults = 396098;
    $request->describeQueriesRequest->nextToken = 'provident';
    $request->describeQueriesRequest->status = QueryStatusEnum::UNKNOWN;
    $request->xAmzAlgorithm = 'sint';
    $request->xAmzContentSha256 = 'officia';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'a';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'in';
    $request->xAmzTarget = DescribeQueriesXAmzTargetEnum::LOGS20140328_DESCRIBE_QUERIES;

    $response = $sdk->sdk->describeQueries($request);

    if ($response->describeQueriesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeQueryDefinitions

<p>This operation returns a paginated list of your saved CloudWatch Logs Insights query definitions.</p> <p>You can use the <code>queryDefinitionNamePrefix</code> parameter to limit the results to only the query definitions that have names that start with a certain string.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeQueryDefinitionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeQueryDefinitionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeQueryDefinitionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeQueryDefinitionsRequest();
    $request->describeQueryDefinitionsRequest = new DescribeQueryDefinitionsRequest();
    $request->describeQueryDefinitionsRequest->maxResults = 449198;
    $request->describeQueryDefinitionsRequest->nextToken = 'illum';
    $request->describeQueryDefinitionsRequest->queryDefinitionNamePrefix = 'maiores';
    $request->xAmzAlgorithm = 'rerum';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'cumque';
    $request->xAmzSecurityToken = 'facere';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'aliquid';
    $request->xAmzTarget = DescribeQueryDefinitionsXAmzTargetEnum::LOGS20140328_DESCRIBE_QUERY_DEFINITIONS;

    $response = $sdk->sdk->describeQueryDefinitions($request);

    if ($response->describeQueryDefinitionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeResourcePolicies

Lists the resource policies in this account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeResourcePoliciesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeResourcePoliciesRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeResourcePoliciesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeResourcePoliciesRequest();
    $request->describeResourcePoliciesRequest = new DescribeResourcePoliciesRequest();
    $request->describeResourcePoliciesRequest->limit = 675439;
    $request->describeResourcePoliciesRequest->nextToken = 'accusamus';
    $request->xAmzAlgorithm = 'non';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'provident';
    $request->xAmzTarget = DescribeResourcePoliciesXAmzTargetEnum::LOGS20140328_DESCRIBE_RESOURCE_POLICIES;

    $response = $sdk->sdk->describeResourcePolicies($request);

    if ($response->describeResourcePoliciesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeSubscriptionFilters

Lists the subscription filters for the specified log group. You can list all the subscription filters or filter the results by prefix. The results are ASCII-sorted by filter name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSubscriptionFiltersRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeSubscriptionFiltersRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSubscriptionFiltersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeSubscriptionFiltersRequest();
    $request->describeSubscriptionFiltersRequest = new DescribeSubscriptionFiltersRequest();
    $request->describeSubscriptionFiltersRequest->filterNamePrefix = 'nam';
    $request->describeSubscriptionFiltersRequest->limit = 659669;
    $request->describeSubscriptionFiltersRequest->logGroupName = 'blanditiis';
    $request->describeSubscriptionFiltersRequest->nextToken = 'deleniti';
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'nisi';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'omnis';
    $request->xAmzTarget = DescribeSubscriptionFiltersXAmzTargetEnum::LOGS20140328_DESCRIBE_SUBSCRIPTION_FILTERS;
    $request->limit = 'molestiae';
    $request->nextToken = 'perferendis';

    $response = $sdk->sdk->describeSubscriptionFilters($request);

    if ($response->describeSubscriptionFiltersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateKmsKey

<p>Disassociates the associated KMS key from the specified log group.</p> <p>After the KMS key is disassociated from the log group, CloudWatch Logs stops encrypting newly ingested data for the log group. All previously ingested data remains encrypted, and CloudWatch Logs requires permissions for the KMS key whenever the encrypted data is requested.</p> <p>Note that it can take up to 5 minutes for this operation to take effect.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateKmsKeyRequest;
use \OpenAPI\OpenAPI\Models\Shared\DisassociateKmsKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateKmsKeyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateKmsKeyRequest();
    $request->disassociateKmsKeyRequest = new DisassociateKmsKeyRequest();
    $request->disassociateKmsKeyRequest->logGroupName = 'nihil';
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'natus';
    $request->xAmzTarget = DisassociateKmsKeyXAmzTargetEnum::LOGS20140328_DISASSOCIATE_KMS_KEY;

    $response = $sdk->sdk->disassociateKmsKey($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## filterLogEvents

<p>Lists log events from the specified log group. You can list all the log events or filter the results using a filter pattern, a time range, and the name of the log stream.</p> <p>You must have the <code>logs;FilterLogEvents</code> permission to perform this operation.</p> <p>You can specify the log group to search by using either <code>logGroupIdentifier</code> or <code>logGroupName</code>. You must include one of these two parameters, but you can't include both. </p> <p>By default, this operation returns as many log events as can fit in 1 MB (up to 10,000 log events) or all the events found within the specified time range. If the results include a token, that means there are more log events available. You can get additional results by specifying the token in a subsequent call. This operation can return empty results while there are more log events available through the token.</p> <p>The returned log events are sorted by event timestamp, the timestamp when the event was ingested by CloudWatch Logs, and the ID of the <code>PutLogEvents</code> request.</p> <p>If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account and view data from the linked source accounts. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\FilterLogEventsRequest;
use \OpenAPI\OpenAPI\Models\Shared\FilterLogEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\FilterLogEventsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FilterLogEventsRequest();
    $request->filterLogEventsRequest = new FilterLogEventsRequest();
    $request->filterLogEventsRequest->endTime = 749170;
    $request->filterLogEventsRequest->filterPattern = 'eum';
    $request->filterLogEventsRequest->interleaved = false;
    $request->filterLogEventsRequest->limit = 878453;
    $request->filterLogEventsRequest->logGroupIdentifier = 'aspernatur';
    $request->filterLogEventsRequest->logGroupName = 'architecto';
    $request->filterLogEventsRequest->logStreamNamePrefix = 'magnam';
    $request->filterLogEventsRequest->logStreamNames = [
        'excepturi',
    ];
    $request->filterLogEventsRequest->nextToken = 'ullam';
    $request->filterLogEventsRequest->startTime = 590873;
    $request->filterLogEventsRequest->unmask = false;
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'ad';
    $request->xAmzTarget = FilterLogEventsXAmzTargetEnum::LOGS20140328_FILTER_LOG_EVENTS;
    $request->limit = 'eum';
    $request->nextToken = 'dolor';

    $response = $sdk->sdk->filterLogEvents($request);

    if ($response->filterLogEventsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDataProtectionPolicy

Returns information about a log group data protection policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDataProtectionPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetDataProtectionPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDataProtectionPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDataProtectionPolicyRequest();
    $request->getDataProtectionPolicyRequest = new GetDataProtectionPolicyRequest();
    $request->getDataProtectionPolicyRequest->logGroupIdentifier = 'necessitatibus';
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'nemo';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'eius';
    $request->xAmzTarget = GetDataProtectionPolicyXAmzTargetEnum::LOGS20140328_GET_DATA_PROTECTION_POLICY;

    $response = $sdk->sdk->getDataProtectionPolicy($request);

    if ($response->getDataProtectionPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLogEvents

<p>Lists log events from the specified log stream. You can list all of the log events or filter using a time range.</p> <p>By default, this operation returns as many log events as can fit in a response size of 1MB (up to 10,000 log events). You can get additional log events by specifying one of the tokens in a subsequent call. This operation can return empty results while there are more log events available through the token.</p> <p>If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account and view data from the linked source accounts. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p> <p>You can specify the log group to search by using either <code>logGroupIdentifier</code> or <code>logGroupName</code>. You must include one of these two parameters, but you can't include both. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLogEventsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetLogEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetLogEventsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLogEventsRequest();
    $request->getLogEventsRequest = new GetLogEventsRequest();
    $request->getLogEventsRequest->endTime = 806194;
    $request->getLogEventsRequest->limit = 537023;
    $request->getLogEventsRequest->logGroupIdentifier = 'facilis';
    $request->getLogEventsRequest->logGroupName = 'in';
    $request->getLogEventsRequest->logStreamName = 'architecto';
    $request->getLogEventsRequest->nextToken = 'architecto';
    $request->getLogEventsRequest->startFromHead = false;
    $request->getLogEventsRequest->startTime = 919483;
    $request->getLogEventsRequest->unmask = false;
    $request->xAmzAlgorithm = 'ullam';
    $request->xAmzContentSha256 = 'expedita';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'repellat';
    $request->xAmzSecurityToken = 'quibusdam';
    $request->xAmzSignature = 'sed';
    $request->xAmzSignedHeaders = 'saepe';
    $request->xAmzTarget = GetLogEventsXAmzTargetEnum::LOGS20140328_GET_LOG_EVENTS;
    $request->limit = 'pariatur';
    $request->nextToken = 'accusantium';

    $response = $sdk->sdk->getLogEvents($request);

    if ($response->getLogEventsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLogGroupFields

<p>Returns a list of the fields that are included in log events in the specified log group. Includes the percentage of log events that contain each field. The search is limited to a time period that you specify.</p> <p>You can specify the log group to search by using either <code>logGroupIdentifier</code> or <code>logGroupName</code>. You must specify one of these parameters, but you can't specify both. </p> <p>In the results, fields that start with <code>@</code> are fields generated by CloudWatch Logs. For example, <code>@timestamp</code> is the timestamp of each log event. For more information about the fields that are generated by CloudWatch logs, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_AnalyzeLogData-discoverable-fields.html">Supported Logs and Discovered Fields</a>.</p> <p>The response results are sorted by the frequency percentage, starting with the highest percentage.</p> <p>If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account and view data from the linked source accounts. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLogGroupFieldsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetLogGroupFieldsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetLogGroupFieldsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLogGroupFieldsRequest();
    $request->getLogGroupFieldsRequest = new GetLogGroupFieldsRequest();
    $request->getLogGroupFieldsRequest->logGroupIdentifier = 'consequuntur';
    $request->getLogGroupFieldsRequest->logGroupName = 'praesentium';
    $request->getLogGroupFieldsRequest->time = 615560;
    $request->xAmzAlgorithm = 'magni';
    $request->xAmzContentSha256 = 'sunt';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'maxime';
    $request->xAmzSignedHeaders = 'ea';
    $request->xAmzTarget = GetLogGroupFieldsXAmzTargetEnum::LOGS20140328_GET_LOG_GROUP_FIELDS;

    $response = $sdk->sdk->getLogGroupFields($request);

    if ($response->getLogGroupFieldsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLogRecord

<p>Retrieves all of the fields and values of a single log event. All fields are retrieved, even if the original query that produced the <code>logRecordPointer</code> retrieved only a subset of fields. Fields are returned as field name/field value pairs.</p> <p>The full unparsed log event is returned within <code>@message</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLogRecordRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetLogRecordRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetLogRecordXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLogRecordRequest();
    $request->getLogRecordRequest = new GetLogRecordRequest();
    $request->getLogRecordRequest->logRecordPointer = 'excepturi';
    $request->getLogRecordRequest->unmask = false;
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->xAmzTarget = GetLogRecordXAmzTargetEnum::LOGS20140328_GET_LOG_RECORD;

    $response = $sdk->sdk->getLogRecord($request);

    if ($response->getLogRecordResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getQueryResults

<p>Returns the results from the specified query.</p> <p>Only the fields requested in the query are returned, along with a <code>@ptr</code> field, which is the identifier for the log record. You can use the value of <code>@ptr</code> in a <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogRecord.html">GetLogRecord</a> operation to get the full log record.</p> <p> <code>GetQueryResults</code> does not start running a query. To run a query, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StartQuery.html">StartQuery</a>.</p> <p>If the value of the <code>Status</code> field in the output is <code>Running</code>, this operation returns only partial results. If you see a value of <code>Scheduled</code> or <code>Running</code> for the status, you can retry the operation later to see the final results. </p> <p>If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account to start queries in linked source accounts. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetQueryResultsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetQueryResultsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetQueryResultsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQueryResultsRequest();
    $request->getQueryResultsRequest = new GetQueryResultsRequest();
    $request->getQueryResultsRequest->queryId = 'voluptate';
    $request->xAmzAlgorithm = 'autem';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'eaque';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = GetQueryResultsXAmzTargetEnum::LOGS20140328_GET_QUERY_RESULTS;

    $response = $sdk->sdk->getQueryResults($request);

    if ($response->getQueryResultsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Displays the tags associated with a CloudWatch Logs resource. Currently, log groups and destinations support tagging.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest->resourceArn = 'fugiat';
    $request->xAmzAlgorithm = 'amet';
    $request->xAmzContentSha256 = 'aut';
    $request->xAmzCredential = 'cumque';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'nobis';
    $request->xAmzTarget = ListTagsForResourceXAmzTargetEnum::LOGS20140328_LIST_TAGS_FOR_RESOURCE;

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~listTagsLogGroup~~

<important> <p>The ListTagsLogGroup operation is on the path to deprecation. We recommend that you use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListTagsForResource.html">ListTagsForResource</a> instead.</p> </important> <p>Lists the tags for the specified log group.</p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsLogGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTagsLogGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsLogGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsLogGroupRequest();
    $request->listTagsLogGroupRequest = new ListTagsLogGroupRequest();
    $request->listTagsLogGroupRequest->logGroupName = 'dolores';
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'eaque';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'nesciunt';
    $request->xAmzSignedHeaders = 'eos';
    $request->xAmzTarget = ListTagsLogGroupXAmzTargetEnum::LOGS20140328_LIST_TAGS_LOG_GROUP;

    $response = $sdk->sdk->listTagsLogGroup($request);

    if ($response->listTagsLogGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putDataProtectionPolicy

<p>Creates a data protection policy for the specified log group. A data protection policy can help safeguard sensitive data that's ingested by the log group by auditing and masking the sensitive log data.</p> <important> <p>Sensitive data is detected and masked when it is ingested into the log group. When you set a data protection policy, log events ingested into the log group before that time are not masked.</p> </important> <p>By default, when a user views a log event that includes masked data, the sensitive data is replaced by asterisks. A user who has the <code>logs:Unmask</code> permission can use a <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogEvents.html">GetLogEvents</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_FilterLogEvents.html">FilterLogEvents</a> operation with the <code>unmask</code> parameter set to <code>true</code> to view the unmasked log events. Users with the <code>logs:Unmask</code> can also view unmasked data in the CloudWatch Logs console by running a CloudWatch Logs Insights query with the <code>unmask</code> query command.</p> <p>For more information, including a list of types of data that can be audited and masked, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/mask-sensitive-log-data.html">Protect sensitive log data with masking</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutDataProtectionPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutDataProtectionPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutDataProtectionPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutDataProtectionPolicyRequest();
    $request->putDataProtectionPolicyRequest = new PutDataProtectionPolicyRequest();
    $request->putDataProtectionPolicyRequest->logGroupIdentifier = 'perferendis';
    $request->putDataProtectionPolicyRequest->policyDocument = 'dolores';
    $request->xAmzAlgorithm = 'minus';
    $request->xAmzContentSha256 = 'quam';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'nostrum';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'recusandae';
    $request->xAmzTarget = PutDataProtectionPolicyXAmzTargetEnum::LOGS20140328_PUT_DATA_PROTECTION_POLICY;

    $response = $sdk->sdk->putDataProtectionPolicy($request);

    if ($response->putDataProtectionPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putDestination

<p>Creates or updates a destination. This operation is used only to create destinations for cross-account subscriptions.</p> <p>A destination encapsulates a physical resource (such as an Amazon Kinesis stream). With a destination, you can subscribe to a real-time stream of log events for a different account, ingested using <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutLogEvents.html">PutLogEvents</a>.</p> <p>Through an access policy, a destination controls what is written to it. By default, <code>PutDestination</code> does not set any access policy with the destination, which means a cross-account user cannot call <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutSubscriptionFilter.html">PutSubscriptionFilter</a> against this destination. To enable this, the destination owner must call <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDestinationPolicy.html">PutDestinationPolicy</a> after <code>PutDestination</code>.</p> <p>To perform a <code>PutDestination</code> operation, you must also have the <code>iam:PassRole</code> permission.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutDestinationRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutDestinationRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutDestinationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutDestinationRequest();
    $request->putDestinationRequest = new PutDestinationRequest();
    $request->putDestinationRequest->destinationName = 'omnis';
    $request->putDestinationRequest->roleArn = 'facilis';
    $request->putDestinationRequest->tags = [
        'voluptatem' => 'porro',
        'consequuntur' => 'blanditiis',
        'error' => 'eaque',
    ];
    $request->putDestinationRequest->targetArn = 'occaecati';
    $request->xAmzAlgorithm = 'rerum';
    $request->xAmzContentSha256 = 'adipisci';
    $request->xAmzCredential = 'asperiores';
    $request->xAmzDate = 'earum';
    $request->xAmzSecurityToken = 'modi';
    $request->xAmzSignature = 'iste';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->xAmzTarget = PutDestinationXAmzTargetEnum::LOGS20140328_PUT_DESTINATION;

    $response = $sdk->sdk->putDestination($request);

    if ($response->putDestinationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putDestinationPolicy

Creates or updates an access policy associated with an existing destination. An access policy is an <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies_overview.html">IAM policy document</a> that is used to authorize claims to register a subscription filter against a given destination.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutDestinationPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutDestinationPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutDestinationPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutDestinationPolicyRequest();
    $request->putDestinationPolicyRequest = new PutDestinationPolicyRequest();
    $request->putDestinationPolicyRequest->accessPolicy = 'deleniti';
    $request->putDestinationPolicyRequest->destinationName = 'pariatur';
    $request->putDestinationPolicyRequest->forceUpdate = false;
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'quaerat';
    $request->xAmzSignature = 'quos';
    $request->xAmzSignedHeaders = 'aliquid';
    $request->xAmzTarget = PutDestinationPolicyXAmzTargetEnum::LOGS20140328_PUT_DESTINATION_POLICY;

    $response = $sdk->sdk->putDestinationPolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putLogEvents

<p>Uploads a batch of log events to the specified log stream.</p> <important> <p>The sequence token is now ignored in <code>PutLogEvents</code> actions. <code>PutLogEvents</code> actions are always accepted and never return <code>InvalidSequenceTokenException</code> or <code>DataAlreadyAcceptedException</code> even if the sequence token is not valid. You can use parallel <code>PutLogEvents</code> actions on the same log stream. </p> </important> <p>The batch of events must satisfy the following constraints:</p> <ul> <li> <p>The maximum batch size is 1,048,576 bytes. This size is calculated as the sum of all event messages in UTF-8, plus 26 bytes for each log event.</p> </li> <li> <p>None of the log events in the batch can be more than 2 hours in the future.</p> </li> <li> <p>None of the log events in the batch can be more than 14 days in the past. Also, none of the log events can be from earlier than the retention period of the log group.</p> </li> <li> <p>The log events in the batch must be in chronological order by their timestamp. The timestamp is the time that the event occurred, expressed as the number of milliseconds after <code>Jan 1, 1970 00:00:00 UTC</code>. (In Amazon Web Services Tools for PowerShell and the Amazon Web Services SDK for .NET, the timestamp is specified in .NET format: <code>yyyy-mm-ddThh:mm:ss</code>. For example, <code>2017-09-15T13:45:30</code>.) </p> </li> <li> <p>A batch of log events in a single request cannot span more than 24 hours. Otherwise, the operation fails.</p> </li> <li> <p>The maximum number of log events in a batch is 10,000.</p> </li> <li> <important> <p>The quota of five requests per second per log stream has been removed. Instead, <code>PutLogEvents</code> actions are throttled based on a per-second per-account quota. You can request an increase to the per-second throttling quota by using the Service Quotas service.</p> </important> </li> </ul> <p>If a call to <code>PutLogEvents</code> returns "UnrecognizedClientException" the most likely cause is a non-valid Amazon Web Services access key ID or secret key. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutLogEventsRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutLogEventsRequest;
use \OpenAPI\OpenAPI\Models\Shared\InputLogEvent;
use \OpenAPI\OpenAPI\Models\Operations\PutLogEventsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutLogEventsRequest();
    $request->putLogEventsRequest = new PutLogEventsRequest();
    $request->putLogEventsRequest->logEvents = [
        new InputLogEvent(),
    ];
    $request->putLogEventsRequest->logGroupName = 'dolorem';
    $request->putLogEventsRequest->logStreamName = 'dolor';
    $request->putLogEventsRequest->sequenceToken = 'qui';
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->xAmzTarget = PutLogEventsXAmzTargetEnum::LOGS20140328_PUT_LOG_EVENTS;

    $response = $sdk->sdk->putLogEvents($request);

    if ($response->putLogEventsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putMetricFilter

<p>Creates or updates a metric filter and associates it with the specified log group. With metric filters, you can configure rules to extract metric data from log events ingested through <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutLogEvents.html">PutLogEvents</a>.</p> <p>The maximum number of metric filters that can be associated with a log group is 100.</p> <p>When you create a metric filter, you can also optionally assign a unit and dimensions to the metric that is created.</p> <important> <p>Metrics extracted from log events are charged as custom metrics. To prevent unexpected high charges, do not specify high-cardinality fields such as <code>IPAddress</code> or <code>requestID</code> as dimensions. Each different value found for a dimension is treated as a separate metric and accrues charges as a separate custom metric. </p> <p>CloudWatch Logs disables a metric filter if it generates 1,000 different name/value pairs for your specified dimensions within a certain amount of time. This helps to prevent accidental high charges.</p> <p>You can also set up a billing alarm to alert you if your charges are higher than expected. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html"> Creating a Billing Alarm to Monitor Your Estimated Amazon Web Services Charges</a>. </p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutMetricFilterRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutMetricFilterRequest;
use \OpenAPI\OpenAPI\Models\Shared\MetricTransformation;
use \OpenAPI\OpenAPI\Models\Shared\StandardUnitEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutMetricFilterXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutMetricFilterRequest();
    $request->putMetricFilterRequest = new PutMetricFilterRequest();
    $request->putMetricFilterRequest->filterName = 'amet';
    $request->putMetricFilterRequest->filterPattern = 'dolorum';
    $request->putMetricFilterRequest->logGroupName = 'numquam';
    $request->putMetricFilterRequest->metricTransformations = [
        new MetricTransformation(),
    ];
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'odio';
    $request->xAmzSecurityToken = 'quaerat';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'quidem';
    $request->xAmzTarget = PutMetricFilterXAmzTargetEnum::LOGS20140328_PUT_METRIC_FILTER;

    $response = $sdk->sdk->putMetricFilter($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putQueryDefinition

<p>Creates or updates a query definition for CloudWatch Logs Insights. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AnalyzingLogData.html">Analyzing Log Data with CloudWatch Logs Insights</a>.</p> <p>To update a query definition, specify its <code>queryDefinitionId</code> in your request. The values of <code>name</code>, <code>queryString</code>, and <code>logGroupNames</code> are changed to the values that you specify in your update operation. No current values are retained from the current query definition. For example, imagine updating a current query definition that includes log groups. If you don't specify the <code>logGroupNames</code> parameter in your update operation, the query definition changes to contain no log groups.</p> <p>You must have the <code>logs:PutQueryDefinition</code> permission to be able to perform this operation.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutQueryDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutQueryDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutQueryDefinitionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutQueryDefinitionRequest();
    $request->putQueryDefinitionRequest = new PutQueryDefinitionRequest();
    $request->putQueryDefinitionRequest->logGroupNames = [
        'voluptas',
        'natus',
        'eos',
        'atque',
    ];
    $request->putQueryDefinitionRequest->name = 'Ginger Bergstrom';
    $request->putQueryDefinitionRequest->queryDefinitionId = 'iusto';
    $request->putQueryDefinitionRequest->queryString = 'voluptate';
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'necessitatibus';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'asperiores';
    $request->xAmzSignedHeaders = 'nihil';
    $request->xAmzTarget = PutQueryDefinitionXAmzTargetEnum::LOGS20140328_PUT_QUERY_DEFINITION;

    $response = $sdk->sdk->putQueryDefinition($request);

    if ($response->putQueryDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putResourcePolicy

Creates or updates a resource policy allowing other Amazon Web Services services to put log events to this account, such as Amazon Route 53. An account can have up to 10 resource policies per Amazon Web Services Region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutResourcePolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutResourcePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutResourcePolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutResourcePolicyRequest();
    $request->putResourcePolicyRequest = new PutResourcePolicyRequest();
    $request->putResourcePolicyRequest->policyDocument = 'ipsum';
    $request->putResourcePolicyRequest->policyName = 'voluptate';
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'eius';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'amet';
    $request->xAmzSignedHeaders = 'optio';
    $request->xAmzTarget = PutResourcePolicyXAmzTargetEnum::LOGS20140328_PUT_RESOURCE_POLICY;

    $response = $sdk->sdk->putResourcePolicy($request);

    if ($response->putResourcePolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putRetentionPolicy

<p>Sets the retention of the specified log group. With a retention policy, you can configure the number of days for which to retain log events in the specified log group.</p> <note> <p>CloudWatch Logs doesn’t immediately delete log events when they reach their retention setting. It typically takes up to 72 hours after that before log events are deleted, but in rare situations might take longer.</p> <p>To illustrate, imagine that you change a log group to have a longer retention setting when it contains log events that are past the expiration date, but haven’t been deleted. Those log events will take up to 72 hours to be deleted after the new retention date is reached. To make sure that log data is deleted permanently, keep a log group at its lower retention setting until 72 hours after the previous retention period ends. Alternatively, wait to change the retention setting until you confirm that the earlier log events are deleted. </p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutRetentionPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutRetentionPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutRetentionPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutRetentionPolicyRequest();
    $request->putRetentionPolicyRequest = new PutRetentionPolicyRequest();
    $request->putRetentionPolicyRequest->logGroupName = 'accusamus';
    $request->putRetentionPolicyRequest->retentionInDays = 320017;
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'repellendus';
    $request->xAmzSignedHeaders = 'totam';
    $request->xAmzTarget = PutRetentionPolicyXAmzTargetEnum::LOGS20140328_PUT_RETENTION_POLICY;

    $response = $sdk->sdk->putRetentionPolicy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putSubscriptionFilter

<p>Creates or updates a subscription filter and associates it with the specified log group. With subscription filters, you can subscribe to a real-time stream of log events ingested through <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutLogEvents.html">PutLogEvents</a> and have them delivered to a specific destination. When log events are sent to the receiving service, they are Base64 encoded and compressed with the GZIP format.</p> <p>The following destinations are supported for subscription filters:</p> <ul> <li> <p>An Amazon Kinesis data stream belonging to the same account as the subscription filter, for same-account delivery.</p> </li> <li> <p>A logical destination that belongs to a different account, for cross-account delivery.</p> </li> <li> <p>An Amazon Kinesis Data Firehose delivery stream that belongs to the same account as the subscription filter, for same-account delivery.</p> </li> <li> <p>An Lambda function that belongs to the same account as the subscription filter, for same-account delivery.</p> </li> </ul> <p>Each log group can have up to two subscription filters associated with it. If you are updating an existing filter, you must specify the correct name in <code>filterName</code>. </p> <p>To perform a <code>PutSubscriptionFilter</code> operation, you must also have the <code>iam:PassRole</code> permission.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutSubscriptionFilterRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutSubscriptionFilterRequest;
use \OpenAPI\OpenAPI\Models\Shared\DistributionEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutSubscriptionFilterXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutSubscriptionFilterRequest();
    $request->putSubscriptionFilterRequest = new PutSubscriptionFilterRequest();
    $request->putSubscriptionFilterRequest->destinationArn = 'similique';
    $request->putSubscriptionFilterRequest->distribution = DistributionEnum::RANDOM;
    $request->putSubscriptionFilterRequest->filterName = 'at';
    $request->putSubscriptionFilterRequest->filterPattern = 'quaerat';
    $request->putSubscriptionFilterRequest->logGroupName = 'tempora';
    $request->putSubscriptionFilterRequest->roleArn = 'vel';
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'officiis';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'a';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'harum';
    $request->xAmzTarget = PutSubscriptionFilterXAmzTargetEnum::LOGS20140328_PUT_SUBSCRIPTION_FILTER;

    $response = $sdk->sdk->putSubscriptionFilter($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startQuery

<p>Schedules a query of a log group using CloudWatch Logs Insights. You specify the log group and time range to query and the query string to use.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html">CloudWatch Logs Insights Query Syntax</a>.</p> <p>Queries time out after 15 minutes of runtime. If your queries are timing out, reduce the time range being searched or partition your query into a number of queries.</p> <p>If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account to start a query in a linked source account. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>. For a cross-account <code>StartQuery</code> operation, the query definition must be defined in the monitoring account.</p> <p>You can have up to 20 concurrent CloudWatch Logs insights queries, including queries that have been added to dashboards. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartQueryRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartQueryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartQueryRequest();
    $request->startQueryRequest = new StartQueryRequest();
    $request->startQueryRequest->endTime = 483409;
    $request->startQueryRequest->limit = 215507;
    $request->startQueryRequest->logGroupIdentifiers = [
        'tenetur',
        'amet',
        'tempore',
        'accusamus',
    ];
    $request->startQueryRequest->logGroupName = 'numquam';
    $request->startQueryRequest->logGroupNames = [
        'dolorem',
        'sapiente',
    ];
    $request->startQueryRequest->queryString = 'totam';
    $request->startQueryRequest->startTime = 471752;
    $request->xAmzAlgorithm = 'sit';
    $request->xAmzContentSha256 = 'expedita';
    $request->xAmzCredential = 'neque';
    $request->xAmzDate = 'sed';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'voluptas';
    $request->xAmzTarget = StartQueryXAmzTargetEnum::LOGS20140328_START_QUERY;

    $response = $sdk->sdk->startQuery($request);

    if ($response->startQueryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopQuery

Stops a CloudWatch Logs Insights query that is in progress. If the query has already ended, the operation returns an error indicating that the specified query is not running.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopQueryRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopQueryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopQueryRequest();
    $request->stopQueryRequest = new StopQueryRequest();
    $request->stopQueryRequest->queryId = 'deserunt';
    $request->xAmzAlgorithm = 'quam';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'incidunt';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'cupiditate';
    $request->xAmzSignature = 'maxime';
    $request->xAmzSignedHeaders = 'pariatur';
    $request->xAmzTarget = StopQueryXAmzTargetEnum::LOGS20140328_STOP_QUERY;

    $response = $sdk->sdk->stopQuery($request);

    if ($response->stopQueryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~tagLogGroup~~

<important> <p>The TagLogGroup operation is on the path to deprecation. We recommend that you use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_TagResource.html">TagResource</a> instead.</p> </important> <p>Adds or updates the specified tags for the specified log group.</p> <p>To list the tags for a log group, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListTagsForResource.html">ListTagsForResource</a>. To remove tags, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UntagResource.html">UntagResource</a>.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Working-with-log-groups-and-streams.html#log-group-tagging">Tag Log Groups in Amazon CloudWatch Logs</a> in the <i>Amazon CloudWatch Logs User Guide</i>.</p> <p>CloudWatch Logs doesn’t support IAM policies that prevent users from assigning specified tags to log groups using the <code>aws:Resource/<i>key-name</i> </code> or <code>aws:TagKeys</code> condition keys. For more information about using tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Controlling access to Amazon Web Services resources using tags</a>.</p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagLogGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagLogGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagLogGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagLogGroupRequest();
    $request->tagLogGroupRequest = new TagLogGroupRequest();
    $request->tagLogGroupRequest->logGroupName = 'soluta';
    $request->tagLogGroupRequest->tags = [
        'laborum' => 'totam',
    ];
    $request->xAmzAlgorithm = 'incidunt';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'dolores';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'quam';
    $request->xAmzTarget = TagLogGroupXAmzTargetEnum::LOGS20140328_TAG_LOG_GROUP;

    $response = $sdk->sdk->tagLogGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

<p>Assigns one or more tags (key-value pairs) to the specified CloudWatch Logs resource. Currently, the only CloudWatch Logs resources that can be tagged are log groups and destinations. </p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can use the <code>TagResource</code> action with a resource that already has tags. If you specify a new tag key for the alarm, this tag is appended to the list of tags associated with the alarm. If you specify a tag key that is already associated with the alarm, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a CloudWatch Logs resource.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->tagResourceRequest = new TagResourceRequest();
    $request->tagResourceRequest->resourceArn = 'molestias';
    $request->tagResourceRequest->tags = [
        'qui' => 'neque',
        'fugit' => 'magni',
        'odio' => 'sunt',
        'ullam' => 'nam',
    ];
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'voluptatem';
    $request->xAmzCredential = 'cumque';
    $request->xAmzDate = 'soluta';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'et';
    $request->xAmzSignedHeaders = 'saepe';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::LOGS20140328_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testMetricFilter

Tests the filter pattern of a metric filter against a sample of log event messages. You can use this operation to validate the correctness of a metric filter pattern.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TestMetricFilterRequest;
use \OpenAPI\OpenAPI\Models\Shared\TestMetricFilterRequest;
use \OpenAPI\OpenAPI\Models\Operations\TestMetricFilterXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestMetricFilterRequest();
    $request->testMetricFilterRequest = new TestMetricFilterRequest();
    $request->testMetricFilterRequest->filterPattern = 'ipsum';
    $request->testMetricFilterRequest->logEventMessages = [
        'nobis',
    ];
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'tempore';
    $request->xAmzCredential = 'cupiditate';
    $request->xAmzDate = 'aperiam';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'dolore';
    $request->xAmzTarget = TestMetricFilterXAmzTargetEnum::LOGS20140328_TEST_METRIC_FILTER;

    $response = $sdk->sdk->testMetricFilter($request);

    if ($response->testMetricFilterResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~untagLogGroup~~

<important> <p>The UntagLogGroup operation is on the path to deprecation. We recommend that you use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UntagResource.html">UntagResource</a> instead.</p> </important> <p>Removes the specified tags from the specified log group.</p> <p>To list the tags for a log group, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListTagsForResource.html">ListTagsForResource</a>. To add tags, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_TagResource.html">TagResource</a>.</p> <p>CloudWatch Logs doesn’t support IAM policies that prevent users from assigning specified tags to log groups using the <code>aws:Resource/<i>key-name</i> </code> or <code>aws:TagKeys</code> condition keys. </p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagLogGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\UntagLogGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\UntagLogGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagLogGroupRequest();
    $request->untagLogGroupRequest = new UntagLogGroupRequest();
    $request->untagLogGroupRequest->logGroupName = 'labore';
    $request->untagLogGroupRequest->tags = [
        'dolorum',
    ];
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'quae';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'quas';
    $request->xAmzSecurityToken = 'itaque';
    $request->xAmzSignature = 'consequatur';
    $request->xAmzSignedHeaders = 'est';
    $request->xAmzTarget = UntagLogGroupXAmzTargetEnum::LOGS20140328_UNTAG_LOG_GROUP;

    $response = $sdk->sdk->untagLogGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes one or more tags from the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->untagResourceRequest = new UntagResourceRequest();
    $request->untagResourceRequest->resourceArn = 'repellendus';
    $request->untagResourceRequest->tagKeys = [
        'doloribus',
        'ut',
        'facilis',
        'cupiditate',
    ];
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'quae';
    $request->xAmzCredential = 'laudantium';
    $request->xAmzDate = 'odio';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'quisquam';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::LOGS20140328_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
