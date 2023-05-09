# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/biapi.pro/2.0/go
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
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Administration.DeleteClientsIDClient(ctx, operations.DeleteClientsIDClientRequest{
        Expand: sdk.String("corrupti"),
        IDClient: 592845,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Client != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Administration](docs/administration/README.md)

* [DeleteClientsIDClient](docs/administration/README.md#deleteclientsidclient) - Delete a client
* [DeleteClientsIDClientLogo](docs/administration/README.md#deleteclientsidclientlogo) - Delete the client logo
* [DeleteWebhooks](docs/administration/README.md#deletewebhooks) - Deletes all webhooks
* [DeleteWebhooksAuth](docs/administration/README.md#deletewebhooksauth) - Deletes all webhook authentication types
* [DeleteWebhooksAuthIDAuth](docs/administration/README.md#deletewebhooksauthidauth) - Deletes the webhook authentication type
* [DeleteWebhooksIDWebhook](docs/administration/README.md#deletewebhooksidwebhook) - Deletes a webhook
* [DeleteWebhooksIDWebhookAddToData](docs/administration/README.md#deletewebhooksidwebhookaddtodata) - delete all entries
* [DeleteWebhooksIDWebhookAddToDataKey](docs/administration/README.md#deletewebhooksidwebhookaddtodatakey) - delete the requested entry
* [GetClients](docs/administration/README.md#getclients) - List clients
* [GetClientsIDClient](docs/administration/README.md#getclientsidclient) - Get information about a client
* [GetConfig](docs/administration/README.md#getconfig) - Get configuration of the API.
* [GetConfigLogs](docs/administration/README.md#getconfiglogs) - Get configuration change history of the API.
* [GetMonitoring](docs/administration/README.md#getmonitoring) - get performances stats on this instance
* [GetPublickey](docs/administration/README.md#getpublickey) - Get public encryption key of the API.
* [GetWebhooks](docs/administration/README.md#getwebhooks) - Get webhooks
* [GetWebhooksAuth](docs/administration/README.md#getwebhooksauth) - Get webhooks authentication types
* [GetWebhooksIDWebhookAddToData](docs/administration/README.md#getwebhooksidwebhookaddtodata) - retrieve the list of the value to add in webhooks when sending the requested webhook
* [GetWebhooksIDWebhookAddToDataKey](docs/administration/README.md#getwebhooksidwebhookaddtodatakey) - retrieve the value to add in the requested webhook for the requested name
* [GetWebhooksIDWebhookLogs](docs/administration/README.md#getwebhooksidwebhooklogs) - Get webhooks logs.
* [PostClients](docs/administration/README.md#postclients) - Create a client
* [PostClientsIDClientLogo](docs/administration/README.md#postclientsidclientlogo) - Update the client logo
* [PostConfig](docs/administration/README.md#postconfig) - Insert/update configuration key(s)/value(s) on the API.
* [PostTestSync](docs/administration/README.md#posttestsync) - Test synchronization on a random connection.
* [PostTestWebhooks](docs/administration/README.md#posttestwebhooks) - Test synchronization on a random connection.
* [PostWebhooks](docs/administration/README.md#postwebhooks) - Adds a new webhook
* [PostWebhooksAuth](docs/administration/README.md#postwebhooksauth) - Adds a new webhook authentication type
* [PostWebhooksAuthIDAuth](docs/administration/README.md#postwebhooksauthidauth) - Updates the webhook authentication type
* [PostWebhooksIDWebhook](docs/administration/README.md#postwebhooksidwebhook) - Updates a webhook
* [PostWebhooksIDWebhookAddToData](docs/administration/README.md#postwebhooksidwebhookaddtodata) - Setup a field to store in user config when calling the endpoint
* [PostWebhooksIDWebhookAddToDataKey](docs/administration/README.md#postwebhooksidwebhookaddtodatakey) - upate the requested field to store in user config when calling the endpoint
* [PutClientsIDClient](docs/administration/README.md#putclientsidclient) - Update a client
* [PutWebhooksAuthIDAuth](docs/administration/README.md#putwebhooksauthidauth) - Updates the webhook authentication type
* [PutWebhooksIDWebhook](docs/administration/README.md#putwebhooksidwebhook) - Updates a webhook

### [Authentication](docs/authentication/README.md)

* [DeleteAuthToken](docs/authentication/README.md#deleteauthtoken) - Remove user access
* [DeleteUsersIDUser](docs/authentication/README.md#deleteusersiduser) - Delete the user
* [GetAuthTokenCode](docs/authentication/README.md#getauthtokencode) - Generate a user temporary token
* [GetCertificateType](docs/authentication/README.md#getcertificatetype) - Get the latest certificate of a type
* [GetUsersIDUser](docs/authentication/README.md#getusersiduser) - Get a user
* [GetWebauth](docs/authentication/README.md#getwebauth) - First step to establish an oAuth2 connection.
* [PostAdminJwt](docs/authentication/README.md#postadminjwt) - Generate a jwt manage token
* [PostAuthInit](docs/authentication/README.md#postauthinit) - Create a new anonymous user
* [PostAuthJwt](docs/authentication/README.md#postauthjwt) - Generate a user jwt token
* [PostAuthRenew](docs/authentication/README.md#postauthrenew) - Get a new access token given an user id and client credentials
* [PostAuthTokenAccess](docs/authentication/README.md#postauthtokenaccess) - Transform a temporary code to a access_token
* [PostUsersIDUserToken](docs/authentication/README.md#postusersidusertoken) - Create a token

### [Banks](docs/banks/README.md)

* [DeleteBanksCategoriesIDCategory](docs/banks/README.md#deletebankscategoriesidcategory) - Delete the supplied category
* [DeleteCategoriesKeywordsIDKeyword](docs/banks/README.md#deletecategorieskeywordsidkeyword) - Delete a particular key-value pair on a transaction.
* [DeleteConnectionsIDConnectionSourcesIDSource](docs/banks/README.md#deleteconnectionsidconnectionsourcesidsource) - Disable a connection source
* [DeleteConnectorsIDConnectorLogosIDLogo](docs/banks/README.md#deleteconnectorsidconnectorlogosidlogo) - Delete a single Logo object.
* [DeleteUsersIDUserAccountsIDAccountTransactionsclustersIDTransactionscluster](docs/banks/README.md#deleteusersiduseraccountsidaccounttransactionsclustersidtransactionscluster) - Delete a clustered transaction
* [DeleteUsersIDUserCategoriesFullIDFull](docs/banks/README.md#deleteusersidusercategoriesfullidfull) - Delete a user-created transaction category
* [DeleteUsersIDUserConnections](docs/banks/README.md#deleteusersiduserconnections) - Delete all connections
* [DeleteUsersIDUserConnectionsIDConnection](docs/banks/README.md#deleteusersiduserconnectionsidconnection) - Delete a connection.
* [DeleteUsersIDUserConnectionsIDConnectionAccounts](docs/banks/README.md#deleteusersiduserconnectionsidconnectionaccounts) - Delete all accounts
* [DeleteUsersIDUserConnectionsIDConnectionAccountsIDAccount](docs/banks/README.md#deleteusersiduserconnectionsidconnectionaccountsidaccount) - Delete an account.
* [DeleteUsersIDUserConnectionsIDConnectionAccountsIDAccountTransactions](docs/banks/README.md#deleteusersiduserconnectionsidconnectionaccountsidaccounttransactions) - Delete transactions
* [DeleteUsersIDUserConnectionsIDConnectionAccountsIDAccountTransactionsIDTransactionInformations](docs/banks/README.md#deleteusersiduserconnectionsidconnectionaccountsidaccounttransactionsidtransactioninformations) - Delete all arbitrary key-value pairs of a transaction
* [DeleteUsersIDUserConnectionsIDConnectionAccountsIDAccountTransactionsIDTransactionInformationsIDInformation](docs/banks/README.md#deleteusersiduserconnectionsidconnectionaccountsidaccounttransactionsidtransactioninformationsidinformation) - Delete a particular key-value pair on a transaction.
* [DeleteUsersIDUserConnectionsIDConnectionAccountsIDAccountTransactionsclustersIDTransactionscluster](docs/banks/README.md#deleteusersiduserconnectionsidconnectionaccountsidaccounttransactionsclustersidtransactionscluster) - Delete a clustered transaction
* [DeleteUsersIDUserConnectionsIDConnectionSourcesIDSource](docs/banks/README.md#deleteusersiduserconnectionsidconnectionsourcesidsource) - Disable a connection source
* [DeleteUsersIDUserConnectionsIDConnectionTransactionsclustersIDTransactionscluster](docs/banks/README.md#deleteusersiduserconnectionsidconnectiontransactionsclustersidtransactionscluster) - Delete a clustered transaction
* [DeleteUsersIDUserTransactionsclustersIDTransactionscluster](docs/banks/README.md#deleteusersidusertransactionsclustersidtransactionscluster) - Delete a clustered transaction
* [GetAccountTypes](docs/banks/README.md#getaccounttypes) - Get account types
* [GetAccountTypesIDAccountType](docs/banks/README.md#getaccounttypesidaccounttype) - Get an account type
* [GetBanks](docs/banks/README.md#getbanks) - Get list of connectors
* [GetBanksIDBank](docs/banks/README.md#getbanksidbank) - Get a connector
* [GetBanksIDConnectorConnections](docs/banks/README.md#getbanksidconnectorconnections) - Get a subset of id_connection for a given bank. Different selection methode are possible
* [GetBanksIDConnectorLogos](docs/banks/README.md#getbanksidconnectorlogos) - Get all links to the files associated with this connector.
* [GetBanksIDConnectorLogosMain](docs/banks/README.md#getbanksidconnectorlogosmain) - Get all links to the files associated with this connector.
* [GetBanksIDConnectorLogosThumbnail](docs/banks/README.md#getbanksidconnectorlogosthumbnail) - Get all links to the files associated with this connector.
* [GetBanksIDConnectorSources](docs/banks/README.md#getbanksidconnectorsources) - Get list of connector sources
* [GetBanksIDConnectorSourcesIDConnectorSourceFields](docs/banks/README.md#getbanksidconnectorsourcesidconnectorsourcefields) - Get fields specific to a domain and a source
* [GetBanksIDConnectorSourcesIDSource](docs/banks/README.md#getbanksidconnectorsourcesidsource) - Get the connector source
* [GetCategories](docs/banks/README.md#getcategories) - Get all categories
* [GetConnections](docs/banks/README.md#getconnections) - Get connections without a user
* [GetConnectionsIDConnectionLogs](docs/banks/README.md#getconnectionsidconnectionlogs) - Get connection logs
* [GetConnectionsIDConnectionSources](docs/banks/README.md#getconnectionsidconnectionsources) - Get connection sources
* [GetConnectors](docs/banks/README.md#getconnectors) - Get list of connectors
* [GetConnectorsIDConnector](docs/banks/README.md#getconnectorsidconnector) - Get a connector
* [GetConnectorsIDConnectorLogos](docs/banks/README.md#getconnectorsidconnectorlogos) - Get all links to the files associated with this connector.
* [GetConnectorsIDConnectorLogosMain](docs/banks/README.md#getconnectorsidconnectorlogosmain) - Get all links to the files associated with this connector.
* [GetConnectorsIDConnectorLogosThumbnail](docs/banks/README.md#getconnectorsidconnectorlogosthumbnail) - Get all links to the files associated with this connector.
* [GetConnectorsIDConnectorSources](docs/banks/README.md#getconnectorsidconnectorsources) - Get list of connector sources
* [GetConnectorsIDConnectorSourcesIDConnectorSourceFields](docs/banks/README.md#getconnectorsidconnectorsourcesidconnectorsourcefields) - Get fields specific to a domain and a source
* [GetConnectorsIDConnectorSourcesIDSource](docs/banks/README.md#getconnectorsidconnectorsourcesidsource) - Get the connector source
* [GetInvoicing](docs/banks/README.md#getinvoicing) - Get invoicing data for a given period (default is the current month).
* [GetLogs](docs/banks/README.md#getlogs) - Get connection logs
* [GetProviders](docs/banks/README.md#getproviders) - Get list of connectors
* [GetProvidersIDConnectorConnections](docs/banks/README.md#getprovidersidconnectorconnections) - Get a random subset of provider's id_connection
* [GetProvidersIDConnectorLogos](docs/banks/README.md#getprovidersidconnectorlogos) - Get all links to the files associated with this connector.
* [GetProvidersIDConnectorLogosMain](docs/banks/README.md#getprovidersidconnectorlogosmain) - Get all links to the files associated with this connector.
* [GetProvidersIDConnectorLogosThumbnail](docs/banks/README.md#getprovidersidconnectorlogosthumbnail) - Get all links to the files associated with this connector.
* [GetProvidersIDConnectorSources](docs/banks/README.md#getprovidersidconnectorsources) - Get list of connector sources
* [GetProvidersIDConnectorSourcesIDConnectorSourceFields](docs/banks/README.md#getprovidersidconnectorsourcesidconnectorsourcefields) - Get fields specific to a domain and a source
* [GetProvidersIDConnectorSourcesIDSource](docs/banks/README.md#getprovidersidconnectorsourcesidsource) - Get the connector source
* [GetProvidersIDProvider](docs/banks/README.md#getprovidersidprovider) - Get a connector
* [GetPsd2Registrations](docs/banks/README.md#getpsd2registrations) - Get details on all psd2 registrations
* [GetPsd2RegistrationsIDPsd2Registration](docs/banks/README.md#getpsd2registrationsidpsd2registration) - Get details for a given psd2 registration
* [GetPsd2RegistrationsIDPsd2registrationLogs](docs/banks/README.md#getpsd2registrationsidpsd2registrationlogs) - Get psd2 registration logs.
* [GetUsersIDUserAccountTypes](docs/banks/README.md#getusersiduseraccounttypes) - Get account types
* [GetUsersIDUserAccountTypesIDAccountType](docs/banks/README.md#getusersiduseraccounttypesidaccounttype) - Get an account type
* [GetUsersIDUserAccountsIDAccountCategories](docs/banks/README.md#getusersiduseraccountsidaccountcategories) - Get the category
* [GetUsersIDUserAccountsIDAccountTransactionsclusters](docs/banks/README.md#getusersiduseraccountsidaccounttransactionsclusters) - Get clustered transactions
* [GetUsersIDUserAlerts](docs/banks/README.md#getusersiduseralerts) - Get alerts
* [GetUsersIDUserCategories](docs/banks/README.md#getusersidusercategories) - Get the category
* [GetUsersIDUserCategoriesFull](docs/banks/README.md#getusersidusercategoriesfull) - Get the category
* [GetUsersIDUserConnections](docs/banks/README.md#getusersiduserconnections) - Get connections
* [GetUsersIDUserConnectionsIDConnectionAccounts](docs/banks/README.md#getusersiduserconnectionsidconnectionaccounts) - Get accounts list.
* [GetUsersIDUserConnectionsIDConnectionAccountsIDAccountCategories](docs/banks/README.md#getusersiduserconnectionsidconnectionaccountsidaccountcategories) - Get the category
* [GetUsersIDUserConnectionsIDConnectionAccountsIDAccountDelta](docs/banks/README.md#getusersiduserconnectionsidconnectionaccountsidaccountdelta) - Get deltas of accounts
* [GetUsersIDUserConnectionsIDConnectionAccountsIDAccountLogs](docs/banks/README.md#getusersiduserconnectionsidconnectionaccountsidaccountlogs) - Get accounts logs.
* [GetUsersIDUserConnectionsIDConnectionAccountsIDAccountSources](docs/banks/README.md#getusersiduserconnectionsidconnectionaccountsidaccountsources) - Get account sources
* [GetUsersIDUserConnectionsIDConnectionAccountsIDAccountTransactions](docs/banks/README.md#getusersiduserconnectionsidconnectionaccountsidaccounttransactions) - Get transactions
* [GetUsersIDUserConnectionsIDConnectionAccountsIDAccountTransactionsIDTransactionInformations](docs/banks/README.md#getusersiduserconnectionsidconnectionaccountsidaccounttransactionsidtransactioninformations) - List all arbitrary key-value pairs on a transaction
* [GetUsersIDUserConnectionsIDConnectionAccountsIDAccountTransactionsIDTransactionInformationsIDInformation](docs/banks/README.md#getusersiduserconnectionsidconnectionaccountsidaccounttransactionsidtransactioninformationsidinformation) - Get a particular arbitrary key-value pair on a transaction
* [GetUsersIDUserConnectionsIDConnectionAccountsIDAccountTransactionsclusters](docs/banks/README.md#getusersiduserconnectionsidconnectionaccountsidaccounttransactionsclusters) - Get clustered transactions
* [GetUsersIDUserConnectionsIDConnectionInformations](docs/banks/README.md#getusersiduserconnectionsidconnectioninformations) - Get connection additionnal informations
* [GetUsersIDUserConnectionsIDConnectionLogs](docs/banks/README.md#getusersiduserconnectionsidconnectionlogs) - Get connection logs
* [GetUsersIDUserConnectionsIDConnectionSources](docs/banks/README.md#getusersiduserconnectionsidconnectionsources) - Get connection sources
* [GetUsersIDUserConnectionsIDConnectionTransactionsclusters](docs/banks/README.md#getusersiduserconnectionsidconnectiontransactionsclusters) - Get clustered transactions
* [GetUsersIDUserForecast](docs/banks/README.md#getusersiduserforecast) - Get forecast
* [GetUsersIDUserLogs](docs/banks/README.md#getusersiduserlogs) - Get connection logs
* [GetUsersIDUserTransactionsclusters](docs/banks/README.md#getusersidusertransactionsclusters) - Get clustered transactions
* [PostBanksCategories](docs/banks/README.md#postbankscategories) - Create bank categories
* [PostBanksCategoriesIDCategory](docs/banks/README.md#postbankscategoriesidcategory) - Edit a bank categories
* [PostCategoriesKeywords](docs/banks/README.md#postcategorieskeywords) - Add a new keyword associated with a category in the database.
* [PostCategorize](docs/banks/README.md#postcategorize) - categorize transactions without storing them
* [PostConnectionsIDConnectionSourcesIDSource](docs/banks/README.md#postconnectionsidconnectionsourcesidsource) - "
* [PostConnectors](docs/banks/README.md#postconnectors) - Request a new connector
* [PostConnectorsIDConnectorLogos](docs/banks/README.md#postconnectorsidconnectorlogos) - Create a connector Logo
* [PostUsersIDUserAccountsIDAccountTransactionsclusters](docs/banks/README.md#postusersiduseraccountsidaccounttransactionsclusters) - Create clustered transaction
* [PostUsersIDUserCategoriesFull](docs/banks/README.md#postusersidusercategoriesfull) - Create a new transaction category
* [PostUsersIDUserConnections](docs/banks/README.md#postusersiduserconnections) - Add a new connection.
* [PostUsersIDUserConnectionsIDConnection](docs/banks/README.md#postusersiduserconnectionsidconnection) - Update a connection.
* [PostUsersIDUserConnectionsIDConnectionAccounts](docs/banks/README.md#postusersiduserconnectionsidconnectionaccounts) - Create an account
* [PostUsersIDUserConnectionsIDConnectionAccountsIDAccountTransactions](docs/banks/README.md#postusersiduserconnectionsidconnectionaccountsidaccounttransactions) - Create transactions
* [PostUsersIDUserConnectionsIDConnectionAccountsIDAccountTransactionsclusters](docs/banks/README.md#postusersiduserconnectionsidconnectionaccountsidaccounttransactionsclusters) - Create clustered transaction
* [PostUsersIDUserConnectionsIDConnectionSourcesIDSource](docs/banks/README.md#postusersiduserconnectionsidconnectionsourcesidsource) - "
* [PostUsersIDUserConnectionsIDConnectionTransactionsclusters](docs/banks/README.md#postusersiduserconnectionsidconnectiontransactionsclusters) - Create clustered transaction
* [PostUsersIDUserTransactionsclusters](docs/banks/README.md#postusersidusertransactionsclusters) - Create clustered transaction
* [PutConnectionsIDConnectionSourcesIDSource](docs/banks/README.md#putconnectionsidconnectionsourcesidsource) - Update connection source
* [PutConnectors](docs/banks/README.md#putconnectors) - Enable/disable several connectors
* [PutConnectorsIDConnector](docs/banks/README.md#putconnectorsidconnector) - Edit the provided connector
* [PutConnectorsIDConnectorLogos](docs/banks/README.md#putconnectorsidconnectorlogos) - Create or Update a connector Logo
* [PutConnectorsIDConnectorLogosIDLogo](docs/banks/README.md#putconnectorsidconnectorlogosidlogo) - Create or Update a connector Logo.
* [PutConnectorsIDConnectorSources](docs/banks/README.md#putconnectorsidconnectorsources) - Edit several connector sources
* [PutConnectorsIDConnectorSourcesIDSource](docs/banks/README.md#putconnectorsidconnectorsourcesidsource) - Edit the provided connector source
* [PutUsersIDUserAccountsIDAccountTransactionsclustersIDTransactionscluster](docs/banks/README.md#putusersiduseraccountsidaccounttransactionsclustersidtransactionscluster) - Edit a clustered transaction
* [PutUsersIDUserCategoriesFullIDFull](docs/banks/README.md#putusersidusercategoriesfullidfull) - Modify a user-created category
* [PutUsersIDUserConnectionsIDConnection](docs/banks/README.md#putusersiduserconnectionsidconnection) - Force synchronisation of a connection.
* [PutUsersIDUserConnectionsIDConnectionAccounts](docs/banks/README.md#putusersiduserconnectionsidconnectionaccounts) - Update many accounts at once
* [PutUsersIDUserConnectionsIDConnectionAccountsIDAccount](docs/banks/README.md#putusersiduserconnectionsidconnectionaccountsidaccount) - Update an account
* [PutUsersIDUserConnectionsIDConnectionAccountsIDAccountTransactionsIDTransaction](docs/banks/README.md#putusersiduserconnectionsidconnectionaccountsidaccounttransactionsidtransaction) - Edit a transaction meta-data
* [PutUsersIDUserConnectionsIDConnectionAccountsIDAccountTransactionsIDTransactionInformations](docs/banks/README.md#putusersiduserconnectionsidconnectionaccountsidaccounttransactionsidtransactioninformations) - Add or edit transaction arbitrary key-value pairs
* [PutUsersIDUserConnectionsIDConnectionAccountsIDAccountTransactionsclustersIDTransactionscluster](docs/banks/README.md#putusersiduserconnectionsidconnectionaccountsidaccounttransactionsclustersidtransactionscluster) - Edit a clustered transaction
* [PutUsersIDUserConnectionsIDConnectionSourcesIDSource](docs/banks/README.md#putusersiduserconnectionsidconnectionsourcesidsource) - Update connection source
* [PutUsersIDUserConnectionsIDConnectionTransactionsclustersIDTransactionscluster](docs/banks/README.md#putusersiduserconnectionsidconnectiontransactionsclustersidtransactionscluster) - Edit a clustered transaction
* [PutUsersIDUserTransactionsclustersIDTransactionscluster](docs/banks/README.md#putusersidusertransactionsclustersidtransactionscluster) - Edit a clustered transaction

### [Connections](docs/connections/README.md)

* [DeleteConnectionsIDConnectionSourcesIDSource](docs/connections/README.md#deleteconnectionsidconnectionsourcesidsource) - Disable a connection source
* [DeleteUsersIDUserConnections](docs/connections/README.md#deleteusersiduserconnections) - Delete all connections
* [DeleteUsersIDUserConnectionsIDConnection](docs/connections/README.md#deleteusersiduserconnectionsidconnection) - Delete a connection.
* [DeleteUsersIDUserConnectionsIDConnectionSourcesIDSource](docs/connections/README.md#deleteusersiduserconnectionsidconnectionsourcesidsource) - Disable a connection source
* [GetBanks](docs/connections/README.md#getbanks) - Get list of connectors
* [GetBanksIDBank](docs/connections/README.md#getbanksidbank) - Get a connector
* [GetBanksIDConnectorConnections](docs/connections/README.md#getbanksidconnectorconnections) - Get a subset of id_connection for a given bank. Different selection methode are possible
* [GetBanksIDConnectorSources](docs/connections/README.md#getbanksidconnectorsources) - Get list of connector sources
* [GetBanksIDConnectorSourcesIDConnectorSourceFields](docs/connections/README.md#getbanksidconnectorsourcesidconnectorsourcefields) - Get fields specific to a domain and a source
* [GetBanksIDConnectorSourcesIDSource](docs/connections/README.md#getbanksidconnectorsourcesidsource) - Get the connector source
* [GetConnections](docs/connections/README.md#getconnections) - Get connections without a user
* [GetConnectionsIDConnectionLogs](docs/connections/README.md#getconnectionsidconnectionlogs) - Get connection logs
* [GetConnectionsIDConnectionSources](docs/connections/README.md#getconnectionsidconnectionsources) - Get connection sources
* [GetConnectors](docs/connections/README.md#getconnectors) - Get list of connectors
* [GetConnectorsIDConnector](docs/connections/README.md#getconnectorsidconnector) - Get a connector
* [GetConnectorsIDConnectorSources](docs/connections/README.md#getconnectorsidconnectorsources) - Get list of connector sources
* [GetConnectorsIDConnectorSourcesIDConnectorSourceFields](docs/connections/README.md#getconnectorsidconnectorsourcesidconnectorsourcefields) - Get fields specific to a domain and a source
* [GetConnectorsIDConnectorSourcesIDSource](docs/connections/README.md#getconnectorsidconnectorsourcesidsource) - Get the connector source
* [GetLogs](docs/connections/README.md#getlogs) - Get connection logs
* [GetProviders](docs/connections/README.md#getproviders) - Get list of connectors
* [GetProvidersIDConnectorConnections](docs/connections/README.md#getprovidersidconnectorconnections) - Get a random subset of provider's id_connection
* [GetProvidersIDConnectorSources](docs/connections/README.md#getprovidersidconnectorsources) - Get list of connector sources
* [GetProvidersIDConnectorSourcesIDConnectorSourceFields](docs/connections/README.md#getprovidersidconnectorsourcesidconnectorsourcefields) - Get fields specific to a domain and a source
* [GetProvidersIDConnectorSourcesIDSource](docs/connections/README.md#getprovidersidconnectorsourcesidsource) - Get the connector source
* [GetProvidersIDProvider](docs/connections/README.md#getprovidersidprovider) - Get a connector
* [GetUsersIDUserConnections](docs/connections/README.md#getusersiduserconnections) - Get connections
* [GetUsersIDUserConnectionsIDConnectionInformations](docs/connections/README.md#getusersiduserconnectionsidconnectioninformations) - Get connection additionnal informations
* [GetUsersIDUserConnectionsIDConnectionLogs](docs/connections/README.md#getusersiduserconnectionsidconnectionlogs) - Get connection logs
* [GetUsersIDUserConnectionsIDConnectionSources](docs/connections/README.md#getusersiduserconnectionsidconnectionsources) - Get connection sources
* [GetUsersIDUserLogs](docs/connections/README.md#getusersiduserlogs) - Get connection logs
* [PostConnectionsIDConnectionSourcesIDSource](docs/connections/README.md#postconnectionsidconnectionsourcesidsource) - "
* [PostConnectors](docs/connections/README.md#postconnectors) - Request a new connector
* [PostUsersIDUserConnections](docs/connections/README.md#postusersiduserconnections) - Add a new connection.
* [PostUsersIDUserConnectionsIDConnection](docs/connections/README.md#postusersiduserconnectionsidconnection) - Update a connection.
* [PostUsersIDUserConnectionsIDConnectionSourcesIDSource](docs/connections/README.md#postusersiduserconnectionsidconnectionsourcesidsource) - "
* [PutConnectionsIDConnectionSourcesIDSource](docs/connections/README.md#putconnectionsidconnectionsourcesidsource) - Update connection source
* [PutConnectorsIDConnectorSources](docs/connections/README.md#putconnectorsidconnectorsources) - Edit several connector sources
* [PutConnectorsIDConnectorSourcesIDSource](docs/connections/README.md#putconnectorsidconnectorsourcesidsource) - Edit the provided connector source
* [PutUsersIDUserConnectionsIDConnection](docs/connections/README.md#putusersiduserconnectionsidconnection) - Force synchronisation of a connection.
* [PutUsersIDUserConnectionsIDConnectionSourcesIDSource](docs/connections/README.md#putusersiduserconnectionsidconnectionsourcesidsource) - Update connection source

### [Pfm](docs/pfm/README.md)

* [DeleteAuthToken](docs/pfm/README.md#deleteauthtoken) - Remove user access
* [GetUsersIDUser](docs/pfm/README.md#getusersiduser) - Get a user
* [GetUsersIDUserForecast](docs/pfm/README.md#getusersiduserforecast) - Get forecast
* [GetUsersIDUserProfiles](docs/pfm/README.md#getusersiduserprofiles) - Get profiles
* [GetUsersIDUserProfilesMain](docs/pfm/README.md#getusersiduserprofilesmain) - Get the main profile
* [GetUsersIDUserProfilesIDProfile](docs/pfm/README.md#getusersiduserprofilesidprofile) - Get a profile
* [PostAuthToken](docs/pfm/README.md#postauthtoken) - Login to API with credentials

### [Providers](docs/providers/README.md)

* [DeleteConnectionsIDConnectionSourcesIDSource](docs/providers/README.md#deleteconnectionsidconnectionsourcesidsource) - Disable a connection source
* [DeleteConnectorsIDConnectorLogosIDLogo](docs/providers/README.md#deleteconnectorsidconnectorlogosidlogo) - Delete a single Logo object.
* [DeleteUsersIDUserConnections](docs/providers/README.md#deleteusersiduserconnections) - Delete all connections
* [DeleteUsersIDUserConnectionsIDConnection](docs/providers/README.md#deleteusersiduserconnectionsidconnection) - Delete a connection.
* [DeleteUsersIDUserConnectionsIDConnectionSourcesIDSource](docs/providers/README.md#deleteusersiduserconnectionsidconnectionsourcesidsource) - Disable a connection source
* [GetBanks](docs/providers/README.md#getbanks) - Get list of connectors
* [GetBanksIDBank](docs/providers/README.md#getbanksidbank) - Get a connector
* [GetBanksIDConnectorLogos](docs/providers/README.md#getbanksidconnectorlogos) - Get all links to the files associated with this connector.
* [GetBanksIDConnectorLogosMain](docs/providers/README.md#getbanksidconnectorlogosmain) - Get all links to the files associated with this connector.
* [GetBanksIDConnectorLogosThumbnail](docs/providers/README.md#getbanksidconnectorlogosthumbnail) - Get all links to the files associated with this connector.
* [GetBanksIDConnectorSources](docs/providers/README.md#getbanksidconnectorsources) - Get list of connector sources
* [GetBanksIDConnectorSourcesIDSource](docs/providers/README.md#getbanksidconnectorsourcesidsource) - Get the connector source
* [GetConnections](docs/providers/README.md#getconnections) - Get connections without a user
* [GetConnectionsIDConnectionLogs](docs/providers/README.md#getconnectionsidconnectionlogs) - Get connection logs
* [GetConnectionsIDConnectionSources](docs/providers/README.md#getconnectionsidconnectionsources) - Get connection sources
* [GetConnectors](docs/providers/README.md#getconnectors) - Get list of connectors
* [GetConnectorsIDConnector](docs/providers/README.md#getconnectorsidconnector) - Get a connector
* [GetConnectorsIDConnectorLogos](docs/providers/README.md#getconnectorsidconnectorlogos) - Get all links to the files associated with this connector.
* [GetConnectorsIDConnectorLogosMain](docs/providers/README.md#getconnectorsidconnectorlogosmain) - Get all links to the files associated with this connector.
* [GetConnectorsIDConnectorLogosThumbnail](docs/providers/README.md#getconnectorsidconnectorlogosthumbnail) - Get all links to the files associated with this connector.
* [GetConnectorsIDConnectorSources](docs/providers/README.md#getconnectorsidconnectorsources) - Get list of connector sources
* [GetConnectorsIDConnectorSourcesIDSource](docs/providers/README.md#getconnectorsidconnectorsourcesidsource) - Get the connector source
* [GetLogs](docs/providers/README.md#getlogs) - Get connection logs
* [GetProviders](docs/providers/README.md#getproviders) - Get list of connectors
* [GetProvidersIDConnectorLogos](docs/providers/README.md#getprovidersidconnectorlogos) - Get all links to the files associated with this connector.
* [GetProvidersIDConnectorLogosMain](docs/providers/README.md#getprovidersidconnectorlogosmain) - Get all links to the files associated with this connector.
* [GetProvidersIDConnectorLogosThumbnail](docs/providers/README.md#getprovidersidconnectorlogosthumbnail) - Get all links to the files associated with this connector.
* [GetProvidersIDConnectorSources](docs/providers/README.md#getprovidersidconnectorsources) - Get list of connector sources
* [GetProvidersIDConnectorSourcesIDSource](docs/providers/README.md#getprovidersidconnectorsourcesidsource) - Get the connector source
* [GetProvidersIDProvider](docs/providers/README.md#getprovidersidprovider) - Get a connector
* [GetUsersIDUserConnections](docs/providers/README.md#getusersiduserconnections) - Get connections
* [GetUsersIDUserConnectionsIDConnectionInformations](docs/providers/README.md#getusersiduserconnectionsidconnectioninformations) - Get connection additionnal informations
* [GetUsersIDUserConnectionsIDConnectionLogs](docs/providers/README.md#getusersiduserconnectionsidconnectionlogs) - Get connection logs
* [GetUsersIDUserConnectionsIDConnectionSources](docs/providers/README.md#getusersiduserconnectionsidconnectionsources) - Get connection sources
* [GetUsersIDUserLogs](docs/providers/README.md#getusersiduserlogs) - Get connection logs
* [PostConnectionsIDConnectionSourcesIDSource](docs/providers/README.md#postconnectionsidconnectionsourcesidsource) - "
* [PostConnectors](docs/providers/README.md#postconnectors) - Request a new connector
* [PostConnectorsIDConnectorLogos](docs/providers/README.md#postconnectorsidconnectorlogos) - Create a connector Logo
* [PostUsersIDUserConnections](docs/providers/README.md#postusersiduserconnections) - Add a new connection.
* [PostUsersIDUserConnectionsIDConnection](docs/providers/README.md#postusersiduserconnectionsidconnection) - Update a connection.
* [PostUsersIDUserConnectionsIDConnectionSourcesIDSource](docs/providers/README.md#postusersiduserconnectionsidconnectionsourcesidsource) - "
* [PutConnectionsIDConnectionSourcesIDSource](docs/providers/README.md#putconnectionsidconnectionsourcesidsource) - Update connection source
* [PutConnectorsIDConnectorLogos](docs/providers/README.md#putconnectorsidconnectorlogos) - Create or Update a connector Logo
* [PutConnectorsIDConnectorLogosIDLogo](docs/providers/README.md#putconnectorsidconnectorlogosidlogo) - Create or Update a connector Logo.
* [PutConnectorsIDConnectorSources](docs/providers/README.md#putconnectorsidconnectorsources) - Edit several connector sources
* [PutConnectorsIDConnectorSourcesIDSource](docs/providers/README.md#putconnectorsidconnectorsourcesidsource) - Edit the provided connector source
* [PutUsersIDUserConnectionsIDConnection](docs/providers/README.md#putusersiduserconnectionsidconnection) - Force synchronisation of a connection.
* [PutUsersIDUserConnectionsIDConnectionSourcesIDSource](docs/providers/README.md#putusersiduserconnectionsidconnectionsourcesidsource) - Update connection source

### [Timeline](docs/timeline/README.md)

* [GetIncidents](docs/timeline/README.md#getincidents) - Get incidents logs.

### [Transfer](docs/transfer/README.md)

* [GetWebauth](docs/transfer/README.md#getwebauth) - First step to establish an oAuth2 connection.

### [UsersManagement](docs/usersmanagement/README.md)

* [DeleteUsersIDUser](docs/usersmanagement/README.md#deleteusersiduser) - Delete the user
* [DeleteUsersIDUserConfig](docs/usersmanagement/README.md#deleteusersiduserconfig) - Delete the given user configurations. deletions on keys prefixed by 'biapi.' (except callback_url) are ignored
* [GetUsers](docs/usersmanagement/README.md#getusers) - Get users
* [GetUsersIDUser](docs/usersmanagement/README.md#getusersiduser) - Get a user
* [GetUsersIDUserConfig](docs/usersmanagement/README.md#getusersiduserconfig) - Get configuration of a user.
* [GetUsersIDUserProfiles](docs/usersmanagement/README.md#getusersiduserprofiles) - Get profiles
* [GetUsersIDUserProfilesMain](docs/usersmanagement/README.md#getusersiduserprofilesmain) - Get the main profile
* [GetUsersIDUserProfilesIDProfile](docs/usersmanagement/README.md#getusersiduserprofilesidprofile) - Get a profile
* [PostUsersIDUserConfig](docs/usersmanagement/README.md#postusersiduserconfig) - Change configuration of a user. modifications on keys prefixed by 'biapi.' (except callback_url) are ignored
* [PostUsersIDUserToken](docs/usersmanagement/README.md#postusersidusertoken) - Create a token
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
