# crash

### Available Operations

* [~~crashGroupsGet~~](#crashgroupsget) - Gets a specific group. :warning: **Deprecated**
* [~~crashGroupsGetStacktrace~~](#crashgroupsgetstacktrace) - Gets a stacktrace for a specific crash. :warning: **Deprecated**
* [~~crashGroupsList~~](#crashgroupslist) - Gets a list of crash groups and whether the list contains all available groups. :warning: **Deprecated**
* [~~crashGroupsUpdate~~](#crashgroupsupdate) - Updates a group. :warning: **Deprecated**
* [~~crashesDelete~~](#crashesdelete) - Delete a specific crash and related attachments and blobs for an app. :warning: **Deprecated**
* [~~crashesGet~~](#crashesget) - Gets a specific crash for an app. :warning: **Deprecated**
* [~~crashesGetAppCrashesInfo~~](#crashesgetappcrashesinfo) - Gets whether the application has any crashes. :warning: **Deprecated**
* [~~crashesGetAppVersions~~](#crashesgetappversions) - Gets a list of application versions. :warning: **Deprecated**
* [~~crashesGetCrashAttachmentLocation~~](#crashesgetcrashattachmentlocation) - Gets the URI location to download crash attachment. :warning: **Deprecated**
* [~~crashesGetCrashTextAttachmentContent~~](#crashesgetcrashtextattachmentcontent) - Gets content of the text attachment. :warning: **Deprecated**
* [~~crashesGetNativeCrash~~](#crashesgetnativecrash) - Gets the native log of a specific crash. :warning: **Deprecated**
* [~~crashesGetNativeCrashDownload~~](#crashesgetnativecrashdownload) - Gets the native log of a specific crash as a text attachment. :warning: **Deprecated**
* [~~crashesGetRawCrashLocation~~](#crashesgetrawcrashlocation) - Gets the URI location to download json of a specific crash. :warning: **Deprecated**
* [~~crashesGetStacktrace~~](#crashesgetstacktrace) - Gets a stacktrace for a specific crash. :warning: **Deprecated**
* [~~crashesList~~](#crasheslist) - Gets all crashes of a group. :warning: **Deprecated**
* [~~crashesListAttachments~~](#crasheslistattachments) - Gets all attachments for a specific crash. :warning: **Deprecated**
* [missingSymbolGroupsGet](#missingsymbolgroupsget) - Gets missing symbol crash group by its id
* [missingSymbolGroupsInfo](#missingsymbolgroupsinfo) - Gets application level statistics for all missing symbol groups
* [missingSymbolGroupsList](#missingsymbolgroupslist) - Gets top N (ordered by crash count) of crash groups by missing symbol
* [symbolUploadsComplete](#symboluploadscomplete) - Commits or aborts the symbol upload process for a new set of symbols for the specified application
* [symbolUploadsCreate](#symboluploadscreate) - Begins the symbol upload process for a new set of symbols for the specified application
* [symbolUploadsDelete](#symboluploadsdelete) - Deletes a symbol upload by id for the specified application
* [symbolUploadsGet](#symboluploadsget) - Gets a symbol upload by id for the specified application
* [symbolUploadsGetLocation](#symboluploadsgetlocation) - Gets the URL to download the symbol upload
* [symbolUploadsList](#symboluploadslist) - Gets a list of all uploads for the specified application
* [symbolsGet](#symbolsget) - Returns a particular symbol by id (uuid) for the provided application
* [symbolsGetLocation](#symbolsgetlocation) - Gets the URL to download the symbol
* [symbolsGetStatus](#symbolsgetstatus) - Returns a particular symbol by id (uuid) for the provided application
* [symbolsIgnore](#symbolsignore) - Marks a symbol by id (uuid) as ignored
* [symbolsList](#symbolslist) - Returns the list of all symbols for the provided application

## ~~crashGroupsGet~~

Gets a specific group.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CrashGroupsGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\CrashGroupsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CrashGroupsGetRequest();
    $request->appName = 'facere';
    $request->crashGroupId = 'fuga';
    $request->ownerName = 'praesentium';

    $requestSecurity = new CrashGroupsGetSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->crash->crashGroupsGet($request, $requestSecurity);

    if ($response->crashGroupsGet200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~crashGroupsGetStacktrace~~

Gets a stacktrace for a specific crash.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CrashGroupsGetStacktraceRequest;
use \OpenAPI\OpenAPI\Models\Operations\CrashGroupsGetStacktraceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CrashGroupsGetStacktraceRequest();
    $request->appName = 'mollitia';
    $request->crashGroupId = 'veniam';
    $request->groupingOnly = false;
    $request->ownerName = 'voluptatem';

    $requestSecurity = new CrashGroupsGetStacktraceSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->crash->crashGroupsGetStacktrace($request, $requestSecurity);

    if ($response->stacktrace !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~crashGroupsList~~

Gets a list of crash groups and whether the list contains all available groups.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CrashGroupsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\CrashGroupsListDollarOrderbyEnum;
use \OpenAPI\OpenAPI\Models\Operations\CrashGroupsListGroupStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\CrashGroupsListGroupTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CrashGroupsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CrashGroupsListRequest();
    $request->dollarOrderby = CrashGroupsListDollarOrderbyEnum::IMPACTED_USERS_ASC;
    $request->appName = 'repudiandae';
    $request->appVersion = 'quasi';
    $request->continuationToken = 'atque';
    $request->groupStatus = CrashGroupsListGroupStatusEnum::CLOSED;
    $request->groupTextSearch = 'asperiores';
    $request->groupType = CrashGroupsListGroupTypeEnum::GROUP_TYPE2;
    $request->lastOccurrenceFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-22T16:56:30.347Z');
    $request->lastOccurrenceTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-23T11:31:21.970Z');
    $request->ownerName = 'esse';

    $requestSecurity = new CrashGroupsListSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->crash->crashGroupsList($request, $requestSecurity);

    if ($response->crashGroupsList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~crashGroupsUpdate~~

Updates a group.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CrashGroupsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\CrashGroupsUpdateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CrashGroupsUpdateRequestBodyStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\CrashGroupsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CrashGroupsUpdateRequest();
    $request->requestBody = new CrashGroupsUpdateRequestBody();
    $request->requestBody->annotation = 'amet';
    $request->requestBody->status = CrashGroupsUpdateRequestBodyStatusEnum::IGNORED;
    $request->appName = 'ea';
    $request->crashGroupId = 'atque';
    $request->ownerName = 'error';

    $requestSecurity = new CrashGroupsUpdateSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->crash->crashGroupsUpdate($request, $requestSecurity);

    if ($response->crashGroupsUpdate200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~crashesDelete~~

Delete a specific crash and related attachments and blobs for an app.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CrashesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\CrashesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CrashesDeleteRequest();
    $request->appName = 'officiis';
    $request->crashGroupId = 'officiis';
    $request->crashId = 'accusamus';
    $request->ownerName = 'natus';
    $request->retentionDelete = false;

    $requestSecurity = new CrashesDeleteSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->crash->crashesDelete($request, $requestSecurity);

    if ($response->crashesDelete200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~crashesGet~~

Gets a specific crash for an app.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CrashesGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\CrashesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CrashesGetRequest();
    $request->appName = 'minima';
    $request->crashGroupId = 'aspernatur';
    $request->crashId = 'ex';
    $request->groupingOnly = false;
    $request->includeDetails = false;
    $request->includeLog = false;
    $request->includeReport = false;
    $request->includeStacktrace = false;
    $request->ownerName = 'maiores';

    $requestSecurity = new CrashesGetSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->crash->crashesGet($request, $requestSecurity);

    if ($response->crash !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~crashesGetAppCrashesInfo~~

Gets whether the application has any crashes.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CrashesGetAppCrashesInfoRequest;
use \OpenAPI\OpenAPI\Models\Operations\CrashesGetAppCrashesInfoSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CrashesGetAppCrashesInfoRequest();
    $request->appName = 'corrupti';
    $request->ownerName = 'at';

    $requestSecurity = new CrashesGetAppCrashesInfoSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->crash->crashesGetAppCrashesInfo($request, $requestSecurity);

    if ($response->crashesGetAppCrashesInfo200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~crashesGetAppVersions~~

Gets a list of application versions.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CrashesGetAppVersionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\CrashesGetAppVersionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CrashesGetAppVersionsRequest();
    $request->appName = 'error';
    $request->ownerName = 'blanditiis';

    $requestSecurity = new CrashesGetAppVersionsSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->crash->crashesGetAppVersions($request, $requestSecurity);

    if ($response->crashesGetAppVersions200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~crashesGetCrashAttachmentLocation~~

Gets the URI location to download crash attachment.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CrashesGetCrashAttachmentLocationRequest;
use \OpenAPI\OpenAPI\Models\Operations\CrashesGetCrashAttachmentLocationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CrashesGetCrashAttachmentLocationRequest();
    $request->appName = 'suscipit';
    $request->attachmentId = 'repudiandae';
    $request->crashId = 'atque';
    $request->ownerName = 'atque';

    $requestSecurity = new CrashesGetCrashAttachmentLocationSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->crash->crashesGetCrashAttachmentLocation($request, $requestSecurity);

    if ($response->crashesGetCrashAttachmentLocation200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~crashesGetCrashTextAttachmentContent~~

Gets content of the text attachment.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CrashesGetCrashTextAttachmentContentRequest;
use \OpenAPI\OpenAPI\Models\Operations\CrashesGetCrashTextAttachmentContentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CrashesGetCrashTextAttachmentContentRequest();
    $request->appName = 'sunt';
    $request->attachmentId = 'recusandae';
    $request->crashId = 'dolorum';
    $request->ownerName = 'repellendus';

    $requestSecurity = new CrashesGetCrashTextAttachmentContentSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->crash->crashesGetCrashTextAttachmentContent($request, $requestSecurity);

    if ($response->crashesGetCrashTextAttachmentContent200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~crashesGetNativeCrash~~

Gets the native log of a specific crash.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CrashesGetNativeCrashRequest;
use \OpenAPI\OpenAPI\Models\Operations\CrashesGetNativeCrashSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CrashesGetNativeCrashRequest();
    $request->appName = 'labore';
    $request->crashGroupId = 'reiciendis';
    $request->crashId = 'doloremque';
    $request->ownerName = 'repudiandae';

    $requestSecurity = new CrashesGetNativeCrashSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->crash->crashesGetNativeCrash($request, $requestSecurity);

    if ($response->crashesGetNativeCrash200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~crashesGetNativeCrashDownload~~

Gets the native log of a specific crash as a text attachment.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CrashesGetNativeCrashDownloadRequest;
use \OpenAPI\OpenAPI\Models\Operations\CrashesGetNativeCrashDownloadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CrashesGetNativeCrashDownloadRequest();
    $request->appName = 'dicta';
    $request->crashGroupId = 'accusantium';
    $request->crashId = 'beatae';
    $request->ownerName = 'dolores';

    $requestSecurity = new CrashesGetNativeCrashDownloadSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->crash->crashesGetNativeCrashDownload($request, $requestSecurity);

    if ($response->crashesGetNativeCrashDownload200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~crashesGetRawCrashLocation~~

Gets the URI location to download json of a specific crash.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CrashesGetRawCrashLocationRequest;
use \OpenAPI\OpenAPI\Models\Operations\CrashesGetRawCrashLocationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CrashesGetRawCrashLocationRequest();
    $request->appName = 'enim';
    $request->crashGroupId = 'laboriosam';
    $request->crashId = 'velit';
    $request->ownerName = 'a';

    $requestSecurity = new CrashesGetRawCrashLocationSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->crash->crashesGetRawCrashLocation($request, $requestSecurity);

    if ($response->crashesGetRawCrashLocation200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~crashesGetStacktrace~~

Gets a stacktrace for a specific crash.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CrashesGetStacktraceRequest;
use \OpenAPI\OpenAPI\Models\Operations\CrashesGetStacktraceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CrashesGetStacktraceRequest();
    $request->appName = 'molestias';
    $request->crashGroupId = 'magnam';
    $request->crashId = 'saepe';
    $request->groupingOnly = false;
    $request->ownerName = 'consequuntur';

    $requestSecurity = new CrashesGetStacktraceSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->crash->crashesGetStacktrace($request, $requestSecurity);

    if ($response->stacktrace !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~crashesList~~

Gets all crashes of a group.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CrashesListRequest;
use \OpenAPI\OpenAPI\Models\Operations\CrashesListErrorTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CrashesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CrashesListRequest();
    $request->appName = 'occaecati';
    $request->appVersion = 'officiis';
    $request->crashGroupId = 'perspiciatis';
    $request->dateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-06T02:44:18.773Z');
    $request->dateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-04T22:16:56.307Z');
    $request->errorType = CrashesListErrorTypeEnum::CRASHING_ERRORS;
    $request->includeLog = false;
    $request->includeReport = false;
    $request->ownerName = 'fugit';

    $requestSecurity = new CrashesListSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->crash->crashesList($request, $requestSecurity);

    if ($response->crashes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~crashesListAttachments~~

Gets all attachments for a specific crash.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CrashesListAttachmentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\CrashesListAttachmentsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CrashesListAttachmentsRequest();
    $request->appName = 'id';
    $request->crashId = 'quis';
    $request->ownerName = 'reprehenderit';

    $requestSecurity = new CrashesListAttachmentsSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->crash->crashesListAttachments($request, $requestSecurity);

    if ($response->crashesListAttachments200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## missingSymbolGroupsGet

Gets missing symbol crash group by its id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MissingSymbolGroupsGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\MissingSymbolGroupsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MissingSymbolGroupsGetRequest();
    $request->appName = 'error';
    $request->ownerName = 'illo';
    $request->symbolGroupId = 'corporis';

    $requestSecurity = new MissingSymbolGroupsGetSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->crash->missingSymbolGroupsGet($request, $requestSecurity);

    if ($response->missingSymbolGroupsGet200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## missingSymbolGroupsInfo

Gets application level statistics for all missing symbol groups

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MissingSymbolGroupsInfoRequest;
use \OpenAPI\OpenAPI\Models\Operations\MissingSymbolGroupsInfoSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MissingSymbolGroupsInfoRequest();
    $request->appName = 'quidem';
    $request->ownerName = 'eveniet';

    $requestSecurity = new MissingSymbolGroupsInfoSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->crash->missingSymbolGroupsInfo($request, $requestSecurity);

    if ($response->missingSymbolGroupsInfo200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## missingSymbolGroupsList

Gets top N (ordered by crash count) of crash groups by missing symbol

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MissingSymbolGroupsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\MissingSymbolGroupsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MissingSymbolGroupsListRequest();
    $request->appName = 'non';
    $request->ownerName = 'vero';
    $request->top = 39615;

    $requestSecurity = new MissingSymbolGroupsListSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->crash->missingSymbolGroupsList($request, $requestSecurity);

    if ($response->missingSymbolGroupsList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## symbolUploadsComplete

Commits or aborts the symbol upload process for a new set of symbols for the specified application

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SymbolUploadsCompleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\SymbolUploadsCompleteRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\SymbolUploadsCompleteRequestBodyStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\SymbolUploadsCompleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SymbolUploadsCompleteRequest();
    $request->requestBody = new SymbolUploadsCompleteRequestBody();
    $request->requestBody->status = SymbolUploadsCompleteRequestBodyStatusEnum::COMMITTED;
    $request->appName = 'ipsa';
    $request->ownerName = 'totam';
    $request->symbolUploadId = 'quae';

    $requestSecurity = new SymbolUploadsCompleteSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->crash->symbolUploadsComplete($request, $requestSecurity);

    if ($response->symbolUploadsComplete200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## symbolUploadsCreate

Begins the symbol upload process for a new set of symbols for the specified application

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SymbolUploadsCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\SymbolUploadsCreateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\SymbolUploadsCreateRequestBodySymbolTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\SymbolUploadsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SymbolUploadsCreateRequest();
    $request->requestBody = new SymbolUploadsCreateRequestBody();
    $request->requestBody->build = 'molestiae';
    $request->requestBody->clientCallback = 'eveniet';
    $request->requestBody->fileName = 'qui';
    $request->requestBody->symbolType = SymbolUploadsCreateRequestBodySymbolTypeEnum::ANDROID_PROGUARD;
    $request->requestBody->version = 'iure';
    $request->appName = 'necessitatibus';
    $request->ownerName = 'ratione';

    $requestSecurity = new SymbolUploadsCreateSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->crash->symbolUploadsCreate($request, $requestSecurity);

    if ($response->symbolUploadsCreate200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## symbolUploadsDelete

Deletes a symbol upload by id for the specified application

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SymbolUploadsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\SymbolUploadsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SymbolUploadsDeleteRequest();
    $request->appName = 'laborum';
    $request->ownerName = 'distinctio';
    $request->symbolUploadId = 'voluptatum';

    $requestSecurity = new SymbolUploadsDeleteSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->crash->symbolUploadsDelete($request, $requestSecurity);

    if ($response->symbolUploadsDelete200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## symbolUploadsGet

Gets a symbol upload by id for the specified application

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SymbolUploadsGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\SymbolUploadsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SymbolUploadsGetRequest();
    $request->appName = 'rem';
    $request->ownerName = 'aliquam';
    $request->symbolUploadId = 'ad';

    $requestSecurity = new SymbolUploadsGetSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->crash->symbolUploadsGet($request, $requestSecurity);

    if ($response->symbolUploadsGet200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## symbolUploadsGetLocation

Gets the URL to download the symbol upload

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SymbolUploadsGetLocationRequest;
use \OpenAPI\OpenAPI\Models\Operations\SymbolUploadsGetLocationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SymbolUploadsGetLocationRequest();
    $request->appName = 'repellat';
    $request->ownerName = 'alias';
    $request->symbolUploadId = 'corporis';

    $requestSecurity = new SymbolUploadsGetLocationSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->crash->symbolUploadsGetLocation($request, $requestSecurity);

    if ($response->symbolUploadsGetLocation200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## symbolUploadsList

Gets a list of all uploads for the specified application

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SymbolUploadsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\SymbolUploadsListStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\SymbolUploadsListSymbolTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\SymbolUploadsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SymbolUploadsListRequest();
    $request->appName = 'perspiciatis';
    $request->ownerName = 'nihil';
    $request->status = SymbolUploadsListStatusEnum::UPLOADED;
    $request->symbolType = SymbolUploadsListSymbolTypeEnum::APPLE;
    $request->top = 5189;

    $requestSecurity = new SymbolUploadsListSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->crash->symbolUploadsList($request, $requestSecurity);

    if ($response->symbolUploadsList200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## symbolsGet

Returns a particular symbol by id (uuid) for the provided application

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SymbolsGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\SymbolsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SymbolsGetRequest();
    $request->appName = 'maiores';
    $request->ownerName = 'reiciendis';
    $request->symbolId = 'dolores';

    $requestSecurity = new SymbolsGetSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->crash->symbolsGet($request, $requestSecurity);

    if ($response->symbolsGet200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## symbolsGetLocation

Gets the URL to download the symbol

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SymbolsGetLocationRequest;
use \OpenAPI\OpenAPI\Models\Operations\SymbolsGetLocationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SymbolsGetLocationRequest();
    $request->appName = 'id';
    $request->ownerName = 'minima';
    $request->symbolId = 'dolore';

    $requestSecurity = new SymbolsGetLocationSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->crash->symbolsGetLocation($request, $requestSecurity);

    if ($response->symbolsGetLocation200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## symbolsGetStatus

Returns a particular symbol by id (uuid) for the provided application

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SymbolsGetStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\SymbolsGetStatusSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SymbolsGetStatusRequest();
    $request->appName = 'dolorum';
    $request->ownerName = 'nesciunt';
    $request->symbolId = 'quae';

    $requestSecurity = new SymbolsGetStatusSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->crash->symbolsGetStatus($request, $requestSecurity);

    if ($response->symbolsGetStatus200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## symbolsIgnore

Marks a symbol by id (uuid) as ignored

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SymbolsIgnoreRequest;
use \OpenAPI\OpenAPI\Models\Operations\SymbolsIgnoreSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SymbolsIgnoreRequest();
    $request->appName = 'recusandae';
    $request->ownerName = 'omnis';
    $request->symbolId = 'quaerat';

    $requestSecurity = new SymbolsIgnoreSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->crash->symbolsIgnore($request, $requestSecurity);

    if ($response->symbolsIgnore200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## symbolsList

Returns the list of all symbols for the provided application

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SymbolsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\SymbolsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SymbolsListRequest();
    $request->appName = 'molestiae';
    $request->ownerName = 'ex';

    $requestSecurity = new SymbolsListSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->crash->symbolsList($request, $requestSecurity);

    if ($response->symbolsList200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
