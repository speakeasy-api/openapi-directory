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

            GETAddSourceIdentifierToSubscriptionRequest req = new GETAddSourceIdentifierToSubscriptionRequest(GETAddSourceIdentifierToSubscriptionActionEnum.ADD_SOURCE_IDENTIFIER_TO_SUBSCRIPTION, "suscipit", "iure", GETAddSourceIdentifierToSubscriptionVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
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

            GETAuthorizeDBSecurityGroupIngressRequest req = new GETAuthorizeDBSecurityGroupIngressRequest(GETAuthorizeDBSecurityGroupIngressActionEnum.AUTHORIZE_DB_SECURITY_GROUP_INGRESS, "placeat", GETAuthorizeDBSecurityGroupIngressVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
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

            GETCopyDBSnapshotRequest req = new GETCopyDBSnapshotRequest(GETCopyDBSnapshotActionEnum.COPY_DB_SNAPSHOT, "repellendus", "sapiente", GETCopyDBSnapshotVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
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

            GETCreateDBInstanceRequest req = new GETCreateDBInstanceRequest(GETCreateDBInstanceActionEnum.CREATE_DB_INSTANCE, 461479L, "totam", "porro", "dolorum", "dicta", "nam", GETCreateDBInstanceVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
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

            GETCreateDBInstanceReadReplicaRequest req = new GETCreateDBInstanceReadReplicaRequest(GETCreateDBInstanceReadReplicaActionEnum.CREATE_DB_INSTANCE_READ_REPLICA, "fuga", "in", GETCreateDBInstanceReadReplicaVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
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

            GETCreateDBParameterGroupRequest req = new GETCreateDBParameterGroupRequest(GETCreateDBParameterGroupActionEnum.CREATE_DB_PARAMETER_GROUP, "corporis", "explicabo", "nobis", GETCreateDBParameterGroupVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
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

            GETCreateDBSecurityGroupRequest req = new GETCreateDBSecurityGroupRequest(GETCreateDBSecurityGroupActionEnum.CREATE_DB_SECURITY_GROUP, "doloribus", "sapiente", GETCreateDBSecurityGroupVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
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

            GETCreateDBSnapshotRequest req = new GETCreateDBSnapshotRequest(GETCreateDBSnapshotActionEnum.CREATE_DB_SNAPSHOT, "numquam", "commodi", GETCreateDBSnapshotVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
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
                            }}, GETCreateDBSubnetGroupVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
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

            GETCreateEventSubscriptionRequest req = new GETCreateEventSubscriptionRequest(GETCreateEventSubscriptionActionEnum.CREATE_EVENT_SUBSCRIPTION, "temporibus", "laborum", GETCreateEventSubscriptionVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
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

            GETCreateOptionGroupRequest req = new GETCreateOptionGroupRequest(GETCreateOptionGroupActionEnum.CREATE_OPTION_GROUP, "dicta", "corporis", "dolore", "iusto", GETCreateOptionGroupVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
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

            GETDeleteDBInstanceRequest req = new GETDeleteDBInstanceRequest(GETDeleteDBInstanceActionEnum.DELETE_DB_INSTANCE, "quidem", GETDeleteDBInstanceVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
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

            GETDeleteDBParameterGroupRequest req = new GETDeleteDBParameterGroupRequest(GETDeleteDBParameterGroupActionEnum.DELETE_DB_PARAMETER_GROUP, "sint", GETDeleteDBParameterGroupVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
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

            GETDeleteDBSecurityGroupRequest req = new GETDeleteDBSecurityGroupRequest(GETDeleteDBSecurityGroupActionEnum.DELETE_DB_SECURITY_GROUP, "deserunt", GETDeleteDBSecurityGroupVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
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

            GETDeleteDBSnapshotRequest req = new GETDeleteDBSnapshotRequest(GETDeleteDBSnapshotActionEnum.DELETE_DB_SNAPSHOT, "perferendis", GETDeleteDBSnapshotVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
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

            GETDeleteDBSubnetGroupRequest req = new GETDeleteDBSubnetGroupRequest(GETDeleteDBSubnetGroupActionEnum.DELETE_DB_SUBNET_GROUP, "facilis", GETDeleteDBSubnetGroupVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
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

            GETDeleteEventSubscriptionRequest req = new GETDeleteEventSubscriptionRequest(GETDeleteEventSubscriptionActionEnum.DELETE_EVENT_SUBSCRIPTION, "provident", GETDeleteEventSubscriptionVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
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

            GETDeleteOptionGroupRequest req = new GETDeleteOptionGroupRequest(GETDeleteOptionGroupActionEnum.DELETE_OPTION_GROUP, "in", GETDeleteOptionGroupVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
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

            GETDescribeDBEngineVersionsRequest req = new GETDescribeDBEngineVersionsRequest(GETDescribeDBEngineVersionsActionEnum.DESCRIBE_DB_ENGINE_VERSIONS, GETDescribeDBEngineVersionsVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
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

            GETDescribeDBInstancesRequest req = new GETDescribeDBInstancesRequest(GETDescribeDBInstancesActionEnum.DESCRIBE_DB_INSTANCES, GETDescribeDBInstancesVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
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
                .setSecurity(new Security("nihil") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeDBParameterGroupsRequest req = new GETDescribeDBParameterGroupsRequest(GETDescribeDBParameterGroupsActionEnum.DESCRIBE_DB_PARAMETER_GROUPS, GETDescribeDBParameterGroupsVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                dbParameterGroupName = "magnam";
                marker = "distinctio";
                maxRecords = 660174L;
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "labore";
                xAmzCredential = "suscipit";
                xAmzDate = "natus";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "vero";
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
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeDBParametersRequest req = new GETDescribeDBParametersRequest(GETDescribeDBParametersActionEnum.DESCRIBE_DB_PARAMETERS, "architecto", GETDescribeDBParametersVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                marker = "magnam";
                maxRecords = 92373L;
                source = "excepturi";
                xAmzAlgorithm = "ullam";
                xAmzContentSha256 = "provident";
                xAmzCredential = "quos";
                xAmzDate = "sint";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "reiciendis";
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
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeDBSecurityGroupsRequest req = new GETDescribeDBSecurityGroupsRequest(GETDescribeDBSecurityGroupsActionEnum.DESCRIBE_DB_SECURITY_GROUPS, GETDescribeDBSecurityGroupsVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                dbSecurityGroupName = "ad";
                marker = "eum";
                maxRecords = 221262L;
                xAmzAlgorithm = "necessitatibus";
                xAmzContentSha256 = "odit";
                xAmzCredential = "nemo";
                xAmzDate = "quasi";
                xAmzSecurityToken = "iure";
                xAmzSignature = "doloribus";
                xAmzSignedHeaders = "debitis";
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
                .setSecurity(new Security("eius") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeDBSnapshotsRequest req = new GETDescribeDBSnapshotsRequest(GETDescribeDBSnapshotsActionEnum.DESCRIBE_DB_SNAPSHOTS, GETDescribeDBSnapshotsVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                dbInstanceIdentifier = "maxime";
                dbSnapshotIdentifier = "deleniti";
                marker = "facilis";
                maxRecords = 447926L;
                snapshotType = "architecto";
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "repudiandae";
                xAmzCredential = "ullam";
                xAmzDate = "expedita";
                xAmzSecurityToken = "nihil";
                xAmzSignature = "repellat";
                xAmzSignedHeaders = "quibusdam";
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
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeDBSubnetGroupsRequest req = new GETDescribeDBSubnetGroupsRequest(GETDescribeDBSubnetGroupsActionEnum.DESCRIBE_DB_SUBNET_GROUPS, GETDescribeDBSubnetGroupsVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                dbSubnetGroupName = "saepe";
                marker = "pariatur";
                maxRecords = 37559L;
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "natus";
                xAmzDate = "magni";
                xAmzSecurityToken = "sunt";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "illum";
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
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeEngineDefaultParametersRequest req = new GETDescribeEngineDefaultParametersRequest(GETDescribeEngineDefaultParametersActionEnum.DESCRIBE_ENGINE_DEFAULT_PARAMETERS, "maxime", GETDescribeEngineDefaultParametersVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                marker = "ea";
                maxRecords = 569101L;
                xAmzAlgorithm = "odit";
                xAmzContentSha256 = "ea";
                xAmzCredential = "accusantium";
                xAmzDate = "ab";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "ipsam";
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
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeEventCategoriesRequest req = new GETDescribeEventCategoriesRequest(GETDescribeEventCategoriesActionEnum.DESCRIBE_EVENT_CATEGORIES, GETDescribeEventCategoriesVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                sourceType = "autem";
                xAmzAlgorithm = "nam";
                xAmzContentSha256 = "eaque";
                xAmzCredential = "pariatur";
                xAmzDate = "nemo";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "fugiat";
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
                .setSecurity(new Security("amet") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeEventSubscriptionsRequest req = new GETDescribeEventSubscriptionsRequest(GETDescribeEventSubscriptionsActionEnum.DESCRIBE_EVENT_SUBSCRIPTIONS, GETDescribeEventSubscriptionsVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                marker = "aut";
                maxRecords = 764912L;
                subscriptionName = "corporis";
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "libero";
                xAmzCredential = "nobis";
                xAmzDate = "dolores";
                xAmzSecurityToken = "quis";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "dignissimos";
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
                .setSecurity(new Security("eaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeEventsRequest req = new GETDescribeEventsRequest(GETDescribeEventsActionEnum.DESCRIBE_EVENTS, GETDescribeEventsVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                duration = 338985L;
                endTime = OffsetDateTime.parse("2022-10-27T11:39:54.088Z");
                eventCategories = new String[]{{
                    add("dolores"),
                }};
                marker = "minus";
                maxRecords = 463451L;
                sourceIdentifier = "dolor";
                sourceType = GETDescribeEventsSourceTypeEnum.DB_SNAPSHOT;
                startTime = OffsetDateTime.parse("2022-01-21T09:30:39.477Z");
                xAmzAlgorithm = "recusandae";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "facilis";
                xAmzDate = "perspiciatis";
                xAmzSecurityToken = "voluptatem";
                xAmzSignature = "porro";
                xAmzSignedHeaders = "consequuntur";
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
                .setSecurity(new Security("blanditiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeOptionGroupOptionsRequest req = new GETDescribeOptionGroupOptionsRequest(GETDescribeOptionGroupOptionsActionEnum.DESCRIBE_OPTION_GROUP_OPTIONS, "error", GETDescribeOptionGroupOptionsVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                majorEngineVersion = "eaque";
                marker = "occaecati";
                maxRecords = 699098L;
                xAmzAlgorithm = "adipisci";
                xAmzContentSha256 = "asperiores";
                xAmzCredential = "earum";
                xAmzDate = "modi";
                xAmzSecurityToken = "iste";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "deleniti";
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
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeOptionGroupsRequest req = new GETDescribeOptionGroupsRequest(GETDescribeOptionGroupsActionEnum.DESCRIBE_OPTION_GROUPS, GETDescribeOptionGroupsVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                engineName = "provident";
                majorEngineVersion = "nobis";
                marker = "libero";
                maxRecords = 964490L;
                optionGroupName = "quaerat";
                xAmzAlgorithm = "quos";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "dolorem";
                xAmzDate = "dolorem";
                xAmzSecurityToken = "dolor";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "ipsum";
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
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeOrderableDBInstanceOptionsRequest req = new GETDescribeOrderableDBInstanceOptionsRequest(GETDescribeOrderableDBInstanceOptionsActionEnum.DESCRIBE_ORDERABLE_DB_INSTANCE_OPTIONS, "excepturi", GETDescribeOrderableDBInstanceOptionsVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                dbInstanceClass = "cum";
                engineVersion = "voluptate";
                licenseModel = "dignissimos";
                marker = "reiciendis";
                maxRecords = 227414L;
                vpc = false;
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "numquam";
                xAmzCredential = "veritatis";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "odio";
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
                .setSecurity(new Security("quaerat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeReservedDBInstancesRequest req = new GETDescribeReservedDBInstancesRequest(GETDescribeReservedDBInstancesActionEnum.DESCRIBE_RESERVED_DB_INSTANCES, GETDescribeReservedDBInstancesVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                dbInstanceClass = "accusamus";
                duration = "quidem";
                marker = "voluptatibus";
                maxRecords = 377752L;
                multiAZ = false;
                offeringType = "natus";
                productDescription = "eos";
                reservedDBInstanceId = "atque";
                reservedDBInstancesOfferingId = "sit";
                xAmzAlgorithm = "fugiat";
                xAmzContentSha256 = "ab";
                xAmzCredential = "soluta";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "iusto";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "dolorum";
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
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeReservedDBInstancesOfferingsRequest req = new GETDescribeReservedDBInstancesOfferingsRequest(GETDescribeReservedDBInstancesOfferingsActionEnum.DESCRIBE_RESERVED_DB_INSTANCES_OFFERINGS, GETDescribeReservedDBInstancesOfferingsVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                dbInstanceClass = "omnis";
                duration = "necessitatibus";
                marker = "distinctio";
                maxRecords = 990339L;
                multiAZ = false;
                offeringType = "nihil";
                productDescription = "ipsum";
                reservedDBInstancesOfferingId = "voluptate";
                xAmzAlgorithm = "id";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "eius";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "amet";
                xAmzSignedHeaders = "optio";
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
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListTagsForResourceRequest req = new GETListTagsForResourceRequest(GETListTagsForResourceActionEnum.LIST_TAGS_FOR_RESOURCE, "ad", GETListTagsForResourceVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "deserunt";
                xAmzDate = "provident";
                xAmzSecurityToken = "minima";
                xAmzSignature = "repellendus";
                xAmzSignedHeaders = "totam";
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
                .setSecurity(new Security("similique") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETModifyDBInstanceRequest req = new GETModifyDBInstanceRequest(GETModifyDBInstanceActionEnum.MODIFY_DB_INSTANCE, "alias", GETModifyDBInstanceVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                allocatedStorage = 872651L;
                allowMajorVersionUpgrade = false;
                applyImmediately = false;
                autoMinorVersionUpgrade = false;
                backupRetentionPeriod = 311860L;
                dbInstanceClass = "tempora";
                dbParameterGroupName = "vel";
                dbSecurityGroups = new String[]{{
                    add("officiis"),
                    add("qui"),
                    add("dolorum"),
                    add("a"),
                }};
                engineVersion = "esse";
                iops = 687488L;
                masterUserPassword = "iusto";
                multiAZ = false;
                newDBInstanceIdentifier = "ipsum";
                optionGroupName = "quisquam";
                preferredBackupWindow = "tenetur";
                preferredMaintenanceWindow = "amet";
                vpcSecurityGroupIds = new String[]{{
                    add("accusamus"),
                    add("numquam"),
                    add("enim"),
                }};
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "totam";
                xAmzDate = "nihil";
                xAmzSecurityToken = "sit";
                xAmzSignature = "expedita";
                xAmzSignedHeaders = "neque";
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
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETModifyDBSubnetGroupRequest req = new GETModifyDBSubnetGroupRequest(GETModifyDBSubnetGroupActionEnum.MODIFY_DB_SUBNET_GROUP, "vel",                 new String[]{{
                                add("voluptas"),
                                add("deserunt"),
                                add("quam"),
                            }}, GETModifyDBSubnetGroupVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                dbSubnetGroupDescription = "ipsum";
                xAmzAlgorithm = "incidunt";
                xAmzContentSha256 = "qui";
                xAmzCredential = "cupiditate";
                xAmzDate = "maxime";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "soluta";
                xAmzSignedHeaders = "dicta";
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
                .setSecurity(new Security("laborum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETModifyEventSubscriptionRequest req = new GETModifyEventSubscriptionRequest(GETModifyEventSubscriptionActionEnum.MODIFY_EVENT_SUBSCRIPTION, "totam", GETModifyEventSubscriptionVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                enabled = false;
                eventCategories = new String[]{{
                    add("aspernatur"),
                    add("dolores"),
                }};
                snsTopicArn = "distinctio";
                sourceType = "facilis";
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "quam";
                xAmzCredential = "molestias";
                xAmzDate = "temporibus";
                xAmzSecurityToken = "qui";
                xAmzSignature = "neque";
                xAmzSignedHeaders = "fugit";
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
                .setSecurity(new Security("magni") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETPromoteReadReplicaRequest req = new GETPromoteReadReplicaRequest(GETPromoteReadReplicaActionEnum.PROMOTE_READ_REPLICA, "odio", GETPromoteReadReplicaVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                backupRetentionPeriod = 124833L;
                preferredBackupWindow = "ullam";
                xAmzAlgorithm = "nam";
                xAmzContentSha256 = "hic";
                xAmzCredential = "voluptatem";
                xAmzDate = "cumque";
                xAmzSecurityToken = "soluta";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "et";
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
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETPurchaseReservedDBInstancesOfferingRequest req = new GETPurchaseReservedDBInstancesOfferingRequest(GETPurchaseReservedDBInstancesOfferingActionEnum.PURCHASE_RESERVED_DB_INSTANCES_OFFERING, "ipsum", GETPurchaseReservedDBInstancesOfferingVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                dbInstanceCount = 83422L;
                reservedDBInstanceId = "nobis";
                xAmzAlgorithm = "quos";
                xAmzContentSha256 = "tempore";
                xAmzCredential = "cupiditate";
                xAmzDate = "aperiam";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "dolorem";
                xAmzSignedHeaders = "dolore";
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
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRebootDBInstanceRequest req = new GETRebootDBInstanceRequest(GETRebootDBInstanceActionEnum.REBOOT_DB_INSTANCE, "adipisci", GETRebootDBInstanceVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                forceFailover = false;
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "quae";
                xAmzDate = "aut";
                xAmzSecurityToken = "quas";
                xAmzSignature = "itaque";
                xAmzSignedHeaders = "consequatur";
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
                .setSecurity(new Security("est") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRemoveSourceIdentifierFromSubscriptionRequest req = new GETRemoveSourceIdentifierFromSubscriptionRequest(GETRemoveSourceIdentifierFromSubscriptionActionEnum.REMOVE_SOURCE_IDENTIFIER_FROM_SUBSCRIPTION, "repellendus", "porro", GETRemoveSourceIdentifierFromSubscriptionVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                xAmzAlgorithm = "doloribus";
                xAmzContentSha256 = "ut";
                xAmzCredential = "facilis";
                xAmzDate = "cupiditate";
                xAmzSecurityToken = "qui";
                xAmzSignature = "quae";
                xAmzSignedHeaders = "laudantium";
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
                .setSecurity(new Security("odio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRemoveTagsFromResourceRequest req = new GETRemoveTagsFromResourceRequest(GETRemoveTagsFromResourceActionEnum.REMOVE_TAGS_FROM_RESOURCE, "occaecati",                 new String[]{{
                                add("quisquam"),
                                add("vero"),
                                add("omnis"),
                                add("quis"),
                            }}, GETRemoveTagsFromResourceVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "voluptate";
                xAmzDate = "consectetur";
                xAmzSecurityToken = "vero";
                xAmzSignature = "tenetur";
                xAmzSignedHeaders = "dignissimos";
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
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRestoreDBInstanceFromDBSnapshotRequest req = new GETRestoreDBInstanceFromDBSnapshotRequest(GETRestoreDBInstanceFromDBSnapshotActionEnum.RESTORE_DB_INSTANCE_FROM_DB_SNAPSHOT, "distinctio", "quod", GETRestoreDBInstanceFromDBSnapshotVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                autoMinorVersionUpgrade = false;
                availabilityZone = "odio";
                dbInstanceClass = "similique";
                dbName = "facilis";
                dbSubnetGroupName = "vero";
                engine = "ducimus";
                iops = 293020L;
                licenseModel = "quibusdam";
                multiAZ = false;
                optionGroupName = "illum";
                port = 194342L;
                publiclyAccessible = false;
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "impedit";
                xAmzCredential = "aut";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "exercitationem";
                xAmzSignature = "nulla";
                xAmzSignedHeaders = "fugit";
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
                .setSecurity(new Security("porro") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRestoreDBInstanceToPointInTimeRequest req = new GETRestoreDBInstanceToPointInTimeRequest(GETRestoreDBInstanceToPointInTimeActionEnum.RESTORE_DB_INSTANCE_TO_POINT_IN_TIME, "maiores", "doloribus", GETRestoreDBInstanceToPointInTimeVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                autoMinorVersionUpgrade = false;
                availabilityZone = "iusto";
                dbInstanceClass = "eligendi";
                dbName = "ducimus";
                dbSubnetGroupName = "alias";
                engine = "officia";
                iops = 269479L;
                licenseModel = "ipsam";
                multiAZ = false;
                optionGroupName = "ea";
                port = 136900L;
                publiclyAccessible = false;
                restoreTime = OffsetDateTime.parse("2022-03-06T22:14:54.933Z");
                useLatestRestorableTime = false;
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "ratione";
                xAmzCredential = "ex";
                xAmzDate = "laudantium";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "maiores";
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
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRevokeDBSecurityGroupIngressRequest req = new GETRevokeDBSecurityGroupIngressRequest(GETRevokeDBSecurityGroupIngressActionEnum.REVOKE_DB_SECURITY_GROUP_INGRESS, "ex", GETRevokeDBSecurityGroupIngressVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                cidrip = "nulla";
                ec2SecurityGroupId = "excepturi";
                ec2SecurityGroupName = "voluptatibus";
                ec2SecurityGroupOwnerId = "nostrum";
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "quisquam";
                xAmzCredential = "saepe";
                xAmzDate = "ea";
                xAmzSecurityToken = "impedit";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "veniam";
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
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTAddSourceIdentifierToSubscriptionRequest req = new POSTAddSourceIdentifierToSubscriptionRequest(POSTAddSourceIdentifierToSubscriptionActionEnum.ADD_SOURCE_IDENTIFIER_TO_SUBSCRIPTION, POSTAddSourceIdentifierToSubscriptionVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                requestBody = "inventore".getBytes();
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "ea";
                xAmzCredential = "quo";
                xAmzDate = "consectetur";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "minima";
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
                .setSecurity(new Security("eaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTAddTagsToResourceRequest req = new POSTAddTagsToResourceRequest(POSTAddTagsToResourceActionEnum.ADD_TAGS_TO_RESOURCE, POSTAddTagsToResourceVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                requestBody = "a".getBytes();
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "aut";
                xAmzCredential = "aut";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "impedit";
                xAmzSignature = "aliquam";
                xAmzSignedHeaders = "fugit";
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
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTAuthorizeDBSecurityGroupIngressRequest req = new POSTAuthorizeDBSecurityGroupIngressRequest(POSTAuthorizeDBSecurityGroupIngressActionEnum.AUTHORIZE_DB_SECURITY_GROUP_INGRESS, POSTAuthorizeDBSecurityGroupIngressVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                requestBody = "inventore".getBytes();
                xAmzAlgorithm = "non";
                xAmzContentSha256 = "et";
                xAmzCredential = "dolorum";
                xAmzDate = "laborum";
                xAmzSecurityToken = "placeat";
                xAmzSignature = "velit";
                xAmzSignedHeaders = "eum";
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
                .setSecurity(new Security("autem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCopyDBSnapshotRequest req = new POSTCopyDBSnapshotRequest(POSTCopyDBSnapshotActionEnum.COPY_DB_SNAPSHOT, POSTCopyDBSnapshotVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                requestBody = "nobis".getBytes();
                xAmzAlgorithm = "quas";
                xAmzContentSha256 = "assumenda";
                xAmzCredential = "nulla";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "libero";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "tempora";
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
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateDBInstanceRequest req = new POSTCreateDBInstanceRequest(POSTCreateDBInstanceActionEnum.CREATE_DB_INSTANCE, POSTCreateDBInstanceVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                requestBody = "explicabo".getBytes();
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "molestiae";
                xAmzDate = "magnam";
                xAmzSecurityToken = "odio";
                xAmzSignature = "eius";
                xAmzSignedHeaders = "esse";
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
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateDBInstanceReadReplicaRequest req = new POSTCreateDBInstanceReadReplicaRequest(POSTCreateDBInstanceReadReplicaActionEnum.CREATE_DB_INSTANCE_READ_REPLICA, POSTCreateDBInstanceReadReplicaVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                requestBody = "rem".getBytes();
                xAmzAlgorithm = "fuga";
                xAmzContentSha256 = "reprehenderit";
                xAmzCredential = "quidem";
                xAmzDate = "fugiat";
                xAmzSecurityToken = "ut";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "suscipit";
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
                .setSecurity(new Security("assumenda") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateDBParameterGroupRequest req = new POSTCreateDBParameterGroupRequest(POSTCreateDBParameterGroupActionEnum.CREATE_DB_PARAMETER_GROUP, POSTCreateDBParameterGroupVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                requestBody = "eos".getBytes();
                xAmzAlgorithm = "praesentium";
                xAmzContentSha256 = "quisquam";
                xAmzCredential = "veritatis";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "id";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "neque";
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
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateDBSecurityGroupRequest req = new POSTCreateDBSecurityGroupRequest(POSTCreateDBSecurityGroupActionEnum.CREATE_DB_SECURITY_GROUP, POSTCreateDBSecurityGroupVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                requestBody = "illum".getBytes();
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "fuga";
                xAmzCredential = "eius";
                xAmzDate = "eos";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "cupiditate";
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
                .setSecurity(new Security("consequatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateDBSnapshotRequest req = new POSTCreateDBSnapshotRequest(POSTCreateDBSnapshotActionEnum.CREATE_DB_SNAPSHOT, POSTCreateDBSnapshotVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                requestBody = "tempora".getBytes();
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "aspernatur";
                xAmzDate = "sequi";
                xAmzSecurityToken = "quo";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "recusandae";
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
                .setSecurity(new Security("aperiam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateDBSubnetGroupRequest req = new POSTCreateDBSubnetGroupRequest(POSTCreateDBSubnetGroupActionEnum.CREATE_DB_SUBNET_GROUP, POSTCreateDBSubnetGroupVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                requestBody = "distinctio".getBytes();
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "dignissimos";
                xAmzCredential = "inventore";
                xAmzDate = "nihil";
                xAmzSecurityToken = "totam";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "aliquam";
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
                .setSecurity(new Security("odio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateEventSubscriptionRequest req = new POSTCreateEventSubscriptionRequest(POSTCreateEventSubscriptionActionEnum.CREATE_EVENT_SUBSCRIPTION, POSTCreateEventSubscriptionVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                requestBody = "occaecati".getBytes();
                xAmzAlgorithm = "commodi";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "dolores";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "porro";
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
                .setSecurity(new Security("eum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateOptionGroupRequest req = new POSTCreateOptionGroupRequest(POSTCreateOptionGroupActionEnum.CREATE_OPTION_GROUP, POSTCreateOptionGroupVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                requestBody = "quas".getBytes();
                xAmzAlgorithm = "praesentium";
                xAmzContentSha256 = "consequuntur";
                xAmzCredential = "deleniti";
                xAmzDate = "fugit";
                xAmzSecurityToken = "fuga";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "incidunt";
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
                .setSecurity(new Security("atque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteDBInstanceRequest req = new POSTDeleteDBInstanceRequest(POSTDeleteDBInstanceActionEnum.DELETE_DB_INSTANCE, POSTDeleteDBInstanceVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                requestBody = "explicabo".getBytes();
                xAmzAlgorithm = "minima";
                xAmzContentSha256 = "nisi";
                xAmzCredential = "fugit";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "consequuntur";
                xAmzSignature = "ratione";
                xAmzSignedHeaders = "explicabo";
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
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteDBParameterGroupRequest req = new POSTDeleteDBParameterGroupRequest(POSTDeleteDBParameterGroupActionEnum.DELETE_DB_PARAMETER_GROUP, POSTDeleteDBParameterGroupVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                requestBody = "occaecati".getBytes();
                xAmzAlgorithm = "atque";
                xAmzContentSha256 = "et";
                xAmzCredential = "esse";
                xAmzDate = "eveniet";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "esse";
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
                .setSecurity(new Security("quod") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteDBSecurityGroupRequest req = new POSTDeleteDBSecurityGroupRequest(POSTDeleteDBSecurityGroupActionEnum.DELETE_DB_SECURITY_GROUP, POSTDeleteDBSecurityGroupVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                requestBody = "nam".getBytes();
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "quasi";
                xAmzDate = "saepe";
                xAmzSecurityToken = "vel";
                xAmzSignature = "harum";
                xAmzSignedHeaders = "molestiae";
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
                .setSecurity(new Security("rerum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteDBSnapshotRequest req = new POSTDeleteDBSnapshotRequest(POSTDeleteDBSnapshotActionEnum.DELETE_DB_SNAPSHOT, POSTDeleteDBSnapshotVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                requestBody = "occaecati".getBytes();
                xAmzAlgorithm = "minima";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "eligendi";
                xAmzDate = "sit";
                xAmzSecurityToken = "culpa";
                xAmzSignature = "tempore";
                xAmzSignedHeaders = "adipisci";
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
                .setSecurity(new Security("cumque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteDBSubnetGroupRequest req = new POSTDeleteDBSubnetGroupRequest(POSTDeleteDBSubnetGroupActionEnum.DELETE_DB_SUBNET_GROUP, POSTDeleteDBSubnetGroupVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                requestBody = "consequuntur".getBytes();
                xAmzAlgorithm = "consequatur";
                xAmzContentSha256 = "minus";
                xAmzCredential = "quaerat";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "consectetur";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "blanditiis";
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
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteEventSubscriptionRequest req = new POSTDeleteEventSubscriptionRequest(POSTDeleteEventSubscriptionActionEnum.DELETE_EVENT_SUBSCRIPTION, POSTDeleteEventSubscriptionVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                requestBody = "a".getBytes();
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "quas";
                xAmzCredential = "esse";
                xAmzDate = "quasi";
                xAmzSecurityToken = "a";
                xAmzSignature = "error";
                xAmzSignedHeaders = "sint";
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
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteOptionGroupRequest req = new POSTDeleteOptionGroupRequest(POSTDeleteOptionGroupActionEnum.DELETE_OPTION_GROUP, POSTDeleteOptionGroupVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                requestBody = "possimus".getBytes();
                xAmzAlgorithm = "quia";
                xAmzContentSha256 = "eveniet";
                xAmzCredential = "asperiores";
                xAmzDate = "facere";
                xAmzSecurityToken = "veritatis";
                xAmzSignature = "consequuntur";
                xAmzSignedHeaders = "quasi";
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
                .setSecurity(new Security("similique") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDBEngineVersionsRequest req = new POSTDescribeDBEngineVersionsRequest(POSTDescribeDBEngineVersionsActionEnum.DESCRIBE_DB_ENGINE_VERSIONS, POSTDescribeDBEngineVersionsVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                marker = "culpa";
                maxRecords = "aliquid";
                requestBody = "tenetur".getBytes();
                xAmzAlgorithm = "quae";
                xAmzContentSha256 = "earum";
                xAmzCredential = "vel";
                xAmzDate = "in";
                xAmzSecurityToken = "eius";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "illum";
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
                .setSecurity(new Security("soluta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDBInstancesRequest req = new POSTDescribeDBInstancesRequest(POSTDescribeDBInstancesActionEnum.DESCRIBE_DB_INSTANCES, POSTDescribeDBInstancesVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                marker = "accusantium";
                maxRecords = "aliquam";
                requestBody = "sapiente".getBytes();
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "ullam";
                xAmzCredential = "reprehenderit";
                xAmzDate = "ullam";
                xAmzSecurityToken = "nisi";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "voluptatum";
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
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDBParameterGroupsRequest req = new POSTDescribeDBParameterGroupsRequest(POSTDescribeDBParameterGroupsActionEnum.DESCRIBE_DB_PARAMETER_GROUPS, POSTDescribeDBParameterGroupsVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                marker = "quibusdam";
                maxRecords = "ex";
                requestBody = "deleniti".getBytes();
                xAmzAlgorithm = "itaque";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "architecto";
                xAmzDate = "omnis";
                xAmzSecurityToken = "tenetur";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "at";
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
                .setSecurity(new Security("et") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDBParametersRequest req = new POSTDescribeDBParametersRequest(POSTDescribeDBParametersActionEnum.DESCRIBE_DB_PARAMETERS, POSTDescribeDBParametersVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                marker = "voluptate";
                maxRecords = "ipsa";
                requestBody = "minima".getBytes();
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "consectetur";
                xAmzCredential = "adipisci";
                xAmzDate = "iste";
                xAmzSecurityToken = "temporibus";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "rem";
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
                .setSecurity(new Security("aut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDBSecurityGroupsRequest req = new POSTDescribeDBSecurityGroupsRequest(POSTDescribeDBSecurityGroupsActionEnum.DESCRIBE_DB_SECURITY_GROUPS, POSTDescribeDBSecurityGroupsVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                marker = "laudantium";
                maxRecords = "eum";
                requestBody = "mollitia".getBytes();
                xAmzAlgorithm = "ab";
                xAmzContentSha256 = "corrupti";
                xAmzCredential = "non";
                xAmzDate = "voluptatem";
                xAmzSecurityToken = "dolor";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "numquam";
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
                .setSecurity(new Security("impedit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDBSnapshotsRequest req = new POSTDescribeDBSnapshotsRequest(POSTDescribeDBSnapshotsActionEnum.DESCRIBE_DB_SNAPSHOTS, POSTDescribeDBSnapshotsVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                marker = "explicabo";
                maxRecords = "voluptas";
                requestBody = "aut".getBytes();
                xAmzAlgorithm = "dignissimos";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "maiores";
                xAmzDate = "natus";
                xAmzSecurityToken = "velit";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "voluptas";
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
                .setSecurity(new Security("asperiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDBSubnetGroupsRequest req = new POSTDescribeDBSubnetGroupsRequest(POSTDescribeDBSubnetGroupsActionEnum.DESCRIBE_DB_SUBNET_GROUPS, POSTDescribeDBSubnetGroupsVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                marker = "aperiam";
                maxRecords = "ea";
                requestBody = "quaerat".getBytes();
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "repellendus";
                xAmzCredential = "officia";
                xAmzDate = "maxime";
                xAmzSecurityToken = "dignissimos";
                xAmzSignature = "officia";
                xAmzSignedHeaders = "asperiores";
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
                .setSecurity(new Security("nemo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeEngineDefaultParametersRequest req = new POSTDescribeEngineDefaultParametersRequest(POSTDescribeEngineDefaultParametersActionEnum.DESCRIBE_ENGINE_DEFAULT_PARAMETERS, POSTDescribeEngineDefaultParametersVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                marker = "quae";
                maxRecords = "quaerat";
                requestBody = "porro".getBytes();
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "labore";
                xAmzCredential = "ab";
                xAmzDate = "adipisci";
                xAmzSecurityToken = "fuga";
                xAmzSignature = "id";
                xAmzSignedHeaders = "suscipit";
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
                .setSecurity(new Security("velit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeEventCategoriesRequest req = new POSTDescribeEventCategoriesRequest(POSTDescribeEventCategoriesActionEnum.DESCRIBE_EVENT_CATEGORIES, POSTDescribeEventCategoriesVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                requestBody = "culpa".getBytes();
                xAmzAlgorithm = "est";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "totam";
                xAmzDate = "fugiat";
                xAmzSecurityToken = "vel";
                xAmzSignature = "ducimus";
                xAmzSignedHeaders = "quos";
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
                .setSecurity(new Security("vel") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeEventSubscriptionsRequest req = new POSTDescribeEventSubscriptionsRequest(POSTDescribeEventSubscriptionsActionEnum.DESCRIBE_EVENT_SUBSCRIPTIONS, POSTDescribeEventSubscriptionsVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                marker = "labore";
                maxRecords = "possimus";
                requestBody = "facilis".getBytes();
                xAmzAlgorithm = "cum";
                xAmzContentSha256 = "commodi";
                xAmzCredential = "in";
                xAmzDate = "corporis";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "assumenda";
                xAmzSignedHeaders = "nemo";
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
                .setSecurity(new Security("recusandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeEventsRequest req = new POSTDescribeEventsRequest(POSTDescribeEventsActionEnum.DESCRIBE_EVENTS, POSTDescribeEventsVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                marker = "aliquid";
                maxRecords = "aperiam";
                requestBody = "cum".getBytes();
                xAmzAlgorithm = "consectetur";
                xAmzContentSha256 = "in";
                xAmzCredential = "exercitationem";
                xAmzDate = "earum";
                xAmzSecurityToken = "facere";
                xAmzSignature = "numquam";
                xAmzSignedHeaders = "doloribus";
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
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeOptionGroupOptionsRequest req = new POSTDescribeOptionGroupOptionsRequest(POSTDescribeOptionGroupOptionsActionEnum.DESCRIBE_OPTION_GROUP_OPTIONS, POSTDescribeOptionGroupOptionsVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                marker = "reiciendis";
                maxRecords = "quidem";
                requestBody = "saepe".getBytes();
                xAmzAlgorithm = "necessitatibus";
                xAmzContentSha256 = "dolore";
                xAmzCredential = "sunt";
                xAmzDate = "asperiores";
                xAmzSecurityToken = "adipisci";
                xAmzSignature = "non";
                xAmzSignedHeaders = "amet";
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
                .setSecurity(new Security("beatae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeOptionGroupsRequest req = new POSTDescribeOptionGroupsRequest(POSTDescribeOptionGroupsActionEnum.DESCRIBE_OPTION_GROUPS, POSTDescribeOptionGroupsVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                marker = "dignissimos";
                maxRecords = "a";
                requestBody = "debitis".getBytes();
                xAmzAlgorithm = "consectetur";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "harum";
                xAmzDate = "laboriosam";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "voluptates";
                xAmzSignedHeaders = "libero";
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
                .setSecurity(new Security("vitae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeOrderableDBInstanceOptionsRequest req = new POSTDescribeOrderableDBInstanceOptionsRequest(POSTDescribeOrderableDBInstanceOptionsActionEnum.DESCRIBE_ORDERABLE_DB_INSTANCE_OPTIONS, POSTDescribeOrderableDBInstanceOptionsVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                marker = "accusamus";
                maxRecords = "similique";
                requestBody = "tempora".getBytes();
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "voluptas";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "minima";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "dolorum";
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
                .setSecurity(new Security("adipisci") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeReservedDBInstancesRequest req = new POSTDescribeReservedDBInstancesRequest(POSTDescribeReservedDBInstancesActionEnum.DESCRIBE_RESERVED_DB_INSTANCES, POSTDescribeReservedDBInstancesVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                marker = "minus";
                maxRecords = "dolores";
                requestBody = "blanditiis".getBytes();
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "dolore";
                xAmzCredential = "aliquam";
                xAmzDate = "officiis";
                xAmzSecurityToken = "temporibus";
                xAmzSignature = "ullam";
                xAmzSignedHeaders = "adipisci";
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
                .setSecurity(new Security("cum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeReservedDBInstancesOfferingsRequest req = new POSTDescribeReservedDBInstancesOfferingsRequest(POSTDescribeReservedDBInstancesOfferingsActionEnum.DESCRIBE_RESERVED_DB_INSTANCES_OFFERINGS, POSTDescribeReservedDBInstancesOfferingsVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                marker = "blanditiis";
                maxRecords = "quas";
                requestBody = "hic".getBytes();
                xAmzAlgorithm = "nesciunt";
                xAmzContentSha256 = "culpa";
                xAmzCredential = "corrupti";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "totam";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "exercitationem";
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
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListTagsForResourceRequest req = new POSTListTagsForResourceRequest(POSTListTagsForResourceActionEnum.LIST_TAGS_FOR_RESOURCE, POSTListTagsForResourceVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                requestBody = "sit".getBytes();
                xAmzAlgorithm = "rerum";
                xAmzContentSha256 = "sed";
                xAmzCredential = "reiciendis";
                xAmzDate = "explicabo";
                xAmzSecurityToken = "asperiores";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "voluptate";
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
                .setSecurity(new Security("expedita") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyDBInstanceRequest req = new POSTModifyDBInstanceRequest(POSTModifyDBInstanceActionEnum.MODIFY_DB_INSTANCE, POSTModifyDBInstanceVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                requestBody = "ab".getBytes();
                xAmzAlgorithm = "iste";
                xAmzContentSha256 = "dolore";
                xAmzCredential = "laborum";
                xAmzDate = "sed";
                xAmzSecurityToken = "in";
                xAmzSignature = "commodi";
                xAmzSignedHeaders = "quidem";
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
                .setSecurity(new Security("explicabo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyDBParameterGroupRequest req = new POSTModifyDBParameterGroupRequest(POSTModifyDBParameterGroupActionEnum.MODIFY_DB_PARAMETER_GROUP, POSTModifyDBParameterGroupVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                requestBody = "voluptas".getBytes();
                xAmzAlgorithm = "unde";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "suscipit";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "illo";
                xAmzSignedHeaders = "reiciendis";
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
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyDBSubnetGroupRequest req = new POSTModifyDBSubnetGroupRequest(POSTModifyDBSubnetGroupActionEnum.MODIFY_DB_SUBNET_GROUP, POSTModifyDBSubnetGroupVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                requestBody = "corrupti".getBytes();
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "incidunt";
                xAmzCredential = "sed";
                xAmzDate = "provident";
                xAmzSecurityToken = "eius";
                xAmzSignature = "necessitatibus";
                xAmzSignedHeaders = "ipsum";
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
                .setSecurity(new Security("ea") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyEventSubscriptionRequest req = new POSTModifyEventSubscriptionRequest(POSTModifyEventSubscriptionActionEnum.MODIFY_EVENT_SUBSCRIPTION, POSTModifyEventSubscriptionVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                requestBody = "occaecati".getBytes();
                xAmzAlgorithm = "quos";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "tempora";
                xAmzDate = "tempora";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "ex";
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
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyOptionGroupRequest req = new POSTModifyOptionGroupRequest(POSTModifyOptionGroupActionEnum.MODIFY_OPTION_GROUP, POSTModifyOptionGroupVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                requestBody = "non".getBytes();
                xAmzAlgorithm = "officiis";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "facilis";
                xAmzDate = "quaerat";
                xAmzSecurityToken = "incidunt";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "debitis";
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
                .setSecurity(new Security("rem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTPromoteReadReplicaRequest req = new POSTPromoteReadReplicaRequest(POSTPromoteReadReplicaActionEnum.PROMOTE_READ_REPLICA, POSTPromoteReadReplicaVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                requestBody = "sit".getBytes();
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "error";
                xAmzCredential = "veniam";
                xAmzDate = "minima";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "nulla";
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
                .setSecurity(new Security("magni") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTPurchaseReservedDBInstancesOfferingRequest req = new POSTPurchaseReservedDBInstancesOfferingRequest(POSTPurchaseReservedDBInstancesOfferingActionEnum.PURCHASE_RESERVED_DB_INSTANCES_OFFERING, POSTPurchaseReservedDBInstancesOfferingVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                requestBody = "aperiam".getBytes();
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "numquam";
                xAmzCredential = "veniam";
                xAmzDate = "in";
                xAmzSecurityToken = "officiis";
                xAmzSignature = "beatae";
                xAmzSignedHeaders = "laudantium";
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
                .setSecurity(new Security("exercitationem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRebootDBInstanceRequest req = new POSTRebootDBInstanceRequest(POSTRebootDBInstanceActionEnum.REBOOT_DB_INSTANCE, POSTRebootDBInstanceVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                requestBody = "praesentium".getBytes();
                xAmzAlgorithm = "cum";
                xAmzContentSha256 = "laboriosam";
                xAmzCredential = "dolorum";
                xAmzDate = "voluptatum";
                xAmzSecurityToken = "error";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "expedita";
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
                .setSecurity(new Security("debitis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRemoveSourceIdentifierFromSubscriptionRequest req = new POSTRemoveSourceIdentifierFromSubscriptionRequest(POSTRemoveSourceIdentifierFromSubscriptionActionEnum.REMOVE_SOURCE_IDENTIFIER_FROM_SUBSCRIPTION, POSTRemoveSourceIdentifierFromSubscriptionVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                requestBody = "neque".getBytes();
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "nostrum";
                xAmzCredential = "officia";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "tempora";
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
                .setSecurity(new Security("atque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRemoveTagsFromResourceRequest req = new POSTRemoveTagsFromResourceRequest(POSTRemoveTagsFromResourceActionEnum.REMOVE_TAGS_FROM_RESOURCE, POSTRemoveTagsFromResourceVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                requestBody = "fugit".getBytes();
                xAmzAlgorithm = "ut";
                xAmzContentSha256 = "fugiat";
                xAmzCredential = "voluptatem";
                xAmzDate = "culpa";
                xAmzSecurityToken = "expedita";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "consequatur";
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
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTResetDBParameterGroupRequest req = new POSTResetDBParameterGroupRequest(POSTResetDBParameterGroupActionEnum.RESET_DB_PARAMETER_GROUP, POSTResetDBParameterGroupVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                requestBody = "ipsam".getBytes();
                xAmzAlgorithm = "sit";
                xAmzContentSha256 = "voluptatum";
                xAmzCredential = "quas";
                xAmzDate = "repudiandae";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "et";
                xAmzSignedHeaders = "blanditiis";
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
                .setSecurity(new Security("ex") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRestoreDBInstanceFromDBSnapshotRequest req = new POSTRestoreDBInstanceFromDBSnapshotRequest(POSTRestoreDBInstanceFromDBSnapshotActionEnum.RESTORE_DB_INSTANCE_FROM_DB_SNAPSHOT, POSTRestoreDBInstanceFromDBSnapshotVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                requestBody = "sed".getBytes();
                xAmzAlgorithm = "sit";
                xAmzContentSha256 = "vel";
                xAmzCredential = "nostrum";
                xAmzDate = "saepe";
                xAmzSecurityToken = "error";
                xAmzSignature = "consequatur";
                xAmzSignedHeaders = "incidunt";
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
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRestoreDBInstanceToPointInTimeRequest req = new POSTRestoreDBInstanceToPointInTimeRequest(POSTRestoreDBInstanceToPointInTimeActionEnum.RESTORE_DB_INSTANCE_TO_POINT_IN_TIME, POSTRestoreDBInstanceToPointInTimeVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                requestBody = "dolorem".getBytes();
                xAmzAlgorithm = "harum";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "architecto";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "labore";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "atque";
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
                .setSecurity(new Security("laborum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRevokeDBSecurityGroupIngressRequest req = new POSTRevokeDBSecurityGroupIngressRequest(POSTRevokeDBSecurityGroupIngressActionEnum.REVOKE_DB_SECURITY_GROUP_INGRESS, POSTRevokeDBSecurityGroupIngressVersionEnum.TWO_THOUSAND_AND_THIRTEEN0110) {{
                requestBody = "nam".getBytes();
                xAmzAlgorithm = "tenetur";
                xAmzContentSha256 = "laboriosam";
                xAmzCredential = "alias";
                xAmzDate = "amet";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "unde";
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
