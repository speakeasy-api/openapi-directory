# build

### Available Operations

* [branchConfigurationsCreate](#branchconfigurationscreate) - Configures the branch for build
* [branchConfigurationsDelete](#branchconfigurationsdelete) - Deletes the branch build configuration
* [branchConfigurationsGet](#branchconfigurationsget) - Gets the branch configuration
* [branchConfigurationsUpdate](#branchconfigurationsupdate) - Reconfigures the branch for build
* [buildConfigurationsGet](#buildconfigurationsget) - Gets the build configuration in Azure pipeline YAML format
* [buildsCreate](#buildscreate) - Create a build
* [buildsDistribute](#buildsdistribute) - Distribute a build
* [buildsGet](#buildsget) - Returns the build detail for the given build ID
* [buildsGetDownloadUri](#buildsgetdownloaduri) - Gets the download URI
* [buildsGetLog](#buildsgetlog) - Get the build log
* [buildsGetStatusByAppId](#buildsgetstatusbyappid) - Application specific build service status
* [buildsListBranches](#buildslistbranches) - Returns the list of Git branches for this application
* [buildsListByBranch](#buildslistbybranch) - Returns the list of builds for the branch
* [buildsListToolsetProjects](#buildslisttoolsetprojects) - Returns the projects in the repository for the branch, for all toolsets
* [buildsListToolsets](#buildslisttoolsets) - Returns available toolsets for application
* [~~buildsListXamarinSDKBundles~~](#buildslistxamarinsdkbundles) - Gets the Xamarin SDK bundles available to this app :warning: **Deprecated**
* [~~buildsListXcodeVersions~~](#buildslistxcodeversions) - Gets the Xcode versions available to this app :warning: **Deprecated**
* [buildsUpdate](#buildsupdate) - Cancels a build
* [buildsWebhook](#buildswebhook) - Public webhook sink
* [commitsListByShaList](#commitslistbyshalist) - Returns commit information for a batch of shas
* [fileAssetsCreate](#fileassetscreate) - Create a new asset to upload a file
* [repositoriesList](#repositorieslist) - Gets the repositories available from the source code host
* [repositoryConfigurationsCreateOrUpdate](#repositoryconfigurationscreateorupdate) - Configures the repository for build
* [repositoryConfigurationsDelete](#repositoryconfigurationsdelete) - Removes the configuration for the repository
* [repositoryConfigurationsList](#repositoryconfigurationslist) - Returns the repository build configuration status of the app

## branchConfigurationsCreate

Configures the branch for build

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BranchConfigurationsCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\BranchConfigurationsCreateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\BranchConfigurationsCreateRequestBodyArtifactVersioning;
use \OpenAPI\OpenAPI\Models\Operations\BranchConfigurationsCreateRequestBodyArtifactVersioningBuildNumberFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\BranchConfigurationsCreateRequestBodyToolsets;
use \OpenAPI\OpenAPI\Models\Operations\BranchConfigurationsCreateRequestBodyToolsetsAndroid;
use \OpenAPI\OpenAPI\Models\Operations\BranchConfigurationsCreateRequestBodyToolsetsJavascript;
use \OpenAPI\OpenAPI\Models\Operations\BranchConfigurationsCreateRequestBodyToolsetsXamarin;
use \OpenAPI\OpenAPI\Models\Operations\BranchConfigurationsCreateRequestBodyToolsetsXcode;
use \OpenAPI\OpenAPI\Models\Operations\BranchConfigurationsCreateRequestBodyToolsetsXcodeAppExtensionProvisioningProfileFiles;
use \OpenAPI\OpenAPI\Models\Operations\BranchConfigurationsCreateRequestBodyTriggerEnum;
use \OpenAPI\OpenAPI\Models\Operations\BranchConfigurationsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BranchConfigurationsCreateRequest();
    $request->requestBody = new BranchConfigurationsCreateRequestBody();
    $request->requestBody->artifactVersioning = new BranchConfigurationsCreateRequestBodyArtifactVersioning();
    $request->requestBody->artifactVersioning->buildNumberFormat = BranchConfigurationsCreateRequestBodyArtifactVersioningBuildNumberFormatEnum::TIMESTAMP;
    $request->requestBody->badgeIsEnabled = false;
    $request->requestBody->cloneFromBranch = 'esse';
    $request->requestBody->signed = false;
    $request->requestBody->testsEnabled = false;
    $request->requestBody->toolsets = new BranchConfigurationsCreateRequestBodyToolsets();
    $request->requestBody->toolsets->android = new BranchConfigurationsCreateRequestBodyToolsetsAndroid();
    $request->requestBody->toolsets->android->automaticSigning = false;
    $request->requestBody->toolsets->android->buildVariant = 'release';
    $request->requestBody->toolsets->android->gradleWrapperPath = 'android/gradlew';
    $request->requestBody->toolsets->android->isRoot = false;
    $request->requestBody->toolsets->android->keyAlias = 'quasi';
    $request->requestBody->toolsets->android->keyPassword = 'a';
    $request->requestBody->toolsets->android->keystoreEncoded = 'error';
    $request->requestBody->toolsets->android->keystoreFilename = 'sint';
    $request->requestBody->toolsets->android->keystorePassword = 'pariatur';
    $request->requestBody->toolsets->android->module = 'app';
    $request->requestBody->toolsets->android->runLint = false;
    $request->requestBody->toolsets->android->runTests = false;
    $request->requestBody->toolsets->javascript = new BranchConfigurationsCreateRequestBodyToolsetsJavascript();
    $request->requestBody->toolsets->javascript->packageJsonPath = 'possimus';
    $request->requestBody->toolsets->javascript->reactNativeVersion = 'quia';
    $request->requestBody->toolsets->javascript->runTests = false;
    $request->requestBody->toolsets->xamarin = new BranchConfigurationsCreateRequestBodyToolsetsXamarin();
    $request->requestBody->toolsets->xamarin->args = 'eveniet';
    $request->requestBody->toolsets->xamarin->configuration = 'asperiores';
    $request->requestBody->toolsets->xamarin->isSimBuild = false;
    $request->requestBody->toolsets->xamarin->monoVersion = 'facere';
    $request->requestBody->toolsets->xamarin->p12File = 'veritatis';
    $request->requestBody->toolsets->xamarin->p12Pwd = 'consequuntur';
    $request->requestBody->toolsets->xamarin->provProfile = 'quasi';
    $request->requestBody->toolsets->xamarin->sdkBundle = 'similique';
    $request->requestBody->toolsets->xamarin->slnPath = 'culpa';
    $request->requestBody->toolsets->xamarin->symlink = 'aliquid';
    $request->requestBody->toolsets->xcode = new BranchConfigurationsCreateRequestBodyToolsetsXcode();
    $request->requestBody->toolsets->xcode->appExtensionProvisioningProfileFiles = [
        new BranchConfigurationsCreateRequestBodyToolsetsXcodeAppExtensionProvisioningProfileFiles(),
        new BranchConfigurationsCreateRequestBodyToolsetsXcodeAppExtensionProvisioningProfileFiles(),
        new BranchConfigurationsCreateRequestBodyToolsetsXcodeAppExtensionProvisioningProfileFiles(),
        new BranchConfigurationsCreateRequestBodyToolsetsXcodeAppExtensionProvisioningProfileFiles(),
    ];
    $request->requestBody->toolsets->xcode->archiveConfiguration = 'quae';
    $request->requestBody->toolsets->xcode->automaticSigning = false;
    $request->requestBody->toolsets->xcode->cartfilePath = 'earum';
    $request->requestBody->toolsets->xcode->certificateEncoded = 'vel';
    $request->requestBody->toolsets->xcode->certificateFileId = 'in';
    $request->requestBody->toolsets->xcode->certificateFilename = 'eius';
    $request->requestBody->toolsets->xcode->certificatePassword = 'libero';
    $request->requestBody->toolsets->xcode->certificateUploadId = 'illum';
    $request->requestBody->toolsets->xcode->forceLegacyBuildSystem = false;
    $request->requestBody->toolsets->xcode->podfilePath = 'soluta';
    $request->requestBody->toolsets->xcode->projectOrWorkspacePath = 'accusantium';
    $request->requestBody->toolsets->xcode->provisioningProfileEncoded = 'aliquam';
    $request->requestBody->toolsets->xcode->provisioningProfileFileId = 'sapiente';
    $request->requestBody->toolsets->xcode->provisioningProfileFilename = 'dicta';
    $request->requestBody->toolsets->xcode->provisioningProfileUploadId = 'ullam';
    $request->requestBody->toolsets->xcode->scheme = 'reprehenderit';
    $request->requestBody->toolsets->xcode->targetToArchive = 'ullam';
    $request->requestBody->toolsets->xcode->teamId = 'nisi';
    $request->requestBody->toolsets->xcode->xcodeProjectSha = 'aut';
    $request->requestBody->toolsets->xcode->xcodeVersion = 'voluptatum';
    $request->requestBody->trigger = BranchConfigurationsCreateRequestBodyTriggerEnum::CONTINOUS;
    $request->appName = 'quibusdam';
    $request->branch = 'ex';
    $request->ownerName = 'deleniti';

    $requestSecurity = new BranchConfigurationsCreateSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->build->branchConfigurationsCreate($request, $requestSecurity);

    if ($response->branchConfigurationsCreate200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## branchConfigurationsDelete

Deletes the branch build configuration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BranchConfigurationsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\BranchConfigurationsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BranchConfigurationsDeleteRequest();
    $request->requestBody = [
        'dolorum' => 'architecto',
        'omnis' => 'tenetur',
        'quasi' => 'at',
        'et' => 'voluptate',
    ];
    $request->appName = 'ipsa';
    $request->branch = 'minima';
    $request->ownerName = 'veritatis';

    $requestSecurity = new BranchConfigurationsDeleteSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->build->branchConfigurationsDelete($request, $requestSecurity);

    if ($response->branchConfigurationsDelete200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## branchConfigurationsGet

Gets the branch configuration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BranchConfigurationsGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\BranchConfigurationsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BranchConfigurationsGetRequest();
    $request->appName = 'consectetur';
    $request->branch = 'adipisci';
    $request->ownerName = 'iste';

    $requestSecurity = new BranchConfigurationsGetSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->build->branchConfigurationsGet($request, $requestSecurity);

    if ($response->branchConfigurationsGet200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## branchConfigurationsUpdate

Reconfigures the branch for build

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BranchConfigurationsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\BranchConfigurationsUpdateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\BranchConfigurationsUpdateRequestBodyArtifactVersioning;
use \OpenAPI\OpenAPI\Models\Operations\BranchConfigurationsUpdateRequestBodyArtifactVersioningBuildNumberFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\BranchConfigurationsUpdateRequestBodyToolsets;
use \OpenAPI\OpenAPI\Models\Operations\BranchConfigurationsUpdateRequestBodyToolsetsAndroid;
use \OpenAPI\OpenAPI\Models\Operations\BranchConfigurationsUpdateRequestBodyToolsetsJavascript;
use \OpenAPI\OpenAPI\Models\Operations\BranchConfigurationsUpdateRequestBodyToolsetsXamarin;
use \OpenAPI\OpenAPI\Models\Operations\BranchConfigurationsUpdateRequestBodyToolsetsXcode;
use \OpenAPI\OpenAPI\Models\Operations\BranchConfigurationsUpdateRequestBodyToolsetsXcodeAppExtensionProvisioningProfileFiles;
use \OpenAPI\OpenAPI\Models\Operations\BranchConfigurationsUpdateRequestBodyTriggerEnum;
use \OpenAPI\OpenAPI\Models\Operations\BranchConfigurationsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BranchConfigurationsUpdateRequest();
    $request->requestBody = new BranchConfigurationsUpdateRequestBody();
    $request->requestBody->artifactVersioning = new BranchConfigurationsUpdateRequestBodyArtifactVersioning();
    $request->requestBody->artifactVersioning->buildNumberFormat = BranchConfigurationsUpdateRequestBodyArtifactVersioningBuildNumberFormatEnum::TIMESTAMP;
    $request->requestBody->badgeIsEnabled = false;
    $request->requestBody->cloneFromBranch = 'accusantium';
    $request->requestBody->signed = false;
    $request->requestBody->testsEnabled = false;
    $request->requestBody->toolsets = new BranchConfigurationsUpdateRequestBodyToolsets();
    $request->requestBody->toolsets->android = new BranchConfigurationsUpdateRequestBodyToolsetsAndroid();
    $request->requestBody->toolsets->android->automaticSigning = false;
    $request->requestBody->toolsets->android->buildVariant = 'release';
    $request->requestBody->toolsets->android->gradleWrapperPath = 'android/gradlew';
    $request->requestBody->toolsets->android->isRoot = false;
    $request->requestBody->toolsets->android->keyAlias = 'rem';
    $request->requestBody->toolsets->android->keyPassword = 'aut';
    $request->requestBody->toolsets->android->keystoreEncoded = 'laudantium';
    $request->requestBody->toolsets->android->keystoreFilename = 'eum';
    $request->requestBody->toolsets->android->keystorePassword = 'mollitia';
    $request->requestBody->toolsets->android->module = 'app';
    $request->requestBody->toolsets->android->runLint = false;
    $request->requestBody->toolsets->android->runTests = false;
    $request->requestBody->toolsets->javascript = new BranchConfigurationsUpdateRequestBodyToolsetsJavascript();
    $request->requestBody->toolsets->javascript->packageJsonPath = 'ab';
    $request->requestBody->toolsets->javascript->reactNativeVersion = 'corrupti';
    $request->requestBody->toolsets->javascript->runTests = false;
    $request->requestBody->toolsets->xamarin = new BranchConfigurationsUpdateRequestBodyToolsetsXamarin();
    $request->requestBody->toolsets->xamarin->args = 'non';
    $request->requestBody->toolsets->xamarin->configuration = 'voluptatem';
    $request->requestBody->toolsets->xamarin->isSimBuild = false;
    $request->requestBody->toolsets->xamarin->monoVersion = 'dolor';
    $request->requestBody->toolsets->xamarin->p12File = 'occaecati';
    $request->requestBody->toolsets->xamarin->p12Pwd = 'numquam';
    $request->requestBody->toolsets->xamarin->provProfile = 'impedit';
    $request->requestBody->toolsets->xamarin->sdkBundle = 'explicabo';
    $request->requestBody->toolsets->xamarin->slnPath = 'voluptas';
    $request->requestBody->toolsets->xamarin->symlink = 'aut';
    $request->requestBody->toolsets->xcode = new BranchConfigurationsUpdateRequestBodyToolsetsXcode();
    $request->requestBody->toolsets->xcode->appExtensionProvisioningProfileFiles = [
        new BranchConfigurationsUpdateRequestBodyToolsetsXcodeAppExtensionProvisioningProfileFiles(),
        new BranchConfigurationsUpdateRequestBodyToolsetsXcodeAppExtensionProvisioningProfileFiles(),
    ];
    $request->requestBody->toolsets->xcode->archiveConfiguration = 'dicta';
    $request->requestBody->toolsets->xcode->automaticSigning = false;
    $request->requestBody->toolsets->xcode->cartfilePath = 'maiores';
    $request->requestBody->toolsets->xcode->certificateEncoded = 'natus';
    $request->requestBody->toolsets->xcode->certificateFileId = 'velit';
    $request->requestBody->toolsets->xcode->certificateFilename = 'voluptatibus';
    $request->requestBody->toolsets->xcode->certificatePassword = 'voluptas';
    $request->requestBody->toolsets->xcode->certificateUploadId = 'asperiores';
    $request->requestBody->toolsets->xcode->forceLegacyBuildSystem = false;
    $request->requestBody->toolsets->xcode->podfilePath = 'aperiam';
    $request->requestBody->toolsets->xcode->projectOrWorkspacePath = 'ea';
    $request->requestBody->toolsets->xcode->provisioningProfileEncoded = 'quaerat';
    $request->requestBody->toolsets->xcode->provisioningProfileFileId = 'consequuntur';
    $request->requestBody->toolsets->xcode->provisioningProfileFilename = 'repellendus';
    $request->requestBody->toolsets->xcode->provisioningProfileUploadId = 'officia';
    $request->requestBody->toolsets->xcode->scheme = 'maxime';
    $request->requestBody->toolsets->xcode->targetToArchive = 'dignissimos';
    $request->requestBody->toolsets->xcode->teamId = 'officia';
    $request->requestBody->toolsets->xcode->xcodeProjectSha = 'asperiores';
    $request->requestBody->toolsets->xcode->xcodeVersion = 'nemo';
    $request->requestBody->trigger = BranchConfigurationsUpdateRequestBodyTriggerEnum::CONTINOUS;
    $request->appName = 'quaerat';
    $request->branch = 'porro';
    $request->ownerName = 'quod';

    $requestSecurity = new BranchConfigurationsUpdateSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->build->branchConfigurationsUpdate($request, $requestSecurity);

    if ($response->branchConfigurationsUpdate200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## buildConfigurationsGet

Gets the build configuration in Azure pipeline YAML format

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BuildConfigurationsGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\BuildConfigurationsGetFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\BuildConfigurationsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BuildConfigurationsGetRequest();
    $request->appName = 'labore';
    $request->branch = 'ab';
    $request->format = BuildConfigurationsGetFormatEnum::YAML;
    $request->ownerName = 'fuga';

    $requestSecurity = new BuildConfigurationsGetSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->build->buildConfigurationsGet($request, $requestSecurity);

    if ($response->buildConfigurationsGet200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## buildsCreate

Create a build

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BuildsCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\BuildsCreateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\BuildsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BuildsCreateRequest();
    $request->requestBody = new BuildsCreateRequestBody();
    $request->requestBody->debug = false;
    $request->requestBody->sourceVersion = 'id';
    $request->appName = 'suscipit';
    $request->branch = 'velit';
    $request->ownerName = 'culpa';

    $requestSecurity = new BuildsCreateSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->build->buildsCreate($request, $requestSecurity);

    if ($response->buildsCreate200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## buildsDistribute

Distribute a build

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BuildsDistributeRequest;
use \OpenAPI\OpenAPI\Models\Operations\BuildsDistributeRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\BuildsDistributeRequestBodyDestinations;
use \OpenAPI\OpenAPI\Models\Operations\BuildsDistributeRequestBodyDestinationsTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\BuildsDistributeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BuildsDistributeRequest();
    $request->requestBody = new BuildsDistributeRequestBody();
    $request->requestBody->destinations = [
        new BuildsDistributeRequestBodyDestinations(),
        new BuildsDistributeRequestBodyDestinations(),
        new BuildsDistributeRequestBodyDestinations(),
    ];
    $request->requestBody->mandatoryUpdate = false;
    $request->requestBody->notifyTesters = false;
    $request->requestBody->releaseNotes = 'recusandae';
    $request->appName = 'totam';
    $request->buildId = 853940;
    $request->ownerName = 'vel';

    $requestSecurity = new BuildsDistributeSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->build->buildsDistribute($request, $requestSecurity);

    if ($response->buildsDistribute200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## buildsGet

Returns the build detail for the given build ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BuildsGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\BuildsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BuildsGetRequest();
    $request->appName = 'ducimus';
    $request->buildId = 554688;
    $request->ownerName = 'vel';

    $requestSecurity = new BuildsGetSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->build->buildsGet($request, $requestSecurity);

    if ($response->buildsGet200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## buildsGetDownloadUri

Gets the download URI

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BuildsGetDownloadUriRequest;
use \OpenAPI\OpenAPI\Models\Operations\BuildsGetDownloadUriDownloadTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\BuildsGetDownloadUriSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BuildsGetDownloadUriRequest();
    $request->appName = 'labore';
    $request->buildId = 822560;
    $request->downloadType = BuildsGetDownloadUriDownloadTypeEnum::MAPPING;
    $request->ownerName = 'cum';

    $requestSecurity = new BuildsGetDownloadUriSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->build->buildsGetDownloadUri($request, $requestSecurity);

    if ($response->buildsGetDownloadUri200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## buildsGetLog

Get the build log

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BuildsGetLogRequest;
use \OpenAPI\OpenAPI\Models\Operations\BuildsGetLogSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BuildsGetLogRequest();
    $request->appName = 'commodi';
    $request->buildId = 447144;
    $request->ownerName = 'corporis';

    $requestSecurity = new BuildsGetLogSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->build->buildsGetLog($request, $requestSecurity);

    if ($response->buildsGetLog200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## buildsGetStatusByAppId

Application specific build service status

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BuildsGetStatusByAppIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\BuildsGetStatusByAppIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BuildsGetStatusByAppIdRequest();
    $request->appName = 'reiciendis';
    $request->ownerName = 'assumenda';

    $requestSecurity = new BuildsGetStatusByAppIdSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->build->buildsGetStatusByAppId($request, $requestSecurity);

    if ($response->buildsGetStatusByAppId200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## buildsListBranches

Returns the list of Git branches for this application

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BuildsListBranchesRequest;
use \OpenAPI\OpenAPI\Models\Operations\BuildsListBranchesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BuildsListBranchesRequest();
    $request->appName = 'nemo';
    $request->ownerName = 'recusandae';

    $requestSecurity = new BuildsListBranchesSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->build->buildsListBranches($request, $requestSecurity);

    if ($response->buildsListBranches200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## buildsListByBranch

Returns the list of builds for the branch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BuildsListByBranchRequest;
use \OpenAPI\OpenAPI\Models\Operations\BuildsListByBranchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BuildsListByBranchRequest();
    $request->appName = 'aliquid';
    $request->branch = 'aperiam';
    $request->ownerName = 'cum';

    $requestSecurity = new BuildsListByBranchSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->build->buildsListByBranch($request, $requestSecurity);

    if ($response->buildsListByBranch200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## buildsListToolsetProjects

Returns the projects in the repository for the branch, for all toolsets

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BuildsListToolsetProjectsRequest;
use \OpenAPI\OpenAPI\Models\Operations\BuildsListToolsetProjectsOsEnum;
use \OpenAPI\OpenAPI\Models\Operations\BuildsListToolsetProjectsPlatformEnum;
use \OpenAPI\OpenAPI\Models\Operations\BuildsListToolsetProjectsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BuildsListToolsetProjectsRequest();
    $request->appName = 'consectetur';
    $request->branch = 'in';
    $request->maxSearchDepth = 348519;
    $request->os = BuildsListToolsetProjectsOsEnum::MAC_OS;
    $request->ownerName = 'facere';
    $request->platform = BuildsListToolsetProjectsPlatformEnum::REACT_NATIVE;

    $requestSecurity = new BuildsListToolsetProjectsSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->build->buildsListToolsetProjects($request, $requestSecurity);

    if ($response->buildsListToolsetProjects200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## buildsListToolsets

Returns available toolsets for application

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BuildsListToolsetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\BuildsListToolsetsToolsEnum;
use \OpenAPI\OpenAPI\Models\Operations\BuildsListToolsetsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BuildsListToolsetsRequest();
    $request->appName = 'doloribus';
    $request->ownerName = 'suscipit';
    $request->tools = BuildsListToolsetsToolsEnum::NODE;

    $requestSecurity = new BuildsListToolsetsSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->build->buildsListToolsets($request, $requestSecurity);

    if ($response->buildsListToolsets200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~buildsListXamarinSDKBundles~~

Gets the Xamarin SDK bundles available to this app

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BuildsListXamarinSDKBundlesRequest;
use \OpenAPI\OpenAPI\Models\Operations\BuildsListXamarinSDKBundlesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BuildsListXamarinSDKBundlesRequest();
    $request->appName = 'quidem';
    $request->ownerName = 'saepe';

    $requestSecurity = new BuildsListXamarinSDKBundlesSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->build->buildsListXamarinSDKBundles($request, $requestSecurity);

    if ($response->buildsListXamarinSDKBundles200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~buildsListXcodeVersions~~

Gets the Xcode versions available to this app

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BuildsListXcodeVersionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\BuildsListXcodeVersionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BuildsListXcodeVersionsRequest();
    $request->appName = 'necessitatibus';
    $request->ownerName = 'dolore';

    $requestSecurity = new BuildsListXcodeVersionsSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->build->buildsListXcodeVersions($request, $requestSecurity);

    if ($response->buildsListXcodeVersions200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## buildsUpdate

Cancels a build

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BuildsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\BuildsUpdateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\BuildsUpdateRequestBodyStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\BuildsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BuildsUpdateRequest();
    $request->requestBody = new BuildsUpdateRequestBody();
    $request->requestBody->status = BuildsUpdateRequestBodyStatusEnum::CANCELLING;
    $request->appName = 'sunt';
    $request->buildId = 992012;
    $request->ownerName = 'adipisci';

    $requestSecurity = new BuildsUpdateSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->build->buildsUpdate($request, $requestSecurity);

    if ($response->buildsUpdate200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## buildsWebhook

Public webhook sink

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        'amet' => 'beatae',
    ]

    $response = $sdk->build->buildsWebhook($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## commitsListByShaList

Returns commit information for a batch of shas

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CommitsListByShaListRequest;
use \OpenAPI\OpenAPI\Models\Operations\CommitsListByShaListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CommitsListByShaListRequest();
    $request->appName = 'dignissimos';
    $request->hashes = [
        'debitis',
        'consectetur',
        'corporis',
        'harum',
    ];
    $request->ownerName = 'laboriosam';

    $requestSecurity = new CommitsListByShaListSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->build->commitsListByShaList($request, $requestSecurity);

    if ($response->commitsListByShaList200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fileAssetsCreate

Create a new asset to upload a file

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FileAssetsCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\FileAssetsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FileAssetsCreateRequest();
    $request->requestBody = [
        'voluptates' => 'libero',
    ];
    $request->appName = 'vitae';
    $request->ownerName = 'accusamus';

    $requestSecurity = new FileAssetsCreateSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->build->fileAssetsCreate($request, $requestSecurity);

    if ($response->fileAssetsCreate200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## repositoriesList

Gets the repositories available from the source code host

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RepositoriesListRequest;
use \OpenAPI\OpenAPI\Models\Operations\RepositoriesListFormEnum;
use \OpenAPI\OpenAPI\Models\Operations\RepositoriesListSourceHostEnum;
use \OpenAPI\OpenAPI\Models\Operations\RepositoriesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RepositoriesListRequest();
    $request->appName = 'similique';
    $request->form = RepositoriesListFormEnum::LITE;
    $request->ownerName = 'aspernatur';
    $request->serviceConnectionId = 'voluptas';
    $request->sourceHost = RepositoriesListSourceHostEnum::BITBUCKET;
    $request->vstsAccountName = 'voluptas';
    $request->vstsProjectId = 'minima';

    $requestSecurity = new RepositoriesListSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->build->repositoriesList($request, $requestSecurity);

    if ($response->repositoriesList200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## repositoryConfigurationsCreateOrUpdate

Configures the repository for build

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RepositoryConfigurationsCreateOrUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\RepositoryConfigurationsCreateOrUpdateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\RepositoryConfigurationsCreateOrUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RepositoryConfigurationsCreateOrUpdateRequest();
    $request->requestBody = new RepositoryConfigurationsCreateOrUpdateRequestBody();
    $request->requestBody->externalUserId = 'nobis';
    $request->requestBody->installationId = 'dolorum';
    $request->requestBody->repoId = 'adipisci';
    $request->requestBody->repoUrl = 'https://github.com/foo/bar.git';
    $request->requestBody->serviceConnectionId = 'minus';
    $request->appName = 'dolores';
    $request->ownerName = 'blanditiis';

    $requestSecurity = new RepositoryConfigurationsCreateOrUpdateSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->build->repositoryConfigurationsCreateOrUpdate($request, $requestSecurity);

    if ($response->repositoryConfigurationsCreateOrUpdate200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## repositoryConfigurationsDelete

Removes the configuration for the repository

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RepositoryConfigurationsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\RepositoryConfigurationsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RepositoryConfigurationsDeleteRequest();
    $request->appName = 'in';
    $request->ownerName = 'dolore';

    $requestSecurity = new RepositoryConfigurationsDeleteSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->build->repositoryConfigurationsDelete($request, $requestSecurity);

    if ($response->repositoryConfigurationsDelete200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## repositoryConfigurationsList

Returns the repository build configuration status of the app

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RepositoryConfigurationsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\RepositoryConfigurationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RepositoryConfigurationsListRequest();
    $request->appName = 'aliquam';
    $request->includeInactive = false;
    $request->ownerName = 'officiis';

    $requestSecurity = new RepositoryConfigurationsListSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->build->repositoryConfigurationsList($request, $requestSecurity);

    if ($response->repositoryConfigurationsList200ApplicationJSONAnies !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
