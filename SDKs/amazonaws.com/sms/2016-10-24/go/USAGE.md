<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CreateApp(ctx, operations.CreateAppRequest{
        CreateAppRequest: shared.CreateAppRequest{
            ClientToken: sdk.String("corrupti"),
            Description: sdk.String("provident"),
            Name: sdk.String("Ellis Mitchell"),
            RoleName: sdk.String("illum"),
            ServerGroups: []shared.ServerGroup{
                shared.ServerGroup{
                    Name: sdk.String("Doug Hoppe"),
                    ServerGroupID: sdk.String("debitis"),
                    ServerList: []shared.Server{
                        shared.Server{
                            ReplicationJobID: sdk.String("delectus"),
                            ReplicationJobTerminated: sdk.Bool(false),
                            ServerID: sdk.String("tempora"),
                            ServerType: shared.ServerTypeEnumVirtualMachine.ToPointer(),
                            VMServer: &shared.VMServer{
                                VMManagerName: sdk.String("suscipit"),
                                VMManagerType: shared.VMManagerTypeEnumScvmm.ToPointer(),
                                VMName: sdk.String("minus"),
                                VMPath: sdk.String("placeat"),
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: sdk.String("voluptatum"),
                                    VMManagerID: sdk.String("iusto"),
                                },
                            },
                        },
                    },
                },
                shared.ServerGroup{
                    Name: sdk.String("Charlie Walsh II"),
                    ServerGroupID: sdk.String("veritatis"),
                    ServerList: []shared.Server{
                        shared.Server{
                            ReplicationJobID: sdk.String("perferendis"),
                            ReplicationJobTerminated: sdk.Bool(false),
                            ServerID: sdk.String("ipsam"),
                            ServerType: shared.ServerTypeEnumVirtualMachine.ToPointer(),
                            VMServer: &shared.VMServer{
                                VMManagerName: sdk.String("repellendus"),
                                VMManagerType: shared.VMManagerTypeEnumHypervManager.ToPointer(),
                                VMName: sdk.String("quo"),
                                VMPath: sdk.String("odit"),
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: sdk.String("at"),
                                    VMManagerID: sdk.String("at"),
                                },
                            },
                        },
                        shared.Server{
                            ReplicationJobID: sdk.String("maiores"),
                            ReplicationJobTerminated: sdk.Bool(false),
                            ServerID: sdk.String("molestiae"),
                            ServerType: shared.ServerTypeEnumVirtualMachine.ToPointer(),
                            VMServer: &shared.VMServer{
                                VMManagerName: sdk.String("quod"),
                                VMManagerType: shared.VMManagerTypeEnumHypervManager.ToPointer(),
                                VMName: sdk.String("esse"),
                                VMPath: sdk.String("totam"),
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: sdk.String("porro"),
                                    VMManagerID: sdk.String("dolorum"),
                                },
                            },
                        },
                        shared.Server{
                            ReplicationJobID: sdk.String("dicta"),
                            ReplicationJobTerminated: sdk.Bool(false),
                            ServerID: sdk.String("nam"),
                            ServerType: shared.ServerTypeEnumVirtualMachine.ToPointer(),
                            VMServer: &shared.VMServer{
                                VMManagerName: sdk.String("officia"),
                                VMManagerType: shared.VMManagerTypeEnumScvmm.ToPointer(),
                                VMName: sdk.String("fugit"),
                                VMPath: sdk.String("deleniti"),
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: sdk.String("hic"),
                                    VMManagerID: sdk.String("optio"),
                                },
                            },
                        },
                    },
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("beatae"),
                    Value: sdk.String("commodi"),
                },
                shared.Tag{
                    Key: sdk.String("molestiae"),
                    Value: sdk.String("modi"),
                },
                shared.Tag{
                    Key: sdk.String("qui"),
                    Value: sdk.String("impedit"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("cum"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("ad"),
        XAmzTarget: operations.CreateAppXAmzTargetEnumAwsServerMigrationServiceV20161024CreateApp,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAppResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->