# Itv

### Available Operations

* [ActivateSaveOffer](#activatesaveoffer) - Activates the discount for a user. Only Stripe platform is currently supported.
* [ChangeCardDetails](#changecarddetails) - Change payment card details.
* [ChangeEmail](#changeemail) - Change email address related to account/profile.

The expected token scope is Settings.

* [ChangeMarketing](#changemarketing) - Change marketing preferences related to account/profile.

The expected token scope is Settings.

* [CheckPreviousEntitlements](#checkpreviousentitlements) - Check whether the user has been previously entitled.
* [CheckVoucher](#checkvoucher) - Validates the coupon/voucher for specified payment platform.
* [ConfirmPurchase](#confirmpurchase) - Confirms purchase and returns the details of purchased subscription for specified payment platform.
* [ConfirmPurchaseStrong](#confirmpurchasestrong) - Confirms purchase and returns the details of purchased subscription for specified payment platform.
* [ConfirmPurchaseWithOffer](#confirmpurchasewithoffer) - Confirms purchase and returns the details of purchased subscription for specified payment platform.
* [DeleteAccount](#deleteaccount) - Delete account in compliance with GDPR.

The expected token scope is Settings.

* [DeleteItvPurchasePlatform](#deleteitvpurchaseplatform) - Cancel a plan subscription.

A cancelled subscription will continue to be valid until the subscription
expiry date or next renewal date.

* [ExecuteTransaction](#executetransaction) - Sends request to execute specified transaction.
* [GetAccountTokenWithPin](#getaccounttokenwithpin) - Provides authorization with parental control pin.

Returns an array containing account token with Playback scope.

Requires access token with Catalog scope.

Pin must be a 4-digit string

* [GetBillingHistory](#getbillinghistory) - Returns the list of billing records for specified payment platform.
* [GetCardDetails](#getcarddetails) - Get payment card details.
* [GetCurrentEntitlement](#getcurrententitlement) - Returns current entitlement.
* [GetCurrentSubscription](#getcurrentsubscription) - Returns the details of current subscription for specified payment platform.
* [GetEntitlementsHistory](#getentitlementshistory) - Returns the state of subscription for any payment platform.
* [GetFeatureFlag](#getfeatureflag) - Gets info whether or not a feature is enabled or disabled using a feature flag. Feature flags are set as a custom field within PM. It also supports custom feature flag data if needed. Such data can be return as well.
* [GetFullPriceRenewal](#getfullpricerenewal) - Returns full price renewal state and reason for specific user.
* [GetItvProfileToken](#getitvprofiletoken) - Returns the ITV profile token.
* [GetPublicPreview](#getpublicpreview) - Returns public preview for Samsung based on the page '/samsung-preview' configured in PresentationManager.
There is a hard limit of max 40 items to be returned. It splits evenly items count into the page rows, remaining items are added into the first row.

* [GetRecommendedList](#getrecommendedlist) - Get the list of recommended items under the active profile.
* [GetSaveOffer](#getsaveoffer) - Checks the provided coupon id for a user. Only Stripe platform is currently supported.
* [GetSubscriptionState](#getsubscriptionstate) - Returns the state of subscription for any payment platform.
* [GetSubscriptionStatus](#getsubscriptionstatus) - Returns status of latest payment intent.
* [GetUpcomingInvoice](#getupcominginvoice) - Returns an upcoming invoice
* [GetVoucherByID](#getvoucherbyid) - Checks the provided coupon id for a user. Only Stripe platform is currently supported.
* [GetItvItemsummaryExternalID](#getitvitemsummaryexternalid) - Redirects to corresponding Axis Item details page.
* [GetItvPlansPlatform](#getitvplansplatform) - Returns the plans available for specified payment platform.
* [GetItvProfile](#getitvprofile) - Returns the ITV profile object.
* [GetItvRokuPlans](#getitvrokuplans) - Gets available Roku plans.
* [GooglePaySubscription](#googlepaysubscription) - Get the list of recommended items under the active profile.
* [Resubscribe](#resubscribe) - Resubscription for a user.
* [UpdatePaymentIntentStrong](#updatepaymentintentstrong) - Change payment method details.
* [UpdatePaymentMethodStrong](#updatepaymentmethodstrong) - Change payment method details.
* [UpdateProfile](#updateprofile) - Update ITV profile.

The expected token scope is Settings.

* [UpgradePlan](#upgradeplan) - Upgrades the plan for the current user.

## ActivateSaveOffer

Activates the discount for a user. Only Stripe platform is currently supported.

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
    res, err := s.Itv.ActivateSaveOffer(ctx, operations.ActivateSaveOfferRequest{
        RequestBody: "ullam",
        Lang: sdk.String("in"),
    }, operations.ActivateSaveOfferSecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ChangeCardDetails

Change payment card details.

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
    res, err := s.Itv.ChangeCardDetails(ctx, operations.ChangeCardDetailsRequest{
        ItvChangeCardDetailsRequest: shared.ItvChangeCardDetailsRequest{
            CardToken: "nam",
            ProfileToken: "earum",
        },
        Lang: sdk.String("officia"),
        Platform: "laborum",
    }, operations.ChangeCardDetailsSecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ChangeEmail

Change email address related to account/profile.

The expected token scope is Settings.


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
    res, err := s.Itv.ChangeEmail(ctx, operations.ChangeEmailRequest{
        ItvChangeEmailRequest: shared.ItvChangeEmailRequest{
            Email: "Dixie_Wolf@hotmail.com",
            ProfileToken: "sapiente",
        },
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumAll,
            shared.FeatureFlagsEnumCas,
            shared.FeatureFlagsEnumLdp,
            shared.FeatureFlagsEnumLdp,
        },
        Lang: sdk.String("inventore"),
    }, operations.ChangeEmailSecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ChangeMarketing

Change marketing preferences related to account/profile.

The expected token scope is Settings.


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
    res, err := s.Itv.ChangeMarketing(ctx, operations.ChangeMarketingRequest{
        ItvChangeMarketingRequest: shared.ItvChangeMarketingRequest{
            EmailOptIn: false,
            ProfileToken: "fugit",
        },
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumAll,
            shared.FeatureFlagsEnumAll,
            shared.FeatureFlagsEnumIdp,
            shared.FeatureFlagsEnumIdp,
        },
        Lang: sdk.String("eum"),
    }, operations.ChangeMarketingSecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CheckPreviousEntitlements

Check whether the user has been previously entitled.

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
    res, err := s.Itv.CheckPreviousEntitlements(ctx, operations.CheckPreviousEntitlementsRequest{
        Lang: sdk.String("eius"),
    }, operations.CheckPreviousEntitlementsSecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ItvHadEntitlement != nil {
        // handle response
    }
}
```

## CheckVoucher

Validates the coupon/voucher for specified payment platform.

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
    res, err := s.Itv.CheckVoucher(ctx, operations.CheckVoucherRequest{
        ItvVoucherRequest: shared.ItvVoucherRequest{
            Voucher: "rem",
        },
        Lang: sdk.String("at"),
        Platform: "impedit",
    }, operations.CheckVoucherSecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ItvVoucher != nil {
        // handle response
    }
}
```

## ConfirmPurchase

Confirms purchase and returns the details of purchased subscription for specified payment platform.

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
    res, err := s.Itv.ConfirmPurchase(ctx, operations.ConfirmPurchaseRequest{
        ItvPurchaseRequest: shared.ItvPurchaseRequest{
            CardToken: "eos",
            PlanID: "sapiente",
            ProfileToken: "eum",
            Voucher: sdk.String("dicta"),
        },
        Lang: sdk.String("minima"),
        Platform: "beatae",
    }, operations.ConfirmPurchaseSecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ItvPurchase != nil {
        // handle response
    }
}
```

## ConfirmPurchaseStrong

Confirms purchase and returns the details of purchased subscription for specified payment platform.

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
    res, err := s.Itv.ConfirmPurchaseStrong(ctx, operations.ConfirmPurchaseStrongRequest{
        ItvPurchaseStrongRequest: shared.ItvPurchaseStrongRequest{
            PaymentMethodFromToken: sdk.String("cupiditate"),
            PaymentMethodID: sdk.String("provident"),
            PlanID: "earum",
            ProfileToken: "soluta",
            Voucher: sdk.String("hic"),
        },
        Lang: sdk.String("illum"),
        Platform: "eaque",
    }, operations.ConfirmPurchaseStrongSecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ItvPurchaseStrongResponse != nil {
        // handle response
    }
}
```

## ConfirmPurchaseWithOffer

Confirms purchase and returns the details of purchased subscription for specified payment platform.

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
    res, err := s.Itv.ConfirmPurchaseWithOffer(ctx, operations.ConfirmPurchaseWithOfferRequest{
        ItvPurchaseWithOfferRequest: shared.ItvPurchaseWithOfferRequest{
            CouponID: "earum",
            PaymentMethodFromToken: sdk.String("perspiciatis"),
            PaymentMethodID: sdk.String("maiores"),
            PlanID: "debitis",
            ProfileToken: "aliquid",
        },
        Lang: sdk.String("porro"),
        Platform: "suscipit",
    }, operations.ConfirmPurchaseWithOfferSecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ItvPurchaseWithOfferResponse != nil {
        // handle response
    }
}
```

## DeleteAccount

Delete account in compliance with GDPR.

The expected token scope is Settings.


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
    res, err := s.Itv.DeleteAccount(ctx, operations.DeleteAccountRequest{
        ItvDeleteAccountRequest: shared.ItvDeleteAccountRequest{
            ProfileToken: "dolorem",
        },
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumLrl,
        },
        Lang: sdk.String("fuga"),
    }, operations.DeleteAccountSecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteItvPurchasePlatform

Cancel a plan subscription.

A cancelled subscription will continue to be valid until the subscription
expiry date or next renewal date.


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
    res, err := s.Itv.DeleteItvPurchasePlatform(ctx, operations.DeleteItvPurchasePlatformRequest{
        ItvCancelSubscriptionRequest: shared.ItvCancelSubscriptionRequest{
            ProfileToken: "ratione",
        },
        Lang: sdk.String("animi"),
        Platform: "necessitatibus",
    }, operations.DeleteItvPurchasePlatformSecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ExecuteTransaction

Sends request to execute specified transaction.

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
    res, err := s.Itv.ExecuteTransaction(ctx, operations.ExecuteTransactionRequest{
        ItvRokuTransactionRequest: shared.ItvRokuTransactionRequest{
            ProfileToken: "nulla",
        },
        Lang: sdk.String("consequatur"),
        Transactionid: "quasi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAccountTokenWithPin

Provides authorization with parental control pin.

Returns an array containing account token with Playback scope.

Requires access token with Catalog scope.

Pin must be a 4-digit string


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
    res, err := s.Itv.GetAccountTokenWithPin(ctx, operations.GetAccountTokenWithPinRequest{
        ItvPinAuthRequest: shared.ItvPinAuthRequest{
            CookieType: shared.ItvPinAuthRequestCookieTypeEnumSession.ToPointer(),
            Pin: "ducimus",
            Scopes: []shared.ItvPinAuthRequestScopesEnum{
                shared.ItvPinAuthRequestScopesEnumSettings,
                shared.ItvPinAuthRequestScopesEnumCommerce,
                shared.ItvPinAuthRequestScopesEnumCatalog,
            },
        },
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumIdp,
        },
        Lang: sdk.String("doloribus"),
    }, operations.GetAccountTokenWithPinSecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccessTokens != nil {
        // handle response
    }
}
```

## GetBillingHistory

Returns the list of billing records for specified payment platform.

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
    res, err := s.Itv.GetBillingHistory(ctx, operations.GetBillingHistoryRequest{
        ItvBillingHistoryRequest: shared.ItvBillingHistoryRequest{
            ProfileToken: "nulla",
        },
        Lang: sdk.String("necessitatibus"),
        Platform: "ipsa",
    }, operations.GetBillingHistorySecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ItvBillingHistory != nil {
        // handle response
    }
}
```

## GetCardDetails

Get payment card details.

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
    res, err := s.Itv.GetCardDetails(ctx, operations.GetCardDetailsRequest{
        ItvGetCardDetailsRequest: shared.ItvGetCardDetailsRequest{
            ProfileToken: "tempora",
        },
        Lang: sdk.String("nihil"),
        Platform: "molestiae",
    }, operations.GetCardDetailsSecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ItvCardDetails != nil {
        // handle response
    }
}
```

## GetCurrentEntitlement

Returns current entitlement.

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
    res, err := s.Itv.GetCurrentEntitlement(ctx, operations.GetCurrentEntitlementRequest{
        Lang: sdk.String("dicta"),
    }, operations.GetCurrentEntitlementSecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ItvEntitlementCurrent != nil {
        // handle response
    }
}
```

## GetCurrentSubscription

Returns the details of current subscription for specified payment platform.

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
    res, err := s.Itv.GetCurrentSubscription(ctx, operations.GetCurrentSubscriptionRequest{
        Lang: sdk.String("iusto"),
        Platform: "esse",
    }, operations.GetCurrentSubscriptionSecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ItvCurrentSubscription != nil {
        // handle response
    }
}
```

## GetEntitlementsHistory

Returns the state of subscription for any payment platform.

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
    res, err := s.Itv.GetEntitlementsHistory(ctx, operations.GetEntitlementsHistoryRequest{
        Lang: sdk.String("praesentium"),
    }, operations.GetEntitlementsHistorySecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ItvEntitlementsHistory != nil {
        // handle response
    }
}
```

## GetFeatureFlag

Gets info whether or not a feature is enabled or disabled using a feature flag. Feature flags are set as a custom field within PM. It also supports custom feature flag data if needed. Such data can be return as well.

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
    res, err := s.Itv.GetFeatureFlag(ctx, operations.GetFeatureFlagRequest{
        Feature: "maiores",
        Lang: sdk.String("reiciendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ItvFeatureFlag != nil {
        // handle response
    }
}
```

## GetFullPriceRenewal

Returns full price renewal state and reason for specific user.

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
    res, err := s.Itv.GetFullPriceRenewal(ctx, operations.GetFullPriceRenewalRequest{
        Lang: sdk.String("vel"),
    }, operations.GetFullPriceRenewalSecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ItvSubscriptionFullPriceRenewal != nil {
        // handle response
    }
}
```

## GetItvProfileToken

Returns the ITV profile token.

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
    res, err := s.Itv.GetItvProfileToken(ctx, operations.GetItvProfileTokenRequest{
        ItvProfileTokenRequest: shared.ItvProfileTokenRequest{
            Password: "architecto",
        },
        Lang: sdk.String("fugiat"),
    }, operations.GetItvProfileTokenSecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ItvProfileToken != nil {
        // handle response
    }
}
```

## GetPublicPreview

Returns public preview for Samsung based on the page '/samsung-preview' configured in PresentationManager.
There is a hard limit of max 40 items to be returned. It splits evenly items count into the page rows, remaining items are added into the first row.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Itv.GetPublicPreview(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.SamsungPreview != nil {
        // handle response
    }
}
```

## GetRecommendedList

Get the list of recommended items under the active profile.

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
    res, err := s.Itv.GetRecommendedList(ctx, operations.GetRecommendedListRequest{
        Device: sdk.String("doloremque"),
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumHb,
        },
        ItemTypes: []string{
            "esse",
            "ex",
        },
        Lang: sdk.String("consectetur"),
        Page: sdk.Int(399812),
        PageSize: sdk.Int(58870),
        Segments: []string{
            "sunt",
            "nostrum",
            "fugiat",
        },
        Sub: sdk.String("expedita"),
    }, operations.GetRecommendedListSecurity{
        ProfileAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ItemList != nil {
        // handle response
    }
}
```

## GetSaveOffer

Checks the provided coupon id for a user. Only Stripe platform is currently supported.

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
    res, err := s.Itv.GetSaveOffer(ctx, operations.GetSaveOfferRequest{
        Lang: sdk.String("aliquid"),
    }, operations.GetSaveOfferSecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ItvGetDiscountResponse != nil {
        // handle response
    }
}
```

## GetSubscriptionState

Returns the state of subscription for any payment platform.

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
    res, err := s.Itv.GetSubscriptionState(ctx, operations.GetSubscriptionStateRequest{
        Lang: sdk.String("officia"),
    }, operations.GetSubscriptionStateSecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ItvSubscriptionState != nil {
        // handle response
    }
}
```

## GetSubscriptionStatus

Returns status of latest payment intent.

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
    res, err := s.Itv.GetSubscriptionStatus(ctx, operations.GetSubscriptionStatusRequest{
        Lang: sdk.String("suscipit"),
        Platform: "aliquid",
    }, operations.GetSubscriptionStatusSecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ItvSubscriptionStatusResponse != nil {
        // handle response
    }
}
```

## GetUpcomingInvoice

Returns an upcoming invoice

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
    res, err := s.Itv.GetUpcomingInvoice(ctx, operations.GetUpcomingInvoiceRequest{
        Lang: sdk.String("perferendis"),
    }, operations.GetUpcomingInvoiceSecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ItvGetDiscountResponse != nil {
        // handle response
    }
}
```

## GetVoucherByID

Checks the provided coupon id for a user. Only Stripe platform is currently supported.

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
    res, err := s.Itv.GetVoucherByID(ctx, operations.GetVoucherByIDRequest{
        Lang: sdk.String("eum"),
        PlanID: "voluptas",
        VoucherID: "iste",
    }, operations.GetVoucherByIDSecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ItvVoucher != nil {
        // handle response
    }
}
```

## GetItvItemsummaryExternalID

Redirects to corresponding Axis Item details page.

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
    res, err := s.Itv.GetItvItemsummaryExternalID(ctx, operations.GetItvItemsummaryExternalIDRequest{
        ExternalID: "id",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetItvPlansPlatform

Returns the plans available for specified payment platform.

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
    res, err := s.Itv.GetItvPlansPlatform(ctx, operations.GetItvPlansPlatformRequest{
        Lang: sdk.String("ab"),
        Platform: "error",
    }, operations.GetItvPlansPlatformSecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ItvPlans != nil {
        // handle response
    }
}
```

## GetItvProfile

Returns the ITV profile object.

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
    res, err := s.Itv.GetItvProfile(ctx, operations.GetItvProfileRequest{
        Lang: sdk.String("possimus"),
    }, operations.GetItvProfileSecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetItvProfile200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetItvRokuPlans

Gets available Roku plans.

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
    res, err := s.Itv.GetItvRokuPlans(ctx, operations.GetItvRokuPlansRequest{
        Lang: sdk.String("voluptates"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RokuPlans != nil {
        // handle response
    }
}
```

## GooglePaySubscription

Get the list of recommended items under the active profile.

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
    res, err := s.Itv.GooglePaySubscription(ctx, operations.GooglePaySubscriptionRequest{
        ItvGooglePaySubscriptionRequest: shared.ItvGooglePaySubscriptionRequest{
            PurchaseToken: "mollitia",
            SubscriptionItem: "laborum",
        },
        Lang: sdk.String("libero"),
    }, operations.GooglePaySubscriptionSecurity{
        ProfileAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Resubscribe

Resubscription for a user.

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
    res, err := s.Itv.Resubscribe(ctx, operations.ResubscribeRequest{
        Lang: sdk.String("ad"),
        PlanID: "deleniti",
        Platform: "enim",
    }, operations.ResubscribeSecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Resubscribe200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdatePaymentIntentStrong

Change payment method details.

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
    res, err := s.Itv.UpdatePaymentIntentStrong(ctx, operations.UpdatePaymentIntentStrongRequest{
        ItvUpdateIntentStrongRequest: shared.ItvUpdateIntentStrongRequest{
            PaymentMethodFromToken: sdk.String("vitae"),
            PaymentMethodID: sdk.String("repellendus"),
            ProfileToken: "ex",
        },
        Lang: sdk.String("quo"),
        Platform: "ex",
    }, operations.UpdatePaymentIntentStrongSecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ItvUpdateIntentStrongResponse != nil {
        // handle response
    }
}
```

## UpdatePaymentMethodStrong

Change payment method details.

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
    res, err := s.Itv.UpdatePaymentMethodStrong(ctx, operations.UpdatePaymentMethodStrongRequest{
        ItvUpdatePaymentStrongRequest: shared.ItvUpdatePaymentStrongRequest{
            PaymentMethodFromToken: sdk.String("ut"),
            PaymentMethodID: sdk.String("ad"),
            ProfileToken: "expedita",
        },
        Lang: sdk.String("voluptatem"),
        Platform: "molestias",
    }, operations.UpdatePaymentMethodStrongSecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateProfile

Update ITV profile.

The expected token scope is Settings.


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
    res, err := s.Itv.UpdateProfile(ctx, operations.UpdateProfileRequest{
        ItvUpdateProfileRequest: shared.ItvUpdateProfileRequest{
            DateOfBirth: sdk.String("cum"),
            Email: sdk.String("Bernhard.Lemke@yahoo.com"),
            FirstName: sdk.String("Mazie"),
            LastName: sdk.String("O'Reilly"),
            Postcode: sdk.String("09816-8800"),
            ProfileToken: "deleniti",
            Title: sdk.String("Dr."),
        },
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumCd,
            shared.FeatureFlagsEnumRpt,
        },
        Lang: sdk.String("minus"),
    }, operations.UpdateProfileSecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpgradePlan

Upgrades the plan for the current user.

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
    res, err := s.Itv.UpgradePlan(ctx, operations.UpgradePlanRequest{
        ItvUpgradePlanRequest: shared.ItvUpgradePlanRequest{
            PlanID: "nemo",
        },
        Lang: sdk.String("asperiores"),
        Platform: "ratione",
    }, operations.UpgradePlanSecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
