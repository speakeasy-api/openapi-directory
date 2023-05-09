<!-- Start SDK Example Usage -->
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
    res, err := s.ImageOcr.ImageOcrImageLinesWithLocation(ctx, operations.ImageOcrImageLinesWithLocationRequest{
        RequestBody: operations.ImageOcrImageLinesWithLocationRequestBody{
            ImageFile: operations.ImageOcrImageLinesWithLocationRequestBodyImageFile{
                Content: []byte("corrupti"),
                ImageFile: "provident",
            },
        },
        Language: sdk.String("distinctio"),
        Preprocessing: sdk.String("quibusdam"),
    }, operations.ImageOcrImageLinesWithLocationSecurity{
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