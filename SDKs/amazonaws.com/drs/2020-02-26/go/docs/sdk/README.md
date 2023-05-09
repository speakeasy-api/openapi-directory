# SDK

## Overview

AWS Elastic Disaster Recovery Service.

Amazon Web Services documentation
<https://docs.aws.amazon.com/drs/>
### Available Operations

* [CreateExtendedSourceServer](#createextendedsourceserver) - Create an extended source server in the target Account based on the source server in staging account.
* [CreateLaunchConfigurationTemplate](#createlaunchconfigurationtemplate) - Creates a new Launch Configuration Template.
* [CreateReplicationConfigurationTemplate](#createreplicationconfigurationtemplate) - Creates a new ReplicationConfigurationTemplate.
* [DeleteJob](#deletejob) - Deletes a single Job by ID.
* [DeleteLaunchConfigurationTemplate](#deletelaunchconfigurationtemplate) - Deletes a single Launch Configuration Template by ID.
* [DeleteRecoveryInstance](#deleterecoveryinstance) - Deletes a single Recovery Instance by ID. This deletes the Recovery Instance resource from Elastic Disaster Recovery. The Recovery Instance must be disconnected first in order to delete it.
* [DeleteReplicationConfigurationTemplate](#deletereplicationconfigurationtemplate) - Deletes a single Replication Configuration Template by ID
* [DeleteSourceServer](#deletesourceserver) - Deletes a single Source Server by ID. The Source Server must be disconnected first.
* [DescribeJobLogItems](#describejoblogitems) - Retrieves a detailed Job log with pagination.
* [DescribeJobs](#describejobs) - Returns a list of Jobs. Use the JobsID and fromDate and toDate filters to limit which jobs are returned. The response is sorted by creationDataTime - latest date first. Jobs are created by the StartRecovery, TerminateRecoveryInstances and StartFailbackLaunch APIs. Jobs are also created by DiagnosticLaunch and TerminateDiagnosticInstances, which are APIs available only to *Support* and only used in response to relevant support tickets.
* [DescribeLaunchConfigurationTemplates](#describelaunchconfigurationtemplates) - Lists all Launch Configuration Templates, filtered by Launch Configuration Template IDs
* [DescribeRecoveryInstances](#describerecoveryinstances) - Lists all Recovery Instances or multiple Recovery Instances by ID.
* [DescribeRecoverySnapshots](#describerecoverysnapshots) - Lists all Recovery Snapshots for a single Source Server.
* [DescribeReplicationConfigurationTemplates](#describereplicationconfigurationtemplates) - Lists all ReplicationConfigurationTemplates, filtered by Source Server IDs.
* [DescribeSourceServers](#describesourceservers) - Lists all Source Servers or multiple Source Servers filtered by ID.
* [DisconnectRecoveryInstance](#disconnectrecoveryinstance) - Disconnect a Recovery Instance from Elastic Disaster Recovery. Data replication is stopped immediately. All AWS resources created by Elastic Disaster Recovery for enabling the replication of the Recovery Instance will be terminated / deleted within 90 minutes. If the agent on the Recovery Instance has not been prevented from communicating with the Elastic Disaster Recovery service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the Recovery Instance will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.
* [DisconnectSourceServer](#disconnectsourceserver) - Disconnects a specific Source Server from Elastic Disaster Recovery. Data replication is stopped immediately. All AWS resources created by Elastic Disaster Recovery for enabling the replication of the Source Server will be terminated / deleted within 90 minutes. You cannot disconnect a Source Server if it has a Recovery Instance. If the agent on the Source Server has not been prevented from communicating with the Elastic Disaster Recovery service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.
* [GetFailbackReplicationConfiguration](#getfailbackreplicationconfiguration) - Lists all Failback ReplicationConfigurations, filtered by Recovery Instance ID.
* [GetLaunchConfiguration](#getlaunchconfiguration) - Gets a LaunchConfiguration, filtered by Source Server IDs.
* [GetReplicationConfiguration](#getreplicationconfiguration) - Gets a ReplicationConfiguration, filtered by Source Server ID.
* [InitializeService](#initializeservice) - Initialize Elastic Disaster Recovery.
* [ListExtensibleSourceServers](#listextensiblesourceservers) - Returns a list of source servers on a staging account that are extensible, which means that: a. The source server is not already extended into this Account. b. The source server on the Account we’re reading from is not an extension of another source server. 
* [ListStagingAccounts](#liststagingaccounts) - Returns an array of staging accounts for existing extended source servers.
* [ListTagsForResource](#listtagsforresource) - List all tags for your Elastic Disaster Recovery resources.
* [~~RetryDataReplication~~](#retrydatareplication) - WARNING: RetryDataReplication is deprecated. Causes the data replication initiation sequence to begin immediately upon next Handshake for the specified Source Server ID, regardless of when the previous initiation started. This command will work only if the Source Server is stalled or is in a DISCONNECTED or STOPPED state.  :warning: **Deprecated**
* [ReverseReplication](#reversereplication) - Start replication to origin / target region - applies only to protected instances that originated in EC2. For recovery instances on target region - starts replication back to origin region. For failback instances on origin region - starts replication to target region to re-protect them. 
* [StartFailbackLaunch](#startfailbacklaunch) - Initiates a Job for launching the machine that is being failed back to from the specified Recovery Instance. This will run conversion on the failback client and will reboot your machine, thus completing the failback process.
* [StartRecovery](#startrecovery) - Launches Recovery Instances for the specified Source Servers. For each Source Server you may choose a point in time snapshot to launch from, or use an on demand snapshot.
* [StartReplication](#startreplication) - Starts replication for a stopped Source Server. This action would make the Source Server protected again and restart billing for it.
* [StopFailback](#stopfailback) - Stops the failback process for a specified Recovery Instance. This changes the Failback State of the Recovery Instance back to FAILBACK_NOT_STARTED.
* [StopReplication](#stopreplication) - Stops replication for a Source Server. This action would make the Source Server unprotected, delete its existing snapshots and stop billing for it.
* [TagResource](#tagresource) - Adds or overwrites only the specified tags for the specified Elastic Disaster Recovery resource or resources. When you specify an existing tag key, the value is overwritten with the new value. Each resource can have a maximum of 50 tags. Each tag consists of a key and optional value.
* [TerminateRecoveryInstances](#terminaterecoveryinstances) - Initiates a Job for terminating the EC2 resources associated with the specified Recovery Instances, and then will delete the Recovery Instances from the Elastic Disaster Recovery service.
* [UntagResource](#untagresource) - Deletes the specified set of tags from the specified set of Elastic Disaster Recovery resources.
* [UpdateFailbackReplicationConfiguration](#updatefailbackreplicationconfiguration) - Allows you to update the failback replication configuration of a Recovery Instance by ID.
* [UpdateLaunchConfiguration](#updatelaunchconfiguration) - Updates a LaunchConfiguration by Source Server ID.
* [UpdateLaunchConfigurationTemplate](#updatelaunchconfigurationtemplate) - Updates an existing Launch Configuration Template by ID.
* [UpdateReplicationConfiguration](#updatereplicationconfiguration) - Allows you to update a ReplicationConfiguration by Source Server ID.
* [UpdateReplicationConfigurationTemplate](#updatereplicationconfigurationtemplate) - Updates a ReplicationConfigurationTemplate by ID.

## CreateExtendedSourceServer

Create an extended source server in the target Account based on the source server in staging account.

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
    res, err := s.SDK.CreateExtendedSourceServer(ctx, operations.CreateExtendedSourceServerRequest{
        RequestBody: operations.CreateExtendedSourceServerRequestBody{
            SourceServerArn: "ipsa",
            Tags: map[string]string{
                "tempora": "suscipit",
                "molestiae": "minus",
                "placeat": "voluptatum",
                "iusto": "excepturi",
            },
        },
        XAmzAlgorithm: sdk.String("nisi"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("temporibus"),
        XAmzDate: sdk.String("ab"),
        XAmzSecurityToken: sdk.String("quis"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("deserunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateExtendedSourceServerResponse != nil {
        // handle response
    }
}
```

## CreateLaunchConfigurationTemplate

Creates a new Launch Configuration Template.

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
    res, err := s.SDK.CreateLaunchConfigurationTemplate(ctx, operations.CreateLaunchConfigurationTemplateRequest{
        RequestBody: operations.CreateLaunchConfigurationTemplateRequestBody{
            CopyPrivateIP: sdk.Bool(false),
            CopyTags: sdk.Bool(false),
            LaunchDisposition: operations.CreateLaunchConfigurationTemplateRequestBodyLaunchDispositionEnumStopped.ToPointer(),
            Licensing: &operations.CreateLaunchConfigurationTemplateRequestBodyLicensing{
                OsByol: sdk.Bool(false),
            },
            Tags: map[string]string{
                "repellendus": "sapiente",
                "quo": "odit",
            },
            TargetInstanceTypeRightSizingMethod: operations.CreateLaunchConfigurationTemplateRequestBodyTargetInstanceTypeRightSizingMethodEnumBasic.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("at"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("quod"),
        XAmzSecurityToken: sdk.String("quod"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("totam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateLaunchConfigurationTemplateResponse != nil {
        // handle response
    }
}
```

## CreateReplicationConfigurationTemplate

Creates a new ReplicationConfigurationTemplate.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateReplicationConfigurationTemplate(ctx, operations.CreateReplicationConfigurationTemplateRequest{
        RequestBody: operations.CreateReplicationConfigurationTemplateRequestBody{
            AssociateDefaultSecurityGroup: false,
            AutoReplicateNewDisks: sdk.Bool(false),
            BandwidthThrottling: 780529,
            CreatePublicIP: false,
            DataPlaneRouting: operations.CreateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnumPublicIP,
            DefaultLargeStagingDiskType: operations.CreateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnumGp2,
            EbsEncryption: operations.CreateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnumCustom,
            EbsEncryptionKeyArn: sdk.String("officia"),
            PitPolicy: []shared.PITPolicyRule{
                shared.PITPolicyRule{
                    Enabled: sdk.Bool(false),
                    Interval: 143353,
                    RetentionDuration: 537373,
                    RuleID: sdk.Int64(944669),
                    Units: shared.PITPolicyRuleUnitsEnumDay,
                },
                shared.PITPolicyRule{
                    Enabled: sdk.Bool(false),
                    Interval: 521848,
                    RetentionDuration: 105907,
                    RuleID: sdk.Int64(414662),
                    Units: shared.PITPolicyRuleUnitsEnumHour,
                },
                shared.PITPolicyRule{
                    Enabled: sdk.Bool(false),
                    Interval: 264555,
                    RetentionDuration: 186332,
                    RuleID: sdk.Int64(774234),
                    Units: shared.PITPolicyRuleUnitsEnumDay,
                },
            },
            ReplicationServerInstanceType: "esse",
            ReplicationServersSecurityGroupsIDs: []string{
                "excepturi",
            },
            StagingAreaSubnetID: "aspernatur",
            StagingAreaTags: map[string]string{
                "ad": "natus",
            },
            Tags: map[string]string{
                "iste": "dolor",
            },
            UseDedicatedReplicationServer: false,
        },
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("laboriosam"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("fuga"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("corporis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReplicationConfigurationTemplate != nil {
        // handle response
    }
}
```

## DeleteJob

Deletes a single Job by ID.

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
    res, err := s.SDK.DeleteJob(ctx, operations.DeleteJobRequest{
        RequestBody: operations.DeleteJobRequestBody{
            JobID: "iste",
        },
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("est"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteJobResponse != nil {
        // handle response
    }
}
```

## DeleteLaunchConfigurationTemplate

Deletes a single Launch Configuration Template by ID.

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
    res, err := s.SDK.DeleteLaunchConfigurationTemplate(ctx, operations.DeleteLaunchConfigurationTemplateRequest{
        RequestBody: operations.DeleteLaunchConfigurationTemplateRequestBody{
            LaunchConfigurationTemplateID: "mollitia",
        },
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("dolores"),
        XAmzCredential: sdk.String("dolorem"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("explicabo"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("enim"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteLaunchConfigurationTemplateResponse != nil {
        // handle response
    }
}
```

## DeleteRecoveryInstance

Deletes a single Recovery Instance by ID. This deletes the Recovery Instance resource from Elastic Disaster Recovery. The Recovery Instance must be disconnected first in order to delete it.

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
    res, err := s.SDK.DeleteRecoveryInstance(ctx, operations.DeleteRecoveryInstanceRequest{
        RequestBody: operations.DeleteRecoveryInstanceRequestBody{
            RecoveryInstanceID: "omnis",
        },
        XAmzAlgorithm: sdk.String("nemo"),
        XAmzContentSha256: sdk.String("minima"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("accusantium"),
        XAmzSecurityToken: sdk.String("iure"),
        XAmzSignature: sdk.String("culpa"),
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

## DeleteReplicationConfigurationTemplate

Deletes a single Replication Configuration Template by ID

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
    res, err := s.SDK.DeleteReplicationConfigurationTemplate(ctx, operations.DeleteReplicationConfigurationTemplateRequest{
        RequestBody: operations.DeleteReplicationConfigurationTemplateRequestBody{
            ReplicationConfigurationTemplateID: "sapiente",
        },
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("dolorem"),
        XAmzDate: sdk.String("culpa"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("repellat"),
        XAmzSignedHeaders: sdk.String("mollitia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteReplicationConfigurationTemplateResponse != nil {
        // handle response
    }
}
```

## DeleteSourceServer

Deletes a single Source Server by ID. The Source Server must be disconnected first.

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
    res, err := s.SDK.DeleteSourceServer(ctx, operations.DeleteSourceServerRequest{
        RequestBody: operations.DeleteSourceServerRequestBody{
            SourceServerID: "occaecati",
        },
        XAmzAlgorithm: sdk.String("numquam"),
        XAmzContentSha256: sdk.String("commodi"),
        XAmzCredential: sdk.String("quam"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("velit"),
        XAmzSignature: sdk.String("error"),
        XAmzSignedHeaders: sdk.String("quia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteSourceServerResponse != nil {
        // handle response
    }
}
```

## DescribeJobLogItems

Retrieves a detailed Job log with pagination.

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
    res, err := s.SDK.DescribeJobLogItems(ctx, operations.DescribeJobLogItemsRequest{
        RequestBody: operations.DescribeJobLogItemsRequestBody{
            JobID: "quis",
            MaxResults: sdk.Int64(110375),
            NextToken: sdk.String("laborum"),
        },
        XAmzAlgorithm: sdk.String("animi"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("odit"),
        XAmzDate: sdk.String("quo"),
        XAmzSecurityToken: sdk.String("sequi"),
        XAmzSignature: sdk.String("tenetur"),
        XAmzSignedHeaders: sdk.String("ipsam"),
        MaxResults: sdk.String("id"),
        NextToken: sdk.String("possimus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeJobLogItemsResponse != nil {
        // handle response
    }
}
```

## DescribeJobs

Returns a list of Jobs. Use the JobsID and fromDate and toDate filters to limit which jobs are returned. The response is sorted by creationDataTime - latest date first. Jobs are created by the StartRecovery, TerminateRecoveryInstances and StartFailbackLaunch APIs. Jobs are also created by DiagnosticLaunch and TerminateDiagnosticInstances, which are APIs available only to *Support* and only used in response to relevant support tickets.

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
    res, err := s.SDK.DescribeJobs(ctx, operations.DescribeJobsRequest{
        RequestBody: operations.DescribeJobsRequestBody{
            Filters: &operations.DescribeJobsRequestBodyFilters{
                FromDate: sdk.String("aut"),
                JobIDs: []string{
                    "error",
                },
                ToDate: sdk.String("temporibus"),
            },
            MaxResults: sdk.Int64(673660),
            NextToken: sdk.String("quasi"),
        },
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("nihil"),
        XAmzSecurityToken: sdk.String("praesentium"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("ipsa"),
        MaxResults: sdk.String("omnis"),
        NextToken: sdk.String("voluptate"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeJobsResponse != nil {
        // handle response
    }
}
```

## DescribeLaunchConfigurationTemplates

Lists all Launch Configuration Templates, filtered by Launch Configuration Template IDs

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
    res, err := s.SDK.DescribeLaunchConfigurationTemplates(ctx, operations.DescribeLaunchConfigurationTemplatesRequest{
        RequestBody: operations.DescribeLaunchConfigurationTemplatesRequestBody{
            LaunchConfigurationTemplateIDs: []string{
                "perferendis",
                "doloremque",
                "reprehenderit",
            },
            MaxResults: sdk.Int64(282807),
            NextToken: sdk.String("maiores"),
        },
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("corporis"),
        XAmzCredential: sdk.String("dolore"),
        XAmzDate: sdk.String("iusto"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("harum"),
        XAmzSignedHeaders: sdk.String("enim"),
        MaxResults: sdk.String("accusamus"),
        NextToken: sdk.String("commodi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeLaunchConfigurationTemplatesResponse != nil {
        // handle response
    }
}
```

## DescribeRecoveryInstances

Lists all Recovery Instances or multiple Recovery Instances by ID.

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
    res, err := s.SDK.DescribeRecoveryInstances(ctx, operations.DescribeRecoveryInstancesRequest{
        RequestBody: operations.DescribeRecoveryInstancesRequestBody{
            Filters: &operations.DescribeRecoveryInstancesRequestBodyFilters{
                RecoveryInstanceIDs: []string{
                    "quae",
                    "ipsum",
                    "quidem",
                    "molestias",
                },
                SourceServerIDs: []string{
                    "pariatur",
                    "modi",
                    "praesentium",
                },
            },
            MaxResults: sdk.Int64(523248),
            NextToken: sdk.String("voluptates"),
        },
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("repudiandae"),
        XAmzCredential: sdk.String("sint"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("itaque"),
        XAmzSignature: sdk.String("incidunt"),
        XAmzSignedHeaders: sdk.String("enim"),
        MaxResults: sdk.String("consequatur"),
        NextToken: sdk.String("est"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeRecoveryInstancesResponse != nil {
        // handle response
    }
}
```

## DescribeRecoverySnapshots

Lists all Recovery Snapshots for a single Source Server.

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
    res, err := s.SDK.DescribeRecoverySnapshots(ctx, operations.DescribeRecoverySnapshotsRequest{
        RequestBody: operations.DescribeRecoverySnapshotsRequestBody{
            Filters: &operations.DescribeRecoverySnapshotsRequestBodyFilters{
                FromDateTime: sdk.String("quibusdam"),
                ToDateTime: sdk.String("explicabo"),
            },
            MaxResults: sdk.Int64(647174),
            NextToken: sdk.String("distinctio"),
            Order: operations.DescribeRecoverySnapshotsRequestBodyOrderEnumDesc.ToPointer(),
            SourceServerID: "labore",
        },
        XAmzAlgorithm: sdk.String("modi"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("cupiditate"),
        XAmzSecurityToken: sdk.String("quos"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("magni"),
        MaxResults: sdk.String("assumenda"),
        NextToken: sdk.String("ipsam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeRecoverySnapshotsResponse != nil {
        // handle response
    }
}
```

## DescribeReplicationConfigurationTemplates

Lists all ReplicationConfigurationTemplates, filtered by Source Server IDs.

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
    res, err := s.SDK.DescribeReplicationConfigurationTemplates(ctx, operations.DescribeReplicationConfigurationTemplatesRequest{
        RequestBody: operations.DescribeReplicationConfigurationTemplatesRequestBody{
            MaxResults: sdk.Int64(4695),
            NextToken: sdk.String("fugit"),
            ReplicationConfigurationTemplateIDs: []string{
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
        MaxResults: sdk.String("aliquid"),
        NextToken: sdk.String("provident"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeReplicationConfigurationTemplatesResponse != nil {
        // handle response
    }
}
```

## DescribeSourceServers

Lists all Source Servers or multiple Source Servers filtered by ID.

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
    res, err := s.SDK.DescribeSourceServers(ctx, operations.DescribeSourceServersRequest{
        RequestBody: operations.DescribeSourceServersRequestBody{
            Filters: &operations.DescribeSourceServersRequestBodyFilters{
                HardwareID: sdk.String("necessitatibus"),
                SourceServerIDs: []string{
                    "officia",
                    "dolor",
                    "debitis",
                },
                StagingAccountIDs: []string{
                    "dolorum",
                    "in",
                    "in",
                    "illum",
                },
            },
            MaxResults: sdk.Int64(978571),
            NextToken: sdk.String("rerum"),
        },
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("cumque"),
        XAmzDate: sdk.String("facere"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("laborum"),
        MaxResults: sdk.String("accusamus"),
        NextToken: sdk.String("non"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeSourceServersResponse != nil {
        // handle response
    }
}
```

## DisconnectRecoveryInstance

Disconnect a Recovery Instance from Elastic Disaster Recovery. Data replication is stopped immediately. All AWS resources created by Elastic Disaster Recovery for enabling the replication of the Recovery Instance will be terminated / deleted within 90 minutes. If the agent on the Recovery Instance has not been prevented from communicating with the Elastic Disaster Recovery service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the Recovery Instance will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.

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
    res, err := s.SDK.DisconnectRecoveryInstance(ctx, operations.DisconnectRecoveryInstanceRequest{
        RequestBody: operations.DisconnectRecoveryInstanceRequestBody{
            RecoveryInstanceID: "occaecati",
        },
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("nam"),
        XAmzSignedHeaders: sdk.String("id"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DisconnectSourceServer

Disconnects a specific Source Server from Elastic Disaster Recovery. Data replication is stopped immediately. All AWS resources created by Elastic Disaster Recovery for enabling the replication of the Source Server will be terminated / deleted within 90 minutes. You cannot disconnect a Source Server if it has a Recovery Instance. If the agent on the Source Server has not been prevented from communicating with the Elastic Disaster Recovery service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.

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
    res, err := s.SDK.DisconnectSourceServer(ctx, operations.DisconnectSourceServerRequest{
        RequestBody: operations.DisconnectSourceServerRequestBody{
            SourceServerID: "blanditiis",
        },
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("amet"),
        XAmzDate: sdk.String("deserunt"),
        XAmzSecurityToken: sdk.String("nisi"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("natus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SourceServer != nil {
        // handle response
    }
}
```

## GetFailbackReplicationConfiguration

Lists all Failback ReplicationConfigurations, filtered by Recovery Instance ID.

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
    res, err := s.SDK.GetFailbackReplicationConfiguration(ctx, operations.GetFailbackReplicationConfigurationRequest{
        RequestBody: operations.GetFailbackReplicationConfigurationRequestBody{
            RecoveryInstanceID: "omnis",
        },
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("distinctio"),
        XAmzSignature: sdk.String("id"),
        XAmzSignedHeaders: sdk.String("labore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetFailbackReplicationConfigurationResponse != nil {
        // handle response
    }
}
```

## GetLaunchConfiguration

Gets a LaunchConfiguration, filtered by Source Server IDs.

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
    res, err := s.SDK.GetLaunchConfiguration(ctx, operations.GetLaunchConfigurationRequest{
        RequestBody: operations.GetLaunchConfigurationRequestBody{
            SourceServerID: "labore",
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("architecto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LaunchConfiguration != nil {
        // handle response
    }
}
```

## GetReplicationConfiguration

Gets a ReplicationConfiguration, filtered by Source Server ID.

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
    res, err := s.SDK.GetReplicationConfiguration(ctx, operations.GetReplicationConfigurationRequest{
        RequestBody: operations.GetReplicationConfigurationRequestBody{
            SourceServerID: "magnam",
        },
        XAmzAlgorithm: sdk.String("et"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("ullam"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("quos"),
        XAmzSignature: sdk.String("sint"),
        XAmzSignedHeaders: sdk.String("accusantium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReplicationConfiguration != nil {
        // handle response
    }
}
```

## InitializeService

Initialize Elastic Disaster Recovery.

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
    res, err := s.SDK.InitializeService(ctx, operations.InitializeServiceRequest{
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("reiciendis"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("ad"),
        XAmzSecurityToken: sdk.String("eum"),
        XAmzSignature: sdk.String("dolor"),
        XAmzSignedHeaders: sdk.String("necessitatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InitializeServiceResponse != nil {
        // handle response
    }
}
```

## ListExtensibleSourceServers

Returns a list of source servers on a staging account that are extensible, which means that: a. The source server is not already extended into this Account. b. The source server on the Account we’re reading from is not an extension of another source server. 

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
    res, err := s.SDK.ListExtensibleSourceServers(ctx, operations.ListExtensibleSourceServersRequest{
        RequestBody: operations.ListExtensibleSourceServersRequestBody{
            MaxResults: sdk.Int64(141264),
            NextToken: sdk.String("nemo"),
            StagingAccountID: "quasi",
        },
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("doloribus"),
        XAmzCredential: sdk.String("debitis"),
        XAmzDate: sdk.String("eius"),
        XAmzSecurityToken: sdk.String("maxime"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("facilis"),
        MaxResults: sdk.String("in"),
        NextToken: sdk.String("architecto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListExtensibleSourceServersResponse != nil {
        // handle response
    }
}
```

## ListStagingAccounts

Returns an array of staging accounts for existing extended source servers.

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
    res, err := s.SDK.ListStagingAccounts(ctx, operations.ListStagingAccountsRequest{
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("repudiandae"),
        XAmzCredential: sdk.String("ullam"),
        XAmzDate: sdk.String("expedita"),
        XAmzSecurityToken: sdk.String("nihil"),
        XAmzSignature: sdk.String("repellat"),
        XAmzSignedHeaders: sdk.String("quibusdam"),
        MaxResults: sdk.Int64(149448),
        NextToken: sdk.String("saepe"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListStagingAccountsResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

List all tags for your Elastic Disaster Recovery resources.

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
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("accusantium"),
        XAmzCredential: sdk.String("consequuntur"),
        XAmzDate: sdk.String("praesentium"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("magni"),
        XAmzSignedHeaders: sdk.String("sunt"),
        ResourceArn: "quo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## ~~RetryDataReplication~~

WARNING: RetryDataReplication is deprecated. Causes the data replication initiation sequence to begin immediately upon next Handshake for the specified Source Server ID, regardless of when the previous initiation started. This command will work only if the Source Server is stalled or is in a DISCONNECTED or STOPPED state. 

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.SDK.RetryDataReplication(ctx, operations.RetryDataReplicationRequest{
        RequestBody: operations.RetryDataReplicationRequestBody{
            SourceServerID: "illum",
        },
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

    if res.SourceServer != nil {
        // handle response
    }
}
```

## ReverseReplication

Start replication to origin / target region - applies only to protected instances that originated in EC2. For recovery instances on target region - starts replication back to origin region. For failback instances on origin region - starts replication to target region to re-protect them. 

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
    res, err := s.SDK.ReverseReplication(ctx, operations.ReverseReplicationRequest{
        RequestBody: operations.ReverseReplicationRequestBody{
            RecoveryInstanceID: "ab",
        },
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

    if res.ReverseReplicationResponse != nil {
        // handle response
    }
}
```

## StartFailbackLaunch

Initiates a Job for launching the machine that is being failed back to from the specified Recovery Instance. This will run conversion on the failback client and will reboot your machine, thus completing the failback process.

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
    res, err := s.SDK.StartFailbackLaunch(ctx, operations.StartFailbackLaunchRequest{
        RequestBody: operations.StartFailbackLaunchRequestBody{
            RecoveryInstanceIDs: []string{
                "nemo",
                "voluptatibus",
                "perferendis",
                "fugiat",
            },
            Tags: map[string]string{
                "aut": "cumque",
            },
        },
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("libero"),
        XAmzDate: sdk.String("nobis"),
        XAmzSecurityToken: sdk.String("dolores"),
        XAmzSignature: sdk.String("quis"),
        XAmzSignedHeaders: sdk.String("totam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartFailbackLaunchResponse != nil {
        // handle response
    }
}
```

## StartRecovery

Launches Recovery Instances for the specified Source Servers. For each Source Server you may choose a point in time snapshot to launch from, or use an on demand snapshot.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StartRecovery(ctx, operations.StartRecoveryRequest{
        RequestBody: operations.StartRecoveryRequestBody{
            IsDrill: sdk.Bool(false),
            SourceServers: []shared.StartRecoveryRequestSourceServer{
                shared.StartRecoveryRequestSourceServer{
                    RecoverySnapshotID: sdk.String("eaque"),
                    SourceServerID: "quis",
                },
                shared.StartRecoveryRequestSourceServer{
                    RecoverySnapshotID: sdk.String("nesciunt"),
                    SourceServerID: "eos",
                },
            },
            Tags: map[string]string{
                "dolores": "minus",
            },
        },
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

    if res.StartRecoveryResponse != nil {
        // handle response
    }
}
```

## StartReplication

Starts replication for a stopped Source Server. This action would make the Source Server protected again and restart billing for it.

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
    res, err := s.SDK.StartReplication(ctx, operations.StartReplicationRequest{
        RequestBody: operations.StartReplicationRequestBody{
            SourceServerID: "facilis",
        },
        XAmzAlgorithm: sdk.String("perspiciatis"),
        XAmzContentSha256: sdk.String("voluptatem"),
        XAmzCredential: sdk.String("porro"),
        XAmzDate: sdk.String("consequuntur"),
        XAmzSecurityToken: sdk.String("blanditiis"),
        XAmzSignature: sdk.String("error"),
        XAmzSignedHeaders: sdk.String("eaque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartReplicationResponse != nil {
        // handle response
    }
}
```

## StopFailback

Stops the failback process for a specified Recovery Instance. This changes the Failback State of the Recovery Instance back to FAILBACK_NOT_STARTED.

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
    res, err := s.SDK.StopFailback(ctx, operations.StopFailbackRequest{
        RequestBody: operations.StopFailbackRequestBody{
            RecoveryInstanceID: "occaecati",
        },
        XAmzAlgorithm: sdk.String("rerum"),
        XAmzContentSha256: sdk.String("adipisci"),
        XAmzCredential: sdk.String("asperiores"),
        XAmzDate: sdk.String("earum"),
        XAmzSecurityToken: sdk.String("modi"),
        XAmzSignature: sdk.String("iste"),
        XAmzSignedHeaders: sdk.String("dolorum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## StopReplication

Stops replication for a Source Server. This action would make the Source Server unprotected, delete its existing snapshots and stop billing for it.

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
    res, err := s.SDK.StopReplication(ctx, operations.StopReplicationRequest{
        RequestBody: operations.StopReplicationRequestBody{
            SourceServerID: "deleniti",
        },
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

    if res.StopReplicationResponse != nil {
        // handle response
    }
}
```

## TagResource

Adds or overwrites only the specified tags for the specified Elastic Disaster Recovery resource or resources. When you specify an existing tag key, the value is overwritten with the new value. Each resource can have a maximum of 50 tags. Each tag consists of a key and optional value.

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
                "dolorem": "dolorem",
                "dolor": "qui",
            },
        },
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("cum"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("dignissimos"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
        ResourceArn: "amet",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TerminateRecoveryInstances

Initiates a Job for terminating the EC2 resources associated with the specified Recovery Instances, and then will delete the Recovery Instances from the Elastic Disaster Recovery service.

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
    res, err := s.SDK.TerminateRecoveryInstances(ctx, operations.TerminateRecoveryInstancesRequest{
        RequestBody: operations.TerminateRecoveryInstancesRequestBody{
            RecoveryInstanceIDs: []string{
                "numquam",
                "veritatis",
                "ipsa",
            },
        },
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("odio"),
        XAmzDate: sdk.String("quaerat"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TerminateRecoveryInstancesResponse != nil {
        // handle response
    }
}
```

## UntagResource

Deletes the specified set of tags from the specified set of Elastic Disaster Recovery resources.

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
        XAmzAlgorithm: sdk.String("voluptas"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("eos"),
        XAmzDate: sdk.String("atque"),
        XAmzSecurityToken: sdk.String("sit"),
        XAmzSignature: sdk.String("fugiat"),
        XAmzSignedHeaders: sdk.String("ab"),
        ResourceArn: "soluta",
        TagKeys: []string{
            "iusto",
            "voluptate",
            "dolorum",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateFailbackReplicationConfiguration

Allows you to update the failback replication configuration of a Recovery Instance by ID.

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
    res, err := s.SDK.UpdateFailbackReplicationConfiguration(ctx, operations.UpdateFailbackReplicationConfigurationRequest{
        RequestBody: operations.UpdateFailbackReplicationConfigurationRequestBody{
            BandwidthThrottling: sdk.Int64(536579),
            Name: sdk.String("Terence Rau"),
            RecoveryInstanceID: "ipsum",
            UsePrivateIP: sdk.Bool(false),
        },
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

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateLaunchConfiguration

Updates a LaunchConfiguration by Source Server ID.

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
    res, err := s.SDK.UpdateLaunchConfiguration(ctx, operations.UpdateLaunchConfigurationRequest{
        RequestBody: operations.UpdateLaunchConfigurationRequestBody{
            CopyPrivateIP: sdk.Bool(false),
            CopyTags: sdk.Bool(false),
            LaunchDisposition: operations.UpdateLaunchConfigurationRequestBodyLaunchDispositionEnumStarted.ToPointer(),
            Licensing: &operations.UpdateLaunchConfigurationRequestBodyLicensing{
                OsByol: sdk.Bool(false),
            },
            Name: sdk.String("Tommy Turner"),
            SourceServerID: "provident",
            TargetInstanceTypeRightSizingMethod: operations.UpdateLaunchConfigurationRequestBodyTargetInstanceTypeRightSizingMethodEnumNone.ToPointer(),
        },
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

    if res.LaunchConfiguration != nil {
        // handle response
    }
}
```

## UpdateLaunchConfigurationTemplate

Updates an existing Launch Configuration Template by ID.

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
    res, err := s.SDK.UpdateLaunchConfigurationTemplate(ctx, operations.UpdateLaunchConfigurationTemplateRequest{
        RequestBody: operations.UpdateLaunchConfigurationTemplateRequestBody{
            CopyPrivateIP: sdk.Bool(false),
            CopyTags: sdk.Bool(false),
            LaunchConfigurationTemplateID: "vel",
            LaunchDisposition: operations.UpdateLaunchConfigurationTemplateRequestBodyLaunchDispositionEnumStarted.ToPointer(),
            Licensing: &operations.UpdateLaunchConfigurationTemplateRequestBodyLicensing{
                OsByol: sdk.Bool(false),
            },
            TargetInstanceTypeRightSizingMethod: operations.UpdateLaunchConfigurationTemplateRequestBodyTargetInstanceTypeRightSizingMethodEnumBasic.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("a"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("harum"),
        XAmzSignature: sdk.String("iusto"),
        XAmzSignedHeaders: sdk.String("ipsum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateLaunchConfigurationTemplateResponse != nil {
        // handle response
    }
}
```

## UpdateReplicationConfiguration

Allows you to update a ReplicationConfiguration by Source Server ID.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateReplicationConfiguration(ctx, operations.UpdateReplicationConfigurationRequest{
        RequestBody: operations.UpdateReplicationConfigurationRequestBody{
            AssociateDefaultSecurityGroup: sdk.Bool(false),
            AutoReplicateNewDisks: sdk.Bool(false),
            BandwidthThrottling: sdk.Int64(788740),
            CreatePublicIP: sdk.Bool(false),
            DataPlaneRouting: operations.UpdateReplicationConfigurationRequestBodyDataPlaneRoutingEnumPublicIP.ToPointer(),
            DefaultLargeStagingDiskType: operations.UpdateReplicationConfigurationRequestBodyDefaultLargeStagingDiskTypeEnumGp2.ToPointer(),
            EbsEncryption: operations.UpdateReplicationConfigurationRequestBodyEbsEncryptionEnumCustom.ToPointer(),
            EbsEncryptionKeyArn: sdk.String("accusamus"),
            Name: sdk.String("Darlene Effertz"),
            PitPolicy: []shared.PITPolicyRule{
                shared.PITPolicyRule{
                    Enabled: sdk.Bool(false),
                    Interval: 25662,
                    RetentionDuration: 711584,
                    RuleID: sdk.Int64(207470),
                    Units: shared.PITPolicyRuleUnitsEnumMinute,
                },
                shared.PITPolicyRule{
                    Enabled: sdk.Bool(false),
                    Interval: 424685,
                    RetentionDuration: 730442,
                    RuleID: sdk.Int64(374170),
                    Units: shared.PITPolicyRuleUnitsEnumHour,
                },
            },
            ReplicatedDisks: []shared.ReplicationConfigurationReplicatedDisk{
                shared.ReplicationConfigurationReplicatedDisk{
                    DeviceName: sdk.String("ipsum"),
                    Iops: sdk.Int64(277628),
                    IsBootDisk: sdk.Bool(false),
                    OptimizedStagingDiskType: shared.ReplicationConfigurationReplicatedDiskStagingDiskTypeEnumGp2.ToPointer(),
                    StagingDiskType: shared.ReplicationConfigurationReplicatedDiskStagingDiskTypeEnumSc1.ToPointer(),
                    Throughput: sdk.Int64(807581),
                },
                shared.ReplicationConfigurationReplicatedDisk{
                    DeviceName: sdk.String("pariatur"),
                    Iops: sdk.Int64(747080),
                    IsBootDisk: sdk.Bool(false),
                    OptimizedStagingDiskType: shared.ReplicationConfigurationReplicatedDiskStagingDiskTypeEnumAuto.ToPointer(),
                    StagingDiskType: shared.ReplicationConfigurationReplicatedDiskStagingDiskTypeEnumSc1.ToPointer(),
                    Throughput: sdk.Int64(517379),
                },
            },
            ReplicationServerInstanceType: sdk.String("incidunt"),
            ReplicationServersSecurityGroupsIDs: []string{
                "dolores",
            },
            SourceServerID: "distinctio",
            StagingAreaSubnetID: sdk.String("facilis"),
            StagingAreaTags: map[string]string{
                "quam": "molestias",
                "temporibus": "qui",
            },
            UseDedicatedReplicationServer: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("neque"),
        XAmzContentSha256: sdk.String("fugit"),
        XAmzCredential: sdk.String("magni"),
        XAmzDate: sdk.String("odio"),
        XAmzSecurityToken: sdk.String("sunt"),
        XAmzSignature: sdk.String("ullam"),
        XAmzSignedHeaders: sdk.String("nam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReplicationConfiguration != nil {
        // handle response
    }
}
```

## UpdateReplicationConfigurationTemplate

Updates a ReplicationConfigurationTemplate by ID.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateReplicationConfigurationTemplate(ctx, operations.UpdateReplicationConfigurationTemplateRequest{
        RequestBody: operations.UpdateReplicationConfigurationTemplateRequestBody{
            Arn: sdk.String("hic"),
            AssociateDefaultSecurityGroup: sdk.Bool(false),
            AutoReplicateNewDisks: sdk.Bool(false),
            BandwidthThrottling: sdk.Int64(30452),
            CreatePublicIP: sdk.Bool(false),
            DataPlaneRouting: operations.UpdateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnumPublicIP.ToPointer(),
            DefaultLargeStagingDiskType: operations.UpdateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnumSt1.ToPointer(),
            EbsEncryption: operations.UpdateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnumCustom.ToPointer(),
            EbsEncryptionKeyArn: sdk.String("et"),
            PitPolicy: []shared.PITPolicyRule{
                shared.PITPolicyRule{
                    Enabled: sdk.Bool(false),
                    Interval: 217450,
                    RetentionDuration: 83422,
                    RuleID: sdk.Int64(749255),
                    Units: shared.PITPolicyRuleUnitsEnumHour,
                },
                shared.PITPolicyRule{
                    Enabled: sdk.Bool(false),
                    Interval: 731694,
                    RetentionDuration: 584476,
                    RuleID: sdk.Int64(45614),
                    Units: shared.PITPolicyRuleUnitsEnumDay,
                },
                shared.PITPolicyRule{
                    Enabled: sdk.Bool(false),
                    Interval: 209157,
                    RetentionDuration: 292147,
                    RuleID: sdk.Int64(286915),
                    Units: shared.PITPolicyRuleUnitsEnumMinute,
                },
                shared.PITPolicyRule{
                    Enabled: sdk.Bool(false),
                    Interval: 677263,
                    RetentionDuration: 100294,
                    RuleID: sdk.Int64(63038),
                    Units: shared.PITPolicyRuleUnitsEnumMinute,
                },
            },
            ReplicationConfigurationTemplateID: "quas",
            ReplicationServerInstanceType: sdk.String("itaque"),
            ReplicationServersSecurityGroupsIDs: []string{
                "est",
            },
            StagingAreaSubnetID: sdk.String("repellendus"),
            StagingAreaTags: map[string]string{
                "doloribus": "ut",
                "facilis": "cupiditate",
                "qui": "quae",
                "laudantium": "odio",
            },
            UseDedicatedReplicationServer: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("quisquam"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("quis"),
        XAmzSignedHeaders: sdk.String("ipsum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReplicationConfigurationTemplate != nil {
        // handle response
    }
}
```
