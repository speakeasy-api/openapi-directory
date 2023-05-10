# SDK

## Overview

 AWS Mobile Service provides mobile app and website developers with capabilities required to configure AWS resources and bootstrap their developer desktop projects with the necessary SDKs, constants, tools and samples to make use of those resources. 

Amazon Web Services documentation
<https://docs.aws.amazon.com/mobile/>
### Available Operations

* [createProject](#createproject) -  Creates an AWS Mobile Hub project. 
* [deleteProject](#deleteproject) -  Delets a project in AWS Mobile Hub. 
* [describeBundle](#describebundle) -  Get the bundle details for the requested bundle id. 
* [describeProject](#describeproject) -  Gets details about a project in AWS Mobile Hub. 
* [exportBundle](#exportbundle) -  Generates customized software development kit (SDK) and or tool packages used to integrate mobile web or mobile app clients with backend AWS resources. 
* [exportProject](#exportproject) -  Exports project configuration to a snapshot which can be downloaded and shared. Note that mobile app push credentials are encrypted in exported projects, so they can only be shared successfully within the same AWS account. 
* [listBundles](#listbundles) -  List all available bundles. 
* [listProjects](#listprojects) -  Lists projects in AWS Mobile Hub. 
* [updateProject](#updateproject) -  Update an existing project. 

## createProject

 Creates an AWS Mobile Hub project. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateProjectRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateProjectRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateProjectRequest();
    $request->requestBody = new CreateProjectRequestBody();
    $request->requestBody->contents = 'ipsa';
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'minus';
    $request->xAmzSignature = 'placeat';
    $request->xAmzSignedHeaders = 'voluptatum';
    $request->name = 'Miriam Huel';
    $request->region = 'ab';
    $request->snapshotId = 'quis';

    $response = $sdk->sdk->createProject($request);

    if ($response->createProjectResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteProject

 Delets a project in AWS Mobile Hub. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProjectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteProjectRequest();
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'repellendus';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'quo';
    $request->projectId = 'odit';

    $response = $sdk->sdk->deleteProject($request);

    if ($response->deleteProjectResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeBundle

 Get the bundle details for the requested bundle id. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeBundleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeBundleRequest();
    $request->xAmzAlgorithm = 'at';
    $request->xAmzContentSha256 = 'at';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'quod';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'esse';
    $request->bundleId = 'totam';

    $response = $sdk->sdk->describeBundle($request);

    if ($response->describeBundleResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeProject

 Gets details about a project in AWS Mobile Hub. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeProjectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeProjectRequest();
    $request->xAmzAlgorithm = 'porro';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'nam';
    $request->xAmzSecurityToken = 'officia';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'fugit';
    $request->projectId = 'deleniti';
    $request->syncFromResources = false;

    $response = $sdk->sdk->describeProject($request);

    if ($response->describeProjectResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportBundle

 Generates customized software development kit (SDK) and or tool packages used to integrate mobile web or mobile app clients with backend AWS resources. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ExportBundleRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExportBundlePlatformEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportBundleRequest();
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'optio';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'beatae';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'modi';
    $request->bundleId = 'qui';
    $request->platform = ExportBundlePlatformEnum::ANDROID;
    $request->projectId = 'cum';

    $response = $sdk->sdk->exportBundle($request);

    if ($response->exportBundleResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportProject

 Exports project configuration to a snapshot which can be downloaded and shared. Note that mobile app push credentials are encrypted in exported projects, so they can only be shared successfully within the same AWS account. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ExportProjectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportProjectRequest();
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'ad';
    $request->xAmzSignedHeaders = 'natus';
    $request->projectId = 'sed';

    $response = $sdk->sdk->exportProject($request);

    if ($response->exportProjectResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listBundles

 List all available bundles. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListBundlesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListBundlesRequest();
    $request->xAmzAlgorithm = 'iste';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'laboriosam';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'fuga';
    $request->maxResults = 449950;
    $request->nextToken = 'corporis';

    $response = $sdk->sdk->listBundles($request);

    if ($response->listBundlesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listProjects

 Lists projects in AWS Mobile Hub. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListProjectsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListProjectsRequest();
    $request->xAmzAlgorithm = 'iste';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->maxResults = 666767;
    $request->nextToken = 'mollitia';

    $response = $sdk->sdk->listProjects($request);

    if ($response->listProjectsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateProject

 Update an existing project. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProjectRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProjectRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateProjectRequest();
    $request->requestBody = new UpdateProjectRequestBody();
    $request->requestBody->contents = 'laborum';
    $request->xAmzAlgorithm = 'dolores';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'omnis';
    $request->projectId = 'nemo';

    $response = $sdk->sdk->updateProject($request);

    if ($response->updateProjectResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
