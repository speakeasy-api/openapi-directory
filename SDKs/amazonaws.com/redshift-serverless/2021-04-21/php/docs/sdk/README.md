# SDK

## Overview

<p>This is an interface reference for Amazon Redshift Serverless. It contains documentation for one of the programming or command line interfaces you can use to manage Amazon Redshift Serverless. </p> <p>Amazon Redshift Serverless automatically provisions data warehouse capacity and intelligently scales the underlying resources based on workload demands. Amazon Redshift Serverless adjusts capacity in seconds to deliver consistently high performance and simplified operations for even the most demanding and volatile workloads. Amazon Redshift Serverless lets you focus on using your data to acquire new insights for your business and customers. </p> <p> To learn more about Amazon Redshift Serverless, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/serverless-whatis.html">What is Amazon Redshift Serverless</a>. </p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/redshift-serverless/>
### Available Operations

* [convertRecoveryPointToSnapshot](#convertrecoverypointtosnapshot) - Converts a recovery point to a snapshot. For more information about recovery points and snapshots, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/serverless-snapshots-recovery.html">Working with snapshots and recovery points</a>.
* [createEndpointAccess](#createendpointaccess) - Creates an Amazon Redshift Serverless managed VPC endpoint.
* [createNamespace](#createnamespace) - Creates a namespace in Amazon Redshift Serverless.
* [createSnapshot](#createsnapshot) - Creates a snapshot of all databases in a namespace. For more information about snapshots, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/serverless-snapshots-recovery.html"> Working with snapshots and recovery points</a>.
* [createUsageLimit](#createusagelimit) - Creates a usage limit for a specified Amazon Redshift Serverless usage type. The usage limit is identified by the returned usage limit identifier. 
* [createWorkgroup](#createworkgroup) - Creates an workgroup in Amazon Redshift Serverless.
* [deleteEndpointAccess](#deleteendpointaccess) - Deletes an Amazon Redshift Serverless managed VPC endpoint.
* [deleteNamespace](#deletenamespace) - Deletes a namespace from Amazon Redshift Serverless. Before you delete the namespace, you can create a final snapshot that has all of the data within the namespace.
* [deleteResourcePolicy](#deleteresourcepolicy) - Deletes the specified resource policy.
* [deleteSnapshot](#deletesnapshot) - Deletes a snapshot from Amazon Redshift Serverless.
* [deleteUsageLimit](#deleteusagelimit) - Deletes a usage limit from Amazon Redshift Serverless.
* [deleteWorkgroup](#deleteworkgroup) - Deletes a workgroup.
* [getCredentials](#getcredentials) - <p>Returns a database user name and temporary password with temporary authorization to log in to Amazon Redshift Serverless.</p> <p>By default, the temporary credentials expire in 900 seconds. You can optionally specify a duration between 900 seconds (15 minutes) and 3600 seconds (60 minutes).</p> <pre><code> &lt;p&gt;The Identity and Access Management (IAM) user or role that runs GetCredentials must have an IAM policy attached that allows access to all necessary actions and resources.&lt;/p&gt; &lt;p&gt;If the &lt;code&gt;DbName&lt;/code&gt; parameter is specified, the IAM policy must allow access to the resource dbname for the specified database name.&lt;/p&gt; </code></pre>
* [getEndpointAccess](#getendpointaccess) - Returns information, such as the name, about a VPC endpoint.
* [getNamespace](#getnamespace) - Returns information about a namespace in Amazon Redshift Serverless.
* [getRecoveryPoint](#getrecoverypoint) - Returns information about a recovery point.
* [getResourcePolicy](#getresourcepolicy) - Returns a resource policy.
* [getSnapshot](#getsnapshot) - Returns information about a specific snapshot.
* [getTableRestoreStatus](#gettablerestorestatus) - Returns information about a <code>TableRestoreStatus</code> object.
* [getUsageLimit](#getusagelimit) - Returns information about a usage limit.
* [getWorkgroup](#getworkgroup) - Returns information about a specific workgroup.
* [listEndpointAccess](#listendpointaccess) - Returns an array of <code>EndpointAccess</code> objects and relevant information.
* [listNamespaces](#listnamespaces) - Returns information about a list of specified namespaces.
* [listRecoveryPoints](#listrecoverypoints) - Returns an array of recovery points.
* [listSnapshots](#listsnapshots) - Returns a list of snapshots.
* [listTableRestoreStatus](#listtablerestorestatus) - Returns information about an array of <code>TableRestoreStatus</code> objects.
* [listTagsForResource](#listtagsforresource) - Lists the tags assigned to a resource.
* [listUsageLimits](#listusagelimits) - Lists all usage limits within Amazon Redshift Serverless.
* [listWorkgroups](#listworkgroups) - Returns information about a list of specified workgroups.
* [putResourcePolicy](#putresourcepolicy) - Creates or updates a resource policy. Currently, you can use policies to share snapshots across Amazon Web Services accounts.
* [restoreFromRecoveryPoint](#restorefromrecoverypoint) - Restore the data from a recovery point.
* [restoreFromSnapshot](#restorefromsnapshot) - Restores a namespace from a snapshot.
* [restoreTableFromSnapshot](#restoretablefromsnapshot) - Restores a table from a snapshot to your Amazon Redshift Serverless instance. You can't use this operation to restore tables with <a href="https://docs.aws.amazon.com/redshift/latest/dg/t_Sorting_data.html#t_Sorting_data-interleaved">interleaved sort keys</a>.
* [tagResource](#tagresource) - Assigns one or more tags to a resource.
* [untagResource](#untagresource) - Removes a tag or set of tags from a resource.
* [updateEndpointAccess](#updateendpointaccess) - Updates an Amazon Redshift Serverless managed endpoint.
* [updateNamespace](#updatenamespace) - Updates a namespace with the specified settings. Unless required, you can't update multiple parameters in one request. For example, you must specify both <code>adminUsername</code> and <code>adminUserPassword</code> to update either field, but you can't update both <code>kmsKeyId</code> and <code>logExports</code> in a single request.
* [updateSnapshot](#updatesnapshot) - Updates a snapshot.
* [updateUsageLimit](#updateusagelimit) - Update a usage limit in Amazon Redshift Serverless. You can't update the usage type or period of a usage limit.
* [updateWorkgroup](#updateworkgroup) - Updates a workgroup with the specified configuration settings. You can't update multiple parameters in one request. For example, you can update <code>baseCapacity</code> or <code>port</code> in a single request, but you can't update both in the same request.

## convertRecoveryPointToSnapshot

Converts a recovery point to a snapshot. For more information about recovery points and snapshots, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/serverless-snapshots-recovery.html">Working with snapshots and recovery points</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ConvertRecoveryPointToSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConvertRecoveryPointToSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\ConvertRecoveryPointToSnapshotXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConvertRecoveryPointToSnapshotRequest();
    $request->convertRecoveryPointToSnapshotRequest = new ConvertRecoveryPointToSnapshotRequest();
    $request->convertRecoveryPointToSnapshotRequest->recoveryPointId = 'suscipit';
    $request->convertRecoveryPointToSnapshotRequest->retentionPeriod = 437587;
    $request->convertRecoveryPointToSnapshotRequest->snapshotName = 'magnam';
    $request->convertRecoveryPointToSnapshotRequest->tags = [
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
    $request->xAmzTarget = ConvertRecoveryPointToSnapshotXAmzTargetEnum::REDSHIFT_SERVERLESS_CONVERT_RECOVERY_POINT_TO_SNAPSHOT;

    $response = $sdk->sdk->convertRecoveryPointToSnapshot($request);

    if ($response->convertRecoveryPointToSnapshotResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createEndpointAccess

Creates an Amazon Redshift Serverless managed VPC endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateEndpointAccessRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateEndpointAccessRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateEndpointAccessXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateEndpointAccessRequest();
    $request->createEndpointAccessRequest = new CreateEndpointAccessRequest();
    $request->createEndpointAccessRequest->endpointName = 'voluptatum';
    $request->createEndpointAccessRequest->subnetIds = [
        'excepturi',
        'nisi',
    ];
    $request->createEndpointAccessRequest->vpcSecurityGroupIds = [
        'temporibus',
        'ab',
        'quis',
        'veritatis',
    ];
    $request->createEndpointAccessRequest->workgroupName = 'deserunt';
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'repellendus';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'at';
    $request->xAmzTarget = CreateEndpointAccessXAmzTargetEnum::REDSHIFT_SERVERLESS_CREATE_ENDPOINT_ACCESS;

    $response = $sdk->sdk->createEndpointAccess($request);

    if ($response->createEndpointAccessResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNamespace

Creates a namespace in Amazon Redshift Serverless.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNamespaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateNamespaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\LogExportEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateNamespaceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNamespaceRequest();
    $request->createNamespaceRequest = new CreateNamespaceRequest();
    $request->createNamespaceRequest->adminUserPassword = 'at';
    $request->createNamespaceRequest->adminUsername = 'maiores';
    $request->createNamespaceRequest->dbName = 'molestiae';
    $request->createNamespaceRequest->defaultIamRoleArn = 'quod';
    $request->createNamespaceRequest->iamRoles = [
        'esse',
        'totam',
        'porro',
        'dolorum',
    ];
    $request->createNamespaceRequest->kmsKeyId = 'dicta';
    $request->createNamespaceRequest->logExports = [
        LogExportEnum::USERLOG,
        LogExportEnum::USERLOG,
        LogExportEnum::USERACTIVITYLOG,
    ];
    $request->createNamespaceRequest->namespaceName = 'deleniti';
    $request->createNamespaceRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'optio';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'beatae';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'qui';
    $request->xAmzTarget = CreateNamespaceXAmzTargetEnum::REDSHIFT_SERVERLESS_CREATE_NAMESPACE;

    $response = $sdk->sdk->createNamespace($request);

    if ($response->createNamespaceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSnapshot

Creates a snapshot of all databases in a namespace. For more information about snapshots, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/serverless-snapshots-recovery.html"> Working with snapshots and recovery points</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateSnapshotXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSnapshotRequest();
    $request->createSnapshotRequest = new CreateSnapshotRequest();
    $request->createSnapshotRequest->namespaceName = 'impedit';
    $request->createSnapshotRequest->retentionPeriod = 736918;
    $request->createSnapshotRequest->snapshotName = 'esse';
    $request->createSnapshotRequest->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'ad';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'sed';
    $request->xAmzSignedHeaders = 'iste';
    $request->xAmzTarget = CreateSnapshotXAmzTargetEnum::REDSHIFT_SERVERLESS_CREATE_SNAPSHOT;

    $response = $sdk->sdk->createSnapshot($request);

    if ($response->createSnapshotResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createUsageLimit

Creates a usage limit for a specified Amazon Redshift Serverless usage type. The usage limit is identified by the returned usage limit identifier. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateUsageLimitRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateUsageLimitRequest;
use \OpenAPI\OpenAPI\Models\Shared\UsageLimitBreachActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\UsageLimitPeriodEnum;
use \OpenAPI\OpenAPI\Models\Shared\UsageLimitUsageTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateUsageLimitXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateUsageLimitRequest();
    $request->createUsageLimitRequest = new CreateUsageLimitRequest();
    $request->createUsageLimitRequest->amount = 222321;
    $request->createUsageLimitRequest->breachAction = UsageLimitBreachActionEnum::EMIT_METRIC;
    $request->createUsageLimitRequest->period = UsageLimitPeriodEnum::WEEKLY;
    $request->createUsageLimitRequest->resourceArn = 'hic';
    $request->createUsageLimitRequest->usageType = UsageLimitUsageTypeEnum::CROSS_REGION_DATASHARING;
    $request->xAmzAlgorithm = 'fuga';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'iste';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'quidem';
    $request->xAmzTarget = CreateUsageLimitXAmzTargetEnum::REDSHIFT_SERVERLESS_CREATE_USAGE_LIMIT;

    $response = $sdk->sdk->createUsageLimit($request);

    if ($response->createUsageLimitResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createWorkgroup

Creates an workgroup in Amazon Redshift Serverless.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkgroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateWorkgroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConfigParameter;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkgroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateWorkgroupRequest();
    $request->createWorkgroupRequest = new CreateWorkgroupRequest();
    $request->createWorkgroupRequest->baseCapacity = 99280;
    $request->createWorkgroupRequest->configParameters = [
        new ConfigParameter(),
    ];
    $request->createWorkgroupRequest->enhancedVpcRouting = false;
    $request->createWorkgroupRequest->namespaceName = 'reiciendis';
    $request->createWorkgroupRequest->port = 666767;
    $request->createWorkgroupRequest->publiclyAccessible = false;
    $request->createWorkgroupRequest->securityGroupIds = [
        'laborum',
        'dolores',
        'dolorem',
    ];
    $request->createWorkgroupRequest->subnetIds = [
        'explicabo',
        'nobis',
    ];
    $request->createWorkgroupRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->createWorkgroupRequest->workgroupName = 'omnis';
    $request->xAmzAlgorithm = 'nemo';
    $request->xAmzContentSha256 = 'minima';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'culpa';
    $request->xAmzSignedHeaders = 'doloribus';
    $request->xAmzTarget = CreateWorkgroupXAmzTargetEnum::REDSHIFT_SERVERLESS_CREATE_WORKGROUP;

    $response = $sdk->sdk->createWorkgroup($request);

    if ($response->createWorkgroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteEndpointAccess

Deletes an Amazon Redshift Serverless managed VPC endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEndpointAccessRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteEndpointAccessRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEndpointAccessXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteEndpointAccessRequest();
    $request->deleteEndpointAccessRequest = new DeleteEndpointAccessRequest();
    $request->deleteEndpointAccessRequest->endpointName = 'sapiente';
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'culpa';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'repellat';
    $request->xAmzSignedHeaders = 'mollitia';
    $request->xAmzTarget = DeleteEndpointAccessXAmzTargetEnum::REDSHIFT_SERVERLESS_DELETE_ENDPOINT_ACCESS;

    $response = $sdk->sdk->deleteEndpointAccess($request);

    if ($response->deleteEndpointAccessResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNamespace

Deletes a namespace from Amazon Redshift Serverless. Before you delete the namespace, you can create a final snapshot that has all of the data within the namespace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNamespaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteNamespaceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNamespaceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNamespaceRequest();
    $request->deleteNamespaceRequest = new DeleteNamespaceRequest();
    $request->deleteNamespaceRequest->finalSnapshotName = 'occaecati';
    $request->deleteNamespaceRequest->finalSnapshotRetentionPeriod = 253291;
    $request->deleteNamespaceRequest->namespaceName = 'commodi';
    $request->xAmzAlgorithm = 'quam';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'velit';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'quia';
    $request->xAmzSignature = 'quis';
    $request->xAmzSignedHeaders = 'vitae';
    $request->xAmzTarget = DeleteNamespaceXAmzTargetEnum::REDSHIFT_SERVERLESS_DELETE_NAMESPACE;

    $response = $sdk->sdk->deleteNamespace($request);

    if ($response->deleteNamespaceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteResourcePolicy

Deletes the specified resource policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteResourcePolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteResourcePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteResourcePolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteResourcePolicyRequest();
    $request->deleteResourcePolicyRequest = new DeleteResourcePolicyRequest();
    $request->deleteResourcePolicyRequest->resourceArn = 'laborum';
    $request->xAmzAlgorithm = 'animi';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'sequi';
    $request->xAmzSignature = 'tenetur';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->xAmzTarget = DeleteResourcePolicyXAmzTargetEnum::REDSHIFT_SERVERLESS_DELETE_RESOURCE_POLICY;

    $response = $sdk->sdk->deleteResourcePolicy($request);

    if ($response->deleteResourcePolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSnapshot

Deletes a snapshot from Amazon Redshift Serverless.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSnapshotXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSnapshotRequest();
    $request->deleteSnapshotRequest = new DeleteSnapshotRequest();
    $request->deleteSnapshotRequest->snapshotName = 'id';
    $request->xAmzAlgorithm = 'possimus';
    $request->xAmzContentSha256 = 'aut';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'temporibus';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'quasi';
    $request->xAmzTarget = DeleteSnapshotXAmzTargetEnum::REDSHIFT_SERVERLESS_DELETE_SNAPSHOT;

    $response = $sdk->sdk->deleteSnapshot($request);

    if ($response->deleteSnapshotResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUsageLimit

Deletes a usage limit from Amazon Redshift Serverless.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUsageLimitRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteUsageLimitRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUsageLimitXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUsageLimitRequest();
    $request->deleteUsageLimitRequest = new DeleteUsageLimitRequest();
    $request->deleteUsageLimitRequest->usageLimitId = 'reiciendis';
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'omnis';
    $request->xAmzTarget = DeleteUsageLimitXAmzTargetEnum::REDSHIFT_SERVERLESS_DELETE_USAGE_LIMIT;

    $response = $sdk->sdk->deleteUsageLimit($request);

    if ($response->deleteUsageLimitResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteWorkgroup

Deletes a workgroup.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWorkgroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteWorkgroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWorkgroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWorkgroupRequest();
    $request->deleteWorkgroupRequest = new DeleteWorkgroupRequest();
    $request->deleteWorkgroupRequest->workgroupName = 'voluptate';
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'doloremque';
    $request->xAmzDate = 'reprehenderit';
    $request->xAmzSecurityToken = 'ut';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'dicta';
    $request->xAmzTarget = DeleteWorkgroupXAmzTargetEnum::REDSHIFT_SERVERLESS_DELETE_WORKGROUP;

    $response = $sdk->sdk->deleteWorkgroup($request);

    if ($response->deleteWorkgroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCredentials

<p>Returns a database user name and temporary password with temporary authorization to log in to Amazon Redshift Serverless.</p> <p>By default, the temporary credentials expire in 900 seconds. You can optionally specify a duration between 900 seconds (15 minutes) and 3600 seconds (60 minutes).</p> <pre><code> &lt;p&gt;The Identity and Access Management (IAM) user or role that runs GetCredentials must have an IAM policy attached that allows access to all necessary actions and resources.&lt;/p&gt; &lt;p&gt;If the &lt;code&gt;DbName&lt;/code&gt; parameter is specified, the IAM policy must allow access to the resource dbname for the specified database name.&lt;/p&gt; </code></pre>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCredentialsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetCredentialsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCredentialsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCredentialsRequest();
    $request->getCredentialsRequest = new GetCredentialsRequest();
    $request->getCredentialsRequest->dbName = 'corporis';
    $request->getCredentialsRequest->durationSeconds = 296140;
    $request->getCredentialsRequest->workgroupName = 'iusto';
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'harum';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'repudiandae';
    $request->xAmzSignedHeaders = 'quae';
    $request->xAmzTarget = GetCredentialsXAmzTargetEnum::REDSHIFT_SERVERLESS_GET_CREDENTIALS;

    $response = $sdk->sdk->getCredentials($request);

    if ($response->getCredentialsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEndpointAccess

Returns information, such as the name, about a VPC endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEndpointAccessRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetEndpointAccessRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEndpointAccessXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEndpointAccessRequest();
    $request->getEndpointAccessRequest = new GetEndpointAccessRequest();
    $request->getEndpointAccessRequest->endpointName = 'ipsum';
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'molestias';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'modi';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'rem';
    $request->xAmzTarget = GetEndpointAccessXAmzTargetEnum::REDSHIFT_SERVERLESS_GET_ENDPOINT_ACCESS;

    $response = $sdk->sdk->getEndpointAccess($request);

    if ($response->getEndpointAccessResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNamespace

Returns information about a namespace in Amazon Redshift Serverless.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNamespaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetNamespaceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNamespaceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNamespaceRequest();
    $request->getNamespaceRequest = new GetNamespaceRequest();
    $request->getNamespaceRequest->namespaceName = 'voluptates';
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'itaque';
    $request->xAmzSignature = 'incidunt';
    $request->xAmzSignedHeaders = 'enim';
    $request->xAmzTarget = GetNamespaceXAmzTargetEnum::REDSHIFT_SERVERLESS_GET_NAMESPACE;

    $response = $sdk->sdk->getNamespace($request);

    if ($response->getNamespaceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRecoveryPoint

Returns information about a recovery point.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRecoveryPointRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetRecoveryPointRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRecoveryPointXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRecoveryPointRequest();
    $request->getRecoveryPointRequest = new GetRecoveryPointRequest();
    $request->getRecoveryPointRequest->recoveryPointId = 'consequatur';
    $request->xAmzAlgorithm = 'est';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'quibusdam';
    $request->xAmzSignedHeaders = 'labore';
    $request->xAmzTarget = GetRecoveryPointXAmzTargetEnum::REDSHIFT_SERVERLESS_GET_RECOVERY_POINT;

    $response = $sdk->sdk->getRecoveryPoint($request);

    if ($response->getRecoveryPointResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResourcePolicy

Returns a resource policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcePolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetResourcePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcePolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourcePolicyRequest();
    $request->getResourcePolicyRequest = new GetResourcePolicyRequest();
    $request->getResourcePolicyRequest->resourceArn = 'modi';
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'cupiditate';
    $request->xAmzDate = 'quos';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'magni';
    $request->xAmzSignedHeaders = 'assumenda';
    $request->xAmzTarget = GetResourcePolicyXAmzTargetEnum::REDSHIFT_SERVERLESS_GET_RESOURCE_POLICY;

    $response = $sdk->sdk->getResourcePolicy($request);

    if ($response->getResourcePolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSnapshot

Returns information about a specific snapshot.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSnapshotXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSnapshotRequest();
    $request->getSnapshotRequest = new GetSnapshotRequest();
    $request->getSnapshotRequest->ownerAccount = 'ipsam';
    $request->getSnapshotRequest->snapshotArn = 'alias';
    $request->getSnapshotRequest->snapshotName = 'fugit';
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'tempore';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'delectus';
    $request->xAmzTarget = GetSnapshotXAmzTargetEnum::REDSHIFT_SERVERLESS_GET_SNAPSHOT;

    $response = $sdk->sdk->getSnapshot($request);

    if ($response->getSnapshotResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTableRestoreStatus

Returns information about a <code>TableRestoreStatus</code> object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTableRestoreStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetTableRestoreStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTableRestoreStatusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTableRestoreStatusRequest();
    $request->getTableRestoreStatusRequest = new GetTableRestoreStatusRequest();
    $request->getTableRestoreStatusRequest->tableRestoreRequestId = 'eum';
    $request->xAmzAlgorithm = 'non';
    $request->xAmzContentSha256 = 'eligendi';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'necessitatibus';
    $request->xAmzSignedHeaders = 'sint';
    $request->xAmzTarget = GetTableRestoreStatusXAmzTargetEnum::REDSHIFT_SERVERLESS_GET_TABLE_RESTORE_STATUS;

    $response = $sdk->sdk->getTableRestoreStatus($request);

    if ($response->getTableRestoreStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsageLimit

Returns information about a usage limit.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUsageLimitRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetUsageLimitRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUsageLimitXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsageLimitRequest();
    $request->getUsageLimitRequest = new GetUsageLimitRequest();
    $request->getUsageLimitRequest->usageLimitId = 'officia';
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'a';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'illum';
    $request->xAmzTarget = GetUsageLimitXAmzTargetEnum::REDSHIFT_SERVERLESS_GET_USAGE_LIMIT;

    $response = $sdk->sdk->getUsageLimit($request);

    if ($response->getUsageLimitResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWorkgroup

Returns information about a specific workgroup.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkgroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetWorkgroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkgroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorkgroupRequest();
    $request->getWorkgroupRequest = new GetWorkgroupRequest();
    $request->getWorkgroupRequest->workgroupName = 'maiores';
    $request->xAmzAlgorithm = 'rerum';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'cumque';
    $request->xAmzSecurityToken = 'facere';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'aliquid';
    $request->xAmzTarget = GetWorkgroupXAmzTargetEnum::REDSHIFT_SERVERLESS_GET_WORKGROUP;

    $response = $sdk->sdk->getWorkgroup($request);

    if ($response->getWorkgroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEndpointAccess

Returns an array of <code>EndpointAccess</code> objects and relevant information.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListEndpointAccessRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListEndpointAccessRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListEndpointAccessXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListEndpointAccessRequest();
    $request->listEndpointAccessRequest = new ListEndpointAccessRequest();
    $request->listEndpointAccessRequest->maxResults = 675439;
    $request->listEndpointAccessRequest->nextToken = 'accusamus';
    $request->listEndpointAccessRequest->vpcId = 'non';
    $request->listEndpointAccessRequest->workgroupName = 'occaecati';
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'id';
    $request->xAmzTarget = ListEndpointAccessXAmzTargetEnum::REDSHIFT_SERVERLESS_LIST_ENDPOINT_ACCESS;
    $request->maxResults = 'blanditiis';
    $request->nextToken = 'deleniti';

    $response = $sdk->sdk->listEndpointAccess($request);

    if ($response->listEndpointAccessResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listNamespaces

Returns information about a list of specified namespaces.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListNamespacesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListNamespacesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListNamespacesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListNamespacesRequest();
    $request->listNamespacesRequest = new ListNamespacesRequest();
    $request->listNamespacesRequest->maxResults = 956084;
    $request->listNamespacesRequest->nextToken = 'amet';
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'nisi';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = ListNamespacesXAmzTargetEnum::REDSHIFT_SERVERLESS_LIST_NAMESPACES;
    $request->maxResults = 'nihil';
    $request->nextToken = 'magnam';

    $response = $sdk->sdk->listNamespaces($request);

    if ($response->listNamespacesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRecoveryPoints

Returns an array of recovery points.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListRecoveryPointsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListRecoveryPointsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListRecoveryPointsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRecoveryPointsRequest();
    $request->listRecoveryPointsRequest = new ListRecoveryPointsRequest();
    $request->listRecoveryPointsRequest->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-06T01:45:34.248Z');
    $request->listRecoveryPointsRequest->maxResults = 287991;
    $request->listRecoveryPointsRequest->namespaceArn = 'labore';
    $request->listRecoveryPointsRequest->namespaceName = 'suscipit';
    $request->listRecoveryPointsRequest->nextToken = 'natus';
    $request->listRecoveryPointsRequest->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-21T23:58:20.071Z');
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'et';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'ullam';
    $request->xAmzTarget = ListRecoveryPointsXAmzTargetEnum::REDSHIFT_SERVERLESS_LIST_RECOVERY_POINTS;
    $request->maxResults = 'provident';
    $request->nextToken = 'quos';

    $response = $sdk->sdk->listRecoveryPoints($request);

    if ($response->listRecoveryPointsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSnapshots

Returns a list of snapshots.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSnapshotsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListSnapshotsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSnapshotsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSnapshotsRequest();
    $request->listSnapshotsRequest = new ListSnapshotsRequest();
    $request->listSnapshotsRequest->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-07T10:53:17.121Z');
    $request->listSnapshotsRequest->maxResults = 653201;
    $request->listSnapshotsRequest->namespaceArn = 'reiciendis';
    $request->listSnapshotsRequest->namespaceName = 'mollitia';
    $request->listSnapshotsRequest->nextToken = 'ad';
    $request->listSnapshotsRequest->ownerAccount = 'eum';
    $request->listSnapshotsRequest->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-07T18:15:06.372Z');
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'nemo';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'eius';
    $request->xAmzTarget = ListSnapshotsXAmzTargetEnum::REDSHIFT_SERVERLESS_LIST_SNAPSHOTS;
    $request->maxResults = 'maxime';
    $request->nextToken = 'deleniti';

    $response = $sdk->sdk->listSnapshots($request);

    if ($response->listSnapshotsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTableRestoreStatus

Returns information about an array of <code>TableRestoreStatus</code> objects.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTableRestoreStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTableRestoreStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTableRestoreStatusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTableRestoreStatusRequest();
    $request->listTableRestoreStatusRequest = new ListTableRestoreStatusRequest();
    $request->listTableRestoreStatusRequest->maxResults = 703889;
    $request->listTableRestoreStatusRequest->namespaceName = 'in';
    $request->listTableRestoreStatusRequest->nextToken = 'architecto';
    $request->listTableRestoreStatusRequest->workgroupName = 'architecto';
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'ullam';
    $request->xAmzCredential = 'expedita';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'repellat';
    $request->xAmzSignature = 'quibusdam';
    $request->xAmzSignedHeaders = 'sed';
    $request->xAmzTarget = ListTableRestoreStatusXAmzTargetEnum::REDSHIFT_SERVERLESS_LIST_TABLE_RESTORE_STATUS;
    $request->maxResults = 'saepe';
    $request->nextToken = 'pariatur';

    $response = $sdk->sdk->listTableRestoreStatus($request);

    if ($response->listTableRestoreStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Lists the tags assigned to a resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest->resourceArn = 'accusantium';
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'praesentium';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'magni';
    $request->xAmzSecurityToken = 'sunt';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'illum';
    $request->xAmzTarget = ListTagsForResourceXAmzTargetEnum::REDSHIFT_SERVERLESS_LIST_TAGS_FOR_RESOURCE;

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listUsageLimits

Lists all usage limits within Amazon Redshift Serverless.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListUsageLimitsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListUsageLimitsRequest;
use \OpenAPI\OpenAPI\Models\Shared\UsageLimitUsageTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListUsageLimitsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListUsageLimitsRequest();
    $request->listUsageLimitsRequest = new ListUsageLimitsRequest();
    $request->listUsageLimitsRequest->maxResults = 864934;
    $request->listUsageLimitsRequest->nextToken = 'maxime';
    $request->listUsageLimitsRequest->resourceArn = 'ea';
    $request->listUsageLimitsRequest->usageType = UsageLimitUsageTypeEnum::CROSS_REGION_DATASHARING;
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->xAmzTarget = ListUsageLimitsXAmzTargetEnum::REDSHIFT_SERVERLESS_LIST_USAGE_LIMITS;
    $request->maxResults = 'voluptate';
    $request->nextToken = 'autem';

    $response = $sdk->sdk->listUsageLimits($request);

    if ($response->listUsageLimitsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listWorkgroups

Returns information about a list of specified workgroups.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListWorkgroupsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListWorkgroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListWorkgroupsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListWorkgroupsRequest();
    $request->listWorkgroupsRequest = new ListWorkgroupsRequest();
    $request->listWorkgroupsRequest->maxResults = 722056;
    $request->listWorkgroupsRequest->nextToken = 'eaque';
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'nemo';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'fugiat';
    $request->xAmzSignature = 'amet';
    $request->xAmzSignedHeaders = 'aut';
    $request->xAmzTarget = ListWorkgroupsXAmzTargetEnum::REDSHIFT_SERVERLESS_LIST_WORKGROUPS;
    $request->maxResults = 'cumque';
    $request->nextToken = 'corporis';

    $response = $sdk->sdk->listWorkgroups($request);

    if ($response->listWorkgroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putResourcePolicy

Creates or updates a resource policy. Currently, you can use policies to share snapshots across Amazon Web Services accounts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutResourcePolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutResourcePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutResourcePolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutResourcePolicyRequest();
    $request->putResourcePolicyRequest = new PutResourcePolicyRequest();
    $request->putResourcePolicyRequest->policy = 'hic';
    $request->putResourcePolicyRequest->resourceArn = 'libero';
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'dignissimos';
    $request->xAmzSignature = 'eaque';
    $request->xAmzSignedHeaders = 'quis';
    $request->xAmzTarget = PutResourcePolicyXAmzTargetEnum::REDSHIFT_SERVERLESS_PUT_RESOURCE_POLICY;

    $response = $sdk->sdk->putResourcePolicy($request);

    if ($response->putResourcePolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## restoreFromRecoveryPoint

Restore the data from a recovery point.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RestoreFromRecoveryPointRequest;
use \OpenAPI\OpenAPI\Models\Shared\RestoreFromRecoveryPointRequest;
use \OpenAPI\OpenAPI\Models\Operations\RestoreFromRecoveryPointXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RestoreFromRecoveryPointRequest();
    $request->restoreFromRecoveryPointRequest = new RestoreFromRecoveryPointRequest();
    $request->restoreFromRecoveryPointRequest->namespaceName = 'nesciunt';
    $request->restoreFromRecoveryPointRequest->recoveryPointId = 'eos';
    $request->restoreFromRecoveryPointRequest->workgroupName = 'perferendis';
    $request->xAmzAlgorithm = 'dolores';
    $request->xAmzContentSha256 = 'minus';
    $request->xAmzCredential = 'quam';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'nostrum';
    $request->xAmzSignedHeaders = 'hic';
    $request->xAmzTarget = RestoreFromRecoveryPointXAmzTargetEnum::REDSHIFT_SERVERLESS_RESTORE_FROM_RECOVERY_POINT;

    $response = $sdk->sdk->restoreFromRecoveryPoint($request);

    if ($response->restoreFromRecoveryPointResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## restoreFromSnapshot

Restores a namespace from a snapshot.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RestoreFromSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\RestoreFromSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\RestoreFromSnapshotXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RestoreFromSnapshotRequest();
    $request->restoreFromSnapshotRequest = new RestoreFromSnapshotRequest();
    $request->restoreFromSnapshotRequest->namespaceName = 'recusandae';
    $request->restoreFromSnapshotRequest->ownerAccount = 'omnis';
    $request->restoreFromSnapshotRequest->snapshotArn = 'facilis';
    $request->restoreFromSnapshotRequest->snapshotName = 'perspiciatis';
    $request->restoreFromSnapshotRequest->workgroupName = 'voluptatem';
    $request->xAmzAlgorithm = 'porro';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'blanditiis';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'eaque';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'rerum';
    $request->xAmzTarget = RestoreFromSnapshotXAmzTargetEnum::REDSHIFT_SERVERLESS_RESTORE_FROM_SNAPSHOT;

    $response = $sdk->sdk->restoreFromSnapshot($request);

    if ($response->restoreFromSnapshotResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## restoreTableFromSnapshot

Restores a table from a snapshot to your Amazon Redshift Serverless instance. You can't use this operation to restore tables with <a href="https://docs.aws.amazon.com/redshift/latest/dg/t_Sorting_data.html#t_Sorting_data-interleaved">interleaved sort keys</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RestoreTableFromSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\RestoreTableFromSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\RestoreTableFromSnapshotXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RestoreTableFromSnapshotRequest();
    $request->restoreTableFromSnapshotRequest = new RestoreTableFromSnapshotRequest();
    $request->restoreTableFromSnapshotRequest->activateCaseSensitiveIdentifier = false;
    $request->restoreTableFromSnapshotRequest->namespaceName = 'adipisci';
    $request->restoreTableFromSnapshotRequest->newTableName = 'asperiores';
    $request->restoreTableFromSnapshotRequest->snapshotName = 'earum';
    $request->restoreTableFromSnapshotRequest->sourceDatabaseName = 'modi';
    $request->restoreTableFromSnapshotRequest->sourceSchemaName = 'iste';
    $request->restoreTableFromSnapshotRequest->sourceTableName = 'dolorum';
    $request->restoreTableFromSnapshotRequest->targetDatabaseName = 'deleniti';
    $request->restoreTableFromSnapshotRequest->targetSchemaName = 'pariatur';
    $request->restoreTableFromSnapshotRequest->workgroupName = 'provident';
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'libero';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'quaerat';
    $request->xAmzSecurityToken = 'quos';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'dolorem';
    $request->xAmzTarget = RestoreTableFromSnapshotXAmzTargetEnum::REDSHIFT_SERVERLESS_RESTORE_TABLE_FROM_SNAPSHOT;

    $response = $sdk->sdk->restoreTableFromSnapshot($request);

    if ($response->restoreTableFromSnapshotResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Assigns one or more tags to a resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->tagResourceRequest = new TagResourceRequest();
    $request->tagResourceRequest->resourceArn = 'dolorem';
    $request->tagResourceRequest->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'cum';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'dignissimos';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::REDSHIFT_SERVERLESS_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes a tag or set of tags from a resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->untagResourceRequest = new UntagResourceRequest();
    $request->untagResourceRequest->resourceArn = 'reiciendis';
    $request->untagResourceRequest->tagKeys = [
        'dolorum',
    ];
    $request->xAmzAlgorithm = 'numquam';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'odio';
    $request->xAmzSignedHeaders = 'quaerat';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::REDSHIFT_SERVERLESS_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateEndpointAccess

Updates an Amazon Redshift Serverless managed endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEndpointAccessRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateEndpointAccessRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEndpointAccessXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateEndpointAccessRequest();
    $request->updateEndpointAccessRequest = new UpdateEndpointAccessRequest();
    $request->updateEndpointAccessRequest->endpointName = 'accusamus';
    $request->updateEndpointAccessRequest->vpcSecurityGroupIds = [
        'voluptatibus',
        'voluptas',
        'natus',
    ];
    $request->xAmzAlgorithm = 'eos';
    $request->xAmzContentSha256 = 'atque';
    $request->xAmzCredential = 'sit';
    $request->xAmzDate = 'fugiat';
    $request->xAmzSecurityToken = 'ab';
    $request->xAmzSignature = 'soluta';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->xAmzTarget = UpdateEndpointAccessXAmzTargetEnum::REDSHIFT_SERVERLESS_UPDATE_ENDPOINT_ACCESS;

    $response = $sdk->sdk->updateEndpointAccess($request);

    if ($response->updateEndpointAccessResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNamespace

Updates a namespace with the specified settings. Unless required, you can't update multiple parameters in one request. For example, you must specify both <code>adminUsername</code> and <code>adminUserPassword</code> to update either field, but you can't update both <code>kmsKeyId</code> and <code>logExports</code> in a single request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNamespaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateNamespaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\LogExportEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNamespaceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNamespaceRequest();
    $request->updateNamespaceRequest = new UpdateNamespaceRequest();
    $request->updateNamespaceRequest->adminUserPassword = 'iusto';
    $request->updateNamespaceRequest->adminUsername = 'voluptate';
    $request->updateNamespaceRequest->defaultIamRoleArn = 'dolorum';
    $request->updateNamespaceRequest->iamRoles = [
        'omnis',
        'necessitatibus',
        'distinctio',
    ];
    $request->updateNamespaceRequest->kmsKeyId = 'asperiores';
    $request->updateNamespaceRequest->logExports = [
        LogExportEnum::USERACTIVITYLOG,
        LogExportEnum::USERLOG,
    ];
    $request->updateNamespaceRequest->namespaceName = 'id';
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'eius';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'amet';
    $request->xAmzSignature = 'optio';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->xAmzTarget = UpdateNamespaceXAmzTargetEnum::REDSHIFT_SERVERLESS_UPDATE_NAMESPACE;

    $response = $sdk->sdk->updateNamespace($request);

    if ($response->updateNamespaceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSnapshot

Updates a snapshot.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSnapshotXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSnapshotRequest();
    $request->updateSnapshotRequest = new UpdateSnapshotRequest();
    $request->updateSnapshotRequest->retentionPeriod = 320017;
    $request->updateSnapshotRequest->snapshotName = 'saepe';
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'repellendus';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'similique';
    $request->xAmzTarget = UpdateSnapshotXAmzTargetEnum::REDSHIFT_SERVERLESS_UPDATE_SNAPSHOT;

    $response = $sdk->sdk->updateSnapshot($request);

    if ($response->updateSnapshotResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateUsageLimit

Update a usage limit in Amazon Redshift Serverless. You can't update the usage type or period of a usage limit.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUsageLimitRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateUsageLimitRequest;
use \OpenAPI\OpenAPI\Models\Shared\UsageLimitBreachActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUsageLimitXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateUsageLimitRequest();
    $request->updateUsageLimitRequest = new UpdateUsageLimitRequest();
    $request->updateUsageLimitRequest->amount = 55;
    $request->updateUsageLimitRequest->breachAction = UsageLimitBreachActionEnum::DEACTIVATE;
    $request->updateUsageLimitRequest->usageLimitId = 'quaerat';
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'officiis';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'a';
    $request->xAmzTarget = UpdateUsageLimitXAmzTargetEnum::REDSHIFT_SERVERLESS_UPDATE_USAGE_LIMIT;

    $response = $sdk->sdk->updateUsageLimit($request);

    if ($response->updateUsageLimitResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateWorkgroup

Updates a workgroup with the specified configuration settings. You can't update multiple parameters in one request. For example, you can update <code>baseCapacity</code> or <code>port</code> in a single request, but you can't update both in the same request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkgroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateWorkgroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConfigParameter;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkgroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateWorkgroupRequest();
    $request->updateWorkgroupRequest = new UpdateWorkgroupRequest();
    $request->updateWorkgroupRequest->baseCapacity = 456130;
    $request->updateWorkgroupRequest->configParameters = [
        new ConfigParameter(),
        new ConfigParameter(),
        new ConfigParameter(),
    ];
    $request->updateWorkgroupRequest->enhancedVpcRouting = false;
    $request->updateWorkgroupRequest->port = 483409;
    $request->updateWorkgroupRequest->publiclyAccessible = false;
    $request->updateWorkgroupRequest->securityGroupIds = [
        'quisquam',
    ];
    $request->updateWorkgroupRequest->subnetIds = [
        'amet',
        'tempore',
        'accusamus',
        'numquam',
    ];
    $request->updateWorkgroupRequest->workgroupName = 'enim';
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'sit';
    $request->xAmzSignature = 'expedita';
    $request->xAmzSignedHeaders = 'neque';
    $request->xAmzTarget = UpdateWorkgroupXAmzTargetEnum::REDSHIFT_SERVERLESS_UPDATE_WORKGROUP;

    $response = $sdk->sdk->updateWorkgroup($request);

    if ($response->updateWorkgroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
