# SDK

## Overview

DAX is a managed caching service engineered for Amazon DynamoDB. DAX dramatically speeds up database reads by caching frequently-accessed data from DynamoDB, so applications can access that data with sub-millisecond latency. You can create a DAX cluster easily, using the AWS Management Console. With a few simple modifications to your code, your application can begin taking advantage of the DAX cluster and realize significant improvements in read performance.

Amazon Web Services documentation
<https://docs.aws.amazon.com/dax/>
### Available Operations

* [CreateCluster](#createcluster) - Creates a DAX cluster. All nodes in the cluster run the same DAX caching software.
* [CreateParameterGroup](#createparametergroup) - Creates a new parameter group. A parameter group is a collection of parameters that you apply to all of the nodes in a DAX cluster.
* [CreateSubnetGroup](#createsubnetgroup) - Creates a new subnet group.
* [DecreaseReplicationFactor](#decreasereplicationfactor) - <p>Removes one or more nodes from a DAX cluster.</p> <note> <p>You cannot use <code>DecreaseReplicationFactor</code> to remove the last node in a DAX cluster. If you need to do this, use <code>DeleteCluster</code> instead.</p> </note>
* [DeleteCluster](#deletecluster) - Deletes a previously provisioned DAX cluster. <i>DeleteCluster</i> deletes all associated nodes, node endpoints and the DAX cluster itself. When you receive a successful response from this action, DAX immediately begins deleting the cluster; you cannot cancel or revert this action.
* [DeleteParameterGroup](#deleteparametergroup) - Deletes the specified parameter group. You cannot delete a parameter group if it is associated with any DAX clusters.
* [DeleteSubnetGroup](#deletesubnetgroup) - <p>Deletes a subnet group.</p> <note> <p>You cannot delete a subnet group if it is associated with any DAX clusters.</p> </note>
* [DescribeClusters](#describeclusters) - <p>Returns information about all provisioned DAX clusters if no cluster identifier is specified, or about a specific DAX cluster if a cluster identifier is supplied.</p> <p>If the cluster is in the CREATING state, only cluster level information will be displayed until all of the nodes are successfully provisioned.</p> <p>If the cluster is in the DELETING state, only cluster level information will be displayed.</p> <p>If nodes are currently being added to the DAX cluster, node endpoint information and creation time for the additional nodes will not be displayed until they are completely provisioned. When the DAX cluster state is <i>available</i>, the cluster is ready for use.</p> <p>If nodes are currently being removed from the DAX cluster, no endpoint information for the removed nodes is displayed.</p>
* [DescribeDefaultParameters](#describedefaultparameters) - Returns the default system parameter information for the DAX caching software.
* [DescribeEvents](#describeevents) - <p>Returns events related to DAX clusters and parameter groups. You can obtain events specific to a particular DAX cluster or parameter group by providing the name as a parameter.</p> <p>By default, only the events occurring within the last 24 hours are returned; however, you can retrieve up to 14 days' worth of events if necessary.</p>
* [DescribeParameterGroups](#describeparametergroups) - Returns a list of parameter group descriptions. If a parameter group name is specified, the list will contain only the descriptions for that group.
* [DescribeParameters](#describeparameters) - Returns the detailed parameter list for a particular parameter group.
* [DescribeSubnetGroups](#describesubnetgroups) - Returns a list of subnet group descriptions. If a subnet group name is specified, the list will contain only the description of that group.
* [IncreaseReplicationFactor](#increasereplicationfactor) - Adds one or more nodes to a DAX cluster.
* [ListTags](#listtags) - List all of the tags for a DAX cluster. You can call <code>ListTags</code> up to 10 times per second, per account.
* [RebootNode](#rebootnode) - <p>Reboots a single node of a DAX cluster. The reboot action takes place as soon as possible. During the reboot, the node status is set to REBOOTING.</p> <note> <p> <code>RebootNode</code> restarts the DAX engine process and does not remove the contents of the cache. </p> </note>
* [TagResource](#tagresource) - Associates a set of tags with a DAX resource. You can call <code>TagResource</code> up to 5 times per second, per account. 
* [UntagResource](#untagresource) - Removes the association of tags from a DAX resource. You can call <code>UntagResource</code> up to 5 times per second, per account. 
* [UpdateCluster](#updatecluster) - Modifies the settings for a DAX cluster. You can use this action to change one or more cluster configuration parameters by specifying the parameters and the new values.
* [UpdateParameterGroup](#updateparametergroup) - Modifies the parameters of a parameter group. You can modify up to 20 parameters in a single request by submitting a list parameter name and value pairs.
* [UpdateSubnetGroup](#updatesubnetgroup) - Modifies an existing subnet group.

## CreateCluster

Creates a DAX cluster. All nodes in the cluster run the same DAX caching software.

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
            AvailabilityZones: []string{
                "veritatis",
                "deserunt",
            },
            ClusterEndpointEncryptionType: shared.ClusterEndpointEncryptionTypeEnumNone.ToPointer(),
            ClusterName: "ipsam",
            Description: sdk.String("repellendus"),
            IamRoleArn: "sapiente",
            NodeType: "quo",
            NotificationTopicArn: sdk.String("odit"),
            ParameterGroupName: sdk.String("at"),
            PreferredMaintenanceWindow: sdk.String("at"),
            ReplicationFactor: 978619,
            SSESpecification: &shared.SSESpecification{
                Enabled: false,
            },
            SecurityGroupIds: []string{
                "quod",
                "quod",
            },
            SubnetGroupName: sdk.String("esse"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("porro"),
                    Value: sdk.String("dolorum"),
                },
                shared.Tag{
                    Key: sdk.String("dicta"),
                    Value: sdk.String("nam"),
                },
                shared.Tag{
                    Key: sdk.String("officia"),
                    Value: sdk.String("occaecati"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("fugit"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("optio"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("beatae"),
        XAmzSignedHeaders: sdk.String("commodi"),
        XAmzTarget: operations.CreateClusterXAmzTargetEnumAmazonDaxv3CreateCluster,
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

Creates a new parameter group. A parameter group is a collection of parameters that you apply to all of the nodes in a DAX cluster.

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
            Description: sdk.String("molestiae"),
            ParameterGroupName: "modi",
        },
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("impedit"),
        XAmzCredential: sdk.String("cum"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
        XAmzTarget: operations.CreateParameterGroupXAmzTargetEnumAmazonDaxv3CreateParameterGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateParameterGroupResponse != nil {
        // handle response
    }
}
```

## CreateSubnetGroup

Creates a new subnet group.

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
            Description: sdk.String("perferendis"),
            SubnetGroupName: "ad",
            SubnetIds: []string{
                "sed",
                "iste",
                "dolor",
            },
        },
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("laboriosam"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("fuga"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("corporis"),
        XAmzTarget: operations.CreateSubnetGroupXAmzTargetEnumAmazonDaxv3CreateSubnetGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSubnetGroupResponse != nil {
        // handle response
    }
}
```

## DecreaseReplicationFactor

<p>Removes one or more nodes from a DAX cluster.</p> <note> <p>You cannot use <code>DecreaseReplicationFactor</code> to remove the last node in a DAX cluster. If you need to do this, use <code>DeleteCluster</code> instead.</p> </note>

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
    res, err := s.SDK.DecreaseReplicationFactor(ctx, operations.DecreaseReplicationFactorRequest{
        DecreaseReplicationFactorRequest: shared.DecreaseReplicationFactorRequest{
            AvailabilityZones: []string{
                "iure",
                "saepe",
                "quidem",
            },
            ClusterName: "architecto",
            NewReplicationFactor: 60225,
            NodeIdsToRemove: []string{
                "est",
                "mollitia",
                "laborum",
                "dolores",
            },
        },
        XAmzAlgorithm: sdk.String("dolorem"),
        XAmzContentSha256: sdk.String("corporis"),
        XAmzCredential: sdk.String("explicabo"),
        XAmzDate: sdk.String("nobis"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("nemo"),
        XAmzTarget: operations.DecreaseReplicationFactorXAmzTargetEnumAmazonDaxv3DecreaseReplicationFactor,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DecreaseReplicationFactorResponse != nil {
        // handle response
    }
}
```

## DeleteCluster

Deletes a previously provisioned DAX cluster. <i>DeleteCluster</i> deletes all associated nodes, node endpoints and the DAX cluster itself. When you receive a successful response from this action, DAX immediately begins deleting the cluster; you cannot cancel or revert this action.

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
            ClusterName: "minima",
        },
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("accusantium"),
        XAmzCredential: sdk.String("iure"),
        XAmzDate: sdk.String("culpa"),
        XAmzSecurityToken: sdk.String("doloribus"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("architecto"),
        XAmzTarget: operations.DeleteClusterXAmzTargetEnumAmazonDaxv3DeleteCluster,
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

Deletes the specified parameter group. You cannot delete a parameter group if it is associated with any DAX clusters.

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
            ParameterGroupName: "mollitia",
        },
        XAmzAlgorithm: sdk.String("dolorem"),
        XAmzContentSha256: sdk.String("culpa"),
        XAmzCredential: sdk.String("consequuntur"),
        XAmzDate: sdk.String("repellat"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("numquam"),
        XAmzTarget: operations.DeleteParameterGroupXAmzTargetEnumAmazonDaxv3DeleteParameterGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteParameterGroupResponse != nil {
        // handle response
    }
}
```

## DeleteSubnetGroup

<p>Deletes a subnet group.</p> <note> <p>You cannot delete a subnet group if it is associated with any DAX clusters.</p> </note>

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
            SubnetGroupName: "commodi",
        },
        XAmzAlgorithm: sdk.String("quam"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("velit"),
        XAmzDate: sdk.String("error"),
        XAmzSecurityToken: sdk.String("quia"),
        XAmzSignature: sdk.String("quis"),
        XAmzSignedHeaders: sdk.String("vitae"),
        XAmzTarget: operations.DeleteSubnetGroupXAmzTargetEnumAmazonDaxv3DeleteSubnetGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteSubnetGroupResponse != nil {
        // handle response
    }
}
```

## DescribeClusters

<p>Returns information about all provisioned DAX clusters if no cluster identifier is specified, or about a specific DAX cluster if a cluster identifier is supplied.</p> <p>If the cluster is in the CREATING state, only cluster level information will be displayed until all of the nodes are successfully provisioned.</p> <p>If the cluster is in the DELETING state, only cluster level information will be displayed.</p> <p>If nodes are currently being added to the DAX cluster, node endpoint information and creation time for the additional nodes will not be displayed until they are completely provisioned. When the DAX cluster state is <i>available</i>, the cluster is ready for use.</p> <p>If nodes are currently being removed from the DAX cluster, no endpoint information for the removed nodes is displayed.</p>

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
            ClusterNames: []string{
                "animi",
                "enim",
                "odit",
            },
            MaxResults: sdk.Int64(778346),
            NextToken: sdk.String("sequi"),
        },
        XAmzAlgorithm: sdk.String("tenetur"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("id"),
        XAmzDate: sdk.String("possimus"),
        XAmzSecurityToken: sdk.String("aut"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("error"),
        XAmzTarget: operations.DescribeClustersXAmzTargetEnumAmazonDaxv3DescribeClusters,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeClustersResponse != nil {
        // handle response
    }
}
```

## DescribeDefaultParameters

Returns the default system parameter information for the DAX caching software.

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
    res, err := s.SDK.DescribeDefaultParameters(ctx, operations.DescribeDefaultParametersRequest{
        DescribeDefaultParametersRequest: shared.DescribeDefaultParametersRequest{
            MaxResults: sdk.Int64(837945),
            NextToken: sdk.String("laborum"),
        },
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("reiciendis"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("nihil"),
        XAmzSignature: sdk.String("praesentium"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
        XAmzTarget: operations.DescribeDefaultParametersXAmzTargetEnumAmazonDaxv3DescribeDefaultParameters,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDefaultParametersResponse != nil {
        // handle response
    }
}
```

## DescribeEvents

<p>Returns events related to DAX clusters and parameter groups. You can obtain events specific to a particular DAX cluster or parameter group by providing the name as a parameter.</p> <p>By default, only the events occurring within the last 24 hours are returned; however, you can retrieve up to 14 days' worth of events if necessary.</p>

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
            Duration: sdk.Int64(55714),
            EndTime: types.MustTimeFromString("2022-02-05T15:41:25.512Z"),
            MaxResults: sdk.Int64(739264),
            NextToken: sdk.String("perferendis"),
            SourceName: sdk.String("doloremque"),
            SourceType: shared.SourceTypeEnumParameterGroup.ToPointer(),
            StartTime: types.MustTimeFromString("2022-01-08T10:49:12.847Z"),
        },
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("corporis"),
        XAmzCredential: sdk.String("dolore"),
        XAmzDate: sdk.String("iusto"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("harum"),
        XAmzSignedHeaders: sdk.String("enim"),
        XAmzTarget: operations.DescribeEventsXAmzTargetEnumAmazonDaxv3DescribeEvents,
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

Returns a list of parameter group descriptions. If a parameter group name is specified, the list will contain only the descriptions for that group.

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
            MaxResults: sdk.Int64(880476),
            NextToken: sdk.String("commodi"),
            ParameterGroupNames: []string{
                "quae",
                "ipsum",
                "quidem",
                "molestias",
            },
        },
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("pariatur"),
        XAmzCredential: sdk.String("modi"),
        XAmzDate: sdk.String("praesentium"),
        XAmzSecurityToken: sdk.String("rem"),
        XAmzSignature: sdk.String("voluptates"),
        XAmzSignedHeaders: sdk.String("quasi"),
        XAmzTarget: operations.DescribeParameterGroupsXAmzTargetEnumAmazonDaxv3DescribeParameterGroups,
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
            MaxResults: sdk.Int64(921158),
            NextToken: sdk.String("sint"),
            ParameterGroupName: "veritatis",
            Source: sdk.String("itaque"),
        },
        XAmzAlgorithm: sdk.String("incidunt"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("consequatur"),
        XAmzDate: sdk.String("est"),
        XAmzSecurityToken: sdk.String("quibusdam"),
        XAmzSignature: sdk.String("explicabo"),
        XAmzSignedHeaders: sdk.String("deserunt"),
        XAmzTarget: operations.DescribeParametersXAmzTargetEnumAmazonDaxv3DescribeParameters,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeParametersResponse != nil {
        // handle response
    }
}
```

## DescribeSubnetGroups

Returns a list of subnet group descriptions. If a subnet group name is specified, the list will contain only the description of that group.

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
            MaxResults: sdk.Int64(716327),
            NextToken: sdk.String("quibusdam"),
            SubnetGroupNames: []string{
                "modi",
                "qui",
            },
        },
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("cupiditate"),
        XAmzCredential: sdk.String("quos"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("magni"),
        XAmzSignature: sdk.String("assumenda"),
        XAmzSignedHeaders: sdk.String("ipsam"),
        XAmzTarget: operations.DescribeSubnetGroupsXAmzTargetEnumAmazonDaxv3DescribeSubnetGroups,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeSubnetGroupsResponse != nil {
        // handle response
    }
}
```

## IncreaseReplicationFactor

Adds one or more nodes to a DAX cluster.

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
    res, err := s.SDK.IncreaseReplicationFactor(ctx, operations.IncreaseReplicationFactorRequest{
        IncreaseReplicationFactorRequest: shared.IncreaseReplicationFactorRequest{
            AvailabilityZones: []string{
                "fugit",
            },
            ClusterName: "dolorum",
            NewReplicationFactor: 569618,
        },
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("tempore"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("non"),
        XAmzTarget: operations.IncreaseReplicationFactorXAmzTargetEnumAmazonDaxv3IncreaseReplicationFactor,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IncreaseReplicationFactorResponse != nil {
        // handle response
    }
}
```

## ListTags

List all of the tags for a DAX cluster. You can call <code>ListTags</code> up to 10 times per second, per account.

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
            NextToken: sdk.String("eligendi"),
            ResourceName: "sint",
        },
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("necessitatibus"),
        XAmzDate: sdk.String("sint"),
        XAmzSecurityToken: sdk.String("officia"),
        XAmzSignature: sdk.String("dolor"),
        XAmzSignedHeaders: sdk.String("debitis"),
        XAmzTarget: operations.ListTagsXAmzTargetEnumAmazonDaxv3ListTags,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsResponse != nil {
        // handle response
    }
}
```

## RebootNode

<p>Reboots a single node of a DAX cluster. The reboot action takes place as soon as possible. During the reboot, the node status is set to REBOOTING.</p> <note> <p> <code>RebootNode</code> restarts the DAX engine process and does not remove the contents of the cache. </p> </note>

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
    res, err := s.SDK.RebootNode(ctx, operations.RebootNodeRequest{
        RebootNodeRequest: shared.RebootNodeRequest{
            ClusterName: "a",
            NodeID: "dolorum",
        },
        XAmzAlgorithm: sdk.String("in"),
        XAmzContentSha256: sdk.String("in"),
        XAmzCredential: sdk.String("illum"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("rerum"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("magnam"),
        XAmzTarget: operations.RebootNodeXAmzTargetEnumAmazonDaxv3RebootNode,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RebootNodeResponse != nil {
        // handle response
    }
}
```

## TagResource

Associates a set of tags with a DAX resource. You can call <code>TagResource</code> up to 5 times per second, per account. 

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
            ResourceName: "cumque",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("ea"),
                    Value: sdk.String("aliquid"),
                },
                shared.Tag{
                    Key: sdk.String("laborum"),
                    Value: sdk.String("accusamus"),
                },
                shared.Tag{
                    Key: sdk.String("non"),
                    Value: sdk.String("occaecati"),
                },
                shared.Tag{
                    Key: sdk.String("enim"),
                    Value: sdk.String("accusamus"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("nam"),
        XAmzSecurityToken: sdk.String("id"),
        XAmzSignature: sdk.String("blanditiis"),
        XAmzSignedHeaders: sdk.String("deleniti"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumAmazonDaxv3TagResource,
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

Removes the association of tags from a DAX resource. You can call <code>UntagResource</code> up to 5 times per second, per account. 

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
            ResourceName: "sapiente",
            TagKeys: []string{
                "deserunt",
            },
        },
        XAmzAlgorithm: sdk.String("nisi"),
        XAmzContentSha256: sdk.String("vel"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("nihil"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumAmazonDaxv3UntagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateCluster

Modifies the settings for a DAX cluster. You can use this action to change one or more cluster configuration parameters by specifying the parameters and the new values.

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
            ClusterName: "magnam",
            Description: sdk.String("distinctio"),
            NotificationTopicArn: sdk.String("id"),
            NotificationTopicStatus: sdk.String("labore"),
            ParameterGroupName: sdk.String("labore"),
            PreferredMaintenanceWindow: sdk.String("suscipit"),
            SecurityGroupIds: []string{
                "nobis",
                "eum",
                "vero",
            },
        },
        XAmzAlgorithm: sdk.String("aspernatur"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("et"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("ullam"),
        XAmzSignedHeaders: sdk.String("provident"),
        XAmzTarget: operations.UpdateClusterXAmzTargetEnumAmazonDaxv3UpdateCluster,
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

Modifies the parameters of a parameter group. You can modify up to 20 parameters in a single request by submitting a list parameter name and value pairs.

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
            ParameterGroupName: "quos",
            ParameterNameValues: []shared.ParameterNameValue{
                shared.ParameterNameValue{
                    ParameterName: sdk.String("accusantium"),
                    ParameterValue: sdk.String("mollitia"),
                },
                shared.ParameterNameValue{
                    ParameterName: sdk.String("reiciendis"),
                    ParameterValue: sdk.String("mollitia"),
                },
                shared.ParameterNameValue{
                    ParameterName: sdk.String("ad"),
                    ParameterValue: sdk.String("eum"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("necessitatibus"),
        XAmzCredential: sdk.String("odit"),
        XAmzDate: sdk.String("nemo"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("iure"),
        XAmzSignedHeaders: sdk.String("doloribus"),
        XAmzTarget: operations.UpdateParameterGroupXAmzTargetEnumAmazonDaxv3UpdateParameterGroup,
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

Modifies an existing subnet group.

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
            Description: sdk.String("debitis"),
            SubnetGroupName: "eius",
            SubnetIds: []string{
                "deleniti",
                "facilis",
                "in",
                "architecto",
            },
        },
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("repudiandae"),
        XAmzCredential: sdk.String("ullam"),
        XAmzDate: sdk.String("expedita"),
        XAmzSecurityToken: sdk.String("nihil"),
        XAmzSignature: sdk.String("repellat"),
        XAmzSignedHeaders: sdk.String("quibusdam"),
        XAmzTarget: operations.UpdateSubnetGroupXAmzTargetEnumAmazonDaxv3UpdateSubnetGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateSubnetGroupResponse != nil {
        // handle response
    }
}
```
