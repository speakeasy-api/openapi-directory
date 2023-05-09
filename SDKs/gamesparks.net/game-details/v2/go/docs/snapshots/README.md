# Snapshots

### Available Operations

* [CopySnapshotToExistingGameUsingPOST1](#copysnapshottoexistinggameusingpost1) - copySnapshotToExistingGame
* [CopySnapshotToNewGameUsingPOST](#copysnapshottonewgameusingpost) - copySnapshotToNewGame
* [CreateSnapshotsUsingPOST](#createsnapshotsusingpost) - createSnapshots
* [DELETESnapshotUsingDELETE1](#deletesnapshotusingdelete1) - deleteSnapshot
* [GETLiveSnapshotIDUsingGET](#getlivesnapshotidusingget) - getLiveSnapshotId
* [GETSnapshotUsingGET](#getsnapshotusingget) - getSnapshot
* [GETSnapshotsUsingGET](#getsnapshotsusingget) - getSnapshots
* [GETSnapshotsUsingGET1](#getsnapshotsusingget1) - getSnapshots
* [PublishSnapshotUsingPOST1](#publishsnapshotusingpost1) - publishSnapshot
* [RevertToSnapshotUsingPOST](#reverttosnapshotusingpost) - revertToSnapshot
* [UnpublishSnapshotUsingPOST](#unpublishsnapshotusingpost) - unpublishSnapshot

## CopySnapshotToExistingGameUsingPOST1

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
    res, err := s.Snapshots.CopySnapshotToExistingGameUsingPOST1(ctx, operations.CopySnapshotToExistingGameUsingPOST1Request{
        APIKey: "perspiciatis",
        IncludeBinaries: sdk.Bool(false),
        IncludeCollaborators: sdk.Bool(false),
        IncludeGameConfig: sdk.Bool(false),
        IncludeMetadata: sdk.Bool(false),
        SnapshotID: "voluptatem",
        TargetAPIKey: "porro",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SnapshotCreationSuccessModel != nil {
        // handle response
    }
}
```

## CopySnapshotToNewGameUsingPOST

copySnapshotToNewGame

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
    res, err := s.Snapshots.CopySnapshotToNewGameUsingPOST(ctx, operations.CopySnapshotToNewGameUsingPOSTRequest{
        APIKey: "consequuntur",
        IncludeBinaries: sdk.Bool(false),
        IncludeCollaborators: sdk.Bool(false),
        IncludeGameConfig: sdk.Bool(false),
        IncludeMetadata: sdk.Bool(false),
        SnapshotID: "blanditiis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SnapshotCreationSuccessModel != nil {
        // handle response
    }
}
```

## CreateSnapshotsUsingPOST

createSnapshots

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
    res, err := s.Snapshots.CreateSnapshotsUsingPOST(ctx, operations.CreateSnapshotsUsingPOSTRequest{
        SnapshotCreationModel: shared.SnapshotCreationModel{
            Description: sdk.String("error"),
        },
        APIKey: "eaque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SnapshotModel != nil {
        // handle response
    }
}
```

## DELETESnapshotUsingDELETE1

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
    res, err := s.Snapshots.DELETESnapshotUsingDELETE1(ctx, operations.DELETESnapshotUsingDELETE1Request{
        APIKey: "occaecati",
        SnapshotID: "rerum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MessageModel != nil {
        // handle response
    }
}
```

## GETLiveSnapshotIDUsingGET

getLiveSnapshotId

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
    res, err := s.Snapshots.GETLiveSnapshotIDUsingGET(ctx, operations.GETLiveSnapshotIDUsingGETRequest{
        APIKey: "adipisci",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MessageModel != nil {
        // handle response
    }
}
```

## GETSnapshotUsingGET

getSnapshot

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
    res, err := s.Snapshots.GETSnapshotUsingGET(ctx, operations.GETSnapshotUsingGETRequest{
        APIKey: "asperiores",
        SnapshotID: "earum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SnapshotModel != nil {
        // handle response
    }
}
```

## GETSnapshotsUsingGET

getSnapshots

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
    res, err := s.Snapshots.GETSnapshotsUsingGET(ctx, operations.GETSnapshotsUsingGETRequest{
        APIKey: "modi",
        Page: 613966,
        PageSize: sdk.Int(679091),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SnapshotModels != nil {
        // handle response
    }
}
```

## GETSnapshotsUsingGET1

getSnapshots

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
    res, err := s.Snapshots.GETSnapshotsUsingGET1(ctx, operations.GETSnapshotsUsingGET1Request{
        APIKey: "deleniti",
        PageSize: sdk.Int(864282),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SnapshotModels != nil {
        // handle response
    }
}
```

## PublishSnapshotUsingPOST1

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
    res, err := s.Snapshots.PublishSnapshotUsingPOST1(ctx, operations.PublishSnapshotUsingPOST1Request{
        APIKey: "provident",
        SnapshotID: "nobis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RevertToSnapshotUsingPOST

revertToSnapshot

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
    res, err := s.Snapshots.RevertToSnapshotUsingPOST(ctx, operations.RevertToSnapshotUsingPOSTRequest{
        APIKey: "libero",
        SnapshotID: "delectus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MessageModel != nil {
        // handle response
    }
}
```

## UnpublishSnapshotUsingPOST

unpublishSnapshot

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
    res, err := s.Snapshots.UnpublishSnapshotUsingPOST(ctx, operations.UnpublishSnapshotUsingPOSTRequest{
        APIKey: "quaerat",
        SnapshotID: "quos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MessageModel != nil {
        // handle response
    }
}
```
