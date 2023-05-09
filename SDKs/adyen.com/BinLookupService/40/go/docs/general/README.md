# General

### Available Operations

* [PostGet3dsAvailability](#postget3dsavailability) - Check if 3D Secure is available
* [PostGetCostEstimate](#postgetcostestimate) - Get a fees cost estimate

## PostGet3dsAvailability

Verifies whether 3D Secure is available for the specified BIN or card brand. For 3D Secure 2, this endpoint also returns device fingerprinting keys.

For more information, refer to [3D Secure 2](https://docs.adyen.com/online-payments/3d-secure/native-3ds2).

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
    res, err := s.General.PostGet3dsAvailability(ctx, shared.ThreeDSAvailabilityRequest{
        AdditionalData: map[string]string{
            "tempora": "suscipit",
            "molestiae": "minus",
            "placeat": "voluptatum",
            "iusto": "excepturi",
        },
        Brands: []string{
            "recusandae",
            "temporibus",
        },
        CardNumber: sdk.String("ab"),
        MerchantAccount: "quis",
        RecurringDetailReference: sdk.String("veritatis"),
        ShopperReference: sdk.String("deserunt"),
    }, operations.PostGet3dsAvailabilitySecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ThreeDSAvailabilityResponse != nil {
        // handle response
    }
}
```

## PostGetCostEstimate

>This API is available only for merchants operating in Australia, the EU, and the UK.

Use the Adyen Cost Estimation API to pre-calculate interchange and scheme fee costs. Knowing these costs prior actual payment authorisation gives you an opportunity to charge those costs to the cardholder, if necessary.

To retrieve this information, make the call to the `/getCostEstimate` endpoint. The response to this call contains the amount of the interchange and scheme fees charged by the network for this transaction, and also which surcharging policy is possible (based on current regulations).

> Since not all information is known in advance (for example, if the cardholder will successfully authenticate via 3D Secure or if you also plan to provide additional Level 2/3 data), the returned amounts are based on a set of assumption criteria you define in the `assumptions` parameter.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.General.PostGetCostEstimate(ctx, shared.CostEstimateRequest{
        Amount: shared.Amount{
            Currency: "perferendis",
            Value: 368241,
        },
        Assumptions: &shared.CostEstimateAssumptions{
            Assume3DSecureAuthenticated: sdk.Bool(false),
            AssumeLevel3Data: sdk.Bool(false),
            Installments: sdk.Int(832620),
        },
        CardNumber: sdk.String("sapiente"),
        EncryptedCardNumber: sdk.String("quo"),
        MerchantAccount: "odit",
        MerchantDetails: &shared.MerchantDetails{
            CountryCode: sdk.String("TG"),
            EnrolledIn3DSecure: sdk.Bool(false),
            Mcc: sdk.String("at"),
        },
        Recurring: &shared.Recurring{
            Contract: shared.RecurringContractEnumPayout.ToPointer(),
            RecurringDetailName: sdk.String("molestiae"),
            RecurringExpiry: types.MustTimeFromString("2020-08-07T00:03:55.328Z"),
            RecurringFrequency: sdk.String("esse"),
            TokenService: shared.RecurringTokenServiceEnumMctokenservice.ToPointer(),
        },
        SelectedRecurringDetailReference: sdk.String("porro"),
        ShopperInteraction: shared.CostEstimateRequestShopperInteractionEnumMoto.ToPointer(),
        ShopperReference: sdk.String("dicta"),
    }, operations.PostGetCostEstimateSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CostEstimateResponse != nil {
        // handle response
    }
}
```
