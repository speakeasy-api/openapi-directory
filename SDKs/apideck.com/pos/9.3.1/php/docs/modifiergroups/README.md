# modifierGroups

### Available Operations

* [modifierGroupsAdd](#modifiergroupsadd) - Create Modifier Group
* [modifierGroupsAll](#modifiergroupsall) - List Modifier Groups
* [modifierGroupsDelete](#modifiergroupsdelete) - Delete Modifier Group
* [modifierGroupsOne](#modifiergroupsone) - Get Modifier Group
* [modifierGroupsUpdate](#modifiergroupsupdate) - Update Modifier Group

## modifierGroupsAdd

Create Modifier Group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ModifierGroupsAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\ModifierGroupInput;
use \OpenAPI\OpenAPI\Models\Shared\ModifierGroupModifiers;
use \OpenAPI\OpenAPI\Models\Shared\CurrencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\ModifierGroupIndicatesWhetherMultipleOptionsFromTheModifierGroupCanBeAppliedToASingleOrMultipleModifiersEnum;
use \OpenAPI\OpenAPI\Models\Operations\ModifierGroupsAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ModifierGroupsAddRequest();
    $request->modifierGroupInput = new ModifierGroupInput();
    $request->modifierGroupInput->alternateName = 'Modifier New';
    $request->modifierGroupInput->deleted = true;
    $request->modifierGroupInput->maximumAllowed = 5;
    $request->modifierGroupInput->minimumRequired = 1;
    $request->modifierGroupInput->modifiers = [
        new ModifierGroupModifiers(),
        new ModifierGroupModifiers(),
        new ModifierGroupModifiers(),
        new ModifierGroupModifiers(),
    ];
    $request->modifierGroupInput->name = 'Modifier';
    $request->modifierGroupInput->presentAtAllLocations = false;
    $request->modifierGroupInput->rowVersion = '1-12345';
    $request->modifierGroupInput->selectionType = ModifierGroupIndicatesWhetherMultipleOptionsFromTheModifierGroupCanBeAppliedToASingleOrMultipleModifiersEnum::SINGLE;
    $request->raw = false;
    $request->xApideckAppId = 'quaerat';
    $request->xApideckConsumerId = 'quos';
    $request->xApideckServiceId = 'aliquid';

    $requestSecurity = new ModifierGroupsAddSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->modifierGroups->modifierGroupsAdd($request, $requestSecurity);

    if ($response->createModifierGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## modifierGroupsAll

List Modifier Groups

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ModifierGroupsAllRequest;
use \OpenAPI\OpenAPI\Models\Operations\ModifierGroupsAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ModifierGroupsAllRequest();
    $request->cursor = 'dolorem';
    $request->fields = 'dolorem';
    $request->limit = 222443;
    $request->raw = false;
    $request->xApideckAppId = 'qui';
    $request->xApideckConsumerId = 'ipsum';
    $request->xApideckServiceId = 'hic';

    $requestSecurity = new ModifierGroupsAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->modifierGroups->modifierGroupsAll($request, $requestSecurity);

    if ($response->getModifierGroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## modifierGroupsDelete

Delete Modifier Group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ModifierGroupsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\ModifierGroupsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ModifierGroupsDeleteRequest();
    $request->id = '9b77f3a4-1006-474e-bf69-280d1ba77a89';
    $request->raw = false;
    $request->xApideckAppId = 'necessitatibus';
    $request->xApideckConsumerId = 'distinctio';
    $request->xApideckServiceId = 'asperiores';

    $requestSecurity = new ModifierGroupsDeleteSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->modifierGroups->modifierGroupsDelete($request, $requestSecurity);

    if ($response->deleteModifierGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## modifierGroupsOne

Get Modifier Group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ModifierGroupsOneRequest;
use \OpenAPI\OpenAPI\Models\Operations\ModifierGroupsOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ModifierGroupsOneRequest();
    $request->fields = 'nihil';
    $request->id = '37ae4203-ce5e-46a9-9d8a-0d446ce2af7a';
    $request->raw = false;
    $request->xApideckAppId = 'iusto';
    $request->xApideckConsumerId = 'ipsum';
    $request->xApideckServiceId = 'quisquam';

    $requestSecurity = new ModifierGroupsOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->modifierGroups->modifierGroupsOne($request, $requestSecurity);

    if ($response->getModifierGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## modifierGroupsUpdate

Update Modifier Group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ModifierGroupsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\ModifierGroupInput;
use \OpenAPI\OpenAPI\Models\Shared\ModifierGroupModifiers;
use \OpenAPI\OpenAPI\Models\Shared\CurrencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\ModifierGroupIndicatesWhetherMultipleOptionsFromTheModifierGroupCanBeAppliedToASingleOrMultipleModifiersEnum;
use \OpenAPI\OpenAPI\Models\Operations\ModifierGroupsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ModifierGroupsUpdateRequest();
    $request->modifierGroupInput = new ModifierGroupInput();
    $request->modifierGroupInput->alternateName = 'Modifier New';
    $request->modifierGroupInput->deleted = true;
    $request->modifierGroupInput->maximumAllowed = 5;
    $request->modifierGroupInput->minimumRequired = 1;
    $request->modifierGroupInput->modifiers = [
        new ModifierGroupModifiers(),
        new ModifierGroupModifiers(),
        new ModifierGroupModifiers(),
        new ModifierGroupModifiers(),
    ];
    $request->modifierGroupInput->name = 'Modifier';
    $request->modifierGroupInput->presentAtAllLocations = false;
    $request->modifierGroupInput->rowVersion = '1-12345';
    $request->modifierGroupInput->selectionType = ModifierGroupIndicatesWhetherMultipleOptionsFromTheModifierGroupCanBeAppliedToASingleOrMultipleModifiersEnum::SINGLE;
    $request->id = '3be453f8-70b3-426b-9a73-429cdb1a8422';
    $request->raw = false;
    $request->xApideckAppId = 'distinctio';
    $request->xApideckConsumerId = 'facilis';
    $request->xApideckServiceId = 'aliquid';

    $requestSecurity = new ModifierGroupsUpdateSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->modifierGroups->modifierGroupsUpdate($request, $requestSecurity);

    if ($response->updateModifierGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
