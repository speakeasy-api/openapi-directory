# verification

### Available Operations

* [postCheckAccountHolder](#postcheckaccountholder) - Trigger verification
* [postDeleteBankAccounts](#postdeletebankaccounts) - Delete bank accounts
* [postDeleteLegalArrangements](#postdeletelegalarrangements) - Delete legal arrangements
* [postDeletePayoutMethods](#postdeletepayoutmethods) - Delete payout methods
* [postDeleteShareholders](#postdeleteshareholders) - Delete shareholders
* [postDeleteSignatories](#postdeletesignatories) - Delete signatories
* [postGetUploadedDocuments](#postgetuploadeddocuments) - Get documents
* [postUploadDocument](#postuploaddocument) - Upload a document

## postCheckAccountHolder

Triggers the verification of an account holder even if the checks are not yet required for the volume that they are currently processing.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\PerformVerificationRequest;
use \OpenAPI\OpenAPI\Models\Shared\PerformVerificationRequestAccountStateTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostCheckAccountHolderSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PerformVerificationRequest();
    $request->accountHolderCode = 'provident';
    $request->accountStateType = PerformVerificationRequestAccountStateTypeEnum::PROCESSING;
    $request->tier = 572252;

    $requestSecurity = new PostCheckAccountHolderSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->verification->postCheckAccountHolder($request, $requestSecurity);

    if ($response->genericResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
    $request->accountHolderCode = 'officia';
    $request->bankAccountUUIDs = [
        'debitis',
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
use \OpenAPI\OpenAPI\Models\Shared\LegalArrangementRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostDeleteLegalArrangementsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteLegalArrangementRequest();
    $request->accountHolderCode = 'a';
    $request->legalArrangements = [
        new LegalArrangementRequest(),
        new LegalArrangementRequest(),
        new LegalArrangementRequest(),
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

## postDeletePayoutMethods

Deletes payout methods associated with an account holder.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\DeletePayoutMethodRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostDeletePayoutMethodsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePayoutMethodRequest();
    $request->accountHolderCode = 'in';
    $request->payoutMethodCodes = [
        'illum',
        'maiores',
    ];

    $requestSecurity = new PostDeletePayoutMethodsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->verification->postDeletePayoutMethods($request, $requestSecurity);

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
    $request->accountHolderCode = 'rerum';
    $request->shareholderCodes = [
        'magnam',
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
    $request->accountHolderCode = 'cumque';
    $request->signatoryCodes = [
        'ea',
        'aliquid',
        'laborum',
        'accusamus',
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
    $request->accountHolderCode = 'non';
    $request->bankAccountUUID = 'occaecati';
    $request->shareholderCode = 'enim';

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
    $request->documentContent = 'accusamus';
    $request->documentDetail = new DocumentDetail();
    $request->documentDetail->accountHolderCode = 'delectus';
    $request->documentDetail->bankAccountUUID = 'quidem';
    $request->documentDetail->description = 'provident';
    $request->documentDetail->documentType = DocumentDetailDocumentTypeEnum::PASSPORT;
    $request->documentDetail->filename = 'id';
    $request->documentDetail->legalArrangementCode = 'blanditiis';
    $request->documentDetail->legalArrangementEntityCode = 'deleniti';
    $request->documentDetail->shareholderCode = 'sapiente';
    $request->documentDetail->signatoryCode = 'amet';

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
