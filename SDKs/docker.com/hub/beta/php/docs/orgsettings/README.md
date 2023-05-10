# orgSettings

## Overview

The Org Settings API endpoints allow you to manage your organization's
settings.


### Available Operations

* [getV2OrgsNameSettings](#getv2orgsnamesettings) - Get organization settings
* [putV2OrgsNameSettings](#putv2orgsnamesettings) - Update organization settings

## getV2OrgsNameSettings

Returns organization settings by name.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2OrgsNameSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2OrgsNameSettingsRequest();
    $request->name = 'Elvira Bergnaum';

    $response = $sdk->orgSettings->getV2OrgsNameSettings($request);

    if ($response->orgSettings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putV2OrgsNameSettings

Updates an organization's settings. Some settings are only used when the
organization is on a business plan.

***Only users in the "owners" group of the organization can use this endpoint.***

The following settings are only used on a business plan:
- `restricted_images`


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutV2OrgsNameSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutV2OrgsNameSettingsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PutV2OrgsNameSettingsRequestBodyRestrictedImages;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutV2OrgsNameSettingsRequest();
    $request->requestBody = new PutV2OrgsNameSettingsRequestBody();
    $request->requestBody->restrictedImages = new PutV2OrgsNameSettingsRequestBodyRestrictedImages();
    $request->requestBody->restrictedImages->allowOfficialImages = true;
    $request->requestBody->restrictedImages->allowVerifiedPublishers = true;
    $request->requestBody->restrictedImages->enabled = true;
    $request->name = 'Andy Streich';

    $response = $sdk->orgSettings->putV2OrgsNameSettings($request);

    if ($response->orgSettings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
