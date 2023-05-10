# users

### Available Operations

* [usersAdd](#usersadd) - Create user
* [usersAll](#usersall) - List users
* [usersDelete](#usersdelete) - Delete user
* [usersOne](#usersone) - Get user
* [usersUpdate](#usersupdate) - Update user

## usersAdd

Create user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UsersAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\UserInput;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\AddressTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Email;
use \OpenAPI\OpenAPI\Models\Shared\EmailTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumber;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumberTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UsersAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersAddRequest();
    $request->userInput = new UserInput();
    $request->userInput->addresses = [
        new Address(),
        new Address(),
    ];
    $request->userInput->companyName = 'SpaceX';
    $request->userInput->department = 'R&D';
    $request->userInput->description = 'A description';
    $request->userInput->division = 'Europe';
    $request->userInput->emails = [
        new Email(),
        new Email(),
        new Email(),
    ];
    $request->userInput->employeeNumber = '123456-AB';
    $request->userInput->firstName = 'Elon';
    $request->userInput->image = 'https://logo.clearbit.com/spacex.com?s=128';
    $request->userInput->language = 'EN';
    $request->userInput->lastName = 'Musk';
    $request->userInput->parentId = '54321';
    $request->userInput->password = 'supersecretpassword';
    $request->userInput->phoneNumbers = [
        new PhoneNumber(),
        new PhoneNumber(),
    ];
    $request->userInput->status = 'active';
    $request->userInput->title = 'CEO';
    $request->userInput->username = 'masterofcoin';
    $request->raw = false;
    $request->xApideckAppId = 'labore';
    $request->xApideckConsumerId = 'possimus';
    $request->xApideckServiceId = 'facilis';

    $requestSecurity = new UsersAddSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->users->usersAdd($request, $requestSecurity);

    if ($response->createUserResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersAll

List users

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UsersAllRequest;
use \OpenAPI\OpenAPI\Models\Operations\UsersAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersAllRequest();
    $request->cursor = 'cum';
    $request->fields = 'commodi';
    $request->limit = 447144;
    $request->raw = false;
    $request->xApideckAppId = 'corporis';
    $request->xApideckConsumerId = 'reiciendis';
    $request->xApideckServiceId = 'assumenda';

    $requestSecurity = new UsersAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->users->usersAll($request, $requestSecurity);

    if ($response->getUsersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersDelete

Delete user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UsersDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\UsersDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersDeleteRequest();
    $request->id = '5e60b375-ed4f-46fb-ae41-f33317fe35b6';
    $request->raw = false;
    $request->xApideckAppId = 'ipsa';
    $request->xApideckConsumerId = 'voluptates';
    $request->xApideckServiceId = 'libero';

    $requestSecurity = new UsersDeleteSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->users->usersDelete($request, $requestSecurity);

    if ($response->deleteUserResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersOne

Get user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UsersOneRequest;
use \OpenAPI\OpenAPI\Models\Operations\UsersOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersOneRequest();
    $request->fields = 'vitae';
    $request->id = 'ea426555-ba3c-4287-84ed-53b88f3a8d8f';
    $request->raw = false;
    $request->xApideckAppId = 'exercitationem';
    $request->xApideckConsumerId = 'nobis';
    $request->xApideckServiceId = 'sit';

    $requestSecurity = new UsersOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->users->usersOne($request, $requestSecurity);

    if ($response->getUserResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## usersUpdate

Update user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UsersUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\UserInput;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\AddressTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Email;
use \OpenAPI\OpenAPI\Models\Shared\EmailTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumber;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumberTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UsersUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UsersUpdateRequest();
    $request->userInput = new UserInput();
    $request->userInput->addresses = [
        new Address(),
        new Address(),
        new Address(),
    ];
    $request->userInput->companyName = 'SpaceX';
    $request->userInput->department = 'R&D';
    $request->userInput->description = 'A description';
    $request->userInput->division = 'Europe';
    $request->userInput->emails = [
        new Email(),
    ];
    $request->userInput->employeeNumber = '123456-AB';
    $request->userInput->firstName = 'Elon';
    $request->userInput->image = 'https://logo.clearbit.com/spacex.com?s=128';
    $request->userInput->language = 'EN';
    $request->userInput->lastName = 'Musk';
    $request->userInput->parentId = '54321';
    $request->userInput->password = 'supersecretpassword';
    $request->userInput->phoneNumbers = [
        new PhoneNumber(),
        new PhoneNumber(),
        new PhoneNumber(),
        new PhoneNumber(),
    ];
    $request->userInput->status = 'active';
    $request->userInput->title = 'CEO';
    $request->userInput->username = 'masterofcoin';
    $request->id = '2fb7b194-a276-4b26-916f-e1f08f4294e3';
    $request->raw = false;
    $request->xApideckAppId = 'ea';
    $request->xApideckConsumerId = 'occaecati';
    $request->xApideckServiceId = 'quos';

    $requestSecurity = new UsersUpdateSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->users->usersUpdate($request, $requestSecurity);

    if ($response->updateUserResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
