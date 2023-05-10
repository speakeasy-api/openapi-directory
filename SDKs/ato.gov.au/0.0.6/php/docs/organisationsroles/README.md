# organisationsRoles

## Overview

A role defines the characteristics of a relationship between parties.
An Organisation can participate in a relationship with other organisations and indiviuals.

For example:

| Party                           | Role     | Relationship | Role         | Party             |
| ------------------------------- | -------- | -------------| ------------ | ----------------- |
| Springfield Nuclear Power Plant | Employer | Employment   | Employee     | Homer Simpson     |
| Springfield Nuclear Power Plant | Company  | Directorship | Director     | Mr Burns          |
| Springfield Nuclear Power Plant | Employer | Employment   | Employee     | Mr Burns          |
| Springfield Nuclear Power Plant | Sponsor  | Sponsorship  | Organisation | The Stonecutters  |

You can use the API's **metadata services** to retrieve information about the classifcation schemes and
values used by the Registry.


### Available Operations

* [deleteOrganisationsPartyIdRolesRoleId](#deleteorganisationspartyidrolesroleid) - Delete a role
* [getOrganisationsPartyIdRoles](#getorganisationspartyidroles) - Retrieve a list of roles
* [getOrganisationsPartyIdRolesRoleId](#getorganisationspartyidrolesroleid) - Retrieve a role
* [postOrganisationsPartyIdRoles](#postorganisationspartyidroles) - Create a role
* [putOrganisationsPartyIdRolesRoleId](#putorganisationspartyidrolesroleid) - Update a role

## deleteOrganisationsPartyIdRolesRoleId

Delete a role


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOrganisationsPartyIdRolesRoleIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOrganisationsPartyIdRolesRoleIdRequest();
    $request->apiKey = 'maiores';
    $request->partyId = 'rerum';
    $request->roleId = 'dicta';

    $response = $sdk->organisationsRoles->deleteOrganisationsPartyIdRolesRoleId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganisationsPartyIdRoles

Retrieve a list of roles

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganisationsPartyIdRolesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganisationsPartyIdRolesRequest();
    $request->apiKey = 'magnam';
    $request->partyId = 'cumque';

    $response = $sdk->organisationsRoles->getOrganisationsPartyIdRoles($request);

    if ($response->partyRoles !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganisationsPartyIdRolesRoleId

Retrieve a role


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganisationsPartyIdRolesRoleIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganisationsPartyIdRolesRoleIdRequest();
    $request->apiKey = 'facere';
    $request->partyId = 'ea';
    $request->roleId = 'aliquid';

    $response = $sdk->organisationsRoles->getOrganisationsPartyIdRolesRoleId($request);

    if ($response->partyRole !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postOrganisationsPartyIdRoles

Create a role


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostOrganisationsPartyIdRolesRequest;
use \OpenAPI\OpenAPI\Models\Shared\PartyRoleInput;
use \OpenAPI\OpenAPI\Models\Shared\PartyRolePartyRoleTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PartyRoleRelatedPartyRoleTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PartyRoleRelationshipTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostOrganisationsPartyIdRolesRequest();
    $request->apiKey = 'laborum';
    $request->partyRoleInput = new PartyRoleInput();
    $request->partyRoleInput->partyRoleType = PartyRolePartyRoleTypeEnum::TRUSTEE;
    $request->partyRoleInput->relatedPartyId = '123e4567-e89b-12d3-a456-426655440000';
    $request->partyRoleInput->relatedPartyRoleType = PartyRoleRelatedPartyRoleTypeEnum::COMPANY;
    $request->partyRoleInput->relationshipType = PartyRoleRelationshipTypeEnum::MEMBERSHIP;
    $request->partyId = 'enim';

    $response = $sdk->organisationsRoles->postOrganisationsPartyIdRoles($request);

    if ($response->partyRole !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putOrganisationsPartyIdRolesRoleId

Update a role


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutOrganisationsPartyIdRolesRoleIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\PartyRoleInput;
use \OpenAPI\OpenAPI\Models\Shared\PartyRolePartyRoleTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PartyRoleRelatedPartyRoleTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PartyRoleRelationshipTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutOrganisationsPartyIdRolesRoleIdRequest();
    $request->apiKey = 'accusamus';
    $request->partyRoleInput = new PartyRoleInput();
    $request->partyRoleInput->partyRoleType = PartyRolePartyRoleTypeEnum::TRUSTEE;
    $request->partyRoleInput->relatedPartyId = '123e4567-e89b-12d3-a456-426655440000';
    $request->partyRoleInput->relatedPartyRoleType = PartyRoleRelatedPartyRoleTypeEnum::PARTNERSHIP;
    $request->partyRoleInput->relationshipType = PartyRoleRelationshipTypeEnum::MEMBERSHIP;
    $request->partyId = 'nam';
    $request->roleId = 'id';

    $response = $sdk->organisationsRoles->putOrganisationsPartyIdRolesRoleId($request);

    if ($response->partyRole !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
