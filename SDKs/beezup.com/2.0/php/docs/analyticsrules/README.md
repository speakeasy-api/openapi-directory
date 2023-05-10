# analyticsRules

### Available Operations

* [createRule](#createrule) - Rule creation
* [deleteRule](#deleterule) - Delete Rule
* [disableRule](#disablerule) - Disable rule
* [enableRule](#enablerule) - Enable rule
* [getRule](#getrule) - Gets the rule
* [getRules](#getrules) - Gets the list of rules for a given store
* [getRulesExecutions](#getrulesexecutions) - Get the rules execution history
* [moveDownRule](#movedownrule) - Move the rule down
* [moveUpRule](#moveuprule) - Move the rule up
* [runRule](#runrule) - Run rule
* [runRules](#runrules) - Run all rules for this store
* [updateRule](#updaterule) - Update Rule

## createRule

Rule creation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\OptimisationActionNameEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateRuleRequest();
    $request->createRuleRequest = new CreateRuleRequest();
    $request->createRuleRequest->endUtcDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2017-09-30T10:42:40.001Z');
    $request->createRuleRequest->optimisationActionName = OptimisationActionNameEnum::REENABLE;
    $request->createRuleRequest->reportFilterId = 'fb19c53c-2f63-4262-9d94-2d7faa500acd';
    $request->createRuleRequest->ruleName = 'My rule';
    $request->createRuleRequest->startUtcDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2016-08-29T09:12:33.001Z');
    $request->storeId = 'cum';

    $response = $sdk->analyticsRules->createRule($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRule

Delete Rule

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRuleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRuleRequest();
    $request->ruleId = 'esse';
    $request->storeId = 'ipsum';

    $response = $sdk->analyticsRules->deleteRule($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disableRule

Disable rule

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisableRuleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisableRuleRequest();
    $request->ruleId = 'excepturi';
    $request->storeId = 'aspernatur';

    $response = $sdk->analyticsRules->disableRule($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enableRule

Enable rule

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EnableRuleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnableRuleRequest();
    $request->ruleId = 'perferendis';
    $request->storeId = 'ad';

    $response = $sdk->analyticsRules->enableRule($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRule

Gets the rule

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRuleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRuleRequest();
    $request->ruleId = 'natus';
    $request->storeId = 'sed';

    $response = $sdk->analyticsRules->getRule($request);

    if ($response->rule !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRules

Gets the list of rules for a given store

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRulesRequest();
    $request->storeId = 'iste';

    $response = $sdk->analyticsRules->getRules($request);

    if ($response->ruleList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRulesExecutions

Get the rules execution history

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRulesExecutionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRulesExecutionsRequest();
    $request->pageNumber = 222321;
    $request->pageSize = 616934;
    $request->storeId = 'laboriosam';

    $response = $sdk->analyticsRules->getRulesExecutions($request);

    if ($response->ruleExecutionReportings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## moveDownRule

Move the rule down

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MoveDownRuleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MoveDownRuleRequest();
    $request->ruleId = 'hic';
    $request->storeId = 'saepe';

    $response = $sdk->analyticsRules->moveDownRule($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## moveUpRule

Move the rule up

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MoveUpRuleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MoveUpRuleRequest();
    $request->ruleId = 'fuga';
    $request->storeId = 'in';

    $response = $sdk->analyticsRules->moveUpRule($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runRule

Run rule

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunRuleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunRuleRequest();
    $request->ruleId = 'corporis';
    $request->storeId = 'iste';

    $response = $sdk->analyticsRules->runRule($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runRules

Run all rules for this store

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunRulesRequest();
    $request->storeId = 'iure';

    $response = $sdk->analyticsRules->runRules($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateRule

Update Rule

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateRuleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateRuleRequest();
    $request->ruleId = 'saepe';
    $request->storeId = 'quidem';
    $request->updateRuleRequest = new UpdateRuleRequest();
    $request->updateRuleRequest->endUtcDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2016-08-29T09:12:33.001Z');
    $request->updateRuleRequest->ruleName = 'My Rule Renamed';
    $request->updateRuleRequest->startUtcDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2016-08-29T09:12:33.001Z');

    $response = $sdk->analyticsRules->updateRule($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
