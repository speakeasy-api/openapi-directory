# Styles

## Overview

Operations about styles

### Available Operations

* [DeleteStylesPath](#deletestylespath) - Delete Style
* [GetStylesPath](#getstylespath) - Show Style
* [PatchStylesPath](#patchstylespath) - Update Style

## DeleteStylesPath

Delete Style

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
    res, err := s.Styles.DeleteStylesPath(ctx, operations.DeleteStylesPathRequest{
        Path: "laboriosam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetStylesPath

Show Style

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
    res, err := s.Styles.GetStylesPath(ctx, operations.GetStylesPathRequest{
        Path: "recusandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StyleEntity != nil {
        // handle response
    }
}
```

## PatchStylesPath

Update Style

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
    res, err := s.Styles.PatchStylesPath(ctx, operations.PatchStylesPathRequest{
        RequestBody: operations.PatchStylesPathRequestBody{
            File: operations.PatchStylesPathRequestBodyFile{
                Content: []byte("consequuntur"),
                File: "voluptatem",
            },
        },
        Path: "exercitationem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StyleEntity != nil {
        // handle response
    }
}
```
