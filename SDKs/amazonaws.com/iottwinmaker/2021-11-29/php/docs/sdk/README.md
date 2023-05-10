# SDK

## Overview

IoT TwinMaker is a service with which you can build operational digital twins of physical systems. IoT TwinMaker overlays measurements and analysis from real-world sensors, cameras, and enterprise applications so you can create data visualizations to monitor your physical factory, building, or industrial plant. You can use this real-world data to monitor operations and diagnose and repair errors.

Amazon Web Services documentation
<https://docs.aws.amazon.com/iottwinmaker/>
### Available Operations

* [batchPutPropertyValues](#batchputpropertyvalues) - Sets values for multiple time series properties.
* [createComponentType](#createcomponenttype) - Creates a component type.
* [createEntity](#createentity) - Creates an entity.
* [createScene](#createscene) - Creates a scene.
* [createSyncJob](#createsyncjob) - This action creates a SyncJob.
* [createWorkspace](#createworkspace) - Creates a workplace.
* [deleteComponentType](#deletecomponenttype) - Deletes a component type.
* [deleteEntity](#deleteentity) - Deletes an entity.
* [deleteScene](#deletescene) - Deletes a scene.
* [deleteSyncJob](#deletesyncjob) - Delete the SyncJob.
* [deleteWorkspace](#deleteworkspace) - Deletes a workspace.
* [executeQuery](#executequery) - Run queries to access information from your knowledge graph of entities within individual workspaces.
* [getComponentType](#getcomponenttype) - Retrieves information about a component type.
* [getEntity](#getentity) - Retrieves information about an entity.
* [getPricingPlan](#getpricingplan) - Gets the pricing plan.
* [getPropertyValue](#getpropertyvalue) - <p>Gets the property values for a component, component type, entity, or workspace.</p> <p>You must specify a value for either <code>componentName</code>, <code>componentTypeId</code>, <code>entityId</code>, or <code>workspaceId</code>.</p>
* [getPropertyValueHistory](#getpropertyvaluehistory) - <p>Retrieves information about the history of a time series property value for a component, component type, entity, or workspace.</p> <p>You must specify a value for <code>workspaceId</code>. For entity-specific queries, specify values for <code>componentName</code> and <code>entityId</code>. For cross-entity quries, specify a value for <code>componentTypeId</code>.</p>
* [getScene](#getscene) - Retrieves information about a scene.
* [getSyncJob](#getsyncjob) - Gets the SyncJob.
* [getWorkspace](#getworkspace) - Retrieves information about a workspace.
* [listComponentTypes](#listcomponenttypes) - Lists all component types in a workspace.
* [listEntities](#listentities) - Lists all entities in a workspace.
* [listScenes](#listscenes) - Lists all scenes in a workspace.
* [listSyncJobs](#listsyncjobs) - List all SyncJobs.
* [listSyncResources](#listsyncresources) - Lists the sync resources.
* [listTagsForResource](#listtagsforresource) - Lists all tags associated with a resource.
* [listWorkspaces](#listworkspaces) - Retrieves information about workspaces in the current account.
* [tagResource](#tagresource) - Adds tags to a resource.
* [untagResource](#untagresource) - Removes tags from a resource.
* [updateComponentType](#updatecomponenttype) - Updates information in a component type.
* [updateEntity](#updateentity) - Updates an entity.
* [updatePricingPlan](#updatepricingplan) - Update the pricing plan.
* [updateScene](#updatescene) - Updates a scene.
* [updateWorkspace](#updateworkspace) - Updates a workspace.

## batchPutPropertyValues

Sets values for multiple time series properties.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchPutPropertyValuesRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchPutPropertyValuesRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\PropertyValueEntry;
use \OpenAPI\OpenAPI\Models\Shared\EntityPropertyReference;
use \OpenAPI\OpenAPI\Models\Shared\PropertyValue;
use \OpenAPI\OpenAPI\Models\Shared\DataValue;
use \OpenAPI\OpenAPI\Models\Shared\RelationshipValue;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchPutPropertyValuesRequest();
    $request->requestBody = new BatchPutPropertyValuesRequestBody();
    $request->requestBody->entries = [
        new PropertyValueEntry(),
        new PropertyValueEntry(),
        new PropertyValueEntry(),
    ];
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'debitis';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'delectus';
    $request->workspaceId = 'tempora';

    $response = $sdk->sdk->batchPutPropertyValues($request);

    if ($response->batchPutPropertyValuesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createComponentType

Creates a component type.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateComponentTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateComponentTypeRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\FunctionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DataConnector;
use \OpenAPI\OpenAPI\Models\Shared\LambdaFunction;
use \OpenAPI\OpenAPI\Models\Shared\ScopeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PropertyDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DataType;
use \OpenAPI\OpenAPI\Models\Shared\DataValue;
use \OpenAPI\OpenAPI\Models\Shared\RelationshipValue;
use \OpenAPI\OpenAPI\Models\Shared\Relationship;
use \OpenAPI\OpenAPI\Models\Shared\TypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PropertyGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\GroupTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateComponentTypeRequest();
    $request->requestBody = new CreateComponentTypeRequestBody();
    $request->requestBody->componentTypeName = 'suscipit';
    $request->requestBody->description = 'molestiae';
    $request->requestBody->extendsFrom = [
        'placeat',
        'voluptatum',
        'iusto',
        'excepturi',
    ];
    $request->requestBody->functions = [
        'recusandae' => new FunctionRequest(),
        'temporibus' => new FunctionRequest(),
    ];
    $request->requestBody->isSingleton = false;
    $request->requestBody->propertyDefinitions = [
        'quis' => new PropertyDefinitionRequest(),
    ];
    $request->requestBody->propertyGroups = [
        'deserunt' => new PropertyGroupRequest(),
    ];
    $request->requestBody->tags = [
        'ipsam' => 'repellendus',
    ];
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'at';
    $request->xAmzSecurityToken = 'at';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->componentTypeId = 'quod';
    $request->workspaceId = 'quod';

    $response = $sdk->sdk->createComponentType($request);

    if ($response->createComponentTypeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createEntity

Creates an entity.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateEntityRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateEntityRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ComponentRequest;
use \OpenAPI\OpenAPI\Models\Shared\ComponentPropertyGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\GroupTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PropertyGroupUpdateTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateEntityRequest();
    $request->requestBody = new CreateEntityRequestBody();
    $request->requestBody->components = [
        'totam' => new ComponentRequest(),
        'porro' => new ComponentRequest(),
    ];
    $request->requestBody->description = 'dolorum';
    $request->requestBody->entityId = 'dicta';
    $request->requestBody->entityName = 'nam';
    $request->requestBody->parentEntityId = 'officia';
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
    $request->workspaceId = 'ipsum';

    $response = $sdk->sdk->createEntity($request);

    if ($response->createEntityResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createScene

Creates a scene.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSceneRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSceneRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSceneRequest();
    $request->requestBody = new CreateSceneRequestBody();
    $request->requestBody->capabilities = [
        'aspernatur',
        'perferendis',
        'ad',
    ];
    $request->requestBody->contentLocation = 'natus';
    $request->requestBody->description = 'sed';
    $request->requestBody->sceneId = 'iste';
    $request->requestBody->sceneMetadata = [
        'natus' => 'laboriosam',
    ];
    $request->requestBody->tags = [
        'saepe' => 'fuga',
        'in' => 'corporis',
        'iste' => 'iure',
        'saepe' => 'quidem',
    ];
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'est';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'dolores';
    $request->workspaceId = 'dolorem';

    $response = $sdk->sdk->createScene($request);

    if ($response->createSceneResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSyncJob

This action creates a SyncJob.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSyncJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSyncJobRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSyncJobRequest();
    $request->requestBody = new CreateSyncJobRequestBody();
    $request->requestBody->syncRole = 'corporis';
    $request->requestBody->tags = [
        'nobis' => 'enim',
    ];
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'nemo';
    $request->xAmzCredential = 'minima';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'accusantium';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'culpa';
    $request->syncSource = 'doloribus';
    $request->workspaceId = 'sapiente';

    $response = $sdk->sdk->createSyncJob($request);

    if ($response->createSyncJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createWorkspace

Creates a workplace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkspaceRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkspaceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateWorkspaceRequest();
    $request->requestBody = new CreateWorkspaceRequestBody();
    $request->requestBody->description = 'architecto';
    $request->requestBody->role = 'mollitia';
    $request->requestBody->s3Location = 'dolorem';
    $request->requestBody->tags = [
        'consequuntur' => 'repellat',
        'mollitia' => 'occaecati',
        'numquam' => 'commodi',
    ];
    $request->xAmzAlgorithm = 'quam';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'velit';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'quia';
    $request->xAmzSignature = 'quis';
    $request->xAmzSignedHeaders = 'vitae';
    $request->workspaceId = 'laborum';

    $response = $sdk->sdk->createWorkspace($request);

    if ($response->createWorkspaceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteComponentType

Deletes a component type.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteComponentTypeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteComponentTypeRequest();
    $request->xAmzAlgorithm = 'animi';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'sequi';
    $request->xAmzSignature = 'tenetur';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->componentTypeId = 'id';
    $request->workspaceId = 'possimus';

    $response = $sdk->sdk->deleteComponentType($request);

    if ($response->deleteComponentTypeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteEntity

Deletes an entity.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEntityRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteEntityRequest();
    $request->xAmzAlgorithm = 'aut';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'temporibus';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->entityId = 'voluptatibus';
    $request->isRecursive = false;
    $request->workspaceId = 'vero';

    $response = $sdk->sdk->deleteEntity($request);

    if ($response->deleteEntityResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteScene

Deletes a scene.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSceneRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSceneRequest();
    $request->xAmzAlgorithm = 'nihil';
    $request->xAmzContentSha256 = 'praesentium';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'cum';
    $request->sceneId = 'perferendis';
    $request->workspaceId = 'doloremque';

    $response = $sdk->sdk->deleteScene($request);

    if ($response->deleteSceneResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSyncJob

Delete the SyncJob.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSyncJobRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSyncJobRequest();
    $request->xAmzAlgorithm = 'reprehenderit';
    $request->xAmzContentSha256 = 'ut';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'dolore';
    $request->xAmzSignedHeaders = 'iusto';
    $request->syncSource = 'dicta';
    $request->workspaceId = 'harum';

    $response = $sdk->sdk->deleteSyncJob($request);

    if ($response->deleteSyncJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteWorkspace

Deletes a workspace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWorkspaceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWorkspaceRequest();
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'commodi';
    $request->xAmzDate = 'repudiandae';
    $request->xAmzSecurityToken = 'quae';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'quidem';
    $request->workspaceId = 'molestias';

    $response = $sdk->sdk->deleteWorkspace($request);

    if ($response->deleteWorkspaceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## executeQuery

Run queries to access information from your knowledge graph of entities within individual workspaces.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ExecuteQueryRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExecuteQueryRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExecuteQueryRequest();
    $request->requestBody = new ExecuteQueryRequestBody();
    $request->requestBody->maxResults = 566602;
    $request->requestBody->nextToken = 'pariatur';
    $request->requestBody->queryStatement = 'modi';
    $request->requestBody->workspaceId = 'praesentium';
    $request->xAmzAlgorithm = 'rem';
    $request->xAmzContentSha256 = 'voluptates';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'repudiandae';
    $request->xAmzSecurityToken = 'sint';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'itaque';
    $request->maxResults = 'incidunt';
    $request->nextToken = 'enim';

    $response = $sdk->sdk->executeQuery($request);

    if ($response->executeQueryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getComponentType

Retrieves information about a component type.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetComponentTypeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetComponentTypeRequest();
    $request->xAmzAlgorithm = 'consequatur';
    $request->xAmzContentSha256 = 'est';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'quibusdam';
    $request->componentTypeId = 'labore';
    $request->workspaceId = 'modi';

    $response = $sdk->sdk->getComponentType($request);

    if ($response->getComponentTypeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEntity

Retrieves information about an entity.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEntityRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEntityRequest();
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'cupiditate';
    $request->xAmzDate = 'quos';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'magni';
    $request->xAmzSignedHeaders = 'assumenda';
    $request->entityId = 'ipsam';
    $request->workspaceId = 'alias';

    $response = $sdk->sdk->getEntity($request);

    if ($response->getEntityResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPricingPlan

Gets the pricing plan.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPricingPlanRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPricingPlanRequest();
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'tempore';
    $request->xAmzSignedHeaders = 'labore';

    $response = $sdk->sdk->getPricingPlan($request);

    if ($response->getPricingPlanResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPropertyValue

<p>Gets the property values for a component, component type, entity, or workspace.</p> <p>You must specify a value for either <code>componentName</code>, <code>componentTypeId</code>, <code>entityId</code>, or <code>workspaceId</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPropertyValueRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPropertyValueRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\GetPropertyValueRequestBodyTabularConditions;
use \OpenAPI\OpenAPI\Models\Shared\OrderBy;
use \OpenAPI\OpenAPI\Models\Shared\OrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\PropertyFilter;
use \OpenAPI\OpenAPI\Models\Shared\DataValue;
use \OpenAPI\OpenAPI\Models\Shared\RelationshipValue;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPropertyValueRequest();
    $request->requestBody = new GetPropertyValueRequestBody();
    $request->requestBody->componentName = 'delectus';
    $request->requestBody->componentTypeId = 'eum';
    $request->requestBody->entityId = 'non';
    $request->requestBody->maxResults = 756107;
    $request->requestBody->nextToken = 'sint';
    $request->requestBody->propertyGroupName = 'aliquid';
    $request->requestBody->selectedProperties = [
        'necessitatibus',
        'sint',
        'officia',
    ];
    $request->requestBody->tabularConditions = new GetPropertyValueRequestBodyTabularConditions();
    $request->requestBody->tabularConditions->orderBy = [
        new OrderBy(),
    ];
    $request->requestBody->tabularConditions->propertyFilters = [
        new PropertyFilter(),
        new PropertyFilter(),
        new PropertyFilter(),
        new PropertyFilter(),
    ];
    $request->xAmzAlgorithm = 'a';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'rerum';
    $request->maxResults = 'dicta';
    $request->nextToken = 'magnam';
    $request->workspaceId = 'cumque';

    $response = $sdk->sdk->getPropertyValue($request);

    if ($response->getPropertyValueResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPropertyValueHistory

<p>Retrieves information about the history of a time series property value for a component, component type, entity, or workspace.</p> <p>You must specify a value for <code>workspaceId</code>. For entity-specific queries, specify values for <code>componentName</code> and <code>entityId</code>. For cross-entity quries, specify a value for <code>componentTypeId</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPropertyValueHistoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPropertyValueHistoryRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\GetPropertyValueHistoryRequestBodyInterpolation;
use \OpenAPI\OpenAPI\Models\Shared\InterpolationTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetPropertyValueHistoryRequestBodyOrderByTimeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PropertyFilter;
use \OpenAPI\OpenAPI\Models\Shared\DataValue;
use \OpenAPI\OpenAPI\Models\Shared\RelationshipValue;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPropertyValueHistoryRequest();
    $request->requestBody = new GetPropertyValueHistoryRequestBody();
    $request->requestBody->componentName = 'facere';
    $request->requestBody->componentTypeId = 'ea';
    $request->requestBody->endDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-29T11:09:12.937Z');
    $request->requestBody->endTime = 'accusamus';
    $request->requestBody->entityId = 'non';
    $request->requestBody->interpolation = new GetPropertyValueHistoryRequestBodyInterpolation();
    $request->requestBody->interpolation->interpolationType = InterpolationTypeEnum::LINEAR;
    $request->requestBody->interpolation->intervalInSeconds = 581273;
    $request->requestBody->maxResults = 313218;
    $request->requestBody->nextToken = 'accusamus';
    $request->requestBody->orderByTime = GetPropertyValueHistoryRequestBodyOrderByTimeEnum::DESCENDING;
    $request->requestBody->propertyFilters = [
        new PropertyFilter(),
        new PropertyFilter(),
        new PropertyFilter(),
    ];
    $request->requestBody->selectedProperties = [
        'nam',
        'id',
        'blanditiis',
    ];
    $request->requestBody->startDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-02-02T01:24:52.629Z');
    $request->requestBody->startTime = 'amet';
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'nisi';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->maxResults = 'nihil';
    $request->nextToken = 'magnam';
    $request->workspaceId = 'distinctio';

    $response = $sdk->sdk->getPropertyValueHistory($request);

    if ($response->getPropertyValueHistoryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getScene

Retrieves information about a scene.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSceneRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSceneRequest();
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'eum';
    $request->sceneId = 'vero';
    $request->workspaceId = 'aspernatur';

    $response = $sdk->sdk->getScene($request);

    if ($response->getSceneResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSyncJob

Gets the SyncJob.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSyncJobRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSyncJobRequest();
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'et';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'ullam';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'quos';
    $request->syncSource = 'sint';
    $request->workspace = 'accusantium';

    $response = $sdk->sdk->getSyncJob($request);

    if ($response->getSyncJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWorkspace

Retrieves information about a workspace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspaceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorkspaceRequest();
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'ad';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'necessitatibus';
    $request->workspaceId = 'odit';

    $response = $sdk->sdk->getWorkspace($request);

    if ($response->getWorkspaceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listComponentTypes

Lists all component types in a workspace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListComponentTypesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListComponentTypesRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ListComponentTypesFilter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListComponentTypesRequest();
    $request->requestBody = new ListComponentTypesRequestBody();
    $request->requestBody->filters = [
        new ListComponentTypesFilter(),
        new ListComponentTypesFilter(),
    ];
    $request->requestBody->maxResults = 97260;
    $request->requestBody->nextToken = 'iure';
    $request->xAmzAlgorithm = 'doloribus';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'eius';
    $request->xAmzDate = 'maxime';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'in';
    $request->maxResults = 'architecto';
    $request->nextToken = 'architecto';
    $request->workspaceId = 'repudiandae';

    $response = $sdk->sdk->listComponentTypes($request);

    if ($response->listComponentTypesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEntities

Lists all entities in a workspace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListEntitiesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListEntitiesRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ListEntitiesFilter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListEntitiesRequest();
    $request->requestBody = new ListEntitiesRequestBody();
    $request->requestBody->filters = [
        new ListEntitiesFilter(),
        new ListEntitiesFilter(),
    ];
    $request->requestBody->maxResults = 714242;
    $request->requestBody->nextToken = 'nihil';
    $request->xAmzAlgorithm = 'repellat';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'sed';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'accusantium';
    $request->xAmzSignedHeaders = 'consequuntur';
    $request->maxResults = 'praesentium';
    $request->nextToken = 'natus';
    $request->workspaceId = 'magni';

    $response = $sdk->sdk->listEntities($request);

    if ($response->listEntitiesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listScenes

Lists all scenes in a workspace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListScenesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListScenesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListScenesRequest();
    $request->requestBody = new ListScenesRequestBody();
    $request->requestBody->maxResults = 123820;
    $request->requestBody->nextToken = 'quo';
    $request->xAmzAlgorithm = 'illum';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'maxime';
    $request->xAmzDate = 'ea';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'ea';
    $request->maxResults = 'accusantium';
    $request->nextToken = 'ab';
    $request->workspaceId = 'maiores';

    $response = $sdk->sdk->listScenes($request);

    if ($response->listScenesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSyncJobs

List all SyncJobs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSyncJobsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSyncJobsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSyncJobsRequest();
    $request->requestBody = new ListSyncJobsRequestBody();
    $request->requestBody->maxResults = 697429;
    $request->requestBody->nextToken = 'ipsam';
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'autem';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'eaque';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'nemo';
    $request->xAmzSignedHeaders = 'voluptatibus';
    $request->maxResults = 'perferendis';
    $request->nextToken = 'fugiat';
    $request->workspaceId = 'amet';

    $response = $sdk->sdk->listSyncJobs($request);

    if ($response->listSyncJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSyncResources

Lists the sync resources.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSyncResourcesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSyncResourcesRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\SyncResourceFilter;
use \OpenAPI\OpenAPI\Models\Shared\SyncResourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SyncResourceStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSyncResourcesRequest();
    $request->requestBody = new ListSyncResourcesRequestBody();
    $request->requestBody->filters = [
        new SyncResourceFilter(),
    ];
    $request->requestBody->maxResults = 764912;
    $request->requestBody->nextToken = 'corporis';
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'libero';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'dolores';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'dignissimos';
    $request->maxResults = 'eaque';
    $request->nextToken = 'quis';
    $request->syncSource = 'nesciunt';
    $request->workspaceId = 'eos';

    $response = $sdk->sdk->listSyncResources($request);

    if ($response->listSyncResourcesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Lists all tags associated with a resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->requestBody = new ListTagsForResourceRequestBody();
    $request->requestBody->maxResults = 18521;
    $request->requestBody->nextToken = 'dolores';
    $request->requestBody->resourceARN = 'minus';
    $request->xAmzAlgorithm = 'quam';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'nostrum';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'recusandae';
    $request->xAmzSignedHeaders = 'omnis';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listWorkspaces

Retrieves information about workspaces in the current account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListWorkspacesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListWorkspacesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListWorkspacesRequest();
    $request->requestBody = new ListWorkspacesRequestBody();
    $request->requestBody->maxResults = 704415;
    $request->requestBody->nextToken = 'perspiciatis';
    $request->xAmzAlgorithm = 'voluptatem';
    $request->xAmzContentSha256 = 'porro';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'blanditiis';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'eaque';
    $request->xAmzSignedHeaders = 'occaecati';
    $request->maxResults = 'rerum';
    $request->nextToken = 'adipisci';

    $response = $sdk->sdk->listWorkspaces($request);

    if ($response->listWorkspacesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Adds tags to a resource.

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
    $request->requestBody->resourceARN = 'asperiores';
    $request->requestBody->tags = [
        'modi' => 'iste',
        'dolorum' => 'deleniti',
        'pariatur' => 'provident',
        'nobis' => 'libero',
    ];
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'quaerat';
    $request->xAmzCredential = 'quos';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'dolor';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes tags from a resource.

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
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'cum';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'dignissimos';
    $request->resourceARN = 'reiciendis';
    $request->tagKeys = [
        'dolorum',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateComponentType

Updates information in a component type.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateComponentTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateComponentTypeRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\FunctionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DataConnector;
use \OpenAPI\OpenAPI\Models\Shared\LambdaFunction;
use \OpenAPI\OpenAPI\Models\Shared\ScopeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PropertyDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DataType;
use \OpenAPI\OpenAPI\Models\Shared\DataValue;
use \OpenAPI\OpenAPI\Models\Shared\RelationshipValue;
use \OpenAPI\OpenAPI\Models\Shared\Relationship;
use \OpenAPI\OpenAPI\Models\Shared\TypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PropertyGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\GroupTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateComponentTypeRequest();
    $request->requestBody = new UpdateComponentTypeRequestBody();
    $request->requestBody->componentTypeName = 'numquam';
    $request->requestBody->description = 'veritatis';
    $request->requestBody->extendsFrom = [
        'ipsa',
    ];
    $request->requestBody->functions = [
        'odio' => new FunctionRequest(),
        'quaerat' => new FunctionRequest(),
    ];
    $request->requestBody->isSingleton = false;
    $request->requestBody->propertyDefinitions = [
        'quidem' => new PropertyDefinitionRequest(),
        'voluptatibus' => new PropertyDefinitionRequest(),
        'voluptas' => new PropertyDefinitionRequest(),
        'natus' => new PropertyDefinitionRequest(),
    ];
    $request->requestBody->propertyGroups = [
        'atque' => new PropertyGroupRequest(),
    ];
    $request->xAmzAlgorithm = 'sit';
    $request->xAmzContentSha256 = 'fugiat';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'soluta';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'voluptate';
    $request->componentTypeId = 'dolorum';
    $request->workspaceId = 'deleniti';

    $response = $sdk->sdk->updateComponentType($request);

    if ($response->updateComponentTypeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateEntity

Updates an entity.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEntityRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEntityRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ComponentUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\ComponentPropertyGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\GroupTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PropertyGroupUpdateTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PropertyRequest;
use \OpenAPI\OpenAPI\Models\Shared\PropertyDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DataType;
use \OpenAPI\OpenAPI\Models\Shared\DataValue;
use \OpenAPI\OpenAPI\Models\Shared\RelationshipValue;
use \OpenAPI\OpenAPI\Models\Shared\Relationship;
use \OpenAPI\OpenAPI\Models\Shared\TypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PropertyUpdateTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ComponentUpdateTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEntityRequestBodyParentEntityUpdate;
use \OpenAPI\OpenAPI\Models\Shared\ParentEntityUpdateTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateEntityRequest();
    $request->requestBody = new UpdateEntityRequestBody();
    $request->requestBody->componentUpdates = [
        'necessitatibus' => new ComponentUpdateRequest(),
        'distinctio' => new ComponentUpdateRequest(),
        'asperiores' => new ComponentUpdateRequest(),
    ];
    $request->requestBody->description = 'nihil';
    $request->requestBody->entityName = 'ipsum';
    $request->requestBody->parentEntityUpdate = new UpdateEntityRequestBodyParentEntityUpdate();
    $request->requestBody->parentEntityUpdate->parentEntityId = 'voluptate';
    $request->requestBody->parentEntityUpdate->updateType = ParentEntityUpdateTypeEnum::DELETE;
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'eius';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'amet';
    $request->xAmzSignature = 'optio';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->entityId = 'ad';
    $request->workspaceId = 'saepe';

    $response = $sdk->sdk->updateEntity($request);

    if ($response->updateEntityResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePricingPlan

Update the pricing plan.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePricingPlanRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePricingPlanRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePricingPlanRequestBodyPricingModeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePricingPlanRequest();
    $request->requestBody = new UpdatePricingPlanRequestBody();
    $request->requestBody->bundleNames = [
        'deserunt',
        'provident',
    ];
    $request->requestBody->pricingMode = UpdatePricingPlanRequestBodyPricingModeEnum::BASIC;
    $request->xAmzAlgorithm = 'repellendus';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'similique';
    $request->xAmzDate = 'alias';
    $request->xAmzSecurityToken = 'at';
    $request->xAmzSignature = 'quaerat';
    $request->xAmzSignedHeaders = 'tempora';

    $response = $sdk->sdk->updatePricingPlan($request);

    if ($response->updatePricingPlanResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateScene

Updates a scene.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSceneRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSceneRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSceneRequest();
    $request->requestBody = new UpdateSceneRequestBody();
    $request->requestBody->capabilities = [
        'quod',
        'officiis',
    ];
    $request->requestBody->contentLocation = 'qui';
    $request->requestBody->description = 'dolorum';
    $request->requestBody->sceneMetadata = [
        'esse' => 'harum',
        'iusto' => 'ipsum',
        'quisquam' => 'tenetur',
        'amet' => 'tempore',
    ];
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'numquam';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'nihil';
    $request->sceneId = 'sit';
    $request->workspaceId = 'expedita';

    $response = $sdk->sdk->updateScene($request);

    if ($response->updateSceneResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateWorkspace

Updates a workspace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkspaceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkspaceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateWorkspaceRequest();
    $request->requestBody = new UpdateWorkspaceRequestBody();
    $request->requestBody->description = 'neque';
    $request->requestBody->role = 'sed';
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'libero';
    $request->xAmzCredential = 'voluptas';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'quam';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'incidunt';
    $request->workspaceId = 'qui';

    $response = $sdk->sdk->updateWorkspace($request);

    if ($response->updateWorkspaceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
