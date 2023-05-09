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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyAuth: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.LendingRequests.GetAlmawsV1TaskListsRsLendingRequests(ctx, operations.GetAlmawsV1TaskListsRsLendingRequestsRequest{
        Library: sdk.String("corrupti"),
        Partner: sdk.String("provident"),
        Printed: sdk.String("distinctio"),
        Reported: sdk.String("quibusdam"),
        RequestedFormat: sdk.String("unde"),
        Status: sdk.String("nulla"),
        SuppliedFormat: sdk.String("corrupti"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->