# SDK

## Overview

For more information about AWS CloudHSM, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a> and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>.

Amazon Web Services documentation
<https://docs.aws.amazon.com/cloudhsmv2/>
### Available Operations

* [CopyBackupToRegion](#copybackuptoregion) - Copy an AWS CloudHSM cluster backup to a different region.
* [CreateCluster](#createcluster) - Creates a new AWS CloudHSM cluster.
* [CreateHsm](#createhsm) - Creates a new hardware security module (HSM) in the specified AWS CloudHSM cluster.
* [DeleteBackup](#deletebackup) - Deletes a specified AWS CloudHSM backup. A backup can be restored up to 7 days after the DeleteBackup request is made. For more information on restoring a backup, see <a>RestoreBackup</a>.
* [DeleteCluster](#deletecluster) - Deletes the specified AWS CloudHSM cluster. Before you can delete a cluster, you must delete all HSMs in the cluster. To see if the cluster contains any HSMs, use <a>DescribeClusters</a>. To delete an HSM, use <a>DeleteHsm</a>.
* [DeleteHsm](#deletehsm) - Deletes the specified HSM. To specify an HSM, you can use its identifier (ID), the IP address of the HSM's elastic network interface (ENI), or the ID of the HSM's ENI. You need to specify only one of these values. To find these values, use <a>DescribeClusters</a>.
* [DescribeBackups](#describebackups) - <p>Gets information about backups of AWS CloudHSM clusters.</p> <p>This is a paginated operation, which means that each response might contain only a subset of all the backups. When the response contains only a subset of backups, it includes a <code>NextToken</code> value. Use this value in a subsequent <code>DescribeBackups</code> request to get more backups. When you receive a response with no <code>NextToken</code> (or an empty or null value), that means there are no more backups to get.</p>
* [DescribeClusters](#describeclusters) - <p>Gets information about AWS CloudHSM clusters.</p> <p>This is a paginated operation, which means that each response might contain only a subset of all the clusters. When the response contains only a subset of clusters, it includes a <code>NextToken</code> value. Use this value in a subsequent <code>DescribeClusters</code> request to get more clusters. When you receive a response with no <code>NextToken</code> (or an empty or null value), that means there are no more clusters to get.</p>
* [InitializeCluster](#initializecluster) - Claims an AWS CloudHSM cluster by submitting the cluster certificate issued by your issuing certificate authority (CA) and the CA's root certificate. Before you can claim a cluster, you must sign the cluster's certificate signing request (CSR) with your issuing CA. To get the cluster's CSR, use <a>DescribeClusters</a>.
* [ListTags](#listtags) - <p>Gets a list of tags for the specified AWS CloudHSM cluster.</p> <p>This is a paginated operation, which means that each response might contain only a subset of all the tags. When the response contains only a subset of tags, it includes a <code>NextToken</code> value. Use this value in a subsequent <code>ListTags</code> request to get more tags. When you receive a response with no <code>NextToken</code> (or an empty or null value), that means there are no more tags to get.</p>
* [ModifyBackupAttributes](#modifybackupattributes) - Modifies attributes for AWS CloudHSM backup.
* [ModifyCluster](#modifycluster) - Modifies AWS CloudHSM cluster.
* [RestoreBackup](#restorebackup) - Restores a specified AWS CloudHSM backup that is in the <code>PENDING_DELETION</code> state. For mor information on deleting a backup, see <a>DeleteBackup</a>.
* [TagResource](#tagresource) - Adds or overwrites one or more tags for the specified AWS CloudHSM cluster.
* [UntagResource](#untagresource) - Removes the specified tag or tags from the specified AWS CloudHSM cluster.

## CopyBackupToRegion

Copy an AWS CloudHSM cluster backup to a different region.

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
    res, err := s.SDK.CopyBackupToRegion(ctx, operations.CopyBackupToRegionRequest{
        CopyBackupToRegionRequest: shared.CopyBackupToRegionRequest{
            BackupID: "delectus",
            DestinationRegion: "tempora",
            TagList: []shared.Tag{
                shared.Tag{
                    Key: "molestiae",
                    Value: "minus",
                },
                shared.Tag{
                    Key: "placeat",
                    Value: "voluptatum",
                },
            },
        },
        XAmzAlgorithm: sdk.String("iusto"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("nisi"),
        XAmzDate: sdk.String("recusandae"),
        XAmzSecurityToken: sdk.String("temporibus"),
        XAmzSignature: sdk.String("ab"),
        XAmzSignedHeaders: sdk.String("quis"),
        XAmzTarget: operations.CopyBackupToRegionXAmzTargetEnumBaldrAPIServiceCopyBackupToRegion,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CopyBackupToRegionResponse != nil {
        // handle response
    }
}
```

## CreateCluster

Creates a new AWS CloudHSM cluster.

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
            BackupRetentionPolicy: &shared.BackupRetentionPolicy{
                Type: shared.BackupRetentionTypeEnumDays.ToPointer(),
                Value: sdk.String("veritatis"),
            },
            HsmType: "deserunt",
            SourceBackupID: sdk.String("perferendis"),
            SubnetIds: []string{
                "repellendus",
                "sapiente",
            },
            TagList: []shared.Tag{
                shared.Tag{
                    Key: "odit",
                    Value: "at",
                },
                shared.Tag{
                    Key: "at",
                    Value: "maiores",
                },
                shared.Tag{
                    Key: "molestiae",
                    Value: "quod",
                },
                shared.Tag{
                    Key: "quod",
                    Value: "esse",
                },
            },
        },
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("porro"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("nam"),
        XAmzSignature: sdk.String("officia"),
        XAmzSignedHeaders: sdk.String("occaecati"),
        XAmzTarget: operations.CreateClusterXAmzTargetEnumBaldrAPIServiceCreateCluster,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateClusterResponse != nil {
        // handle response
    }
}
```

## CreateHsm

Creates a new hardware security module (HSM) in the specified AWS CloudHSM cluster.

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
    res, err := s.SDK.CreateHsm(ctx, operations.CreateHsmRequest{
        CreateHsmRequest: shared.CreateHsmRequest{
            AvailabilityZone: "fugit",
            ClusterID: "deleniti",
            IPAddress: sdk.String("hic"),
        },
        XAmzAlgorithm: sdk.String("optio"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("beatae"),
        XAmzDate: sdk.String("commodi"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("modi"),
        XAmzSignedHeaders: sdk.String("qui"),
        XAmzTarget: operations.CreateHsmXAmzTargetEnumBaldrAPIServiceCreateHsm,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateHsmResponse != nil {
        // handle response
    }
}
```

## DeleteBackup

Deletes a specified AWS CloudHSM backup. A backup can be restored up to 7 days after the DeleteBackup request is made. For more information on restoring a backup, see <a>RestoreBackup</a>.

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
    res, err := s.SDK.DeleteBackup(ctx, operations.DeleteBackupRequest{
        DeleteBackupRequest: shared.DeleteBackupRequest{
            BackupID: "impedit",
        },
        XAmzAlgorithm: sdk.String("cum"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("ad"),
        XAmzTarget: operations.DeleteBackupXAmzTargetEnumBaldrAPIServiceDeleteBackup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteBackupResponse != nil {
        // handle response
    }
}
```

## DeleteCluster

Deletes the specified AWS CloudHSM cluster. Before you can delete a cluster, you must delete all HSMs in the cluster. To see if the cluster contains any HSMs, use <a>DescribeClusters</a>. To delete an HSM, use <a>DeleteHsm</a>.

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
            ClusterID: "natus",
        },
        XAmzAlgorithm: sdk.String("sed"),
        XAmzContentSha256: sdk.String("iste"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("laboriosam"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("saepe"),
        XAmzTarget: operations.DeleteClusterXAmzTargetEnumBaldrAPIServiceDeleteCluster,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteClusterResponse != nil {
        // handle response
    }
}
```

## DeleteHsm

Deletes the specified HSM. To specify an HSM, you can use its identifier (ID), the IP address of the HSM's elastic network interface (ENI), or the ID of the HSM's ENI. You need to specify only one of these values. To find these values, use <a>DescribeClusters</a>.

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
    res, err := s.SDK.DeleteHsm(ctx, operations.DeleteHsmRequest{
        DeleteHsmRequest: shared.DeleteHsmRequest{
            ClusterID: "fuga",
            EniID: sdk.String("in"),
            EniIP: sdk.String("corporis"),
            HsmID: sdk.String("iste"),
        },
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("est"),
        XAmzTarget: operations.DeleteHsmXAmzTargetEnumBaldrAPIServiceDeleteHsm,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteHsmResponse != nil {
        // handle response
    }
}
```

## DescribeBackups

<p>Gets information about backups of AWS CloudHSM clusters.</p> <p>This is a paginated operation, which means that each response might contain only a subset of all the backups. When the response contains only a subset of backups, it includes a <code>NextToken</code> value. Use this value in a subsequent <code>DescribeBackups</code> request to get more backups. When you receive a response with no <code>NextToken</code> (or an empty or null value), that means there are no more backups to get.</p>

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
    res, err := s.SDK.DescribeBackups(ctx, operations.DescribeBackupsRequest{
        DescribeBackupsRequest: shared.DescribeBackupsRequest{
            Filters: map[string][]string{
                "laborum": []string{
                    "dolorem",
                },
                "corporis": []string{
                    "nobis",
                },
                "enim": []string{
                    "nemo",
                    "minima",
                    "excepturi",
                },
            },
            MaxResults: sdk.Int64(38425),
            NextToken: sdk.String("iure"),
            SortAscending: sdk.Bool(false),
        },
        MaxResults: sdk.String("culpa"),
        NextToken: sdk.String("doloribus"),
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("dolorem"),
        XAmzSecurityToken: sdk.String("culpa"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("repellat"),
        XAmzTarget: operations.DescribeBackupsXAmzTargetEnumBaldrAPIServiceDescribeBackups,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeBackupsResponse != nil {
        // handle response
    }
}
```

## DescribeClusters

<p>Gets information about AWS CloudHSM clusters.</p> <p>This is a paginated operation, which means that each response might contain only a subset of all the clusters. When the response contains only a subset of clusters, it includes a <code>NextToken</code> value. Use this value in a subsequent <code>DescribeClusters</code> request to get more clusters. When you receive a response with no <code>NextToken</code> (or an empty or null value), that means there are no more clusters to get.</p>

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
            Filters: map[string][]string{
                "occaecati": []string{
                    "commodi",
                    "quam",
                },
                "molestiae": []string{
                    "error",
                },
                "quia": []string{
                    "vitae",
                    "laborum",
                },
            },
            MaxResults: sdk.Int64(656330),
            NextToken: sdk.String("enim"),
        },
        MaxResults: sdk.String("odit"),
        NextToken: sdk.String("quo"),
        XAmzAlgorithm: sdk.String("sequi"),
        XAmzContentSha256: sdk.String("tenetur"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("id"),
        XAmzSecurityToken: sdk.String("possimus"),
        XAmzSignature: sdk.String("aut"),
        XAmzSignedHeaders: sdk.String("quasi"),
        XAmzTarget: operations.DescribeClustersXAmzTargetEnumBaldrAPIServiceDescribeClusters,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeClustersResponse != nil {
        // handle response
    }
}
```

## InitializeCluster

Claims an AWS CloudHSM cluster by submitting the cluster certificate issued by your issuing certificate authority (CA) and the CA's root certificate. Before you can claim a cluster, you must sign the cluster's certificate signing request (CSR) with your issuing CA. To get the cluster's CSR, use <a>DescribeClusters</a>.

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
    res, err := s.SDK.InitializeCluster(ctx, operations.InitializeClusterRequest{
        InitializeClusterRequest: shared.InitializeClusterRequest{
            ClusterID: "error",
            SignedCert: "temporibus",
            TrustAnchor: "laborum",
        },
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("reiciendis"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("nihil"),
        XAmzSignature: sdk.String("praesentium"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
        XAmzTarget: operations.InitializeClusterXAmzTargetEnumBaldrAPIServiceInitializeCluster,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InitializeClusterResponse != nil {
        // handle response
    }
}
```

## ListTags

<p>Gets a list of tags for the specified AWS CloudHSM cluster.</p> <p>This is a paginated operation, which means that each response might contain only a subset of all the tags. When the response contains only a subset of tags, it includes a <code>NextToken</code> value. Use this value in a subsequent <code>ListTags</code> request to get more tags. When you receive a response with no <code>NextToken</code> (or an empty or null value), that means there are no more tags to get.</p>

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
            MaxResults: sdk.Int64(55714),
            NextToken: sdk.String("omnis"),
            ResourceID: "voluptate",
        },
        MaxResults: sdk.String("cum"),
        NextToken: sdk.String("perferendis"),
        XAmzAlgorithm: sdk.String("doloremque"),
        XAmzContentSha256: sdk.String("reprehenderit"),
        XAmzCredential: sdk.String("ut"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("dolore"),
        XAmzTarget: operations.ListTagsXAmzTargetEnumBaldrAPIServiceListTags,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsResponse != nil {
        // handle response
    }
}
```

## ModifyBackupAttributes

Modifies attributes for AWS CloudHSM backup.

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
    res, err := s.SDK.ModifyBackupAttributes(ctx, operations.ModifyBackupAttributesRequest{
        ModifyBackupAttributesRequest: shared.ModifyBackupAttributesRequest{
            BackupID: "iusto",
            NeverExpires: false,
        },
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("harum"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("commodi"),
        XAmzSignature: sdk.String("repudiandae"),
        XAmzSignedHeaders: sdk.String("quae"),
        XAmzTarget: operations.ModifyBackupAttributesXAmzTargetEnumBaldrAPIServiceModifyBackupAttributes,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ModifyBackupAttributesResponse != nil {
        // handle response
    }
}
```

## ModifyCluster

Modifies AWS CloudHSM cluster.

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
    res, err := s.SDK.ModifyCluster(ctx, operations.ModifyClusterRequest{
        ModifyClusterRequest: shared.ModifyClusterRequest{
            BackupRetentionPolicy: shared.BackupRetentionPolicy{
                Type: shared.BackupRetentionTypeEnumDays.ToPointer(),
                Value: sdk.String("ipsum"),
            },
            ClusterID: "quidem",
        },
        XAmzAlgorithm: sdk.String("molestias"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("modi"),
        XAmzSecurityToken: sdk.String("praesentium"),
        XAmzSignature: sdk.String("rem"),
        XAmzSignedHeaders: sdk.String("voluptates"),
        XAmzTarget: operations.ModifyClusterXAmzTargetEnumBaldrAPIServiceModifyCluster,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ModifyClusterResponse != nil {
        // handle response
    }
}
```

## RestoreBackup

Restores a specified AWS CloudHSM backup that is in the <code>PENDING_DELETION</code> state. For mor information on deleting a backup, see <a>DeleteBackup</a>.

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
    res, err := s.SDK.RestoreBackup(ctx, operations.RestoreBackupRequest{
        RestoreBackupRequest: shared.RestoreBackupRequest{
            BackupID: "quasi",
        },
        XAmzAlgorithm: sdk.String("repudiandae"),
        XAmzContentSha256: sdk.String("sint"),
        XAmzCredential: sdk.String("veritatis"),
        XAmzDate: sdk.String("itaque"),
        XAmzSecurityToken: sdk.String("incidunt"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("consequatur"),
        XAmzTarget: operations.RestoreBackupXAmzTargetEnumBaldrAPIServiceRestoreBackup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RestoreBackupResponse != nil {
        // handle response
    }
}
```

## TagResource

Adds or overwrites one or more tags for the specified AWS CloudHSM cluster.

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
            ResourceID: "est",
            TagList: []shared.Tag{
                shared.Tag{
                    Key: "explicabo",
                    Value: "deserunt",
                },
                shared.Tag{
                    Key: "distinctio",
                    Value: "quibusdam",
                },
                shared.Tag{
                    Key: "labore",
                    Value: "modi",
                },
                shared.Tag{
                    Key: "qui",
                    Value: "aliquid",
                },
            },
        },
        XAmzAlgorithm: sdk.String("cupiditate"),
        XAmzContentSha256: sdk.String("quos"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("magni"),
        XAmzSecurityToken: sdk.String("assumenda"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("alias"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumBaldrAPIServiceTagResource,
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

Removes the specified tag or tags from the specified AWS CloudHSM cluster.

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
            ResourceID: "fugit",
            TagKeyList: []string{
                "excepturi",
                "tempora",
                "facilis",
            },
        },
        XAmzAlgorithm: sdk.String("tempore"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("non"),
        XAmzSignature: sdk.String("eligendi"),
        XAmzSignedHeaders: sdk.String("sint"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumBaldrAPIServiceUntagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```
