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
    $request->id = 'f097b007-4f15-4471-b5e6-e13b99d488e1';

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
    $request->id = 'e91e450a-d2ab-4d44-a698-02d502a94bb4';

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
    $request->documentInput->attachment->content = 'delectus';
    $request->documentInput->attachment->contentType = 'eum';
    $request->documentInput->attachment->filename = 'non';
    $request->documentInput->attachment->pageName = 'eligendi';
    $request->documentInput->attachment->pageType = 'sint';
    $request->documentInput->attachments = [
        new Attachment(),
        new Attachment(),
    ];
    $request->documentInput->description = 'provident';
    $request->documentInput->expiryDate = 'necessitatibus';
    $request->documentInput->fileName = 'sint';
    $request->documentInput->issuerCountry = 'officia';
    $request->documentInput->issuerState = 'dolor';
    $request->documentInput->number = 'debitis';
    $request->documentInput->owner = new OwnerEntity();
    $request->documentInput->owner->id = 'fa77dfb1-4cd6-46ae-b95e-fb9ba88f3a66';
    $request->documentInput->owner->type = 'natus';
    $request->documentInput->type = DocumentTypeEnum::PROOF_OF_RESIDENCY;
    $request->id = '7074ba44-69b6-4e21-8195-9890afa563e2';

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
    $request->attachment->content = 'nemo';
    $request->attachment->contentType = 'quasi';
    $request->attachment->filename = 'iure';
    $request->attachment->pageName = 'doloribus';
    $request->attachment->pageType = 'debitis';
    $request->attachments = [
        new Attachment(),
        new Attachment(),
    ];
    $request->description = 'maxime';
    $request->expiryDate = 'deleniti';
    $request->fileName = 'facilis';
    $request->issuerCountry = 'in';
    $request->issuerState = 'architecto';
    $request->number = 'architecto';
    $request->owner = new OwnerEntity();
    $request->owner->id = 'e5b7fd2e-d028-4921-8ddc-692601fb576b';
    $request->owner->type = 'eaque';
    $request->type = DocumentTypeEnum::PROOF_OF_INDUSTRY;

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
