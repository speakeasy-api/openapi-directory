# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetCompaniesCompanyIdApiCredentialsSecurity;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdApiCredentialsPathParams;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdApiCredentialsQueryParams;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdApiCredentialsRequest;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdApiCredentialsResponse;
import org.openapis.openapi.models.shared.SchemeAPIKeyAuth;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCompaniesCompanyIdApiCredentialsRequest req = new GetCompaniesCompanyIdApiCredentialsRequest() {{
                security = new GetCompaniesCompanyIdApiCredentialsSecurity() {{
                    apiKeyAuth = new SchemeAPIKeyAuth() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                pathParams = new GetCompaniesCompanyIdApiCredentialsPathParams() {{
                    companyId = "corrupti";
                }};
                queryParams = new GetCompaniesCompanyIdApiCredentialsQueryParams() {{
                    pageNumber = 592845;
                    pageSize = 715190;
                }};
            }};            

            GetCompaniesCompanyIdApiCredentialsResponse res = sdk.apiCredentialsCompanyLevel.getCompaniesCompanyIdApiCredentials(req);

            if (res.listCompanyApiCredentialsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### apiCredentialsCompanyLevel

* `getCompaniesCompanyIdApiCredentials` - Get a list of API credentials
* `getCompaniesCompanyIdApiCredentialsApiCredentialId` - Get an API credential
* `patchCompaniesCompanyIdApiCredentialsApiCredentialId` - Update an API credential.
* `postCompaniesCompanyIdApiCredentials` - Create an API credential.

### apiCredentialsMerchantLevel

* `getMerchantsMerchantIdApiCredentials` - Get a list of API credentials
* `getMerchantsMerchantIdApiCredentialsApiCredentialId` - Get an API credential
* `patchMerchantsMerchantIdApiCredentialsApiCredentialId` - Update an API credential
* `postMerchantsMerchantIdApiCredentials` - Create an API credential

### apiKeyCompanyLevel

* `postCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateApiKey` - Generate new API key

### apiKeyMerchantLevel

* `postMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateApiKey` - Generate new API key

### accountCompanyLevel

* `getCompanies` - Get a list of company accounts
* `getCompaniesCompanyId` - Get a company account
* `getCompaniesCompanyIdMerchants` - Get a list of merchant accounts

### accountMerchantLevel

* `getMerchants` - Get a list of merchant accounts
* `getMerchantsMerchantId` - Get a merchant account
* `postMerchants` - Create a merchant account
* `postMerchantsMerchantIdActivate` - Request to activate a merchant account

### accountStoreLevel

* `getMerchantsMerchantIdStores` - Get a list of stores
* `getMerchantsMerchantIdStoresStoreId` - Get a store
* `getStores` - Get a list of stores
* `getStoresStoreId` - Get a store
* `patchMerchantsMerchantIdStoresStoreId` - Update a store
* `patchStoresStoreId` - Update a store
* `postMerchantsMerchantIdStores` - Create a store
* `postStores` - Create a store

### allowedOriginsCompanyLevel

* `deleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginId` - Delete an allowed origin
* `getCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOrigins` - Get a list of allowed origins
* `getCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginId` - Get an allowed origin
* `postCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOrigins` - Create an allowed origin

### allowedOriginsMerchantLevel

* `deleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginId` - Delete an allowed origin
* `getMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOrigins` - Get a list of allowed origins
* `getMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginId` - Get an allowed origin
* `postMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOrigins` - Create an allowed origin

### clientKeyCompanyLevel

* `postCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKey` - Generate new client key

### clientKeyMerchantLevel

* `postMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateClientKey` - Generate new client key

### myAPICredential

* `deleteMeAllowedOriginsOriginId` - Remove allowed origin
* `getMe` - Get API credential details
* `getMeAllowedOrigins` - Get allowed origins
* `getMeAllowedOriginsOriginId` - Get allowed origin details
* `postMeAllowedOrigins` - Add allowed origin

### paymentMethodsMerchantLevel

* `getMerchantsMerchantIdPaymentMethodSettings` - Get all payment methods
* `getMerchantsMerchantIdPaymentMethodSettingsPaymentMethodId` - Get payment method details
* `getMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomains` - Get Apple Pay domains
* `patchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodId` - Update a payment method
* `postMerchantsMerchantIdPaymentMethodSettings` - Request a payment method
* `postMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomains` - Add an Apple Pay domain

### payoutSettingsMerchantLevel

* `deleteMerchantsMerchantIdPayoutSettingsPayoutSettingsId` - Delete a payout setting
* `getMerchantsMerchantIdPayoutSettings` - Get a list of payout settings
* `getMerchantsMerchantIdPayoutSettingsPayoutSettingsId` - Get a payout setting
* `patchMerchantsMerchantIdPayoutSettingsPayoutSettingsId` - Update a payout setting
* `postMerchantsMerchantIdPayoutSettings` - Add a payout setting

### terminalActionsCompanyLevel

* `getCompaniesCompanyIdAndroidApps` - Get a list of Android apps
* `getCompaniesCompanyIdAndroidCertificates` - Get a list of Android certificates
* `getCompaniesCompanyIdTerminalActions` - Get a list of terminal actions
* `getCompaniesCompanyIdTerminalActionsActionId` - Get terminal action

### terminalActionsTerminalLevel

* `postTerminalsScheduleActions` - Create a terminal action

### terminalOrdersCompanyLevel

* `getCompaniesCompanyIdBillingEntities` - Get a list of billing entities
* `getCompaniesCompanyIdShippingLocations` - Get a list of shipping locations
* `getCompaniesCompanyIdTerminalModels` - Get a list of terminal models
* `getCompaniesCompanyIdTerminalOrders` - Get a list of orders
* `getCompaniesCompanyIdTerminalOrdersOrderId` - Get an order
* `getCompaniesCompanyIdTerminalProducts` - Get a list of terminal products
* `patchCompaniesCompanyIdTerminalOrdersOrderId` - Update an order
* `postCompaniesCompanyIdShippingLocations` - Create a shipping location
* `postCompaniesCompanyIdTerminalOrders` - Create an order
* `postCompaniesCompanyIdTerminalOrdersOrderIdCancel` - Cancel an order

### terminalOrdersMerchantLevel

* `getMerchantsMerchantIdBillingEntities` - Get a list of billing entities
* `getMerchantsMerchantIdShippingLocations` - Get a list of shipping locations
* `getMerchantsMerchantIdTerminalModels` - Get a list of terminal models
* `getMerchantsMerchantIdTerminalOrders` - Get a list of orders
* `getMerchantsMerchantIdTerminalOrdersOrderId` - Get an order
* `getMerchantsMerchantIdTerminalProducts` - Get a list of terminal products
* `patchMerchantsMerchantIdTerminalOrdersOrderId` - Update an order
* `postMerchantsMerchantIdShippingLocations` - Create a shipping location
* `postMerchantsMerchantIdTerminalOrders` - Create an order
* `postMerchantsMerchantIdTerminalOrdersOrderIdCancel` - Cancel an order

### terminalSettingsCompanyLevel

* `getCompaniesCompanyIdTerminalLogos` - Get the terminal logo
* `getCompaniesCompanyIdTerminalSettings` - Get terminal settings
* `patchCompaniesCompanyIdTerminalLogos` - Update the terminal logo
* `patchCompaniesCompanyIdTerminalSettings` - Update terminal settings

### terminalSettingsMerchantLevel

* `getMerchantsMerchantIdTerminalLogos` - Get the terminal logo
* `getMerchantsMerchantIdTerminalSettings` - Get terminal settings
* `patchMerchantsMerchantIdTerminalLogos` - Update the terminal logo
* `patchMerchantsMerchantIdTerminalSettings` - Update terminal settings

### terminalSettingsStoreLevel

* `getMerchantsMerchantIdStoresReferenceTerminalLogos` - Get the terminal logo
* `getMerchantsMerchantIdStoresReferenceTerminalSettings` - Get terminal settings
* `getStoresStoreIdTerminalLogos` - Get the terminal logo
* `getStoresStoreIdTerminalSettings` - Get terminal settings
* `patchMerchantsMerchantIdStoresReferenceTerminalLogos` - Update the terminal logo
* `patchMerchantsMerchantIdStoresReferenceTerminalSettings` - Update terminal settings
* `patchStoresStoreIdTerminalLogos` - Update the terminal logo
* `patchStoresStoreIdTerminalSettings` - Update terminal settings

### terminalSettingsTerminalLevel

* `getTerminalsTerminalIdTerminalLogos` - Get the terminal logo
* `getTerminalsTerminalIdTerminalSettings` - Get terminal settings
* `patchTerminalsTerminalIdTerminalLogos` - Update the logo
* `patchTerminalsTerminalIdTerminalSettings` - Update terminal settings

### terminalsTerminalLevel

* `getTerminals` - Get a list of terminals

### usersCompanyLevel

* `getCompaniesCompanyIdUsers` - Get a list of users
* `getCompaniesCompanyIdUsersUserId` - Get user details
* `patchCompaniesCompanyIdUsersUserId` - Update user details
* `postCompaniesCompanyIdUsers` - Create a new user

### usersMerchantLevel

* `getMerchantsMerchantIdUsers` - Get a list of users
* `getMerchantsMerchantIdUsersUserId` - Get user details
* `patchMerchantsMerchantIdUsersUserId` - Update a user
* `postMerchantsMerchantIdUsers` - Create a new user

### webhooksCompanyLevel

* `deleteCompaniesCompanyIdWebhooksWebhookId` - Remove a webhook
* `getCompaniesCompanyIdWebhooks` - List all webhooks
* `getCompaniesCompanyIdWebhooksWebhookId` - Get a webhook
* `patchCompaniesCompanyIdWebhooksWebhookId` - Update a webhook
* `postCompaniesCompanyIdWebhooks` - Set up a webhook
* `postCompaniesCompanyIdWebhooksWebhookIdGenerateHmac` - Generate an HMAC key
* `postCompaniesCompanyIdWebhooksWebhookIdTest` - Test a webhook

### webhooksMerchantLevel

* `deleteMerchantsMerchantIdWebhooksWebhookId` - Remove a webhook
* `getMerchantsMerchantIdWebhooks` - List all webhooks
* `getMerchantsMerchantIdWebhooksWebhookId` - Get a webhook
* `patchMerchantsMerchantIdWebhooksWebhookId` - Update a webhook
* `postMerchantsMerchantIdWebhooks` - Set up a webhook
* `postMerchantsMerchantIdWebhooksWebhookIdGenerateHmac` - Generate an HMAC key
* `postMerchantsMerchantIdWebhooksWebhookIdTest` - Test a webhook
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
