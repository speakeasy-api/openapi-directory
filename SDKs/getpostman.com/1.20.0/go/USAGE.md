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
    res, err := s.API.CreateAPI(ctx, operations.CreateAPIRequest{
        RequestBody: &operations.CreateAPIRequestBody{
            API: &operations.CreateAPIRequestBodyAPI{
                Description: sdk.String("This is description."),
                Name: sdk.String("Sync Service API"),
                Summary: sdk.String("This is supposed to be a short summary."),
            },
        },
        Workspace: sdk.String("{{workspaceId}}"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAPI200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->