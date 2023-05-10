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
    $request->id = '7aff1a3a-2fa9-4467-b392-51aa52c3f5ad';

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
    $request->id = '019da1ff-e78f-4097-b007-4f15471b5e6e';

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
    $request->documentInput->attachment->content = 'quae';
    $request->documentInput->attachment->contentType = 'ipsum';
    $request->documentInput->attachment->filename = 'quidem';
    $request->documentInput->attachment->pageType = 'molestias';
    $request->documentInput->attachments = [
        new Attachment(),
        new Attachment(),
        new Attachment(),
    ];
    $request->documentInput->description = 'pariatur';
    $request->documentInput->expiryDate = 'modi';
    $request->documentInput->fileName = 'praesentium';
    $request->documentInput->issuerCountry = 'rem';
    $request->documentInput->issuerState = 'voluptates';
    $request->documentInput->number = 'quasi';
    $request->documentInput->owner = new OwnerEntity();
    $request->documentInput->owner->id = 'e91e450a-d2ab-4d44-a698-02d502a94bb4';
    $request->documentInput->owner->type = 'delectus';
    $request->documentInput->type = DocumentTypeEnum::PASSPORT;
    $request->id = '3c969e9a-3efa-477d-bb14-cd66ae395efb';

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
    $request->attachment->content = 'provident';
    $request->attachment->contentType = 'nam';
    $request->attachment->filename = 'id';
    $request->attachment->pageType = 'blanditiis';
    $request->attachments = [
        new Attachment(),
        new Attachment(),
        new Attachment(),
    ];
    $request->description = 'sapiente';
    $request->expiryDate = 'amet';
    $request->fileName = 'deserunt';
    $request->issuerCountry = 'nisi';
    $request->issuerState = 'vel';
    $request->number = 'natus';
    $request->owner = new OwnerEntity();
    $request->owner->id = '97074ba4-469b-46e2-9419-59890afa563e';
    $request->owner->type = 'odit';
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
