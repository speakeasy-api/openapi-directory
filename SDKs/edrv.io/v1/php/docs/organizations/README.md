# organizations

### Available Operations

* [getOrganization](#getorganization) - Get one organization's data by id
* [getOrganizations](#getorganizations) - Get an array of all Organizations
* [patchOrganization](#patchorganization) - Update an organization's data

## getOrganization

Get one organization's data by id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationRequest();
    $request->id = '99dd2efd-121a-4a6f-9e67-4bdb04f15756';
    $request->includeLocations = false;

    $response = $sdk->organizations->getOrganization($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizations

Get an array of all Organizations

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\SortOrder1Enum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationsRequest();
    $request->createdAtDollarGte = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-20T21:00:03.729Z');
    $request->createdAtDollarLte = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-26T10:39:59.909Z');
    $request->includeLocations = false;
    $request->paginateEnabled = false;
    $request->paginateLimit = 401259;
    $request->paginatePage = 'deleniti';
    $request->sortBy = 'itaque';
    $request->sortOrder = SortOrder1Enum::ASC;
    $request->updatedAtDollarGte = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-23T15:36:15.509Z');
    $request->updatedAtDollarLte = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-15T03:59:52.153Z');

    $response = $sdk->organizations->getOrganizations($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchOrganization

Update an organization's data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PatchOrganizationRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatchOrganizationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PatchOrganizationRequestBodyAddress;
use \OpenAPI\OpenAPI\Models\Operations\PatchOrganizationRequestBodyChannels;
use \OpenAPI\OpenAPI\Models\Operations\PatchOrganizationRequestBodyConfigurations;
use \OpenAPI\OpenAPI\Models\Operations\PatchOrganizationRequestBodyLinks;
use \OpenAPI\OpenAPI\Models\Operations\PatchOrganizationRequestBodySupport;
use \OpenAPI\OpenAPI\Models\Operations\PatchOrganizationRequestBodySupportChat;
use \OpenAPI\OpenAPI\Models\Operations\PatchOrganizationRequestBodySupportChat1;
use \OpenAPI\OpenAPI\Models\Operations\PatchOrganizationRequestBodyTheme;
use \OpenAPI\OpenAPI\Models\Operations\PatchOrganizationRequestBodyThemeColors;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchOrganizationRequest();
    $request->requestBody = new PatchOrganizationRequestBody();
    $request->requestBody->active = false;
    $request->requestBody->address = new PatchOrganizationRequestBodyAddress();
    $request->requestBody->address->city = 'Boise City';
    $request->requestBody->address->country = 'Kazakhstan';
    $request->requestBody->address->postalCode = '30226';
    $request->requestBody->address->streetAndNumber = 'temporibus';
    $request->requestBody->channels = new PatchOrganizationRequestBodyChannels();
    $request->requestBody->channels->slack = [
        'rem' => 'aut',
    ];
    $request->requestBody->channels->telegram = [
        'eum' => 'mollitia',
        'ab' => 'corrupti',
        'non' => 'voluptatem',
    ];
    $request->requestBody->configurations = new PatchOrganizationRequestBodyConfigurations();
    $request->requestBody->configurations->basicAuthEnabled = false;
    $request->requestBody->configurations->basicAuthPassword = false;
    $request->requestBody->links = new PatchOrganizationRequestBodyLinks();
    $request->requestBody->links->about = 'dolor';
    $request->requestBody->links->contact = 'occaecati';
    $request->requestBody->links->privacy = 'numquam';
    $request->requestBody->links->support = 'impedit';
    $request->requestBody->locations = [
        'voluptas',
    ];
    $request->requestBody->logo = 'aut';
    $request->requestBody->name = 'Jean Wunsch';
    $request->requestBody->otp = 'voluptatibus';
    $request->requestBody->stripeConnectedAccountId = 'voluptas';
    $request->requestBody->stripeCountry = 'asperiores';
    $request->requestBody->stripeCurrency = 'aperiam';
    $request->requestBody->stripeReserveAmount = 409054;
    $request->requestBody->support = new PatchOrganizationRequestBodySupport();
    $request->requestBody->support->businessHours = 'quaerat';
    $request->requestBody->support->chat = new PatchOrganizationRequestBodySupportChat();
    $request->requestBody->support->chat->type = 'consequuntur';
    $request->requestBody->support->chat->value = 'repellendus';
    $request->requestBody->support->contactNumber = 'officia';
    $request->requestBody->support->email = 'Jennifer.Nikolaus6@hotmail.com';
    $request->requestBody->supportChat = new PatchOrganizationRequestBodySupportChat1();
    $request->requestBody->supportChat->id = '5cc413aa-63aa-4e8d-a786-4dbb675fd5e6';
    $request->requestBody->supportChat->name = 'Karla Feest';
    $request->requestBody->theme = new PatchOrganizationRequestBodyTheme();
    $request->requestBody->theme->colors = new PatchOrganizationRequestBodyThemeColors();
    $request->requestBody->theme->colors->primary = 'earum';
    $request->requestBody->theme->colors->secondary = 'facere';
    $request->id = '4f6fbee4-1f33-4317-be35-b60eb1ea4265';

    $response = $sdk->organizations->patchOrganization($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
