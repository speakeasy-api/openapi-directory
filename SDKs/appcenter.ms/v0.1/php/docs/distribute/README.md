# distribute

### Available Operations

* [~~appleMappingTestFlightGroups~~](#applemappingtestflightgroups) - Fetch all apple test flight groups :warning: **Deprecated**
* [appleMappingCreate](#applemappingcreate) - Create a mapping for an existing app in apple store for the specified application.
* [appleMappingDelete](#applemappingdelete) - Delete mapping of apple app to an existing app in apple store.
* [appleMappingGet](#applemappingget) - Get mapping of apple app to an existing app in apple store.
* [devicesDeviceDetails](#devicesdevicedetails) - Returns the device details.
* [devicesGetReleaseUpdateDevicesStatus](#devicesgetreleaseupdatedevicesstatus) - Returns the resign status to the caller
* [devicesList](#deviceslist) - Returns all devices associated with the given distribution group
* [devicesListCsvFormat](#deviceslistcsvformat) - Returns all devices associated with the given distribution group.
* [devicesRegisterUserForDevice](#devicesregisteruserfordevice) - Registers a user for an existing device
* [devicesRemoveUserDevice](#devicesremoveuserdevice) - Removes an existing device from a user
* [devicesUserDevicesList](#devicesuserdeviceslist) - Returns all devices associated with the given user.
* [distibutionReleasesInstallAnalytics](#distibutionreleasesinstallanalytics) - Notify download(s) for the provided distribution release(s).
* [provisioningProfile](#provisioningprofile) - Return information about the provisioning profile. Only available for iOS.
* [releasesAddDistributionGroup](#releasesadddistributiongroup) - Distributes a release to a group
* [releasesAddStore](#releasesaddstore) - Distributes a release to a store
* [releasesAddTesters](#releasesaddtesters) - Distributes a release to a user
* [~~releasesAvailableToTester~~](#releasesavailabletotester) - Return detailed information about releases avaiable to a tester. :warning: **Deprecated**
* [releasesCreateReleaseUpload](#releasescreatereleaseupload) - Initiate a new release upload. This API is part of multi-step upload process.
* [releasesDelete](#releasesdelete) - Deletes a release.
* [releasesDeleteDistributionGroup](#releasesdeletedistributiongroup) - Delete the given distribution group from the release
* [releasesDeleteDistributionStore](#releasesdeletedistributionstore) - Delete the given distribution store from the release
* [releasesDeleteDistributionTester](#releasesdeletedistributiontester) - Delete the given tester from the release
* [releasesDeleteTesterFromDestinations](#releasesdeletetesterfromdestinations) - Delete the given tester from the all releases
* [releasesDeleteWithDistributionGroupId](#releasesdeletewithdistributiongroupid) - Deletes a release with id 'release_id' in a given distribution group.
* [releasesGetIosManifest](#releasesgetiosmanifest) - Returns the manifest.plist in XML format for installing the release on a device. Only available for iOS.
* [releasesGetLatestByDistributionGroup](#releasesgetlatestbydistributiongroup) - Return detailed information about a distributed release in a given distribution group.
* [releasesGetLatestByHash](#releasesgetlatestbyhash) - If 'latest' is not specified then it will return the specified release if it's enabled. If 'latest' is specified, regardless of whether a release hash is provided, the latest enabled release is returned.
* [releasesGetLatestByPublicDistributionGroup](#releasesgetlatestbypublicdistributiongroup) - Get a release with 'latest' for the given public group.
* [releasesGetLatestByUser](#releasesgetlatestbyuser) - Get a release with id `release_id`. If `release_id` is `latest`, return the latest release that was distributed to the current user (from all the distribution groups).
* [releasesGetLatestPrivateRelease](#releasesgetlatestprivaterelease) - Get the latest release distributed to a private group the given user is a member of for the given app.
* [~~releasesGetLatestPublicRelease~~](#releasesgetlatestpublicrelease) - Get the latest public release for the given app. :warning: **Deprecated**
* [releasesGetPublicGroupsForReleaseByHash](#releasesgetpublicgroupsforreleasebyhash) - Get all public distribution groups that a given release has been distributed to
* [releasesGetReleaseUploadStatus](#releasesgetreleaseuploadstatus) - Get the current status of the release upload.
* [releasesGetSparkleFeed](#releasesgetsparklefeed) - Gets the sparkle feed of the releases that are distributed to all the public distribution groups.
* [releasesList](#releaseslist) - Return basic information about releases.
* [releasesListByDistributionGroup](#releaseslistbydistributiongroup) - Return basic information about distributed releases in a given distribution group.
* [releasesListLatest](#releaseslistlatest) - Get the latest release from every distribution group associated with an application.
* [releasesPutDistributionGroup](#releasesputdistributiongroup) - Update details about the specified distribution group associated with the release
* [releasesPutDistributionTester](#releasesputdistributiontester) - Update details about the specified tester associated with the release
* [releasesUpdate](#releasesupdate) - Updates a release.
* [releasesUpdateDetails](#releasesupdatedetails) - Update details of a release.
* [releasesUpdateReleaseUploadStatus](#releasesupdatereleaseuploadstatus) - Update the current status of the release upload.
* [storeNotificationsGetNotificationByAppId](#storenotificationsgetnotificationbyappid) - Application specific store service status
* [storeReleasePublishLogsGet](#storereleasepublishlogsget) - Returns publish logs for a particular release published to a particular store
* [storeReleasesDelete](#storereleasesdelete) - delete the release with release Id
* [storeReleasesGet](#storereleasesget) - Return releases published in a store for releaseId and storeId
* [storeReleasesGetLatest](#storereleasesgetlatest) - Returns the latest release published in a store.
* [storeReleasesGetPublishError](#storereleasesgetpublisherror) - Return the Error Details of release which failed in publishing.
* [storeReleasesGetRealTimeStatusByReleaseId](#storereleasesgetrealtimestatusbyreleaseid) - Return the Real time Status publishing of release from store.
* [storeReleasesList](#storereleaseslist) - Return all releases published  in a store
* [storesCreate](#storescreate) - Create a new external store for the specified application.
* [storesDelete](#storesdelete) - delete the store based on specific store name.
* [storesGet](#storesget) - Return the store details for specified store name.
* [storesList](#storeslist) - Get all the store details from Storage store table for a particular application.
* [storesPatch](#storespatch) - Update the store.

## ~~appleMappingTestFlightGroups~~

Fetch all apple test flight groups

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppleMappingTestFlightGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppleMappingTestFlightGroupsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppleMappingTestFlightGroupsRequest();
    $request->appName = 'ut';
    $request->ownerName = 'culpa';

    $requestSecurity = new AppleMappingTestFlightGroupsSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->distribute->appleMappingTestFlightGroups($request, $requestSecurity);

    if ($response->appleMappingTestFlightGroups200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appleMappingCreate

Create a mapping for an existing app in apple store for the specified application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppleMappingCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppleMappingCreateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\AppleMappingCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppleMappingCreateRequest();
    $request->requestBody = new AppleMappingCreateRequestBody();
    $request->requestBody->appleId = 'adipisci';
    $request->requestBody->bundleIdentifier = 'debitis';
    $request->requestBody->serviceConnectionId = 'laudantium';
    $request->requestBody->teamIdentifier = 'eum';
    $request->appName = 'nemo';
    $request->ownerName = 'recusandae';

    $requestSecurity = new AppleMappingCreateSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->distribute->appleMappingCreate($request, $requestSecurity);

    if ($response->appleMappingCreate201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appleMappingDelete

Delete mapping of apple app to an existing app in apple store.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppleMappingDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppleMappingDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppleMappingDeleteRequest();
    $request->requestBody = 'esse';
    $request->appName = 'provident';
    $request->ownerName = 'quis';

    $requestSecurity = new AppleMappingDeleteSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->distribute->appleMappingDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appleMappingGet

Get mapping of apple app to an existing app in apple store.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppleMappingGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppleMappingGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppleMappingGetRequest();
    $request->appName = 'eum';
    $request->ownerName = 'reiciendis';

    $requestSecurity = new AppleMappingGetSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->distribute->appleMappingGet($request, $requestSecurity);

    if ($response->appleMappingGet200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## devicesDeviceDetails

Returns the device details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DevicesDeviceDetailsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DevicesDeviceDetailsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DevicesDeviceDetailsRequest();
    $request->deviceUdid = 'provident';

    $requestSecurity = new DevicesDeviceDetailsSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->distribute->devicesDeviceDetails($request, $requestSecurity);

    if ($response->devicesDeviceDetails200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## devicesGetReleaseUpdateDevicesStatus

Returns the resign status to the caller

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DevicesGetReleaseUpdateDevicesStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\DevicesGetReleaseUpdateDevicesStatusSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DevicesGetReleaseUpdateDevicesStatusRequest();
    $request->appName = 'aspernatur';
    $request->includeProvisioningProfile = false;
    $request->ownerName = 'ullam';
    $request->releaseId = 'quasi';
    $request->resignId = 'animi';

    $requestSecurity = new DevicesGetReleaseUpdateDevicesStatusSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->distribute->devicesGetReleaseUpdateDevicesStatus($request, $requestSecurity);

    if ($response->devicesGetReleaseUpdateDevicesStatus200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## devicesList

Returns all devices associated with the given distribution group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DevicesListRequest;
use \OpenAPI\OpenAPI\Models\Operations\DevicesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DevicesListRequest();
    $request->appName = 'nostrum';
    $request->distributionGroupName = 'mollitia';
    $request->ownerName = 'provident';
    $request->releaseId = 8217.19;

    $requestSecurity = new DevicesListSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->distribute->devicesList($request, $requestSecurity);

    if ($response->devicesList200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## devicesListCsvFormat

Returns all devices associated with the given distribution group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DevicesListCsvFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\DevicesListCsvFormatSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DevicesListCsvFormatRequest();
    $request->appName = 'animi';
    $request->distributionGroupName = 'ex';
    $request->ownerName = 'aliquid';
    $request->udids = [
        'repellat',
    ];
    $request->unprovisionedOnly = false;

    $requestSecurity = new DevicesListCsvFormatSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->distribute->devicesListCsvFormat($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## devicesRegisterUserForDevice

Registers a user for an existing device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DevicesRegisterUserForDeviceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DevicesRegisterUserForDeviceRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\DevicesRegisterUserForDeviceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DevicesRegisterUserForDeviceRequest();
    $request->requestBody = new DevicesRegisterUserForDeviceRequestBody();
    $request->requestBody->imei = 'doloribus';
    $request->requestBody->model = 'ullam';
    $request->requestBody->osBuild = 'in';
    $request->requestBody->osVersion = 'nam';
    $request->requestBody->ownerId = 'earum';
    $request->requestBody->serial = 'officia';
    $request->requestBody->udid = 'laborum';
    $request->userId = 'placeat';

    $requestSecurity = new DevicesRegisterUserForDeviceSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->distribute->devicesRegisterUserForDevice($request, $requestSecurity);

    if ($response->devicesRegisterUserForDevice200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## devicesRemoveUserDevice

Removes an existing device from a user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DevicesRemoveUserDeviceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DevicesRemoveUserDeviceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DevicesRemoveUserDeviceRequest();
    $request->deviceUdid = 'modi';

    $requestSecurity = new DevicesRemoveUserDeviceSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->distribute->devicesRemoveUserDevice($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## devicesUserDevicesList

Returns all devices associated with the given user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DevicesUserDevicesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new DevicesUserDevicesListSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->distribute->devicesUserDevicesList($requestSecurity);

    if ($response->devicesUserDevicesList200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## distibutionReleasesInstallAnalytics

Notify download(s) for the provided distribution release(s).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DistibutionReleasesInstallAnalyticsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DistibutionReleasesInstallAnalyticsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\DistibutionReleasesInstallAnalyticsRequestBodyReleases;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DistibutionReleasesInstallAnalyticsRequest();
    $request->requestBody = new DistibutionReleasesInstallAnalyticsRequestBody();
    $request->requestBody->releases = [
        new DistibutionReleasesInstallAnalyticsRequestBodyReleases(),
        new DistibutionReleasesInstallAnalyticsRequestBodyReleases(),
        new DistibutionReleasesInstallAnalyticsRequestBodyReleases(),
        new DistibutionReleasesInstallAnalyticsRequestBodyReleases(),
    ];
    $request->appName = 'molestias';
    $request->ownerName = 'officiis';

    $response = $sdk->distribute->distibutionReleasesInstallAnalytics($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## provisioningProfile

Return information about the provisioning profile. Only available for iOS.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProvisioningProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProvisioningProfileSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProvisioningProfileRequest();
    $request->appName = 'sapiente';
    $request->ownerName = 'cumque';
    $request->releaseId = 113486;

    $requestSecurity = new ProvisioningProfileSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->distribute->provisioningProfile($request, $requestSecurity);

    if ($response->provisioningProfileResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## releasesAddDistributionGroup

Distributes a release to a group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesAddDistributionGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesAddDistributionGroupRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesAddDistributionGroupSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReleasesAddDistributionGroupRequest();
    $request->requestBody = new ReleasesAddDistributionGroupRequestBody();
    $request->requestBody->id = 'b4512c10-3264-48dc-af61-5199ebfd0e9f';
    $request->requestBody->mandatoryUpdate = false;
    $request->requestBody->notifyTesters = false;
    $request->appName = 'debitis';
    $request->ownerName = 'aliquid';
    $request->releaseId = 780931;

    $requestSecurity = new ReleasesAddDistributionGroupSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->distribute->releasesAddDistributionGroup($request, $requestSecurity);

    if ($response->releasesAddDistributionGroup201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## releasesAddStore

Distributes a release to a store

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesAddStoreRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesAddStoreRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesAddStoreSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReleasesAddStoreRequest();
    $request->requestBody = new ReleasesAddStoreRequestBody();
    $request->requestBody->id = '632ca3ae-d011-4799-a312-fde04771778f';
    $request->appName = 'reiciendis';
    $request->ownerName = 'vel';
    $request->releaseId = 99958;

    $requestSecurity = new ReleasesAddStoreSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->distribute->releasesAddStore($request, $requestSecurity);

    if ($response->releasesAddStore201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## releasesAddTesters

Distributes a release to a user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesAddTestersRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesAddTestersRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesAddTestersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReleasesAddTestersRequest();
    $request->requestBody = new ReleasesAddTestersRequestBody();
    $request->requestBody->email = 'Aliya.Carroll@hotmail.com';
    $request->requestBody->mandatoryUpdate = false;
    $request->requestBody->notifyTesters = false;
    $request->appName = 'esse';
    $request->ownerName = 'ex';
    $request->releaseId = 235263;

    $requestSecurity = new ReleasesAddTestersSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->distribute->releasesAddTesters($request, $requestSecurity);

    if ($response->releasesAddTesters201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~releasesAvailableToTester~~

Return detailed information about releases avaiable to a tester.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesAvailableToTesterRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesAvailableToTesterSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReleasesAvailableToTesterRequest();
    $request->appName = 'aliquid';
    $request->ownerName = 'ipsa';
    $request->publishedOnly = false;

    $requestSecurity = new ReleasesAvailableToTesterSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->distribute->releasesAvailableToTester($request, $requestSecurity);

    if ($response->releasesAvailableToTester200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## releasesCreateReleaseUpload

Initiate a new release upload. This API is part of multi-step upload process.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesCreateReleaseUploadRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesCreateReleaseUploadRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesCreateReleaseUploadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReleasesCreateReleaseUploadRequest();
    $request->requestBody = new ReleasesCreateReleaseUploadRequestBody();
    $request->requestBody->buildNumber = 'laborum';
    $request->requestBody->buildVersion = 'sunt';
    $request->appName = 'nostrum';
    $request->ownerName = 'fugiat';

    $requestSecurity = new ReleasesCreateReleaseUploadSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->distribute->releasesCreateReleaseUpload($request, $requestSecurity);

    if ($response->releasesCreateReleaseUpload201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## releasesDelete

Deletes a release.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReleasesDeleteRequest();
    $request->appName = 'expedita';
    $request->ownerName = 'aliquid';
    $request->releaseId = 639187;

    $requestSecurity = new ReleasesDeleteSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->distribute->releasesDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## releasesDeleteDistributionGroup

Delete the given distribution group from the release

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesDeleteDistributionGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesDeleteDistributionGroupSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReleasesDeleteDistributionGroupRequest();
    $request->appName = 'suscipit';
    $request->groupId = 'aliquid';
    $request->ownerName = 'perferendis';
    $request->releaseId = 431760;

    $requestSecurity = new ReleasesDeleteDistributionGroupSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->distribute->releasesDeleteDistributionGroup($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## releasesDeleteDistributionStore

Delete the given distribution store from the release

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesDeleteDistributionStoreRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesDeleteDistributionStoreSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReleasesDeleteDistributionStoreRequest();
    $request->appName = 'voluptas';
    $request->ownerName = 'iste';
    $request->releaseId = 661607;
    $request->storeId = 'ab';

    $requestSecurity = new ReleasesDeleteDistributionStoreSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->distribute->releasesDeleteDistributionStore($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## releasesDeleteDistributionTester

Delete the given tester from the release

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesDeleteDistributionTesterRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesDeleteDistributionTesterSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReleasesDeleteDistributionTesterRequest();
    $request->appName = 'error';
    $request->ownerName = 'possimus';
    $request->releaseId = 913992;
    $request->testerId = 'mollitia';

    $requestSecurity = new ReleasesDeleteDistributionTesterSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->distribute->releasesDeleteDistributionTester($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## releasesDeleteTesterFromDestinations

Delete the given tester from the all releases

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesDeleteTesterFromDestinationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesDeleteTesterFromDestinationsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReleasesDeleteTesterFromDestinationsRequest();
    $request->appName = 'laborum';
    $request->ownerName = 'libero';
    $request->testerId = 'ad';

    $requestSecurity = new ReleasesDeleteTesterFromDestinationsSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->distribute->releasesDeleteTesterFromDestinations($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## releasesDeleteWithDistributionGroupId

Deletes a release with id 'release_id' in a given distribution group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesDeleteWithDistributionGroupIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesDeleteWithDistributionGroupIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReleasesDeleteWithDistributionGroupIdRequest();
    $request->appName = 'deleniti';
    $request->distributionGroupName = 'enim';
    $request->ownerName = 'vitae';
    $request->releaseId = 833316;

    $requestSecurity = new ReleasesDeleteWithDistributionGroupIdSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->distribute->releasesDeleteWithDistributionGroupId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## releasesGetIosManifest

Returns the manifest.plist in XML format for installing the release on a device. Only available for iOS.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesGetIosManifestRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReleasesGetIosManifestRequest();
    $request->appId = 'ex';
    $request->releaseId = 775803;
    $request->token = 'ex';

    $response = $sdk->distribute->releasesGetIosManifest($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## releasesGetLatestByDistributionGroup

Return detailed information about a distributed release in a given distribution group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesGetLatestByDistributionGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesGetLatestByDistributionGroupSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReleasesGetLatestByDistributionGroupRequest();
    $request->appName = 'ut';
    $request->distributionGroupName = 'ad';
    $request->isInstallPage = false;
    $request->ownerName = 'expedita';
    $request->releaseId = 'voluptatem';

    $requestSecurity = new ReleasesGetLatestByDistributionGroupSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->distribute->releasesGetLatestByDistributionGroup($request, $requestSecurity);

    if ($response->releasesGetLatestByDistributionGroup200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## releasesGetLatestByHash

If 'latest' is not specified then it will return the specified release if it's enabled. If 'latest' is specified, regardless of whether a release hash is provided, the latest enabled release is returned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesGetLatestByHashRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesGetLatestByHashSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReleasesGetLatestByHashRequest();
    $request->appSecret = 'molestias';
    $request->releaseHash = 'cum';
    $request->udid = 'aliquid';

    $requestSecurity = new ReleasesGetLatestByHashSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->distribute->releasesGetLatestByHash($request, $requestSecurity);

    if ($response->releasesGetLatestByHash200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## releasesGetLatestByPublicDistributionGroup

Get a release with 'latest' for the given public group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesGetLatestByPublicDistributionGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReleasesGetLatestByPublicDistributionGroupRequest();
    $request->appSecret = 'beatae';
    $request->distributionGroupId = 'voluptatum';
    $request->isInstallPage = false;

    $response = $sdk->distribute->releasesGetLatestByPublicDistributionGroup($request);

    if ($response->releasesGetLatestByPublicDistributionGroup200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## releasesGetLatestByUser

Get a release with id `release_id`. If `release_id` is `latest`, return the latest release that was distributed to the current user (from all the distribution groups).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesGetLatestByUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesGetLatestByUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReleasesGetLatestByUserRequest();
    $request->appName = 'omnis';
    $request->isInstallPage = false;
    $request->ownerName = 'veritatis';
    $request->releaseId = 'rerum';
    $request->udid = 'est';

    $requestSecurity = new ReleasesGetLatestByUserSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->distribute->releasesGetLatestByUser($request, $requestSecurity);

    if ($response->releasesGetLatestByUser200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## releasesGetLatestPrivateRelease

Get the latest release distributed to a private group the given user is a member of for the given app.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesGetLatestPrivateReleaseRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesGetLatestPrivateReleaseSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReleasesGetLatestPrivateReleaseRequest();
    $request->appSecret = 'culpa';
    $request->udid = 'voluptatem';

    $requestSecurity = new ReleasesGetLatestPrivateReleaseSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->distribute->releasesGetLatestPrivateRelease($request, $requestSecurity);

    if ($response->releasesGetLatestPrivateRelease200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~releasesGetLatestPublicRelease~~

Get the latest public release for the given app.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesGetLatestPublicReleaseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReleasesGetLatestPublicReleaseRequest();
    $request->appSecret = 'sapiente';

    $response = $sdk->distribute->releasesGetLatestPublicRelease($request);

    if ($response->releasesGetLatestPublicRelease200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## releasesGetPublicGroupsForReleaseByHash

Get all public distribution groups that a given release has been distributed to

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesGetPublicGroupsForReleaseByHashRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReleasesGetPublicGroupsForReleaseByHashRequest();
    $request->appSecret = 'officiis';
    $request->releaseHash = 'architecto';

    $response = $sdk->distribute->releasesGetPublicGroupsForReleaseByHash($request);

    if ($response->releasesGetPublicGroupsForReleaseByHash200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## releasesGetReleaseUploadStatus

Get the current status of the release upload.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesGetReleaseUploadStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesGetReleaseUploadStatusSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReleasesGetReleaseUploadStatusRequest();
    $request->appName = 'fuga';
    $request->ownerName = 'pariatur';
    $request->uploadId = 'e008e6f8-c5f3-450d-8cdb-5a3418143010';

    $requestSecurity = new ReleasesGetReleaseUploadStatusSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->distribute->releasesGetReleaseUploadStatus($request, $requestSecurity);

    if ($response->releasesGetReleaseUploadStatus200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## releasesGetSparkleFeed

Gets the sparkle feed of the releases that are distributed to all the public distribution groups.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesGetSparkleFeedRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReleasesGetSparkleFeedRequest();
    $request->appSecret = 'modi';

    $response = $sdk->distribute->releasesGetSparkleFeed($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## releasesList

Return basic information about releases.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesListRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReleasesListRequest();
    $request->appName = 'fugit';
    $request->ownerName = 'ab';
    $request->publishedOnly = false;
    $request->releaseId = 5137.6;
    $request->scope = 'quae';
    $request->top = 2226.58;

    $requestSecurity = new ReleasesListSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->distribute->releasesList($request, $requestSecurity);

    if ($response->releasesList200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## releasesListByDistributionGroup

Return basic information about distributed releases in a given distribution group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesListByDistributionGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesListByDistributionGroupSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReleasesListByDistributionGroupRequest();
    $request->appName = 'fugiat';
    $request->distributionGroupName = 'ipsam';
    $request->ownerName = 'consequuntur';

    $requestSecurity = new ReleasesListByDistributionGroupSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->distribute->releasesListByDistributionGroup($request, $requestSecurity);

    if ($response->releasesListByDistributionGroup200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## releasesListLatest

Get the latest release from every distribution group associated with an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesListLatestRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesListLatestSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReleasesListLatestRequest();
    $request->appName = 'ipsa';
    $request->ownerName = 'quas';

    $requestSecurity = new ReleasesListLatestSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->distribute->releasesListLatest($request, $requestSecurity);

    if ($response->releasesListLatest200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## releasesPutDistributionGroup

Update details about the specified distribution group associated with the release

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesPutDistributionGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesPutDistributionGroupRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesPutDistributionGroupSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReleasesPutDistributionGroupRequest();
    $request->requestBody = new ReleasesPutDistributionGroupRequestBody();
    $request->requestBody->mandatoryUpdate = false;
    $request->appName = 'eveniet';
    $request->groupId = 'ce7e253b-6684-451c-ac6e-205e16deab3f';
    $request->ownerName = 'repudiandae';
    $request->releaseId = 759283;

    $requestSecurity = new ReleasesPutDistributionGroupSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->distribute->releasesPutDistributionGroup($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## releasesPutDistributionTester

Update details about the specified tester associated with the release

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesPutDistributionTesterRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesPutDistributionTesterRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesPutDistributionTesterSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReleasesPutDistributionTesterRequest();
    $request->requestBody = new ReleasesPutDistributionTesterRequestBody();
    $request->requestBody->mandatoryUpdate = false;
    $request->appName = 'occaecati';
    $request->ownerName = 'nemo';
    $request->releaseId = 455898;
    $request->testerId = '8a645842-73a8-4418-9162-309fb0929921';

    $requestSecurity = new ReleasesPutDistributionTesterSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->distribute->releasesPutDistributionTester($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## releasesUpdate

Updates a release.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReleasesUpdateRequest();
    $request->requestBody = 'fuga';
    $request->appName = 'accusamus';
    $request->ownerName = 'voluptatibus';
    $request->releaseId = 719620;

    $requestSecurity = new ReleasesUpdateSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->distribute->releasesUpdate($request, $requestSecurity);

    if ($response->releasesUpdate200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## releasesUpdateDetails

Update details of a release.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesUpdateDetailsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesUpdateDetailsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesUpdateDetailsRequestBodyBuild;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesUpdateDetailsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReleasesUpdateDetailsRequest();
    $request->requestBody = new ReleasesUpdateDetailsRequestBody();
    $request->requestBody->build = new ReleasesUpdateDetailsRequestBodyBuild();
    $request->requestBody->build->branchName = 'omnis';
    $request->requestBody->build->commitHash = 'delectus';
    $request->requestBody->build->commitMessage = 'minima';
    $request->requestBody->enabled = false;
    $request->requestBody->releaseNotes = 'praesentium';
    $request->appName = 'maxime';
    $request->ownerName = 'magnam';
    $request->releaseId = 836364;

    $requestSecurity = new ReleasesUpdateDetailsSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->distribute->releasesUpdateDetails($request, $requestSecurity);

    if ($response->releasesUpdateDetails200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## releasesUpdateReleaseUploadStatus

Update the current status of the release upload.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesUpdateReleaseUploadStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesUpdateReleaseUploadStatusRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesUpdateReleaseUploadStatusRequestBodyUploadStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ReleasesUpdateReleaseUploadStatusSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReleasesUpdateReleaseUploadStatusRequest();
    $request->requestBody = new ReleasesUpdateReleaseUploadStatusRequestBody();
    $request->requestBody->uploadStatus = ReleasesUpdateReleaseUploadStatusRequestBodyUploadStatusEnum::UPLOAD_CANCELED;
    $request->appName = 'commodi';
    $request->extract = false;
    $request->ownerName = 'itaque';
    $request->uploadId = '68e4be05-6013-4f59-9a75-7a59ecfef66e';

    $requestSecurity = new ReleasesUpdateReleaseUploadStatusSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->distribute->releasesUpdateReleaseUploadStatus($request, $requestSecurity);

    if ($response->releasesUpdateReleaseUploadStatus200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storeNotificationsGetNotificationByAppId

Application specific store service status

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StoreNotificationsGetNotificationByAppIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\StoreNotificationsGetNotificationByAppIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoreNotificationsGetNotificationByAppIdRequest();
    $request->appName = 'delectus';
    $request->ownerName = 'quae';

    $requestSecurity = new StoreNotificationsGetNotificationByAppIdSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->distribute->storeNotificationsGetNotificationByAppId($request, $requestSecurity);

    if ($response->storeNotificationsGetNotificationByAppId200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storeReleasePublishLogsGet

Returns publish logs for a particular release published to a particular store

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StoreReleasePublishLogsGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\StoreReleasePublishLogsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoreReleasePublishLogsGetRequest();
    $request->appName = 'minus';
    $request->ownerName = 'fuga';
    $request->releaseId = 'laborum';
    $request->storeName = 'consectetur';

    $requestSecurity = new StoreReleasePublishLogsGetSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->distribute->storeReleasePublishLogsGet($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storeReleasesDelete

delete the release with release Id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StoreReleasesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\StoreReleasesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoreReleasesDeleteRequest();
    $request->requestBody = 'velit';
    $request->appName = 'atque';
    $request->ownerName = 'ipsum';
    $request->releaseId = 'impedit';
    $request->storeName = 'magni';

    $requestSecurity = new StoreReleasesDeleteSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->distribute->storeReleasesDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storeReleasesGet

Return releases published in a store for releaseId and storeId

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StoreReleasesGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\StoreReleasesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoreReleasesGetRequest();
    $request->appName = 'soluta';
    $request->ownerName = 'repudiandae';
    $request->releaseId = 'nam';
    $request->storeName = 'dolore';

    $requestSecurity = new StoreReleasesGetSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->distribute->storeReleasesGet($request, $requestSecurity);

    if ($response->storeReleasesGet200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storeReleasesGetLatest

Returns the latest release published in a store.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StoreReleasesGetLatestRequest;
use \OpenAPI\OpenAPI\Models\Operations\StoreReleasesGetLatestSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoreReleasesGetLatestRequest();
    $request->appName = 'iusto';
    $request->ownerName = 'voluptate';
    $request->storeName = 'sequi';

    $requestSecurity = new StoreReleasesGetLatestSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->distribute->storeReleasesGetLatest($request, $requestSecurity);

    if ($response->storeReleasesGetLatest200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storeReleasesGetPublishError

Return the Error Details of release which failed in publishing.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StoreReleasesGetPublishErrorRequest;
use \OpenAPI\OpenAPI\Models\Operations\StoreReleasesGetPublishErrorSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoreReleasesGetPublishErrorRequest();
    $request->appName = 'dignissimos';
    $request->ownerName = 'neque';
    $request->releaseId = 7781.72;
    $request->storeName = 'deleniti';

    $requestSecurity = new StoreReleasesGetPublishErrorSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->distribute->storeReleasesGetPublishError($request, $requestSecurity);

    if ($response->storeReleasesGetPublishError200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storeReleasesGetRealTimeStatusByReleaseId

Return the Real time Status publishing of release from store.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StoreReleasesGetRealTimeStatusByReleaseIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\StoreReleasesGetRealTimeStatusByReleaseIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoreReleasesGetRealTimeStatusByReleaseIdRequest();
    $request->appName = 'quibusdam';
    $request->ownerName = 'iure';
    $request->releaseId = 1390.72;
    $request->storeName = 'voluptatibus';

    $requestSecurity = new StoreReleasesGetRealTimeStatusByReleaseIdSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->distribute->storeReleasesGetRealTimeStatusByReleaseId($request, $requestSecurity);

    if ($response->storeReleasesGetRealTimeStatusByReleaseId200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storeReleasesList

Return all releases published  in a store

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StoreReleasesListRequest;
use \OpenAPI\OpenAPI\Models\Operations\StoreReleasesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoreReleasesListRequest();
    $request->appName = 'vel';
    $request->ownerName = 'magnam';
    $request->storeName = 'quibusdam';

    $requestSecurity = new StoreReleasesListSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->distribute->storeReleasesList($request, $requestSecurity);

    if ($response->storeReleasesList200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storesCreate

Create a new external store for the specified application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StoresCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\StoresCreateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\StoresCreateRequestBodyIntuneDetails;
use \OpenAPI\OpenAPI\Models\Operations\StoresCreateRequestBodyIntuneDetailsAppCategory;
use \OpenAPI\OpenAPI\Models\Operations\StoresCreateRequestBodyIntuneDetailsSecretJson;
use \OpenAPI\OpenAPI\Models\Operations\StoresCreateRequestBodyIntuneDetailsTargetAudience;
use \OpenAPI\OpenAPI\Models\Operations\StoresCreateRequestBodyTrackEnum;
use \OpenAPI\OpenAPI\Models\Operations\StoresCreateRequestBodyTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\StoresCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoresCreateRequest();
    $request->requestBody = new StoresCreateRequestBody();
    $request->requestBody->intuneDetails = new StoresCreateRequestBodyIntuneDetails();
    $request->requestBody->intuneDetails->appCategory = new StoresCreateRequestBodyIntuneDetailsAppCategory();
    $request->requestBody->intuneDetails->appCategory->name = 'Dr. Muriel Reinger';
    $request->requestBody->intuneDetails->secretJson = new StoresCreateRequestBodyIntuneDetailsSecretJson();
    $request->requestBody->intuneDetails->secretJson->idToken = 'porro';
    $request->requestBody->intuneDetails->secretJson->refreshToken = 'aliquam';
    $request->requestBody->intuneDetails->secretJson->refreshTokenExpiry = 'velit';
    $request->requestBody->intuneDetails->targetAudience = new StoresCreateRequestBodyIntuneDetailsTargetAudience();
    $request->requestBody->intuneDetails->targetAudience->name = 'Ruth Kassulke PhD';
    $request->requestBody->intuneDetails->tenantId = 'excepturi';
    $request->requestBody->name = 'Sheila Graham';
    $request->requestBody->serviceConnectionId = 'dicta';
    $request->requestBody->track = StoresCreateRequestBodyTrackEnum::TESTFLIGHT_INTERNAL;
    $request->requestBody->type = StoresCreateRequestBodyTypeEnum::INTUNE;
    $request->appName = 'iste';
    $request->ownerName = 'itaque';

    $requestSecurity = new StoresCreateSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->distribute->storesCreate($request, $requestSecurity);

    if ($response->storesCreate201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storesDelete

delete the store based on specific store name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StoresDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\StoresDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoresDeleteRequest();
    $request->requestBody = 'alias';
    $request->appName = 'nisi';
    $request->ownerName = 'itaque';
    $request->storeName = 'velit';

    $requestSecurity = new StoresDeleteSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->distribute->storesDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storesGet

Return the store details for specified store name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StoresGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\StoresGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoresGetRequest();
    $request->appName = 'laborum';
    $request->ownerName = 'non';
    $request->storeName = 'dolor';

    $requestSecurity = new StoresGetSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->distribute->storesGet($request, $requestSecurity);

    if ($response->storesGet200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storesList

Get all the store details from Storage store table for a particular application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StoresListRequest;
use \OpenAPI\OpenAPI\Models\Operations\StoresListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoresListRequest();
    $request->appName = 'iusto';
    $request->ownerName = 'sit';

    $requestSecurity = new StoresListSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->distribute->storesList($request, $requestSecurity);

    if ($response->storesList200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storesPatch

Update the store.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StoresPatchRequest;
use \OpenAPI\OpenAPI\Models\Operations\StoresPatchRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\StoresPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoresPatchRequest();
    $request->requestBody = new StoresPatchRequestBody();
    $request->requestBody->serviceConnectionId = 'doloremque';
    $request->appName = 'consequatur';
    $request->ownerName = 'officia';
    $request->storeName = 'recusandae';

    $requestSecurity = new StoresPatchSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->distribute->storesPatch($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
