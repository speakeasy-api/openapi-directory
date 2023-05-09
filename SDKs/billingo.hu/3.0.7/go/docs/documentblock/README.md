# DocumentBlock

## Overview

DocumentBlock object represents your invoice pad.

### Available Operations

* [ListDocumentBlock](#listdocumentblock) - List all document blocks

## ListDocumentBlock

Returns a list of your document blocks. The document blocks are returned sorted by creation date, with the most recent document blocks appearing first.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.DocumentBlock.ListDocumentBlock(ctx, operations.ListDocumentBlockRequest{
        Page: sdk.Int64(315428),
        PerPage: sdk.Int64(607831),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DocumentBlockList != nil {
        // handle response
    }
}
```
