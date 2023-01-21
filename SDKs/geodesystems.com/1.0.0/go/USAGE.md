<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.MediaTabularExtractsheetRequest{
        QueryParams: operations.MediaTabularExtractsheetQueryParams{
            Arg1: "sit",
            Entryid: "voluptas",
            Output: "culpa",
        },
    }
    
    res, err := s.ServiceMediaTabularExtractsheet.MediaTabularExtractsheet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->