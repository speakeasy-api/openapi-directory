# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDatasetRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateDatasetRequest;
use \OpenAPI\OpenAPI\Models\Shared\DatasetSchema;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateDatasetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDatasetRequest();
    $request->createDatasetRequest = new CreateDatasetRequest();
    $request->createDatasetRequest->clientToken = 'corrupti';
    $request->createDatasetRequest->datasetName = 'provident';
    $request->createDatasetRequest->datasetSchema = new DatasetSchema();
    $request->createDatasetRequest->datasetSchema->inlineDataSchema = 'distinctio';
    $request->createDatasetRequest->serverSideKmsKeyId = 'quibusdam';
    $request->createDatasetRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'nulla';
    $request->xAmzContentSha256 = 'corrupti';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'suscipit';
    $request->xAmzTarget = CreateDatasetXAmzTargetEnum::AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_CREATE_DATASET;

    $response = $sdk->createDataset($request);

    if ($response->createDatasetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createDataset](docs/sdk/README.md#createdataset) - Creates a container for a collection of data being ingested for analysis. The dataset contains the metadata describing where the data is and what the data actually looks like. In other words, it contains the location of the data source, the data schema, and other information. A dataset also contains any tags associated with the ingested data. 
* [createInferenceScheduler](docs/sdk/README.md#createinferencescheduler) -  Creates a scheduled inference. Scheduling an inference is setting up a continuous real-time inference plan to analyze new measurement data. When setting up the schedule, you provide an S3 bucket location for the input data, assign it a delimiter between separate entries in the data, set an offset delay if desired, and set the frequency of inferencing. You must also provide an S3 bucket location for the output data. 
* [createLabel](docs/sdk/README.md#createlabel) -  Creates a label for an event. 
* [createLabelGroup](docs/sdk/README.md#createlabelgroup) -  Creates a group of labels. 
* [createModel](docs/sdk/README.md#createmodel) - <p>Creates an ML model for data inference. </p> <p>A machine-learning (ML) model is a mathematical model that finds patterns in your data. In Amazon Lookout for Equipment, the model learns the patterns of normal behavior and detects abnormal behavior that could be potential equipment failure (or maintenance events). The models are made by analyzing normal data and abnormalities in machine behavior that have already occurred.</p> <p>Your model is trained using a portion of the data from your dataset and uses that data to learn patterns of normal behavior and abnormal patterns that lead to equipment failure. Another portion of the data is used to evaluate the model's accuracy. </p>
* [deleteDataset](docs/sdk/README.md#deletedataset) -  Deletes a dataset and associated artifacts. The operation will check to see if any inference scheduler or data ingestion job is currently using the dataset, and if there isn't, the dataset, its metadata, and any associated data stored in S3 will be deleted. This does not affect any models that used this dataset for training and evaluation, but does prevent it from being used in the future. 
* [deleteInferenceScheduler](docs/sdk/README.md#deleteinferencescheduler) - Deletes an inference scheduler that has been set up. Already processed output results are not affected. 
* [deleteLabel](docs/sdk/README.md#deletelabel) -  Deletes a label. 
* [deleteLabelGroup](docs/sdk/README.md#deletelabelgroup) -  Deletes a group of labels. 
* [deleteModel](docs/sdk/README.md#deletemodel) - Deletes an ML model currently available for Amazon Lookout for Equipment. This will prevent it from being used with an inference scheduler, even one that is already set up. 
* [describeDataIngestionJob](docs/sdk/README.md#describedataingestionjob) - Provides information on a specific data ingestion job such as creation time, dataset ARN, and status.
* [describeDataset](docs/sdk/README.md#describedataset) - Provides a JSON description of the data in each time series dataset, including names, column names, and data types.
* [describeInferenceScheduler](docs/sdk/README.md#describeinferencescheduler) -  Specifies information about the inference scheduler being used, including name, model, status, and associated metadata 
* [describeLabel](docs/sdk/README.md#describelabel) -  Returns the name of the label. 
* [describeLabelGroup](docs/sdk/README.md#describelabelgroup) -  Returns information about the label group. 
* [describeModel](docs/sdk/README.md#describemodel) - Provides a JSON containing the overall information about a specific ML model, including model name and ARN, dataset, training and evaluation information, status, and so on. 
* [listDataIngestionJobs](docs/sdk/README.md#listdataingestionjobs) - Provides a list of all data ingestion jobs, including dataset name and ARN, S3 location of the input data, status, and so on. 
* [listDatasets](docs/sdk/README.md#listdatasets) - Lists all datasets currently available in your account, filtering on the dataset name. 
* [listInferenceEvents](docs/sdk/README.md#listinferenceevents) -  Lists all inference events that have been found for the specified inference scheduler. 
* [listInferenceExecutions](docs/sdk/README.md#listinferenceexecutions) -  Lists all inference executions that have been performed by the specified inference scheduler. 
* [listInferenceSchedulers](docs/sdk/README.md#listinferenceschedulers) - Retrieves a list of all inference schedulers currently available for your account. 
* [listLabelGroups](docs/sdk/README.md#listlabelgroups) -  Returns a list of the label groups. 
* [listLabels](docs/sdk/README.md#listlabels) -  Provides a list of labels. 
* [listModels](docs/sdk/README.md#listmodels) - Generates a list of all models in the account, including model name and ARN, dataset, and status. 
* [listSensorStatistics](docs/sdk/README.md#listsensorstatistics) -  Lists statistics about the data collected for each of the sensors that have been successfully ingested in the particular dataset. Can also be used to retreive Sensor Statistics for a previous ingestion job. 
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists all the tags for a specified resource, including key and value. 
* [startDataIngestionJob](docs/sdk/README.md#startdataingestionjob) - Starts a data ingestion job. Amazon Lookout for Equipment returns the job status. 
* [startInferenceScheduler](docs/sdk/README.md#startinferencescheduler) - Starts an inference scheduler. 
* [stopInferenceScheduler](docs/sdk/README.md#stopinferencescheduler) - Stops an inference scheduler. 
* [tagResource](docs/sdk/README.md#tagresource) - Associates a given tag to a resource in your account. A tag is a key-value pair which can be added to an Amazon Lookout for Equipment resource as metadata. Tags can be used for organizing your resources as well as helping you to search and filter by tag. Multiple tags can be added to a resource, either when you create it, or later. Up to 50 tags can be associated with each resource. 
* [untagResource](docs/sdk/README.md#untagresource) - Removes a specific tag from a given resource. The tag is specified by its key. 
* [updateInferenceScheduler](docs/sdk/README.md#updateinferencescheduler) - Updates an inference scheduler. 
* [updateLabelGroup](docs/sdk/README.md#updatelabelgroup) -  Updates the label group. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
