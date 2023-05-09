# CustomerStores

### Available Operations

* [CreateStore](#createstore) - Create a new store
* [DeleteStore](#deletestore) - Delete a store
* [GetStore](#getstore) - Get store's information
* [GetStores](#getstores) - Get store list
* [UpdateStore](#updatestore) - Update some store's information.

## CreateStore

Create a new store

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CustomerStores.CreateStore(ctx, shared.CreateStoreRequest{
        CountryIsoCodeAlpha3: "DEU",
        ID: sdk.String("64f43358-63a1-47f7-97ec-0301fc39956b"),
        Name: "My Store",
        Sectors: []string{
            "ANIMALERIE",
            "ANIMALERIE",
            "ANIMALERIE",
            "ANIMALERIE",
        },
        URL: "http://www.mystore.com",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinksGetStoreLink != nil {
        // handle response
    }
}
```

## DeleteStore

Delete a store

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
    res, err := s.CustomerStores.DeleteStore(ctx, operations.DeleteStoreRequest{
        StoreID: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetStore

Get store's information

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
    res, err := s.CustomerStores.GetStore(ctx, operations.GetStoreRequest{
        IfNoneMatch: sdk.String("in"),
        StoreID: "eius",
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

Get store list

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
    res, err := s.CustomerStores.GetStores(ctx, operations.GetStoresRequest{
        IfNoneMatch: sdk.String("libero"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StoreList != nil {
        // handle response
    }
}
```

## UpdateStore

Update some store's information. FYI, you cannot change the country.


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
    res, err := s.CustomerStores.UpdateStore(ctx, operations.UpdateStoreRequest{
        StoreID: "illum",
        UpdateStoreRequest: shared.UpdateStoreRequest{
            Name: "My Store",
            Sectors: []string{
                "ANIMALERIE",
                "ANIMALERIE",
                "ANIMALERIE",
            },
            URL: "http://www.mystore.com",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
