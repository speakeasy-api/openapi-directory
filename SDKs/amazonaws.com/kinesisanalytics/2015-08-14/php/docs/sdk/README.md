# SDK

## Overview

<fullname>Amazon Kinesis Analytics</fullname> <p> <b>Overview</b> </p> <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>This is the <i>Amazon Kinesis Analytics v1 API Reference</i>. The Amazon Kinesis Analytics Developer Guide provides additional information. </p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/kinesisanalytics/>
### Available Operations

* [addApplicationCloudWatchLoggingOption](#addapplicationcloudwatchloggingoption) - <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Adds a CloudWatch log stream to monitor application configuration errors. For more information about using CloudWatch log streams with Amazon Kinesis Analytics applications, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/cloudwatch-logs.html">Working with Amazon CloudWatch Logs</a>.</p>
* [addApplicationInput](#addapplicationinput) - <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p> Adds a streaming source to your Amazon Kinesis application. For conceptual information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>. </p> <p>You can add a streaming source either when you create an application or you can use this operation to add a streaming source after you create an application. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_CreateApplication.html">CreateApplication</a>.</p> <p>Any configuration update, including adding a streaming source using this operation, results in a new version of the application. You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to find the current application version. </p> <p>This operation requires permissions to perform the <code>kinesisanalytics:AddApplicationInput</code> action.</p>
* [addApplicationInputProcessingConfiguration](#addapplicationinputprocessingconfiguration) - <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Adds an <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html">InputProcessingConfiguration</a> to an application. An input processor preprocesses records on the input stream before the application's SQL code executes. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a>.</p>
* [addApplicationOutput](#addapplicationoutput) - <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Adds an external destination to your Amazon Kinesis Analytics application.</p> <p>If you want Amazon Kinesis Analytics to deliver data from an in-application stream within your application to an external destination (such as an Amazon Kinesis stream, an Amazon Kinesis Firehose delivery stream, or an AWS Lambda function), you add the relevant configuration to your application using this operation. You can configure one or more outputs for your application. Each output configuration maps an in-application stream and an external destination.</p> <p> You can use one of the output configurations to deliver data from your in-application error stream to an external destination so that you can analyze the errors. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html">Understanding Application Output (Destination)</a>. </p> <p> Any configuration update, including adding a streaming source using this operation, results in a new version of the application. You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to find the current application version.</p> <p>For the limits on the number of application inputs and outputs you can configure, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/limits.html">Limits</a>.</p> <p>This operation requires permissions to perform the <code>kinesisanalytics:AddApplicationOutput</code> action.</p>
* [addApplicationReferenceDataSource](#addapplicationreferencedatasource) - <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Adds a reference data source to an existing application.</p> <p>Amazon Kinesis Analytics reads reference data (that is, an Amazon S3 object) and creates an in-application table within your application. In the request, you provide the source (S3 bucket name and object key name), name of the in-application table to create, and the necessary mapping information that describes how data in Amazon S3 object maps to columns in the resulting in-application table.</p> <p> For conceptual information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>. For the limits on data sources you can add to your application, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/limits.html">Limits</a>. </p> <p> This operation requires permissions to perform the <code>kinesisanalytics:AddApplicationOutput</code> action. </p>
* [createApplication](#createapplication) - <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p> Creates an Amazon Kinesis Analytics application. You can configure each application with one streaming source as input, application code to process the input, and up to three destinations where you want Amazon Kinesis Analytics to write the output data from your application. For an overview, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works.html">How it Works</a>. </p> <p>In the input configuration, you map the streaming source to an in-application stream, which you can think of as a constantly updating table. In the mapping, you must provide a schema for the in-application stream and map each data column in the in-application stream to a data element in the streaming source.</p> <p>Your application code is one or more SQL statements that read input data, transform it, and generate output. Your application code can create one or more SQL artifacts like SQL streams or pumps.</p> <p>In the output configuration, you can configure the application to write data from in-application streams created in your applications to up to three destinations.</p> <p> To read data from your source stream or write data to destination streams, Amazon Kinesis Analytics needs your permissions. You grant these permissions by creating IAM roles. This operation requires permissions to perform the <code>kinesisanalytics:CreateApplication</code> action. </p> <p> For introductory exercises to create an Amazon Kinesis Analytics application, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/getting-started.html">Getting Started</a>. </p>
* [deleteApplication](#deleteapplication) - <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Deletes the specified application. Amazon Kinesis Analytics halts application execution and deletes the application, including any application artifacts (such as in-application streams, reference table, and application code).</p> <p>This operation requires permissions to perform the <code>kinesisanalytics:DeleteApplication</code> action.</p>
* [deleteApplicationCloudWatchLoggingOption](#deleteapplicationcloudwatchloggingoption) - <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Deletes a CloudWatch log stream from an application. For more information about using CloudWatch log streams with Amazon Kinesis Analytics applications, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/cloudwatch-logs.html">Working with Amazon CloudWatch Logs</a>.</p>
* [deleteApplicationInputProcessingConfiguration](#deleteapplicationinputprocessingconfiguration) - <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Deletes an <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html">InputProcessingConfiguration</a> from an input.</p>
* [deleteApplicationOutput](#deleteapplicationoutput) - <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Deletes output destination configuration from your application configuration. Amazon Kinesis Analytics will no longer write data from the corresponding in-application stream to the external output destination.</p> <p>This operation requires permissions to perform the <code>kinesisanalytics:DeleteApplicationOutput</code> action.</p>
* [deleteApplicationReferenceDataSource](#deleteapplicationreferencedatasource) - <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Deletes a reference data source configuration from the specified application configuration.</p> <p>If the application is running, Amazon Kinesis Analytics immediately removes the in-application table that you created using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_AddApplicationReferenceDataSource.html">AddApplicationReferenceDataSource</a> operation. </p> <p>This operation requires permissions to perform the <code>kinesisanalytics.DeleteApplicationReferenceDataSource</code> action.</p>
* [describeApplication](#describeapplication) - <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Returns information about a specific Amazon Kinesis Analytics application.</p> <p>If you want to retrieve a list of all applications in your account, use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_ListApplications.html">ListApplications</a> operation.</p> <p>This operation requires permissions to perform the <code>kinesisanalytics:DescribeApplication</code> action. You can use <code>DescribeApplication</code> to get the current application versionId, which you need to call other operations such as <code>Update</code>. </p>
* [discoverInputSchema](#discoverinputschema) - <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Infers a schema by evaluating sample records on the specified streaming source (Amazon Kinesis stream or Amazon Kinesis Firehose delivery stream) or S3 object. In the response, the operation returns the inferred schema and also the sample records that the operation used to infer the schema.</p> <p> You can use the inferred schema when configuring a streaming source for your application. For conceptual information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>. Note that when you create an application using the Amazon Kinesis Analytics console, the console uses this operation to infer a schema and show it in the console user interface. </p> <p> This operation requires permissions to perform the <code>kinesisanalytics:DiscoverInputSchema</code> action. </p>
* [listApplications](#listapplications) - <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Returns a list of Amazon Kinesis Analytics applications in your account. For each application, the response includes the application name, Amazon Resource Name (ARN), and status. If the response returns the <code>HasMoreApplications</code> value as true, you can send another request by adding the <code>ExclusiveStartApplicationName</code> in the request body, and set the value of this to the last application name from the previous response. </p> <p>If you want detailed information about a specific application, use <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a>.</p> <p>This operation requires permissions to perform the <code>kinesisanalytics:ListApplications</code> action.</p>
* [listTagsForResource](#listtagsforresource) - Retrieves the list of key-value tags assigned to the application. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-tagging.html">Using Tagging</a>.
* [startApplication](#startapplication) - <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Starts the specified Amazon Kinesis Analytics application. After creating an application, you must exclusively call this operation to start your application.</p> <p>After the application starts, it begins consuming the input data, processes it, and writes the output to the configured destination.</p> <p> The application status must be <code>READY</code> for you to start an application. You can get the application status in the console or using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation.</p> <p>After you start the application, you can stop the application from processing the input by calling the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_StopApplication.html">StopApplication</a> operation.</p> <p>This operation requires permissions to perform the <code>kinesisanalytics:StartApplication</code> action.</p>
* [stopApplication](#stopapplication) - <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Stops the application from processing input data. You can stop an application only if it is in the running state. You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to find the application state. After the application is stopped, Amazon Kinesis Analytics stops reading data from the input, the application stops processing data, and there is no output written to the destination. </p> <p>This operation requires permissions to perform the <code>kinesisanalytics:StopApplication</code> action.</p>
* [tagResource](#tagresource) - Adds one or more key-value tags to a Kinesis Analytics application. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-tagging.html">Using Tagging</a>.
* [untagResource](#untagresource) - Removes one or more tags from a Kinesis Analytics application. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-tagging.html">Using Tagging</a>.
* [updateApplication](#updateapplication) - <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Updates an existing Amazon Kinesis Analytics application. Using this API, you can update application code, input configuration, and output configuration. </p> <p>Note that Amazon Kinesis Analytics updates the <code>CurrentApplicationVersionId</code> each time you update your application. </p> <p>This operation requires permission for the <code>kinesisanalytics:UpdateApplication</code> action.</p>

## addApplicationCloudWatchLoggingOption

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Adds a CloudWatch log stream to monitor application configuration errors. For more information about using CloudWatch log streams with Amazon Kinesis Analytics applications, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/cloudwatch-logs.html">Working with Amazon CloudWatch Logs</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddApplicationCloudWatchLoggingOptionRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddApplicationCloudWatchLoggingOptionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CloudWatchLoggingOption;
use \OpenAPI\OpenAPI\Models\Operations\AddApplicationCloudWatchLoggingOptionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddApplicationCloudWatchLoggingOptionRequest();
    $request->addApplicationCloudWatchLoggingOptionRequest = new AddApplicationCloudWatchLoggingOptionRequest();
    $request->addApplicationCloudWatchLoggingOptionRequest->applicationName = 'suscipit';
    $request->addApplicationCloudWatchLoggingOptionRequest->cloudWatchLoggingOption = new CloudWatchLoggingOption();
    $request->addApplicationCloudWatchLoggingOptionRequest->cloudWatchLoggingOption->logStreamARN = 'iure';
    $request->addApplicationCloudWatchLoggingOptionRequest->cloudWatchLoggingOption->roleARN = 'magnam';
    $request->addApplicationCloudWatchLoggingOptionRequest->currentApplicationVersionId = 891773;
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'minus';
    $request->xAmzSignedHeaders = 'placeat';
    $request->xAmzTarget = AddApplicationCloudWatchLoggingOptionXAmzTargetEnum::KINESIS_ANALYTICS20150814_ADD_APPLICATION_CLOUD_WATCH_LOGGING_OPTION;

    $response = $sdk->sdk->addApplicationCloudWatchLoggingOption($request);

    if ($response->addApplicationCloudWatchLoggingOptionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addApplicationInput

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p> Adds a streaming source to your Amazon Kinesis application. For conceptual information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>. </p> <p>You can add a streaming source either when you create an application or you can use this operation to add a streaming source after you create an application. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_CreateApplication.html">CreateApplication</a>.</p> <p>Any configuration update, including adding a streaming source using this operation, results in a new version of the application. You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to find the current application version. </p> <p>This operation requires permissions to perform the <code>kinesisanalytics:AddApplicationInput</code> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddApplicationInputRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddApplicationInputRequest;
use \OpenAPI\OpenAPI\Models\Shared\Input;
use \OpenAPI\OpenAPI\Models\Shared\InputParallelism;
use \OpenAPI\OpenAPI\Models\Shared\InputProcessingConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\InputLambdaProcessor;
use \OpenAPI\OpenAPI\Models\Shared\SourceSchema;
use \OpenAPI\OpenAPI\Models\Shared\RecordColumn;
use \OpenAPI\OpenAPI\Models\Shared\RecordFormat;
use \OpenAPI\OpenAPI\Models\Shared\MappingParameters;
use \OpenAPI\OpenAPI\Models\Shared\CSVMappingParameters;
use \OpenAPI\OpenAPI\Models\Shared\JSONMappingParameters;
use \OpenAPI\OpenAPI\Models\Shared\RecordFormatTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\KinesisFirehoseInput;
use \OpenAPI\OpenAPI\Models\Shared\KinesisStreamsInput;
use \OpenAPI\OpenAPI\Models\Operations\AddApplicationInputXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddApplicationInputRequest();
    $request->addApplicationInputRequest = new AddApplicationInputRequest();
    $request->addApplicationInputRequest->applicationName = 'voluptatum';
    $request->addApplicationInputRequest->currentApplicationVersionId = 479977;
    $request->addApplicationInputRequest->input = new Input();
    $request->addApplicationInputRequest->input->inputParallelism = new InputParallelism();
    $request->addApplicationInputRequest->input->inputParallelism->count = 568045;
    $request->addApplicationInputRequest->input->inputProcessingConfiguration = new InputProcessingConfiguration();
    $request->addApplicationInputRequest->input->inputProcessingConfiguration->inputLambdaProcessor = new InputLambdaProcessor();
    $request->addApplicationInputRequest->input->inputProcessingConfiguration->inputLambdaProcessor->resourceARN = 'nisi';
    $request->addApplicationInputRequest->input->inputProcessingConfiguration->inputLambdaProcessor->roleARN = 'recusandae';
    $request->addApplicationInputRequest->input->inputSchema = new SourceSchema();
    $request->addApplicationInputRequest->input->inputSchema->recordColumns = [
        new RecordColumn(),
        new RecordColumn(),
        new RecordColumn(),
        new RecordColumn(),
    ];
    $request->addApplicationInputRequest->input->inputSchema->recordEncoding = 'ab';
    $request->addApplicationInputRequest->input->inputSchema->recordFormat = new RecordFormat();
    $request->addApplicationInputRequest->input->inputSchema->recordFormat->mappingParameters = new MappingParameters();
    $request->addApplicationInputRequest->input->inputSchema->recordFormat->mappingParameters->csvMappingParameters = new CSVMappingParameters();
    $request->addApplicationInputRequest->input->inputSchema->recordFormat->mappingParameters->csvMappingParameters->recordColumnDelimiter = 'quis';
    $request->addApplicationInputRequest->input->inputSchema->recordFormat->mappingParameters->csvMappingParameters->recordRowDelimiter = 'veritatis';
    $request->addApplicationInputRequest->input->inputSchema->recordFormat->mappingParameters->jsonMappingParameters = new JSONMappingParameters();
    $request->addApplicationInputRequest->input->inputSchema->recordFormat->mappingParameters->jsonMappingParameters->recordRowPath = 'deserunt';
    $request->addApplicationInputRequest->input->inputSchema->recordFormat->recordFormatType = RecordFormatTypeEnum::JSON;
    $request->addApplicationInputRequest->input->kinesisFirehoseInput = new KinesisFirehoseInput();
    $request->addApplicationInputRequest->input->kinesisFirehoseInput->resourceARN = 'ipsam';
    $request->addApplicationInputRequest->input->kinesisFirehoseInput->roleARN = 'repellendus';
    $request->addApplicationInputRequest->input->kinesisStreamsInput = new KinesisStreamsInput();
    $request->addApplicationInputRequest->input->kinesisStreamsInput->resourceARN = 'sapiente';
    $request->addApplicationInputRequest->input->kinesisStreamsInput->roleARN = 'quo';
    $request->addApplicationInputRequest->input->namePrefix = 'odit';
    $request->xAmzAlgorithm = 'at';
    $request->xAmzContentSha256 = 'at';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'quod';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'esse';
    $request->xAmzTarget = AddApplicationInputXAmzTargetEnum::KINESIS_ANALYTICS20150814_ADD_APPLICATION_INPUT;

    $response = $sdk->sdk->addApplicationInput($request);

    if ($response->addApplicationInputResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addApplicationInputProcessingConfiguration

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Adds an <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html">InputProcessingConfiguration</a> to an application. An input processor preprocesses records on the input stream before the application's SQL code executes. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddApplicationInputProcessingConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddApplicationInputProcessingConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\InputProcessingConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\InputLambdaProcessor;
use \OpenAPI\OpenAPI\Models\Operations\AddApplicationInputProcessingConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddApplicationInputProcessingConfigurationRequest();
    $request->addApplicationInputProcessingConfigurationRequest = new AddApplicationInputProcessingConfigurationRequest();
    $request->addApplicationInputProcessingConfigurationRequest->applicationName = 'totam';
    $request->addApplicationInputProcessingConfigurationRequest->currentApplicationVersionId = 780529;
    $request->addApplicationInputProcessingConfigurationRequest->inputId = 'dolorum';
    $request->addApplicationInputProcessingConfigurationRequest->inputProcessingConfiguration = new InputProcessingConfiguration();
    $request->addApplicationInputProcessingConfigurationRequest->inputProcessingConfiguration->inputLambdaProcessor = new InputLambdaProcessor();
    $request->addApplicationInputProcessingConfigurationRequest->inputProcessingConfiguration->inputLambdaProcessor->resourceARN = 'dicta';
    $request->addApplicationInputProcessingConfigurationRequest->inputProcessingConfiguration->inputLambdaProcessor->roleARN = 'nam';
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'optio';
    $request->xAmzSignedHeaders = 'totam';
    $request->xAmzTarget = AddApplicationInputProcessingConfigurationXAmzTargetEnum::KINESIS_ANALYTICS20150814_ADD_APPLICATION_INPUT_PROCESSING_CONFIGURATION;

    $response = $sdk->sdk->addApplicationInputProcessingConfiguration($request);

    if ($response->addApplicationInputProcessingConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addApplicationOutput

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Adds an external destination to your Amazon Kinesis Analytics application.</p> <p>If you want Amazon Kinesis Analytics to deliver data from an in-application stream within your application to an external destination (such as an Amazon Kinesis stream, an Amazon Kinesis Firehose delivery stream, or an AWS Lambda function), you add the relevant configuration to your application using this operation. You can configure one or more outputs for your application. Each output configuration maps an in-application stream and an external destination.</p> <p> You can use one of the output configurations to deliver data from your in-application error stream to an external destination so that you can analyze the errors. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html">Understanding Application Output (Destination)</a>. </p> <p> Any configuration update, including adding a streaming source using this operation, results in a new version of the application. You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to find the current application version.</p> <p>For the limits on the number of application inputs and outputs you can configure, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/limits.html">Limits</a>.</p> <p>This operation requires permissions to perform the <code>kinesisanalytics:AddApplicationOutput</code> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddApplicationOutputRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddApplicationOutputRequest;
use \OpenAPI\OpenAPI\Models\Shared\Output;
use \OpenAPI\OpenAPI\Models\Shared\DestinationSchema;
use \OpenAPI\OpenAPI\Models\Shared\RecordFormatTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\KinesisFirehoseOutput;
use \OpenAPI\OpenAPI\Models\Shared\KinesisStreamsOutput;
use \OpenAPI\OpenAPI\Models\Shared\LambdaOutput;
use \OpenAPI\OpenAPI\Models\Operations\AddApplicationOutputXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddApplicationOutputRequest();
    $request->addApplicationOutputRequest = new AddApplicationOutputRequest();
    $request->addApplicationOutputRequest->applicationName = 'beatae';
    $request->addApplicationOutputRequest->currentApplicationVersionId = 414662;
    $request->addApplicationOutputRequest->output = new Output();
    $request->addApplicationOutputRequest->output->destinationSchema = new DestinationSchema();
    $request->addApplicationOutputRequest->output->destinationSchema->recordFormatType = RecordFormatTypeEnum::JSON;
    $request->addApplicationOutputRequest->output->kinesisFirehoseOutput = new KinesisFirehoseOutput();
    $request->addApplicationOutputRequest->output->kinesisFirehoseOutput->resourceARN = 'modi';
    $request->addApplicationOutputRequest->output->kinesisFirehoseOutput->roleARN = 'qui';
    $request->addApplicationOutputRequest->output->kinesisStreamsOutput = new KinesisStreamsOutput();
    $request->addApplicationOutputRequest->output->kinesisStreamsOutput->resourceARN = 'impedit';
    $request->addApplicationOutputRequest->output->kinesisStreamsOutput->roleARN = 'cum';
    $request->addApplicationOutputRequest->output->lambdaOutput = new LambdaOutput();
    $request->addApplicationOutputRequest->output->lambdaOutput->resourceARN = 'esse';
    $request->addApplicationOutputRequest->output->lambdaOutput->roleARN = 'ipsum';
    $request->addApplicationOutputRequest->output->name = 'Brandon Auer';
    $request->xAmzAlgorithm = 'sed';
    $request->xAmzContentSha256 = 'iste';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'laboriosam';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'saepe';
    $request->xAmzTarget = AddApplicationOutputXAmzTargetEnum::KINESIS_ANALYTICS20150814_ADD_APPLICATION_OUTPUT;

    $response = $sdk->sdk->addApplicationOutput($request);

    if ($response->addApplicationOutputResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addApplicationReferenceDataSource

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Adds a reference data source to an existing application.</p> <p>Amazon Kinesis Analytics reads reference data (that is, an Amazon S3 object) and creates an in-application table within your application. In the request, you provide the source (S3 bucket name and object key name), name of the in-application table to create, and the necessary mapping information that describes how data in Amazon S3 object maps to columns in the resulting in-application table.</p> <p> For conceptual information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>. For the limits on data sources you can add to your application, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/limits.html">Limits</a>. </p> <p> This operation requires permissions to perform the <code>kinesisanalytics:AddApplicationOutput</code> action. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddApplicationReferenceDataSourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddApplicationReferenceDataSourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReferenceDataSource;
use \OpenAPI\OpenAPI\Models\Shared\SourceSchema;
use \OpenAPI\OpenAPI\Models\Shared\RecordColumn;
use \OpenAPI\OpenAPI\Models\Shared\RecordFormat;
use \OpenAPI\OpenAPI\Models\Shared\MappingParameters;
use \OpenAPI\OpenAPI\Models\Shared\CSVMappingParameters;
use \OpenAPI\OpenAPI\Models\Shared\JSONMappingParameters;
use \OpenAPI\OpenAPI\Models\Shared\RecordFormatTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\S3ReferenceDataSource;
use \OpenAPI\OpenAPI\Models\Operations\AddApplicationReferenceDataSourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddApplicationReferenceDataSourceRequest();
    $request->addApplicationReferenceDataSourceRequest = new AddApplicationReferenceDataSourceRequest();
    $request->addApplicationReferenceDataSourceRequest->applicationName = 'fuga';
    $request->addApplicationReferenceDataSourceRequest->currentApplicationVersionId = 449950;
    $request->addApplicationReferenceDataSourceRequest->referenceDataSource = new ReferenceDataSource();
    $request->addApplicationReferenceDataSourceRequest->referenceDataSource->referenceSchema = new SourceSchema();
    $request->addApplicationReferenceDataSourceRequest->referenceDataSource->referenceSchema->recordColumns = [
        new RecordColumn(),
        new RecordColumn(),
    ];
    $request->addApplicationReferenceDataSourceRequest->referenceDataSource->referenceSchema->recordEncoding = 'iste';
    $request->addApplicationReferenceDataSourceRequest->referenceDataSource->referenceSchema->recordFormat = new RecordFormat();
    $request->addApplicationReferenceDataSourceRequest->referenceDataSource->referenceSchema->recordFormat->mappingParameters = new MappingParameters();
    $request->addApplicationReferenceDataSourceRequest->referenceDataSource->referenceSchema->recordFormat->mappingParameters->csvMappingParameters = new CSVMappingParameters();
    $request->addApplicationReferenceDataSourceRequest->referenceDataSource->referenceSchema->recordFormat->mappingParameters->csvMappingParameters->recordColumnDelimiter = 'iure';
    $request->addApplicationReferenceDataSourceRequest->referenceDataSource->referenceSchema->recordFormat->mappingParameters->csvMappingParameters->recordRowDelimiter = 'saepe';
    $request->addApplicationReferenceDataSourceRequest->referenceDataSource->referenceSchema->recordFormat->mappingParameters->jsonMappingParameters = new JSONMappingParameters();
    $request->addApplicationReferenceDataSourceRequest->referenceDataSource->referenceSchema->recordFormat->mappingParameters->jsonMappingParameters->recordRowPath = 'quidem';
    $request->addApplicationReferenceDataSourceRequest->referenceDataSource->referenceSchema->recordFormat->recordFormatType = RecordFormatTypeEnum::JSON;
    $request->addApplicationReferenceDataSourceRequest->referenceDataSource->s3ReferenceDataSource = new S3ReferenceDataSource();
    $request->addApplicationReferenceDataSourceRequest->referenceDataSource->s3ReferenceDataSource->bucketARN = 'ipsa';
    $request->addApplicationReferenceDataSourceRequest->referenceDataSource->s3ReferenceDataSource->fileKey = 'reiciendis';
    $request->addApplicationReferenceDataSourceRequest->referenceDataSource->s3ReferenceDataSource->referenceRoleARN = 'est';
    $request->addApplicationReferenceDataSourceRequest->referenceDataSource->tableName = 'mollitia';
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'explicabo';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'enim';
    $request->xAmzTarget = AddApplicationReferenceDataSourceXAmzTargetEnum::KINESIS_ANALYTICS20150814_ADD_APPLICATION_REFERENCE_DATA_SOURCE;

    $response = $sdk->sdk->addApplicationReferenceDataSource($request);

    if ($response->addApplicationReferenceDataSourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createApplication

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p> Creates an Amazon Kinesis Analytics application. You can configure each application with one streaming source as input, application code to process the input, and up to three destinations where you want Amazon Kinesis Analytics to write the output data from your application. For an overview, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works.html">How it Works</a>. </p> <p>In the input configuration, you map the streaming source to an in-application stream, which you can think of as a constantly updating table. In the mapping, you must provide a schema for the in-application stream and map each data column in the in-application stream to a data element in the streaming source.</p> <p>Your application code is one or more SQL statements that read input data, transform it, and generate output. Your application code can create one or more SQL artifacts like SQL streams or pumps.</p> <p>In the output configuration, you can configure the application to write data from in-application streams created in your applications to up to three destinations.</p> <p> To read data from your source stream or write data to destination streams, Amazon Kinesis Analytics needs your permissions. You grant these permissions by creating IAM roles. This operation requires permissions to perform the <code>kinesisanalytics:CreateApplication</code> action. </p> <p> For introductory exercises to create an Amazon Kinesis Analytics application, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/getting-started.html">Getting Started</a>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateApplicationRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateApplicationRequest;
use \OpenAPI\OpenAPI\Models\Shared\CloudWatchLoggingOption;
use \OpenAPI\OpenAPI\Models\Shared\Input;
use \OpenAPI\OpenAPI\Models\Shared\InputParallelism;
use \OpenAPI\OpenAPI\Models\Shared\InputProcessingConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\InputLambdaProcessor;
use \OpenAPI\OpenAPI\Models\Shared\SourceSchema;
use \OpenAPI\OpenAPI\Models\Shared\RecordColumn;
use \OpenAPI\OpenAPI\Models\Shared\RecordFormat;
use \OpenAPI\OpenAPI\Models\Shared\MappingParameters;
use \OpenAPI\OpenAPI\Models\Shared\CSVMappingParameters;
use \OpenAPI\OpenAPI\Models\Shared\JSONMappingParameters;
use \OpenAPI\OpenAPI\Models\Shared\RecordFormatTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\KinesisFirehoseInput;
use \OpenAPI\OpenAPI\Models\Shared\KinesisStreamsInput;
use \OpenAPI\OpenAPI\Models\Shared\Output;
use \OpenAPI\OpenAPI\Models\Shared\DestinationSchema;
use \OpenAPI\OpenAPI\Models\Shared\KinesisFirehoseOutput;
use \OpenAPI\OpenAPI\Models\Shared\KinesisStreamsOutput;
use \OpenAPI\OpenAPI\Models\Shared\LambdaOutput;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateApplicationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateApplicationRequest();
    $request->createApplicationRequest = new CreateApplicationRequest();
    $request->createApplicationRequest->applicationCode = 'omnis';
    $request->createApplicationRequest->applicationDescription = 'nemo';
    $request->createApplicationRequest->applicationName = 'minima';
    $request->createApplicationRequest->cloudWatchLoggingOptions = [
        new CloudWatchLoggingOption(),
        new CloudWatchLoggingOption(),
        new CloudWatchLoggingOption(),
    ];
    $request->createApplicationRequest->inputs = [
        new Input(),
    ];
    $request->createApplicationRequest->outputs = [
        new Output(),
        new Output(),
    ];
    $request->createApplicationRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'doloribus';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'culpa';
    $request->xAmzSignedHeaders = 'consequuntur';
    $request->xAmzTarget = CreateApplicationXAmzTargetEnum::KINESIS_ANALYTICS20150814_CREATE_APPLICATION;

    $response = $sdk->sdk->createApplication($request);

    if ($response->createApplicationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteApplication

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Deletes the specified application. Amazon Kinesis Analytics halts application execution and deletes the application, including any application artifacts (such as in-application streams, reference table, and application code).</p> <p>This operation requires permissions to perform the <code>kinesisanalytics:DeleteApplication</code> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApplicationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteApplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApplicationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteApplicationRequest();
    $request->deleteApplicationRequest = new DeleteApplicationRequest();
    $request->deleteApplicationRequest->applicationName = 'repellat';
    $request->deleteApplicationRequest->createTimestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-02T05:58:55.429Z');
    $request->xAmzAlgorithm = 'numquam';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'quam';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'velit';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'quia';
    $request->xAmzTarget = DeleteApplicationXAmzTargetEnum::KINESIS_ANALYTICS20150814_DELETE_APPLICATION;

    $response = $sdk->sdk->deleteApplication($request);

    if ($response->deleteApplicationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteApplicationCloudWatchLoggingOption

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Deletes a CloudWatch log stream from an application. For more information about using CloudWatch log streams with Amazon Kinesis Analytics applications, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/cloudwatch-logs.html">Working with Amazon CloudWatch Logs</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApplicationCloudWatchLoggingOptionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteApplicationCloudWatchLoggingOptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApplicationCloudWatchLoggingOptionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteApplicationCloudWatchLoggingOptionRequest();
    $request->deleteApplicationCloudWatchLoggingOptionRequest = new DeleteApplicationCloudWatchLoggingOptionRequest();
    $request->deleteApplicationCloudWatchLoggingOptionRequest->applicationName = 'quis';
    $request->deleteApplicationCloudWatchLoggingOptionRequest->cloudWatchLoggingOptionId = 'vitae';
    $request->deleteApplicationCloudWatchLoggingOptionRequest->currentApplicationVersionId = 674752;
    $request->xAmzAlgorithm = 'animi';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'sequi';
    $request->xAmzSignature = 'tenetur';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->xAmzTarget = DeleteApplicationCloudWatchLoggingOptionXAmzTargetEnum::KINESIS_ANALYTICS20150814_DELETE_APPLICATION_CLOUD_WATCH_LOGGING_OPTION;

    $response = $sdk->sdk->deleteApplicationCloudWatchLoggingOption($request);

    if ($response->deleteApplicationCloudWatchLoggingOptionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteApplicationInputProcessingConfiguration

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Deletes an <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html">InputProcessingConfiguration</a> from an input.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApplicationInputProcessingConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteApplicationInputProcessingConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApplicationInputProcessingConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteApplicationInputProcessingConfigurationRequest();
    $request->deleteApplicationInputProcessingConfigurationRequest = new DeleteApplicationInputProcessingConfigurationRequest();
    $request->deleteApplicationInputProcessingConfigurationRequest->applicationName = 'id';
    $request->deleteApplicationInputProcessingConfigurationRequest->currentApplicationVersionId = 820994;
    $request->deleteApplicationInputProcessingConfigurationRequest->inputId = 'aut';
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'temporibus';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'voluptatibus';
    $request->xAmzTarget = DeleteApplicationInputProcessingConfigurationXAmzTargetEnum::KINESIS_ANALYTICS20150814_DELETE_APPLICATION_INPUT_PROCESSING_CONFIGURATION;

    $response = $sdk->sdk->deleteApplicationInputProcessingConfiguration($request);

    if ($response->deleteApplicationInputProcessingConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteApplicationOutput

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Deletes output destination configuration from your application configuration. Amazon Kinesis Analytics will no longer write data from the corresponding in-application stream to the external output destination.</p> <p>This operation requires permissions to perform the <code>kinesisanalytics:DeleteApplicationOutput</code> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApplicationOutputRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteApplicationOutputRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApplicationOutputXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteApplicationOutputRequest();
    $request->deleteApplicationOutputRequest = new DeleteApplicationOutputRequest();
    $request->deleteApplicationOutputRequest->applicationName = 'vero';
    $request->deleteApplicationOutputRequest->currentApplicationVersionId = 468651;
    $request->deleteApplicationOutputRequest->outputId = 'praesentium';
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'cum';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'doloremque';
    $request->xAmzTarget = DeleteApplicationOutputXAmzTargetEnum::KINESIS_ANALYTICS20150814_DELETE_APPLICATION_OUTPUT;

    $response = $sdk->sdk->deleteApplicationOutput($request);

    if ($response->deleteApplicationOutputResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteApplicationReferenceDataSource

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Deletes a reference data source configuration from the specified application configuration.</p> <p>If the application is running, Amazon Kinesis Analytics immediately removes the in-application table that you created using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_AddApplicationReferenceDataSource.html">AddApplicationReferenceDataSource</a> operation. </p> <p>This operation requires permissions to perform the <code>kinesisanalytics.DeleteApplicationReferenceDataSource</code> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApplicationReferenceDataSourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteApplicationReferenceDataSourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApplicationReferenceDataSourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteApplicationReferenceDataSourceRequest();
    $request->deleteApplicationReferenceDataSourceRequest = new DeleteApplicationReferenceDataSourceRequest();
    $request->deleteApplicationReferenceDataSourceRequest->applicationName = 'reprehenderit';
    $request->deleteApplicationReferenceDataSourceRequest->currentApplicationVersionId = 282807;
    $request->deleteApplicationReferenceDataSourceRequest->referenceId = 'maiores';
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'dolore';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'harum';
    $request->xAmzSignedHeaders = 'enim';
    $request->xAmzTarget = DeleteApplicationReferenceDataSourceXAmzTargetEnum::KINESIS_ANALYTICS20150814_DELETE_APPLICATION_REFERENCE_DATA_SOURCE;

    $response = $sdk->sdk->deleteApplicationReferenceDataSource($request);

    if ($response->deleteApplicationReferenceDataSourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeApplication

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Returns information about a specific Amazon Kinesis Analytics application.</p> <p>If you want to retrieve a list of all applications in your account, use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_ListApplications.html">ListApplications</a> operation.</p> <p>This operation requires permissions to perform the <code>kinesisanalytics:DescribeApplication</code> action. You can use <code>DescribeApplication</code> to get the current application versionId, which you need to call other operations such as <code>Update</code>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeApplicationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeApplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeApplicationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeApplicationRequest();
    $request->describeApplicationRequest = new DescribeApplicationRequest();
    $request->describeApplicationRequest->applicationName = 'accusamus';
    $request->xAmzAlgorithm = 'commodi';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'quae';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'molestias';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->xAmzTarget = DescribeApplicationXAmzTargetEnum::KINESIS_ANALYTICS20150814_DESCRIBE_APPLICATION;

    $response = $sdk->sdk->describeApplication($request);

    if ($response->describeApplicationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## discoverInputSchema

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Infers a schema by evaluating sample records on the specified streaming source (Amazon Kinesis stream or Amazon Kinesis Firehose delivery stream) or S3 object. In the response, the operation returns the inferred schema and also the sample records that the operation used to infer the schema.</p> <p> You can use the inferred schema when configuring a streaming source for your application. For conceptual information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>. Note that when you create an application using the Amazon Kinesis Analytics console, the console uses this operation to infer a schema and show it in the console user interface. </p> <p> This operation requires permissions to perform the <code>kinesisanalytics:DiscoverInputSchema</code> action. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DiscoverInputSchemaRequest;
use \OpenAPI\OpenAPI\Models\Shared\DiscoverInputSchemaRequest;
use \OpenAPI\OpenAPI\Models\Shared\InputProcessingConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\InputLambdaProcessor;
use \OpenAPI\OpenAPI\Models\Shared\InputStartingPositionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\InputStartingPositionEnum;
use \OpenAPI\OpenAPI\Models\Shared\S3Configuration;
use \OpenAPI\OpenAPI\Models\Operations\DiscoverInputSchemaXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DiscoverInputSchemaRequest();
    $request->discoverInputSchemaRequest = new DiscoverInputSchemaRequest();
    $request->discoverInputSchemaRequest->inputProcessingConfiguration = new InputProcessingConfiguration();
    $request->discoverInputSchemaRequest->inputProcessingConfiguration->inputLambdaProcessor = new InputLambdaProcessor();
    $request->discoverInputSchemaRequest->inputProcessingConfiguration->inputLambdaProcessor->resourceARN = 'pariatur';
    $request->discoverInputSchemaRequest->inputProcessingConfiguration->inputLambdaProcessor->roleARN = 'modi';
    $request->discoverInputSchemaRequest->inputStartingPositionConfiguration = new InputStartingPositionConfiguration();
    $request->discoverInputSchemaRequest->inputStartingPositionConfiguration->inputStartingPosition = InputStartingPositionEnum::TRIM_HORIZON;
    $request->discoverInputSchemaRequest->resourceARN = 'rem';
    $request->discoverInputSchemaRequest->roleARN = 'voluptates';
    $request->discoverInputSchemaRequest->s3Configuration = new S3Configuration();
    $request->discoverInputSchemaRequest->s3Configuration->bucketARN = 'quasi';
    $request->discoverInputSchemaRequest->s3Configuration->fileKey = 'repudiandae';
    $request->discoverInputSchemaRequest->s3Configuration->roleARN = 'sint';
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'itaque';
    $request->xAmzCredential = 'incidunt';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'consequatur';
    $request->xAmzSignature = 'est';
    $request->xAmzSignedHeaders = 'quibusdam';
    $request->xAmzTarget = DiscoverInputSchemaXAmzTargetEnum::KINESIS_ANALYTICS20150814_DISCOVER_INPUT_SCHEMA;

    $response = $sdk->sdk->discoverInputSchema($request);

    if ($response->discoverInputSchemaResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listApplications

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Returns a list of Amazon Kinesis Analytics applications in your account. For each application, the response includes the application name, Amazon Resource Name (ARN), and status. If the response returns the <code>HasMoreApplications</code> value as true, you can send another request by adding the <code>ExclusiveStartApplicationName</code> in the request body, and set the value of this to the last application name from the previous response. </p> <p>If you want detailed information about a specific application, use <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a>.</p> <p>This operation requires permissions to perform the <code>kinesisanalytics:ListApplications</code> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListApplicationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListApplicationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListApplicationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListApplicationsRequest();
    $request->listApplicationsRequest = new ListApplicationsRequest();
    $request->listApplicationsRequest->exclusiveStartApplicationName = 'explicabo';
    $request->listApplicationsRequest->limit = 647174;
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'cupiditate';
    $request->xAmzTarget = ListApplicationsXAmzTargetEnum::KINESIS_ANALYTICS20150814_LIST_APPLICATIONS;

    $response = $sdk->sdk->listApplications($request);

    if ($response->listApplicationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Retrieves the list of key-value tags assigned to the application. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-tagging.html">Using Tagging</a>.

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
    $request->listTagsForResourceRequest->resourceARN = 'quos';
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'magni';
    $request->xAmzCredential = 'assumenda';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'alias';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->xAmzTarget = ListTagsForResourceXAmzTargetEnum::KINESIS_ANALYTICS20150814_LIST_TAGS_FOR_RESOURCE;

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startApplication

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Starts the specified Amazon Kinesis Analytics application. After creating an application, you must exclusively call this operation to start your application.</p> <p>After the application starts, it begins consuming the input data, processes it, and writes the output to the configured destination.</p> <p> The application status must be <code>READY</code> for you to start an application. You can get the application status in the console or using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation.</p> <p>After you start the application, you can stop the application from processing the input by calling the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_StopApplication.html">StopApplication</a> operation.</p> <p>This operation requires permissions to perform the <code>kinesisanalytics:StartApplication</code> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartApplicationRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartApplicationRequest;
use \OpenAPI\OpenAPI\Models\Shared\InputConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\InputStartingPositionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\InputStartingPositionEnum;
use \OpenAPI\OpenAPI\Models\Operations\StartApplicationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartApplicationRequest();
    $request->startApplicationRequest = new StartApplicationRequest();
    $request->startApplicationRequest->applicationName = 'excepturi';
    $request->startApplicationRequest->inputConfigurations = [
        new InputConfiguration(),
        new InputConfiguration(),
    ];
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'tempore';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'non';
    $request->xAmzSignedHeaders = 'eligendi';
    $request->xAmzTarget = StartApplicationXAmzTargetEnum::KINESIS_ANALYTICS20150814_START_APPLICATION;

    $response = $sdk->sdk->startApplication($request);

    if ($response->startApplicationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopApplication

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Stops the application from processing input data. You can stop an application only if it is in the running state. You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to find the application state. After the application is stopped, Amazon Kinesis Analytics stops reading data from the input, the application stops processing data, and there is no output written to the destination. </p> <p>This operation requires permissions to perform the <code>kinesisanalytics:StopApplication</code> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopApplicationRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopApplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopApplicationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopApplicationRequest();
    $request->stopApplicationRequest = new StopApplicationRequest();
    $request->stopApplicationRequest->applicationName = 'sint';
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'officia';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'debitis';
    $request->xAmzTarget = StopApplicationXAmzTargetEnum::KINESIS_ANALYTICS20150814_STOP_APPLICATION;

    $response = $sdk->sdk->stopApplication($request);

    if ($response->stopApplicationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Adds one or more key-value tags to a Kinesis Analytics application. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-tagging.html">Using Tagging</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->tagResourceRequest = new TagResourceRequest();
    $request->tagResourceRequest->resourceARN = 'a';
    $request->tagResourceRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'rerum';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'magnam';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::KINESIS_ANALYTICS20150814_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes one or more tags from a Kinesis Analytics application. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-tagging.html">Using Tagging</a>.

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
    $request->untagResourceRequest->resourceARN = 'cumque';
    $request->untagResourceRequest->tagKeys = [
        'ea',
        'aliquid',
        'laborum',
        'accusamus',
    ];
    $request->xAmzAlgorithm = 'non';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'provident';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::KINESIS_ANALYTICS20150814_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateApplication

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Updates an existing Amazon Kinesis Analytics application. Using this API, you can update application code, input configuration, and output configuration. </p> <p>Note that Amazon Kinesis Analytics updates the <code>CurrentApplicationVersionId</code> each time you update your application. </p> <p>This operation requires permission for the <code>kinesisanalytics:UpdateApplication</code> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApplicationRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateApplicationRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApplicationUpdate;
use \OpenAPI\OpenAPI\Models\Shared\CloudWatchLoggingOptionUpdate;
use \OpenAPI\OpenAPI\Models\Shared\InputUpdate;
use \OpenAPI\OpenAPI\Models\Shared\InputParallelismUpdate;
use \OpenAPI\OpenAPI\Models\Shared\InputProcessingConfigurationUpdate;
use \OpenAPI\OpenAPI\Models\Shared\InputLambdaProcessorUpdate;
use \OpenAPI\OpenAPI\Models\Shared\InputSchemaUpdate;
use \OpenAPI\OpenAPI\Models\Shared\RecordColumn;
use \OpenAPI\OpenAPI\Models\Shared\RecordFormat;
use \OpenAPI\OpenAPI\Models\Shared\MappingParameters;
use \OpenAPI\OpenAPI\Models\Shared\CSVMappingParameters;
use \OpenAPI\OpenAPI\Models\Shared\JSONMappingParameters;
use \OpenAPI\OpenAPI\Models\Shared\RecordFormatTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\KinesisFirehoseInputUpdate;
use \OpenAPI\OpenAPI\Models\Shared\KinesisStreamsInputUpdate;
use \OpenAPI\OpenAPI\Models\Shared\OutputUpdate;
use \OpenAPI\OpenAPI\Models\Shared\DestinationSchema;
use \OpenAPI\OpenAPI\Models\Shared\KinesisFirehoseOutputUpdate;
use \OpenAPI\OpenAPI\Models\Shared\KinesisStreamsOutputUpdate;
use \OpenAPI\OpenAPI\Models\Shared\LambdaOutputUpdate;
use \OpenAPI\OpenAPI\Models\Shared\ReferenceDataSourceUpdate;
use \OpenAPI\OpenAPI\Models\Shared\SourceSchema;
use \OpenAPI\OpenAPI\Models\Shared\S3ReferenceDataSourceUpdate;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApplicationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateApplicationRequest();
    $request->updateApplicationRequest = new UpdateApplicationRequest();
    $request->updateApplicationRequest->applicationName = 'nam';
    $request->updateApplicationRequest->applicationUpdate = new ApplicationUpdate();
    $request->updateApplicationRequest->applicationUpdate->applicationCodeUpdate = 'id';
    $request->updateApplicationRequest->applicationUpdate->cloudWatchLoggingOptionUpdates = [
        new CloudWatchLoggingOptionUpdate(),
        new CloudWatchLoggingOptionUpdate(),
        new CloudWatchLoggingOptionUpdate(),
    ];
    $request->updateApplicationRequest->applicationUpdate->inputUpdates = [
        new InputUpdate(),
        new InputUpdate(),
        new InputUpdate(),
    ];
    $request->updateApplicationRequest->applicationUpdate->outputUpdates = [
        new OutputUpdate(),
        new OutputUpdate(),
        new OutputUpdate(),
        new OutputUpdate(),
    ];
    $request->updateApplicationRequest->applicationUpdate->referenceDataSourceUpdates = [
        new ReferenceDataSourceUpdate(),
    ];
    $request->updateApplicationRequest->currentApplicationVersionId = 643990;
    $request->xAmzAlgorithm = 'nisi';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'nihil';
    $request->xAmzTarget = UpdateApplicationXAmzTargetEnum::KINESIS_ANALYTICS20150814_UPDATE_APPLICATION;

    $response = $sdk->sdk->updateApplication($request);

    if ($response->updateApplicationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
