# contacts

### Available Operations

* [getContact](#getcontact) - Returns a specific student contact
* [getContacts](#getcontacts) - Returns a list of student contacts
* [getDistrictForStudentContact](#getdistrictforstudentcontact) - Returns the district for a student contact
* [getStudentForContact](#getstudentforcontact) - Returns the student for a student contact

## getContact

Returns a specific student contact

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetContactRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContactRequest();
    $request->id = 'a05dfc2d-df7c-4c78-8a1b-a928fc816742';

    $response = $sdk->contacts->getContact($request);

    if ($response->studentContactResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContacts

Returns a list of student contacts

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetContactsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContactsRequest();
    $request->endingBefore = 'impedit';
    $request->limit = 736918;
    $request->startingAfter = 'esse';

    $response = $sdk->contacts->getContacts($request);

    if ($response->studentContactsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDistrictForStudentContact

Returns the district for a student contact

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDistrictForStudentContactRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDistrictForStudentContactRequest();
    $request->id = '39205929-396f-4ea7-996e-b10faaa2352c';

    $response = $sdk->contacts->getDistrictForStudentContact($request);

    if ($response->districtResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStudentForContact

Returns the student for a student contact

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetStudentForContactRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStudentForContactRequest();
    $request->id = '5955907a-ff1a-43a2-ba94-67739251aa52';

    $response = $sdk->contacts->getStudentForContact($request);

    if ($response->studentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
