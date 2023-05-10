# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCompaniesCompanyIdApiCredentialsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCompaniesCompanyIdApiCredentialsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCompaniesCompanyIdApiCredentialsRequest();
    $request->companyId = 'corrupti';
    $request->pageNumber = 592845;
    $request->pageSize = 715190;

    $requestSecurity = new GetCompaniesCompanyIdApiCredentialsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->apiCredentialsCompanyLevel->getCompaniesCompanyIdApiCredentials($request, $requestSecurity);

    if ($response->listCompanyApiCredentialsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [apiCredentialsCompanyLevel](docs/apicredentialscompanylevel/README.md)

* [getCompaniesCompanyIdApiCredentials](docs/apicredentialscompanylevel/README.md#getcompaniescompanyidapicredentials) - Get a list of API credentials
* [getCompaniesCompanyIdApiCredentialsApiCredentialId](docs/apicredentialscompanylevel/README.md#getcompaniescompanyidapicredentialsapicredentialid) - Get an API credential
* [patchCompaniesCompanyIdApiCredentialsApiCredentialId](docs/apicredentialscompanylevel/README.md#patchcompaniescompanyidapicredentialsapicredentialid) - Update an API credential.
* [postCompaniesCompanyIdApiCredentials](docs/apicredentialscompanylevel/README.md#postcompaniescompanyidapicredentials) - Create an API credential.

### [apiCredentialsMerchantLevel](docs/apicredentialsmerchantlevel/README.md)

* [getMerchantsMerchantIdApiCredentials](docs/apicredentialsmerchantlevel/README.md#getmerchantsmerchantidapicredentials) - Get a list of API credentials
* [getMerchantsMerchantIdApiCredentialsApiCredentialId](docs/apicredentialsmerchantlevel/README.md#getmerchantsmerchantidapicredentialsapicredentialid) - Get an API credential
* [patchMerchantsMerchantIdApiCredentialsApiCredentialId](docs/apicredentialsmerchantlevel/README.md#patchmerchantsmerchantidapicredentialsapicredentialid) - Update an API credential
* [postMerchantsMerchantIdApiCredentials](docs/apicredentialsmerchantlevel/README.md#postmerchantsmerchantidapicredentials) - Create an API credential

### [apiKeyCompanyLevel](docs/apikeycompanylevel/README.md)

* [postCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateApiKey](docs/apikeycompanylevel/README.md#postcompaniescompanyidapicredentialsapicredentialidgenerateapikey) - Generate new API key

### [apiKeyMerchantLevel](docs/apikeymerchantlevel/README.md)

* [postMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateApiKey](docs/apikeymerchantlevel/README.md#postmerchantsmerchantidapicredentialsapicredentialidgenerateapikey) - Generate new API key

### [accountCompanyLevel](docs/accountcompanylevel/README.md)

* [getCompanies](docs/accountcompanylevel/README.md#getcompanies) - Get a list of company accounts
* [getCompaniesCompanyId](docs/accountcompanylevel/README.md#getcompaniescompanyid) - Get a company account
* [getCompaniesCompanyIdMerchants](docs/accountcompanylevel/README.md#getcompaniescompanyidmerchants) - Get a list of merchant accounts

### [accountMerchantLevel](docs/accountmerchantlevel/README.md)

* [getMerchants](docs/accountmerchantlevel/README.md#getmerchants) - Get a list of merchant accounts
* [getMerchantsMerchantId](docs/accountmerchantlevel/README.md#getmerchantsmerchantid) - Get a merchant account
* [postMerchants](docs/accountmerchantlevel/README.md#postmerchants) - Create a merchant account
* [postMerchantsMerchantIdActivate](docs/accountmerchantlevel/README.md#postmerchantsmerchantidactivate) - Request to activate a merchant account

### [accountStoreLevel](docs/accountstorelevel/README.md)

* [getMerchantsMerchantIdStores](docs/accountstorelevel/README.md#getmerchantsmerchantidstores) - Get a list of stores
* [getMerchantsMerchantIdStoresStoreId](docs/accountstorelevel/README.md#getmerchantsmerchantidstoresstoreid) - Get a store
* [getStores](docs/accountstorelevel/README.md#getstores) - Get a list of stores
* [getStoresStoreId](docs/accountstorelevel/README.md#getstoresstoreid) - Get a store
* [patchMerchantsMerchantIdStoresStoreId](docs/accountstorelevel/README.md#patchmerchantsmerchantidstoresstoreid) - Update a store
* [patchStoresStoreId](docs/accountstorelevel/README.md#patchstoresstoreid) - Update a store
* [postMerchantsMerchantIdStores](docs/accountstorelevel/README.md#postmerchantsmerchantidstores) - Create a store
* [postStores](docs/accountstorelevel/README.md#poststores) - Create a store

### [allowedOriginsCompanyLevel](docs/allowedoriginscompanylevel/README.md)

* [deleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginId](docs/allowedoriginscompanylevel/README.md#deletecompaniescompanyidapicredentialsapicredentialidallowedoriginsoriginid) - Delete an allowed origin
* [getCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOrigins](docs/allowedoriginscompanylevel/README.md#getcompaniescompanyidapicredentialsapicredentialidallowedorigins) - Get a list of allowed origins
* [getCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginId](docs/allowedoriginscompanylevel/README.md#getcompaniescompanyidapicredentialsapicredentialidallowedoriginsoriginid) - Get an allowed origin
* [postCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOrigins](docs/allowedoriginscompanylevel/README.md#postcompaniescompanyidapicredentialsapicredentialidallowedorigins) - Create an allowed origin

### [allowedOriginsMerchantLevel](docs/allowedoriginsmerchantlevel/README.md)

* [deleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginId](docs/allowedoriginsmerchantlevel/README.md#deletemerchantsmerchantidapicredentialsapicredentialidallowedoriginsoriginid) - Delete an allowed origin
* [getMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOrigins](docs/allowedoriginsmerchantlevel/README.md#getmerchantsmerchantidapicredentialsapicredentialidallowedorigins) - Get a list of allowed origins
* [getMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginId](docs/allowedoriginsmerchantlevel/README.md#getmerchantsmerchantidapicredentialsapicredentialidallowedoriginsoriginid) - Get an allowed origin
* [postMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOrigins](docs/allowedoriginsmerchantlevel/README.md#postmerchantsmerchantidapicredentialsapicredentialidallowedorigins) - Create an allowed origin

### [clientKeyCompanyLevel](docs/clientkeycompanylevel/README.md)

* [postCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKey](docs/clientkeycompanylevel/README.md#postcompaniescompanyidapicredentialsapicredentialidgenerateclientkey) - Generate new client key

### [clientKeyMerchantLevel](docs/clientkeymerchantlevel/README.md)

* [postMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateClientKey](docs/clientkeymerchantlevel/README.md#postmerchantsmerchantidapicredentialsapicredentialidgenerateclientkey) - Generate new client key

### [myAPICredential](docs/myapicredential/README.md)

* [deleteMeAllowedOriginsOriginId](docs/myapicredential/README.md#deletemeallowedoriginsoriginid) - Remove allowed origin
* [getMe](docs/myapicredential/README.md#getme) - Get API credential details
* [getMeAllowedOrigins](docs/myapicredential/README.md#getmeallowedorigins) - Get allowed origins
* [getMeAllowedOriginsOriginId](docs/myapicredential/README.md#getmeallowedoriginsoriginid) - Get allowed origin details
* [postMeAllowedOrigins](docs/myapicredential/README.md#postmeallowedorigins) - Add allowed origin

### [paymentMethodsMerchantLevel](docs/paymentmethodsmerchantlevel/README.md)

* [getMerchantsMerchantIdPaymentMethodSettings](docs/paymentmethodsmerchantlevel/README.md#getmerchantsmerchantidpaymentmethodsettings) - Get all payment methods
* [getMerchantsMerchantIdPaymentMethodSettingsPaymentMethodId](docs/paymentmethodsmerchantlevel/README.md#getmerchantsmerchantidpaymentmethodsettingspaymentmethodid) - Get payment method details
* [getMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomains](docs/paymentmethodsmerchantlevel/README.md#getmerchantsmerchantidpaymentmethodsettingspaymentmethodidgetapplepaydomains) - Get Apple Pay domains
* [patchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodId](docs/paymentmethodsmerchantlevel/README.md#patchmerchantsmerchantidpaymentmethodsettingspaymentmethodid) - Update a payment method
* [postMerchantsMerchantIdPaymentMethodSettings](docs/paymentmethodsmerchantlevel/README.md#postmerchantsmerchantidpaymentmethodsettings) - Request a payment method
* [postMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomains](docs/paymentmethodsmerchantlevel/README.md#postmerchantsmerchantidpaymentmethodsettingspaymentmethodidaddapplepaydomains) - Add an Apple Pay domain

### [payoutSettingsMerchantLevel](docs/payoutsettingsmerchantlevel/README.md)

* [deleteMerchantsMerchantIdPayoutSettingsPayoutSettingsId](docs/payoutsettingsmerchantlevel/README.md#deletemerchantsmerchantidpayoutsettingspayoutsettingsid) - Delete a payout setting
* [getMerchantsMerchantIdPayoutSettings](docs/payoutsettingsmerchantlevel/README.md#getmerchantsmerchantidpayoutsettings) - Get a list of payout settings
* [getMerchantsMerchantIdPayoutSettingsPayoutSettingsId](docs/payoutsettingsmerchantlevel/README.md#getmerchantsmerchantidpayoutsettingspayoutsettingsid) - Get a payout setting
* [patchMerchantsMerchantIdPayoutSettingsPayoutSettingsId](docs/payoutsettingsmerchantlevel/README.md#patchmerchantsmerchantidpayoutsettingspayoutsettingsid) - Update a payout setting
* [postMerchantsMerchantIdPayoutSettings](docs/payoutsettingsmerchantlevel/README.md#postmerchantsmerchantidpayoutsettings) - Add a payout setting

### [terminalActionsCompanyLevel](docs/terminalactionscompanylevel/README.md)

* [getCompaniesCompanyIdAndroidApps](docs/terminalactionscompanylevel/README.md#getcompaniescompanyidandroidapps) - Get a list of Android apps
* [getCompaniesCompanyIdAndroidCertificates](docs/terminalactionscompanylevel/README.md#getcompaniescompanyidandroidcertificates) - Get a list of Android certificates
* [getCompaniesCompanyIdTerminalActions](docs/terminalactionscompanylevel/README.md#getcompaniescompanyidterminalactions) - Get a list of terminal actions
* [getCompaniesCompanyIdTerminalActionsActionId](docs/terminalactionscompanylevel/README.md#getcompaniescompanyidterminalactionsactionid) - Get terminal action

### [terminalActionsTerminalLevel](docs/terminalactionsterminallevel/README.md)

* [postTerminalsScheduleActions](docs/terminalactionsterminallevel/README.md#postterminalsscheduleactions) - Create a terminal action

### [terminalOrdersCompanyLevel](docs/terminalorderscompanylevel/README.md)

* [getCompaniesCompanyIdBillingEntities](docs/terminalorderscompanylevel/README.md#getcompaniescompanyidbillingentities) - Get a list of billing entities
* [getCompaniesCompanyIdShippingLocations](docs/terminalorderscompanylevel/README.md#getcompaniescompanyidshippinglocations) - Get a list of shipping locations
* [getCompaniesCompanyIdTerminalModels](docs/terminalorderscompanylevel/README.md#getcompaniescompanyidterminalmodels) - Get a list of terminal models
* [getCompaniesCompanyIdTerminalOrders](docs/terminalorderscompanylevel/README.md#getcompaniescompanyidterminalorders) - Get a list of orders
* [getCompaniesCompanyIdTerminalOrdersOrderId](docs/terminalorderscompanylevel/README.md#getcompaniescompanyidterminalordersorderid) - Get an order
* [getCompaniesCompanyIdTerminalProducts](docs/terminalorderscompanylevel/README.md#getcompaniescompanyidterminalproducts) - Get a list of terminal products
* [patchCompaniesCompanyIdTerminalOrdersOrderId](docs/terminalorderscompanylevel/README.md#patchcompaniescompanyidterminalordersorderid) - Update an order
* [postCompaniesCompanyIdShippingLocations](docs/terminalorderscompanylevel/README.md#postcompaniescompanyidshippinglocations) - Create a shipping location
* [postCompaniesCompanyIdTerminalOrders](docs/terminalorderscompanylevel/README.md#postcompaniescompanyidterminalorders) - Create an order
* [postCompaniesCompanyIdTerminalOrdersOrderIdCancel](docs/terminalorderscompanylevel/README.md#postcompaniescompanyidterminalordersorderidcancel) - Cancel an order

### [terminalOrdersMerchantLevel](docs/terminalordersmerchantlevel/README.md)

* [getMerchantsMerchantIdBillingEntities](docs/terminalordersmerchantlevel/README.md#getmerchantsmerchantidbillingentities) - Get a list of billing entities
* [getMerchantsMerchantIdShippingLocations](docs/terminalordersmerchantlevel/README.md#getmerchantsmerchantidshippinglocations) - Get a list of shipping locations
* [getMerchantsMerchantIdTerminalModels](docs/terminalordersmerchantlevel/README.md#getmerchantsmerchantidterminalmodels) - Get a list of terminal models
* [getMerchantsMerchantIdTerminalOrders](docs/terminalordersmerchantlevel/README.md#getmerchantsmerchantidterminalorders) - Get a list of orders
* [getMerchantsMerchantIdTerminalOrdersOrderId](docs/terminalordersmerchantlevel/README.md#getmerchantsmerchantidterminalordersorderid) - Get an order
* [getMerchantsMerchantIdTerminalProducts](docs/terminalordersmerchantlevel/README.md#getmerchantsmerchantidterminalproducts) - Get a list of terminal products
* [patchMerchantsMerchantIdTerminalOrdersOrderId](docs/terminalordersmerchantlevel/README.md#patchmerchantsmerchantidterminalordersorderid) - Update an order
* [postMerchantsMerchantIdShippingLocations](docs/terminalordersmerchantlevel/README.md#postmerchantsmerchantidshippinglocations) - Create a shipping location
* [postMerchantsMerchantIdTerminalOrders](docs/terminalordersmerchantlevel/README.md#postmerchantsmerchantidterminalorders) - Create an order
* [postMerchantsMerchantIdTerminalOrdersOrderIdCancel](docs/terminalordersmerchantlevel/README.md#postmerchantsmerchantidterminalordersorderidcancel) - Cancel an order

### [terminalSettingsCompanyLevel](docs/terminalsettingscompanylevel/README.md)

* [getCompaniesCompanyIdTerminalLogos](docs/terminalsettingscompanylevel/README.md#getcompaniescompanyidterminallogos) - Get the terminal logo
* [getCompaniesCompanyIdTerminalSettings](docs/terminalsettingscompanylevel/README.md#getcompaniescompanyidterminalsettings) - Get terminal settings
* [patchCompaniesCompanyIdTerminalLogos](docs/terminalsettingscompanylevel/README.md#patchcompaniescompanyidterminallogos) - Update the terminal logo
* [patchCompaniesCompanyIdTerminalSettings](docs/terminalsettingscompanylevel/README.md#patchcompaniescompanyidterminalsettings) - Update terminal settings

### [terminalSettingsMerchantLevel](docs/terminalsettingsmerchantlevel/README.md)

* [getMerchantsMerchantIdTerminalLogos](docs/terminalsettingsmerchantlevel/README.md#getmerchantsmerchantidterminallogos) - Get the terminal logo
* [getMerchantsMerchantIdTerminalSettings](docs/terminalsettingsmerchantlevel/README.md#getmerchantsmerchantidterminalsettings) - Get terminal settings
* [patchMerchantsMerchantIdTerminalLogos](docs/terminalsettingsmerchantlevel/README.md#patchmerchantsmerchantidterminallogos) - Update the terminal logo
* [patchMerchantsMerchantIdTerminalSettings](docs/terminalsettingsmerchantlevel/README.md#patchmerchantsmerchantidterminalsettings) - Update terminal settings

### [terminalSettingsStoreLevel](docs/terminalsettingsstorelevel/README.md)

* [getMerchantsMerchantIdStoresReferenceTerminalLogos](docs/terminalsettingsstorelevel/README.md#getmerchantsmerchantidstoresreferenceterminallogos) - Get the terminal logo
* [getMerchantsMerchantIdStoresReferenceTerminalSettings](docs/terminalsettingsstorelevel/README.md#getmerchantsmerchantidstoresreferenceterminalsettings) - Get terminal settings
* [getStoresStoreIdTerminalLogos](docs/terminalsettingsstorelevel/README.md#getstoresstoreidterminallogos) - Get the terminal logo
* [getStoresStoreIdTerminalSettings](docs/terminalsettingsstorelevel/README.md#getstoresstoreidterminalsettings) - Get terminal settings
* [patchMerchantsMerchantIdStoresReferenceTerminalLogos](docs/terminalsettingsstorelevel/README.md#patchmerchantsmerchantidstoresreferenceterminallogos) - Update the terminal logo
* [patchMerchantsMerchantIdStoresReferenceTerminalSettings](docs/terminalsettingsstorelevel/README.md#patchmerchantsmerchantidstoresreferenceterminalsettings) - Update terminal settings
* [patchStoresStoreIdTerminalLogos](docs/terminalsettingsstorelevel/README.md#patchstoresstoreidterminallogos) - Update the terminal logo
* [patchStoresStoreIdTerminalSettings](docs/terminalsettingsstorelevel/README.md#patchstoresstoreidterminalsettings) - Update terminal settings

### [terminalSettingsTerminalLevel](docs/terminalsettingsterminallevel/README.md)

* [getTerminalsTerminalIdTerminalLogos](docs/terminalsettingsterminallevel/README.md#getterminalsterminalidterminallogos) - Get the terminal logo
* [getTerminalsTerminalIdTerminalSettings](docs/terminalsettingsterminallevel/README.md#getterminalsterminalidterminalsettings) - Get terminal settings
* [patchTerminalsTerminalIdTerminalLogos](docs/terminalsettingsterminallevel/README.md#patchterminalsterminalidterminallogos) - Update the logo
* [patchTerminalsTerminalIdTerminalSettings](docs/terminalsettingsterminallevel/README.md#patchterminalsterminalidterminalsettings) - Update terminal settings

### [terminalsTerminalLevel](docs/terminalsterminallevel/README.md)

* [getTerminals](docs/terminalsterminallevel/README.md#getterminals) - Get a list of terminals

### [usersCompanyLevel](docs/userscompanylevel/README.md)

* [getCompaniesCompanyIdUsers](docs/userscompanylevel/README.md#getcompaniescompanyidusers) - Get a list of users
* [getCompaniesCompanyIdUsersUserId](docs/userscompanylevel/README.md#getcompaniescompanyidusersuserid) - Get user details
* [patchCompaniesCompanyIdUsersUserId](docs/userscompanylevel/README.md#patchcompaniescompanyidusersuserid) - Update user details
* [postCompaniesCompanyIdUsers](docs/userscompanylevel/README.md#postcompaniescompanyidusers) - Create a new user

### [usersMerchantLevel](docs/usersmerchantlevel/README.md)

* [getMerchantsMerchantIdUsers](docs/usersmerchantlevel/README.md#getmerchantsmerchantidusers) - Get a list of users
* [getMerchantsMerchantIdUsersUserId](docs/usersmerchantlevel/README.md#getmerchantsmerchantidusersuserid) - Get user details
* [patchMerchantsMerchantIdUsersUserId](docs/usersmerchantlevel/README.md#patchmerchantsmerchantidusersuserid) - Update a user
* [postMerchantsMerchantIdUsers](docs/usersmerchantlevel/README.md#postmerchantsmerchantidusers) - Create a new user

### [webhooksCompanyLevel](docs/webhookscompanylevel/README.md)

* [deleteCompaniesCompanyIdWebhooksWebhookId](docs/webhookscompanylevel/README.md#deletecompaniescompanyidwebhookswebhookid) - Remove a webhook
* [getCompaniesCompanyIdWebhooks](docs/webhookscompanylevel/README.md#getcompaniescompanyidwebhooks) - List all webhooks
* [getCompaniesCompanyIdWebhooksWebhookId](docs/webhookscompanylevel/README.md#getcompaniescompanyidwebhookswebhookid) - Get a webhook
* [patchCompaniesCompanyIdWebhooksWebhookId](docs/webhookscompanylevel/README.md#patchcompaniescompanyidwebhookswebhookid) - Update a webhook
* [postCompaniesCompanyIdWebhooks](docs/webhookscompanylevel/README.md#postcompaniescompanyidwebhooks) - Set up a webhook
* [postCompaniesCompanyIdWebhooksWebhookIdGenerateHmac](docs/webhookscompanylevel/README.md#postcompaniescompanyidwebhookswebhookidgeneratehmac) - Generate an HMAC key
* [postCompaniesCompanyIdWebhooksWebhookIdTest](docs/webhookscompanylevel/README.md#postcompaniescompanyidwebhookswebhookidtest) - Test a webhook

### [webhooksMerchantLevel](docs/webhooksmerchantlevel/README.md)

* [deleteMerchantsMerchantIdWebhooksWebhookId](docs/webhooksmerchantlevel/README.md#deletemerchantsmerchantidwebhookswebhookid) - Remove a webhook
* [getMerchantsMerchantIdWebhooks](docs/webhooksmerchantlevel/README.md#getmerchantsmerchantidwebhooks) - List all webhooks
* [getMerchantsMerchantIdWebhooksWebhookId](docs/webhooksmerchantlevel/README.md#getmerchantsmerchantidwebhookswebhookid) - Get a webhook
* [patchMerchantsMerchantIdWebhooksWebhookId](docs/webhooksmerchantlevel/README.md#patchmerchantsmerchantidwebhookswebhookid) - Update a webhook
* [postMerchantsMerchantIdWebhooks](docs/webhooksmerchantlevel/README.md#postmerchantsmerchantidwebhooks) - Set up a webhook
* [postMerchantsMerchantIdWebhooksWebhookIdGenerateHmac](docs/webhooksmerchantlevel/README.md#postmerchantsmerchantidwebhookswebhookidgeneratehmac) - Generate an HMAC key
* [postMerchantsMerchantIdWebhooksWebhookIdTest](docs/webhooksmerchantlevel/README.md#postmerchantsmerchantidwebhookswebhookidtest) - Test a webhook
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
