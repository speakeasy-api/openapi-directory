# metrics

## Overview

Metrics

### Available Operations

* [documentSimilarity](#documentsimilarity) - Estimates the similarity between 2 Documents

## documentSimilarity

The Document Similarity function estimates the degree of similarity between two documents. It can be used to detect duplicate webpages or detect plagiarism.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DocumentSimilarityRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DocumentSimilarityRequestBody();
    $request->apiKey = 'quis';
    $request->copy = 'veritatis';
    $request->original = 'deserunt';

    $response = $sdk->metrics->documentSimilarity($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
