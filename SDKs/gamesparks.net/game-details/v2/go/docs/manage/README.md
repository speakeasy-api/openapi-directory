# Manage

## Overview

Manage Restv 2 Controller

### Available Operations

* [CopySnapshotToExistingGameUsingPOST](#copysnapshottoexistinggameusingpost) - copySnapshotToExistingGame
* [CreateQueryUsingPOST](#createqueryusingpost) - createQuery
* [CreateScreenUsingPOST](#createscreenusingpost) - createScreen
* [CreateSnapshotUsingPOST](#createsnapshotusingpost) - createSnapshot
* [CreateSnippetUsingPOST](#createsnippetusingpost) - createSnippet
* [DELETEQueryUsingDELETE](#deletequeryusingdelete) - deleteQuery
* [DELETEScreenUsingDELETE](#deletescreenusingdelete) - deleteScreen
* [DELETESnapshotUsingDELETE](#deletesnapshotusingdelete) - deleteSnapshot
* [DELETESnippetUsingDELETE](#deletesnippetusingdelete) - deleteSnippet
* [GETQueryUsingGET](#getqueryusingget) - getQuery
* [GETScreenUsingGET](#getscreenusingget) - getScreen
* [GETSnippetUsingGET](#getsnippetusingget) - getSnippet
* [ListExecutableScreensUsingGET](#listexecutablescreensusingget) - listExecutableScreens
* [ListQueriesUsingGET](#listqueriesusingget) - listQueries
* [ListScreensUsingGET](#listscreensusingget) - listScreens
* [ListSnapshotsUsingGET](#listsnapshotsusingget) - listSnapshots
* [ListSnippetsUsingGET](#listsnippetsusingget) - listSnippets
* [PublishSnapshotUsingPOST](#publishsnapshotusingpost) - publishSnapshot
* [RevertSnapshotUsingPOST](#revertsnapshotusingpost) - revertSnapshot
* [UpdateQueryUsingPUT](#updatequeryusingput) - updateQuery
* [UpdateScreenUsingPUT](#updatescreenusingput) - updateScreen
* [UpdateSnippetUsingPUT](#updatesnippetusingput) - updateSnippet

## CopySnapshotToExistingGameUsingPOST

copySnapshotToExistingGame

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Manage.CopySnapshotToExistingGameUsingPOST(ctx, operations.CopySnapshotToExistingGameUsingPOSTRequest{
        APIKey: "odit",
        SnapshotID: "quo",
        TargetAPIKey: "sequi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ManageResult != nil {
        // handle response
    }
}
```

## CreateQueryUsingPOST

createQuery

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Manage.CreateQueryUsingPOST(ctx, operations.CreateQueryUsingPOSTRequest{
        ManageQuery: shared.ManageQuery{
            EsRules: sdk.String("tenetur"),
            Name: sdk.String("Mr. Alberta Schuster"),
            QbRules: sdk.String("temporibus"),
            ShortCode: sdk.String("laborum"),
        },
        APIKey: "quasi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ManageQuery != nil {
        // handle response
    }
}
```

## CreateScreenUsingPOST

createScreen

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Manage.CreateScreenUsingPOST(ctx, operations.CreateScreenUsingPOSTRequest{
        ManageScreen: shared.ManageScreen{
            Groups: []string{
                "voluptatibus",
                "vero",
                "nihil",
                "praesentium",
            },
            Name: sdk.String("Jose Moen"),
            ShortCode: sdk.String("perferendis"),
            Template: sdk.String("doloremque"),
        },
        APIKey: "reprehenderit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ManageScreen != nil {
        // handle response
    }
}
```

## CreateSnapshotUsingPOST

createSnapshot

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Manage.CreateSnapshotUsingPOST(ctx, operations.CreateSnapshotUsingPOSTRequest{
        SnapshotCreationModel: shared.SnapshotCreationModel{
            Description: sdk.String("ut"),
        },
        APIKey: "maiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ManageSnapshot != nil {
        // handle response
    }
}
```

## CreateSnippetUsingPOST

createSnippet

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Manage.CreateSnippetUsingPOST(ctx, operations.CreateSnippetUsingPOSTRequest{
        ManageSnippet: shared.ManageSnippet{
            Groups: []string{
                "corporis",
            },
            Name: sdk.String("Heidi Carter"),
            Script: sdk.String("accusamus"),
            ScriptData: sdk.String("commodi"),
            ShortCode: sdk.String("repudiandae"),
            Template: sdk.String("quae"),
        },
        APIKey: "ipsum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ManageSnippet != nil {
        // handle response
    }
}
```

## DELETEQueryUsingDELETE

deleteQuery

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Manage.DELETEQueryUsingDELETE(ctx, operations.DELETEQueryUsingDELETERequest{
        APIKey: "quidem",
        ShortCode: "molestias",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ManageResult != nil {
        // handle response
    }
}
```

## DELETEScreenUsingDELETE

deleteScreen

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Manage.DELETEScreenUsingDELETE(ctx, operations.DELETEScreenUsingDELETERequest{
        APIKey: "excepturi",
        ShortCode: "pariatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ManageResult != nil {
        // handle response
    }
}
```

## DELETESnapshotUsingDELETE

deleteSnapshot

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Manage.DELETESnapshotUsingDELETE(ctx, operations.DELETESnapshotUsingDELETERequest{
        APIKey: "modi",
        SnapshotID: "praesentium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ManageResult != nil {
        // handle response
    }
}
```

## DELETESnippetUsingDELETE

deleteSnippet

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Manage.DELETESnippetUsingDELETE(ctx, operations.DELETESnippetUsingDELETERequest{
        APIKey: "rem",
        ShortCode: "voluptates",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ManageResult != nil {
        // handle response
    }
}
```

## GETQueryUsingGET

getQuery

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Manage.GETQueryUsingGET(ctx, operations.GETQueryUsingGETRequest{
        APIKey: "quasi",
        ShortCode: "repudiandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ManageQuery != nil {
        // handle response
    }
}
```

## GETScreenUsingGET

getScreen

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Manage.GETScreenUsingGET(ctx, operations.GETScreenUsingGETRequest{
        APIKey: "sint",
        ShortCode: "veritatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ManageScreen != nil {
        // handle response
    }
}
```

## GETSnippetUsingGET

getSnippet

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Manage.GETSnippetUsingGET(ctx, operations.GETSnippetUsingGETRequest{
        APIKey: "itaque",
        ShortCode: "incidunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ManageSnippet != nil {
        // handle response
    }
}
```

## ListExecutableScreensUsingGET

listExecutableScreens

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Manage.ListExecutableScreensUsingGET(ctx, operations.ListExecutableScreensUsingGETRequest{
        APIKey: "enim",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ManageItemSummaries != nil {
        // handle response
    }
}
```

## ListQueriesUsingGET

listQueries

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Manage.ListQueriesUsingGET(ctx, operations.ListQueriesUsingGETRequest{
        APIKey: "consequatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ManageItemSummaries != nil {
        // handle response
    }
}
```

## ListScreensUsingGET

listScreens

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Manage.ListScreensUsingGET(ctx, operations.ListScreensUsingGETRequest{
        APIKey: "est",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ManageItemSummaries != nil {
        // handle response
    }
}
```

## ListSnapshotsUsingGET

listSnapshots

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Manage.ListSnapshotsUsingGET(ctx, operations.ListSnapshotsUsingGETRequest{
        APIKey: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ManageSnapshots != nil {
        // handle response
    }
}
```

## ListSnippetsUsingGET

listSnippets

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Manage.ListSnippetsUsingGET(ctx, operations.ListSnippetsUsingGETRequest{
        APIKey: "explicabo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ManageItemSummaries != nil {
        // handle response
    }
}
```

## PublishSnapshotUsingPOST

publishSnapshot

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Manage.PublishSnapshotUsingPOST(ctx, operations.PublishSnapshotUsingPOSTRequest{
        APIKey: "deserunt",
        SnapshotID: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ManageResult != nil {
        // handle response
    }
}
```

## RevertSnapshotUsingPOST

revertSnapshot

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Manage.RevertSnapshotUsingPOST(ctx, operations.RevertSnapshotUsingPOSTRequest{
        APIKey: "quibusdam",
        SnapshotID: "labore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ManageResult != nil {
        // handle response
    }
}
```

## UpdateQueryUsingPUT

updateQuery

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Manage.UpdateQueryUsingPUT(ctx, operations.UpdateQueryUsingPUTRequest{
        ManageQuery: shared.ManageQuery{
            EsRules: sdk.String("modi"),
            Name: sdk.String("Beth McGlynn Sr."),
            QbRules: sdk.String("assumenda"),
            ShortCode: sdk.String("ipsam"),
        },
        APIKey: "alias",
        ShortCode: "fugit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ManageQuery != nil {
        // handle response
    }
}
```

## UpdateScreenUsingPUT

updateScreen

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Manage.UpdateScreenUsingPUT(ctx, operations.UpdateScreenUsingPUTRequest{
        ManageScreen: shared.ManageScreen{
            Groups: []string{
                "excepturi",
                "tempora",
                "facilis",
            },
            Name: sdk.String("Francisco Windler"),
            ShortCode: sdk.String("eligendi"),
            Template: sdk.String("sint"),
        },
        APIKey: "aliquid",
        ShortCode: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ManageScreen != nil {
        // handle response
    }
}
```

## UpdateSnippetUsingPUT

updateSnippet

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Manage.UpdateSnippetUsingPUT(ctx, operations.UpdateSnippetUsingPUTRequest{
        ManageSnippet: shared.ManageSnippet{
            Groups: []string{
                "sint",
                "officia",
                "dolor",
                "debitis",
            },
            Name: sdk.String("Wilbur King"),
            Script: sdk.String("maiores"),
            ScriptData: sdk.String("rerum"),
            ShortCode: sdk.String("dicta"),
            Template: sdk.String("magnam"),
        },
        APIKey: "cumque",
        ShortCode: "facere",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ManageSnippet != nil {
        // handle response
    }
}
```
