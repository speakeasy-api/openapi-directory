# featureFlagsAndSettings

## Overview

With these endpoints you can manage your Feature Flags or Settings within a Config. 
However you can't use them for manipulating the values of your Feature Flags and Settings,
to do that please visit the [Feature Flag & Setting values using SDK Key](#tag/Feature-Flag-and-Setting-values-using-SDK-Key)
and [Feature Flag & Setting values](#tag/Feature-Flag-and-Setting-values) sections of the API.

For using these endpoints, first you have to select which Config you want to work with by its `configId` 
which can be obtained from the [List Configs](#operation/get-configs) endpoint. 
Then you can use it to create new Feature Flags or to get information about existing ones.

Then you can obtain the `settingId` or `key` of your desired Feature Flag or Setting 
to use them for further operations in this API. 

<a href="https://configcat.com/docs/main-concepts/#setting" target="_blank" rel="noopener noreferrer">Here</a> you can read more about the concept of Settings.

### Available Operations

* [createSetting](#createsetting) - Create Flag
* [deleteSetting](#deletesetting) - Delete Flag
* [getSetting](#getsetting) - Get Flag
* [getSettings](#getsettings) - List Flags
* [updateSetting](#updatesetting) - Update Flag

## createSetting

This endpoint creates a new Feature Flag or Setting in a specified Config
identified by the `configId` parameter.

**Important:** The `key` attribute must be unique within the given Config.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSettingRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateSettingInitialValues;
use \OpenAPI\OpenAPI\Models\Shared\InitialValue;
use \OpenAPI\OpenAPI\Models\Shared\SettingTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSettingRequest();
    $request->createSettingInitialValues = new CreateSettingInitialValues();
    $request->createSettingInitialValues->hint = 'minima';
    $request->createSettingInitialValues->initialValues = [
        new InitialValue(),
        new InitialValue(),
        new InitialValue(),
        new InitialValue(),
    ];
    $request->createSettingInitialValues->key = 'reiciendis';
    $request->createSettingInitialValues->name = 'Martin Beatty';
    $request->createSettingInitialValues->settingType = SettingTypeEnum::STRING;
    $request->createSettingInitialValues->tags = [
        889234,
        104627,
    ];
    $request->configId = '858b6a89-fbe3-4a5a-a8e4-824d0ab40750';

    $response = $sdk->featureFlagsAndSettings->createSetting($request);

    if ($response->settingModelHaljson !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSetting

This endpoint removes a Feature Flag or Setting from a specified Config, 
identified by the `configId` parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSettingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSettingRequest();
    $request->settingId = 530537;

    $response = $sdk->featureFlagsAndSettings->deleteSetting($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetting

This endpoint returns the metadata attributes of a Feature Flag or Setting 
identified by the `settingId` parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSettingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSettingRequest();
    $request->settingId = 558065;

    $response = $sdk->featureFlagsAndSettings->getSetting($request);

    if ($response->settingModelHaljson !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSettings

This endpoint returns the list of the Feature Flags and Settings defined in a 
specified Config, identified by the `configId` parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSettingsRequest();
    $request->configId = 'e5186206-5e90-44f3-b119-4b8abf603a79';

    $response = $sdk->featureFlagsAndSettings->getSettings($request);

    if ($response->settingModelHaljsons !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSetting

This endpoint updates the metadata of a Feature Flag or Setting 
with a collection of [JSON Patch](http://jsonpatch.com) operations in a specified Config.

Only the `name`, `hint` and `tags` attributes are modifiable by this endpoint.
The `tags` attribute is a simple collection of the [tag IDs](#operation/get-tags) attached to the given setting.

The advantage of using JSON Patch is that you can describe individual update operations on a resource
without touching attributes that you don't want to change.

For example: We have the following resource.
```
{
	"settingId": 5345,
	"key": "myGrandFeature",
	"name": "Tihs is a naem with soem typos.",
	"hint": "This flag controls my grandioso feature.",
	"settingType": "boolean",
	"tags": [
		{
			"tagId": 0,
			"name": "sample tag",
			"color": "whale"
		}
	]
}
```
If we send an update request body as below (it changes the name and adds the already existing tag with the id 2):
```
[
	{
		"op": "replace",
		"path": "/name",
		"value": "This is the name without typos."
	},
	{
		"op": "add",
		"path": "/tags/-",
		"value": 2
	}
]
```
Only the `name` and `tags` are going to be updated and all the other attributes are remaining unchanged.
So we get a response like this:
```
{
	"settingId": 5345,
	"key": "myGrandFeature",
	"name": "This is the name without typos.",
	"hint": "This flag controls my grandioso feature.",
	"settingType": "boolean",
	"tags": [
		{
			"tagId": 0,
			"name": "sample tag",
			"color": "whale"
		},
		{
			"tagId": 2,
			"name": "another tag",
			"color": "koala"
		}
	]
}
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSettingRequest;
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
    $request = new UpdateSettingRequest();
    $request->jsonPatchInput = new JsonPatchInput();
    $request->jsonPatchInput->operations = [
        new PatchOperationInput(),
        new PatchOperationInput(),
        new PatchOperationInput(),
        new PatchOperationInput(),
    ];
    $request->settingId = 588740;

    $response = $sdk->featureFlagsAndSettings->updateSetting($request);

    if ($response->settingModelHaljson !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
