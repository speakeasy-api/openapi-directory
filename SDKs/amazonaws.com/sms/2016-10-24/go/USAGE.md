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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.CreateAppRequest{
        CreateAppRequest: shared.CreateAppRequest{
            ClientToken: "corrupti",
            Description: "provident",
            Name: "distinctio",
            RoleName: "quibusdam",
            ServerGroups: []shared.ServerGroup{
                shared.ServerGroup{
                    Name: "nulla",
                    ServerGroupID: "corrupti",
                    ServerList: []shared.Server{
                        shared.Server{
                            ReplicationJobID: "vel",
                            ReplicationJobTerminated: false,
                            ServerID: "error",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "deserunt",
                                VMManagerType: "SCVMM",
                                VMName: "iure",
                                VMPath: "magnam",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "debitis",
                                    VMManagerID: "ipsa",
                                },
                            },
                        },
                        shared.Server{
                            ReplicationJobID: "delectus",
                            ReplicationJobTerminated: false,
                            ServerID: "tempora",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "suscipit",
                                VMManagerType: "SCVMM",
                                VMName: "minus",
                                VMPath: "placeat",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "voluptatum",
                                    VMManagerID: "iusto",
                                },
                            },
                        },
                        shared.Server{
                            ReplicationJobID: "excepturi",
                            ReplicationJobTerminated: false,
                            ServerID: "nisi",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "recusandae",
                                VMManagerType: "HYPERV-MANAGER",
                                VMName: "ab",
                                VMPath: "quis",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "veritatis",
                                    VMManagerID: "deserunt",
                                },
                            },
                        },
                        shared.Server{
                            ReplicationJobID: "perferendis",
                            ReplicationJobTerminated: false,
                            ServerID: "ipsam",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "repellendus",
                                VMManagerType: "HYPERV-MANAGER",
                                VMName: "quo",
                                VMPath: "odit",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "at",
                                    VMManagerID: "at",
                                },
                            },
                        },
                    },
                },
                shared.ServerGroup{
                    Name: "maiores",
                    ServerGroupID: "molestiae",
                    ServerList: []shared.Server{
                        shared.Server{
                            ReplicationJobID: "quod",
                            ReplicationJobTerminated: false,
                            ServerID: "esse",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "totam",
                                VMManagerType: "HYPERV-MANAGER",
                                VMName: "dolorum",
                                VMPath: "dicta",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "nam",
                                    VMManagerID: "officia",
                                },
                            },
                        },
                        shared.Server{
                            ReplicationJobID: "occaecati",
                            ReplicationJobTerminated: false,
                            ServerID: "fugit",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "deleniti",
                                VMManagerType: "HYPERV-MANAGER",
                                VMName: "optio",
                                VMPath: "totam",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "beatae",
                                    VMManagerID: "commodi",
                                },
                            },
                        },
                        shared.Server{
                            ReplicationJobID: "molestiae",
                            ReplicationJobTerminated: false,
                            ServerID: "modi",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "qui",
                                VMManagerType: "HYPERV-MANAGER",
                                VMName: "cum",
                                VMPath: "esse",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "ipsum",
                                    VMManagerID: "excepturi",
                                },
                            },
                        },
                        shared.Server{
                            ReplicationJobID: "aspernatur",
                            ReplicationJobTerminated: false,
                            ServerID: "perferendis",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "ad",
                                VMManagerType: "SCVMM",
                                VMName: "sed",
                                VMPath: "iste",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "dolor",
                                    VMManagerID: "natus",
                                },
                            },
                        },
                    },
                },
                shared.ServerGroup{
                    Name: "laboriosam",
                    ServerGroupID: "hic",
                    ServerList: []shared.Server{
                        shared.Server{
                            ReplicationJobID: "fuga",
                            ReplicationJobTerminated: false,
                            ServerID: "in",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "corporis",
                                VMManagerType: "SCVMM",
                                VMName: "iure",
                                VMPath: "saepe",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "quidem",
                                    VMManagerID: "architecto",
                                },
                            },
                        },
                        shared.Server{
                            ReplicationJobID: "ipsa",
                            ReplicationJobTerminated: false,
                            ServerID: "reiciendis",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "est",
                                VMManagerType: "SCVMM",
                                VMName: "laborum",
                                VMPath: "dolores",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "dolorem",
                                    VMManagerID: "corporis",
                                },
                            },
                        },
                        shared.Server{
                            ReplicationJobID: "explicabo",
                            ReplicationJobTerminated: false,
                            ServerID: "nobis",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "enim",
                                VMManagerType: "SCVMM",
                                VMName: "nemo",
                                VMPath: "minima",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "excepturi",
                                    VMManagerID: "accusantium",
                                },
                            },
                        },
                        shared.Server{
                            ReplicationJobID: "iure",
                            ReplicationJobTerminated: false,
                            ServerID: "culpa",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "doloribus",
                                VMManagerType: "HYPERV-MANAGER",
                                VMName: "architecto",
                                VMPath: "mollitia",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "dolorem",
                                    VMManagerID: "culpa",
                                },
                            },
                        },
                    },
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "repellat",
                    Value: "mollitia",
                },
            },
        },
        XAmzAlgorithm: "occaecati",
        XAmzContentSha256: "numquam",
        XAmzCredential: "commodi",
        XAmzDate: "quam",
        XAmzSecurityToken: "molestiae",
        XAmzSignature: "velit",
        XAmzSignedHeaders: "error",
        XAmzTarget: "AWSServerMigrationService_V2016_10_24.CreateApp",
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