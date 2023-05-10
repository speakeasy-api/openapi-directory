# registration

### Available Operations

* [register](#register) - Register a new user, creating them an account.

Registration, when successful, will return an array of access tokens so the user is
immediately signed in.

It returns Catalog and Commerce scoped tokens for both Account and Profile.
The Commerce ones are intended to allow the purchase of a subscription plan
in the step after registration, without the user being prompted to enter
their username and password again.

An email will also be sent with a link they need to click to confirm their
email address. This confirmation is done via the /verify-email endpoint.


## register

Register a new user, creating them an account.

Registration, when successful, will return an array of access tokens so the user is
immediately signed in.

It returns Catalog and Commerce scoped tokens for both Account and Profile.
The Commerce ones are intended to allow the purchase of a subscription plan
in the step after registration, without the user being prompted to enter
their username and password again.

An email will also be sent with a link they need to click to confirm their
email address. This confirmation is done via the /verify-email endpoint.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RegisterRequest;
use \OpenAPI\OpenAPI\Models\Shared\RegistrationRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegisterRequest();
    $request->registrationRequest = new RegistrationRequest();
    $request->registrationRequest->email = 'Guiseppe_Hodkiewicz6@hotmail.com';
    $request->registrationRequest->firstName = 'Paxton';
    $request->registrationRequest->languageCode = 'fuga';
    $request->registrationRequest->lastName = 'Padberg';
    $request->registrationRequest->marketing = false;
    $request->registrationRequest->password = 'consectetur';
    $request->registrationRequest->pin = 'velit';
    $request->registrationRequest->segments = [
        'ipsum',
        'impedit',
        'magni',
    ];
    $request->ff = [
        FeatureFlagsEnum::CD,
        FeatureFlagsEnum::CAS,
        FeatureFlagsEnum::LDP,
    ];
    $request->lang = 'iusto';

    $response = $sdk->registration->register($request);

    if ($response->accessTokens !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
