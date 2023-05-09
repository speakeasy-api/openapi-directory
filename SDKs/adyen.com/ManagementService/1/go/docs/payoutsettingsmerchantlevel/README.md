# PayoutSettingsMerchantLevel

### Available Operations

* [DeleteMerchantsMerchantIDPayoutSettingsPayoutSettingsID](#deletemerchantsmerchantidpayoutsettingspayoutsettingsid) - Delete a payout setting
* [GetMerchantsMerchantIDPayoutSettings](#getmerchantsmerchantidpayoutsettings) - Get a list of payout settings
* [GetMerchantsMerchantIDPayoutSettingsPayoutSettingsID](#getmerchantsmerchantidpayoutsettingspayoutsettingsid) - Get a payout setting
* [PatchMerchantsMerchantIDPayoutSettingsPayoutSettingsID](#patchmerchantsmerchantidpayoutsettingspayoutsettingsid) - Update a payout setting
* [PostMerchantsMerchantIDPayoutSettings](#postmerchantsmerchantidpayoutsettings) - Add a payout setting

## DeleteMerchantsMerchantIDPayoutSettingsPayoutSettingsID

Deletes the payout setting identified in the path.

Use this endpoint if your integration requires it, such as Adyen for Platforms Manage. Your Adyen contact will set up your access.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API—Payout account settings read and write

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
    res, err := s.PayoutSettingsMerchantLevel.DeleteMerchantsMerchantIDPayoutSettingsPayoutSettingsID(ctx, operations.DeleteMerchantsMerchantIDPayoutSettingsPayoutSettingsIDRequest{
        MerchantID: "cum",
        PayoutSettingsID: "voluptate",
    }, operations.DeleteMerchantsMerchantIDPayoutSettingsPayoutSettingsIDSecurity{
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

## GetMerchantsMerchantIDPayoutSettings

Returns the list of payout settings for the merchant account identified in the path.

Use this endpoint if your integration requires it, such as Adyen for Platforms Manage. Your Adyen contact will set up your access.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Payout account settings read

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
    res, err := s.PayoutSettingsMerchantLevel.GetMerchantsMerchantIDPayoutSettings(ctx, operations.GetMerchantsMerchantIDPayoutSettingsRequest{
        MerchantID: "dignissimos",
    }, operations.GetMerchantsMerchantIDPayoutSettingsSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PayoutSettingsResponse != nil {
        // handle response
    }
}
```

## GetMerchantsMerchantIDPayoutSettingsPayoutSettingsID

Returns the payout setting identified in the path.

Use this endpoint if your integration requires it, such as Adyen for Platforms Manage. Your Adyen contact will set up your access.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Payout account settings read

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
    res, err := s.PayoutSettingsMerchantLevel.GetMerchantsMerchantIDPayoutSettingsPayoutSettingsID(ctx, operations.GetMerchantsMerchantIDPayoutSettingsPayoutSettingsIDRequest{
        MerchantID: "reiciendis",
        PayoutSettingsID: "amet",
    }, operations.GetMerchantsMerchantIDPayoutSettingsPayoutSettingsIDSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PayoutSettings != nil {
        // handle response
    }
}
```

## PatchMerchantsMerchantIDPayoutSettingsPayoutSettingsID

Updates the payout setting identified in the path. You can enable or disable the payout setting.

Use this endpoint if your integration requires it, such as Adyen for Platforms Manage. Your Adyen contact will set up your access.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API—Payout account settings read and write

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
    res, err := s.PayoutSettingsMerchantLevel.PatchMerchantsMerchantIDPayoutSettingsPayoutSettingsID(ctx, operations.PatchMerchantsMerchantIDPayoutSettingsPayoutSettingsIDRequest{
        UpdatePayoutSettingsRequest: &shared.UpdatePayoutSettingsRequest{
            Enabled: sdk.Bool(false),
        },
        MerchantID: "dolorum",
        PayoutSettingsID: "numquam",
    }, operations.PatchMerchantsMerchantIDPayoutSettingsPayoutSettingsIDSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PayoutSettings != nil {
        // handle response
    }
}
```

## PostMerchantsMerchantIDPayoutSettings

Sends a request to add a payout setting for the merchant account specified in the path. A payout setting links the merchant account to the [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments) that contains the details of the payout bank account. Adyen verifies the bank account before allowing and enabling the payout setting.

If you're accepting payments in multiple currencies, you may add multiple payout settings for the merchant account.

Use this endpoint if your integration requires it, such as Adyen for Platforms Manage. Your Adyen contact will set up your access.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API—Payout account settings read and write

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
    res, err := s.PayoutSettingsMerchantLevel.PostMerchantsMerchantIDPayoutSettings(ctx, operations.PostMerchantsMerchantIDPayoutSettingsRequest{
        PayoutSettingsRequest: &shared.PayoutSettingsRequest{
            Enabled: sdk.Bool(false),
            EnabledFromDate: sdk.String("veritatis"),
            TransferInstrumentID: "ipsa",
        },
        MerchantID: "ipsa",
    }, operations.PostMerchantsMerchantIDPayoutSettingsSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PayoutSettings != nil {
        // handle response
    }
}
```
