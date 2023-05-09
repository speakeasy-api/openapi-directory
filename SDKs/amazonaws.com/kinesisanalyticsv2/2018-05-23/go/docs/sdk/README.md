# SDK

## Overview

Amazon Kinesis Data Analytics is a fully managed service that you can use to process and analyze streaming data using Java, SQL, or Scala. The service enables you to quickly author and run Java, SQL, or Scala code against streaming sources to perform time series analytics, feed real-time dashboards, and create real-time metrics.

Amazon Web Services documentation
<https://docs.aws.amazon.com/kinesisanalytics/>
### Available Operations

* [AddApplicationCloudWatchLoggingOption](#addapplicationcloudwatchloggingoption) - Adds an Amazon CloudWatch log stream to monitor application configuration errors.
* [AddApplicationInput](#addapplicationinput) - <p> Adds a streaming source to your SQL-based Kinesis Data Analytics application. </p> <p>You can add a streaming source when you create an application, or you can use this operation to add a streaming source after you create an application. For more information, see <a>CreateApplication</a>.</p> <p>Any configuration update, including adding a streaming source using this operation, results in a new version of the application. You can use the <a>DescribeApplication</a> operation to find the current application version. </p>
* [AddApplicationInputProcessingConfiguration](#addapplicationinputprocessingconfiguration) - Adds an <a>InputProcessingConfiguration</a> to a SQL-based Kinesis Data Analytics application. An input processor pre-processes records on the input stream before the application's SQL code executes. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">Amazon Lambda</a>.
* [AddApplicationOutput](#addapplicationoutput) - <p>Adds an external destination to your SQL-based Kinesis Data Analytics application.</p> <p>If you want Kinesis Data Analytics to deliver data from an in-application stream within your application to an external destination (such as an Kinesis data stream, a Kinesis Data Firehose delivery stream, or an Amazon Lambda function), you add the relevant configuration to your application using this operation. You can configure one or more outputs for your application. Each output configuration maps an in-application stream and an external destination.</p> <p> You can use one of the output configurations to deliver data from your in-application error stream to an external destination so that you can analyze the errors. </p> <p> Any configuration update, including adding a streaming source using this operation, results in a new version of the application. You can use the <a>DescribeApplication</a> operation to find the current application version.</p>
* [AddApplicationReferenceDataSource](#addapplicationreferencedatasource) - <p>Adds a reference data source to an existing SQL-based Kinesis Data Analytics application.</p> <p>Kinesis Data Analytics reads reference data (that is, an Amazon S3 object) and creates an in-application table within your application. In the request, you provide the source (S3 bucket name and object key name), name of the in-application table to create, and the necessary mapping information that describes how data in an Amazon S3 object maps to columns in the resulting in-application table.</p>
* [AddApplicationVpcConfiguration](#addapplicationvpcconfiguration) - <p>Adds a Virtual Private Cloud (VPC) configuration to the application. Applications can use VPCs to store and access resources securely.</p> <p>Note the following about VPC configurations for Kinesis Data Analytics applications:</p> <ul> <li> <p>VPC configurations are not supported for SQL applications.</p> </li> <li> <p>When a VPC is added to a Kinesis Data Analytics application, the application can no longer be accessed from the Internet directly. To enable Internet access to the application, add an Internet gateway to your VPC.</p> </li> </ul>
* [CreateApplication](#createapplication) - Creates a Kinesis Data Analytics application. For information about creating a Kinesis Data Analytics application, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/getting-started.html">Creating an Application</a>.
* [CreateApplicationPresignedURL](#createapplicationpresignedurl) - <p>Creates and returns a URL that you can use to connect to an application's extension.</p> <p>The IAM role or user used to call this API defines the permissions to access the extension. After the presigned URL is created, no additional permission is required to access this URL. IAM authorization policies for this API are also enforced for every HTTP request that attempts to connect to the extension. </p> <p>You control the amount of time that the URL will be valid using the <code>SessionExpirationDurationInSeconds</code> parameter. If you do not provide this parameter, the returned URL is valid for twelve hours.</p> <note> <p>The URL that you get from a call to CreateApplicationPresignedUrl must be used within 3 minutes to be valid. If you first try to use the URL after the 3-minute limit expires, the service returns an HTTP 403 Forbidden error.</p> </note>
* [CreateApplicationSnapshot](#createapplicationsnapshot) - Creates a snapshot of the application's state data.
* [DeleteApplication](#deleteapplication) - Deletes the specified application. Kinesis Data Analytics halts application execution and deletes the application.
* [DeleteApplicationCloudWatchLoggingOption](#deleteapplicationcloudwatchloggingoption) - Deletes an Amazon CloudWatch log stream from an Kinesis Data Analytics application. 
* [DeleteApplicationInputProcessingConfiguration](#deleteapplicationinputprocessingconfiguration) - Deletes an <a>InputProcessingConfiguration</a> from an input.
* [DeleteApplicationOutput](#deleteapplicationoutput) - Deletes the output destination configuration from your SQL-based Kinesis Data Analytics application's configuration. Kinesis Data Analytics will no longer write data from the corresponding in-application stream to the external output destination.
* [DeleteApplicationReferenceDataSource](#deleteapplicationreferencedatasource) - <p>Deletes a reference data source configuration from the specified SQL-based Kinesis Data Analytics application's configuration.</p> <p>If the application is running, Kinesis Data Analytics immediately removes the in-application table that you created using the <a>AddApplicationReferenceDataSource</a> operation. </p>
* [DeleteApplicationSnapshot](#deleteapplicationsnapshot) - Deletes a snapshot of application state.
* [DeleteApplicationVpcConfiguration](#deleteapplicationvpcconfiguration) - Removes a VPC configuration from a Kinesis Data Analytics application.
* [DescribeApplication](#describeapplication) - <p>Returns information about a specific Kinesis Data Analytics application.</p> <p>If you want to retrieve a list of all applications in your account, use the <a>ListApplications</a> operation.</p>
* [DescribeApplicationSnapshot](#describeapplicationsnapshot) - Returns information about a snapshot of application state data.
* [DescribeApplicationVersion](#describeapplicationversion) - <p>Provides a detailed description of a specified version of the application. To see a list of all the versions of an application, invoke the <a>ListApplicationVersions</a> operation.</p> <note> <p>This operation is supported only for Amazon Kinesis Data Analytics for Apache Flink.</p> </note>
* [DiscoverInputSchema](#discoverinputschema) - <p>Infers a schema for a SQL-based Kinesis Data Analytics application by evaluating sample records on the specified streaming source (Kinesis data stream or Kinesis Data Firehose delivery stream) or Amazon S3 object. In the response, the operation returns the inferred schema and also the sample records that the operation used to infer the schema.</p> <p> You can use the inferred schema when configuring a streaming source for your application. When you create an application using the Kinesis Data Analytics console, the console uses this operation to infer a schema and show it in the console user interface. </p>
* [ListApplicationSnapshots](#listapplicationsnapshots) - Lists information about the current application snapshots.
* [ListApplicationVersions](#listapplicationversions) - <p>Lists all the versions for the specified application, including versions that were rolled back. The response also includes a summary of the configuration associated with each version.</p> <p>To get the complete description of a specific application version, invoke the <a>DescribeApplicationVersion</a> operation.</p> <note> <p>This operation is supported only for Amazon Kinesis Data Analytics for Apache Flink.</p> </note>
* [ListApplications](#listapplications) - <p>Returns a list of Kinesis Data Analytics applications in your account. For each application, the response includes the application name, Amazon Resource Name (ARN), and status. </p> <p>If you want detailed information about a specific application, use <a>DescribeApplication</a>.</p>
* [ListTagsForResource](#listtagsforresource) - Retrieves the list of key-value tags assigned to the application. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/how-tagging.html">Using Tagging</a>.
* [RollbackApplication](#rollbackapplication) - <p>Reverts the application to the previous running version. You can roll back an application if you suspect it is stuck in a transient status. </p> <p>You can roll back an application only if it is in the <code>UPDATING</code> or <code>AUTOSCALING</code> status.</p> <p>When you rollback an application, it loads state data from the last successful snapshot. If the application has no snapshots, Kinesis Data Analytics rejects the rollback request.</p> <p>This action is not supported for Kinesis Data Analytics for SQL applications.</p>
* [StartApplication](#startapplication) - Starts the specified Kinesis Data Analytics application. After creating an application, you must exclusively call this operation to start your application.
* [StopApplication](#stopapplication) - <p>Stops the application from processing data. You can stop an application only if it is in the running status, unless you set the <code>Force</code> parameter to <code>true</code>.</p> <p>You can use the <a>DescribeApplication</a> operation to find the application status. </p> <p>Kinesis Data Analytics takes a snapshot when the application is stopped, unless <code>Force</code> is set to <code>true</code>.</p>
* [TagResource](#tagresource) - Adds one or more key-value tags to a Kinesis Data Analytics application. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/how-tagging.html">Using Tagging</a>.
* [UntagResource](#untagresource) - Removes one or more tags from a Kinesis Data Analytics application. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/how-tagging.html">Using Tagging</a>.
* [UpdateApplication](#updateapplication) - <p>Updates an existing Kinesis Data Analytics application. Using this operation, you can update application code, input configuration, and output configuration. </p> <p>Kinesis Data Analytics updates the <code>ApplicationVersionId</code> each time you update your application. </p> <note> <p>You cannot update the <code>RuntimeEnvironment</code> of an existing application. If you need to update an application's <code>RuntimeEnvironment</code>, you must delete the application and create it again.</p> </note>
* [UpdateApplicationMaintenanceConfiguration](#updateapplicationmaintenanceconfiguration) - <p>Updates the maintenance configuration of the Kinesis Data Analytics application. </p> <p>You can invoke this operation on an application that is in one of the two following states: <code>READY</code> or <code>RUNNING</code>. If you invoke it when the application is in a state other than these two states, it throws a <code>ResourceInUseException</code>. The service makes use of the updated configuration the next time it schedules maintenance for the application. If you invoke this operation after the service schedules maintenance, the service will apply the configuration update the next time it schedules maintenance for the application. This means that you might not see the maintenance configuration update applied to the maintenance process that follows a successful invocation of this operation, but to the following maintenance process instead.</p> <p>To see the current maintenance configuration of your application, invoke the <a>DescribeApplication</a> operation.</p> <p>For information about application maintenance, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/maintenance.html">Kinesis Data Analytics for Apache Flink Maintenance</a>.</p> <note> <p>This operation is supported only for Amazon Kinesis Data Analytics for Apache Flink.</p> </note>

## AddApplicationCloudWatchLoggingOption

Adds an Amazon CloudWatch log stream to monitor application configuration errors.

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
    res, err := s.SDK.AddApplicationCloudWatchLoggingOption(ctx, operations.AddApplicationCloudWatchLoggingOptionRequest{
        AddApplicationCloudWatchLoggingOptionRequest: shared.AddApplicationCloudWatchLoggingOptionRequest{
            ApplicationName: "suscipit",
            CloudWatchLoggingOption: shared.CloudWatchLoggingOption{
                LogStreamARN: "iure",
            },
            ConditionalToken: sdk.String("magnam"),
            CurrentApplicationVersionID: sdk.Int64(891773),
        },
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("minus"),
        XAmzSignedHeaders: sdk.String("placeat"),
        XAmzTarget: operations.AddApplicationCloudWatchLoggingOptionXAmzTargetEnumKinesisAnalytics20180523AddApplicationCloudWatchLoggingOption,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddApplicationCloudWatchLoggingOptionResponse != nil {
        // handle response
    }
}
```

## AddApplicationInput

<p> Adds a streaming source to your SQL-based Kinesis Data Analytics application. </p> <p>You can add a streaming source when you create an application, or you can use this operation to add a streaming source after you create an application. For more information, see <a>CreateApplication</a>.</p> <p>Any configuration update, including adding a streaming source using this operation, results in a new version of the application. You can use the <a>DescribeApplication</a> operation to find the current application version. </p>

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
    res, err := s.SDK.AddApplicationInput(ctx, operations.AddApplicationInputRequest{
        AddApplicationInputRequest: shared.AddApplicationInputRequest{
            ApplicationName: "voluptatum",
            CurrentApplicationVersionID: 479977,
            Input: shared.Input{
                InputParallelism: &shared.InputParallelism{
                    Count: sdk.Int64(568045),
                },
                InputProcessingConfiguration: &shared.InputProcessingConfiguration{
                    InputLambdaProcessor: shared.InputLambdaProcessor{
                        ResourceARN: "nisi",
                    },
                },
                InputSchema: shared.SourceSchema{
                    RecordColumns: []shared.RecordColumn{
                        shared.RecordColumn{
                            Mapping: sdk.String("temporibus"),
                            Name: "Erica Bogisich III",
                            SQLType: "repellendus",
                        },
                        shared.RecordColumn{
                            Mapping: sdk.String("sapiente"),
                            Name: "Fred Strosin",
                            SQLType: "molestiae",
                        },
                        shared.RecordColumn{
                            Mapping: sdk.String("quod"),
                            Name: "Erik Lebsack",
                            SQLType: "dicta",
                        },
                        shared.RecordColumn{
                            Mapping: sdk.String("nam"),
                            Name: "Seth Conroy",
                            SQLType: "optio",
                        },
                    },
                    RecordEncoding: sdk.String("totam"),
                    RecordFormat: shared.RecordFormat{
                        MappingParameters: &shared.MappingParameters{
                            CSVMappingParameters: &shared.CSVMappingParameters{
                                RecordColumnDelimiter: "beatae",
                                RecordRowDelimiter: "commodi",
                            },
                            JSONMappingParameters: &shared.JSONMappingParameters{
                                RecordRowPath: "molestiae",
                            },
                        },
                        RecordFormatType: shared.RecordFormatTypeEnumJSON,
                    },
                },
                KinesisFirehoseInput: &shared.KinesisFirehoseInput{
                    ResourceARN: "qui",
                },
                KinesisStreamsInput: &shared.KinesisStreamsInput{
                    ResourceARN: "impedit",
                },
                NamePrefix: "cum",
            },
        },
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("ad"),
        XAmzSignedHeaders: sdk.String("natus"),
        XAmzTarget: operations.AddApplicationInputXAmzTargetEnumKinesisAnalytics20180523AddApplicationInput,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddApplicationInputResponse != nil {
        // handle response
    }
}
```

## AddApplicationInputProcessingConfiguration

Adds an <a>InputProcessingConfiguration</a> to a SQL-based Kinesis Data Analytics application. An input processor pre-processes records on the input stream before the application's SQL code executes. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">Amazon Lambda</a>.

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
    res, err := s.SDK.AddApplicationInputProcessingConfiguration(ctx, operations.AddApplicationInputProcessingConfigurationRequest{
        AddApplicationInputProcessingConfigurationRequest: shared.AddApplicationInputProcessingConfigurationRequest{
            ApplicationName: "sed",
            CurrentApplicationVersionID: 612096,
            InputID: "dolor",
            InputProcessingConfiguration: shared.InputProcessingConfiguration{
                InputLambdaProcessor: shared.InputLambdaProcessor{
                    ResourceARN: "natus",
                },
            },
        },
        XAmzAlgorithm: sdk.String("laboriosam"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("fuga"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("iste"),
        XAmzTarget: operations.AddApplicationInputProcessingConfigurationXAmzTargetEnumKinesisAnalytics20180523AddApplicationInputProcessingConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddApplicationInputProcessingConfigurationResponse != nil {
        // handle response
    }
}
```

## AddApplicationOutput

<p>Adds an external destination to your SQL-based Kinesis Data Analytics application.</p> <p>If you want Kinesis Data Analytics to deliver data from an in-application stream within your application to an external destination (such as an Kinesis data stream, a Kinesis Data Firehose delivery stream, or an Amazon Lambda function), you add the relevant configuration to your application using this operation. You can configure one or more outputs for your application. Each output configuration maps an in-application stream and an external destination.</p> <p> You can use one of the output configurations to deliver data from your in-application error stream to an external destination so that you can analyze the errors. </p> <p> Any configuration update, including adding a streaming source using this operation, results in a new version of the application. You can use the <a>DescribeApplication</a> operation to find the current application version.</p>

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
    res, err := s.SDK.AddApplicationOutput(ctx, operations.AddApplicationOutputRequest{
        AddApplicationOutputRequest: shared.AddApplicationOutputRequest{
            ApplicationName: "iure",
            CurrentApplicationVersionID: 902349,
            Output: shared.Output{
                DestinationSchema: shared.DestinationSchema{
                    RecordFormatType: shared.RecordFormatTypeEnumCsv,
                },
                KinesisFirehoseOutput: &shared.KinesisFirehoseOutput{
                    ResourceARN: "architecto",
                },
                KinesisStreamsOutput: &shared.KinesisStreamsOutput{
                    ResourceARN: "ipsa",
                },
                LambdaOutput: &shared.LambdaOutput{
                    ResourceARN: "reiciendis",
                },
                Name: "Shaun Osinski",
            },
        },
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("explicabo"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("nemo"),
        XAmzSignedHeaders: sdk.String("minima"),
        XAmzTarget: operations.AddApplicationOutputXAmzTargetEnumKinesisAnalytics20180523AddApplicationOutput,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddApplicationOutputResponse != nil {
        // handle response
    }
}
```

## AddApplicationReferenceDataSource

<p>Adds a reference data source to an existing SQL-based Kinesis Data Analytics application.</p> <p>Kinesis Data Analytics reads reference data (that is, an Amazon S3 object) and creates an in-application table within your application. In the request, you provide the source (S3 bucket name and object key name), name of the in-application table to create, and the necessary mapping information that describes how data in an Amazon S3 object maps to columns in the resulting in-application table.</p>

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
    res, err := s.SDK.AddApplicationReferenceDataSource(ctx, operations.AddApplicationReferenceDataSourceRequest{
        AddApplicationReferenceDataSourceRequest: shared.AddApplicationReferenceDataSourceRequest{
            ApplicationName: "excepturi",
            CurrentApplicationVersionID: 38425,
            ReferenceDataSource: shared.ReferenceDataSource{
                ReferenceSchema: shared.SourceSchema{
                    RecordColumns: []shared.RecordColumn{
                        shared.RecordColumn{
                            Mapping: sdk.String("culpa"),
                            Name: "Darrin Brakus",
                            SQLType: "culpa",
                        },
                        shared.RecordColumn{
                            Mapping: sdk.String("consequuntur"),
                            Name: "Shaun McCullough",
                            SQLType: "quam",
                        },
                    },
                    RecordEncoding: sdk.String("molestiae"),
                    RecordFormat: shared.RecordFormat{
                        MappingParameters: &shared.MappingParameters{
                            CSVMappingParameters: &shared.CSVMappingParameters{
                                RecordColumnDelimiter: "velit",
                                RecordRowDelimiter: "error",
                            },
                            JSONMappingParameters: &shared.JSONMappingParameters{
                                RecordRowPath: "quia",
                            },
                        },
                        RecordFormatType: shared.RecordFormatTypeEnumJSON,
                    },
                },
                S3ReferenceDataSource: &shared.S3ReferenceDataSource{
                    BucketARN: sdk.String("vitae"),
                    FileKey: sdk.String("laborum"),
                },
                TableName: "animi",
            },
        },
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("odit"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("sequi"),
        XAmzSecurityToken: sdk.String("tenetur"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("id"),
        XAmzTarget: operations.AddApplicationReferenceDataSourceXAmzTargetEnumKinesisAnalytics20180523AddApplicationReferenceDataSource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddApplicationReferenceDataSourceResponse != nil {
        // handle response
    }
}
```

## AddApplicationVpcConfiguration

<p>Adds a Virtual Private Cloud (VPC) configuration to the application. Applications can use VPCs to store and access resources securely.</p> <p>Note the following about VPC configurations for Kinesis Data Analytics applications:</p> <ul> <li> <p>VPC configurations are not supported for SQL applications.</p> </li> <li> <p>When a VPC is added to a Kinesis Data Analytics application, the application can no longer be accessed from the Internet directly. To enable Internet access to the application, add an Internet gateway to your VPC.</p> </li> </ul>

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
    res, err := s.SDK.AddApplicationVpcConfiguration(ctx, operations.AddApplicationVpcConfigurationRequest{
        AddApplicationVpcConfigurationRequest: shared.AddApplicationVpcConfigurationRequest{
            ApplicationName: "possimus",
            ConditionalToken: sdk.String("aut"),
            CurrentApplicationVersionID: sdk.Int64(97101),
            VpcConfiguration: shared.VpcConfiguration{
                SecurityGroupIds: []string{
                    "temporibus",
                    "laborum",
                    "quasi",
                },
                SubnetIds: []string{
                    "voluptatibus",
                    "vero",
                    "nihil",
                    "praesentium",
                },
            },
        },
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("cum"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("doloremque"),
        XAmzTarget: operations.AddApplicationVpcConfigurationXAmzTargetEnumKinesisAnalytics20180523AddApplicationVpcConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddApplicationVpcConfigurationResponse != nil {
        // handle response
    }
}
```

## CreateApplication

Creates a Kinesis Data Analytics application. For information about creating a Kinesis Data Analytics application, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/getting-started.html">Creating an Application</a>.

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
    res, err := s.SDK.CreateApplication(ctx, operations.CreateApplicationRequest{
        CreateApplicationRequest: shared.CreateApplicationRequest{
            ApplicationConfiguration: &shared.ApplicationConfiguration{
                ApplicationCodeConfiguration: &shared.ApplicationCodeConfiguration{
                    CodeContent: &shared.CodeContent{
                        S3ContentLocation: &shared.S3ContentLocation{
                            BucketARN: "reprehenderit",
                            FileKey: "ut",
                            ObjectVersion: sdk.String("maiores"),
                        },
                        TextContent: sdk.String("dicta"),
                        ZipFileContent: sdk.String("corporis"),
                    },
                    CodeContentType: shared.CodeContentTypeEnumPlaintext,
                },
                ApplicationSnapshotConfiguration: &shared.ApplicationSnapshotConfiguration{
                    SnapshotsEnabled: false,
                },
                EnvironmentProperties: &shared.EnvironmentProperties{
                    PropertyGroups: []shared.PropertyGroup{
                        shared.PropertyGroup{
                            PropertyGroupID: "dicta",
                            PropertyMap: map[string]string{
                                "enim": "accusamus",
                                "commodi": "repudiandae",
                                "quae": "ipsum",
                            },
                        },
                        shared.PropertyGroup{
                            PropertyGroupID: "quidem",
                            PropertyMap: map[string]string{
                                "excepturi": "pariatur",
                                "modi": "praesentium",
                                "rem": "voluptates",
                            },
                        },
                    },
                },
                FlinkApplicationConfiguration: &shared.FlinkApplicationConfiguration{
                    CheckpointConfiguration: &shared.CheckpointConfiguration{
                        CheckpointInterval: sdk.Int64(93940),
                        CheckpointingEnabled: sdk.Bool(false),
                        ConfigurationType: shared.ConfigurationTypeEnumCustom,
                        MinPauseBetweenCheckpoints: sdk.Int64(575947),
                    },
                    MonitoringConfiguration: &shared.MonitoringConfiguration{
                        ConfigurationType: shared.ConfigurationTypeEnumDefault,
                        LogLevel: shared.LogLevelEnumDebug.ToPointer(),
                        MetricsLevel: shared.MetricsLevelEnumTask.ToPointer(),
                    },
                    ParallelismConfiguration: &shared.ParallelismConfiguration{
                        AutoScalingEnabled: sdk.Bool(false),
                        ConfigurationType: shared.ConfigurationTypeEnumDefault,
                        Parallelism: sdk.Int64(9356),
                        ParallelismPerKPU: sdk.Int64(667411),
                    },
                },
                SQLApplicationConfiguration: &shared.SQLApplicationConfiguration{
                    Inputs: []shared.Input{
                        shared.Input{
                            InputParallelism: &shared.InputParallelism{
                                Count: sdk.Int64(131797),
                            },
                            InputProcessingConfiguration: &shared.InputProcessingConfiguration{
                                InputLambdaProcessor: shared.InputLambdaProcessor{
                                    ResourceARN: "deserunt",
                                },
                            },
                            InputSchema: shared.SourceSchema{
                                RecordColumns: []shared.RecordColumn{
                                    shared.RecordColumn{
                                        Mapping: sdk.String("quibusdam"),
                                        Name: "Pauline Deckow",
                                        SQLType: "quos",
                                    },
                                    shared.RecordColumn{
                                        Mapping: sdk.String("perferendis"),
                                        Name: "Mr. Nadine Hills",
                                        SQLType: "excepturi",
                                    },
                                    shared.RecordColumn{
                                        Mapping: sdk.String("tempora"),
                                        Name: "Geoffrey Green",
                                        SQLType: "non",
                                    },
                                },
                                RecordEncoding: sdk.String("eligendi"),
                                RecordFormat: shared.RecordFormat{
                                    MappingParameters: &shared.MappingParameters{
                                        CSVMappingParameters: &shared.CSVMappingParameters{
                                            RecordColumnDelimiter: "sint",
                                            RecordRowDelimiter: "aliquid",
                                        },
                                        JSONMappingParameters: &shared.JSONMappingParameters{
                                            RecordRowPath: "provident",
                                        },
                                    },
                                    RecordFormatType: shared.RecordFormatTypeEnumCsv,
                                },
                            },
                            KinesisFirehoseInput: &shared.KinesisFirehoseInput{
                                ResourceARN: "sint",
                            },
                            KinesisStreamsInput: &shared.KinesisStreamsInput{
                                ResourceARN: "officia",
                            },
                            NamePrefix: "dolor",
                        },
                        shared.Input{
                            InputParallelism: &shared.InputParallelism{
                                Count: sdk.Int64(891555),
                            },
                            InputProcessingConfiguration: &shared.InputProcessingConfiguration{
                                InputLambdaProcessor: shared.InputLambdaProcessor{
                                    ResourceARN: "a",
                                },
                            },
                            InputSchema: shared.SourceSchema{
                                RecordColumns: []shared.RecordColumn{
                                    shared.RecordColumn{
                                        Mapping: sdk.String("in"),
                                        Name: "Angel Wolff II",
                                        SQLType: "cumque",
                                    },
                                    shared.RecordColumn{
                                        Mapping: sdk.String("facere"),
                                        Name: "Beth Padberg",
                                        SQLType: "occaecati",
                                    },
                                    shared.RecordColumn{
                                        Mapping: sdk.String("enim"),
                                        Name: "Toby Pouros",
                                        SQLType: "id",
                                    },
                                },
                                RecordEncoding: sdk.String("blanditiis"),
                                RecordFormat: shared.RecordFormat{
                                    MappingParameters: &shared.MappingParameters{
                                        CSVMappingParameters: &shared.CSVMappingParameters{
                                            RecordColumnDelimiter: "deleniti",
                                            RecordRowDelimiter: "sapiente",
                                        },
                                        JSONMappingParameters: &shared.JSONMappingParameters{
                                            RecordRowPath: "amet",
                                        },
                                    },
                                    RecordFormatType: shared.RecordFormatTypeEnumCsv,
                                },
                            },
                            KinesisFirehoseInput: &shared.KinesisFirehoseInput{
                                ResourceARN: "nisi",
                            },
                            KinesisStreamsInput: &shared.KinesisStreamsInput{
                                ResourceARN: "vel",
                            },
                            NamePrefix: "natus",
                        },
                        shared.Input{
                            InputParallelism: &shared.InputParallelism{
                                Count: sdk.Int64(606393),
                            },
                            InputProcessingConfiguration: &shared.InputProcessingConfiguration{
                                InputLambdaProcessor: shared.InputLambdaProcessor{
                                    ResourceARN: "molestiae",
                                },
                            },
                            InputSchema: shared.SourceSchema{
                                RecordColumns: []shared.RecordColumn{
                                    shared.RecordColumn{
                                        Mapping: sdk.String("nihil"),
                                        Name: "Verna Olson",
                                        SQLType: "suscipit",
                                    },
                                },
                                RecordEncoding: sdk.String("natus"),
                                RecordFormat: shared.RecordFormat{
                                    MappingParameters: &shared.MappingParameters{
                                        CSVMappingParameters: &shared.CSVMappingParameters{
                                            RecordColumnDelimiter: "nobis",
                                            RecordRowDelimiter: "eum",
                                        },
                                        JSONMappingParameters: &shared.JSONMappingParameters{
                                            RecordRowPath: "vero",
                                        },
                                    },
                                    RecordFormatType: shared.RecordFormatTypeEnumJSON,
                                },
                            },
                            KinesisFirehoseInput: &shared.KinesisFirehoseInput{
                                ResourceARN: "architecto",
                            },
                            KinesisStreamsInput: &shared.KinesisStreamsInput{
                                ResourceARN: "magnam",
                            },
                            NamePrefix: "et",
                        },
                        shared.Input{
                            InputParallelism: &shared.InputParallelism{
                                Count: sdk.Int64(569965),
                            },
                            InputProcessingConfiguration: &shared.InputProcessingConfiguration{
                                InputLambdaProcessor: shared.InputLambdaProcessor{
                                    ResourceARN: "ullam",
                                },
                            },
                            InputSchema: shared.SourceSchema{
                                RecordColumns: []shared.RecordColumn{
                                    shared.RecordColumn{
                                        Mapping: sdk.String("quos"),
                                        Name: "Kenneth O'Hara",
                                        SQLType: "ad",
                                    },
                                    shared.RecordColumn{
                                        Mapping: sdk.String("eum"),
                                        Name: "Jana Connelly III",
                                        SQLType: "doloribus",
                                    },
                                    shared.RecordColumn{
                                        Mapping: sdk.String("debitis"),
                                        Name: "Jasmine Lind",
                                        SQLType: "architecto",
                                    },
                                },
                                RecordEncoding: sdk.String("architecto"),
                                RecordFormat: shared.RecordFormat{
                                    MappingParameters: &shared.MappingParameters{
                                        CSVMappingParameters: &shared.CSVMappingParameters{
                                            RecordColumnDelimiter: "repudiandae",
                                            RecordRowDelimiter: "ullam",
                                        },
                                        JSONMappingParameters: &shared.JSONMappingParameters{
                                            RecordRowPath: "expedita",
                                        },
                                    },
                                    RecordFormatType: shared.RecordFormatTypeEnumJSON,
                                },
                            },
                            KinesisFirehoseInput: &shared.KinesisFirehoseInput{
                                ResourceARN: "repellat",
                            },
                            KinesisStreamsInput: &shared.KinesisStreamsInput{
                                ResourceARN: "quibusdam",
                            },
                            NamePrefix: "sed",
                        },
                    },
                    Outputs: []shared.Output{
                        shared.Output{
                            DestinationSchema: shared.DestinationSchema{
                                RecordFormatType: shared.RecordFormatTypeEnumCsv,
                            },
                            KinesisFirehoseOutput: &shared.KinesisFirehoseOutput{
                                ResourceARN: "accusantium",
                            },
                            KinesisStreamsOutput: &shared.KinesisStreamsOutput{
                                ResourceARN: "consequuntur",
                            },
                            LambdaOutput: &shared.LambdaOutput{
                                ResourceARN: "praesentium",
                            },
                            Name: "Victor Casper",
                        },
                        shared.Output{
                            DestinationSchema: shared.DestinationSchema{
                                RecordFormatType: shared.RecordFormatTypeEnumCsv,
                            },
                            KinesisFirehoseOutput: &shared.KinesisFirehoseOutput{
                                ResourceARN: "maxime",
                            },
                            KinesisStreamsOutput: &shared.KinesisStreamsOutput{
                                ResourceARN: "ea",
                            },
                            LambdaOutput: &shared.LambdaOutput{
                                ResourceARN: "excepturi",
                            },
                            Name: "Dr. Rosemary Bartoletti",
                        },
                        shared.Output{
                            DestinationSchema: shared.DestinationSchema{
                                RecordFormatType: shared.RecordFormatTypeEnumJSON,
                            },
                            KinesisFirehoseOutput: &shared.KinesisFirehoseOutput{
                                ResourceARN: "voluptate",
                            },
                            KinesisStreamsOutput: &shared.KinesisStreamsOutput{
                                ResourceARN: "autem",
                            },
                            LambdaOutput: &shared.LambdaOutput{
                                ResourceARN: "nam",
                            },
                            Name: "Meredith Hickle PhD",
                        },
                        shared.Output{
                            DestinationSchema: shared.DestinationSchema{
                                RecordFormatType: shared.RecordFormatTypeEnumJSON,
                            },
                            KinesisFirehoseOutput: &shared.KinesisFirehoseOutput{
                                ResourceARN: "aut",
                            },
                            KinesisStreamsOutput: &shared.KinesisStreamsOutput{
                                ResourceARN: "cumque",
                            },
                            LambdaOutput: &shared.LambdaOutput{
                                ResourceARN: "corporis",
                            },
                            Name: "Pete Rohan",
                        },
                    },
                    ReferenceDataSources: []shared.ReferenceDataSource{
                        shared.ReferenceDataSource{
                            ReferenceSchema: shared.SourceSchema{
                                RecordColumns: []shared.RecordColumn{
                                    shared.RecordColumn{
                                        Mapping: sdk.String("eaque"),
                                        Name: "Mr. Robin Daugherty",
                                        SQLType: "quam",
                                    },
                                    shared.RecordColumn{
                                        Mapping: sdk.String("dolor"),
                                        Name: "Dean Welch",
                                        SQLType: "facilis",
                                    },
                                },
                                RecordEncoding: sdk.String("perspiciatis"),
                                RecordFormat: shared.RecordFormat{
                                    MappingParameters: &shared.MappingParameters{
                                        CSVMappingParameters: &shared.CSVMappingParameters{
                                            RecordColumnDelimiter: "voluptatem",
                                            RecordRowDelimiter: "porro",
                                        },
                                        JSONMappingParameters: &shared.JSONMappingParameters{
                                            RecordRowPath: "consequuntur",
                                        },
                                    },
                                    RecordFormatType: shared.RecordFormatTypeEnumCsv,
                                },
                            },
                            S3ReferenceDataSource: &shared.S3ReferenceDataSource{
                                BucketARN: sdk.String("error"),
                                FileKey: sdk.String("eaque"),
                            },
                            TableName: "occaecati",
                        },
                        shared.ReferenceDataSource{
                            ReferenceSchema: shared.SourceSchema{
                                RecordColumns: []shared.RecordColumn{
                                    shared.RecordColumn{
                                        Mapping: sdk.String("adipisci"),
                                        Name: "Merle Gleichner",
                                        SQLType: "deleniti",
                                    },
                                    shared.RecordColumn{
                                        Mapping: sdk.String("pariatur"),
                                        Name: "Loren Renner",
                                        SQLType: "quos",
                                    },
                                    shared.RecordColumn{
                                        Mapping: sdk.String("aliquid"),
                                        Name: "Dawn Fadel",
                                        SQLType: "hic",
                                    },
                                },
                                RecordEncoding: sdk.String("excepturi"),
                                RecordFormat: shared.RecordFormat{
                                    MappingParameters: &shared.MappingParameters{
                                        CSVMappingParameters: &shared.CSVMappingParameters{
                                            RecordColumnDelimiter: "cum",
                                            RecordRowDelimiter: "voluptate",
                                        },
                                        JSONMappingParameters: &shared.JSONMappingParameters{
                                            RecordRowPath: "dignissimos",
                                        },
                                    },
                                    RecordFormatType: shared.RecordFormatTypeEnumCsv,
                                },
                            },
                            S3ReferenceDataSource: &shared.S3ReferenceDataSource{
                                BucketARN: sdk.String("amet"),
                                FileKey: sdk.String("dolorum"),
                            },
                            TableName: "numquam",
                        },
                        shared.ReferenceDataSource{
                            ReferenceSchema: shared.SourceSchema{
                                RecordColumns: []shared.RecordColumn{
                                    shared.RecordColumn{
                                        Mapping: sdk.String("ipsa"),
                                        Name: "Vera Kuhlman",
                                        SQLType: "quidem",
                                    },
                                },
                                RecordEncoding: sdk.String("voluptatibus"),
                                RecordFormat: shared.RecordFormat{
                                    MappingParameters: &shared.MappingParameters{
                                        CSVMappingParameters: &shared.CSVMappingParameters{
                                            RecordColumnDelimiter: "voluptas",
                                            RecordRowDelimiter: "natus",
                                        },
                                        JSONMappingParameters: &shared.JSONMappingParameters{
                                            RecordRowPath: "eos",
                                        },
                                    },
                                    RecordFormatType: shared.RecordFormatTypeEnumCsv,
                                },
                            },
                            S3ReferenceDataSource: &shared.S3ReferenceDataSource{
                                BucketARN: sdk.String("sit"),
                                FileKey: sdk.String("fugiat"),
                            },
                            TableName: "ab",
                        },
                    },
                },
                VpcConfigurations: []shared.VpcConfiguration{
                    shared.VpcConfiguration{
                        SecurityGroupIds: []string{
                            "iusto",
                            "voluptate",
                            "dolorum",
                        },
                        SubnetIds: []string{
                            "omnis",
                            "necessitatibus",
                            "distinctio",
                        },
                    },
                    shared.VpcConfiguration{
                        SecurityGroupIds: []string{
                            "nihil",
                            "ipsum",
                            "voluptate",
                            "id",
                        },
                        SubnetIds: []string{
                            "eius",
                            "aspernatur",
                            "perferendis",
                            "amet",
                        },
                    },
                    shared.VpcConfiguration{
                        SecurityGroupIds: []string{
                            "accusamus",
                            "ad",
                            "saepe",
                            "suscipit",
                        },
                        SubnetIds: []string{
                            "provident",
                            "minima",
                            "repellendus",
                        },
                    },
                },
                ZeppelinApplicationConfiguration: &shared.ZeppelinApplicationConfiguration{
                    CatalogConfiguration: &shared.CatalogConfiguration{
                        GlueDataCatalogConfiguration: shared.GlueDataCatalogConfiguration{
                            DatabaseARN: "totam",
                        },
                    },
                    CustomArtifactsConfiguration: []shared.CustomArtifactConfiguration{
                        shared.CustomArtifactConfiguration{
                            ArtifactType: shared.ArtifactTypeEnumUdf,
                            MavenReference: &shared.MavenReference{
                                ArtifactID: "at",
                                GroupID: "quaerat",
                                Version: "tempora",
                            },
                            S3ContentLocation: &shared.S3ContentLocation{
                                BucketARN: "vel",
                                FileKey: "quod",
                                ObjectVersion: sdk.String("officiis"),
                            },
                        },
                        shared.CustomArtifactConfiguration{
                            ArtifactType: shared.ArtifactTypeEnumUdf,
                            MavenReference: &shared.MavenReference{
                                ArtifactID: "dolorum",
                                GroupID: "a",
                                Version: "esse",
                            },
                            S3ContentLocation: &shared.S3ContentLocation{
                                BucketARN: "harum",
                                FileKey: "iusto",
                                ObjectVersion: sdk.String("ipsum"),
                            },
                        },
                        shared.CustomArtifactConfiguration{
                            ArtifactType: shared.ArtifactTypeEnumDependencyJar,
                            MavenReference: &shared.MavenReference{
                                ArtifactID: "tenetur",
                                GroupID: "amet",
                                Version: "tempore",
                            },
                            S3ContentLocation: &shared.S3ContentLocation{
                                BucketARN: "accusamus",
                                FileKey: "numquam",
                                ObjectVersion: sdk.String("enim"),
                            },
                        },
                    },
                    DeployAsApplicationConfiguration: &shared.DeployAsApplicationConfiguration{
                        S3ContentLocation: shared.S3ContentBaseLocation{
                            BasePath: sdk.String("dolorem"),
                            BucketARN: "sapiente",
                        },
                    },
                    MonitoringConfiguration: &shared.ZeppelinMonitoringConfiguration{
                        LogLevel: shared.LogLevelEnumError,
                    },
                },
            },
            ApplicationDescription: sdk.String("nihil"),
            ApplicationMode: shared.ApplicationModeEnumStreaming.ToPointer(),
            ApplicationName: "expedita",
            CloudWatchLoggingOptions: []shared.CloudWatchLoggingOption{
                shared.CloudWatchLoggingOption{
                    LogStreamARN: "sed",
                },
            },
            RuntimeEnvironment: shared.RuntimeEnvironmentEnumZeppelinFlink10,
            ServiceExecutionRole: "libero",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "deserunt",
                    Value: sdk.String("quam"),
                },
                shared.Tag{
                    Key: "ipsum",
                    Value: sdk.String("incidunt"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("cupiditate"),
        XAmzCredential: sdk.String("maxime"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("soluta"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("laborum"),
        XAmzTarget: operations.CreateApplicationXAmzTargetEnumKinesisAnalytics20180523CreateApplication,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateApplicationResponse != nil {
        // handle response
    }
}
```

## CreateApplicationPresignedURL

<p>Creates and returns a URL that you can use to connect to an application's extension.</p> <p>The IAM role or user used to call this API defines the permissions to access the extension. After the presigned URL is created, no additional permission is required to access this URL. IAM authorization policies for this API are also enforced for every HTTP request that attempts to connect to the extension. </p> <p>You control the amount of time that the URL will be valid using the <code>SessionExpirationDurationInSeconds</code> parameter. If you do not provide this parameter, the returned URL is valid for twelve hours.</p> <note> <p>The URL that you get from a call to CreateApplicationPresignedUrl must be used within 3 minutes to be valid. If you first try to use the URL after the 3-minute limit expires, the service returns an HTTP 403 Forbidden error.</p> </note>

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
    res, err := s.SDK.CreateApplicationPresignedURL(ctx, operations.CreateApplicationPresignedURLRequest{
        CreateApplicationPresignedURLRequest: shared.CreateApplicationPresignedURLRequest{
            ApplicationName: "totam",
            SessionExpirationDurationInSeconds: sdk.Int64(276894),
            URLType: shared.URLTypeEnumFlinkDashboardURL,
        },
        XAmzAlgorithm: sdk.String("dolores"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("facilis"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("quam"),
        XAmzSignature: sdk.String("molestias"),
        XAmzSignedHeaders: sdk.String("temporibus"),
        XAmzTarget: operations.CreateApplicationPresignedURLXAmzTargetEnumKinesisAnalytics20180523CreateApplicationPresignedURL,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateApplicationPresignedURLResponse != nil {
        // handle response
    }
}
```

## CreateApplicationSnapshot

Creates a snapshot of the application's state data.

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
    res, err := s.SDK.CreateApplicationSnapshot(ctx, operations.CreateApplicationSnapshotRequest{
        CreateApplicationSnapshotRequest: shared.CreateApplicationSnapshotRequest{
            ApplicationName: "qui",
            SnapshotName: "neque",
        },
        XAmzAlgorithm: sdk.String("fugit"),
        XAmzContentSha256: sdk.String("magni"),
        XAmzCredential: sdk.String("odio"),
        XAmzDate: sdk.String("sunt"),
        XAmzSecurityToken: sdk.String("ullam"),
        XAmzSignature: sdk.String("nam"),
        XAmzSignedHeaders: sdk.String("hic"),
        XAmzTarget: operations.CreateApplicationSnapshotXAmzTargetEnumKinesisAnalytics20180523CreateApplicationSnapshot,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateApplicationSnapshotResponse != nil {
        // handle response
    }
}
```

## DeleteApplication

Deletes the specified application. Kinesis Data Analytics halts application execution and deletes the application.

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
    res, err := s.SDK.DeleteApplication(ctx, operations.DeleteApplicationRequest{
        DeleteApplicationRequest: shared.DeleteApplicationRequest{
            ApplicationName: "voluptatem",
            CreateTimestamp: types.MustTimeFromString("2020-10-05T00:59:28.911Z"),
        },
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("et"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("quos"),
        XAmzTarget: operations.DeleteApplicationXAmzTargetEnumKinesisAnalytics20180523DeleteApplication,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteApplicationResponse != nil {
        // handle response
    }
}
```

## DeleteApplicationCloudWatchLoggingOption

Deletes an Amazon CloudWatch log stream from an Kinesis Data Analytics application. 

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
    res, err := s.SDK.DeleteApplicationCloudWatchLoggingOption(ctx, operations.DeleteApplicationCloudWatchLoggingOptionRequest{
        DeleteApplicationCloudWatchLoggingOptionRequest: shared.DeleteApplicationCloudWatchLoggingOptionRequest{
            ApplicationName: "tempore",
            CloudWatchLoggingOptionID: "cupiditate",
            ConditionalToken: sdk.String("aperiam"),
            CurrentApplicationVersionID: sdk.Int64(961937),
        },
        XAmzAlgorithm: sdk.String("dolorem"),
        XAmzContentSha256: sdk.String("dolore"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("adipisci"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("quae"),
        XAmzTarget: operations.DeleteApplicationCloudWatchLoggingOptionXAmzTargetEnumKinesisAnalytics20180523DeleteApplicationCloudWatchLoggingOption,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteApplicationCloudWatchLoggingOptionResponse != nil {
        // handle response
    }
}
```

## DeleteApplicationInputProcessingConfiguration

Deletes an <a>InputProcessingConfiguration</a> from an input.

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
    res, err := s.SDK.DeleteApplicationInputProcessingConfiguration(ctx, operations.DeleteApplicationInputProcessingConfigurationRequest{
        DeleteApplicationInputProcessingConfigurationRequest: shared.DeleteApplicationInputProcessingConfigurationRequest{
            ApplicationName: "aut",
            CurrentApplicationVersionID: 555649,
            InputID: "itaque",
        },
        XAmzAlgorithm: sdk.String("consequatur"),
        XAmzContentSha256: sdk.String("est"),
        XAmzCredential: sdk.String("repellendus"),
        XAmzDate: sdk.String("porro"),
        XAmzSecurityToken: sdk.String("doloribus"),
        XAmzSignature: sdk.String("ut"),
        XAmzSignedHeaders: sdk.String("facilis"),
        XAmzTarget: operations.DeleteApplicationInputProcessingConfigurationXAmzTargetEnumKinesisAnalytics20180523DeleteApplicationInputProcessingConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteApplicationInputProcessingConfigurationResponse != nil {
        // handle response
    }
}
```

## DeleteApplicationOutput

Deletes the output destination configuration from your SQL-based Kinesis Data Analytics application's configuration. Kinesis Data Analytics will no longer write data from the corresponding in-application stream to the external output destination.

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
    res, err := s.SDK.DeleteApplicationOutput(ctx, operations.DeleteApplicationOutputRequest{
        DeleteApplicationOutputRequest: shared.DeleteApplicationOutputRequest{
            ApplicationName: "cupiditate",
            CurrentApplicationVersionID: 181631,
            OutputID: "quae",
        },
        XAmzAlgorithm: sdk.String("laudantium"),
        XAmzContentSha256: sdk.String("odio"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("quisquam"),
        XAmzSignature: sdk.String("vero"),
        XAmzSignedHeaders: sdk.String("omnis"),
        XAmzTarget: operations.DeleteApplicationOutputXAmzTargetEnumKinesisAnalytics20180523DeleteApplicationOutput,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteApplicationOutputResponse != nil {
        // handle response
    }
}
```

## DeleteApplicationReferenceDataSource

<p>Deletes a reference data source configuration from the specified SQL-based Kinesis Data Analytics application's configuration.</p> <p>If the application is running, Kinesis Data Analytics immediately removes the in-application table that you created using the <a>AddApplicationReferenceDataSource</a> operation. </p>

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
    res, err := s.SDK.DeleteApplicationReferenceDataSource(ctx, operations.DeleteApplicationReferenceDataSourceRequest{
        DeleteApplicationReferenceDataSourceRequest: shared.DeleteApplicationReferenceDataSourceRequest{
            ApplicationName: "quis",
            CurrentApplicationVersionID: 218403,
            ReferenceID: "delectus",
        },
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("consectetur"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("tenetur"),
        XAmzSecurityToken: sdk.String("dignissimos"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("distinctio"),
        XAmzTarget: operations.DeleteApplicationReferenceDataSourceXAmzTargetEnumKinesisAnalytics20180523DeleteApplicationReferenceDataSource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteApplicationReferenceDataSourceResponse != nil {
        // handle response
    }
}
```

## DeleteApplicationSnapshot

Deletes a snapshot of application state.

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
    res, err := s.SDK.DeleteApplicationSnapshot(ctx, operations.DeleteApplicationSnapshotRequest{
        DeleteApplicationSnapshotRequest: shared.DeleteApplicationSnapshotRequest{
            ApplicationName: "quod",
            SnapshotCreationTimestamp: types.MustTimeFromString("2022-05-15T21:16:33.535Z"),
            SnapshotName: "facilis",
        },
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("ducimus"),
        XAmzCredential: sdk.String("dolore"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("illum"),
        XAmzSignature: sdk.String("sequi"),
        XAmzSignedHeaders: sdk.String("natus"),
        XAmzTarget: operations.DeleteApplicationSnapshotXAmzTargetEnumKinesisAnalytics20180523DeleteApplicationSnapshot,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteApplicationSnapshotResponse != nil {
        // handle response
    }
}
```

## DeleteApplicationVpcConfiguration

Removes a VPC configuration from a Kinesis Data Analytics application.

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
    res, err := s.SDK.DeleteApplicationVpcConfiguration(ctx, operations.DeleteApplicationVpcConfigurationRequest{
        DeleteApplicationVpcConfigurationRequest: shared.DeleteApplicationVpcConfigurationRequest{
            ApplicationName: "impedit",
            ConditionalToken: sdk.String("aut"),
            CurrentApplicationVersionID: sdk.Int64(974259),
            VpcConfigurationID: "exercitationem",
        },
        XAmzAlgorithm: sdk.String("nulla"),
        XAmzContentSha256: sdk.String("fugit"),
        XAmzCredential: sdk.String("porro"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("doloribus"),
        XAmzSignature: sdk.String("iusto"),
        XAmzSignedHeaders: sdk.String("eligendi"),
        XAmzTarget: operations.DeleteApplicationVpcConfigurationXAmzTargetEnumKinesisAnalytics20180523DeleteApplicationVpcConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteApplicationVpcConfigurationResponse != nil {
        // handle response
    }
}
```

## DescribeApplication

<p>Returns information about a specific Kinesis Data Analytics application.</p> <p>If you want to retrieve a list of all applications in your account, use the <a>ListApplications</a> operation.</p>

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
    res, err := s.SDK.DescribeApplication(ctx, operations.DescribeApplicationRequest{
        DescribeApplicationRequest: shared.DescribeApplicationRequest{
            ApplicationName: "ducimus",
            IncludeAdditionalDetails: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("alias"),
        XAmzContentSha256: sdk.String("officia"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("vel"),
        XAmzTarget: operations.DescribeApplicationXAmzTargetEnumKinesisAnalytics20180523DescribeApplication,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeApplicationResponse != nil {
        // handle response
    }
}
```

## DescribeApplicationSnapshot

Returns information about a snapshot of application state data.

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
    res, err := s.SDK.DescribeApplicationSnapshot(ctx, operations.DescribeApplicationSnapshotRequest{
        DescribeApplicationSnapshotRequest: shared.DescribeApplicationSnapshotRequest{
            ApplicationName: "possimus",
            SnapshotName: "magnam",
        },
        XAmzAlgorithm: sdk.String("ratione"),
        XAmzContentSha256: sdk.String("ex"),
        XAmzCredential: sdk.String("laudantium"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("quasi"),
        XAmzTarget: operations.DescribeApplicationSnapshotXAmzTargetEnumKinesisAnalytics20180523DescribeApplicationSnapshot,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeApplicationSnapshotResponse != nil {
        // handle response
    }
}
```

## DescribeApplicationVersion

<p>Provides a detailed description of a specified version of the application. To see a list of all the versions of an application, invoke the <a>ListApplicationVersions</a> operation.</p> <note> <p>This operation is supported only for Amazon Kinesis Data Analytics for Apache Flink.</p> </note>

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
    res, err := s.SDK.DescribeApplicationVersion(ctx, operations.DescribeApplicationVersionRequest{
        DescribeApplicationVersionRequest: shared.DescribeApplicationVersionRequest{
            ApplicationName: "ex",
            ApplicationVersionID: 862192,
        },
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("nostrum"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("quisquam"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("ea"),
        XAmzTarget: operations.DescribeApplicationVersionXAmzTargetEnumKinesisAnalytics20180523DescribeApplicationVersion,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeApplicationVersionResponse != nil {
        // handle response
    }
}
```

## DiscoverInputSchema

<p>Infers a schema for a SQL-based Kinesis Data Analytics application by evaluating sample records on the specified streaming source (Kinesis data stream or Kinesis Data Firehose delivery stream) or Amazon S3 object. In the response, the operation returns the inferred schema and also the sample records that the operation used to infer the schema.</p> <p> You can use the inferred schema when configuring a streaming source for your application. When you create an application using the Kinesis Data Analytics console, the console uses this operation to infer a schema and show it in the console user interface. </p>

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
    res, err := s.SDK.DiscoverInputSchema(ctx, operations.DiscoverInputSchemaRequest{
        DiscoverInputSchemaRequest: shared.DiscoverInputSchemaRequest{
            InputProcessingConfiguration: &shared.InputProcessingConfiguration{
                InputLambdaProcessor: shared.InputLambdaProcessor{
                    ResourceARN: "impedit",
                },
            },
            InputStartingPositionConfiguration: &shared.InputStartingPositionConfiguration{
                InputStartingPosition: shared.InputStartingPositionEnumTrimHorizon.ToPointer(),
            },
            ResourceARN: sdk.String("veniam"),
            S3Configuration: &shared.S3Configuration{
                BucketARN: "aliquid",
                FileKey: "inventore",
            },
            ServiceExecutionRole: "magnam",
        },
        XAmzAlgorithm: sdk.String("ea"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("consectetur"),
        XAmzDate: sdk.String("recusandae"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("minima"),
        XAmzSignedHeaders: sdk.String("eaque"),
        XAmzTarget: operations.DiscoverInputSchemaXAmzTargetEnumKinesisAnalytics20180523DiscoverInputSchema,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DiscoverInputSchemaResponse != nil {
        // handle response
    }
}
```

## ListApplicationSnapshots

Lists information about the current application snapshots.

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
    res, err := s.SDK.ListApplicationSnapshots(ctx, operations.ListApplicationSnapshotsRequest{
        ListApplicationSnapshotsRequest: shared.ListApplicationSnapshotsRequest{
            ApplicationName: "a",
            Limit: sdk.Int64(725595),
            NextToken: sdk.String("aut"),
        },
        XAmzAlgorithm: sdk.String("aut"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("impedit"),
        XAmzDate: sdk.String("aliquam"),
        XAmzSecurityToken: sdk.String("fugit"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("inventore"),
        XAmzTarget: operations.ListApplicationSnapshotsXAmzTargetEnumKinesisAnalytics20180523ListApplicationSnapshots,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListApplicationSnapshotsResponse != nil {
        // handle response
    }
}
```

## ListApplicationVersions

<p>Lists all the versions for the specified application, including versions that were rolled back. The response also includes a summary of the configuration associated with each version.</p> <p>To get the complete description of a specific application version, invoke the <a>DescribeApplicationVersion</a> operation.</p> <note> <p>This operation is supported only for Amazon Kinesis Data Analytics for Apache Flink.</p> </note>

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
    res, err := s.SDK.ListApplicationVersions(ctx, operations.ListApplicationVersionsRequest{
        ListApplicationVersionsRequest: shared.ListApplicationVersionsRequest{
            ApplicationName: "non",
            Limit: sdk.Int64(89603),
            NextToken: sdk.String("dolorum"),
        },
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("placeat"),
        XAmzCredential: sdk.String("velit"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("autem"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("quas"),
        XAmzTarget: operations.ListApplicationVersionsXAmzTargetEnumKinesisAnalytics20180523ListApplicationVersions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListApplicationVersionsResponse != nil {
        // handle response
    }
}
```

## ListApplications

<p>Returns a list of Kinesis Data Analytics applications in your account. For each application, the response includes the application name, Amazon Resource Name (ARN), and status. </p> <p>If you want detailed information about a specific application, use <a>DescribeApplication</a>.</p>

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
    res, err := s.SDK.ListApplications(ctx, operations.ListApplicationsRequest{
        ListApplicationsRequest: shared.ListApplicationsRequest{
            Limit: sdk.Int64(829603),
            NextToken: sdk.String("nulla"),
        },
        XAmzAlgorithm: sdk.String("voluptas"),
        XAmzContentSha256: sdk.String("libero"),
        XAmzCredential: sdk.String("quasi"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("numquam"),
        XAmzSignature: sdk.String("explicabo"),
        XAmzSignedHeaders: sdk.String("provident"),
        XAmzTarget: operations.ListApplicationsXAmzTargetEnumKinesisAnalytics20180523ListApplications,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListApplicationsResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Retrieves the list of key-value tags assigned to the application. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/how-tagging.html">Using Tagging</a>.

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
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        ListTagsForResourceRequest: shared.ListTagsForResourceRequest{
            ResourceARN: "ipsa",
        },
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("odio"),
        XAmzDate: sdk.String("eius"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("rem"),
        XAmzTarget: operations.ListTagsForResourceXAmzTargetEnumKinesisAnalytics20180523ListTagsForResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## RollbackApplication

<p>Reverts the application to the previous running version. You can roll back an application if you suspect it is stuck in a transient status. </p> <p>You can roll back an application only if it is in the <code>UPDATING</code> or <code>AUTOSCALING</code> status.</p> <p>When you rollback an application, it loads state data from the last successful snapshot. If the application has no snapshots, Kinesis Data Analytics rejects the rollback request.</p> <p>This action is not supported for Kinesis Data Analytics for SQL applications.</p>

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
    res, err := s.SDK.RollbackApplication(ctx, operations.RollbackApplicationRequest{
        RollbackApplicationRequest: shared.RollbackApplicationRequest{
            ApplicationName: "fuga",
            CurrentApplicationVersionID: 442015,
        },
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("fugiat"),
        XAmzCredential: sdk.String("ut"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("assumenda"),
        XAmzSignedHeaders: sdk.String("eos"),
        XAmzTarget: operations.RollbackApplicationXAmzTargetEnumKinesisAnalytics20180523RollbackApplication,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RollbackApplicationResponse != nil {
        // handle response
    }
}
```

## StartApplication

Starts the specified Kinesis Data Analytics application. After creating an application, you must exclusively call this operation to start your application.

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
    res, err := s.SDK.StartApplication(ctx, operations.StartApplicationRequest{
        StartApplicationRequest: shared.StartApplicationRequest{
            ApplicationName: "praesentium",
            RunConfiguration: &shared.RunConfiguration{
                ApplicationRestoreConfiguration: &shared.ApplicationRestoreConfiguration{
                    ApplicationRestoreType: shared.ApplicationRestoreTypeEnumRestoreFromCustomSnapshot,
                    SnapshotName: sdk.String("veritatis"),
                },
                FlinkRunConfiguration: &shared.FlinkRunConfiguration{
                    AllowNonRestoredState: sdk.Bool(false),
                },
                SQLRunConfigurations: []shared.SQLRunConfiguration{
                    shared.SQLRunConfiguration{
                        InputID: "id",
                        InputStartingPositionConfiguration: shared.InputStartingPositionConfiguration{
                            InputStartingPosition: shared.InputStartingPositionEnumLastStoppedPoint.ToPointer(),
                        },
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("neque"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("illum"),
        XAmzDate: sdk.String("quo"),
        XAmzSecurityToken: sdk.String("fuga"),
        XAmzSignature: sdk.String("eius"),
        XAmzSignedHeaders: sdk.String("eos"),
        XAmzTarget: operations.StartApplicationXAmzTargetEnumKinesisAnalytics20180523StartApplication,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartApplicationResponse != nil {
        // handle response
    }
}
```

## StopApplication

<p>Stops the application from processing data. You can stop an application only if it is in the running status, unless you set the <code>Force</code> parameter to <code>true</code>.</p> <p>You can use the <a>DescribeApplication</a> operation to find the application status. </p> <p>Kinesis Data Analytics takes a snapshot when the application is stopped, unless <code>Force</code> is set to <code>true</code>.</p>

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
    res, err := s.SDK.StopApplication(ctx, operations.StopApplicationRequest{
        StopApplicationRequest: shared.StopApplicationRequest{
            ApplicationName: "voluptas",
            Force: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("ab"),
        XAmzContentSha256: sdk.String("cupiditate"),
        XAmzCredential: sdk.String("consequatur"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("debitis"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
        XAmzTarget: operations.StopApplicationXAmzTargetEnumKinesisAnalytics20180523StopApplication,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopApplicationResponse != nil {
        // handle response
    }
}
```

## TagResource

Adds one or more key-value tags to a Kinesis Data Analytics application. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/how-tagging.html">Using Tagging</a>.

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
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        TagResourceRequest: shared.TagResourceRequest{
            ResourceARN: "sequi",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "esse",
                    Value: sdk.String("recusandae"),
                },
                shared.Tag{
                    Key: "aperiam",
                    Value: sdk.String("distinctio"),
                },
                shared.Tag{
                    Key: "quod",
                    Value: sdk.String("dignissimos"),
                },
                shared.Tag{
                    Key: "inventore",
                    Value: sdk.String("nihil"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("aliquam"),
        XAmzDate: sdk.String("odio"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("commodi"),
        XAmzSignedHeaders: sdk.String("sapiente"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumKinesisAnalytics20180523TagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## UntagResource

Removes one or more tags from a Kinesis Data Analytics application. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/how-tagging.html">Using Tagging</a>.

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
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        UntagResourceRequest: shared.UntagResourceRequest{
            ResourceARN: "dolores",
            TagKeys: []string{
                "molestiae",
                "accusantium",
                "porro",
            },
        },
        XAmzAlgorithm: sdk.String("eum"),
        XAmzContentSha256: sdk.String("quas"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("consequuntur"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("fuga"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumKinesisAnalytics20180523UntagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateApplication

<p>Updates an existing Kinesis Data Analytics application. Using this operation, you can update application code, input configuration, and output configuration. </p> <p>Kinesis Data Analytics updates the <code>ApplicationVersionId</code> each time you update your application. </p> <note> <p>You cannot update the <code>RuntimeEnvironment</code> of an existing application. If you need to update an application's <code>RuntimeEnvironment</code>, you must delete the application and create it again.</p> </note>

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
    res, err := s.SDK.UpdateApplication(ctx, operations.UpdateApplicationRequest{
        UpdateApplicationRequest: shared.UpdateApplicationRequest{
            ApplicationConfigurationUpdate: &shared.ApplicationConfigurationUpdate{
                ApplicationCodeConfigurationUpdate: &shared.ApplicationCodeConfigurationUpdate{
                    CodeContentTypeUpdate: shared.CodeContentTypeEnumZipfile.ToPointer(),
                    CodeContentUpdate: &shared.CodeContentUpdate{
                        S3ContentLocationUpdate: &shared.S3ContentLocationUpdate{
                            BucketARNUpdate: sdk.String("incidunt"),
                            FileKeyUpdate: sdk.String("atque"),
                            ObjectVersionUpdate: sdk.String("explicabo"),
                        },
                        TextContentUpdate: sdk.String("minima"),
                        ZipFileContentUpdate: sdk.String("nisi"),
                    },
                },
                ApplicationSnapshotConfigurationUpdate: &shared.ApplicationSnapshotConfigurationUpdate{
                    SnapshotsEnabledUpdate: false,
                },
                EnvironmentPropertyUpdates: &shared.EnvironmentPropertyUpdates{
                    PropertyGroups: []shared.PropertyGroup{
                        shared.PropertyGroup{
                            PropertyGroupID: "sapiente",
                            PropertyMap: map[string]string{
                                "ratione": "explicabo",
                            },
                        },
                    },
                },
                FlinkApplicationConfigurationUpdate: &shared.FlinkApplicationConfigurationUpdate{
                    CheckpointConfigurationUpdate: &shared.CheckpointConfigurationUpdate{
                        CheckpointIntervalUpdate: sdk.Int64(903984),
                        CheckpointingEnabledUpdate: sdk.Bool(false),
                        ConfigurationTypeUpdate: shared.ConfigurationTypeEnumCustom.ToPointer(),
                        MinPauseBetweenCheckpointsUpdate: sdk.Int64(543806),
                    },
                    MonitoringConfigurationUpdate: &shared.MonitoringConfigurationUpdate{
                        ConfigurationTypeUpdate: shared.ConfigurationTypeEnumDefault.ToPointer(),
                        LogLevelUpdate: shared.LogLevelEnumWarn.ToPointer(),
                        MetricsLevelUpdate: shared.MetricsLevelEnumParallelism.ToPointer(),
                    },
                    ParallelismConfigurationUpdate: &shared.ParallelismConfigurationUpdate{
                        AutoScalingEnabledUpdate: sdk.Bool(false),
                        ConfigurationTypeUpdate: shared.ConfigurationTypeEnumCustom.ToPointer(),
                        ParallelismPerKPUUpdate: sdk.Int64(82971),
                        ParallelismUpdate: sdk.Int64(458604),
                    },
                },
                SQLApplicationConfigurationUpdate: &shared.SQLApplicationConfigurationUpdate{
                    InputUpdates: []shared.InputUpdate{
                        shared.InputUpdate{
                            InputID: "nam",
                            InputParallelismUpdate: &shared.InputParallelismUpdate{
                                CountUpdate: 877131,
                            },
                            InputProcessingConfigurationUpdate: &shared.InputProcessingConfigurationUpdate{
                                InputLambdaProcessorUpdate: shared.InputLambdaProcessorUpdate{
                                    ResourceARNUpdate: "aliquid",
                                },
                            },
                            InputSchemaUpdate: &shared.InputSchemaUpdate{
                                RecordColumnUpdates: []shared.RecordColumn{
                                    shared.RecordColumn{
                                        Mapping: sdk.String("saepe"),
                                        Name: "Opal Kozey",
                                        SQLType: "minima",
                                    },
                                },
                                RecordEncodingUpdate: sdk.String("distinctio"),
                                RecordFormatUpdate: &shared.RecordFormat{
                                    MappingParameters: &shared.MappingParameters{
                                        CSVMappingParameters: &shared.CSVMappingParameters{
                                            RecordColumnDelimiter: "eligendi",
                                            RecordRowDelimiter: "sit",
                                        },
                                        JSONMappingParameters: &shared.JSONMappingParameters{
                                            RecordRowPath: "culpa",
                                        },
                                    },
                                    RecordFormatType: shared.RecordFormatTypeEnumCsv,
                                },
                            },
                            KinesisFirehoseInputUpdate: &shared.KinesisFirehoseInputUpdate{
                                ResourceARNUpdate: "adipisci",
                            },
                            KinesisStreamsInputUpdate: &shared.KinesisStreamsInputUpdate{
                                ResourceARNUpdate: "cumque",
                            },
                            NamePrefixUpdate: sdk.String("consequuntur"),
                        },
                        shared.InputUpdate{
                            InputID: "consequatur",
                            InputParallelismUpdate: &shared.InputParallelismUpdate{
                                CountUpdate: 796392,
                            },
                            InputProcessingConfigurationUpdate: &shared.InputProcessingConfigurationUpdate{
                                InputLambdaProcessorUpdate: shared.InputLambdaProcessorUpdate{
                                    ResourceARNUpdate: "quaerat",
                                },
                            },
                            InputSchemaUpdate: &shared.InputSchemaUpdate{
                                RecordColumnUpdates: []shared.RecordColumn{
                                    shared.RecordColumn{
                                        Mapping: sdk.String("consectetur"),
                                        Name: "Mattie McLaughlin",
                                        SQLType: "quas",
                                    },
                                    shared.RecordColumn{
                                        Mapping: sdk.String("esse"),
                                        Name: "Lorene Mueller",
                                        SQLType: "possimus",
                                    },
                                    shared.RecordColumn{
                                        Mapping: sdk.String("quia"),
                                        Name: "Mr. Marlon Schultz V",
                                        SQLType: "culpa",
                                    },
                                    shared.RecordColumn{
                                        Mapping: sdk.String("aliquid"),
                                        Name: "Scott Wehner",
                                        SQLType: "eius",
                                    },
                                },
                                RecordEncodingUpdate: sdk.String("libero"),
                                RecordFormatUpdate: &shared.RecordFormat{
                                    MappingParameters: &shared.MappingParameters{
                                        CSVMappingParameters: &shared.CSVMappingParameters{
                                            RecordColumnDelimiter: "illum",
                                            RecordRowDelimiter: "soluta",
                                        },
                                        JSONMappingParameters: &shared.JSONMappingParameters{
                                            RecordRowPath: "accusantium",
                                        },
                                    },
                                    RecordFormatType: shared.RecordFormatTypeEnumJSON,
                                },
                            },
                            KinesisFirehoseInputUpdate: &shared.KinesisFirehoseInputUpdate{
                                ResourceARNUpdate: "sapiente",
                            },
                            KinesisStreamsInputUpdate: &shared.KinesisStreamsInputUpdate{
                                ResourceARNUpdate: "dicta",
                            },
                            NamePrefixUpdate: sdk.String("ullam"),
                        },
                        shared.InputUpdate{
                            InputID: "reprehenderit",
                            InputParallelismUpdate: &shared.InputParallelismUpdate{
                                CountUpdate: 356707,
                            },
                            InputProcessingConfigurationUpdate: &shared.InputProcessingConfigurationUpdate{
                                InputLambdaProcessorUpdate: shared.InputLambdaProcessorUpdate{
                                    ResourceARNUpdate: "nisi",
                                },
                            },
                            InputSchemaUpdate: &shared.InputSchemaUpdate{
                                RecordColumnUpdates: []shared.RecordColumn{
                                    shared.RecordColumn{
                                        Mapping: sdk.String("voluptatum"),
                                        Name: "Rosemarie Jacobs",
                                        SQLType: "dolorum",
                                    },
                                },
                                RecordEncodingUpdate: sdk.String("architecto"),
                                RecordFormatUpdate: &shared.RecordFormat{
                                    MappingParameters: &shared.MappingParameters{
                                        CSVMappingParameters: &shared.CSVMappingParameters{
                                            RecordColumnDelimiter: "omnis",
                                            RecordRowDelimiter: "tenetur",
                                        },
                                        JSONMappingParameters: &shared.JSONMappingParameters{
                                            RecordRowPath: "quasi",
                                        },
                                    },
                                    RecordFormatType: shared.RecordFormatTypeEnumCsv,
                                },
                            },
                            KinesisFirehoseInputUpdate: &shared.KinesisFirehoseInputUpdate{
                                ResourceARNUpdate: "et",
                            },
                            KinesisStreamsInputUpdate: &shared.KinesisStreamsInputUpdate{
                                ResourceARNUpdate: "voluptate",
                            },
                            NamePrefixUpdate: sdk.String("ipsa"),
                        },
                        shared.InputUpdate{
                            InputID: "minima",
                            InputParallelismUpdate: &shared.InputParallelismUpdate{
                                CountUpdate: 86532,
                            },
                            InputProcessingConfigurationUpdate: &shared.InputProcessingConfigurationUpdate{
                                InputLambdaProcessorUpdate: shared.InputLambdaProcessorUpdate{
                                    ResourceARNUpdate: "consectetur",
                                },
                            },
                            InputSchemaUpdate: &shared.InputSchemaUpdate{
                                RecordColumnUpdates: []shared.RecordColumn{
                                    shared.RecordColumn{
                                        Mapping: sdk.String("iste"),
                                        Name: "Ms. Kenneth Ledner",
                                        SQLType: "mollitia",
                                    },
                                },
                                RecordEncodingUpdate: sdk.String("ab"),
                                RecordFormatUpdate: &shared.RecordFormat{
                                    MappingParameters: &shared.MappingParameters{
                                        CSVMappingParameters: &shared.CSVMappingParameters{
                                            RecordColumnDelimiter: "corrupti",
                                            RecordRowDelimiter: "non",
                                        },
                                        JSONMappingParameters: &shared.JSONMappingParameters{
                                            RecordRowPath: "voluptatem",
                                        },
                                    },
                                    RecordFormatType: shared.RecordFormatTypeEnumJSON,
                                },
                            },
                            KinesisFirehoseInputUpdate: &shared.KinesisFirehoseInputUpdate{
                                ResourceARNUpdate: "occaecati",
                            },
                            KinesisStreamsInputUpdate: &shared.KinesisStreamsInputUpdate{
                                ResourceARNUpdate: "numquam",
                            },
                            NamePrefixUpdate: sdk.String("impedit"),
                        },
                    },
                    OutputUpdates: []shared.OutputUpdate{
                        shared.OutputUpdate{
                            DestinationSchemaUpdate: &shared.DestinationSchema{
                                RecordFormatType: shared.RecordFormatTypeEnumJSON,
                            },
                            KinesisFirehoseOutputUpdate: &shared.KinesisFirehoseOutputUpdate{
                                ResourceARNUpdate: "aut",
                            },
                            KinesisStreamsOutputUpdate: &shared.KinesisStreamsOutputUpdate{
                                ResourceARNUpdate: "dignissimos",
                            },
                            LambdaOutputUpdate: &shared.LambdaOutputUpdate{
                                ResourceARNUpdate: "dicta",
                            },
                            NameUpdate: sdk.String("maiores"),
                            OutputID: "natus",
                        },
                    },
                    ReferenceDataSourceUpdates: []shared.ReferenceDataSourceUpdate{
                        shared.ReferenceDataSourceUpdate{
                            ReferenceID: "voluptatibus",
                            ReferenceSchemaUpdate: &shared.SourceSchema{
                                RecordColumns: []shared.RecordColumn{
                                    shared.RecordColumn{
                                        Mapping: sdk.String("asperiores"),
                                        Name: "Eileen Hagenes",
                                        SQLType: "officia",
                                    },
                                    shared.RecordColumn{
                                        Mapping: sdk.String("maxime"),
                                        Name: "Blanche Yundt II",
                                        SQLType: "porro",
                                    },
                                },
                                RecordEncoding: sdk.String("quod"),
                                RecordFormat: shared.RecordFormat{
                                    MappingParameters: &shared.MappingParameters{
                                        CSVMappingParameters: &shared.CSVMappingParameters{
                                            RecordColumnDelimiter: "labore",
                                            RecordRowDelimiter: "ab",
                                        },
                                        JSONMappingParameters: &shared.JSONMappingParameters{
                                            RecordRowPath: "adipisci",
                                        },
                                    },
                                    RecordFormatType: shared.RecordFormatTypeEnumCsv,
                                },
                            },
                            S3ReferenceDataSourceUpdate: &shared.S3ReferenceDataSourceUpdate{
                                BucketARNUpdate: sdk.String("id"),
                                FileKeyUpdate: sdk.String("suscipit"),
                            },
                            TableNameUpdate: sdk.String("velit"),
                        },
                    },
                },
                VpcConfigurationUpdates: []shared.VpcConfigurationUpdate{
                    shared.VpcConfigurationUpdate{
                        SecurityGroupIDUpdates: []string{
                            "recusandae",
                            "totam",
                            "fugiat",
                        },
                        SubnetIDUpdates: []string{
                            "ducimus",
                            "quos",
                        },
                        VpcConfigurationID: "vel",
                    },
                    shared.VpcConfigurationUpdate{
                        SecurityGroupIDUpdates: []string{
                            "possimus",
                            "facilis",
                        },
                        SubnetIDUpdates: []string{
                            "commodi",
                            "in",
                            "corporis",
                        },
                        VpcConfigurationID: "reiciendis",
                    },
                    shared.VpcConfigurationUpdate{
                        SecurityGroupIDUpdates: []string{
                            "nemo",
                            "recusandae",
                            "aliquid",
                            "aperiam",
                        },
                        SubnetIDUpdates: []string{
                            "consectetur",
                            "in",
                            "exercitationem",
                        },
                        VpcConfigurationID: "earum",
                    },
                },
                ZeppelinApplicationConfigurationUpdate: &shared.ZeppelinApplicationConfigurationUpdate{
                    CatalogConfigurationUpdate: &shared.CatalogConfigurationUpdate{
                        GlueDataCatalogConfigurationUpdate: shared.GlueDataCatalogConfigurationUpdate{
                            DatabaseARNUpdate: "facere",
                        },
                    },
                    CustomArtifactsConfigurationUpdate: []shared.CustomArtifactConfiguration{
                        shared.CustomArtifactConfiguration{
                            ArtifactType: shared.ArtifactTypeEnumDependencyJar,
                            MavenReference: &shared.MavenReference{
                                ArtifactID: "suscipit",
                                GroupID: "reiciendis",
                                Version: "quidem",
                            },
                            S3ContentLocation: &shared.S3ContentLocation{
                                BucketARN: "saepe",
                                FileKey: "necessitatibus",
                                ObjectVersion: sdk.String("dolore"),
                            },
                        },
                        shared.CustomArtifactConfiguration{
                            ArtifactType: shared.ArtifactTypeEnumUdf,
                            MavenReference: &shared.MavenReference{
                                ArtifactID: "asperiores",
                                GroupID: "adipisci",
                                Version: "non",
                            },
                            S3ContentLocation: &shared.S3ContentLocation{
                                BucketARN: "amet",
                                FileKey: "beatae",
                                ObjectVersion: sdk.String("dignissimos"),
                            },
                        },
                    },
                    DeployAsApplicationConfigurationUpdate: &shared.DeployAsApplicationConfigurationUpdate{
                        S3ContentLocationUpdate: &shared.S3ContentBaseLocationUpdate{
                            BasePathUpdate: sdk.String("a"),
                            BucketARNUpdate: sdk.String("debitis"),
                        },
                    },
                    MonitoringConfigurationUpdate: &shared.ZeppelinMonitoringConfigurationUpdate{
                        LogLevelUpdate: shared.LogLevelEnumInfo,
                    },
                },
            },
            ApplicationName: "corporis",
            CloudWatchLoggingOptionUpdates: []shared.CloudWatchLoggingOptionUpdate{
                shared.CloudWatchLoggingOptionUpdate{
                    CloudWatchLoggingOptionID: "laboriosam",
                    LogStreamARNUpdate: sdk.String("ipsa"),
                },
                shared.CloudWatchLoggingOptionUpdate{
                    CloudWatchLoggingOptionID: "voluptates",
                    LogStreamARNUpdate: sdk.String("libero"),
                },
                shared.CloudWatchLoggingOptionUpdate{
                    CloudWatchLoggingOptionID: "vitae",
                    LogStreamARNUpdate: sdk.String("accusamus"),
                },
            },
            ConditionalToken: sdk.String("similique"),
            CurrentApplicationVersionID: sdk.Int64(272437),
            RunConfigurationUpdate: &shared.RunConfigurationUpdate{
                ApplicationRestoreConfiguration: &shared.ApplicationRestoreConfiguration{
                    ApplicationRestoreType: shared.ApplicationRestoreTypeEnumSkipRestoreFromSnapshot,
                    SnapshotName: sdk.String("voluptas"),
                },
                FlinkRunConfiguration: &shared.FlinkRunConfiguration{
                    AllowNonRestoredState: sdk.Bool(false),
                },
            },
            ServiceExecutionRoleUpdate: sdk.String("voluptas"),
        },
        XAmzAlgorithm: sdk.String("voluptas"),
        XAmzContentSha256: sdk.String("minima"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("adipisci"),
        XAmzSignature: sdk.String("minus"),
        XAmzSignedHeaders: sdk.String("dolores"),
        XAmzTarget: operations.UpdateApplicationXAmzTargetEnumKinesisAnalytics20180523UpdateApplication,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateApplicationResponse != nil {
        // handle response
    }
}
```

## UpdateApplicationMaintenanceConfiguration

<p>Updates the maintenance configuration of the Kinesis Data Analytics application. </p> <p>You can invoke this operation on an application that is in one of the two following states: <code>READY</code> or <code>RUNNING</code>. If you invoke it when the application is in a state other than these two states, it throws a <code>ResourceInUseException</code>. The service makes use of the updated configuration the next time it schedules maintenance for the application. If you invoke this operation after the service schedules maintenance, the service will apply the configuration update the next time it schedules maintenance for the application. This means that you might not see the maintenance configuration update applied to the maintenance process that follows a successful invocation of this operation, but to the following maintenance process instead.</p> <p>To see the current maintenance configuration of your application, invoke the <a>DescribeApplication</a> operation.</p> <p>For information about application maintenance, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/maintenance.html">Kinesis Data Analytics for Apache Flink Maintenance</a>.</p> <note> <p>This operation is supported only for Amazon Kinesis Data Analytics for Apache Flink.</p> </note>

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
    res, err := s.SDK.UpdateApplicationMaintenanceConfiguration(ctx, operations.UpdateApplicationMaintenanceConfigurationRequest{
        UpdateApplicationMaintenanceConfigurationRequest: shared.UpdateApplicationMaintenanceConfigurationRequest{
            ApplicationMaintenanceConfigurationUpdate: shared.ApplicationMaintenanceConfigurationUpdate{
                ApplicationMaintenanceWindowStartTimeUpdate: "blanditiis",
            },
            ApplicationName: "in",
        },
        XAmzAlgorithm: sdk.String("dolore"),
        XAmzContentSha256: sdk.String("aliquam"),
        XAmzCredential: sdk.String("officiis"),
        XAmzDate: sdk.String("temporibus"),
        XAmzSecurityToken: sdk.String("ullam"),
        XAmzSignature: sdk.String("adipisci"),
        XAmzSignedHeaders: sdk.String("cum"),
        XAmzTarget: operations.UpdateApplicationMaintenanceConfigurationXAmzTargetEnumKinesisAnalytics20180523UpdateApplicationMaintenanceConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateApplicationMaintenanceConfigurationResponse != nil {
        // handle response
    }
}
```
