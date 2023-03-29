# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/beezup.com/2.0/go
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

    ctx := context.Background()
    res, err := s.AnalyticsGlobal.AnalyticsIndex(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyticsIndex != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### AnalyticsGlobal

* `AnalyticsIndex` - Get the Analytics API operation index
* `AnalyticsStoreIndex` - Get the Analytics API operation index for one store

### AnalyticsOptimisations

* `CopyOptimisation` - Copy product optimisations between 2 channels
* `Optimise` - Optimise products by page
* `OptimiseAll` - Optimise all products
* `OptimiseByCategory` - Optimise products by category
* `OptimiseByChannel` - Optimise products by channel
* `OptimiseByProduct` - Optimise product

### AnalyticsReports

* `DeleteReportFilter` - Delete the report filter
* `GetReportFilter` - Get the report filter description
* `GetReportFilters` - Get report filter list for the given store
* `SaveReportFilter` - Save the report filter

### AnalyticsRules

* `CreateRule` - Rule creation
* `DeleteRule` - Delete Rule
* `DisableRule` - Disable rule
* `EnableRule` - Enable rule
* `GetRule` - Gets the rule
* `GetRules` - Gets the list of rules for a given store
* `GetRulesExecutions` - Get the rules execution history
* `MoveDownRule` - Move the rule down
* `MoveUpRule` - Move the rule up
* `RunRule` - Run rule
* `RunRules` - Run all rules for this store
* `UpdateRule` - Update Rule

### AnalyticsStatistics

* `GetStoreReportByCategory` - Get the report by category
* `GetStoreReportByChannel` - Get the report by channel
* `GetStoreReportByDay` - Get the report by day for a StoreId
* `GetStoreReportByDayPerStore` - Get the report by day for a StoreId
* `GetStoreReportByProduct` - Get the report by product

### AnalyticsTracking

* `GetStoreTrackedClicks` - Get the latest tracked clicks
* `GetStoreTrackedExternalOrders` - Get the latest tracked external orders
* `GetStoreTrackedOrders` - Get the latest tracked orders
* `GetStoreTrackingStatus` - Get the synchronization status of clicks and orders of a store
* `GetTrackingStatus` - Get the global synchronization status of clicks and orders

### CatalogsAuto

* `AutoConfigureAutoImportInterval` - Configure Auto Import Interval
* `AutoDeleteAutoImport` - Delete Auto Import
* `AutoGetAutoImportConfiguration` - Get the auto import configuration
* `AutoPauseAutoImport` - Pause Auto Import
* `AutoResumeAutoImport` - Resume Auto Import
* `AutoScheduleAutoImport` - Configure Auto Import Schedules
* `AutoStartAutoImport` - Start Auto Import Manually
* `ImportationActivateAutoImport` - Activate the auto importation of the last successful manual catalog importation.

### CatalogsCatalog

* `CatalogStoreIndex` - Get the index of the catalog API for this store
* `CatalogChangeCatalogColumnUserName` - Change Catalog Column User Name
* `CatalogChangeCustomColumnExpression` - Change custom column expression
* `CatalogChangeCustomColumnUserName` - Change Custom Column User Name
* `CatalogComputeExpression` - Compute the expression for this catalog.
* `CatalogDeleteCustomColumn` - Delete custom column
* `CatalogGetCatalogColumns` - Get catalog column list
* `CatalogGetCategories` - Get category list
* `CatalogGetCustomColumnExpression` - Get the encrypted custom column expression
* `CatalogGetCustomColumns` - Get custom column list
* `CatalogGetProductByProductID` - Get product by ProductId
* `CatalogGetProductBySku` - Get product by Sku
* `CatalogGetProducts` - Get product list
* `CatalogGetRandomProducts` - Get random product list
* `CatalogSaveCustomColumn` - Create or replace a custom column
* `ImportationGetManualUpdateLastInputConfig` - Get the last input configuration

### CatalogsGlobal

* `CatalogIndex` - Get the index of the catalog API
* `CatalogGetBeezUPColumns` - Get the BeezUP columns

### CatalogsImportationCatalogInfo

* `ImportationConfigureCatalogColumn` - Configure catalog column
* `ImportationDeleteCustomColumn` - Delete Custom Column
* `ImportationGetCustomColumnExpression` - Get the encrypted custom column expression in this importation
* `ImportationGetCustomColumns` - Get custom columns currently place in this importation
* `ImportationGetDetectedCatalogColumns` - Get detected catalog columns during this importation.
* `ImportationGetProductSample` - Get the product sample related to this importation with all columns (catalog and custom)
* `ImportationGetProductSampleCustomColumnValue` - Get product sample custom column value related to this importation.
* `ImportationIgnoreColumn` - Ignore Column
* `ImportationMapCatalogColumn` - Map catalog column to a BeezUP column
* `ImportationMapCustomColumn` - Map custom column to a BeezUP column
* `ImportationReattendColumn` - Reattend Column
* `ImportationSaveCustomColumn` - Create or replace a custom column
* `ImportationUnmapCatalogColumn` - Unmap catalog column
* `ImportationUnmapCustomColumn` - Unmap custom column

### CatalogsImportationProcess

* `ImportationCancel` - Cancel importation
* `ImportationCommit` - Commit Importation
* `ImportationCommitColumns` - Commit columns
* `ImportationConfigureRemainingCatalogColumns` - Configure remaining catalog columns
* `ImportationGetImportationMonitoring` - Get the importation status
* `ImportationGetProductsReport` - Importation Get Products Report
* `ImportationGetReport` - Importation Get Report
* `ImportationGetReportings` - Get the latest catalog importation reporting
* `ImportationGetReportingsAllStores` - Get the latest catalog importation reporting for all your stores
* `ImportationStartManualUpdate` - Start Manual Import
* `ImportationTechnicalProgression` - Get technical progression

### ChannelCatalogsCategories

* `ConfigureChannelCatalogCategory` - Configure channel catalog category
* `DisableChannelCatalogCategoryMapping` - Disable a channel catalog category mapping
* `GetChannelCatalogCategories` - Get channel catalog categories
* `ReenableChannelCatalogCategoryMapping` - Reenable a channel catalog category mapping

### ChannelCatalogsColumnMappings

* `ConfigureChannelCatalogColumnMappings` - Configure channel catalog column mappings

### ChannelCatalogsExclusionFilters

* `ConfigureChannelCatalogExclusionFilters` - Configure channel catalog exclusion filters
* `GetChannelCatalogExclusionFilters` - Get channel catalog exclusion filters

### ChannelCatalogsExportations

* `ClearChannelCatalogExportationCache` - Clear the exportation cache
* `GetChannelCatalogExportationCacheInfo` - Get the exportation cache information
* `GetChannelCatalogExportationHistory` - Get the exportation history

### ChannelCatalogsGlobal

* `AddChannelCatalog` - Add a new channel catalog
* `DeleteChannelCatalog` - Delete the channel catalog
* `GetChannelCatalog` - Get the channel catalog information
* `GetChannelCatalogFilterOperators` - Get channel catalog filter operators
* `GetChannelCatalogs` - List all your current channel catalogs

### ChannelCatalogsLegacyTrackingGlobal

* `GetLegacyTrackingChannelCatalog` - Get the channel catalog configured to use legacy tracking format information
* `GetLegacyTrackingChannelCatalogs` - List all your current channel catalogs configured to use legacy tracking format
* `MigrateLegacyTrackingChannelCatalog` - Migrate a channel catalog to current tracking format

### ChannelCatalogsProducts

* `ExportChannelCatalogProductInfoList` - Export channel catalog product information list
* `GetChannelCatalogProductByChannelCatalog` - Get channel catalog products related to these channel catalogs
* `GetChannelCatalogProductInfo` - Get channel catalog product information
* `GetChannelCatalogProductInfoList` - Get channel catalog product information list
* `GetChannelCatalogProductsCounters` - Get channel catalog products' counters

### ChannelCatalogsProductsOptimisation

* `DisableChannelCatalogProduct` - Disable channel catalog product
* `ReenableChannelCatalogProduct` - Reenable channel catalog product

### ChannelCatalogsProductsOverrides

* `ConfigureChannelCatalogProductValueOverrideCopy` - Copy channel catalog product value override
* `DeleteChannelCatalogProductValueOverride` - Delete a specific channel catalog product value override
* `GetChannelCatalogProductValueOverrideCopy` - Get channel catalog product value override compatibilities status
* `OverrideChannelCatalogProductValues` - Override channel catalog product values

### ChannelCatalogsSettings

* `ConfigureChannelCatalogCostSettings` - Configure channel catalog cost settings
* `ConfigureChannelCatalogGeneralSettings` - Configure channel catalog general settings
* `DisableChannelCatalog` - Disable a channel catalog
* `EnableChannelCatalog` - Enable a channel catalog

### ChannelsChannelsGlobal

* `GetAvailableChannels` - List all available channel for this store
* `GetChannelCategories` - Get channel categories
* `GetChannelColumns` - Get channel columns
* `GetChannelInfo` - Get channel information

### CustomerAccount

* `ActivateUserAccount` - Activate the user account
* `ChangeEmail` - Change user email
* `ChangePassword` - Change user password
* `GetCreditCardInfo` - Get credit card information
* `GetProfilePictureInfo` - Get profile picture information
* `GetUserAccountInfo` - Get user account information
* `ResendEmailActivation` - Resend email activation
* `SaveCompanyInfo` - Change company information
* `SaveCreditCardInfo` - Save user credit card info
* `SavePersonalInfo` - Save user personal information
* `SaveProfilePictureInfo` - Change user picture information

### CustomerAlerts

* `GetStoreAlerts` - Get store's alerts
* `SaveStoreAlerts` - Save store alerts

### CustomerContracts

* `CreateContract` - Create a new contract
* `DeleteNextContract` - Delete your next contract
* `GetBillingPeriods` - Get billing periods conditions
* `GetContracts` - Get contract list
* `GetOffer` - Get offer pricing
* `GetStandardOffers` - Get all standard offers
* `ReactivateCurrentContract` - Reactivate your terminated contract.
* `TerminateCurrentContract` - Schedule termination of your current contract at the end of the commitment.

### CustomerFriends

* `GetFriendInfo` - Get friend information

### CustomerGlobal

* `GetCustomerIndex` - The index of all operations and LOV

### CustomerInvoices

* `GetInvoices` - Get all your invoices

### CustomerRights

* `GetRights` - Get store's rights

### CustomerSecurity

* `Logout` - Log out the current user from go2
* `ZendeskToken` - Zendesk token

### CustomerShares

* `DeleteStoreShare` - Delete a share of a store to another user
* `GetStoreShares` - Get shares related to this store
* `ShareStore` - Share a store to another user

### CustomerStores

* `CreateStore` - Create a new store
* `DeleteStore` - Delete a store
* `GetStore` - Get store's information
* `GetStores` - Get store list
* `UpdateStore` - Update some store's information.

### MarketplacesChannelCatalogsGlobal

* `GetMarketplaceChannelCatalogs` - Get your marketplace channel catalog list

### MarketplacesChannelCatalogsPublications

* `GetPublications` - Fetch the publication history for an account, sorted by descending start date
* `PublishCatalogToMarketplace` - [PREVIEW] Launch a publication of the catalog to the marketplace

### MarketplacesChannelCatalogsSettings

* `GetChannelCatalogMarketplaceProperties` - Get the marketplace properties for a channel catalog
* `GetChannelCatalogMarketplaceSettings` - Get the marketplace settings for a channel catalog
* `SetChannelCatalogMarketplaceSettings` - Save new marketplace settings for a channel catalog

### MarketplacesOrdersAutoTransitions

* `ConfigureAutomaticTransitions` - Configure new or existing automatic Order status transition
* `GetAutomaticTransitions` - Get list of configured automatic Order status transitions

### MarketplacesOrdersBatches

* `ChangeOrderList` - [DEPRECATED] Send a batch of operations to change your marketplace Order information: accept, ship, etc.  (max 100 items per call)
* `ClearMerchantOrderInfoList` - [DEPRECATED] Send a batch of operations to clear an Order's merchant information (max 100 items per call)
* `SetMerchantOrderInfoList` - [DEPRECATED] Send a batch of operations to set an Order's merchant information  (max 100 items per call)

### MarketplacesOrdersExports

* `ExportOrders` - Request a new Order report exportation to be generated
* `GetOrderExportations` - Get a paginated list of Order report exportations

### MarketplacesOrdersGlobal

* `GetMarketplaceAccountsSynchronization` - [DEPRECATED] Get current synchronization status between your marketplaces and BeezUP accounts
* `GetOrderIndex` - [DEPRECATED] Get all actions you can do on the order API
* `HarvestAll` - [DEPRECATED] Send harvest request to all your marketplaces

### MarketplacesOrdersList

* `GetOrderListFull` - [DEPRECATED] Get a paginated list of all Orders with all Order and Order Item(s) properties
* `GetOrderListLight` - [DEPRECATED] Get a paginated list of all Orders without details

### MarketplacesOrdersOrder

* `ChangeOrder` - [DEPRECATED] Change your marketplace Order Information (accept, ship, etc.)
* `ClearMerchantOrderInfo` - [DEPRECATED] Clear an Order's merchant information
* `GetOrder` - [DEPRECATED] DEPRECATED - Get full Order and Order Item(s) properties
* `GetOrderHistory` - [DEPRECATED] Get an Order's harvest and change history
* `HarvestOrder` - [DEPRECATED] Send harvest request for a single Order
* `HeadOrder` - [DEPRECATED] DEPRECATED - Get the meta information about the order (ETag, Last-Modified)
* `SetMerchantOrderInfo` - [DEPRECATED] Set an Order's merchant information

### MarketplacesOrdersSubscriptionsSubscriptions

* `ActivateSubscription` - Activate a subscription to the orders
* `CreateSubscription` - Creates a subscription to the orders
* `DeactivateSubscription` - Deactivate a subscription to the orders
* `DeleteSubscription` - Delete a subscription to the orders
* `GetSubscription` - Get a subscription to the orders
* `GetSubscriptionList` - Get the subscription list
* `GetSubscriptionPushReporting` - Get the push reporting related to this subscription
* `RetryPushOrders` - Force retry push orders immediatly

### MarketplacesOrdersV3Batches

* `ChangeOrderListV2` - Send a batch of operations to change your marketplace Order information: accept, ship, etc.  (max 100 items per call)
* `ChangeOrderListV3` - Send a batch of operations to change your marketplace Order information: accept, ship, etc.  (max 100 items per call)
* `ClearMerchantOrderInfoListV3` - Send a batch of operations to clear an Order's merchant information (max 100 items per call)
* `SetMerchantOrderInfoListV3` - Send a batch of operations to set an Order's merchant information  (max 100 items per call)

### MarketplacesOrdersV3Global

* `GetMarketplaceAccountsSynchronizationV3` - Get current synchronization status between your marketplaces and BeezUP accounts
* `GetOrderManagementReadyMarketplaceBusinessCode` - Get the list of MarketplaceBusinessCode ready for Order Management
* `HarvestAllV3` - Send harvest request to all your marketplaces

### MarketplacesOrdersV3List

* `GetOrderListFullV3` - Get a paginated list of all Orders with all Order and Order Item(s) properties
* `GetOrderListLightV3` - Get a paginated list of all Orders without details

### MarketplacesOrdersV3Order

* `ChangeOrderV3` - Change your marketplace Order Information (accept, ship, etc.)
* `ClearMerchantOrderInfoV3` - Clear an Order's merchant information
* `GetOrderChangeReportingV3` - Get the order change reporting
* `GetOrderHistoryV3` - Get an Order's harvest and change history
* `GetOrderV3` - Get full Order and Order Item(s) properties
* `HarvestAccount` - Send harvest request for an Account
* `HarvestOrderV3` - Send harvest request for a single Order
* `HeadOrderV3` - Get the meta information about the order (ETag, Last-Modified)
* `SetMerchantOrderInfoV3` - Set an Order's merchant information

### OMInvoiceAPIGeneration

* `GenerateOrderInvoice` - Generate an Order Invoice
* `GetOrderInvoicePdf` - Returns the PDF version of the invoice
* `GetOrderInvoicePreview` - View a preview an Order Invoice

### OMInvoiceAPISettings

* `GetOrderInvoiceDesignSettings` - Get Order Invoice design settings
* `GetOrderInvoiceDesignSettingsPreview` - View a preview an Order Invoice using custom design settings
* `GetOrderInvoiceGeneralSettings` - Get Order Invoice general settings
* `SaveOrderInvoiceDesignSettings` - Save Order Invoice design settings
* `SaveOrderInvoiceGeneralSettings` - Save Order Invoice general settings

### PublicChannelsPublicChannels

* `GetChannels` - The channel list for one country
* `GetChannelsIndex` - Get public channel index

### PublicListOfValuesLOV

* `GetPublicListOfValues` - Get the list of values related to this list name
* `GetPublicLovIndex` - Get all list names

### PublicSecuritySecurity

* `Login` - Login
* `LostPassword` - Lost password
* `Register` - User Registration

### UserListOfValuesLOV

* `GetUserListOfValues` - Get the list of values related to this list name
* `GetUserLovIndex` - Get all list names
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
