# SDK

## Overview

The Application Migration Service service.

Amazon Web Services documentation
<https://docs.aws.amazon.com/mgn/>
### Available Operations

* [ArchiveApplication](#archiveapplication) - Archive application.
* [ArchiveWave](#archivewave) - Archive wave.
* [AssociateApplications](#associateapplications) - Associate applications to wave.
* [AssociateSourceServers](#associatesourceservers) - Associate source servers to application.
* [ChangeServerLifeCycleState](#changeserverlifecyclestate) - Allows the user to set the SourceServer.LifeCycle.state property for specific Source Server IDs to one of the following: READY_FOR_TEST or READY_FOR_CUTOVER. This command only works if the Source Server is already launchable (dataReplicationInfo.lagDuration is not null.)
* [CreateApplication](#createapplication) - Create application.
* [CreateLaunchConfigurationTemplate](#createlaunchconfigurationtemplate) - Creates a new Launch Configuration Template.
* [CreateReplicationConfigurationTemplate](#createreplicationconfigurationtemplate) - Creates a new ReplicationConfigurationTemplate.
* [CreateWave](#createwave) - Create wave.
* [DeleteApplication](#deleteapplication) - Delete application.
* [DeleteJob](#deletejob) - Deletes a single Job by ID.
* [DeleteLaunchConfigurationTemplate](#deletelaunchconfigurationtemplate) - Deletes a single Launch Configuration Template by ID.
* [DeleteReplicationConfigurationTemplate](#deletereplicationconfigurationtemplate) - Deletes a single Replication Configuration Template by ID
* [DeleteSourceServer](#deletesourceserver) - Deletes a single source server by ID.
* [DeleteVcenterClient](#deletevcenterclient) - Deletes a given vCenter client by ID.
* [DeleteWave](#deletewave) - Delete wave.
* [DescribeJobLogItems](#describejoblogitems) - Retrieves detailed job log items with paging.
* [DescribeJobs](#describejobs) - Returns a list of Jobs. Use the JobsID and fromDate and toData filters to limit which jobs are returned. The response is sorted by creationDataTime - latest date first. Jobs are normally created by the StartTest, StartCutover, and TerminateTargetInstances APIs. Jobs are also created by DiagnosticLaunch and TerminateDiagnosticInstances, which are APIs available only to *Support* and only used in response to relevant support tickets.
* [DescribeLaunchConfigurationTemplates](#describelaunchconfigurationtemplates) - Lists all Launch Configuration Templates, filtered by Launch Configuration Template IDs
* [DescribeReplicationConfigurationTemplates](#describereplicationconfigurationtemplates) - Lists all ReplicationConfigurationTemplates, filtered by Source Server IDs.
* [DescribeSourceServers](#describesourceservers) - Retrieves all SourceServers or multiple SourceServers by ID.
* [DescribeVcenterClients](#describevcenterclients) - Returns a list of the installed vCenter clients.
* [DisassociateApplications](#disassociateapplications) - Disassociate applications from wave.
* [DisassociateSourceServers](#disassociatesourceservers) - Disassociate source servers from application.
* [DisconnectFromService](#disconnectfromservice) - Disconnects specific Source Servers from Application Migration Service. Data replication is stopped immediately. All AWS resources created by Application Migration Service for enabling the replication of these source servers will be terminated / deleted within 90 minutes. Launched Test or Cutover instances will NOT be terminated. If the agent on the source server has not been prevented from communicating with the Application Migration Service service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.
* [FinalizeCutover](#finalizecutover) - Finalizes the cutover immediately for specific Source Servers. All AWS resources created by Application Migration Service for enabling the replication of these source servers will be terminated / deleted within 90 minutes. Launched Test or Cutover instances will NOT be terminated. The AWS Replication Agent will receive a command to uninstall itself (within 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be changed to DISCONNECTED; The SourceServer.lifeCycle.state will be changed to CUTOVER; The totalStorageBytes property fo each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.
* [GetLaunchConfiguration](#getlaunchconfiguration) - Lists all LaunchConfigurations available, filtered by Source Server IDs.
* [GetReplicationConfiguration](#getreplicationconfiguration) - Lists all ReplicationConfigurations, filtered by Source Server ID.
* [InitializeService](#initializeservice) - Initialize Application Migration Service.
* [ListApplications](#listapplications) - Retrieves all applications or multiple applications by ID.
* [ListExportErrors](#listexporterrors) - List export errors.
* [ListExports](#listexports) - List exports.
* [ListImportErrors](#listimporterrors) - List import errors.
* [ListImports](#listimports) - List imports.
* [ListSourceServerActions](#listsourceserveractions) - List source server post migration custom actions.
* [ListTagsForResource](#listtagsforresource) - List all tags for your Application Migration Service resources.
* [ListTemplateActions](#listtemplateactions) - List template post migration custom actions.
* [ListWaves](#listwaves) - Retrieves all waves or multiple waves by ID.
* [MarkAsArchived](#markasarchived) - Archives specific Source Servers by setting the SourceServer.isArchived property to true for specified SourceServers by ID. This command only works for SourceServers with a lifecycle. state which equals DISCONNECTED or CUTOVER.
* [PutSourceServerAction](#putsourceserveraction) - Put source server post migration custom action.
* [PutTemplateAction](#puttemplateaction) - Put template post migration custom action.
* [RemoveSourceServerAction](#removesourceserveraction) - Remove source server post migration custom action.
* [RemoveTemplateAction](#removetemplateaction) - Remove template post migration custom action.
* [RetryDataReplication](#retrydatareplication) - Causes the data replication initiation sequence to begin immediately upon next Handshake for specified SourceServer IDs, regardless of when the previous initiation started. This command will not work if the SourceServer is not stalled or is in a DISCONNECTED or STOPPED state.
* [StartCutover](#startcutover) - Launches a Cutover Instance for specific Source Servers. This command starts a LAUNCH job whose initiatedBy property is StartCutover and changes the SourceServer.lifeCycle.state property to CUTTING_OVER.
* [StartExport](#startexport) - Start export.
* [StartImport](#startimport) - Start import.
* [StartReplication](#startreplication) - Starts replication for SNAPSHOT_SHIPPING agents.
* [StartTest](#starttest) - Launches a Test Instance for specific Source Servers. This command starts a LAUNCH job whose initiatedBy property is StartTest and changes the SourceServer.lifeCycle.state property to TESTING.
* [TagResource](#tagresource) - Adds or overwrites only the specified tags for the specified Application Migration Service resource or resources. When you specify an existing tag key, the value is overwritten with the new value. Each resource can have a maximum of 50 tags. Each tag consists of a key and optional value.
* [TerminateTargetInstances](#terminatetargetinstances) - Starts a job that terminates specific launched EC2 Test and Cutover instances. This command will not work for any Source Server with a lifecycle.state of TESTING, CUTTING_OVER, or CUTOVER.
* [UnarchiveApplication](#unarchiveapplication) - Unarchive application.
* [UnarchiveWave](#unarchivewave) - Unarchive wave.
* [UntagResource](#untagresource) - Deletes the specified set of tags from the specified set of Application Migration Service resources.
* [UpdateApplication](#updateapplication) - Update application.
* [UpdateLaunchConfiguration](#updatelaunchconfiguration) - Updates multiple LaunchConfigurations by Source Server ID.
* [UpdateLaunchConfigurationTemplate](#updatelaunchconfigurationtemplate) - Updates an existing Launch Configuration Template by ID.
* [UpdateReplicationConfiguration](#updatereplicationconfiguration) - Allows you to update multiple ReplicationConfigurations by Source Server ID.
* [UpdateReplicationConfigurationTemplate](#updatereplicationconfigurationtemplate) - Updates multiple ReplicationConfigurationTemplates by ID.
* [UpdateSourceServerReplicationType](#updatesourceserverreplicationtype) - Allows you to change between the AGENT_BASED replication type and the SNAPSHOT_SHIPPING replication type.
* [UpdateWave](#updatewave) - Update wave.

## ArchiveApplication

Archive application.

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
    res, err := s.SDK.ArchiveApplication(ctx, operations.ArchiveApplicationRequest{
        RequestBody: operations.ArchiveApplicationRequestBody{
            ApplicationID: "vel",
        },
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("ipsa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Application != nil {
        // handle response
    }
}
```

## ArchiveWave

Archive wave.

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
    res, err := s.SDK.ArchiveWave(ctx, operations.ArchiveWaveRequest{
        RequestBody: operations.ArchiveWaveRequestBody{
            WaveID: "delectus",
        },
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("minus"),
        XAmzSecurityToken: sdk.String("placeat"),
        XAmzSignature: sdk.String("voluptatum"),
        XAmzSignedHeaders: sdk.String("iusto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Wave != nil {
        // handle response
    }
}
```

## AssociateApplications

Associate applications to wave.

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
    res, err := s.SDK.AssociateApplications(ctx, operations.AssociateApplicationsRequest{
        RequestBody: operations.AssociateApplicationsRequestBody{
            ApplicationIDs: []string{
                "nisi",
                "recusandae",
                "temporibus",
            },
            WaveID: "ab",
        },
        XAmzAlgorithm: sdk.String("quis"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("repellendus"),
        XAmzSignedHeaders: sdk.String("sapiente"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateApplicationsResponse != nil {
        // handle response
    }
}
```

## AssociateSourceServers

Associate source servers to application.

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
    res, err := s.SDK.AssociateSourceServers(ctx, operations.AssociateSourceServersRequest{
        RequestBody: operations.AssociateSourceServersRequestBody{
            ApplicationID: "quo",
            SourceServerIDs: []string{
                "at",
            },
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

    if res.AssociateSourceServersResponse != nil {
        // handle response
    }
}
```

## ChangeServerLifeCycleState

Allows the user to set the SourceServer.LifeCycle.state property for specific Source Server IDs to one of the following: READY_FOR_TEST or READY_FOR_CUTOVER. This command only works if the Source Server is already launchable (dataReplicationInfo.lagDuration is not null.)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ChangeServerLifeCycleState(ctx, operations.ChangeServerLifeCycleStateRequest{
        RequestBody: operations.ChangeServerLifeCycleStateRequestBody{
            LifeCycle: operations.ChangeServerLifeCycleStateRequestBodyLifeCycle{
                State: shared.ChangeServerLifeCycleStateSourceServerLifecycleStateEnumCutover.ToPointer(),
            },
            SourceServerID: "dolorum",
        },
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

    if res.SourceServer != nil {
        // handle response
    }
}
```

## CreateApplication

Create application.

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
    res, err := s.SDK.CreateApplication(ctx, operations.CreateApplicationRequest{
        RequestBody: operations.CreateApplicationRequestBody{
            Description: sdk.String("optio"),
            Name: "Jack Johns",
            Tags: map[string]string{
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

    if res.Application != nil {
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
	"openapi/pkg/models/shared"
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
            AssociatePublicIPAddress: sdk.Bool(false),
            BootMode: operations.CreateLaunchConfigurationTemplateRequestBodyBootModeEnumLegacyBios.ToPointer(),
            CopyPrivateIP: sdk.Bool(false),
            CopyTags: sdk.Bool(false),
            EnableMapAutoTagging: sdk.Bool(false),
            LargeVolumeConf: &operations.CreateLaunchConfigurationTemplateRequestBodyLargeVolumeConf{
                Iops: sdk.Int64(612096),
                Throughput: sdk.Int64(222321),
                VolumeType: shared.VolumeTypeEnumSt1.ToPointer(),
            },
            LaunchDisposition: operations.CreateLaunchConfigurationTemplateRequestBodyLaunchDispositionEnumStopped.ToPointer(),
            Licensing: &operations.CreateLaunchConfigurationTemplateRequestBodyLicensing{
                OsByol: sdk.Bool(false),
            },
            MapAutoTaggingMpeID: sdk.String("hic"),
            PostLaunchActions: &operations.CreateLaunchConfigurationTemplateRequestBodyPostLaunchActions{
                CloudWatchLogGroupName: sdk.String("saepe"),
                Deployment: shared.PostLaunchActionsDeploymentTypeEnumTestOnly.ToPointer(),
                S3LogBucket: sdk.String("in"),
                S3OutputKeyPrefix: sdk.String("corporis"),
                SsmDocuments: []shared.SsmDocument{
                    shared.SsmDocument{
                        ActionName: "iure",
                        ExternalParameters: map[string]shared.SsmExternalParameter{
                            "quidem": shared.SsmExternalParameter{
                                DynamicPath: sdk.String("architecto"),
                            },
                            "ipsa": shared.SsmExternalParameter{
                                DynamicPath: sdk.String("reiciendis"),
                            },
                            "est": shared.SsmExternalParameter{
                                DynamicPath: sdk.String("mollitia"),
                            },
                            "laborum": shared.SsmExternalParameter{
                                DynamicPath: sdk.String("dolores"),
                            },
                        },
                        MustSucceedForCutover: sdk.Bool(false),
                        Parameters: map[string][]shared.SsmParameterStoreParameter{
                            "corporis": []shared.SsmParameterStoreParameter{
                                shared.SsmParameterStoreParameter{
                                    ParameterName: "nobis",
                                    ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                                },
                            },
                        },
                        SsmDocumentName: "enim",
                        TimeoutSeconds: sdk.Int64(607831),
                    },
                    shared.SsmDocument{
                        ActionName: "nemo",
                        ExternalParameters: map[string]shared.SsmExternalParameter{
                            "excepturi": shared.SsmExternalParameter{
                                DynamicPath: sdk.String("accusantium"),
                            },
                            "iure": shared.SsmExternalParameter{
                                DynamicPath: sdk.String("culpa"),
                            },
                        },
                        MustSucceedForCutover: sdk.Bool(false),
                        Parameters: map[string][]shared.SsmParameterStoreParameter{
                            "sapiente": []shared.SsmParameterStoreParameter{
                                shared.SsmParameterStoreParameter{
                                    ParameterName: "mollitia",
                                    ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                                },
                            },
                            "dolorem": []shared.SsmParameterStoreParameter{
                                shared.SsmParameterStoreParameter{
                                    ParameterName: "consequuntur",
                                    ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                                },
                                shared.SsmParameterStoreParameter{
                                    ParameterName: "repellat",
                                    ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                                },
                                shared.SsmParameterStoreParameter{
                                    ParameterName: "mollitia",
                                    ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                                },
                            },
                            "occaecati": []shared.SsmParameterStoreParameter{
                                shared.SsmParameterStoreParameter{
                                    ParameterName: "commodi",
                                    ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                                },
                                shared.SsmParameterStoreParameter{
                                    ParameterName: "quam",
                                    ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                                },
                            },
                            "molestiae": []shared.SsmParameterStoreParameter{
                                shared.SsmParameterStoreParameter{
                                    ParameterName: "error",
                                    ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                                },
                            },
                        },
                        SsmDocumentName: "quia",
                        TimeoutSeconds: sdk.Int64(338007),
                    },
                    shared.SsmDocument{
                        ActionName: "vitae",
                        ExternalParameters: map[string]shared.SsmExternalParameter{
                            "animi": shared.SsmExternalParameter{
                                DynamicPath: sdk.String("enim"),
                            },
                            "odit": shared.SsmExternalParameter{
                                DynamicPath: sdk.String("quo"),
                            },
                            "sequi": shared.SsmExternalParameter{
                                DynamicPath: sdk.String("tenetur"),
                            },
                        },
                        MustSucceedForCutover: sdk.Bool(false),
                        Parameters: map[string][]shared.SsmParameterStoreParameter{
                            "id": []shared.SsmParameterStoreParameter{
                                shared.SsmParameterStoreParameter{
                                    ParameterName: "aut",
                                    ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                                },
                                shared.SsmParameterStoreParameter{
                                    ParameterName: "quasi",
                                    ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                                },
                                shared.SsmParameterStoreParameter{
                                    ParameterName: "error",
                                    ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                                },
                                shared.SsmParameterStoreParameter{
                                    ParameterName: "temporibus",
                                    ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                                },
                            },
                            "laborum": []shared.SsmParameterStoreParameter{
                                shared.SsmParameterStoreParameter{
                                    ParameterName: "reiciendis",
                                    ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                                },
                            },
                        },
                        SsmDocumentName: "voluptatibus",
                        TimeoutSeconds: sdk.Int64(878194),
                    },
                },
            },
            SmallVolumeConf: &operations.CreateLaunchConfigurationTemplateRequestBodySmallVolumeConf{
                Iops: sdk.Int64(468651),
                Throughput: sdk.Int64(509624),
                VolumeType: shared.VolumeTypeEnumStandard.ToPointer(),
            },
            SmallVolumeMaxSize: sdk.Int64(55714),
            Tags: map[string]string{
                "voluptate": "cum",
                "perferendis": "doloremque",
                "reprehenderit": "ut",
            },
            TargetInstanceTypeRightSizingMethod: operations.CreateLaunchConfigurationTemplateRequestBodyTargetInstanceTypeRightSizingMethodEnumBasic.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("corporis"),
        XAmzCredential: sdk.String("dolore"),
        XAmzDate: sdk.String("iusto"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("harum"),
        XAmzSignedHeaders: sdk.String("enim"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LaunchConfigurationTemplate != nil {
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
            BandwidthThrottling: 880476,
            CreatePublicIP: false,
            DataPlaneRouting: operations.CreateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnumPrivateIP,
            DefaultLargeStagingDiskType: operations.CreateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnumGp3,
            EbsEncryption: operations.CreateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnumDefault,
            EbsEncryptionKeyArn: sdk.String("ipsum"),
            ReplicationServerInstanceType: "quidem",
            ReplicationServersSecurityGroupsIDs: []string{
                "excepturi",
                "pariatur",
                "modi",
            },
            StagingAreaSubnetID: "praesentium",
            StagingAreaTags: map[string]string{
                "voluptates": "quasi",
                "repudiandae": "sint",
                "veritatis": "itaque",
            },
            Tags: map[string]string{
                "enim": "consequatur",
                "est": "quibusdam",
            },
            UseDedicatedReplicationServer: false,
        },
        XAmzAlgorithm: sdk.String("explicabo"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("modi"),
        XAmzSignedHeaders: sdk.String("qui"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReplicationConfigurationTemplate != nil {
        // handle response
    }
}
```

## CreateWave

Create wave.

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
    res, err := s.SDK.CreateWave(ctx, operations.CreateWaveRequest{
        RequestBody: operations.CreateWaveRequestBody{
            Description: sdk.String("aliquid"),
            Name: "Isaac Aufderhar",
            Tags: map[string]string{
                "alias": "fugit",
                "dolorum": "excepturi",
            },
        },
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("tempore"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("non"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Wave != nil {
        // handle response
    }
}
```

## DeleteApplication

Delete application.

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
    res, err := s.SDK.DeleteApplication(ctx, operations.DeleteApplicationRequest{
        RequestBody: operations.DeleteApplicationRequestBody{
            ApplicationID: "eligendi",
        },
        XAmzAlgorithm: sdk.String("sint"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("necessitatibus"),
        XAmzSecurityToken: sdk.String("sint"),
        XAmzSignature: sdk.String("officia"),
        XAmzSignedHeaders: sdk.String("dolor"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteApplicationResponse != nil {
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
            JobID: "debitis",
        },
        XAmzAlgorithm: sdk.String("a"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("illum"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("rerum"),
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
            LaunchConfigurationTemplateID: "dicta",
        },
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("cumque"),
        XAmzCredential: sdk.String("facere"),
        XAmzDate: sdk.String("ea"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("accusamus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteLaunchConfigurationTemplateResponse != nil {
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
            ReplicationConfigurationTemplateID: "non",
        },
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("delectus"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("nam"),
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

Deletes a single source server by ID.

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
            SourceServerID: "id",
        },
        XAmzAlgorithm: sdk.String("blanditiis"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("deserunt"),
        XAmzSignature: sdk.String("nisi"),
        XAmzSignedHeaders: sdk.String("vel"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteSourceServerResponse != nil {
        // handle response
    }
}
```

## DeleteVcenterClient

Deletes a given vCenter client by ID.

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
    res, err := s.SDK.DeleteVcenterClient(ctx, operations.DeleteVcenterClientRequest{
        RequestBody: operations.DeleteVcenterClientRequestBody{
            VcenterClientID: "natus",
        },
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

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteWave

Delete wave.

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
    res, err := s.SDK.DeleteWave(ctx, operations.DeleteWaveRequest{
        RequestBody: operations.DeleteWaveRequestBody{
            WaveID: "labore",
        },
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

    if res.DeleteWaveResponse != nil {
        // handle response
    }
}
```

## DescribeJobLogItems

Retrieves detailed job log items with paging.

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
            JobID: "architecto",
            MaxResults: sdk.Int64(298282),
            NextToken: sdk.String("et"),
        },
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("ullam"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("quos"),
        XAmzSecurityToken: sdk.String("sint"),
        XAmzSignature: sdk.String("accusantium"),
        XAmzSignedHeaders: sdk.String("mollitia"),
        MaxResults: sdk.String("reiciendis"),
        NextToken: sdk.String("mollitia"),
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

Returns a list of Jobs. Use the JobsID and fromDate and toData filters to limit which jobs are returned. The response is sorted by creationDataTime - latest date first. Jobs are normally created by the StartTest, StartCutover, and TerminateTargetInstances APIs. Jobs are also created by DiagnosticLaunch and TerminateDiagnosticInstances, which are APIs available only to *Support* and only used in response to relevant support tickets.

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
                FromDate: sdk.String("ad"),
                JobIDs: []string{
                    "dolor",
                    "necessitatibus",
                },
                ToDate: sdk.String("odit"),
            },
            MaxResults: sdk.Int64(367562),
            NextToken: sdk.String("quasi"),
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
                "repudiandae",
            },
            MaxResults: sdk.Int64(352312),
            NextToken: sdk.String("expedita"),
        },
        XAmzAlgorithm: sdk.String("nihil"),
        XAmzContentSha256: sdk.String("repellat"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("sed"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("accusantium"),
        MaxResults: sdk.String("consequuntur"),
        NextToken: sdk.String("praesentium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeLaunchConfigurationTemplatesResponse != nil {
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
            MaxResults: sdk.Int64(615560),
            NextToken: sdk.String("magni"),
            ReplicationConfigurationTemplateIDs: []string{
                "quo",
            },
        },
        XAmzAlgorithm: sdk.String("illum"),
        XAmzContentSha256: sdk.String("pariatur"),
        XAmzCredential: sdk.String("maxime"),
        XAmzDate: sdk.String("ea"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("odit"),
        XAmzSignedHeaders: sdk.String("ea"),
        MaxResults: sdk.String("accusantium"),
        NextToken: sdk.String("ab"),
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

Retrieves all SourceServers or multiple SourceServers by ID.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
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
                ApplicationIDs: []string{
                    "quidem",
                    "ipsam",
                    "voluptate",
                    "autem",
                },
                IsArchived: sdk.Bool(false),
                LifeCycleStates: []shared.LifeCycleStateEnum{
                    shared.LifeCycleStateEnumStopped,
                    shared.LifeCycleStateEnumDiscovered,
                    shared.LifeCycleStateEnumTesting,
                },
                ReplicationTypes: []shared.ReplicationTypeEnum{
                    shared.ReplicationTypeEnumAgentBased,
                    shared.ReplicationTypeEnumSnapshotShipping,
                    shared.ReplicationTypeEnumAgentBased,
                    shared.ReplicationTypeEnumAgentBased,
                },
                SourceServerIDs: []string{
                    "corporis",
                    "hic",
                    "libero",
                    "nobis",
                },
            },
            MaxResults: sdk.Int64(171629),
            NextToken: sdk.String("quis"),
        },
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("dignissimos"),
        XAmzCredential: sdk.String("eaque"),
        XAmzDate: sdk.String("quis"),
        XAmzSecurityToken: sdk.String("nesciunt"),
        XAmzSignature: sdk.String("eos"),
        XAmzSignedHeaders: sdk.String("perferendis"),
        MaxResults: sdk.String("dolores"),
        NextToken: sdk.String("minus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeSourceServersResponse != nil {
        // handle response
    }
}
```

## DescribeVcenterClients

Returns a list of the installed vCenter clients.

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
    res, err := s.SDK.DescribeVcenterClients(ctx, operations.DescribeVcenterClientsRequest{
        XAmzAlgorithm: sdk.String("quam"),
        XAmzContentSha256: sdk.String("dolor"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("nostrum"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("recusandae"),
        XAmzSignedHeaders: sdk.String("omnis"),
        MaxResults: sdk.Int64(704415),
        NextToken: sdk.String("perspiciatis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeVcenterClientsResponse != nil {
        // handle response
    }
}
```

## DisassociateApplications

Disassociate applications from wave.

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
    res, err := s.SDK.DisassociateApplications(ctx, operations.DisassociateApplicationsRequest{
        RequestBody: operations.DisassociateApplicationsRequestBody{
            ApplicationIDs: []string{
                "porro",
            },
            WaveID: "consequuntur",
        },
        XAmzAlgorithm: sdk.String("blanditiis"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("eaque"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("rerum"),
        XAmzSignature: sdk.String("adipisci"),
        XAmzSignedHeaders: sdk.String("asperiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateApplicationsResponse != nil {
        // handle response
    }
}
```

## DisassociateSourceServers

Disassociate source servers from application.

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
    res, err := s.SDK.DisassociateSourceServers(ctx, operations.DisassociateSourceServersRequest{
        RequestBody: operations.DisassociateSourceServersRequestBody{
            ApplicationID: "earum",
            SourceServerIDs: []string{
                "iste",
                "dolorum",
            },
        },
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("pariatur"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("nobis"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("quaerat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateSourceServersResponse != nil {
        // handle response
    }
}
```

## DisconnectFromService

Disconnects specific Source Servers from Application Migration Service. Data replication is stopped immediately. All AWS resources created by Application Migration Service for enabling the replication of these source servers will be terminated / deleted within 90 minutes. Launched Test or Cutover instances will NOT be terminated. If the agent on the source server has not been prevented from communicating with the Application Migration Service service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.

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
    res, err := s.SDK.DisconnectFromService(ctx, operations.DisconnectFromServiceRequest{
        RequestBody: operations.DisconnectFromServiceRequestBody{
            SourceServerID: "quos",
        },
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("dolorem"),
        XAmzCredential: sdk.String("dolorem"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("hic"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SourceServer != nil {
        // handle response
    }
}
```

## FinalizeCutover

Finalizes the cutover immediately for specific Source Servers. All AWS resources created by Application Migration Service for enabling the replication of these source servers will be terminated / deleted within 90 minutes. Launched Test or Cutover instances will NOT be terminated. The AWS Replication Agent will receive a command to uninstall itself (within 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be changed to DISCONNECTED; The SourceServer.lifeCycle.state will be changed to CUTOVER; The totalStorageBytes property fo each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.

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
    res, err := s.SDK.FinalizeCutover(ctx, operations.FinalizeCutoverRequest{
        RequestBody: operations.FinalizeCutoverRequestBody{
            SourceServerID: "excepturi",
        },
        XAmzAlgorithm: sdk.String("cum"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("dignissimos"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("amet"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("numquam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SourceServer != nil {
        // handle response
    }
}
```

## GetLaunchConfiguration

Lists all LaunchConfigurations available, filtered by Source Server IDs.

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
            SourceServerID: "veritatis",
        },
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("iure"),
        XAmzDate: sdk.String("odio"),
        XAmzSecurityToken: sdk.String("quaerat"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("quidem"),
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

Lists all ReplicationConfigurations, filtered by Source Server ID.

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
            SourceServerID: "voluptatibus",
        },
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

    if res.ReplicationConfiguration != nil {
        // handle response
    }
}
```

## InitializeService

Initialize Application Migration Service.

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
        XAmzAlgorithm: sdk.String("soluta"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("iusto"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("omnis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InitializeServiceResponse != nil {
        // handle response
    }
}
```

## ListApplications

Retrieves all applications or multiple applications by ID.

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
    res, err := s.SDK.ListApplications(ctx, operations.ListApplicationsRequest{
        RequestBody: operations.ListApplicationsRequestBody{
            Filters: &operations.ListApplicationsRequestBodyFilters{
                ApplicationIDs: []string{
                    "distinctio",
                    "asperiores",
                    "nihil",
                    "ipsum",
                },
                IsArchived: sdk.Bool(false),
                WaveIDs: []string{
                    "id",
                    "saepe",
                },
            },
            MaxResults: sdk.Int64(263322),
            NextToken: sdk.String("aspernatur"),
        },
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("amet"),
        XAmzCredential: sdk.String("optio"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("ad"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("suscipit"),
        MaxResults: sdk.String("deserunt"),
        NextToken: sdk.String("provident"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListApplicationsResponse != nil {
        // handle response
    }
}
```

## ListExportErrors

List export errors.

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
    res, err := s.SDK.ListExportErrors(ctx, operations.ListExportErrorsRequest{
        RequestBody: operations.ListExportErrorsRequestBody{
            ExportID: "minima",
            MaxResults: sdk.Int64(831049),
            NextToken: sdk.String("totam"),
        },
        XAmzAlgorithm: sdk.String("similique"),
        XAmzContentSha256: sdk.String("alias"),
        XAmzCredential: sdk.String("at"),
        XAmzDate: sdk.String("quaerat"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("quod"),
        MaxResults: sdk.String("officiis"),
        NextToken: sdk.String("qui"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListExportErrorsResponse != nil {
        // handle response
    }
}
```

## ListExports

List exports.

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
    res, err := s.SDK.ListExports(ctx, operations.ListExportsRequest{
        RequestBody: operations.ListExportsRequestBody{
            Filters: &operations.ListExportsRequestBodyFilters{
                ExportIDs: []string{
                    "a",
                    "esse",
                    "harum",
                },
            },
            MaxResults: sdk.Int64(483409),
            NextToken: sdk.String("ipsum"),
        },
        XAmzAlgorithm: sdk.String("quisquam"),
        XAmzContentSha256: sdk.String("tenetur"),
        XAmzCredential: sdk.String("amet"),
        XAmzDate: sdk.String("tempore"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("numquam"),
        XAmzSignedHeaders: sdk.String("enim"),
        MaxResults: sdk.String("dolorem"),
        NextToken: sdk.String("sapiente"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListExportsResponse != nil {
        // handle response
    }
}
```

## ListImportErrors

List import errors.

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
    res, err := s.SDK.ListImportErrors(ctx, operations.ListImportErrorsRequest{
        RequestBody: operations.ListImportErrorsRequestBody{
            ImportID: "totam",
            MaxResults: sdk.Int64(471752),
            NextToken: sdk.String("sit"),
        },
        XAmzAlgorithm: sdk.String("expedita"),
        XAmzContentSha256: sdk.String("neque"),
        XAmzCredential: sdk.String("sed"),
        XAmzDate: sdk.String("vel"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("voluptas"),
        XAmzSignedHeaders: sdk.String("deserunt"),
        MaxResults: sdk.String("quam"),
        NextToken: sdk.String("ipsum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListImportErrorsResponse != nil {
        // handle response
    }
}
```

## ListImports

List imports.

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
    res, err := s.SDK.ListImports(ctx, operations.ListImportsRequest{
        RequestBody: operations.ListImportsRequestBody{
            Filters: &operations.ListImportsRequestBodyFilters{
                ImportIDs: []string{
                    "qui",
                    "cupiditate",
                },
            },
            MaxResults: sdk.Int64(807581),
            NextToken: sdk.String("pariatur"),
        },
        XAmzAlgorithm: sdk.String("soluta"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("laborum"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("incidunt"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("dolores"),
        MaxResults: sdk.String("distinctio"),
        NextToken: sdk.String("facilis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListImportsResponse != nil {
        // handle response
    }
}
```

## ListSourceServerActions

List source server post migration custom actions.

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
    res, err := s.SDK.ListSourceServerActions(ctx, operations.ListSourceServerActionsRequest{
        RequestBody: operations.ListSourceServerActionsRequestBody{
            Filters: &operations.ListSourceServerActionsRequestBodyFilters{
                ActionIDs: []string{
                    "quam",
                    "molestias",
                },
            },
            MaxResults: sdk.Int64(840429),
            NextToken: sdk.String("qui"),
            SourceServerID: "neque",
        },
        XAmzAlgorithm: sdk.String("fugit"),
        XAmzContentSha256: sdk.String("magni"),
        XAmzCredential: sdk.String("odio"),
        XAmzDate: sdk.String("sunt"),
        XAmzSecurityToken: sdk.String("ullam"),
        XAmzSignature: sdk.String("nam"),
        XAmzSignedHeaders: sdk.String("hic"),
        MaxResults: sdk.String("voluptatem"),
        NextToken: sdk.String("cumque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSourceServerActionsResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

List all tags for your Application Migration Service resources.

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
        XAmzAlgorithm: sdk.String("soluta"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("et"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("nobis"),
        ResourceArn: "quos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## ListTemplateActions

List template post migration custom actions.

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
    res, err := s.SDK.ListTemplateActions(ctx, operations.ListTemplateActionsRequest{
        RequestBody: operations.ListTemplateActionsRequestBody{
            Filters: &operations.ListTemplateActionsRequestBodyFilters{
                ActionIDs: []string{
                    "cupiditate",
                    "aperiam",
                    "delectus",
                },
            },
            LaunchConfigurationTemplateID: "dolorem",
            MaxResults: sdk.Int64(292147),
            NextToken: sdk.String("labore"),
        },
        XAmzAlgorithm: sdk.String("adipisci"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("quae"),
        XAmzSecurityToken: sdk.String("aut"),
        XAmzSignature: sdk.String("quas"),
        XAmzSignedHeaders: sdk.String("itaque"),
        MaxResults: sdk.String("consequatur"),
        NextToken: sdk.String("est"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTemplateActionsResponse != nil {
        // handle response
    }
}
```

## ListWaves

Retrieves all waves or multiple waves by ID.

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
    res, err := s.SDK.ListWaves(ctx, operations.ListWavesRequest{
        RequestBody: operations.ListWavesRequestBody{
            Filters: &operations.ListWavesRequestBodyFilters{
                IsArchived: sdk.Bool(false),
                WaveIDs: []string{
                    "porro",
                    "doloribus",
                    "ut",
                    "facilis",
                },
            },
            MaxResults: sdk.Int64(586410),
            NextToken: sdk.String("qui"),
        },
        XAmzAlgorithm: sdk.String("quae"),
        XAmzContentSha256: sdk.String("laudantium"),
        XAmzCredential: sdk.String("odio"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("quisquam"),
        XAmzSignedHeaders: sdk.String("vero"),
        MaxResults: sdk.String("omnis"),
        NextToken: sdk.String("quis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWavesResponse != nil {
        // handle response
    }
}
```

## MarkAsArchived

Archives specific Source Servers by setting the SourceServer.isArchived property to true for specified SourceServers by ID. This command only works for SourceServers with a lifecycle. state which equals DISCONNECTED or CUTOVER.

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
    res, err := s.SDK.MarkAsArchived(ctx, operations.MarkAsArchivedRequest{
        RequestBody: operations.MarkAsArchivedRequestBody{
            SourceServerID: "ipsum",
        },
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("consectetur"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("tenetur"),
        XAmzSignature: sdk.String("dignissimos"),
        XAmzSignedHeaders: sdk.String("hic"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SourceServer != nil {
        // handle response
    }
}
```

## PutSourceServerAction

Put source server post migration custom action.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutSourceServerAction(ctx, operations.PutSourceServerActionRequest{
        RequestBody: operations.PutSourceServerActionRequestBody{
            ActionID: "distinctio",
            ActionName: "quod",
            Active: sdk.Bool(false),
            Category: operations.PutSourceServerActionRequestBodyCategoryEnumObservability.ToPointer(),
            Description: sdk.String("similique"),
            DocumentIdentifier: "facilis",
            DocumentVersion: sdk.String("vero"),
            ExternalParameters: map[string]shared.SsmExternalParameter{
                "dolore": shared.SsmExternalParameter{
                    DynamicPath: sdk.String("quibusdam"),
                },
                "illum": shared.SsmExternalParameter{
                    DynamicPath: sdk.String("sequi"),
                },
            },
            MustSucceedForCutover: sdk.Bool(false),
            Order: 617877,
            Parameters: map[string][]shared.SsmParameterStoreParameter{
                "aut": []shared.SsmParameterStoreParameter{
                    shared.SsmParameterStoreParameter{
                        ParameterName: "exercitationem",
                        ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                    },
                    shared.SsmParameterStoreParameter{
                        ParameterName: "nulla",
                        ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                    },
                    shared.SsmParameterStoreParameter{
                        ParameterName: "fugit",
                        ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                    },
                    shared.SsmParameterStoreParameter{
                        ParameterName: "porro",
                        ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                    },
                },
                "maiores": []shared.SsmParameterStoreParameter{
                    shared.SsmParameterStoreParameter{
                        ParameterName: "iusto",
                        ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                    },
                    shared.SsmParameterStoreParameter{
                        ParameterName: "eligendi",
                        ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                    },
                    shared.SsmParameterStoreParameter{
                        ParameterName: "ducimus",
                        ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                    },
                    shared.SsmParameterStoreParameter{
                        ParameterName: "alias",
                        ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                    },
                },
                "officia": []shared.SsmParameterStoreParameter{
                    shared.SsmParameterStoreParameter{
                        ParameterName: "ipsam",
                        ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                    },
                    shared.SsmParameterStoreParameter{
                        ParameterName: "ea",
                        ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                    },
                },
                "aspernatur": []shared.SsmParameterStoreParameter{
                    shared.SsmParameterStoreParameter{
                        ParameterName: "possimus",
                        ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                    },
                    shared.SsmParameterStoreParameter{
                        ParameterName: "magnam",
                        ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                    },
                },
            },
            SourceServerID: "ratione",
            TimeoutSeconds: sdk.Int64(401132),
        },
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

    if res.SourceServerActionDocument != nil {
        // handle response
    }
}
```

## PutTemplateAction

Put template post migration custom action.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutTemplateAction(ctx, operations.PutTemplateActionRequest{
        RequestBody: operations.PutTemplateActionRequestBody{
            ActionID: "excepturi",
            ActionName: "voluptatibus",
            Active: sdk.Bool(false),
            Category: operations.PutTemplateActionRequestBodyCategoryEnumValidation.ToPointer(),
            Description: sdk.String("sapiente"),
            DocumentIdentifier: "quisquam",
            DocumentVersion: sdk.String("saepe"),
            ExternalParameters: map[string]shared.SsmExternalParameter{
                "impedit": shared.SsmExternalParameter{
                    DynamicPath: sdk.String("corporis"),
                },
                "veniam": shared.SsmExternalParameter{
                    DynamicPath: sdk.String("aliquid"),
                },
            },
            LaunchConfigurationTemplateID: "inventore",
            MustSucceedForCutover: sdk.Bool(false),
            OperatingSystem: sdk.String("magnam"),
            Order: 407241,
            Parameters: map[string][]shared.SsmParameterStoreParameter{
                "consectetur": []shared.SsmParameterStoreParameter{
                    shared.SsmParameterStoreParameter{
                        ParameterName: "aspernatur",
                        ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                    },
                    shared.SsmParameterStoreParameter{
                        ParameterName: "minima",
                        ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                    },
                    shared.SsmParameterStoreParameter{
                        ParameterName: "eaque",
                        ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                    },
                    shared.SsmParameterStoreParameter{
                        ParameterName: "a",
                        ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                    },
                },
                "libero": []shared.SsmParameterStoreParameter{
                    shared.SsmParameterStoreParameter{
                        ParameterName: "aut",
                        ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                    },
                },
                "deleniti": []shared.SsmParameterStoreParameter{
                    shared.SsmParameterStoreParameter{
                        ParameterName: "aliquam",
                        ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                    },
                    shared.SsmParameterStoreParameter{
                        ParameterName: "fugit",
                        ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                    },
                    shared.SsmParameterStoreParameter{
                        ParameterName: "accusamus",
                        ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                    },
                    shared.SsmParameterStoreParameter{
                        ParameterName: "inventore",
                        ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                    },
                },
                "non": []shared.SsmParameterStoreParameter{
                    shared.SsmParameterStoreParameter{
                        ParameterName: "dolorum",
                        ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                    },
                },
            },
            TimeoutSeconds: sdk.Int64(672048),
        },
        XAmzAlgorithm: sdk.String("placeat"),
        XAmzContentSha256: sdk.String("velit"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("autem"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("quas"),
        XAmzSignedHeaders: sdk.String("assumenda"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TemplateActionDocument != nil {
        // handle response
    }
}
```

## RemoveSourceServerAction

Remove source server post migration custom action.

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
    res, err := s.SDK.RemoveSourceServerAction(ctx, operations.RemoveSourceServerActionRequest{
        RequestBody: operations.RemoveSourceServerActionRequestBody{
            ActionID: "nulla",
            SourceServerID: "voluptas",
        },
        XAmzAlgorithm: sdk.String("libero"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("numquam"),
        XAmzSecurityToken: sdk.String("explicabo"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("ipsa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoveSourceServerActionResponse != nil {
        // handle response
    }
}
```

## RemoveTemplateAction

Remove template post migration custom action.

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
    res, err := s.SDK.RemoveTemplateAction(ctx, operations.RemoveTemplateActionRequest{
        RequestBody: operations.RemoveTemplateActionRequestBody{
            ActionID: "molestiae",
            LaunchConfigurationTemplateID: "magnam",
        },
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

    if res.RemoveTemplateActionResponse != nil {
        // handle response
    }
}
```

## RetryDataReplication

Causes the data replication initiation sequence to begin immediately upon next Handshake for specified SourceServer IDs, regardless of when the previous initiation started. This command will not work if the SourceServer is not stalled or is in a DISCONNECTED or STOPPED state.

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
            SourceServerID: "quidem",
        },
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

    if res.SourceServer != nil {
        // handle response
    }
}
```

## StartCutover

Launches a Cutover Instance for specific Source Servers. This command starts a LAUNCH job whose initiatedBy property is StartCutover and changes the SourceServer.lifeCycle.state property to CUTTING_OVER.

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
    res, err := s.SDK.StartCutover(ctx, operations.StartCutoverRequest{
        RequestBody: operations.StartCutoverRequestBody{
            SourceServerIDs: []string{
                "veritatis",
                "ipsa",
                "id",
                "quidem",
            },
            Tags: map[string]string{
                "quo": "illum",
            },
        },
        XAmzAlgorithm: sdk.String("quo"),
        XAmzContentSha256: sdk.String("fuga"),
        XAmzCredential: sdk.String("eius"),
        XAmzDate: sdk.String("eos"),
        XAmzSecurityToken: sdk.String("voluptas"),
        XAmzSignature: sdk.String("ab"),
        XAmzSignedHeaders: sdk.String("cupiditate"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartCutoverResponse != nil {
        // handle response
    }
}
```

## StartExport

Start export.

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
    res, err := s.SDK.StartExport(ctx, operations.StartExportRequest{
        RequestBody: operations.StartExportRequestBody{
            S3Bucket: "consequatur",
            S3BucketOwner: sdk.String("tempora"),
            S3Key: "debitis",
        },
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("sequi"),
        XAmzDate: sdk.String("quo"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("recusandae"),
        XAmzSignedHeaders: sdk.String("aperiam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartExportResponse != nil {
        // handle response
    }
}
```

## StartImport

Start import.

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
    res, err := s.SDK.StartImport(ctx, operations.StartImportRequest{
        RequestBody: operations.StartImportRequestBody{
            ClientToken: sdk.String("distinctio"),
            S3BucketSource: operations.StartImportRequestBodyS3BucketSource{
                S3Bucket: sdk.String("quod"),
                S3BucketOwner: sdk.String("dignissimos"),
                S3Key: sdk.String("inventore"),
            },
        },
        XAmzAlgorithm: sdk.String("nihil"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("aliquam"),
        XAmzSecurityToken: sdk.String("odio"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("commodi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartImportResponse != nil {
        // handle response
    }
}
```

## StartReplication

Starts replication for SNAPSHOT_SHIPPING agents.

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
            SourceServerID: "sapiente",
        },
        XAmzAlgorithm: sdk.String("dolores"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("accusantium"),
        XAmzSecurityToken: sdk.String("porro"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("quas"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SourceServer != nil {
        // handle response
    }
}
```

## StartTest

Launches a Test Instance for specific Source Servers. This command starts a LAUNCH job whose initiatedBy property is StartTest and changes the SourceServer.lifeCycle.state property to TESTING.

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
    res, err := s.SDK.StartTest(ctx, operations.StartTestRequest{
        RequestBody: operations.StartTestRequestBody{
            SourceServerIDs: []string{
                "consequuntur",
                "deleniti",
                "fugit",
            },
            Tags: map[string]string{
                "mollitia": "incidunt",
                "atque": "explicabo",
                "minima": "nisi",
            },
        },
        XAmzAlgorithm: sdk.String("fugit"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("consequuntur"),
        XAmzDate: sdk.String("ratione"),
        XAmzSecurityToken: sdk.String("explicabo"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("occaecati"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartTestResponse != nil {
        // handle response
    }
}
```

## TagResource

Adds or overwrites only the specified tags for the specified Application Migration Service resource or resources. When you specify an existing tag key, the value is overwritten with the new value. Each resource can have a maximum of 50 tags. Each tag consists of a key and optional value.

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
                "et": "esse",
                "eveniet": "accusamus",
                "veritatis": "esse",
            },
        },
        XAmzAlgorithm: sdk.String("quod"),
        XAmzContentSha256: sdk.String("nam"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("vel"),
        ResourceArn: "harum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TerminateTargetInstances

Starts a job that terminates specific launched EC2 Test and Cutover instances. This command will not work for any Source Server with a lifecycle.state of TESTING, CUTTING_OVER, or CUTOVER.

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
    res, err := s.SDK.TerminateTargetInstances(ctx, operations.TerminateTargetInstancesRequest{
        RequestBody: operations.TerminateTargetInstancesRequestBody{
            SourceServerIDs: []string{
                "rerum",
                "occaecati",
            },
            Tags: map[string]string{
                "distinctio": "eligendi",
                "sit": "culpa",
            },
        },
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

    if res.TerminateTargetInstancesResponse != nil {
        // handle response
    }
}
```

## UnarchiveApplication

Unarchive application.

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
    res, err := s.SDK.UnarchiveApplication(ctx, operations.UnarchiveApplicationRequest{
        RequestBody: operations.UnarchiveApplicationRequestBody{
            ApplicationID: "sapiente",
        },
        XAmzAlgorithm: sdk.String("consectetur"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("blanditiis"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("a"),
        XAmzSignature: sdk.String("nulla"),
        XAmzSignedHeaders: sdk.String("quas"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Application != nil {
        // handle response
    }
}
```

## UnarchiveWave

Unarchive wave.

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
    res, err := s.SDK.UnarchiveWave(ctx, operations.UnarchiveWaveRequest{
        RequestBody: operations.UnarchiveWaveRequestBody{
            WaveID: "esse",
        },
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("a"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("sint"),
        XAmzSecurityToken: sdk.String("pariatur"),
        XAmzSignature: sdk.String("possimus"),
        XAmzSignedHeaders: sdk.String("quia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Wave != nil {
        // handle response
    }
}
```

## UntagResource

Deletes the specified set of tags from the specified set of Application Migration Service resources.

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
        XAmzAlgorithm: sdk.String("eveniet"),
        XAmzContentSha256: sdk.String("asperiores"),
        XAmzCredential: sdk.String("facere"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("similique"),
        ResourceArn: "culpa",
        TagKeys: []string{
            "tenetur",
            "quae",
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

## UpdateApplication

Update application.

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
    res, err := s.SDK.UpdateApplication(ctx, operations.UpdateApplicationRequest{
        RequestBody: operations.UpdateApplicationRequestBody{
            ApplicationID: "earum",
            Description: sdk.String("vel"),
            Name: sdk.String("Charlotte Rempel"),
        },
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

    if res.Application != nil {
        // handle response
    }
}
```

## UpdateLaunchConfiguration

Updates multiple LaunchConfigurations by Source Server ID.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
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
            BootMode: operations.UpdateLaunchConfigurationRequestBodyBootModeEnumLegacyBios.ToPointer(),
            CopyPrivateIP: sdk.Bool(false),
            CopyTags: sdk.Bool(false),
            EnableMapAutoTagging: sdk.Bool(false),
            LaunchDisposition: operations.UpdateLaunchConfigurationRequestBodyLaunchDispositionEnumStopped.ToPointer(),
            Licensing: &operations.UpdateLaunchConfigurationRequestBodyLicensing{
                OsByol: sdk.Bool(false),
            },
            MapAutoTaggingMpeID: sdk.String("voluptatum"),
            Name: sdk.String("Rosemarie Jacobs"),
            PostLaunchActions: &operations.UpdateLaunchConfigurationRequestBodyPostLaunchActions{
                CloudWatchLogGroupName: sdk.String("dolorum"),
                Deployment: shared.PostLaunchActionsDeploymentTypeEnumTestAndCutover.ToPointer(),
                S3LogBucket: sdk.String("omnis"),
                S3OutputKeyPrefix: sdk.String("tenetur"),
                SsmDocuments: []shared.SsmDocument{
                    shared.SsmDocument{
                        ActionName: "at",
                        ExternalParameters: map[string]shared.SsmExternalParameter{
                            "voluptate": shared.SsmExternalParameter{
                                DynamicPath: sdk.String("ipsa"),
                            },
                        },
                        MustSucceedForCutover: sdk.Bool(false),
                        Parameters: map[string][]shared.SsmParameterStoreParameter{
                            "veritatis": []shared.SsmParameterStoreParameter{
                                shared.SsmParameterStoreParameter{
                                    ParameterName: "adipisci",
                                    ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                                },
                            },
                            "iste": []shared.SsmParameterStoreParameter{
                                shared.SsmParameterStoreParameter{
                                    ParameterName: "accusantium",
                                    ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                                },
                                shared.SsmParameterStoreParameter{
                                    ParameterName: "rem",
                                    ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                                },
                                shared.SsmParameterStoreParameter{
                                    ParameterName: "aut",
                                    ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                                },
                                shared.SsmParameterStoreParameter{
                                    ParameterName: "laudantium",
                                    ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                                },
                            },
                        },
                        SsmDocumentName: "eum",
                        TimeoutSeconds: sdk.Int64(649832),
                    },
                },
            },
            SourceServerID: "ab",
            TargetInstanceTypeRightSizingMethod: operations.UpdateLaunchConfigurationRequestBodyTargetInstanceTypeRightSizingMethodEnumBasic.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("non"),
        XAmzContentSha256: sdk.String("voluptatem"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("numquam"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("explicabo"),
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
	"openapi/pkg/models/shared"
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
            AssociatePublicIPAddress: sdk.Bool(false),
            BootMode: operations.UpdateLaunchConfigurationTemplateRequestBodyBootModeEnumLegacyBios.ToPointer(),
            CopyPrivateIP: sdk.Bool(false),
            CopyTags: sdk.Bool(false),
            EnableMapAutoTagging: sdk.Bool(false),
            LargeVolumeConf: &operations.UpdateLaunchConfigurationTemplateRequestBodyLargeVolumeConf{
                Iops: sdk.Int64(12036),
                Throughput: sdk.Int64(491025),
                VolumeType: shared.VolumeTypeEnumIo1.ToPointer(),
            },
            LaunchConfigurationTemplateID: "maiores",
            LaunchDisposition: operations.UpdateLaunchConfigurationTemplateRequestBodyLaunchDispositionEnumStarted.ToPointer(),
            Licensing: &operations.UpdateLaunchConfigurationTemplateRequestBodyLicensing{
                OsByol: sdk.Bool(false),
            },
            MapAutoTaggingMpeID: sdk.String("velit"),
            PostLaunchActions: &operations.UpdateLaunchConfigurationTemplateRequestBodyPostLaunchActions{
                CloudWatchLogGroupName: sdk.String("voluptatibus"),
                Deployment: shared.PostLaunchActionsDeploymentTypeEnumCutoverOnly.ToPointer(),
                S3LogBucket: sdk.String("asperiores"),
                S3OutputKeyPrefix: sdk.String("aperiam"),
                SsmDocuments: []shared.SsmDocument{
                    shared.SsmDocument{
                        ActionName: "quaerat",
                        ExternalParameters: map[string]shared.SsmExternalParameter{
                            "repellendus": shared.SsmExternalParameter{
                                DynamicPath: sdk.String("officia"),
                            },
                        },
                        MustSucceedForCutover: sdk.Bool(false),
                        Parameters: map[string][]shared.SsmParameterStoreParameter{
                            "dignissimos": []shared.SsmParameterStoreParameter{
                                shared.SsmParameterStoreParameter{
                                    ParameterName: "asperiores",
                                    ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                                },
                                shared.SsmParameterStoreParameter{
                                    ParameterName: "nemo",
                                    ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                                },
                                shared.SsmParameterStoreParameter{
                                    ParameterName: "quae",
                                    ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                                },
                            },
                            "quaerat": []shared.SsmParameterStoreParameter{
                                shared.SsmParameterStoreParameter{
                                    ParameterName: "quod",
                                    ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                                },
                                shared.SsmParameterStoreParameter{
                                    ParameterName: "labore",
                                    ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                                },
                                shared.SsmParameterStoreParameter{
                                    ParameterName: "ab",
                                    ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                                },
                                shared.SsmParameterStoreParameter{
                                    ParameterName: "adipisci",
                                    ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                                },
                            },
                            "fuga": []shared.SsmParameterStoreParameter{
                                shared.SsmParameterStoreParameter{
                                    ParameterName: "suscipit",
                                    ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                                },
                                shared.SsmParameterStoreParameter{
                                    ParameterName: "velit",
                                    ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                                },
                                shared.SsmParameterStoreParameter{
                                    ParameterName: "culpa",
                                    ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                                },
                            },
                            "est": []shared.SsmParameterStoreParameter{
                                shared.SsmParameterStoreParameter{
                                    ParameterName: "totam",
                                    ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                                },
                                shared.SsmParameterStoreParameter{
                                    ParameterName: "fugiat",
                                    ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                                },
                                shared.SsmParameterStoreParameter{
                                    ParameterName: "vel",
                                    ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                                },
                                shared.SsmParameterStoreParameter{
                                    ParameterName: "ducimus",
                                    ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                                },
                            },
                        },
                        SsmDocumentName: "quos",
                        TimeoutSeconds: sdk.Int64(427834),
                    },
                    shared.SsmDocument{
                        ActionName: "labore",
                        ExternalParameters: map[string]shared.SsmExternalParameter{
                            "facilis": shared.SsmExternalParameter{
                                DynamicPath: sdk.String("cum"),
                            },
                            "commodi": shared.SsmExternalParameter{
                                DynamicPath: sdk.String("in"),
                            },
                            "corporis": shared.SsmExternalParameter{
                                DynamicPath: sdk.String("reiciendis"),
                            },
                            "assumenda": shared.SsmExternalParameter{
                                DynamicPath: sdk.String("nemo"),
                            },
                        },
                        MustSucceedForCutover: sdk.Bool(false),
                        Parameters: map[string][]shared.SsmParameterStoreParameter{
                            "aliquid": []shared.SsmParameterStoreParameter{
                                shared.SsmParameterStoreParameter{
                                    ParameterName: "cum",
                                    ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                                },
                            },
                            "consectetur": []shared.SsmParameterStoreParameter{
                                shared.SsmParameterStoreParameter{
                                    ParameterName: "exercitationem",
                                    ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                                },
                                shared.SsmParameterStoreParameter{
                                    ParameterName: "earum",
                                    ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                                },
                            },
                            "facere": []shared.SsmParameterStoreParameter{
                                shared.SsmParameterStoreParameter{
                                    ParameterName: "doloribus",
                                    ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                                },
                                shared.SsmParameterStoreParameter{
                                    ParameterName: "suscipit",
                                    ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                                },
                            },
                            "reiciendis": []shared.SsmParameterStoreParameter{
                                shared.SsmParameterStoreParameter{
                                    ParameterName: "saepe",
                                    ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                                },
                                shared.SsmParameterStoreParameter{
                                    ParameterName: "necessitatibus",
                                    ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                                },
                                shared.SsmParameterStoreParameter{
                                    ParameterName: "dolore",
                                    ParameterType: shared.SsmParameterStoreParameterTypeEnumString,
                                },
                            },
                        },
                        SsmDocumentName: "sunt",
                        TimeoutSeconds: sdk.Int64(992012),
                    },
                },
            },
            SmallVolumeConf: &operations.UpdateLaunchConfigurationTemplateRequestBodySmallVolumeConf{
                Iops: sdk.Int64(241545),
                Throughput: sdk.Int64(249420),
                VolumeType: shared.VolumeTypeEnumIo2.ToPointer(),
            },
            SmallVolumeMaxSize: sdk.Int64(105906),
            TargetInstanceTypeRightSizingMethod: operations.UpdateLaunchConfigurationTemplateRequestBodyTargetInstanceTypeRightSizingMethodEnumNone.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("a"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("consectetur"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("harum"),
        XAmzSignature: sdk.String("laboriosam"),
        XAmzSignedHeaders: sdk.String("ipsa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LaunchConfigurationTemplate != nil {
        // handle response
    }
}
```

## UpdateReplicationConfiguration

Allows you to update multiple ReplicationConfigurations by Source Server ID.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
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
            BandwidthThrottling: sdk.Int64(916727),
            CreatePublicIP: sdk.Bool(false),
            DataPlaneRouting: operations.UpdateReplicationConfigurationRequestBodyDataPlaneRoutingEnumPublicIP.ToPointer(),
            DefaultLargeStagingDiskType: operations.UpdateReplicationConfigurationRequestBodyDefaultLargeStagingDiskTypeEnumGp2.ToPointer(),
            EbsEncryption: operations.UpdateReplicationConfigurationRequestBodyEbsEncryptionEnumCustom.ToPointer(),
            EbsEncryptionKeyArn: sdk.String("similique"),
            Name: sdk.String("Kelly Hoeger"),
            ReplicatedDisks: []shared.ReplicationConfigurationReplicatedDisk{
                shared.ReplicationConfigurationReplicatedDisk{
                    DeviceName: sdk.String("nobis"),
                    Iops: sdk.Int64(680116),
                    IsBootDisk: sdk.Bool(false),
                    StagingDiskType: shared.ReplicationConfigurationReplicatedDiskStagingDiskTypeEnumGp2.ToPointer(),
                    Throughput: sdk.Int64(795535),
                },
                shared.ReplicationConfigurationReplicatedDisk{
                    DeviceName: sdk.String("dolores"),
                    Iops: sdk.Int64(503934),
                    IsBootDisk: sdk.Bool(false),
                    StagingDiskType: shared.ReplicationConfigurationReplicatedDiskStagingDiskTypeEnumSc1.ToPointer(),
                    Throughput: sdk.Int64(296242),
                },
            },
            ReplicationServerInstanceType: sdk.String("aliquam"),
            ReplicationServersSecurityGroupsIDs: []string{
                "temporibus",
                "ullam",
                "adipisci",
                "cum",
            },
            SourceServerID: "blanditiis",
            StagingAreaSubnetID: sdk.String("quas"),
            StagingAreaTags: map[string]string{
                "nesciunt": "culpa",
                "corrupti": "pariatur",
                "totam": "hic",
                "exercitationem": "nobis",
            },
            UseDedicatedReplicationServer: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("sit"),
        XAmzContentSha256: sdk.String("rerum"),
        XAmzCredential: sdk.String("sed"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("explicabo"),
        XAmzSignature: sdk.String("asperiores"),
        XAmzSignedHeaders: sdk.String("facilis"),
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

Updates multiple ReplicationConfigurationTemplates by ID.

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
    res, err := s.SDK.UpdateReplicationConfigurationTemplate(ctx, operations.UpdateReplicationConfigurationTemplateRequest{
        RequestBody: operations.UpdateReplicationConfigurationTemplateRequestBody{
            Arn: sdk.String("voluptate"),
            AssociateDefaultSecurityGroup: sdk.Bool(false),
            BandwidthThrottling: sdk.Int64(709072),
            CreatePublicIP: sdk.Bool(false),
            DataPlaneRouting: operations.UpdateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnumPrivateIP.ToPointer(),
            DefaultLargeStagingDiskType: operations.UpdateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnumSt1.ToPointer(),
            EbsEncryption: operations.UpdateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnumDefault.ToPointer(),
            EbsEncryptionKeyArn: sdk.String("laborum"),
            ReplicationConfigurationTemplateID: "sed",
            ReplicationServerInstanceType: sdk.String("in"),
            ReplicationServersSecurityGroupsIDs: []string{
                "quidem",
                "explicabo",
            },
            StagingAreaSubnetID: sdk.String("voluptas"),
            StagingAreaTags: map[string]string{
                "architecto": "suscipit",
                "sapiente": "debitis",
                "illo": "reiciendis",
            },
            UseDedicatedReplicationServer: sdk.Bool(false),
        },
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

    if res.ReplicationConfigurationTemplate != nil {
        // handle response
    }
}
```

## UpdateSourceServerReplicationType

Allows you to change between the AGENT_BASED replication type and the SNAPSHOT_SHIPPING replication type.

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
    res, err := s.SDK.UpdateSourceServerReplicationType(ctx, operations.UpdateSourceServerReplicationTypeRequest{
        RequestBody: operations.UpdateSourceServerReplicationTypeRequestBody{
            ReplicationType: operations.UpdateSourceServerReplicationTypeRequestBodyReplicationTypeEnumSnapshotShipping,
            SourceServerID: "ipsum",
        },
        XAmzAlgorithm: sdk.String("ea"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("quos"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("voluptate"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SourceServer != nil {
        // handle response
    }
}
```

## UpdateWave

Update wave.

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
    res, err := s.SDK.UpdateWave(ctx, operations.UpdateWaveRequest{
        RequestBody: operations.UpdateWaveRequestBody{
            Description: sdk.String("reiciendis"),
            Name: sdk.String("Karen Franey"),
            WaveID: "facilis",
        },
        XAmzAlgorithm: sdk.String("quaerat"),
        XAmzContentSha256: sdk.String("incidunt"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("rem"),
        XAmzSignature: sdk.String("sit"),
        XAmzSignedHeaders: sdk.String("nobis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Wave != nil {
        // handle response
    }
}
```
