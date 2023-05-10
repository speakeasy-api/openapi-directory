# displayAds

### Available Operations

* [getApiDisplayAds](#getapidisplayads) - display ads
* [getApiDisplayAdsId](#getapidisplayadsid) - display ad
* [postApiDisplayAds](#postapidisplayads) - display ads
* [putApiDisplayAdsId](#putapidisplayadsid) - display ads
* [putApiDisplayAdsIdUnpublish](#putapidisplayadsidunpublish) - unpublish

## getApiDisplayAds

This endpoint allows the client to retrieve a list of all display ads.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->displayAds->getApiDisplayAds();

    if ($response->displayAds !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiDisplayAdsId

This endpoint allows the client to retrieve a single display ad, via its id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetApiDisplayAdsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiDisplayAdsIdRequest();
    $request->id = 135218;

    $response = $sdk->displayAds->getApiDisplayAdsId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiDisplayAds

This endpoint allows the client to create a new display ad.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        'ad' => 'natus',
    ]

    $response = $sdk->displayAds->postApiDisplayAds($request);

    if ($response->postApiDisplayAds200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putApiDisplayAdsId

This endpoint allows the client to update the attributes of a single display ad, via its id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutApiDisplayAdsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutApiDisplayAdsIdRequest();
    $request->requestBody = [
        'iste' => 'dolor',
    ];
    $request->id = 616934;

    $response = $sdk->displayAds->putApiDisplayAdsId($request);

    if ($response->putApiDisplayAdsId200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putApiDisplayAdsIdUnpublish

This endpoint allows the client to remove a display ad from rotation by un-publishing it.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutApiDisplayAdsIdUnpublishRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutApiDisplayAdsIdUnpublishRequest();
    $request->id = 386489;

    $response = $sdk->displayAds->putApiDisplayAdsIdUnpublish($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
