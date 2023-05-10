# person

### Available Operations

* [getPeople](#getpeople) - Get a list of people
* [getPeopleId](#getpeopleid) - Get a specific person

## getPeople

Each series, season, and episode has a Credits section where you may add people and roles.
This is an internal tool to recognize contributors. It is not related to ART19 users or account permissions.
Each Person added will have no additional access or permissions granted as a result of being included in the Credits section.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPeopleRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPeopleSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetPeopleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPeopleRequest();
    $request->ids = [
        'd4f9efc1-b451-42c1-8326-48dc2f615199',
        'ebfd0e9f-e6c6-432c-a3ae-d0117996312f',
        'de047717-78ff-461d-8174-76360a15db6a',
    ];
    $request->pageNumber = 381397;
    $request->pageSize = 399161;
    $request->q = 'perferendis';
    $request->sort = [
        GetPeopleSortEnum::FIRST_NAME,
        GetPeopleSortEnum::LAST_NAME,
    ];

    $requestSecurity = new GetPeopleSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->person->getPeople($request, $requestSecurity);

    if ($response->getPeople200ApplicationVndApiPlusJsonObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPeopleId

Each series, season, and episode has a Credits section where you may add people and roles.
This is an internal tool to recognize contributors. It is not related to ART19 users or account permissions.
Each Person added will have no additional access or permissions granted as a result of being included in the Credits section.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPeopleIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPeopleIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPeopleIdRequest();
    $request->id = 'a1adeaab-5851-4d6c-a45b-08b61891baa0';

    $requestSecurity = new GetPeopleIdSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->person->getPeopleId($request, $requestSecurity);

    if ($response->getPeopleId200ApplicationVndApiPlusJsonObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
