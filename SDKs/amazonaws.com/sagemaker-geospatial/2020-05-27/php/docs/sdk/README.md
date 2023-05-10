# SDK

## Overview

Provides APIs for creating and managing SageMaker geospatial resources.

Amazon Web Services documentation
<https://docs.aws.amazon.com/sagemaker-geospatial/>
### Available Operations

* [deleteEarthObservationJob](#deleteearthobservationjob) - Use this operation to delete an Earth Observation job.
* [deleteVectorEnrichmentJob](#deletevectorenrichmentjob) - Use this operation to delete a Vector Enrichment job.
* [exportEarthObservationJob](#exportearthobservationjob) - Use this operation to export results of an Earth Observation job and optionally source images used as input to the EOJ to an Amazon S3 location.
* [exportVectorEnrichmentJob](#exportvectorenrichmentjob) - Use this operation to copy results of a Vector Enrichment job to an Amazon S3 location.
* [getEarthObservationJob](#getearthobservationjob) - Get the details for a previously initiated Earth Observation job.
* [getRasterDataCollection](#getrasterdatacollection) - Use this operation to get details of a specific raster data collection.
* [getTile](#gettile) - Gets a web mercator tile for the given Earth Observation job.
* [getVectorEnrichmentJob](#getvectorenrichmentjob) - Retrieves details of a Vector Enrichment Job for a given job Amazon Resource Name (ARN).
* [listEarthObservationJobs](#listearthobservationjobs) - Use this operation to get a list of the Earth Observation jobs associated with the calling Amazon Web Services account.
* [listRasterDataCollections](#listrasterdatacollections) - Use this operation to get raster data collections.
* [listTagsForResource](#listtagsforresource) - Lists the tags attached to the resource.
* [listVectorEnrichmentJobs](#listvectorenrichmentjobs) - Retrieves a list of vector enrichment jobs.
* [searchRasterDataCollection](#searchrasterdatacollection) - Allows you run image query on a specific raster data collection to get a list of the satellite imagery matching the selected filters.
* [startEarthObservationJob](#startearthobservationjob) - Use this operation to create an Earth observation job.
* [startVectorEnrichmentJob](#startvectorenrichmentjob) - Creates a Vector Enrichment job for the supplied job type. Currently, there are two supported job types: reverse geocoding and map matching.
* [stopEarthObservationJob](#stopearthobservationjob) - Use this operation to stop an existing earth observation job.
* [stopVectorEnrichmentJob](#stopvectorenrichmentjob) - Stops the Vector Enrichment job for a given job ARN.
* [tagResource](#tagresource) - The resource you want to tag.
* [untagResource](#untagresource) - The resource you want to untag.

## deleteEarthObservationJob

Use this operation to delete an Earth Observation job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEarthObservationJobRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteEarthObservationJobRequest();
    $request->arn = 'vel';
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'ipsa';

    $response = $sdk->sdk->deleteEarthObservationJob($request);

    if ($response->deleteEarthObservationJobOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteVectorEnrichmentJob

Use this operation to delete a Vector Enrichment job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteVectorEnrichmentJobRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteVectorEnrichmentJobRequest();
    $request->arn = 'delectus';
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'minus';
    $request->xAmzSecurityToken = 'placeat';
    $request->xAmzSignature = 'voluptatum';
    $request->xAmzSignedHeaders = 'iusto';

    $response = $sdk->sdk->deleteVectorEnrichmentJob($request);

    if ($response->deleteVectorEnrichmentJobOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportEarthObservationJob

Use this operation to export results of an Earth Observation job and optionally source images used as input to the EOJ to an Amazon S3 location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ExportEarthObservationJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExportEarthObservationJobRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ExportEarthObservationJobRequestBodyOutputConfig;
use \OpenAPI\OpenAPI\Models\Shared\ExportS3DataInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportEarthObservationJobRequest();
    $request->requestBody = new ExportEarthObservationJobRequestBody();
    $request->requestBody->arn = 'excepturi';
    $request->requestBody->clientToken = 'nisi';
    $request->requestBody->executionRoleArn = 'recusandae';
    $request->requestBody->exportSourceImages = false;
    $request->requestBody->outputConfig = new ExportEarthObservationJobRequestBodyOutputConfig();
    $request->requestBody->outputConfig->s3Data = new ExportS3DataInput();
    $request->requestBody->outputConfig->s3Data->kmsKeyId = 'temporibus';
    $request->requestBody->outputConfig->s3Data->s3Uri = 'ab';
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'repellendus';
    $request->xAmzSignedHeaders = 'sapiente';

    $response = $sdk->sdk->exportEarthObservationJob($request);

    if ($response->exportEarthObservationJobOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportVectorEnrichmentJob

Use this operation to copy results of a Vector Enrichment job to an Amazon S3 location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ExportVectorEnrichmentJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExportVectorEnrichmentJobRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ExportVectorEnrichmentJobRequestBodyOutputConfig;
use \OpenAPI\OpenAPI\Models\Shared\VectorEnrichmentJobS3Data;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportVectorEnrichmentJobRequest();
    $request->requestBody = new ExportVectorEnrichmentJobRequestBody();
    $request->requestBody->arn = 'quo';
    $request->requestBody->clientToken = 'odit';
    $request->requestBody->executionRoleArn = 'at';
    $request->requestBody->outputConfig = new ExportVectorEnrichmentJobRequestBodyOutputConfig();
    $request->requestBody->outputConfig->s3Data = new VectorEnrichmentJobS3Data();
    $request->requestBody->outputConfig->s3Data->kmsKeyId = 'at';
    $request->requestBody->outputConfig->s3Data->s3Uri = 'maiores';
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'dolorum';

    $response = $sdk->sdk->exportVectorEnrichmentJob($request);

    if ($response->exportVectorEnrichmentJobOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEarthObservationJob

Get the details for a previously initiated Earth Observation job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEarthObservationJobRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEarthObservationJobRequest();
    $request->arn = 'dicta';
    $request->xAmzAlgorithm = 'nam';
    $request->xAmzContentSha256 = 'officia';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'optio';

    $response = $sdk->sdk->getEarthObservationJob($request);

    if ($response->getEarthObservationJobOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRasterDataCollection

Use this operation to get details of a specific raster data collection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRasterDataCollectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRasterDataCollectionRequest();
    $request->arn = 'totam';
    $request->xAmzAlgorithm = 'beatae';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'impedit';
    $request->xAmzSignedHeaders = 'cum';

    $response = $sdk->sdk->getRasterDataCollection($request);

    if ($response->getRasterDataCollectionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTile

Gets a web mercator tile for the given Earth Observation job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTileRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTileOutputDataTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetTileTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTileRequest();
    $request->arn = 'esse';
    $request->executionRoleArn = 'ipsum';
    $request->imageAssets = [
        'aspernatur',
        'perferendis',
        'ad',
    ];
    $request->imageMask = false;
    $request->outputDataType = GetTileOutputDataTypeEnum::FLOAT64;
    $request->outputFormat = 'sed';
    $request->propertyFilters = 'iste';
    $request->target = GetTileTargetEnum::INPUT;
    $request->timeRangeFilter = 'natus';
    $request->xAmzAlgorithm = 'laboriosam';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'fuga';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'iste';
    $request->x = 437032;
    $request->y = 902349;
    $request->z = 697631;

    $response = $sdk->sdk->getTile($request);

    if ($response->getTileOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVectorEnrichmentJob

Retrieves details of a Vector Enrichment Job for a given job Amazon Resource Name (ARN).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetVectorEnrichmentJobRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVectorEnrichmentJobRequest();
    $request->arn = 'architecto';
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'est';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'dolores';
    $request->xAmzSignedHeaders = 'dolorem';

    $response = $sdk->sdk->getVectorEnrichmentJob($request);

    if ($response->getVectorEnrichmentJobOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEarthObservationJobs

Use this operation to get a list of the Earth Observation jobs associated with the calling Amazon Web Services account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListEarthObservationJobsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListEarthObservationJobsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListEarthObservationJobsRequestBodySortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListEarthObservationJobsRequestBodyStatusEqualsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListEarthObservationJobsRequest();
    $request->maxResults = 'corporis';
    $request->nextToken = 'explicabo';
    $request->requestBody = new ListEarthObservationJobsRequestBody();
    $request->requestBody->maxResults = 750686;
    $request->requestBody->nextToken = 'enim';
    $request->requestBody->sortBy = 'omnis';
    $request->requestBody->sortOrder = ListEarthObservationJobsRequestBodySortOrderEnum::ASCENDING;
    $request->requestBody->statusEquals = ListEarthObservationJobsRequestBodyStatusEqualsEnum::STOPPING;
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'culpa';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'architecto';

    $response = $sdk->sdk->listEarthObservationJobs($request);

    if ($response->listEarthObservationJobOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRasterDataCollections

Use this operation to get raster data collections.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListRasterDataCollectionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRasterDataCollectionsRequest();
    $request->maxResults = 652790;
    $request->nextToken = 'dolorem';
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'repellat';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'numquam';
    $request->xAmzSignedHeaders = 'commodi';

    $response = $sdk->sdk->listRasterDataCollections($request);

    if ($response->listRasterDataCollectionsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Lists the tags attached to the resource.

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
    $request->resourceArn = 'quam';
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'velit';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'quia';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'vitae';
    $request->xAmzSignedHeaders = 'laborum';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listVectorEnrichmentJobs

Retrieves a list of vector enrichment jobs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListVectorEnrichmentJobsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListVectorEnrichmentJobsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListVectorEnrichmentJobsRequestBodySortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListVectorEnrichmentJobsRequest();
    $request->maxResults = 'animi';
    $request->nextToken = 'enim';
    $request->requestBody = new ListVectorEnrichmentJobsRequestBody();
    $request->requestBody->maxResults = 138183;
    $request->requestBody->nextToken = 'quo';
    $request->requestBody->sortBy = 'sequi';
    $request->requestBody->sortOrder = ListVectorEnrichmentJobsRequestBodySortOrderEnum::DESCENDING;
    $request->requestBody->statusEquals = 'ipsam';
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'possimus';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'temporibus';
    $request->xAmzSignedHeaders = 'laborum';

    $response = $sdk->sdk->listVectorEnrichmentJobs($request);

    if ($response->listVectorEnrichmentJobOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchRasterDataCollection

Allows you run image query on a specific raster data collection to get a list of the satellite imagery matching the selected filters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SearchRasterDataCollectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\SearchRasterDataCollectionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\SearchRasterDataCollectionRequestBodyRasterDataCollectionQuery;
use \OpenAPI\OpenAPI\Models\Shared\AreaOfInterest;
use \OpenAPI\OpenAPI\Models\Shared\AreaOfInterestGeometry;
use \OpenAPI\OpenAPI\Models\Shared\MultiPolygonGeometryInput;
use \OpenAPI\OpenAPI\Models\Shared\PolygonGeometryInput;
use \OpenAPI\OpenAPI\Models\Shared\PropertyFilters;
use \OpenAPI\OpenAPI\Models\Shared\LogicalOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\PropertyFilter;
use \OpenAPI\OpenAPI\Models\Shared\Property;
use \OpenAPI\OpenAPI\Models\Shared\EoCloudCoverInput;
use \OpenAPI\OpenAPI\Models\Shared\LandsatCloudCoverLandInput;
use \OpenAPI\OpenAPI\Models\Shared\PlatformInput;
use \OpenAPI\OpenAPI\Models\Shared\ComparisonOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\ViewOffNadirInput;
use \OpenAPI\OpenAPI\Models\Shared\ViewSunAzimuthInput;
use \OpenAPI\OpenAPI\Models\Shared\ViewSunElevationInput;
use \OpenAPI\OpenAPI\Models\Shared\TimeRangeFilterInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchRasterDataCollectionRequest();
    $request->nextToken = 'quasi';
    $request->requestBody = new SearchRasterDataCollectionRequestBody();
    $request->requestBody->arn = 'reiciendis';
    $request->requestBody->nextToken = 'voluptatibus';
    $request->requestBody->rasterDataCollectionQuery = new SearchRasterDataCollectionRequestBodyRasterDataCollectionQuery();
    $request->requestBody->rasterDataCollectionQuery->areaOfInterest = new AreaOfInterest();
    $request->requestBody->rasterDataCollectionQuery->areaOfInterest->areaOfInterestGeometry = new AreaOfInterestGeometry();
    $request->requestBody->rasterDataCollectionQuery->areaOfInterest->areaOfInterestGeometry->multiPolygonGeometry = new MultiPolygonGeometryInput();
    $request->requestBody->rasterDataCollectionQuery->areaOfInterest->areaOfInterestGeometry->multiPolygonGeometry->coordinates = [
        [
            [
                [
                    557.14,
                    6048.46,
                    4511.59,
                    7392.64,
                ],
                [
                    391.87,
                ],
                [
                    2828.07,
                    9795.87,
                ],
            ],
            [
                [
                    2961.4,
                    4808.94,
                ],
            ],
        ],
        [
            [
                [
                    8804.76,
                    4142.63,
                ],
                [
                    641.47,
                    2168.22,
                    6924.72,
                    5651.89,
                ],
                [
                    8651.03,
                    2653.89,
                    5089.69,
                ],
            ],
        ],
        [
            [
                [
                    9211.58,
                ],
                [
                    831.12,
                    9292.97,
                    2777.18,
                ],
                [
                    93.56,
                    6674.11,
                ],
                [
                    1317.97,
                    6471.74,
                    7163.27,
                    8413.86,
                ],
            ],
            [
                [
                    1831.91,
                    3978.21,
                ],
                [
                    5528.22,
                    201.07,
                    1649.4,
                ],
            ],
            [
                [
                    46.95,
                    1464.41,
                ],
                [
                    5696.18,
                    2700.08,
                    7037.37,
                ],
                [
                    2884.76,
                    9621.89,
                    4332.88,
                ],
                [
                    7561.07,
                ],
            ],
        ],
        [
            [
                [
                    8960.39,
                    5722.52,
                    6389.21,
                ],
                [
                    8915.55,
                ],
            ],
            [
                [
                    4471.25,
                    4491.98,
                    8464.09,
                ],
                [
                    6994.79,
                    1162.02,
                    2974.37,
                    7670.24,
                ],
                [
                    4118.2,
                    3965.06,
                    6754.39,
                    8811.04,
                ],
                [
                    5812.73,
                ],
            ],
            [
                [
                    9654.17,
                    6925.32,
                    5884.65,
                    7252.55,
                ],
                [
                    5013.24,
                    5332.06,
                    9560.84,
                ],
            ],
        ],
    ];
    $request->requestBody->rasterDataCollectionQuery->areaOfInterest->areaOfInterestGeometry->polygonGeometry = new PolygonGeometryInput();
    $request->requestBody->rasterDataCollectionQuery->areaOfInterest->areaOfInterestGeometry->polygonGeometry->coordinates = [
        [
            [
                4238.55,
                6188.09,
            ],
            [
                4748.67,
                191.93,
                4701.32,
            ],
            [
                7160.75,
                6601.74,
            ],
        ],
    ];
    $request->requestBody->rasterDataCollectionQuery->bandFilter = [
        'labore',
        'suscipit',
    ];
    $request->requestBody->rasterDataCollectionQuery->propertyFilters = new PropertyFilters();
    $request->requestBody->rasterDataCollectionQuery->propertyFilters->logicalOperator = LogicalOperatorEnum::AND;
    $request->requestBody->rasterDataCollectionQuery->propertyFilters->properties = [
        new PropertyFilter(),
        new PropertyFilter(),
        new PropertyFilter(),
    ];
    $request->requestBody->rasterDataCollectionQuery->timeRangeFilter = new TimeRangeFilterInput();
    $request->requestBody->rasterDataCollectionQuery->timeRangeFilter->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-21T23:58:20.071Z');
    $request->requestBody->rasterDataCollectionQuery->timeRangeFilter->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-05T15:44:28.456Z');
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'et';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'ullam';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'quos';

    $response = $sdk->sdk->searchRasterDataCollection($request);

    if ($response->searchRasterDataCollectionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startEarthObservationJob

Use this operation to create an Earth observation job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartEarthObservationJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartEarthObservationJobRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\StartEarthObservationJobRequestBodyInputConfig;
use \OpenAPI\OpenAPI\Models\Shared\EojDataSourceConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\S3DataInput;
use \OpenAPI\OpenAPI\Models\Shared\MetadataProviderEnum;
use \OpenAPI\OpenAPI\Models\Shared\RasterDataCollectionQueryInput;
use \OpenAPI\OpenAPI\Models\Shared\AreaOfInterest;
use \OpenAPI\OpenAPI\Models\Shared\AreaOfInterestGeometry;
use \OpenAPI\OpenAPI\Models\Shared\MultiPolygonGeometryInput;
use \OpenAPI\OpenAPI\Models\Shared\PolygonGeometryInput;
use \OpenAPI\OpenAPI\Models\Shared\PropertyFilters;
use \OpenAPI\OpenAPI\Models\Shared\LogicalOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\PropertyFilter;
use \OpenAPI\OpenAPI\Models\Shared\Property;
use \OpenAPI\OpenAPI\Models\Shared\EoCloudCoverInput;
use \OpenAPI\OpenAPI\Models\Shared\LandsatCloudCoverLandInput;
use \OpenAPI\OpenAPI\Models\Shared\PlatformInput;
use \OpenAPI\OpenAPI\Models\Shared\ComparisonOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\ViewOffNadirInput;
use \OpenAPI\OpenAPI\Models\Shared\ViewSunAzimuthInput;
use \OpenAPI\OpenAPI\Models\Shared\ViewSunElevationInput;
use \OpenAPI\OpenAPI\Models\Shared\TimeRangeFilterInput;
use \OpenAPI\OpenAPI\Models\Operations\StartEarthObservationJobRequestBodyJobConfig;
use \OpenAPI\OpenAPI\Models\Shared\BandMathConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\CustomIndicesInput;
use \OpenAPI\OpenAPI\Models\Shared\Operation;
use \OpenAPI\OpenAPI\Models\Shared\OutputTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CloudRemovalConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\AlgorithmNameCloudRemovalEnum;
use \OpenAPI\OpenAPI\Models\Shared\GeoMosaicConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\AlgorithmNameGeoMosaicEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResamplingConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\AlgorithmNameResamplingEnum;
use \OpenAPI\OpenAPI\Models\Shared\OutputResolutionResamplingInput;
use \OpenAPI\OpenAPI\Models\Shared\UserDefined;
use \OpenAPI\OpenAPI\Models\Shared\UnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\StackConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\OutputResolutionStackInput;
use \OpenAPI\OpenAPI\Models\Shared\PredefinedResolutionEnum;
use \OpenAPI\OpenAPI\Models\Shared\TemporalStatisticsConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\GroupByEnum;
use \OpenAPI\OpenAPI\Models\Shared\TemporalStatisticsEnum;
use \OpenAPI\OpenAPI\Models\Shared\ZonalStatisticsConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\ZonalStatisticsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartEarthObservationJobRequest();
    $request->requestBody = new StartEarthObservationJobRequestBody();
    $request->requestBody->clientToken = 'sint';
    $request->requestBody->executionRoleArn = 'accusantium';
    $request->requestBody->inputConfig = new StartEarthObservationJobRequestBodyInputConfig();
    $request->requestBody->inputConfig->dataSourceConfig = new EojDataSourceConfigInput();
    $request->requestBody->inputConfig->dataSourceConfig->s3Data = new S3DataInput();
    $request->requestBody->inputConfig->dataSourceConfig->s3Data->kmsKeyId = 'mollitia';
    $request->requestBody->inputConfig->dataSourceConfig->s3Data->metadataProvider = MetadataProviderEnum::PLANET_ORDER;
    $request->requestBody->inputConfig->dataSourceConfig->s3Data->s3Uri = 'reiciendis';
    $request->requestBody->inputConfig->previousEarthObservationJobArn = 'mollitia';
    $request->requestBody->inputConfig->rasterDataCollectionQuery = new RasterDataCollectionQueryInput();
    $request->requestBody->inputConfig->rasterDataCollectionQuery->areaOfInterest = new AreaOfInterest();
    $request->requestBody->inputConfig->rasterDataCollectionQuery->areaOfInterest->areaOfInterestGeometry = new AreaOfInterestGeometry();
    $request->requestBody->inputConfig->rasterDataCollectionQuery->areaOfInterest->areaOfInterestGeometry->multiPolygonGeometry = new MultiPolygonGeometryInput();
    $request->requestBody->inputConfig->rasterDataCollectionQuery->areaOfInterest->areaOfInterestGeometry->multiPolygonGeometry->coordinates = [
        [
            [
                [
                    1412.64,
                    3675.62,
                    972.6,
                    4358.65,
                ],
            ],
            [
                [
                    2603.41,
                    8061.94,
                    5370.23,
                    7038.89,
                ],
                [
                    1002.26,
                    995.69,
                ],
                [
                    3523.12,
                    7142.42,
                    4692.49,
                    9988.48,
                ],
                [
                    1494.48,
                    9046.48,
                    8681.26,
                    375.59,
                ],
            ],
        ],
        [
            [
                [
                    1668.47,
                    1238.2,
                    7790.51,
                ],
                [
                    8649.34,
                    8073.19,
                    4113.97,
                    5691.01,
                ],
                [
                    4071.83,
                ],
            ],
        ],
    ];
    $request->requestBody->inputConfig->rasterDataCollectionQuery->areaOfInterest->areaOfInterestGeometry->polygonGeometry = new PolygonGeometryInput();
    $request->requestBody->inputConfig->rasterDataCollectionQuery->areaOfInterest->areaOfInterestGeometry->polygonGeometry->coordinates = [
        [
            [
                6974.29,
                3732.91,
                4535.43,
                4200.75,
            ],
        ],
    ];
    $request->requestBody->inputConfig->rasterDataCollectionQuery->propertyFilters = new PropertyFilters();
    $request->requestBody->inputConfig->rasterDataCollectionQuery->propertyFilters->logicalOperator = LogicalOperatorEnum::AND;
    $request->requestBody->inputConfig->rasterDataCollectionQuery->propertyFilters->properties = [
        new PropertyFilter(),
        new PropertyFilter(),
        new PropertyFilter(),
    ];
    $request->requestBody->inputConfig->rasterDataCollectionQuery->rasterDataCollectionArn = 'eaque';
    $request->requestBody->inputConfig->rasterDataCollectionQuery->timeRangeFilter = new TimeRangeFilterInput();
    $request->requestBody->inputConfig->rasterDataCollectionQuery->timeRangeFilter->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-26T18:45:44.366Z');
    $request->requestBody->inputConfig->rasterDataCollectionQuery->timeRangeFilter->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-13T19:01:00.083Z');
    $request->requestBody->jobConfig = new StartEarthObservationJobRequestBodyJobConfig();
    $request->requestBody->jobConfig->bandMathConfig = new BandMathConfigInput();
    $request->requestBody->jobConfig->bandMathConfig->customIndices = new CustomIndicesInput();
    $request->requestBody->jobConfig->bandMathConfig->customIndices->operations = [
        new Operation(),
        new Operation(),
        new Operation(),
        new Operation(),
    ];
    $request->requestBody->jobConfig->bandMathConfig->predefinedIndices = [
        'aut',
    ];
    $request->requestBody->jobConfig->cloudMaskingConfig = [
        'corporis' => 'hic',
        'libero' => 'nobis',
        'dolores' => 'quis',
        'totam' => 'dignissimos',
    ];
    $request->requestBody->jobConfig->cloudRemovalConfig = new CloudRemovalConfigInput();
    $request->requestBody->jobConfig->cloudRemovalConfig->algorithmName = AlgorithmNameCloudRemovalEnum::INTERPOLATION;
    $request->requestBody->jobConfig->cloudRemovalConfig->interpolationValue = 'eaque';
    $request->requestBody->jobConfig->cloudRemovalConfig->targetBands = [
        'nesciunt',
        'eos',
    ];
    $request->requestBody->jobConfig->geoMosaicConfig = new GeoMosaicConfigInput();
    $request->requestBody->jobConfig->geoMosaicConfig->algorithmName = AlgorithmNameGeoMosaicEnum::NEAR;
    $request->requestBody->jobConfig->geoMosaicConfig->targetBands = [
        'minus',
    ];
    $request->requestBody->jobConfig->landCoverSegmentationConfig = [
        'dolor' => 'vero',
        'nostrum' => 'hic',
    ];
    $request->requestBody->jobConfig->resamplingConfig = new ResamplingConfigInput();
    $request->requestBody->jobConfig->resamplingConfig->algorithmName = AlgorithmNameResamplingEnum::Q3;
    $request->requestBody->jobConfig->resamplingConfig->outputResolution = new OutputResolutionResamplingInput();
    $request->requestBody->jobConfig->resamplingConfig->outputResolution->userDefined = new UserDefined();
    $request->requestBody->jobConfig->resamplingConfig->outputResolution->userDefined->unit = UnitEnum::METERS;
    $request->requestBody->jobConfig->resamplingConfig->outputResolution->userDefined->value = 6082.53;
    $request->requestBody->jobConfig->resamplingConfig->targetBands = [
        'perspiciatis',
        'voluptatem',
        'porro',
    ];
    $request->requestBody->jobConfig->stackConfig = new StackConfigInput();
    $request->requestBody->jobConfig->stackConfig->outputResolution = new OutputResolutionStackInput();
    $request->requestBody->jobConfig->stackConfig->outputResolution->predefined = PredefinedResolutionEnum::HIGHEST;
    $request->requestBody->jobConfig->stackConfig->outputResolution->userDefined = new UserDefined();
    $request->requestBody->jobConfig->stackConfig->outputResolution->userDefined->unit = UnitEnum::METERS;
    $request->requestBody->jobConfig->stackConfig->outputResolution->userDefined->value = 5000.26;
    $request->requestBody->jobConfig->stackConfig->targetBands = [
        'eaque',
        'occaecati',
        'rerum',
    ];
    $request->requestBody->jobConfig->temporalStatisticsConfig = new TemporalStatisticsConfigInput();
    $request->requestBody->jobConfig->temporalStatisticsConfig->groupBy = GroupByEnum::ALL;
    $request->requestBody->jobConfig->temporalStatisticsConfig->statistics = [
        TemporalStatisticsEnum::STANDARD_DEVIATION,
        TemporalStatisticsEnum::MEAN,
        TemporalStatisticsEnum::MEDIAN,
        TemporalStatisticsEnum::STANDARD_DEVIATION,
    ];
    $request->requestBody->jobConfig->temporalStatisticsConfig->targetBands = [
        'pariatur',
        'provident',
        'nobis',
    ];
    $request->requestBody->jobConfig->zonalStatisticsConfig = new ZonalStatisticsConfigInput();
    $request->requestBody->jobConfig->zonalStatisticsConfig->statistics = [
        ZonalStatisticsEnum::SUM,
        ZonalStatisticsEnum::MEDIAN,
        ZonalStatisticsEnum::MAX,
    ];
    $request->requestBody->jobConfig->zonalStatisticsConfig->targetBands = [
        'dolorem',
        'dolorem',
    ];
    $request->requestBody->jobConfig->zonalStatisticsConfig->zoneS3Path = 'dolor';
    $request->requestBody->jobConfig->zonalStatisticsConfig->zoneS3PathKmsKeyId = 'qui';
    $request->requestBody->kmsKeyId = 'ipsum';
    $request->requestBody->name = 'Marshall Ritchie';
    $request->requestBody->tags = [
        'amet' => 'dolorum',
        'numquam' => 'veritatis',
        'ipsa' => 'ipsa',
        'iure' => 'odio',
    ];
    $request->xAmzAlgorithm = 'quaerat';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'voluptas';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'eos';

    $response = $sdk->sdk->startEarthObservationJob($request);

    if ($response->startEarthObservationJobOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startVectorEnrichmentJob

Creates a Vector Enrichment job for the supplied job type. Currently, there are two supported job types: reverse geocoding and map matching.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartVectorEnrichmentJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartVectorEnrichmentJobRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\StartVectorEnrichmentJobRequestBodyInputConfig;
use \OpenAPI\OpenAPI\Models\Shared\VectorEnrichmentJobDataSourceConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\VectorEnrichmentJobS3Data;
use \OpenAPI\OpenAPI\Models\Shared\VectorEnrichmentJobDocumentTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\StartVectorEnrichmentJobRequestBodyJobConfig;
use \OpenAPI\OpenAPI\Models\Shared\MapMatchingConfig;
use \OpenAPI\OpenAPI\Models\Shared\ReverseGeocodingConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartVectorEnrichmentJobRequest();
    $request->requestBody = new StartVectorEnrichmentJobRequestBody();
    $request->requestBody->clientToken = 'atque';
    $request->requestBody->executionRoleArn = 'sit';
    $request->requestBody->inputConfig = new StartVectorEnrichmentJobRequestBodyInputConfig();
    $request->requestBody->inputConfig->dataSourceConfig = new VectorEnrichmentJobDataSourceConfigInput();
    $request->requestBody->inputConfig->dataSourceConfig->s3Data = new VectorEnrichmentJobS3Data();
    $request->requestBody->inputConfig->dataSourceConfig->s3Data->kmsKeyId = 'fugiat';
    $request->requestBody->inputConfig->dataSourceConfig->s3Data->s3Uri = 'ab';
    $request->requestBody->inputConfig->documentType = VectorEnrichmentJobDocumentTypeEnum::CSV;
    $request->requestBody->jobConfig = new StartVectorEnrichmentJobRequestBodyJobConfig();
    $request->requestBody->jobConfig->mapMatchingConfig = new MapMatchingConfig();
    $request->requestBody->jobConfig->mapMatchingConfig->idAttributeName = 'soluta';
    $request->requestBody->jobConfig->mapMatchingConfig->timestampAttributeName = 'dolorum';
    $request->requestBody->jobConfig->mapMatchingConfig->xAttributeName = 'iusto';
    $request->requestBody->jobConfig->mapMatchingConfig->yAttributeName = 'voluptate';
    $request->requestBody->jobConfig->reverseGeocodingConfig = new ReverseGeocodingConfig();
    $request->requestBody->jobConfig->reverseGeocodingConfig->xAttributeName = 'dolorum';
    $request->requestBody->jobConfig->reverseGeocodingConfig->yAttributeName = 'deleniti';
    $request->requestBody->kmsKeyId = 'omnis';
    $request->requestBody->name = 'Kelvin Zboncak';
    $request->requestBody->tags = [
        'id' => 'saepe',
        'eius' => 'aspernatur',
    ];
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'optio';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'ad';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'suscipit';

    $response = $sdk->sdk->startVectorEnrichmentJob($request);

    if ($response->startVectorEnrichmentJobOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopEarthObservationJob

Use this operation to stop an existing earth observation job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopEarthObservationJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopEarthObservationJobRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopEarthObservationJobRequest();
    $request->requestBody = new StopEarthObservationJobRequestBody();
    $request->requestBody->arn = 'deserunt';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'minima';
    $request->xAmzCredential = 'repellendus';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'similique';
    $request->xAmzSignature = 'alias';
    $request->xAmzSignedHeaders = 'at';

    $response = $sdk->sdk->stopEarthObservationJob($request);

    if ($response->stopEarthObservationJobOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopVectorEnrichmentJob

Stops the Vector Enrichment job for a given job ARN.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopVectorEnrichmentJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopVectorEnrichmentJobRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopVectorEnrichmentJobRequest();
    $request->requestBody = new StopVectorEnrichmentJobRequestBody();
    $request->requestBody->arn = 'quaerat';
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'officiis';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'a';

    $response = $sdk->sdk->stopVectorEnrichmentJob($request);

    if ($response->stopVectorEnrichmentJobOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

The resource you want to tag.

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
        'harum' => 'iusto',
        'ipsum' => 'quisquam',
    ];
    $request->resourceArn = 'tenetur';
    $request->xAmzAlgorithm = 'amet';
    $request->xAmzContentSha256 = 'tempore';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'numquam';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'sapiente';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

The resource you want to untag.

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
    $request->resourceArn = 'totam';
    $request->xAmzAlgorithm = 'nihil';
    $request->xAmzContentSha256 = 'sit';
    $request->xAmzCredential = 'expedita';
    $request->xAmzDate = 'neque';
    $request->xAmzSecurityToken = 'sed';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'libero';
    $request->tagKeys = [
        'deserunt',
        'quam',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
