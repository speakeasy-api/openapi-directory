# codepush

### Available Operations

* [codePushAcquisitionGetAcquisitionStatus](#codepushacquisitiongetacquisitionstatus) - Returns the acquisition service status to the caller
* [codePushAcquisitionUpdateCheck](#codepushacquisitionupdatecheck) - Check for updates
* [codePushAcquisitionUpdateDeployStatus](#codepushacquisitionupdatedeploystatus) - Report Deployment status metric
* [codePushAcquisitionUpdateDownloadStatus](#codepushacquisitionupdatedownloadstatus) - Report download of specified release
* [codePushDeploymentMetricsGet](#codepushdeploymentmetricsget) - Gets all releases metrics for specified Deployment
* [codePushDeploymentReleaseRollback](#codepushdeploymentreleaserollback) - Rollback the latest or a specific release for an app deployment
* [codePushDeploymentReleasesCreate](#codepushdeploymentreleasescreate) - Create a new CodePush release for the specified deployment
* [codePushDeploymentReleasesDelete](#codepushdeploymentreleasesdelete) - Clears a Deployment of releases
* [codePushDeploymentReleasesGet](#codepushdeploymentreleasesget) - Gets the history of releases on a Deployment
* [codePushDeploymentUploadCreate](#codepushdeploymentuploadcreate) - Create a new CodePush release upload for the specified deployment
* [codePushDeploymentsCreate](#codepushdeploymentscreate) - Creates a CodePush Deployment for the given app
* [codePushDeploymentsDelete](#codepushdeploymentsdelete) - Deletes a CodePush Deployment for the given app
* [codePushDeploymentsGet](#codepushdeploymentsget) - Gets a CodePush Deployment for the given app
* [codePushDeploymentsList](#codepushdeploymentslist) - Gets a list of CodePush deployments for the given app
* [codePushDeploymentsPromote](#codepushdeploymentspromote) - Promote one release (default latest one) from one deployment to another
* [codePushDeploymentsUpdate](#codepushdeploymentsupdate) - Modifies a CodePush Deployment for the given app
* [deploymentReleasesUpdate](#deploymentreleasesupdate) - Modifies a CodePush release metadata under the given Deployment
* [legacyCodePushAcquisitionUpdateCheck](#legacycodepushacquisitionupdatecheck) - Check for updates
* [legacyCodePushAcquisitionUpdateDownloadStatus](#legacycodepushacquisitionupdatedownloadstatus) - Report download of specified release
* [legacyCodePushAcquisitionUpdateInstallsStatus](#legacycodepushacquisitionupdateinstallsstatus) - Report deploy of specified release

## codePushAcquisitionGetAcquisitionStatus

Returns the acquisition service status to the caller

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->codepush->codePushAcquisitionGetAcquisitionStatus();

    if ($response->codePushAcquisitionGetAcquisitionStatus200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## codePushAcquisitionUpdateCheck

Check for updates

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CodePushAcquisitionUpdateCheckRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CodePushAcquisitionUpdateCheckRequest();
    $request->appVersion = 'temporibus';
    $request->clientUniqueId = 'ullam';
    $request->deploymentKey = 'adipisci';
    $request->isCompanion = false;
    $request->label = 'cum';
    $request->packageHash = 'blanditiis';
    $request->previousDeploymentKey = 'quas';
    $request->previousLabelOrAppVersion = 'hic';

    $response = $sdk->codepush->codePushAcquisitionUpdateCheck($request);

    if ($response->codePushAcquisitionUpdateCheck200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## codePushAcquisitionUpdateDeployStatus

Report Deployment status metric

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CodePushAcquisitionUpdateDeployStatusRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CodePushAcquisitionUpdateDeployStatusRequestBody();
    $request->appVersion = 'nesciunt';
    $request->clientUniqueId = 'culpa';
    $request->deploymentKey = 'corrupti';
    $request->label = 'pariatur';
    $request->previousDeploymentKey = 'totam';
    $request->previousLabelOrAppVersion = 'hic';
    $request->status = 'exercitationem';

    $response = $sdk->codepush->codePushAcquisitionUpdateDeployStatus($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## codePushAcquisitionUpdateDownloadStatus

Report download of specified release

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CodePushAcquisitionUpdateDownloadStatusRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CodePushAcquisitionUpdateDownloadStatusRequestBody();
    $request->appVersion = 'nobis';
    $request->clientUniqueId = 'sit';
    $request->deploymentKey = 'rerum';
    $request->label = 'sed';
    $request->previousDeploymentKey = 'reiciendis';
    $request->previousLabelOrAppVersion = 'explicabo';
    $request->status = 'asperiores';

    $response = $sdk->codepush->codePushAcquisitionUpdateDownloadStatus($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## codePushDeploymentMetricsGet

Gets all releases metrics for specified Deployment

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CodePushDeploymentMetricsGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\CodePushDeploymentMetricsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CodePushDeploymentMetricsGetRequest();
    $request->appName = 'facilis';
    $request->deploymentName = 'voluptate';
    $request->ownerName = 'expedita';

    $requestSecurity = new CodePushDeploymentMetricsGetSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->codepush->codePushDeploymentMetricsGet($request, $requestSecurity);

    if ($response->codePushDeploymentMetricsGet200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## codePushDeploymentReleaseRollback

Rollback the latest or a specific release for an app deployment

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CodePushDeploymentReleaseRollbackRequest;
use \OpenAPI\OpenAPI\Models\Operations\CodePushDeploymentReleaseRollbackRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CodePushDeploymentReleaseRollbackSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CodePushDeploymentReleaseRollbackRequest();
    $request->requestBody = new CodePushDeploymentReleaseRollbackRequestBody();
    $request->requestBody->label = 'ab';
    $request->appName = 'iste';
    $request->deploymentName = 'dolore';
    $request->ownerName = 'laborum';

    $requestSecurity = new CodePushDeploymentReleaseRollbackSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->codepush->codePushDeploymentReleaseRollback($request, $requestSecurity);

    if ($response->codePushDeploymentReleaseRollback201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## codePushDeploymentReleasesCreate

Create a new CodePush release for the specified deployment

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CodePushDeploymentReleasesCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\CodePushDeploymentReleasesCreateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CodePushDeploymentReleasesCreateRequestBodyReleaseUpload;
use \OpenAPI\OpenAPI\Models\Operations\CodePushDeploymentReleasesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CodePushDeploymentReleasesCreateRequest();
    $request->requestBody = new CodePushDeploymentReleasesCreateRequestBody();
    $request->requestBody->deploymentName = 'sed';
    $request->requestBody->description = 'in';
    $request->requestBody->disabled = false;
    $request->requestBody->mandatory = false;
    $request->requestBody->noDuplicateReleaseError = false;
    $request->requestBody->releaseUpload = new CodePushDeploymentReleasesCreateRequestBodyReleaseUpload();
    $request->requestBody->releaseUpload->id = '6b26916f-e1f0-48f4-a94e-3698f447f603';
    $request->requestBody->releaseUpload->token = 'officiis';
    $request->requestBody->releaseUpload->uploadDomain = 'praesentium';
    $request->requestBody->rollout = 708609;
    $request->requestBody->targetBinaryVersion = 'quaerat';
    $request->appName = 'incidunt';
    $request->deploymentName = 'ipsam';
    $request->ownerName = 'debitis';

    $requestSecurity = new CodePushDeploymentReleasesCreateSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->codepush->codePushDeploymentReleasesCreate($request, $requestSecurity);

    if ($response->codePushDeploymentReleasesCreate201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## codePushDeploymentReleasesDelete

Clears a Deployment of releases

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CodePushDeploymentReleasesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\CodePushDeploymentReleasesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CodePushDeploymentReleasesDeleteRequest();
    $request->appName = 'rem';
    $request->deploymentName = 'sit';
    $request->ownerName = 'nobis';

    $requestSecurity = new CodePushDeploymentReleasesDeleteSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->codepush->codePushDeploymentReleasesDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## codePushDeploymentReleasesGet

Gets the history of releases on a Deployment

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CodePushDeploymentReleasesGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\CodePushDeploymentReleasesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CodePushDeploymentReleasesGetRequest();
    $request->appName = 'error';
    $request->deploymentName = 'veniam';
    $request->ownerName = 'minima';

    $requestSecurity = new CodePushDeploymentReleasesGetSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->codepush->codePushDeploymentReleasesGet($request, $requestSecurity);

    if ($response->codePushDeploymentReleasesGet200ApplicationJSONAnies !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## codePushDeploymentUploadCreate

Create a new CodePush release upload for the specified deployment

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CodePushDeploymentUploadCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\CodePushDeploymentUploadCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CodePushDeploymentUploadCreateRequest();
    $request->appName = 'recusandae';
    $request->deploymentName = 'reiciendis';
    $request->ownerName = 'nulla';

    $requestSecurity = new CodePushDeploymentUploadCreateSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->codepush->codePushDeploymentUploadCreate($request, $requestSecurity);

    if ($response->codePushDeploymentUploadCreate200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## codePushDeploymentsCreate

Creates a CodePush Deployment for the given app

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CodePushDeploymentsCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\CodePushDeploymentsCreateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CodePushDeploymentsCreateRequestBodyLatestRelease;
use \OpenAPI\OpenAPI\Models\Operations\CodePushDeploymentsCreateRequestBodyLatestReleaseDiffPackageMap;
use \OpenAPI\OpenAPI\Models\Operations\CodePushDeploymentsCreateRequestBodyLatestReleaseReleaseMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CodePushDeploymentsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CodePushDeploymentsCreateRequest();
    $request->requestBody = new CodePushDeploymentsCreateRequestBody();
    $request->requestBody->key = 'magni';
    $request->requestBody->latestRelease = new CodePushDeploymentsCreateRequestBodyLatestRelease();
    $request->requestBody->latestRelease->blobUrl = 'aperiam';
    $request->requestBody->latestRelease->description = 'saepe';
    $request->requestBody->latestRelease->diffPackageMap = [
        'veniam' => new CodePushDeploymentsCreateRequestBodyLatestReleaseDiffPackageMap(),
        'in' => new CodePushDeploymentsCreateRequestBodyLatestReleaseDiffPackageMap(),
    ];
    $request->requestBody->latestRelease->isDisabled = false;
    $request->requestBody->latestRelease->isMandatory = false;
    $request->requestBody->latestRelease->label = 'officiis';
    $request->requestBody->latestRelease->originalDeployment = 'beatae';
    $request->requestBody->latestRelease->originalLabel = 'laudantium';
    $request->requestBody->latestRelease->packageHash = 'exercitationem';
    $request->requestBody->latestRelease->releaseMethod = CodePushDeploymentsCreateRequestBodyLatestReleaseReleaseMethodEnum::PROMOTE;
    $request->requestBody->latestRelease->releasedBy = 'cum';
    $request->requestBody->latestRelease->rollout = 386827;
    $request->requestBody->latestRelease->size = 6805.15;
    $request->requestBody->latestRelease->targetBinaryRange = 'voluptatum';
    $request->requestBody->latestRelease->uploadTime = 622385;
    $request->requestBody->name = 'Rudolph Trantow';
    $request->appName = 'nostrum';
    $request->ownerName = 'officia';

    $requestSecurity = new CodePushDeploymentsCreateSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->codepush->codePushDeploymentsCreate($request, $requestSecurity);

    if ($response->codePushDeploymentsCreate201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## codePushDeploymentsDelete

Deletes a CodePush Deployment for the given app

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CodePushDeploymentsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\CodePushDeploymentsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CodePushDeploymentsDeleteRequest();
    $request->requestBody = [
        'corrupti' => 'accusamus',
        'tempora' => 'atque',
        'fugit' => 'ut',
    ];
    $request->appName = 'fugiat';
    $request->deploymentName = 'voluptatem';
    $request->ownerName = 'culpa';

    $requestSecurity = new CodePushDeploymentsDeleteSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->codepush->codePushDeploymentsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## codePushDeploymentsGet

Gets a CodePush Deployment for the given app

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CodePushDeploymentsGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\CodePushDeploymentsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CodePushDeploymentsGetRequest();
    $request->appName = 'expedita';
    $request->deploymentName = 'magnam';
    $request->ownerName = 'consequatur';

    $requestSecurity = new CodePushDeploymentsGetSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->codepush->codePushDeploymentsGet($request, $requestSecurity);

    if ($response->codePushDeploymentsGet200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## codePushDeploymentsList

Gets a list of CodePush deployments for the given app

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CodePushDeploymentsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\CodePushDeploymentsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CodePushDeploymentsListRequest();
    $request->appName = 'esse';
    $request->ownerName = 'ipsam';

    $requestSecurity = new CodePushDeploymentsListSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->codepush->codePushDeploymentsList($request, $requestSecurity);

    if ($response->codePushDeploymentsList200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## codePushDeploymentsPromote

Promote one release (default latest one) from one deployment to another

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CodePushDeploymentsPromoteRequest;
use \OpenAPI\OpenAPI\Models\Operations\CodePushDeploymentsPromoteRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CodePushDeploymentsPromoteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CodePushDeploymentsPromoteRequest();
    $request->requestBody = new CodePushDeploymentsPromoteRequestBody();
    $request->requestBody->description = 'sit';
    $request->requestBody->isDisabled = false;
    $request->requestBody->isMandatory = false;
    $request->requestBody->label = 'voluptatum';
    $request->requestBody->rollout = 558065;
    $request->requestBody->targetBinaryRange = 'repudiandae';
    $request->appName = 'corporis';
    $request->deploymentName = 'et';
    $request->ownerName = 'blanditiis';
    $request->promoteDeploymentName = 'ex';

    $requestSecurity = new CodePushDeploymentsPromoteSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->codepush->codePushDeploymentsPromote($request, $requestSecurity);

    if ($response->codePushDeploymentsPromote200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## codePushDeploymentsUpdate

Modifies a CodePush Deployment for the given app

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CodePushDeploymentsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\CodePushDeploymentsUpdateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CodePushDeploymentsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CodePushDeploymentsUpdateRequest();
    $request->requestBody = new CodePushDeploymentsUpdateRequestBody();
    $request->requestBody->name = 'Karen Kautzer';
    $request->appName = 'error';
    $request->deploymentName = 'consequatur';
    $request->ownerName = 'incidunt';

    $requestSecurity = new CodePushDeploymentsUpdateSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->codepush->codePushDeploymentsUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deploymentReleasesUpdate

Modifies a CodePush release metadata under the given Deployment

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentReleasesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentReleasesUpdateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\DeploymentReleasesUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeploymentReleasesUpdateRequest();
    $request->requestBody = new DeploymentReleasesUpdateRequestBody();
    $request->requestBody->description = 'reiciendis';
    $request->requestBody->isDisabled = false;
    $request->requestBody->isMandatory = false;
    $request->requestBody->rollout = 209750;
    $request->requestBody->targetBinaryRange = 'harum';
    $request->appName = 'dicta';
    $request->deploymentName = 'architecto';
    $request->ownerName = 'occaecati';
    $request->releaseLabel = 'labore';

    $requestSecurity = new DeploymentReleasesUpdateSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->codepush->deploymentReleasesUpdate($request, $requestSecurity);

    if ($response->deploymentReleasesUpdate200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## legacyCodePushAcquisitionUpdateCheck

Check for updates

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LegacyCodePushAcquisitionUpdateCheckRequest;
use \OpenAPI\OpenAPI\Models\Operations\LegacyCodePushAcquisitionUpdateCheckSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LegacyCodePushAcquisitionUpdateCheckRequest();
    $request->appVersion = 'quidem';
    $request->clientUniqueId = 'atque';
    $request->deploymentKey = 'laborum';
    $request->isCompanion = 'nam';
    $request->label = 'tenetur';
    $request->packageHash = 'laboriosam';

    $requestSecurity = new LegacyCodePushAcquisitionUpdateCheckSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->codepush->legacyCodePushAcquisitionUpdateCheck($request, $requestSecurity);

    if ($response->legacyCodePushAcquisitionUpdateCheck200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## legacyCodePushAcquisitionUpdateDownloadStatus

Report download of specified release

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LegacyCodePushAcquisitionUpdateDownloadStatusRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\LegacyCodePushAcquisitionUpdateDownloadStatusSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LegacyCodePushAcquisitionUpdateDownloadStatusRequestBody();
    $request->appVersion = 'alias';
    $request->clientUniqueId = 'amet';
    $request->deploymentKey = 'deserunt';
    $request->label = 'voluptate';
    $request->previousDeploymentKey = 'unde';
    $request->previousLabelOrAppVersion = 'reiciendis';
    $request->status = 'provident';

    $requestSecurity = new LegacyCodePushAcquisitionUpdateDownloadStatusSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->codepush->legacyCodePushAcquisitionUpdateDownloadStatus($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## legacyCodePushAcquisitionUpdateInstallsStatus

Report deploy of specified release

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LegacyCodePushAcquisitionUpdateInstallsStatusRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\LegacyCodePushAcquisitionUpdateInstallsStatusSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LegacyCodePushAcquisitionUpdateInstallsStatusRequestBody();
    $request->appVersion = 'repellendus';
    $request->clientUniqueId = 'delectus';
    $request->deploymentKey = 'voluptates';
    $request->label = 'perferendis';
    $request->previousDeploymentKey = 'est';
    $request->previousLabelOrAppVersion = 'quidem';
    $request->status = 'reprehenderit';

    $requestSecurity = new LegacyCodePushAcquisitionUpdateInstallsStatusSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->codepush->legacyCodePushAcquisitionUpdateInstallsStatus($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
