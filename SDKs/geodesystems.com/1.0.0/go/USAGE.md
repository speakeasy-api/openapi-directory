<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.MediaTabularExtractsheetRequest{
        Arg1: "corrupti",
        Entryid: "provident",
        Output: "distinctio",
    }

    ctx := context.Background()
    res, err := s.ServiceMediaTabularExtractsheet.MediaTabularExtractsheet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->