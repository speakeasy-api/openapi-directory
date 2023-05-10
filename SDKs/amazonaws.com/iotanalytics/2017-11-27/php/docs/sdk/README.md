# SDK

## Overview

<p>IoT Analytics allows you to collect large amounts of device data, process messages, and store them. You can then query the data and run sophisticated analytics on it. IoT Analytics enables advanced data exploration through integration with Jupyter Notebooks and data visualization through integration with Amazon QuickSight.</p> <p>Traditional analytics and business intelligence tools are designed to process structured data. IoT data often comes from devices that record noisy processes (such as temperature, motion, or sound). As a result the data from these devices can have significant gaps, corrupted messages, and false readings that must be cleaned up before analysis can occur. Also, IoT data is often only meaningful in the context of other data from external sources. </p> <p>IoT Analytics automates the steps required to analyze data from IoT devices. IoT Analytics filters, transforms, and enriches IoT data before storing it in a time-series data store for analysis. You can set up the service to collect only the data you need from your devices, apply mathematical transforms to process the data, and enrich the data with device-specific metadata such as device type and location before storing it. Then, you can analyze your data by running queries using the built-in SQL query engine, or perform more complex analytics and machine learning inference. IoT Analytics includes pre-built models for common IoT use cases so you can answer questions like which devices are about to fail or which customers are at risk of abandoning their wearable devices.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/iotanalytics/>
### Available Operations

* [batchPutMessage](#batchputmessage) - Sends messages to a channel.
* [cancelPipelineReprocessing](#cancelpipelinereprocessing) - Cancels the reprocessing of data through the pipeline.
* [createChannel](#createchannel) - Used to create a channel. A channel collects data from an MQTT topic and archives the raw, unprocessed messages before publishing the data to a pipeline.
* [createDataset](#createdataset) - Used to create a dataset. A dataset stores data retrieved from a data store by applying a <code>queryAction</code> (a SQL query) or a <code>containerAction</code> (executing a containerized application). This operation creates the skeleton of a dataset. The dataset can be populated manually by calling <code>CreateDatasetContent</code> or automatically according to a trigger you specify.
* [createDatasetContent](#createdatasetcontent) - Creates the content of a dataset by applying a <code>queryAction</code> (a SQL query) or a <code>containerAction</code> (executing a containerized application).
* [createDatastore](#createdatastore) - Creates a data store, which is a repository for messages.
* [createPipeline](#createpipeline) - Creates a pipeline. A pipeline consumes messages from a channel and allows you to process the messages before storing them in a data store. You must specify both a <code>channel</code> and a <code>datastore</code> activity and, optionally, as many as 23 additional activities in the <code>pipelineActivities</code> array.
* [deleteChannel](#deletechannel) - Deletes the specified channel.
* [deleteDataset](#deletedataset) - <p>Deletes the specified dataset.</p> <p>You do not have to delete the content of the dataset before you perform this operation.</p>
* [deleteDatasetContent](#deletedatasetcontent) - Deletes the content of the specified dataset.
* [deleteDatastore](#deletedatastore) - Deletes the specified data store.
* [deletePipeline](#deletepipeline) - Deletes the specified pipeline.
* [describeChannel](#describechannel) - Retrieves information about a channel.
* [describeDataset](#describedataset) - Retrieves information about a dataset.
* [describeDatastore](#describedatastore) - Retrieves information about a data store.
* [describeLoggingOptions](#describeloggingoptions) - Retrieves the current settings of the IoT Analytics logging options.
* [describePipeline](#describepipeline) - Retrieves information about a pipeline.
* [getDatasetContent](#getdatasetcontent) - Retrieves the contents of a dataset as presigned URIs.
* [listChannels](#listchannels) - Retrieves a list of channels.
* [listDatasetContents](#listdatasetcontents) - Lists information about dataset contents that have been created.
* [listDatasets](#listdatasets) - Retrieves information about datasets.
* [listDatastores](#listdatastores) - Retrieves a list of data stores.
* [listPipelines](#listpipelines) - Retrieves a list of pipelines.
* [listTagsForResource](#listtagsforresource) - Lists the tags (metadata) that you have assigned to the resource.
* [putLoggingOptions](#putloggingoptions) - <p>Sets or updates the IoT Analytics logging options.</p> <p>If you update the value of any <code>loggingOptions</code> field, it takes up to one minute for the change to take effect. Also, if you change the policy attached to the role you specified in the <code>roleArn</code> field (for example, to correct an invalid policy), it takes up to five minutes for that change to take effect. </p>
* [runPipelineActivity](#runpipelineactivity) - Simulates the results of running a pipeline activity on a message payload.
* [sampleChannelData](#samplechanneldata) - Retrieves a sample of messages from the specified channel ingested during the specified timeframe. Up to 10 messages can be retrieved.
* [startPipelineReprocessing](#startpipelinereprocessing) - Starts the reprocessing of raw message data through the pipeline.
* [tagResource](#tagresource) - Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource.
* [untagResource](#untagresource) - Removes the given tags (metadata) from the resource.
* [updateChannel](#updatechannel) - Used to update the settings of a channel.
* [updateDataset](#updatedataset) - Updates the settings of a dataset.
* [updateDatastore](#updatedatastore) - Used to update the settings of a data store.
* [updatePipeline](#updatepipeline) - Updates the settings of a pipeline. You must specify both a <code>channel</code> and a <code>datastore</code> activity and, optionally, as many as 23 additional activities in the <code>pipelineActivities</code> array.

## batchPutMessage

Sends messages to a channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchPutMessageRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchPutMessageRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Message;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchPutMessageRequest();
    $request->requestBody = new BatchPutMessageRequestBody();
    $request->requestBody->channelName = 'error';
    $request->requestBody->messages = [
        new Message(),
        new Message(),
        new Message(),
    ];
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'tempora';

    $response = $sdk->sdk->batchPutMessage($request);

    if ($response->batchPutMessageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cancelPipelineReprocessing

Cancels the reprocessing of data through the pipeline.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelPipelineReprocessingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelPipelineReprocessingRequest();
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'minus';
    $request->xAmzDate = 'placeat';
    $request->xAmzSecurityToken = 'voluptatum';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->pipelineName = 'nisi';
    $request->reprocessingId = 'recusandae';

    $response = $sdk->sdk->cancelPipelineReprocessing($request);

    if ($response->cancelPipelineReprocessingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createChannel

Used to create a channel. A channel collects data from an MQTT topic and archives the raw, unprocessed messages before publishing the data to a pipeline.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateChannelRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateChannelRequestBodyChannelStorage;
use \OpenAPI\OpenAPI\Models\Shared\CustomerManagedChannelS3Storage;
use \OpenAPI\OpenAPI\Models\Operations\CreateChannelRequestBodyRetentionPeriod;
use \OpenAPI\OpenAPI\Models\Shared\Tag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateChannelRequest();
    $request->requestBody = new CreateChannelRequestBody();
    $request->requestBody->channelName = 'temporibus';
    $request->requestBody->channelStorage = new CreateChannelRequestBodyChannelStorage();
    $request->requestBody->channelStorage->customerManagedS3 = new CustomerManagedChannelS3Storage();
    $request->requestBody->channelStorage->customerManagedS3->bucket = 'ab';
    $request->requestBody->channelStorage->customerManagedS3->keyPrefix = 'quis';
    $request->requestBody->channelStorage->customerManagedS3->roleArn = 'veritatis';
    $request->requestBody->channelStorage->serviceManagedS3 = [
        'perferendis' => 'ipsam',
        'repellendus' => 'sapiente',
        'quo' => 'odit',
    ];
    $request->requestBody->retentionPeriod = new CreateChannelRequestBodyRetentionPeriod();
    $request->requestBody->retentionPeriod->numberOfDays = 870013;
    $request->requestBody->retentionPeriod->unlimited = false;
    $request->requestBody->tags = [
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

    $response = $sdk->sdk->createChannel($request);

    if ($response->createChannelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDataset

Used to create a dataset. A dataset stores data retrieved from a data store by applying a <code>queryAction</code> (a SQL query) or a <code>containerAction</code> (executing a containerized application). This operation creates the skeleton of a dataset. The dataset can be populated manually by calling <code>CreateDatasetContent</code> or automatically according to a trigger you specify.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDatasetRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDatasetRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\DatasetAction;
use \OpenAPI\OpenAPI\Models\Shared\ContainerDatasetAction;
use \OpenAPI\OpenAPI\Models\Shared\ResourceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ComputeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Variable;
use \OpenAPI\OpenAPI\Models\Shared\DatasetContentVersionValue;
use \OpenAPI\OpenAPI\Models\Shared\OutputFileUriValue;
use \OpenAPI\OpenAPI\Models\Shared\SqlQueryDatasetAction;
use \OpenAPI\OpenAPI\Models\Shared\QueryFilter;
use \OpenAPI\OpenAPI\Models\Shared\DeltaTime;
use \OpenAPI\OpenAPI\Models\Shared\DatasetContentDeliveryRule;
use \OpenAPI\OpenAPI\Models\Shared\DatasetContentDeliveryDestination;
use \OpenAPI\OpenAPI\Models\Shared\IotEventsDestinationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\S3DestinationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\GlueConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\LateDataRule;
use \OpenAPI\OpenAPI\Models\Shared\LateDataRuleConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DeltaTimeSessionWindowConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\CreateDatasetRequestBodyRetentionPeriod;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\DatasetTrigger;
use \OpenAPI\OpenAPI\Models\Shared\TriggeringDataset;
use \OpenAPI\OpenAPI\Models\Shared\Schedule;
use \OpenAPI\OpenAPI\Models\Operations\CreateDatasetRequestBodyVersioningConfiguration;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDatasetRequest();
    $request->requestBody = new CreateDatasetRequestBody();
    $request->requestBody->actions = [
        new DatasetAction(),
        new DatasetAction(),
        new DatasetAction(),
    ];
    $request->requestBody->contentDeliveryRules = [
        new DatasetContentDeliveryRule(),
    ];
    $request->requestBody->datasetName = 'nam';
    $request->requestBody->lateDataRules = [
        new LateDataRule(),
        new LateDataRule(),
        new LateDataRule(),
    ];
    $request->requestBody->retentionPeriod = new CreateDatasetRequestBodyRetentionPeriod();
    $request->requestBody->retentionPeriod->numberOfDays = 582020;
    $request->requestBody->retentionPeriod->unlimited = false;
    $request->requestBody->tags = [
        new Tag(),
    ];
    $request->requestBody->triggers = [
        new DatasetTrigger(),
        new DatasetTrigger(),
        new DatasetTrigger(),
    ];
    $request->requestBody->versioningConfiguration = new CreateDatasetRequestBodyVersioningConfiguration();
    $request->requestBody->versioningConfiguration->maxVersions = 944669;
    $request->requestBody->versioningConfiguration->unlimited = false;
    $request->xAmzAlgorithm = 'optio';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'beatae';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'qui';

    $response = $sdk->sdk->createDataset($request);

    if ($response->createDatasetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDatasetContent

Creates the content of a dataset by applying a <code>queryAction</code> (a SQL query) or a <code>containerAction</code> (executing a containerized application).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDatasetContentRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDatasetContentRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDatasetContentRequest();
    $request->requestBody = new CreateDatasetContentRequestBody();
    $request->requestBody->versionId = 'impedit';
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'ad';
    $request->datasetName = 'natus';

    $response = $sdk->sdk->createDatasetContent($request);

    if ($response->createDatasetContentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDatastore

Creates a data store, which is a repository for messages.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDatastoreRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDatastoreRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateDatastoreRequestBodyDatastorePartitions;
use \OpenAPI\OpenAPI\Models\Shared\DatastorePartition;
use \OpenAPI\OpenAPI\Models\Shared\Partition;
use \OpenAPI\OpenAPI\Models\Shared\TimestampPartition;
use \OpenAPI\OpenAPI\Models\Operations\CreateDatastoreRequestBodyDatastoreStorage;
use \OpenAPI\OpenAPI\Models\Shared\CustomerManagedDatastoreS3Storage;
use \OpenAPI\OpenAPI\Models\Shared\DatastoreIotSiteWiseMultiLayerStorage;
use \OpenAPI\OpenAPI\Models\Shared\IotSiteWiseCustomerManagedDatastoreS3Storage;
use \OpenAPI\OpenAPI\Models\Operations\CreateDatastoreRequestBodyFileFormatConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ParquetConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\SchemaDefinition;
use \OpenAPI\OpenAPI\Models\Shared\Column;
use \OpenAPI\OpenAPI\Models\Operations\CreateDatastoreRequestBodyRetentionPeriod;
use \OpenAPI\OpenAPI\Models\Shared\Tag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDatastoreRequest();
    $request->requestBody = new CreateDatastoreRequestBody();
    $request->requestBody->datastoreName = 'sed';
    $request->requestBody->datastorePartitions = new CreateDatastoreRequestBodyDatastorePartitions();
    $request->requestBody->datastorePartitions->partitions = [
        new DatastorePartition(),
        new DatastorePartition(),
        new DatastorePartition(),
    ];
    $request->requestBody->datastoreStorage = new CreateDatastoreRequestBodyDatastoreStorage();
    $request->requestBody->datastoreStorage->customerManagedS3 = new CustomerManagedDatastoreS3Storage();
    $request->requestBody->datastoreStorage->customerManagedS3->bucket = 'dolor';
    $request->requestBody->datastoreStorage->customerManagedS3->keyPrefix = 'natus';
    $request->requestBody->datastoreStorage->customerManagedS3->roleArn = 'laboriosam';
    $request->requestBody->datastoreStorage->iotSiteWiseMultiLayerStorage = new DatastoreIotSiteWiseMultiLayerStorage();
    $request->requestBody->datastoreStorage->iotSiteWiseMultiLayerStorage->customerManagedS3Storage = new IotSiteWiseCustomerManagedDatastoreS3Storage();
    $request->requestBody->datastoreStorage->iotSiteWiseMultiLayerStorage->customerManagedS3Storage->bucket = 'hic';
    $request->requestBody->datastoreStorage->iotSiteWiseMultiLayerStorage->customerManagedS3Storage->keyPrefix = 'saepe';
    $request->requestBody->datastoreStorage->serviceManagedS3 = [
        'in' => 'corporis',
        'iste' => 'iure',
        'saepe' => 'quidem',
    ];
    $request->requestBody->fileFormatConfiguration = new CreateDatastoreRequestBodyFileFormatConfiguration();
    $request->requestBody->fileFormatConfiguration->jsonConfiguration = [
        'ipsa' => 'reiciendis',
    ];
    $request->requestBody->fileFormatConfiguration->parquetConfiguration = new ParquetConfiguration();
    $request->requestBody->fileFormatConfiguration->parquetConfiguration->schemaDefinition = new SchemaDefinition();
    $request->requestBody->fileFormatConfiguration->parquetConfiguration->schemaDefinition->columns = [
        new Column(),
        new Column(),
        new Column(),
    ];
    $request->requestBody->retentionPeriod = new CreateDatastoreRequestBodyRetentionPeriod();
    $request->requestBody->retentionPeriod->numberOfDays = 653140;
    $request->requestBody->retentionPeriod->unlimited = false;
    $request->requestBody->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'dolores';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'omnis';

    $response = $sdk->sdk->createDatastore($request);

    if ($response->createDatastoreResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPipeline

Creates a pipeline. A pipeline consumes messages from a channel and allows you to process the messages before storing them in a data store. You must specify both a <code>channel</code> and a <code>datastore</code> activity and, optionally, as many as 23 additional activities in the <code>pipelineActivities</code> array.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreatePipelineRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreatePipelineRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\PipelineActivity;
use \OpenAPI\OpenAPI\Models\Shared\AddAttributesActivity;
use \OpenAPI\OpenAPI\Models\Shared\ChannelActivity;
use \OpenAPI\OpenAPI\Models\Shared\DatastoreActivity;
use \OpenAPI\OpenAPI\Models\Shared\DeviceRegistryEnrichActivity;
use \OpenAPI\OpenAPI\Models\Shared\DeviceShadowEnrichActivity;
use \OpenAPI\OpenAPI\Models\Shared\FilterActivity;
use \OpenAPI\OpenAPI\Models\Shared\LambdaActivity;
use \OpenAPI\OpenAPI\Models\Shared\MathActivity;
use \OpenAPI\OpenAPI\Models\Shared\RemoveAttributesActivity;
use \OpenAPI\OpenAPI\Models\Shared\SelectAttributesActivity;
use \OpenAPI\OpenAPI\Models\Shared\Tag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePipelineRequest();
    $request->requestBody = new CreatePipelineRequestBody();
    $request->requestBody->pipelineActivities = [
        new PipelineActivity(),
        new PipelineActivity(),
    ];
    $request->requestBody->pipelineName = 'minima';
    $request->requestBody->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'culpa';
    $request->xAmzDate = 'doloribus';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'mollitia';

    $response = $sdk->sdk->createPipeline($request);

    if ($response->createPipelineResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteChannel

Deletes the specified channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteChannelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteChannelRequest();
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'culpa';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'repellat';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'numquam';
    $request->channelName = 'commodi';

    $response = $sdk->sdk->deleteChannel($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDataset

<p>Deletes the specified dataset.</p> <p>You do not have to delete the content of the dataset before you perform this operation.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDatasetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDatasetRequest();
    $request->xAmzAlgorithm = 'quam';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'velit';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'quia';
    $request->xAmzSignature = 'quis';
    $request->xAmzSignedHeaders = 'vitae';
    $request->datasetName = 'laborum';

    $response = $sdk->sdk->deleteDataset($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDatasetContent

Deletes the content of the specified dataset.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDatasetContentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDatasetContentRequest();
    $request->xAmzAlgorithm = 'animi';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'sequi';
    $request->xAmzSignature = 'tenetur';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->datasetName = 'id';
    $request->versionId = 'possimus';

    $response = $sdk->sdk->deleteDatasetContent($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDatastore

Deletes the specified data store.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDatastoreRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDatastoreRequest();
    $request->xAmzAlgorithm = 'aut';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'temporibus';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->datastoreName = 'voluptatibus';

    $response = $sdk->sdk->deleteDatastore($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePipeline

Deletes the specified pipeline.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletePipelineRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePipelineRequest();
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'nihil';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'voluptate';
    $request->pipelineName = 'cum';

    $response = $sdk->sdk->deletePipeline($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeChannel

Retrieves information about a channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeChannelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeChannelRequest();
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'doloremque';
    $request->xAmzCredential = 'reprehenderit';
    $request->xAmzDate = 'ut';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'corporis';
    $request->channelName = 'dolore';
    $request->includeStatistics = false;

    $response = $sdk->sdk->describeChannel($request);

    if ($response->describeChannelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeDataset

Retrieves information about a dataset.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDatasetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDatasetRequest();
    $request->xAmzAlgorithm = 'iusto';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'harum';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'repudiandae';
    $request->datasetName = 'quae';

    $response = $sdk->sdk->describeDataset($request);

    if ($response->describeDatasetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeDatastore

Retrieves information about a data store.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDatastoreRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDatastoreRequest();
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'molestias';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'praesentium';
    $request->datastoreName = 'rem';
    $request->includeStatistics = false;

    $response = $sdk->sdk->describeDatastore($request);

    if ($response->describeDatastoreResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeLoggingOptions

Retrieves the current settings of the IoT Analytics logging options.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeLoggingOptionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeLoggingOptionsRequest();
    $request->xAmzAlgorithm = 'voluptates';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'repudiandae';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'itaque';
    $request->xAmzSignedHeaders = 'incidunt';

    $response = $sdk->sdk->describeLoggingOptions($request);

    if ($response->describeLoggingOptionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describePipeline

Retrieves information about a pipeline.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribePipelineRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribePipelineRequest();
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'consequatur';
    $request->xAmzCredential = 'est';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'explicabo';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'distinctio';
    $request->pipelineName = 'quibusdam';

    $response = $sdk->sdk->describePipeline($request);

    if ($response->describePipelineResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDatasetContent

Retrieves the contents of a dataset as presigned URIs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDatasetContentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDatasetContentRequest();
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'cupiditate';
    $request->xAmzSignature = 'quos';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->datasetName = 'magni';
    $request->versionId = 'assumenda';

    $response = $sdk->sdk->getDatasetContent($request);

    if ($response->getDatasetContentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listChannels

Retrieves a list of channels.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListChannelsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListChannelsRequest();
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'alias';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'tempora';
    $request->xAmzSignedHeaders = 'facilis';
    $request->maxResults = 735194;
    $request->nextToken = 'labore';

    $response = $sdk->sdk->listChannels($request);

    if ($response->listChannelsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDatasetContents

Lists information about dataset contents that have been created.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDatasetContentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDatasetContentsRequest();
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'non';
    $request->xAmzDate = 'eligendi';
    $request->xAmzSecurityToken = 'sint';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'provident';
    $request->datasetName = 'necessitatibus';
    $request->maxResults = 572252;
    $request->nextToken = 'officia';
    $request->scheduledBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-09T13:58:59.361Z');
    $request->scheduledOnOrAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-12-17T08:08:22.040Z');

    $response = $sdk->sdk->listDatasetContents($request);

    if ($response->listDatasetContentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDatasets

Retrieves information about datasets.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDatasetsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDatasetsRequest();
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'rerum';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'magnam';
    $request->maxResults = 767024;
    $request->nextToken = 'facere';

    $response = $sdk->sdk->listDatasets($request);

    if ($response->listDatasetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDatastores

Retrieves a list of data stores.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDatastoresRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDatastoresRequest();
    $request->xAmzAlgorithm = 'ea';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'non';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'enim';
    $request->maxResults = 881736;
    $request->nextToken = 'delectus';

    $response = $sdk->sdk->listDatastores($request);

    if ($response->listDatastoresResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPipelines

Retrieves a list of pipelines.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPipelinesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPipelinesRequest();
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'blanditiis';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'sapiente';
    $request->maxResults = 230533;
    $request->nextToken = 'deserunt';

    $response = $sdk->sdk->listPipelines($request);

    if ($response->listPipelinesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Lists the tags (metadata) that you have assigned to the resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->xAmzAlgorithm = 'nisi';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'nihil';
    $request->resourceArn = 'magnam';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putLoggingOptions

<p>Sets or updates the IoT Analytics logging options.</p> <p>If you update the value of any <code>loggingOptions</code> field, it takes up to one minute for the change to take effect. Also, if you change the policy attached to the role you specified in the <code>roleArn</code> field (for example, to correct an invalid policy), it takes up to five minutes for that change to take effect. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutLoggingOptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutLoggingOptionsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PutLoggingOptionsRequestBodyLoggingOptions;
use \OpenAPI\OpenAPI\Models\Shared\LoggingLevelEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutLoggingOptionsRequest();
    $request->requestBody = new PutLoggingOptionsRequestBody();
    $request->requestBody->loggingOptions = new PutLoggingOptionsRequestBodyLoggingOptions();
    $request->requestBody->loggingOptions->enabled = false;
    $request->requestBody->loggingOptions->level = LoggingLevelEnum::ERROR;
    $request->requestBody->loggingOptions->roleArn = 'distinctio';
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'eum';

    $response = $sdk->sdk->putLoggingOptions($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runPipelineActivity

Simulates the results of running a pipeline activity on a message payload.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RunPipelineActivityRequest;
use \OpenAPI\OpenAPI\Models\Operations\RunPipelineActivityRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\RunPipelineActivityRequestBodyPipelineActivity;
use \OpenAPI\OpenAPI\Models\Shared\AddAttributesActivity;
use \OpenAPI\OpenAPI\Models\Shared\ChannelActivity;
use \OpenAPI\OpenAPI\Models\Shared\DatastoreActivity;
use \OpenAPI\OpenAPI\Models\Shared\DeviceRegistryEnrichActivity;
use \OpenAPI\OpenAPI\Models\Shared\DeviceShadowEnrichActivity;
use \OpenAPI\OpenAPI\Models\Shared\FilterActivity;
use \OpenAPI\OpenAPI\Models\Shared\LambdaActivity;
use \OpenAPI\OpenAPI\Models\Shared\MathActivity;
use \OpenAPI\OpenAPI\Models\Shared\RemoveAttributesActivity;
use \OpenAPI\OpenAPI\Models\Shared\SelectAttributesActivity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunPipelineActivityRequest();
    $request->requestBody = new RunPipelineActivityRequestBody();
    $request->requestBody->payloads = [
        'aspernatur',
        'architecto',
        'magnam',
        'et',
    ];
    $request->requestBody->pipelineActivity = new RunPipelineActivityRequestBodyPipelineActivity();
    $request->requestBody->pipelineActivity->addAttributes = new AddAttributesActivity();
    $request->requestBody->pipelineActivity->addAttributes->attributes = [
        'ullam' => 'provident',
        'quos' => 'sint',
        'accusantium' => 'mollitia',
    ];
    $request->requestBody->pipelineActivity->addAttributes->name = 'Shaun Hammes';
    $request->requestBody->pipelineActivity->addAttributes->next = 'necessitatibus';
    $request->requestBody->pipelineActivity->channel = new ChannelActivity();
    $request->requestBody->pipelineActivity->channel->channelName = 'odit';
    $request->requestBody->pipelineActivity->channel->name = 'Joyce Kertzmann';
    $request->requestBody->pipelineActivity->channel->next = 'eius';
    $request->requestBody->pipelineActivity->datastore = new DatastoreActivity();
    $request->requestBody->pipelineActivity->datastore->datastoreName = 'maxime';
    $request->requestBody->pipelineActivity->datastore->name = 'Mr. Andres King';
    $request->requestBody->pipelineActivity->deviceRegistryEnrich = new DeviceRegistryEnrichActivity();
    $request->requestBody->pipelineActivity->deviceRegistryEnrich->attribute = 'ullam';
    $request->requestBody->pipelineActivity->deviceRegistryEnrich->name = 'Jessie Zulauf';
    $request->requestBody->pipelineActivity->deviceRegistryEnrich->next = 'saepe';
    $request->requestBody->pipelineActivity->deviceRegistryEnrich->roleArn = 'pariatur';
    $request->requestBody->pipelineActivity->deviceRegistryEnrich->thingName = 'accusantium';
    $request->requestBody->pipelineActivity->deviceShadowEnrich = new DeviceShadowEnrichActivity();
    $request->requestBody->pipelineActivity->deviceShadowEnrich->attribute = 'consequuntur';
    $request->requestBody->pipelineActivity->deviceShadowEnrich->name = 'Miss Nick Cummerata';
    $request->requestBody->pipelineActivity->deviceShadowEnrich->next = 'pariatur';
    $request->requestBody->pipelineActivity->deviceShadowEnrich->roleArn = 'maxime';
    $request->requestBody->pipelineActivity->deviceShadowEnrich->thingName = 'ea';
    $request->requestBody->pipelineActivity->filter = new FilterActivity();
    $request->requestBody->pipelineActivity->filter->filter = 'excepturi';
    $request->requestBody->pipelineActivity->filter->name = 'Dr. Rosemary Bartoletti';
    $request->requestBody->pipelineActivity->filter->next = 'ipsam';
    $request->requestBody->pipelineActivity->lambda = new LambdaActivity();
    $request->requestBody->pipelineActivity->lambda->batchSize = 453543;
    $request->requestBody->pipelineActivity->lambda->lambdaName = 'autem';
    $request->requestBody->pipelineActivity->lambda->name = 'Gary Streich';
    $request->requestBody->pipelineActivity->lambda->next = 'perferendis';
    $request->requestBody->pipelineActivity->math = new MathActivity();
    $request->requestBody->pipelineActivity->math->attribute = 'fugiat';
    $request->requestBody->pipelineActivity->math->math = 'amet';
    $request->requestBody->pipelineActivity->math->name = 'Erma Hessel';
    $request->requestBody->pipelineActivity->math->next = 'nobis';
    $request->requestBody->pipelineActivity->removeAttributes = new RemoveAttributesActivity();
    $request->requestBody->pipelineActivity->removeAttributes->attributes = [
        'quis',
    ];
    $request->requestBody->pipelineActivity->removeAttributes->name = 'Lance Becker';
    $request->requestBody->pipelineActivity->removeAttributes->next = 'eos';
    $request->requestBody->pipelineActivity->selectAttributes = new SelectAttributesActivity();
    $request->requestBody->pipelineActivity->selectAttributes->attributes = [
        'dolores',
    ];
    $request->requestBody->pipelineActivity->selectAttributes->name = 'Darryl Fadel';
    $request->requestBody->pipelineActivity->selectAttributes->next = 'hic';
    $request->xAmzAlgorithm = 'recusandae';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'perspiciatis';
    $request->xAmzSecurityToken = 'voluptatem';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'consequuntur';

    $response = $sdk->sdk->runPipelineActivity($request);

    if ($response->runPipelineActivityResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sampleChannelData

Retrieves a sample of messages from the specified channel ingested during the specified timeframe. Up to 10 messages can be retrieved.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SampleChannelDataRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SampleChannelDataRequest();
    $request->xAmzAlgorithm = 'blanditiis';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'eaque';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'rerum';
    $request->xAmzSignature = 'adipisci';
    $request->xAmzSignedHeaders = 'asperiores';
    $request->channelName = 'earum';
    $request->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-21T21:39:29.335Z');
    $request->maxMessages = 679091;
    $request->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-10T01:47:20.724Z');

    $response = $sdk->sdk->sampleChannelData($request);

    if ($response->sampleChannelDataResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startPipelineReprocessing

Starts the reprocessing of raw message data through the pipeline.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartPipelineReprocessingRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartPipelineReprocessingRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\StartPipelineReprocessingRequestBodyChannelMessages;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartPipelineReprocessingRequest();
    $request->requestBody = new StartPipelineReprocessingRequestBody();
    $request->requestBody->channelMessages = new StartPipelineReprocessingRequestBodyChannelMessages();
    $request->requestBody->channelMessages->s3Paths = [
        'nobis',
        'libero',
        'delectus',
    ];
    $request->requestBody->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-12T16:50:10.090Z');
    $request->requestBody->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-15T11:27:32.342Z');
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'cum';
    $request->pipelineName = 'voluptate';

    $response = $sdk->sdk->startPipelineReprocessing($request);

    if ($response->startPipelineReprocessingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Tag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->requestBody = new TagResourceRequestBody();
    $request->requestBody->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'numquam';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->resourceArn = 'iure';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes the given tags (metadata) from the resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->xAmzAlgorithm = 'odio';
    $request->xAmzContentSha256 = 'quaerat';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'voluptas';
    $request->xAmzSignedHeaders = 'natus';
    $request->resourceArn = 'eos';
    $request->tagKeys = [
        'sit',
        'fugiat',
        'ab',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateChannel

Used to update the settings of a channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateChannelRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateChannelRequestBodyChannelStorage;
use \OpenAPI\OpenAPI\Models\Shared\CustomerManagedChannelS3Storage;
use \OpenAPI\OpenAPI\Models\Operations\UpdateChannelRequestBodyRetentionPeriod;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateChannelRequest();
    $request->requestBody = new UpdateChannelRequestBody();
    $request->requestBody->channelStorage = new UpdateChannelRequestBodyChannelStorage();
    $request->requestBody->channelStorage->customerManagedS3 = new CustomerManagedChannelS3Storage();
    $request->requestBody->channelStorage->customerManagedS3->bucket = 'soluta';
    $request->requestBody->channelStorage->customerManagedS3->keyPrefix = 'dolorum';
    $request->requestBody->channelStorage->customerManagedS3->roleArn = 'iusto';
    $request->requestBody->channelStorage->serviceManagedS3 = [
        'dolorum' => 'deleniti',
        'omnis' => 'necessitatibus',
    ];
    $request->requestBody->retentionPeriod = new UpdateChannelRequestBodyRetentionPeriod();
    $request->requestBody->retentionPeriod->numberOfDays = 714697;
    $request->requestBody->retentionPeriod->unlimited = false;
    $request->xAmzAlgorithm = 'asperiores';
    $request->xAmzContentSha256 = 'nihil';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'id';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'eius';
    $request->channelName = 'aspernatur';

    $response = $sdk->sdk->updateChannel($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDataset

Updates the settings of a dataset.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDatasetRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDatasetRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\DatasetAction;
use \OpenAPI\OpenAPI\Models\Shared\ContainerDatasetAction;
use \OpenAPI\OpenAPI\Models\Shared\ResourceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ComputeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Variable;
use \OpenAPI\OpenAPI\Models\Shared\DatasetContentVersionValue;
use \OpenAPI\OpenAPI\Models\Shared\OutputFileUriValue;
use \OpenAPI\OpenAPI\Models\Shared\SqlQueryDatasetAction;
use \OpenAPI\OpenAPI\Models\Shared\QueryFilter;
use \OpenAPI\OpenAPI\Models\Shared\DeltaTime;
use \OpenAPI\OpenAPI\Models\Shared\DatasetContentDeliveryRule;
use \OpenAPI\OpenAPI\Models\Shared\DatasetContentDeliveryDestination;
use \OpenAPI\OpenAPI\Models\Shared\IotEventsDestinationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\S3DestinationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\GlueConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\LateDataRule;
use \OpenAPI\OpenAPI\Models\Shared\LateDataRuleConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DeltaTimeSessionWindowConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDatasetRequestBodyRetentionPeriod;
use \OpenAPI\OpenAPI\Models\Shared\DatasetTrigger;
use \OpenAPI\OpenAPI\Models\Shared\TriggeringDataset;
use \OpenAPI\OpenAPI\Models\Shared\Schedule;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDatasetRequestBodyVersioningConfiguration;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDatasetRequest();
    $request->requestBody = new UpdateDatasetRequestBody();
    $request->requestBody->actions = [
        new DatasetAction(),
    ];
    $request->requestBody->contentDeliveryRules = [
        new DatasetContentDeliveryRule(),
    ];
    $request->requestBody->lateDataRules = [
        new LateDataRule(),
        new LateDataRule(),
        new LateDataRule(),
        new LateDataRule(),
    ];
    $request->requestBody->retentionPeriod = new UpdateDatasetRequestBodyRetentionPeriod();
    $request->requestBody->retentionPeriod->numberOfDays = 881586;
    $request->requestBody->retentionPeriod->unlimited = false;
    $request->requestBody->triggers = [
        new DatasetTrigger(),
        new DatasetTrigger(),
    ];
    $request->requestBody->versioningConfiguration = new UpdateDatasetRequestBodyVersioningConfiguration();
    $request->requestBody->versioningConfiguration->maxVersions = 904425;
    $request->requestBody->versioningConfiguration->unlimited = false;
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'repellendus';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'similique';
    $request->datasetName = 'alias';

    $response = $sdk->sdk->updateDataset($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDatastore

Used to update the settings of a data store.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDatastoreRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDatastoreRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDatastoreRequestBodyDatastoreStorage;
use \OpenAPI\OpenAPI\Models\Shared\CustomerManagedDatastoreS3Storage;
use \OpenAPI\OpenAPI\Models\Shared\DatastoreIotSiteWiseMultiLayerStorage;
use \OpenAPI\OpenAPI\Models\Shared\IotSiteWiseCustomerManagedDatastoreS3Storage;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDatastoreRequestBodyFileFormatConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ParquetConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\SchemaDefinition;
use \OpenAPI\OpenAPI\Models\Shared\Column;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDatastoreRequestBodyRetentionPeriod;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDatastoreRequest();
    $request->requestBody = new UpdateDatastoreRequestBody();
    $request->requestBody->datastoreStorage = new UpdateDatastoreRequestBodyDatastoreStorage();
    $request->requestBody->datastoreStorage->customerManagedS3 = new CustomerManagedDatastoreS3Storage();
    $request->requestBody->datastoreStorage->customerManagedS3->bucket = 'at';
    $request->requestBody->datastoreStorage->customerManagedS3->keyPrefix = 'quaerat';
    $request->requestBody->datastoreStorage->customerManagedS3->roleArn = 'tempora';
    $request->requestBody->datastoreStorage->iotSiteWiseMultiLayerStorage = new DatastoreIotSiteWiseMultiLayerStorage();
    $request->requestBody->datastoreStorage->iotSiteWiseMultiLayerStorage->customerManagedS3Storage = new IotSiteWiseCustomerManagedDatastoreS3Storage();
    $request->requestBody->datastoreStorage->iotSiteWiseMultiLayerStorage->customerManagedS3Storage->bucket = 'vel';
    $request->requestBody->datastoreStorage->iotSiteWiseMultiLayerStorage->customerManagedS3Storage->keyPrefix = 'quod';
    $request->requestBody->datastoreStorage->serviceManagedS3 = [
        'qui' => 'dolorum',
        'a' => 'esse',
        'harum' => 'iusto',
        'ipsum' => 'quisquam',
    ];
    $request->requestBody->fileFormatConfiguration = new UpdateDatastoreRequestBodyFileFormatConfiguration();
    $request->requestBody->fileFormatConfiguration->jsonConfiguration = [
        'amet' => 'tempore',
        'accusamus' => 'numquam',
        'enim' => 'dolorem',
        'sapiente' => 'totam',
    ];
    $request->requestBody->fileFormatConfiguration->parquetConfiguration = new ParquetConfiguration();
    $request->requestBody->fileFormatConfiguration->parquetConfiguration->schemaDefinition = new SchemaDefinition();
    $request->requestBody->fileFormatConfiguration->parquetConfiguration->schemaDefinition->columns = [
        new Column(),
        new Column(),
    ];
    $request->requestBody->retentionPeriod = new UpdateDatastoreRequestBodyRetentionPeriod();
    $request->requestBody->retentionPeriod->numberOfDays = 25662;
    $request->requestBody->retentionPeriod->unlimited = false;
    $request->xAmzAlgorithm = 'expedita';
    $request->xAmzContentSha256 = 'neque';
    $request->xAmzCredential = 'sed';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'voluptas';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->datastoreName = 'quam';

    $response = $sdk->sdk->updateDatastore($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePipeline

Updates the settings of a pipeline. You must specify both a <code>channel</code> and a <code>datastore</code> activity and, optionally, as many as 23 additional activities in the <code>pipelineActivities</code> array.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePipelineRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePipelineRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\PipelineActivity;
use \OpenAPI\OpenAPI\Models\Shared\AddAttributesActivity;
use \OpenAPI\OpenAPI\Models\Shared\ChannelActivity;
use \OpenAPI\OpenAPI\Models\Shared\DatastoreActivity;
use \OpenAPI\OpenAPI\Models\Shared\DeviceRegistryEnrichActivity;
use \OpenAPI\OpenAPI\Models\Shared\DeviceShadowEnrichActivity;
use \OpenAPI\OpenAPI\Models\Shared\FilterActivity;
use \OpenAPI\OpenAPI\Models\Shared\LambdaActivity;
use \OpenAPI\OpenAPI\Models\Shared\MathActivity;
use \OpenAPI\OpenAPI\Models\Shared\RemoveAttributesActivity;
use \OpenAPI\OpenAPI\Models\Shared\SelectAttributesActivity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePipelineRequest();
    $request->requestBody = new UpdatePipelineRequestBody();
    $request->requestBody->pipelineActivities = [
        new PipelineActivity(),
    ];
    $request->xAmzAlgorithm = 'incidunt';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'cupiditate';
    $request->xAmzDate = 'maxime';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'soluta';
    $request->xAmzSignedHeaders = 'dicta';
    $request->pipelineName = 'laborum';

    $response = $sdk->sdk->updatePipeline($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
