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
            XAmzAlgorithm: "iusto",
            XAmzContentSha256: "et",
            XAmzCredential: "eos",
            XAmzDate: "voluptas",
            XAmzSecurityToken: "nisi",
            XAmzSignature: "quia",
            XAmzSignedHeaders: "voluptas",
            XAmzTarget: "AWSServerMigrationService_V2016_10_24.CreateApp",
        },
        Request: shared.CreateAppRequest{
            ClientToken: "omnis",
            Description: "dolores",
            Name: "expedita",
            RoleName: "enim",
            ServerGroups: []shared.ServerGroup{
                shared.ServerGroup{
                    Name: "consectetur",
                    ServerGroupID: "sequi",
                    ServerList: []shared.Server{
                        shared.Server{
                            ReplicationJobID: "illo",
                            ReplicationJobTerminated: true,
                            ServerID: "et",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "iste",
                                VMManagerType: "HYPERV-MANAGER",
                                VMName: "odio",
                                VMPath: "est",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "adipisci",
                                    VMManagerID: "quo",
                                },
                            },
                        },
                        shared.Server{
                            ReplicationJobID: "rerum",
                            ReplicationJobTerminated: false,
                            ServerID: "suscipit",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "minus",
                                VMManagerType: "HYPERV-MANAGER",
                                VMName: "vero",
                                VMPath: "est",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "et",
                                    VMManagerID: "nobis",
                                },
                            },
                        },
                        shared.Server{
                            ReplicationJobID: "voluptatum",
                            ReplicationJobTerminated: true,
                            ServerID: "nobis",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "est",
                                VMManagerType: "HYPERV-MANAGER",
                                VMName: "maiores",
                                VMPath: "repellendus",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "repellendus",
                                    VMManagerID: "error",
                                },
                            },
                        },
                    },
                },
                shared.ServerGroup{
                    Name: "ea",
                    ServerGroupID: "fugit",
                    ServerList: []shared.Server{
                        shared.Server{
                            ReplicationJobID: "dolores",
                            ReplicationJobTerminated: true,
                            ServerID: "nam",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "molestias",
                                VMManagerType: "HYPERV-MANAGER",
                                VMName: "cumque",
                                VMPath: "aut",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "deserunt",
                                    VMManagerID: "voluptatem",
                                },
                            },
                        },
                    },
                },
                shared.ServerGroup{
                    Name: "provident",
                    ServerGroupID: "aut",
                    ServerList: []shared.Server{
                        shared.Server{
                            ReplicationJobID: "placeat",
                            ReplicationJobTerminated: false,
                            ServerID: "aut",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "voluptatibus",
                                VMManagerType: "HYPERV-MANAGER",
                                VMName: "reiciendis",
                                VMPath: "amet",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "laboriosam",
                                    VMManagerID: "ut",
                                },
                            },
                        },
                        shared.Server{
                            ReplicationJobID: "laudantium",
                            ReplicationJobTerminated: true,
                            ServerID: "molestiae",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "voluptates",
                                VMManagerType: "HYPERV-MANAGER",
                                VMName: "et",
                                VMPath: "deserunt",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "placeat",
                                    VMManagerID: "et",
                                },
                            },
                        },
                        shared.Server{
                            ReplicationJobID: "vero",
                            ReplicationJobTerminated: true,
                            ServerID: "rem",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "ut",
                                VMManagerType: "VSPHERE",
                                VMName: "officiis",
                                VMPath: "aliquam",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "ratione",
                                    VMManagerID: "adipisci",
                                },
                            },
                        },
                    },
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "inventore",
                    Value: "qui",
                },
                shared.Tag{
                    Key: "molestiae",
                    Value: "dignissimos",
                },
                shared.Tag{
                    Key: "voluptates",
                    Value: "officia",
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