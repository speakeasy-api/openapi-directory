# SDK

## Overview

<fullname>Lambda</fullname> <p> <b>Overview</b> </p> <p>Lambda is a compute service that lets you run code without provisioning or managing servers. Lambda runs your code on a high-availability compute infrastructure and performs all of the administration of the compute resources, including server and operating system maintenance, capacity provisioning and automatic scaling, code monitoring and logging. With Lambda, you can run code for virtually any type of application or backend service. For more information about the Lambda service, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/welcome.html">What is Lambda</a> in the <b>Lambda Developer Guide</b>.</p> <p>The <i>Lambda API Reference</i> provides information about each of the API methods, including details about the parameters in each API request and response. </p> <p/> <p>You can use Software Development Kits (SDKs), Integrated Development Environment (IDE) Toolkits, and command line tools to access the API. For installation instructions, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>. </p> <p>For a list of Region-specific endpoints that Lambda supports, see <a href="https://docs.aws.amazon.com/general/latest/gr/lambda-service.html/">Lambda endpoints and quotas </a> in the <i>Amazon Web Services General Reference.</i>. </p> <p>When making the API calls, you will need to authenticate your request by providing a signature. Lambda supports signature version 4. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 signing process</a> in the <i>Amazon Web Services General Reference.</i>. </p> <p> <b>CA certificates</b> </p> <p>Because Amazon Web Services SDKs use the CA certificates from your computer, changes to the certificates on the Amazon Web Services servers can cause connection failures when you attempt to use an SDK. You can prevent these failures by keeping your computer's CA certificates and operating system up-to-date. If you encounter this issue in a corporate environment and do not manage your own computer, you might need to ask an administrator to assist with the update process. The following list shows minimum operating system and Java versions:</p> <ul> <li> <p>Microsoft Windows versions that have updates from January 2005 or later installed contain at least one of the required CAs in their trust list. </p> </li> <li> <p>Mac OS X 10.4 with Java for Mac OS X 10.4 Release 5 (February 2007), Mac OS X 10.5 (October 2007), and later versions contain at least one of the required CAs in their trust list. </p> </li> <li> <p>Red Hat Enterprise Linux 5 (March 2007), 6, and 7 and CentOS 5, 6, and 7 all contain at least one of the required CAs in their default trusted CA list. </p> </li> <li> <p>Java 1.4.2_12 (May 2006), 5 Update 2 (March 2005), and all later versions, including Java 6 (December 2006), 7, and 8, contain at least one of the required CAs in their default trusted CA list. </p> </li> </ul> <p>When accessing the Lambda management console or Lambda API endpoints, whether through browsers or programmatically, you will need to ensure your client machines support any of the following CAs: </p> <ul> <li> <p>Amazon Root CA 1</p> </li> <li> <p>Starfield Services Root Certificate Authority - G2</p> </li> <li> <p>Starfield Class 2 Certification Authority</p> </li> </ul> <p>Root certificates from the first two authorities are available from <a href="https://www.amazontrust.com/repository/">Amazon trust services</a>, but keeping your computer up-to-date is the more straightforward solution. To learn more about ACM-provided certificates, see <a href="http://aws.amazon.com/certificate-manager/faqs/#certificates">Amazon Web Services Certificate Manager FAQs.</a> </p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/lambda/>
### Available Operations

* [AddLayerVersionPermission](#addlayerversionpermission) - <p>Adds permissions to the resource-based policy of a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. Use this action to grant layer usage permission to other accounts. You can grant permission to a single account, all accounts in an organization, or all Amazon Web Services accounts. </p> <p>To revoke permission, call <a>RemoveLayerVersionPermission</a> with the statement ID that you specified when you added it.</p>
* [AddPermission](#addpermission) - <p>Grants an Amazon Web Service, Amazon Web Services account, or Amazon Web Services organization permission to use a function. You can apply the policy at the function level, or specify a qualifier to restrict access to a single version or alias. If you use a qualifier, the invoker must use the full Amazon Resource Name (ARN) of that version or alias to invoke the function. Note: Lambda does not support adding policies to version $LATEST.</p> <p>To grant permission to another account, specify the account ID as the <code>Principal</code>. To grant permission to an organization defined in Organizations, specify the organization ID as the <code>PrincipalOrgID</code>. For Amazon Web Services, the principal is a domain-style identifier that the service defines, such as <code>s3.amazonaws.com</code> or <code>sns.amazonaws.com</code>. For Amazon Web Services, you can also specify the ARN of the associated resource as the <code>SourceArn</code>. If you grant permission to a service principal without specifying the source, other accounts could potentially configure resources in their account to invoke your Lambda function.</p> <p>This operation adds a statement to a resource-based permissions policy for the function. For more information about function policies, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html">Using resource-based policies for Lambda</a>.</p>
* [CreateAlias](#createalias) - <p>Creates an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html">alias</a> for a Lambda function version. Use aliases to provide clients with a function identifier that you can update to invoke a different version.</p> <p>You can also map an alias to split invocation requests between two versions. Use the <code>RoutingConfig</code> parameter to specify a second version and the percentage of invocation requests that it receives.</p>
* [CreateCodeSigningConfig](#createcodesigningconfig) - Creates a code signing configuration. A <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html">code signing configuration</a> defines a list of allowed signing profiles and defines the code-signing validation policy (action to be taken if deployment validation checks fail). 
* [CreateEventSourceMapping](#createeventsourcemapping) - <p>Creates a mapping between an event source and an Lambda function. Lambda reads items from the event source and invokes the function.</p> <p>For details about how to configure different event sources, see the following topics. </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html#services-dynamodb-eventsourcemapping"> Amazon DynamoDB Streams</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html#services-kinesis-eventsourcemapping"> Amazon Kinesis</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#events-sqs-eventsource"> Amazon SQS</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#services-mq-eventsourcemapping"> Amazon MQ and RabbitMQ</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html"> Amazon MSK</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/kafka-smaa.html"> Apache Kafka</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-documentdb.html"> Amazon DocumentDB</a> </p> </li> </ul> <p>The following error handling options are available only for stream sources (DynamoDB and Kinesis):</p> <ul> <li> <p> <code>BisectBatchOnFunctionError</code> – If the function returns an error, split the batch in two and retry.</p> </li> <li> <p> <code>DestinationConfig</code> – Send discarded records to an Amazon SQS queue or Amazon SNS topic.</p> </li> <li> <p> <code>MaximumRecordAgeInSeconds</code> – Discard records older than the specified age. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires</p> </li> <li> <p> <code>MaximumRetryAttempts</code> – Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires.</p> </li> <li> <p> <code>ParallelizationFactor</code> – Process multiple batches from each shard concurrently.</p> </li> </ul> <p>For information about which configuration parameters apply to each event source, see the following topics.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html#services-ddb-params"> Amazon DynamoDB Streams</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html#services-kinesis-params"> Amazon Kinesis</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#services-sqs-params"> Amazon SQS</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#services-mq-params"> Amazon MQ and RabbitMQ</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-parms"> Amazon MSK</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kafka.html#services-kafka-parms"> Apache Kafka</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-documentdb.html#docdb-configuration"> Amazon DocumentDB</a> </p> </li> </ul>
* [CreateFunction](#createfunction) - <p>Creates a Lambda function. To create a function, you need a <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html">deployment package</a> and an <a href="https://docs.aws.amazon.com/lambda/latest/dg/intro-permission-model.html#lambda-intro-execution-role">execution role</a>. The deployment package is a .zip file archive or container image that contains your function code. The execution role grants the function permission to use Amazon Web Services, such as Amazon CloudWatch Logs for log streaming and X-Ray for request tracing.</p> <p>If the deployment package is a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-images.html">container image</a>, then you set the package type to <code>Image</code>. For a container image, the code property must include the URI of a container image in the Amazon ECR registry. You do not need to specify the handler and runtime properties.</p> <p>If the deployment package is a <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html#gettingstarted-package-zip">.zip file archive</a>, then you set the package type to <code>Zip</code>. For a .zip file archive, the code property specifies the location of the .zip file. You must also specify the handler and runtime properties. The code in the deployment package must be compatible with the target instruction set architecture of the function (<code>x86-64</code> or <code>arm64</code>). If you do not specify the architecture, then the default value is <code>x86-64</code>.</p> <p>When you create a function, Lambda provisions an instance of the function and its supporting resources. If your function connects to a VPC, this process can take a minute or so. During this time, you can't invoke or modify the function. The <code>State</code>, <code>StateReason</code>, and <code>StateReasonCode</code> fields in the response from <a>GetFunctionConfiguration</a> indicate when the function is ready to invoke. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/functions-states.html">Lambda function states</a>.</p> <p>A function has an unpublished version, and can have published versions and aliases. The unpublished version changes when you update your function's code and configuration. A published version is a snapshot of your function code and configuration that can't be changed. An alias is a named resource that maps to a version, and can be changed to map to a different version. Use the <code>Publish</code> parameter to create version <code>1</code> of your function from its initial configuration.</p> <p>The other parameters let you configure version-specific and function-level settings. You can modify version-specific settings later with <a>UpdateFunctionConfiguration</a>. Function-level settings apply to both the unpublished and published versions of the function, and include tags (<a>TagResource</a>) and per-function concurrency limits (<a>PutFunctionConcurrency</a>).</p> <p>You can use code signing if your deployment package is a .zip file archive. To enable code signing for this function, specify the ARN of a code-signing configuration. When a user attempts to deploy a code package with <a>UpdateFunctionCode</a>, Lambda checks that the code package has a valid signature from a trusted publisher. The code-signing configuration includes set of signing profiles, which define the trusted publishers for this function.</p> <p>If another Amazon Web Services account or an Amazon Web Service invokes your function, use <a>AddPermission</a> to grant permission by creating a resource-based Identity and Access Management (IAM) policy. You can grant permissions at the function level, on a version, or on an alias.</p> <p>To invoke your function directly, use <a>Invoke</a>. To invoke your function in response to events in other Amazon Web Services, create an event source mapping (<a>CreateEventSourceMapping</a>), or configure a function trigger in the other service. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-invocation.html">Invoking Lambda functions</a>.</p>
* [CreateFunctionURLConfig](#createfunctionurlconfig) - Creates a Lambda function URL with the specified configuration parameters. A function URL is a dedicated HTTP(S) endpoint that you can use to invoke your function.
* [DeleteAlias](#deletealias) - Deletes a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html">alias</a>.
* [DeleteCodeSigningConfig](#deletecodesigningconfig) - Deletes the code signing configuration. You can delete the code signing configuration only if no function is using it. 
* [DeleteEventSourceMapping](#deleteeventsourcemapping) - <p>Deletes an <a href="https://docs.aws.amazon.com/lambda/latest/dg/intro-invocation-modes.html">event source mapping</a>. You can get the identifier of a mapping from the output of <a>ListEventSourceMappings</a>.</p> <p>When you delete an event source mapping, it enters a <code>Deleting</code> state and might not be completely deleted for several seconds.</p>
* [DeleteFunction](#deletefunction) - <p>Deletes a Lambda function. To delete a specific function version, use the <code>Qualifier</code> parameter. Otherwise, all versions and aliases are deleted.</p> <p>To delete Lambda event source mappings that invoke a function, use <a>DeleteEventSourceMapping</a>. For Amazon Web Services and resources that invoke your function directly, delete the trigger in the service where you originally configured it.</p>
* [DeleteFunctionCodeSigningConfig](#deletefunctioncodesigningconfig) - Removes the code signing configuration from the function.
* [DeleteFunctionConcurrency](#deletefunctionconcurrency) - Removes a concurrent execution limit from a function.
* [DeleteFunctionEventInvokeConfig](#deletefunctioneventinvokeconfig) - <p>Deletes the configuration for asynchronous invocation for a function, version, or alias.</p> <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>
* [DeleteFunctionURLConfig](#deletefunctionurlconfig) - Deletes a Lambda function URL. When you delete a function URL, you can't recover it. Creating a new function URL results in a different URL address.
* [DeleteLayerVersion](#deletelayerversion) - Deletes a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. Deleted versions can no longer be viewed or added to functions. To avoid breaking functions, a copy of the version remains in Lambda until no functions refer to it.
* [DeleteProvisionedConcurrencyConfig](#deleteprovisionedconcurrencyconfig) - Deletes the provisioned concurrency configuration for a function.
* [GetAccountSettings](#getaccountsettings) - Retrieves details about your account's <a href="https://docs.aws.amazon.com/lambda/latest/dg/limits.html">limits</a> and usage in an Amazon Web Services Region.
* [GetAlias](#getalias) - Returns details about a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html">alias</a>.
* [GetCodeSigningConfig](#getcodesigningconfig) - Returns information about the specified code signing configuration.
* [GetEventSourceMapping](#geteventsourcemapping) - Returns details about an event source mapping. You can get the identifier of a mapping from the output of <a>ListEventSourceMappings</a>.
* [GetFunction](#getfunction) - Returns information about the function or function version, with a link to download the deployment package that's valid for 10 minutes. If you specify a function version, only details that are specific to that version are returned.
* [GetFunctionCodeSigningConfig](#getfunctioncodesigningconfig) - Returns the code signing configuration for the specified function.
* [GetFunctionConcurrency](#getfunctionconcurrency) - Returns details about the reserved concurrency configuration for a function. To set a concurrency limit for a function, use <a>PutFunctionConcurrency</a>.
* [GetFunctionConfiguration](#getfunctionconfiguration) - <p>Returns the version-specific settings of a Lambda function or version. The output includes only options that can vary between versions of a function. To modify these settings, use <a>UpdateFunctionConfiguration</a>.</p> <p>To get all of a function's details, including function-level settings, use <a>GetFunction</a>.</p>
* [GetFunctionEventInvokeConfig](#getfunctioneventinvokeconfig) - <p>Retrieves the configuration for asynchronous invocation for a function, version, or alias.</p> <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>
* [GetFunctionURLConfig](#getfunctionurlconfig) - Returns details about a Lambda function URL.
* [GetLayerVersion](#getlayerversion) - Returns information about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>, with a link to download the layer archive that's valid for 10 minutes.
* [GetLayerVersionByArn](#getlayerversionbyarn) - Returns information about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>, with a link to download the layer archive that's valid for 10 minutes.
* [GetLayerVersionPolicy](#getlayerversionpolicy) - Returns the permission policy for a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. For more information, see <a>AddLayerVersionPermission</a>.
* [GetPolicy](#getpolicy) - Returns the <a href="https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html">resource-based IAM policy</a> for a function, version, or alias.
* [GetProvisionedConcurrencyConfig](#getprovisionedconcurrencyconfig) - Retrieves the provisioned concurrency configuration for a function's alias or version.
* [GetRuntimeManagementConfig](#getruntimemanagementconfig) - Retrieves the runtime management configuration for a function's version. If the runtime update mode is <b>Manual</b>, this includes the ARN of the runtime version and the runtime update mode. If the runtime update mode is <b>Auto</b> or <b>Function update</b>, this includes the runtime update mode and <code>null</code> is returned for the ARN. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html">Runtime updates</a>.
* [Invoke](#invoke) - <p>Invokes a Lambda function. You can invoke a function synchronously (and wait for the response), or asynchronously. To invoke a function asynchronously, set <code>InvocationType</code> to <code>Event</code>.</p> <p>For <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-sync.html">synchronous invocation</a>, details about the function response, including errors, are included in the response body and headers. For either invocation type, you can find more information in the <a href="https://docs.aws.amazon.com/lambda/latest/dg/monitoring-functions.html">execution log</a> and <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-x-ray.html">trace</a>.</p> <p>When an error occurs, your function may be invoked multiple times. Retry behavior varies by error type, client, event source, and invocation type. For example, if you invoke a function asynchronously and it returns an error, Lambda executes the function up to two more times. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-retries.html">Error handling and automatic retries in Lambda</a>.</p> <p>For <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html">asynchronous invocation</a>, Lambda adds events to a queue before sending them to your function. If your function does not have enough capacity to keep up with the queue, events may be lost. Occasionally, your function may receive the same event multiple times, even if no error occurs. To retain events that were not processed, configure your function with a <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-dlq">dead-letter queue</a>.</p> <p>The status code in the API response doesn't reflect function errors. Error codes are reserved for errors that prevent your function from executing, such as permissions errors, <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html">quota</a> errors, or issues with your function's code and configuration. For example, Lambda returns <code>TooManyRequestsException</code> if running the function would cause you to exceed a concurrency limit at either the account level (<code>ConcurrentInvocationLimitExceeded</code>) or function level (<code>ReservedFunctionConcurrentInvocationLimitExceeded</code>).</p> <p>For functions with a long timeout, your client might disconnect during synchronous invocation while it waits for a response. Configure your HTTP client, SDK, firewall, proxy, or operating system to allow for long connections with timeout or keep-alive settings.</p> <p>This operation requires permission for the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awslambda.html">lambda:InvokeFunction</a> action. For details on how to set up permissions for cross-account invocations, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html#permissions-resource-xaccountinvoke">Granting function access to other accounts</a>.</p>
* [~~InvokeAsync~~](#invokeasync) - <important> <p>For asynchronous function invocation, use <a>Invoke</a>.</p> </important> <p>Invokes a function asynchronously.</p> :warning: **Deprecated**
* [InvokeWithResponseStream](#invokewithresponsestream) - <p>Configure your Lambda functions to stream response payloads back to clients. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-response-streaming.html">Configuring a Lambda function to stream responses</a>.</p> <p>This operation requires permission for the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awslambda.html">lambda:InvokeFunction</a> action. For details on how to set up permissions for cross-account invocations, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html#permissions-resource-xaccountinvoke">Granting function access to other accounts</a>.</p>
* [ListAliases](#listaliases) - Returns a list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html">aliases</a> for a Lambda function.
* [ListCodeSigningConfigs](#listcodesigningconfigs) - Returns a list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuring-codesigning.html">code signing configurations</a>. A request returns up to 10,000 configurations per call. You can use the <code>MaxItems</code> parameter to return fewer configurations per call. 
* [ListEventSourceMappings](#listeventsourcemappings) - Lists event source mappings. Specify an <code>EventSourceArn</code> to show only event source mappings for a single event source.
* [ListFunctionEventInvokeConfigs](#listfunctioneventinvokeconfigs) - <p>Retrieves a list of configurations for asynchronous invocation for a function.</p> <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>
* [ListFunctionURLConfigs](#listfunctionurlconfigs) - Returns a list of Lambda function URLs for the specified function.
* [ListFunctions](#listfunctions) - <p>Returns a list of Lambda functions, with the version-specific configuration of each. Lambda returns up to 50 functions per call.</p> <p>Set <code>FunctionVersion</code> to <code>ALL</code> to include all published versions of each function in addition to the unpublished version.</p> <note> <p>The <code>ListFunctions</code> operation returns a subset of the <a>FunctionConfiguration</a> fields. To get the additional fields (State, StateReasonCode, StateReason, LastUpdateStatus, LastUpdateStatusReason, LastUpdateStatusReasonCode, RuntimeVersionConfig) for a function or version, use <a>GetFunction</a>.</p> </note>
* [ListFunctionsByCodeSigningConfig](#listfunctionsbycodesigningconfig) - List the functions that use the specified code signing configuration. You can use this method prior to deleting a code signing configuration, to verify that no functions are using it.
* [ListLayerVersions](#listlayerversions) - Lists the versions of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. Versions that have been deleted aren't listed. Specify a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime identifier</a> to list only versions that indicate that they're compatible with that runtime. Specify a compatible architecture to include only layer versions that are compatible with that architecture.
* [ListLayers](#listlayers) - Lists <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-layers.html">Lambda layers</a> and shows information about the latest version of each. Specify a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime identifier</a> to list only layers that indicate that they're compatible with that runtime. Specify a compatible architecture to include only layers that are compatible with that <a href="https://docs.aws.amazon.com/lambda/latest/dg/foundation-arch.html">instruction set architecture</a>.
* [ListProvisionedConcurrencyConfigs](#listprovisionedconcurrencyconfigs) - Retrieves a list of provisioned concurrency configurations for a function.
* [ListTags](#listtags) - Returns a function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a>. You can also view tags with <a>GetFunction</a>.
* [ListVersionsByFunction](#listversionsbyfunction) - Returns a list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">versions</a>, with the version-specific configuration of each. Lambda returns up to 50 versions per call.
* [PublishLayerVersion](#publishlayerversion) - <p>Creates an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a> from a ZIP archive. Each time you call <code>PublishLayerVersion</code> with the same layer name, a new version is created.</p> <p>Add layers to your function with <a>CreateFunction</a> or <a>UpdateFunctionConfiguration</a>.</p>
* [PublishVersion](#publishversion) - <p>Creates a <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">version</a> from the current code and configuration of a function. Use versions to create a snapshot of your function code and configuration that doesn't change.</p> <p>Lambda doesn't publish a version if the function's configuration and code haven't changed since the last version. Use <a>UpdateFunctionCode</a> or <a>UpdateFunctionConfiguration</a> to update the function before publishing a version.</p> <p>Clients can invoke versions directly or with an alias. To create an alias, use <a>CreateAlias</a>.</p>
* [PutFunctionCodeSigningConfig](#putfunctioncodesigningconfig) - Update the code signing configuration for the function. Changes to the code signing configuration take effect the next time a user tries to deploy a code package to the function. 
* [PutFunctionConcurrency](#putfunctionconcurrency) - <p>Sets the maximum number of simultaneous executions for a function, and reserves capacity for that concurrency level.</p> <p>Concurrency settings apply to the function as a whole, including all published versions and the unpublished version. Reserving concurrency both ensures that your function has capacity to process the specified number of events simultaneously, and prevents it from scaling beyond that level. Use <a>GetFunction</a> to see the current setting for a function.</p> <p>Use <a>GetAccountSettings</a> to see your Regional concurrency limit. You can reserve concurrency for as many functions as you like, as long as you leave at least 100 simultaneous executions unreserved for functions that aren't configured with a per-function limit. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-scaling.html">Lambda function scaling</a>.</p>
* [PutFunctionEventInvokeConfig](#putfunctioneventinvokeconfig) - <p>Configures options for <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html">asynchronous invocation</a> on a function, version, or alias. If a configuration already exists for a function, version, or alias, this operation overwrites it. If you exclude any settings, they are removed. To set one option without affecting existing settings for other options, use <a>UpdateFunctionEventInvokeConfig</a>.</p> <p>By default, Lambda retries an asynchronous invocation twice if the function returns an error. It retains events in a queue for up to six hours. When an event fails all processing attempts or stays in the asynchronous invocation queue for too long, Lambda discards it. To retain discarded events, configure a dead-letter queue with <a>UpdateFunctionConfiguration</a>.</p> <p>To send an invocation record to a queue, topic, function, or event bus, specify a <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-async-destinations">destination</a>. You can configure separate destinations for successful invocations (on-success) and events that fail all processing attempts (on-failure). You can configure destinations in addition to or instead of a dead-letter queue.</p>
* [PutProvisionedConcurrencyConfig](#putprovisionedconcurrencyconfig) - Adds a provisioned concurrency configuration to a function's alias or version.
* [PutRuntimeManagementConfig](#putruntimemanagementconfig) - Sets the runtime management configuration for a function's version. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html">Runtime updates</a>.
* [RemoveLayerVersionPermission](#removelayerversionpermission) - Removes a statement from the permissions policy for a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. For more information, see <a>AddLayerVersionPermission</a>.
* [RemovePermission](#removepermission) - Revokes function-use permission from an Amazon Web Service or another Amazon Web Services account. You can get the ID of the statement from the output of <a>GetPolicy</a>.
* [TagResource](#tagresource) - Adds <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a> to a function.
* [UntagResource](#untagresource) - Removes <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a> from a function.
* [UpdateAlias](#updatealias) - Updates the configuration of a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html">alias</a>.
* [UpdateCodeSigningConfig](#updatecodesigningconfig) - Update the code signing configuration. Changes to the code signing configuration take effect the next time a user tries to deploy a code package to the function. 
* [UpdateEventSourceMapping](#updateeventsourcemapping) - <p>Updates an event source mapping. You can change the function that Lambda invokes, or pause invocation and resume later from the same location.</p> <p>For details about how to configure different event sources, see the following topics. </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html#services-dynamodb-eventsourcemapping"> Amazon DynamoDB Streams</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html#services-kinesis-eventsourcemapping"> Amazon Kinesis</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#events-sqs-eventsource"> Amazon SQS</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#services-mq-eventsourcemapping"> Amazon MQ and RabbitMQ</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html"> Amazon MSK</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/kafka-smaa.html"> Apache Kafka</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-documentdb.html"> Amazon DocumentDB</a> </p> </li> </ul> <p>The following error handling options are available only for stream sources (DynamoDB and Kinesis):</p> <ul> <li> <p> <code>BisectBatchOnFunctionError</code> – If the function returns an error, split the batch in two and retry.</p> </li> <li> <p> <code>DestinationConfig</code> – Send discarded records to an Amazon SQS queue or Amazon SNS topic.</p> </li> <li> <p> <code>MaximumRecordAgeInSeconds</code> – Discard records older than the specified age. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires</p> </li> <li> <p> <code>MaximumRetryAttempts</code> – Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires.</p> </li> <li> <p> <code>ParallelizationFactor</code> – Process multiple batches from each shard concurrently.</p> </li> </ul> <p>For information about which configuration parameters apply to each event source, see the following topics.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html#services-ddb-params"> Amazon DynamoDB Streams</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html#services-kinesis-params"> Amazon Kinesis</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#services-sqs-params"> Amazon SQS</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#services-mq-params"> Amazon MQ and RabbitMQ</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-parms"> Amazon MSK</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kafka.html#services-kafka-parms"> Apache Kafka</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-documentdb.html#docdb-configuration"> Amazon DocumentDB</a> </p> </li> </ul>
* [UpdateFunctionCode](#updatefunctioncode) - <p>Updates a Lambda function's code. If code signing is enabled for the function, the code package must be signed by a trusted publisher. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html">Configuring code signing for Lambda</a>.</p> <p>If the function's package type is <code>Image</code>, then you must specify the code package in <code>ImageUri</code> as the URI of a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-images.html">container image</a> in the Amazon ECR registry.</p> <p>If the function's package type is <code>Zip</code>, then you must specify the deployment package as a <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html#gettingstarted-package-zip">.zip file archive</a>. Enter the Amazon S3 bucket and key of the code .zip file location. You can also provide the function code inline using the <code>ZipFile</code> field.</p> <p>The code in the deployment package must be compatible with the target instruction set architecture of the function (<code>x86-64</code> or <code>arm64</code>).</p> <p>The function's code is locked when you publish a version. You can't modify the code of a published version, only the unpublished version.</p> <note> <p>For a function defined as a container image, Lambda resolves the image tag to an image digest. In Amazon ECR, if you update the image tag to a new image, Lambda does not automatically update the function.</p> </note>
* [UpdateFunctionConfiguration](#updatefunctionconfiguration) - <p>Modify the version-specific settings of a Lambda function.</p> <p>When you update a function, Lambda provisions an instance of the function and its supporting resources. If your function connects to a VPC, this process can take a minute. During this time, you can't modify the function, but you can still invoke it. The <code>LastUpdateStatus</code>, <code>LastUpdateStatusReason</code>, and <code>LastUpdateStatusReasonCode</code> fields in the response from <a>GetFunctionConfiguration</a> indicate when the update is complete and the function is processing events with the new configuration. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/functions-states.html">Lambda function states</a>.</p> <p>These settings can vary between versions of a function and are locked when you publish a version. You can't modify the configuration of a published version, only the unpublished version.</p> <p>To configure function concurrency, use <a>PutFunctionConcurrency</a>. To grant invoke permissions to an Amazon Web Services account or Amazon Web Service, use <a>AddPermission</a>.</p>
* [UpdateFunctionEventInvokeConfig](#updatefunctioneventinvokeconfig) - <p>Updates the configuration for asynchronous invocation for a function, version, or alias.</p> <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>
* [UpdateFunctionURLConfig](#updatefunctionurlconfig) - Updates the configuration for a Lambda function URL.

## AddLayerVersionPermission

<p>Adds permissions to the resource-based policy of a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. Use this action to grant layer usage permission to other accounts. You can grant permission to a single account, all accounts in an organization, or all Amazon Web Services accounts. </p> <p>To revoke permission, call <a>RemoveLayerVersionPermission</a> with the statement ID that you specified when you added it.</p>

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
    res, err := s.SDK.AddLayerVersionPermission(ctx, operations.AddLayerVersionPermissionRequest{
        LayerName: "debitis",
        RequestBody: operations.AddLayerVersionPermissionRequestBody{
            Action: "ipsa",
            OrganizationID: sdk.String("delectus"),
            Principal: "tempora",
            StatementID: "suscipit",
        },
        RevisionID: sdk.String("molestiae"),
        VersionNumber: 791725,
        XAmzAlgorithm: sdk.String("placeat"),
        XAmzContentSha256: sdk.String("voluptatum"),
        XAmzCredential: sdk.String("iusto"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("nisi"),
        XAmzSignature: sdk.String("recusandae"),
        XAmzSignedHeaders: sdk.String("temporibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddLayerVersionPermissionResponse != nil {
        // handle response
    }
}
```

## AddPermission

<p>Grants an Amazon Web Service, Amazon Web Services account, or Amazon Web Services organization permission to use a function. You can apply the policy at the function level, or specify a qualifier to restrict access to a single version or alias. If you use a qualifier, the invoker must use the full Amazon Resource Name (ARN) of that version or alias to invoke the function. Note: Lambda does not support adding policies to version $LATEST.</p> <p>To grant permission to another account, specify the account ID as the <code>Principal</code>. To grant permission to an organization defined in Organizations, specify the organization ID as the <code>PrincipalOrgID</code>. For Amazon Web Services, the principal is a domain-style identifier that the service defines, such as <code>s3.amazonaws.com</code> or <code>sns.amazonaws.com</code>. For Amazon Web Services, you can also specify the ARN of the associated resource as the <code>SourceArn</code>. If you grant permission to a service principal without specifying the source, other accounts could potentially configure resources in their account to invoke your Lambda function.</p> <p>This operation adds a statement to a resource-based permissions policy for the function. For more information about function policies, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html">Using resource-based policies for Lambda</a>.</p>

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
    res, err := s.SDK.AddPermission(ctx, operations.AddPermissionRequest{
        FunctionName: "ab",
        Qualifier: sdk.String("quis"),
        RequestBody: operations.AddPermissionRequestBody{
            Action: "veritatis",
            EventSourceToken: sdk.String("deserunt"),
            FunctionURLAuthType: operations.AddPermissionRequestBodyFunctionURLAuthTypeEnumNone.ToPointer(),
            Principal: "ipsam",
            PrincipalOrgID: sdk.String("repellendus"),
            RevisionID: sdk.String("sapiente"),
            SourceAccount: sdk.String("quo"),
            SourceArn: sdk.String("odit"),
            StatementID: "at",
        },
        XAmzAlgorithm: sdk.String("at"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("quod"),
        XAmzSecurityToken: sdk.String("quod"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("totam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddPermissionResponse != nil {
        // handle response
    }
}
```

## CreateAlias

<p>Creates an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html">alias</a> for a Lambda function version. Use aliases to provide clients with a function identifier that you can update to invoke a different version.</p> <p>You can also map an alias to split invocation requests between two versions. Use the <code>RoutingConfig</code> parameter to specify a second version and the percentage of invocation requests that it receives.</p>

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
    res, err := s.SDK.CreateAlias(ctx, operations.CreateAliasRequest{
        FunctionName: "porro",
        RequestBody: operations.CreateAliasRequestBody{
            Description: sdk.String("dolorum"),
            FunctionVersion: "dicta",
            Name: "Luke McCullough",
            RoutingConfig: &operations.CreateAliasRequestBodyRoutingConfig{
                AdditionalVersionWeights: map[string]float64{
                    "optio": 5218.48,
                    "beatae": 4146.62,
                    "molestiae": 2645.55,
                    "qui": 7742.34,
                },
            },
        },
        XAmzAlgorithm: sdk.String("cum"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("ad"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AliasConfiguration != nil {
        // handle response
    }
}
```

## CreateCodeSigningConfig

Creates a code signing configuration. A <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html">code signing configuration</a> defines a list of allowed signing profiles and defines the code-signing validation policy (action to be taken if deployment validation checks fail). 

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
    res, err := s.SDK.CreateCodeSigningConfig(ctx, operations.CreateCodeSigningConfigRequest{
        RequestBody: operations.CreateCodeSigningConfigRequestBody{
            AllowedPublishers: operations.CreateCodeSigningConfigRequestBodyAllowedPublishers{
                SigningProfileVersionArns: []string{
                    "sed",
                    "iste",
                    "dolor",
                },
            },
            CodeSigningPolicies: &operations.CreateCodeSigningConfigRequestBodyCodeSigningPolicies{
                UntrustedArtifactOnDeployment: shared.CodeSigningPolicyEnumEnforce.ToPointer(),
            },
            Description: sdk.String("laboriosam"),
        },
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("fuga"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("iste"),
        XAmzSignedHeaders: sdk.String("iure"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCodeSigningConfigResponse != nil {
        // handle response
    }
}
```

## CreateEventSourceMapping

<p>Creates a mapping between an event source and an Lambda function. Lambda reads items from the event source and invokes the function.</p> <p>For details about how to configure different event sources, see the following topics. </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html#services-dynamodb-eventsourcemapping"> Amazon DynamoDB Streams</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html#services-kinesis-eventsourcemapping"> Amazon Kinesis</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#events-sqs-eventsource"> Amazon SQS</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#services-mq-eventsourcemapping"> Amazon MQ and RabbitMQ</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html"> Amazon MSK</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/kafka-smaa.html"> Apache Kafka</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-documentdb.html"> Amazon DocumentDB</a> </p> </li> </ul> <p>The following error handling options are available only for stream sources (DynamoDB and Kinesis):</p> <ul> <li> <p> <code>BisectBatchOnFunctionError</code> – If the function returns an error, split the batch in two and retry.</p> </li> <li> <p> <code>DestinationConfig</code> – Send discarded records to an Amazon SQS queue or Amazon SNS topic.</p> </li> <li> <p> <code>MaximumRecordAgeInSeconds</code> – Discard records older than the specified age. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires</p> </li> <li> <p> <code>MaximumRetryAttempts</code> – Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires.</p> </li> <li> <p> <code>ParallelizationFactor</code> – Process multiple batches from each shard concurrently.</p> </li> </ul> <p>For information about which configuration parameters apply to each event source, see the following topics.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html#services-ddb-params"> Amazon DynamoDB Streams</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html#services-kinesis-params"> Amazon Kinesis</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#services-sqs-params"> Amazon SQS</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#services-mq-params"> Amazon MQ and RabbitMQ</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-parms"> Amazon MSK</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kafka.html#services-kafka-parms"> Apache Kafka</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-documentdb.html#docdb-configuration"> Amazon DocumentDB</a> </p> </li> </ul>

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
    res, err := s.SDK.CreateEventSourceMapping(ctx, operations.CreateEventSourceMappingRequest{
        RequestBody: operations.CreateEventSourceMappingRequestBody{
            AmazonManagedKafkaEventSourceConfig: &operations.CreateEventSourceMappingRequestBodyAmazonManagedKafkaEventSourceConfig{
                ConsumerGroupID: sdk.String("saepe"),
            },
            BatchSize: sdk.Int64(697631),
            BisectBatchOnFunctionError: sdk.Bool(false),
            DestinationConfig: &operations.CreateEventSourceMappingRequestBodyDestinationConfig{
                OnFailure: &shared.OnFailure{
                    Destination: sdk.String("architecto"),
                },
                OnSuccess: &shared.OnSuccess{
                    Destination: sdk.String("ipsa"),
                },
            },
            DocumentDBEventSourceConfig: &operations.CreateEventSourceMappingRequestBodyDocumentDBEventSourceConfig{
                CollectionName: sdk.String("reiciendis"),
                DatabaseName: sdk.String("est"),
                FullDocument: shared.FullDocumentEnumDefault.ToPointer(),
            },
            Enabled: sdk.Bool(false),
            EventSourceArn: sdk.String("laborum"),
            FilterCriteria: &operations.CreateEventSourceMappingRequestBodyFilterCriteria{
                Filters: []shared.Filter{
                    shared.Filter{
                        Pattern: sdk.String("dolorem"),
                    },
                },
            },
            FunctionName: "corporis",
            FunctionResponseTypes: []shared.FunctionResponseTypeEnum{
                shared.FunctionResponseTypeEnumReportBatchItemFailures,
            },
            MaximumBatchingWindowInSeconds: sdk.Int64(750686),
            MaximumRecordAgeInSeconds: sdk.Int64(315428),
            MaximumRetryAttempts: sdk.Int64(607831),
            ParallelizationFactor: sdk.Int64(363711),
            Queues: []string{
                "excepturi",
                "accusantium",
            },
            ScalingConfig: &operations.CreateEventSourceMappingRequestBodyScalingConfig{
                MaximumConcurrency: sdk.Int64(438601),
            },
            SelfManagedEventSource: &operations.CreateEventSourceMappingRequestBodySelfManagedEventSource{
                Endpoints: map[string][]string{
                    "doloribus": []string{
                        "architecto",
                        "mollitia",
                        "dolorem",
                        "culpa",
                    },
                    "consequuntur": []string{
                        "mollitia",
                        "occaecati",
                        "numquam",
                        "commodi",
                    },
                    "quam": []string{
                        "velit",
                        "error",
                    },
                },
            },
            SelfManagedKafkaEventSourceConfig: &operations.CreateEventSourceMappingRequestBodySelfManagedKafkaEventSourceConfig{
                ConsumerGroupID: sdk.String("quia"),
            },
            SourceAccessConfigurations: []shared.SourceAccessConfiguration{
                shared.SourceAccessConfiguration{
                    Type: shared.SourceAccessTypeEnumBasicAuth.ToPointer(),
                    URI: sdk.String("https://profuse-ethernet.com"),
                },
                shared.SourceAccessConfiguration{
                    Type: shared.SourceAccessTypeEnumClientCertificateTLSAuth.ToPointer(),
                    URI: sdk.String("http://weary-fright.name"),
                },
            },
            StartingPosition: operations.CreateEventSourceMappingRequestBodyStartingPositionEnumAtTimestamp.ToPointer(),
            StartingPositionTimestamp: types.MustTimeFromString("2022-11-26T13:23:33.410Z"),
            Topics: []string{
                "temporibus",
                "laborum",
                "quasi",
            },
            TumblingWindowInSeconds: sdk.Int64(971945),
        },
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("vero"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("praesentium"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("omnis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EventSourceMappingConfiguration != nil {
        // handle response
    }
}
```

## CreateFunction

<p>Creates a Lambda function. To create a function, you need a <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html">deployment package</a> and an <a href="https://docs.aws.amazon.com/lambda/latest/dg/intro-permission-model.html#lambda-intro-execution-role">execution role</a>. The deployment package is a .zip file archive or container image that contains your function code. The execution role grants the function permission to use Amazon Web Services, such as Amazon CloudWatch Logs for log streaming and X-Ray for request tracing.</p> <p>If the deployment package is a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-images.html">container image</a>, then you set the package type to <code>Image</code>. For a container image, the code property must include the URI of a container image in the Amazon ECR registry. You do not need to specify the handler and runtime properties.</p> <p>If the deployment package is a <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html#gettingstarted-package-zip">.zip file archive</a>, then you set the package type to <code>Zip</code>. For a .zip file archive, the code property specifies the location of the .zip file. You must also specify the handler and runtime properties. The code in the deployment package must be compatible with the target instruction set architecture of the function (<code>x86-64</code> or <code>arm64</code>). If you do not specify the architecture, then the default value is <code>x86-64</code>.</p> <p>When you create a function, Lambda provisions an instance of the function and its supporting resources. If your function connects to a VPC, this process can take a minute or so. During this time, you can't invoke or modify the function. The <code>State</code>, <code>StateReason</code>, and <code>StateReasonCode</code> fields in the response from <a>GetFunctionConfiguration</a> indicate when the function is ready to invoke. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/functions-states.html">Lambda function states</a>.</p> <p>A function has an unpublished version, and can have published versions and aliases. The unpublished version changes when you update your function's code and configuration. A published version is a snapshot of your function code and configuration that can't be changed. An alias is a named resource that maps to a version, and can be changed to map to a different version. Use the <code>Publish</code> parameter to create version <code>1</code> of your function from its initial configuration.</p> <p>The other parameters let you configure version-specific and function-level settings. You can modify version-specific settings later with <a>UpdateFunctionConfiguration</a>. Function-level settings apply to both the unpublished and published versions of the function, and include tags (<a>TagResource</a>) and per-function concurrency limits (<a>PutFunctionConcurrency</a>).</p> <p>You can use code signing if your deployment package is a .zip file archive. To enable code signing for this function, specify the ARN of a code-signing configuration. When a user attempts to deploy a code package with <a>UpdateFunctionCode</a>, Lambda checks that the code package has a valid signature from a trusted publisher. The code-signing configuration includes set of signing profiles, which define the trusted publishers for this function.</p> <p>If another Amazon Web Services account or an Amazon Web Service invokes your function, use <a>AddPermission</a> to grant permission by creating a resource-based Identity and Access Management (IAM) policy. You can grant permissions at the function level, on a version, or on an alias.</p> <p>To invoke your function directly, use <a>Invoke</a>. To invoke your function in response to events in other Amazon Web Services, create an event source mapping (<a>CreateEventSourceMapping</a>), or configure a function trigger in the other service. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-invocation.html">Invoking Lambda functions</a>.</p>

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
    res, err := s.SDK.CreateFunction(ctx, operations.CreateFunctionRequest{
        RequestBody: operations.CreateFunctionRequestBody{
            Architectures: []shared.ArchitectureEnum{
                shared.ArchitectureEnumArm64,
                shared.ArchitectureEnumX8664,
            },
            Code: operations.CreateFunctionRequestBodyCode{
                ImageURI: sdk.String("doloremque"),
                S3Bucket: sdk.String("reprehenderit"),
                S3Key: sdk.String("ut"),
                S3ObjectVersion: sdk.String("maiores"),
                ZipFile: sdk.String("dicta"),
            },
            CodeSigningConfigArn: sdk.String("corporis"),
            DeadLetterConfig: &operations.CreateFunctionRequestBodyDeadLetterConfig{
                TargetArn: sdk.String("dolore"),
            },
            Description: sdk.String("iusto"),
            Environment: &operations.CreateFunctionRequestBodyEnvironment{
                Variables: map[string]string{
                    "harum": "enim",
                },
            },
            EphemeralStorage: &operations.CreateFunctionRequestBodyEphemeralStorage{
                Size: sdk.Int64(880476),
            },
            FileSystemConfigs: []shared.FileSystemConfig{
                shared.FileSystemConfig{
                    Arn: "repudiandae",
                    LocalMountPath: "quae",
                },
                shared.FileSystemConfig{
                    Arn: "ipsum",
                    LocalMountPath: "quidem",
                },
            },
            FunctionName: "molestias",
            Handler: sdk.String("excepturi"),
            ImageConfig: &operations.CreateFunctionRequestBodyImageConfig{
                Command: []string{
                    "modi",
                    "praesentium",
                    "rem",
                    "voluptates",
                },
                EntryPoint: []string{
                    "repudiandae",
                },
                WorkingDirectory: sdk.String("sint"),
            },
            KMSKeyArn: sdk.String("veritatis"),
            Layers: []string{
                "incidunt",
                "enim",
                "consequatur",
                "est",
            },
            MemorySize: sdk.Int64(842342),
            PackageType: operations.CreateFunctionRequestBodyPackageTypeEnumZip.ToPointer(),
            Publish: sdk.Bool(false),
            Role: "deserunt",
            Runtime: operations.CreateFunctionRequestBodyRuntimeEnumDotnet6.ToPointer(),
            SnapStart: &operations.CreateFunctionRequestBodySnapStart{
                ApplyOn: shared.SnapStartApplyOnEnumNone.ToPointer(),
            },
            Tags: map[string]string{
                "modi": "qui",
                "aliquid": "cupiditate",
            },
            Timeout: sdk.Int64(552822),
            TracingConfig: &operations.CreateFunctionRequestBodyTracingConfig{
                Mode: shared.TracingModeEnumActive.ToPointer(),
            },
            VpcConfig: &operations.CreateFunctionRequestBodyVpcConfig{
                SecurityGroupIds: []string{
                    "assumenda",
                },
                SubnetIds: []string{
                    "alias",
                    "fugit",
                },
            },
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("tempore"),
        XAmzSignature: sdk.String("labore"),
        XAmzSignedHeaders: sdk.String("delectus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FunctionConfiguration != nil {
        // handle response
    }
}
```

## CreateFunctionURLConfig

Creates a Lambda function URL with the specified configuration parameters. A function URL is a dedicated HTTP(S) endpoint that you can use to invoke your function.

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
    res, err := s.SDK.CreateFunctionURLConfig(ctx, operations.CreateFunctionURLConfigRequest{
        FunctionName: "eum",
        Qualifier: sdk.String("non"),
        RequestBody: operations.CreateFunctionURLConfigRequestBody{
            AuthType: operations.CreateFunctionURLConfigRequestBodyAuthTypeEnumAwsIam,
            Cors: &operations.CreateFunctionURLConfigRequestBodyCors{
                AllowCredentials: sdk.Bool(false),
                AllowHeaders: []string{
                    "aliquid",
                    "provident",
                    "necessitatibus",
                },
                AllowMethods: []string{
                    "officia",
                    "dolor",
                    "debitis",
                },
                AllowOrigins: []string{
                    "dolorum",
                    "in",
                    "in",
                    "illum",
                },
                ExposeHeaders: []string{
                    "rerum",
                    "dicta",
                    "magnam",
                    "cumque",
                },
                MaxAge: sdk.Int64(813798),
            },
            InvokeMode: operations.CreateFunctionURLConfigRequestBodyInvokeModeEnumBuffered.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("non"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("accusamus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateFunctionURLConfigResponse != nil {
        // handle response
    }
}
```

## DeleteAlias

Deletes a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html">alias</a>.

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
    res, err := s.SDK.DeleteAlias(ctx, operations.DeleteAliasRequest{
        FunctionName: "delectus",
        Name: "Rene Reinger",
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("amet"),
        XAmzDate: sdk.String("deserunt"),
        XAmzSecurityToken: sdk.String("nisi"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("natus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteCodeSigningConfig

Deletes the code signing configuration. You can delete the code signing configuration only if no function is using it. 

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
    res, err := s.SDK.DeleteCodeSigningConfig(ctx, operations.DeleteCodeSigningConfigRequest{
        CodeSigningConfigArn: "omnis",
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("distinctio"),
        XAmzSignature: sdk.String("id"),
        XAmzSignedHeaders: sdk.String("labore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteCodeSigningConfigResponse != nil {
        // handle response
    }
}
```

## DeleteEventSourceMapping

<p>Deletes an <a href="https://docs.aws.amazon.com/lambda/latest/dg/intro-invocation-modes.html">event source mapping</a>. You can get the identifier of a mapping from the output of <a>ListEventSourceMappings</a>.</p> <p>When you delete an event source mapping, it enters a <code>Deleting</code> state and might not be completely deleted for several seconds.</p>

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
    res, err := s.SDK.DeleteEventSourceMapping(ctx, operations.DeleteEventSourceMappingRequest{
        UUID: "469b6e21-4195-4989-8afa-563e2516fe4c",
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("repudiandae"),
        XAmzSignedHeaders: sdk.String("ullam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EventSourceMappingConfiguration != nil {
        // handle response
    }
}
```

## DeleteFunction

<p>Deletes a Lambda function. To delete a specific function version, use the <code>Qualifier</code> parameter. Otherwise, all versions and aliases are deleted.</p> <p>To delete Lambda event source mappings that invoke a function, use <a>DeleteEventSourceMapping</a>. For Amazon Web Services and resources that invoke your function directly, delete the trigger in the service where you originally configured it.</p>

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
    res, err := s.SDK.DeleteFunction(ctx, operations.DeleteFunctionRequest{
        FunctionName: "expedita",
        Qualifier: sdk.String("nihil"),
        XAmzAlgorithm: sdk.String("repellat"),
        XAmzContentSha256: sdk.String("quibusdam"),
        XAmzCredential: sdk.String("sed"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("pariatur"),
        XAmzSignature: sdk.String("accusantium"),
        XAmzSignedHeaders: sdk.String("consequuntur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteFunctionCodeSigningConfig

Removes the code signing configuration from the function.

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
    res, err := s.SDK.DeleteFunctionCodeSigningConfig(ctx, operations.DeleteFunctionCodeSigningConfigRequest{
        FunctionName: "praesentium",
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("magni"),
        XAmzCredential: sdk.String("sunt"),
        XAmzDate: sdk.String("quo"),
        XAmzSecurityToken: sdk.String("illum"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("maxime"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteFunctionConcurrency

Removes a concurrent execution limit from a function.

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
    res, err := s.SDK.DeleteFunctionConcurrency(ctx, operations.DeleteFunctionConcurrencyRequest{
        FunctionName: "ea",
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("odit"),
        XAmzCredential: sdk.String("ea"),
        XAmzDate: sdk.String("accusantium"),
        XAmzSecurityToken: sdk.String("ab"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("quidem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteFunctionEventInvokeConfig

<p>Deletes the configuration for asynchronous invocation for a function, version, or alias.</p> <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>

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
    res, err := s.SDK.DeleteFunctionEventInvokeConfig(ctx, operations.DeleteFunctionEventInvokeConfigRequest{
        FunctionName: "ipsam",
        Qualifier: sdk.String("voluptate"),
        XAmzAlgorithm: sdk.String("autem"),
        XAmzContentSha256: sdk.String("nam"),
        XAmzCredential: sdk.String("eaque"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("perferendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteFunctionURLConfig

Deletes a Lambda function URL. When you delete a function URL, you can't recover it. Creating a new function URL results in a different URL address.

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
    res, err := s.SDK.DeleteFunctionURLConfig(ctx, operations.DeleteFunctionURLConfigRequest{
        FunctionName: "fugiat",
        Qualifier: sdk.String("amet"),
        XAmzAlgorithm: sdk.String("aut"),
        XAmzContentSha256: sdk.String("cumque"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("dolores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteLayerVersion

Deletes a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. Deleted versions can no longer be viewed or added to functions. To avoid breaking functions, a copy of the version remains in Lambda until no functions refer to it.

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
    res, err := s.SDK.DeleteLayerVersion(ctx, operations.DeleteLayerVersionRequest{
        LayerName: "quis",
        VersionNumber: 521037,
        XAmzAlgorithm: sdk.String("dignissimos"),
        XAmzContentSha256: sdk.String("eaque"),
        XAmzCredential: sdk.String("quis"),
        XAmzDate: sdk.String("nesciunt"),
        XAmzSecurityToken: sdk.String("eos"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("dolores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteProvisionedConcurrencyConfig

Deletes the provisioned concurrency configuration for a function.

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
    res, err := s.SDK.DeleteProvisionedConcurrencyConfig(ctx, operations.DeleteProvisionedConcurrencyConfigRequest{
        FunctionName: "minus",
        Qualifier: "quam",
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("vero"),
        XAmzCredential: sdk.String("nostrum"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("recusandae"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("facilis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAccountSettings

Retrieves details about your account's <a href="https://docs.aws.amazon.com/lambda/latest/dg/limits.html">limits</a> and usage in an Amazon Web Services Region.

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
    res, err := s.SDK.GetAccountSettings(ctx, operations.GetAccountSettingsRequest{
        XAmzAlgorithm: sdk.String("perspiciatis"),
        XAmzContentSha256: sdk.String("voluptatem"),
        XAmzCredential: sdk.String("porro"),
        XAmzDate: sdk.String("consequuntur"),
        XAmzSecurityToken: sdk.String("blanditiis"),
        XAmzSignature: sdk.String("error"),
        XAmzSignedHeaders: sdk.String("eaque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAccountSettingsResponse != nil {
        // handle response
    }
}
```

## GetAlias

Returns details about a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html">alias</a>.

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
    res, err := s.SDK.GetAlias(ctx, operations.GetAliasRequest{
        FunctionName: "occaecati",
        Name: "Travis Zemlak",
        XAmzAlgorithm: sdk.String("iste"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("libero"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AliasConfiguration != nil {
        // handle response
    }
}
```

## GetCodeSigningConfig

Returns information about the specified code signing configuration.

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
    res, err := s.SDK.GetCodeSigningConfig(ctx, operations.GetCodeSigningConfigRequest{
        CodeSigningConfigArn: "delectus",
        XAmzAlgorithm: sdk.String("quaerat"),
        XAmzContentSha256: sdk.String("quos"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("dolorem"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("dolor"),
        XAmzSignedHeaders: sdk.String("qui"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCodeSigningConfigResponse != nil {
        // handle response
    }
}
```

## GetEventSourceMapping

Returns details about an event source mapping. You can get the identifier of a mapping from the output of <a>ListEventSourceMappings</a>.

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
    res, err := s.SDK.GetEventSourceMapping(ctx, operations.GetEventSourceMappingRequest{
        UUID: "3f9b77f3-a410-4067-8ebf-69280d1ba77a",
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("omnis"),
        XAmzCredential: sdk.String("necessitatibus"),
        XAmzDate: sdk.String("distinctio"),
        XAmzSecurityToken: sdk.String("asperiores"),
        XAmzSignature: sdk.String("nihil"),
        XAmzSignedHeaders: sdk.String("ipsum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EventSourceMappingConfiguration != nil {
        // handle response
    }
}
```

## GetFunction

Returns information about the function or function version, with a link to download the deployment package that's valid for 10 minutes. If you specify a function version, only details that are specific to that version are returned.

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
    res, err := s.SDK.GetFunction(ctx, operations.GetFunctionRequest{
        FunctionName: "voluptate",
        Qualifier: sdk.String("id"),
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("eius"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("amet"),
        XAmzSignature: sdk.String("optio"),
        XAmzSignedHeaders: sdk.String("accusamus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetFunctionResponse != nil {
        // handle response
    }
}
```

## GetFunctionCodeSigningConfig

Returns the code signing configuration for the specified function.

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
    res, err := s.SDK.GetFunctionCodeSigningConfig(ctx, operations.GetFunctionCodeSigningConfigRequest{
        FunctionName: "ad",
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("minima"),
        XAmzSignature: sdk.String("repellendus"),
        XAmzSignedHeaders: sdk.String("totam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetFunctionCodeSigningConfigResponse != nil {
        // handle response
    }
}
```

## GetFunctionConcurrency

Returns details about the reserved concurrency configuration for a function. To set a concurrency limit for a function, use <a>PutFunctionConcurrency</a>.

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
    res, err := s.SDK.GetFunctionConcurrency(ctx, operations.GetFunctionConcurrencyRequest{
        FunctionName: "similique",
        XAmzAlgorithm: sdk.String("alias"),
        XAmzContentSha256: sdk.String("at"),
        XAmzCredential: sdk.String("quaerat"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("vel"),
        XAmzSignature: sdk.String("quod"),
        XAmzSignedHeaders: sdk.String("officiis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetFunctionConcurrencyResponse != nil {
        // handle response
    }
}
```

## GetFunctionConfiguration

<p>Returns the version-specific settings of a Lambda function or version. The output includes only options that can vary between versions of a function. To modify these settings, use <a>UpdateFunctionConfiguration</a>.</p> <p>To get all of a function's details, including function-level settings, use <a>GetFunction</a>.</p>

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
    res, err := s.SDK.GetFunctionConfiguration(ctx, operations.GetFunctionConfigurationRequest{
        FunctionName: "qui",
        Qualifier: sdk.String("dolorum"),
        XAmzAlgorithm: sdk.String("a"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("harum"),
        XAmzDate: sdk.String("iusto"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("quisquam"),
        XAmzSignedHeaders: sdk.String("tenetur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FunctionConfiguration != nil {
        // handle response
    }
}
```

## GetFunctionEventInvokeConfig

<p>Retrieves the configuration for asynchronous invocation for a function, version, or alias.</p> <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>

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
    res, err := s.SDK.GetFunctionEventInvokeConfig(ctx, operations.GetFunctionEventInvokeConfigRequest{
        FunctionName: "amet",
        Qualifier: sdk.String("tempore"),
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("numquam"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("dolorem"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("nihil"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FunctionEventInvokeConfig != nil {
        // handle response
    }
}
```

## GetFunctionURLConfig

Returns details about a Lambda function URL.

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
    res, err := s.SDK.GetFunctionURLConfig(ctx, operations.GetFunctionURLConfigRequest{
        FunctionName: "sit",
        Qualifier: sdk.String("expedita"),
        XAmzAlgorithm: sdk.String("neque"),
        XAmzContentSha256: sdk.String("sed"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("libero"),
        XAmzSecurityToken: sdk.String("voluptas"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("quam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetFunctionURLConfigResponse != nil {
        // handle response
    }
}
```

## GetLayerVersion

Returns information about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>, with a link to download the layer archive that's valid for 10 minutes.

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
    res, err := s.SDK.GetLayerVersion(ctx, operations.GetLayerVersionRequest{
        LayerName: "ipsum",
        VersionNumber: 277628,
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("cupiditate"),
        XAmzCredential: sdk.String("maxime"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("soluta"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("laborum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLayerVersionResponse != nil {
        // handle response
    }
}
```

## GetLayerVersionByArn

Returns information about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>, with a link to download the layer archive that's valid for 10 minutes.

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
    res, err := s.SDK.GetLayerVersionByArn(ctx, operations.GetLayerVersionByArnRequest{
        Arn: "totam",
        XAmzAlgorithm: sdk.String("incidunt"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("dolores"),
        XAmzDate: sdk.String("distinctio"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("quam"),
        Find: operations.GetLayerVersionByArnFindEnumLayerVersion,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLayerVersionResponse != nil {
        // handle response
    }
}
```

## GetLayerVersionPolicy

Returns the permission policy for a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. For more information, see <a>AddLayerVersionPermission</a>.

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
    res, err := s.SDK.GetLayerVersionPolicy(ctx, operations.GetLayerVersionPolicyRequest{
        LayerName: "molestias",
        VersionNumber: 840429,
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("neque"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("magni"),
        XAmzSecurityToken: sdk.String("odio"),
        XAmzSignature: sdk.String("sunt"),
        XAmzSignedHeaders: sdk.String("ullam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLayerVersionPolicyResponse != nil {
        // handle response
    }
}
```

## GetPolicy

Returns the <a href="https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html">resource-based IAM policy</a> for a function, version, or alias.

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
    res, err := s.SDK.GetPolicy(ctx, operations.GetPolicyRequest{
        FunctionName: "nam",
        Qualifier: sdk.String("hic"),
        XAmzAlgorithm: sdk.String("voluptatem"),
        XAmzContentSha256: sdk.String("cumque"),
        XAmzCredential: sdk.String("soluta"),
        XAmzDate: sdk.String("nobis"),
        XAmzSecurityToken: sdk.String("et"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("ipsum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPolicyResponse != nil {
        // handle response
    }
}
```

## GetProvisionedConcurrencyConfig

Retrieves the provisioned concurrency configuration for a function's alias or version.

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
    res, err := s.SDK.GetProvisionedConcurrencyConfig(ctx, operations.GetProvisionedConcurrencyConfigRequest{
        FunctionName: "veritatis",
        Qualifier: "nobis",
        XAmzAlgorithm: sdk.String("quos"),
        XAmzContentSha256: sdk.String("tempore"),
        XAmzCredential: sdk.String("cupiditate"),
        XAmzDate: sdk.String("aperiam"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("dolorem"),
        XAmzSignedHeaders: sdk.String("dolore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetProvisionedConcurrencyConfigResponse != nil {
        // handle response
    }
}
```

## GetRuntimeManagementConfig

Retrieves the runtime management configuration for a function's version. If the runtime update mode is <b>Manual</b>, this includes the ARN of the runtime version and the runtime update mode. If the runtime update mode is <b>Auto</b> or <b>Function update</b>, this includes the runtime update mode and <code>null</code> is returned for the ARN. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html">Runtime updates</a>.

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
    res, err := s.SDK.GetRuntimeManagementConfig(ctx, operations.GetRuntimeManagementConfigRequest{
        FunctionName: "labore",
        Qualifier: sdk.String("adipisci"),
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("quae"),
        XAmzDate: sdk.String("aut"),
        XAmzSecurityToken: sdk.String("quas"),
        XAmzSignature: sdk.String("itaque"),
        XAmzSignedHeaders: sdk.String("consequatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRuntimeManagementConfigResponse != nil {
        // handle response
    }
}
```

## Invoke

<p>Invokes a Lambda function. You can invoke a function synchronously (and wait for the response), or asynchronously. To invoke a function asynchronously, set <code>InvocationType</code> to <code>Event</code>.</p> <p>For <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-sync.html">synchronous invocation</a>, details about the function response, including errors, are included in the response body and headers. For either invocation type, you can find more information in the <a href="https://docs.aws.amazon.com/lambda/latest/dg/monitoring-functions.html">execution log</a> and <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-x-ray.html">trace</a>.</p> <p>When an error occurs, your function may be invoked multiple times. Retry behavior varies by error type, client, event source, and invocation type. For example, if you invoke a function asynchronously and it returns an error, Lambda executes the function up to two more times. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-retries.html">Error handling and automatic retries in Lambda</a>.</p> <p>For <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html">asynchronous invocation</a>, Lambda adds events to a queue before sending them to your function. If your function does not have enough capacity to keep up with the queue, events may be lost. Occasionally, your function may receive the same event multiple times, even if no error occurs. To retain events that were not processed, configure your function with a <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-dlq">dead-letter queue</a>.</p> <p>The status code in the API response doesn't reflect function errors. Error codes are reserved for errors that prevent your function from executing, such as permissions errors, <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html">quota</a> errors, or issues with your function's code and configuration. For example, Lambda returns <code>TooManyRequestsException</code> if running the function would cause you to exceed a concurrency limit at either the account level (<code>ConcurrentInvocationLimitExceeded</code>) or function level (<code>ReservedFunctionConcurrentInvocationLimitExceeded</code>).</p> <p>For functions with a long timeout, your client might disconnect during synchronous invocation while it waits for a response. Configure your HTTP client, SDK, firewall, proxy, or operating system to allow for long connections with timeout or keep-alive settings.</p> <p>This operation requires permission for the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awslambda.html">lambda:InvokeFunction</a> action. For details on how to set up permissions for cross-account invocations, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html#permissions-resource-xaccountinvoke">Granting function access to other accounts</a>.</p>

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
    res, err := s.SDK.Invoke(ctx, operations.InvokeRequest{
        FunctionName: "est",
        Qualifier: sdk.String("repellendus"),
        RequestBody: operations.InvokeRequestBody{
            Payload: sdk.String("porro"),
        },
        XAmzAlgorithm: sdk.String("doloribus"),
        XAmzClientContext: sdk.String("ut"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("cupiditate"),
        XAmzDate: sdk.String("qui"),
        XAmzInvocationType: operations.InvokeXAmzInvocationTypeEnumEvent.ToPointer(),
        XAmzLogType: operations.InvokeXAmzLogTypeEnumTail.ToPointer(),
        XAmzSecurityToken: sdk.String("odio"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InvocationResponse != nil {
        // handle response
    }
}
```

## ~~InvokeAsync~~

<important> <p>For asynchronous function invocation, use <a>Invoke</a>.</p> </important> <p>Invokes a function asynchronously.</p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.SDK.InvokeAsync(ctx, operations.InvokeAsyncRequest{
        FunctionName: "quisquam",
        RequestBody: operations.InvokeAsyncRequestBody{
            InvokeArgs: "vero",
        },
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("quis"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("delectus"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("consectetur"),
        XAmzSignedHeaders: sdk.String("vero"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InvokeAsyncResponse != nil {
        // handle response
    }
}
```

## InvokeWithResponseStream

<p>Configure your Lambda functions to stream response payloads back to clients. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-response-streaming.html">Configuring a Lambda function to stream responses</a>.</p> <p>This operation requires permission for the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awslambda.html">lambda:InvokeFunction</a> action. For details on how to set up permissions for cross-account invocations, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html#permissions-resource-xaccountinvoke">Granting function access to other accounts</a>.</p>

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
    res, err := s.SDK.InvokeWithResponseStream(ctx, operations.InvokeWithResponseStreamRequest{
        FunctionName: "tenetur",
        Qualifier: sdk.String("dignissimos"),
        RequestBody: operations.InvokeWithResponseStreamRequestBody{
            Payload: sdk.String("hic"),
        },
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzClientContext: sdk.String("quod"),
        XAmzContentSha256: sdk.String("odio"),
        XAmzCredential: sdk.String("similique"),
        XAmzDate: sdk.String("facilis"),
        XAmzInvocationType: operations.InvokeWithResponseStreamXAmzInvocationTypeEnumDryRun.ToPointer(),
        XAmzLogType: operations.InvokeWithResponseStreamXAmzLogTypeEnumNone.ToPointer(),
        XAmzSecurityToken: sdk.String("dolore"),
        XAmzSignature: sdk.String("quibusdam"),
        XAmzSignedHeaders: sdk.String("illum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InvokeWithResponseStreamResponse != nil {
        // handle response
    }
}
```

## ListAliases

Returns a list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html">aliases</a> for a Lambda function.

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
    res, err := s.SDK.ListAliases(ctx, operations.ListAliasesRequest{
        FunctionName: "sequi",
        FunctionVersion: sdk.String("natus"),
        Marker: sdk.String("impedit"),
        MaxItems: sdk.Int64(13236),
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("exercitationem"),
        XAmzCredential: sdk.String("nulla"),
        XAmzDate: sdk.String("fugit"),
        XAmzSecurityToken: sdk.String("porro"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("doloribus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAliasesResponse != nil {
        // handle response
    }
}
```

## ListCodeSigningConfigs

Returns a list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuring-codesigning.html">code signing configurations</a>. A request returns up to 10,000 configurations per call. You can use the <code>MaxItems</code> parameter to return fewer configurations per call. 

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
    res, err := s.SDK.ListCodeSigningConfigs(ctx, operations.ListCodeSigningConfigsRequest{
        Marker: sdk.String("iusto"),
        MaxItems: sdk.Int64(753570),
        XAmzAlgorithm: sdk.String("ducimus"),
        XAmzContentSha256: sdk.String("alias"),
        XAmzCredential: sdk.String("officia"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("ea"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCodeSigningConfigsResponse != nil {
        // handle response
    }
}
```

## ListEventSourceMappings

Lists event source mappings. Specify an <code>EventSourceArn</code> to show only event source mappings for a single event source.

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
    res, err := s.SDK.ListEventSourceMappings(ctx, operations.ListEventSourceMappingsRequest{
        EventSourceArn: sdk.String("vel"),
        FunctionName: sdk.String("possimus"),
        Marker: sdk.String("magnam"),
        MaxItems: sdk.Int64(189848),
        XAmzAlgorithm: sdk.String("ex"),
        XAmzContentSha256: sdk.String("laudantium"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("ex"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEventSourceMappingsResponse != nil {
        // handle response
    }
}
```

## ListFunctionEventInvokeConfigs

<p>Retrieves a list of configurations for asynchronous invocation for a function.</p> <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>

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
    res, err := s.SDK.ListFunctionEventInvokeConfigs(ctx, operations.ListFunctionEventInvokeConfigsRequest{
        FunctionName: "nulla",
        Marker: sdk.String("excepturi"),
        MaxItems: sdk.Int64(972920),
        XAmzAlgorithm: sdk.String("nostrum"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("quisquam"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("corporis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFunctionEventInvokeConfigsResponse != nil {
        // handle response
    }
}
```

## ListFunctionURLConfigs

Returns a list of Lambda function URLs for the specified function.

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
    res, err := s.SDK.ListFunctionURLConfigs(ctx, operations.ListFunctionURLConfigsRequest{
        FunctionName: "veniam",
        Marker: sdk.String("aliquid"),
        MaxItems: sdk.Int64(81101),
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("ea"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("consectetur"),
        XAmzSecurityToken: sdk.String("recusandae"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("minima"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFunctionURLConfigsResponse != nil {
        // handle response
    }
}
```

## ListFunctions

<p>Returns a list of Lambda functions, with the version-specific configuration of each. Lambda returns up to 50 functions per call.</p> <p>Set <code>FunctionVersion</code> to <code>ALL</code> to include all published versions of each function in addition to the unpublished version.</p> <note> <p>The <code>ListFunctions</code> operation returns a subset of the <a>FunctionConfiguration</a> fields. To get the additional fields (State, StateReasonCode, StateReason, LastUpdateStatus, LastUpdateStatusReason, LastUpdateStatusReasonCode, RuntimeVersionConfig) for a function or version, use <a>GetFunction</a>.</p> </note>

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
    res, err := s.SDK.ListFunctions(ctx, operations.ListFunctionsRequest{
        FunctionVersion: operations.ListFunctionsFunctionVersionEnumAll.ToPointer(),
        Marker: sdk.String("eaque"),
        MasterRegion: sdk.String("a"),
        MaxItems: sdk.Int64(725595),
        XAmzAlgorithm: sdk.String("aut"),
        XAmzContentSha256: sdk.String("aut"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("impedit"),
        XAmzSecurityToken: sdk.String("aliquam"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("accusamus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFunctionsResponse != nil {
        // handle response
    }
}
```

## ListFunctionsByCodeSigningConfig

List the functions that use the specified code signing configuration. You can use this method prior to deleting a code signing configuration, to verify that no functions are using it.

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
    res, err := s.SDK.ListFunctionsByCodeSigningConfig(ctx, operations.ListFunctionsByCodeSigningConfigRequest{
        CodeSigningConfigArn: "inventore",
        Marker: sdk.String("non"),
        MaxItems: sdk.Int64(89603),
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("placeat"),
        XAmzDate: sdk.String("velit"),
        XAmzSecurityToken: sdk.String("eum"),
        XAmzSignature: sdk.String("autem"),
        XAmzSignedHeaders: sdk.String("nobis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFunctionsByCodeSigningConfigResponse != nil {
        // handle response
    }
}
```

## ListLayerVersions

Lists the versions of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. Versions that have been deleted aren't listed. Specify a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime identifier</a> to list only versions that indicate that they're compatible with that runtime. Specify a compatible architecture to include only layer versions that are compatible with that architecture.

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
    res, err := s.SDK.ListLayerVersions(ctx, operations.ListLayerVersionsRequest{
        CompatibleArchitecture: operations.ListLayerVersionsCompatibleArchitectureEnumArm64.ToPointer(),
        CompatibleRuntime: operations.ListLayerVersionsCompatibleRuntimeEnumRuby27.ToPointer(),
        LayerName: "nulla",
        Marker: sdk.String("voluptas"),
        MaxItems: sdk.Int64(727044),
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("numquam"),
        XAmzDate: sdk.String("explicabo"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("molestiae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLayerVersionsResponse != nil {
        // handle response
    }
}
```

## ListLayers

Lists <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-layers.html">Lambda layers</a> and shows information about the latest version of each. Specify a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime identifier</a> to list only layers that indicate that they're compatible with that runtime. Specify a compatible architecture to include only layers that are compatible with that <a href="https://docs.aws.amazon.com/lambda/latest/dg/foundation-arch.html">instruction set architecture</a>.

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
    res, err := s.SDK.ListLayers(ctx, operations.ListLayersRequest{
        CompatibleArchitecture: operations.ListLayersCompatibleArchitectureEnumX8664.ToPointer(),
        CompatibleRuntime: operations.ListLayersCompatibleRuntimeEnumPython38.ToPointer(),
        Marker: sdk.String("eius"),
        MaxItems: sdk.Int64(458515),
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("rem"),
        XAmzCredential: sdk.String("fuga"),
        XAmzDate: sdk.String("reprehenderit"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("fugiat"),
        XAmzSignedHeaders: sdk.String("ut"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLayersResponse != nil {
        // handle response
    }
}
```

## ListProvisionedConcurrencyConfigs

Retrieves a list of provisioned concurrency configurations for a function.

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
    res, err := s.SDK.ListProvisionedConcurrencyConfigs(ctx, operations.ListProvisionedConcurrencyConfigsRequest{
        FunctionName: "eum",
        List: operations.ListProvisionedConcurrencyConfigsListEnumAll,
        Marker: sdk.String("suscipit"),
        MaxItems: sdk.Int64(826871),
        XAmzAlgorithm: sdk.String("eos"),
        XAmzContentSha256: sdk.String("praesentium"),
        XAmzCredential: sdk.String("quisquam"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("id"),
        XAmzSignedHeaders: sdk.String("quidem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListProvisionedConcurrencyConfigsResponse != nil {
        // handle response
    }
}
```

## ListTags

Returns a function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a>. You can also view tags with <a>GetFunction</a>.

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
    res, err := s.SDK.ListTags(ctx, operations.ListTagsRequest{
        Arn: "neque",
        XAmzAlgorithm: sdk.String("quo"),
        XAmzContentSha256: sdk.String("illum"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("fuga"),
        XAmzSecurityToken: sdk.String("eius"),
        XAmzSignature: sdk.String("eos"),
        XAmzSignedHeaders: sdk.String("voluptas"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsResponse != nil {
        // handle response
    }
}
```

## ListVersionsByFunction

Returns a list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">versions</a>, with the version-specific configuration of each. Lambda returns up to 50 versions per call.

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
    res, err := s.SDK.ListVersionsByFunction(ctx, operations.ListVersionsByFunctionRequest{
        FunctionName: "ab",
        Marker: sdk.String("cupiditate"),
        MaxItems: sdk.Int64(9688),
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("sequi"),
        XAmzSignature: sdk.String("quo"),
        XAmzSignedHeaders: sdk.String("esse"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListVersionsByFunctionResponse != nil {
        // handle response
    }
}
```

## PublishLayerVersion

<p>Creates an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a> from a ZIP archive. Each time you call <code>PublishLayerVersion</code> with the same layer name, a new version is created.</p> <p>Add layers to your function with <a>CreateFunction</a> or <a>UpdateFunctionConfiguration</a>.</p>

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
    res, err := s.SDK.PublishLayerVersion(ctx, operations.PublishLayerVersionRequest{
        LayerName: "recusandae",
        RequestBody: operations.PublishLayerVersionRequestBody{
            CompatibleArchitectures: []shared.ArchitectureEnum{
                shared.ArchitectureEnumArm64,
            },
            CompatibleRuntimes: []shared.RuntimeEnum{
                shared.RuntimeEnumPython38,
                shared.RuntimeEnumNodejs610,
                shared.RuntimeEnumPython37,
                shared.RuntimeEnumPython39,
            },
            Content: operations.PublishLayerVersionRequestBodyContent{
                S3Bucket: sdk.String("accusamus"),
                S3Key: sdk.String("aliquam"),
                S3ObjectVersion: sdk.String("odio"),
                ZipFile: sdk.String("occaecati"),
            },
            Description: sdk.String("commodi"),
            LicenseInfo: sdk.String("sapiente"),
        },
        XAmzAlgorithm: sdk.String("dolores"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("accusantium"),
        XAmzSecurityToken: sdk.String("porro"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("quas"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PublishLayerVersionResponse != nil {
        // handle response
    }
}
```

## PublishVersion

<p>Creates a <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">version</a> from the current code and configuration of a function. Use versions to create a snapshot of your function code and configuration that doesn't change.</p> <p>Lambda doesn't publish a version if the function's configuration and code haven't changed since the last version. Use <a>UpdateFunctionCode</a> or <a>UpdateFunctionConfiguration</a> to update the function before publishing a version.</p> <p>Clients can invoke versions directly or with an alias. To create an alias, use <a>CreateAlias</a>.</p>

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
    res, err := s.SDK.PublishVersion(ctx, operations.PublishVersionRequest{
        FunctionName: "praesentium",
        RequestBody: operations.PublishVersionRequestBody{
            CodeSha256: sdk.String("consequuntur"),
            Description: sdk.String("deleniti"),
            RevisionID: sdk.String("fugit"),
        },
        XAmzAlgorithm: sdk.String("fuga"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("incidunt"),
        XAmzDate: sdk.String("atque"),
        XAmzSecurityToken: sdk.String("explicabo"),
        XAmzSignature: sdk.String("minima"),
        XAmzSignedHeaders: sdk.String("nisi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FunctionConfiguration != nil {
        // handle response
    }
}
```

## PutFunctionCodeSigningConfig

Update the code signing configuration for the function. Changes to the code signing configuration take effect the next time a user tries to deploy a code package to the function. 

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
    res, err := s.SDK.PutFunctionCodeSigningConfig(ctx, operations.PutFunctionCodeSigningConfigRequest{
        FunctionName: "fugit",
        RequestBody: operations.PutFunctionCodeSigningConfigRequestBody{
            CodeSigningConfigArn: "sapiente",
        },
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("ratione"),
        XAmzCredential: sdk.String("explicabo"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("atque"),
        XAmzSignedHeaders: sdk.String("et"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutFunctionCodeSigningConfigResponse != nil {
        // handle response
    }
}
```

## PutFunctionConcurrency

<p>Sets the maximum number of simultaneous executions for a function, and reserves capacity for that concurrency level.</p> <p>Concurrency settings apply to the function as a whole, including all published versions and the unpublished version. Reserving concurrency both ensures that your function has capacity to process the specified number of events simultaneously, and prevents it from scaling beyond that level. Use <a>GetFunction</a> to see the current setting for a function.</p> <p>Use <a>GetAccountSettings</a> to see your Regional concurrency limit. You can reserve concurrency for as many functions as you like, as long as you leave at least 100 simultaneous executions unreserved for functions that aren't configured with a per-function limit. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-scaling.html">Lambda function scaling</a>.</p>

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
    res, err := s.SDK.PutFunctionConcurrency(ctx, operations.PutFunctionConcurrencyRequest{
        FunctionName: "esse",
        RequestBody: operations.PutFunctionConcurrencyRequestBody{
            ReservedConcurrentExecutions: 910545,
        },
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("quod"),
        XAmzSecurityToken: sdk.String("nam"),
        XAmzSignature: sdk.String("vero"),
        XAmzSignedHeaders: sdk.String("aliquid"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Concurrency != nil {
        // handle response
    }
}
```

## PutFunctionEventInvokeConfig

<p>Configures options for <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html">asynchronous invocation</a> on a function, version, or alias. If a configuration already exists for a function, version, or alias, this operation overwrites it. If you exclude any settings, they are removed. To set one option without affecting existing settings for other options, use <a>UpdateFunctionEventInvokeConfig</a>.</p> <p>By default, Lambda retries an asynchronous invocation twice if the function returns an error. It retains events in a queue for up to six hours. When an event fails all processing attempts or stays in the asynchronous invocation queue for too long, Lambda discards it. To retain discarded events, configure a dead-letter queue with <a>UpdateFunctionConfiguration</a>.</p> <p>To send an invocation record to a queue, topic, function, or event bus, specify a <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-async-destinations">destination</a>. You can configure separate destinations for successful invocations (on-success) and events that fail all processing attempts (on-failure). You can configure destinations in addition to or instead of a dead-letter queue.</p>

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
    res, err := s.SDK.PutFunctionEventInvokeConfig(ctx, operations.PutFunctionEventInvokeConfigRequest{
        FunctionName: "quasi",
        Qualifier: sdk.String("saepe"),
        RequestBody: operations.PutFunctionEventInvokeConfigRequestBody{
            DestinationConfig: &operations.PutFunctionEventInvokeConfigRequestBodyDestinationConfig{
                OnFailure: &shared.OnFailure{
                    Destination: sdk.String("vel"),
                },
                OnSuccess: &shared.OnSuccess{
                    Destination: sdk.String("harum"),
                },
            },
            MaximumEventAgeInSeconds: sdk.Int64(473221),
            MaximumRetryAttempts: sdk.Int64(699622),
        },
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("minima"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("eligendi"),
        XAmzSecurityToken: sdk.String("sit"),
        XAmzSignature: sdk.String("culpa"),
        XAmzSignedHeaders: sdk.String("tempore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FunctionEventInvokeConfig != nil {
        // handle response
    }
}
```

## PutProvisionedConcurrencyConfig

Adds a provisioned concurrency configuration to a function's alias or version.

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
    res, err := s.SDK.PutProvisionedConcurrencyConfig(ctx, operations.PutProvisionedConcurrencyConfigRequest{
        FunctionName: "adipisci",
        Qualifier: "cumque",
        RequestBody: operations.PutProvisionedConcurrencyConfigRequestBody{
            ProvisionedConcurrentExecutions: 160538,
        },
        XAmzAlgorithm: sdk.String("consequatur"),
        XAmzContentSha256: sdk.String("minus"),
        XAmzCredential: sdk.String("quaerat"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("consectetur"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("blanditiis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutProvisionedConcurrencyConfigResponse != nil {
        // handle response
    }
}
```

## PutRuntimeManagementConfig

Sets the runtime management configuration for a function's version. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html">Runtime updates</a>.

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
    res, err := s.SDK.PutRuntimeManagementConfig(ctx, operations.PutRuntimeManagementConfigRequest{
        FunctionName: "provident",
        Qualifier: sdk.String("a"),
        RequestBody: operations.PutRuntimeManagementConfigRequestBody{
            RuntimeVersionArn: sdk.String("nulla"),
            UpdateRuntimeOn: operations.PutRuntimeManagementConfigRequestBodyUpdateRuntimeOnEnumManual,
        },
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("a"),
        XAmzDate: sdk.String("error"),
        XAmzSecurityToken: sdk.String("sint"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("possimus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutRuntimeManagementConfigResponse != nil {
        // handle response
    }
}
```

## RemoveLayerVersionPermission

Removes a statement from the permissions policy for a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. For more information, see <a>AddLayerVersionPermission</a>.

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
    res, err := s.SDK.RemoveLayerVersionPermission(ctx, operations.RemoveLayerVersionPermissionRequest{
        LayerName: "quia",
        RevisionID: sdk.String("eveniet"),
        StatementID: "asperiores",
        VersionNumber: 815524,
        XAmzAlgorithm: sdk.String("veritatis"),
        XAmzContentSha256: sdk.String("consequuntur"),
        XAmzCredential: sdk.String("quasi"),
        XAmzDate: sdk.String("similique"),
        XAmzSecurityToken: sdk.String("culpa"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("tenetur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RemovePermission

Revokes function-use permission from an Amazon Web Service or another Amazon Web Services account. You can get the ID of the statement from the output of <a>GetPolicy</a>.

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
    res, err := s.SDK.RemovePermission(ctx, operations.RemovePermissionRequest{
        FunctionName: "quae",
        Qualifier: sdk.String("earum"),
        RevisionID: sdk.String("vel"),
        StatementID: "in",
        XAmzAlgorithm: sdk.String("eius"),
        XAmzContentSha256: sdk.String("libero"),
        XAmzCredential: sdk.String("illum"),
        XAmzDate: sdk.String("soluta"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("aliquam"),
        XAmzSignedHeaders: sdk.String("sapiente"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TagResource

Adds <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a> to a function.

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
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        Arn: "dicta",
        RequestBody: operations.TagResourceRequestBody{
            Tags: map[string]string{
                "reprehenderit": "ullam",
                "nisi": "aut",
            },
        },
        XAmzAlgorithm: sdk.String("voluptatum"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("ex"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("itaque"),
        XAmzSignedHeaders: sdk.String("dolorum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UntagResource

Removes <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a> from a function.

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
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        Arn: "architecto",
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("tenetur"),
        XAmzCredential: sdk.String("quasi"),
        XAmzDate: sdk.String("at"),
        XAmzSecurityToken: sdk.String("et"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("ipsa"),
        TagKeys: []string{
            "veritatis",
            "consectetur",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateAlias

Updates the configuration of a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html">alias</a>.

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
    res, err := s.SDK.UpdateAlias(ctx, operations.UpdateAliasRequest{
        FunctionName: "adipisci",
        Name: "Lionel Bartoletti IV",
        RequestBody: operations.UpdateAliasRequestBody{
            Description: sdk.String("eum"),
            FunctionVersion: sdk.String("mollitia"),
            RevisionID: sdk.String("ab"),
            RoutingConfig: &operations.UpdateAliasRequestBodyRoutingConfig{
                AdditionalVersionWeights: map[string]float64{
                    "non": 324.65,
                    "dolor": 5801.52,
                    "numquam": 7710.89,
                },
            },
        },
        XAmzAlgorithm: sdk.String("explicabo"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("dignissimos"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("natus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AliasConfiguration != nil {
        // handle response
    }
}
```

## UpdateCodeSigningConfig

Update the code signing configuration. Changes to the code signing configuration take effect the next time a user tries to deploy a code package to the function. 

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
    res, err := s.SDK.UpdateCodeSigningConfig(ctx, operations.UpdateCodeSigningConfigRequest{
        CodeSigningConfigArn: "velit",
        RequestBody: operations.UpdateCodeSigningConfigRequestBody{
            AllowedPublishers: &operations.UpdateCodeSigningConfigRequestBodyAllowedPublishers{
                SigningProfileVersionArns: []string{
                    "voluptas",
                    "asperiores",
                    "aperiam",
                    "ea",
                },
            },
            CodeSigningPolicies: &operations.UpdateCodeSigningConfigRequestBodyCodeSigningPolicies{
                UntrustedArtifactOnDeployment: shared.CodeSigningPolicyEnumWarn.ToPointer(),
            },
            Description: sdk.String("consequuntur"),
        },
        XAmzAlgorithm: sdk.String("repellendus"),
        XAmzContentSha256: sdk.String("officia"),
        XAmzCredential: sdk.String("maxime"),
        XAmzDate: sdk.String("dignissimos"),
        XAmzSecurityToken: sdk.String("officia"),
        XAmzSignature: sdk.String("asperiores"),
        XAmzSignedHeaders: sdk.String("nemo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateCodeSigningConfigResponse != nil {
        // handle response
    }
}
```

## UpdateEventSourceMapping

<p>Updates an event source mapping. You can change the function that Lambda invokes, or pause invocation and resume later from the same location.</p> <p>For details about how to configure different event sources, see the following topics. </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html#services-dynamodb-eventsourcemapping"> Amazon DynamoDB Streams</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html#services-kinesis-eventsourcemapping"> Amazon Kinesis</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#events-sqs-eventsource"> Amazon SQS</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#services-mq-eventsourcemapping"> Amazon MQ and RabbitMQ</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html"> Amazon MSK</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/kafka-smaa.html"> Apache Kafka</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-documentdb.html"> Amazon DocumentDB</a> </p> </li> </ul> <p>The following error handling options are available only for stream sources (DynamoDB and Kinesis):</p> <ul> <li> <p> <code>BisectBatchOnFunctionError</code> – If the function returns an error, split the batch in two and retry.</p> </li> <li> <p> <code>DestinationConfig</code> – Send discarded records to an Amazon SQS queue or Amazon SNS topic.</p> </li> <li> <p> <code>MaximumRecordAgeInSeconds</code> – Discard records older than the specified age. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires</p> </li> <li> <p> <code>MaximumRetryAttempts</code> – Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires.</p> </li> <li> <p> <code>ParallelizationFactor</code> – Process multiple batches from each shard concurrently.</p> </li> </ul> <p>For information about which configuration parameters apply to each event source, see the following topics.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html#services-ddb-params"> Amazon DynamoDB Streams</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html#services-kinesis-params"> Amazon Kinesis</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#services-sqs-params"> Amazon SQS</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#services-mq-params"> Amazon MQ and RabbitMQ</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-parms"> Amazon MSK</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kafka.html#services-kafka-parms"> Apache Kafka</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-documentdb.html#docdb-configuration"> Amazon DocumentDB</a> </p> </li> </ul>

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
    res, err := s.SDK.UpdateEventSourceMapping(ctx, operations.UpdateEventSourceMappingRequest{
        RequestBody: operations.UpdateEventSourceMappingRequestBody{
            BatchSize: sdk.Int64(65304),
            BisectBatchOnFunctionError: sdk.Bool(false),
            DestinationConfig: &operations.UpdateEventSourceMappingRequestBodyDestinationConfig{
                OnFailure: &shared.OnFailure{
                    Destination: sdk.String("quaerat"),
                },
                OnSuccess: &shared.OnSuccess{
                    Destination: sdk.String("porro"),
                },
            },
            DocumentDBEventSourceConfig: &operations.UpdateEventSourceMappingRequestBodyDocumentDBEventSourceConfig{
                CollectionName: sdk.String("quod"),
                DatabaseName: sdk.String("labore"),
                FullDocument: shared.FullDocumentEnumUpdateLookup.ToPointer(),
            },
            Enabled: sdk.Bool(false),
            FilterCriteria: &operations.UpdateEventSourceMappingRequestBodyFilterCriteria{
                Filters: []shared.Filter{
                    shared.Filter{
                        Pattern: sdk.String("fuga"),
                    },
                },
            },
            FunctionName: sdk.String("id"),
            FunctionResponseTypes: []shared.FunctionResponseTypeEnum{
                shared.FunctionResponseTypeEnumReportBatchItemFailures,
                shared.FunctionResponseTypeEnumReportBatchItemFailures,
            },
            MaximumBatchingWindowInSeconds: sdk.Int64(246063),
            MaximumRecordAgeInSeconds: sdk.Int64(633931),
            MaximumRetryAttempts: sdk.Int64(665859),
            ParallelizationFactor: sdk.Int64(926880),
            ScalingConfig: &operations.UpdateEventSourceMappingRequestBodyScalingConfig{
                MaximumConcurrency: sdk.Int64(517309),
            },
            SourceAccessConfigurations: []shared.SourceAccessConfiguration{
                shared.SourceAccessConfiguration{
                    Type: shared.SourceAccessTypeEnumSaslScram512Auth.ToPointer(),
                    URI: sdk.String("http://mysterious-highway.biz"),
                },
                shared.SourceAccessConfiguration{
                    Type: shared.SourceAccessTypeEnumClientCertificateTLSAuth.ToPointer(),
                    URI: sdk.String("https://shabby-harmonize.info"),
                },
                shared.SourceAccessConfiguration{
                    Type: shared.SourceAccessTypeEnumVpcSecurityGroup.ToPointer(),
                    URI: sdk.String("https://svelte-fortnight.org"),
                },
                shared.SourceAccessConfiguration{
                    Type: shared.SourceAccessTypeEnumSaslScram512Auth.ToPointer(),
                    URI: sdk.String("http://shadowy-curse.info"),
                },
            },
            TumblingWindowInSeconds: sdk.Int64(348519),
        },
        UUID: "ed4f6fbe-e41f-4333-97fe-35b60eb1ea42",
        XAmzAlgorithm: sdk.String("voluptas"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("voluptas"),
        XAmzDate: sdk.String("minima"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("adipisci"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EventSourceMappingConfiguration != nil {
        // handle response
    }
}
```

## UpdateFunctionCode

<p>Updates a Lambda function's code. If code signing is enabled for the function, the code package must be signed by a trusted publisher. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html">Configuring code signing for Lambda</a>.</p> <p>If the function's package type is <code>Image</code>, then you must specify the code package in <code>ImageUri</code> as the URI of a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-images.html">container image</a> in the Amazon ECR registry.</p> <p>If the function's package type is <code>Zip</code>, then you must specify the deployment package as a <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html#gettingstarted-package-zip">.zip file archive</a>. Enter the Amazon S3 bucket and key of the code .zip file location. You can also provide the function code inline using the <code>ZipFile</code> field.</p> <p>The code in the deployment package must be compatible with the target instruction set architecture of the function (<code>x86-64</code> or <code>arm64</code>).</p> <p>The function's code is locked when you publish a version. You can't modify the code of a published version, only the unpublished version.</p> <note> <p>For a function defined as a container image, Lambda resolves the image tag to an image digest. In Amazon ECR, if you update the image tag to a new image, Lambda does not automatically update the function.</p> </note>

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
    res, err := s.SDK.UpdateFunctionCode(ctx, operations.UpdateFunctionCodeRequest{
        FunctionName: "minus",
        RequestBody: operations.UpdateFunctionCodeRequestBody{
            Architectures: []shared.ArchitectureEnum{
                shared.ArchitectureEnumArm64,
            },
            DryRun: sdk.Bool(false),
            ImageURI: sdk.String("in"),
            Publish: sdk.Bool(false),
            RevisionID: sdk.String("dolore"),
            S3Bucket: sdk.String("aliquam"),
            S3Key: sdk.String("officiis"),
            S3ObjectVersion: sdk.String("temporibus"),
            ZipFile: sdk.String("ullam"),
        },
        XAmzAlgorithm: sdk.String("adipisci"),
        XAmzContentSha256: sdk.String("cum"),
        XAmzCredential: sdk.String("blanditiis"),
        XAmzDate: sdk.String("quas"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("nesciunt"),
        XAmzSignedHeaders: sdk.String("culpa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FunctionConfiguration != nil {
        // handle response
    }
}
```

## UpdateFunctionConfiguration

<p>Modify the version-specific settings of a Lambda function.</p> <p>When you update a function, Lambda provisions an instance of the function and its supporting resources. If your function connects to a VPC, this process can take a minute. During this time, you can't modify the function, but you can still invoke it. The <code>LastUpdateStatus</code>, <code>LastUpdateStatusReason</code>, and <code>LastUpdateStatusReasonCode</code> fields in the response from <a>GetFunctionConfiguration</a> indicate when the update is complete and the function is processing events with the new configuration. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/functions-states.html">Lambda function states</a>.</p> <p>These settings can vary between versions of a function and are locked when you publish a version. You can't modify the configuration of a published version, only the unpublished version.</p> <p>To configure function concurrency, use <a>PutFunctionConcurrency</a>. To grant invoke permissions to an Amazon Web Services account or Amazon Web Service, use <a>AddPermission</a>.</p>

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
    res, err := s.SDK.UpdateFunctionConfiguration(ctx, operations.UpdateFunctionConfigurationRequest{
        FunctionName: "corrupti",
        RequestBody: operations.UpdateFunctionConfigurationRequestBody{
            DeadLetterConfig: &operations.UpdateFunctionConfigurationRequestBodyDeadLetterConfig{
                TargetArn: sdk.String("pariatur"),
            },
            Description: sdk.String("totam"),
            Environment: &operations.UpdateFunctionConfigurationRequestBodyEnvironment{
                Variables: map[string]string{
                    "exercitationem": "nobis",
                    "sit": "rerum",
                    "sed": "reiciendis",
                    "explicabo": "asperiores",
                },
            },
            EphemeralStorage: &operations.UpdateFunctionConfigurationRequestBodyEphemeralStorage{
                Size: sdk.Int64(707918),
            },
            FileSystemConfigs: []shared.FileSystemConfig{
                shared.FileSystemConfig{
                    Arn: "expedita",
                    LocalMountPath: "ab",
                },
                shared.FileSystemConfig{
                    Arn: "iste",
                    LocalMountPath: "dolore",
                },
            },
            Handler: sdk.String("laborum"),
            ImageConfig: &operations.UpdateFunctionConfigurationRequestBodyImageConfig{
                Command: []string{
                    "in",
                },
                EntryPoint: []string{
                    "quidem",
                    "explicabo",
                },
                WorkingDirectory: sdk.String("voluptas"),
            },
            KMSKeyArn: sdk.String("unde"),
            Layers: []string{
                "suscipit",
            },
            MemorySize: sdk.Int64(960257),
            RevisionID: sdk.String("debitis"),
            Role: sdk.String("illo"),
            Runtime: operations.UpdateFunctionConfigurationRequestBodyRuntimeEnumPython310.ToPointer(),
            SnapStart: &operations.UpdateFunctionConfigurationRequestBodySnapStart{
                ApplyOn: shared.SnapStartApplyOnEnumPublishedVersions.ToPointer(),
            },
            Timeout: sdk.Int64(546885),
            TracingConfig: &operations.UpdateFunctionConfigurationRequestBodyTracingConfig{
                Mode: shared.TracingModeEnumPassThrough.ToPointer(),
            },
            VpcConfig: &operations.UpdateFunctionConfigurationRequestBodyVpcConfig{
                SecurityGroupIds: []string{
                    "sed",
                    "provident",
                },
                SubnetIds: []string{
                    "necessitatibus",
                    "ipsum",
                },
            },
        },
        XAmzAlgorithm: sdk.String("ea"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("quos"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("voluptate"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FunctionConfiguration != nil {
        // handle response
    }
}
```

## UpdateFunctionEventInvokeConfig

<p>Updates the configuration for asynchronous invocation for a function, version, or alias.</p> <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>

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
    res, err := s.SDK.UpdateFunctionEventInvokeConfig(ctx, operations.UpdateFunctionEventInvokeConfigRequest{
        FunctionName: "reiciendis",
        Qualifier: sdk.String("ex"),
        RequestBody: operations.UpdateFunctionEventInvokeConfigRequestBody{
            DestinationConfig: &operations.UpdateFunctionEventInvokeConfigRequestBodyDestinationConfig{
                OnFailure: &shared.OnFailure{
                    Destination: sdk.String("sit"),
                },
                OnSuccess: &shared.OnSuccess{
                    Destination: sdk.String("non"),
                },
            },
            MaximumEventAgeInSeconds: sdk.Int64(888044),
            MaximumRetryAttempts: sdk.Int64(505866),
        },
        XAmzAlgorithm: sdk.String("facilis"),
        XAmzContentSha256: sdk.String("quaerat"),
        XAmzCredential: sdk.String("incidunt"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("debitis"),
        XAmzSignature: sdk.String("rem"),
        XAmzSignedHeaders: sdk.String("sit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FunctionEventInvokeConfig != nil {
        // handle response
    }
}
```

## UpdateFunctionURLConfig

Updates the configuration for a Lambda function URL.

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
    res, err := s.SDK.UpdateFunctionURLConfig(ctx, operations.UpdateFunctionURLConfigRequest{
        FunctionName: "nobis",
        Qualifier: sdk.String("error"),
        RequestBody: operations.UpdateFunctionURLConfigRequestBody{
            AuthType: operations.UpdateFunctionURLConfigRequestBodyAuthTypeEnumNone.ToPointer(),
            Cors: &operations.UpdateFunctionURLConfigRequestBodyCors{
                AllowCredentials: sdk.Bool(false),
                AllowHeaders: []string{
                    "recusandae",
                    "reiciendis",
                },
                AllowMethods: []string{
                    "magni",
                    "aperiam",
                    "saepe",
                    "numquam",
                },
                AllowOrigins: []string{
                    "in",
                    "officiis",
                },
                ExposeHeaders: []string{
                    "laudantium",
                },
                MaxAge: sdk.Int64(348476),
            },
            InvokeMode: operations.UpdateFunctionURLConfigRequestBodyInvokeModeEnumResponseStream.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("cum"),
        XAmzContentSha256: sdk.String("laboriosam"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("voluptatum"),
        XAmzSecurityToken: sdk.String("error"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("expedita"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateFunctionURLConfigResponse != nil {
        // handle response
    }
}
```
