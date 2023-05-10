# SDK

## Overview

<fullname>Amazon RDS Performance Insights</fullname> <p>Amazon RDS Performance Insights enables you to monitor and explore different dimensions of database load based on data captured from a running DB instance. The guide provides detailed information about Performance Insights data types, parameters and errors.</p> <p>When Performance Insights is enabled, the Amazon RDS Performance Insights API provides visibility into the performance of your DB instance. Amazon CloudWatch provides the authoritative source for Amazon Web Services service-vended monitoring metrics. Performance Insights offers a domain-specific view of DB load.</p> <p>DB load is measured as average active sessions. Performance Insights provides the data to API consumers as a two-dimensional time-series dataset. The time dimension provides DB load data for each time point in the queried time range. Each time point decomposes overall load in relation to the requested dimensions, measured at that time point. Examples include SQL, Wait event, User, and Host.</p> <ul> <li> <p>To learn more about Performance Insights and Amazon Aurora DB instances, go to the <i> <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_PerfInsights.html"> Amazon Aurora User Guide</a> </i>. </p> </li> <li> <p>To learn more about Performance Insights and Amazon RDS DB instances, go to the <i> <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html"> Amazon RDS User Guide</a> </i>. </p> </li> <li> <p>To learn more about Performance Insights and Amazon DocumentDB clusters, go to the <i> <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/performance-insights.html"> Amazon DocumentDB Developer Guide</a> </i>.</p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/pi/>
### Available Operations

* [describeDimensionKeys](#describedimensionkeys) - <p>For a specific time period, retrieve the top <code>N</code> dimension keys for a metric. </p> <note> <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements, only the first 500 bytes are returned.</p> </note>
* [getDimensionKeyDetails](#getdimensionkeydetails) - Get the attributes of the specified dimension group for a DB instance or data source. For example, if you specify a SQL ID, <code>GetDimensionKeyDetails</code> retrieves the full text of the dimension <code>db.sql.statement</code> associated with this ID. This operation is useful because <code>GetResourceMetrics</code> and <code>DescribeDimensionKeys</code> don't support retrieval of large SQL statement text.
* [getResourceMetadata](#getresourcemetadata) - Retrieve the metadata for different features. For example, the metadata might indicate that a feature is turned on or off on a specific DB instance. 
* [getResourceMetrics](#getresourcemetrics) - <p>Retrieve Performance Insights metrics for a set of data sources over a time period. You can provide specific dimension groups and dimensions, and provide aggregation and filtering criteria for each group.</p> <note> <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements, only the first 500 bytes are returned.</p> </note>
* [listAvailableResourceDimensions](#listavailableresourcedimensions) - Retrieve the dimensions that can be queried for each specified metric type on a specified DB instance.
* [listAvailableResourceMetrics](#listavailableresourcemetrics) - Retrieve metrics of the specified types that can be queried for a specified DB instance. 

## describeDimensionKeys

<p>For a specific time period, retrieve the top <code>N</code> dimension keys for a metric. </p> <note> <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements, only the first 500 bytes are returned.</p> </note>

### Example Usage

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
        'quod',
        'quod',
    ];
    $request->describeDimensionKeysRequest->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-25T00:37:01.696Z');
    $request->describeDimensionKeysRequest->filter = [
        'dolorum' => 'dicta',
        'nam' => 'officia',
        'occaecati' => 'fugit',
        'deleniti' => 'hic',
    ];
    $request->describeDimensionKeysRequest->groupBy = new DimensionGroup();
    $request->describeDimensionKeysRequest->groupBy->dimensions = [
        'totam',
        'beatae',
        'commodi',
        'molestiae',
    ];
    $request->describeDimensionKeysRequest->groupBy->group = 'modi';
    $request->describeDimensionKeysRequest->groupBy->limit = 186332;
    $request->describeDimensionKeysRequest->identifier = 'impedit';
    $request->describeDimensionKeysRequest->maxResults = 736918;
    $request->describeDimensionKeysRequest->metric = 'esse';
    $request->describeDimensionKeysRequest->nextToken = 'ipsum';
    $request->describeDimensionKeysRequest->partitionBy = new DimensionGroup();
    $request->describeDimensionKeysRequest->partitionBy->dimensions = [
        'aspernatur',
        'perferendis',
        'ad',
    ];
    $request->describeDimensionKeysRequest->partitionBy->group = 'natus';
    $request->describeDimensionKeysRequest->partitionBy->limit = 149675;
    $request->describeDimensionKeysRequest->periodInSeconds = 612096;
    $request->describeDimensionKeysRequest->serviceType = ServiceTypeEnum::RDS;
    $request->describeDimensionKeysRequest->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-24T20:42:46.563Z');
    $request->maxResults = 'hic';
    $request->nextToken = 'saepe';
    $request->xAmzAlgorithm = 'fuga';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'iste';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'quidem';
    $request->xAmzTarget = DescribeDimensionKeysXAmzTargetEnum::PERFORMANCE_INSIGHTSV20180227_DESCRIBE_DIMENSION_KEYS;

    $response = $sdk->sdk->describeDimensionKeys($request);

    if ($response->describeDimensionKeysResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDimensionKeyDetails

Get the attributes of the specified dimension group for a DB instance or data source. For example, if you specify a SQL ID, <code>GetDimensionKeyDetails</code> retrieves the full text of the dimension <code>db.sql.statement</code> associated with this ID. This operation is useful because <code>GetResourceMetrics</code> and <code>DescribeDimensionKeys</code> don't support retrieval of large SQL statement text.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDimensionKeyDetailsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetDimensionKeyDetailsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ServiceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetDimensionKeyDetailsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDimensionKeyDetailsRequest();
    $request->getDimensionKeyDetailsRequest = new GetDimensionKeyDetailsRequest();
    $request->getDimensionKeyDetailsRequest->group = 'architecto';
    $request->getDimensionKeyDetailsRequest->groupIdentifier = 'ipsa';
    $request->getDimensionKeyDetailsRequest->identifier = 'reiciendis';
    $request->getDimensionKeyDetailsRequest->requestedDimensions = [
        'mollitia',
        'laborum',
        'dolores',
    ];
    $request->getDimensionKeyDetailsRequest->serviceType = ServiceTypeEnum::RDS;
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'explicabo';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'nemo';
    $request->xAmzSignedHeaders = 'minima';
    $request->xAmzTarget = GetDimensionKeyDetailsXAmzTargetEnum::PERFORMANCE_INSIGHTSV20180227_GET_DIMENSION_KEY_DETAILS;

    $response = $sdk->sdk->getDimensionKeyDetails($request);

    if ($response->getDimensionKeyDetailsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResourceMetadata

Retrieve the metadata for different features. For example, the metadata might indicate that a feature is turned on or off on a specific DB instance. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetResourceMetadataRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetResourceMetadataRequest;
use \OpenAPI\OpenAPI\Models\Shared\ServiceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetResourceMetadataXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourceMetadataRequest();
    $request->getResourceMetadataRequest = new GetResourceMetadataRequest();
    $request->getResourceMetadataRequest->identifier = 'excepturi';
    $request->getResourceMetadataRequest->serviceType = ServiceTypeEnum::RDS;
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'culpa';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'dolorem';
    $request->xAmzTarget = GetResourceMetadataXAmzTargetEnum::PERFORMANCE_INSIGHTSV20180227_GET_RESOURCE_METADATA;

    $response = $sdk->sdk->getResourceMetadata($request);

    if ($response->getResourceMetadataResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResourceMetrics

<p>Retrieve Performance Insights metrics for a set of data sources over a time period. You can provide specific dimension groups and dimensions, and provide aggregation and filtering criteria for each group.</p> <note> <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements, only the first 500 bytes are returned.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetResourceMetricsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetResourceMetricsRequest;
use \OpenAPI\OpenAPI\Models\Shared\MetricQuery;
use \OpenAPI\OpenAPI\Models\Shared\DimensionGroup;
use \OpenAPI\OpenAPI\Models\Shared\PeriodAlignmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetResourceMetricsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourceMetricsRequest();
    $request->getResourceMetricsRequest = new GetResourceMetricsRequest();
    $request->getResourceMetricsRequest->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-05T05:51:25.673Z');
    $request->getResourceMetricsRequest->identifier = 'repellat';
    $request->getResourceMetricsRequest->maxResults = 653108;
    $request->getResourceMetricsRequest->metricQueries = [
        new MetricQuery(),
        new MetricQuery(),
        new MetricQuery(),
    ];
    $request->getResourceMetricsRequest->nextToken = 'numquam';
    $request->getResourceMetricsRequest->periodAlignment = PeriodAlignmentEnum::END_TIME;
    $request->getResourceMetricsRequest->periodInSeconds = 466311;
    $request->getResourceMetricsRequest->serviceType = ServiceTypeEnum::RDS;
    $request->getResourceMetricsRequest->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-18T10:03:04.921Z');
    $request->maxResults = 'quia';
    $request->nextToken = 'quis';
    $request->xAmzAlgorithm = 'vitae';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'animi';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'odit';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'sequi';
    $request->xAmzTarget = GetResourceMetricsXAmzTargetEnum::PERFORMANCE_INSIGHTSV20180227_GET_RESOURCE_METRICS;

    $response = $sdk->sdk->getResourceMetrics($request);

    if ($response->getResourceMetricsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAvailableResourceDimensions

Retrieve the dimensions that can be queried for each specified metric type on a specified DB instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAvailableResourceDimensionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListAvailableResourceDimensionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ServiceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListAvailableResourceDimensionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAvailableResourceDimensionsRequest();
    $request->listAvailableResourceDimensionsRequest = new ListAvailableResourceDimensionsRequest();
    $request->listAvailableResourceDimensionsRequest->identifier = 'tenetur';
    $request->listAvailableResourceDimensionsRequest->maxResults = 368725;
    $request->listAvailableResourceDimensionsRequest->metrics = [
        'possimus',
        'aut',
        'quasi',
    ];
    $request->listAvailableResourceDimensionsRequest->nextToken = 'error';
    $request->listAvailableResourceDimensionsRequest->serviceType = ServiceTypeEnum::DOCDB;
    $request->maxResults = 'laborum';
    $request->nextToken = 'quasi';
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->xAmzTarget = ListAvailableResourceDimensionsXAmzTargetEnum::PERFORMANCE_INSIGHTSV20180227_LIST_AVAILABLE_RESOURCE_DIMENSIONS;

    $response = $sdk->sdk->listAvailableResourceDimensions($request);

    if ($response->listAvailableResourceDimensionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAvailableResourceMetrics

Retrieve metrics of the specified types that can be queried for a specified DB instance. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAvailableResourceMetricsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListAvailableResourceMetricsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ServiceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListAvailableResourceMetricsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAvailableResourceMetricsRequest();
    $request->listAvailableResourceMetricsRequest = new ListAvailableResourceMetricsRequest();
    $request->listAvailableResourceMetricsRequest->identifier = 'omnis';
    $request->listAvailableResourceMetricsRequest->maxResults = 451159;
    $request->listAvailableResourceMetricsRequest->metricTypes = [
        'perferendis',
        'doloremque',
        'reprehenderit',
    ];
    $request->listAvailableResourceMetricsRequest->nextToken = 'ut';
    $request->listAvailableResourceMetricsRequest->serviceType = ServiceTypeEnum::DOCDB;
    $request->maxResults = 'dicta';
    $request->nextToken = 'corporis';
    $request->xAmzAlgorithm = 'dolore';
    $request->xAmzContentSha256 = 'iusto';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'harum';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'commodi';
    $request->xAmzTarget = ListAvailableResourceMetricsXAmzTargetEnum::PERFORMANCE_INSIGHTSV20180227_LIST_AVAILABLE_RESOURCE_METRICS;

    $response = $sdk->sdk->listAvailableResourceMetrics($request);

    if ($response->listAvailableResourceMetricsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
