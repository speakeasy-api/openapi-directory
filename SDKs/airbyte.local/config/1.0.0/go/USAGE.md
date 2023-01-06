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
                BearerAuth: &shared.SchemeBearerAuth{
                    Authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.CreateConnectionRequest{
        Request: shared.ConnectionCreate{
            DestinationID: "sed",
            Name: "officiis",
            NamespaceDefinition: "destination",
            NamespaceFormat: "consectetur",
            OperationIds: []string{
                "odio",
            },
            Prefix: "qui",
            ResourceRequirements: &shared.ResourceRequirements{
                CPULimit: "recusandae",
                CPURequest: "at",
                MemoryLimit: "ipsum",
                MemoryRequest: "eveniet",
            },
            Schedule: &shared.ConnectionSchedule{
                TimeUnit: "months",
                Units: 7338728586234333996,
            },
            SourceID: "inventore",
            Status: "deprecated",
            SyncCatalog: &shared.AirbyteCatalog{
                Streams: []shared.AirbyteStreamAndConfiguration{
                    shared.AirbyteStreamAndConfiguration{
                        Config: &shared.AirbyteStreamConfiguration{
                            AliasName: "aut",
                            CursorField: []string{
                                "tempore",
                            },
                            DestinationSyncMode: "append",
                            PrimaryKey: [][]string{
                                []string{
                                    "beatae",
                                    "veritatis",
                                },
                                []string{
                                    "et",
                                    "omnis",
                                    "ipsum",
                                },
                                []string{
                                    "dolores",
                                },
                            },
                            Selected: true,
                            SyncMode: "full_refresh",
                        },
                        Stream: &shared.AirbyteStream{
                            DefaultCursorField: []string{
                                "mollitia",
                                "voluptas",
                                "quam",
                            },
                            JSONSchema: map[string]interface{}{
                                "qui": "qui",
                            },
                            Name: "unde",
                            Namespace: "in",
                            SourceDefinedCursor: false,
                            SourceDefinedPrimaryKey: [][]string{
                                []string{
                                    "itaque",
                                    "ab",
                                    "neque",
                                },
                            },
                            SupportedSyncModes: []shared.SyncModeEnum{
                                "full_refresh",
                                "full_refresh",
                                "full_refresh",
                            },
                        },
                    },
                    shared.AirbyteStreamAndConfiguration{
                        Config: &shared.AirbyteStreamConfiguration{
                            AliasName: "architecto",
                            CursorField: []string{
                                "velit",
                            },
                            DestinationSyncMode: "overwrite",
                            PrimaryKey: [][]string{
                                []string{
                                    "voluptates",
                                    "magni",
                                },
                            },
                            Selected: false,
                            SyncMode: "incremental",
                        },
                        Stream: &shared.AirbyteStream{
                            DefaultCursorField: []string{
                                "earum",
                            },
                            JSONSchema: map[string]interface{}{
                                "omnis": "ut",
                            },
                            Name: "consequatur",
                            Namespace: "dolor",
                            SourceDefinedCursor: true,
                            SourceDefinedPrimaryKey: [][]string{
                                []string{
                                    "consectetur",
                                },
                            },
                            SupportedSyncModes: []shared.SyncModeEnum{
                                "incremental",
                            },
                        },
                    },
                    shared.AirbyteStreamAndConfiguration{
                        Config: &shared.AirbyteStreamConfiguration{
                            AliasName: "laboriosam",
                            CursorField: []string{
                                "a",
                                "soluta",
                                "aut",
                            },
                            DestinationSyncMode: "append_dedup",
                            PrimaryKey: [][]string{
                                []string{
                                    "autem",
                                },
                                []string{
                                    "expedita",
                                },
                                []string{
                                    "perferendis",
                                },
                            },
                            Selected: false,
                            SyncMode: "incremental",
                        },
                        Stream: &shared.AirbyteStream{
                            DefaultCursorField: []string{
                                "explicabo",
                                "ea",
                                "maxime",
                            },
                            JSONSchema: map[string]interface{}{
                                "perferendis": "et",
                            },
                            Name: "rerum",
                            Namespace: "reiciendis",
                            SourceDefinedCursor: false,
                            SourceDefinedPrimaryKey: [][]string{
                                []string{
                                    "necessitatibus",
                                },
                                []string{
                                    "quis",
                                    "eum",
                                },
                            },
                            SupportedSyncModes: []shared.SyncModeEnum{
                                "incremental",
                            },
                        },
                    },
                },
            },
        },
    }
    
    res, err := s.Connection.CreateConnection(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ConnectionRead != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->