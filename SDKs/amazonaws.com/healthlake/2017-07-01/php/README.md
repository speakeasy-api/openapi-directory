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
use \OpenAPI\OpenAPI\Models\Operations\CreateFHIRDatastoreRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateFHIRDatastoreRequest;
use \OpenAPI\OpenAPI\Models\Shared\FHIRVersionEnum;
use \OpenAPI\OpenAPI\Models\Shared\PreloadDataConfig;
use \OpenAPI\OpenAPI\Models\Shared\PreloadDataTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SseConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\KmsEncryptionConfig;
use \OpenAPI\OpenAPI\Models\Shared\CmkTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateFHIRDatastoreXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFHIRDatastoreRequest();
    $request->createFHIRDatastoreRequest = new CreateFHIRDatastoreRequest();
    $request->createFHIRDatastoreRequest->clientToken = 'corrupti';
    $request->createFHIRDatastoreRequest->datastoreName = 'provident';
    $request->createFHIRDatastoreRequest->datastoreTypeVersion = FHIRVersionEnum::R4;
    $request->createFHIRDatastoreRequest->preloadDataConfig = new PreloadDataConfig();
    $request->createFHIRDatastoreRequest->preloadDataConfig->preloadDataType = PreloadDataTypeEnum::SYNTHEA;
    $request->createFHIRDatastoreRequest->sseConfiguration = new SseConfiguration();
    $request->createFHIRDatastoreRequest->sseConfiguration->kmsEncryptionConfig = new KmsEncryptionConfig();
    $request->createFHIRDatastoreRequest->sseConfiguration->kmsEncryptionConfig->cmkType = CmkTypeEnum::AWS_OWNED_KMS_KEY;
    $request->createFHIRDatastoreRequest->sseConfiguration->kmsEncryptionConfig->kmsKeyId = 'quibusdam';
    $request->createFHIRDatastoreRequest->tags = [
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
    $request->xAmzTarget = CreateFHIRDatastoreXAmzTargetEnum::HEALTH_LAKE_CREATE_FHIR_DATASTORE;

    $response = $sdk->createFHIRDatastore($request);

    if ($response->createFHIRDatastoreResponse !== null) {
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

* [createFHIRDatastore](docs/sdk/README.md#createfhirdatastore) - Creates a Data Store that can ingest and export FHIR formatted data.
* [deleteFHIRDatastore](docs/sdk/README.md#deletefhirdatastore) - Deletes a Data Store. 
* [describeFHIRDatastore](docs/sdk/README.md#describefhirdatastore) - Gets the properties associated with the FHIR Data Store, including the Data Store ID, Data Store ARN, Data Store name, Data Store status, created at, Data Store type version, and Data Store endpoint.
* [describeFHIRExportJob](docs/sdk/README.md#describefhirexportjob) - Displays the properties of a FHIR export job, including the ID, ARN, name, and the status of the job.
* [describeFHIRImportJob](docs/sdk/README.md#describefhirimportjob) - Displays the properties of a FHIR import job, including the ID, ARN, name, and the status of the job. 
* [listFHIRDatastores](docs/sdk/README.md#listfhirdatastores) - Lists all FHIR Data Stores that are in the user’s account, regardless of Data Store status.
* [listFHIRExportJobs](docs/sdk/README.md#listfhirexportjobs) -  Lists all FHIR export jobs associated with an account and their statuses. 
* [listFHIRImportJobs](docs/sdk/README.md#listfhirimportjobs) -  Lists all FHIR import jobs associated with an account and their statuses. 
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) -  Returns a list of all existing tags associated with a Data Store. 
* [startFHIRExportJob](docs/sdk/README.md#startfhirexportjob) - Begins a FHIR export job.
* [startFHIRImportJob](docs/sdk/README.md#startfhirimportjob) - Begins a FHIR Import job.
* [tagResource](docs/sdk/README.md#tagresource) -  Adds a user specifed key and value tag to a Data Store. 
* [untagResource](docs/sdk/README.md#untagresource) -  Removes tags from a Data Store. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
