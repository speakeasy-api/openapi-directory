# SDK

## Overview

Definition of the public APIs exposed by Amazon Machine Learning

Amazon Web Services documentation
<https://docs.aws.amazon.com/machinelearning/>
### Available Operations

* [AddTags](#addtags) - Adds one or more tags to an object, up to a limit of 10. Each tag consists of a key and an optional value. If you add a tag using a key that is already associated with the ML object, <code>AddTags</code> updates the tag's value.
* [CreateBatchPrediction](#createbatchprediction) - <p>Generates predictions for a group of observations. The observations to process exist in one or more data files referenced by a <code>DataSource</code>. This operation creates a new <code>BatchPrediction</code>, and uses an <code>MLModel</code> and the data files referenced by the <code>DataSource</code> as information sources. </p> <p> <code>CreateBatchPrediction</code> is an asynchronous operation. In response to <code>CreateBatchPrediction</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>BatchPrediction</code> status to <code>PENDING</code>. After the <code>BatchPrediction</code> completes, Amazon ML sets the status to <code>COMPLETED</code>. </p> <p>You can poll for status updates by using the <a>GetBatchPrediction</a> operation and checking the <code>Status</code> parameter of the result. After the <code>COMPLETED</code> status appears, the results are available in the location specified by the <code>OutputUri</code> parameter.</p>
* [CreateDataSourceFromRDS](#createdatasourcefromrds) - <p>Creates a <code>DataSource</code> object from an <a href="http://aws.amazon.com/rds/"> Amazon Relational Database Service</a> (Amazon RDS). A <code>DataSource</code> references data that can be used to perform <code>CreateMLModel</code>, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations.</p> <p> <code>CreateDataSourceFromRDS</code> is an asynchronous operation. In response to <code>CreateDataSourceFromRDS</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>DataSource</code> status to <code>PENDING</code>. After the <code>DataSource</code> is created and ready for use, Amazon ML sets the <code>Status</code> parameter to <code>COMPLETED</code>. <code>DataSource</code> in the <code>COMPLETED</code> or <code>PENDING</code> state can be used only to perform <code>&gt;CreateMLModel</code>&gt;, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations. </p> <p> If Amazon ML cannot accept the input source, it sets the <code>Status</code> parameter to <code>FAILED</code> and includes an error message in the <code>Message</code> attribute of the <code>GetDataSource</code> operation response. </p>
* [CreateDataSourceFromRedshift](#createdatasourcefromredshift) - <p>Creates a <code>DataSource</code> from a database hosted on an Amazon Redshift cluster. A <code>DataSource</code> references data that can be used to perform either <code>CreateMLModel</code>, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations.</p> <p> <code>CreateDataSourceFromRedshift</code> is an asynchronous operation. In response to <code>CreateDataSourceFromRedshift</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>DataSource</code> status to <code>PENDING</code>. After the <code>DataSource</code> is created and ready for use, Amazon ML sets the <code>Status</code> parameter to <code>COMPLETED</code>. <code>DataSource</code> in <code>COMPLETED</code> or <code>PENDING</code> states can be used to perform only <code>CreateMLModel</code>, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations. </p> <p> If Amazon ML can't accept the input source, it sets the <code>Status</code> parameter to <code>FAILED</code> and includes an error message in the <code>Message</code> attribute of the <code>GetDataSource</code> operation response. </p> <p>The observations should be contained in the database hosted on an Amazon Redshift cluster and should be specified by a <code>SelectSqlQuery</code> query. Amazon ML executes an <code>Unload</code> command in Amazon Redshift to transfer the result set of the <code>SelectSqlQuery</code> query to <code>S3StagingLocation</code>.</p> <p>After the <code>DataSource</code> has been created, it's ready for use in evaluations and batch predictions. If you plan to use the <code>DataSource</code> to train an <code>MLModel</code>, the <code>DataSource</code> also requires a recipe. A recipe describes how each input variable will be used in training an <code>MLModel</code>. Will the variable be included or excluded from training? Will the variable be manipulated; for example, will it be combined with another variable or will it be split apart into word combinations? The recipe provides answers to these questions.</p> <p>You can't change an existing datasource, but you can copy and modify the settings from an existing Amazon Redshift datasource to create a new datasource. To do so, call <code>GetDataSource</code> for an existing datasource and copy the values to a <code>CreateDataSource</code> call. Change the settings that you want to change and make sure that all required fields have the appropriate values.</p>
* [CreateDataSourceFromS3](#createdatasourcefroms3) - <p>Creates a <code>DataSource</code> object. A <code>DataSource</code> references data that can be used to perform <code>CreateMLModel</code>, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations.</p> <p> <code>CreateDataSourceFromS3</code> is an asynchronous operation. In response to <code>CreateDataSourceFromS3</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>DataSource</code> status to <code>PENDING</code>. After the <code>DataSource</code> has been created and is ready for use, Amazon ML sets the <code>Status</code> parameter to <code>COMPLETED</code>. <code>DataSource</code> in the <code>COMPLETED</code> or <code>PENDING</code> state can be used to perform only <code>CreateMLModel</code>, <code>CreateEvaluation</code> or <code>CreateBatchPrediction</code> operations. </p> <p> If Amazon ML can't accept the input source, it sets the <code>Status</code> parameter to <code>FAILED</code> and includes an error message in the <code>Message</code> attribute of the <code>GetDataSource</code> operation response. </p> <p>The observation data used in a <code>DataSource</code> should be ready to use; that is, it should have a consistent structure, and missing data values should be kept to a minimum. The observation data must reside in one or more .csv files in an Amazon Simple Storage Service (Amazon S3) location, along with a schema that describes the data items by name and type. The same schema must be used for all of the data files referenced by the <code>DataSource</code>. </p> <p>After the <code>DataSource</code> has been created, it's ready to use in evaluations and batch predictions. If you plan to use the <code>DataSource</code> to train an <code>MLModel</code>, the <code>DataSource</code> also needs a recipe. A recipe describes how each input variable will be used in training an <code>MLModel</code>. Will the variable be included or excluded from training? Will the variable be manipulated; for example, will it be combined with another variable or will it be split apart into word combinations? The recipe provides answers to these questions.</p>
* [CreateEvaluation](#createevaluation) - <p>Creates a new <code>Evaluation</code> of an <code>MLModel</code>. An <code>MLModel</code> is evaluated on a set of observations associated to a <code>DataSource</code>. Like a <code>DataSource</code> for an <code>MLModel</code>, the <code>DataSource</code> for an <code>Evaluation</code> contains values for the <code>Target Variable</code>. The <code>Evaluation</code> compares the predicted result for each observation to the actual outcome and provides a summary so that you know how effective the <code>MLModel</code> functions on the test data. Evaluation generates a relevant performance metric, such as BinaryAUC, RegressionRMSE or MulticlassAvgFScore based on the corresponding <code>MLModelType</code>: <code>BINARY</code>, <code>REGRESSION</code> or <code>MULTICLASS</code>. </p> <p> <code>CreateEvaluation</code> is an asynchronous operation. In response to <code>CreateEvaluation</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the evaluation status to <code>PENDING</code>. After the <code>Evaluation</code> is created and ready for use, Amazon ML sets the status to <code>COMPLETED</code>. </p> <p>You can use the <code>GetEvaluation</code> operation to check progress of the evaluation during the creation operation.</p>
* [CreateMLModel](#createmlmodel) - <p>Creates a new <code>MLModel</code> using the <code>DataSource</code> and the recipe as information sources. </p> <p>An <code>MLModel</code> is nearly immutable. Users can update only the <code>MLModelName</code> and the <code>ScoreThreshold</code> in an <code>MLModel</code> without creating a new <code>MLModel</code>. </p> <p> <code>CreateMLModel</code> is an asynchronous operation. In response to <code>CreateMLModel</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>MLModel</code> status to <code>PENDING</code>. After the <code>MLModel</code> has been created and ready is for use, Amazon ML sets the status to <code>COMPLETED</code>. </p> <p>You can use the <code>GetMLModel</code> operation to check the progress of the <code>MLModel</code> during the creation operation.</p> <p> <code>CreateMLModel</code> requires a <code>DataSource</code> with computed statistics, which can be created by setting <code>ComputeStatistics</code> to <code>true</code> in <code>CreateDataSourceFromRDS</code>, <code>CreateDataSourceFromS3</code>, or <code>CreateDataSourceFromRedshift</code> operations. </p>
* [CreateRealtimeEndpoint](#createrealtimeendpoint) - Creates a real-time endpoint for the <code>MLModel</code>. The endpoint contains the URI of the <code>MLModel</code>; that is, the location to send real-time prediction requests for the specified <code>MLModel</code>.
* [DeleteBatchPrediction](#deletebatchprediction) - <p>Assigns the DELETED status to a <code>BatchPrediction</code>, rendering it unusable.</p> <p>After using the <code>DeleteBatchPrediction</code> operation, you can use the <a>GetBatchPrediction</a> operation to verify that the status of the <code>BatchPrediction</code> changed to DELETED.</p> <p> <b>Caution:</b> The result of the <code>DeleteBatchPrediction</code> operation is irreversible.</p>
* [DeleteDataSource](#deletedatasource) - <p>Assigns the DELETED status to a <code>DataSource</code>, rendering it unusable.</p> <p>After using the <code>DeleteDataSource</code> operation, you can use the <a>GetDataSource</a> operation to verify that the status of the <code>DataSource</code> changed to DELETED.</p> <p> <b>Caution:</b> The results of the <code>DeleteDataSource</code> operation are irreversible.</p>
* [DeleteEvaluation](#deleteevaluation) - <p>Assigns the <code>DELETED</code> status to an <code>Evaluation</code>, rendering it unusable.</p> <p>After invoking the <code>DeleteEvaluation</code> operation, you can use the <code>GetEvaluation</code> operation to verify that the status of the <code>Evaluation</code> changed to <code>DELETED</code>.</p> <p> <b>Caution:</b> The results of the <code>DeleteEvaluation</code> operation are irreversible.</p>
* [DeleteMLModel](#deletemlmodel) - <p>Assigns the <code>DELETED</code> status to an <code>MLModel</code>, rendering it unusable.</p> <p>After using the <code>DeleteMLModel</code> operation, you can use the <code>GetMLModel</code> operation to verify that the status of the <code>MLModel</code> changed to DELETED.</p> <p> <b>Caution:</b> The result of the <code>DeleteMLModel</code> operation is irreversible.</p>
* [DeleteRealtimeEndpoint](#deleterealtimeendpoint) - Deletes a real time endpoint of an <code>MLModel</code>.
* [DeleteTags](#deletetags) - <p>Deletes the specified tags associated with an ML object. After this operation is complete, you can't recover deleted tags.</p> <p>If you specify a tag that doesn't exist, Amazon ML ignores it.</p>
* [DescribeBatchPredictions](#describebatchpredictions) - Returns a list of <code>BatchPrediction</code> operations that match the search criteria in the request.
* [DescribeDataSources](#describedatasources) - Returns a list of <code>DataSource</code> that match the search criteria in the request.
* [DescribeEvaluations](#describeevaluations) - Returns a list of <code>DescribeEvaluations</code> that match the search criteria in the request.
* [DescribeMLModels](#describemlmodels) - Returns a list of <code>MLModel</code> that match the search criteria in the request.
* [DescribeTags](#describetags) - Describes one or more of the tags for your Amazon ML object.
* [GetBatchPrediction](#getbatchprediction) - Returns a <code>BatchPrediction</code> that includes detailed metadata, status, and data file information for a <code>Batch Prediction</code> request.
* [GetDataSource](#getdatasource) - <p>Returns a <code>DataSource</code> that includes metadata and data file information, as well as the current status of the <code>DataSource</code>.</p> <p> <code>GetDataSource</code> provides results in normal or verbose format. The verbose format adds the schema description and the list of files pointed to by the DataSource to the normal format.</p>
* [GetEvaluation](#getevaluation) - Returns an <code>Evaluation</code> that includes metadata as well as the current status of the <code>Evaluation</code>.
* [GetMLModel](#getmlmodel) - <p>Returns an <code>MLModel</code> that includes detailed metadata, data source information, and the current status of the <code>MLModel</code>.</p> <p> <code>GetMLModel</code> provides results in normal or verbose format. </p>
* [Predict](#predict) - <p>Generates a prediction for the observation using the specified <code>ML Model</code>.</p> <p> <b>Note:</b> Not all response parameters will be populated. Whether a response parameter is populated depends on the type of model requested.</p>
* [UpdateBatchPrediction](#updatebatchprediction) - <p>Updates the <code>BatchPredictionName</code> of a <code>BatchPrediction</code>.</p> <p>You can use the <code>GetBatchPrediction</code> operation to view the contents of the updated data element.</p>
* [UpdateDataSource](#updatedatasource) - <p>Updates the <code>DataSourceName</code> of a <code>DataSource</code>.</p> <p>You can use the <code>GetDataSource</code> operation to view the contents of the updated data element.</p>
* [UpdateEvaluation](#updateevaluation) - <p>Updates the <code>EvaluationName</code> of an <code>Evaluation</code>.</p> <p>You can use the <code>GetEvaluation</code> operation to view the contents of the updated data element.</p>
* [UpdateMLModel](#updatemlmodel) - <p>Updates the <code>MLModelName</code> and the <code>ScoreThreshold</code> of an <code>MLModel</code>.</p> <p>You can use the <code>GetMLModel</code> operation to view the contents of the updated data element.</p>

## AddTags

Adds one or more tags to an object, up to a limit of 10. Each tag consists of a key and an optional value. If you add a tag using a key that is already associated with the ML object, <code>AddTags</code> updates the tag's value.

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
    res, err := s.SDK.AddTags(ctx, operations.AddTagsRequest{
        AddTagsInput: shared.AddTagsInput{
            ResourceID: "delectus",
            ResourceType: shared.TaggableResourceTypeEnumDataSource,
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("molestiae"),
                    Value: sdk.String("minus"),
                },
                shared.Tag{
                    Key: sdk.String("placeat"),
                    Value: sdk.String("voluptatum"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("iusto"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("nisi"),
        XAmzDate: sdk.String("recusandae"),
        XAmzSecurityToken: sdk.String("temporibus"),
        XAmzSignature: sdk.String("ab"),
        XAmzSignedHeaders: sdk.String("quis"),
        XAmzTarget: operations.AddTagsXAmzTargetEnumAmazonMl20141212AddTags,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddTagsOutput != nil {
        // handle response
    }
}
```

## CreateBatchPrediction

<p>Generates predictions for a group of observations. The observations to process exist in one or more data files referenced by a <code>DataSource</code>. This operation creates a new <code>BatchPrediction</code>, and uses an <code>MLModel</code> and the data files referenced by the <code>DataSource</code> as information sources. </p> <p> <code>CreateBatchPrediction</code> is an asynchronous operation. In response to <code>CreateBatchPrediction</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>BatchPrediction</code> status to <code>PENDING</code>. After the <code>BatchPrediction</code> completes, Amazon ML sets the status to <code>COMPLETED</code>. </p> <p>You can poll for status updates by using the <a>GetBatchPrediction</a> operation and checking the <code>Status</code> parameter of the result. After the <code>COMPLETED</code> status appears, the results are available in the location specified by the <code>OutputUri</code> parameter.</p>

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
    res, err := s.SDK.CreateBatchPrediction(ctx, operations.CreateBatchPredictionRequest{
        CreateBatchPredictionInput: shared.CreateBatchPredictionInput{
            BatchPredictionDataSourceID: "veritatis",
            BatchPredictionID: "deserunt",
            BatchPredictionName: sdk.String("perferendis"),
            MLModelID: "ipsam",
            OutputURI: "repellendus",
        },
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("odit"),
        XAmzDate: sdk.String("at"),
        XAmzSecurityToken: sdk.String("at"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("molestiae"),
        XAmzTarget: operations.CreateBatchPredictionXAmzTargetEnumAmazonMl20141212CreateBatchPrediction,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateBatchPredictionOutput != nil {
        // handle response
    }
}
```

## CreateDataSourceFromRDS

<p>Creates a <code>DataSource</code> object from an <a href="http://aws.amazon.com/rds/"> Amazon Relational Database Service</a> (Amazon RDS). A <code>DataSource</code> references data that can be used to perform <code>CreateMLModel</code>, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations.</p> <p> <code>CreateDataSourceFromRDS</code> is an asynchronous operation. In response to <code>CreateDataSourceFromRDS</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>DataSource</code> status to <code>PENDING</code>. After the <code>DataSource</code> is created and ready for use, Amazon ML sets the <code>Status</code> parameter to <code>COMPLETED</code>. <code>DataSource</code> in the <code>COMPLETED</code> or <code>PENDING</code> state can be used only to perform <code>&gt;CreateMLModel</code>&gt;, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations. </p> <p> If Amazon ML cannot accept the input source, it sets the <code>Status</code> parameter to <code>FAILED</code> and includes an error message in the <code>Message</code> attribute of the <code>GetDataSource</code> operation response. </p>

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
    res, err := s.SDK.CreateDataSourceFromRDS(ctx, operations.CreateDataSourceFromRDSRequest{
        CreateDataSourceFromRDSInput: shared.CreateDataSourceFromRDSInput{
            ComputeStatistics: sdk.Bool(false),
            DataSourceID: "quod",
            DataSourceName: sdk.String("quod"),
            RDSData: shared.RDSDataSpec{
                DataRearrangement: sdk.String("esse"),
                DataSchema: sdk.String("totam"),
                DataSchemaURI: sdk.String("porro"),
                DatabaseCredentials: shared.RDSDatabaseCredentials{
                    Password: "dolorum",
                    Username: "Billy_Reichel",
                },
                DatabaseInformation: shared.RDSDatabase{
                    DatabaseName: "fugit",
                    InstanceIdentifier: "deleniti",
                },
                ResourceRole: "hic",
                S3StagingLocation: "optio",
                SecurityGroupIds: []string{
                    "beatae",
                    "commodi",
                    "molestiae",
                },
                SelectSQLQuery: "modi",
                ServiceRole: "qui",
                SubnetID: "impedit",
            },
            RoleARN: "cum",
        },
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("ad"),
        XAmzSignedHeaders: sdk.String("natus"),
        XAmzTarget: operations.CreateDataSourceFromRDSXAmzTargetEnumAmazonMl20141212CreateDataSourceFromRds,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDataSourceFromRDSOutput != nil {
        // handle response
    }
}
```

## CreateDataSourceFromRedshift

<p>Creates a <code>DataSource</code> from a database hosted on an Amazon Redshift cluster. A <code>DataSource</code> references data that can be used to perform either <code>CreateMLModel</code>, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations.</p> <p> <code>CreateDataSourceFromRedshift</code> is an asynchronous operation. In response to <code>CreateDataSourceFromRedshift</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>DataSource</code> status to <code>PENDING</code>. After the <code>DataSource</code> is created and ready for use, Amazon ML sets the <code>Status</code> parameter to <code>COMPLETED</code>. <code>DataSource</code> in <code>COMPLETED</code> or <code>PENDING</code> states can be used to perform only <code>CreateMLModel</code>, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations. </p> <p> If Amazon ML can't accept the input source, it sets the <code>Status</code> parameter to <code>FAILED</code> and includes an error message in the <code>Message</code> attribute of the <code>GetDataSource</code> operation response. </p> <p>The observations should be contained in the database hosted on an Amazon Redshift cluster and should be specified by a <code>SelectSqlQuery</code> query. Amazon ML executes an <code>Unload</code> command in Amazon Redshift to transfer the result set of the <code>SelectSqlQuery</code> query to <code>S3StagingLocation</code>.</p> <p>After the <code>DataSource</code> has been created, it's ready for use in evaluations and batch predictions. If you plan to use the <code>DataSource</code> to train an <code>MLModel</code>, the <code>DataSource</code> also requires a recipe. A recipe describes how each input variable will be used in training an <code>MLModel</code>. Will the variable be included or excluded from training? Will the variable be manipulated; for example, will it be combined with another variable or will it be split apart into word combinations? The recipe provides answers to these questions.</p> <p>You can't change an existing datasource, but you can copy and modify the settings from an existing Amazon Redshift datasource to create a new datasource. To do so, call <code>GetDataSource</code> for an existing datasource and copy the values to a <code>CreateDataSource</code> call. Change the settings that you want to change and make sure that all required fields have the appropriate values.</p>

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
    res, err := s.SDK.CreateDataSourceFromRedshift(ctx, operations.CreateDataSourceFromRedshiftRequest{
        CreateDataSourceFromRedshiftInput: shared.CreateDataSourceFromRedshiftInput{
            ComputeStatistics: sdk.Bool(false),
            DataSourceID: "sed",
            DataSourceName: sdk.String("iste"),
            DataSpec: shared.RedshiftDataSpec{
                DataRearrangement: sdk.String("dolor"),
                DataSchema: sdk.String("natus"),
                DataSchemaURI: sdk.String("laboriosam"),
                DatabaseCredentials: shared.RedshiftDatabaseCredentials{
                    Password: "hic",
                    Username: "Steve.Parker",
                },
                DatabaseInformation: shared.RedshiftDatabase{
                    ClusterIdentifier: "iste",
                    DatabaseName: "iure",
                },
                S3StagingLocation: "saepe",
                SelectSQLQuery: "quidem",
            },
            RoleARN: "architecto",
        },
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("reiciendis"),
        XAmzCredential: sdk.String("est"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("dolores"),
        XAmzSignedHeaders: sdk.String("dolorem"),
        XAmzTarget: operations.CreateDataSourceFromRedshiftXAmzTargetEnumAmazonMl20141212CreateDataSourceFromRedshift,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDataSourceFromRedshiftOutput != nil {
        // handle response
    }
}
```

## CreateDataSourceFromS3

<p>Creates a <code>DataSource</code> object. A <code>DataSource</code> references data that can be used to perform <code>CreateMLModel</code>, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations.</p> <p> <code>CreateDataSourceFromS3</code> is an asynchronous operation. In response to <code>CreateDataSourceFromS3</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>DataSource</code> status to <code>PENDING</code>. After the <code>DataSource</code> has been created and is ready for use, Amazon ML sets the <code>Status</code> parameter to <code>COMPLETED</code>. <code>DataSource</code> in the <code>COMPLETED</code> or <code>PENDING</code> state can be used to perform only <code>CreateMLModel</code>, <code>CreateEvaluation</code> or <code>CreateBatchPrediction</code> operations. </p> <p> If Amazon ML can't accept the input source, it sets the <code>Status</code> parameter to <code>FAILED</code> and includes an error message in the <code>Message</code> attribute of the <code>GetDataSource</code> operation response. </p> <p>The observation data used in a <code>DataSource</code> should be ready to use; that is, it should have a consistent structure, and missing data values should be kept to a minimum. The observation data must reside in one or more .csv files in an Amazon Simple Storage Service (Amazon S3) location, along with a schema that describes the data items by name and type. The same schema must be used for all of the data files referenced by the <code>DataSource</code>. </p> <p>After the <code>DataSource</code> has been created, it's ready to use in evaluations and batch predictions. If you plan to use the <code>DataSource</code> to train an <code>MLModel</code>, the <code>DataSource</code> also needs a recipe. A recipe describes how each input variable will be used in training an <code>MLModel</code>. Will the variable be included or excluded from training? Will the variable be manipulated; for example, will it be combined with another variable or will it be split apart into word combinations? The recipe provides answers to these questions.</p>

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
    res, err := s.SDK.CreateDataSourceFromS3(ctx, operations.CreateDataSourceFromS3Request{
        CreateDataSourceFromS3Input: shared.CreateDataSourceFromS3Input{
            ComputeStatistics: sdk.Bool(false),
            DataSourceID: "corporis",
            DataSourceName: sdk.String("explicabo"),
            DataSpec: shared.S3DataSpec{
                DataLocationS3: "nobis",
                DataRearrangement: sdk.String("enim"),
                DataSchema: sdk.String("omnis"),
                DataSchemaLocationS3: sdk.String("nemo"),
            },
        },
        XAmzAlgorithm: sdk.String("minima"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("accusantium"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("culpa"),
        XAmzSignature: sdk.String("doloribus"),
        XAmzSignedHeaders: sdk.String("sapiente"),
        XAmzTarget: operations.CreateDataSourceFromS3XAmzTargetEnumAmazonMl20141212CreateDataSourceFromS3,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDataSourceFromS3Output != nil {
        // handle response
    }
}
```

## CreateEvaluation

<p>Creates a new <code>Evaluation</code> of an <code>MLModel</code>. An <code>MLModel</code> is evaluated on a set of observations associated to a <code>DataSource</code>. Like a <code>DataSource</code> for an <code>MLModel</code>, the <code>DataSource</code> for an <code>Evaluation</code> contains values for the <code>Target Variable</code>. The <code>Evaluation</code> compares the predicted result for each observation to the actual outcome and provides a summary so that you know how effective the <code>MLModel</code> functions on the test data. Evaluation generates a relevant performance metric, such as BinaryAUC, RegressionRMSE or MulticlassAvgFScore based on the corresponding <code>MLModelType</code>: <code>BINARY</code>, <code>REGRESSION</code> or <code>MULTICLASS</code>. </p> <p> <code>CreateEvaluation</code> is an asynchronous operation. In response to <code>CreateEvaluation</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the evaluation status to <code>PENDING</code>. After the <code>Evaluation</code> is created and ready for use, Amazon ML sets the status to <code>COMPLETED</code>. </p> <p>You can use the <code>GetEvaluation</code> operation to check progress of the evaluation during the creation operation.</p>

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
    res, err := s.SDK.CreateEvaluation(ctx, operations.CreateEvaluationRequest{
        CreateEvaluationInput: shared.CreateEvaluationInput{
            EvaluationDataSourceID: "architecto",
            EvaluationID: "mollitia",
            EvaluationName: sdk.String("dolorem"),
            MLModelID: "culpa",
        },
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("repellat"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("numquam"),
        XAmzSignature: sdk.String("commodi"),
        XAmzSignedHeaders: sdk.String("quam"),
        XAmzTarget: operations.CreateEvaluationXAmzTargetEnumAmazonMl20141212CreateEvaluation,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateEvaluationOutput != nil {
        // handle response
    }
}
```

## CreateMLModel

<p>Creates a new <code>MLModel</code> using the <code>DataSource</code> and the recipe as information sources. </p> <p>An <code>MLModel</code> is nearly immutable. Users can update only the <code>MLModelName</code> and the <code>ScoreThreshold</code> in an <code>MLModel</code> without creating a new <code>MLModel</code>. </p> <p> <code>CreateMLModel</code> is an asynchronous operation. In response to <code>CreateMLModel</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>MLModel</code> status to <code>PENDING</code>. After the <code>MLModel</code> has been created and ready is for use, Amazon ML sets the status to <code>COMPLETED</code>. </p> <p>You can use the <code>GetMLModel</code> operation to check the progress of the <code>MLModel</code> during the creation operation.</p> <p> <code>CreateMLModel</code> requires a <code>DataSource</code> with computed statistics, which can be created by setting <code>ComputeStatistics</code> to <code>true</code> in <code>CreateDataSourceFromRDS</code>, <code>CreateDataSourceFromS3</code>, or <code>CreateDataSourceFromRedshift</code> operations. </p>

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
    res, err := s.SDK.CreateMLModel(ctx, operations.CreateMLModelRequest{
        CreateMLModelInput: shared.CreateMLModelInput{
            MLModelID: "molestiae",
            MLModelName: sdk.String("velit"),
            MLModelType: shared.MLModelTypeEnumBinary,
            Parameters: map[string]string{
                "quis": "vitae",
            },
            Recipe: sdk.String("laborum"),
            RecipeURI: sdk.String("animi"),
            TrainingDataSourceID: "enim",
        },
        XAmzAlgorithm: sdk.String("odit"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("sequi"),
        XAmzDate: sdk.String("tenetur"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("id"),
        XAmzSignedHeaders: sdk.String("possimus"),
        XAmzTarget: operations.CreateMLModelXAmzTargetEnumAmazonMl20141212CreateMlModel,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateMLModelOutput != nil {
        // handle response
    }
}
```

## CreateRealtimeEndpoint

Creates a real-time endpoint for the <code>MLModel</code>. The endpoint contains the URI of the <code>MLModel</code>; that is, the location to send real-time prediction requests for the specified <code>MLModel</code>.

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
    res, err := s.SDK.CreateRealtimeEndpoint(ctx, operations.CreateRealtimeEndpointRequest{
        CreateRealtimeEndpointInput: shared.CreateRealtimeEndpointInput{
            MLModelID: "aut",
        },
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("temporibus"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
        XAmzTarget: operations.CreateRealtimeEndpointXAmzTargetEnumAmazonMl20141212CreateRealtimeEndpoint,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateRealtimeEndpointOutput != nil {
        // handle response
    }
}
```

## DeleteBatchPrediction

<p>Assigns the DELETED status to a <code>BatchPrediction</code>, rendering it unusable.</p> <p>After using the <code>DeleteBatchPrediction</code> operation, you can use the <a>GetBatchPrediction</a> operation to verify that the status of the <code>BatchPrediction</code> changed to DELETED.</p> <p> <b>Caution:</b> The result of the <code>DeleteBatchPrediction</code> operation is irreversible.</p>

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
    res, err := s.SDK.DeleteBatchPrediction(ctx, operations.DeleteBatchPredictionRequest{
        DeleteBatchPredictionInput: shared.DeleteBatchPredictionInput{
            BatchPredictionID: "vero",
        },
        XAmzAlgorithm: sdk.String("nihil"),
        XAmzContentSha256: sdk.String("praesentium"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("cum"),
        XAmzTarget: operations.DeleteBatchPredictionXAmzTargetEnumAmazonMl20141212DeleteBatchPrediction,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteBatchPredictionOutput != nil {
        // handle response
    }
}
```

## DeleteDataSource

<p>Assigns the DELETED status to a <code>DataSource</code>, rendering it unusable.</p> <p>After using the <code>DeleteDataSource</code> operation, you can use the <a>GetDataSource</a> operation to verify that the status of the <code>DataSource</code> changed to DELETED.</p> <p> <b>Caution:</b> The results of the <code>DeleteDataSource</code> operation are irreversible.</p>

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
    res, err := s.SDK.DeleteDataSource(ctx, operations.DeleteDataSourceRequest{
        DeleteDataSourceInput: shared.DeleteDataSourceInput{
            DataSourceID: "perferendis",
        },
        XAmzAlgorithm: sdk.String("doloremque"),
        XAmzContentSha256: sdk.String("reprehenderit"),
        XAmzCredential: sdk.String("ut"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("dolore"),
        XAmzTarget: operations.DeleteDataSourceXAmzTargetEnumAmazonMl20141212DeleteDataSource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteDataSourceOutput != nil {
        // handle response
    }
}
```

## DeleteEvaluation

<p>Assigns the <code>DELETED</code> status to an <code>Evaluation</code>, rendering it unusable.</p> <p>After invoking the <code>DeleteEvaluation</code> operation, you can use the <code>GetEvaluation</code> operation to verify that the status of the <code>Evaluation</code> changed to <code>DELETED</code>.</p> <p> <b>Caution:</b> The results of the <code>DeleteEvaluation</code> operation are irreversible.</p>

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
    res, err := s.SDK.DeleteEvaluation(ctx, operations.DeleteEvaluationRequest{
        DeleteEvaluationInput: shared.DeleteEvaluationInput{
            EvaluationID: "iusto",
        },
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("harum"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("commodi"),
        XAmzSignature: sdk.String("repudiandae"),
        XAmzSignedHeaders: sdk.String("quae"),
        XAmzTarget: operations.DeleteEvaluationXAmzTargetEnumAmazonMl20141212DeleteEvaluation,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteEvaluationOutput != nil {
        // handle response
    }
}
```

## DeleteMLModel

<p>Assigns the <code>DELETED</code> status to an <code>MLModel</code>, rendering it unusable.</p> <p>After using the <code>DeleteMLModel</code> operation, you can use the <code>GetMLModel</code> operation to verify that the status of the <code>MLModel</code> changed to DELETED.</p> <p> <b>Caution:</b> The result of the <code>DeleteMLModel</code> operation is irreversible.</p>

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
    res, err := s.SDK.DeleteMLModel(ctx, operations.DeleteMLModelRequest{
        DeleteMLModelInput: shared.DeleteMLModelInput{
            MLModelID: "ipsum",
        },
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("molestias"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("modi"),
        XAmzSignature: sdk.String("praesentium"),
        XAmzSignedHeaders: sdk.String("rem"),
        XAmzTarget: operations.DeleteMLModelXAmzTargetEnumAmazonMl20141212DeleteMlModel,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteMLModelOutput != nil {
        // handle response
    }
}
```

## DeleteRealtimeEndpoint

Deletes a real time endpoint of an <code>MLModel</code>.

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
    res, err := s.SDK.DeleteRealtimeEndpoint(ctx, operations.DeleteRealtimeEndpointRequest{
        DeleteRealtimeEndpointInput: shared.DeleteRealtimeEndpointInput{
            MLModelID: "voluptates",
        },
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("repudiandae"),
        XAmzCredential: sdk.String("sint"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("itaque"),
        XAmzSignature: sdk.String("incidunt"),
        XAmzSignedHeaders: sdk.String("enim"),
        XAmzTarget: operations.DeleteRealtimeEndpointXAmzTargetEnumAmazonMl20141212DeleteRealtimeEndpoint,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteRealtimeEndpointOutput != nil {
        // handle response
    }
}
```

## DeleteTags

<p>Deletes the specified tags associated with an ML object. After this operation is complete, you can't recover deleted tags.</p> <p>If you specify a tag that doesn't exist, Amazon ML ignores it.</p>

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
    res, err := s.SDK.DeleteTags(ctx, operations.DeleteTagsRequest{
        DeleteTagsInput: shared.DeleteTagsInput{
            ResourceID: "consequatur",
            ResourceType: shared.TaggableResourceTypeEnumEvaluation,
            TagKeys: []string{
                "explicabo",
                "deserunt",
                "distinctio",
                "quibusdam",
            },
        },
        XAmzAlgorithm: sdk.String("labore"),
        XAmzContentSha256: sdk.String("modi"),
        XAmzCredential: sdk.String("qui"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("cupiditate"),
        XAmzSignature: sdk.String("quos"),
        XAmzSignedHeaders: sdk.String("perferendis"),
        XAmzTarget: operations.DeleteTagsXAmzTargetEnumAmazonMl20141212DeleteTags,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteTagsOutput != nil {
        // handle response
    }
}
```

## DescribeBatchPredictions

Returns a list of <code>BatchPrediction</code> operations that match the search criteria in the request.

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
    res, err := s.SDK.DescribeBatchPredictions(ctx, operations.DescribeBatchPredictionsRequest{
        DescribeBatchPredictionsInput: shared.DescribeBatchPredictionsInput{
            Eq: sdk.String("magni"),
            FilterVariable: shared.BatchPredictionFilterVariableEnumDataSourceID.ToPointer(),
            Ge: sdk.String("ipsam"),
            Gt: sdk.String("alias"),
            Le: sdk.String("fugit"),
            Lt: sdk.String("dolorum"),
            Limit: sdk.Int64(569618),
            Ne: sdk.String("tempora"),
            NextToken: sdk.String("facilis"),
            Prefix: sdk.String("tempore"),
            SortOrder: shared.SortOrderEnumAsc.ToPointer(),
        },
        Limit: sdk.String("delectus"),
        NextToken: sdk.String("eum"),
        XAmzAlgorithm: sdk.String("non"),
        XAmzContentSha256: sdk.String("eligendi"),
        XAmzCredential: sdk.String("sint"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("necessitatibus"),
        XAmzSignedHeaders: sdk.String("sint"),
        XAmzTarget: operations.DescribeBatchPredictionsXAmzTargetEnumAmazonMl20141212DescribeBatchPredictions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeBatchPredictionsOutput != nil {
        // handle response
    }
}
```

## DescribeDataSources

Returns a list of <code>DataSource</code> that match the search criteria in the request.

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
    res, err := s.SDK.DescribeDataSources(ctx, operations.DescribeDataSourcesRequest{
        DescribeDataSourcesInput: shared.DescribeDataSourcesInput{
            Eq: sdk.String("officia"),
            FilterVariable: shared.DataSourceFilterVariableEnumLastUpdatedAt.ToPointer(),
            Ge: sdk.String("debitis"),
            Gt: sdk.String("a"),
            Le: sdk.String("dolorum"),
            Lt: sdk.String("in"),
            Limit: sdk.Int64(449198),
            Ne: sdk.String("illum"),
            NextToken: sdk.String("maiores"),
            Prefix: sdk.String("rerum"),
            SortOrder: shared.SortOrderEnumAsc.ToPointer(),
        },
        Limit: sdk.String("magnam"),
        NextToken: sdk.String("cumque"),
        XAmzAlgorithm: sdk.String("facere"),
        XAmzContentSha256: sdk.String("ea"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("non"),
        XAmzSignedHeaders: sdk.String("occaecati"),
        XAmzTarget: operations.DescribeDataSourcesXAmzTargetEnumAmazonMl20141212DescribeDataSources,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDataSourcesOutput != nil {
        // handle response
    }
}
```

## DescribeEvaluations

Returns a list of <code>DescribeEvaluations</code> that match the search criteria in the request.

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
    res, err := s.SDK.DescribeEvaluations(ctx, operations.DescribeEvaluationsRequest{
        DescribeEvaluationsInput: shared.DescribeEvaluationsInput{
            Eq: sdk.String("enim"),
            FilterVariable: shared.EvaluationFilterVariableEnumDataURI.ToPointer(),
            Ge: sdk.String("delectus"),
            Gt: sdk.String("quidem"),
            Le: sdk.String("provident"),
            Lt: sdk.String("nam"),
            Limit: sdk.Int64(659669),
            Ne: sdk.String("blanditiis"),
            NextToken: sdk.String("deleniti"),
            Prefix: sdk.String("sapiente"),
            SortOrder: shared.SortOrderEnumAsc.ToPointer(),
        },
        Limit: sdk.String("deserunt"),
        NextToken: sdk.String("nisi"),
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("nihil"),
        XAmzSignedHeaders: sdk.String("magnam"),
        XAmzTarget: operations.DescribeEvaluationsXAmzTargetEnumAmazonMl20141212DescribeEvaluations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeEvaluationsOutput != nil {
        // handle response
    }
}
```

## DescribeMLModels

Returns a list of <code>MLModel</code> that match the search criteria in the request.

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
    res, err := s.SDK.DescribeMLModels(ctx, operations.DescribeMLModelsRequest{
        DescribeMLModelsInput: shared.DescribeMLModelsInput{
            Eq: sdk.String("distinctio"),
            FilterVariable: shared.MLModelFilterVariableEnumRealtimeEndpointStatus.ToPointer(),
            Ge: sdk.String("labore"),
            Gt: sdk.String("labore"),
            Le: sdk.String("suscipit"),
            Lt: sdk.String("natus"),
            Limit: sdk.Int64(749170),
            Ne: sdk.String("eum"),
            NextToken: sdk.String("vero"),
            Prefix: sdk.String("aspernatur"),
            SortOrder: shared.SortOrderEnumAsc.ToPointer(),
        },
        Limit: sdk.String("magnam"),
        NextToken: sdk.String("et"),
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("ullam"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("quos"),
        XAmzSecurityToken: sdk.String("sint"),
        XAmzSignature: sdk.String("accusantium"),
        XAmzSignedHeaders: sdk.String("mollitia"),
        XAmzTarget: operations.DescribeMLModelsXAmzTargetEnumAmazonMl20141212DescribeMlModels,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeMLModelsOutput != nil {
        // handle response
    }
}
```

## DescribeTags

Describes one or more of the tags for your Amazon ML object.

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
    res, err := s.SDK.DescribeTags(ctx, operations.DescribeTagsRequest{
        DescribeTagsInput: shared.DescribeTagsInput{
            ResourceID: "reiciendis",
            ResourceType: shared.TaggableResourceTypeEnumEvaluation,
        },
        XAmzAlgorithm: sdk.String("ad"),
        XAmzContentSha256: sdk.String("eum"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("necessitatibus"),
        XAmzSecurityToken: sdk.String("odit"),
        XAmzSignature: sdk.String("nemo"),
        XAmzSignedHeaders: sdk.String("quasi"),
        XAmzTarget: operations.DescribeTagsXAmzTargetEnumAmazonMl20141212DescribeTags,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeTagsOutput != nil {
        // handle response
    }
}
```

## GetBatchPrediction

Returns a <code>BatchPrediction</code> that includes detailed metadata, status, and data file information for a <code>Batch Prediction</code> request.

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
    res, err := s.SDK.GetBatchPrediction(ctx, operations.GetBatchPredictionRequest{
        GetBatchPredictionInput: shared.GetBatchPredictionInput{
            BatchPredictionID: "iure",
        },
        XAmzAlgorithm: sdk.String("doloribus"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("eius"),
        XAmzDate: sdk.String("maxime"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("facilis"),
        XAmzSignedHeaders: sdk.String("in"),
        XAmzTarget: operations.GetBatchPredictionXAmzTargetEnumAmazonMl20141212GetBatchPrediction,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBatchPredictionOutput != nil {
        // handle response
    }
}
```

## GetDataSource

<p>Returns a <code>DataSource</code> that includes metadata and data file information, as well as the current status of the <code>DataSource</code>.</p> <p> <code>GetDataSource</code> provides results in normal or verbose format. The verbose format adds the schema description and the list of files pointed to by the DataSource to the normal format.</p>

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
    res, err := s.SDK.GetDataSource(ctx, operations.GetDataSourceRequest{
        GetDataSourceInput: shared.GetDataSourceInput{
            DataSourceID: "architecto",
            Verbose: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("repudiandae"),
        XAmzCredential: sdk.String("ullam"),
        XAmzDate: sdk.String("expedita"),
        XAmzSecurityToken: sdk.String("nihil"),
        XAmzSignature: sdk.String("repellat"),
        XAmzSignedHeaders: sdk.String("quibusdam"),
        XAmzTarget: operations.GetDataSourceXAmzTargetEnumAmazonMl20141212GetDataSource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDataSourceOutput != nil {
        // handle response
    }
}
```

## GetEvaluation

Returns an <code>Evaluation</code> that includes metadata as well as the current status of the <code>Evaluation</code>.

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
    res, err := s.SDK.GetEvaluation(ctx, operations.GetEvaluationRequest{
        GetEvaluationInput: shared.GetEvaluationInput{
            EvaluationID: "sed",
        },
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("pariatur"),
        XAmzCredential: sdk.String("accusantium"),
        XAmzDate: sdk.String("consequuntur"),
        XAmzSecurityToken: sdk.String("praesentium"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("magni"),
        XAmzTarget: operations.GetEvaluationXAmzTargetEnumAmazonMl20141212GetEvaluation,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEvaluationOutput != nil {
        // handle response
    }
}
```

## GetMLModel

<p>Returns an <code>MLModel</code> that includes detailed metadata, data source information, and the current status of the <code>MLModel</code>.</p> <p> <code>GetMLModel</code> provides results in normal or verbose format. </p>

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
    res, err := s.SDK.GetMLModel(ctx, operations.GetMLModelRequest{
        GetMLModelInput: shared.GetMLModelInput{
            MLModelID: "sunt",
            Verbose: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("quo"),
        XAmzContentSha256: sdk.String("illum"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("maxime"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("odit"),
        XAmzTarget: operations.GetMLModelXAmzTargetEnumAmazonMl20141212GetMlModel,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMLModelOutput != nil {
        // handle response
    }
}
```

## Predict

<p>Generates a prediction for the observation using the specified <code>ML Model</code>.</p> <p> <b>Note:</b> Not all response parameters will be populated. Whether a response parameter is populated depends on the type of model requested.</p>

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
    res, err := s.SDK.Predict(ctx, operations.PredictRequest{
        PredictInput: shared.PredictInput{
            MLModelID: "ea",
            PredictEndpoint: "accusantium",
            Record: map[string]string{
                "maiores": "quidem",
            },
        },
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("autem"),
        XAmzDate: sdk.String("nam"),
        XAmzSecurityToken: sdk.String("eaque"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("nemo"),
        XAmzTarget: operations.PredictXAmzTargetEnumAmazonMl20141212Predict,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PredictOutput != nil {
        // handle response
    }
}
```

## UpdateBatchPrediction

<p>Updates the <code>BatchPredictionName</code> of a <code>BatchPrediction</code>.</p> <p>You can use the <code>GetBatchPrediction</code> operation to view the contents of the updated data element.</p>

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
    res, err := s.SDK.UpdateBatchPrediction(ctx, operations.UpdateBatchPredictionRequest{
        UpdateBatchPredictionInput: shared.UpdateBatchPredictionInput{
            BatchPredictionID: "voluptatibus",
            BatchPredictionName: "perferendis",
        },
        XAmzAlgorithm: sdk.String("fugiat"),
        XAmzContentSha256: sdk.String("amet"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("cumque"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("libero"),
        XAmzTarget: operations.UpdateBatchPredictionXAmzTargetEnumAmazonMl20141212UpdateBatchPrediction,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateBatchPredictionOutput != nil {
        // handle response
    }
}
```

## UpdateDataSource

<p>Updates the <code>DataSourceName</code> of a <code>DataSource</code>.</p> <p>You can use the <code>GetDataSource</code> operation to view the contents of the updated data element.</p>

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
    res, err := s.SDK.UpdateDataSource(ctx, operations.UpdateDataSourceRequest{
        UpdateDataSourceInput: shared.UpdateDataSourceInput{
            DataSourceID: "nobis",
            DataSourceName: "dolores",
        },
        XAmzAlgorithm: sdk.String("quis"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("dignissimos"),
        XAmzDate: sdk.String("eaque"),
        XAmzSecurityToken: sdk.String("quis"),
        XAmzSignature: sdk.String("nesciunt"),
        XAmzSignedHeaders: sdk.String("eos"),
        XAmzTarget: operations.UpdateDataSourceXAmzTargetEnumAmazonMl20141212UpdateDataSource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDataSourceOutput != nil {
        // handle response
    }
}
```

## UpdateEvaluation

<p>Updates the <code>EvaluationName</code> of an <code>Evaluation</code>.</p> <p>You can use the <code>GetEvaluation</code> operation to view the contents of the updated data element.</p>

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
    res, err := s.SDK.UpdateEvaluation(ctx, operations.UpdateEvaluationRequest{
        UpdateEvaluationInput: shared.UpdateEvaluationInput{
            EvaluationID: "perferendis",
            EvaluationName: "dolores",
        },
        XAmzAlgorithm: sdk.String("minus"),
        XAmzContentSha256: sdk.String("quam"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("nostrum"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("recusandae"),
        XAmzTarget: operations.UpdateEvaluationXAmzTargetEnumAmazonMl20141212UpdateEvaluation,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateEvaluationOutput != nil {
        // handle response
    }
}
```

## UpdateMLModel

<p>Updates the <code>MLModelName</code> and the <code>ScoreThreshold</code> of an <code>MLModel</code>.</p> <p>You can use the <code>GetMLModel</code> operation to view the contents of the updated data element.</p>

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
    res, err := s.SDK.UpdateMLModel(ctx, operations.UpdateMLModelRequest{
        UpdateMLModelInput: shared.UpdateMLModelInput{
            MLModelID: "omnis",
            MLModelName: sdk.String("facilis"),
            ScoreThreshold: sdk.Float32(5966.56),
        },
        XAmzAlgorithm: sdk.String("voluptatem"),
        XAmzContentSha256: sdk.String("porro"),
        XAmzCredential: sdk.String("consequuntur"),
        XAmzDate: sdk.String("blanditiis"),
        XAmzSecurityToken: sdk.String("error"),
        XAmzSignature: sdk.String("eaque"),
        XAmzSignedHeaders: sdk.String("occaecati"),
        XAmzTarget: operations.UpdateMLModelXAmzTargetEnumAmazonMl20141212UpdateMlModel,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateMLModelOutput != nil {
        // handle response
    }
}
```
