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

            AddApplicationCloudWatchLoggingOptionRequest req = new AddApplicationCloudWatchLoggingOptionRequest(                new AddApplicationCloudWatchLoggingOptionRequest("magnam",                 new CloudWatchLoggingOption("debitis");) {{
                                conditionalToken = "ipsa";
                                currentApplicationVersionId = 963663L;
                            }};, AddApplicationCloudWatchLoggingOptionXAmzTargetEnum.KINESIS_ANALYTICS20180523_ADD_APPLICATION_CLOUD_WATCH_LOGGING_OPTION) {{
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

<p> Adds a streaming source to your SQL-based Kinesis Data Analytics application. </p> <p>You can add a streaming source when you create an application, or you can use this operation to add a streaming source after you create an application. For more information, see <a>CreateApplication</a>.</p> <p>Any configuration update, including adding a streaming source using this operation, results in a new version of the application. You can use the <a>DescribeApplication</a> operation to find the current application version. </p>

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
                                                inputProcessingConfiguration = new InputProcessingConfiguration(                new InputLambdaProcessor("iste"););;
                                                kinesisFirehoseInput = new KinesisFirehoseInput("dolor");;
                                                kinesisStreamsInput = new KinesisStreamsInput("natus");;
                                            }};);, AddApplicationInputXAmzTargetEnum.KINESIS_ANALYTICS20180523_ADD_APPLICATION_INPUT) {{
                xAmzAlgorithm = "laboriosam";
                xAmzContentSha256 = "hic";
                xAmzCredential = "saepe";
                xAmzDate = "fuga";
                xAmzSecurityToken = "in";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "iste";
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

Adds an <a>InputProcessingConfiguration</a> to a SQL-based Kinesis Data Analytics application. An input processor pre-processes records on the input stream before the application's SQL code executes. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">Amazon Lambda</a>.

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
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddApplicationInputProcessingConfigurationRequest req = new AddApplicationInputProcessingConfigurationRequest(                new AddApplicationInputProcessingConfigurationRequest("saepe", 697631L, "architecto",                 new InputProcessingConfiguration(                new InputLambdaProcessor("ipsa");););, AddApplicationInputProcessingConfigurationXAmzTargetEnum.KINESIS_ANALYTICS20180523_ADD_APPLICATION_INPUT_PROCESSING_CONFIGURATION) {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "est";
                xAmzCredential = "mollitia";
                xAmzDate = "laborum";
                xAmzSecurityToken = "dolores";
                xAmzSignature = "dolorem";
                xAmzSignedHeaders = "corporis";
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

<p>Adds an external destination to your SQL-based Kinesis Data Analytics application.</p> <p>If you want Kinesis Data Analytics to deliver data from an in-application stream within your application to an external destination (such as an Kinesis data stream, a Kinesis Data Firehose delivery stream, or an Amazon Lambda function), you add the relevant configuration to your application using this operation. You can configure one or more outputs for your application. Each output configuration maps an in-application stream and an external destination.</p> <p> You can use one of the output configurations to deliver data from your in-application error stream to an external destination so that you can analyze the errors. </p> <p> Any configuration update, including adding a streaming source using this operation, results in a new version of the application. You can use the <a>DescribeApplication</a> operation to find the current application version.</p>

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
                .setSecurity(new Security("explicabo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddApplicationOutputRequest req = new AddApplicationOutputRequest(                new AddApplicationOutputRequest("nobis", 315428L,                 new Output(                new DestinationSchema(RecordFormatTypeEnum.CSV);, "nemo") {{
                                                kinesisFirehoseOutput = new KinesisFirehoseOutput("minima");;
                                                kinesisStreamsOutput = new KinesisStreamsOutput("excepturi");;
                                                lambdaOutput = new LambdaOutput("accusantium");;
                                            }};);, AddApplicationOutputXAmzTargetEnum.KINESIS_ANALYTICS20180523_ADD_APPLICATION_OUTPUT) {{
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "culpa";
                xAmzCredential = "doloribus";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "dolorem";
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

<p>Adds a reference data source to an existing SQL-based Kinesis Data Analytics application.</p> <p>Kinesis Data Analytics reads reference data (that is, an Amazon S3 object) and creates an in-application table within your application. In the request, you provide the source (S3 bucket name and object key name), name of the in-application table to create, and the necessary mapping information that describes how data in an Amazon S3 object maps to columns in the resulting in-application table.</p>

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
                .setSecurity(new Security("culpa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddApplicationReferenceDataSourceRequest req = new AddApplicationReferenceDataSourceRequest(                new AddApplicationReferenceDataSourceRequest("consequuntur", 995300L,                 new ReferenceDataSource(                new SourceSchema(                new org.openapis.openapi.models.shared.RecordColumn[]{{
                                                                                add(new RecordColumn("quia", "quis") {{
                                                                                    mapping = "occaecati";
                                                                                    name = "Lucy Konopelski";
                                                                                    sqlType = "error";
                                                                                }}),
                                                                                add(new RecordColumn("tenetur", "ipsam") {{
                                                                                    mapping = "vitae";
                                                                                    name = "Matt Hamill";
                                                                                    sqlType = "sequi";
                                                                                }}),
                                                                                add(new RecordColumn("quasi", "reiciendis") {{
                                                                                    mapping = "id";
                                                                                    name = "Richard Boyer";
                                                                                    sqlType = "laborum";
                                                                                }}),
                                                                            }},                 new RecordFormat(RecordFormatTypeEnum.CSV) {{
                                                                                mappingParameters = new MappingParameters() {{
                                                                                    csvMappingParameters = new CSVMappingParameters("vero", "nihil");;
                                                                                    jsonMappingParameters = new JSONMappingParameters("praesentium");;
                                                                                }};;
                                                                            }};) {{
                                                                recordEncoding = "voluptatibus";
                                                            }};, "ipsa") {{
                                                s3ReferenceDataSource = new S3ReferenceDataSource() {{
                                                    bucketARN = "omnis";
                                                    fileKey = "voluptate";
                                                }};;
                                            }};);, AddApplicationReferenceDataSourceXAmzTargetEnum.KINESIS_ANALYTICS20180523_ADD_APPLICATION_REFERENCE_DATA_SOURCE) {{
                xAmzAlgorithm = "cum";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "doloremque";
                xAmzDate = "reprehenderit";
                xAmzSecurityToken = "ut";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "dicta";
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

## addApplicationVpcConfiguration

<p>Adds a Virtual Private Cloud (VPC) configuration to the application. Applications can use VPCs to store and access resources securely.</p> <p>Note the following about VPC configurations for Kinesis Data Analytics applications:</p> <ul> <li> <p>VPC configurations are not supported for SQL applications.</p> </li> <li> <p>When a VPC is added to a Kinesis Data Analytics application, the application can no longer be accessed from the Internet directly. To enable Internet access to the application, add an Internet gateway to your VPC.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddApplicationVpcConfigurationRequest;
import org.openapis.openapi.models.operations.AddApplicationVpcConfigurationResponse;
import org.openapis.openapi.models.operations.AddApplicationVpcConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.AddApplicationVpcConfigurationRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VpcConfiguration;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddApplicationVpcConfigurationRequest req = new AddApplicationVpcConfigurationRequest(                new AddApplicationVpcConfigurationRequest("dolore",                 new VpcConfiguration(                new String[]{{
                                                                add("dicta"),
                                                                add("harum"),
                                                            }},                 new String[]{{
                                                                add("accusamus"),
                                                                add("commodi"),
                                                            }});) {{
                                conditionalToken = "repudiandae";
                                currentApplicationVersionId = 64147L;
                            }};, AddApplicationVpcConfigurationXAmzTargetEnum.KINESIS_ANALYTICS20180523_ADD_APPLICATION_VPC_CONFIGURATION) {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "molestias";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "praesentium";
            }};            

            AddApplicationVpcConfigurationResponse res = sdk.sdk.addApplicationVpcConfiguration(req);

            if (res.addApplicationVpcConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createApplication

Creates a Kinesis Data Analytics application. For information about creating a Kinesis Data Analytics application, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/getting-started.html">Creating an Application</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateApplicationRequest;
import org.openapis.openapi.models.operations.CreateApplicationResponse;
import org.openapis.openapi.models.operations.CreateApplicationXAmzTargetEnum;
import org.openapis.openapi.models.shared.ApplicationCodeConfiguration;
import org.openapis.openapi.models.shared.ApplicationConfiguration;
import org.openapis.openapi.models.shared.ApplicationModeEnum;
import org.openapis.openapi.models.shared.ApplicationSnapshotConfiguration;
import org.openapis.openapi.models.shared.ArtifactTypeEnum;
import org.openapis.openapi.models.shared.CSVMappingParameters;
import org.openapis.openapi.models.shared.CatalogConfiguration;
import org.openapis.openapi.models.shared.CheckpointConfiguration;
import org.openapis.openapi.models.shared.CloudWatchLoggingOption;
import org.openapis.openapi.models.shared.CodeContent;
import org.openapis.openapi.models.shared.CodeContentTypeEnum;
import org.openapis.openapi.models.shared.ConfigurationTypeEnum;
import org.openapis.openapi.models.shared.CreateApplicationRequest;
import org.openapis.openapi.models.shared.CustomArtifactConfiguration;
import org.openapis.openapi.models.shared.DeployAsApplicationConfiguration;
import org.openapis.openapi.models.shared.DestinationSchema;
import org.openapis.openapi.models.shared.EnvironmentProperties;
import org.openapis.openapi.models.shared.FlinkApplicationConfiguration;
import org.openapis.openapi.models.shared.GlueDataCatalogConfiguration;
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
import org.openapis.openapi.models.shared.LogLevelEnum;
import org.openapis.openapi.models.shared.MappingParameters;
import org.openapis.openapi.models.shared.MavenReference;
import org.openapis.openapi.models.shared.MetricsLevelEnum;
import org.openapis.openapi.models.shared.MonitoringConfiguration;
import org.openapis.openapi.models.shared.Output;
import org.openapis.openapi.models.shared.ParallelismConfiguration;
import org.openapis.openapi.models.shared.PropertyGroup;
import org.openapis.openapi.models.shared.RecordColumn;
import org.openapis.openapi.models.shared.RecordFormat;
import org.openapis.openapi.models.shared.RecordFormatTypeEnum;
import org.openapis.openapi.models.shared.ReferenceDataSource;
import org.openapis.openapi.models.shared.RuntimeEnvironmentEnum;
import org.openapis.openapi.models.shared.S3ContentBaseLocation;
import org.openapis.openapi.models.shared.S3ContentLocation;
import org.openapis.openapi.models.shared.S3ReferenceDataSource;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SourceSchema;
import org.openapis.openapi.models.shared.SqlApplicationConfiguration;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.VpcConfiguration;
import org.openapis.openapi.models.shared.ZeppelinApplicationConfiguration;
import org.openapis.openapi.models.shared.ZeppelinMonitoringConfiguration;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateApplicationRequest req = new CreateApplicationRequest(                new CreateApplicationRequest("voluptates", RuntimeEnvironmentEnum.SQL10, "repudiandae") {{
                                applicationConfiguration = new ApplicationConfiguration() {{
                                    applicationCodeConfiguration = new ApplicationCodeConfiguration(CodeContentTypeEnum.ZIPFILE) {{
                                        codeContent = new CodeContent() {{
                                            s3ContentLocation = new S3ContentLocation("veritatis", "itaque") {{
                                                objectVersion = "incidunt";
                                            }};;
                                            textContent = "enim";
                                            zipFileContent = "consequatur";
                                        }};;
                                    }};;
                                    applicationSnapshotConfiguration = new ApplicationSnapshotConfiguration(false);;
                                    environmentProperties = new EnvironmentProperties(                new org.openapis.openapi.models.shared.PropertyGroup[]{{
                                                        add(new PropertyGroup("quibusdam",                 new java.util.HashMap<String, String>() {{
                                                                            put("modi", "qui");
                                                                            put("aliquid", "cupiditate");
                                                                        }}) {{
                                                            propertyGroupId = "quibusdam";
                                                            propertyMap = new java.util.HashMap<String, String>() {{
                                                                put("deserunt", "distinctio");
                                                            }};
                                                        }}),
                                                        add(new PropertyGroup("ipsam",                 new java.util.HashMap<String, String>() {{
                                                                            put("fugit", "dolorum");
                                                                        }}) {{
                                                            propertyGroupId = "quos";
                                                            propertyMap = new java.util.HashMap<String, String>() {{
                                                                put("magni", "assumenda");
                                                            }};
                                                        }}),
                                                        add(new PropertyGroup("eum",                 new java.util.HashMap<String, String>() {{
                                                                            put("eligendi", "sint");
                                                                        }}) {{
                                                            propertyGroupId = "excepturi";
                                                            propertyMap = new java.util.HashMap<String, String>() {{
                                                                put("facilis", "tempore");
                                                                put("labore", "delectus");
                                                            }};
                                                        }}),
                                                    }});;
                                    flinkApplicationConfiguration = new FlinkApplicationConfiguration() {{
                                        checkpointConfiguration = new CheckpointConfiguration(ConfigurationTypeEnum.DEFAULT_) {{
                                            checkpointInterval = 592042L;
                                            checkpointingEnabled = false;
                                            minPauseBetweenCheckpoints = 896039L;
                                        }};;
                                        monitoringConfiguration = new MonitoringConfiguration(ConfigurationTypeEnum.CUSTOM) {{
                                            logLevel = LogLevelEnum.ERROR;
                                            metricsLevel = MetricsLevelEnum.APPLICATION;
                                        }};;
                                        parallelismConfiguration = new ParallelismConfiguration(ConfigurationTypeEnum.CUSTOM) {{
                                            autoScalingEnabled = false;
                                            parallelism = 952749L;
                                            parallelismPerKPU = 680056L;
                                        }};;
                                    }};;
                                    sqlApplicationConfiguration = new SqlApplicationConfiguration() {{
                                        inputs = new org.openapis.openapi.models.shared.Input[]{{
                                            add(new Input(                new SourceSchema(                new org.openapis.openapi.models.shared.RecordColumn[]{{
                                                                                add(new RecordColumn("quibusdam", "sed") {{
                                                                                    mapping = "architecto";
                                                                                    name = "Elvira Herman";
                                                                                    sqlType = "repellat";
                                                                                }}),
                                                                                add(new RecordColumn("sunt", "quo") {{
                                                                                    mapping = "saepe";
                                                                                    name = "Edward Crooks";
                                                                                    sqlType = "magni";
                                                                                }}),
                                                                            }},                 new RecordFormat(RecordFormatTypeEnum.CSV) {{
                                                                                mappingParameters = new MappingParameters() {{
                                                                                    csvMappingParameters = new CSVMappingParameters("pariatur", "maxime");;
                                                                                    jsonMappingParameters = new JSONMappingParameters("ea");;
                                                                                }};;
                                                                            }};) {{
                                                                recordEncoding = "excepturi";
                                                            }};, "odit") {{
                                                inputParallelism = new InputParallelism() {{
                                                    count = 449198L;
                                                }};
                                                inputProcessingConfiguration = new InputProcessingConfiguration(                new InputLambdaProcessor("rerum");) {{
                                                    inputLambdaProcessor = new InputLambdaProcessor("maiores") {{
                                                        resourceARN = "illum";
                                                    }};
                                                }};
                                                inputSchema = new SourceSchema(                new org.openapis.openapi.models.shared.RecordColumn[]{{
                                                                    add(new RecordColumn("perferendis", "nihil") {{
                                                                        mapping = "amet";
                                                                        name = "Tyler Kassulke";
                                                                        sqlType = "molestiae";
                                                                    }}),
                                                                    add(new RecordColumn("nobis", "eum") {{
                                                                        mapping = "magnam";
                                                                        name = "Alfonso Green";
                                                                        sqlType = "natus";
                                                                    }}),
                                                                    add(new RecordColumn("quos", "sint") {{
                                                                        mapping = "vero";
                                                                        name = "Ms. Julie Gusikowski";
                                                                        sqlType = "provident";
                                                                    }}),
                                                                    add(new RecordColumn("necessitatibus", "odit") {{
                                                                        mapping = "accusantium";
                                                                        name = "Abel O'Hara";
                                                                        sqlType = "dolor";
                                                                    }}),
                                                                }},                 new RecordFormat(RecordFormatTypeEnum.JSON) {{
                                                                    mappingParameters = new MappingParameters() {{
                                                                        csvMappingParameters = new CSVMappingParameters("quasi", "iure");;
                                                                        jsonMappingParameters = new JSONMappingParameters("doloribus");;
                                                                    }};;
                                                                }};) {{
                                                    recordColumns = new org.openapis.openapi.models.shared.RecordColumn[]{{
                                                        add(new RecordColumn("non", "occaecati") {{
                                                            mapping = "magnam";
                                                            name = "Irving Jenkins";
                                                            sqlType = "accusamus";
                                                        }}),
                                                    }};
                                                    recordEncoding = "enim";
                                                    recordFormat = new RecordFormat(RecordFormatTypeEnum.CSV) {{
                                                        mappingParameters = new MappingParameters() {{
                                                            csvMappingParameters = new CSVMappingParameters("quidem", "provident") {{
                                                                recordColumnDelimiter = "accusamus";
                                                                recordRowDelimiter = "delectus";
                                                            }};
                                                            jsonMappingParameters = new JSONMappingParameters("id") {{
                                                                recordRowPath = "nam";
                                                            }};
                                                        }};
                                                        recordFormatType = RecordFormatTypeEnum.CSV;
                                                    }};
                                                }};
                                                kinesisFirehoseInput = new KinesisFirehoseInput("eius") {{
                                                    resourceARN = "debitis";
                                                }};
                                                kinesisStreamsInput = new KinesisStreamsInput("deleniti") {{
                                                    resourceARN = "maxime";
                                                }};
                                                namePrefix = "facilis";
                                            }}),
                                            add(new Input(                new SourceSchema(                new org.openapis.openapi.models.shared.RecordColumn[]{{
                                                                                add(new RecordColumn("hic", "excepturi") {{
                                                                                    mapping = "quos";
                                                                                    name = "Florence Ebert";
                                                                                    sqlType = "ipsum";
                                                                                }}),
                                                                                add(new RecordColumn("veritatis", "ipsa") {{
                                                                                    mapping = "cum";
                                                                                    name = "Marian Wisozk";
                                                                                    sqlType = "numquam";
                                                                                }}),
                                                                            }},                 new RecordFormat(RecordFormatTypeEnum.JSON) {{
                                                                                mappingParameters = new MappingParameters() {{
                                                                                    csvMappingParameters = new CSVMappingParameters("iure", "odio");;
                                                                                    jsonMappingParameters = new JSONMappingParameters("quaerat");;
                                                                                }};;
                                                                            }};) {{
                                                                recordEncoding = "accusamus";
                                                            }};, "quidem") {{
                                                inputParallelism = new InputParallelism() {{
                                                    count = 407183L;
                                                }};
                                                inputProcessingConfiguration = new InputProcessingConfiguration(                new InputLambdaProcessor("maiores");) {{
                                                    inputLambdaProcessor = new InputLambdaProcessor("ab") {{
                                                        resourceARN = "accusantium";
                                                    }};
                                                }};
                                                inputSchema = new SourceSchema(                new org.openapis.openapi.models.shared.RecordColumn[]{{
                                                                    add(new RecordColumn("asperiores", "earum") {{
                                                                        mapping = "porro";
                                                                        name = "Ms. Vickie Mraz";
                                                                        sqlType = "adipisci";
                                                                    }}),
                                                                }},                 new RecordFormat(RecordFormatTypeEnum.JSON) {{
                                                                    mappingParameters = new MappingParameters() {{
                                                                        csvMappingParameters = new CSVMappingParameters("iste", "dolorum");;
                                                                        jsonMappingParameters = new JSONMappingParameters("deleniti");;
                                                                    }};;
                                                                }};) {{
                                                    recordColumns = new org.openapis.openapi.models.shared.RecordColumn[]{{
                                                        add(new RecordColumn("perferendis", "fugiat") {{
                                                            mapping = "ipsam";
                                                            name = "Dr. Stacey Reichert";
                                                            sqlType = "voluptatibus";
                                                        }}),
                                                        add(new RecordColumn("dolores", "quis") {{
                                                            mapping = "amet";
                                                            name = "Erma Hessel";
                                                            sqlType = "nobis";
                                                        }}),
                                                        add(new RecordColumn("dolores", "minus") {{
                                                            mapping = "totam";
                                                            name = "Cynthia Hayes";
                                                            sqlType = "perferendis";
                                                        }}),
                                                    }};
                                                    recordEncoding = "quam";
                                                    recordFormat = new RecordFormat(RecordFormatTypeEnum.CSV) {{
                                                        mappingParameters = new MappingParameters() {{
                                                            csvMappingParameters = new CSVMappingParameters("nostrum", "hic") {{
                                                                recordColumnDelimiter = "dolor";
                                                                recordRowDelimiter = "vero";
                                                            }};
                                                            jsonMappingParameters = new JSONMappingParameters("omnis") {{
                                                                recordRowPath = "recusandae";
                                                            }};
                                                        }};
                                                        recordFormatType = RecordFormatTypeEnum.CSV;
                                                    }};
                                                }};
                                                kinesisFirehoseInput = new KinesisFirehoseInput("provident") {{
                                                    resourceARN = "pariatur";
                                                }};
                                                kinesisStreamsInput = new KinesisStreamsInput("libero") {{
                                                    resourceARN = "nobis";
                                                }};
                                                namePrefix = "delectus";
                                            }}),
                                        }};
                                        outputs = new org.openapis.openapi.models.shared.Output[]{{
                                            add(new Output(                new DestinationSchema(RecordFormatTypeEnum.CSV);, "necessitatibus") {{
                                                destinationSchema = new DestinationSchema(RecordFormatTypeEnum.CSV) {{
                                                    recordFormatType = RecordFormatTypeEnum.JSON;
                                                }};
                                                kinesisFirehoseOutput = new KinesisFirehoseOutput("atque") {{
                                                    resourceARN = "eos";
                                                }};
                                                kinesisStreamsOutput = new KinesisStreamsOutput("fugiat") {{
                                                    resourceARN = "sit";
                                                }};
                                                lambdaOutput = new LambdaOutput("soluta") {{
                                                    resourceARN = "ab";
                                                }};
                                                name = "Ted Kling";
                                            }}),
                                            add(new Output(                new DestinationSchema(RecordFormatTypeEnum.JSON);, "saepe") {{
                                                destinationSchema = new DestinationSchema(RecordFormatTypeEnum.CSV) {{
                                                    recordFormatType = RecordFormatTypeEnum.CSV;
                                                }};
                                                kinesisFirehoseOutput = new KinesisFirehoseOutput("ipsum") {{
                                                    resourceARN = "nihil";
                                                }};
                                                kinesisStreamsOutput = new KinesisStreamsOutput("id") {{
                                                    resourceARN = "voluptate";
                                                }};
                                                lambdaOutput = new LambdaOutput("eius") {{
                                                    resourceARN = "saepe";
                                                }};
                                                name = "Lisa Fay";
                                            }}),
                                            add(new Output(                new DestinationSchema(RecordFormatTypeEnum.CSV);, "qui") {{
                                                destinationSchema = new DestinationSchema(RecordFormatTypeEnum.CSV) {{
                                                    recordFormatType = RecordFormatTypeEnum.JSON;
                                                }};
                                                kinesisFirehoseOutput = new KinesisFirehoseOutput("minima") {{
                                                    resourceARN = "provident";
                                                }};
                                                kinesisStreamsOutput = new KinesisStreamsOutput("totam") {{
                                                    resourceARN = "repellendus";
                                                }};
                                                lambdaOutput = new LambdaOutput("alias") {{
                                                    resourceARN = "similique";
                                                }};
                                                name = "Alex Goodwin";
                                            }}),
                                            add(new Output(                new DestinationSchema(RecordFormatTypeEnum.JSON);, "sapiente") {{
                                                destinationSchema = new DestinationSchema(RecordFormatTypeEnum.CSV) {{
                                                    recordFormatType = RecordFormatTypeEnum.CSV;
                                                }};
                                                kinesisFirehoseOutput = new KinesisFirehoseOutput("harum") {{
                                                    resourceARN = "esse";
                                                }};
                                                kinesisStreamsOutput = new KinesisStreamsOutput("ipsum") {{
                                                    resourceARN = "iusto";
                                                }};
                                                lambdaOutput = new LambdaOutput("tenetur") {{
                                                    resourceARN = "quisquam";
                                                }};
                                                name = "Kelli Thompson";
                                            }}),
                                        }};
                                        referenceDataSources = new org.openapis.openapi.models.shared.ReferenceDataSource[]{{
                                            add(new ReferenceDataSource(                new SourceSchema(                new org.openapis.openapi.models.shared.RecordColumn[]{{
                                                                                add(new RecordColumn("voluptate", "consectetur") {{
                                                                                    mapping = "voluptatibus";
                                                                                    name = "Ignacio Moen";
                                                                                    sqlType = "delectus";
                                                                                }}),
                                                                                add(new RecordColumn("similique", "facilis") {{
                                                                                    mapping = "vero";
                                                                                    name = "Julio Weissnat";
                                                                                    sqlType = "odio";
                                                                                }}),
                                                                                add(new RecordColumn("impedit", "aut") {{
                                                                                    mapping = "vero";
                                                                                    name = "Joanne Sporer";
                                                                                    sqlType = "natus";
                                                                                }}),
                                                                            }},                 new RecordFormat(RecordFormatTypeEnum.CSV) {{
                                                                                mappingParameters = new MappingParameters() {{
                                                                                    csvMappingParameters = new CSVMappingParameters("exercitationem", "nulla");;
                                                                                    jsonMappingParameters = new JSONMappingParameters("fugit");;
                                                                                }};;
                                                                            }};) {{
                                                                recordEncoding = "porro";
                                                            }};, "maiores") {{
                                                referenceSchema = new SourceSchema(                new org.openapis.openapi.models.shared.RecordColumn[]{{
                                                                    add(new RecordColumn("hic", "voluptatem") {{
                                                                        mapping = "qui";
                                                                        name = "Beverly Cummerata II";
                                                                        sqlType = "nam";
                                                                    }}),
                                                                    add(new RecordColumn("nobis", "quos") {{
                                                                        mapping = "cumque";
                                                                        name = "Robin Bosco";
                                                                        sqlType = "veritatis";
                                                                    }}),
                                                                    add(new RecordColumn("adipisci", "dolorum") {{
                                                                        mapping = "tempore";
                                                                        name = "Kevin Willms";
                                                                        sqlType = "labore";
                                                                    }}),
                                                                    add(new RecordColumn("porro", "doloribus") {{
                                                                        mapping = "architecto";
                                                                        name = "Margaret Luettgen MD";
                                                                        sqlType = "repellendus";
                                                                    }}),
                                                                }},                 new RecordFormat(RecordFormatTypeEnum.JSON) {{
                                                                    mappingParameters = new MappingParameters() {{
                                                                        csvMappingParameters = new CSVMappingParameters("facilis", "cupiditate");;
                                                                        jsonMappingParameters = new JSONMappingParameters("qui");;
                                                                    }};;
                                                                }};) {{
                                                    recordColumns = new org.openapis.openapi.models.shared.RecordColumn[]{{
                                                        add(new RecordColumn("deserunt", "quam") {{
                                                            mapping = "sit";
                                                            name = "Luis Cremin";
                                                            sqlType = "voluptas";
                                                        }}),
                                                        add(new RecordColumn("dicta", "laborum") {{
                                                            mapping = "ipsum";
                                                            name = "Norma McGlynn";
                                                            sqlType = "soluta";
                                                        }}),
                                                    }};
                                                    recordEncoding = "totam";
                                                    recordFormat = new RecordFormat(RecordFormatTypeEnum.CSV) {{
                                                        mappingParameters = new MappingParameters() {{
                                                            csvMappingParameters = new CSVMappingParameters("dolores", "distinctio") {{
                                                                recordColumnDelimiter = "incidunt";
                                                                recordRowDelimiter = "aspernatur";
                                                            }};
                                                            jsonMappingParameters = new JSONMappingParameters("aliquid") {{
                                                                recordRowPath = "facilis";
                                                            }};
                                                        }};
                                                        recordFormatType = RecordFormatTypeEnum.JSON;
                                                    }};
                                                }};
                                                s3ReferenceDataSource = new S3ReferenceDataSource() {{
                                                    bucketARN = "quae";
                                                    fileKey = "laudantium";
                                                }};
                                                tableName = "odio";
                                            }}),
                                            add(new ReferenceDataSource(                new SourceSchema(                new org.openapis.openapi.models.shared.RecordColumn[]{{
                                                                                add(new RecordColumn("voluptas", "ab") {{
                                                                                    mapping = "neque";
                                                                                    name = "Dallas Sanford";
                                                                                    sqlType = "eos";
                                                                                }}),
                                                                                add(new RecordColumn("quo", "esse") {{
                                                                                    mapping = "cupiditate";
                                                                                    name = "Rhonda Toy";
                                                                                    sqlType = "sequi";
                                                                                }}),
                                                                                add(new RecordColumn("accusamus", "aliquam") {{
                                                                                    mapping = "recusandae";
                                                                                    name = "Lola Schmidt IV";
                                                                                    sqlType = "totam";
                                                                                }}),
                                                                            }},                 new RecordFormat(RecordFormatTypeEnum.JSON) {{
                                                                                mappingParameters = new MappingParameters() {{
                                                                                    csvMappingParameters = new CSVMappingParameters("occaecati", "commodi");;
                                                                                    jsonMappingParameters = new JSONMappingParameters("sapiente");;
                                                                                }};;
                                                                            }};) {{
                                                                recordEncoding = "dolores";
                                                            }};, "deserunt") {{
                                                referenceSchema = new SourceSchema(                new org.openapis.openapi.models.shared.RecordColumn[]{{
                                                                    add(new RecordColumn("placeat", "velit") {{
                                                                        mapping = "aliquam";
                                                                        name = "Eloise Block MD";
                                                                        sqlType = "laborum";
                                                                    }}),
                                                                    add(new RecordColumn("libero", "quasi") {{
                                                                        mapping = "eum";
                                                                        name = "Vicky Lynch";
                                                                        sqlType = "voluptas";
                                                                    }}),
                                                                    add(new RecordColumn("eius", "esse") {{
                                                                        mapping = "tempora";
                                                                        name = "Ms. Janice McLaughlin";
                                                                        sqlType = "odio";
                                                                    }}),
                                                                    add(new RecordColumn("eum", "suscipit") {{
                                                                        mapping = "esse";
                                                                        name = "Blake Kihn";
                                                                        sqlType = "ut";
                                                                    }}),
                                                                }},                 new RecordFormat(RecordFormatTypeEnum.CSV) {{
                                                                    mappingParameters = new MappingParameters() {{
                                                                        csvMappingParameters = new CSVMappingParameters("eos", "praesentium");;
                                                                        jsonMappingParameters = new JSONMappingParameters("quisquam");;
                                                                    }};;
                                                                }};) {{
                                                    recordColumns = new org.openapis.openapi.models.shared.RecordColumn[]{{
                                                        add(new RecordColumn("ea", "aspernatur") {{
                                                            mapping = "iusto";
                                                            name = "Kurt Abernathy";
                                                            sqlType = "ipsam";
                                                        }}),
                                                        add(new RecordColumn("dolor", "maiores") {{
                                                            mapping = "vel";
                                                            name = "Clifford Dickens";
                                                            sqlType = "dicta";
                                                        }}),
                                                        add(new RecordColumn("quisquam", "saepe") {{
                                                            mapping = "quasi";
                                                            name = "Freda Marks";
                                                            sqlType = "sapiente";
                                                        }}),
                                                        add(new RecordColumn("quo", "consectetur") {{
                                                            mapping = "ea";
                                                            name = "Lewis Hartmann II";
                                                            sqlType = "ea";
                                                        }}),
                                                    }};
                                                    recordEncoding = "recusandae";
                                                    recordFormat = new RecordFormat(RecordFormatTypeEnum.CSV) {{
                                                        mappingParameters = new MappingParameters() {{
                                                            csvMappingParameters = new CSVMappingParameters("eaque", "a") {{
                                                                recordColumnDelimiter = "aspernatur";
                                                                recordRowDelimiter = "minima";
                                                            }};
                                                            jsonMappingParameters = new JSONMappingParameters("aut") {{
                                                                recordRowPath = "libero";
                                                            }};
                                                        }};
                                                        recordFormatType = RecordFormatTypeEnum.JSON;
                                                    }};
                                                }};
                                                s3ReferenceDataSource = new S3ReferenceDataSource() {{
                                                    bucketARN = "veritatis";
                                                    fileKey = "ipsa";
                                                }};
                                                tableName = "id";
                                            }}),
                                            add(new ReferenceDataSource(                new SourceSchema(                new org.openapis.openapi.models.shared.RecordColumn[]{{
                                                                                add(new RecordColumn("consectetur", "esse") {{
                                                                                    mapping = "adipisci";
                                                                                    name = "Carlos Altenwerth";
                                                                                    sqlType = "sapiente";
                                                                                }}),
                                                                                add(new RecordColumn("a", "error") {{
                                                                                    mapping = "blanditiis";
                                                                                    name = "Randal Stiedemann";
                                                                                    sqlType = "quasi";
                                                                                }}),
                                                                                add(new RecordColumn("veritatis", "consequuntur") {{
                                                                                    mapping = "sint";
                                                                                    name = "Rufus Crona";
                                                                                    sqlType = "facere";
                                                                                }}),
                                                                            }},                 new RecordFormat(RecordFormatTypeEnum.JSON) {{
                                                                                mappingParameters = new MappingParameters() {{
                                                                                    csvMappingParameters = new CSVMappingParameters("similique", "culpa");;
                                                                                    jsonMappingParameters = new JSONMappingParameters("aliquid");;
                                                                                }};;
                                                                            }};) {{
                                                                recordEncoding = "tenetur";
                                                            }};, "quae") {{
                                                referenceSchema = new SourceSchema(                new org.openapis.openapi.models.shared.RecordColumn[]{{
                                                                    add(new RecordColumn("harum", "molestiae") {{
                                                                        mapping = "esse";
                                                                        name = "Marco Terry PhD";
                                                                        sqlType = "vel";
                                                                    }}),
                                                                }},                 new RecordFormat(RecordFormatTypeEnum.CSV) {{
                                                                    mappingParameters = new MappingParameters() {{
                                                                        csvMappingParameters = new CSVMappingParameters("occaecati", "minima");;
                                                                        jsonMappingParameters = new JSONMappingParameters("distinctio");;
                                                                    }};;
                                                                }};) {{
                                                    recordColumns = new org.openapis.openapi.models.shared.RecordColumn[]{{
                                                        add(new RecordColumn("fugit", "fuga") {{
                                                            mapping = "accusantium";
                                                            name = "Franklin Lynch";
                                                            sqlType = "deleniti";
                                                        }}),
                                                        add(new RecordColumn("sapiente", "consequuntur") {{
                                                            mapping = "mollitia";
                                                            name = "Leah Champlin";
                                                            sqlType = "fugit";
                                                        }}),
                                                    }};
                                                    recordEncoding = "ratione";
                                                    recordFormat = new RecordFormat(RecordFormatTypeEnum.CSV) {{
                                                        mappingParameters = new MappingParameters() {{
                                                            csvMappingParameters = new CSVMappingParameters("occaecati", "atque") {{
                                                                recordColumnDelimiter = "explicabo";
                                                                recordRowDelimiter = "saepe";
                                                            }};
                                                            jsonMappingParameters = new JSONMappingParameters("esse") {{
                                                                recordRowPath = "et";
                                                            }};
                                                        }};
                                                        recordFormatType = RecordFormatTypeEnum.CSV;
                                                    }};
                                                }};
                                                s3ReferenceDataSource = new S3ReferenceDataSource() {{
                                                    bucketARN = "eligendi";
                                                    fileKey = "sit";
                                                }};
                                                tableName = "culpa";
                                            }}),
                                        }};
                                    }};;
                                    vpcConfigurations = new org.openapis.openapi.models.shared.VpcConfiguration[]{{
                                        add(new VpcConfiguration(                new String[]{{
                                                            add("sapiente"),
                                                            add("dicta"),
                                                        }},                 new String[]{{
                                                            add("reprehenderit"),
                                                            add("ullam"),
                                                        }}) {{
                                            securityGroupIds = new String[]{{
                                                add("in"),
                                                add("eius"),
                                            }};
                                            subnetIds = new String[]{{
                                                add("illum"),
                                                add("soluta"),
                                                add("accusantium"),
                                            }};
                                        }}),
                                        add(new VpcConfiguration(                new String[]{{
                                                            add("deleniti"),
                                                            add("itaque"),
                                                        }},                 new String[]{{
                                                            add("architecto"),
                                                            add("omnis"),
                                                            add("tenetur"),
                                                        }}) {{
                                            securityGroupIds = new String[]{{
                                                add("aut"),
                                                add("voluptatum"),
                                            }};
                                            subnetIds = new String[]{{
                                                add("quibusdam"),
                                            }};
                                        }}),
                                        add(new VpcConfiguration(                new String[]{{
                                                            add("minima"),
                                                        }},                 new String[]{{
                                                            add("consectetur"),
                                                        }}) {{
                                            securityGroupIds = new String[]{{
                                                add("at"),
                                            }};
                                            subnetIds = new String[]{{
                                                add("voluptate"),
                                            }};
                                        }}),
                                        add(new VpcConfiguration(                new String[]{{
                                                            add("mollitia"),
                                                            add("ab"),
                                                        }},                 new String[]{{
                                                            add("non"),
                                                            add("voluptatem"),
                                                            add("dolor"),
                                                        }}) {{
                                            securityGroupIds = new String[]{{
                                                add("iste"),
                                            }};
                                            subnetIds = new String[]{{
                                                add("accusantium"),
                                                add("rem"),
                                                add("aut"),
                                                add("laudantium"),
                                            }};
                                        }}),
                                    }};
                                    zeppelinApplicationConfiguration = new ZeppelinApplicationConfiguration() {{
                                        catalogConfiguration = new CatalogConfiguration(                new GlueDataCatalogConfiguration("occaecati"););;
                                        customArtifactsConfiguration = new org.openapis.openapi.models.shared.CustomArtifactConfiguration[]{{
                                            add(new CustomArtifactConfiguration(ArtifactTypeEnum.UDF) {{
                                                artifactType = ArtifactTypeEnum.DEPENDENCY_JAR;
                                                mavenReference = new MavenReference("dignissimos", "dicta", "maiores") {{
                                                    artifactId = "explicabo";
                                                    groupId = "voluptas";
                                                    version = "aut";
                                                }};
                                                s3ContentLocation = new S3ContentLocation("voluptas", "asperiores") {{
                                                    bucketARN = "natus";
                                                    fileKey = "velit";
                                                    objectVersion = "voluptatibus";
                                                }};
                                            }}),
                                            add(new CustomArtifactConfiguration(ArtifactTypeEnum.DEPENDENCY_JAR) {{
                                                artifactType = ArtifactTypeEnum.UDF;
                                                mavenReference = new MavenReference("officia", "maxime", "dignissimos") {{
                                                    artifactId = "quaerat";
                                                    groupId = "consequuntur";
                                                    version = "repellendus";
                                                }};
                                                s3ContentLocation = new S3ContentLocation("quae", "quaerat") {{
                                                    bucketARN = "officia";
                                                    fileKey = "asperiores";
                                                    objectVersion = "nemo";
                                                }};
                                            }}),
                                        }};
                                        deployAsApplicationConfiguration = new DeployAsApplicationConfiguration(                new S3ContentBaseLocation("quod") {{
                                                            basePath = "labore";
                                                        }};);;
                                        monitoringConfiguration = new ZeppelinMonitoringConfiguration(LogLevelEnum.INFO);;
                                    }};;
                                }};;
                                applicationDescription = "adipisci";
                                applicationMode = ApplicationModeEnum.INTERACTIVE;
                                cloudWatchLoggingOptions = new org.openapis.openapi.models.shared.CloudWatchLoggingOption[]{{
                                    add(new CloudWatchLoggingOption("velit") {{
                                        logStreamARN = "suscipit";
                                    }}),
                                    add(new CloudWatchLoggingOption("est") {{
                                        logStreamARN = "culpa";
                                    }}),
                                    add(new CloudWatchLoggingOption("totam") {{
                                        logStreamARN = "recusandae";
                                    }}),
                                }};
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("quos") {{
                                        key = "vel";
                                        value = "ducimus";
                                    }}),
                                    add(new Tag("possimus") {{
                                        key = "vel";
                                        value = "labore";
                                    }}),
                                    add(new Tag("commodi") {{
                                        key = "facilis";
                                        value = "cum";
                                    }}),
                                    add(new Tag("reiciendis") {{
                                        key = "in";
                                        value = "corporis";
                                    }}),
                                }};
                            }};, CreateApplicationXAmzTargetEnum.KINESIS_ANALYTICS20180523_CREATE_APPLICATION) {{
                xAmzAlgorithm = "assumenda";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "recusandae";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "aperiam";
                xAmzSignature = "cum";
                xAmzSignedHeaders = "consectetur";
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

## createApplicationPresignedUrl

<p>Creates and returns a URL that you can use to connect to an application's extension.</p> <p>The IAM role or user used to call this API defines the permissions to access the extension. After the presigned URL is created, no additional permission is required to access this URL. IAM authorization policies for this API are also enforced for every HTTP request that attempts to connect to the extension. </p> <p>You control the amount of time that the URL will be valid using the <code>SessionExpirationDurationInSeconds</code> parameter. If you do not provide this parameter, the returned URL is valid for twelve hours.</p> <note> <p>The URL that you get from a call to CreateApplicationPresignedUrl must be used within 3 minutes to be valid. If you first try to use the URL after the 3-minute limit expires, the service returns an HTTP 403 Forbidden error.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateApplicationPresignedUrlRequest;
import org.openapis.openapi.models.operations.CreateApplicationPresignedUrlResponse;
import org.openapis.openapi.models.operations.CreateApplicationPresignedUrlXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateApplicationPresignedUrlRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UrlTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateApplicationPresignedUrlRequest req = new CreateApplicationPresignedUrlRequest(                new CreateApplicationPresignedUrlRequest("exercitationem", UrlTypeEnum.ZEPPELIN_UI_URL) {{
                                sessionExpirationDurationInSeconds = 814967L;
                            }};, CreateApplicationPresignedUrlXAmzTargetEnum.KINESIS_ANALYTICS20180523_CREATE_APPLICATION_PRESIGNED_URL) {{
                xAmzAlgorithm = "numquam";
                xAmzContentSha256 = "doloribus";
                xAmzCredential = "suscipit";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "necessitatibus";
            }};            

            CreateApplicationPresignedUrlResponse res = sdk.sdk.createApplicationPresignedUrl(req);

            if (res.createApplicationPresignedUrlResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createApplicationSnapshot

Creates a snapshot of the application's state data.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateApplicationSnapshotRequest;
import org.openapis.openapi.models.operations.CreateApplicationSnapshotResponse;
import org.openapis.openapi.models.operations.CreateApplicationSnapshotXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateApplicationSnapshotRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateApplicationSnapshotRequest req = new CreateApplicationSnapshotRequest(                new CreateApplicationSnapshotRequest("sunt", "asperiores");, CreateApplicationSnapshotXAmzTargetEnum.KINESIS_ANALYTICS20180523_CREATE_APPLICATION_SNAPSHOT) {{
                xAmzAlgorithm = "adipisci";
                xAmzContentSha256 = "non";
                xAmzCredential = "amet";
                xAmzDate = "beatae";
                xAmzSecurityToken = "dignissimos";
                xAmzSignature = "a";
                xAmzSignedHeaders = "debitis";
            }};            

            CreateApplicationSnapshotResponse res = sdk.sdk.createApplicationSnapshot(req);

            if (res.createApplicationSnapshotResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteApplication

Deletes the specified application. Kinesis Data Analytics halts application execution and deletes the application.

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
                .setSecurity(new Security("consectetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteApplicationRequest req = new DeleteApplicationRequest(                new DeleteApplicationRequest("corporis", OffsetDateTime.parse("2022-03-25T18:38:24.627Z"));, DeleteApplicationXAmzTargetEnum.KINESIS_ANALYTICS20180523_DELETE_APPLICATION) {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "voluptates";
                xAmzCredential = "libero";
                xAmzDate = "vitae";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "similique";
                xAmzSignedHeaders = "tempora";
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

Deletes an Amazon CloudWatch log stream from an Kinesis Data Analytics application. 

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
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteApplicationCloudWatchLoggingOptionRequest req = new DeleteApplicationCloudWatchLoggingOptionRequest(                new DeleteApplicationCloudWatchLoggingOptionRequest("voluptas", "voluptas") {{
                                conditionalToken = "voluptas";
                                currentApplicationVersionId = 324405L;
                            }};, DeleteApplicationCloudWatchLoggingOptionXAmzTargetEnum.KINESIS_ANALYTICS20180523_DELETE_APPLICATION_CLOUD_WATCH_LOGGING_OPTION) {{
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "adipisci";
                xAmzDate = "minus";
                xAmzSecurityToken = "dolores";
                xAmzSignature = "blanditiis";
                xAmzSignedHeaders = "in";
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

Deletes an <a>InputProcessingConfiguration</a> from an input.

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
                .setSecurity(new Security("dolore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteApplicationInputProcessingConfigurationRequest req = new DeleteApplicationInputProcessingConfigurationRequest(                new DeleteApplicationInputProcessingConfigurationRequest("aliquam", 885963L, "temporibus");, DeleteApplicationInputProcessingConfigurationXAmzTargetEnum.KINESIS_ANALYTICS20180523_DELETE_APPLICATION_INPUT_PROCESSING_CONFIGURATION) {{
                xAmzAlgorithm = "ullam";
                xAmzContentSha256 = "adipisci";
                xAmzCredential = "cum";
                xAmzDate = "blanditiis";
                xAmzSecurityToken = "quas";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "nesciunt";
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

Deletes the output destination configuration from your SQL-based Kinesis Data Analytics application's configuration. Kinesis Data Analytics will no longer write data from the corresponding in-application stream to the external output destination.

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
                .setSecurity(new Security("culpa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteApplicationOutputRequest req = new DeleteApplicationOutputRequest(                new DeleteApplicationOutputRequest("corrupti", 867290L, "totam");, DeleteApplicationOutputXAmzTargetEnum.KINESIS_ANALYTICS20180523_DELETE_APPLICATION_OUTPUT) {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "exercitationem";
                xAmzCredential = "nobis";
                xAmzDate = "sit";
                xAmzSecurityToken = "rerum";
                xAmzSignature = "sed";
                xAmzSignedHeaders = "reiciendis";
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

<p>Deletes a reference data source configuration from the specified SQL-based Kinesis Data Analytics application's configuration.</p> <p>If the application is running, Kinesis Data Analytics immediately removes the in-application table that you created using the <a>AddApplicationReferenceDataSource</a> operation. </p>

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
                .setSecurity(new Security("explicabo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteApplicationReferenceDataSourceRequest req = new DeleteApplicationReferenceDataSourceRequest(                new DeleteApplicationReferenceDataSourceRequest("asperiores", 707918L, "voluptate");, DeleteApplicationReferenceDataSourceXAmzTargetEnum.KINESIS_ANALYTICS20180523_DELETE_APPLICATION_REFERENCE_DATA_SOURCE) {{
                xAmzAlgorithm = "expedita";
                xAmzContentSha256 = "ab";
                xAmzCredential = "iste";
                xAmzDate = "dolore";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "sed";
                xAmzSignedHeaders = "in";
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

## deleteApplicationSnapshot

Deletes a snapshot of application state.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteApplicationSnapshotRequest;
import org.openapis.openapi.models.operations.DeleteApplicationSnapshotResponse;
import org.openapis.openapi.models.operations.DeleteApplicationSnapshotXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteApplicationSnapshotRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteApplicationSnapshotRequest req = new DeleteApplicationSnapshotRequest(                new DeleteApplicationSnapshotRequest("quidem", OffsetDateTime.parse("2022-08-15T21:51:46.128Z"), "unde");, DeleteApplicationSnapshotXAmzTargetEnum.KINESIS_ANALYTICS20180523_DELETE_APPLICATION_SNAPSHOT) {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "sapiente";
                xAmzDate = "debitis";
                xAmzSecurityToken = "illo";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "perferendis";
            }};            

            DeleteApplicationSnapshotResponse res = sdk.sdk.deleteApplicationSnapshot(req);

            if (res.deleteApplicationSnapshotResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteApplicationVpcConfiguration

Removes a VPC configuration from a Kinesis Data Analytics application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteApplicationVpcConfigurationRequest;
import org.openapis.openapi.models.operations.DeleteApplicationVpcConfigurationResponse;
import org.openapis.openapi.models.operations.DeleteApplicationVpcConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteApplicationVpcConfigurationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteApplicationVpcConfigurationRequest req = new DeleteApplicationVpcConfigurationRequest(                new DeleteApplicationVpcConfigurationRequest("maiores", "incidunt") {{
                                conditionalToken = "sed";
                                currentApplicationVersionId = 592231L;
                            }};, DeleteApplicationVpcConfigurationXAmzTargetEnum.KINESIS_ANALYTICS20180523_DELETE_APPLICATION_VPC_CONFIGURATION) {{
                xAmzAlgorithm = "eius";
                xAmzContentSha256 = "necessitatibus";
                xAmzCredential = "ipsum";
                xAmzDate = "ea";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "quos";
                xAmzSignedHeaders = "voluptatibus";
            }};            

            DeleteApplicationVpcConfigurationResponse res = sdk.sdk.deleteApplicationVpcConfiguration(req);

            if (res.deleteApplicationVpcConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeApplication

<p>Returns information about a specific Kinesis Data Analytics application.</p> <p>If you want to retrieve a list of all applications in your account, use the <a>ListApplications</a> operation.</p>

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
                .setSecurity(new Security("tempora") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeApplicationRequest req = new DescribeApplicationRequest(                new DescribeApplicationRequest("tempora") {{
                                includeAdditionalDetails = false;
                            }};, DescribeApplicationXAmzTargetEnum.KINESIS_ANALYTICS20180523_DESCRIBE_APPLICATION) {{
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "ex";
                xAmzDate = "sit";
                xAmzSecurityToken = "non";
                xAmzSignature = "officiis";
                xAmzSignedHeaders = "praesentium";
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

## describeApplicationSnapshot

Returns information about a snapshot of application state data.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeApplicationSnapshotRequest;
import org.openapis.openapi.models.operations.DescribeApplicationSnapshotResponse;
import org.openapis.openapi.models.operations.DescribeApplicationSnapshotXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeApplicationSnapshotRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeApplicationSnapshotRequest req = new DescribeApplicationSnapshotRequest(                new DescribeApplicationSnapshotRequest("quaerat", "incidunt");, DescribeApplicationSnapshotXAmzTargetEnum.KINESIS_ANALYTICS20180523_DESCRIBE_APPLICATION_SNAPSHOT) {{
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "rem";
                xAmzDate = "sit";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "error";
                xAmzSignedHeaders = "veniam";
            }};            

            DescribeApplicationSnapshotResponse res = sdk.sdk.describeApplicationSnapshot(req);

            if (res.describeApplicationSnapshotResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeApplicationVersion

<p>Provides a detailed description of a specified version of the application. To see a list of all the versions of an application, invoke the <a>ListApplicationVersions</a> operation.</p> <note> <p>This operation is supported only for Amazon Kinesis Data Analytics for Apache Flink.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeApplicationVersionRequest;
import org.openapis.openapi.models.operations.DescribeApplicationVersionResponse;
import org.openapis.openapi.models.operations.DescribeApplicationVersionXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeApplicationVersionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeApplicationVersionRequest req = new DescribeApplicationVersionRequest(                new DescribeApplicationVersionRequest("recusandae", 967122L);, DescribeApplicationVersionXAmzTargetEnum.KINESIS_ANALYTICS20180523_DESCRIBE_APPLICATION_VERSION) {{
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "magni";
                xAmzCredential = "aperiam";
                xAmzDate = "saepe";
                xAmzSecurityToken = "numquam";
                xAmzSignature = "veniam";
                xAmzSignedHeaders = "in";
            }};            

            DescribeApplicationVersionResponse res = sdk.sdk.describeApplicationVersion(req);

            if (res.describeApplicationVersionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## discoverInputSchema

<p>Infers a schema for a SQL-based Kinesis Data Analytics application by evaluating sample records on the specified streaming source (Kinesis data stream or Kinesis Data Firehose delivery stream) or Amazon S3 object. In the response, the operation returns the inferred schema and also the sample records that the operation used to infer the schema.</p> <p> You can use the inferred schema when configuring a streaming source for your application. When you create an application using the Kinesis Data Analytics console, the console uses this operation to infer a schema and show it in the console user interface. </p>

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

            DiscoverInputSchemaRequest req = new DiscoverInputSchemaRequest(                new DiscoverInputSchemaRequest("beatae") {{
                                inputProcessingConfiguration = new InputProcessingConfiguration(                new InputLambdaProcessor("laudantium"););;
                                inputStartingPositionConfiguration = new InputStartingPositionConfiguration() {{
                                    inputStartingPosition = InputStartingPositionEnum.TRIM_HORIZON;
                                }};;
                                resourceARN = "praesentium";
                                s3Configuration = new S3Configuration("cum", "laboriosam");;
                            }};, DiscoverInputSchemaXAmzTargetEnum.KINESIS_ANALYTICS20180523_DISCOVER_INPUT_SCHEMA) {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "voluptatum";
                xAmzCredential = "error";
                xAmzDate = "hic";
                xAmzSecurityToken = "expedita";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "neque";
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

## listApplicationSnapshots

Lists information about the current application snapshots.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListApplicationSnapshotsRequest;
import org.openapis.openapi.models.operations.ListApplicationSnapshotsResponse;
import org.openapis.openapi.models.operations.ListApplicationSnapshotsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListApplicationSnapshotsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListApplicationSnapshotsRequest req = new ListApplicationSnapshotsRequest(                new ListApplicationSnapshotsRequest("nostrum") {{
                                limit = 639028L;
                                nextToken = "dolorum";
                            }};, ListApplicationSnapshotsXAmzTargetEnum.KINESIS_ANALYTICS20180523_LIST_APPLICATION_SNAPSHOTS) {{
                xAmzAlgorithm = "corrupti";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "tempora";
                xAmzDate = "atque";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "ut";
                xAmzSignedHeaders = "fugiat";
            }};            

            ListApplicationSnapshotsResponse res = sdk.sdk.listApplicationSnapshots(req);

            if (res.listApplicationSnapshotsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listApplicationVersions

<p>Lists all the versions for the specified application, including versions that were rolled back. The response also includes a summary of the configuration associated with each version.</p> <p>To get the complete description of a specific application version, invoke the <a>DescribeApplicationVersion</a> operation.</p> <note> <p>This operation is supported only for Amazon Kinesis Data Analytics for Apache Flink.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListApplicationVersionsRequest;
import org.openapis.openapi.models.operations.ListApplicationVersionsResponse;
import org.openapis.openapi.models.operations.ListApplicationVersionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListApplicationVersionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListApplicationVersionsRequest req = new ListApplicationVersionsRequest(                new ListApplicationVersionsRequest("culpa") {{
                                limit = 710337L;
                                nextToken = "magnam";
                            }};, ListApplicationVersionsXAmzTargetEnum.KINESIS_ANALYTICS20180523_LIST_APPLICATION_VERSIONS) {{
                xAmzAlgorithm = "consequatur";
                xAmzContentSha256 = "esse";
                xAmzCredential = "ipsam";
                xAmzDate = "sit";
                xAmzSecurityToken = "voluptatum";
                xAmzSignature = "quas";
                xAmzSignedHeaders = "repudiandae";
            }};            

            ListApplicationVersionsResponse res = sdk.sdk.listApplicationVersions(req);

            if (res.listApplicationVersionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listApplications

<p>Returns a list of Kinesis Data Analytics applications in your account. For each application, the response includes the application name, Amazon Resource Name (ARN), and status. </p> <p>If you want detailed information about a specific application, use <a>DescribeApplication</a>.</p>

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
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListApplicationsRequest req = new ListApplicationsRequest(                new ListApplicationsRequest() {{
                                limit = 89494L;
                                nextToken = "blanditiis";
                            }};, ListApplicationsXAmzTargetEnum.KINESIS_ANALYTICS20180523_LIST_APPLICATIONS) {{
                xAmzAlgorithm = "ex";
                xAmzContentSha256 = "sed";
                xAmzCredential = "sit";
                xAmzDate = "vel";
                xAmzSecurityToken = "nostrum";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "error";
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

Retrieves the list of key-value tags assigned to the application. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/how-tagging.html">Using Tagging</a>.

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
                .setSecurity(new Security("consequatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceRequest("incidunt");, ListTagsForResourceXAmzTargetEnum.KINESIS_ANALYTICS20180523_LIST_TAGS_FOR_RESOURCE) {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "dolorem";
                xAmzCredential = "harum";
                xAmzDate = "dicta";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "labore";
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

## rollbackApplication

<p>Reverts the application to the previous running version. You can roll back an application if you suspect it is stuck in a transient status. </p> <p>You can roll back an application only if it is in the <code>UPDATING</code> or <code>AUTOSCALING</code> status.</p> <p>When you rollback an application, it loads state data from the last successful snapshot. If the application has no snapshots, Kinesis Data Analytics rejects the rollback request.</p> <p>This action is not supported for Kinesis Data Analytics for SQL applications.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RollbackApplicationRequest;
import org.openapis.openapi.models.operations.RollbackApplicationResponse;
import org.openapis.openapi.models.operations.RollbackApplicationXAmzTargetEnum;
import org.openapis.openapi.models.shared.RollbackApplicationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RollbackApplicationRequest req = new RollbackApplicationRequest(                new RollbackApplicationRequest("atque", 671957L);, RollbackApplicationXAmzTargetEnum.KINESIS_ANALYTICS20180523_ROLLBACK_APPLICATION) {{
                xAmzAlgorithm = "nam";
                xAmzContentSha256 = "tenetur";
                xAmzCredential = "laboriosam";
                xAmzDate = "alias";
                xAmzSecurityToken = "amet";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "voluptate";
            }};            

            RollbackApplicationResponse res = sdk.sdk.rollbackApplication(req);

            if (res.rollbackApplicationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startApplication

Starts the specified Kinesis Data Analytics application. After creating an application, you must exclusively call this operation to start your application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartApplicationRequest;
import org.openapis.openapi.models.operations.StartApplicationResponse;
import org.openapis.openapi.models.operations.StartApplicationXAmzTargetEnum;
import org.openapis.openapi.models.shared.ApplicationRestoreConfiguration;
import org.openapis.openapi.models.shared.ApplicationRestoreTypeEnum;
import org.openapis.openapi.models.shared.FlinkRunConfiguration;
import org.openapis.openapi.models.shared.InputStartingPositionConfiguration;
import org.openapis.openapi.models.shared.InputStartingPositionEnum;
import org.openapis.openapi.models.shared.RunConfiguration;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SqlRunConfiguration;
import org.openapis.openapi.models.shared.StartApplicationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartApplicationRequest req = new StartApplicationRequest(                new StartApplicationRequest("reiciendis") {{
                                runConfiguration = new RunConfiguration() {{
                                    applicationRestoreConfiguration = new ApplicationRestoreConfiguration(ApplicationRestoreTypeEnum.RESTORE_FROM_LATEST_SNAPSHOT) {{
                                        snapshotName = "repellendus";
                                    }};;
                                    flinkRunConfiguration = new FlinkRunConfiguration() {{
                                        allowNonRestoredState = false;
                                    }};;
                                    sqlRunConfigurations = new org.openapis.openapi.models.shared.SqlRunConfiguration[]{{
                                        add(new SqlRunConfiguration("est",                 new InputStartingPositionConfiguration() {{
                                                            inputStartingPosition = InputStartingPositionEnum.LAST_STOPPED_POINT;
                                                        }};) {{
                                            inputId = "voluptates";
                                            inputStartingPositionConfiguration = new InputStartingPositionConfiguration() {{
                                                inputStartingPosition = InputStartingPositionEnum.NOW;
                                            }};
                                        }}),
                                        add(new SqlRunConfiguration("fuga",                 new InputStartingPositionConfiguration() {{
                                                            inputStartingPosition = InputStartingPositionEnum.TRIM_HORIZON;
                                                        }};) {{
                                            inputId = "reprehenderit";
                                            inputStartingPositionConfiguration = new InputStartingPositionConfiguration() {{
                                                inputStartingPosition = InputStartingPositionEnum.LAST_STOPPED_POINT;
                                            }};
                                        }}),
                                        add(new SqlRunConfiguration("voluptatem",                 new InputStartingPositionConfiguration() {{
                                                            inputStartingPosition = InputStartingPositionEnum.LAST_STOPPED_POINT;
                                                        }};) {{
                                            inputId = "mollitia";
                                            inputStartingPositionConfiguration = new InputStartingPositionConfiguration() {{
                                                inputStartingPosition = InputStartingPositionEnum.TRIM_HORIZON;
                                            }};
                                        }}),
                                        add(new SqlRunConfiguration("atque",                 new InputStartingPositionConfiguration() {{
                                                            inputStartingPosition = InputStartingPositionEnum.TRIM_HORIZON;
                                                        }};) {{
                                            inputId = "repudiandae";
                                            inputStartingPositionConfiguration = new InputStartingPositionConfiguration() {{
                                                inputStartingPosition = InputStartingPositionEnum.NOW;
                                            }};
                                        }}),
                                    }};
                                }};;
                            }};, StartApplicationXAmzTargetEnum.KINESIS_ANALYTICS20180523_START_APPLICATION) {{
                xAmzAlgorithm = "asperiores";
                xAmzContentSha256 = "totam";
                xAmzCredential = "suscipit";
                xAmzDate = "quidem";
                xAmzSecurityToken = "maxime";
                xAmzSignature = "et";
                xAmzSignedHeaders = "esse";
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

<p>Stops the application from processing data. You can stop an application only if it is in the running status, unless you set the <code>Force</code> parameter to <code>true</code>.</p> <p>You can use the <a>DescribeApplication</a> operation to find the application status. </p> <p>Kinesis Data Analytics takes a snapshot when the application is stopped, unless <code>Force</code> is set to <code>true</code>.</p>

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
                .setSecurity(new Security("amet") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopApplicationRequest req = new StopApplicationRequest(                new StopApplicationRequest("assumenda") {{
                                force = false;
                            }};, StopApplicationXAmzTargetEnum.KINESIS_ANALYTICS20180523_STOP_APPLICATION) {{
                xAmzAlgorithm = "ea";
                xAmzContentSha256 = "atque";
                xAmzCredential = "error";
                xAmzDate = "officiis";
                xAmzSecurityToken = "officiis";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "natus";
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

Adds one or more key-value tags to a Kinesis Data Analytics application. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/how-tagging.html">Using Tagging</a>.

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
                .setSecurity(new Security("minima") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequest("aspernatur",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("at") {{
                                                    key = "maiores";
                                                    value = "corrupti";
                                                }}),
                                                add(new Tag("suscipit") {{
                                                    key = "error";
                                                    value = "blanditiis";
                                                }}),
                                            }});, TagResourceXAmzTargetEnum.KINESIS_ANALYTICS20180523_TAG_RESOURCE) {{
                xAmzAlgorithm = "repudiandae";
                xAmzContentSha256 = "atque";
                xAmzCredential = "atque";
                xAmzDate = "sunt";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "repellendus";
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

Removes one or more tags from a Kinesis Data Analytics application. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/how-tagging.html">Using Tagging</a>.

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
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequest("reiciendis",                 new String[]{{
                                                add("repudiandae"),
                                            }});, UntagResourceXAmzTargetEnum.KINESIS_ANALYTICS20180523_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "accusantium";
                xAmzCredential = "beatae";
                xAmzDate = "dolores";
                xAmzSecurityToken = "enim";
                xAmzSignature = "laboriosam";
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

<p>Updates an existing Kinesis Data Analytics application. Using this operation, you can update application code, input configuration, and output configuration. </p> <p>Kinesis Data Analytics updates the <code>ApplicationVersionId</code> each time you update your application. </p> <note> <p>You cannot update the <code>RuntimeEnvironment</code> of an existing application. If you need to update an application's <code>RuntimeEnvironment</code>, you must delete the application and create it again.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateApplicationRequest;
import org.openapis.openapi.models.operations.UpdateApplicationResponse;
import org.openapis.openapi.models.operations.UpdateApplicationXAmzTargetEnum;
import org.openapis.openapi.models.shared.ApplicationCodeConfigurationUpdate;
import org.openapis.openapi.models.shared.ApplicationConfigurationUpdate;
import org.openapis.openapi.models.shared.ApplicationRestoreConfiguration;
import org.openapis.openapi.models.shared.ApplicationRestoreTypeEnum;
import org.openapis.openapi.models.shared.ApplicationSnapshotConfigurationUpdate;
import org.openapis.openapi.models.shared.ArtifactTypeEnum;
import org.openapis.openapi.models.shared.CSVMappingParameters;
import org.openapis.openapi.models.shared.CatalogConfigurationUpdate;
import org.openapis.openapi.models.shared.CheckpointConfigurationUpdate;
import org.openapis.openapi.models.shared.CloudWatchLoggingOptionUpdate;
import org.openapis.openapi.models.shared.CodeContentTypeEnum;
import org.openapis.openapi.models.shared.CodeContentUpdate;
import org.openapis.openapi.models.shared.ConfigurationTypeEnum;
import org.openapis.openapi.models.shared.CustomArtifactConfiguration;
import org.openapis.openapi.models.shared.DeployAsApplicationConfigurationUpdate;
import org.openapis.openapi.models.shared.DestinationSchema;
import org.openapis.openapi.models.shared.EnvironmentPropertyUpdates;
import org.openapis.openapi.models.shared.FlinkApplicationConfigurationUpdate;
import org.openapis.openapi.models.shared.FlinkRunConfiguration;
import org.openapis.openapi.models.shared.GlueDataCatalogConfigurationUpdate;
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
import org.openapis.openapi.models.shared.LogLevelEnum;
import org.openapis.openapi.models.shared.MappingParameters;
import org.openapis.openapi.models.shared.MavenReference;
import org.openapis.openapi.models.shared.MetricsLevelEnum;
import org.openapis.openapi.models.shared.MonitoringConfigurationUpdate;
import org.openapis.openapi.models.shared.OutputUpdate;
import org.openapis.openapi.models.shared.ParallelismConfigurationUpdate;
import org.openapis.openapi.models.shared.PropertyGroup;
import org.openapis.openapi.models.shared.RecordColumn;
import org.openapis.openapi.models.shared.RecordFormat;
import org.openapis.openapi.models.shared.RecordFormatTypeEnum;
import org.openapis.openapi.models.shared.ReferenceDataSourceUpdate;
import org.openapis.openapi.models.shared.RunConfigurationUpdate;
import org.openapis.openapi.models.shared.S3ContentBaseLocationUpdate;
import org.openapis.openapi.models.shared.S3ContentLocation;
import org.openapis.openapi.models.shared.S3ContentLocationUpdate;
import org.openapis.openapi.models.shared.S3ReferenceDataSourceUpdate;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SourceSchema;
import org.openapis.openapi.models.shared.SqlApplicationConfigurationUpdate;
import org.openapis.openapi.models.shared.UpdateApplicationRequest;
import org.openapis.openapi.models.shared.VpcConfigurationUpdate;
import org.openapis.openapi.models.shared.ZeppelinApplicationConfigurationUpdate;
import org.openapis.openapi.models.shared.ZeppelinMonitoringConfigurationUpdate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateApplicationRequest req = new UpdateApplicationRequest(                new UpdateApplicationRequest("molestias") {{
                                applicationConfigurationUpdate = new ApplicationConfigurationUpdate() {{
                                    applicationCodeConfigurationUpdate = new ApplicationCodeConfigurationUpdate() {{
                                        codeContentTypeUpdate = CodeContentTypeEnum.PLAINTEXT;
                                        codeContentUpdate = new CodeContentUpdate() {{
                                            s3ContentLocationUpdate = new S3ContentLocationUpdate() {{
                                                bucketARNUpdate = "saepe";
                                                fileKeyUpdate = "consequuntur";
                                                objectVersionUpdate = "occaecati";
                                            }};;
                                            textContentUpdate = "officiis";
                                            zipFileContentUpdate = "perspiciatis";
                                        }};;
                                    }};;
                                    applicationSnapshotConfigurationUpdate = new ApplicationSnapshotConfigurationUpdate(false);;
                                    environmentPropertyUpdates = new EnvironmentPropertyUpdates(                new org.openapis.openapi.models.shared.PropertyGroup[]{{
                                                        add(new PropertyGroup("corporis",                 new java.util.HashMap<String, String>() {{
                                                                            put("eveniet", "non");
                                                                            put("vero", "doloremque");
                                                                            put("iure", "ipsa");
                                                                        }}) {{
                                                            propertyGroupId = "adipisci";
                                                            propertyMap = new java.util.HashMap<String, String>() {{
                                                                put("occaecati", "consequuntur");
                                                                put("fugit", "id");
                                                                put("quis", "reprehenderit");
                                                                put("error", "illo");
                                                            }};
                                                        }}),
                                                        add(new PropertyGroup("qui",                 new java.util.HashMap<String, String>() {{
                                                                            put("iure", "necessitatibus");
                                                                            put("ratione", "laborum");
                                                                            put("distinctio", "voluptatum");
                                                                        }}) {{
                                                            propertyGroupId = "totam";
                                                            propertyMap = new java.util.HashMap<String, String>() {{
                                                                put("molestiae", "eveniet");
                                                            }};
                                                        }}),
                                                    }});;
                                    flinkApplicationConfigurationUpdate = new FlinkApplicationConfigurationUpdate() {{
                                        checkpointConfigurationUpdate = new CheckpointConfigurationUpdate() {{
                                            checkpointIntervalUpdate = 523006L;
                                            checkpointingEnabledUpdate = false;
                                            configurationTypeUpdate = ConfigurationTypeEnum.DEFAULT_;
                                            minPauseBetweenCheckpointsUpdate = 320565L;
                                        }};;
                                        monitoringConfigurationUpdate = new MonitoringConfigurationUpdate() {{
                                            configurationTypeUpdate = ConfigurationTypeEnum.CUSTOM;
                                            logLevelUpdate = LogLevelEnum.INFO;
                                            metricsLevelUpdate = MetricsLevelEnum.TASK;
                                        }};;
                                        parallelismConfigurationUpdate = new ParallelismConfigurationUpdate() {{
                                            autoScalingEnabledUpdate = false;
                                            configurationTypeUpdate = ConfigurationTypeEnum.CUSTOM;
                                            parallelismPerKPUUpdate = 470649L;
                                            parallelismUpdate = 649078L;
                                        }};;
                                    }};;
                                    sqlApplicationConfigurationUpdate = new SqlApplicationConfigurationUpdate() {{
                                        inputUpdates = new org.openapis.openapi.models.shared.InputUpdate[]{{
                                            add(new InputUpdate("aliquid") {{
                                                inputId = "alias";
                                                inputParallelismUpdate = new InputParallelismUpdate(970222L) {{
                                                    countUpdate = 979527L;
                                                }};
                                                inputProcessingConfigurationUpdate = new InputProcessingConfigurationUpdate(                new InputLambdaProcessorUpdate("minima");) {{
                                                    inputLambdaProcessorUpdate = new InputLambdaProcessorUpdate("id") {{
                                                        resourceARNUpdate = "dolores";
                                                    }};
                                                }};
                                                inputSchemaUpdate = new InputSchemaUpdate() {{
                                                    recordColumnUpdates = new org.openapis.openapi.models.shared.RecordColumn[]{{
                                                        add(new RecordColumn("ex", "ut") {{
                                                            mapping = "dolorum";
                                                            name = "Amy Walsh";
                                                            sqlType = "molestiae";
                                                        }}),
                                                        add(new RecordColumn("esse", "provident") {{
                                                            mapping = "culpa";
                                                            name = "Raquel Larkin";
                                                            sqlType = "recusandae";
                                                        }}),
                                                    }};
                                                    recordEncodingUpdate = "quis";
                                                    recordFormatUpdate = new RecordFormat(RecordFormatTypeEnum.JSON) {{
                                                        mappingParameters = new MappingParameters() {{
                                                            csvMappingParameters = new CSVMappingParameters("provident", "aspernatur") {{
                                                                recordColumnDelimiter = "eum";
                                                                recordRowDelimiter = "reiciendis";
                                                            }};
                                                            jsonMappingParameters = new JSONMappingParameters("quasi") {{
                                                                recordRowPath = "ullam";
                                                            }};
                                                        }};
                                                        recordFormatType = RecordFormatTypeEnum.CSV;
                                                    }};
                                                }};
                                                kinesisFirehoseInputUpdate = new KinesisFirehoseInputUpdate("provident") {{
                                                    resourceARNUpdate = "mollitia";
                                                }};
                                                kinesisStreamsInputUpdate = new KinesisStreamsInputUpdate("animi") {{
                                                    resourceARNUpdate = "possimus";
                                                }};
                                                namePrefixUpdate = "ex";
                                            }}),
                                            add(new InputUpdate("necessitatibus") {{
                                                inputId = "accusantium";
                                                inputParallelismUpdate = new InputParallelismUpdate(984632L) {{
                                                    countUpdate = 999278L;
                                                }};
                                                inputProcessingConfigurationUpdate = new InputProcessingConfigurationUpdate(                new InputLambdaProcessorUpdate("nam");) {{
                                                    inputLambdaProcessorUpdate = new InputLambdaProcessorUpdate("in") {{
                                                        resourceARNUpdate = "ullam";
                                                    }};
                                                }};
                                                inputSchemaUpdate = new InputSchemaUpdate() {{
                                                    recordColumnUpdates = new org.openapis.openapi.models.shared.RecordColumn[]{{
                                                        add(new RecordColumn("sapiente", "cumque") {{
                                                            mapping = "officia";
                                                            name = "Irving Gleichner";
                                                            sqlType = "officiis";
                                                        }}),
                                                        add(new RecordColumn("perferendis", "velit") {{
                                                            mapping = "vitae";
                                                            name = "Mr. Ricky Harvey";
                                                            sqlType = "quae";
                                                        }}),
                                                        add(new RecordColumn("sapiente", "eum") {{
                                                            mapping = "aspernatur";
                                                            name = "Monica Lebsack";
                                                            sqlType = "eos";
                                                        }}),
                                                        add(new RecordColumn("hic", "illum") {{
                                                            mapping = "dicta";
                                                            name = "Teresa McCullough";
                                                            sqlType = "soluta";
                                                        }}),
                                                    }};
                                                    recordEncodingUpdate = "eaque";
                                                    recordFormatUpdate = new RecordFormat(RecordFormatTypeEnum.JSON) {{
                                                        mappingParameters = new MappingParameters() {{
                                                            csvMappingParameters = new CSVMappingParameters("maiores", "debitis") {{
                                                                recordColumnDelimiter = "earum";
                                                                recordRowDelimiter = "perspiciatis";
                                                            }};
                                                            jsonMappingParameters = new JSONMappingParameters("porro") {{
                                                                recordRowPath = "aliquid";
                                                            }};
                                                        }};
                                                        recordFormatType = RecordFormatTypeEnum.JSON;
                                                    }};
                                                }};
                                                kinesisFirehoseInputUpdate = new KinesisFirehoseInputUpdate("cumque") {{
                                                    resourceARNUpdate = "fugit";
                                                }};
                                                kinesisStreamsInputUpdate = new KinesisStreamsInputUpdate("ratione") {{
                                                    resourceARNUpdate = "fuga";
                                                }};
                                                namePrefixUpdate = "animi";
                                            }}),
                                        }};
                                        outputUpdates = new org.openapis.openapi.models.shared.OutputUpdate[]{{
                                            add(new OutputUpdate("doloribus") {{
                                                destinationSchemaUpdate = new DestinationSchema(RecordFormatTypeEnum.JSON) {{
                                                    recordFormatType = RecordFormatTypeEnum.JSON;
                                                }};
                                                kinesisFirehoseOutputUpdate = new KinesisFirehoseOutputUpdate("ducimus") {{
                                                    resourceARNUpdate = "et";
                                                }};
                                                kinesisStreamsOutputUpdate = new KinesisStreamsOutputUpdate("occaecati") {{
                                                    resourceARNUpdate = "natus";
                                                }};
                                                lambdaOutputUpdate = new LambdaOutputUpdate("adipisci") {{
                                                    resourceARNUpdate = "suscipit";
                                                }};
                                                nameUpdate = "quasi";
                                                outputId = "magni";
                                            }}),
                                            add(new OutputUpdate("maiores") {{
                                                destinationSchemaUpdate = new DestinationSchema(RecordFormatTypeEnum.CSV) {{
                                                    recordFormatType = RecordFormatTypeEnum.CSV;
                                                }};
                                                kinesisFirehoseOutputUpdate = new KinesisFirehoseOutputUpdate("tempora") {{
                                                    resourceARNUpdate = "ipsa";
                                                }};
                                                kinesisStreamsOutputUpdate = new KinesisStreamsOutputUpdate("molestiae") {{
                                                    resourceARNUpdate = "nihil";
                                                }};
                                                lambdaOutputUpdate = new LambdaOutputUpdate("iusto") {{
                                                    resourceARNUpdate = "dicta";
                                                }};
                                                nameUpdate = "esse";
                                                outputId = "praesentium";
                                            }}),
                                            add(new OutputUpdate("consectetur") {{
                                                destinationSchemaUpdate = new DestinationSchema(RecordFormatTypeEnum.JSON) {{
                                                    recordFormatType = RecordFormatTypeEnum.CSV;
                                                }};
                                                kinesisFirehoseOutputUpdate = new KinesisFirehoseOutputUpdate("fugiat") {{
                                                    resourceARNUpdate = "architecto";
                                                }};
                                                kinesisStreamsOutputUpdate = new KinesisStreamsOutputUpdate("dicta") {{
                                                    resourceARNUpdate = "doloremque";
                                                }};
                                                lambdaOutputUpdate = new LambdaOutputUpdate("tempora") {{
                                                    resourceARNUpdate = "odio";
                                                }};
                                                nameUpdate = "esse";
                                                outputId = "ex";
                                            }}),
                                            add(new OutputUpdate("aliquid") {{
                                                destinationSchemaUpdate = new DestinationSchema(RecordFormatTypeEnum.JSON) {{
                                                    recordFormatType = RecordFormatTypeEnum.JSON;
                                                }};
                                                kinesisFirehoseOutputUpdate = new KinesisFirehoseOutputUpdate("sunt") {{
                                                    resourceARNUpdate = "laborum";
                                                }};
                                                kinesisStreamsOutputUpdate = new KinesisStreamsOutputUpdate("fugiat") {{
                                                    resourceARNUpdate = "nostrum";
                                                }};
                                                lambdaOutputUpdate = new LambdaOutputUpdate("aliquid") {{
                                                    resourceARNUpdate = "expedita";
                                                }};
                                                nameUpdate = "officia";
                                                outputId = "suscipit";
                                            }}),
                                        }};
                                        referenceDataSourceUpdates = new org.openapis.openapi.models.shared.ReferenceDataSourceUpdate[]{{
                                            add(new ReferenceDataSourceUpdate("rem") {{
                                                referenceId = "eum";
                                                referenceSchemaUpdate = new SourceSchema(                new org.openapis.openapi.models.shared.RecordColumn[]{{
                                                                    add(new RecordColumn("fuga", "pariatur") {{
                                                                        mapping = "rerum";
                                                                        name = "Trevor Bartell";
                                                                        sqlType = "architecto";
                                                                    }}),
                                                                }},                 new RecordFormat(RecordFormatTypeEnum.CSV) {{
                                                                    mappingParameters = new MappingParameters() {{
                                                                        csvMappingParameters = new CSVMappingParameters("voluptatem", "alias");;
                                                                        jsonMappingParameters = new JSONMappingParameters("deleniti");;
                                                                    }};;
                                                                }};) {{
                                                    recordColumns = new org.openapis.openapi.models.shared.RecordColumn[]{{
                                                        add(new RecordColumn("laborum", "libero") {{
                                                            mapping = "iste";
                                                            name = "Raymond Muller";
                                                            sqlType = "mollitia";
                                                        }}),
                                                        add(new RecordColumn("ex", "ut") {{
                                                            mapping = "ad";
                                                            name = "Bill Brown";
                                                            sqlType = "quo";
                                                        }}),
                                                    }};
                                                    recordEncoding = "ad";
                                                    recordFormat = new RecordFormat(RecordFormatTypeEnum.CSV) {{
                                                        mappingParameters = new MappingParameters() {{
                                                            csvMappingParameters = new CSVMappingParameters("molestias", "cum") {{
                                                                recordColumnDelimiter = "expedita";
                                                                recordRowDelimiter = "voluptatem";
                                                            }};
                                                            jsonMappingParameters = new JSONMappingParameters("beatae") {{
                                                                recordRowPath = "aliquid";
                                                            }};
                                                        }};
                                                        recordFormatType = RecordFormatTypeEnum.CSV;
                                                    }};
                                                }};
                                                s3ReferenceDataSourceUpdate = new S3ReferenceDataSourceUpdate() {{
                                                    bucketARNUpdate = "earum";
                                                    fileKeyUpdate = "ex";
                                                }};
                                                tableNameUpdate = "sapiente";
                                            }}),
                                        }};
                                    }};;
                                    vpcConfigurationUpdates = new org.openapis.openapi.models.shared.VpcConfigurationUpdate[]{{
                                        add(new VpcConfigurationUpdate("impedit") {{
                                            securityGroupIdUpdates = new String[]{{
                                                add("asperiores"),
                                                add("ratione"),
                                            }};
                                            subnetIdUpdates = new String[]{{
                                                add("perferendis"),
                                                add("illum"),
                                            }};
                                            vpcConfigurationId = "totam";
                                        }}),
                                        add(new VpcConfigurationUpdate("tempora") {{
                                            securityGroupIdUpdates = new String[]{{
                                                add("nam"),
                                                add("ipsam"),
                                                add("culpa"),
                                                add("dolor"),
                                            }};
                                            subnetIdUpdates = new String[]{{
                                                add("inventore"),
                                                add("deleniti"),
                                            }};
                                            vpcConfigurationId = "veritatis";
                                        }}),
                                        add(new VpcConfigurationUpdate("fugit") {{
                                            securityGroupIdUpdates = new String[]{{
                                                add("consequatur"),
                                            }};
                                            subnetIdUpdates = new String[]{{
                                                add("sit"),
                                            }};
                                            vpcConfigurationId = "modi";
                                        }}),
                                        add(new VpcConfigurationUpdate("ipsam") {{
                                            securityGroupIdUpdates = new String[]{{
                                                add("laudantium"),
                                            }};
                                            subnetIdUpdates = new String[]{{
                                                add("dolor"),
                                            }};
                                            vpcConfigurationId = "fugiat";
                                        }}),
                                    }};
                                    zeppelinApplicationConfigurationUpdate = new ZeppelinApplicationConfigurationUpdate() {{
                                        catalogConfigurationUpdate = new CatalogConfigurationUpdate(                new GlueDataCatalogConfigurationUpdate("consequuntur"););;
                                        customArtifactsConfigurationUpdate = new org.openapis.openapi.models.shared.CustomArtifactConfiguration[]{{
                                            add(new CustomArtifactConfiguration(ArtifactTypeEnum.DEPENDENCY_JAR) {{
                                                artifactType = ArtifactTypeEnum.DEPENDENCY_JAR;
                                                mavenReference = new MavenReference("esse", "necessitatibus", "sed") {{
                                                    artifactId = "eveniet";
                                                    groupId = "impedit";
                                                    version = "officiis";
                                                }};
                                                s3ContentLocation = new S3ContentLocation("eum", "vel") {{
                                                    bucketARN = "veniam";
                                                    fileKey = "nesciunt";
                                                    objectVersion = "expedita";
                                                }};
                                            }}),
                                        }};
                                        deployAsApplicationConfigurationUpdate = new DeployAsApplicationConfigurationUpdate() {{
                                            s3ContentLocationUpdate = new S3ContentBaseLocationUpdate() {{
                                                basePathUpdate = "magnam";
                                                bucketARNUpdate = "exercitationem";
                                            }};;
                                        }};;
                                        monitoringConfigurationUpdate = new ZeppelinMonitoringConfigurationUpdate(LogLevelEnum.INFO);;
                                    }};;
                                }};;
                                cloudWatchLoggingOptionUpdates = new org.openapis.openapi.models.shared.CloudWatchLoggingOptionUpdate[]{{
                                    add(new CloudWatchLoggingOptionUpdate("laboriosam") {{
                                        cloudWatchLoggingOptionId = "autem";
                                        logStreamARNUpdate = "nobis";
                                    }}),
                                    add(new CloudWatchLoggingOptionUpdate("voluptatem") {{
                                        cloudWatchLoggingOptionId = "recusandae";
                                        logStreamARNUpdate = "consequuntur";
                                    }}),
                                    add(new CloudWatchLoggingOptionUpdate("quasi") {{
                                        cloudWatchLoggingOptionId = "exercitationem";
                                        logStreamARNUpdate = "necessitatibus";
                                    }}),
                                    add(new CloudWatchLoggingOptionUpdate("vero") {{
                                        cloudWatchLoggingOptionId = "nisi";
                                        logStreamARNUpdate = "at";
                                    }}),
                                }};
                                conditionalToken = "est";
                                currentApplicationVersionId = 690785L;
                                runConfigurationUpdate = new RunConfigurationUpdate() {{
                                    applicationRestoreConfiguration = new ApplicationRestoreConfiguration(ApplicationRestoreTypeEnum.SKIP_RESTORE_FROM_SNAPSHOT) {{
                                        snapshotName = "doloribus";
                                    }};;
                                    flinkRunConfiguration = new FlinkRunConfiguration() {{
                                        allowNonRestoredState = false;
                                    }};;
                                }};;
                                serviceExecutionRoleUpdate = "repudiandae";
                            }};, UpdateApplicationXAmzTargetEnum.KINESIS_ANALYTICS20180523_UPDATE_APPLICATION) {{
                xAmzAlgorithm = "optio";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "nemo";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "blanditiis";
                xAmzSignature = "officia";
                xAmzSignedHeaders = "voluptas";
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

## updateApplicationMaintenanceConfiguration

<p>Updates the maintenance configuration of the Kinesis Data Analytics application. </p> <p>You can invoke this operation on an application that is in one of the two following states: <code>READY</code> or <code>RUNNING</code>. If you invoke it when the application is in a state other than these two states, it throws a <code>ResourceInUseException</code>. The service makes use of the updated configuration the next time it schedules maintenance for the application. If you invoke this operation after the service schedules maintenance, the service will apply the configuration update the next time it schedules maintenance for the application. This means that you might not see the maintenance configuration update applied to the maintenance process that follows a successful invocation of this operation, but to the following maintenance process instead.</p> <p>To see the current maintenance configuration of your application, invoke the <a>DescribeApplication</a> operation.</p> <p>For information about application maintenance, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/maintenance.html">Kinesis Data Analytics for Apache Flink Maintenance</a>.</p> <note> <p>This operation is supported only for Amazon Kinesis Data Analytics for Apache Flink.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateApplicationMaintenanceConfigurationRequest;
import org.openapis.openapi.models.operations.UpdateApplicationMaintenanceConfigurationResponse;
import org.openapis.openapi.models.operations.UpdateApplicationMaintenanceConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.ApplicationMaintenanceConfigurationUpdate;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateApplicationMaintenanceConfigurationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateApplicationMaintenanceConfigurationRequest req = new UpdateApplicationMaintenanceConfigurationRequest(                new UpdateApplicationMaintenanceConfigurationRequest(                new ApplicationMaintenanceConfigurationUpdate("nemo");, "quos");, UpdateApplicationMaintenanceConfigurationXAmzTargetEnum.KINESIS_ANALYTICS20180523_UPDATE_APPLICATION_MAINTENANCE_CONFIGURATION) {{
                xAmzAlgorithm = "eius";
                xAmzContentSha256 = "aspernatur";
                xAmzCredential = "ducimus";
                xAmzDate = "nesciunt";
                xAmzSecurityToken = "fuga";
                xAmzSignature = "laudantium";
                xAmzSignedHeaders = "incidunt";
            }};            

            UpdateApplicationMaintenanceConfigurationResponse res = sdk.sdk.updateApplicationMaintenanceConfiguration(req);

            if (res.updateApplicationMaintenanceConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
