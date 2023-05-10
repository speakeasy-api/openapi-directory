# SDK

## Overview

<important> <p> <b>Product update</b> </p> <p>We recommend <a href="http://aws.amazon.com/application-migration-service">Amazon Web Services Application Migration Service</a> (Amazon Web Services MGN) as the primary migration service for lift-and-shift migrations. If Amazon Web Services MGN is unavailable in a specific Amazon Web Services Region, you can use the Server Migration Service APIs through March 2023.</p> </important> <p>Server Migration Service (Server Migration Service) makes it easier and faster for you to migrate your on-premises workloads to Amazon Web Services. To learn more about Server Migration Service, see the following resources:</p> <ul> <li> <p> <a href="http://aws.amazon.com/server-migration-service/">Server Migration Service product page</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/server-migration-service/latest/userguide/">Server Migration Service User Guide</a> </p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/sms/>
### Available Operations

* [createApp](#createapp) - Creates an application. An application consists of one or more server groups. Each server group contain one or more servers.
* [createReplicationJob](#createreplicationjob) - Creates a replication job. The replication job schedules periodic replication runs to replicate your server to Amazon Web Services. Each replication run creates an Amazon Machine Image (AMI).
* [deleteApp](#deleteapp) - Deletes the specified application. Optionally deletes the launched stack associated with the application and all Server Migration Service replication jobs for servers in the application.
* [deleteAppLaunchConfiguration](#deleteapplaunchconfiguration) - Deletes the launch configuration for the specified application.
* [deleteAppReplicationConfiguration](#deleteappreplicationconfiguration) - Deletes the replication configuration for the specified application.
* [deleteAppValidationConfiguration](#deleteappvalidationconfiguration) - Deletes the validation configuration for the specified application.
* [deleteReplicationJob](#deletereplicationjob) - <p>Deletes the specified replication job.</p> <p>After you delete a replication job, there are no further replication runs. Amazon Web Services deletes the contents of the Amazon S3 bucket used to store Server Migration Service artifacts. The AMIs created by the replication runs are not deleted.</p>
* [deleteServerCatalog](#deleteservercatalog) - Deletes all servers from your server catalog.
* [disassociateConnector](#disassociateconnector) - <p>Disassociates the specified connector from Server Migration Service.</p> <p>After you disassociate a connector, it is no longer available to support replication jobs.</p>
* [generateChangeSet](#generatechangeset) - Generates a target change set for a currently launched stack and writes it to an Amazon S3 object in the customer’s Amazon S3 bucket.
* [generateTemplate](#generatetemplate) - Generates an CloudFormation template based on the current launch configuration and writes it to an Amazon S3 object in the customer’s Amazon S3 bucket.
* [getApp](#getapp) - Retrieve information about the specified application.
* [getAppLaunchConfiguration](#getapplaunchconfiguration) - Retrieves the application launch configuration associated with the specified application.
* [getAppReplicationConfiguration](#getappreplicationconfiguration) - Retrieves the application replication configuration associated with the specified application.
* [getAppValidationConfiguration](#getappvalidationconfiguration) - Retrieves information about a configuration for validating an application.
* [getAppValidationOutput](#getappvalidationoutput) - Retrieves output from validating an application.
* [getConnectors](#getconnectors) - Describes the connectors registered with the Server Migration Service.
* [getReplicationJobs](#getreplicationjobs) - Describes the specified replication job or all of your replication jobs.
* [getReplicationRuns](#getreplicationruns) - Describes the replication runs for the specified replication job.
* [getServers](#getservers) - <p>Describes the servers in your server catalog.</p> <p>Before you can describe your servers, you must import them using <a>ImportServerCatalog</a>.</p>
* [importAppCatalog](#importappcatalog) - Allows application import from Migration Hub.
* [importServerCatalog](#importservercatalog) - <p>Gathers a complete list of on-premises servers. Connectors must be installed and monitoring all servers to import.</p> <p>This call returns immediately, but might take additional time to retrieve all the servers.</p>
* [launchApp](#launchapp) - Launches the specified application as a stack in CloudFormation.
* [listApps](#listapps) - Retrieves summaries for all applications.
* [notifyAppValidationOutput](#notifyappvalidationoutput) - Provides information to Server Migration Service about whether application validation is successful.
* [putAppLaunchConfiguration](#putapplaunchconfiguration) - Creates or updates the launch configuration for the specified application.
* [putAppReplicationConfiguration](#putappreplicationconfiguration) - Creates or updates the replication configuration for the specified application.
* [putAppValidationConfiguration](#putappvalidationconfiguration) - Creates or updates a validation configuration for the specified application.
* [startAppReplication](#startappreplication) - Starts replicating the specified application by creating replication jobs for each server in the application.
* [startOnDemandAppReplication](#startondemandappreplication) - Starts an on-demand replication run for the specified application.
* [startOnDemandReplicationRun](#startondemandreplicationrun) - <p>Starts an on-demand replication run for the specified replication job. This replication run starts immediately. This replication run is in addition to the ones already scheduled.</p> <p>There is a limit on the number of on-demand replications runs that you can request in a 24-hour period.</p>
* [stopAppReplication](#stopappreplication) - Stops replicating the specified application by deleting the replication job for each server in the application.
* [terminateApp](#terminateapp) - Terminates the stack for the specified application.
* [updateApp](#updateapp) - Updates the specified application.
* [updateReplicationJob](#updatereplicationjob) - Updates the specified settings for the specified replication job.

## createApp

Creates an application. An application consists of one or more server groups. Each server group contain one or more servers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAppRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateAppRequest;
use \OpenAPI\OpenAPI\Models\Shared\ServerGroup;
use \OpenAPI\OpenAPI\Models\Shared\Server;
use \OpenAPI\OpenAPI\Models\Shared\ServerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\VmServer;
use \OpenAPI\OpenAPI\Models\Shared\VmManagerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\VmServerAddress;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateAppXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAppRequest();
    $request->createAppRequest = new CreateAppRequest();
    $request->createAppRequest->clientToken = 'tempora';
    $request->createAppRequest->description = 'suscipit';
    $request->createAppRequest->name = 'Alexandra Schulist';
    $request->createAppRequest->roleName = 'excepturi';
    $request->createAppRequest->serverGroups = [
        new ServerGroup(),
        new ServerGroup(),
    ];
    $request->createAppRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'temporibus';
    $request->xAmzContentSha256 = 'ab';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->xAmzTarget = CreateAppXAmzTargetEnum::AWS_SERVER_MIGRATION_SERVICE_V20161024_CREATE_APP;

    $response = $sdk->sdk->createApp($request);

    if ($response->createAppResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createReplicationJob

Creates a replication job. The replication job schedules periodic replication runs to replicate your server to Amazon Web Services. Each replication run creates an Amazon Machine Image (AMI).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateReplicationJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateReplicationJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\LicenseTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateReplicationJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateReplicationJobRequest();
    $request->createReplicationJobRequest = new CreateReplicationJobRequest();
    $request->createReplicationJobRequest->description = 'repellendus';
    $request->createReplicationJobRequest->encrypted = false;
    $request->createReplicationJobRequest->frequency = 957156;
    $request->createReplicationJobRequest->kmsKeyId = 'quo';
    $request->createReplicationJobRequest->licenseType = LicenseTypeEnum::AWS;
    $request->createReplicationJobRequest->numberOfRecentAmisToKeep = 870013;
    $request->createReplicationJobRequest->roleName = 'at';
    $request->createReplicationJobRequest->runOnce = false;
    $request->createReplicationJobRequest->seedReplicationTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-31T09:34:50.024Z');
    $request->createReplicationJobRequest->serverId = 'quod';
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'porro';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'nam';
    $request->xAmzTarget = CreateReplicationJobXAmzTargetEnum::AWS_SERVER_MIGRATION_SERVICE_V20161024_CREATE_REPLICATION_JOB;

    $response = $sdk->sdk->createReplicationJob($request);

    if ($response->createReplicationJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteApp

Deletes the specified application. Optionally deletes the launched stack associated with the application and all Server Migration Service replication jobs for servers in the application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAppRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteAppRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAppXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAppRequest();
    $request->deleteAppRequest = new DeleteAppRequest();
    $request->deleteAppRequest->appId = 'officia';
    $request->deleteAppRequest->forceStopAppReplication = false;
    $request->deleteAppRequest->forceTerminateApp = false;
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'optio';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'beatae';
    $request->xAmzTarget = DeleteAppXAmzTargetEnum::AWS_SERVER_MIGRATION_SERVICE_V20161024_DELETE_APP;

    $response = $sdk->sdk->deleteApp($request);

    if ($response->deleteAppResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAppLaunchConfiguration

Deletes the launch configuration for the specified application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAppLaunchConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteAppLaunchConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAppLaunchConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAppLaunchConfigurationRequest();
    $request->deleteAppLaunchConfigurationRequest = new DeleteAppLaunchConfigurationRequest();
    $request->deleteAppLaunchConfigurationRequest->appId = 'commodi';
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'impedit';
    $request->xAmzSecurityToken = 'cum';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'ipsum';
    $request->xAmzTarget = DeleteAppLaunchConfigurationXAmzTargetEnum::AWS_SERVER_MIGRATION_SERVICE_V20161024_DELETE_APP_LAUNCH_CONFIGURATION;

    $response = $sdk->sdk->deleteAppLaunchConfiguration($request);

    if ($response->deleteAppLaunchConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAppReplicationConfiguration

Deletes the replication configuration for the specified application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAppReplicationConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteAppReplicationConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAppReplicationConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAppReplicationConfigurationRequest();
    $request->deleteAppReplicationConfigurationRequest = new DeleteAppReplicationConfigurationRequest();
    $request->deleteAppReplicationConfigurationRequest->appId = 'excepturi';
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'ad';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'sed';
    $request->xAmzSignature = 'iste';
    $request->xAmzSignedHeaders = 'dolor';
    $request->xAmzTarget = DeleteAppReplicationConfigurationXAmzTargetEnum::AWS_SERVER_MIGRATION_SERVICE_V20161024_DELETE_APP_REPLICATION_CONFIGURATION;

    $response = $sdk->sdk->deleteAppReplicationConfiguration($request);

    if ($response->deleteAppReplicationConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAppValidationConfiguration

Deletes the validation configuration for the specified application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAppValidationConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteAppValidationConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAppValidationConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAppValidationConfigurationRequest();
    $request->deleteAppValidationConfigurationRequest = new DeleteAppValidationConfigurationRequest();
    $request->deleteAppValidationConfigurationRequest->appId = 'natus';
    $request->xAmzAlgorithm = 'laboriosam';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'fuga';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'iste';
    $request->xAmzTarget = DeleteAppValidationConfigurationXAmzTargetEnum::AWS_SERVER_MIGRATION_SERVICE_V20161024_DELETE_APP_VALIDATION_CONFIGURATION;

    $response = $sdk->sdk->deleteAppValidationConfiguration($request);

    if ($response->deleteAppValidationConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteReplicationJob

<p>Deletes the specified replication job.</p> <p>After you delete a replication job, there are no further replication runs. Amazon Web Services deletes the contents of the Amazon S3 bucket used to store Server Migration Service artifacts. The AMIs created by the replication runs are not deleted.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteReplicationJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteReplicationJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteReplicationJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteReplicationJobRequest();
    $request->deleteReplicationJobRequest = new DeleteReplicationJobRequest();
    $request->deleteReplicationJobRequest->replicationJobId = 'iure';
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'est';
    $request->xAmzSignedHeaders = 'mollitia';
    $request->xAmzTarget = DeleteReplicationJobXAmzTargetEnum::AWS_SERVER_MIGRATION_SERVICE_V20161024_DELETE_REPLICATION_JOB;

    $response = $sdk->sdk->deleteReplicationJob($request);

    if ($response->deleteReplicationJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteServerCatalog

Deletes all servers from your server catalog.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteServerCatalogRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteServerCatalogXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteServerCatalogRequest();
    $request->requestBody = [
        'dolores' => 'dolorem',
        'corporis' => 'explicabo',
        'nobis' => 'enim',
    ];
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'nemo';
    $request->xAmzCredential = 'minima';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'accusantium';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'culpa';
    $request->xAmzTarget = DeleteServerCatalogXAmzTargetEnum::AWS_SERVER_MIGRATION_SERVICE_V20161024_DELETE_SERVER_CATALOG;

    $response = $sdk->sdk->deleteServerCatalog($request);

    if ($response->deleteServerCatalogResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateConnector

<p>Disassociates the specified connector from Server Migration Service.</p> <p>After you disassociate a connector, it is no longer available to support replication jobs.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateConnectorRequest;
use \OpenAPI\OpenAPI\Models\Shared\DisassociateConnectorRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateConnectorXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateConnectorRequest();
    $request->disassociateConnectorRequest = new DisassociateConnectorRequest();
    $request->disassociateConnectorRequest->connectorId = 'doloribus';
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'culpa';
    $request->xAmzSignature = 'consequuntur';
    $request->xAmzSignedHeaders = 'repellat';
    $request->xAmzTarget = DisassociateConnectorXAmzTargetEnum::AWS_SERVER_MIGRATION_SERVICE_V20161024_DISASSOCIATE_CONNECTOR;

    $response = $sdk->sdk->disassociateConnector($request);

    if ($response->disassociateConnectorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## generateChangeSet

Generates a target change set for a currently launched stack and writes it to an Amazon S3 object in the customer’s Amazon S3 bucket.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GenerateChangeSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\GenerateChangeSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\OutputFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GenerateChangeSetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GenerateChangeSetRequest();
    $request->generateChangeSetRequest = new GenerateChangeSetRequest();
    $request->generateChangeSetRequest->appId = 'mollitia';
    $request->generateChangeSetRequest->changesetFormat = OutputFormatEnum::YAML;
    $request->xAmzAlgorithm = 'numquam';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'quam';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'velit';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'quia';
    $request->xAmzTarget = GenerateChangeSetXAmzTargetEnum::AWS_SERVER_MIGRATION_SERVICE_V20161024_GENERATE_CHANGE_SET;

    $response = $sdk->sdk->generateChangeSet($request);

    if ($response->generateChangeSetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## generateTemplate

Generates an CloudFormation template based on the current launch configuration and writes it to an Amazon S3 object in the customer’s Amazon S3 bucket.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GenerateTemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\GenerateTemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\OutputFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GenerateTemplateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GenerateTemplateRequest();
    $request->generateTemplateRequest = new GenerateTemplateRequest();
    $request->generateTemplateRequest->appId = 'quis';
    $request->generateTemplateRequest->templateFormat = OutputFormatEnum::JSON;
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'animi';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'odit';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'sequi';
    $request->xAmzSignedHeaders = 'tenetur';
    $request->xAmzTarget = GenerateTemplateXAmzTargetEnum::AWS_SERVER_MIGRATION_SERVICE_V20161024_GENERATE_TEMPLATE;

    $response = $sdk->sdk->generateTemplate($request);

    if ($response->generateTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApp

Retrieve information about the specified application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAppRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetAppRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAppXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAppRequest();
    $request->getAppRequest = new GetAppRequest();
    $request->getAppRequest->appId = 'ipsam';
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'possimus';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'temporibus';
    $request->xAmzSignedHeaders = 'laborum';
    $request->xAmzTarget = GetAppXAmzTargetEnum::AWS_SERVER_MIGRATION_SERVICE_V20161024_GET_APP;

    $response = $sdk->sdk->getApp($request);

    if ($response->getAppResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAppLaunchConfiguration

Retrieves the application launch configuration associated with the specified application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAppLaunchConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetAppLaunchConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAppLaunchConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAppLaunchConfigurationRequest();
    $request->getAppLaunchConfigurationRequest = new GetAppLaunchConfigurationRequest();
    $request->getAppLaunchConfigurationRequest->appId = 'quasi';
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->xAmzTarget = GetAppLaunchConfigurationXAmzTargetEnum::AWS_SERVER_MIGRATION_SERVICE_V20161024_GET_APP_LAUNCH_CONFIGURATION;

    $response = $sdk->sdk->getAppLaunchConfiguration($request);

    if ($response->getAppLaunchConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAppReplicationConfiguration

Retrieves the application replication configuration associated with the specified application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAppReplicationConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetAppReplicationConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAppReplicationConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAppReplicationConfigurationRequest();
    $request->getAppReplicationConfigurationRequest = new GetAppReplicationConfigurationRequest();
    $request->getAppReplicationConfigurationRequest->appId = 'omnis';
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'doloremque';
    $request->xAmzSecurityToken = 'reprehenderit';
    $request->xAmzSignature = 'ut';
    $request->xAmzSignedHeaders = 'maiores';
    $request->xAmzTarget = GetAppReplicationConfigurationXAmzTargetEnum::AWS_SERVER_MIGRATION_SERVICE_V20161024_GET_APP_REPLICATION_CONFIGURATION;

    $response = $sdk->sdk->getAppReplicationConfiguration($request);

    if ($response->getAppReplicationConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAppValidationConfiguration

Retrieves information about a configuration for validating an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAppValidationConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetAppValidationConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAppValidationConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAppValidationConfigurationRequest();
    $request->getAppValidationConfigurationRequest = new GetAppValidationConfigurationRequest();
    $request->getAppValidationConfigurationRequest->appId = 'dicta';
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'dolore';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'harum';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->xAmzTarget = GetAppValidationConfigurationXAmzTargetEnum::AWS_SERVER_MIGRATION_SERVICE_V20161024_GET_APP_VALIDATION_CONFIGURATION;

    $response = $sdk->sdk->getAppValidationConfiguration($request);

    if ($response->getAppValidationConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAppValidationOutput

Retrieves output from validating an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAppValidationOutputRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetAppValidationOutputRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAppValidationOutputXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAppValidationOutputRequest();
    $request->getAppValidationOutputRequest = new GetAppValidationOutputRequest();
    $request->getAppValidationOutputRequest->appId = 'commodi';
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'quae';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'molestias';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'pariatur';
    $request->xAmzTarget = GetAppValidationOutputXAmzTargetEnum::AWS_SERVER_MIGRATION_SERVICE_V20161024_GET_APP_VALIDATION_OUTPUT;

    $response = $sdk->sdk->getAppValidationOutput($request);

    if ($response->getAppValidationOutputResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConnectors

Describes the connectors registered with the Server Migration Service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetConnectorsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetConnectorsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetConnectorsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConnectorsRequest();
    $request->getConnectorsRequest = new GetConnectorsRequest();
    $request->getConnectorsRequest->maxResults = 265389;
    $request->getConnectorsRequest->nextToken = 'praesentium';
    $request->xAmzAlgorithm = 'rem';
    $request->xAmzContentSha256 = 'voluptates';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'repudiandae';
    $request->xAmzSecurityToken = 'sint';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'itaque';
    $request->xAmzTarget = GetConnectorsXAmzTargetEnum::AWS_SERVER_MIGRATION_SERVICE_V20161024_GET_CONNECTORS;
    $request->maxResults = 'incidunt';
    $request->nextToken = 'enim';

    $response = $sdk->sdk->getConnectors($request);

    if ($response->getConnectorsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReplicationJobs

Describes the specified replication job or all of your replication jobs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetReplicationJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetReplicationJobsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetReplicationJobsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReplicationJobsRequest();
    $request->getReplicationJobsRequest = new GetReplicationJobsRequest();
    $request->getReplicationJobsRequest->maxResults = 9356;
    $request->getReplicationJobsRequest->nextToken = 'est';
    $request->getReplicationJobsRequest->replicationJobId = 'quibusdam';
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'qui';
    $request->xAmzTarget = GetReplicationJobsXAmzTargetEnum::AWS_SERVER_MIGRATION_SERVICE_V20161024_GET_REPLICATION_JOBS;
    $request->maxResults = 'aliquid';
    $request->nextToken = 'cupiditate';

    $response = $sdk->sdk->getReplicationJobs($request);

    if ($response->getReplicationJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReplicationRuns

Describes the replication runs for the specified replication job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetReplicationRunsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetReplicationRunsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetReplicationRunsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReplicationRunsRequest();
    $request->getReplicationRunsRequest = new GetReplicationRunsRequest();
    $request->getReplicationRunsRequest->maxResults = 552822;
    $request->getReplicationRunsRequest->nextToken = 'perferendis';
    $request->getReplicationRunsRequest->replicationJobId = 'magni';
    $request->xAmzAlgorithm = 'assumenda';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'alias';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'tempora';
    $request->xAmzTarget = GetReplicationRunsXAmzTargetEnum::AWS_SERVER_MIGRATION_SERVICE_V20161024_GET_REPLICATION_RUNS;
    $request->maxResults = 'facilis';
    $request->nextToken = 'tempore';

    $response = $sdk->sdk->getReplicationRuns($request);

    if ($response->getReplicationRunsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getServers

<p>Describes the servers in your server catalog.</p> <p>Before you can describe your servers, you must import them using <a>ImportServerCatalog</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetServersRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetServersRequest;
use \OpenAPI\OpenAPI\Models\Shared\VmServerAddress;
use \OpenAPI\OpenAPI\Models\Operations\GetServersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetServersRequest();
    $request->getServersRequest = new GetServersRequest();
    $request->getServersRequest->maxResults = 288476;
    $request->getServersRequest->nextToken = 'delectus';
    $request->getServersRequest->vmServerAddressList = [
        new VmServerAddress(),
        new VmServerAddress(),
    ];
    $request->xAmzAlgorithm = 'non';
    $request->xAmzContentSha256 = 'eligendi';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'necessitatibus';
    $request->xAmzSignedHeaders = 'sint';
    $request->xAmzTarget = GetServersXAmzTargetEnum::AWS_SERVER_MIGRATION_SERVICE_V20161024_GET_SERVERS;
    $request->maxResults = 'officia';
    $request->nextToken = 'dolor';

    $response = $sdk->sdk->getServers($request);

    if ($response->getServersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importAppCatalog

Allows application import from Migration Hub.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ImportAppCatalogRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImportAppCatalogRequest;
use \OpenAPI\OpenAPI\Models\Operations\ImportAppCatalogXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportAppCatalogRequest();
    $request->importAppCatalogRequest = new ImportAppCatalogRequest();
    $request->importAppCatalogRequest->roleName = 'debitis';
    $request->xAmzAlgorithm = 'a';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'rerum';
    $request->xAmzTarget = ImportAppCatalogXAmzTargetEnum::AWS_SERVER_MIGRATION_SERVICE_V20161024_IMPORT_APP_CATALOG;

    $response = $sdk->sdk->importAppCatalog($request);

    if ($response->importAppCatalogResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importServerCatalog

<p>Gathers a complete list of on-premises servers. Connectors must be installed and monitoring all servers to import.</p> <p>This call returns immediately, but might take additional time to retrieve all the servers.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ImportServerCatalogRequest;
use \OpenAPI\OpenAPI\Models\Operations\ImportServerCatalogXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportServerCatalogRequest();
    $request->requestBody = [
        'magnam' => 'cumque',
    ];
    $request->xAmzAlgorithm = 'facere';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'non';
    $request->xAmzSignedHeaders = 'occaecati';
    $request->xAmzTarget = ImportServerCatalogXAmzTargetEnum::AWS_SERVER_MIGRATION_SERVICE_V20161024_IMPORT_SERVER_CATALOG;

    $response = $sdk->sdk->importServerCatalog($request);

    if ($response->importServerCatalogResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## launchApp

Launches the specified application as a stack in CloudFormation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\LaunchAppRequest;
use \OpenAPI\OpenAPI\Models\Shared\LaunchAppRequest;
use \OpenAPI\OpenAPI\Models\Operations\LaunchAppXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LaunchAppRequest();
    $request->launchAppRequest = new LaunchAppRequest();
    $request->launchAppRequest->appId = 'enim';
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'nam';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'blanditiis';
    $request->xAmzTarget = LaunchAppXAmzTargetEnum::AWS_SERVER_MIGRATION_SERVICE_V20161024_LAUNCH_APP;

    $response = $sdk->sdk->launchApp($request);

    if ($response->launchAppResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listApps

Retrieves summaries for all applications.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAppsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListAppsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAppsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAppsRequest();
    $request->listAppsRequest = new ListAppsRequest();
    $request->listAppsRequest->appIds = [
        'sapiente',
        'amet',
        'deserunt',
    ];
    $request->listAppsRequest->maxResults = 394869;
    $request->listAppsRequest->nextToken = 'vel';
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'distinctio';
    $request->xAmzTarget = ListAppsXAmzTargetEnum::AWS_SERVER_MIGRATION_SERVICE_V20161024_LIST_APPS;

    $response = $sdk->sdk->listApps($request);

    if ($response->listAppsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## notifyAppValidationOutput

Provides information to Server Migration Service about whether application validation is successful.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\NotifyAppValidationOutputRequest;
use \OpenAPI\OpenAPI\Models\Shared\NotifyAppValidationOutputRequest;
use \OpenAPI\OpenAPI\Models\Shared\NotificationContext;
use \OpenAPI\OpenAPI\Models\Shared\ValidationStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\NotifyAppValidationOutputXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NotifyAppValidationOutputRequest();
    $request->notifyAppValidationOutputRequest = new NotifyAppValidationOutputRequest();
    $request->notifyAppValidationOutputRequest->appId = 'id';
    $request->notifyAppValidationOutputRequest->notificationContext = new NotificationContext();
    $request->notifyAppValidationOutputRequest->notificationContext->status = ValidationStatusEnum::PENDING;
    $request->notifyAppValidationOutputRequest->notificationContext->statusMessage = 'labore';
    $request->notifyAppValidationOutputRequest->notificationContext->validationId = 'suscipit';
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'eum';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'magnam';
    $request->xAmzTarget = NotifyAppValidationOutputXAmzTargetEnum::AWS_SERVER_MIGRATION_SERVICE_V20161024_NOTIFY_APP_VALIDATION_OUTPUT;

    $response = $sdk->sdk->notifyAppValidationOutput($request);

    if ($response->notifyAppValidationOutputResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putAppLaunchConfiguration

Creates or updates the launch configuration for the specified application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutAppLaunchConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutAppLaunchConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\ServerGroupLaunchConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ServerLaunchConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\S3Location;
use \OpenAPI\OpenAPI\Models\Shared\ScriptTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Server;
use \OpenAPI\OpenAPI\Models\Shared\ServerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\VmServer;
use \OpenAPI\OpenAPI\Models\Shared\VmManagerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\VmServerAddress;
use \OpenAPI\OpenAPI\Models\Shared\UserData;
use \OpenAPI\OpenAPI\Models\Operations\PutAppLaunchConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutAppLaunchConfigurationRequest();
    $request->putAppLaunchConfigurationRequest = new PutAppLaunchConfigurationRequest();
    $request->putAppLaunchConfigurationRequest->appId = 'et';
    $request->putAppLaunchConfigurationRequest->autoLaunch = false;
    $request->putAppLaunchConfigurationRequest->roleName = 'excepturi';
    $request->putAppLaunchConfigurationRequest->serverGroupLaunchConfigurations = [
        new ServerGroupLaunchConfiguration(),
        new ServerGroupLaunchConfiguration(),
    ];
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'mollitia';
    $request->xAmzTarget = PutAppLaunchConfigurationXAmzTargetEnum::AWS_SERVER_MIGRATION_SERVICE_V20161024_PUT_APP_LAUNCH_CONFIGURATION;

    $response = $sdk->sdk->putAppLaunchConfiguration($request);

    if ($response->putAppLaunchConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putAppReplicationConfiguration

Creates or updates the replication configuration for the specified application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutAppReplicationConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutAppReplicationConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\ServerGroupReplicationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ServerReplicationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\Server;
use \OpenAPI\OpenAPI\Models\Shared\ServerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\VmServer;
use \OpenAPI\OpenAPI\Models\Shared\VmManagerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\VmServerAddress;
use \OpenAPI\OpenAPI\Models\Shared\ServerReplicationParameters;
use \OpenAPI\OpenAPI\Models\Shared\LicenseTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutAppReplicationConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutAppReplicationConfigurationRequest();
    $request->putAppReplicationConfigurationRequest = new PutAppReplicationConfigurationRequest();
    $request->putAppReplicationConfigurationRequest->appId = 'ad';
    $request->putAppReplicationConfigurationRequest->serverGroupReplicationConfigurations = [
        new ServerGroupReplicationConfiguration(),
        new ServerGroupReplicationConfiguration(),
    ];
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'necessitatibus';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'nemo';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'doloribus';
    $request->xAmzTarget = PutAppReplicationConfigurationXAmzTargetEnum::AWS_SERVER_MIGRATION_SERVICE_V20161024_PUT_APP_REPLICATION_CONFIGURATION;

    $response = $sdk->sdk->putAppReplicationConfiguration($request);

    if ($response->putAppReplicationConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putAppValidationConfiguration

Creates or updates a validation configuration for the specified application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutAppValidationConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutAppValidationConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\AppValidationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AppValidationStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\SSMValidationParameters;
use \OpenAPI\OpenAPI\Models\Shared\ScriptTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Source;
use \OpenAPI\OpenAPI\Models\Shared\S3Location;
use \OpenAPI\OpenAPI\Models\Shared\ServerGroupValidationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ServerValidationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\Server;
use \OpenAPI\OpenAPI\Models\Shared\ServerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\VmServer;
use \OpenAPI\OpenAPI\Models\Shared\VmManagerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\VmServerAddress;
use \OpenAPI\OpenAPI\Models\Shared\ServerValidationStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserDataValidationParameters;
use \OpenAPI\OpenAPI\Models\Operations\PutAppValidationConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutAppValidationConfigurationRequest();
    $request->putAppValidationConfigurationRequest = new PutAppValidationConfigurationRequest();
    $request->putAppValidationConfigurationRequest->appId = 'debitis';
    $request->putAppValidationConfigurationRequest->appValidationConfigurations = [
        new AppValidationConfiguration(),
        new AppValidationConfiguration(),
    ];
    $request->putAppValidationConfigurationRequest->serverGroupValidationConfigurations = [
        new ServerGroupValidationConfiguration(),
        new ServerGroupValidationConfiguration(),
        new ServerGroupValidationConfiguration(),
        new ServerGroupValidationConfiguration(),
    ];
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'repudiandae';
    $request->xAmzSignedHeaders = 'ullam';
    $request->xAmzTarget = PutAppValidationConfigurationXAmzTargetEnum::AWS_SERVER_MIGRATION_SERVICE_V20161024_PUT_APP_VALIDATION_CONFIGURATION;

    $response = $sdk->sdk->putAppValidationConfiguration($request);

    if ($response->putAppValidationConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startAppReplication

Starts replicating the specified application by creating replication jobs for each server in the application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartAppReplicationRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartAppReplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartAppReplicationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartAppReplicationRequest();
    $request->startAppReplicationRequest = new StartAppReplicationRequest();
    $request->startAppReplicationRequest->appId = 'expedita';
    $request->xAmzAlgorithm = 'nihil';
    $request->xAmzContentSha256 = 'repellat';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'sed';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->xAmzTarget = StartAppReplicationXAmzTargetEnum::AWS_SERVER_MIGRATION_SERVICE_V20161024_START_APP_REPLICATION;

    $response = $sdk->sdk->startAppReplication($request);

    if ($response->startAppReplicationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startOnDemandAppReplication

Starts an on-demand replication run for the specified application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartOnDemandAppReplicationRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartOnDemandAppReplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartOnDemandAppReplicationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartOnDemandAppReplicationRequest();
    $request->startOnDemandAppReplicationRequest = new StartOnDemandAppReplicationRequest();
    $request->startOnDemandAppReplicationRequest->appId = 'consequuntur';
    $request->startOnDemandAppReplicationRequest->description = 'praesentium';
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'magni';
    $request->xAmzCredential = 'sunt';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'maxime';
    $request->xAmzTarget = StartOnDemandAppReplicationXAmzTargetEnum::AWS_SERVER_MIGRATION_SERVICE_V20161024_START_ON_DEMAND_APP_REPLICATION;

    $response = $sdk->sdk->startOnDemandAppReplication($request);

    if ($response->startOnDemandAppReplicationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startOnDemandReplicationRun

<p>Starts an on-demand replication run for the specified replication job. This replication run starts immediately. This replication run is in addition to the ones already scheduled.</p> <p>There is a limit on the number of on-demand replications runs that you can request in a 24-hour period.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartOnDemandReplicationRunRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartOnDemandReplicationRunRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartOnDemandReplicationRunXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartOnDemandReplicationRunRequest();
    $request->startOnDemandReplicationRunRequest = new StartOnDemandReplicationRunRequest();
    $request->startOnDemandReplicationRunRequest->description = 'ea';
    $request->startOnDemandReplicationRunRequest->replicationJobId = 'excepturi';
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->xAmzTarget = StartOnDemandReplicationRunXAmzTargetEnum::AWS_SERVER_MIGRATION_SERVICE_V20161024_START_ON_DEMAND_REPLICATION_RUN;

    $response = $sdk->sdk->startOnDemandReplicationRun($request);

    if ($response->startOnDemandReplicationRunResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopAppReplication

Stops replicating the specified application by deleting the replication job for each server in the application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopAppReplicationRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopAppReplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopAppReplicationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopAppReplicationRequest();
    $request->stopAppReplicationRequest = new StopAppReplicationRequest();
    $request->stopAppReplicationRequest->appId = 'voluptate';
    $request->xAmzAlgorithm = 'autem';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'eaque';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = StopAppReplicationXAmzTargetEnum::AWS_SERVER_MIGRATION_SERVICE_V20161024_STOP_APP_REPLICATION;

    $response = $sdk->sdk->stopAppReplication($request);

    if ($response->stopAppReplicationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## terminateApp

Terminates the stack for the specified application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TerminateAppRequest;
use \OpenAPI\OpenAPI\Models\Shared\TerminateAppRequest;
use \OpenAPI\OpenAPI\Models\Operations\TerminateAppXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TerminateAppRequest();
    $request->terminateAppRequest = new TerminateAppRequest();
    $request->terminateAppRequest->appId = 'fugiat';
    $request->xAmzAlgorithm = 'amet';
    $request->xAmzContentSha256 = 'aut';
    $request->xAmzCredential = 'cumque';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'nobis';
    $request->xAmzTarget = TerminateAppXAmzTargetEnum::AWS_SERVER_MIGRATION_SERVICE_V20161024_TERMINATE_APP;

    $response = $sdk->sdk->terminateApp($request);

    if ($response->terminateAppResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateApp

Updates the specified application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAppRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateAppRequest;
use \OpenAPI\OpenAPI\Models\Shared\ServerGroup;
use \OpenAPI\OpenAPI\Models\Shared\Server;
use \OpenAPI\OpenAPI\Models\Shared\ServerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\VmServer;
use \OpenAPI\OpenAPI\Models\Shared\VmManagerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\VmServerAddress;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAppXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAppRequest();
    $request->updateAppRequest = new UpdateAppRequest();
    $request->updateAppRequest->appId = 'dolores';
    $request->updateAppRequest->description = 'quis';
    $request->updateAppRequest->name = 'Lance Becker';
    $request->updateAppRequest->roleName = 'eos';
    $request->updateAppRequest->serverGroups = [
        new ServerGroup(),
    ];
    $request->updateAppRequest->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'minus';
    $request->xAmzContentSha256 = 'quam';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'nostrum';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'recusandae';
    $request->xAmzTarget = UpdateAppXAmzTargetEnum::AWS_SERVER_MIGRATION_SERVICE_V20161024_UPDATE_APP;

    $response = $sdk->sdk->updateApp($request);

    if ($response->updateAppResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateReplicationJob

Updates the specified settings for the specified replication job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateReplicationJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateReplicationJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\LicenseTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateReplicationJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateReplicationJobRequest();
    $request->updateReplicationJobRequest = new UpdateReplicationJobRequest();
    $request->updateReplicationJobRequest->description = 'omnis';
    $request->updateReplicationJobRequest->encrypted = false;
    $request->updateReplicationJobRequest->frequency = 704415;
    $request->updateReplicationJobRequest->kmsKeyId = 'perspiciatis';
    $request->updateReplicationJobRequest->licenseType = LicenseTypeEnum::AWS;
    $request->updateReplicationJobRequest->nextReplicationRunStartTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-04T15:50:14.407Z');
    $request->updateReplicationJobRequest->numberOfRecentAmisToKeep = 500026;
    $request->updateReplicationJobRequest->replicationJobId = 'error';
    $request->updateReplicationJobRequest->roleName = 'eaque';
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'rerum';
    $request->xAmzCredential = 'adipisci';
    $request->xAmzDate = 'asperiores';
    $request->xAmzSecurityToken = 'earum';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'iste';
    $request->xAmzTarget = UpdateReplicationJobXAmzTargetEnum::AWS_SERVER_MIGRATION_SERVICE_V20161024_UPDATE_REPLICATION_JOB;

    $response = $sdk->sdk->updateReplicationJob($request);

    if ($response->updateReplicationJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
