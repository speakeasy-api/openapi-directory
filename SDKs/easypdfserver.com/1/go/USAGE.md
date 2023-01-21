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
    
    req := operations.PostMakePdfRequest{
        Request: operations.PostMakePdfRequestBody{
            HTML: "sit",
            Key: "voluptas",
            URL: "culpa",
        },
    }
    
    res, err := s.PostMakePdf(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.PostMakePdf200ApplicationPdfBinaryString != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->