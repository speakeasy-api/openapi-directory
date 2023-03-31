# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/beezup.com/2.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()

    
res = s.analytics_global.analytics_index()

if res.analytics_index is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### analytics_global

* `analytics_index` - Get the Analytics API operation index
* `analytics_store_index` - Get the Analytics API operation index for one store

### analytics_optimisations

* `copy_optimisation` - Copy product optimisations between 2 channels
* `optimise` - Optimise products by page
* `optimise_all` - Optimise all products
* `optimise_by_category` - Optimise products by category
* `optimise_by_channel` - Optimise products by channel
* `optimise_by_product` - Optimise product

### analytics_reports

* `delete_report_filter` - Delete the report filter
* `get_report_filter` - Get the report filter description
* `get_report_filters` - Get report filter list for the given store
* `save_report_filter` - Save the report filter

### analytics_rules

* `create_rule` - Rule creation
* `delete_rule` - Delete Rule
* `disable_rule` - Disable rule
* `enable_rule` - Enable rule
* `get_rule` - Gets the rule
* `get_rules` - Gets the list of rules for a given store
* `get_rules_executions` - Get the rules execution history
* `move_down_rule` - Move the rule down
* `move_up_rule` - Move the rule up
* `run_rule` - Run rule
* `run_rules` - Run all rules for this store
* `update_rule` - Update Rule

### analytics_statistics

* `get_store_report_by_category` - Get the report by category
* `get_store_report_by_channel` - Get the report by channel
* `get_store_report_by_day` - Get the report by day for a StoreId
* `get_store_report_by_day_per_store` - Get the report by day for a StoreId
* `get_store_report_by_product` - Get the report by product

### analytics_tracking

* `get_store_tracked_clicks` - Get the latest tracked clicks
* `get_store_tracked_external_orders` - Get the latest tracked external orders
* `get_store_tracked_orders` - Get the latest tracked orders
* `get_store_tracking_status` - Get the synchronization status of clicks and orders of a store
* `get_tracking_status` - Get the global synchronization status of clicks and orders

### catalogs_auto

* `auto_configure_auto_import_interval` - Configure Auto Import Interval
* `auto_delete_auto_import` - Delete Auto Import
* `auto_get_auto_import_configuration` - Get the auto import configuration
* `auto_pause_auto_import` - Pause Auto Import
* `auto_resume_auto_import` - Resume Auto Import
* `auto_schedule_auto_import` - Configure Auto Import Schedules
* `auto_start_auto_import` - Start Auto Import Manually
* `importation_activate_auto_import` - Activate the auto importation of the last successful manual catalog importation.

### catalogs_catalog

* `catalog_store_index` - Get the index of the catalog API for this store
* `catalog_change_catalog_column_user_name` - Change Catalog Column User Name
* `catalog_change_custom_column_expression` - Change custom column expression
* `catalog_change_custom_column_user_name` - Change Custom Column User Name
* `catalog_compute_expression` - Compute the expression for this catalog.
* `catalog_delete_custom_column` - Delete custom column
* `catalog_get_catalog_columns` - Get catalog column list
* `catalog_get_categories` - Get category list
* `catalog_get_custom_column_expression` - Get the encrypted custom column expression
* `catalog_get_custom_columns` - Get custom column list
* `catalog_get_product_by_product_id` - Get product by ProductId
* `catalog_get_product_by_sku` - Get product by Sku
* `catalog_get_products` - Get product list
* `catalog_get_random_products` - Get random product list
* `catalog_save_custom_column` - Create or replace a custom column
* `importation_get_manual_update_last_input_config` - Get the last input configuration

### catalogs_global

* `catalog_index` - Get the index of the catalog API
* `catalog_get_beez_up_columns` - Get the BeezUP columns

### catalogs_importation_catalog_info

* `importation_configure_catalog_column` - Configure catalog column
* `importation_delete_custom_column` - Delete Custom Column
* `importation_get_custom_column_expression` - Get the encrypted custom column expression in this importation
* `importation_get_custom_columns` - Get custom columns currently place in this importation
* `importation_get_detected_catalog_columns` - Get detected catalog columns during this importation.
* `importation_get_product_sample` - Get the product sample related to this importation with all columns (catalog and custom)
* `importation_get_product_sample_custom_column_value` - Get product sample custom column value related to this importation.
* `importation_ignore_column` - Ignore Column
* `importation_map_catalog_column` - Map catalog column to a BeezUP column
* `importation_map_custom_column` - Map custom column to a BeezUP column
* `importation_reattend_column` - Reattend Column
* `importation_save_custom_column` - Create or replace a custom column
* `importation_unmap_catalog_column` - Unmap catalog column
* `importation_unmap_custom_column` - Unmap custom column

### catalogs_importation_process

* `importation_cancel` - Cancel importation
* `importation_commit` - Commit Importation
* `importation_commit_columns` - Commit columns
* `importation_configure_remaining_catalog_columns` - Configure remaining catalog columns
* `importation_get_importation_monitoring` - Get the importation status
* `importation_get_products_report` - Importation Get Products Report
* `importation_get_report` - Importation Get Report
* `importation_get_reportings` - Get the latest catalog importation reporting
* `importation_get_reportings_all_stores` - Get the latest catalog importation reporting for all your stores
* `importation_start_manual_update` - Start Manual Import
* `importation_technical_progression` - Get technical progression

### channel_catalogs_categories

* `configure_channel_catalog_category` - Configure channel catalog category
* `disable_channel_catalog_category_mapping` - Disable a channel catalog category mapping
* `get_channel_catalog_categories` - Get channel catalog categories
* `reenable_channel_catalog_category_mapping` - Reenable a channel catalog category mapping

### channel_catalogs_column_mappings

* `configure_channel_catalog_column_mappings` - Configure channel catalog column mappings

### channel_catalogs_exclusion_filters

* `configure_channel_catalog_exclusion_filters` - Configure channel catalog exclusion filters
* `get_channel_catalog_exclusion_filters` - Get channel catalog exclusion filters

### channel_catalogs_exportations

* `clear_channel_catalog_exportation_cache` - Clear the exportation cache
* `get_channel_catalog_exportation_cache_info` - Get the exportation cache information
* `get_channel_catalog_exportation_history` - Get the exportation history

### channel_catalogs_global

* `add_channel_catalog` - Add a new channel catalog
* `delete_channel_catalog` - Delete the channel catalog
* `get_channel_catalog` - Get the channel catalog information
* `get_channel_catalog_filter_operators` - Get channel catalog filter operators
* `get_channel_catalogs` - List all your current channel catalogs

### channel_catalogs_legacy_tracking_global

* `get_legacy_tracking_channel_catalog` - Get the channel catalog configured to use legacy tracking format information
* `get_legacy_tracking_channel_catalogs` - List all your current channel catalogs configured to use legacy tracking format
* `migrate_legacy_tracking_channel_catalog` - Migrate a channel catalog to current tracking format

### channel_catalogs_products

* `export_channel_catalog_product_info_list` - Export channel catalog product information list
* `get_channel_catalog_product_by_channel_catalog` - Get channel catalog products related to these channel catalogs
* `get_channel_catalog_product_info` - Get channel catalog product information
* `get_channel_catalog_product_info_list` - Get channel catalog product information list
* `get_channel_catalog_products_counters` - Get channel catalog products' counters

### channel_catalogs_products_optimisation

* `disable_channel_catalog_product` - Disable channel catalog product
* `reenable_channel_catalog_product` - Reenable channel catalog product

### channel_catalogs_products_overrides

* `configure_channel_catalog_product_value_override_copy` - Copy channel catalog product value override
* `delete_channel_catalog_product_value_override` - Delete a specific channel catalog product value override
* `get_channel_catalog_product_value_override_copy` - Get channel catalog product value override compatibilities status
* `override_channel_catalog_product_values` - Override channel catalog product values

### channel_catalogs_settings

* `configure_channel_catalog_cost_settings` - Configure channel catalog cost settings
* `configure_channel_catalog_general_settings` - Configure channel catalog general settings
* `disable_channel_catalog` - Disable a channel catalog
* `enable_channel_catalog` - Enable a channel catalog

### channels_channels_global

* `get_available_channels` - List all available channel for this store
* `get_channel_categories` - Get channel categories
* `get_channel_columns` - Get channel columns
* `get_channel_info` - Get channel information

### customer_account

* `activate_user_account` - Activate the user account
* `change_email` - Change user email
* `change_password` - Change user password
* `get_credit_card_info` - Get credit card information
* `get_profile_picture_info` - Get profile picture information
* `get_user_account_info` - Get user account information
* `resend_email_activation` - Resend email activation
* `save_company_info` - Change company information
* `save_credit_card_info` - Save user credit card info
* `save_personal_info` - Save user personal information
* `save_profile_picture_info` - Change user picture information

### customer_alerts

* `get_store_alerts` - Get store's alerts
* `save_store_alerts` - Save store alerts

### customer_contracts

* `create_contract` - Create a new contract
* `delete_next_contract` - Delete your next contract
* `get_billing_periods` - Get billing periods conditions
* `get_contracts` - Get contract list
* `get_offer` - Get offer pricing
* `get_standard_offers` - Get all standard offers
* `reactivate_current_contract` - Reactivate your terminated contract.
* `terminate_current_contract` - Schedule termination of your current contract at the end of the commitment.

### customer_friends

* `get_friend_info` - Get friend information

### customer_global

* `get_customer_index` - The index of all operations and LOV

### customer_invoices

* `get_invoices` - Get all your invoices

### customer_rights

* `get_rights` - Get store's rights

### customer_security

* `logout` - Log out the current user from go2
* `zendesk_token` - Zendesk token

### customer_shares

* `delete_store_share` - Delete a share of a store to another user
* `get_store_shares` - Get shares related to this store
* `share_store` - Share a store to another user

### customer_stores

* `create_store` - Create a new store
* `delete_store` - Delete a store
* `get_store` - Get store's information
* `get_stores` - Get store list
* `update_store` - Update some store's information.

### marketplaces_channel_catalogs_global

* `get_marketplace_channel_catalogs` - Get your marketplace channel catalog list

### marketplaces_channel_catalogs_publications

* `get_publications` - Fetch the publication history for an account, sorted by descending start date
* `publish_catalog_to_marketplace` - [PREVIEW] Launch a publication of the catalog to the marketplace

### marketplaces_channel_catalogs_settings

* `get_channel_catalog_marketplace_properties` - Get the marketplace properties for a channel catalog
* `get_channel_catalog_marketplace_settings` - Get the marketplace settings for a channel catalog
* `set_channel_catalog_marketplace_settings` - Save new marketplace settings for a channel catalog

### marketplaces_orders_auto_transitions

* `configure_automatic_transitions` - Configure new or existing automatic Order status transition
* `get_automatic_transitions` - Get list of configured automatic Order status transitions

### marketplaces_orders_batches

* `change_order_list` - [DEPRECATED] Send a batch of operations to change your marketplace Order information: accept, ship, etc.  (max 100 items per call)
* `clear_merchant_order_info_list` - [DEPRECATED] Send a batch of operations to clear an Order's merchant information (max 100 items per call)
* `set_merchant_order_info_list` - [DEPRECATED] Send a batch of operations to set an Order's merchant information  (max 100 items per call)

### marketplaces_orders_exports

* `export_orders` - Request a new Order report exportation to be generated
* `get_order_exportations` - Get a paginated list of Order report exportations

### marketplaces_orders_global

* `get_marketplace_accounts_synchronization` - [DEPRECATED] Get current synchronization status between your marketplaces and BeezUP accounts
* `get_order_index` - [DEPRECATED] Get all actions you can do on the order API
* `harvest_all` - [DEPRECATED] Send harvest request to all your marketplaces

### marketplaces_orders_list

* `get_order_list_full` - [DEPRECATED] Get a paginated list of all Orders with all Order and Order Item(s) properties
* `get_order_list_light` - [DEPRECATED] Get a paginated list of all Orders without details

### marketplaces_orders_order

* `change_order` - [DEPRECATED] Change your marketplace Order Information (accept, ship, etc.)
* `clear_merchant_order_info` - [DEPRECATED] Clear an Order's merchant information
* `get_order` - [DEPRECATED] DEPRECATED - Get full Order and Order Item(s) properties
* `get_order_history` - [DEPRECATED] Get an Order's harvest and change history
* `harvest_order` - [DEPRECATED] Send harvest request for a single Order
* `head_order` - [DEPRECATED] DEPRECATED - Get the meta information about the order (ETag, Last-Modified)
* `set_merchant_order_info` - [DEPRECATED] Set an Order's merchant information

### marketplaces_orders_subscriptions_subscriptions

* `activate_subscription` - Activate a subscription to the orders
* `create_subscription` - Creates a subscription to the orders
* `deactivate_subscription` - Deactivate a subscription to the orders
* `delete_subscription` - Delete a subscription to the orders
* `get_subscription` - Get a subscription to the orders
* `get_subscription_list` - Get the subscription list
* `get_subscription_push_reporting` - Get the push reporting related to this subscription
* `retry_push_orders` - Force retry push orders immediatly

### marketplaces_orders_v3_batches

* `change_order_list_v2` - Send a batch of operations to change your marketplace Order information: accept, ship, etc.  (max 100 items per call)
* `change_order_list_v3` - Send a batch of operations to change your marketplace Order information: accept, ship, etc.  (max 100 items per call)
* `clear_merchant_order_info_list_v3` - Send a batch of operations to clear an Order's merchant information (max 100 items per call)
* `set_merchant_order_info_list_v3` - Send a batch of operations to set an Order's merchant information  (max 100 items per call)

### marketplaces_orders_v3_global

* `get_marketplace_accounts_synchronization_v3` - Get current synchronization status between your marketplaces and BeezUP accounts
* `get_order_management_ready_marketplace_business_code` - Get the list of MarketplaceBusinessCode ready for Order Management
* `harvest_all_v3` - Send harvest request to all your marketplaces

### marketplaces_orders_v3_list

* `get_order_list_full_v3` - Get a paginated list of all Orders with all Order and Order Item(s) properties
* `get_order_list_light_v3` - Get a paginated list of all Orders without details

### marketplaces_orders_v3_order

* `change_order_v3` - Change your marketplace Order Information (accept, ship, etc.)
* `clear_merchant_order_info_v3` - Clear an Order's merchant information
* `get_order_change_reporting_v3` - Get the order change reporting
* `get_order_history_v3` - Get an Order's harvest and change history
* `get_order_v3` - Get full Order and Order Item(s) properties
* `harvest_account` - Send harvest request for an Account
* `harvest_order_v3` - Send harvest request for a single Order
* `head_order_v3` - Get the meta information about the order (ETag, Last-Modified)
* `set_merchant_order_info_v3` - Set an Order's merchant information

### om_invoice_api_generation

* `generate_batch_order_invoice` - Generate an Order Invoice batch
* `generate_order_invoice` - Generate an Order Invoice
* `get_order_invoice_pdf` - Returns the PDF version of the invoice
* `get_order_invoice_preview` - View a preview an Order Invoice

### om_invoice_api_settings

* `get_order_invoice_design_settings` - Get Order Invoice design settings
* `get_order_invoice_design_settings_preview` - View a preview an Order Invoice using custom design settings
* `get_order_invoice_general_settings` - Get Order Invoice general settings
* `save_order_invoice_design_settings` - Save Order Invoice design settings
* `save_order_invoice_general_settings` - Save Order Invoice general settings

### public_channels_public_channels

* `get_channels` - The channel list for one country
* `get_channels_index` - Get public channel index

### public_list_of_values_lov

* `get_public_list_of_values` - Get the list of values related to this list name
* `get_public_lov_index` - Get all list names

### public_security_security

* `login` - Login
* `lost_password` - Lost password
* `register` - User Registration

### user_list_of_values_lov

* `get_user_list_of_values` - Get the list of values related to this list name
* `get_user_lov_index` - Get all list names
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
