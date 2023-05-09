# ServiceMediaTabularExtractsheet

## Overview

 API for Extract sheets

### Available Operations

* [MediaTabularExtractsheet](#mediatabularextractsheet) - API for Extract sheets

## MediaTabularExtractsheet

API to call: Extract sheets

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
    res, err := s.ServiceMediaTabularExtractsheet.MediaTabularExtractsheet(ctx, operations.MediaTabularExtractsheetRequest{
        Arg1: sdk.String("quibusdam"),
        Entryid: "unde",
        Output: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
