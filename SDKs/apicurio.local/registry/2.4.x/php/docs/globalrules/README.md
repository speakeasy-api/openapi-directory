# globalRules

## Overview

Global rules can be configured in the registry to govern how artifact content can 
evolve over time (as artifact content is **updated**). Global rules are applied 
whenever an artifact is added to the registry, and also whenever an artifact's 
content is updated (only if that artifact does not have its own specific rules 
configured). This section describes the operations used to manage the global rules.

### Available Operations

* [createGlobalRule](#createglobalrule) - Create global rule
* [deleteAllGlobalRules](#deleteallglobalrules) - Delete all global rules
* [deleteGlobalRule](#deleteglobalrule) - Delete global rule
* [getGlobalRuleConfig](#getglobalruleconfig) - Get global rule configuration
* [listGlobalRules](#listglobalrules) - List global rules
* [updateGlobalRuleConfig](#updateglobalruleconfig) - Update global rule configuration

## createGlobalRule

Adds a rule to the list of globally configured rules.

This operation can fail for the following reasons:

* The rule type is unknown (HTTP error `400`)
* The rule already exists (HTTP error `409`)
* A server error occurred (HTTP error `500`)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Rule;
use \OpenAPI\OpenAPI\Models\Shared\RuleTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Rule();
    $request->config = 'hic';
    $request->type = RuleTypeEnum::VALIDITY;

    $response = $sdk->globalRules->createGlobalRule($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAllGlobalRules

Deletes all globally configured rules.

This operation can fail for the following reasons:

* A server error occurred (HTTP error `500`)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->globalRules->deleteAllGlobalRules();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteGlobalRule

Deletes a single global rule.  If this is the only rule configured, this is the same
as deleting **all** rules.

This operation can fail for the following reasons:

* Invalid rule name/type (HTTP error `400`)
* No rule with name/type `rule` exists (HTTP error `404`)
* Rule cannot be deleted (HTTP error `409`)
* A server error occurred (HTTP error `500`)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteGlobalRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\RuleTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteGlobalRuleRequest();
    $request->rule = RuleTypeEnum::VALIDITY;

    $response = $sdk->globalRules->deleteGlobalRule($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGlobalRuleConfig

Returns information about the named globally configured rule.

This operation can fail for the following reasons:

* Invalid rule name/type (HTTP error `400`)
* No rule with name/type `rule` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGlobalRuleConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\RuleTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGlobalRuleConfigRequest();
    $request->rule = RuleTypeEnum::VALIDITY;

    $response = $sdk->globalRules->getGlobalRuleConfig($request);

    if ($response->rule !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listGlobalRules

Gets a list of all the currently configured global rules (if any).

This operation can fail for the following reasons:

* A server error occurred (HTTP error `500`)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->globalRules->listGlobalRules();

    if ($response->ruleTypes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateGlobalRuleConfig

Updates the configuration for a globally configured rule.

This operation can fail for the following reasons:

* Invalid rule name/type (HTTP error `400`)
* No rule with name/type `rule` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGlobalRuleConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\Rule;
use \OpenAPI\OpenAPI\Models\Shared\RuleTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateGlobalRuleConfigRequest();
    $request->rule1 = new Rule();
    $request->rule1->config = 'saepe';
    $request->rule1->type = RuleTypeEnum::VALIDITY;
    $request->rulePathParameter = RuleTypeEnum::VALIDITY;

    $response = $sdk->globalRules->updateGlobalRuleConfig($request);

    if ($response->rule !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
