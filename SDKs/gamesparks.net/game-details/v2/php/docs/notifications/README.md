# notifications

## Overview

Log Summary Restv 2 Controller

### Available Operations

* [getGameSummaryUsingGET](#getgamesummaryusingget) - getGameSummary

## getGameSummaryUsingGET

getGameSummary

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETGameSummaryUsingGETRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETGameSummaryUsingGETStageEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGameSummaryUsingGETRequest();
    $request->apiKey = 'ea';
    $request->endDate = DateTime::createFromFormat('Y-m-d', '2022-04-29');
    $request->stage = GETGameSummaryUsingGETStageEnum::PREVIEW;
    $request->startDate = DateTime::createFromFormat('Y-m-d', '2022-06-02');

    $response = $sdk->notifications->getGameSummaryUsingGET($request);

    if ($response->gameSummaryModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
