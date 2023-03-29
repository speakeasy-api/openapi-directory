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
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "AWSServerMigrationService_V2016_10_24.CreateApp",
        },
        Request: shared.CreateAppRequest{
            ClientToken: "nihil",
            Description: "fuga",
            Name: "facilis",
            RoleName: "eum",
            ServerGroups: []shared.ServerGroup{
                shared.ServerGroup{
                    Name: "ullam",
                    ServerGroupID: "saepe",
                    ServerList: []shared.Server{
                        shared.Server{
                            ReplicationJobID: "sapiente",
                            ReplicationJobTerminated: false,
                            ServerID: "enim",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "voluptatum",
                                VMManagerType: "HYPERV-MANAGER",
                                VMName: "vel",
                                VMPath: "non",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "deleniti",
                                    VMManagerID: "similique",
                                },
                            },
                        },
                    },
                },
                shared.ServerGroup{
                    Name: "reprehenderit",
                    ServerGroupID: "molestiae",
                    ServerList: []shared.Server{
                        shared.Server{
                            ReplicationJobID: "quasi",
                            ReplicationJobTerminated: false,
                            ServerID: "laboriosam",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "est",
                                VMManagerType: "VSPHERE",
                                VMName: "consequatur",
                                VMPath: "fugiat",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "a",
                                    VMManagerID: "omnis",
                                },
                            },
                        },
                        shared.Server{
                            ReplicationJobID: "eos",
                            ReplicationJobTerminated: false,
                            ServerID: "accusamus",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "reiciendis",
                                VMManagerType: "SCVMM",
                                VMName: "quibusdam",
                                VMPath: "et",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "praesentium",
                                    VMManagerID: "occaecati",
                                },
                            },
                        },
                        shared.Server{
                            ReplicationJobID: "dolor",
                            ReplicationJobTerminated: false,
                            ServerID: "soluta",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "quisquam",
                                VMManagerType: "SCVMM",
                                VMName: "culpa",
                                VMPath: "qui",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "sed",
                                    VMManagerID: "rerum",
                                },
                            },
                        },
                        shared.Server{
                            ReplicationJobID: "possimus",
                            ReplicationJobTerminated: false,
                            ServerID: "occaecati",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "esse",
                                VMManagerType: "SCVMM",
                                VMName: "voluptatem",
                                VMPath: "amet",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "est",
                                    VMManagerID: "id",
                                },
                            },
                        },
                    },
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "numquam",
                    Value: "similique",
                },
                shared.Tag{
                    Key: "dolores",
                    Value: "sit",
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