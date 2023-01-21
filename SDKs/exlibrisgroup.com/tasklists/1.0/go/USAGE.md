<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                APIKeyAuth: shared.SchemeAPIKeyAuth{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.GetAlmawsV1TaskListsRsLendingRequestsRequest{
        QueryParams: operations.GetAlmawsV1TaskListsRsLendingRequestsQueryParams{
            Library: "sit",
            Partner: "voluptas",
            Printed: "culpa",
            Reported: "expedita",
            RequestedFormat: "consequuntur",
            Status: "dolor",
            SuppliedFormat: "expedita",
        },
    }
    
    res, err := s.LendingRequests.GetAlmawsV1TaskListsRsLendingRequests(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->