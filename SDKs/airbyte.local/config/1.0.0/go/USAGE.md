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
    s := sdk.New()

    req := operations.CreateConnectionRequest{
        Request: shared.ConnectionCreate{
            DestinationID: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
            Name: "est",
            NamespaceDefinition: "source",
            NamespaceFormat: "${SOURCE_NAMESPACE}",
            OperationIds: []string{
                "dfc2ddf7-cc78-4ca1-ba92-8fc816742cb7",
                "39205929-396f-4ea7-996e-b10faaa2352c",
            },
            Prefix: "ipsam",
            ResourceRequirements: &shared.ResourceRequirements{
                CPULimit: "est",
                CPURequest: "commodi",
                MemoryLimit: "quia",
                MemoryRequest: "similique",
            },
            Schedule: &shared.ConnectionSchedule{
                TimeUnit: "minutes",
                Units: 438601,
            },
            SourceID: "aff1a3a2-fa94-4677-b925-1aa52c3f5ad0",
            Status: "active",
            SyncCatalog: &shared.AirbyteCatalog{
                Streams: []shared.AirbyteStreamAndConfiguration{
                    shared.AirbyteStreamAndConfiguration{
                        Config: &shared.AirbyteStreamConfiguration{
                            AliasName: "quo",
                            CursorField: []string{
                                "explicabo",
                                "aut",
                                "reiciendis",
                            },
                            DestinationSyncMode: "append_dedup",
                            PrimaryKey: [][]string{
                                []string{
                                    "reiciendis",
                                    "illo",
                                    "id",
                                },
                                []string{
                                    "quod",
                                    "sit",
                                },
                            },
                            Selected: false,
                            SyncMode: "full_refresh",
                        },
                        Stream: &shared.AirbyteStream{
                            DefaultCursorField: []string{
                                "veniam",
                                "reiciendis",
                            },
                            JSONSchema: map[string]interface{}{
                                "ea": "exercitationem",
                            },
                            Name: "deleniti",
                            Namespace: "sed",
                            SourceDefinedCursor: false,
                            SourceDefinedPrimaryKey: [][]string{
                                []string{
                                    "aut",
                                    "esse",
                                },
                                []string{
                                    "veritatis",
                                    "numquam",
                                    "eligendi",
                                    "error",
                                },
                                []string{
                                    "et",
                                    "ut",
                                    "molestias",
                                },
                            },
                            SupportedSyncModes: []shared.SyncModeEnum{
                                "incremental",
                                "full_refresh",
                                "incremental",
                            },
                        },
                    },
                    shared.AirbyteStreamAndConfiguration{
                        Config: &shared.AirbyteStreamConfiguration{
                            AliasName: "in",
                            CursorField: []string{
                                "non",
                            },
                            DestinationSyncMode: "append",
                            PrimaryKey: [][]string{
                                []string{
                                    "libero",
                                },
                                []string{
                                    "magni",
                                    "est",
                                    "porro",
                                    "voluptas",
                                },
                            },
                            Selected: false,
                            SyncMode: "full_refresh",
                        },
                        Stream: &shared.AirbyteStream{
                            DefaultCursorField: []string{
                                "sit",
                                "in",
                            },
                            JSONSchema: map[string]interface{}{
                                "omnis": "voluptatem",
                                "dolorem": "eum",
                                "quis": "consequatur",
                            },
                            Name: "ratione",
                            Namespace: "cum",
                            SourceDefinedCursor: false,
                            SourceDefinedPrimaryKey: [][]string{
                                []string{
                                    "nihil",
                                    "id",
                                },
                                []string{
                                    "sapiente",
                                    "et",
                                },
                                []string{
                                    "possimus",
                                },
                            },
                            SupportedSyncModes: []shared.SyncModeEnum{
                                "full_refresh",
                                "incremental",
                                "incremental",
                            },
                        },
                    },
                    shared.AirbyteStreamAndConfiguration{
                        Config: &shared.AirbyteStreamConfiguration{
                            AliasName: "sunt",
                            CursorField: []string{
                                "modi",
                                "necessitatibus",
                                "tenetur",
                            },
                            DestinationSyncMode: "append_dedup",
                            PrimaryKey: [][]string{
                                []string{
                                    "nulla",
                                    "reiciendis",
                                },
                                []string{
                                    "fugit",
                                    "ullam",
                                    "voluptas",
                                },
                            },
                            Selected: false,
                            SyncMode: "incremental",
                        },
                        Stream: &shared.AirbyteStream{
                            DefaultCursorField: []string{
                                "qui",
                                "cum",
                            },
                            JSONSchema: map[string]interface{}{
                                "magnam": "culpa",
                                "enim": "aut",
                                "delectus": "eligendi",
                                "officia": "est",
                            },
                            Name: "distinctio",
                            Namespace: "et",
                            SourceDefinedCursor: false,
                            SourceDefinedPrimaryKey: [][]string{
                                []string{
                                    "incidunt",
                                    "facilis",
                                    "qui",
                                    "nihil",
                                },
                                []string{
                                    "id",
                                    "voluptatum",
                                    "sit",
                                },
                                []string{
                                    "corporis",
                                    "porro",
                                },
                            },
                            SupportedSyncModes: []shared.SyncModeEnum{
                                "full_refresh",
                                "full_refresh",
                                "full_refresh",
                            },
                        },
                    },
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.Connection.CreateConnection(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ConnectionRead != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->