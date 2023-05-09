# Merchants

### Available Operations

* [MerchantsAdd](#merchantsadd) - Create Merchant
* [MerchantsAll](#merchantsall) - List Merchants
* [MerchantsDelete](#merchantsdelete) - Delete Merchant
* [MerchantsOne](#merchantsone) - Get Merchant
* [MerchantsUpdate](#merchantsupdate) - Update Merchant

## MerchantsAdd

Create Merchant

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
    res, err := s.Merchants.MerchantsAdd(ctx, operations.MerchantsAddRequest{
        MerchantInput: shared.MerchantInput{
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
            Currency: shared.CurrencyEnumUsd.ToPointer(),
            Language: sdk.String("EN"),
            MainLocationID: sdk.String("12345"),
            Name: sdk.String("Dunkin Donuts"),
            OwnerID: sdk.String("12345"),
            ServiceCharges: []shared.ServiceChargeInput{
                shared.ServiceChargeInput{
                    Active: sdk.Bool(true),
                    Amount: sdk.Float64(27500),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    Name: sdk.String("Charge for delivery"),
                    Percentage: sdk.Float64(12.5),
                    Type: shared.ServiceChargeTypeEnumAutoGratuity.ToPointer(),
                },
            },
            Status: shared.MerchantStatusEnumActive.ToPointer(),
        },
        Raw: sdk.Bool(false),
        XApideckAppID: "praesentium",
        XApideckConsumerID: "natus",
        XApideckServiceID: sdk.String("magni"),
    }, operations.MerchantsAddSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateMerchantResponse != nil {
        // handle response
    }
}
```

## MerchantsAll

List Merchants

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
    res, err := s.Merchants.MerchantsAll(ctx, operations.MerchantsAllRequest{
        Cursor: sdk.String("sunt"),
        Fields: sdk.String("quo"),
        Limit: sdk.Int64(848009),
        Raw: sdk.Bool(false),
        XApideckAppID: "pariatur",
        XApideckConsumerID: "maxime",
        XApideckServiceID: sdk.String("ea"),
    }, operations.MerchantsAllSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMerchantsResponse != nil {
        // handle response
    }
}
```

## MerchantsDelete

Delete Merchant

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
    res, err := s.Merchants.MerchantsDelete(ctx, operations.MerchantsDeleteRequest{
        ID: "92601fb5-76b0-4d5f-8d30-c5fbb2587053",
        Raw: sdk.Bool(false),
        XApideckAppID: "eos",
        XApideckConsumerID: "perferendis",
        XApideckServiceID: sdk.String("dolores"),
    }, operations.MerchantsDeleteSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteMerchantResponse != nil {
        // handle response
    }
}
```

## MerchantsOne

Get Merchant

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
    res, err := s.Merchants.MerchantsOne(ctx, operations.MerchantsOneRequest{
        Fields: sdk.String("minus"),
        ID: "73d5fe9b-90c2-4890-9b3f-e49a8d9cbf48",
        Raw: sdk.Bool(false),
        XApideckAppID: "aliquid",
        XApideckConsumerID: "dolorem",
        XApideckServiceID: sdk.String("dolorem"),
    }, operations.MerchantsOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMerchantResponse != nil {
        // handle response
    }
}
```

## MerchantsUpdate

Update Merchant

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
    res, err := s.Merchants.MerchantsUpdate(ctx, operations.MerchantsUpdateRequest{
        MerchantInput: shared.MerchantInput{
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
            Currency: shared.CurrencyEnumUsd.ToPointer(),
            Language: sdk.String("EN"),
            MainLocationID: sdk.String("12345"),
            Name: sdk.String("Dunkin Donuts"),
            OwnerID: sdk.String("12345"),
            ServiceCharges: []shared.ServiceChargeInput{
                shared.ServiceChargeInput{
                    Active: sdk.Bool(true),
                    Amount: sdk.Float64(27500),
                    Currency: shared.CurrencyEnumUsd.ToPointer(),
                    Name: sdk.String("Charge for delivery"),
                    Percentage: sdk.Float64(12.5),
                    Type: shared.ServiceChargeTypeEnumAutoGratuity.ToPointer(),
                },
            },
            Status: shared.MerchantStatusEnumActive.ToPointer(),
        },
        ID: "3f9b77f3-a410-4067-8ebf-69280d1ba77a",
        Raw: sdk.Bool(false),
        XApideckAppID: "deleniti",
        XApideckConsumerID: "omnis",
        XApideckServiceID: sdk.String("necessitatibus"),
    }, operations.MerchantsUpdateSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateMerchantResponse != nil {
        // handle response
    }
}
```
