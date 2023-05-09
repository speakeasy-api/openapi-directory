# RequestedResources

### Available Operations

* [GetAlmawsV1TaskListsRequestedResources](#getalmawsv1tasklistsrequestedresources) - Get Requested Resources
* [PostAlmawsV1TaskListsRequestedResources](#postalmawsv1tasklistsrequestedresources) - Act on Requested Resources

## GetAlmawsV1TaskListsRequestedResources

This API returns a list of requested resources to be picked from the shelf in Alma

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
    res, err := s.RequestedResources.GetAlmawsV1TaskListsRequestedResources(ctx, operations.GetAlmawsV1TaskListsRequestedResourcesRequest{
        CircDesk: "quo",
        Direction: sdk.String("odit"),
        Library: "at",
        Limit: sdk.Int64(870088),
        Location: sdk.String("maiores"),
        Offset: sdk.Int64(473608),
        OrderBy: sdk.String("quod"),
        PickupInst: sdk.String("quod"),
        Printed: sdk.String("esse"),
        Reported: sdk.String("totam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAlmawsV1TaskListsRequestedResources200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostAlmawsV1TaskListsRequestedResources

This API performs an action on requested resources that are on the shelf in Alma

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
    res, err := s.RequestedResources.PostAlmawsV1TaskListsRequestedResources(ctx, operations.PostAlmawsV1TaskListsRequestedResourcesRequest{
        CircDesk: sdk.String("porro"),
        Library: sdk.String("dolorum"),
        Location: sdk.String("dicta"),
        Op: sdk.String("nam"),
        PickupInst: sdk.String("officia"),
        Printed: sdk.String("occaecati"),
        Reported: sdk.String("fugit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchema != nil {
        // handle response
    }
}
```
