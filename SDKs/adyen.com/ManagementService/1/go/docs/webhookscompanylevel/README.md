# WebhooksCompanyLevel

### Available Operations

* [DeleteCompaniesCompanyIDWebhooksWebhookID](#deletecompaniescompanyidwebhookswebhookid) - Remove a webhook
* [GetCompaniesCompanyIDWebhooks](#getcompaniescompanyidwebhooks) - List all webhooks
* [GetCompaniesCompanyIDWebhooksWebhookID](#getcompaniescompanyidwebhookswebhookid) - Get a webhook
* [PatchCompaniesCompanyIDWebhooksWebhookID](#patchcompaniescompanyidwebhookswebhookid) - Update a webhook
* [PostCompaniesCompanyIDWebhooks](#postcompaniescompanyidwebhooks) - Set up a webhook
* [PostCompaniesCompanyIDWebhooksWebhookIDGenerateHmac](#postcompaniescompanyidwebhookswebhookidgeneratehmac) - Generate an HMAC key
* [PostCompaniesCompanyIDWebhooksWebhookIDTest](#postcompaniescompanyidwebhookswebhookidtest) - Test a webhook

## DeleteCompaniesCompanyIDWebhooksWebhookID

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
    res, err := s.WebhooksCompanyLevel.DeleteCompaniesCompanyIDWebhooksWebhookID(ctx, operations.DeleteCompaniesCompanyIDWebhooksWebhookIDRequest{
        CompanyID: "esse",
        WebhookID: "debitis",
    }, operations.DeleteCompaniesCompanyIDWebhooksWebhookIDSecurity{
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

## GetCompaniesCompanyIDWebhooks

Lists all webhook configurations for the company account.

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
    res, err := s.WebhooksCompanyLevel.GetCompaniesCompanyIDWebhooks(ctx, operations.GetCompaniesCompanyIDWebhooksRequest{
        CompanyID: "facere",
        PageNumber: sdk.Int(789016),
        PageSize: sdk.Int(769047),
    }, operations.GetCompaniesCompanyIDWebhooksSecurity{
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

## GetCompaniesCompanyIDWebhooksWebhookID

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
    res, err := s.WebhooksCompanyLevel.GetCompaniesCompanyIDWebhooksWebhookID(ctx, operations.GetCompaniesCompanyIDWebhooksWebhookIDRequest{
        CompanyID: "aliquam",
        WebhookID: "dolorum",
    }, operations.GetCompaniesCompanyIDWebhooksWebhookIDSecurity{
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

## PatchCompaniesCompanyIDWebhooksWebhookID

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
    res, err := s.WebhooksCompanyLevel.PatchCompaniesCompanyIDWebhooksWebhookID(ctx, operations.PatchCompaniesCompanyIDWebhooksWebhookIDRequest{
        UpdateCompanyWebhookRequest: &shared.UpdateCompanyWebhookRequest{
            AcceptsExpiredCertificate: sdk.Bool(false),
            AcceptsSelfSignedCertificate: sdk.Bool(false),
            AcceptsUntrustedRootCertificate: sdk.Bool(false),
            Active: sdk.Bool(false),
            AdditionalSettings: &shared.AdditionalSettings{
                IncludeEventCodes: []string{
                    "ad",
                    "reiciendis",
                    "sequi",
                },
                Properties: map[string]bool{
                    "laborum": false,
                    "nobis": false,
                    "quibusdam": false,
                    "omnis": false,
                },
            },
            CommunicationFormat: shared.UpdateCompanyWebhookRequestCommunicationFormatEnumHTTP.ToPointer(),
            Description: sdk.String("ipsam"),
            FilterMerchantAccountType: shared.UpdateCompanyWebhookRequestFilterMerchantAccountTypeEnumExcludeAccounts.ToPointer(),
            FilterMerchantAccounts: []string{
                "reprehenderit",
                "quia",
                "necessitatibus",
            },
            NetworkType: shared.UpdateCompanyWebhookRequestNetworkTypeEnumLocal.ToPointer(),
            Password: sdk.String("ad"),
            PopulateSoapActionHeader: sdk.Bool(false),
            SslVersion: shared.UpdateCompanyWebhookRequestSslVersionEnumTLS.ToPointer(),
            URL: sdk.String("molestiae"),
            Username: sdk.String("Cara14"),
        },
        CompanyID: "iusto",
        WebhookID: "expedita",
    }, operations.PatchCompaniesCompanyIDWebhooksWebhookIDSecurity{
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

## PostCompaniesCompanyIDWebhooks

Subscribe to receive webhook notifications about events related to your company account. You can add basic authentication to make sure the data is secure.

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
    res, err := s.WebhooksCompanyLevel.PostCompaniesCompanyIDWebhooks(ctx, operations.PostCompaniesCompanyIDWebhooksRequest{
        CreateCompanyWebhookRequest: &shared.CreateCompanyWebhookRequest{
            AcceptsExpiredCertificate: sdk.Bool(false),
            AcceptsSelfSignedCertificate: sdk.Bool(false),
            AcceptsUntrustedRootCertificate: sdk.Bool(false),
            Active: false,
            AdditionalSettings: &shared.AdditionalSettings{
                IncludeEventCodes: []string{
                    "repellendus",
                },
                Properties: map[string]bool{
                    "ipsa": false,
                },
            },
            CommunicationFormat: shared.CreateCompanyWebhookRequestCommunicationFormatEnumJSON,
            Description: sdk.String("dolore"),
            FilterMerchantAccountType: shared.CreateCompanyWebhookRequestFilterMerchantAccountTypeEnumExcludeAccounts,
            FilterMerchantAccounts: []string{
                "distinctio",
            },
            NetworkType: shared.CreateCompanyWebhookRequestNetworkTypeEnumPublic.ToPointer(),
            Password: sdk.String("quam"),
            PopulateSoapActionHeader: sdk.Bool(false),
            SslVersion: shared.CreateCompanyWebhookRequestSslVersionEnumTlSv11.ToPointer(),
            Type: "aliquam",
            URL: "delectus",
            Username: sdk.String("Lottie_Lemke"),
        },
        CompanyID: "voluptatibus",
    }, operations.PostCompaniesCompanyIDWebhooksSecurity{
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

## PostCompaniesCompanyIDWebhooksWebhookIDGenerateHmac

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
    res, err := s.WebhooksCompanyLevel.PostCompaniesCompanyIDWebhooksWebhookIDGenerateHmac(ctx, operations.PostCompaniesCompanyIDWebhooksWebhookIDGenerateHmacRequest{
        CompanyID: "voluptas",
        WebhookID: "non",
    }, operations.PostCompaniesCompanyIDWebhooksWebhookIDGenerateHmacSecurity{
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

## PostCompaniesCompanyIDWebhooksWebhookIDTest

Sends sample notifications to test if the webhook is set up correctly.

We send sample notifications for maximum 20 of the merchant accounts that the webhook is configured for. If the webhook is configured for more than 20 merchant accounts, use the `merchantIds` array to specify a subset of the merchant accounts for which to send test notifications.

We send four test notifications for each event code you choose. They cover success and failure scenarios for the hard-coded currencies EUR and GBP, regardless of the currencies configured in the merchant accounts. For custom notifications, we only send the specified custom notification.

The response describes the result of the test. The `status` field tells you if the test was successful or not. You can use the other response fields to troubleshoot unsuccessful tests.

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
    res, err := s.WebhooksCompanyLevel.PostCompaniesCompanyIDWebhooksWebhookIDTest(ctx, operations.PostCompaniesCompanyIDWebhooksWebhookIDTestRequest{
        TestCompanyWebhookRequest: &shared.TestCompanyWebhookRequest{
            MerchantIds: []string{
                "laborum",
                "voluptas",
            },
            Notification: &shared.CustomNotification{
                Amount: &shared.Amount{
                    Currency: "doloribus",
                    Value: 657862,
                },
                EventCode: sdk.String("recusandae"),
                EventDate: types.MustTimeFromString("2022-09-30T19:30:44.770Z"),
                MerchantReference: sdk.String("necessitatibus"),
                PaymentMethod: sdk.String("distinctio"),
                Reason: sdk.String("maiores"),
                Success: sdk.Bool(false),
            },
            Types: []string{
                "voluptatem",
                "optio",
            },
        },
        CompanyID: "sequi",
        WebhookID: "sunt",
    }, operations.PostCompaniesCompanyIDWebhooksWebhookIDTestSecurity{
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
