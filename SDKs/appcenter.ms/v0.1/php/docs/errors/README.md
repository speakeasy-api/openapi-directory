# errors

### Available Operations

* [errorsAppBuildsList](#errorsappbuildslist) - List of app builds
* [errorsAvailableVersions](#errorsavailableversions) - Get all available versions in the time range.
* [errorsCountsPerDay](#errorscountsperday) - Count of crashes or errors by day in the time range based the selected versions. If SingleErrorTypeParameter is not provided, defaults to handlederror.
* [errorsDeleteError](#errorsdeleteerror) - Delete a specific error and related attachments and blobs for an app. Searchable data will not be deleted immediately and may take up to 30 days.
* [errorsErrorAttachmentLocation](#errorserrorattachmentlocation) - Error attachment location.
* [errorsErrorAttachmentText](#errorserrorattachmenttext) - Error attachment text.
* [errorsErrorAttachments](#errorserrorattachments) - List error attachments.
* [errorsErrorDownload](#errorserrordownload) - Download details for a specific error.
* [errorsErrorFreeDevicePercentages](#errorserrorfreedevicepercentages) - Percentage of error-free devices by day in the time range based on the selected versions. If SingleErrorTypeParameter is not provided, defaults to handlederror. API will return -1 if crash devices is greater than active devices
* [errorsErrorGroupsSearch](#errorserrorgroupssearch) - Error groups list based on search parameters
* [errorsErrorLocation](#errorserrorlocation) - Error location.
* [errorsErrorSearch](#errorserrorsearch) - Errors list based on search parameters
* [errorsErrorStackTrace](#errorserrorstacktrace) - Error Stacktrace details.
* [errorsGetErrorDetails](#errorsgeterrordetails) - Error details.
* [errorsGroupCountsPerDay](#errorsgroupcountsperday) - Count of errors by day in the time range of the selected error group with selected version
* [errorsGroupDetails](#errorsgroupdetails) - Error group details
* [errorsGroupErrorFreeDevicePercentages](#errorsgrouperrorfreedevicepercentages) - Percentage of error-free devices by day in the time range. Api will return -1 if crash devices is greater than active devices
* [errorsGroupErrorStackTrace](#errorsgrouperrorstacktrace) - Gets the stack trace for the error group.
* [errorsGroupList](#errorsgrouplist) - List of error groups
* [errorsGroupModelCounts](#errorsgroupmodelcounts) - Top models of the selected error group.
* [errorsGroupOperatingSystemCounts](#errorsgroupoperatingsystemcounts) - Top OSes of the selected error group.
* [errorsLatestErrorDetails](#errorslatesterrordetails) - Latest error details.
* [errorsListForGroup](#errorslistforgroup) - Get all errors for group
* [errorsListSessionLogs](#errorslistsessionlogs) - Get session logs by error ID
* [errorsUpdateState](#errorsupdatestate) - Update error group state
* [errorsGetRetentionSettings](#errorsgetretentionsettings) - gets the retention settings in days

## errorsAppBuildsList

List of app builds

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsAppBuildsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsAppBuildsListErrorTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsAppBuildsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ErrorsAppBuildsListRequest();
    $request->dollarTop = 408303;
    $request->appName = 'quidem';
    $request->end = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-18T14:54:26.943Z');
    $request->errorType = ErrorsAppBuildsListErrorTypeEnum::HANDLED_ERROR;
    $request->ownerName = 'perspiciatis';
    $request->start = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-04T19:37:52.532Z');
    $request->version = 'a';

    $requestSecurity = new ErrorsAppBuildsListSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->errors->errorsAppBuildsList($request, $requestSecurity);

    if ($response->errorsAppBuildsList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## errorsAvailableVersions

Get all available versions in the time range.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsAvailableVersionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsAvailableVersionsDollarInlinecountEnum;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsAvailableVersionsErrorTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsAvailableVersionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ErrorsAvailableVersionsRequest();
    $request->dollarFilter = 'voluptate';
    $request->dollarInlinecount = ErrorsAvailableVersionsDollarInlinecountEnum::ALLPAGES;
    $request->dollarSkip = 600193;
    $request->dollarTop = 897543;
    $request->appName = 'animi';
    $request->end = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-18T12:30:52.334Z');
    $request->errorType = ErrorsAvailableVersionsErrorTypeEnum::UNHANDLED_ERROR;
    $request->ownerName = 'est';
    $request->start = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-01T11:22:51.073Z');

    $requestSecurity = new ErrorsAvailableVersionsSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->errors->errorsAvailableVersions($request, $requestSecurity);

    if ($response->errorsAvailableVersions200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## errorsCountsPerDay

Count of crashes or errors by day in the time range based the selected versions. If SingleErrorTypeParameter is not provided, defaults to handlederror.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsCountsPerDayRequest;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsCountsPerDayErrorTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsCountsPerDaySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ErrorsCountsPerDayRequest();
    $request->appBuild = 'labore';
    $request->appName = 'veritatis';
    $request->end = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-20T16:11:36.555Z');
    $request->errorType = ErrorsCountsPerDayErrorTypeEnum::UNHANDLED_ERROR;
    $request->ownerName = 'inventore';
    $request->start = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-05T11:07:40.496Z');
    $request->version = 'qui';

    $requestSecurity = new ErrorsCountsPerDaySecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->errors->errorsCountsPerDay($request, $requestSecurity);

    if ($response->errorsCountsPerDay200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## errorsDeleteError

Delete a specific error and related attachments and blobs for an app. Searchable data will not be deleted immediately and may take up to 30 days.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsDeleteErrorRequest;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsDeleteErrorSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ErrorsDeleteErrorRequest();
    $request->appName = 'iste';
    $request->errorGroupId = 'ex';
    $request->errorId = 'nemo';
    $request->ownerName = 'soluta';

    $requestSecurity = new ErrorsDeleteErrorSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->errors->errorsDeleteError($request, $requestSecurity);

    if ($response->errorsDeleteError200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## errorsErrorAttachmentLocation

Error attachment location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsErrorAttachmentLocationRequest;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsErrorAttachmentLocationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ErrorsErrorAttachmentLocationRequest();
    $request->appName = 'libero';
    $request->attachmentId = 'rem';
    $request->errorId = 'dolorum';
    $request->ownerName = 'odio';

    $requestSecurity = new ErrorsErrorAttachmentLocationSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->errors->errorsErrorAttachmentLocation($request, $requestSecurity);

    if ($response->errorsErrorAttachmentLocation200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## errorsErrorAttachmentText

Error attachment text.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsErrorAttachmentTextRequest;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsErrorAttachmentTextSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ErrorsErrorAttachmentTextRequest();
    $request->appName = 'fugit';
    $request->attachmentId = 'alias';
    $request->errorId = 'magni';
    $request->ownerName = 'vel';

    $requestSecurity = new ErrorsErrorAttachmentTextSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->errors->errorsErrorAttachmentText($request, $requestSecurity);

    if ($response->errorsErrorAttachmentText200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## errorsErrorAttachments

List error attachments.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsErrorAttachmentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsErrorAttachmentsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ErrorsErrorAttachmentsRequest();
    $request->appName = 'quae';
    $request->errorId = 'quae';
    $request->ownerName = 'modi';

    $requestSecurity = new ErrorsErrorAttachmentsSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->errors->errorsErrorAttachments($request, $requestSecurity);

    if ($response->errorsErrorAttachments200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## errorsErrorDownload

Download details for a specific error.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsErrorDownloadRequest;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsErrorDownloadFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsErrorDownloadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ErrorsErrorDownloadRequest();
    $request->appName = 'neque';
    $request->errorGroupId = 'exercitationem';
    $request->errorId = 'itaque';
    $request->format = ErrorsErrorDownloadFormatEnum::JSON;
    $request->ownerName = 'ipsum';

    $requestSecurity = new ErrorsErrorDownloadSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->errors->errorsErrorDownload($request, $requestSecurity);

    if ($response->errorsErrorDownload200ApplicationJSONFileObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## errorsErrorFreeDevicePercentages

Percentage of error-free devices by day in the time range based on the selected versions. If SingleErrorTypeParameter is not provided, defaults to handlederror. API will return -1 if crash devices is greater than active devices

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsErrorFreeDevicePercentagesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsErrorFreeDevicePercentagesErrorTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsErrorFreeDevicePercentagesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ErrorsErrorFreeDevicePercentagesRequest();
    $request->appBuild = 'unde';
    $request->appName = 'nulla';
    $request->end = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-24T21:18:28.969Z');
    $request->errorType = ErrorsErrorFreeDevicePercentagesErrorTypeEnum::UNHANDLED_ERROR;
    $request->ownerName = 'quia';
    $request->start = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-24T21:57:47.411Z');
    $request->versions = [
        'dicta',
        'id',
        'libero',
    ];

    $requestSecurity = new ErrorsErrorFreeDevicePercentagesSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->errors->errorsErrorFreeDevicePercentages($request, $requestSecurity);

    if ($response->errorsErrorFreeDevicePercentages200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## errorsErrorGroupsSearch

Error groups list based on search parameters

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsErrorGroupsSearchRequest;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsErrorGroupsSearchOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsErrorGroupsSearchSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsErrorGroupsSearchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ErrorsErrorGroupsSearchRequest();
    $request->dollarSkip = 854460;
    $request->dollarTop = 637462;
    $request->appName = 'quos';
    $request->filter = 'placeat';
    $request->order = ErrorsErrorGroupsSearchOrderEnum::DESC;
    $request->ownerName = 'iusto';
    $request->q = 'ipsa';
    $request->sort = ErrorsErrorGroupsSearchSortEnum::LAST_OCCURRENCE;

    $requestSecurity = new ErrorsErrorGroupsSearchSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->errors->errorsErrorGroupsSearch($request, $requestSecurity);

    if ($response->errorsErrorGroupsSearch200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## errorsErrorLocation

Error location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsErrorLocationRequest;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsErrorLocationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ErrorsErrorLocationRequest();
    $request->appName = 'inventore';
    $request->errorGroupId = 'aperiam';
    $request->errorId = 'totam';
    $request->ownerName = 'dolore';

    $requestSecurity = new ErrorsErrorLocationSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->errors->errorsErrorLocation($request, $requestSecurity);

    if ($response->errorsErrorLocation200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## errorsErrorSearch

Errors list based on search parameters

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsErrorSearchRequest;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsErrorSearchOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsErrorSearchSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsErrorSearchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ErrorsErrorSearchRequest();
    $request->dollarSkip = 755106;
    $request->dollarTop = 715053;
    $request->appName = 'voluptatem';
    $request->filter = 'autem';
    $request->order = ErrorsErrorSearchOrderEnum::DESC;
    $request->ownerName = 'dolores';
    $request->q = 'assumenda';
    $request->sort = ErrorsErrorSearchSortEnum::ERROR_GROUP_ID;

    $requestSecurity = new ErrorsErrorSearchSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->errors->errorsErrorSearch($request, $requestSecurity);

    if ($response->errorsErrorSearch200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## errorsErrorStackTrace

Error Stacktrace details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsErrorStackTraceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsErrorStackTraceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ErrorsErrorStackTraceRequest();
    $request->appName = 'est';
    $request->errorGroupId = 'facere';
    $request->errorId = 'corrupti';
    $request->ownerName = 'molestiae';

    $requestSecurity = new ErrorsErrorStackTraceSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->errors->errorsErrorStackTrace($request, $requestSecurity);

    if ($response->diagnosticsStackTrace !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## errorsGetErrorDetails

Error details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsGetErrorDetailsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsGetErrorDetailsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ErrorsGetErrorDetailsRequest();
    $request->appName = 'provident';
    $request->errorGroupId = 'accusamus';
    $request->errorId = 'necessitatibus';
    $request->ownerName = 'tempore';

    $requestSecurity = new ErrorsGetErrorDetailsSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->errors->errorsGetErrorDetails($request, $requestSecurity);

    if ($response->errorsGetErrorDetails200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## errorsGroupCountsPerDay

Count of errors by day in the time range of the selected error group with selected version

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsGroupCountsPerDayRequest;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsGroupCountsPerDaySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ErrorsGroupCountsPerDayRequest();
    $request->appName = 'sint';
    $request->end = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-31T00:51:48.447Z');
    $request->errorGroupId = 'ipsam';
    $request->ownerName = 'rerum';
    $request->start = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-15T05:43:32.945Z');
    $request->version = 'officiis';

    $requestSecurity = new ErrorsGroupCountsPerDaySecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->errors->errorsGroupCountsPerDay($request, $requestSecurity);

    if ($response->errorsGroupCountsPerDay200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## errorsGroupDetails

Error group details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsGroupDetailsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsGroupDetailsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ErrorsGroupDetailsRequest();
    $request->appName = 'voluptatibus';
    $request->errorGroupId = 'cum';
    $request->ownerName = 'at';

    $requestSecurity = new ErrorsGroupDetailsSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->errors->errorsGroupDetails($request, $requestSecurity);

    if ($response->errorsGroupDetails200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## errorsGroupErrorFreeDevicePercentages

Percentage of error-free devices by day in the time range. Api will return -1 if crash devices is greater than active devices

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsGroupErrorFreeDevicePercentagesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsGroupErrorFreeDevicePercentagesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ErrorsGroupErrorFreeDevicePercentagesRequest();
    $request->appName = 'alias';
    $request->end = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-22T15:10:37.825Z');
    $request->errorGroupId = 'fuga';
    $request->ownerName = 'repudiandae';
    $request->start = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-16T16:24:27.042Z');

    $requestSecurity = new ErrorsGroupErrorFreeDevicePercentagesSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->errors->errorsGroupErrorFreeDevicePercentages($request, $requestSecurity);

    if ($response->errorsGroupErrorFreeDevicePercentages200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## errorsGroupErrorStackTrace

Gets the stack trace for the error group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsGroupErrorStackTraceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsGroupErrorStackTraceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ErrorsGroupErrorStackTraceRequest();
    $request->appName = 'officiis';
    $request->errorGroupId = 'eos';
    $request->ownerName = 'quibusdam';

    $requestSecurity = new ErrorsGroupErrorStackTraceSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->errors->errorsGroupErrorStackTrace($request, $requestSecurity);

    if ($response->diagnosticsStackTrace !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## errorsGroupList

List of error groups

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsGroupListRequest;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsGroupListErrorTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsGroupListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ErrorsGroupListRequest();
    $request->dollarOrderby = 'odio';
    $request->dollarTop = 510128;
    $request->appBuild = 'odit';
    $request->appName = 'explicabo';
    $request->end = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-19T03:53:46.149Z');
    $request->errorType = ErrorsGroupListErrorTypeEnum::HANDLED_ERROR;
    $request->groupState = 'adipisci';
    $request->ownerName = 'recusandae';
    $request->start = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-08T12:41:53.360Z');
    $request->version = 'quidem';

    $requestSecurity = new ErrorsGroupListSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->errors->errorsGroupList($request, $requestSecurity);

    if ($response->errorsGroupList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## errorsGroupModelCounts

Top models of the selected error group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsGroupModelCountsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsGroupModelCountsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ErrorsGroupModelCountsRequest();
    $request->dollarTop = 339631;
    $request->appName = 'beatae';
    $request->errorGroupId = 'unde';
    $request->ownerName = 'molestiae';

    $requestSecurity = new ErrorsGroupModelCountsSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->errors->errorsGroupModelCounts($request, $requestSecurity);

    if ($response->errorsGroupModelCounts200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## errorsGroupOperatingSystemCounts

Top OSes of the selected error group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsGroupOperatingSystemCountsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsGroupOperatingSystemCountsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ErrorsGroupOperatingSystemCountsRequest();
    $request->dollarTop = 963198;
    $request->appName = 'cupiditate';
    $request->errorGroupId = 'fugit';
    $request->ownerName = 'numquam';

    $requestSecurity = new ErrorsGroupOperatingSystemCountsSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->errors->errorsGroupOperatingSystemCounts($request, $requestSecurity);

    if ($response->errorsGroupOperatingSystemCounts200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## errorsLatestErrorDetails

Latest error details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsLatestErrorDetailsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsLatestErrorDetailsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ErrorsLatestErrorDetailsRequest();
    $request->appName = 'numquam';
    $request->errorGroupId = 'nesciunt';
    $request->ownerName = 'at';

    $requestSecurity = new ErrorsLatestErrorDetailsSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->errors->errorsLatestErrorDetails($request, $requestSecurity);

    if ($response->errorsLatestErrorDetails200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## errorsListForGroup

Get all errors for group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsListForGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsListForGroupSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ErrorsListForGroupRequest();
    $request->dollarTop = 637856;
    $request->appName = 'dignissimos';
    $request->end = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-04-21T15:18:08.742Z');
    $request->errorGroupId = 'corporis';
    $request->model = 'qui';
    $request->os = 'expedita';
    $request->ownerName = 'voluptatum';
    $request->start = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-07T19:45:21.246Z');

    $requestSecurity = new ErrorsListForGroupSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->errors->errorsListForGroup($request, $requestSecurity);

    if ($response->errorsListForGroup200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## errorsListSessionLogs

Get session logs by error ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsListSessionLogsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsListSessionLogsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ErrorsListSessionLogsRequest();
    $request->appName = 'placeat';
    $request->date = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-18T12:19:42.762Z');
    $request->errorId = 'in';
    $request->ownerName = 'minus';

    $requestSecurity = new ErrorsListSessionLogsSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->errors->errorsListSessionLogs($request, $requestSecurity);

    if ($response->errorsListSessionLogs200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## errorsUpdateState

Update error group state

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsUpdateStateRequest;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsUpdateStateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsUpdateStateRequestBodyStateEnum;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsUpdateStateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ErrorsUpdateStateRequest();
    $request->requestBody = new ErrorsUpdateStateRequestBody();
    $request->requestBody->annotation = 'eum';
    $request->requestBody->state = ErrorsUpdateStateRequestBodyStateEnum::OPEN;
    $request->appName = 'corporis';
    $request->errorGroupId = 'magnam';
    $request->ownerName = 'voluptates';

    $requestSecurity = new ErrorsUpdateStateSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->errors->errorsUpdateState($request, $requestSecurity);

    if ($response->errorsUpdateState200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## errorsGetRetentionSettings

gets the retention settings in days

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsGetRetentionSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ErrorsGetRetentionSettingsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ErrorsGetRetentionSettingsRequest();
    $request->appName = 'maiores';
    $request->ownerName = 'tempore';

    $requestSecurity = new ErrorsGetRetentionSettingsSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->errors->errorsGetRetentionSettings($request, $requestSecurity);

    if ($response->errorsGetRetentionSettings200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
