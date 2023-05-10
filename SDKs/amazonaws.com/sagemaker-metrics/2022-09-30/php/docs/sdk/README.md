# SDK

## Overview

<p>Contains all data plane API operations and data types for Amazon SageMaker Metrics. Use these APIs to put and retrieve (get) features related to your training run.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_metrics_BatchPutMetrics.html">BatchPutMetrics</a> </p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/sagemaker/>
### Available Operations

* [batchPutMetrics](#batchputmetrics) - Used to ingest training metrics into SageMaker. These metrics can be visualized in SageMaker Studio and retrieved with the <code>GetMetrics</code> API. 

## batchPutMetrics

Used to ingest training metrics into SageMaker. These metrics can be visualized in SageMaker Studio and retrieved with the <code>GetMetrics</code> API. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchPutMetricsRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchPutMetricsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\RawMetricData;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchPutMetricsRequest();
    $request->requestBody = new BatchPutMetricsRequestBody();
    $request->requestBody->metricData = [
        new RawMetricData(),
        new RawMetricData(),
        new RawMetricData(),
    ];
    $request->requestBody->trialComponentName = 'deserunt';
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'tempora';

    $response = $sdk->sdk->batchPutMetrics($request);

    if ($response->batchPutMetricsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
