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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddApplicationCloudWatchLoggingOptionRequest;
import org.openapis.openapi.models.operations.AddApplicationCloudWatchLoggingOptionResponse;
import org.openapis.openapi.models.operations.AddApplicationCloudWatchLoggingOptionXAmzTargetEnum;
import org.openapis.openapi.models.shared.AddApplicationCloudWatchLoggingOptionRequest;
import org.openapis.openapi.models.shared.CloudWatchLoggingOption;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddApplicationCloudWatchLoggingOptionRequest req = new AddApplicationCloudWatchLoggingOptionRequest(                new AddApplicationCloudWatchLoggingOptionRequest("magnam",                 new CloudWatchLoggingOption("debitis", "ipsa");, 963663L);, AddApplicationCloudWatchLoggingOptionXAmzTargetEnum.KINESIS_ANALYTICS20150814_ADD_APPLICATION_CLOUD_WATCH_LOGGING_OPTION) {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "molestiae";
                xAmzDate = "minus";
                xAmzSecurityToken = "placeat";
                xAmzSignature = "voluptatum";
                xAmzSignedHeaders = "iusto";
            }};            

            AddApplicationCloudWatchLoggingOptionResponse res = sdk.sdk.addApplicationCloudWatchLoggingOption(req);

            if (res.addApplicationCloudWatchLoggingOptionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## addApplicationInput

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p> Adds a streaming source to your Amazon Kinesis application. For conceptual information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>. </p> <p>You can add a streaming source either when you create an application or you can use this operation to add a streaming source after you create an application. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_CreateApplication.html">CreateApplication</a>.</p> <p>Any configuration update, including adding a streaming source using this operation, results in a new version of the application. You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to find the current application version. </p> <p>This operation requires permissions to perform the <code>kinesisanalytics:AddApplicationInput</code> action.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddApplicationInputRequest;
import org.openapis.openapi.models.operations.AddApplicationInputResponse;
import org.openapis.openapi.models.operations.AddApplicationInputXAmzTargetEnum;
import org.openapis.openapi.models.shared.AddApplicationInputRequest;
import org.openapis.openapi.models.shared.CSVMappingParameters;
import org.openapis.openapi.models.shared.Input;
import org.openapis.openapi.models.shared.InputLambdaProcessor;
import org.openapis.openapi.models.shared.InputParallelism;
import org.openapis.openapi.models.shared.InputProcessingConfiguration;
import org.openapis.openapi.models.shared.JSONMappingParameters;
import org.openapis.openapi.models.shared.KinesisFirehoseInput;
import org.openapis.openapi.models.shared.KinesisStreamsInput;
import org.openapis.openapi.models.shared.MappingParameters;
import org.openapis.openapi.models.shared.RecordColumn;
import org.openapis.openapi.models.shared.RecordFormat;
import org.openapis.openapi.models.shared.RecordFormatTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SourceSchema;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddApplicationInputRequest req = new AddApplicationInputRequest(                new AddApplicationInputRequest("nisi", 925597L,                 new Input(                new SourceSchema(                new org.openapis.openapi.models.shared.RecordColumn[]{{
                                                                                add(new RecordColumn("quo", "odit") {{
                                                                                    mapping = "ab";
                                                                                    name = "Mrs. Marie O'Connell";
                                                                                    sqlType = "sapiente";
                                                                                }}),
                                                                                add(new RecordColumn("totam", "porro") {{
                                                                                    mapping = "at";
                                                                                    name = "Emilio Krajcik";
                                                                                    sqlType = "esse";
                                                                                }}),
                                                                                add(new RecordColumn("hic", "optio") {{
                                                                                    mapping = "dolorum";
                                                                                    name = "Antoinette Nikolaus";
                                                                                    sqlType = "deleniti";
                                                                                }}),
                                                                                add(new RecordColumn("cum", "esse") {{
                                                                                    mapping = "totam";
                                                                                    name = "Lucy Krajcik";
                                                                                    sqlType = "impedit";
                                                                                }}),
                                                                            }},                 new RecordFormat(RecordFormatTypeEnum.JSON) {{
                                                                                mappingParameters = new MappingParameters() {{
                                                                                    csvMappingParameters = new CSVMappingParameters("excepturi", "aspernatur");;
                                                                                    jsonMappingParameters = new JSONMappingParameters("perferendis");;
                                                                                }};;
                                                                            }};) {{
                                                                recordEncoding = "ad";
                                                            }};, "natus") {{
                                                inputParallelism = new InputParallelism() {{
                                                    count = 149675L;
                                                }};;
                                                inputProcessingConfiguration = new InputProcessingConfiguration(                new InputLambdaProcessor("iste", "dolor"););;
                                                kinesisFirehoseInput = new KinesisFirehoseInput("natus", "laboriosam");;
                                                kinesisStreamsInput = new KinesisStreamsInput("hic", "saepe");;
                                            }};);, AddApplicationInputXAmzTargetEnum.KINESIS_ANALYTICS20150814_ADD_APPLICATION_INPUT) {{
                xAmzAlgorithm = "fuga";
                xAmzContentSha256 = "in";
                xAmzCredential = "corporis";
                xAmzDate = "iste";
                xAmzSecurityToken = "iure";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "quidem";
            }};            

            AddApplicationInputResponse res = sdk.sdk.addApplicationInput(req);

            if (res.addApplicationInputResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## addApplicationInputProcessingConfiguration

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Adds an <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html">InputProcessingConfiguration</a> to an application. An input processor preprocesses records on the input stream before the application's SQL code executes. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddApplicationInputProcessingConfigurationRequest;
import org.openapis.openapi.models.operations.AddApplicationInputProcessingConfigurationResponse;
import org.openapis.openapi.models.operations.AddApplicationInputProcessingConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.AddApplicationInputProcessingConfigurationRequest;
import org.openapis.openapi.models.shared.InputLambdaProcessor;
import org.openapis.openapi.models.shared.InputProcessingConfiguration;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddApplicationInputProcessingConfigurationRequest req = new AddApplicationInputProcessingConfigurationRequest(                new AddApplicationInputProcessingConfigurationRequest("ipsa", 969810L, "est",                 new InputProcessingConfiguration(                new InputLambdaProcessor("mollitia", "laborum");););, AddApplicationInputProcessingConfigurationXAmzTargetEnum.KINESIS_ANALYTICS20150814_ADD_APPLICATION_INPUT_PROCESSING_CONFIGURATION) {{
                xAmzAlgorithm = "dolores";
                xAmzContentSha256 = "dolorem";
                xAmzCredential = "corporis";
                xAmzDate = "explicabo";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "omnis";
            }};            

            AddApplicationInputProcessingConfigurationResponse res = sdk.sdk.addApplicationInputProcessingConfiguration(req);

            if (res.addApplicationInputProcessingConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## addApplicationOutput

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Adds an external destination to your Amazon Kinesis Analytics application.</p> <p>If you want Amazon Kinesis Analytics to deliver data from an in-application stream within your application to an external destination (such as an Amazon Kinesis stream, an Amazon Kinesis Firehose delivery stream, or an AWS Lambda function), you add the relevant configuration to your application using this operation. You can configure one or more outputs for your application. Each output configuration maps an in-application stream and an external destination.</p> <p> You can use one of the output configurations to deliver data from your in-application error stream to an external destination so that you can analyze the errors. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html">Understanding Application Output (Destination)</a>. </p> <p> Any configuration update, including adding a streaming source using this operation, results in a new version of the application. You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to find the current application version.</p> <p>For the limits on the number of application inputs and outputs you can configure, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/limits.html">Limits</a>.</p> <p>This operation requires permissions to perform the <code>kinesisanalytics:AddApplicationOutput</code> action.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddApplicationOutputRequest;
import org.openapis.openapi.models.operations.AddApplicationOutputResponse;
import org.openapis.openapi.models.operations.AddApplicationOutputXAmzTargetEnum;
import org.openapis.openapi.models.shared.AddApplicationOutputRequest;
import org.openapis.openapi.models.shared.DestinationSchema;
import org.openapis.openapi.models.shared.KinesisFirehoseOutput;
import org.openapis.openapi.models.shared.KinesisStreamsOutput;
import org.openapis.openapi.models.shared.LambdaOutput;
import org.openapis.openapi.models.shared.Output;
import org.openapis.openapi.models.shared.RecordFormatTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddApplicationOutputRequest req = new AddApplicationOutputRequest(                new AddApplicationOutputRequest("minima", 570197L,                 new Output(                new DestinationSchema(RecordFormatTypeEnum.JSON);, "iure") {{
                                                kinesisFirehoseOutput = new KinesisFirehoseOutput("culpa", "doloribus");;
                                                kinesisStreamsOutput = new KinesisStreamsOutput("sapiente", "architecto");;
                                                lambdaOutput = new LambdaOutput("mollitia", "dolorem");;
                                            }};);, AddApplicationOutputXAmzTargetEnum.KINESIS_ANALYTICS20150814_ADD_APPLICATION_OUTPUT) {{
                xAmzAlgorithm = "culpa";
                xAmzContentSha256 = "consequuntur";
                xAmzCredential = "repellat";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "numquam";
                xAmzSignedHeaders = "commodi";
            }};            

            AddApplicationOutputResponse res = sdk.sdk.addApplicationOutput(req);

            if (res.addApplicationOutputResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## addApplicationReferenceDataSource

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Adds a reference data source to an existing application.</p> <p>Amazon Kinesis Analytics reads reference data (that is, an Amazon S3 object) and creates an in-application table within your application. In the request, you provide the source (S3 bucket name and object key name), name of the in-application table to create, and the necessary mapping information that describes how data in Amazon S3 object maps to columns in the resulting in-application table.</p> <p> For conceptual information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>. For the limits on data sources you can add to your application, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/limits.html">Limits</a>. </p> <p> This operation requires permissions to perform the <code>kinesisanalytics:AddApplicationOutput</code> action. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddApplicationReferenceDataSourceRequest;
import org.openapis.openapi.models.operations.AddApplicationReferenceDataSourceResponse;
import org.openapis.openapi.models.operations.AddApplicationReferenceDataSourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.AddApplicationReferenceDataSourceRequest;
import org.openapis.openapi.models.shared.CSVMappingParameters;
import org.openapis.openapi.models.shared.JSONMappingParameters;
import org.openapis.openapi.models.shared.MappingParameters;
import org.openapis.openapi.models.shared.RecordColumn;
import org.openapis.openapi.models.shared.RecordFormat;
import org.openapis.openapi.models.shared.RecordFormatTypeEnum;
import org.openapis.openapi.models.shared.ReferenceDataSource;
import org.openapis.openapi.models.shared.S3ReferenceDataSource;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SourceSchema;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddApplicationReferenceDataSourceRequest req = new AddApplicationReferenceDataSourceRequest(                new AddApplicationReferenceDataSourceRequest("molestiae", 244425L,                 new ReferenceDataSource(                new SourceSchema(                new org.openapis.openapi.models.shared.RecordColumn[]{{
                                                                                add(new RecordColumn("quo", "sequi") {{
                                                                                    mapping = "quia";
                                                                                    name = "Gloria Padberg";
                                                                                    sqlType = "odit";
                                                                                }}),
                                                                                add(new RecordColumn("laborum", "quasi") {{
                                                                                    mapping = "tenetur";
                                                                                    name = "Mr. Alberta Schuster";
                                                                                    sqlType = "temporibus";
                                                                                }}),
                                                                                add(new RecordColumn("omnis", "voluptate") {{
                                                                                    mapping = "reiciendis";
                                                                                    name = "Caleb Koss";
                                                                                    sqlType = "ipsa";
                                                                                }}),
                                                                            }},                 new RecordFormat(RecordFormatTypeEnum.CSV) {{
                                                                                mappingParameters = new MappingParameters() {{
                                                                                    csvMappingParameters = new CSVMappingParameters("perferendis", "doloremque");;
                                                                                    jsonMappingParameters = new JSONMappingParameters("reprehenderit");;
                                                                                }};;
                                                                            }};) {{
                                                                recordEncoding = "ut";
                                                            }};, "maiores") {{
                                                s3ReferenceDataSource = new S3ReferenceDataSource("dicta", "corporis", "dolore");;
                                            }};);, AddApplicationReferenceDataSourceXAmzTargetEnum.KINESIS_ANALYTICS20150814_ADD_APPLICATION_REFERENCE_DATA_SOURCE) {{
                xAmzAlgorithm = "iusto";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "harum";
                xAmzDate = "enim";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "commodi";
                xAmzSignedHeaders = "repudiandae";
            }};            

            AddApplicationReferenceDataSourceResponse res = sdk.sdk.addApplicationReferenceDataSource(req);

            if (res.addApplicationReferenceDataSourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createApplication

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p> Creates an Amazon Kinesis Analytics application. You can configure each application with one streaming source as input, application code to process the input, and up to three destinations where you want Amazon Kinesis Analytics to write the output data from your application. For an overview, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works.html">How it Works</a>. </p> <p>In the input configuration, you map the streaming source to an in-application stream, which you can think of as a constantly updating table. In the mapping, you must provide a schema for the in-application stream and map each data column in the in-application stream to a data element in the streaming source.</p> <p>Your application code is one or more SQL statements that read input data, transform it, and generate output. Your application code can create one or more SQL artifacts like SQL streams or pumps.</p> <p>In the output configuration, you can configure the application to write data from in-application streams created in your applications to up to three destinations.</p> <p> To read data from your source stream or write data to destination streams, Amazon Kinesis Analytics needs your permissions. You grant these permissions by creating IAM roles. This operation requires permissions to perform the <code>kinesisanalytics:CreateApplication</code> action. </p> <p> For introductory exercises to create an Amazon Kinesis Analytics application, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/getting-started.html">Getting Started</a>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateApplicationRequest;
import org.openapis.openapi.models.operations.CreateApplicationResponse;
import org.openapis.openapi.models.operations.CreateApplicationXAmzTargetEnum;
import org.openapis.openapi.models.shared.CSVMappingParameters;
import org.openapis.openapi.models.shared.CloudWatchLoggingOption;
import org.openapis.openapi.models.shared.CreateApplicationRequest;
import org.openapis.openapi.models.shared.DestinationSchema;
import org.openapis.openapi.models.shared.Input;
import org.openapis.openapi.models.shared.InputLambdaProcessor;
import org.openapis.openapi.models.shared.InputParallelism;
import org.openapis.openapi.models.shared.InputProcessingConfiguration;
import org.openapis.openapi.models.shared.JSONMappingParameters;
import org.openapis.openapi.models.shared.KinesisFirehoseInput;
import org.openapis.openapi.models.shared.KinesisFirehoseOutput;
import org.openapis.openapi.models.shared.KinesisStreamsInput;
import org.openapis.openapi.models.shared.KinesisStreamsOutput;
import org.openapis.openapi.models.shared.LambdaOutput;
import org.openapis.openapi.models.shared.MappingParameters;
import org.openapis.openapi.models.shared.Output;
import org.openapis.openapi.models.shared.RecordColumn;
import org.openapis.openapi.models.shared.RecordFormat;
import org.openapis.openapi.models.shared.RecordFormatTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SourceSchema;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateApplicationRequest req = new CreateApplicationRequest(                new CreateApplicationRequest("ipsum") {{
                                applicationCode = "quidem";
                                applicationDescription = "molestias";
                                cloudWatchLoggingOptions = new org.openapis.openapi.models.shared.CloudWatchLoggingOption[]{{
                                    add(new CloudWatchLoggingOption("praesentium", "rem") {{
                                        logStreamARN = "pariatur";
                                        roleARN = "modi";
                                    }}),
                                    add(new CloudWatchLoggingOption("repudiandae", "sint") {{
                                        logStreamARN = "voluptates";
                                        roleARN = "quasi";
                                    }}),
                                    add(new CloudWatchLoggingOption("incidunt", "enim") {{
                                        logStreamARN = "veritatis";
                                        roleARN = "itaque";
                                    }}),
                                }};
                                inputs = new org.openapis.openapi.models.shared.Input[]{{
                                    add(new Input(                new SourceSchema(                new org.openapis.openapi.models.shared.RecordColumn[]{{
                                                                        add(new RecordColumn("ad", "eum") {{
                                                                            mapping = "ullam";
                                                                            name = "Miss Julian Marvin";
                                                                            sqlType = "mollitia";
                                                                        }}),
                                                                        add(new RecordColumn("eius", "maxime") {{
                                                                            mapping = "dolor";
                                                                            name = "Ms. Fred Hilll";
                                                                            sqlType = "debitis";
                                                                        }}),
                                                                        add(new RecordColumn("nihil", "repellat") {{
                                                                            mapping = "deleniti";
                                                                            name = "Dr. Arnold Bradtke";
                                                                            sqlType = "expedita";
                                                                        }}),
                                                                    }},                 new RecordFormat(RecordFormatTypeEnum.CSV) {{
                                                                        mappingParameters = new MappingParameters() {{
                                                                            csvMappingParameters = new CSVMappingParameters("sed", "saepe");;
                                                                            jsonMappingParameters = new JSONMappingParameters("pariatur");;
                                                                        }};;
                                                                    }};) {{
                                                        recordEncoding = "accusantium";
                                                    }};, "consequuntur") {{
                                        inputParallelism = new InputParallelism() {{
                                            count = 667411L;
                                        }};
                                        inputProcessingConfiguration = new InputProcessingConfiguration(                new InputLambdaProcessor("quibusdam", "labore");) {{
                                            inputLambdaProcessor = new InputLambdaProcessor("deserunt", "distinctio") {{
                                                resourceARN = "quibusdam";
                                                roleARN = "explicabo";
                                            }};
                                        }};
                                        inputSchema = new SourceSchema(                new org.openapis.openapi.models.shared.RecordColumn[]{{
                                                            add(new RecordColumn("magnam", "cumque") {{
                                                                mapping = "dolorum";
                                                                name = "Arlene Stamm";
                                                                sqlType = "dicta";
                                                            }}),
                                                            add(new RecordColumn("enim", "accusamus") {{
                                                                mapping = "facere";
                                                                name = "Beth Padberg";
                                                                sqlType = "occaecati";
                                                            }}),
                                                            add(new RecordColumn("sapiente", "amet") {{
                                                                mapping = "delectus";
                                                                name = "Rene Reinger";
                                                                sqlType = "deleniti";
                                                            }}),
                                                            add(new RecordColumn("nihil", "magnam") {{
                                                                mapping = "deserunt";
                                                                name = "Wilma Mosciski";
                                                                sqlType = "perferendis";
                                                            }}),
                                                        }},                 new RecordFormat(RecordFormatTypeEnum.CSV) {{
                                                            mappingParameters = new MappingParameters() {{
                                                                csvMappingParameters = new CSVMappingParameters("id", "labore");;
                                                                jsonMappingParameters = new JSONMappingParameters("labore");;
                                                            }};;
                                                        }};) {{
                                            recordColumns = new org.openapis.openapi.models.shared.RecordColumn[]{{
                                                add(new RecordColumn("alias", "fugit") {{
                                                    mapping = "qui";
                                                    name = "Mr. Shelly Lueilwitz";
                                                    sqlType = "ipsam";
                                                }}),
                                                add(new RecordColumn("eum", "non") {{
                                                    mapping = "dolorum";
                                                    name = "Eddie Prosacco";
                                                    sqlType = "delectus";
                                                }}),
                                            }};
                                            recordEncoding = "eligendi";
                                            recordFormat = new RecordFormat(RecordFormatTypeEnum.CSV) {{
                                                mappingParameters = new MappingParameters() {{
                                                    csvMappingParameters = new CSVMappingParameters("provident", "necessitatibus") {{
                                                        recordColumnDelimiter = "sint";
                                                        recordRowDelimiter = "aliquid";
                                                    }};
                                                    jsonMappingParameters = new JSONMappingParameters("officia") {{
                                                        recordRowPath = "sint";
                                                    }};
                                                }};
                                                recordFormatType = RecordFormatTypeEnum.JSON;
                                            }};
                                        }};
                                        kinesisFirehoseInput = new KinesisFirehoseInput("nobis", "eum") {{
                                            resourceARN = "suscipit";
                                            roleARN = "natus";
                                        }};
                                        kinesisStreamsInput = new KinesisStreamsInput("architecto", "magnam") {{
                                            resourceARN = "vero";
                                            roleARN = "aspernatur";
                                        }};
                                        namePrefix = "et";
                                    }}),
                                }};
                                outputs = new org.openapis.openapi.models.shared.Output[]{{
                                    add(new Output(                new DestinationSchema(RecordFormatTypeEnum.JSON);, "pariatur") {{
                                        destinationSchema = new DestinationSchema(RecordFormatTypeEnum.JSON) {{
                                            recordFormatType = RecordFormatTypeEnum.CSV;
                                        }};
                                        kinesisFirehoseOutput = new KinesisFirehoseOutput("illum", "pariatur") {{
                                            resourceARN = "sunt";
                                            roleARN = "quo";
                                        }};
                                        kinesisStreamsOutput = new KinesisStreamsOutput("excepturi", "odit") {{
                                            resourceARN = "maxime";
                                            roleARN = "ea";
                                        }};
                                        lambdaOutput = new LambdaOutput("ab", "maiores") {{
                                            resourceARN = "ea";
                                            roleARN = "accusantium";
                                        }};
                                        name = "Clyde Kling";
                                    }}),
                                    add(new Output(                new DestinationSchema(RecordFormatTypeEnum.JSON);, "dolores") {{
                                        destinationSchema = new DestinationSchema(RecordFormatTypeEnum.CSV) {{
                                            recordFormatType = RecordFormatTypeEnum.JSON;
                                        }};
                                        kinesisFirehoseOutput = new KinesisFirehoseOutput("amet", "aut") {{
                                            resourceARN = "perferendis";
                                            roleARN = "fugiat";
                                        }};
                                        kinesisStreamsOutput = new KinesisStreamsOutput("hic", "libero") {{
                                            resourceARN = "cumque";
                                            roleARN = "corporis";
                                        }};
                                        lambdaOutput = new LambdaOutput("quis", "totam") {{
                                            resourceARN = "nobis";
                                            roleARN = "dolores";
                                        }};
                                        name = "Cynthia Hayes";
                                    }}),
                                    add(new Output(                new DestinationSchema(RecordFormatTypeEnum.CSV);, "earum") {{
                                        destinationSchema = new DestinationSchema(RecordFormatTypeEnum.JSON) {{
                                            recordFormatType = RecordFormatTypeEnum.CSV;
                                        }};
                                        kinesisFirehoseOutput = new KinesisFirehoseOutput("nostrum", "hic") {{
                                            resourceARN = "dolor";
                                            roleARN = "vero";
                                        }};
                                        kinesisStreamsOutput = new KinesisStreamsOutput("facilis", "perspiciatis") {{
                                            resourceARN = "recusandae";
                                            roleARN = "omnis";
                                        }};
                                        lambdaOutput = new LambdaOutput("consequuntur", "blanditiis") {{
                                            resourceARN = "voluptatem";
                                            roleARN = "porro";
                                        }};
                                        name = "Gary Mayert";
                                    }}),
                                }};
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("deleniti") {{
                                        key = "iste";
                                        value = "dolorum";
                                    }}),
                                    add(new Tag("nobis") {{
                                        key = "pariatur";
                                        value = "provident";
                                    }}),
                                }};
                            }};, CreateApplicationXAmzTargetEnum.KINESIS_ANALYTICS20150814_CREATE_APPLICATION) {{
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "quaerat";
                xAmzDate = "quos";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "dolorem";
                xAmzSignedHeaders = "dolorem";
            }};            

            CreateApplicationResponse res = sdk.sdk.createApplication(req);

            if (res.createApplicationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteApplication

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Deletes the specified application. Amazon Kinesis Analytics halts application execution and deletes the application, including any application artifacts (such as in-application streams, reference table, and application code).</p> <p>This operation requires permissions to perform the <code>kinesisanalytics:DeleteApplication</code> action.</p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteApplicationRequest;
import org.openapis.openapi.models.operations.DeleteApplicationResponse;
import org.openapis.openapi.models.operations.DeleteApplicationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteApplicationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteApplicationRequest req = new DeleteApplicationRequest(                new DeleteApplicationRequest("qui", OffsetDateTime.parse("2022-01-21T07:17:52.299Z"));, DeleteApplicationXAmzTargetEnum.KINESIS_ANALYTICS20150814_DELETE_APPLICATION) {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "cum";
                xAmzCredential = "voluptate";
                xAmzDate = "dignissimos";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "amet";
                xAmzSignedHeaders = "dolorum";
            }};            

            DeleteApplicationResponse res = sdk.sdk.deleteApplication(req);

            if (res.deleteApplicationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteApplicationCloudWatchLoggingOption

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Deletes a CloudWatch log stream from an application. For more information about using CloudWatch log streams with Amazon Kinesis Analytics applications, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/cloudwatch-logs.html">Working with Amazon CloudWatch Logs</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteApplicationCloudWatchLoggingOptionRequest;
import org.openapis.openapi.models.operations.DeleteApplicationCloudWatchLoggingOptionResponse;
import org.openapis.openapi.models.operations.DeleteApplicationCloudWatchLoggingOptionXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteApplicationCloudWatchLoggingOptionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteApplicationCloudWatchLoggingOptionRequest req = new DeleteApplicationCloudWatchLoggingOptionRequest(                new DeleteApplicationCloudWatchLoggingOptionRequest("veritatis", "ipsa", 56418L);, DeleteApplicationCloudWatchLoggingOptionXAmzTargetEnum.KINESIS_ANALYTICS20150814_DELETE_APPLICATION_CLOUD_WATCH_LOGGING_OPTION) {{
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "odio";
                xAmzCredential = "quaerat";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "voluptas";
            }};            

            DeleteApplicationCloudWatchLoggingOptionResponse res = sdk.sdk.deleteApplicationCloudWatchLoggingOption(req);

            if (res.deleteApplicationCloudWatchLoggingOptionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteApplicationInputProcessingConfiguration

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Deletes an <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html">InputProcessingConfiguration</a> from an input.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteApplicationInputProcessingConfigurationRequest;
import org.openapis.openapi.models.operations.DeleteApplicationInputProcessingConfigurationResponse;
import org.openapis.openapi.models.operations.DeleteApplicationInputProcessingConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteApplicationInputProcessingConfigurationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteApplicationInputProcessingConfigurationRequest req = new DeleteApplicationInputProcessingConfigurationRequest(                new DeleteApplicationInputProcessingConfigurationRequest("eos", 542499L, "sit");, DeleteApplicationInputProcessingConfigurationXAmzTargetEnum.KINESIS_ANALYTICS20150814_DELETE_APPLICATION_INPUT_PROCESSING_CONFIGURATION) {{
                xAmzAlgorithm = "fugiat";
                xAmzContentSha256 = "ab";
                xAmzCredential = "soluta";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "iusto";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "dolorum";
            }};            

            DeleteApplicationInputProcessingConfigurationResponse res = sdk.sdk.deleteApplicationInputProcessingConfiguration(req);

            if (res.deleteApplicationInputProcessingConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteApplicationOutput

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Deletes output destination configuration from your application configuration. Amazon Kinesis Analytics will no longer write data from the corresponding in-application stream to the external output destination.</p> <p>This operation requires permissions to perform the <code>kinesisanalytics:DeleteApplicationOutput</code> action.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteApplicationOutputRequest;
import org.openapis.openapi.models.operations.DeleteApplicationOutputResponse;
import org.openapis.openapi.models.operations.DeleteApplicationOutputXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteApplicationOutputRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteApplicationOutputRequest req = new DeleteApplicationOutputRequest(                new DeleteApplicationOutputRequest("omnis", 896672L, "distinctio");, DeleteApplicationOutputXAmzTargetEnum.KINESIS_ANALYTICS20150814_DELETE_APPLICATION_OUTPUT) {{
                xAmzAlgorithm = "asperiores";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "ipsum";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "id";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "eius";
            }};            

            DeleteApplicationOutputResponse res = sdk.sdk.deleteApplicationOutput(req);

            if (res.deleteApplicationOutputResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteApplicationReferenceDataSource

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Deletes a reference data source configuration from the specified application configuration.</p> <p>If the application is running, Amazon Kinesis Analytics immediately removes the in-application table that you created using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_AddApplicationReferenceDataSource.html">AddApplicationReferenceDataSource</a> operation. </p> <p>This operation requires permissions to perform the <code>kinesisanalytics.DeleteApplicationReferenceDataSource</code> action.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteApplicationReferenceDataSourceRequest;
import org.openapis.openapi.models.operations.DeleteApplicationReferenceDataSourceResponse;
import org.openapis.openapi.models.operations.DeleteApplicationReferenceDataSourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteApplicationReferenceDataSourceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteApplicationReferenceDataSourceRequest req = new DeleteApplicationReferenceDataSourceRequest(                new DeleteApplicationReferenceDataSourceRequest("perferendis", 229219L, "optio");, DeleteApplicationReferenceDataSourceXAmzTargetEnum.KINESIS_ANALYTICS20150814_DELETE_APPLICATION_REFERENCE_DATA_SOURCE) {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "ad";
                xAmzCredential = "saepe";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "minima";
            }};            

            DeleteApplicationReferenceDataSourceResponse res = sdk.sdk.deleteApplicationReferenceDataSource(req);

            if (res.deleteApplicationReferenceDataSourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeApplication

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Returns information about a specific Amazon Kinesis Analytics application.</p> <p>If you want to retrieve a list of all applications in your account, use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_ListApplications.html">ListApplications</a> operation.</p> <p>This operation requires permissions to perform the <code>kinesisanalytics:DescribeApplication</code> action. You can use <code>DescribeApplication</code> to get the current application versionId, which you need to call other operations such as <code>Update</code>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeApplicationRequest;
import org.openapis.openapi.models.operations.DescribeApplicationResponse;
import org.openapis.openapi.models.operations.DescribeApplicationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeApplicationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeApplicationRequest req = new DescribeApplicationRequest(                new DescribeApplicationRequest("totam");, DescribeApplicationXAmzTargetEnum.KINESIS_ANALYTICS20150814_DESCRIBE_APPLICATION) {{
                xAmzAlgorithm = "similique";
                xAmzContentSha256 = "alias";
                xAmzCredential = "at";
                xAmzDate = "quaerat";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "quod";
            }};            

            DescribeApplicationResponse res = sdk.sdk.describeApplication(req);

            if (res.describeApplicationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## discoverInputSchema

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Infers a schema by evaluating sample records on the specified streaming source (Amazon Kinesis stream or Amazon Kinesis Firehose delivery stream) or S3 object. In the response, the operation returns the inferred schema and also the sample records that the operation used to infer the schema.</p> <p> You can use the inferred schema when configuring a streaming source for your application. For conceptual information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>. Note that when you create an application using the Amazon Kinesis Analytics console, the console uses this operation to infer a schema and show it in the console user interface. </p> <p> This operation requires permissions to perform the <code>kinesisanalytics:DiscoverInputSchema</code> action. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DiscoverInputSchemaRequest;
import org.openapis.openapi.models.operations.DiscoverInputSchemaResponse;
import org.openapis.openapi.models.operations.DiscoverInputSchemaXAmzTargetEnum;
import org.openapis.openapi.models.shared.DiscoverInputSchemaRequest;
import org.openapis.openapi.models.shared.InputLambdaProcessor;
import org.openapis.openapi.models.shared.InputProcessingConfiguration;
import org.openapis.openapi.models.shared.InputStartingPositionConfiguration;
import org.openapis.openapi.models.shared.InputStartingPositionEnum;
import org.openapis.openapi.models.shared.S3Configuration;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DiscoverInputSchemaRequest req = new DiscoverInputSchemaRequest(                new DiscoverInputSchemaRequest() {{
                                inputProcessingConfiguration = new InputProcessingConfiguration(                new InputLambdaProcessor("qui", "dolorum"););;
                                inputStartingPositionConfiguration = new InputStartingPositionConfiguration() {{
                                    inputStartingPosition = InputStartingPositionEnum.LAST_STOPPED_POINT;
                                }};;
                                resourceARN = "esse";
                                roleARN = "harum";
                                s3Configuration = new S3Configuration("iusto", "ipsum", "quisquam");;
                            }};, DiscoverInputSchemaXAmzTargetEnum.KINESIS_ANALYTICS20150814_DISCOVER_INPUT_SCHEMA) {{
                xAmzAlgorithm = "tenetur";
                xAmzContentSha256 = "amet";
                xAmzCredential = "tempore";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "numquam";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "dolorem";
            }};            

            DiscoverInputSchemaResponse res = sdk.sdk.discoverInputSchema(req);

            if (res.discoverInputSchemaResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listApplications

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Returns a list of Amazon Kinesis Analytics applications in your account. For each application, the response includes the application name, Amazon Resource Name (ARN), and status. If the response returns the <code>HasMoreApplications</code> value as true, you can send another request by adding the <code>ExclusiveStartApplicationName</code> in the request body, and set the value of this to the last application name from the previous response. </p> <p>If you want detailed information about a specific application, use <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a>.</p> <p>This operation requires permissions to perform the <code>kinesisanalytics:ListApplications</code> action.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListApplicationsRequest;
import org.openapis.openapi.models.operations.ListApplicationsResponse;
import org.openapis.openapi.models.operations.ListApplicationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListApplicationsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListApplicationsRequest req = new ListApplicationsRequest(                new ListApplicationsRequest() {{
                                exclusiveStartApplicationName = "totam";
                                limit = 471752L;
                            }};, ListApplicationsXAmzTargetEnum.KINESIS_ANALYTICS20150814_LIST_APPLICATIONS) {{
                xAmzAlgorithm = "sit";
                xAmzContentSha256 = "expedita";
                xAmzCredential = "neque";
                xAmzDate = "sed";
                xAmzSecurityToken = "vel";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "voluptas";
            }};            

            ListApplicationsResponse res = sdk.sdk.listApplications(req);

            if (res.listApplicationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Retrieves the list of key-value tags assigned to the application. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-tagging.html">Using Tagging</a>.

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
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceRequest("quam");, ListTagsForResourceXAmzTargetEnum.KINESIS_ANALYTICS20150814_LIST_TAGS_FOR_RESOURCE) {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "incidunt";
                xAmzCredential = "qui";
                xAmzDate = "cupiditate";
                xAmzSecurityToken = "maxime";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "soluta";
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

## startApplication

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Starts the specified Amazon Kinesis Analytics application. After creating an application, you must exclusively call this operation to start your application.</p> <p>After the application starts, it begins consuming the input data, processes it, and writes the output to the configured destination.</p> <p> The application status must be <code>READY</code> for you to start an application. You can get the application status in the console or using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation.</p> <p>After you start the application, you can stop the application from processing the input by calling the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_StopApplication.html">StopApplication</a> operation.</p> <p>This operation requires permissions to perform the <code>kinesisanalytics:StartApplication</code> action.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartApplicationRequest;
import org.openapis.openapi.models.operations.StartApplicationResponse;
import org.openapis.openapi.models.operations.StartApplicationXAmzTargetEnum;
import org.openapis.openapi.models.shared.InputConfiguration;
import org.openapis.openapi.models.shared.InputStartingPositionConfiguration;
import org.openapis.openapi.models.shared.InputStartingPositionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartApplicationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartApplicationRequest req = new StartApplicationRequest(                new StartApplicationRequest("laborum",                 new org.openapis.openapi.models.shared.InputConfiguration[]{{
                                                add(new InputConfiguration("dolorem",                 new InputStartingPositionConfiguration() {{
                                                                    inputStartingPosition = InputStartingPositionEnum.NOW;
                                                                }};) {{
                                                    id = "422bb679-d232-4271-9bf0-cbb1e31b8b90";
                                                    inputStartingPositionConfiguration = new InputStartingPositionConfiguration() {{
                                                        inputStartingPosition = InputStartingPositionEnum.LAST_STOPPED_POINT;
                                                    }};
                                                }}),
                                                add(new InputConfiguration("dignissimos",                 new InputStartingPositionConfiguration() {{
                                                                    inputStartingPosition = InputStartingPositionEnum.LAST_STOPPED_POINT;
                                                                }};) {{
                                                    id = "43a1108e-0adc-4f4b-9218-79fce953f73e";
                                                    inputStartingPositionConfiguration = new InputStartingPositionConfiguration() {{
                                                        inputStartingPosition = InputStartingPositionEnum.LAST_STOPPED_POINT;
                                                    }};
                                                }}),
                                                add(new InputConfiguration("magnam",                 new InputStartingPositionConfiguration() {{
                                                                    inputStartingPosition = InputStartingPositionEnum.NOW;
                                                                }};) {{
                                                    id = "bc7abd74-dd39-4c0f-9d2c-ff7c70a45626";
                                                    inputStartingPositionConfiguration = new InputStartingPositionConfiguration() {{
                                                        inputStartingPosition = InputStartingPositionEnum.LAST_STOPPED_POINT;
                                                    }};
                                                }}),
                                            }});, StartApplicationXAmzTargetEnum.KINESIS_ANALYTICS20150814_START_APPLICATION) {{
                xAmzAlgorithm = "ex";
                xAmzContentSha256 = "laudantium";
                xAmzCredential = "dicta";
                xAmzDate = "dolor";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "ex";
            }};            

            StartApplicationResponse res = sdk.sdk.startApplication(req);

            if (res.startApplicationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopApplication

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Stops the application from processing input data. You can stop an application only if it is in the running state. You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to find the application state. After the application is stopped, Amazon Kinesis Analytics stops reading data from the input, the application stops processing data, and there is no output written to the destination. </p> <p>This operation requires permissions to perform the <code>kinesisanalytics:StopApplication</code> action.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopApplicationRequest;
import org.openapis.openapi.models.operations.StopApplicationResponse;
import org.openapis.openapi.models.operations.StopApplicationXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopApplicationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopApplicationRequest req = new StopApplicationRequest(                new StopApplicationRequest("excepturi");, StopApplicationXAmzTargetEnum.KINESIS_ANALYTICS20150814_STOP_APPLICATION) {{
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "nostrum";
                xAmzCredential = "sapiente";
                xAmzDate = "quisquam";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "impedit";
            }};            

            StopApplicationResponse res = sdk.sdk.stopApplication(req);

            if (res.stopApplicationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Adds one or more key-value tags to a Kinesis Analytics application. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-tagging.html">Using Tagging</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.operations.TagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequest("veniam",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("ea") {{
                                                    key = "inventore";
                                                    value = "magnam";
                                                }}),
                                                add(new Tag("recusandae") {{
                                                    key = "quo";
                                                    value = "consectetur";
                                                }}),
                                            }});, TagResourceXAmzTargetEnum.KINESIS_ANALYTICS20150814_TAG_RESOURCE) {{
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "minima";
                xAmzCredential = "eaque";
                xAmzDate = "a";
                xAmzSecurityToken = "libero";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "aut";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Removes one or more tags from a Kinesis Analytics application. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-tagging.html">Using Tagging</a>.

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
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequest("impedit",                 new String[]{{
                                                add("fugit"),
                                                add("accusamus"),
                                            }});, UntagResourceXAmzTargetEnum.KINESIS_ANALYTICS20150814_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "inventore";
                xAmzContentSha256 = "non";
                xAmzCredential = "et";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "placeat";
                xAmzSignedHeaders = "velit";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateApplication

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Updates an existing Amazon Kinesis Analytics application. Using this API, you can update application code, input configuration, and output configuration. </p> <p>Note that Amazon Kinesis Analytics updates the <code>CurrentApplicationVersionId</code> each time you update your application. </p> <p>This operation requires permission for the <code>kinesisanalytics:UpdateApplication</code> action.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateApplicationRequest;
import org.openapis.openapi.models.operations.UpdateApplicationResponse;
import org.openapis.openapi.models.operations.UpdateApplicationXAmzTargetEnum;
import org.openapis.openapi.models.shared.ApplicationUpdate;
import org.openapis.openapi.models.shared.CSVMappingParameters;
import org.openapis.openapi.models.shared.CloudWatchLoggingOptionUpdate;
import org.openapis.openapi.models.shared.DestinationSchema;
import org.openapis.openapi.models.shared.InputLambdaProcessorUpdate;
import org.openapis.openapi.models.shared.InputParallelismUpdate;
import org.openapis.openapi.models.shared.InputProcessingConfigurationUpdate;
import org.openapis.openapi.models.shared.InputSchemaUpdate;
import org.openapis.openapi.models.shared.InputUpdate;
import org.openapis.openapi.models.shared.JSONMappingParameters;
import org.openapis.openapi.models.shared.KinesisFirehoseInputUpdate;
import org.openapis.openapi.models.shared.KinesisFirehoseOutputUpdate;
import org.openapis.openapi.models.shared.KinesisStreamsInputUpdate;
import org.openapis.openapi.models.shared.KinesisStreamsOutputUpdate;
import org.openapis.openapi.models.shared.LambdaOutputUpdate;
import org.openapis.openapi.models.shared.MappingParameters;
import org.openapis.openapi.models.shared.OutputUpdate;
import org.openapis.openapi.models.shared.RecordColumn;
import org.openapis.openapi.models.shared.RecordFormat;
import org.openapis.openapi.models.shared.RecordFormatTypeEnum;
import org.openapis.openapi.models.shared.ReferenceDataSourceUpdate;
import org.openapis.openapi.models.shared.S3ReferenceDataSourceUpdate;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SourceSchema;
import org.openapis.openapi.models.shared.UpdateApplicationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateApplicationRequest req = new UpdateApplicationRequest(                new UpdateApplicationRequest("autem",                 new ApplicationUpdate() {{
                                                applicationCodeUpdate = "nobis";
                                                cloudWatchLoggingOptionUpdates = new org.openapis.openapi.models.shared.CloudWatchLoggingOptionUpdate[]{{
                                                    add(new CloudWatchLoggingOptionUpdate("libero") {{
                                                        cloudWatchLoggingOptionId = "assumenda";
                                                        logStreamARNUpdate = "nulla";
                                                        roleARNUpdate = "voluptas";
                                                    }}),
                                                    add(new CloudWatchLoggingOptionUpdate("explicabo") {{
                                                        cloudWatchLoggingOptionId = "quasi";
                                                        logStreamARNUpdate = "tempora";
                                                        roleARNUpdate = "numquam";
                                                    }}),
                                                    add(new CloudWatchLoggingOptionUpdate("magnam") {{
                                                        cloudWatchLoggingOptionId = "provident";
                                                        logStreamARNUpdate = "ipsa";
                                                        roleARNUpdate = "molestiae";
                                                    }}),
                                                }};
                                                inputUpdates = new org.openapis.openapi.models.shared.InputUpdate[]{{
                                                    add(new InputUpdate("commodi") {{
                                                        inputId = "eius";
                                                        inputParallelismUpdate = new InputParallelismUpdate() {{
                                                            countUpdate = 458515L;
                                                        }};
                                                        inputProcessingConfigurationUpdate = new InputProcessingConfigurationUpdate(                new InputLambdaProcessorUpdate() {{
                                                                            resourceARNUpdate = "fuga";
                                                                            roleARNUpdate = "reprehenderit";
                                                                        }};) {{
                                                            inputLambdaProcessorUpdate = new InputLambdaProcessorUpdate() {{
                                                                resourceARNUpdate = "esse";
                                                                roleARNUpdate = "rem";
                                                            }};
                                                        }};
                                                        inputSchemaUpdate = new InputSchemaUpdate() {{
                                                            recordColumnUpdates = new org.openapis.openapi.models.shared.RecordColumn[]{{
                                                                add(new RecordColumn("quisquam", "veritatis") {{
                                                                    mapping = "fugiat";
                                                                    name = "Agnes Hoeger";
                                                                    sqlType = "praesentium";
                                                                }}),
                                                                add(new RecordColumn("fuga", "eius") {{
                                                                    mapping = "ipsa";
                                                                    name = "Rickey DuBuque";
                                                                    sqlType = "quo";
                                                                }}),
                                                                add(new RecordColumn("aspernatur", "sequi") {{
                                                                    mapping = "eos";
                                                                    name = "Mrs. Virginia McGlynn";
                                                                    sqlType = "ipsam";
                                                                }}),
                                                            }};
                                                            recordEncodingUpdate = "quo";
                                                            recordFormatUpdate = new RecordFormat(RecordFormatTypeEnum.JSON) {{
                                                                mappingParameters = new MappingParameters() {{
                                                                    csvMappingParameters = new CSVMappingParameters("aperiam", "distinctio") {{
                                                                        recordColumnDelimiter = "esse";
                                                                        recordRowDelimiter = "recusandae";
                                                                    }};
                                                                    jsonMappingParameters = new JSONMappingParameters("dignissimos") {{
                                                                        recordRowPath = "quod";
                                                                    }};
                                                                }};
                                                                recordFormatType = RecordFormatTypeEnum.JSON;
                                                            }};
                                                        }};
                                                        kinesisFirehoseInputUpdate = new KinesisFirehoseInputUpdate() {{
                                                            resourceARNUpdate = "totam";
                                                            roleARNUpdate = "accusamus";
                                                        }};
                                                        kinesisStreamsInputUpdate = new KinesisStreamsInputUpdate() {{
                                                            resourceARNUpdate = "aliquam";
                                                            roleARNUpdate = "odio";
                                                        }};
                                                        namePrefixUpdate = "occaecati";
                                                    }}),
                                                    add(new InputUpdate("vel") {{
                                                        inputId = "sapiente";
                                                        inputParallelismUpdate = new InputParallelismUpdate() {{
                                                            countUpdate = 174112L;
                                                        }};
                                                        inputProcessingConfigurationUpdate = new InputProcessingConfigurationUpdate(                new InputLambdaProcessorUpdate() {{
                                                                            resourceARNUpdate = "accusantium";
                                                                            roleARNUpdate = "porro";
                                                                        }};) {{
                                                            inputLambdaProcessorUpdate = new InputLambdaProcessorUpdate() {{
                                                                resourceARNUpdate = "deserunt";
                                                                roleARNUpdate = "molestiae";
                                                            }};
                                                        }};
                                                        inputSchemaUpdate = new InputSchemaUpdate() {{
                                                            recordColumnUpdates = new org.openapis.openapi.models.shared.RecordColumn[]{{
                                                                add(new RecordColumn("incidunt", "atque") {{
                                                                    mapping = "quas";
                                                                    name = "Eugene Leuschke";
                                                                    sqlType = "mollitia";
                                                                }}),
                                                                add(new RecordColumn("explicabo", "saepe") {{
                                                                    mapping = "explicabo";
                                                                    name = "Sue Corkery";
                                                                    sqlType = "ratione";
                                                                }}),
                                                            }};
                                                            recordEncodingUpdate = "occaecati";
                                                            recordFormatUpdate = new RecordFormat(RecordFormatTypeEnum.CSV) {{
                                                                mappingParameters = new MappingParameters() {{
                                                                    csvMappingParameters = new CSVMappingParameters("esse", "eveniet") {{
                                                                        recordColumnDelimiter = "atque";
                                                                        recordRowDelimiter = "et";
                                                                    }};
                                                                    jsonMappingParameters = new JSONMappingParameters("veritatis") {{
                                                                        recordRowPath = "accusamus";
                                                                    }};
                                                                }};
                                                                recordFormatType = RecordFormatTypeEnum.JSON;
                                                            }};
                                                        }};
                                                        kinesisFirehoseInputUpdate = new KinesisFirehoseInputUpdate() {{
                                                            resourceARNUpdate = "nam";
                                                            roleARNUpdate = "vero";
                                                        }};
                                                        kinesisStreamsInputUpdate = new KinesisStreamsInputUpdate() {{
                                                            resourceARNUpdate = "aliquid";
                                                            roleARNUpdate = "quasi";
                                                        }};
                                                        namePrefixUpdate = "saepe";
                                                    }}),
                                                }};
                                                outputUpdates = new org.openapis.openapi.models.shared.OutputUpdate[]{{
                                                    add(new OutputUpdate("cumque") {{
                                                        destinationSchemaUpdate = new DestinationSchema(RecordFormatTypeEnum.CSV) {{
                                                            recordFormatType = RecordFormatTypeEnum.JSON;
                                                        }};
                                                        kinesisFirehoseOutputUpdate = new KinesisFirehoseOutputUpdate() {{
                                                            resourceARNUpdate = "occaecati";
                                                            roleARNUpdate = "minima";
                                                        }};
                                                        kinesisStreamsOutputUpdate = new KinesisStreamsOutputUpdate() {{
                                                            resourceARNUpdate = "distinctio";
                                                            roleARNUpdate = "eligendi";
                                                        }};
                                                        lambdaOutputUpdate = new LambdaOutputUpdate() {{
                                                            resourceARNUpdate = "sit";
                                                            roleARNUpdate = "culpa";
                                                        }};
                                                        nameUpdate = "tempore";
                                                        outputId = "adipisci";
                                                    }}),
                                                    add(new OutputUpdate("nulla") {{
                                                        destinationSchemaUpdate = new DestinationSchema(RecordFormatTypeEnum.JSON) {{
                                                            recordFormatType = RecordFormatTypeEnum.JSON;
                                                        }};
                                                        kinesisFirehoseOutputUpdate = new KinesisFirehoseOutputUpdate() {{
                                                            resourceARNUpdate = "minus";
                                                            roleARNUpdate = "quaerat";
                                                        }};
                                                        kinesisStreamsOutputUpdate = new KinesisStreamsOutputUpdate() {{
                                                            resourceARNUpdate = "sapiente";
                                                            roleARNUpdate = "consectetur";
                                                        }};
                                                        lambdaOutputUpdate = new LambdaOutputUpdate() {{
                                                            resourceARNUpdate = "esse";
                                                            roleARNUpdate = "blanditiis";
                                                        }};
                                                        nameUpdate = "provident";
                                                        outputId = "a";
                                                    }}),
                                                    add(new OutputUpdate("asperiores") {{
                                                        destinationSchemaUpdate = new DestinationSchema(RecordFormatTypeEnum.JSON) {{
                                                            recordFormatType = RecordFormatTypeEnum.CSV;
                                                        }};
                                                        kinesisFirehoseOutputUpdate = new KinesisFirehoseOutputUpdate() {{
                                                            resourceARNUpdate = "quasi";
                                                            roleARNUpdate = "a";
                                                        }};
                                                        kinesisStreamsOutputUpdate = new KinesisStreamsOutputUpdate() {{
                                                            resourceARNUpdate = "error";
                                                            roleARNUpdate = "sint";
                                                        }};
                                                        lambdaOutputUpdate = new LambdaOutputUpdate() {{
                                                            resourceARNUpdate = "pariatur";
                                                            roleARNUpdate = "possimus";
                                                        }};
                                                        nameUpdate = "quia";
                                                        outputId = "eveniet";
                                                    }}),
                                                }};
                                                referenceDataSourceUpdates = new org.openapis.openapi.models.shared.ReferenceDataSourceUpdate[]{{
                                                    add(new ReferenceDataSourceUpdate("eum") {{
                                                        referenceId = "veritatis";
                                                        referenceSchemaUpdate = new SourceSchema(                new org.openapis.openapi.models.shared.RecordColumn[]{{
                                                                            add(new RecordColumn("itaque", "dolorum") {{
                                                                                mapping = "nisi";
                                                                                name = "Nora Denesik";
                                                                                sqlType = "deleniti";
                                                                            }}),
                                                                            add(new RecordColumn("minima", "veritatis") {{
                                                                                mapping = "architecto";
                                                                                name = "Irvin Boyle III";
                                                                                sqlType = "ipsa";
                                                                            }}),
                                                                        }},                 new RecordFormat(RecordFormatTypeEnum.JSON) {{
                                                                            mappingParameters = new MappingParameters() {{
                                                                                csvMappingParameters = new CSVMappingParameters("adipisci", "iste");;
                                                                                jsonMappingParameters = new JSONMappingParameters("temporibus");;
                                                                            }};;
                                                                        }};) {{
                                                            recordColumns = new org.openapis.openapi.models.shared.RecordColumn[]{{
                                                                add(new RecordColumn("in", "eius") {{
                                                                    mapping = "quasi";
                                                                    name = "Shannon Jacobi DVM";
                                                                    sqlType = "vel";
                                                                }}),
                                                            }};
                                                            recordEncoding = "libero";
                                                            recordFormat = new RecordFormat(RecordFormatTypeEnum.JSON) {{
                                                                mappingParameters = new MappingParameters() {{
                                                                    csvMappingParameters = new CSVMappingParameters("accusantium", "aliquam") {{
                                                                        recordColumnDelimiter = "illum";
                                                                        recordRowDelimiter = "soluta";
                                                                    }};
                                                                    jsonMappingParameters = new JSONMappingParameters("dicta") {{
                                                                        recordRowPath = "sapiente";
                                                                    }};
                                                                }};
                                                                recordFormatType = RecordFormatTypeEnum.JSON;
                                                            }};
                                                        }};
                                                        s3ReferenceDataSourceUpdate = new S3ReferenceDataSourceUpdate() {{
                                                            bucketARNUpdate = "accusantium";
                                                            fileKeyUpdate = "rem";
                                                            referenceRoleARNUpdate = "aut";
                                                        }};
                                                        tableNameUpdate = "laudantium";
                                                    }}),
                                                    add(new ReferenceDataSourceUpdate("fuga") {{
                                                        referenceId = "mollitia";
                                                        referenceSchemaUpdate = new SourceSchema(                new org.openapis.openapi.models.shared.RecordColumn[]{{
                                                                            add(new RecordColumn("officia", "asperiores") {{
                                                                                mapping = "ea";
                                                                                name = "Kathryn Sipes";
                                                                                sqlType = "dignissimos";
                                                                            }}),
                                                                        }},                 new RecordFormat(RecordFormatTypeEnum.JSON) {{
                                                                            mappingParameters = new MappingParameters() {{
                                                                                csvMappingParameters = new CSVMappingParameters("quae", "quaerat");;
                                                                                jsonMappingParameters = new JSONMappingParameters("porro");;
                                                                            }};;
                                                                        }};) {{
                                                            recordColumns = new org.openapis.openapi.models.shared.RecordColumn[]{{
                                                                add(new RecordColumn("explicabo", "voluptas") {{
                                                                    mapping = "corrupti";
                                                                    name = "Donna Ernser";
                                                                    sqlType = "impedit";
                                                                }}),
                                                            }};
                                                            recordEncoding = "aut";
                                                            recordFormat = new RecordFormat(RecordFormatTypeEnum.CSV) {{
                                                                mappingParameters = new MappingParameters() {{
                                                                    csvMappingParameters = new CSVMappingParameters("maiores", "natus") {{
                                                                        recordColumnDelimiter = "dignissimos";
                                                                        recordRowDelimiter = "dicta";
                                                                    }};
                                                                    jsonMappingParameters = new JSONMappingParameters("voluptatibus") {{
                                                                        recordRowPath = "velit";
                                                                    }};
                                                                }};
                                                                recordFormatType = RecordFormatTypeEnum.JSON;
                                                            }};
                                                        }};
                                                        s3ReferenceDataSourceUpdate = new S3ReferenceDataSourceUpdate() {{
                                                            bucketARNUpdate = "quod";
                                                            fileKeyUpdate = "labore";
                                                            referenceRoleARNUpdate = "ab";
                                                        }};
                                                        tableNameUpdate = "adipisci";
                                                    }}),
                                                    add(new ReferenceDataSourceUpdate("ullam") {{
                                                        referenceId = "id";
                                                        referenceSchemaUpdate = new SourceSchema(                new org.openapis.openapi.models.shared.RecordColumn[]{{
                                                                            add(new RecordColumn("necessitatibus", "dolore") {{
                                                                                mapping = "facere";
                                                                                name = "Melba Homenick";
                                                                                sqlType = "saepe";
                                                                            }}),
                                                                            add(new RecordColumn("debitis", "consectetur") {{
                                                                                mapping = "sunt";
                                                                                name = "Chad Franey IV";
                                                                                sqlType = "a";
                                                                            }}),
                                                                            add(new RecordColumn("accusamus", "similique") {{
                                                                                mapping = "corporis";
                                                                                name = "Rick Beer";
                                                                                sqlType = "vitae";
                                                                            }}),
                                                                            add(new RecordColumn("dolorum", "adipisci") {{
                                                                                mapping = "tempora";
                                                                                name = "Yolanda Hirthe";
                                                                                sqlType = "nobis";
                                                                            }}),
                                                                        }},                 new RecordFormat(RecordFormatTypeEnum.CSV) {{
                                                                            mappingParameters = new MappingParameters() {{
                                                                                csvMappingParameters = new CSVMappingParameters("dolores", "blanditiis");;
                                                                                jsonMappingParameters = new JSONMappingParameters("in");;
                                                                            }};;
                                                                        }};) {{
                                                            recordColumns = new org.openapis.openapi.models.shared.RecordColumn[]{{
                                                                add(new RecordColumn("ducimus", "quos") {{
                                                                    mapping = "velit";
                                                                    name = "Rex Walter";
                                                                    sqlType = "vel";
                                                                }}),
                                                                add(new RecordColumn("corporis", "reiciendis") {{
                                                                    mapping = "vel";
                                                                    name = "Elena Quigley";
                                                                    sqlType = "in";
                                                                }}),
                                                            }};
                                                            recordEncoding = "assumenda";
                                                            recordFormat = new RecordFormat(RecordFormatTypeEnum.JSON) {{
                                                                mappingParameters = new MappingParameters() {{
                                                                    csvMappingParameters = new CSVMappingParameters("aliquid", "aperiam") {{
                                                                        recordColumnDelimiter = "nemo";
                                                                        recordRowDelimiter = "recusandae";
                                                                    }};
                                                                    jsonMappingParameters = new JSONMappingParameters("consectetur") {{
                                                                        recordRowPath = "cum";
                                                                    }};
                                                                }};
                                                                recordFormatType = RecordFormatTypeEnum.JSON;
                                                            }};
                                                        }};
                                                        s3ReferenceDataSourceUpdate = new S3ReferenceDataSourceUpdate() {{
                                                            bucketARNUpdate = "dolore";
                                                            fileKeyUpdate = "aliquam";
                                                            referenceRoleARNUpdate = "officiis";
                                                        }};
                                                        tableNameUpdate = "temporibus";
                                                    }}),
                                                    add(new ReferenceDataSourceUpdate("laudantium") {{
                                                        referenceId = "adipisci";
                                                        referenceSchemaUpdate = new SourceSchema(                new org.openapis.openapi.models.shared.RecordColumn[]{{
                                                                            add(new RecordColumn("necessitatibus", "ipsum") {{
                                                                                mapping = "perferendis";
                                                                                name = "Emilio Goodwin";
                                                                                sqlType = "eius";
                                                                            }}),
                                                                            add(new RecordColumn("reiciendis", "ex") {{
                                                                                mapping = "ea";
                                                                                name = "Isaac Wolf";
                                                                                sqlType = "voluptate";
                                                                            }}),
                                                                            add(new RecordColumn("ipsam", "debitis") {{
                                                                                mapping = "sit";
                                                                                name = "Cecelia Lakin";
                                                                                sqlType = "incidunt";
                                                                            }}),
                                                                            add(new RecordColumn("reiciendis", "nulla") {{
                                                                                mapping = "rem";
                                                                                name = "Della Muller";
                                                                                sqlType = "recusandae";
                                                                            }}),
                                                                        }},                 new RecordFormat(RecordFormatTypeEnum.JSON) {{
                                                                            mappingParameters = new MappingParameters() {{
                                                                                csvMappingParameters = new CSVMappingParameters("aperiam", "saepe");;
                                                                                jsonMappingParameters = new JSONMappingParameters("numquam");;
                                                                            }};;
                                                                        }};) {{
                                                            recordColumns = new org.openapis.openapi.models.shared.RecordColumn[]{{
                                                                add(new RecordColumn("totam", "hic") {{
                                                                    mapping = "blanditiis";
                                                                    name = "Moses Douglas";
                                                                    sqlType = "pariatur";
                                                                }}),
                                                                add(new RecordColumn("asperiores", "facilis") {{
                                                                    mapping = "exercitationem";
                                                                    name = "Paul Price";
                                                                    sqlType = "explicabo";
                                                                }}),
                                                                add(new RecordColumn("in", "commodi") {{
                                                                    mapping = "voluptate";
                                                                    name = "Raymond Moore";
                                                                    sqlType = "sed";
                                                                }}),
                                                            }};
                                                            recordEncoding = "quidem";
                                                            recordFormat = new RecordFormat(RecordFormatTypeEnum.JSON) {{
                                                                mappingParameters = new MappingParameters() {{
                                                                    csvMappingParameters = new CSVMappingParameters("unde", "architecto") {{
                                                                        recordColumnDelimiter = "explicabo";
                                                                        recordRowDelimiter = "voluptas";
                                                                    }};
                                                                    jsonMappingParameters = new JSONMappingParameters("sapiente") {{
                                                                        recordRowPath = "suscipit";
                                                                    }};
                                                                }};
                                                                recordFormatType = RecordFormatTypeEnum.CSV;
                                                            }};
                                                        }};
                                                        s3ReferenceDataSourceUpdate = new S3ReferenceDataSourceUpdate() {{
                                                            bucketARNUpdate = "veniam";
                                                            fileKeyUpdate = "in";
                                                            referenceRoleARNUpdate = "officiis";
                                                        }};
                                                        tableNameUpdate = "beatae";
                                                    }}),
                                                }};
                                            }};, 348476L);, UpdateApplicationXAmzTargetEnum.KINESIS_ANALYTICS20150814_UPDATE_APPLICATION) {{
                xAmzAlgorithm = "praesentium";
                xAmzContentSha256 = "cum";
                xAmzCredential = "laboriosam";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "voluptatum";
                xAmzSignature = "error";
                xAmzSignedHeaders = "hic";
            }};            

            UpdateApplicationResponse res = sdk.sdk.updateApplication(req);

            if (res.updateApplicationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
