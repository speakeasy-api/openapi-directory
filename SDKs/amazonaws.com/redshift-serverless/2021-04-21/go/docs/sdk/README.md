# SDK

## Overview

<p>This is an interface reference for Amazon Redshift Serverless. It contains documentation for one of the programming or command line interfaces you can use to manage Amazon Redshift Serverless. </p> <p>Amazon Redshift Serverless automatically provisions data warehouse capacity and intelligently scales the underlying resources based on workload demands. Amazon Redshift Serverless adjusts capacity in seconds to deliver consistently high performance and simplified operations for even the most demanding and volatile workloads. Amazon Redshift Serverless lets you focus on using your data to acquire new insights for your business and customers. </p> <p> To learn more about Amazon Redshift Serverless, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/serverless-whatis.html">What is Amazon Redshift Serverless</a>. </p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/redshift-serverless/>
### Available Operations

* [ConvertRecoveryPointToSnapshot](#convertrecoverypointtosnapshot) - Converts a recovery point to a snapshot. For more information about recovery points and snapshots, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/serverless-snapshots-recovery.html">Working with snapshots and recovery points</a>.
* [CreateEndpointAccess](#createendpointaccess) - Creates an Amazon Redshift Serverless managed VPC endpoint.
* [CreateNamespace](#createnamespace) - Creates a namespace in Amazon Redshift Serverless.
* [CreateSnapshot](#createsnapshot) - Creates a snapshot of all databases in a namespace. For more information about snapshots, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/serverless-snapshots-recovery.html"> Working with snapshots and recovery points</a>.
* [CreateUsageLimit](#createusagelimit) - Creates a usage limit for a specified Amazon Redshift Serverless usage type. The usage limit is identified by the returned usage limit identifier. 
* [CreateWorkgroup](#createworkgroup) - Creates an workgroup in Amazon Redshift Serverless.
* [DeleteEndpointAccess](#deleteendpointaccess) - Deletes an Amazon Redshift Serverless managed VPC endpoint.
* [DeleteNamespace](#deletenamespace) - Deletes a namespace from Amazon Redshift Serverless. Before you delete the namespace, you can create a final snapshot that has all of the data within the namespace.
* [DeleteResourcePolicy](#deleteresourcepolicy) - Deletes the specified resource policy.
* [DeleteSnapshot](#deletesnapshot) - Deletes a snapshot from Amazon Redshift Serverless.
* [DeleteUsageLimit](#deleteusagelimit) - Deletes a usage limit from Amazon Redshift Serverless.
* [DeleteWorkgroup](#deleteworkgroup) - Deletes a workgroup.
* [GetCredentials](#getcredentials) - <p>Returns a database user name and temporary password with temporary authorization to log in to Amazon Redshift Serverless.</p> <p>By default, the temporary credentials expire in 900 seconds. You can optionally specify a duration between 900 seconds (15 minutes) and 3600 seconds (60 minutes).</p> <pre><code> &lt;p&gt;The Identity and Access Management (IAM) user or role that runs GetCredentials must have an IAM policy attached that allows access to all necessary actions and resources.&lt;/p&gt; &lt;p&gt;If the &lt;code&gt;DbName&lt;/code&gt; parameter is specified, the IAM policy must allow access to the resource dbname for the specified database name.&lt;/p&gt; </code></pre>
* [GetEndpointAccess](#getendpointaccess) - Returns information, such as the name, about a VPC endpoint.
* [GetNamespace](#getnamespace) - Returns information about a namespace in Amazon Redshift Serverless.
* [GetRecoveryPoint](#getrecoverypoint) - Returns information about a recovery point.
* [GetResourcePolicy](#getresourcepolicy) - Returns a resource policy.
* [GetSnapshot](#getsnapshot) - Returns information about a specific snapshot.
* [GetTableRestoreStatus](#gettablerestorestatus) - Returns information about a <code>TableRestoreStatus</code> object.
* [GetUsageLimit](#getusagelimit) - Returns information about a usage limit.
* [GetWorkgroup](#getworkgroup) - Returns information about a specific workgroup.
* [ListEndpointAccess](#listendpointaccess) - Returns an array of <code>EndpointAccess</code> objects and relevant information.
* [ListNamespaces](#listnamespaces) - Returns information about a list of specified namespaces.
* [ListRecoveryPoints](#listrecoverypoints) - Returns an array of recovery points.
* [ListSnapshots](#listsnapshots) - Returns a list of snapshots.
* [ListTableRestoreStatus](#listtablerestorestatus) - Returns information about an array of <code>TableRestoreStatus</code> objects.
* [ListTagsForResource](#listtagsforresource) - Lists the tags assigned to a resource.
* [ListUsageLimits](#listusagelimits) - Lists all usage limits within Amazon Redshift Serverless.
* [ListWorkgroups](#listworkgroups) - Returns information about a list of specified workgroups.
* [PutResourcePolicy](#putresourcepolicy) - Creates or updates a resource policy. Currently, you can use policies to share snapshots across Amazon Web Services accounts.
* [RestoreFromRecoveryPoint](#restorefromrecoverypoint) - Restore the data from a recovery point.
* [RestoreFromSnapshot](#restorefromsnapshot) - Restores a namespace from a snapshot.
* [RestoreTableFromSnapshot](#restoretablefromsnapshot) - Restores a table from a snapshot to your Amazon Redshift Serverless instance. You can't use this operation to restore tables with <a href="https://docs.aws.amazon.com/redshift/latest/dg/t_Sorting_data.html#t_Sorting_data-interleaved">interleaved sort keys</a>.
* [TagResource](#tagresource) - Assigns one or more tags to a resource.
* [UntagResource](#untagresource) - Removes a tag or set of tags from a resource.
* [UpdateEndpointAccess](#updateendpointaccess) - Updates an Amazon Redshift Serverless managed endpoint.
* [UpdateNamespace](#updatenamespace) - Updates a namespace with the specified settings. Unless required, you can't update multiple parameters in one request. For example, you must specify both <code>adminUsername</code> and <code>adminUserPassword</code> to update either field, but you can't update both <code>kmsKeyId</code> and <code>logExports</code> in a single request.
* [UpdateSnapshot](#updatesnapshot) - Updates a snapshot.
* [UpdateUsageLimit](#updateusagelimit) - Update a usage limit in Amazon Redshift Serverless. You can't update the usage type or period of a usage limit.
* [UpdateWorkgroup](#updateworkgroup) - Updates a workgroup with the specified configuration settings. You can't update multiple parameters in one request. For example, you can update <code>baseCapacity</code> or <code>port</code> in a single request, but you can't update both in the same request.

## ConvertRecoveryPointToSnapshot

Converts a recovery point to a snapshot. For more information about recovery points and snapshots, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/serverless-snapshots-recovery.html">Working with snapshots and recovery points</a>.

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
    res, err := s.SDK.ConvertRecoveryPointToSnapshot(ctx, operations.ConvertRecoveryPointToSnapshotRequest{
        ConvertRecoveryPointToSnapshotRequest: shared.ConvertRecoveryPointToSnapshotRequest{
            RecoveryPointID: "molestiae",
            RetentionPeriod: sdk.Int64(791725),
            SnapshotName: "placeat",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "iusto",
                    Value: "excepturi",
                },
                shared.Tag{
                    Key: "nisi",
                    Value: "recusandae",
                },
                shared.Tag{
                    Key: "temporibus",
                    Value: "ab",
                },
            },
        },
        XAmzAlgorithm: sdk.String("quis"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("repellendus"),
        XAmzSignedHeaders: sdk.String("sapiente"),
        XAmzTarget: operations.ConvertRecoveryPointToSnapshotXAmzTargetEnumRedshiftServerlessConvertRecoveryPointToSnapshot,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConvertRecoveryPointToSnapshotResponse != nil {
        // handle response
    }
}
```

## CreateEndpointAccess

Creates an Amazon Redshift Serverless managed VPC endpoint.

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
    res, err := s.SDK.CreateEndpointAccess(ctx, operations.CreateEndpointAccessRequest{
        CreateEndpointAccessRequest: shared.CreateEndpointAccessRequest{
            EndpointName: "quo",
            SubnetIds: []string{
                "at",
            },
            VpcSecurityGroupIds: []string{
                "maiores",
                "molestiae",
                "quod",
                "quod",
            },
            WorkgroupName: "esse",
        },
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("porro"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("nam"),
        XAmzSignature: sdk.String("officia"),
        XAmzSignedHeaders: sdk.String("occaecati"),
        XAmzTarget: operations.CreateEndpointAccessXAmzTargetEnumRedshiftServerlessCreateEndpointAccess,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateEndpointAccessResponse != nil {
        // handle response
    }
}
```

## CreateNamespace

Creates a namespace in Amazon Redshift Serverless.

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
    res, err := s.SDK.CreateNamespace(ctx, operations.CreateNamespaceRequest{
        CreateNamespaceRequest: shared.CreateNamespaceRequest{
            AdminUserPassword: sdk.String("fugit"),
            AdminUsername: sdk.String("deleniti"),
            DbName: sdk.String("hic"),
            DefaultIamRoleArn: sdk.String("optio"),
            IamRoles: []string{
                "beatae",
                "commodi",
                "molestiae",
            },
            KmsKeyID: sdk.String("modi"),
            LogExports: []shared.LogExportEnum{
                shared.LogExportEnumConnectionlog,
            },
            NamespaceName: "cum",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "ipsum",
                    Value: "excepturi",
                },
                shared.Tag{
                    Key: "aspernatur",
                    Value: "perferendis",
                },
            },
        },
        XAmzAlgorithm: sdk.String("ad"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("sed"),
        XAmzDate: sdk.String("iste"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("laboriosam"),
        XAmzTarget: operations.CreateNamespaceXAmzTargetEnumRedshiftServerlessCreateNamespace,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNamespaceResponse != nil {
        // handle response
    }
}
```

## CreateSnapshot

Creates a snapshot of all databases in a namespace. For more information about snapshots, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/serverless-snapshots-recovery.html"> Working with snapshots and recovery points</a>.

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
            NamespaceName: "hic",
            RetentionPeriod: sdk.Int64(902599),
            SnapshotName: "fuga",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "corporis",
                    Value: "iste",
                },
                shared.Tag{
                    Key: "iure",
                    Value: "saepe",
                },
            },
        },
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("est"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("laborum"),
        XAmzTarget: operations.CreateSnapshotXAmzTargetEnumRedshiftServerlessCreateSnapshot,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSnapshotResponse != nil {
        // handle response
    }
}
```

## CreateUsageLimit

Creates a usage limit for a specified Amazon Redshift Serverless usage type. The usage limit is identified by the returned usage limit identifier. 

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
    res, err := s.SDK.CreateUsageLimit(ctx, operations.CreateUsageLimitRequest{
        CreateUsageLimitRequest: shared.CreateUsageLimitRequest{
            Amount: 170909,
            BreachAction: shared.UsageLimitBreachActionEnumLog.ToPointer(),
            Period: shared.UsageLimitPeriodEnumWeekly.ToPointer(),
            ResourceArn: "explicabo",
            UsageType: shared.UsageLimitUsageTypeEnumCrossRegionDatasharing,
        },
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("omnis"),
        XAmzCredential: sdk.String("nemo"),
        XAmzDate: sdk.String("minima"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("accusantium"),
        XAmzSignedHeaders: sdk.String("iure"),
        XAmzTarget: operations.CreateUsageLimitXAmzTargetEnumRedshiftServerlessCreateUsageLimit,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateUsageLimitResponse != nil {
        // handle response
    }
}
```

## CreateWorkgroup

Creates an workgroup in Amazon Redshift Serverless.

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
    res, err := s.SDK.CreateWorkgroup(ctx, operations.CreateWorkgroupRequest{
        CreateWorkgroupRequest: shared.CreateWorkgroupRequest{
            BaseCapacity: sdk.Int64(634274),
            ConfigParameters: []shared.ConfigParameter{
                shared.ConfigParameter{
                    ParameterKey: sdk.String("sapiente"),
                    ParameterValue: sdk.String("architecto"),
                },
                shared.ConfigParameter{
                    ParameterKey: sdk.String("mollitia"),
                    ParameterValue: sdk.String("dolorem"),
                },
                shared.ConfigParameter{
                    ParameterKey: sdk.String("culpa"),
                    ParameterValue: sdk.String("consequuntur"),
                },
                shared.ConfigParameter{
                    ParameterKey: sdk.String("repellat"),
                    ParameterValue: sdk.String("mollitia"),
                },
            },
            EnhancedVpcRouting: sdk.Bool(false),
            NamespaceName: "occaecati",
            Port: sdk.Int64(253291),
            PubliclyAccessible: sdk.Bool(false),
            SecurityGroupIds: []string{
                "quam",
                "molestiae",
            },
            SubnetIds: []string{
                "error",
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "quis",
                    Value: "vitae",
                },
            },
            WorkgroupName: "laborum",
        },
        XAmzAlgorithm: sdk.String("animi"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("odit"),
        XAmzDate: sdk.String("quo"),
        XAmzSecurityToken: sdk.String("sequi"),
        XAmzSignature: sdk.String("tenetur"),
        XAmzSignedHeaders: sdk.String("ipsam"),
        XAmzTarget: operations.CreateWorkgroupXAmzTargetEnumRedshiftServerlessCreateWorkgroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateWorkgroupResponse != nil {
        // handle response
    }
}
```

## DeleteEndpointAccess

Deletes an Amazon Redshift Serverless managed VPC endpoint.

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
    res, err := s.SDK.DeleteEndpointAccess(ctx, operations.DeleteEndpointAccessRequest{
        DeleteEndpointAccessRequest: shared.DeleteEndpointAccessRequest{
            EndpointName: "id",
        },
        XAmzAlgorithm: sdk.String("possimus"),
        XAmzContentSha256: sdk.String("aut"),
        XAmzCredential: sdk.String("quasi"),
        XAmzDate: sdk.String("error"),
        XAmzSecurityToken: sdk.String("temporibus"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("quasi"),
        XAmzTarget: operations.DeleteEndpointAccessXAmzTargetEnumRedshiftServerlessDeleteEndpointAccess,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteEndpointAccessResponse != nil {
        // handle response
    }
}
```

## DeleteNamespace

Deletes a namespace from Amazon Redshift Serverless. Before you delete the namespace, you can create a final snapshot that has all of the data within the namespace.

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
    res, err := s.SDK.DeleteNamespace(ctx, operations.DeleteNamespaceRequest{
        DeleteNamespaceRequest: shared.DeleteNamespaceRequest{
            FinalSnapshotName: sdk.String("reiciendis"),
            FinalSnapshotRetentionPeriod: sdk.Int64(976460),
            NamespaceName: "vero",
        },
        XAmzAlgorithm: sdk.String("nihil"),
        XAmzContentSha256: sdk.String("praesentium"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("cum"),
        XAmzTarget: operations.DeleteNamespaceXAmzTargetEnumRedshiftServerlessDeleteNamespace,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteNamespaceResponse != nil {
        // handle response
    }
}
```

## DeleteResourcePolicy

Deletes the specified resource policy.

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
    res, err := s.SDK.DeleteResourcePolicy(ctx, operations.DeleteResourcePolicyRequest{
        DeleteResourcePolicyRequest: shared.DeleteResourcePolicyRequest{
            ResourceArn: "perferendis",
        },
        XAmzAlgorithm: sdk.String("doloremque"),
        XAmzContentSha256: sdk.String("reprehenderit"),
        XAmzCredential: sdk.String("ut"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("dolore"),
        XAmzTarget: operations.DeleteResourcePolicyXAmzTargetEnumRedshiftServerlessDeleteResourcePolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteResourcePolicyResponse != nil {
        // handle response
    }
}
```

## DeleteSnapshot

Deletes a snapshot from Amazon Redshift Serverless.

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
            SnapshotName: "iusto",
        },
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("harum"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("commodi"),
        XAmzSignature: sdk.String("repudiandae"),
        XAmzSignedHeaders: sdk.String("quae"),
        XAmzTarget: operations.DeleteSnapshotXAmzTargetEnumRedshiftServerlessDeleteSnapshot,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteSnapshotResponse != nil {
        // handle response
    }
}
```

## DeleteUsageLimit

Deletes a usage limit from Amazon Redshift Serverless.

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
    res, err := s.SDK.DeleteUsageLimit(ctx, operations.DeleteUsageLimitRequest{
        DeleteUsageLimitRequest: shared.DeleteUsageLimitRequest{
            UsageLimitID: "ipsum",
        },
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("molestias"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("modi"),
        XAmzSignature: sdk.String("praesentium"),
        XAmzSignedHeaders: sdk.String("rem"),
        XAmzTarget: operations.DeleteUsageLimitXAmzTargetEnumRedshiftServerlessDeleteUsageLimit,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteUsageLimitResponse != nil {
        // handle response
    }
}
```

## DeleteWorkgroup

Deletes a workgroup.

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
    res, err := s.SDK.DeleteWorkgroup(ctx, operations.DeleteWorkgroupRequest{
        DeleteWorkgroupRequest: shared.DeleteWorkgroupRequest{
            WorkgroupName: "voluptates",
        },
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("repudiandae"),
        XAmzCredential: sdk.String("sint"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("itaque"),
        XAmzSignature: sdk.String("incidunt"),
        XAmzSignedHeaders: sdk.String("enim"),
        XAmzTarget: operations.DeleteWorkgroupXAmzTargetEnumRedshiftServerlessDeleteWorkgroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteWorkgroupResponse != nil {
        // handle response
    }
}
```

## GetCredentials

<p>Returns a database user name and temporary password with temporary authorization to log in to Amazon Redshift Serverless.</p> <p>By default, the temporary credentials expire in 900 seconds. You can optionally specify a duration between 900 seconds (15 minutes) and 3600 seconds (60 minutes).</p> <pre><code> &lt;p&gt;The Identity and Access Management (IAM) user or role that runs GetCredentials must have an IAM policy attached that allows access to all necessary actions and resources.&lt;/p&gt; &lt;p&gt;If the &lt;code&gt;DbName&lt;/code&gt; parameter is specified, the IAM policy must allow access to the resource dbname for the specified database name.&lt;/p&gt; </code></pre>

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
    res, err := s.SDK.GetCredentials(ctx, operations.GetCredentialsRequest{
        GetCredentialsRequest: shared.GetCredentialsRequest{
            DbName: sdk.String("consequatur"),
            DurationSeconds: sdk.Int64(667411),
            WorkgroupName: "quibusdam",
        },
        XAmzAlgorithm: sdk.String("explicabo"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("modi"),
        XAmzSignedHeaders: sdk.String("qui"),
        XAmzTarget: operations.GetCredentialsXAmzTargetEnumRedshiftServerlessGetCredentials,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCredentialsResponse != nil {
        // handle response
    }
}
```

## GetEndpointAccess

Returns information, such as the name, about a VPC endpoint.

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
    res, err := s.SDK.GetEndpointAccess(ctx, operations.GetEndpointAccessRequest{
        GetEndpointAccessRequest: shared.GetEndpointAccessRequest{
            EndpointName: "aliquid",
        },
        XAmzAlgorithm: sdk.String("cupiditate"),
        XAmzContentSha256: sdk.String("quos"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("magni"),
        XAmzSecurityToken: sdk.String("assumenda"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("alias"),
        XAmzTarget: operations.GetEndpointAccessXAmzTargetEnumRedshiftServerlessGetEndpointAccess,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEndpointAccessResponse != nil {
        // handle response
    }
}
```

## GetNamespace

Returns information about a namespace in Amazon Redshift Serverless.

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
    res, err := s.SDK.GetNamespace(ctx, operations.GetNamespaceRequest{
        GetNamespaceRequest: shared.GetNamespaceRequest{
            NamespaceName: "fugit",
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("tempore"),
        XAmzSignature: sdk.String("labore"),
        XAmzSignedHeaders: sdk.String("delectus"),
        XAmzTarget: operations.GetNamespaceXAmzTargetEnumRedshiftServerlessGetNamespace,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNamespaceResponse != nil {
        // handle response
    }
}
```

## GetRecoveryPoint

Returns information about a recovery point.

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
    res, err := s.SDK.GetRecoveryPoint(ctx, operations.GetRecoveryPointRequest{
        GetRecoveryPointRequest: shared.GetRecoveryPointRequest{
            RecoveryPointID: "eum",
        },
        XAmzAlgorithm: sdk.String("non"),
        XAmzContentSha256: sdk.String("eligendi"),
        XAmzCredential: sdk.String("sint"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("necessitatibus"),
        XAmzSignedHeaders: sdk.String("sint"),
        XAmzTarget: operations.GetRecoveryPointXAmzTargetEnumRedshiftServerlessGetRecoveryPoint,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRecoveryPointResponse != nil {
        // handle response
    }
}
```

## GetResourcePolicy

Returns a resource policy.

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
    res, err := s.SDK.GetResourcePolicy(ctx, operations.GetResourcePolicyRequest{
        GetResourcePolicyRequest: shared.GetResourcePolicyRequest{
            ResourceArn: "officia",
        },
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("a"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("illum"),
        XAmzTarget: operations.GetResourcePolicyXAmzTargetEnumRedshiftServerlessGetResourcePolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetResourcePolicyResponse != nil {
        // handle response
    }
}
```

## GetSnapshot

Returns information about a specific snapshot.

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
    res, err := s.SDK.GetSnapshot(ctx, operations.GetSnapshotRequest{
        GetSnapshotRequest: shared.GetSnapshotRequest{
            OwnerAccount: sdk.String("maiores"),
            SnapshotArn: sdk.String("rerum"),
            SnapshotName: sdk.String("dicta"),
        },
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("cumque"),
        XAmzCredential: sdk.String("facere"),
        XAmzDate: sdk.String("ea"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        XAmzTarget: operations.GetSnapshotXAmzTargetEnumRedshiftServerlessGetSnapshot,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSnapshotResponse != nil {
        // handle response
    }
}
```

## GetTableRestoreStatus

Returns information about a <code>TableRestoreStatus</code> object.

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
    res, err := s.SDK.GetTableRestoreStatus(ctx, operations.GetTableRestoreStatusRequest{
        GetTableRestoreStatusRequest: shared.GetTableRestoreStatusRequest{
            TableRestoreRequestID: "non",
        },
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("delectus"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("nam"),
        XAmzTarget: operations.GetTableRestoreStatusXAmzTargetEnumRedshiftServerlessGetTableRestoreStatus,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTableRestoreStatusResponse != nil {
        // handle response
    }
}
```

## GetUsageLimit

Returns information about a usage limit.

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
    res, err := s.SDK.GetUsageLimit(ctx, operations.GetUsageLimitRequest{
        GetUsageLimitRequest: shared.GetUsageLimitRequest{
            UsageLimitID: "id",
        },
        XAmzAlgorithm: sdk.String("blanditiis"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("deserunt"),
        XAmzSignature: sdk.String("nisi"),
        XAmzSignedHeaders: sdk.String("vel"),
        XAmzTarget: operations.GetUsageLimitXAmzTargetEnumRedshiftServerlessGetUsageLimit,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUsageLimitResponse != nil {
        // handle response
    }
}
```

## GetWorkgroup

Returns information about a specific workgroup.

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
    res, err := s.SDK.GetWorkgroup(ctx, operations.GetWorkgroupRequest{
        GetWorkgroupRequest: shared.GetWorkgroupRequest{
            WorkgroupName: "natus",
        },
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("nihil"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("id"),
        XAmzTarget: operations.GetWorkgroupXAmzTargetEnumRedshiftServerlessGetWorkgroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetWorkgroupResponse != nil {
        // handle response
    }
}
```

## ListEndpointAccess

Returns an array of <code>EndpointAccess</code> objects and relevant information.

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
    res, err := s.SDK.ListEndpointAccess(ctx, operations.ListEndpointAccessRequest{
        ListEndpointAccessRequest: shared.ListEndpointAccessRequest{
            MaxResults: sdk.Int64(287991),
            NextToken: sdk.String("labore"),
            VpcID: sdk.String("suscipit"),
            WorkgroupName: sdk.String("natus"),
        },
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("eum"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("et"),
        XAmzTarget: operations.ListEndpointAccessXAmzTargetEnumRedshiftServerlessListEndpointAccess,
        MaxResults: sdk.String("excepturi"),
        NextToken: sdk.String("ullam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEndpointAccessResponse != nil {
        // handle response
    }
}
```

## ListNamespaces

Returns information about a list of specified namespaces.

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
    res, err := s.SDK.ListNamespaces(ctx, operations.ListNamespacesRequest{
        ListNamespacesRequest: shared.ListNamespacesRequest{
            MaxResults: sdk.Int64(590873),
            NextToken: sdk.String("quos"),
        },
        XAmzAlgorithm: sdk.String("sint"),
        XAmzContentSha256: sdk.String("accusantium"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("ad"),
        XAmzSignedHeaders: sdk.String("eum"),
        XAmzTarget: operations.ListNamespacesXAmzTargetEnumRedshiftServerlessListNamespaces,
        MaxResults: sdk.String("dolor"),
        NextToken: sdk.String("necessitatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListNamespacesResponse != nil {
        // handle response
    }
}
```

## ListRecoveryPoints

Returns an array of recovery points.

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
    res, err := s.SDK.ListRecoveryPoints(ctx, operations.ListRecoveryPointsRequest{
        ListRecoveryPointsRequest: shared.ListRecoveryPointsRequest{
            EndTime: types.MustTimeFromString("2022-08-19T20:09:28.183Z"),
            MaxResults: sdk.Int64(97260),
            NamespaceArn: sdk.String("iure"),
            NamespaceName: sdk.String("doloribus"),
            NextToken: sdk.String("debitis"),
            StartTime: types.MustTimeFromString("2022-03-12T17:44:26.081Z"),
        },
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("repudiandae"),
        XAmzSignedHeaders: sdk.String("ullam"),
        XAmzTarget: operations.ListRecoveryPointsXAmzTargetEnumRedshiftServerlessListRecoveryPoints,
        MaxResults: sdk.String("expedita"),
        NextToken: sdk.String("nihil"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRecoveryPointsResponse != nil {
        // handle response
    }
}
```

## ListSnapshots

Returns a list of snapshots.

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
    res, err := s.SDK.ListSnapshots(ctx, operations.ListSnapshotsRequest{
        ListSnapshotsRequest: shared.ListSnapshotsRequest{
            EndTime: types.MustTimeFromString("2020-06-23T22:50:14.437Z"),
            MaxResults: sdk.Int64(149448),
            NamespaceArn: sdk.String("saepe"),
            NamespaceName: sdk.String("pariatur"),
            NextToken: sdk.String("accusantium"),
            OwnerAccount: sdk.String("consequuntur"),
            StartTime: types.MustTimeFromString("2021-10-08T15:23:46.576Z"),
        },
        XAmzAlgorithm: sdk.String("magni"),
        XAmzContentSha256: sdk.String("sunt"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("pariatur"),
        XAmzSignature: sdk.String("maxime"),
        XAmzSignedHeaders: sdk.String("ea"),
        XAmzTarget: operations.ListSnapshotsXAmzTargetEnumRedshiftServerlessListSnapshots,
        MaxResults: sdk.String("excepturi"),
        NextToken: sdk.String("odit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSnapshotsResponse != nil {
        // handle response
    }
}
```

## ListTableRestoreStatus

Returns information about an array of <code>TableRestoreStatus</code> objects.

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
    res, err := s.SDK.ListTableRestoreStatus(ctx, operations.ListTableRestoreStatusRequest{
        ListTableRestoreStatusRequest: shared.ListTableRestoreStatusRequest{
            MaxResults: sdk.Int64(407183),
            NamespaceName: sdk.String("accusantium"),
            NextToken: sdk.String("ab"),
            WorkgroupName: sdk.String("maiores"),
        },
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("autem"),
        XAmzSecurityToken: sdk.String("nam"),
        XAmzSignature: sdk.String("eaque"),
        XAmzSignedHeaders: sdk.String("pariatur"),
        XAmzTarget: operations.ListTableRestoreStatusXAmzTargetEnumRedshiftServerlessListTableRestoreStatus,
        MaxResults: sdk.String("nemo"),
        NextToken: sdk.String("voluptatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTableRestoreStatusResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Lists the tags assigned to a resource.

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
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        ListTagsForResourceRequest: shared.ListTagsForResourceRequest{
            ResourceArn: "perferendis",
        },
        XAmzAlgorithm: sdk.String("fugiat"),
        XAmzContentSha256: sdk.String("amet"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("cumque"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("libero"),
        XAmzTarget: operations.ListTagsForResourceXAmzTargetEnumRedshiftServerlessListTagsForResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## ListUsageLimits

Lists all usage limits within Amazon Redshift Serverless.

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
    res, err := s.SDK.ListUsageLimits(ctx, operations.ListUsageLimitsRequest{
        ListUsageLimitsRequest: shared.ListUsageLimitsRequest{
            MaxResults: sdk.Int64(749999),
            NextToken: sdk.String("dolores"),
            ResourceArn: sdk.String("quis"),
            UsageType: shared.UsageLimitUsageTypeEnumCrossRegionDatasharing.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("dignissimos"),
        XAmzContentSha256: sdk.String("eaque"),
        XAmzCredential: sdk.String("quis"),
        XAmzDate: sdk.String("nesciunt"),
        XAmzSecurityToken: sdk.String("eos"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("dolores"),
        XAmzTarget: operations.ListUsageLimitsXAmzTargetEnumRedshiftServerlessListUsageLimits,
        MaxResults: sdk.String("minus"),
        NextToken: sdk.String("quam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUsageLimitsResponse != nil {
        // handle response
    }
}
```

## ListWorkgroups

Returns information about a list of specified workgroups.

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
    res, err := s.SDK.ListWorkgroups(ctx, operations.ListWorkgroupsRequest{
        ListWorkgroupsRequest: shared.ListWorkgroupsRequest{
            MaxResults: sdk.Int64(223924),
            NextToken: sdk.String("vero"),
        },
        XAmzAlgorithm: sdk.String("nostrum"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("recusandae"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("perspiciatis"),
        XAmzSignedHeaders: sdk.String("voluptatem"),
        XAmzTarget: operations.ListWorkgroupsXAmzTargetEnumRedshiftServerlessListWorkgroups,
        MaxResults: sdk.String("porro"),
        NextToken: sdk.String("consequuntur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWorkgroupsResponse != nil {
        // handle response
    }
}
```

## PutResourcePolicy

Creates or updates a resource policy. Currently, you can use policies to share snapshots across Amazon Web Services accounts.

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
    res, err := s.SDK.PutResourcePolicy(ctx, operations.PutResourcePolicyRequest{
        PutResourcePolicyRequest: shared.PutResourcePolicyRequest{
            Policy: "blanditiis",
            ResourceArn: "error",
        },
        XAmzAlgorithm: sdk.String("eaque"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("rerum"),
        XAmzDate: sdk.String("adipisci"),
        XAmzSecurityToken: sdk.String("asperiores"),
        XAmzSignature: sdk.String("earum"),
        XAmzSignedHeaders: sdk.String("modi"),
        XAmzTarget: operations.PutResourcePolicyXAmzTargetEnumRedshiftServerlessPutResourcePolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutResourcePolicyResponse != nil {
        // handle response
    }
}
```

## RestoreFromRecoveryPoint

Restore the data from a recovery point.

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
    res, err := s.SDK.RestoreFromRecoveryPoint(ctx, operations.RestoreFromRecoveryPointRequest{
        RestoreFromRecoveryPointRequest: shared.RestoreFromRecoveryPointRequest{
            NamespaceName: "iste",
            RecoveryPointID: "dolorum",
            WorkgroupName: "deleniti",
        },
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("libero"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("quaerat"),
        XAmzSignedHeaders: sdk.String("quos"),
        XAmzTarget: operations.RestoreFromRecoveryPointXAmzTargetEnumRedshiftServerlessRestoreFromRecoveryPoint,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RestoreFromRecoveryPointResponse != nil {
        // handle response
    }
}
```

## RestoreFromSnapshot

Restores a namespace from a snapshot.

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
    res, err := s.SDK.RestoreFromSnapshot(ctx, operations.RestoreFromSnapshotRequest{
        RestoreFromSnapshotRequest: shared.RestoreFromSnapshotRequest{
            NamespaceName: "aliquid",
            OwnerAccount: sdk.String("dolorem"),
            SnapshotArn: sdk.String("dolorem"),
            SnapshotName: sdk.String("dolor"),
            WorkgroupName: "qui",
        },
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("cum"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("dignissimos"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
        XAmzTarget: operations.RestoreFromSnapshotXAmzTargetEnumRedshiftServerlessRestoreFromSnapshot,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RestoreFromSnapshotResponse != nil {
        // handle response
    }
}
```

## RestoreTableFromSnapshot

Restores a table from a snapshot to your Amazon Redshift Serverless instance. You can't use this operation to restore tables with <a href="https://docs.aws.amazon.com/redshift/latest/dg/t_Sorting_data.html#t_Sorting_data-interleaved">interleaved sort keys</a>.

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
    res, err := s.SDK.RestoreTableFromSnapshot(ctx, operations.RestoreTableFromSnapshotRequest{
        RestoreTableFromSnapshotRequest: shared.RestoreTableFromSnapshotRequest{
            ActivateCaseSensitiveIdentifier: sdk.Bool(false),
            NamespaceName: "amet",
            NewTableName: "dolorum",
            SnapshotName: "numquam",
            SourceDatabaseName: "veritatis",
            SourceSchemaName: sdk.String("ipsa"),
            SourceTableName: "ipsa",
            TargetDatabaseName: sdk.String("iure"),
            TargetSchemaName: sdk.String("odio"),
            WorkgroupName: "quaerat",
        },
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("eos"),
        XAmzSignedHeaders: sdk.String("atque"),
        XAmzTarget: operations.RestoreTableFromSnapshotXAmzTargetEnumRedshiftServerlessRestoreTableFromSnapshot,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RestoreTableFromSnapshotResponse != nil {
        // handle response
    }
}
```

## TagResource

Assigns one or more tags to a resource.

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
            ResourceArn: "sit",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "ab",
                    Value: "soluta",
                },
                shared.Tag{
                    Key: "dolorum",
                    Value: "iusto",
                },
                shared.Tag{
                    Key: "voluptate",
                    Value: "dolorum",
                },
                shared.Tag{
                    Key: "deleniti",
                    Value: "omnis",
                },
            },
        },
        XAmzAlgorithm: sdk.String("necessitatibus"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("asperiores"),
        XAmzDate: sdk.String("nihil"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("id"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumRedshiftServerlessTagResource,
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

Removes a tag or set of tags from a resource.

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
            ResourceArn: "saepe",
            TagKeys: []string{
                "aspernatur",
                "perferendis",
            },
        },
        XAmzAlgorithm: sdk.String("amet"),
        XAmzContentSha256: sdk.String("optio"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("ad"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("deserunt"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumRedshiftServerlessUntagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateEndpointAccess

Updates an Amazon Redshift Serverless managed endpoint.

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
    res, err := s.SDK.UpdateEndpointAccess(ctx, operations.UpdateEndpointAccessRequest{
        UpdateEndpointAccessRequest: shared.UpdateEndpointAccessRequest{
            EndpointName: "provident",
            VpcSecurityGroupIds: []string{
                "repellendus",
                "totam",
            },
        },
        XAmzAlgorithm: sdk.String("similique"),
        XAmzContentSha256: sdk.String("alias"),
        XAmzCredential: sdk.String("at"),
        XAmzDate: sdk.String("quaerat"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("quod"),
        XAmzTarget: operations.UpdateEndpointAccessXAmzTargetEnumRedshiftServerlessUpdateEndpointAccess,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateEndpointAccessResponse != nil {
        // handle response
    }
}
```

## UpdateNamespace

Updates a namespace with the specified settings. Unless required, you can't update multiple parameters in one request. For example, you must specify both <code>adminUsername</code> and <code>adminUserPassword</code> to update either field, but you can't update both <code>kmsKeyId</code> and <code>logExports</code> in a single request.

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
    res, err := s.SDK.UpdateNamespace(ctx, operations.UpdateNamespaceRequest{
        UpdateNamespaceRequest: shared.UpdateNamespaceRequest{
            AdminUserPassword: sdk.String("officiis"),
            AdminUsername: sdk.String("qui"),
            DefaultIamRoleArn: sdk.String("dolorum"),
            IamRoles: []string{
                "esse",
                "harum",
                "iusto",
                "ipsum",
            },
            KmsKeyID: sdk.String("quisquam"),
            LogExports: []shared.LogExportEnum{
                shared.LogExportEnumUseractivitylog,
                shared.LogExportEnumConnectionlog,
                shared.LogExportEnumConnectionlog,
                shared.LogExportEnumUseractivitylog,
            },
            NamespaceName: "enim",
        },
        XAmzAlgorithm: sdk.String("dolorem"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("nihil"),
        XAmzSecurityToken: sdk.String("sit"),
        XAmzSignature: sdk.String("expedita"),
        XAmzSignedHeaders: sdk.String("neque"),
        XAmzTarget: operations.UpdateNamespaceXAmzTargetEnumRedshiftServerlessUpdateNamespace,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNamespaceResponse != nil {
        // handle response
    }
}
```

## UpdateSnapshot

Updates a snapshot.

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
    res, err := s.SDK.UpdateSnapshot(ctx, operations.UpdateSnapshotRequest{
        UpdateSnapshotRequest: shared.UpdateSnapshotRequest{
            RetentionPeriod: sdk.Int64(153694),
            SnapshotName: "vel",
        },
        XAmzAlgorithm: sdk.String("libero"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("quam"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("incidunt"),
        XAmzSignedHeaders: sdk.String("qui"),
        XAmzTarget: operations.UpdateSnapshotXAmzTargetEnumRedshiftServerlessUpdateSnapshot,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateSnapshotResponse != nil {
        // handle response
    }
}
```

## UpdateUsageLimit

Update a usage limit in Amazon Redshift Serverless. You can't update the usage type or period of a usage limit.

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
    res, err := s.SDK.UpdateUsageLimit(ctx, operations.UpdateUsageLimitRequest{
        UpdateUsageLimitRequest: shared.UpdateUsageLimitRequest{
            Amount: sdk.Int64(586784),
            BreachAction: shared.UsageLimitBreachActionEnumDeactivate.ToPointer(),
            UsageLimitID: "pariatur",
        },
        XAmzAlgorithm: sdk.String("soluta"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("laborum"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("incidunt"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("dolores"),
        XAmzTarget: operations.UpdateUsageLimitXAmzTargetEnumRedshiftServerlessUpdateUsageLimit,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateUsageLimitResponse != nil {
        // handle response
    }
}
```

## UpdateWorkgroup

Updates a workgroup with the specified configuration settings. You can't update multiple parameters in one request. For example, you can update <code>baseCapacity</code> or <code>port</code> in a single request, but you can't update both in the same request.

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
    res, err := s.SDK.UpdateWorkgroup(ctx, operations.UpdateWorkgroupRequest{
        UpdateWorkgroupRequest: shared.UpdateWorkgroupRequest{
            BaseCapacity: sdk.Int64(716860),
            ConfigParameters: []shared.ConfigParameter{
                shared.ConfigParameter{
                    ParameterKey: sdk.String("aliquid"),
                    ParameterValue: sdk.String("quam"),
                },
                shared.ConfigParameter{
                    ParameterKey: sdk.String("molestias"),
                    ParameterValue: sdk.String("temporibus"),
                },
                shared.ConfigParameter{
                    ParameterKey: sdk.String("qui"),
                    ParameterValue: sdk.String("neque"),
                },
            },
            EnhancedVpcRouting: sdk.Bool(false),
            Port: sdk.Int64(144847),
            PubliclyAccessible: sdk.Bool(false),
            SecurityGroupIds: []string{
                "odio",
            },
            SubnetIds: []string{
                "ullam",
            },
            WorkgroupName: "nam",
        },
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("voluptatem"),
        XAmzCredential: sdk.String("cumque"),
        XAmzDate: sdk.String("soluta"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("et"),
        XAmzSignedHeaders: sdk.String("saepe"),
        XAmzTarget: operations.UpdateWorkgroupXAmzTargetEnumRedshiftServerlessUpdateWorkgroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateWorkgroupResponse != nil {
        // handle response
    }
}
```
