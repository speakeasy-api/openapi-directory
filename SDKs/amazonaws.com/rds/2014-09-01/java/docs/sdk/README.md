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
* [postCopyDBParameterGroup](#postcopydbparametergroup)
* [postCopyDBSnapshot](#postcopydbsnapshot)
* [postCopyOptionGroup](#postcopyoptiongroup)
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

            GETAddSourceIdentifierToSubscriptionRequest req = new GETAddSourceIdentifierToSubscriptionRequest(GETAddSourceIdentifierToSubscriptionActionEnum.ADD_SOURCE_IDENTIFIER_TO_SUBSCRIPTION, "suscipit", "iure", GETAddSourceIdentifierToSubscriptionVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
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

            GETAuthorizeDBSecurityGroupIngressRequest req = new GETAuthorizeDBSecurityGroupIngressRequest(GETAuthorizeDBSecurityGroupIngressActionEnum.AUTHORIZE_DB_SECURITY_GROUP_INGRESS, "placeat", GETAuthorizeDBSecurityGroupIngressVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
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
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteDBInstanceRequest req = new GETDeleteDBInstanceRequest(GETDeleteDBInstanceActionEnum.DELETE_DB_INSTANCE, "repellendus", GETDeleteDBInstanceVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                finalDBSnapshotIdentifier = "sapiente";
                skipFinalSnapshot = false;
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "odit";
                xAmzCredential = "at";
                xAmzDate = "at";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "quod";
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
                .setSecurity(new Security("quod") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteDBParameterGroupRequest req = new GETDeleteDBParameterGroupRequest(GETDeleteDBParameterGroupActionEnum.DELETE_DB_PARAMETER_GROUP, "esse", GETDeleteDBParameterGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "porro";
                xAmzCredential = "dolorum";
                xAmzDate = "dicta";
                xAmzSecurityToken = "nam";
                xAmzSignature = "officia";
                xAmzSignedHeaders = "occaecati";
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
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteDBSecurityGroupRequest req = new GETDeleteDBSecurityGroupRequest(GETDeleteDBSecurityGroupActionEnum.DELETE_DB_SECURITY_GROUP, "deleniti", GETDeleteDBSecurityGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "optio";
                xAmzCredential = "totam";
                xAmzDate = "beatae";
                xAmzSecurityToken = "commodi";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "modi";
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
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteDBSnapshotRequest req = new GETDeleteDBSnapshotRequest(GETDeleteDBSnapshotActionEnum.DELETE_DB_SNAPSHOT, "impedit", GETDeleteDBSnapshotVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                xAmzAlgorithm = "cum";
                xAmzContentSha256 = "esse";
                xAmzCredential = "ipsum";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "ad";
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
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteDBSubnetGroupRequest req = new GETDeleteDBSubnetGroupRequest(GETDeleteDBSubnetGroupActionEnum.DELETE_DB_SUBNET_GROUP, "sed", GETDeleteDBSubnetGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                xAmzAlgorithm = "iste";
                xAmzContentSha256 = "dolor";
                xAmzCredential = "natus";
                xAmzDate = "laboriosam";
                xAmzSecurityToken = "hic";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "fuga";
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
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteEventSubscriptionRequest req = new GETDeleteEventSubscriptionRequest(GETDeleteEventSubscriptionActionEnum.DELETE_EVENT_SUBSCRIPTION, "corporis", GETDeleteEventSubscriptionVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                xAmzAlgorithm = "iste";
                xAmzContentSha256 = "iure";
                xAmzCredential = "saepe";
                xAmzDate = "quidem";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "reiciendis";
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
                .setSecurity(new Security("est") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteOptionGroupRequest req = new GETDeleteOptionGroupRequest(GETDeleteOptionGroupActionEnum.DELETE_OPTION_GROUP, "mollitia", GETDeleteOptionGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "dolores";
                xAmzCredential = "dolorem";
                xAmzDate = "corporis";
                xAmzSecurityToken = "explicabo";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "enim";
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
                .setSecurity(new Security("omnis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDownloadDBLogFilePortionRequest req = new GETDownloadDBLogFilePortionRequest(GETDownloadDBLogFilePortionActionEnum.DOWNLOAD_DB_LOG_FILE_PORTION, "nemo", "minima", GETDownloadDBLogFilePortionVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                marker = "excepturi";
                numberOfLines = 38425L;
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "culpa";
                xAmzCredential = "doloribus";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "dolorem";
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
                .setSecurity(new Security("culpa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETModifyDBInstanceRequest req = new GETModifyDBInstanceRequest(GETModifyDBInstanceActionEnum.MODIFY_DB_INSTANCE, "consequuntur", GETModifyDBInstanceVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                allocatedStorage = 995300L;
                allowMajorVersionUpgrade = false;
                applyImmediately = false;
                autoMinorVersionUpgrade = false;
                backupRetentionPeriod = 653108L;
                dbInstanceClass = "occaecati";
                dbParameterGroupName = "numquam";
                dbSecurityGroups = new String[]{{
                    add("quam"),
                    add("molestiae"),
                }};
                engineVersion = "velit";
                iops = 623510L;
                masterUserPassword = "quia";
                multiAZ = false;
                newDBInstanceIdentifier = "quis";
                optionGroupName = "vitae";
                preferredBackupWindow = "laborum";
                preferredMaintenanceWindow = "animi";
                storageType = "enim";
                tdeCredentialArn = "odit";
                tdeCredentialPassword = "quo";
                vpcSecurityGroupIds = new String[]{{
                    add("tenetur"),
                }};
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "id";
                xAmzCredential = "possimus";
                xAmzDate = "aut";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "error";
                xAmzSignedHeaders = "temporibus";
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
                .setSecurity(new Security("laborum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETModifyDBSubnetGroupRequest req = new GETModifyDBSubnetGroupRequest(GETModifyDBSubnetGroupActionEnum.MODIFY_DB_SUBNET_GROUP, "quasi",                 new String[]{{
                                add("voluptatibus"),
                                add("vero"),
                                add("nihil"),
                                add("praesentium"),
                            }}, GETModifyDBSubnetGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                dbSubnetGroupDescription = "voluptatibus";
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "voluptate";
                xAmzDate = "cum";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "doloremque";
                xAmzSignedHeaders = "reprehenderit";
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
                .setSecurity(new Security("ut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETModifyEventSubscriptionRequest req = new GETModifyEventSubscriptionRequest(GETModifyEventSubscriptionActionEnum.MODIFY_EVENT_SUBSCRIPTION, "maiores", GETModifyEventSubscriptionVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                enabled = false;
                eventCategories = new String[]{{
                    add("corporis"),
                }};
                snsTopicArn = "dolore";
                sourceType = "iusto";
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "harum";
                xAmzCredential = "enim";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "commodi";
                xAmzSignature = "repudiandae";
                xAmzSignedHeaders = "quae";
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
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETPromoteReadReplicaRequest req = new GETPromoteReadReplicaRequest(GETPromoteReadReplicaActionEnum.PROMOTE_READ_REPLICA, "quidem", GETPromoteReadReplicaVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                backupRetentionPeriod = 565189L;
                preferredBackupWindow = "excepturi";
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "modi";
                xAmzCredential = "praesentium";
                xAmzDate = "rem";
                xAmzSecurityToken = "voluptates";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "repudiandae";
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
                .setSecurity(new Security("sint") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRebootDBInstanceRequest req = new GETRebootDBInstanceRequest(GETRebootDBInstanceActionEnum.REBOOT_DB_INSTANCE, "veritatis", GETRebootDBInstanceVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                forceFailover = false;
                xAmzAlgorithm = "itaque";
                xAmzContentSha256 = "incidunt";
                xAmzCredential = "enim";
                xAmzDate = "consequatur";
                xAmzSecurityToken = "est";
                xAmzSignature = "quibusdam";
                xAmzSignedHeaders = "explicabo";
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
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRemoveSourceIdentifierFromSubscriptionRequest req = new GETRemoveSourceIdentifierFromSubscriptionRequest(GETRemoveSourceIdentifierFromSubscriptionActionEnum.REMOVE_SOURCE_IDENTIFIER_FROM_SUBSCRIPTION, "distinctio", "quibusdam", GETRemoveSourceIdentifierFromSubscriptionVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "modi";
                xAmzCredential = "qui";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "cupiditate";
                xAmzSignature = "quos";
                xAmzSignedHeaders = "perferendis";
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
                .setSecurity(new Security("magni") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRemoveTagsFromResourceRequest req = new GETRemoveTagsFromResourceRequest(GETRemoveTagsFromResourceActionEnum.REMOVE_TAGS_FROM_RESOURCE, "assumenda",                 new String[]{{
                                add("alias"),
                                add("fugit"),
                            }}, GETRemoveTagsFromResourceVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "tempora";
                xAmzDate = "facilis";
                xAmzSecurityToken = "tempore";
                xAmzSignature = "labore";
                xAmzSignedHeaders = "delectus";
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
                .setSecurity(new Security("eum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRevokeDBSecurityGroupIngressRequest req = new GETRevokeDBSecurityGroupIngressRequest(GETRevokeDBSecurityGroupIngressActionEnum.REVOKE_DB_SECURITY_GROUP_INGRESS, "non", GETRevokeDBSecurityGroupIngressVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                cidrip = "eligendi";
                ec2SecurityGroupId = "sint";
                ec2SecurityGroupName = "aliquid";
                ec2SecurityGroupOwnerId = "provident";
                xAmzAlgorithm = "necessitatibus";
                xAmzContentSha256 = "sint";
                xAmzCredential = "officia";
                xAmzDate = "dolor";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "a";
                xAmzSignedHeaders = "dolorum";
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
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTAddSourceIdentifierToSubscriptionRequest req = new POSTAddSourceIdentifierToSubscriptionRequest(POSTAddSourceIdentifierToSubscriptionActionEnum.ADD_SOURCE_IDENTIFIER_TO_SUBSCRIPTION, POSTAddSourceIdentifierToSubscriptionVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                requestBody = "in".getBytes();
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "rerum";
                xAmzDate = "dicta";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "cumque";
                xAmzSignedHeaders = "facere";
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
                .setSecurity(new Security("ea") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTAddTagsToResourceRequest req = new POSTAddTagsToResourceRequest(POSTAddTagsToResourceActionEnum.ADD_TAGS_TO_RESOURCE, POSTAddTagsToResourceVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                requestBody = "aliquid".getBytes();
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "non";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "enim";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "delectus";
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
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTAuthorizeDBSecurityGroupIngressRequest req = new POSTAuthorizeDBSecurityGroupIngressRequest(POSTAuthorizeDBSecurityGroupIngressActionEnum.AUTHORIZE_DB_SECURITY_GROUP_INGRESS, POSTAuthorizeDBSecurityGroupIngressVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                requestBody = "provident".getBytes();
                xAmzAlgorithm = "nam";
                xAmzContentSha256 = "id";
                xAmzCredential = "blanditiis";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "amet";
                xAmzSignedHeaders = "deserunt";
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

## postCopyDBParameterGroup

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCopyDBParameterGroupActionEnum;
import org.openapis.openapi.models.operations.POSTCopyDBParameterGroupRequest;
import org.openapis.openapi.models.operations.POSTCopyDBParameterGroupResponse;
import org.openapis.openapi.models.operations.POSTCopyDBParameterGroupVersionEnum;
import org.openapis.openapi.models.shared.CopyDBParameterGroupMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nisi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCopyDBParameterGroupRequest req = new POSTCopyDBParameterGroupRequest(POSTCopyDBParameterGroupActionEnum.COPY_DB_PARAMETER_GROUP, POSTCopyDBParameterGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                requestBody = "vel".getBytes();
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "molestiae";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "nihil";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "distinctio";
            }};            

            POSTCopyDBParameterGroupResponse res = sdk.sdk.postCopyDBParameterGroup(req);

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
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCopyDBSnapshotRequest req = new POSTCopyDBSnapshotRequest(POSTCopyDBSnapshotActionEnum.COPY_DB_SNAPSHOT, POSTCopyDBSnapshotVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                requestBody = "labore".getBytes();
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "natus";
                xAmzDate = "nobis";
                xAmzSecurityToken = "eum";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "aspernatur";
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

## postCopyOptionGroup

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCopyOptionGroupActionEnum;
import org.openapis.openapi.models.operations.POSTCopyOptionGroupRequest;
import org.openapis.openapi.models.operations.POSTCopyOptionGroupResponse;
import org.openapis.openapi.models.operations.POSTCopyOptionGroupVersionEnum;
import org.openapis.openapi.models.shared.CopyOptionGroupMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCopyOptionGroupRequest req = new POSTCopyOptionGroupRequest(POSTCopyOptionGroupActionEnum.COPY_OPTION_GROUP, POSTCopyOptionGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                requestBody = "magnam".getBytes();
                xAmzAlgorithm = "et";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "ullam";
                xAmzDate = "provident";
                xAmzSecurityToken = "quos";
                xAmzSignature = "sint";
                xAmzSignedHeaders = "accusantium";
            }};            

            POSTCopyOptionGroupResponse res = sdk.sdk.postCopyOptionGroup(req);

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
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateDBInstanceRequest req = new POSTCreateDBInstanceRequest(POSTCreateDBInstanceActionEnum.CREATE_DB_INSTANCE, POSTCreateDBInstanceVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                requestBody = "reiciendis".getBytes();
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "ad";
                xAmzCredential = "eum";
                xAmzDate = "dolor";
                xAmzSecurityToken = "necessitatibus";
                xAmzSignature = "odit";
                xAmzSignedHeaders = "nemo";
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
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateDBInstanceReadReplicaRequest req = new POSTCreateDBInstanceReadReplicaRequest(POSTCreateDBInstanceReadReplicaActionEnum.CREATE_DB_INSTANCE_READ_REPLICA, POSTCreateDBInstanceReadReplicaVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                requestBody = "iure".getBytes();
                xAmzAlgorithm = "doloribus";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "eius";
                xAmzDate = "maxime";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "in";
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
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateDBParameterGroupRequest req = new POSTCreateDBParameterGroupRequest(POSTCreateDBParameterGroupActionEnum.CREATE_DB_PARAMETER_GROUP, POSTCreateDBParameterGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                requestBody = "architecto".getBytes();
                xAmzAlgorithm = "repudiandae";
                xAmzContentSha256 = "ullam";
                xAmzCredential = "expedita";
                xAmzDate = "nihil";
                xAmzSecurityToken = "repellat";
                xAmzSignature = "quibusdam";
                xAmzSignedHeaders = "sed";
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
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateDBSecurityGroupRequest req = new POSTCreateDBSecurityGroupRequest(POSTCreateDBSecurityGroupActionEnum.CREATE_DB_SECURITY_GROUP, POSTCreateDBSecurityGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                requestBody = "pariatur".getBytes();
                xAmzAlgorithm = "accusantium";
                xAmzContentSha256 = "consequuntur";
                xAmzCredential = "praesentium";
                xAmzDate = "natus";
                xAmzSecurityToken = "magni";
                xAmzSignature = "sunt";
                xAmzSignedHeaders = "quo";
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
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateDBSnapshotRequest req = new POSTCreateDBSnapshotRequest(POSTCreateDBSnapshotActionEnum.CREATE_DB_SNAPSHOT, POSTCreateDBSnapshotVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                requestBody = "pariatur".getBytes();
                xAmzAlgorithm = "maxime";
                xAmzContentSha256 = "ea";
                xAmzCredential = "excepturi";
                xAmzDate = "odit";
                xAmzSecurityToken = "ea";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "ab";
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
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateDBSubnetGroupRequest req = new POSTCreateDBSubnetGroupRequest(POSTCreateDBSubnetGroupActionEnum.CREATE_DB_SUBNET_GROUP, POSTCreateDBSubnetGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                requestBody = "quidem".getBytes();
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "autem";
                xAmzDate = "nam";
                xAmzSecurityToken = "eaque";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "nemo";
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
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateEventSubscriptionRequest req = new POSTCreateEventSubscriptionRequest(POSTCreateEventSubscriptionActionEnum.CREATE_EVENT_SUBSCRIPTION, POSTCreateEventSubscriptionVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                requestBody = "perferendis".getBytes();
                xAmzAlgorithm = "fugiat";
                xAmzContentSha256 = "amet";
                xAmzCredential = "aut";
                xAmzDate = "cumque";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "libero";
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
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateOptionGroupRequest req = new POSTCreateOptionGroupRequest(POSTCreateOptionGroupActionEnum.CREATE_OPTION_GROUP, POSTCreateOptionGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                requestBody = "dolores".getBytes();
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "totam";
                xAmzCredential = "dignissimos";
                xAmzDate = "eaque";
                xAmzSecurityToken = "quis";
                xAmzSignature = "nesciunt";
                xAmzSignedHeaders = "eos";
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
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteDBInstanceRequest req = new POSTDeleteDBInstanceRequest(POSTDeleteDBInstanceActionEnum.DELETE_DB_INSTANCE, POSTDeleteDBInstanceVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                requestBody = "dolores".getBytes();
                xAmzAlgorithm = "minus";
                xAmzContentSha256 = "quam";
                xAmzCredential = "dolor";
                xAmzDate = "vero";
                xAmzSecurityToken = "nostrum";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "recusandae";
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
                .setSecurity(new Security("omnis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteDBParameterGroupRequest req = new POSTDeleteDBParameterGroupRequest(POSTDeleteDBParameterGroupActionEnum.DELETE_DB_PARAMETER_GROUP, POSTDeleteDBParameterGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                requestBody = "facilis".getBytes();
                xAmzAlgorithm = "perspiciatis";
                xAmzContentSha256 = "voluptatem";
                xAmzCredential = "porro";
                xAmzDate = "consequuntur";
                xAmzSecurityToken = "blanditiis";
                xAmzSignature = "error";
                xAmzSignedHeaders = "eaque";
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
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteDBSecurityGroupRequest req = new POSTDeleteDBSecurityGroupRequest(POSTDeleteDBSecurityGroupActionEnum.DELETE_DB_SECURITY_GROUP, POSTDeleteDBSecurityGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                requestBody = "rerum".getBytes();
                xAmzAlgorithm = "adipisci";
                xAmzContentSha256 = "asperiores";
                xAmzCredential = "earum";
                xAmzDate = "modi";
                xAmzSecurityToken = "iste";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "deleniti";
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
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteDBSnapshotRequest req = new POSTDeleteDBSnapshotRequest(POSTDeleteDBSnapshotActionEnum.DELETE_DB_SNAPSHOT, POSTDeleteDBSnapshotVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                requestBody = "provident".getBytes();
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "libero";
                xAmzCredential = "delectus";
                xAmzDate = "quaerat";
                xAmzSecurityToken = "quos";
                xAmzSignature = "aliquid";
                xAmzSignedHeaders = "dolorem";
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
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteDBSubnetGroupRequest req = new POSTDeleteDBSubnetGroupRequest(POSTDeleteDBSubnetGroupActionEnum.DELETE_DB_SUBNET_GROUP, POSTDeleteDBSubnetGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                requestBody = "dolor".getBytes();
                xAmzAlgorithm = "qui";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "hic";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "cum";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "dignissimos";
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
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteEventSubscriptionRequest req = new POSTDeleteEventSubscriptionRequest(POSTDeleteEventSubscriptionActionEnum.DELETE_EVENT_SUBSCRIPTION, POSTDeleteEventSubscriptionVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                requestBody = "amet".getBytes();
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "numquam";
                xAmzCredential = "veritatis";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "odio";
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
                .setSecurity(new Security("quaerat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteOptionGroupRequest req = new POSTDeleteOptionGroupRequest(POSTDeleteOptionGroupActionEnum.DELETE_OPTION_GROUP, POSTDeleteOptionGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                requestBody = "accusamus".getBytes();
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "voluptas";
                xAmzDate = "natus";
                xAmzSecurityToken = "eos";
                xAmzSignature = "atque";
                xAmzSignedHeaders = "sit";
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
import org.openapis.openapi.models.shared.FilterList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugiat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDBEngineVersionsRequest req = new POSTDescribeDBEngineVersionsRequest(POSTDescribeDBEngineVersionsActionEnum.DESCRIBE_DB_ENGINE_VERSIONS, POSTDescribeDBEngineVersionsVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                requestBody = "ab".getBytes();
                xAmzAlgorithm = "soluta";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "iusto";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "omnis";
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
import org.openapis.openapi.models.shared.FilterList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDBInstancesRequest req = new POSTDescribeDBInstancesRequest(POSTDescribeDBInstancesActionEnum.DESCRIBE_DB_INSTANCES, POSTDescribeDBInstancesVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                requestBody = "distinctio".getBytes();
                xAmzAlgorithm = "asperiores";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "ipsum";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "id";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "eius";
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
import org.openapis.openapi.models.shared.FilterList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDBLogFilesRequest req = new POSTDescribeDBLogFilesRequest(POSTDescribeDBLogFilesActionEnum.DESCRIBE_DB_LOG_FILES, POSTDescribeDBLogFilesVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                requestBody = "perferendis".getBytes();
                xAmzAlgorithm = "amet";
                xAmzContentSha256 = "optio";
                xAmzCredential = "accusamus";
                xAmzDate = "ad";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "deserunt";
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
import org.openapis.openapi.models.shared.FilterList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDBParameterGroupsRequest req = new POSTDescribeDBParameterGroupsRequest(POSTDescribeDBParameterGroupsActionEnum.DESCRIBE_DB_PARAMETER_GROUPS, POSTDescribeDBParameterGroupsVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                requestBody = "minima".getBytes();
                xAmzAlgorithm = "repellendus";
                xAmzContentSha256 = "totam";
                xAmzCredential = "similique";
                xAmzDate = "alias";
                xAmzSecurityToken = "at";
                xAmzSignature = "quaerat";
                xAmzSignedHeaders = "tempora";
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
import org.openapis.openapi.models.shared.FilterList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDBParametersRequest req = new POSTDescribeDBParametersRequest(POSTDescribeDBParametersActionEnum.DESCRIBE_DB_PARAMETERS, POSTDescribeDBParametersVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                requestBody = "quod".getBytes();
                xAmzAlgorithm = "officiis";
                xAmzContentSha256 = "qui";
                xAmzCredential = "dolorum";
                xAmzDate = "a";
                xAmzSecurityToken = "esse";
                xAmzSignature = "harum";
                xAmzSignedHeaders = "iusto";
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
import org.openapis.openapi.models.shared.FilterList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDBSecurityGroupsRequest req = new POSTDescribeDBSecurityGroupsRequest(POSTDescribeDBSecurityGroupsActionEnum.DESCRIBE_DB_SECURITY_GROUPS, POSTDescribeDBSecurityGroupsVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                requestBody = "quisquam".getBytes();
                xAmzAlgorithm = "tenetur";
                xAmzContentSha256 = "amet";
                xAmzCredential = "tempore";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "numquam";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "dolorem";
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
import org.openapis.openapi.models.shared.FilterList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDBSnapshotsRequest req = new POSTDescribeDBSnapshotsRequest(POSTDescribeDBSnapshotsActionEnum.DESCRIBE_DB_SNAPSHOTS, POSTDescribeDBSnapshotsVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                requestBody = "totam".getBytes();
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "sit";
                xAmzCredential = "expedita";
                xAmzDate = "neque";
                xAmzSecurityToken = "sed";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "libero";
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
import org.openapis.openapi.models.shared.FilterList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeDBSubnetGroupsRequest req = new POSTDescribeDBSubnetGroupsRequest(POSTDescribeDBSubnetGroupsActionEnum.DESCRIBE_DB_SUBNET_GROUPS, POSTDescribeDBSubnetGroupsVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                requestBody = "deserunt".getBytes();
                xAmzAlgorithm = "quam";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "incidunt";
                xAmzDate = "qui";
                xAmzSecurityToken = "cupiditate";
                xAmzSignature = "maxime";
                xAmzSignedHeaders = "pariatur";
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
import org.openapis.openapi.models.shared.FilterList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("soluta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeEngineDefaultParametersRequest req = new POSTDescribeEngineDefaultParametersRequest(POSTDescribeEngineDefaultParametersActionEnum.DESCRIBE_ENGINE_DEFAULT_PARAMETERS, POSTDescribeEngineDefaultParametersVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                requestBody = "dicta".getBytes();
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "totam";
                xAmzCredential = "incidunt";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "dolores";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "facilis";
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
import org.openapis.openapi.models.shared.FilterList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeEventCategoriesRequest req = new POSTDescribeEventCategoriesRequest(POSTDescribeEventCategoriesActionEnum.DESCRIBE_EVENT_CATEGORIES, POSTDescribeEventCategoriesVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                requestBody = "quam".getBytes();
                xAmzAlgorithm = "molestias";
                xAmzContentSha256 = "temporibus";
                xAmzCredential = "qui";
                xAmzDate = "neque";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "magni";
                xAmzSignedHeaders = "odio";
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
import org.openapis.openapi.models.shared.FilterList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeEventSubscriptionsRequest req = new POSTDescribeEventSubscriptionsRequest(POSTDescribeEventSubscriptionsActionEnum.DESCRIBE_EVENT_SUBSCRIPTIONS, POSTDescribeEventSubscriptionsVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                requestBody = "ullam".getBytes();
                xAmzAlgorithm = "nam";
                xAmzContentSha256 = "hic";
                xAmzCredential = "voluptatem";
                xAmzDate = "cumque";
                xAmzSecurityToken = "soluta";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "et";
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
import org.openapis.openapi.models.shared.FilterList;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SourceTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeEventsRequest req = new POSTDescribeEventsRequest(POSTDescribeEventsActionEnum.DESCRIBE_EVENTS, POSTDescribeEventsVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                requestBody = "ipsum".getBytes();
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "quos";
                xAmzDate = "tempore";
                xAmzSecurityToken = "cupiditate";
                xAmzSignature = "aperiam";
                xAmzSignedHeaders = "delectus";
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
import org.openapis.openapi.models.shared.FilterList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeOptionGroupOptionsRequest req = new POSTDescribeOptionGroupOptionsRequest(POSTDescribeOptionGroupOptionsActionEnum.DESCRIBE_OPTION_GROUP_OPTIONS, POSTDescribeOptionGroupOptionsVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                requestBody = "dolore".getBytes();
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "adipisci";
                xAmzCredential = "dolorum";
                xAmzDate = "architecto";
                xAmzSecurityToken = "quae";
                xAmzSignature = "aut";
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
import org.openapis.openapi.models.shared.FilterList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("itaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeOptionGroupsRequest req = new POSTDescribeOptionGroupsRequest(POSTDescribeOptionGroupsActionEnum.DESCRIBE_OPTION_GROUPS, POSTDescribeOptionGroupsVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                requestBody = "consequatur".getBytes();
                xAmzAlgorithm = "est";
                xAmzContentSha256 = "repellendus";
                xAmzCredential = "porro";
                xAmzDate = "doloribus";
                xAmzSecurityToken = "ut";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "cupiditate";
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
import org.openapis.openapi.models.shared.FilterList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeOrderableDBInstanceOptionsRequest req = new POSTDescribeOrderableDBInstanceOptionsRequest(POSTDescribeOrderableDBInstanceOptionsActionEnum.DESCRIBE_ORDERABLE_DB_INSTANCE_OPTIONS, POSTDescribeOrderableDBInstanceOptionsVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                requestBody = "quae".getBytes();
                xAmzAlgorithm = "laudantium";
                xAmzContentSha256 = "odio";
                xAmzCredential = "occaecati";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "quisquam";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "omnis";
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
import org.openapis.openapi.models.shared.FilterList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeReservedDBInstancesRequest req = new POSTDescribeReservedDBInstancesRequest(POSTDescribeReservedDBInstancesActionEnum.DESCRIBE_RESERVED_DB_INSTANCES, POSTDescribeReservedDBInstancesVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                requestBody = "ipsum".getBytes();
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "consectetur";
                xAmzDate = "vero";
                xAmzSecurityToken = "tenetur";
                xAmzSignature = "dignissimos";
                xAmzSignedHeaders = "hic";
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
import org.openapis.openapi.models.shared.FilterList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeReservedDBInstancesOfferingsRequest req = new POSTDescribeReservedDBInstancesOfferingsRequest(POSTDescribeReservedDBInstancesOfferingsActionEnum.DESCRIBE_RESERVED_DB_INSTANCES_OFFERINGS, POSTDescribeReservedDBInstancesOfferingsVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                requestBody = "quod".getBytes();
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "similique";
                xAmzCredential = "facilis";
                xAmzDate = "vero";
                xAmzSecurityToken = "ducimus";
                xAmzSignature = "dolore";
                xAmzSignedHeaders = "quibusdam";
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
                .setSecurity(new Security("illum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDownloadDBLogFilePortionRequest req = new POSTDownloadDBLogFilePortionRequest(POSTDownloadDBLogFilePortionActionEnum.DOWNLOAD_DB_LOG_FILE_PORTION, POSTDownloadDBLogFilePortionVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                requestBody = "sequi".getBytes();
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "impedit";
                xAmzCredential = "aut";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "exercitationem";
                xAmzSignature = "nulla";
                xAmzSignedHeaders = "fugit";
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
import org.openapis.openapi.models.shared.FilterList;
import org.openapis.openapi.models.shared.ListTagsForResourceMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListTagsForResourceRequest req = new POSTListTagsForResourceRequest(POSTListTagsForResourceActionEnum.LIST_TAGS_FOR_RESOURCE, POSTListTagsForResourceVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                requestBody = "maiores".getBytes();
                xAmzAlgorithm = "doloribus";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "eligendi";
                xAmzDate = "ducimus";
                xAmzSecurityToken = "alias";
                xAmzSignature = "officia";
                xAmzSignedHeaders = "tempora";
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
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyDBInstanceRequest req = new POSTModifyDBInstanceRequest(POSTModifyDBInstanceActionEnum.MODIFY_DB_INSTANCE, POSTModifyDBInstanceVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                requestBody = "ea".getBytes();
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "vel";
                xAmzCredential = "possimus";
                xAmzDate = "magnam";
                xAmzSecurityToken = "ratione";
                xAmzSignature = "ex";
                xAmzSignedHeaders = "laudantium";
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
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyDBParameterGroupRequest req = new POSTModifyDBParameterGroupRequest(POSTModifyDBParameterGroupActionEnum.MODIFY_DB_PARAMETER_GROUP, POSTModifyDBParameterGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                requestBody = "dolor".getBytes();
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "ex";
                xAmzDate = "nulla";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "nostrum";
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
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyDBSubnetGroupRequest req = new POSTModifyDBSubnetGroupRequest(POSTModifyDBSubnetGroupActionEnum.MODIFY_DB_SUBNET_GROUP, POSTModifyDBSubnetGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                requestBody = "quisquam".getBytes();
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "ea";
                xAmzCredential = "impedit";
                xAmzDate = "corporis";
                xAmzSecurityToken = "veniam";
                xAmzSignature = "aliquid";
                xAmzSignedHeaders = "inventore";
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
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyEventSubscriptionRequest req = new POSTModifyEventSubscriptionRequest(POSTModifyEventSubscriptionActionEnum.MODIFY_EVENT_SUBSCRIPTION, POSTModifyEventSubscriptionVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                requestBody = "ea".getBytes();
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "consectetur";
                xAmzCredential = "recusandae";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "minima";
                xAmzSignature = "eaque";
                xAmzSignedHeaders = "a";
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
                .setSecurity(new Security("libero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyOptionGroupRequest req = new POSTModifyOptionGroupRequest(POSTModifyOptionGroupActionEnum.MODIFY_OPTION_GROUP, POSTModifyOptionGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                requestBody = "aut".getBytes();
                xAmzAlgorithm = "aut";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "impedit";
                xAmzDate = "aliquam";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "inventore";
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
                .setSecurity(new Security("non") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTPromoteReadReplicaRequest req = new POSTPromoteReadReplicaRequest(POSTPromoteReadReplicaActionEnum.PROMOTE_READ_REPLICA, POSTPromoteReadReplicaVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                requestBody = "et".getBytes();
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "placeat";
                xAmzDate = "velit";
                xAmzSecurityToken = "eum";
                xAmzSignature = "autem";
                xAmzSignedHeaders = "nobis";
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
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTPurchaseReservedDBInstancesOfferingRequest req = new POSTPurchaseReservedDBInstancesOfferingRequest(POSTPurchaseReservedDBInstancesOfferingActionEnum.PURCHASE_RESERVED_DB_INSTANCES_OFFERING, POSTPurchaseReservedDBInstancesOfferingVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                requestBody = "assumenda".getBytes();
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "libero";
                xAmzDate = "quasi";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "numquam";
                xAmzSignedHeaders = "explicabo";
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
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRebootDBInstanceRequest req = new POSTRebootDBInstanceRequest(POSTRebootDBInstanceActionEnum.REBOOT_DB_INSTANCE, POSTRebootDBInstanceVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                requestBody = "ipsa".getBytes();
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "odio";
                xAmzDate = "eius";
                xAmzSecurityToken = "esse";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "rem";
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
                .setSecurity(new Security("fuga") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRemoveSourceIdentifierFromSubscriptionRequest req = new POSTRemoveSourceIdentifierFromSubscriptionRequest(POSTRemoveSourceIdentifierFromSubscriptionActionEnum.REMOVE_SOURCE_IDENTIFIER_FROM_SUBSCRIPTION, POSTRemoveSourceIdentifierFromSubscriptionVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                requestBody = "reprehenderit".getBytes();
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "fugiat";
                xAmzCredential = "ut";
                xAmzDate = "eum";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "assumenda";
                xAmzSignedHeaders = "eos";
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
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRemoveTagsFromResourceRequest req = new POSTRemoveTagsFromResourceRequest(POSTRemoveTagsFromResourceActionEnum.REMOVE_TAGS_FROM_RESOURCE, POSTRemoveTagsFromResourceVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                requestBody = "quisquam".getBytes();
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "id";
                xAmzDate = "quidem";
                xAmzSecurityToken = "neque";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "illum";
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
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTResetDBParameterGroupRequest req = new POSTResetDBParameterGroupRequest(POSTResetDBParameterGroupActionEnum.RESET_DB_PARAMETER_GROUP, POSTResetDBParameterGroupVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                requestBody = "fuga".getBytes();
                xAmzAlgorithm = "eius";
                xAmzContentSha256 = "eos";
                xAmzCredential = "voluptas";
                xAmzDate = "ab";
                xAmzSecurityToken = "cupiditate";
                xAmzSignature = "consequatur";
                xAmzSignedHeaders = "tempora";
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
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRestoreDBInstanceFromDBSnapshotRequest req = new POSTRestoreDBInstanceFromDBSnapshotRequest(POSTRestoreDBInstanceFromDBSnapshotActionEnum.RESTORE_DB_INSTANCE_FROM_DB_SNAPSHOT, POSTRestoreDBInstanceFromDBSnapshotVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                requestBody = "ipsam".getBytes();
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "sequi";
                xAmzCredential = "quo";
                xAmzDate = "esse";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "aperiam";
                xAmzSignedHeaders = "distinctio";
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
import org.openapis.openapi.models.shared.TagList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRestoreDBInstanceToPointInTimeRequest req = new POSTRestoreDBInstanceToPointInTimeRequest(POSTRestoreDBInstanceToPointInTimeActionEnum.RESTORE_DB_INSTANCE_TO_POINT_IN_TIME, POSTRestoreDBInstanceToPointInTimeVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                requestBody = "dignissimos".getBytes();
                xAmzAlgorithm = "inventore";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "totam";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "aliquam";
                xAmzSignature = "odio";
                xAmzSignedHeaders = "occaecati";
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
                .setSecurity(new Security("commodi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRevokeDBSecurityGroupIngressRequest req = new POSTRevokeDBSecurityGroupIngressRequest(POSTRevokeDBSecurityGroupIngressActionEnum.REVOKE_DB_SECURITY_GROUP_INGRESS, POSTRevokeDBSecurityGroupIngressVersionEnum.TWO_THOUSAND_AND_FOURTEEN0901) {{
                requestBody = "sapiente".getBytes();
                xAmzAlgorithm = "dolores";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "molestiae";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "porro";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "quas";
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
