# customerAccount

### Available Operations

* [activateUserAccount](#activateuseraccount) - Activate the user account
* [changeEmail](#changeemail) - Change user email
* [changePassword](#changepassword) - Change user password
* [getCreditCardInfo](#getcreditcardinfo) - Get credit card information
* [getProfilePictureInfo](#getprofilepictureinfo) - Get profile picture information
* [getUserAccountInfo](#getuseraccountinfo) - Get user account information
* [resendEmailActivation](#resendemailactivation) - Resend email activation
* [saveCompanyInfo](#savecompanyinfo) - Change company information
* [saveCreditCardInfo](#savecreditcardinfo) - Save user credit card info
* [savePersonalInfo](#savepersonalinfo) - Save user personal information
* [saveProfilePictureInfo](#saveprofilepictureinfo) - Change user picture information

## activateUserAccount

Activate the user account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'rerum'

    $response = $sdk->customerAccount->activateUserAccount($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## changeEmail

Change user email

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\ChangeEmailRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChangeEmailRequest();
    $request->newEmail = 'paulsimon@mysupercompany.com';

    $response = $sdk->customerAccount->changeEmail($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## changePassword

Change user password

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\ChangePasswordRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChangePasswordRequest();
    $request->newPassword = 'adipisci';
    $request->oldPassword = 'asperiores';

    $response = $sdk->customerAccount->changePassword($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCreditCardInfo

Get credit card information

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCreditCardInfoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCreditCardInfoRequest();
    $request->ifNoneMatch = 'earum';

    $response = $sdk->customerAccount->getCreditCardInfo($request);

    if ($response->creditCardInfoResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProfilePictureInfo

Get profile picture information

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProfilePictureInfoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProfilePictureInfoRequest();
    $request->ifNoneMatch = 'modi';

    $response = $sdk->customerAccount->getProfilePictureInfo($request);

    if ($response->profilePictureInfoResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserAccountInfo

Get user account information

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUserAccountInfoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserAccountInfoRequest();
    $request->ifNoneMatch = 'iste';

    $response = $sdk->customerAccount->getUserAccountInfo($request);

    if ($response->accountInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resendEmailActivation

Resend email activation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->customerAccount->resendEmailActivation();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## saveCompanyInfo

Change company information

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CompanyInfo;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CompanyInfo();
    $request->accountingEmails = [
        'paulsimon@mysupercompany.com',
        'paulsimon@mysupercompany.com',
        'paulsimon@mysupercompany.com',
    ];
    $request->address = '21 jump street';
    $request->city = 'New-York';
    $request->company = 'My super company';
    $request->countryIsoCodeAlpha3 = 'FRA';
    $request->postalCode = '13014';
    $request->vatNumber = '1234567890';

    $response = $sdk->customerAccount->saveCompanyInfo($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## saveCreditCardInfo

Save user credit card info

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreditCardInfo;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreditCardInfo();
    $request->cardNumber = '1234567890091234';
    $request->cardVerificationCode = '123';
    $request->expirationMonth = 12;
    $request->expirationYear = 2017;

    $response = $sdk->customerAccount->saveCreditCardInfo($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## savePersonalInfo

Save user personal information

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\PersonalInfo;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PersonalInfo();
    $request->beezUPTimeZoneId = 79;
    $request->firstName = 'Paul';
    $request->lastName = 'Simon';
    $request->phoneNumber = '5551234';
    $request->whatIDo = 'I'm the Manager on this company';

    $response = $sdk->customerAccount->savePersonalInfo($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## saveProfilePictureInfo

Change user picture information

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\ProfilePictureInfo;
use \OpenAPI\OpenAPI\Models\Shared\ProfilePictureSelectedEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProfilePictureInfo();
    $request->profilePictureSelected = ProfilePictureSelectedEnum::INITIALS;
    $request->profilePictureUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Marlon_Brando_%28cropped%29.jpg/220px-Marlon_Brando_%28cropped%29.jpg';

    $response = $sdk->customerAccount->saveProfilePictureInfo($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
