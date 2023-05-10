# analytics

### Available Operations

* [analyticsAudienceNameExists](#analyticsaudiencenameexists) - Returns whether audience definition exists.
* [~~analyticsCrashCounts~~](#analyticscrashcounts) - Available for UWP apps only. :warning: **Deprecated**
* [~~analyticsCrashFreeDevicePercentages~~](#analyticscrashfreedevicepercentages) - Percentage of crash-free device by day in the time range based on the selected versions. Api will return -1 if crash devices is greater than active devices. :warning: **Deprecated**
* [~~analyticsCrashGroupCounts~~](#analyticscrashgroupcounts) - Available for UWP apps only. :warning: **Deprecated**
* [~~analyticsCrashGroupModelCounts~~](#analyticscrashgroupmodelcounts) - Available for UWP apps only. :warning: **Deprecated**
* [~~analyticsCrashGroupOperatingSystemCounts~~](#analyticscrashgroupoperatingsystemcounts) - Available for UWP apps only. :warning: **Deprecated**
* [~~analyticsCrashGroupTotals~~](#analyticscrashgrouptotals) - Available for UWP apps only. :warning: **Deprecated**
* [analyticsCrashGroupsTotals](#analyticscrashgroupstotals) - Overall crashes and affected users count of the selected crash groups with selected versions.
* [analyticsCreateOrUpdateAudience](#analyticscreateorupdateaudience) - Creates or updates audience definition.
* [analyticsDeleteAudience](#analyticsdeleteaudience) - Deletes audience definition.
* [analyticsDeviceCounts](#analyticsdevicecounts) - Count of active devices by interval in the time range.
* [analyticsDistributionReleaseCounts](#analyticsdistributionreleasecounts) - Count of total downloads for the provided distribution releases.
* [analyticsEventCount](#analyticseventcount) - Count of events by interval in the time range.
* [analyticsEventDeviceCount](#analyticseventdevicecount) - Count of devices for an event by interval in the time range.
* [analyticsEventPerDeviceCount](#analyticseventperdevicecount) - Count of events per device by interval in the time range.
* [analyticsEventPerSessionCount](#analyticseventpersessioncount) - Count of events per session by interval in the time range.
* [analyticsEventProperties](#analyticseventproperties) - Event properties.
* [analyticsEventPropertyCounts](#analyticseventpropertycounts) - Event properties value counts during the time range in descending order.
* [analyticsEvents](#analyticsevents) - Count of active events in the time range ordered by event.
* [analyticsEventsDelete](#analyticseventsdelete) - Delete the set of Events with the specified event names.
* [analyticsEventsDeleteLogs](#analyticseventsdeletelogs) - Delete the set of Events with the specified event names.
* [analyticsGenericLogFlow](#analyticsgenericlogflow) - Logs received between the specified start time and the current time. The API will return a maximum of 100 logs per call.
* [analyticsGetAudience](#analyticsgetaudience) - Gets audience definition.
* [analyticsLanguageCounts](#analyticslanguagecounts) - Languages in the time range.
* [analyticsListAudiences](#analyticslistaudiences) - Get list of audiences.
* [analyticsListCustomProperties](#analyticslistcustomproperties) - Get list of custom properties.
* [analyticsListDeviceProperties](#analyticslistdeviceproperties) - Get list of device properties.
* [analyticsListDevicePropertyValues](#analyticslistdevicepropertyvalues) - Get list of device property values.
* [analyticsLogFlow](#analyticslogflow) - Logs received between the specified start time and the current time. The API will return a maximum of 100 logs per call.
* [analyticsModelCounts](#analyticsmodelcounts) - Models in the time range.
* [analyticsOperatingSystemCounts](#analyticsoperatingsystemcounts) - OSes in the time range.
* [analyticsPerDeviceCounts](#analyticsperdevicecounts) - Count of sessions per device in the time range.
* [analyticsPlaceCounts](#analyticsplacecounts) - Places in the time range.
* [analyticsSessionCounts](#analyticssessioncounts) - Count of sessions in the time range.
* [analyticsSessionDurationsDistribution](#analyticssessiondurationsdistribution) - Gets session duration.
* [analyticsTestAudience](#analyticstestaudience) - Tests audience definition.
* [analyticsVersions](#analyticsversions) - Count of active versions in the time range ordered by version.
* [appBlockLogs](#appblocklogs) - **Warning, this operation is not reversible.** 

A successful call to this API will permanently stop ingesting any logs received via SDK by app_id, and cannot be restored. We advise caution when using this API, it is designed to permanently disable an app_id.

* [crashesListSessionLogs](#crasheslistsessionlogs) - Get session logs by crash ID
* [devicesBlockLogs](#devicesblocklogs) - **Warning, this operation is not reversible.**

 A successful call to this API will permanently stop ingesting any logs received via SDK for the given installation ID, and cannot be restored. We advise caution when using this API, it is designed to permanently disable collection from a specific installation of the app on a device, usually following the request from a user.


## analyticsAudienceNameExists

Returns whether audience definition exists.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsAudienceNameExistsRequest;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsAudienceNameExistsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsAudienceNameExistsRequest();
    $request->appName = 'maxime';
    $request->audienceName = 'pariatur';
    $request->ownerName = 'soluta';

    $requestSecurity = new AnalyticsAudienceNameExistsSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->analytics->analyticsAudienceNameExists($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~analyticsCrashCounts~~

Count of crashes by day in the time range based the selected versions. Available for UWP apps only.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsCrashCountsRequest;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsCrashCountsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsCrashCountsRequest();
    $request->appName = 'dicta';
    $request->end = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-19T07:31:04.219Z');
    $request->ownerName = 'incidunt';
    $request->start = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-29T03:47:52.981Z');
    $request->versions = [
        'facilis',
        'aliquid',
        'quam',
    ];

    $requestSecurity = new AnalyticsCrashCountsSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->analytics->analyticsCrashCounts($request, $requestSecurity);

    if ($response->analyticsCrashCounts200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~analyticsCrashFreeDevicePercentages~~

Percentage of crash-free device by day in the time range based on the selected versions. Api will return -1 if crash devices is greater than active devices.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsCrashFreeDevicePercentagesRequest;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsCrashFreeDevicePercentagesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsCrashFreeDevicePercentagesRequest();
    $request->appName = 'molestias';
    $request->end = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-14T07:24:20.121Z');
    $request->ownerName = 'neque';
    $request->start = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-01T18:57:36.196Z');
    $request->version = 'odio';

    $requestSecurity = new AnalyticsCrashFreeDevicePercentagesSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->analytics->analyticsCrashFreeDevicePercentages($request, $requestSecurity);

    if ($response->analyticsCrashFreeDevicePercentages200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~analyticsCrashGroupCounts~~

Count of crashes by day in the time range of the selected crash group with selected version. Available for UWP apps only.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsCrashGroupCountsRequest;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsCrashGroupCountsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsCrashGroupCountsRequest();
    $request->appName = 'sunt';
    $request->crashGroupId = 'ullam';
    $request->end = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-02-13T11:37:55.892Z');
    $request->ownerName = 'voluptatem';
    $request->start = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-10-05T00:59:28.911Z');
    $request->version = 'nobis';

    $requestSecurity = new AnalyticsCrashGroupCountsSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->analytics->analyticsCrashGroupCounts($request, $requestSecurity);

    if ($response->analyticsCrashGroupCounts200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~analyticsCrashGroupModelCounts~~

Top models of the selected crash group with selected version. Available for UWP apps only.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsCrashGroupModelCountsRequest;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsCrashGroupModelCountsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsCrashGroupModelCountsRequest();
    $request->dollarTop = 92596;
    $request->appName = 'saepe';
    $request->crashGroupId = 'ipsum';
    $request->ownerName = 'veritatis';
    $request->version = 'nobis';

    $requestSecurity = new AnalyticsCrashGroupModelCountsSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->analytics->analyticsCrashGroupModelCounts($request, $requestSecurity);

    if ($response->analyticsCrashGroupModelCounts200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~analyticsCrashGroupOperatingSystemCounts~~

Top OSes of the selected crash group with selected version. Available for UWP apps only.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsCrashGroupOperatingSystemCountsRequest;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsCrashGroupOperatingSystemCountsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsCrashGroupOperatingSystemCountsRequest();
    $request->dollarTop = 552193;
    $request->appName = 'tempore';
    $request->crashGroupId = 'cupiditate';
    $request->ownerName = 'aperiam';
    $request->version = 'delectus';

    $requestSecurity = new AnalyticsCrashGroupOperatingSystemCountsSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->analytics->analyticsCrashGroupOperatingSystemCounts($request, $requestSecurity);

    if ($response->analyticsCrashGroupOperatingSystemCounts200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~analyticsCrashGroupTotals~~

Overall crashes and affected users count of the selected crash group with selected version. Available for UWP apps only.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsCrashGroupTotalsRequest;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsCrashGroupTotalsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsCrashGroupTotalsRequest();
    $request->appName = 'dolorem';
    $request->crashGroupId = 'dolore';
    $request->ownerName = 'labore';
    $request->version = 'adipisci';

    $requestSecurity = new AnalyticsCrashGroupTotalsSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->analytics->analyticsCrashGroupTotals($request, $requestSecurity);

    if ($response->analyticsCrashGroupTotals200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsCrashGroupsTotals

Overall crashes and affected users count of the selected crash groups with selected versions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsCrashGroupsTotalsRequest;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsCrashGroupsTotalsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsCrashGroupsTotalsRequestBodyCrashGroups;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsCrashGroupsTotalsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsCrashGroupsTotalsRequest();
    $request->requestBody = new AnalyticsCrashGroupsTotalsRequestBody();
    $request->requestBody->crashGroups = [
        new AnalyticsCrashGroupsTotalsRequestBodyCrashGroups(),
        new AnalyticsCrashGroupsTotalsRequestBodyCrashGroups(),
        new AnalyticsCrashGroupsTotalsRequestBodyCrashGroups(),
    ];
    $request->appName = 'architecto';
    $request->ownerName = 'quae';

    $requestSecurity = new AnalyticsCrashGroupsTotalsSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->analytics->analyticsCrashGroupsTotals($request, $requestSecurity);

    if ($response->analyticsCrashGroupsTotals200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsCreateOrUpdateAudience

Creates or updates audience definition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsCreateOrUpdateAudienceRequest;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsCreateOrUpdateAudienceRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsCreateOrUpdateAudienceRequestBodyCustomPropertiesEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsCreateOrUpdateAudienceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsCreateOrUpdateAudienceRequest();
    $request->requestBody = new AnalyticsCreateOrUpdateAudienceRequestBody();
    $request->requestBody->customProperties = [
        'quas' => AnalyticsCreateOrUpdateAudienceRequestBodyCustomPropertiesEnum::DATE_TIME,
    ];
    $request->requestBody->definition = 'consequatur';
    $request->requestBody->description = 'est';
    $request->requestBody->enabled = false;
    $request->appName = 'repellendus';
    $request->audienceName = 'porro';
    $request->ownerName = 'doloribus';

    $requestSecurity = new AnalyticsCreateOrUpdateAudienceSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->analytics->analyticsCreateOrUpdateAudience($request, $requestSecurity);

    if ($response->analyticsCreateOrUpdateAudience200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsDeleteAudience

Deletes audience definition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsDeleteAudienceRequest;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsDeleteAudienceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsDeleteAudienceRequest();
    $request->appName = 'ut';
    $request->audienceName = 'facilis';
    $request->ownerName = 'cupiditate';

    $requestSecurity = new AnalyticsDeleteAudienceSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->analytics->analyticsDeleteAudience($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsDeviceCounts

Count of active devices by interval in the time range.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsDeviceCountsRequest;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsDeviceCountsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsDeviceCountsRequest();
    $request->appBuild = 'qui';
    $request->appName = 'quae';
    $request->end = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-11T11:48:15.910Z');
    $request->ownerName = 'occaecati';
    $request->start = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-08-21T15:23:31.740Z');
    $request->versions = [
        'omnis',
        'quis',
        'ipsum',
        'delectus',
    ];

    $requestSecurity = new AnalyticsDeviceCountsSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->analytics->analyticsDeviceCounts($request, $requestSecurity);

    if ($response->analyticsDeviceCounts200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsDistributionReleaseCounts

Count of total downloads for the provided distribution releases.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsDistributionReleaseCountsRequest;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsDistributionReleaseCountsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsDistributionReleaseCountsRequestBodyReleases;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsDistributionReleaseCountsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsDistributionReleaseCountsRequest();
    $request->requestBody = new AnalyticsDistributionReleaseCountsRequestBody();
    $request->requestBody->releases = [
        new AnalyticsDistributionReleaseCountsRequestBodyReleases(),
        new AnalyticsDistributionReleaseCountsRequestBodyReleases(),
    ];
    $request->appName = 'consectetur';
    $request->ownerName = 'vero';

    $requestSecurity = new AnalyticsDistributionReleaseCountsSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->analytics->analyticsDistributionReleaseCounts($request, $requestSecurity);

    if ($response->analyticsDistributionReleaseCounts200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsEventCount

Count of events by interval in the time range.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsEventCountRequest;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsEventCountSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsEventCountRequest();
    $request->appName = 'tenetur';
    $request->end = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-22T09:31:52.637Z');
    $request->eventName = 'distinctio';
    $request->ownerName = 'quod';
    $request->start = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-15T21:16:33.535Z');
    $request->versions = [
        'vero',
        'ducimus',
        'dolore',
    ];

    $requestSecurity = new AnalyticsEventCountSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->analytics->analyticsEventCount($request, $requestSecurity);

    if ($response->analyticsEventCount200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsEventDeviceCount

Count of devices for an event by interval in the time range.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsEventDeviceCountRequest;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsEventDeviceCountSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsEventDeviceCountRequest();
    $request->appName = 'quibusdam';
    $request->end = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-02T04:41:10.492Z');
    $request->eventName = 'natus';
    $request->ownerName = 'impedit';
    $request->start = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-10T09:29:38.619Z');
    $request->versions = [
        'nulla',
        'fugit',
    ];

    $requestSecurity = new AnalyticsEventDeviceCountSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->analytics->analyticsEventDeviceCount($request, $requestSecurity);

    if ($response->analyticsEventDeviceCount200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsEventPerDeviceCount

Count of events per device by interval in the time range.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsEventPerDeviceCountRequest;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsEventPerDeviceCountSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsEventPerDeviceCountRequest();
    $request->appName = 'porro';
    $request->end = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-01-18T09:21:05.997Z');
    $request->eventName = 'iusto';
    $request->ownerName = 'eligendi';
    $request->start = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-30T12:32:17.948Z');
    $request->versions = [
        'tempora',
        'ipsam',
        'ea',
    ];

    $requestSecurity = new AnalyticsEventPerDeviceCountSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->analytics->analyticsEventPerDeviceCount($request, $requestSecurity);

    if ($response->analyticsEventPerDeviceCount200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsEventPerSessionCount

Count of events per session by interval in the time range.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsEventPerSessionCountRequest;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsEventPerSessionCountSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsEventPerSessionCountRequest();
    $request->appName = 'aspernatur';
    $request->end = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-06T22:14:54.933Z');
    $request->eventName = 'magnam';
    $request->ownerName = 'ratione';
    $request->start = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-28T08:50:44.084Z');
    $request->versions = [
        'dolor',
    ];

    $requestSecurity = new AnalyticsEventPerSessionCountSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->analytics->analyticsEventPerSessionCount($request, $requestSecurity);

    if ($response->analyticsEventPerSessionCount200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsEventProperties

Event properties.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsEventPropertiesRequest;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsEventPropertiesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsEventPropertiesRequest();
    $request->appName = 'maiores';
    $request->eventName = 'quasi';
    $request->ownerName = 'ex';

    $requestSecurity = new AnalyticsEventPropertiesSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->analytics->analyticsEventProperties($request, $requestSecurity);

    if ($response->analyticsEventProperties200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsEventPropertyCounts

Event properties value counts during the time range in descending order.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsEventPropertyCountsRequest;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsEventPropertyCountsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsEventPropertyCountsRequest();
    $request->dollarTop = 862192;
    $request->appName = 'excepturi';
    $request->end = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-20T18:02:50.249Z');
    $request->eventName = 'sapiente';
    $request->eventPropertyName = 'quisquam';
    $request->ownerName = 'saepe';
    $request->start = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-24T11:20:42.976Z');
    $request->versions = [
        'veniam',
        'aliquid',
    ];

    $requestSecurity = new AnalyticsEventPropertyCountsSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->analytics->analyticsEventPropertyCounts($request, $requestSecurity);

    if ($response->analyticsEventPropertyCounts200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsEvents

Count of active events in the time range ordered by event.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsEventsDollarInlinecountEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsEventsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsEventsRequest();
    $request->dollarInlinecount = AnalyticsEventsDollarInlinecountEnum::ALLPAGES;
    $request->dollarOrderby = 'magnam';
    $request->dollarSkip = 407241;
    $request->dollarTop = 775220;
    $request->appName = 'consectetur';
    $request->end = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-08T22:13:29.147Z');
    $request->eventName = [
        'eaque',
        'a',
    ];
    $request->ownerName = 'libero';
    $request->start = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-27T19:53:42.787Z');
    $request->versions = [
        'impedit',
        'aliquam',
        'fugit',
    ];

    $requestSecurity = new AnalyticsEventsSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->analytics->analyticsEvents($request, $requestSecurity);

    if ($response->analyticsEvents200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsEventsDelete

Delete the set of Events with the specified event names.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsEventsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsEventsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsEventsDeleteRequest();
    $request->appName = 'accusamus';
    $request->eventName = 'inventore';
    $request->ownerName = 'non';

    $requestSecurity = new AnalyticsEventsDeleteSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->analytics->analyticsEventsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsEventsDeleteLogs

Delete the set of Events with the specified event names.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsEventsDeleteLogsRequest;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsEventsDeleteLogsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsEventsDeleteLogsRequest();
    $request->appName = 'et';
    $request->eventName = 'dolorum';
    $request->ownerName = 'laborum';

    $requestSecurity = new AnalyticsEventsDeleteLogsSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->analytics->analyticsEventsDeleteLogs($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsGenericLogFlow

Logs received between the specified start time and the current time. The API will return a maximum of 100 logs per call.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsGenericLogFlowRequest;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsGenericLogFlowSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsGenericLogFlowRequest();
    $request->appName = 'placeat';
    $request->ownerName = 'velit';
    $request->start = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-31T12:04:26.954Z');

    $requestSecurity = new AnalyticsGenericLogFlowSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->analytics->analyticsGenericLogFlow($request, $requestSecurity);

    if ($response->analyticsGenericLogFlow200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsGetAudience

Gets audience definition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsGetAudienceRequest;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsGetAudienceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsGetAudienceRequest();
    $request->appName = 'nobis';
    $request->audienceName = 'quas';
    $request->ownerName = 'assumenda';

    $requestSecurity = new AnalyticsGetAudienceSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->analytics->analyticsGetAudience($request, $requestSecurity);

    if ($response->analyticsGetAudience200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsLanguageCounts

Languages in the time range.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsLanguageCountsRequest;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsLanguageCountsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsLanguageCountsRequest();
    $request->dollarTop = 860552;
    $request->appName = 'voluptas';
    $request->end = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-22T12:27:01.822Z');
    $request->ownerName = 'tempora';
    $request->start = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-14T00:12:37.683Z');
    $request->versions = [
        'ipsa',
        'molestiae',
        'magnam',
    ];

    $requestSecurity = new AnalyticsLanguageCountsSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->analytics->analyticsLanguageCounts($request, $requestSecurity);

    if ($response->analyticsLanguageCounts200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsListAudiences

Get list of audiences.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsListAudiencesRequest;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsListAudiencesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsListAudiencesRequest();
    $request->appName = 'odio';
    $request->includeDisabled = false;
    $request->ownerName = 'eius';

    $requestSecurity = new AnalyticsListAudiencesSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->analytics->analyticsListAudiences($request, $requestSecurity);

    if ($response->analyticsListAudiences200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsListCustomProperties

Get list of custom properties.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsListCustomPropertiesRequest;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsListCustomPropertiesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsListCustomPropertiesRequest();
    $request->appName = 'esse';
    $request->ownerName = 'esse';

    $requestSecurity = new AnalyticsListCustomPropertiesSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->analytics->analyticsListCustomProperties($request, $requestSecurity);

    if ($response->analyticsListCustomProperties200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsListDeviceProperties

Get list of device properties.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsListDevicePropertiesRequest;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsListDevicePropertiesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsListDevicePropertiesRequest();
    $request->appName = 'rem';
    $request->ownerName = 'fuga';

    $requestSecurity = new AnalyticsListDevicePropertiesSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->analytics->analyticsListDeviceProperties($request, $requestSecurity);

    if ($response->analyticsListDeviceProperties200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsListDevicePropertyValues

Get list of device property values.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsListDevicePropertyValuesRequest;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsListDevicePropertyValuesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsListDevicePropertyValuesRequest();
    $request->appName = 'reprehenderit';
    $request->contains = 'quidem';
    $request->ownerName = 'fugiat';
    $request->propertyName = 'ut';

    $requestSecurity = new AnalyticsListDevicePropertyValuesSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->analytics->analyticsListDevicePropertyValues($request, $requestSecurity);

    if ($response->analyticsListDevicePropertyValues200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsLogFlow

Logs received between the specified start time and the current time. The API will return a maximum of 100 logs per call.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsLogFlowRequest;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsLogFlowSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsLogFlowRequest();
    $request->appName = 'eum';
    $request->ownerName = 'suscipit';
    $request->start = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-16T15:21:08.890Z');

    $requestSecurity = new AnalyticsLogFlowSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->analytics->analyticsLogFlow($request, $requestSecurity);

    if ($response->analyticsLogFlow200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsModelCounts

Models in the time range.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsModelCountsRequest;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsModelCountsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsModelCountsRequest();
    $request->dollarTop = 509342;
    $request->appName = 'quisquam';
    $request->end = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-11T06:00:38.230Z');
    $request->ownerName = 'id';
    $request->start = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-03T04:27:44.236Z');
    $request->versions = [
        'illum',
        'quo',
        'fuga',
        'eius',
    ];

    $requestSecurity = new AnalyticsModelCountsSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->analytics->analyticsModelCounts($request, $requestSecurity);

    if ($response->analyticsModelCounts200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsOperatingSystemCounts

OSes in the time range.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsOperatingSystemCountsRequest;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsOperatingSystemCountsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsOperatingSystemCountsRequest();
    $request->dollarTop = 178367;
    $request->appName = 'voluptas';
    $request->end = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-31T12:37:37.443Z');
    $request->ownerName = 'consequatur';
    $request->start = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-09T09:38:41.756Z');
    $request->versions = [
        'aspernatur',
        'sequi',
    ];

    $requestSecurity = new AnalyticsOperatingSystemCountsSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->analytics->analyticsOperatingSystemCounts($request, $requestSecurity);

    if ($response->analyticsOperatingSystemCounts200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsPerDeviceCounts

Count of sessions per device in the time range.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsPerDeviceCountsRequest;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsPerDeviceCountsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsPerDeviceCountsRequest();
    $request->appName = 'quo';
    $request->end = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-28T07:34:05.998Z');
    $request->ownerName = 'aperiam';
    $request->start = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-27T03:34:33.852Z');
    $request->versions = [
        'inventore',
        'nihil',
    ];

    $requestSecurity = new AnalyticsPerDeviceCountsSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->analytics->analyticsPerDeviceCounts($request, $requestSecurity);

    if ($response->analyticsPerDeviceCounts200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsPlaceCounts

Places in the time range.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsPlaceCountsRequest;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsPlaceCountsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsPlaceCountsRequest();
    $request->dollarTop = 518835;
    $request->appName = 'accusamus';
    $request->end = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-06T17:31:39.783Z');
    $request->ownerName = 'occaecati';
    $request->start = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-15T19:21:50.024Z');
    $request->versions = [
        'deserunt',
    ];

    $requestSecurity = new AnalyticsPlaceCountsSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->analytics->analyticsPlaceCounts($request, $requestSecurity);

    if ($response->analyticsPlaceCounts200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsSessionCounts

Count of sessions in the time range.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsSessionCountsRequest;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsSessionCountsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsSessionCountsRequest();
    $request->appName = 'molestiae';
    $request->end = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-20T23:14:37.473Z');
    $request->ownerName = 'eum';
    $request->start = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-24T16:30:16.544Z');
    $request->versions = [
        'deleniti',
    ];

    $requestSecurity = new AnalyticsSessionCountsSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->analytics->analyticsSessionCounts($request, $requestSecurity);

    if ($response->analyticsSessionCounts200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsSessionDurationsDistribution

Gets session duration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsSessionDurationsDistributionRequest;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsSessionDurationsDistributionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsSessionDurationsDistributionRequest();
    $request->appName = 'fugit';
    $request->end = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-13T21:24:27.316Z');
    $request->ownerName = 'incidunt';
    $request->start = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-28T22:21:45.403Z');
    $request->versions = [
        'nisi',
        'fugit',
    ];

    $requestSecurity = new AnalyticsSessionDurationsDistributionSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->analytics->analyticsSessionDurationsDistribution($request, $requestSecurity);

    if ($response->analyticsSessionDurationsDistribution200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsTestAudience

Tests audience definition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsTestAudienceRequest;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsTestAudienceRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsTestAudienceRequestBodyCustomPropertiesEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsTestAudienceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsTestAudienceRequest();
    $request->requestBody = new AnalyticsTestAudienceRequestBody();
    $request->requestBody->customProperties = [
        'consequuntur' => AnalyticsTestAudienceRequestBodyCustomPropertiesEnum::STRING,
        'explicabo' => AnalyticsTestAudienceRequestBodyCustomPropertiesEnum::DATE_TIME,
        'occaecati' => AnalyticsTestAudienceRequestBodyCustomPropertiesEnum::BOOLEAN,
        'et' => AnalyticsTestAudienceRequestBodyCustomPropertiesEnum::NUMBER,
    ];
    $request->requestBody->definition = 'eveniet';
    $request->requestBody->description = 'accusamus';
    $request->requestBody->enabled = false;
    $request->appName = 'veritatis';
    $request->ownerName = 'esse';

    $requestSecurity = new AnalyticsTestAudienceSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->analytics->analyticsTestAudience($request, $requestSecurity);

    if ($response->analyticsTestAudience200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsVersions

Count of active versions in the time range ordered by version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsVersionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsVersionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsVersionsRequest();
    $request->dollarTop = 800379;
    $request->appName = 'nam';
    $request->end = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-21T01:36:51.257Z');
    $request->ownerName = 'quasi';
    $request->start = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-21T04:40:52.923Z');
    $request->versions = [
        'molestiae',
        'rerum',
        'occaecati',
    ];

    $requestSecurity = new AnalyticsVersionsSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->analytics->analyticsVersions($request, $requestSecurity);

    if ($response->analyticsVersions200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appBlockLogs

**Warning, this operation is not reversible.** 

A successful call to this API will permanently stop ingesting any logs received via SDK by app_id, and cannot be restored. We advise caution when using this API, it is designed to permanently disable an app_id.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppBlockLogsRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppBlockLogsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppBlockLogsRequest();
    $request->appName = 'minima';
    $request->ownerName = 'distinctio';

    $requestSecurity = new AppBlockLogsSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->analytics->appBlockLogs($request, $requestSecurity);

    if ($response->appBlockLogs200ApplicationJSONStringString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## crashesListSessionLogs

Get session logs by crash ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CrashesListSessionLogsRequest;
use \OpenAPI\OpenAPI\Models\Operations\CrashesListSessionLogsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CrashesListSessionLogsRequest();
    $request->appName = 'eligendi';
    $request->crashId = 'sit';
    $request->date = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-16T01:55:06.595Z');
    $request->ownerName = 'adipisci';

    $requestSecurity = new CrashesListSessionLogsSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->analytics->crashesListSessionLogs($request, $requestSecurity);

    if ($response->crashesListSessionLogs200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## devicesBlockLogs

**Warning, this operation is not reversible.**

 A successful call to this API will permanently stop ingesting any logs received via SDK for the given installation ID, and cannot be restored. We advise caution when using this API, it is designed to permanently disable collection from a specific installation of the app on a device, usually following the request from a user.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DevicesBlockLogsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DevicesBlockLogsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DevicesBlockLogsRequest();
    $request->appName = 'cumque';
    $request->installId = 'consequuntur';
    $request->ownerName = 'consequatur';

    $requestSecurity = new DevicesBlockLogsSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->analytics->devicesBlockLogs($request, $requestSecurity);

    if ($response->devicesBlockLogs200ApplicationJSONStringString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
