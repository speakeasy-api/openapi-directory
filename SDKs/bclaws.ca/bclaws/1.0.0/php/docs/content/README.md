# content

### Available Operations

* [getContentAspectId](#getcontentaspectid) - Describes the documents and directories available within a specific 'aspect' (content group) of the BCLaws library
* [getContentAspectIdCivixDocumentId](#getcontentaspectidcivixdocumentid) - Lists the metadata available for the specified index or directory from the BCLaws legislative respository

## getContentAspectId

Describes the documents and directories available within a specific 'aspect' (content group) of the BCLaws library

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetContentAspectIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetContentAspectIDAspectIDEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContentAspectIdRequest();
    $request->aspectId = GetContentAspectIDAspectIDEnum::PSL;

    $response = $sdk->content->getContentAspectId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContentAspectIdCivixDocumentId

Lists the metadata available for the specified index or directory from the BCLaws legislative respository

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetContentAspectIdCivixDocumentIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetContentAspectIDCivixDocumentIDAspectIDEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContentAspectIdCivixDocumentIdRequest();
    $request->aspectId = GetContentAspectIDCivixDocumentIDAspectIDEnum::ECB;
    $request->civixDocumentId = 'quibusdam';

    $response = $sdk->content->getContentAspectIdCivixDocumentId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
