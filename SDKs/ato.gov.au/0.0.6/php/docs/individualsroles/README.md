# individualsRoles

## Overview

A role defines the characteristics of a relationship between parties.
An Individual can participate in a relationship with other individuals and organisations.

For example:

| Party         | Role           | Relationship     | Role          | Party                           |
| ------------- | -------------- | ---------------- | ------------- | ------------------------------- |
| Homer Simpson | Husband        | Marriage         | Wife          | Marge Simpson                   |
| Homer Simpson | Employee       | Employment       | Employer      | Springfield Nuclear Power Plant |
| Homer Simpson | Safety Officer | Colleague        | Supervisor    | Carl Carlson                    |
| Homer Simpson | Director       | Directorship     | Company       | Compu Global Hyper Mega Net     |
| Homer Simpson | Employee       | Employment       | Employer      | Compu Global Hyper Mega Net     |
| Homer Simpson | Member         | Membership       | Organisation  | The Stonecutters                |
| Homer Simpson | Partner        | Partnership      | Partnership   | The Be Sharps                   |
| Homer Simpson | Trustee        | Trusteeship      | Trust         | The Simpson Family Trust        |
| Homer Simpson | Member         | Membership       | Association   | Mensa International             |

You can use the API's **metadata services** to retrieve information about the classifcation schemes and
values used by the Registry.


### Available Operations

* [deleteIndividualsPartyIdRolesRoleId](#deleteindividualspartyidrolesroleid) - Delete a role
* [getIndividualsPartyIdRoles](#getindividualspartyidroles) - Retrieve a list of roles
* [getIndividualsPartyIdRolesRoleId](#getindividualspartyidrolesroleid) - Retrieve a role
* [postIndividualsPartyIdRoles](#postindividualspartyidroles) - Create a role
* [putIndividualsPartyIdRolesRoleId](#putindividualspartyidrolesroleid) - Update a role

## deleteIndividualsPartyIdRolesRoleId

Delete a role


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteIndividualsPartyIdRolesRoleIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteIndividualsPartyIdRolesRoleIdRequest();
    $request->apiKey = 'accusantium';
    $request->partyId = 'iure';
    $request->roleId = 'culpa';

    $response = $sdk->individualsRoles->deleteIndividualsPartyIdRolesRoleId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getIndividualsPartyIdRoles

Retrieve a list of roles

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetIndividualsPartyIdRolesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIndividualsPartyIdRolesRequest();
    $request->apiKey = 'doloribus';
    $request->partyId = 'sapiente';

    $response = $sdk->individualsRoles->getIndividualsPartyIdRoles($request);

    if ($response->partyRoles !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getIndividualsPartyIdRolesRoleId

Retrieve a role


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetIndividualsPartyIdRolesRoleIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIndividualsPartyIdRolesRoleIdRequest();
    $request->apiKey = 'architecto';
    $request->partyId = 'mollitia';
    $request->roleId = 'dolorem';

    $response = $sdk->individualsRoles->getIndividualsPartyIdRolesRoleId($request);

    if ($response->partyRole !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postIndividualsPartyIdRoles

Create a role


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostIndividualsPartyIdRolesRequest;
use \OpenAPI\OpenAPI\Models\Shared\PartyRoleInput;
use \OpenAPI\OpenAPI\Models\Shared\PartyRolePartyRoleTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PartyRoleRelatedPartyRoleTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PartyRoleRelationshipTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostIndividualsPartyIdRolesRequest();
    $request->apiKey = 'culpa';
    $request->partyRoleInput = new PartyRoleInput();
    $request->partyRoleInput->partyRoleType = PartyRolePartyRoleTypeEnum::DIRECTOR;
    $request->partyRoleInput->relatedPartyId = '123e4567-e89b-12d3-a456-426655440000';
    $request->partyRoleInput->relatedPartyRoleType = PartyRoleRelatedPartyRoleTypeEnum::TRUST;
    $request->partyRoleInput->relationshipType = PartyRoleRelationshipTypeEnum::PARTNERSHIP;
    $request->partyId = 'occaecati';

    $response = $sdk->individualsRoles->postIndividualsPartyIdRoles($request);

    if ($response->partyRole !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putIndividualsPartyIdRolesRoleId

Update a role


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutIndividualsPartyIdRolesRoleIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\PartyRoleInput;
use \OpenAPI\OpenAPI\Models\Shared\PartyRolePartyRoleTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PartyRoleRelatedPartyRoleTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PartyRoleRelationshipTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutIndividualsPartyIdRolesRoleIdRequest();
    $request->apiKey = 'numquam';
    $request->partyRoleInput = new PartyRoleInput();
    $request->partyRoleInput->partyRoleType = PartyRolePartyRoleTypeEnum::MEMBER;
    $request->partyRoleInput->relatedPartyId = '123e4567-e89b-12d3-a456-426655440000';
    $request->partyRoleInput->relatedPartyRoleType = PartyRoleRelatedPartyRoleTypeEnum::EMPLOYER;
    $request->partyRoleInput->relationshipType = PartyRoleRelationshipTypeEnum::MEMBERSHIP;
    $request->partyId = 'velit';
    $request->roleId = 'error';

    $response = $sdk->individualsRoles->putIndividualsPartyIdRolesRoleId($request);

    if ($response->partyRole !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
