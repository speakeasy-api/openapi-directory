# SDK

## Overview

An AWS Elemental MediaStore asset is an object, similar to an object in the Amazon S3 service. Objects are the fundamental entities that are stored in AWS Elemental MediaStore.

Amazon Web Services documentation
<https://docs.aws.amazon.com/mediastore/>
### Available Operations

* [deleteObject](#deleteobject) - Deletes an object at the specified path.
* [describeObject](#describeobject) - Gets the headers for an object at the specified path.
* [getObject](#getobject) - Downloads the object at the specified path. If the object’s upload availability is set to <code>streaming</code>, AWS Elemental MediaStore downloads the object even if it’s still uploading the object.
* [listItems](#listitems) - Provides a list of metadata entries about folders and objects in the specified folder.
* [putObject](#putobject) - Uploads an object to the specified path. Object sizes are limited to 25 MB for standard upload availability and 10 MB for streaming upload availability.

## deleteObject

Deletes an object at the specified path.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteObjectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteObjectRequest();
    $request->path = 'vel';
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'ipsa';

    $response = $sdk->sdk->deleteObject($request);

    if ($response->deleteObjectResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeObject

Gets the headers for an object at the specified path.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeObjectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeObjectRequest();
    $request->path = 'delectus';
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'minus';
    $request->xAmzSecurityToken = 'placeat';
    $request->xAmzSignature = 'voluptatum';
    $request->xAmzSignedHeaders = 'iusto';

    $response = $sdk->sdk->describeObject($request);

    if ($response->describeObjectResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getObject

Downloads the object at the specified path. If the object’s upload availability is set to <code>streaming</code>, AWS Elemental MediaStore downloads the object even if it’s still uploading the object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetObjectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetObjectRequest();
    $request->path = 'excepturi';
    $request->range = 'nisi';
    $request->xAmzAlgorithm = 'recusandae';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'perferendis';

    $response = $sdk->sdk->getObject($request);

    if ($response->getObjectResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listItems

Provides a list of metadata entries about folders and objects in the specified folder.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListItemsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListItemsRequest();
    $request->maxResults = 368241;
    $request->nextToken = 'repellendus';
    $request->path = 'sapiente';
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'odit';
    $request->xAmzCredential = 'at';
    $request->xAmzDate = 'at';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'quod';

    $response = $sdk->sdk->listItems($request);

    if ($response->listItemsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putObject

Uploads an object to the specified path. Object sizes are limited to 25 MB for standard upload availability and 10 MB for streaming upload availability.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutObjectRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutObjectRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PutObjectXAmzStorageClassEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutObjectXAmzUploadAvailabilityEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutObjectRequest();
    $request->cacheControl = 'quod';
    $request->contentType = 'esse';
    $request->path = 'totam';
    $request->requestBody = new PutObjectRequestBody();
    $request->requestBody->body = 'porro';
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'deleniti';
    $request->xAmzStorageClass = PutObjectXAmzStorageClassEnum::TEMPORAL;
    $request->xAmzUploadAvailability = PutObjectXAmzUploadAvailabilityEnum::STREAMING;

    $response = $sdk->sdk->putObject($request);

    if ($response->putObjectResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
