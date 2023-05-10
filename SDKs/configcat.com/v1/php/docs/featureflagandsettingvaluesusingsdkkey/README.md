# featureFlagAndSettingValuesUsingSDKKey

## Overview

With these endpoints you can control how your existing Feature Flags and Settings should serve their values. 
You can turn Feature Flags on or off, update Setting values and also add, remove or change the order of Percentage and Targeting Rules.

These endpoints are determining the Environment and Config by the <a target="_blank" rel="noopener noreferrer" href="https://app.configcat.com/sdkkey">SDK key</a> passed in
the `X-CONFIGCAT-SDKKEY` request header. To identify the desired Feature Flag or Setting to change, 
you can use either its `settingId` or `key` attribute. You can get those attributes 
from the [Feature Flag & Setting](#tag/Feature-Flags-and-Settings) endpoints.

### Available Operations

* [getSettingValueBySdkkey](#getsettingvaluebysdkkey) - Get value
* [replaceSettingValueBySdkkey](#replacesettingvaluebysdkkey) - Replace value
* [updateSettingValueBySdkkey](#updatesettingvaluebysdkkey) - Update value

## getSettingValueBySdkkey

This endpoint returns the value of a Feature Flag or Setting 
in a specified Environment identified by the <a target="_blank" rel="noopener noreferrer" href="https://app.configcat.com/sdkkey">SDK key</a> passed in the `X-CONFIGCAT-SDKKEY` header.

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
use \OpenAPI\OpenAPI\Models\Operations\GetSettingValueBySdkkeyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSettingValueBySdkkeyRequest();
    $request->xConfigcatSdkkey = 'officiis';
    $request->settingKeyOrId = 'praesentium';

    $response = $sdk->featureFlagAndSettingValuesUsingSDKKey->getSettingValueBySdkkey($request);

    if ($response->settingValueModelHaljson !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## replaceSettingValueBySdkkey

This endpoint replaces the value of a Feature Flag or Setting 
in a specified Environment identified by the <a target="_blank" rel="noopener noreferrer" href="https://app.configcat.com/sdkkey">SDK key</a> passed in the `X-CONFIGCAT-SDKKEY` header.

Only the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.

**Important:** As this endpoint is doing a complete replace, it's important to set every other attribute that you don't 
want to change to its original state. Not listing one means that it will reset.

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
Then besides that the default served value is set to `true`, all the Percentage Rules are deleted. 
So we get a response like this:
```
{
	"rolloutPercentageItems": [],
	"rolloutRules": [],
	"value": true
}
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ReplaceSettingValueBySdkkeyRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateSettingValueModel;
use \OpenAPI\OpenAPI\Models\Shared\RolloutPercentageItemModel;
use \OpenAPI\OpenAPI\Models\Shared\RolloutRuleModel;
use \OpenAPI\OpenAPI\Models\Shared\RolloutRuleComparatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\SegmentComparatorEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReplaceSettingValueBySdkkeyRequest();
    $request->updateSettingValueModel = new UpdateSettingValueModel();
    $request->updateSettingValueModel->rolloutPercentageItems = [
        new RolloutPercentageItemModel(),
        new RolloutPercentageItemModel(),
        new RolloutPercentageItemModel(),
    ];
    $request->updateSettingValueModel->rolloutRules = [
        new RolloutRuleModel(),
        new RolloutRuleModel(),
    ];
    $request->updateSettingValueModel->value = 'incidunt';
    $request->xConfigcatSdkkey = 'ipsam';
    $request->reason = 'debitis';
    $request->settingKeyOrId = 'rem';

    $response = $sdk->featureFlagAndSettingValuesUsingSDKKey->replaceSettingValueBySdkkey($request);

    if ($response->settingValueModelHaljson !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSettingValueBySdkkey

This endpoint updates the value of a Feature Flag or Setting 
with a collection of [JSON Patch](http://jsonpatch.com) operations in a specified Environment
identified by the <a target="_blank" rel="noopener noreferrer" href="https://app.configcat.com/sdkkey">SDK key</a> passed in the `X-CONFIGCAT-SDKKEY` header.

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
Only the default served value is going to be set to `true` and all the Percentage Rules are remaining unchanged.
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

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSettingValueBySdkkeyRequest;
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
    $request = new UpdateSettingValueBySdkkeyRequest();
    $request->jsonPatchInput = new JsonPatchInput();
    $request->jsonPatchInput->operations = [
        new PatchOperationInput(),
    ];
    $request->xConfigcatSdkkey = 'nobis';
    $request->reason = 'error';
    $request->settingKeyOrId = 'veniam';

    $response = $sdk->featureFlagAndSettingValuesUsingSDKKey->updateSettingValueBySdkkey($request);

    if ($response->settingValueModelHaljson !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
