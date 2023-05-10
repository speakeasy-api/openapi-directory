# admin

## Overview

Application functionality that is only accessible to admin users.  Includes logging, global rules, and export/import of registry data.

### Available Operations

* [createGlobalRule](#createglobalrule) - Create global rule
* [createRoleMapping](#createrolemapping) - Create a new role mapping
* [deleteAllGlobalRules](#deleteallglobalrules) - Delete all global rules
* [deleteGlobalRule](#deleteglobalrule) - Delete global rule
* [deleteRoleMapping](#deleterolemapping) - Delete a role mapping
* [exportData](#exportdata) - Export registry data
* [getConfigProperty](#getconfigproperty) - Get configuration property value
* [getGlobalRuleConfig](#getglobalruleconfig) - Get global rule configuration
* [getLogConfiguration](#getlogconfiguration) - Get a single logger configuration
* [getRoleMapping](#getrolemapping) - Return a single role mapping
* [importData](#importdata) - Import registry data
* [listArtifactTypes](#listartifacttypes) - List artifact types
* [listConfigProperties](#listconfigproperties) - List all configuration properties
* [listGlobalRules](#listglobalrules) - List global rules
* [listLogConfigurations](#listlogconfigurations) - List logging configurations
* [listRoleMappings](#listrolemappings) - List all role mappings
* [removeLogConfiguration](#removelogconfiguration) - Removes logger configuration
* [resetConfigProperty](#resetconfigproperty) - Reset a configuration property
* [setLogConfiguration](#setlogconfiguration) - Set a logger's configuration
* [updateConfigProperty](#updateconfigproperty) - Update a configuration property
* [updateGlobalRuleConfig](#updateglobalruleconfig) - Update global rule configuration
* [updateRoleMapping](#updaterolemapping) - Update a role mapping

## createGlobalRule

Adds a rule to the list of globally configured rules.

This operation can fail for the following reasons:

* The rule type is unknown (HTTP error `400`)
* The rule already exists (HTTP error `409`)
* A server error occurred (HTTP error `500`)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Rule;
use \OpenAPI\OpenAPI\Models\Shared\RuleTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Rule();
    $request->config = 'provident';
    $request->type = RuleTypeEnum::VALIDITY;

    $response = $sdk->admin->createGlobalRule($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createRoleMapping

Creates a new mapping between a user/principal and a role.

This operation can fail for the following reasons:

* A server error occurred (HTTP error `500`)



### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\RoleMapping;
use \OpenAPI\OpenAPI\Models\Shared\RoleTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RoleMapping();
    $request->principalId = 'distinctio';
    $request->principalName = 'quibusdam';
    $request->role = RoleTypeEnum::DEVELOPER;

    $response = $sdk->admin->createRoleMapping($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAllGlobalRules

Deletes all globally configured rules.

This operation can fail for the following reasons:

* A server error occurred (HTTP error `500`)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->admin->deleteAllGlobalRules();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteGlobalRule

Deletes a single global rule.  If this is the only rule configured, this is the same
as deleting **all** rules.

This operation can fail for the following reasons:

* Invalid rule name/type (HTTP error `400`)
* No rule with name/type `rule` exists (HTTP error `404`)
* Rule cannot be deleted (HTTP error `409`)
* A server error occurred (HTTP error `500`)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteGlobalRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\RuleTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteGlobalRuleRequest();
    $request->rule = RuleTypeEnum::VALIDITY;

    $response = $sdk->admin->deleteGlobalRule($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRoleMapping

Deletes a single role mapping, effectively denying access to a user/principal.

This operation can fail for the following reasons:

* No role mapping for the principalId exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRoleMappingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRoleMappingRequest();
    $request->principalId = 'nulla';

    $response = $sdk->admin->deleteRoleMapping($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportData

Exports registry data as a ZIP archive.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ExportDataRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportDataRequest();
    $request->forBrowser = false;

    $response = $sdk->admin->exportData($request);

    if ($response->downloadRef !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConfigProperty

Returns the value of a single configuration property.

This operation may fail for one of the following reasons:

* Property not found or not configured (HTTP error `404`)
* A server error occurred (HTTP error `500`)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetConfigPropertyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConfigPropertyRequest();
    $request->propertyName = 'corrupti';

    $response = $sdk->admin->getConfigProperty($request);

    if ($response->configurationProperty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGlobalRuleConfig

Returns information about the named globally configured rule.

This operation can fail for the following reasons:

* Invalid rule name/type (HTTP error `400`)
* No rule with name/type `rule` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGlobalRuleConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\RuleTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGlobalRuleConfigRequest();
    $request->rule = RuleTypeEnum::VALIDITY;

    $response = $sdk->admin->getGlobalRuleConfig($request);

    if ($response->rule !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLogConfiguration

Returns the configured logger configuration for the provided logger name, if no logger configuration is persisted it will return the current default log configuration in the system.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetLogConfigurationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLogConfigurationRequest();
    $request->logger = 'illum';

    $response = $sdk->admin->getLogConfiguration($request);

    if ($response->namedLogConfiguration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRoleMapping

Gets the details of a single role mapping (by `principalId`).

This operation can fail for the following reasons:

* No role mapping for the `principalId` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRoleMappingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRoleMappingRequest();
    $request->principalId = 'vel';

    $response = $sdk->admin->getRoleMapping($request);

    if ($response->roleMapping !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importData

Imports registry data that was previously exported using the `/admin/export` operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ImportDataRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportDataRequest();
    $request->requestBody = 'error';
    $request->xRegistryPreserveContentId = false;
    $request->xRegistryPreserveGlobalId = false;

    $response = $sdk->admin->importData($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listArtifactTypes

Gets a list of all the configured artifact types.

This operation can fail for the following reasons:

* A server error occurred (HTTP error `500`)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->admin->listArtifactTypes();

    if ($response->artifactTypeInfos !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listConfigProperties

Returns a list of all configuration properties that have been set.  The list is not paged.

This operation may fail for one of the following reasons:

* A server error occurred (HTTP error `500`)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->admin->listConfigProperties();

    if ($response->configurationProperties !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listGlobalRules

Gets a list of all the currently configured global rules (if any).

This operation can fail for the following reasons:

* A server error occurred (HTTP error `500`)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->admin->listGlobalRules();

    if ($response->ruleTypes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listLogConfigurations

List all of the configured logging levels.  These override the default
logging configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->admin->listLogConfigurations();

    if ($response->namedLogConfigurations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRoleMappings

Gets a list of all role mappings configured in the registry (if any).

This operation can fail for the following reasons:

* A server error occurred (HTTP error `500`)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->admin->listRoleMappings();

    if ($response->roleMappings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeLogConfiguration

Removes the configured logger configuration (if any) for the given logger.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RemoveLogConfigurationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveLogConfigurationRequest();
    $request->logger = 'deserunt';

    $response = $sdk->admin->removeLogConfiguration($request);

    if ($response->namedLogConfiguration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resetConfigProperty

Resets the value of a single configuration property.  This will return the property to
its default value (see external documentation for supported properties and their default
values).

This operation may fail for one of the following reasons:

* Property not found or not configured (HTTP error `404`)
* A server error occurred (HTTP error `500`)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ResetConfigPropertyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResetConfigPropertyRequest();
    $request->propertyName = 'suscipit';

    $response = $sdk->admin->resetConfigProperty($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setLogConfiguration

Configures the logger referenced by the provided logger name with the given configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SetLogConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\LogConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\LogLevelEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetLogConfigurationRequest();
    $request->logConfiguration = new LogConfiguration();
    $request->logConfiguration->level = LogLevelEnum::SEVERE;
    $request->logger = 'magnam';

    $response = $sdk->admin->setLogConfiguration($request);

    if ($response->namedLogConfiguration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateConfigProperty

Updates the value of a single configuration property.

This operation may fail for one of the following reasons:

* Property not found or not configured (HTTP error `404`)
* A server error occurred (HTTP error `500`)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConfigPropertyRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateConfigurationProperty;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateConfigPropertyRequest();
    $request->updateConfigurationProperty = new UpdateConfigurationProperty();
    $request->updateConfigurationProperty->value = 'debitis';
    $request->propertyName = 'ipsa';

    $response = $sdk->admin->updateConfigProperty($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateGlobalRuleConfig

Updates the configuration for a globally configured rule.

This operation can fail for the following reasons:

* Invalid rule name/type (HTTP error `400`)
* No rule with name/type `rule` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGlobalRuleConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\Rule;
use \OpenAPI\OpenAPI\Models\Shared\RuleTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateGlobalRuleConfigRequest();
    $request->rule1 = new Rule();
    $request->rule1->config = 'delectus';
    $request->rule1->type = RuleTypeEnum::VALIDITY;
    $request->rulePathParameter = RuleTypeEnum::VALIDITY;

    $response = $sdk->admin->updateGlobalRuleConfig($request);

    if ($response->rule !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateRoleMapping

Updates a single role mapping for one user/principal.

This operation can fail for the following reasons:

* No role mapping for the principalId exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRoleMappingRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateRole;
use \OpenAPI\OpenAPI\Models\Shared\RoleTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateRoleMappingRequest();
    $request->updateRole = new UpdateRole();
    $request->updateRole->role = RoleTypeEnum::READ_ONLY;
    $request->principalId = 'suscipit';

    $response = $sdk->admin->updateRoleMapping($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
