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
            DestinationID: "sit",
            Name: "voluptas",
            NamespaceDefinition: "destination",
            NamespaceFormat: "expedita",
            OperationIds: []string{
                "dolor",
                "expedita",
                "voluptas",
            },
            Prefix: "fugit",
            ResourceRequirements: &shared.ResourceRequirements{
                CPULimit: "et",
                CPURequest: "nihil",
                MemoryLimit: "rerum",
                MemoryRequest: "dicta",
            },
            Schedule: &shared.ConnectionSchedule{
                TimeUnit: "weeks",
                Units: 5617773211005988520,
            },
            SourceID: "et",
            Status: "deprecated",
            SyncCatalog: &shared.AirbyteCatalog{
                Streams: []shared.AirbyteStreamAndConfiguration{
                    shared.AirbyteStreamAndConfiguration{
                        Config: &shared.AirbyteStreamConfiguration{
                            AliasName: "et",
                            CursorField: []string{
                                "iste",
                            },
                            DestinationSyncMode: "append",
                            PrimaryKey: [][]string{
                                []string{
                                    "illum",
                                },
                                []string{
                                    "vel",
                                },
                                []string{
                                    "dolore",
                                },
                            },
                            Selected: false,
                            SyncMode: "incremental",
                        },
                        Stream: &shared.AirbyteStream{
                            DefaultCursorField: []string{
                                "totam",
                                "commodi",
                                "quis",
                            },
                            JSONSchema: map[string]interface{}{
                                "aut": "odit",
                                "non": "voluptas",
                            },
                            Name: "omnis",
                            Namespace: "aut",
                            SourceDefinedCursor: true,
                            SourceDefinedPrimaryKey: [][]string{
                                []string{
                                    "autem",
                                    "consectetur",
                                },
                                []string{
                                    "odio",
                                },
                                []string{
                                    "recusandae",
                                },
                            },
                            SupportedSyncModes: []shared.SyncModeEnum{
                                "full_refresh",
                                "full_refresh",
                            },
                        },
                    },
                    shared.AirbyteStreamAndConfiguration{
                        Config: &shared.AirbyteStreamConfiguration{
                            AliasName: "modi",
                            CursorField: []string{
                                "inventore",
                            },
                            DestinationSyncMode: "append_dedup",
                            PrimaryKey: [][]string{
                                []string{
                                    "reprehenderit",
                                    "tempore",
                                    "maiores",
                                },
                                []string{
                                    "dolor",
                                    "beatae",
                                    "veritatis",
                                },
                                []string{
                                    "et",
                                    "omnis",
                                    "ipsum",
                                },
                            },
                            Selected: true,
                            SyncMode: "full_refresh",
                        },
                        Stream: &shared.AirbyteStream{
                            DefaultCursorField: []string{
                                "vel",
                            },
                            JSONSchema: map[string]interface{}{
                                "mollitia": "voluptas",
                                "quam": "reprehenderit",
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