# SDK

## Overview

An example service, deployed with the Octane Service creator, which will echo the string

Amazon Web Services documentation
<https://docs.aws.amazon.com/iotroborunner/>
### Available Operations

* [createDestination](#createdestination) - Grants permission to create a destination
* [createSite](#createsite) - Grants permission to create a site
* [createWorker](#createworker) - Grants permission to create a worker
* [createWorkerFleet](#createworkerfleet) - Grants permission to create a worker fleet
* [deleteDestination](#deletedestination) - Grants permission to delete a destination
* [deleteSite](#deletesite) - Grants permission to delete a site
* [deleteWorker](#deleteworker) - Grants permission to delete a worker
* [deleteWorkerFleet](#deleteworkerfleet) - Grants permission to delete a worker fleet
* [getDestination](#getdestination) - Grants permission to get a destination
* [getSite](#getsite) - Grants permission to get a site
* [getWorker](#getworker) - Grants permission to get a worker
* [getWorkerFleet](#getworkerfleet) - Grants permission to get a worker fleet
* [listDestinations](#listdestinations) - Grants permission to list destinations
* [listSites](#listsites) - Grants permission to list sites
* [listWorkerFleets](#listworkerfleets) - Grants permission to list worker fleets
* [listWorkers](#listworkers) - Grants permission to list workers
* [updateDestination](#updatedestination) - Grants permission to update a destination
* [updateSite](#updatesite) - Grants permission to update a site
* [updateWorker](#updateworker) - Grants permission to update a worker
* [updateWorkerFleet](#updateworkerfleet) - Grants permission to update a worker fleet

## createDestination

Grants permission to create a destination

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDestinationRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDestinationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateDestinationRequestBodyStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDestinationRequest();
    $request->requestBody = new CreateDestinationRequestBody();
    $request->requestBody->additionalFixedProperties = 'delectus';
    $request->requestBody->clientToken = 'tempora';
    $request->requestBody->name = 'Minnie Schiller';
    $request->requestBody->site = 'iusto';
    $request->requestBody->state = CreateDestinationRequestBodyStateEnum::DISABLED;
    $request->xAmzAlgorithm = 'nisi';
    $request->xAmzContentSha256 = 'recusandae';
    $request->xAmzCredential = 'temporibus';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'deserunt';

    $response = $sdk->sdk->createDestination($request);

    if ($response->createDestinationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSite

Grants permission to create a site

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSiteRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSiteRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSiteRequest();
    $request->requestBody = new CreateSiteRequestBody();
    $request->requestBody->clientToken = 'perferendis';
    $request->requestBody->countryCode = 'GU';
    $request->requestBody->description = 'repellendus';
    $request->requestBody->name = 'Cedric Connelly';
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'quod';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'porro';

    $response = $sdk->sdk->createSite($request);

    if ($response->createSiteResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createWorker

Grants permission to create a worker

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkerRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkerRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkerRequestBodyOrientation;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkerRequestBodyPosition;
use \OpenAPI\OpenAPI\Models\Shared\CartesianCoordinates;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkerRequestBodyVendorProperties;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateWorkerRequest();
    $request->requestBody = new CreateWorkerRequestBody();
    $request->requestBody->additionalFixedProperties = 'dolorum';
    $request->requestBody->additionalTransientProperties = 'dicta';
    $request->requestBody->clientToken = 'nam';
    $request->requestBody->fleet = 'officia';
    $request->requestBody->name = 'Wayne Lind';
    $request->requestBody->orientation = new CreateWorkerRequestBodyOrientation();
    $request->requestBody->orientation->degrees = 5218.48;
    $request->requestBody->position = new CreateWorkerRequestBodyPosition();
    $request->requestBody->position->cartesianCoordinates = new CartesianCoordinates();
    $request->requestBody->position->cartesianCoordinates->x = 1059.07;
    $request->requestBody->position->cartesianCoordinates->y = 4146.62;
    $request->requestBody->position->cartesianCoordinates->z = 4736;
    $request->requestBody->vendorProperties = new CreateWorkerRequestBodyVendorProperties();
    $request->requestBody->vendorProperties->vendorAdditionalFixedProperties = 'modi';
    $request->requestBody->vendorProperties->vendorAdditionalTransientProperties = 'qui';
    $request->requestBody->vendorProperties->vendorWorkerId = 'impedit';
    $request->requestBody->vendorProperties->vendorWorkerIpAddress = 'cum';
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'ad';
    $request->xAmzSignedHeaders = 'natus';

    $response = $sdk->sdk->createWorker($request);

    if ($response->createWorkerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createWorkerFleet

Grants permission to create a worker fleet

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkerFleetRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkerFleetRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateWorkerFleetRequest();
    $request->requestBody = new CreateWorkerFleetRequestBody();
    $request->requestBody->additionalFixedProperties = 'sed';
    $request->requestBody->clientToken = 'iste';
    $request->requestBody->name = 'Faye Howe';
    $request->requestBody->site = 'fuga';
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'iste';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'architecto';

    $response = $sdk->sdk->createWorkerFleet($request);

    if ($response->createWorkerFleetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDestination

Grants permission to delete a destination

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDestinationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDestinationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDestinationRequest();
    $request->requestBody = new DeleteDestinationRequestBody();
    $request->requestBody->id = '0faaa235-2c59-4559-87af-f1a3a2fa9467';
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'velit';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'quia';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'vitae';
    $request->xAmzSignedHeaders = 'laborum';

    $response = $sdk->sdk->deleteDestination($request);

    if ($response->deleteDestinationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSite

Grants permission to delete a site

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSiteRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSiteRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSiteRequest();
    $request->requestBody = new DeleteSiteRequestBody();
    $request->requestBody->id = 'a52c3f5a-d019-4da1-bfe7-8f097b0074f1';
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'dolore';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'harum';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'accusamus';

    $response = $sdk->sdk->deleteSite($request);

    if ($response->deleteSiteResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteWorker

Grants permission to delete a worker

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWorkerRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWorkerRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWorkerRequest();
    $request->requestBody = new DeleteWorkerRequestBody();
    $request->requestBody->id = '6e13b99d-488e-41e9-9e45-0ad2abd44269';
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'magni';
    $request->xAmzDate = 'assumenda';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'alias';
    $request->xAmzSignedHeaders = 'fugit';

    $response = $sdk->sdk->deleteWorker($request);

    if ($response->deleteWorkerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteWorkerFleet

Grants permission to delete a worker fleet

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWorkerFleetRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWorkerFleetRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWorkerFleetRequest();
    $request->requestBody = new DeleteWorkerFleetRequestBody();
    $request->requestBody->id = 'a94bb4f6-3c96-49e9-a3ef-a77dfb14cd66';
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'non';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'delectus';

    $response = $sdk->sdk->deleteWorkerFleet($request);

    if ($response->deleteWorkerFleetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDestination

Grants permission to get a destination

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDestinationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDestinationRequest();
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'blanditiis';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'sapiente';
    $request->id = '3a669970-74ba-4446-9b6e-2141959890af';

    $response = $sdk->sdk->getDestination($request);

    if ($response->getDestinationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSite

Grants permission to get a site

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSiteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSiteRequest();
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'eum';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'necessitatibus';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'nemo';
    $request->id = '16fe4c8b-711e-45b7-bd2e-d028921cddc6';

    $response = $sdk->sdk->getSite($request);

    if ($response->getSiteResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWorker

Grants permission to get a worker

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorkerRequest();
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'odit';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'ab';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'quidem';
    $request->id = '576b0d5f-0d30-4c5f-bb25-87053202c73d';

    $response = $sdk->sdk->getWorker($request);

    if ($response->getWorkerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWorkerFleet

Grants permission to get a worker fleet

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkerFleetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorkerFleetRequest();
    $request->xAmzAlgorithm = 'nostrum';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'recusandae';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'perspiciatis';
    $request->xAmzSignedHeaders = 'voluptatem';
    $request->id = 'c28909b3-fe49-4a8d-9cbf-48633323f9b7';

    $response = $sdk->sdk->getWorkerFleet($request);

    if ($response->getWorkerFleetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDestinations

Grants permission to list destinations

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDestinationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListDestinationsStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDestinationsRequest();
    $request->xAmzAlgorithm = 'dignissimos';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'numquam';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->maxResults = 56418;
    $request->nextToken = 'iure';
    $request->site = 'odio';
    $request->state = ListDestinationsStateEnum::ENABLED;

    $response = $sdk->sdk->listDestinations($request);

    if ($response->listDestinationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSites

Grants permission to list sites

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSitesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSitesRequest();
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'eos';
    $request->xAmzSignedHeaders = 'atque';
    $request->maxResults = 24678;
    $request->nextToken = 'fugiat';

    $response = $sdk->sdk->listSites($request);

    if ($response->listSitesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listWorkerFleets

Grants permission to list worker fleets

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListWorkerFleetsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListWorkerFleetsRequest();
    $request->xAmzAlgorithm = 'ab';
    $request->xAmzContentSha256 = 'soluta';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'deleniti';
    $request->maxResults = 607045;
    $request->nextToken = 'necessitatibus';
    $request->site = 'distinctio';

    $response = $sdk->sdk->listWorkerFleets($request);

    if ($response->listWorkerFleetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listWorkers

Grants permission to list workers

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListWorkersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListWorkersRequest();
    $request->xAmzAlgorithm = 'asperiores';
    $request->xAmzContentSha256 = 'nihil';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'id';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'eius';
    $request->fleet = 'aspernatur';
    $request->maxResults = 20651;
    $request->nextToken = 'amet';
    $request->site = 'optio';

    $response = $sdk->sdk->listWorkers($request);

    if ($response->listWorkersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDestination

Grants permission to update a destination

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDestinationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDestinationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDestinationRequestBodyStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDestinationRequest();
    $request->requestBody = new UpdateDestinationRequestBody();
    $request->requestBody->additionalFixedProperties = 'accusamus';
    $request->requestBody->id = '5e6a95d8-a0d4-446c-a2af-7a73cf3be453';
    $request->requestBody->name = 'Miss Jimmie Kozey';
    $request->requestBody->state = UpdateDestinationRequestBodyStateEnum::ENABLED;
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'libero';
    $request->xAmzCredential = 'voluptas';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'quam';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'incidunt';

    $response = $sdk->sdk->updateDestination($request);

    if ($response->updateDestinationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSite

Grants permission to update a site

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSiteRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSiteRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSiteRequest();
    $request->requestBody = new UpdateSiteRequestBody();
    $request->requestBody->countryCode = 'CM';
    $request->requestBody->description = 'cupiditate';
    $request->requestBody->id = 'cdb1a842-2bb6-479d-a322-715bf0cbb1e3';
    $request->requestBody->name = 'Gayle Lueilwitz';
    $request->xAmzAlgorithm = 'aperiam';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'dolore';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'adipisci';
    $request->xAmzSignedHeaders = 'dolorum';

    $response = $sdk->sdk->updateSite($request);

    if ($response->updateSiteResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateWorker

Grants permission to update a worker

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkerRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkerRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkerRequestBodyOrientation;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkerRequestBodyPosition;
use \OpenAPI\OpenAPI\Models\Shared\CartesianCoordinates;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkerRequestBodyVendorProperties;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateWorkerRequest();
    $request->requestBody = new UpdateWorkerRequestBody();
    $request->requestBody->additionalFixedProperties = 'architecto';
    $request->requestBody->additionalTransientProperties = 'quae';
    $request->requestBody->id = '08e0adcf-4b92-4187-9fce-953f73ef7fbc';
    $request->requestBody->name = 'Harriet Quitzon';
    $request->requestBody->orientation = new UpdateWorkerRequestBodyOrientation();
    $request->requestBody->orientation->degrees = 2930.2;
    $request->requestBody->position = new UpdateWorkerRequestBodyPosition();
    $request->requestBody->position->cartesianCoordinates = new CartesianCoordinates();
    $request->requestBody->position->cartesianCoordinates->x = 8445.5;
    $request->requestBody->position->cartesianCoordinates->y = 8489.44;
    $request->requestBody->position->cartesianCoordinates->z = 1943.42;
    $request->requestBody->vendorProperties = new UpdateWorkerRequestBodyVendorProperties();
    $request->requestBody->vendorProperties->vendorAdditionalFixedProperties = 'natus';
    $request->requestBody->vendorProperties->vendorAdditionalTransientProperties = 'impedit';
    $request->requestBody->vendorProperties->vendorWorkerId = 'aut';
    $request->requestBody->vendorProperties->vendorWorkerIpAddress = 'voluptatibus';
    $request->xAmzAlgorithm = 'exercitationem';
    $request->xAmzContentSha256 = 'nulla';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'porro';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'doloribus';
    $request->xAmzSignedHeaders = 'iusto';

    $response = $sdk->sdk->updateWorker($request);

    if ($response->updateWorkerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateWorkerFleet

Grants permission to update a worker fleet

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkerFleetRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkerFleetRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateWorkerFleetRequest();
    $request->requestBody = new UpdateWorkerFleetRequestBody();
    $request->requestBody->additionalFixedProperties = 'eligendi';
    $request->requestBody->id = '70a45626-d436-4813-b16d-9f5fce6c5561';
    $request->requestBody->name = 'Rosemary Ryan';
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'minima';
    $request->xAmzCredential = 'eaque';
    $request->xAmzDate = 'a';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'aut';

    $response = $sdk->sdk->updateWorkerFleet($request);

    if ($response->updateWorkerFleetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
