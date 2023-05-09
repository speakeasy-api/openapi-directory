# PaymentMethodsMerchantLevel

### Available Operations

* [GetMerchantsMerchantIDPaymentMethodSettings](#getmerchantsmerchantidpaymentmethodsettings) - Get all payment methods
* [GetMerchantsMerchantIDPaymentMethodSettingsPaymentMethodID](#getmerchantsmerchantidpaymentmethodsettingspaymentmethodid) - Get payment method details
* [GetMerchantsMerchantIDPaymentMethodSettingsPaymentMethodIDGetApplePayDomains](#getmerchantsmerchantidpaymentmethodsettingspaymentmethodidgetapplepaydomains) - Get Apple Pay domains
* [PatchMerchantsMerchantIDPaymentMethodSettingsPaymentMethodID](#patchmerchantsmerchantidpaymentmethodsettingspaymentmethodid) - Update a payment method
* [PostMerchantsMerchantIDPaymentMethodSettings](#postmerchantsmerchantidpaymentmethodsettings) - Request a payment method
* [PostMerchantsMerchantIDPaymentMethodSettingsPaymentMethodIDAddApplePayDomains](#postmerchantsmerchantidpaymentmethodsettingspaymentmethodidaddapplepaydomains) - Add an Apple Pay domain

## GetMerchantsMerchantIDPaymentMethodSettings

Returns details for all payment methods of the merchant account identified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Payment methods read


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
    res, err := s.PaymentMethodsMerchantLevel.GetMerchantsMerchantIDPaymentMethodSettings(ctx, operations.GetMerchantsMerchantIDPaymentMethodSettingsRequest{
        BusinessLineID: sdk.String("ea"),
        MerchantID: "accusantium",
        PageNumber: sdk.Int(69167),
        PageSize: sdk.Int(982575),
        StoreID: sdk.String("quidem"),
    }, operations.GetMerchantsMerchantIDPaymentMethodSettingsSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentMethodResponse != nil {
        // handle response
    }
}
```

## GetMerchantsMerchantIDPaymentMethodSettingsPaymentMethodID

Returns details for the merchant account and the payment method identified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Payment methods read


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
    res, err := s.PaymentMethodsMerchantLevel.GetMerchantsMerchantIDPaymentMethodSettingsPaymentMethodID(ctx, operations.GetMerchantsMerchantIDPaymentMethodSettingsPaymentMethodIDRequest{
        MerchantID: "ipsam",
        PaymentMethodID: "voluptate",
    }, operations.GetMerchantsMerchantIDPaymentMethodSettingsPaymentMethodIDSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentMethod != nil {
        // handle response
    }
}
```

## GetMerchantsMerchantIDPaymentMethodSettingsPaymentMethodIDGetApplePayDomains

Returns all Apple Pay domains that are registered with the merchant account and the payment method identified in the path. For more information, see [Apple Pay documentation](https://docs.adyen.com/payment-methods/apple-pay/enable-apple-pay#register-merchant-domain).

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Payment methods read


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
    res, err := s.PaymentMethodsMerchantLevel.GetMerchantsMerchantIDPaymentMethodSettingsPaymentMethodIDGetApplePayDomains(ctx, operations.GetMerchantsMerchantIDPaymentMethodSettingsPaymentMethodIDGetApplePayDomainsRequest{
        MerchantID: "autem",
        PaymentMethodID: "nam",
    }, operations.GetMerchantsMerchantIDPaymentMethodSettingsPaymentMethodIDGetApplePayDomainsSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ApplePayInfo != nil {
        // handle response
    }
}
```

## PatchMerchantsMerchantIDPaymentMethodSettingsPaymentMethodID

Updates payment method details for the merchant account and the payment method identified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Payment methods read and write


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
    res, err := s.PaymentMethodsMerchantLevel.PatchMerchantsMerchantIDPaymentMethodSettingsPaymentMethodID(ctx, operations.PatchMerchantsMerchantIDPaymentMethodSettingsPaymentMethodIDRequest{
        UpdatePaymentMethodInfo: &shared.UpdatePaymentMethodInfo{
            Countries: []string{
                "pariatur",
            },
            Currencies: []string{
                "voluptatibus",
                "perferendis",
            },
            CustomRoutingFlags: []string{
                "amet",
                "aut",
                "cumque",
                "corporis",
            },
            Enabled: sdk.Bool(false),
            ShopperStatement: &shared.ShopperStatement{
                DoingBusinessAsName: sdk.String("hic"),
                Type: shared.ShopperStatementTypeEnumFixed.ToPointer(),
            },
            StoreIds: []string{
                "dolores",
                "quis",
                "totam",
            },
        },
        MerchantID: "dignissimos",
        PaymentMethodID: "eaque",
    }, operations.PatchMerchantsMerchantIDPaymentMethodSettingsPaymentMethodIDSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentMethod != nil {
        // handle response
    }
}
```

## PostMerchantsMerchantIDPaymentMethodSettings

Sends a request to add a new payment method to the merchant account identified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Payment methods read and write


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
    res, err := s.PaymentMethodsMerchantLevel.PostMerchantsMerchantIDPaymentMethodSettings(ctx, operations.PostMerchantsMerchantIDPaymentMethodSettingsRequest{
        PaymentMethodSetupInfo: &shared.PaymentMethodSetupInfo{
            ApplePay: &shared.ApplePayInfo{
                Domains: []string{
                    "nesciunt",
                    "eos",
                },
            },
            Bcmc: &shared.BcmcInfo{
                EnableBcmcMobile: sdk.Bool(false),
            },
            BusinessLineID: sdk.String("perferendis"),
            CartesBancaires: &shared.CartesBancairesInfo{
                Siret: "dolores",
            },
            Countries: []string{
                "quam",
                "dolor",
                "vero",
                "nostrum",
            },
            Currencies: []string{
                "recusandae",
                "omnis",
                "facilis",
                "perspiciatis",
            },
            CustomRoutingFlags: []string{
                "porro",
            },
            GiroPay: &shared.GiroPayInfo{
                SupportEmail: "consequuntur",
            },
            GooglePay: &shared.GooglePayInfo{
                MerchantID: "blanditiis",
                ReuseMerchantID: sdk.Bool(false),
            },
            Klarna: &shared.KlarnaInfo{
                AutoCapture: sdk.Bool(false),
                DisputeEmail: "error",
                Region: shared.KlarnaInfoRegionEnumNa.ToPointer(),
                SupportEmail: "occaecati",
            },
            MealVoucherFR: &shared.MealVoucherFRInfo{
                ConecsID: "rerum",
                Siret: "adipisci",
                SubTypes: []string{
                    "earum",
                    "modi",
                    "iste",
                    "dolorum",
                },
            },
            Paypal: &shared.PayPalInfo{
                DirectCapture: sdk.Bool(false),
                PayerID: "deleniti",
                Subject: "pariatur",
            },
            Reference: sdk.String("provident"),
            ShopperInteraction: shared.PaymentMethodSetupInfoShopperInteractionEnumContAuth.ToPointer(),
            Sofort: &shared.SofortInfo{
                CurrencyCode: "libero",
                Logo: "delectus",
            },
            StoreID: sdk.String("quaerat"),
            Swish: &shared.SwishInfo{
                SwishNumber: sdk.String("quos"),
            },
            Type: shared.PaymentMethodSetupInfoTypeEnumGirocard.ToPointer(),
            Vipps: &shared.VippsInfo{
                Logo: "dolorem",
                SubscriptionCancelURL: sdk.String("dolorem"),
            },
        },
        MerchantID: "dolor",
    }, operations.PostMerchantsMerchantIDPaymentMethodSettingsSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentMethod != nil {
        // handle response
    }
}
```

## PostMerchantsMerchantIDPaymentMethodSettingsPaymentMethodIDAddApplePayDomains

Adds the new domain to the list of Apple Pay domains that are registered with the merchant account and the payment method identified in the path. For more information, see [Apple Pay documentation](https://docs.adyen.com/payment-methods/apple-pay/enable-apple-pay#register-merchant-domain).

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Payment methods read and write


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
    res, err := s.PaymentMethodsMerchantLevel.PostMerchantsMerchantIDPaymentMethodSettingsPaymentMethodIDAddApplePayDomains(ctx, operations.PostMerchantsMerchantIDPaymentMethodSettingsPaymentMethodIDAddApplePayDomainsRequest{
        ApplePayInfo: &shared.ApplePayInfo{
            Domains: []string{
                "ipsum",
            },
        },
        MerchantID: "hic",
        PaymentMethodID: "excepturi",
    }, operations.PostMerchantsMerchantIDPaymentMethodSettingsPaymentMethodIDAddApplePayDomainsSecurity{
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
