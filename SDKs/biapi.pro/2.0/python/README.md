# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/biapi.pro/2.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DeleteClientsIDClientRequest(
    expand="corrupti",
    id_client=592845,
)
    
res = s.administration.delete_clients_id_client_(req)

if res.client is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### administration

* `delete_clients_id_client_` - Delete a client
* `delete_clients_id_client_logo` - Delete the client logo
* `delete_webhooks` - Deletes all webhooks
* `delete_webhooks_auth` - Deletes all webhook authentication types
* `delete_webhooks_auth_id_auth_` - Deletes the webhook authentication type
* `delete_webhooks_id_webhook_` - Deletes a webhook
* `delete_webhooks_id_webhook_add_to_data` - delete all entries
* `delete_webhooks_id_webhook_add_to_data_key_` - delete the requested entry
* `get_clients` - List clients
* `get_clients_id_client_` - Get information about a client
* `get_config` - Get configuration of the API.
* `get_config_logs` - Get configuration change history of the API.
* `get_monitoring` - get performances stats on this instance
* `get_publickey` - Get public encryption key of the API.
* `get_webhooks` - Get webhooks
* `get_webhooks_auth` - Get webhooks authentication types
* `get_webhooks_id_webhook_add_to_data` - retrieve the list of the value to add in webhooks when sending the requested webhook
* `get_webhooks_id_webhook_add_to_data_key_` - retrieve the value to add in the requested webhook for the requested name
* `get_webhooks_id_webhook_logs` - Get webhooks logs.
* `post_clients` - Create a client
* `post_clients_id_client_logo` - Update the client logo
* `post_config` - Insert/update configuration key(s)/value(s) on the API.
* `post_test_sync` - Test synchronization on a random connection.
* `post_test_webhooks` - Test synchronization on a random connection.
* `post_webhooks` - Adds a new webhook
* `post_webhooks_auth` - Adds a new webhook authentication type
* `post_webhooks_auth_id_auth_` - Updates the webhook authentication type
* `post_webhooks_id_webhook_` - Updates a webhook
* `post_webhooks_id_webhook_add_to_data` - Setup a field to store in user config when calling the endpoint
* `post_webhooks_id_webhook_add_to_data_key_` - upate the requested field to store in user config when calling the endpoint
* `put_clients_id_client_` - Update a client
* `put_webhooks_auth_id_auth_` - Updates the webhook authentication type
* `put_webhooks_id_webhook_` - Updates a webhook

### authentication

* `delete_auth_token` - Remove user access
* `delete_users_id_user_` - Delete the user
* `get_auth_token_code` - Generate a user temporary token
* `get_certificate_type_` - Get the latest certificate of a type
* `get_users_id_user_` - Get a user
* `get_webauth` - First step to establish an oAuth2 connection.
* `post_admin_jwt` - Generate a jwt manage token
* `post_auth_init` - Create a new anonymous user
* `post_auth_jwt` - Generate a user jwt token
* `post_auth_renew` - Get a new access token given an user id and client credentials
* `post_auth_token_access` - Transform a temporary code to a access_token
* `post_users_id_user_token` - Create a token

### banks

* `delete_banks_categories_id_category_` - Delete the supplied category
* `delete_categories_keywords_id_keyword_` - Delete a particular key-value pair on a transaction.
* `delete_connections_id_connection_sources_id_source_` - Disable a connection source
* `delete_connectors_id_connector_logos_id_logo_` - Delete a single Logo object.
* `delete_users_id_user_accounts_id_account_transactionsclusters_id_transactionscluster_` - Delete a clustered transaction
* `delete_users_id_user_categories_full_id_full_` - Delete a user-created transaction category
* `delete_users_id_user_connections` - Delete all connections
* `delete_users_id_user_connections_id_connection_` - Delete a connection.
* `delete_users_id_user_connections_id_connection_accounts` - Delete all accounts
* `delete_users_id_user_connections_id_connection_accounts_id_account_` - Delete an account.
* `delete_users_id_user_connections_id_connection_accounts_id_account_transactions` - Delete transactions
* `delete_users_id_user_connections_id_connection_accounts_id_account_transactions_id_transaction_informations` - Delete all arbitrary key-value pairs of a transaction
* `delete_users_id_user_connections_id_connection_accounts_id_account_transactions_id_transaction_informations_id_information_` - Delete a particular key-value pair on a transaction.
* `delete_users_id_user_connections_id_connection_accounts_id_account_transactionsclusters_id_transactionscluster_` - Delete a clustered transaction
* `delete_users_id_user_connections_id_connection_sources_id_source_` - Disable a connection source
* `delete_users_id_user_connections_id_connection_transactionsclusters_id_transactionscluster_` - Delete a clustered transaction
* `delete_users_id_user_transactionsclusters_id_transactionscluster_` - Delete a clustered transaction
* `get_account_types` - Get account types
* `get_account_types_id_account_type_` - Get an account type
* `get_banks` - Get list of connectors
* `get_banks_id_bank_` - Get a connector
* `get_banks_id_connector_connections` - Get a subset of id_connection for a given bank. Different selection methode are possible
* `get_banks_id_connector_logos` - Get all links to the files associated with this connector.
* `get_banks_id_connector_logos_main` - Get all links to the files associated with this connector.
* `get_banks_id_connector_logos_thumbnail` - Get all links to the files associated with this connector.
* `get_banks_id_connector_sources` - Get list of connector sources
* `get_banks_id_connector_sources_id_connector_source_fields` - Get fields specific to a domain and a source
* `get_banks_id_connector_sources_id_source_` - Get the connector source
* `get_categories` - Get all categories
* `get_connections` - Get connections without a user
* `get_connections_id_connection_logs` - Get connection logs
* `get_connections_id_connection_sources` - Get connection sources
* `get_connectors` - Get list of connectors
* `get_connectors_id_connector_` - Get a connector
* `get_connectors_id_connector_logos` - Get all links to the files associated with this connector.
* `get_connectors_id_connector_logos_main` - Get all links to the files associated with this connector.
* `get_connectors_id_connector_logos_thumbnail` - Get all links to the files associated with this connector.
* `get_connectors_id_connector_sources` - Get list of connector sources
* `get_connectors_id_connector_sources_id_connector_source_fields` - Get fields specific to a domain and a source
* `get_connectors_id_connector_sources_id_source_` - Get the connector source
* `get_invoicing` - Get invoicing data for a given period (default is the current month).
* `get_logs` - Get connection logs
* `get_providers` - Get list of connectors
* `get_providers_id_connector_connections` - Get a random subset of provider's id_connection
* `get_providers_id_connector_logos` - Get all links to the files associated with this connector.
* `get_providers_id_connector_logos_main` - Get all links to the files associated with this connector.
* `get_providers_id_connector_logos_thumbnail` - Get all links to the files associated with this connector.
* `get_providers_id_connector_sources` - Get list of connector sources
* `get_providers_id_connector_sources_id_connector_source_fields` - Get fields specific to a domain and a source
* `get_providers_id_connector_sources_id_source_` - Get the connector source
* `get_providers_id_provider_` - Get a connector
* `get_psd2_registrations` - Get details on all psd2 registrations
* `get_psd2_registrations_id_psd2_registration_` - Get details for a given psd2 registration
* `get_psd2_registrations_id_psd2registration_logs` - Get psd2 registration logs.
* `get_users_id_user_account_types` - Get account types
* `get_users_id_user_account_types_id_account_type_` - Get an account type
* `get_users_id_user_accounts_id_account_categories` - Get the category
* `get_users_id_user_accounts_id_account_transactionsclusters` - Get clustered transactions
* `get_users_id_user_alerts` - Get alerts
* `get_users_id_user_categories` - Get the category
* `get_users_id_user_categories_full` - Get the category
* `get_users_id_user_connections` - Get connections
* `get_users_id_user_connections_id_connection_accounts` - Get accounts list.
* `get_users_id_user_connections_id_connection_accounts_id_account_categories` - Get the category
* `get_users_id_user_connections_id_connection_accounts_id_account_delta` - Get deltas of accounts
* `get_users_id_user_connections_id_connection_accounts_id_account_logs` - Get accounts logs.
* `get_users_id_user_connections_id_connection_accounts_id_account_sources` - Get account sources
* `get_users_id_user_connections_id_connection_accounts_id_account_transactions` - Get transactions
* `get_users_id_user_connections_id_connection_accounts_id_account_transactions_id_transaction_informations` - List all arbitrary key-value pairs on a transaction
* `get_users_id_user_connections_id_connection_accounts_id_account_transactions_id_transaction_informations_id_information_` - Get a particular arbitrary key-value pair on a transaction
* `get_users_id_user_connections_id_connection_accounts_id_account_transactionsclusters` - Get clustered transactions
* `get_users_id_user_connections_id_connection_informations` - Get connection additionnal informations
* `get_users_id_user_connections_id_connection_logs` - Get connection logs
* `get_users_id_user_connections_id_connection_sources` - Get connection sources
* `get_users_id_user_connections_id_connection_transactionsclusters` - Get clustered transactions
* `get_users_id_user_forecast` - Get forecast
* `get_users_id_user_logs` - Get connection logs
* `get_users_id_user_transactionsclusters` - Get clustered transactions
* `post_banks_categories` - Create bank categories
* `post_banks_categories_id_category_` - Edit a bank categories
* `post_categories_keywords` - Add a new keyword associated with a category in the database.
* `post_categorize` - categorize transactions without storing them
* `post_connections_id_connection_sources_id_source_` - "
* `post_connectors` - Request a new connector
* `post_connectors_id_connector_logos` - Create a connector Logo
* `post_users_id_user_accounts_id_account_transactionsclusters` - Create clustered transaction
* `post_users_id_user_categories_full` - Create a new transaction category
* `post_users_id_user_connections` - Add a new connection.
* `post_users_id_user_connections_id_connection_` - Update a connection.
* `post_users_id_user_connections_id_connection_accounts` - Create an account
* `post_users_id_user_connections_id_connection_accounts_id_account_transactions` - Create transactions
* `post_users_id_user_connections_id_connection_accounts_id_account_transactionsclusters` - Create clustered transaction
* `post_users_id_user_connections_id_connection_sources_id_source_` - "
* `post_users_id_user_connections_id_connection_transactionsclusters` - Create clustered transaction
* `post_users_id_user_transactionsclusters` - Create clustered transaction
* `put_connections_id_connection_sources_id_source_` - Update connection source
* `put_connectors` - Enable/disable several connectors
* `put_connectors_id_connector_` - Edit the provided connector
* `put_connectors_id_connector_logos` - Create or Update a connector Logo
* `put_connectors_id_connector_logos_id_logo_` - Create or Update a connector Logo.
* `put_connectors_id_connector_sources` - Edit several connector sources
* `put_connectors_id_connector_sources_id_source_` - Edit the provided connector source
* `put_users_id_user_accounts_id_account_transactionsclusters_id_transactionscluster_` - Edit a clustered transaction
* `put_users_id_user_categories_full_id_full_` - Modify a user-created category
* `put_users_id_user_connections_id_connection_` - Force synchronisation of a connection.
* `put_users_id_user_connections_id_connection_accounts` - Update many accounts at once
* `put_users_id_user_connections_id_connection_accounts_id_account_` - Update an account
* `put_users_id_user_connections_id_connection_accounts_id_account_transactions_id_transaction_` - Edit a transaction meta-data
* `put_users_id_user_connections_id_connection_accounts_id_account_transactions_id_transaction_informations` - Add or edit transaction arbitrary key-value pairs
* `put_users_id_user_connections_id_connection_accounts_id_account_transactionsclusters_id_transactionscluster_` - Edit a clustered transaction
* `put_users_id_user_connections_id_connection_sources_id_source_` - Update connection source
* `put_users_id_user_connections_id_connection_transactionsclusters_id_transactionscluster_` - Edit a clustered transaction
* `put_users_id_user_transactionsclusters_id_transactionscluster_` - Edit a clustered transaction

### connections

* `delete_connections_id_connection_sources_id_source_` - Disable a connection source
* `delete_users_id_user_connections` - Delete all connections
* `delete_users_id_user_connections_id_connection_` - Delete a connection.
* `delete_users_id_user_connections_id_connection_sources_id_source_` - Disable a connection source
* `get_banks` - Get list of connectors
* `get_banks_id_bank_` - Get a connector
* `get_banks_id_connector_connections` - Get a subset of id_connection for a given bank. Different selection methode are possible
* `get_banks_id_connector_sources` - Get list of connector sources
* `get_banks_id_connector_sources_id_connector_source_fields` - Get fields specific to a domain and a source
* `get_banks_id_connector_sources_id_source_` - Get the connector source
* `get_connections` - Get connections without a user
* `get_connections_id_connection_logs` - Get connection logs
* `get_connections_id_connection_sources` - Get connection sources
* `get_connectors` - Get list of connectors
* `get_connectors_id_connector_` - Get a connector
* `get_connectors_id_connector_sources` - Get list of connector sources
* `get_connectors_id_connector_sources_id_connector_source_fields` - Get fields specific to a domain and a source
* `get_connectors_id_connector_sources_id_source_` - Get the connector source
* `get_logs` - Get connection logs
* `get_providers` - Get list of connectors
* `get_providers_id_connector_connections` - Get a random subset of provider's id_connection
* `get_providers_id_connector_sources` - Get list of connector sources
* `get_providers_id_connector_sources_id_connector_source_fields` - Get fields specific to a domain and a source
* `get_providers_id_connector_sources_id_source_` - Get the connector source
* `get_providers_id_provider_` - Get a connector
* `get_users_id_user_connections` - Get connections
* `get_users_id_user_connections_id_connection_informations` - Get connection additionnal informations
* `get_users_id_user_connections_id_connection_logs` - Get connection logs
* `get_users_id_user_connections_id_connection_sources` - Get connection sources
* `get_users_id_user_logs` - Get connection logs
* `post_connections_id_connection_sources_id_source_` - "
* `post_connectors` - Request a new connector
* `post_users_id_user_connections` - Add a new connection.
* `post_users_id_user_connections_id_connection_` - Update a connection.
* `post_users_id_user_connections_id_connection_sources_id_source_` - "
* `put_connections_id_connection_sources_id_source_` - Update connection source
* `put_connectors_id_connector_sources` - Edit several connector sources
* `put_connectors_id_connector_sources_id_source_` - Edit the provided connector source
* `put_users_id_user_connections_id_connection_` - Force synchronisation of a connection.
* `put_users_id_user_connections_id_connection_sources_id_source_` - Update connection source

### pfm

* `delete_auth_token` - Remove user access
* `get_users_id_user_` - Get a user
* `get_users_id_user_forecast` - Get forecast
* `get_users_id_user_profiles` - Get profiles
* `get_users_id_user_profiles_main` - Get the main profile
* `get_users_id_user_profiles_id_profile_` - Get a profile
* `post_auth_token` - Login to API with credentials

### providers

* `delete_connections_id_connection_sources_id_source_` - Disable a connection source
* `delete_connectors_id_connector_logos_id_logo_` - Delete a single Logo object.
* `delete_users_id_user_connections` - Delete all connections
* `delete_users_id_user_connections_id_connection_` - Delete a connection.
* `delete_users_id_user_connections_id_connection_sources_id_source_` - Disable a connection source
* `get_banks` - Get list of connectors
* `get_banks_id_bank_` - Get a connector
* `get_banks_id_connector_logos` - Get all links to the files associated with this connector.
* `get_banks_id_connector_logos_main` - Get all links to the files associated with this connector.
* `get_banks_id_connector_logos_thumbnail` - Get all links to the files associated with this connector.
* `get_banks_id_connector_sources` - Get list of connector sources
* `get_banks_id_connector_sources_id_source_` - Get the connector source
* `get_connections` - Get connections without a user
* `get_connections_id_connection_logs` - Get connection logs
* `get_connections_id_connection_sources` - Get connection sources
* `get_connectors` - Get list of connectors
* `get_connectors_id_connector_` - Get a connector
* `get_connectors_id_connector_logos` - Get all links to the files associated with this connector.
* `get_connectors_id_connector_logos_main` - Get all links to the files associated with this connector.
* `get_connectors_id_connector_logos_thumbnail` - Get all links to the files associated with this connector.
* `get_connectors_id_connector_sources` - Get list of connector sources
* `get_connectors_id_connector_sources_id_source_` - Get the connector source
* `get_logs` - Get connection logs
* `get_providers` - Get list of connectors
* `get_providers_id_connector_logos` - Get all links to the files associated with this connector.
* `get_providers_id_connector_logos_main` - Get all links to the files associated with this connector.
* `get_providers_id_connector_logos_thumbnail` - Get all links to the files associated with this connector.
* `get_providers_id_connector_sources` - Get list of connector sources
* `get_providers_id_connector_sources_id_source_` - Get the connector source
* `get_providers_id_provider_` - Get a connector
* `get_users_id_user_connections` - Get connections
* `get_users_id_user_connections_id_connection_informations` - Get connection additionnal informations
* `get_users_id_user_connections_id_connection_logs` - Get connection logs
* `get_users_id_user_connections_id_connection_sources` - Get connection sources
* `get_users_id_user_logs` - Get connection logs
* `post_connections_id_connection_sources_id_source_` - "
* `post_connectors` - Request a new connector
* `post_connectors_id_connector_logos` - Create a connector Logo
* `post_users_id_user_connections` - Add a new connection.
* `post_users_id_user_connections_id_connection_` - Update a connection.
* `post_users_id_user_connections_id_connection_sources_id_source_` - "
* `put_connections_id_connection_sources_id_source_` - Update connection source
* `put_connectors_id_connector_logos` - Create or Update a connector Logo
* `put_connectors_id_connector_logos_id_logo_` - Create or Update a connector Logo.
* `put_connectors_id_connector_sources` - Edit several connector sources
* `put_connectors_id_connector_sources_id_source_` - Edit the provided connector source
* `put_users_id_user_connections_id_connection_` - Force synchronisation of a connection.
* `put_users_id_user_connections_id_connection_sources_id_source_` - Update connection source

### timeline

* `get_incidents` - Get incidents logs.

### transfer

* `get_webauth` - First step to establish an oAuth2 connection.

### users_management

* `delete_users_id_user_` - Delete the user
* `delete_users_id_user_config` - Delete the given user configurations. deletions on keys prefixed by 'biapi.' (except callback_url) are ignored
* `get_users` - Get users
* `get_users_id_user_` - Get a user
* `get_users_id_user_config` - Get configuration of a user.
* `get_users_id_user_profiles` - Get profiles
* `get_users_id_user_profiles_main` - Get the main profile
* `get_users_id_user_profiles_id_profile_` - Get a profile
* `post_users_id_user_config` - Change configuration of a user. modifications on keys prefixed by 'biapi.' (except callback_url) are ignored
* `post_users_id_user_token` - Create a token
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
