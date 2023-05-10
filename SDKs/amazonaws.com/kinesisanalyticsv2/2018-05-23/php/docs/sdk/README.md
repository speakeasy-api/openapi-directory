# SDK

## Overview

Amazon Kinesis Data Analytics is a fully managed service that you can use to process and analyze streaming data using Java, SQL, or Scala. The service enables you to quickly author and run Java, SQL, or Scala code against streaming sources to perform time series analytics, feed real-time dashboards, and create real-time metrics.

Amazon Web Services documentation
<https://docs.aws.amazon.com/kinesisanalytics/>
### Available Operations

* [addApplicationCloudWatchLoggingOption](#addapplicationcloudwatchloggingoption) - Adds an Amazon CloudWatch log stream to monitor application configuration errors.
* [addApplicationInput](#addapplicationinput) - <p> Adds a streaming source to your SQL-based Kinesis Data Analytics application. </p> <p>You can add a streaming source when you create an application, or you can use this operation to add a streaming source after you create an application. For more information, see <a>CreateApplication</a>.</p> <p>Any configuration update, including adding a streaming source using this operation, results in a new version of the application. You can use the <a>DescribeApplication</a> operation to find the current application version. </p>
* [addApplicationInputProcessingConfiguration](#addapplicationinputprocessingconfiguration) - Adds an <a>InputProcessingConfiguration</a> to a SQL-based Kinesis Data Analytics application. An input processor pre-processes records on the input stream before the application's SQL code executes. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">Amazon Lambda</a>.
* [addApplicationOutput](#addapplicationoutput) - <p>Adds an external destination to your SQL-based Kinesis Data Analytics application.</p> <p>If you want Kinesis Data Analytics to deliver data from an in-application stream within your application to an external destination (such as an Kinesis data stream, a Kinesis Data Firehose delivery stream, or an Amazon Lambda function), you add the relevant configuration to your application using this operation. You can configure one or more outputs for your application. Each output configuration maps an in-application stream and an external destination.</p> <p> You can use one of the output configurations to deliver data from your in-application error stream to an external destination so that you can analyze the errors. </p> <p> Any configuration update, including adding a streaming source using this operation, results in a new version of the application. You can use the <a>DescribeApplication</a> operation to find the current application version.</p>
* [addApplicationReferenceDataSource](#addapplicationreferencedatasource) - <p>Adds a reference data source to an existing SQL-based Kinesis Data Analytics application.</p> <p>Kinesis Data Analytics reads reference data (that is, an Amazon S3 object) and creates an in-application table within your application. In the request, you provide the source (S3 bucket name and object key name), name of the in-application table to create, and the necessary mapping information that describes how data in an Amazon S3 object maps to columns in the resulting in-application table.</p>
* [addApplicationVpcConfiguration](#addapplicationvpcconfiguration) - <p>Adds a Virtual Private Cloud (VPC) configuration to the application. Applications can use VPCs to store and access resources securely.</p> <p>Note the following about VPC configurations for Kinesis Data Analytics applications:</p> <ul> <li> <p>VPC configurations are not supported for SQL applications.</p> </li> <li> <p>When a VPC is added to a Kinesis Data Analytics application, the application can no longer be accessed from the Internet directly. To enable Internet access to the application, add an Internet gateway to your VPC.</p> </li> </ul>
* [createApplication](#createapplication) - Creates a Kinesis Data Analytics application. For information about creating a Kinesis Data Analytics application, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/getting-started.html">Creating an Application</a>.
* [createApplicationPresignedUrl](#createapplicationpresignedurl) - <p>Creates and returns a URL that you can use to connect to an application's extension.</p> <p>The IAM role or user used to call this API defines the permissions to access the extension. After the presigned URL is created, no additional permission is required to access this URL. IAM authorization policies for this API are also enforced for every HTTP request that attempts to connect to the extension. </p> <p>You control the amount of time that the URL will be valid using the <code>SessionExpirationDurationInSeconds</code> parameter. If you do not provide this parameter, the returned URL is valid for twelve hours.</p> <note> <p>The URL that you get from a call to CreateApplicationPresignedUrl must be used within 3 minutes to be valid. If you first try to use the URL after the 3-minute limit expires, the service returns an HTTP 403 Forbidden error.</p> </note>
* [createApplicationSnapshot](#createapplicationsnapshot) - Creates a snapshot of the application's state data.
* [deleteApplication](#deleteapplication) - Deletes the specified application. Kinesis Data Analytics halts application execution and deletes the application.
* [deleteApplicationCloudWatchLoggingOption](#deleteapplicationcloudwatchloggingoption) - Deletes an Amazon CloudWatch log stream from an Kinesis Data Analytics application. 
* [deleteApplicationInputProcessingConfiguration](#deleteapplicationinputprocessingconfiguration) - Deletes an <a>InputProcessingConfiguration</a> from an input.
* [deleteApplicationOutput](#deleteapplicationoutput) - Deletes the output destination configuration from your SQL-based Kinesis Data Analytics application's configuration. Kinesis Data Analytics will no longer write data from the corresponding in-application stream to the external output destination.
* [deleteApplicationReferenceDataSource](#deleteapplicationreferencedatasource) - <p>Deletes a reference data source configuration from the specified SQL-based Kinesis Data Analytics application's configuration.</p> <p>If the application is running, Kinesis Data Analytics immediately removes the in-application table that you created using the <a>AddApplicationReferenceDataSource</a> operation. </p>
* [deleteApplicationSnapshot](#deleteapplicationsnapshot) - Deletes a snapshot of application state.
* [deleteApplicationVpcConfiguration](#deleteapplicationvpcconfiguration) - Removes a VPC configuration from a Kinesis Data Analytics application.
* [describeApplication](#describeapplication) - <p>Returns information about a specific Kinesis Data Analytics application.</p> <p>If you want to retrieve a list of all applications in your account, use the <a>ListApplications</a> operation.</p>
* [describeApplicationSnapshot](#describeapplicationsnapshot) - Returns information about a snapshot of application state data.
* [describeApplicationVersion](#describeapplicationversion) - <p>Provides a detailed description of a specified version of the application. To see a list of all the versions of an application, invoke the <a>ListApplicationVersions</a> operation.</p> <note> <p>This operation is supported only for Amazon Kinesis Data Analytics for Apache Flink.</p> </note>
* [discoverInputSchema](#discoverinputschema) - <p>Infers a schema for a SQL-based Kinesis Data Analytics application by evaluating sample records on the specified streaming source (Kinesis data stream or Kinesis Data Firehose delivery stream) or Amazon S3 object. In the response, the operation returns the inferred schema and also the sample records that the operation used to infer the schema.</p> <p> You can use the inferred schema when configuring a streaming source for your application. When you create an application using the Kinesis Data Analytics console, the console uses this operation to infer a schema and show it in the console user interface. </p>
* [listApplicationSnapshots](#listapplicationsnapshots) - Lists information about the current application snapshots.
* [listApplicationVersions](#listapplicationversions) - <p>Lists all the versions for the specified application, including versions that were rolled back. The response also includes a summary of the configuration associated with each version.</p> <p>To get the complete description of a specific application version, invoke the <a>DescribeApplicationVersion</a> operation.</p> <note> <p>This operation is supported only for Amazon Kinesis Data Analytics for Apache Flink.</p> </note>
* [listApplications](#listapplications) - <p>Returns a list of Kinesis Data Analytics applications in your account. For each application, the response includes the application name, Amazon Resource Name (ARN), and status. </p> <p>If you want detailed information about a specific application, use <a>DescribeApplication</a>.</p>
* [listTagsForResource](#listtagsforresource) - Retrieves the list of key-value tags assigned to the application. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/how-tagging.html">Using Tagging</a>.
* [rollbackApplication](#rollbackapplication) - <p>Reverts the application to the previous running version. You can roll back an application if you suspect it is stuck in a transient status. </p> <p>You can roll back an application only if it is in the <code>UPDATING</code> or <code>AUTOSCALING</code> status.</p> <p>When you rollback an application, it loads state data from the last successful snapshot. If the application has no snapshots, Kinesis Data Analytics rejects the rollback request.</p> <p>This action is not supported for Kinesis Data Analytics for SQL applications.</p>
* [startApplication](#startapplication) - Starts the specified Kinesis Data Analytics application. After creating an application, you must exclusively call this operation to start your application.
* [stopApplication](#stopapplication) - <p>Stops the application from processing data. You can stop an application only if it is in the running status, unless you set the <code>Force</code> parameter to <code>true</code>.</p> <p>You can use the <a>DescribeApplication</a> operation to find the application status. </p> <p>Kinesis Data Analytics takes a snapshot when the application is stopped, unless <code>Force</code> is set to <code>true</code>.</p>
* [tagResource](#tagresource) - Adds one or more key-value tags to a Kinesis Data Analytics application. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/how-tagging.html">Using Tagging</a>.
* [untagResource](#untagresource) - Removes one or more tags from a Kinesis Data Analytics application. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/how-tagging.html">Using Tagging</a>.
* [updateApplication](#updateapplication) - <p>Updates an existing Kinesis Data Analytics application. Using this operation, you can update application code, input configuration, and output configuration. </p> <p>Kinesis Data Analytics updates the <code>ApplicationVersionId</code> each time you update your application. </p> <note> <p>You cannot update the <code>RuntimeEnvironment</code> of an existing application. If you need to update an application's <code>RuntimeEnvironment</code>, you must delete the application and create it again.</p> </note>
* [updateApplicationMaintenanceConfiguration](#updateapplicationmaintenanceconfiguration) - <p>Updates the maintenance configuration of the Kinesis Data Analytics application. </p> <p>You can invoke this operation on an application that is in one of the two following states: <code>READY</code> or <code>RUNNING</code>. If you invoke it when the application is in a state other than these two states, it throws a <code>ResourceInUseException</code>. The service makes use of the updated configuration the next time it schedules maintenance for the application. If you invoke this operation after the service schedules maintenance, the service will apply the configuration update the next time it schedules maintenance for the application. This means that you might not see the maintenance configuration update applied to the maintenance process that follows a successful invocation of this operation, but to the following maintenance process instead.</p> <p>To see the current maintenance configuration of your application, invoke the <a>DescribeApplication</a> operation.</p> <p>For information about application maintenance, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/maintenance.html">Kinesis Data Analytics for Apache Flink Maintenance</a>.</p> <note> <p>This operation is supported only for Amazon Kinesis Data Analytics for Apache Flink.</p> </note>

## addApplicationCloudWatchLoggingOption

Adds an Amazon CloudWatch log stream to monitor application configuration errors.

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
    $request->addApplicationCloudWatchLoggingOptionRequest->conditionalToken = 'magnam';
    $request->addApplicationCloudWatchLoggingOptionRequest->currentApplicationVersionId = 891773;
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'minus';
    $request->xAmzSignedHeaders = 'placeat';
    $request->xAmzTarget = AddApplicationCloudWatchLoggingOptionXAmzTargetEnum::KINESIS_ANALYTICS20180523_ADD_APPLICATION_CLOUD_WATCH_LOGGING_OPTION;

    $response = $sdk->sdk->addApplicationCloudWatchLoggingOption($request);

    if ($response->addApplicationCloudWatchLoggingOptionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addApplicationInput

<p> Adds a streaming source to your SQL-based Kinesis Data Analytics application. </p> <p>You can add a streaming source when you create an application, or you can use this operation to add a streaming source after you create an application. For more information, see <a>CreateApplication</a>.</p> <p>Any configuration update, including adding a streaming source using this operation, results in a new version of the application. You can use the <a>DescribeApplication</a> operation to find the current application version. </p>

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
    $request->addApplicationInputRequest->input->inputSchema = new SourceSchema();
    $request->addApplicationInputRequest->input->inputSchema->recordColumns = [
        new RecordColumn(),
        new RecordColumn(),
        new RecordColumn(),
        new RecordColumn(),
    ];
    $request->addApplicationInputRequest->input->inputSchema->recordEncoding = 'temporibus';
    $request->addApplicationInputRequest->input->inputSchema->recordFormat = new RecordFormat();
    $request->addApplicationInputRequest->input->inputSchema->recordFormat->mappingParameters = new MappingParameters();
    $request->addApplicationInputRequest->input->inputSchema->recordFormat->mappingParameters->csvMappingParameters = new CSVMappingParameters();
    $request->addApplicationInputRequest->input->inputSchema->recordFormat->mappingParameters->csvMappingParameters->recordColumnDelimiter = 'ab';
    $request->addApplicationInputRequest->input->inputSchema->recordFormat->mappingParameters->csvMappingParameters->recordRowDelimiter = 'quis';
    $request->addApplicationInputRequest->input->inputSchema->recordFormat->mappingParameters->jsonMappingParameters = new JSONMappingParameters();
    $request->addApplicationInputRequest->input->inputSchema->recordFormat->mappingParameters->jsonMappingParameters->recordRowPath = 'veritatis';
    $request->addApplicationInputRequest->input->inputSchema->recordFormat->recordFormatType = RecordFormatTypeEnum::CSV;
    $request->addApplicationInputRequest->input->kinesisFirehoseInput = new KinesisFirehoseInput();
    $request->addApplicationInputRequest->input->kinesisFirehoseInput->resourceARN = 'perferendis';
    $request->addApplicationInputRequest->input->kinesisStreamsInput = new KinesisStreamsInput();
    $request->addApplicationInputRequest->input->kinesisStreamsInput->resourceARN = 'ipsam';
    $request->addApplicationInputRequest->input->namePrefix = 'repellendus';
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'at';
    $request->xAmzSecurityToken = 'at';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->xAmzTarget = AddApplicationInputXAmzTargetEnum::KINESIS_ANALYTICS20180523_ADD_APPLICATION_INPUT;

    $response = $sdk->sdk->addApplicationInput($request);

    if ($response->addApplicationInputResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addApplicationInputProcessingConfiguration

Adds an <a>InputProcessingConfiguration</a> to a SQL-based Kinesis Data Analytics application. An input processor pre-processes records on the input stream before the application's SQL code executes. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">Amazon Lambda</a>.

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
    $request->addApplicationInputProcessingConfigurationRequest->applicationName = 'quod';
    $request->addApplicationInputProcessingConfigurationRequest->currentApplicationVersionId = 800911;
    $request->addApplicationInputProcessingConfigurationRequest->inputId = 'esse';
    $request->addApplicationInputProcessingConfigurationRequest->inputProcessingConfiguration = new InputProcessingConfiguration();
    $request->addApplicationInputProcessingConfigurationRequest->inputProcessingConfiguration->inputLambdaProcessor = new InputLambdaProcessor();
    $request->addApplicationInputProcessingConfigurationRequest->inputProcessingConfiguration->inputLambdaProcessor->resourceARN = 'totam';
    $request->xAmzAlgorithm = 'porro';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'nam';
    $request->xAmzSecurityToken = 'officia';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'fugit';
    $request->xAmzTarget = AddApplicationInputProcessingConfigurationXAmzTargetEnum::KINESIS_ANALYTICS20180523_ADD_APPLICATION_INPUT_PROCESSING_CONFIGURATION;

    $response = $sdk->sdk->addApplicationInputProcessingConfiguration($request);

    if ($response->addApplicationInputProcessingConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addApplicationOutput

<p>Adds an external destination to your SQL-based Kinesis Data Analytics application.</p> <p>If you want Kinesis Data Analytics to deliver data from an in-application stream within your application to an external destination (such as an Kinesis data stream, a Kinesis Data Firehose delivery stream, or an Amazon Lambda function), you add the relevant configuration to your application using this operation. You can configure one or more outputs for your application. Each output configuration maps an in-application stream and an external destination.</p> <p> You can use one of the output configurations to deliver data from your in-application error stream to an external destination so that you can analyze the errors. </p> <p> Any configuration update, including adding a streaming source using this operation, results in a new version of the application. You can use the <a>DescribeApplication</a> operation to find the current application version.</p>

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
    $request->addApplicationOutputRequest->applicationName = 'deleniti';
    $request->addApplicationOutputRequest->currentApplicationVersionId = 944669;
    $request->addApplicationOutputRequest->output = new Output();
    $request->addApplicationOutputRequest->output->destinationSchema = new DestinationSchema();
    $request->addApplicationOutputRequest->output->destinationSchema->recordFormatType = RecordFormatTypeEnum::CSV;
    $request->addApplicationOutputRequest->output->kinesisFirehoseOutput = new KinesisFirehoseOutput();
    $request->addApplicationOutputRequest->output->kinesisFirehoseOutput->resourceARN = 'totam';
    $request->addApplicationOutputRequest->output->kinesisStreamsOutput = new KinesisStreamsOutput();
    $request->addApplicationOutputRequest->output->kinesisStreamsOutput->resourceARN = 'beatae';
    $request->addApplicationOutputRequest->output->lambdaOutput = new LambdaOutput();
    $request->addApplicationOutputRequest->output->lambdaOutput->resourceARN = 'commodi';
    $request->addApplicationOutputRequest->output->name = 'Pauline Dibbert';
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'ad';
    $request->xAmzSignedHeaders = 'natus';
    $request->xAmzTarget = AddApplicationOutputXAmzTargetEnum::KINESIS_ANALYTICS20180523_ADD_APPLICATION_OUTPUT;

    $response = $sdk->sdk->addApplicationOutput($request);

    if ($response->addApplicationOutputResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addApplicationReferenceDataSource

<p>Adds a reference data source to an existing SQL-based Kinesis Data Analytics application.</p> <p>Kinesis Data Analytics reads reference data (that is, an Amazon S3 object) and creates an in-application table within your application. In the request, you provide the source (S3 bucket name and object key name), name of the in-application table to create, and the necessary mapping information that describes how data in an Amazon S3 object maps to columns in the resulting in-application table.</p>

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
    $request->addApplicationReferenceDataSourceRequest->applicationName = 'sed';
    $request->addApplicationReferenceDataSourceRequest->currentApplicationVersionId = 612096;
    $request->addApplicationReferenceDataSourceRequest->referenceDataSource = new ReferenceDataSource();
    $request->addApplicationReferenceDataSourceRequest->referenceDataSource->referenceSchema = new SourceSchema();
    $request->addApplicationReferenceDataSourceRequest->referenceDataSource->referenceSchema->recordColumns = [
        new RecordColumn(),
    ];
    $request->addApplicationReferenceDataSourceRequest->referenceDataSource->referenceSchema->recordEncoding = 'natus';
    $request->addApplicationReferenceDataSourceRequest->referenceDataSource->referenceSchema->recordFormat = new RecordFormat();
    $request->addApplicationReferenceDataSourceRequest->referenceDataSource->referenceSchema->recordFormat->mappingParameters = new MappingParameters();
    $request->addApplicationReferenceDataSourceRequest->referenceDataSource->referenceSchema->recordFormat->mappingParameters->csvMappingParameters = new CSVMappingParameters();
    $request->addApplicationReferenceDataSourceRequest->referenceDataSource->referenceSchema->recordFormat->mappingParameters->csvMappingParameters->recordColumnDelimiter = 'laboriosam';
    $request->addApplicationReferenceDataSourceRequest->referenceDataSource->referenceSchema->recordFormat->mappingParameters->csvMappingParameters->recordRowDelimiter = 'hic';
    $request->addApplicationReferenceDataSourceRequest->referenceDataSource->referenceSchema->recordFormat->mappingParameters->jsonMappingParameters = new JSONMappingParameters();
    $request->addApplicationReferenceDataSourceRequest->referenceDataSource->referenceSchema->recordFormat->mappingParameters->jsonMappingParameters->recordRowPath = 'saepe';
    $request->addApplicationReferenceDataSourceRequest->referenceDataSource->referenceSchema->recordFormat->recordFormatType = RecordFormatTypeEnum::CSV;
    $request->addApplicationReferenceDataSourceRequest->referenceDataSource->s3ReferenceDataSource = new S3ReferenceDataSource();
    $request->addApplicationReferenceDataSourceRequest->referenceDataSource->s3ReferenceDataSource->bucketARN = 'in';
    $request->addApplicationReferenceDataSourceRequest->referenceDataSource->s3ReferenceDataSource->fileKey = 'corporis';
    $request->addApplicationReferenceDataSourceRequest->referenceDataSource->tableName = 'iste';
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'est';
    $request->xAmzTarget = AddApplicationReferenceDataSourceXAmzTargetEnum::KINESIS_ANALYTICS20180523_ADD_APPLICATION_REFERENCE_DATA_SOURCE;

    $response = $sdk->sdk->addApplicationReferenceDataSource($request);

    if ($response->addApplicationReferenceDataSourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addApplicationVpcConfiguration

<p>Adds a Virtual Private Cloud (VPC) configuration to the application. Applications can use VPCs to store and access resources securely.</p> <p>Note the following about VPC configurations for Kinesis Data Analytics applications:</p> <ul> <li> <p>VPC configurations are not supported for SQL applications.</p> </li> <li> <p>When a VPC is added to a Kinesis Data Analytics application, the application can no longer be accessed from the Internet directly. To enable Internet access to the application, add an Internet gateway to your VPC.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddApplicationVpcConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddApplicationVpcConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\VpcConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\AddApplicationVpcConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddApplicationVpcConfigurationRequest();
    $request->addApplicationVpcConfigurationRequest = new AddApplicationVpcConfigurationRequest();
    $request->addApplicationVpcConfigurationRequest->applicationName = 'mollitia';
    $request->addApplicationVpcConfigurationRequest->conditionalToken = 'laborum';
    $request->addApplicationVpcConfigurationRequest->currentApplicationVersionId = 170909;
    $request->addApplicationVpcConfigurationRequest->vpcConfiguration = new VpcConfiguration();
    $request->addApplicationVpcConfigurationRequest->vpcConfiguration->securityGroupIds = [
        'corporis',
    ];
    $request->addApplicationVpcConfigurationRequest->vpcConfiguration->subnetIds = [
        'nobis',
    ];
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'nemo';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'accusantium';
    $request->xAmzSignedHeaders = 'iure';
    $request->xAmzTarget = AddApplicationVpcConfigurationXAmzTargetEnum::KINESIS_ANALYTICS20180523_ADD_APPLICATION_VPC_CONFIGURATION;

    $response = $sdk->sdk->addApplicationVpcConfiguration($request);

    if ($response->addApplicationVpcConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createApplication

Creates a Kinesis Data Analytics application. For information about creating a Kinesis Data Analytics application, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/getting-started.html">Creating an Application</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateApplicationRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateApplicationRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApplicationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ApplicationCodeConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\CodeContent;
use \OpenAPI\OpenAPI\Models\Shared\S3ContentLocation;
use \OpenAPI\OpenAPI\Models\Shared\CodeContentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApplicationSnapshotConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentProperties;
use \OpenAPI\OpenAPI\Models\Shared\PropertyGroup;
use \OpenAPI\OpenAPI\Models\Shared\FlinkApplicationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\CheckpointConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ConfigurationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\LogLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetricsLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\ParallelismConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\SqlApplicationConfiguration;
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
use \OpenAPI\OpenAPI\Models\Shared\ReferenceDataSource;
use \OpenAPI\OpenAPI\Models\Shared\S3ReferenceDataSource;
use \OpenAPI\OpenAPI\Models\Shared\VpcConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ZeppelinApplicationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\CatalogConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\GlueDataCatalogConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\CustomArtifactConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ArtifactTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MavenReference;
use \OpenAPI\OpenAPI\Models\Shared\DeployAsApplicationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\S3ContentBaseLocation;
use \OpenAPI\OpenAPI\Models\Shared\ZeppelinMonitoringConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ApplicationModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CloudWatchLoggingOption;
use \OpenAPI\OpenAPI\Models\Shared\RuntimeEnvironmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateApplicationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateApplicationRequest();
    $request->createApplicationRequest = new CreateApplicationRequest();
    $request->createApplicationRequest->applicationConfiguration = new ApplicationConfiguration();
    $request->createApplicationRequest->applicationConfiguration->applicationCodeConfiguration = new ApplicationCodeConfiguration();
    $request->createApplicationRequest->applicationConfiguration->applicationCodeConfiguration->codeContent = new CodeContent();
    $request->createApplicationRequest->applicationConfiguration->applicationCodeConfiguration->codeContent->s3ContentLocation = new S3ContentLocation();
    $request->createApplicationRequest->applicationConfiguration->applicationCodeConfiguration->codeContent->s3ContentLocation->bucketARN = 'culpa';
    $request->createApplicationRequest->applicationConfiguration->applicationCodeConfiguration->codeContent->s3ContentLocation->fileKey = 'doloribus';
    $request->createApplicationRequest->applicationConfiguration->applicationCodeConfiguration->codeContent->s3ContentLocation->objectVersion = 'sapiente';
    $request->createApplicationRequest->applicationConfiguration->applicationCodeConfiguration->codeContent->textContent = 'architecto';
    $request->createApplicationRequest->applicationConfiguration->applicationCodeConfiguration->codeContent->zipFileContent = 'mollitia';
    $request->createApplicationRequest->applicationConfiguration->applicationCodeConfiguration->codeContentType = CodeContentTypeEnum::PLAINTEXT;
    $request->createApplicationRequest->applicationConfiguration->applicationSnapshotConfiguration = new ApplicationSnapshotConfiguration();
    $request->createApplicationRequest->applicationConfiguration->applicationSnapshotConfiguration->snapshotsEnabled = false;
    $request->createApplicationRequest->applicationConfiguration->environmentProperties = new EnvironmentProperties();
    $request->createApplicationRequest->applicationConfiguration->environmentProperties->propertyGroups = [
        new PropertyGroup(),
        new PropertyGroup(),
        new PropertyGroup(),
    ];
    $request->createApplicationRequest->applicationConfiguration->flinkApplicationConfiguration = new FlinkApplicationConfiguration();
    $request->createApplicationRequest->applicationConfiguration->flinkApplicationConfiguration->checkpointConfiguration = new CheckpointConfiguration();
    $request->createApplicationRequest->applicationConfiguration->flinkApplicationConfiguration->checkpointConfiguration->checkpointInterval = 161309;
    $request->createApplicationRequest->applicationConfiguration->flinkApplicationConfiguration->checkpointConfiguration->checkpointingEnabled = false;
    $request->createApplicationRequest->applicationConfiguration->flinkApplicationConfiguration->checkpointConfiguration->configurationType = ConfigurationTypeEnum::CUSTOM;
    $request->createApplicationRequest->applicationConfiguration->flinkApplicationConfiguration->checkpointConfiguration->minPauseBetweenCheckpoints = 653108;
    $request->createApplicationRequest->applicationConfiguration->flinkApplicationConfiguration->monitoringConfiguration = new MonitoringConfiguration();
    $request->createApplicationRequest->applicationConfiguration->flinkApplicationConfiguration->monitoringConfiguration->configurationType = ConfigurationTypeEnum::CUSTOM;
    $request->createApplicationRequest->applicationConfiguration->flinkApplicationConfiguration->monitoringConfiguration->logLevel = LogLevelEnum::WARN;
    $request->createApplicationRequest->applicationConfiguration->flinkApplicationConfiguration->monitoringConfiguration->metricsLevel = MetricsLevelEnum::TASK;
    $request->createApplicationRequest->applicationConfiguration->flinkApplicationConfiguration->parallelismConfiguration = new ParallelismConfiguration();
    $request->createApplicationRequest->applicationConfiguration->flinkApplicationConfiguration->parallelismConfiguration->autoScalingEnabled = false;
    $request->createApplicationRequest->applicationConfiguration->flinkApplicationConfiguration->parallelismConfiguration->configurationType = ConfigurationTypeEnum::DEFAULT;
    $request->createApplicationRequest->applicationConfiguration->flinkApplicationConfiguration->parallelismConfiguration->parallelism = 474697;
    $request->createApplicationRequest->applicationConfiguration->flinkApplicationConfiguration->parallelismConfiguration->parallelismPerKPU = 244425;
    $request->createApplicationRequest->applicationConfiguration->sqlApplicationConfiguration = new SqlApplicationConfiguration();
    $request->createApplicationRequest->applicationConfiguration->sqlApplicationConfiguration->inputs = [
        new Input(),
        new Input(),
        new Input(),
    ];
    $request->createApplicationRequest->applicationConfiguration->sqlApplicationConfiguration->outputs = [
        new Output(),
    ];
    $request->createApplicationRequest->applicationConfiguration->sqlApplicationConfiguration->referenceDataSources = [
        new ReferenceDataSource(),
        new ReferenceDataSource(),
    ];
    $request->createApplicationRequest->applicationConfiguration->vpcConfigurations = [
        new VpcConfiguration(),
    ];
    $request->createApplicationRequest->applicationConfiguration->zeppelinApplicationConfiguration = new ZeppelinApplicationConfiguration();
    $request->createApplicationRequest->applicationConfiguration->zeppelinApplicationConfiguration->catalogConfiguration = new CatalogConfiguration();
    $request->createApplicationRequest->applicationConfiguration->zeppelinApplicationConfiguration->catalogConfiguration->glueDataCatalogConfiguration = new GlueDataCatalogConfiguration();
    $request->createApplicationRequest->applicationConfiguration->zeppelinApplicationConfiguration->catalogConfiguration->glueDataCatalogConfiguration->databaseARN = 'laborum';
    $request->createApplicationRequest->applicationConfiguration->zeppelinApplicationConfiguration->customArtifactsConfiguration = [
        new CustomArtifactConfiguration(),
        new CustomArtifactConfiguration(),
        new CustomArtifactConfiguration(),
    ];
    $request->createApplicationRequest->applicationConfiguration->zeppelinApplicationConfiguration->deployAsApplicationConfiguration = new DeployAsApplicationConfiguration();
    $request->createApplicationRequest->applicationConfiguration->zeppelinApplicationConfiguration->deployAsApplicationConfiguration->s3ContentLocation = new S3ContentBaseLocation();
    $request->createApplicationRequest->applicationConfiguration->zeppelinApplicationConfiguration->deployAsApplicationConfiguration->s3ContentLocation->basePath = 'enim';
    $request->createApplicationRequest->applicationConfiguration->zeppelinApplicationConfiguration->deployAsApplicationConfiguration->s3ContentLocation->bucketARN = 'odit';
    $request->createApplicationRequest->applicationConfiguration->zeppelinApplicationConfiguration->monitoringConfiguration = new ZeppelinMonitoringConfiguration();
    $request->createApplicationRequest->applicationConfiguration->zeppelinApplicationConfiguration->monitoringConfiguration->logLevel = LogLevelEnum::DEBUG;
    $request->createApplicationRequest->applicationDescription = 'sequi';
    $request->createApplicationRequest->applicationMode = ApplicationModeEnum::INTERACTIVE;
    $request->createApplicationRequest->applicationName = 'ipsam';
    $request->createApplicationRequest->cloudWatchLoggingOptions = [
        new CloudWatchLoggingOption(),
        new CloudWatchLoggingOption(),
        new CloudWatchLoggingOption(),
    ];
    $request->createApplicationRequest->runtimeEnvironment = RuntimeEnvironmentEnum::ZEPPELIN_FLINK20;
    $request->createApplicationRequest->serviceExecutionRole = 'aut';
    $request->createApplicationRequest->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'vero';
    $request->xAmzTarget = CreateApplicationXAmzTargetEnum::KINESIS_ANALYTICS20180523_CREATE_APPLICATION;

    $response = $sdk->sdk->createApplication($request);

    if ($response->createApplicationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createApplicationPresignedUrl

<p>Creates and returns a URL that you can use to connect to an application's extension.</p> <p>The IAM role or user used to call this API defines the permissions to access the extension. After the presigned URL is created, no additional permission is required to access this URL. IAM authorization policies for this API are also enforced for every HTTP request that attempts to connect to the extension. </p> <p>You control the amount of time that the URL will be valid using the <code>SessionExpirationDurationInSeconds</code> parameter. If you do not provide this parameter, the returned URL is valid for twelve hours.</p> <note> <p>The URL that you get from a call to CreateApplicationPresignedUrl must be used within 3 minutes to be valid. If you first try to use the URL after the 3-minute limit expires, the service returns an HTTP 403 Forbidden error.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateApplicationPresignedUrlRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateApplicationPresignedUrlRequest;
use \OpenAPI\OpenAPI\Models\Shared\UrlTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateApplicationPresignedUrlXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateApplicationPresignedUrlRequest();
    $request->createApplicationPresignedUrlRequest = new CreateApplicationPresignedUrlRequest();
    $request->createApplicationPresignedUrlRequest->applicationName = 'nihil';
    $request->createApplicationPresignedUrlRequest->sessionExpirationDurationInSeconds = 509624;
    $request->createApplicationPresignedUrlRequest->urlType = UrlTypeEnum::ZEPPELIN_UI_URL;
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'doloremque';
    $request->xAmzSignedHeaders = 'reprehenderit';
    $request->xAmzTarget = CreateApplicationPresignedUrlXAmzTargetEnum::KINESIS_ANALYTICS20180523_CREATE_APPLICATION_PRESIGNED_URL;

    $response = $sdk->sdk->createApplicationPresignedUrl($request);

    if ($response->createApplicationPresignedUrlResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createApplicationSnapshot

Creates a snapshot of the application's state data.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateApplicationSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateApplicationSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateApplicationSnapshotXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateApplicationSnapshotRequest();
    $request->createApplicationSnapshotRequest = new CreateApplicationSnapshotRequest();
    $request->createApplicationSnapshotRequest->applicationName = 'ut';
    $request->createApplicationSnapshotRequest->snapshotName = 'maiores';
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'dolore';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'harum';
    $request->xAmzSignedHeaders = 'enim';
    $request->xAmzTarget = CreateApplicationSnapshotXAmzTargetEnum::KINESIS_ANALYTICS20180523_CREATE_APPLICATION_SNAPSHOT;

    $response = $sdk->sdk->createApplicationSnapshot($request);

    if ($response->createApplicationSnapshotResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteApplication

Deletes the specified application. Kinesis Data Analytics halts application execution and deletes the application.

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
    $request->deleteApplicationRequest->applicationName = 'accusamus';
    $request->deleteApplicationRequest->createTimestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-30T20:15:26.045Z');
    $request->xAmzAlgorithm = 'quae';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'molestias';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'modi';
    $request->xAmzTarget = DeleteApplicationXAmzTargetEnum::KINESIS_ANALYTICS20180523_DELETE_APPLICATION;

    $response = $sdk->sdk->deleteApplication($request);

    if ($response->deleteApplicationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteApplicationCloudWatchLoggingOption

Deletes an Amazon CloudWatch log stream from an Kinesis Data Analytics application. 

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
    $request->deleteApplicationCloudWatchLoggingOptionRequest->applicationName = 'praesentium';
    $request->deleteApplicationCloudWatchLoggingOptionRequest->cloudWatchLoggingOptionId = 'rem';
    $request->deleteApplicationCloudWatchLoggingOptionRequest->conditionalToken = 'voluptates';
    $request->deleteApplicationCloudWatchLoggingOptionRequest->currentApplicationVersionId = 93940;
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'itaque';
    $request->xAmzSecurityToken = 'incidunt';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'consequatur';
    $request->xAmzTarget = DeleteApplicationCloudWatchLoggingOptionXAmzTargetEnum::KINESIS_ANALYTICS20180523_DELETE_APPLICATION_CLOUD_WATCH_LOGGING_OPTION;

    $response = $sdk->sdk->deleteApplicationCloudWatchLoggingOption($request);

    if ($response->deleteApplicationCloudWatchLoggingOptionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteApplicationInputProcessingConfiguration

Deletes an <a>InputProcessingConfiguration</a> from an input.

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
    $request->deleteApplicationInputProcessingConfigurationRequest->applicationName = 'est';
    $request->deleteApplicationInputProcessingConfigurationRequest->currentApplicationVersionId = 842342;
    $request->deleteApplicationInputProcessingConfigurationRequest->inputId = 'explicabo';
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'modi';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'aliquid';
    $request->xAmzTarget = DeleteApplicationInputProcessingConfigurationXAmzTargetEnum::KINESIS_ANALYTICS20180523_DELETE_APPLICATION_INPUT_PROCESSING_CONFIGURATION;

    $response = $sdk->sdk->deleteApplicationInputProcessingConfiguration($request);

    if ($response->deleteApplicationInputProcessingConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteApplicationOutput

Deletes the output destination configuration from your SQL-based Kinesis Data Analytics application's configuration. Kinesis Data Analytics will no longer write data from the corresponding in-application stream to the external output destination.

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
    $request->deleteApplicationOutputRequest->applicationName = 'cupiditate';
    $request->deleteApplicationOutputRequest->currentApplicationVersionId = 552822;
    $request->deleteApplicationOutputRequest->outputId = 'perferendis';
    $request->xAmzAlgorithm = 'magni';
    $request->xAmzContentSha256 = 'assumenda';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'alias';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->xAmzTarget = DeleteApplicationOutputXAmzTargetEnum::KINESIS_ANALYTICS20180523_DELETE_APPLICATION_OUTPUT;

    $response = $sdk->sdk->deleteApplicationOutput($request);

    if ($response->deleteApplicationOutputResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteApplicationReferenceDataSource

<p>Deletes a reference data source configuration from the specified SQL-based Kinesis Data Analytics application's configuration.</p> <p>If the application is running, Kinesis Data Analytics immediately removes the in-application table that you created using the <a>AddApplicationReferenceDataSource</a> operation. </p>

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
    $request->deleteApplicationReferenceDataSourceRequest->applicationName = 'tempora';
    $request->deleteApplicationReferenceDataSourceRequest->currentApplicationVersionId = 703737;
    $request->deleteApplicationReferenceDataSourceRequest->referenceId = 'tempore';
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'eum';
    $request->xAmzDate = 'non';
    $request->xAmzSecurityToken = 'eligendi';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'aliquid';
    $request->xAmzTarget = DeleteApplicationReferenceDataSourceXAmzTargetEnum::KINESIS_ANALYTICS20180523_DELETE_APPLICATION_REFERENCE_DATA_SOURCE;

    $response = $sdk->sdk->deleteApplicationReferenceDataSource($request);

    if ($response->deleteApplicationReferenceDataSourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteApplicationSnapshot

Deletes a snapshot of application state.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApplicationSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteApplicationSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApplicationSnapshotXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteApplicationSnapshotRequest();
    $request->deleteApplicationSnapshotRequest = new DeleteApplicationSnapshotRequest();
    $request->deleteApplicationSnapshotRequest->applicationName = 'provident';
    $request->deleteApplicationSnapshotRequest->snapshotCreationTimestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-14T09:13:11.675Z');
    $request->deleteApplicationSnapshotRequest->snapshotName = 'officia';
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'a';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'illum';
    $request->xAmzTarget = DeleteApplicationSnapshotXAmzTargetEnum::KINESIS_ANALYTICS20180523_DELETE_APPLICATION_SNAPSHOT;

    $response = $sdk->sdk->deleteApplicationSnapshot($request);

    if ($response->deleteApplicationSnapshotResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteApplicationVpcConfiguration

Removes a VPC configuration from a Kinesis Data Analytics application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApplicationVpcConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteApplicationVpcConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApplicationVpcConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteApplicationVpcConfigurationRequest();
    $request->deleteApplicationVpcConfigurationRequest = new DeleteApplicationVpcConfigurationRequest();
    $request->deleteApplicationVpcConfigurationRequest->applicationName = 'maiores';
    $request->deleteApplicationVpcConfigurationRequest->conditionalToken = 'rerum';
    $request->deleteApplicationVpcConfigurationRequest->currentApplicationVersionId = 116202;
    $request->deleteApplicationVpcConfigurationRequest->vpcConfigurationId = 'magnam';
    $request->xAmzAlgorithm = 'cumque';
    $request->xAmzContentSha256 = 'facere';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'non';
    $request->xAmzTarget = DeleteApplicationVpcConfigurationXAmzTargetEnum::KINESIS_ANALYTICS20180523_DELETE_APPLICATION_VPC_CONFIGURATION;

    $response = $sdk->sdk->deleteApplicationVpcConfiguration($request);

    if ($response->deleteApplicationVpcConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeApplication

<p>Returns information about a specific Kinesis Data Analytics application.</p> <p>If you want to retrieve a list of all applications in your account, use the <a>ListApplications</a> operation.</p>

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
    $request->describeApplicationRequest->applicationName = 'occaecati';
    $request->describeApplicationRequest->includeAdditionalDetails = false;
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'id';
    $request->xAmzTarget = DescribeApplicationXAmzTargetEnum::KINESIS_ANALYTICS20180523_DESCRIBE_APPLICATION;

    $response = $sdk->sdk->describeApplication($request);

    if ($response->describeApplicationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeApplicationSnapshot

Returns information about a snapshot of application state data.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeApplicationSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeApplicationSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeApplicationSnapshotXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeApplicationSnapshotRequest();
    $request->describeApplicationSnapshotRequest = new DescribeApplicationSnapshotRequest();
    $request->describeApplicationSnapshotRequest->applicationName = 'blanditiis';
    $request->describeApplicationSnapshotRequest->snapshotName = 'deleniti';
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'nisi';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'omnis';
    $request->xAmzTarget = DescribeApplicationSnapshotXAmzTargetEnum::KINESIS_ANALYTICS20180523_DESCRIBE_APPLICATION_SNAPSHOT;

    $response = $sdk->sdk->describeApplicationSnapshot($request);

    if ($response->describeApplicationSnapshotResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeApplicationVersion

<p>Provides a detailed description of a specified version of the application. To see a list of all the versions of an application, invoke the <a>ListApplicationVersions</a> operation.</p> <note> <p>This operation is supported only for Amazon Kinesis Data Analytics for Apache Flink.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeApplicationVersionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeApplicationVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeApplicationVersionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeApplicationVersionRequest();
    $request->describeApplicationVersionRequest = new DescribeApplicationVersionRequest();
    $request->describeApplicationVersionRequest->applicationName = 'molestiae';
    $request->describeApplicationVersionRequest->applicationVersionId = 19193;
    $request->xAmzAlgorithm = 'nihil';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'suscipit';
    $request->xAmzTarget = DescribeApplicationVersionXAmzTargetEnum::KINESIS_ANALYTICS20180523_DESCRIBE_APPLICATION_VERSION;

    $response = $sdk->sdk->describeApplicationVersion($request);

    if ($response->describeApplicationVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## discoverInputSchema

<p>Infers a schema for a SQL-based Kinesis Data Analytics application by evaluating sample records on the specified streaming source (Kinesis data stream or Kinesis Data Firehose delivery stream) or Amazon S3 object. In the response, the operation returns the inferred schema and also the sample records that the operation used to infer the schema.</p> <p> You can use the inferred schema when configuring a streaming source for your application. When you create an application using the Kinesis Data Analytics console, the console uses this operation to infer a schema and show it in the console user interface. </p>

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
    $request->discoverInputSchemaRequest->inputProcessingConfiguration->inputLambdaProcessor->resourceARN = 'natus';
    $request->discoverInputSchemaRequest->inputStartingPositionConfiguration = new InputStartingPositionConfiguration();
    $request->discoverInputSchemaRequest->inputStartingPositionConfiguration->inputStartingPosition = InputStartingPositionEnum::LAST_STOPPED_POINT;
    $request->discoverInputSchemaRequest->resourceARN = 'eum';
    $request->discoverInputSchemaRequest->s3Configuration = new S3Configuration();
    $request->discoverInputSchemaRequest->s3Configuration->bucketARN = 'vero';
    $request->discoverInputSchemaRequest->s3Configuration->fileKey = 'aspernatur';
    $request->discoverInputSchemaRequest->serviceExecutionRole = 'architecto';
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'et';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'ullam';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'quos';
    $request->xAmzSignedHeaders = 'sint';
    $request->xAmzTarget = DiscoverInputSchemaXAmzTargetEnum::KINESIS_ANALYTICS20180523_DISCOVER_INPUT_SCHEMA;

    $response = $sdk->sdk->discoverInputSchema($request);

    if ($response->discoverInputSchemaResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listApplicationSnapshots

Lists information about the current application snapshots.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListApplicationSnapshotsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListApplicationSnapshotsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListApplicationSnapshotsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListApplicationSnapshotsRequest();
    $request->listApplicationSnapshotsRequest = new ListApplicationSnapshotsRequest();
    $request->listApplicationSnapshotsRequest->applicationName = 'accusantium';
    $request->listApplicationSnapshotsRequest->limit = 653201;
    $request->listApplicationSnapshotsRequest->nextToken = 'reiciendis';
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'eum';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'necessitatibus';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'nemo';
    $request->xAmzTarget = ListApplicationSnapshotsXAmzTargetEnum::KINESIS_ANALYTICS20180523_LIST_APPLICATION_SNAPSHOTS;

    $response = $sdk->sdk->listApplicationSnapshots($request);

    if ($response->listApplicationSnapshotsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listApplicationVersions

<p>Lists all the versions for the specified application, including versions that were rolled back. The response also includes a summary of the configuration associated with each version.</p> <p>To get the complete description of a specific application version, invoke the <a>DescribeApplicationVersion</a> operation.</p> <note> <p>This operation is supported only for Amazon Kinesis Data Analytics for Apache Flink.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListApplicationVersionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListApplicationVersionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListApplicationVersionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListApplicationVersionsRequest();
    $request->listApplicationVersionsRequest = new ListApplicationVersionsRequest();
    $request->listApplicationVersionsRequest->applicationName = 'quasi';
    $request->listApplicationVersionsRequest->limit = 435865;
    $request->listApplicationVersionsRequest->nextToken = 'doloribus';
    $request->xAmzAlgorithm = 'debitis';
    $request->xAmzContentSha256 = 'eius';
    $request->xAmzCredential = 'maxime';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'architecto';
    $request->xAmzTarget = ListApplicationVersionsXAmzTargetEnum::KINESIS_ANALYTICS20180523_LIST_APPLICATION_VERSIONS;

    $response = $sdk->sdk->listApplicationVersions($request);

    if ($response->listApplicationVersionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listApplications

<p>Returns a list of Kinesis Data Analytics applications in your account. For each application, the response includes the application name, Amazon Resource Name (ARN), and status. </p> <p>If you want detailed information about a specific application, use <a>DescribeApplication</a>.</p>

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
    $request->listApplicationsRequest->limit = 99569;
    $request->listApplicationsRequest->nextToken = 'repudiandae';
    $request->xAmzAlgorithm = 'ullam';
    $request->xAmzContentSha256 = 'expedita';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'repellat';
    $request->xAmzSecurityToken = 'quibusdam';
    $request->xAmzSignature = 'sed';
    $request->xAmzSignedHeaders = 'saepe';
    $request->xAmzTarget = ListApplicationsXAmzTargetEnum::KINESIS_ANALYTICS20180523_LIST_APPLICATIONS;

    $response = $sdk->sdk->listApplications($request);

    if ($response->listApplicationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Retrieves the list of key-value tags assigned to the application. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/how-tagging.html">Using Tagging</a>.

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
    $request->listTagsForResourceRequest->resourceARN = 'pariatur';
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'magni';
    $request->xAmzSignature = 'sunt';
    $request->xAmzSignedHeaders = 'quo';
    $request->xAmzTarget = ListTagsForResourceXAmzTargetEnum::KINESIS_ANALYTICS20180523_LIST_TAGS_FOR_RESOURCE;

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## rollbackApplication

<p>Reverts the application to the previous running version. You can roll back an application if you suspect it is stuck in a transient status. </p> <p>You can roll back an application only if it is in the <code>UPDATING</code> or <code>AUTOSCALING</code> status.</p> <p>When you rollback an application, it loads state data from the last successful snapshot. If the application has no snapshots, Kinesis Data Analytics rejects the rollback request.</p> <p>This action is not supported for Kinesis Data Analytics for SQL applications.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RollbackApplicationRequest;
use \OpenAPI\OpenAPI\Models\Shared\RollbackApplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\RollbackApplicationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RollbackApplicationRequest();
    $request->rollbackApplicationRequest = new RollbackApplicationRequest();
    $request->rollbackApplicationRequest->applicationName = 'illum';
    $request->rollbackApplicationRequest->currentApplicationVersionId = 864934;
    $request->xAmzAlgorithm = 'maxime';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'odit';
    $request->xAmzSecurityToken = 'ea';
    $request->xAmzSignature = 'accusantium';
    $request->xAmzSignedHeaders = 'ab';
    $request->xAmzTarget = RollbackApplicationXAmzTargetEnum::KINESIS_ANALYTICS20180523_ROLLBACK_APPLICATION;

    $response = $sdk->sdk->rollbackApplication($request);

    if ($response->rollbackApplicationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startApplication

Starts the specified Kinesis Data Analytics application. After creating an application, you must exclusively call this operation to start your application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartApplicationRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartApplicationRequest;
use \OpenAPI\OpenAPI\Models\Shared\RunConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ApplicationRestoreConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ApplicationRestoreTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FlinkRunConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\SqlRunConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\InputStartingPositionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\InputStartingPositionEnum;
use \OpenAPI\OpenAPI\Models\Operations\StartApplicationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartApplicationRequest();
    $request->startApplicationRequest = new StartApplicationRequest();
    $request->startApplicationRequest->applicationName = 'maiores';
    $request->startApplicationRequest->runConfiguration = new RunConfiguration();
    $request->startApplicationRequest->runConfiguration->applicationRestoreConfiguration = new ApplicationRestoreConfiguration();
    $request->startApplicationRequest->runConfiguration->applicationRestoreConfiguration->applicationRestoreType = ApplicationRestoreTypeEnum::RESTORE_FROM_CUSTOM_SNAPSHOT;
    $request->startApplicationRequest->runConfiguration->applicationRestoreConfiguration->snapshotName = 'ipsam';
    $request->startApplicationRequest->runConfiguration->flinkRunConfiguration = new FlinkRunConfiguration();
    $request->startApplicationRequest->runConfiguration->flinkRunConfiguration->allowNonRestoredState = false;
    $request->startApplicationRequest->runConfiguration->sqlRunConfigurations = [
        new SqlRunConfiguration(),
        new SqlRunConfiguration(),
    ];
    $request->xAmzAlgorithm = 'autem';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'eaque';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = StartApplicationXAmzTargetEnum::KINESIS_ANALYTICS20180523_START_APPLICATION;

    $response = $sdk->sdk->startApplication($request);

    if ($response->startApplicationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopApplication

<p>Stops the application from processing data. You can stop an application only if it is in the running status, unless you set the <code>Force</code> parameter to <code>true</code>.</p> <p>You can use the <a>DescribeApplication</a> operation to find the application status. </p> <p>Kinesis Data Analytics takes a snapshot when the application is stopped, unless <code>Force</code> is set to <code>true</code>.</p>

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
    $request->stopApplicationRequest->applicationName = 'fugiat';
    $request->stopApplicationRequest->force = false;
    $request->xAmzAlgorithm = 'amet';
    $request->xAmzContentSha256 = 'aut';
    $request->xAmzCredential = 'cumque';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'nobis';
    $request->xAmzTarget = StopApplicationXAmzTargetEnum::KINESIS_ANALYTICS20180523_STOP_APPLICATION;

    $response = $sdk->sdk->stopApplication($request);

    if ($response->stopApplicationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Adds one or more key-value tags to a Kinesis Data Analytics application. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/how-tagging.html">Using Tagging</a>.

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
    $request->tagResourceRequest->resourceARN = 'dolores';
    $request->tagResourceRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'dignissimos';
    $request->xAmzCredential = 'eaque';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'nesciunt';
    $request->xAmzSignature = 'eos';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::KINESIS_ANALYTICS20180523_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes one or more tags from a Kinesis Data Analytics application. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/how-tagging.html">Using Tagging</a>.

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
    $request->untagResourceRequest->resourceARN = 'dolores';
    $request->untagResourceRequest->tagKeys = [
        'quam',
        'dolor',
        'vero',
        'nostrum',
    ];
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'recusandae';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'perspiciatis';
    $request->xAmzSignature = 'voluptatem';
    $request->xAmzSignedHeaders = 'porro';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::KINESIS_ANALYTICS20180523_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateApplication

<p>Updates an existing Kinesis Data Analytics application. Using this operation, you can update application code, input configuration, and output configuration. </p> <p>Kinesis Data Analytics updates the <code>ApplicationVersionId</code> each time you update your application. </p> <note> <p>You cannot update the <code>RuntimeEnvironment</code> of an existing application. If you need to update an application's <code>RuntimeEnvironment</code>, you must delete the application and create it again.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApplicationRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateApplicationRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApplicationConfigurationUpdate;
use \OpenAPI\OpenAPI\Models\Shared\ApplicationCodeConfigurationUpdate;
use \OpenAPI\OpenAPI\Models\Shared\CodeContentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CodeContentUpdate;
use \OpenAPI\OpenAPI\Models\Shared\S3ContentLocationUpdate;
use \OpenAPI\OpenAPI\Models\Shared\ApplicationSnapshotConfigurationUpdate;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentPropertyUpdates;
use \OpenAPI\OpenAPI\Models\Shared\PropertyGroup;
use \OpenAPI\OpenAPI\Models\Shared\FlinkApplicationConfigurationUpdate;
use \OpenAPI\OpenAPI\Models\Shared\CheckpointConfigurationUpdate;
use \OpenAPI\OpenAPI\Models\Shared\ConfigurationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringConfigurationUpdate;
use \OpenAPI\OpenAPI\Models\Shared\LogLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetricsLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\ParallelismConfigurationUpdate;
use \OpenAPI\OpenAPI\Models\Shared\SqlApplicationConfigurationUpdate;
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
use \OpenAPI\OpenAPI\Models\Shared\VpcConfigurationUpdate;
use \OpenAPI\OpenAPI\Models\Shared\ZeppelinApplicationConfigurationUpdate;
use \OpenAPI\OpenAPI\Models\Shared\CatalogConfigurationUpdate;
use \OpenAPI\OpenAPI\Models\Shared\GlueDataCatalogConfigurationUpdate;
use \OpenAPI\OpenAPI\Models\Shared\CustomArtifactConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ArtifactTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MavenReference;
use \OpenAPI\OpenAPI\Models\Shared\S3ContentLocation;
use \OpenAPI\OpenAPI\Models\Shared\DeployAsApplicationConfigurationUpdate;
use \OpenAPI\OpenAPI\Models\Shared\S3ContentBaseLocationUpdate;
use \OpenAPI\OpenAPI\Models\Shared\ZeppelinMonitoringConfigurationUpdate;
use \OpenAPI\OpenAPI\Models\Shared\CloudWatchLoggingOptionUpdate;
use \OpenAPI\OpenAPI\Models\Shared\RunConfigurationUpdate;
use \OpenAPI\OpenAPI\Models\Shared\ApplicationRestoreConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ApplicationRestoreTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FlinkRunConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApplicationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateApplicationRequest();
    $request->updateApplicationRequest = new UpdateApplicationRequest();
    $request->updateApplicationRequest->applicationConfigurationUpdate = new ApplicationConfigurationUpdate();
    $request->updateApplicationRequest->applicationConfigurationUpdate->applicationCodeConfigurationUpdate = new ApplicationCodeConfigurationUpdate();
    $request->updateApplicationRequest->applicationConfigurationUpdate->applicationCodeConfigurationUpdate->codeContentTypeUpdate = CodeContentTypeEnum::PLAINTEXT;
    $request->updateApplicationRequest->applicationConfigurationUpdate->applicationCodeConfigurationUpdate->codeContentUpdate = new CodeContentUpdate();
    $request->updateApplicationRequest->applicationConfigurationUpdate->applicationCodeConfigurationUpdate->codeContentUpdate->s3ContentLocationUpdate = new S3ContentLocationUpdate();
    $request->updateApplicationRequest->applicationConfigurationUpdate->applicationCodeConfigurationUpdate->codeContentUpdate->s3ContentLocationUpdate->bucketARNUpdate = 'blanditiis';
    $request->updateApplicationRequest->applicationConfigurationUpdate->applicationCodeConfigurationUpdate->codeContentUpdate->s3ContentLocationUpdate->fileKeyUpdate = 'error';
    $request->updateApplicationRequest->applicationConfigurationUpdate->applicationCodeConfigurationUpdate->codeContentUpdate->s3ContentLocationUpdate->objectVersionUpdate = 'eaque';
    $request->updateApplicationRequest->applicationConfigurationUpdate->applicationCodeConfigurationUpdate->codeContentUpdate->textContentUpdate = 'occaecati';
    $request->updateApplicationRequest->applicationConfigurationUpdate->applicationCodeConfigurationUpdate->codeContentUpdate->zipFileContentUpdate = 'rerum';
    $request->updateApplicationRequest->applicationConfigurationUpdate->applicationSnapshotConfigurationUpdate = new ApplicationSnapshotConfigurationUpdate();
    $request->updateApplicationRequest->applicationConfigurationUpdate->applicationSnapshotConfigurationUpdate->snapshotsEnabledUpdate = false;
    $request->updateApplicationRequest->applicationConfigurationUpdate->environmentPropertyUpdates = new EnvironmentPropertyUpdates();
    $request->updateApplicationRequest->applicationConfigurationUpdate->environmentPropertyUpdates->propertyGroups = [
        new PropertyGroup(),
    ];
    $request->updateApplicationRequest->applicationConfigurationUpdate->flinkApplicationConfigurationUpdate = new FlinkApplicationConfigurationUpdate();
    $request->updateApplicationRequest->applicationConfigurationUpdate->flinkApplicationConfigurationUpdate->checkpointConfigurationUpdate = new CheckpointConfigurationUpdate();
    $request->updateApplicationRequest->applicationConfigurationUpdate->flinkApplicationConfigurationUpdate->checkpointConfigurationUpdate->checkpointIntervalUpdate = 992397;
    $request->updateApplicationRequest->applicationConfigurationUpdate->flinkApplicationConfigurationUpdate->checkpointConfigurationUpdate->checkpointingEnabledUpdate = false;
    $request->updateApplicationRequest->applicationConfigurationUpdate->flinkApplicationConfigurationUpdate->checkpointConfigurationUpdate->configurationTypeUpdate = ConfigurationTypeEnum::CUSTOM;
    $request->updateApplicationRequest->applicationConfigurationUpdate->flinkApplicationConfigurationUpdate->checkpointConfigurationUpdate->minPauseBetweenCheckpointsUpdate = 267262;
    $request->updateApplicationRequest->applicationConfigurationUpdate->flinkApplicationConfigurationUpdate->monitoringConfigurationUpdate = new MonitoringConfigurationUpdate();
    $request->updateApplicationRequest->applicationConfigurationUpdate->flinkApplicationConfigurationUpdate->monitoringConfigurationUpdate->configurationTypeUpdate = ConfigurationTypeEnum::CUSTOM;
    $request->updateApplicationRequest->applicationConfigurationUpdate->flinkApplicationConfigurationUpdate->monitoringConfigurationUpdate->logLevelUpdate = LogLevelEnum::ERROR;
    $request->updateApplicationRequest->applicationConfigurationUpdate->flinkApplicationConfigurationUpdate->monitoringConfigurationUpdate->metricsLevelUpdate = MetricsLevelEnum::OPERATOR;
    $request->updateApplicationRequest->applicationConfigurationUpdate->flinkApplicationConfigurationUpdate->parallelismConfigurationUpdate = new ParallelismConfigurationUpdate();
    $request->updateApplicationRequest->applicationConfigurationUpdate->flinkApplicationConfigurationUpdate->parallelismConfigurationUpdate->autoScalingEnabledUpdate = false;
    $request->updateApplicationRequest->applicationConfigurationUpdate->flinkApplicationConfigurationUpdate->parallelismConfigurationUpdate->configurationTypeUpdate = ConfigurationTypeEnum::CUSTOM;
    $request->updateApplicationRequest->applicationConfigurationUpdate->flinkApplicationConfigurationUpdate->parallelismConfigurationUpdate->parallelismPerKPUUpdate = 589910;
    $request->updateApplicationRequest->applicationConfigurationUpdate->flinkApplicationConfigurationUpdate->parallelismConfigurationUpdate->parallelismUpdate = 750844;
    $request->updateApplicationRequest->applicationConfigurationUpdate->sqlApplicationConfigurationUpdate = new SqlApplicationConfigurationUpdate();
    $request->updateApplicationRequest->applicationConfigurationUpdate->sqlApplicationConfigurationUpdate->inputUpdates = [
        new InputUpdate(),
        new InputUpdate(),
        new InputUpdate(),
    ];
    $request->updateApplicationRequest->applicationConfigurationUpdate->sqlApplicationConfigurationUpdate->outputUpdates = [
        new OutputUpdate(),
        new OutputUpdate(),
        new OutputUpdate(),
        new OutputUpdate(),
    ];
    $request->updateApplicationRequest->applicationConfigurationUpdate->sqlApplicationConfigurationUpdate->referenceDataSourceUpdates = [
        new ReferenceDataSourceUpdate(),
        new ReferenceDataSourceUpdate(),
    ];
    $request->updateApplicationRequest->applicationConfigurationUpdate->vpcConfigurationUpdates = [
        new VpcConfigurationUpdate(),
        new VpcConfigurationUpdate(),
        new VpcConfigurationUpdate(),
    ];
    $request->updateApplicationRequest->applicationConfigurationUpdate->zeppelinApplicationConfigurationUpdate = new ZeppelinApplicationConfigurationUpdate();
    $request->updateApplicationRequest->applicationConfigurationUpdate->zeppelinApplicationConfigurationUpdate->catalogConfigurationUpdate = new CatalogConfigurationUpdate();
    $request->updateApplicationRequest->applicationConfigurationUpdate->zeppelinApplicationConfigurationUpdate->catalogConfigurationUpdate->glueDataCatalogConfigurationUpdate = new GlueDataCatalogConfigurationUpdate();
    $request->updateApplicationRequest->applicationConfigurationUpdate->zeppelinApplicationConfigurationUpdate->catalogConfigurationUpdate->glueDataCatalogConfigurationUpdate->databaseARNUpdate = 'aliquid';
    $request->updateApplicationRequest->applicationConfigurationUpdate->zeppelinApplicationConfigurationUpdate->customArtifactsConfigurationUpdate = [
        new CustomArtifactConfiguration(),
    ];
    $request->updateApplicationRequest->applicationConfigurationUpdate->zeppelinApplicationConfigurationUpdate->deployAsApplicationConfigurationUpdate = new DeployAsApplicationConfigurationUpdate();
    $request->updateApplicationRequest->applicationConfigurationUpdate->zeppelinApplicationConfigurationUpdate->deployAsApplicationConfigurationUpdate->s3ContentLocationUpdate = new S3ContentBaseLocationUpdate();
    $request->updateApplicationRequest->applicationConfigurationUpdate->zeppelinApplicationConfigurationUpdate->deployAsApplicationConfigurationUpdate->s3ContentLocationUpdate->basePathUpdate = 'dolorem';
    $request->updateApplicationRequest->applicationConfigurationUpdate->zeppelinApplicationConfigurationUpdate->deployAsApplicationConfigurationUpdate->s3ContentLocationUpdate->bucketARNUpdate = 'dolor';
    $request->updateApplicationRequest->applicationConfigurationUpdate->zeppelinApplicationConfigurationUpdate->monitoringConfigurationUpdate = new ZeppelinMonitoringConfigurationUpdate();
    $request->updateApplicationRequest->applicationConfigurationUpdate->zeppelinApplicationConfigurationUpdate->monitoringConfigurationUpdate->logLevelUpdate = LogLevelEnum::INFO;
    $request->updateApplicationRequest->applicationName = 'ipsum';
    $request->updateApplicationRequest->cloudWatchLoggingOptionUpdates = [
        new CloudWatchLoggingOptionUpdate(),
        new CloudWatchLoggingOptionUpdate(),
        new CloudWatchLoggingOptionUpdate(),
        new CloudWatchLoggingOptionUpdate(),
    ];
    $request->updateApplicationRequest->conditionalToken = 'excepturi';
    $request->updateApplicationRequest->currentApplicationVersionId = 739551;
    $request->updateApplicationRequest->runConfigurationUpdate = new RunConfigurationUpdate();
    $request->updateApplicationRequest->runConfigurationUpdate->applicationRestoreConfiguration = new ApplicationRestoreConfiguration();
    $request->updateApplicationRequest->runConfigurationUpdate->applicationRestoreConfiguration->applicationRestoreType = ApplicationRestoreTypeEnum::RESTORE_FROM_LATEST_SNAPSHOT;
    $request->updateApplicationRequest->runConfigurationUpdate->applicationRestoreConfiguration->snapshotName = 'dignissimos';
    $request->updateApplicationRequest->runConfigurationUpdate->flinkRunConfiguration = new FlinkRunConfiguration();
    $request->updateApplicationRequest->runConfigurationUpdate->flinkRunConfiguration->allowNonRestoredState = false;
    $request->updateApplicationRequest->serviceExecutionRoleUpdate = 'reiciendis';
    $request->xAmzAlgorithm = 'amet';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'iure';
    $request->xAmzTarget = UpdateApplicationXAmzTargetEnum::KINESIS_ANALYTICS20180523_UPDATE_APPLICATION;

    $response = $sdk->sdk->updateApplication($request);

    if ($response->updateApplicationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateApplicationMaintenanceConfiguration

<p>Updates the maintenance configuration of the Kinesis Data Analytics application. </p> <p>You can invoke this operation on an application that is in one of the two following states: <code>READY</code> or <code>RUNNING</code>. If you invoke it when the application is in a state other than these two states, it throws a <code>ResourceInUseException</code>. The service makes use of the updated configuration the next time it schedules maintenance for the application. If you invoke this operation after the service schedules maintenance, the service will apply the configuration update the next time it schedules maintenance for the application. This means that you might not see the maintenance configuration update applied to the maintenance process that follows a successful invocation of this operation, but to the following maintenance process instead.</p> <p>To see the current maintenance configuration of your application, invoke the <a>DescribeApplication</a> operation.</p> <p>For information about application maintenance, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/maintenance.html">Kinesis Data Analytics for Apache Flink Maintenance</a>.</p> <note> <p>This operation is supported only for Amazon Kinesis Data Analytics for Apache Flink.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApplicationMaintenanceConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateApplicationMaintenanceConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApplicationMaintenanceConfigurationUpdate;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApplicationMaintenanceConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateApplicationMaintenanceConfigurationRequest();
    $request->updateApplicationMaintenanceConfigurationRequest = new UpdateApplicationMaintenanceConfigurationRequest();
    $request->updateApplicationMaintenanceConfigurationRequest->applicationMaintenanceConfigurationUpdate = new ApplicationMaintenanceConfigurationUpdate();
    $request->updateApplicationMaintenanceConfigurationRequest->applicationMaintenanceConfigurationUpdate->applicationMaintenanceWindowStartTimeUpdate = 'odio';
    $request->updateApplicationMaintenanceConfigurationRequest->applicationName = 'quaerat';
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'eos';
    $request->xAmzSignedHeaders = 'atque';
    $request->xAmzTarget = UpdateApplicationMaintenanceConfigurationXAmzTargetEnum::KINESIS_ANALYTICS20180523_UPDATE_APPLICATION_MAINTENANCE_CONFIGURATION;

    $response = $sdk->sdk->updateApplicationMaintenanceConfiguration($request);

    if ($response->updateApplicationMaintenanceConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
