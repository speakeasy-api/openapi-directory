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
    res, err := s.APICredentialsCompanyLevel.GetCompaniesCompanyIDAPICredentials(ctx, operations.GetCompaniesCompanyIDAPICredentialsRequest{
        CompanyID: "corrupti",
        PageNumber: sdk.Int(592845),
        PageSize: sdk.Int(715190),
    }, operations.GetCompaniesCompanyIDAPICredentialsSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
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
## Available Resources and Operations


### [APICredentialsCompanyLevel](docs/apicredentialscompanylevel/README.md)

* [GetCompaniesCompanyIDAPICredentials](docs/apicredentialscompanylevel/README.md#getcompaniescompanyidapicredentials) - Get a list of API credentials
* [GetCompaniesCompanyIDAPICredentialsAPICredentialID](docs/apicredentialscompanylevel/README.md#getcompaniescompanyidapicredentialsapicredentialid) - Get an API credential
* [PatchCompaniesCompanyIDAPICredentialsAPICredentialID](docs/apicredentialscompanylevel/README.md#patchcompaniescompanyidapicredentialsapicredentialid) - Update an API credential.
* [PostCompaniesCompanyIDAPICredentials](docs/apicredentialscompanylevel/README.md#postcompaniescompanyidapicredentials) - Create an API credential.

### [APICredentialsMerchantLevel](docs/apicredentialsmerchantlevel/README.md)

* [GetMerchantsMerchantIDAPICredentials](docs/apicredentialsmerchantlevel/README.md#getmerchantsmerchantidapicredentials) - Get a list of API credentials
* [GetMerchantsMerchantIDAPICredentialsAPICredentialID](docs/apicredentialsmerchantlevel/README.md#getmerchantsmerchantidapicredentialsapicredentialid) - Get an API credential
* [PatchMerchantsMerchantIDAPICredentialsAPICredentialID](docs/apicredentialsmerchantlevel/README.md#patchmerchantsmerchantidapicredentialsapicredentialid) - Update an API credential
* [PostMerchantsMerchantIDAPICredentials](docs/apicredentialsmerchantlevel/README.md#postmerchantsmerchantidapicredentials) - Create an API credential

### [APIKeyCompanyLevel](docs/apikeycompanylevel/README.md)

* [PostCompaniesCompanyIDAPICredentialsAPICredentialIDGenerateAPIKey](docs/apikeycompanylevel/README.md#postcompaniescompanyidapicredentialsapicredentialidgenerateapikey) - Generate new API key

### [APIKeyMerchantLevel](docs/apikeymerchantlevel/README.md)

* [PostMerchantsMerchantIDAPICredentialsAPICredentialIDGenerateAPIKey](docs/apikeymerchantlevel/README.md#postmerchantsmerchantidapicredentialsapicredentialidgenerateapikey) - Generate new API key

### [AccountCompanyLevel](docs/accountcompanylevel/README.md)

* [GetCompanies](docs/accountcompanylevel/README.md#getcompanies) - Get a list of company accounts
* [GetCompaniesCompanyID](docs/accountcompanylevel/README.md#getcompaniescompanyid) - Get a company account
* [GetCompaniesCompanyIDMerchants](docs/accountcompanylevel/README.md#getcompaniescompanyidmerchants) - Get a list of merchant accounts

### [AccountMerchantLevel](docs/accountmerchantlevel/README.md)

* [GetMerchants](docs/accountmerchantlevel/README.md#getmerchants) - Get a list of merchant accounts
* [GetMerchantsMerchantID](docs/accountmerchantlevel/README.md#getmerchantsmerchantid) - Get a merchant account
* [PostMerchants](docs/accountmerchantlevel/README.md#postmerchants) - Create a merchant account
* [PostMerchantsMerchantIDActivate](docs/accountmerchantlevel/README.md#postmerchantsmerchantidactivate) - Request to activate a merchant account

### [AccountStoreLevel](docs/accountstorelevel/README.md)

* [GetMerchantsMerchantIDStores](docs/accountstorelevel/README.md#getmerchantsmerchantidstores) - Get a list of stores
* [GetMerchantsMerchantIDStoresStoreID](docs/accountstorelevel/README.md#getmerchantsmerchantidstoresstoreid) - Get a store
* [GetStores](docs/accountstorelevel/README.md#getstores) - Get a list of stores
* [GetStoresStoreID](docs/accountstorelevel/README.md#getstoresstoreid) - Get a store
* [PatchMerchantsMerchantIDStoresStoreID](docs/accountstorelevel/README.md#patchmerchantsmerchantidstoresstoreid) - Update a store
* [PatchStoresStoreID](docs/accountstorelevel/README.md#patchstoresstoreid) - Update a store
* [PostMerchantsMerchantIDStores](docs/accountstorelevel/README.md#postmerchantsmerchantidstores) - Create a store
* [PostStores](docs/accountstorelevel/README.md#poststores) - Create a store

### [AllowedOriginsCompanyLevel](docs/allowedoriginscompanylevel/README.md)

* [DeleteCompaniesCompanyIDAPICredentialsAPICredentialIDAllowedOriginsOriginID](docs/allowedoriginscompanylevel/README.md#deletecompaniescompanyidapicredentialsapicredentialidallowedoriginsoriginid) - Delete an allowed origin
* [GetCompaniesCompanyIDAPICredentialsAPICredentialIDAllowedOrigins](docs/allowedoriginscompanylevel/README.md#getcompaniescompanyidapicredentialsapicredentialidallowedorigins) - Get a list of allowed origins
* [GetCompaniesCompanyIDAPICredentialsAPICredentialIDAllowedOriginsOriginID](docs/allowedoriginscompanylevel/README.md#getcompaniescompanyidapicredentialsapicredentialidallowedoriginsoriginid) - Get an allowed origin
* [PostCompaniesCompanyIDAPICredentialsAPICredentialIDAllowedOrigins](docs/allowedoriginscompanylevel/README.md#postcompaniescompanyidapicredentialsapicredentialidallowedorigins) - Create an allowed origin

### [AllowedOriginsMerchantLevel](docs/allowedoriginsmerchantlevel/README.md)

* [DeleteMerchantsMerchantIDAPICredentialsAPICredentialIDAllowedOriginsOriginID](docs/allowedoriginsmerchantlevel/README.md#deletemerchantsmerchantidapicredentialsapicredentialidallowedoriginsoriginid) - Delete an allowed origin
* [GetMerchantsMerchantIDAPICredentialsAPICredentialIDAllowedOrigins](docs/allowedoriginsmerchantlevel/README.md#getmerchantsmerchantidapicredentialsapicredentialidallowedorigins) - Get a list of allowed origins
* [GetMerchantsMerchantIDAPICredentialsAPICredentialIDAllowedOriginsOriginID](docs/allowedoriginsmerchantlevel/README.md#getmerchantsmerchantidapicredentialsapicredentialidallowedoriginsoriginid) - Get an allowed origin
* [PostMerchantsMerchantIDAPICredentialsAPICredentialIDAllowedOrigins](docs/allowedoriginsmerchantlevel/README.md#postmerchantsmerchantidapicredentialsapicredentialidallowedorigins) - Create an allowed origin

### [ClientKeyCompanyLevel](docs/clientkeycompanylevel/README.md)

* [PostCompaniesCompanyIDAPICredentialsAPICredentialIDGenerateClientKey](docs/clientkeycompanylevel/README.md#postcompaniescompanyidapicredentialsapicredentialidgenerateclientkey) - Generate new client key

### [ClientKeyMerchantLevel](docs/clientkeymerchantlevel/README.md)

* [PostMerchantsMerchantIDAPICredentialsAPICredentialIDGenerateClientKey](docs/clientkeymerchantlevel/README.md#postmerchantsmerchantidapicredentialsapicredentialidgenerateclientkey) - Generate new client key

### [MyAPICredential](docs/myapicredential/README.md)

* [DeleteMeAllowedOriginsOriginID](docs/myapicredential/README.md#deletemeallowedoriginsoriginid) - Remove allowed origin
* [GetMe](docs/myapicredential/README.md#getme) - Get API credential details
* [GetMeAllowedOrigins](docs/myapicredential/README.md#getmeallowedorigins) - Get allowed origins
* [GetMeAllowedOriginsOriginID](docs/myapicredential/README.md#getmeallowedoriginsoriginid) - Get allowed origin details
* [PostMeAllowedOrigins](docs/myapicredential/README.md#postmeallowedorigins) - Add allowed origin

### [PaymentMethodsMerchantLevel](docs/paymentmethodsmerchantlevel/README.md)

* [GetMerchantsMerchantIDPaymentMethodSettings](docs/paymentmethodsmerchantlevel/README.md#getmerchantsmerchantidpaymentmethodsettings) - Get all payment methods
* [GetMerchantsMerchantIDPaymentMethodSettingsPaymentMethodID](docs/paymentmethodsmerchantlevel/README.md#getmerchantsmerchantidpaymentmethodsettingspaymentmethodid) - Get payment method details
* [GetMerchantsMerchantIDPaymentMethodSettingsPaymentMethodIDGetApplePayDomains](docs/paymentmethodsmerchantlevel/README.md#getmerchantsmerchantidpaymentmethodsettingspaymentmethodidgetapplepaydomains) - Get Apple Pay domains
* [PatchMerchantsMerchantIDPaymentMethodSettingsPaymentMethodID](docs/paymentmethodsmerchantlevel/README.md#patchmerchantsmerchantidpaymentmethodsettingspaymentmethodid) - Update a payment method
* [PostMerchantsMerchantIDPaymentMethodSettings](docs/paymentmethodsmerchantlevel/README.md#postmerchantsmerchantidpaymentmethodsettings) - Request a payment method
* [PostMerchantsMerchantIDPaymentMethodSettingsPaymentMethodIDAddApplePayDomains](docs/paymentmethodsmerchantlevel/README.md#postmerchantsmerchantidpaymentmethodsettingspaymentmethodidaddapplepaydomains) - Add an Apple Pay domain

### [PayoutSettingsMerchantLevel](docs/payoutsettingsmerchantlevel/README.md)

* [DeleteMerchantsMerchantIDPayoutSettingsPayoutSettingsID](docs/payoutsettingsmerchantlevel/README.md#deletemerchantsmerchantidpayoutsettingspayoutsettingsid) - Delete a payout setting
* [GetMerchantsMerchantIDPayoutSettings](docs/payoutsettingsmerchantlevel/README.md#getmerchantsmerchantidpayoutsettings) - Get a list of payout settings
* [GetMerchantsMerchantIDPayoutSettingsPayoutSettingsID](docs/payoutsettingsmerchantlevel/README.md#getmerchantsmerchantidpayoutsettingspayoutsettingsid) - Get a payout setting
* [PatchMerchantsMerchantIDPayoutSettingsPayoutSettingsID](docs/payoutsettingsmerchantlevel/README.md#patchmerchantsmerchantidpayoutsettingspayoutsettingsid) - Update a payout setting
* [PostMerchantsMerchantIDPayoutSettings](docs/payoutsettingsmerchantlevel/README.md#postmerchantsmerchantidpayoutsettings) - Add a payout setting

### [TerminalActionsCompanyLevel](docs/terminalactionscompanylevel/README.md)

* [GetCompaniesCompanyIDAndroidApps](docs/terminalactionscompanylevel/README.md#getcompaniescompanyidandroidapps) - Get a list of Android apps
* [GetCompaniesCompanyIDAndroidCertificates](docs/terminalactionscompanylevel/README.md#getcompaniescompanyidandroidcertificates) - Get a list of Android certificates
* [GetCompaniesCompanyIDTerminalActions](docs/terminalactionscompanylevel/README.md#getcompaniescompanyidterminalactions) - Get a list of terminal actions
* [GetCompaniesCompanyIDTerminalActionsActionID](docs/terminalactionscompanylevel/README.md#getcompaniescompanyidterminalactionsactionid) - Get terminal action

### [TerminalActionsTerminalLevel](docs/terminalactionsterminallevel/README.md)

* [PostTerminalsScheduleActions](docs/terminalactionsterminallevel/README.md#postterminalsscheduleactions) - Create a terminal action

### [TerminalOrdersCompanyLevel](docs/terminalorderscompanylevel/README.md)

* [GetCompaniesCompanyIDBillingEntities](docs/terminalorderscompanylevel/README.md#getcompaniescompanyidbillingentities) - Get a list of billing entities
* [GetCompaniesCompanyIDShippingLocations](docs/terminalorderscompanylevel/README.md#getcompaniescompanyidshippinglocations) - Get a list of shipping locations
* [GetCompaniesCompanyIDTerminalModels](docs/terminalorderscompanylevel/README.md#getcompaniescompanyidterminalmodels) - Get a list of terminal models
* [GetCompaniesCompanyIDTerminalOrders](docs/terminalorderscompanylevel/README.md#getcompaniescompanyidterminalorders) - Get a list of orders
* [GetCompaniesCompanyIDTerminalOrdersOrderID](docs/terminalorderscompanylevel/README.md#getcompaniescompanyidterminalordersorderid) - Get an order
* [GetCompaniesCompanyIDTerminalProducts](docs/terminalorderscompanylevel/README.md#getcompaniescompanyidterminalproducts) - Get a list of terminal products
* [PatchCompaniesCompanyIDTerminalOrdersOrderID](docs/terminalorderscompanylevel/README.md#patchcompaniescompanyidterminalordersorderid) - Update an order
* [PostCompaniesCompanyIDShippingLocations](docs/terminalorderscompanylevel/README.md#postcompaniescompanyidshippinglocations) - Create a shipping location
* [PostCompaniesCompanyIDTerminalOrders](docs/terminalorderscompanylevel/README.md#postcompaniescompanyidterminalorders) - Create an order
* [PostCompaniesCompanyIDTerminalOrdersOrderIDCancel](docs/terminalorderscompanylevel/README.md#postcompaniescompanyidterminalordersorderidcancel) - Cancel an order

### [TerminalOrdersMerchantLevel](docs/terminalordersmerchantlevel/README.md)

* [GetMerchantsMerchantIDBillingEntities](docs/terminalordersmerchantlevel/README.md#getmerchantsmerchantidbillingentities) - Get a list of billing entities
* [GetMerchantsMerchantIDShippingLocations](docs/terminalordersmerchantlevel/README.md#getmerchantsmerchantidshippinglocations) - Get a list of shipping locations
* [GetMerchantsMerchantIDTerminalModels](docs/terminalordersmerchantlevel/README.md#getmerchantsmerchantidterminalmodels) - Get a list of terminal models
* [GetMerchantsMerchantIDTerminalOrders](docs/terminalordersmerchantlevel/README.md#getmerchantsmerchantidterminalorders) - Get a list of orders
* [GetMerchantsMerchantIDTerminalOrdersOrderID](docs/terminalordersmerchantlevel/README.md#getmerchantsmerchantidterminalordersorderid) - Get an order
* [GetMerchantsMerchantIDTerminalProducts](docs/terminalordersmerchantlevel/README.md#getmerchantsmerchantidterminalproducts) - Get a list of terminal products
* [PatchMerchantsMerchantIDTerminalOrdersOrderID](docs/terminalordersmerchantlevel/README.md#patchmerchantsmerchantidterminalordersorderid) - Update an order
* [PostMerchantsMerchantIDShippingLocations](docs/terminalordersmerchantlevel/README.md#postmerchantsmerchantidshippinglocations) - Create a shipping location
* [PostMerchantsMerchantIDTerminalOrders](docs/terminalordersmerchantlevel/README.md#postmerchantsmerchantidterminalorders) - Create an order
* [PostMerchantsMerchantIDTerminalOrdersOrderIDCancel](docs/terminalordersmerchantlevel/README.md#postmerchantsmerchantidterminalordersorderidcancel) - Cancel an order

### [TerminalSettingsCompanyLevel](docs/terminalsettingscompanylevel/README.md)

* [GetCompaniesCompanyIDTerminalLogos](docs/terminalsettingscompanylevel/README.md#getcompaniescompanyidterminallogos) - Get the terminal logo
* [GetCompaniesCompanyIDTerminalSettings](docs/terminalsettingscompanylevel/README.md#getcompaniescompanyidterminalsettings) - Get terminal settings
* [PatchCompaniesCompanyIDTerminalLogos](docs/terminalsettingscompanylevel/README.md#patchcompaniescompanyidterminallogos) - Update the terminal logo
* [PatchCompaniesCompanyIDTerminalSettings](docs/terminalsettingscompanylevel/README.md#patchcompaniescompanyidterminalsettings) - Update terminal settings

### [TerminalSettingsMerchantLevel](docs/terminalsettingsmerchantlevel/README.md)

* [GetMerchantsMerchantIDTerminalLogos](docs/terminalsettingsmerchantlevel/README.md#getmerchantsmerchantidterminallogos) - Get the terminal logo
* [GetMerchantsMerchantIDTerminalSettings](docs/terminalsettingsmerchantlevel/README.md#getmerchantsmerchantidterminalsettings) - Get terminal settings
* [PatchMerchantsMerchantIDTerminalLogos](docs/terminalsettingsmerchantlevel/README.md#patchmerchantsmerchantidterminallogos) - Update the terminal logo
* [PatchMerchantsMerchantIDTerminalSettings](docs/terminalsettingsmerchantlevel/README.md#patchmerchantsmerchantidterminalsettings) - Update terminal settings

### [TerminalSettingsStoreLevel](docs/terminalsettingsstorelevel/README.md)

* [GetMerchantsMerchantIDStoresReferenceTerminalLogos](docs/terminalsettingsstorelevel/README.md#getmerchantsmerchantidstoresreferenceterminallogos) - Get the terminal logo
* [GetMerchantsMerchantIDStoresReferenceTerminalSettings](docs/terminalsettingsstorelevel/README.md#getmerchantsmerchantidstoresreferenceterminalsettings) - Get terminal settings
* [GetStoresStoreIDTerminalLogos](docs/terminalsettingsstorelevel/README.md#getstoresstoreidterminallogos) - Get the terminal logo
* [GetStoresStoreIDTerminalSettings](docs/terminalsettingsstorelevel/README.md#getstoresstoreidterminalsettings) - Get terminal settings
* [PatchMerchantsMerchantIDStoresReferenceTerminalLogos](docs/terminalsettingsstorelevel/README.md#patchmerchantsmerchantidstoresreferenceterminallogos) - Update the terminal logo
* [PatchMerchantsMerchantIDStoresReferenceTerminalSettings](docs/terminalsettingsstorelevel/README.md#patchmerchantsmerchantidstoresreferenceterminalsettings) - Update terminal settings
* [PatchStoresStoreIDTerminalLogos](docs/terminalsettingsstorelevel/README.md#patchstoresstoreidterminallogos) - Update the terminal logo
* [PatchStoresStoreIDTerminalSettings](docs/terminalsettingsstorelevel/README.md#patchstoresstoreidterminalsettings) - Update terminal settings

### [TerminalSettingsTerminalLevel](docs/terminalsettingsterminallevel/README.md)

* [GetTerminalsTerminalIDTerminalLogos](docs/terminalsettingsterminallevel/README.md#getterminalsterminalidterminallogos) - Get the terminal logo
* [GetTerminalsTerminalIDTerminalSettings](docs/terminalsettingsterminallevel/README.md#getterminalsterminalidterminalsettings) - Get terminal settings
* [PatchTerminalsTerminalIDTerminalLogos](docs/terminalsettingsterminallevel/README.md#patchterminalsterminalidterminallogos) - Update the logo
* [PatchTerminalsTerminalIDTerminalSettings](docs/terminalsettingsterminallevel/README.md#patchterminalsterminalidterminalsettings) - Update terminal settings

### [TerminalsTerminalLevel](docs/terminalsterminallevel/README.md)

* [GetTerminals](docs/terminalsterminallevel/README.md#getterminals) - Get a list of terminals

### [UsersCompanyLevel](docs/userscompanylevel/README.md)

* [GetCompaniesCompanyIDUsers](docs/userscompanylevel/README.md#getcompaniescompanyidusers) - Get a list of users
* [GetCompaniesCompanyIDUsersUserID](docs/userscompanylevel/README.md#getcompaniescompanyidusersuserid) - Get user details
* [PatchCompaniesCompanyIDUsersUserID](docs/userscompanylevel/README.md#patchcompaniescompanyidusersuserid) - Update user details
* [PostCompaniesCompanyIDUsers](docs/userscompanylevel/README.md#postcompaniescompanyidusers) - Create a new user

### [UsersMerchantLevel](docs/usersmerchantlevel/README.md)

* [GetMerchantsMerchantIDUsers](docs/usersmerchantlevel/README.md#getmerchantsmerchantidusers) - Get a list of users
* [GetMerchantsMerchantIDUsersUserID](docs/usersmerchantlevel/README.md#getmerchantsmerchantidusersuserid) - Get user details
* [PatchMerchantsMerchantIDUsersUserID](docs/usersmerchantlevel/README.md#patchmerchantsmerchantidusersuserid) - Update a user
* [PostMerchantsMerchantIDUsers](docs/usersmerchantlevel/README.md#postmerchantsmerchantidusers) - Create a new user

### [WebhooksCompanyLevel](docs/webhookscompanylevel/README.md)

* [DeleteCompaniesCompanyIDWebhooksWebhookID](docs/webhookscompanylevel/README.md#deletecompaniescompanyidwebhookswebhookid) - Remove a webhook
* [GetCompaniesCompanyIDWebhooks](docs/webhookscompanylevel/README.md#getcompaniescompanyidwebhooks) - List all webhooks
* [GetCompaniesCompanyIDWebhooksWebhookID](docs/webhookscompanylevel/README.md#getcompaniescompanyidwebhookswebhookid) - Get a webhook
* [PatchCompaniesCompanyIDWebhooksWebhookID](docs/webhookscompanylevel/README.md#patchcompaniescompanyidwebhookswebhookid) - Update a webhook
* [PostCompaniesCompanyIDWebhooks](docs/webhookscompanylevel/README.md#postcompaniescompanyidwebhooks) - Set up a webhook
* [PostCompaniesCompanyIDWebhooksWebhookIDGenerateHmac](docs/webhookscompanylevel/README.md#postcompaniescompanyidwebhookswebhookidgeneratehmac) - Generate an HMAC key
* [PostCompaniesCompanyIDWebhooksWebhookIDTest](docs/webhookscompanylevel/README.md#postcompaniescompanyidwebhookswebhookidtest) - Test a webhook

### [WebhooksMerchantLevel](docs/webhooksmerchantlevel/README.md)

* [DeleteMerchantsMerchantIDWebhooksWebhookID](docs/webhooksmerchantlevel/README.md#deletemerchantsmerchantidwebhookswebhookid) - Remove a webhook
* [GetMerchantsMerchantIDWebhooks](docs/webhooksmerchantlevel/README.md#getmerchantsmerchantidwebhooks) - List all webhooks
* [GetMerchantsMerchantIDWebhooksWebhookID](docs/webhooksmerchantlevel/README.md#getmerchantsmerchantidwebhookswebhookid) - Get a webhook
* [PatchMerchantsMerchantIDWebhooksWebhookID](docs/webhooksmerchantlevel/README.md#patchmerchantsmerchantidwebhookswebhookid) - Update a webhook
* [PostMerchantsMerchantIDWebhooks](docs/webhooksmerchantlevel/README.md#postmerchantsmerchantidwebhooks) - Set up a webhook
* [PostMerchantsMerchantIDWebhooksWebhookIDGenerateHmac](docs/webhooksmerchantlevel/README.md#postmerchantsmerchantidwebhookswebhookidgeneratehmac) - Generate an HMAC key
* [PostMerchantsMerchantIDWebhooksWebhookIDTest](docs/webhooksmerchantlevel/README.md#postmerchantsmerchantidwebhookswebhookidtest) - Test a webhook
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
