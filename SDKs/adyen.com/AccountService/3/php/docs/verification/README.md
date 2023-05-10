# verification

### Available Operations

* [postDeleteBankAccounts](#postdeletebankaccounts) - Delete bank accounts
* [postDeleteLegalArrangements](#postdeletelegalarrangements) - Delete legal arrangements
* [postDeleteShareholders](#postdeleteshareholders) - Delete shareholders
* [postDeleteSignatories](#postdeletesignatories) - Delete signatories
* [postGetUploadedDocuments](#postgetuploadeddocuments) - Get documents
* [postUploadDocument](#postuploaddocument) - Upload a document

## postDeleteBankAccounts

Deletes bank accounts associated with an account holder. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\DeleteBankAccountRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostDeleteBankAccountsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteBankAccountRequest();
    $request->accountHolderCode = 'sint';
    $request->bankAccountUUIDs = [
        'itaque',
    ];

    $requestSecurity = new PostDeleteBankAccountsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->verification->postDeleteBankAccounts($request, $requestSecurity);

    if ($response->genericResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteLegalArrangements

Deletes legal arrangements and/or legal arrangement entities associated with an account holder.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\DeleteLegalArrangementRequest;
use \OpenAPI\OpenAPI\Models\Shared\LegalArrangementRequestWrapper;
use \OpenAPI\OpenAPI\Models\Shared\LegalArrangementRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostDeleteLegalArrangementsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteLegalArrangementRequest();
    $request->accountHolderCode = 'incidunt';
    $request->legalArrangements = [
        new LegalArrangementRequestWrapper(),
        new LegalArrangementRequestWrapper(),
    ];

    $requestSecurity = new PostDeleteLegalArrangementsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->verification->postDeleteLegalArrangements($request, $requestSecurity);

    if ($response->genericResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteShareholders

Deletes shareholders associated with an account holder.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\DeleteShareholderRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostDeleteShareholdersSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteShareholderRequest();
    $request->accountHolderCode = 'consequatur';
    $request->shareholderCodes = [
        'quibusdam',
        'explicabo',
        'deserunt',
    ];

    $requestSecurity = new PostDeleteShareholdersSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->verification->postDeleteShareholders($request, $requestSecurity);

    if ($response->genericResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteSignatories

Deletes signatories associated with an account holder.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\DeleteSignatoriesRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostDeleteSignatoriesSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSignatoriesRequest();
    $request->accountHolderCode = 'distinctio';
    $request->signatoryCodes = [
        'labore',
        'modi',
        'qui',
        'aliquid',
    ];

    $requestSecurity = new PostDeleteSignatoriesSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->verification->postDeleteSignatories($request, $requestSecurity);

    if ($response->genericResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetUploadedDocuments

Returns documents that were previously uploaded for an account holder. Adyen uses the documents during the [verification process](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process).


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\GetUploadedDocumentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostGetUploadedDocumentsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUploadedDocumentsRequest();
    $request->accountHolderCode = 'cupiditate';
    $request->bankAccountUUID = 'quos';
    $request->shareholderCode = 'perferendis';

    $requestSecurity = new PostGetUploadedDocumentsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->verification->postGetUploadedDocuments($request, $requestSecurity);

    if ($response->getUploadedDocumentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUploadDocument

Uploads a document for an account holder. Adyen uses the documents during the [verification process](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\UploadDocumentRequest;
use \OpenAPI\OpenAPI\Models\Shared\DocumentDetail;
use \OpenAPI\OpenAPI\Models\Shared\DocumentDetailDocumentTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostUploadDocumentSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UploadDocumentRequest();
    $request->accountHolderCode = 'magni';
    $request->bankAccountUUID = 'assumenda';
    $request->documentContent = 'ipsam';
    $request->documentDetail = new DocumentDetail();
    $request->documentDetail->accountHolderCode = 'alias';
    $request->documentDetail->bankAccountUUID = 'fugit';
    $request->documentDetail->description = 'dolorum';
    $request->documentDetail->documentType = DocumentDetailDocumentTypeEnum::ID_CARD_BACK;
    $request->documentDetail->filename = 'tempora';
    $request->documentDetail->shareholderCode = 'facilis';
    $request->documentDetail->signatoryCode = 'tempore';
    $request->shareholderCode = 'labore';

    $requestSecurity = new PostUploadDocumentSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->verification->postUploadDocument($request, $requestSecurity);

    if ($response->updateAccountHolderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
