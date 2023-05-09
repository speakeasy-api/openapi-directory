# BusinessLines

### Available Operations

* [DeleteBusinessLinesID](#deletebusinesslinesid) - Delete a business line
* [GetBusinessLinesID](#getbusinesslinesid) - Get a business line
* [PatchBusinessLinesID](#patchbusinesslinesid) - Update a business line
* [PostBusinessLines](#postbusinesslines) - Create a business line

## DeleteBusinessLinesID

Deletes a business line.

 >If you delete a business line linked to a [payment method](https://docs.adyen.com/development-resources/paymentmethodvariant#management-api), it can affect your merchant account's ability to use the [payment method](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/_merchantId_/paymentMethodSettings). The business line is removed from all linked merchant accounts.

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
    res, err := s.BusinessLines.DeleteBusinessLinesID(ctx, operations.DeleteBusinessLinesIDRequest{
        ID: "a05dfc2d-df7c-4c78-8a1b-a928fc816742",
    }, operations.DeleteBusinessLinesIDSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetBusinessLinesID

Returns the detail of a business line.

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
    res, err := s.BusinessLines.GetBusinessLinesID(ctx, operations.GetBusinessLinesIDRequest{
        ID: "cb739205-9293-496f-aa75-96eb10faaa23",
    }, operations.GetBusinessLinesIDSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BusinessLine != nil {
        // handle response
    }
}
```

## PatchBusinessLinesID

Updates a business line.

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
    res, err := s.BusinessLines.PatchBusinessLinesID(ctx, operations.PatchBusinessLinesIDRequest{
        BusinessLineInfoUpdateInput: &shared.BusinessLineInfoUpdateInput{
            Capability: sdk.String("corporis"),
            IndustryCode: sdk.String("explicabo"),
            LegalEntityID: sdk.String("nobis"),
            SalesChannels: []string{
                "omnis",
                "nemo",
            },
            SourceOfFunds: &shared.SourceOfFunds{
                AcquiringBusinessLineID: sdk.String("minima"),
                AdyenProcessedFunds: sdk.Bool(false),
                Description: sdk.String("excepturi"),
                Type: shared.SourceOfFundsTypeEnumBusiness.ToPointer(),
            },
            WebData: []shared.WebDataInput{
                shared.WebDataInput{
                    WebAddress: sdk.String("iure"),
                },
            },
            WebDataExemption: &shared.WebDataExemption{
                Reason: shared.WebDataExemptionReasonEnumNoOnlinePresence.ToPointer(),
            },
        },
        ID: "aff1a3a2-fa94-4677-b925-1aa52c3f5ad0",
    }, operations.PatchBusinessLinesIDSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BusinessLine != nil {
        // handle response
    }
}
```

## PostBusinessLines

Creates a business line. 

This resource contains information about your user's line of business, including their industry and their source of funds. Adyen uses this information to verify your users as required by payment industry regulations. Adyen informs you of the verification results through webhooks or API responses.>If you are using hosted onboarding, [only use v2](https://docs.adyen.com/release-notes/platforms-and-financial-products#releaseNote=2023-05-01-legal-entity-management-api-3) for your API requests.



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
    res, err := s.BusinessLines.PostBusinessLines(ctx, shared.BusinessLineInfoInput{
        Capability: "quasi",
        IndustryCode: "error",
        LegalEntityID: "temporibus",
        SalesChannels: []string{
            "quasi",
            "reiciendis",
            "voluptatibus",
        },
        SourceOfFunds: &shared.SourceOfFunds{
            AcquiringBusinessLineID: sdk.String("vero"),
            AdyenProcessedFunds: sdk.Bool(false),
            Description: sdk.String("nihil"),
            Type: shared.SourceOfFundsTypeEnumBusiness.ToPointer(),
        },
        WebData: []shared.WebDataInput{
            shared.WebDataInput{
                WebAddress: sdk.String("voluptatibus"),
            },
            shared.WebDataInput{
                WebAddress: sdk.String("ipsa"),
            },
            shared.WebDataInput{
                WebAddress: sdk.String("omnis"),
            },
        },
        WebDataExemption: &shared.WebDataExemption{
            Reason: shared.WebDataExemptionReasonEnumNoOnlinePresence.ToPointer(),
        },
    }, operations.PostBusinessLinesSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BusinessLine != nil {
        // handle response
    }
}
```
