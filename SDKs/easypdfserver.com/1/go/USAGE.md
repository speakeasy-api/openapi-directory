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
    res, err := s.PostMakePdf(ctx, operations.PostMakePdfRequestBody{
        HTML: sdk.String("corrupti"),
        Key: "provident",
        URL: sdk.String("distinctio"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostMakePdf200ApplicationPdfBinaryString != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->