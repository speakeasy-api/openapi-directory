# SDK

## Overview

Amazon Lookout for Equipment is a machine learning service that uses advanced analytics to identify anomalies in machines from sensor data for use in predictive maintenance. 

Amazon Web Services documentation
<https://docs.aws.amazon.com/lookoutequipment/>
### Available Operations

* [createDataset](#createdataset) - Creates a container for a collection of data being ingested for analysis. The dataset contains the metadata describing where the data is and what the data actually looks like. In other words, it contains the location of the data source, the data schema, and other information. A dataset also contains any tags associated with the ingested data. 
* [createInferenceScheduler](#createinferencescheduler) -  Creates a scheduled inference. Scheduling an inference is setting up a continuous real-time inference plan to analyze new measurement data. When setting up the schedule, you provide an S3 bucket location for the input data, assign it a delimiter between separate entries in the data, set an offset delay if desired, and set the frequency of inferencing. You must also provide an S3 bucket location for the output data. 
* [createLabel](#createlabel) -  Creates a label for an event. 
* [createLabelGroup](#createlabelgroup) -  Creates a group of labels. 
* [createModel](#createmodel) - <p>Creates an ML model for data inference. </p> <p>A machine-learning (ML) model is a mathematical model that finds patterns in your data. In Amazon Lookout for Equipment, the model learns the patterns of normal behavior and detects abnormal behavior that could be potential equipment failure (or maintenance events). The models are made by analyzing normal data and abnormalities in machine behavior that have already occurred.</p> <p>Your model is trained using a portion of the data from your dataset and uses that data to learn patterns of normal behavior and abnormal patterns that lead to equipment failure. Another portion of the data is used to evaluate the model's accuracy. </p>
* [deleteDataset](#deletedataset) -  Deletes a dataset and associated artifacts. The operation will check to see if any inference scheduler or data ingestion job is currently using the dataset, and if there isn't, the dataset, its metadata, and any associated data stored in S3 will be deleted. This does not affect any models that used this dataset for training and evaluation, but does prevent it from being used in the future. 
* [deleteInferenceScheduler](#deleteinferencescheduler) - Deletes an inference scheduler that has been set up. Already processed output results are not affected. 
* [deleteLabel](#deletelabel) -  Deletes a label. 
* [deleteLabelGroup](#deletelabelgroup) -  Deletes a group of labels. 
* [deleteModel](#deletemodel) - Deletes an ML model currently available for Amazon Lookout for Equipment. This will prevent it from being used with an inference scheduler, even one that is already set up. 
* [describeDataIngestionJob](#describedataingestionjob) - Provides information on a specific data ingestion job such as creation time, dataset ARN, and status.
* [describeDataset](#describedataset) - Provides a JSON description of the data in each time series dataset, including names, column names, and data types.
* [describeInferenceScheduler](#describeinferencescheduler) -  Specifies information about the inference scheduler being used, including name, model, status, and associated metadata 
* [describeLabel](#describelabel) -  Returns the name of the label. 
* [describeLabelGroup](#describelabelgroup) -  Returns information about the label group. 
* [describeModel](#describemodel) - Provides a JSON containing the overall information about a specific ML model, including model name and ARN, dataset, training and evaluation information, status, and so on. 
* [listDataIngestionJobs](#listdataingestionjobs) - Provides a list of all data ingestion jobs, including dataset name and ARN, S3 location of the input data, status, and so on. 
* [listDatasets](#listdatasets) - Lists all datasets currently available in your account, filtering on the dataset name. 
* [listInferenceEvents](#listinferenceevents) -  Lists all inference events that have been found for the specified inference scheduler. 
* [listInferenceExecutions](#listinferenceexecutions) -  Lists all inference executions that have been performed by the specified inference scheduler. 
* [listInferenceSchedulers](#listinferenceschedulers) - Retrieves a list of all inference schedulers currently available for your account. 
* [listLabelGroups](#listlabelgroups) -  Returns a list of the label groups. 
* [listLabels](#listlabels) -  Provides a list of labels. 
* [listModels](#listmodels) - Generates a list of all models in the account, including model name and ARN, dataset, and status. 
* [listSensorStatistics](#listsensorstatistics) -  Lists statistics about the data collected for each of the sensors that have been successfully ingested in the particular dataset. Can also be used to retreive Sensor Statistics for a previous ingestion job. 
* [listTagsForResource](#listtagsforresource) - Lists all the tags for a specified resource, including key and value. 
* [startDataIngestionJob](#startdataingestionjob) - Starts a data ingestion job. Amazon Lookout for Equipment returns the job status. 
* [startInferenceScheduler](#startinferencescheduler) - Starts an inference scheduler. 
* [stopInferenceScheduler](#stopinferencescheduler) - Stops an inference scheduler. 
* [tagResource](#tagresource) - Associates a given tag to a resource in your account. A tag is a key-value pair which can be added to an Amazon Lookout for Equipment resource as metadata. Tags can be used for organizing your resources as well as helping you to search and filter by tag. Multiple tags can be added to a resource, either when you create it, or later. Up to 50 tags can be associated with each resource. 
* [untagResource](#untagresource) - Removes a specific tag from a given resource. The tag is specified by its key. 
* [updateInferenceScheduler](#updateinferencescheduler) - Updates an inference scheduler. 
* [updateLabelGroup](#updatelabelgroup) -  Updates the label group. 

## createDataset

Creates a container for a collection of data being ingested for analysis. The dataset contains the metadata describing where the data is and what the data actually looks like. In other words, it contains the location of the data source, the data schema, and other information. A dataset also contains any tags associated with the ingested data. 

### Example Usage

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
    $request->createDatasetRequest->clientToken = 'iure';
    $request->createDatasetRequest->datasetName = 'magnam';
    $request->createDatasetRequest->datasetSchema = new DatasetSchema();
    $request->createDatasetRequest->datasetSchema->inlineDataSchema = 'debitis';
    $request->createDatasetRequest->serverSideKmsKeyId = 'ipsa';
    $request->createDatasetRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'minus';
    $request->xAmzSecurityToken = 'placeat';
    $request->xAmzSignature = 'voluptatum';
    $request->xAmzSignedHeaders = 'iusto';
    $request->xAmzTarget = CreateDatasetXAmzTargetEnum::AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_CREATE_DATASET;

    $response = $sdk->sdk->createDataset($request);

    if ($response->createDatasetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createInferenceScheduler

 Creates a scheduled inference. Scheduling an inference is setting up a continuous real-time inference plan to analyze new measurement data. When setting up the schedule, you provide an S3 bucket location for the input data, assign it a delimiter between separate entries in the data, set an offset delay if desired, and set the frequency of inferencing. You must also provide an S3 bucket location for the output data. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateInferenceSchedulerRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateInferenceSchedulerRequest;
use \OpenAPI\OpenAPI\Models\Shared\InferenceInputConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\InferenceInputNameConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\InferenceS3InputConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\InferenceOutputConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\InferenceS3OutputConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DataUploadFrequencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateInferenceSchedulerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateInferenceSchedulerRequest();
    $request->createInferenceSchedulerRequest = new CreateInferenceSchedulerRequest();
    $request->createInferenceSchedulerRequest->clientToken = 'excepturi';
    $request->createInferenceSchedulerRequest->dataDelayOffsetInMinutes = 392785;
    $request->createInferenceSchedulerRequest->dataInputConfiguration = new InferenceInputConfiguration();
    $request->createInferenceSchedulerRequest->dataInputConfiguration->inferenceInputNameConfiguration = new InferenceInputNameConfiguration();
    $request->createInferenceSchedulerRequest->dataInputConfiguration->inferenceInputNameConfiguration->componentTimestampDelimiter = 'recusandae';
    $request->createInferenceSchedulerRequest->dataInputConfiguration->inferenceInputNameConfiguration->timestampFormat = 'temporibus';
    $request->createInferenceSchedulerRequest->dataInputConfiguration->inputTimeZoneOffset = 'ab';
    $request->createInferenceSchedulerRequest->dataInputConfiguration->s3InputConfiguration = new InferenceS3InputConfiguration();
    $request->createInferenceSchedulerRequest->dataInputConfiguration->s3InputConfiguration->bucket = 'quis';
    $request->createInferenceSchedulerRequest->dataInputConfiguration->s3InputConfiguration->prefix = 'veritatis';
    $request->createInferenceSchedulerRequest->dataOutputConfiguration = new InferenceOutputConfiguration();
    $request->createInferenceSchedulerRequest->dataOutputConfiguration->kmsKeyId = 'deserunt';
    $request->createInferenceSchedulerRequest->dataOutputConfiguration->s3OutputConfiguration = new InferenceS3OutputConfiguration();
    $request->createInferenceSchedulerRequest->dataOutputConfiguration->s3OutputConfiguration->bucket = 'perferendis';
    $request->createInferenceSchedulerRequest->dataOutputConfiguration->s3OutputConfiguration->prefix = 'ipsam';
    $request->createInferenceSchedulerRequest->dataUploadFrequency = DataUploadFrequencyEnum::PT1_H;
    $request->createInferenceSchedulerRequest->inferenceSchedulerName = 'sapiente';
    $request->createInferenceSchedulerRequest->modelName = 'quo';
    $request->createInferenceSchedulerRequest->roleArn = 'odit';
    $request->createInferenceSchedulerRequest->serverSideKmsKeyId = 'at';
    $request->createInferenceSchedulerRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'quod';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'porro';
    $request->xAmzTarget = CreateInferenceSchedulerXAmzTargetEnum::AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_CREATE_INFERENCE_SCHEDULER;

    $response = $sdk->sdk->createInferenceScheduler($request);

    if ($response->createInferenceSchedulerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createLabel

 Creates a label for an event. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateLabelRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateLabelRequest;
use \OpenAPI\OpenAPI\Models\Shared\LabelRatingEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateLabelXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateLabelRequest();
    $request->createLabelRequest = new CreateLabelRequest();
    $request->createLabelRequest->clientToken = 'dolorum';
    $request->createLabelRequest->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-12T23:15:28.420Z');
    $request->createLabelRequest->equipment = 'officia';
    $request->createLabelRequest->faultCode = 'occaecati';
    $request->createLabelRequest->labelGroupName = 'fugit';
    $request->createLabelRequest->notes = 'deleniti';
    $request->createLabelRequest->rating = LabelRatingEnum::NEUTRAL;
    $request->createLabelRequest->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-06-08T13:49:32.889Z');
    $request->xAmzAlgorithm = 'beatae';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'impedit';
    $request->xAmzSignedHeaders = 'cum';
    $request->xAmzTarget = CreateLabelXAmzTargetEnum::AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_CREATE_LABEL;

    $response = $sdk->sdk->createLabel($request);

    if ($response->createLabelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createLabelGroup

 Creates a group of labels. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateLabelGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateLabelGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateLabelGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateLabelGroupRequest();
    $request->createLabelGroupRequest = new CreateLabelGroupRequest();
    $request->createLabelGroupRequest->clientToken = 'esse';
    $request->createLabelGroupRequest->faultCodes = [
        'excepturi',
    ];
    $request->createLabelGroupRequest->labelGroupName = 'aspernatur';
    $request->createLabelGroupRequest->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'ad';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'sed';
    $request->xAmzDate = 'iste';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'laboriosam';
    $request->xAmzTarget = CreateLabelGroupXAmzTargetEnum::AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_CREATE_LABEL_GROUP;

    $response = $sdk->sdk->createLabelGroup($request);

    if ($response->createLabelGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createModel

<p>Creates an ML model for data inference. </p> <p>A machine-learning (ML) model is a mathematical model that finds patterns in your data. In Amazon Lookout for Equipment, the model learns the patterns of normal behavior and detects abnormal behavior that could be potential equipment failure (or maintenance events). The models are made by analyzing normal data and abnormalities in machine behavior that have already occurred.</p> <p>Your model is trained using a portion of the data from your dataset and uses that data to learn patterns of normal behavior and abnormal patterns that lead to equipment failure. Another portion of the data is used to evaluate the model's accuracy. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateModelRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateModelRequest;
use \OpenAPI\OpenAPI\Models\Shared\DataPreProcessingConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\TargetSamplingRateEnum;
use \OpenAPI\OpenAPI\Models\Shared\DatasetSchema;
use \OpenAPI\OpenAPI\Models\Shared\LabelsInputConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\LabelsS3InputConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateModelXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateModelRequest();
    $request->createModelRequest = new CreateModelRequest();
    $request->createModelRequest->clientToken = 'hic';
    $request->createModelRequest->dataPreProcessingConfiguration = new DataPreProcessingConfiguration();
    $request->createModelRequest->dataPreProcessingConfiguration->targetSamplingRate = TargetSamplingRateEnum::PT30_M;
    $request->createModelRequest->datasetName = 'fuga';
    $request->createModelRequest->datasetSchema = new DatasetSchema();
    $request->createModelRequest->datasetSchema->inlineDataSchema = 'in';
    $request->createModelRequest->evaluationDataEndTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-22T05:33:50.280Z');
    $request->createModelRequest->evaluationDataStartTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-05T15:25:35.140Z');
    $request->createModelRequest->labelsInputConfiguration = new LabelsInputConfiguration();
    $request->createModelRequest->labelsInputConfiguration->labelGroupName = 'quidem';
    $request->createModelRequest->labelsInputConfiguration->s3InputConfiguration = new LabelsS3InputConfiguration();
    $request->createModelRequest->labelsInputConfiguration->s3InputConfiguration->bucket = 'architecto';
    $request->createModelRequest->labelsInputConfiguration->s3InputConfiguration->prefix = 'ipsa';
    $request->createModelRequest->modelName = 'reiciendis';
    $request->createModelRequest->offCondition = 'est';
    $request->createModelRequest->roleArn = 'mollitia';
    $request->createModelRequest->serverSideKmsKeyId = 'laborum';
    $request->createModelRequest->tags = [
        new Tag(),
    ];
    $request->createModelRequest->trainingDataEndTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-23T06:35:12.519Z');
    $request->createModelRequest->trainingDataStartTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-01T23:59:21.675Z');
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'nemo';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'accusantium';
    $request->xAmzSignedHeaders = 'iure';
    $request->xAmzTarget = CreateModelXAmzTargetEnum::AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_CREATE_MODEL;

    $response = $sdk->sdk->createModel($request);

    if ($response->createModelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDataset

 Deletes a dataset and associated artifacts. The operation will check to see if any inference scheduler or data ingestion job is currently using the dataset, and if there isn't, the dataset, its metadata, and any associated data stored in S3 will be deleted. This does not affect any models that used this dataset for training and evaluation, but does prevent it from being used in the future. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDatasetRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteDatasetRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDatasetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDatasetRequest();
    $request->deleteDatasetRequest = new DeleteDatasetRequest();
    $request->deleteDatasetRequest->datasetName = 'culpa';
    $request->xAmzAlgorithm = 'doloribus';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'culpa';
    $request->xAmzSignedHeaders = 'consequuntur';
    $request->xAmzTarget = DeleteDatasetXAmzTargetEnum::AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_DELETE_DATASET;

    $response = $sdk->sdk->deleteDataset($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteInferenceScheduler

Deletes an inference scheduler that has been set up. Already processed output results are not affected. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteInferenceSchedulerRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteInferenceSchedulerRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteInferenceSchedulerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteInferenceSchedulerRequest();
    $request->deleteInferenceSchedulerRequest = new DeleteInferenceSchedulerRequest();
    $request->deleteInferenceSchedulerRequest->inferenceSchedulerName = 'repellat';
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'quam';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'velit';
    $request->xAmzTarget = DeleteInferenceSchedulerXAmzTargetEnum::AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_DELETE_INFERENCE_SCHEDULER;

    $response = $sdk->sdk->deleteInferenceScheduler($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteLabel

 Deletes a label. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLabelRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteLabelRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLabelXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteLabelRequest();
    $request->deleteLabelRequest = new DeleteLabelRequest();
    $request->deleteLabelRequest->labelGroupName = 'error';
    $request->deleteLabelRequest->labelId = 'quia';
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'vitae';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'animi';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'quo';
    $request->xAmzTarget = DeleteLabelXAmzTargetEnum::AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_DELETE_LABEL;

    $response = $sdk->sdk->deleteLabel($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteLabelGroup

 Deletes a group of labels. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLabelGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteLabelGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLabelGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteLabelGroupRequest();
    $request->deleteLabelGroupRequest = new DeleteLabelGroupRequest();
    $request->deleteLabelGroupRequest->labelGroupName = 'sequi';
    $request->xAmzAlgorithm = 'tenetur';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'possimus';
    $request->xAmzSecurityToken = 'aut';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'error';
    $request->xAmzTarget = DeleteLabelGroupXAmzTargetEnum::AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_DELETE_LABEL_GROUP;

    $response = $sdk->sdk->deleteLabelGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteModel

Deletes an ML model currently available for Amazon Lookout for Equipment. This will prevent it from being used with an inference scheduler, even one that is already set up. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteModelRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteModelRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteModelXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteModelRequest();
    $request->deleteModelRequest = new DeleteModelRequest();
    $request->deleteModelRequest->modelName = 'temporibus';
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'praesentium';
    $request->xAmzTarget = DeleteModelXAmzTargetEnum::AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_DELETE_MODEL;

    $response = $sdk->sdk->deleteModel($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeDataIngestionJob

Provides information on a specific data ingestion job such as creation time, dataset ARN, and status.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDataIngestionJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeDataIngestionJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDataIngestionJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDataIngestionJobRequest();
    $request->describeDataIngestionJobRequest = new DescribeDataIngestionJobRequest();
    $request->describeDataIngestionJobRequest->jobId = 'voluptatibus';
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'doloremque';
    $request->xAmzSignedHeaders = 'reprehenderit';
    $request->xAmzTarget = DescribeDataIngestionJobXAmzTargetEnum::AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_DESCRIBE_DATA_INGESTION_JOB;

    $response = $sdk->sdk->describeDataIngestionJob($request);

    if ($response->describeDataIngestionJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeDataset

Provides a JSON description of the data in each time series dataset, including names, column names, and data types.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDatasetRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeDatasetRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDatasetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDatasetRequest();
    $request->describeDatasetRequest = new DescribeDatasetRequest();
    $request->describeDatasetRequest->datasetName = 'ut';
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'dolore';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'harum';
    $request->xAmzTarget = DescribeDatasetXAmzTargetEnum::AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_DESCRIBE_DATASET;

    $response = $sdk->sdk->describeDataset($request);

    if ($response->describeDatasetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeInferenceScheduler

 Specifies information about the inference scheduler being used, including name, model, status, and associated metadata 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeInferenceSchedulerRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeInferenceSchedulerRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeInferenceSchedulerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeInferenceSchedulerRequest();
    $request->describeInferenceSchedulerRequest = new DescribeInferenceSchedulerRequest();
    $request->describeInferenceSchedulerRequest->inferenceSchedulerName = 'enim';
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'repudiandae';
    $request->xAmzDate = 'quae';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'molestias';
    $request->xAmzTarget = DescribeInferenceSchedulerXAmzTargetEnum::AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_DESCRIBE_INFERENCE_SCHEDULER;

    $response = $sdk->sdk->describeInferenceScheduler($request);

    if ($response->describeInferenceSchedulerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeLabel

 Returns the name of the label. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeLabelRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeLabelRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeLabelXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeLabelRequest();
    $request->describeLabelRequest = new DescribeLabelRequest();
    $request->describeLabelRequest->labelGroupName = 'excepturi';
    $request->describeLabelRequest->labelId = 'pariatur';
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'praesentium';
    $request->xAmzCredential = 'rem';
    $request->xAmzDate = 'voluptates';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'repudiandae';
    $request->xAmzSignedHeaders = 'sint';
    $request->xAmzTarget = DescribeLabelXAmzTargetEnum::AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_DESCRIBE_LABEL;

    $response = $sdk->sdk->describeLabel($request);

    if ($response->describeLabelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeLabelGroup

 Returns information about the label group. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeLabelGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeLabelGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeLabelGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeLabelGroupRequest();
    $request->describeLabelGroupRequest = new DescribeLabelGroupRequest();
    $request->describeLabelGroupRequest->labelGroupName = 'veritatis';
    $request->xAmzAlgorithm = 'itaque';
    $request->xAmzContentSha256 = 'incidunt';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'consequatur';
    $request->xAmzSecurityToken = 'est';
    $request->xAmzSignature = 'quibusdam';
    $request->xAmzSignedHeaders = 'explicabo';
    $request->xAmzTarget = DescribeLabelGroupXAmzTargetEnum::AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_DESCRIBE_LABEL_GROUP;

    $response = $sdk->sdk->describeLabelGroup($request);

    if ($response->describeLabelGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeModel

Provides a JSON containing the overall information about a specific ML model, including model name and ARN, dataset, training and evaluation information, status, and so on. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeModelRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeModelRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeModelXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeModelRequest();
    $request->describeModelRequest = new DescribeModelRequest();
    $request->describeModelRequest->modelName = 'deserunt';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'cupiditate';
    $request->xAmzTarget = DescribeModelXAmzTargetEnum::AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_DESCRIBE_MODEL;

    $response = $sdk->sdk->describeModel($request);

    if ($response->describeModelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDataIngestionJobs

Provides a list of all data ingestion jobs, including dataset name and ARN, S3 location of the input data, status, and so on. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDataIngestionJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListDataIngestionJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\IngestionJobStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListDataIngestionJobsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDataIngestionJobsRequest();
    $request->listDataIngestionJobsRequest = new ListDataIngestionJobsRequest();
    $request->listDataIngestionJobsRequest->datasetName = 'quos';
    $request->listDataIngestionJobsRequest->maxResults = 20107;
    $request->listDataIngestionJobsRequest->nextToken = 'magni';
    $request->listDataIngestionJobsRequest->status = IngestionJobStatusEnum::FAILED;
    $request->maxResults = 'ipsam';
    $request->nextToken = 'alias';
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'tempore';
    $request->xAmzSignedHeaders = 'labore';
    $request->xAmzTarget = ListDataIngestionJobsXAmzTargetEnum::AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_LIST_DATA_INGESTION_JOBS;

    $response = $sdk->sdk->listDataIngestionJobs($request);

    if ($response->listDataIngestionJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDatasets

Lists all datasets currently available in your account, filtering on the dataset name. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDatasetsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListDatasetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListDatasetsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDatasetsRequest();
    $request->listDatasetsRequest = new ListDatasetsRequest();
    $request->listDatasetsRequest->datasetNameBeginsWith = 'delectus';
    $request->listDatasetsRequest->maxResults = 433288;
    $request->listDatasetsRequest->nextToken = 'non';
    $request->maxResults = 'eligendi';
    $request->nextToken = 'sint';
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'officia';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'debitis';
    $request->xAmzTarget = ListDatasetsXAmzTargetEnum::AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_LIST_DATASETS;

    $response = $sdk->sdk->listDatasets($request);

    if ($response->listDatasetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listInferenceEvents

 Lists all inference events that have been found for the specified inference scheduler. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListInferenceEventsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListInferenceEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListInferenceEventsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListInferenceEventsRequest();
    $request->listInferenceEventsRequest = new ListInferenceEventsRequest();
    $request->listInferenceEventsRequest->inferenceSchedulerName = 'a';
    $request->listInferenceEventsRequest->intervalEndTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-08T14:21:47.573Z');
    $request->listInferenceEventsRequest->intervalStartTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-26T01:27:36.152Z');
    $request->listInferenceEventsRequest->maxResults = 978571;
    $request->listInferenceEventsRequest->nextToken = 'rerum';
    $request->maxResults = 'dicta';
    $request->nextToken = 'magnam';
    $request->xAmzAlgorithm = 'cumque';
    $request->xAmzContentSha256 = 'facere';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'non';
    $request->xAmzTarget = ListInferenceEventsXAmzTargetEnum::AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_LIST_INFERENCE_EVENTS;

    $response = $sdk->sdk->listInferenceEvents($request);

    if ($response->listInferenceEventsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listInferenceExecutions

 Lists all inference executions that have been performed by the specified inference scheduler. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListInferenceExecutionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListInferenceExecutionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\InferenceExecutionStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListInferenceExecutionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListInferenceExecutionsRequest();
    $request->listInferenceExecutionsRequest = new ListInferenceExecutionsRequest();
    $request->listInferenceExecutionsRequest->dataEndTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-17T08:24:52.669Z');
    $request->listInferenceExecutionsRequest->dataStartTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-02-08T20:51:42.354Z');
    $request->listInferenceExecutionsRequest->inferenceSchedulerName = 'quidem';
    $request->listInferenceExecutionsRequest->maxResults = 588465;
    $request->listInferenceExecutionsRequest->nextToken = 'nam';
    $request->listInferenceExecutionsRequest->status = InferenceExecutionStatusEnum::SUCCESS;
    $request->maxResults = 'blanditiis';
    $request->nextToken = 'deleniti';
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'nisi';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'omnis';
    $request->xAmzTarget = ListInferenceExecutionsXAmzTargetEnum::AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_LIST_INFERENCE_EXECUTIONS;

    $response = $sdk->sdk->listInferenceExecutions($request);

    if ($response->listInferenceExecutionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listInferenceSchedulers

Retrieves a list of all inference schedulers currently available for your account. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListInferenceSchedulersRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListInferenceSchedulersRequest;
use \OpenAPI\OpenAPI\Models\Shared\InferenceSchedulerStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListInferenceSchedulersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListInferenceSchedulersRequest();
    $request->listInferenceSchedulersRequest = new ListInferenceSchedulersRequest();
    $request->listInferenceSchedulersRequest->inferenceSchedulerNameBeginsWith = 'molestiae';
    $request->listInferenceSchedulersRequest->maxResults = 19193;
    $request->listInferenceSchedulersRequest->modelName = 'nihil';
    $request->listInferenceSchedulersRequest->nextToken = 'magnam';
    $request->listInferenceSchedulersRequest->status = InferenceSchedulerStatusEnum::STOPPING;
    $request->maxResults = 'id';
    $request->nextToken = 'labore';
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'aspernatur';
    $request->xAmzTarget = ListInferenceSchedulersXAmzTargetEnum::AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_LIST_INFERENCE_SCHEDULERS;

    $response = $sdk->sdk->listInferenceSchedulers($request);

    if ($response->listInferenceSchedulersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listLabelGroups

 Returns a list of the label groups. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListLabelGroupsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListLabelGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListLabelGroupsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListLabelGroupsRequest();
    $request->listLabelGroupsRequest = new ListLabelGroupsRequest();
    $request->listLabelGroupsRequest->labelGroupNameBeginsWith = 'architecto';
    $request->listLabelGroupsRequest->maxResults = 298282;
    $request->listLabelGroupsRequest->nextToken = 'et';
    $request->maxResults = 'excepturi';
    $request->nextToken = 'ullam';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'mollitia';
    $request->xAmzTarget = ListLabelGroupsXAmzTargetEnum::AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_LIST_LABEL_GROUPS;

    $response = $sdk->sdk->listLabelGroups($request);

    if ($response->listLabelGroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listLabels

 Provides a list of labels. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListLabelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListLabelsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListLabelsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListLabelsRequest();
    $request->listLabelsRequest = new ListLabelsRequest();
    $request->listLabelsRequest->equipment = 'ad';
    $request->listLabelsRequest->faultCode = 'eum';
    $request->listLabelsRequest->intervalEndTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-07T18:15:06.372Z');
    $request->listLabelsRequest->intervalStartTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-19T20:09:28.183Z');
    $request->listLabelsRequest->labelGroupName = 'quasi';
    $request->listLabelsRequest->maxResults = 435865;
    $request->listLabelsRequest->nextToken = 'doloribus';
    $request->maxResults = 'debitis';
    $request->nextToken = 'eius';
    $request->xAmzAlgorithm = 'maxime';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'repudiandae';
    $request->xAmzTarget = ListLabelsXAmzTargetEnum::AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_LIST_LABELS;

    $response = $sdk->sdk->listLabels($request);

    if ($response->listLabelsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listModels

Generates a list of all models in the account, including model name and ARN, dataset, and status. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListModelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListModelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ModelStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListModelsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListModelsRequest();
    $request->listModelsRequest = new ListModelsRequest();
    $request->listModelsRequest->datasetNameBeginsWith = 'ullam';
    $request->listModelsRequest->maxResults = 714242;
    $request->listModelsRequest->modelNameBeginsWith = 'nihil';
    $request->listModelsRequest->nextToken = 'repellat';
    $request->listModelsRequest->status = ModelStatusEnum::FAILED;
    $request->maxResults = 'sed';
    $request->nextToken = 'saepe';
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'magni';
    $request->xAmzSignedHeaders = 'sunt';
    $request->xAmzTarget = ListModelsXAmzTargetEnum::AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_LIST_MODELS;

    $response = $sdk->sdk->listModels($request);

    if ($response->listModelsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSensorStatistics

 Lists statistics about the data collected for each of the sensors that have been successfully ingested in the particular dataset. Can also be used to retreive Sensor Statistics for a previous ingestion job. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSensorStatisticsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListSensorStatisticsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSensorStatisticsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSensorStatisticsRequest();
    $request->listSensorStatisticsRequest = new ListSensorStatisticsRequest();
    $request->listSensorStatisticsRequest->datasetName = 'quo';
    $request->listSensorStatisticsRequest->ingestionJobId = 'illum';
    $request->listSensorStatisticsRequest->maxResults = 864934;
    $request->listSensorStatisticsRequest->nextToken = 'maxime';
    $request->maxResults = 'ea';
    $request->nextToken = 'excepturi';
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->xAmzTarget = ListSensorStatisticsXAmzTargetEnum::AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_LIST_SENSOR_STATISTICS;

    $response = $sdk->sdk->listSensorStatistics($request);

    if ($response->listSensorStatisticsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Lists all the tags for a specified resource, including key and value. 

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
    $request->listTagsForResourceRequest->resourceArn = 'voluptate';
    $request->xAmzAlgorithm = 'autem';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'eaque';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = ListTagsForResourceXAmzTargetEnum::AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_LIST_TAGS_FOR_RESOURCE;

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startDataIngestionJob

Starts a data ingestion job. Amazon Lookout for Equipment returns the job status. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartDataIngestionJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartDataIngestionJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\IngestionInputConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\IngestionS3InputConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\StartDataIngestionJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartDataIngestionJobRequest();
    $request->startDataIngestionJobRequest = new StartDataIngestionJobRequest();
    $request->startDataIngestionJobRequest->clientToken = 'fugiat';
    $request->startDataIngestionJobRequest->datasetName = 'amet';
    $request->startDataIngestionJobRequest->ingestionInputConfiguration = new IngestionInputConfiguration();
    $request->startDataIngestionJobRequest->ingestionInputConfiguration->s3InputConfiguration = new IngestionS3InputConfiguration();
    $request->startDataIngestionJobRequest->ingestionInputConfiguration->s3InputConfiguration->bucket = 'aut';
    $request->startDataIngestionJobRequest->ingestionInputConfiguration->s3InputConfiguration->keyPattern = 'cumque';
    $request->startDataIngestionJobRequest->ingestionInputConfiguration->s3InputConfiguration->prefix = 'corporis';
    $request->startDataIngestionJobRequest->roleArn = 'hic';
    $request->xAmzAlgorithm = 'libero';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'dolores';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'eaque';
    $request->xAmzTarget = StartDataIngestionJobXAmzTargetEnum::AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_START_DATA_INGESTION_JOB;

    $response = $sdk->sdk->startDataIngestionJob($request);

    if ($response->startDataIngestionJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startInferenceScheduler

Starts an inference scheduler. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartInferenceSchedulerRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartInferenceSchedulerRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartInferenceSchedulerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartInferenceSchedulerRequest();
    $request->startInferenceSchedulerRequest = new StartInferenceSchedulerRequest();
    $request->startInferenceSchedulerRequest->inferenceSchedulerName = 'quis';
    $request->xAmzAlgorithm = 'nesciunt';
    $request->xAmzContentSha256 = 'eos';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'dolores';
    $request->xAmzSecurityToken = 'minus';
    $request->xAmzSignature = 'quam';
    $request->xAmzSignedHeaders = 'dolor';
    $request->xAmzTarget = StartInferenceSchedulerXAmzTargetEnum::AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_START_INFERENCE_SCHEDULER;

    $response = $sdk->sdk->startInferenceScheduler($request);

    if ($response->startInferenceSchedulerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopInferenceScheduler

Stops an inference scheduler. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopInferenceSchedulerRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopInferenceSchedulerRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopInferenceSchedulerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopInferenceSchedulerRequest();
    $request->stopInferenceSchedulerRequest = new StopInferenceSchedulerRequest();
    $request->stopInferenceSchedulerRequest->inferenceSchedulerName = 'vero';
    $request->xAmzAlgorithm = 'nostrum';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'recusandae';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'perspiciatis';
    $request->xAmzSignedHeaders = 'voluptatem';
    $request->xAmzTarget = StopInferenceSchedulerXAmzTargetEnum::AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_STOP_INFERENCE_SCHEDULER;

    $response = $sdk->sdk->stopInferenceScheduler($request);

    if ($response->stopInferenceSchedulerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Associates a given tag to a resource in your account. A tag is a key-value pair which can be added to an Amazon Lookout for Equipment resource as metadata. Tags can be used for organizing your resources as well as helping you to search and filter by tag. Multiple tags can be added to a resource, either when you create it, or later. Up to 50 tags can be associated with each resource. 

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
    $request->tagResourceRequest->resourceArn = 'porro';
    $request->tagResourceRequest->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'blanditiis';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'eaque';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'rerum';
    $request->xAmzSignature = 'adipisci';
    $request->xAmzSignedHeaders = 'asperiores';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes a specific tag from a given resource. The tag is specified by its key. 

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
    $request->untagResourceRequest->resourceArn = 'earum';
    $request->untagResourceRequest->tagKeys = [
        'iste',
        'dolorum',
    ];
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'quaerat';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateInferenceScheduler

Updates an inference scheduler. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInferenceSchedulerRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateInferenceSchedulerRequest;
use \OpenAPI\OpenAPI\Models\Shared\InferenceInputConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\InferenceInputNameConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\InferenceS3InputConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\InferenceOutputConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\InferenceS3OutputConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DataUploadFrequencyEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInferenceSchedulerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateInferenceSchedulerRequest();
    $request->updateInferenceSchedulerRequest = new UpdateInferenceSchedulerRequest();
    $request->updateInferenceSchedulerRequest->dataDelayOffsetInMinutes = 554242;
    $request->updateInferenceSchedulerRequest->dataInputConfiguration = new InferenceInputConfiguration();
    $request->updateInferenceSchedulerRequest->dataInputConfiguration->inferenceInputNameConfiguration = new InferenceInputNameConfiguration();
    $request->updateInferenceSchedulerRequest->dataInputConfiguration->inferenceInputNameConfiguration->componentTimestampDelimiter = 'aliquid';
    $request->updateInferenceSchedulerRequest->dataInputConfiguration->inferenceInputNameConfiguration->timestampFormat = 'dolorem';
    $request->updateInferenceSchedulerRequest->dataInputConfiguration->inputTimeZoneOffset = 'dolorem';
    $request->updateInferenceSchedulerRequest->dataInputConfiguration->s3InputConfiguration = new InferenceS3InputConfiguration();
    $request->updateInferenceSchedulerRequest->dataInputConfiguration->s3InputConfiguration->bucket = 'dolor';
    $request->updateInferenceSchedulerRequest->dataInputConfiguration->s3InputConfiguration->prefix = 'qui';
    $request->updateInferenceSchedulerRequest->dataOutputConfiguration = new InferenceOutputConfiguration();
    $request->updateInferenceSchedulerRequest->dataOutputConfiguration->kmsKeyId = 'ipsum';
    $request->updateInferenceSchedulerRequest->dataOutputConfiguration->s3OutputConfiguration = new InferenceS3OutputConfiguration();
    $request->updateInferenceSchedulerRequest->dataOutputConfiguration->s3OutputConfiguration->bucket = 'hic';
    $request->updateInferenceSchedulerRequest->dataOutputConfiguration->s3OutputConfiguration->prefix = 'excepturi';
    $request->updateInferenceSchedulerRequest->dataUploadFrequency = DataUploadFrequencyEnum::PT30_M;
    $request->updateInferenceSchedulerRequest->inferenceSchedulerName = 'voluptate';
    $request->updateInferenceSchedulerRequest->roleArn = 'dignissimos';
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'numquam';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->xAmzTarget = UpdateInferenceSchedulerXAmzTargetEnum::AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_UPDATE_INFERENCE_SCHEDULER;

    $response = $sdk->sdk->updateInferenceScheduler($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateLabelGroup

 Updates the label group. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLabelGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateLabelGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLabelGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateLabelGroupRequest();
    $request->updateLabelGroupRequest = new UpdateLabelGroupRequest();
    $request->updateLabelGroupRequest->faultCodes = [
        'odio',
        'quaerat',
    ];
    $request->updateLabelGroupRequest->labelGroupName = 'accusamus';
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'voluptas';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'eos';
    $request->xAmzSignature = 'atque';
    $request->xAmzSignedHeaders = 'sit';
    $request->xAmzTarget = UpdateLabelGroupXAmzTargetEnum::AWS_LOOKOUT_EQUIPMENT_FRONTEND_SERVICE_UPDATE_LABEL_GROUP;

    $response = $sdk->sdk->updateLabelGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
