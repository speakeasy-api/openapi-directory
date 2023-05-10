# SDK

## Overview

<p>Amazon Managed Grafana is a fully managed and secure data visualization service that you can use to instantly query, correlate, and visualize operational metrics, logs, and traces from multiple sources. Amazon Managed Grafana makes it easy to deploy, operate, and scale Grafana, a widely deployed data visualization tool that is popular for its extensible data support.</p> <p>With Amazon Managed Grafana, you create logically isolated Grafana servers called <i>workspaces</i>. In a workspace, you can create Grafana dashboards and visualizations to analyze your metrics, logs, and traces without having to build, package, or deploy any hardware to run Grafana servers. </p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/grafana/>
### Available Operations

* [associateLicense](#associatelicense) - Assigns a Grafana Enterprise license to a workspace. Upgrading to Grafana Enterprise incurs additional fees. For more information, see <a href="https://docs.aws.amazon.com/grafana/latest/userguide/upgrade-to-Grafana-Enterprise.html">Upgrade a workspace to Grafana Enterprise</a>.
* [createWorkspace](#createworkspace) - <p>Creates a <i>workspace</i>. In a workspace, you can create Grafana dashboards and visualizations to analyze your metrics, logs, and traces. You don't have to build, package, or deploy any hardware to run the Grafana server.</p> <p>Don't use <code>CreateWorkspace</code> to modify an existing workspace. Instead, use <a href="https://docs.aws.amazon.com/grafana/latest/APIReference/API_UpdateWorkspace.html">UpdateWorkspace</a>.</p>
* [createWorkspaceApiKey](#createworkspaceapikey) - Creates a Grafana API key for the workspace. This key can be used to authenticate requests sent to the workspace's HTTP API. See <a href="https://docs.aws.amazon.com/grafana/latest/userguide/Using-Grafana-APIs.html">https://docs.aws.amazon.com/grafana/latest/userguide/Using-Grafana-APIs.html</a> for available APIs and example requests.
* [deleteWorkspace](#deleteworkspace) - Deletes an Amazon Managed Grafana workspace.
* [deleteWorkspaceApiKey](#deleteworkspaceapikey) - Deletes a Grafana API key for the workspace.
* [describeWorkspace](#describeworkspace) - Displays information about one Amazon Managed Grafana workspace.
* [describeWorkspaceAuthentication](#describeworkspaceauthentication) - Displays information about the authentication methods used in one Amazon Managed Grafana workspace.
* [describeWorkspaceConfiguration](#describeworkspaceconfiguration) - Gets the current configuration string for the given workspace.
* [disassociateLicense](#disassociatelicense) - Removes the Grafana Enterprise license from a workspace.
* [listPermissions](#listpermissions) - Lists the users and groups who have the Grafana <code>Admin</code> and <code>Editor</code> roles in this workspace. If you use this operation without specifying <code>userId</code> or <code>groupId</code>, the operation returns the roles of all users and groups. If you specify a <code>userId</code> or a <code>groupId</code>, only the roles for that user or group are returned. If you do this, you can specify only one <code>userId</code> or one <code>groupId</code>.
* [listTagsForResource](#listtagsforresource) - The <code>ListTagsForResource</code> operation returns the tags that are associated with the Amazon Managed Service for Grafana resource specified by the <code>resourceArn</code>. Currently, the only resource that can be tagged is a workspace. 
* [listWorkspaces](#listworkspaces) - Returns a list of Amazon Managed Grafana workspaces in the account, with some information about each workspace. For more complete information about one workspace, use <a href="https://docs.aws.amazon.com/AAMG/latest/APIReference/API_DescribeWorkspace.html">DescribeWorkspace</a>.
* [tagResource](#tagresource) - <p>The <code>TagResource</code> operation associates tags with an Amazon Managed Grafana resource. Currently, the only resource that can be tagged is workspaces. </p> <p>If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag.</p>
* [untagResource](#untagresource) - The <code>UntagResource</code> operation removes the association of the tag with the Amazon Managed Grafana resource. 
* [updatePermissions](#updatepermissions) - Updates which users in a workspace have the Grafana <code>Admin</code> or <code>Editor</code> roles.
* [updateWorkspace](#updateworkspace) - <p>Modifies an existing Amazon Managed Grafana workspace. If you use this operation and omit any optional parameters, the existing values of those parameters are not changed.</p> <p>To modify the user authentication methods that the workspace uses, such as SAML or IAM Identity Center, use <a href="https://docs.aws.amazon.com/grafana/latest/APIReference/API_UpdateWorkspaceAuthentication.html">UpdateWorkspaceAuthentication</a>.</p> <p>To modify which users in the workspace have the <code>Admin</code> and <code>Editor</code> Grafana roles, use <a href="https://docs.aws.amazon.com/grafana/latest/APIReference/API_UpdatePermissions.html">UpdatePermissions</a>.</p>
* [updateWorkspaceAuthentication](#updateworkspaceauthentication) - <p>Use this operation to define the identity provider (IdP) that this workspace authenticates users from, using SAML. You can also map SAML assertion attributes to workspace user information and define which groups in the assertion attribute are to have the <code>Admin</code> and <code>Editor</code> roles in the workspace.</p> <note> <p>Changes to the authentication method for a workspace may take a few minutes to take effect.</p> </note>
* [updateWorkspaceConfiguration](#updateworkspaceconfiguration) - Updates the configuration string for the given workspace

## associateLicense

Assigns a Grafana Enterprise license to a workspace. Upgrading to Grafana Enterprise incurs additional fees. For more information, see <a href="https://docs.aws.amazon.com/grafana/latest/userguide/upgrade-to-Grafana-Enterprise.html">Upgrade a workspace to Grafana Enterprise</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateLicenseRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateLicenseLicenseTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateLicenseRequest();
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->licenseType = AssociateLicenseLicenseTypeEnum::ENTERPRISE_FREE_TRIAL;
    $request->workspaceId = 'tempora';

    $response = $sdk->sdk->associateLicense($request);

    if ($response->associateLicenseResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createWorkspace

<p>Creates a <i>workspace</i>. In a workspace, you can create Grafana dashboards and visualizations to analyze your metrics, logs, and traces. You don't have to build, package, or deploy any hardware to run the Grafana server.</p> <p>Don't use <code>CreateWorkspace</code> to modify an existing workspace. Instead, use <a href="https://docs.aws.amazon.com/grafana/latest/APIReference/API_UpdateWorkspace.html">UpdateWorkspace</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkspaceRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkspaceRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkspaceRequestBodyAccountAccessTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AuthenticationProviderTypesEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkspaceRequestBodyNetworkAccessControl;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkspaceRequestBodyPermissionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkspaceRequestBodyVpcConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NotificationDestinationTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateWorkspaceRequest();
    $request->requestBody = new CreateWorkspaceRequestBody();
    $request->requestBody->accountAccessType = CreateWorkspaceRequestBodyAccountAccessTypeEnum::CURRENT_ACCOUNT;
    $request->requestBody->authenticationProviders = [
        AuthenticationProviderTypesEnum::SAML,
        AuthenticationProviderTypesEnum::SAML,
    ];
    $request->requestBody->clientToken = 'voluptatum';
    $request->requestBody->configuration = 'iusto';
    $request->requestBody->networkAccessControl = new CreateWorkspaceRequestBodyNetworkAccessControl();
    $request->requestBody->networkAccessControl->prefixListIds = [
        'nisi',
        'recusandae',
        'temporibus',
    ];
    $request->requestBody->networkAccessControl->vpceIds = [
        'quis',
    ];
    $request->requestBody->organizationRoleName = 'veritatis';
    $request->requestBody->permissionType = CreateWorkspaceRequestBodyPermissionTypeEnum::SERVICE_MANAGED;
    $request->requestBody->stackSetName = 'perferendis';
    $request->requestBody->tags = [
        'repellendus' => 'sapiente',
        'quo' => 'odit',
    ];
    $request->requestBody->vpcConfiguration = new CreateWorkspaceRequestBodyVpcConfiguration();
    $request->requestBody->vpcConfiguration->securityGroupIds = [
        'at',
        'maiores',
        'molestiae',
        'quod',
    ];
    $request->requestBody->vpcConfiguration->subnetIds = [
        'esse',
        'totam',
        'porro',
        'dolorum',
    ];
    $request->requestBody->workspaceDataSources = [
        DataSourceTypeEnum::ATHENA,
    ];
    $request->requestBody->workspaceDescription = 'officia';
    $request->requestBody->workspaceName = 'occaecati';
    $request->requestBody->workspaceNotificationDestinations = [
        NotificationDestinationTypeEnum::SNS,
    ];
    $request->requestBody->workspaceOrganizationalUnits = [
        'hic',
        'optio',
        'totam',
    ];
    $request->requestBody->workspaceRoleArn = 'beatae';
    $request->xAmzAlgorithm = 'commodi';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'modi';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'esse';

    $response = $sdk->sdk->createWorkspace($request);

    if ($response->createWorkspaceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createWorkspaceApiKey

Creates a Grafana API key for the workspace. This key can be used to authenticate requests sent to the workspace's HTTP API. See <a href="https://docs.aws.amazon.com/grafana/latest/userguide/Using-Grafana-APIs.html">https://docs.aws.amazon.com/grafana/latest/userguide/Using-Grafana-APIs.html</a> for available APIs and example requests.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkspaceApiKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkspaceApiKeyRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateWorkspaceApiKeyRequest();
    $request->requestBody = new CreateWorkspaceApiKeyRequestBody();
    $request->requestBody->keyName = 'ipsum';
    $request->requestBody->keyRole = 'excepturi';
    $request->requestBody->secondsToLive = 135218;
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'sed';
    $request->xAmzSecurityToken = 'iste';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'natus';
    $request->workspaceId = 'laboriosam';

    $response = $sdk->sdk->createWorkspaceApiKey($request);

    if ($response->createWorkspaceApiKeyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteWorkspace

Deletes an Amazon Managed Grafana workspace.

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
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'fuga';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'iste';
    $request->xAmzSignedHeaders = 'iure';
    $request->workspaceId = 'saepe';

    $response = $sdk->sdk->deleteWorkspace($request);

    if ($response->deleteWorkspaceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteWorkspaceApiKey

Deletes a Grafana API key for the workspace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWorkspaceApiKeyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWorkspaceApiKeyRequest();
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'est';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'laborum';
    $request->keyName = 'dolores';
    $request->workspaceId = 'dolorem';

    $response = $sdk->sdk->deleteWorkspaceApiKey($request);

    if ($response->deleteWorkspaceApiKeyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeWorkspace

Displays information about one Amazon Managed Grafana workspace.

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
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'explicabo';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'nemo';
    $request->xAmzSignedHeaders = 'minima';
    $request->workspaceId = 'excepturi';

    $response = $sdk->sdk->describeWorkspace($request);

    if ($response->describeWorkspaceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeWorkspaceAuthentication

Displays information about the authentication methods used in one Amazon Managed Grafana workspace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeWorkspaceAuthenticationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeWorkspaceAuthenticationRequest();
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'culpa';
    $request->xAmzDate = 'doloribus';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'mollitia';
    $request->workspaceId = 'dolorem';

    $response = $sdk->sdk->describeWorkspaceAuthentication($request);

    if ($response->describeWorkspaceAuthenticationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeWorkspaceConfiguration

Gets the current configuration string for the given workspace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeWorkspaceConfigurationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeWorkspaceConfigurationRequest();
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'repellat';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'numquam';
    $request->xAmzSignedHeaders = 'commodi';
    $request->workspaceId = 'quam';

    $response = $sdk->sdk->describeWorkspaceConfiguration($request);

    if ($response->describeWorkspaceConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateLicense

Removes the Grafana Enterprise license from a workspace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateLicenseRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateLicenseLicenseTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateLicenseRequest();
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'velit';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'quia';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'vitae';
    $request->xAmzSignedHeaders = 'laborum';
    $request->licenseType = DisassociateLicenseLicenseTypeEnum::ENTERPRISE_FREE_TRIAL;
    $request->workspaceId = 'enim';

    $response = $sdk->sdk->disassociateLicense($request);

    if ($response->disassociateLicenseResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPermissions

Lists the users and groups who have the Grafana <code>Admin</code> and <code>Editor</code> roles in this workspace. If you use this operation without specifying <code>userId</code> or <code>groupId</code>, the operation returns the roles of all users and groups. If you specify a <code>userId</code> or a <code>groupId</code>, only the roles for that user or group are returned. If you do this, you can specify only one <code>userId</code> or one <code>groupId</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListPermissionsUserTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPermissionsRequest();
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'sequi';
    $request->xAmzDate = 'tenetur';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'possimus';
    $request->groupId = 'aut';
    $request->maxResults = 97101;
    $request->nextToken = 'error';
    $request->userId = 'temporibus';
    $request->userType = ListPermissionsUserTypeEnum::SSO_GROUP;
    $request->workspaceId = 'quasi';

    $response = $sdk->sdk->listPermissions($request);

    if ($response->listPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

The <code>ListTagsForResource</code> operation returns the tags that are associated with the Amazon Managed Service for Grafana resource specified by the <code>resourceArn</code>. Currently, the only resource that can be tagged is a workspace. 

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
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->resourceArn = 'omnis';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listWorkspaces

Returns a list of Amazon Managed Grafana workspaces in the account, with some information about each workspace. For more complete information about one workspace, use <a href="https://docs.aws.amazon.com/AAMG/latest/APIReference/API_DescribeWorkspace.html">DescribeWorkspace</a>.

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
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'doloremque';
    $request->xAmzSecurityToken = 'reprehenderit';
    $request->xAmzSignature = 'ut';
    $request->xAmzSignedHeaders = 'maiores';
    $request->maxResults = 120196;
    $request->nextToken = 'corporis';

    $response = $sdk->sdk->listWorkspaces($request);

    if ($response->listWorkspacesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

<p>The <code>TagResource</code> operation associates tags with an Amazon Managed Grafana resource. Currently, the only resource that can be tagged is workspaces. </p> <p>If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag.</p>

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
        'iusto' => 'dicta',
        'harum' => 'enim',
    ];
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'repudiandae';
    $request->xAmzDate = 'quae';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'molestias';
    $request->resourceArn = 'excepturi';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

The <code>UntagResource</code> operation removes the association of the tag with the Amazon Managed Grafana resource. 

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
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'rem';
    $request->xAmzSecurityToken = 'voluptates';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'repudiandae';
    $request->resourceArn = 'sint';
    $request->tagKeys = [
        'itaque',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePermissions

Updates which users in a workspace have the Grafana <code>Admin</code> or <code>Editor</code> roles.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePermissionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePermissionsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\UpdateInstruction;
use \OpenAPI\OpenAPI\Models\Shared\UpdateActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\RoleEnum;
use \OpenAPI\OpenAPI\Models\Shared\User;
use \OpenAPI\OpenAPI\Models\Shared\UserTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePermissionsRequest();
    $request->requestBody = new UpdatePermissionsRequestBody();
    $request->requestBody->updateInstructionBatch = [
        new UpdateInstruction(),
        new UpdateInstruction(),
    ];
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'consequatur';
    $request->xAmzCredential = 'est';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'explicabo';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'distinctio';
    $request->workspaceId = 'quibusdam';

    $response = $sdk->sdk->updatePermissions($request);

    if ($response->updatePermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateWorkspace

<p>Modifies an existing Amazon Managed Grafana workspace. If you use this operation and omit any optional parameters, the existing values of those parameters are not changed.</p> <p>To modify the user authentication methods that the workspace uses, such as SAML or IAM Identity Center, use <a href="https://docs.aws.amazon.com/grafana/latest/APIReference/API_UpdateWorkspaceAuthentication.html">UpdateWorkspaceAuthentication</a>.</p> <p>To modify which users in the workspace have the <code>Admin</code> and <code>Editor</code> Grafana roles, use <a href="https://docs.aws.amazon.com/grafana/latest/APIReference/API_UpdatePermissions.html">UpdatePermissions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkspaceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkspaceRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkspaceRequestBodyAccountAccessTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkspaceRequestBodyNetworkAccessControl;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkspaceRequestBodyPermissionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkspaceRequestBodyVpcConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NotificationDestinationTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateWorkspaceRequest();
    $request->requestBody = new UpdateWorkspaceRequestBody();
    $request->requestBody->accountAccessType = UpdateWorkspaceRequestBodyAccountAccessTypeEnum::CURRENT_ACCOUNT;
    $request->requestBody->networkAccessControl = new UpdateWorkspaceRequestBodyNetworkAccessControl();
    $request->requestBody->networkAccessControl->prefixListIds = [
        'qui',
        'aliquid',
    ];
    $request->requestBody->networkAccessControl->vpceIds = [
        'quos',
        'perferendis',
        'magni',
    ];
    $request->requestBody->organizationRoleName = 'assumenda';
    $request->requestBody->permissionType = UpdateWorkspaceRequestBodyPermissionTypeEnum::CUSTOMER_MANAGED;
    $request->requestBody->removeNetworkAccessConfiguration = false;
    $request->requestBody->removeVpcConfiguration = false;
    $request->requestBody->stackSetName = 'alias';
    $request->requestBody->vpcConfiguration = new UpdateWorkspaceRequestBodyVpcConfiguration();
    $request->requestBody->vpcConfiguration->securityGroupIds = [
        'dolorum',
    ];
    $request->requestBody->vpcConfiguration->subnetIds = [
        'tempora',
        'facilis',
        'tempore',
    ];
    $request->requestBody->workspaceDataSources = [
        DataSourceTypeEnum::TWINMAKER,
        DataSourceTypeEnum::XRAY,
    ];
    $request->requestBody->workspaceDescription = 'non';
    $request->requestBody->workspaceName = 'eligendi';
    $request->requestBody->workspaceNotificationDestinations = [
        NotificationDestinationTypeEnum::SNS,
        NotificationDestinationTypeEnum::SNS,
        NotificationDestinationTypeEnum::SNS,
    ];
    $request->requestBody->workspaceOrganizationalUnits = [
        'provident',
        'necessitatibus',
    ];
    $request->requestBody->workspaceRoleArn = 'sint';
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'debitis';
    $request->xAmzDate = 'a';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'in';
    $request->workspaceId = 'illum';

    $response = $sdk->sdk->updateWorkspace($request);

    if ($response->updateWorkspaceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateWorkspaceAuthentication

<p>Use this operation to define the identity provider (IdP) that this workspace authenticates users from, using SAML. You can also map SAML assertion attributes to workspace user information and define which groups in the assertion attribute are to have the <code>Admin</code> and <code>Editor</code> roles in the workspace.</p> <note> <p>Changes to the authentication method for a workspace may take a few minutes to take effect.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkspaceAuthenticationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkspaceAuthenticationRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\AuthenticationProviderTypesEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkspaceAuthenticationRequestBodySamlConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AssertionAttributes;
use \OpenAPI\OpenAPI\Models\Shared\IdpMetadata;
use \OpenAPI\OpenAPI\Models\Shared\RoleValues;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateWorkspaceAuthenticationRequest();
    $request->requestBody = new UpdateWorkspaceAuthenticationRequestBody();
    $request->requestBody->authenticationProviders = [
        AuthenticationProviderTypesEnum::SAML,
        AuthenticationProviderTypesEnum::AWS_SSO,
        AuthenticationProviderTypesEnum::AWS_SSO,
        AuthenticationProviderTypesEnum::SAML,
    ];
    $request->requestBody->samlConfiguration = new UpdateWorkspaceAuthenticationRequestBodySamlConfiguration();
    $request->requestBody->samlConfiguration->allowedOrganizations = [
        'ea',
        'aliquid',
        'laborum',
        'accusamus',
    ];
    $request->requestBody->samlConfiguration->assertionAttributes = new AssertionAttributes();
    $request->requestBody->samlConfiguration->assertionAttributes->email = 'Kristian_Haley69@gmail.com';
    $request->requestBody->samlConfiguration->assertionAttributes->groups = 'provident';
    $request->requestBody->samlConfiguration->assertionAttributes->login = 'nam';
    $request->requestBody->samlConfiguration->assertionAttributes->name = 'Nelson Lesch';
    $request->requestBody->samlConfiguration->assertionAttributes->org = 'deserunt';
    $request->requestBody->samlConfiguration->assertionAttributes->role = 'nisi';
    $request->requestBody->samlConfiguration->idpMetadata = new IdpMetadata();
    $request->requestBody->samlConfiguration->idpMetadata->url = 'vel';
    $request->requestBody->samlConfiguration->idpMetadata->xml = 'natus';
    $request->requestBody->samlConfiguration->loginValidityDuration = 606393;
    $request->requestBody->samlConfiguration->roleValues = new RoleValues();
    $request->requestBody->samlConfiguration->roleValues->admin = [
        'perferendis',
        'nihil',
    ];
    $request->requestBody->samlConfiguration->roleValues->editor = [
        'distinctio',
        'id',
    ];
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'eum';
    $request->xAmzSignedHeaders = 'vero';
    $request->workspaceId = 'aspernatur';

    $response = $sdk->sdk->updateWorkspaceAuthentication($request);

    if ($response->updateWorkspaceAuthenticationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateWorkspaceConfiguration

Updates the configuration string for the given workspace

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkspaceConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkspaceConfigurationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateWorkspaceConfigurationRequest();
    $request->requestBody = new UpdateWorkspaceConfigurationRequestBody();
    $request->requestBody->configuration = 'architecto';
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'et';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'ullam';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'quos';
    $request->xAmzSignedHeaders = 'sint';
    $request->workspaceId = 'accusantium';

    $response = $sdk->sdk->updateWorkspaceConfiguration($request);

    if ($response->updateWorkspaceConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
