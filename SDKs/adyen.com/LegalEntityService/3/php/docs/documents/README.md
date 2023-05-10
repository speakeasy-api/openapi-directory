# documents

### Available Operations

* [deleteDocumentsId](#deletedocumentsid) - Delete a document
* [getDocumentsId](#getdocumentsid) - Get a document
* [patchDocumentsId](#patchdocumentsid) - Update a document
* [postDocuments](#postdocuments) - Upload a document for verification checks

## deleteDocumentsId

Deletes a document.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDocumentsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDocumentsIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDocumentsIdRequest();
    $request->id = '097b0074-f154-471b-9e6e-13b99d488e1e';

    $requestSecurity = new DeleteDocumentsIdSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->documents->deleteDocumentsId($request, $requestSecurity);

    if ($response->void !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDocumentsId

Returns a document.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDocumentsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDocumentsIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDocumentsIdRequest();
    $request->id = '91e450ad-2abd-4442-a980-2d502a94bb4f';

    $requestSecurity = new GetDocumentsIdSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->documents->getDocumentsId($request, $requestSecurity);

    if ($response->document !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchDocumentsId

Updates a document.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchDocumentsIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\DocumentInput;
use \OpenAPI\OpenAPI\Models\Shared\Attachment;
use \OpenAPI\OpenAPI\Models\Shared\OwnerEntity;
use \OpenAPI\OpenAPI\Models\Shared\DocumentTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PatchDocumentsIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchDocumentsIdRequest();
    $request->documentInput = new DocumentInput();
    $request->documentInput->attachment = new Attachment();
    $request->documentInput->attachment->content = 'eum';
    $request->documentInput->attachment->contentType = 'non';
    $request->documentInput->attachment->filename = 'eligendi';
    $request->documentInput->attachment->pageName = 'sint';
    $request->documentInput->attachment->pageType = 'aliquid';
    $request->documentInput->attachments = [
        new Attachment(),
        new Attachment(),
        new Attachment(),
    ];
    $request->documentInput->description = 'necessitatibus';
    $request->documentInput->expiryDate = 'sint';
    $request->documentInput->fileName = 'officia';
    $request->documentInput->issuerCountry = 'dolor';
    $request->documentInput->issuerState = 'debitis';
    $request->documentInput->number = 'a';
    $request->documentInput->owner = new OwnerEntity();
    $request->documentInput->owner->id = 'a77dfb14-cd66-4ae3-95ef-b9ba88f3a669';
    $request->documentInput->owner->type = 'omnis';
    $request->documentInput->type = DocumentTypeEnum::PROOF_OF_NATIONAL_ID_NUMBER;
    $request->id = '074ba446-9b6e-4214-9959-890afa563e25';

    $requestSecurity = new PatchDocumentsIdSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->documents->patchDocumentsId($request, $requestSecurity);

    if ($response->document !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDocuments

Uploads a document for verification checks.

 Adyen uses the information from the [legal entity](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities) to run automated verification checks. If these checks fail, you will be notified to provide additional documents.

 You should only upload documents when Adyen requests additional information for the legal entity. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\DocumentInput;
use \OpenAPI\OpenAPI\Models\Shared\Attachment;
use \OpenAPI\OpenAPI\Models\Shared\OwnerEntity;
use \OpenAPI\OpenAPI\Models\Shared\DocumentTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostDocumentsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DocumentInput();
    $request->attachment = new Attachment();
    $request->attachment->content = 'quasi';
    $request->attachment->contentType = 'iure';
    $request->attachment->filename = 'doloribus';
    $request->attachment->pageName = 'debitis';
    $request->attachment->pageType = 'eius';
    $request->attachments = [
        new Attachment(),
        new Attachment(),
        new Attachment(),
        new Attachment(),
    ];
    $request->description = 'deleniti';
    $request->expiryDate = 'facilis';
    $request->fileName = 'in';
    $request->issuerCountry = 'architecto';
    $request->issuerState = 'architecto';
    $request->number = 'repudiandae';
    $request->owner = new OwnerEntity();
    $request->owner->id = '5b7fd2ed-0289-421c-9dc6-92601fb576b0';
    $request->owner->type = 'pariatur';
    $request->type = DocumentTypeEnum::PASSPORT;

    $requestSecurity = new PostDocumentsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->documents->postDocuments($request, $requestSecurity);

    if ($response->document !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
