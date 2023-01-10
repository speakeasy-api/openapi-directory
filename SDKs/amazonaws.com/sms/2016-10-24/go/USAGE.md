<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.CreateAppRequest{
        Headers: operations.CreateAppHeaders{
            XAmzAlgorithm: "doloremque",
            XAmzContentSha256: "eius",
            XAmzCredential: "ut",
            XAmzDate: "omnis",
            XAmzSecurityToken: "qui",
            XAmzSignature: "voluptate",
            XAmzSignedHeaders: "quia",
            XAmzTarget: "AWSServerMigrationService_V2016_10_24.CreateApp",
        },
        Request: shared.CreateAppRequest{
            ClientToken: "voluptates",
            Description: "voluptatem",
            Name: "iusto",
            RoleName: "laudantium",
            ServerGroups: []shared.ServerGroup{
                shared.ServerGroup{
                    Name: "ea",
                    ServerGroupID: "qui",
                    ServerList: []shared.Server{
                        shared.Server{
                            ReplicationJobID: "sapiente",
                            ReplicationJobTerminated: false,
                            ServerID: "consequatur",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "dolores",
                                VMManagerType: "VSPHERE",
                                VMName: "et",
                                VMPath: "harum",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "iusto",
                                    VMManagerID: "corporis",
                                },
                            },
                        },
                        shared.Server{
                            ReplicationJobID: "deleniti",
                            ReplicationJobTerminated: true,
                            ServerID: "tempore",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "amet",
                                VMManagerType: "VSPHERE",
                                VMName: "quia",
                                VMPath: "nihil",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "voluptas",
                                    VMManagerID: "quidem",
                                },
                            },
                        },
                    },
                },
                shared.ServerGroup{
                    Name: "quia",
                    ServerGroupID: "voluptas",
                    ServerList: []shared.Server{
                        shared.Server{
                            ReplicationJobID: "earum",
                            ReplicationJobTerminated: true,
                            ServerID: "est",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "soluta",
                                VMManagerType: "SCVMM",
                                VMName: "explicabo",
                                VMPath: "corporis",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "quia",
                                    VMManagerID: "sunt",
                                },
                            },
                        },
                        shared.Server{
                            ReplicationJobID: "necessitatibus",
                            ReplicationJobTerminated: true,
                            ServerID: "voluptatem",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "quia",
                                VMManagerType: "VSPHERE",
                                VMName: "possimus",
                                VMPath: "in",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "totam",
                                    VMManagerID: "excepturi",
                                },
                            },
                        },
                        shared.Server{
                            ReplicationJobID: "rerum",
                            ReplicationJobTerminated: false,
                            ServerID: "facilis",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "odio",
                                VMManagerType: "VSPHERE",
                                VMName: "aut",
                                VMPath: "consectetur",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "nihil",
                                    VMManagerID: "similique",
                                },
                            },
                        },
                    },
                },
                shared.ServerGroup{
                    Name: "magnam",
                    ServerGroupID: "mollitia",
                    ServerList: []shared.Server{
                        shared.Server{
                            ReplicationJobID: "magnam",
                            ReplicationJobTerminated: false,
                            ServerID: "et",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "nisi",
                                VMManagerType: "SCVMM",
                                VMName: "quis",
                                VMPath: "consequatur",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "qui",
                                    VMManagerID: "aut",
                                },
                            },
                        },
                        shared.Server{
                            ReplicationJobID: "modi",
                            ReplicationJobTerminated: false,
                            ServerID: "quia",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "eligendi",
                                VMManagerType: "HYPERV-MANAGER",
                                VMName: "perspiciatis",
                                VMPath: "molestiae",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "voluptatem",
                                    VMManagerID: "autem",
                                },
                            },
                        },
                        shared.Server{
                            ReplicationJobID: "sit",
                            ReplicationJobTerminated: false,
                            ServerID: "molestias",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "voluptates",
                                VMManagerType: "VSPHERE",
                                VMName: "numquam",
                                VMPath: "magni",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "veritatis",
                                    VMManagerID: "itaque",
                                },
                            },
                        },
                    },
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "vitae",
                    Value: "quo",
                },
                shared.Tag{
                    Key: "corrupti",
                    Value: "iusto",
                },
                shared.Tag{
                    Key: "dolores",
                    Value: "nobis",
                },
            },
        },
    }
    
    res, err := s.CreateApp(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAppResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->