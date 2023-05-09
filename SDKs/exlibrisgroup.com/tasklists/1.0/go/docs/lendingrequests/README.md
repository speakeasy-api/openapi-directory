# LendingRequests

### Available Operations

* [GetAlmawsV1TaskListsRsLendingRequests](#getalmawsv1tasklistsrslendingrequests) - Get Lending Requests
* [PostAlmawsV1TaskListsRsLendingRequests](#postalmawsv1tasklistsrslendingrequests) - Act on Lending Requests

## GetAlmawsV1TaskListsRsLendingRequests

This API returns a list of lending requests in Alma

### Example Usage

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
        Library: sdk.String("illum"),
        Partner: sdk.String("vel"),
        Printed: sdk.String("error"),
        Reported: sdk.String("deserunt"),
        RequestedFormat: sdk.String("suscipit"),
        Status: sdk.String("iure"),
        SuppliedFormat: sdk.String("magnam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostAlmawsV1TaskListsRsLendingRequests

This API preforms the requested action on a list (specified by given filters) of lending requests in Alma

### Example Usage

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
    res, err := s.LendingRequests.PostAlmawsV1TaskListsRsLendingRequests(ctx, operations.PostAlmawsV1TaskListsRsLendingRequestsRequest{
        Library: sdk.String("debitis"),
        Op: sdk.String("ipsa"),
        Partner: sdk.String("delectus"),
        Printed: sdk.String("tempora"),
        Reported: sdk.String("suscipit"),
        RequestedFormat: sdk.String("molestiae"),
        Status: sdk.String("minus"),
        SuppliedFormat: sdk.String("placeat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems != nil {
        // handle response
    }
}
```
