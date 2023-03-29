# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/adyen.com/ManagementService/1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.GetCompaniesCompanyIDAPICredentialsRequest{
        Security: operations.GetCompaniesCompanyIDAPICredentialsSecurity{
            APIKeyAuth: &shared.SchemeAPIKeyAuth{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        PathParams: operations.GetCompaniesCompanyIDAPICredentialsPathParams{
            CompanyID: "unde",
        },
        QueryParams: operations.GetCompaniesCompanyIDAPICredentialsQueryParams{
            PageNumber: 592845,
            PageSize: 715190,
        },
    }

    ctx := context.Background()
    res, err := s.APICredentialsCompanyLevel.GetCompaniesCompanyIDAPICredentials(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCompanyAPICredentialsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### APICredentialsCompanyLevel

* `GetCompaniesCompanyIDAPICredentials` - Get a list of API credentials
* `GetCompaniesCompanyIDAPICredentialsAPICredentialID` - Get an API credential
* `PatchCompaniesCompanyIDAPICredentialsAPICredentialID` - Update an API credential.
* `PostCompaniesCompanyIDAPICredentials` - Create an API credential.

### APICredentialsMerchantLevel

* `GetMerchantsMerchantIDAPICredentials` - Get a list of API credentials
* `GetMerchantsMerchantIDAPICredentialsAPICredentialID` - Get an API credential
* `PatchMerchantsMerchantIDAPICredentialsAPICredentialID` - Update an API credential
* `PostMerchantsMerchantIDAPICredentials` - Create an API credential

### APIKeyCompanyLevel

* `PostCompaniesCompanyIDAPICredentialsAPICredentialIDGenerateAPIKey` - Generate new API key

### APIKeyMerchantLevel

* `PostMerchantsMerchantIDAPICredentialsAPICredentialIDGenerateAPIKey` - Generate new API key

### AccountCompanyLevel

* `GetCompanies` - Get a list of company accounts
* `GetCompaniesCompanyID` - Get a company account
* `GetCompaniesCompanyIDMerchants` - Get a list of merchant accounts

### AccountMerchantLevel

* `GetMerchants` - Get a list of merchant accounts
* `GetMerchantsMerchantID` - Get a merchant account
* `PostMerchants` - Create a merchant account
* `PostMerchantsMerchantIDActivate` - Request to activate a merchant account

### AccountStoreLevel

* `GetMerchantsMerchantIDStores` - Get a list of stores
* `GetMerchantsMerchantIDStoresStoreID` - Get a store
* `GetStores` - Get a list of stores
* `GetStoresStoreID` - Get a store
* `PatchMerchantsMerchantIDStoresStoreID` - Update a store
* `PatchStoresStoreID` - Update a store
* `PostMerchantsMerchantIDStores` - Create a store
* `PostStores` - Create a store

### AllowedOriginsCompanyLevel

* `DeleteCompaniesCompanyIDAPICredentialsAPICredentialIDAllowedOriginsOriginID` - Delete an allowed origin
* `GetCompaniesCompanyIDAPICredentialsAPICredentialIDAllowedOrigins` - Get a list of allowed origins
* `GetCompaniesCompanyIDAPICredentialsAPICredentialIDAllowedOriginsOriginID` - Get an allowed origin
* `PostCompaniesCompanyIDAPICredentialsAPICredentialIDAllowedOrigins` - Create an allowed origin

### AllowedOriginsMerchantLevel

* `DeleteMerchantsMerchantIDAPICredentialsAPICredentialIDAllowedOriginsOriginID` - Delete an allowed origin
* `GetMerchantsMerchantIDAPICredentialsAPICredentialIDAllowedOrigins` - Get a list of allowed origins
* `GetMerchantsMerchantIDAPICredentialsAPICredentialIDAllowedOriginsOriginID` - Get an allowed origin
* `PostMerchantsMerchantIDAPICredentialsAPICredentialIDAllowedOrigins` - Create an allowed origin

### ClientKeyCompanyLevel

* `PostCompaniesCompanyIDAPICredentialsAPICredentialIDGenerateClientKey` - Generate new client key

### ClientKeyMerchantLevel

* `PostMerchantsMerchantIDAPICredentialsAPICredentialIDGenerateClientKey` - Generate new client key

### MyAPICredential

* `DeleteMeAllowedOriginsOriginID` - Remove allowed origin
* `GetMe` - Get API credential details
* `GetMeAllowedOrigins` - Get allowed origins
* `GetMeAllowedOriginsOriginID` - Get allowed origin details
* `PostMeAllowedOrigins` - Add allowed origin

### PaymentMethodsMerchantLevel

* `GetMerchantsMerchantIDPaymentMethodSettings` - Get all payment methods
* `GetMerchantsMerchantIDPaymentMethodSettingsPaymentMethodID` - Get payment method details
* `GetMerchantsMerchantIDPaymentMethodSettingsPaymentMethodIDGetApplePayDomains` - Get Apple Pay domains
* `PatchMerchantsMerchantIDPaymentMethodSettingsPaymentMethodID` - Update a payment method
* `PostMerchantsMerchantIDPaymentMethodSettings` - Request a payment method
* `PostMerchantsMerchantIDPaymentMethodSettingsPaymentMethodIDAddApplePayDomains` - Add an Apple Pay domain

### PayoutSettingsMerchantLevel

* `DeleteMerchantsMerchantIDPayoutSettingsPayoutSettingsID` - Delete a payout setting
* `GetMerchantsMerchantIDPayoutSettings` - Get a list of payout settings
* `GetMerchantsMerchantIDPayoutSettingsPayoutSettingsID` - Get a payout setting
* `PatchMerchantsMerchantIDPayoutSettingsPayoutSettingsID` - Update a payout setting
* `PostMerchantsMerchantIDPayoutSettings` - Add a payout setting

### TerminalActionsCompanyLevel

* `GetCompaniesCompanyIDAndroidApps` - Get a list of Android apps
* `GetCompaniesCompanyIDAndroidCertificates` - Get a list of Android certificates
* `GetCompaniesCompanyIDTerminalActions` - Get a list of terminal actions
* `GetCompaniesCompanyIDTerminalActionsActionID` - Get terminal action

### TerminalActionsTerminalLevel

* `PostTerminalsScheduleActions` - Create a terminal action

### TerminalOrdersCompanyLevel

* `GetCompaniesCompanyIDBillingEntities` - Get a list of billing entities
* `GetCompaniesCompanyIDShippingLocations` - Get a list of shipping locations
* `GetCompaniesCompanyIDTerminalModels` - Get a list of terminal models
* `GetCompaniesCompanyIDTerminalOrders` - Get a list of orders
* `GetCompaniesCompanyIDTerminalOrdersOrderID` - Get an order
* `GetCompaniesCompanyIDTerminalProducts` - Get a list of terminal products
* `PatchCompaniesCompanyIDTerminalOrdersOrderID` - Update an order
* `PostCompaniesCompanyIDShippingLocations` - Create a shipping location
* `PostCompaniesCompanyIDTerminalOrders` - Create an order
* `PostCompaniesCompanyIDTerminalOrdersOrderIDCancel` - Cancel an order

### TerminalOrdersMerchantLevel

* `GetMerchantsMerchantIDBillingEntities` - Get a list of billing entities
* `GetMerchantsMerchantIDShippingLocations` - Get a list of shipping locations
* `GetMerchantsMerchantIDTerminalModels` - Get a list of terminal models
* `GetMerchantsMerchantIDTerminalOrders` - Get a list of orders
* `GetMerchantsMerchantIDTerminalOrdersOrderID` - Get an order
* `GetMerchantsMerchantIDTerminalProducts` - Get a list of terminal products
* `PatchMerchantsMerchantIDTerminalOrdersOrderID` - Update an order
* `PostMerchantsMerchantIDShippingLocations` - Create a shipping location
* `PostMerchantsMerchantIDTerminalOrders` - Create an order
* `PostMerchantsMerchantIDTerminalOrdersOrderIDCancel` - Cancel an order

### TerminalSettingsCompanyLevel

* `GetCompaniesCompanyIDTerminalLogos` - Get the terminal logo
* `GetCompaniesCompanyIDTerminalSettings` - Get terminal settings
* `PatchCompaniesCompanyIDTerminalLogos` - Update the terminal logo
* `PatchCompaniesCompanyIDTerminalSettings` - Update terminal settings

### TerminalSettingsMerchantLevel

* `GetMerchantsMerchantIDTerminalLogos` - Get the terminal logo
* `GetMerchantsMerchantIDTerminalSettings` - Get terminal settings
* `PatchMerchantsMerchantIDTerminalLogos` - Update the terminal logo
* `PatchMerchantsMerchantIDTerminalSettings` - Update terminal settings

### TerminalSettingsStoreLevel

* `GetMerchantsMerchantIDStoresReferenceTerminalLogos` - Get the terminal logo
* `GetMerchantsMerchantIDStoresReferenceTerminalSettings` - Get terminal settings
* `GetStoresStoreIDTerminalLogos` - Get the terminal logo
* `GetStoresStoreIDTerminalSettings` - Get terminal settings
* `PatchMerchantsMerchantIDStoresReferenceTerminalLogos` - Update the terminal logo
* `PatchMerchantsMerchantIDStoresReferenceTerminalSettings` - Update terminal settings
* `PatchStoresStoreIDTerminalLogos` - Update the terminal logo
* `PatchStoresStoreIDTerminalSettings` - Update terminal settings

### TerminalSettingsTerminalLevel

* `GetTerminalsTerminalIDTerminalLogos` - Get the terminal logo
* `GetTerminalsTerminalIDTerminalSettings` - Get terminal settings
* `PatchTerminalsTerminalIDTerminalLogos` - Update the logo
* `PatchTerminalsTerminalIDTerminalSettings` - Update terminal settings

### TerminalsTerminalLevel

* `GetTerminals` - Get a list of terminals

### UsersCompanyLevel

* `GetCompaniesCompanyIDUsers` - Get a list of users
* `GetCompaniesCompanyIDUsersUserID` - Get user details
* `PatchCompaniesCompanyIDUsersUserID` - Update user details
* `PostCompaniesCompanyIDUsers` - Create a new user

### UsersMerchantLevel

* `GetMerchantsMerchantIDUsers` - Get a list of users
* `GetMerchantsMerchantIDUsersUserID` - Get user details
* `PatchMerchantsMerchantIDUsersUserID` - Update a user
* `PostMerchantsMerchantIDUsers` - Create a new user

### WebhooksCompanyLevel

* `DeleteCompaniesCompanyIDWebhooksWebhookID` - Remove a webhook
* `GetCompaniesCompanyIDWebhooks` - List all webhooks
* `GetCompaniesCompanyIDWebhooksWebhookID` - Get a webhook
* `PatchCompaniesCompanyIDWebhooksWebhookID` - Update a webhook
* `PostCompaniesCompanyIDWebhooks` - Set up a webhook
* `PostCompaniesCompanyIDWebhooksWebhookIDGenerateHmac` - Generate an HMAC key
* `PostCompaniesCompanyIDWebhooksWebhookIDTest` - Test a webhook

### WebhooksMerchantLevel

* `DeleteMerchantsMerchantIDWebhooksWebhookID` - Remove a webhook
* `GetMerchantsMerchantIDWebhooks` - List all webhooks
* `GetMerchantsMerchantIDWebhooksWebhookID` - Get a webhook
* `PatchMerchantsMerchantIDWebhooksWebhookID` - Update a webhook
* `PostMerchantsMerchantIDWebhooks` - Set up a webhook
* `PostMerchantsMerchantIDWebhooksWebhookIDGenerateHmac` - Generate an HMAC key
* `PostMerchantsMerchantIDWebhooksWebhookIDTest` - Test a webhook
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
