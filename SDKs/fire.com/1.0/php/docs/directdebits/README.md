# directDebits

## Overview

The fire.com api allows businesses to automate direct debit payment actions on their fire.com business accounts.

You can retrieve details of your direct debit payments, direct debit mandates and also take actions on both your direct debit payments and mandates.


### Available Operations

* [activateMandate](#activatemandate) - Activate a direct debit mandate
* [cancelMandateByUuid](#cancelmandatebyuuid) - Cancel a direct debit mandate
* [getDirectDebitByUuid](#getdirectdebitbyuuid) - Get the details of a direct debit
* [getDirectDebitMandates](#getdirectdebitmandates) - List all direct debit mandates
* [getDirectDebitsForMandateUuid](#getdirectdebitsformandateuuid) - Get all DD payments associated with a direct debit mandate
* [getMandate](#getmandate) - Get direct debit mandate details
* [rejectDirectDebit](#rejectdirectdebit) - Reject a direct debit payment
* [updateMandateAlias](#updatemandatealias) - Update a direct debit mandate alias

## activateMandate

This endpoint can only be used to activate a direct debit mandate when it is in the status REJECT_REQUESTED (even if the account has direct debits disabled). This action will also enable the account for direct debits if it was previously set to be disabled.
The permision needed to access this endpoint is PERM_BUSINESS_POST_MANDATE_ACTIVATE


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ActivateMandateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivateMandateRequest();
    $request->mandateUuid = '4ADFB67A-0F5B-4A9A-9D74-34437250045C';

    $response = $sdk->directDebits->activateMandate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cancelMandateByUuid

This endpoint allows you to cancel a direct debit mandate.
The permision needed to access this endpoint is PERM_BUSINESS_POST_MANDATE_CANCEL


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelMandateByUuidRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelMandateByUuidRequest();
    $request->mandateUuid = '4ADFB67A-0F5B-4A9A-9D74-34437250045C';

    $response = $sdk->directDebits->cancelMandateByUuid($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDirectDebitByUuid

Retrieve all details of a single direct debit collection/payment, whether successful or not.
The permision needed to access this endpoint is **PERM_BUSINESS_GET_DIRECT_DEBIT**


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDirectDebitByUuidRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDirectDebitByUuidRequest();
    $request->directDebitUuid = '4ADFB67A-0F5B-4A9A-9D74-34437250045C';

    $response = $sdk->directDebits->getDirectDebitByUuid($request);

    if ($response->directDebit !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDirectDebitMandates

The permision needed to access this endpoint is PERM_BUSINESS_GET_MANDATES


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->directDebits->getDirectDebitMandates();

    if ($response->mandates !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDirectDebitsForMandateUuid

Retrieve all direct debit payments associated with a direct debit mandate.
The permision needed to access this endpoint is PERM_BUSINESS_GET_DIRECT_DEBITS


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDirectDebitsForMandateUuidRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDirectDebitsForMandateUuidRequest();
    $request->mandateUuid = 'tempora';

    $response = $sdk->directDebits->getDirectDebitsForMandateUuid($request);

    if ($response->directDebits !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMandate

Retrieve all details for a direct debit mandate.
The permision needed to access this endpoint is PERM_BUSINESS_GET_MANDATE


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMandateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMandateRequest();
    $request->mandateUuid = '4ADFB67A-0F5B-4A9A-9D74-34437250045C';

    $response = $sdk->directDebits->getMandate($request);

    if ($response->mandate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## rejectDirectDebit

This endpoint allows you to reject a direct debit payment where the status is still set to RECEIVED.
Permission name PERM_BUSINESS_POST_DIRECT_DEBIT_REJECT


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RejectDirectDebitRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RejectDirectDebitRequest();
    $request->directDebitUuid = '4ADFB67A-0F5B-4A9A-9D74-34437250045C';

    $response = $sdk->directDebits->rejectDirectDebit($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateMandateAlias

Update Direct Debit Mandate Alias
The permision needed to access this endpoint is PERM_BUSINESS_PUT_MANDATE


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMandateAliasRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateMandateAliasRequest();
    $request->mandateUuid = '4ADFB67A-0F5B-4A9A-9D74-34437250045C';

    $response = $sdk->directDebits->updateMandateAlias($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
