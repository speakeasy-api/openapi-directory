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
use \OpenAPI\OpenAPI\Models\Operations\CreateRescoreExecutionPlanRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateRescoreExecutionPlanRequest;
use \OpenAPI\OpenAPI\Models\Shared\CapacityUnitsConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateRescoreExecutionPlanXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateRescoreExecutionPlanRequest();
    $request->createRescoreExecutionPlanRequest = new CreateRescoreExecutionPlanRequest();
    $request->createRescoreExecutionPlanRequest->capacityUnits = new CapacityUnitsConfiguration();
    $request->createRescoreExecutionPlanRequest->capacityUnits->rescoreCapacityUnits = 548814;
    $request->createRescoreExecutionPlanRequest->clientToken = 'provident';
    $request->createRescoreExecutionPlanRequest->description = 'distinctio';
    $request->createRescoreExecutionPlanRequest->name = 'Stuart Stiedemann';
    $request->createRescoreExecutionPlanRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->xAmzTarget = CreateRescoreExecutionPlanXAmzTargetEnum::AWS_KENDRA_RERANKING_FRONTEND_SERVICE_CREATE_RESCORE_EXECUTION_PLAN;

    $response = $sdk->createRescoreExecutionPlan($request);

    if ($response->createRescoreExecutionPlanResponse !== null) {
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

* [createRescoreExecutionPlan](docs/sdk/README.md#createrescoreexecutionplan) - <p>Creates a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API. You set the number of capacity units that you require for Amazon Kendra Intelligent Ranking to rescore or re-rank a search service's results.</p> <p>For an example of using the <code>CreateRescoreExecutionPlan</code> API, including using the Python and Java SDKs, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/search-service-rerank.html">Semantically ranking a search service's results</a>.</p>
* [deleteRescoreExecutionPlan](docs/sdk/README.md#deleterescoreexecutionplan) - Deletes a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API.
* [describeRescoreExecutionPlan](docs/sdk/README.md#describerescoreexecutionplan) - Gets information about a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API.
* [listRescoreExecutionPlans](docs/sdk/README.md#listrescoreexecutionplans) - Lists your rescore execution plans. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Gets a list of tags associated with a specified resource. A rescore execution plan is an example of a resource that can have tags associated with it.
* [rescore](docs/sdk/README.md#rescore) - Rescores or re-ranks search results from a search service such as OpenSearch (self managed). You use the semantic search capabilities of Amazon Kendra Intelligent Ranking to improve the search service's results.
* [tagResource](docs/sdk/README.md#tagresource) - Adds a specified tag to a specified rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API. If the tag already exists, the existing value is replaced with the new value.
* [untagResource](docs/sdk/README.md#untagresource) - Removes a tag from a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> operation.
* [updateRescoreExecutionPlan](docs/sdk/README.md#updaterescoreexecutionplan) - Updates a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API. You can update the number of capacity units you require for Amazon Kendra Intelligent Ranking to rescore or re-rank a search service's results.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
