# SDK

## Overview

A plugin that recommends resources like articles or users to a user using ChatGP.

### Available Operations

* [getArticles](#getarticles) - Get a list of filtered articles

## getArticles

Get a list of filtered articles

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetArticlesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetArticlesRequest();
    $request->page = 602763;
    $request->perPage = 857946;
    $request->q = 'corrupti';
    $request->top = 'illum';

    $response = $sdk->sdk->getArticles($request);

    if ($response->getArticlesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
