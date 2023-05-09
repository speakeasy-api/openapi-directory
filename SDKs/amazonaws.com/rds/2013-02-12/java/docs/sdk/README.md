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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETAddSourceIdentifierToSubscriptionActionEnum;
import org.openapis.openapi.models.operations.GETAddSourceIdentifierToSubscriptionRequest;
import org.openapis.openapi.models.operations.GETAddSourceIdentifierToSubscriptionResponse;
import org.openapis.openapi.models.operations.GETAddSourceIdentifierToSubscriptionVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETAddSourceIdentifierToSubscriptionRequest req = new GETAddSourceIdentifierToSubscriptionRequest(GETAddSourceIdentifierToSubscriptionActionEnum.ADD_SOURCE_IDENTIFIER_TO_SUBSCRIPTION, "suscipit", "iure", GETAddSourceIdentifierToSubscriptionVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "ipsa";
                xAmzDate = "delectus";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "molestiae";
            }};            

            GETAddSourceIdentifierToSubscriptionResponse res = sdk.sdk.getAddSourceIdentifierToSubscription(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAuthorizeDBSecurityGroupIngress

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETAuthorizeDBSecurityGroupIngressActionEnum;
import org.openapis.openapi.models.operations.GETAuthorizeDBSecurityGroupIngressRequest;
import org.openapis.openapi.models.operations.GETAuthorizeDBSecurityGroupIngressResponse;
import org.openapis.openapi.models.operations.GETAuthorizeDBSecurityGroupIngressVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETAuthorizeDBSecurityGroupIngressRequest req = new GETAuthorizeDBSecurityGroupIngressRequest(GETAuthorizeDBSecurityGroupIngressActionEnum.AUTHORIZE_DB_SECURITY_GROUP_INGRESS, "placeat", GETAuthorizeDBSecurityGroupIngressVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                cidrip = "voluptatum";
                ec2SecurityGroupId = "iusto";
                ec2SecurityGroupName = "excepturi";
                ec2SecurityGroupOwnerId = "nisi";
                xAmzAlgorithm = "recusandae";
                xAmzContentSha256 = "temporibus";
                xAmzCredential = "ab";
                xAmzDate = "quis";
                xAmzSecurityToken = "veritatis";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "perferendis";
            }};            

            GETAuthorizeDBSecurityGroupIngressResponse res = sdk.sdk.getAuthorizeDBSecurityGroupIngress(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCopyDBSnapshot

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETCopyDBSnapshotActionEnum;
import org.openapis.openapi.models.operations.GETCopyDBSnapshotRequest;
import org.openapis.openapi.models.operations.GETCopyDBSnapshotResponse;
import org.openapis.openapi.models.operations.GETCopyDBSnapshotVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETCopyDBSnapshotRequest req = new GETCopyDBSnapshotRequest(GETCopyDBSnapshotActionEnum.COPY_DB_SNAPSHOT, "repellendus", "sapiente", GETCopyDBSnapshotVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "odit";
                xAmzCredential = "at";
                xAmzDate = "at";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "quod";
            }};            

            GETCopyDBSnapshotResponse res = sdk.sdk.getCopyDBSnapshot(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCreateDBInstance

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETCreateDBInstanceActionEnum;
import org.openapis.openapi.models.operations.GETCreateDBInstanceRequest;
import org.openapis.openapi.models.operations.GETCreateDBInstanceResponse;
import org.openapis.openapi.models.operations.GETCreateDBInstanceVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETCreateDBInstanceRequest req = new GETCreateDBInstanceRequest(GETCreateDBInstanceActionEnum.CREATE_DB_INSTANCE, 461479L, "totam", "porro", "dolorum", "dicta", "nam", GETCreateDBInstanceVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                autoMinorVersionUpgrade = false;
                availabilityZone = "officia";
                backupRetentionPeriod = 582020L;
                characterSetName = "fugit";
                dbName = "deleniti";
                dbParameterGroupName = "hic";
                dbSecurityGroups = new String[]{{
                    add("totam"),
                    add("beatae"),
                    add("commodi"),
                    add("molestiae"),
                }};
                dbSubnetGroupName = "modi";
                engineVersion = "qui";
                iops = 774234L;
                licenseModel = "cum";
                multiAZ = false;
                optionGroupName = "esse";
                port = 216550L;
                preferredBackupWindow = "excepturi";
                preferredMaintenanceWindow = "aspernatur";
                publiclyAccessible = false;
                vpcSecurityGroupIds = new String[]{{
                    add("ad"),
                }};
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "sed";
                xAmzCredential = "iste";
                xAmzDate = "dolor";
                xAmzSecurityToken = "natus";
                xAmzSignature = "laboriosam";
                xAmzSignedHeaders = "hic";
            }};            

            GETCreateDBInstanceResponse res = sdk.sdk.getCreateDBInstance(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCreateDBInstanceReadReplica

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETCreateDBInstanceReadReplicaActionEnum;
import org.openapis.openapi.models.operations.GETCreateDBInstanceReadReplicaRequest;
import org.openapis.openapi.models.operations.GETCreateDBInstanceReadReplicaResponse;
import org.openapis.openapi.models.operations.GETCreateDBInstanceReadReplicaVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETCreateDBInstanceReadReplicaRequest req = new GETCreateDBInstanceReadReplicaRequest(GETCreateDBInstanceReadReplicaActionEnum.CREATE_DB_INSTANCE_READ_REPLICA, "fuga", "in", GETCreateDBInstanceReadReplicaVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                autoMinorVersionUpgrade = false;
                availabilityZone = "corporis";
                dbInstanceClass = "iste";
                iops = 437032L;
                optionGroupName = "saepe";
                port = 697631L;
                publiclyAccessible = false;
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "reiciendis";
                xAmzDate = "est";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "dolores";
            }};            

            GETCreateDBInstanceReadReplicaResponse res = sdk.sdk.getCreateDBInstanceReadReplica(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCreateDBParameterGroup

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETCreateDBParameterGroupActionEnum;
import org.openapis.openapi.models.operations.GETCreateDBParameterGroupRequest;
import org.openapis.openapi.models.operations.GETCreateDBParameterGroupResponse;
import org.openapis.openapi.models.operations.GETCreateDBParameterGroupVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETCreateDBParameterGroupRequest req = new GETCreateDBParameterGroupRequest(GETCreateDBParameterGroupActionEnum.CREATE_DB_PARAMETER_GROUP, "corporis", "explicabo", "nobis", GETCreateDBParameterGroupVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "nemo";
                xAmzDate = "minima";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "iure";
            }};            

            GETCreateDBParameterGroupResponse res = sdk.sdk.getCreateDBParameterGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCreateDBSecurityGroup

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETCreateDBSecurityGroupActionEnum;
import org.openapis.openapi.models.operations.GETCreateDBSecurityGroupRequest;
import org.openapis.openapi.models.operations.GETCreateDBSecurityGroupResponse;
import org.openapis.openapi.models.operations.GETCreateDBSecurityGroupVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETCreateDBSecurityGroupRequest req = new GETCreateDBSecurityGroupRequest(GETCreateDBSecurityGroupActionEnum.CREATE_DB_SECURITY_GROUP, "doloribus", "sapiente", GETCreateDBSecurityGroupVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "dolorem";
                xAmzDate = "culpa";
                xAmzSecurityToken = "consequuntur";
                xAmzSignature = "repellat";
                xAmzSignedHeaders = "mollitia";
            }};            

            GETCreateDBSecurityGroupResponse res = sdk.sdk.getCreateDBSecurityGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCreateDBSnapshot

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETCreateDBSnapshotActionEnum;
import org.openapis.openapi.models.operations.GETCreateDBSnapshotRequest;
import org.openapis.openapi.models.operations.GETCreateDBSnapshotResponse;
import org.openapis.openapi.models.operations.GETCreateDBSnapshotVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETCreateDBSnapshotRequest req = new GETCreateDBSnapshotRequest(GETCreateDBSnapshotActionEnum.CREATE_DB_SNAPSHOT, "numquam", "commodi", GETCreateDBSnapshotVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                xAmzAlgorithm = "quam";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "velit";
                xAmzDate = "error";
                xAmzSecurityToken = "quia";
                xAmzSignature = "quis";
                xAmzSignedHeaders = "vitae";
            }};            

            GETCreateDBSnapshotResponse res = sdk.sdk.getCreateDBSnapshot(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCreateDBSubnetGroup

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETCreateDBSubnetGroupActionEnum;
import org.openapis.openapi.models.operations.GETCreateDBSubnetGroupRequest;
import org.openapis.openapi.models.operations.GETCreateDBSubnetGroupResponse;
import org.openapis.openapi.models.operations.GETCreateDBSubnetGroupVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETCreateDBSubnetGroupRequest req = new GETCreateDBSubnetGroupRequest(GETCreateDBSubnetGroupActionEnum.CREATE_DB_SUBNET_GROUP, "animi", "enim",                 new String[]{{
                                add("quo"),
                            }}, GETCreateDBSubnetGroupVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                xAmzAlgorithm = "sequi";
                xAmzContentSha256 = "tenetur";
                xAmzCredential = "ipsam";
                xAmzDate = "id";
                xAmzSecurityToken = "possimus";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "quasi";
            }};            

            GETCreateDBSubnetGroupResponse res = sdk.sdk.getCreateDBSubnetGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCreateEventSubscription

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETCreateEventSubscriptionActionEnum;
import org.openapis.openapi.models.operations.GETCreateEventSubscriptionRequest;
import org.openapis.openapi.models.operations.GETCreateEventSubscriptionResponse;
import org.openapis.openapi.models.operations.GETCreateEventSubscriptionVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETCreateEventSubscriptionRequest req = new GETCreateEventSubscriptionRequest(GETCreateEventSubscriptionActionEnum.CREATE_EVENT_SUBSCRIPTION, "temporibus", "laborum", GETCreateEventSubscriptionVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                enabled = false;
                eventCategories = new String[]{{
                    add("reiciendis"),
                }};
                sourceIds = new String[]{{
                    add("vero"),
                    add("nihil"),
                    add("praesentium"),
                    add("voluptatibus"),
                }};
                sourceType = "ipsa";
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "cum";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "doloremque";
                xAmzSignature = "reprehenderit";
                xAmzSignedHeaders = "ut";
            }};            

            GETCreateEventSubscriptionResponse res = sdk.sdk.getCreateEventSubscription(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCreateOptionGroup

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETCreateOptionGroupActionEnum;
import org.openapis.openapi.models.operations.GETCreateOptionGroupRequest;
import org.openapis.openapi.models.operations.GETCreateOptionGroupResponse;
import org.openapis.openapi.models.operations.GETCreateOptionGroupVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETCreateOptionGroupRequest req = new GETCreateOptionGroupRequest(GETCreateOptionGroupActionEnum.CREATE_OPTION_GROUP, "dicta", "corporis", "dolore", "iusto", GETCreateOptionGroupVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "harum";
                xAmzCredential = "enim";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "commodi";
                xAmzSignature = "repudiandae";
                xAmzSignedHeaders = "quae";
            }};            

            GETCreateOptionGroupResponse res = sdk.sdk.getCreateOptionGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteDBInstance

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteDBInstanceActionEnum;
import org.openapis.openapi.models.operations.GETDeleteDBInstanceRequest;
import org.openapis.openapi.models.operations.GETDeleteDBInstanceResponse;
import org.openapis.openapi.models.operations.GETDeleteDBInstanceVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteDBInstanceRequest req = new GETDeleteDBInstanceRequest(GETDeleteDBInstanceActionEnum.DELETE_DB_INSTANCE, "quidem", GETDeleteDBInstanceVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                finalDBSnapshotIdentifier = "molestias";
                skipFinalSnapshot = false;
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "modi";
                xAmzDate = "praesentium";
                xAmzSecurityToken = "rem";
                xAmzSignature = "voluptates";
                xAmzSignedHeaders = "quasi";
            }};            

            GETDeleteDBInstanceResponse res = sdk.sdk.getDeleteDBInstance(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteDBParameterGroup

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteDBParameterGroupActionEnum;
import org.openapis.openapi.models.operations.GETDeleteDBParameterGroupRequest;
import org.openapis.openapi.models.operations.GETDeleteDBParameterGroupResponse;
import org.openapis.openapi.models.operations.GETDeleteDBParameterGroupVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteDBParameterGroupRequest req = new GETDeleteDBParameterGroupRequest(GETDeleteDBParameterGroupActionEnum.DELETE_DB_PARAMETER_GROUP, "sint", GETDeleteDBParameterGroupVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "itaque";
                xAmzCredential = "incidunt";
                xAmzDate = "enim";
                xAmzSecurityToken = "consequatur";
                xAmzSignature = "est";
                xAmzSignedHeaders = "quibusdam";
            }};            

            GETDeleteDBParameterGroupResponse res = sdk.sdk.getDeleteDBParameterGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteDBSecurityGroup

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteDBSecurityGroupActionEnum;
import org.openapis.openapi.models.operations.GETDeleteDBSecurityGroupRequest;
import org.openapis.openapi.models.operations.GETDeleteDBSecurityGroupResponse;
import org.openapis.openapi.models.operations.GETDeleteDBSecurityGroupVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteDBSecurityGroupRequest req = new GETDeleteDBSecurityGroupRequest(GETDeleteDBSecurityGroupActionEnum.DELETE_DB_SECURITY_GROUP, "deserunt", GETDeleteDBSecurityGroupVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "labore";
                xAmzDate = "modi";
                xAmzSecurityToken = "qui";
                xAmzSignature = "aliquid";
                xAmzSignedHeaders = "cupiditate";
            }};            

            GETDeleteDBSecurityGroupResponse res = sdk.sdk.getDeleteDBSecurityGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteDBSnapshot

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteDBSnapshotActionEnum;
import org.openapis.openapi.models.operations.GETDeleteDBSnapshotRequest;
import org.openapis.openapi.models.operations.GETDeleteDBSnapshotResponse;
import org.openapis.openapi.models.operations.GETDeleteDBSnapshotVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteDBSnapshotRequest req = new GETDeleteDBSnapshotRequest(GETDeleteDBSnapshotActionEnum.DELETE_DB_SNAPSHOT, "perferendis", GETDeleteDBSnapshotVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                xAmzAlgorithm = "magni";
                xAmzContentSha256 = "assumenda";
                xAmzCredential = "ipsam";
                xAmzDate = "alias";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "excepturi";
            }};            

            GETDeleteDBSnapshotResponse res = sdk.sdk.getDeleteDBSnapshot(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteDBSubnetGroup

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteDBSubnetGroupActionEnum;
import org.openapis.openapi.models.operations.GETDeleteDBSubnetGroupRequest;
import org.openapis.openapi.models.operations.GETDeleteDBSubnetGroupResponse;
import org.openapis.openapi.models.operations.GETDeleteDBSubnetGroupVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteDBSubnetGroupRequest req = new GETDeleteDBSubnetGroupRequest(GETDeleteDBSubnetGroupActionEnum.DELETE_DB_SUBNET_GROUP, "facilis", GETDeleteDBSubnetGroupVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                xAmzAlgorithm = "tempore";
                xAmzContentSha256 = "labore";
                xAmzCredential = "delectus";
                xAmzDate = "eum";
                xAmzSecurityToken = "non";
                xAmzSignature = "eligendi";
                xAmzSignedHeaders = "sint";
            }};            

            GETDeleteDBSubnetGroupResponse res = sdk.sdk.getDeleteDBSubnetGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteEventSubscription

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteEventSubscriptionActionEnum;
import org.openapis.openapi.models.operations.GETDeleteEventSubscriptionRequest;
import org.openapis.openapi.models.operations.GETDeleteEventSubscriptionResponse;
import org.openapis.openapi.models.operations.GETDeleteEventSubscriptionVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteEventSubscriptionRequest req = new GETDeleteEventSubscriptionRequest(GETDeleteEventSubscriptionActionEnum.DELETE_EVENT_SUBSCRIPTION, "provident", GETDeleteEventSubscriptionVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                xAmzAlgorithm = "necessitatibus";
                xAmzContentSha256 = "sint";
                xAmzCredential = "officia";
                xAmzDate = "dolor";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "a";
                xAmzSignedHeaders = "dolorum";
            }};            

            GETDeleteEventSubscriptionResponse res = sdk.sdk.getDeleteEventSubscription(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteOptionGroup

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteOptionGroupActionEnum;
import org.openapis.openapi.models.operations.GETDeleteOptionGroupRequest;
import org.openapis.openapi.models.operations.GETDeleteOptionGroupResponse;
import org.openapis.openapi.models.operations.GETDeleteOptionGroupVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteOptionGroupRequest req = new GETDeleteOptionGroupRequest(GETDeleteOptionGroupActionEnum.DELETE_OPTION_GROUP, "in", GETDeleteOptionGroupVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "rerum";
                xAmzDate = "dicta";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "cumque";
                xAmzSignedHeaders = "facere";
            }};            

            GETDeleteOptionGroupResponse res = sdk.sdk.getDeleteOptionGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeDBEngineVersions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeDBEngineVersionsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeDBEngineVersionsRequest;
import org.openapis.openapi.models.operations.GETDescribeDBEngineVersionsResponse;
import org.openapis.openapi.models.operations.GETDescribeDBEngineVersionsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeDBEngineVersionsRequest req = new GETDescribeDBEngineVersionsRequest(GETDescribeDBEngineVersionsActionEnum.DESCRIBE_DB_ENGINE_VERSIONS, GETDescribeDBEngineVersionsVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                dbParameterGroupFamily = "aliquid";
                defaultOnly = false;
                engine = "laborum";
                engineVersion = "accusamus";
                listSupportedCharacterSets = false;
                marker = "non";
                maxRecords = 581273L;
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "delectus";
                xAmzDate = "quidem";
                xAmzSecurityToken = "provident";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "id";
            }};            

            GETDescribeDBEngineVersionsResponse res = sdk.sdk.getDescribeDBEngineVersions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeDBInstances

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeDBInstancesActionEnum;
import org.openapis.openapi.models.operations.GETDescribeDBInstancesRequest;
import org.openapis.openapi.models.operations.GETDescribeDBInstancesResponse;
import org.openapis.openapi.models.operations.GETDescribeDBInstancesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("blanditiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeDBInstancesRequest req = new GETDescribeDBInstancesRequest(GETDescribeDBInstancesActionEnum.DESCRIBE_DB_INSTANCES, GETDescribeDBInstancesVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                dbInstanceIdentifier = "deleniti";
                marker = "sapiente";
                maxRecords = 230533L;
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "nisi";
                xAmzCredential = "vel";
                xAmzDate = "natus";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "perferendis";
            }};            

            GETDescribeDBInstancesResponse res = sdk.sdk.getDescribeDBInstances(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeDBLogFiles

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeDBLogFilesActionEnum;
import org.openapis.openapi.models.operations.GETDescribeDBLogFilesRequest;
import org.openapis.openapi.models.operations.GETDescribeDBLogFilesResponse;
import org.openapis.openapi.models.operations.GETDescribeDBLogFilesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeDBLogFilesRequest req = new GETDescribeDBLogFilesRequest(GETDescribeDBLogFilesActionEnum.DESCRIBE_DB_LOG_FILES, "magnam", GETDescribeDBLogFilesVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                fileLastWritten = 716075L;
                fileSize = 660174L;
                filenameContains = "labore";
                marker = "labore";
                maxRecords = 383462L;
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "eum";
                xAmzDate = "vero";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "magnam";
            }};            

            GETDescribeDBLogFilesResponse res = sdk.sdk.getDescribeDBLogFiles(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeDBParameterGroups

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeDBParameterGroupsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeDBParameterGroupsRequest;
import org.openapis.openapi.models.operations.GETDescribeDBParameterGroupsResponse;
import org.openapis.openapi.models.operations.GETDescribeDBParameterGroupsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeDBParameterGroupsRequest req = new GETDescribeDBParameterGroupsRequest(GETDescribeDBParameterGroupsActionEnum.DESCRIBE_DB_PARAMETER_GROUPS, GETDescribeDBParameterGroupsVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                dbParameterGroupName = "excepturi";
                marker = "ullam";
                maxRecords = 590873L;
                xAmzAlgorithm = "quos";
                xAmzContentSha256 = "sint";
                xAmzCredential = "accusantium";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "ad";
            }};            

            GETDescribeDBParameterGroupsResponse res = sdk.sdk.getDescribeDBParameterGroups(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeDBParameters

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeDBParametersActionEnum;
import org.openapis.openapi.models.operations.GETDescribeDBParametersRequest;
import org.openapis.openapi.models.operations.GETDescribeDBParametersResponse;
import org.openapis.openapi.models.operations.GETDescribeDBParametersVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeDBParametersRequest req = new GETDescribeDBParametersRequest(GETDescribeDBParametersActionEnum.DESCRIBE_DB_PARAMETERS, "dolor", GETDescribeDBParametersVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                marker = "necessitatibus";
                maxRecords = 141264L;
                source = "nemo";
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "iure";
                xAmzCredential = "doloribus";
                xAmzDate = "debitis";
                xAmzSecurityToken = "eius";
                xAmzSignature = "maxime";
                xAmzSignedHeaders = "deleniti";
            }};            

            GETDescribeDBParametersResponse res = sdk.sdk.getDescribeDBParameters(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeDBSecurityGroups

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeDBSecurityGroupsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeDBSecurityGroupsRequest;
import org.openapis.openapi.models.operations.GETDescribeDBSecurityGroupsResponse;
import org.openapis.openapi.models.operations.GETDescribeDBSecurityGroupsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeDBSecurityGroupsRequest req = new GETDescribeDBSecurityGroupsRequest(GETDescribeDBSecurityGroupsActionEnum.DESCRIBE_DB_SECURITY_GROUPS, GETDescribeDBSecurityGroupsVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                dbSecurityGroupName = "in";
                marker = "architecto";
                maxRecords = 99569L;
                xAmzAlgorithm = "repudiandae";
                xAmzContentSha256 = "ullam";
                xAmzCredential = "expedita";
                xAmzDate = "nihil";
                xAmzSecurityToken = "repellat";
                xAmzSignature = "quibusdam";
                xAmzSignedHeaders = "sed";
            }};            

            GETDescribeDBSecurityGroupsResponse res = sdk.sdk.getDescribeDBSecurityGroups(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeDBSnapshots

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeDBSnapshotsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeDBSnapshotsRequest;
import org.openapis.openapi.models.operations.GETDescribeDBSnapshotsResponse;
import org.openapis.openapi.models.operations.GETDescribeDBSnapshotsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeDBSnapshotsRequest req = new GETDescribeDBSnapshotsRequest(GETDescribeDBSnapshotsActionEnum.DESCRIBE_DB_SNAPSHOTS, GETDescribeDBSnapshotsVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                dbInstanceIdentifier = "pariatur";
                dbSnapshotIdentifier = "accusantium";
                marker = "consequuntur";
                maxRecords = 508315L;
                snapshotType = "natus";
                xAmzAlgorithm = "magni";
                xAmzContentSha256 = "sunt";
                xAmzCredential = "quo";
                xAmzDate = "illum";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "maxime";
                xAmzSignedHeaders = "ea";
            }};            

            GETDescribeDBSnapshotsResponse res = sdk.sdk.getDescribeDBSnapshots(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeDBSubnetGroups

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeDBSubnetGroupsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeDBSubnetGroupsRequest;
import org.openapis.openapi.models.operations.GETDescribeDBSubnetGroupsResponse;
import org.openapis.openapi.models.operations.GETDescribeDBSubnetGroupsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeDBSubnetGroupsRequest req = new GETDescribeDBSubnetGroupsRequest(GETDescribeDBSubnetGroupsActionEnum.DESCRIBE_DB_SUBNET_GROUPS, GETDescribeDBSubnetGroupsVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                dbSubnetGroupName = "odit";
                marker = "ea";
                maxRecords = 33222L;
                xAmzAlgorithm = "ab";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "quidem";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "autem";
                xAmzSignedHeaders = "nam";
            }};            

            GETDescribeDBSubnetGroupsResponse res = sdk.sdk.getDescribeDBSubnetGroups(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeEngineDefaultParameters

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeEngineDefaultParametersActionEnum;
import org.openapis.openapi.models.operations.GETDescribeEngineDefaultParametersRequest;
import org.openapis.openapi.models.operations.GETDescribeEngineDefaultParametersResponse;
import org.openapis.openapi.models.operations.GETDescribeEngineDefaultParametersVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeEngineDefaultParametersRequest req = new GETDescribeEngineDefaultParametersRequest(GETDescribeEngineDefaultParametersActionEnum.DESCRIBE_ENGINE_DEFAULT_PARAMETERS, "pariatur", GETDescribeEngineDefaultParametersVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                marker = "nemo";
                maxRecords = 975522L;
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "fugiat";
                xAmzCredential = "amet";
                xAmzDate = "aut";
                xAmzSecurityToken = "cumque";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "hic";
            }};            

            GETDescribeEngineDefaultParametersResponse res = sdk.sdk.getDescribeEngineDefaultParameters(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeEventCategories

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeEventCategoriesActionEnum;
import org.openapis.openapi.models.operations.GETDescribeEventCategoriesRequest;
import org.openapis.openapi.models.operations.GETDescribeEventCategoriesResponse;
import org.openapis.openapi.models.operations.GETDescribeEventCategoriesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeEventCategoriesRequest req = new GETDescribeEventCategoriesRequest(GETDescribeEventCategoriesActionEnum.DESCRIBE_EVENT_CATEGORIES, GETDescribeEventCategoriesVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                sourceType = "nobis";
                xAmzAlgorithm = "dolores";
                xAmzContentSha256 = "quis";
                xAmzCredential = "totam";
                xAmzDate = "dignissimos";
                xAmzSecurityToken = "eaque";
                xAmzSignature = "quis";
                xAmzSignedHeaders = "nesciunt";
            }};            

            GETDescribeEventCategoriesResponse res = sdk.sdk.getDescribeEventCategories(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeEventSubscriptions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeEventSubscriptionsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeEventSubscriptionsRequest;
import org.openapis.openapi.models.operations.GETDescribeEventSubscriptionsResponse;
import org.openapis.openapi.models.operations.GETDescribeEventSubscriptionsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeEventSubscriptionsRequest req = new GETDescribeEventSubscriptionsRequest(GETDescribeEventSubscriptionsActionEnum.DESCRIBE_EVENT_SUBSCRIPTIONS, GETDescribeEventSubscriptionsVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                marker = "perferendis";
                maxRecords = 170986L;
                subscriptionName = "minus";
                xAmzAlgorithm = "quam";
                xAmzContentSha256 = "dolor";
                xAmzCredential = "vero";
                xAmzDate = "nostrum";
                xAmzSecurityToken = "hic";
                xAmzSignature = "recusandae";
                xAmzSignedHeaders = "omnis";
            }};            

            GETDescribeEventSubscriptionsResponse res = sdk.sdk.getDescribeEventSubscriptions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeEvents

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeEventsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeEventsRequest;
import org.openapis.openapi.models.operations.GETDescribeEventsResponse;
import org.openapis.openapi.models.operations.GETDescribeEventsSourceTypeEnum;
import org.openapis.openapi.models.operations.GETDescribeEventsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeEventsRequest req = new GETDescribeEventsRequest(GETDescribeEventsActionEnum.DESCRIBE_EVENTS, GETDescribeEventsVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                duration = 596656L;
                endTime = OffsetDateTime.parse("2022-03-20T23:16:34.777Z");
                eventCategories = new String[]{{
                    add("blanditiis"),
                }};
                marker = "error";
                maxRecords = 50370L;
                sourceIdentifier = "occaecati";
                sourceType = GETDescribeEventsSourceTypeEnum.DB_SECURITY_GROUP;
                startTime = OffsetDateTime.parse("2022-01-03T18:36:27.259Z");
                xAmzAlgorithm = "earum";
                xAmzContentSha256 = "modi";
                xAmzCredential = "iste";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "provident";
            }};            

            GETDescribeEventsResponse res = sdk.sdk.getDescribeEvents(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeOptionGroupOptions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeOptionGroupOptionsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeOptionGroupOptionsRequest;
import org.openapis.openapi.models.operations.GETDescribeOptionGroupOptionsResponse;
import org.openapis.openapi.models.operations.GETDescribeOptionGroupOptionsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeOptionGroupOptionsRequest req = new GETDescribeOptionGroupOptionsRequest(GETDescribeOptionGroupOptionsActionEnum.DESCRIBE_OPTION_GROUP_OPTIONS, "libero", GETDescribeOptionGroupOptionsVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                majorEngineVersion = "delectus";
                marker = "quaerat";
                maxRecords = 554242L;
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "dolorem";
                xAmzCredential = "dolorem";
                xAmzDate = "dolor";
                xAmzSecurityToken = "qui";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "hic";
            }};            

            GETDescribeOptionGroupOptionsResponse res = sdk.sdk.getDescribeOptionGroupOptions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeOptionGroups

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeOptionGroupsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeOptionGroupsRequest;
import org.openapis.openapi.models.operations.GETDescribeOptionGroupsResponse;
import org.openapis.openapi.models.operations.GETDescribeOptionGroupsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeOptionGroupsRequest req = new GETDescribeOptionGroupsRequest(GETDescribeOptionGroupsActionEnum.DESCRIBE_OPTION_GROUPS, GETDescribeOptionGroupsVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                engineName = "cum";
                majorEngineVersion = "voluptate";
                marker = "dignissimos";
                maxRecords = 970237L;
                optionGroupName = "amet";
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "numquam";
                xAmzCredential = "veritatis";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "odio";
            }};            

            GETDescribeOptionGroupsResponse res = sdk.sdk.getDescribeOptionGroups(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeOrderableDBInstanceOptions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeOrderableDBInstanceOptionsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeOrderableDBInstanceOptionsRequest;
import org.openapis.openapi.models.operations.GETDescribeOrderableDBInstanceOptionsResponse;
import org.openapis.openapi.models.operations.GETDescribeOrderableDBInstanceOptionsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quaerat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeOrderableDBInstanceOptionsRequest req = new GETDescribeOrderableDBInstanceOptionsRequest(GETDescribeOrderableDBInstanceOptionsActionEnum.DESCRIBE_ORDERABLE_DB_INSTANCE_OPTIONS, "accusamus", GETDescribeOrderableDBInstanceOptionsVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                dbInstanceClass = "quidem";
                engineVersion = "voluptatibus";
                licenseModel = "voluptas";
                marker = "natus";
                maxRecords = 179603L;
                vpc = false;
                xAmzAlgorithm = "atque";
                xAmzContentSha256 = "sit";
                xAmzCredential = "fugiat";
                xAmzDate = "ab";
                xAmzSecurityToken = "soluta";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "iusto";
            }};            

            GETDescribeOrderableDBInstanceOptionsResponse res = sdk.sdk.getDescribeOrderableDBInstanceOptions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeReservedDBInstances

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeReservedDBInstancesActionEnum;
import org.openapis.openapi.models.operations.GETDescribeReservedDBInstancesRequest;
import org.openapis.openapi.models.operations.GETDescribeReservedDBInstancesResponse;
import org.openapis.openapi.models.operations.GETDescribeReservedDBInstancesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeReservedDBInstancesRequest req = new GETDescribeReservedDBInstancesRequest(GETDescribeReservedDBInstancesActionEnum.DESCRIBE_RESERVED_DB_INSTANCES, GETDescribeReservedDBInstancesVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                dbInstanceClass = "dolorum";
                duration = "deleniti";
                marker = "omnis";
                maxRecords = 896672L;
                multiAZ = false;
                offeringType = "distinctio";
                productDescription = "asperiores";
                reservedDBInstanceId = "nihil";
                reservedDBInstancesOfferingId = "ipsum";
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "id";
                xAmzCredential = "saepe";
                xAmzDate = "eius";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "amet";
            }};            

            GETDescribeReservedDBInstancesResponse res = sdk.sdk.getDescribeReservedDBInstances(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeReservedDBInstancesOfferings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeReservedDBInstancesOfferingsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeReservedDBInstancesOfferingsRequest;
import org.openapis.openapi.models.operations.GETDescribeReservedDBInstancesOfferingsResponse;
import org.openapis.openapi.models.operations.GETDescribeReservedDBInstancesOfferingsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("optio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeReservedDBInstancesOfferingsRequest req = new GETDescribeReservedDBInstancesOfferingsRequest(GETDescribeReservedDBInstancesOfferingsActionEnum.DESCRIBE_RESERVED_DB_INSTANCES_OFFERINGS, GETDescribeReservedDBInstancesOfferingsVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                dbInstanceClass = "accusamus";
                duration = "ad";
                marker = "saepe";
                maxRecords = 383464L;
                multiAZ = false;
                offeringType = "deserunt";
                productDescription = "provident";
                reservedDBInstancesOfferingId = "minima";
                xAmzAlgorithm = "repellendus";
                xAmzContentSha256 = "totam";
                xAmzCredential = "similique";
                xAmzDate = "alias";
                xAmzSecurityToken = "at";
                xAmzSignature = "quaerat";
                xAmzSignedHeaders = "tempora";
            }};            

            GETDescribeReservedDBInstancesOfferingsResponse res = sdk.sdk.getDescribeReservedDBInstancesOfferings(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDownloadDBLogFilePortion

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDownloadDBLogFilePortionActionEnum;
import org.openapis.openapi.models.operations.GETDownloadDBLogFilePortionRequest;
import org.openapis.openapi.models.operations.GETDownloadDBLogFilePortionResponse;
import org.openapis.openapi.models.operations.GETDownloadDBLogFilePortionVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDownloadDBLogFilePortionRequest req = new GETDownloadDBLogFilePortionRequest(GETDownloadDBLogFilePortionActionEnum.DOWNLOAD_DB_LOG_FILE_PORTION, "quod", "officiis", GETDownloadDBLogFilePortionVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                marker = "qui";
                numberOfLines = 679880L;
                xAmzAlgorithm = "a";
                xAmzContentSha256 = "esse";
                xAmzCredential = "harum";
                xAmzDate = "iusto";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "quisquam";
                xAmzSignedHeaders = "tenetur";
            }};            

            GETDownloadDBLogFilePortionResponse res = sdk.sdk.getDownloadDBLogFilePortion(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListTagsForResource

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListTagsForResourceActionEnum;
import org.openapis.openapi.models.operations.GETListTagsForResourceRequest;
import org.openapis.openapi.models.operations.GETListTagsForResourceResponse;
import org.openapis.openapi.models.operations.GETListTagsForResourceVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListTagsForResourceRequest req = new GETListTagsForResourceRequest(GETListTagsForResourceActionEnum.LIST_TAGS_FOR_RESOURCE, "tempore", GETListTagsForResourceVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "numquam";
                xAmzCredential = "enim";
                xAmzDate = "dolorem";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "nihil";
            }};            

            GETListTagsForResourceResponse res = sdk.sdk.getListTagsForResource(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getModifyDBInstance

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETModifyDBInstanceActionEnum;
import org.openapis.openapi.models.operations.GETModifyDBInstanceRequest;
import org.openapis.openapi.models.operations.GETModifyDBInstanceResponse;
import org.openapis.openapi.models.operations.GETModifyDBInstanceVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETModifyDBInstanceRequest req = new GETModifyDBInstanceRequest(GETModifyDBInstanceActionEnum.MODIFY_DB_INSTANCE, "expedita", GETModifyDBInstanceVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                allocatedStorage = 207470L;
                allowMajorVersionUpgrade = false;
                applyImmediately = false;
                autoMinorVersionUpgrade = false;
                backupRetentionPeriod = 153694L;
                dbInstanceClass = "vel";
                dbParameterGroupName = "libero";
                dbSecurityGroups = new String[]{{
                    add("deserunt"),
                    add("quam"),
                }};
                engineVersion = "ipsum";
                iops = 277628L;
                masterUserPassword = "qui";
                multiAZ = false;
                newDBInstanceIdentifier = "cupiditate";
                optionGroupName = "maxime";
                preferredBackupWindow = "pariatur";
                preferredMaintenanceWindow = "soluta";
                vpcSecurityGroupIds = new String[]{{
                    add("laborum"),
                }};
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "incidunt";
                xAmzCredential = "aspernatur";
                xAmzDate = "dolores";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "aliquid";
            }};            

            GETModifyDBInstanceResponse res = sdk.sdk.getModifyDBInstance(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getModifyDBSubnetGroup

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETModifyDBSubnetGroupActionEnum;
import org.openapis.openapi.models.operations.GETModifyDBSubnetGroupRequest;
import org.openapis.openapi.models.operations.GETModifyDBSubnetGroupResponse;
import org.openapis.openapi.models.operations.GETModifyDBSubnetGroupVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETModifyDBSubnetGroupRequest req = new GETModifyDBSubnetGroupRequest(GETModifyDBSubnetGroupActionEnum.MODIFY_DB_SUBNET_GROUP, "molestias",                 new String[]{{
                                add("qui"),
                                add("neque"),
                                add("fugit"),
                                add("magni"),
                            }}, GETModifyDBSubnetGroupVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                dbSubnetGroupDescription = "odio";
                xAmzAlgorithm = "sunt";
                xAmzContentSha256 = "ullam";
                xAmzCredential = "nam";
                xAmzDate = "hic";
                xAmzSecurityToken = "voluptatem";
                xAmzSignature = "cumque";
                xAmzSignedHeaders = "soluta";
            }};            

            GETModifyDBSubnetGroupResponse res = sdk.sdk.getModifyDBSubnetGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getModifyEventSubscription

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETModifyEventSubscriptionActionEnum;
import org.openapis.openapi.models.operations.GETModifyEventSubscriptionRequest;
import org.openapis.openapi.models.operations.GETModifyEventSubscriptionResponse;
import org.openapis.openapi.models.operations.GETModifyEventSubscriptionVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETModifyEventSubscriptionRequest req = new GETModifyEventSubscriptionRequest(GETModifyEventSubscriptionActionEnum.MODIFY_EVENT_SUBSCRIPTION, "et", GETModifyEventSubscriptionVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                enabled = false;
                eventCategories = new String[]{{
                    add("ipsum"),
                    add("veritatis"),
                    add("nobis"),
                    add("quos"),
                }};
                snsTopicArn = "tempore";
                sourceType = "cupiditate";
                xAmzAlgorithm = "aperiam";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "dolorem";
                xAmzDate = "dolore";
                xAmzSecurityToken = "labore";
                xAmzSignature = "adipisci";
                xAmzSignedHeaders = "dolorum";
            }};            

            GETModifyEventSubscriptionResponse res = sdk.sdk.getModifyEventSubscription(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPromoteReadReplica

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETPromoteReadReplicaActionEnum;
import org.openapis.openapi.models.operations.GETPromoteReadReplicaRequest;
import org.openapis.openapi.models.operations.GETPromoteReadReplicaResponse;
import org.openapis.openapi.models.operations.GETPromoteReadReplicaVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETPromoteReadReplicaRequest req = new GETPromoteReadReplicaRequest(GETPromoteReadReplicaActionEnum.PROMOTE_READ_REPLICA, "quae", GETPromoteReadReplicaVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                backupRetentionPeriod = 16429L;
                preferredBackupWindow = "quas";
                xAmzAlgorithm = "itaque";
                xAmzContentSha256 = "consequatur";
                xAmzCredential = "est";
                xAmzDate = "repellendus";
                xAmzSecurityToken = "porro";
                xAmzSignature = "doloribus";
                xAmzSignedHeaders = "ut";
            }};            

            GETPromoteReadReplicaResponse res = sdk.sdk.getPromoteReadReplica(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPurchaseReservedDBInstancesOffering

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETPurchaseReservedDBInstancesOfferingActionEnum;
import org.openapis.openapi.models.operations.GETPurchaseReservedDBInstancesOfferingRequest;
import org.openapis.openapi.models.operations.GETPurchaseReservedDBInstancesOfferingResponse;
import org.openapis.openapi.models.operations.GETPurchaseReservedDBInstancesOfferingVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETPurchaseReservedDBInstancesOfferingRequest req = new GETPurchaseReservedDBInstancesOfferingRequest(GETPurchaseReservedDBInstancesOfferingActionEnum.PURCHASE_RESERVED_DB_INSTANCES_OFFERING, "cupiditate", GETPurchaseReservedDBInstancesOfferingVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                dbInstanceCount = 181631L;
                reservedDBInstanceId = "quae";
                xAmzAlgorithm = "laudantium";
                xAmzContentSha256 = "odio";
                xAmzCredential = "occaecati";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "quisquam";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "omnis";
            }};            

            GETPurchaseReservedDBInstancesOfferingResponse res = sdk.sdk.getPurchaseReservedDBInstancesOffering(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRebootDBInstance

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETRebootDBInstanceActionEnum;
import org.openapis.openapi.models.operations.GETRebootDBInstanceRequest;
import org.openapis.openapi.models.operations.GETRebootDBInstanceResponse;
import org.openapis.openapi.models.operations.GETRebootDBInstanceVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRebootDBInstanceRequest req = new GETRebootDBInstanceRequest(GETRebootDBInstanceActionEnum.REBOOT_DB_INSTANCE, "ipsum", GETRebootDBInstanceVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                forceFailover = false;
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "consectetur";
                xAmzDate = "vero";
                xAmzSecurityToken = "tenetur";
                xAmzSignature = "dignissimos";
                xAmzSignedHeaders = "hic";
            }};            

            GETRebootDBInstanceResponse res = sdk.sdk.getRebootDBInstance(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRemoveSourceIdentifierFromSubscription

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETRemoveSourceIdentifierFromSubscriptionActionEnum;
import org.openapis.openapi.models.operations.GETRemoveSourceIdentifierFromSubscriptionRequest;
import org.openapis.openapi.models.operations.GETRemoveSourceIdentifierFromSubscriptionResponse;
import org.openapis.openapi.models.operations.GETRemoveSourceIdentifierFromSubscriptionVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRemoveSourceIdentifierFromSubscriptionRequest req = new GETRemoveSourceIdentifierFromSubscriptionRequest(GETRemoveSourceIdentifierFromSubscriptionActionEnum.REMOVE_SOURCE_IDENTIFIER_FROM_SUBSCRIPTION, "quod", "odio", GETRemoveSourceIdentifierFromSubscriptionVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                xAmzAlgorithm = "similique";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "vero";
                xAmzDate = "ducimus";
                xAmzSecurityToken = "dolore";
                xAmzSignature = "quibusdam";
                xAmzSignedHeaders = "illum";
            }};            

            GETRemoveSourceIdentifierFromSubscriptionResponse res = sdk.sdk.getRemoveSourceIdentifierFromSubscription(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRemoveTagsFromResource

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETRemoveTagsFromResourceActionEnum;
import org.openapis.openapi.models.operations.GETRemoveTagsFromResourceRequest;
import org.openapis.openapi.models.operations.GETRemoveTagsFromResourceResponse;
import org.openapis.openapi.models.operations.GETRemoveTagsFromResourceVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sequi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRemoveTagsFromResourceRequest req = new GETRemoveTagsFromResourceRequest(GETRemoveTagsFromResourceActionEnum.REMOVE_TAGS_FROM_RESOURCE, "natus",                 new String[]{{
                                add("aut"),
                                add("voluptatibus"),
                                add("exercitationem"),
                                add("nulla"),
                            }}, GETRemoveTagsFromResourceVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "porro";
                xAmzCredential = "maiores";
                xAmzDate = "doloribus";
                xAmzSecurityToken = "iusto";
                xAmzSignature = "eligendi";
                xAmzSignedHeaders = "ducimus";
            }};            

            GETRemoveTagsFromResourceResponse res = sdk.sdk.getRemoveTagsFromResource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRestoreDBInstanceFromDBSnapshot

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETRestoreDBInstanceFromDBSnapshotActionEnum;
import org.openapis.openapi.models.operations.GETRestoreDBInstanceFromDBSnapshotRequest;
import org.openapis.openapi.models.operations.GETRestoreDBInstanceFromDBSnapshotResponse;
import org.openapis.openapi.models.operations.GETRestoreDBInstanceFromDBSnapshotVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("alias") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRestoreDBInstanceFromDBSnapshotRequest req = new GETRestoreDBInstanceFromDBSnapshotRequest(GETRestoreDBInstanceFromDBSnapshotActionEnum.RESTORE_DB_INSTANCE_FROM_DB_SNAPSHOT, "officia", "tempora", GETRestoreDBInstanceFromDBSnapshotVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                autoMinorVersionUpgrade = false;
                availabilityZone = "ipsam";
                dbInstanceClass = "ea";
                dbName = "aspernatur";
                dbSubnetGroupName = "vel";
                engine = "possimus";
                iops = 297842L;
                licenseModel = "ratione";
                multiAZ = false;
                optionGroupName = "ex";
                port = 511319L;
                publiclyAccessible = false;
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "dolor";
                xAmzCredential = "maiores";
                xAmzDate = "quasi";
                xAmzSecurityToken = "ex";
                xAmzSignature = "nulla";
                xAmzSignedHeaders = "excepturi";
            }};            

            GETRestoreDBInstanceFromDBSnapshotResponse res = sdk.sdk.getRestoreDBInstanceFromDBSnapshot(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRestoreDBInstanceToPointInTime

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETRestoreDBInstanceToPointInTimeActionEnum;
import org.openapis.openapi.models.operations.GETRestoreDBInstanceToPointInTimeRequest;
import org.openapis.openapi.models.operations.GETRestoreDBInstanceToPointInTimeResponse;
import org.openapis.openapi.models.operations.GETRestoreDBInstanceToPointInTimeVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRestoreDBInstanceToPointInTimeRequest req = new GETRestoreDBInstanceToPointInTimeRequest(GETRestoreDBInstanceToPointInTimeActionEnum.RESTORE_DB_INSTANCE_TO_POINT_IN_TIME, "nostrum", "sapiente", GETRestoreDBInstanceToPointInTimeVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                autoMinorVersionUpgrade = false;
                availabilityZone = "quisquam";
                dbInstanceClass = "saepe";
                dbName = "ea";
                dbSubnetGroupName = "impedit";
                engine = "corporis";
                iops = 333145L;
                licenseModel = "aliquid";
                multiAZ = false;
                optionGroupName = "inventore";
                port = 301831L;
                publiclyAccessible = false;
                restoreTime = OffsetDateTime.parse("2022-03-24T01:04:28.722Z");
                useLatestRestorableTime = false;
                xAmzAlgorithm = "consectetur";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "aspernatur";
                xAmzDate = "minima";
                xAmzSecurityToken = "eaque";
                xAmzSignature = "a";
                xAmzSignedHeaders = "libero";
            }};            

            GETRestoreDBInstanceToPointInTimeResponse res = sdk.sdk.getRestoreDBInstanceToPointInTime(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRevokeDBSecurityGroupIngress

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETRevokeDBSecurityGroupIngressActionEnum;
import org.openapis.openapi.models.operations.GETRevokeDBSecurityGroupIngressRequest;
import org.openapis.openapi.models.operations.GETRevokeDBSecurityGroupIngressResponse;
import org.openapis.openapi.models.operations.GETRevokeDBSecurityGroupIngressVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRevokeDBSecurityGroupIngressRequest req = new GETRevokeDBSecurityGroupIngressRequest(GETRevokeDBSecurityGroupIngressActionEnum.REVOKE_DB_SECURITY_GROUP_INGRESS, "aut", GETRevokeDBSecurityGroupIngressVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                cidrip = "deleniti";
                ec2SecurityGroupId = "impedit";
                ec2SecurityGroupName = "aliquam";
                ec2SecurityGroupOwnerId = "fugit";
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "inventore";
                xAmzCredential = "non";
                xAmzDate = "et";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "placeat";
            }};            

            GETRevokeDBSecurityGroupIngressResponse res = sdk.sdk.getRevokeDBSecurityGroupIngress(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAddSourceIdentifierToSubscription

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTAddSourceIdentifierToSubscriptionActionEnum;
import org.openapis.openapi.models.operations.POSTAddSourceIdentifierToSubscriptionRequest;
import org.openapis.openapi.models.operations.POSTAddSourceIdentifierToSubscriptionResponse;
import org.openapis.openapi.models.operations.POSTAddSourceIdentifierToSubscriptionVersionEnum;
import org.openapis.openapi.models.shared.AddSourceIdentifierToSubscriptionMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("velit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTAddSourceIdentifierToSubscriptionRequest req = new POSTAddSourceIdentifierToSubscriptionRequest(POSTAddSourceIdentifierToSubscriptionActionEnum.ADD_SOURCE_IDENTIFIER_TO_SUBSCRIPTION, POSTAddSourceIdentifierToSubscriptionVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                requestBody = "eum".getBytes();
                xAmzAlgorithm = "autem";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "quas";
                xAmzDate = "assumenda";
                xAmzSecurityToken = "nulla";
                xAmzSignature = "voluptas";
                xAmzSignedHeaders = "libero";
            }};            

            POSTAddSourceIdentifierToSubscriptionResponse res = sdk.sdk.postAddSourceIdentifierToSubscription(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAddTagsToResource

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTAddTagsToResourceActionEnum;
import org.openapis.openapi.models.operations.POSTAddTagsToResourceRequest;
import org.openapis.openapi.models.operations.POSTAddTagsToResourceResponse;
import org.openapis.openapi.models.operations.POSTAddTagsToResourceVersionEnum;
import org.openapis.openapi.models.shared.AddTagsToResourceMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTAddTagsToResourceRequest req = new POSTAddTagsToResourceRequest(POSTAddTagsToResourceActionEnum.ADD_TAGS_TO_RESOURCE, POSTAddTagsToResourceVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                requestBody = "tempora".getBytes();
                xAmzAlgorithm = "numquam";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "provident";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "odio";
            }};            

            POSTAddTagsToResourceResponse res = sdk.sdk.postAddTagsToResource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAuthorizeDBSecurityGroupIngress

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTAuthorizeDBSecurityGroupIngressActionEnum;
import org.openapis.openapi.models.operations.POSTAuthorizeDBSecurityGroupIngressRequest;
import org.openapis.openapi.models.operations.POSTAuthorizeDBSecurityGroupIngressResponse;
import org.openapis.openapi.models.operations.POSTAuthorizeDBSecurityGroupIngressVersionEnum;
import org.openapis.openapi.models.shared.AuthorizeDBSecurityGroupIngressMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTAuthorizeDBSecurityGroupIngressRequest req = new POSTAuthorizeDBSecurityGroupIngressRequest(POSTAuthorizeDBSecurityGroupIngressActionEnum.AUTHORIZE_DB_SECURITY_GROUP_INGRESS, POSTAuthorizeDBSecurityGroupIngressVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                requestBody = "esse".getBytes();
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "rem";
                xAmzCredential = "fuga";
                xAmzDate = "reprehenderit";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "fugiat";
                xAmzSignedHeaders = "ut";
            }};            

            POSTAuthorizeDBSecurityGroupIngressResponse res = sdk.sdk.postAuthorizeDBSecurityGroupIngress(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCopyDBSnapshot

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCopyDBSnapshotActionEnum;
import org.openapis.openapi.models.operations.POSTCopyDBSnapshotRequest;
import org.openapis.openapi.models.operations.POSTCopyDBSnapshotResponse;
import org.openapis.openapi.models.operations.POSTCopyDBSnapshotVersionEnum;
import org.openapis.openapi.models.shared.CopyDBSnapshotMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCopyDBSnapshotRequest req = new POSTCopyDBSnapshotRequest(POSTCopyDBSnapshotActionEnum.COPY_DB_SNAPSHOT, POSTCopyDBSnapshotVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                requestBody = "suscipit".getBytes();
                xAmzAlgorithm = "assumenda";
                xAmzContentSha256 = "eos";
                xAmzCredential = "praesentium";
                xAmzDate = "quisquam";
                xAmzSecurityToken = "veritatis";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "id";
            }};            

            POSTCopyDBSnapshotResponse res = sdk.sdk.postCopyDBSnapshot(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateDBInstance

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateDBInstanceActionEnum;
import org.openapis.openapi.models.operations.POSTCreateDBInstanceRequest;
import org.openapis.openapi.models.operations.POSTCreateDBInstanceResponse;
import org.openapis.openapi.models.operations.POSTCreateDBInstanceVersionEnum;
import org.openapis.openapi.models.shared.CreateDBInstanceMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateDBInstanceRequest req = new POSTCreateDBInstanceRequest(POSTCreateDBInstanceActionEnum.CREATE_DB_INSTANCE, POSTCreateDBInstanceVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                requestBody = "neque".getBytes();
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "illum";
                xAmzCredential = "quo";
                xAmzDate = "fuga";
                xAmzSecurityToken = "eius";
                xAmzSignature = "eos";
                xAmzSignedHeaders = "voluptas";
            }};            

            POSTCreateDBInstanceResponse res = sdk.sdk.postCreateDBInstance(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateDBInstanceReadReplica

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateDBInstanceReadReplicaActionEnum;
import org.openapis.openapi.models.operations.POSTCreateDBInstanceReadReplicaRequest;
import org.openapis.openapi.models.operations.POSTCreateDBInstanceReadReplicaResponse;
import org.openapis.openapi.models.operations.POSTCreateDBInstanceReadReplicaVersionEnum;
import org.openapis.openapi.models.shared.CreateDBInstanceReadReplicaMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ab") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateDBInstanceReadReplicaRequest req = new POSTCreateDBInstanceReadReplicaRequest(POSTCreateDBInstanceReadReplicaActionEnum.CREATE_DB_INSTANCE_READ_REPLICA, POSTCreateDBInstanceReadReplicaVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                requestBody = "cupiditate".getBytes();
                xAmzAlgorithm = "consequatur";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "debitis";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "sequi";
                xAmzSignedHeaders = "quo";
            }};            

            POSTCreateDBInstanceReadReplicaResponse res = sdk.sdk.postCreateDBInstanceReadReplica(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateDBParameterGroup

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateDBParameterGroupActionEnum;
import org.openapis.openapi.models.operations.POSTCreateDBParameterGroupRequest;
import org.openapis.openapi.models.operations.POSTCreateDBParameterGroupResponse;
import org.openapis.openapi.models.operations.POSTCreateDBParameterGroupVersionEnum;
import org.openapis.openapi.models.shared.CreateDBParameterGroupMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateDBParameterGroupRequest req = new POSTCreateDBParameterGroupRequest(POSTCreateDBParameterGroupActionEnum.CREATE_DB_PARAMETER_GROUP, POSTCreateDBParameterGroupVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                requestBody = "recusandae".getBytes();
                xAmzAlgorithm = "aperiam";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "quod";
                xAmzDate = "dignissimos";
                xAmzSecurityToken = "inventore";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "totam";
            }};            

            POSTCreateDBParameterGroupResponse res = sdk.sdk.postCreateDBParameterGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateDBSecurityGroup

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateDBSecurityGroupActionEnum;
import org.openapis.openapi.models.operations.POSTCreateDBSecurityGroupRequest;
import org.openapis.openapi.models.operations.POSTCreateDBSecurityGroupResponse;
import org.openapis.openapi.models.operations.POSTCreateDBSecurityGroupVersionEnum;
import org.openapis.openapi.models.shared.CreateDBSecurityGroupMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateDBSecurityGroupRequest req = new POSTCreateDBSecurityGroupRequest(POSTCreateDBSecurityGroupActionEnum.CREATE_DB_SECURITY_GROUP, POSTCreateDBSecurityGroupVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                requestBody = "aliquam".getBytes();
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "commodi";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "dolores";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "molestiae";
            }};            

            POSTCreateDBSecurityGroupResponse res = sdk.sdk.postCreateDBSecurityGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateDBSnapshot

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateDBSnapshotActionEnum;
import org.openapis.openapi.models.operations.POSTCreateDBSnapshotRequest;
import org.openapis.openapi.models.operations.POSTCreateDBSnapshotResponse;
import org.openapis.openapi.models.operations.POSTCreateDBSnapshotVersionEnum;
import org.openapis.openapi.models.shared.CreateDBSnapshotMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateDBSnapshotRequest req = new POSTCreateDBSnapshotRequest(POSTCreateDBSnapshotActionEnum.CREATE_DB_SNAPSHOT, POSTCreateDBSnapshotVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                requestBody = "porro".getBytes();
                xAmzAlgorithm = "eum";
                xAmzContentSha256 = "quas";
                xAmzCredential = "praesentium";
                xAmzDate = "consequuntur";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "fuga";
            }};            

            POSTCreateDBSnapshotResponse res = sdk.sdk.postCreateDBSnapshot(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateDBSubnetGroup

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateDBSubnetGroupActionEnum;
import org.openapis.openapi.models.operations.POSTCreateDBSubnetGroupRequest;
import org.openapis.openapi.models.operations.POSTCreateDBSubnetGroupResponse;
import org.openapis.openapi.models.operations.POSTCreateDBSubnetGroupVersionEnum;
import org.openapis.openapi.models.shared.CreateDBSubnetGroupMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateDBSubnetGroupRequest req = new POSTCreateDBSubnetGroupRequest(POSTCreateDBSubnetGroupActionEnum.CREATE_DB_SUBNET_GROUP, POSTCreateDBSubnetGroupVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                requestBody = "incidunt".getBytes();
                xAmzAlgorithm = "atque";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "minima";
                xAmzDate = "nisi";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "consequuntur";
            }};            

            POSTCreateDBSubnetGroupResponse res = sdk.sdk.postCreateDBSubnetGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateEventSubscription

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateEventSubscriptionActionEnum;
import org.openapis.openapi.models.operations.POSTCreateEventSubscriptionRequest;
import org.openapis.openapi.models.operations.POSTCreateEventSubscriptionResponse;
import org.openapis.openapi.models.operations.POSTCreateEventSubscriptionVersionEnum;
import org.openapis.openapi.models.shared.CreateEventSubscriptionMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ratione") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateEventSubscriptionRequest req = new POSTCreateEventSubscriptionRequest(POSTCreateEventSubscriptionActionEnum.CREATE_EVENT_SUBSCRIPTION, POSTCreateEventSubscriptionVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                requestBody = "explicabo".getBytes();
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "atque";
                xAmzDate = "et";
                xAmzSecurityToken = "esse";
                xAmzSignature = "eveniet";
                xAmzSignedHeaders = "accusamus";
            }};            

            POSTCreateEventSubscriptionResponse res = sdk.sdk.postCreateEventSubscription(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateOptionGroup

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateOptionGroupActionEnum;
import org.openapis.openapi.models.operations.POSTCreateOptionGroupRequest;
import org.openapis.openapi.models.operations.POSTCreateOptionGroupResponse;
import org.openapis.openapi.models.operations.POSTCreateOptionGroupVersionEnum;
import org.openapis.openapi.models.shared.CreateOptionGroupMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateOptionGroupRequest req = new POSTCreateOptionGroupRequest(POSTCreateOptionGroupActionEnum.CREATE_OPTION_GROUP, POSTCreateOptionGroupVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                requestBody = "esse".getBytes();
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "nam";
                xAmzCredential = "vero";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "vel";
            }};            

            POSTCreateOptionGroupResponse res = sdk.sdk.postCreateOptionGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteDBInstance

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteDBInstanceActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteDBInstanceRequest;
import org.openapis.openapi.models.operations.POSTDeleteDBInstanceResponse;
import org.openapis.openapi.models.operations.POSTDeleteDBInstanceVersionEnum;
import org.openapis.openapi.models.shared.DeleteDBInstanceMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("harum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteDBInstanceRequest req = new POSTDeleteDBInstanceRequest(POSTDeleteDBInstanceActionEnum.DELETE_DB_INSTANCE, POSTDeleteDBInstanceVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                requestBody = "molestiae".getBytes();
                xAmzAlgorithm = "rerum";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "minima";
                xAmzDate = "distinctio";
                xAmzSecurityToken = "eligendi";
                xAmzSignature = "sit";
                xAmzSignedHeaders = "culpa";
            }};            

            POSTDeleteDBInstanceResponse res = sdk.sdk.postDeleteDBInstance(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteDBParameterGroup

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteDBParameterGroupActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteDBParameterGroupRequest;
import org.openapis.openapi.models.operations.POSTDeleteDBParameterGroupResponse;
import org.openapis.openapi.models.operations.POSTDeleteDBParameterGroupVersionEnum;
import org.openapis.openapi.models.shared.DeleteDBParameterGroupMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteDBParameterGroupRequest req = new POSTDeleteDBParameterGroupRequest(POSTDeleteDBParameterGroupActionEnum.DELETE_DB_PARAMETER_GROUP, POSTDeleteDBParameterGroupVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                requestBody = "adipisci".getBytes();
                xAmzAlgorithm = "cumque";
                xAmzContentSha256 = "consequuntur";
                xAmzCredential = "consequatur";
                xAmzDate = "minus";
                xAmzSecurityToken = "quaerat";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "consectetur";
            }};            

            POSTDeleteDBParameterGroupResponse res = sdk.sdk.postDeleteDBParameterGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteDBSecurityGroup

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteDBSecurityGroupActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteDBSecurityGroupRequest;
import org.openapis.openapi.models.operations.POSTDeleteDBSecurityGroupResponse;
import org.openapis.openapi.models.operations.POSTDeleteDBSecurityGroupVersionEnum;
import org.openapis.openapi.models.shared.DeleteDBSecurityGroupMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteDBSecurityGroupRequest req = new POSTDeleteDBSecurityGroupRequest(POSTDeleteDBSecurityGroupActionEnum.DELETE_DB_SECURITY_GROUP, POSTDeleteDBSecurityGroupVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                requestBody = "blanditiis".getBytes();
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "a";
                xAmzCredential = "nulla";
                xAmzDate = "quas";
                xAmzSecurityToken = "esse";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "a";
            }};            

            POSTDeleteDBSecurityGroupResponse res = sdk.sdk.postDeleteDBSecurityGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteDBSnapshot

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteDBSnapshotActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteDBSnapshotRequest;
import org.openapis.openapi.models.operations.POSTDeleteDBSnapshotResponse;
import org.openapis.openapi.models.operations.POSTDeleteDBSnapshotVersionEnum;
import org.openapis.openapi.models.shared.DeleteDBSnapshotMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteDBSnapshotRequest req = new POSTDeleteDBSnapshotRequest(POSTDeleteDBSnapshotActionEnum.DELETE_DB_SNAPSHOT, POSTDeleteDBSnapshotVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                requestBody = "sint".getBytes();
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "possimus";
                xAmzCredential = "quia";
                xAmzDate = "eveniet";
                xAmzSecurityToken = "asperiores";
                xAmzSignature = "facere";
                xAmzSignedHeaders = "veritatis";
            }};            

            POSTDeleteDBSnapshotResponse res = sdk.sdk.postDeleteDBSnapshot(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteDBSubnetGroup

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteDBSubnetGroupActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteDBSubnetGroupRequest;
import org.openapis.openapi.models.operations.POSTDeleteDBSubnetGroupResponse;
import org.openapis.openapi.models.operations.POSTDeleteDBSubnetGroupVersionEnum;
import org.openapis.openapi.models.shared.DeleteDBSubnetGroupMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteDBSubnetGroupRequest req = new POSTDeleteDBSubnetGroupRequest(POSTDeleteDBSubnetGroupActionEnum.DELETE_DB_SUBNET_GROUP, POSTDeleteDBSubnetGroupVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                requestBody = "quasi".getBytes();
                xAmzAlgorithm = "similique";
                xAmzContentSha256 = "culpa";
                xAmzCredential = "aliquid";
                xAmzDate = "tenetur";
                xAmzSecurityToken = "quae";
                xAmzSignature = "earum";
                xAmzSignedHeaders = "vel";
            }};            

            POSTDeleteDBSubnetGroupResponse res = sdk.sdk.postDeleteDBSubnetGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteEventSubscription

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteEventSubscriptionActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteEventSubscriptionRequest;
import org.openapis.openapi.models.operations.POSTDeleteEventSubscriptionResponse;
import org.openapis.openapi.models.operations.POSTDeleteEventSubscriptionVersionEnum;
import org.openapis.openapi.models.shared.DeleteEventSubscriptionMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteEventSubscriptionRequest req = new POSTDeleteEventSubscriptionRequest(POSTDeleteEventSubscriptionActionEnum.DELETE_EVENT_SUBSCRIPTION, POSTDeleteEventSubscriptionVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                requestBody = "eius".getBytes();
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "illum";
                xAmzCredential = "soluta";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "aliquam";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "dicta";
            }};            

            POSTDeleteEventSubscriptionResponse res = sdk.sdk.postDeleteEventSubscription(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteOptionGroup

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteOptionGroupActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteOptionGroupRequest;
import org.openapis.openapi.models.operations.POSTDeleteOptionGroupResponse;
import org.openapis.openapi.models.operations.POSTDeleteOptionGroupVersionEnum;
import org.openapis.openapi.models.shared.DeleteOptionGroupMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteOptionGroupRequest req = new POSTDeleteOptionGroupRequest(POSTDeleteOptionGroupActionEnum.DELETE_OPTION_GROUP, POSTDeleteOptionGroupVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                requestBody = "reprehenderit".getBytes();
                xAmzAlgorithm = "ullam";
                xAmzContentSha256 = "nisi";
                xAmzCredential = "aut";
                xAmzDate = "voluptatum";
                xAmzSecurityToken = "qui";
                xAmzSignature = "quibusdam";
                xAmzSignedHeaders = "ex";
            }};            

            POSTDeleteOptionGroupResponse res = sdk.sdk.postDeleteOptionGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeDBEngineVersions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeDBEngineVersionsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeDBEngineVersionsRequest;
import org.openapis.openapi.models.operations.POSTDescribeDBEngineVersionsResponse;
import org.openapis.openapi.models.operations.POSTDescribeDBEngineVersionsVersionEnum;
import org.openapis.openapi.models.shared.DescribeDBEngineVersionsMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDBEngineVersionsRequest req = new POSTDescribeDBEngineVersionsRequest(POSTDescribeDBEngineVersionsActionEnum.DESCRIBE_DB_ENGINE_VERSIONS, POSTDescribeDBEngineVersionsVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                marker = "itaque";
                maxRecords = "dolorum";
                requestBody = "architecto".getBytes();
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "tenetur";
                xAmzCredential = "quasi";
                xAmzDate = "at";
                xAmzSecurityToken = "et";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "ipsa";
            }};            

            POSTDescribeDBEngineVersionsResponse res = sdk.sdk.postDescribeDBEngineVersions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeDBInstances

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeDBInstancesActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeDBInstancesRequest;
import org.openapis.openapi.models.operations.POSTDescribeDBInstancesResponse;
import org.openapis.openapi.models.operations.POSTDescribeDBInstancesVersionEnum;
import org.openapis.openapi.models.shared.DescribeDBInstancesMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDBInstancesRequest req = new POSTDescribeDBInstancesRequest(POSTDescribeDBInstancesActionEnum.DESCRIBE_DB_INSTANCES, POSTDescribeDBInstancesVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                marker = "veritatis";
                maxRecords = "consectetur";
                requestBody = "adipisci".getBytes();
                xAmzAlgorithm = "iste";
                xAmzContentSha256 = "temporibus";
                xAmzCredential = "accusantium";
                xAmzDate = "rem";
                xAmzSecurityToken = "aut";
                xAmzSignature = "laudantium";
                xAmzSignedHeaders = "eum";
            }};            

            POSTDescribeDBInstancesResponse res = sdk.sdk.postDescribeDBInstances(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeDBLogFiles

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeDBLogFilesActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeDBLogFilesRequest;
import org.openapis.openapi.models.operations.POSTDescribeDBLogFilesResponse;
import org.openapis.openapi.models.operations.POSTDescribeDBLogFilesVersionEnum;
import org.openapis.openapi.models.shared.DescribeDBLogFilesMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDBLogFilesRequest req = new POSTDescribeDBLogFilesRequest(POSTDescribeDBLogFilesActionEnum.DESCRIBE_DB_LOG_FILES, POSTDescribeDBLogFilesVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                marker = "ab";
                maxRecords = "corrupti";
                requestBody = "non".getBytes();
                xAmzAlgorithm = "voluptatem";
                xAmzContentSha256 = "dolor";
                xAmzCredential = "occaecati";
                xAmzDate = "numquam";
                xAmzSecurityToken = "impedit";
                xAmzSignature = "explicabo";
                xAmzSignedHeaders = "voluptas";
            }};            

            POSTDescribeDBLogFilesResponse res = sdk.sdk.postDescribeDBLogFiles(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeDBParameterGroups

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeDBParameterGroupsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeDBParameterGroupsRequest;
import org.openapis.openapi.models.operations.POSTDescribeDBParameterGroupsResponse;
import org.openapis.openapi.models.operations.POSTDescribeDBParameterGroupsVersionEnum;
import org.openapis.openapi.models.shared.DescribeDBParameterGroupsMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDBParameterGroupsRequest req = new POSTDescribeDBParameterGroupsRequest(POSTDescribeDBParameterGroupsActionEnum.DESCRIBE_DB_PARAMETER_GROUPS, POSTDescribeDBParameterGroupsVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                marker = "dignissimos";
                maxRecords = "dicta";
                requestBody = "maiores".getBytes();
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "velit";
                xAmzCredential = "voluptatibus";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "asperiores";
                xAmzSignature = "aperiam";
                xAmzSignedHeaders = "ea";
            }};            

            POSTDescribeDBParameterGroupsResponse res = sdk.sdk.postDescribeDBParameterGroups(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeDBParameters

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeDBParametersActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeDBParametersRequest;
import org.openapis.openapi.models.operations.POSTDescribeDBParametersResponse;
import org.openapis.openapi.models.operations.POSTDescribeDBParametersVersionEnum;
import org.openapis.openapi.models.shared.DescribeDBParametersMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quaerat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDBParametersRequest req = new POSTDescribeDBParametersRequest(POSTDescribeDBParametersActionEnum.DESCRIBE_DB_PARAMETERS, POSTDescribeDBParametersVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                marker = "consequuntur";
                maxRecords = "repellendus";
                requestBody = "officia".getBytes();
                xAmzAlgorithm = "maxime";
                xAmzContentSha256 = "dignissimos";
                xAmzCredential = "officia";
                xAmzDate = "asperiores";
                xAmzSecurityToken = "nemo";
                xAmzSignature = "quae";
                xAmzSignedHeaders = "quaerat";
            }};            

            POSTDescribeDBParametersResponse res = sdk.sdk.postDescribeDBParameters(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeDBSecurityGroups

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeDBSecurityGroupsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeDBSecurityGroupsRequest;
import org.openapis.openapi.models.operations.POSTDescribeDBSecurityGroupsResponse;
import org.openapis.openapi.models.operations.POSTDescribeDBSecurityGroupsVersionEnum;
import org.openapis.openapi.models.shared.DescribeDBSecurityGroupsMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDBSecurityGroupsRequest req = new POSTDescribeDBSecurityGroupsRequest(POSTDescribeDBSecurityGroupsActionEnum.DESCRIBE_DB_SECURITY_GROUPS, POSTDescribeDBSecurityGroupsVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                marker = "quod";
                maxRecords = "labore";
                requestBody = "ab".getBytes();
                xAmzAlgorithm = "adipisci";
                xAmzContentSha256 = "fuga";
                xAmzCredential = "id";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "velit";
                xAmzSignature = "culpa";
                xAmzSignedHeaders = "est";
            }};            

            POSTDescribeDBSecurityGroupsResponse res = sdk.sdk.postDescribeDBSecurityGroups(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeDBSnapshots

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeDBSnapshotsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeDBSnapshotsRequest;
import org.openapis.openapi.models.operations.POSTDescribeDBSnapshotsResponse;
import org.openapis.openapi.models.operations.POSTDescribeDBSnapshotsVersionEnum;
import org.openapis.openapi.models.shared.DescribeDBSnapshotsMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDBSnapshotsRequest req = new POSTDescribeDBSnapshotsRequest(POSTDescribeDBSnapshotsActionEnum.DESCRIBE_DB_SNAPSHOTS, POSTDescribeDBSnapshotsVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                marker = "totam";
                maxRecords = "fugiat";
                requestBody = "vel".getBytes();
                xAmzAlgorithm = "ducimus";
                xAmzContentSha256 = "quos";
                xAmzCredential = "vel";
                xAmzDate = "labore";
                xAmzSecurityToken = "possimus";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "cum";
            }};            

            POSTDescribeDBSnapshotsResponse res = sdk.sdk.postDescribeDBSnapshots(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeDBSubnetGroups

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeDBSubnetGroupsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeDBSubnetGroupsRequest;
import org.openapis.openapi.models.operations.POSTDescribeDBSubnetGroupsResponse;
import org.openapis.openapi.models.operations.POSTDescribeDBSubnetGroupsVersionEnum;
import org.openapis.openapi.models.shared.DescribeDBSubnetGroupsMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDBSubnetGroupsRequest req = new POSTDescribeDBSubnetGroupsRequest(POSTDescribeDBSubnetGroupsActionEnum.DESCRIBE_DB_SUBNET_GROUPS, POSTDescribeDBSubnetGroupsVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                marker = "in";
                maxRecords = "corporis";
                requestBody = "reiciendis".getBytes();
                xAmzAlgorithm = "assumenda";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "recusandae";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "aperiam";
                xAmzSignature = "cum";
                xAmzSignedHeaders = "consectetur";
            }};            

            POSTDescribeDBSubnetGroupsResponse res = sdk.sdk.postDescribeDBSubnetGroups(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeEngineDefaultParameters

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeEngineDefaultParametersActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeEngineDefaultParametersRequest;
import org.openapis.openapi.models.operations.POSTDescribeEngineDefaultParametersResponse;
import org.openapis.openapi.models.operations.POSTDescribeEngineDefaultParametersVersionEnum;
import org.openapis.openapi.models.shared.DescribeEngineDefaultParametersMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeEngineDefaultParametersRequest req = new POSTDescribeEngineDefaultParametersRequest(POSTDescribeEngineDefaultParametersActionEnum.DESCRIBE_ENGINE_DEFAULT_PARAMETERS, POSTDescribeEngineDefaultParametersVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                marker = "exercitationem";
                maxRecords = "earum";
                requestBody = "facere".getBytes();
                xAmzAlgorithm = "numquam";
                xAmzContentSha256 = "doloribus";
                xAmzCredential = "suscipit";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "necessitatibus";
            }};            

            POSTDescribeEngineDefaultParametersResponse res = sdk.sdk.postDescribeEngineDefaultParameters(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeEventCategories

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeEventCategoriesActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeEventCategoriesRequest;
import org.openapis.openapi.models.operations.POSTDescribeEventCategoriesResponse;
import org.openapis.openapi.models.operations.POSTDescribeEventCategoriesVersionEnum;
import org.openapis.openapi.models.shared.DescribeEventCategoriesMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeEventCategoriesRequest req = new POSTDescribeEventCategoriesRequest(POSTDescribeEventCategoriesActionEnum.DESCRIBE_EVENT_CATEGORIES, POSTDescribeEventCategoriesVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                requestBody = "sunt".getBytes();
                xAmzAlgorithm = "asperiores";
                xAmzContentSha256 = "adipisci";
                xAmzCredential = "non";
                xAmzDate = "amet";
                xAmzSecurityToken = "beatae";
                xAmzSignature = "dignissimos";
                xAmzSignedHeaders = "a";
            }};            

            POSTDescribeEventCategoriesResponse res = sdk.sdk.postDescribeEventCategories(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeEventSubscriptions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeEventSubscriptionsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeEventSubscriptionsRequest;
import org.openapis.openapi.models.operations.POSTDescribeEventSubscriptionsResponse;
import org.openapis.openapi.models.operations.POSTDescribeEventSubscriptionsVersionEnum;
import org.openapis.openapi.models.shared.DescribeEventSubscriptionsMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeEventSubscriptionsRequest req = new POSTDescribeEventSubscriptionsRequest(POSTDescribeEventSubscriptionsActionEnum.DESCRIBE_EVENT_SUBSCRIPTIONS, POSTDescribeEventSubscriptionsVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                marker = "consectetur";
                maxRecords = "corporis";
                requestBody = "harum".getBytes();
                xAmzAlgorithm = "laboriosam";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "voluptates";
                xAmzDate = "libero";
                xAmzSecurityToken = "vitae";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "similique";
            }};            

            POSTDescribeEventSubscriptionsResponse res = sdk.sdk.postDescribeEventSubscriptions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeEvents

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeEventsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeEventsRequest;
import org.openapis.openapi.models.operations.POSTDescribeEventsResponse;
import org.openapis.openapi.models.operations.POSTDescribeEventsVersionEnum;
import org.openapis.openapi.models.shared.DescribeEventsMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SourceTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeEventsRequest req = new POSTDescribeEventsRequest(POSTDescribeEventsActionEnum.DESCRIBE_EVENTS, POSTDescribeEventsVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                marker = "aspernatur";
                maxRecords = "voluptas";
                requestBody = "voluptas".getBytes();
                xAmzAlgorithm = "voluptas";
                xAmzContentSha256 = "minima";
                xAmzCredential = "nobis";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "adipisci";
                xAmzSignature = "minus";
                xAmzSignedHeaders = "dolores";
            }};            

            POSTDescribeEventsResponse res = sdk.sdk.postDescribeEvents(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeOptionGroupOptions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeOptionGroupOptionsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeOptionGroupOptionsRequest;
import org.openapis.openapi.models.operations.POSTDescribeOptionGroupOptionsResponse;
import org.openapis.openapi.models.operations.POSTDescribeOptionGroupOptionsVersionEnum;
import org.openapis.openapi.models.shared.DescribeOptionGroupOptionsMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("blanditiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeOptionGroupOptionsRequest req = new POSTDescribeOptionGroupOptionsRequest(POSTDescribeOptionGroupOptionsActionEnum.DESCRIBE_OPTION_GROUP_OPTIONS, POSTDescribeOptionGroupOptionsVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                marker = "in";
                maxRecords = "dolore";
                requestBody = "aliquam".getBytes();
                xAmzAlgorithm = "officiis";
                xAmzContentSha256 = "temporibus";
                xAmzCredential = "ullam";
                xAmzDate = "adipisci";
                xAmzSecurityToken = "cum";
                xAmzSignature = "blanditiis";
                xAmzSignedHeaders = "quas";
            }};            

            POSTDescribeOptionGroupOptionsResponse res = sdk.sdk.postDescribeOptionGroupOptions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeOptionGroups

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeOptionGroupsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeOptionGroupsRequest;
import org.openapis.openapi.models.operations.POSTDescribeOptionGroupsResponse;
import org.openapis.openapi.models.operations.POSTDescribeOptionGroupsVersionEnum;
import org.openapis.openapi.models.shared.DescribeOptionGroupsMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeOptionGroupsRequest req = new POSTDescribeOptionGroupsRequest(POSTDescribeOptionGroupsActionEnum.DESCRIBE_OPTION_GROUPS, POSTDescribeOptionGroupsVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                marker = "nesciunt";
                maxRecords = "culpa";
                requestBody = "corrupti".getBytes();
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "totam";
                xAmzCredential = "hic";
                xAmzDate = "exercitationem";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "sit";
                xAmzSignedHeaders = "rerum";
            }};            

            POSTDescribeOptionGroupsResponse res = sdk.sdk.postDescribeOptionGroups(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeOrderableDBInstanceOptions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeOrderableDBInstanceOptionsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeOrderableDBInstanceOptionsRequest;
import org.openapis.openapi.models.operations.POSTDescribeOrderableDBInstanceOptionsResponse;
import org.openapis.openapi.models.operations.POSTDescribeOrderableDBInstanceOptionsVersionEnum;
import org.openapis.openapi.models.shared.DescribeOrderableDBInstanceOptionsMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeOrderableDBInstanceOptionsRequest req = new POSTDescribeOrderableDBInstanceOptionsRequest(POSTDescribeOrderableDBInstanceOptionsActionEnum.DESCRIBE_ORDERABLE_DB_INSTANCE_OPTIONS, POSTDescribeOrderableDBInstanceOptionsVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                marker = "reiciendis";
                maxRecords = "explicabo";
                requestBody = "asperiores".getBytes();
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "expedita";
                xAmzDate = "ab";
                xAmzSecurityToken = "iste";
                xAmzSignature = "dolore";
                xAmzSignedHeaders = "laborum";
            }};            

            POSTDescribeOrderableDBInstanceOptionsResponse res = sdk.sdk.postDescribeOrderableDBInstanceOptions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeReservedDBInstances

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeReservedDBInstancesActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeReservedDBInstancesRequest;
import org.openapis.openapi.models.operations.POSTDescribeReservedDBInstancesResponse;
import org.openapis.openapi.models.operations.POSTDescribeReservedDBInstancesVersionEnum;
import org.openapis.openapi.models.shared.DescribeReservedDBInstancesMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeReservedDBInstancesRequest req = new POSTDescribeReservedDBInstancesRequest(POSTDescribeReservedDBInstancesActionEnum.DESCRIBE_RESERVED_DB_INSTANCES, POSTDescribeReservedDBInstancesVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                marker = "in";
                maxRecords = "commodi";
                requestBody = "quidem".getBytes();
                xAmzAlgorithm = "explicabo";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "unde";
                xAmzDate = "architecto";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "debitis";
            }};            

            POSTDescribeReservedDBInstancesResponse res = sdk.sdk.postDescribeReservedDBInstances(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeReservedDBInstancesOfferings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeReservedDBInstancesOfferingsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeReservedDBInstancesOfferingsRequest;
import org.openapis.openapi.models.operations.POSTDescribeReservedDBInstancesOfferingsResponse;
import org.openapis.openapi.models.operations.POSTDescribeReservedDBInstancesOfferingsVersionEnum;
import org.openapis.openapi.models.shared.DescribeReservedDBInstancesOfferingsMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeReservedDBInstancesOfferingsRequest req = new POSTDescribeReservedDBInstancesOfferingsRequest(POSTDescribeReservedDBInstancesOfferingsActionEnum.DESCRIBE_RESERVED_DB_INSTANCES_OFFERINGS, POSTDescribeReservedDBInstancesOfferingsVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                marker = "reiciendis";
                maxRecords = "perferendis";
                requestBody = "corrupti".getBytes();
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "incidunt";
                xAmzCredential = "sed";
                xAmzDate = "provident";
                xAmzSecurityToken = "eius";
                xAmzSignature = "necessitatibus";
                xAmzSignedHeaders = "ipsum";
            }};            

            POSTDescribeReservedDBInstancesOfferingsResponse res = sdk.sdk.postDescribeReservedDBInstancesOfferings(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDownloadDBLogFilePortion

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDownloadDBLogFilePortionActionEnum;
import org.openapis.openapi.models.operations.POSTDownloadDBLogFilePortionRequest;
import org.openapis.openapi.models.operations.POSTDownloadDBLogFilePortionResponse;
import org.openapis.openapi.models.operations.POSTDownloadDBLogFilePortionVersionEnum;
import org.openapis.openapi.models.shared.DownloadDBLogFilePortionMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDownloadDBLogFilePortionRequest req = new POSTDownloadDBLogFilePortionRequest(POSTDownloadDBLogFilePortionActionEnum.DOWNLOAD_DB_LOG_FILE_PORTION, POSTDownloadDBLogFilePortionVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                marker = "occaecati";
                numberOfLines = "quos";
                requestBody = "voluptatibus".getBytes();
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "voluptate";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "ex";
                xAmzSignature = "sit";
                xAmzSignedHeaders = "non";
            }};            

            POSTDownloadDBLogFilePortionResponse res = sdk.sdk.postDownloadDBLogFilePortion(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListTagsForResource

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListTagsForResourceActionEnum;
import org.openapis.openapi.models.operations.POSTListTagsForResourceRequest;
import org.openapis.openapi.models.operations.POSTListTagsForResourceResponse;
import org.openapis.openapi.models.operations.POSTListTagsForResourceVersionEnum;
import org.openapis.openapi.models.shared.ListTagsForResourceMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListTagsForResourceRequest req = new POSTListTagsForResourceRequest(POSTListTagsForResourceActionEnum.LIST_TAGS_FOR_RESOURCE, POSTListTagsForResourceVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                requestBody = "praesentium".getBytes();
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "quaerat";
                xAmzCredential = "incidunt";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "rem";
                xAmzSignedHeaders = "sit";
            }};            

            POSTListTagsForResourceResponse res = sdk.sdk.postListTagsForResource(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postModifyDBInstance

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTModifyDBInstanceActionEnum;
import org.openapis.openapi.models.operations.POSTModifyDBInstanceRequest;
import org.openapis.openapi.models.operations.POSTModifyDBInstanceResponse;
import org.openapis.openapi.models.operations.POSTModifyDBInstanceVersionEnum;
import org.openapis.openapi.models.shared.ModifyDBInstanceMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyDBInstanceRequest req = new POSTModifyDBInstanceRequest(POSTModifyDBInstanceActionEnum.MODIFY_DB_INSTANCE, POSTModifyDBInstanceVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                requestBody = "error".getBytes();
                xAmzAlgorithm = "veniam";
                xAmzContentSha256 = "minima";
                xAmzCredential = "recusandae";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "nulla";
                xAmzSignature = "magni";
                xAmzSignedHeaders = "aperiam";
            }};            

            POSTModifyDBInstanceResponse res = sdk.sdk.postModifyDBInstance(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postModifyDBParameterGroup

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTModifyDBParameterGroupActionEnum;
import org.openapis.openapi.models.operations.POSTModifyDBParameterGroupRequest;
import org.openapis.openapi.models.operations.POSTModifyDBParameterGroupResponse;
import org.openapis.openapi.models.operations.POSTModifyDBParameterGroupVersionEnum;
import org.openapis.openapi.models.shared.ApplyMethodEnum;
import org.openapis.openapi.models.shared.ModifyDBParameterGroupMessage;
import org.openapis.openapi.models.shared.ParametersList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyDBParameterGroupRequest req = new POSTModifyDBParameterGroupRequest(POSTModifyDBParameterGroupActionEnum.MODIFY_DB_PARAMETER_GROUP, POSTModifyDBParameterGroupVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                requestBody = "numquam".getBytes();
                xAmzAlgorithm = "veniam";
                xAmzContentSha256 = "in";
                xAmzCredential = "officiis";
                xAmzDate = "beatae";
                xAmzSecurityToken = "laudantium";
                xAmzSignature = "exercitationem";
                xAmzSignedHeaders = "praesentium";
            }};            

            POSTModifyDBParameterGroupResponse res = sdk.sdk.postModifyDBParameterGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postModifyDBSubnetGroup

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTModifyDBSubnetGroupActionEnum;
import org.openapis.openapi.models.operations.POSTModifyDBSubnetGroupRequest;
import org.openapis.openapi.models.operations.POSTModifyDBSubnetGroupResponse;
import org.openapis.openapi.models.operations.POSTModifyDBSubnetGroupVersionEnum;
import org.openapis.openapi.models.shared.ModifyDBSubnetGroupMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyDBSubnetGroupRequest req = new POSTModifyDBSubnetGroupRequest(POSTModifyDBSubnetGroupActionEnum.MODIFY_DB_SUBNET_GROUP, POSTModifyDBSubnetGroupVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                requestBody = "laboriosam".getBytes();
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "voluptatum";
                xAmzCredential = "error";
                xAmzDate = "hic";
                xAmzSecurityToken = "expedita";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "neque";
            }};            

            POSTModifyDBSubnetGroupResponse res = sdk.sdk.postModifyDBSubnetGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postModifyEventSubscription

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTModifyEventSubscriptionActionEnum;
import org.openapis.openapi.models.operations.POSTModifyEventSubscriptionRequest;
import org.openapis.openapi.models.operations.POSTModifyEventSubscriptionResponse;
import org.openapis.openapi.models.operations.POSTModifyEventSubscriptionVersionEnum;
import org.openapis.openapi.models.shared.ModifyEventSubscriptionMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyEventSubscriptionRequest req = new POSTModifyEventSubscriptionRequest(POSTModifyEventSubscriptionActionEnum.MODIFY_EVENT_SUBSCRIPTION, POSTModifyEventSubscriptionVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                requestBody = "nostrum".getBytes();
                xAmzAlgorithm = "officia";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "corrupti";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "atque";
                xAmzSignedHeaders = "fugit";
            }};            

            POSTModifyEventSubscriptionResponse res = sdk.sdk.postModifyEventSubscription(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postModifyOptionGroup

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTModifyOptionGroupActionEnum;
import org.openapis.openapi.models.operations.POSTModifyOptionGroupRequest;
import org.openapis.openapi.models.operations.POSTModifyOptionGroupResponse;
import org.openapis.openapi.models.operations.POSTModifyOptionGroupVersionEnum;
import org.openapis.openapi.models.shared.ModifyOptionGroupMessage;
import org.openapis.openapi.models.shared.OptionConfigurationList;
import org.openapis.openapi.models.shared.OptionSettingsList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyOptionGroupRequest req = new POSTModifyOptionGroupRequest(POSTModifyOptionGroupActionEnum.MODIFY_OPTION_GROUP, POSTModifyOptionGroupVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                requestBody = "fugiat".getBytes();
                xAmzAlgorithm = "voluptatem";
                xAmzContentSha256 = "culpa";
                xAmzCredential = "expedita";
                xAmzDate = "magnam";
                xAmzSecurityToken = "consequatur";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "ipsam";
            }};            

            POSTModifyOptionGroupResponse res = sdk.sdk.postModifyOptionGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPromoteReadReplica

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTPromoteReadReplicaActionEnum;
import org.openapis.openapi.models.operations.POSTPromoteReadReplicaRequest;
import org.openapis.openapi.models.operations.POSTPromoteReadReplicaResponse;
import org.openapis.openapi.models.operations.POSTPromoteReadReplicaVersionEnum;
import org.openapis.openapi.models.shared.PromoteReadReplicaMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTPromoteReadReplicaRequest req = new POSTPromoteReadReplicaRequest(POSTPromoteReadReplicaActionEnum.PROMOTE_READ_REPLICA, POSTPromoteReadReplicaVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                requestBody = "voluptatum".getBytes();
                xAmzAlgorithm = "quas";
                xAmzContentSha256 = "repudiandae";
                xAmzCredential = "corporis";
                xAmzDate = "et";
                xAmzSecurityToken = "blanditiis";
                xAmzSignature = "ex";
                xAmzSignedHeaders = "sed";
            }};            

            POSTPromoteReadReplicaResponse res = sdk.sdk.postPromoteReadReplica(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPurchaseReservedDBInstancesOffering

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTPurchaseReservedDBInstancesOfferingActionEnum;
import org.openapis.openapi.models.operations.POSTPurchaseReservedDBInstancesOfferingRequest;
import org.openapis.openapi.models.operations.POSTPurchaseReservedDBInstancesOfferingResponse;
import org.openapis.openapi.models.operations.POSTPurchaseReservedDBInstancesOfferingVersionEnum;
import org.openapis.openapi.models.shared.PurchaseReservedDBInstancesOfferingMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTPurchaseReservedDBInstancesOfferingRequest req = new POSTPurchaseReservedDBInstancesOfferingRequest(POSTPurchaseReservedDBInstancesOfferingActionEnum.PURCHASE_RESERVED_DB_INSTANCES_OFFERING, POSTPurchaseReservedDBInstancesOfferingVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                requestBody = "vel".getBytes();
                xAmzAlgorithm = "nostrum";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "error";
                xAmzDate = "consequatur";
                xAmzSecurityToken = "incidunt";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "dolorem";
            }};            

            POSTPurchaseReservedDBInstancesOfferingResponse res = sdk.sdk.postPurchaseReservedDBInstancesOffering(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRebootDBInstance

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTRebootDBInstanceActionEnum;
import org.openapis.openapi.models.operations.POSTRebootDBInstanceRequest;
import org.openapis.openapi.models.operations.POSTRebootDBInstanceResponse;
import org.openapis.openapi.models.operations.POSTRebootDBInstanceVersionEnum;
import org.openapis.openapi.models.shared.RebootDBInstanceMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("harum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRebootDBInstanceRequest req = new POSTRebootDBInstanceRequest(POSTRebootDBInstanceActionEnum.REBOOT_DB_INSTANCE, POSTRebootDBInstanceVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                requestBody = "dicta".getBytes();
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "labore";
                xAmzDate = "quidem";
                xAmzSecurityToken = "atque";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "nam";
            }};            

            POSTRebootDBInstanceResponse res = sdk.sdk.postRebootDBInstance(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRemoveSourceIdentifierFromSubscription

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTRemoveSourceIdentifierFromSubscriptionActionEnum;
import org.openapis.openapi.models.operations.POSTRemoveSourceIdentifierFromSubscriptionRequest;
import org.openapis.openapi.models.operations.POSTRemoveSourceIdentifierFromSubscriptionResponse;
import org.openapis.openapi.models.operations.POSTRemoveSourceIdentifierFromSubscriptionVersionEnum;
import org.openapis.openapi.models.shared.RemoveSourceIdentifierFromSubscriptionMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tenetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRemoveSourceIdentifierFromSubscriptionRequest req = new POSTRemoveSourceIdentifierFromSubscriptionRequest(POSTRemoveSourceIdentifierFromSubscriptionActionEnum.REMOVE_SOURCE_IDENTIFIER_FROM_SUBSCRIPTION, POSTRemoveSourceIdentifierFromSubscriptionVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                requestBody = "laboriosam".getBytes();
                xAmzAlgorithm = "alias";
                xAmzContentSha256 = "amet";
                xAmzCredential = "deserunt";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "unde";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "provident";
            }};            

            POSTRemoveSourceIdentifierFromSubscriptionResponse res = sdk.sdk.postRemoveSourceIdentifierFromSubscription(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRemoveTagsFromResource

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTRemoveTagsFromResourceActionEnum;
import org.openapis.openapi.models.operations.POSTRemoveTagsFromResourceRequest;
import org.openapis.openapi.models.operations.POSTRemoveTagsFromResourceResponse;
import org.openapis.openapi.models.operations.POSTRemoveTagsFromResourceVersionEnum;
import org.openapis.openapi.models.shared.RemoveTagsFromResourceMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRemoveTagsFromResourceRequest req = new POSTRemoveTagsFromResourceRequest(POSTRemoveTagsFromResourceActionEnum.REMOVE_TAGS_FROM_RESOURCE, POSTRemoveTagsFromResourceVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                requestBody = "delectus".getBytes();
                xAmzAlgorithm = "voluptates";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "est";
                xAmzDate = "quidem";
                xAmzSecurityToken = "reprehenderit";
                xAmzSignature = "facere";
                xAmzSignedHeaders = "fuga";
            }};            

            POSTRemoveTagsFromResourceResponse res = sdk.sdk.postRemoveTagsFromResource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postResetDBParameterGroup

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTResetDBParameterGroupActionEnum;
import org.openapis.openapi.models.operations.POSTResetDBParameterGroupRequest;
import org.openapis.openapi.models.operations.POSTResetDBParameterGroupResponse;
import org.openapis.openapi.models.operations.POSTResetDBParameterGroupVersionEnum;
import org.openapis.openapi.models.shared.ApplyMethodEnum;
import org.openapis.openapi.models.shared.ParametersList;
import org.openapis.openapi.models.shared.ResetDBParameterGroupMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTResetDBParameterGroupRequest req = new POSTResetDBParameterGroupRequest(POSTResetDBParameterGroupActionEnum.RESET_DB_PARAMETER_GROUP, POSTResetDBParameterGroupVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                requestBody = "mollitia".getBytes();
                xAmzAlgorithm = "veniam";
                xAmzContentSha256 = "voluptatem";
                xAmzCredential = "quisquam";
                xAmzDate = "repudiandae";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "atque";
                xAmzSignedHeaders = "reprehenderit";
            }};            

            POSTResetDBParameterGroupResponse res = sdk.sdk.postResetDBParameterGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRestoreDBInstanceFromDBSnapshot

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTRestoreDBInstanceFromDBSnapshotActionEnum;
import org.openapis.openapi.models.operations.POSTRestoreDBInstanceFromDBSnapshotRequest;
import org.openapis.openapi.models.operations.POSTRestoreDBInstanceFromDBSnapshotResponse;
import org.openapis.openapi.models.operations.POSTRestoreDBInstanceFromDBSnapshotVersionEnum;
import org.openapis.openapi.models.shared.RestoreDBInstanceFromDBSnapshotMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRestoreDBInstanceFromDBSnapshotRequest req = new POSTRestoreDBInstanceFromDBSnapshotRequest(POSTRestoreDBInstanceFromDBSnapshotActionEnum.RESTORE_DB_INSTANCE_FROM_DB_SNAPSHOT, POSTRestoreDBInstanceFromDBSnapshotVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                requestBody = "totam".getBytes();
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "maxime";
                xAmzDate = "et";
                xAmzSecurityToken = "esse";
                xAmzSignature = "amet";
                xAmzSignedHeaders = "assumenda";
            }};            

            POSTRestoreDBInstanceFromDBSnapshotResponse res = sdk.sdk.postRestoreDBInstanceFromDBSnapshot(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRestoreDBInstanceToPointInTime

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTRestoreDBInstanceToPointInTimeActionEnum;
import org.openapis.openapi.models.operations.POSTRestoreDBInstanceToPointInTimeRequest;
import org.openapis.openapi.models.operations.POSTRestoreDBInstanceToPointInTimeResponse;
import org.openapis.openapi.models.operations.POSTRestoreDBInstanceToPointInTimeVersionEnum;
import org.openapis.openapi.models.shared.RestoreDBInstanceToPointInTimeMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRestoreDBInstanceToPointInTimeRequest req = new POSTRestoreDBInstanceToPointInTimeRequest(POSTRestoreDBInstanceToPointInTimeActionEnum.RESTORE_DB_INSTANCE_TO_POINT_IN_TIME, POSTRestoreDBInstanceToPointInTimeVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                requestBody = "atque".getBytes();
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "officiis";
                xAmzCredential = "officiis";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "natus";
                xAmzSignature = "minima";
                xAmzSignedHeaders = "aspernatur";
            }};            

            POSTRestoreDBInstanceToPointInTimeResponse res = sdk.sdk.postRestoreDBInstanceToPointInTime(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRevokeDBSecurityGroupIngress

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTRevokeDBSecurityGroupIngressActionEnum;
import org.openapis.openapi.models.operations.POSTRevokeDBSecurityGroupIngressRequest;
import org.openapis.openapi.models.operations.POSTRevokeDBSecurityGroupIngressResponse;
import org.openapis.openapi.models.operations.POSTRevokeDBSecurityGroupIngressVersionEnum;
import org.openapis.openapi.models.shared.RevokeDBSecurityGroupIngressMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ex") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRevokeDBSecurityGroupIngressRequest req = new POSTRevokeDBSecurityGroupIngressRequest(POSTRevokeDBSecurityGroupIngressActionEnum.REVOKE_DB_SECURITY_GROUP_INGRESS, POSTRevokeDBSecurityGroupIngressVersionEnum.TWO_THOUSAND_AND_THIRTEEN0212) {{
                requestBody = "maiores".getBytes();
                xAmzAlgorithm = "corrupti";
                xAmzContentSha256 = "at";
                xAmzCredential = "error";
                xAmzDate = "blanditiis";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "repudiandae";
                xAmzSignedHeaders = "atque";
            }};            

            POSTRevokeDBSecurityGroupIngressResponse res = sdk.sdk.postRevokeDBSecurityGroupIngress(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
