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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddLayerVersionPermissionRequest;
use \OpenAPI\OpenAPI\Models\Operations\AddLayerVersionPermissionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddLayerVersionPermissionRequest();
    $request->layerName = 'debitis';
    $request->requestBody = new AddLayerVersionPermissionRequestBody();
    $request->requestBody->action = 'ipsa';
    $request->requestBody->organizationId = 'delectus';
    $request->requestBody->principal = 'tempora';
    $request->requestBody->statementId = 'suscipit';
    $request->revisionId = 'molestiae';
    $request->versionNumber = 791725;
    $request->xAmzAlgorithm = 'placeat';
    $request->xAmzContentSha256 = 'voluptatum';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'nisi';
    $request->xAmzSignature = 'recusandae';
    $request->xAmzSignedHeaders = 'temporibus';

    $response = $sdk->sdk->addLayerVersionPermission($request);

    if ($response->addLayerVersionPermissionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addPermission

<p>Grants an Amazon Web Service, Amazon Web Services account, or Amazon Web Services organization permission to use a function. You can apply the policy at the function level, or specify a qualifier to restrict access to a single version or alias. If you use a qualifier, the invoker must use the full Amazon Resource Name (ARN) of that version or alias to invoke the function. Note: Lambda does not support adding policies to version $LATEST.</p> <p>To grant permission to another account, specify the account ID as the <code>Principal</code>. To grant permission to an organization defined in Organizations, specify the organization ID as the <code>PrincipalOrgID</code>. For Amazon Web Services, the principal is a domain-style identifier that the service defines, such as <code>s3.amazonaws.com</code> or <code>sns.amazonaws.com</code>. For Amazon Web Services, you can also specify the ARN of the associated resource as the <code>SourceArn</code>. If you grant permission to a service principal without specifying the source, other accounts could potentially configure resources in their account to invoke your Lambda function.</p> <p>This operation adds a statement to a resource-based permissions policy for the function. For more information about function policies, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html">Using resource-based policies for Lambda</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddPermissionRequest;
use \OpenAPI\OpenAPI\Models\Operations\AddPermissionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\AddPermissionRequestBodyFunctionUrlAuthTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddPermissionRequest();
    $request->functionName = 'ab';
    $request->qualifier = 'quis';
    $request->requestBody = new AddPermissionRequestBody();
    $request->requestBody->action = 'veritatis';
    $request->requestBody->eventSourceToken = 'deserunt';
    $request->requestBody->functionUrlAuthType = AddPermissionRequestBodyFunctionUrlAuthTypeEnum::NONE;
    $request->requestBody->principal = 'ipsam';
    $request->requestBody->principalOrgID = 'repellendus';
    $request->requestBody->revisionId = 'sapiente';
    $request->requestBody->sourceAccount = 'quo';
    $request->requestBody->sourceArn = 'odit';
    $request->requestBody->statementId = 'at';
    $request->xAmzAlgorithm = 'at';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'quod';
    $request->xAmzSecurityToken = 'quod';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'totam';

    $response = $sdk->sdk->addPermission($request);

    if ($response->addPermissionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createAlias

<p>Creates an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html">alias</a> for a Lambda function version. Use aliases to provide clients with a function identifier that you can update to invoke a different version.</p> <p>You can also map an alias to split invocation requests between two versions. Use the <code>RoutingConfig</code> parameter to specify a second version and the percentage of invocation requests that it receives.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAliasRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateAliasRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateAliasRequestBodyRoutingConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAliasRequest();
    $request->functionName = 'porro';
    $request->requestBody = new CreateAliasRequestBody();
    $request->requestBody->description = 'dolorum';
    $request->requestBody->functionVersion = 'dicta';
    $request->requestBody->name = 'Luke McCullough';
    $request->requestBody->routingConfig = new CreateAliasRequestBodyRoutingConfig();
    $request->requestBody->routingConfig->additionalVersionWeights = [
        'optio' => 5218.48,
        'beatae' => 4146.62,
        'molestiae' => 2645.55,
        'qui' => 7742.34,
    ];
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'ad';

    $response = $sdk->sdk->createAlias($request);

    if ($response->aliasConfiguration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createCodeSigningConfig

Creates a code signing configuration. A <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html">code signing configuration</a> defines a list of allowed signing profiles and defines the code-signing validation policy (action to be taken if deployment validation checks fail). 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateCodeSigningConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateCodeSigningConfigRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateCodeSigningConfigRequestBodyAllowedPublishers;
use \OpenAPI\OpenAPI\Models\Operations\CreateCodeSigningConfigRequestBodyCodeSigningPolicies;
use \OpenAPI\OpenAPI\Models\Shared\CodeSigningPolicyEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCodeSigningConfigRequest();
    $request->requestBody = new CreateCodeSigningConfigRequestBody();
    $request->requestBody->allowedPublishers = new CreateCodeSigningConfigRequestBodyAllowedPublishers();
    $request->requestBody->allowedPublishers->signingProfileVersionArns = [
        'sed',
        'iste',
        'dolor',
    ];
    $request->requestBody->codeSigningPolicies = new CreateCodeSigningConfigRequestBodyCodeSigningPolicies();
    $request->requestBody->codeSigningPolicies->untrustedArtifactOnDeployment = CodeSigningPolicyEnum::ENFORCE;
    $request->requestBody->description = 'laboriosam';
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'fuga';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'iste';
    $request->xAmzSignedHeaders = 'iure';

    $response = $sdk->sdk->createCodeSigningConfig($request);

    if ($response->createCodeSigningConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createEventSourceMapping

<p>Creates a mapping between an event source and an Lambda function. Lambda reads items from the event source and invokes the function.</p> <p>For details about how to configure different event sources, see the following topics. </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html#services-dynamodb-eventsourcemapping"> Amazon DynamoDB Streams</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html#services-kinesis-eventsourcemapping"> Amazon Kinesis</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#events-sqs-eventsource"> Amazon SQS</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#services-mq-eventsourcemapping"> Amazon MQ and RabbitMQ</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html"> Amazon MSK</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/kafka-smaa.html"> Apache Kafka</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-documentdb.html"> Amazon DocumentDB</a> </p> </li> </ul> <p>The following error handling options are available only for stream sources (DynamoDB and Kinesis):</p> <ul> <li> <p> <code>BisectBatchOnFunctionError</code> – If the function returns an error, split the batch in two and retry.</p> </li> <li> <p> <code>DestinationConfig</code> – Send discarded records to an Amazon SQS queue or Amazon SNS topic.</p> </li> <li> <p> <code>MaximumRecordAgeInSeconds</code> – Discard records older than the specified age. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires</p> </li> <li> <p> <code>MaximumRetryAttempts</code> – Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires.</p> </li> <li> <p> <code>ParallelizationFactor</code> – Process multiple batches from each shard concurrently.</p> </li> </ul> <p>For information about which configuration parameters apply to each event source, see the following topics.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html#services-ddb-params"> Amazon DynamoDB Streams</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html#services-kinesis-params"> Amazon Kinesis</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#services-sqs-params"> Amazon SQS</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#services-mq-params"> Amazon MQ and RabbitMQ</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-parms"> Amazon MSK</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kafka.html#services-kafka-parms"> Apache Kafka</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-documentdb.html#docdb-configuration"> Amazon DocumentDB</a> </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateEventSourceMappingRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateEventSourceMappingRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateEventSourceMappingRequestBodyAmazonManagedKafkaEventSourceConfig;
use \OpenAPI\OpenAPI\Models\Operations\CreateEventSourceMappingRequestBodyDestinationConfig;
use \OpenAPI\OpenAPI\Models\Shared\OnFailure;
use \OpenAPI\OpenAPI\Models\Shared\OnSuccess;
use \OpenAPI\OpenAPI\Models\Operations\CreateEventSourceMappingRequestBodyDocumentDBEventSourceConfig;
use \OpenAPI\OpenAPI\Models\Shared\FullDocumentEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateEventSourceMappingRequestBodyFilterCriteria;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Shared\FunctionResponseTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateEventSourceMappingRequestBodyScalingConfig;
use \OpenAPI\OpenAPI\Models\Operations\CreateEventSourceMappingRequestBodySelfManagedEventSource;
use \OpenAPI\OpenAPI\Models\Operations\CreateEventSourceMappingRequestBodySelfManagedKafkaEventSourceConfig;
use \OpenAPI\OpenAPI\Models\Shared\SourceAccessConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\SourceAccessTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateEventSourceMappingRequestBodyStartingPositionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateEventSourceMappingRequest();
    $request->requestBody = new CreateEventSourceMappingRequestBody();
    $request->requestBody->amazonManagedKafkaEventSourceConfig = new CreateEventSourceMappingRequestBodyAmazonManagedKafkaEventSourceConfig();
    $request->requestBody->amazonManagedKafkaEventSourceConfig->consumerGroupId = 'saepe';
    $request->requestBody->batchSize = 697631;
    $request->requestBody->bisectBatchOnFunctionError = false;
    $request->requestBody->destinationConfig = new CreateEventSourceMappingRequestBodyDestinationConfig();
    $request->requestBody->destinationConfig->onFailure = new OnFailure();
    $request->requestBody->destinationConfig->onFailure->destination = 'architecto';
    $request->requestBody->destinationConfig->onSuccess = new OnSuccess();
    $request->requestBody->destinationConfig->onSuccess->destination = 'ipsa';
    $request->requestBody->documentDBEventSourceConfig = new CreateEventSourceMappingRequestBodyDocumentDBEventSourceConfig();
    $request->requestBody->documentDBEventSourceConfig->collectionName = 'reiciendis';
    $request->requestBody->documentDBEventSourceConfig->databaseName = 'est';
    $request->requestBody->documentDBEventSourceConfig->fullDocument = FullDocumentEnum::DEFAULT;
    $request->requestBody->enabled = false;
    $request->requestBody->eventSourceArn = 'laborum';
    $request->requestBody->filterCriteria = new CreateEventSourceMappingRequestBodyFilterCriteria();
    $request->requestBody->filterCriteria->filters = [
        new Filter(),
    ];
    $request->requestBody->functionName = 'dolorem';
    $request->requestBody->functionResponseTypes = [
        FunctionResponseTypeEnum::REPORT_BATCH_ITEM_FAILURES,
        FunctionResponseTypeEnum::REPORT_BATCH_ITEM_FAILURES,
    ];
    $request->requestBody->maximumBatchingWindowInSeconds = 128926;
    $request->requestBody->maximumRecordAgeInSeconds = 750686;
    $request->requestBody->maximumRetryAttempts = 315428;
    $request->requestBody->parallelizationFactor = 607831;
    $request->requestBody->queues = [
        'minima',
        'excepturi',
    ];
    $request->requestBody->scalingConfig = new CreateEventSourceMappingRequestBodyScalingConfig();
    $request->requestBody->scalingConfig->maximumConcurrency = 38425;
    $request->requestBody->selfManagedEventSource = new CreateEventSourceMappingRequestBodySelfManagedEventSource();
    $request->requestBody->selfManagedEventSource->endpoints = [
        'culpa' => [
            'sapiente',
            'architecto',
            'mollitia',
            'dolorem',
        ],
        'culpa' => [
            'repellat',
        ],
    ];
    $request->requestBody->selfManagedKafkaEventSourceConfig = new CreateEventSourceMappingRequestBodySelfManagedKafkaEventSourceConfig();
    $request->requestBody->selfManagedKafkaEventSourceConfig->consumerGroupId = 'mollitia';
    $request->requestBody->sourceAccessConfigurations = [
        new SourceAccessConfiguration(),
        new SourceAccessConfiguration(),
        new SourceAccessConfiguration(),
    ];
    $request->requestBody->startingPosition = CreateEventSourceMappingRequestBodyStartingPositionEnum::TRIM_HORIZON;
    $request->requestBody->startingPositionTimestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-14T19:07:02.935Z');
    $request->requestBody->topics = [
        'velit',
        'error',
    ];
    $request->requestBody->tumblingWindowInSeconds = 158969;
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'vitae';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'animi';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'quo';

    $response = $sdk->sdk->createEventSourceMapping($request);

    if ($response->eventSourceMappingConfiguration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createFunction

<p>Creates a Lambda function. To create a function, you need a <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html">deployment package</a> and an <a href="https://docs.aws.amazon.com/lambda/latest/dg/intro-permission-model.html#lambda-intro-execution-role">execution role</a>. The deployment package is a .zip file archive or container image that contains your function code. The execution role grants the function permission to use Amazon Web Services, such as Amazon CloudWatch Logs for log streaming and X-Ray for request tracing.</p> <p>If the deployment package is a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-images.html">container image</a>, then you set the package type to <code>Image</code>. For a container image, the code property must include the URI of a container image in the Amazon ECR registry. You do not need to specify the handler and runtime properties.</p> <p>If the deployment package is a <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html#gettingstarted-package-zip">.zip file archive</a>, then you set the package type to <code>Zip</code>. For a .zip file archive, the code property specifies the location of the .zip file. You must also specify the handler and runtime properties. The code in the deployment package must be compatible with the target instruction set architecture of the function (<code>x86-64</code> or <code>arm64</code>). If you do not specify the architecture, then the default value is <code>x86-64</code>.</p> <p>When you create a function, Lambda provisions an instance of the function and its supporting resources. If your function connects to a VPC, this process can take a minute or so. During this time, you can't invoke or modify the function. The <code>State</code>, <code>StateReason</code>, and <code>StateReasonCode</code> fields in the response from <a>GetFunctionConfiguration</a> indicate when the function is ready to invoke. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/functions-states.html">Lambda function states</a>.</p> <p>A function has an unpublished version, and can have published versions and aliases. The unpublished version changes when you update your function's code and configuration. A published version is a snapshot of your function code and configuration that can't be changed. An alias is a named resource that maps to a version, and can be changed to map to a different version. Use the <code>Publish</code> parameter to create version <code>1</code> of your function from its initial configuration.</p> <p>The other parameters let you configure version-specific and function-level settings. You can modify version-specific settings later with <a>UpdateFunctionConfiguration</a>. Function-level settings apply to both the unpublished and published versions of the function, and include tags (<a>TagResource</a>) and per-function concurrency limits (<a>PutFunctionConcurrency</a>).</p> <p>You can use code signing if your deployment package is a .zip file archive. To enable code signing for this function, specify the ARN of a code-signing configuration. When a user attempts to deploy a code package with <a>UpdateFunctionCode</a>, Lambda checks that the code package has a valid signature from a trusted publisher. The code-signing configuration includes set of signing profiles, which define the trusted publishers for this function.</p> <p>If another Amazon Web Services account or an Amazon Web Service invokes your function, use <a>AddPermission</a> to grant permission by creating a resource-based Identity and Access Management (IAM) policy. You can grant permissions at the function level, on a version, or on an alias.</p> <p>To invoke your function directly, use <a>Invoke</a>. To invoke your function in response to events in other Amazon Web Services, create an event source mapping (<a>CreateEventSourceMapping</a>), or configure a function trigger in the other service. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-invocation.html">Invoking Lambda functions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateFunctionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateFunctionRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ArchitectureEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateFunctionRequestBodyCode;
use \OpenAPI\OpenAPI\Models\Operations\CreateFunctionRequestBodyDeadLetterConfig;
use \OpenAPI\OpenAPI\Models\Operations\CreateFunctionRequestBodyEnvironment;
use \OpenAPI\OpenAPI\Models\Operations\CreateFunctionRequestBodyEphemeralStorage;
use \OpenAPI\OpenAPI\Models\Shared\FileSystemConfig;
use \OpenAPI\OpenAPI\Models\Operations\CreateFunctionRequestBodyImageConfig;
use \OpenAPI\OpenAPI\Models\Operations\CreateFunctionRequestBodyPackageTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateFunctionRequestBodyRuntimeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateFunctionRequestBodySnapStart;
use \OpenAPI\OpenAPI\Models\Shared\SnapStartApplyOnEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateFunctionRequestBodyTracingConfig;
use \OpenAPI\OpenAPI\Models\Shared\TracingModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateFunctionRequestBodyVpcConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFunctionRequest();
    $request->requestBody = new CreateFunctionRequestBody();
    $request->requestBody->architectures = [
        ArchitectureEnum::ARM64,
    ];
    $request->requestBody->code = new CreateFunctionRequestBodyCode();
    $request->requestBody->code->imageUri = 'ipsam';
    $request->requestBody->code->s3Bucket = 'id';
    $request->requestBody->code->s3Key = 'possimus';
    $request->requestBody->code->s3ObjectVersion = 'aut';
    $request->requestBody->code->zipFile = 'quasi';
    $request->requestBody->codeSigningConfigArn = 'error';
    $request->requestBody->deadLetterConfig = new CreateFunctionRequestBodyDeadLetterConfig();
    $request->requestBody->deadLetterConfig->targetArn = 'temporibus';
    $request->requestBody->description = 'laborum';
    $request->requestBody->environment = new CreateFunctionRequestBodyEnvironment();
    $request->requestBody->environment->variables = [
        'reiciendis' => 'voluptatibus',
    ];
    $request->requestBody->ephemeralStorage = new CreateFunctionRequestBodyEphemeralStorage();
    $request->requestBody->ephemeralStorage->size = 878194;
    $request->requestBody->fileSystemConfigs = [
        new FileSystemConfig(),
        new FileSystemConfig(),
    ];
    $request->requestBody->functionName = 'praesentium';
    $request->requestBody->handler = 'voluptatibus';
    $request->requestBody->imageConfig = new CreateFunctionRequestBodyImageConfig();
    $request->requestBody->imageConfig->command = [
        'omnis',
    ];
    $request->requestBody->imageConfig->entryPoint = [
        'cum',
        'perferendis',
    ];
    $request->requestBody->imageConfig->workingDirectory = 'doloremque';
    $request->requestBody->kmsKeyArn = 'reprehenderit';
    $request->requestBody->layers = [
        'maiores',
        'dicta',
    ];
    $request->requestBody->memorySize = 359444;
    $request->requestBody->packageType = CreateFunctionRequestBodyPackageTypeEnum::ZIP;
    $request->requestBody->publish = false;
    $request->requestBody->role = 'iusto';
    $request->requestBody->runtime = CreateFunctionRequestBodyRuntimeEnum::NODEJS810;
    $request->requestBody->snapStart = new CreateFunctionRequestBodySnapStart();
    $request->requestBody->snapStart->applyOn = SnapStartApplyOnEnum::NONE;
    $request->requestBody->tags = [
        'accusamus' => 'commodi',
        'repudiandae' => 'quae',
    ];
    $request->requestBody->timeout = 216822;
    $request->requestBody->tracingConfig = new CreateFunctionRequestBodyTracingConfig();
    $request->requestBody->tracingConfig->mode = TracingModeEnum::PASS_THROUGH;
    $request->requestBody->vpcConfig = new CreateFunctionRequestBodyVpcConfig();
    $request->requestBody->vpcConfig->securityGroupIds = [
        'excepturi',
        'pariatur',
        'modi',
    ];
    $request->requestBody->vpcConfig->subnetIds = [
        'rem',
        'voluptates',
        'quasi',
    ];
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'itaque';
    $request->xAmzSecurityToken = 'incidunt';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'consequatur';

    $response = $sdk->sdk->createFunction($request);

    if ($response->functionConfiguration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createFunctionUrlConfig

Creates a Lambda function URL with the specified configuration parameters. A function URL is a dedicated HTTP(S) endpoint that you can use to invoke your function.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateFunctionUrlConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateFunctionUrlConfigRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateFunctionUrlConfigRequestBodyAuthTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateFunctionUrlConfigRequestBodyCors;
use \OpenAPI\OpenAPI\Models\Operations\CreateFunctionUrlConfigRequestBodyInvokeModeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFunctionUrlConfigRequest();
    $request->functionName = 'est';
    $request->qualifier = 'quibusdam';
    $request->requestBody = new CreateFunctionUrlConfigRequestBody();
    $request->requestBody->authType = CreateFunctionUrlConfigRequestBodyAuthTypeEnum::NONE;
    $request->requestBody->cors = new CreateFunctionUrlConfigRequestBodyCors();
    $request->requestBody->cors->allowCredentials = false;
    $request->requestBody->cors->allowHeaders = [
        'distinctio',
        'quibusdam',
        'labore',
    ];
    $request->requestBody->cors->allowMethods = [
        'qui',
        'aliquid',
    ];
    $request->requestBody->cors->allowOrigins = [
        'quos',
        'perferendis',
        'magni',
    ];
    $request->requestBody->cors->exposeHeaders = [
        'ipsam',
        'alias',
        'fugit',
        'dolorum',
    ];
    $request->requestBody->cors->maxAge = 569618;
    $request->requestBody->invokeMode = CreateFunctionUrlConfigRequestBodyInvokeModeEnum::BUFFERED;
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'tempore';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'non';
    $request->xAmzSignedHeaders = 'eligendi';

    $response = $sdk->sdk->createFunctionUrlConfig($request);

    if ($response->createFunctionUrlConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAlias

Deletes a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html">alias</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAliasRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAliasRequest();
    $request->functionName = 'sint';
    $request->name = 'Sherri Tremblay';
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'a';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'illum';

    $response = $sdk->sdk->deleteAlias($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCodeSigningConfig

Deletes the code signing configuration. You can delete the code signing configuration only if no function is using it. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCodeSigningConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCodeSigningConfigRequest();
    $request->codeSigningConfigArn = 'maiores';
    $request->xAmzAlgorithm = 'rerum';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'cumque';
    $request->xAmzSecurityToken = 'facere';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'aliquid';

    $response = $sdk->sdk->deleteCodeSigningConfig($request);

    if ($response->deleteCodeSigningConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteEventSourceMapping

<p>Deletes an <a href="https://docs.aws.amazon.com/lambda/latest/dg/intro-invocation-modes.html">event source mapping</a>. You can get the identifier of a mapping from the output of <a>ListEventSourceMappings</a>.</p> <p>When you delete an event source mapping, it enters a <code>Deleting</code> state and might not be completely deleted for several seconds.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEventSourceMappingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteEventSourceMappingRequest();
    $request->uuid = 'ae395efb-9ba8-48f3-a669-97074ba4469b';
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'et';
    $request->xAmzSignedHeaders = 'excepturi';

    $response = $sdk->sdk->deleteEventSourceMapping($request);

    if ($response->eventSourceMappingConfiguration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteFunction

<p>Deletes a Lambda function. To delete a specific function version, use the <code>Qualifier</code> parameter. Otherwise, all versions and aliases are deleted.</p> <p>To delete Lambda event source mappings that invoke a function, use <a>DeleteEventSourceMapping</a>. For Amazon Web Services and resources that invoke your function directly, delete the trigger in the service where you originally configured it.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFunctionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFunctionRequest();
    $request->functionName = 'ullam';
    $request->qualifier = 'provident';
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'ad';

    $response = $sdk->sdk->deleteFunction($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteFunctionCodeSigningConfig

Removes the code signing configuration from the function.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFunctionCodeSigningConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFunctionCodeSigningConfigRequest();
    $request->functionName = 'eum';
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'necessitatibus';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'nemo';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'doloribus';

    $response = $sdk->sdk->deleteFunctionCodeSigningConfig($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteFunctionConcurrency

Removes a concurrent execution limit from a function.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFunctionConcurrencyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFunctionConcurrencyRequest();
    $request->functionName = 'debitis';
    $request->xAmzAlgorithm = 'eius';
    $request->xAmzContentSha256 = 'maxime';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'architecto';

    $response = $sdk->sdk->deleteFunctionConcurrency($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteFunctionEventInvokeConfig

<p>Deletes the configuration for asynchronous invocation for a function, version, or alias.</p> <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFunctionEventInvokeConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFunctionEventInvokeConfigRequest();
    $request->functionName = 'repudiandae';
    $request->qualifier = 'ullam';
    $request->xAmzAlgorithm = 'expedita';
    $request->xAmzContentSha256 = 'nihil';
    $request->xAmzCredential = 'repellat';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'sed';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'pariatur';

    $response = $sdk->sdk->deleteFunctionEventInvokeConfig($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteFunctionUrlConfig

Deletes a Lambda function URL. When you delete a function URL, you can't recover it. Creating a new function URL results in a different URL address.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFunctionUrlConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFunctionUrlConfigRequest();
    $request->functionName = 'accusantium';
    $request->qualifier = 'consequuntur';
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'magni';
    $request->xAmzDate = 'sunt';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'pariatur';

    $response = $sdk->sdk->deleteFunctionUrlConfig($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteLayerVersion

Deletes a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. Deleted versions can no longer be viewed or added to functions. To avoid breaking functions, a copy of the version remains in Lambda until no functions refer to it.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLayerVersionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteLayerVersionRequest();
    $request->layerName = 'maxime';
    $request->versionNumber = 411397;
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'odit';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'ab';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'quidem';

    $response = $sdk->sdk->deleteLayerVersion($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteProvisionedConcurrencyConfig

Deletes the provisioned concurrency configuration for a function.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProvisionedConcurrencyConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteProvisionedConcurrencyConfigRequest();
    $request->functionName = 'ipsam';
    $request->qualifier = 'voluptate';
    $request->xAmzAlgorithm = 'autem';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'eaque';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'perferendis';

    $response = $sdk->sdk->deleteProvisionedConcurrencyConfig($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccountSettings

Retrieves details about your account's <a href="https://docs.aws.amazon.com/lambda/latest/dg/limits.html">limits</a> and usage in an Amazon Web Services Region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountSettingsRequest();
    $request->xAmzAlgorithm = 'fugiat';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'cumque';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'libero';

    $response = $sdk->sdk->getAccountSettings($request);

    if ($response->getAccountSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAlias

Returns details about a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html">alias</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAliasRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAliasRequest();
    $request->functionName = 'nobis';
    $request->name = 'Beatrice Lebsack II';
    $request->xAmzAlgorithm = 'nesciunt';
    $request->xAmzContentSha256 = 'eos';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'dolores';
    $request->xAmzSecurityToken = 'minus';
    $request->xAmzSignature = 'quam';
    $request->xAmzSignedHeaders = 'dolor';

    $response = $sdk->sdk->getAlias($request);

    if ($response->aliasConfiguration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCodeSigningConfig

Returns information about the specified code signing configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCodeSigningConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCodeSigningConfigRequest();
    $request->codeSigningConfigArn = 'vero';
    $request->xAmzAlgorithm = 'nostrum';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'recusandae';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'perspiciatis';
    $request->xAmzSignedHeaders = 'voluptatem';

    $response = $sdk->sdk->getCodeSigningConfig($request);

    if ($response->getCodeSigningConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEventSourceMapping

Returns details about an event source mapping. You can get the identifier of a mapping from the output of <a>ListEventSourceMappings</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEventSourceMappingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEventSourceMappingRequest();
    $request->uuid = 'c28909b3-fe49-4a8d-9cbf-48633323f9b7';
    $request->xAmzAlgorithm = 'dignissimos';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'numquam';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'ipsa';

    $response = $sdk->sdk->getEventSourceMapping($request);

    if ($response->eventSourceMappingConfiguration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFunction

Returns information about the function or function version, with a link to download the deployment package that's valid for 10 minutes. If you specify a function version, only details that are specific to that version are returned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFunctionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFunctionRequest();
    $request->functionName = 'ipsa';
    $request->qualifier = 'iure';
    $request->xAmzAlgorithm = 'odio';
    $request->xAmzContentSha256 = 'quaerat';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'voluptas';
    $request->xAmzSignedHeaders = 'natus';

    $response = $sdk->sdk->getFunction($request);

    if ($response->getFunctionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFunctionCodeSigningConfig

Returns the code signing configuration for the specified function.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFunctionCodeSigningConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFunctionCodeSigningConfigRequest();
    $request->functionName = 'eos';
    $request->xAmzAlgorithm = 'atque';
    $request->xAmzContentSha256 = 'sit';
    $request->xAmzCredential = 'fugiat';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'soluta';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'iusto';

    $response = $sdk->sdk->getFunctionCodeSigningConfig($request);

    if ($response->getFunctionCodeSigningConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFunctionConcurrency

Returns details about the reserved concurrency configuration for a function. To set a concurrency limit for a function, use <a>PutFunctionConcurrency</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFunctionConcurrencyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFunctionConcurrencyRequest();
    $request->functionName = 'voluptate';
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'necessitatibus';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'asperiores';
    $request->xAmzSignedHeaders = 'nihil';

    $response = $sdk->sdk->getFunctionConcurrency($request);

    if ($response->getFunctionConcurrencyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFunctionConfiguration

<p>Returns the version-specific settings of a Lambda function or version. The output includes only options that can vary between versions of a function. To modify these settings, use <a>UpdateFunctionConfiguration</a>.</p> <p>To get all of a function's details, including function-level settings, use <a>GetFunction</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFunctionConfigurationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFunctionConfigurationRequest();
    $request->functionName = 'ipsum';
    $request->qualifier = 'voluptate';
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'eius';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'amet';
    $request->xAmzSignedHeaders = 'optio';

    $response = $sdk->sdk->getFunctionConfiguration($request);

    if ($response->functionConfiguration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFunctionEventInvokeConfig

<p>Retrieves the configuration for asynchronous invocation for a function, version, or alias.</p> <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFunctionEventInvokeConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFunctionEventInvokeConfigRequest();
    $request->functionName = 'accusamus';
    $request->qualifier = 'ad';
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'repellendus';
    $request->xAmzSignedHeaders = 'totam';

    $response = $sdk->sdk->getFunctionEventInvokeConfig($request);

    if ($response->functionEventInvokeConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFunctionUrlConfig

Returns details about a Lambda function URL.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFunctionUrlConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFunctionUrlConfigRequest();
    $request->functionName = 'similique';
    $request->qualifier = 'alias';
    $request->xAmzAlgorithm = 'at';
    $request->xAmzContentSha256 = 'quaerat';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'quod';
    $request->xAmzSignature = 'officiis';
    $request->xAmzSignedHeaders = 'qui';

    $response = $sdk->sdk->getFunctionUrlConfig($request);

    if ($response->getFunctionUrlConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLayerVersion

Returns information about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>, with a link to download the layer archive that's valid for 10 minutes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLayerVersionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLayerVersionRequest();
    $request->layerName = 'dolorum';
    $request->versionNumber = 952792;
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'harum';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'quisquam';
    $request->xAmzSignature = 'tenetur';
    $request->xAmzSignedHeaders = 'amet';

    $response = $sdk->sdk->getLayerVersion($request);

    if ($response->getLayerVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLayerVersionByArn

Returns information about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>, with a link to download the layer archive that's valid for 10 minutes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLayerVersionByArnRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetLayerVersionByArnFindEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLayerVersionByArnRequest();
    $request->arn = 'tempore';
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'numquam';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'nihil';
    $request->find = GetLayerVersionByArnFindEnum::LAYER_VERSION;

    $response = $sdk->sdk->getLayerVersionByArn($request);

    if ($response->getLayerVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLayerVersionPolicy

Returns the permission policy for a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. For more information, see <a>AddLayerVersionPermission</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLayerVersionPolicyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLayerVersionPolicyRequest();
    $request->layerName = 'sit';
    $request->versionNumber = 711584;
    $request->xAmzAlgorithm = 'neque';
    $request->xAmzContentSha256 = 'sed';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'libero';
    $request->xAmzSecurityToken = 'voluptas';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'quam';

    $response = $sdk->sdk->getLayerVersionPolicy($request);

    if ($response->getLayerVersionPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPolicy

Returns the <a href="https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html">resource-based IAM policy</a> for a function, version, or alias.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPolicyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPolicyRequest();
    $request->functionName = 'ipsum';
    $request->qualifier = 'incidunt';
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'cupiditate';
    $request->xAmzCredential = 'maxime';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'soluta';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'laborum';

    $response = $sdk->sdk->getPolicy($request);

    if ($response->getPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProvisionedConcurrencyConfig

Retrieves the provisioned concurrency configuration for a function's alias or version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProvisionedConcurrencyConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProvisionedConcurrencyConfigRequest();
    $request->functionName = 'totam';
    $request->qualifier = 'incidunt';
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'quam';
    $request->xAmzSignedHeaders = 'molestias';

    $response = $sdk->sdk->getProvisionedConcurrencyConfig($request);

    if ($response->getProvisionedConcurrencyConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRuntimeManagementConfig

Retrieves the runtime management configuration for a function's version. If the runtime update mode is <b>Manual</b>, this includes the ARN of the runtime version and the runtime update mode. If the runtime update mode is <b>Auto</b> or <b>Function update</b>, this includes the runtime update mode and <code>null</code> is returned for the ARN. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html">Runtime updates</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRuntimeManagementConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRuntimeManagementConfigRequest();
    $request->functionName = 'temporibus';
    $request->qualifier = 'qui';
    $request->xAmzAlgorithm = 'neque';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'magni';
    $request->xAmzDate = 'odio';
    $request->xAmzSecurityToken = 'sunt';
    $request->xAmzSignature = 'ullam';
    $request->xAmzSignedHeaders = 'nam';

    $response = $sdk->sdk->getRuntimeManagementConfig($request);

    if ($response->getRuntimeManagementConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## invoke

<p>Invokes a Lambda function. You can invoke a function synchronously (and wait for the response), or asynchronously. To invoke a function asynchronously, set <code>InvocationType</code> to <code>Event</code>.</p> <p>For <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-sync.html">synchronous invocation</a>, details about the function response, including errors, are included in the response body and headers. For either invocation type, you can find more information in the <a href="https://docs.aws.amazon.com/lambda/latest/dg/monitoring-functions.html">execution log</a> and <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-x-ray.html">trace</a>.</p> <p>When an error occurs, your function may be invoked multiple times. Retry behavior varies by error type, client, event source, and invocation type. For example, if you invoke a function asynchronously and it returns an error, Lambda executes the function up to two more times. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-retries.html">Error handling and automatic retries in Lambda</a>.</p> <p>For <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html">asynchronous invocation</a>, Lambda adds events to a queue before sending them to your function. If your function does not have enough capacity to keep up with the queue, events may be lost. Occasionally, your function may receive the same event multiple times, even if no error occurs. To retain events that were not processed, configure your function with a <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-dlq">dead-letter queue</a>.</p> <p>The status code in the API response doesn't reflect function errors. Error codes are reserved for errors that prevent your function from executing, such as permissions errors, <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html">quota</a> errors, or issues with your function's code and configuration. For example, Lambda returns <code>TooManyRequestsException</code> if running the function would cause you to exceed a concurrency limit at either the account level (<code>ConcurrentInvocationLimitExceeded</code>) or function level (<code>ReservedFunctionConcurrentInvocationLimitExceeded</code>).</p> <p>For functions with a long timeout, your client might disconnect during synchronous invocation while it waits for a response. Configure your HTTP client, SDK, firewall, proxy, or operating system to allow for long connections with timeout or keep-alive settings.</p> <p>This operation requires permission for the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awslambda.html">lambda:InvokeFunction</a> action. For details on how to set up permissions for cross-account invocations, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html#permissions-resource-xaccountinvoke">Granting function access to other accounts</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\InvokeRequest;
use \OpenAPI\OpenAPI\Models\Operations\InvokeRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\InvokeXAmzInvocationTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\InvokeXAmzLogTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InvokeRequest();
    $request->functionName = 'hic';
    $request->qualifier = 'voluptatem';
    $request->requestBody = new InvokeRequestBody();
    $request->requestBody->payload = 'cumque';
    $request->xAmzAlgorithm = 'soluta';
    $request->xAmzClientContext = 'nobis';
    $request->xAmzContentSha256 = 'et';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'ipsum';
    $request->xAmzInvocationType = InvokeXAmzInvocationTypeEnum::EVENT;
    $request->xAmzLogType = InvokeXAmzLogTypeEnum::TAIL;
    $request->xAmzSecurityToken = 'quos';
    $request->xAmzSignature = 'tempore';
    $request->xAmzSignedHeaders = 'cupiditate';

    $response = $sdk->sdk->invoke($request);

    if ($response->invocationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~invokeAsync~~

<important> <p>For asynchronous function invocation, use <a>Invoke</a>.</p> </important> <p>Invokes a function asynchronously.</p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\InvokeAsyncRequest;
use \OpenAPI\OpenAPI\Models\Operations\InvokeAsyncRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InvokeAsyncRequest();
    $request->functionName = 'aperiam';
    $request->requestBody = new InvokeAsyncRequestBody();
    $request->requestBody->invokeArgs = 'delectus';
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'dolore';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'adipisci';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'quae';

    $response = $sdk->sdk->invokeAsync($request);

    if ($response->invokeAsyncResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## invokeWithResponseStream

<p>Configure your Lambda functions to stream response payloads back to clients. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-response-streaming.html">Configuring a Lambda function to stream responses</a>.</p> <p>This operation requires permission for the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awslambda.html">lambda:InvokeFunction</a> action. For details on how to set up permissions for cross-account invocations, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html#permissions-resource-xaccountinvoke">Granting function access to other accounts</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\InvokeWithResponseStreamRequest;
use \OpenAPI\OpenAPI\Models\Operations\InvokeWithResponseStreamRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\InvokeWithResponseStreamXAmzInvocationTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\InvokeWithResponseStreamXAmzLogTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InvokeWithResponseStreamRequest();
    $request->functionName = 'aut';
    $request->qualifier = 'quas';
    $request->requestBody = new InvokeWithResponseStreamRequestBody();
    $request->requestBody->payload = 'itaque';
    $request->xAmzAlgorithm = 'consequatur';
    $request->xAmzClientContext = 'est';
    $request->xAmzContentSha256 = 'repellendus';
    $request->xAmzCredential = 'porro';
    $request->xAmzDate = 'doloribus';
    $request->xAmzInvocationType = InvokeWithResponseStreamXAmzInvocationTypeEnum::REQUEST_RESPONSE;
    $request->xAmzLogType = InvokeWithResponseStreamXAmzLogTypeEnum::TAIL;
    $request->xAmzSecurityToken = 'cupiditate';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'quae';

    $response = $sdk->sdk->invokeWithResponseStream($request);

    if ($response->invokeWithResponseStreamResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAliases

Returns a list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html">aliases</a> for a Lambda function.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAliasesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAliasesRequest();
    $request->functionName = 'laudantium';
    $request->functionVersion = 'odio';
    $request->marker = 'occaecati';
    $request->maxItems = 977496;
    $request->xAmzAlgorithm = 'quisquam';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'voluptate';

    $response = $sdk->sdk->listAliases($request);

    if ($response->listAliasesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCodeSigningConfigs

Returns a list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuring-codesigning.html">code signing configurations</a>. A request returns up to 10,000 configurations per call. You can use the <code>MaxItems</code> parameter to return fewer configurations per call. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListCodeSigningConfigsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCodeSigningConfigsRequest();
    $request->marker = 'consectetur';
    $request->maxItems = 878870;
    $request->xAmzAlgorithm = 'tenetur';
    $request->xAmzContentSha256 = 'dignissimos';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'quod';
    $request->xAmzSignature = 'odio';
    $request->xAmzSignedHeaders = 'similique';

    $response = $sdk->sdk->listCodeSigningConfigs($request);

    if ($response->listCodeSigningConfigsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEventSourceMappings

Lists event source mappings. Specify an <code>EventSourceArn</code> to show only event source mappings for a single event source.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListEventSourceMappingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListEventSourceMappingsRequest();
    $request->eventSourceArn = 'facilis';
    $request->functionName = 'vero';
    $request->marker = 'ducimus';
    $request->maxItems = 293020;
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'sequi';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'voluptatibus';

    $response = $sdk->sdk->listEventSourceMappings($request);

    if ($response->listEventSourceMappingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFunctionEventInvokeConfigs

<p>Retrieves a list of configurations for asynchronous invocation for a function.</p> <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListFunctionEventInvokeConfigsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFunctionEventInvokeConfigsRequest();
    $request->functionName = 'exercitationem';
    $request->marker = 'nulla';
    $request->maxItems = 148141;
    $request->xAmzAlgorithm = 'porro';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'eligendi';
    $request->xAmzSignature = 'ducimus';
    $request->xAmzSignedHeaders = 'alias';

    $response = $sdk->sdk->listFunctionEventInvokeConfigs($request);

    if ($response->listFunctionEventInvokeConfigsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFunctionUrlConfigs

Returns a list of Lambda function URLs for the specified function.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListFunctionUrlConfigsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFunctionUrlConfigsRequest();
    $request->functionName = 'officia';
    $request->marker = 'tempora';
    $request->maxItems = 368584;
    $request->xAmzAlgorithm = 'ea';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'possimus';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'ratione';
    $request->xAmzSignedHeaders = 'ex';

    $response = $sdk->sdk->listFunctionUrlConfigs($request);

    if ($response->listFunctionUrlConfigsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFunctions

<p>Returns a list of Lambda functions, with the version-specific configuration of each. Lambda returns up to 50 functions per call.</p> <p>Set <code>FunctionVersion</code> to <code>ALL</code> to include all published versions of each function in addition to the unpublished version.</p> <note> <p>The <code>ListFunctions</code> operation returns a subset of the <a>FunctionConfiguration</a> fields. To get the additional fields (State, StateReasonCode, StateReason, LastUpdateStatus, LastUpdateStatusReason, LastUpdateStatusReasonCode, RuntimeVersionConfig) for a function or version, use <a>GetFunction</a>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListFunctionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListFunctionsFunctionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFunctionsRequest();
    $request->functionVersion = ListFunctionsFunctionVersionEnum::ALL;
    $request->marker = 'laudantium';
    $request->masterRegion = 'dicta';
    $request->maxItems = 224317;
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'ex';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'nostrum';

    $response = $sdk->sdk->listFunctions($request);

    if ($response->listFunctionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFunctionsByCodeSigningConfig

List the functions that use the specified code signing configuration. You can use this method prior to deleting a code signing configuration, to verify that no functions are using it.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListFunctionsByCodeSigningConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFunctionsByCodeSigningConfigRequest();
    $request->codeSigningConfigArn = 'sapiente';
    $request->marker = 'quisquam';
    $request->maxItems = 906556;
    $request->xAmzAlgorithm = 'ea';
    $request->xAmzContentSha256 = 'impedit';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'veniam';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'inventore';
    $request->xAmzSignedHeaders = 'magnam';

    $response = $sdk->sdk->listFunctionsByCodeSigningConfig($request);

    if ($response->listFunctionsByCodeSigningConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listLayerVersions

Lists the versions of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. Versions that have been deleted aren't listed. Specify a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime identifier</a> to list only versions that indicate that they're compatible with that runtime. Specify a compatible architecture to include only layer versions that are compatible with that architecture.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListLayerVersionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListLayerVersionsCompatibleArchitectureEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListLayerVersionsCompatibleRuntimeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListLayerVersionsRequest();
    $request->compatibleArchitecture = ListLayerVersionsCompatibleArchitectureEnum::X8664;
    $request->compatibleRuntime = ListLayerVersionsCompatibleRuntimeEnum::GO1_X;
    $request->layerName = 'consectetur';
    $request->marker = 'recusandae';
    $request->maxItems = 132487;
    $request->xAmzAlgorithm = 'minima';
    $request->xAmzContentSha256 = 'eaque';
    $request->xAmzCredential = 'a';
    $request->xAmzDate = 'libero';
    $request->xAmzSecurityToken = 'aut';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'deleniti';

    $response = $sdk->sdk->listLayerVersions($request);

    if ($response->listLayerVersionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listLayers

Lists <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-layers.html">Lambda layers</a> and shows information about the latest version of each. Specify a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime identifier</a> to list only layers that indicate that they're compatible with that runtime. Specify a compatible architecture to include only layers that are compatible with that <a href="https://docs.aws.amazon.com/lambda/latest/dg/foundation-arch.html">instruction set architecture</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListLayersRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListLayersCompatibleArchitectureEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListLayersCompatibleRuntimeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListLayersRequest();
    $request->compatibleArchitecture = ListLayersCompatibleArchitectureEnum::ARM64;
    $request->compatibleRuntime = ListLayersCompatibleRuntimeEnum::JAVA8;
    $request->marker = 'fugit';
    $request->maxItems = 882860;
    $request->xAmzAlgorithm = 'inventore';
    $request->xAmzContentSha256 = 'non';
    $request->xAmzCredential = 'et';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'placeat';
    $request->xAmzSignedHeaders = 'velit';

    $response = $sdk->sdk->listLayers($request);

    if ($response->listLayersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listProvisionedConcurrencyConfigs

Retrieves a list of provisioned concurrency configurations for a function.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListProvisionedConcurrencyConfigsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListProvisionedConcurrencyConfigsListEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListProvisionedConcurrencyConfigsRequest();
    $request->functionName = 'eum';
    $request->list = ListProvisionedConcurrencyConfigsListEnum::ALL;
    $request->marker = 'autem';
    $request->maxItems = 752135;
    $request->xAmzAlgorithm = 'quas';
    $request->xAmzContentSha256 = 'assumenda';
    $request->xAmzCredential = 'nulla';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'tempora';

    $response = $sdk->sdk->listProvisionedConcurrencyConfigs($request);

    if ($response->listProvisionedConcurrencyConfigsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTags

Returns a function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a>. You can also view tags with <a>GetFunction</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsRequest();
    $request->arn = 'numquam';
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'odio';
    $request->xAmzSignedHeaders = 'eius';

    $response = $sdk->sdk->listTags($request);

    if ($response->listTagsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listVersionsByFunction

Returns a list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">versions</a>, with the version-specific configuration of each. Lambda returns up to 50 versions per call.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListVersionsByFunctionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListVersionsByFunctionRequest();
    $request->functionName = 'esse';
    $request->marker = 'esse';
    $request->maxItems = 524593;
    $request->xAmzAlgorithm = 'fuga';
    $request->xAmzContentSha256 = 'reprehenderit';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'fugiat';
    $request->xAmzSecurityToken = 'ut';
    $request->xAmzSignature = 'eum';
    $request->xAmzSignedHeaders = 'suscipit';

    $response = $sdk->sdk->listVersionsByFunction($request);

    if ($response->listVersionsByFunctionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## publishLayerVersion

<p>Creates an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a> from a ZIP archive. Each time you call <code>PublishLayerVersion</code> with the same layer name, a new version is created.</p> <p>Add layers to your function with <a>CreateFunction</a> or <a>UpdateFunctionConfiguration</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PublishLayerVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\PublishLayerVersionRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ArchitectureEnum;
use \OpenAPI\OpenAPI\Models\Shared\RuntimeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PublishLayerVersionRequestBodyContent;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PublishLayerVersionRequest();
    $request->layerName = 'assumenda';
    $request->requestBody = new PublishLayerVersionRequestBody();
    $request->requestBody->compatibleArchitectures = [
        ArchitectureEnum::ARM64,
    ];
    $request->requestBody->compatibleRuntimes = [
        RuntimeEnum::NODEJS610,
        RuntimeEnum::NODEJS43,
        RuntimeEnum::DOTNETCORE31,
        RuntimeEnum::DOTNET6,
    ];
    $request->requestBody->content = new PublishLayerVersionRequestBodyContent();
    $request->requestBody->content->s3Bucket = 'neque';
    $request->requestBody->content->s3Key = 'quo';
    $request->requestBody->content->s3ObjectVersion = 'illum';
    $request->requestBody->content->zipFile = 'quo';
    $request->requestBody->description = 'fuga';
    $request->requestBody->licenseInfo = 'eius';
    $request->xAmzAlgorithm = 'eos';
    $request->xAmzContentSha256 = 'voluptas';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'cupiditate';
    $request->xAmzSecurityToken = 'consequatur';
    $request->xAmzSignature = 'tempora';
    $request->xAmzSignedHeaders = 'debitis';

    $response = $sdk->sdk->publishLayerVersion($request);

    if ($response->publishLayerVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## publishVersion

<p>Creates a <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">version</a> from the current code and configuration of a function. Use versions to create a snapshot of your function code and configuration that doesn't change.</p> <p>Lambda doesn't publish a version if the function's configuration and code haven't changed since the last version. Use <a>UpdateFunctionCode</a> or <a>UpdateFunctionConfiguration</a> to update the function before publishing a version.</p> <p>Clients can invoke versions directly or with an alias. To create an alias, use <a>CreateAlias</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PublishVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\PublishVersionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PublishVersionRequest();
    $request->functionName = 'ipsam';
    $request->requestBody = new PublishVersionRequestBody();
    $request->requestBody->codeSha256 = 'aspernatur';
    $request->requestBody->description = 'sequi';
    $request->requestBody->revisionId = 'quo';
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'recusandae';
    $request->xAmzCredential = 'aperiam';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'quod';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'inventore';

    $response = $sdk->sdk->publishVersion($request);

    if ($response->functionConfiguration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putFunctionCodeSigningConfig

Update the code signing configuration for the function. Changes to the code signing configuration take effect the next time a user tries to deploy a code package to the function. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutFunctionCodeSigningConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutFunctionCodeSigningConfigRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutFunctionCodeSigningConfigRequest();
    $request->functionName = 'nihil';
    $request->requestBody = new PutFunctionCodeSigningConfigRequestBody();
    $request->requestBody->codeSigningConfigArn = 'totam';
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'aliquam';
    $request->xAmzCredential = 'odio';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'dolores';

    $response = $sdk->sdk->putFunctionCodeSigningConfig($request);

    if ($response->putFunctionCodeSigningConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putFunctionConcurrency

<p>Sets the maximum number of simultaneous executions for a function, and reserves capacity for that concurrency level.</p> <p>Concurrency settings apply to the function as a whole, including all published versions and the unpublished version. Reserving concurrency both ensures that your function has capacity to process the specified number of events simultaneously, and prevents it from scaling beyond that level. Use <a>GetFunction</a> to see the current setting for a function.</p> <p>Use <a>GetAccountSettings</a> to see your Regional concurrency limit. You can reserve concurrency for as many functions as you like, as long as you leave at least 100 simultaneous executions unreserved for functions that aren't configured with a per-function limit. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-scaling.html">Lambda function scaling</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutFunctionConcurrencyRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutFunctionConcurrencyRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutFunctionConcurrencyRequest();
    $request->functionName = 'deserunt';
    $request->requestBody = new PutFunctionConcurrencyRequestBody();
    $request->requestBody->reservedConcurrentExecutions = 475289;
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'porro';
    $request->xAmzCredential = 'eum';
    $request->xAmzDate = 'quas';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'consequuntur';
    $request->xAmzSignedHeaders = 'deleniti';

    $response = $sdk->sdk->putFunctionConcurrency($request);

    if ($response->concurrency !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putFunctionEventInvokeConfig

<p>Configures options for <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html">asynchronous invocation</a> on a function, version, or alias. If a configuration already exists for a function, version, or alias, this operation overwrites it. If you exclude any settings, they are removed. To set one option without affecting existing settings for other options, use <a>UpdateFunctionEventInvokeConfig</a>.</p> <p>By default, Lambda retries an asynchronous invocation twice if the function returns an error. It retains events in a queue for up to six hours. When an event fails all processing attempts or stays in the asynchronous invocation queue for too long, Lambda discards it. To retain discarded events, configure a dead-letter queue with <a>UpdateFunctionConfiguration</a>.</p> <p>To send an invocation record to a queue, topic, function, or event bus, specify a <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-async-destinations">destination</a>. You can configure separate destinations for successful invocations (on-success) and events that fail all processing attempts (on-failure). You can configure destinations in addition to or instead of a dead-letter queue.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutFunctionEventInvokeConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutFunctionEventInvokeConfigRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PutFunctionEventInvokeConfigRequestBodyDestinationConfig;
use \OpenAPI\OpenAPI\Models\Shared\OnFailure;
use \OpenAPI\OpenAPI\Models\Shared\OnSuccess;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutFunctionEventInvokeConfigRequest();
    $request->functionName = 'fugit';
    $request->qualifier = 'fuga';
    $request->requestBody = new PutFunctionEventInvokeConfigRequestBody();
    $request->requestBody->destinationConfig = new PutFunctionEventInvokeConfigRequestBodyDestinationConfig();
    $request->requestBody->destinationConfig->onFailure = new OnFailure();
    $request->requestBody->destinationConfig->onFailure->destination = 'mollitia';
    $request->requestBody->destinationConfig->onSuccess = new OnSuccess();
    $request->requestBody->destinationConfig->onSuccess->destination = 'incidunt';
    $request->requestBody->maximumEventAgeInSeconds = 539224;
    $request->requestBody->maximumRetryAttempts = 128860;
    $request->xAmzAlgorithm = 'minima';
    $request->xAmzContentSha256 = 'nisi';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'ratione';
    $request->xAmzSignedHeaders = 'explicabo';

    $response = $sdk->sdk->putFunctionEventInvokeConfig($request);

    if ($response->functionEventInvokeConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putProvisionedConcurrencyConfig

Adds a provisioned concurrency configuration to a function's alias or version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutProvisionedConcurrencyConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutProvisionedConcurrencyConfigRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutProvisionedConcurrencyConfigRequest();
    $request->functionName = 'saepe';
    $request->qualifier = 'occaecati';
    $request->requestBody = new PutProvisionedConcurrencyConfigRequestBody();
    $request->requestBody->provisionedConcurrentExecutions = 543806;
    $request->xAmzAlgorithm = 'et';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'eveniet';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'quod';

    $response = $sdk->sdk->putProvisionedConcurrencyConfig($request);

    if ($response->putProvisionedConcurrencyConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putRuntimeManagementConfig

Sets the runtime management configuration for a function's version. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html">Runtime updates</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutRuntimeManagementConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutRuntimeManagementConfigRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PutRuntimeManagementConfigRequestBodyUpdateRuntimeOnEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutRuntimeManagementConfigRequest();
    $request->functionName = 'nam';
    $request->qualifier = 'vero';
    $request->requestBody = new PutRuntimeManagementConfigRequestBody();
    $request->requestBody->runtimeVersionArn = 'aliquid';
    $request->requestBody->updateRuntimeOn = PutRuntimeManagementConfigRequestBodyUpdateRuntimeOnEnum::AUTO;
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'harum';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'rerum';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'minima';

    $response = $sdk->sdk->putRuntimeManagementConfig($request);

    if ($response->putRuntimeManagementConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeLayerVersionPermission

Removes a statement from the permissions policy for a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. For more information, see <a>AddLayerVersionPermission</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveLayerVersionPermissionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveLayerVersionPermissionRequest();
    $request->layerName = 'distinctio';
    $request->revisionId = 'eligendi';
    $request->statementId = 'sit';
    $request->versionNumber = 636061;
    $request->xAmzAlgorithm = 'tempore';
    $request->xAmzContentSha256 = 'adipisci';
    $request->xAmzCredential = 'cumque';
    $request->xAmzDate = 'consequuntur';
    $request->xAmzSecurityToken = 'consequatur';
    $request->xAmzSignature = 'minus';
    $request->xAmzSignedHeaders = 'quaerat';

    $response = $sdk->sdk->removeLayerVersionPermission($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removePermission

Revokes function-use permission from an Amazon Web Service or another Amazon Web Services account. You can get the ID of the statement from the output of <a>GetPolicy</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemovePermissionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemovePermissionRequest();
    $request->functionName = 'sapiente';
    $request->qualifier = 'consectetur';
    $request->revisionId = 'esse';
    $request->statementId = 'blanditiis';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'a';
    $request->xAmzCredential = 'nulla';
    $request->xAmzDate = 'quas';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'a';

    $response = $sdk->sdk->removePermission($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Adds <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a> to a function.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->arn = 'error';
    $request->requestBody = new TagResourceRequestBody();
    $request->requestBody->tags = [
        'pariatur' => 'possimus',
        'quia' => 'eveniet',
        'asperiores' => 'facere',
    ];
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'similique';
    $request->xAmzSecurityToken = 'culpa';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'tenetur';

    $response = $sdk->sdk->tagResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a> from a function.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->arn = 'quae';
    $request->xAmzAlgorithm = 'earum';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'eius';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'soluta';
    $request->tagKeys = [
        'aliquam',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAlias

Updates the configuration of a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html">alias</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAliasRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAliasRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAliasRequestBodyRoutingConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAliasRequest();
    $request->functionName = 'sapiente';
    $request->name = 'Marion Kihn';
    $request->requestBody = new UpdateAliasRequestBody();
    $request->requestBody->description = 'aut';
    $request->requestBody->functionVersion = 'voluptatum';
    $request->requestBody->revisionId = 'qui';
    $request->requestBody->routingConfig = new UpdateAliasRequestBodyRoutingConfig();
    $request->requestBody->routingConfig->additionalVersionWeights = [
        'ex' => 5362.75,
        'itaque' => 6802.7,
        'architecto' => 6091.78,
        'tenetur' => 984.78,
    ];
    $request->xAmzAlgorithm = 'at';
    $request->xAmzContentSha256 = 'et';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'consectetur';

    $response = $sdk->sdk->updateAlias($request);

    if ($response->aliasConfiguration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCodeSigningConfig

Update the code signing configuration. Changes to the code signing configuration take effect the next time a user tries to deploy a code package to the function. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCodeSigningConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCodeSigningConfigRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCodeSigningConfigRequestBodyAllowedPublishers;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCodeSigningConfigRequestBodyCodeSigningPolicies;
use \OpenAPI\OpenAPI\Models\Shared\CodeSigningPolicyEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCodeSigningConfigRequest();
    $request->codeSigningConfigArn = 'adipisci';
    $request->requestBody = new UpdateCodeSigningConfigRequestBody();
    $request->requestBody->allowedPublishers = new UpdateCodeSigningConfigRequestBodyAllowedPublishers();
    $request->requestBody->allowedPublishers->signingProfileVersionArns = [
        'temporibus',
        'accusantium',
        'rem',
    ];
    $request->requestBody->codeSigningPolicies = new UpdateCodeSigningConfigRequestBodyCodeSigningPolicies();
    $request->requestBody->codeSigningPolicies->untrustedArtifactOnDeployment = CodeSigningPolicyEnum::WARN;
    $request->requestBody->description = 'laudantium';
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'corrupti';
    $request->xAmzSecurityToken = 'non';
    $request->xAmzSignature = 'voluptatem';
    $request->xAmzSignedHeaders = 'dolor';

    $response = $sdk->sdk->updateCodeSigningConfig($request);

    if ($response->updateCodeSigningConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateEventSourceMapping

<p>Updates an event source mapping. You can change the function that Lambda invokes, or pause invocation and resume later from the same location.</p> <p>For details about how to configure different event sources, see the following topics. </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html#services-dynamodb-eventsourcemapping"> Amazon DynamoDB Streams</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html#services-kinesis-eventsourcemapping"> Amazon Kinesis</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#events-sqs-eventsource"> Amazon SQS</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#services-mq-eventsourcemapping"> Amazon MQ and RabbitMQ</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html"> Amazon MSK</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/kafka-smaa.html"> Apache Kafka</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-documentdb.html"> Amazon DocumentDB</a> </p> </li> </ul> <p>The following error handling options are available only for stream sources (DynamoDB and Kinesis):</p> <ul> <li> <p> <code>BisectBatchOnFunctionError</code> – If the function returns an error, split the batch in two and retry.</p> </li> <li> <p> <code>DestinationConfig</code> – Send discarded records to an Amazon SQS queue or Amazon SNS topic.</p> </li> <li> <p> <code>MaximumRecordAgeInSeconds</code> – Discard records older than the specified age. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires</p> </li> <li> <p> <code>MaximumRetryAttempts</code> – Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires.</p> </li> <li> <p> <code>ParallelizationFactor</code> – Process multiple batches from each shard concurrently.</p> </li> </ul> <p>For information about which configuration parameters apply to each event source, see the following topics.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html#services-ddb-params"> Amazon DynamoDB Streams</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html#services-kinesis-params"> Amazon Kinesis</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#services-sqs-params"> Amazon SQS</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#services-mq-params"> Amazon MQ and RabbitMQ</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-parms"> Amazon MSK</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kafka.html#services-kafka-parms"> Apache Kafka</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-documentdb.html#docdb-configuration"> Amazon DocumentDB</a> </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEventSourceMappingRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEventSourceMappingRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEventSourceMappingRequestBodyDestinationConfig;
use \OpenAPI\OpenAPI\Models\Shared\OnFailure;
use \OpenAPI\OpenAPI\Models\Shared\OnSuccess;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEventSourceMappingRequestBodyDocumentDBEventSourceConfig;
use \OpenAPI\OpenAPI\Models\Shared\FullDocumentEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEventSourceMappingRequestBodyFilterCriteria;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Shared\FunctionResponseTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEventSourceMappingRequestBodyScalingConfig;
use \OpenAPI\OpenAPI\Models\Shared\SourceAccessConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\SourceAccessTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateEventSourceMappingRequest();
    $request->requestBody = new UpdateEventSourceMappingRequestBody();
    $request->requestBody->batchSize = 580152;
    $request->requestBody->bisectBatchOnFunctionError = false;
    $request->requestBody->destinationConfig = new UpdateEventSourceMappingRequestBodyDestinationConfig();
    $request->requestBody->destinationConfig->onFailure = new OnFailure();
    $request->requestBody->destinationConfig->onFailure->destination = 'numquam';
    $request->requestBody->destinationConfig->onSuccess = new OnSuccess();
    $request->requestBody->destinationConfig->onSuccess->destination = 'impedit';
    $request->requestBody->documentDBEventSourceConfig = new UpdateEventSourceMappingRequestBodyDocumentDBEventSourceConfig();
    $request->requestBody->documentDBEventSourceConfig->collectionName = 'explicabo';
    $request->requestBody->documentDBEventSourceConfig->databaseName = 'voluptas';
    $request->requestBody->documentDBEventSourceConfig->fullDocument = FullDocumentEnum::UPDATE_LOOKUP;
    $request->requestBody->enabled = false;
    $request->requestBody->filterCriteria = new UpdateEventSourceMappingRequestBodyFilterCriteria();
    $request->requestBody->filterCriteria->filters = [
        new Filter(),
        new Filter(),
    ];
    $request->requestBody->functionName = 'dicta';
    $request->requestBody->functionResponseTypes = [
        FunctionResponseTypeEnum::REPORT_BATCH_ITEM_FAILURES,
        FunctionResponseTypeEnum::REPORT_BATCH_ITEM_FAILURES,
        FunctionResponseTypeEnum::REPORT_BATCH_ITEM_FAILURES,
        FunctionResponseTypeEnum::REPORT_BATCH_ITEM_FAILURES,
    ];
    $request->requestBody->maximumBatchingWindowInSeconds = 618480;
    $request->requestBody->maximumRecordAgeInSeconds = 244651;
    $request->requestBody->maximumRetryAttempts = 974257;
    $request->requestBody->parallelizationFactor = 374323;
    $request->requestBody->scalingConfig = new UpdateEventSourceMappingRequestBodyScalingConfig();
    $request->requestBody->scalingConfig->maximumConcurrency = 990345;
    $request->requestBody->sourceAccessConfigurations = [
        new SourceAccessConfiguration(),
    ];
    $request->requestBody->tumblingWindowInSeconds = 409054;
    $request->uuid = '42dac7af-515c-4c41-baa6-3aae8d67864d';
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'commodi';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'assumenda';

    $response = $sdk->sdk->updateEventSourceMapping($request);

    if ($response->eventSourceMappingConfiguration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateFunctionCode

<p>Updates a Lambda function's code. If code signing is enabled for the function, the code package must be signed by a trusted publisher. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html">Configuring code signing for Lambda</a>.</p> <p>If the function's package type is <code>Image</code>, then you must specify the code package in <code>ImageUri</code> as the URI of a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-images.html">container image</a> in the Amazon ECR registry.</p> <p>If the function's package type is <code>Zip</code>, then you must specify the deployment package as a <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html#gettingstarted-package-zip">.zip file archive</a>. Enter the Amazon S3 bucket and key of the code .zip file location. You can also provide the function code inline using the <code>ZipFile</code> field.</p> <p>The code in the deployment package must be compatible with the target instruction set architecture of the function (<code>x86-64</code> or <code>arm64</code>).</p> <p>The function's code is locked when you publish a version. You can't modify the code of a published version, only the unpublished version.</p> <note> <p>For a function defined as a container image, Lambda resolves the image tag to an image digest. In Amazon ECR, if you update the image tag to a new image, Lambda does not automatically update the function.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFunctionCodeRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFunctionCodeRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ArchitectureEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateFunctionCodeRequest();
    $request->functionName = 'nemo';
    $request->requestBody = new UpdateFunctionCodeRequestBody();
    $request->requestBody->architectures = [
        ArchitectureEnum::X8664,
        ArchitectureEnum::X8664,
        ArchitectureEnum::ARM64,
        ArchitectureEnum::X8664,
    ];
    $request->requestBody->dryRun = false;
    $request->requestBody->imageUri = 'in';
    $request->requestBody->publish = false;
    $request->requestBody->revisionId = 'exercitationem';
    $request->requestBody->s3Bucket = 'earum';
    $request->requestBody->s3Key = 'facere';
    $request->requestBody->s3ObjectVersion = 'numquam';
    $request->requestBody->zipFile = 'doloribus';
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'necessitatibus';
    $request->xAmzSignature = 'dolore';
    $request->xAmzSignedHeaders = 'sunt';

    $response = $sdk->sdk->updateFunctionCode($request);

    if ($response->functionConfiguration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateFunctionConfiguration

<p>Modify the version-specific settings of a Lambda function.</p> <p>When you update a function, Lambda provisions an instance of the function and its supporting resources. If your function connects to a VPC, this process can take a minute. During this time, you can't modify the function, but you can still invoke it. The <code>LastUpdateStatus</code>, <code>LastUpdateStatusReason</code>, and <code>LastUpdateStatusReasonCode</code> fields in the response from <a>GetFunctionConfiguration</a> indicate when the update is complete and the function is processing events with the new configuration. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/functions-states.html">Lambda function states</a>.</p> <p>These settings can vary between versions of a function and are locked when you publish a version. You can't modify the configuration of a published version, only the unpublished version.</p> <p>To configure function concurrency, use <a>PutFunctionConcurrency</a>. To grant invoke permissions to an Amazon Web Services account or Amazon Web Service, use <a>AddPermission</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFunctionConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFunctionConfigurationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFunctionConfigurationRequestBodyDeadLetterConfig;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFunctionConfigurationRequestBodyEnvironment;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFunctionConfigurationRequestBodyEphemeralStorage;
use \OpenAPI\OpenAPI\Models\Shared\FileSystemConfig;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFunctionConfigurationRequestBodyImageConfig;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFunctionConfigurationRequestBodyRuntimeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFunctionConfigurationRequestBodySnapStart;
use \OpenAPI\OpenAPI\Models\Shared\SnapStartApplyOnEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFunctionConfigurationRequestBodyTracingConfig;
use \OpenAPI\OpenAPI\Models\Shared\TracingModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFunctionConfigurationRequestBodyVpcConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateFunctionConfigurationRequest();
    $request->functionName = 'asperiores';
    $request->requestBody = new UpdateFunctionConfigurationRequestBody();
    $request->requestBody->deadLetterConfig = new UpdateFunctionConfigurationRequestBodyDeadLetterConfig();
    $request->requestBody->deadLetterConfig->targetArn = 'adipisci';
    $request->requestBody->description = 'non';
    $request->requestBody->environment = new UpdateFunctionConfigurationRequestBodyEnvironment();
    $request->requestBody->environment->variables = [
        'beatae' => 'dignissimos',
    ];
    $request->requestBody->ephemeralStorage = new UpdateFunctionConfigurationRequestBodyEphemeralStorage();
    $request->requestBody->ephemeralStorage->size = 950953;
    $request->requestBody->fileSystemConfigs = [
        new FileSystemConfig(),
        new FileSystemConfig(),
        new FileSystemConfig(),
        new FileSystemConfig(),
    ];
    $request->requestBody->handler = 'consectetur';
    $request->requestBody->imageConfig = new UpdateFunctionConfigurationRequestBodyImageConfig();
    $request->requestBody->imageConfig->command = [
        'harum',
        'laboriosam',
    ];
    $request->requestBody->imageConfig->entryPoint = [
        'voluptates',
    ];
    $request->requestBody->imageConfig->workingDirectory = 'libero';
    $request->requestBody->kmsKeyArn = 'vitae';
    $request->requestBody->layers = [
        'similique',
        'tempora',
        'aspernatur',
        'voluptas',
    ];
    $request->requestBody->memorySize = 374244;
    $request->requestBody->revisionId = 'voluptas';
    $request->requestBody->role = 'minima';
    $request->requestBody->runtime = UpdateFunctionConfigurationRequestBodyRuntimeEnum::NODEJS43_EDGE;
    $request->requestBody->snapStart = new UpdateFunctionConfigurationRequestBodySnapStart();
    $request->requestBody->snapStart->applyOn = SnapStartApplyOnEnum::NONE;
    $request->requestBody->timeout = 237807;
    $request->requestBody->tracingConfig = new UpdateFunctionConfigurationRequestBodyTracingConfig();
    $request->requestBody->tracingConfig->mode = TracingModeEnum::PASS_THROUGH;
    $request->requestBody->vpcConfig = new UpdateFunctionConfigurationRequestBodyVpcConfig();
    $request->requestBody->vpcConfig->securityGroupIds = [
        'blanditiis',
    ];
    $request->requestBody->vpcConfig->subnetIds = [
        'dolore',
        'aliquam',
    ];
    $request->xAmzAlgorithm = 'officiis';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'ullam';
    $request->xAmzDate = 'adipisci';
    $request->xAmzSecurityToken = 'cum';
    $request->xAmzSignature = 'blanditiis';
    $request->xAmzSignedHeaders = 'quas';

    $response = $sdk->sdk->updateFunctionConfiguration($request);

    if ($response->functionConfiguration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateFunctionEventInvokeConfig

<p>Updates the configuration for asynchronous invocation for a function, version, or alias.</p> <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFunctionEventInvokeConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFunctionEventInvokeConfigRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFunctionEventInvokeConfigRequestBodyDestinationConfig;
use \OpenAPI\OpenAPI\Models\Shared\OnFailure;
use \OpenAPI\OpenAPI\Models\Shared\OnSuccess;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateFunctionEventInvokeConfigRequest();
    $request->functionName = 'hic';
    $request->qualifier = 'nesciunt';
    $request->requestBody = new UpdateFunctionEventInvokeConfigRequestBody();
    $request->requestBody->destinationConfig = new UpdateFunctionEventInvokeConfigRequestBodyDestinationConfig();
    $request->requestBody->destinationConfig->onFailure = new OnFailure();
    $request->requestBody->destinationConfig->onFailure->destination = 'culpa';
    $request->requestBody->destinationConfig->onSuccess = new OnSuccess();
    $request->requestBody->destinationConfig->onSuccess->destination = 'corrupti';
    $request->requestBody->maximumEventAgeInSeconds = 867290;
    $request->requestBody->maximumRetryAttempts = 519643;
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'exercitationem';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'sit';
    $request->xAmzSecurityToken = 'rerum';
    $request->xAmzSignature = 'sed';
    $request->xAmzSignedHeaders = 'reiciendis';

    $response = $sdk->sdk->updateFunctionEventInvokeConfig($request);

    if ($response->functionEventInvokeConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateFunctionUrlConfig

Updates the configuration for a Lambda function URL.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFunctionUrlConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFunctionUrlConfigRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFunctionUrlConfigRequestBodyAuthTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFunctionUrlConfigRequestBodyCors;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFunctionUrlConfigRequestBodyInvokeModeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateFunctionUrlConfigRequest();
    $request->functionName = 'explicabo';
    $request->qualifier = 'asperiores';
    $request->requestBody = new UpdateFunctionUrlConfigRequestBody();
    $request->requestBody->authType = UpdateFunctionUrlConfigRequestBodyAuthTypeEnum::AWS_IAM;
    $request->requestBody->cors = new UpdateFunctionUrlConfigRequestBodyCors();
    $request->requestBody->cors->allowCredentials = false;
    $request->requestBody->cors->allowHeaders = [
        'expedita',
        'ab',
    ];
    $request->requestBody->cors->allowMethods = [
        'dolore',
        'laborum',
        'sed',
    ];
    $request->requestBody->cors->allowOrigins = [
        'commodi',
        'quidem',
    ];
    $request->requestBody->cors->exposeHeaders = [
        'voluptas',
    ];
    $request->requestBody->cors->maxAge = 604118;
    $request->requestBody->invokeMode = UpdateFunctionUrlConfigRequestBodyInvokeModeEnum::BUFFERED;
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'debitis';
    $request->xAmzDate = 'illo';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'corrupti';

    $response = $sdk->sdk->updateFunctionUrlConfig($request);

    if ($response->updateFunctionUrlConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
