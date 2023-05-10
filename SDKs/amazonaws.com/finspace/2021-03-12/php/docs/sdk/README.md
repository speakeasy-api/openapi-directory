# SDK

## Overview

The FinSpace management service provides the APIs for managing FinSpace environments.

Amazon Web Services documentation
<https://docs.aws.amazon.com/finspace/>
### Available Operations

* [createEnvironment](#createenvironment) - Create a new FinSpace environment.
* [deleteEnvironment](#deleteenvironment) - Delete an FinSpace environment.
* [getEnvironment](#getenvironment) - Returns the FinSpace environment object.
* [listEnvironments](#listenvironments) - A list of all of your FinSpace environments.
* [listTagsForResource](#listtagsforresource) - A list of all tags for a resource.
* [tagResource](#tagresource) - Adds metadata tags to a FinSpace resource.
* [untagResource](#untagresource) - Removes metadata tags from a FinSpace resource.
* [updateEnvironment](#updateenvironment) - Update your FinSpace environment.

## createEnvironment

Create a new FinSpace environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateEnvironmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateEnvironmentRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateEnvironmentRequestBodyFederationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateEnvironmentRequestBodyFederationParameters;
use \OpenAPI\OpenAPI\Models\Operations\CreateEnvironmentRequestBodySuperuserParameters;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateEnvironmentRequest();
    $request->requestBody = new CreateEnvironmentRequestBody();
    $request->requestBody->dataBundles = [
        'quod',
        'quod',
    ];
    $request->requestBody->description = 'esse';
    $request->requestBody->federationMode = CreateEnvironmentRequestBodyFederationModeEnum::LOCAL;
    $request->requestBody->federationParameters = new CreateEnvironmentRequestBodyFederationParameters();
    $request->requestBody->federationParameters->applicationCallBackURL = 'porro';
    $request->requestBody->federationParameters->attributeMap = [
        'dicta' => 'nam',
        'officia' => 'occaecati',
        'fugit' => 'deleniti',
    ];
    $request->requestBody->federationParameters->federationProviderName = 'hic';
    $request->requestBody->federationParameters->federationURN = 'optio';
    $request->requestBody->federationParameters->samlMetadataDocument = 'totam';
    $request->requestBody->federationParameters->samlMetadataURL = 'beatae';
    $request->requestBody->kmsKeyId = 'commodi';
    $request->requestBody->name = 'Pauline Dibbert';
    $request->requestBody->superuserParameters = new CreateEnvironmentRequestBodySuperuserParameters();
    $request->requestBody->superuserParameters->emailAddress = 'esse';
    $request->requestBody->superuserParameters->firstName = 'Cullen';
    $request->requestBody->superuserParameters->lastName = 'Mante';
    $request->requestBody->tags = [
        'perferendis' => 'ad',
    ];
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'sed';
    $request->xAmzCredential = 'iste';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'laboriosam';
    $request->xAmzSignedHeaders = 'hic';

    $response = $sdk->sdk->createEnvironment($request);

    if ($response->createEnvironmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteEnvironment

Delete an FinSpace environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEnvironmentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteEnvironmentRequest();
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'fuga';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'iste';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'saepe';
    $request->environmentId = 'quidem';

    $response = $sdk->sdk->deleteEnvironment($request);

    if ($response->deleteEnvironmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEnvironment

Returns the FinSpace environment object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEnvironmentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEnvironmentRequest();
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'est';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'dolores';
    $request->environmentId = 'dolorem';

    $response = $sdk->sdk->getEnvironment($request);

    if ($response->getEnvironmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEnvironments

A list of all of your FinSpace environments.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListEnvironmentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListEnvironmentsRequest();
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'explicabo';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'nemo';
    $request->xAmzSignedHeaders = 'minima';
    $request->maxResults = 570197;
    $request->nextToken = 'accusantium';

    $response = $sdk->sdk->listEnvironments($request);

    if ($response->listEnvironmentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

A list of all tags for a resource.

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
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'culpa';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'dolorem';
    $request->resourceArn = 'culpa';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Adds metadata tags to a FinSpace resource.

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
        'repellat' => 'mollitia',
    ];
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'numquam';
    $request->xAmzCredential = 'commodi';
    $request->xAmzDate = 'quam';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'velit';
    $request->xAmzSignedHeaders = 'error';
    $request->resourceArn = 'quia';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes metadata tags from a FinSpace resource.

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
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'vitae';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'animi';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'quo';
    $request->resourceArn = 'sequi';
    $request->tagKeys = [
        'ipsam',
        'id',
        'possimus',
        'aut',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateEnvironment

Update your FinSpace environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEnvironmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEnvironmentRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEnvironmentRequestBodyFederationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEnvironmentRequestBodyFederationParameters;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateEnvironmentRequest();
    $request->requestBody = new UpdateEnvironmentRequestBody();
    $request->requestBody->description = 'quasi';
    $request->requestBody->federationMode = UpdateEnvironmentRequestBodyFederationModeEnum::LOCAL;
    $request->requestBody->federationParameters = new UpdateEnvironmentRequestBodyFederationParameters();
    $request->requestBody->federationParameters->applicationCallBackURL = 'temporibus';
    $request->requestBody->federationParameters->attributeMap = [
        'quasi' => 'reiciendis',
        'voluptatibus' => 'vero',
        'nihil' => 'praesentium',
    ];
    $request->requestBody->federationParameters->federationProviderName = 'voluptatibus';
    $request->requestBody->federationParameters->federationURN = 'ipsa';
    $request->requestBody->federationParameters->samlMetadataDocument = 'omnis';
    $request->requestBody->federationParameters->samlMetadataURL = 'voluptate';
    $request->requestBody->name = 'Thomas Batz';
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'dolore';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'harum';
    $request->environmentId = 'enim';

    $response = $sdk->sdk->updateEnvironment($request);

    if ($response->updateEnvironmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
