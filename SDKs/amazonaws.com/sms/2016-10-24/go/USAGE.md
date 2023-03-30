<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.CreateAppRequest{
        Headers: operations.CreateAppHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "AWSServerMigrationService_V2016_10_24.CreateApp",
        },
        Request: shared.CreateAppRequest{
            ClientToken: "illum",
            Description: "vel",
            Name: "error",
            RoleName: "deserunt",
            ServerGroups: []shared.ServerGroup{
                shared.ServerGroup{
                    Name: "iure",
                    ServerGroupID: "magnam",
                    ServerList: []shared.Server{
                        shared.Server{
                            ReplicationJobID: "ipsa",
                            ReplicationJobTerminated: false,
                            ServerID: "delectus",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "tempora",
                                VMManagerType: "SCVMM",
                                VMName: "molestiae",
                                VMPath: "minus",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "placeat",
                                    VMManagerID: "voluptatum",
                                },
                            },
                        },
                        shared.Server{
                            ReplicationJobID: "iusto",
                            ReplicationJobTerminated: false,
                            ServerID: "excepturi",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "nisi",
                                VMManagerType: "HYPERV-MANAGER",
                                VMName: "temporibus",
                                VMPath: "ab",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "quis",
                                    VMManagerID: "veritatis",
                                },
                            },
                        },
                        shared.Server{
                            ReplicationJobID: "deserunt",
                            ReplicationJobTerminated: false,
                            ServerID: "perferendis",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "ipsam",
                                VMManagerType: "HYPERV-MANAGER",
                                VMName: "sapiente",
                                VMPath: "quo",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "odit",
                                    VMManagerID: "at",
                                },
                            },
                        },
                        shared.Server{
                            ReplicationJobID: "at",
                            ReplicationJobTerminated: false,
                            ServerID: "maiores",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "molestiae",
                                VMManagerType: "HYPERV-MANAGER",
                                VMName: "quod",
                                VMPath: "esse",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "totam",
                                    VMManagerID: "porro",
                                },
                            },
                        },
                    },
                },
                shared.ServerGroup{
                    Name: "dolorum",
                    ServerGroupID: "dicta",
                    ServerList: []shared.Server{
                        shared.Server{
                            ReplicationJobID: "officia",
                            ReplicationJobTerminated: false,
                            ServerID: "occaecati",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "fugit",
                                VMManagerType: "SCVMM",
                                VMName: "hic",
                                VMPath: "optio",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "totam",
                                    VMManagerID: "beatae",
                                },
                            },
                        },
                        shared.Server{
                            ReplicationJobID: "commodi",
                            ReplicationJobTerminated: false,
                            ServerID: "molestiae",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "modi",
                                VMManagerType: "VSPHERE",
                                VMName: "impedit",
                                VMPath: "cum",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "esse",
                                    VMManagerID: "ipsum",
                                },
                            },
                        },
                        shared.Server{
                            ReplicationJobID: "excepturi",
                            ReplicationJobTerminated: false,
                            ServerID: "aspernatur",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "perferendis",
                                VMManagerType: "VSPHERE",
                                VMName: "natus",
                                VMPath: "sed",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "iste",
                                    VMManagerID: "dolor",
                                },
                            },
                        },
                    },
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "laboriosam",
                    Value: "hic",
                },
                shared.Tag{
                    Key: "saepe",
                    Value: "fuga",
                },
                shared.Tag{
                    Key: "in",
                    Value: "corporis",
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.CreateApp(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAppResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->