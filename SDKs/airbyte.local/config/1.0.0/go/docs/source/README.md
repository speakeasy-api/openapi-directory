# Source

## Overview

Source related resources.

### Available Operations

* [CheckConnectionToSource](#checkconnectiontosource) - Check connection to the source
* [CheckConnectionToSourceForUpdate](#checkconnectiontosourceforupdate) - Check connection for a proposed update to a source
* [CloneSource](#clonesource) - Clone source
* [CreateSource](#createsource) - Create a source
* [DeleteSource](#deletesource) - Delete a source
* [DiscoverSchemaForSource](#discoverschemaforsource) - Discover the schema catalog of the source
* [GetMostRecentSourceActorCatalog](#getmostrecentsourceactorcatalog) - Get most recent ActorCatalog for source
* [GetSource](#getsource) - Get source
* [ListSourcesForWorkspace](#listsourcesforworkspace) - List sources for workspace
* [SearchSources](#searchsources) - Search sources
* [UpdateSource](#updatesource) - Update a source
* [WriteDiscoverCatalogResult](#writediscovercatalogresult) - Should only called from worker, to write result from discover activity back to DB.

## CheckConnectionToSource

Check connection to the source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Source.CheckConnectionToSource(ctx, shared.SourceIDRequestBody{
        SourceID: "02d72165-7650-4664-9870-d9d21f9ad030",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CheckConnectionRead != nil {
        // handle response
    }
}
```

## CheckConnectionToSourceForUpdate

Check connection for a proposed update to a source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Source.CheckConnectionToSourceForUpdate(ctx, shared.SourceUpdate{
        ConnectionConfiguration: "optio",
        Name: "Raquel Runolfsdottir Sr.",
        SourceID: "a0836429-068b-4850-aa55-e7f73bc845e3",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CheckConnectionRead != nil {
        // handle response
    }
}
```

## CloneSource

Clone source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Source.CloneSource(ctx, shared.SourceCloneRequestBody{
        SourceCloneID: "20a319f4-badf-4947-89a8-67bc42426665",
        SourceConfiguration: &shared.SourceCloneConfiguration{
            ConnectionConfiguration: sdk.String("quos"),
            Name: sdk.String("Laurie Sporer"),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SourceRead != nil {
        // handle response
    }
}
```

## CreateSource

Create a source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Source.CreateSource(ctx, shared.SourceCreate{
        ConnectionConfiguration: "culpa",
        Name: "Pat Wuckert DVM",
        SourceDefinitionID: "cb4c593e-c12c-4daa-90ec-7afedbd80df4",
        WorkspaceID: "48a47f93-90c5-4888-8983-dabf9ef3ffdd",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SourceRead != nil {
        // handle response
    }
}
```

## DeleteSource

Delete a source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Source.DeleteSource(ctx, shared.SourceIDRequestBody{
        SourceID: "9f7f079a-f4d3-4572-8cdb-0f4d281187d5",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DiscoverSchemaForSource

Discover the schema catalog of the source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Source.DiscoverSchemaForSource(ctx, shared.SourceDiscoverSchemaRequestBody{
        ConnectionID: sdk.String("6844eded-85a9-4065-a628-bdfc2032b6c8"),
        DisableCache: sdk.Bool(false),
        NotifySchemaChange: sdk.Bool(false),
        SourceID: "79923b7e-1358-44f7-ae12-c6891f82ce11",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SourceDiscoverSchemaRead != nil {
        // handle response
    }
}
```

## GetMostRecentSourceActorCatalog

Get most recent ActorCatalog for source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Source.GetMostRecentSourceActorCatalog(ctx, shared.SourceIDRequestBody{
        SourceID: "57172305-377d-4cfa-89df-975e35668609",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActorCatalogWithUpdatedAt != nil {
        // handle response
    }
}
```

## GetSource

Get source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Source.GetSource(ctx, shared.SourceIDRequestBody{
        SourceID: "2e9c3ddc-5f11-41de-a102-6d541a4d190f",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SourceRead != nil {
        // handle response
    }
}
```

## ListSourcesForWorkspace

List sources for workspace. Does not return deleted sources.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Source.ListSourcesForWorkspace(ctx, shared.WorkspaceIDRequestBody{
        WorkspaceID: "eb21780b-ccc0-4dbb-9db4-84708fb4e391",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SourceReadList != nil {
        // handle response
    }
}
```

## SearchSources

Search sources

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Source.SearchSources(ctx, shared.SourceSearch{
        ConnectionConfiguration: sdk.String("officiis"),
        Name: sdk.String("Mrs. Susie Schowalter"),
        SourceDefinitionID: sdk.String("c4c4e545-99ea-4342-a60e-9b200ce78a1b"),
        SourceID: sdk.String("d8fb7a0a-116c-4e72-bd40-97fa30e9af72"),
        SourceName: sdk.String("ipsam"),
        WorkspaceID: sdk.String("b2912203-0d83-4f5a-ab77-99d22e8c1f84"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SourceReadList != nil {
        // handle response
    }
}
```

## UpdateSource

Update a source

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Source.UpdateSource(ctx, shared.SourceUpdate{
        ConnectionConfiguration: "perspiciatis",
        Name: "Naomi Cassin",
        SourceID: "dc42c876-c2c2-4dfb-8cfc-1c76230f841f",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SourceRead != nil {
        // handle response
    }
}
```

## WriteDiscoverCatalogResult

Should only called from worker, to write result from discover activity back to DB.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Source.WriteDiscoverCatalogResult(ctx, shared.SourceDiscoverSchemaWriteRequestBody{
        Catalog: shared.AirbyteCatalog{
            Streams: []shared.AirbyteStreamAndConfiguration{
                shared.AirbyteStreamAndConfiguration{
                    Config: &shared.AirbyteStreamConfiguration{
                        AliasName: sdk.String("architecto"),
                        CursorField: []string{
                            "assumenda",
                            "eos",
                            "dolorem",
                        },
                        DestinationSyncMode: shared.DestinationSyncModeEnumAppendDedup,
                        FieldSelectionEnabled: sdk.Bool(false),
                        PrimaryKey: [][]string{
                            []string{
                                "ab",
                                "magnam",
                                "pariatur",
                            },
                            []string{
                                "autem",
                                "tempore",
                                "recusandae",
                            },
                            []string{
                                "officia",
                                "voluptas",
                            },
                            []string{
                                "corporis",
                                "excepturi",
                                "natus",
                            },
                        },
                        Selected: sdk.Bool(false),
                        SelectedFields: []shared.SelectedFieldInfo{
                            shared.SelectedFieldInfo{
                                FieldPath: []string{
                                    "aspernatur",
                                    "dolores",
                                    "laborum",
                                    "vero",
                                },
                            },
                            shared.SelectedFieldInfo{
                                FieldPath: []string{
                                    "voluptatem",
                                },
                            },
                            shared.SelectedFieldInfo{
                                FieldPath: []string{
                                    "id",
                                    "quae",
                                    "commodi",
                                    "a",
                                },
                            },
                        },
                        Suggested: sdk.Bool(false),
                        SyncMode: shared.SyncModeEnumIncremental,
                    },
                    Stream: &shared.AirbyteStream{
                        DefaultCursorField: []string{
                            "nam",
                        },
                        JSONSchema: map[string]interface{}{
                            "iusto": "ab",
                        },
                        Name: "Louis Kuvalis",
                        Namespace: sdk.String("ullam"),
                        SourceDefinedCursor: sdk.Bool(false),
                        SourceDefinedPrimaryKey: [][]string{
                            []string{
                                "rem",
                                "nemo",
                                "non",
                                "recusandae",
                            },
                            []string{
                                "ipsa",
                                "aliquam",
                                "dolor",
                            },
                        },
                        SupportedSyncModes: []shared.SyncModeEnum{
                            shared.SyncModeEnumIncremental,
                            shared.SyncModeEnumFullRefresh,
                            shared.SyncModeEnumFullRefresh,
                        },
                    },
                },
                shared.AirbyteStreamAndConfiguration{
                    Config: &shared.AirbyteStreamConfiguration{
                        AliasName: sdk.String("consequuntur"),
                        CursorField: []string{
                            "commodi",
                            "ipsam",
                        },
                        DestinationSyncMode: shared.DestinationSyncModeEnumOverwrite,
                        FieldSelectionEnabled: sdk.Bool(false),
                        PrimaryKey: [][]string{
                            []string{
                                "nisi",
                                "explicabo",
                            },
                            []string{
                                "doloremque",
                                "odio",
                            },
                            []string{
                                "voluptatum",
                            },
                        },
                        Selected: sdk.Bool(false),
                        SelectedFields: []shared.SelectedFieldInfo{
                            shared.SelectedFieldInfo{
                                FieldPath: []string{
                                    "quam",
                                    "dolorum",
                                    "libero",
                                    "ratione",
                                },
                            },
                            shared.SelectedFieldInfo{
                                FieldPath: []string{
                                    "optio",
                                    "saepe",
                                },
                            },
                        },
                        Suggested: sdk.Bool(false),
                        SyncMode: shared.SyncModeEnumIncremental,
                    },
                    Stream: &shared.AirbyteStream{
                        DefaultCursorField: []string{
                            "sed",
                        },
                        JSONSchema: map[string]interface{}{
                            "consequuntur": "quis",
                        },
                        Name: "Violet Greenfelder",
                        Namespace: sdk.String("exercitationem"),
                        SourceDefinedCursor: sdk.Bool(false),
                        SourceDefinedPrimaryKey: [][]string{
                            []string{
                                "quasi",
                                "quae",
                            },
                            []string{
                                "possimus",
                                "quo",
                                "suscipit",
                            },
                        },
                        SupportedSyncModes: []shared.SyncModeEnum{
                            shared.SyncModeEnumIncremental,
                            shared.SyncModeEnumIncremental,
                        },
                    },
                },
                shared.AirbyteStreamAndConfiguration{
                    Config: &shared.AirbyteStreamConfiguration{
                        AliasName: sdk.String("doloribus"),
                        CursorField: []string{
                            "alias",
                            "deserunt",
                            "fugit",
                        },
                        DestinationSyncMode: shared.DestinationSyncModeEnumOverwrite,
                        FieldSelectionEnabled: sdk.Bool(false),
                        PrimaryKey: [][]string{
                            []string{
                                "maxime",
                                "facere",
                            },
                            []string{
                                "cupiditate",
                                "deleniti",
                                "quasi",
                                "maiores",
                            },
                            []string{
                                "aliquid",
                            },
                            []string{
                                "unde",
                                "corrupti",
                                "quae",
                            },
                        },
                        Selected: sdk.Bool(false),
                        SelectedFields: []shared.SelectedFieldInfo{
                            shared.SelectedFieldInfo{
                                FieldPath: []string{
                                    "libero",
                                    "nam",
                                },
                            },
                            shared.SelectedFieldInfo{
                                FieldPath: []string{
                                    "adipisci",
                                },
                            },
                            shared.SelectedFieldInfo{
                                FieldPath: []string{
                                    "hic",
                                    "similique",
                                    "fuga",
                                    "consectetur",
                                },
                            },
                            shared.SelectedFieldInfo{
                                FieldPath: []string{
                                    "laudantium",
                                    "cumque",
                                },
                            },
                        },
                        Suggested: sdk.Bool(false),
                        SyncMode: shared.SyncModeEnumFullRefresh,
                    },
                    Stream: &shared.AirbyteStream{
                        DefaultCursorField: []string{
                            "nam",
                        },
                        JSONSchema: map[string]interface{}{
                            "magnam": "aperiam",
                            "ducimus": "itaque",
                            "necessitatibus": "numquam",
                            "doloribus": "eligendi",
                        },
                        Name: "James Russel",
                        Namespace: sdk.String("nobis"),
                        SourceDefinedCursor: sdk.Bool(false),
                        SourceDefinedPrimaryKey: [][]string{
                            []string{
                                "reiciendis",
                                "vitae",
                                "ullam",
                            },
                            []string{
                                "consequuntur",
                                "voluptas",
                            },
                        },
                        SupportedSyncModes: []shared.SyncModeEnum{
                            shared.SyncModeEnumIncremental,
                        },
                    },
                },
            },
        },
        ConfigurationHash: sdk.String("corrupti"),
        ConnectorVersion: sdk.String("est"),
        SourceID: sdk.String("0dc76632-4ccb-406c-8ca1-2d02529270b8"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DiscoverCatalogResult != nil {
        // handle response
    }
}
```
