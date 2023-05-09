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

import(
	"context"
	"log"
	"openapi"
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
## Available Resources and Operations


### [AnalyticsGlobal](docs/analyticsglobal/README.md)

* [AnalyticsIndex](docs/analyticsglobal/README.md#analyticsindex) - Get the Analytics API operation index
* [AnalyticsStoreIndex](docs/analyticsglobal/README.md#analyticsstoreindex) - Get the Analytics API operation index for one store

### [AnalyticsOptimisations](docs/analyticsoptimisations/README.md)

* [CopyOptimisation](docs/analyticsoptimisations/README.md#copyoptimisation) - Copy product optimisations between 2 channels
* [Optimise](docs/analyticsoptimisations/README.md#optimise) - Optimise products by page
* [OptimiseAll](docs/analyticsoptimisations/README.md#optimiseall) - Optimise all products
* [OptimiseByCategory](docs/analyticsoptimisations/README.md#optimisebycategory) - Optimise products by category
* [OptimiseByChannel](docs/analyticsoptimisations/README.md#optimisebychannel) - Optimise products by channel
* [OptimiseByProduct](docs/analyticsoptimisations/README.md#optimisebyproduct) - Optimise product

### [AnalyticsReports](docs/analyticsreports/README.md)

* [DeleteReportFilter](docs/analyticsreports/README.md#deletereportfilter) - Delete the report filter
* [GetReportFilter](docs/analyticsreports/README.md#getreportfilter) - Get the report filter description
* [GetReportFilters](docs/analyticsreports/README.md#getreportfilters) - Get report filter list for the given store
* [SaveReportFilter](docs/analyticsreports/README.md#savereportfilter) - Save the report filter

### [AnalyticsRules](docs/analyticsrules/README.md)

* [CreateRule](docs/analyticsrules/README.md#createrule) - Rule creation
* [DeleteRule](docs/analyticsrules/README.md#deleterule) - Delete Rule
* [DisableRule](docs/analyticsrules/README.md#disablerule) - Disable rule
* [EnableRule](docs/analyticsrules/README.md#enablerule) - Enable rule
* [GetRule](docs/analyticsrules/README.md#getrule) - Gets the rule
* [GetRules](docs/analyticsrules/README.md#getrules) - Gets the list of rules for a given store
* [GetRulesExecutions](docs/analyticsrules/README.md#getrulesexecutions) - Get the rules execution history
* [MoveDownRule](docs/analyticsrules/README.md#movedownrule) - Move the rule down
* [MoveUpRule](docs/analyticsrules/README.md#moveuprule) - Move the rule up
* [RunRule](docs/analyticsrules/README.md#runrule) - Run rule
* [RunRules](docs/analyticsrules/README.md#runrules) - Run all rules for this store
* [UpdateRule](docs/analyticsrules/README.md#updaterule) - Update Rule

### [AnalyticsStatistics](docs/analyticsstatistics/README.md)

* [GetStoreReportByCategory](docs/analyticsstatistics/README.md#getstorereportbycategory) - Get the report by category
* [GetStoreReportByChannel](docs/analyticsstatistics/README.md#getstorereportbychannel) - Get the report by channel
* [GetStoreReportByDay](docs/analyticsstatistics/README.md#getstorereportbyday) - Get the report by day for a StoreId
* [GetStoreReportByDayPerStore](docs/analyticsstatistics/README.md#getstorereportbydayperstore) - Get the report by day for a StoreId
* [GetStoreReportByProduct](docs/analyticsstatistics/README.md#getstorereportbyproduct) - Get the report by product

### [AnalyticsTracking](docs/analyticstracking/README.md)

* [GetStoreTrackedClicks](docs/analyticstracking/README.md#getstoretrackedclicks) - Get the latest tracked clicks
* [GetStoreTrackedExternalOrders](docs/analyticstracking/README.md#getstoretrackedexternalorders) - Get the latest tracked external orders
* [GetStoreTrackedOrders](docs/analyticstracking/README.md#getstoretrackedorders) - Get the latest tracked orders
* [GetStoreTrackingStatus](docs/analyticstracking/README.md#getstoretrackingstatus) - Get the synchronization status of clicks and orders of a store
* [GetTrackingStatus](docs/analyticstracking/README.md#gettrackingstatus) - Get the global synchronization status of clicks and orders

### [CatalogsAuto](docs/catalogsauto/README.md)

* [AutoConfigureAutoImportInterval](docs/catalogsauto/README.md#autoconfigureautoimportinterval) - Configure Auto Import Interval
* [AutoDeleteAutoImport](docs/catalogsauto/README.md#autodeleteautoimport) - Delete Auto Import
* [AutoGetAutoImportConfiguration](docs/catalogsauto/README.md#autogetautoimportconfiguration) - Get the auto import configuration
* [AutoPauseAutoImport](docs/catalogsauto/README.md#autopauseautoimport) - Pause Auto Import
* [AutoResumeAutoImport](docs/catalogsauto/README.md#autoresumeautoimport) - Resume Auto Import
* [AutoScheduleAutoImport](docs/catalogsauto/README.md#autoscheduleautoimport) - Configure Auto Import Schedules
* [AutoStartAutoImport](docs/catalogsauto/README.md#autostartautoimport) - Start Auto Import Manually
* [ImportationActivateAutoImport](docs/catalogsauto/README.md#importationactivateautoimport) - Activate the auto importation of the last successful manual catalog importation.

### [CatalogsCatalog](docs/catalogscatalog/README.md)

* [CatalogStoreIndex](docs/catalogscatalog/README.md#catalogstoreindex) - Get the index of the catalog API for this store
* [CatalogChangeCatalogColumnUserName](docs/catalogscatalog/README.md#catalogchangecatalogcolumnusername) - Change Catalog Column User Name
* [CatalogChangeCustomColumnExpression](docs/catalogscatalog/README.md#catalogchangecustomcolumnexpression) - Change custom column expression
* [CatalogChangeCustomColumnUserName](docs/catalogscatalog/README.md#catalogchangecustomcolumnusername) - Change Custom Column User Name
* [CatalogComputeExpression](docs/catalogscatalog/README.md#catalogcomputeexpression) - Compute the expression for this catalog.
* [CatalogDeleteCustomColumn](docs/catalogscatalog/README.md#catalogdeletecustomcolumn) - Delete custom column
* [CatalogGetCatalogColumns](docs/catalogscatalog/README.md#cataloggetcatalogcolumns) - Get catalog column list
* [CatalogGetCategories](docs/catalogscatalog/README.md#cataloggetcategories) - Get category list
* [CatalogGetCustomColumnExpression](docs/catalogscatalog/README.md#cataloggetcustomcolumnexpression) - Get the encrypted custom column expression
* [CatalogGetCustomColumns](docs/catalogscatalog/README.md#cataloggetcustomcolumns) - Get custom column list
* [CatalogGetProductByProductID](docs/catalogscatalog/README.md#cataloggetproductbyproductid) - Get product by ProductId
* [CatalogGetProductBySku](docs/catalogscatalog/README.md#cataloggetproductbysku) - Get product by Sku
* [CatalogGetProducts](docs/catalogscatalog/README.md#cataloggetproducts) - Get product list
* [CatalogGetRandomProducts](docs/catalogscatalog/README.md#cataloggetrandomproducts) - Get random product list
* [CatalogSaveCustomColumn](docs/catalogscatalog/README.md#catalogsavecustomcolumn) - Create or replace a custom column
* [ImportationGetManualUpdateLastInputConfig](docs/catalogscatalog/README.md#importationgetmanualupdatelastinputconfig) - Get the last input configuration

### [CatalogsGlobal](docs/catalogsglobal/README.md)

* [CatalogIndex](docs/catalogsglobal/README.md#catalogindex) - Get the index of the catalog API
* [CatalogGetBeezUPColumns](docs/catalogsglobal/README.md#cataloggetbeezupcolumns) - Get the BeezUP columns

### [CatalogsImportationCatalogInfo](docs/catalogsimportationcataloginfo/README.md)

* [ImportationConfigureCatalogColumn](docs/catalogsimportationcataloginfo/README.md#importationconfigurecatalogcolumn) - Configure catalog column
* [ImportationDeleteCustomColumn](docs/catalogsimportationcataloginfo/README.md#importationdeletecustomcolumn) - Delete Custom Column
* [ImportationGetCustomColumnExpression](docs/catalogsimportationcataloginfo/README.md#importationgetcustomcolumnexpression) - Get the encrypted custom column expression in this importation
* [ImportationGetCustomColumns](docs/catalogsimportationcataloginfo/README.md#importationgetcustomcolumns) - Get custom columns currently place in this importation
* [ImportationGetDetectedCatalogColumns](docs/catalogsimportationcataloginfo/README.md#importationgetdetectedcatalogcolumns) - Get detected catalog columns during this importation.
* [ImportationGetProductSample](docs/catalogsimportationcataloginfo/README.md#importationgetproductsample) - Get the product sample related to this importation with all columns (catalog and custom)
* [ImportationGetProductSampleCustomColumnValue](docs/catalogsimportationcataloginfo/README.md#importationgetproductsamplecustomcolumnvalue) - Get product sample custom column value related to this importation.
* [ImportationIgnoreColumn](docs/catalogsimportationcataloginfo/README.md#importationignorecolumn) - Ignore Column
* [ImportationMapCatalogColumn](docs/catalogsimportationcataloginfo/README.md#importationmapcatalogcolumn) - Map catalog column to a BeezUP column
* [ImportationMapCustomColumn](docs/catalogsimportationcataloginfo/README.md#importationmapcustomcolumn) - Map custom column to a BeezUP column
* [ImportationReattendColumn](docs/catalogsimportationcataloginfo/README.md#importationreattendcolumn) - Reattend Column
* [ImportationSaveCustomColumn](docs/catalogsimportationcataloginfo/README.md#importationsavecustomcolumn) - Create or replace a custom column
* [ImportationUnmapCatalogColumn](docs/catalogsimportationcataloginfo/README.md#importationunmapcatalogcolumn) - Unmap catalog column
* [ImportationUnmapCustomColumn](docs/catalogsimportationcataloginfo/README.md#importationunmapcustomcolumn) - Unmap custom column

### [CatalogsImportationProcess](docs/catalogsimportationprocess/README.md)

* [ImportationCancel](docs/catalogsimportationprocess/README.md#importationcancel) - Cancel importation
* [ImportationCommit](docs/catalogsimportationprocess/README.md#importationcommit) - Commit Importation
* [ImportationCommitColumns](docs/catalogsimportationprocess/README.md#importationcommitcolumns) - Commit columns
* [ImportationConfigureRemainingCatalogColumns](docs/catalogsimportationprocess/README.md#importationconfigureremainingcatalogcolumns) - Configure remaining catalog columns
* [ImportationGetImportationMonitoring](docs/catalogsimportationprocess/README.md#importationgetimportationmonitoring) - Get the importation status
* [ImportationGetProductsReport](docs/catalogsimportationprocess/README.md#importationgetproductsreport) - Importation Get Products Report
* [ImportationGetReport](docs/catalogsimportationprocess/README.md#importationgetreport) - Importation Get Report
* [ImportationGetReportings](docs/catalogsimportationprocess/README.md#importationgetreportings) - Get the latest catalog importation reporting
* [ImportationGetReportingsAllStores](docs/catalogsimportationprocess/README.md#importationgetreportingsallstores) - Get the latest catalog importation reporting for all your stores
* [ImportationStartManualUpdate](docs/catalogsimportationprocess/README.md#importationstartmanualupdate) - Start Manual Import
* [ImportationTechnicalProgression](docs/catalogsimportationprocess/README.md#importationtechnicalprogression) - Get technical progression

### [ChannelCatalogsCategories](docs/channelcatalogscategories/README.md)

* [ConfigureChannelCatalogCategory](docs/channelcatalogscategories/README.md#configurechannelcatalogcategory) - Configure channel catalog category
* [DisableChannelCatalogCategoryMapping](docs/channelcatalogscategories/README.md#disablechannelcatalogcategorymapping) - Disable a channel catalog category mapping
* [GetChannelCatalogCategories](docs/channelcatalogscategories/README.md#getchannelcatalogcategories) - Get channel catalog categories
* [ReenableChannelCatalogCategoryMapping](docs/channelcatalogscategories/README.md#reenablechannelcatalogcategorymapping) - Reenable a channel catalog category mapping

### [ChannelCatalogsColumnMappings](docs/channelcatalogscolumnmappings/README.md)

* [ConfigureChannelCatalogColumnMappings](docs/channelcatalogscolumnmappings/README.md#configurechannelcatalogcolumnmappings) - Configure channel catalog column mappings

### [ChannelCatalogsExclusionFilters](docs/channelcatalogsexclusionfilters/README.md)

* [ConfigureChannelCatalogExclusionFilters](docs/channelcatalogsexclusionfilters/README.md#configurechannelcatalogexclusionfilters) - Configure channel catalog exclusion filters
* [GetChannelCatalogExclusionFilters](docs/channelcatalogsexclusionfilters/README.md#getchannelcatalogexclusionfilters) - Get channel catalog exclusion filters

### [ChannelCatalogsExportations](docs/channelcatalogsexportations/README.md)

* [ClearChannelCatalogExportationCache](docs/channelcatalogsexportations/README.md#clearchannelcatalogexportationcache) - Clear the exportation cache
* [GetChannelCatalogExportationCacheInfo](docs/channelcatalogsexportations/README.md#getchannelcatalogexportationcacheinfo) - Get the exportation cache information
* [GetChannelCatalogExportationHistory](docs/channelcatalogsexportations/README.md#getchannelcatalogexportationhistory) - Get the exportation history

### [ChannelCatalogsGlobal](docs/channelcatalogsglobal/README.md)

* [AddChannelCatalog](docs/channelcatalogsglobal/README.md#addchannelcatalog) - Add a new channel catalog
* [DeleteChannelCatalog](docs/channelcatalogsglobal/README.md#deletechannelcatalog) - Delete the channel catalog
* [GetChannelCatalog](docs/channelcatalogsglobal/README.md#getchannelcatalog) - Get the channel catalog information
* [GetChannelCatalogFilterOperators](docs/channelcatalogsglobal/README.md#getchannelcatalogfilteroperators) - Get channel catalog filter operators
* [GetChannelCatalogs](docs/channelcatalogsglobal/README.md#getchannelcatalogs) - List all your current channel catalogs

### [ChannelCatalogsLegacyTrackingGlobal](docs/channelcatalogslegacytrackingglobal/README.md)

* [GetLegacyTrackingChannelCatalog](docs/channelcatalogslegacytrackingglobal/README.md#getlegacytrackingchannelcatalog) - Get the channel catalog configured to use legacy tracking format information
* [GetLegacyTrackingChannelCatalogs](docs/channelcatalogslegacytrackingglobal/README.md#getlegacytrackingchannelcatalogs) - List all your current channel catalogs configured to use legacy tracking format
* [MigrateLegacyTrackingChannelCatalog](docs/channelcatalogslegacytrackingglobal/README.md#migratelegacytrackingchannelcatalog) - Migrate a channel catalog to current tracking format

### [ChannelCatalogsProducts](docs/channelcatalogsproducts/README.md)

* [ExportChannelCatalogProductInfoList](docs/channelcatalogsproducts/README.md#exportchannelcatalogproductinfolist) - Export channel catalog product information list
* [GetChannelCatalogProductByChannelCatalog](docs/channelcatalogsproducts/README.md#getchannelcatalogproductbychannelcatalog) - Get channel catalog products related to these channel catalogs
* [GetChannelCatalogProductInfo](docs/channelcatalogsproducts/README.md#getchannelcatalogproductinfo) - Get channel catalog product information
* [GetChannelCatalogProductInfoList](docs/channelcatalogsproducts/README.md#getchannelcatalogproductinfolist) - Get channel catalog product information list
* [GetChannelCatalogProductsCounters](docs/channelcatalogsproducts/README.md#getchannelcatalogproductscounters) - Get channel catalog products' counters

### [ChannelCatalogsProductsOptimisation](docs/channelcatalogsproductsoptimisation/README.md)

* [DisableChannelCatalogProduct](docs/channelcatalogsproductsoptimisation/README.md#disablechannelcatalogproduct) - Disable channel catalog product
* [ReenableChannelCatalogProduct](docs/channelcatalogsproductsoptimisation/README.md#reenablechannelcatalogproduct) - Reenable channel catalog product

### [ChannelCatalogsProductsOverrides](docs/channelcatalogsproductsoverrides/README.md)

* [ConfigureChannelCatalogProductValueOverrideCopy](docs/channelcatalogsproductsoverrides/README.md#configurechannelcatalogproductvalueoverridecopy) - Copy channel catalog product value override
* [DeleteChannelCatalogProductValueOverride](docs/channelcatalogsproductsoverrides/README.md#deletechannelcatalogproductvalueoverride) - Delete a specific channel catalog product value override
* [GetChannelCatalogProductValueOverrideCopy](docs/channelcatalogsproductsoverrides/README.md#getchannelcatalogproductvalueoverridecopy) - Get channel catalog product value override compatibilities status
* [OverrideChannelCatalogProductValues](docs/channelcatalogsproductsoverrides/README.md#overridechannelcatalogproductvalues) - Override channel catalog product values

### [ChannelCatalogsSettings](docs/channelcatalogssettings/README.md)

* [ConfigureChannelCatalogCostSettings](docs/channelcatalogssettings/README.md#configurechannelcatalogcostsettings) - Configure channel catalog cost settings
* [ConfigureChannelCatalogGeneralSettings](docs/channelcatalogssettings/README.md#configurechannelcataloggeneralsettings) - Configure channel catalog general settings
* [DisableChannelCatalog](docs/channelcatalogssettings/README.md#disablechannelcatalog) - Disable a channel catalog
* [EnableChannelCatalog](docs/channelcatalogssettings/README.md#enablechannelcatalog) - Enable a channel catalog

### [ChannelsChannelsGlobal](docs/channelschannelsglobal/README.md)

* [GetAvailableChannels](docs/channelschannelsglobal/README.md#getavailablechannels) - List all available channel for this store
* [GetChannelCategories](docs/channelschannelsglobal/README.md#getchannelcategories) - Get channel categories
* [GetChannelColumns](docs/channelschannelsglobal/README.md#getchannelcolumns) - Get channel columns
* [GetChannelInfo](docs/channelschannelsglobal/README.md#getchannelinfo) - Get channel information

### [CustomerAccount](docs/customeraccount/README.md)

* [ActivateUserAccount](docs/customeraccount/README.md#activateuseraccount) - Activate the user account
* [ChangeEmail](docs/customeraccount/README.md#changeemail) - Change user email
* [ChangePassword](docs/customeraccount/README.md#changepassword) - Change user password
* [GetCreditCardInfo](docs/customeraccount/README.md#getcreditcardinfo) - Get credit card information
* [GetProfilePictureInfo](docs/customeraccount/README.md#getprofilepictureinfo) - Get profile picture information
* [GetUserAccountInfo](docs/customeraccount/README.md#getuseraccountinfo) - Get user account information
* [ResendEmailActivation](docs/customeraccount/README.md#resendemailactivation) - Resend email activation
* [SaveCompanyInfo](docs/customeraccount/README.md#savecompanyinfo) - Change company information
* [SaveCreditCardInfo](docs/customeraccount/README.md#savecreditcardinfo) - Save user credit card info
* [SavePersonalInfo](docs/customeraccount/README.md#savepersonalinfo) - Save user personal information
* [SaveProfilePictureInfo](docs/customeraccount/README.md#saveprofilepictureinfo) - Change user picture information

### [CustomerAlerts](docs/customeralerts/README.md)

* [GetStoreAlerts](docs/customeralerts/README.md#getstorealerts) - Get store's alerts
* [SaveStoreAlerts](docs/customeralerts/README.md#savestorealerts) - Save store alerts

### [CustomerContracts](docs/customercontracts/README.md)

* [CreateContract](docs/customercontracts/README.md#createcontract) - Create a new contract
* [DeleteNextContract](docs/customercontracts/README.md#deletenextcontract) - Delete your next contract
* [GetBillingPeriods](docs/customercontracts/README.md#getbillingperiods) - Get billing periods conditions
* [GetContracts](docs/customercontracts/README.md#getcontracts) - Get contract list
* [GetOffer](docs/customercontracts/README.md#getoffer) - Get offer pricing
* [GetStandardOffers](docs/customercontracts/README.md#getstandardoffers) - Get all standard offers
* [ReactivateCurrentContract](docs/customercontracts/README.md#reactivatecurrentcontract) - Reactivate your terminated contract.
* [TerminateCurrentContract](docs/customercontracts/README.md#terminatecurrentcontract) - Schedule termination of your current contract at the end of the commitment.

### [CustomerFriends](docs/customerfriends/README.md)

* [GetFriendInfo](docs/customerfriends/README.md#getfriendinfo) - Get friend information

### [CustomerGlobal](docs/customerglobal/README.md)

* [GetCustomerIndex](docs/customerglobal/README.md#getcustomerindex) - The index of all operations and LOV

### [CustomerInvoices](docs/customerinvoices/README.md)

* [GetInvoices](docs/customerinvoices/README.md#getinvoices) - Get all your invoices

### [CustomerRights](docs/customerrights/README.md)

* [GetRights](docs/customerrights/README.md#getrights) - Get store's rights

### [CustomerSecurity](docs/customersecurity/README.md)

* [Logout](docs/customersecurity/README.md#logout) - Log out the current user from go2
* [ZendeskToken](docs/customersecurity/README.md#zendesktoken) - Zendesk token

### [CustomerShares](docs/customershares/README.md)

* [DeleteStoreShare](docs/customershares/README.md#deletestoreshare) - Delete a share of a store to another user
* [GetStoreShares](docs/customershares/README.md#getstoreshares) - Get shares related to this store
* [ShareStore](docs/customershares/README.md#sharestore) - Share a store to another user

### [CustomerStores](docs/customerstores/README.md)

* [CreateStore](docs/customerstores/README.md#createstore) - Create a new store
* [DeleteStore](docs/customerstores/README.md#deletestore) - Delete a store
* [GetStore](docs/customerstores/README.md#getstore) - Get store's information
* [GetStores](docs/customerstores/README.md#getstores) - Get store list
* [UpdateStore](docs/customerstores/README.md#updatestore) - Update some store's information.

### [MarketplacesChannelCatalogsGlobal](docs/marketplaceschannelcatalogsglobal/README.md)

* [GetMarketplaceChannelCatalogs](docs/marketplaceschannelcatalogsglobal/README.md#getmarketplacechannelcatalogs) - Get your marketplace channel catalog list

### [MarketplacesChannelCatalogsPublications](docs/marketplaceschannelcatalogspublications/README.md)

* [GetPublications](docs/marketplaceschannelcatalogspublications/README.md#getpublications) - Fetch the publication history for an account, sorted by descending start date
* [PublishCatalogToMarketplace](docs/marketplaceschannelcatalogspublications/README.md#publishcatalogtomarketplace) - [PREVIEW] Launch a publication of the catalog to the marketplace

### [MarketplacesChannelCatalogsSettings](docs/marketplaceschannelcatalogssettings/README.md)

* [GetChannelCatalogMarketplaceProperties](docs/marketplaceschannelcatalogssettings/README.md#getchannelcatalogmarketplaceproperties) - Get the marketplace properties for a channel catalog
* [GetChannelCatalogMarketplaceSettings](docs/marketplaceschannelcatalogssettings/README.md#getchannelcatalogmarketplacesettings) - Get the marketplace settings for a channel catalog
* [SetChannelCatalogMarketplaceSettings](docs/marketplaceschannelcatalogssettings/README.md#setchannelcatalogmarketplacesettings) - Save new marketplace settings for a channel catalog

### [MarketplacesOrdersAutoTransitions](docs/marketplacesordersautotransitions/README.md)

* [ConfigureAutomaticTransitions](docs/marketplacesordersautotransitions/README.md#configureautomatictransitions) - Configure new or existing automatic Order status transition
* [GetAutomaticTransitions](docs/marketplacesordersautotransitions/README.md#getautomatictransitions) - Get list of configured automatic Order status transitions

### [MarketplacesOrdersBatches](docs/marketplacesordersbatches/README.md)

* [~~ChangeOrderList~~](docs/marketplacesordersbatches/README.md#changeorderlist) - [DEPRECATED] Send a batch of operations to change your marketplace Order information: accept, ship, etc.  (max 100 items per call) :warning: **Deprecated**
* [~~ClearMerchantOrderInfoList~~](docs/marketplacesordersbatches/README.md#clearmerchantorderinfolist) - [DEPRECATED] Send a batch of operations to clear an Order's merchant information (max 100 items per call) :warning: **Deprecated**
* [~~SetMerchantOrderInfoList~~](docs/marketplacesordersbatches/README.md#setmerchantorderinfolist) - [DEPRECATED] Send a batch of operations to set an Order's merchant information  (max 100 items per call) :warning: **Deprecated**

### [MarketplacesOrdersExports](docs/marketplacesordersexports/README.md)

* [ExportOrders](docs/marketplacesordersexports/README.md#exportorders) - Request a new Order report exportation to be generated
* [GetOrderExportations](docs/marketplacesordersexports/README.md#getorderexportations) - Get a paginated list of Order report exportations

### [MarketplacesOrdersGlobal](docs/marketplacesordersglobal/README.md)

* [~~GetMarketplaceAccountsSynchronization~~](docs/marketplacesordersglobal/README.md#getmarketplaceaccountssynchronization) - [DEPRECATED] Get current synchronization status between your marketplaces and BeezUP accounts :warning: **Deprecated**
* [~~GetOrderIndex~~](docs/marketplacesordersglobal/README.md#getorderindex) - [DEPRECATED] Get all actions you can do on the order API :warning: **Deprecated**
* [~~HarvestAll~~](docs/marketplacesordersglobal/README.md#harvestall) - [DEPRECATED] Send harvest request to all your marketplaces :warning: **Deprecated**

### [MarketplacesOrdersList](docs/marketplacesorderslist/README.md)

* [~~GetOrderListFull~~](docs/marketplacesorderslist/README.md#getorderlistfull) - [DEPRECATED] Get a paginated list of all Orders with all Order and Order Item(s) properties :warning: **Deprecated**
* [~~GetOrderListLight~~](docs/marketplacesorderslist/README.md#getorderlistlight) - [DEPRECATED] Get a paginated list of all Orders without details :warning: **Deprecated**

### [MarketplacesOrdersOrder](docs/marketplacesordersorder/README.md)

* [~~ChangeOrder~~](docs/marketplacesordersorder/README.md#changeorder) - [DEPRECATED] Change your marketplace Order Information (accept, ship, etc.) :warning: **Deprecated**
* [~~ClearMerchantOrderInfo~~](docs/marketplacesordersorder/README.md#clearmerchantorderinfo) - [DEPRECATED] Clear an Order's merchant information :warning: **Deprecated**
* [~~GetOrder~~](docs/marketplacesordersorder/README.md#getorder) - [DEPRECATED] DEPRECATED - Get full Order and Order Item(s) properties :warning: **Deprecated**
* [~~GetOrderHistory~~](docs/marketplacesordersorder/README.md#getorderhistory) - [DEPRECATED] Get an Order's harvest and change history :warning: **Deprecated**
* [~~HarvestOrder~~](docs/marketplacesordersorder/README.md#harvestorder) - [DEPRECATED] Send harvest request for a single Order :warning: **Deprecated**
* [~~HeadOrder~~](docs/marketplacesordersorder/README.md#headorder) - [DEPRECATED] DEPRECATED - Get the meta information about the order (ETag, Last-Modified) :warning: **Deprecated**
* [~~SetMerchantOrderInfo~~](docs/marketplacesordersorder/README.md#setmerchantorderinfo) - [DEPRECATED] Set an Order's merchant information :warning: **Deprecated**

### [MarketplacesOrdersSubscriptionsSubscriptions](docs/marketplacesorderssubscriptionssubscriptions/README.md)

* [ActivateSubscription](docs/marketplacesorderssubscriptionssubscriptions/README.md#activatesubscription) - Activate a subscription to the orders
* [CreateSubscription](docs/marketplacesorderssubscriptionssubscriptions/README.md#createsubscription) - Creates a subscription to the orders
* [DeactivateSubscription](docs/marketplacesorderssubscriptionssubscriptions/README.md#deactivatesubscription) - Deactivate a subscription to the orders
* [DeleteSubscription](docs/marketplacesorderssubscriptionssubscriptions/README.md#deletesubscription) - Delete a subscription to the orders
* [GetSubscription](docs/marketplacesorderssubscriptionssubscriptions/README.md#getsubscription) - Get a subscription to the orders
* [GetSubscriptionList](docs/marketplacesorderssubscriptionssubscriptions/README.md#getsubscriptionlist) - Get the subscription list
* [GetSubscriptionPushReporting](docs/marketplacesorderssubscriptionssubscriptions/README.md#getsubscriptionpushreporting) - Get the push reporting related to this subscription
* [RetryPushOrders](docs/marketplacesorderssubscriptionssubscriptions/README.md#retrypushorders) - Force retry push orders immediatly

### [MarketplacesOrdersV3Batches](docs/marketplacesordersv3batches/README.md)

* [ChangeOrderListV2](docs/marketplacesordersv3batches/README.md#changeorderlistv2) - Send a batch of operations to change your marketplace Order information: accept, ship, etc.  (max 100 items per call)
* [ChangeOrderListV3](docs/marketplacesordersv3batches/README.md#changeorderlistv3) - Send a batch of operations to change your marketplace Order information: accept, ship, etc.  (max 100 items per call)
* [ClearMerchantOrderInfoListV3](docs/marketplacesordersv3batches/README.md#clearmerchantorderinfolistv3) - Send a batch of operations to clear an Order's merchant information (max 100 items per call)
* [SetMerchantOrderInfoListV3](docs/marketplacesordersv3batches/README.md#setmerchantorderinfolistv3) - Send a batch of operations to set an Order's merchant information  (max 100 items per call)

### [MarketplacesOrdersV3Global](docs/marketplacesordersv3global/README.md)

* [GetMarketplaceAccountsSynchronizationV3](docs/marketplacesordersv3global/README.md#getmarketplaceaccountssynchronizationv3) - Get current synchronization status between your marketplaces and BeezUP accounts
* [GetOrderManagementReadyMarketplaceBusinessCode](docs/marketplacesordersv3global/README.md#getordermanagementreadymarketplacebusinesscode) - Get the list of MarketplaceBusinessCode ready for Order Management
* [HarvestAllV3](docs/marketplacesordersv3global/README.md#harvestallv3) - Send harvest request to all your marketplaces

### [MarketplacesOrdersV3List](docs/marketplacesordersv3list/README.md)

* [GetOrderListFullV3](docs/marketplacesordersv3list/README.md#getorderlistfullv3) - Get a paginated list of all Orders with all Order and Order Item(s) properties
* [GetOrderListLightV3](docs/marketplacesordersv3list/README.md#getorderlistlightv3) - Get a paginated list of all Orders without details

### [MarketplacesOrdersV3Order](docs/marketplacesordersv3order/README.md)

* [ChangeOrderV3](docs/marketplacesordersv3order/README.md#changeorderv3) - Change your marketplace Order Information (accept, ship, etc.)
* [ClearMerchantOrderInfoV3](docs/marketplacesordersv3order/README.md#clearmerchantorderinfov3) - Clear an Order's merchant information
* [GetOrderChangeReportingV3](docs/marketplacesordersv3order/README.md#getorderchangereportingv3) - Get the order change reporting
* [GetOrderHistoryV3](docs/marketplacesordersv3order/README.md#getorderhistoryv3) - Get an Order's harvest and change history
* [GetOrderV3](docs/marketplacesordersv3order/README.md#getorderv3) - Get full Order and Order Item(s) properties
* [HarvestAccount](docs/marketplacesordersv3order/README.md#harvestaccount) - Send harvest request for an Account
* [HarvestOrderV3](docs/marketplacesordersv3order/README.md#harvestorderv3) - Send harvest request for a single Order
* [HeadOrderV3](docs/marketplacesordersv3order/README.md#headorderv3) - Get the meta information about the order (ETag, Last-Modified)
* [SetMerchantOrderInfoV3](docs/marketplacesordersv3order/README.md#setmerchantorderinfov3) - Set an Order's merchant information

### [OMInvoiceAPIGeneration](docs/ominvoiceapigeneration/README.md)

* [GenerateBatchOrderInvoice](docs/ominvoiceapigeneration/README.md#generatebatchorderinvoice) - Generate an Order Invoice batch
* [GenerateOrderInvoice](docs/ominvoiceapigeneration/README.md#generateorderinvoice) - Generate an Order Invoice
* [GetOrderInvoicePdf](docs/ominvoiceapigeneration/README.md#getorderinvoicepdf) - Returns the PDF version of the invoice
* [GetOrderInvoicePreview](docs/ominvoiceapigeneration/README.md#getorderinvoicepreview) - View a preview an Order Invoice

### [OMInvoiceAPISettings](docs/ominvoiceapisettings/README.md)

* [GetOrderInvoiceDesignSettings](docs/ominvoiceapisettings/README.md#getorderinvoicedesignsettings) - Get Order Invoice design settings
* [GetOrderInvoiceDesignSettingsPreview](docs/ominvoiceapisettings/README.md#getorderinvoicedesignsettingspreview) - View a preview an Order Invoice using custom design settings
* [GetOrderInvoiceGeneralSettings](docs/ominvoiceapisettings/README.md#getorderinvoicegeneralsettings) - Get Order Invoice general settings
* [SaveOrderInvoiceDesignSettings](docs/ominvoiceapisettings/README.md#saveorderinvoicedesignsettings) - Save Order Invoice design settings
* [SaveOrderInvoiceGeneralSettings](docs/ominvoiceapisettings/README.md#saveorderinvoicegeneralsettings) - Save Order Invoice general settings

### [PublicChannelsPublicChannels](docs/publicchannelspublicchannels/README.md)

* [GetChannels](docs/publicchannelspublicchannels/README.md#getchannels) - The channel list for one country
* [GetChannelsIndex](docs/publicchannelspublicchannels/README.md#getchannelsindex) - Get public channel index

### [PublicListOfValuesLOV](docs/publiclistofvalueslov/README.md)

* [GetPublicListOfValues](docs/publiclistofvalueslov/README.md#getpubliclistofvalues) - Get the list of values related to this list name
* [GetPublicLovIndex](docs/publiclistofvalueslov/README.md#getpubliclovindex) - Get all list names

### [PublicSecuritySecurity](docs/publicsecuritysecurity/README.md)

* [Login](docs/publicsecuritysecurity/README.md#login) - Login
* [LostPassword](docs/publicsecuritysecurity/README.md#lostpassword) - Lost password
* [Register](docs/publicsecuritysecurity/README.md#register) - User Registration

### [UserListOfValuesLOV](docs/userlistofvalueslov/README.md)

* [GetUserListOfValues](docs/userlistofvalueslov/README.md#getuserlistofvalues) - Get the list of values related to this list name
* [GetUserLovIndex](docs/userlistofvalueslov/README.md#getuserlovindex) - Get all list names
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
