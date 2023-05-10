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
    $request->id = '6b0d5f0d-30c5-4fbb-a587-053202c73d5f';

    $requestSecurity = new DeleteDocumentsIdSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->documents->deleteDocumentsId($request, $requestSecurity);

    if ($response->voidResponse !== null) {
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
    $request->id = 'e9b90c28-909b-43fe-89a8-d9cbf4863332';

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
    $request->documentInput->attachment->content = 'ipsum';
    $request->documentInput->attachment->contentType = 'hic';
    $request->documentInput->attachment->filename = 'excepturi';
    $request->documentInput->attachment->pageType = 'cum';
    $request->documentInput->attachments = [
        new Attachment(),
        new Attachment(),
    ];
    $request->documentInput->description = 'dignissimos';
    $request->documentInput->expiryDate = 'reiciendis';
    $request->documentInput->fileName = 'amet';
    $request->documentInput->issuerCountry = 'dolorum';
    $request->documentInput->issuerState = 'numquam';
    $request->documentInput->number = 'veritatis';
    $request->documentInput->owner = new OwnerEntity();
    $request->documentInput->owner->id = '00674ebf-6928-40d1-ba77-a89ebf737ae4';
    $request->documentInput->owner->type = 'aspernatur';
    $request->documentInput->type = DocumentTypeEnum::BANK_STATEMENT;
    $request->id = '3ce5e6a9-5d8a-40d4-86ce-2af7a73cf3be';

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
    $request->attachment->content = 'numquam';
    $request->attachment->contentType = 'enim';
    $request->attachment->filename = 'dolorem';
    $request->attachment->pageType = 'sapiente';
    $request->attachments = [
        new Attachment(),
        new Attachment(),
        new Attachment(),
    ];
    $request->description = 'nihil';
    $request->expiryDate = 'sit';
    $request->fileName = 'expedita';
    $request->issuerCountry = 'neque';
    $request->issuerState = 'sed';
    $request->number = 'vel';
    $request->owner = new OwnerEntity();
    $request->owner->id = 'b5a73429-cdb1-4a84-a2bb-679d2322715b';
    $request->owner->type = 'hic';
    $request->type = DocumentTypeEnum::BANK_STATEMENT;

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
