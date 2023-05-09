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
* [GETDescribeDBLogFiles](#getdescribedblogfiles)
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
* [GETDownloadDBLogFilePortion](#getdownloaddblogfileportion)
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
        Version: operations.GETAddSourceIdentifierToSubscriptionVersionEnumTwoThousandAndThirteen0212,
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
        Version: operations.GETAuthorizeDBSecurityGroupIngressVersionEnumTwoThousandAndThirteen0212,
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
        Version: operations.GETCopyDBSnapshotVersionEnumTwoThousandAndThirteen0212,
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
        Version: operations.GETCreateDBInstanceVersionEnumTwoThousandAndThirteen0212,
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
        Version: operations.GETCreateDBInstanceReadReplicaVersionEnumTwoThousandAndThirteen0212,
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
        Version: operations.GETCreateDBParameterGroupVersionEnumTwoThousandAndThirteen0212,
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
        Version: operations.GETCreateDBSecurityGroupVersionEnumTwoThousandAndThirteen0212,
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
        Version: operations.GETCreateDBSnapshotVersionEnumTwoThousandAndThirteen0212,
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
        Version: operations.GETCreateDBSubnetGroupVersionEnumTwoThousandAndThirteen0212,
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
        Version: operations.GETCreateEventSubscriptionVersionEnumTwoThousandAndThirteen0212,
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
        Version: operations.GETCreateOptionGroupVersionEnumTwoThousandAndThirteen0212,
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
        Version: operations.GETDeleteDBInstanceVersionEnumTwoThousandAndThirteen0212,
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
        Version: operations.GETDeleteDBParameterGroupVersionEnumTwoThousandAndThirteen0212,
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
        Version: operations.GETDeleteDBSecurityGroupVersionEnumTwoThousandAndThirteen0212,
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
        Version: operations.GETDeleteDBSnapshotVersionEnumTwoThousandAndThirteen0212,
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
        Version: operations.GETDeleteDBSubnetGroupVersionEnumTwoThousandAndThirteen0212,
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
        Version: operations.GETDeleteEventSubscriptionVersionEnumTwoThousandAndThirteen0212,
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
        Version: operations.GETDeleteOptionGroupVersionEnumTwoThousandAndThirteen0212,
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
        Version: operations.GETDescribeDBEngineVersionsVersionEnumTwoThousandAndThirteen0212,
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
        Version: operations.GETDescribeDBInstancesVersionEnumTwoThousandAndThirteen0212,
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

## GETDescribeDBLogFiles

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
    res, err := s.SDK.GETDescribeDBLogFiles(ctx, operations.GETDescribeDBLogFilesRequest{
        Action: operations.GETDescribeDBLogFilesActionEnumDescribeDbLogFiles,
        DBInstanceIdentifier: "occaecati",
        FileLastWritten: sdk.Int64(313218),
        FileSize: sdk.Int64(881736),
        FilenameContains: sdk.String("delectus"),
        Marker: sdk.String("quidem"),
        MaxRecords: sdk.Int64(588465),
        Version: operations.GETDescribeDBLogFilesVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("nam"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("blanditiis"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("amet"),
        XAmzSignedHeaders: sdk.String("deserunt"),
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
        DBParameterGroupName: sdk.String("nisi"),
        Marker: sdk.String("vel"),
        MaxRecords: sdk.Int64(618809),
        Version: operations.GETDescribeDBParameterGroupsVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("nihil"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("id"),
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
        DBParameterGroupName: "labore",
        Marker: sdk.String("labore"),
        MaxRecords: sdk.Int64(383462),
        Source: sdk.String("natus"),
        Version: operations.GETDescribeDBParametersVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("eum"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("magnam"),
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
        DBSecurityGroupName: sdk.String("excepturi"),
        Marker: sdk.String("ullam"),
        MaxRecords: sdk.Int64(590873),
        Version: operations.GETDescribeDBSecurityGroupsVersionEnumTwoThousandAndThirteen0212,
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
        DBInstanceIdentifier: sdk.String("eum"),
        DBSnapshotIdentifier: sdk.String("dolor"),
        Marker: sdk.String("necessitatibus"),
        MaxRecords: sdk.Int64(141264),
        SnapshotType: sdk.String("nemo"),
        Version: operations.GETDescribeDBSnapshotsVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("doloribus"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("eius"),
        XAmzSignature: sdk.String("maxime"),
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
        DBSubnetGroupName: sdk.String("facilis"),
        Marker: sdk.String("in"),
        MaxRecords: sdk.Int64(100226),
        Version: operations.GETDescribeDBSubnetGroupsVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("repudiandae"),
        XAmzCredential: sdk.String("ullam"),
        XAmzDate: sdk.String("expedita"),
        XAmzSecurityToken: sdk.String("nihil"),
        XAmzSignature: sdk.String("repellat"),
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
        DBParameterGroupFamily: "sed",
        Marker: sdk.String("saepe"),
        MaxRecords: sdk.Int64(868126),
        Version: operations.GETDescribeEngineDefaultParametersVersionEnumTwoThousandAndThirteen0212,
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
        SourceType: sdk.String("illum"),
        Version: operations.GETDescribeEventCategoriesVersionEnumTwoThousandAndThirteen0212,
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
        Marker: sdk.String("ab"),
        MaxRecords: sdk.Int64(982575),
        SubscriptionName: sdk.String("quidem"),
        Version: operations.GETDescribeEventSubscriptionsVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("autem"),
        XAmzDate: sdk.String("nam"),
        XAmzSecurityToken: sdk.String("eaque"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("nemo"),
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
        Duration: sdk.Int64(975522),
        EndTime: types.MustTimeFromString("2022-02-22T15:09:45.631Z"),
        EventCategories: []string{
            "aut",
        },
        Marker: sdk.String("cumque"),
        MaxRecords: sdk.Int64(359978),
        SourceIdentifier: sdk.String("hic"),
        SourceType: operations.GETDescribeEventsSourceTypeEnumDbSecurityGroup.ToPointer(),
        StartTime: types.MustTimeFromString("2022-08-28T17:02:52.151Z"),
        Version: operations.GETDescribeEventsVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("quis"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("dignissimos"),
        XAmzDate: sdk.String("eaque"),
        XAmzSecurityToken: sdk.String("quis"),
        XAmzSignature: sdk.String("nesciunt"),
        XAmzSignedHeaders: sdk.String("eos"),
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
        EngineName: "perferendis",
        MajorEngineVersion: sdk.String("dolores"),
        Marker: sdk.String("minus"),
        MaxRecords: sdk.Int64(463451),
        Version: operations.GETDescribeOptionGroupOptionsVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("vero"),
        XAmzCredential: sdk.String("nostrum"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("recusandae"),
        XAmzSignature: sdk.String("omnis"),
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
        EngineName: sdk.String("perspiciatis"),
        MajorEngineVersion: sdk.String("voluptatem"),
        Marker: sdk.String("porro"),
        MaxRecords: sdk.Int64(164694),
        OptionGroupName: sdk.String("blanditiis"),
        Version: operations.GETDescribeOptionGroupsVersionEnumTwoThousandAndThirteen0212,
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
        DBInstanceClass: sdk.String("modi"),
        Engine: "iste",
        EngineVersion: sdk.String("dolorum"),
        LicenseModel: sdk.String("deleniti"),
        Marker: sdk.String("pariatur"),
        MaxRecords: sdk.Int64(589910),
        Version: operations.GETDescribeOrderableDBInstanceOptionsVersionEnumTwoThousandAndThirteen0212,
        Vpc: sdk.Bool(false),
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("libero"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("quaerat"),
        XAmzSecurityToken: sdk.String("quos"),
        XAmzSignature: sdk.String("aliquid"),
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
        DBInstanceClass: sdk.String("dolorem"),
        Duration: sdk.String("dolor"),
        Marker: sdk.String("qui"),
        MaxRecords: sdk.Int64(218749),
        MultiAZ: sdk.Bool(false),
        OfferingType: sdk.String("hic"),
        ProductDescription: sdk.String("excepturi"),
        ReservedDBInstanceID: sdk.String("cum"),
        ReservedDBInstancesOfferingID: sdk.String("voluptate"),
        Version: operations.GETDescribeReservedDBInstancesVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("dignissimos"),
        XAmzContentSha256: sdk.String("reiciendis"),
        XAmzCredential: sdk.String("amet"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("numquam"),
        XAmzSignature: sdk.String("veritatis"),
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
        DBInstanceClass: sdk.String("ipsa"),
        Duration: sdk.String("iure"),
        Marker: sdk.String("odio"),
        MaxRecords: sdk.Int64(311796),
        MultiAZ: sdk.Bool(false),
        OfferingType: sdk.String("accusamus"),
        ProductDescription: sdk.String("quidem"),
        ReservedDBInstancesOfferingID: sdk.String("voluptatibus"),
        Version: operations.GETDescribeReservedDBInstancesOfferingsVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("voluptas"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("eos"),
        XAmzDate: sdk.String("atque"),
        XAmzSecurityToken: sdk.String("sit"),
        XAmzSignature: sdk.String("fugiat"),
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
        DBInstanceIdentifier: "soluta",
        LogFileName: "dolorum",
        Marker: sdk.String("iusto"),
        NumberOfLines: sdk.Int64(453697),
        Version: operations.GETDownloadDBLogFilePortionVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("necessitatibus"),
        XAmzSecurityToken: sdk.String("distinctio"),
        XAmzSignature: sdk.String("asperiores"),
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
        ResourceName: "ipsum",
        Version: operations.GETListTagsForResourceVersionEnumTwoThousandAndThirteen0212,
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
        AllocatedStorage: sdk.Int64(758379),
        AllowMajorVersionUpgrade: sdk.Bool(false),
        ApplyImmediately: sdk.Bool(false),
        AutoMinorVersionUpgrade: sdk.Bool(false),
        BackupRetentionPeriod: sdk.Int64(881586),
        DBInstanceClass: sdk.String("ad"),
        DBInstanceIdentifier: "saepe",
        DBParameterGroupName: sdk.String("suscipit"),
        DBSecurityGroups: []string{
            "provident",
            "minima",
            "repellendus",
        },
        EngineVersion: sdk.String("totam"),
        Iops: sdk.Int64(628982),
        MasterUserPassword: sdk.String("alias"),
        MultiAZ: sdk.Bool(false),
        NewDBInstanceIdentifier: sdk.String("at"),
        OptionGroupName: sdk.String("quaerat"),
        PreferredBackupWindow: sdk.String("tempora"),
        PreferredMaintenanceWindow: sdk.String("vel"),
        Version: operations.GETModifyDBInstanceVersionEnumTwoThousandAndThirteen0212,
        VpcSecurityGroupIds: []string{
            "officiis",
            "qui",
            "dolorum",
            "a",
        },
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
        DBSubnetGroupDescription: sdk.String("tempore"),
        DBSubnetGroupName: "accusamus",
        SubnetIds: []string{
            "enim",
            "dolorem",
        },
        Version: operations.GETModifyDBSubnetGroupVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("sit"),
        XAmzSecurityToken: sdk.String("expedita"),
        XAmzSignature: sdk.String("neque"),
        XAmzSignedHeaders: sdk.String("sed"),
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
            "libero",
            "voluptas",
        },
        SnsTopicArn: sdk.String("deserunt"),
        SourceType: sdk.String("quam"),
        SubscriptionName: "ipsum",
        Version: operations.GETModifyEventSubscriptionVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("incidunt"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("cupiditate"),
        XAmzDate: sdk.String("maxime"),
        XAmzSecurityToken: sdk.String("pariatur"),
        XAmzSignature: sdk.String("soluta"),
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
        BackupRetentionPeriod: sdk.Int64(674848),
        DBInstanceIdentifier: "totam",
        PreferredBackupWindow: sdk.String("incidunt"),
        Version: operations.GETPromoteReadReplicaVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("aspernatur"),
        XAmzContentSha256: sdk.String("dolores"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("quam"),
        XAmzSignedHeaders: sdk.String("molestias"),
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
        DBInstanceCount: sdk.Int64(840429),
        ReservedDBInstanceID: sdk.String("qui"),
        ReservedDBInstancesOfferingID: "neque",
        Version: operations.GETPurchaseReservedDBInstancesOfferingVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("fugit"),
        XAmzContentSha256: sdk.String("magni"),
        XAmzCredential: sdk.String("odio"),
        XAmzDate: sdk.String("sunt"),
        XAmzSecurityToken: sdk.String("ullam"),
        XAmzSignature: sdk.String("nam"),
        XAmzSignedHeaders: sdk.String("hic"),
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
        DBInstanceIdentifier: "voluptatem",
        ForceFailover: sdk.Bool(false),
        Version: operations.GETRebootDBInstanceVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("cumque"),
        XAmzContentSha256: sdk.String("soluta"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("et"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("veritatis"),
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
        SourceIdentifier: "nobis",
        SubscriptionName: "quos",
        Version: operations.GETRemoveSourceIdentifierFromSubscriptionVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("tempore"),
        XAmzContentSha256: sdk.String("cupiditate"),
        XAmzCredential: sdk.String("aperiam"),
        XAmzDate: sdk.String("delectus"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("dolore"),
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
        ResourceName: "adipisci",
        TagKeys: []string{
            "architecto",
            "quae",
            "aut",
        },
        Version: operations.GETRemoveTagsFromResourceVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("quas"),
        XAmzContentSha256: sdk.String("itaque"),
        XAmzCredential: sdk.String("consequatur"),
        XAmzDate: sdk.String("est"),
        XAmzSecurityToken: sdk.String("repellendus"),
        XAmzSignature: sdk.String("porro"),
        XAmzSignedHeaders: sdk.String("doloribus"),
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
        AvailabilityZone: sdk.String("ut"),
        DBInstanceClass: sdk.String("facilis"),
        DBInstanceIdentifier: "cupiditate",
        DBName: sdk.String("qui"),
        DBSnapshotIdentifier: "quae",
        DBSubnetGroupName: sdk.String("laudantium"),
        Engine: sdk.String("odio"),
        Iops: sdk.Int64(580447),
        LicenseModel: sdk.String("voluptatibus"),
        MultiAZ: sdk.Bool(false),
        OptionGroupName: sdk.String("quisquam"),
        Port: sdk.Int64(876506),
        PubliclyAccessible: sdk.Bool(false),
        Version: operations.GETRestoreDBInstanceFromDBSnapshotVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("quis"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("delectus"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("consectetur"),
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
        AvailabilityZone: sdk.String("tenetur"),
        DBInstanceClass: sdk.String("dignissimos"),
        DBName: sdk.String("hic"),
        DBSubnetGroupName: sdk.String("distinctio"),
        Engine: sdk.String("quod"),
        Iops: sdk.Int64(486160),
        LicenseModel: sdk.String("similique"),
        MultiAZ: sdk.Bool(false),
        OptionGroupName: sdk.String("facilis"),
        Port: sdk.Int64(874288),
        PubliclyAccessible: sdk.Bool(false),
        RestoreTime: types.MustTimeFromString("2022-09-16T01:08:31.616Z"),
        SourceDBInstanceIdentifier: "quibusdam",
        TargetDBInstanceIdentifier: "illum",
        UseLatestRestorableTime: sdk.Bool(false),
        Version: operations.GETRestoreDBInstanceToPointInTimeVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("sequi"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("impedit"),
        XAmzDate: sdk.String("aut"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("exercitationem"),
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
        Cidrip: sdk.String("fugit"),
        DBSecurityGroupName: "porro",
        Ec2SecurityGroupID: sdk.String("maiores"),
        Ec2SecurityGroupName: sdk.String("doloribus"),
        Ec2SecurityGroupOwnerID: sdk.String("iusto"),
        Version: operations.GETRevokeDBSecurityGroupIngressVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("eligendi"),
        XAmzContentSha256: sdk.String("ducimus"),
        XAmzCredential: sdk.String("alias"),
        XAmzDate: sdk.String("officia"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("ipsam"),
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
        RequestBody: []byte("aspernatur"),
        Version: operations.POSTAddSourceIdentifierToSubscriptionVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("possimus"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("ratione"),
        XAmzSecurityToken: sdk.String("ex"),
        XAmzSignature: sdk.String("laudantium"),
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
        RequestBody: []byte("dolor"),
        Version: operations.POSTAddTagsToResourceVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("ex"),
        XAmzDate: sdk.String("nulla"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("nostrum"),
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
        RequestBody: []byte("sapiente"),
        Version: operations.POSTAuthorizeDBSecurityGroupIngressVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("quisquam"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("ea"),
        XAmzDate: sdk.String("impedit"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("veniam"),
        XAmzSignedHeaders: sdk.String("aliquid"),
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
        RequestBody: []byte("inventore"),
        Version: operations.POSTCopyDBSnapshotVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("ea"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("consectetur"),
        XAmzSecurityToken: sdk.String("recusandae"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("minima"),
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
        RequestBody: []byte("eaque"),
        Version: operations.POSTCreateDBInstanceVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("a"),
        XAmzContentSha256: sdk.String("libero"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("aut"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("aliquam"),
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
        RequestBody: []byte("fugit"),
        Version: operations.POSTCreateDBInstanceReadReplicaVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("inventore"),
        XAmzCredential: sdk.String("non"),
        XAmzDate: sdk.String("et"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("placeat"),
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
        RequestBody: []byte("velit"),
        Version: operations.POSTCreateDBParameterGroupVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("eum"),
        XAmzContentSha256: sdk.String("autem"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("quas"),
        XAmzSecurityToken: sdk.String("assumenda"),
        XAmzSignature: sdk.String("nulla"),
        XAmzSignedHeaders: sdk.String("voluptas"),
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
        RequestBody: []byte("libero"),
        Version: operations.POSTCreateDBSecurityGroupVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("numquam"),
        XAmzDate: sdk.String("explicabo"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("molestiae"),
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
        RequestBody: []byte("magnam"),
        Version: operations.POSTCreateDBSnapshotVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("odio"),
        XAmzContentSha256: sdk.String("eius"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("rem"),
        XAmzSignature: sdk.String("fuga"),
        XAmzSignedHeaders: sdk.String("reprehenderit"),
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
        RequestBody: []byte("quidem"),
        Version: operations.POSTCreateDBSubnetGroupVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("fugiat"),
        XAmzContentSha256: sdk.String("ut"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("assumenda"),
        XAmzSignature: sdk.String("eos"),
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
        RequestBody: []byte("quisquam"),
        Version: operations.POSTCreateEventSubscriptionVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("veritatis"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("id"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("neque"),
        XAmzSignature: sdk.String("quo"),
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
        RequestBody: []byte("quo"),
        Version: operations.POSTCreateOptionGroupVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("fuga"),
        XAmzContentSha256: sdk.String("eius"),
        XAmzCredential: sdk.String("eos"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("ab"),
        XAmzSignature: sdk.String("cupiditate"),
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
        RequestBody: []byte("tempora"),
        Version: operations.POSTDeleteDBInstanceVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("debitis"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("sequi"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("recusandae"),
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
        RequestBody: []byte("aperiam"),
        Version: operations.POSTDeleteDBParameterGroupVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("quod"),
        XAmzCredential: sdk.String("dignissimos"),
        XAmzDate: sdk.String("inventore"),
        XAmzSecurityToken: sdk.String("nihil"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("accusamus"),
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
        RequestBody: []byte("aliquam"),
        Version: operations.POSTDeleteDBSecurityGroupVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("odio"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("commodi"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("dolores"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("molestiae"),
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
        RequestBody: []byte("accusantium"),
        Version: operations.POSTDeleteDBSnapshotVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("porro"),
        XAmzContentSha256: sdk.String("eum"),
        XAmzCredential: sdk.String("quas"),
        XAmzDate: sdk.String("praesentium"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("fugit"),
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
        RequestBody: []byte("fuga"),
        Version: operations.POSTDeleteDBSubnetGroupVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("incidunt"),
        XAmzCredential: sdk.String("atque"),
        XAmzDate: sdk.String("explicabo"),
        XAmzSecurityToken: sdk.String("minima"),
        XAmzSignature: sdk.String("nisi"),
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
        RequestBody: []byte("sapiente"),
        Version: operations.POSTDeleteEventSubscriptionVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("ratione"),
        XAmzCredential: sdk.String("explicabo"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("atque"),
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
        RequestBody: []byte("esse"),
        Version: operations.POSTDeleteOptionGroupVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("eveniet"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("veritatis"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("quod"),
        XAmzSignature: sdk.String("nam"),
        XAmzSignedHeaders: sdk.String("vero"),
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
        Marker: sdk.String("aliquid"),
        MaxRecords: sdk.String("quasi"),
        RequestBody: []byte("saepe"),
        Version: operations.POSTDescribeDBEngineVersionsVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("harum"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("rerum"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("minima"),
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
        Marker: sdk.String("eligendi"),
        MaxRecords: sdk.String("sit"),
        RequestBody: []byte("culpa"),
        Version: operations.POSTDescribeDBInstancesVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("tempore"),
        XAmzContentSha256: sdk.String("adipisci"),
        XAmzCredential: sdk.String("cumque"),
        XAmzDate: sdk.String("consequuntur"),
        XAmzSecurityToken: sdk.String("consequatur"),
        XAmzSignature: sdk.String("minus"),
        XAmzSignedHeaders: sdk.String("quaerat"),
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
        Marker: sdk.String("sapiente"),
        MaxRecords: sdk.String("consectetur"),
        RequestBody: []byte("esse"),
        Version: operations.POSTDescribeDBLogFilesVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("blanditiis"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("a"),
        XAmzDate: sdk.String("nulla"),
        XAmzSecurityToken: sdk.String("quas"),
        XAmzSignature: sdk.String("esse"),
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
        Marker: sdk.String("a"),
        MaxRecords: sdk.String("error"),
        RequestBody: []byte("sint"),
        Version: operations.POSTDescribeDBParameterGroupsVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("possimus"),
        XAmzCredential: sdk.String("quia"),
        XAmzDate: sdk.String("eveniet"),
        XAmzSecurityToken: sdk.String("asperiores"),
        XAmzSignature: sdk.String("facere"),
        XAmzSignedHeaders: sdk.String("veritatis"),
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
        Marker: sdk.String("consequuntur"),
        MaxRecords: sdk.String("quasi"),
        RequestBody: []byte("similique"),
        Version: operations.POSTDescribeDBParametersVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("culpa"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("tenetur"),
        XAmzDate: sdk.String("quae"),
        XAmzSecurityToken: sdk.String("earum"),
        XAmzSignature: sdk.String("vel"),
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
        Marker: sdk.String("eius"),
        MaxRecords: sdk.String("libero"),
        RequestBody: []byte("illum"),
        Version: operations.POSTDescribeDBSecurityGroupsVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("soluta"),
        XAmzContentSha256: sdk.String("accusantium"),
        XAmzCredential: sdk.String("aliquam"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("ullam"),
        XAmzSignedHeaders: sdk.String("reprehenderit"),
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
        Marker: sdk.String("ullam"),
        MaxRecords: sdk.String("nisi"),
        RequestBody: []byte("aut"),
        Version: operations.POSTDescribeDBSnapshotsVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("voluptatum"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("ex"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("itaque"),
        XAmzSignedHeaders: sdk.String("dolorum"),
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
        Marker: sdk.String("architecto"),
        MaxRecords: sdk.String("omnis"),
        RequestBody: []byte("tenetur"),
        Version: operations.POSTDescribeDBSubnetGroupsVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("at"),
        XAmzCredential: sdk.String("et"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("minima"),
        XAmzSignedHeaders: sdk.String("veritatis"),
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
        Marker: sdk.String("consectetur"),
        MaxRecords: sdk.String("adipisci"),
        RequestBody: []byte("iste"),
        Version: operations.POSTDescribeEngineDefaultParametersVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("temporibus"),
        XAmzContentSha256: sdk.String("accusantium"),
        XAmzCredential: sdk.String("rem"),
        XAmzDate: sdk.String("aut"),
        XAmzSecurityToken: sdk.String("laudantium"),
        XAmzSignature: sdk.String("eum"),
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
        RequestBody: []byte("ab"),
        Version: operations.POSTDescribeEventCategoriesVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("corrupti"),
        XAmzContentSha256: sdk.String("non"),
        XAmzCredential: sdk.String("voluptatem"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("numquam"),
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
        Marker: sdk.String("explicabo"),
        MaxRecords: sdk.String("voluptas"),
        RequestBody: []byte("aut"),
        Version: operations.POSTDescribeEventSubscriptionsVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("dignissimos"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("velit"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("voluptas"),
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
        Marker: sdk.String("asperiores"),
        MaxRecords: sdk.String("aperiam"),
        RequestBody: []byte("ea"),
        Version: operations.POSTDescribeEventsVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("quaerat"),
        XAmzContentSha256: sdk.String("consequuntur"),
        XAmzCredential: sdk.String("repellendus"),
        XAmzDate: sdk.String("officia"),
        XAmzSecurityToken: sdk.String("maxime"),
        XAmzSignature: sdk.String("dignissimos"),
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
        Marker: sdk.String("asperiores"),
        MaxRecords: sdk.String("nemo"),
        RequestBody: []byte("quae"),
        Version: operations.POSTDescribeOptionGroupOptionsVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("quaerat"),
        XAmzContentSha256: sdk.String("porro"),
        XAmzCredential: sdk.String("quod"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("ab"),
        XAmzSignature: sdk.String("adipisci"),
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
        Marker: sdk.String("id"),
        MaxRecords: sdk.String("suscipit"),
        RequestBody: []byte("velit"),
        Version: operations.POSTDescribeOptionGroupsVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("culpa"),
        XAmzContentSha256: sdk.String("est"),
        XAmzCredential: sdk.String("recusandae"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("fugiat"),
        XAmzSignature: sdk.String("vel"),
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
        Marker: sdk.String("quos"),
        MaxRecords: sdk.String("vel"),
        RequestBody: []byte("labore"),
        Version: operations.POSTDescribeOrderableDBInstanceOptionsVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("possimus"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("cum"),
        XAmzDate: sdk.String("commodi"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("corporis"),
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
        Marker: sdk.String("assumenda"),
        MaxRecords: sdk.String("nemo"),
        RequestBody: []byte("recusandae"),
        Version: operations.POSTDescribeReservedDBInstancesVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("aperiam"),
        XAmzCredential: sdk.String("cum"),
        XAmzDate: sdk.String("consectetur"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("exercitationem"),
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
        Marker: sdk.String("facere"),
        MaxRecords: sdk.String("numquam"),
        RequestBody: []byte("doloribus"),
        Version: operations.POSTDescribeReservedDBInstancesOfferingsVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("reiciendis"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("dolore"),
        XAmzSignedHeaders: sdk.String("sunt"),
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
        Marker: sdk.String("asperiores"),
        NumberOfLines: sdk.String("adipisci"),
        RequestBody: []byte("non"),
        Version: operations.POSTDownloadDBLogFilePortionVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("amet"),
        XAmzContentSha256: sdk.String("beatae"),
        XAmzCredential: sdk.String("dignissimos"),
        XAmzDate: sdk.String("a"),
        XAmzSecurityToken: sdk.String("debitis"),
        XAmzSignature: sdk.String("consectetur"),
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
        RequestBody: []byte("harum"),
        Version: operations.POSTListTagsForResourceVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("laboriosam"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("voluptates"),
        XAmzDate: sdk.String("libero"),
        XAmzSecurityToken: sdk.String("vitae"),
        XAmzSignature: sdk.String("accusamus"),
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
        RequestBody: []byte("tempora"),
        Version: operations.POSTModifyDBInstanceVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("aspernatur"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("voluptas"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("minima"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("dolorum"),
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
        RequestBody: []byte("adipisci"),
        Version: operations.POSTModifyDBParameterGroupVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("minus"),
        XAmzContentSha256: sdk.String("dolores"),
        XAmzCredential: sdk.String("blanditiis"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("dolore"),
        XAmzSignature: sdk.String("aliquam"),
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
        RequestBody: []byte("temporibus"),
        Version: operations.POSTModifyDBSubnetGroupVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("ullam"),
        XAmzContentSha256: sdk.String("adipisci"),
        XAmzCredential: sdk.String("cum"),
        XAmzDate: sdk.String("blanditiis"),
        XAmzSecurityToken: sdk.String("quas"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("nesciunt"),
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
        RequestBody: []byte("culpa"),
        Version: operations.POSTModifyEventSubscriptionVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("corrupti"),
        XAmzContentSha256: sdk.String("pariatur"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("exercitationem"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("sit"),
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
        RequestBody: []byte("rerum"),
        Version: operations.POSTModifyOptionGroupVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("sed"),
        XAmzContentSha256: sdk.String("reiciendis"),
        XAmzCredential: sdk.String("explicabo"),
        XAmzDate: sdk.String("asperiores"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("voluptate"),
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
        RequestBody: []byte("ab"),
        Version: operations.POSTPromoteReadReplicaVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("iste"),
        XAmzContentSha256: sdk.String("dolore"),
        XAmzCredential: sdk.String("laborum"),
        XAmzDate: sdk.String("sed"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("commodi"),
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
        RequestBody: []byte("explicabo"),
        Version: operations.POSTPurchaseReservedDBInstancesOfferingVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("voluptas"),
        XAmzContentSha256: sdk.String("unde"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("illo"),
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
        RequestBody: []byte("reiciendis"),
        Version: operations.POSTRebootDBInstanceVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("corrupti"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("incidunt"),
        XAmzSecurityToken: sdk.String("sed"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("eius"),
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
        RequestBody: []byte("necessitatibus"),
        Version: operations.POSTRemoveSourceIdentifierFromSubscriptionVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("ea"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("quos"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("tempora"),
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
        RequestBody: []byte("voluptate"),
        Version: operations.POSTRemoveTagsFromResourceVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("ex"),
        XAmzCredential: sdk.String("sit"),
        XAmzDate: sdk.String("non"),
        XAmzSecurityToken: sdk.String("officiis"),
        XAmzSignature: sdk.String("praesentium"),
        XAmzSignedHeaders: sdk.String("facilis"),
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
        RequestBody: []byte("quaerat"),
        Version: operations.POSTResetDBParameterGroupVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("incidunt"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("debitis"),
        XAmzDate: sdk.String("rem"),
        XAmzSecurityToken: sdk.String("sit"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("error"),
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
        RequestBody: []byte("veniam"),
        Version: operations.POSTRestoreDBInstanceFromDBSnapshotVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("minima"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("nulla"),
        XAmzSecurityToken: sdk.String("magni"),
        XAmzSignature: sdk.String("aperiam"),
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
        RequestBody: []byte("numquam"),
        Version: operations.POSTRestoreDBInstanceToPointInTimeVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("veniam"),
        XAmzContentSha256: sdk.String("in"),
        XAmzCredential: sdk.String("officiis"),
        XAmzDate: sdk.String("beatae"),
        XAmzSecurityToken: sdk.String("laudantium"),
        XAmzSignature: sdk.String("exercitationem"),
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
        RequestBody: []byte("cum"),
        Version: operations.POSTRevokeDBSecurityGroupIngressVersionEnumTwoThousandAndThirteen0212,
        XAmzAlgorithm: sdk.String("laboriosam"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("voluptatum"),
        XAmzDate: sdk.String("error"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("expedita"),
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
