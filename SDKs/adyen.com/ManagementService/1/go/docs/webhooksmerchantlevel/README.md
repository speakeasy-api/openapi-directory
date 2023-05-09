# WebhooksMerchantLevel

### Available Operations

* [DeleteMerchantsMerchantIDWebhooksWebhookID](#deletemerchantsmerchantidwebhookswebhookid) - Remove a webhook
* [GetMerchantsMerchantIDWebhooks](#getmerchantsmerchantidwebhooks) - List all webhooks
* [GetMerchantsMerchantIDWebhooksWebhookID](#getmerchantsmerchantidwebhookswebhookid) - Get a webhook
* [PatchMerchantsMerchantIDWebhooksWebhookID](#patchmerchantsmerchantidwebhookswebhookid) - Update a webhook
* [PostMerchantsMerchantIDWebhooks](#postmerchantsmerchantidwebhooks) - Set up a webhook
* [PostMerchantsMerchantIDWebhooksWebhookIDGenerateHmac](#postmerchantsmerchantidwebhookswebhookidgeneratehmac) - Generate an HMAC key
* [PostMerchantsMerchantIDWebhooksWebhookIDTest](#postmerchantsmerchantidwebhookswebhookidtest) - Test a webhook

## DeleteMerchantsMerchantIDWebhooksWebhookID

Remove the configuration for the webhook identified in the path.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Webhooks read and write

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
    res, err := s.WebhooksMerchantLevel.DeleteMerchantsMerchantIDWebhooksWebhookID(ctx, operations.DeleteMerchantsMerchantIDWebhooksWebhookIDRequest{
        MerchantID: "vitae",
        WebhookID: "voluptatibus",
    }, operations.DeleteMerchantsMerchantIDWebhooksWebhookIDSecurity{
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

## GetMerchantsMerchantIDWebhooks

Lists all webhook configurations for the merchant account.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Webhooks read
* Management API—Webhooks read and write

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
    res, err := s.WebhooksMerchantLevel.GetMerchantsMerchantIDWebhooks(ctx, operations.GetMerchantsMerchantIDWebhooksRequest{
        MerchantID: "doloremque",
        PageNumber: sdk.Int(149498),
        PageSize: sdk.Int(227741),
    }, operations.GetMerchantsMerchantIDWebhooksSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWebhooksResponse != nil {
        // handle response
    }
}
```

## GetMerchantsMerchantIDWebhooksWebhookID

Returns the configuration for the webhook identified in the path.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Webhooks read
* Management API—Webhooks read and write

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
    res, err := s.WebhooksMerchantLevel.GetMerchantsMerchantIDWebhooksWebhookID(ctx, operations.GetMerchantsMerchantIDWebhooksWebhookIDRequest{
        MerchantID: "rerum",
        WebhookID: "in",
    }, operations.GetMerchantsMerchantIDWebhooksWebhookIDSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Webhook != nil {
        // handle response
    }
}
```

## PatchMerchantsMerchantIDWebhooksWebhookID

Make changes to the configuration of the webhook identified in the path. The request contains the new values you want to have in the webhook configuration. The response contains the full configuration for the webhook, which includes the new values from the request.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Webhooks read and write

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
    res, err := s.WebhooksMerchantLevel.PatchMerchantsMerchantIDWebhooksWebhookID(ctx, operations.PatchMerchantsMerchantIDWebhooksWebhookIDRequest{
        UpdateMerchantWebhookRequest: &shared.UpdateMerchantWebhookRequest{
            AcceptsExpiredCertificate: sdk.Bool(false),
            AcceptsSelfSignedCertificate: sdk.Bool(false),
            AcceptsUntrustedRootCertificate: sdk.Bool(false),
            Active: sdk.Bool(false),
            AdditionalSettings: &shared.AdditionalSettings{
                IncludeEventCodes: []string{
                    "temporibus",
                    "ratione",
                },
                Properties: map[string]bool{
                    "nisi": false,
                },
            },
            CommunicationFormat: shared.UpdateMerchantWebhookRequestCommunicationFormatEnumJSON.ToPointer(),
            Description: sdk.String("reiciendis"),
            NetworkType: shared.UpdateMerchantWebhookRequestNetworkTypeEnumPublic.ToPointer(),
            Password: sdk.String("vitae"),
            PopulateSoapActionHeader: sdk.Bool(false),
            SslVersion: shared.UpdateMerchantWebhookRequestSslVersionEnumTlSv11.ToPointer(),
            URL: sdk.String("accusantium"),
            Username: sdk.String("Pierre_Schinner"),
        },
        MerchantID: "maiores",
        WebhookID: "odio",
    }, operations.PatchMerchantsMerchantIDWebhooksWebhookIDSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Webhook != nil {
        // handle response
    }
}
```

## PostMerchantsMerchantIDWebhooks

Subscribe to receive webhook notifications about events related to your merchant account. You can add basic authentication to make sure the data is secure.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Webhooks read and write

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
    res, err := s.WebhooksMerchantLevel.PostMerchantsMerchantIDWebhooks(ctx, operations.PostMerchantsMerchantIDWebhooksRequest{
        CreateMerchantWebhookRequest: &shared.CreateMerchantWebhookRequest{
            AcceptsExpiredCertificate: sdk.Bool(false),
            AcceptsSelfSignedCertificate: sdk.Bool(false),
            AcceptsUntrustedRootCertificate: sdk.Bool(false),
            Active: false,
            AdditionalSettings: &shared.AdditionalSettings{
                IncludeEventCodes: []string{
                    "sapiente",
                    "aperiam",
                    "similique",
                },
                Properties: map[string]bool{
                    "provident": false,
                },
            },
            CommunicationFormat: shared.CreateMerchantWebhookRequestCommunicationFormatEnumJSON,
            Description: sdk.String("repellendus"),
            NetworkType: shared.CreateMerchantWebhookRequestNetworkTypeEnumPublic.ToPointer(),
            Password: sdk.String("alias"),
            PopulateSoapActionHeader: sdk.Bool(false),
            SslVersion: shared.CreateMerchantWebhookRequestSslVersionEnumTlSv12.ToPointer(),
            Type: "sequi",
            URL: "commodi",
            Username: sdk.String("Edmund_Quitzon"),
        },
        MerchantID: "sunt",
    }, operations.PostMerchantsMerchantIDWebhooksSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Webhook != nil {
        // handle response
    }
}
```

## PostMerchantsMerchantIDWebhooksWebhookIDGenerateHmac

Returns an [HMAC key](https://en.wikipedia.org/wiki/HMAC) for the webhook identified in the path. This key allows you to check the integrity and the origin of the notifications you receive.By creating an HMAC key, you start receiving [HMAC-signed notifications](https://docs.adyen.com/development-resources/webhooks/verify-hmac-signatures#enable-hmac-signatures) from Adyen. Find out more about how to [verify HMAC signatures](https://docs.adyen.com/development-resources/webhooks/verify-hmac-signatures).

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Webhooks read and write

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
    res, err := s.WebhooksMerchantLevel.PostMerchantsMerchantIDWebhooksWebhookIDGenerateHmac(ctx, operations.PostMerchantsMerchantIDWebhooksWebhookIDGenerateHmacRequest{
        MerchantID: "enim",
        WebhookID: "nulla",
    }, operations.PostMerchantsMerchantIDWebhooksWebhookIDGenerateHmacSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GenerateHmacKeyResponse != nil {
        // handle response
    }
}
```

## PostMerchantsMerchantIDWebhooksWebhookIDTest

Sends sample notifications to test if the webhook is set up correctly.

We send four test notifications for each event code you choose. They cover success and failure scenarios for the hard-coded currencies EUR and GBP, regardless of the currencies configured in the merchant accounts. For custom notifications, we only send the specified custom notification.

The response describes the result of the test. The `status` field tells you if the test was successful or not. You can use the other fields to troubleshoot unsuccessful tests.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Webhooks read and write

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
    res, err := s.WebhooksMerchantLevel.PostMerchantsMerchantIDWebhooksWebhookIDTest(ctx, operations.PostMerchantsMerchantIDWebhooksWebhookIDTestRequest{
        TestWebhookRequest: &shared.TestWebhookRequest{
            Notification: &shared.CustomNotification{
                Amount: &shared.Amount{
                    Currency: "maiores",
                    Value: 715622,
                },
                EventCode: sdk.String("mollitia"),
                EventDate: types.MustTimeFromString("2020-05-11T07:22:15.278Z"),
                MerchantReference: sdk.String("et"),
                PaymentMethod: sdk.String("quas"),
                Reason: sdk.String("blanditiis"),
                Success: sdk.Bool(false),
            },
            Types: []string{
                "dicta",
                "impedit",
                "tempora",
            },
        },
        MerchantID: "eveniet",
        WebhookID: "repudiandae",
    }, operations.PostMerchantsMerchantIDWebhooksWebhookIDTestSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestWebhookResponse != nil {
        // handle response
    }
}
```
