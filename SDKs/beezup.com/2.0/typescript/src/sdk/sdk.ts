import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

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
import { OmInvoiceApiGeneration } from "./ominvoiceapigeneration";
import { OmInvoiceApiSettings } from "./ominvoiceapisettings";
import { PublicChannelsPublicChannels } from "./publicchannelspublicchannels";
import { PublicListOfValuesLov } from "./publiclistofvalueslov";
import { PublicSecuritySecurity } from "./publicsecuritysecurity";
import { UserListOfValuesLov } from "./userlistofvalueslov";


export const ServerList = [
	"https://api.beezup.com",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}

/* SDK Documentation: https://api-docs.beezup.com/ - Find the documentation for BeezUP's API here*/
export class SDK {
  public analyticsGlobal: AnalyticsGlobal;
  public analyticsOptimisations: AnalyticsOptimisations;
  public analyticsReports: AnalyticsReports;
  public analyticsRules: AnalyticsRules;
  public analyticsStatistics: AnalyticsStatistics;
  public analyticsTracking: AnalyticsTracking;
  public catalogsAuto: CatalogsAuto;
  public catalogsCatalog: CatalogsCatalog;
  public catalogsGlobal: CatalogsGlobal;
  public catalogsImportationCatalogInfo: CatalogsImportationCatalogInfo;
  public catalogsImportationProcess: CatalogsImportationProcess;
  public channelCatalogsCategories: ChannelCatalogsCategories;
  public channelCatalogsColumnMappings: ChannelCatalogsColumnMappings;
  public channelCatalogsExclusionFilters: ChannelCatalogsExclusionFilters;
  public channelCatalogsExportations: ChannelCatalogsExportations;
  public channelCatalogsGlobal: ChannelCatalogsGlobal;
  public channelCatalogsLegacyTrackingGlobal: ChannelCatalogsLegacyTrackingGlobal;
  public channelCatalogsProducts: ChannelCatalogsProducts;
  public channelCatalogsProductsOptimisation: ChannelCatalogsProductsOptimisation;
  public channelCatalogsProductsOverrides: ChannelCatalogsProductsOverrides;
  public channelCatalogsSettings: ChannelCatalogsSettings;
  public channelsChannelsGlobal: ChannelsChannelsGlobal;
  public customerAccount: CustomerAccount;
  public customerAlerts: CustomerAlerts;
  public customerContracts: CustomerContracts;
  public customerFriends: CustomerFriends;
  public customerGlobal: CustomerGlobal;
  public customerInvoices: CustomerInvoices;
  public customerRights: CustomerRights;
  public customerSecurity: CustomerSecurity;
  public customerShares: CustomerShares;
  public customerStores: CustomerStores;
  public marketplacesChannelCatalogsGlobal: MarketplacesChannelCatalogsGlobal;
  public marketplacesChannelCatalogsPublications: MarketplacesChannelCatalogsPublications;
  public marketplacesChannelCatalogsSettings: MarketplacesChannelCatalogsSettings;
  public marketplacesOrdersAutoTransitions: MarketplacesOrdersAutoTransitions;
  public marketplacesOrdersBatches: MarketplacesOrdersBatches;
  public marketplacesOrdersExports: MarketplacesOrdersExports;
  public marketplacesOrdersGlobal: MarketplacesOrdersGlobal;
  public marketplacesOrdersList: MarketplacesOrdersList;
  public marketplacesOrdersOrder: MarketplacesOrdersOrder;
  public marketplacesOrdersSubscriptionsSubscriptions: MarketplacesOrdersSubscriptionsSubscriptions;
  public marketplacesOrdersV3Batches: MarketplacesOrdersV3Batches;
  public marketplacesOrdersV3Global: MarketplacesOrdersV3Global;
  public marketplacesOrdersV3List: MarketplacesOrdersV3List;
  public marketplacesOrdersV3Order: MarketplacesOrdersV3Order;
  public omInvoiceAPIGeneration: OmInvoiceApiGeneration;
  public omInvoiceAPISettings: OmInvoiceApiSettings;
  public publicChannelsPublicChannels: PublicChannelsPublicChannels;
  public publicListOfValuesLOV: PublicListOfValuesLov;
  public publicSecuritySecurity: PublicSecuritySecurity;
  public userListOfValuesLOV: UserListOfValuesLov;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(props: SDKProps) {
    this._serverURL = props.serverUrl ?? ServerList[0];

    this._defaultClient = props.defaultClient ?? axios.create({ baseURL: this._serverURL });
    this._securityClient = this._defaultClient;
    
    this.analyticsGlobal = new AnalyticsGlobal(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.analyticsOptimisations = new AnalyticsOptimisations(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.analyticsReports = new AnalyticsReports(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.analyticsRules = new AnalyticsRules(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.analyticsStatistics = new AnalyticsStatistics(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.analyticsTracking = new AnalyticsTracking(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.catalogsAuto = new CatalogsAuto(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.catalogsCatalog = new CatalogsCatalog(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.catalogsGlobal = new CatalogsGlobal(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.catalogsImportationCatalogInfo = new CatalogsImportationCatalogInfo(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.catalogsImportationProcess = new CatalogsImportationProcess(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.channelCatalogsCategories = new ChannelCatalogsCategories(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.channelCatalogsColumnMappings = new ChannelCatalogsColumnMappings(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.channelCatalogsExclusionFilters = new ChannelCatalogsExclusionFilters(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.channelCatalogsExportations = new ChannelCatalogsExportations(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.channelCatalogsGlobal = new ChannelCatalogsGlobal(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.channelCatalogsLegacyTrackingGlobal = new ChannelCatalogsLegacyTrackingGlobal(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.channelCatalogsProducts = new ChannelCatalogsProducts(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.channelCatalogsProductsOptimisation = new ChannelCatalogsProductsOptimisation(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.channelCatalogsProductsOverrides = new ChannelCatalogsProductsOverrides(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.channelCatalogsSettings = new ChannelCatalogsSettings(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.channelsChannelsGlobal = new ChannelsChannelsGlobal(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.customerAccount = new CustomerAccount(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.customerAlerts = new CustomerAlerts(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.customerContracts = new CustomerContracts(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.customerFriends = new CustomerFriends(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.customerGlobal = new CustomerGlobal(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.customerInvoices = new CustomerInvoices(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.customerRights = new CustomerRights(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.customerSecurity = new CustomerSecurity(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.customerShares = new CustomerShares(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.customerStores = new CustomerStores(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.marketplacesChannelCatalogsGlobal = new MarketplacesChannelCatalogsGlobal(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.marketplacesChannelCatalogsPublications = new MarketplacesChannelCatalogsPublications(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.marketplacesChannelCatalogsSettings = new MarketplacesChannelCatalogsSettings(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.marketplacesOrdersAutoTransitions = new MarketplacesOrdersAutoTransitions(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.marketplacesOrdersBatches = new MarketplacesOrdersBatches(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.marketplacesOrdersExports = new MarketplacesOrdersExports(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.marketplacesOrdersGlobal = new MarketplacesOrdersGlobal(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.marketplacesOrdersList = new MarketplacesOrdersList(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.marketplacesOrdersOrder = new MarketplacesOrdersOrder(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.marketplacesOrdersSubscriptionsSubscriptions = new MarketplacesOrdersSubscriptionsSubscriptions(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.marketplacesOrdersV3Batches = new MarketplacesOrdersV3Batches(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.marketplacesOrdersV3Global = new MarketplacesOrdersV3Global(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.marketplacesOrdersV3List = new MarketplacesOrdersV3List(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.marketplacesOrdersV3Order = new MarketplacesOrdersV3Order(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.omInvoiceAPIGeneration = new OmInvoiceApiGeneration(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.omInvoiceAPISettings = new OmInvoiceApiSettings(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.publicChannelsPublicChannels = new PublicChannelsPublicChannels(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.publicListOfValuesLOV = new PublicListOfValuesLov(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.publicSecuritySecurity = new PublicSecuritySecurity(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.userListOfValuesLOV = new UserListOfValuesLov(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}