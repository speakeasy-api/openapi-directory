# informationRetrieval

## Overview

Information Retrieval Functions

### Available Operations

* [keywordExtraction](#keywordextraction) - Extracts the Keywords of the Document
* [textExtraction](#textextraction) - Extracts the clear text from Webpage

## keywordExtraction

The Keyword Extraction function enables you to extract from an arbitrary document all the keywords and word-combinations along with their occurrences in the text.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\KeywordExtractionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new KeywordExtractionRequestBody();
    $request->apiKey = 'excepturi';
    $request->n = 392785;
    $request->text = 'recusandae';

    $response = $sdk->informationRetrieval->keywordExtraction($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## textExtraction

The Text Extraction function enables you to extract the important information from a given webpage. Extracting the clear text of the documents is an important step before any other analysis.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TextExtractionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TextExtractionRequestBody();
    $request->apiKey = 'temporibus';
    $request->text = 'ab';

    $response = $sdk->informationRetrieval->textExtraction($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
