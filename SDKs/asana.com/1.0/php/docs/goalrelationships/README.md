# goalRelationships

## Overview

A goal relationship is an object representing the relationship between a goal and another goal, a project, or a portfolio.

### Available Operations

* [addSupportingRelationship](#addsupportingrelationship) - Add a supporting goal relationship
* [getGoalRelationship](#getgoalrelationship) - Get a goal relationship
* [getGoalRelationships](#getgoalrelationships) - Get goal relationships
* [removeSupportingRelationship](#removesupportingrelationship) - Removes a supporting goal relationship
* [updateGoalRelationship](#updategoalrelationship) - Update a goal relationship

## addSupportingRelationship

Creates a goal relationship by adding a supporting resource to a given goal.

Returns the newly created goal relationship record.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddSupportingRelationshipRequest;
use \OpenAPI\OpenAPI\Models\Operations\AddSupportingRelationshipRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\GoalAddSupportingRelationshipRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddSupportingRelationshipRequest();
    $request->requestBody = new AddSupportingRelationshipRequestBody();
    $request->requestBody->data = new GoalAddSupportingRelationshipRequest();
    $request->requestBody->data->contributionWeight = 1;
    $request->requestBody->data->insertAfter = '1331';
    $request->requestBody->data->insertBefore = '1331';
    $request->requestBody->data->supportingResource = '12345';
    $request->goalGid = 'possimus';
    $request->optFields = [
        'quasi',
    ];
    $request->optPretty = false;

    $response = $sdk->goalRelationships->addSupportingRelationship($request);

    if ($response->addSupportingRelationship200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGoalRelationship

Returns the complete updated goal relationship record for a single goal relationship.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetGoalRelationshipRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGoalRelationshipRequest();
    $request->goalRelationshipGid = 'error';
    $request->optFields = [
        'laborum',
        'quasi',
        'reiciendis',
        'voluptatibus',
    ];
    $request->optPretty = false;

    $response = $sdk->goalRelationships->getGoalRelationship($request);

    if ($response->getGoalRelationship200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGoalRelationships

Returns compact goal relationship records.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetGoalRelationshipsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGoalRelationshipsRequest();
    $request->optFields = [
        'nihil',
        'praesentium',
        'voluptatibus',
        'ipsa',
    ];
    $request->optPretty = false;
    $request->resourceSubtype = 'omnis';
    $request->supportedGoal = 'voluptate';

    $response = $sdk->goalRelationships->getGoalRelationships($request);

    if ($response->getGoalRelationships200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeSupportingRelationship

Removes a goal relationship for a given parent goal.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveSupportingRelationshipRequest;
use \OpenAPI\OpenAPI\Models\Operations\RemoveSupportingRelationshipRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\GoalRemoveSupportingRelationshipRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveSupportingRelationshipRequest();
    $request->requestBody = new RemoveSupportingRelationshipRequestBody();
    $request->requestBody->data = new GoalRemoveSupportingRelationshipRequest();
    $request->requestBody->data->supportingResource = '12345';
    $request->goalGid = 'cum';
    $request->optFields = [
        'doloremque',
    ];
    $request->optPretty = false;

    $response = $sdk->goalRelationships->removeSupportingRelationship($request);

    if ($response->removeSupportingRelationship200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateGoalRelationship

An existing goal relationship can be updated by making a PUT request on the URL for
that goal relationship. Only the fields provided in the `data` block will be updated;
any unspecified fields will remain unchanged.

Returns the complete updated goal relationship record.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGoalRelationshipRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGoalRelationshipRequestBodyInput;
use \OpenAPI\OpenAPI\Models\Shared\GoalRelationshipRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoalRelationshipRequestSupportedGoalInput;
use \OpenAPI\OpenAPI\Models\Shared\GoalRelationshipRequestSupportedGoalOwnerInput;
use \OpenAPI\OpenAPI\Models\Shared\GoalRelationshipRequestSupportingResourceInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateGoalRelationshipRequest();
    $request->requestBody = new UpdateGoalRelationshipRequestBodyInput();
    $request->requestBody->data = new GoalRelationshipRequestInput();
    $request->requestBody->data->contributionWeight = 1;
    $request->requestBody->data->supportedGoal = new GoalRelationshipRequestSupportedGoalInput();
    $request->requestBody->data->supportedGoal->name = 'Grow web traffic by 30%';
    $request->requestBody->data->supportedGoal->owner = new GoalRelationshipRequestSupportedGoalOwnerInput();
    $request->requestBody->data->supportedGoal->owner->name = 'Greg Sanchez';
    $request->requestBody->data->supportingResource = new GoalRelationshipRequestSupportingResourceInput();
    $request->requestBody->data->supportingResource->name = 'Stuff to buy';
    $request->goalRelationshipGid = 'reprehenderit';
    $request->optFields = [
        'maiores',
        'dicta',
    ];
    $request->optPretty = false;

    $response = $sdk->goalRelationships->updateGoalRelationship($request);

    if ($response->updateGoalRelationship200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
