# Info

### Available Operations

* [GetArtifactFormats](#getartifactformats) - Artifact formats
* [GetChangeLog](#getchangelog) - Recent changes
* [GetEventTypes](#geteventtypes) - Event types

## GetArtifactFormats

List the available artifact formats

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Info.GetArtifactFormats(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.ArtifactFormats != nil {
        // handle response
    }
}
```

## GetChangeLog

The Contribly change log.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Info.GetChangeLog(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.ChangeLogItems != nil {
        // handle response
    }
}
```

## GetEventTypes

List available notification event types

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Info.GetEventTypes(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.EventTypes != nil {
        // handle response
    }
}
```
