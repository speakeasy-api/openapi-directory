# SDK

## Overview

Amazon Web Services documentation
<https://docs.aws.amazon.com/rds/>
### Available Operations

* [getAddSourceIdentifierToSubscription](#getaddsourceidentifiertosubscription)
* [getAuthorizeDBSecurityGroupIngress](#getauthorizedbsecuritygroupingress)
* [getDeleteDBInstance](#getdeletedbinstance)
* [getDeleteDBParameterGroup](#getdeletedbparametergroup)
* [getDeleteDBSecurityGroup](#getdeletedbsecuritygroup)
* [getDeleteDBSnapshot](#getdeletedbsnapshot)
* [getDeleteDBSubnetGroup](#getdeletedbsubnetgroup)
* [getDeleteEventSubscription](#getdeleteeventsubscription)
* [getDeleteOptionGroup](#getdeleteoptiongroup)
* [getDownloadDBLogFilePortion](#getdownloaddblogfileportion)
* [getModifyDBInstance](#getmodifydbinstance)
* [getModifyDBSubnetGroup](#getmodifydbsubnetgroup)
* [getModifyEventSubscription](#getmodifyeventsubscription)
* [getPromoteReadReplica](#getpromotereadreplica)
* [getRebootDBInstance](#getrebootdbinstance)
* [getRemoveSourceIdentifierFromSubscription](#getremovesourceidentifierfromsubscription)
* [getRemoveTagsFromResource](#getremovetagsfromresource)
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
    $request->version = GETAddSourceIdentifierToSubscriptionVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
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
    $request->version = GETAuthorizeDBSecurityGroupIngressVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
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
    $request->dbInstanceIdentifier = 'veritatis';
    $request->finalDBSnapshotIdentifier = 'deserunt';
    $request->skipFinalSnapshot = false;
    $request->version = GETDeleteDBInstanceVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'repellendus';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'at';

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
    $request->dbParameterGroupName = 'at';
    $request->version = GETDeleteDBParameterGroupVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'quod';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'porro';

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
    $request->dbSecurityGroupName = 'dolorum';
    $request->version = GETDeleteDBSecurityGroupVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'officia';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'hic';

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
    $request->dbSnapshotIdentifier = 'optio';
    $request->version = GETDeleteDBSnapshotVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'beatae';
    $request->xAmzCredential = 'commodi';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'modi';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'impedit';

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
    $request->dbSubnetGroupName = 'cum';
    $request->version = GETDeleteDBSubnetGroupVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'ad';
    $request->xAmzSignedHeaders = 'natus';

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
    $request->subscriptionName = 'sed';
    $request->version = GETDeleteEventSubscriptionVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'iste';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'laboriosam';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'fuga';

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
    $request->optionGroupName = 'in';
    $request->version = GETDeleteOptionGroupVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'iste';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'ipsa';

    $response = $sdk->sdk->getDeleteOptionGroup($request);

    if ($response->statusCode === 200) {
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
    $request->dbInstanceIdentifier = 'reiciendis';
    $request->logFileName = 'est';
    $request->marker = 'mollitia';
    $request->numberOfLines = 670638;
    $request->version = GETDownloadDBLogFilePortionVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'dolores';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'omnis';

    $response = $sdk->sdk->getDownloadDBLogFilePortion($request);

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
    $request->allocatedStorage = 363711;
    $request->allowMajorVersionUpgrade = false;
    $request->applyImmediately = false;
    $request->autoMinorVersionUpgrade = false;
    $request->backupRetentionPeriod = 325047;
    $request->dbInstanceClass = 'excepturi';
    $request->dbInstanceIdentifier = 'accusantium';
    $request->dbParameterGroupName = 'iure';
    $request->dbSecurityGroups = [
        'doloribus',
        'sapiente',
        'architecto',
    ];
    $request->engineVersion = 'mollitia';
    $request->iops = 208876;
    $request->masterUserPassword = 'culpa';
    $request->multiAZ = false;
    $request->newDBInstanceIdentifier = 'consequuntur';
    $request->optionGroupName = 'repellat';
    $request->preferredBackupWindow = 'mollitia';
    $request->preferredMaintenanceWindow = 'occaecati';
    $request->version = GETModifyDBInstanceVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->vpcSecurityGroupIds = [
        'commodi',
        'quam',
    ];
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'velit';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'quia';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'vitae';
    $request->xAmzSignedHeaders = 'laborum';

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
    $request->dbSubnetGroupDescription = 'animi';
    $request->dbSubnetGroupName = 'enim';
    $request->subnetIds = [
        'quo',
    ];
    $request->version = GETModifyDBSubnetGroupVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'sequi';
    $request->xAmzContentSha256 = 'tenetur';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'possimus';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'quasi';

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
        'temporibus',
        'laborum',
        'quasi',
    ];
    $request->snsTopicArn = 'reiciendis';
    $request->sourceType = 'voluptatibus';
    $request->subscriptionName = 'vero';
    $request->version = GETModifyEventSubscriptionVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'nihil';
    $request->xAmzContentSha256 = 'praesentium';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'cum';

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
    $request->backupRetentionPeriod = 19987;
    $request->dbInstanceIdentifier = 'doloremque';
    $request->preferredBackupWindow = 'reprehenderit';
    $request->version = GETPromoteReadReplicaVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'ut';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'dolore';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'dicta';

    $response = $sdk->sdk->getPromoteReadReplica($request);

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
    $request->dbInstanceIdentifier = 'harum';
    $request->forceFailover = false;
    $request->version = GETRebootDBInstanceVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'commodi';
    $request->xAmzDate = 'repudiandae';
    $request->xAmzSecurityToken = 'quae';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'quidem';

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
    $request->sourceIdentifier = 'molestias';
    $request->subscriptionName = 'excepturi';
    $request->version = GETRemoveSourceIdentifierFromSubscriptionVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'rem';
    $request->xAmzSecurityToken = 'voluptates';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'repudiandae';

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
    $request->resourceName = 'sint';
    $request->tagKeys = [
        'itaque',
    ];
    $request->version = GETRemoveTagsFromResourceVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'incidunt';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'consequatur';
    $request->xAmzDate = 'est';
    $request->xAmzSecurityToken = 'quibusdam';
    $request->xAmzSignature = 'explicabo';
    $request->xAmzSignedHeaders = 'deserunt';

    $response = $sdk->sdk->getRemoveTagsFromResource($request);

    if ($response->statusCode === 200) {
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
    $request->cidrip = 'distinctio';
    $request->dbSecurityGroupName = 'quibusdam';
    $request->ec2SecurityGroupId = 'labore';
    $request->ec2SecurityGroupName = 'modi';
    $request->ec2SecurityGroupOwnerId = 'qui';
    $request->version = GETRevokeDBSecurityGroupIngressVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'cupiditate';
    $request->xAmzCredential = 'quos';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'magni';
    $request->xAmzSignature = 'assumenda';
    $request->xAmzSignedHeaders = 'ipsam';

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
    $request->requestBody = 'alias';
    $request->version = POSTAddSourceIdentifierToSubscriptionVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'tempore';
    $request->xAmzSignedHeaders = 'labore';

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
    $request->requestBody = 'delectus';
    $request->version = POSTAddTagsToResourceVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'non';
    $request->xAmzCredential = 'eligendi';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'necessitatibus';

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
    $request->requestBody = 'sint';
    $request->version = POSTAuthorizeDBSecurityGroupIngressVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'debitis';
    $request->xAmzDate = 'a';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'in';

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
    $request->requestBody = 'illum';
    $request->version = POSTCopyDBSnapshotVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'rerum';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'cumque';
    $request->xAmzSignature = 'facere';
    $request->xAmzSignedHeaders = 'ea';

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
    $request->requestBody = 'aliquid';
    $request->version = POSTCreateDBInstanceVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'non';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'delectus';

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
    $request->requestBody = 'quidem';
    $request->version = POSTCreateDBInstanceReadReplicaVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'blanditiis';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'amet';

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
    $request->requestBody = 'deserunt';
    $request->version = POSTCreateDBParameterGroupVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'nisi';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'nihil';

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
    $request->requestBody = 'magnam';
    $request->version = POSTCreateDBSecurityGroupVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'nobis';

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
    $request->requestBody = 'eum';
    $request->version = POSTCreateDBSnapshotVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'et';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'ullam';

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
    $request->requestBody = 'provident';
    $request->version = POSTCreateDBSubnetGroupVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'ad';

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
    $request->requestBody = 'eum';
    $request->version = POSTCreateEventSubscriptionVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'necessitatibus';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'nemo';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'doloribus';

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
    $request->requestBody = 'debitis';
    $request->version = POSTCreateOptionGroupVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'eius';
    $request->xAmzContentSha256 = 'maxime';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'architecto';

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
    $request->requestBody = 'repudiandae';
    $request->version = POSTDeleteDBInstanceVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'ullam';
    $request->xAmzContentSha256 = 'expedita';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'repellat';
    $request->xAmzSecurityToken = 'quibusdam';
    $request->xAmzSignature = 'sed';
    $request->xAmzSignedHeaders = 'saepe';

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
    $request->requestBody = 'pariatur';
    $request->version = POSTDeleteDBParameterGroupVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'magni';
    $request->xAmzSignature = 'sunt';
    $request->xAmzSignedHeaders = 'quo';

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
    $request->requestBody = 'illum';
    $request->version = POSTDeleteDBSecurityGroupVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'maxime';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'odit';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'accusantium';

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
    $request->version = POSTDeleteDBSnapshotVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'autem';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'eaque';

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
    $request->requestBody = 'pariatur';
    $request->version = POSTDeleteDBSubnetGroupVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'nemo';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'fugiat';
    $request->xAmzSecurityToken = 'amet';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'cumque';

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
    $request->requestBody = 'corporis';
    $request->version = POSTDeleteEventSubscriptionVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'libero';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'dolores';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'dignissimos';

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
    $request->requestBody = 'eaque';
    $request->version = POSTDeleteOptionGroupVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'nesciunt';
    $request->xAmzCredential = 'eos';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'dolores';
    $request->xAmzSignature = 'minus';
    $request->xAmzSignedHeaders = 'quam';

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
    $request->marker = 'dolor';
    $request->maxRecords = 'vero';
    $request->requestBody = 'nostrum';
    $request->version = POSTDescribeDBEngineVersionsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'recusandae';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'perspiciatis';
    $request->xAmzSignature = 'voluptatem';
    $request->xAmzSignedHeaders = 'porro';

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
    $request->marker = 'consequuntur';
    $request->maxRecords = 'blanditiis';
    $request->requestBody = 'error';
    $request->version = POSTDescribeDBInstancesVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'eaque';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'rerum';
    $request->xAmzDate = 'adipisci';
    $request->xAmzSecurityToken = 'asperiores';
    $request->xAmzSignature = 'earum';
    $request->xAmzSignedHeaders = 'modi';

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
    $request->marker = 'iste';
    $request->maxRecords = 'dolorum';
    $request->requestBody = 'deleniti';
    $request->version = POSTDescribeDBLogFilesVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'libero';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'quaerat';
    $request->xAmzSignedHeaders = 'quos';

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
    $request->marker = 'aliquid';
    $request->maxRecords = 'dolorem';
    $request->requestBody = 'dolorem';
    $request->version = POSTDescribeDBParameterGroupsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'voluptate';

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
    $request->marker = 'dignissimos';
    $request->maxRecords = 'reiciendis';
    $request->requestBody = 'amet';
    $request->version = POSTDescribeDBParametersVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'numquam';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'odio';

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
    $request->marker = 'quaerat';
    $request->maxRecords = 'accusamus';
    $request->requestBody = 'quidem';
    $request->version = POSTDescribeDBSecurityGroupsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'voluptas';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'eos';
    $request->xAmzSecurityToken = 'atque';
    $request->xAmzSignature = 'sit';
    $request->xAmzSignedHeaders = 'fugiat';

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
    $request->marker = 'ab';
    $request->maxRecords = 'soluta';
    $request->requestBody = 'dolorum';
    $request->version = POSTDescribeDBSnapshotsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'iusto';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'necessitatibus';
    $request->xAmzSignedHeaders = 'distinctio';

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
    $request->marker = 'asperiores';
    $request->maxRecords = 'nihil';
    $request->requestBody = 'ipsum';
    $request->version = POSTDescribeDBSubnetGroupsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'eius';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'amet';

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
    $request->marker = 'optio';
    $request->maxRecords = 'accusamus';
    $request->requestBody = 'ad';
    $request->version = POSTDescribeEngineDefaultParametersVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'repellendus';
    $request->xAmzSignedHeaders = 'totam';

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
    $request->requestBody = 'similique';
    $request->version = POSTDescribeEventCategoriesVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'alias';
    $request->xAmzContentSha256 = 'at';
    $request->xAmzCredential = 'quaerat';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'officiis';

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
    $request->marker = 'qui';
    $request->maxRecords = 'dolorum';
    $request->requestBody = 'a';
    $request->version = POSTDescribeEventSubscriptionsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'harum';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'quisquam';
    $request->xAmzSignature = 'tenetur';
    $request->xAmzSignedHeaders = 'amet';

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
    $request->marker = 'tempore';
    $request->maxRecords = 'accusamus';
    $request->requestBody = 'numquam';
    $request->version = POSTDescribeEventsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'sit';
    $request->xAmzSignedHeaders = 'expedita';

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
    $request->marker = 'neque';
    $request->maxRecords = 'sed';
    $request->requestBody = 'vel';
    $request->version = POSTDescribeOptionGroupOptionsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'libero';
    $request->xAmzContentSha256 = 'voluptas';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'quam';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'incidunt';
    $request->xAmzSignedHeaders = 'qui';

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
    $request->marker = 'cupiditate';
    $request->maxRecords = 'maxime';
    $request->requestBody = 'pariatur';
    $request->version = POSTDescribeOptionGroupsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'soluta';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'incidunt';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'dolores';

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
    $request->marker = 'distinctio';
    $request->maxRecords = 'facilis';
    $request->requestBody = 'aliquid';
    $request->version = POSTDescribeOrderableDBInstanceOptionsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'quam';
    $request->xAmzContentSha256 = 'molestias';
    $request->xAmzCredential = 'temporibus';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'neque';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'magni';

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
    $request->marker = 'odio';
    $request->maxRecords = 'sunt';
    $request->requestBody = 'ullam';
    $request->version = POSTDescribeReservedDBInstancesVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'nam';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'voluptatem';
    $request->xAmzDate = 'cumque';
    $request->xAmzSecurityToken = 'soluta';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'et';

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
    $request->marker = 'saepe';
    $request->maxRecords = 'ipsum';
    $request->requestBody = 'veritatis';
    $request->version = POSTDescribeReservedDBInstancesOfferingsVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'tempore';
    $request->xAmzDate = 'cupiditate';
    $request->xAmzSecurityToken = 'aperiam';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'dolorem';

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
    $request->marker = 'dolore';
    $request->numberOfLines = 'labore';
    $request->requestBody = 'adipisci';
    $request->version = POSTDownloadDBLogFilePortionVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'quae';
    $request->xAmzDate = 'aut';
    $request->xAmzSecurityToken = 'quas';
    $request->xAmzSignature = 'itaque';
    $request->xAmzSignedHeaders = 'consequatur';

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
    $request->requestBody = 'est';
    $request->version = POSTListTagsForResourceVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'repellendus';
    $request->xAmzContentSha256 = 'porro';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'ut';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'qui';

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
    $request->requestBody = 'quae';
    $request->version = POSTModifyDBInstanceVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'laudantium';
    $request->xAmzContentSha256 = 'odio';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'quisquam';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'omnis';

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
    $request->requestBody = 'quis';
    $request->version = POSTModifyDBParameterGroupVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'consectetur';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'tenetur';
    $request->xAmzSignedHeaders = 'dignissimos';

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
    $request->requestBody = 'hic';
    $request->version = POSTModifyDBSubnetGroupVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'odio';
    $request->xAmzDate = 'similique';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'ducimus';

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
    $request->requestBody = 'dolore';
    $request->version = POSTModifyEventSubscriptionVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'sequi';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'voluptatibus';

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
    $request->requestBody = 'exercitationem';
    $request->version = POSTModifyOptionGroupVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'nulla';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'porro';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'eligendi';

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
    $request->requestBody = 'ducimus';
    $request->version = POSTPromoteReadReplicaVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'alias';
    $request->xAmzContentSha256 = 'officia';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'ea';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'vel';

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
    $request->requestBody = 'possimus';
    $request->version = POSTPurchaseReservedDBInstancesOfferingVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'ratione';
    $request->xAmzCredential = 'ex';
    $request->xAmzDate = 'laudantium';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'maiores';

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
    $request->requestBody = 'quasi';
    $request->version = POSTRebootDBInstanceVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'ex';
    $request->xAmzContentSha256 = 'nulla';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'nostrum';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'quisquam';

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
    $request->requestBody = 'saepe';
    $request->version = POSTRemoveSourceIdentifierFromSubscriptionVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'ea';
    $request->xAmzContentSha256 = 'impedit';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'veniam';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'inventore';
    $request->xAmzSignedHeaders = 'magnam';

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
    $request->requestBody = 'ea';
    $request->version = POSTRemoveTagsFromResourceVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'consectetur';
    $request->xAmzCredential = 'recusandae';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'eaque';
    $request->xAmzSignedHeaders = 'a';

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
    $request->requestBody = 'libero';
    $request->version = POSTResetDBParameterGroupVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'aut';
    $request->xAmzContentSha256 = 'aut';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'impedit';
    $request->xAmzSecurityToken = 'aliquam';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'accusamus';

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
    $request->requestBody = 'inventore';
    $request->version = POSTRestoreDBInstanceFromDBSnapshotVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'non';
    $request->xAmzContentSha256 = 'et';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'placeat';
    $request->xAmzSignature = 'velit';
    $request->xAmzSignedHeaders = 'eum';

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
    $request->requestBody = 'autem';
    $request->version = POSTRestoreDBInstanceToPointInTimeVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'quas';
    $request->xAmzCredential = 'assumenda';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'voluptas';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'quasi';

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
    $request->requestBody = 'tempora';
    $request->version = POSTRevokeDBSecurityGroupIngressVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'numquam';
    $request->xAmzContentSha256 = 'explicabo';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'odio';

    $response = $sdk->sdk->postRevokeDBSecurityGroupIngress($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
