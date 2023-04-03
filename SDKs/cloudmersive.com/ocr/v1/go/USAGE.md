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

    req := operations.ImageOcrImageLinesWithLocationRequest{
        RequestBody: operations.ImageOcrImageLinesWithLocationRequestBody{
            ImageFile: operations.ImageOcrImageLinesWithLocationRequestBodyImageFile{
                Content: []byte("corrupti"),
                ImageFile: "provident",
            },
        },
        Language: "distinctio",
        Preprocessing: "quibusdam",
    }

    ctx := context.Background()
    res, err := s.ImageOcr.ImageOcrImageLinesWithLocation(ctx, req, operations.ImageOcrImageLinesWithLocationSecurity{
        Apikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImageToLinesWithLocationResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->