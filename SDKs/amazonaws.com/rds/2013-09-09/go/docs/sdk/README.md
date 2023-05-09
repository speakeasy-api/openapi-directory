# SDK

## Overview

Amazon Web Services documentation
<https://docs.aws.amazon.com/rds/>
### Available Operations

* [GETAddSourceIdentifierToSubscription](#getaddsourceidentifiertosubscription)
* [GETAuthorizeDBSecurityGroupIngress](#getauthorizedbsecuritygroupingress)
* [GETDeleteDBInstance](#getdeletedbinstance)
* [GETDeleteDBParameterGroup](#getdeletedbparametergroup)
* [GETDeleteDBSecurityGroup](#getdeletedbsecuritygroup)
* [GETDeleteDBSnapshot](#getdeletedbsnapshot)
* [GETDeleteDBSubnetGroup](#getdeletedbsubnetgroup)
* [GETDeleteEventSubscription](#getdeleteeventsubscription)
* [GETDeleteOptionGroup](#getdeleteoptiongroup)
* [GETDownloadDBLogFilePortion](#getdownloaddblogfileportion)
* [GETModifyDBInstance](#getmodifydbinstance)
* [GETModifyDBSubnetGroup](#getmodifydbsubnetgroup)
* [GETModifyEventSubscription](#getmodifyeventsubscription)
* [GETPromoteReadReplica](#getpromotereadreplica)
* [GETRebootDBInstance](#getrebootdbinstance)
* [GETRemoveSourceIdentifierFromSubscription](#getremovesourceidentifierfromsubscription)
* [GETRemoveTagsFromResource](#getremovetagsfromresource)
* [GETRevokeDBSecurityGroupIngress](#getrevokedbsecuritygroupingress)
* [POSTAddSourceIdentifierToSubscription](#postaddsourceidentifiertosubscription)
* [POSTAddTagsToResource](#postaddtagstoresource)
* [POSTAuthorizeDBSecurityGroupIngress](#postauthorizedbsecuritygroupingress)
* [POSTCopyDBSnapshot](#postcopydbsnapshot)
* [POSTCreateDBInstance](#postcreatedbinstance)
* [POSTCreateDBInstanceReadReplica](#postcreatedbinstancereadreplica)
* [POSTCreateDBParameterGroup](#postcreatedbparametergroup)
* [POSTCreateDBSecurityGroup](#postcreatedbsecuritygroup)
* [POSTCreateDBSnapshot](#postcreatedbsnapshot)
* [POSTCreateDBSubnetGroup](#postcreatedbsubnetgroup)
* [POSTCreateEventSubscription](#postcreateeventsubscription)
* [POSTCreateOptionGroup](#postcreateoptiongroup)
* [POSTDeleteDBInstance](#postdeletedbinstance)
* [POSTDeleteDBParameterGroup](#postdeletedbparametergroup)
* [POSTDeleteDBSecurityGroup](#postdeletedbsecuritygroup)
* [POSTDeleteDBSnapshot](#postdeletedbsnapshot)
* [POSTDeleteDBSubnetGroup](#postdeletedbsubnetgroup)
* [POSTDeleteEventSubscription](#postdeleteeventsubscription)
* [POSTDeleteOptionGroup](#postdeleteoptiongroup)
* [POSTDescribeDBEngineVersions](#postdescribedbengineversions)
* [POSTDescribeDBInstances](#postdescribedbinstances)
* [POSTDescribeDBLogFiles](#postdescribedblogfiles)
* [POSTDescribeDBParameterGroups](#postdescribedbparametergroups)
* [POSTDescribeDBParameters](#postdescribedbparameters)
* [POSTDescribeDBSecurityGroups](#postdescribedbsecuritygroups)
* [POSTDescribeDBSnapshots](#postdescribedbsnapshots)
* [POSTDescribeDBSubnetGroups](#postdescribedbsubnetgroups)
* [POSTDescribeEngineDefaultParameters](#postdescribeenginedefaultparameters)
* [POSTDescribeEventCategories](#postdescribeeventcategories)
* [POSTDescribeEventSubscriptions](#postdescribeeventsubscriptions)
* [POSTDescribeEvents](#postdescribeevents)
* [POSTDescribeOptionGroupOptions](#postdescribeoptiongroupoptions)
* [POSTDescribeOptionGroups](#postdescribeoptiongroups)
* [POSTDescribeOrderableDBInstanceOptions](#postdescribeorderabledbinstanceoptions)
* [POSTDescribeReservedDBInstances](#postdescribereserveddbinstances)
* [POSTDescribeReservedDBInstancesOfferings](#postdescribereserveddbinstancesofferings)
* [POSTDownloadDBLogFilePortion](#postdownloaddblogfileportion)
* [POSTListTagsForResource](#postlisttagsforresource)
* [POSTModifyDBInstance](#postmodifydbinstance)
* [POSTModifyDBParameterGroup](#postmodifydbparametergroup)
* [POSTModifyDBSubnetGroup](#postmodifydbsubnetgroup)
* [POSTModifyEventSubscription](#postmodifyeventsubscription)
* [POSTModifyOptionGroup](#postmodifyoptiongroup)
* [POSTPromoteReadReplica](#postpromotereadreplica)
* [POSTPurchaseReservedDBInstancesOffering](#postpurchasereserveddbinstancesoffering)
* [POSTRebootDBInstance](#postrebootdbinstance)
* [POSTRemoveSourceIdentifierFromSubscription](#postremovesourceidentifierfromsubscription)
* [POSTRemoveTagsFromResource](#postremovetagsfromresource)
* [POSTResetDBParameterGroup](#postresetdbparametergroup)
* [POSTRestoreDBInstanceFromDBSnapshot](#postrestoredbinstancefromdbsnapshot)
* [POSTRestoreDBInstanceToPointInTime](#postrestoredbinstancetopointintime)
* [POSTRevokeDBSecurityGroupIngress](#postrevokedbsecuritygroupingress)

## GETAddSourceIdentifierToSubscription

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
    res, err := s.SDK.GETAddSourceIdentifierToSubscription(ctx, operations.GETAddSourceIdentifierToSubscriptionRequest{
        Action: operations.GETAddSourceIdentifierToSubscriptionActionEnumAddSourceIdentifierToSubscription,
        SourceIdentifier: "error",
        SubscriptionName: "deserunt",
        Version: operations.GETAddSourceIdentifierToSubscriptionVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("tempora"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETAuthorizeDBSecurityGroupIngress

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
    res, err := s.SDK.GETAuthorizeDBSecurityGroupIngress(ctx, operations.GETAuthorizeDBSecurityGroupIngressRequest{
        Action: operations.GETAuthorizeDBSecurityGroupIngressActionEnumAuthorizeDbSecurityGroupIngress,
        Cidrip: sdk.String("suscipit"),
        DBSecurityGroupName: "molestiae",
        Ec2SecurityGroupID: sdk.String("minus"),
        Ec2SecurityGroupName: sdk.String("placeat"),
        Ec2SecurityGroupOwnerID: sdk.String("voluptatum"),
        Version: operations.GETAuthorizeDBSecurityGroupIngressVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("iusto"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("nisi"),
        XAmzDate: sdk.String("recusandae"),
        XAmzSecurityToken: sdk.String("temporibus"),
        XAmzSignature: sdk.String("ab"),
        XAmzSignedHeaders: sdk.String("quis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDeleteDBInstance

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
    res, err := s.SDK.GETDeleteDBInstance(ctx, operations.GETDeleteDBInstanceRequest{
        Action: operations.GETDeleteDBInstanceActionEnumDeleteDbInstance,
        DBInstanceIdentifier: "veritatis",
        FinalDBSnapshotIdentifier: sdk.String("deserunt"),
        SkipFinalSnapshot: sdk.Bool(false),
        Version: operations.GETDeleteDBInstanceVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("repellendus"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("odit"),
        XAmzSignedHeaders: sdk.String("at"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDeleteDBParameterGroup

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
    res, err := s.SDK.GETDeleteDBParameterGroup(ctx, operations.GETDeleteDBParameterGroupRequest{
        Action: operations.GETDeleteDBParameterGroupActionEnumDeleteDbParameterGroup,
        DBParameterGroupName: "at",
        Version: operations.GETDeleteDBParameterGroupVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("quod"),
        XAmzDate: sdk.String("quod"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("porro"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETDeleteDBSecurityGroup

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
    res, err := s.SDK.GETDeleteDBSecurityGroup(ctx, operations.GETDeleteDBSecurityGroupRequest{
        Action: operations.GETDeleteDBSecurityGroupActionEnumDeleteDbSecurityGroup,
        DBSecurityGroupName: "dolorum",
        Version: operations.GETDeleteDBSecurityGroupVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("nam"),
        XAmzCredential: sdk.String("officia"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("fugit"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("hic"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETDeleteDBSnapshot

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
    res, err := s.SDK.GETDeleteDBSnapshot(ctx, operations.GETDeleteDBSnapshotRequest{
        Action: operations.GETDeleteDBSnapshotActionEnumDeleteDbSnapshot,
        DBSnapshotIdentifier: "optio",
        Version: operations.GETDeleteDBSnapshotVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("beatae"),
        XAmzCredential: sdk.String("commodi"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("modi"),
        XAmzSignature: sdk.String("qui"),
        XAmzSignedHeaders: sdk.String("impedit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDeleteDBSubnetGroup

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
    res, err := s.SDK.GETDeleteDBSubnetGroup(ctx, operations.GETDeleteDBSubnetGroupRequest{
        Action: operations.GETDeleteDBSubnetGroupActionEnumDeleteDbSubnetGroup,
        DBSubnetGroupName: "cum",
        Version: operations.GETDeleteDBSubnetGroupVersionEnumTwoThousandAndThirteen0909,
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

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETDeleteEventSubscription

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
    res, err := s.SDK.GETDeleteEventSubscription(ctx, operations.GETDeleteEventSubscriptionRequest{
        Action: operations.GETDeleteEventSubscriptionActionEnumDeleteEventSubscription,
        SubscriptionName: "sed",
        Version: operations.GETDeleteEventSubscriptionVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("iste"),
        XAmzContentSha256: sdk.String("dolor"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("laboriosam"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("fuga"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDeleteOptionGroup

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
    res, err := s.SDK.GETDeleteOptionGroup(ctx, operations.GETDeleteOptionGroupRequest{
        Action: operations.GETDeleteOptionGroupActionEnumDeleteOptionGroup,
        OptionGroupName: "in",
        Version: operations.GETDeleteOptionGroupVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("iste"),
        XAmzCredential: sdk.String("iure"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("ipsa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETDownloadDBLogFilePortion

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
    res, err := s.SDK.GETDownloadDBLogFilePortion(ctx, operations.GETDownloadDBLogFilePortionRequest{
        Action: operations.GETDownloadDBLogFilePortionActionEnumDownloadDbLogFilePortion,
        DBInstanceIdentifier: "reiciendis",
        LogFileName: "est",
        Marker: sdk.String("mollitia"),
        NumberOfLines: sdk.Int64(670638),
        Version: operations.GETDownloadDBLogFilePortionVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("dolores"),
        XAmzContentSha256: sdk.String("dolorem"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("explicabo"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("omnis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETModifyDBInstance

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
    res, err := s.SDK.GETModifyDBInstance(ctx, operations.GETModifyDBInstanceRequest{
        Action: operations.GETModifyDBInstanceActionEnumModifyDbInstance,
        AllocatedStorage: sdk.Int64(363711),
        AllowMajorVersionUpgrade: sdk.Bool(false),
        ApplyImmediately: sdk.Bool(false),
        AutoMinorVersionUpgrade: sdk.Bool(false),
        BackupRetentionPeriod: sdk.Int64(325047),
        DBInstanceClass: sdk.String("excepturi"),
        DBInstanceIdentifier: "accusantium",
        DBParameterGroupName: sdk.String("iure"),
        DBSecurityGroups: []string{
            "doloribus",
            "sapiente",
            "architecto",
        },
        EngineVersion: sdk.String("mollitia"),
        Iops: sdk.Int64(208876),
        MasterUserPassword: sdk.String("culpa"),
        MultiAZ: sdk.Bool(false),
        NewDBInstanceIdentifier: sdk.String("consequuntur"),
        OptionGroupName: sdk.String("repellat"),
        PreferredBackupWindow: sdk.String("mollitia"),
        PreferredMaintenanceWindow: sdk.String("occaecati"),
        Version: operations.GETModifyDBInstanceVersionEnumTwoThousandAndThirteen0909,
        VpcSecurityGroupIds: []string{
            "commodi",
            "quam",
        },
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("velit"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("quia"),
        XAmzSecurityToken: sdk.String("quis"),
        XAmzSignature: sdk.String("vitae"),
        XAmzSignedHeaders: sdk.String("laborum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETModifyDBSubnetGroup

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
    res, err := s.SDK.GETModifyDBSubnetGroup(ctx, operations.GETModifyDBSubnetGroupRequest{
        Action: operations.GETModifyDBSubnetGroupActionEnumModifyDbSubnetGroup,
        DBSubnetGroupDescription: sdk.String("animi"),
        DBSubnetGroupName: "enim",
        SubnetIds: []string{
            "quo",
        },
        Version: operations.GETModifyDBSubnetGroupVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("sequi"),
        XAmzContentSha256: sdk.String("tenetur"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("id"),
        XAmzSecurityToken: sdk.String("possimus"),
        XAmzSignature: sdk.String("aut"),
        XAmzSignedHeaders: sdk.String("quasi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETModifyEventSubscription

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
    res, err := s.SDK.GETModifyEventSubscription(ctx, operations.GETModifyEventSubscriptionRequest{
        Action: operations.GETModifyEventSubscriptionActionEnumModifyEventSubscription,
        Enabled: sdk.Bool(false),
        EventCategories: []string{
            "temporibus",
            "laborum",
            "quasi",
        },
        SnsTopicArn: sdk.String("reiciendis"),
        SourceType: sdk.String("voluptatibus"),
        SubscriptionName: "vero",
        Version: operations.GETModifyEventSubscriptionVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("nihil"),
        XAmzContentSha256: sdk.String("praesentium"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("cum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETPromoteReadReplica

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
    res, err := s.SDK.GETPromoteReadReplica(ctx, operations.GETPromoteReadReplicaRequest{
        Action: operations.GETPromoteReadReplicaActionEnumPromoteReadReplica,
        BackupRetentionPeriod: sdk.Int64(19987),
        DBInstanceIdentifier: "doloremque",
        PreferredBackupWindow: sdk.String("reprehenderit"),
        Version: operations.GETPromoteReadReplicaVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("ut"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("dolore"),
        XAmzSignature: sdk.String("iusto"),
        XAmzSignedHeaders: sdk.String("dicta"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETRebootDBInstance

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
    res, err := s.SDK.GETRebootDBInstance(ctx, operations.GETRebootDBInstanceRequest{
        Action: operations.GETRebootDBInstanceActionEnumRebootDbInstance,
        DBInstanceIdentifier: "harum",
        ForceFailover: sdk.Bool(false),
        Version: operations.GETRebootDBInstanceVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("commodi"),
        XAmzDate: sdk.String("repudiandae"),
        XAmzSecurityToken: sdk.String("quae"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("quidem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETRemoveSourceIdentifierFromSubscription

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
    res, err := s.SDK.GETRemoveSourceIdentifierFromSubscription(ctx, operations.GETRemoveSourceIdentifierFromSubscriptionRequest{
        Action: operations.GETRemoveSourceIdentifierFromSubscriptionActionEnumRemoveSourceIdentifierFromSubscription,
        SourceIdentifier: "molestias",
        SubscriptionName: "excepturi",
        Version: operations.GETRemoveSourceIdentifierFromSubscriptionVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("modi"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("rem"),
        XAmzSecurityToken: sdk.String("voluptates"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("repudiandae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETRemoveTagsFromResource

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
    res, err := s.SDK.GETRemoveTagsFromResource(ctx, operations.GETRemoveTagsFromResourceRequest{
        Action: operations.GETRemoveTagsFromResourceActionEnumRemoveTagsFromResource,
        ResourceName: "sint",
        TagKeys: []string{
            "itaque",
        },
        Version: operations.GETRemoveTagsFromResourceVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("incidunt"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("consequatur"),
        XAmzDate: sdk.String("est"),
        XAmzSecurityToken: sdk.String("quibusdam"),
        XAmzSignature: sdk.String("explicabo"),
        XAmzSignedHeaders: sdk.String("deserunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETRevokeDBSecurityGroupIngress

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
    res, err := s.SDK.GETRevokeDBSecurityGroupIngress(ctx, operations.GETRevokeDBSecurityGroupIngressRequest{
        Action: operations.GETRevokeDBSecurityGroupIngressActionEnumRevokeDbSecurityGroupIngress,
        Cidrip: sdk.String("distinctio"),
        DBSecurityGroupName: "quibusdam",
        Ec2SecurityGroupID: sdk.String("labore"),
        Ec2SecurityGroupName: sdk.String("modi"),
        Ec2SecurityGroupOwnerID: sdk.String("qui"),
        Version: operations.GETRevokeDBSecurityGroupIngressVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("cupiditate"),
        XAmzCredential: sdk.String("quos"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("magni"),
        XAmzSignature: sdk.String("assumenda"),
        XAmzSignedHeaders: sdk.String("ipsam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTAddSourceIdentifierToSubscription

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
    res, err := s.SDK.POSTAddSourceIdentifierToSubscription(ctx, operations.POSTAddSourceIdentifierToSubscriptionRequest{
        Action: operations.POSTAddSourceIdentifierToSubscriptionActionEnumAddSourceIdentifierToSubscription,
        RequestBody: []byte("alias"),
        Version: operations.POSTAddSourceIdentifierToSubscriptionVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("fugit"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("tempore"),
        XAmzSignedHeaders: sdk.String("labore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTAddTagsToResource

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
    res, err := s.SDK.POSTAddTagsToResource(ctx, operations.POSTAddTagsToResourceRequest{
        Action: operations.POSTAddTagsToResourceActionEnumAddTagsToResource,
        RequestBody: []byte("delectus"),
        Version: operations.POSTAddTagsToResourceVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("eum"),
        XAmzContentSha256: sdk.String("non"),
        XAmzCredential: sdk.String("eligendi"),
        XAmzDate: sdk.String("sint"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("necessitatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTAuthorizeDBSecurityGroupIngress

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
    res, err := s.SDK.POSTAuthorizeDBSecurityGroupIngress(ctx, operations.POSTAuthorizeDBSecurityGroupIngressRequest{
        Action: operations.POSTAuthorizeDBSecurityGroupIngressActionEnumAuthorizeDbSecurityGroupIngress,
        RequestBody: []byte("sint"),
        Version: operations.POSTAuthorizeDBSecurityGroupIngressVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("officia"),
        XAmzContentSha256: sdk.String("dolor"),
        XAmzCredential: sdk.String("debitis"),
        XAmzDate: sdk.String("a"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("in"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCopyDBSnapshot

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
    res, err := s.SDK.POSTCopyDBSnapshot(ctx, operations.POSTCopyDBSnapshotRequest{
        Action: operations.POSTCopyDBSnapshotActionEnumCopyDbSnapshot,
        RequestBody: []byte("illum"),
        Version: operations.POSTCopyDBSnapshotVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("rerum"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("cumque"),
        XAmzSignature: sdk.String("facere"),
        XAmzSignedHeaders: sdk.String("ea"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCreateDBInstance

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
    res, err := s.SDK.POSTCreateDBInstance(ctx, operations.POSTCreateDBInstanceRequest{
        Action: operations.POSTCreateDBInstanceActionEnumCreateDbInstance,
        RequestBody: []byte("aliquid"),
        Version: operations.POSTCreateDBInstanceVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("non"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("delectus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCreateDBInstanceReadReplica

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
    res, err := s.SDK.POSTCreateDBInstanceReadReplica(ctx, operations.POSTCreateDBInstanceReadReplicaRequest{
        Action: operations.POSTCreateDBInstanceReadReplicaActionEnumCreateDbInstanceReadReplica,
        RequestBody: []byte("quidem"),
        Version: operations.POSTCreateDBInstanceReadReplicaVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("nam"),
        XAmzCredential: sdk.String("id"),
        XAmzDate: sdk.String("blanditiis"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("amet"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCreateDBParameterGroup

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
    res, err := s.SDK.POSTCreateDBParameterGroup(ctx, operations.POSTCreateDBParameterGroupRequest{
        Action: operations.POSTCreateDBParameterGroupActionEnumCreateDbParameterGroup,
        RequestBody: []byte("deserunt"),
        Version: operations.POSTCreateDBParameterGroupVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("nisi"),
        XAmzContentSha256: sdk.String("vel"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("nihil"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCreateDBSecurityGroup

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
    res, err := s.SDK.POSTCreateDBSecurityGroup(ctx, operations.POSTCreateDBSecurityGroupRequest{
        Action: operations.POSTCreateDBSecurityGroupActionEnumCreateDbSecurityGroup,
        RequestBody: []byte("magnam"),
        Version: operations.POSTCreateDBSecurityGroupVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("nobis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCreateDBSnapshot

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
    res, err := s.SDK.POSTCreateDBSnapshot(ctx, operations.POSTCreateDBSnapshotRequest{
        Action: operations.POSTCreateDBSnapshotActionEnumCreateDbSnapshot,
        RequestBody: []byte("eum"),
        Version: operations.POSTCreateDBSnapshotVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("et"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("ullam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCreateDBSubnetGroup

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
    res, err := s.SDK.POSTCreateDBSubnetGroup(ctx, operations.POSTCreateDBSubnetGroupRequest{
        Action: operations.POSTCreateDBSubnetGroupActionEnumCreateDbSubnetGroup,
        RequestBody: []byte("provident"),
        Version: operations.POSTCreateDBSubnetGroupVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("quos"),
        XAmzContentSha256: sdk.String("sint"),
        XAmzCredential: sdk.String("accusantium"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("reiciendis"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("ad"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCreateEventSubscription

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
    res, err := s.SDK.POSTCreateEventSubscription(ctx, operations.POSTCreateEventSubscriptionRequest{
        Action: operations.POSTCreateEventSubscriptionActionEnumCreateEventSubscription,
        RequestBody: []byte("eum"),
        Version: operations.POSTCreateEventSubscriptionVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("necessitatibus"),
        XAmzCredential: sdk.String("odit"),
        XAmzDate: sdk.String("nemo"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("iure"),
        XAmzSignedHeaders: sdk.String("doloribus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTCreateOptionGroup

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
    res, err := s.SDK.POSTCreateOptionGroup(ctx, operations.POSTCreateOptionGroupRequest{
        Action: operations.POSTCreateOptionGroupActionEnumCreateOptionGroup,
        RequestBody: []byte("debitis"),
        Version: operations.POSTCreateOptionGroupVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("eius"),
        XAmzContentSha256: sdk.String("maxime"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("architecto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDeleteDBInstance

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
    res, err := s.SDK.POSTDeleteDBInstance(ctx, operations.POSTDeleteDBInstanceRequest{
        Action: operations.POSTDeleteDBInstanceActionEnumDeleteDbInstance,
        RequestBody: []byte("repudiandae"),
        Version: operations.POSTDeleteDBInstanceVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("ullam"),
        XAmzContentSha256: sdk.String("expedita"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("repellat"),
        XAmzSecurityToken: sdk.String("quibusdam"),
        XAmzSignature: sdk.String("sed"),
        XAmzSignedHeaders: sdk.String("saepe"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDeleteDBParameterGroup

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
    res, err := s.SDK.POSTDeleteDBParameterGroup(ctx, operations.POSTDeleteDBParameterGroupRequest{
        Action: operations.POSTDeleteDBParameterGroupActionEnumDeleteDbParameterGroup,
        RequestBody: []byte("pariatur"),
        Version: operations.POSTDeleteDBParameterGroupVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("accusantium"),
        XAmzContentSha256: sdk.String("consequuntur"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("magni"),
        XAmzSignature: sdk.String("sunt"),
        XAmzSignedHeaders: sdk.String("quo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTDeleteDBSecurityGroup

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
    res, err := s.SDK.POSTDeleteDBSecurityGroup(ctx, operations.POSTDeleteDBSecurityGroupRequest{
        Action: operations.POSTDeleteDBSecurityGroupActionEnumDeleteDbSecurityGroup,
        RequestBody: []byte("illum"),
        Version: operations.POSTDeleteDBSecurityGroupVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("maxime"),
        XAmzCredential: sdk.String("ea"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("odit"),
        XAmzSignature: sdk.String("ea"),
        XAmzSignedHeaders: sdk.String("accusantium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTDeleteDBSnapshot

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
    res, err := s.SDK.POSTDeleteDBSnapshot(ctx, operations.POSTDeleteDBSnapshotRequest{
        Action: operations.POSTDeleteDBSnapshotActionEnumDeleteDbSnapshot,
        RequestBody: []byte("ab"),
        Version: operations.POSTDeleteDBSnapshotVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("autem"),
        XAmzSignature: sdk.String("nam"),
        XAmzSignedHeaders: sdk.String("eaque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDeleteDBSubnetGroup

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
    res, err := s.SDK.POSTDeleteDBSubnetGroup(ctx, operations.POSTDeleteDBSubnetGroupRequest{
        Action: operations.POSTDeleteDBSubnetGroupActionEnumDeleteDbSubnetGroup,
        RequestBody: []byte("pariatur"),
        Version: operations.POSTDeleteDBSubnetGroupVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("nemo"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("fugiat"),
        XAmzSecurityToken: sdk.String("amet"),
        XAmzSignature: sdk.String("aut"),
        XAmzSignedHeaders: sdk.String("cumque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTDeleteEventSubscription

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
    res, err := s.SDK.POSTDeleteEventSubscription(ctx, operations.POSTDeleteEventSubscriptionRequest{
        Action: operations.POSTDeleteEventSubscriptionActionEnumDeleteEventSubscription,
        RequestBody: []byte("corporis"),
        Version: operations.POSTDeleteEventSubscriptionVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("libero"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("dolores"),
        XAmzSecurityToken: sdk.String("quis"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("dignissimos"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDeleteOptionGroup

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
    res, err := s.SDK.POSTDeleteOptionGroup(ctx, operations.POSTDeleteOptionGroupRequest{
        Action: operations.POSTDeleteOptionGroupActionEnumDeleteOptionGroup,
        RequestBody: []byte("eaque"),
        Version: operations.POSTDeleteOptionGroupVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("quis"),
        XAmzContentSha256: sdk.String("nesciunt"),
        XAmzCredential: sdk.String("eos"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("dolores"),
        XAmzSignature: sdk.String("minus"),
        XAmzSignedHeaders: sdk.String("quam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTDescribeDBEngineVersions

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
    res, err := s.SDK.POSTDescribeDBEngineVersions(ctx, operations.POSTDescribeDBEngineVersionsRequest{
        Action: operations.POSTDescribeDBEngineVersionsActionEnumDescribeDbEngineVersions,
        Marker: sdk.String("dolor"),
        MaxRecords: sdk.String("vero"),
        RequestBody: []byte("nostrum"),
        Version: operations.POSTDescribeDBEngineVersionsVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("perspiciatis"),
        XAmzSignature: sdk.String("voluptatem"),
        XAmzSignedHeaders: sdk.String("porro"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeDBInstances

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
    res, err := s.SDK.POSTDescribeDBInstances(ctx, operations.POSTDescribeDBInstancesRequest{
        Action: operations.POSTDescribeDBInstancesActionEnumDescribeDbInstances,
        Marker: sdk.String("consequuntur"),
        MaxRecords: sdk.String("blanditiis"),
        RequestBody: []byte("error"),
        Version: operations.POSTDescribeDBInstancesVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("eaque"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("rerum"),
        XAmzDate: sdk.String("adipisci"),
        XAmzSecurityToken: sdk.String("asperiores"),
        XAmzSignature: sdk.String("earum"),
        XAmzSignedHeaders: sdk.String("modi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeDBLogFiles

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
    res, err := s.SDK.POSTDescribeDBLogFiles(ctx, operations.POSTDescribeDBLogFilesRequest{
        Action: operations.POSTDescribeDBLogFilesActionEnumDescribeDbLogFiles,
        Marker: sdk.String("iste"),
        MaxRecords: sdk.String("dolorum"),
        RequestBody: []byte("deleniti"),
        Version: operations.POSTDescribeDBLogFilesVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("libero"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("quaerat"),
        XAmzSignedHeaders: sdk.String("quos"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeDBParameterGroups

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
    res, err := s.SDK.POSTDescribeDBParameterGroups(ctx, operations.POSTDescribeDBParameterGroupsRequest{
        Action: operations.POSTDescribeDBParameterGroupsActionEnumDescribeDbParameterGroups,
        Marker: sdk.String("aliquid"),
        MaxRecords: sdk.String("dolorem"),
        RequestBody: []byte("dolorem"),
        Version: operations.POSTDescribeDBParameterGroupsVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("cum"),
        XAmzSignedHeaders: sdk.String("voluptate"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeDBParameters

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
    res, err := s.SDK.POSTDescribeDBParameters(ctx, operations.POSTDescribeDBParametersRequest{
        Action: operations.POSTDescribeDBParametersActionEnumDescribeDbParameters,
        Marker: sdk.String("dignissimos"),
        MaxRecords: sdk.String("reiciendis"),
        RequestBody: []byte("amet"),
        Version: operations.POSTDescribeDBParametersVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("numquam"),
        XAmzCredential: sdk.String("veritatis"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("iure"),
        XAmzSignedHeaders: sdk.String("odio"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeDBSecurityGroups

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
    res, err := s.SDK.POSTDescribeDBSecurityGroups(ctx, operations.POSTDescribeDBSecurityGroupsRequest{
        Action: operations.POSTDescribeDBSecurityGroupsActionEnumDescribeDbSecurityGroups,
        Marker: sdk.String("quaerat"),
        MaxRecords: sdk.String("accusamus"),
        RequestBody: []byte("quidem"),
        Version: operations.POSTDescribeDBSecurityGroupsVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("eos"),
        XAmzSecurityToken: sdk.String("atque"),
        XAmzSignature: sdk.String("sit"),
        XAmzSignedHeaders: sdk.String("fugiat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeDBSnapshots

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
    res, err := s.SDK.POSTDescribeDBSnapshots(ctx, operations.POSTDescribeDBSnapshotsRequest{
        Action: operations.POSTDescribeDBSnapshotsActionEnumDescribeDbSnapshots,
        Marker: sdk.String("ab"),
        MaxRecords: sdk.String("soluta"),
        RequestBody: []byte("dolorum"),
        Version: operations.POSTDescribeDBSnapshotsVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("iusto"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("necessitatibus"),
        XAmzSignedHeaders: sdk.String("distinctio"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeDBSubnetGroups

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
    res, err := s.SDK.POSTDescribeDBSubnetGroups(ctx, operations.POSTDescribeDBSubnetGroupsRequest{
        Action: operations.POSTDescribeDBSubnetGroupsActionEnumDescribeDbSubnetGroups,
        Marker: sdk.String("asperiores"),
        MaxRecords: sdk.String("nihil"),
        RequestBody: []byte("ipsum"),
        Version: operations.POSTDescribeDBSubnetGroupsVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("eius"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("amet"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeEngineDefaultParameters

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
    res, err := s.SDK.POSTDescribeEngineDefaultParameters(ctx, operations.POSTDescribeEngineDefaultParametersRequest{
        Action: operations.POSTDescribeEngineDefaultParametersActionEnumDescribeEngineDefaultParameters,
        Marker: sdk.String("optio"),
        MaxRecords: sdk.String("accusamus"),
        RequestBody: []byte("ad"),
        Version: operations.POSTDescribeEngineDefaultParametersVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("minima"),
        XAmzSignature: sdk.String("repellendus"),
        XAmzSignedHeaders: sdk.String("totam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeEventCategories

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
    res, err := s.SDK.POSTDescribeEventCategories(ctx, operations.POSTDescribeEventCategoriesRequest{
        Action: operations.POSTDescribeEventCategoriesActionEnumDescribeEventCategories,
        RequestBody: []byte("similique"),
        Version: operations.POSTDescribeEventCategoriesVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("alias"),
        XAmzContentSha256: sdk.String("at"),
        XAmzCredential: sdk.String("quaerat"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("vel"),
        XAmzSignature: sdk.String("quod"),
        XAmzSignedHeaders: sdk.String("officiis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeEventSubscriptions

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
    res, err := s.SDK.POSTDescribeEventSubscriptions(ctx, operations.POSTDescribeEventSubscriptionsRequest{
        Action: operations.POSTDescribeEventSubscriptionsActionEnumDescribeEventSubscriptions,
        Marker: sdk.String("qui"),
        MaxRecords: sdk.String("dolorum"),
        RequestBody: []byte("a"),
        Version: operations.POSTDescribeEventSubscriptionsVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("harum"),
        XAmzCredential: sdk.String("iusto"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("quisquam"),
        XAmzSignature: sdk.String("tenetur"),
        XAmzSignedHeaders: sdk.String("amet"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeEvents

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
    res, err := s.SDK.POSTDescribeEvents(ctx, operations.POSTDescribeEventsRequest{
        Action: operations.POSTDescribeEventsActionEnumDescribeEvents,
        Marker: sdk.String("tempore"),
        MaxRecords: sdk.String("accusamus"),
        RequestBody: []byte("numquam"),
        Version: operations.POSTDescribeEventsVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("dolorem"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("nihil"),
        XAmzSignature: sdk.String("sit"),
        XAmzSignedHeaders: sdk.String("expedita"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeOptionGroupOptions

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
    res, err := s.SDK.POSTDescribeOptionGroupOptions(ctx, operations.POSTDescribeOptionGroupOptionsRequest{
        Action: operations.POSTDescribeOptionGroupOptionsActionEnumDescribeOptionGroupOptions,
        Marker: sdk.String("neque"),
        MaxRecords: sdk.String("sed"),
        RequestBody: []byte("vel"),
        Version: operations.POSTDescribeOptionGroupOptionsVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("libero"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("quam"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("incidunt"),
        XAmzSignedHeaders: sdk.String("qui"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeOptionGroups

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
    res, err := s.SDK.POSTDescribeOptionGroups(ctx, operations.POSTDescribeOptionGroupsRequest{
        Action: operations.POSTDescribeOptionGroupsActionEnumDescribeOptionGroups,
        Marker: sdk.String("cupiditate"),
        MaxRecords: sdk.String("maxime"),
        RequestBody: []byte("pariatur"),
        Version: operations.POSTDescribeOptionGroupsVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("soluta"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("laborum"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("incidunt"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("dolores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeOrderableDBInstanceOptions

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
    res, err := s.SDK.POSTDescribeOrderableDBInstanceOptions(ctx, operations.POSTDescribeOrderableDBInstanceOptionsRequest{
        Action: operations.POSTDescribeOrderableDBInstanceOptionsActionEnumDescribeOrderableDbInstanceOptions,
        Marker: sdk.String("distinctio"),
        MaxRecords: sdk.String("facilis"),
        RequestBody: []byte("aliquid"),
        Version: operations.POSTDescribeOrderableDBInstanceOptionsVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("quam"),
        XAmzContentSha256: sdk.String("molestias"),
        XAmzCredential: sdk.String("temporibus"),
        XAmzDate: sdk.String("qui"),
        XAmzSecurityToken: sdk.String("neque"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("magni"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeReservedDBInstances

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
    res, err := s.SDK.POSTDescribeReservedDBInstances(ctx, operations.POSTDescribeReservedDBInstancesRequest{
        Action: operations.POSTDescribeReservedDBInstancesActionEnumDescribeReservedDbInstances,
        Marker: sdk.String("odio"),
        MaxRecords: sdk.String("sunt"),
        RequestBody: []byte("ullam"),
        Version: operations.POSTDescribeReservedDBInstancesVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("nam"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("voluptatem"),
        XAmzDate: sdk.String("cumque"),
        XAmzSecurityToken: sdk.String("soluta"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("et"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDescribeReservedDBInstancesOfferings

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
    res, err := s.SDK.POSTDescribeReservedDBInstancesOfferings(ctx, operations.POSTDescribeReservedDBInstancesOfferingsRequest{
        Action: operations.POSTDescribeReservedDBInstancesOfferingsActionEnumDescribeReservedDbInstancesOfferings,
        Marker: sdk.String("saepe"),
        MaxRecords: sdk.String("ipsum"),
        RequestBody: []byte("veritatis"),
        Version: operations.POSTDescribeReservedDBInstancesOfferingsVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("quos"),
        XAmzCredential: sdk.String("tempore"),
        XAmzDate: sdk.String("cupiditate"),
        XAmzSecurityToken: sdk.String("aperiam"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("dolorem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTDownloadDBLogFilePortion

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
    res, err := s.SDK.POSTDownloadDBLogFilePortion(ctx, operations.POSTDownloadDBLogFilePortionRequest{
        Action: operations.POSTDownloadDBLogFilePortionActionEnumDownloadDbLogFilePortion,
        Marker: sdk.String("dolore"),
        NumberOfLines: sdk.String("labore"),
        RequestBody: []byte("adipisci"),
        Version: operations.POSTDownloadDBLogFilePortionVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("quae"),
        XAmzDate: sdk.String("aut"),
        XAmzSecurityToken: sdk.String("quas"),
        XAmzSignature: sdk.String("itaque"),
        XAmzSignedHeaders: sdk.String("consequatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTListTagsForResource

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
    res, err := s.SDK.POSTListTagsForResource(ctx, operations.POSTListTagsForResourceRequest{
        Action: operations.POSTListTagsForResourceActionEnumListTagsForResource,
        RequestBody: []byte("est"),
        Version: operations.POSTListTagsForResourceVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("repellendus"),
        XAmzContentSha256: sdk.String("porro"),
        XAmzCredential: sdk.String("doloribus"),
        XAmzDate: sdk.String("ut"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("cupiditate"),
        XAmzSignedHeaders: sdk.String("qui"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTModifyDBInstance

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
    res, err := s.SDK.POSTModifyDBInstance(ctx, operations.POSTModifyDBInstanceRequest{
        Action: operations.POSTModifyDBInstanceActionEnumModifyDbInstance,
        RequestBody: []byte("quae"),
        Version: operations.POSTModifyDBInstanceVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("laudantium"),
        XAmzContentSha256: sdk.String("odio"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("quisquam"),
        XAmzSignature: sdk.String("vero"),
        XAmzSignedHeaders: sdk.String("omnis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTModifyDBParameterGroup

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
    res, err := s.SDK.POSTModifyDBParameterGroup(ctx, operations.POSTModifyDBParameterGroupRequest{
        Action: operations.POSTModifyDBParameterGroupActionEnumModifyDbParameterGroup,
        RequestBody: []byte("quis"),
        Version: operations.POSTModifyDBParameterGroupVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("consectetur"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("tenetur"),
        XAmzSignedHeaders: sdk.String("dignissimos"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTModifyDBSubnetGroup

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
    res, err := s.SDK.POSTModifyDBSubnetGroup(ctx, operations.POSTModifyDBSubnetGroupRequest{
        Action: operations.POSTModifyDBSubnetGroupActionEnumModifyDbSubnetGroup,
        RequestBody: []byte("hic"),
        Version: operations.POSTModifyDBSubnetGroupVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("quod"),
        XAmzCredential: sdk.String("odio"),
        XAmzDate: sdk.String("similique"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("vero"),
        XAmzSignedHeaders: sdk.String("ducimus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTModifyEventSubscription

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
    res, err := s.SDK.POSTModifyEventSubscription(ctx, operations.POSTModifyEventSubscriptionRequest{
        Action: operations.POSTModifyEventSubscriptionActionEnumModifyEventSubscription,
        RequestBody: []byte("dolore"),
        Version: operations.POSTModifyEventSubscriptionVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("quibusdam"),
        XAmzContentSha256: sdk.String("illum"),
        XAmzCredential: sdk.String("sequi"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("impedit"),
        XAmzSignature: sdk.String("aut"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTModifyOptionGroup

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
    res, err := s.SDK.POSTModifyOptionGroup(ctx, operations.POSTModifyOptionGroupRequest{
        Action: operations.POSTModifyOptionGroupActionEnumModifyOptionGroup,
        RequestBody: []byte("exercitationem"),
        Version: operations.POSTModifyOptionGroupVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("nulla"),
        XAmzContentSha256: sdk.String("fugit"),
        XAmzCredential: sdk.String("porro"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("doloribus"),
        XAmzSignature: sdk.String("iusto"),
        XAmzSignedHeaders: sdk.String("eligendi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTPromoteReadReplica

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
    res, err := s.SDK.POSTPromoteReadReplica(ctx, operations.POSTPromoteReadReplicaRequest{
        Action: operations.POSTPromoteReadReplicaActionEnumPromoteReadReplica,
        RequestBody: []byte("ducimus"),
        Version: operations.POSTPromoteReadReplicaVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("alias"),
        XAmzContentSha256: sdk.String("officia"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("vel"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTPurchaseReservedDBInstancesOffering

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
    res, err := s.SDK.POSTPurchaseReservedDBInstancesOffering(ctx, operations.POSTPurchaseReservedDBInstancesOfferingRequest{
        Action: operations.POSTPurchaseReservedDBInstancesOfferingActionEnumPurchaseReservedDbInstancesOffering,
        RequestBody: []byte("possimus"),
        Version: operations.POSTPurchaseReservedDBInstancesOfferingVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("ratione"),
        XAmzCredential: sdk.String("ex"),
        XAmzDate: sdk.String("laudantium"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("dolor"),
        XAmzSignedHeaders: sdk.String("maiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTRebootDBInstance

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
    res, err := s.SDK.POSTRebootDBInstance(ctx, operations.POSTRebootDBInstanceRequest{
        Action: operations.POSTRebootDBInstanceActionEnumRebootDbInstance,
        RequestBody: []byte("quasi"),
        Version: operations.POSTRebootDBInstanceVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("ex"),
        XAmzContentSha256: sdk.String("nulla"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("nostrum"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("quisquam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTRemoveSourceIdentifierFromSubscription

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
    res, err := s.SDK.POSTRemoveSourceIdentifierFromSubscription(ctx, operations.POSTRemoveSourceIdentifierFromSubscriptionRequest{
        Action: operations.POSTRemoveSourceIdentifierFromSubscriptionActionEnumRemoveSourceIdentifierFromSubscription,
        RequestBody: []byte("saepe"),
        Version: operations.POSTRemoveSourceIdentifierFromSubscriptionVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("ea"),
        XAmzContentSha256: sdk.String("impedit"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("veniam"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("inventore"),
        XAmzSignedHeaders: sdk.String("magnam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTRemoveTagsFromResource

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
    res, err := s.SDK.POSTRemoveTagsFromResource(ctx, operations.POSTRemoveTagsFromResourceRequest{
        Action: operations.POSTRemoveTagsFromResourceActionEnumRemoveTagsFromResource,
        RequestBody: []byte("ea"),
        Version: operations.POSTRemoveTagsFromResourceVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("quo"),
        XAmzContentSha256: sdk.String("consectetur"),
        XAmzCredential: sdk.String("recusandae"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("minima"),
        XAmzSignature: sdk.String("eaque"),
        XAmzSignedHeaders: sdk.String("a"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## POSTResetDBParameterGroup

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
    res, err := s.SDK.POSTResetDBParameterGroup(ctx, operations.POSTResetDBParameterGroupRequest{
        Action: operations.POSTResetDBParameterGroupActionEnumResetDbParameterGroup,
        RequestBody: []byte("libero"),
        Version: operations.POSTResetDBParameterGroupVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("aut"),
        XAmzContentSha256: sdk.String("aut"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("impedit"),
        XAmzSecurityToken: sdk.String("aliquam"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("accusamus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTRestoreDBInstanceFromDBSnapshot

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
    res, err := s.SDK.POSTRestoreDBInstanceFromDBSnapshot(ctx, operations.POSTRestoreDBInstanceFromDBSnapshotRequest{
        Action: operations.POSTRestoreDBInstanceFromDBSnapshotActionEnumRestoreDbInstanceFromDbSnapshot,
        RequestBody: []byte("inventore"),
        Version: operations.POSTRestoreDBInstanceFromDBSnapshotVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("non"),
        XAmzContentSha256: sdk.String("et"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("placeat"),
        XAmzSignature: sdk.String("velit"),
        XAmzSignedHeaders: sdk.String("eum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTRestoreDBInstanceToPointInTime

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
    res, err := s.SDK.POSTRestoreDBInstanceToPointInTime(ctx, operations.POSTRestoreDBInstanceToPointInTimeRequest{
        Action: operations.POSTRestoreDBInstanceToPointInTimeActionEnumRestoreDbInstanceToPointInTime,
        RequestBody: []byte("autem"),
        Version: operations.POSTRestoreDBInstanceToPointInTimeVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("quas"),
        XAmzCredential: sdk.String("assumenda"),
        XAmzDate: sdk.String("nulla"),
        XAmzSecurityToken: sdk.String("voluptas"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("quasi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## POSTRevokeDBSecurityGroupIngress

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
    res, err := s.SDK.POSTRevokeDBSecurityGroupIngress(ctx, operations.POSTRevokeDBSecurityGroupIngressRequest{
        Action: operations.POSTRevokeDBSecurityGroupIngressActionEnumRevokeDbSecurityGroupIngress,
        RequestBody: []byte("tempora"),
        Version: operations.POSTRevokeDBSecurityGroupIngressVersionEnumTwoThousandAndThirteen0909,
        XAmzAlgorithm: sdk.String("numquam"),
        XAmzContentSha256: sdk.String("explicabo"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("odio"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
