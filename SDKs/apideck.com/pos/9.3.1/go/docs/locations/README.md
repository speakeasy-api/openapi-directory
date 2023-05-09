# Locations

### Available Operations

* [LocationsAdd](#locationsadd) - Create Location
* [LocationsAll](#locationsall) - List Locations
* [LocationsDelete](#locationsdelete) - Delete Location
* [LocationsOne](#locationsone) - Get Location
* [LocationsUpdate](#locationsupdate) - Update Location

## LocationsAdd

Create Location

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
    res, err := s.Locations.LocationsAdd(ctx, operations.LocationsAddRequest{
        LocationInput: shared.LocationInput{
            Address: &shared.Address{
                City: sdk.String("San Francisco"),
                ContactName: sdk.String("Elon Musk"),
                Country: sdk.String("US"),
                County: sdk.String("Santa Clara"),
                Email: sdk.String("elon@musk.com"),
                Fax: sdk.String("122-111-1111"),
                ID: sdk.String("123"),
                Latitude: sdk.String("40.759211"),
                Line1: sdk.String("Main street"),
                Line2: sdk.String("apt #"),
                Line3: sdk.String("Suite #"),
                Line4: sdk.String("delivery instructions"),
                Longitude: sdk.String("-73.984638"),
                Name: sdk.String("HQ US"),
                PhoneNumber: sdk.String("111-111-1111"),
                PostalCode: sdk.String("94104"),
                RowVersion: sdk.String("1-12345"),
                Salutation: sdk.String("Mr"),
                State: sdk.String("CA"),
                StreetNumber: sdk.String("25"),
                String: sdk.String("25 Spring Street, Blackburn, VIC 3130"),
                Type: shared.AddressTypeEnumPrimary.ToPointer(),
                Website: sdk.String("https://elonmusk.com"),
            },
            BusinessName: sdk.String("Dunkin Donuts LLC"),
            Currency: shared.CurrencyEnumUsd.ToPointer(),
            MerchantID: sdk.String("12345"),
            Name: sdk.String("Dunkin Donuts"),
            Status: shared.LocationStatusEnumActive.ToPointer(),
        },
        Raw: sdk.Bool(false),
        XApideckAppID: "aliquid",
        XApideckConsumerID: "cupiditate",
        XApideckServiceID: sdk.String("quos"),
    }, operations.LocationsAddSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateLocationResponse != nil {
        // handle response
    }
}
```

## LocationsAll

List Locations

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
    res, err := s.Locations.LocationsAll(ctx, operations.LocationsAllRequest{
        Cursor: sdk.String("perferendis"),
        Fields: sdk.String("magni"),
        Limit: sdk.Int64(828940),
        Raw: sdk.Bool(false),
        XApideckAppID: "ipsam",
        XApideckConsumerID: "alias",
        XApideckServiceID: sdk.String("fugit"),
    }, operations.LocationsAllSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLocationsResponse != nil {
        // handle response
    }
}
```

## LocationsDelete

Delete Location

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
    res, err := s.Locations.LocationsDelete(ctx, operations.LocationsDeleteRequest{
        ID: "a94bb4f6-3c96-49e9-a3ef-a77dfb14cd66",
        Raw: sdk.Bool(false),
        XApideckAppID: "laborum",
        XApideckConsumerID: "accusamus",
        XApideckServiceID: sdk.String("non"),
    }, operations.LocationsDeleteSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteLocationResponse != nil {
        // handle response
    }
}
```

## LocationsOne

Get Location

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
    res, err := s.Locations.LocationsOne(ctx, operations.LocationsOneRequest{
        Fields: sdk.String("occaecati"),
        ID: "5efb9ba8-8f3a-4669-9707-4ba4469b6e21",
        Raw: sdk.Bool(false),
        XApideckAppID: "magnam",
        XApideckConsumerID: "et",
        XApideckServiceID: sdk.String("excepturi"),
    }, operations.LocationsOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLocationResponse != nil {
        // handle response
    }
}
```

## LocationsUpdate

Update Location

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
    res, err := s.Locations.LocationsUpdate(ctx, operations.LocationsUpdateRequest{
        LocationInput: shared.LocationInput{
            Address: &shared.Address{
                City: sdk.String("San Francisco"),
                ContactName: sdk.String("Elon Musk"),
                Country: sdk.String("US"),
                County: sdk.String("Santa Clara"),
                Email: sdk.String("elon@musk.com"),
                Fax: sdk.String("122-111-1111"),
                ID: sdk.String("123"),
                Latitude: sdk.String("40.759211"),
                Line1: sdk.String("Main street"),
                Line2: sdk.String("apt #"),
                Line3: sdk.String("Suite #"),
                Line4: sdk.String("delivery instructions"),
                Longitude: sdk.String("-73.984638"),
                Name: sdk.String("HQ US"),
                PhoneNumber: sdk.String("111-111-1111"),
                PostalCode: sdk.String("94104"),
                RowVersion: sdk.String("1-12345"),
                Salutation: sdk.String("Mr"),
                State: sdk.String("CA"),
                StreetNumber: sdk.String("25"),
                String: sdk.String("25 Spring Street, Blackburn, VIC 3130"),
                Type: shared.AddressTypeEnumPrimary.ToPointer(),
                Website: sdk.String("https://elonmusk.com"),
            },
            BusinessName: sdk.String("Dunkin Donuts LLC"),
            Currency: shared.CurrencyEnumUsd.ToPointer(),
            MerchantID: sdk.String("12345"),
            Name: sdk.String("Dunkin Donuts"),
            Status: shared.LocationStatusEnumActive.ToPointer(),
        },
        ID: "59890afa-563e-4251-afe4-c8b711e5b7fd",
        Raw: sdk.Bool(false),
        XApideckAppID: "sed",
        XApideckConsumerID: "saepe",
        XApideckServiceID: sdk.String("pariatur"),
    }, operations.LocationsUpdateSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateLocationResponse != nil {
        // handle response
    }
}
```
