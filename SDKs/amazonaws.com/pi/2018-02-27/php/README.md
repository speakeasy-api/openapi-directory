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
use \OpenAPI\OpenAPI\Models\Operations\DescribeDimensionKeysRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeDimensionKeysRequest;
use \OpenAPI\OpenAPI\Models\Shared\DimensionGroup;
use \OpenAPI\OpenAPI\Models\Shared\ServiceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDimensionKeysXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDimensionKeysRequest();
    $request->describeDimensionKeysRequest = new DescribeDimensionKeysRequest();
    $request->describeDimensionKeysRequest->additionalMetrics = [
        'provident',
        'distinctio',
        'quibusdam',
    ];
    $request->describeDimensionKeysRequest->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-14T16:47:33.722Z');
    $request->describeDimensionKeysRequest->filter = [
        'illum' => 'vel',
        'error' => 'deserunt',
        'suscipit' => 'iure',
    ];
    $request->describeDimensionKeysRequest->groupBy = new DimensionGroup();
    $request->describeDimensionKeysRequest->groupBy->dimensions = [
        'debitis',
        'ipsa',
    ];
    $request->describeDimensionKeysRequest->groupBy->group = 'delectus';
    $request->describeDimensionKeysRequest->groupBy->limit = 272656;
    $request->describeDimensionKeysRequest->identifier = 'suscipit';
    $request->describeDimensionKeysRequest->maxResults = 477665;
    $request->describeDimensionKeysRequest->metric = 'minus';
    $request->describeDimensionKeysRequest->nextToken = 'placeat';
    $request->describeDimensionKeysRequest->partitionBy = new DimensionGroup();
    $request->describeDimensionKeysRequest->partitionBy->dimensions = [
        'iusto',
        'excepturi',
        'nisi',
    ];
    $request->describeDimensionKeysRequest->partitionBy->group = 'recusandae';
    $request->describeDimensionKeysRequest->partitionBy->limit = 836079;
    $request->describeDimensionKeysRequest->periodInSeconds = 71036;
    $request->describeDimensionKeysRequest->serviceType = ServiceTypeEnum::RDS;
    $request->describeDimensionKeysRequest->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-09T10:00:51.349Z');
    $request->maxResults = 'perferendis';
    $request->nextToken = 'ipsam';
    $request->xAmzAlgorithm = 'repellendus';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'odit';
    $request->xAmzSecurityToken = 'at';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'maiores';
    $request->xAmzTarget = DescribeDimensionKeysXAmzTargetEnum::PERFORMANCE_INSIGHTSV20180227_DESCRIBE_DIMENSION_KEYS;

    $response = $sdk->describeDimensionKeys($request);

    if ($response->describeDimensionKeysResponse !== null) {
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

* [describeDimensionKeys](docs/sdk/README.md#describedimensionkeys) - <p>For a specific time period, retrieve the top <code>N</code> dimension keys for a metric. </p> <note> <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements, only the first 500 bytes are returned.</p> </note>
* [getDimensionKeyDetails](docs/sdk/README.md#getdimensionkeydetails) - Get the attributes of the specified dimension group for a DB instance or data source. For example, if you specify a SQL ID, <code>GetDimensionKeyDetails</code> retrieves the full text of the dimension <code>db.sql.statement</code> associated with this ID. This operation is useful because <code>GetResourceMetrics</code> and <code>DescribeDimensionKeys</code> don't support retrieval of large SQL statement text.
* [getResourceMetadata](docs/sdk/README.md#getresourcemetadata) - Retrieve the metadata for different features. For example, the metadata might indicate that a feature is turned on or off on a specific DB instance. 
* [getResourceMetrics](docs/sdk/README.md#getresourcemetrics) - <p>Retrieve Performance Insights metrics for a set of data sources over a time period. You can provide specific dimension groups and dimensions, and provide aggregation and filtering criteria for each group.</p> <note> <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements, only the first 500 bytes are returned.</p> </note>
* [listAvailableResourceDimensions](docs/sdk/README.md#listavailableresourcedimensions) - Retrieve the dimensions that can be queried for each specified metric type on a specified DB instance.
* [listAvailableResourceMetrics](docs/sdk/README.md#listavailableresourcemetrics) - Retrieve metrics of the specified types that can be queried for a specified DB instance. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
