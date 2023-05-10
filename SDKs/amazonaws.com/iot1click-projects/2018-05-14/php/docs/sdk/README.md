# SDK

## Overview

The AWS IoT 1-Click Projects API Reference

Amazon Web Services documentation
<https://docs.aws.amazon.com/iot1click/>
### Available Operations

* [associateDeviceWithPlacement](#associatedevicewithplacement) - Associates a physical device with a placement.
* [createPlacement](#createplacement) - Creates an empty placement.
* [createProject](#createproject) - Creates an empty project with a placement template. A project contains zero or more placements that adhere to the placement template defined in the project.
* [deletePlacement](#deleteplacement) - <p>Deletes a placement. To delete a placement, it must not have any devices associated with it.</p> <note> <p>When you delete a placement, all associated data becomes irretrievable.</p> </note>
* [deleteProject](#deleteproject) - <p>Deletes a project. To delete a project, it must not have any placements associated with it.</p> <note> <p>When you delete a project, all associated data becomes irretrievable.</p> </note>
* [describePlacement](#describeplacement) - Describes a placement in a project.
* [describeProject](#describeproject) - Returns an object describing a project.
* [disassociateDeviceFromPlacement](#disassociatedevicefromplacement) - Removes a physical device from a placement.
* [getDevicesInPlacement](#getdevicesinplacement) - Returns an object enumerating the devices in a placement.
* [listPlacements](#listplacements) - Lists the placement(s) of a project.
* [listProjects](#listprojects) - Lists the AWS IoT 1-Click project(s) associated with your AWS account and region.
* [listTagsForResource](#listtagsforresource) - Lists the tags (metadata key/value pairs) which you have assigned to the resource.
* [tagResource](#tagresource) - Creates or modifies tags for a resource. Tags are key/value pairs (metadata) that can be used to manage a resource. For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS Tagging Strategies</a>.
* [untagResource](#untagresource) - Removes one or more tags (metadata key/value pairs) from a resource.
* [updatePlacement](#updateplacement) - Updates a placement with the given attributes. To clear an attribute, pass an empty value (i.e., "").
* [updateProject](#updateproject) - Updates a project associated with your AWS account and region. With the exception of device template names, you can pass just the values that need to be updated because the update request will change only the values that are provided. To clear a value, pass the empty string (i.e., <code>""</code>).

## associateDeviceWithPlacement

Associates a physical device with a placement.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateDeviceWithPlacementRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateDeviceWithPlacementRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateDeviceWithPlacementRequest();
    $request->requestBody = new AssociateDeviceWithPlacementRequestBody();
    $request->requestBody->deviceId = 'suscipit';
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'debitis';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'tempora';
    $request->xAmzSignedHeaders = 'suscipit';
    $request->deviceTemplateName = 'molestiae';
    $request->placementName = 'minus';
    $request->projectName = 'placeat';

    $response = $sdk->sdk->associateDeviceWithPlacement($request);

    if ($response->associateDeviceWithPlacementResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPlacement

Creates an empty placement.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreatePlacementRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreatePlacementRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePlacementRequest();
    $request->requestBody = new CreatePlacementRequestBody();
    $request->requestBody->attributes = [
        'iusto' => 'excepturi',
        'nisi' => 'recusandae',
        'temporibus' => 'ab',
    ];
    $request->requestBody->placementName = 'quis';
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'repellendus';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'quo';
    $request->projectName = 'odit';

    $response = $sdk->sdk->createPlacement($request);

    if ($response->createPlacementResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createProject

Creates an empty project with a placement template. A project contains zero or more placements that adhere to the placement template defined in the project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateProjectRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateProjectRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateProjectRequestBodyPlacementTemplate;
use \OpenAPI\OpenAPI\Models\Shared\DeviceTemplate;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateProjectRequest();
    $request->requestBody = new CreateProjectRequestBody();
    $request->requestBody->description = 'at';
    $request->requestBody->placementTemplate = new CreateProjectRequestBodyPlacementTemplate();
    $request->requestBody->placementTemplate->defaultAttributes = [
        'maiores' => 'molestiae',
        'quod' => 'quod',
        'esse' => 'totam',
        'porro' => 'dolorum',
    ];
    $request->requestBody->placementTemplate->deviceTemplates = [
        'nam' => new DeviceTemplate(),
    ];
    $request->requestBody->projectName = 'officia';
    $request->requestBody->tags = [
        'fugit' => 'deleniti',
        'hic' => 'optio',
        'totam' => 'beatae',
    ];
    $request->xAmzAlgorithm = 'commodi';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'modi';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'esse';

    $response = $sdk->sdk->createProject($request);

    if ($response->createProjectResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePlacement

<p>Deletes a placement. To delete a placement, it must not have any devices associated with it.</p> <note> <p>When you delete a placement, all associated data becomes irretrievable.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletePlacementRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePlacementRequest();
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'ad';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'sed';
    $request->placementName = 'iste';
    $request->projectName = 'dolor';

    $response = $sdk->sdk->deletePlacement($request);

    if ($response->deletePlacementResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteProject

<p>Deletes a project. To delete a project, it must not have any placements associated with it.</p> <note> <p>When you delete a project, all associated data becomes irretrievable.</p> </note>

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
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'laboriosam';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'fuga';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'corporis';
    $request->projectName = 'iste';

    $response = $sdk->sdk->deleteProject($request);

    if ($response->deleteProjectResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describePlacement

Describes a placement in a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribePlacementRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribePlacementRequest();
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'est';
    $request->placementName = 'mollitia';
    $request->projectName = 'laborum';

    $response = $sdk->sdk->describePlacement($request);

    if ($response->describePlacementResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeProject

Returns an object describing a project.

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
    $request->xAmzAlgorithm = 'dolores';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'omnis';
    $request->projectName = 'nemo';

    $response = $sdk->sdk->describeProject($request);

    if ($response->describeProjectResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateDeviceFromPlacement

Removes a physical device from a placement.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateDeviceFromPlacementRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateDeviceFromPlacementRequest();
    $request->xAmzAlgorithm = 'minima';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'culpa';
    $request->xAmzSignature = 'doloribus';
    $request->xAmzSignedHeaders = 'sapiente';
    $request->deviceTemplateName = 'architecto';
    $request->placementName = 'mollitia';
    $request->projectName = 'dolorem';

    $response = $sdk->sdk->disassociateDeviceFromPlacement($request);

    if ($response->disassociateDeviceFromPlacementResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDevicesInPlacement

Returns an object enumerating the devices in a placement.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDevicesInPlacementRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDevicesInPlacementRequest();
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'repellat';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'numquam';
    $request->xAmzSignedHeaders = 'commodi';
    $request->placementName = 'quam';
    $request->projectName = 'molestiae';

    $response = $sdk->sdk->getDevicesInPlacement($request);

    if ($response->getDevicesInPlacementResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPlacements

Lists the placement(s) of a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPlacementsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPlacementsRequest();
    $request->xAmzAlgorithm = 'velit';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'quia';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'vitae';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'animi';
    $request->maxResults = 317202;
    $request->nextToken = 'odit';
    $request->projectName = 'quo';

    $response = $sdk->sdk->listPlacements($request);

    if ($response->listPlacementsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listProjects

Lists the AWS IoT 1-Click project(s) associated with your AWS account and region.

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
    $request->xAmzAlgorithm = 'sequi';
    $request->xAmzContentSha256 = 'tenetur';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'possimus';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'quasi';
    $request->maxResults = 622846;
    $request->nextToken = 'temporibus';

    $response = $sdk->sdk->listProjects($request);

    if ($response->listProjectsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Lists the tags (metadata key/value pairs) which you have assigned to the resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'praesentium';
    $request->resourceArn = 'voluptatibus';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Creates or modifies tags for a resource. Tags are key/value pairs (metadata) that can be used to manage a resource. For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS Tagging Strategies</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->requestBody = new TagResourceRequestBody();
    $request->requestBody->tags = [
        'omnis' => 'voluptate',
    ];
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'doloremque';
    $request->xAmzDate = 'reprehenderit';
    $request->xAmzSecurityToken = 'ut';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'dicta';
    $request->resourceArn = 'corporis';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes one or more tags (metadata key/value pairs) from a resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->xAmzAlgorithm = 'dolore';
    $request->xAmzContentSha256 = 'iusto';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'harum';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'commodi';
    $request->resourceArn = 'repudiandae';
    $request->tagKeys = [
        'ipsum',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePlacement

Updates a placement with the given attributes. To clear an attribute, pass an empty value (i.e., "").

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePlacementRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePlacementRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePlacementRequest();
    $request->requestBody = new UpdatePlacementRequestBody();
    $request->requestBody->attributes = [
        'molestias' => 'excepturi',
        'pariatur' => 'modi',
        'praesentium' => 'rem',
    ];
    $request->xAmzAlgorithm = 'voluptates';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'repudiandae';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'itaque';
    $request->xAmzSignedHeaders = 'incidunt';
    $request->placementName = 'enim';
    $request->projectName = 'consequatur';

    $response = $sdk->sdk->updatePlacement($request);

    if ($response->updatePlacementResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateProject

Updates a project associated with your AWS account and region. With the exception of device template names, you can pass just the values that need to be updated because the update request will change only the values that are provided. To clear a value, pass the empty string (i.e., <code>""</code>).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProjectRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProjectRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProjectRequestBodyPlacementTemplate;
use \OpenAPI\OpenAPI\Models\Shared\DeviceTemplate;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateProjectRequest();
    $request->requestBody = new UpdateProjectRequestBody();
    $request->requestBody->description = 'est';
    $request->requestBody->placementTemplate = new UpdateProjectRequestBodyPlacementTemplate();
    $request->requestBody->placementTemplate->defaultAttributes = [
        'explicabo' => 'deserunt',
        'distinctio' => 'quibusdam',
        'labore' => 'modi',
        'qui' => 'aliquid',
    ];
    $request->requestBody->placementTemplate->deviceTemplates = [
        'quos' => new DeviceTemplate(),
        'perferendis' => new DeviceTemplate(),
        'magni' => new DeviceTemplate(),
    ];
    $request->xAmzAlgorithm = 'assumenda';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'alias';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'tempora';
    $request->projectName = 'facilis';

    $response = $sdk->sdk->updateProject($request);

    if ($response->updateProjectResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
