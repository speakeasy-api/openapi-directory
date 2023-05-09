# SDK

## Overview

Definition of the public APIs exposed by Amazon Machine Learning

Amazon Web Services documentation
<https://docs.aws.amazon.com/machinelearning/>
### Available Operations

* [addTags](#addtags) - Adds one or more tags to an object, up to a limit of 10. Each tag consists of a key and an optional value. If you add a tag using a key that is already associated with the ML object, <code>AddTags</code> updates the tag's value.
* [createBatchPrediction](#createbatchprediction) - <p>Generates predictions for a group of observations. The observations to process exist in one or more data files referenced by a <code>DataSource</code>. This operation creates a new <code>BatchPrediction</code>, and uses an <code>MLModel</code> and the data files referenced by the <code>DataSource</code> as information sources. </p> <p> <code>CreateBatchPrediction</code> is an asynchronous operation. In response to <code>CreateBatchPrediction</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>BatchPrediction</code> status to <code>PENDING</code>. After the <code>BatchPrediction</code> completes, Amazon ML sets the status to <code>COMPLETED</code>. </p> <p>You can poll for status updates by using the <a>GetBatchPrediction</a> operation and checking the <code>Status</code> parameter of the result. After the <code>COMPLETED</code> status appears, the results are available in the location specified by the <code>OutputUri</code> parameter.</p>
* [createDataSourceFromRDS](#createdatasourcefromrds) - <p>Creates a <code>DataSource</code> object from an <a href="http://aws.amazon.com/rds/"> Amazon Relational Database Service</a> (Amazon RDS). A <code>DataSource</code> references data that can be used to perform <code>CreateMLModel</code>, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations.</p> <p> <code>CreateDataSourceFromRDS</code> is an asynchronous operation. In response to <code>CreateDataSourceFromRDS</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>DataSource</code> status to <code>PENDING</code>. After the <code>DataSource</code> is created and ready for use, Amazon ML sets the <code>Status</code> parameter to <code>COMPLETED</code>. <code>DataSource</code> in the <code>COMPLETED</code> or <code>PENDING</code> state can be used only to perform <code>&gt;CreateMLModel</code>&gt;, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations. </p> <p> If Amazon ML cannot accept the input source, it sets the <code>Status</code> parameter to <code>FAILED</code> and includes an error message in the <code>Message</code> attribute of the <code>GetDataSource</code> operation response. </p>
* [createDataSourceFromRedshift](#createdatasourcefromredshift) - <p>Creates a <code>DataSource</code> from a database hosted on an Amazon Redshift cluster. A <code>DataSource</code> references data that can be used to perform either <code>CreateMLModel</code>, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations.</p> <p> <code>CreateDataSourceFromRedshift</code> is an asynchronous operation. In response to <code>CreateDataSourceFromRedshift</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>DataSource</code> status to <code>PENDING</code>. After the <code>DataSource</code> is created and ready for use, Amazon ML sets the <code>Status</code> parameter to <code>COMPLETED</code>. <code>DataSource</code> in <code>COMPLETED</code> or <code>PENDING</code> states can be used to perform only <code>CreateMLModel</code>, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations. </p> <p> If Amazon ML can't accept the input source, it sets the <code>Status</code> parameter to <code>FAILED</code> and includes an error message in the <code>Message</code> attribute of the <code>GetDataSource</code> operation response. </p> <p>The observations should be contained in the database hosted on an Amazon Redshift cluster and should be specified by a <code>SelectSqlQuery</code> query. Amazon ML executes an <code>Unload</code> command in Amazon Redshift to transfer the result set of the <code>SelectSqlQuery</code> query to <code>S3StagingLocation</code>.</p> <p>After the <code>DataSource</code> has been created, it's ready for use in evaluations and batch predictions. If you plan to use the <code>DataSource</code> to train an <code>MLModel</code>, the <code>DataSource</code> also requires a recipe. A recipe describes how each input variable will be used in training an <code>MLModel</code>. Will the variable be included or excluded from training? Will the variable be manipulated; for example, will it be combined with another variable or will it be split apart into word combinations? The recipe provides answers to these questions.</p> <p>You can't change an existing datasource, but you can copy and modify the settings from an existing Amazon Redshift datasource to create a new datasource. To do so, call <code>GetDataSource</code> for an existing datasource and copy the values to a <code>CreateDataSource</code> call. Change the settings that you want to change and make sure that all required fields have the appropriate values.</p>
* [createDataSourceFromS3](#createdatasourcefroms3) - <p>Creates a <code>DataSource</code> object. A <code>DataSource</code> references data that can be used to perform <code>CreateMLModel</code>, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations.</p> <p> <code>CreateDataSourceFromS3</code> is an asynchronous operation. In response to <code>CreateDataSourceFromS3</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>DataSource</code> status to <code>PENDING</code>. After the <code>DataSource</code> has been created and is ready for use, Amazon ML sets the <code>Status</code> parameter to <code>COMPLETED</code>. <code>DataSource</code> in the <code>COMPLETED</code> or <code>PENDING</code> state can be used to perform only <code>CreateMLModel</code>, <code>CreateEvaluation</code> or <code>CreateBatchPrediction</code> operations. </p> <p> If Amazon ML can't accept the input source, it sets the <code>Status</code> parameter to <code>FAILED</code> and includes an error message in the <code>Message</code> attribute of the <code>GetDataSource</code> operation response. </p> <p>The observation data used in a <code>DataSource</code> should be ready to use; that is, it should have a consistent structure, and missing data values should be kept to a minimum. The observation data must reside in one or more .csv files in an Amazon Simple Storage Service (Amazon S3) location, along with a schema that describes the data items by name and type. The same schema must be used for all of the data files referenced by the <code>DataSource</code>. </p> <p>After the <code>DataSource</code> has been created, it's ready to use in evaluations and batch predictions. If you plan to use the <code>DataSource</code> to train an <code>MLModel</code>, the <code>DataSource</code> also needs a recipe. A recipe describes how each input variable will be used in training an <code>MLModel</code>. Will the variable be included or excluded from training? Will the variable be manipulated; for example, will it be combined with another variable or will it be split apart into word combinations? The recipe provides answers to these questions.</p>
* [createEvaluation](#createevaluation) - <p>Creates a new <code>Evaluation</code> of an <code>MLModel</code>. An <code>MLModel</code> is evaluated on a set of observations associated to a <code>DataSource</code>. Like a <code>DataSource</code> for an <code>MLModel</code>, the <code>DataSource</code> for an <code>Evaluation</code> contains values for the <code>Target Variable</code>. The <code>Evaluation</code> compares the predicted result for each observation to the actual outcome and provides a summary so that you know how effective the <code>MLModel</code> functions on the test data. Evaluation generates a relevant performance metric, such as BinaryAUC, RegressionRMSE or MulticlassAvgFScore based on the corresponding <code>MLModelType</code>: <code>BINARY</code>, <code>REGRESSION</code> or <code>MULTICLASS</code>. </p> <p> <code>CreateEvaluation</code> is an asynchronous operation. In response to <code>CreateEvaluation</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the evaluation status to <code>PENDING</code>. After the <code>Evaluation</code> is created and ready for use, Amazon ML sets the status to <code>COMPLETED</code>. </p> <p>You can use the <code>GetEvaluation</code> operation to check progress of the evaluation during the creation operation.</p>
* [createMLModel](#createmlmodel) - <p>Creates a new <code>MLModel</code> using the <code>DataSource</code> and the recipe as information sources. </p> <p>An <code>MLModel</code> is nearly immutable. Users can update only the <code>MLModelName</code> and the <code>ScoreThreshold</code> in an <code>MLModel</code> without creating a new <code>MLModel</code>. </p> <p> <code>CreateMLModel</code> is an asynchronous operation. In response to <code>CreateMLModel</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>MLModel</code> status to <code>PENDING</code>. After the <code>MLModel</code> has been created and ready is for use, Amazon ML sets the status to <code>COMPLETED</code>. </p> <p>You can use the <code>GetMLModel</code> operation to check the progress of the <code>MLModel</code> during the creation operation.</p> <p> <code>CreateMLModel</code> requires a <code>DataSource</code> with computed statistics, which can be created by setting <code>ComputeStatistics</code> to <code>true</code> in <code>CreateDataSourceFromRDS</code>, <code>CreateDataSourceFromS3</code>, or <code>CreateDataSourceFromRedshift</code> operations. </p>
* [createRealtimeEndpoint](#createrealtimeendpoint) - Creates a real-time endpoint for the <code>MLModel</code>. The endpoint contains the URI of the <code>MLModel</code>; that is, the location to send real-time prediction requests for the specified <code>MLModel</code>.
* [deleteBatchPrediction](#deletebatchprediction) - <p>Assigns the DELETED status to a <code>BatchPrediction</code>, rendering it unusable.</p> <p>After using the <code>DeleteBatchPrediction</code> operation, you can use the <a>GetBatchPrediction</a> operation to verify that the status of the <code>BatchPrediction</code> changed to DELETED.</p> <p> <b>Caution:</b> The result of the <code>DeleteBatchPrediction</code> operation is irreversible.</p>
* [deleteDataSource](#deletedatasource) - <p>Assigns the DELETED status to a <code>DataSource</code>, rendering it unusable.</p> <p>After using the <code>DeleteDataSource</code> operation, you can use the <a>GetDataSource</a> operation to verify that the status of the <code>DataSource</code> changed to DELETED.</p> <p> <b>Caution:</b> The results of the <code>DeleteDataSource</code> operation are irreversible.</p>
* [deleteEvaluation](#deleteevaluation) - <p>Assigns the <code>DELETED</code> status to an <code>Evaluation</code>, rendering it unusable.</p> <p>After invoking the <code>DeleteEvaluation</code> operation, you can use the <code>GetEvaluation</code> operation to verify that the status of the <code>Evaluation</code> changed to <code>DELETED</code>.</p> <p> <b>Caution:</b> The results of the <code>DeleteEvaluation</code> operation are irreversible.</p>
* [deleteMLModel](#deletemlmodel) - <p>Assigns the <code>DELETED</code> status to an <code>MLModel</code>, rendering it unusable.</p> <p>After using the <code>DeleteMLModel</code> operation, you can use the <code>GetMLModel</code> operation to verify that the status of the <code>MLModel</code> changed to DELETED.</p> <p> <b>Caution:</b> The result of the <code>DeleteMLModel</code> operation is irreversible.</p>
* [deleteRealtimeEndpoint](#deleterealtimeendpoint) - Deletes a real time endpoint of an <code>MLModel</code>.
* [deleteTags](#deletetags) - <p>Deletes the specified tags associated with an ML object. After this operation is complete, you can't recover deleted tags.</p> <p>If you specify a tag that doesn't exist, Amazon ML ignores it.</p>
* [describeBatchPredictions](#describebatchpredictions) - Returns a list of <code>BatchPrediction</code> operations that match the search criteria in the request.
* [describeDataSources](#describedatasources) - Returns a list of <code>DataSource</code> that match the search criteria in the request.
* [describeEvaluations](#describeevaluations) - Returns a list of <code>DescribeEvaluations</code> that match the search criteria in the request.
* [describeMLModels](#describemlmodels) - Returns a list of <code>MLModel</code> that match the search criteria in the request.
* [describeTags](#describetags) - Describes one or more of the tags for your Amazon ML object.
* [getBatchPrediction](#getbatchprediction) - Returns a <code>BatchPrediction</code> that includes detailed metadata, status, and data file information for a <code>Batch Prediction</code> request.
* [getDataSource](#getdatasource) - <p>Returns a <code>DataSource</code> that includes metadata and data file information, as well as the current status of the <code>DataSource</code>.</p> <p> <code>GetDataSource</code> provides results in normal or verbose format. The verbose format adds the schema description and the list of files pointed to by the DataSource to the normal format.</p>
* [getEvaluation](#getevaluation) - Returns an <code>Evaluation</code> that includes metadata as well as the current status of the <code>Evaluation</code>.
* [getMLModel](#getmlmodel) - <p>Returns an <code>MLModel</code> that includes detailed metadata, data source information, and the current status of the <code>MLModel</code>.</p> <p> <code>GetMLModel</code> provides results in normal or verbose format. </p>
* [predict](#predict) - <p>Generates a prediction for the observation using the specified <code>ML Model</code>.</p> <p> <b>Note:</b> Not all response parameters will be populated. Whether a response parameter is populated depends on the type of model requested.</p>
* [updateBatchPrediction](#updatebatchprediction) - <p>Updates the <code>BatchPredictionName</code> of a <code>BatchPrediction</code>.</p> <p>You can use the <code>GetBatchPrediction</code> operation to view the contents of the updated data element.</p>
* [updateDataSource](#updatedatasource) - <p>Updates the <code>DataSourceName</code> of a <code>DataSource</code>.</p> <p>You can use the <code>GetDataSource</code> operation to view the contents of the updated data element.</p>
* [updateEvaluation](#updateevaluation) - <p>Updates the <code>EvaluationName</code> of an <code>Evaluation</code>.</p> <p>You can use the <code>GetEvaluation</code> operation to view the contents of the updated data element.</p>
* [updateMLModel](#updatemlmodel) - <p>Updates the <code>MLModelName</code> and the <code>ScoreThreshold</code> of an <code>MLModel</code>.</p> <p>You can use the <code>GetMLModel</code> operation to view the contents of the updated data element.</p>

## addTags

Adds one or more tags to an object, up to a limit of 10. Each tag consists of a key and an optional value. If you add a tag using a key that is already associated with the ML object, <code>AddTags</code> updates the tag's value.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddTagsRequest;
import org.openapis.openapi.models.operations.AddTagsResponse;
import org.openapis.openapi.models.operations.AddTagsXAmzTargetEnum;
import org.openapis.openapi.models.shared.AddTagsInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TaggableResourceTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddTagsRequest req = new AddTagsRequest(                new AddTagsInput("minus", TaggableResourceTypeEnum.ML_MODEL,                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag() {{
                                                    key = "iusto";
                                                    value = "excepturi";
                                                }}),
                                                add(new Tag() {{
                                                    key = "nisi";
                                                    value = "recusandae";
                                                }}),
                                                add(new Tag() {{
                                                    key = "temporibus";
                                                    value = "ab";
                                                }}),
                                            }});, AddTagsXAmzTargetEnum.AMAZON_ML20141212_ADD_TAGS) {{
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "veritatis";
                xAmzCredential = "deserunt";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "repellendus";
                xAmzSignedHeaders = "sapiente";
            }};            

            AddTagsResponse res = sdk.sdk.addTags(req);

            if (res.addTagsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createBatchPrediction

<p>Generates predictions for a group of observations. The observations to process exist in one or more data files referenced by a <code>DataSource</code>. This operation creates a new <code>BatchPrediction</code>, and uses an <code>MLModel</code> and the data files referenced by the <code>DataSource</code> as information sources. </p> <p> <code>CreateBatchPrediction</code> is an asynchronous operation. In response to <code>CreateBatchPrediction</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>BatchPrediction</code> status to <code>PENDING</code>. After the <code>BatchPrediction</code> completes, Amazon ML sets the status to <code>COMPLETED</code>. </p> <p>You can poll for status updates by using the <a>GetBatchPrediction</a> operation and checking the <code>Status</code> parameter of the result. After the <code>COMPLETED</code> status appears, the results are available in the location specified by the <code>OutputUri</code> parameter.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateBatchPredictionRequest;
import org.openapis.openapi.models.operations.CreateBatchPredictionResponse;
import org.openapis.openapi.models.operations.CreateBatchPredictionXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateBatchPredictionInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateBatchPredictionRequest req = new CreateBatchPredictionRequest(                new CreateBatchPredictionInput("odit", "at", "at", "maiores") {{
                                batchPredictionName = "molestiae";
                            }};, CreateBatchPredictionXAmzTargetEnum.AMAZON_ML20141212_CREATE_BATCH_PREDICTION) {{
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "quod";
                xAmzCredential = "esse";
                xAmzDate = "totam";
                xAmzSecurityToken = "porro";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "dicta";
            }};            

            CreateBatchPredictionResponse res = sdk.sdk.createBatchPrediction(req);

            if (res.createBatchPredictionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDataSourceFromRDS

<p>Creates a <code>DataSource</code> object from an <a href="http://aws.amazon.com/rds/"> Amazon Relational Database Service</a> (Amazon RDS). A <code>DataSource</code> references data that can be used to perform <code>CreateMLModel</code>, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations.</p> <p> <code>CreateDataSourceFromRDS</code> is an asynchronous operation. In response to <code>CreateDataSourceFromRDS</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>DataSource</code> status to <code>PENDING</code>. After the <code>DataSource</code> is created and ready for use, Amazon ML sets the <code>Status</code> parameter to <code>COMPLETED</code>. <code>DataSource</code> in the <code>COMPLETED</code> or <code>PENDING</code> state can be used only to perform <code>&gt;CreateMLModel</code>&gt;, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations. </p> <p> If Amazon ML cannot accept the input source, it sets the <code>Status</code> parameter to <code>FAILED</code> and includes an error message in the <code>Message</code> attribute of the <code>GetDataSource</code> operation response. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDataSourceFromRDSRequest;
import org.openapis.openapi.models.operations.CreateDataSourceFromRDSResponse;
import org.openapis.openapi.models.operations.CreateDataSourceFromRDSXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateDataSourceFromRDSInput;
import org.openapis.openapi.models.shared.RDSDataSpec;
import org.openapis.openapi.models.shared.RDSDatabase;
import org.openapis.openapi.models.shared.RDSDatabaseCredentials;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDataSourceFromRDSRequest req = new CreateDataSourceFromRDSRequest(                new CreateDataSourceFromRDSInput("officia",                 new RDSDataSpec(                new RDSDatabaseCredentials("occaecati", "fugit");,                 new RDSDatabase("deleniti", "hic");, "optio", "totam",                 new String[]{{
                                                                add("commodi"),
                                                            }}, "molestiae", "modi", "qui") {{
                                                dataRearrangement = "impedit";
                                                dataSchema = "cum";
                                                dataSchemaUri = "esse";
                                            }};, "ipsum") {{
                                computeStatistics = false;
                                dataSourceName = "excepturi";
                            }};, CreateDataSourceFromRDSXAmzTargetEnum.AMAZON_ML20141212_CREATE_DATA_SOURCE_FROM_RDS) {{
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "ad";
                xAmzDate = "natus";
                xAmzSecurityToken = "sed";
                xAmzSignature = "iste";
                xAmzSignedHeaders = "dolor";
            }};            

            CreateDataSourceFromRDSResponse res = sdk.sdk.createDataSourceFromRDS(req);

            if (res.createDataSourceFromRDSOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDataSourceFromRedshift

<p>Creates a <code>DataSource</code> from a database hosted on an Amazon Redshift cluster. A <code>DataSource</code> references data that can be used to perform either <code>CreateMLModel</code>, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations.</p> <p> <code>CreateDataSourceFromRedshift</code> is an asynchronous operation. In response to <code>CreateDataSourceFromRedshift</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>DataSource</code> status to <code>PENDING</code>. After the <code>DataSource</code> is created and ready for use, Amazon ML sets the <code>Status</code> parameter to <code>COMPLETED</code>. <code>DataSource</code> in <code>COMPLETED</code> or <code>PENDING</code> states can be used to perform only <code>CreateMLModel</code>, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations. </p> <p> If Amazon ML can't accept the input source, it sets the <code>Status</code> parameter to <code>FAILED</code> and includes an error message in the <code>Message</code> attribute of the <code>GetDataSource</code> operation response. </p> <p>The observations should be contained in the database hosted on an Amazon Redshift cluster and should be specified by a <code>SelectSqlQuery</code> query. Amazon ML executes an <code>Unload</code> command in Amazon Redshift to transfer the result set of the <code>SelectSqlQuery</code> query to <code>S3StagingLocation</code>.</p> <p>After the <code>DataSource</code> has been created, it's ready for use in evaluations and batch predictions. If you plan to use the <code>DataSource</code> to train an <code>MLModel</code>, the <code>DataSource</code> also requires a recipe. A recipe describes how each input variable will be used in training an <code>MLModel</code>. Will the variable be included or excluded from training? Will the variable be manipulated; for example, will it be combined with another variable or will it be split apart into word combinations? The recipe provides answers to these questions.</p> <p>You can't change an existing datasource, but you can copy and modify the settings from an existing Amazon Redshift datasource to create a new datasource. To do so, call <code>GetDataSource</code> for an existing datasource and copy the values to a <code>CreateDataSource</code> call. Change the settings that you want to change and make sure that all required fields have the appropriate values.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDataSourceFromRedshiftRequest;
import org.openapis.openapi.models.operations.CreateDataSourceFromRedshiftResponse;
import org.openapis.openapi.models.operations.CreateDataSourceFromRedshiftXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateDataSourceFromRedshiftInput;
import org.openapis.openapi.models.shared.RedshiftDataSpec;
import org.openapis.openapi.models.shared.RedshiftDatabase;
import org.openapis.openapi.models.shared.RedshiftDatabaseCredentials;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDataSourceFromRedshiftRequest req = new CreateDataSourceFromRedshiftRequest(                new CreateDataSourceFromRedshiftInput("laboriosam",                 new RedshiftDataSpec(                new RedshiftDatabaseCredentials("hic", "saepe");,                 new RedshiftDatabase("fuga", "in");, "corporis", "iste") {{
                                                dataRearrangement = "iure";
                                                dataSchema = "saepe";
                                                dataSchemaUri = "quidem";
                                            }};, "architecto") {{
                                computeStatistics = false;
                                dataSourceName = "ipsa";
                            }};, CreateDataSourceFromRedshiftXAmzTargetEnum.AMAZON_ML20141212_CREATE_DATA_SOURCE_FROM_REDSHIFT) {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "est";
                xAmzCredential = "mollitia";
                xAmzDate = "laborum";
                xAmzSecurityToken = "dolores";
                xAmzSignature = "dolorem";
                xAmzSignedHeaders = "corporis";
            }};            

            CreateDataSourceFromRedshiftResponse res = sdk.sdk.createDataSourceFromRedshift(req);

            if (res.createDataSourceFromRedshiftOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDataSourceFromS3

<p>Creates a <code>DataSource</code> object. A <code>DataSource</code> references data that can be used to perform <code>CreateMLModel</code>, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations.</p> <p> <code>CreateDataSourceFromS3</code> is an asynchronous operation. In response to <code>CreateDataSourceFromS3</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>DataSource</code> status to <code>PENDING</code>. After the <code>DataSource</code> has been created and is ready for use, Amazon ML sets the <code>Status</code> parameter to <code>COMPLETED</code>. <code>DataSource</code> in the <code>COMPLETED</code> or <code>PENDING</code> state can be used to perform only <code>CreateMLModel</code>, <code>CreateEvaluation</code> or <code>CreateBatchPrediction</code> operations. </p> <p> If Amazon ML can't accept the input source, it sets the <code>Status</code> parameter to <code>FAILED</code> and includes an error message in the <code>Message</code> attribute of the <code>GetDataSource</code> operation response. </p> <p>The observation data used in a <code>DataSource</code> should be ready to use; that is, it should have a consistent structure, and missing data values should be kept to a minimum. The observation data must reside in one or more .csv files in an Amazon Simple Storage Service (Amazon S3) location, along with a schema that describes the data items by name and type. The same schema must be used for all of the data files referenced by the <code>DataSource</code>. </p> <p>After the <code>DataSource</code> has been created, it's ready to use in evaluations and batch predictions. If you plan to use the <code>DataSource</code> to train an <code>MLModel</code>, the <code>DataSource</code> also needs a recipe. A recipe describes how each input variable will be used in training an <code>MLModel</code>. Will the variable be included or excluded from training? Will the variable be manipulated; for example, will it be combined with another variable or will it be split apart into word combinations? The recipe provides answers to these questions.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDataSourceFromS3Request;
import org.openapis.openapi.models.operations.CreateDataSourceFromS3Response;
import org.openapis.openapi.models.operations.CreateDataSourceFromS3XAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateDataSourceFromS3Input;
import org.openapis.openapi.models.shared.S3DataSpec;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDataSourceFromS3Request req = new CreateDataSourceFromS3Request(                new CreateDataSourceFromS3Input("nobis",                 new S3DataSpec("enim") {{
                                                dataRearrangement = "omnis";
                                                dataSchema = "nemo";
                                                dataSchemaLocationS3 = "minima";
                                            }};) {{
                                computeStatistics = false;
                                dataSourceName = "excepturi";
                            }};, CreateDataSourceFromS3XAmzTargetEnum.AMAZON_ML20141212_CREATE_DATA_SOURCE_FROM_S3) {{
                xAmzAlgorithm = "accusantium";
                xAmzContentSha256 = "iure";
                xAmzCredential = "culpa";
                xAmzDate = "doloribus";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "mollitia";
            }};            

            CreateDataSourceFromS3Response res = sdk.sdk.createDataSourceFromS3(req);

            if (res.createDataSourceFromS3Output != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createEvaluation

<p>Creates a new <code>Evaluation</code> of an <code>MLModel</code>. An <code>MLModel</code> is evaluated on a set of observations associated to a <code>DataSource</code>. Like a <code>DataSource</code> for an <code>MLModel</code>, the <code>DataSource</code> for an <code>Evaluation</code> contains values for the <code>Target Variable</code>. The <code>Evaluation</code> compares the predicted result for each observation to the actual outcome and provides a summary so that you know how effective the <code>MLModel</code> functions on the test data. Evaluation generates a relevant performance metric, such as BinaryAUC, RegressionRMSE or MulticlassAvgFScore based on the corresponding <code>MLModelType</code>: <code>BINARY</code>, <code>REGRESSION</code> or <code>MULTICLASS</code>. </p> <p> <code>CreateEvaluation</code> is an asynchronous operation. In response to <code>CreateEvaluation</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the evaluation status to <code>PENDING</code>. After the <code>Evaluation</code> is created and ready for use, Amazon ML sets the status to <code>COMPLETED</code>. </p> <p>You can use the <code>GetEvaluation</code> operation to check progress of the evaluation during the creation operation.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateEvaluationRequest;
import org.openapis.openapi.models.operations.CreateEvaluationResponse;
import org.openapis.openapi.models.operations.CreateEvaluationXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateEvaluationInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateEvaluationRequest req = new CreateEvaluationRequest(                new CreateEvaluationInput("culpa", "consequuntur", "repellat") {{
                                evaluationName = "mollitia";
                            }};, CreateEvaluationXAmzTargetEnum.AMAZON_ML20141212_CREATE_EVALUATION) {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "numquam";
                xAmzCredential = "commodi";
                xAmzDate = "quam";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "velit";
                xAmzSignedHeaders = "error";
            }};            

            CreateEvaluationResponse res = sdk.sdk.createEvaluation(req);

            if (res.createEvaluationOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createMLModel

<p>Creates a new <code>MLModel</code> using the <code>DataSource</code> and the recipe as information sources. </p> <p>An <code>MLModel</code> is nearly immutable. Users can update only the <code>MLModelName</code> and the <code>ScoreThreshold</code> in an <code>MLModel</code> without creating a new <code>MLModel</code>. </p> <p> <code>CreateMLModel</code> is an asynchronous operation. In response to <code>CreateMLModel</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>MLModel</code> status to <code>PENDING</code>. After the <code>MLModel</code> has been created and ready is for use, Amazon ML sets the status to <code>COMPLETED</code>. </p> <p>You can use the <code>GetMLModel</code> operation to check the progress of the <code>MLModel</code> during the creation operation.</p> <p> <code>CreateMLModel</code> requires a <code>DataSource</code> with computed statistics, which can be created by setting <code>ComputeStatistics</code> to <code>true</code> in <code>CreateDataSourceFromRDS</code>, <code>CreateDataSourceFromS3</code>, or <code>CreateDataSourceFromRedshift</code> operations. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateMLModelRequest;
import org.openapis.openapi.models.operations.CreateMLModelResponse;
import org.openapis.openapi.models.operations.CreateMLModelXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateMLModelInput;
import org.openapis.openapi.models.shared.MLModelTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateMLModelRequest req = new CreateMLModelRequest(                new CreateMLModelInput("quis", MLModelTypeEnum.REGRESSION, "laborum") {{
                                mlModelName = "animi";
                                parameters = new java.util.HashMap<String, String>() {{
                                    put("odit", "quo");
                                    put("sequi", "tenetur");
                                }};
                                recipe = "ipsam";
                                recipeUri = "id";
                            }};, CreateMLModelXAmzTargetEnum.AMAZON_ML20141212_CREATE_ML_MODEL) {{
                xAmzAlgorithm = "possimus";
                xAmzContentSha256 = "aut";
                xAmzCredential = "quasi";
                xAmzDate = "error";
                xAmzSecurityToken = "temporibus";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "quasi";
            }};            

            CreateMLModelResponse res = sdk.sdk.createMLModel(req);

            if (res.createMLModelOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createRealtimeEndpoint

Creates a real-time endpoint for the <code>MLModel</code>. The endpoint contains the URI of the <code>MLModel</code>; that is, the location to send real-time prediction requests for the specified <code>MLModel</code>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRealtimeEndpointRequest;
import org.openapis.openapi.models.operations.CreateRealtimeEndpointResponse;
import org.openapis.openapi.models.operations.CreateRealtimeEndpointXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateRealtimeEndpointInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateRealtimeEndpointRequest req = new CreateRealtimeEndpointRequest(                new CreateRealtimeEndpointInput("voluptatibus");, CreateRealtimeEndpointXAmzTargetEnum.AMAZON_ML20141212_CREATE_REALTIME_ENDPOINT) {{
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "praesentium";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "voluptate";
            }};            

            CreateRealtimeEndpointResponse res = sdk.sdk.createRealtimeEndpoint(req);

            if (res.createRealtimeEndpointOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteBatchPrediction

<p>Assigns the DELETED status to a <code>BatchPrediction</code>, rendering it unusable.</p> <p>After using the <code>DeleteBatchPrediction</code> operation, you can use the <a>GetBatchPrediction</a> operation to verify that the status of the <code>BatchPrediction</code> changed to DELETED.</p> <p> <b>Caution:</b> The result of the <code>DeleteBatchPrediction</code> operation is irreversible.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteBatchPredictionRequest;
import org.openapis.openapi.models.operations.DeleteBatchPredictionResponse;
import org.openapis.openapi.models.operations.DeleteBatchPredictionXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteBatchPredictionInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteBatchPredictionRequest req = new DeleteBatchPredictionRequest(                new DeleteBatchPredictionInput("perferendis");, DeleteBatchPredictionXAmzTargetEnum.AMAZON_ML20141212_DELETE_BATCH_PREDICTION) {{
                xAmzAlgorithm = "doloremque";
                xAmzContentSha256 = "reprehenderit";
                xAmzCredential = "ut";
                xAmzDate = "maiores";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "dolore";
            }};            

            DeleteBatchPredictionResponse res = sdk.sdk.deleteBatchPrediction(req);

            if (res.deleteBatchPredictionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDataSource

<p>Assigns the DELETED status to a <code>DataSource</code>, rendering it unusable.</p> <p>After using the <code>DeleteDataSource</code> operation, you can use the <a>GetDataSource</a> operation to verify that the status of the <code>DataSource</code> changed to DELETED.</p> <p> <b>Caution:</b> The results of the <code>DeleteDataSource</code> operation are irreversible.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDataSourceRequest;
import org.openapis.openapi.models.operations.DeleteDataSourceResponse;
import org.openapis.openapi.models.operations.DeleteDataSourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteDataSourceInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDataSourceRequest req = new DeleteDataSourceRequest(                new DeleteDataSourceInput("dicta");, DeleteDataSourceXAmzTargetEnum.AMAZON_ML20141212_DELETE_DATA_SOURCE) {{
                xAmzAlgorithm = "harum";
                xAmzContentSha256 = "enim";
                xAmzCredential = "accusamus";
                xAmzDate = "commodi";
                xAmzSecurityToken = "repudiandae";
                xAmzSignature = "quae";
                xAmzSignedHeaders = "ipsum";
            }};            

            DeleteDataSourceResponse res = sdk.sdk.deleteDataSource(req);

            if (res.deleteDataSourceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteEvaluation

<p>Assigns the <code>DELETED</code> status to an <code>Evaluation</code>, rendering it unusable.</p> <p>After invoking the <code>DeleteEvaluation</code> operation, you can use the <code>GetEvaluation</code> operation to verify that the status of the <code>Evaluation</code> changed to <code>DELETED</code>.</p> <p> <b>Caution:</b> The results of the <code>DeleteEvaluation</code> operation are irreversible.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteEvaluationRequest;
import org.openapis.openapi.models.operations.DeleteEvaluationResponse;
import org.openapis.openapi.models.operations.DeleteEvaluationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteEvaluationInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteEvaluationRequest req = new DeleteEvaluationRequest(                new DeleteEvaluationInput("molestias");, DeleteEvaluationXAmzTargetEnum.AMAZON_ML20141212_DELETE_EVALUATION) {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "modi";
                xAmzDate = "praesentium";
                xAmzSecurityToken = "rem";
                xAmzSignature = "voluptates";
                xAmzSignedHeaders = "quasi";
            }};            

            DeleteEvaluationResponse res = sdk.sdk.deleteEvaluation(req);

            if (res.deleteEvaluationOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteMLModel

<p>Assigns the <code>DELETED</code> status to an <code>MLModel</code>, rendering it unusable.</p> <p>After using the <code>DeleteMLModel</code> operation, you can use the <code>GetMLModel</code> operation to verify that the status of the <code>MLModel</code> changed to DELETED.</p> <p> <b>Caution:</b> The result of the <code>DeleteMLModel</code> operation is irreversible.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteMLModelRequest;
import org.openapis.openapi.models.operations.DeleteMLModelResponse;
import org.openapis.openapi.models.operations.DeleteMLModelXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteMLModelInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteMLModelRequest req = new DeleteMLModelRequest(                new DeleteMLModelInput("sint");, DeleteMLModelXAmzTargetEnum.AMAZON_ML20141212_DELETE_ML_MODEL) {{
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "itaque";
                xAmzCredential = "incidunt";
                xAmzDate = "enim";
                xAmzSecurityToken = "consequatur";
                xAmzSignature = "est";
                xAmzSignedHeaders = "quibusdam";
            }};            

            DeleteMLModelResponse res = sdk.sdk.deleteMLModel(req);

            if (res.deleteMLModelOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRealtimeEndpoint

Deletes a real time endpoint of an <code>MLModel</code>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRealtimeEndpointRequest;
import org.openapis.openapi.models.operations.DeleteRealtimeEndpointResponse;
import org.openapis.openapi.models.operations.DeleteRealtimeEndpointXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteRealtimeEndpointInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteRealtimeEndpointRequest req = new DeleteRealtimeEndpointRequest(                new DeleteRealtimeEndpointInput("deserunt");, DeleteRealtimeEndpointXAmzTargetEnum.AMAZON_ML20141212_DELETE_REALTIME_ENDPOINT) {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "labore";
                xAmzDate = "modi";
                xAmzSecurityToken = "qui";
                xAmzSignature = "aliquid";
                xAmzSignedHeaders = "cupiditate";
            }};            

            DeleteRealtimeEndpointResponse res = sdk.sdk.deleteRealtimeEndpoint(req);

            if (res.deleteRealtimeEndpointOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteTags

<p>Deletes the specified tags associated with an ML object. After this operation is complete, you can't recover deleted tags.</p> <p>If you specify a tag that doesn't exist, Amazon ML ignores it.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTagsRequest;
import org.openapis.openapi.models.operations.DeleteTagsResponse;
import org.openapis.openapi.models.operations.DeleteTagsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteTagsInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TaggableResourceTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteTagsRequest req = new DeleteTagsRequest(                new DeleteTagsInput("perferendis", TaggableResourceTypeEnum.BATCH_PREDICTION,                 new String[]{{
                                                add("ipsam"),
                                                add("alias"),
                                                add("fugit"),
                                                add("dolorum"),
                                            }});, DeleteTagsXAmzTargetEnum.AMAZON_ML20141212_DELETE_TAGS) {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "facilis";
                xAmzDate = "tempore";
                xAmzSecurityToken = "labore";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "eum";
            }};            

            DeleteTagsResponse res = sdk.sdk.deleteTags(req);

            if (res.deleteTagsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeBatchPredictions

Returns a list of <code>BatchPrediction</code> operations that match the search criteria in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeBatchPredictionsRequest;
import org.openapis.openapi.models.operations.DescribeBatchPredictionsResponse;
import org.openapis.openapi.models.operations.DescribeBatchPredictionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchPredictionFilterVariableEnum;
import org.openapis.openapi.models.shared.DescribeBatchPredictionsInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortOrderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeBatchPredictionsRequest req = new DescribeBatchPredictionsRequest(                new DescribeBatchPredictionsInput() {{
                                eq = "eligendi";
                                filterVariable = BatchPredictionFilterVariableEnum.IAM_USER;
                                ge = "aliquid";
                                gt = "provident";
                                le = "necessitatibus";
                                lt = "sint";
                                limit = 638921L;
                                ne = "dolor";
                                nextToken = "debitis";
                                prefix = "a";
                                sortOrder = SortOrderEnum.DSC;
                            }};, DescribeBatchPredictionsXAmzTargetEnum.AMAZON_ML20141212_DESCRIBE_BATCH_PREDICTIONS) {{
                limit = "in";
                nextToken = "in";
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "rerum";
                xAmzDate = "dicta";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "cumque";
                xAmzSignedHeaders = "facere";
            }};            

            DescribeBatchPredictionsResponse res = sdk.sdk.describeBatchPredictions(req);

            if (res.describeBatchPredictionsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeDataSources

Returns a list of <code>DataSource</code> that match the search criteria in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeDataSourcesRequest;
import org.openapis.openapi.models.operations.DescribeDataSourcesResponse;
import org.openapis.openapi.models.operations.DescribeDataSourcesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DataSourceFilterVariableEnum;
import org.openapis.openapi.models.shared.DescribeDataSourcesInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortOrderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeDataSourcesRequest req = new DescribeDataSourcesRequest(                new DescribeDataSourcesInput() {{
                                eq = "aliquid";
                                filterVariable = DataSourceFilterVariableEnum.DATA_LOCATION_S3;
                                ge = "accusamus";
                                gt = "non";
                                le = "occaecati";
                                lt = "enim";
                                limit = 881736L;
                                ne = "delectus";
                                nextToken = "quidem";
                                prefix = "provident";
                                sortOrder = SortOrderEnum.DSC;
                            }};, DescribeDataSourcesXAmzTargetEnum.AMAZON_ML20141212_DESCRIBE_DATA_SOURCES) {{
                limit = "id";
                nextToken = "blanditiis";
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "amet";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "nisi";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "natus";
            }};            

            DescribeDataSourcesResponse res = sdk.sdk.describeDataSources(req);

            if (res.describeDataSourcesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeEvaluations

Returns a list of <code>DescribeEvaluations</code> that match the search criteria in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeEvaluationsRequest;
import org.openapis.openapi.models.operations.DescribeEvaluationsResponse;
import org.openapis.openapi.models.operations.DescribeEvaluationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeEvaluationsInput;
import org.openapis.openapi.models.shared.EvaluationFilterVariableEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortOrderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeEvaluationsRequest req = new DescribeEvaluationsRequest(                new DescribeEvaluationsInput() {{
                                eq = "molestiae";
                                filterVariable = EvaluationFilterVariableEnum.CREATED_AT;
                                ge = "nihil";
                                gt = "magnam";
                                le = "distinctio";
                                lt = "id";
                                limit = 287991L;
                                ne = "labore";
                                nextToken = "suscipit";
                                prefix = "natus";
                                sortOrder = SortOrderEnum.DSC;
                            }};, DescribeEvaluationsXAmzTargetEnum.AMAZON_ML20141212_DESCRIBE_EVALUATIONS) {{
                limit = "eum";
                nextToken = "vero";
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "magnam";
                xAmzDate = "et";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "ullam";
                xAmzSignedHeaders = "provident";
            }};            

            DescribeEvaluationsResponse res = sdk.sdk.describeEvaluations(req);

            if (res.describeEvaluationsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeMLModels

Returns a list of <code>MLModel</code> that match the search criteria in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeMLModelsRequest;
import org.openapis.openapi.models.operations.DescribeMLModelsResponse;
import org.openapis.openapi.models.operations.DescribeMLModelsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeMLModelsInput;
import org.openapis.openapi.models.shared.MLModelFilterVariableEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortOrderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeMLModelsRequest req = new DescribeMLModelsRequest(                new DescribeMLModelsInput() {{
                                eq = "sint";
                                filterVariable = MLModelFilterVariableEnum.CREATED_AT;
                                ge = "mollitia";
                                gt = "reiciendis";
                                le = "mollitia";
                                lt = "ad";
                                limit = 431418L;
                                ne = "dolor";
                                nextToken = "necessitatibus";
                                prefix = "odit";
                                sortOrder = SortOrderEnum.ASC;
                            }};, DescribeMLModelsXAmzTargetEnum.AMAZON_ML20141212_DESCRIBE_ML_MODELS) {{
                limit = "quasi";
                nextToken = "iure";
                xAmzAlgorithm = "doloribus";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "eius";
                xAmzDate = "maxime";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "in";
            }};            

            DescribeMLModelsResponse res = sdk.sdk.describeMLModels(req);

            if (res.describeMLModelsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeTags

Describes one or more of the tags for your Amazon ML object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeTagsRequest;
import org.openapis.openapi.models.operations.DescribeTagsResponse;
import org.openapis.openapi.models.operations.DescribeTagsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeTagsInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TaggableResourceTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeTagsRequest req = new DescribeTagsRequest(                new DescribeTagsInput("architecto", TaggableResourceTypeEnum.ML_MODEL);, DescribeTagsXAmzTargetEnum.AMAZON_ML20141212_DESCRIBE_TAGS) {{
                xAmzAlgorithm = "ullam";
                xAmzContentSha256 = "expedita";
                xAmzCredential = "nihil";
                xAmzDate = "repellat";
                xAmzSecurityToken = "quibusdam";
                xAmzSignature = "sed";
                xAmzSignedHeaders = "saepe";
            }};            

            DescribeTagsResponse res = sdk.sdk.describeTags(req);

            if (res.describeTagsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBatchPrediction

Returns a <code>BatchPrediction</code> that includes detailed metadata, status, and data file information for a <code>Batch Prediction</code> request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBatchPredictionRequest;
import org.openapis.openapi.models.operations.GetBatchPredictionResponse;
import org.openapis.openapi.models.operations.GetBatchPredictionXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetBatchPredictionInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetBatchPredictionRequest req = new GetBatchPredictionRequest(                new GetBatchPredictionInput("accusantium");, GetBatchPredictionXAmzTargetEnum.AMAZON_ML20141212_GET_BATCH_PREDICTION) {{
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "natus";
                xAmzDate = "magni";
                xAmzSecurityToken = "sunt";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "illum";
            }};            

            GetBatchPredictionResponse res = sdk.sdk.getBatchPrediction(req);

            if (res.getBatchPredictionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDataSource

<p>Returns a <code>DataSource</code> that includes metadata and data file information, as well as the current status of the <code>DataSource</code>.</p> <p> <code>GetDataSource</code> provides results in normal or verbose format. The verbose format adds the schema description and the list of files pointed to by the DataSource to the normal format.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDataSourceRequest;
import org.openapis.openapi.models.operations.GetDataSourceResponse;
import org.openapis.openapi.models.operations.GetDataSourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetDataSourceInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDataSourceRequest req = new GetDataSourceRequest(                new GetDataSourceInput("maxime") {{
                                verbose = false;
                            }};, GetDataSourceXAmzTargetEnum.AMAZON_ML20141212_GET_DATA_SOURCE) {{
                xAmzAlgorithm = "ea";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "odit";
                xAmzDate = "ea";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "maiores";
            }};            

            GetDataSourceResponse res = sdk.sdk.getDataSource(req);

            if (res.getDataSourceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEvaluation

Returns an <code>Evaluation</code> that includes metadata as well as the current status of the <code>Evaluation</code>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEvaluationRequest;
import org.openapis.openapi.models.operations.GetEvaluationResponse;
import org.openapis.openapi.models.operations.GetEvaluationXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetEvaluationInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetEvaluationRequest req = new GetEvaluationRequest(                new GetEvaluationInput("ipsam");, GetEvaluationXAmzTargetEnum.AMAZON_ML20141212_GET_EVALUATION) {{
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "autem";
                xAmzCredential = "nam";
                xAmzDate = "eaque";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "nemo";
                xAmzSignedHeaders = "voluptatibus";
            }};            

            GetEvaluationResponse res = sdk.sdk.getEvaluation(req);

            if (res.getEvaluationOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMLModel

<p>Returns an <code>MLModel</code> that includes detailed metadata, data source information, and the current status of the <code>MLModel</code>.</p> <p> <code>GetMLModel</code> provides results in normal or verbose format. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMLModelRequest;
import org.openapis.openapi.models.operations.GetMLModelResponse;
import org.openapis.openapi.models.operations.GetMLModelXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetMLModelInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetMLModelRequest req = new GetMLModelRequest(                new GetMLModelInput("fugiat") {{
                                verbose = false;
                            }};, GetMLModelXAmzTargetEnum.AMAZON_ML20141212_GET_ML_MODEL) {{
                xAmzAlgorithm = "amet";
                xAmzContentSha256 = "aut";
                xAmzCredential = "cumque";
                xAmzDate = "corporis";
                xAmzSecurityToken = "hic";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "nobis";
            }};            

            GetMLModelResponse res = sdk.sdk.getMLModel(req);

            if (res.getMLModelOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## predict

<p>Generates a prediction for the observation using the specified <code>ML Model</code>.</p> <p> <b>Note:</b> Not all response parameters will be populated. Whether a response parameter is populated depends on the type of model requested.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PredictRequest;
import org.openapis.openapi.models.operations.PredictResponse;
import org.openapis.openapi.models.operations.PredictXAmzTargetEnum;
import org.openapis.openapi.models.shared.PredictInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PredictRequest req = new PredictRequest(                new PredictInput("quis", "totam",                 new java.util.HashMap<String, String>() {{
                                                put("eaque", "quis");
                                                put("nesciunt", "eos");
                                            }});, PredictXAmzTargetEnum.AMAZON_ML20141212_PREDICT) {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "dolores";
                xAmzCredential = "minus";
                xAmzDate = "quam";
                xAmzSecurityToken = "dolor";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "nostrum";
            }};            

            PredictResponse res = sdk.sdk.predict(req);

            if (res.predictOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateBatchPrediction

<p>Updates the <code>BatchPredictionName</code> of a <code>BatchPrediction</code>.</p> <p>You can use the <code>GetBatchPrediction</code> operation to view the contents of the updated data element.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateBatchPredictionRequest;
import org.openapis.openapi.models.operations.UpdateBatchPredictionResponse;
import org.openapis.openapi.models.operations.UpdateBatchPredictionXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateBatchPredictionInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateBatchPredictionRequest req = new UpdateBatchPredictionRequest(                new UpdateBatchPredictionInput("recusandae", "omnis");, UpdateBatchPredictionXAmzTargetEnum.AMAZON_ML20141212_UPDATE_BATCH_PREDICTION) {{
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "perspiciatis";
                xAmzCredential = "voluptatem";
                xAmzDate = "porro";
                xAmzSecurityToken = "consequuntur";
                xAmzSignature = "blanditiis";
                xAmzSignedHeaders = "error";
            }};            

            UpdateBatchPredictionResponse res = sdk.sdk.updateBatchPrediction(req);

            if (res.updateBatchPredictionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDataSource

<p>Updates the <code>DataSourceName</code> of a <code>DataSource</code>.</p> <p>You can use the <code>GetDataSource</code> operation to view the contents of the updated data element.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDataSourceRequest;
import org.openapis.openapi.models.operations.UpdateDataSourceResponse;
import org.openapis.openapi.models.operations.UpdateDataSourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateDataSourceInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDataSourceRequest req = new UpdateDataSourceRequest(                new UpdateDataSourceInput("occaecati", "rerum");, UpdateDataSourceXAmzTargetEnum.AMAZON_ML20141212_UPDATE_DATA_SOURCE) {{
                xAmzAlgorithm = "adipisci";
                xAmzContentSha256 = "asperiores";
                xAmzCredential = "earum";
                xAmzDate = "modi";
                xAmzSecurityToken = "iste";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "deleniti";
            }};            

            UpdateDataSourceResponse res = sdk.sdk.updateDataSource(req);

            if (res.updateDataSourceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateEvaluation

<p>Updates the <code>EvaluationName</code> of an <code>Evaluation</code>.</p> <p>You can use the <code>GetEvaluation</code> operation to view the contents of the updated data element.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateEvaluationRequest;
import org.openapis.openapi.models.operations.UpdateEvaluationResponse;
import org.openapis.openapi.models.operations.UpdateEvaluationXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateEvaluationInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateEvaluationRequest req = new UpdateEvaluationRequest(                new UpdateEvaluationInput("provident", "nobis");, UpdateEvaluationXAmzTargetEnum.AMAZON_ML20141212_UPDATE_EVALUATION) {{
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "quaerat";
                xAmzDate = "quos";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "dolorem";
                xAmzSignedHeaders = "dolorem";
            }};            

            UpdateEvaluationResponse res = sdk.sdk.updateEvaluation(req);

            if (res.updateEvaluationOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateMLModel

<p>Updates the <code>MLModelName</code> and the <code>ScoreThreshold</code> of an <code>MLModel</code>.</p> <p>You can use the <code>GetMLModel</code> operation to view the contents of the updated data element.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateMLModelRequest;
import org.openapis.openapi.models.operations.UpdateMLModelResponse;
import org.openapis.openapi.models.operations.UpdateMLModelXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateMLModelInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateMLModelRequest req = new UpdateMLModelRequest(                new UpdateMLModelInput("qui") {{
                                mlModelName = "ipsum";
                                scoreThreshold = 9443.73;
                            }};, UpdateMLModelXAmzTargetEnum.AMAZON_ML20141212_UPDATE_ML_MODEL) {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "cum";
                xAmzCredential = "voluptate";
                xAmzDate = "dignissimos";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "amet";
                xAmzSignedHeaders = "dolorum";
            }};            

            UpdateMLModelResponse res = sdk.sdk.updateMLModel(req);

            if (res.updateMLModelOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
