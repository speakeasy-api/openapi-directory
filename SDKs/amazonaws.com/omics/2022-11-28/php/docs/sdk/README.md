# SDK

## Overview

This is the <i>Amazon Omics API Reference</i>. For an introduction to the service, see <a href="https://docs.aws.amazon.com/omics/latest/dev/">What is Amazon Omics?</a> in the <i>Amazon Omics Developer Guide</i>.

Amazon Web Services documentation
<https://docs.aws.amazon.com/omics/>
### Available Operations

* [batchDeleteReadSet](#batchdeletereadset) - Deletes one or more read sets.
* [cancelAnnotationImportJob](#cancelannotationimportjob) - Cancels an annotation import job.
* [cancelRun](#cancelrun) - Cancels a run.
* [cancelVariantImportJob](#cancelvariantimportjob) - Cancels a variant import job.
* [createAnnotationStore](#createannotationstore) - Creates an annotation store.
* [createReferenceStore](#createreferencestore) - Creates a reference store.
* [createRunGroup](#createrungroup) - Creates a run group.
* [createSequenceStore](#createsequencestore) - Creates a sequence store.
* [createVariantStore](#createvariantstore) - Creates a variant store.
* [createWorkflow](#createworkflow) - Creates a workflow.
* [deleteAnnotationStore](#deleteannotationstore) - Deletes an annotation store.
* [deleteReference](#deletereference) - Deletes a genome reference.
* [deleteReferenceStore](#deletereferencestore) - Deletes a genome reference store.
* [deleteRun](#deleterun) - Deletes a workflow run.
* [deleteRunGroup](#deleterungroup) - Deletes a workflow run group.
* [deleteSequenceStore](#deletesequencestore) - Deletes a sequence store.
* [deleteVariantStore](#deletevariantstore) - Deletes a variant store.
* [deleteWorkflow](#deleteworkflow) - Deletes a workflow.
* [getAnnotationImportJob](#getannotationimportjob) - Gets information about an annotation import job.
* [getAnnotationStore](#getannotationstore) - Gets information about an annotation store.
* [getReadSet](#getreadset) - Gets a file from a read set.
* [getReadSetActivationJob](#getreadsetactivationjob) - Gets information about a read set activation job.
* [getReadSetExportJob](#getreadsetexportjob) - Gets information about a read set export job.
* [getReadSetImportJob](#getreadsetimportjob) - Gets information about a read set import job.
* [getReadSetMetadata](#getreadsetmetadata) - Gets details about a read set.
* [getReference](#getreference) - Gets a reference file.
* [getReferenceImportJob](#getreferenceimportjob) - Gets information about a reference import job.
* [getReferenceMetadata](#getreferencemetadata) - Gets information about a genome reference's metadata.
* [getReferenceStore](#getreferencestore) - Gets information about a reference store.
* [getRun](#getrun) - Gets information about a workflow run.
* [getRunGroup](#getrungroup) - Gets information about a workflow run group.
* [getRunTask](#getruntask) - Gets information about a workflow run task.
* [getSequenceStore](#getsequencestore) - Gets information about a sequence store.
* [getVariantImportJob](#getvariantimportjob) - Gets information about a variant import job.
* [getVariantStore](#getvariantstore) - Gets information about a variant store.
* [getWorkflow](#getworkflow) - Gets information about a workflow.
* [listAnnotationImportJobs](#listannotationimportjobs) - Retrieves a list of annotation import jobs.
* [listAnnotationStores](#listannotationstores) - Retrieves a list of annotation stores.
* [listReadSetActivationJobs](#listreadsetactivationjobs) - Retrieves a list of read set activation jobs.
* [listReadSetExportJobs](#listreadsetexportjobs) - Retrieves a list of read set export jobs.
* [listReadSetImportJobs](#listreadsetimportjobs) - Retrieves a list of read set import jobs.
* [listReadSets](#listreadsets) - Retrieves a list of read sets.
* [listReferenceImportJobs](#listreferenceimportjobs) - Retrieves a list of reference import jobs.
* [listReferenceStores](#listreferencestores) - Retrieves a list of reference stores.
* [listReferences](#listreferences) - Retrieves a list of references.
* [listRunGroups](#listrungroups) - Retrieves a list of run groups.
* [listRunTasks](#listruntasks) - Retrieves a list of tasks for a run.
* [listRuns](#listruns) - Retrieves a list of runs.
* [listSequenceStores](#listsequencestores) - Retrieves a list of sequence stores.
* [listTagsForResource](#listtagsforresource) - Retrieves a list of tags for a resource.
* [listVariantImportJobs](#listvariantimportjobs) - Retrieves a list of variant import jobs.
* [listVariantStores](#listvariantstores) - Retrieves a list of variant stores.
* [listWorkflows](#listworkflows) - Retrieves a list of workflows.
* [startAnnotationImportJob](#startannotationimportjob) - Starts an annotation import job.
* [startReadSetActivationJob](#startreadsetactivationjob) - Activates an archived read set. To reduce storage charges, Amazon Omics archives unused read sets after 30 days.
* [startReadSetExportJob](#startreadsetexportjob) - Exports a read set to Amazon S3.
* [startReadSetImportJob](#startreadsetimportjob) - Starts a read set import job.
* [startReferenceImportJob](#startreferenceimportjob) - Starts a reference import job.
* [startRun](#startrun) - Starts a run.
* [startVariantImportJob](#startvariantimportjob) - Starts a variant import job.
* [tagResource](#tagresource) - Tags a resource.
* [untagResource](#untagresource) - Removes tags from a resource.
* [updateAnnotationStore](#updateannotationstore) - Updates an annotation store.
* [updateRunGroup](#updaterungroup) - Updates a run group.
* [updateVariantStore](#updatevariantstore) - Updates a variant store.
* [updateWorkflow](#updateworkflow) - Updates a workflow.

## batchDeleteReadSet

Deletes one or more read sets.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchDeleteReadSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchDeleteReadSetRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchDeleteReadSetRequest();
    $request->requestBody = new BatchDeleteReadSetRequestBody();
    $request->requestBody->ids = [
        'magnam',
        'debitis',
    ];
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'minus';
    $request->xAmzSignedHeaders = 'placeat';
    $request->sequenceStoreId = 'voluptatum';

    $response = $sdk->sdk->batchDeleteReadSet($request);

    if ($response->batchDeleteReadSetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cancelAnnotationImportJob

Cancels an annotation import job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelAnnotationImportJobRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelAnnotationImportJobRequest();
    $request->xAmzAlgorithm = 'iusto';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'nisi';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'temporibus';
    $request->xAmzSignature = 'ab';
    $request->xAmzSignedHeaders = 'quis';
    $request->jobId = 'veritatis';

    $response = $sdk->sdk->cancelAnnotationImportJob($request);

    if ($response->cancelAnnotationImportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cancelRun

Cancels a run.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelRunRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelRunRequest();
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'repellendus';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'odit';
    $request->id = 'ddf7cc78-ca1b-4a92-8fc8-16742cb73920';

    $response = $sdk->sdk->cancelRun($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cancelVariantImportJob

Cancels a variant import job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelVariantImportJobRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelVariantImportJobRequest();
    $request->xAmzAlgorithm = 'ad';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'sed';
    $request->xAmzDate = 'iste';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'laboriosam';
    $request->jobId = 'hic';

    $response = $sdk->sdk->cancelVariantImportJob($request);

    if ($response->cancelVariantImportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createAnnotationStore

Creates an annotation store.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAnnotationStoreRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateAnnotationStoreRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateAnnotationStoreRequestBodyReference;
use \OpenAPI\OpenAPI\Models\Operations\CreateAnnotationStoreRequestBodySseConfig;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateAnnotationStoreRequestBodyStoreFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateAnnotationStoreRequestBodyStoreOptions;
use \OpenAPI\OpenAPI\Models\Shared\TsvStoreOptions;
use \OpenAPI\OpenAPI\Models\Shared\AnnotationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SchemaValueTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAnnotationStoreRequest();
    $request->requestBody = new CreateAnnotationStoreRequestBody();
    $request->requestBody->description = 'saepe';
    $request->requestBody->name = 'Harvey Hessel';
    $request->requestBody->reference = new CreateAnnotationStoreRequestBodyReference();
    $request->requestBody->reference->referenceArn = 'saepe';
    $request->requestBody->sseConfig = new CreateAnnotationStoreRequestBodySseConfig();
    $request->requestBody->sseConfig->keyArn = 'quidem';
    $request->requestBody->sseConfig->type = EncryptionTypeEnum::KMS;
    $request->requestBody->storeFormat = CreateAnnotationStoreRequestBodyStoreFormatEnum::GFF;
    $request->requestBody->storeOptions = new CreateAnnotationStoreRequestBodyStoreOptions();
    $request->requestBody->storeOptions->tsvStoreOptions = new TsvStoreOptions();
    $request->requestBody->storeOptions->tsvStoreOptions->annotationType = AnnotationTypeEnum::GENERIC;
    $request->requestBody->storeOptions->tsvStoreOptions->formatToHeader = [
        'est' => 'mollitia',
        'laborum' => 'dolores',
        'dolorem' => 'corporis',
        'explicabo' => 'nobis',
    ];
    $request->requestBody->storeOptions->tsvStoreOptions->schema = [
        [
            'nemo' => SchemaValueTypeEnum::INT,
            'excepturi' => SchemaValueTypeEnum::LONG,
            'iure' => SchemaValueTypeEnum::FLOAT,
        ],
        [
            'sapiente' => SchemaValueTypeEnum::LONG,
            'mollitia' => SchemaValueTypeEnum::INT,
            'culpa' => SchemaValueTypeEnum::LONG,
            'repellat' => SchemaValueTypeEnum::FLOAT,
        ],
    ];
    $request->requestBody->tags = [
        'numquam' => 'commodi',
        'quam' => 'molestiae',
        'velit' => 'error',
    ];
    $request->xAmzAlgorithm = 'quia';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'vitae';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'animi';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'odit';

    $response = $sdk->sdk->createAnnotationStore($request);

    if ($response->createAnnotationStoreResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createReferenceStore

Creates a reference store.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateReferenceStoreRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateReferenceStoreRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateReferenceStoreRequestBodySseConfig;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateReferenceStoreRequest();
    $request->requestBody = new CreateReferenceStoreRequestBody();
    $request->requestBody->clientToken = 'quo';
    $request->requestBody->description = 'sequi';
    $request->requestBody->name = 'Vernon Ondricka Sr.';
    $request->requestBody->sseConfig = new CreateReferenceStoreRequestBodySseConfig();
    $request->requestBody->sseConfig->keyArn = 'error';
    $request->requestBody->sseConfig->type = EncryptionTypeEnum::KMS;
    $request->requestBody->tags = [
        'laborum' => 'quasi',
        'reiciendis' => 'voluptatibus',
        'vero' => 'nihil',
        'praesentium' => 'voluptatibus',
    ];
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'doloremque';
    $request->xAmzSignedHeaders = 'reprehenderit';

    $response = $sdk->sdk->createReferenceStore($request);

    if ($response->createReferenceStoreResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createRunGroup

Creates a run group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateRunGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateRunGroupRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateRunGroupRequest();
    $request->requestBody = new CreateRunGroupRequestBody();
    $request->requestBody->maxCpus = 282807;
    $request->requestBody->maxDuration = 979587;
    $request->requestBody->maxRuns = 120196;
    $request->requestBody->name = 'Miss Valerie Kshlerin';
    $request->requestBody->requestId = 'accusamus';
    $request->requestBody->tags = [
        'repudiandae' => 'quae',
        'ipsum' => 'quidem',
    ];
    $request->xAmzAlgorithm = 'molestias';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'rem';
    $request->xAmzSignedHeaders = 'voluptates';

    $response = $sdk->sdk->createRunGroup($request);

    if ($response->createRunGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSequenceStore

Creates a sequence store.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSequenceStoreRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSequenceStoreRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateSequenceStoreRequestBodySseConfig;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSequenceStoreRequest();
    $request->requestBody = new CreateSequenceStoreRequestBody();
    $request->requestBody->clientToken = 'quasi';
    $request->requestBody->description = 'repudiandae';
    $request->requestBody->name = 'Patrick Ward';
    $request->requestBody->sseConfig = new CreateSequenceStoreRequestBodySseConfig();
    $request->requestBody->sseConfig->keyArn = 'consequatur';
    $request->requestBody->sseConfig->type = EncryptionTypeEnum::KMS;
    $request->requestBody->tags = [
        'quibusdam' => 'explicabo',
        'deserunt' => 'distinctio',
        'quibusdam' => 'labore',
    ];
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'cupiditate';
    $request->xAmzSecurityToken = 'quos';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'magni';

    $response = $sdk->sdk->createSequenceStore($request);

    if ($response->createSequenceStoreResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createVariantStore

Creates a variant store.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateVariantStoreRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateVariantStoreRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateVariantStoreRequestBodyReference;
use \OpenAPI\OpenAPI\Models\Operations\CreateVariantStoreRequestBodySseConfig;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateVariantStoreRequest();
    $request->requestBody = new CreateVariantStoreRequestBody();
    $request->requestBody->description = 'assumenda';
    $request->requestBody->name = 'Linda Corkery';
    $request->requestBody->reference = new CreateVariantStoreRequestBodyReference();
    $request->requestBody->reference->referenceArn = 'tempora';
    $request->requestBody->sseConfig = new CreateVariantStoreRequestBodySseConfig();
    $request->requestBody->sseConfig->keyArn = 'facilis';
    $request->requestBody->sseConfig->type = EncryptionTypeEnum::KMS;
    $request->requestBody->tags = [
        'labore' => 'delectus',
        'eum' => 'non',
        'eligendi' => 'sint',
    ];
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'officia';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'debitis';

    $response = $sdk->sdk->createVariantStore($request);

    if ($response->createVariantStoreResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createWorkflow

Creates a workflow.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkflowRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkflowRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkflowRequestBodyEngineEnum;
use \OpenAPI\OpenAPI\Models\Shared\WorkflowParameter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateWorkflowRequest();
    $request->requestBody = new CreateWorkflowRequestBody();
    $request->requestBody->definitionUri = 'a';
    $request->requestBody->definitionZip = 'dolorum';
    $request->requestBody->description = 'in';
    $request->requestBody->engine = CreateWorkflowRequestBodyEngineEnum::WDL;
    $request->requestBody->main = 'illum';
    $request->requestBody->name = 'Jean Buckridge';
    $request->requestBody->parameterTemplate = [
        'ea' => new WorkflowParameter(),
        'aliquid' => new WorkflowParameter(),
        'laborum' => new WorkflowParameter(),
        'accusamus' => new WorkflowParameter(),
    ];
    $request->requestBody->requestId = 'non';
    $request->requestBody->storageCapacity = 581273;
    $request->requestBody->tags = [
        'accusamus' => 'delectus',
        'quidem' => 'provident',
    ];
    $request->xAmzAlgorithm = 'nam';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'blanditiis';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'amet';
    $request->xAmzSignedHeaders = 'deserunt';

    $response = $sdk->sdk->createWorkflow($request);

    if ($response->createWorkflowResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAnnotationStore

Deletes an annotation store.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAnnotationStoreRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAnnotationStoreRequest();
    $request->xAmzAlgorithm = 'nisi';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'nihil';
    $request->force = false;
    $request->name = 'Verna Olson';

    $response = $sdk->sdk->deleteAnnotationStore($request);

    if ($response->deleteAnnotationStoreResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteReference

Deletes a genome reference.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteReferenceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteReferenceRequest();
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'architecto';
    $request->id = '41959890-afa5-463e-a516-fe4c8b711e5b';
    $request->referenceStoreId = 'nihil';

    $response = $sdk->sdk->deleteReference($request);

    if ($response->deleteReferenceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteReferenceStore

Deletes a genome reference store.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteReferenceStoreRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteReferenceStoreRequest();
    $request->xAmzAlgorithm = 'repellat';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'sed';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'accusantium';
    $request->xAmzSignedHeaders = 'consequuntur';
    $request->id = '8921cddc-6926-401f-b576-b0d5f0d30c5f';

    $response = $sdk->sdk->deleteReferenceStore($request);

    if ($response->deleteReferenceStoreResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRun

Deletes a workflow run.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRunRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRunRequest();
    $request->xAmzAlgorithm = 'libero';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'dolores';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'eaque';
    $request->id = '53202c73-d5fe-49b9-8c28-909b3fe49a8d';

    $response = $sdk->sdk->deleteRun($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRunGroup

Deletes a workflow run group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRunGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRunGroupRequest();
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'quaerat';
    $request->xAmzSignature = 'quos';
    $request->xAmzSignedHeaders = 'aliquid';
    $request->id = '33323f9b-77f3-4a41-8067-4ebf69280d1b';

    $response = $sdk->sdk->deleteRunGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSequenceStore

Deletes a sequence store.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSequenceStoreRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSequenceStoreRequest();
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'iusto';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'necessitatibus';
    $request->id = 'bf737ae4-203c-4e5e-aa95-d8a0d446ce2a';

    $response = $sdk->sdk->deleteSequenceStore($request);

    if ($response->deleteSequenceStoreResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteVariantStore

Deletes a variant store.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteVariantStoreRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteVariantStoreRequest();
    $request->xAmzAlgorithm = 'a';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'harum';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'quisquam';
    $request->xAmzSignedHeaders = 'tenetur';
    $request->force = false;
    $request->name = 'Kelli Thompson';

    $response = $sdk->sdk->deleteVariantStore($request);

    if ($response->deleteVariantStoreResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteWorkflow

Deletes a workflow.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWorkflowRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWorkflowRequest();
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'sit';
    $request->xAmzSignature = 'expedita';
    $request->xAmzSignedHeaders = 'neque';
    $request->id = '26b5a734-29cd-4b1a-8422-bb679d232271';

    $response = $sdk->sdk->deleteWorkflow($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAnnotationImportJob

Gets information about an annotation import job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAnnotationImportJobRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAnnotationImportJobRequest();
    $request->xAmzAlgorithm = 'ullam';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'voluptatem';
    $request->xAmzSecurityToken = 'cumque';
    $request->xAmzSignature = 'soluta';
    $request->xAmzSignedHeaders = 'nobis';
    $request->jobId = 'et';

    $response = $sdk->sdk->getAnnotationImportJob($request);

    if ($response->getAnnotationImportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAnnotationStore

Gets information about an annotation store.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAnnotationStoreRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAnnotationStoreRequest();
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'quos';
    $request->xAmzSignature = 'tempore';
    $request->xAmzSignedHeaders = 'cupiditate';
    $request->name = 'Dixie Durgan';

    $response = $sdk->sdk->getAnnotationStore($request);

    if ($response->getAnnotationStoreResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReadSet

Gets a file from a read set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetReadSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetReadSetFileEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReadSetRequest();
    $request->xAmzAlgorithm = 'adipisci';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'quae';
    $request->xAmzSecurityToken = 'aut';
    $request->xAmzSignature = 'quas';
    $request->xAmzSignedHeaders = 'itaque';
    $request->file = GetReadSetFileEnum::SOURCE1;
    $request->id = 'adcf4b92-1879-4fce-953f-73ef7fbc7abd';
    $request->partNumber = 498140;
    $request->sequenceStoreId = 'dolore';

    $response = $sdk->sdk->getReadSet($request);

    if ($response->getReadSetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReadSetActivationJob

Gets information about a read set activation job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetReadSetActivationJobRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReadSetActivationJobRequest();
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'sequi';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'voluptatibus';
    $request->id = '5d2cff7c-70a4-4562-ad43-6813f16d9f5f';
    $request->sequenceStoreId = 'quisquam';

    $response = $sdk->sdk->getReadSetActivationJob($request);

    if ($response->getReadSetActivationJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReadSetExportJob

Gets information about a read set export job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetReadSetExportJobRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReadSetExportJobRequest();
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'impedit';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'veniam';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'inventore';
    $request->id = '46c3e250-fb00-48c4-ae14-1aac366c8dd6';
    $request->sequenceStoreId = 'libero';

    $response = $sdk->sdk->getReadSetExportJob($request);

    if ($response->getReadSetExportJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReadSetImportJob

Gets information about a read set import job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetReadSetImportJobRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReadSetImportJobRequest();
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->id = '474778a7-bd46-46d2-8c10-ab3cdca42519';
    $request->sequenceStoreId = 'consequatur';

    $response = $sdk->sdk->getReadSetImportJob($request);

    if ($response->getReadSetImportJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReadSetMetadata

Gets details about a read set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetReadSetMetadataRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReadSetMetadataRequest();
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'sequi';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'esse';
    $request->id = 'e0bc7178-e479-46f2-a70c-688282aa4825';
    $request->sequenceStoreId = 'nisi';

    $response = $sdk->sdk->getReadSetMetadata($request);

    if ($response->getReadSetMetadataResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReference

Gets a reference file.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetReferenceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetReferenceFileEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReferenceRequest();
    $request->range = 'fugit';
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'ratione';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'atque';
    $request->file = GetReferenceFileEnum::SOURCE;
    $request->id = '7ee17cbe-61e6-4b7b-95bc-0ab3c20c4f37';
    $request->partNumber = 503427;
    $request->referenceStoreId = 'provident';

    $response = $sdk->sdk->getReference($request);

    if ($response->getReferenceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReferenceImportJob

Gets information about a reference import job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetReferenceImportJobRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReferenceImportJobRequest();
    $request->xAmzAlgorithm = 'a';
    $request->xAmzContentSha256 = 'nulla';
    $request->xAmzCredential = 'quas';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'a';
    $request->xAmzSignedHeaders = 'error';
    $request->id = '9dd2efd1-21aa-46f1-a674-bdb04f157560';
    $request->referenceStoreId = 'voluptatum';

    $response = $sdk->sdk->getReferenceImportJob($request);

    if ($response->getReferenceImportJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReferenceMetadata

Gets information about a genome reference's metadata.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetReferenceMetadataRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReferenceMetadataRequest();
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'ex';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'itaque';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'architecto';
    $request->id = '9f1d1705-1339-4d08-886a-1840394c2607';
    $request->referenceStoreId = 'dicta';

    $response = $sdk->sdk->getReferenceMetadata($request);

    if ($response->getReferenceMetadataResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReferenceStore

Gets information about a reference store.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetReferenceStoreRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReferenceStoreRequest();
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'velit';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'voluptas';
    $request->xAmzSignature = 'asperiores';
    $request->xAmzSignedHeaders = 'aperiam';
    $request->id = '642dac7a-f515-4cc4-93aa-63aae8d67864';

    $response = $sdk->sdk->getReferenceStore($request);

    if ($response->getReferenceStoreResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRun

Gets information about a workflow run.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRunRequest;
use \OpenAPI\OpenAPI\Models\Shared\RunExportEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRunRequest();
    $request->xAmzAlgorithm = 'possimus';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'cum';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->export = [
        RunExportEnum::DEFINITION,
        RunExportEnum::DEFINITION,
        RunExportEnum::DEFINITION,
        RunExportEnum::DEFINITION,
    ];
    $request->id = '5e60b375-ed4f-46fb-ae41-f33317fe35b6';

    $response = $sdk->sdk->getRun($request);

    if ($response->getRunResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRunGroup

Gets information about a workflow run group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRunGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRunGroupRequest();
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'voluptates';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'vitae';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'similique';
    $request->xAmzSignedHeaders = 'tempora';
    $request->id = '26555ba3-c287-444e-953b-88f3a8d8f5c0';

    $response = $sdk->sdk->getRunGroup($request);

    if ($response->getRunGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRunTask

Gets information about a workflow run task.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRunTaskRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRunTaskRequest();
    $request->xAmzAlgorithm = 'rerum';
    $request->xAmzContentSha256 = 'sed';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'asperiores';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'voluptate';
    $request->id = 'b194a276-b269-416f-a1f0-8f4294e3698f';
    $request->taskId = 'tempora';

    $response = $sdk->sdk->getRunTask($request);

    if ($response->getRunTaskResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSequenceStore

Gets information about a sequence store.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSequenceStoreRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSequenceStoreRequest();
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'ex';
    $request->xAmzSecurityToken = 'sit';
    $request->xAmzSignature = 'non';
    $request->xAmzSignedHeaders = 'officiis';
    $request->id = '8b445e80-ca55-4efd-a0e4-57e1858b6a89';

    $response = $sdk->sdk->getSequenceStore($request);

    if ($response->getSequenceStoreResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVariantImportJob

Gets information about a variant import job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetVariantImportJobRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVariantImportJobRequest();
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'expedita';
    $request->xAmzCredential = 'debitis';
    $request->xAmzDate = 'neque';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'nostrum';
    $request->xAmzSignedHeaders = 'officia';
    $request->jobId = 'dolorum';

    $response = $sdk->sdk->getVariantImportJob($request);

    if ($response->getVariantImportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVariantStore

Gets information about a variant store.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetVariantStoreRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVariantStoreRequest();
    $request->xAmzAlgorithm = 'corrupti';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'atque';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'ut';
    $request->xAmzSignedHeaders = 'fugiat';
    $request->name = 'Cecilia Quitzon IV';

    $response = $sdk->sdk->getVariantStore($request);

    if ($response->getVariantStoreResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWorkflow

Gets information about a workflow.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkflowRequest;
use \OpenAPI\OpenAPI\Models\Shared\WorkflowExportEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkflowTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorkflowRequest();
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'sit';
    $request->xAmzCredential = 'voluptatum';
    $request->xAmzDate = 'quas';
    $request->xAmzSecurityToken = 'repudiandae';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'et';
    $request->export = [
        WorkflowExportEnum::DEFINITION,
        WorkflowExportEnum::DEFINITION,
        WorkflowExportEnum::DEFINITION,
    ];
    $request->id = '62065e90-4f3b-4119-8b8a-bf603a79f9df';
    $request->type = GetWorkflowTypeEnum::PRIVATE;

    $response = $sdk->sdk->getWorkflow($request);

    if ($response->getWorkflowResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAnnotationImportJobs

Retrieves a list of annotation import jobs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAnnotationImportJobsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAnnotationImportJobsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListAnnotationImportJobsRequestBodyFilter;
use \OpenAPI\OpenAPI\Models\Shared\JobStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAnnotationImportJobsRequest();
    $request->requestBody = new ListAnnotationImportJobsRequestBody();
    $request->requestBody->filter = new ListAnnotationImportJobsRequestBodyFilter();
    $request->requestBody->filter->status = JobStatusEnum::COMPLETED_WITH_FAILURES;
    $request->requestBody->filter->storeName = 'perferendis';
    $request->requestBody->ids = [
        'quidem',
        'reprehenderit',
        'facere',
    ];
    $request->xAmzAlgorithm = 'fuga';
    $request->xAmzContentSha256 = 'praesentium';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'veniam';
    $request->xAmzSecurityToken = 'voluptatem';
    $request->xAmzSignature = 'quisquam';
    $request->xAmzSignedHeaders = 'repudiandae';
    $request->maxResults = 97243;
    $request->nextToken = 'atque';

    $response = $sdk->sdk->listAnnotationImportJobs($request);

    if ($response->listAnnotationImportJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAnnotationStores

Retrieves a list of annotation stores.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAnnotationStoresRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAnnotationStoresRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListAnnotationStoresRequestBodyFilter;
use \OpenAPI\OpenAPI\Models\Shared\StoreStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAnnotationStoresRequest();
    $request->requestBody = new ListAnnotationStoresRequestBody();
    $request->requestBody->filter = new ListAnnotationStoresRequestBodyFilter();
    $request->requestBody->filter->status = StoreStatusEnum::DELETING;
    $request->requestBody->ids = [
        'totam',
        'suscipit',
        'quidem',
        'maxime',
    ];
    $request->xAmzAlgorithm = 'et';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'assumenda';
    $request->xAmzSecurityToken = 'ea';
    $request->xAmzSignature = 'atque';
    $request->xAmzSignedHeaders = 'error';
    $request->maxResults = 887265;
    $request->nextToken = 'officiis';

    $response = $sdk->sdk->listAnnotationStores($request);

    if ($response->listAnnotationStoresResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listReadSetActivationJobs

Retrieves a list of read set activation jobs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListReadSetActivationJobsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListReadSetActivationJobsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListReadSetActivationJobsRequestBodyFilter;
use \OpenAPI\OpenAPI\Models\Shared\ReadSetActivationJobStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListReadSetActivationJobsRequest();
    $request->requestBody = new ListReadSetActivationJobsRequestBody();
    $request->requestBody->filter = new ListReadSetActivationJobsRequestBodyFilter();
    $request->requestBody->filter->createdAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-02-22T09:14:53.307Z');
    $request->requestBody->filter->createdBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-13T06:52:38.237Z');
    $request->requestBody->filter->status = ReadSetActivationJobStatusEnum::CANCELLING;
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'corrupti';
    $request->xAmzCredential = 'at';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'blanditiis';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'repudiandae';
    $request->maxResults = 542129;
    $request->nextToken = 'atque';
    $request->sequenceStoreId = 'sunt';

    $response = $sdk->sdk->listReadSetActivationJobs($request);

    if ($response->listReadSetActivationJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listReadSetExportJobs

Retrieves a list of read set export jobs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListReadSetExportJobsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListReadSetExportJobsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListReadSetExportJobsRequestBodyFilter;
use \OpenAPI\OpenAPI\Models\Shared\ReadSetExportJobStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListReadSetExportJobsRequest();
    $request->requestBody = new ListReadSetExportJobsRequestBody();
    $request->requestBody->filter = new ListReadSetExportJobsRequestBodyFilter();
    $request->requestBody->filter->createdAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-12-16T15:16:35.557Z');
    $request->requestBody->filter->createdBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-20T14:30:20.662Z');
    $request->requestBody->filter->status = ReadSetExportJobStatusEnum::COMPLETED_WITH_FAILURES;
    $request->xAmzAlgorithm = 'doloremque';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'beatae';
    $request->xAmzSignature = 'dolores';
    $request->xAmzSignedHeaders = 'enim';
    $request->maxResults = 389135;
    $request->nextToken = 'velit';
    $request->sequenceStoreId = 'a';

    $response = $sdk->sdk->listReadSetExportJobs($request);

    if ($response->listReadSetExportJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listReadSetImportJobs

Retrieves a list of read set import jobs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListReadSetImportJobsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListReadSetImportJobsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListReadSetImportJobsRequestBodyFilter;
use \OpenAPI\OpenAPI\Models\Shared\ReadSetImportJobStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListReadSetImportJobsRequest();
    $request->requestBody = new ListReadSetImportJobsRequestBody();
    $request->requestBody->filter = new ListReadSetImportJobsRequestBodyFilter();
    $request->requestBody->filter->createdAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-26T23:29:35.541Z');
    $request->requestBody->filter->createdBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-09T06:54:36.386Z');
    $request->requestBody->filter->status = ReadSetImportJobStatusEnum::FAILED;
    $request->xAmzAlgorithm = 'officiis';
    $request->xAmzContentSha256 = 'perspiciatis';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'adipisci';
    $request->xAmzSecurityToken = 'eveniet';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'consequuntur';
    $request->maxResults = 145870;
    $request->nextToken = 'id';
    $request->sequenceStoreId = 'quis';

    $response = $sdk->sdk->listReadSetImportJobs($request);

    if ($response->listReadSetImportJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listReadSets

Retrieves a list of read sets.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListReadSetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListReadSetsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListReadSetsRequestBodyFilter;
use \OpenAPI\OpenAPI\Models\Shared\ReadSetStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListReadSetsRequest();
    $request->requestBody = new ListReadSetsRequestBody();
    $request->requestBody->filter = new ListReadSetsRequestBodyFilter();
    $request->requestBody->filter->createdAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-17T16:22:29.335Z');
    $request->requestBody->filter->createdBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-22T02:57:43.536Z');
    $request->requestBody->filter->name = 'Conrad Franey III';
    $request->requestBody->filter->referenceArn = 'ipsa';
    $request->requestBody->filter->status = ReadSetStatusEnum::ACTIVE;
    $request->xAmzAlgorithm = 'quae';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'eveniet';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'cum';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'necessitatibus';
    $request->maxResults = 187552;
    $request->nextToken = 'laborum';
    $request->sequenceStoreId = 'distinctio';

    $response = $sdk->sdk->listReadSets($request);

    if ($response->listReadSetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listReferenceImportJobs

Retrieves a list of reference import jobs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListReferenceImportJobsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListReferenceImportJobsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListReferenceImportJobsRequestBodyFilter;
use \OpenAPI\OpenAPI\Models\Shared\ReferenceImportJobStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListReferenceImportJobsRequest();
    $request->requestBody = new ListReferenceImportJobsRequestBody();
    $request->requestBody->filter = new ListReferenceImportJobsRequestBodyFilter();
    $request->requestBody->filter->createdAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-15T04:55:40.282Z');
    $request->requestBody->filter->createdBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-05T23:50:51.335Z');
    $request->requestBody->filter->status = ReferenceImportJobStatusEnum::COMPLETED_WITH_FAILURES;
    $request->xAmzAlgorithm = 'alias';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'perspiciatis';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'voluptas';
    $request->xAmzSignedHeaders = 'alias';
    $request->maxResults = 979527;
    $request->nextToken = 'reiciendis';
    $request->referenceStoreId = 'dolores';

    $response = $sdk->sdk->listReferenceImportJobs($request);

    if ($response->listReferenceImportJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listReferenceStores

Retrieves a list of reference stores.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListReferenceStoresRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListReferenceStoresRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListReferenceStoresRequestBodyFilter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListReferenceStoresRequest();
    $request->requestBody = new ListReferenceStoresRequestBody();
    $request->requestBody->filter = new ListReferenceStoresRequestBodyFilter();
    $request->requestBody->filter->createdAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-06T13:39:00.258Z');
    $request->requestBody->filter->createdBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-27T16:08:43.983Z');
    $request->requestBody->filter->name = 'Amy Walsh';
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'ex';
    $request->xAmzCredential = 'ut';
    $request->xAmzDate = 'culpa';
    $request->xAmzSecurityToken = 'adipisci';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'laudantium';
    $request->maxResults = 432606;
    $request->nextToken = 'nemo';

    $response = $sdk->sdk->listReferenceStores($request);

    if ($response->listReferenceStoresResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listReferences

Retrieves a list of references.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListReferencesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListReferencesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListReferencesRequestBodyFilter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListReferencesRequest();
    $request->requestBody = new ListReferencesRequestBody();
    $request->requestBody->filter = new ListReferencesRequestBodyFilter();
    $request->requestBody->filter->createdAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-08-19T02:39:25.517Z');
    $request->requestBody->filter->createdBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-29T15:23:46.044Z');
    $request->requestBody->filter->md5 = 'eum';
    $request->requestBody->filter->name = 'Terrence Collier MD';
    $request->xAmzAlgorithm = 'nostrum';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'possimus';
    $request->xAmzSecurityToken = 'animi';
    $request->xAmzSignature = 'ex';
    $request->xAmzSignedHeaders = 'aliquid';
    $request->maxResults = 37565;
    $request->nextToken = 'repellat';
    $request->referenceStoreId = 'doloribus';

    $response = $sdk->sdk->listReferences($request);

    if ($response->listReferencesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRunGroups

Retrieves a list of run groups.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListRunGroupsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRunGroupsRequest();
    $request->xAmzAlgorithm = 'ullam';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'earum';
    $request->xAmzSecurityToken = 'officia';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'placeat';
    $request->maxResults = 266697;
    $request->name = 'Virgil Towne';
    $request->startingToken = 'vitae';

    $response = $sdk->sdk->listRunGroups($request);

    if ($response->listRunGroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRunTasks

Retrieves a list of tasks for a run.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListRunTasksRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListRunTasksStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRunTasksRequest();
    $request->xAmzAlgorithm = 'rerum';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'inventore';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'cumque';
    $request->xAmzSignedHeaders = 'quae';
    $request->id = '032648dc-2f61-4519-9ebf-d0e9fe6c632c';
    $request->maxResults = 684935;
    $request->startingToken = 'ratione';
    $request->status = ListRunTasksStatusEnum::COMPLETED;

    $response = $sdk->sdk->listRunTasks($request);

    if ($response->listRunTasksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRuns

Retrieves a list of runs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListRunsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRunsRequest();
    $request->xAmzAlgorithm = 'necessitatibus';
    $request->xAmzContentSha256 = 'nulla';
    $request->xAmzCredential = 'consequatur';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'et';
    $request->xAmzSignature = 'ducimus';
    $request->xAmzSignedHeaders = 'natus';
    $request->maxResults = 581082;
    $request->name = 'Josephine Boyer';
    $request->runGroupId = 'nulla';
    $request->startingToken = 'necessitatibus';

    $response = $sdk->sdk->listRuns($request);

    if ($response->listRunsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSequenceStores

Retrieves a list of sequence stores.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSequenceStoresRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSequenceStoresRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListSequenceStoresRequestBodyFilter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSequenceStoresRequest();
    $request->requestBody = new ListSequenceStoresRequestBody();
    $request->requestBody->filter = new ListSequenceStoresRequestBodyFilter();
    $request->requestBody->filter->createdAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-24T01:02:47.291Z');
    $request->requestBody->filter->createdBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-12T06:51:18.031Z');
    $request->requestBody->filter->name = 'Marlene Koch';
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'fugiat';
    $request->xAmzSecurityToken = 'doloremque';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'odio';
    $request->maxResults = 271252;
    $request->nextToken = 'esse';

    $response = $sdk->sdk->listSequenceStores($request);

    if ($response->listSequenceStoresResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Retrieves a list of tags for a resource.

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
    $request->xAmzAlgorithm = 'ex';
    $request->xAmzContentSha256 = 'consectetur';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'sunt';
    $request->xAmzSignedHeaders = 'nostrum';
    $request->resourceArn = 'fugiat';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listVariantImportJobs

Retrieves a list of variant import jobs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListVariantImportJobsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListVariantImportJobsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListVariantImportJobsRequestBodyFilter;
use \OpenAPI\OpenAPI\Models\Shared\JobStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListVariantImportJobsRequest();
    $request->requestBody = new ListVariantImportJobsRequestBody();
    $request->requestBody->filter = new ListVariantImportJobsRequestBodyFilter();
    $request->requestBody->filter->status = JobStatusEnum::FAILED;
    $request->requestBody->filter->storeName = 'aliquid';
    $request->requestBody->ids = [
        'suscipit',
        'aliquid',
        'perferendis',
    ];
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'voluptas';
    $request->xAmzCredential = 'iste';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'ab';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'possimus';
    $request->maxResults = 913992;
    $request->nextToken = 'mollitia';

    $response = $sdk->sdk->listVariantImportJobs($request);

    if ($response->listVariantImportJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listVariantStores

Retrieves a list of variant stores.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListVariantStoresRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListVariantStoresRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListVariantStoresRequestBodyFilter;
use \OpenAPI\OpenAPI\Models\Shared\StoreStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListVariantStoresRequest();
    $request->requestBody = new ListVariantStoresRequestBody();
    $request->requestBody->filter = new ListVariantStoresRequestBodyFilter();
    $request->requestBody->filter->status = StoreStatusEnum::ACTIVE;
    $request->requestBody->ids = [
        'ad',
        'deleniti',
        'enim',
    ];
    $request->xAmzAlgorithm = 'vitae';
    $request->xAmzContentSha256 = 'repellendus';
    $request->xAmzCredential = 'ex';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'ex';
    $request->xAmzSignature = 'ut';
    $request->xAmzSignedHeaders = 'ad';
    $request->maxResults = 713927;
    $request->nextToken = 'voluptatem';

    $response = $sdk->sdk->listVariantStores($request);

    if ($response->listVariantStoresResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listWorkflows

Retrieves a list of workflows.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListWorkflowsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListWorkflowsTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListWorkflowsRequest();
    $request->xAmzAlgorithm = 'molestias';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'beatae';
    $request->xAmzSecurityToken = 'voluptatum';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'veritatis';
    $request->maxResults = 703218;
    $request->name = 'Trevor Bartell';
    $request->startingToken = 'architecto';
    $request->type = ListWorkflowsTypeEnum::PRIVATE;

    $response = $sdk->sdk->listWorkflows($request);

    if ($response->listWorkflowsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startAnnotationImportJob

Starts an annotation import job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartAnnotationImportJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartAnnotationImportJobRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\StartAnnotationImportJobRequestBodyFormatOptions;
use \OpenAPI\OpenAPI\Models\Shared\TsvOptions;
use \OpenAPI\OpenAPI\Models\Shared\ReadOptions;
use \OpenAPI\OpenAPI\Models\Shared\VcfOptions;
use \OpenAPI\OpenAPI\Models\Shared\AnnotationImportItemSource;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartAnnotationImportJobRequest();
    $request->requestBody = new StartAnnotationImportJobRequestBody();
    $request->requestBody->destinationName = 'fuga';
    $request->requestBody->formatOptions = new StartAnnotationImportJobRequestBodyFormatOptions();
    $request->requestBody->formatOptions->tsvOptions = new TsvOptions();
    $request->requestBody->formatOptions->tsvOptions->readOptions = new ReadOptions();
    $request->requestBody->formatOptions->tsvOptions->readOptions->comment = 'pariatur';
    $request->requestBody->formatOptions->tsvOptions->readOptions->encoding = 'debitis';
    $request->requestBody->formatOptions->tsvOptions->readOptions->escape = 'voluptatem';
    $request->requestBody->formatOptions->tsvOptions->readOptions->escapeQuotes = false;
    $request->requestBody->formatOptions->tsvOptions->readOptions->header = false;
    $request->requestBody->formatOptions->tsvOptions->readOptions->lineSep = 'alias';
    $request->requestBody->formatOptions->tsvOptions->readOptions->quote = 'deleniti';
    $request->requestBody->formatOptions->tsvOptions->readOptions->quoteAll = false;
    $request->requestBody->formatOptions->tsvOptions->readOptions->sep = 'earum';
    $request->requestBody->formatOptions->vcfOptions = new VcfOptions();
    $request->requestBody->formatOptions->vcfOptions->ignoreFilterField = false;
    $request->requestBody->formatOptions->vcfOptions->ignoreQualField = false;
    $request->requestBody->items = [
        new AnnotationImportItemSource(),
        new AnnotationImportItemSource(),
    ];
    $request->requestBody->roleArn = 'sapiente';
    $request->requestBody->runLeftNormalization = false;
    $request->xAmzAlgorithm = 'rem';
    $request->xAmzContentSha256 = 'minus';
    $request->xAmzCredential = 'nemo';
    $request->xAmzDate = 'asperiores';
    $request->xAmzSecurityToken = 'ratione';
    $request->xAmzSignature = 'ullam';
    $request->xAmzSignedHeaders = 'perferendis';

    $response = $sdk->sdk->startAnnotationImportJob($request);

    if ($response->startAnnotationImportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startReadSetActivationJob

Activates an archived read set. To reduce storage charges, Amazon Omics archives unused read sets after 30 days.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartReadSetActivationJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartReadSetActivationJobRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\StartReadSetActivationJobSourceItem;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartReadSetActivationJobRequest();
    $request->requestBody = new StartReadSetActivationJobRequestBody();
    $request->requestBody->clientToken = 'illum';
    $request->requestBody->sources = [
        new StartReadSetActivationJobSourceItem(),
        new StartReadSetActivationJobSourceItem(),
        new StartReadSetActivationJobSourceItem(),
    ];
    $request->xAmzAlgorithm = 'impedit';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'culpa';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'aliquam';
    $request->sequenceStoreId = 'inventore';

    $response = $sdk->sdk->startReadSetActivationJob($request);

    if ($response->startReadSetActivationJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startReadSetExportJob

Exports a read set to Amazon S3.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartReadSetExportJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartReadSetExportJobRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ExportReadSet;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartReadSetExportJobRequest();
    $request->requestBody = new StartReadSetExportJobRequestBody();
    $request->requestBody->clientToken = 'deleniti';
    $request->requestBody->destination = 'veritatis';
    $request->requestBody->roleArn = 'tempora';
    $request->requestBody->sources = [
        new ExportReadSet(),
    ];
    $request->xAmzAlgorithm = 'consequatur';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'sit';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'ab';
    $request->xAmzSignedHeaders = 'laudantium';
    $request->sequenceStoreId = 'quae';

    $response = $sdk->sdk->startReadSetExportJob($request);

    if ($response->startReadSetExportJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startReadSetImportJob

Starts a read set import job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartReadSetImportJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartReadSetImportJobRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\StartReadSetImportJobSourceItem;
use \OpenAPI\OpenAPI\Models\Shared\FileTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SourceFiles;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartReadSetImportJobRequest();
    $request->requestBody = new StartReadSetImportJobRequestBody();
    $request->requestBody->clientToken = 'dolor';
    $request->requestBody->roleArn = 'fugiat';
    $request->requestBody->sources = [
        new StartReadSetImportJobSourceItem(),
        new StartReadSetImportJobSourceItem(),
    ];
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'quas';
    $request->xAmzDate = 'eveniet';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'officiis';
    $request->xAmzSignedHeaders = 'esse';
    $request->sequenceStoreId = 'necessitatibus';

    $response = $sdk->sdk->startReadSetImportJob($request);

    if ($response->startReadSetImportJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startReferenceImportJob

Starts a reference import job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartReferenceImportJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartReferenceImportJobRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\StartReferenceImportJobSourceItem;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartReferenceImportJobRequest();
    $request->requestBody = new StartReferenceImportJobRequestBody();
    $request->requestBody->clientToken = 'sed';
    $request->requestBody->roleArn = 'veniam';
    $request->requestBody->sources = [
        new StartReferenceImportJobSourceItem(),
    ];
    $request->xAmzAlgorithm = 'expedita';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'voluptatum';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'exercitationem';
    $request->xAmzSignedHeaders = 'ab';
    $request->referenceStoreId = 'porro';

    $response = $sdk->sdk->startReferenceImportJob($request);

    if ($response->startReferenceImportJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startRun

Starts a run.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartRunRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartRunRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\StartRunRequestBodyLogLevelEnum;
use \OpenAPI\OpenAPI\Models\Operations\StartRunRequestBodyWorkflowTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartRunRequest();
    $request->requestBody = new StartRunRequestBody();
    $request->requestBody->logLevel = StartRunRequestBodyLogLevelEnum::FATAL;
    $request->requestBody->name = 'Brent Walter II';
    $request->requestBody->outputUri = 'necessitatibus';
    $request->requestBody->parameters = [
        'nisi' => 'at',
    ];
    $request->requestBody->priority = 878373;
    $request->requestBody->requestId = 'est';
    $request->requestBody->roleArn = 'harum';
    $request->requestBody->runGroupId = 'sequi';
    $request->requestBody->runId = 'doloribus';
    $request->requestBody->storageCapacity = 918092;
    $request->requestBody->tags = [
        'occaecati' => 'nemo',
        'voluptate' => 'blanditiis',
        'officia' => 'voluptas',
        'numquam' => 'nemo',
    ];
    $request->requestBody->workflowId = 'quos';
    $request->requestBody->workflowType = StartRunRequestBodyWorkflowTypeEnum::PRIVATE;
    $request->xAmzAlgorithm = 'eius';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'ducimus';
    $request->xAmzDate = 'nesciunt';
    $request->xAmzSecurityToken = 'fuga';
    $request->xAmzSignature = 'laudantium';
    $request->xAmzSignedHeaders = 'incidunt';

    $response = $sdk->sdk->startRun($request);

    if ($response->startRunResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startVariantImportJob

Starts a variant import job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartVariantImportJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartVariantImportJobRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\VariantImportItemSource;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartVariantImportJobRequest();
    $request->requestBody = new StartVariantImportJobRequestBody();
    $request->requestBody->destinationName = 'quasi';
    $request->requestBody->items = [
        new VariantImportItemSource(),
        new VariantImportItemSource(),
        new VariantImportItemSource(),
    ];
    $request->requestBody->roleArn = 'fugiat';
    $request->requestBody->runLeftNormalization = false;
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'nisi';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'consectetur';
    $request->xAmzSecurityToken = 'aperiam';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'reiciendis';

    $response = $sdk->sdk->startVariantImportJob($request);

    if ($response->startVariantImportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Tags a resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->requestBody = new TagResourceRequestBody();
    $request->requestBody->tags = [
        'alias' => 'omnis',
        'eos' => 'occaecati',
        'iste' => 'magni',
    ];
    $request->xAmzAlgorithm = 'inventore';
    $request->xAmzContentSha256 = 'fuga';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'delectus';
    $request->resourceArn = 'minima';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes tags from a resource.

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
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'maxime';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'temporibus';
    $request->xAmzSecurityToken = 'quos';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'itaque';
    $request->resourceArn = 'commodi';
    $request->tagKeys = [
        'earum',
        'modi',
        'nam',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAnnotationStore

Updates an annotation store.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAnnotationStoreRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAnnotationStoreRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAnnotationStoreRequest();
    $request->requestBody = new UpdateAnnotationStoreRequestBody();
    $request->requestBody->description = 'vero';
    $request->xAmzAlgorithm = 'voluptatem';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'alias';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'non';
    $request->xAmzSignedHeaders = 'maiores';
    $request->name = 'Bobbie Stokes';

    $response = $sdk->sdk->updateAnnotationStore($request);

    if ($response->updateAnnotationStoreResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateRunGroup

Updates a run group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRunGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRunGroupRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateRunGroupRequest();
    $request->requestBody = new UpdateRunGroupRequestBody();
    $request->requestBody->maxCpus = 364463;
    $request->requestBody->maxDuration = 444587;
    $request->requestBody->maxRuns = 667715;
    $request->requestBody->name = 'Velma Thompson';
    $request->xAmzAlgorithm = 'necessitatibus';
    $request->xAmzContentSha256 = 'asperiores';
    $request->xAmzCredential = 'ex';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'debitis';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'quae';
    $request->id = 'caa3383c-2beb-4477-b73c-8d72f64d1db1';

    $response = $sdk->sdk->updateRunGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateVariantStore

Updates a variant store.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateVariantStoreRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateVariantStoreRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateVariantStoreRequest();
    $request->requestBody = new UpdateVariantStoreRequestBody();
    $request->requestBody->description = 'voluptatibus';
    $request->xAmzAlgorithm = 'quia';
    $request->xAmzContentSha256 = 'porro';
    $request->xAmzCredential = 'aliquam';
    $request->xAmzDate = 'velit';
    $request->xAmzSecurityToken = 'illo';
    $request->xAmzSignature = 'accusantium';
    $request->xAmzSignedHeaders = 'vel';
    $request->name = 'Teresa Thiel';

    $response = $sdk->sdk->updateVariantStore($request);

    if ($response->updateVariantStoreResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateWorkflow

Updates a workflow.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkflowRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkflowRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateWorkflowRequest();
    $request->requestBody = new UpdateWorkflowRequestBody();
    $request->requestBody->description = 'velit';
    $request->requestBody->name = 'Miss Katrina Weber';
    $request->xAmzAlgorithm = 'iste';
    $request->xAmzContentSha256 = 'itaque';
    $request->xAmzCredential = 'alias';
    $request->xAmzDate = 'nisi';
    $request->xAmzSecurityToken = 'itaque';
    $request->xAmzSignature = 'velit';
    $request->xAmzSignedHeaders = 'laborum';
    $request->id = '437000ae-6b6b-4c9b-8f75-9eac55a9741d';

    $response = $sdk->sdk->updateWorkflow($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
