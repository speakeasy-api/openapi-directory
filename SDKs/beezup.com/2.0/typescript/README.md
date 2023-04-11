# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/beezup.com/2.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/beezup.com/2.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  AnalyticsIndexResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

sdk.analyticsGlobal.analyticsIndex().then((res: AnalyticsIndexResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### analyticsGlobal

* `analyticsIndex` - Get the Analytics API operation index
* `analyticsStoreIndex` - Get the Analytics API operation index for one store

### analyticsOptimisations

* `copyOptimisation` - Copy product optimisations between 2 channels
* `optimise` - Optimise products by page
* `optimiseAll` - Optimise all products
* `optimiseByCategory` - Optimise products by category
* `optimiseByChannel` - Optimise products by channel
* `optimiseByProduct` - Optimise product

### analyticsReports

* `deleteReportFilter` - Delete the report filter
* `getReportFilter` - Get the report filter description
* `getReportFilters` - Get report filter list for the given store
* `saveReportFilter` - Save the report filter

### analyticsRules

* `createRule` - Rule creation
* `deleteRule` - Delete Rule
* `disableRule` - Disable rule
* `enableRule` - Enable rule
* `getRule` - Gets the rule
* `getRules` - Gets the list of rules for a given store
* `getRulesExecutions` - Get the rules execution history
* `moveDownRule` - Move the rule down
* `moveUpRule` - Move the rule up
* `runRule` - Run rule
* `runRules` - Run all rules for this store
* `updateRule` - Update Rule

### analyticsStatistics

* `getStoreReportByCategory` - Get the report by category
* `getStoreReportByChannel` - Get the report by channel
* `getStoreReportByDay` - Get the report by day for a StoreId
* `getStoreReportByDayPerStore` - Get the report by day for a StoreId
* `getStoreReportByProduct` - Get the report by product

### analyticsTracking

* `getStoreTrackedClicks` - Get the latest tracked clicks
* `getStoreTrackedExternalOrders` - Get the latest tracked external orders
* `getStoreTrackedOrders` - Get the latest tracked orders
* `getStoreTrackingStatus` - Get the synchronization status of clicks and orders of a store
* `getTrackingStatus` - Get the global synchronization status of clicks and orders

### catalogsAuto

* `autoConfigureAutoImportInterval` - Configure Auto Import Interval
* `autoDeleteAutoImport` - Delete Auto Import
* `autoGetAutoImportConfiguration` - Get the auto import configuration
* `autoPauseAutoImport` - Pause Auto Import
* `autoResumeAutoImport` - Resume Auto Import
* `autoScheduleAutoImport` - Configure Auto Import Schedules
* `autoStartAutoImport` - Start Auto Import Manually
* `importationActivateAutoImport` - Activate the auto importation of the last successful manual catalog importation.

### catalogsCatalog

* `catalogStoreIndex` - Get the index of the catalog API for this store
* `catalogChangeCatalogColumnUserName` - Change Catalog Column User Name
* `catalogChangeCustomColumnExpression` - Change custom column expression
* `catalogChangeCustomColumnUserName` - Change Custom Column User Name
* `catalogComputeExpression` - Compute the expression for this catalog.
* `catalogDeleteCustomColumn` - Delete custom column
* `catalogGetCatalogColumns` - Get catalog column list
* `catalogGetCategories` - Get category list
* `catalogGetCustomColumnExpression` - Get the encrypted custom column expression
* `catalogGetCustomColumns` - Get custom column list
* `catalogGetProductByProductId` - Get product by ProductId
* `catalogGetProductBySku` - Get product by Sku
* `catalogGetProducts` - Get product list
* `catalogGetRandomProducts` - Get random product list
* `catalogSaveCustomColumn` - Create or replace a custom column
* `importationGetManualUpdateLastInputConfig` - Get the last input configuration

### catalogsGlobal

* `catalogIndex` - Get the index of the catalog API
* `catalogGetBeezUPColumns` - Get the BeezUP columns

### catalogsImportationCatalogInfo

* `importationConfigureCatalogColumn` - Configure catalog column
* `importationDeleteCustomColumn` - Delete Custom Column
* `importationGetCustomColumnExpression` - Get the encrypted custom column expression in this importation
* `importationGetCustomColumns` - Get custom columns currently place in this importation
* `importationGetDetectedCatalogColumns` - Get detected catalog columns during this importation.
* `importationGetProductSample` - Get the product sample related to this importation with all columns (catalog and custom)
* `importationGetProductSampleCustomColumnValue` - Get product sample custom column value related to this importation.
* `importationIgnoreColumn` - Ignore Column
* `importationMapCatalogColumn` - Map catalog column to a BeezUP column
* `importationMapCustomColumn` - Map custom column to a BeezUP column
* `importationReattendColumn` - Reattend Column
* `importationSaveCustomColumn` - Create or replace a custom column
* `importationUnmapCatalogColumn` - Unmap catalog column
* `importationUnmapCustomColumn` - Unmap custom column

### catalogsImportationProcess

* `importationCancel` - Cancel importation
* `importationCommit` - Commit Importation
* `importationCommitColumns` - Commit columns
* `importationConfigureRemainingCatalogColumns` - Configure remaining catalog columns
* `importationGetImportationMonitoring` - Get the importation status
* `importationGetProductsReport` - Importation Get Products Report
* `importationGetReport` - Importation Get Report
* `importationGetReportings` - Get the latest catalog importation reporting
* `importationGetReportingsAllStores` - Get the latest catalog importation reporting for all your stores
* `importationStartManualUpdate` - Start Manual Import
* `importationTechnicalProgression` - Get technical progression

### channelCatalogsCategories

* `configureChannelCatalogCategory` - Configure channel catalog category
* `disableChannelCatalogCategoryMapping` - Disable a channel catalog category mapping
* `getChannelCatalogCategories` - Get channel catalog categories
* `reenableChannelCatalogCategoryMapping` - Reenable a channel catalog category mapping

### channelCatalogsColumnMappings

* `configureChannelCatalogColumnMappings` - Configure channel catalog column mappings

### channelCatalogsExclusionFilters

* `configureChannelCatalogExclusionFilters` - Configure channel catalog exclusion filters
* `getChannelCatalogExclusionFilters` - Get channel catalog exclusion filters

### channelCatalogsExportations

* `clearChannelCatalogExportationCache` - Clear the exportation cache
* `getChannelCatalogExportationCacheInfo` - Get the exportation cache information
* `getChannelCatalogExportationHistory` - Get the exportation history

### channelCatalogsGlobal

* `addChannelCatalog` - Add a new channel catalog
* `deleteChannelCatalog` - Delete the channel catalog
* `getChannelCatalog` - Get the channel catalog information
* `getChannelCatalogFilterOperators` - Get channel catalog filter operators
* `getChannelCatalogs` - List all your current channel catalogs

### channelCatalogsLegacyTrackingGlobal

* `getLegacyTrackingChannelCatalog` - Get the channel catalog configured to use legacy tracking format information
* `getLegacyTrackingChannelCatalogs` - List all your current channel catalogs configured to use legacy tracking format
* `migrateLegacyTrackingChannelCatalog` - Migrate a channel catalog to current tracking format

### channelCatalogsProducts

* `exportChannelCatalogProductInfoList` - Export channel catalog product information list
* `getChannelCatalogProductByChannelCatalog` - Get channel catalog products related to these channel catalogs
* `getChannelCatalogProductInfo` - Get channel catalog product information
* `getChannelCatalogProductInfoList` - Get channel catalog product information list
* `getChannelCatalogProductsCounters` - Get channel catalog products' counters

### channelCatalogsProductsOptimisation

* `disableChannelCatalogProduct` - Disable channel catalog product
* `reenableChannelCatalogProduct` - Reenable channel catalog product

### channelCatalogsProductsOverrides

* `configureChannelCatalogProductValueOverrideCopy` - Copy channel catalog product value override
* `deleteChannelCatalogProductValueOverride` - Delete a specific channel catalog product value override
* `getChannelCatalogProductValueOverrideCopy` - Get channel catalog product value override compatibilities status
* `overrideChannelCatalogProductValues` - Override channel catalog product values

### channelCatalogsSettings

* `configureChannelCatalogCostSettings` - Configure channel catalog cost settings
* `configureChannelCatalogGeneralSettings` - Configure channel catalog general settings
* `disableChannelCatalog` - Disable a channel catalog
* `enableChannelCatalog` - Enable a channel catalog

### channelsChannelsGlobal

* `getAvailableChannels` - List all available channel for this store
* `getChannelCategories` - Get channel categories
* `getChannelColumns` - Get channel columns
* `getChannelInfo` - Get channel information

### customerAccount

* `activateUserAccount` - Activate the user account
* `changeEmail` - Change user email
* `changePassword` - Change user password
* `getCreditCardInfo` - Get credit card information
* `getProfilePictureInfo` - Get profile picture information
* `getUserAccountInfo` - Get user account information
* `resendEmailActivation` - Resend email activation
* `saveCompanyInfo` - Change company information
* `saveCreditCardInfo` - Save user credit card info
* `savePersonalInfo` - Save user personal information
* `saveProfilePictureInfo` - Change user picture information

### customerAlerts

* `getStoreAlerts` - Get store's alerts
* `saveStoreAlerts` - Save store alerts

### customerContracts

* `createContract` - Create a new contract
* `deleteNextContract` - Delete your next contract
* `getBillingPeriods` - Get billing periods conditions
* `getContracts` - Get contract list
* `getOffer` - Get offer pricing
* `getStandardOffers` - Get all standard offers
* `reactivateCurrentContract` - Reactivate your terminated contract.
* `terminateCurrentContract` - Schedule termination of your current contract at the end of the commitment.

### customerFriends

* `getFriendInfo` - Get friend information

### customerGlobal

* `getCustomerIndex` - The index of all operations and LOV

### customerInvoices

* `getInvoices` - Get all your invoices

### customerRights

* `getRights` - Get store's rights

### customerSecurity

* `logout` - Log out the current user from go2
* `zendeskToken` - Zendesk token

### customerShares

* `deleteStoreShare` - Delete a share of a store to another user
* `getStoreShares` - Get shares related to this store
* `shareStore` - Share a store to another user

### customerStores

* `createStore` - Create a new store
* `deleteStore` - Delete a store
* `getStore` - Get store's information
* `getStores` - Get store list
* `updateStore` - Update some store's information.

### marketplacesChannelCatalogsGlobal

* `getMarketplaceChannelCatalogs` - Get your marketplace channel catalog list

### marketplacesChannelCatalogsPublications

* `getPublications` - Fetch the publication history for an account, sorted by descending start date
* `publishCatalogToMarketplace` - [PREVIEW] Launch a publication of the catalog to the marketplace

### marketplacesChannelCatalogsSettings

* `getChannelCatalogMarketplaceProperties` - Get the marketplace properties for a channel catalog
* `getChannelCatalogMarketplaceSettings` - Get the marketplace settings for a channel catalog
* `setChannelCatalogMarketplaceSettings` - Save new marketplace settings for a channel catalog

### marketplacesOrdersAutoTransitions

* `configureAutomaticTransitions` - Configure new or existing automatic Order status transition
* `getAutomaticTransitions` - Get list of configured automatic Order status transitions

### marketplacesOrdersBatches

* `changeOrderList` - [DEPRECATED] Send a batch of operations to change your marketplace Order information: accept, ship, etc.  (max 100 items per call)
* `clearMerchantOrderInfoList` - [DEPRECATED] Send a batch of operations to clear an Order's merchant information (max 100 items per call)
* `setMerchantOrderInfoList` - [DEPRECATED] Send a batch of operations to set an Order's merchant information  (max 100 items per call)

### marketplacesOrdersExports

* `exportOrders` - Request a new Order report exportation to be generated
* `getOrderExportations` - Get a paginated list of Order report exportations

### marketplacesOrdersGlobal

* `getMarketplaceAccountsSynchronization` - [DEPRECATED] Get current synchronization status between your marketplaces and BeezUP accounts
* `getOrderIndex` - [DEPRECATED] Get all actions you can do on the order API
* `harvestAll` - [DEPRECATED] Send harvest request to all your marketplaces

### marketplacesOrdersList

* `getOrderListFull` - [DEPRECATED] Get a paginated list of all Orders with all Order and Order Item(s) properties
* `getOrderListLight` - [DEPRECATED] Get a paginated list of all Orders without details

### marketplacesOrdersOrder

* `changeOrder` - [DEPRECATED] Change your marketplace Order Information (accept, ship, etc.)
* `clearMerchantOrderInfo` - [DEPRECATED] Clear an Order's merchant information
* `getOrder` - [DEPRECATED] DEPRECATED - Get full Order and Order Item(s) properties
* `getOrderHistory` - [DEPRECATED] Get an Order's harvest and change history
* `harvestOrder` - [DEPRECATED] Send harvest request for a single Order
* `headOrder` - [DEPRECATED] DEPRECATED - Get the meta information about the order (ETag, Last-Modified)
* `setMerchantOrderInfo` - [DEPRECATED] Set an Order's merchant information

### marketplacesOrdersSubscriptionsSubscriptions

* `activateSubscription` - Activate a subscription to the orders
* `createSubscription` - Creates a subscription to the orders
* `deactivateSubscription` - Deactivate a subscription to the orders
* `deleteSubscription` - Delete a subscription to the orders
* `getSubscription` - Get a subscription to the orders
* `getSubscriptionList` - Get the subscription list
* `getSubscriptionPushReporting` - Get the push reporting related to this subscription
* `retryPushOrders` - Force retry push orders immediatly

### marketplacesOrdersV3Batches

* `changeOrderListV2` - Send a batch of operations to change your marketplace Order information: accept, ship, etc.  (max 100 items per call)
* `changeOrderListV3` - Send a batch of operations to change your marketplace Order information: accept, ship, etc.  (max 100 items per call)
* `clearMerchantOrderInfoListV3` - Send a batch of operations to clear an Order's merchant information (max 100 items per call)
* `setMerchantOrderInfoListV3` - Send a batch of operations to set an Order's merchant information  (max 100 items per call)

### marketplacesOrdersV3Global

* `getMarketplaceAccountsSynchronizationV3` - Get current synchronization status between your marketplaces and BeezUP accounts
* `getOrderManagementReadyMarketplaceBusinessCode` - Get the list of MarketplaceBusinessCode ready for Order Management
* `harvestAllV3` - Send harvest request to all your marketplaces

### marketplacesOrdersV3List

* `getOrderListFullV3` - Get a paginated list of all Orders with all Order and Order Item(s) properties
* `getOrderListLightV3` - Get a paginated list of all Orders without details

### marketplacesOrdersV3Order

* `changeOrderV3` - Change your marketplace Order Information (accept, ship, etc.)
* `clearMerchantOrderInfoV3` - Clear an Order's merchant information
* `getOrderChangeReportingV3` - Get the order change reporting
* `getOrderHistoryV3` - Get an Order's harvest and change history
* `getOrderV3` - Get full Order and Order Item(s) properties
* `harvestAccount` - Send harvest request for an Account
* `harvestOrderV3` - Send harvest request for a single Order
* `headOrderV3` - Get the meta information about the order (ETag, Last-Modified)
* `setMerchantOrderInfoV3` - Set an Order's merchant information

### omInvoiceAPIGeneration

* `generateBatchOrderInvoice` - Generate an Order Invoice batch
* `generateOrderInvoice` - Generate an Order Invoice
* `getOrderInvoicePdf` - Returns the PDF version of the invoice
* `getOrderInvoicePreview` - View a preview an Order Invoice

### omInvoiceAPISettings

* `getOrderInvoiceDesignSettings` - Get Order Invoice design settings
* `getOrderInvoiceDesignSettingsPreview` - View a preview an Order Invoice using custom design settings
* `getOrderInvoiceGeneralSettings` - Get Order Invoice general settings
* `saveOrderInvoiceDesignSettings` - Save Order Invoice design settings
* `saveOrderInvoiceGeneralSettings` - Save Order Invoice general settings

### publicChannelsPublicChannels

* `getChannels` - The channel list for one country
* `getChannelsIndex` - Get public channel index

### publicListOfValuesLOV

* `getPublicListOfValues` - Get the list of values related to this list name
* `getPublicLovIndex` - Get all list names

### publicSecuritySecurity

* `login` - Login
* `lostPassword` - Lost password
* `register` - User Registration

### userListOfValuesLOV

* `getUserListOfValues` - Get the list of values related to this list name
* `getUserLovIndex` - Get all list names
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

