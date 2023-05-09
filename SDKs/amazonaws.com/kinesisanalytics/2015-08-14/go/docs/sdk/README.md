# SDK

## Overview

<fullname>Amazon Kinesis Analytics</fullname> <p> <b>Overview</b> </p> <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>This is the <i>Amazon Kinesis Analytics v1 API Reference</i>. The Amazon Kinesis Analytics Developer Guide provides additional information. </p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/kinesisanalytics/>
### Available Operations

* [AddApplicationCloudWatchLoggingOption](#addapplicationcloudwatchloggingoption) - <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Adds a CloudWatch log stream to monitor application configuration errors. For more information about using CloudWatch log streams with Amazon Kinesis Analytics applications, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/cloudwatch-logs.html">Working with Amazon CloudWatch Logs</a>.</p>
* [AddApplicationInput](#addapplicationinput) - <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p> Adds a streaming source to your Amazon Kinesis application. For conceptual information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>. </p> <p>You can add a streaming source either when you create an application or you can use this operation to add a streaming source after you create an application. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_CreateApplication.html">CreateApplication</a>.</p> <p>Any configuration update, including adding a streaming source using this operation, results in a new version of the application. You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to find the current application version. </p> <p>This operation requires permissions to perform the <code>kinesisanalytics:AddApplicationInput</code> action.</p>
* [AddApplicationInputProcessingConfiguration](#addapplicationinputprocessingconfiguration) - <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Adds an <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html">InputProcessingConfiguration</a> to an application. An input processor preprocesses records on the input stream before the application's SQL code executes. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a>.</p>
* [AddApplicationOutput](#addapplicationoutput) - <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Adds an external destination to your Amazon Kinesis Analytics application.</p> <p>If you want Amazon Kinesis Analytics to deliver data from an in-application stream within your application to an external destination (such as an Amazon Kinesis stream, an Amazon Kinesis Firehose delivery stream, or an AWS Lambda function), you add the relevant configuration to your application using this operation. You can configure one or more outputs for your application. Each output configuration maps an in-application stream and an external destination.</p> <p> You can use one of the output configurations to deliver data from your in-application error stream to an external destination so that you can analyze the errors. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html">Understanding Application Output (Destination)</a>. </p> <p> Any configuration update, including adding a streaming source using this operation, results in a new version of the application. You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to find the current application version.</p> <p>For the limits on the number of application inputs and outputs you can configure, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/limits.html">Limits</a>.</p> <p>This operation requires permissions to perform the <code>kinesisanalytics:AddApplicationOutput</code> action.</p>
* [AddApplicationReferenceDataSource](#addapplicationreferencedatasource) - <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Adds a reference data source to an existing application.</p> <p>Amazon Kinesis Analytics reads reference data (that is, an Amazon S3 object) and creates an in-application table within your application. In the request, you provide the source (S3 bucket name and object key name), name of the in-application table to create, and the necessary mapping information that describes how data in Amazon S3 object maps to columns in the resulting in-application table.</p> <p> For conceptual information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>. For the limits on data sources you can add to your application, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/limits.html">Limits</a>. </p> <p> This operation requires permissions to perform the <code>kinesisanalytics:AddApplicationOutput</code> action. </p>
* [CreateApplication](#createapplication) - <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p> Creates an Amazon Kinesis Analytics application. You can configure each application with one streaming source as input, application code to process the input, and up to three destinations where you want Amazon Kinesis Analytics to write the output data from your application. For an overview, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works.html">How it Works</a>. </p> <p>In the input configuration, you map the streaming source to an in-application stream, which you can think of as a constantly updating table. In the mapping, you must provide a schema for the in-application stream and map each data column in the in-application stream to a data element in the streaming source.</p> <p>Your application code is one or more SQL statements that read input data, transform it, and generate output. Your application code can create one or more SQL artifacts like SQL streams or pumps.</p> <p>In the output configuration, you can configure the application to write data from in-application streams created in your applications to up to three destinations.</p> <p> To read data from your source stream or write data to destination streams, Amazon Kinesis Analytics needs your permissions. You grant these permissions by creating IAM roles. This operation requires permissions to perform the <code>kinesisanalytics:CreateApplication</code> action. </p> <p> For introductory exercises to create an Amazon Kinesis Analytics application, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/getting-started.html">Getting Started</a>. </p>
* [DeleteApplication](#deleteapplication) - <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Deletes the specified application. Amazon Kinesis Analytics halts application execution and deletes the application, including any application artifacts (such as in-application streams, reference table, and application code).</p> <p>This operation requires permissions to perform the <code>kinesisanalytics:DeleteApplication</code> action.</p>
* [DeleteApplicationCloudWatchLoggingOption](#deleteapplicationcloudwatchloggingoption) - <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Deletes a CloudWatch log stream from an application. For more information about using CloudWatch log streams with Amazon Kinesis Analytics applications, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/cloudwatch-logs.html">Working with Amazon CloudWatch Logs</a>.</p>
* [DeleteApplicationInputProcessingConfiguration](#deleteapplicationinputprocessingconfiguration) - <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Deletes an <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html">InputProcessingConfiguration</a> from an input.</p>
* [DeleteApplicationOutput](#deleteapplicationoutput) - <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Deletes output destination configuration from your application configuration. Amazon Kinesis Analytics will no longer write data from the corresponding in-application stream to the external output destination.</p> <p>This operation requires permissions to perform the <code>kinesisanalytics:DeleteApplicationOutput</code> action.</p>
* [DeleteApplicationReferenceDataSource](#deleteapplicationreferencedatasource) - <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Deletes a reference data source configuration from the specified application configuration.</p> <p>If the application is running, Amazon Kinesis Analytics immediately removes the in-application table that you created using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_AddApplicationReferenceDataSource.html">AddApplicationReferenceDataSource</a> operation. </p> <p>This operation requires permissions to perform the <code>kinesisanalytics.DeleteApplicationReferenceDataSource</code> action.</p>
* [DescribeApplication](#describeapplication) - <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Returns information about a specific Amazon Kinesis Analytics application.</p> <p>If you want to retrieve a list of all applications in your account, use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_ListApplications.html">ListApplications</a> operation.</p> <p>This operation requires permissions to perform the <code>kinesisanalytics:DescribeApplication</code> action. You can use <code>DescribeApplication</code> to get the current application versionId, which you need to call other operations such as <code>Update</code>. </p>
* [DiscoverInputSchema](#discoverinputschema) - <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Infers a schema by evaluating sample records on the specified streaming source (Amazon Kinesis stream or Amazon Kinesis Firehose delivery stream) or S3 object. In the response, the operation returns the inferred schema and also the sample records that the operation used to infer the schema.</p> <p> You can use the inferred schema when configuring a streaming source for your application. For conceptual information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>. Note that when you create an application using the Amazon Kinesis Analytics console, the console uses this operation to infer a schema and show it in the console user interface. </p> <p> This operation requires permissions to perform the <code>kinesisanalytics:DiscoverInputSchema</code> action. </p>
* [ListApplications](#listapplications) - <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Returns a list of Amazon Kinesis Analytics applications in your account. For each application, the response includes the application name, Amazon Resource Name (ARN), and status. If the response returns the <code>HasMoreApplications</code> value as true, you can send another request by adding the <code>ExclusiveStartApplicationName</code> in the request body, and set the value of this to the last application name from the previous response. </p> <p>If you want detailed information about a specific application, use <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a>.</p> <p>This operation requires permissions to perform the <code>kinesisanalytics:ListApplications</code> action.</p>
* [ListTagsForResource](#listtagsforresource) - Retrieves the list of key-value tags assigned to the application. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-tagging.html">Using Tagging</a>.
* [StartApplication](#startapplication) - <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Starts the specified Amazon Kinesis Analytics application. After creating an application, you must exclusively call this operation to start your application.</p> <p>After the application starts, it begins consuming the input data, processes it, and writes the output to the configured destination.</p> <p> The application status must be <code>READY</code> for you to start an application. You can get the application status in the console or using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation.</p> <p>After you start the application, you can stop the application from processing the input by calling the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_StopApplication.html">StopApplication</a> operation.</p> <p>This operation requires permissions to perform the <code>kinesisanalytics:StartApplication</code> action.</p>
* [StopApplication](#stopapplication) - <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Stops the application from processing input data. You can stop an application only if it is in the running state. You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to find the application state. After the application is stopped, Amazon Kinesis Analytics stops reading data from the input, the application stops processing data, and there is no output written to the destination. </p> <p>This operation requires permissions to perform the <code>kinesisanalytics:StopApplication</code> action.</p>
* [TagResource](#tagresource) - Adds one or more key-value tags to a Kinesis Analytics application. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-tagging.html">Using Tagging</a>.
* [UntagResource](#untagresource) - Removes one or more tags from a Kinesis Analytics application. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-tagging.html">Using Tagging</a>.
* [UpdateApplication](#updateapplication) - <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Updates an existing Amazon Kinesis Analytics application. Using this API, you can update application code, input configuration, and output configuration. </p> <p>Note that Amazon Kinesis Analytics updates the <code>CurrentApplicationVersionId</code> each time you update your application. </p> <p>This operation requires permission for the <code>kinesisanalytics:UpdateApplication</code> action.</p>

## AddApplicationCloudWatchLoggingOption

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Adds a CloudWatch log stream to monitor application configuration errors. For more information about using CloudWatch log streams with Amazon Kinesis Analytics applications, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/cloudwatch-logs.html">Working with Amazon CloudWatch Logs</a>.</p>

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
                RoleARN: "magnam",
            },
            CurrentApplicationVersionID: 891773,
        },
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("minus"),
        XAmzSignedHeaders: sdk.String("placeat"),
        XAmzTarget: operations.AddApplicationCloudWatchLoggingOptionXAmzTargetEnumKinesisAnalytics20150814AddApplicationCloudWatchLoggingOption,
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

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p> Adds a streaming source to your Amazon Kinesis application. For conceptual information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>. </p> <p>You can add a streaming source either when you create an application or you can use this operation to add a streaming source after you create an application. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_CreateApplication.html">CreateApplication</a>.</p> <p>Any configuration update, including adding a streaming source using this operation, results in a new version of the application. You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to find the current application version. </p> <p>This operation requires permissions to perform the <code>kinesisanalytics:AddApplicationInput</code> action.</p>

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
                        RoleARN: "recusandae",
                    },
                },
                InputSchema: shared.SourceSchema{
                    RecordColumns: []shared.RecordColumn{
                        shared.RecordColumn{
                            Mapping: sdk.String("ab"),
                            Name: "Mrs. Marie O'Connell",
                            SQLType: "sapiente",
                        },
                        shared.RecordColumn{
                            Mapping: sdk.String("quo"),
                            Name: "Teri Strosin",
                            SQLType: "quod",
                        },
                        shared.RecordColumn{
                            Mapping: sdk.String("quod"),
                            Name: "Deanna Sauer MD",
                            SQLType: "officia",
                        },
                        shared.RecordColumn{
                            Mapping: sdk.String("occaecati"),
                            Name: "Cassandra Welch",
                            SQLType: "beatae",
                        },
                    },
                    RecordEncoding: sdk.String("commodi"),
                    RecordFormat: shared.RecordFormat{
                        MappingParameters: &shared.MappingParameters{
                            CSVMappingParameters: &shared.CSVMappingParameters{
                                RecordColumnDelimiter: "molestiae",
                                RecordRowDelimiter: "modi",
                            },
                            JSONMappingParameters: &shared.JSONMappingParameters{
                                RecordRowPath: "qui",
                            },
                        },
                        RecordFormatType: shared.RecordFormatTypeEnumCsv,
                    },
                },
                KinesisFirehoseInput: &shared.KinesisFirehoseInput{
                    ResourceARN: "cum",
                    RoleARN: "esse",
                },
                KinesisStreamsInput: &shared.KinesisStreamsInput{
                    ResourceARN: "ipsum",
                    RoleARN: "excepturi",
                },
                NamePrefix: "aspernatur",
            },
        },
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("ad"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("sed"),
        XAmzSecurityToken: sdk.String("iste"),
        XAmzSignature: sdk.String("dolor"),
        XAmzSignedHeaders: sdk.String("natus"),
        XAmzTarget: operations.AddApplicationInputXAmzTargetEnumKinesisAnalytics20150814AddApplicationInput,
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

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Adds an <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html">InputProcessingConfiguration</a> to an application. An input processor preprocesses records on the input stream before the application's SQL code executes. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a>.</p>

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
            ApplicationName: "laboriosam",
            CurrentApplicationVersionID: 943749,
            InputID: "saepe",
            InputProcessingConfiguration: shared.InputProcessingConfiguration{
                InputLambdaProcessor: shared.InputLambdaProcessor{
                    ResourceARN: "fuga",
                    RoleARN: "in",
                },
            },
        },
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("iste"),
        XAmzCredential: sdk.String("iure"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("ipsa"),
        XAmzTarget: operations.AddApplicationInputProcessingConfigurationXAmzTargetEnumKinesisAnalytics20150814AddApplicationInputProcessingConfiguration,
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

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Adds an external destination to your Amazon Kinesis Analytics application.</p> <p>If you want Amazon Kinesis Analytics to deliver data from an in-application stream within your application to an external destination (such as an Amazon Kinesis stream, an Amazon Kinesis Firehose delivery stream, or an AWS Lambda function), you add the relevant configuration to your application using this operation. You can configure one or more outputs for your application. Each output configuration maps an in-application stream and an external destination.</p> <p> You can use one of the output configurations to deliver data from your in-application error stream to an external destination so that you can analyze the errors. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html">Understanding Application Output (Destination)</a>. </p> <p> Any configuration update, including adding a streaming source using this operation, results in a new version of the application. You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to find the current application version.</p> <p>For the limits on the number of application inputs and outputs you can configure, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/limits.html">Limits</a>.</p> <p>This operation requires permissions to perform the <code>kinesisanalytics:AddApplicationOutput</code> action.</p>

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
            ApplicationName: "reiciendis",
            CurrentApplicationVersionID: 666767,
            Output: shared.Output{
                DestinationSchema: shared.DestinationSchema{
                    RecordFormatType: shared.RecordFormatTypeEnumCsv,
                },
                KinesisFirehoseOutput: &shared.KinesisFirehoseOutput{
                    ResourceARN: "laborum",
                    RoleARN: "dolores",
                },
                KinesisStreamsOutput: &shared.KinesisStreamsOutput{
                    ResourceARN: "dolorem",
                    RoleARN: "corporis",
                },
                LambdaOutput: &shared.LambdaOutput{
                    ResourceARN: "explicabo",
                    RoleARN: "nobis",
                },
                Name: "Guadalupe Hickle",
            },
        },
        XAmzAlgorithm: sdk.String("accusantium"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("culpa"),
        XAmzDate: sdk.String("doloribus"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("mollitia"),
        XAmzTarget: operations.AddApplicationOutputXAmzTargetEnumKinesisAnalytics20150814AddApplicationOutput,
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

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Adds a reference data source to an existing application.</p> <p>Amazon Kinesis Analytics reads reference data (that is, an Amazon S3 object) and creates an in-application table within your application. In the request, you provide the source (S3 bucket name and object key name), name of the in-application table to create, and the necessary mapping information that describes how data in Amazon S3 object maps to columns in the resulting in-application table.</p> <p> For conceptual information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>. For the limits on data sources you can add to your application, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/limits.html">Limits</a>. </p> <p> This operation requires permissions to perform the <code>kinesisanalytics:AddApplicationOutput</code> action. </p>

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
            ApplicationName: "dolorem",
            CurrentApplicationVersionID: 635059,
            ReferenceDataSource: shared.ReferenceDataSource{
                ReferenceSchema: shared.SourceSchema{
                    RecordColumns: []shared.RecordColumn{
                        shared.RecordColumn{
                            Mapping: sdk.String("repellat"),
                            Name: "Tracy Fritsch",
                            SQLType: "molestiae",
                        },
                    },
                    RecordEncoding: sdk.String("velit"),
                    RecordFormat: shared.RecordFormat{
                        MappingParameters: &shared.MappingParameters{
                            CSVMappingParameters: &shared.CSVMappingParameters{
                                RecordColumnDelimiter: "error",
                                RecordRowDelimiter: "quia",
                            },
                            JSONMappingParameters: &shared.JSONMappingParameters{
                                RecordRowPath: "quis",
                            },
                        },
                        RecordFormatType: shared.RecordFormatTypeEnumJSON,
                    },
                },
                S3ReferenceDataSource: &shared.S3ReferenceDataSource{
                    BucketARN: "laborum",
                    FileKey: "animi",
                    ReferenceRoleARN: "enim",
                },
                TableName: "odit",
            },
        },
        XAmzAlgorithm: sdk.String("quo"),
        XAmzContentSha256: sdk.String("sequi"),
        XAmzCredential: sdk.String("tenetur"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("id"),
        XAmzSignature: sdk.String("possimus"),
        XAmzSignedHeaders: sdk.String("aut"),
        XAmzTarget: operations.AddApplicationReferenceDataSourceXAmzTargetEnumKinesisAnalytics20150814AddApplicationReferenceDataSource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddApplicationReferenceDataSourceResponse != nil {
        // handle response
    }
}
```

## CreateApplication

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p> Creates an Amazon Kinesis Analytics application. You can configure each application with one streaming source as input, application code to process the input, and up to three destinations where you want Amazon Kinesis Analytics to write the output data from your application. For an overview, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works.html">How it Works</a>. </p> <p>In the input configuration, you map the streaming source to an in-application stream, which you can think of as a constantly updating table. In the mapping, you must provide a schema for the in-application stream and map each data column in the in-application stream to a data element in the streaming source.</p> <p>Your application code is one or more SQL statements that read input data, transform it, and generate output. Your application code can create one or more SQL artifacts like SQL streams or pumps.</p> <p>In the output configuration, you can configure the application to write data from in-application streams created in your applications to up to three destinations.</p> <p> To read data from your source stream or write data to destination streams, Amazon Kinesis Analytics needs your permissions. You grant these permissions by creating IAM roles. This operation requires permissions to perform the <code>kinesisanalytics:CreateApplication</code> action. </p> <p> For introductory exercises to create an Amazon Kinesis Analytics application, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/getting-started.html">Getting Started</a>. </p>

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
            ApplicationCode: sdk.String("quasi"),
            ApplicationDescription: sdk.String("error"),
            ApplicationName: "temporibus",
            CloudWatchLoggingOptions: []shared.CloudWatchLoggingOption{
                shared.CloudWatchLoggingOption{
                    LogStreamARN: "quasi",
                    RoleARN: "reiciendis",
                },
                shared.CloudWatchLoggingOption{
                    LogStreamARN: "voluptatibus",
                    RoleARN: "vero",
                },
                shared.CloudWatchLoggingOption{
                    LogStreamARN: "nihil",
                    RoleARN: "praesentium",
                },
            },
            Inputs: []shared.Input{
                shared.Input{
                    InputParallelism: &shared.InputParallelism{
                        Count: sdk.Int64(55714),
                    },
                    InputProcessingConfiguration: &shared.InputProcessingConfiguration{
                        InputLambdaProcessor: shared.InputLambdaProcessor{
                            ResourceARN: "omnis",
                            RoleARN: "voluptate",
                        },
                    },
                    InputSchema: shared.SourceSchema{
                        RecordColumns: []shared.RecordColumn{
                            shared.RecordColumn{
                                Mapping: sdk.String("perferendis"),
                                Name: "Bessie Grady II",
                                SQLType: "dolore",
                            },
                            shared.RecordColumn{
                                Mapping: sdk.String("iusto"),
                                Name: "Maryann Hamill",
                                SQLType: "repudiandae",
                            },
                            shared.RecordColumn{
                                Mapping: sdk.String("quae"),
                                Name: "Alison Mann",
                                SQLType: "modi",
                            },
                        },
                        RecordEncoding: sdk.String("praesentium"),
                        RecordFormat: shared.RecordFormat{
                            MappingParameters: &shared.MappingParameters{
                                CSVMappingParameters: &shared.CSVMappingParameters{
                                    RecordColumnDelimiter: "rem",
                                    RecordRowDelimiter: "voluptates",
                                },
                                JSONMappingParameters: &shared.JSONMappingParameters{
                                    RecordRowPath: "quasi",
                                },
                            },
                            RecordFormatType: shared.RecordFormatTypeEnumCsv,
                        },
                    },
                    KinesisFirehoseInput: &shared.KinesisFirehoseInput{
                        ResourceARN: "sint",
                        RoleARN: "veritatis",
                    },
                    KinesisStreamsInput: &shared.KinesisStreamsInput{
                        ResourceARN: "itaque",
                        RoleARN: "incidunt",
                    },
                    NamePrefix: "enim",
                },
                shared.Input{
                    InputParallelism: &shared.InputParallelism{
                        Count: sdk.Int64(9356),
                    },
                    InputProcessingConfiguration: &shared.InputProcessingConfiguration{
                        InputLambdaProcessor: shared.InputLambdaProcessor{
                            ResourceARN: "est",
                            RoleARN: "quibusdam",
                        },
                    },
                    InputSchema: shared.SourceSchema{
                        RecordColumns: []shared.RecordColumn{
                            shared.RecordColumn{
                                Mapping: sdk.String("deserunt"),
                                Name: "Marty Green",
                                SQLType: "aliquid",
                            },
                        },
                        RecordEncoding: sdk.String("cupiditate"),
                        RecordFormat: shared.RecordFormat{
                            MappingParameters: &shared.MappingParameters{
                                CSVMappingParameters: &shared.CSVMappingParameters{
                                    RecordColumnDelimiter: "quos",
                                    RecordRowDelimiter: "perferendis",
                                },
                                JSONMappingParameters: &shared.JSONMappingParameters{
                                    RecordRowPath: "magni",
                                },
                            },
                            RecordFormatType: shared.RecordFormatTypeEnumCsv,
                        },
                    },
                    KinesisFirehoseInput: &shared.KinesisFirehoseInput{
                        ResourceARN: "ipsam",
                        RoleARN: "alias",
                    },
                    KinesisStreamsInput: &shared.KinesisStreamsInput{
                        ResourceARN: "fugit",
                        RoleARN: "dolorum",
                    },
                    NamePrefix: "excepturi",
                },
                shared.Input{
                    InputParallelism: &shared.InputParallelism{
                        Count: sdk.Int64(270008),
                    },
                    InputProcessingConfiguration: &shared.InputProcessingConfiguration{
                        InputLambdaProcessor: shared.InputLambdaProcessor{
                            ResourceARN: "facilis",
                            RoleARN: "tempore",
                        },
                    },
                    InputSchema: shared.SourceSchema{
                        RecordColumns: []shared.RecordColumn{
                            shared.RecordColumn{
                                Mapping: sdk.String("delectus"),
                                Name: "Ethel Roob",
                                SQLType: "provident",
                            },
                            shared.RecordColumn{
                                Mapping: sdk.String("necessitatibus"),
                                Name: "Luke Fadel",
                                SQLType: "dolorum",
                            },
                        },
                        RecordEncoding: sdk.String("in"),
                        RecordFormat: shared.RecordFormat{
                            MappingParameters: &shared.MappingParameters{
                                CSVMappingParameters: &shared.CSVMappingParameters{
                                    RecordColumnDelimiter: "in",
                                    RecordRowDelimiter: "illum",
                                },
                                JSONMappingParameters: &shared.JSONMappingParameters{
                                    RecordRowPath: "maiores",
                                },
                            },
                            RecordFormatType: shared.RecordFormatTypeEnumCsv,
                        },
                    },
                    KinesisFirehoseInput: &shared.KinesisFirehoseInput{
                        ResourceARN: "dicta",
                        RoleARN: "magnam",
                    },
                    KinesisStreamsInput: &shared.KinesisStreamsInput{
                        ResourceARN: "cumque",
                        RoleARN: "facere",
                    },
                    NamePrefix: "ea",
                },
                shared.Input{
                    InputParallelism: &shared.InputParallelism{
                        Count: sdk.Int64(396506),
                    },
                    InputProcessingConfiguration: &shared.InputProcessingConfiguration{
                        InputLambdaProcessor: shared.InputLambdaProcessor{
                            ResourceARN: "laborum",
                            RoleARN: "accusamus",
                        },
                    },
                    InputSchema: shared.SourceSchema{
                        RecordColumns: []shared.RecordColumn{
                            shared.RecordColumn{
                                Mapping: sdk.String("occaecati"),
                                Name: "Sophia Wintheiser",
                                SQLType: "nam",
                            },
                        },
                        RecordEncoding: sdk.String("id"),
                        RecordFormat: shared.RecordFormat{
                            MappingParameters: &shared.MappingParameters{
                                CSVMappingParameters: &shared.CSVMappingParameters{
                                    RecordColumnDelimiter: "blanditiis",
                                    RecordRowDelimiter: "deleniti",
                                },
                                JSONMappingParameters: &shared.JSONMappingParameters{
                                    RecordRowPath: "sapiente",
                                },
                            },
                            RecordFormatType: shared.RecordFormatTypeEnumJSON,
                        },
                    },
                    KinesisFirehoseInput: &shared.KinesisFirehoseInput{
                        ResourceARN: "deserunt",
                        RoleARN: "nisi",
                    },
                    KinesisStreamsInput: &shared.KinesisStreamsInput{
                        ResourceARN: "vel",
                        RoleARN: "natus",
                    },
                    NamePrefix: "omnis",
                },
            },
            Outputs: []shared.Output{
                shared.Output{
                    DestinationSchema: shared.DestinationSchema{
                        RecordFormatType: shared.RecordFormatTypeEnumJSON,
                    },
                    KinesisFirehoseOutput: &shared.KinesisFirehoseOutput{
                        ResourceARN: "nihil",
                        RoleARN: "magnam",
                    },
                    KinesisStreamsOutput: &shared.KinesisStreamsOutput{
                        ResourceARN: "distinctio",
                        RoleARN: "id",
                    },
                    LambdaOutput: &shared.LambdaOutput{
                        ResourceARN: "labore",
                        RoleARN: "labore",
                    },
                    Name: "Ada Rohan",
                },
                shared.Output{
                    DestinationSchema: shared.DestinationSchema{
                        RecordFormatType: shared.RecordFormatTypeEnumJSON,
                    },
                    KinesisFirehoseOutput: &shared.KinesisFirehoseOutput{
                        ResourceARN: "architecto",
                        RoleARN: "magnam",
                    },
                    KinesisStreamsOutput: &shared.KinesisStreamsOutput{
                        ResourceARN: "et",
                        RoleARN: "excepturi",
                    },
                    LambdaOutput: &shared.LambdaOutput{
                        ResourceARN: "ullam",
                        RoleARN: "provident",
                    },
                    Name: "Kirk Bartoletti",
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "ad",
                    Value: sdk.String("eum"),
                },
                shared.Tag{
                    Key: "dolor",
                    Value: sdk.String("necessitatibus"),
                },
                shared.Tag{
                    Key: "odit",
                    Value: sdk.String("nemo"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("doloribus"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("eius"),
        XAmzSignature: sdk.String("maxime"),
        XAmzSignedHeaders: sdk.String("deleniti"),
        XAmzTarget: operations.CreateApplicationXAmzTargetEnumKinesisAnalytics20150814CreateApplication,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateApplicationResponse != nil {
        // handle response
    }
}
```

## DeleteApplication

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Deletes the specified application. Amazon Kinesis Analytics halts application execution and deletes the application, including any application artifacts (such as in-application streams, reference table, and application code).</p> <p>This operation requires permissions to perform the <code>kinesisanalytics:DeleteApplication</code> action.</p>

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
            ApplicationName: "facilis",
            CreateTimestamp: types.MustTimeFromString("2022-11-25T10:00:44.006Z"),
        },
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("repudiandae"),
        XAmzCredential: sdk.String("ullam"),
        XAmzDate: sdk.String("expedita"),
        XAmzSecurityToken: sdk.String("nihil"),
        XAmzSignature: sdk.String("repellat"),
        XAmzSignedHeaders: sdk.String("quibusdam"),
        XAmzTarget: operations.DeleteApplicationXAmzTargetEnumKinesisAnalytics20150814DeleteApplication,
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

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Deletes a CloudWatch log stream from an application. For more information about using CloudWatch log streams with Amazon Kinesis Analytics applications, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/cloudwatch-logs.html">Working with Amazon CloudWatch Logs</a>.</p>

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
            ApplicationName: "sed",
            CloudWatchLoggingOptionID: "saepe",
            CurrentApplicationVersionID: 868126,
        },
        XAmzAlgorithm: sdk.String("accusantium"),
        XAmzContentSha256: sdk.String("consequuntur"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("magni"),
        XAmzSignature: sdk.String("sunt"),
        XAmzSignedHeaders: sdk.String("quo"),
        XAmzTarget: operations.DeleteApplicationCloudWatchLoggingOptionXAmzTargetEnumKinesisAnalytics20150814DeleteApplicationCloudWatchLoggingOption,
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

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Deletes an <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html">InputProcessingConfiguration</a> from an input.</p>

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
            ApplicationName: "illum",
            CurrentApplicationVersionID: 864934,
            InputID: "maxime",
        },
        XAmzAlgorithm: sdk.String("ea"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("odit"),
        XAmzDate: sdk.String("ea"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("ab"),
        XAmzSignedHeaders: sdk.String("maiores"),
        XAmzTarget: operations.DeleteApplicationInputProcessingConfigurationXAmzTargetEnumKinesisAnalytics20150814DeleteApplicationInputProcessingConfiguration,
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

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Deletes output destination configuration from your application configuration. Amazon Kinesis Analytics will no longer write data from the corresponding in-application stream to the external output destination.</p> <p>This operation requires permissions to perform the <code>kinesisanalytics:DeleteApplicationOutput</code> action.</p>

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
            ApplicationName: "quidem",
            CurrentApplicationVersionID: 373291,
            OutputID: "voluptate",
        },
        XAmzAlgorithm: sdk.String("autem"),
        XAmzContentSha256: sdk.String("nam"),
        XAmzCredential: sdk.String("eaque"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("perferendis"),
        XAmzTarget: operations.DeleteApplicationOutputXAmzTargetEnumKinesisAnalytics20150814DeleteApplicationOutput,
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

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Deletes a reference data source configuration from the specified application configuration.</p> <p>If the application is running, Amazon Kinesis Analytics immediately removes the in-application table that you created using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_AddApplicationReferenceDataSource.html">AddApplicationReferenceDataSource</a> operation. </p> <p>This operation requires permissions to perform the <code>kinesisanalytics.DeleteApplicationReferenceDataSource</code> action.</p>

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
            ApplicationName: "fugiat",
            CurrentApplicationVersionID: 230742,
            ReferenceID: "aut",
        },
        XAmzAlgorithm: sdk.String("cumque"),
        XAmzContentSha256: sdk.String("corporis"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("libero"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("dolores"),
        XAmzSignedHeaders: sdk.String("quis"),
        XAmzTarget: operations.DeleteApplicationReferenceDataSourceXAmzTargetEnumKinesisAnalytics20150814DeleteApplicationReferenceDataSource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteApplicationReferenceDataSourceResponse != nil {
        // handle response
    }
}
```

## DescribeApplication

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Returns information about a specific Amazon Kinesis Analytics application.</p> <p>If you want to retrieve a list of all applications in your account, use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_ListApplications.html">ListApplications</a> operation.</p> <p>This operation requires permissions to perform the <code>kinesisanalytics:DescribeApplication</code> action. You can use <code>DescribeApplication</code> to get the current application versionId, which you need to call other operations such as <code>Update</code>. </p>

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
            ApplicationName: "totam",
        },
        XAmzAlgorithm: sdk.String("dignissimos"),
        XAmzContentSha256: sdk.String("eaque"),
        XAmzCredential: sdk.String("quis"),
        XAmzDate: sdk.String("nesciunt"),
        XAmzSecurityToken: sdk.String("eos"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("dolores"),
        XAmzTarget: operations.DescribeApplicationXAmzTargetEnumKinesisAnalytics20150814DescribeApplication,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeApplicationResponse != nil {
        // handle response
    }
}
```

## DiscoverInputSchema

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Infers a schema by evaluating sample records on the specified streaming source (Amazon Kinesis stream or Amazon Kinesis Firehose delivery stream) or S3 object. In the response, the operation returns the inferred schema and also the sample records that the operation used to infer the schema.</p> <p> You can use the inferred schema when configuring a streaming source for your application. For conceptual information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>. Note that when you create an application using the Amazon Kinesis Analytics console, the console uses this operation to infer a schema and show it in the console user interface. </p> <p> This operation requires permissions to perform the <code>kinesisanalytics:DiscoverInputSchema</code> action. </p>

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
                    ResourceARN: "minus",
                    RoleARN: "quam",
                },
            },
            InputStartingPositionConfiguration: &shared.InputStartingPositionConfiguration{
                InputStartingPosition: shared.InputStartingPositionEnumNow.ToPointer(),
            },
            ResourceARN: sdk.String("vero"),
            RoleARN: sdk.String("nostrum"),
            S3Configuration: &shared.S3Configuration{
                BucketARN: "hic",
                FileKey: "recusandae",
                RoleARN: "omnis",
            },
        },
        XAmzAlgorithm: sdk.String("facilis"),
        XAmzContentSha256: sdk.String("perspiciatis"),
        XAmzCredential: sdk.String("voluptatem"),
        XAmzDate: sdk.String("porro"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("blanditiis"),
        XAmzSignedHeaders: sdk.String("error"),
        XAmzTarget: operations.DiscoverInputSchemaXAmzTargetEnumKinesisAnalytics20150814DiscoverInputSchema,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DiscoverInputSchemaResponse != nil {
        // handle response
    }
}
```

## ListApplications

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Returns a list of Amazon Kinesis Analytics applications in your account. For each application, the response includes the application name, Amazon Resource Name (ARN), and status. If the response returns the <code>HasMoreApplications</code> value as true, you can send another request by adding the <code>ExclusiveStartApplicationName</code> in the request body, and set the value of this to the last application name from the previous response. </p> <p>If you want detailed information about a specific application, use <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a>.</p> <p>This operation requires permissions to perform the <code>kinesisanalytics:ListApplications</code> action.</p>

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
            ExclusiveStartApplicationName: sdk.String("eaque"),
            Limit: sdk.Int64(577229),
        },
        XAmzAlgorithm: sdk.String("rerum"),
        XAmzContentSha256: sdk.String("adipisci"),
        XAmzCredential: sdk.String("asperiores"),
        XAmzDate: sdk.String("earum"),
        XAmzSecurityToken: sdk.String("modi"),
        XAmzSignature: sdk.String("iste"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        XAmzTarget: operations.ListApplicationsXAmzTargetEnumKinesisAnalytics20150814ListApplications,
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

Retrieves the list of key-value tags assigned to the application. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-tagging.html">Using Tagging</a>.

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
            ResourceARN: "deleniti",
        },
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("libero"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("quaerat"),
        XAmzSignedHeaders: sdk.String("quos"),
        XAmzTarget: operations.ListTagsForResourceXAmzTargetEnumKinesisAnalytics20150814ListTagsForResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## StartApplication

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Starts the specified Amazon Kinesis Analytics application. After creating an application, you must exclusively call this operation to start your application.</p> <p>After the application starts, it begins consuming the input data, processes it, and writes the output to the configured destination.</p> <p> The application status must be <code>READY</code> for you to start an application. You can get the application status in the console or using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation.</p> <p>After you start the application, you can stop the application from processing the input by calling the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_StopApplication.html">StopApplication</a> operation.</p> <p>This operation requires permissions to perform the <code>kinesisanalytics:StartApplication</code> action.</p>

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
            ApplicationName: "aliquid",
            InputConfigurations: []shared.InputConfiguration{
                shared.InputConfiguration{
                    ID: "3323f9b7-7f3a-4410-8674-ebf69280d1ba",
                    InputStartingPositionConfiguration: shared.InputStartingPositionConfiguration{
                        InputStartingPosition: shared.InputStartingPositionEnumTrimHorizon.ToPointer(),
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("asperiores"),
        XAmzTarget: operations.StartApplicationXAmzTargetEnumKinesisAnalytics20150814StartApplication,
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

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Stops the application from processing input data. You can stop an application only if it is in the running state. You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to find the application state. After the application is stopped, Amazon Kinesis Analytics stops reading data from the input, the application stops processing data, and there is no output written to the destination. </p> <p>This operation requires permissions to perform the <code>kinesisanalytics:StopApplication</code> action.</p>

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
            ApplicationName: "nihil",
        },
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("id"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("eius"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("perferendis"),
        XAmzTarget: operations.StopApplicationXAmzTargetEnumKinesisAnalytics20150814StopApplication,
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

Adds one or more key-value tags to a Kinesis Analytics application. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-tagging.html">Using Tagging</a>.

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
            ResourceARN: "amet",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "accusamus",
                    Value: sdk.String("ad"),
                },
                shared.Tag{
                    Key: "saepe",
                    Value: sdk.String("suscipit"),
                },
                shared.Tag{
                    Key: "deserunt",
                    Value: sdk.String("provident"),
                },
                shared.Tag{
                    Key: "minima",
                    Value: sdk.String("repellendus"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("similique"),
        XAmzCredential: sdk.String("alias"),
        XAmzDate: sdk.String("at"),
        XAmzSecurityToken: sdk.String("quaerat"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("vel"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumKinesisAnalytics20150814TagResource,
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

Removes one or more tags from a Kinesis Analytics application. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-tagging.html">Using Tagging</a>.

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
            ResourceARN: "quod",
            TagKeys: []string{
                "qui",
                "dolorum",
                "a",
                "esse",
            },
        },
        XAmzAlgorithm: sdk.String("harum"),
        XAmzContentSha256: sdk.String("iusto"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("quisquam"),
        XAmzSecurityToken: sdk.String("tenetur"),
        XAmzSignature: sdk.String("amet"),
        XAmzSignedHeaders: sdk.String("tempore"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumKinesisAnalytics20150814UntagResource,
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

<note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Updates an existing Amazon Kinesis Analytics application. Using this API, you can update application code, input configuration, and output configuration. </p> <p>Note that Amazon Kinesis Analytics updates the <code>CurrentApplicationVersionId</code> each time you update your application. </p> <p>This operation requires permission for the <code>kinesisanalytics:UpdateApplication</code> action.</p>

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
            ApplicationName: "accusamus",
            ApplicationUpdate: shared.ApplicationUpdate{
                ApplicationCodeUpdate: sdk.String("numquam"),
                CloudWatchLoggingOptionUpdates: []shared.CloudWatchLoggingOptionUpdate{
                    shared.CloudWatchLoggingOptionUpdate{
                        CloudWatchLoggingOptionID: "dolorem",
                        LogStreamARNUpdate: sdk.String("sapiente"),
                        RoleARNUpdate: sdk.String("totam"),
                    },
                    shared.CloudWatchLoggingOptionUpdate{
                        CloudWatchLoggingOptionID: "nihil",
                        LogStreamARNUpdate: sdk.String("sit"),
                        RoleARNUpdate: sdk.String("expedita"),
                    },
                },
                InputUpdates: []shared.InputUpdate{
                    shared.InputUpdate{
                        InputID: "sed",
                        InputParallelismUpdate: &shared.InputParallelismUpdate{
                            CountUpdate: sdk.Int64(424685),
                        },
                        InputProcessingConfigurationUpdate: &shared.InputProcessingConfigurationUpdate{
                            InputLambdaProcessorUpdate: shared.InputLambdaProcessorUpdate{
                                ResourceARNUpdate: sdk.String("libero"),
                                RoleARNUpdate: sdk.String("voluptas"),
                            },
                        },
                        InputSchemaUpdate: &shared.InputSchemaUpdate{
                            RecordColumnUpdates: []shared.RecordColumn{
                                shared.RecordColumn{
                                    Mapping: sdk.String("quam"),
                                    Name: "Amber Dibbert",
                                    SQLType: "pariatur",
                                },
                                shared.RecordColumn{
                                    Mapping: sdk.String("soluta"),
                                    Name: "Kayla Larson",
                                    SQLType: "dolores",
                                },
                                shared.RecordColumn{
                                    Mapping: sdk.String("distinctio"),
                                    Name: "Gilbert Kohler",
                                    SQLType: "qui",
                                },
                            },
                            RecordEncodingUpdate: sdk.String("neque"),
                            RecordFormatUpdate: &shared.RecordFormat{
                                MappingParameters: &shared.MappingParameters{
                                    CSVMappingParameters: &shared.CSVMappingParameters{
                                        RecordColumnDelimiter: "fugit",
                                        RecordRowDelimiter: "magni",
                                    },
                                    JSONMappingParameters: &shared.JSONMappingParameters{
                                        RecordRowPath: "odio",
                                    },
                                },
                                RecordFormatType: shared.RecordFormatTypeEnumJSON,
                            },
                        },
                        KinesisFirehoseInputUpdate: &shared.KinesisFirehoseInputUpdate{
                            ResourceARNUpdate: sdk.String("ullam"),
                            RoleARNUpdate: sdk.String("nam"),
                        },
                        KinesisStreamsInputUpdate: &shared.KinesisStreamsInputUpdate{
                            ResourceARNUpdate: sdk.String("hic"),
                            RoleARNUpdate: sdk.String("voluptatem"),
                        },
                        NamePrefixUpdate: sdk.String("cumque"),
                    },
                },
                OutputUpdates: []shared.OutputUpdate{
                    shared.OutputUpdate{
                        DestinationSchemaUpdate: &shared.DestinationSchema{
                            RecordFormatType: shared.RecordFormatTypeEnumCsv,
                        },
                        KinesisFirehoseOutputUpdate: &shared.KinesisFirehoseOutputUpdate{
                            ResourceARNUpdate: sdk.String("et"),
                            RoleARNUpdate: sdk.String("saepe"),
                        },
                        KinesisStreamsOutputUpdate: &shared.KinesisStreamsOutputUpdate{
                            ResourceARNUpdate: sdk.String("ipsum"),
                            RoleARNUpdate: sdk.String("veritatis"),
                        },
                        LambdaOutputUpdate: &shared.LambdaOutputUpdate{
                            ResourceARNUpdate: sdk.String("nobis"),
                            RoleARNUpdate: sdk.String("quos"),
                        },
                        NameUpdate: sdk.String("tempore"),
                        OutputID: "cupiditate",
                    },
                    shared.OutputUpdate{
                        DestinationSchemaUpdate: &shared.DestinationSchema{
                            RecordFormatType: shared.RecordFormatTypeEnumJSON,
                        },
                        KinesisFirehoseOutputUpdate: &shared.KinesisFirehoseOutputUpdate{
                            ResourceARNUpdate: sdk.String("delectus"),
                            RoleARNUpdate: sdk.String("dolorem"),
                        },
                        KinesisStreamsOutputUpdate: &shared.KinesisStreamsOutputUpdate{
                            ResourceARNUpdate: sdk.String("dolore"),
                            RoleARNUpdate: sdk.String("labore"),
                        },
                        LambdaOutputUpdate: &shared.LambdaOutputUpdate{
                            ResourceARNUpdate: sdk.String("adipisci"),
                            RoleARNUpdate: sdk.String("dolorum"),
                        },
                        NameUpdate: sdk.String("architecto"),
                        OutputID: "quae",
                    },
                    shared.OutputUpdate{
                        DestinationSchemaUpdate: &shared.DestinationSchema{
                            RecordFormatType: shared.RecordFormatTypeEnumJSON,
                        },
                        KinesisFirehoseOutputUpdate: &shared.KinesisFirehoseOutputUpdate{
                            ResourceARNUpdate: sdk.String("quas"),
                            RoleARNUpdate: sdk.String("itaque"),
                        },
                        KinesisStreamsOutputUpdate: &shared.KinesisStreamsOutputUpdate{
                            ResourceARNUpdate: sdk.String("consequatur"),
                            RoleARNUpdate: sdk.String("est"),
                        },
                        LambdaOutputUpdate: &shared.LambdaOutputUpdate{
                            ResourceARNUpdate: sdk.String("repellendus"),
                            RoleARNUpdate: sdk.String("porro"),
                        },
                        NameUpdate: sdk.String("doloribus"),
                        OutputID: "ut",
                    },
                },
                ReferenceDataSourceUpdates: []shared.ReferenceDataSourceUpdate{
                    shared.ReferenceDataSourceUpdate{
                        ReferenceID: "cupiditate",
                        ReferenceSchemaUpdate: &shared.SourceSchema{
                            RecordColumns: []shared.RecordColumn{
                                shared.RecordColumn{
                                    Mapping: sdk.String("quae"),
                                    Name: "Darren McClure",
                                    SQLType: "vero",
                                },
                            },
                            RecordEncoding: sdk.String("omnis"),
                            RecordFormat: shared.RecordFormat{
                                MappingParameters: &shared.MappingParameters{
                                    CSVMappingParameters: &shared.CSVMappingParameters{
                                        RecordColumnDelimiter: "quis",
                                        RecordRowDelimiter: "ipsum",
                                    },
                                    JSONMappingParameters: &shared.JSONMappingParameters{
                                        RecordRowPath: "delectus",
                                    },
                                },
                                RecordFormatType: shared.RecordFormatTypeEnumJSON,
                            },
                        },
                        S3ReferenceDataSourceUpdate: &shared.S3ReferenceDataSourceUpdate{
                            BucketARNUpdate: sdk.String("consectetur"),
                            FileKeyUpdate: sdk.String("vero"),
                            ReferenceRoleARNUpdate: sdk.String("tenetur"),
                        },
                        TableNameUpdate: sdk.String("dignissimos"),
                    },
                    shared.ReferenceDataSourceUpdate{
                        ReferenceID: "hic",
                        ReferenceSchemaUpdate: &shared.SourceSchema{
                            RecordColumns: []shared.RecordColumn{
                                shared.RecordColumn{
                                    Mapping: sdk.String("quod"),
                                    Name: "Harriet Quitzon",
                                    SQLType: "dolore",
                                },
                                shared.RecordColumn{
                                    Mapping: sdk.String("quibusdam"),
                                    Name: "Earl Mosciski DVM",
                                    SQLType: "exercitationem",
                                },
                                shared.RecordColumn{
                                    Mapping: sdk.String("nulla"),
                                    Name: "Johnnie Wunsch",
                                    SQLType: "eligendi",
                                },
                            },
                            RecordEncoding: sdk.String("ducimus"),
                            RecordFormat: shared.RecordFormat{
                                MappingParameters: &shared.MappingParameters{
                                    CSVMappingParameters: &shared.CSVMappingParameters{
                                        RecordColumnDelimiter: "alias",
                                        RecordRowDelimiter: "officia",
                                    },
                                    JSONMappingParameters: &shared.JSONMappingParameters{
                                        RecordRowPath: "tempora",
                                    },
                                },
                                RecordFormatType: shared.RecordFormatTypeEnumJSON,
                            },
                        },
                        S3ReferenceDataSourceUpdate: &shared.S3ReferenceDataSourceUpdate{
                            BucketARNUpdate: sdk.String("ea"),
                            FileKeyUpdate: sdk.String("aspernatur"),
                            ReferenceRoleARNUpdate: sdk.String("vel"),
                        },
                        TableNameUpdate: sdk.String("possimus"),
                    },
                    shared.ReferenceDataSourceUpdate{
                        ReferenceID: "magnam",
                        ReferenceSchemaUpdate: &shared.SourceSchema{
                            RecordColumns: []shared.RecordColumn{
                                shared.RecordColumn{
                                    Mapping: sdk.String("ex"),
                                    Name: "Willie Fahey III",
                                    SQLType: "nulla",
                                },
                            },
                            RecordEncoding: sdk.String("excepturi"),
                            RecordFormat: shared.RecordFormat{
                                MappingParameters: &shared.MappingParameters{
                                    CSVMappingParameters: &shared.CSVMappingParameters{
                                        RecordColumnDelimiter: "voluptatibus",
                                        RecordRowDelimiter: "nostrum",
                                    },
                                    JSONMappingParameters: &shared.JSONMappingParameters{
                                        RecordRowPath: "sapiente",
                                    },
                                },
                                RecordFormatType: shared.RecordFormatTypeEnumCsv,
                            },
                        },
                        S3ReferenceDataSourceUpdate: &shared.S3ReferenceDataSourceUpdate{
                            BucketARNUpdate: sdk.String("saepe"),
                            FileKeyUpdate: sdk.String("ea"),
                            ReferenceRoleARNUpdate: sdk.String("impedit"),
                        },
                        TableNameUpdate: sdk.String("corporis"),
                    },
                },
            },
            CurrentApplicationVersionID: 333145,
        },
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("inventore"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("ea"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("consectetur"),
        XAmzSignedHeaders: sdk.String("recusandae"),
        XAmzTarget: operations.UpdateApplicationXAmzTargetEnumKinesisAnalytics20150814UpdateApplication,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateApplicationResponse != nil {
        // handle response
    }
}
```
