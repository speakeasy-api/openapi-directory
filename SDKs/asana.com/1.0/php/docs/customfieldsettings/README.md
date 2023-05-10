# customFieldSettings

## Overview

Custom fields are attached to a particular project with the custom field settings resource. This resource both represents the many-to-many join of the custom field and project as well as stores information that is relevant to that particular pairing. For instance, the `is_important` property determines some possible application-specific handling of that custom field.

### Available Operations

* [getCustomFieldSettingsForPortfolio](#getcustomfieldsettingsforportfolio) - Get a portfolio's custom fields
* [getCustomFieldSettingsForProject](#getcustomfieldsettingsforproject) - Get a project's custom fields

## getCustomFieldSettingsForPortfolio

Returns a list of all of the custom fields settings on a portfolio, in compact form.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCustomFieldSettingsForPortfolioRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCustomFieldSettingsForPortfolioRequest();
    $request->limit = 264555;
    $request->offset = 'qui';
    $request->optFields = [
        'cum',
        'esse',
        'ipsum',
        'excepturi',
    ];
    $request->optPretty = false;
    $request->portfolioGid = 'aspernatur';

    $response = $sdk->customFieldSettings->getCustomFieldSettingsForPortfolio($request);

    if ($response->getCustomFieldSettingsForPortfolio200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCustomFieldSettingsForProject

Returns a list of all of the custom fields settings on a project, in compact form. Note that, as in all queries to collections which return compact representation, `opt_fields` can be used to include more data than is returned in the compact representation. See the [getting started guide on input/output options](https://developers.asana.com/docs/#input-output-options) for more information.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCustomFieldSettingsForProjectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCustomFieldSettingsForProjectRequest();
    $request->limit = 18789;
    $request->offset = 'ad';
    $request->optFields = [
        'sed',
        'iste',
        'dolor',
    ];
    $request->optPretty = false;
    $request->projectGid = 'natus';

    $response = $sdk->customFieldSettings->getCustomFieldSettingsForProject($request);

    if ($response->getCustomFieldSettingsForProject200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
