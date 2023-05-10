# bundleDownloads

## Overview

Operations about bundle_downloads

### Available Operations

* [getBundleDownloads](#getbundledownloads) - List Bundle Downloads

## getBundleDownloads

List Bundle Downloads

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBundleDownloadsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBundleDownloadsRequest();
    $request->bundleId = 714697;
    $request->bundleRegistrationId = 990339;
    $request->cursor = 'nihil';
    $request->filter = [
        'voluptate' => 'id',
    ];
    $request->filterGt = [
        'eius' => 'aspernatur',
        'perferendis' => 'amet',
        'optio' => 'accusamus',
        'ad' => 'saepe',
    ];
    $request->filterGteq = [
        'deserunt' => 'provident',
        'minima' => 'repellendus',
    ];
    $request->filterLt = [
        'similique' => 'alias',
        'at' => 'quaerat',
        'tempora' => 'vel',
    ];
    $request->filterLteq = [
        'officiis' => 'qui',
        'dolorum' => 'a',
        'esse' => 'harum',
        'iusto' => 'ipsum',
    ];
    $request->perPage = 788740;
    $request->sortBy = [
        'amet' => 'tempore',
        'accusamus' => 'numquam',
        'enim' => 'dolorem',
        'sapiente' => 'totam',
    ];

    $response = $sdk->bundleDownloads->getBundleDownloads($request);

    if ($response->bundleDownloadEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
