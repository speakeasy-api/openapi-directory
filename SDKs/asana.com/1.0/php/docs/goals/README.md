# goals

## Overview

A goal is an object in the goal-tracking system that helps your organization drive measurable results.

### Available Operations

* [addFollowers](#addfollowers) - Add a collaborator to a goal
* [createGoal](#creategoal) - Create a goal
* [createGoalMetric](#creategoalmetric) - Create a goal metric
* [deleteGoal](#deletegoal) - Delete a goal
* [getGoal](#getgoal) - Get a goal
* [getGoals](#getgoals) - Get goals
* [getParentGoalsForGoal](#getparentgoalsforgoal) - Get parent goals from a goal
* [removeFollowers](#removefollowers) - Remove a collaborator from a goal
* [updateGoal](#updategoal) - Update a goal
* [updateGoalMetric](#updategoalmetric) - Update a goal metric

## addFollowers

Adds followers to a goal. Returns the goal the followers were added to.
Each goal can be associated with zero or more followers in the system.
Requests to add/remove followers, if successful, will return the complete updated goal record, described above.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddFollowersRequest;
use \OpenAPI\OpenAPI\Models\Operations\AddFollowersRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\TaskAddFollowersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddFollowersRequest();
    $request->requestBody = new AddFollowersRequestBody();
    $request->requestBody->data = new TaskAddFollowersRequest();
    $request->requestBody->data->followers = [
        'dolore',
        'iusto',
    ];
    $request->goalGid = 'dicta';
    $request->optFields = [
        'enim',
        'accusamus',
        'commodi',
    ];
    $request->optPretty = false;

    $response = $sdk->goals->addFollowers($request);

    if ($response->addFollowers200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createGoal

Creates a new goal in a workspace or team.

Returns the full record of the newly created goal.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateGoalRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateGoalRequestBodyInput;
use \OpenAPI\OpenAPI\Models\Shared\GoalRequestInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateGoalRequest();
    $request->requestBody = new CreateGoalRequestBodyInput();
    $request->requestBody->data = new GoalRequestInput();
    $request->requestBody->data->dueOn = '2019-09-15';
    $request->requestBody->data->followers = [
        'quae',
        'ipsum',
        'quidem',
        'molestias',
    ];
    $request->requestBody->data->htmlNotes = '<body>Start building brand awareness.</body>';
    $request->requestBody->data->isWorkspaceLevel = true;
    $request->requestBody->data->liked = false;
    $request->requestBody->data->name = 'Grow web traffic by 30%';
    $request->requestBody->data->notes = 'Start building brand awareness.';
    $request->requestBody->data->owner = '12345';
    $request->requestBody->data->startOn = '2019-09-14';
    $request->requestBody->data->status = 'green';
    $request->requestBody->data->team = '12345';
    $request->requestBody->data->timePeriod = '12345';
    $request->requestBody->data->workspace = '12345';
    $request->limit = 566602;
    $request->offset = 'pariatur';
    $request->optFields = [
        'praesentium',
        'rem',
    ];
    $request->optPretty = false;

    $response = $sdk->goals->createGoal($request);

    if ($response->createGoal201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createGoalMetric

Creates and adds a goal metric to a specified goal. Note that this replaces an existing goal metric if one already exists.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateGoalMetricRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateGoalMetricRequestBodyInput;
use \OpenAPI\OpenAPI\Models\Shared\GoalMetricRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoalMetricRequestProgressSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoalMetricRequestUnitEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateGoalMetricRequest();
    $request->requestBody = new CreateGoalMetricRequestBodyInput();
    $request->requestBody->data = new GoalMetricRequestInput();
    $request->requestBody->data->currencyCode = 'EUR';
    $request->requestBody->data->currentNumberValue = 8.12;
    $request->requestBody->data->initialNumberValue = 5.2;
    $request->requestBody->data->precision = 2;
    $request->requestBody->data->progressSource = GoalMetricRequestProgressSourceEnum::MANUAL;
    $request->requestBody->data->targetNumberValue = 10.2;
    $request->requestBody->data->unit = GoalMetricRequestUnitEnum::PERCENTAGE;
    $request->goalGid = 'quasi';
    $request->optFields = [
        'sint',
        'veritatis',
        'itaque',
        'incidunt',
    ];
    $request->optPretty = false;

    $response = $sdk->goals->createGoalMetric($request);

    if ($response->createGoalMetric200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteGoal

A specific, existing goal can be deleted by making a DELETE request on the URL for that goal.

Returns an empty data record.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteGoalRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteGoalRequest();
    $request->goalGid = 'enim';
    $request->optFields = [
        'est',
    ];
    $request->optPretty = false;

    $response = $sdk->goals->deleteGoal($request);

    if ($response->deleteGoal200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGoal

Returns the complete goal record for a single goal.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetGoalRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGoalRequest();
    $request->goalGid = 'quibusdam';
    $request->optFields = [
        'deserunt',
    ];
    $request->optPretty = false;

    $response = $sdk->goals->getGoal($request);

    if ($response->getGoal200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGoals

Returns compact goal records.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetGoalsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGoalsRequest();
    $request->isWorkspaceLevel = false;
    $request->limit = 716327;
    $request->offset = 'quibusdam';
    $request->optFields = [
        'modi',
        'qui',
    ];
    $request->optPretty = false;
    $request->portfolio = 'aliquid';
    $request->project = 'cupiditate';
    $request->team = 'quos';
    $request->timePeriods = [
        'magni',
    ];
    $request->workspace = 'assumenda';

    $response = $sdk->goals->getGoals($request);

    if ($response->getGoals200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getParentGoalsForGoal

Returns a compact representation of all of the parent goals of a goal.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetParentGoalsForGoalRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetParentGoalsForGoalRequest();
    $request->goalGid = 'ipsam';
    $request->optFields = [
        'fugit',
    ];
    $request->optPretty = false;

    $response = $sdk->goals->getParentGoalsForGoal($request);

    if ($response->getParentGoalsForGoal200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeFollowers

Removes followers from a goal. Returns the goal the followers were removed from.
Each goal can be associated with zero or more followers in the system.
Requests to add/remove followers, if successful, will return the complete updated goal record, described above.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveFollowersRequest;
use \OpenAPI\OpenAPI\Models\Operations\RemoveFollowersRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\TaskAddFollowersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveFollowersRequest();
    $request->requestBody = new RemoveFollowersRequestBody();
    $request->requestBody->data = new TaskAddFollowersRequest();
    $request->requestBody->data->followers = [
        'excepturi',
        'tempora',
        'facilis',
    ];
    $request->goalGid = 'tempore';
    $request->optFields = [
        'delectus',
        'eum',
    ];
    $request->optPretty = false;

    $response = $sdk->goals->removeFollowers($request);

    if ($response->removeFollowers200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateGoal

An existing goal can be updated by making a PUT request on the URL for
that goal. Only the fields provided in the `data` block will be updated;
any unspecified fields will remain unchanged.

Returns the complete updated goal record.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGoalRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGoalRequestBodyInput;
use \OpenAPI\OpenAPI\Models\Shared\GoalRequestInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateGoalRequest();
    $request->requestBody = new UpdateGoalRequestBodyInput();
    $request->requestBody->data = new GoalRequestInput();
    $request->requestBody->data->dueOn = '2019-09-15';
    $request->requestBody->data->followers = [
        'eligendi',
    ];
    $request->requestBody->data->htmlNotes = '<body>Start building brand awareness.</body>';
    $request->requestBody->data->isWorkspaceLevel = true;
    $request->requestBody->data->liked = false;
    $request->requestBody->data->name = 'Grow web traffic by 30%';
    $request->requestBody->data->notes = 'Start building brand awareness.';
    $request->requestBody->data->owner = '12345';
    $request->requestBody->data->startOn = '2019-09-14';
    $request->requestBody->data->status = 'green';
    $request->requestBody->data->team = '12345';
    $request->requestBody->data->timePeriod = '12345';
    $request->requestBody->data->workspace = '12345';
    $request->goalGid = 'sint';
    $request->optFields = [
        'provident',
        'necessitatibus',
    ];
    $request->optPretty = false;

    $response = $sdk->goals->updateGoal($request);

    if ($response->updateGoal200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateGoalMetric

Updates a goal's existing metric's `current_number_value` if one exists,
otherwise responds with a 400 status code.

Returns the complete updated goal metric record.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGoalMetricRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGoalMetricRequestBodyInput;
use \OpenAPI\OpenAPI\Models\Shared\GoalMetricCurrentValueRequestInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateGoalMetricRequest();
    $request->requestBody = new UpdateGoalMetricRequestBodyInput();
    $request->requestBody->data = new GoalMetricCurrentValueRequestInput();
    $request->requestBody->data->currentNumberValue = 8.12;
    $request->goalGid = 'sint';
    $request->optFields = [
        'dolor',
        'debitis',
        'a',
    ];
    $request->optPretty = false;

    $response = $sdk->goals->updateGoalMetric($request);

    if ($response->updateGoalMetric200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
