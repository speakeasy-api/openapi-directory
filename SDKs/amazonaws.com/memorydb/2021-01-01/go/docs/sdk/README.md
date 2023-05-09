# SDK

## Overview

MemoryDB for Redis is a fully managed, Redis-compatible, in-memory database that delivers ultra-fast performance and Multi-AZ durability for modern applications built using microservices architectures. MemoryDB stores the entire database in-memory, enabling low latency and high throughput data access. It is compatible with Redis, a popular open source data store, enabling you to leverage Redis’ flexible and friendly data structures, APIs, and commands.

Amazon Web Services documentation
<https://docs.aws.amazon.com/memory-db/>
### Available Operations

* [BatchUpdateCluster](#batchupdatecluster) - Apply the service update to a list of clusters supplied. For more information on service updates and applying them, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/managing-updates.html#applying-updates">Applying the service updates</a>.
* [CopySnapshot](#copysnapshot) - Makes a copy of an existing snapshot.
* [CreateACL](#createacl) - Creates an Access Control List. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/clusters.acls.html">Authenticating users with Access Contol Lists (ACLs)</a>.
* [CreateCluster](#createcluster) - Creates a cluster. All nodes in the cluster run the same protocol-compliant engine software.
* [CreateParameterGroup](#createparametergroup) - Creates a new MemoryDB parameter group. A parameter group is a collection of parameters and their values that are applied to all of the nodes in any cluster. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/parametergroups.html">Configuring engine parameters using parameter groups</a>. 
* [CreateSnapshot](#createsnapshot) - Creates a copy of an entire cluster at a specific moment in time.
* [CreateSubnetGroup](#createsubnetgroup) - Creates a subnet group. A subnet group is a collection of subnets (typically private) that you can designate for your clusters running in an Amazon Virtual Private Cloud (VPC) environment. When you create a cluster in an Amazon VPC, you must specify a subnet group. MemoryDB uses that subnet group to choose a subnet and IP addresses within that subnet to associate with your nodes. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/subnetgroups.html">Subnets and subnet groups</a>.
* [CreateUser](#createuser) - Creates a MemoryDB user. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/clusters.acls.html">Authenticating users with Access Contol Lists (ACLs)</a>.
* [DeleteACL](#deleteacl) - Deletes an Access Control List. The ACL must first be disassociated from the cluster before it can be deleted. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/clusters.acls.html">Authenticating users with Access Contol Lists (ACLs)</a>.
* [DeleteCluster](#deletecluster) - Deletes a cluster. It also deletes all associated nodes and node endpoints
* [DeleteParameterGroup](#deleteparametergroup) - Deletes the specified parameter group. You cannot delete a parameter group if it is associated with any clusters. You cannot delete the default parameter groups in your account.
* [DeleteSnapshot](#deletesnapshot) - Deletes an existing snapshot. When you receive a successful response from this operation, MemoryDB immediately begins deleting the snapshot; you cannot cancel or revert this operation.
* [DeleteSubnetGroup](#deletesubnetgroup) - Deletes a subnet group. You cannot delete a default subnet group or one that is associated with any clusters.
* [DeleteUser](#deleteuser) - Deletes a user. The user will be removed from all ACLs and in turn removed from all clusters.
* [DescribeACLs](#describeacls) - Returns a list of ACLs
* [DescribeClusters](#describeclusters) - Returns information about all provisioned clusters if no cluster identifier is specified, or about a specific cluster if a cluster name is supplied.
* [DescribeEngineVersions](#describeengineversions) - Returns a list of the available Redis engine versions.
* [DescribeEvents](#describeevents) - Returns events related to clusters, security groups, and parameter groups. You can obtain events specific to a particular cluster, security group, or parameter group by providing the name as a parameter. By default, only the events occurring within the last hour are returned; however, you can retrieve up to 14 days' worth of events if necessary.
* [DescribeParameterGroups](#describeparametergroups) - Returns a list of parameter group descriptions. If a parameter group name is specified, the list contains only the descriptions for that group.
* [DescribeParameters](#describeparameters) - Returns the detailed parameter list for a particular parameter group.
* [DescribeReservedNodes](#describereservednodes) - Returns information about reserved nodes for this account, or about a specified reserved node.
* [DescribeReservedNodesOfferings](#describereservednodesofferings) - Lists available reserved node offerings.
* [DescribeServiceUpdates](#describeserviceupdates) - Returns details of the service updates
* [DescribeSnapshots](#describesnapshots) - Returns information about cluster snapshots. By default, DescribeSnapshots lists all of your snapshots; it can optionally describe a single snapshot, or just the snapshots associated with a particular cluster.
* [DescribeSubnetGroups](#describesubnetgroups) - Returns a list of subnet group descriptions. If a subnet group name is specified, the list contains only the description of that group.
* [DescribeUsers](#describeusers) - Returns a list of users.
* [FailoverShard](#failovershard) - Used to failover a shard. This API is designed for testing the behavior of your application in case of MemoryDB failover. It is not designed to be used as a production-level tool for initiating a failover to overcome a problem you may have with the cluster. Moreover, in certain conditions such as large scale operational events, Amazon may block this API. 
* [ListAllowedNodeTypeUpdates](#listallowednodetypeupdates) - Lists all available node types that you can scale to from your cluster's current node type. When you use the UpdateCluster operation to scale your cluster, the value of the NodeType parameter must be one of the node types returned by this operation.
* [ListTags](#listtags) - Lists all tags currently on a named resource. A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track your MemoryDB resources. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/Tagging-Resources.html">Tagging your MemoryDB resources</a> 
* [PurchaseReservedNodesOffering](#purchasereservednodesoffering) - Allows you to purchase a reserved node offering. Reserved nodes are not eligible for cancellation and are non-refundable.
* [ResetParameterGroup](#resetparametergroup) - Modifies the parameters of a parameter group to the engine or system default value. You can reset specific parameters by submitting a list of parameter names. To reset the entire parameter group, specify the AllParameters and ParameterGroupName parameters.
* [TagResource](#tagresource) - <p>A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your MemoryDB resources. When you add or remove tags on clusters, those actions will be replicated to all nodes in the cluster. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/iam.resourcelevelpermissions.html">Resource-level permissions</a>.</p> <p>For example, you can use cost-allocation tags to your MemoryDB resources, Amazon generates a cost allocation report as a comma-separated value (CSV) file with your usage and costs aggregated by your tags. You can apply tags that represent business categories (such as cost centers, application names, or owners) to organize your costs across multiple services. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/tagging.html">Using Cost Allocation Tags</a>.</p>
* [UntagResource](#untagresource) - Use this operation to remove tags on a resource
* [UpdateACL](#updateacl) - Changes the list of users that belong to the Access Control List.
* [UpdateCluster](#updatecluster) - Modifies the settings for a cluster. You can use this operation to change one or more cluster configuration settings by specifying the settings and the new values.
* [UpdateParameterGroup](#updateparametergroup) - Updates the parameters of a parameter group. You can modify up to 20 parameters in a single request by submitting a list parameter name and value pairs.
* [UpdateSubnetGroup](#updatesubnetgroup) - Updates a subnet group. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/ubnetGroups.Modifying.html">Updating a subnet group</a> 
* [UpdateUser](#updateuser) - Changes user password(s) and/or access string.

## BatchUpdateCluster

Apply the service update to a list of clusters supplied. For more information on service updates and applying them, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/managing-updates.html#applying-updates">Applying the service updates</a>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BatchUpdateCluster(ctx, operations.BatchUpdateClusterRequest{
        BatchUpdateClusterRequest: shared.BatchUpdateClusterRequest{
            ClusterNames: []string{
                "magnam",
                "debitis",
            },
            ServiceUpdate: &shared.ServiceUpdateRequest{
                ServiceUpdateNameToApply: sdk.String("ipsa"),
            },
        },
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("minus"),
        XAmzSignature: sdk.String("placeat"),
        XAmzSignedHeaders: sdk.String("voluptatum"),
        XAmzTarget: operations.BatchUpdateClusterXAmzTargetEnumAmazonMemoryDbBatchUpdateCluster,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchUpdateClusterResponse != nil {
        // handle response
    }
}
```

## CopySnapshot

Makes a copy of an existing snapshot.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CopySnapshot(ctx, operations.CopySnapshotRequest{
        CopySnapshotRequest: shared.CopySnapshotRequest{
            KmsKeyID: sdk.String("iusto"),
            SourceSnapshotName: "excepturi",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("recusandae"),
                    Value: sdk.String("temporibus"),
                },
                shared.Tag{
                    Key: sdk.String("ab"),
                    Value: sdk.String("quis"),
                },
            },
            TargetBucket: sdk.String("veritatis"),
            TargetSnapshotName: "deserunt",
        },
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("repellendus"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("odit"),
        XAmzSignedHeaders: sdk.String("at"),
        XAmzTarget: operations.CopySnapshotXAmzTargetEnumAmazonMemoryDbCopySnapshot,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CopySnapshotResponse != nil {
        // handle response
    }
}
```

## CreateACL

Creates an Access Control List. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/clusters.acls.html">Authenticating users with Access Contol Lists (ACLs)</a>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateACL(ctx, operations.CreateACLRequest{
        CreateACLRequest: shared.CreateACLRequest{
            ACLName: "at",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("molestiae"),
                    Value: sdk.String("quod"),
                },
                shared.Tag{
                    Key: sdk.String("quod"),
                    Value: sdk.String("esse"),
                },
                shared.Tag{
                    Key: sdk.String("totam"),
                    Value: sdk.String("porro"),
                },
                shared.Tag{
                    Key: sdk.String("dolorum"),
                    Value: sdk.String("dicta"),
                },
            },
            UserNames: []string{
                "officia",
                "occaecati",
                "fugit",
            },
        },
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("optio"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("beatae"),
        XAmzSignature: sdk.String("commodi"),
        XAmzSignedHeaders: sdk.String("molestiae"),
        XAmzTarget: operations.CreateACLXAmzTargetEnumAmazonMemoryDbCreateACL,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateACLResponse != nil {
        // handle response
    }
}
```

## CreateCluster

Creates a cluster. All nodes in the cluster run the same protocol-compliant engine software.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateCluster(ctx, operations.CreateClusterRequest{
        CreateClusterRequest: shared.CreateClusterRequest{
            ACLName: "modi",
            AutoMinorVersionUpgrade: sdk.Bool(false),
            ClusterName: "qui",
            DataTiering: sdk.Bool(false),
            Description: sdk.String("impedit"),
            EngineVersion: sdk.String("cum"),
            KmsKeyID: sdk.String("esse"),
            MaintenanceWindow: sdk.String("ipsum"),
            NodeType: "excepturi",
            NumReplicasPerShard: sdk.Int64(135218),
            NumShards: sdk.Int64(18789),
            ParameterGroupName: sdk.String("ad"),
            Port: sdk.Int64(617636),
            SecurityGroupIds: []string{
                "iste",
            },
            SnapshotArns: []string{
                "natus",
            },
            SnapshotName: sdk.String("laboriosam"),
            SnapshotRetentionLimit: sdk.Int64(943749),
            SnapshotWindow: sdk.String("saepe"),
            SnsTopicArn: sdk.String("fuga"),
            SubnetGroupName: sdk.String("in"),
            TLSEnabled: sdk.Bool(false),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("iste"),
                    Value: sdk.String("iure"),
                },
                shared.Tag{
                    Key: sdk.String("saepe"),
                    Value: sdk.String("quidem"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("est"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("dolores"),
        XAmzTarget: operations.CreateClusterXAmzTargetEnumAmazonMemoryDbCreateCluster,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateClusterResponse != nil {
        // handle response
    }
}
```

## CreateParameterGroup

Creates a new MemoryDB parameter group. A parameter group is a collection of parameters and their values that are applied to all of the nodes in any cluster. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/parametergroups.html">Configuring engine parameters using parameter groups</a>. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateParameterGroup(ctx, operations.CreateParameterGroupRequest{
        CreateParameterGroupRequest: shared.CreateParameterGroupRequest{
            Description: sdk.String("dolorem"),
            Family: "corporis",
            ParameterGroupName: "explicabo",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("enim"),
                    Value: sdk.String("omnis"),
                },
                shared.Tag{
                    Key: sdk.String("nemo"),
                    Value: sdk.String("minima"),
                },
                shared.Tag{
                    Key: sdk.String("excepturi"),
                    Value: sdk.String("accusantium"),
                },
                shared.Tag{
                    Key: sdk.String("iure"),
                    Value: sdk.String("culpa"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("doloribus"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("culpa"),
        XAmzSignedHeaders: sdk.String("consequuntur"),
        XAmzTarget: operations.CreateParameterGroupXAmzTargetEnumAmazonMemoryDbCreateParameterGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateParameterGroupResponse != nil {
        // handle response
    }
}
```

## CreateSnapshot

Creates a copy of an entire cluster at a specific moment in time.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateSnapshot(ctx, operations.CreateSnapshotRequest{
        CreateSnapshotRequest: shared.CreateSnapshotRequest{
            ClusterName: "repellat",
            KmsKeyID: sdk.String("mollitia"),
            SnapshotName: "occaecati",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("commodi"),
                    Value: sdk.String("quam"),
                },
                shared.Tag{
                    Key: sdk.String("molestiae"),
                    Value: sdk.String("velit"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("quia"),
        XAmzCredential: sdk.String("quis"),
        XAmzDate: sdk.String("vitae"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("animi"),
        XAmzSignedHeaders: sdk.String("enim"),
        XAmzTarget: operations.CreateSnapshotXAmzTargetEnumAmazonMemoryDbCreateSnapshot,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSnapshotResponse != nil {
        // handle response
    }
}
```

## CreateSubnetGroup

Creates a subnet group. A subnet group is a collection of subnets (typically private) that you can designate for your clusters running in an Amazon Virtual Private Cloud (VPC) environment. When you create a cluster in an Amazon VPC, you must specify a subnet group. MemoryDB uses that subnet group to choose a subnet and IP addresses within that subnet to associate with your nodes. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/subnetgroups.html">Subnets and subnet groups</a>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateSubnetGroup(ctx, operations.CreateSubnetGroupRequest{
        CreateSubnetGroupRequest: shared.CreateSubnetGroupRequest{
            Description: sdk.String("odit"),
            SubnetGroupName: "quo",
            SubnetIds: []string{
                "tenetur",
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("id"),
                    Value: sdk.String("possimus"),
                },
                shared.Tag{
                    Key: sdk.String("aut"),
                    Value: sdk.String("quasi"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("temporibus"),
        XAmzCredential: sdk.String("laborum"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("reiciendis"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("vero"),
        XAmzTarget: operations.CreateSubnetGroupXAmzTargetEnumAmazonMemoryDbCreateSubnetGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSubnetGroupResponse != nil {
        // handle response
    }
}
```

## CreateUser

Creates a MemoryDB user. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/clusters.acls.html">Authenticating users with Access Contol Lists (ACLs)</a>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateUser(ctx, operations.CreateUserRequest{
        CreateUserRequest: shared.CreateUserRequest{
            AccessString: "nihil",
            AuthenticationMode: shared.AuthenticationMode{
                Passwords: []string{
                    "voluptatibus",
                    "ipsa",
                    "omnis",
                },
                Type: shared.InputAuthenticationTypeEnumPassword.ToPointer(),
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("cum"),
                    Value: sdk.String("perferendis"),
                },
                shared.Tag{
                    Key: sdk.String("doloremque"),
                    Value: sdk.String("reprehenderit"),
                },
            },
            UserName: "Easter35",
        },
        XAmzAlgorithm: sdk.String("dolore"),
        XAmzContentSha256: sdk.String("iusto"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("harum"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("commodi"),
        XAmzTarget: operations.CreateUserXAmzTargetEnumAmazonMemoryDbCreateUser,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateUserResponse != nil {
        // handle response
    }
}
```

## DeleteACL

Deletes an Access Control List. The ACL must first be disassociated from the cluster before it can be deleted. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/clusters.acls.html">Authenticating users with Access Contol Lists (ACLs)</a>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteACL(ctx, operations.DeleteACLRequest{
        DeleteACLRequest: shared.DeleteACLRequest{
            ACLName: "repudiandae",
        },
        XAmzAlgorithm: sdk.String("quae"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("molestias"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("modi"),
        XAmzTarget: operations.DeleteACLXAmzTargetEnumAmazonMemoryDbDeleteACL,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteACLResponse != nil {
        // handle response
    }
}
```

## DeleteCluster

Deletes a cluster. It also deletes all associated nodes and node endpoints

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteCluster(ctx, operations.DeleteClusterRequest{
        DeleteClusterRequest: shared.DeleteClusterRequest{
            ClusterName: "praesentium",
            FinalSnapshotName: sdk.String("rem"),
        },
        XAmzAlgorithm: sdk.String("voluptates"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("repudiandae"),
        XAmzDate: sdk.String("sint"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("itaque"),
        XAmzSignedHeaders: sdk.String("incidunt"),
        XAmzTarget: operations.DeleteClusterXAmzTargetEnumAmazonMemoryDbDeleteCluster,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteClusterResponse != nil {
        // handle response
    }
}
```

## DeleteParameterGroup

Deletes the specified parameter group. You cannot delete a parameter group if it is associated with any clusters. You cannot delete the default parameter groups in your account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteParameterGroup(ctx, operations.DeleteParameterGroupRequest{
        DeleteParameterGroupRequest: shared.DeleteParameterGroupRequest{
            ParameterGroupName: "enim",
        },
        XAmzAlgorithm: sdk.String("consequatur"),
        XAmzContentSha256: sdk.String("est"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("explicabo"),
        XAmzSecurityToken: sdk.String("deserunt"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("quibusdam"),
        XAmzTarget: operations.DeleteParameterGroupXAmzTargetEnumAmazonMemoryDbDeleteParameterGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteParameterGroupResponse != nil {
        // handle response
    }
}
```

## DeleteSnapshot

Deletes an existing snapshot. When you receive a successful response from this operation, MemoryDB immediately begins deleting the snapshot; you cannot cancel or revert this operation.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteSnapshot(ctx, operations.DeleteSnapshotRequest{
        DeleteSnapshotRequest: shared.DeleteSnapshotRequest{
            SnapshotName: "labore",
        },
        XAmzAlgorithm: sdk.String("modi"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("cupiditate"),
        XAmzSecurityToken: sdk.String("quos"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("magni"),
        XAmzTarget: operations.DeleteSnapshotXAmzTargetEnumAmazonMemoryDbDeleteSnapshot,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteSnapshotResponse != nil {
        // handle response
    }
}
```

## DeleteSubnetGroup

Deletes a subnet group. You cannot delete a default subnet group or one that is associated with any clusters.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteSubnetGroup(ctx, operations.DeleteSubnetGroupRequest{
        DeleteSubnetGroupRequest: shared.DeleteSubnetGroupRequest{
            SubnetGroupName: "assumenda",
        },
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("alias"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("facilis"),
        XAmzTarget: operations.DeleteSubnetGroupXAmzTargetEnumAmazonMemoryDbDeleteSubnetGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteSubnetGroupResponse != nil {
        // handle response
    }
}
```

## DeleteUser

Deletes a user. The user will be removed from all ACLs and in turn removed from all clusters.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteUser(ctx, operations.DeleteUserRequest{
        DeleteUserRequest: shared.DeleteUserRequest{
            UserName: "Mustafa.Green24",
        },
        XAmzAlgorithm: sdk.String("eligendi"),
        XAmzContentSha256: sdk.String("sint"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("sint"),
        XAmzSignedHeaders: sdk.String("officia"),
        XAmzTarget: operations.DeleteUserXAmzTargetEnumAmazonMemoryDbDeleteUser,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteUserResponse != nil {
        // handle response
    }
}
```

## DescribeACLs

Returns a list of ACLs

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeACLs(ctx, operations.DescribeACLsRequest{
        DescribeACLsRequest: shared.DescribeACLsRequest{
            ACLName: sdk.String("dolor"),
            MaxResults: sdk.Int64(891555),
            NextToken: sdk.String("a"),
        },
        MaxResults: sdk.String("dolorum"),
        NextToken: sdk.String("in"),
        XAmzAlgorithm: sdk.String("in"),
        XAmzContentSha256: sdk.String("illum"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("rerum"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("cumque"),
        XAmzTarget: operations.DescribeACLsXAmzTargetEnumAmazonMemoryDbDescribeAcLs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeACLsResponse != nil {
        // handle response
    }
}
```

## DescribeClusters

Returns information about all provisioned clusters if no cluster identifier is specified, or about a specific cluster if a cluster name is supplied.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeClusters(ctx, operations.DescribeClustersRequest{
        DescribeClustersRequest: shared.DescribeClustersRequest{
            ClusterName: sdk.String("facere"),
            MaxResults: sdk.Int64(411820),
            NextToken: sdk.String("aliquid"),
            ShowShardDetails: sdk.Bool(false),
        },
        MaxResults: sdk.String("laborum"),
        NextToken: sdk.String("accusamus"),
        XAmzAlgorithm: sdk.String("non"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("provident"),
        XAmzTarget: operations.DescribeClustersXAmzTargetEnumAmazonMemoryDbDescribeClusters,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeClustersResponse != nil {
        // handle response
    }
}
```

## DescribeEngineVersions

Returns a list of the available Redis engine versions.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeEngineVersions(ctx, operations.DescribeEngineVersionsRequest{
        DescribeEngineVersionsRequest: shared.DescribeEngineVersionsRequest{
            DefaultOnly: sdk.Bool(false),
            EngineVersion: sdk.String("nam"),
            MaxResults: sdk.Int64(659669),
            NextToken: sdk.String("blanditiis"),
            ParameterGroupFamily: sdk.String("deleniti"),
        },
        MaxResults: sdk.String("sapiente"),
        NextToken: sdk.String("amet"),
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("nisi"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("perferendis"),
        XAmzTarget: operations.DescribeEngineVersionsXAmzTargetEnumAmazonMemoryDbDescribeEngineVersions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeEngineVersionsResponse != nil {
        // handle response
    }
}
```

## DescribeEvents

Returns events related to clusters, security groups, and parameter groups. You can obtain events specific to a particular cluster, security group, or parameter group by providing the name as a parameter. By default, only the events occurring within the last hour are returned; however, you can retrieve up to 14 days' worth of events if necessary.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeEvents(ctx, operations.DescribeEventsRequest{
        DescribeEventsRequest: shared.DescribeEventsRequest{
            Duration: sdk.Int64(470132),
            EndTime: types.MustTimeFromString("2022-04-14T15:11:13.227Z"),
            MaxResults: sdk.Int64(660174),
            NextToken: sdk.String("labore"),
            SourceName: sdk.String("labore"),
            SourceType: shared.SourceTypeEnumSubnetGroup.ToPointer(),
            StartTime: types.MustTimeFromString("2021-07-03T02:32:39.849Z"),
        },
        MaxResults: sdk.String("eum"),
        NextToken: sdk.String("vero"),
        XAmzAlgorithm: sdk.String("aspernatur"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("et"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("ullam"),
        XAmzSignedHeaders: sdk.String("provident"),
        XAmzTarget: operations.DescribeEventsXAmzTargetEnumAmazonMemoryDbDescribeEvents,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeEventsResponse != nil {
        // handle response
    }
}
```

## DescribeParameterGroups

Returns a list of parameter group descriptions. If a parameter group name is specified, the list contains only the descriptions for that group.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeParameterGroups(ctx, operations.DescribeParameterGroupsRequest{
        DescribeParameterGroupsRequest: shared.DescribeParameterGroupsRequest{
            MaxResults: sdk.Int64(551816),
            NextToken: sdk.String("sint"),
            ParameterGroupName: sdk.String("accusantium"),
        },
        MaxResults: sdk.String("mollitia"),
        NextToken: sdk.String("reiciendis"),
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("ad"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("odit"),
        XAmzSignedHeaders: sdk.String("nemo"),
        XAmzTarget: operations.DescribeParameterGroupsXAmzTargetEnumAmazonMemoryDbDescribeParameterGroups,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeParameterGroupsResponse != nil {
        // handle response
    }
}
```

## DescribeParameters

Returns the detailed parameter list for a particular parameter group.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeParameters(ctx, operations.DescribeParametersRequest{
        DescribeParametersRequest: shared.DescribeParametersRequest{
            MaxResults: sdk.Int64(97260),
            NextToken: sdk.String("iure"),
            ParameterGroupName: "doloribus",
        },
        MaxResults: sdk.String("debitis"),
        NextToken: sdk.String("eius"),
        XAmzAlgorithm: sdk.String("maxime"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("facilis"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("repudiandae"),
        XAmzTarget: operations.DescribeParametersXAmzTargetEnumAmazonMemoryDbDescribeParameters,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeParametersResponse != nil {
        // handle response
    }
}
```

## DescribeReservedNodes

Returns information about reserved nodes for this account, or about a specified reserved node.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeReservedNodes(ctx, operations.DescribeReservedNodesRequest{
        DescribeReservedNodesRequest: shared.DescribeReservedNodesRequest{
            Duration: sdk.String("ullam"),
            MaxResults: sdk.Int64(714242),
            NextToken: sdk.String("nihil"),
            NodeType: sdk.String("repellat"),
            OfferingType: sdk.String("quibusdam"),
            ReservationID: sdk.String("sed"),
            ReservedNodesOfferingID: sdk.String("saepe"),
        },
        MaxResults: sdk.String("pariatur"),
        NextToken: sdk.String("accusantium"),
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("praesentium"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("magni"),
        XAmzSecurityToken: sdk.String("sunt"),
        XAmzSignature: sdk.String("quo"),
        XAmzSignedHeaders: sdk.String("illum"),
        XAmzTarget: operations.DescribeReservedNodesXAmzTargetEnumAmazonMemoryDbDescribeReservedNodes,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeReservedNodesResponse != nil {
        // handle response
    }
}
```

## DescribeReservedNodesOfferings

Lists available reserved node offerings.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeReservedNodesOfferings(ctx, operations.DescribeReservedNodesOfferingsRequest{
        DescribeReservedNodesOfferingsRequest: shared.DescribeReservedNodesOfferingsRequest{
            Duration: sdk.String("pariatur"),
            MaxResults: sdk.Int64(807319),
            NextToken: sdk.String("ea"),
            NodeType: sdk.String("excepturi"),
            OfferingType: sdk.String("odit"),
            ReservedNodesOfferingID: sdk.String("ea"),
        },
        MaxResults: sdk.String("accusantium"),
        NextToken: sdk.String("ab"),
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("autem"),
        XAmzSignature: sdk.String("nam"),
        XAmzSignedHeaders: sdk.String("eaque"),
        XAmzTarget: operations.DescribeReservedNodesOfferingsXAmzTargetEnumAmazonMemoryDbDescribeReservedNodesOfferings,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeReservedNodesOfferingsResponse != nil {
        // handle response
    }
}
```

## DescribeServiceUpdates

Returns details of the service updates

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeServiceUpdates(ctx, operations.DescribeServiceUpdatesRequest{
        DescribeServiceUpdatesRequest: shared.DescribeServiceUpdatesRequest{
            ClusterNames: []string{
                "nemo",
                "voluptatibus",
                "perferendis",
                "fugiat",
            },
            MaxResults: sdk.Int64(230742),
            NextToken: sdk.String("aut"),
            ServiceUpdateName: sdk.String("cumque"),
            Status: []shared.ServiceUpdateStatusEnum{
                shared.ServiceUpdateStatusEnumScheduled,
                shared.ServiceUpdateStatusEnumComplete,
            },
        },
        MaxResults: sdk.String("nobis"),
        NextToken: sdk.String("dolores"),
        XAmzAlgorithm: sdk.String("quis"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("dignissimos"),
        XAmzDate: sdk.String("eaque"),
        XAmzSecurityToken: sdk.String("quis"),
        XAmzSignature: sdk.String("nesciunt"),
        XAmzSignedHeaders: sdk.String("eos"),
        XAmzTarget: operations.DescribeServiceUpdatesXAmzTargetEnumAmazonMemoryDbDescribeServiceUpdates,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeServiceUpdatesResponse != nil {
        // handle response
    }
}
```

## DescribeSnapshots

Returns information about cluster snapshots. By default, DescribeSnapshots lists all of your snapshots; it can optionally describe a single snapshot, or just the snapshots associated with a particular cluster.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeSnapshots(ctx, operations.DescribeSnapshotsRequest{
        DescribeSnapshotsRequest: shared.DescribeSnapshotsRequest{
            ClusterName: sdk.String("perferendis"),
            MaxResults: sdk.Int64(170986),
            NextToken: sdk.String("minus"),
            ShowDetail: sdk.Bool(false),
            SnapshotName: sdk.String("quam"),
            Source: sdk.String("dolor"),
        },
        MaxResults: sdk.String("vero"),
        NextToken: sdk.String("nostrum"),
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("perspiciatis"),
        XAmzSignature: sdk.String("voluptatem"),
        XAmzSignedHeaders: sdk.String("porro"),
        XAmzTarget: operations.DescribeSnapshotsXAmzTargetEnumAmazonMemoryDbDescribeSnapshots,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeSnapshotsResponse != nil {
        // handle response
    }
}
```

## DescribeSubnetGroups

Returns a list of subnet group descriptions. If a subnet group name is specified, the list contains only the description of that group.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeSubnetGroups(ctx, operations.DescribeSubnetGroupsRequest{
        DescribeSubnetGroupsRequest: shared.DescribeSubnetGroupsRequest{
            MaxResults: sdk.Int64(164694),
            NextToken: sdk.String("blanditiis"),
            SubnetGroupName: sdk.String("error"),
        },
        MaxResults: sdk.String("eaque"),
        NextToken: sdk.String("occaecati"),
        XAmzAlgorithm: sdk.String("rerum"),
        XAmzContentSha256: sdk.String("adipisci"),
        XAmzCredential: sdk.String("asperiores"),
        XAmzDate: sdk.String("earum"),
        XAmzSecurityToken: sdk.String("modi"),
        XAmzSignature: sdk.String("iste"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        XAmzTarget: operations.DescribeSubnetGroupsXAmzTargetEnumAmazonMemoryDbDescribeSubnetGroups,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeSubnetGroupsResponse != nil {
        // handle response
    }
}
```

## DescribeUsers

Returns a list of users.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeUsers(ctx, operations.DescribeUsersRequest{
        DescribeUsersRequest: shared.DescribeUsersRequest{
            Filters: []shared.Filter{
                shared.Filter{
                    Name: "Rene Rolfson",
                    Values: []string{
                        "quos",
                        "aliquid",
                    },
                },
                shared.Filter{
                    Name: "Dawn Fadel",
                    Values: []string{
                        "excepturi",
                        "cum",
                        "voluptate",
                        "dignissimos",
                    },
                },
                shared.Filter{
                    Name: "Allen Parisian Jr.",
                    Values: []string{
                        "iure",
                    },
                },
            },
            MaxResults: sdk.Int64(487838),
            NextToken: sdk.String("quaerat"),
            UserName: sdk.String("Shaniya.Predovic61"),
        },
        MaxResults: sdk.String("eos"),
        NextToken: sdk.String("atque"),
        XAmzAlgorithm: sdk.String("sit"),
        XAmzContentSha256: sdk.String("fugiat"),
        XAmzCredential: sdk.String("ab"),
        XAmzDate: sdk.String("soluta"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("iusto"),
        XAmzSignedHeaders: sdk.String("voluptate"),
        XAmzTarget: operations.DescribeUsersXAmzTargetEnumAmazonMemoryDbDescribeUsers,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeUsersResponse != nil {
        // handle response
    }
}
```

## FailoverShard

Used to failover a shard. This API is designed for testing the behavior of your application in case of MemoryDB failover. It is not designed to be used as a production-level tool for initiating a failover to overcome a problem you may have with the cluster. Moreover, in certain conditions such as large scale operational events, Amazon may block this API. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.FailoverShard(ctx, operations.FailoverShardRequest{
        FailoverShardRequest: shared.FailoverShardRequest{
            ClusterName: "dolorum",
            ShardName: "deleniti",
        },
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("necessitatibus"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("asperiores"),
        XAmzSecurityToken: sdk.String("nihil"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("voluptate"),
        XAmzTarget: operations.FailoverShardXAmzTargetEnumAmazonMemoryDbFailoverShard,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FailoverShardResponse != nil {
        // handle response
    }
}
```

## ListAllowedNodeTypeUpdates

Lists all available node types that you can scale to from your cluster's current node type. When you use the UpdateCluster operation to scale your cluster, the value of the NodeType parameter must be one of the node types returned by this operation.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListAllowedNodeTypeUpdates(ctx, operations.ListAllowedNodeTypeUpdatesRequest{
        ListAllowedNodeTypeUpdatesRequest: shared.ListAllowedNodeTypeUpdatesRequest{
            ClusterName: "id",
        },
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("eius"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("amet"),
        XAmzSignature: sdk.String("optio"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        XAmzTarget: operations.ListAllowedNodeTypeUpdatesXAmzTargetEnumAmazonMemoryDbListAllowedNodeTypeUpdates,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAllowedNodeTypeUpdatesResponse != nil {
        // handle response
    }
}
```

## ListTags

Lists all tags currently on a named resource. A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track your MemoryDB resources. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/Tagging-Resources.html">Tagging your MemoryDB resources</a> 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTags(ctx, operations.ListTagsRequest{
        ListTagsRequest: shared.ListTagsRequest{
            ResourceArn: "ad",
        },
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("minima"),
        XAmzSignature: sdk.String("repellendus"),
        XAmzSignedHeaders: sdk.String("totam"),
        XAmzTarget: operations.ListTagsXAmzTargetEnumAmazonMemoryDbListTags,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsResponse != nil {
        // handle response
    }
}
```

## PurchaseReservedNodesOffering

Allows you to purchase a reserved node offering. Reserved nodes are not eligible for cancellation and are non-refundable.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PurchaseReservedNodesOffering(ctx, operations.PurchaseReservedNodesOfferingRequest{
        PurchaseReservedNodesOfferingRequest: shared.PurchaseReservedNodesOfferingRequest{
            NodeCount: sdk.Int64(628982),
            ReservationID: sdk.String("alias"),
            ReservedNodesOfferingID: "at",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("tempora"),
                    Value: sdk.String("vel"),
                },
                shared.Tag{
                    Key: sdk.String("quod"),
                    Value: sdk.String("officiis"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("a"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("harum"),
        XAmzSignature: sdk.String("iusto"),
        XAmzSignedHeaders: sdk.String("ipsum"),
        XAmzTarget: operations.PurchaseReservedNodesOfferingXAmzTargetEnumAmazonMemoryDbPurchaseReservedNodesOffering,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PurchaseReservedNodesOfferingResponse != nil {
        // handle response
    }
}
```

## ResetParameterGroup

Modifies the parameters of a parameter group to the engine or system default value. You can reset specific parameters by submitting a list of parameter names. To reset the entire parameter group, specify the AllParameters and ParameterGroupName parameters.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ResetParameterGroup(ctx, operations.ResetParameterGroupRequest{
        ResetParameterGroupRequest: shared.ResetParameterGroupRequest{
            AllParameters: sdk.Bool(false),
            ParameterGroupName: "quisquam",
            ParameterNames: []string{
                "amet",
                "tempore",
                "accusamus",
                "numquam",
            },
        },
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("dolorem"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("nihil"),
        XAmzSignature: sdk.String("sit"),
        XAmzSignedHeaders: sdk.String("expedita"),
        XAmzTarget: operations.ResetParameterGroupXAmzTargetEnumAmazonMemoryDbResetParameterGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResetParameterGroupResponse != nil {
        // handle response
    }
}
```

## TagResource

<p>A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your MemoryDB resources. When you add or remove tags on clusters, those actions will be replicated to all nodes in the cluster. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/iam.resourcelevelpermissions.html">Resource-level permissions</a>.</p> <p>For example, you can use cost-allocation tags to your MemoryDB resources, Amazon generates a cost allocation report as a comma-separated value (CSV) file with your usage and costs aggregated by your tags. You can apply tags that represent business categories (such as cost centers, application names, or owners) to organize your costs across multiple services. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/tagging.html">Using Cost Allocation Tags</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        TagResourceRequest: shared.TagResourceRequest{
            ResourceArn: "neque",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("vel"),
                    Value: sdk.String("libero"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("voluptas"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("quam"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("incidunt"),
        XAmzSignature: sdk.String("qui"),
        XAmzSignedHeaders: sdk.String("cupiditate"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumAmazonMemoryDbTagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## UntagResource

Use this operation to remove tags on a resource

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        UntagResourceRequest: shared.UntagResourceRequest{
            ResourceArn: "maxime",
            TagKeys: []string{
                "soluta",
                "dicta",
                "laborum",
                "totam",
            },
        },
        XAmzAlgorithm: sdk.String("incidunt"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("dolores"),
        XAmzDate: sdk.String("distinctio"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("quam"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumAmazonMemoryDbUntagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateACL

Changes the list of users that belong to the Access Control List.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateACL(ctx, operations.UpdateACLRequest{
        UpdateACLRequest: shared.UpdateACLRequest{
            ACLName: "molestias",
            UserNamesToAdd: []string{
                "qui",
                "neque",
                "fugit",
                "magni",
            },
            UserNamesToRemove: []string{
                "sunt",
                "ullam",
            },
        },
        XAmzAlgorithm: sdk.String("nam"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("voluptatem"),
        XAmzDate: sdk.String("cumque"),
        XAmzSecurityToken: sdk.String("soluta"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("et"),
        XAmzTarget: operations.UpdateACLXAmzTargetEnumAmazonMemoryDbUpdateACL,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateACLResponse != nil {
        // handle response
    }
}
```

## UpdateCluster

Modifies the settings for a cluster. You can use this operation to change one or more cluster configuration settings by specifying the settings and the new values.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateCluster(ctx, operations.UpdateClusterRequest{
        UpdateClusterRequest: shared.UpdateClusterRequest{
            ACLName: sdk.String("saepe"),
            ClusterName: "ipsum",
            Description: sdk.String("veritatis"),
            EngineVersion: sdk.String("nobis"),
            MaintenanceWindow: sdk.String("quos"),
            NodeType: sdk.String("tempore"),
            ParameterGroupName: sdk.String("cupiditate"),
            ReplicaConfiguration: &shared.ReplicaConfigurationRequest{
                ReplicaCount: sdk.Int64(45614),
            },
            SecurityGroupIds: []string{
                "dolorem",
                "dolore",
                "labore",
                "adipisci",
            },
            ShardConfiguration: &shared.ShardConfigurationRequest{
                ShardCount: sdk.Int64(677263),
            },
            SnapshotRetentionLimit: sdk.Int64(100294),
            SnapshotWindow: sdk.String("quae"),
            SnsTopicArn: sdk.String("aut"),
            SnsTopicStatus: sdk.String("quas"),
        },
        XAmzAlgorithm: sdk.String("itaque"),
        XAmzContentSha256: sdk.String("consequatur"),
        XAmzCredential: sdk.String("est"),
        XAmzDate: sdk.String("repellendus"),
        XAmzSecurityToken: sdk.String("porro"),
        XAmzSignature: sdk.String("doloribus"),
        XAmzSignedHeaders: sdk.String("ut"),
        XAmzTarget: operations.UpdateClusterXAmzTargetEnumAmazonMemoryDbUpdateCluster,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateClusterResponse != nil {
        // handle response
    }
}
```

## UpdateParameterGroup

Updates the parameters of a parameter group. You can modify up to 20 parameters in a single request by submitting a list parameter name and value pairs.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateParameterGroup(ctx, operations.UpdateParameterGroupRequest{
        UpdateParameterGroupRequest: shared.UpdateParameterGroupRequest{
            ParameterGroupName: "facilis",
            ParameterNameValues: []shared.ParameterNameValue{
                shared.ParameterNameValue{
                    ParameterName: sdk.String("qui"),
                    ParameterValue: sdk.String("quae"),
                },
                shared.ParameterNameValue{
                    ParameterName: sdk.String("laudantium"),
                    ParameterValue: sdk.String("odio"),
                },
                shared.ParameterNameValue{
                    ParameterName: sdk.String("occaecati"),
                    ParameterValue: sdk.String("voluptatibus"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("quisquam"),
        XAmzContentSha256: sdk.String("vero"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("quis"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("voluptate"),
        XAmzTarget: operations.UpdateParameterGroupXAmzTargetEnumAmazonMemoryDbUpdateParameterGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateParameterGroupResponse != nil {
        // handle response
    }
}
```

## UpdateSubnetGroup

Updates a subnet group. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/ubnetGroups.Modifying.html">Updating a subnet group</a> 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateSubnetGroup(ctx, operations.UpdateSubnetGroupRequest{
        UpdateSubnetGroupRequest: shared.UpdateSubnetGroupRequest{
            Description: sdk.String("consectetur"),
            SubnetGroupName: "vero",
            SubnetIds: []string{
                "dignissimos",
                "hic",
                "distinctio",
                "quod",
            },
        },
        XAmzAlgorithm: sdk.String("odio"),
        XAmzContentSha256: sdk.String("similique"),
        XAmzCredential: sdk.String("facilis"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("ducimus"),
        XAmzSignature: sdk.String("dolore"),
        XAmzSignedHeaders: sdk.String("quibusdam"),
        XAmzTarget: operations.UpdateSubnetGroupXAmzTargetEnumAmazonMemoryDbUpdateSubnetGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateSubnetGroupResponse != nil {
        // handle response
    }
}
```

## UpdateUser

Changes user password(s) and/or access string.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateUser(ctx, operations.UpdateUserRequest{
        UpdateUserRequest: shared.UpdateUserRequest{
            AccessString: sdk.String("illum"),
            AuthenticationMode: &shared.AuthenticationMode{
                Passwords: []string{
                    "natus",
                },
                Type: shared.InputAuthenticationTypeEnumPassword.ToPointer(),
            },
            UserName: "Oma.Ankunding86",
        },
        XAmzAlgorithm: sdk.String("fugit"),
        XAmzContentSha256: sdk.String("porro"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("doloribus"),
        XAmzSecurityToken: sdk.String("iusto"),
        XAmzSignature: sdk.String("eligendi"),
        XAmzSignedHeaders: sdk.String("ducimus"),
        XAmzTarget: operations.UpdateUserXAmzTargetEnumAmazonMemoryDbUpdateUser,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateUserResponse != nil {
        // handle response
    }
}
```
