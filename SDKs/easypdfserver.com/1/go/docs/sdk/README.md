# SDK

## Overview

API for converting HTML to PDF.

### Available Operations

* [PostMakePdf](#postmakepdf) - Generate a PDF from HTML or URL.

## PostMakePdf

Generate a PDF from HTML or URL.

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
    res, err := s.SDK.PostMakePdf(ctx, operations.PostMakePdfRequestBody{
        HTML: sdk.String("quibusdam"),
        Key: "unde",
        URL: sdk.String("nulla"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostMakePdf200ApplicationPdfBinaryString != nil {
        // handle response
    }
}
```
