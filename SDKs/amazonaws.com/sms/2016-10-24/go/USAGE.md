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
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "AWSServerMigrationService_V2016_10_24.CreateApp",
        },
        Request: shared.CreateAppRequest{
            ClientToken: "fugit",
            Description: "et",
            Name: "nihil",
            RoleName: "rerum",
            ServerGroups: []shared.ServerGroup{
                shared.ServerGroup{
                    Name: "debitis",
                    ServerGroupID: "voluptatum",
                    ServerList: []shared.Server{
                        shared.Server{
                            ReplicationJobID: "ut",
                            ReplicationJobTerminated: true,
                            ServerID: "et",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "iste",
                                VMManagerType: "VSPHERE",
                                VMName: "totam",
                                VMPath: "dolores",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "illum",
                                    VMManagerID: "debitis",
                                },
                            },
                        },
                    },
                },
                shared.ServerGroup{
                    Name: "vel",
                    ServerGroupID: "odio",
                    ServerList: []shared.Server{
                        shared.Server{
                            ReplicationJobID: "id",
                            ReplicationJobTerminated: true,
                            ServerID: "accusantium",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "commodi",
                                VMManagerType: "HYPERV-MANAGER",
                                VMName: "est",
                                VMPath: "aut",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "odit",
                                    VMManagerID: "non",
                                },
                            },
                        },
                        shared.Server{
                            ReplicationJobID: "voluptas",
                            ReplicationJobTerminated: true,
                            ServerID: "aut",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "sed",
                                VMManagerType: "SCVMM",
                                VMName: "autem",
                                VMPath: "consectetur",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "nobis",
                                    VMManagerID: "odio",
                                },
                            },
                        },
                    },
                },
                shared.ServerGroup{
                    Name: "qui",
                    ServerGroupID: "recusandae",
                    ServerList: []shared.Server{
                        shared.Server{
                            ReplicationJobID: "ipsum",
                            ReplicationJobTerminated: true,
                            ServerID: "modi",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "inventore",
                                VMManagerType: "HYPERV-MANAGER",
                                VMName: "exercitationem",
                                VMPath: "aut",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "reprehenderit",
                                    VMManagerID: "tempore",
                                },
                            },
                        },
                        shared.Server{
                            ReplicationJobID: "maiores",
                            ReplicationJobTerminated: false,
                            ServerID: "dolor",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "veritatis",
                                VMManagerType: "HYPERV-MANAGER",
                                VMName: "et",
                                VMPath: "omnis",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "ipsum",
                                    VMManagerID: "ex",
                                },
                            },
                        },
                    },
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "placeat",
                    Value: "vel",
                },
                shared.Tag{
                    Key: "rerum",
                    Value: "mollitia",
                },
                shared.Tag{
                    Key: "voluptas",
                    Value: "quam",
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