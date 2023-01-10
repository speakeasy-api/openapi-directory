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
    
    req := operations.ImageOcrImageLinesWithLocationRequest{
        Security: operations.ImageOcrImageLinesWithLocationSecurity{
            Apikey: shared.SchemeApikey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Headers: operations.ImageOcrImageLinesWithLocationHeaders{
            Language: "quasi",
            Preprocessing: "tempore",
        },
        Request: operations.ImageOcrImageLinesWithLocationRequestBody{
            ImageFile: operations.ImageOcrImageLinesWithLocationRequestBodyImageFile{
                Content: []byte("consequatur"),
                ImageFile: "quos",
            },
        },
    }
    
    res, err := s.ImageOcr.ImageOcrImageLinesWithLocation(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ImageToLinesWithLocationResult != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->