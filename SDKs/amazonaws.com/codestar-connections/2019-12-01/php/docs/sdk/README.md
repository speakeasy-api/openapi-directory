# SDK

## Overview

<fullname>AWS CodeStar Connections</fullname> <p>This AWS CodeStar Connections API Reference provides descriptions and usage examples of the operations and data types for the AWS CodeStar Connections API. You can use the connections API to work with connections and installations.</p> <p> <i>Connections</i> are configurations that you use to connect AWS resources to external code repositories. Each connection is a resource that can be given to services such as CodePipeline to connect to a third-party repository such as Bitbucket. For example, you can add the connection in CodePipeline so that it triggers your pipeline when a code change is made to your third-party code repository. Each connection is named and associated with a unique ARN that is used to reference the connection.</p> <p>When you create a connection, the console initiates a third-party connection handshake. <i>Installations</i> are the apps that are used to conduct this handshake. For example, the installation for the Bitbucket provider type is the Bitbucket app. When you create a connection, you can choose an existing installation or create one.</p> <p>When you want to create a connection to an installed provider type such as GitHub Enterprise Server, you create a <i>host</i> for your connections.</p> <p>You can work with connections by calling:</p> <ul> <li> <p> <a>CreateConnection</a>, which creates a uniquely named connection that can be referenced by services such as CodePipeline.</p> </li> <li> <p> <a>DeleteConnection</a>, which deletes the specified connection.</p> </li> <li> <p> <a>GetConnection</a>, which returns information about the connection, including the connection status.</p> </li> <li> <p> <a>ListConnections</a>, which lists the connections associated with your account.</p> </li> </ul> <p>You can work with hosts by calling:</p> <ul> <li> <p> <a>CreateHost</a>, which creates a host that represents the infrastructure where your provider is installed.</p> </li> <li> <p> <a>DeleteHost</a>, which deletes the specified host.</p> </li> <li> <p> <a>GetHost</a>, which returns information about the host, including the setup status.</p> </li> <li> <p> <a>ListHosts</a>, which lists the hosts associated with your account.</p> </li> </ul> <p>You can work with tags in AWS CodeStar Connections by calling the following:</p> <ul> <li> <p> <a>ListTagsForResource</a>, which gets information about AWS tags for a specified Amazon Resource Name (ARN) in AWS CodeStar Connections.</p> </li> <li> <p> <a>TagResource</a>, which adds or updates tags for a resource in AWS CodeStar Connections.</p> </li> <li> <p> <a>UntagResource</a>, which removes tags for a resource in AWS CodeStar Connections.</p> </li> </ul> <p>For information about how to use AWS CodeStar Connections, see the <a href="https://docs.aws.amazon.com/dtconsole/latest/userguide/welcome-connections.html">Developer Tools User Guide</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/codestar-connections/>
### Available Operations

* [createConnection](#createconnection) - Creates a connection that can then be given to other AWS services like CodePipeline so that it can access third-party code repositories. The connection is in pending status until the third-party connection handshake is completed from the console.
* [createHost](#createhost) - <p>Creates a resource that represents the infrastructure where a third-party provider is installed. The host is used when you create connections to an installed third-party provider type, such as GitHub Enterprise Server. You create one host for all connections to that provider.</p> <note> <p>A host created through the CLI or the SDK is in `PENDING` status by default. You can make its status `AVAILABLE` by setting up the host in the console.</p> </note>
* [deleteConnection](#deleteconnection) - The connection to be deleted.
* [deleteHost](#deletehost) - <p>The host to be deleted. Before you delete a host, all connections associated to the host must be deleted.</p> <note> <p>A host cannot be deleted if it is in the VPC_CONFIG_INITIALIZING or VPC_CONFIG_DELETING state.</p> </note>
* [getConnection](#getconnection) - Returns the connection ARN and details such as status, owner, and provider type.
* [getHost](#gethost) - Returns the host ARN and details such as status, provider type, endpoint, and, if applicable, the VPC configuration.
* [listConnections](#listconnections) - Lists the connections associated with your account.
* [listHosts](#listhosts) - Lists the hosts associated with your account.
* [listTagsForResource](#listtagsforresource) - Gets the set of key-value pairs (metadata) that are used to manage the resource.
* [tagResource](#tagresource) - Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource.
* [untagResource](#untagresource) - Removes tags from an AWS resource.
* [updateHost](#updatehost) - Updates a specified host with the provided configurations.

## createConnection

Creates a connection that can then be given to other AWS services like CodePipeline so that it can access third-party code repositories. The connection is in pending status until the third-party connection handshake is completed from the console.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateConnectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateConnectionInput;
use \OpenAPI\OpenAPI\Models\Shared\ProviderTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateConnectionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateConnectionRequest();
    $request->createConnectionInput = new CreateConnectionInput();
    $request->createConnectionInput->connectionName = 'suscipit';
    $request->createConnectionInput->hostArn = 'iure';
    $request->createConnectionInput->providerType = ProviderTypeEnum::BITBUCKET;
    $request->createConnectionInput->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'minus';
    $request->xAmzSignedHeaders = 'placeat';
    $request->xAmzTarget = CreateConnectionXAmzTargetEnum::COM_AMAZONAWS_CODESTAR_CONNECTIONS_CODE_STAR_CONNECTIONS20191201_CREATE_CONNECTION;

    $response = $sdk->sdk->createConnection($request);

    if ($response->createConnectionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createHost

<p>Creates a resource that represents the infrastructure where a third-party provider is installed. The host is used when you create connections to an installed third-party provider type, such as GitHub Enterprise Server. You create one host for all connections to that provider.</p> <note> <p>A host created through the CLI or the SDK is in `PENDING` status by default. You can make its status `AVAILABLE` by setting up the host in the console.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateHostRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateHostInput;
use \OpenAPI\OpenAPI\Models\Shared\ProviderTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\VpcConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\CreateHostXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateHostRequest();
    $request->createHostInput = new CreateHostInput();
    $request->createHostInput->name = 'Ted Mante';
    $request->createHostInput->providerEndpoint = 'temporibus';
    $request->createHostInput->providerType = ProviderTypeEnum::BITBUCKET;
    $request->createHostInput->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->createHostInput->vpcConfiguration = new VpcConfiguration();
    $request->createHostInput->vpcConfiguration->securityGroupIds = [
        'deserunt',
    ];
    $request->createHostInput->vpcConfiguration->subnetIds = [
        'ipsam',
    ];
    $request->createHostInput->vpcConfiguration->tlsCertificate = 'repellendus';
    $request->createHostInput->vpcConfiguration->vpcId = 'sapiente';
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'odit';
    $request->xAmzCredential = 'at';
    $request->xAmzDate = 'at';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'quod';
    $request->xAmzTarget = CreateHostXAmzTargetEnum::COM_AMAZONAWS_CODESTAR_CONNECTIONS_CODE_STAR_CONNECTIONS20191201_CREATE_HOST;

    $response = $sdk->sdk->createHost($request);

    if ($response->createHostOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteConnection

The connection to be deleted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConnectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteConnectionInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConnectionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteConnectionRequest();
    $request->deleteConnectionInput = new DeleteConnectionInput();
    $request->deleteConnectionInput->connectionArn = 'quod';
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'porro';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'officia';
    $request->xAmzTarget = DeleteConnectionXAmzTargetEnum::COM_AMAZONAWS_CODESTAR_CONNECTIONS_CODE_STAR_CONNECTIONS20191201_DELETE_CONNECTION;

    $response = $sdk->sdk->deleteConnection($request);

    if ($response->deleteConnectionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteHost

<p>The host to be deleted. Before you delete a host, all connections associated to the host must be deleted.</p> <note> <p>A host cannot be deleted if it is in the VPC_CONFIG_INITIALIZING or VPC_CONFIG_DELETING state.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteHostRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteHostInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteHostXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteHostRequest();
    $request->deleteHostInput = new DeleteHostInput();
    $request->deleteHostInput->hostArn = 'occaecati';
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'optio';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'beatae';
    $request->xAmzSignedHeaders = 'commodi';
    $request->xAmzTarget = DeleteHostXAmzTargetEnum::COM_AMAZONAWS_CODESTAR_CONNECTIONS_CODE_STAR_CONNECTIONS20191201_DELETE_HOST;

    $response = $sdk->sdk->deleteHost($request);

    if ($response->deleteHostOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConnection

Returns the connection ARN and details such as status, owner, and provider type.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetConnectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetConnectionInput;
use \OpenAPI\OpenAPI\Models\Operations\GetConnectionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConnectionRequest();
    $request->getConnectionInput = new GetConnectionInput();
    $request->getConnectionInput->connectionArn = 'molestiae';
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'impedit';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->xAmzTarget = GetConnectionXAmzTargetEnum::COM_AMAZONAWS_CODESTAR_CONNECTIONS_CODE_STAR_CONNECTIONS20191201_GET_CONNECTION;

    $response = $sdk->sdk->getConnection($request);

    if ($response->getConnectionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getHost

Returns the host ARN and details such as status, provider type, endpoint, and, if applicable, the VPC configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetHostRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetHostInput;
use \OpenAPI\OpenAPI\Models\Operations\GetHostXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetHostRequest();
    $request->getHostInput = new GetHostInput();
    $request->getHostInput->hostArn = 'aspernatur';
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'sed';
    $request->xAmzSecurityToken = 'iste';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'natus';
    $request->xAmzTarget = GetHostXAmzTargetEnum::COM_AMAZONAWS_CODESTAR_CONNECTIONS_CODE_STAR_CONNECTIONS20191201_GET_HOST;

    $response = $sdk->sdk->getHost($request);

    if ($response->getHostOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listConnections

Lists the connections associated with your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListConnectionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListConnectionsInput;
use \OpenAPI\OpenAPI\Models\Shared\ProviderTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListConnectionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListConnectionsRequest();
    $request->listConnectionsInput = new ListConnectionsInput();
    $request->listConnectionsInput->hostArnFilter = 'laboriosam';
    $request->listConnectionsInput->maxResults = 943749;
    $request->listConnectionsInput->nextToken = 'saepe';
    $request->listConnectionsInput->providerTypeFilter = ProviderTypeEnum::GIT_HUB_ENTERPRISE_SERVER;
    $request->maxResults = 'in';
    $request->nextToken = 'corporis';
    $request->xAmzAlgorithm = 'iste';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->xAmzTarget = ListConnectionsXAmzTargetEnum::COM_AMAZONAWS_CODESTAR_CONNECTIONS_CODE_STAR_CONNECTIONS20191201_LIST_CONNECTIONS;

    $response = $sdk->sdk->listConnections($request);

    if ($response->listConnectionsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listHosts

Lists the hosts associated with your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListHostsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListHostsInput;
use \OpenAPI\OpenAPI\Models\Operations\ListHostsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListHostsRequest();
    $request->listHostsInput = new ListHostsInput();
    $request->listHostsInput->maxResults = 666767;
    $request->listHostsInput->nextToken = 'mollitia';
    $request->maxResults = 'laborum';
    $request->nextToken = 'dolores';
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'nemo';
    $request->xAmzTarget = ListHostsXAmzTargetEnum::COM_AMAZONAWS_CODESTAR_CONNECTIONS_CODE_STAR_CONNECTIONS20191201_LIST_HOSTS;

    $response = $sdk->sdk->listHosts($request);

    if ($response->listHostsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Gets the set of key-value pairs (metadata) that are used to manage the resource.

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
    $request->listTagsForResourceInput->resourceArn = 'minima';
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'culpa';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'architecto';
    $request->xAmzTarget = ListTagsForResourceXAmzTargetEnum::COM_AMAZONAWS_CODESTAR_CONNECTIONS_CODE_STAR_CONNECTIONS20191201_LIST_TAGS_FOR_RESOURCE;

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource.

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
    $request->tagResourceInput->resourceArn = 'mollitia';
    $request->tagResourceInput->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'repellat';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'numquam';
    $request->xAmzSignedHeaders = 'commodi';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::COM_AMAZONAWS_CODESTAR_CONNECTIONS_CODE_STAR_CONNECTIONS20191201_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes tags from an AWS resource.

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
    $request->untagResourceInput->resourceArn = 'quam';
    $request->untagResourceInput->tagKeys = [
        'velit',
        'error',
    ];
    $request->xAmzAlgorithm = 'quia';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'vitae';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'animi';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'odit';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::COM_AMAZONAWS_CODESTAR_CONNECTIONS_CODE_STAR_CONNECTIONS20191201_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateHost

Updates a specified host with the provided configurations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateHostRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateHostInput;
use \OpenAPI\OpenAPI\Models\Shared\VpcConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\UpdateHostXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateHostRequest();
    $request->updateHostInput = new UpdateHostInput();
    $request->updateHostInput->hostArn = 'quo';
    $request->updateHostInput->providerEndpoint = 'sequi';
    $request->updateHostInput->vpcConfiguration = new VpcConfiguration();
    $request->updateHostInput->vpcConfiguration->securityGroupIds = [
        'ipsam',
        'id',
        'possimus',
        'aut',
    ];
    $request->updateHostInput->vpcConfiguration->subnetIds = [
        'error',
    ];
    $request->updateHostInput->vpcConfiguration->tlsCertificate = 'temporibus';
    $request->updateHostInput->vpcConfiguration->vpcId = 'laborum';
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'voluptatibus';
    $request->xAmzTarget = UpdateHostXAmzTargetEnum::COM_AMAZONAWS_CODESTAR_CONNECTIONS_CODE_STAR_CONNECTIONS20191201_UPDATE_HOST;

    $response = $sdk->sdk->updateHost($request);

    if ($response->updateHostOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
