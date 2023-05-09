# SDK

## Overview

Amazon Web Services documentation
<https://docs.aws.amazon.com/rds/>
### Available Operations

* [GETAddSourceIdentifierToSubscription](#getaddsourceidentifiertosubscription)
* [GETAuthorizeDBSecurityGroupIngress](#getauthorizedbsecuritygroupingress)
* [GETCopyDBSnapshot](#getcopydbsnapshot)
* [GETCreateDBInstance](#getcreatedbinstance)
* [GETCreateDBInstanceReadReplica](#getcreatedbinstancereadreplica)
* [GETCreateDBParameterGroup](#getcreatedbparametergroup)
* [GETCreateDBSecurityGroup](#getcreatedbsecuritygroup)
* [GETCreateDBSnapshot](#getcreatedbsnapshot)
* [GETCreateDBSubnetGroup](#getcreatedbsubnetgroup)
* [GETCreateEventSubscription](#getcreateeventsubscription)
* [GETCreateOptionGroup](#getcreateoptiongroup)
* [GETDeleteDBInstance](#getdeletedbinstance)
* [GETDeleteDBParameterGroup](#getdeletedbparametergroup)
* [GETDeleteDBSecurityGroup](#getdeletedbsecuritygroup)
* [GETDeleteDBSnapshot](#getdeletedbsnapshot)
* [GETDeleteDBSubnetGroup](#getdeletedbsubnetgroup)
* [GETDeleteEventSubscription](#getdeleteeventsubscription)
* [GETDeleteOptionGroup](#getdeleteoptiongroup)
* [GETDescribeDBEngineVersions](#getdescribedbengineversions)
* [GETDescribeDBInstances](#getdescribedbinstances)
* [GETDescribeDBParameterGroups](#getdescribedbparametergroups)
* [GETDescribeDBParameters](#getdescribedbparameters)
* [GETDescribeDBSecurityGroups](#getdescribedbsecuritygroups)
* [GETDescribeDBSnapshots](#getdescribedbsnapshots)
* [GETDescribeDBSubnetGroups](#getdescribedbsubnetgroups)
* [GETDescribeEngineDefaultParameters](#getdescribeenginedefaultparameters)
* [GETDescribeEventCategories](#getdescribeeventcategories)
* [GETDescribeEventSubscriptions](#getdescribeeventsubscriptions)
* [GETDescribeEvents](#getdescribeevents)
* [GETDescribeOptionGroupOptions](#getdescribeoptiongroupoptions)
* [GETDescribeOptionGroups](#getdescribeoptiongroups)
* [GETDescribeOrderableDBInstanceOptions](#getdescribeorderabledbinstanceoptions)
* [GETDescribeReservedDBInstances](#getdescribereserveddbinstances)
* [GETDescribeReservedDBInstancesOfferings](#getdescribereserveddbinstancesofferings)
* [GETListTagsForResource](#getlisttagsforresource)
* [GETModifyDBInstance](#getmodifydbinstance)
* [GETModifyDBSubnetGroup](#getmodifydbsubnetgroup)
* [GETModifyEventSubscription](#getmodifyeventsubscription)
* [GETPromoteReadReplica](#getpromotereadreplica)
* [GETPurchaseReservedDBInstancesOffering](#getpurchasereserveddbinstancesoffering)
* [GETRebootDBInstance](#getrebootdbinstance)
* [GETRemoveSourceIdentifierFromSubscription](#getremovesourceidentifierfromsubscription)
* [GETRemoveTagsFromResource](#getremovetagsfromresource)
* [GETRestoreDBInstanceFromDBSnapshot](#getrestoredbinstancefromdbsnapshot)
* [GETRestoreDBInstanceToPointInTime](#getrestoredbinstancetopointintime)
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
        Version: operations.GETAddSourceIdentifierToSubscriptionVersionEnumTwoThousandAndThirteen0110,
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
        Version: operations.GETAuthorizeDBSecurityGroupIngressVersionEnumTwoThousandAndThirteen0110,
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

## GETCopyDBSnapshot

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
    res, err := s.SDK.GETCopyDBSnapshot(ctx, operations.GETCopyDBSnapshotRequest{
        Action: operations.GETCopyDBSnapshotActionEnumCopyDbSnapshot,
        SourceDBSnapshotIdentifier: "veritatis",
        TargetDBSnapshotIdentifier: "deserunt",
        Version: operations.GETCopyDBSnapshotVersionEnumTwoThousandAndThirteen0110,
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

## GETCreateDBInstance

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
    res, err := s.SDK.GETCreateDBInstance(ctx, operations.GETCreateDBInstanceRequest{
        Action: operations.GETCreateDBInstanceActionEnumCreateDbInstance,
        AllocatedStorage: 870088,
        AutoMinorVersionUpgrade: sdk.Bool(false),
        AvailabilityZone: sdk.String("maiores"),
        BackupRetentionPeriod: sdk.Int64(473608),
        CharacterSetName: sdk.String("quod"),
        DBInstanceClass: "quod",
        DBInstanceIdentifier: "esse",
        DBName: sdk.String("totam"),
        DBParameterGroupName: sdk.String("porro"),
        DBSecurityGroups: []string{
            "dicta",
            "nam",
            "officia",
        },
        DBSubnetGroupName: sdk.String("occaecati"),
        Engine: "fugit",
        EngineVersion: sdk.String("deleniti"),
        Iops: sdk.Int64(944669),
        LicenseModel: sdk.String("optio"),
        MasterUserPassword: "totam",
        MasterUsername: "beatae",
        MultiAZ: sdk.Bool(false),
        OptionGroupName: sdk.String("commodi"),
        Port: sdk.Int64(473600),
        PreferredBackupWindow: sdk.String("modi"),
        PreferredMaintenanceWindow: sdk.String("qui"),
        PubliclyAccessible: sdk.Bool(false),
        Version: operations.GETCreateDBInstanceVersionEnumTwoThousandAndThirteen0110,
        VpcSecurityGroupIds: []string{
            "cum",
            "esse",
            "ipsum",
            "excepturi",
        },
        XAmzAlgorithm: sdk.String("aspernatur"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("ad"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("sed"),
        XAmzSignature: sdk.String("iste"),
        XAmzSignedHeaders: sdk.String("dolor"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETCreateDBInstanceReadReplica

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
    res, err := s.SDK.GETCreateDBInstanceReadReplica(ctx, operations.GETCreateDBInstanceReadReplicaRequest{
        Action: operations.GETCreateDBInstanceReadReplicaActionEnumCreateDbInstanceReadReplica,
        AutoMinorVersionUpgrade: sdk.Bool(false),
        AvailabilityZone: sdk.String("natus"),
        DBInstanceClass: sdk.String("laboriosam"),
        DBInstanceIdentifier: "hic",
        Iops: sdk.Int64(902599),
        OptionGroupName: sdk.String("fuga"),
        Port: sdk.Int64(449950),
        PubliclyAccessible: sdk.Bool(false),
        SourceDBInstanceIdentifier: "corporis",
        Version: operations.GETCreateDBInstanceReadReplicaVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("iste"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETCreateDBParameterGroup

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
    res, err := s.SDK.GETCreateDBParameterGroup(ctx, operations.GETCreateDBParameterGroupRequest{
        Action: operations.GETCreateDBParameterGroupActionEnumCreateDbParameterGroup,
        DBParameterGroupFamily: "est",
        DBParameterGroupName: "mollitia",
        Description: "laborum",
        Version: operations.GETCreateDBParameterGroupVersionEnumTwoThousandAndThirteen0110,
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

## GETCreateDBSecurityGroup

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
    res, err := s.SDK.GETCreateDBSecurityGroup(ctx, operations.GETCreateDBSecurityGroupRequest{
        Action: operations.GETCreateDBSecurityGroupActionEnumCreateDbSecurityGroup,
        DBSecurityGroupDescription: "nemo",
        DBSecurityGroupName: "minima",
        Version: operations.GETCreateDBSecurityGroupVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("accusantium"),
        XAmzCredential: sdk.String("iure"),
        XAmzDate: sdk.String("culpa"),
        XAmzSecurityToken: sdk.String("doloribus"),
        XAmzSignature: sdk.String("sapiente"),
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

## GETCreateDBSnapshot

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
    res, err := s.SDK.GETCreateDBSnapshot(ctx, operations.GETCreateDBSnapshotRequest{
        Action: operations.GETCreateDBSnapshotActionEnumCreateDbSnapshot,
        DBInstanceIdentifier: "mollitia",
        DBSnapshotIdentifier: "dolorem",
        Version: operations.GETCreateDBSnapshotVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("culpa"),
        XAmzContentSha256: sdk.String("consequuntur"),
        XAmzCredential: sdk.String("repellat"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("numquam"),
        XAmzSignedHeaders: sdk.String("commodi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETCreateDBSubnetGroup

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
    res, err := s.SDK.GETCreateDBSubnetGroup(ctx, operations.GETCreateDBSubnetGroupRequest{
        Action: operations.GETCreateDBSubnetGroupActionEnumCreateDbSubnetGroup,
        DBSubnetGroupDescription: "quam",
        DBSubnetGroupName: "molestiae",
        SubnetIds: []string{
            "error",
        },
        Version: operations.GETCreateDBSubnetGroupVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("quia"),
        XAmzContentSha256: sdk.String("quis"),
        XAmzCredential: sdk.String("vitae"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("animi"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("odit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETCreateEventSubscription

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
    res, err := s.SDK.GETCreateEventSubscription(ctx, operations.GETCreateEventSubscriptionRequest{
        Action: operations.GETCreateEventSubscriptionActionEnumCreateEventSubscription,
        Enabled: sdk.Bool(false),
        EventCategories: []string{
            "sequi",
            "tenetur",
            "ipsam",
            "id",
        },
        SnsTopicArn: "possimus",
        SourceIds: []string{
            "quasi",
        },
        SourceType: sdk.String("error"),
        SubscriptionName: "temporibus",
        Version: operations.GETCreateEventSubscriptionVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("nihil"),
        XAmzSignedHeaders: sdk.String("praesentium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETCreateOptionGroup

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
    res, err := s.SDK.GETCreateOptionGroup(ctx, operations.GETCreateOptionGroupRequest{
        Action: operations.GETCreateOptionGroupActionEnumCreateOptionGroup,
        EngineName: "voluptatibus",
        MajorEngineVersion: "ipsa",
        OptionGroupDescription: "omnis",
        OptionGroupName: "voluptate",
        Version: operations.GETCreateOptionGroupVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("cum"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("doloremque"),
        XAmzDate: sdk.String("reprehenderit"),
        XAmzSecurityToken: sdk.String("ut"),
        XAmzSignature: sdk.String("maiores"),
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
        DBInstanceIdentifier: "corporis",
        FinalDBSnapshotIdentifier: sdk.String("dolore"),
        SkipFinalSnapshot: sdk.Bool(false),
        Version: operations.GETDeleteDBInstanceVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("iusto"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("harum"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("commodi"),
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
        DBParameterGroupName: "quae",
        Version: operations.GETDeleteDBParameterGroupVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("molestias"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("pariatur"),
        XAmzSignature: sdk.String("modi"),
        XAmzSignedHeaders: sdk.String("praesentium"),
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
        DBSecurityGroupName: "rem",
        Version: operations.GETDeleteDBSecurityGroupVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("voluptates"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("repudiandae"),
        XAmzDate: sdk.String("sint"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("itaque"),
        XAmzSignedHeaders: sdk.String("incidunt"),
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
        DBSnapshotIdentifier: "enim",
        Version: operations.GETDeleteDBSnapshotVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("consequatur"),
        XAmzContentSha256: sdk.String("est"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("explicabo"),
        XAmzSecurityToken: sdk.String("deserunt"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("quibusdam"),
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
        DBSubnetGroupName: "labore",
        Version: operations.GETDeleteDBSubnetGroupVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("modi"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("cupiditate"),
        XAmzSecurityToken: sdk.String("quos"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("magni"),
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
        SubscriptionName: "assumenda",
        Version: operations.GETDeleteEventSubscriptionVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("alias"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("facilis"),
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
        OptionGroupName: "tempore",
        Version: operations.GETDeleteOptionGroupVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("labore"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("non"),
        XAmzSecurityToken: sdk.String("eligendi"),
        XAmzSignature: sdk.String("sint"),
        XAmzSignedHeaders: sdk.String("aliquid"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETDescribeDBEngineVersions

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
    res, err := s.SDK.GETDescribeDBEngineVersions(ctx, operations.GETDescribeDBEngineVersionsRequest{
        Action: operations.GETDescribeDBEngineVersionsActionEnumDescribeDbEngineVersions,
        DBParameterGroupFamily: sdk.String("provident"),
        DefaultOnly: sdk.Bool(false),
        Engine: sdk.String("necessitatibus"),
        EngineVersion: sdk.String("sint"),
        ListSupportedCharacterSets: sdk.Bool(false),
        Marker: sdk.String("officia"),
        MaxRecords: sdk.Int64(223081),
        Version: operations.GETDescribeDBEngineVersionsVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("debitis"),
        XAmzContentSha256: sdk.String("a"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("illum"),
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

## GETDescribeDBInstances

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
    res, err := s.SDK.GETDescribeDBInstances(ctx, operations.GETDescribeDBInstancesRequest{
        Action: operations.GETDescribeDBInstancesActionEnumDescribeDbInstances,
        DBInstanceIdentifier: sdk.String("rerum"),
        Marker: sdk.String("dicta"),
        MaxRecords: sdk.Int64(297437),
        Version: operations.GETDescribeDBInstancesVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("cumque"),
        XAmzContentSha256: sdk.String("facere"),
        XAmzCredential: sdk.String("ea"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("non"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribeDBParameterGroups

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
    res, err := s.SDK.GETDescribeDBParameterGroups(ctx, operations.GETDescribeDBParameterGroupsRequest{
        Action: operations.GETDescribeDBParameterGroupsActionEnumDescribeDbParameterGroups,
        DBParameterGroupName: sdk.String("occaecati"),
        Marker: sdk.String("enim"),
        MaxRecords: sdk.Int64(881736),
        Version: operations.GETDescribeDBParameterGroupsVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("nam"),
        XAmzSecurityToken: sdk.String("id"),
        XAmzSignature: sdk.String("blanditiis"),
        XAmzSignedHeaders: sdk.String("deleniti"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribeDBParameters

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
    res, err := s.SDK.GETDescribeDBParameters(ctx, operations.GETDescribeDBParametersRequest{
        Action: operations.GETDescribeDBParametersActionEnumDescribeDbParameters,
        DBParameterGroupName: "sapiente",
        Marker: sdk.String("amet"),
        MaxRecords: sdk.Int64(643990),
        Source: sdk.String("nisi"),
        Version: operations.GETDescribeDBParametersVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("nihil"),
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

## GETDescribeDBSecurityGroups

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
    res, err := s.SDK.GETDescribeDBSecurityGroups(ctx, operations.GETDescribeDBSecurityGroupsRequest{
        Action: operations.GETDescribeDBSecurityGroupsActionEnumDescribeDbSecurityGroups,
        DBSecurityGroupName: sdk.String("distinctio"),
        Marker: sdk.String("id"),
        MaxRecords: sdk.Int64(287991),
        Version: operations.GETDescribeDBSecurityGroupsVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("labore"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("nobis"),
        XAmzSecurityToken: sdk.String("eum"),
        XAmzSignature: sdk.String("vero"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribeDBSnapshots

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
    res, err := s.SDK.GETDescribeDBSnapshots(ctx, operations.GETDescribeDBSnapshotsRequest{
        Action: operations.GETDescribeDBSnapshotsActionEnumDescribeDbSnapshots,
        DBInstanceIdentifier: sdk.String("architecto"),
        DBSnapshotIdentifier: sdk.String("magnam"),
        Marker: sdk.String("et"),
        MaxRecords: sdk.Int64(569965),
        SnapshotType: sdk.String("ullam"),
        Version: operations.GETDescribeDBSnapshotsVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("quos"),
        XAmzCredential: sdk.String("sint"),
        XAmzDate: sdk.String("accusantium"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("mollitia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribeDBSubnetGroups

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
    res, err := s.SDK.GETDescribeDBSubnetGroups(ctx, operations.GETDescribeDBSubnetGroupsRequest{
        Action: operations.GETDescribeDBSubnetGroupsActionEnumDescribeDbSubnetGroups,
        DBSubnetGroupName: sdk.String("ad"),
        Marker: sdk.String("eum"),
        MaxRecords: sdk.Int64(221262),
        Version: operations.GETDescribeDBSubnetGroupsVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("necessitatibus"),
        XAmzContentSha256: sdk.String("odit"),
        XAmzCredential: sdk.String("nemo"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("iure"),
        XAmzSignature: sdk.String("doloribus"),
        XAmzSignedHeaders: sdk.String("debitis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribeEngineDefaultParameters

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
    res, err := s.SDK.GETDescribeEngineDefaultParameters(ctx, operations.GETDescribeEngineDefaultParametersRequest{
        Action: operations.GETDescribeEngineDefaultParametersActionEnumDescribeEngineDefaultParameters,
        DBParameterGroupFamily: "eius",
        Marker: sdk.String("maxime"),
        MaxRecords: sdk.Int64(537023),
        Version: operations.GETDescribeEngineDefaultParametersVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("facilis"),
        XAmzContentSha256: sdk.String("in"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("repudiandae"),
        XAmzSignature: sdk.String("ullam"),
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

## GETDescribeEventCategories

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
    res, err := s.SDK.GETDescribeEventCategories(ctx, operations.GETDescribeEventCategoriesRequest{
        Action: operations.GETDescribeEventCategoriesActionEnumDescribeEventCategories,
        SourceType: sdk.String("nihil"),
        Version: operations.GETDescribeEventCategoriesVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("repellat"),
        XAmzContentSha256: sdk.String("quibusdam"),
        XAmzCredential: sdk.String("sed"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("pariatur"),
        XAmzSignature: sdk.String("accusantium"),
        XAmzSignedHeaders: sdk.String("consequuntur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribeEventSubscriptions

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
    res, err := s.SDK.GETDescribeEventSubscriptions(ctx, operations.GETDescribeEventSubscriptionsRequest{
        Action: operations.GETDescribeEventSubscriptionsActionEnumDescribeEventSubscriptions,
        Marker: sdk.String("praesentium"),
        MaxRecords: sdk.Int64(615560),
        SubscriptionName: sdk.String("magni"),
        Version: operations.GETDescribeEventSubscriptionsVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("sunt"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("illum"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("maxime"),
        XAmzSignature: sdk.String("ea"),
        XAmzSignedHeaders: sdk.String("excepturi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribeEvents

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETDescribeEvents(ctx, operations.GETDescribeEventsRequest{
        Action: operations.GETDescribeEventsActionEnumDescribeEvents,
        Duration: sdk.Int64(139972),
        EndTime: types.MustTimeFromString("2022-12-19T20:58:17.857Z"),
        EventCategories: []string{
            "maiores",
        },
        Marker: sdk.String("quidem"),
        MaxRecords: sdk.Int64(373291),
        SourceIdentifier: sdk.String("voluptate"),
        SourceType: operations.GETDescribeEventsSourceTypeEnumDbParameterGroup.ToPointer(),
        StartTime: types.MustTimeFromString("2022-11-25T01:41:45.601Z"),
        Version: operations.GETDescribeEventsVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("nemo"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("fugiat"),
        XAmzSignature: sdk.String("amet"),
        XAmzSignedHeaders: sdk.String("aut"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribeOptionGroupOptions

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
    res, err := s.SDK.GETDescribeOptionGroupOptions(ctx, operations.GETDescribeOptionGroupOptionsRequest{
        Action: operations.GETDescribeOptionGroupOptionsActionEnumDescribeOptionGroupOptions,
        EngineName: "cumque",
        MajorEngineVersion: sdk.String("corporis"),
        Marker: sdk.String("hic"),
        MaxRecords: sdk.Int64(729991),
        Version: operations.GETDescribeOptionGroupOptionsVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("dolores"),
        XAmzCredential: sdk.String("quis"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("dignissimos"),
        XAmzSignature: sdk.String("eaque"),
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

## GETDescribeOptionGroups

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
    res, err := s.SDK.GETDescribeOptionGroups(ctx, operations.GETDescribeOptionGroupsRequest{
        Action: operations.GETDescribeOptionGroupsActionEnumDescribeOptionGroups,
        EngineName: sdk.String("nesciunt"),
        MajorEngineVersion: sdk.String("eos"),
        Marker: sdk.String("perferendis"),
        MaxRecords: sdk.Int64(170986),
        OptionGroupName: sdk.String("minus"),
        Version: operations.GETDescribeOptionGroupsVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("quam"),
        XAmzContentSha256: sdk.String("dolor"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("nostrum"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("recusandae"),
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

## GETDescribeOrderableDBInstanceOptions

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
    res, err := s.SDK.GETDescribeOrderableDBInstanceOptions(ctx, operations.GETDescribeOrderableDBInstanceOptionsRequest{
        Action: operations.GETDescribeOrderableDBInstanceOptionsActionEnumDescribeOrderableDbInstanceOptions,
        DBInstanceClass: sdk.String("facilis"),
        Engine: "perspiciatis",
        EngineVersion: sdk.String("voluptatem"),
        LicenseModel: sdk.String("porro"),
        Marker: sdk.String("consequuntur"),
        MaxRecords: sdk.Int64(500026),
        Version: operations.GETDescribeOrderableDBInstanceOptionsVersionEnumTwoThousandAndThirteen0110,
        Vpc: sdk.Bool(false),
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("eaque"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("rerum"),
        XAmzSecurityToken: sdk.String("adipisci"),
        XAmzSignature: sdk.String("asperiores"),
        XAmzSignedHeaders: sdk.String("earum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribeReservedDBInstances

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
    res, err := s.SDK.GETDescribeReservedDBInstances(ctx, operations.GETDescribeReservedDBInstancesRequest{
        Action: operations.GETDescribeReservedDBInstancesActionEnumDescribeReservedDbInstances,
        DBInstanceClass: sdk.String("modi"),
        Duration: sdk.String("iste"),
        Marker: sdk.String("dolorum"),
        MaxRecords: sdk.Int64(535633),
        MultiAZ: sdk.Bool(false),
        OfferingType: sdk.String("pariatur"),
        ProductDescription: sdk.String("provident"),
        ReservedDBInstanceID: sdk.String("nobis"),
        ReservedDBInstancesOfferingID: sdk.String("libero"),
        Version: operations.GETDescribeReservedDBInstancesVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("quaerat"),
        XAmzCredential: sdk.String("quos"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("dolorem"),
        XAmzSignedHeaders: sdk.String("dolor"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETDescribeReservedDBInstancesOfferings

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
    res, err := s.SDK.GETDescribeReservedDBInstancesOfferings(ctx, operations.GETDescribeReservedDBInstancesOfferingsRequest{
        Action: operations.GETDescribeReservedDBInstancesOfferingsActionEnumDescribeReservedDbInstancesOfferings,
        DBInstanceClass: sdk.String("qui"),
        Duration: sdk.String("ipsum"),
        Marker: sdk.String("hic"),
        MaxRecords: sdk.Int64(569574),
        MultiAZ: sdk.Bool(false),
        OfferingType: sdk.String("cum"),
        ProductDescription: sdk.String("voluptate"),
        ReservedDBInstancesOfferingID: sdk.String("dignissimos"),
        Version: operations.GETDescribeReservedDBInstancesOfferingsVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("amet"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("numquam"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("ipsa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETListTagsForResource

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
    res, err := s.SDK.GETListTagsForResource(ctx, operations.GETListTagsForResourceRequest{
        Action: operations.GETListTagsForResourceActionEnumListTagsForResource,
        ResourceName: "iure",
        Version: operations.GETListTagsForResourceVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("odio"),
        XAmzContentSha256: sdk.String("quaerat"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("voluptas"),
        XAmzSignedHeaders: sdk.String("natus"),
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
        AllocatedStorage: sdk.Int64(179603),
        AllowMajorVersionUpgrade: sdk.Bool(false),
        ApplyImmediately: sdk.Bool(false),
        AutoMinorVersionUpgrade: sdk.Bool(false),
        BackupRetentionPeriod: sdk.Int64(542499),
        DBInstanceClass: sdk.String("sit"),
        DBInstanceIdentifier: "fugiat",
        DBParameterGroupName: sdk.String("ab"),
        DBSecurityGroups: []string{
            "dolorum",
            "iusto",
            "voluptate",
        },
        EngineVersion: sdk.String("dolorum"),
        Iops: sdk.Int64(536579),
        MasterUserPassword: sdk.String("omnis"),
        MultiAZ: sdk.Bool(false),
        NewDBInstanceIdentifier: sdk.String("necessitatibus"),
        OptionGroupName: sdk.String("distinctio"),
        PreferredBackupWindow: sdk.String("asperiores"),
        PreferredMaintenanceWindow: sdk.String("nihil"),
        Version: operations.GETModifyDBInstanceVersionEnumTwoThousandAndThirteen0110,
        VpcSecurityGroupIds: []string{
            "voluptate",
        },
        XAmzAlgorithm: sdk.String("id"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("eius"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("amet"),
        XAmzSignedHeaders: sdk.String("optio"),
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
        DBSubnetGroupDescription: sdk.String("accusamus"),
        DBSubnetGroupName: "ad",
        SubnetIds: []string{
            "suscipit",
            "deserunt",
            "provident",
            "minima",
        },
        Version: operations.GETModifyDBSubnetGroupVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("repellendus"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("similique"),
        XAmzDate: sdk.String("alias"),
        XAmzSecurityToken: sdk.String("at"),
        XAmzSignature: sdk.String("quaerat"),
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
            "quod",
            "officiis",
        },
        SnsTopicArn: sdk.String("qui"),
        SourceType: sdk.String("dolorum"),
        SubscriptionName: "a",
        Version: operations.GETModifyEventSubscriptionVersionEnumTwoThousandAndThirteen0110,
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
        BackupRetentionPeriod: sdk.Int64(730856),
        DBInstanceIdentifier: "accusamus",
        PreferredBackupWindow: sdk.String("numquam"),
        Version: operations.GETPromoteReadReplicaVersionEnumTwoThousandAndThirteen0110,
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

## GETPurchaseReservedDBInstancesOffering

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
    res, err := s.SDK.GETPurchaseReservedDBInstancesOffering(ctx, operations.GETPurchaseReservedDBInstancesOfferingRequest{
        Action: operations.GETPurchaseReservedDBInstancesOfferingActionEnumPurchaseReservedDbInstancesOffering,
        DBInstanceCount: sdk.Int64(207470),
        ReservedDBInstanceID: sdk.String("sed"),
        ReservedDBInstancesOfferingID: "vel",
        Version: operations.GETPurchaseReservedDBInstancesOfferingVersionEnumTwoThousandAndThirteen0110,
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
        DBInstanceIdentifier: "cupiditate",
        ForceFailover: sdk.Bool(false),
        Version: operations.GETRebootDBInstanceVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("maxime"),
        XAmzContentSha256: sdk.String("pariatur"),
        XAmzCredential: sdk.String("soluta"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("incidunt"),
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
        SourceIdentifier: "aspernatur",
        SubscriptionName: "dolores",
        Version: operations.GETRemoveSourceIdentifierFromSubscriptionVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("quam"),
        XAmzSecurityToken: sdk.String("molestias"),
        XAmzSignature: sdk.String("temporibus"),
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
        ResourceName: "neque",
        TagKeys: []string{
            "magni",
        },
        Version: operations.GETRemoveTagsFromResourceVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("odio"),
        XAmzContentSha256: sdk.String("sunt"),
        XAmzCredential: sdk.String("ullam"),
        XAmzDate: sdk.String("nam"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("voluptatem"),
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

## GETRestoreDBInstanceFromDBSnapshot

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
    res, err := s.SDK.GETRestoreDBInstanceFromDBSnapshot(ctx, operations.GETRestoreDBInstanceFromDBSnapshotRequest{
        Action: operations.GETRestoreDBInstanceFromDBSnapshotActionEnumRestoreDbInstanceFromDbSnapshot,
        AutoMinorVersionUpgrade: sdk.Bool(false),
        AvailabilityZone: sdk.String("soluta"),
        DBInstanceClass: sdk.String("nobis"),
        DBInstanceIdentifier: "et",
        DBName: sdk.String("saepe"),
        DBSnapshotIdentifier: "ipsum",
        DBSubnetGroupName: sdk.String("veritatis"),
        Engine: sdk.String("nobis"),
        Iops: sdk.Int64(552193),
        LicenseModel: sdk.String("tempore"),
        MultiAZ: sdk.Bool(false),
        OptionGroupName: sdk.String("cupiditate"),
        Port: sdk.Int64(45614),
        PubliclyAccessible: sdk.Bool(false),
        Version: operations.GETRestoreDBInstanceFromDBSnapshotVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("dolorem"),
        XAmzCredential: sdk.String("dolore"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("adipisci"),
        XAmzSignature: sdk.String("dolorum"),
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

## GETRestoreDBInstanceToPointInTime

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETRestoreDBInstanceToPointInTime(ctx, operations.GETRestoreDBInstanceToPointInTimeRequest{
        Action: operations.GETRestoreDBInstanceToPointInTimeActionEnumRestoreDbInstanceToPointInTime,
        AutoMinorVersionUpgrade: sdk.Bool(false),
        AvailabilityZone: sdk.String("quae"),
        DBInstanceClass: sdk.String("aut"),
        DBName: sdk.String("quas"),
        DBSubnetGroupName: sdk.String("itaque"),
        Engine: sdk.String("consequatur"),
        Iops: sdk.Int64(669917),
        LicenseModel: sdk.String("repellendus"),
        MultiAZ: sdk.Bool(false),
        OptionGroupName: sdk.String("porro"),
        Port: sdk.Int64(984330),
        PubliclyAccessible: sdk.Bool(false),
        RestoreTime: types.MustTimeFromString("2022-04-19T05:23:08.152Z"),
        SourceDBInstanceIdentifier: "cupiditate",
        TargetDBInstanceIdentifier: "qui",
        UseLatestRestorableTime: sdk.Bool(false),
        Version: operations.GETRestoreDBInstanceToPointInTimeVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("quae"),
        XAmzContentSha256: sdk.String("laudantium"),
        XAmzCredential: sdk.String("odio"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("quisquam"),
        XAmzSignedHeaders: sdk.String("vero"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
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
        Cidrip: sdk.String("omnis"),
        DBSecurityGroupName: "quis",
        Ec2SecurityGroupID: sdk.String("ipsum"),
        Ec2SecurityGroupName: sdk.String("delectus"),
        Ec2SecurityGroupOwnerID: sdk.String("voluptate"),
        Version: operations.GETRevokeDBSecurityGroupIngressVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("consectetur"),
        XAmzContentSha256: sdk.String("vero"),
        XAmzCredential: sdk.String("tenetur"),
        XAmzDate: sdk.String("dignissimos"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("quod"),
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
        RequestBody: []byte("odio"),
        Version: operations.POSTAddSourceIdentifierToSubscriptionVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("similique"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("ducimus"),
        XAmzSecurityToken: sdk.String("dolore"),
        XAmzSignature: sdk.String("quibusdam"),
        XAmzSignedHeaders: sdk.String("illum"),
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
        RequestBody: []byte("sequi"),
        Version: operations.POSTAddTagsToResourceVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("impedit"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("exercitationem"),
        XAmzSignature: sdk.String("nulla"),
        XAmzSignedHeaders: sdk.String("fugit"),
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
        RequestBody: []byte("porro"),
        Version: operations.POSTAuthorizeDBSecurityGroupIngressVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("doloribus"),
        XAmzCredential: sdk.String("iusto"),
        XAmzDate: sdk.String("eligendi"),
        XAmzSecurityToken: sdk.String("ducimus"),
        XAmzSignature: sdk.String("alias"),
        XAmzSignedHeaders: sdk.String("officia"),
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
        RequestBody: []byte("tempora"),
        Version: operations.POSTCopyDBSnapshotVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("ea"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("vel"),
        XAmzSecurityToken: sdk.String("possimus"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("ratione"),
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
        RequestBody: []byte("ex"),
        Version: operations.POSTCreateDBInstanceVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("laudantium"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("ex"),
        XAmzSignedHeaders: sdk.String("nulla"),
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
        RequestBody: []byte("excepturi"),
        Version: operations.POSTCreateDBInstanceReadReplicaVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("nostrum"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("quisquam"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("ea"),
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
        RequestBody: []byte("corporis"),
        Version: operations.POSTCreateDBParameterGroupVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("veniam"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("inventore"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("quo"),
        XAmzSignedHeaders: sdk.String("consectetur"),
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
        RequestBody: []byte("recusandae"),
        Version: operations.POSTCreateDBSecurityGroupVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("aspernatur"),
        XAmzContentSha256: sdk.String("minima"),
        XAmzCredential: sdk.String("eaque"),
        XAmzDate: sdk.String("a"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("aut"),
        XAmzSignedHeaders: sdk.String("aut"),
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
        RequestBody: []byte("deleniti"),
        Version: operations.POSTCreateDBSnapshotVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("impedit"),
        XAmzContentSha256: sdk.String("aliquam"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("inventore"),
        XAmzSignature: sdk.String("non"),
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
        RequestBody: []byte("dolorum"),
        Version: operations.POSTCreateDBSubnetGroupVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("placeat"),
        XAmzCredential: sdk.String("velit"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("autem"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("quas"),
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
        RequestBody: []byte("assumenda"),
        Version: operations.POSTCreateEventSubscriptionVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("nulla"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("libero"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("numquam"),
        XAmzSignedHeaders: sdk.String("explicabo"),
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
        RequestBody: []byte("provident"),
        Version: operations.POSTCreateOptionGroupVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("odio"),
        XAmzSecurityToken: sdk.String("eius"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("esse"),
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
        RequestBody: []byte("rem"),
        Version: operations.POSTDeleteDBInstanceVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("fuga"),
        XAmzContentSha256: sdk.String("reprehenderit"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("fugiat"),
        XAmzSecurityToken: sdk.String("ut"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("suscipit"),
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
        RequestBody: []byte("assumenda"),
        Version: operations.POSTDeleteDBParameterGroupVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("eos"),
        XAmzContentSha256: sdk.String("praesentium"),
        XAmzCredential: sdk.String("quisquam"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("id"),
        XAmzSignedHeaders: sdk.String("quidem"),
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
        RequestBody: []byte("neque"),
        Version: operations.POSTDeleteDBSecurityGroupVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("quo"),
        XAmzContentSha256: sdk.String("illum"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("fuga"),
        XAmzSecurityToken: sdk.String("eius"),
        XAmzSignature: sdk.String("eos"),
        XAmzSignedHeaders: sdk.String("voluptas"),
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
        Version: operations.POSTDeleteDBSnapshotVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("cupiditate"),
        XAmzContentSha256: sdk.String("consequatur"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("sequi"),
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
        RequestBody: []byte("quo"),
        Version: operations.POSTDeleteDBSubnetGroupVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("aperiam"),
        XAmzDate: sdk.String("distinctio"),
        XAmzSecurityToken: sdk.String("quod"),
        XAmzSignature: sdk.String("dignissimos"),
        XAmzSignedHeaders: sdk.String("inventore"),
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
        RequestBody: []byte("nihil"),
        Version: operations.POSTDeleteEventSubscriptionVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("aliquam"),
        XAmzDate: sdk.String("odio"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("commodi"),
        XAmzSignedHeaders: sdk.String("sapiente"),
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
        RequestBody: []byte("dolores"),
        Version: operations.POSTDeleteOptionGroupVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("accusantium"),
        XAmzDate: sdk.String("porro"),
        XAmzSecurityToken: sdk.String("eum"),
        XAmzSignature: sdk.String("quas"),
        XAmzSignedHeaders: sdk.String("praesentium"),
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
        Marker: sdk.String("consequuntur"),
        MaxRecords: sdk.String("deleniti"),
        RequestBody: []byte("fugit"),
        Version: operations.POSTDescribeDBEngineVersionsVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("fuga"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("incidunt"),
        XAmzDate: sdk.String("atque"),
        XAmzSecurityToken: sdk.String("explicabo"),
        XAmzSignature: sdk.String("minima"),
        XAmzSignedHeaders: sdk.String("nisi"),
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
        Marker: sdk.String("fugit"),
        MaxRecords: sdk.String("sapiente"),
        RequestBody: []byte("consequuntur"),
        Version: operations.POSTDescribeDBInstancesVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("ratione"),
        XAmzContentSha256: sdk.String("explicabo"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("atque"),
        XAmzSignature: sdk.String("et"),
        XAmzSignedHeaders: sdk.String("esse"),
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
        Marker: sdk.String("eveniet"),
        MaxRecords: sdk.String("accusamus"),
        RequestBody: []byte("veritatis"),
        Version: operations.POSTDescribeDBParameterGroupsVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("quod"),
        XAmzCredential: sdk.String("nam"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("quasi"),
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
        Marker: sdk.String("vel"),
        MaxRecords: sdk.String("harum"),
        RequestBody: []byte("molestiae"),
        Version: operations.POSTDescribeDBParametersVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("rerum"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("minima"),
        XAmzDate: sdk.String("distinctio"),
        XAmzSecurityToken: sdk.String("eligendi"),
        XAmzSignature: sdk.String("sit"),
        XAmzSignedHeaders: sdk.String("culpa"),
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
        Marker: sdk.String("tempore"),
        MaxRecords: sdk.String("adipisci"),
        RequestBody: []byte("cumque"),
        Version: operations.POSTDescribeDBSecurityGroupsVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("consequatur"),
        XAmzCredential: sdk.String("minus"),
        XAmzDate: sdk.String("quaerat"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("consectetur"),
        XAmzSignedHeaders: sdk.String("esse"),
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
        Marker: sdk.String("blanditiis"),
        MaxRecords: sdk.String("provident"),
        RequestBody: []byte("a"),
        Version: operations.POSTDescribeDBSnapshotsVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("nulla"),
        XAmzContentSha256: sdk.String("quas"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("a"),
        XAmzSignature: sdk.String("error"),
        XAmzSignedHeaders: sdk.String("sint"),
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
        Marker: sdk.String("pariatur"),
        MaxRecords: sdk.String("possimus"),
        RequestBody: []byte("quia"),
        Version: operations.POSTDescribeDBSubnetGroupsVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("eveniet"),
        XAmzContentSha256: sdk.String("asperiores"),
        XAmzCredential: sdk.String("facere"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("similique"),
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
        Marker: sdk.String("culpa"),
        MaxRecords: sdk.String("aliquid"),
        RequestBody: []byte("tenetur"),
        Version: operations.POSTDescribeEngineDefaultParametersVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("quae"),
        XAmzContentSha256: sdk.String("earum"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("eius"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("illum"),
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
        RequestBody: []byte("soluta"),
        Version: operations.POSTDescribeEventCategoriesVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("accusantium"),
        XAmzContentSha256: sdk.String("aliquam"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("ullam"),
        XAmzSignature: sdk.String("reprehenderit"),
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
        Marker: sdk.String("nisi"),
        MaxRecords: sdk.String("aut"),
        RequestBody: []byte("voluptatum"),
        Version: operations.POSTDescribeEventSubscriptionsVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("quibusdam"),
        XAmzCredential: sdk.String("ex"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("itaque"),
        XAmzSignature: sdk.String("dolorum"),
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
        Marker: sdk.String("omnis"),
        MaxRecords: sdk.String("tenetur"),
        RequestBody: []byte("quasi"),
        Version: operations.POSTDescribeEventsVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("at"),
        XAmzContentSha256: sdk.String("et"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("minima"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("consectetur"),
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
        Marker: sdk.String("adipisci"),
        MaxRecords: sdk.String("iste"),
        RequestBody: []byte("temporibus"),
        Version: operations.POSTDescribeOptionGroupOptionsVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("accusantium"),
        XAmzContentSha256: sdk.String("rem"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("laudantium"),
        XAmzSecurityToken: sdk.String("eum"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("ab"),
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
        Marker: sdk.String("corrupti"),
        MaxRecords: sdk.String("non"),
        RequestBody: []byte("voluptatem"),
        Version: operations.POSTDescribeOptionGroupsVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("numquam"),
        XAmzDate: sdk.String("impedit"),
        XAmzSecurityToken: sdk.String("explicabo"),
        XAmzSignature: sdk.String("voluptas"),
        XAmzSignedHeaders: sdk.String("aut"),
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
        Marker: sdk.String("dignissimos"),
        MaxRecords: sdk.String("dicta"),
        RequestBody: []byte("maiores"),
        Version: operations.POSTDescribeOrderableDBInstanceOptionsVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("velit"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("asperiores"),
        XAmzSignature: sdk.String("aperiam"),
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
        Marker: sdk.String("quaerat"),
        MaxRecords: sdk.String("consequuntur"),
        RequestBody: []byte("repellendus"),
        Version: operations.POSTDescribeReservedDBInstancesVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("officia"),
        XAmzContentSha256: sdk.String("maxime"),
        XAmzCredential: sdk.String("dignissimos"),
        XAmzDate: sdk.String("officia"),
        XAmzSecurityToken: sdk.String("asperiores"),
        XAmzSignature: sdk.String("nemo"),
        XAmzSignedHeaders: sdk.String("quae"),
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
        Marker: sdk.String("quaerat"),
        MaxRecords: sdk.String("porro"),
        RequestBody: []byte("quod"),
        Version: operations.POSTDescribeReservedDBInstancesOfferingsVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("labore"),
        XAmzContentSha256: sdk.String("ab"),
        XAmzCredential: sdk.String("adipisci"),
        XAmzDate: sdk.String("fuga"),
        XAmzSecurityToken: sdk.String("id"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("velit"),
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
        RequestBody: []byte("culpa"),
        Version: operations.POSTListTagsForResourceVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("est"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("fugiat"),
        XAmzSecurityToken: sdk.String("vel"),
        XAmzSignature: sdk.String("ducimus"),
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
        RequestBody: []byte("vel"),
        Version: operations.POSTModifyDBInstanceVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("labore"),
        XAmzContentSha256: sdk.String("possimus"),
        XAmzCredential: sdk.String("facilis"),
        XAmzDate: sdk.String("cum"),
        XAmzSecurityToken: sdk.String("commodi"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("corporis"),
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
        RequestBody: []byte("reiciendis"),
        Version: operations.POSTModifyDBParameterGroupVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("assumenda"),
        XAmzContentSha256: sdk.String("nemo"),
        XAmzCredential: sdk.String("recusandae"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("aperiam"),
        XAmzSignature: sdk.String("cum"),
        XAmzSignedHeaders: sdk.String("consectetur"),
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
        RequestBody: []byte("in"),
        Version: operations.POSTModifyDBSubnetGroupVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("exercitationem"),
        XAmzContentSha256: sdk.String("earum"),
        XAmzCredential: sdk.String("facere"),
        XAmzDate: sdk.String("numquam"),
        XAmzSecurityToken: sdk.String("doloribus"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
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
        RequestBody: []byte("quidem"),
        Version: operations.POSTModifyEventSubscriptionVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("necessitatibus"),
        XAmzCredential: sdk.String("dolore"),
        XAmzDate: sdk.String("sunt"),
        XAmzSecurityToken: sdk.String("asperiores"),
        XAmzSignature: sdk.String("adipisci"),
        XAmzSignedHeaders: sdk.String("non"),
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
        RequestBody: []byte("amet"),
        Version: operations.POSTModifyOptionGroupVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("beatae"),
        XAmzContentSha256: sdk.String("dignissimos"),
        XAmzCredential: sdk.String("a"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("consectetur"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("harum"),
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
        RequestBody: []byte("laboriosam"),
        Version: operations.POSTPromoteReadReplicaVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("voluptates"),
        XAmzCredential: sdk.String("libero"),
        XAmzDate: sdk.String("vitae"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("similique"),
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
        RequestBody: []byte("aspernatur"),
        Version: operations.POSTPurchaseReservedDBInstancesOfferingVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("voluptas"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("voluptas"),
        XAmzDate: sdk.String("minima"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("adipisci"),
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
        RequestBody: []byte("minus"),
        Version: operations.POSTRebootDBInstanceVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("dolores"),
        XAmzContentSha256: sdk.String("blanditiis"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("dolore"),
        XAmzSecurityToken: sdk.String("aliquam"),
        XAmzSignature: sdk.String("officiis"),
        XAmzSignedHeaders: sdk.String("temporibus"),
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
        RequestBody: []byte("ullam"),
        Version: operations.POSTRemoveSourceIdentifierFromSubscriptionVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("adipisci"),
        XAmzContentSha256: sdk.String("cum"),
        XAmzCredential: sdk.String("blanditiis"),
        XAmzDate: sdk.String("quas"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("nesciunt"),
        XAmzSignedHeaders: sdk.String("culpa"),
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
        RequestBody: []byte("corrupti"),
        Version: operations.POSTRemoveTagsFromResourceVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("exercitationem"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("sit"),
        XAmzSignedHeaders: sdk.String("rerum"),
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
        RequestBody: []byte("sed"),
        Version: operations.POSTResetDBParameterGroupVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("explicabo"),
        XAmzCredential: sdk.String("asperiores"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("expedita"),
        XAmzSignedHeaders: sdk.String("ab"),
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
        RequestBody: []byte("iste"),
        Version: operations.POSTRestoreDBInstanceFromDBSnapshotVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("dolore"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("sed"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("commodi"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("explicabo"),
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
        RequestBody: []byte("voluptas"),
        Version: operations.POSTRestoreDBInstanceToPointInTimeVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("unde"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("debitis"),
        XAmzSignature: sdk.String("illo"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
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
        RequestBody: []byte("perferendis"),
        Version: operations.POSTRevokeDBSecurityGroupIngressVersionEnumTwoThousandAndThirteen0110,
        XAmzAlgorithm: sdk.String("corrupti"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("incidunt"),
        XAmzDate: sdk.String("sed"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("eius"),
        XAmzSignedHeaders: sdk.String("necessitatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
