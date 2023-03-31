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

import org.openapis.openapi.models.operations.DeleteClientsIdClientPathParams;
import org.openapis.openapi.models.operations.DeleteClientsIdClientQueryParams;
import org.openapis.openapi.models.operations.DeleteClientsIdClientRequest;
import org.openapis.openapi.models.operations.DeleteClientsIdClientResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteClientsIdClientRequest req = new DeleteClientsIdClientRequest() {{
                pathParams = new DeleteClientsIdClientPathParams() {{
                    idClient = 548814;
                }};
                queryParams = new DeleteClientsIdClientQueryParams() {{
                    expand = "provident";
                }};
            }};            

            DeleteClientsIdClientResponse res = sdk.administration.deleteClientsIdClient(req);

            if (res.client.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### administration

* `deleteClientsIdClient` - Delete a client
* `deleteClientsIdClientLogo` - Delete the client logo
* `deleteWebhooks` - Deletes all webhooks
* `deleteWebhooksAuth` - Deletes all webhook authentication types
* `deleteWebhooksAuthIdAuth` - Deletes the webhook authentication type
* `deleteWebhooksIdWebhook` - Deletes a webhook
* `deleteWebhooksIdWebhookAddToData` - delete all entries
* `deleteWebhooksIdWebhookAddToDataKey` - delete the requested entry
* `getClients` - List clients
* `getClientsIdClient` - Get information about a client
* `getConfig` - Get configuration of the API.
* `getConfigLogs` - Get configuration change history of the API.
* `getMonitoring` - get performances stats on this instance
* `getPublickey` - Get public encryption key of the API.
* `getWebhooks` - Get webhooks
* `getWebhooksAuth` - Get webhooks authentication types
* `getWebhooksIdWebhookAddToData` - retrieve the list of the value to add in webhooks when sending the requested webhook
* `getWebhooksIdWebhookAddToDataKey` - retrieve the value to add in the requested webhook for the requested name
* `getWebhooksIdWebhookLogs` - Get webhooks logs.
* `postClients` - Create a client
* `postClientsIdClientLogo` - Update the client logo
* `postConfig` - Insert/update configuration key(s)/value(s) on the API.
* `postTestSync` - Test synchronization on a random connection.
* `postTestWebhooks` - Test synchronization on a random connection.
* `postWebhooks` - Adds a new webhook
* `postWebhooksAuth` - Adds a new webhook authentication type
* `postWebhooksAuthIdAuth` - Updates the webhook authentication type
* `postWebhooksIdWebhook` - Updates a webhook
* `postWebhooksIdWebhookAddToData` - Setup a field to store in user config when calling the endpoint
* `postWebhooksIdWebhookAddToDataKey` - upate the requested field to store in user config when calling the endpoint
* `putClientsIdClient` - Update a client
* `putWebhooksAuthIdAuth` - Updates the webhook authentication type
* `putWebhooksIdWebhook` - Updates a webhook

### authentication

* `deleteAuthToken` - Remove user access
* `deleteUsersIdUser` - Delete the user
* `getAuthTokenCode` - Generate a user temporary token
* `getCertificateType` - Get the latest certificate of a type
* `getUsersIdUser` - Get a user
* `getWebauth` - First step to establish an oAuth2 connection.
* `postAdminJwt` - Generate a jwt manage token
* `postAuthInit` - Create a new anonymous user
* `postAuthJwt` - Generate a user jwt token
* `postAuthRenew` - Get a new access token given an user id and client credentials
* `postAuthTokenAccess` - Transform a temporary code to a access_token
* `postUsersIdUserToken` - Create a token

### banks

* `deleteBanksCategoriesIdCategory` - Delete the supplied category
* `deleteCategoriesKeywordsIdKeyword` - Delete a particular key-value pair on a transaction.
* `deleteConnectionsIdConnectionSourcesIdSource` - Disable a connection source
* `deleteConnectorsIdConnectorLogosIdLogo` - Delete a single Logo object.
* `deleteUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionscluster` - Delete a clustered transaction
* `deleteUsersIdUserCategoriesFullIdFull` - Delete a user-created transaction category
* `deleteUsersIdUserConnections` - Delete all connections
* `deleteUsersIdUserConnectionsIdConnection` - Delete a connection.
* `deleteUsersIdUserConnectionsIdConnectionAccounts` - Delete all accounts
* `deleteUsersIdUserConnectionsIdConnectionAccountsIdAccount` - Delete an account.
* `deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactions` - Delete transactions
* `deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformations` - Delete all arbitrary key-value pairs of a transaction
* `deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformation` - Delete a particular key-value pair on a transaction.
* `deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionscluster` - Delete a clustered transaction
* `deleteUsersIdUserConnectionsIdConnectionSourcesIdSource` - Disable a connection source
* `deleteUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionscluster` - Delete a clustered transaction
* `deleteUsersIdUserTransactionsclustersIdTransactionscluster` - Delete a clustered transaction
* `getAccountTypes` - Get account types
* `getAccountTypesIdAccountType` - Get an account type
* `getBanks` - Get list of connectors
* `getBanksIdBank` - Get a connector
* `getBanksIdConnectorConnections` - Get a subset of id_connection for a given bank. Different selection methode are possible
* `getBanksIdConnectorLogos` - Get all links to the files associated with this connector.
* `getBanksIdConnectorLogosMain` - Get all links to the files associated with this connector.
* `getBanksIdConnectorLogosThumbnail` - Get all links to the files associated with this connector.
* `getBanksIdConnectorSources` - Get list of connector sources
* `getBanksIdConnectorSourcesIdConnectorSourceFields` - Get fields specific to a domain and a source
* `getBanksIdConnectorSourcesIdSource` - Get the connector source
* `getCategories` - Get all categories
* `getConnections` - Get connections without a user
* `getConnectionsIdConnectionLogs` - Get connection logs
* `getConnectionsIdConnectionSources` - Get connection sources
* `getConnectors` - Get list of connectors
* `getConnectorsIdConnector` - Get a connector
* `getConnectorsIdConnectorLogos` - Get all links to the files associated with this connector.
* `getConnectorsIdConnectorLogosMain` - Get all links to the files associated with this connector.
* `getConnectorsIdConnectorLogosThumbnail` - Get all links to the files associated with this connector.
* `getConnectorsIdConnectorSources` - Get list of connector sources
* `getConnectorsIdConnectorSourcesIdConnectorSourceFields` - Get fields specific to a domain and a source
* `getConnectorsIdConnectorSourcesIdSource` - Get the connector source
* `getInvoicing` - Get invoicing data for a given period (default is the current month).
* `getLogs` - Get connection logs
* `getProviders` - Get list of connectors
* `getProvidersIdConnectorConnections` - Get a random subset of provider's id_connection
* `getProvidersIdConnectorLogos` - Get all links to the files associated with this connector.
* `getProvidersIdConnectorLogosMain` - Get all links to the files associated with this connector.
* `getProvidersIdConnectorLogosThumbnail` - Get all links to the files associated with this connector.
* `getProvidersIdConnectorSources` - Get list of connector sources
* `getProvidersIdConnectorSourcesIdConnectorSourceFields` - Get fields specific to a domain and a source
* `getProvidersIdConnectorSourcesIdSource` - Get the connector source
* `getProvidersIdProvider` - Get a connector
* `getPsd2Registrations` - Get details on all psd2 registrations
* `getPsd2RegistrationsIdPsd2Registration` - Get details for a given psd2 registration
* `getPsd2RegistrationsIdPsd2registrationLogs` - Get psd2 registration logs.
* `getUsersIdUserAccountTypes` - Get account types
* `getUsersIdUserAccountTypesIdAccountType` - Get an account type
* `getUsersIdUserAccountsIdAccountCategories` - Get the category
* `getUsersIdUserAccountsIdAccountTransactionsclusters` - Get clustered transactions
* `getUsersIdUserAlerts` - Get alerts
* `getUsersIdUserCategories` - Get the category
* `getUsersIdUserCategoriesFull` - Get the category
* `getUsersIdUserConnections` - Get connections
* `getUsersIdUserConnectionsIdConnectionAccounts` - Get accounts list.
* `getUsersIdUserConnectionsIdConnectionAccountsIdAccountCategories` - Get the category
* `getUsersIdUserConnectionsIdConnectionAccountsIdAccountDelta` - Get deltas of accounts
* `getUsersIdUserConnectionsIdConnectionAccountsIdAccountLogs` - Get accounts logs.
* `getUsersIdUserConnectionsIdConnectionAccountsIdAccountSources` - Get account sources
* `getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactions` - Get transactions
* `getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformations` - List all arbitrary key-value pairs on a transaction
* `getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformation` - Get a particular arbitrary key-value pair on a transaction
* `getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclusters` - Get clustered transactions
* `getUsersIdUserConnectionsIdConnectionInformations` - Get connection additionnal informations
* `getUsersIdUserConnectionsIdConnectionLogs` - Get connection logs
* `getUsersIdUserConnectionsIdConnectionSources` - Get connection sources
* `getUsersIdUserConnectionsIdConnectionTransactionsclusters` - Get clustered transactions
* `getUsersIdUserForecast` - Get forecast
* `getUsersIdUserLogs` - Get connection logs
* `getUsersIdUserTransactionsclusters` - Get clustered transactions
* `postBanksCategories` - Create bank categories
* `postBanksCategoriesIdCategory` - Edit a bank categories
* `postCategoriesKeywords` - Add a new keyword associated with a category in the database.
* `postCategorize` - categorize transactions without storing them
* `postConnectionsIdConnectionSourcesIdSource` - "
* `postConnectors` - Request a new connector
* `postConnectorsIdConnectorLogos` - Create a connector Logo
* `postUsersIdUserAccountsIdAccountTransactionsclusters` - Create clustered transaction
* `postUsersIdUserCategoriesFull` - Create a new transaction category
* `postUsersIdUserConnections` - Add a new connection.
* `postUsersIdUserConnectionsIdConnection` - Update a connection.
* `postUsersIdUserConnectionsIdConnectionAccounts` - Create an account
* `postUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactions` - Create transactions
* `postUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclusters` - Create clustered transaction
* `postUsersIdUserConnectionsIdConnectionSourcesIdSource` - "
* `postUsersIdUserConnectionsIdConnectionTransactionsclusters` - Create clustered transaction
* `postUsersIdUserTransactionsclusters` - Create clustered transaction
* `putConnectionsIdConnectionSourcesIdSource` - Update connection source
* `putConnectors` - Enable/disable several connectors
* `putConnectorsIdConnector` - Edit the provided connector
* `putConnectorsIdConnectorLogos` - Create or Update a connector Logo
* `putConnectorsIdConnectorLogosIdLogo` - Create or Update a connector Logo.
* `putConnectorsIdConnectorSources` - Edit several connector sources
* `putConnectorsIdConnectorSourcesIdSource` - Edit the provided connector source
* `putUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionscluster` - Edit a clustered transaction
* `putUsersIdUserCategoriesFullIdFull` - Modify a user-created category
* `putUsersIdUserConnectionsIdConnection` - Force synchronisation of a connection.
* `putUsersIdUserConnectionsIdConnectionAccounts` - Update many accounts at once
* `putUsersIdUserConnectionsIdConnectionAccountsIdAccount` - Update an account
* `putUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransaction` - Edit a transaction meta-data
* `putUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformations` - Add or edit transaction arbitrary key-value pairs
* `putUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionscluster` - Edit a clustered transaction
* `putUsersIdUserConnectionsIdConnectionSourcesIdSource` - Update connection source
* `putUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionscluster` - Edit a clustered transaction
* `putUsersIdUserTransactionsclustersIdTransactionscluster` - Edit a clustered transaction

### connections

* `deleteConnectionsIdConnectionSourcesIdSource` - Disable a connection source
* `deleteUsersIdUserConnections` - Delete all connections
* `deleteUsersIdUserConnectionsIdConnection` - Delete a connection.
* `deleteUsersIdUserConnectionsIdConnectionSourcesIdSource` - Disable a connection source
* `getBanks` - Get list of connectors
* `getBanksIdBank` - Get a connector
* `getBanksIdConnectorConnections` - Get a subset of id_connection for a given bank. Different selection methode are possible
* `getBanksIdConnectorSources` - Get list of connector sources
* `getBanksIdConnectorSourcesIdConnectorSourceFields` - Get fields specific to a domain and a source
* `getBanksIdConnectorSourcesIdSource` - Get the connector source
* `getConnections` - Get connections without a user
* `getConnectionsIdConnectionLogs` - Get connection logs
* `getConnectionsIdConnectionSources` - Get connection sources
* `getConnectors` - Get list of connectors
* `getConnectorsIdConnector` - Get a connector
* `getConnectorsIdConnectorSources` - Get list of connector sources
* `getConnectorsIdConnectorSourcesIdConnectorSourceFields` - Get fields specific to a domain and a source
* `getConnectorsIdConnectorSourcesIdSource` - Get the connector source
* `getLogs` - Get connection logs
* `getProviders` - Get list of connectors
* `getProvidersIdConnectorConnections` - Get a random subset of provider's id_connection
* `getProvidersIdConnectorSources` - Get list of connector sources
* `getProvidersIdConnectorSourcesIdConnectorSourceFields` - Get fields specific to a domain and a source
* `getProvidersIdConnectorSourcesIdSource` - Get the connector source
* `getProvidersIdProvider` - Get a connector
* `getUsersIdUserConnections` - Get connections
* `getUsersIdUserConnectionsIdConnectionInformations` - Get connection additionnal informations
* `getUsersIdUserConnectionsIdConnectionLogs` - Get connection logs
* `getUsersIdUserConnectionsIdConnectionSources` - Get connection sources
* `getUsersIdUserLogs` - Get connection logs
* `postConnectionsIdConnectionSourcesIdSource` - "
* `postConnectors` - Request a new connector
* `postUsersIdUserConnections` - Add a new connection.
* `postUsersIdUserConnectionsIdConnection` - Update a connection.
* `postUsersIdUserConnectionsIdConnectionSourcesIdSource` - "
* `putConnectionsIdConnectionSourcesIdSource` - Update connection source
* `putConnectorsIdConnectorSources` - Edit several connector sources
* `putConnectorsIdConnectorSourcesIdSource` - Edit the provided connector source
* `putUsersIdUserConnectionsIdConnection` - Force synchronisation of a connection.
* `putUsersIdUserConnectionsIdConnectionSourcesIdSource` - Update connection source

### pfm

* `deleteAuthToken` - Remove user access
* `getUsersIdUser` - Get a user
* `getUsersIdUserForecast` - Get forecast
* `getUsersIdUserProfiles` - Get profiles
* `getUsersIdUserProfilesMain` - Get the main profile
* `getUsersIdUserProfilesIdProfile` - Get a profile
* `postAuthToken` - Login to API with credentials

### providers

* `deleteConnectionsIdConnectionSourcesIdSource` - Disable a connection source
* `deleteConnectorsIdConnectorLogosIdLogo` - Delete a single Logo object.
* `deleteUsersIdUserConnections` - Delete all connections
* `deleteUsersIdUserConnectionsIdConnection` - Delete a connection.
* `deleteUsersIdUserConnectionsIdConnectionSourcesIdSource` - Disable a connection source
* `getBanks` - Get list of connectors
* `getBanksIdBank` - Get a connector
* `getBanksIdConnectorLogos` - Get all links to the files associated with this connector.
* `getBanksIdConnectorLogosMain` - Get all links to the files associated with this connector.
* `getBanksIdConnectorLogosThumbnail` - Get all links to the files associated with this connector.
* `getBanksIdConnectorSources` - Get list of connector sources
* `getBanksIdConnectorSourcesIdSource` - Get the connector source
* `getConnections` - Get connections without a user
* `getConnectionsIdConnectionLogs` - Get connection logs
* `getConnectionsIdConnectionSources` - Get connection sources
* `getConnectors` - Get list of connectors
* `getConnectorsIdConnector` - Get a connector
* `getConnectorsIdConnectorLogos` - Get all links to the files associated with this connector.
* `getConnectorsIdConnectorLogosMain` - Get all links to the files associated with this connector.
* `getConnectorsIdConnectorLogosThumbnail` - Get all links to the files associated with this connector.
* `getConnectorsIdConnectorSources` - Get list of connector sources
* `getConnectorsIdConnectorSourcesIdSource` - Get the connector source
* `getLogs` - Get connection logs
* `getProviders` - Get list of connectors
* `getProvidersIdConnectorLogos` - Get all links to the files associated with this connector.
* `getProvidersIdConnectorLogosMain` - Get all links to the files associated with this connector.
* `getProvidersIdConnectorLogosThumbnail` - Get all links to the files associated with this connector.
* `getProvidersIdConnectorSources` - Get list of connector sources
* `getProvidersIdConnectorSourcesIdSource` - Get the connector source
* `getProvidersIdProvider` - Get a connector
* `getUsersIdUserConnections` - Get connections
* `getUsersIdUserConnectionsIdConnectionInformations` - Get connection additionnal informations
* `getUsersIdUserConnectionsIdConnectionLogs` - Get connection logs
* `getUsersIdUserConnectionsIdConnectionSources` - Get connection sources
* `getUsersIdUserLogs` - Get connection logs
* `postConnectionsIdConnectionSourcesIdSource` - "
* `postConnectors` - Request a new connector
* `postConnectorsIdConnectorLogos` - Create a connector Logo
* `postUsersIdUserConnections` - Add a new connection.
* `postUsersIdUserConnectionsIdConnection` - Update a connection.
* `postUsersIdUserConnectionsIdConnectionSourcesIdSource` - "
* `putConnectionsIdConnectionSourcesIdSource` - Update connection source
* `putConnectorsIdConnectorLogos` - Create or Update a connector Logo
* `putConnectorsIdConnectorLogosIdLogo` - Create or Update a connector Logo.
* `putConnectorsIdConnectorSources` - Edit several connector sources
* `putConnectorsIdConnectorSourcesIdSource` - Edit the provided connector source
* `putUsersIdUserConnectionsIdConnection` - Force synchronisation of a connection.
* `putUsersIdUserConnectionsIdConnectionSourcesIdSource` - Update connection source

### timeline

* `getIncidents` - Get incidents logs.

### transfer

* `getWebauth` - First step to establish an oAuth2 connection.

### usersManagement

* `deleteUsersIdUser` - Delete the user
* `deleteUsersIdUserConfig` - Delete the given user configurations. deletions on keys prefixed by 'biapi.' (except callback_url) are ignored
* `getUsers` - Get users
* `getUsersIdUser` - Get a user
* `getUsersIdUserConfig` - Get configuration of a user.
* `getUsersIdUserProfiles` - Get profiles
* `getUsersIdUserProfilesMain` - Get the main profile
* `getUsersIdUserProfilesIdProfile` - Get a profile
* `postUsersIdUserConfig` - Change configuration of a user. modifications on keys prefixed by 'biapi.' (except callback_url) are ignored
* `postUsersIdUserToken` - Create a token
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
