import { AnalyticsGlobal } from "./analyticsglobal";
import { AnalyticsOptimisations } from "./analyticsoptimisations";
import { AnalyticsReports } from "./analyticsreports";
import { AnalyticsRules } from "./analyticsrules";
import { AnalyticsStatistics } from "./analyticsstatistics";
import { AnalyticsTracking } from "./analyticstracking";
import { CatalogsAuto } from "./catalogsauto";
import { CatalogsCatalog } from "./catalogscatalog";
import { CatalogsGlobal } from "./catalogsglobal";
import { CatalogsImportationCatalogInfo } from "./catalogsimportationcataloginfo";
import { CatalogsImportationProcess } from "./catalogsimportationprocess";
import { ChannelCatalogsCategories } from "./channelcatalogscategories";
import { ChannelCatalogsColumnMappings } from "./channelcatalogscolumnmappings";
import { ChannelCatalogsExclusionFilters } from "./channelcatalogsexclusionfilters";
import { ChannelCatalogsExportations } from "./channelcatalogsexportations";
import { ChannelCatalogsGlobal } from "./channelcatalogsglobal";
import { ChannelCatalogsLegacyTrackingGlobal } from "./channelcatalogslegacytrackingglobal";
import { ChannelCatalogsProducts } from "./channelcatalogsproducts";
import { ChannelCatalogsProductsOptimisation } from "./channelcatalogsproductsoptimisation";
import { ChannelCatalogsProductsOverrides } from "./channelcatalogsproductsoverrides";
import { ChannelCatalogsSettings } from "./channelcatalogssettings";
import { ChannelsChannelsGlobal } from "./channelschannelsglobal";
import { CustomerAccount } from "./customeraccount";
import { CustomerAlerts } from "./customeralerts";
import { CustomerContracts } from "./customercontracts";
import { CustomerFriends } from "./customerfriends";
import { CustomerGlobal } from "./customerglobal";
import { CustomerInvoices } from "./customerinvoices";
import { CustomerRights } from "./customerrights";
import { CustomerSecurity } from "./customersecurity";
import { CustomerShares } from "./customershares";
import { CustomerStores } from "./customerstores";
import { MarketplacesChannelCatalogsGlobal } from "./marketplaceschannelcatalogsglobal";
import { MarketplacesChannelCatalogsPublications } from "./marketplaceschannelcatalogspublications";
import { MarketplacesChannelCatalogsSettings } from "./marketplaceschannelcatalogssettings";
import { MarketplacesOrdersAutoTransitions } from "./marketplacesordersautotransitions";
import { MarketplacesOrdersBatches } from "./marketplacesordersbatches";
import { MarketplacesOrdersExports } from "./marketplacesordersexports";
import { MarketplacesOrdersGlobal } from "./marketplacesordersglobal";
import { MarketplacesOrdersList } from "./marketplacesorderslist";
import { MarketplacesOrdersOrder } from "./marketplacesordersorder";
import { MarketplacesOrdersSubscriptionsSubscriptions } from "./marketplacesorderssubscriptionssubscriptions";
import { MarketplacesOrdersV3Batches } from "./marketplacesordersv3batches";
import { MarketplacesOrdersV3Global } from "./marketplacesordersv3global";
import { MarketplacesOrdersV3List } from "./marketplacesordersv3list";
import { MarketplacesOrdersV3Order } from "./marketplacesordersv3order";
import { OMInvoiceAPIGeneration } from "./ominvoiceapigeneration";
import { OMInvoiceAPISettings } from "./ominvoiceapisettings";
import { PublicChannelsPublicChannels } from "./publicchannelspublicchannels";
import { PublicListOfValuesLOV } from "./publiclistofvalueslov";
import { PublicSecuritySecurity } from "./publicsecuritysecurity";
import { UserListOfValuesLOV } from "./userlistofvalueslov";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.beezup.com"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * # The REST API of BeezUP system
 *
 * @remarks
 * ## Overview
 * The REST APIs provide programmatic access to read and write BeezUP data.
 * Basically, with this API you will be able to do everything like you were with your browser on https://go.beezup.com !
 *
 * The main features are:
 * - Register and manage your account
 * - Create and manage and share your stores with your friends/co-workers.
 * - Import your product catalog and schedule the auto importation
 * - Search the channels your want to use
 * - Configure your channels for your catalogs to export your product information:
 *     - cost and general settings
 *     - category and columns mappings
 *     - your will be able to create and manage your custom column
 *     - put in place exlusion filters based on simple conditions on your product data
 *     - override product values
 *     - get product vision for a channel catalog scope
 * - Analyze and optimize your performance of your catalogs on all yours channels with different type of reportings by day, channel, category and by product.
 * - Automatize your optimisation by using rules!
 * - And of course... Manage your orders harvested from all your marketplaces:
 *     - Synchronize your orders in an uniformized way
 *     - Get the available actions and update the order status
 * - ...and more!
 *
 * ## Authentication credentials
 * The public API with the base path ** /v2/public** have been put in place to give you an entry point to our system for the user registration, login and lost password. The public API does not require any credentials.
 * We give you the some public list of values and public channels for our public commercial web site [www.beezup.com](http://www.beezup.com).
 *
 * The user API with the base path ** /v2/user** requires a token which is available on this page:
 * https://go.beezup.com/Account/MyAccount
 *
 * ## Things to keep in mind
 * ### API Rate Limits
 * - The BeezUP REST API is limited to 100 calls/minute.
 *
 * ### Media type
 * The default media type for requests and responses is application/json. Where noted, some operations support other content types. If no additional content type is mentioned for a specific operation, then the media type is application/json.
 *
 * ### Required content type
 * The required and default encoding for the request and responses is UTF8.
 *
 * ### Required date time format
 * All our date time are formatted in ISO 8601 format: 2014-06-24T16:25:00Z.
 *
 * ### Base URL
 * The Base URL of the BeezUP API Order Management REST API conforms to the following template.
 *
 * https://api.beezup.com
 *
 * All URLs returned by the BeezUP API are relative to this base URL, and all requests to the REST API must use this base URL template.
 *
 * You can test our API on https://api-docs.beezup.com/swagger-ui\\
 * You can contact us on [gitter, #BeezUP/API](https://gitter.im/BeezUP/API)
 *
 * @see {@link https://api-docs.beezup.com/} - Find the documentation for BeezUP's API here
 */
export declare class SDK {
    analyticsGlobal: AnalyticsGlobal;
    analyticsOptimisations: AnalyticsOptimisations;
    analyticsReports: AnalyticsReports;
    analyticsRules: AnalyticsRules;
    analyticsStatistics: AnalyticsStatistics;
    analyticsTracking: AnalyticsTracking;
    catalogsAuto: CatalogsAuto;
    catalogsCatalog: CatalogsCatalog;
    catalogsGlobal: CatalogsGlobal;
    catalogsImportationCatalogInfo: CatalogsImportationCatalogInfo;
    catalogsImportationProcess: CatalogsImportationProcess;
    channelCatalogsCategories: ChannelCatalogsCategories;
    channelCatalogsColumnMappings: ChannelCatalogsColumnMappings;
    channelCatalogsExclusionFilters: ChannelCatalogsExclusionFilters;
    channelCatalogsExportations: ChannelCatalogsExportations;
    channelCatalogsGlobal: ChannelCatalogsGlobal;
    channelCatalogsLegacyTrackingGlobal: ChannelCatalogsLegacyTrackingGlobal;
    channelCatalogsProducts: ChannelCatalogsProducts;
    channelCatalogsProductsOptimisation: ChannelCatalogsProductsOptimisation;
    channelCatalogsProductsOverrides: ChannelCatalogsProductsOverrides;
    channelCatalogsSettings: ChannelCatalogsSettings;
    channelsChannelsGlobal: ChannelsChannelsGlobal;
    customerAccount: CustomerAccount;
    customerAlerts: CustomerAlerts;
    customerContracts: CustomerContracts;
    customerFriends: CustomerFriends;
    customerGlobal: CustomerGlobal;
    customerInvoices: CustomerInvoices;
    customerRights: CustomerRights;
    customerSecurity: CustomerSecurity;
    customerShares: CustomerShares;
    customerStores: CustomerStores;
    marketplacesChannelCatalogsGlobal: MarketplacesChannelCatalogsGlobal;
    marketplacesChannelCatalogsPublications: MarketplacesChannelCatalogsPublications;
    marketplacesChannelCatalogsSettings: MarketplacesChannelCatalogsSettings;
    marketplacesOrdersAutoTransitions: MarketplacesOrdersAutoTransitions;
    marketplacesOrdersBatches: MarketplacesOrdersBatches;
    marketplacesOrdersExports: MarketplacesOrdersExports;
    marketplacesOrdersGlobal: MarketplacesOrdersGlobal;
    marketplacesOrdersList: MarketplacesOrdersList;
    marketplacesOrdersOrder: MarketplacesOrdersOrder;
    marketplacesOrdersSubscriptionsSubscriptions: MarketplacesOrdersSubscriptionsSubscriptions;
    marketplacesOrdersV3Batches: MarketplacesOrdersV3Batches;
    marketplacesOrdersV3Global: MarketplacesOrdersV3Global;
    marketplacesOrdersV3List: MarketplacesOrdersV3List;
    marketplacesOrdersV3Order: MarketplacesOrdersV3Order;
    omInvoiceAPIGeneration: OMInvoiceAPIGeneration;
    omInvoiceAPISettings: OMInvoiceAPISettings;
    publicChannelsPublicChannels: PublicChannelsPublicChannels;
    publicListOfValuesLOV: PublicListOfValuesLOV;
    publicSecuritySecurity: PublicSecuritySecurity;
    userListOfValuesLOV: UserListOfValuesLOV;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
