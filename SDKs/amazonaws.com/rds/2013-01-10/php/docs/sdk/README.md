# SDK

## Overview

Amazon Web Services documentation
<https://docs.aws.amazon.com/rds/>
### Available Operations

* [getAddSourceIdentifierToSubscription](#getaddsourceidentifiertosubscription)
* [getAuthorizeDBSecurityGroupIngress](#getauthorizedbsecuritygroupingress)
* [getCopyDBSnapshot](#getcopydbsnapshot)
* [getCreateDBInstance](#getcreatedbinstance)
* [getCreateDBInstanceReadReplica](#getcreatedbinstancereadreplica)
* [getCreateDBParameterGroup](#getcreatedbparametergroup)
* [getCreateDBSecurityGroup](#getcreatedbsecuritygroup)
* [getCreateDBSnapshot](#getcreatedbsnapshot)
* [getCreateDBSubnetGroup](#getcreatedbsubnetgroup)
* [getCreateEventSubscription](#getcreateeventsubscription)
* [getCreateOptionGroup](#getcreateoptiongroup)
* [getDeleteDBInstance](#getdeletedbinstance)
* [getDeleteDBParameterGroup](#getdeletedbparametergroup)
* [getDeleteDBSecurityGroup](#getdeletedbsecuritygroup)
* [getDeleteDBSnapshot](#getdeletedbsnapshot)
* [getDeleteDBSubnetGroup](#getdeletedbsubnetgroup)
* [getDeleteEventSubscription](#getdeleteeventsubscription)
* [getDeleteOptionGroup](#getdeleteoptiongroup)
* [getDescribeDBEngineVersions](#getdescribedbengineversions)
* [getDescribeDBInstances](#getdescribedbinstances)
* [getDescribeDBParameterGroups](#getdescribedbparametergroups)
* [getDescribeDBParameters](#getdescribedbparameters)
* [getDescribeDBSecurityGroups](#getdescribedbsecuritygroups)
* [getDescribeDBSnapshots](#getdescribedbsnapshots)
* [getDescribeDBSubnetGroups](#getdescribedbsubnetgroups)
* [getDescribeEngineDefaultParameters](#getdescribeenginedefaultparameters)
* [getDescribeEventCategories](#getdescribeeventcategories)
* [getDescribeEventSubscriptions](#getdescribeeventsubscriptions)
* [getDescribeEvents](#getdescribeevents)
* [getDescribeOptionGroupOptions](#getdescribeoptiongroupoptions)
* [getDescribeOptionGroups](#getdescribeoptiongroups)
* [getDescribeOrderableDBInstanceOptions](#getdescribeorderabledbinstanceoptions)
* [getDescribeReservedDBInstances](#getdescribereserveddbinstances)
* [getDescribeReservedDBInstancesOfferings](#getdescribereserveddbinstancesofferings)
* [getListTagsForResource](#getlisttagsforresource)
* [getModifyDBInstance](#getmodifydbinstance)
* [getModifyDBSubnetGroup](#getmodifydbsubnetgroup)
* [getModifyEventSubscription](#getmodifyeventsubscription)
* [getPromoteReadReplica](#getpromotereadreplica)
* [getPurchaseReservedDBInstancesOffering](#getpurchasereserveddbinstancesoffering)
* [getRebootDBInstance](#getrebootdbinstance)
* [getRemoveSourceIdentifierFromSubscription](#getremovesourceidentifierfromsubscription)
* [getRemoveTagsFromResource](#getremovetagsfromresource)
* [getRestoreDBInstanceFromDBSnapshot](#getrestoredbinstancefromdbsnapshot)
* [getRestoreDBInstanceToPointInTime](#getrestoredbinstancetopointintime)
* [getRevokeDBSecurityGroupIngress](#getrevokedbsecuritygroupingress)
* [postAddSourceIdentifierToSubscription](#postaddsourceidentifiertosubscription)
* [postAddTagsToResource](#postaddtagstoresource)
* [postAuthorizeDBSecurityGroupIngress](#postauthorizedbsecuritygroupingress)
* [postCopyDBSnapshot](#postcopydbsnapshot)
* [postCreateDBInstance](#postcreatedbinstance)
* [postCreateDBInstanceReadReplica](#postcreatedbinstancereadreplica)
* [postCreateDBParameterGroup](#postcreatedbparametergroup)
* [postCreateDBSecurityGroup](#postcreatedbsecuritygroup)
* [postCreateDBSnapshot](#postcreatedbsnapshot)
* [postCreateDBSubnetGroup](#postcreatedbsubnetgroup)
* [postCreateEventSubscription](#postcreateeventsubscription)
* [postCreateOptionGroup](#postcreateoptiongroup)
* [postDeleteDBInstance](#postdeletedbinstance)
* [postDeleteDBParameterGroup](#postdeletedbparametergroup)
* [postDeleteDBSecurityGroup](#postdeletedbsecuritygroup)
* [postDeleteDBSnapshot](#postdeletedbsnapshot)
* [postDeleteDBSubnetGroup](#postdeletedbsubnetgroup)
* [postDeleteEventSubscription](#postdeleteeventsubscription)
* [postDeleteOptionGroup](#postdeleteoptiongroup)
* [postDescribeDBEngineVersions](#postdescribedbengineversions)
* [postDescribeDBInstances](#postdescribedbinstances)
* [postDescribeDBParameterGroups](#postdescribedbparametergroups)
* [postDescribeDBParameters](#postdescribedbparameters)
* [postDescribeDBSecurityGroups](#postdescribedbsecuritygroups)
* [postDescribeDBSnapshots](#postdescribedbsnapshots)
* [postDescribeDBSubnetGroups](#postdescribedbsubnetgroups)
* [postDescribeEngineDefaultParameters](#postdescribeenginedefaultparameters)
* [postDescribeEventCategories](#postdescribeeventcategories)
* [postDescribeEventSubscriptions](#postdescribeeventsubscriptions)
* [postDescribeEvents](#postdescribeevents)
* [postDescribeOptionGroupOptions](#postdescribeoptiongroupoptions)
* [postDescribeOptionGroups](#postdescribeoptiongroups)
* [postDescribeOrderableDBInstanceOptions](#postdescribeorderabledbinstanceoptions)
* [postDescribeReservedDBInstances](#postdescribereserveddbinstances)
* [postDescribeReservedDBInstancesOfferings](#postdescribereserveddbinstancesofferings)
* [postListTagsForResource](#postlisttagsforresource)
* [postModifyDBInstance](#postmodifydbinstance)
* [postModifyDBParameterGroup](#postmodifydbparametergroup)
* [postModifyDBSubnetGroup](#postmodifydbsubnetgroup)
* [postModifyEventSubscription](#postmodifyeventsubscription)
* [postModifyOptionGroup](#postmodifyoptiongroup)
* [postPromoteReadReplica](#postpromotereadreplica)
* [postPurchaseReservedDBInstancesOffering](#postpurchasereserveddbinstancesoffering)
* [postRebootDBInstance](#postrebootdbinstance)
* [postRemoveSourceIdentifierFromSubscription](#postremovesourceidentifierfromsubscription)
* [postRemoveTagsFromResource](#postremovetagsfromresource)
* [postResetDBParameterGroup](#postresetdbparametergroup)
* [postRestoreDBInstanceFromDBSnapshot](#postrestoredbinstancefromdbsnapshot)
* [postRestoreDBInstanceToPointInTime](#postrestoredbinstancetopointintime)
* [postRevokeDBSecurityGroupIngress](#postrevokedbsecuritygroupingress)

## getAddSourceIdentifierToSubscription

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETAddSourceIdentifierToSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETAddSourceIdentifierToSubscriptionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETAddSourceIdentifierToSubscriptionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETAddSourceIdentifierToSubscriptionRequest();
    $request->action = GETAddSourceIdentifierToSubscriptionActionEnum::ADD_SOURCE_IDENTIFIER_TO_SUBSCRIPTION;
    $request->sourceIdentifier = 'error';
    $request->subscriptionName = 'deserunt';
    $request->version = GETAddSourceIdentifierToSubscriptionVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'tempora';

    $response = $sdk->sdk->getAddSourceIdentifierToSubscription($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAuthorizeDBSecurityGroupIngress

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETAuthorizeDBSecurityGroupIngressRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETAuthorizeDBSecurityGroupIngressActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETAuthorizeDBSecurityGroupIngressVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETAuthorizeDBSecurityGroupIngressRequest();
    $request->action = GETAuthorizeDBSecurityGroupIngressActionEnum::AUTHORIZE_DB_SECURITY_GROUP_INGRESS;
    $request->cidrip = 'suscipit';
    $request->dbSecurityGroupName = 'molestiae';
    $request->ec2SecurityGroupId = 'minus';
    $request->ec2SecurityGroupName = 'placeat';
    $request->ec2SecurityGroupOwnerId = 'voluptatum';
    $request->version = GETAuthorizeDBSecurityGroupIngressVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'iusto';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'nisi';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'temporibus';
    $request->xAmzSignature = 'ab';
    $request->xAmzSignedHeaders = 'quis';

    $response = $sdk->sdk->getAuthorizeDBSecurityGroupIngress($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCopyDBSnapshot

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETCopyDBSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETCopyDBSnapshotActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETCopyDBSnapshotVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETCopyDBSnapshotRequest();
    $request->action = GETCopyDBSnapshotActionEnum::COPY_DB_SNAPSHOT;
    $request->sourceDBSnapshotIdentifier = 'veritatis';
    $request->targetDBSnapshotIdentifier = 'deserunt';
    $request->version = GETCopyDBSnapshotVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'repellendus';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'at';

    $response = $sdk->sdk->getCopyDBSnapshot($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCreateDBInstance

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateDBInstanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateDBInstanceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateDBInstanceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETCreateDBInstanceRequest();
    $request->action = GETCreateDBInstanceActionEnum::CREATE_DB_INSTANCE;
    $request->allocatedStorage = 870088;
    $request->autoMinorVersionUpgrade = false;
    $request->availabilityZone = 'maiores';
    $request->backupRetentionPeriod = 473608;
    $request->characterSetName = 'quod';
    $request->dbInstanceClass = 'quod';
    $request->dbInstanceIdentifier = 'esse';
    $request->dbName = 'totam';
    $request->dbParameterGroupName = 'porro';
    $request->dbSecurityGroups = [
        'dicta',
        'nam',
        'officia',
    ];
    $request->dbSubnetGroupName = 'occaecati';
    $request->engine = 'fugit';
    $request->engineVersion = 'deleniti';
    $request->iops = 944669;
    $request->licenseModel = 'optio';
    $request->masterUserPassword = 'totam';
    $request->masterUsername = 'beatae';
    $request->multiAZ = false;
    $request->optionGroupName = 'commodi';
    $request->port = 473600;
    $request->preferredBackupWindow = 'modi';
    $request->preferredMaintenanceWindow = 'qui';
    $request->publiclyAccessible = false;
    $request->version = GETCreateDBInstanceVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->vpcSecurityGroupIds = [
        'cum',
        'esse',
        'ipsum',
        'excepturi',
    ];
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'ad';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'sed';
    $request->xAmzSignature = 'iste';
    $request->xAmzSignedHeaders = 'dolor';

    $response = $sdk->sdk->getCreateDBInstance($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCreateDBInstanceReadReplica

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateDBInstanceReadReplicaRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateDBInstanceReadReplicaActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateDBInstanceReadReplicaVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETCreateDBInstanceReadReplicaRequest();
    $request->action = GETCreateDBInstanceReadReplicaActionEnum::CREATE_DB_INSTANCE_READ_REPLICA;
    $request->autoMinorVersionUpgrade = false;
    $request->availabilityZone = 'natus';
    $request->dbInstanceClass = 'laboriosam';
    $request->dbInstanceIdentifier = 'hic';
    $request->iops = 902599;
    $request->optionGroupName = 'fuga';
    $request->port = 449950;
    $request->publiclyAccessible = false;
    $request->sourceDBInstanceIdentifier = 'corporis';
    $request->version = GETCreateDBInstanceReadReplicaVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'iste';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'reiciendis';

    $response = $sdk->sdk->getCreateDBInstanceReadReplica($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCreateDBParameterGroup

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateDBParameterGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateDBParameterGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateDBParameterGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETCreateDBParameterGroupRequest();
    $request->action = GETCreateDBParameterGroupActionEnum::CREATE_DB_PARAMETER_GROUP;
    $request->dbParameterGroupFamily = 'est';
    $request->dbParameterGroupName = 'mollitia';
    $request->description = 'laborum';
    $request->version = GETCreateDBParameterGroupVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'dolores';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'omnis';

    $response = $sdk->sdk->getCreateDBParameterGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCreateDBSecurityGroup

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateDBSecurityGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateDBSecurityGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateDBSecurityGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETCreateDBSecurityGroupRequest();
    $request->action = GETCreateDBSecurityGroupActionEnum::CREATE_DB_SECURITY_GROUP;
    $request->dbSecurityGroupDescription = 'nemo';
    $request->dbSecurityGroupName = 'minima';
    $request->version = GETCreateDBSecurityGroupVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'culpa';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'architecto';

    $response = $sdk->sdk->getCreateDBSecurityGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCreateDBSnapshot

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateDBSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateDBSnapshotActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateDBSnapshotVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETCreateDBSnapshotRequest();
    $request->action = GETCreateDBSnapshotActionEnum::CREATE_DB_SNAPSHOT;
    $request->dbInstanceIdentifier = 'mollitia';
    $request->dbSnapshotIdentifier = 'dolorem';
    $request->version = GETCreateDBSnapshotVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'repellat';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'numquam';
    $request->xAmzSignedHeaders = 'commodi';

    $response = $sdk->sdk->getCreateDBSnapshot($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCreateDBSubnetGroup

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateDBSubnetGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateDBSubnetGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateDBSubnetGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETCreateDBSubnetGroupRequest();
    $request->action = GETCreateDBSubnetGroupActionEnum::CREATE_DB_SUBNET_GROUP;
    $request->dbSubnetGroupDescription = 'quam';
    $request->dbSubnetGroupName = 'molestiae';
    $request->subnetIds = [
        'error',
    ];
    $request->version = GETCreateDBSubnetGroupVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'quia';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'vitae';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'animi';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'odit';

    $response = $sdk->sdk->getCreateDBSubnetGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCreateEventSubscription

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateEventSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateEventSubscriptionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateEventSubscriptionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETCreateEventSubscriptionRequest();
    $request->action = GETCreateEventSubscriptionActionEnum::CREATE_EVENT_SUBSCRIPTION;
    $request->enabled = false;
    $request->eventCategories = [
        'sequi',
        'tenetur',
        'ipsam',
        'id',
    ];
    $request->snsTopicArn = 'possimus';
    $request->sourceIds = [
        'quasi',
    ];
    $request->sourceType = 'error';
    $request->subscriptionName = 'temporibus';
    $request->version = GETCreateEventSubscriptionVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'praesentium';

    $response = $sdk->sdk->getCreateEventSubscription($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCreateOptionGroup

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateOptionGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateOptionGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateOptionGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETCreateOptionGroupRequest();
    $request->action = GETCreateOptionGroupActionEnum::CREATE_OPTION_GROUP;
    $request->engineName = 'voluptatibus';
    $request->majorEngineVersion = 'ipsa';
    $request->optionGroupDescription = 'omnis';
    $request->optionGroupName = 'voluptate';
    $request->version = GETCreateOptionGroupVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'doloremque';
    $request->xAmzDate = 'reprehenderit';
    $request->xAmzSecurityToken = 'ut';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'dicta';

    $response = $sdk->sdk->getCreateOptionGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteDBInstance

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteDBInstanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteDBInstanceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteDBInstanceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteDBInstanceRequest();
    $request->action = GETDeleteDBInstanceActionEnum::DELETE_DB_INSTANCE;
    $request->dbInstanceIdentifier = 'corporis';
    $request->finalDBSnapshotIdentifier = 'dolore';
    $request->skipFinalSnapshot = false;
    $request->version = GETDeleteDBInstanceVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'iusto';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'harum';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'repudiandae';

    $response = $sdk->sdk->getDeleteDBInstance($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteDBParameterGroup

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteDBParameterGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteDBParameterGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteDBParameterGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteDBParameterGroupRequest();
    $request->action = GETDeleteDBParameterGroupActionEnum::DELETE_DB_PARAMETER_GROUP;
    $request->dbParameterGroupName = 'quae';
    $request->version = GETDeleteDBParameterGroupVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'molestias';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'praesentium';

    $response = $sdk->sdk->getDeleteDBParameterGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteDBSecurityGroup

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteDBSecurityGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteDBSecurityGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteDBSecurityGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteDBSecurityGroupRequest();
    $request->action = GETDeleteDBSecurityGroupActionEnum::DELETE_DB_SECURITY_GROUP;
    $request->dbSecurityGroupName = 'rem';
    $request->version = GETDeleteDBSecurityGroupVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'voluptates';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'repudiandae';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'itaque';
    $request->xAmzSignedHeaders = 'incidunt';

    $response = $sdk->sdk->getDeleteDBSecurityGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteDBSnapshot

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteDBSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteDBSnapshotActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteDBSnapshotVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteDBSnapshotRequest();
    $request->action = GETDeleteDBSnapshotActionEnum::DELETE_DB_SNAPSHOT;
    $request->dbSnapshotIdentifier = 'enim';
    $request->version = GETDeleteDBSnapshotVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'consequatur';
    $request->xAmzContentSha256 = 'est';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'quibusdam';

    $response = $sdk->sdk->getDeleteDBSnapshot($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteDBSubnetGroup

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteDBSubnetGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteDBSubnetGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteDBSubnetGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteDBSubnetGroupRequest();
    $request->action = GETDeleteDBSubnetGroupActionEnum::DELETE_DB_SUBNET_GROUP;
    $request->dbSubnetGroupName = 'labore';
    $request->version = GETDeleteDBSubnetGroupVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'cupiditate';
    $request->xAmzSecurityToken = 'quos';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'magni';

    $response = $sdk->sdk->getDeleteDBSubnetGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteEventSubscription

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteEventSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteEventSubscriptionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteEventSubscriptionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteEventSubscriptionRequest();
    $request->action = GETDeleteEventSubscriptionActionEnum::DELETE_EVENT_SUBSCRIPTION;
    $request->subscriptionName = 'assumenda';
    $request->version = GETDeleteEventSubscriptionVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'alias';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'tempora';
    $request->xAmzSignedHeaders = 'facilis';

    $response = $sdk->sdk->getDeleteEventSubscription($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteOptionGroup

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteOptionGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteOptionGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteOptionGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteOptionGroupRequest();
    $request->action = GETDeleteOptionGroupActionEnum::DELETE_OPTION_GROUP;
    $request->optionGroupName = 'tempore';
    $request->version = GETDeleteOptionGroupVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'eum';
    $request->xAmzDate = 'non';
    $request->xAmzSecurityToken = 'eligendi';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'aliquid';

    $response = $sdk->sdk->getDeleteOptionGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeDBEngineVersions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeDBEngineVersionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeDBEngineVersionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeDBEngineVersionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeDBEngineVersionsRequest();
    $request->action = GETDescribeDBEngineVersionsActionEnum::DESCRIBE_DB_ENGINE_VERSIONS;
    $request->dbParameterGroupFamily = 'provident';
    $request->defaultOnly = false;
    $request->engine = 'necessitatibus';
    $request->engineVersion = 'sint';
    $request->listSupportedCharacterSets = false;
    $request->marker = 'officia';
    $request->maxRecords = 223081;
    $request->version = GETDescribeDBEngineVersionsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'debitis';
    $request->xAmzContentSha256 = 'a';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'maiores';

    $response = $sdk->sdk->getDescribeDBEngineVersions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeDBInstances

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeDBInstancesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeDBInstancesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeDBInstancesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeDBInstancesRequest();
    $request->action = GETDescribeDBInstancesActionEnum::DESCRIBE_DB_INSTANCES;
    $request->dbInstanceIdentifier = 'rerum';
    $request->marker = 'dicta';
    $request->maxRecords = 297437;
    $request->version = GETDescribeDBInstancesVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'cumque';
    $request->xAmzContentSha256 = 'facere';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'non';

    $response = $sdk->sdk->getDescribeDBInstances($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeDBParameterGroups

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeDBParameterGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeDBParameterGroupsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeDBParameterGroupsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeDBParameterGroupsRequest();
    $request->action = GETDescribeDBParameterGroupsActionEnum::DESCRIBE_DB_PARAMETER_GROUPS;
    $request->dbParameterGroupName = 'occaecati';
    $request->marker = 'enim';
    $request->maxRecords = 881736;
    $request->version = GETDescribeDBParameterGroupsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'nam';
    $request->xAmzSecurityToken = 'id';
    $request->xAmzSignature = 'blanditiis';
    $request->xAmzSignedHeaders = 'deleniti';

    $response = $sdk->sdk->getDescribeDBParameterGroups($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeDBParameters

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeDBParametersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeDBParametersActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeDBParametersVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeDBParametersRequest();
    $request->action = GETDescribeDBParametersActionEnum::DESCRIBE_DB_PARAMETERS;
    $request->dbParameterGroupName = 'sapiente';
    $request->marker = 'amet';
    $request->maxRecords = 643990;
    $request->source = 'nisi';
    $request->version = GETDescribeDBParametersVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'magnam';

    $response = $sdk->sdk->getDescribeDBParameters($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeDBSecurityGroups

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeDBSecurityGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeDBSecurityGroupsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeDBSecurityGroupsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeDBSecurityGroupsRequest();
    $request->action = GETDescribeDBSecurityGroupsActionEnum::DESCRIBE_DB_SECURITY_GROUPS;
    $request->dbSecurityGroupName = 'distinctio';
    $request->marker = 'id';
    $request->maxRecords = 287991;
    $request->version = GETDescribeDBSecurityGroupsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'aspernatur';

    $response = $sdk->sdk->getDescribeDBSecurityGroups($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeDBSnapshots

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeDBSnapshotsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeDBSnapshotsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeDBSnapshotsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeDBSnapshotsRequest();
    $request->action = GETDescribeDBSnapshotsActionEnum::DESCRIBE_DB_SNAPSHOTS;
    $request->dbInstanceIdentifier = 'architecto';
    $request->dbSnapshotIdentifier = 'magnam';
    $request->marker = 'et';
    $request->maxRecords = 569965;
    $request->snapshotType = 'ullam';
    $request->version = GETDescribeDBSnapshotsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'mollitia';

    $response = $sdk->sdk->getDescribeDBSnapshots($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeDBSubnetGroups

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeDBSubnetGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeDBSubnetGroupsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeDBSubnetGroupsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeDBSubnetGroupsRequest();
    $request->action = GETDescribeDBSubnetGroupsActionEnum::DESCRIBE_DB_SUBNET_GROUPS;
    $request->dbSubnetGroupName = 'ad';
    $request->marker = 'eum';
    $request->maxRecords = 221262;
    $request->version = GETDescribeDBSubnetGroupsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'necessitatibus';
    $request->xAmzContentSha256 = 'odit';
    $request->xAmzCredential = 'nemo';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'doloribus';
    $request->xAmzSignedHeaders = 'debitis';

    $response = $sdk->sdk->getDescribeDBSubnetGroups($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeEngineDefaultParameters

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeEngineDefaultParametersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeEngineDefaultParametersActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeEngineDefaultParametersVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeEngineDefaultParametersRequest();
    $request->action = GETDescribeEngineDefaultParametersActionEnum::DESCRIBE_ENGINE_DEFAULT_PARAMETERS;
    $request->dbParameterGroupFamily = 'eius';
    $request->marker = 'maxime';
    $request->maxRecords = 537023;
    $request->version = GETDescribeEngineDefaultParametersVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'repudiandae';
    $request->xAmzSignature = 'ullam';
    $request->xAmzSignedHeaders = 'expedita';

    $response = $sdk->sdk->getDescribeEngineDefaultParameters($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeEventCategories

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeEventCategoriesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeEventCategoriesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeEventCategoriesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeEventCategoriesRequest();
    $request->action = GETDescribeEventCategoriesActionEnum::DESCRIBE_EVENT_CATEGORIES;
    $request->sourceType = 'nihil';
    $request->version = GETDescribeEventCategoriesVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'repellat';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'sed';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'accusantium';
    $request->xAmzSignedHeaders = 'consequuntur';

    $response = $sdk->sdk->getDescribeEventCategories($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeEventSubscriptions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeEventSubscriptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeEventSubscriptionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeEventSubscriptionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeEventSubscriptionsRequest();
    $request->action = GETDescribeEventSubscriptionsActionEnum::DESCRIBE_EVENT_SUBSCRIPTIONS;
    $request->marker = 'praesentium';
    $request->maxRecords = 615560;
    $request->subscriptionName = 'magni';
    $request->version = GETDescribeEventSubscriptionsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'sunt';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'maxime';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'excepturi';

    $response = $sdk->sdk->getDescribeEventSubscriptions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeEvents

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeEventsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeEventsSourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeEventsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeEventsRequest();
    $request->action = GETDescribeEventsActionEnum::DESCRIBE_EVENTS;
    $request->duration = 139972;
    $request->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-19T20:58:17.857Z');
    $request->eventCategories = [
        'maiores',
    ];
    $request->marker = 'quidem';
    $request->maxRecords = 373291;
    $request->sourceIdentifier = 'voluptate';
    $request->sourceType = GETDescribeEventsSourceTypeEnum::DB_PARAMETER_GROUP;
    $request->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-25T01:41:45.601Z');
    $request->version = GETDescribeEventsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'nemo';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'fugiat';
    $request->xAmzSignature = 'amet';
    $request->xAmzSignedHeaders = 'aut';

    $response = $sdk->sdk->getDescribeEvents($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeOptionGroupOptions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeOptionGroupOptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeOptionGroupOptionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeOptionGroupOptionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeOptionGroupOptionsRequest();
    $request->action = GETDescribeOptionGroupOptionsActionEnum::DESCRIBE_OPTION_GROUP_OPTIONS;
    $request->engineName = 'cumque';
    $request->majorEngineVersion = 'corporis';
    $request->marker = 'hic';
    $request->maxRecords = 729991;
    $request->version = GETDescribeOptionGroupOptionsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'dignissimos';
    $request->xAmzSignature = 'eaque';
    $request->xAmzSignedHeaders = 'quis';

    $response = $sdk->sdk->getDescribeOptionGroupOptions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeOptionGroups

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeOptionGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeOptionGroupsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeOptionGroupsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeOptionGroupsRequest();
    $request->action = GETDescribeOptionGroupsActionEnum::DESCRIBE_OPTION_GROUPS;
    $request->engineName = 'nesciunt';
    $request->majorEngineVersion = 'eos';
    $request->marker = 'perferendis';
    $request->maxRecords = 170986;
    $request->optionGroupName = 'minus';
    $request->version = GETDescribeOptionGroupsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'quam';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'nostrum';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'recusandae';
    $request->xAmzSignedHeaders = 'omnis';

    $response = $sdk->sdk->getDescribeOptionGroups($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeOrderableDBInstanceOptions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeOrderableDBInstanceOptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeOrderableDBInstanceOptionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeOrderableDBInstanceOptionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeOrderableDBInstanceOptionsRequest();
    $request->action = GETDescribeOrderableDBInstanceOptionsActionEnum::DESCRIBE_ORDERABLE_DB_INSTANCE_OPTIONS;
    $request->dbInstanceClass = 'facilis';
    $request->engine = 'perspiciatis';
    $request->engineVersion = 'voluptatem';
    $request->licenseModel = 'porro';
    $request->marker = 'consequuntur';
    $request->maxRecords = 500026;
    $request->version = GETDescribeOrderableDBInstanceOptionsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->vpc = false;
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'eaque';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'rerum';
    $request->xAmzSecurityToken = 'adipisci';
    $request->xAmzSignature = 'asperiores';
    $request->xAmzSignedHeaders = 'earum';

    $response = $sdk->sdk->getDescribeOrderableDBInstanceOptions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeReservedDBInstances

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeReservedDBInstancesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeReservedDBInstancesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeReservedDBInstancesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeReservedDBInstancesRequest();
    $request->action = GETDescribeReservedDBInstancesActionEnum::DESCRIBE_RESERVED_DB_INSTANCES;
    $request->dbInstanceClass = 'modi';
    $request->duration = 'iste';
    $request->marker = 'dolorum';
    $request->maxRecords = 535633;
    $request->multiAZ = false;
    $request->offeringType = 'pariatur';
    $request->productDescription = 'provident';
    $request->reservedDBInstanceId = 'nobis';
    $request->reservedDBInstancesOfferingId = 'libero';
    $request->version = GETDescribeReservedDBInstancesVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'quaerat';
    $request->xAmzCredential = 'quos';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'dolor';

    $response = $sdk->sdk->getDescribeReservedDBInstances($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeReservedDBInstancesOfferings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeReservedDBInstancesOfferingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeReservedDBInstancesOfferingsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeReservedDBInstancesOfferingsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeReservedDBInstancesOfferingsRequest();
    $request->action = GETDescribeReservedDBInstancesOfferingsActionEnum::DESCRIBE_RESERVED_DB_INSTANCES_OFFERINGS;
    $request->dbInstanceClass = 'qui';
    $request->duration = 'ipsum';
    $request->marker = 'hic';
    $request->maxRecords = 569574;
    $request->multiAZ = false;
    $request->offeringType = 'cum';
    $request->productDescription = 'voluptate';
    $request->reservedDBInstancesOfferingId = 'dignissimos';
    $request->version = GETDescribeReservedDBInstancesOfferingsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'numquam';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'ipsa';

    $response = $sdk->sdk->getDescribeReservedDBInstancesOfferings($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListTagsForResource

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListTagsForResourceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListTagsForResourceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListTagsForResourceRequest();
    $request->action = GETListTagsForResourceActionEnum::LIST_TAGS_FOR_RESOURCE;
    $request->resourceName = 'iure';
    $request->version = GETListTagsForResourceVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'odio';
    $request->xAmzContentSha256 = 'quaerat';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'voluptas';
    $request->xAmzSignedHeaders = 'natus';

    $response = $sdk->sdk->getListTagsForResource($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModifyDBInstance

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyDBInstanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyDBInstanceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyDBInstanceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETModifyDBInstanceRequest();
    $request->action = GETModifyDBInstanceActionEnum::MODIFY_DB_INSTANCE;
    $request->allocatedStorage = 179603;
    $request->allowMajorVersionUpgrade = false;
    $request->applyImmediately = false;
    $request->autoMinorVersionUpgrade = false;
    $request->backupRetentionPeriod = 542499;
    $request->dbInstanceClass = 'sit';
    $request->dbInstanceIdentifier = 'fugiat';
    $request->dbParameterGroupName = 'ab';
    $request->dbSecurityGroups = [
        'dolorum',
        'iusto',
        'voluptate',
    ];
    $request->engineVersion = 'dolorum';
    $request->iops = 536579;
    $request->masterUserPassword = 'omnis';
    $request->multiAZ = false;
    $request->newDBInstanceIdentifier = 'necessitatibus';
    $request->optionGroupName = 'distinctio';
    $request->preferredBackupWindow = 'asperiores';
    $request->preferredMaintenanceWindow = 'nihil';
    $request->version = GETModifyDBInstanceVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->vpcSecurityGroupIds = [
        'voluptate',
    ];
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'eius';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'amet';
    $request->xAmzSignedHeaders = 'optio';

    $response = $sdk->sdk->getModifyDBInstance($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModifyDBSubnetGroup

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyDBSubnetGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyDBSubnetGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyDBSubnetGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETModifyDBSubnetGroupRequest();
    $request->action = GETModifyDBSubnetGroupActionEnum::MODIFY_DB_SUBNET_GROUP;
    $request->dbSubnetGroupDescription = 'accusamus';
    $request->dbSubnetGroupName = 'ad';
    $request->subnetIds = [
        'suscipit',
        'deserunt',
        'provident',
        'minima',
    ];
    $request->version = GETModifyDBSubnetGroupVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'repellendus';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'similique';
    $request->xAmzDate = 'alias';
    $request->xAmzSecurityToken = 'at';
    $request->xAmzSignature = 'quaerat';
    $request->xAmzSignedHeaders = 'tempora';

    $response = $sdk->sdk->getModifyDBSubnetGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModifyEventSubscription

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyEventSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyEventSubscriptionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyEventSubscriptionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETModifyEventSubscriptionRequest();
    $request->action = GETModifyEventSubscriptionActionEnum::MODIFY_EVENT_SUBSCRIPTION;
    $request->enabled = false;
    $request->eventCategories = [
        'quod',
        'officiis',
    ];
    $request->snsTopicArn = 'qui';
    $request->sourceType = 'dolorum';
    $request->subscriptionName = 'a';
    $request->version = GETModifyEventSubscriptionVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'harum';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'quisquam';
    $request->xAmzSignature = 'tenetur';
    $request->xAmzSignedHeaders = 'amet';

    $response = $sdk->sdk->getModifyEventSubscription($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPromoteReadReplica

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETPromoteReadReplicaRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETPromoteReadReplicaActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETPromoteReadReplicaVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETPromoteReadReplicaRequest();
    $request->action = GETPromoteReadReplicaActionEnum::PROMOTE_READ_REPLICA;
    $request->backupRetentionPeriod = 730856;
    $request->dbInstanceIdentifier = 'accusamus';
    $request->preferredBackupWindow = 'numquam';
    $request->version = GETPromoteReadReplicaVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'sit';
    $request->xAmzSignedHeaders = 'expedita';

    $response = $sdk->sdk->getPromoteReadReplica($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPurchaseReservedDBInstancesOffering

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETPurchaseReservedDBInstancesOfferingRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETPurchaseReservedDBInstancesOfferingActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETPurchaseReservedDBInstancesOfferingVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETPurchaseReservedDBInstancesOfferingRequest();
    $request->action = GETPurchaseReservedDBInstancesOfferingActionEnum::PURCHASE_RESERVED_DB_INSTANCES_OFFERING;
    $request->dbInstanceCount = 207470;
    $request->reservedDBInstanceId = 'sed';
    $request->reservedDBInstancesOfferingId = 'vel';
    $request->version = GETPurchaseReservedDBInstancesOfferingVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'libero';
    $request->xAmzContentSha256 = 'voluptas';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'quam';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'incidunt';
    $request->xAmzSignedHeaders = 'qui';

    $response = $sdk->sdk->getPurchaseReservedDBInstancesOffering($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRebootDBInstance

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETRebootDBInstanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETRebootDBInstanceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETRebootDBInstanceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETRebootDBInstanceRequest();
    $request->action = GETRebootDBInstanceActionEnum::REBOOT_DB_INSTANCE;
    $request->dbInstanceIdentifier = 'cupiditate';
    $request->forceFailover = false;
    $request->version = GETRebootDBInstanceVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'maxime';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'soluta';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'incidunt';

    $response = $sdk->sdk->getRebootDBInstance($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRemoveSourceIdentifierFromSubscription

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETRemoveSourceIdentifierFromSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETRemoveSourceIdentifierFromSubscriptionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETRemoveSourceIdentifierFromSubscriptionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETRemoveSourceIdentifierFromSubscriptionRequest();
    $request->action = GETRemoveSourceIdentifierFromSubscriptionActionEnum::REMOVE_SOURCE_IDENTIFIER_FROM_SUBSCRIPTION;
    $request->sourceIdentifier = 'aspernatur';
    $request->subscriptionName = 'dolores';
    $request->version = GETRemoveSourceIdentifierFromSubscriptionVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'quam';
    $request->xAmzSecurityToken = 'molestias';
    $request->xAmzSignature = 'temporibus';
    $request->xAmzSignedHeaders = 'qui';

    $response = $sdk->sdk->getRemoveSourceIdentifierFromSubscription($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRemoveTagsFromResource

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETRemoveTagsFromResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETRemoveTagsFromResourceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETRemoveTagsFromResourceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETRemoveTagsFromResourceRequest();
    $request->action = GETRemoveTagsFromResourceActionEnum::REMOVE_TAGS_FROM_RESOURCE;
    $request->resourceName = 'neque';
    $request->tagKeys = [
        'magni',
    ];
    $request->version = GETRemoveTagsFromResourceVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'odio';
    $request->xAmzContentSha256 = 'sunt';
    $request->xAmzCredential = 'ullam';
    $request->xAmzDate = 'nam';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'voluptatem';
    $request->xAmzSignedHeaders = 'cumque';

    $response = $sdk->sdk->getRemoveTagsFromResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRestoreDBInstanceFromDBSnapshot

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETRestoreDBInstanceFromDBSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETRestoreDBInstanceFromDBSnapshotActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETRestoreDBInstanceFromDBSnapshotVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETRestoreDBInstanceFromDBSnapshotRequest();
    $request->action = GETRestoreDBInstanceFromDBSnapshotActionEnum::RESTORE_DB_INSTANCE_FROM_DB_SNAPSHOT;
    $request->autoMinorVersionUpgrade = false;
    $request->availabilityZone = 'soluta';
    $request->dbInstanceClass = 'nobis';
    $request->dbInstanceIdentifier = 'et';
    $request->dbName = 'saepe';
    $request->dbSnapshotIdentifier = 'ipsum';
    $request->dbSubnetGroupName = 'veritatis';
    $request->engine = 'nobis';
    $request->iops = 552193;
    $request->licenseModel = 'tempore';
    $request->multiAZ = false;
    $request->optionGroupName = 'cupiditate';
    $request->port = 45614;
    $request->publiclyAccessible = false;
    $request->version = GETRestoreDBInstanceFromDBSnapshotVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'dolore';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'adipisci';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'architecto';

    $response = $sdk->sdk->getRestoreDBInstanceFromDBSnapshot($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRestoreDBInstanceToPointInTime

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETRestoreDBInstanceToPointInTimeRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETRestoreDBInstanceToPointInTimeActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETRestoreDBInstanceToPointInTimeVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETRestoreDBInstanceToPointInTimeRequest();
    $request->action = GETRestoreDBInstanceToPointInTimeActionEnum::RESTORE_DB_INSTANCE_TO_POINT_IN_TIME;
    $request->autoMinorVersionUpgrade = false;
    $request->availabilityZone = 'quae';
    $request->dbInstanceClass = 'aut';
    $request->dbName = 'quas';
    $request->dbSubnetGroupName = 'itaque';
    $request->engine = 'consequatur';
    $request->iops = 669917;
    $request->licenseModel = 'repellendus';
    $request->multiAZ = false;
    $request->optionGroupName = 'porro';
    $request->port = 984330;
    $request->publiclyAccessible = false;
    $request->restoreTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-19T05:23:08.152Z');
    $request->sourceDBInstanceIdentifier = 'cupiditate';
    $request->targetDBInstanceIdentifier = 'qui';
    $request->useLatestRestorableTime = false;
    $request->version = GETRestoreDBInstanceToPointInTimeVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'quae';
    $request->xAmzContentSha256 = 'laudantium';
    $request->xAmzCredential = 'odio';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'quisquam';
    $request->xAmzSignedHeaders = 'vero';

    $response = $sdk->sdk->getRestoreDBInstanceToPointInTime($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRevokeDBSecurityGroupIngress

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETRevokeDBSecurityGroupIngressRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETRevokeDBSecurityGroupIngressActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETRevokeDBSecurityGroupIngressVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETRevokeDBSecurityGroupIngressRequest();
    $request->action = GETRevokeDBSecurityGroupIngressActionEnum::REVOKE_DB_SECURITY_GROUP_INGRESS;
    $request->cidrip = 'omnis';
    $request->dbSecurityGroupName = 'quis';
    $request->ec2SecurityGroupId = 'ipsum';
    $request->ec2SecurityGroupName = 'delectus';
    $request->ec2SecurityGroupOwnerId = 'voluptate';
    $request->version = GETRevokeDBSecurityGroupIngressVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'consectetur';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'tenetur';
    $request->xAmzDate = 'dignissimos';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'quod';

    $response = $sdk->sdk->getRevokeDBSecurityGroupIngress($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAddSourceIdentifierToSubscription

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTAddSourceIdentifierToSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTAddSourceIdentifierToSubscriptionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTAddSourceIdentifierToSubscriptionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTAddSourceIdentifierToSubscriptionRequest();
    $request->action = POSTAddSourceIdentifierToSubscriptionActionEnum::ADD_SOURCE_IDENTIFIER_TO_SUBSCRIPTION;
    $request->requestBody = 'odio';
    $request->version = POSTAddSourceIdentifierToSubscriptionVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'similique';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'ducimus';
    $request->xAmzSecurityToken = 'dolore';
    $request->xAmzSignature = 'quibusdam';
    $request->xAmzSignedHeaders = 'illum';

    $response = $sdk->sdk->postAddSourceIdentifierToSubscription($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAddTagsToResource

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTAddTagsToResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTAddTagsToResourceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTAddTagsToResourceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTAddTagsToResourceRequest();
    $request->action = POSTAddTagsToResourceActionEnum::ADD_TAGS_TO_RESOURCE;
    $request->requestBody = 'sequi';
    $request->version = POSTAddTagsToResourceVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'impedit';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'exercitationem';
    $request->xAmzSignature = 'nulla';
    $request->xAmzSignedHeaders = 'fugit';

    $response = $sdk->sdk->postAddTagsToResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAuthorizeDBSecurityGroupIngress

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTAuthorizeDBSecurityGroupIngressRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTAuthorizeDBSecurityGroupIngressActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTAuthorizeDBSecurityGroupIngressVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTAuthorizeDBSecurityGroupIngressRequest();
    $request->action = POSTAuthorizeDBSecurityGroupIngressActionEnum::AUTHORIZE_DB_SECURITY_GROUP_INGRESS;
    $request->requestBody = 'porro';
    $request->version = POSTAuthorizeDBSecurityGroupIngressVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'doloribus';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'eligendi';
    $request->xAmzSecurityToken = 'ducimus';
    $request->xAmzSignature = 'alias';
    $request->xAmzSignedHeaders = 'officia';

    $response = $sdk->sdk->postAuthorizeDBSecurityGroupIngress($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCopyDBSnapshot

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCopyDBSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCopyDBSnapshotActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCopyDBSnapshotVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCopyDBSnapshotRequest();
    $request->action = POSTCopyDBSnapshotActionEnum::COPY_DB_SNAPSHOT;
    $request->requestBody = 'tempora';
    $request->version = POSTCopyDBSnapshotVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'possimus';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'ratione';

    $response = $sdk->sdk->postCopyDBSnapshot($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateDBInstance

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateDBInstanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateDBInstanceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateDBInstanceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateDBInstanceRequest();
    $request->action = POSTCreateDBInstanceActionEnum::CREATE_DB_INSTANCE;
    $request->requestBody = 'ex';
    $request->version = POSTCreateDBInstanceVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'laudantium';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'ex';
    $request->xAmzSignedHeaders = 'nulla';

    $response = $sdk->sdk->postCreateDBInstance($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateDBInstanceReadReplica

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateDBInstanceReadReplicaRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateDBInstanceReadReplicaActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateDBInstanceReadReplicaVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateDBInstanceReadReplicaRequest();
    $request->action = POSTCreateDBInstanceReadReplicaActionEnum::CREATE_DB_INSTANCE_READ_REPLICA;
    $request->requestBody = 'excepturi';
    $request->version = POSTCreateDBInstanceReadReplicaVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'nostrum';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'quisquam';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'impedit';

    $response = $sdk->sdk->postCreateDBInstanceReadReplica($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateDBParameterGroup

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateDBParameterGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateDBParameterGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateDBParameterGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateDBParameterGroupRequest();
    $request->action = POSTCreateDBParameterGroupActionEnum::CREATE_DB_PARAMETER_GROUP;
    $request->requestBody = 'corporis';
    $request->version = POSTCreateDBParameterGroupVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'veniam';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'inventore';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'ea';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'consectetur';

    $response = $sdk->sdk->postCreateDBParameterGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateDBSecurityGroup

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateDBSecurityGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateDBSecurityGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateDBSecurityGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateDBSecurityGroupRequest();
    $request->action = POSTCreateDBSecurityGroupActionEnum::CREATE_DB_SECURITY_GROUP;
    $request->requestBody = 'recusandae';
    $request->version = POSTCreateDBSecurityGroupVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'minima';
    $request->xAmzCredential = 'eaque';
    $request->xAmzDate = 'a';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'aut';

    $response = $sdk->sdk->postCreateDBSecurityGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateDBSnapshot

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateDBSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateDBSnapshotActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateDBSnapshotVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateDBSnapshotRequest();
    $request->action = POSTCreateDBSnapshotActionEnum::CREATE_DB_SNAPSHOT;
    $request->requestBody = 'deleniti';
    $request->version = POSTCreateDBSnapshotVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'impedit';
    $request->xAmzContentSha256 = 'aliquam';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'inventore';
    $request->xAmzSignature = 'non';
    $request->xAmzSignedHeaders = 'et';

    $response = $sdk->sdk->postCreateDBSnapshot($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateDBSubnetGroup

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateDBSubnetGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateDBSubnetGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateDBSubnetGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateDBSubnetGroupRequest();
    $request->action = POSTCreateDBSubnetGroupActionEnum::CREATE_DB_SUBNET_GROUP;
    $request->requestBody = 'dolorum';
    $request->version = POSTCreateDBSubnetGroupVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'placeat';
    $request->xAmzCredential = 'velit';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'autem';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'quas';

    $response = $sdk->sdk->postCreateDBSubnetGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateEventSubscription

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateEventSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateEventSubscriptionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateEventSubscriptionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateEventSubscriptionRequest();
    $request->action = POSTCreateEventSubscriptionActionEnum::CREATE_EVENT_SUBSCRIPTION;
    $request->requestBody = 'assumenda';
    $request->version = POSTCreateEventSubscriptionVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'nulla';
    $request->xAmzContentSha256 = 'voluptas';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'numquam';
    $request->xAmzSignedHeaders = 'explicabo';

    $response = $sdk->sdk->postCreateEventSubscription($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateOptionGroup

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateOptionGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateOptionGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateOptionGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateOptionGroupRequest();
    $request->action = POSTCreateOptionGroupActionEnum::CREATE_OPTION_GROUP;
    $request->requestBody = 'provident';
    $request->version = POSTCreateOptionGroupVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'odio';
    $request->xAmzSecurityToken = 'eius';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'esse';

    $response = $sdk->sdk->postCreateOptionGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteDBInstance

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteDBInstanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteDBInstanceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteDBInstanceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteDBInstanceRequest();
    $request->action = POSTDeleteDBInstanceActionEnum::DELETE_DB_INSTANCE;
    $request->requestBody = 'rem';
    $request->version = POSTDeleteDBInstanceVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'fuga';
    $request->xAmzContentSha256 = 'reprehenderit';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'fugiat';
    $request->xAmzSecurityToken = 'ut';
    $request->xAmzSignature = 'eum';
    $request->xAmzSignedHeaders = 'suscipit';

    $response = $sdk->sdk->postDeleteDBInstance($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteDBParameterGroup

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteDBParameterGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteDBParameterGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteDBParameterGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteDBParameterGroupRequest();
    $request->action = POSTDeleteDBParameterGroupActionEnum::DELETE_DB_PARAMETER_GROUP;
    $request->requestBody = 'assumenda';
    $request->version = POSTDeleteDBParameterGroupVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'eos';
    $request->xAmzContentSha256 = 'praesentium';
    $request->xAmzCredential = 'quisquam';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'quidem';

    $response = $sdk->sdk->postDeleteDBParameterGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteDBSecurityGroup

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteDBSecurityGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteDBSecurityGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteDBSecurityGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteDBSecurityGroupRequest();
    $request->action = POSTDeleteDBSecurityGroupActionEnum::DELETE_DB_SECURITY_GROUP;
    $request->requestBody = 'neque';
    $request->version = POSTDeleteDBSecurityGroupVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'fuga';
    $request->xAmzSecurityToken = 'eius';
    $request->xAmzSignature = 'eos';
    $request->xAmzSignedHeaders = 'voluptas';

    $response = $sdk->sdk->postDeleteDBSecurityGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteDBSnapshot

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteDBSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteDBSnapshotActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteDBSnapshotVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteDBSnapshotRequest();
    $request->action = POSTDeleteDBSnapshotActionEnum::DELETE_DB_SNAPSHOT;
    $request->requestBody = 'ab';
    $request->version = POSTDeleteDBSnapshotVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'cupiditate';
    $request->xAmzContentSha256 = 'consequatur';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'sequi';

    $response = $sdk->sdk->postDeleteDBSnapshot($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteDBSubnetGroup

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteDBSubnetGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteDBSubnetGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteDBSubnetGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteDBSubnetGroupRequest();
    $request->action = POSTDeleteDBSubnetGroupActionEnum::DELETE_DB_SUBNET_GROUP;
    $request->requestBody = 'quo';
    $request->version = POSTDeleteDBSubnetGroupVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'recusandae';
    $request->xAmzCredential = 'aperiam';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'quod';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'inventore';

    $response = $sdk->sdk->postDeleteDBSubnetGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteEventSubscription

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteEventSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteEventSubscriptionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteEventSubscriptionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteEventSubscriptionRequest();
    $request->action = POSTDeleteEventSubscriptionActionEnum::DELETE_EVENT_SUBSCRIPTION;
    $request->requestBody = 'nihil';
    $request->version = POSTDeleteEventSubscriptionVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'aliquam';
    $request->xAmzDate = 'odio';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'sapiente';

    $response = $sdk->sdk->postDeleteEventSubscription($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteOptionGroup

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteOptionGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteOptionGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteOptionGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteOptionGroupRequest();
    $request->action = POSTDeleteOptionGroupActionEnum::DELETE_OPTION_GROUP;
    $request->requestBody = 'dolores';
    $request->version = POSTDeleteOptionGroupVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'porro';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'quas';
    $request->xAmzSignedHeaders = 'praesentium';

    $response = $sdk->sdk->postDeleteOptionGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeDBEngineVersions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBEngineVersionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBEngineVersionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBEngineVersionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeDBEngineVersionsRequest();
    $request->action = POSTDescribeDBEngineVersionsActionEnum::DESCRIBE_DB_ENGINE_VERSIONS;
    $request->marker = 'consequuntur';
    $request->maxRecords = 'deleniti';
    $request->requestBody = 'fugit';
    $request->version = POSTDescribeDBEngineVersionsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'fuga';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'incidunt';
    $request->xAmzDate = 'atque';
    $request->xAmzSecurityToken = 'explicabo';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'nisi';

    $response = $sdk->sdk->postDescribeDBEngineVersions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeDBInstances

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBInstancesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBInstancesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBInstancesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeDBInstancesRequest();
    $request->action = POSTDescribeDBInstancesActionEnum::DESCRIBE_DB_INSTANCES;
    $request->marker = 'fugit';
    $request->maxRecords = 'sapiente';
    $request->requestBody = 'consequuntur';
    $request->version = POSTDescribeDBInstancesVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'ratione';
    $request->xAmzContentSha256 = 'explicabo';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'atque';
    $request->xAmzSignature = 'et';
    $request->xAmzSignedHeaders = 'esse';

    $response = $sdk->sdk->postDescribeDBInstances($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeDBParameterGroups

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBParameterGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBParameterGroupsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBParameterGroupsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeDBParameterGroupsRequest();
    $request->action = POSTDescribeDBParameterGroupsActionEnum::DESCRIBE_DB_PARAMETER_GROUPS;
    $request->marker = 'eveniet';
    $request->maxRecords = 'accusamus';
    $request->requestBody = 'veritatis';
    $request->version = POSTDescribeDBParameterGroupsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'saepe';

    $response = $sdk->sdk->postDescribeDBParameterGroups($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeDBParameters

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBParametersRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBParametersActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBParametersVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeDBParametersRequest();
    $request->action = POSTDescribeDBParametersActionEnum::DESCRIBE_DB_PARAMETERS;
    $request->marker = 'vel';
    $request->maxRecords = 'harum';
    $request->requestBody = 'molestiae';
    $request->version = POSTDescribeDBParametersVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'rerum';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'minima';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'eligendi';
    $request->xAmzSignature = 'sit';
    $request->xAmzSignedHeaders = 'culpa';

    $response = $sdk->sdk->postDescribeDBParameters($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeDBSecurityGroups

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBSecurityGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBSecurityGroupsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBSecurityGroupsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeDBSecurityGroupsRequest();
    $request->action = POSTDescribeDBSecurityGroupsActionEnum::DESCRIBE_DB_SECURITY_GROUPS;
    $request->marker = 'tempore';
    $request->maxRecords = 'adipisci';
    $request->requestBody = 'cumque';
    $request->version = POSTDescribeDBSecurityGroupsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'consequatur';
    $request->xAmzCredential = 'minus';
    $request->xAmzDate = 'quaerat';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'consectetur';
    $request->xAmzSignedHeaders = 'esse';

    $response = $sdk->sdk->postDescribeDBSecurityGroups($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeDBSnapshots

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBSnapshotsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBSnapshotsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBSnapshotsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeDBSnapshotsRequest();
    $request->action = POSTDescribeDBSnapshotsActionEnum::DESCRIBE_DB_SNAPSHOTS;
    $request->marker = 'blanditiis';
    $request->maxRecords = 'provident';
    $request->requestBody = 'a';
    $request->version = POSTDescribeDBSnapshotsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'nulla';
    $request->xAmzContentSha256 = 'quas';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'a';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'sint';

    $response = $sdk->sdk->postDescribeDBSnapshots($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeDBSubnetGroups

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBSubnetGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBSubnetGroupsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBSubnetGroupsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeDBSubnetGroupsRequest();
    $request->action = POSTDescribeDBSubnetGroupsActionEnum::DESCRIBE_DB_SUBNET_GROUPS;
    $request->marker = 'pariatur';
    $request->maxRecords = 'possimus';
    $request->requestBody = 'quia';
    $request->version = POSTDescribeDBSubnetGroupsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'eveniet';
    $request->xAmzContentSha256 = 'asperiores';
    $request->xAmzCredential = 'facere';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'similique';

    $response = $sdk->sdk->postDescribeDBSubnetGroups($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeEngineDefaultParameters

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeEngineDefaultParametersRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeEngineDefaultParametersActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeEngineDefaultParametersVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeEngineDefaultParametersRequest();
    $request->action = POSTDescribeEngineDefaultParametersActionEnum::DESCRIBE_ENGINE_DEFAULT_PARAMETERS;
    $request->marker = 'culpa';
    $request->maxRecords = 'aliquid';
    $request->requestBody = 'tenetur';
    $request->version = POSTDescribeEngineDefaultParametersVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'quae';
    $request->xAmzContentSha256 = 'earum';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'eius';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'illum';

    $response = $sdk->sdk->postDescribeEngineDefaultParameters($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeEventCategories

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeEventCategoriesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeEventCategoriesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeEventCategoriesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeEventCategoriesRequest();
    $request->action = POSTDescribeEventCategoriesActionEnum::DESCRIBE_EVENT_CATEGORIES;
    $request->requestBody = 'soluta';
    $request->version = POSTDescribeEventCategoriesVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'aliquam';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'ullam';
    $request->xAmzSignature = 'reprehenderit';
    $request->xAmzSignedHeaders = 'ullam';

    $response = $sdk->sdk->postDescribeEventCategories($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeEventSubscriptions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeEventSubscriptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeEventSubscriptionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeEventSubscriptionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeEventSubscriptionsRequest();
    $request->action = POSTDescribeEventSubscriptionsActionEnum::DESCRIBE_EVENT_SUBSCRIPTIONS;
    $request->marker = 'nisi';
    $request->maxRecords = 'aut';
    $request->requestBody = 'voluptatum';
    $request->version = POSTDescribeEventSubscriptionsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'ex';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'itaque';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'architecto';

    $response = $sdk->sdk->postDescribeEventSubscriptions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeEvents

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeEventsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeEventsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeEventsRequest();
    $request->action = POSTDescribeEventsActionEnum::DESCRIBE_EVENTS;
    $request->marker = 'omnis';
    $request->maxRecords = 'tenetur';
    $request->requestBody = 'quasi';
    $request->version = POSTDescribeEventsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'at';
    $request->xAmzContentSha256 = 'et';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'consectetur';

    $response = $sdk->sdk->postDescribeEvents($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeOptionGroupOptions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeOptionGroupOptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeOptionGroupOptionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeOptionGroupOptionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeOptionGroupOptionsRequest();
    $request->action = POSTDescribeOptionGroupOptionsActionEnum::DESCRIBE_OPTION_GROUP_OPTIONS;
    $request->marker = 'adipisci';
    $request->maxRecords = 'iste';
    $request->requestBody = 'temporibus';
    $request->version = POSTDescribeOptionGroupOptionsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'rem';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'laudantium';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'ab';

    $response = $sdk->sdk->postDescribeOptionGroupOptions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeOptionGroups

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeOptionGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeOptionGroupsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeOptionGroupsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeOptionGroupsRequest();
    $request->action = POSTDescribeOptionGroupsActionEnum::DESCRIBE_OPTION_GROUPS;
    $request->marker = 'corrupti';
    $request->maxRecords = 'non';
    $request->requestBody = 'voluptatem';
    $request->version = POSTDescribeOptionGroupsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'impedit';
    $request->xAmzSecurityToken = 'explicabo';
    $request->xAmzSignature = 'voluptas';
    $request->xAmzSignedHeaders = 'aut';

    $response = $sdk->sdk->postDescribeOptionGroups($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeOrderableDBInstanceOptions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeOrderableDBInstanceOptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeOrderableDBInstanceOptionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeOrderableDBInstanceOptionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeOrderableDBInstanceOptionsRequest();
    $request->action = POSTDescribeOrderableDBInstanceOptionsActionEnum::DESCRIBE_ORDERABLE_DB_INSTANCE_OPTIONS;
    $request->marker = 'dignissimos';
    $request->maxRecords = 'dicta';
    $request->requestBody = 'maiores';
    $request->version = POSTDescribeOrderableDBInstanceOptionsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'velit';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'asperiores';
    $request->xAmzSignature = 'aperiam';
    $request->xAmzSignedHeaders = 'ea';

    $response = $sdk->sdk->postDescribeOrderableDBInstanceOptions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeReservedDBInstances

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeReservedDBInstancesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeReservedDBInstancesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeReservedDBInstancesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeReservedDBInstancesRequest();
    $request->action = POSTDescribeReservedDBInstancesActionEnum::DESCRIBE_RESERVED_DB_INSTANCES;
    $request->marker = 'quaerat';
    $request->maxRecords = 'consequuntur';
    $request->requestBody = 'repellendus';
    $request->version = POSTDescribeReservedDBInstancesVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'maxime';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'asperiores';
    $request->xAmzSignature = 'nemo';
    $request->xAmzSignedHeaders = 'quae';

    $response = $sdk->sdk->postDescribeReservedDBInstances($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeReservedDBInstancesOfferings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeReservedDBInstancesOfferingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeReservedDBInstancesOfferingsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeReservedDBInstancesOfferingsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeReservedDBInstancesOfferingsRequest();
    $request->action = POSTDescribeReservedDBInstancesOfferingsActionEnum::DESCRIBE_RESERVED_DB_INSTANCES_OFFERINGS;
    $request->marker = 'quaerat';
    $request->maxRecords = 'porro';
    $request->requestBody = 'quod';
    $request->version = POSTDescribeReservedDBInstancesOfferingsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'ab';
    $request->xAmzCredential = 'adipisci';
    $request->xAmzDate = 'fuga';
    $request->xAmzSecurityToken = 'id';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'velit';

    $response = $sdk->sdk->postDescribeReservedDBInstancesOfferings($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListTagsForResource

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListTagsForResourceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListTagsForResourceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListTagsForResourceRequest();
    $request->action = POSTListTagsForResourceActionEnum::LIST_TAGS_FOR_RESOURCE;
    $request->requestBody = 'culpa';
    $request->version = POSTListTagsForResourceVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'est';
    $request->xAmzContentSha256 = 'recusandae';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'fugiat';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'ducimus';
    $request->xAmzSignedHeaders = 'quos';

    $response = $sdk->sdk->postListTagsForResource($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyDBInstance

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyDBInstanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyDBInstanceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyDBInstanceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTModifyDBInstanceRequest();
    $request->action = POSTModifyDBInstanceActionEnum::MODIFY_DB_INSTANCE;
    $request->requestBody = 'vel';
    $request->version = POSTModifyDBInstanceVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'possimus';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'corporis';

    $response = $sdk->sdk->postModifyDBInstance($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyDBParameterGroup

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyDBParameterGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyDBParameterGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyDBParameterGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTModifyDBParameterGroupRequest();
    $request->action = POSTModifyDBParameterGroupActionEnum::MODIFY_DB_PARAMETER_GROUP;
    $request->requestBody = 'reiciendis';
    $request->version = POSTModifyDBParameterGroupVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'assumenda';
    $request->xAmzContentSha256 = 'nemo';
    $request->xAmzCredential = 'recusandae';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'aperiam';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'consectetur';

    $response = $sdk->sdk->postModifyDBParameterGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyDBSubnetGroup

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyDBSubnetGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyDBSubnetGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyDBSubnetGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTModifyDBSubnetGroupRequest();
    $request->action = POSTModifyDBSubnetGroupActionEnum::MODIFY_DB_SUBNET_GROUP;
    $request->requestBody = 'in';
    $request->version = POSTModifyDBSubnetGroupVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'exercitationem';
    $request->xAmzContentSha256 = 'earum';
    $request->xAmzCredential = 'facere';
    $request->xAmzDate = 'numquam';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'reiciendis';

    $response = $sdk->sdk->postModifyDBSubnetGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyEventSubscription

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyEventSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyEventSubscriptionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyEventSubscriptionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTModifyEventSubscriptionRequest();
    $request->action = POSTModifyEventSubscriptionActionEnum::MODIFY_EVENT_SUBSCRIPTION;
    $request->requestBody = 'quidem';
    $request->version = POSTModifyEventSubscriptionVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'necessitatibus';
    $request->xAmzCredential = 'dolore';
    $request->xAmzDate = 'sunt';
    $request->xAmzSecurityToken = 'asperiores';
    $request->xAmzSignature = 'adipisci';
    $request->xAmzSignedHeaders = 'non';

    $response = $sdk->sdk->postModifyEventSubscription($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyOptionGroup

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyOptionGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyOptionGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyOptionGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTModifyOptionGroupRequest();
    $request->action = POSTModifyOptionGroupActionEnum::MODIFY_OPTION_GROUP;
    $request->requestBody = 'amet';
    $request->version = POSTModifyOptionGroupVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'beatae';
    $request->xAmzContentSha256 = 'dignissimos';
    $request->xAmzCredential = 'a';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'consectetur';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'harum';

    $response = $sdk->sdk->postModifyOptionGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPromoteReadReplica

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTPromoteReadReplicaRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTPromoteReadReplicaActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTPromoteReadReplicaVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTPromoteReadReplicaRequest();
    $request->action = POSTPromoteReadReplicaActionEnum::PROMOTE_READ_REPLICA;
    $request->requestBody = 'laboriosam';
    $request->version = POSTPromoteReadReplicaVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'voluptates';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'vitae';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'similique';
    $request->xAmzSignedHeaders = 'tempora';

    $response = $sdk->sdk->postPromoteReadReplica($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPurchaseReservedDBInstancesOffering

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTPurchaseReservedDBInstancesOfferingRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTPurchaseReservedDBInstancesOfferingActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTPurchaseReservedDBInstancesOfferingVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTPurchaseReservedDBInstancesOfferingRequest();
    $request->action = POSTPurchaseReservedDBInstancesOfferingActionEnum::PURCHASE_RESERVED_DB_INSTANCES_OFFERING;
    $request->requestBody = 'aspernatur';
    $request->version = POSTPurchaseReservedDBInstancesOfferingVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'voluptas';
    $request->xAmzContentSha256 = 'voluptas';
    $request->xAmzCredential = 'voluptas';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'adipisci';

    $response = $sdk->sdk->postPurchaseReservedDBInstancesOffering($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRebootDBInstance

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTRebootDBInstanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTRebootDBInstanceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTRebootDBInstanceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTRebootDBInstanceRequest();
    $request->action = POSTRebootDBInstanceActionEnum::REBOOT_DB_INSTANCE;
    $request->requestBody = 'minus';
    $request->version = POSTRebootDBInstanceVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'dolores';
    $request->xAmzContentSha256 = 'blanditiis';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'dolore';
    $request->xAmzSecurityToken = 'aliquam';
    $request->xAmzSignature = 'officiis';
    $request->xAmzSignedHeaders = 'temporibus';

    $response = $sdk->sdk->postRebootDBInstance($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRemoveSourceIdentifierFromSubscription

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTRemoveSourceIdentifierFromSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTRemoveSourceIdentifierFromSubscriptionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTRemoveSourceIdentifierFromSubscriptionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTRemoveSourceIdentifierFromSubscriptionRequest();
    $request->action = POSTRemoveSourceIdentifierFromSubscriptionActionEnum::REMOVE_SOURCE_IDENTIFIER_FROM_SUBSCRIPTION;
    $request->requestBody = 'ullam';
    $request->version = POSTRemoveSourceIdentifierFromSubscriptionVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'adipisci';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'blanditiis';
    $request->xAmzDate = 'quas';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'nesciunt';
    $request->xAmzSignedHeaders = 'culpa';

    $response = $sdk->sdk->postRemoveSourceIdentifierFromSubscription($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRemoveTagsFromResource

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTRemoveTagsFromResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTRemoveTagsFromResourceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTRemoveTagsFromResourceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTRemoveTagsFromResourceRequest();
    $request->action = POSTRemoveTagsFromResourceActionEnum::REMOVE_TAGS_FROM_RESOURCE;
    $request->requestBody = 'corrupti';
    $request->version = POSTRemoveTagsFromResourceVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'exercitationem';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'sit';
    $request->xAmzSignedHeaders = 'rerum';

    $response = $sdk->sdk->postRemoveTagsFromResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postResetDBParameterGroup

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTResetDBParameterGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTResetDBParameterGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTResetDBParameterGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTResetDBParameterGroupRequest();
    $request->action = POSTResetDBParameterGroupActionEnum::RESET_DB_PARAMETER_GROUP;
    $request->requestBody = 'sed';
    $request->version = POSTResetDBParameterGroupVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'explicabo';
    $request->xAmzCredential = 'asperiores';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'expedita';
    $request->xAmzSignedHeaders = 'ab';

    $response = $sdk->sdk->postResetDBParameterGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRestoreDBInstanceFromDBSnapshot

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTRestoreDBInstanceFromDBSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTRestoreDBInstanceFromDBSnapshotActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTRestoreDBInstanceFromDBSnapshotVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTRestoreDBInstanceFromDBSnapshotRequest();
    $request->action = POSTRestoreDBInstanceFromDBSnapshotActionEnum::RESTORE_DB_INSTANCE_FROM_DB_SNAPSHOT;
    $request->requestBody = 'iste';
    $request->version = POSTRestoreDBInstanceFromDBSnapshotVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'dolore';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'sed';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'explicabo';

    $response = $sdk->sdk->postRestoreDBInstanceFromDBSnapshot($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRestoreDBInstanceToPointInTime

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTRestoreDBInstanceToPointInTimeRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTRestoreDBInstanceToPointInTimeActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTRestoreDBInstanceToPointInTimeVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTRestoreDBInstanceToPointInTimeRequest();
    $request->action = POSTRestoreDBInstanceToPointInTimeActionEnum::RESTORE_DB_INSTANCE_TO_POINT_IN_TIME;
    $request->requestBody = 'voluptas';
    $request->version = POSTRestoreDBInstanceToPointInTimeVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'unde';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'debitis';
    $request->xAmzSignature = 'illo';
    $request->xAmzSignedHeaders = 'reiciendis';

    $response = $sdk->sdk->postRestoreDBInstanceToPointInTime($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRevokeDBSecurityGroupIngress

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTRevokeDBSecurityGroupIngressRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTRevokeDBSecurityGroupIngressActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTRevokeDBSecurityGroupIngressVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTRevokeDBSecurityGroupIngressRequest();
    $request->action = POSTRevokeDBSecurityGroupIngressActionEnum::REVOKE_DB_SECURITY_GROUP_INGRESS;
    $request->requestBody = 'perferendis';
    $request->version = POSTRevokeDBSecurityGroupIngressVersionEnum::TWO_THOUSAND_AND_THIRTEEN0110;
    $request->xAmzAlgorithm = 'corrupti';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'incidunt';
    $request->xAmzDate = 'sed';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'eius';
    $request->xAmzSignedHeaders = 'necessitatibus';

    $response = $sdk->sdk->postRevokeDBSecurityGroupIngress($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
