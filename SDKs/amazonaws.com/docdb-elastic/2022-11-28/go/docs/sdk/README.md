# SDK

## Overview

The new Amazon Elastic DocumentDB service endpoint.

Amazon Web Services documentation
<https://docs.aws.amazon.com/docdb-elastic/>
### Available Operations

* [CreateCluster](#createcluster) - Creates a new Elastic DocumentDB cluster and returns its Cluster structure.
* [CreateClusterSnapshot](#createclustersnapshot) - Creates a snapshot of a cluster.
* [DeleteCluster](#deletecluster) - Delete a Elastic DocumentDB cluster.
* [DeleteClusterSnapshot](#deleteclustersnapshot) - Delete a Elastic DocumentDB snapshot.
* [GetCluster](#getcluster) - Returns information about a specific Elastic DocumentDB cluster.
* [GetClusterSnapshot](#getclustersnapshot) - Returns information about a specific Elastic DocumentDB snapshot
* [ListClusterSnapshots](#listclustersnapshots) - Returns information about Elastic DocumentDB snapshots for a specified cluster.
* [ListClusters](#listclusters) - Returns information about provisioned Elastic DocumentDB clusters.
* [ListTagsForResource](#listtagsforresource) - Lists all tags on a Elastic DocumentDB resource
* [RestoreClusterFromSnapshot](#restoreclusterfromsnapshot) - Restores a Elastic DocumentDB cluster from a snapshot.
* [TagResource](#tagresource) - Adds metadata tags to a Elastic DocumentDB resource
* [UntagResource](#untagresource) - Removes metadata tags to a Elastic DocumentDB resource
* [UpdateCluster](#updatecluster) - Modifies a Elastic DocumentDB cluster. This includes updating admin-username/password, upgrading API version setting up a backup window and maintenance window

## CreateCluster

Creates a new Elastic DocumentDB cluster and returns its Cluster structure.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateCluster(ctx, operations.CreateClusterRequest{
        RequestBody: operations.CreateClusterRequestBody{
            AdminUserName: "ab",
            AdminUserPassword: "quis",
            AuthType: operations.CreateClusterRequestBodyAuthTypeEnumPlainText,
            ClientToken: sdk.String("deserunt"),
            ClusterName: "perferendis",
            KmsKeyID: sdk.String("ipsam"),
            PreferredMaintenanceWindow: sdk.String("repellendus"),
            ShardCapacity: 957156,
            ShardCount: 778157,
            SubnetIds: []string{
                "at",
            },
            Tags: map[string]string{
                "maiores": "molestiae",
                "quod": "quod",
                "esse": "totam",
                "porro": "dolorum",
            },
            VpcSecurityGroupIds: []string{
                "nam",
            },
        },
        XAmzAlgorithm: sdk.String("officia"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("optio"),
        XAmzSignedHeaders: sdk.String("totam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateClusterOutput != nil {
        // handle response
    }
}
```

## CreateClusterSnapshot

Creates a snapshot of a cluster.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateClusterSnapshot(ctx, operations.CreateClusterSnapshotRequest{
        RequestBody: operations.CreateClusterSnapshotRequestBody{
            ClusterArn: "beatae",
            SnapshotName: "commodi",
            Tags: map[string]string{
                "modi": "qui",
                "impedit": "cum",
            },
        },
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("ad"),
        XAmzSignedHeaders: sdk.String("natus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateClusterSnapshotOutput != nil {
        // handle response
    }
}
```

## DeleteCluster

Delete a Elastic DocumentDB cluster.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteCluster(ctx, operations.DeleteClusterRequest{
        XAmzAlgorithm: sdk.String("sed"),
        XAmzContentSha256: sdk.String("iste"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("laboriosam"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("saepe"),
        ClusterArn: "fuga",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteClusterOutput != nil {
        // handle response
    }
}
```

## DeleteClusterSnapshot

Delete a Elastic DocumentDB snapshot.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteClusterSnapshot(ctx, operations.DeleteClusterSnapshotRequest{
        XAmzAlgorithm: sdk.String("in"),
        XAmzContentSha256: sdk.String("corporis"),
        XAmzCredential: sdk.String("iste"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("architecto"),
        SnapshotArn: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteClusterSnapshotOutput != nil {
        // handle response
    }
}
```

## GetCluster

Returns information about a specific Elastic DocumentDB cluster.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetCluster(ctx, operations.GetClusterRequest{
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("est"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("dolores"),
        XAmzSignature: sdk.String("dolorem"),
        XAmzSignedHeaders: sdk.String("corporis"),
        ClusterArn: "explicabo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetClusterOutput != nil {
        // handle response
    }
}
```

## GetClusterSnapshot

Returns information about a specific Elastic DocumentDB snapshot

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetClusterSnapshot(ctx, operations.GetClusterSnapshotRequest{
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("nemo"),
        XAmzSecurityToken: sdk.String("minima"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("accusantium"),
        SnapshotArn: "iure",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetClusterSnapshotOutput != nil {
        // handle response
    }
}
```

## ListClusterSnapshots

Returns information about Elastic DocumentDB snapshots for a specified cluster.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListClusterSnapshots(ctx, operations.ListClusterSnapshotsRequest{
        XAmzAlgorithm: sdk.String("culpa"),
        XAmzContentSha256: sdk.String("doloribus"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("dolorem"),
        XAmzSignedHeaders: sdk.String("culpa"),
        ClusterArn: sdk.String("consequuntur"),
        MaxResults: sdk.Int64(995300),
        NextToken: sdk.String("mollitia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListClusterSnapshotsOutput != nil {
        // handle response
    }
}
```

## ListClusters

Returns information about provisioned Elastic DocumentDB clusters.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListClusters(ctx, operations.ListClustersRequest{
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("numquam"),
        XAmzCredential: sdk.String("commodi"),
        XAmzDate: sdk.String("quam"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("velit"),
        XAmzSignedHeaders: sdk.String("error"),
        MaxResults: sdk.Int64(158969),
        NextToken: sdk.String("quis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListClustersOutput != nil {
        // handle response
    }
}
```

## ListTagsForResource

Lists all tags on a Elastic DocumentDB resource

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        XAmzAlgorithm: sdk.String("vitae"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("animi"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("odit"),
        XAmzSignature: sdk.String("quo"),
        XAmzSignedHeaders: sdk.String("sequi"),
        ResourceArn: "tenetur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## RestoreClusterFromSnapshot

Restores a Elastic DocumentDB cluster from a snapshot.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RestoreClusterFromSnapshot(ctx, operations.RestoreClusterFromSnapshotRequest{
        RequestBody: operations.RestoreClusterFromSnapshotRequestBody{
            ClusterName: "ipsam",
            KmsKeyID: sdk.String("id"),
            SubnetIds: []string{
                "aut",
                "quasi",
                "error",
                "temporibus",
            },
            Tags: map[string]string{
                "quasi": "reiciendis",
                "voluptatibus": "vero",
                "nihil": "praesentium",
            },
            VpcSecurityGroupIds: []string{
                "ipsa",
                "omnis",
                "voluptate",
                "cum",
            },
        },
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("doloremque"),
        XAmzCredential: sdk.String("reprehenderit"),
        XAmzDate: sdk.String("ut"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("corporis"),
        SnapshotArn: "dolore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RestoreClusterFromSnapshotOutput != nil {
        // handle response
    }
}
```

## TagResource

Adds metadata tags to a Elastic DocumentDB resource

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        RequestBody: operations.TagResourceRequestBody{
            Tags: map[string]string{
                "dicta": "harum",
                "enim": "accusamus",
            },
        },
        XAmzAlgorithm: sdk.String("commodi"),
        XAmzContentSha256: sdk.String("repudiandae"),
        XAmzCredential: sdk.String("quae"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("molestias"),
        XAmzSignedHeaders: sdk.String("excepturi"),
        ResourceArn: "pariatur",
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

Removes metadata tags to a Elastic DocumentDB resource

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        XAmzAlgorithm: sdk.String("modi"),
        XAmzContentSha256: sdk.String("praesentium"),
        XAmzCredential: sdk.String("rem"),
        XAmzDate: sdk.String("voluptates"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("repudiandae"),
        XAmzSignedHeaders: sdk.String("sint"),
        ResourceArn: "veritatis",
        TagKeys: []string{
            "incidunt",
            "enim",
            "consequatur",
            "est",
        },
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

Modifies a Elastic DocumentDB cluster. This includes updating admin-username/password, upgrading API version setting up a backup window and maintenance window

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateCluster(ctx, operations.UpdateClusterRequest{
        RequestBody: operations.UpdateClusterRequestBody{
            AdminUserPassword: sdk.String("quibusdam"),
            AuthType: operations.UpdateClusterRequestBodyAuthTypeEnumPlainText.ToPointer(),
            ClientToken: sdk.String("deserunt"),
            PreferredMaintenanceWindow: sdk.String("distinctio"),
            ShardCapacity: sdk.Int64(841386),
            ShardCount: sdk.Int64(289406),
            SubnetIds: []string{
                "qui",
                "aliquid",
            },
            VpcSecurityGroupIds: []string{
                "quos",
                "perferendis",
                "magni",
            },
        },
        XAmzAlgorithm: sdk.String("assumenda"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("alias"),
        XAmzDate: sdk.String("fugit"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("tempora"),
        ClusterArn: "facilis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateClusterOutput != nil {
        // handle response
    }
}
```
