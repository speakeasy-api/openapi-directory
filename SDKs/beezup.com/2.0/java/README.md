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
import org.openapis.openapi.models.operations.AnalyticsIndexResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsIndexResponse res = sdk.analyticsGlobal.analyticsIndex();

            if (res.analyticsIndex != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [analyticsGlobal](docs/analyticsglobal/README.md)

* [analyticsIndex](docs/analyticsglobal/README.md#analyticsindex) - Get the Analytics API operation index
* [analyticsStoreIndex](docs/analyticsglobal/README.md#analyticsstoreindex) - Get the Analytics API operation index for one store

### [analyticsOptimisations](docs/analyticsoptimisations/README.md)

* [copyOptimisation](docs/analyticsoptimisations/README.md#copyoptimisation) - Copy product optimisations between 2 channels
* [optimise](docs/analyticsoptimisations/README.md#optimise) - Optimise products by page
* [optimiseAll](docs/analyticsoptimisations/README.md#optimiseall) - Optimise all products
* [optimiseByCategory](docs/analyticsoptimisations/README.md#optimisebycategory) - Optimise products by category
* [optimiseByChannel](docs/analyticsoptimisations/README.md#optimisebychannel) - Optimise products by channel
* [optimiseByProduct](docs/analyticsoptimisations/README.md#optimisebyproduct) - Optimise product

### [analyticsReports](docs/analyticsreports/README.md)

* [deleteReportFilter](docs/analyticsreports/README.md#deletereportfilter) - Delete the report filter
* [getReportFilter](docs/analyticsreports/README.md#getreportfilter) - Get the report filter description
* [getReportFilters](docs/analyticsreports/README.md#getreportfilters) - Get report filter list for the given store
* [saveReportFilter](docs/analyticsreports/README.md#savereportfilter) - Save the report filter

### [analyticsRules](docs/analyticsrules/README.md)

* [createRule](docs/analyticsrules/README.md#createrule) - Rule creation
* [deleteRule](docs/analyticsrules/README.md#deleterule) - Delete Rule
* [disableRule](docs/analyticsrules/README.md#disablerule) - Disable rule
* [enableRule](docs/analyticsrules/README.md#enablerule) - Enable rule
* [getRule](docs/analyticsrules/README.md#getrule) - Gets the rule
* [getRules](docs/analyticsrules/README.md#getrules) - Gets the list of rules for a given store
* [getRulesExecutions](docs/analyticsrules/README.md#getrulesexecutions) - Get the rules execution history
* [moveDownRule](docs/analyticsrules/README.md#movedownrule) - Move the rule down
* [moveUpRule](docs/analyticsrules/README.md#moveuprule) - Move the rule up
* [runRule](docs/analyticsrules/README.md#runrule) - Run rule
* [runRules](docs/analyticsrules/README.md#runrules) - Run all rules for this store
* [updateRule](docs/analyticsrules/README.md#updaterule) - Update Rule

### [analyticsStatistics](docs/analyticsstatistics/README.md)

* [getStoreReportByCategory](docs/analyticsstatistics/README.md#getstorereportbycategory) - Get the report by category
* [getStoreReportByChannel](docs/analyticsstatistics/README.md#getstorereportbychannel) - Get the report by channel
* [getStoreReportByDay](docs/analyticsstatistics/README.md#getstorereportbyday) - Get the report by day for a StoreId
* [getStoreReportByDayPerStore](docs/analyticsstatistics/README.md#getstorereportbydayperstore) - Get the report by day for a StoreId
* [getStoreReportByProduct](docs/analyticsstatistics/README.md#getstorereportbyproduct) - Get the report by product

### [analyticsTracking](docs/analyticstracking/README.md)

* [getStoreTrackedClicks](docs/analyticstracking/README.md#getstoretrackedclicks) - Get the latest tracked clicks
* [getStoreTrackedExternalOrders](docs/analyticstracking/README.md#getstoretrackedexternalorders) - Get the latest tracked external orders
* [getStoreTrackedOrders](docs/analyticstracking/README.md#getstoretrackedorders) - Get the latest tracked orders
* [getStoreTrackingStatus](docs/analyticstracking/README.md#getstoretrackingstatus) - Get the synchronization status of clicks and orders of a store
* [getTrackingStatus](docs/analyticstracking/README.md#gettrackingstatus) - Get the global synchronization status of clicks and orders

### [catalogsAuto](docs/catalogsauto/README.md)

* [autoConfigureAutoImportInterval](docs/catalogsauto/README.md#autoconfigureautoimportinterval) - Configure Auto Import Interval
* [autoDeleteAutoImport](docs/catalogsauto/README.md#autodeleteautoimport) - Delete Auto Import
* [autoGetAutoImportConfiguration](docs/catalogsauto/README.md#autogetautoimportconfiguration) - Get the auto import configuration
* [autoPauseAutoImport](docs/catalogsauto/README.md#autopauseautoimport) - Pause Auto Import
* [autoResumeAutoImport](docs/catalogsauto/README.md#autoresumeautoimport) - Resume Auto Import
* [autoScheduleAutoImport](docs/catalogsauto/README.md#autoscheduleautoimport) - Configure Auto Import Schedules
* [autoStartAutoImport](docs/catalogsauto/README.md#autostartautoimport) - Start Auto Import Manually
* [importationActivateAutoImport](docs/catalogsauto/README.md#importationactivateautoimport) - Activate the auto importation of the last successful manual catalog importation.

### [catalogsCatalog](docs/catalogscatalog/README.md)

* [catalogStoreIndex](docs/catalogscatalog/README.md#catalogstoreindex) - Get the index of the catalog API for this store
* [catalogChangeCatalogColumnUserName](docs/catalogscatalog/README.md#catalogchangecatalogcolumnusername) - Change Catalog Column User Name
* [catalogChangeCustomColumnExpression](docs/catalogscatalog/README.md#catalogchangecustomcolumnexpression) - Change custom column expression
* [catalogChangeCustomColumnUserName](docs/catalogscatalog/README.md#catalogchangecustomcolumnusername) - Change Custom Column User Name
* [catalogComputeExpression](docs/catalogscatalog/README.md#catalogcomputeexpression) - Compute the expression for this catalog.
* [catalogDeleteCustomColumn](docs/catalogscatalog/README.md#catalogdeletecustomcolumn) - Delete custom column
* [catalogGetCatalogColumns](docs/catalogscatalog/README.md#cataloggetcatalogcolumns) - Get catalog column list
* [catalogGetCategories](docs/catalogscatalog/README.md#cataloggetcategories) - Get category list
* [catalogGetCustomColumnExpression](docs/catalogscatalog/README.md#cataloggetcustomcolumnexpression) - Get the encrypted custom column expression
* [catalogGetCustomColumns](docs/catalogscatalog/README.md#cataloggetcustomcolumns) - Get custom column list
* [catalogGetProductByProductId](docs/catalogscatalog/README.md#cataloggetproductbyproductid) - Get product by ProductId
* [catalogGetProductBySku](docs/catalogscatalog/README.md#cataloggetproductbysku) - Get product by Sku
* [catalogGetProducts](docs/catalogscatalog/README.md#cataloggetproducts) - Get product list
* [catalogGetRandomProducts](docs/catalogscatalog/README.md#cataloggetrandomproducts) - Get random product list
* [catalogSaveCustomColumn](docs/catalogscatalog/README.md#catalogsavecustomcolumn) - Create or replace a custom column
* [importationGetManualUpdateLastInputConfig](docs/catalogscatalog/README.md#importationgetmanualupdatelastinputconfig) - Get the last input configuration

### [catalogsGlobal](docs/catalogsglobal/README.md)

* [catalogIndex](docs/catalogsglobal/README.md#catalogindex) - Get the index of the catalog API
* [catalogGetBeezUPColumns](docs/catalogsglobal/README.md#cataloggetbeezupcolumns) - Get the BeezUP columns

### [catalogsImportationCatalogInfo](docs/catalogsimportationcataloginfo/README.md)

* [importationConfigureCatalogColumn](docs/catalogsimportationcataloginfo/README.md#importationconfigurecatalogcolumn) - Configure catalog column
* [importationDeleteCustomColumn](docs/catalogsimportationcataloginfo/README.md#importationdeletecustomcolumn) - Delete Custom Column
* [importationGetCustomColumnExpression](docs/catalogsimportationcataloginfo/README.md#importationgetcustomcolumnexpression) - Get the encrypted custom column expression in this importation
* [importationGetCustomColumns](docs/catalogsimportationcataloginfo/README.md#importationgetcustomcolumns) - Get custom columns currently place in this importation
* [importationGetDetectedCatalogColumns](docs/catalogsimportationcataloginfo/README.md#importationgetdetectedcatalogcolumns) - Get detected catalog columns during this importation.
* [importationGetProductSample](docs/catalogsimportationcataloginfo/README.md#importationgetproductsample) - Get the product sample related to this importation with all columns (catalog and custom)
* [importationGetProductSampleCustomColumnValue](docs/catalogsimportationcataloginfo/README.md#importationgetproductsamplecustomcolumnvalue) - Get product sample custom column value related to this importation.
* [importationIgnoreColumn](docs/catalogsimportationcataloginfo/README.md#importationignorecolumn) - Ignore Column
* [importationMapCatalogColumn](docs/catalogsimportationcataloginfo/README.md#importationmapcatalogcolumn) - Map catalog column to a BeezUP column
* [importationMapCustomColumn](docs/catalogsimportationcataloginfo/README.md#importationmapcustomcolumn) - Map custom column to a BeezUP column
* [importationReattendColumn](docs/catalogsimportationcataloginfo/README.md#importationreattendcolumn) - Reattend Column
* [importationSaveCustomColumn](docs/catalogsimportationcataloginfo/README.md#importationsavecustomcolumn) - Create or replace a custom column
* [importationUnmapCatalogColumn](docs/catalogsimportationcataloginfo/README.md#importationunmapcatalogcolumn) - Unmap catalog column
* [importationUnmapCustomColumn](docs/catalogsimportationcataloginfo/README.md#importationunmapcustomcolumn) - Unmap custom column

### [catalogsImportationProcess](docs/catalogsimportationprocess/README.md)

* [importationCancel](docs/catalogsimportationprocess/README.md#importationcancel) - Cancel importation
* [importationCommit](docs/catalogsimportationprocess/README.md#importationcommit) - Commit Importation
* [importationCommitColumns](docs/catalogsimportationprocess/README.md#importationcommitcolumns) - Commit columns
* [importationConfigureRemainingCatalogColumns](docs/catalogsimportationprocess/README.md#importationconfigureremainingcatalogcolumns) - Configure remaining catalog columns
* [importationGetImportationMonitoring](docs/catalogsimportationprocess/README.md#importationgetimportationmonitoring) - Get the importation status
* [importationGetProductsReport](docs/catalogsimportationprocess/README.md#importationgetproductsreport) - Importation Get Products Report
* [importationGetReport](docs/catalogsimportationprocess/README.md#importationgetreport) - Importation Get Report
* [importationGetReportings](docs/catalogsimportationprocess/README.md#importationgetreportings) - Get the latest catalog importation reporting
* [importationGetReportingsAllStores](docs/catalogsimportationprocess/README.md#importationgetreportingsallstores) - Get the latest catalog importation reporting for all your stores
* [importationStartManualUpdate](docs/catalogsimportationprocess/README.md#importationstartmanualupdate) - Start Manual Import
* [importationTechnicalProgression](docs/catalogsimportationprocess/README.md#importationtechnicalprogression) - Get technical progression

### [channelCatalogsCategories](docs/channelcatalogscategories/README.md)

* [configureChannelCatalogCategory](docs/channelcatalogscategories/README.md#configurechannelcatalogcategory) - Configure channel catalog category
* [disableChannelCatalogCategoryMapping](docs/channelcatalogscategories/README.md#disablechannelcatalogcategorymapping) - Disable a channel catalog category mapping
* [getChannelCatalogCategories](docs/channelcatalogscategories/README.md#getchannelcatalogcategories) - Get channel catalog categories
* [reenableChannelCatalogCategoryMapping](docs/channelcatalogscategories/README.md#reenablechannelcatalogcategorymapping) - Reenable a channel catalog category mapping

### [channelCatalogsColumnMappings](docs/channelcatalogscolumnmappings/README.md)

* [configureChannelCatalogColumnMappings](docs/channelcatalogscolumnmappings/README.md#configurechannelcatalogcolumnmappings) - Configure channel catalog column mappings

### [channelCatalogsExclusionFilters](docs/channelcatalogsexclusionfilters/README.md)

* [configureChannelCatalogExclusionFilters](docs/channelcatalogsexclusionfilters/README.md#configurechannelcatalogexclusionfilters) - Configure channel catalog exclusion filters
* [getChannelCatalogExclusionFilters](docs/channelcatalogsexclusionfilters/README.md#getchannelcatalogexclusionfilters) - Get channel catalog exclusion filters

### [channelCatalogsExportations](docs/channelcatalogsexportations/README.md)

* [clearChannelCatalogExportationCache](docs/channelcatalogsexportations/README.md#clearchannelcatalogexportationcache) - Clear the exportation cache
* [getChannelCatalogExportationCacheInfo](docs/channelcatalogsexportations/README.md#getchannelcatalogexportationcacheinfo) - Get the exportation cache information
* [getChannelCatalogExportationHistory](docs/channelcatalogsexportations/README.md#getchannelcatalogexportationhistory) - Get the exportation history

### [channelCatalogsGlobal](docs/channelcatalogsglobal/README.md)

* [addChannelCatalog](docs/channelcatalogsglobal/README.md#addchannelcatalog) - Add a new channel catalog
* [deleteChannelCatalog](docs/channelcatalogsglobal/README.md#deletechannelcatalog) - Delete the channel catalog
* [getChannelCatalog](docs/channelcatalogsglobal/README.md#getchannelcatalog) - Get the channel catalog information
* [getChannelCatalogFilterOperators](docs/channelcatalogsglobal/README.md#getchannelcatalogfilteroperators) - Get channel catalog filter operators
* [getChannelCatalogs](docs/channelcatalogsglobal/README.md#getchannelcatalogs) - List all your current channel catalogs

### [channelCatalogsLegacyTrackingGlobal](docs/channelcatalogslegacytrackingglobal/README.md)

* [getLegacyTrackingChannelCatalog](docs/channelcatalogslegacytrackingglobal/README.md#getlegacytrackingchannelcatalog) - Get the channel catalog configured to use legacy tracking format information
* [getLegacyTrackingChannelCatalogs](docs/channelcatalogslegacytrackingglobal/README.md#getlegacytrackingchannelcatalogs) - List all your current channel catalogs configured to use legacy tracking format
* [migrateLegacyTrackingChannelCatalog](docs/channelcatalogslegacytrackingglobal/README.md#migratelegacytrackingchannelcatalog) - Migrate a channel catalog to current tracking format

### [channelCatalogsProducts](docs/channelcatalogsproducts/README.md)

* [exportChannelCatalogProductInfoList](docs/channelcatalogsproducts/README.md#exportchannelcatalogproductinfolist) - Export channel catalog product information list
* [getChannelCatalogProductByChannelCatalog](docs/channelcatalogsproducts/README.md#getchannelcatalogproductbychannelcatalog) - Get channel catalog products related to these channel catalogs
* [getChannelCatalogProductInfo](docs/channelcatalogsproducts/README.md#getchannelcatalogproductinfo) - Get channel catalog product information
* [getChannelCatalogProductInfoList](docs/channelcatalogsproducts/README.md#getchannelcatalogproductinfolist) - Get channel catalog product information list
* [getChannelCatalogProductsCounters](docs/channelcatalogsproducts/README.md#getchannelcatalogproductscounters) - Get channel catalog products' counters

### [channelCatalogsProductsOptimisation](docs/channelcatalogsproductsoptimisation/README.md)

* [disableChannelCatalogProduct](docs/channelcatalogsproductsoptimisation/README.md#disablechannelcatalogproduct) - Disable channel catalog product
* [reenableChannelCatalogProduct](docs/channelcatalogsproductsoptimisation/README.md#reenablechannelcatalogproduct) - Reenable channel catalog product

### [channelCatalogsProductsOverrides](docs/channelcatalogsproductsoverrides/README.md)

* [configureChannelCatalogProductValueOverrideCopy](docs/channelcatalogsproductsoverrides/README.md#configurechannelcatalogproductvalueoverridecopy) - Copy channel catalog product value override
* [deleteChannelCatalogProductValueOverride](docs/channelcatalogsproductsoverrides/README.md#deletechannelcatalogproductvalueoverride) - Delete a specific channel catalog product value override
* [getChannelCatalogProductValueOverrideCopy](docs/channelcatalogsproductsoverrides/README.md#getchannelcatalogproductvalueoverridecopy) - Get channel catalog product value override compatibilities status
* [overrideChannelCatalogProductValues](docs/channelcatalogsproductsoverrides/README.md#overridechannelcatalogproductvalues) - Override channel catalog product values

### [channelCatalogsSettings](docs/channelcatalogssettings/README.md)

* [configureChannelCatalogCostSettings](docs/channelcatalogssettings/README.md#configurechannelcatalogcostsettings) - Configure channel catalog cost settings
* [configureChannelCatalogGeneralSettings](docs/channelcatalogssettings/README.md#configurechannelcataloggeneralsettings) - Configure channel catalog general settings
* [disableChannelCatalog](docs/channelcatalogssettings/README.md#disablechannelcatalog) - Disable a channel catalog
* [enableChannelCatalog](docs/channelcatalogssettings/README.md#enablechannelcatalog) - Enable a channel catalog

### [channelsChannelsGlobal](docs/channelschannelsglobal/README.md)

* [getAvailableChannels](docs/channelschannelsglobal/README.md#getavailablechannels) - List all available channel for this store
* [getChannelCategories](docs/channelschannelsglobal/README.md#getchannelcategories) - Get channel categories
* [getChannelColumns](docs/channelschannelsglobal/README.md#getchannelcolumns) - Get channel columns
* [getChannelInfo](docs/channelschannelsglobal/README.md#getchannelinfo) - Get channel information

### [customerAccount](docs/customeraccount/README.md)

* [activateUserAccount](docs/customeraccount/README.md#activateuseraccount) - Activate the user account
* [changeEmail](docs/customeraccount/README.md#changeemail) - Change user email
* [changePassword](docs/customeraccount/README.md#changepassword) - Change user password
* [getCreditCardInfo](docs/customeraccount/README.md#getcreditcardinfo) - Get credit card information
* [getProfilePictureInfo](docs/customeraccount/README.md#getprofilepictureinfo) - Get profile picture information
* [getUserAccountInfo](docs/customeraccount/README.md#getuseraccountinfo) - Get user account information
* [resendEmailActivation](docs/customeraccount/README.md#resendemailactivation) - Resend email activation
* [saveCompanyInfo](docs/customeraccount/README.md#savecompanyinfo) - Change company information
* [saveCreditCardInfo](docs/customeraccount/README.md#savecreditcardinfo) - Save user credit card info
* [savePersonalInfo](docs/customeraccount/README.md#savepersonalinfo) - Save user personal information
* [saveProfilePictureInfo](docs/customeraccount/README.md#saveprofilepictureinfo) - Change user picture information

### [customerAlerts](docs/customeralerts/README.md)

* [getStoreAlerts](docs/customeralerts/README.md#getstorealerts) - Get store's alerts
* [saveStoreAlerts](docs/customeralerts/README.md#savestorealerts) - Save store alerts

### [customerContracts](docs/customercontracts/README.md)

* [createContract](docs/customercontracts/README.md#createcontract) - Create a new contract
* [deleteNextContract](docs/customercontracts/README.md#deletenextcontract) - Delete your next contract
* [getBillingPeriods](docs/customercontracts/README.md#getbillingperiods) - Get billing periods conditions
* [getContracts](docs/customercontracts/README.md#getcontracts) - Get contract list
* [getOffer](docs/customercontracts/README.md#getoffer) - Get offer pricing
* [getStandardOffers](docs/customercontracts/README.md#getstandardoffers) - Get all standard offers
* [reactivateCurrentContract](docs/customercontracts/README.md#reactivatecurrentcontract) - Reactivate your terminated contract.
* [terminateCurrentContract](docs/customercontracts/README.md#terminatecurrentcontract) - Schedule termination of your current contract at the end of the commitment.

### [customerFriends](docs/customerfriends/README.md)

* [getFriendInfo](docs/customerfriends/README.md#getfriendinfo) - Get friend information

### [customerGlobal](docs/customerglobal/README.md)

* [getCustomerIndex](docs/customerglobal/README.md#getcustomerindex) - The index of all operations and LOV

### [customerInvoices](docs/customerinvoices/README.md)

* [getInvoices](docs/customerinvoices/README.md#getinvoices) - Get all your invoices

### [customerRights](docs/customerrights/README.md)

* [getRights](docs/customerrights/README.md#getrights) - Get store's rights

### [customerSecurity](docs/customersecurity/README.md)

* [logout](docs/customersecurity/README.md#logout) - Log out the current user from go2
* [zendeskToken](docs/customersecurity/README.md#zendesktoken) - Zendesk token

### [customerShares](docs/customershares/README.md)

* [deleteStoreShare](docs/customershares/README.md#deletestoreshare) - Delete a share of a store to another user
* [getStoreShares](docs/customershares/README.md#getstoreshares) - Get shares related to this store
* [shareStore](docs/customershares/README.md#sharestore) - Share a store to another user

### [customerStores](docs/customerstores/README.md)

* [createStore](docs/customerstores/README.md#createstore) - Create a new store
* [deleteStore](docs/customerstores/README.md#deletestore) - Delete a store
* [getStore](docs/customerstores/README.md#getstore) - Get store's information
* [getStores](docs/customerstores/README.md#getstores) - Get store list
* [updateStore](docs/customerstores/README.md#updatestore) - Update some store's information.

### [marketplacesChannelCatalogsGlobal](docs/marketplaceschannelcatalogsglobal/README.md)

* [getMarketplaceChannelCatalogs](docs/marketplaceschannelcatalogsglobal/README.md#getmarketplacechannelcatalogs) - Get your marketplace channel catalog list

### [marketplacesChannelCatalogsPublications](docs/marketplaceschannelcatalogspublications/README.md)

* [getPublications](docs/marketplaceschannelcatalogspublications/README.md#getpublications) - Fetch the publication history for an account, sorted by descending start date
* [publishCatalogToMarketplace](docs/marketplaceschannelcatalogspublications/README.md#publishcatalogtomarketplace) - [PREVIEW] Launch a publication of the catalog to the marketplace

### [marketplacesChannelCatalogsSettings](docs/marketplaceschannelcatalogssettings/README.md)

* [getChannelCatalogMarketplaceProperties](docs/marketplaceschannelcatalogssettings/README.md#getchannelcatalogmarketplaceproperties) - Get the marketplace properties for a channel catalog
* [getChannelCatalogMarketplaceSettings](docs/marketplaceschannelcatalogssettings/README.md#getchannelcatalogmarketplacesettings) - Get the marketplace settings for a channel catalog
* [setChannelCatalogMarketplaceSettings](docs/marketplaceschannelcatalogssettings/README.md#setchannelcatalogmarketplacesettings) - Save new marketplace settings for a channel catalog

### [marketplacesOrdersAutoTransitions](docs/marketplacesordersautotransitions/README.md)

* [configureAutomaticTransitions](docs/marketplacesordersautotransitions/README.md#configureautomatictransitions) - Configure new or existing automatic Order status transition
* [getAutomaticTransitions](docs/marketplacesordersautotransitions/README.md#getautomatictransitions) - Get list of configured automatic Order status transitions

### [marketplacesOrdersBatches](docs/marketplacesordersbatches/README.md)

* [~~changeOrderList~~](docs/marketplacesordersbatches/README.md#changeorderlist) - [DEPRECATED] Send a batch of operations to change your marketplace Order information: accept, ship, etc.  (max 100 items per call) :warning: **Deprecated**
* [~~clearMerchantOrderInfoList~~](docs/marketplacesordersbatches/README.md#clearmerchantorderinfolist) - [DEPRECATED] Send a batch of operations to clear an Order's merchant information (max 100 items per call) :warning: **Deprecated**
* [~~setMerchantOrderInfoList~~](docs/marketplacesordersbatches/README.md#setmerchantorderinfolist) - [DEPRECATED] Send a batch of operations to set an Order's merchant information  (max 100 items per call) :warning: **Deprecated**

### [marketplacesOrdersExports](docs/marketplacesordersexports/README.md)

* [exportOrders](docs/marketplacesordersexports/README.md#exportorders) - Request a new Order report exportation to be generated
* [getOrderExportations](docs/marketplacesordersexports/README.md#getorderexportations) - Get a paginated list of Order report exportations

### [marketplacesOrdersGlobal](docs/marketplacesordersglobal/README.md)

* [~~getMarketplaceAccountsSynchronization~~](docs/marketplacesordersglobal/README.md#getmarketplaceaccountssynchronization) - [DEPRECATED] Get current synchronization status between your marketplaces and BeezUP accounts :warning: **Deprecated**
* [~~getOrderIndex~~](docs/marketplacesordersglobal/README.md#getorderindex) - [DEPRECATED] Get all actions you can do on the order API :warning: **Deprecated**
* [~~harvestAll~~](docs/marketplacesordersglobal/README.md#harvestall) - [DEPRECATED] Send harvest request to all your marketplaces :warning: **Deprecated**

### [marketplacesOrdersList](docs/marketplacesorderslist/README.md)

* [~~getOrderListFull~~](docs/marketplacesorderslist/README.md#getorderlistfull) - [DEPRECATED] Get a paginated list of all Orders with all Order and Order Item(s) properties :warning: **Deprecated**
* [~~getOrderListLight~~](docs/marketplacesorderslist/README.md#getorderlistlight) - [DEPRECATED] Get a paginated list of all Orders without details :warning: **Deprecated**

### [marketplacesOrdersOrder](docs/marketplacesordersorder/README.md)

* [~~changeOrder~~](docs/marketplacesordersorder/README.md#changeorder) - [DEPRECATED] Change your marketplace Order Information (accept, ship, etc.) :warning: **Deprecated**
* [~~clearMerchantOrderInfo~~](docs/marketplacesordersorder/README.md#clearmerchantorderinfo) - [DEPRECATED] Clear an Order's merchant information :warning: **Deprecated**
* [~~getOrder~~](docs/marketplacesordersorder/README.md#getorder) - [DEPRECATED] DEPRECATED - Get full Order and Order Item(s) properties :warning: **Deprecated**
* [~~getOrderHistory~~](docs/marketplacesordersorder/README.md#getorderhistory) - [DEPRECATED] Get an Order's harvest and change history :warning: **Deprecated**
* [~~harvestOrder~~](docs/marketplacesordersorder/README.md#harvestorder) - [DEPRECATED] Send harvest request for a single Order :warning: **Deprecated**
* [~~headOrder~~](docs/marketplacesordersorder/README.md#headorder) - [DEPRECATED] DEPRECATED - Get the meta information about the order (ETag, Last-Modified) :warning: **Deprecated**
* [~~setMerchantOrderInfo~~](docs/marketplacesordersorder/README.md#setmerchantorderinfo) - [DEPRECATED] Set an Order's merchant information :warning: **Deprecated**

### [marketplacesOrdersSubscriptionsSubscriptions](docs/marketplacesorderssubscriptionssubscriptions/README.md)

* [activateSubscription](docs/marketplacesorderssubscriptionssubscriptions/README.md#activatesubscription) - Activate a subscription to the orders
* [createSubscription](docs/marketplacesorderssubscriptionssubscriptions/README.md#createsubscription) - Creates a subscription to the orders
* [deactivateSubscription](docs/marketplacesorderssubscriptionssubscriptions/README.md#deactivatesubscription) - Deactivate a subscription to the orders
* [deleteSubscription](docs/marketplacesorderssubscriptionssubscriptions/README.md#deletesubscription) - Delete a subscription to the orders
* [getSubscription](docs/marketplacesorderssubscriptionssubscriptions/README.md#getsubscription) - Get a subscription to the orders
* [getSubscriptionList](docs/marketplacesorderssubscriptionssubscriptions/README.md#getsubscriptionlist) - Get the subscription list
* [getSubscriptionPushReporting](docs/marketplacesorderssubscriptionssubscriptions/README.md#getsubscriptionpushreporting) - Get the push reporting related to this subscription
* [retryPushOrders](docs/marketplacesorderssubscriptionssubscriptions/README.md#retrypushorders) - Force retry push orders immediatly

### [marketplacesOrdersV3Batches](docs/marketplacesordersv3batches/README.md)

* [changeOrderListV2](docs/marketplacesordersv3batches/README.md#changeorderlistv2) - Send a batch of operations to change your marketplace Order information: accept, ship, etc.  (max 100 items per call)
* [changeOrderListV3](docs/marketplacesordersv3batches/README.md#changeorderlistv3) - Send a batch of operations to change your marketplace Order information: accept, ship, etc.  (max 100 items per call)
* [clearMerchantOrderInfoListV3](docs/marketplacesordersv3batches/README.md#clearmerchantorderinfolistv3) - Send a batch of operations to clear an Order's merchant information (max 100 items per call)
* [setMerchantOrderInfoListV3](docs/marketplacesordersv3batches/README.md#setmerchantorderinfolistv3) - Send a batch of operations to set an Order's merchant information  (max 100 items per call)

### [marketplacesOrdersV3Global](docs/marketplacesordersv3global/README.md)

* [getMarketplaceAccountsSynchronizationV3](docs/marketplacesordersv3global/README.md#getmarketplaceaccountssynchronizationv3) - Get current synchronization status between your marketplaces and BeezUP accounts
* [getOrderManagementReadyMarketplaceBusinessCode](docs/marketplacesordersv3global/README.md#getordermanagementreadymarketplacebusinesscode) - Get the list of MarketplaceBusinessCode ready for Order Management
* [harvestAllV3](docs/marketplacesordersv3global/README.md#harvestallv3) - Send harvest request to all your marketplaces

### [marketplacesOrdersV3List](docs/marketplacesordersv3list/README.md)

* [getOrderListFullV3](docs/marketplacesordersv3list/README.md#getorderlistfullv3) - Get a paginated list of all Orders with all Order and Order Item(s) properties
* [getOrderListLightV3](docs/marketplacesordersv3list/README.md#getorderlistlightv3) - Get a paginated list of all Orders without details

### [marketplacesOrdersV3Order](docs/marketplacesordersv3order/README.md)

* [changeOrderV3](docs/marketplacesordersv3order/README.md#changeorderv3) - Change your marketplace Order Information (accept, ship, etc.)
* [clearMerchantOrderInfoV3](docs/marketplacesordersv3order/README.md#clearmerchantorderinfov3) - Clear an Order's merchant information
* [getOrderChangeReportingV3](docs/marketplacesordersv3order/README.md#getorderchangereportingv3) - Get the order change reporting
* [getOrderHistoryV3](docs/marketplacesordersv3order/README.md#getorderhistoryv3) - Get an Order's harvest and change history
* [getOrderV3](docs/marketplacesordersv3order/README.md#getorderv3) - Get full Order and Order Item(s) properties
* [harvestAccount](docs/marketplacesordersv3order/README.md#harvestaccount) - Send harvest request for an Account
* [harvestOrderV3](docs/marketplacesordersv3order/README.md#harvestorderv3) - Send harvest request for a single Order
* [headOrderV3](docs/marketplacesordersv3order/README.md#headorderv3) - Get the meta information about the order (ETag, Last-Modified)
* [setMerchantOrderInfoV3](docs/marketplacesordersv3order/README.md#setmerchantorderinfov3) - Set an Order's merchant information

### [omInvoiceAPIGeneration](docs/ominvoiceapigeneration/README.md)

* [generateBatchOrderInvoice](docs/ominvoiceapigeneration/README.md#generatebatchorderinvoice) - Generate an Order Invoice batch
* [generateOrderInvoice](docs/ominvoiceapigeneration/README.md#generateorderinvoice) - Generate an Order Invoice
* [getOrderInvoicePdf](docs/ominvoiceapigeneration/README.md#getorderinvoicepdf) - Returns the PDF version of the invoice
* [getOrderInvoicePreview](docs/ominvoiceapigeneration/README.md#getorderinvoicepreview) - View a preview an Order Invoice

### [omInvoiceAPISettings](docs/ominvoiceapisettings/README.md)

* [getOrderInvoiceDesignSettings](docs/ominvoiceapisettings/README.md#getorderinvoicedesignsettings) - Get Order Invoice design settings
* [getOrderInvoiceDesignSettingsPreview](docs/ominvoiceapisettings/README.md#getorderinvoicedesignsettingspreview) - View a preview an Order Invoice using custom design settings
* [getOrderInvoiceGeneralSettings](docs/ominvoiceapisettings/README.md#getorderinvoicegeneralsettings) - Get Order Invoice general settings
* [saveOrderInvoiceDesignSettings](docs/ominvoiceapisettings/README.md#saveorderinvoicedesignsettings) - Save Order Invoice design settings
* [saveOrderInvoiceGeneralSettings](docs/ominvoiceapisettings/README.md#saveorderinvoicegeneralsettings) - Save Order Invoice general settings

### [publicChannelsPublicChannels](docs/publicchannelspublicchannels/README.md)

* [getChannels](docs/publicchannelspublicchannels/README.md#getchannels) - The channel list for one country
* [getChannelsIndex](docs/publicchannelspublicchannels/README.md#getchannelsindex) - Get public channel index

### [publicListOfValuesLOV](docs/publiclistofvalueslov/README.md)

* [getPublicListOfValues](docs/publiclistofvalueslov/README.md#getpubliclistofvalues) - Get the list of values related to this list name
* [getPublicLovIndex](docs/publiclistofvalueslov/README.md#getpubliclovindex) - Get all list names

### [publicSecuritySecurity](docs/publicsecuritysecurity/README.md)

* [login](docs/publicsecuritysecurity/README.md#login) - Login
* [lostPassword](docs/publicsecuritysecurity/README.md#lostpassword) - Lost password
* [register](docs/publicsecuritysecurity/README.md#register) - User Registration

### [userListOfValuesLOV](docs/userlistofvalueslov/README.md)

* [getUserListOfValues](docs/userlistofvalueslov/README.md#getuserlistofvalues) - Get the list of values related to this list name
* [getUserLovIndex](docs/userlistofvalueslov/README.md#getuserlovindex) - Get all list names
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
