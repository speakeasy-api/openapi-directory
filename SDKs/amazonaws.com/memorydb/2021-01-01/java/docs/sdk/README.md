# SDK

## Overview

MemoryDB for Redis is a fully managed, Redis-compatible, in-memory database that delivers ultra-fast performance and Multi-AZ durability for modern applications built using microservices architectures. MemoryDB stores the entire database in-memory, enabling low latency and high throughput data access. It is compatible with Redis, a popular open source data store, enabling you to leverage Redis’ flexible and friendly data structures, APIs, and commands.

Amazon Web Services documentation
<https://docs.aws.amazon.com/memory-db/>
### Available Operations

* [batchUpdateCluster](#batchupdatecluster) - Apply the service update to a list of clusters supplied. For more information on service updates and applying them, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/managing-updates.html#applying-updates">Applying the service updates</a>.
* [copySnapshot](#copysnapshot) - Makes a copy of an existing snapshot.
* [createACL](#createacl) - Creates an Access Control List. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/clusters.acls.html">Authenticating users with Access Contol Lists (ACLs)</a>.
* [createCluster](#createcluster) - Creates a cluster. All nodes in the cluster run the same protocol-compliant engine software.
* [createParameterGroup](#createparametergroup) - Creates a new MemoryDB parameter group. A parameter group is a collection of parameters and their values that are applied to all of the nodes in any cluster. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/parametergroups.html">Configuring engine parameters using parameter groups</a>. 
* [createSnapshot](#createsnapshot) - Creates a copy of an entire cluster at a specific moment in time.
* [createSubnetGroup](#createsubnetgroup) - Creates a subnet group. A subnet group is a collection of subnets (typically private) that you can designate for your clusters running in an Amazon Virtual Private Cloud (VPC) environment. When you create a cluster in an Amazon VPC, you must specify a subnet group. MemoryDB uses that subnet group to choose a subnet and IP addresses within that subnet to associate with your nodes. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/subnetgroups.html">Subnets and subnet groups</a>.
* [createUser](#createuser) - Creates a MemoryDB user. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/clusters.acls.html">Authenticating users with Access Contol Lists (ACLs)</a>.
* [deleteACL](#deleteacl) - Deletes an Access Control List. The ACL must first be disassociated from the cluster before it can be deleted. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/clusters.acls.html">Authenticating users with Access Contol Lists (ACLs)</a>.
* [deleteCluster](#deletecluster) - Deletes a cluster. It also deletes all associated nodes and node endpoints
* [deleteParameterGroup](#deleteparametergroup) - Deletes the specified parameter group. You cannot delete a parameter group if it is associated with any clusters. You cannot delete the default parameter groups in your account.
* [deleteSnapshot](#deletesnapshot) - Deletes an existing snapshot. When you receive a successful response from this operation, MemoryDB immediately begins deleting the snapshot; you cannot cancel or revert this operation.
* [deleteSubnetGroup](#deletesubnetgroup) - Deletes a subnet group. You cannot delete a default subnet group or one that is associated with any clusters.
* [deleteUser](#deleteuser) - Deletes a user. The user will be removed from all ACLs and in turn removed from all clusters.
* [describeACLs](#describeacls) - Returns a list of ACLs
* [describeClusters](#describeclusters) - Returns information about all provisioned clusters if no cluster identifier is specified, or about a specific cluster if a cluster name is supplied.
* [describeEngineVersions](#describeengineversions) - Returns a list of the available Redis engine versions.
* [describeEvents](#describeevents) - Returns events related to clusters, security groups, and parameter groups. You can obtain events specific to a particular cluster, security group, or parameter group by providing the name as a parameter. By default, only the events occurring within the last hour are returned; however, you can retrieve up to 14 days' worth of events if necessary.
* [describeParameterGroups](#describeparametergroups) - Returns a list of parameter group descriptions. If a parameter group name is specified, the list contains only the descriptions for that group.
* [describeParameters](#describeparameters) - Returns the detailed parameter list for a particular parameter group.
* [describeReservedNodes](#describereservednodes) - Returns information about reserved nodes for this account, or about a specified reserved node.
* [describeReservedNodesOfferings](#describereservednodesofferings) - Lists available reserved node offerings.
* [describeServiceUpdates](#describeserviceupdates) - Returns details of the service updates
* [describeSnapshots](#describesnapshots) - Returns information about cluster snapshots. By default, DescribeSnapshots lists all of your snapshots; it can optionally describe a single snapshot, or just the snapshots associated with a particular cluster.
* [describeSubnetGroups](#describesubnetgroups) - Returns a list of subnet group descriptions. If a subnet group name is specified, the list contains only the description of that group.
* [describeUsers](#describeusers) - Returns a list of users.
* [failoverShard](#failovershard) - Used to failover a shard. This API is designed for testing the behavior of your application in case of MemoryDB failover. It is not designed to be used as a production-level tool for initiating a failover to overcome a problem you may have with the cluster. Moreover, in certain conditions such as large scale operational events, Amazon may block this API. 
* [listAllowedNodeTypeUpdates](#listallowednodetypeupdates) - Lists all available node types that you can scale to from your cluster's current node type. When you use the UpdateCluster operation to scale your cluster, the value of the NodeType parameter must be one of the node types returned by this operation.
* [listTags](#listtags) - Lists all tags currently on a named resource. A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track your MemoryDB resources. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/Tagging-Resources.html">Tagging your MemoryDB resources</a> 
* [purchaseReservedNodesOffering](#purchasereservednodesoffering) - Allows you to purchase a reserved node offering. Reserved nodes are not eligible for cancellation and are non-refundable.
* [resetParameterGroup](#resetparametergroup) - Modifies the parameters of a parameter group to the engine or system default value. You can reset specific parameters by submitting a list of parameter names. To reset the entire parameter group, specify the AllParameters and ParameterGroupName parameters.
* [tagResource](#tagresource) - <p>A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your MemoryDB resources. When you add or remove tags on clusters, those actions will be replicated to all nodes in the cluster. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/iam.resourcelevelpermissions.html">Resource-level permissions</a>.</p> <p>For example, you can use cost-allocation tags to your MemoryDB resources, Amazon generates a cost allocation report as a comma-separated value (CSV) file with your usage and costs aggregated by your tags. You can apply tags that represent business categories (such as cost centers, application names, or owners) to organize your costs across multiple services. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/tagging.html">Using Cost Allocation Tags</a>.</p>
* [untagResource](#untagresource) - Use this operation to remove tags on a resource
* [updateACL](#updateacl) - Changes the list of users that belong to the Access Control List.
* [updateCluster](#updatecluster) - Modifies the settings for a cluster. You can use this operation to change one or more cluster configuration settings by specifying the settings and the new values.
* [updateParameterGroup](#updateparametergroup) - Updates the parameters of a parameter group. You can modify up to 20 parameters in a single request by submitting a list parameter name and value pairs.
* [updateSubnetGroup](#updatesubnetgroup) - Updates a subnet group. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/ubnetGroups.Modifying.html">Updating a subnet group</a> 
* [updateUser](#updateuser) - Changes user password(s) and/or access string.

## batchUpdateCluster

Apply the service update to a list of clusters supplied. For more information on service updates and applying them, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/managing-updates.html#applying-updates">Applying the service updates</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchUpdateClusterRequest;
import org.openapis.openapi.models.operations.BatchUpdateClusterResponse;
import org.openapis.openapi.models.operations.BatchUpdateClusterXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchUpdateClusterRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceUpdateRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchUpdateClusterRequest req = new BatchUpdateClusterRequest(                new BatchUpdateClusterRequest(                new String[]{{
                                                add("ipsa"),
                                                add("delectus"),
                                                add("tempora"),
                                                add("suscipit"),
                                            }}) {{
                                serviceUpdate = new ServiceUpdateRequest() {{
                                    serviceUpdateNameToApply = "molestiae";
                                }};;
                            }};, BatchUpdateClusterXAmzTargetEnum.AMAZON_MEMORY_DB_BATCH_UPDATE_CLUSTER) {{
                xAmzAlgorithm = "minus";
                xAmzContentSha256 = "placeat";
                xAmzCredential = "voluptatum";
                xAmzDate = "iusto";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "recusandae";
            }};            

            BatchUpdateClusterResponse res = sdk.sdk.batchUpdateCluster(req);

            if (res.batchUpdateClusterResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## copySnapshot

Makes a copy of an existing snapshot.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CopySnapshotRequest;
import org.openapis.openapi.models.operations.CopySnapshotResponse;
import org.openapis.openapi.models.operations.CopySnapshotXAmzTargetEnum;
import org.openapis.openapi.models.shared.CopySnapshotRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CopySnapshotRequest req = new CopySnapshotRequest(                new CopySnapshotRequest("ab", "quis") {{
                                kmsKeyId = "veritatis";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "perferendis";
                                        value = "ipsam";
                                    }}),
                                    add(new Tag() {{
                                        key = "repellendus";
                                        value = "sapiente";
                                    }}),
                                    add(new Tag() {{
                                        key = "quo";
                                        value = "odit";
                                    }}),
                                }};
                                targetBucket = "at";
                            }};, CopySnapshotXAmzTargetEnum.AMAZON_MEMORY_DB_COPY_SNAPSHOT) {{
                xAmzAlgorithm = "at";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "molestiae";
                xAmzDate = "quod";
                xAmzSecurityToken = "quod";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "totam";
            }};            

            CopySnapshotResponse res = sdk.sdk.copySnapshot(req);

            if (res.copySnapshotResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createACL

Creates an Access Control List. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/clusters.acls.html">Authenticating users with Access Contol Lists (ACLs)</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateACLRequest;
import org.openapis.openapi.models.operations.CreateACLResponse;
import org.openapis.openapi.models.operations.CreateACLXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateACLRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateACLRequest req = new CreateACLRequest(                new CreateACLRequest("dolorum") {{
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "nam";
                                        value = "officia";
                                    }}),
                                }};
                                userNames = new String[]{{
                                    add("fugit"),
                                    add("deleniti"),
                                    add("hic"),
                                }};
                            }};, CreateACLXAmzTargetEnum.AMAZON_MEMORY_DB_CREATE_ACL) {{
                xAmzAlgorithm = "optio";
                xAmzContentSha256 = "totam";
                xAmzCredential = "beatae";
                xAmzDate = "commodi";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "qui";
            }};            

            CreateACLResponse res = sdk.sdk.createACL(req);

            if (res.createACLResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createCluster

Creates a cluster. All nodes in the cluster run the same protocol-compliant engine software.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateClusterRequest;
import org.openapis.openapi.models.operations.CreateClusterResponse;
import org.openapis.openapi.models.operations.CreateClusterXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateClusterRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateClusterRequest req = new CreateClusterRequest(                new CreateClusterRequest("cum", "esse", "ipsum") {{
                                autoMinorVersionUpgrade = false;
                                dataTiering = false;
                                description = "excepturi";
                                engineVersion = "aspernatur";
                                kmsKeyId = "perferendis";
                                maintenanceWindow = "ad";
                                numReplicasPerShard = 617636L;
                                numShards = 149675L;
                                parameterGroupName = "iste";
                                port = 222321L;
                                securityGroupIds = new String[]{{
                                    add("laboriosam"),
                                    add("hic"),
                                    add("saepe"),
                                }};
                                snapshotArns = new String[]{{
                                    add("in"),
                                    add("corporis"),
                                    add("iste"),
                                }};
                                snapshotName = "iure";
                                snapshotRetentionLimit = 902349L;
                                snapshotWindow = "quidem";
                                snsTopicArn = "architecto";
                                subnetGroupName = "ipsa";
                                tlsEnabled = false;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "est";
                                        value = "mollitia";
                                    }}),
                                    add(new Tag() {{
                                        key = "laborum";
                                        value = "dolores";
                                    }}),
                                    add(new Tag() {{
                                        key = "dolorem";
                                        value = "corporis";
                                    }}),
                                    add(new Tag() {{
                                        key = "explicabo";
                                        value = "nobis";
                                    }}),
                                }};
                            }};, CreateClusterXAmzTargetEnum.AMAZON_MEMORY_DB_CREATE_CLUSTER) {{
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "nemo";
                xAmzDate = "minima";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "iure";
            }};            

            CreateClusterResponse res = sdk.sdk.createCluster(req);

            if (res.createClusterResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createParameterGroup

Creates a new MemoryDB parameter group. A parameter group is a collection of parameters and their values that are applied to all of the nodes in any cluster. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/parametergroups.html">Configuring engine parameters using parameter groups</a>. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateParameterGroupRequest;
import org.openapis.openapi.models.operations.CreateParameterGroupResponse;
import org.openapis.openapi.models.operations.CreateParameterGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateParameterGroupRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateParameterGroupRequest req = new CreateParameterGroupRequest(                new CreateParameterGroupRequest("doloribus", "sapiente") {{
                                description = "architecto";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "dolorem";
                                        value = "culpa";
                                    }}),
                                    add(new Tag() {{
                                        key = "consequuntur";
                                        value = "repellat";
                                    }}),
                                    add(new Tag() {{
                                        key = "mollitia";
                                        value = "occaecati";
                                    }}),
                                }};
                            }};, CreateParameterGroupXAmzTargetEnum.AMAZON_MEMORY_DB_CREATE_PARAMETER_GROUP) {{
                xAmzAlgorithm = "numquam";
                xAmzContentSha256 = "commodi";
                xAmzCredential = "quam";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "velit";
                xAmzSignature = "error";
                xAmzSignedHeaders = "quia";
            }};            

            CreateParameterGroupResponse res = sdk.sdk.createParameterGroup(req);

            if (res.createParameterGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSnapshot

Creates a copy of an entire cluster at a specific moment in time.

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
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateSnapshotRequest req = new CreateSnapshotRequest(                new CreateSnapshotRequest("vitae", "laborum") {{
                                kmsKeyId = "animi";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "odit";
                                        value = "quo";
                                    }}),
                                    add(new Tag() {{
                                        key = "sequi";
                                        value = "tenetur";
                                    }}),
                                }};
                            }};, CreateSnapshotXAmzTargetEnum.AMAZON_MEMORY_DB_CREATE_SNAPSHOT) {{
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "id";
                xAmzCredential = "possimus";
                xAmzDate = "aut";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "error";
                xAmzSignedHeaders = "temporibus";
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

## createSubnetGroup

Creates a subnet group. A subnet group is a collection of subnets (typically private) that you can designate for your clusters running in an Amazon Virtual Private Cloud (VPC) environment. When you create a cluster in an Amazon VPC, you must specify a subnet group. MemoryDB uses that subnet group to choose a subnet and IP addresses within that subnet to associate with your nodes. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/subnetgroups.html">Subnets and subnet groups</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSubnetGroupRequest;
import org.openapis.openapi.models.operations.CreateSubnetGroupResponse;
import org.openapis.openapi.models.operations.CreateSubnetGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateSubnetGroupRequest;
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

            CreateSubnetGroupRequest req = new CreateSubnetGroupRequest(                new CreateSubnetGroupRequest("quasi",                 new String[]{{
                                                add("voluptatibus"),
                                                add("vero"),
                                                add("nihil"),
                                                add("praesentium"),
                                            }}) {{
                                description = "voluptatibus";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "omnis";
                                        value = "voluptate";
                                    }}),
                                }};
                            }};, CreateSubnetGroupXAmzTargetEnum.AMAZON_MEMORY_DB_CREATE_SUBNET_GROUP) {{
                xAmzAlgorithm = "cum";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "doloremque";
                xAmzDate = "reprehenderit";
                xAmzSecurityToken = "ut";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "dicta";
            }};            

            CreateSubnetGroupResponse res = sdk.sdk.createSubnetGroup(req);

            if (res.createSubnetGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createUser

Creates a MemoryDB user. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/clusters.acls.html">Authenticating users with Access Contol Lists (ACLs)</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateUserRequest;
import org.openapis.openapi.models.operations.CreateUserResponse;
import org.openapis.openapi.models.operations.CreateUserXAmzTargetEnum;
import org.openapis.openapi.models.shared.AuthenticationMode;
import org.openapis.openapi.models.shared.CreateUserRequest;
import org.openapis.openapi.models.shared.InputAuthenticationTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateUserRequest req = new CreateUserRequest(                new CreateUserRequest("dolore",                 new AuthenticationMode() {{
                                                passwords = new String[]{{
                                                    add("dicta"),
                                                    add("harum"),
                                                }};
                                                type = InputAuthenticationTypeEnum.PASSWORD;
                                            }};, "enim") {{
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "commodi";
                                        value = "repudiandae";
                                    }}),
                                    add(new Tag() {{
                                        key = "quae";
                                        value = "ipsum";
                                    }}),
                                    add(new Tag() {{
                                        key = "quidem";
                                        value = "molestias";
                                    }}),
                                    add(new Tag() {{
                                        key = "excepturi";
                                        value = "pariatur";
                                    }}),
                                }};
                            }};, CreateUserXAmzTargetEnum.AMAZON_MEMORY_DB_CREATE_USER) {{
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "rem";
                xAmzDate = "voluptates";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "repudiandae";
                xAmzSignedHeaders = "sint";
            }};            

            CreateUserResponse res = sdk.sdk.createUser(req);

            if (res.createUserResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteACL

Deletes an Access Control List. The ACL must first be disassociated from the cluster before it can be deleted. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/clusters.acls.html">Authenticating users with Access Contol Lists (ACLs)</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteACLRequest;
import org.openapis.openapi.models.operations.DeleteACLResponse;
import org.openapis.openapi.models.operations.DeleteACLXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteACLRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteACLRequest req = new DeleteACLRequest(                new DeleteACLRequest("itaque");, DeleteACLXAmzTargetEnum.AMAZON_MEMORY_DB_DELETE_ACL) {{
                xAmzAlgorithm = "incidunt";
                xAmzContentSha256 = "enim";
                xAmzCredential = "consequatur";
                xAmzDate = "est";
                xAmzSecurityToken = "quibusdam";
                xAmzSignature = "explicabo";
                xAmzSignedHeaders = "deserunt";
            }};            

            DeleteACLResponse res = sdk.sdk.deleteACL(req);

            if (res.deleteACLResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCluster

Deletes a cluster. It also deletes all associated nodes and node endpoints

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteClusterRequest;
import org.openapis.openapi.models.operations.DeleteClusterResponse;
import org.openapis.openapi.models.operations.DeleteClusterXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteClusterRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteClusterRequest req = new DeleteClusterRequest(                new DeleteClusterRequest("quibusdam") {{
                                finalSnapshotName = "labore";
                            }};, DeleteClusterXAmzTargetEnum.AMAZON_MEMORY_DB_DELETE_CLUSTER) {{
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "qui";
                xAmzCredential = "aliquid";
                xAmzDate = "cupiditate";
                xAmzSecurityToken = "quos";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "magni";
            }};            

            DeleteClusterResponse res = sdk.sdk.deleteCluster(req);

            if (res.deleteClusterResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteParameterGroup

Deletes the specified parameter group. You cannot delete a parameter group if it is associated with any clusters. You cannot delete the default parameter groups in your account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteParameterGroupRequest;
import org.openapis.openapi.models.operations.DeleteParameterGroupResponse;
import org.openapis.openapi.models.operations.DeleteParameterGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteParameterGroupRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("assumenda") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteParameterGroupRequest req = new DeleteParameterGroupRequest(                new DeleteParameterGroupRequest("ipsam");, DeleteParameterGroupXAmzTargetEnum.AMAZON_MEMORY_DB_DELETE_PARAMETER_GROUP) {{
                xAmzAlgorithm = "alias";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "dolorum";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "tempore";
            }};            

            DeleteParameterGroupResponse res = sdk.sdk.deleteParameterGroup(req);

            if (res.deleteParameterGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSnapshot

Deletes an existing snapshot. When you receive a successful response from this operation, MemoryDB immediately begins deleting the snapshot; you cannot cancel or revert this operation.

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
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteSnapshotRequest req = new DeleteSnapshotRequest(                new DeleteSnapshotRequest("delectus");, DeleteSnapshotXAmzTargetEnum.AMAZON_MEMORY_DB_DELETE_SNAPSHOT) {{
                xAmzAlgorithm = "eum";
                xAmzContentSha256 = "non";
                xAmzCredential = "eligendi";
                xAmzDate = "sint";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "necessitatibus";
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

## deleteSubnetGroup

Deletes a subnet group. You cannot delete a default subnet group or one that is associated with any clusters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSubnetGroupRequest;
import org.openapis.openapi.models.operations.DeleteSubnetGroupResponse;
import org.openapis.openapi.models.operations.DeleteSubnetGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteSubnetGroupRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteSubnetGroupRequest req = new DeleteSubnetGroupRequest(                new DeleteSubnetGroupRequest("officia");, DeleteSubnetGroupXAmzTargetEnum.AMAZON_MEMORY_DB_DELETE_SUBNET_GROUP) {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "a";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "in";
                xAmzSignature = "in";
                xAmzSignedHeaders = "illum";
            }};            

            DeleteSubnetGroupResponse res = sdk.sdk.deleteSubnetGroup(req);

            if (res.deleteSubnetGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteUser

Deletes a user. The user will be removed from all ACLs and in turn removed from all clusters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUserRequest;
import org.openapis.openapi.models.operations.DeleteUserResponse;
import org.openapis.openapi.models.operations.DeleteUserXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteUserRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteUserRequest req = new DeleteUserRequest(                new DeleteUserRequest("rerum");, DeleteUserXAmzTargetEnum.AMAZON_MEMORY_DB_DELETE_USER) {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "cumque";
                xAmzDate = "facere";
                xAmzSecurityToken = "ea";
                xAmzSignature = "aliquid";
                xAmzSignedHeaders = "laborum";
            }};            

            DeleteUserResponse res = sdk.sdk.deleteUser(req);

            if (res.deleteUserResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeACLs

Returns a list of ACLs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeACLsRequest;
import org.openapis.openapi.models.operations.DescribeACLsResponse;
import org.openapis.openapi.models.operations.DescribeACLsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeACLsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeACLsRequest req = new DescribeACLsRequest(                new DescribeACLsRequest() {{
                                aclName = "non";
                                maxResults = 581273L;
                                nextToken = "enim";
                            }};, DescribeACLsXAmzTargetEnum.AMAZON_MEMORY_DB_DESCRIBE_AC_LS) {{
                maxResults = "accusamus";
                nextToken = "delectus";
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "provident";
                xAmzCredential = "nam";
                xAmzDate = "id";
                xAmzSecurityToken = "blanditiis";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "sapiente";
            }};            

            DescribeACLsResponse res = sdk.sdk.describeACLs(req);

            if (res.describeACLsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeClusters

Returns information about all provisioned clusters if no cluster identifier is specified, or about a specific cluster if a cluster name is supplied.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeClustersRequest;
import org.openapis.openapi.models.operations.DescribeClustersResponse;
import org.openapis.openapi.models.operations.DescribeClustersXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeClustersRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeClustersRequest req = new DescribeClustersRequest(                new DescribeClustersRequest() {{
                                clusterName = "deserunt";
                                maxResults = 394869L;
                                nextToken = "vel";
                                showShardDetails = false;
                            }};, DescribeClustersXAmzTargetEnum.AMAZON_MEMORY_DB_DESCRIBE_CLUSTERS) {{
                maxResults = "natus";
                nextToken = "omnis";
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "nihil";
                xAmzDate = "magnam";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "id";
                xAmzSignedHeaders = "labore";
            }};            

            DescribeClustersResponse res = sdk.sdk.describeClusters(req);

            if (res.describeClustersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeEngineVersions

Returns a list of the available Redis engine versions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeEngineVersionsRequest;
import org.openapis.openapi.models.operations.DescribeEngineVersionsResponse;
import org.openapis.openapi.models.operations.DescribeEngineVersionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeEngineVersionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeEngineVersionsRequest req = new DescribeEngineVersionsRequest(                new DescribeEngineVersionsRequest() {{
                                defaultOnly = false;
                                engineVersion = "suscipit";
                                maxResults = 618016L;
                                nextToken = "nobis";
                                parameterGroupFamily = "eum";
                            }};, DescribeEngineVersionsXAmzTargetEnum.AMAZON_MEMORY_DB_DESCRIBE_ENGINE_VERSIONS) {{
                maxResults = "vero";
                nextToken = "aspernatur";
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "et";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "ullam";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "quos";
            }};            

            DescribeEngineVersionsResponse res = sdk.sdk.describeEngineVersions(req);

            if (res.describeEngineVersionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeEvents

Returns events related to clusters, security groups, and parameter groups. You can obtain events specific to a particular cluster, security group, or parameter group by providing the name as a parameter. By default, only the events occurring within the last hour are returned; however, you can retrieve up to 14 days' worth of events if necessary.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeEventsRequest;
import org.openapis.openapi.models.operations.DescribeEventsResponse;
import org.openapis.openapi.models.operations.DescribeEventsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeEventsRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SourceTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeEventsRequest req = new DescribeEventsRequest(                new DescribeEventsRequest() {{
                                duration = 33625L;
                                endTime = OffsetDateTime.parse("2021-01-23T15:47:23.464Z");
                                maxResults = 652103L;
                                nextToken = "ad";
                                sourceName = "eum";
                                sourceType = SourceTypeEnum.PARAMETER_GROUP;
                                startTime = OffsetDateTime.parse("2022-07-30T07:35:03.817Z");
                            }};, DescribeEventsXAmzTargetEnum.AMAZON_MEMORY_DB_DESCRIBE_EVENTS) {{
                maxResults = "nemo";
                nextToken = "quasi";
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "doloribus";
                xAmzCredential = "debitis";
                xAmzDate = "eius";
                xAmzSecurityToken = "maxime";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "facilis";
            }};            

            DescribeEventsResponse res = sdk.sdk.describeEvents(req);

            if (res.describeEventsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeParameterGroups

Returns a list of parameter group descriptions. If a parameter group name is specified, the list contains only the descriptions for that group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeParameterGroupsRequest;
import org.openapis.openapi.models.operations.DescribeParameterGroupsResponse;
import org.openapis.openapi.models.operations.DescribeParameterGroupsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeParameterGroupsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeParameterGroupsRequest req = new DescribeParameterGroupsRequest(                new DescribeParameterGroupsRequest() {{
                                maxResults = 100226L;
                                nextToken = "architecto";
                                parameterGroupName = "repudiandae";
                            }};, DescribeParameterGroupsXAmzTargetEnum.AMAZON_MEMORY_DB_DESCRIBE_PARAMETER_GROUPS) {{
                maxResults = "ullam";
                nextToken = "expedita";
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "repellat";
                xAmzCredential = "quibusdam";
                xAmzDate = "sed";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "accusantium";
            }};            

            DescribeParameterGroupsResponse res = sdk.sdk.describeParameterGroups(req);

            if (res.describeParameterGroupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeParameters

Returns the detailed parameter list for a particular parameter group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeParametersRequest;
import org.openapis.openapi.models.operations.DescribeParametersResponse;
import org.openapis.openapi.models.operations.DescribeParametersXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeParametersRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeParametersRequest req = new DescribeParametersRequest(                new DescribeParametersRequest("praesentium") {{
                                maxResults = 615560L;
                                nextToken = "magni";
                            }};, DescribeParametersXAmzTargetEnum.AMAZON_MEMORY_DB_DESCRIBE_PARAMETERS) {{
                maxResults = "sunt";
                nextToken = "quo";
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "maxime";
                xAmzDate = "ea";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "odit";
                xAmzSignedHeaders = "ea";
            }};            

            DescribeParametersResponse res = sdk.sdk.describeParameters(req);

            if (res.describeParametersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeReservedNodes

Returns information about reserved nodes for this account, or about a specified reserved node.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeReservedNodesRequest;
import org.openapis.openapi.models.operations.DescribeReservedNodesResponse;
import org.openapis.openapi.models.operations.DescribeReservedNodesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeReservedNodesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeReservedNodesRequest req = new DescribeReservedNodesRequest(                new DescribeReservedNodesRequest() {{
                                duration = "ab";
                                maxResults = 982575L;
                                nextToken = "quidem";
                                nodeType = "ipsam";
                                offeringType = "voluptate";
                                reservationId = "autem";
                                reservedNodesOfferingId = "nam";
                            }};, DescribeReservedNodesXAmzTargetEnum.AMAZON_MEMORY_DB_DESCRIBE_RESERVED_NODES) {{
                maxResults = "eaque";
                nextToken = "pariatur";
                xAmzAlgorithm = "nemo";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "perferendis";
                xAmzDate = "fugiat";
                xAmzSecurityToken = "amet";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "cumque";
            }};            

            DescribeReservedNodesResponse res = sdk.sdk.describeReservedNodes(req);

            if (res.describeReservedNodesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeReservedNodesOfferings

Lists available reserved node offerings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeReservedNodesOfferingsRequest;
import org.openapis.openapi.models.operations.DescribeReservedNodesOfferingsResponse;
import org.openapis.openapi.models.operations.DescribeReservedNodesOfferingsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeReservedNodesOfferingsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeReservedNodesOfferingsRequest req = new DescribeReservedNodesOfferingsRequest(                new DescribeReservedNodesOfferingsRequest() {{
                                duration = "hic";
                                maxResults = 729991L;
                                nextToken = "nobis";
                                nodeType = "dolores";
                                offeringType = "quis";
                                reservedNodesOfferingId = "totam";
                            }};, DescribeReservedNodesOfferingsXAmzTargetEnum.AMAZON_MEMORY_DB_DESCRIBE_RESERVED_NODES_OFFERINGS) {{
                maxResults = "dignissimos";
                nextToken = "eaque";
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "nesciunt";
                xAmzCredential = "eos";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "dolores";
                xAmzSignature = "minus";
                xAmzSignedHeaders = "quam";
            }};            

            DescribeReservedNodesOfferingsResponse res = sdk.sdk.describeReservedNodesOfferings(req);

            if (res.describeReservedNodesOfferingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeServiceUpdates

Returns details of the service updates

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeServiceUpdatesRequest;
import org.openapis.openapi.models.operations.DescribeServiceUpdatesResponse;
import org.openapis.openapi.models.operations.DescribeServiceUpdatesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeServiceUpdatesRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceUpdateStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeServiceUpdatesRequest req = new DescribeServiceUpdatesRequest(                new DescribeServiceUpdatesRequest() {{
                                clusterNames = new String[]{{
                                    add("nostrum"),
                                    add("hic"),
                                    add("recusandae"),
                                    add("omnis"),
                                }};
                                maxResults = 704415L;
                                nextToken = "perspiciatis";
                                serviceUpdateName = "voluptatem";
                                status = new org.openapis.openapi.models.shared.ServiceUpdateStatusEnum[]{{
                                    add(ServiceUpdateStatusEnum.AVAILABLE),
                                    add(ServiceUpdateStatusEnum.COMPLETE),
                                    add(ServiceUpdateStatusEnum.COMPLETE),
                                    add(ServiceUpdateStatusEnum.AVAILABLE),
                                }};
                            }};, DescribeServiceUpdatesXAmzTargetEnum.AMAZON_MEMORY_DB_DESCRIBE_SERVICE_UPDATES) {{
                maxResults = "occaecati";
                nextToken = "rerum";
                xAmzAlgorithm = "adipisci";
                xAmzContentSha256 = "asperiores";
                xAmzCredential = "earum";
                xAmzDate = "modi";
                xAmzSecurityToken = "iste";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "deleniti";
            }};            

            DescribeServiceUpdatesResponse res = sdk.sdk.describeServiceUpdates(req);

            if (res.describeServiceUpdatesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeSnapshots

Returns information about cluster snapshots. By default, DescribeSnapshots lists all of your snapshots; it can optionally describe a single snapshot, or just the snapshots associated with a particular cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeSnapshotsRequest;
import org.openapis.openapi.models.operations.DescribeSnapshotsResponse;
import org.openapis.openapi.models.operations.DescribeSnapshotsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeSnapshotsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeSnapshotsRequest req = new DescribeSnapshotsRequest(                new DescribeSnapshotsRequest() {{
                                clusterName = "provident";
                                maxResults = 750844L;
                                nextToken = "libero";
                                showDetail = false;
                                snapshotName = "delectus";
                                source = "quaerat";
                            }};, DescribeSnapshotsXAmzTargetEnum.AMAZON_MEMORY_DB_DESCRIBE_SNAPSHOTS) {{
                maxResults = "quos";
                nextToken = "aliquid";
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "dolorem";
                xAmzCredential = "dolor";
                xAmzDate = "qui";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "excepturi";
            }};            

            DescribeSnapshotsResponse res = sdk.sdk.describeSnapshots(req);

            if (res.describeSnapshotsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeSubnetGroups

Returns a list of subnet group descriptions. If a subnet group name is specified, the list contains only the description of that group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeSubnetGroupsRequest;
import org.openapis.openapi.models.operations.DescribeSubnetGroupsResponse;
import org.openapis.openapi.models.operations.DescribeSubnetGroupsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeSubnetGroupsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeSubnetGroupsRequest req = new DescribeSubnetGroupsRequest(                new DescribeSubnetGroupsRequest() {{
                                maxResults = 452109L;
                                nextToken = "dignissimos";
                                subnetGroupName = "reiciendis";
                            }};, DescribeSubnetGroupsXAmzTargetEnum.AMAZON_MEMORY_DB_DESCRIBE_SUBNET_GROUPS) {{
                maxResults = "amet";
                nextToken = "dolorum";
                xAmzAlgorithm = "numquam";
                xAmzContentSha256 = "veritatis";
                xAmzCredential = "ipsa";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "iure";
                xAmzSignature = "odio";
                xAmzSignedHeaders = "quaerat";
            }};            

            DescribeSubnetGroupsResponse res = sdk.sdk.describeSubnetGroups(req);

            if (res.describeSubnetGroupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeUsers

Returns a list of users.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeUsersRequest;
import org.openapis.openapi.models.operations.DescribeUsersResponse;
import org.openapis.openapi.models.operations.DescribeUsersXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeUsersRequest;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeUsersRequest req = new DescribeUsersRequest(                new DescribeUsersRequest() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter("ab",                 new String[]{{
                                                        add("dolorum"),
                                                        add("iusto"),
                                                        add("voluptate"),
                                                    }}) {{
                                        name = "Hector Mosciski";
                                        values = new String[]{{
                                            add("fugiat"),
                                        }};
                                    }}),
                                    add(new Filter("saepe",                 new String[]{{
                                                        add("aspernatur"),
                                                        add("perferendis"),
                                                    }}) {{
                                        name = "Alfredo Mohr";
                                        values = new String[]{{
                                            add("nihil"),
                                            add("ipsum"),
                                            add("voluptate"),
                                            add("id"),
                                        }};
                                    }}),
                                    add(new Filter("minima",                 new String[]{{
                                                        add("totam"),
                                                        add("similique"),
                                                        add("alias"),
                                                        add("at"),
                                                    }}) {{
                                        name = "Marianne Thompson";
                                        values = new String[]{{
                                            add("deserunt"),
                                            add("provident"),
                                        }};
                                    }}),
                                }};
                                maxResults = 311860L;
                                nextToken = "tempora";
                                userName = "Herminia.Schmeler67";
                            }};, DescribeUsersXAmzTargetEnum.AMAZON_MEMORY_DB_DESCRIBE_USERS) {{
                maxResults = "a";
                nextToken = "esse";
                xAmzAlgorithm = "harum";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "ipsum";
                xAmzDate = "quisquam";
                xAmzSecurityToken = "tenetur";
                xAmzSignature = "amet";
                xAmzSignedHeaders = "tempore";
            }};            

            DescribeUsersResponse res = sdk.sdk.describeUsers(req);

            if (res.describeUsersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## failoverShard

Used to failover a shard. This API is designed for testing the behavior of your application in case of MemoryDB failover. It is not designed to be used as a production-level tool for initiating a failover to overcome a problem you may have with the cluster. Moreover, in certain conditions such as large scale operational events, Amazon may block this API. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FailoverShardRequest;
import org.openapis.openapi.models.operations.FailoverShardResponse;
import org.openapis.openapi.models.operations.FailoverShardXAmzTargetEnum;
import org.openapis.openapi.models.shared.FailoverShardRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            FailoverShardRequest req = new FailoverShardRequest(                new FailoverShardRequest("numquam", "enim");, FailoverShardXAmzTargetEnum.AMAZON_MEMORY_DB_FAILOVER_SHARD) {{
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "totam";
                xAmzDate = "nihil";
                xAmzSecurityToken = "sit";
                xAmzSignature = "expedita";
                xAmzSignedHeaders = "neque";
            }};            

            FailoverShardResponse res = sdk.sdk.failoverShard(req);

            if (res.failoverShardResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAllowedNodeTypeUpdates

Lists all available node types that you can scale to from your cluster's current node type. When you use the UpdateCluster operation to scale your cluster, the value of the NodeType parameter must be one of the node types returned by this operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAllowedNodeTypeUpdatesRequest;
import org.openapis.openapi.models.operations.ListAllowedNodeTypeUpdatesResponse;
import org.openapis.openapi.models.operations.ListAllowedNodeTypeUpdatesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListAllowedNodeTypeUpdatesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAllowedNodeTypeUpdatesRequest req = new ListAllowedNodeTypeUpdatesRequest(                new ListAllowedNodeTypeUpdatesRequest("vel");, ListAllowedNodeTypeUpdatesXAmzTargetEnum.AMAZON_MEMORY_DB_LIST_ALLOWED_NODE_TYPE_UPDATES) {{
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "deserunt";
                xAmzDate = "quam";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "incidunt";
                xAmzSignedHeaders = "qui";
            }};            

            ListAllowedNodeTypeUpdatesResponse res = sdk.sdk.listAllowedNodeTypeUpdates(req);

            if (res.listAllowedNodeTypeUpdatesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTags

Lists all tags currently on a named resource. A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track your MemoryDB resources. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/Tagging-Resources.html">Tagging your MemoryDB resources</a> 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsRequest;
import org.openapis.openapi.models.operations.ListTagsResponse;
import org.openapis.openapi.models.operations.ListTagsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTagsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsRequest req = new ListTagsRequest(                new ListTagsRequest("maxime");, ListTagsXAmzTargetEnum.AMAZON_MEMORY_DB_LIST_TAGS) {{
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "soluta";
                xAmzCredential = "dicta";
                xAmzDate = "laborum";
                xAmzSecurityToken = "totam";
                xAmzSignature = "incidunt";
                xAmzSignedHeaders = "aspernatur";
            }};            

            ListTagsResponse res = sdk.sdk.listTags(req);

            if (res.listTagsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## purchaseReservedNodesOffering

Allows you to purchase a reserved node offering. Reserved nodes are not eligible for cancellation and are non-refundable.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PurchaseReservedNodesOfferingRequest;
import org.openapis.openapi.models.operations.PurchaseReservedNodesOfferingResponse;
import org.openapis.openapi.models.operations.PurchaseReservedNodesOfferingXAmzTargetEnum;
import org.openapis.openapi.models.shared.PurchaseReservedNodesOfferingRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PurchaseReservedNodesOfferingRequest req = new PurchaseReservedNodesOfferingRequest(                new PurchaseReservedNodesOfferingRequest("distinctio") {{
                                nodeCount = 704474L;
                                reservationId = "aliquid";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "molestias";
                                        value = "temporibus";
                                    }}),
                                    add(new Tag() {{
                                        key = "qui";
                                        value = "neque";
                                    }}),
                                }};
                            }};, PurchaseReservedNodesOfferingXAmzTargetEnum.AMAZON_MEMORY_DB_PURCHASE_RESERVED_NODES_OFFERING) {{
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "magni";
                xAmzCredential = "odio";
                xAmzDate = "sunt";
                xAmzSecurityToken = "ullam";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "hic";
            }};            

            PurchaseReservedNodesOfferingResponse res = sdk.sdk.purchaseReservedNodesOffering(req);

            if (res.purchaseReservedNodesOfferingResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resetParameterGroup

Modifies the parameters of a parameter group to the engine or system default value. You can reset specific parameters by submitting a list of parameter names. To reset the entire parameter group, specify the AllParameters and ParameterGroupName parameters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResetParameterGroupRequest;
import org.openapis.openapi.models.operations.ResetParameterGroupResponse;
import org.openapis.openapi.models.operations.ResetParameterGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.ResetParameterGroupRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ResetParameterGroupRequest req = new ResetParameterGroupRequest(                new ResetParameterGroupRequest("cumque") {{
                                allParameters = false;
                                parameterNames = new String[]{{
                                    add("nobis"),
                                    add("et"),
                                    add("saepe"),
                                }};
                            }};, ResetParameterGroupXAmzTargetEnum.AMAZON_MEMORY_DB_RESET_PARAMETER_GROUP) {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "veritatis";
                xAmzCredential = "nobis";
                xAmzDate = "quos";
                xAmzSecurityToken = "tempore";
                xAmzSignature = "cupiditate";
                xAmzSignedHeaders = "aperiam";
            }};            

            ResetParameterGroupResponse res = sdk.sdk.resetParameterGroup(req);

            if (res.resetParameterGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

<p>A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your MemoryDB resources. When you add or remove tags on clusters, those actions will be replicated to all nodes in the cluster. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/iam.resourcelevelpermissions.html">Resource-level permissions</a>.</p> <p>For example, you can use cost-allocation tags to your MemoryDB resources, Amazon generates a cost allocation report as a comma-separated value (CSV) file with your usage and costs aggregated by your tags. You can apply tags that represent business categories (such as cost centers, application names, or owners) to organize your costs across multiple services. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/tagging.html">Using Cost Allocation Tags</a>.</p>

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
                .setSecurity(new Security("delectus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequest("dolorem",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag() {{
                                                    key = "labore";
                                                    value = "adipisci";
                                                }}),
                                                add(new Tag() {{
                                                    key = "dolorum";
                                                    value = "architecto";
                                                }}),
                                            }});, TagResourceXAmzTargetEnum.AMAZON_MEMORY_DB_TAG_RESOURCE) {{
                xAmzAlgorithm = "quae";
                xAmzContentSha256 = "aut";
                xAmzCredential = "quas";
                xAmzDate = "itaque";
                xAmzSecurityToken = "consequatur";
                xAmzSignature = "est";
                xAmzSignedHeaders = "repellendus";
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

Use this operation to remove tags on a resource

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
                .setSecurity(new Security("porro") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequest("doloribus",                 new String[]{{
                                                add("facilis"),
                                                add("cupiditate"),
                                            }});, UntagResourceXAmzTargetEnum.AMAZON_MEMORY_DB_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "qui";
                xAmzContentSha256 = "quae";
                xAmzCredential = "laudantium";
                xAmzDate = "odio";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "quisquam";
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

## updateACL

Changes the list of users that belong to the Access Control List.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateACLRequest;
import org.openapis.openapi.models.operations.UpdateACLResponse;
import org.openapis.openapi.models.operations.UpdateACLXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateACLRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateACLRequest req = new UpdateACLRequest(                new UpdateACLRequest("omnis") {{
                                userNamesToAdd = new String[]{{
                                    add("ipsum"),
                                    add("delectus"),
                                }};
                                userNamesToRemove = new String[]{{
                                    add("consectetur"),
                                    add("vero"),
                                }};
                            }};, UpdateACLXAmzTargetEnum.AMAZON_MEMORY_DB_UPDATE_ACL) {{
                xAmzAlgorithm = "tenetur";
                xAmzContentSha256 = "dignissimos";
                xAmzCredential = "hic";
                xAmzDate = "distinctio";
                xAmzSecurityToken = "quod";
                xAmzSignature = "odio";
                xAmzSignedHeaders = "similique";
            }};            

            UpdateACLResponse res = sdk.sdk.updateACL(req);

            if (res.updateACLResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCluster

Modifies the settings for a cluster. You can use this operation to change one or more cluster configuration settings by specifying the settings and the new values.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateClusterRequest;
import org.openapis.openapi.models.operations.UpdateClusterResponse;
import org.openapis.openapi.models.operations.UpdateClusterXAmzTargetEnum;
import org.openapis.openapi.models.shared.ReplicaConfigurationRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ShardConfigurationRequest;
import org.openapis.openapi.models.shared.UpdateClusterRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateClusterRequest req = new UpdateClusterRequest(                new UpdateClusterRequest("vero") {{
                                aclName = "ducimus";
                                description = "dolore";
                                engineVersion = "quibusdam";
                                maintenanceWindow = "illum";
                                nodeType = "sequi";
                                parameterGroupName = "natus";
                                replicaConfiguration = new ReplicaConfigurationRequest() {{
                                    replicaCount = 773326L;
                                }};;
                                securityGroupIds = new String[]{{
                                    add("voluptatibus"),
                                }};
                                shardConfiguration = new ShardConfigurationRequest() {{
                                    shardCount = 347233L;
                                }};;
                                snapshotRetentionLimit = 862310L;
                                snapshotWindow = "fugit";
                                snsTopicArn = "porro";
                                snsTopicStatus = "maiores";
                            }};, UpdateClusterXAmzTargetEnum.AMAZON_MEMORY_DB_UPDATE_CLUSTER) {{
                xAmzAlgorithm = "doloribus";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "eligendi";
                xAmzDate = "ducimus";
                xAmzSecurityToken = "alias";
                xAmzSignature = "officia";
                xAmzSignedHeaders = "tempora";
            }};            

            UpdateClusterResponse res = sdk.sdk.updateCluster(req);

            if (res.updateClusterResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateParameterGroup

Updates the parameters of a parameter group. You can modify up to 20 parameters in a single request by submitting a list parameter name and value pairs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateParameterGroupRequest;
import org.openapis.openapi.models.operations.UpdateParameterGroupResponse;
import org.openapis.openapi.models.operations.UpdateParameterGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.ParameterNameValue;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateParameterGroupRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateParameterGroupRequest req = new UpdateParameterGroupRequest(                new UpdateParameterGroupRequest("ea",                 new org.openapis.openapi.models.shared.ParameterNameValue[]{{
                                                add(new ParameterNameValue() {{
                                                    parameterName = "vel";
                                                    parameterValue = "possimus";
                                                }}),
                                            }});, UpdateParameterGroupXAmzTargetEnum.AMAZON_MEMORY_DB_UPDATE_PARAMETER_GROUP) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "ratione";
                xAmzCredential = "ex";
                xAmzDate = "laudantium";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "maiores";
            }};            

            UpdateParameterGroupResponse res = sdk.sdk.updateParameterGroup(req);

            if (res.updateParameterGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSubnetGroup

Updates a subnet group. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/ubnetGroups.Modifying.html">Updating a subnet group</a> 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSubnetGroupRequest;
import org.openapis.openapi.models.operations.UpdateSubnetGroupResponse;
import org.openapis.openapi.models.operations.UpdateSubnetGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateSubnetGroupRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateSubnetGroupRequest req = new UpdateSubnetGroupRequest(                new UpdateSubnetGroupRequest("ex") {{
                                description = "nulla";
                                subnetIds = new String[]{{
                                    add("voluptatibus"),
                                    add("nostrum"),
                                    add("sapiente"),
                                }};
                            }};, UpdateSubnetGroupXAmzTargetEnum.AMAZON_MEMORY_DB_UPDATE_SUBNET_GROUP) {{
                xAmzAlgorithm = "quisquam";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "ea";
                xAmzDate = "impedit";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "veniam";
                xAmzSignedHeaders = "aliquid";
            }};            

            UpdateSubnetGroupResponse res = sdk.sdk.updateSubnetGroup(req);

            if (res.updateSubnetGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateUser

Changes user password(s) and/or access string.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateUserRequest;
import org.openapis.openapi.models.operations.UpdateUserResponse;
import org.openapis.openapi.models.operations.UpdateUserXAmzTargetEnum;
import org.openapis.openapi.models.shared.AuthenticationMode;
import org.openapis.openapi.models.shared.InputAuthenticationTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateUserRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("inventore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateUserRequest req = new UpdateUserRequest(                new UpdateUserRequest("magnam") {{
                                accessString = "ea";
                                authenticationMode = new AuthenticationMode() {{
                                    passwords = new String[]{{
                                        add("consectetur"),
                                        add("recusandae"),
                                        add("aspernatur"),
                                        add("minima"),
                                    }};
                                    type = InputAuthenticationTypeEnum.PASSWORD;
                                }};;
                            }};, UpdateUserXAmzTargetEnum.AMAZON_MEMORY_DB_UPDATE_USER) {{
                xAmzAlgorithm = "eaque";
                xAmzContentSha256 = "a";
                xAmzCredential = "libero";
                xAmzDate = "aut";
                xAmzSecurityToken = "aut";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "impedit";
            }};            

            UpdateUserResponse res = sdk.sdk.updateUser(req);

            if (res.updateUserResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
