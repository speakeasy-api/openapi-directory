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
* [getDescribeDBLogFiles](#getdescribedblogfiles)
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
* [getDownloadDBLogFilePortion](#getdownloaddblogfileportion)
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
* [postDescribeDBLogFiles](#postdescribedblogfiles)
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
* [postDownloadDBLogFilePortion](#postdownloaddblogfileportion)
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
    $request->version = GETAddSourceIdentifierToSubscriptionVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
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
    $request->version = GETAuthorizeDBSecurityGroupIngressVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
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
    $request->version = GETCopyDBSnapshotVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
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
    $request->version = GETCreateDBInstanceVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
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
    $request->version = GETCreateDBInstanceReadReplicaVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
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
    $request->version = GETCreateDBParameterGroupVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
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
    $request->version = GETCreateDBSecurityGroupVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
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
    $request->version = GETCreateDBSnapshotVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
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
    $request->version = GETCreateDBSubnetGroupVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
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
    $request->version = GETCreateEventSubscriptionVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
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
    $request->version = GETCreateOptionGroupVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
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
    $request->version = GETDeleteDBInstanceVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
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
    $request->version = GETDeleteDBParameterGroupVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
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
    $request->version = GETDeleteDBSecurityGroupVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
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
    $request->version = GETDeleteDBSnapshotVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
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
    $request->version = GETDeleteDBSubnetGroupVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
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
    $request->version = GETDeleteEventSubscriptionVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
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
    $request->version = GETDeleteOptionGroupVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
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
    $request->version = GETDescribeDBEngineVersionsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
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
    $request->version = GETDescribeDBInstancesVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
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

## getDescribeDBLogFiles

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeDBLogFilesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeDBLogFilesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeDBLogFilesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeDBLogFilesRequest();
    $request->action = GETDescribeDBLogFilesActionEnum::DESCRIBE_DB_LOG_FILES;
    $request->dbInstanceIdentifier = 'occaecati';
    $request->fileLastWritten = 313218;
    $request->fileSize = 881736;
    $request->filenameContains = 'delectus';
    $request->marker = 'quidem';
    $request->maxRecords = 588465;
    $request->version = GETDescribeDBLogFilesVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'nam';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'blanditiis';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'amet';
    $request->xAmzSignedHeaders = 'deserunt';

    $response = $sdk->sdk->getDescribeDBLogFiles($request);

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
    $request->dbParameterGroupName = 'nisi';
    $request->marker = 'vel';
    $request->maxRecords = 618809;
    $request->version = GETDescribeDBParameterGroupsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'id';

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
    $request->dbParameterGroupName = 'labore';
    $request->marker = 'labore';
    $request->maxRecords = 383462;
    $request->source = 'natus';
    $request->version = GETDescribeDBParametersVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'et';

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
    $request->dbSecurityGroupName = 'excepturi';
    $request->marker = 'ullam';
    $request->maxRecords = 590873;
    $request->version = GETDescribeDBSecurityGroupsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'ad';

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
    $request->dbInstanceIdentifier = 'eum';
    $request->dbSnapshotIdentifier = 'dolor';
    $request->marker = 'necessitatibus';
    $request->maxRecords = 141264;
    $request->snapshotType = 'nemo';
    $request->version = GETDescribeDBSnapshotsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'eius';
    $request->xAmzSignature = 'maxime';
    $request->xAmzSignedHeaders = 'deleniti';

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
    $request->dbSubnetGroupName = 'facilis';
    $request->marker = 'in';
    $request->maxRecords = 100226;
    $request->version = GETDescribeDBSubnetGroupsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'ullam';
    $request->xAmzDate = 'expedita';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'repellat';
    $request->xAmzSignedHeaders = 'quibusdam';

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
    $request->dbParameterGroupFamily = 'sed';
    $request->marker = 'saepe';
    $request->maxRecords = 868126;
    $request->version = GETDescribeEngineDefaultParametersVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'magni';
    $request->xAmzSignature = 'sunt';
    $request->xAmzSignedHeaders = 'quo';

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
    $request->sourceType = 'illum';
    $request->version = GETDescribeEventCategoriesVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'maxime';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'odit';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'accusantium';

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
    $request->marker = 'ab';
    $request->maxRecords = 982575;
    $request->subscriptionName = 'quidem';
    $request->version = GETDescribeEventSubscriptionsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'autem';
    $request->xAmzDate = 'nam';
    $request->xAmzSecurityToken = 'eaque';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'nemo';

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
    $request->duration = 975522;
    $request->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-22T15:09:45.631Z');
    $request->eventCategories = [
        'aut',
    ];
    $request->marker = 'cumque';
    $request->maxRecords = 359978;
    $request->sourceIdentifier = 'hic';
    $request->sourceType = GETDescribeEventsSourceTypeEnum::DB_SECURITY_GROUP;
    $request->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-28T17:02:52.151Z');
    $request->version = GETDescribeEventsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'eaque';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'nesciunt';
    $request->xAmzSignedHeaders = 'eos';

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
    $request->engineName = 'perferendis';
    $request->majorEngineVersion = 'dolores';
    $request->marker = 'minus';
    $request->maxRecords = 463451;
    $request->version = GETDescribeOptionGroupOptionsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'nostrum';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'recusandae';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'facilis';

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
    $request->engineName = 'perspiciatis';
    $request->majorEngineVersion = 'voluptatem';
    $request->marker = 'porro';
    $request->maxRecords = 164694;
    $request->optionGroupName = 'blanditiis';
    $request->version = GETDescribeOptionGroupsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'eaque';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'rerum';
    $request->xAmzSecurityToken = 'adipisci';
    $request->xAmzSignature = 'asperiores';
    $request->xAmzSignedHeaders = 'earum';

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
    $request->dbInstanceClass = 'modi';
    $request->engine = 'iste';
    $request->engineVersion = 'dolorum';
    $request->licenseModel = 'deleniti';
    $request->marker = 'pariatur';
    $request->maxRecords = 589910;
    $request->version = GETDescribeOrderableDBInstanceOptionsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->vpc = false;
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'libero';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'quaerat';
    $request->xAmzSecurityToken = 'quos';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'dolorem';

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
    $request->dbInstanceClass = 'dolorem';
    $request->duration = 'dolor';
    $request->marker = 'qui';
    $request->maxRecords = 218749;
    $request->multiAZ = false;
    $request->offeringType = 'hic';
    $request->productDescription = 'excepturi';
    $request->reservedDBInstanceId = 'cum';
    $request->reservedDBInstancesOfferingId = 'voluptate';
    $request->version = GETDescribeReservedDBInstancesVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'dignissimos';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'numquam';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'ipsa';

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
    $request->dbInstanceClass = 'ipsa';
    $request->duration = 'iure';
    $request->marker = 'odio';
    $request->maxRecords = 311796;
    $request->multiAZ = false;
    $request->offeringType = 'accusamus';
    $request->productDescription = 'quidem';
    $request->reservedDBInstancesOfferingId = 'voluptatibus';
    $request->version = GETDescribeReservedDBInstancesOfferingsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'voluptas';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'eos';
    $request->xAmzDate = 'atque';
    $request->xAmzSecurityToken = 'sit';
    $request->xAmzSignature = 'fugiat';
    $request->xAmzSignedHeaders = 'ab';

    $response = $sdk->sdk->getDescribeReservedDBInstancesOfferings($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDownloadDBLogFilePortion

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDownloadDBLogFilePortionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDownloadDBLogFilePortionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDownloadDBLogFilePortionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDownloadDBLogFilePortionRequest();
    $request->action = GETDownloadDBLogFilePortionActionEnum::DOWNLOAD_DB_LOG_FILE_PORTION;
    $request->dbInstanceIdentifier = 'soluta';
    $request->logFileName = 'dolorum';
    $request->marker = 'iusto';
    $request->numberOfLines = 453697;
    $request->version = GETDownloadDBLogFilePortionVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'necessitatibus';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'asperiores';
    $request->xAmzSignedHeaders = 'nihil';

    $response = $sdk->sdk->getDownloadDBLogFilePortion($request);

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
    $request->resourceName = 'ipsum';
    $request->version = GETListTagsForResourceVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'eius';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'amet';

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
    $request->allocatedStorage = 758379;
    $request->allowMajorVersionUpgrade = false;
    $request->applyImmediately = false;
    $request->autoMinorVersionUpgrade = false;
    $request->backupRetentionPeriod = 881586;
    $request->dbInstanceClass = 'ad';
    $request->dbInstanceIdentifier = 'saepe';
    $request->dbParameterGroupName = 'suscipit';
    $request->dbSecurityGroups = [
        'provident',
        'minima',
        'repellendus',
    ];
    $request->engineVersion = 'totam';
    $request->iops = 628982;
    $request->masterUserPassword = 'alias';
    $request->multiAZ = false;
    $request->newDBInstanceIdentifier = 'at';
    $request->optionGroupName = 'quaerat';
    $request->preferredBackupWindow = 'tempora';
    $request->preferredMaintenanceWindow = 'vel';
    $request->version = GETModifyDBInstanceVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->vpcSecurityGroupIds = [
        'officiis',
        'qui',
        'dolorum',
        'a',
    ];
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'harum';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'quisquam';
    $request->xAmzSignature = 'tenetur';
    $request->xAmzSignedHeaders = 'amet';

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
    $request->dbSubnetGroupDescription = 'tempore';
    $request->dbSubnetGroupName = 'accusamus';
    $request->subnetIds = [
        'enim',
        'dolorem',
    ];
    $request->version = GETModifyDBSubnetGroupVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'sit';
    $request->xAmzSecurityToken = 'expedita';
    $request->xAmzSignature = 'neque';
    $request->xAmzSignedHeaders = 'sed';

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
        'libero',
        'voluptas',
    ];
    $request->snsTopicArn = 'deserunt';
    $request->sourceType = 'quam';
    $request->subscriptionName = 'ipsum';
    $request->version = GETModifyEventSubscriptionVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'incidunt';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'cupiditate';
    $request->xAmzDate = 'maxime';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'soluta';
    $request->xAmzSignedHeaders = 'dicta';

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
    $request->backupRetentionPeriod = 674848;
    $request->dbInstanceIdentifier = 'totam';
    $request->preferredBackupWindow = 'incidunt';
    $request->version = GETPromoteReadReplicaVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'quam';
    $request->xAmzSignedHeaders = 'molestias';

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
    $request->dbInstanceCount = 840429;
    $request->reservedDBInstanceId = 'qui';
    $request->reservedDBInstancesOfferingId = 'neque';
    $request->version = GETPurchaseReservedDBInstancesOfferingVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'magni';
    $request->xAmzCredential = 'odio';
    $request->xAmzDate = 'sunt';
    $request->xAmzSecurityToken = 'ullam';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'hic';

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
    $request->dbInstanceIdentifier = 'voluptatem';
    $request->forceFailover = false;
    $request->version = GETRebootDBInstanceVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'cumque';
    $request->xAmzContentSha256 = 'soluta';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'et';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'veritatis';

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
    $request->sourceIdentifier = 'nobis';
    $request->subscriptionName = 'quos';
    $request->version = GETRemoveSourceIdentifierFromSubscriptionVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'tempore';
    $request->xAmzContentSha256 = 'cupiditate';
    $request->xAmzCredential = 'aperiam';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'dolore';
    $request->xAmzSignedHeaders = 'labore';

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
    $request->resourceName = 'adipisci';
    $request->tagKeys = [
        'architecto',
        'quae',
        'aut',
    ];
    $request->version = GETRemoveTagsFromResourceVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'quas';
    $request->xAmzContentSha256 = 'itaque';
    $request->xAmzCredential = 'consequatur';
    $request->xAmzDate = 'est';
    $request->xAmzSecurityToken = 'repellendus';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'doloribus';

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
    $request->availabilityZone = 'ut';
    $request->dbInstanceClass = 'facilis';
    $request->dbInstanceIdentifier = 'cupiditate';
    $request->dbName = 'qui';
    $request->dbSnapshotIdentifier = 'quae';
    $request->dbSubnetGroupName = 'laudantium';
    $request->engine = 'odio';
    $request->iops = 580447;
    $request->licenseModel = 'voluptatibus';
    $request->multiAZ = false;
    $request->optionGroupName = 'quisquam';
    $request->port = 876506;
    $request->publiclyAccessible = false;
    $request->version = GETRestoreDBInstanceFromDBSnapshotVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'consectetur';
    $request->xAmzSignedHeaders = 'vero';

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
    $request->availabilityZone = 'tenetur';
    $request->dbInstanceClass = 'dignissimos';
    $request->dbName = 'hic';
    $request->dbSubnetGroupName = 'distinctio';
    $request->engine = 'quod';
    $request->iops = 486160;
    $request->licenseModel = 'similique';
    $request->multiAZ = false;
    $request->optionGroupName = 'facilis';
    $request->port = 874288;
    $request->publiclyAccessible = false;
    $request->restoreTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-16T01:08:31.616Z');
    $request->sourceDBInstanceIdentifier = 'quibusdam';
    $request->targetDBInstanceIdentifier = 'illum';
    $request->useLatestRestorableTime = false;
    $request->version = GETRestoreDBInstanceToPointInTimeVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'sequi';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'impedit';
    $request->xAmzDate = 'aut';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'exercitationem';
    $request->xAmzSignedHeaders = 'nulla';

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
    $request->cidrip = 'fugit';
    $request->dbSecurityGroupName = 'porro';
    $request->ec2SecurityGroupId = 'maiores';
    $request->ec2SecurityGroupName = 'doloribus';
    $request->ec2SecurityGroupOwnerId = 'iusto';
    $request->version = GETRevokeDBSecurityGroupIngressVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'eligendi';
    $request->xAmzContentSha256 = 'ducimus';
    $request->xAmzCredential = 'alias';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'ea';

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
    $request->requestBody = 'aspernatur';
    $request->version = POSTAddSourceIdentifierToSubscriptionVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'possimus';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'ratione';
    $request->xAmzSecurityToken = 'ex';
    $request->xAmzSignature = 'laudantium';
    $request->xAmzSignedHeaders = 'dicta';

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
    $request->requestBody = 'dolor';
    $request->version = POSTAddTagsToResourceVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'ex';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'nostrum';

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
    $request->requestBody = 'sapiente';
    $request->version = POSTAuthorizeDBSecurityGroupIngressVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'quisquam';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'impedit';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'veniam';
    $request->xAmzSignedHeaders = 'aliquid';

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
    $request->requestBody = 'inventore';
    $request->version = POSTCopyDBSnapshotVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'consectetur';
    $request->xAmzSecurityToken = 'recusandae';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'minima';

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
    $request->requestBody = 'eaque';
    $request->version = POSTCreateDBInstanceVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'a';
    $request->xAmzContentSha256 = 'libero';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'aut';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'impedit';
    $request->xAmzSignedHeaders = 'aliquam';

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
    $request->requestBody = 'fugit';
    $request->version = POSTCreateDBInstanceReadReplicaVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'inventore';
    $request->xAmzCredential = 'non';
    $request->xAmzDate = 'et';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'placeat';

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
    $request->requestBody = 'velit';
    $request->version = POSTCreateDBParameterGroupVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'autem';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'quas';
    $request->xAmzSecurityToken = 'assumenda';
    $request->xAmzSignature = 'nulla';
    $request->xAmzSignedHeaders = 'voluptas';

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
    $request->requestBody = 'libero';
    $request->version = POSTCreateDBSecurityGroupVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'molestiae';

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
    $request->requestBody = 'magnam';
    $request->version = POSTCreateDBSnapshotVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'odio';
    $request->xAmzContentSha256 = 'eius';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'rem';
    $request->xAmzSignature = 'fuga';
    $request->xAmzSignedHeaders = 'reprehenderit';

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
    $request->requestBody = 'quidem';
    $request->version = POSTCreateDBSubnetGroupVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'fugiat';
    $request->xAmzContentSha256 = 'ut';
    $request->xAmzCredential = 'eum';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'assumenda';
    $request->xAmzSignature = 'eos';
    $request->xAmzSignedHeaders = 'praesentium';

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
    $request->requestBody = 'quisquam';
    $request->version = POSTCreateEventSubscriptionVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'neque';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'illum';

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
    $request->requestBody = 'quo';
    $request->version = POSTCreateOptionGroupVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'fuga';
    $request->xAmzContentSha256 = 'eius';
    $request->xAmzCredential = 'eos';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'ab';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'consequatur';

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
    $request->requestBody = 'tempora';
    $request->version = POSTDeleteDBInstanceVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'debitis';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'sequi';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'recusandae';

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
    $request->requestBody = 'aperiam';
    $request->version = POSTDeleteDBParameterGroupVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'inventore';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'accusamus';

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
    $request->requestBody = 'aliquam';
    $request->version = POSTDeleteDBSecurityGroupVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'odio';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'commodi';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'dolores';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'molestiae';

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
    $request->requestBody = 'accusantium';
    $request->version = POSTDeleteDBSnapshotVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'porro';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'quas';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'fugit';

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
    $request->requestBody = 'fuga';
    $request->version = POSTDeleteDBSubnetGroupVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'incidunt';
    $request->xAmzCredential = 'atque';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'nisi';
    $request->xAmzSignedHeaders = 'fugit';

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
    $request->requestBody = 'sapiente';
    $request->version = POSTDeleteEventSubscriptionVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'ratione';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'atque';
    $request->xAmzSignedHeaders = 'et';

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
    $request->requestBody = 'esse';
    $request->version = POSTDeleteOptionGroupVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'eveniet';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'quod';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'vero';

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
    $request->marker = 'aliquid';
    $request->maxRecords = 'quasi';
    $request->requestBody = 'saepe';
    $request->version = POSTDescribeDBEngineVersionsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'harum';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'rerum';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'distinctio';

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
    $request->marker = 'eligendi';
    $request->maxRecords = 'sit';
    $request->requestBody = 'culpa';
    $request->version = POSTDescribeDBInstancesVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'tempore';
    $request->xAmzContentSha256 = 'adipisci';
    $request->xAmzCredential = 'cumque';
    $request->xAmzDate = 'consequuntur';
    $request->xAmzSecurityToken = 'consequatur';
    $request->xAmzSignature = 'minus';
    $request->xAmzSignedHeaders = 'quaerat';

    $response = $sdk->sdk->postDescribeDBInstances($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeDBLogFiles

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBLogFilesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBLogFilesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeDBLogFilesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeDBLogFilesRequest();
    $request->action = POSTDescribeDBLogFilesActionEnum::DESCRIBE_DB_LOG_FILES;
    $request->marker = 'sapiente';
    $request->maxRecords = 'consectetur';
    $request->requestBody = 'esse';
    $request->version = POSTDescribeDBLogFilesVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'blanditiis';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'a';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'quas';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'quasi';

    $response = $sdk->sdk->postDescribeDBLogFiles($request);

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
    $request->marker = 'a';
    $request->maxRecords = 'error';
    $request->requestBody = 'sint';
    $request->version = POSTDescribeDBParameterGroupsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'possimus';
    $request->xAmzCredential = 'quia';
    $request->xAmzDate = 'eveniet';
    $request->xAmzSecurityToken = 'asperiores';
    $request->xAmzSignature = 'facere';
    $request->xAmzSignedHeaders = 'veritatis';

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
    $request->marker = 'consequuntur';
    $request->maxRecords = 'quasi';
    $request->requestBody = 'similique';
    $request->version = POSTDescribeDBParametersVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'tenetur';
    $request->xAmzDate = 'quae';
    $request->xAmzSecurityToken = 'earum';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'in';

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
    $request->marker = 'eius';
    $request->maxRecords = 'libero';
    $request->requestBody = 'illum';
    $request->version = POSTDescribeDBSecurityGroupsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'soluta';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'aliquam';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'ullam';
    $request->xAmzSignedHeaders = 'reprehenderit';

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
    $request->marker = 'ullam';
    $request->maxRecords = 'nisi';
    $request->requestBody = 'aut';
    $request->version = POSTDescribeDBSnapshotsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'voluptatum';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'ex';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'itaque';
    $request->xAmzSignedHeaders = 'dolorum';

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
    $request->marker = 'architecto';
    $request->maxRecords = 'omnis';
    $request->requestBody = 'tenetur';
    $request->version = POSTDescribeDBSubnetGroupsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'at';
    $request->xAmzCredential = 'et';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'veritatis';

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
    $request->marker = 'consectetur';
    $request->maxRecords = 'adipisci';
    $request->requestBody = 'iste';
    $request->version = POSTDescribeEngineDefaultParametersVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'temporibus';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'rem';
    $request->xAmzDate = 'aut';
    $request->xAmzSecurityToken = 'laudantium';
    $request->xAmzSignature = 'eum';
    $request->xAmzSignedHeaders = 'mollitia';

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
    $request->requestBody = 'ab';
    $request->version = POSTDescribeEventCategoriesVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'corrupti';
    $request->xAmzContentSha256 = 'non';
    $request->xAmzCredential = 'voluptatem';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'numquam';
    $request->xAmzSignedHeaders = 'impedit';

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
    $request->marker = 'explicabo';
    $request->maxRecords = 'voluptas';
    $request->requestBody = 'aut';
    $request->version = POSTDescribeEventSubscriptionsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'dignissimos';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'velit';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'voluptas';

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
    $request->marker = 'asperiores';
    $request->maxRecords = 'aperiam';
    $request->requestBody = 'ea';
    $request->version = POSTDescribeEventsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'quaerat';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'repellendus';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'maxime';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'officia';

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
    $request->marker = 'asperiores';
    $request->maxRecords = 'nemo';
    $request->requestBody = 'quae';
    $request->version = POSTDescribeOptionGroupOptionsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'quaerat';
    $request->xAmzContentSha256 = 'porro';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'ab';
    $request->xAmzSignature = 'adipisci';
    $request->xAmzSignedHeaders = 'fuga';

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
    $request->marker = 'id';
    $request->maxRecords = 'suscipit';
    $request->requestBody = 'velit';
    $request->version = POSTDescribeOptionGroupsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'est';
    $request->xAmzCredential = 'recusandae';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'fugiat';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'ducimus';

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
    $request->marker = 'quos';
    $request->maxRecords = 'vel';
    $request->requestBody = 'labore';
    $request->version = POSTDescribeOrderableDBInstanceOptionsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'possimus';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'cum';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'reiciendis';

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
    $request->marker = 'assumenda';
    $request->maxRecords = 'nemo';
    $request->requestBody = 'recusandae';
    $request->version = POSTDescribeReservedDBInstancesVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'aperiam';
    $request->xAmzCredential = 'cum';
    $request->xAmzDate = 'consectetur';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'exercitationem';
    $request->xAmzSignedHeaders = 'earum';

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
    $request->marker = 'facere';
    $request->maxRecords = 'numquam';
    $request->requestBody = 'doloribus';
    $request->version = POSTDescribeReservedDBInstancesOfferingsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'necessitatibus';
    $request->xAmzSignature = 'dolore';
    $request->xAmzSignedHeaders = 'sunt';

    $response = $sdk->sdk->postDescribeReservedDBInstancesOfferings($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDownloadDBLogFilePortion

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDownloadDBLogFilePortionRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDownloadDBLogFilePortionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDownloadDBLogFilePortionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDownloadDBLogFilePortionRequest();
    $request->action = POSTDownloadDBLogFilePortionActionEnum::DOWNLOAD_DB_LOG_FILE_PORTION;
    $request->marker = 'asperiores';
    $request->numberOfLines = 'adipisci';
    $request->requestBody = 'non';
    $request->version = POSTDownloadDBLogFilePortionVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'amet';
    $request->xAmzContentSha256 = 'beatae';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'a';
    $request->xAmzSecurityToken = 'debitis';
    $request->xAmzSignature = 'consectetur';
    $request->xAmzSignedHeaders = 'corporis';

    $response = $sdk->sdk->postDownloadDBLogFilePortion($request);

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
    $request->requestBody = 'harum';
    $request->version = POSTListTagsForResourceVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'laboriosam';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'voluptates';
    $request->xAmzDate = 'libero';
    $request->xAmzSecurityToken = 'vitae';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'similique';

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
    $request->requestBody = 'tempora';
    $request->version = POSTModifyDBInstanceVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'voluptas';
    $request->xAmzCredential = 'voluptas';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'dolorum';

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
    $request->requestBody = 'adipisci';
    $request->version = POSTModifyDBParameterGroupVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'minus';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'blanditiis';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'dolore';
    $request->xAmzSignature = 'aliquam';
    $request->xAmzSignedHeaders = 'officiis';

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
    $request->requestBody = 'temporibus';
    $request->version = POSTModifyDBSubnetGroupVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'ullam';
    $request->xAmzContentSha256 = 'adipisci';
    $request->xAmzCredential = 'cum';
    $request->xAmzDate = 'blanditiis';
    $request->xAmzSecurityToken = 'quas';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'nesciunt';

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
    $request->requestBody = 'culpa';
    $request->version = POSTModifyEventSubscriptionVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'corrupti';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'exercitationem';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'sit';

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
    $request->requestBody = 'rerum';
    $request->version = POSTModifyOptionGroupVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'sed';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'asperiores';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'expedita';

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
    $request->requestBody = 'ab';
    $request->version = POSTPromoteReadReplicaVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'iste';
    $request->xAmzContentSha256 = 'dolore';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'sed';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'quidem';

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
    $request->requestBody = 'explicabo';
    $request->version = POSTPurchaseReservedDBInstancesOfferingVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'voluptas';
    $request->xAmzContentSha256 = 'unde';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'illo';

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
    $request->requestBody = 'reiciendis';
    $request->version = POSTRebootDBInstanceVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'corrupti';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'incidunt';
    $request->xAmzSecurityToken = 'sed';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'eius';

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
    $request->requestBody = 'necessitatibus';
    $request->version = POSTRemoveSourceIdentifierFromSubscriptionVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'quos';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'tempora';
    $request->xAmzSignedHeaders = 'tempora';

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
    $request->requestBody = 'voluptate';
    $request->version = POSTRemoveTagsFromResourceVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'ex';
    $request->xAmzCredential = 'sit';
    $request->xAmzDate = 'non';
    $request->xAmzSecurityToken = 'officiis';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'facilis';

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
    $request->requestBody = 'quaerat';
    $request->version = POSTResetDBParameterGroupVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'incidunt';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'debitis';
    $request->xAmzDate = 'rem';
    $request->xAmzSecurityToken = 'sit';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'error';

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
    $request->requestBody = 'veniam';
    $request->version = POSTRestoreDBInstanceFromDBSnapshotVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'minima';
    $request->xAmzContentSha256 = 'recusandae';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'magni';
    $request->xAmzSignature = 'aperiam';
    $request->xAmzSignedHeaders = 'saepe';

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
    $request->requestBody = 'numquam';
    $request->version = POSTRestoreDBInstanceToPointInTimeVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'veniam';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'officiis';
    $request->xAmzDate = 'beatae';
    $request->xAmzSecurityToken = 'laudantium';
    $request->xAmzSignature = 'exercitationem';
    $request->xAmzSignedHeaders = 'praesentium';

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
    $request->requestBody = 'cum';
    $request->version = POSTRevokeDBSecurityGroupIngressVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'laboriosam';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'voluptatum';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'expedita';
    $request->xAmzSignedHeaders = 'debitis';

    $response = $sdk->sdk->postRevokeDBSecurityGroupIngress($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
