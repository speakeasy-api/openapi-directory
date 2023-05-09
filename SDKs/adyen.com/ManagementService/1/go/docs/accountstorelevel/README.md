# AccountStoreLevel

### Available Operations

* [GetMerchantsMerchantIDStores](#getmerchantsmerchantidstores) - Get a list of stores
* [GetMerchantsMerchantIDStoresStoreID](#getmerchantsmerchantidstoresstoreid) - Get a store
* [GetStores](#getstores) - Get a list of stores
* [GetStoresStoreID](#getstoresstoreid) - Get a store
* [PatchMerchantsMerchantIDStoresStoreID](#patchmerchantsmerchantidstoresstoreid) - Update a store
* [PatchStoresStoreID](#patchstoresstoreid) - Update a store
* [PostMerchantsMerchantIDStores](#postmerchantsmerchantidstores) - Create a store
* [PostStores](#poststores) - Create a store

## GetMerchantsMerchantIDStores

Returns a list of stores for the merchant account identified in the path. The list is grouped into pages as defined by the query parameters.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Stores read
* Management API—Stores read and write

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.AccountStoreLevel.GetMerchantsMerchantIDStores(ctx, operations.GetMerchantsMerchantIDStoresRequest{
        MerchantID: "saepe",
        PageNumber: sdk.Int(697631),
        PageSize: sdk.Int(99280),
        Reference: sdk.String("ipsa"),
    }, operations.GetMerchantsMerchantIDStoresSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListStoresResponse != nil {
        // handle response
    }
}
```

## GetMerchantsMerchantIDStoresStoreID

Returns the details of the store identified in the path.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Stores read
* Management API—Stores read and write

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.AccountStoreLevel.GetMerchantsMerchantIDStoresStoreID(ctx, operations.GetMerchantsMerchantIDStoresStoreIDRequest{
        MerchantID: "reiciendis",
        StoreID: "est",
    }, operations.GetMerchantsMerchantIDStoresStoreIDSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Store != nil {
        // handle response
    }
}
```

## GetStores

Returns a list of stores. The list is grouped into pages as defined by the query parameters.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Stores read
* Management API—Stores read and write

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.AccountStoreLevel.GetStores(ctx, operations.GetStoresRequest{
        MerchantID: sdk.String("mollitia"),
        PageNumber: sdk.Int(670638),
        PageSize: sdk.Int(170909),
        Reference: sdk.String("dolorem"),
    }, operations.GetStoresSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListStoresResponse != nil {
        // handle response
    }
}
```

## GetStoresStoreID

Returns the details of the store identified in the path.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Stores read
* Management API—Stores read and write

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.AccountStoreLevel.GetStoresStoreID(ctx, operations.GetStoresStoreIDRequest{
        StoreID: "corporis",
    }, operations.GetStoresStoreIDSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Store != nil {
        // handle response
    }
}
```

## PatchMerchantsMerchantIDStoresStoreID

Updates the store identified in the path. You can only update some store parameters.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Stores read and write

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.AccountStoreLevel.PatchMerchantsMerchantIDStoresStoreID(ctx, operations.PatchMerchantsMerchantIDStoresStoreIDRequest{
        UpdateStoreRequest: &shared.UpdateStoreRequest{
            Address: &shared.UpdatableAddress{
                City: sdk.String("Port Emeraldstead"),
                Line1: sdk.String("nemo"),
                Line2: sdk.String("minima"),
                Line3: sdk.String("excepturi"),
                PostalCode: sdk.String("46991"),
                StateOrProvince: sdk.String("mollitia"),
            },
            BusinessLineIds: []string{
                "culpa",
            },
            Description: sdk.String("consequuntur"),
            ExternalReferenceID: sdk.String("repellat"),
            SplitConfiguration: &shared.StoreSplitConfiguration{
                BalanceAccountID: sdk.String("mollitia"),
                SplitConfigurationID: sdk.String("occaecati"),
            },
            Status: shared.UpdateStoreRequestStatusEnumActive.ToPointer(),
        },
        MerchantID: "commodi",
        StoreID: "quam",
    }, operations.PatchMerchantsMerchantIDStoresStoreIDSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Store != nil {
        // handle response
    }
}
```

## PatchStoresStoreID

Updates the store identified in the path.
You can only update some store parameters.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Stores read and write

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.AccountStoreLevel.PatchStoresStoreID(ctx, operations.PatchStoresStoreIDRequest{
        UpdateStoreRequest: &shared.UpdateStoreRequest{
            Address: &shared.UpdatableAddress{
                City: sdk.String("Deionfurt"),
                Line1: sdk.String("quia"),
                Line2: sdk.String("quis"),
                Line3: sdk.String("vitae"),
                PostalCode: sdk.String("63171-9368"),
                StateOrProvince: sdk.String("aut"),
            },
            BusinessLineIds: []string{
                "error",
            },
            Description: sdk.String("temporibus"),
            ExternalReferenceID: sdk.String("laborum"),
            SplitConfiguration: &shared.StoreSplitConfiguration{
                BalanceAccountID: sdk.String("quasi"),
                SplitConfigurationID: sdk.String("reiciendis"),
            },
            Status: shared.UpdateStoreRequestStatusEnumInactive.ToPointer(),
        },
        StoreID: "vero",
    }, operations.PatchStoresStoreIDSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Store != nil {
        // handle response
    }
}
```

## PostMerchantsMerchantIDStores

Creates a store for the merchant account identified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Stores read and write

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.AccountStoreLevel.PostMerchantsMerchantIDStores(ctx, operations.PostMerchantsMerchantIDStoresRequest{
        StoreCreationRequest: &shared.StoreCreationRequest{
            Address: shared.StoreLocation{
                City: sdk.String("Johnworth"),
                Country: "Austria",
                Line1: sdk.String("omnis"),
                Line2: sdk.String("voluptate"),
                Line3: sdk.String("cum"),
                PostalCode: sdk.String("04291"),
                StateOrProvince: sdk.String("corporis"),
            },
            BusinessLineIds: []string{
                "iusto",
                "dicta",
            },
            Description: "harum",
            ExternalReferenceID: sdk.String("enim"),
            PhoneNumber: "accusamus",
            Reference: sdk.String("commodi"),
            ShopperStatement: "repudiandae",
            SplitConfiguration: &shared.StoreSplitConfiguration{
                BalanceAccountID: sdk.String("quae"),
                SplitConfigurationID: sdk.String("ipsum"),
            },
        },
        MerchantID: "quidem",
    }, operations.PostMerchantsMerchantIDStoresSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Store != nil {
        // handle response
    }
}
```

## PostStores

Creates a store for the merchant account specified in the request.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Stores read and write

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.AccountStoreLevel.PostStores(ctx, shared.StoreCreationWithMerchantCodeRequest{
        Address: shared.StoreLocation{
            City: sdk.String("Kennyhaven"),
            Country: "Eritrea",
            Line1: sdk.String("praesentium"),
            Line2: sdk.String("rem"),
            Line3: sdk.String("voluptates"),
            PostalCode: sdk.String("95092"),
            StateOrProvince: sdk.String("enim"),
        },
        BusinessLineIds: []string{
            "est",
        },
        Description: "quibusdam",
        ExternalReferenceID: sdk.String("explicabo"),
        MerchantID: "deserunt",
        PhoneNumber: "distinctio",
        Reference: sdk.String("quibusdam"),
        ShopperStatement: "labore",
        SplitConfiguration: &shared.StoreSplitConfiguration{
            BalanceAccountID: sdk.String("modi"),
            SplitConfigurationID: sdk.String("qui"),
        },
    }, operations.PostStoresSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Store != nil {
        // handle response
    }
}
```
