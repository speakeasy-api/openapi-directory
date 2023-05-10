# SDK

## Overview

Amazon Managed Service for Prometheus

Amazon Web Services documentation
<https://docs.aws.amazon.com/aps/>
### Available Operations

* [createAlertManagerDefinition](#createalertmanagerdefinition) - Create an alert manager definition.
* [createLoggingConfiguration](#createloggingconfiguration) - Create logging configuration.
* [createRuleGroupsNamespace](#createrulegroupsnamespace) - Create a rule group namespace.
* [createWorkspace](#createworkspace) - Creates a new AMP workspace.
* [deleteAlertManagerDefinition](#deletealertmanagerdefinition) - Deletes an alert manager definition.
* [deleteLoggingConfiguration](#deleteloggingconfiguration) - Delete logging configuration.
* [deleteRuleGroupsNamespace](#deleterulegroupsnamespace) - Delete a rule groups namespace.
* [deleteWorkspace](#deleteworkspace) - Deletes an AMP workspace.
* [describeAlertManagerDefinition](#describealertmanagerdefinition) - Describes an alert manager definition.
* [describeLoggingConfiguration](#describeloggingconfiguration) - Describes logging configuration.
* [describeRuleGroupsNamespace](#describerulegroupsnamespace) - Describe a rule groups namespace.
* [describeWorkspace](#describeworkspace) - Describes an existing AMP workspace.
* [listRuleGroupsNamespaces](#listrulegroupsnamespaces) - Lists rule groups namespaces.
* [listTagsForResource](#listtagsforresource) - Lists the tags you have assigned to the resource.
* [listWorkspaces](#listworkspaces) - Lists all AMP workspaces, including workspaces being created or deleted.
* [putAlertManagerDefinition](#putalertmanagerdefinition) - Update an alert manager definition.
* [putRuleGroupsNamespace](#putrulegroupsnamespace) - Update a rule groups namespace.
* [tagResource](#tagresource) - Creates tags for the specified resource.
* [untagResource](#untagresource) - Deletes tags from the specified resource.
* [updateLoggingConfiguration](#updateloggingconfiguration) - Update logging configuration.
* [updateWorkspaceAlias](#updateworkspacealias) - Updates an AMP workspace alias.

## createAlertManagerDefinition

Create an alert manager definition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAlertManagerDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateAlertManagerDefinitionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAlertManagerDefinitionRequest();
    $request->requestBody = new CreateAlertManagerDefinitionRequestBody();
    $request->requestBody->clientToken = 'deserunt';
    $request->requestBody->data = 'suscipit';
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'debitis';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'tempora';
    $request->xAmzSignedHeaders = 'suscipit';
    $request->workspaceId = 'molestiae';

    $response = $sdk->sdk->createAlertManagerDefinition($request);

    if ($response->createAlertManagerDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createLoggingConfiguration

Create logging configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateLoggingConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateLoggingConfigurationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateLoggingConfigurationRequest();
    $request->requestBody = new CreateLoggingConfigurationRequestBody();
    $request->requestBody->clientToken = 'minus';
    $request->requestBody->logGroupArn = 'placeat';
    $request->xAmzAlgorithm = 'voluptatum';
    $request->xAmzContentSha256 = 'iusto';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'nisi';
    $request->xAmzSecurityToken = 'recusandae';
    $request->xAmzSignature = 'temporibus';
    $request->xAmzSignedHeaders = 'ab';
    $request->workspaceId = 'quis';

    $response = $sdk->sdk->createLoggingConfiguration($request);

    if ($response->createLoggingConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createRuleGroupsNamespace

Create a rule group namespace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateRuleGroupsNamespaceRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateRuleGroupsNamespaceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateRuleGroupsNamespaceRequest();
    $request->requestBody = new CreateRuleGroupsNamespaceRequestBody();
    $request->requestBody->clientToken = 'veritatis';
    $request->requestBody->data = 'deserunt';
    $request->requestBody->name = 'Roberta Sipes';
    $request->requestBody->tags = [
        'at' => 'at',
    ];
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'quod';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'porro';
    $request->workspaceId = 'dolorum';

    $response = $sdk->sdk->createRuleGroupsNamespace($request);

    if ($response->createRuleGroupsNamespaceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createWorkspace

Creates a new AMP workspace.

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
    $request->requestBody->alias = 'dicta';
    $request->requestBody->clientToken = 'nam';
    $request->requestBody->tags = [
        'occaecati' => 'fugit',
        'deleniti' => 'hic',
        'optio' => 'totam',
    ];
    $request->xAmzAlgorithm = 'beatae';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'impedit';
    $request->xAmzSignedHeaders = 'cum';

    $response = $sdk->sdk->createWorkspace($request);

    if ($response->createWorkspaceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAlertManagerDefinition

Deletes an alert manager definition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAlertManagerDefinitionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAlertManagerDefinitionRequest();
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'ad';
    $request->xAmzSignedHeaders = 'natus';
    $request->clientToken = 'sed';
    $request->workspaceId = 'iste';

    $response = $sdk->sdk->deleteAlertManagerDefinition($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteLoggingConfiguration

Delete logging configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLoggingConfigurationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteLoggingConfigurationRequest();
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'laboriosam';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'fuga';
    $request->xAmzSignedHeaders = 'in';
    $request->clientToken = 'corporis';
    $request->workspaceId = 'iste';

    $response = $sdk->sdk->deleteLoggingConfiguration($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRuleGroupsNamespace

Delete a rule groups namespace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRuleGroupsNamespaceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRuleGroupsNamespaceRequest();
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'est';
    $request->clientToken = 'mollitia';
    $request->name = 'Ernest Ebert';
    $request->workspaceId = 'nobis';

    $response = $sdk->sdk->deleteRuleGroupsNamespace($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteWorkspace

Deletes an AMP workspace.

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
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'nemo';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'accusantium';
    $request->xAmzSignedHeaders = 'iure';
    $request->clientToken = 'culpa';
    $request->workspaceId = 'doloribus';

    $response = $sdk->sdk->deleteWorkspace($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAlertManagerDefinition

Describes an alert manager definition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAlertManagerDefinitionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAlertManagerDefinitionRequest();
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'culpa';
    $request->xAmzSignature = 'consequuntur';
    $request->xAmzSignedHeaders = 'repellat';
    $request->workspaceId = 'mollitia';

    $response = $sdk->sdk->describeAlertManagerDefinition($request);

    if ($response->describeAlertManagerDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeLoggingConfiguration

Describes logging configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeLoggingConfigurationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeLoggingConfigurationRequest();
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'numquam';
    $request->xAmzCredential = 'commodi';
    $request->xAmzDate = 'quam';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'velit';
    $request->xAmzSignedHeaders = 'error';
    $request->workspaceId = 'quia';

    $response = $sdk->sdk->describeLoggingConfiguration($request);

    if ($response->describeLoggingConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeRuleGroupsNamespace

Describe a rule groups namespace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRuleGroupsNamespaceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeRuleGroupsNamespaceRequest();
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'vitae';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'animi';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'quo';
    $request->name = 'Mandy Hills';
    $request->workspaceId = 'aut';

    $response = $sdk->sdk->describeRuleGroupsNamespace($request);

    if ($response->describeRuleGroupsNamespaceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeWorkspace

Describes an existing AMP workspace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeWorkspaceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeWorkspaceRequest();
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'temporibus';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'voluptatibus';
    $request->workspaceId = 'vero';

    $response = $sdk->sdk->describeWorkspace($request);

    if ($response->describeWorkspaceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRuleGroupsNamespaces

Lists rule groups namespaces.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListRuleGroupsNamespacesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRuleGroupsNamespacesRequest();
    $request->xAmzAlgorithm = 'nihil';
    $request->xAmzContentSha256 = 'praesentium';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'cum';
    $request->maxResults = 19987;
    $request->name = 'Bessie Grady II';
    $request->nextToken = 'dolore';
    $request->workspaceId = 'iusto';

    $response = $sdk->sdk->listRuleGroupsNamespaces($request);

    if ($response->listRuleGroupsNamespacesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Lists the tags you have assigned to the resource.

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
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'harum';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'repudiandae';
    $request->xAmzSignedHeaders = 'quae';
    $request->resourceArn = 'ipsum';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listWorkspaces

Lists all AMP workspaces, including workspaces being created or deleted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListWorkspacesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListWorkspacesRequest();
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'molestias';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'modi';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'rem';
    $request->alias = 'voluptates';
    $request->maxResults = 93940;
    $request->nextToken = 'repudiandae';

    $response = $sdk->sdk->listWorkspaces($request);

    if ($response->listWorkspacesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putAlertManagerDefinition

Update an alert manager definition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutAlertManagerDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutAlertManagerDefinitionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutAlertManagerDefinitionRequest();
    $request->requestBody = new PutAlertManagerDefinitionRequestBody();
    $request->requestBody->clientToken = 'sint';
    $request->requestBody->data = 'veritatis';
    $request->xAmzAlgorithm = 'itaque';
    $request->xAmzContentSha256 = 'incidunt';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'consequatur';
    $request->xAmzSecurityToken = 'est';
    $request->xAmzSignature = 'quibusdam';
    $request->xAmzSignedHeaders = 'explicabo';
    $request->workspaceId = 'deserunt';

    $response = $sdk->sdk->putAlertManagerDefinition($request);

    if ($response->putAlertManagerDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putRuleGroupsNamespace

Update a rule groups namespace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutRuleGroupsNamespaceRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutRuleGroupsNamespaceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutRuleGroupsNamespaceRequest();
    $request->requestBody = new PutRuleGroupsNamespaceRequestBody();
    $request->requestBody->clientToken = 'distinctio';
    $request->requestBody->data = 'quibusdam';
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'cupiditate';
    $request->xAmzSignature = 'quos';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->name = 'Mr. Nadine Hills';
    $request->workspaceId = 'excepturi';

    $response = $sdk->sdk->putRuleGroupsNamespace($request);

    if ($response->putRuleGroupsNamespaceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Creates tags for the specified resource.

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
        'facilis' => 'tempore',
        'labore' => 'delectus',
    ];
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'non';
    $request->xAmzCredential = 'eligendi';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'necessitatibus';
    $request->resourceArn = 'sint';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Deletes tags from the specified resource.

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
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'debitis';
    $request->xAmzDate = 'a';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'in';
    $request->resourceArn = 'illum';
    $request->tagKeys = [
        'rerum',
        'dicta',
        'magnam',
        'cumque',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateLoggingConfiguration

Update logging configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLoggingConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLoggingConfigurationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateLoggingConfigurationRequest();
    $request->requestBody = new UpdateLoggingConfigurationRequestBody();
    $request->requestBody->clientToken = 'facere';
    $request->requestBody->logGroupArn = 'ea';
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'non';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->workspaceId = 'delectus';

    $response = $sdk->sdk->updateLoggingConfiguration($request);

    if ($response->updateLoggingConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateWorkspaceAlias

Updates an AMP workspace alias.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkspaceAliasRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkspaceAliasRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateWorkspaceAliasRequest();
    $request->requestBody = new UpdateWorkspaceAliasRequestBody();
    $request->requestBody->alias = 'quidem';
    $request->requestBody->clientToken = 'provident';
    $request->xAmzAlgorithm = 'nam';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'blanditiis';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'amet';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->workspaceId = 'nisi';

    $response = $sdk->sdk->updateWorkspaceAlias($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
