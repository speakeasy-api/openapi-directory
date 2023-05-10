# relations

## Overview

This contains requests related to relations. 

Relations can be of the following types: 
- `contracttest`
- `integrationtest`
- `documentation`
- `testsuite`
- `environment`
- `mock`
- `monitor`

### Available Operations

* [createRelations](#createrelations) - Create relations
* [getContractTestRelations](#getcontracttestrelations) - Get contract test relations
* [getDocumentationRelations](#getdocumentationrelations) - Get  documentation relations
* [getEnvironmentRelations](#getenvironmentrelations) - Get environment relations
* [getIntegrationTestRelations](#getintegrationtestrelations) - Get integration test relations
* [getLinkedRelations](#getlinkedrelations) - Get linked relations
* [getMonitorRelations](#getmonitorrelations) - Get monitor relations
* [getTestSuiteRelations](#gettestsuiterelations) - Get test suite relations
* [syncRelationsWithSchema](#syncrelationswithschema) - Sync relations with schema

## createRelations

This call allows you to add existing Postman entities as new relations to an API. The request body should contain the relations to be created along with an array of entity IDs. 

<table>
  <tr>
    <th>Relation</th>
    <th>Entity ID type</th>
  <tr>
  <tr>
    <td>contracttest</td>
    <td>Collection UIDs</td>
  </tr>
  <tr>
    <td>integrationtest</td>
    <td>Collection UIDs</td>
  </tr>
  <tr>
    <td>documentation</td>
    <td>Collection UIDs</td>
  </tr>
  <tr>
    <td>testsuite</td>
    <td>Collection UIDs</td>
  </tr>
  <tr>
    <td>environment</td>
    <td>Environment UIDs</td>
  </tr>
  <tr>
    <td>mock</td>
    <td>Mock IDs</td>
  </tr>
  <tr>
    <td>monitor</td>
    <td>Monitor IDs</td>
  </tr>
</table>

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateRelationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateRelationsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateRelationsRequest();
    $request->requestBody = new CreateRelationsRequestBody();
    $request->requestBody->contracttest = [
        'collection-uid-1',
        'collection-uid-1',
    ];
    $request->requestBody->documentation = [
        'collection-uid-3',
        'collection-uid-3',
        'collection-uid-3',
        'collection-uid-3',
    ];
    $request->requestBody->mock = [
        'mock-uid-1',
        'mock-uid-1',
        'mock-uid-1',
        'mock-uid-1',
    ];
    $request->requestBody->testsuite = [
        'collection-uid-1',
        'collection-uid-1',
        'collection-uid-1',
    ];
    $request->apiId = 'in';
    $request->apiVersionId = 'corporis';

    $response = $sdk->relations->createRelations($request);

    if ($response->createRelations200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContractTestRelations

This call fetches all the relations by type which are linked to the specified API version along with their details.

The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetContractTestRelationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContractTestRelationsRequest();
    $request->apiId = 'iste';
    $request->apiVersionId = 'iure';

    $response = $sdk->relations->getContractTestRelations($request);

    if ($response->getContractTestRelations200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDocumentationRelations

This call fetches all the relations by type which are linked to the specified API version along with their details.

The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDocumentationRelationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDocumentationRelationsRequest();
    $request->apiId = 'saepe';
    $request->apiVersionId = 'quidem';

    $response = $sdk->relations->getDocumentationRelations($request);

    if ($response->getDocumentationRelations200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEnvironmentRelations

This call fetches all the relations by type which are linked to the specified API version along with their details.

The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEnvironmentRelationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEnvironmentRelationsRequest();
    $request->apiId = 'architecto';
    $request->apiVersionId = 'ipsa';

    $response = $sdk->relations->getEnvironmentRelations($request);

    if ($response->getEnvironmentRelations200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getIntegrationTestRelations

This call fetches all the relations by type which are linked to the specified API version along with their details.

The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetIntegrationTestRelationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIntegrationTestRelationsRequest();
    $request->apiId = 'reiciendis';
    $request->apiVersionId = 'est';

    $response = $sdk->relations->getIntegrationTestRelations($request);

    if ($response->getIntegrationTestRelations200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLinkedRelations

This call fetches all the relations which are linked to the specified API version along with their details.

The response will contain a `relations` object which lists all the relation types which are linked to the API version. Each of the relation type will be an object which details the relations of this type. 

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetLinkedRelationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLinkedRelationsRequest();
    $request->apiId = 'mollitia';
    $request->apiVersionId = 'laborum';

    $response = $sdk->relations->getLinkedRelations($request);

    if ($response->getLinkedRelations200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMonitorRelations

This call fetches all the relations by type which are linked to the specified API version along with their details.

The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMonitorRelationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMonitorRelationsRequest();
    $request->apiId = 'dolores';
    $request->apiVersionId = 'dolorem';

    $response = $sdk->relations->getMonitorRelations($request);

    if ($response->getMonitorRelations200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTestSuiteRelations

This call fetches all the relations by type which are linked to the specified API version along with their details.

The response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTestSuiteRelationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTestSuiteRelationsRequest();
    $request->apiId = 'corporis';
    $request->apiVersionId = 'explicabo';

    $response = $sdk->relations->getTestSuiteRelations($request);

    if ($response->getTestSuiteRelations200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## syncRelationsWithSchema

This call allows you to keep the relation in sync with the API schema.


> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SyncRelationsWithSchemaRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SyncRelationsWithSchemaRequest();
    $request->apiId = '{{apiId}}';
    $request->apiVersionId = '{{apiVersionId}}';
    $request->entityId = '{{entityId}}';
    $request->entityType = '{{entityType}}';

    $response = $sdk->relations->syncRelationsWithSchema($request);

    if ($response->syncRelationsWithSchema200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
