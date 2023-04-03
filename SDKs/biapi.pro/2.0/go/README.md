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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.DeleteClientsIDClientRequest{
        Expand: "corrupti",
        IDClient: 592845,
    }

    ctx := context.Background()
    res, err := s.Administration.DeleteClientsIDClient(ctx, req)
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


### Administration

* `DeleteClientsIDClient` - Delete a client
* `DeleteClientsIDClientLogo` - Delete the client logo
* `DeleteWebhooks` - Deletes all webhooks
* `DeleteWebhooksAuth` - Deletes all webhook authentication types
* `DeleteWebhooksAuthIDAuth` - Deletes the webhook authentication type
* `DeleteWebhooksIDWebhook` - Deletes a webhook
* `DeleteWebhooksIDWebhookAddToData` - delete all entries
* `DeleteWebhooksIDWebhookAddToDataKey` - delete the requested entry
* `GetClients` - List clients
* `GetClientsIDClient` - Get information about a client
* `GetConfig` - Get configuration of the API.
* `GetConfigLogs` - Get configuration change history of the API.
* `GetMonitoring` - get performances stats on this instance
* `GetPublickey` - Get public encryption key of the API.
* `GetWebhooks` - Get webhooks
* `GetWebhooksAuth` - Get webhooks authentication types
* `GetWebhooksIDWebhookAddToData` - retrieve the list of the value to add in webhooks when sending the requested webhook
* `GetWebhooksIDWebhookAddToDataKey` - retrieve the value to add in the requested webhook for the requested name
* `GetWebhooksIDWebhookLogs` - Get webhooks logs.
* `PostClients` - Create a client
* `PostClientsIDClientLogo` - Update the client logo
* `PostConfig` - Insert/update configuration key(s)/value(s) on the API.
* `PostTestSync` - Test synchronization on a random connection.
* `PostTestWebhooks` - Test synchronization on a random connection.
* `PostWebhooks` - Adds a new webhook
* `PostWebhooksAuth` - Adds a new webhook authentication type
* `PostWebhooksAuthIDAuth` - Updates the webhook authentication type
* `PostWebhooksIDWebhook` - Updates a webhook
* `PostWebhooksIDWebhookAddToData` - Setup a field to store in user config when calling the endpoint
* `PostWebhooksIDWebhookAddToDataKey` - upate the requested field to store in user config when calling the endpoint
* `PutClientsIDClient` - Update a client
* `PutWebhooksAuthIDAuth` - Updates the webhook authentication type
* `PutWebhooksIDWebhook` - Updates a webhook

### Authentication

* `DeleteAuthToken` - Remove user access
* `DeleteUsersIDUser` - Delete the user
* `GetAuthTokenCode` - Generate a user temporary token
* `GetCertificateType` - Get the latest certificate of a type
* `GetUsersIDUser` - Get a user
* `GetWebauth` - First step to establish an oAuth2 connection.
* `PostAdminJwt` - Generate a jwt manage token
* `PostAuthInit` - Create a new anonymous user
* `PostAuthJwt` - Generate a user jwt token
* `PostAuthRenew` - Get a new access token given an user id and client credentials
* `PostAuthTokenAccess` - Transform a temporary code to a access_token
* `PostUsersIDUserToken` - Create a token

### Banks

* `DeleteBanksCategoriesIDCategory` - Delete the supplied category
* `DeleteCategoriesKeywordsIDKeyword` - Delete a particular key-value pair on a transaction.
* `DeleteConnectionsIDConnectionSourcesIDSource` - Disable a connection source
* `DeleteConnectorsIDConnectorLogosIDLogo` - Delete a single Logo object.
* `DeleteUsersIDUserAccountsIDAccountTransactionsclustersIDTransactionscluster` - Delete a clustered transaction
* `DeleteUsersIDUserCategoriesFullIDFull` - Delete a user-created transaction category
* `DeleteUsersIDUserConnections` - Delete all connections
* `DeleteUsersIDUserConnectionsIDConnection` - Delete a connection.
* `DeleteUsersIDUserConnectionsIDConnectionAccounts` - Delete all accounts
* `DeleteUsersIDUserConnectionsIDConnectionAccountsIDAccount` - Delete an account.
* `DeleteUsersIDUserConnectionsIDConnectionAccountsIDAccountTransactions` - Delete transactions
* `DeleteUsersIDUserConnectionsIDConnectionAccountsIDAccountTransactionsIDTransactionInformations` - Delete all arbitrary key-value pairs of a transaction
* `DeleteUsersIDUserConnectionsIDConnectionAccountsIDAccountTransactionsIDTransactionInformationsIDInformation` - Delete a particular key-value pair on a transaction.
* `DeleteUsersIDUserConnectionsIDConnectionAccountsIDAccountTransactionsclustersIDTransactionscluster` - Delete a clustered transaction
* `DeleteUsersIDUserConnectionsIDConnectionSourcesIDSource` - Disable a connection source
* `DeleteUsersIDUserConnectionsIDConnectionTransactionsclustersIDTransactionscluster` - Delete a clustered transaction
* `DeleteUsersIDUserTransactionsclustersIDTransactionscluster` - Delete a clustered transaction
* `GetAccountTypes` - Get account types
* `GetAccountTypesIDAccountType` - Get an account type
* `GetBanks` - Get list of connectors
* `GetBanksIDBank` - Get a connector
* `GetBanksIDConnectorConnections` - Get a subset of id_connection for a given bank. Different selection methode are possible
* `GetBanksIDConnectorLogos` - Get all links to the files associated with this connector.
* `GetBanksIDConnectorLogosMain` - Get all links to the files associated with this connector.
* `GetBanksIDConnectorLogosThumbnail` - Get all links to the files associated with this connector.
* `GetBanksIDConnectorSources` - Get list of connector sources
* `GetBanksIDConnectorSourcesIDConnectorSourceFields` - Get fields specific to a domain and a source
* `GetBanksIDConnectorSourcesIDSource` - Get the connector source
* `GetCategories` - Get all categories
* `GetConnections` - Get connections without a user
* `GetConnectionsIDConnectionLogs` - Get connection logs
* `GetConnectionsIDConnectionSources` - Get connection sources
* `GetConnectors` - Get list of connectors
* `GetConnectorsIDConnector` - Get a connector
* `GetConnectorsIDConnectorLogos` - Get all links to the files associated with this connector.
* `GetConnectorsIDConnectorLogosMain` - Get all links to the files associated with this connector.
* `GetConnectorsIDConnectorLogosThumbnail` - Get all links to the files associated with this connector.
* `GetConnectorsIDConnectorSources` - Get list of connector sources
* `GetConnectorsIDConnectorSourcesIDConnectorSourceFields` - Get fields specific to a domain and a source
* `GetConnectorsIDConnectorSourcesIDSource` - Get the connector source
* `GetInvoicing` - Get invoicing data for a given period (default is the current month).
* `GetLogs` - Get connection logs
* `GetProviders` - Get list of connectors
* `GetProvidersIDConnectorConnections` - Get a random subset of provider's id_connection
* `GetProvidersIDConnectorLogos` - Get all links to the files associated with this connector.
* `GetProvidersIDConnectorLogosMain` - Get all links to the files associated with this connector.
* `GetProvidersIDConnectorLogosThumbnail` - Get all links to the files associated with this connector.
* `GetProvidersIDConnectorSources` - Get list of connector sources
* `GetProvidersIDConnectorSourcesIDConnectorSourceFields` - Get fields specific to a domain and a source
* `GetProvidersIDConnectorSourcesIDSource` - Get the connector source
* `GetProvidersIDProvider` - Get a connector
* `GetPsd2Registrations` - Get details on all psd2 registrations
* `GetPsd2RegistrationsIDPsd2Registration` - Get details for a given psd2 registration
* `GetPsd2RegistrationsIDPsd2registrationLogs` - Get psd2 registration logs.
* `GetUsersIDUserAccountTypes` - Get account types
* `GetUsersIDUserAccountTypesIDAccountType` - Get an account type
* `GetUsersIDUserAccountsIDAccountCategories` - Get the category
* `GetUsersIDUserAccountsIDAccountTransactionsclusters` - Get clustered transactions
* `GetUsersIDUserAlerts` - Get alerts
* `GetUsersIDUserCategories` - Get the category
* `GetUsersIDUserCategoriesFull` - Get the category
* `GetUsersIDUserConnections` - Get connections
* `GetUsersIDUserConnectionsIDConnectionAccounts` - Get accounts list.
* `GetUsersIDUserConnectionsIDConnectionAccountsIDAccountCategories` - Get the category
* `GetUsersIDUserConnectionsIDConnectionAccountsIDAccountDelta` - Get deltas of accounts
* `GetUsersIDUserConnectionsIDConnectionAccountsIDAccountLogs` - Get accounts logs.
* `GetUsersIDUserConnectionsIDConnectionAccountsIDAccountSources` - Get account sources
* `GetUsersIDUserConnectionsIDConnectionAccountsIDAccountTransactions` - Get transactions
* `GetUsersIDUserConnectionsIDConnectionAccountsIDAccountTransactionsIDTransactionInformations` - List all arbitrary key-value pairs on a transaction
* `GetUsersIDUserConnectionsIDConnectionAccountsIDAccountTransactionsIDTransactionInformationsIDInformation` - Get a particular arbitrary key-value pair on a transaction
* `GetUsersIDUserConnectionsIDConnectionAccountsIDAccountTransactionsclusters` - Get clustered transactions
* `GetUsersIDUserConnectionsIDConnectionInformations` - Get connection additionnal informations
* `GetUsersIDUserConnectionsIDConnectionLogs` - Get connection logs
* `GetUsersIDUserConnectionsIDConnectionSources` - Get connection sources
* `GetUsersIDUserConnectionsIDConnectionTransactionsclusters` - Get clustered transactions
* `GetUsersIDUserForecast` - Get forecast
* `GetUsersIDUserLogs` - Get connection logs
* `GetUsersIDUserTransactionsclusters` - Get clustered transactions
* `PostBanksCategories` - Create bank categories
* `PostBanksCategoriesIDCategory` - Edit a bank categories
* `PostCategoriesKeywords` - Add a new keyword associated with a category in the database.
* `PostCategorize` - categorize transactions without storing them
* `PostConnectionsIDConnectionSourcesIDSource` - "
* `PostConnectors` - Request a new connector
* `PostConnectorsIDConnectorLogos` - Create a connector Logo
* `PostUsersIDUserAccountsIDAccountTransactionsclusters` - Create clustered transaction
* `PostUsersIDUserCategoriesFull` - Create a new transaction category
* `PostUsersIDUserConnections` - Add a new connection.
* `PostUsersIDUserConnectionsIDConnection` - Update a connection.
* `PostUsersIDUserConnectionsIDConnectionAccounts` - Create an account
* `PostUsersIDUserConnectionsIDConnectionAccountsIDAccountTransactions` - Create transactions
* `PostUsersIDUserConnectionsIDConnectionAccountsIDAccountTransactionsclusters` - Create clustered transaction
* `PostUsersIDUserConnectionsIDConnectionSourcesIDSource` - "
* `PostUsersIDUserConnectionsIDConnectionTransactionsclusters` - Create clustered transaction
* `PostUsersIDUserTransactionsclusters` - Create clustered transaction
* `PutConnectionsIDConnectionSourcesIDSource` - Update connection source
* `PutConnectors` - Enable/disable several connectors
* `PutConnectorsIDConnector` - Edit the provided connector
* `PutConnectorsIDConnectorLogos` - Create or Update a connector Logo
* `PutConnectorsIDConnectorLogosIDLogo` - Create or Update a connector Logo.
* `PutConnectorsIDConnectorSources` - Edit several connector sources
* `PutConnectorsIDConnectorSourcesIDSource` - Edit the provided connector source
* `PutUsersIDUserAccountsIDAccountTransactionsclustersIDTransactionscluster` - Edit a clustered transaction
* `PutUsersIDUserCategoriesFullIDFull` - Modify a user-created category
* `PutUsersIDUserConnectionsIDConnection` - Force synchronisation of a connection.
* `PutUsersIDUserConnectionsIDConnectionAccounts` - Update many accounts at once
* `PutUsersIDUserConnectionsIDConnectionAccountsIDAccount` - Update an account
* `PutUsersIDUserConnectionsIDConnectionAccountsIDAccountTransactionsIDTransaction` - Edit a transaction meta-data
* `PutUsersIDUserConnectionsIDConnectionAccountsIDAccountTransactionsIDTransactionInformations` - Add or edit transaction arbitrary key-value pairs
* `PutUsersIDUserConnectionsIDConnectionAccountsIDAccountTransactionsclustersIDTransactionscluster` - Edit a clustered transaction
* `PutUsersIDUserConnectionsIDConnectionSourcesIDSource` - Update connection source
* `PutUsersIDUserConnectionsIDConnectionTransactionsclustersIDTransactionscluster` - Edit a clustered transaction
* `PutUsersIDUserTransactionsclustersIDTransactionscluster` - Edit a clustered transaction

### Connections

* `DeleteConnectionsIDConnectionSourcesIDSource` - Disable a connection source
* `DeleteUsersIDUserConnections` - Delete all connections
* `DeleteUsersIDUserConnectionsIDConnection` - Delete a connection.
* `DeleteUsersIDUserConnectionsIDConnectionSourcesIDSource` - Disable a connection source
* `GetBanks` - Get list of connectors
* `GetBanksIDBank` - Get a connector
* `GetBanksIDConnectorConnections` - Get a subset of id_connection for a given bank. Different selection methode are possible
* `GetBanksIDConnectorSources` - Get list of connector sources
* `GetBanksIDConnectorSourcesIDConnectorSourceFields` - Get fields specific to a domain and a source
* `GetBanksIDConnectorSourcesIDSource` - Get the connector source
* `GetConnections` - Get connections without a user
* `GetConnectionsIDConnectionLogs` - Get connection logs
* `GetConnectionsIDConnectionSources` - Get connection sources
* `GetConnectors` - Get list of connectors
* `GetConnectorsIDConnector` - Get a connector
* `GetConnectorsIDConnectorSources` - Get list of connector sources
* `GetConnectorsIDConnectorSourcesIDConnectorSourceFields` - Get fields specific to a domain and a source
* `GetConnectorsIDConnectorSourcesIDSource` - Get the connector source
* `GetLogs` - Get connection logs
* `GetProviders` - Get list of connectors
* `GetProvidersIDConnectorConnections` - Get a random subset of provider's id_connection
* `GetProvidersIDConnectorSources` - Get list of connector sources
* `GetProvidersIDConnectorSourcesIDConnectorSourceFields` - Get fields specific to a domain and a source
* `GetProvidersIDConnectorSourcesIDSource` - Get the connector source
* `GetProvidersIDProvider` - Get a connector
* `GetUsersIDUserConnections` - Get connections
* `GetUsersIDUserConnectionsIDConnectionInformations` - Get connection additionnal informations
* `GetUsersIDUserConnectionsIDConnectionLogs` - Get connection logs
* `GetUsersIDUserConnectionsIDConnectionSources` - Get connection sources
* `GetUsersIDUserLogs` - Get connection logs
* `PostConnectionsIDConnectionSourcesIDSource` - "
* `PostConnectors` - Request a new connector
* `PostUsersIDUserConnections` - Add a new connection.
* `PostUsersIDUserConnectionsIDConnection` - Update a connection.
* `PostUsersIDUserConnectionsIDConnectionSourcesIDSource` - "
* `PutConnectionsIDConnectionSourcesIDSource` - Update connection source
* `PutConnectorsIDConnectorSources` - Edit several connector sources
* `PutConnectorsIDConnectorSourcesIDSource` - Edit the provided connector source
* `PutUsersIDUserConnectionsIDConnection` - Force synchronisation of a connection.
* `PutUsersIDUserConnectionsIDConnectionSourcesIDSource` - Update connection source

### Pfm

* `DeleteAuthToken` - Remove user access
* `GetUsersIDUser` - Get a user
* `GetUsersIDUserForecast` - Get forecast
* `GetUsersIDUserProfiles` - Get profiles
* `GetUsersIDUserProfilesMain` - Get the main profile
* `GetUsersIDUserProfilesIDProfile` - Get a profile
* `PostAuthToken` - Login to API with credentials

### Providers

* `DeleteConnectionsIDConnectionSourcesIDSource` - Disable a connection source
* `DeleteConnectorsIDConnectorLogosIDLogo` - Delete a single Logo object.
* `DeleteUsersIDUserConnections` - Delete all connections
* `DeleteUsersIDUserConnectionsIDConnection` - Delete a connection.
* `DeleteUsersIDUserConnectionsIDConnectionSourcesIDSource` - Disable a connection source
* `GetBanks` - Get list of connectors
* `GetBanksIDBank` - Get a connector
* `GetBanksIDConnectorLogos` - Get all links to the files associated with this connector.
* `GetBanksIDConnectorLogosMain` - Get all links to the files associated with this connector.
* `GetBanksIDConnectorLogosThumbnail` - Get all links to the files associated with this connector.
* `GetBanksIDConnectorSources` - Get list of connector sources
* `GetBanksIDConnectorSourcesIDSource` - Get the connector source
* `GetConnections` - Get connections without a user
* `GetConnectionsIDConnectionLogs` - Get connection logs
* `GetConnectionsIDConnectionSources` - Get connection sources
* `GetConnectors` - Get list of connectors
* `GetConnectorsIDConnector` - Get a connector
* `GetConnectorsIDConnectorLogos` - Get all links to the files associated with this connector.
* `GetConnectorsIDConnectorLogosMain` - Get all links to the files associated with this connector.
* `GetConnectorsIDConnectorLogosThumbnail` - Get all links to the files associated with this connector.
* `GetConnectorsIDConnectorSources` - Get list of connector sources
* `GetConnectorsIDConnectorSourcesIDSource` - Get the connector source
* `GetLogs` - Get connection logs
* `GetProviders` - Get list of connectors
* `GetProvidersIDConnectorLogos` - Get all links to the files associated with this connector.
* `GetProvidersIDConnectorLogosMain` - Get all links to the files associated with this connector.
* `GetProvidersIDConnectorLogosThumbnail` - Get all links to the files associated with this connector.
* `GetProvidersIDConnectorSources` - Get list of connector sources
* `GetProvidersIDConnectorSourcesIDSource` - Get the connector source
* `GetProvidersIDProvider` - Get a connector
* `GetUsersIDUserConnections` - Get connections
* `GetUsersIDUserConnectionsIDConnectionInformations` - Get connection additionnal informations
* `GetUsersIDUserConnectionsIDConnectionLogs` - Get connection logs
* `GetUsersIDUserConnectionsIDConnectionSources` - Get connection sources
* `GetUsersIDUserLogs` - Get connection logs
* `PostConnectionsIDConnectionSourcesIDSource` - "
* `PostConnectors` - Request a new connector
* `PostConnectorsIDConnectorLogos` - Create a connector Logo
* `PostUsersIDUserConnections` - Add a new connection.
* `PostUsersIDUserConnectionsIDConnection` - Update a connection.
* `PostUsersIDUserConnectionsIDConnectionSourcesIDSource` - "
* `PutConnectionsIDConnectionSourcesIDSource` - Update connection source
* `PutConnectorsIDConnectorLogos` - Create or Update a connector Logo
* `PutConnectorsIDConnectorLogosIDLogo` - Create or Update a connector Logo.
* `PutConnectorsIDConnectorSources` - Edit several connector sources
* `PutConnectorsIDConnectorSourcesIDSource` - Edit the provided connector source
* `PutUsersIDUserConnectionsIDConnection` - Force synchronisation of a connection.
* `PutUsersIDUserConnectionsIDConnectionSourcesIDSource` - Update connection source

### Timeline

* `GetIncidents` - Get incidents logs.

### Transfer

* `GetWebauth` - First step to establish an oAuth2 connection.

### UsersManagement

* `DeleteUsersIDUser` - Delete the user
* `DeleteUsersIDUserConfig` - Delete the given user configurations. deletions on keys prefixed by 'biapi.' (except callback_url) are ignored
* `GetUsers` - Get users
* `GetUsersIDUser` - Get a user
* `GetUsersIDUserConfig` - Get configuration of a user.
* `GetUsersIDUserProfiles` - Get profiles
* `GetUsersIDUserProfilesMain` - Get the main profile
* `GetUsersIDUserProfilesIDProfile` - Get a profile
* `PostUsersIDUserConfig` - Change configuration of a user. modifications on keys prefixed by 'biapi.' (except callback_url) are ignored
* `PostUsersIDUserToken` - Create a token
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
