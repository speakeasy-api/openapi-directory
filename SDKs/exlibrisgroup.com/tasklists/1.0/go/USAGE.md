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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyAuth: shared.SchemeAPIKeyAuth{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.GetAlmawsV1TaskListsRsLendingRequestsRequest{
        QueryParams: operations.GetAlmawsV1TaskListsRsLendingRequestsQueryParams{
            Library: "corrupti",
            Partner: "provident",
            Printed: "distinctio",
            Reported: "quibusdam",
            RequestedFormat: "unde",
            Status: "nulla",
            SuppliedFormat: "corrupti",
        },
    }

    ctx := context.Background()
    res, err := s.LendingRequests.GetAlmawsV1TaskListsRsLendingRequests(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->