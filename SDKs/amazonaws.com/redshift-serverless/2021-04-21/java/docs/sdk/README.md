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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConvertRecoveryPointToSnapshotRequest;
import org.openapis.openapi.models.operations.ConvertRecoveryPointToSnapshotResponse;
import org.openapis.openapi.models.operations.ConvertRecoveryPointToSnapshotXAmzTargetEnum;
import org.openapis.openapi.models.shared.ConvertRecoveryPointToSnapshotRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ConvertRecoveryPointToSnapshotRequest req = new ConvertRecoveryPointToSnapshotRequest(                new ConvertRecoveryPointToSnapshotRequest("nisi", "recusandae") {{
                                retentionPeriod = 836079L;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("deserunt", "perferendis") {{
                                        key = "quis";
                                        value = "veritatis";
                                    }}),
                                }};
                            }};, ConvertRecoveryPointToSnapshotXAmzTargetEnum.REDSHIFT_SERVERLESS_CONVERT_RECOVERY_POINT_TO_SNAPSHOT) {{
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "repellendus";
                xAmzCredential = "sapiente";
                xAmzDate = "quo";
                xAmzSecurityToken = "odit";
                xAmzSignature = "at";
                xAmzSignedHeaders = "at";
            }};            

            ConvertRecoveryPointToSnapshotResponse res = sdk.sdk.convertRecoveryPointToSnapshot(req);

            if (res.convertRecoveryPointToSnapshotResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createEndpointAccess

Creates an Amazon Redshift Serverless managed VPC endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateEndpointAccessRequest;
import org.openapis.openapi.models.operations.CreateEndpointAccessResponse;
import org.openapis.openapi.models.operations.CreateEndpointAccessXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateEndpointAccessRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateEndpointAccessRequest req = new CreateEndpointAccessRequest(                new CreateEndpointAccessRequest("molestiae",                 new String[]{{
                                                add("quod"),
                                                add("esse"),
                                                add("totam"),
                                                add("porro"),
                                            }}, "dolorum") {{
                                vpcSecurityGroupIds = new String[]{{
                                    add("nam"),
                                }};
                            }};, CreateEndpointAccessXAmzTargetEnum.REDSHIFT_SERVERLESS_CREATE_ENDPOINT_ACCESS) {{
                xAmzAlgorithm = "officia";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "fugit";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "hic";
                xAmzSignature = "optio";
                xAmzSignedHeaders = "totam";
            }};            

            CreateEndpointAccessResponse res = sdk.sdk.createEndpointAccess(req);

            if (res.createEndpointAccessResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createNamespace

Creates a namespace in Amazon Redshift Serverless.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNamespaceRequest;
import org.openapis.openapi.models.operations.CreateNamespaceResponse;
import org.openapis.openapi.models.operations.CreateNamespaceXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateNamespaceRequest;
import org.openapis.openapi.models.shared.LogExportEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("beatae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNamespaceRequest req = new CreateNamespaceRequest(                new CreateNamespaceRequest("commodi") {{
                                adminUserPassword = "molestiae";
                                adminUsername = "modi";
                                dbName = "qui";
                                defaultIamRoleArn = "impedit";
                                iamRoles = new String[]{{
                                    add("esse"),
                                    add("ipsum"),
                                    add("excepturi"),
                                }};
                                kmsKeyId = "aspernatur";
                                logExports = new org.openapis.openapi.models.shared.LogExportEnum[]{{
                                    add(LogExportEnum.USERACTIVITYLOG),
                                }};
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("dolor", "natus") {{
                                        key = "sed";
                                        value = "iste";
                                    }}),
                                    add(new Tag("saepe", "fuga") {{
                                        key = "laboriosam";
                                        value = "hic";
                                    }}),
                                    add(new Tag("iste", "iure") {{
                                        key = "in";
                                        value = "corporis";
                                    }}),
                                }};
                            }};, CreateNamespaceXAmzTargetEnum.REDSHIFT_SERVERLESS_CREATE_NAMESPACE) {{
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "architecto";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "est";
                xAmzSignedHeaders = "mollitia";
            }};            

            CreateNamespaceResponse res = sdk.sdk.createNamespace(req);

            if (res.createNamespaceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSnapshot

Creates a snapshot of all databases in a namespace. For more information about snapshots, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/serverless-snapshots-recovery.html"> Working with snapshots and recovery points</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSnapshotRequest;
import org.openapis.openapi.models.operations.CreateSnapshotResponse;
import org.openapis.openapi.models.operations.CreateSnapshotXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateSnapshotRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateSnapshotRequest req = new CreateSnapshotRequest(                new CreateSnapshotRequest("dolores", "dolorem") {{
                                retentionPeriod = 358152L;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("omnis", "nemo") {{
                                        key = "nobis";
                                        value = "enim";
                                    }}),
                                }};
                            }};, CreateSnapshotXAmzTargetEnum.REDSHIFT_SERVERLESS_CREATE_SNAPSHOT) {{
                xAmzAlgorithm = "minima";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "accusantium";
                xAmzDate = "iure";
                xAmzSecurityToken = "culpa";
                xAmzSignature = "doloribus";
                xAmzSignedHeaders = "sapiente";
            }};            

            CreateSnapshotResponse res = sdk.sdk.createSnapshot(req);

            if (res.createSnapshotResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createUsageLimit

Creates a usage limit for a specified Amazon Redshift Serverless usage type. The usage limit is identified by the returned usage limit identifier. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateUsageLimitRequest;
import org.openapis.openapi.models.operations.CreateUsageLimitResponse;
import org.openapis.openapi.models.operations.CreateUsageLimitXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateUsageLimitRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UsageLimitBreachActionEnum;
import org.openapis.openapi.models.shared.UsageLimitPeriodEnum;
import org.openapis.openapi.models.shared.UsageLimitUsageTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateUsageLimitRequest req = new CreateUsageLimitRequest(                new CreateUsageLimitRequest(652790L, "dolorem", UsageLimitUsageTypeEnum.CROSS_REGION_DATASHARING) {{
                                breachAction = UsageLimitBreachActionEnum.LOG;
                                period = UsageLimitPeriodEnum.MONTHLY;
                            }};, CreateUsageLimitXAmzTargetEnum.REDSHIFT_SERVERLESS_CREATE_USAGE_LIMIT) {{
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "numquam";
                xAmzDate = "commodi";
                xAmzSecurityToken = "quam";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "velit";
            }};            

            CreateUsageLimitResponse res = sdk.sdk.createUsageLimit(req);

            if (res.createUsageLimitResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createWorkgroup

Creates an workgroup in Amazon Redshift Serverless.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateWorkgroupRequest;
import org.openapis.openapi.models.operations.CreateWorkgroupResponse;
import org.openapis.openapi.models.operations.CreateWorkgroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.ConfigParameter;
import org.openapis.openapi.models.shared.CreateWorkgroupRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateWorkgroupRequest req = new CreateWorkgroupRequest(                new CreateWorkgroupRequest("quia", "quis") {{
                                baseCapacity = 110375L;
                                configParameters = new org.openapis.openapi.models.shared.ConfigParameter[]{{
                                    add(new ConfigParameter() {{
                                        parameterKey = "animi";
                                        parameterValue = "enim";
                                    }}),
                                    add(new ConfigParameter() {{
                                        parameterKey = "odit";
                                        parameterValue = "quo";
                                    }}),
                                    add(new ConfigParameter() {{
                                        parameterKey = "sequi";
                                        parameterValue = "tenetur";
                                    }}),
                                }};
                                enhancedVpcRouting = false;
                                port = 368725L;
                                publiclyAccessible = false;
                                securityGroupIds = new String[]{{
                                    add("possimus"),
                                    add("aut"),
                                    add("quasi"),
                                }};
                                subnetIds = new String[]{{
                                    add("temporibus"),
                                    add("laborum"),
                                    add("quasi"),
                                }};
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("nihil", "praesentium") {{
                                        key = "voluptatibus";
                                        value = "vero";
                                    }}),
                                    add(new Tag("omnis", "voluptate") {{
                                        key = "voluptatibus";
                                        value = "ipsa";
                                    }}),
                                    add(new Tag("doloremque", "reprehenderit") {{
                                        key = "cum";
                                        value = "perferendis";
                                    }}),
                                    add(new Tag("dicta", "corporis") {{
                                        key = "ut";
                                        value = "maiores";
                                    }}),
                                }};
                            }};, CreateWorkgroupXAmzTargetEnum.REDSHIFT_SERVERLESS_CREATE_WORKGROUP) {{
                xAmzAlgorithm = "dolore";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "dicta";
                xAmzDate = "harum";
                xAmzSecurityToken = "enim";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "commodi";
            }};            

            CreateWorkgroupResponse res = sdk.sdk.createWorkgroup(req);

            if (res.createWorkgroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteEndpointAccess

Deletes an Amazon Redshift Serverless managed VPC endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteEndpointAccessRequest;
import org.openapis.openapi.models.operations.DeleteEndpointAccessResponse;
import org.openapis.openapi.models.operations.DeleteEndpointAccessXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteEndpointAccessRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteEndpointAccessRequest req = new DeleteEndpointAccessRequest(                new DeleteEndpointAccessRequest("quae");, DeleteEndpointAccessXAmzTargetEnum.REDSHIFT_SERVERLESS_DELETE_ENDPOINT_ACCESS) {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "molestias";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "praesentium";
            }};            

            DeleteEndpointAccessResponse res = sdk.sdk.deleteEndpointAccess(req);

            if (res.deleteEndpointAccessResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNamespace

Deletes a namespace from Amazon Redshift Serverless. Before you delete the namespace, you can create a final snapshot that has all of the data within the namespace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNamespaceRequest;
import org.openapis.openapi.models.operations.DeleteNamespaceResponse;
import org.openapis.openapi.models.operations.DeleteNamespaceXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteNamespaceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNamespaceRequest req = new DeleteNamespaceRequest(                new DeleteNamespaceRequest("voluptates") {{
                                finalSnapshotName = "quasi";
                                finalSnapshotRetentionPeriod = 921158L;
                            }};, DeleteNamespaceXAmzTargetEnum.REDSHIFT_SERVERLESS_DELETE_NAMESPACE) {{
                xAmzAlgorithm = "sint";
                xAmzContentSha256 = "veritatis";
                xAmzCredential = "itaque";
                xAmzDate = "incidunt";
                xAmzSecurityToken = "enim";
                xAmzSignature = "consequatur";
                xAmzSignedHeaders = "est";
            }};            

            DeleteNamespaceResponse res = sdk.sdk.deleteNamespace(req);

            if (res.deleteNamespaceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteResourcePolicy

Deletes the specified resource policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteResourcePolicyRequest;
import org.openapis.openapi.models.operations.DeleteResourcePolicyResponse;
import org.openapis.openapi.models.operations.DeleteResourcePolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteResourcePolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteResourcePolicyRequest req = new DeleteResourcePolicyRequest(                new DeleteResourcePolicyRequest("explicabo");, DeleteResourcePolicyXAmzTargetEnum.REDSHIFT_SERVERLESS_DELETE_RESOURCE_POLICY) {{
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "quibusdam";
                xAmzDate = "labore";
                xAmzSecurityToken = "modi";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "aliquid";
            }};            

            DeleteResourcePolicyResponse res = sdk.sdk.deleteResourcePolicy(req);

            if (res.deleteResourcePolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSnapshot

Deletes a snapshot from Amazon Redshift Serverless.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSnapshotRequest;
import org.openapis.openapi.models.operations.DeleteSnapshotResponse;
import org.openapis.openapi.models.operations.DeleteSnapshotXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteSnapshotRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteSnapshotRequest req = new DeleteSnapshotRequest(                new DeleteSnapshotRequest("quos");, DeleteSnapshotXAmzTargetEnum.REDSHIFT_SERVERLESS_DELETE_SNAPSHOT) {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "magni";
                xAmzCredential = "assumenda";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "alias";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "dolorum";
            }};            

            DeleteSnapshotResponse res = sdk.sdk.deleteSnapshot(req);

            if (res.deleteSnapshotResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteUsageLimit

Deletes a usage limit from Amazon Redshift Serverless.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUsageLimitRequest;
import org.openapis.openapi.models.operations.DeleteUsageLimitResponse;
import org.openapis.openapi.models.operations.DeleteUsageLimitXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteUsageLimitRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteUsageLimitRequest req = new DeleteUsageLimitRequest(                new DeleteUsageLimitRequest("tempora");, DeleteUsageLimitXAmzTargetEnum.REDSHIFT_SERVERLESS_DELETE_USAGE_LIMIT) {{
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "tempore";
                xAmzCredential = "labore";
                xAmzDate = "delectus";
                xAmzSecurityToken = "eum";
                xAmzSignature = "non";
                xAmzSignedHeaders = "eligendi";
            }};            

            DeleteUsageLimitResponse res = sdk.sdk.deleteUsageLimit(req);

            if (res.deleteUsageLimitResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteWorkgroup

Deletes a workgroup.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWorkgroupRequest;
import org.openapis.openapi.models.operations.DeleteWorkgroupResponse;
import org.openapis.openapi.models.operations.DeleteWorkgroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteWorkgroupRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteWorkgroupRequest req = new DeleteWorkgroupRequest(                new DeleteWorkgroupRequest("aliquid");, DeleteWorkgroupXAmzTargetEnum.REDSHIFT_SERVERLESS_DELETE_WORKGROUP) {{
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "necessitatibus";
                xAmzCredential = "sint";
                xAmzDate = "officia";
                xAmzSecurityToken = "dolor";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "a";
            }};            

            DeleteWorkgroupResponse res = sdk.sdk.deleteWorkgroup(req);

            if (res.deleteWorkgroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCredentials

<p>Returns a database user name and temporary password with temporary authorization to log in to Amazon Redshift Serverless.</p> <p>By default, the temporary credentials expire in 900 seconds. You can optionally specify a duration between 900 seconds (15 minutes) and 3600 seconds (60 minutes).</p> <pre><code> &lt;p&gt;The Identity and Access Management (IAM) user or role that runs GetCredentials must have an IAM policy attached that allows access to all necessary actions and resources.&lt;/p&gt; &lt;p&gt;If the &lt;code&gt;DbName&lt;/code&gt; parameter is specified, the IAM policy must allow access to the resource dbname for the specified database name.&lt;/p&gt; </code></pre>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCredentialsRequest;
import org.openapis.openapi.models.operations.GetCredentialsResponse;
import org.openapis.openapi.models.operations.GetCredentialsXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetCredentialsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCredentialsRequest req = new GetCredentialsRequest(                new GetCredentialsRequest("in") {{
                                dbName = "in";
                                durationSeconds = 846409L;
                            }};, GetCredentialsXAmzTargetEnum.REDSHIFT_SERVERLESS_GET_CREDENTIALS) {{
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "rerum";
                xAmzCredential = "dicta";
                xAmzDate = "magnam";
                xAmzSecurityToken = "cumque";
                xAmzSignature = "facere";
                xAmzSignedHeaders = "ea";
            }};            

            GetCredentialsResponse res = sdk.sdk.getCredentials(req);

            if (res.getCredentialsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEndpointAccess

Returns information, such as the name, about a VPC endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEndpointAccessRequest;
import org.openapis.openapi.models.operations.GetEndpointAccessResponse;
import org.openapis.openapi.models.operations.GetEndpointAccessXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetEndpointAccessRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetEndpointAccessRequest req = new GetEndpointAccessRequest(                new GetEndpointAccessRequest("laborum");, GetEndpointAccessXAmzTargetEnum.REDSHIFT_SERVERLESS_GET_ENDPOINT_ACCESS) {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "non";
                xAmzCredential = "occaecati";
                xAmzDate = "enim";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "quidem";
            }};            

            GetEndpointAccessResponse res = sdk.sdk.getEndpointAccess(req);

            if (res.getEndpointAccessResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNamespace

Returns information about a namespace in Amazon Redshift Serverless.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNamespaceRequest;
import org.openapis.openapi.models.operations.GetNamespaceResponse;
import org.openapis.openapi.models.operations.GetNamespaceXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetNamespaceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNamespaceRequest req = new GetNamespaceRequest(                new GetNamespaceRequest("nam");, GetNamespaceXAmzTargetEnum.REDSHIFT_SERVERLESS_GET_NAMESPACE) {{
                xAmzAlgorithm = "id";
                xAmzContentSha256 = "blanditiis";
                xAmzCredential = "deleniti";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "amet";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "nisi";
            }};            

            GetNamespaceResponse res = sdk.sdk.getNamespace(req);

            if (res.getNamespaceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRecoveryPoint

Returns information about a recovery point.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRecoveryPointRequest;
import org.openapis.openapi.models.operations.GetRecoveryPointResponse;
import org.openapis.openapi.models.operations.GetRecoveryPointXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetRecoveryPointRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRecoveryPointRequest req = new GetRecoveryPointRequest(                new GetRecoveryPointRequest("natus");, GetRecoveryPointXAmzTargetEnum.REDSHIFT_SERVERLESS_GET_RECOVERY_POINT) {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "perferendis";
                xAmzDate = "nihil";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "id";
            }};            

            GetRecoveryPointResponse res = sdk.sdk.getRecoveryPoint(req);

            if (res.getRecoveryPointResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResourcePolicy

Returns a resource policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourcePolicyRequest;
import org.openapis.openapi.models.operations.GetResourcePolicyResponse;
import org.openapis.openapi.models.operations.GetResourcePolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetResourcePolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetResourcePolicyRequest req = new GetResourcePolicyRequest(                new GetResourcePolicyRequest("labore");, GetResourcePolicyXAmzTargetEnum.REDSHIFT_SERVERLESS_GET_RESOURCE_POLICY) {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "natus";
                xAmzCredential = "nobis";
                xAmzDate = "eum";
                xAmzSecurityToken = "vero";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "architecto";
            }};            

            GetResourcePolicyResponse res = sdk.sdk.getResourcePolicy(req);

            if (res.getResourcePolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSnapshot

Returns information about a specific snapshot.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSnapshotRequest;
import org.openapis.openapi.models.operations.GetSnapshotResponse;
import org.openapis.openapi.models.operations.GetSnapshotXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetSnapshotRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSnapshotRequest req = new GetSnapshotRequest(                new GetSnapshotRequest() {{
                                ownerAccount = "et";
                                snapshotArn = "excepturi";
                                snapshotName = "ullam";
                            }};, GetSnapshotXAmzTargetEnum.REDSHIFT_SERVERLESS_GET_SNAPSHOT) {{
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "quos";
                xAmzCredential = "sint";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "mollitia";
            }};            

            GetSnapshotResponse res = sdk.sdk.getSnapshot(req);

            if (res.getSnapshotResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTableRestoreStatus

Returns information about a <code>TableRestoreStatus</code> object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTableRestoreStatusRequest;
import org.openapis.openapi.models.operations.GetTableRestoreStatusResponse;
import org.openapis.openapi.models.operations.GetTableRestoreStatusXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetTableRestoreStatusRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTableRestoreStatusRequest req = new GetTableRestoreStatusRequest(                new GetTableRestoreStatusRequest("eum");, GetTableRestoreStatusXAmzTargetEnum.REDSHIFT_SERVERLESS_GET_TABLE_RESTORE_STATUS) {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "necessitatibus";
                xAmzCredential = "odit";
                xAmzDate = "nemo";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "doloribus";
            }};            

            GetTableRestoreStatusResponse res = sdk.sdk.getTableRestoreStatus(req);

            if (res.getTableRestoreStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsageLimit

Returns information about a usage limit.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsageLimitRequest;
import org.openapis.openapi.models.operations.GetUsageLimitResponse;
import org.openapis.openapi.models.operations.GetUsageLimitXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetUsageLimitRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUsageLimitRequest req = new GetUsageLimitRequest(                new GetUsageLimitRequest("eius");, GetUsageLimitXAmzTargetEnum.REDSHIFT_SERVERLESS_GET_USAGE_LIMIT) {{
                xAmzAlgorithm = "maxime";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "facilis";
                xAmzDate = "in";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "repudiandae";
            }};            

            GetUsageLimitResponse res = sdk.sdk.getUsageLimit(req);

            if (res.getUsageLimitResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWorkgroup

Returns information about a specific workgroup.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorkgroupRequest;
import org.openapis.openapi.models.operations.GetWorkgroupResponse;
import org.openapis.openapi.models.operations.GetWorkgroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetWorkgroupRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetWorkgroupRequest req = new GetWorkgroupRequest(                new GetWorkgroupRequest("expedita");, GetWorkgroupXAmzTargetEnum.REDSHIFT_SERVERLESS_GET_WORKGROUP) {{
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "repellat";
                xAmzCredential = "quibusdam";
                xAmzDate = "sed";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "accusantium";
            }};            

            GetWorkgroupResponse res = sdk.sdk.getWorkgroup(req);

            if (res.getWorkgroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listEndpointAccess

Returns an array of <code>EndpointAccess</code> objects and relevant information.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEndpointAccessRequest;
import org.openapis.openapi.models.operations.ListEndpointAccessResponse;
import org.openapis.openapi.models.operations.ListEndpointAccessXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListEndpointAccessRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListEndpointAccessRequest req = new ListEndpointAccessRequest(                new ListEndpointAccessRequest() {{
                                maxResults = 508315L;
                                nextToken = "natus";
                                vpcId = "magni";
                                workgroupName = "sunt";
                            }};, ListEndpointAccessXAmzTargetEnum.REDSHIFT_SERVERLESS_LIST_ENDPOINT_ACCESS) {{
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "illum";
                xAmzCredential = "pariatur";
                xAmzDate = "maxime";
                xAmzSecurityToken = "ea";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "odit";
                maxResults = "ea";
                nextToken = "accusantium";
            }};            

            ListEndpointAccessResponse res = sdk.sdk.listEndpointAccess(req);

            if (res.listEndpointAccessResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listNamespaces

Returns information about a list of specified namespaces.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListNamespacesRequest;
import org.openapis.openapi.models.operations.ListNamespacesResponse;
import org.openapis.openapi.models.operations.ListNamespacesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListNamespacesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ab") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListNamespacesRequest req = new ListNamespacesRequest(                new ListNamespacesRequest() {{
                                maxResults = 982575L;
                                nextToken = "quidem";
                            }};, ListNamespacesXAmzTargetEnum.REDSHIFT_SERVERLESS_LIST_NAMESPACES) {{
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "autem";
                xAmzDate = "nam";
                xAmzSecurityToken = "eaque";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "nemo";
                maxResults = "voluptatibus";
                nextToken = "perferendis";
            }};            

            ListNamespacesResponse res = sdk.sdk.listNamespaces(req);

            if (res.listNamespacesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRecoveryPoints

Returns an array of recovery points.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRecoveryPointsRequest;
import org.openapis.openapi.models.operations.ListRecoveryPointsResponse;
import org.openapis.openapi.models.operations.ListRecoveryPointsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListRecoveryPointsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugiat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListRecoveryPointsRequest req = new ListRecoveryPointsRequest(                new ListRecoveryPointsRequest() {{
                                endTime = OffsetDateTime.parse("2022-12-27T17:23:03.738Z");
                                maxResults = 764912L;
                                namespaceArn = "corporis";
                                namespaceName = "hic";
                                nextToken = "libero";
                                startTime = OffsetDateTime.parse("2022-08-28T17:02:52.151Z");
                            }};, ListRecoveryPointsXAmzTargetEnum.REDSHIFT_SERVERLESS_LIST_RECOVERY_POINTS) {{
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "totam";
                xAmzCredential = "dignissimos";
                xAmzDate = "eaque";
                xAmzSecurityToken = "quis";
                xAmzSignature = "nesciunt";
                xAmzSignedHeaders = "eos";
                maxResults = "perferendis";
                nextToken = "dolores";
            }};            

            ListRecoveryPointsResponse res = sdk.sdk.listRecoveryPoints(req);

            if (res.listRecoveryPointsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSnapshots

Returns a list of snapshots.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSnapshotsRequest;
import org.openapis.openapi.models.operations.ListSnapshotsResponse;
import org.openapis.openapi.models.operations.ListSnapshotsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListSnapshotsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSnapshotsRequest req = new ListSnapshotsRequest(                new ListSnapshotsRequest() {{
                                endTime = OffsetDateTime.parse("2022-10-11T06:25:10.430Z");
                                maxResults = 874573L;
                                namespaceArn = "nostrum";
                                namespaceName = "hic";
                                nextToken = "recusandae";
                                ownerAccount = "omnis";
                                startTime = OffsetDateTime.parse("2021-10-22T10:35:49.400Z");
                            }};, ListSnapshotsXAmzTargetEnum.REDSHIFT_SERVERLESS_LIST_SNAPSHOTS) {{
                xAmzAlgorithm = "voluptatem";
                xAmzContentSha256 = "porro";
                xAmzCredential = "consequuntur";
                xAmzDate = "blanditiis";
                xAmzSecurityToken = "error";
                xAmzSignature = "eaque";
                xAmzSignedHeaders = "occaecati";
                maxResults = "rerum";
                nextToken = "adipisci";
            }};            

            ListSnapshotsResponse res = sdk.sdk.listSnapshots(req);

            if (res.listSnapshotsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTableRestoreStatus

Returns information about an array of <code>TableRestoreStatus</code> objects.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTableRestoreStatusRequest;
import org.openapis.openapi.models.operations.ListTableRestoreStatusResponse;
import org.openapis.openapi.models.operations.ListTableRestoreStatusXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTableRestoreStatusRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTableRestoreStatusRequest req = new ListTableRestoreStatusRequest(                new ListTableRestoreStatusRequest() {{
                                maxResults = 934214L;
                                namespaceName = "modi";
                                nextToken = "iste";
                                workgroupName = "dolorum";
                            }};, ListTableRestoreStatusXAmzTargetEnum.REDSHIFT_SERVERLESS_LIST_TABLE_RESTORE_STATUS) {{
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "provident";
                xAmzDate = "nobis";
                xAmzSecurityToken = "libero";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "quaerat";
                maxResults = "quos";
                nextToken = "aliquid";
            }};            

            ListTableRestoreStatusResponse res = sdk.sdk.listTableRestoreStatus(req);

            if (res.listTableRestoreStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Lists the tags assigned to a resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.operations.ListTagsForResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTagsForResourceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceRequest("dolorem");, ListTagsForResourceXAmzTargetEnum.REDSHIFT_SERVERLESS_LIST_TAGS_FOR_RESOURCE) {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "qui";
                xAmzCredential = "ipsum";
                xAmzDate = "hic";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "cum";
                xAmzSignedHeaders = "voluptate";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listUsageLimits

Lists all usage limits within Amazon Redshift Serverless.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListUsageLimitsRequest;
import org.openapis.openapi.models.operations.ListUsageLimitsResponse;
import org.openapis.openapi.models.operations.ListUsageLimitsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListUsageLimitsRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UsageLimitUsageTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListUsageLimitsRequest req = new ListUsageLimitsRequest(                new ListUsageLimitsRequest() {{
                                maxResults = 970237L;
                                nextToken = "amet";
                                resourceArn = "dolorum";
                                usageType = UsageLimitUsageTypeEnum.SERVERLESS_COMPUTE;
                            }};, ListUsageLimitsXAmzTargetEnum.REDSHIFT_SERVERLESS_LIST_USAGE_LIMITS) {{
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "ipsa";
                xAmzDate = "iure";
                xAmzSecurityToken = "odio";
                xAmzSignature = "quaerat";
                xAmzSignedHeaders = "accusamus";
                maxResults = "quidem";
                nextToken = "voluptatibus";
            }};            

            ListUsageLimitsResponse res = sdk.sdk.listUsageLimits(req);

            if (res.listUsageLimitsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listWorkgroups

Returns information about a list of specified workgroups.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListWorkgroupsRequest;
import org.openapis.openapi.models.operations.ListWorkgroupsResponse;
import org.openapis.openapi.models.operations.ListWorkgroupsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListWorkgroupsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListWorkgroupsRequest req = new ListWorkgroupsRequest(                new ListWorkgroupsRequest() {{
                                maxResults = 617658L;
                                nextToken = "eos";
                            }};, ListWorkgroupsXAmzTargetEnum.REDSHIFT_SERVERLESS_LIST_WORKGROUPS) {{
                xAmzAlgorithm = "atque";
                xAmzContentSha256 = "sit";
                xAmzCredential = "fugiat";
                xAmzDate = "ab";
                xAmzSecurityToken = "soluta";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "iusto";
                maxResults = "voluptate";
                nextToken = "dolorum";
            }};            

            ListWorkgroupsResponse res = sdk.sdk.listWorkgroups(req);

            if (res.listWorkgroupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putResourcePolicy

Creates or updates a resource policy. Currently, you can use policies to share snapshots across Amazon Web Services accounts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutResourcePolicyRequest;
import org.openapis.openapi.models.operations.PutResourcePolicyResponse;
import org.openapis.openapi.models.operations.PutResourcePolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.PutResourcePolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutResourcePolicyRequest req = new PutResourcePolicyRequest(                new PutResourcePolicyRequest("omnis", "necessitatibus");, PutResourcePolicyXAmzTargetEnum.REDSHIFT_SERVERLESS_PUT_RESOURCE_POLICY) {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "asperiores";
                xAmzCredential = "nihil";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "id";
                xAmzSignedHeaders = "saepe";
            }};            

            PutResourcePolicyResponse res = sdk.sdk.putResourcePolicy(req);

            if (res.putResourcePolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## restoreFromRecoveryPoint

Restore the data from a recovery point.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RestoreFromRecoveryPointRequest;
import org.openapis.openapi.models.operations.RestoreFromRecoveryPointResponse;
import org.openapis.openapi.models.operations.RestoreFromRecoveryPointXAmzTargetEnum;
import org.openapis.openapi.models.shared.RestoreFromRecoveryPointRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RestoreFromRecoveryPointRequest req = new RestoreFromRecoveryPointRequest(                new RestoreFromRecoveryPointRequest("aspernatur", "perferendis", "amet");, RestoreFromRecoveryPointXAmzTargetEnum.REDSHIFT_SERVERLESS_RESTORE_FROM_RECOVERY_POINT) {{
                xAmzAlgorithm = "optio";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "ad";
                xAmzDate = "saepe";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "provident";
            }};            

            RestoreFromRecoveryPointResponse res = sdk.sdk.restoreFromRecoveryPoint(req);

            if (res.restoreFromRecoveryPointResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## restoreFromSnapshot

Restores a namespace from a snapshot.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RestoreFromSnapshotRequest;
import org.openapis.openapi.models.operations.RestoreFromSnapshotResponse;
import org.openapis.openapi.models.operations.RestoreFromSnapshotXAmzTargetEnum;
import org.openapis.openapi.models.shared.RestoreFromSnapshotRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RestoreFromSnapshotRequest req = new RestoreFromSnapshotRequest(                new RestoreFromSnapshotRequest("repellendus", "totam") {{
                                ownerAccount = "similique";
                                snapshotArn = "alias";
                                snapshotName = "at";
                            }};, RestoreFromSnapshotXAmzTargetEnum.REDSHIFT_SERVERLESS_RESTORE_FROM_SNAPSHOT) {{
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "vel";
                xAmzDate = "quod";
                xAmzSecurityToken = "officiis";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "dolorum";
            }};            

            RestoreFromSnapshotResponse res = sdk.sdk.restoreFromSnapshot(req);

            if (res.restoreFromSnapshotResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## restoreTableFromSnapshot

Restores a table from a snapshot to your Amazon Redshift Serverless instance. You can't use this operation to restore tables with <a href="https://docs.aws.amazon.com/redshift/latest/dg/t_Sorting_data.html#t_Sorting_data-interleaved">interleaved sort keys</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RestoreTableFromSnapshotRequest;
import org.openapis.openapi.models.operations.RestoreTableFromSnapshotResponse;
import org.openapis.openapi.models.operations.RestoreTableFromSnapshotXAmzTargetEnum;
import org.openapis.openapi.models.shared.RestoreTableFromSnapshotRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RestoreTableFromSnapshotRequest req = new RestoreTableFromSnapshotRequest(                new RestoreTableFromSnapshotRequest("esse", "harum", "iusto", "ipsum", "quisquam", "tenetur") {{
                                activateCaseSensitiveIdentifier = false;
                                sourceSchemaName = "amet";
                                targetDatabaseName = "tempore";
                                targetSchemaName = "accusamus";
                            }};, RestoreTableFromSnapshotXAmzTargetEnum.REDSHIFT_SERVERLESS_RESTORE_TABLE_FROM_SNAPSHOT) {{
                xAmzAlgorithm = "numquam";
                xAmzContentSha256 = "enim";
                xAmzCredential = "dolorem";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "totam";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "sit";
            }};            

            RestoreTableFromSnapshotResponse res = sdk.sdk.restoreTableFromSnapshot(req);

            if (res.restoreTableFromSnapshotResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Assigns one or more tags to a resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.operations.TagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("expedita") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequest("neque",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("voluptas", "deserunt") {{
                                                    key = "vel";
                                                    value = "libero";
                                                }}),
                                            }});, TagResourceXAmzTargetEnum.REDSHIFT_SERVERLESS_TAG_RESOURCE) {{
                xAmzAlgorithm = "quam";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "incidunt";
                xAmzDate = "qui";
                xAmzSecurityToken = "cupiditate";
                xAmzSignature = "maxime";
                xAmzSignedHeaders = "pariatur";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Removes a tag or set of tags from a resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.operations.UntagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UntagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("soluta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequest("dicta",                 new String[]{{
                                                add("totam"),
                                                add("incidunt"),
                                                add("aspernatur"),
                                            }});, UntagResourceXAmzTargetEnum.REDSHIFT_SERVERLESS_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "dolores";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "facilis";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "quam";
                xAmzSignature = "molestias";
                xAmzSignedHeaders = "temporibus";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateEndpointAccess

Updates an Amazon Redshift Serverless managed endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateEndpointAccessRequest;
import org.openapis.openapi.models.operations.UpdateEndpointAccessResponse;
import org.openapis.openapi.models.operations.UpdateEndpointAccessXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateEndpointAccessRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateEndpointAccessRequest req = new UpdateEndpointAccessRequest(                new UpdateEndpointAccessRequest("neque") {{
                                vpcSecurityGroupIds = new String[]{{
                                    add("magni"),
                                }};
                            }};, UpdateEndpointAccessXAmzTargetEnum.REDSHIFT_SERVERLESS_UPDATE_ENDPOINT_ACCESS) {{
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "sunt";
                xAmzCredential = "ullam";
                xAmzDate = "nam";
                xAmzSecurityToken = "hic";
                xAmzSignature = "voluptatem";
                xAmzSignedHeaders = "cumque";
            }};            

            UpdateEndpointAccessResponse res = sdk.sdk.updateEndpointAccess(req);

            if (res.updateEndpointAccessResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNamespace

Updates a namespace with the specified settings. Unless required, you can't update multiple parameters in one request. For example, you must specify both <code>adminUsername</code> and <code>adminUserPassword</code> to update either field, but you can't update both <code>kmsKeyId</code> and <code>logExports</code> in a single request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNamespaceRequest;
import org.openapis.openapi.models.operations.UpdateNamespaceResponse;
import org.openapis.openapi.models.operations.UpdateNamespaceXAmzTargetEnum;
import org.openapis.openapi.models.shared.LogExportEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateNamespaceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("soluta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNamespaceRequest req = new UpdateNamespaceRequest(                new UpdateNamespaceRequest("nobis") {{
                                adminUserPassword = "et";
                                adminUsername = "saepe";
                                defaultIamRoleArn = "ipsum";
                                iamRoles = new String[]{{
                                    add("nobis"),
                                }};
                                kmsKeyId = "quos";
                                logExports = new org.openapis.openapi.models.shared.LogExportEnum[]{{
                                    add(LogExportEnum.USERLOG),
                                    add(LogExportEnum.USERACTIVITYLOG),
                                    add(LogExportEnum.CONNECTIONLOG),
                                }};
                            }};, UpdateNamespaceXAmzTargetEnum.REDSHIFT_SERVERLESS_UPDATE_NAMESPACE) {{
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "dolore";
                xAmzCredential = "labore";
                xAmzDate = "adipisci";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "quae";
            }};            

            UpdateNamespaceResponse res = sdk.sdk.updateNamespace(req);

            if (res.updateNamespaceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSnapshot

Updates a snapshot.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSnapshotRequest;
import org.openapis.openapi.models.operations.UpdateSnapshotResponse;
import org.openapis.openapi.models.operations.UpdateSnapshotXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateSnapshotRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateSnapshotRequest req = new UpdateSnapshotRequest(                new UpdateSnapshotRequest("quas") {{
                                retentionPeriod = 929530L;
                            }};, UpdateSnapshotXAmzTargetEnum.REDSHIFT_SERVERLESS_UPDATE_SNAPSHOT) {{
                xAmzAlgorithm = "consequatur";
                xAmzContentSha256 = "est";
                xAmzCredential = "repellendus";
                xAmzDate = "porro";
                xAmzSecurityToken = "doloribus";
                xAmzSignature = "ut";
                xAmzSignedHeaders = "facilis";
            }};            

            UpdateSnapshotResponse res = sdk.sdk.updateSnapshot(req);

            if (res.updateSnapshotResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateUsageLimit

Update a usage limit in Amazon Redshift Serverless. You can't update the usage type or period of a usage limit.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateUsageLimitRequest;
import org.openapis.openapi.models.operations.UpdateUsageLimitResponse;
import org.openapis.openapi.models.operations.UpdateUsageLimitXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateUsageLimitRequest;
import org.openapis.openapi.models.shared.UsageLimitBreachActionEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateUsageLimitRequest req = new UpdateUsageLimitRequest(                new UpdateUsageLimitRequest("qui") {{
                                amount = 63955L;
                                breachAction = UsageLimitBreachActionEnum.EMIT_METRIC;
                            }};, UpdateUsageLimitXAmzTargetEnum.REDSHIFT_SERVERLESS_UPDATE_USAGE_LIMIT) {{
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "voluptatibus";
                xAmzDate = "quisquam";
                xAmzSecurityToken = "vero";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "quis";
            }};            

            UpdateUsageLimitResponse res = sdk.sdk.updateUsageLimit(req);

            if (res.updateUsageLimitResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateWorkgroup

Updates a workgroup with the specified configuration settings. You can't update multiple parameters in one request. For example, you can update <code>baseCapacity</code> or <code>port</code> in a single request, but you can't update both in the same request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateWorkgroupRequest;
import org.openapis.openapi.models.operations.UpdateWorkgroupResponse;
import org.openapis.openapi.models.operations.UpdateWorkgroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.ConfigParameter;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateWorkgroupRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateWorkgroupRequest req = new UpdateWorkgroupRequest(                new UpdateWorkgroupRequest("delectus") {{
                                baseCapacity = 455169L;
                                configParameters = new org.openapis.openapi.models.shared.ConfigParameter[]{{
                                    add(new ConfigParameter() {{
                                        parameterKey = "vero";
                                        parameterValue = "tenetur";
                                    }}),
                                }};
                                enhancedVpcRouting = false;
                                port = 492268L;
                                publiclyAccessible = false;
                                securityGroupIds = new String[]{{
                                    add("distinctio"),
                                    add("quod"),
                                    add("odio"),
                                    add("similique"),
                                }};
                                subnetIds = new String[]{{
                                    add("vero"),
                                    add("ducimus"),
                                    add("dolore"),
                                }};
                            }};, UpdateWorkgroupXAmzTargetEnum.REDSHIFT_SERVERLESS_UPDATE_WORKGROUP) {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "illum";
                xAmzCredential = "sequi";
                xAmzDate = "natus";
                xAmzSecurityToken = "impedit";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "voluptatibus";
            }};            

            UpdateWorkgroupResponse res = sdk.sdk.updateWorkgroup(req);

            if (res.updateWorkgroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
