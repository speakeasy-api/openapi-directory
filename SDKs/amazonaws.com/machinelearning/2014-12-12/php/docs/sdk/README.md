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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddTagsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddTagsInput;
use \OpenAPI\OpenAPI\Models\Shared\TaggableResourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\AddTagsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddTagsRequest();
    $request->addTagsInput = new AddTagsInput();
    $request->addTagsInput->resourceId = 'deserunt';
    $request->addTagsInput->resourceType = TaggableResourceTypeEnum::DATA_SOURCE;
    $request->addTagsInput->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->xAmzTarget = AddTagsXAmzTargetEnum::AMAZON_ML20141212_ADD_TAGS;

    $response = $sdk->sdk->addTags($request);

    if ($response->addTagsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createBatchPrediction

<p>Generates predictions for a group of observations. The observations to process exist in one or more data files referenced by a <code>DataSource</code>. This operation creates a new <code>BatchPrediction</code>, and uses an <code>MLModel</code> and the data files referenced by the <code>DataSource</code> as information sources. </p> <p> <code>CreateBatchPrediction</code> is an asynchronous operation. In response to <code>CreateBatchPrediction</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>BatchPrediction</code> status to <code>PENDING</code>. After the <code>BatchPrediction</code> completes, Amazon ML sets the status to <code>COMPLETED</code>. </p> <p>You can poll for status updates by using the <a>GetBatchPrediction</a> operation and checking the <code>Status</code> parameter of the result. After the <code>COMPLETED</code> status appears, the results are available in the location specified by the <code>OutputUri</code> parameter.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateBatchPredictionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateBatchPredictionInput;
use \OpenAPI\OpenAPI\Models\Operations\CreateBatchPredictionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateBatchPredictionRequest();
    $request->createBatchPredictionInput = new CreateBatchPredictionInput();
    $request->createBatchPredictionInput->batchPredictionDataSourceId = 'minus';
    $request->createBatchPredictionInput->batchPredictionId = 'placeat';
    $request->createBatchPredictionInput->batchPredictionName = 'voluptatum';
    $request->createBatchPredictionInput->mlModelId = 'iusto';
    $request->createBatchPredictionInput->outputUri = 'excepturi';
    $request->xAmzAlgorithm = 'nisi';
    $request->xAmzContentSha256 = 'recusandae';
    $request->xAmzCredential = 'temporibus';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->xAmzTarget = CreateBatchPredictionXAmzTargetEnum::AMAZON_ML20141212_CREATE_BATCH_PREDICTION;

    $response = $sdk->sdk->createBatchPrediction($request);

    if ($response->createBatchPredictionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDataSourceFromRDS

<p>Creates a <code>DataSource</code> object from an <a href="http://aws.amazon.com/rds/"> Amazon Relational Database Service</a> (Amazon RDS). A <code>DataSource</code> references data that can be used to perform <code>CreateMLModel</code>, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations.</p> <p> <code>CreateDataSourceFromRDS</code> is an asynchronous operation. In response to <code>CreateDataSourceFromRDS</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>DataSource</code> status to <code>PENDING</code>. After the <code>DataSource</code> is created and ready for use, Amazon ML sets the <code>Status</code> parameter to <code>COMPLETED</code>. <code>DataSource</code> in the <code>COMPLETED</code> or <code>PENDING</code> state can be used only to perform <code>&gt;CreateMLModel</code>&gt;, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations. </p> <p> If Amazon ML cannot accept the input source, it sets the <code>Status</code> parameter to <code>FAILED</code> and includes an error message in the <code>Message</code> attribute of the <code>GetDataSource</code> operation response. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDataSourceFromRDSRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateDataSourceFromRDSInput;
use \OpenAPI\OpenAPI\Models\Shared\RDSDataSpec;
use \OpenAPI\OpenAPI\Models\Shared\RDSDatabaseCredentials;
use \OpenAPI\OpenAPI\Models\Shared\RDSDatabase;
use \OpenAPI\OpenAPI\Models\Operations\CreateDataSourceFromRDSXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDataSourceFromRDSRequest();
    $request->createDataSourceFromRDSInput = new CreateDataSourceFromRDSInput();
    $request->createDataSourceFromRDSInput->computeStatistics = false;
    $request->createDataSourceFromRDSInput->dataSourceId = 'perferendis';
    $request->createDataSourceFromRDSInput->dataSourceName = 'ipsam';
    $request->createDataSourceFromRDSInput->rdsData = new RDSDataSpec();
    $request->createDataSourceFromRDSInput->rdsData->dataRearrangement = 'repellendus';
    $request->createDataSourceFromRDSInput->rdsData->dataSchema = 'sapiente';
    $request->createDataSourceFromRDSInput->rdsData->dataSchemaUri = 'quo';
    $request->createDataSourceFromRDSInput->rdsData->databaseCredentials = new RDSDatabaseCredentials();
    $request->createDataSourceFromRDSInput->rdsData->databaseCredentials->password = 'odit';
    $request->createDataSourceFromRDSInput->rdsData->databaseCredentials->username = 'Sarah.Strosin79';
    $request->createDataSourceFromRDSInput->rdsData->databaseInformation = new RDSDatabase();
    $request->createDataSourceFromRDSInput->rdsData->databaseInformation->databaseName = 'quod';
    $request->createDataSourceFromRDSInput->rdsData->databaseInformation->instanceIdentifier = 'esse';
    $request->createDataSourceFromRDSInput->rdsData->resourceRole = 'totam';
    $request->createDataSourceFromRDSInput->rdsData->s3StagingLocation = 'porro';
    $request->createDataSourceFromRDSInput->rdsData->securityGroupIds = [
        'dicta',
        'nam',
        'officia',
    ];
    $request->createDataSourceFromRDSInput->rdsData->selectSqlQuery = 'occaecati';
    $request->createDataSourceFromRDSInput->rdsData->serviceRole = 'fugit';
    $request->createDataSourceFromRDSInput->rdsData->subnetId = 'deleniti';
    $request->createDataSourceFromRDSInput->roleARN = 'hic';
    $request->xAmzAlgorithm = 'optio';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'beatae';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'qui';
    $request->xAmzTarget = CreateDataSourceFromRDSXAmzTargetEnum::AMAZON_ML20141212_CREATE_DATA_SOURCE_FROM_RDS;

    $response = $sdk->sdk->createDataSourceFromRDS($request);

    if ($response->createDataSourceFromRDSOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDataSourceFromRedshift

<p>Creates a <code>DataSource</code> from a database hosted on an Amazon Redshift cluster. A <code>DataSource</code> references data that can be used to perform either <code>CreateMLModel</code>, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations.</p> <p> <code>CreateDataSourceFromRedshift</code> is an asynchronous operation. In response to <code>CreateDataSourceFromRedshift</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>DataSource</code> status to <code>PENDING</code>. After the <code>DataSource</code> is created and ready for use, Amazon ML sets the <code>Status</code> parameter to <code>COMPLETED</code>. <code>DataSource</code> in <code>COMPLETED</code> or <code>PENDING</code> states can be used to perform only <code>CreateMLModel</code>, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations. </p> <p> If Amazon ML can't accept the input source, it sets the <code>Status</code> parameter to <code>FAILED</code> and includes an error message in the <code>Message</code> attribute of the <code>GetDataSource</code> operation response. </p> <p>The observations should be contained in the database hosted on an Amazon Redshift cluster and should be specified by a <code>SelectSqlQuery</code> query. Amazon ML executes an <code>Unload</code> command in Amazon Redshift to transfer the result set of the <code>SelectSqlQuery</code> query to <code>S3StagingLocation</code>.</p> <p>After the <code>DataSource</code> has been created, it's ready for use in evaluations and batch predictions. If you plan to use the <code>DataSource</code> to train an <code>MLModel</code>, the <code>DataSource</code> also requires a recipe. A recipe describes how each input variable will be used in training an <code>MLModel</code>. Will the variable be included or excluded from training? Will the variable be manipulated; for example, will it be combined with another variable or will it be split apart into word combinations? The recipe provides answers to these questions.</p> <p>You can't change an existing datasource, but you can copy and modify the settings from an existing Amazon Redshift datasource to create a new datasource. To do so, call <code>GetDataSource</code> for an existing datasource and copy the values to a <code>CreateDataSource</code> call. Change the settings that you want to change and make sure that all required fields have the appropriate values.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDataSourceFromRedshiftRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateDataSourceFromRedshiftInput;
use \OpenAPI\OpenAPI\Models\Shared\RedshiftDataSpec;
use \OpenAPI\OpenAPI\Models\Shared\RedshiftDatabaseCredentials;
use \OpenAPI\OpenAPI\Models\Shared\RedshiftDatabase;
use \OpenAPI\OpenAPI\Models\Operations\CreateDataSourceFromRedshiftXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDataSourceFromRedshiftRequest();
    $request->createDataSourceFromRedshiftInput = new CreateDataSourceFromRedshiftInput();
    $request->createDataSourceFromRedshiftInput->computeStatistics = false;
    $request->createDataSourceFromRedshiftInput->dataSourceId = 'impedit';
    $request->createDataSourceFromRedshiftInput->dataSourceName = 'cum';
    $request->createDataSourceFromRedshiftInput->dataSpec = new RedshiftDataSpec();
    $request->createDataSourceFromRedshiftInput->dataSpec->dataRearrangement = 'esse';
    $request->createDataSourceFromRedshiftInput->dataSpec->dataSchema = 'ipsum';
    $request->createDataSourceFromRedshiftInput->dataSpec->dataSchemaUri = 'excepturi';
    $request->createDataSourceFromRedshiftInput->dataSpec->databaseCredentials = new RedshiftDatabaseCredentials();
    $request->createDataSourceFromRedshiftInput->dataSpec->databaseCredentials->password = 'aspernatur';
    $request->createDataSourceFromRedshiftInput->dataSpec->databaseCredentials->username = 'Aiden.Hane';
    $request->createDataSourceFromRedshiftInput->dataSpec->databaseInformation = new RedshiftDatabase();
    $request->createDataSourceFromRedshiftInput->dataSpec->databaseInformation->clusterIdentifier = 'iste';
    $request->createDataSourceFromRedshiftInput->dataSpec->databaseInformation->databaseName = 'dolor';
    $request->createDataSourceFromRedshiftInput->dataSpec->s3StagingLocation = 'natus';
    $request->createDataSourceFromRedshiftInput->dataSpec->selectSqlQuery = 'laboriosam';
    $request->createDataSourceFromRedshiftInput->roleARN = 'hic';
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'fuga';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'iste';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'saepe';
    $request->xAmzTarget = CreateDataSourceFromRedshiftXAmzTargetEnum::AMAZON_ML20141212_CREATE_DATA_SOURCE_FROM_REDSHIFT;

    $response = $sdk->sdk->createDataSourceFromRedshift($request);

    if ($response->createDataSourceFromRedshiftOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDataSourceFromS3

<p>Creates a <code>DataSource</code> object. A <code>DataSource</code> references data that can be used to perform <code>CreateMLModel</code>, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations.</p> <p> <code>CreateDataSourceFromS3</code> is an asynchronous operation. In response to <code>CreateDataSourceFromS3</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>DataSource</code> status to <code>PENDING</code>. After the <code>DataSource</code> has been created and is ready for use, Amazon ML sets the <code>Status</code> parameter to <code>COMPLETED</code>. <code>DataSource</code> in the <code>COMPLETED</code> or <code>PENDING</code> state can be used to perform only <code>CreateMLModel</code>, <code>CreateEvaluation</code> or <code>CreateBatchPrediction</code> operations. </p> <p> If Amazon ML can't accept the input source, it sets the <code>Status</code> parameter to <code>FAILED</code> and includes an error message in the <code>Message</code> attribute of the <code>GetDataSource</code> operation response. </p> <p>The observation data used in a <code>DataSource</code> should be ready to use; that is, it should have a consistent structure, and missing data values should be kept to a minimum. The observation data must reside in one or more .csv files in an Amazon Simple Storage Service (Amazon S3) location, along with a schema that describes the data items by name and type. The same schema must be used for all of the data files referenced by the <code>DataSource</code>. </p> <p>After the <code>DataSource</code> has been created, it's ready to use in evaluations and batch predictions. If you plan to use the <code>DataSource</code> to train an <code>MLModel</code>, the <code>DataSource</code> also needs a recipe. A recipe describes how each input variable will be used in training an <code>MLModel</code>. Will the variable be included or excluded from training? Will the variable be manipulated; for example, will it be combined with another variable or will it be split apart into word combinations? The recipe provides answers to these questions.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDataSourceFromS3Request;
use \OpenAPI\OpenAPI\Models\Shared\CreateDataSourceFromS3Input;
use \OpenAPI\OpenAPI\Models\Shared\S3DataSpec;
use \OpenAPI\OpenAPI\Models\Operations\CreateDataSourceFromS3XAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDataSourceFromS3Request();
    $request->createDataSourceFromS3Input = new CreateDataSourceFromS3Input();
    $request->createDataSourceFromS3Input->computeStatistics = false;
    $request->createDataSourceFromS3Input->dataSourceId = 'quidem';
    $request->createDataSourceFromS3Input->dataSourceName = 'architecto';
    $request->createDataSourceFromS3Input->dataSpec = new S3DataSpec();
    $request->createDataSourceFromS3Input->dataSpec->dataLocationS3 = 'ipsa';
    $request->createDataSourceFromS3Input->dataSpec->dataRearrangement = 'reiciendis';
    $request->createDataSourceFromS3Input->dataSpec->dataSchema = 'est';
    $request->createDataSourceFromS3Input->dataSpec->dataSchemaLocationS3 = 'mollitia';
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'explicabo';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'enim';
    $request->xAmzTarget = CreateDataSourceFromS3XAmzTargetEnum::AMAZON_ML20141212_CREATE_DATA_SOURCE_FROM_S3;

    $response = $sdk->sdk->createDataSourceFromS3($request);

    if ($response->createDataSourceFromS3Output !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createEvaluation

<p>Creates a new <code>Evaluation</code> of an <code>MLModel</code>. An <code>MLModel</code> is evaluated on a set of observations associated to a <code>DataSource</code>. Like a <code>DataSource</code> for an <code>MLModel</code>, the <code>DataSource</code> for an <code>Evaluation</code> contains values for the <code>Target Variable</code>. The <code>Evaluation</code> compares the predicted result for each observation to the actual outcome and provides a summary so that you know how effective the <code>MLModel</code> functions on the test data. Evaluation generates a relevant performance metric, such as BinaryAUC, RegressionRMSE or MulticlassAvgFScore based on the corresponding <code>MLModelType</code>: <code>BINARY</code>, <code>REGRESSION</code> or <code>MULTICLASS</code>. </p> <p> <code>CreateEvaluation</code> is an asynchronous operation. In response to <code>CreateEvaluation</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the evaluation status to <code>PENDING</code>. After the <code>Evaluation</code> is created and ready for use, Amazon ML sets the status to <code>COMPLETED</code>. </p> <p>You can use the <code>GetEvaluation</code> operation to check progress of the evaluation during the creation operation.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateEvaluationRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateEvaluationInput;
use \OpenAPI\OpenAPI\Models\Operations\CreateEvaluationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateEvaluationRequest();
    $request->createEvaluationInput = new CreateEvaluationInput();
    $request->createEvaluationInput->evaluationDataSourceId = 'omnis';
    $request->createEvaluationInput->evaluationId = 'nemo';
    $request->createEvaluationInput->evaluationName = 'minima';
    $request->createEvaluationInput->mlModelId = 'excepturi';
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'culpa';
    $request->xAmzDate = 'doloribus';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'mollitia';
    $request->xAmzTarget = CreateEvaluationXAmzTargetEnum::AMAZON_ML20141212_CREATE_EVALUATION;

    $response = $sdk->sdk->createEvaluation($request);

    if ($response->createEvaluationOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createMLModel

<p>Creates a new <code>MLModel</code> using the <code>DataSource</code> and the recipe as information sources. </p> <p>An <code>MLModel</code> is nearly immutable. Users can update only the <code>MLModelName</code> and the <code>ScoreThreshold</code> in an <code>MLModel</code> without creating a new <code>MLModel</code>. </p> <p> <code>CreateMLModel</code> is an asynchronous operation. In response to <code>CreateMLModel</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>MLModel</code> status to <code>PENDING</code>. After the <code>MLModel</code> has been created and ready is for use, Amazon ML sets the status to <code>COMPLETED</code>. </p> <p>You can use the <code>GetMLModel</code> operation to check the progress of the <code>MLModel</code> during the creation operation.</p> <p> <code>CreateMLModel</code> requires a <code>DataSource</code> with computed statistics, which can be created by setting <code>ComputeStatistics</code> to <code>true</code> in <code>CreateDataSourceFromRDS</code>, <code>CreateDataSourceFromS3</code>, or <code>CreateDataSourceFromRedshift</code> operations. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateMLModelRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateMLModelInput;
use \OpenAPI\OpenAPI\Models\Shared\MLModelTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateMLModelXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateMLModelRequest();
    $request->createMLModelInput = new CreateMLModelInput();
    $request->createMLModelInput->mlModelId = 'dolorem';
    $request->createMLModelInput->mlModelName = 'culpa';
    $request->createMLModelInput->mlModelType = MLModelTypeEnum::REGRESSION;
    $request->createMLModelInput->parameters = [
        'mollitia' => 'occaecati',
        'numquam' => 'commodi',
        'quam' => 'molestiae',
        'velit' => 'error',
    ];
    $request->createMLModelInput->recipe = 'quia';
    $request->createMLModelInput->recipeUri = 'quis';
    $request->createMLModelInput->trainingDataSourceId = 'vitae';
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'animi';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'odit';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'sequi';
    $request->xAmzSignedHeaders = 'tenetur';
    $request->xAmzTarget = CreateMLModelXAmzTargetEnum::AMAZON_ML20141212_CREATE_ML_MODEL;

    $response = $sdk->sdk->createMLModel($request);

    if ($response->createMLModelOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createRealtimeEndpoint

Creates a real-time endpoint for the <code>MLModel</code>. The endpoint contains the URI of the <code>MLModel</code>; that is, the location to send real-time prediction requests for the specified <code>MLModel</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateRealtimeEndpointRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateRealtimeEndpointInput;
use \OpenAPI\OpenAPI\Models\Operations\CreateRealtimeEndpointXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateRealtimeEndpointRequest();
    $request->createRealtimeEndpointInput = new CreateRealtimeEndpointInput();
    $request->createRealtimeEndpointInput->mlModelId = 'ipsam';
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'possimus';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'temporibus';
    $request->xAmzSignedHeaders = 'laborum';
    $request->xAmzTarget = CreateRealtimeEndpointXAmzTargetEnum::AMAZON_ML20141212_CREATE_REALTIME_ENDPOINT;

    $response = $sdk->sdk->createRealtimeEndpoint($request);

    if ($response->createRealtimeEndpointOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteBatchPrediction

<p>Assigns the DELETED status to a <code>BatchPrediction</code>, rendering it unusable.</p> <p>After using the <code>DeleteBatchPrediction</code> operation, you can use the <a>GetBatchPrediction</a> operation to verify that the status of the <code>BatchPrediction</code> changed to DELETED.</p> <p> <b>Caution:</b> The result of the <code>DeleteBatchPrediction</code> operation is irreversible.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBatchPredictionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteBatchPredictionInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBatchPredictionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteBatchPredictionRequest();
    $request->deleteBatchPredictionInput = new DeleteBatchPredictionInput();
    $request->deleteBatchPredictionInput->batchPredictionId = 'quasi';
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->xAmzTarget = DeleteBatchPredictionXAmzTargetEnum::AMAZON_ML20141212_DELETE_BATCH_PREDICTION;

    $response = $sdk->sdk->deleteBatchPrediction($request);

    if ($response->deleteBatchPredictionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDataSource

<p>Assigns the DELETED status to a <code>DataSource</code>, rendering it unusable.</p> <p>After using the <code>DeleteDataSource</code> operation, you can use the <a>GetDataSource</a> operation to verify that the status of the <code>DataSource</code> changed to DELETED.</p> <p> <b>Caution:</b> The results of the <code>DeleteDataSource</code> operation are irreversible.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDataSourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteDataSourceInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDataSourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDataSourceRequest();
    $request->deleteDataSourceInput = new DeleteDataSourceInput();
    $request->deleteDataSourceInput->dataSourceId = 'omnis';
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'doloremque';
    $request->xAmzSecurityToken = 'reprehenderit';
    $request->xAmzSignature = 'ut';
    $request->xAmzSignedHeaders = 'maiores';
    $request->xAmzTarget = DeleteDataSourceXAmzTargetEnum::AMAZON_ML20141212_DELETE_DATA_SOURCE;

    $response = $sdk->sdk->deleteDataSource($request);

    if ($response->deleteDataSourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteEvaluation

<p>Assigns the <code>DELETED</code> status to an <code>Evaluation</code>, rendering it unusable.</p> <p>After invoking the <code>DeleteEvaluation</code> operation, you can use the <code>GetEvaluation</code> operation to verify that the status of the <code>Evaluation</code> changed to <code>DELETED</code>.</p> <p> <b>Caution:</b> The results of the <code>DeleteEvaluation</code> operation are irreversible.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEvaluationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteEvaluationInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEvaluationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteEvaluationRequest();
    $request->deleteEvaluationInput = new DeleteEvaluationInput();
    $request->deleteEvaluationInput->evaluationId = 'dicta';
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'dolore';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'harum';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->xAmzTarget = DeleteEvaluationXAmzTargetEnum::AMAZON_ML20141212_DELETE_EVALUATION;

    $response = $sdk->sdk->deleteEvaluation($request);

    if ($response->deleteEvaluationOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteMLModel

<p>Assigns the <code>DELETED</code> status to an <code>MLModel</code>, rendering it unusable.</p> <p>After using the <code>DeleteMLModel</code> operation, you can use the <code>GetMLModel</code> operation to verify that the status of the <code>MLModel</code> changed to DELETED.</p> <p> <b>Caution:</b> The result of the <code>DeleteMLModel</code> operation is irreversible.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMLModelRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteMLModelInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMLModelXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteMLModelRequest();
    $request->deleteMLModelInput = new DeleteMLModelInput();
    $request->deleteMLModelInput->mlModelId = 'commodi';
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'quae';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'molestias';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'pariatur';
    $request->xAmzTarget = DeleteMLModelXAmzTargetEnum::AMAZON_ML20141212_DELETE_ML_MODEL;

    $response = $sdk->sdk->deleteMLModel($request);

    if ($response->deleteMLModelOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRealtimeEndpoint

Deletes a real time endpoint of an <code>MLModel</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRealtimeEndpointRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteRealtimeEndpointInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRealtimeEndpointXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRealtimeEndpointRequest();
    $request->deleteRealtimeEndpointInput = new DeleteRealtimeEndpointInput();
    $request->deleteRealtimeEndpointInput->mlModelId = 'modi';
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'rem';
    $request->xAmzCredential = 'voluptates';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'repudiandae';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'veritatis';
    $request->xAmzTarget = DeleteRealtimeEndpointXAmzTargetEnum::AMAZON_ML20141212_DELETE_REALTIME_ENDPOINT;

    $response = $sdk->sdk->deleteRealtimeEndpoint($request);

    if ($response->deleteRealtimeEndpointOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTags

<p>Deletes the specified tags associated with an ML object. After this operation is complete, you can't recover deleted tags.</p> <p>If you specify a tag that doesn't exist, Amazon ML ignores it.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTagsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteTagsInput;
use \OpenAPI\OpenAPI\Models\Shared\TaggableResourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTagsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTagsRequest();
    $request->deleteTagsInput = new DeleteTagsInput();
    $request->deleteTagsInput->resourceId = 'itaque';
    $request->deleteTagsInput->resourceType = TaggableResourceTypeEnum::DATA_SOURCE;
    $request->deleteTagsInput->tagKeys = [
        'consequatur',
        'est',
    ];
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'explicabo';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'quibusdam';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'modi';
    $request->xAmzTarget = DeleteTagsXAmzTargetEnum::AMAZON_ML20141212_DELETE_TAGS;

    $response = $sdk->sdk->deleteTags($request);

    if ($response->deleteTagsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeBatchPredictions

Returns a list of <code>BatchPrediction</code> operations that match the search criteria in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeBatchPredictionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeBatchPredictionsInput;
use \OpenAPI\OpenAPI\Models\Shared\BatchPredictionFilterVariableEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeBatchPredictionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeBatchPredictionsRequest();
    $request->describeBatchPredictionsInput = new DescribeBatchPredictionsInput();
    $request->describeBatchPredictionsInput->eq = 'qui';
    $request->describeBatchPredictionsInput->filterVariable = BatchPredictionFilterVariableEnum::NAME;
    $request->describeBatchPredictionsInput->ge = 'cupiditate';
    $request->describeBatchPredictionsInput->gt = 'quos';
    $request->describeBatchPredictionsInput->le = 'perferendis';
    $request->describeBatchPredictionsInput->lt = 'magni';
    $request->describeBatchPredictionsInput->limit = 828940;
    $request->describeBatchPredictionsInput->ne = 'ipsam';
    $request->describeBatchPredictionsInput->nextToken = 'alias';
    $request->describeBatchPredictionsInput->prefix = 'fugit';
    $request->describeBatchPredictionsInput->sortOrder = SortOrderEnum::DSC;
    $request->limit = 'excepturi';
    $request->nextToken = 'tempora';
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'tempore';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'non';
    $request->xAmzSignedHeaders = 'eligendi';
    $request->xAmzTarget = DescribeBatchPredictionsXAmzTargetEnum::AMAZON_ML20141212_DESCRIBE_BATCH_PREDICTIONS;

    $response = $sdk->sdk->describeBatchPredictions($request);

    if ($response->describeBatchPredictionsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeDataSources

Returns a list of <code>DataSource</code> that match the search criteria in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDataSourcesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeDataSourcesInput;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceFilterVariableEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDataSourcesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDataSourcesRequest();
    $request->describeDataSourcesInput = new DescribeDataSourcesInput();
    $request->describeDataSourcesInput->eq = 'sint';
    $request->describeDataSourcesInput->filterVariable = DataSourceFilterVariableEnum::STATUS;
    $request->describeDataSourcesInput->ge = 'provident';
    $request->describeDataSourcesInput->gt = 'necessitatibus';
    $request->describeDataSourcesInput->le = 'sint';
    $request->describeDataSourcesInput->lt = 'officia';
    $request->describeDataSourcesInput->limit = 223081;
    $request->describeDataSourcesInput->ne = 'debitis';
    $request->describeDataSourcesInput->nextToken = 'a';
    $request->describeDataSourcesInput->prefix = 'dolorum';
    $request->describeDataSourcesInput->sortOrder = SortOrderEnum::ASC;
    $request->limit = 'in';
    $request->nextToken = 'illum';
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'rerum';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'cumque';
    $request->xAmzSignature = 'facere';
    $request->xAmzSignedHeaders = 'ea';
    $request->xAmzTarget = DescribeDataSourcesXAmzTargetEnum::AMAZON_ML20141212_DESCRIBE_DATA_SOURCES;

    $response = $sdk->sdk->describeDataSources($request);

    if ($response->describeDataSourcesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeEvaluations

Returns a list of <code>DescribeEvaluations</code> that match the search criteria in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEvaluationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeEvaluationsInput;
use \OpenAPI\OpenAPI\Models\Shared\EvaluationFilterVariableEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEvaluationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeEvaluationsRequest();
    $request->describeEvaluationsInput = new DescribeEvaluationsInput();
    $request->describeEvaluationsInput->eq = 'aliquid';
    $request->describeEvaluationsInput->filterVariable = EvaluationFilterVariableEnum::ML_MODEL_ID;
    $request->describeEvaluationsInput->ge = 'accusamus';
    $request->describeEvaluationsInput->gt = 'non';
    $request->describeEvaluationsInput->le = 'occaecati';
    $request->describeEvaluationsInput->lt = 'enim';
    $request->describeEvaluationsInput->limit = 881736;
    $request->describeEvaluationsInput->ne = 'delectus';
    $request->describeEvaluationsInput->nextToken = 'quidem';
    $request->describeEvaluationsInput->prefix = 'provident';
    $request->describeEvaluationsInput->sortOrder = SortOrderEnum::DSC;
    $request->limit = 'id';
    $request->nextToken = 'blanditiis';
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'nisi';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'natus';
    $request->xAmzTarget = DescribeEvaluationsXAmzTargetEnum::AMAZON_ML20141212_DESCRIBE_EVALUATIONS;

    $response = $sdk->sdk->describeEvaluations($request);

    if ($response->describeEvaluationsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeMLModels

Returns a list of <code>MLModel</code> that match the search criteria in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeMLModelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeMLModelsInput;
use \OpenAPI\OpenAPI\Models\Shared\MLModelFilterVariableEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeMLModelsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeMLModelsRequest();
    $request->describeMLModelsInput = new DescribeMLModelsInput();
    $request->describeMLModelsInput->eq = 'omnis';
    $request->describeMLModelsInput->filterVariable = MLModelFilterVariableEnum::IAM_USER;
    $request->describeMLModelsInput->ge = 'perferendis';
    $request->describeMLModelsInput->gt = 'nihil';
    $request->describeMLModelsInput->le = 'magnam';
    $request->describeMLModelsInput->lt = 'distinctio';
    $request->describeMLModelsInput->limit = 660174;
    $request->describeMLModelsInput->ne = 'labore';
    $request->describeMLModelsInput->nextToken = 'labore';
    $request->describeMLModelsInput->prefix = 'suscipit';
    $request->describeMLModelsInput->sortOrder = SortOrderEnum::DSC;
    $request->limit = 'nobis';
    $request->nextToken = 'eum';
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'et';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'ullam';
    $request->xAmzTarget = DescribeMLModelsXAmzTargetEnum::AMAZON_ML20141212_DESCRIBE_ML_MODELS;

    $response = $sdk->sdk->describeMLModels($request);

    if ($response->describeMLModelsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeTags

Describes one or more of the tags for your Amazon ML object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTagsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeTagsInput;
use \OpenAPI\OpenAPI\Models\Shared\TaggableResourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTagsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeTagsRequest();
    $request->describeTagsInput = new DescribeTagsInput();
    $request->describeTagsInput->resourceId = 'provident';
    $request->describeTagsInput->resourceType = TaggableResourceTypeEnum::EVALUATION;
    $request->xAmzAlgorithm = 'sint';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'ad';
    $request->xAmzSignedHeaders = 'eum';
    $request->xAmzTarget = DescribeTagsXAmzTargetEnum::AMAZON_ML20141212_DESCRIBE_TAGS;

    $response = $sdk->sdk->describeTags($request);

    if ($response->describeTagsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBatchPrediction

Returns a <code>BatchPrediction</code> that includes detailed metadata, status, and data file information for a <code>Batch Prediction</code> request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetBatchPredictionRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetBatchPredictionInput;
use \OpenAPI\OpenAPI\Models\Operations\GetBatchPredictionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBatchPredictionRequest();
    $request->getBatchPredictionInput = new GetBatchPredictionInput();
    $request->getBatchPredictionInput->batchPredictionId = 'dolor';
    $request->xAmzAlgorithm = 'necessitatibus';
    $request->xAmzContentSha256 = 'odit';
    $request->xAmzCredential = 'nemo';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'doloribus';
    $request->xAmzSignedHeaders = 'debitis';
    $request->xAmzTarget = GetBatchPredictionXAmzTargetEnum::AMAZON_ML20141212_GET_BATCH_PREDICTION;

    $response = $sdk->sdk->getBatchPrediction($request);

    if ($response->getBatchPredictionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDataSource

<p>Returns a <code>DataSource</code> that includes metadata and data file information, as well as the current status of the <code>DataSource</code>.</p> <p> <code>GetDataSource</code> provides results in normal or verbose format. The verbose format adds the schema description and the list of files pointed to by the DataSource to the normal format.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDataSourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetDataSourceInput;
use \OpenAPI\OpenAPI\Models\Operations\GetDataSourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDataSourceRequest();
    $request->getDataSourceInput = new GetDataSourceInput();
    $request->getDataSourceInput->dataSourceId = 'eius';
    $request->getDataSourceInput->verbose = false;
    $request->xAmzAlgorithm = 'maxime';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'repudiandae';
    $request->xAmzTarget = GetDataSourceXAmzTargetEnum::AMAZON_ML20141212_GET_DATA_SOURCE;

    $response = $sdk->sdk->getDataSource($request);

    if ($response->getDataSourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEvaluation

Returns an <code>Evaluation</code> that includes metadata as well as the current status of the <code>Evaluation</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEvaluationRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetEvaluationInput;
use \OpenAPI\OpenAPI\Models\Operations\GetEvaluationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEvaluationRequest();
    $request->getEvaluationInput = new GetEvaluationInput();
    $request->getEvaluationInput->evaluationId = 'ullam';
    $request->xAmzAlgorithm = 'expedita';
    $request->xAmzContentSha256 = 'nihil';
    $request->xAmzCredential = 'repellat';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'sed';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'pariatur';
    $request->xAmzTarget = GetEvaluationXAmzTargetEnum::AMAZON_ML20141212_GET_EVALUATION;

    $response = $sdk->sdk->getEvaluation($request);

    if ($response->getEvaluationOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMLModel

<p>Returns an <code>MLModel</code> that includes detailed metadata, data source information, and the current status of the <code>MLModel</code>.</p> <p> <code>GetMLModel</code> provides results in normal or verbose format. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMLModelRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetMLModelInput;
use \OpenAPI\OpenAPI\Models\Operations\GetMLModelXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMLModelRequest();
    $request->getMLModelInput = new GetMLModelInput();
    $request->getMLModelInput->mlModelId = 'accusantium';
    $request->getMLModelInput->verbose = false;
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'praesentium';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'magni';
    $request->xAmzSecurityToken = 'sunt';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'illum';
    $request->xAmzTarget = GetMLModelXAmzTargetEnum::AMAZON_ML20141212_GET_ML_MODEL;

    $response = $sdk->sdk->getMLModel($request);

    if ($response->getMLModelOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## predict

<p>Generates a prediction for the observation using the specified <code>ML Model</code>.</p> <p> <b>Note:</b> Not all response parameters will be populated. Whether a response parameter is populated depends on the type of model requested.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PredictRequest;
use \OpenAPI\OpenAPI\Models\Shared\PredictInput;
use \OpenAPI\OpenAPI\Models\Operations\PredictXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PredictRequest();
    $request->predictInput = new PredictInput();
    $request->predictInput->mlModelId = 'pariatur';
    $request->predictInput->predictEndpoint = 'maxime';
    $request->predictInput->record = [
        'excepturi' => 'odit',
        'ea' => 'accusantium',
    ];
    $request->xAmzAlgorithm = 'ab';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'autem';
    $request->xAmzSignedHeaders = 'nam';
    $request->xAmzTarget = PredictXAmzTargetEnum::AMAZON_ML20141212_PREDICT;

    $response = $sdk->sdk->predict($request);

    if ($response->predictOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateBatchPrediction

<p>Updates the <code>BatchPredictionName</code> of a <code>BatchPrediction</code>.</p> <p>You can use the <code>GetBatchPrediction</code> operation to view the contents of the updated data element.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBatchPredictionRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateBatchPredictionInput;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBatchPredictionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateBatchPredictionRequest();
    $request->updateBatchPredictionInput = new UpdateBatchPredictionInput();
    $request->updateBatchPredictionInput->batchPredictionId = 'eaque';
    $request->updateBatchPredictionInput->batchPredictionName = 'pariatur';
    $request->xAmzAlgorithm = 'nemo';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'fugiat';
    $request->xAmzSecurityToken = 'amet';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'cumque';
    $request->xAmzTarget = UpdateBatchPredictionXAmzTargetEnum::AMAZON_ML20141212_UPDATE_BATCH_PREDICTION;

    $response = $sdk->sdk->updateBatchPrediction($request);

    if ($response->updateBatchPredictionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDataSource

<p>Updates the <code>DataSourceName</code> of a <code>DataSource</code>.</p> <p>You can use the <code>GetDataSource</code> operation to view the contents of the updated data element.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDataSourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateDataSourceInput;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDataSourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDataSourceRequest();
    $request->updateDataSourceInput = new UpdateDataSourceInput();
    $request->updateDataSourceInput->dataSourceId = 'corporis';
    $request->updateDataSourceInput->dataSourceName = 'hic';
    $request->xAmzAlgorithm = 'libero';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'dolores';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'eaque';
    $request->xAmzTarget = UpdateDataSourceXAmzTargetEnum::AMAZON_ML20141212_UPDATE_DATA_SOURCE;

    $response = $sdk->sdk->updateDataSource($request);

    if ($response->updateDataSourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateEvaluation

<p>Updates the <code>EvaluationName</code> of an <code>Evaluation</code>.</p> <p>You can use the <code>GetEvaluation</code> operation to view the contents of the updated data element.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEvaluationRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateEvaluationInput;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEvaluationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateEvaluationRequest();
    $request->updateEvaluationInput = new UpdateEvaluationInput();
    $request->updateEvaluationInput->evaluationId = 'quis';
    $request->updateEvaluationInput->evaluationName = 'nesciunt';
    $request->xAmzAlgorithm = 'eos';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'dolores';
    $request->xAmzDate = 'minus';
    $request->xAmzSecurityToken = 'quam';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'vero';
    $request->xAmzTarget = UpdateEvaluationXAmzTargetEnum::AMAZON_ML20141212_UPDATE_EVALUATION;

    $response = $sdk->sdk->updateEvaluation($request);

    if ($response->updateEvaluationOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateMLModel

<p>Updates the <code>MLModelName</code> and the <code>ScoreThreshold</code> of an <code>MLModel</code>.</p> <p>You can use the <code>GetMLModel</code> operation to view the contents of the updated data element.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMLModelRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateMLModelInput;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMLModelXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateMLModelRequest();
    $request->updateMLModelInput = new UpdateMLModelInput();
    $request->updateMLModelInput->mlModelId = 'nostrum';
    $request->updateMLModelInput->mlModelName = 'hic';
    $request->updateMLModelInput->scoreThreshold = 9280.82;
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'perspiciatis';
    $request->xAmzDate = 'voluptatem';
    $request->xAmzSecurityToken = 'porro';
    $request->xAmzSignature = 'consequuntur';
    $request->xAmzSignedHeaders = 'blanditiis';
    $request->xAmzTarget = UpdateMLModelXAmzTargetEnum::AMAZON_ML20141212_UPDATE_ML_MODEL;

    $response = $sdk->sdk->updateMLModel($request);

    if ($response->updateMLModelOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
