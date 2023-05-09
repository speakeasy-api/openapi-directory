# SDK

## Overview

<fullname>Lambda</fullname> <p> <b>Overview</b> </p> <p>Lambda is a compute service that lets you run code without provisioning or managing servers. Lambda runs your code on a high-availability compute infrastructure and performs all of the administration of the compute resources, including server and operating system maintenance, capacity provisioning and automatic scaling, code monitoring and logging. With Lambda, you can run code for virtually any type of application or backend service. For more information about the Lambda service, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/welcome.html">What is Lambda</a> in the <b>Lambda Developer Guide</b>.</p> <p>The <i>Lambda API Reference</i> provides information about each of the API methods, including details about the parameters in each API request and response. </p> <p/> <p>You can use Software Development Kits (SDKs), Integrated Development Environment (IDE) Toolkits, and command line tools to access the API. For installation instructions, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>. </p> <p>For a list of Region-specific endpoints that Lambda supports, see <a href="https://docs.aws.amazon.com/general/latest/gr/lambda-service.html/">Lambda endpoints and quotas </a> in the <i>Amazon Web Services General Reference.</i>. </p> <p>When making the API calls, you will need to authenticate your request by providing a signature. Lambda supports signature version 4. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 signing process</a> in the <i>Amazon Web Services General Reference.</i>. </p> <p> <b>CA certificates</b> </p> <p>Because Amazon Web Services SDKs use the CA certificates from your computer, changes to the certificates on the Amazon Web Services servers can cause connection failures when you attempt to use an SDK. You can prevent these failures by keeping your computer's CA certificates and operating system up-to-date. If you encounter this issue in a corporate environment and do not manage your own computer, you might need to ask an administrator to assist with the update process. The following list shows minimum operating system and Java versions:</p> <ul> <li> <p>Microsoft Windows versions that have updates from January 2005 or later installed contain at least one of the required CAs in their trust list. </p> </li> <li> <p>Mac OS X 10.4 with Java for Mac OS X 10.4 Release 5 (February 2007), Mac OS X 10.5 (October 2007), and later versions contain at least one of the required CAs in their trust list. </p> </li> <li> <p>Red Hat Enterprise Linux 5 (March 2007), 6, and 7 and CentOS 5, 6, and 7 all contain at least one of the required CAs in their default trusted CA list. </p> </li> <li> <p>Java 1.4.2_12 (May 2006), 5 Update 2 (March 2005), and all later versions, including Java 6 (December 2006), 7, and 8, contain at least one of the required CAs in their default trusted CA list. </p> </li> </ul> <p>When accessing the Lambda management console or Lambda API endpoints, whether through browsers or programmatically, you will need to ensure your client machines support any of the following CAs: </p> <ul> <li> <p>Amazon Root CA 1</p> </li> <li> <p>Starfield Services Root Certificate Authority - G2</p> </li> <li> <p>Starfield Class 2 Certification Authority</p> </li> </ul> <p>Root certificates from the first two authorities are available from <a href="https://www.amazontrust.com/repository/">Amazon trust services</a>, but keeping your computer up-to-date is the more straightforward solution. To learn more about ACM-provided certificates, see <a href="http://aws.amazon.com/certificate-manager/faqs/#certificates">Amazon Web Services Certificate Manager FAQs.</a> </p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/lambda/>
### Available Operations

* [addLayerVersionPermission](#addlayerversionpermission) - <p>Adds permissions to the resource-based policy of a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. Use this action to grant layer usage permission to other accounts. You can grant permission to a single account, all accounts in an organization, or all Amazon Web Services accounts. </p> <p>To revoke permission, call <a>RemoveLayerVersionPermission</a> with the statement ID that you specified when you added it.</p>
* [addPermission](#addpermission) - <p>Grants an Amazon Web Service, Amazon Web Services account, or Amazon Web Services organization permission to use a function. You can apply the policy at the function level, or specify a qualifier to restrict access to a single version or alias. If you use a qualifier, the invoker must use the full Amazon Resource Name (ARN) of that version or alias to invoke the function. Note: Lambda does not support adding policies to version $LATEST.</p> <p>To grant permission to another account, specify the account ID as the <code>Principal</code>. To grant permission to an organization defined in Organizations, specify the organization ID as the <code>PrincipalOrgID</code>. For Amazon Web Services, the principal is a domain-style identifier that the service defines, such as <code>s3.amazonaws.com</code> or <code>sns.amazonaws.com</code>. For Amazon Web Services, you can also specify the ARN of the associated resource as the <code>SourceArn</code>. If you grant permission to a service principal without specifying the source, other accounts could potentially configure resources in their account to invoke your Lambda function.</p> <p>This operation adds a statement to a resource-based permissions policy for the function. For more information about function policies, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html">Using resource-based policies for Lambda</a>.</p>
* [createAlias](#createalias) - <p>Creates an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html">alias</a> for a Lambda function version. Use aliases to provide clients with a function identifier that you can update to invoke a different version.</p> <p>You can also map an alias to split invocation requests between two versions. Use the <code>RoutingConfig</code> parameter to specify a second version and the percentage of invocation requests that it receives.</p>
* [createCodeSigningConfig](#createcodesigningconfig) - Creates a code signing configuration. A <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html">code signing configuration</a> defines a list of allowed signing profiles and defines the code-signing validation policy (action to be taken if deployment validation checks fail). 
* [createEventSourceMapping](#createeventsourcemapping) - <p>Creates a mapping between an event source and an Lambda function. Lambda reads items from the event source and invokes the function.</p> <p>For details about how to configure different event sources, see the following topics. </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html#services-dynamodb-eventsourcemapping"> Amazon DynamoDB Streams</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html#services-kinesis-eventsourcemapping"> Amazon Kinesis</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#events-sqs-eventsource"> Amazon SQS</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#services-mq-eventsourcemapping"> Amazon MQ and RabbitMQ</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html"> Amazon MSK</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/kafka-smaa.html"> Apache Kafka</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-documentdb.html"> Amazon DocumentDB</a> </p> </li> </ul> <p>The following error handling options are available only for stream sources (DynamoDB and Kinesis):</p> <ul> <li> <p> <code>BisectBatchOnFunctionError</code> – If the function returns an error, split the batch in two and retry.</p> </li> <li> <p> <code>DestinationConfig</code> – Send discarded records to an Amazon SQS queue or Amazon SNS topic.</p> </li> <li> <p> <code>MaximumRecordAgeInSeconds</code> – Discard records older than the specified age. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires</p> </li> <li> <p> <code>MaximumRetryAttempts</code> – Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires.</p> </li> <li> <p> <code>ParallelizationFactor</code> – Process multiple batches from each shard concurrently.</p> </li> </ul> <p>For information about which configuration parameters apply to each event source, see the following topics.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html#services-ddb-params"> Amazon DynamoDB Streams</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html#services-kinesis-params"> Amazon Kinesis</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#services-sqs-params"> Amazon SQS</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#services-mq-params"> Amazon MQ and RabbitMQ</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-parms"> Amazon MSK</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kafka.html#services-kafka-parms"> Apache Kafka</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-documentdb.html#docdb-configuration"> Amazon DocumentDB</a> </p> </li> </ul>
* [createFunction](#createfunction) - <p>Creates a Lambda function. To create a function, you need a <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html">deployment package</a> and an <a href="https://docs.aws.amazon.com/lambda/latest/dg/intro-permission-model.html#lambda-intro-execution-role">execution role</a>. The deployment package is a .zip file archive or container image that contains your function code. The execution role grants the function permission to use Amazon Web Services, such as Amazon CloudWatch Logs for log streaming and X-Ray for request tracing.</p> <p>If the deployment package is a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-images.html">container image</a>, then you set the package type to <code>Image</code>. For a container image, the code property must include the URI of a container image in the Amazon ECR registry. You do not need to specify the handler and runtime properties.</p> <p>If the deployment package is a <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html#gettingstarted-package-zip">.zip file archive</a>, then you set the package type to <code>Zip</code>. For a .zip file archive, the code property specifies the location of the .zip file. You must also specify the handler and runtime properties. The code in the deployment package must be compatible with the target instruction set architecture of the function (<code>x86-64</code> or <code>arm64</code>). If you do not specify the architecture, then the default value is <code>x86-64</code>.</p> <p>When you create a function, Lambda provisions an instance of the function and its supporting resources. If your function connects to a VPC, this process can take a minute or so. During this time, you can't invoke or modify the function. The <code>State</code>, <code>StateReason</code>, and <code>StateReasonCode</code> fields in the response from <a>GetFunctionConfiguration</a> indicate when the function is ready to invoke. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/functions-states.html">Lambda function states</a>.</p> <p>A function has an unpublished version, and can have published versions and aliases. The unpublished version changes when you update your function's code and configuration. A published version is a snapshot of your function code and configuration that can't be changed. An alias is a named resource that maps to a version, and can be changed to map to a different version. Use the <code>Publish</code> parameter to create version <code>1</code> of your function from its initial configuration.</p> <p>The other parameters let you configure version-specific and function-level settings. You can modify version-specific settings later with <a>UpdateFunctionConfiguration</a>. Function-level settings apply to both the unpublished and published versions of the function, and include tags (<a>TagResource</a>) and per-function concurrency limits (<a>PutFunctionConcurrency</a>).</p> <p>You can use code signing if your deployment package is a .zip file archive. To enable code signing for this function, specify the ARN of a code-signing configuration. When a user attempts to deploy a code package with <a>UpdateFunctionCode</a>, Lambda checks that the code package has a valid signature from a trusted publisher. The code-signing configuration includes set of signing profiles, which define the trusted publishers for this function.</p> <p>If another Amazon Web Services account or an Amazon Web Service invokes your function, use <a>AddPermission</a> to grant permission by creating a resource-based Identity and Access Management (IAM) policy. You can grant permissions at the function level, on a version, or on an alias.</p> <p>To invoke your function directly, use <a>Invoke</a>. To invoke your function in response to events in other Amazon Web Services, create an event source mapping (<a>CreateEventSourceMapping</a>), or configure a function trigger in the other service. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-invocation.html">Invoking Lambda functions</a>.</p>
* [createFunctionUrlConfig](#createfunctionurlconfig) - Creates a Lambda function URL with the specified configuration parameters. A function URL is a dedicated HTTP(S) endpoint that you can use to invoke your function.
* [deleteAlias](#deletealias) - Deletes a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html">alias</a>.
* [deleteCodeSigningConfig](#deletecodesigningconfig) - Deletes the code signing configuration. You can delete the code signing configuration only if no function is using it. 
* [deleteEventSourceMapping](#deleteeventsourcemapping) - <p>Deletes an <a href="https://docs.aws.amazon.com/lambda/latest/dg/intro-invocation-modes.html">event source mapping</a>. You can get the identifier of a mapping from the output of <a>ListEventSourceMappings</a>.</p> <p>When you delete an event source mapping, it enters a <code>Deleting</code> state and might not be completely deleted for several seconds.</p>
* [deleteFunction](#deletefunction) - <p>Deletes a Lambda function. To delete a specific function version, use the <code>Qualifier</code> parameter. Otherwise, all versions and aliases are deleted.</p> <p>To delete Lambda event source mappings that invoke a function, use <a>DeleteEventSourceMapping</a>. For Amazon Web Services and resources that invoke your function directly, delete the trigger in the service where you originally configured it.</p>
* [deleteFunctionCodeSigningConfig](#deletefunctioncodesigningconfig) - Removes the code signing configuration from the function.
* [deleteFunctionConcurrency](#deletefunctionconcurrency) - Removes a concurrent execution limit from a function.
* [deleteFunctionEventInvokeConfig](#deletefunctioneventinvokeconfig) - <p>Deletes the configuration for asynchronous invocation for a function, version, or alias.</p> <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>
* [deleteFunctionUrlConfig](#deletefunctionurlconfig) - Deletes a Lambda function URL. When you delete a function URL, you can't recover it. Creating a new function URL results in a different URL address.
* [deleteLayerVersion](#deletelayerversion) - Deletes a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. Deleted versions can no longer be viewed or added to functions. To avoid breaking functions, a copy of the version remains in Lambda until no functions refer to it.
* [deleteProvisionedConcurrencyConfig](#deleteprovisionedconcurrencyconfig) - Deletes the provisioned concurrency configuration for a function.
* [getAccountSettings](#getaccountsettings) - Retrieves details about your account's <a href="https://docs.aws.amazon.com/lambda/latest/dg/limits.html">limits</a> and usage in an Amazon Web Services Region.
* [getAlias](#getalias) - Returns details about a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html">alias</a>.
* [getCodeSigningConfig](#getcodesigningconfig) - Returns information about the specified code signing configuration.
* [getEventSourceMapping](#geteventsourcemapping) - Returns details about an event source mapping. You can get the identifier of a mapping from the output of <a>ListEventSourceMappings</a>.
* [getFunction](#getfunction) - Returns information about the function or function version, with a link to download the deployment package that's valid for 10 minutes. If you specify a function version, only details that are specific to that version are returned.
* [getFunctionCodeSigningConfig](#getfunctioncodesigningconfig) - Returns the code signing configuration for the specified function.
* [getFunctionConcurrency](#getfunctionconcurrency) - Returns details about the reserved concurrency configuration for a function. To set a concurrency limit for a function, use <a>PutFunctionConcurrency</a>.
* [getFunctionConfiguration](#getfunctionconfiguration) - <p>Returns the version-specific settings of a Lambda function or version. The output includes only options that can vary between versions of a function. To modify these settings, use <a>UpdateFunctionConfiguration</a>.</p> <p>To get all of a function's details, including function-level settings, use <a>GetFunction</a>.</p>
* [getFunctionEventInvokeConfig](#getfunctioneventinvokeconfig) - <p>Retrieves the configuration for asynchronous invocation for a function, version, or alias.</p> <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>
* [getFunctionUrlConfig](#getfunctionurlconfig) - Returns details about a Lambda function URL.
* [getLayerVersion](#getlayerversion) - Returns information about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>, with a link to download the layer archive that's valid for 10 minutes.
* [getLayerVersionByArn](#getlayerversionbyarn) - Returns information about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>, with a link to download the layer archive that's valid for 10 minutes.
* [getLayerVersionPolicy](#getlayerversionpolicy) - Returns the permission policy for a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. For more information, see <a>AddLayerVersionPermission</a>.
* [getPolicy](#getpolicy) - Returns the <a href="https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html">resource-based IAM policy</a> for a function, version, or alias.
* [getProvisionedConcurrencyConfig](#getprovisionedconcurrencyconfig) - Retrieves the provisioned concurrency configuration for a function's alias or version.
* [getRuntimeManagementConfig](#getruntimemanagementconfig) - Retrieves the runtime management configuration for a function's version. If the runtime update mode is <b>Manual</b>, this includes the ARN of the runtime version and the runtime update mode. If the runtime update mode is <b>Auto</b> or <b>Function update</b>, this includes the runtime update mode and <code>null</code> is returned for the ARN. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html">Runtime updates</a>.
* [invoke](#invoke) - <p>Invokes a Lambda function. You can invoke a function synchronously (and wait for the response), or asynchronously. To invoke a function asynchronously, set <code>InvocationType</code> to <code>Event</code>.</p> <p>For <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-sync.html">synchronous invocation</a>, details about the function response, including errors, are included in the response body and headers. For either invocation type, you can find more information in the <a href="https://docs.aws.amazon.com/lambda/latest/dg/monitoring-functions.html">execution log</a> and <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-x-ray.html">trace</a>.</p> <p>When an error occurs, your function may be invoked multiple times. Retry behavior varies by error type, client, event source, and invocation type. For example, if you invoke a function asynchronously and it returns an error, Lambda executes the function up to two more times. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-retries.html">Error handling and automatic retries in Lambda</a>.</p> <p>For <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html">asynchronous invocation</a>, Lambda adds events to a queue before sending them to your function. If your function does not have enough capacity to keep up with the queue, events may be lost. Occasionally, your function may receive the same event multiple times, even if no error occurs. To retain events that were not processed, configure your function with a <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-dlq">dead-letter queue</a>.</p> <p>The status code in the API response doesn't reflect function errors. Error codes are reserved for errors that prevent your function from executing, such as permissions errors, <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html">quota</a> errors, or issues with your function's code and configuration. For example, Lambda returns <code>TooManyRequestsException</code> if running the function would cause you to exceed a concurrency limit at either the account level (<code>ConcurrentInvocationLimitExceeded</code>) or function level (<code>ReservedFunctionConcurrentInvocationLimitExceeded</code>).</p> <p>For functions with a long timeout, your client might disconnect during synchronous invocation while it waits for a response. Configure your HTTP client, SDK, firewall, proxy, or operating system to allow for long connections with timeout or keep-alive settings.</p> <p>This operation requires permission for the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awslambda.html">lambda:InvokeFunction</a> action. For details on how to set up permissions for cross-account invocations, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html#permissions-resource-xaccountinvoke">Granting function access to other accounts</a>.</p>
* [~~invokeAsync~~](#invokeasync) - <important> <p>For asynchronous function invocation, use <a>Invoke</a>.</p> </important> <p>Invokes a function asynchronously.</p> :warning: **Deprecated**
* [invokeWithResponseStream](#invokewithresponsestream) - <p>Configure your Lambda functions to stream response payloads back to clients. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-response-streaming.html">Configuring a Lambda function to stream responses</a>.</p> <p>This operation requires permission for the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awslambda.html">lambda:InvokeFunction</a> action. For details on how to set up permissions for cross-account invocations, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html#permissions-resource-xaccountinvoke">Granting function access to other accounts</a>.</p>
* [listAliases](#listaliases) - Returns a list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html">aliases</a> for a Lambda function.
* [listCodeSigningConfigs](#listcodesigningconfigs) - Returns a list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuring-codesigning.html">code signing configurations</a>. A request returns up to 10,000 configurations per call. You can use the <code>MaxItems</code> parameter to return fewer configurations per call. 
* [listEventSourceMappings](#listeventsourcemappings) - Lists event source mappings. Specify an <code>EventSourceArn</code> to show only event source mappings for a single event source.
* [listFunctionEventInvokeConfigs](#listfunctioneventinvokeconfigs) - <p>Retrieves a list of configurations for asynchronous invocation for a function.</p> <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>
* [listFunctionUrlConfigs](#listfunctionurlconfigs) - Returns a list of Lambda function URLs for the specified function.
* [listFunctions](#listfunctions) - <p>Returns a list of Lambda functions, with the version-specific configuration of each. Lambda returns up to 50 functions per call.</p> <p>Set <code>FunctionVersion</code> to <code>ALL</code> to include all published versions of each function in addition to the unpublished version.</p> <note> <p>The <code>ListFunctions</code> operation returns a subset of the <a>FunctionConfiguration</a> fields. To get the additional fields (State, StateReasonCode, StateReason, LastUpdateStatus, LastUpdateStatusReason, LastUpdateStatusReasonCode, RuntimeVersionConfig) for a function or version, use <a>GetFunction</a>.</p> </note>
* [listFunctionsByCodeSigningConfig](#listfunctionsbycodesigningconfig) - List the functions that use the specified code signing configuration. You can use this method prior to deleting a code signing configuration, to verify that no functions are using it.
* [listLayerVersions](#listlayerversions) - Lists the versions of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. Versions that have been deleted aren't listed. Specify a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime identifier</a> to list only versions that indicate that they're compatible with that runtime. Specify a compatible architecture to include only layer versions that are compatible with that architecture.
* [listLayers](#listlayers) - Lists <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-layers.html">Lambda layers</a> and shows information about the latest version of each. Specify a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime identifier</a> to list only layers that indicate that they're compatible with that runtime. Specify a compatible architecture to include only layers that are compatible with that <a href="https://docs.aws.amazon.com/lambda/latest/dg/foundation-arch.html">instruction set architecture</a>.
* [listProvisionedConcurrencyConfigs](#listprovisionedconcurrencyconfigs) - Retrieves a list of provisioned concurrency configurations for a function.
* [listTags](#listtags) - Returns a function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a>. You can also view tags with <a>GetFunction</a>.
* [listVersionsByFunction](#listversionsbyfunction) - Returns a list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">versions</a>, with the version-specific configuration of each. Lambda returns up to 50 versions per call.
* [publishLayerVersion](#publishlayerversion) - <p>Creates an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a> from a ZIP archive. Each time you call <code>PublishLayerVersion</code> with the same layer name, a new version is created.</p> <p>Add layers to your function with <a>CreateFunction</a> or <a>UpdateFunctionConfiguration</a>.</p>
* [publishVersion](#publishversion) - <p>Creates a <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">version</a> from the current code and configuration of a function. Use versions to create a snapshot of your function code and configuration that doesn't change.</p> <p>Lambda doesn't publish a version if the function's configuration and code haven't changed since the last version. Use <a>UpdateFunctionCode</a> or <a>UpdateFunctionConfiguration</a> to update the function before publishing a version.</p> <p>Clients can invoke versions directly or with an alias. To create an alias, use <a>CreateAlias</a>.</p>
* [putFunctionCodeSigningConfig](#putfunctioncodesigningconfig) - Update the code signing configuration for the function. Changes to the code signing configuration take effect the next time a user tries to deploy a code package to the function. 
* [putFunctionConcurrency](#putfunctionconcurrency) - <p>Sets the maximum number of simultaneous executions for a function, and reserves capacity for that concurrency level.</p> <p>Concurrency settings apply to the function as a whole, including all published versions and the unpublished version. Reserving concurrency both ensures that your function has capacity to process the specified number of events simultaneously, and prevents it from scaling beyond that level. Use <a>GetFunction</a> to see the current setting for a function.</p> <p>Use <a>GetAccountSettings</a> to see your Regional concurrency limit. You can reserve concurrency for as many functions as you like, as long as you leave at least 100 simultaneous executions unreserved for functions that aren't configured with a per-function limit. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-scaling.html">Lambda function scaling</a>.</p>
* [putFunctionEventInvokeConfig](#putfunctioneventinvokeconfig) - <p>Configures options for <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html">asynchronous invocation</a> on a function, version, or alias. If a configuration already exists for a function, version, or alias, this operation overwrites it. If you exclude any settings, they are removed. To set one option without affecting existing settings for other options, use <a>UpdateFunctionEventInvokeConfig</a>.</p> <p>By default, Lambda retries an asynchronous invocation twice if the function returns an error. It retains events in a queue for up to six hours. When an event fails all processing attempts or stays in the asynchronous invocation queue for too long, Lambda discards it. To retain discarded events, configure a dead-letter queue with <a>UpdateFunctionConfiguration</a>.</p> <p>To send an invocation record to a queue, topic, function, or event bus, specify a <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-async-destinations">destination</a>. You can configure separate destinations for successful invocations (on-success) and events that fail all processing attempts (on-failure). You can configure destinations in addition to or instead of a dead-letter queue.</p>
* [putProvisionedConcurrencyConfig](#putprovisionedconcurrencyconfig) - Adds a provisioned concurrency configuration to a function's alias or version.
* [putRuntimeManagementConfig](#putruntimemanagementconfig) - Sets the runtime management configuration for a function's version. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html">Runtime updates</a>.
* [removeLayerVersionPermission](#removelayerversionpermission) - Removes a statement from the permissions policy for a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. For more information, see <a>AddLayerVersionPermission</a>.
* [removePermission](#removepermission) - Revokes function-use permission from an Amazon Web Service or another Amazon Web Services account. You can get the ID of the statement from the output of <a>GetPolicy</a>.
* [tagResource](#tagresource) - Adds <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a> to a function.
* [untagResource](#untagresource) - Removes <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a> from a function.
* [updateAlias](#updatealias) - Updates the configuration of a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html">alias</a>.
* [updateCodeSigningConfig](#updatecodesigningconfig) - Update the code signing configuration. Changes to the code signing configuration take effect the next time a user tries to deploy a code package to the function. 
* [updateEventSourceMapping](#updateeventsourcemapping) - <p>Updates an event source mapping. You can change the function that Lambda invokes, or pause invocation and resume later from the same location.</p> <p>For details about how to configure different event sources, see the following topics. </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html#services-dynamodb-eventsourcemapping"> Amazon DynamoDB Streams</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html#services-kinesis-eventsourcemapping"> Amazon Kinesis</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#events-sqs-eventsource"> Amazon SQS</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#services-mq-eventsourcemapping"> Amazon MQ and RabbitMQ</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html"> Amazon MSK</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/kafka-smaa.html"> Apache Kafka</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-documentdb.html"> Amazon DocumentDB</a> </p> </li> </ul> <p>The following error handling options are available only for stream sources (DynamoDB and Kinesis):</p> <ul> <li> <p> <code>BisectBatchOnFunctionError</code> – If the function returns an error, split the batch in two and retry.</p> </li> <li> <p> <code>DestinationConfig</code> – Send discarded records to an Amazon SQS queue or Amazon SNS topic.</p> </li> <li> <p> <code>MaximumRecordAgeInSeconds</code> – Discard records older than the specified age. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires</p> </li> <li> <p> <code>MaximumRetryAttempts</code> – Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires.</p> </li> <li> <p> <code>ParallelizationFactor</code> – Process multiple batches from each shard concurrently.</p> </li> </ul> <p>For information about which configuration parameters apply to each event source, see the following topics.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html#services-ddb-params"> Amazon DynamoDB Streams</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html#services-kinesis-params"> Amazon Kinesis</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#services-sqs-params"> Amazon SQS</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#services-mq-params"> Amazon MQ and RabbitMQ</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-parms"> Amazon MSK</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kafka.html#services-kafka-parms"> Apache Kafka</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-documentdb.html#docdb-configuration"> Amazon DocumentDB</a> </p> </li> </ul>
* [updateFunctionCode](#updatefunctioncode) - <p>Updates a Lambda function's code. If code signing is enabled for the function, the code package must be signed by a trusted publisher. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html">Configuring code signing for Lambda</a>.</p> <p>If the function's package type is <code>Image</code>, then you must specify the code package in <code>ImageUri</code> as the URI of a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-images.html">container image</a> in the Amazon ECR registry.</p> <p>If the function's package type is <code>Zip</code>, then you must specify the deployment package as a <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html#gettingstarted-package-zip">.zip file archive</a>. Enter the Amazon S3 bucket and key of the code .zip file location. You can also provide the function code inline using the <code>ZipFile</code> field.</p> <p>The code in the deployment package must be compatible with the target instruction set architecture of the function (<code>x86-64</code> or <code>arm64</code>).</p> <p>The function's code is locked when you publish a version. You can't modify the code of a published version, only the unpublished version.</p> <note> <p>For a function defined as a container image, Lambda resolves the image tag to an image digest. In Amazon ECR, if you update the image tag to a new image, Lambda does not automatically update the function.</p> </note>
* [updateFunctionConfiguration](#updatefunctionconfiguration) - <p>Modify the version-specific settings of a Lambda function.</p> <p>When you update a function, Lambda provisions an instance of the function and its supporting resources. If your function connects to a VPC, this process can take a minute. During this time, you can't modify the function, but you can still invoke it. The <code>LastUpdateStatus</code>, <code>LastUpdateStatusReason</code>, and <code>LastUpdateStatusReasonCode</code> fields in the response from <a>GetFunctionConfiguration</a> indicate when the update is complete and the function is processing events with the new configuration. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/functions-states.html">Lambda function states</a>.</p> <p>These settings can vary between versions of a function and are locked when you publish a version. You can't modify the configuration of a published version, only the unpublished version.</p> <p>To configure function concurrency, use <a>PutFunctionConcurrency</a>. To grant invoke permissions to an Amazon Web Services account or Amazon Web Service, use <a>AddPermission</a>.</p>
* [updateFunctionEventInvokeConfig](#updatefunctioneventinvokeconfig) - <p>Updates the configuration for asynchronous invocation for a function, version, or alias.</p> <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>
* [updateFunctionUrlConfig](#updatefunctionurlconfig) - Updates the configuration for a Lambda function URL.

## addLayerVersionPermission

<p>Adds permissions to the resource-based policy of a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. Use this action to grant layer usage permission to other accounts. You can grant permission to a single account, all accounts in an organization, or all Amazon Web Services accounts. </p> <p>To revoke permission, call <a>RemoveLayerVersionPermission</a> with the statement ID that you specified when you added it.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddLayerVersionPermissionRequest;
import org.openapis.openapi.models.operations.AddLayerVersionPermissionRequestBody;
import org.openapis.openapi.models.operations.AddLayerVersionPermissionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddLayerVersionPermissionRequest req = new AddLayerVersionPermissionRequest("delectus",                 new AddLayerVersionPermissionRequestBody("tempora", "suscipit", "molestiae") {{
                                organizationId = "minus";
                            }};, 812169L) {{
                revisionId = "voluptatum";
                xAmzAlgorithm = "iusto";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "nisi";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "temporibus";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "quis";
            }};            

            AddLayerVersionPermissionResponse res = sdk.sdk.addLayerVersionPermission(req);

            if (res.addLayerVersionPermissionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## addPermission

<p>Grants an Amazon Web Service, Amazon Web Services account, or Amazon Web Services organization permission to use a function. You can apply the policy at the function level, or specify a qualifier to restrict access to a single version or alias. If you use a qualifier, the invoker must use the full Amazon Resource Name (ARN) of that version or alias to invoke the function. Note: Lambda does not support adding policies to version $LATEST.</p> <p>To grant permission to another account, specify the account ID as the <code>Principal</code>. To grant permission to an organization defined in Organizations, specify the organization ID as the <code>PrincipalOrgID</code>. For Amazon Web Services, the principal is a domain-style identifier that the service defines, such as <code>s3.amazonaws.com</code> or <code>sns.amazonaws.com</code>. For Amazon Web Services, you can also specify the ARN of the associated resource as the <code>SourceArn</code>. If you grant permission to a service principal without specifying the source, other accounts could potentially configure resources in their account to invoke your Lambda function.</p> <p>This operation adds a statement to a resource-based permissions policy for the function. For more information about function policies, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html">Using resource-based policies for Lambda</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddPermissionRequest;
import org.openapis.openapi.models.operations.AddPermissionRequestBody;
import org.openapis.openapi.models.operations.AddPermissionRequestBodyFunctionUrlAuthTypeEnum;
import org.openapis.openapi.models.operations.AddPermissionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddPermissionRequest req = new AddPermissionRequest("deserunt",                 new AddPermissionRequestBody("perferendis", "ipsam", "repellendus") {{
                                eventSourceToken = "sapiente";
                                functionUrlAuthType = AddPermissionRequestBodyFunctionUrlAuthTypeEnum.AWS_IAM;
                                principalOrgID = "odit";
                                revisionId = "at";
                                sourceAccount = "at";
                                sourceArn = "maiores";
                            }};) {{
                qualifier = "molestiae";
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "quod";
                xAmzCredential = "esse";
                xAmzDate = "totam";
                xAmzSecurityToken = "porro";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "dicta";
            }};            

            AddPermissionResponse res = sdk.sdk.addPermission(req);

            if (res.addPermissionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createAlias

<p>Creates an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html">alias</a> for a Lambda function version. Use aliases to provide clients with a function identifier that you can update to invoke a different version.</p> <p>You can also map an alias to split invocation requests between two versions. Use the <code>RoutingConfig</code> parameter to specify a second version and the percentage of invocation requests that it receives.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAliasRequest;
import org.openapis.openapi.models.operations.CreateAliasRequestBody;
import org.openapis.openapi.models.operations.CreateAliasRequestBodyRoutingConfig;
import org.openapis.openapi.models.operations.CreateAliasResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAliasRequest req = new CreateAliasRequest("officia",                 new CreateAliasRequestBody("occaecati", "fugit") {{
                                description = "deleniti";
                                routingConfig = new CreateAliasRequestBodyRoutingConfig() {{
                                    additionalVersionWeights = new java.util.HashMap<String, Double>() {{
                                        put("optio", 5218.48);
                                        put("beatae", 4146.62);
                                        put("molestiae", 2645.55);
                                        put("qui", 7742.34);
                                    }};
                                }};;
                            }};) {{
                xAmzAlgorithm = "cum";
                xAmzContentSha256 = "esse";
                xAmzCredential = "ipsum";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "ad";
            }};            

            CreateAliasResponse res = sdk.sdk.createAlias(req);

            if (res.aliasConfiguration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createCodeSigningConfig

Creates a code signing configuration. A <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html">code signing configuration</a> defines a list of allowed signing profiles and defines the code-signing validation policy (action to be taken if deployment validation checks fail). 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCodeSigningConfigRequest;
import org.openapis.openapi.models.operations.CreateCodeSigningConfigRequestBody;
import org.openapis.openapi.models.operations.CreateCodeSigningConfigRequestBodyAllowedPublishers;
import org.openapis.openapi.models.operations.CreateCodeSigningConfigRequestBodyCodeSigningPolicies;
import org.openapis.openapi.models.operations.CreateCodeSigningConfigResponse;
import org.openapis.openapi.models.shared.CodeSigningPolicyEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateCodeSigningConfigRequest req = new CreateCodeSigningConfigRequest(                new CreateCodeSigningConfigRequestBody(                new CreateCodeSigningConfigRequestBodyAllowedPublishers() {{
                                                signingProfileVersionArns = new String[]{{
                                                    add("iste"),
                                                }};
                                            }};) {{
                                codeSigningPolicies = new CreateCodeSigningConfigRequestBodyCodeSigningPolicies() {{
                                    untrustedArtifactOnDeployment = CodeSigningPolicyEnum.WARN;
                                }};;
                                description = "natus";
                            }};) {{
                xAmzAlgorithm = "laboriosam";
                xAmzContentSha256 = "hic";
                xAmzCredential = "saepe";
                xAmzDate = "fuga";
                xAmzSecurityToken = "in";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "iste";
            }};            

            CreateCodeSigningConfigResponse res = sdk.sdk.createCodeSigningConfig(req);

            if (res.createCodeSigningConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createEventSourceMapping

<p>Creates a mapping between an event source and an Lambda function. Lambda reads items from the event source and invokes the function.</p> <p>For details about how to configure different event sources, see the following topics. </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html#services-dynamodb-eventsourcemapping"> Amazon DynamoDB Streams</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html#services-kinesis-eventsourcemapping"> Amazon Kinesis</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#events-sqs-eventsource"> Amazon SQS</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#services-mq-eventsourcemapping"> Amazon MQ and RabbitMQ</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html"> Amazon MSK</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/kafka-smaa.html"> Apache Kafka</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-documentdb.html"> Amazon DocumentDB</a> </p> </li> </ul> <p>The following error handling options are available only for stream sources (DynamoDB and Kinesis):</p> <ul> <li> <p> <code>BisectBatchOnFunctionError</code> – If the function returns an error, split the batch in two and retry.</p> </li> <li> <p> <code>DestinationConfig</code> – Send discarded records to an Amazon SQS queue or Amazon SNS topic.</p> </li> <li> <p> <code>MaximumRecordAgeInSeconds</code> – Discard records older than the specified age. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires</p> </li> <li> <p> <code>MaximumRetryAttempts</code> – Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires.</p> </li> <li> <p> <code>ParallelizationFactor</code> – Process multiple batches from each shard concurrently.</p> </li> </ul> <p>For information about which configuration parameters apply to each event source, see the following topics.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html#services-ddb-params"> Amazon DynamoDB Streams</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html#services-kinesis-params"> Amazon Kinesis</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#services-sqs-params"> Amazon SQS</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#services-mq-params"> Amazon MQ and RabbitMQ</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-parms"> Amazon MSK</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kafka.html#services-kafka-parms"> Apache Kafka</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-documentdb.html#docdb-configuration"> Amazon DocumentDB</a> </p> </li> </ul>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateEventSourceMappingRequest;
import org.openapis.openapi.models.operations.CreateEventSourceMappingRequestBody;
import org.openapis.openapi.models.operations.CreateEventSourceMappingRequestBodyAmazonManagedKafkaEventSourceConfig;
import org.openapis.openapi.models.operations.CreateEventSourceMappingRequestBodyDestinationConfig;
import org.openapis.openapi.models.operations.CreateEventSourceMappingRequestBodyDocumentDBEventSourceConfig;
import org.openapis.openapi.models.operations.CreateEventSourceMappingRequestBodyFilterCriteria;
import org.openapis.openapi.models.operations.CreateEventSourceMappingRequestBodyScalingConfig;
import org.openapis.openapi.models.operations.CreateEventSourceMappingRequestBodySelfManagedEventSource;
import org.openapis.openapi.models.operations.CreateEventSourceMappingRequestBodySelfManagedKafkaEventSourceConfig;
import org.openapis.openapi.models.operations.CreateEventSourceMappingRequestBodyStartingPositionEnum;
import org.openapis.openapi.models.operations.CreateEventSourceMappingResponse;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.FullDocumentEnum;
import org.openapis.openapi.models.shared.FunctionResponseTypeEnum;
import org.openapis.openapi.models.shared.OnFailure;
import org.openapis.openapi.models.shared.OnSuccess;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SourceAccessConfiguration;
import org.openapis.openapi.models.shared.SourceAccessTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateEventSourceMappingRequest req = new CreateEventSourceMappingRequest(                new CreateEventSourceMappingRequestBody("saepe") {{
                                amazonManagedKafkaEventSourceConfig = new CreateEventSourceMappingRequestBodyAmazonManagedKafkaEventSourceConfig() {{
                                    consumerGroupId = "quidem";
                                }};;
                                batchSize = 99280L;
                                bisectBatchOnFunctionError = false;
                                destinationConfig = new CreateEventSourceMappingRequestBodyDestinationConfig() {{
                                    onFailure = new OnFailure() {{
                                        destination = "ipsa";
                                    }};;
                                    onSuccess = new OnSuccess() {{
                                        destination = "reiciendis";
                                    }};;
                                }};;
                                documentDBEventSourceConfig = new CreateEventSourceMappingRequestBodyDocumentDBEventSourceConfig() {{
                                    collectionName = "est";
                                    databaseName = "mollitia";
                                    fullDocument = FullDocumentEnum.DEFAULT_;
                                }};;
                                enabled = false;
                                eventSourceArn = "dolores";
                                filterCriteria = new CreateEventSourceMappingRequestBodyFilterCriteria() {{
                                    filters = new org.openapis.openapi.models.shared.Filter[]{{
                                        add(new Filter() {{
                                            pattern = "corporis";
                                        }}),
                                    }};
                                }};;
                                functionResponseTypes = new org.openapis.openapi.models.shared.FunctionResponseTypeEnum[]{{
                                    add(FunctionResponseTypeEnum.REPORT_BATCH_ITEM_FAILURES),
                                }};
                                maximumBatchingWindowInSeconds = 750686L;
                                maximumRecordAgeInSeconds = 315428L;
                                maximumRetryAttempts = 607831L;
                                parallelizationFactor = 363711L;
                                queues = new String[]{{
                                    add("excepturi"),
                                    add("accusantium"),
                                }};
                                scalingConfig = new CreateEventSourceMappingRequestBodyScalingConfig() {{
                                    maximumConcurrency = 438601L;
                                }};;
                                selfManagedEventSource = new CreateEventSourceMappingRequestBodySelfManagedEventSource() {{
                                    endpoints = new java.util.HashMap<String, String[]>() {{
                                        put("doloribus", new String[]{{
                                            add("architecto"),
                                            add("mollitia"),
                                            add("dolorem"),
                                            add("culpa"),
                                        }});
                                        put("consequuntur", new String[]{{
                                            add("mollitia"),
                                            add("occaecati"),
                                            add("numquam"),
                                            add("commodi"),
                                        }});
                                        put("quam", new String[]{{
                                            add("velit"),
                                            add("error"),
                                        }});
                                    }};
                                }};;
                                selfManagedKafkaEventSourceConfig = new CreateEventSourceMappingRequestBodySelfManagedKafkaEventSourceConfig() {{
                                    consumerGroupId = "quia";
                                }};;
                                sourceAccessConfigurations = new org.openapis.openapi.models.shared.SourceAccessConfiguration[]{{
                                    add(new SourceAccessConfiguration() {{
                                        type = SourceAccessTypeEnum.BASIC_AUTH;
                                        uri = "https://profuse-ethernet.com";
                                    }}),
                                    add(new SourceAccessConfiguration() {{
                                        type = SourceAccessTypeEnum.CLIENT_CERTIFICATE_TLS_AUTH;
                                        uri = "http://weary-fright.name";
                                    }}),
                                }};
                                startingPosition = CreateEventSourceMappingRequestBodyStartingPositionEnum.AT_TIMESTAMP;
                                startingPositionTimestamp = OffsetDateTime.parse("2022-11-26T13:23:33.410Z");
                                topics = new String[]{{
                                    add("temporibus"),
                                    add("laborum"),
                                    add("quasi"),
                                }};
                                tumblingWindowInSeconds = 971945L;
                            }};) {{
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "vero";
                xAmzCredential = "nihil";
                xAmzDate = "praesentium";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "omnis";
            }};            

            CreateEventSourceMappingResponse res = sdk.sdk.createEventSourceMapping(req);

            if (res.eventSourceMappingConfiguration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createFunction

<p>Creates a Lambda function. To create a function, you need a <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html">deployment package</a> and an <a href="https://docs.aws.amazon.com/lambda/latest/dg/intro-permission-model.html#lambda-intro-execution-role">execution role</a>. The deployment package is a .zip file archive or container image that contains your function code. The execution role grants the function permission to use Amazon Web Services, such as Amazon CloudWatch Logs for log streaming and X-Ray for request tracing.</p> <p>If the deployment package is a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-images.html">container image</a>, then you set the package type to <code>Image</code>. For a container image, the code property must include the URI of a container image in the Amazon ECR registry. You do not need to specify the handler and runtime properties.</p> <p>If the deployment package is a <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html#gettingstarted-package-zip">.zip file archive</a>, then you set the package type to <code>Zip</code>. For a .zip file archive, the code property specifies the location of the .zip file. You must also specify the handler and runtime properties. The code in the deployment package must be compatible with the target instruction set architecture of the function (<code>x86-64</code> or <code>arm64</code>). If you do not specify the architecture, then the default value is <code>x86-64</code>.</p> <p>When you create a function, Lambda provisions an instance of the function and its supporting resources. If your function connects to a VPC, this process can take a minute or so. During this time, you can't invoke or modify the function. The <code>State</code>, <code>StateReason</code>, and <code>StateReasonCode</code> fields in the response from <a>GetFunctionConfiguration</a> indicate when the function is ready to invoke. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/functions-states.html">Lambda function states</a>.</p> <p>A function has an unpublished version, and can have published versions and aliases. The unpublished version changes when you update your function's code and configuration. A published version is a snapshot of your function code and configuration that can't be changed. An alias is a named resource that maps to a version, and can be changed to map to a different version. Use the <code>Publish</code> parameter to create version <code>1</code> of your function from its initial configuration.</p> <p>The other parameters let you configure version-specific and function-level settings. You can modify version-specific settings later with <a>UpdateFunctionConfiguration</a>. Function-level settings apply to both the unpublished and published versions of the function, and include tags (<a>TagResource</a>) and per-function concurrency limits (<a>PutFunctionConcurrency</a>).</p> <p>You can use code signing if your deployment package is a .zip file archive. To enable code signing for this function, specify the ARN of a code-signing configuration. When a user attempts to deploy a code package with <a>UpdateFunctionCode</a>, Lambda checks that the code package has a valid signature from a trusted publisher. The code-signing configuration includes set of signing profiles, which define the trusted publishers for this function.</p> <p>If another Amazon Web Services account or an Amazon Web Service invokes your function, use <a>AddPermission</a> to grant permission by creating a resource-based Identity and Access Management (IAM) policy. You can grant permissions at the function level, on a version, or on an alias.</p> <p>To invoke your function directly, use <a>Invoke</a>. To invoke your function in response to events in other Amazon Web Services, create an event source mapping (<a>CreateEventSourceMapping</a>), or configure a function trigger in the other service. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-invocation.html">Invoking Lambda functions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFunctionRequest;
import org.openapis.openapi.models.operations.CreateFunctionRequestBody;
import org.openapis.openapi.models.operations.CreateFunctionRequestBodyCode;
import org.openapis.openapi.models.operations.CreateFunctionRequestBodyDeadLetterConfig;
import org.openapis.openapi.models.operations.CreateFunctionRequestBodyEnvironment;
import org.openapis.openapi.models.operations.CreateFunctionRequestBodyEphemeralStorage;
import org.openapis.openapi.models.operations.CreateFunctionRequestBodyImageConfig;
import org.openapis.openapi.models.operations.CreateFunctionRequestBodyPackageTypeEnum;
import org.openapis.openapi.models.operations.CreateFunctionRequestBodyRuntimeEnum;
import org.openapis.openapi.models.operations.CreateFunctionRequestBodySnapStart;
import org.openapis.openapi.models.operations.CreateFunctionRequestBodyTracingConfig;
import org.openapis.openapi.models.operations.CreateFunctionRequestBodyVpcConfig;
import org.openapis.openapi.models.operations.CreateFunctionResponse;
import org.openapis.openapi.models.shared.ArchitectureEnum;
import org.openapis.openapi.models.shared.FileSystemConfig;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SnapStartApplyOnEnum;
import org.openapis.openapi.models.shared.TracingModeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateFunctionRequest req = new CreateFunctionRequest(                new CreateFunctionRequestBody(                new CreateFunctionRequestBodyCode() {{
                                                imageUri = "cum";
                                                s3Bucket = "perferendis";
                                                s3Key = "doloremque";
                                                s3ObjectVersion = "reprehenderit";
                                                zipFile = "ut";
                                            }};, "maiores", "dicta") {{
                                architectures = new org.openapis.openapi.models.shared.ArchitectureEnum[]{{
                                    add(ArchitectureEnum.X8664),
                                    add(ArchitectureEnum.X8664),
                                }};
                                codeSigningConfigArn = "dicta";
                                deadLetterConfig = new CreateFunctionRequestBodyDeadLetterConfig() {{
                                    targetArn = "harum";
                                }};;
                                description = "enim";
                                environment = new CreateFunctionRequestBodyEnvironment() {{
                                    variables = new java.util.HashMap<String, String>() {{
                                        put("commodi", "repudiandae");
                                        put("quae", "ipsum");
                                        put("quidem", "molestias");
                                        put("excepturi", "pariatur");
                                    }};
                                }};;
                                ephemeralStorage = new CreateFunctionRequestBodyEphemeralStorage() {{
                                    size = 265389L;
                                }};;
                                fileSystemConfigs = new org.openapis.openapi.models.shared.FileSystemConfig[]{{
                                    add(new FileSystemConfig("quasi", "repudiandae") {{
                                        arn = "rem";
                                        localMountPath = "voluptates";
                                    }}),
                                    add(new FileSystemConfig("itaque", "incidunt") {{
                                        arn = "sint";
                                        localMountPath = "veritatis";
                                    }}),
                                    add(new FileSystemConfig("est", "quibusdam") {{
                                        arn = "enim";
                                        localMountPath = "consequatur";
                                    }}),
                                }};
                                handler = "explicabo";
                                imageConfig = new CreateFunctionRequestBodyImageConfig() {{
                                    command = new String[]{{
                                        add("distinctio"),
                                        add("quibusdam"),
                                        add("labore"),
                                    }};
                                    entryPoint = new String[]{{
                                        add("qui"),
                                        add("aliquid"),
                                    }};
                                    workingDirectory = "cupiditate";
                                }};;
                                kmsKeyArn = "quos";
                                layers = new String[]{{
                                    add("magni"),
                                }};
                                memorySize = 828940L;
                                packageType = CreateFunctionRequestBodyPackageTypeEnum.ZIP;
                                publish = false;
                                runtime = CreateFunctionRequestBodyRuntimeEnum.NODEJS;
                                snapStart = new CreateFunctionRequestBodySnapStart() {{
                                    applyOn = SnapStartApplyOnEnum.PUBLISHED_VERSIONS;
                                }};;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("excepturi", "tempora");
                                    put("facilis", "tempore");
                                    put("labore", "delectus");
                                }};
                                timeout = 433288L;
                                tracingConfig = new CreateFunctionRequestBodyTracingConfig() {{
                                    mode = TracingModeEnum.ACTIVE;
                                }};;
                                vpcConfig = new CreateFunctionRequestBodyVpcConfig() {{
                                    securityGroupIds = new String[]{{
                                        add("sint"),
                                        add("aliquid"),
                                        add("provident"),
                                        add("necessitatibus"),
                                    }};
                                    subnetIds = new String[]{{
                                        add("officia"),
                                        add("dolor"),
                                        add("debitis"),
                                    }};
                                }};;
                            }};) {{
                xAmzAlgorithm = "a";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "in";
                xAmzDate = "in";
                xAmzSecurityToken = "illum";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "rerum";
            }};            

            CreateFunctionResponse res = sdk.sdk.createFunction(req);

            if (res.functionConfiguration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createFunctionUrlConfig

Creates a Lambda function URL with the specified configuration parameters. A function URL is a dedicated HTTP(S) endpoint that you can use to invoke your function.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFunctionUrlConfigRequest;
import org.openapis.openapi.models.operations.CreateFunctionUrlConfigRequestBody;
import org.openapis.openapi.models.operations.CreateFunctionUrlConfigRequestBodyAuthTypeEnum;
import org.openapis.openapi.models.operations.CreateFunctionUrlConfigRequestBodyCors;
import org.openapis.openapi.models.operations.CreateFunctionUrlConfigRequestBodyInvokeModeEnum;
import org.openapis.openapi.models.operations.CreateFunctionUrlConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateFunctionUrlConfigRequest req = new CreateFunctionUrlConfigRequest("magnam",                 new CreateFunctionUrlConfigRequestBody(CreateFunctionUrlConfigRequestBodyAuthTypeEnum.AWS_IAM) {{
                                cors = new CreateFunctionUrlConfigRequestBodyCors() {{
                                    allowCredentials = false;
                                    allowHeaders = new String[]{{
                                        add("ea"),
                                        add("aliquid"),
                                        add("laborum"),
                                        add("accusamus"),
                                    }};
                                    allowMethods = new String[]{{
                                        add("occaecati"),
                                    }};
                                    allowOrigins = new String[]{{
                                        add("accusamus"),
                                        add("delectus"),
                                    }};
                                    exposeHeaders = new String[]{{
                                        add("provident"),
                                        add("nam"),
                                        add("id"),
                                    }};
                                    maxAge = 501324L;
                                }};;
                                invokeMode = CreateFunctionUrlConfigRequestBodyInvokeModeEnum.RESPONSE_STREAM;
                            }};) {{
                qualifier = "sapiente";
                xAmzAlgorithm = "amet";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "nisi";
                xAmzDate = "vel";
                xAmzSecurityToken = "natus";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "molestiae";
            }};            

            CreateFunctionUrlConfigResponse res = sdk.sdk.createFunctionUrlConfig(req);

            if (res.createFunctionUrlConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAlias

Deletes a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html">alias</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAliasRequest;
import org.openapis.openapi.models.operations.DeleteAliasResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAliasRequest req = new DeleteAliasRequest("nihil", "magnam") {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "id";
                xAmzCredential = "labore";
                xAmzDate = "labore";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "nobis";
            }};            

            DeleteAliasResponse res = sdk.sdk.deleteAlias(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCodeSigningConfig

Deletes the code signing configuration. You can delete the code signing configuration only if no function is using it. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCodeSigningConfigRequest;
import org.openapis.openapi.models.operations.DeleteCodeSigningConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteCodeSigningConfigRequest req = new DeleteCodeSigningConfigRequest("vero") {{
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "magnam";
                xAmzDate = "et";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "ullam";
                xAmzSignedHeaders = "provident";
            }};            

            DeleteCodeSigningConfigResponse res = sdk.sdk.deleteCodeSigningConfig(req);

            if (res.deleteCodeSigningConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteEventSourceMapping

<p>Deletes an <a href="https://docs.aws.amazon.com/lambda/latest/dg/intro-invocation-modes.html">event source mapping</a>. You can get the identifier of a mapping from the output of <a>ListEventSourceMappings</a>.</p> <p>When you delete an event source mapping, it enters a <code>Deleting</code> state and might not be completely deleted for several seconds.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteEventSourceMappingRequest;
import org.openapis.openapi.models.operations.DeleteEventSourceMappingResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteEventSourceMappingRequest req = new DeleteEventSourceMappingRequest("sint") {{
                xAmzAlgorithm = "accusantium";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "reiciendis";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "ad";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "dolor";
            }};            

            DeleteEventSourceMappingResponse res = sdk.sdk.deleteEventSourceMapping(req);

            if (res.eventSourceMappingConfiguration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteFunction

<p>Deletes a Lambda function. To delete a specific function version, use the <code>Qualifier</code> parameter. Otherwise, all versions and aliases are deleted.</p> <p>To delete Lambda event source mappings that invoke a function, use <a>DeleteEventSourceMapping</a>. For Amazon Web Services and resources that invoke your function directly, delete the trigger in the service where you originally configured it.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFunctionRequest;
import org.openapis.openapi.models.operations.DeleteFunctionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteFunctionRequest req = new DeleteFunctionRequest("odit") {{
                qualifier = "nemo";
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "iure";
                xAmzCredential = "doloribus";
                xAmzDate = "debitis";
                xAmzSecurityToken = "eius";
                xAmzSignature = "maxime";
                xAmzSignedHeaders = "deleniti";
            }};            

            DeleteFunctionResponse res = sdk.sdk.deleteFunction(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteFunctionCodeSigningConfig

Removes the code signing configuration from the function.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFunctionCodeSigningConfigRequest;
import org.openapis.openapi.models.operations.DeleteFunctionCodeSigningConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteFunctionCodeSigningConfigRequest req = new DeleteFunctionCodeSigningConfigRequest("in") {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "repudiandae";
                xAmzDate = "ullam";
                xAmzSecurityToken = "expedita";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "repellat";
            }};            

            DeleteFunctionCodeSigningConfigResponse res = sdk.sdk.deleteFunctionCodeSigningConfig(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteFunctionConcurrency

Removes a concurrent execution limit from a function.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFunctionConcurrencyRequest;
import org.openapis.openapi.models.operations.DeleteFunctionConcurrencyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteFunctionConcurrencyRequest req = new DeleteFunctionConcurrencyRequest("sed") {{
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "accusantium";
                xAmzDate = "consequuntur";
                xAmzSecurityToken = "praesentium";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "magni";
            }};            

            DeleteFunctionConcurrencyResponse res = sdk.sdk.deleteFunctionConcurrency(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteFunctionEventInvokeConfig

<p>Deletes the configuration for asynchronous invocation for a function, version, or alias.</p> <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFunctionEventInvokeConfigRequest;
import org.openapis.openapi.models.operations.DeleteFunctionEventInvokeConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteFunctionEventInvokeConfigRequest req = new DeleteFunctionEventInvokeConfigRequest("quo") {{
                qualifier = "illum";
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "maxime";
                xAmzCredential = "ea";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "odit";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "accusantium";
            }};            

            DeleteFunctionEventInvokeConfigResponse res = sdk.sdk.deleteFunctionEventInvokeConfig(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteFunctionUrlConfig

Deletes a Lambda function URL. When you delete a function URL, you can't recover it. Creating a new function URL results in a different URL address.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFunctionUrlConfigRequest;
import org.openapis.openapi.models.operations.DeleteFunctionUrlConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ab") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteFunctionUrlConfigRequest req = new DeleteFunctionUrlConfigRequest("maiores") {{
                qualifier = "quidem";
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "autem";
                xAmzDate = "nam";
                xAmzSecurityToken = "eaque";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "nemo";
            }};            

            DeleteFunctionUrlConfigResponse res = sdk.sdk.deleteFunctionUrlConfig(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteLayerVersion

Deletes a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. Deleted versions can no longer be viewed or added to functions. To avoid breaking functions, a copy of the version remains in Lambda until no functions refer to it.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteLayerVersionRequest;
import org.openapis.openapi.models.operations.DeleteLayerVersionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteLayerVersionRequest req = new DeleteLayerVersionRequest("perferendis", 855804L) {{
                xAmzAlgorithm = "amet";
                xAmzContentSha256 = "aut";
                xAmzCredential = "cumque";
                xAmzDate = "corporis";
                xAmzSecurityToken = "hic";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "nobis";
            }};            

            DeleteLayerVersionResponse res = sdk.sdk.deleteLayerVersion(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteProvisionedConcurrencyConfig

Deletes the provisioned concurrency configuration for a function.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteProvisionedConcurrencyConfigRequest;
import org.openapis.openapi.models.operations.DeleteProvisionedConcurrencyConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteProvisionedConcurrencyConfigRequest req = new DeleteProvisionedConcurrencyConfigRequest("quis", "totam") {{
                xAmzAlgorithm = "dignissimos";
                xAmzContentSha256 = "eaque";
                xAmzCredential = "quis";
                xAmzDate = "nesciunt";
                xAmzSecurityToken = "eos";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "dolores";
            }};            

            DeleteProvisionedConcurrencyConfigResponse res = sdk.sdk.deleteProvisionedConcurrencyConfig(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAccountSettings

Retrieves details about your account's <a href="https://docs.aws.amazon.com/lambda/latest/dg/limits.html">limits</a> and usage in an Amazon Web Services Region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountSettingsRequest;
import org.openapis.openapi.models.operations.GetAccountSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAccountSettingsRequest req = new GetAccountSettingsRequest() {{
                xAmzAlgorithm = "quam";
                xAmzContentSha256 = "dolor";
                xAmzCredential = "vero";
                xAmzDate = "nostrum";
                xAmzSecurityToken = "hic";
                xAmzSignature = "recusandae";
                xAmzSignedHeaders = "omnis";
            }};            

            GetAccountSettingsResponse res = sdk.sdk.getAccountSettings(req);

            if (res.getAccountSettingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAlias

Returns details about a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html">alias</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAliasRequest;
import org.openapis.openapi.models.operations.GetAliasResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAliasRequest req = new GetAliasRequest("perspiciatis", "voluptatem") {{
                xAmzAlgorithm = "porro";
                xAmzContentSha256 = "consequuntur";
                xAmzCredential = "blanditiis";
                xAmzDate = "error";
                xAmzSecurityToken = "eaque";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "rerum";
            }};            

            GetAliasResponse res = sdk.sdk.getAlias(req);

            if (res.aliasConfiguration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCodeSigningConfig

Returns information about the specified code signing configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCodeSigningConfigRequest;
import org.openapis.openapi.models.operations.GetCodeSigningConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("adipisci") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCodeSigningConfigRequest req = new GetCodeSigningConfigRequest("asperiores") {{
                xAmzAlgorithm = "earum";
                xAmzContentSha256 = "modi";
                xAmzCredential = "iste";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "provident";
            }};            

            GetCodeSigningConfigResponse res = sdk.sdk.getCodeSigningConfig(req);

            if (res.getCodeSigningConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEventSourceMapping

Returns details about an event source mapping. You can get the identifier of a mapping from the output of <a>ListEventSourceMappings</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEventSourceMappingRequest;
import org.openapis.openapi.models.operations.GetEventSourceMappingResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetEventSourceMappingRequest req = new GetEventSourceMappingRequest("libero") {{
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "quaerat";
                xAmzCredential = "quos";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "dolorem";
                xAmzSignedHeaders = "dolor";
            }};            

            GetEventSourceMappingResponse res = sdk.sdk.getEventSourceMapping(req);

            if (res.eventSourceMappingConfiguration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFunction

Returns information about the function or function version, with a link to download the deployment package that's valid for 10 minutes. If you specify a function version, only details that are specific to that version are returned.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFunctionRequest;
import org.openapis.openapi.models.operations.GetFunctionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetFunctionRequest req = new GetFunctionRequest("ipsum") {{
                qualifier = "hic";
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "cum";
                xAmzCredential = "voluptate";
                xAmzDate = "dignissimos";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "amet";
                xAmzSignedHeaders = "dolorum";
            }};            

            GetFunctionResponse res = sdk.sdk.getFunction(req);

            if (res.getFunctionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFunctionCodeSigningConfig

Returns the code signing configuration for the specified function.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFunctionCodeSigningConfigRequest;
import org.openapis.openapi.models.operations.GetFunctionCodeSigningConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetFunctionCodeSigningConfigRequest req = new GetFunctionCodeSigningConfigRequest("veritatis") {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "iure";
                xAmzDate = "odio";
                xAmzSecurityToken = "quaerat";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "quidem";
            }};            

            GetFunctionCodeSigningConfigResponse res = sdk.sdk.getFunctionCodeSigningConfig(req);

            if (res.getFunctionCodeSigningConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFunctionConcurrency

Returns details about the reserved concurrency configuration for a function. To set a concurrency limit for a function, use <a>PutFunctionConcurrency</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFunctionConcurrencyRequest;
import org.openapis.openapi.models.operations.GetFunctionConcurrencyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetFunctionConcurrencyRequest req = new GetFunctionConcurrencyRequest("voluptas") {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "eos";
                xAmzCredential = "atque";
                xAmzDate = "sit";
                xAmzSecurityToken = "fugiat";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "soluta";
            }};            

            GetFunctionConcurrencyResponse res = sdk.sdk.getFunctionConcurrency(req);

            if (res.getFunctionConcurrencyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFunctionConfiguration

<p>Returns the version-specific settings of a Lambda function or version. The output includes only options that can vary between versions of a function. To modify these settings, use <a>UpdateFunctionConfiguration</a>.</p> <p>To get all of a function's details, including function-level settings, use <a>GetFunction</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFunctionConfigurationRequest;
import org.openapis.openapi.models.operations.GetFunctionConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetFunctionConfigurationRequest req = new GetFunctionConfigurationRequest("iusto") {{
                qualifier = "voluptate";
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "omnis";
                xAmzDate = "necessitatibus";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "asperiores";
                xAmzSignedHeaders = "nihil";
            }};            

            GetFunctionConfigurationResponse res = sdk.sdk.getFunctionConfiguration(req);

            if (res.functionConfiguration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFunctionEventInvokeConfig

<p>Retrieves the configuration for asynchronous invocation for a function, version, or alias.</p> <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFunctionEventInvokeConfigRequest;
import org.openapis.openapi.models.operations.GetFunctionEventInvokeConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetFunctionEventInvokeConfigRequest req = new GetFunctionEventInvokeConfigRequest("voluptate") {{
                qualifier = "id";
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "eius";
                xAmzCredential = "aspernatur";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "amet";
                xAmzSignature = "optio";
                xAmzSignedHeaders = "accusamus";
            }};            

            GetFunctionEventInvokeConfigResponse res = sdk.sdk.getFunctionEventInvokeConfig(req);

            if (res.functionEventInvokeConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFunctionUrlConfig

Returns details about a Lambda function URL.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFunctionUrlConfigRequest;
import org.openapis.openapi.models.operations.GetFunctionUrlConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetFunctionUrlConfigRequest req = new GetFunctionUrlConfigRequest("saepe") {{
                qualifier = "suscipit";
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "provident";
                xAmzCredential = "minima";
                xAmzDate = "repellendus";
                xAmzSecurityToken = "totam";
                xAmzSignature = "similique";
                xAmzSignedHeaders = "alias";
            }};            

            GetFunctionUrlConfigResponse res = sdk.sdk.getFunctionUrlConfig(req);

            if (res.getFunctionUrlConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLayerVersion

Returns information about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>, with a link to download the layer archive that's valid for 10 minutes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLayerVersionRequest;
import org.openapis.openapi.models.operations.GetLayerVersionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLayerVersionRequest req = new GetLayerVersionRequest("quaerat", 273542L) {{
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "quod";
                xAmzCredential = "officiis";
                xAmzDate = "qui";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "a";
                xAmzSignedHeaders = "esse";
            }};            

            GetLayerVersionResponse res = sdk.sdk.getLayerVersion(req);

            if (res.getLayerVersionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLayerVersionByArn

Returns information about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>, with a link to download the layer archive that's valid for 10 minutes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLayerVersionByArnFindEnum;
import org.openapis.openapi.models.operations.GetLayerVersionByArnRequest;
import org.openapis.openapi.models.operations.GetLayerVersionByArnResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("harum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLayerVersionByArnRequest req = new GetLayerVersionByArnRequest("iusto", GetLayerVersionByArnFindEnum.LAYER_VERSION) {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "quisquam";
                xAmzCredential = "tenetur";
                xAmzDate = "amet";
                xAmzSecurityToken = "tempore";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "numquam";
            }};            

            GetLayerVersionByArnResponse res = sdk.sdk.getLayerVersionByArn(req);

            if (res.getLayerVersionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLayerVersionPolicy

Returns the permission policy for a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. For more information, see <a>AddLayerVersionPermission</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLayerVersionPolicyRequest;
import org.openapis.openapi.models.operations.GetLayerVersionPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLayerVersionPolicyRequest req = new GetLayerVersionPolicyRequest("dolorem", 957451L) {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "sit";
                xAmzDate = "expedita";
                xAmzSecurityToken = "neque";
                xAmzSignature = "sed";
                xAmzSignedHeaders = "vel";
            }};            

            GetLayerVersionPolicyResponse res = sdk.sdk.getLayerVersionPolicy(req);

            if (res.getLayerVersionPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPolicy

Returns the <a href="https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html">resource-based IAM policy</a> for a function, version, or alias.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPolicyRequest;
import org.openapis.openapi.models.operations.GetPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPolicyRequest req = new GetPolicyRequest("voluptas") {{
                qualifier = "deserunt";
                xAmzAlgorithm = "quam";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "incidunt";
                xAmzDate = "qui";
                xAmzSecurityToken = "cupiditate";
                xAmzSignature = "maxime";
                xAmzSignedHeaders = "pariatur";
            }};            

            GetPolicyResponse res = sdk.sdk.getPolicy(req);

            if (res.getPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProvisionedConcurrencyConfig

Retrieves the provisioned concurrency configuration for a function's alias or version.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProvisionedConcurrencyConfigRequest;
import org.openapis.openapi.models.operations.GetProvisionedConcurrencyConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("soluta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetProvisionedConcurrencyConfigRequest req = new GetProvisionedConcurrencyConfigRequest("dicta", "laborum") {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "incidunt";
                xAmzCredential = "aspernatur";
                xAmzDate = "dolores";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "aliquid";
            }};            

            GetProvisionedConcurrencyConfigResponse res = sdk.sdk.getProvisionedConcurrencyConfig(req);

            if (res.getProvisionedConcurrencyConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRuntimeManagementConfig

Retrieves the runtime management configuration for a function's version. If the runtime update mode is <b>Manual</b>, this includes the ARN of the runtime version and the runtime update mode. If the runtime update mode is <b>Auto</b> or <b>Function update</b>, this includes the runtime update mode and <code>null</code> is returned for the ARN. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html">Runtime updates</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRuntimeManagementConfigRequest;
import org.openapis.openapi.models.operations.GetRuntimeManagementConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRuntimeManagementConfigRequest req = new GetRuntimeManagementConfigRequest("molestias") {{
                qualifier = "temporibus";
                xAmzAlgorithm = "qui";
                xAmzContentSha256 = "neque";
                xAmzCredential = "fugit";
                xAmzDate = "magni";
                xAmzSecurityToken = "odio";
                xAmzSignature = "sunt";
                xAmzSignedHeaders = "ullam";
            }};            

            GetRuntimeManagementConfigResponse res = sdk.sdk.getRuntimeManagementConfig(req);

            if (res.getRuntimeManagementConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## invoke

<p>Invokes a Lambda function. You can invoke a function synchronously (and wait for the response), or asynchronously. To invoke a function asynchronously, set <code>InvocationType</code> to <code>Event</code>.</p> <p>For <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-sync.html">synchronous invocation</a>, details about the function response, including errors, are included in the response body and headers. For either invocation type, you can find more information in the <a href="https://docs.aws.amazon.com/lambda/latest/dg/monitoring-functions.html">execution log</a> and <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-x-ray.html">trace</a>.</p> <p>When an error occurs, your function may be invoked multiple times. Retry behavior varies by error type, client, event source, and invocation type. For example, if you invoke a function asynchronously and it returns an error, Lambda executes the function up to two more times. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-retries.html">Error handling and automatic retries in Lambda</a>.</p> <p>For <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html">asynchronous invocation</a>, Lambda adds events to a queue before sending them to your function. If your function does not have enough capacity to keep up with the queue, events may be lost. Occasionally, your function may receive the same event multiple times, even if no error occurs. To retain events that were not processed, configure your function with a <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-dlq">dead-letter queue</a>.</p> <p>The status code in the API response doesn't reflect function errors. Error codes are reserved for errors that prevent your function from executing, such as permissions errors, <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html">quota</a> errors, or issues with your function's code and configuration. For example, Lambda returns <code>TooManyRequestsException</code> if running the function would cause you to exceed a concurrency limit at either the account level (<code>ConcurrentInvocationLimitExceeded</code>) or function level (<code>ReservedFunctionConcurrentInvocationLimitExceeded</code>).</p> <p>For functions with a long timeout, your client might disconnect during synchronous invocation while it waits for a response. Configure your HTTP client, SDK, firewall, proxy, or operating system to allow for long connections with timeout or keep-alive settings.</p> <p>This operation requires permission for the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awslambda.html">lambda:InvokeFunction</a> action. For details on how to set up permissions for cross-account invocations, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html#permissions-resource-xaccountinvoke">Granting function access to other accounts</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InvokeRequest;
import org.openapis.openapi.models.operations.InvokeRequestBody;
import org.openapis.openapi.models.operations.InvokeResponse;
import org.openapis.openapi.models.operations.InvokeXAmzInvocationTypeEnum;
import org.openapis.openapi.models.operations.InvokeXAmzLogTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            InvokeRequest req = new InvokeRequest("hic",                 new InvokeRequestBody() {{
                                payload = "voluptatem";
                            }};) {{
                qualifier = "cumque";
                xAmzAlgorithm = "soluta";
                xAmzClientContext = "nobis";
                xAmzContentSha256 = "et";
                xAmzCredential = "saepe";
                xAmzDate = "ipsum";
                xAmzInvocationType = InvokeXAmzInvocationTypeEnum.EVENT;
                xAmzLogType = InvokeXAmzLogTypeEnum.TAIL;
                xAmzSecurityToken = "quos";
                xAmzSignature = "tempore";
                xAmzSignedHeaders = "cupiditate";
            }};            

            InvokeResponse res = sdk.sdk.invoke(req);

            if (res.invocationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~invokeAsync~~

<important> <p>For asynchronous function invocation, use <a>Invoke</a>.</p> </important> <p>Invokes a function asynchronously.</p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InvokeAsyncRequest;
import org.openapis.openapi.models.operations.InvokeAsyncRequestBody;
import org.openapis.openapi.models.operations.InvokeAsyncResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aperiam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            InvokeAsyncRequest req = new InvokeAsyncRequest("delectus",                 new InvokeAsyncRequestBody("dolorem");) {{
                xAmzAlgorithm = "dolore";
                xAmzContentSha256 = "labore";
                xAmzCredential = "adipisci";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "quae";
                xAmzSignedHeaders = "aut";
            }};            

            InvokeAsyncResponse res = sdk.sdk.invokeAsync(req);

            if (res.invokeAsyncResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## invokeWithResponseStream

<p>Configure your Lambda functions to stream response payloads back to clients. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-response-streaming.html">Configuring a Lambda function to stream responses</a>.</p> <p>This operation requires permission for the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awslambda.html">lambda:InvokeFunction</a> action. For details on how to set up permissions for cross-account invocations, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html#permissions-resource-xaccountinvoke">Granting function access to other accounts</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InvokeWithResponseStreamRequest;
import org.openapis.openapi.models.operations.InvokeWithResponseStreamRequestBody;
import org.openapis.openapi.models.operations.InvokeWithResponseStreamResponse;
import org.openapis.openapi.models.operations.InvokeWithResponseStreamXAmzInvocationTypeEnum;
import org.openapis.openapi.models.operations.InvokeWithResponseStreamXAmzLogTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            InvokeWithResponseStreamRequest req = new InvokeWithResponseStreamRequest("itaque",                 new InvokeWithResponseStreamRequestBody() {{
                                payload = "consequatur";
                            }};) {{
                qualifier = "est";
                xAmzAlgorithm = "repellendus";
                xAmzClientContext = "porro";
                xAmzContentSha256 = "doloribus";
                xAmzCredential = "ut";
                xAmzDate = "facilis";
                xAmzInvocationType = InvokeWithResponseStreamXAmzInvocationTypeEnum.DRY_RUN;
                xAmzLogType = InvokeWithResponseStreamXAmzLogTypeEnum.NONE;
                xAmzSecurityToken = "quae";
                xAmzSignature = "laudantium";
                xAmzSignedHeaders = "odio";
            }};            

            InvokeWithResponseStreamResponse res = sdk.sdk.invokeWithResponseStream(req);

            if (res.invokeWithResponseStreamResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAliases

Returns a list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html">aliases</a> for a Lambda function.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAliasesRequest;
import org.openapis.openapi.models.operations.ListAliasesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAliasesRequest req = new ListAliasesRequest("voluptatibus") {{
                functionVersion = "quisquam";
                marker = "vero";
                maxItems = 606476L;
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "delectus";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "consectetur";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "tenetur";
            }};            

            ListAliasesResponse res = sdk.sdk.listAliases(req);

            if (res.listAliasesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCodeSigningConfigs

Returns a list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuring-codesigning.html">code signing configurations</a>. A request returns up to 10,000 configurations per call. You can use the <code>MaxItems</code> parameter to return fewer configurations per call. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCodeSigningConfigsRequest;
import org.openapis.openapi.models.operations.ListCodeSigningConfigsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListCodeSigningConfigsRequest req = new ListCodeSigningConfigsRequest() {{
                marker = "hic";
                maxItems = 715561L;
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "odio";
                xAmzCredential = "similique";
                xAmzDate = "facilis";
                xAmzSecurityToken = "vero";
                xAmzSignature = "ducimus";
                xAmzSignedHeaders = "dolore";
            }};            

            ListCodeSigningConfigsResponse res = sdk.sdk.listCodeSigningConfigs(req);

            if (res.listCodeSigningConfigsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listEventSourceMappings

Lists event source mappings. Specify an <code>EventSourceArn</code> to show only event source mappings for a single event source.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEventSourceMappingsRequest;
import org.openapis.openapi.models.operations.ListEventSourceMappingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListEventSourceMappingsRequest req = new ListEventSourceMappingsRequest() {{
                eventSourceArn = "illum";
                functionName = "sequi";
                marker = "natus";
                maxItems = 773326L;
                xAmzAlgorithm = "aut";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "exercitationem";
                xAmzDate = "nulla";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "porro";
                xAmzSignedHeaders = "maiores";
            }};            

            ListEventSourceMappingsResponse res = sdk.sdk.listEventSourceMappings(req);

            if (res.listEventSourceMappingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listFunctionEventInvokeConfigs

<p>Retrieves a list of configurations for asynchronous invocation for a function.</p> <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFunctionEventInvokeConfigsRequest;
import org.openapis.openapi.models.operations.ListFunctionEventInvokeConfigsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloribus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListFunctionEventInvokeConfigsRequest req = new ListFunctionEventInvokeConfigsRequest("iusto") {{
                marker = "eligendi";
                maxItems = 497391L;
                xAmzAlgorithm = "alias";
                xAmzContentSha256 = "officia";
                xAmzCredential = "tempora";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "ea";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "vel";
            }};            

            ListFunctionEventInvokeConfigsResponse res = sdk.sdk.listFunctionEventInvokeConfigs(req);

            if (res.listFunctionEventInvokeConfigsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listFunctionUrlConfigs

Returns a list of Lambda function URLs for the specified function.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFunctionUrlConfigsRequest;
import org.openapis.openapi.models.operations.ListFunctionUrlConfigsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("possimus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListFunctionUrlConfigsRequest req = new ListFunctionUrlConfigsRequest("magnam") {{
                marker = "ratione";
                maxItems = 401132L;
                xAmzAlgorithm = "laudantium";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "dolor";
                xAmzDate = "maiores";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "ex";
                xAmzSignedHeaders = "nulla";
            }};            

            ListFunctionUrlConfigsResponse res = sdk.sdk.listFunctionUrlConfigs(req);

            if (res.listFunctionUrlConfigsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listFunctions

<p>Returns a list of Lambda functions, with the version-specific configuration of each. Lambda returns up to 50 functions per call.</p> <p>Set <code>FunctionVersion</code> to <code>ALL</code> to include all published versions of each function in addition to the unpublished version.</p> <note> <p>The <code>ListFunctions</code> operation returns a subset of the <a>FunctionConfiguration</a> fields. To get the additional fields (State, StateReasonCode, StateReason, LastUpdateStatus, LastUpdateStatusReason, LastUpdateStatusReasonCode, RuntimeVersionConfig) for a function or version, use <a>GetFunction</a>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFunctionsFunctionVersionEnum;
import org.openapis.openapi.models.operations.ListFunctionsRequest;
import org.openapis.openapi.models.operations.ListFunctionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListFunctionsRequest req = new ListFunctionsRequest() {{
                functionVersion = ListFunctionsFunctionVersionEnum.ALL;
                marker = "voluptatibus";
                masterRegion = "nostrum";
                maxItems = 960835L;
                xAmzAlgorithm = "quisquam";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "ea";
                xAmzDate = "impedit";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "veniam";
                xAmzSignedHeaders = "aliquid";
            }};            

            ListFunctionsResponse res = sdk.sdk.listFunctions(req);

            if (res.listFunctionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listFunctionsByCodeSigningConfig

List the functions that use the specified code signing configuration. You can use this method prior to deleting a code signing configuration, to verify that no functions are using it.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFunctionsByCodeSigningConfigRequest;
import org.openapis.openapi.models.operations.ListFunctionsByCodeSigningConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("inventore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListFunctionsByCodeSigningConfigRequest req = new ListFunctionsByCodeSigningConfigRequest("magnam") {{
                marker = "ea";
                maxItems = 775220L;
                xAmzAlgorithm = "consectetur";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "aspernatur";
                xAmzDate = "minima";
                xAmzSecurityToken = "eaque";
                xAmzSignature = "a";
                xAmzSignedHeaders = "libero";
            }};            

            ListFunctionsByCodeSigningConfigResponse res = sdk.sdk.listFunctionsByCodeSigningConfig(req);

            if (res.listFunctionsByCodeSigningConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listLayerVersions

Lists the versions of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. Versions that have been deleted aren't listed. Specify a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime identifier</a> to list only versions that indicate that they're compatible with that runtime. Specify a compatible architecture to include only layer versions that are compatible with that architecture.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListLayerVersionsCompatibleArchitectureEnum;
import org.openapis.openapi.models.operations.ListLayerVersionsCompatibleRuntimeEnum;
import org.openapis.openapi.models.operations.ListLayerVersionsRequest;
import org.openapis.openapi.models.operations.ListLayerVersionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListLayerVersionsRequest req = new ListLayerVersionsRequest("aut") {{
                compatibleArchitecture = ListLayerVersionsCompatibleArchitectureEnum.ARM64;
                compatibleRuntime = ListLayerVersionsCompatibleRuntimeEnum.GO1_X;
                marker = "aliquam";
                maxItems = 146946L;
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "inventore";
                xAmzCredential = "non";
                xAmzDate = "et";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "placeat";
            }};            

            ListLayerVersionsResponse res = sdk.sdk.listLayerVersions(req);

            if (res.listLayerVersionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listLayers

Lists <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-layers.html">Lambda layers</a> and shows information about the latest version of each. Specify a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime identifier</a> to list only layers that indicate that they're compatible with that runtime. Specify a compatible architecture to include only layers that are compatible with that <a href="https://docs.aws.amazon.com/lambda/latest/dg/foundation-arch.html">instruction set architecture</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListLayersCompatibleArchitectureEnum;
import org.openapis.openapi.models.operations.ListLayersCompatibleRuntimeEnum;
import org.openapis.openapi.models.operations.ListLayersRequest;
import org.openapis.openapi.models.operations.ListLayersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("velit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListLayersRequest req = new ListLayersRequest() {{
                compatibleArchitecture = ListLayersCompatibleArchitectureEnum.X8664;
                compatibleRuntime = ListLayersCompatibleRuntimeEnum.PYTHON36;
                marker = "nobis";
                maxItems = 557369L;
                xAmzAlgorithm = "assumenda";
                xAmzContentSha256 = "nulla";
                xAmzCredential = "voluptas";
                xAmzDate = "libero";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "numquam";
            }};            

            ListLayersResponse res = sdk.sdk.listLayers(req);

            if (res.listLayersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listProvisionedConcurrencyConfigs

Retrieves a list of provisioned concurrency configurations for a function.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListProvisionedConcurrencyConfigsListEnum;
import org.openapis.openapi.models.operations.ListProvisionedConcurrencyConfigsRequest;
import org.openapis.openapi.models.operations.ListProvisionedConcurrencyConfigsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListProvisionedConcurrencyConfigsRequest req = new ListProvisionedConcurrencyConfigsRequest("provident", ListProvisionedConcurrencyConfigsListEnum.ALL) {{
                marker = "ipsa";
                maxItems = 476477L;
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "odio";
                xAmzCredential = "eius";
                xAmzDate = "esse";
                xAmzSecurityToken = "esse";
                xAmzSignature = "rem";
                xAmzSignedHeaders = "fuga";
            }};            

            ListProvisionedConcurrencyConfigsResponse res = sdk.sdk.listProvisionedConcurrencyConfigs(req);

            if (res.listProvisionedConcurrencyConfigsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTags

Returns a function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a>. You can also view tags with <a>GetFunction</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsRequest;
import org.openapis.openapi.models.operations.ListTagsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reprehenderit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsRequest req = new ListTagsRequest("quidem") {{
                xAmzAlgorithm = "fugiat";
                xAmzContentSha256 = "ut";
                xAmzCredential = "eum";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "assumenda";
                xAmzSignature = "eos";
                xAmzSignedHeaders = "praesentium";
            }};            

            ListTagsResponse res = sdk.sdk.listTags(req);

            if (res.listTagsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listVersionsByFunction

Returns a list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">versions</a>, with the version-specific configuration of each. Lambda returns up to 50 versions per call.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListVersionsByFunctionRequest;
import org.openapis.openapi.models.operations.ListVersionsByFunctionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quisquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListVersionsByFunctionRequest req = new ListVersionsByFunctionRequest("veritatis") {{
                marker = "ipsa";
                maxItems = 660040L;
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "neque";
                xAmzCredential = "quo";
                xAmzDate = "illum";
                xAmzSecurityToken = "quo";
                xAmzSignature = "fuga";
                xAmzSignedHeaders = "eius";
            }};            

            ListVersionsByFunctionResponse res = sdk.sdk.listVersionsByFunction(req);

            if (res.listVersionsByFunctionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## publishLayerVersion

<p>Creates an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a> from a ZIP archive. Each time you call <code>PublishLayerVersion</code> with the same layer name, a new version is created.</p> <p>Add layers to your function with <a>CreateFunction</a> or <a>UpdateFunctionConfiguration</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PublishLayerVersionRequest;
import org.openapis.openapi.models.operations.PublishLayerVersionRequestBody;
import org.openapis.openapi.models.operations.PublishLayerVersionRequestBodyContent;
import org.openapis.openapi.models.operations.PublishLayerVersionResponse;
import org.openapis.openapi.models.shared.ArchitectureEnum;
import org.openapis.openapi.models.shared.RuntimeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PublishLayerVersionRequest req = new PublishLayerVersionRequest("voluptas",                 new PublishLayerVersionRequestBody(                new PublishLayerVersionRequestBodyContent() {{
                                                s3Bucket = "ab";
                                                s3Key = "cupiditate";
                                                s3ObjectVersion = "consequatur";
                                                zipFile = "tempora";
                                            }};) {{
                                compatibleArchitectures = new org.openapis.openapi.models.shared.ArchitectureEnum[]{{
                                    add(ArchitectureEnum.X8664),
                                    add(ArchitectureEnum.X8664),
                                    add(ArchitectureEnum.X8664),
                                    add(ArchitectureEnum.ARM64),
                                }};
                                compatibleRuntimes = new org.openapis.openapi.models.shared.RuntimeEnum[]{{
                                    add(RuntimeEnum.PROVIDED_AL2),
                                    add(RuntimeEnum.NODEJS43),
                                }};
                                description = "distinctio";
                                licenseInfo = "quod";
                            }};) {{
                xAmzAlgorithm = "dignissimos";
                xAmzContentSha256 = "inventore";
                xAmzCredential = "nihil";
                xAmzDate = "totam";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "aliquam";
                xAmzSignedHeaders = "odio";
            }};            

            PublishLayerVersionResponse res = sdk.sdk.publishLayerVersion(req);

            if (res.publishLayerVersionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## publishVersion

<p>Creates a <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">version</a> from the current code and configuration of a function. Use versions to create a snapshot of your function code and configuration that doesn't change.</p> <p>Lambda doesn't publish a version if the function's configuration and code haven't changed since the last version. Use <a>UpdateFunctionCode</a> or <a>UpdateFunctionConfiguration</a> to update the function before publishing a version.</p> <p>Clients can invoke versions directly or with an alias. To create an alias, use <a>CreateAlias</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PublishVersionRequest;
import org.openapis.openapi.models.operations.PublishVersionRequestBody;
import org.openapis.openapi.models.operations.PublishVersionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PublishVersionRequest req = new PublishVersionRequest("commodi",                 new PublishVersionRequestBody() {{
                                codeSha256 = "sapiente";
                                description = "dolores";
                                revisionId = "deserunt";
                            }};) {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "accusantium";
                xAmzCredential = "porro";
                xAmzDate = "eum";
                xAmzSecurityToken = "quas";
                xAmzSignature = "praesentium";
                xAmzSignedHeaders = "consequuntur";
            }};            

            PublishVersionResponse res = sdk.sdk.publishVersion(req);

            if (res.functionConfiguration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putFunctionCodeSigningConfig

Update the code signing configuration for the function. Changes to the code signing configuration take effect the next time a user tries to deploy a code package to the function. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutFunctionCodeSigningConfigRequest;
import org.openapis.openapi.models.operations.PutFunctionCodeSigningConfigRequestBody;
import org.openapis.openapi.models.operations.PutFunctionCodeSigningConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutFunctionCodeSigningConfigRequest req = new PutFunctionCodeSigningConfigRequest("fugit",                 new PutFunctionCodeSigningConfigRequestBody("fuga");) {{
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "incidunt";
                xAmzCredential = "atque";
                xAmzDate = "explicabo";
                xAmzSecurityToken = "minima";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "fugit";
            }};            

            PutFunctionCodeSigningConfigResponse res = sdk.sdk.putFunctionCodeSigningConfig(req);

            if (res.putFunctionCodeSigningConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putFunctionConcurrency

<p>Sets the maximum number of simultaneous executions for a function, and reserves capacity for that concurrency level.</p> <p>Concurrency settings apply to the function as a whole, including all published versions and the unpublished version. Reserving concurrency both ensures that your function has capacity to process the specified number of events simultaneously, and prevents it from scaling beyond that level. Use <a>GetFunction</a> to see the current setting for a function.</p> <p>Use <a>GetAccountSettings</a> to see your Regional concurrency limit. You can reserve concurrency for as many functions as you like, as long as you leave at least 100 simultaneous executions unreserved for functions that aren't configured with a per-function limit. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-scaling.html">Lambda function scaling</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutFunctionConcurrencyRequest;
import org.openapis.openapi.models.operations.PutFunctionConcurrencyRequestBody;
import org.openapis.openapi.models.operations.PutFunctionConcurrencyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutFunctionConcurrencyRequest req = new PutFunctionConcurrencyRequest("consequuntur",                 new PutFunctionConcurrencyRequestBody(187131L);) {{
                xAmzAlgorithm = "explicabo";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "occaecati";
                xAmzDate = "atque";
                xAmzSecurityToken = "et";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "eveniet";
            }};            

            PutFunctionConcurrencyResponse res = sdk.sdk.putFunctionConcurrency(req);

            if (res.concurrency != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putFunctionEventInvokeConfig

<p>Configures options for <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html">asynchronous invocation</a> on a function, version, or alias. If a configuration already exists for a function, version, or alias, this operation overwrites it. If you exclude any settings, they are removed. To set one option without affecting existing settings for other options, use <a>UpdateFunctionEventInvokeConfig</a>.</p> <p>By default, Lambda retries an asynchronous invocation twice if the function returns an error. It retains events in a queue for up to six hours. When an event fails all processing attempts or stays in the asynchronous invocation queue for too long, Lambda discards it. To retain discarded events, configure a dead-letter queue with <a>UpdateFunctionConfiguration</a>.</p> <p>To send an invocation record to a queue, topic, function, or event bus, specify a <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-async-destinations">destination</a>. You can configure separate destinations for successful invocations (on-success) and events that fail all processing attempts (on-failure). You can configure destinations in addition to or instead of a dead-letter queue.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutFunctionEventInvokeConfigRequest;
import org.openapis.openapi.models.operations.PutFunctionEventInvokeConfigRequestBody;
import org.openapis.openapi.models.operations.PutFunctionEventInvokeConfigRequestBodyDestinationConfig;
import org.openapis.openapi.models.operations.PutFunctionEventInvokeConfigResponse;
import org.openapis.openapi.models.shared.OnFailure;
import org.openapis.openapi.models.shared.OnSuccess;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutFunctionEventInvokeConfigRequest req = new PutFunctionEventInvokeConfigRequest("veritatis",                 new PutFunctionEventInvokeConfigRequestBody() {{
                                destinationConfig = new PutFunctionEventInvokeConfigRequestBodyDestinationConfig() {{
                                    onFailure = new OnFailure() {{
                                        destination = "esse";
                                    }};;
                                    onSuccess = new OnSuccess() {{
                                        destination = "quod";
                                    }};;
                                }};;
                                maximumEventAgeInSeconds = 724168L;
                                maximumRetryAttempts = 877131L;
                            }};) {{
                qualifier = "aliquid";
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "vel";
                xAmzDate = "harum";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "rerum";
                xAmzSignedHeaders = "occaecati";
            }};            

            PutFunctionEventInvokeConfigResponse res = sdk.sdk.putFunctionEventInvokeConfig(req);

            if (res.functionEventInvokeConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putProvisionedConcurrencyConfig

Adds a provisioned concurrency configuration to a function's alias or version.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutProvisionedConcurrencyConfigRequest;
import org.openapis.openapi.models.operations.PutProvisionedConcurrencyConfigRequestBody;
import org.openapis.openapi.models.operations.PutProvisionedConcurrencyConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutProvisionedConcurrencyConfigRequest req = new PutProvisionedConcurrencyConfigRequest("distinctio", "eligendi",                 new PutProvisionedConcurrencyConfigRequestBody(27069L);) {{
                xAmzAlgorithm = "culpa";
                xAmzContentSha256 = "tempore";
                xAmzCredential = "adipisci";
                xAmzDate = "cumque";
                xAmzSecurityToken = "consequuntur";
                xAmzSignature = "consequatur";
                xAmzSignedHeaders = "minus";
            }};            

            PutProvisionedConcurrencyConfigResponse res = sdk.sdk.putProvisionedConcurrencyConfig(req);

            if (res.putProvisionedConcurrencyConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putRuntimeManagementConfig

Sets the runtime management configuration for a function's version. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html">Runtime updates</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutRuntimeManagementConfigRequest;
import org.openapis.openapi.models.operations.PutRuntimeManagementConfigRequestBody;
import org.openapis.openapi.models.operations.PutRuntimeManagementConfigRequestBodyUpdateRuntimeOnEnum;
import org.openapis.openapi.models.operations.PutRuntimeManagementConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quaerat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutRuntimeManagementConfigRequest req = new PutRuntimeManagementConfigRequest("sapiente",                 new PutRuntimeManagementConfigRequestBody(PutRuntimeManagementConfigRequestBodyUpdateRuntimeOnEnum.AUTO) {{
                                runtimeVersionArn = "esse";
                            }};) {{
                qualifier = "blanditiis";
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "a";
                xAmzCredential = "nulla";
                xAmzDate = "quas";
                xAmzSecurityToken = "esse";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "a";
            }};            

            PutRuntimeManagementConfigResponse res = sdk.sdk.putRuntimeManagementConfig(req);

            if (res.putRuntimeManagementConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeLayerVersionPermission

Removes a statement from the permissions policy for a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. For more information, see <a>AddLayerVersionPermission</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveLayerVersionPermissionRequest;
import org.openapis.openapi.models.operations.RemoveLayerVersionPermissionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RemoveLayerVersionPermissionRequest req = new RemoveLayerVersionPermissionRequest("sint", "pariatur", 820767L) {{
                revisionId = "quia";
                xAmzAlgorithm = "eveniet";
                xAmzContentSha256 = "asperiores";
                xAmzCredential = "facere";
                xAmzDate = "veritatis";
                xAmzSecurityToken = "consequuntur";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "similique";
            }};            

            RemoveLayerVersionPermissionResponse res = sdk.sdk.removeLayerVersionPermission(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removePermission

Revokes function-use permission from an Amazon Web Service or another Amazon Web Services account. You can get the ID of the statement from the output of <a>GetPolicy</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemovePermissionRequest;
import org.openapis.openapi.models.operations.RemovePermissionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RemovePermissionRequest req = new RemovePermissionRequest("aliquid", "tenetur") {{
                qualifier = "quae";
                revisionId = "earum";
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "in";
                xAmzCredential = "eius";
                xAmzDate = "libero";
                xAmzSecurityToken = "illum";
                xAmzSignature = "soluta";
                xAmzSignedHeaders = "accusantium";
            }};            

            RemovePermissionResponse res = sdk.sdk.removePermission(req);

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

Adds <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a> to a function.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceRequestBody;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest("sapiente",                 new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("ullam", "reprehenderit");
                                            }});) {{
                xAmzAlgorithm = "ullam";
                xAmzContentSha256 = "nisi";
                xAmzCredential = "aut";
                xAmzDate = "voluptatum";
                xAmzSecurityToken = "qui";
                xAmzSignature = "quibusdam";
                xAmzSignedHeaders = "ex";
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

## untagResource

Removes <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a> from a function.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("itaque",                 new String[]{{
                                add("architecto"),
                                add("omnis"),
                                add("tenetur"),
                            }}) {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "at";
                xAmzCredential = "et";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "minima";
                xAmzSignedHeaders = "veritatis";
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

## updateAlias

Updates the configuration of a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html">alias</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAliasRequest;
import org.openapis.openapi.models.operations.UpdateAliasRequestBody;
import org.openapis.openapi.models.operations.UpdateAliasRequestBodyRoutingConfig;
import org.openapis.openapi.models.operations.UpdateAliasResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consectetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateAliasRequest req = new UpdateAliasRequest("adipisci", "iste",                 new UpdateAliasRequestBody() {{
                                description = "temporibus";
                                functionVersion = "accusantium";
                                revisionId = "rem";
                                routingConfig = new UpdateAliasRequestBodyRoutingConfig() {{
                                    additionalVersionWeights = new java.util.HashMap<String, Double>() {{
                                        put("laudantium", 4287.96);
                                    }};
                                }};;
                            }};) {{
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "ab";
                xAmzCredential = "corrupti";
                xAmzDate = "non";
                xAmzSecurityToken = "voluptatem";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "occaecati";
            }};            

            UpdateAliasResponse res = sdk.sdk.updateAlias(req);

            if (res.aliasConfiguration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCodeSigningConfig

Update the code signing configuration. Changes to the code signing configuration take effect the next time a user tries to deploy a code package to the function. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCodeSigningConfigRequest;
import org.openapis.openapi.models.operations.UpdateCodeSigningConfigRequestBody;
import org.openapis.openapi.models.operations.UpdateCodeSigningConfigRequestBodyAllowedPublishers;
import org.openapis.openapi.models.operations.UpdateCodeSigningConfigRequestBodyCodeSigningPolicies;
import org.openapis.openapi.models.operations.UpdateCodeSigningConfigResponse;
import org.openapis.openapi.models.shared.CodeSigningPolicyEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateCodeSigningConfigRequest req = new UpdateCodeSigningConfigRequest("impedit",                 new UpdateCodeSigningConfigRequestBody() {{
                                allowedPublishers = new UpdateCodeSigningConfigRequestBodyAllowedPublishers() {{
                                    signingProfileVersionArns = new String[]{{
                                        add("voluptas"),
                                    }};
                                }};;
                                codeSigningPolicies = new UpdateCodeSigningConfigRequestBodyCodeSigningPolicies() {{
                                    untrustedArtifactOnDeployment = CodeSigningPolicyEnum.WARN;
                                }};;
                                description = "dignissimos";
                            }};) {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "natus";
                xAmzDate = "velit";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "voluptas";
                xAmzSignedHeaders = "asperiores";
            }};            

            UpdateCodeSigningConfigResponse res = sdk.sdk.updateCodeSigningConfig(req);

            if (res.updateCodeSigningConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateEventSourceMapping

<p>Updates an event source mapping. You can change the function that Lambda invokes, or pause invocation and resume later from the same location.</p> <p>For details about how to configure different event sources, see the following topics. </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html#services-dynamodb-eventsourcemapping"> Amazon DynamoDB Streams</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html#services-kinesis-eventsourcemapping"> Amazon Kinesis</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#events-sqs-eventsource"> Amazon SQS</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#services-mq-eventsourcemapping"> Amazon MQ and RabbitMQ</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html"> Amazon MSK</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/kafka-smaa.html"> Apache Kafka</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-documentdb.html"> Amazon DocumentDB</a> </p> </li> </ul> <p>The following error handling options are available only for stream sources (DynamoDB and Kinesis):</p> <ul> <li> <p> <code>BisectBatchOnFunctionError</code> – If the function returns an error, split the batch in two and retry.</p> </li> <li> <p> <code>DestinationConfig</code> – Send discarded records to an Amazon SQS queue or Amazon SNS topic.</p> </li> <li> <p> <code>MaximumRecordAgeInSeconds</code> – Discard records older than the specified age. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires</p> </li> <li> <p> <code>MaximumRetryAttempts</code> – Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires.</p> </li> <li> <p> <code>ParallelizationFactor</code> – Process multiple batches from each shard concurrently.</p> </li> </ul> <p>For information about which configuration parameters apply to each event source, see the following topics.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html#services-ddb-params"> Amazon DynamoDB Streams</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html#services-kinesis-params"> Amazon Kinesis</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#services-sqs-params"> Amazon SQS</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#services-mq-params"> Amazon MQ and RabbitMQ</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-parms"> Amazon MSK</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kafka.html#services-kafka-parms"> Apache Kafka</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-documentdb.html#docdb-configuration"> Amazon DocumentDB</a> </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateEventSourceMappingRequest;
import org.openapis.openapi.models.operations.UpdateEventSourceMappingRequestBody;
import org.openapis.openapi.models.operations.UpdateEventSourceMappingRequestBodyDestinationConfig;
import org.openapis.openapi.models.operations.UpdateEventSourceMappingRequestBodyDocumentDBEventSourceConfig;
import org.openapis.openapi.models.operations.UpdateEventSourceMappingRequestBodyFilterCriteria;
import org.openapis.openapi.models.operations.UpdateEventSourceMappingRequestBodyScalingConfig;
import org.openapis.openapi.models.operations.UpdateEventSourceMappingResponse;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.FullDocumentEnum;
import org.openapis.openapi.models.shared.FunctionResponseTypeEnum;
import org.openapis.openapi.models.shared.OnFailure;
import org.openapis.openapi.models.shared.OnSuccess;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SourceAccessConfiguration;
import org.openapis.openapi.models.shared.SourceAccessTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aperiam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateEventSourceMappingRequest req = new UpdateEventSourceMappingRequest(                new UpdateEventSourceMappingRequestBody() {{
                                batchSize = 409054L;
                                bisectBatchOnFunctionError = false;
                                destinationConfig = new UpdateEventSourceMappingRequestBodyDestinationConfig() {{
                                    onFailure = new OnFailure() {{
                                        destination = "quaerat";
                                    }};;
                                    onSuccess = new OnSuccess() {{
                                        destination = "consequuntur";
                                    }};;
                                }};;
                                documentDBEventSourceConfig = new UpdateEventSourceMappingRequestBodyDocumentDBEventSourceConfig() {{
                                    collectionName = "repellendus";
                                    databaseName = "officia";
                                    fullDocument = FullDocumentEnum.DEFAULT_;
                                }};;
                                enabled = false;
                                filterCriteria = new UpdateEventSourceMappingRequestBodyFilterCriteria() {{
                                    filters = new org.openapis.openapi.models.shared.Filter[]{{
                                        add(new Filter() {{
                                            pattern = "officia";
                                        }}),
                                        add(new Filter() {{
                                            pattern = "asperiores";
                                        }}),
                                    }};
                                }};;
                                functionName = "nemo";
                                functionResponseTypes = new org.openapis.openapi.models.shared.FunctionResponseTypeEnum[]{{
                                    add(FunctionResponseTypeEnum.REPORT_BATCH_ITEM_FAILURES),
                                }};
                                maximumBatchingWindowInSeconds = 312753L;
                                maximumRecordAgeInSeconds = 783235L;
                                maximumRetryAttempts = 801836L;
                                parallelizationFactor = 288398L;
                                scalingConfig = new UpdateEventSourceMappingRequestBodyScalingConfig() {{
                                    maximumConcurrency = 70447L;
                                }};;
                                sourceAccessConfigurations = new org.openapis.openapi.models.shared.SourceAccessConfiguration[]{{
                                    add(new SourceAccessConfiguration() {{
                                        type = SourceAccessTypeEnum.VIRTUAL_HOST;
                                        uri = "https://hefty-default.name";
                                    }}),
                                }};
                                tumblingWindowInSeconds = 665859L;
                            }};, "recusandae") {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "fugiat";
                xAmzCredential = "vel";
                xAmzDate = "ducimus";
                xAmzSecurityToken = "quos";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "labore";
            }};            

            UpdateEventSourceMappingResponse res = sdk.sdk.updateEventSourceMapping(req);

            if (res.eventSourceMappingConfiguration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateFunctionCode

<p>Updates a Lambda function's code. If code signing is enabled for the function, the code package must be signed by a trusted publisher. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html">Configuring code signing for Lambda</a>.</p> <p>If the function's package type is <code>Image</code>, then you must specify the code package in <code>ImageUri</code> as the URI of a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-images.html">container image</a> in the Amazon ECR registry.</p> <p>If the function's package type is <code>Zip</code>, then you must specify the deployment package as a <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html#gettingstarted-package-zip">.zip file archive</a>. Enter the Amazon S3 bucket and key of the code .zip file location. You can also provide the function code inline using the <code>ZipFile</code> field.</p> <p>The code in the deployment package must be compatible with the target instruction set architecture of the function (<code>x86-64</code> or <code>arm64</code>).</p> <p>The function's code is locked when you publish a version. You can't modify the code of a published version, only the unpublished version.</p> <note> <p>For a function defined as a container image, Lambda resolves the image tag to an image digest. In Amazon ECR, if you update the image tag to a new image, Lambda does not automatically update the function.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateFunctionCodeRequest;
import org.openapis.openapi.models.operations.UpdateFunctionCodeRequestBody;
import org.openapis.openapi.models.operations.UpdateFunctionCodeResponse;
import org.openapis.openapi.models.shared.ArchitectureEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("possimus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateFunctionCodeRequest req = new UpdateFunctionCodeRequest("facilis",                 new UpdateFunctionCodeRequestBody() {{
                                architectures = new org.openapis.openapi.models.shared.ArchitectureEnum[]{{
                                    add(ArchitectureEnum.X8664),
                                    add(ArchitectureEnum.X8664),
                                    add(ArchitectureEnum.X8664),
                                }};
                                dryRun = false;
                                imageUri = "reiciendis";
                                publish = false;
                                revisionId = "assumenda";
                                s3Bucket = "nemo";
                                s3Key = "recusandae";
                                s3ObjectVersion = "aliquid";
                                zipFile = "aperiam";
                            }};) {{
                xAmzAlgorithm = "cum";
                xAmzContentSha256 = "consectetur";
                xAmzCredential = "in";
                xAmzDate = "exercitationem";
                xAmzSecurityToken = "earum";
                xAmzSignature = "facere";
                xAmzSignedHeaders = "numquam";
            }};            

            UpdateFunctionCodeResponse res = sdk.sdk.updateFunctionCode(req);

            if (res.functionConfiguration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateFunctionConfiguration

<p>Modify the version-specific settings of a Lambda function.</p> <p>When you update a function, Lambda provisions an instance of the function and its supporting resources. If your function connects to a VPC, this process can take a minute. During this time, you can't modify the function, but you can still invoke it. The <code>LastUpdateStatus</code>, <code>LastUpdateStatusReason</code>, and <code>LastUpdateStatusReasonCode</code> fields in the response from <a>GetFunctionConfiguration</a> indicate when the update is complete and the function is processing events with the new configuration. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/functions-states.html">Lambda function states</a>.</p> <p>These settings can vary between versions of a function and are locked when you publish a version. You can't modify the configuration of a published version, only the unpublished version.</p> <p>To configure function concurrency, use <a>PutFunctionConcurrency</a>. To grant invoke permissions to an Amazon Web Services account or Amazon Web Service, use <a>AddPermission</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateFunctionConfigurationRequest;
import org.openapis.openapi.models.operations.UpdateFunctionConfigurationRequestBody;
import org.openapis.openapi.models.operations.UpdateFunctionConfigurationRequestBodyDeadLetterConfig;
import org.openapis.openapi.models.operations.UpdateFunctionConfigurationRequestBodyEnvironment;
import org.openapis.openapi.models.operations.UpdateFunctionConfigurationRequestBodyEphemeralStorage;
import org.openapis.openapi.models.operations.UpdateFunctionConfigurationRequestBodyImageConfig;
import org.openapis.openapi.models.operations.UpdateFunctionConfigurationRequestBodyRuntimeEnum;
import org.openapis.openapi.models.operations.UpdateFunctionConfigurationRequestBodySnapStart;
import org.openapis.openapi.models.operations.UpdateFunctionConfigurationRequestBodyTracingConfig;
import org.openapis.openapi.models.operations.UpdateFunctionConfigurationRequestBodyVpcConfig;
import org.openapis.openapi.models.operations.UpdateFunctionConfigurationResponse;
import org.openapis.openapi.models.shared.FileSystemConfig;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SnapStartApplyOnEnum;
import org.openapis.openapi.models.shared.TracingModeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloribus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateFunctionConfigurationRequest req = new UpdateFunctionConfigurationRequest("suscipit",                 new UpdateFunctionConfigurationRequestBody() {{
                                deadLetterConfig = new UpdateFunctionConfigurationRequestBodyDeadLetterConfig() {{
                                    targetArn = "reiciendis";
                                }};;
                                description = "quidem";
                                environment = new UpdateFunctionConfigurationRequestBodyEnvironment() {{
                                    variables = new java.util.HashMap<String, String>() {{
                                        put("necessitatibus", "dolore");
                                        put("sunt", "asperiores");
                                        put("adipisci", "non");
                                        put("amet", "beatae");
                                    }};
                                }};;
                                ephemeralStorage = new UpdateFunctionConfigurationRequestBodyEphemeralStorage() {{
                                    size = 489509L;
                                }};;
                                fileSystemConfigs = new org.openapis.openapi.models.shared.FileSystemConfig[]{{
                                    add(new FileSystemConfig("corporis", "harum") {{
                                        arn = "debitis";
                                        localMountPath = "consectetur";
                                    }}),
                                    add(new FileSystemConfig("voluptates", "libero") {{
                                        arn = "laboriosam";
                                        localMountPath = "ipsa";
                                    }}),
                                    add(new FileSystemConfig("similique", "tempora") {{
                                        arn = "vitae";
                                        localMountPath = "accusamus";
                                    }}),
                                    add(new FileSystemConfig("voluptas", "voluptas") {{
                                        arn = "aspernatur";
                                        localMountPath = "voluptas";
                                    }}),
                                }};
                                handler = "minima";
                                imageConfig = new UpdateFunctionConfigurationRequestBodyImageConfig() {{
                                    command = new String[]{{
                                        add("dolorum"),
                                        add("adipisci"),
                                        add("minus"),
                                    }};
                                    entryPoint = new String[]{{
                                        add("blanditiis"),
                                    }};
                                    workingDirectory = "in";
                                }};;
                                kmsKeyArn = "dolore";
                                layers = new String[]{{
                                    add("officiis"),
                                    add("temporibus"),
                                }};
                                memorySize = 351870L;
                                revisionId = "adipisci";
                                role = "cum";
                                runtime = UpdateFunctionConfigurationRequestBodyRuntimeEnum.PYTHON38;
                                snapStart = new UpdateFunctionConfigurationRequestBodySnapStart() {{
                                    applyOn = SnapStartApplyOnEnum.NONE;
                                }};;
                                timeout = 942584L;
                                tracingConfig = new UpdateFunctionConfigurationRequestBodyTracingConfig() {{
                                    mode = TracingModeEnum.ACTIVE;
                                }};;
                                vpcConfig = new UpdateFunctionConfigurationRequestBodyVpcConfig() {{
                                    securityGroupIds = new String[]{{
                                        add("corrupti"),
                                        add("pariatur"),
                                        add("totam"),
                                    }};
                                    subnetIds = new String[]{{
                                        add("exercitationem"),
                                        add("nobis"),
                                        add("sit"),
                                        add("rerum"),
                                    }};
                                }};;
                            }};) {{
                xAmzAlgorithm = "sed";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "explicabo";
                xAmzDate = "asperiores";
                xAmzSecurityToken = "facilis";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "expedita";
            }};            

            UpdateFunctionConfigurationResponse res = sdk.sdk.updateFunctionConfiguration(req);

            if (res.functionConfiguration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateFunctionEventInvokeConfig

<p>Updates the configuration for asynchronous invocation for a function, version, or alias.</p> <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateFunctionEventInvokeConfigRequest;
import org.openapis.openapi.models.operations.UpdateFunctionEventInvokeConfigRequestBody;
import org.openapis.openapi.models.operations.UpdateFunctionEventInvokeConfigRequestBodyDestinationConfig;
import org.openapis.openapi.models.operations.UpdateFunctionEventInvokeConfigResponse;
import org.openapis.openapi.models.shared.OnFailure;
import org.openapis.openapi.models.shared.OnSuccess;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ab") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateFunctionEventInvokeConfigRequest req = new UpdateFunctionEventInvokeConfigRequest("iste",                 new UpdateFunctionEventInvokeConfigRequestBody() {{
                                destinationConfig = new UpdateFunctionEventInvokeConfigRequestBodyDestinationConfig() {{
                                    onFailure = new OnFailure() {{
                                        destination = "dolore";
                                    }};;
                                    onSuccess = new OnSuccess() {{
                                        destination = "laborum";
                                    }};;
                                }};;
                                maximumEventAgeInSeconds = 152354L;
                                maximumRetryAttempts = 447516L;
                            }};) {{
                qualifier = "commodi";
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "voluptas";
                xAmzDate = "unde";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "sapiente";
            }};            

            UpdateFunctionEventInvokeConfigResponse res = sdk.sdk.updateFunctionEventInvokeConfig(req);

            if (res.functionEventInvokeConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateFunctionUrlConfig

Updates the configuration for a Lambda function URL.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateFunctionUrlConfigRequest;
import org.openapis.openapi.models.operations.UpdateFunctionUrlConfigRequestBody;
import org.openapis.openapi.models.operations.UpdateFunctionUrlConfigRequestBodyAuthTypeEnum;
import org.openapis.openapi.models.operations.UpdateFunctionUrlConfigRequestBodyCors;
import org.openapis.openapi.models.operations.UpdateFunctionUrlConfigRequestBodyInvokeModeEnum;
import org.openapis.openapi.models.operations.UpdateFunctionUrlConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateFunctionUrlConfigRequest req = new UpdateFunctionUrlConfigRequest("illo",                 new UpdateFunctionUrlConfigRequestBody() {{
                                authType = UpdateFunctionUrlConfigRequestBodyAuthTypeEnum.AWS_IAM;
                                cors = new UpdateFunctionUrlConfigRequestBodyCors() {{
                                    allowCredentials = false;
                                    allowHeaders = new String[]{{
                                        add("corrupti"),
                                    }};
                                    allowMethods = new String[]{{
                                        add("incidunt"),
                                        add("sed"),
                                        add("provident"),
                                        add("eius"),
                                    }};
                                    allowOrigins = new String[]{{
                                        add("ipsum"),
                                        add("ea"),
                                        add("occaecati"),
                                        add("quos"),
                                    }};
                                    exposeHeaders = new String[]{{
                                        add("tempora"),
                                        add("tempora"),
                                        add("voluptate"),
                                        add("reiciendis"),
                                    }};
                                    maxAge = 401713L;
                                }};;
                                invokeMode = UpdateFunctionUrlConfigRequestBodyInvokeModeEnum.BUFFERED;
                            }};) {{
                qualifier = "non";
                xAmzAlgorithm = "officiis";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "facilis";
                xAmzDate = "quaerat";
                xAmzSecurityToken = "incidunt";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "debitis";
            }};            

            UpdateFunctionUrlConfigResponse res = sdk.sdk.updateFunctionUrlConfig(req);

            if (res.updateFunctionUrlConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
