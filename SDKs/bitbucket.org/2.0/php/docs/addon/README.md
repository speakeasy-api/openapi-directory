# addon

## Overview

The addon resource is intended to use used by Bitbucket Cloud Connect
Apps, and only supports JWT authentication.


### Available Operations

* [deleteAddon](#deleteaddon) - Delete an app
* [deleteAddonLinkersLinkerKeyValues](#deleteaddonlinkerslinkerkeyvalues) - Delete all linker values
* [deleteAddonLinkersLinkerKeyValuesValueId](#deleteaddonlinkerslinkerkeyvaluesvalueid) - Delete a linker value
* [getAddonLinkers](#getaddonlinkers) - List linkers for an app
* [getAddonLinkersLinkerKey](#getaddonlinkerslinkerkey) - Get a linker for an app
* [getAddonLinkersLinkerKeyValues](#getaddonlinkerslinkerkeyvalues) - List linker values for a linker
* [getAddonLinkersLinkerKeyValuesValueId](#getaddonlinkerslinkerkeyvaluesvalueid) - Get a linker value
* [postAddonLinkersLinkerKeyValues](#postaddonlinkerslinkerkeyvalues) - Create a linker value
* [putAddon](#putaddon) - Update an installed app
* [putAddonLinkersLinkerKeyValues](#putaddonlinkerslinkerkeyvalues) - Update a linker value

## deleteAddon

Deletes the application for the user.

This endpoint is intended to be used by Bitbucket Connect apps
and only supports JWT authentication -- that is how Bitbucket
identifies the particular installation of the app. Developers
with applications registered in the "Develop Apps" section
of Bitbucket Marketplace need not use this endpoint as
updates for those applications can be sent out via the
UI of that section.

```
$ curl -X DELETE https://api.bitbucket.org/2.0/addon \
  -H "Authorization: JWT <JWT Token>"
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAddonSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new DeleteAddonSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->addon->deleteAddon($requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAddonLinkersLinkerKeyValues

Delete all [linker](/cloud/bitbucket/modules/linker/) values for the
specified linker of the authenticated application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAddonLinkersLinkerKeyValuesRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAddonLinkersLinkerKeyValuesSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAddonLinkersLinkerKeyValuesRequest();
    $request->linkerKey = 'corrupti';

    $requestSecurity = new DeleteAddonLinkersLinkerKeyValuesSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->addon->deleteAddonLinkersLinkerKeyValues($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAddonLinkersLinkerKeyValuesValueId

Delete a single [linker](/cloud/bitbucket/modules/linker/) value
of the authenticated application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAddonLinkersLinkerKeyValuesValueIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAddonLinkersLinkerKeyValuesValueIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAddonLinkersLinkerKeyValuesValueIdRequest();
    $request->linkerKey = 'provident';
    $request->valueId = 715190;

    $requestSecurity = new DeleteAddonLinkersLinkerKeyValuesValueIdSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->addon->deleteAddonLinkersLinkerKeyValuesValueId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAddonLinkers

Gets a list of all [linkers](/cloud/bitbucket/modules/linker/)
for the authenticated application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAddonLinkersSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetAddonLinkersSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->addon->getAddonLinkers($requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAddonLinkersLinkerKey

Gets a [linker](/cloud/bitbucket/modules/linker/) specified by `linker_key`
for the authenticated application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAddonLinkersLinkerKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAddonLinkersLinkerKeySecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAddonLinkersLinkerKeyRequest();
    $request->linkerKey = 'quibusdam';

    $requestSecurity = new GetAddonLinkersLinkerKeySecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->addon->getAddonLinkersLinkerKey($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAddonLinkersLinkerKeyValues

Gets a list of all [linker](/cloud/bitbucket/modules/linker/) values for the
specified linker of the authenticated application.

A linker value lets applications supply values to modify its regular expression.

The base regular expression must use a Bitbucket-specific match group `(?K)`
which will be translated to `([\w\-]+)`. A value must match this pattern.

[Read more about linker values](/cloud/bitbucket/modules/linker/#usingthebitbucketapitosupplyvalues)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAddonLinkersLinkerKeyValuesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAddonLinkersLinkerKeyValuesSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAddonLinkersLinkerKeyValuesRequest();
    $request->linkerKey = 'unde';

    $requestSecurity = new GetAddonLinkersLinkerKeyValuesSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->addon->getAddonLinkersLinkerKeyValues($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAddonLinkersLinkerKeyValuesValueId

Get a single [linker](/cloud/bitbucket/modules/linker/) value
of the authenticated application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAddonLinkersLinkerKeyValuesValueIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAddonLinkersLinkerKeyValuesValueIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAddonLinkersLinkerKeyValuesValueIdRequest();
    $request->linkerKey = 'nulla';
    $request->valueId = 544883;

    $requestSecurity = new GetAddonLinkersLinkerKeyValuesValueIdSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->addon->getAddonLinkersLinkerKeyValuesValueId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAddonLinkersLinkerKeyValues

Creates a [linker](/cloud/bitbucket/modules/linker/) value for the specified
linker of authenticated application.

A linker value lets applications supply values to modify its regular expression.

The base regular expression must use a Bitbucket-specific match group `(?K)`
which will be translated to `([\w\-]+)`. A value must match this pattern.

[Read more about linker values](/cloud/bitbucket/modules/linker/#usingthebitbucketapitosupplyvalues)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostAddonLinkersLinkerKeyValuesRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostAddonLinkersLinkerKeyValuesSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAddonLinkersLinkerKeyValuesRequest();
    $request->linkerKey = 'illum';

    $requestSecurity = new PostAddonLinkersLinkerKeyValuesSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->addon->postAddonLinkersLinkerKeyValues($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putAddon

Updates the application installation for the user.

This endpoint is intended to be used by Bitbucket Connect apps
and only supports JWT authentication -- that is how Bitbucket
identifies the particular installation of the app. Developers
with applications registered in the "Develop Apps" section
of Bitbucket need not use this endpoint as updates for those
applications can be sent out via the UI of that section.

Passing an empty body will update the installation using the
existing descriptor URL.

```
$ curl -X PUT https://api.bitbucket.org/2.0/addon \
  -H "Authorization: JWT <JWT Token>" \
  --header "Content-Type: application/json" \
  --data '{}'
```

The new `descriptor` for the installation can be also provided
in the body directly.

```
$ curl -X PUT https://api.bitbucket.org/2.0/addon \
  -H "Authorization: JWT <JWT Token>" \
  --header "Content-Type: application/json" \
  --data '{"descriptor": $NEW_DESCRIPTOR}'
```

In both these modes the URL of the descriptor cannot be changed. To
change the descriptor location and upgrade an installation
the request must be made exclusively with a `descriptor_url`.

 ```
$ curl -X PUT https://api.bitbucket.org/2.0/addon \
  -H "Authorization: JWT <JWT Token>" \
  --header "Content-Type: application/json" \
  --data '{"descriptor_url": $NEW_URL}'
```

The `descriptor_url` must exactly match the marketplace registration
that Atlassian has for the application. Contact your Atlassian
developer advocate to update this registration. Once the registration
has been updated you may call this resource for each installation.

Note that the scopes of the application cannot be increased
in the new descriptor nor reduced to none.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutAddonSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new PutAddonSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->addon->putAddon($requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putAddonLinkersLinkerKeyValues

Bulk update [linker](/cloud/bitbucket/modules/linker/) values for the specified
linker of the authenticated application.

A linker value lets applications supply values to modify its regular expression.

The base regular expression must use a Bitbucket-specific match group `(?K)`
which will be translated to `([\w\-]+)`. A value must match this pattern.

[Read more about linker values](/cloud/bitbucket/modules/linker/#usingthebitbucketapitosupplyvalues)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutAddonLinkersLinkerKeyValuesRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutAddonLinkersLinkerKeyValuesSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutAddonLinkersLinkerKeyValuesRequest();
    $request->linkerKey = 'vel';

    $requestSecurity = new PutAddonLinkersLinkerKeyValuesSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->addon->putAddonLinkersLinkerKeyValues($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
