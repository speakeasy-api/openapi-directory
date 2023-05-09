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
    res, err := s.APIInfo.GetContainersMessages(ctx, operations.GetContainersMessagesRequest{
        XAuthProjectID: "corrupti",
        XAuthToken: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetContainersMessages200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->