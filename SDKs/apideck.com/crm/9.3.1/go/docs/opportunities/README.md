# Opportunities

### Available Operations

* [OpportunitiesAdd](#opportunitiesadd) - Create opportunity
* [OpportunitiesAll](#opportunitiesall) - List opportunities
* [OpportunitiesDelete](#opportunitiesdelete) - Delete opportunity
* [OpportunitiesOne](#opportunitiesone) - Get opportunity
* [OpportunitiesUpdate](#opportunitiesupdate) - Update opportunity

## OpportunitiesAdd

Create opportunity

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Opportunities.OpportunitiesAdd(ctx, operations.OpportunitiesAddRequest{
        OpportunityInput: shared.OpportunityInput{
            CloseDate: types.MustDateFromString("2020-10-30"),
            CompanyID: sdk.String("12345"),
            CompanyName: sdk.String("Copper"),
            ContactID: sdk.String("12345"),
            ContactIds: []string{
                "12345",
            },
            Currency: shared.CurrencyEnumUsd.ToPointer(),
            CustomFields: []shared.CustomField{
                shared.CustomField{
                    Description: sdk.String("Employee Level"),
                    ID: "2389328923893298",
                    Name: sdk.String("employee_level"),
                    Value: sdk.Bool(true),
                },
                shared.CustomField{
                    Description: sdk.String("Employee Level"),
                    ID: "2389328923893298",
                    Name: sdk.String("employee_level"),
                    Value: sdk.String("Uses Salesforce and Marketo"),
                },
                shared.CustomField{
                    Description: sdk.String("Employee Level"),
                    ID: "2389328923893298",
                    Name: sdk.String("employee_level"),
                    Value: []string{
                        "quo",
                        "fuga",
                        "eius",
                        "eos",
                    },
                },
            },
            Description: sdk.String("Opportunities are created for People and Companies that are interested in buying your products or services. Create Opportunities for People and Companies to move them through one of your Pipelines."),
            LeadID: sdk.String("12345"),
            LeadSource: sdk.String("Website"),
            LossReason: sdk.String("No budget"),
            LossReasonID: sdk.String("12345"),
            MonetaryAmount: sdk.Float64(75000),
            OwnerID: sdk.String("12345"),
            PipelineID: sdk.String("12345"),
            PipelineStageID: sdk.String("12345"),
            PrimaryContactID: "12345",
            Priority: sdk.String("None"),
            SourceID: sdk.String("12345"),
            StageLastChangedAt: types.MustTimeFromString("2020-09-30T07:43:32.000Z"),
            Status: sdk.String("Open"),
            StatusID: sdk.String("12345"),
            Tags: []string{
                "ab",
                "cupiditate",
            },
            Title: "New Rocket",
            Type: sdk.String("Existing Customer - Upgrade"),
            WinProbability: sdk.Float64(40),
            WonReason: sdk.String("Best pitch"),
            WonReasonID: sdk.String("12345"),
        },
        Raw: sdk.Bool(false),
        XApideckAppID: "consequatur",
        XApideckConsumerID: "tempora",
        XApideckServiceID: sdk.String("debitis"),
    }, operations.OpportunitiesAddSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOpportunityResponse != nil {
        // handle response
    }
}
```

## OpportunitiesAll

List opportunities

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
    res, err := s.Opportunities.OpportunitiesAll(ctx, operations.OpportunitiesAllRequest{
        Cursor: sdk.String("ipsam"),
        Fields: sdk.String("aspernatur"),
        Filter: &shared.OpportunitiesFilter{
            CompanyID: sdk.String("1234"),
            MonetaryAmount: sdk.Float64(75000),
            Status: sdk.String("Completed"),
            Title: sdk.String("Tesla deal"),
            WinProbability: sdk.Float64(50),
        },
        Limit: sdk.Int64(197054),
        Raw: sdk.Bool(false),
        Sort: &shared.OpportunitiesSort{
            By: shared.OpportunitiesSortByEnumCreatedAt.ToPointer(),
            Direction: shared.SortDirectionEnumDesc.ToPointer(),
        },
        XApideckAppID: "esse",
        XApideckConsumerID: "recusandae",
        XApideckServiceID: sdk.String("aperiam"),
    }, operations.OpportunitiesAllSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOpportunitiesResponse != nil {
        // handle response
    }
}
```

## OpportunitiesDelete

Delete opportunity

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
    res, err := s.Opportunities.OpportunitiesDelete(ctx, operations.OpportunitiesDeleteRequest{
        ID: "bc7178e4-796f-42a7-8c68-8282aa482562",
        Raw: sdk.Bool(false),
        XApideckAppID: "sapiente",
        XApideckConsumerID: "consequuntur",
        XApideckServiceID: sdk.String("ratione"),
    }, operations.OpportunitiesDeleteSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteOpportunityResponse != nil {
        // handle response
    }
}
```

## OpportunitiesOne

Get opportunity

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
    res, err := s.Opportunities.OpportunitiesOne(ctx, operations.OpportunitiesOneRequest{
        Fields: sdk.String("explicabo"),
        ID: "e9817ee1-7cbe-461e-ab7b-95bc0ab3c20c",
        Raw: sdk.Bool(false),
        XApideckAppID: "quaerat",
        XApideckConsumerID: "sapiente",
        XApideckServiceID: sdk.String("consectetur"),
    }, operations.OpportunitiesOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOpportunityResponse != nil {
        // handle response
    }
}
```

## OpportunitiesUpdate

Update opportunity

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Opportunities.OpportunitiesUpdate(ctx, operations.OpportunitiesUpdateRequest{
        OpportunityInput: shared.OpportunityInput{
            CloseDate: types.MustDateFromString("2020-10-30"),
            CompanyID: sdk.String("12345"),
            CompanyName: sdk.String("Copper"),
            ContactID: sdk.String("12345"),
            ContactIds: []string{
                "12345",
                "12345",
            },
            Currency: shared.CurrencyEnumUsd.ToPointer(),
            CustomFields: []shared.CustomField{
                shared.CustomField{
                    Description: sdk.String("Employee Level"),
                    ID: "2389328923893298",
                    Name: sdk.String("employee_level"),
                    Value: sdk.Bool(true),
                },
                shared.CustomField{
                    Description: sdk.String("Employee Level"),
                    ID: "2389328923893298",
                    Name: sdk.String("employee_level"),
                    Value: []string{
                        "quas",
                        "esse",
                        "quasi",
                        "a",
                    },
                },
                shared.CustomField{
                    Description: sdk.String("Employee Level"),
                    ID: "2389328923893298",
                    Name: sdk.String("employee_level"),
                    Value: sdk.Bool(true),
                },
            },
            Description: sdk.String("Opportunities are created for People and Companies that are interested in buying your products or services. Create Opportunities for People and Companies to move them through one of your Pipelines."),
            LeadID: sdk.String("12345"),
            LeadSource: sdk.String("Website"),
            LossReason: sdk.String("No budget"),
            LossReasonID: sdk.String("12345"),
            MonetaryAmount: sdk.Float64(75000),
            OwnerID: sdk.String("12345"),
            PipelineID: sdk.String("12345"),
            PipelineStageID: sdk.String("12345"),
            PrimaryContactID: "12345",
            Priority: sdk.String("None"),
            SourceID: sdk.String("12345"),
            StageLastChangedAt: types.MustTimeFromString("2020-09-30T07:43:32.000Z"),
            Status: sdk.String("Open"),
            StatusID: sdk.String("12345"),
            Tags: []string{
                "pariatur",
                "possimus",
                "quia",
            },
            Title: "New Rocket",
            Type: sdk.String("Existing Customer - Upgrade"),
            WinProbability: sdk.Float64(40),
            WonReason: sdk.String("Best pitch"),
            WonReasonID: sdk.String("12345"),
        },
        ID: "efd121aa-6f1e-4674-bdb0-4f15756082d6",
        Raw: sdk.Bool(false),
        XApideckAppID: "deleniti",
        XApideckConsumerID: "itaque",
        XApideckServiceID: sdk.String("dolorum"),
    }, operations.OpportunitiesUpdateSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOpportunityResponse != nil {
        // handle response
    }
}
```
