# Network

### Available Operations

* [GetNetworks](#getnetworks) - Get a list of networks
* [GetNetworksID](#getnetworksid) - Get a specific network

## GetNetworks

### Deprecations

- The attribute `cover_image_id` has been replaced with the relationship `cover_image`
  and will be removed from the response in a future release.


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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Network.GetNetworks(ctx, operations.GetNetworksRequest{
        AdDealStatus: []GetNetworksAdDealStatusEnum{
            operations.GetNetworksAdDealStatusEnumActive,
            operations.GetNetworksAdDealStatusEnumActive,
            operations.GetNetworksAdDealStatusEnumActive,
            operations.GetNetworksAdDealStatusEnumActive,
        },
        AdRepAccountID: sdk.String("563f94e2-9e97-43e9-a2a5-7a15be3e0608"),
        Ids: []string{
            "7e2b6e3a-b884-45f0-997a-60ff2a54a31e",
        },
        PageNumber: sdk.Int64(607249),
        PageSize: sdk.Int64(309251),
        Q: sdk.String("molestiae"),
        Sort: []GetNetworksSortEnum{
            operations.GetNetworksSortEnumCreatedAt,
            operations.GetNetworksSortEnumName,
        },
    }, operations.GetNetworksSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworks200ApplicationVndAPIPlusJSONObject != nil {
        // handle response
    }
}
```

## GetNetworksID

### Deprecations

- The attribute `cover_image_id` has been replaced with the relationship `cover_image`
  and will be removed from the response in a future release.


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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Network.GetNetworksID(ctx, operations.GetNetworksIDRequest{
        ID: "3e865e79-56f9-4251-a5a9-da660ff57bfa",
    }, operations.GetNetworksIDSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworksID200ApplicationVndAPIPlusJSONObject != nil {
        // handle response
    }
}
```
