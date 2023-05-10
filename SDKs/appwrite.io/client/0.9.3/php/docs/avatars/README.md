# avatars

## Overview

The Avatars service aims to help you complete everyday tasks related to your app image, icons, and avatars.

### Available Operations

* [avatarsGetBrowser](#avatarsgetbrowser) - Get Browser Icon
* [avatarsGetCreditCard](#avatarsgetcreditcard) - Get Credit Card Icon
* [avatarsGetFavicon](#avatarsgetfavicon) - Get Favicon
* [avatarsGetFlag](#avatarsgetflag) - Get Country Flag
* [avatarsGetImage](#avatarsgetimage) - Get Image from URL
* [avatarsGetInitials](#avatarsgetinitials) - Get User Initials
* [avatarsGetQR](#avatarsgetqr) - Get QR Code

## avatarsGetBrowser

You can use this endpoint to show different browser icons to your users. The code argument receives the browser code as it appears in your user /account/sessions endpoint. Use width, height and quality arguments to change the output settings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AvatarsGetBrowserRequest;
use \OpenAPI\OpenAPI\Models\Operations\AvatarsGetBrowserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AvatarsGetBrowserRequest();
    $request->code = 'ad';
    $request->height = 617636;
    $request->quality = 149675;
    $request->width = 612096;

    $requestSecurity = new AvatarsGetBrowserSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->avatars->avatarsGetBrowser($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## avatarsGetCreditCard

The credit card endpoint will return you the icon of the credit card provider you need. Use width, height and quality arguments to change the output settings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AvatarsGetCreditCardRequest;
use \OpenAPI\OpenAPI\Models\Operations\AvatarsGetCreditCardSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AvatarsGetCreditCardRequest();
    $request->code = 'dolor';
    $request->height = 616934;
    $request->quality = 386489;
    $request->width = 943749;

    $requestSecurity = new AvatarsGetCreditCardSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->avatars->avatarsGetCreditCard($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## avatarsGetFavicon

Use this endpoint to fetch the favorite icon (AKA favicon) of any remote website URL.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AvatarsGetFaviconRequest;
use \OpenAPI\OpenAPI\Models\Operations\AvatarsGetFaviconSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AvatarsGetFaviconRequest();
    $request->url = 'saepe';

    $requestSecurity = new AvatarsGetFaviconSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->avatars->avatarsGetFavicon($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## avatarsGetFlag

You can use this endpoint to show different country flags icons to your users. The code argument receives the 2 letter country code. Use width, height and quality arguments to change the output settings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AvatarsGetFlagRequest;
use \OpenAPI\OpenAPI\Models\Operations\AvatarsGetFlagSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AvatarsGetFlagRequest();
    $request->code = 'fuga';
    $request->height = 449950;
    $request->quality = 359508;
    $request->width = 613064;

    $requestSecurity = new AvatarsGetFlagSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->avatars->avatarsGetFlag($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## avatarsGetImage

Use this endpoint to fetch a remote image URL and crop it to any image size you want. This endpoint is very useful if you need to crop and display remote images in your app or in case you want to make sure a 3rd party image is properly served using a TLS protocol.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AvatarsGetImageRequest;
use \OpenAPI\OpenAPI\Models\Operations\AvatarsGetImageSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AvatarsGetImageRequest();
    $request->height = 437032;
    $request->url = 'saepe';
    $request->width = 697631;

    $requestSecurity = new AvatarsGetImageSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->avatars->avatarsGetImage($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## avatarsGetInitials

Use this endpoint to show your user initials avatar icon on your website or app. By default, this route will try to print your logged-in user name or email initials. You can also overwrite the user name if you pass the 'name' parameter. If no name is given and no user is logged, an empty avatar will be returned.

You can use the color and background params to change the avatar colors. By default, a random theme will be selected. The random theme will persist for the user's initials when reloading the same theme will always return for the same initials.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AvatarsGetInitialsRequest;
use \OpenAPI\OpenAPI\Models\Operations\AvatarsGetInitialsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AvatarsGetInitialsRequest();
    $request->background = 'architecto';
    $request->color = 'ipsa';
    $request->height = 969810;
    $request->name = 'Shaun Osinski';
    $request->width = 358152;

    $requestSecurity = new AvatarsGetInitialsSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->avatars->avatarsGetInitials($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## avatarsGetQR

Converts a given plain text to a QR code image. You can use the query parameters to change the size and style of the resulting image.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AvatarsGetQRRequest;
use \OpenAPI\OpenAPI\Models\Operations\AvatarsGetQRSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AvatarsGetQRRequest();
    $request->download = false;
    $request->margin = 128926;
    $request->size = 750686;
    $request->text = 'enim';

    $requestSecurity = new AvatarsGetQRSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->avatars->avatarsGetQR($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
