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
use \OpenAPI\OpenAPI\Models\Operations\DeleteClientsIdClientRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteClientsIdClientRequest();
    $request->expand = 'corrupti';
    $request->idClient = 592845;

    $response = $sdk->administration->deleteClientsIdClient($request);

    if ($response->client !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [administration](docs/administration/README.md)

* [deleteClientsIdClient](docs/administration/README.md#deleteclientsidclient) - Delete a client
* [deleteClientsIdClientLogo](docs/administration/README.md#deleteclientsidclientlogo) - Delete the client logo
* [deleteWebhooks](docs/administration/README.md#deletewebhooks) - Deletes all webhooks
* [deleteWebhooksAuth](docs/administration/README.md#deletewebhooksauth) - Deletes all webhook authentication types
* [deleteWebhooksAuthIdAuth](docs/administration/README.md#deletewebhooksauthidauth) - Deletes the webhook authentication type
* [deleteWebhooksIdWebhook](docs/administration/README.md#deletewebhooksidwebhook) - Deletes a webhook
* [deleteWebhooksIdWebhookAddToData](docs/administration/README.md#deletewebhooksidwebhookaddtodata) - delete all entries
* [deleteWebhooksIdWebhookAddToDataKey](docs/administration/README.md#deletewebhooksidwebhookaddtodatakey) - delete the requested entry
* [getClients](docs/administration/README.md#getclients) - List clients
* [getClientsIdClient](docs/administration/README.md#getclientsidclient) - Get information about a client
* [getConfig](docs/administration/README.md#getconfig) - Get configuration of the API.
* [getConfigLogs](docs/administration/README.md#getconfiglogs) - Get configuration change history of the API.
* [getMonitoring](docs/administration/README.md#getmonitoring) - get performances stats on this instance
* [getPublickey](docs/administration/README.md#getpublickey) - Get public encryption key of the API.
* [getWebhooks](docs/administration/README.md#getwebhooks) - Get webhooks
* [getWebhooksAuth](docs/administration/README.md#getwebhooksauth) - Get webhooks authentication types
* [getWebhooksIdWebhookAddToData](docs/administration/README.md#getwebhooksidwebhookaddtodata) - retrieve the list of the value to add in webhooks when sending the requested webhook
* [getWebhooksIdWebhookAddToDataKey](docs/administration/README.md#getwebhooksidwebhookaddtodatakey) - retrieve the value to add in the requested webhook for the requested name
* [getWebhooksIdWebhookLogs](docs/administration/README.md#getwebhooksidwebhooklogs) - Get webhooks logs.
* [postClients](docs/administration/README.md#postclients) - Create a client
* [postClientsIdClientLogo](docs/administration/README.md#postclientsidclientlogo) - Update the client logo
* [postConfig](docs/administration/README.md#postconfig) - Insert/update configuration key(s)/value(s) on the API.
* [postTestSync](docs/administration/README.md#posttestsync) - Test synchronization on a random connection.
* [postTestWebhooks](docs/administration/README.md#posttestwebhooks) - Test synchronization on a random connection.
* [postWebhooks](docs/administration/README.md#postwebhooks) - Adds a new webhook
* [postWebhooksAuth](docs/administration/README.md#postwebhooksauth) - Adds a new webhook authentication type
* [postWebhooksAuthIdAuth](docs/administration/README.md#postwebhooksauthidauth) - Updates the webhook authentication type
* [postWebhooksIdWebhook](docs/administration/README.md#postwebhooksidwebhook) - Updates a webhook
* [postWebhooksIdWebhookAddToData](docs/administration/README.md#postwebhooksidwebhookaddtodata) - Setup a field to store in user config when calling the endpoint
* [postWebhooksIdWebhookAddToDataKey](docs/administration/README.md#postwebhooksidwebhookaddtodatakey) - upate the requested field to store in user config when calling the endpoint
* [putClientsIdClient](docs/administration/README.md#putclientsidclient) - Update a client
* [putWebhooksAuthIdAuth](docs/administration/README.md#putwebhooksauthidauth) - Updates the webhook authentication type
* [putWebhooksIdWebhook](docs/administration/README.md#putwebhooksidwebhook) - Updates a webhook

### [authentication](docs/authentication/README.md)

* [deleteAuthToken](docs/authentication/README.md#deleteauthtoken) - Remove user access
* [deleteUsersIdUser](docs/authentication/README.md#deleteusersiduser) - Delete the user
* [getAuthTokenCode](docs/authentication/README.md#getauthtokencode) - Generate a user temporary token
* [getCertificateType](docs/authentication/README.md#getcertificatetype) - Get the latest certificate of a type
* [getUsersIdUser](docs/authentication/README.md#getusersiduser) - Get a user
* [getWebauth](docs/authentication/README.md#getwebauth) - First step to establish an oAuth2 connection.
* [postAdminJwt](docs/authentication/README.md#postadminjwt) - Generate a jwt manage token
* [postAuthInit](docs/authentication/README.md#postauthinit) - Create a new anonymous user
* [postAuthJwt](docs/authentication/README.md#postauthjwt) - Generate a user jwt token
* [postAuthRenew](docs/authentication/README.md#postauthrenew) - Get a new access token given an user id and client credentials
* [postAuthTokenAccess](docs/authentication/README.md#postauthtokenaccess) - Transform a temporary code to a access_token
* [postUsersIdUserToken](docs/authentication/README.md#postusersidusertoken) - Create a token

### [banks](docs/banks/README.md)

* [deleteBanksCategoriesIdCategory](docs/banks/README.md#deletebankscategoriesidcategory) - Delete the supplied category
* [deleteCategoriesKeywordsIdKeyword](docs/banks/README.md#deletecategorieskeywordsidkeyword) - Delete a particular key-value pair on a transaction.
* [deleteConnectionsIdConnectionSourcesIdSource](docs/banks/README.md#deleteconnectionsidconnectionsourcesidsource) - Disable a connection source
* [deleteConnectorsIdConnectorLogosIdLogo](docs/banks/README.md#deleteconnectorsidconnectorlogosidlogo) - Delete a single Logo object.
* [deleteUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionscluster](docs/banks/README.md#deleteusersiduseraccountsidaccounttransactionsclustersidtransactionscluster) - Delete a clustered transaction
* [deleteUsersIdUserCategoriesFullIdFull](docs/banks/README.md#deleteusersidusercategoriesfullidfull) - Delete a user-created transaction category
* [deleteUsersIdUserConnections](docs/banks/README.md#deleteusersiduserconnections) - Delete all connections
* [deleteUsersIdUserConnectionsIdConnection](docs/banks/README.md#deleteusersiduserconnectionsidconnection) - Delete a connection.
* [deleteUsersIdUserConnectionsIdConnectionAccounts](docs/banks/README.md#deleteusersiduserconnectionsidconnectionaccounts) - Delete all accounts
* [deleteUsersIdUserConnectionsIdConnectionAccountsIdAccount](docs/banks/README.md#deleteusersiduserconnectionsidconnectionaccountsidaccount) - Delete an account.
* [deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactions](docs/banks/README.md#deleteusersiduserconnectionsidconnectionaccountsidaccounttransactions) - Delete transactions
* [deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformations](docs/banks/README.md#deleteusersiduserconnectionsidconnectionaccountsidaccounttransactionsidtransactioninformations) - Delete all arbitrary key-value pairs of a transaction
* [deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformation](docs/banks/README.md#deleteusersiduserconnectionsidconnectionaccountsidaccounttransactionsidtransactioninformationsidinformation) - Delete a particular key-value pair on a transaction.
* [deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionscluster](docs/banks/README.md#deleteusersiduserconnectionsidconnectionaccountsidaccounttransactionsclustersidtransactionscluster) - Delete a clustered transaction
* [deleteUsersIdUserConnectionsIdConnectionSourcesIdSource](docs/banks/README.md#deleteusersiduserconnectionsidconnectionsourcesidsource) - Disable a connection source
* [deleteUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionscluster](docs/banks/README.md#deleteusersiduserconnectionsidconnectiontransactionsclustersidtransactionscluster) - Delete a clustered transaction
* [deleteUsersIdUserTransactionsclustersIdTransactionscluster](docs/banks/README.md#deleteusersidusertransactionsclustersidtransactionscluster) - Delete a clustered transaction
* [getAccountTypes](docs/banks/README.md#getaccounttypes) - Get account types
* [getAccountTypesIdAccountType](docs/banks/README.md#getaccounttypesidaccounttype) - Get an account type
* [getBanks](docs/banks/README.md#getbanks) - Get list of connectors
* [getBanksIdBank](docs/banks/README.md#getbanksidbank) - Get a connector
* [getBanksIdConnectorConnections](docs/banks/README.md#getbanksidconnectorconnections) - Get a subset of id_connection for a given bank. Different selection methode are possible
* [getBanksIdConnectorLogos](docs/banks/README.md#getbanksidconnectorlogos) - Get all links to the files associated with this connector.
* [getBanksIdConnectorLogosMain](docs/banks/README.md#getbanksidconnectorlogosmain) - Get all links to the files associated with this connector.
* [getBanksIdConnectorLogosThumbnail](docs/banks/README.md#getbanksidconnectorlogosthumbnail) - Get all links to the files associated with this connector.
* [getBanksIdConnectorSources](docs/banks/README.md#getbanksidconnectorsources) - Get list of connector sources
* [getBanksIdConnectorSourcesIdConnectorSourceFields](docs/banks/README.md#getbanksidconnectorsourcesidconnectorsourcefields) - Get fields specific to a domain and a source
* [getBanksIdConnectorSourcesIdSource](docs/banks/README.md#getbanksidconnectorsourcesidsource) - Get the connector source
* [getCategories](docs/banks/README.md#getcategories) - Get all categories
* [getConnections](docs/banks/README.md#getconnections) - Get connections without a user
* [getConnectionsIdConnectionLogs](docs/banks/README.md#getconnectionsidconnectionlogs) - Get connection logs
* [getConnectionsIdConnectionSources](docs/banks/README.md#getconnectionsidconnectionsources) - Get connection sources
* [getConnectors](docs/banks/README.md#getconnectors) - Get list of connectors
* [getConnectorsIdConnector](docs/banks/README.md#getconnectorsidconnector) - Get a connector
* [getConnectorsIdConnectorLogos](docs/banks/README.md#getconnectorsidconnectorlogos) - Get all links to the files associated with this connector.
* [getConnectorsIdConnectorLogosMain](docs/banks/README.md#getconnectorsidconnectorlogosmain) - Get all links to the files associated with this connector.
* [getConnectorsIdConnectorLogosThumbnail](docs/banks/README.md#getconnectorsidconnectorlogosthumbnail) - Get all links to the files associated with this connector.
* [getConnectorsIdConnectorSources](docs/banks/README.md#getconnectorsidconnectorsources) - Get list of connector sources
* [getConnectorsIdConnectorSourcesIdConnectorSourceFields](docs/banks/README.md#getconnectorsidconnectorsourcesidconnectorsourcefields) - Get fields specific to a domain and a source
* [getConnectorsIdConnectorSourcesIdSource](docs/banks/README.md#getconnectorsidconnectorsourcesidsource) - Get the connector source
* [getInvoicing](docs/banks/README.md#getinvoicing) - Get invoicing data for a given period (default is the current month).
* [getLogs](docs/banks/README.md#getlogs) - Get connection logs
* [getProviders](docs/banks/README.md#getproviders) - Get list of connectors
* [getProvidersIdConnectorConnections](docs/banks/README.md#getprovidersidconnectorconnections) - Get a random subset of provider's id_connection
* [getProvidersIdConnectorLogos](docs/banks/README.md#getprovidersidconnectorlogos) - Get all links to the files associated with this connector.
* [getProvidersIdConnectorLogosMain](docs/banks/README.md#getprovidersidconnectorlogosmain) - Get all links to the files associated with this connector.
* [getProvidersIdConnectorLogosThumbnail](docs/banks/README.md#getprovidersidconnectorlogosthumbnail) - Get all links to the files associated with this connector.
* [getProvidersIdConnectorSources](docs/banks/README.md#getprovidersidconnectorsources) - Get list of connector sources
* [getProvidersIdConnectorSourcesIdConnectorSourceFields](docs/banks/README.md#getprovidersidconnectorsourcesidconnectorsourcefields) - Get fields specific to a domain and a source
* [getProvidersIdConnectorSourcesIdSource](docs/banks/README.md#getprovidersidconnectorsourcesidsource) - Get the connector source
* [getProvidersIdProvider](docs/banks/README.md#getprovidersidprovider) - Get a connector
* [getPsd2Registrations](docs/banks/README.md#getpsd2registrations) - Get details on all psd2 registrations
* [getPsd2RegistrationsIdPsd2Registration](docs/banks/README.md#getpsd2registrationsidpsd2registration) - Get details for a given psd2 registration
* [getPsd2RegistrationsIdPsd2registrationLogs](docs/banks/README.md#getpsd2registrationsidpsd2registrationlogs) - Get psd2 registration logs.
* [getUsersIdUserAccountTypes](docs/banks/README.md#getusersiduseraccounttypes) - Get account types
* [getUsersIdUserAccountTypesIdAccountType](docs/banks/README.md#getusersiduseraccounttypesidaccounttype) - Get an account type
* [getUsersIdUserAccountsIdAccountCategories](docs/banks/README.md#getusersiduseraccountsidaccountcategories) - Get the category
* [getUsersIdUserAccountsIdAccountTransactionsclusters](docs/banks/README.md#getusersiduseraccountsidaccounttransactionsclusters) - Get clustered transactions
* [getUsersIdUserAlerts](docs/banks/README.md#getusersiduseralerts) - Get alerts
* [getUsersIdUserCategories](docs/banks/README.md#getusersidusercategories) - Get the category
* [getUsersIdUserCategoriesFull](docs/banks/README.md#getusersidusercategoriesfull) - Get the category
* [getUsersIdUserConnections](docs/banks/README.md#getusersiduserconnections) - Get connections
* [getUsersIdUserConnectionsIdConnectionAccounts](docs/banks/README.md#getusersiduserconnectionsidconnectionaccounts) - Get accounts list.
* [getUsersIdUserConnectionsIdConnectionAccountsIdAccountCategories](docs/banks/README.md#getusersiduserconnectionsidconnectionaccountsidaccountcategories) - Get the category
* [getUsersIdUserConnectionsIdConnectionAccountsIdAccountDelta](docs/banks/README.md#getusersiduserconnectionsidconnectionaccountsidaccountdelta) - Get deltas of accounts
* [getUsersIdUserConnectionsIdConnectionAccountsIdAccountLogs](docs/banks/README.md#getusersiduserconnectionsidconnectionaccountsidaccountlogs) - Get accounts logs.
* [getUsersIdUserConnectionsIdConnectionAccountsIdAccountSources](docs/banks/README.md#getusersiduserconnectionsidconnectionaccountsidaccountsources) - Get account sources
* [getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactions](docs/banks/README.md#getusersiduserconnectionsidconnectionaccountsidaccounttransactions) - Get transactions
* [getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformations](docs/banks/README.md#getusersiduserconnectionsidconnectionaccountsidaccounttransactionsidtransactioninformations) - List all arbitrary key-value pairs on a transaction
* [getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformation](docs/banks/README.md#getusersiduserconnectionsidconnectionaccountsidaccounttransactionsidtransactioninformationsidinformation) - Get a particular arbitrary key-value pair on a transaction
* [getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclusters](docs/banks/README.md#getusersiduserconnectionsidconnectionaccountsidaccounttransactionsclusters) - Get clustered transactions
* [getUsersIdUserConnectionsIdConnectionInformations](docs/banks/README.md#getusersiduserconnectionsidconnectioninformations) - Get connection additionnal informations
* [getUsersIdUserConnectionsIdConnectionLogs](docs/banks/README.md#getusersiduserconnectionsidconnectionlogs) - Get connection logs
* [getUsersIdUserConnectionsIdConnectionSources](docs/banks/README.md#getusersiduserconnectionsidconnectionsources) - Get connection sources
* [getUsersIdUserConnectionsIdConnectionTransactionsclusters](docs/banks/README.md#getusersiduserconnectionsidconnectiontransactionsclusters) - Get clustered transactions
* [getUsersIdUserForecast](docs/banks/README.md#getusersiduserforecast) - Get forecast
* [getUsersIdUserLogs](docs/banks/README.md#getusersiduserlogs) - Get connection logs
* [getUsersIdUserTransactionsclusters](docs/banks/README.md#getusersidusertransactionsclusters) - Get clustered transactions
* [postBanksCategories](docs/banks/README.md#postbankscategories) - Create bank categories
* [postBanksCategoriesIdCategory](docs/banks/README.md#postbankscategoriesidcategory) - Edit a bank categories
* [postCategoriesKeywords](docs/banks/README.md#postcategorieskeywords) - Add a new keyword associated with a category in the database.
* [postCategorize](docs/banks/README.md#postcategorize) - categorize transactions without storing them
* [postConnectionsIdConnectionSourcesIdSource](docs/banks/README.md#postconnectionsidconnectionsourcesidsource) - "
* [postConnectors](docs/banks/README.md#postconnectors) - Request a new connector
* [postConnectorsIdConnectorLogos](docs/banks/README.md#postconnectorsidconnectorlogos) - Create a connector Logo
* [postUsersIdUserAccountsIdAccountTransactionsclusters](docs/banks/README.md#postusersiduseraccountsidaccounttransactionsclusters) - Create clustered transaction
* [postUsersIdUserCategoriesFull](docs/banks/README.md#postusersidusercategoriesfull) - Create a new transaction category
* [postUsersIdUserConnections](docs/banks/README.md#postusersiduserconnections) - Add a new connection.
* [postUsersIdUserConnectionsIdConnection](docs/banks/README.md#postusersiduserconnectionsidconnection) - Update a connection.
* [postUsersIdUserConnectionsIdConnectionAccounts](docs/banks/README.md#postusersiduserconnectionsidconnectionaccounts) - Create an account
* [postUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactions](docs/banks/README.md#postusersiduserconnectionsidconnectionaccountsidaccounttransactions) - Create transactions
* [postUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclusters](docs/banks/README.md#postusersiduserconnectionsidconnectionaccountsidaccounttransactionsclusters) - Create clustered transaction
* [postUsersIdUserConnectionsIdConnectionSourcesIdSource](docs/banks/README.md#postusersiduserconnectionsidconnectionsourcesidsource) - "
* [postUsersIdUserConnectionsIdConnectionTransactionsclusters](docs/banks/README.md#postusersiduserconnectionsidconnectiontransactionsclusters) - Create clustered transaction
* [postUsersIdUserTransactionsclusters](docs/banks/README.md#postusersidusertransactionsclusters) - Create clustered transaction
* [putConnectionsIdConnectionSourcesIdSource](docs/banks/README.md#putconnectionsidconnectionsourcesidsource) - Update connection source
* [putConnectors](docs/banks/README.md#putconnectors) - Enable/disable several connectors
* [putConnectorsIdConnector](docs/banks/README.md#putconnectorsidconnector) - Edit the provided connector
* [putConnectorsIdConnectorLogos](docs/banks/README.md#putconnectorsidconnectorlogos) - Create or Update a connector Logo
* [putConnectorsIdConnectorLogosIdLogo](docs/banks/README.md#putconnectorsidconnectorlogosidlogo) - Create or Update a connector Logo.
* [putConnectorsIdConnectorSources](docs/banks/README.md#putconnectorsidconnectorsources) - Edit several connector sources
* [putConnectorsIdConnectorSourcesIdSource](docs/banks/README.md#putconnectorsidconnectorsourcesidsource) - Edit the provided connector source
* [putUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionscluster](docs/banks/README.md#putusersiduseraccountsidaccounttransactionsclustersidtransactionscluster) - Edit a clustered transaction
* [putUsersIdUserCategoriesFullIdFull](docs/banks/README.md#putusersidusercategoriesfullidfull) - Modify a user-created category
* [putUsersIdUserConnectionsIdConnection](docs/banks/README.md#putusersiduserconnectionsidconnection) - Force synchronisation of a connection.
* [putUsersIdUserConnectionsIdConnectionAccounts](docs/banks/README.md#putusersiduserconnectionsidconnectionaccounts) - Update many accounts at once
* [putUsersIdUserConnectionsIdConnectionAccountsIdAccount](docs/banks/README.md#putusersiduserconnectionsidconnectionaccountsidaccount) - Update an account
* [putUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransaction](docs/banks/README.md#putusersiduserconnectionsidconnectionaccountsidaccounttransactionsidtransaction) - Edit a transaction meta-data
* [putUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformations](docs/banks/README.md#putusersiduserconnectionsidconnectionaccountsidaccounttransactionsidtransactioninformations) - Add or edit transaction arbitrary key-value pairs
* [putUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionscluster](docs/banks/README.md#putusersiduserconnectionsidconnectionaccountsidaccounttransactionsclustersidtransactionscluster) - Edit a clustered transaction
* [putUsersIdUserConnectionsIdConnectionSourcesIdSource](docs/banks/README.md#putusersiduserconnectionsidconnectionsourcesidsource) - Update connection source
* [putUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionscluster](docs/banks/README.md#putusersiduserconnectionsidconnectiontransactionsclustersidtransactionscluster) - Edit a clustered transaction
* [putUsersIdUserTransactionsclustersIdTransactionscluster](docs/banks/README.md#putusersidusertransactionsclustersidtransactionscluster) - Edit a clustered transaction

### [connections](docs/connections/README.md)

* [deleteConnectionsIdConnectionSourcesIdSource](docs/connections/README.md#deleteconnectionsidconnectionsourcesidsource) - Disable a connection source
* [deleteUsersIdUserConnections](docs/connections/README.md#deleteusersiduserconnections) - Delete all connections
* [deleteUsersIdUserConnectionsIdConnection](docs/connections/README.md#deleteusersiduserconnectionsidconnection) - Delete a connection.
* [deleteUsersIdUserConnectionsIdConnectionSourcesIdSource](docs/connections/README.md#deleteusersiduserconnectionsidconnectionsourcesidsource) - Disable a connection source
* [getBanks](docs/connections/README.md#getbanks) - Get list of connectors
* [getBanksIdBank](docs/connections/README.md#getbanksidbank) - Get a connector
* [getBanksIdConnectorConnections](docs/connections/README.md#getbanksidconnectorconnections) - Get a subset of id_connection for a given bank. Different selection methode are possible
* [getBanksIdConnectorSources](docs/connections/README.md#getbanksidconnectorsources) - Get list of connector sources
* [getBanksIdConnectorSourcesIdConnectorSourceFields](docs/connections/README.md#getbanksidconnectorsourcesidconnectorsourcefields) - Get fields specific to a domain and a source
* [getBanksIdConnectorSourcesIdSource](docs/connections/README.md#getbanksidconnectorsourcesidsource) - Get the connector source
* [getConnections](docs/connections/README.md#getconnections) - Get connections without a user
* [getConnectionsIdConnectionLogs](docs/connections/README.md#getconnectionsidconnectionlogs) - Get connection logs
* [getConnectionsIdConnectionSources](docs/connections/README.md#getconnectionsidconnectionsources) - Get connection sources
* [getConnectors](docs/connections/README.md#getconnectors) - Get list of connectors
* [getConnectorsIdConnector](docs/connections/README.md#getconnectorsidconnector) - Get a connector
* [getConnectorsIdConnectorSources](docs/connections/README.md#getconnectorsidconnectorsources) - Get list of connector sources
* [getConnectorsIdConnectorSourcesIdConnectorSourceFields](docs/connections/README.md#getconnectorsidconnectorsourcesidconnectorsourcefields) - Get fields specific to a domain and a source
* [getConnectorsIdConnectorSourcesIdSource](docs/connections/README.md#getconnectorsidconnectorsourcesidsource) - Get the connector source
* [getLogs](docs/connections/README.md#getlogs) - Get connection logs
* [getProviders](docs/connections/README.md#getproviders) - Get list of connectors
* [getProvidersIdConnectorConnections](docs/connections/README.md#getprovidersidconnectorconnections) - Get a random subset of provider's id_connection
* [getProvidersIdConnectorSources](docs/connections/README.md#getprovidersidconnectorsources) - Get list of connector sources
* [getProvidersIdConnectorSourcesIdConnectorSourceFields](docs/connections/README.md#getprovidersidconnectorsourcesidconnectorsourcefields) - Get fields specific to a domain and a source
* [getProvidersIdConnectorSourcesIdSource](docs/connections/README.md#getprovidersidconnectorsourcesidsource) - Get the connector source
* [getProvidersIdProvider](docs/connections/README.md#getprovidersidprovider) - Get a connector
* [getUsersIdUserConnections](docs/connections/README.md#getusersiduserconnections) - Get connections
* [getUsersIdUserConnectionsIdConnectionInformations](docs/connections/README.md#getusersiduserconnectionsidconnectioninformations) - Get connection additionnal informations
* [getUsersIdUserConnectionsIdConnectionLogs](docs/connections/README.md#getusersiduserconnectionsidconnectionlogs) - Get connection logs
* [getUsersIdUserConnectionsIdConnectionSources](docs/connections/README.md#getusersiduserconnectionsidconnectionsources) - Get connection sources
* [getUsersIdUserLogs](docs/connections/README.md#getusersiduserlogs) - Get connection logs
* [postConnectionsIdConnectionSourcesIdSource](docs/connections/README.md#postconnectionsidconnectionsourcesidsource) - "
* [postConnectors](docs/connections/README.md#postconnectors) - Request a new connector
* [postUsersIdUserConnections](docs/connections/README.md#postusersiduserconnections) - Add a new connection.
* [postUsersIdUserConnectionsIdConnection](docs/connections/README.md#postusersiduserconnectionsidconnection) - Update a connection.
* [postUsersIdUserConnectionsIdConnectionSourcesIdSource](docs/connections/README.md#postusersiduserconnectionsidconnectionsourcesidsource) - "
* [putConnectionsIdConnectionSourcesIdSource](docs/connections/README.md#putconnectionsidconnectionsourcesidsource) - Update connection source
* [putConnectorsIdConnectorSources](docs/connections/README.md#putconnectorsidconnectorsources) - Edit several connector sources
* [putConnectorsIdConnectorSourcesIdSource](docs/connections/README.md#putconnectorsidconnectorsourcesidsource) - Edit the provided connector source
* [putUsersIdUserConnectionsIdConnection](docs/connections/README.md#putusersiduserconnectionsidconnection) - Force synchronisation of a connection.
* [putUsersIdUserConnectionsIdConnectionSourcesIdSource](docs/connections/README.md#putusersiduserconnectionsidconnectionsourcesidsource) - Update connection source

### [pfm](docs/pfm/README.md)

* [deleteAuthToken](docs/pfm/README.md#deleteauthtoken) - Remove user access
* [getUsersIdUser](docs/pfm/README.md#getusersiduser) - Get a user
* [getUsersIdUserForecast](docs/pfm/README.md#getusersiduserforecast) - Get forecast
* [getUsersIdUserProfiles](docs/pfm/README.md#getusersiduserprofiles) - Get profiles
* [getUsersIdUserProfilesMain](docs/pfm/README.md#getusersiduserprofilesmain) - Get the main profile
* [getUsersIdUserProfilesIdProfile](docs/pfm/README.md#getusersiduserprofilesidprofile) - Get a profile
* [postAuthToken](docs/pfm/README.md#postauthtoken) - Login to API with credentials

### [providers](docs/providers/README.md)

* [deleteConnectionsIdConnectionSourcesIdSource](docs/providers/README.md#deleteconnectionsidconnectionsourcesidsource) - Disable a connection source
* [deleteConnectorsIdConnectorLogosIdLogo](docs/providers/README.md#deleteconnectorsidconnectorlogosidlogo) - Delete a single Logo object.
* [deleteUsersIdUserConnections](docs/providers/README.md#deleteusersiduserconnections) - Delete all connections
* [deleteUsersIdUserConnectionsIdConnection](docs/providers/README.md#deleteusersiduserconnectionsidconnection) - Delete a connection.
* [deleteUsersIdUserConnectionsIdConnectionSourcesIdSource](docs/providers/README.md#deleteusersiduserconnectionsidconnectionsourcesidsource) - Disable a connection source
* [getBanks](docs/providers/README.md#getbanks) - Get list of connectors
* [getBanksIdBank](docs/providers/README.md#getbanksidbank) - Get a connector
* [getBanksIdConnectorLogos](docs/providers/README.md#getbanksidconnectorlogos) - Get all links to the files associated with this connector.
* [getBanksIdConnectorLogosMain](docs/providers/README.md#getbanksidconnectorlogosmain) - Get all links to the files associated with this connector.
* [getBanksIdConnectorLogosThumbnail](docs/providers/README.md#getbanksidconnectorlogosthumbnail) - Get all links to the files associated with this connector.
* [getBanksIdConnectorSources](docs/providers/README.md#getbanksidconnectorsources) - Get list of connector sources
* [getBanksIdConnectorSourcesIdSource](docs/providers/README.md#getbanksidconnectorsourcesidsource) - Get the connector source
* [getConnections](docs/providers/README.md#getconnections) - Get connections without a user
* [getConnectionsIdConnectionLogs](docs/providers/README.md#getconnectionsidconnectionlogs) - Get connection logs
* [getConnectionsIdConnectionSources](docs/providers/README.md#getconnectionsidconnectionsources) - Get connection sources
* [getConnectors](docs/providers/README.md#getconnectors) - Get list of connectors
* [getConnectorsIdConnector](docs/providers/README.md#getconnectorsidconnector) - Get a connector
* [getConnectorsIdConnectorLogos](docs/providers/README.md#getconnectorsidconnectorlogos) - Get all links to the files associated with this connector.
* [getConnectorsIdConnectorLogosMain](docs/providers/README.md#getconnectorsidconnectorlogosmain) - Get all links to the files associated with this connector.
* [getConnectorsIdConnectorLogosThumbnail](docs/providers/README.md#getconnectorsidconnectorlogosthumbnail) - Get all links to the files associated with this connector.
* [getConnectorsIdConnectorSources](docs/providers/README.md#getconnectorsidconnectorsources) - Get list of connector sources
* [getConnectorsIdConnectorSourcesIdSource](docs/providers/README.md#getconnectorsidconnectorsourcesidsource) - Get the connector source
* [getLogs](docs/providers/README.md#getlogs) - Get connection logs
* [getProviders](docs/providers/README.md#getproviders) - Get list of connectors
* [getProvidersIdConnectorLogos](docs/providers/README.md#getprovidersidconnectorlogos) - Get all links to the files associated with this connector.
* [getProvidersIdConnectorLogosMain](docs/providers/README.md#getprovidersidconnectorlogosmain) - Get all links to the files associated with this connector.
* [getProvidersIdConnectorLogosThumbnail](docs/providers/README.md#getprovidersidconnectorlogosthumbnail) - Get all links to the files associated with this connector.
* [getProvidersIdConnectorSources](docs/providers/README.md#getprovidersidconnectorsources) - Get list of connector sources
* [getProvidersIdConnectorSourcesIdSource](docs/providers/README.md#getprovidersidconnectorsourcesidsource) - Get the connector source
* [getProvidersIdProvider](docs/providers/README.md#getprovidersidprovider) - Get a connector
* [getUsersIdUserConnections](docs/providers/README.md#getusersiduserconnections) - Get connections
* [getUsersIdUserConnectionsIdConnectionInformations](docs/providers/README.md#getusersiduserconnectionsidconnectioninformations) - Get connection additionnal informations
* [getUsersIdUserConnectionsIdConnectionLogs](docs/providers/README.md#getusersiduserconnectionsidconnectionlogs) - Get connection logs
* [getUsersIdUserConnectionsIdConnectionSources](docs/providers/README.md#getusersiduserconnectionsidconnectionsources) - Get connection sources
* [getUsersIdUserLogs](docs/providers/README.md#getusersiduserlogs) - Get connection logs
* [postConnectionsIdConnectionSourcesIdSource](docs/providers/README.md#postconnectionsidconnectionsourcesidsource) - "
* [postConnectors](docs/providers/README.md#postconnectors) - Request a new connector
* [postConnectorsIdConnectorLogos](docs/providers/README.md#postconnectorsidconnectorlogos) - Create a connector Logo
* [postUsersIdUserConnections](docs/providers/README.md#postusersiduserconnections) - Add a new connection.
* [postUsersIdUserConnectionsIdConnection](docs/providers/README.md#postusersiduserconnectionsidconnection) - Update a connection.
* [postUsersIdUserConnectionsIdConnectionSourcesIdSource](docs/providers/README.md#postusersiduserconnectionsidconnectionsourcesidsource) - "
* [putConnectionsIdConnectionSourcesIdSource](docs/providers/README.md#putconnectionsidconnectionsourcesidsource) - Update connection source
* [putConnectorsIdConnectorLogos](docs/providers/README.md#putconnectorsidconnectorlogos) - Create or Update a connector Logo
* [putConnectorsIdConnectorLogosIdLogo](docs/providers/README.md#putconnectorsidconnectorlogosidlogo) - Create or Update a connector Logo.
* [putConnectorsIdConnectorSources](docs/providers/README.md#putconnectorsidconnectorsources) - Edit several connector sources
* [putConnectorsIdConnectorSourcesIdSource](docs/providers/README.md#putconnectorsidconnectorsourcesidsource) - Edit the provided connector source
* [putUsersIdUserConnectionsIdConnection](docs/providers/README.md#putusersiduserconnectionsidconnection) - Force synchronisation of a connection.
* [putUsersIdUserConnectionsIdConnectionSourcesIdSource](docs/providers/README.md#putusersiduserconnectionsidconnectionsourcesidsource) - Update connection source

### [timeline](docs/timeline/README.md)

* [getIncidents](docs/timeline/README.md#getincidents) - Get incidents logs.

### [transfer](docs/transfer/README.md)

* [getWebauth](docs/transfer/README.md#getwebauth) - First step to establish an oAuth2 connection.

### [usersManagement](docs/usersmanagement/README.md)

* [deleteUsersIdUser](docs/usersmanagement/README.md#deleteusersiduser) - Delete the user
* [deleteUsersIdUserConfig](docs/usersmanagement/README.md#deleteusersiduserconfig) - Delete the given user configurations. deletions on keys prefixed by 'biapi.' (except callback_url) are ignored
* [getUsers](docs/usersmanagement/README.md#getusers) - Get users
* [getUsersIdUser](docs/usersmanagement/README.md#getusersiduser) - Get a user
* [getUsersIdUserConfig](docs/usersmanagement/README.md#getusersiduserconfig) - Get configuration of a user.
* [getUsersIdUserProfiles](docs/usersmanagement/README.md#getusersiduserprofiles) - Get profiles
* [getUsersIdUserProfilesMain](docs/usersmanagement/README.md#getusersiduserprofilesmain) - Get the main profile
* [getUsersIdUserProfilesIdProfile](docs/usersmanagement/README.md#getusersiduserprofilesidprofile) - Get a profile
* [postUsersIdUserConfig](docs/usersmanagement/README.md#postusersiduserconfig) - Change configuration of a user. modifications on keys prefixed by 'biapi.' (except callback_url) are ignored
* [postUsersIdUserToken](docs/usersmanagement/README.md#postusersidusertoken) - Create a token
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
