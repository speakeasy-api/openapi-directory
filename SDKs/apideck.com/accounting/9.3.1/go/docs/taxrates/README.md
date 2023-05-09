# TaxRates

### Available Operations

* [TaxRatesAdd](#taxratesadd) - Create Tax Rate
* [TaxRatesAll](#taxratesall) - List Tax Rates
* [TaxRatesDelete](#taxratesdelete) - Delete Tax Rate
* [TaxRatesOne](#taxratesone) - Get Tax Rate
* [TaxRatesUpdate](#taxratesupdate) - Update Tax Rate

## TaxRatesAdd

Create Tax Rate

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
    res, err := s.TaxRates.TaxRatesAdd(ctx, operations.TaxRatesAddRequest{
        TaxRateInput: shared.TaxRateInput{
            Code: sdk.String("ABN"),
            Components: []shared.TaxRateComponents{
                shared.TaxRateComponents{
                    Compound: sdk.Bool(true),
                    ID: sdk.String("10"),
                    Name: sdk.String("GST"),
                    Rate: sdk.Float64(10),
                },
                shared.TaxRateComponents{
                    Compound: sdk.Bool(true),
                    ID: sdk.String("10"),
                    Name: sdk.String("GST"),
                    Rate: sdk.Float64(10),
                },
                shared.TaxRateComponents{
                    Compound: sdk.Bool(true),
                    ID: sdk.String("10"),
                    Name: sdk.String("GST"),
                    Rate: sdk.Float64(10),
                },
                shared.TaxRateComponents{
                    Compound: sdk.Bool(true),
                    ID: sdk.String("10"),
                    Name: sdk.String("GST"),
                    Rate: sdk.Float64(10),
                },
            },
            Description: sdk.String("Reduced rate GST Purchases"),
            EffectiveTaxRate: sdk.Float64(10),
            ID: sdk.String("1234"),
            Name: sdk.String("GST on Purchases"),
            OriginalTaxRateID: sdk.String("12345"),
            ReportTaxType: sdk.String("NONE"),
            RowVersion: sdk.String("1-12345"),
            Status: shared.TaxRateTaxRateStatusEnumActive.ToPointer(),
            TaxPayableAccountID: sdk.String("123456"),
            TaxRemittedAccountID: sdk.String("123456"),
            TotalTaxRate: sdk.Float64(10),
            Type: sdk.String("NONE"),
        },
        Raw: sdk.Bool(false),
        XApideckAppID: "perspiciatis",
        XApideckConsumerID: "in",
        XApideckServiceID: sdk.String("adipisci"),
    }, operations.TaxRatesAddSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateTaxRateResponse != nil {
        // handle response
    }
}
```

## TaxRatesAll

List Tax Rates. Note: Not all connectors return the actual rate/percentage value. In this case, only the tax code or reference is returned. Connectors Affected: Quickbooks


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
    res, err := s.TaxRates.TaxRatesAll(ctx, operations.TaxRatesAllRequest{
        Cursor: sdk.String("eveniet"),
        Fields: sdk.String("occaecati"),
        Filter: &shared.TaxRatesFilter{
            Assets: sdk.Bool(true),
            Equity: sdk.Bool(true),
            Expenses: sdk.Bool(true),
            Liabilities: sdk.Bool(true),
            Revenue: sdk.Bool(true),
        },
        Limit: sdk.Int64(160230),
        PassThrough: map[string]interface{}{
            "id": "quis",
        },
        Raw: sdk.Bool(false),
        XApideckAppID: "reprehenderit",
        XApideckConsumerID: "error",
        XApideckServiceID: sdk.String("illo"),
    }, operations.TaxRatesAllSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTaxRatesResponse != nil {
        // handle response
    }
}
```

## TaxRatesDelete

Delete Tax Rate

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
    res, err := s.TaxRates.TaxRatesDelete(ctx, operations.TaxRatesDeleteRequest{
        ID: "5be3e060-807e-42b6-a3ab-8845f0597a60",
        Raw: sdk.Bool(false),
        XApideckAppID: "maiores",
        XApideckConsumerID: "reiciendis",
        XApideckServiceID: sdk.String("dolores"),
    }, operations.TaxRatesDeleteSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteTaxRateResponse != nil {
        // handle response
    }
}
```

## TaxRatesOne

Get Tax Rate. Note: Not all connectors return the actual rate/percentage value. In this case, only the tax code or reference is returned. Support will soon be added to return the actual rate/percentage by doing additional calls in the background to provide the full view of a given tax rate. Connectors Affected: Quickbooks


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
    res, err := s.TaxRates.TaxRatesOne(ctx, operations.TaxRatesOneRequest{
        Fields: sdk.String("id"),
        ID: "54a31e94-764a-43e8-a5e7-956f9251a5a9",
        Raw: sdk.Bool(false),
        XApideckAppID: "possimus",
        XApideckConsumerID: "animi",
        XApideckServiceID: sdk.String("ex"),
    }, operations.TaxRatesOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTaxRateResponse != nil {
        // handle response
    }
}
```

## TaxRatesUpdate

Update Tax Rate

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
    res, err := s.TaxRates.TaxRatesUpdate(ctx, operations.TaxRatesUpdateRequest{
        TaxRateInput: shared.TaxRateInput{
            Code: sdk.String("ABN"),
            Components: []shared.TaxRateComponents{
                shared.TaxRateComponents{
                    Compound: sdk.Bool(true),
                    ID: sdk.String("10"),
                    Name: sdk.String("GST"),
                    Rate: sdk.Float64(10),
                },
                shared.TaxRateComponents{
                    Compound: sdk.Bool(true),
                    ID: sdk.String("10"),
                    Name: sdk.String("GST"),
                    Rate: sdk.Float64(10),
                },
            },
            Description: sdk.String("Reduced rate GST Purchases"),
            EffectiveTaxRate: sdk.Float64(10),
            ID: sdk.String("1234"),
            Name: sdk.String("GST on Purchases"),
            OriginalTaxRateID: sdk.String("12345"),
            ReportTaxType: sdk.String("NONE"),
            RowVersion: sdk.String("1-12345"),
            Status: shared.TaxRateTaxRateStatusEnumActive.ToPointer(),
            TaxPayableAccountID: sdk.String("123456"),
            TaxRemittedAccountID: sdk.String("123456"),
            TotalTaxRate: sdk.Float64(10),
            Type: sdk.String("NONE"),
        },
        ID: "0ff57bfa-ad4f-49ef-81b4-512c1032648d",
        Raw: sdk.Bool(false),
        XApideckAppID: "impedit",
        XApideckConsumerID: "eos",
        XApideckServiceID: sdk.String("sapiente"),
    }, operations.TaxRatesUpdateSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateTaxRateResponse != nil {
        // handle response
    }
}
```
