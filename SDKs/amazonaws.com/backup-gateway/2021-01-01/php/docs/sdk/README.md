# SDK

## Overview

<p><fullname>Backup gateway</fullname> <p>Backup gateway connects Backup to your hypervisor, so you can create, store, and restore backups of your virtual machines (VMs) anywhere, whether on-premises or in the VMware Cloud (VMC) on Amazon Web Services.</p> <p>Add on-premises resources by connecting to a hypervisor through a gateway. Backup will automatically discover the resources in your hypervisor.</p> <p>Use Backup to assign virtual or on-premises resources to a backup plan, or run on-demand backups. Once you have backed up your resources, you can view them and restore them like any resource supported by Backup.</p> <p>To download the Amazon Web Services software to get started, navigate to the Backup console, choose <b>Gateways</b>, then choose <b>Create gateway</b>.</p></p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/backup-gateway/>
### Available Operations

* [associateGatewayToServer](#associategatewaytoserver) - Associates a backup gateway with your server. After you complete the association process, you can back up and restore your VMs through the gateway.
* [createGateway](#creategateway) - Creates a backup gateway. After you create a gateway, you can associate it with a server using the <code>AssociateGatewayToServer</code> operation.
* [deleteGateway](#deletegateway) - Deletes a backup gateway.
* [deleteHypervisor](#deletehypervisor) - Deletes a hypervisor.
* [disassociateGatewayFromServer](#disassociategatewayfromserver) - Disassociates a backup gateway from the specified server. After the disassociation process finishes, the gateway can no longer access the virtual machines on the server.
* [getBandwidthRateLimitSchedule](#getbandwidthratelimitschedule) - Retrieves the bandwidth rate limit schedule for a specified gateway. By default, gateways do not have bandwidth rate limit schedules, which means no bandwidth rate limiting is in effect. Use this to get a gateway's bandwidth rate limit schedule.
* [getGateway](#getgateway) - By providing the ARN (Amazon Resource Name), this API returns the gateway.
* [getHypervisor](#gethypervisor) - This action requests information about the specified hypervisor to which the gateway will connect. A hypervisor is hardware, software, or firmware that creates and manages virtual machines, and allocates resources to them.
* [getHypervisorPropertyMappings](#gethypervisorpropertymappings) - This action retrieves the property mappings for the specified hypervisor. A hypervisor property mapping displays the relationship of entity properties available from the on-premises hypervisor to the properties available in Amazon Web Services.
* [getVirtualMachine](#getvirtualmachine) - By providing the ARN (Amazon Resource Name), this API returns the virtual machine.
* [importHypervisorConfiguration](#importhypervisorconfiguration) - Connect to a hypervisor by importing its configuration.
* [listGateways](#listgateways) - Lists backup gateways owned by an Amazon Web Services account in an Amazon Web Services Region. The returned list is ordered by gateway Amazon Resource Name (ARN).
* [listHypervisors](#listhypervisors) - Lists your hypervisors.
* [listTagsForResource](#listtagsforresource) - Lists the tags applied to the resource identified by its Amazon Resource Name (ARN).
* [listVirtualMachines](#listvirtualmachines) - Lists your virtual machines.
* [putBandwidthRateLimitSchedule](#putbandwidthratelimitschedule) - This action sets the bandwidth rate limit schedule for a specified gateway. By default, gateways do not have a bandwidth rate limit schedule, which means no bandwidth rate limiting is in effect. Use this to initiate a gateway's bandwidth rate limit schedule.
* [putHypervisorPropertyMappings](#puthypervisorpropertymappings) - This action sets the property mappings for the specified hypervisor. A hypervisor property mapping displays the relationship of entity properties available from the on-premises hypervisor to the properties available in Amazon Web Services.
* [putMaintenanceStartTime](#putmaintenancestarttime) - Set the maintenance start time for a gateway.
* [startVirtualMachinesMetadataSync](#startvirtualmachinesmetadatasync) - This action sends a request to sync metadata across the specified virtual machines.
* [tagResource](#tagresource) - Tag the resource.
* [testHypervisorConfiguration](#testhypervisorconfiguration) - Tests your hypervisor configuration to validate that backup gateway can connect with the hypervisor and its resources.
* [untagResource](#untagresource) - Removes tags from the resource.
* [updateGatewayInformation](#updategatewayinformation) - Updates a gateway's name. Specify which gateway to update using the Amazon Resource Name (ARN) of the gateway in your request.
* [updateGatewaySoftwareNow](#updategatewaysoftwarenow) - <p>Updates the gateway virtual machine (VM) software. The request immediately triggers the software update.</p> <note> <p>When you make this request, you get a <code>200 OK</code> success response immediately. However, it might take some time for the update to complete.</p> </note>
* [updateHypervisor](#updatehypervisor) - Updates a hypervisor metadata, including its host, username, and password. Specify which hypervisor to update using the Amazon Resource Name (ARN) of the hypervisor in your request.

## associateGatewayToServer

Associates a backup gateway with your server. After you complete the association process, you can back up and restore your VMs through the gateway.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateGatewayToServerRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateGatewayToServerInput;
use \OpenAPI\OpenAPI\Models\Operations\AssociateGatewayToServerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateGatewayToServerRequest();
    $request->associateGatewayToServerInput = new AssociateGatewayToServerInput();
    $request->associateGatewayToServerInput->gatewayArn = 'error';
    $request->associateGatewayToServerInput->serverArn = 'deserunt';
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'tempora';
    $request->xAmzTarget = AssociateGatewayToServerXAmzTargetEnum::BACKUP_ON_PREMISES_V20210101_ASSOCIATE_GATEWAY_TO_SERVER;

    $response = $sdk->sdk->associateGatewayToServer($request);

    if ($response->associateGatewayToServerOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createGateway

Creates a backup gateway. After you create a gateway, you can associate it with a server using the <code>AssociateGatewayToServer</code> operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateGatewayRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateGatewayInput;
use \OpenAPI\OpenAPI\Models\Shared\GatewayTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateGatewayXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateGatewayRequest();
    $request->createGatewayInput = new CreateGatewayInput();
    $request->createGatewayInput->activationKey = 'suscipit';
    $request->createGatewayInput->gatewayDisplayName = 'molestiae';
    $request->createGatewayInput->gatewayType = GatewayTypeEnum::BACKUP_VM;
    $request->createGatewayInput->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'placeat';
    $request->xAmzContentSha256 = 'voluptatum';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'nisi';
    $request->xAmzSignature = 'recusandae';
    $request->xAmzSignedHeaders = 'temporibus';
    $request->xAmzTarget = CreateGatewayXAmzTargetEnum::BACKUP_ON_PREMISES_V20210101_CREATE_GATEWAY;

    $response = $sdk->sdk->createGateway($request);

    if ($response->createGatewayOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteGateway

Deletes a backup gateway.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteGatewayRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteGatewayInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteGatewayXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteGatewayRequest();
    $request->deleteGatewayInput = new DeleteGatewayInput();
    $request->deleteGatewayInput->gatewayArn = 'ab';
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'repellendus';
    $request->xAmzSignedHeaders = 'sapiente';
    $request->xAmzTarget = DeleteGatewayXAmzTargetEnum::BACKUP_ON_PREMISES_V20210101_DELETE_GATEWAY;

    $response = $sdk->sdk->deleteGateway($request);

    if ($response->deleteGatewayOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteHypervisor

Deletes a hypervisor.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteHypervisorRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteHypervisorInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteHypervisorXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteHypervisorRequest();
    $request->deleteHypervisorInput = new DeleteHypervisorInput();
    $request->deleteHypervisorInput->hypervisorArn = 'quo';
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'at';
    $request->xAmzCredential = 'at';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'quod';
    $request->xAmzTarget = DeleteHypervisorXAmzTargetEnum::BACKUP_ON_PREMISES_V20210101_DELETE_HYPERVISOR;

    $response = $sdk->sdk->deleteHypervisor($request);

    if ($response->deleteHypervisorOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateGatewayFromServer

Disassociates a backup gateway from the specified server. After the disassociation process finishes, the gateway can no longer access the virtual machines on the server.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateGatewayFromServerRequest;
use \OpenAPI\OpenAPI\Models\Shared\DisassociateGatewayFromServerInput;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateGatewayFromServerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateGatewayFromServerRequest();
    $request->disassociateGatewayFromServerInput = new DisassociateGatewayFromServerInput();
    $request->disassociateGatewayFromServerInput->gatewayArn = 'esse';
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'porro';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'nam';
    $request->xAmzSignature = 'officia';
    $request->xAmzSignedHeaders = 'occaecati';
    $request->xAmzTarget = DisassociateGatewayFromServerXAmzTargetEnum::BACKUP_ON_PREMISES_V20210101_DISASSOCIATE_GATEWAY_FROM_SERVER;

    $response = $sdk->sdk->disassociateGatewayFromServer($request);

    if ($response->disassociateGatewayFromServerOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBandwidthRateLimitSchedule

Retrieves the bandwidth rate limit schedule for a specified gateway. By default, gateways do not have bandwidth rate limit schedules, which means no bandwidth rate limiting is in effect. Use this to get a gateway's bandwidth rate limit schedule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetBandwidthRateLimitScheduleRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetBandwidthRateLimitScheduleInput;
use \OpenAPI\OpenAPI\Models\Operations\GetBandwidthRateLimitScheduleXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBandwidthRateLimitScheduleRequest();
    $request->getBandwidthRateLimitScheduleInput = new GetBandwidthRateLimitScheduleInput();
    $request->getBandwidthRateLimitScheduleInput->gatewayArn = 'fugit';
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'optio';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'beatae';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->xAmzTarget = GetBandwidthRateLimitScheduleXAmzTargetEnum::BACKUP_ON_PREMISES_V20210101_GET_BANDWIDTH_RATE_LIMIT_SCHEDULE;

    $response = $sdk->sdk->getBandwidthRateLimitSchedule($request);

    if ($response->getBandwidthRateLimitScheduleOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGateway

By providing the ARN (Amazon Resource Name), this API returns the gateway.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetGatewayRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetGatewayInput;
use \OpenAPI\OpenAPI\Models\Operations\GetGatewayXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGatewayRequest();
    $request->getGatewayInput = new GetGatewayInput();
    $request->getGatewayInput->gatewayArn = 'modi';
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'impedit';
    $request->xAmzCredential = 'cum';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'aspernatur';
    $request->xAmzTarget = GetGatewayXAmzTargetEnum::BACKUP_ON_PREMISES_V20210101_GET_GATEWAY;

    $response = $sdk->sdk->getGateway($request);

    if ($response->getGatewayOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getHypervisor

This action requests information about the specified hypervisor to which the gateway will connect. A hypervisor is hardware, software, or firmware that creates and manages virtual machines, and allocates resources to them.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetHypervisorRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetHypervisorInput;
use \OpenAPI\OpenAPI\Models\Operations\GetHypervisorXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetHypervisorRequest();
    $request->getHypervisorInput = new GetHypervisorInput();
    $request->getHypervisorInput->hypervisorArn = 'perferendis';
    $request->xAmzAlgorithm = 'ad';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'sed';
    $request->xAmzDate = 'iste';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'laboriosam';
    $request->xAmzTarget = GetHypervisorXAmzTargetEnum::BACKUP_ON_PREMISES_V20210101_GET_HYPERVISOR;

    $response = $sdk->sdk->getHypervisor($request);

    if ($response->getHypervisorOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getHypervisorPropertyMappings

This action retrieves the property mappings for the specified hypervisor. A hypervisor property mapping displays the relationship of entity properties available from the on-premises hypervisor to the properties available in Amazon Web Services.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetHypervisorPropertyMappingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetHypervisorPropertyMappingsInput;
use \OpenAPI\OpenAPI\Models\Operations\GetHypervisorPropertyMappingsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetHypervisorPropertyMappingsRequest();
    $request->getHypervisorPropertyMappingsInput = new GetHypervisorPropertyMappingsInput();
    $request->getHypervisorPropertyMappingsInput->hypervisorArn = 'hic';
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'fuga';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'iste';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'saepe';
    $request->xAmzTarget = GetHypervisorPropertyMappingsXAmzTargetEnum::BACKUP_ON_PREMISES_V20210101_GET_HYPERVISOR_PROPERTY_MAPPINGS;

    $response = $sdk->sdk->getHypervisorPropertyMappings($request);

    if ($response->getHypervisorPropertyMappingsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVirtualMachine

By providing the ARN (Amazon Resource Name), this API returns the virtual machine.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetVirtualMachineRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetVirtualMachineInput;
use \OpenAPI\OpenAPI\Models\Operations\GetVirtualMachineXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVirtualMachineRequest();
    $request->getVirtualMachineInput = new GetVirtualMachineInput();
    $request->getVirtualMachineInput->resourceArn = 'quidem';
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'est';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'dolores';
    $request->xAmzTarget = GetVirtualMachineXAmzTargetEnum::BACKUP_ON_PREMISES_V20210101_GET_VIRTUAL_MACHINE;

    $response = $sdk->sdk->getVirtualMachine($request);

    if ($response->getVirtualMachineOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importHypervisorConfiguration

Connect to a hypervisor by importing its configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ImportHypervisorConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImportHypervisorConfigurationInput;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\ImportHypervisorConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportHypervisorConfigurationRequest();
    $request->importHypervisorConfigurationInput = new ImportHypervisorConfigurationInput();
    $request->importHypervisorConfigurationInput->host = 'dolorem';
    $request->importHypervisorConfigurationInput->kmsKeyArn = 'corporis';
    $request->importHypervisorConfigurationInput->name = 'Della Halvorson';
    $request->importHypervisorConfigurationInput->password = 'minima';
    $request->importHypervisorConfigurationInput->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->importHypervisorConfigurationInput->username = 'accusantium';
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'culpa';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'dolorem';
    $request->xAmzTarget = ImportHypervisorConfigurationXAmzTargetEnum::BACKUP_ON_PREMISES_V20210101_IMPORT_HYPERVISOR_CONFIGURATION;

    $response = $sdk->sdk->importHypervisorConfiguration($request);

    if ($response->importHypervisorConfigurationOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listGateways

Lists backup gateways owned by an Amazon Web Services account in an Amazon Web Services Region. The returned list is ordered by gateway Amazon Resource Name (ARN).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListGatewaysRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListGatewaysInput;
use \OpenAPI\OpenAPI\Models\Operations\ListGatewaysXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListGatewaysRequest();
    $request->listGatewaysInput = new ListGatewaysInput();
    $request->listGatewaysInput->maxResults = 635059;
    $request->listGatewaysInput->nextToken = 'consequuntur';
    $request->maxResults = 'repellat';
    $request->nextToken = 'mollitia';
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'numquam';
    $request->xAmzCredential = 'commodi';
    $request->xAmzDate = 'quam';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'velit';
    $request->xAmzSignedHeaders = 'error';
    $request->xAmzTarget = ListGatewaysXAmzTargetEnum::BACKUP_ON_PREMISES_V20210101_LIST_GATEWAYS;

    $response = $sdk->sdk->listGateways($request);

    if ($response->listGatewaysOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listHypervisors

Lists your hypervisors.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListHypervisorsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListHypervisorsInput;
use \OpenAPI\OpenAPI\Models\Operations\ListHypervisorsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListHypervisorsRequest();
    $request->listHypervisorsInput = new ListHypervisorsInput();
    $request->listHypervisorsInput->maxResults = 158969;
    $request->listHypervisorsInput->nextToken = 'quis';
    $request->maxResults = 'vitae';
    $request->nextToken = 'laborum';
    $request->xAmzAlgorithm = 'animi';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'sequi';
    $request->xAmzSignature = 'tenetur';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->xAmzTarget = ListHypervisorsXAmzTargetEnum::BACKUP_ON_PREMISES_V20210101_LIST_HYPERVISORS;

    $response = $sdk->sdk->listHypervisors($request);

    if ($response->listHypervisorsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Lists the tags applied to the resource identified by its Amazon Resource Name (ARN).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTagsForResourceInput;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->listTagsForResourceInput = new ListTagsForResourceInput();
    $request->listTagsForResourceInput->resourceArn = 'id';
    $request->xAmzAlgorithm = 'possimus';
    $request->xAmzContentSha256 = 'aut';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'temporibus';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'quasi';
    $request->xAmzTarget = ListTagsForResourceXAmzTargetEnum::BACKUP_ON_PREMISES_V20210101_LIST_TAGS_FOR_RESOURCE;

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listVirtualMachines

Lists your virtual machines.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListVirtualMachinesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListVirtualMachinesInput;
use \OpenAPI\OpenAPI\Models\Operations\ListVirtualMachinesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListVirtualMachinesRequest();
    $request->listVirtualMachinesInput = new ListVirtualMachinesInput();
    $request->listVirtualMachinesInput->hypervisorArn = 'reiciendis';
    $request->listVirtualMachinesInput->maxResults = 976460;
    $request->listVirtualMachinesInput->nextToken = 'vero';
    $request->maxResults = 'nihil';
    $request->nextToken = 'praesentium';
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'cum';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'doloremque';
    $request->xAmzTarget = ListVirtualMachinesXAmzTargetEnum::BACKUP_ON_PREMISES_V20210101_LIST_VIRTUAL_MACHINES;

    $response = $sdk->sdk->listVirtualMachines($request);

    if ($response->listVirtualMachinesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putBandwidthRateLimitSchedule

This action sets the bandwidth rate limit schedule for a specified gateway. By default, gateways do not have a bandwidth rate limit schedule, which means no bandwidth rate limiting is in effect. Use this to initiate a gateway's bandwidth rate limit schedule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutBandwidthRateLimitScheduleRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutBandwidthRateLimitScheduleInput;
use \OpenAPI\OpenAPI\Models\Shared\BandwidthRateLimitInterval;
use \OpenAPI\OpenAPI\Models\Operations\PutBandwidthRateLimitScheduleXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutBandwidthRateLimitScheduleRequest();
    $request->putBandwidthRateLimitScheduleInput = new PutBandwidthRateLimitScheduleInput();
    $request->putBandwidthRateLimitScheduleInput->bandwidthRateLimitIntervals = [
        new BandwidthRateLimitInterval(),
        new BandwidthRateLimitInterval(),
    ];
    $request->putBandwidthRateLimitScheduleInput->gatewayArn = 'ut';
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'dolore';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'harum';
    $request->xAmzTarget = PutBandwidthRateLimitScheduleXAmzTargetEnum::BACKUP_ON_PREMISES_V20210101_PUT_BANDWIDTH_RATE_LIMIT_SCHEDULE;

    $response = $sdk->sdk->putBandwidthRateLimitSchedule($request);

    if ($response->putBandwidthRateLimitScheduleOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putHypervisorPropertyMappings

This action sets the property mappings for the specified hypervisor. A hypervisor property mapping displays the relationship of entity properties available from the on-premises hypervisor to the properties available in Amazon Web Services.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutHypervisorPropertyMappingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutHypervisorPropertyMappingsInput;
use \OpenAPI\OpenAPI\Models\Shared\VmwareToAwsTagMapping;
use \OpenAPI\OpenAPI\Models\Operations\PutHypervisorPropertyMappingsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutHypervisorPropertyMappingsRequest();
    $request->putHypervisorPropertyMappingsInput = new PutHypervisorPropertyMappingsInput();
    $request->putHypervisorPropertyMappingsInput->hypervisorArn = 'enim';
    $request->putHypervisorPropertyMappingsInput->iamRoleArn = 'accusamus';
    $request->putHypervisorPropertyMappingsInput->vmwareToAwsTagMappings = [
        new VmwareToAwsTagMapping(),
        new VmwareToAwsTagMapping(),
    ];
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'quae';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'molestias';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'pariatur';
    $request->xAmzTarget = PutHypervisorPropertyMappingsXAmzTargetEnum::BACKUP_ON_PREMISES_V20210101_PUT_HYPERVISOR_PROPERTY_MAPPINGS;

    $response = $sdk->sdk->putHypervisorPropertyMappings($request);

    if ($response->putHypervisorPropertyMappingsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putMaintenanceStartTime

Set the maintenance start time for a gateway.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutMaintenanceStartTimeRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutMaintenanceStartTimeInput;
use \OpenAPI\OpenAPI\Models\Operations\PutMaintenanceStartTimeXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutMaintenanceStartTimeRequest();
    $request->putMaintenanceStartTimeInput = new PutMaintenanceStartTimeInput();
    $request->putMaintenanceStartTimeInput->dayOfMonth = 265389;
    $request->putMaintenanceStartTimeInput->dayOfWeek = 508969;
    $request->putMaintenanceStartTimeInput->gatewayArn = 'rem';
    $request->putMaintenanceStartTimeInput->hourOfDay = 916723;
    $request->putMaintenanceStartTimeInput->minuteOfHour = 93940;
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'itaque';
    $request->xAmzSecurityToken = 'incidunt';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'consequatur';
    $request->xAmzTarget = PutMaintenanceStartTimeXAmzTargetEnum::BACKUP_ON_PREMISES_V20210101_PUT_MAINTENANCE_START_TIME;

    $response = $sdk->sdk->putMaintenanceStartTime($request);

    if ($response->putMaintenanceStartTimeOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startVirtualMachinesMetadataSync

This action sends a request to sync metadata across the specified virtual machines.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartVirtualMachinesMetadataSyncRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartVirtualMachinesMetadataSyncInput;
use \OpenAPI\OpenAPI\Models\Operations\StartVirtualMachinesMetadataSyncXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartVirtualMachinesMetadataSyncRequest();
    $request->startVirtualMachinesMetadataSyncInput = new StartVirtualMachinesMetadataSyncInput();
    $request->startVirtualMachinesMetadataSyncInput->hypervisorArn = 'est';
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'explicabo';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'quibusdam';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'modi';
    $request->xAmzTarget = StartVirtualMachinesMetadataSyncXAmzTargetEnum::BACKUP_ON_PREMISES_V20210101_START_VIRTUAL_MACHINES_METADATA_SYNC;

    $response = $sdk->sdk->startVirtualMachinesMetadataSync($request);

    if ($response->startVirtualMachinesMetadataSyncOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Tag the resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagResourceInput;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->tagResourceInput = new TagResourceInput();
    $request->tagResourceInput->resourceARN = 'qui';
    $request->tagResourceInput->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'cupiditate';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'magni';
    $request->xAmzSecurityToken = 'assumenda';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'alias';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::BACKUP_ON_PREMISES_V20210101_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testHypervisorConfiguration

Tests your hypervisor configuration to validate that backup gateway can connect with the hypervisor and its resources.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TestHypervisorConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\TestHypervisorConfigurationInput;
use \OpenAPI\OpenAPI\Models\Operations\TestHypervisorConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestHypervisorConfigurationRequest();
    $request->testHypervisorConfigurationInput = new TestHypervisorConfigurationInput();
    $request->testHypervisorConfigurationInput->gatewayArn = 'fugit';
    $request->testHypervisorConfigurationInput->host = 'dolorum';
    $request->testHypervisorConfigurationInput->password = 'excepturi';
    $request->testHypervisorConfigurationInput->username = 'tempora';
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'tempore';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'non';
    $request->xAmzSignedHeaders = 'eligendi';
    $request->xAmzTarget = TestHypervisorConfigurationXAmzTargetEnum::BACKUP_ON_PREMISES_V20210101_TEST_HYPERVISOR_CONFIGURATION;

    $response = $sdk->sdk->testHypervisorConfiguration($request);

    if ($response->testHypervisorConfigurationOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes tags from the resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UntagResourceInput;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->untagResourceInput = new UntagResourceInput();
    $request->untagResourceInput->resourceARN = 'sint';
    $request->untagResourceInput->tagKeys = [
        'provident',
        'necessitatibus',
    ];
    $request->xAmzAlgorithm = 'sint';
    $request->xAmzContentSha256 = 'officia';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'a';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'in';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::BACKUP_ON_PREMISES_V20210101_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateGatewayInformation

Updates a gateway's name. Specify which gateway to update using the Amazon Resource Name (ARN) of the gateway in your request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGatewayInformationRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateGatewayInformationInput;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGatewayInformationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateGatewayInformationRequest();
    $request->updateGatewayInformationInput = new UpdateGatewayInformationInput();
    $request->updateGatewayInformationInput->gatewayArn = 'in';
    $request->updateGatewayInformationInput->gatewayDisplayName = 'illum';
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'rerum';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'cumque';
    $request->xAmzSignature = 'facere';
    $request->xAmzSignedHeaders = 'ea';
    $request->xAmzTarget = UpdateGatewayInformationXAmzTargetEnum::BACKUP_ON_PREMISES_V20210101_UPDATE_GATEWAY_INFORMATION;

    $response = $sdk->sdk->updateGatewayInformation($request);

    if ($response->updateGatewayInformationOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateGatewaySoftwareNow

<p>Updates the gateway virtual machine (VM) software. The request immediately triggers the software update.</p> <note> <p>When you make this request, you get a <code>200 OK</code> success response immediately. However, it might take some time for the update to complete.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGatewaySoftwareNowRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateGatewaySoftwareNowInput;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGatewaySoftwareNowXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateGatewaySoftwareNowRequest();
    $request->updateGatewaySoftwareNowInput = new UpdateGatewaySoftwareNowInput();
    $request->updateGatewaySoftwareNowInput->gatewayArn = 'aliquid';
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'non';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'delectus';
    $request->xAmzTarget = UpdateGatewaySoftwareNowXAmzTargetEnum::BACKUP_ON_PREMISES_V20210101_UPDATE_GATEWAY_SOFTWARE_NOW;

    $response = $sdk->sdk->updateGatewaySoftwareNow($request);

    if ($response->updateGatewaySoftwareNowOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateHypervisor

Updates a hypervisor metadata, including its host, username, and password. Specify which hypervisor to update using the Amazon Resource Name (ARN) of the hypervisor in your request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateHypervisorRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateHypervisorInput;
use \OpenAPI\OpenAPI\Models\Operations\UpdateHypervisorXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateHypervisorRequest();
    $request->updateHypervisorInput = new UpdateHypervisorInput();
    $request->updateHypervisorInput->host = 'quidem';
    $request->updateHypervisorInput->hypervisorArn = 'provident';
    $request->updateHypervisorInput->logGroupArn = 'nam';
    $request->updateHypervisorInput->name = 'Nelson Lesch';
    $request->updateHypervisorInput->password = 'deserunt';
    $request->updateHypervisorInput->username = 'nisi';
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'magnam';
    $request->xAmzTarget = UpdateHypervisorXAmzTargetEnum::BACKUP_ON_PREMISES_V20210101_UPDATE_HYPERVISOR;

    $response = $sdk->sdk->updateHypervisor($request);

    if ($response->updateHypervisorOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
