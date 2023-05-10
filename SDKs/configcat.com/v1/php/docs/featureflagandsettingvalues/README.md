# featureFlagAndSettingValues

## Overview

With these endpoints you can control how your existing Feature Flags and Settings should serve their values. 
You can turn Feature Flags on or off, update Setting values and also add, remove or reorder Percentage and Targeting Rules.

To determine which Feature Flag or Setting you want to work with you have to pass its `settingId`. It can be
obtained from the [Feature Flag & Setting](#tag/Feature-Flags-and-Settings) endpoints.

You also have to specify in which Environment you want to change the served value configuration by its
`environmentId` which can be obtained from the [List Environments](#operation/get-environments) endpoint.

### Available Operations

* [getSettingValue](#getsettingvalue) - Get value
* [getSettingValues](#getsettingvalues) - Get values
* [postSettingValues](#postsettingvalues) - Post values
* [replaceSettingValue](#replacesettingvalue) - Replace value
* [updateSettingValue](#updatesettingvalue) - Update value

## getSettingValue

This endpoint returns the value of a Feature Flag or Setting 
in a specified Environment identified by the `environmentId` parameter.

The most important attributes in the response are the `value`, `rolloutRules` and `percentageRules`.
The `value` represents what the clients will get when the evaluation requests of our SDKs 
are not matching to any of the defined Targeting or Percentage Rules, or when there are no additional rules to evaluate.

The `rolloutRules` and `percentageRules` attributes are representing the current 
Targeting and Percentage Rules configuration of the actual Feature Flag or Setting 
in an **ordered** collection, which means the order of the returned rules is matching to the
evaluation order. You can read more about these rules [here](https://configcat.com/docs/advanced/targeting/).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSettingValueRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSettingValueRequest();
    $request->environmentId = '2efd121a-a6f1-4e67-8bdb-04f15756082d';
    $request->settingId = 401259;

    $response = $sdk->featureFlagAndSettingValues->getSettingValue($request);

    if ($response->settingValueModelHaljson !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSettingValues

This endpoint returns the value of a specified Config's Feature Flags or Settings identified by the `configId` parameter
in a specified Environment identified by the `environmentId` parameter.

The most important attributes in the response are the `value`, `rolloutRules` and `percentageRules`.
The `value` represents what the clients will get when the evaluation requests of our SDKs 
are not matching to any of the defined Targeting or Percentage Rules, or when there are no additional rules to evaluate.

The `rolloutRules` and `percentageRules` attributes are representing the current 
Targeting and Percentage Rules configuration of the actual Feature Flag or Setting 
in an **ordered** collection, which means the order of the returned rules is matching to the
evaluation order. You can read more about these rules [here](https://configcat.com/docs/advanced/targeting/).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSettingValuesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSettingValuesRequest();
    $request->configId = '8ea19f1d-1705-4133-9d08-086a1840394c';
    $request->environmentId = '26071f93-f5f0-4642-9ac7-af515cc413aa';

    $response = $sdk->featureFlagAndSettingValues->getSettingValues($request);

    if ($response->configSettingValuesModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSettingValues

This endpoint replaces the values of a specified Config's Feature Flags or Settings identified by the `configId` parameter
in a specified Environment identified by the `environmentId` parameter.

Only the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.

**Important:** As this endpoint is doing a complete replace, it's important to set every other attribute that you don't 
want to change in its original state. Not listing one means that it will reset.

For example: We have the following resource.
```
{
    "settingValues": [
		{
			"rolloutPercentageItems": [
				{
					"percentage": 30,
					"value": true
				},
				{
					"percentage": 70,
					"value": false
				}
			],
			"rolloutRules": [],
			"value": false,
			"settingId": 1
		}
	]
}
```
If we send a replace request body as below:
```
{ 
	"settingValues": [
		{
			"value": true,
			"settingId": 1
		}
	]
}
```
Then besides that the default value is set to `true`, all the Percentage Rules are deleted. 
So we get a response like this:
```
{
	"settingValues": [
		{
			"rolloutPercentageItems": [],
			"rolloutRules": [],
			"value": true,
			"setting": 
			{
				"settingId": 1
			}
		}
	]
}
```

The `rolloutRules` property describes two types of rules:

- **Targeting rules**: When you want to add or update a targenting rule, the `comparator`, `comparisonAttribute`, and `comparisonValue` members are required.
- **Segment rules**: When you want to add add or update a segment rule, the `segmentId` which identifies the desired segment and the `segmentComparator` members are required.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostSettingValuesRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateSettingValuesWithIdModel;
use \OpenAPI\OpenAPI\Models\Shared\UpdateSettingValueWithSettingIdModel;
use \OpenAPI\OpenAPI\Models\Shared\RolloutPercentageItemModel;
use \OpenAPI\OpenAPI\Models\Shared\RolloutRuleModel;
use \OpenAPI\OpenAPI\Models\Shared\RolloutRuleComparatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\SegmentComparatorEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostSettingValuesRequest();
    $request->updateSettingValuesWithIdModel = new UpdateSettingValuesWithIdModel();
    $request->updateSettingValuesWithIdModel->settingValues = [
        new UpdateSettingValueWithSettingIdModel(),
        new UpdateSettingValueWithSettingIdModel(),
    ];
    $request->configId = '3aae8d67-864d-4bb6-b5fd-5e60b375ed4f';
    $request->environmentId = '6fbee41f-3331-47fe-b5b6-0eb1ea426555';
    $request->reason = 'nobis';

    $response = $sdk->featureFlagAndSettingValues->postSettingValues($request);

    if ($response->configSettingValuesModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## replaceSettingValue

This endpoint replaces the whole value of a Feature Flag or Setting in a specified Environment.

Only the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.

**Important:** As this endpoint is doing a complete replace, it's important to set every other attribute that you don't 
want to change in its original state. Not listing one means that it will reset.

For example: We have the following resource.
```
{
	"rolloutPercentageItems": [
		{
			"percentage": 30,
			"value": true
		},
		{
			"percentage": 70,
			"value": false
		}
	],
	"rolloutRules": [],
	"value": false
}
```
If we send a replace request body as below:
```
{
	"value": true
}
```
Then besides that the default value is set to `true`, all the Percentage Rules are deleted. 
So we get a response like this:
```
{
	"rolloutPercentageItems": [],
	"rolloutRules": [],
	"value": true
}
```

The `rolloutRules` property describes two types of rules:

- **Targeting rules**: When you want to add or update a targenting rule, the `comparator`, `comparisonAttribute`, and `comparisonValue` members are required.
- **Segment rules**: When you want to add add or update a segment rule, the `segmentId` which identifies the desired segment and the `segmentComparator` members are required.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ReplaceSettingValueRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateSettingValueModel;
use \OpenAPI\OpenAPI\Models\Shared\RolloutPercentageItemModel;
use \OpenAPI\OpenAPI\Models\Shared\RolloutRuleModel;
use \OpenAPI\OpenAPI\Models\Shared\RolloutRuleComparatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\SegmentComparatorEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReplaceSettingValueRequest();
    $request->updateSettingValueModel = new UpdateSettingValueModel();
    $request->updateSettingValueModel->rolloutPercentageItems = [
        new RolloutPercentageItemModel(),
        new RolloutPercentageItemModel(),
        new RolloutPercentageItemModel(),
    ];
    $request->updateSettingValueModel->rolloutRules = [
        new RolloutRuleModel(),
    ];
    $request->updateSettingValueModel->value = 'minus';
    $request->environmentId = '28744ed5-3b88-4f3a-8d8f-5c0b2f2fb7b1';
    $request->reason = 'iste';
    $request->settingId = 292794;

    $response = $sdk->featureFlagAndSettingValues->replaceSettingValue($request);

    if ($response->settingValueModelHaljson !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSettingValue

This endpoint updates the value of a Feature Flag or Setting 
with a collection of [JSON Patch](http://jsonpatch.com) operations in a specified Environment.

Only the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.

The advantage of using JSON Patch is that you can describe individual update operations on a resource
without touching attributes that you don't want to change. It supports collection reordering, so it also 
can be used for reordering the targeting rules of a Feature Flag or Setting.

For example: We have the following resource.
```
{
	"rolloutPercentageItems": [
		{
			"percentage": 30,
			"value": true
		},
		{
			"percentage": 70,
			"value": false
		}
	],
	"rolloutRules": [],
	"value": false
}
```
If we send an update request body as below:
```
[
	{
		"op": "replace",
		"path": "/value",
		"value": true
	}
]
```
Only the default value is going to be set to `true` and all the Percentage Rules are remaining unchanged.
So we get a response like this:
```
{
	"rolloutPercentageItems": [
		{
			"percentage": 30,
			"value": true
		},
		{
			"percentage": 70,
			"value": false
		}
	],
	"rolloutRules": [],
	"value": true
}
```

The `rolloutRules` property describes two types of rules:

- **Targeting rules**: When you want to add or update a targenting rule, the `comparator`, `comparisonAttribute`, and `comparisonValue` members are required.
- **Segment rules**: When you want to add add or update a segment rule, the `segmentId` which identifies the desired segment and the `segmentComparator` members are required.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSettingValueRequest;
use \OpenAPI\OpenAPI\Models\Shared\JsonPatchInput;
use \OpenAPI\OpenAPI\Models\Shared\PatchOperationInput;
use \OpenAPI\OpenAPI\Models\Shared\JsonPointerInput;
use \OpenAPI\OpenAPI\Models\Shared\JsonPointerKindEnum;
use \OpenAPI\OpenAPI\Models\Shared\OperationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\JsonNode;
use \OpenAPI\OpenAPI\Models\Shared\JsonNodeOptions;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSettingValueRequest();
    $request->jsonPatchInput = new JsonPatchInput();
    $request->jsonPatchInput->operations = [
        new PatchOperationInput(),
        new PatchOperationInput(),
        new PatchOperationInput(),
    ];
    $request->environmentId = '276b2691-6fe1-4f08-b429-4e3698f447f6';
    $request->reason = 'sit';
    $request->settingId = 248413;

    $response = $sdk->featureFlagAndSettingValues->updateSettingValue($request);

    if ($response->settingValueModelHaljson !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
