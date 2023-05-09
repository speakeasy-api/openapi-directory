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
    res, err := s.CreateClip(ctx, operations.CreateClipRequestBody{
        Data: operations.CreateClipRequestBodyData{
            Attributes: operations.CreateClipRequestBodyDataAttributes{
                EndTime: 12.3,
                MediaID: "9b9a2e82-5b47-4f59-831d-4c239824b983",
                Name: "Example New Clip",
                StartTime: 10.1,
            },
        },
    }, operations.CreateClipSecurity{
        BearerHeader: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClipResponseObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->