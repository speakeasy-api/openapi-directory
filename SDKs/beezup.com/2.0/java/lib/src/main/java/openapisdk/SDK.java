

package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.SpeakeasyHTTPClient;


/** SDK Documentation: https://api-docs.beezup.com/ - Find the documentation for BeezUP's API here**/
public class SDK {
	public static final String[] SERVERS = {
		"https://api.beezup.com",
	};
  	
  	public AnalyticsGlobal analyticsGlobal;
  	public AnalyticsOptimisations analyticsOptimisations;
  	public AnalyticsReports analyticsReports;
  	public AnalyticsRules analyticsRules;
  	public AnalyticsStatistics analyticsStatistics;
  	public AnalyticsTracking analyticsTracking;
  	public CatalogsAuto catalogsAuto;
  	public CatalogsCatalog catalogsCatalog;
  	public CatalogsGlobal catalogsGlobal;
  	public CatalogsImportationCatalogInfo catalogsImportationCatalogInfo;
  	public CatalogsImportationProcess catalogsImportationProcess;
  	public ChannelCatalogsCategories channelCatalogsCategories;
  	public ChannelCatalogsColumnMappings channelCatalogsColumnMappings;
  	public ChannelCatalogsExclusionFilters channelCatalogsExclusionFilters;
  	public ChannelCatalogsExportations channelCatalogsExportations;
  	public ChannelCatalogsGlobal channelCatalogsGlobal;
  	public ChannelCatalogsLegacyTrackingGlobal channelCatalogsLegacyTrackingGlobal;
  	public ChannelCatalogsProducts channelCatalogsProducts;
  	public ChannelCatalogsProductsOptimisation channelCatalogsProductsOptimisation;
  	public ChannelCatalogsProductsOverrides channelCatalogsProductsOverrides;
  	public ChannelCatalogsSettings channelCatalogsSettings;
  	public ChannelsChannelsGlobal channelsChannelsGlobal;
  	public CustomerAccount customerAccount;
  	public CustomerAlerts customerAlerts;
  	public CustomerContracts customerContracts;
  	public CustomerFriends customerFriends;
  	public CustomerGlobal customerGlobal;
  	public CustomerInvoices customerInvoices;
  	public CustomerRights customerRights;
  	public CustomerSecurity customerSecurity;
  	public CustomerShares customerShares;
  	public CustomerStores customerStores;
  	public MarketplacesChannelCatalogsGlobal marketplacesChannelCatalogsGlobal;
  	public MarketplacesChannelCatalogsPublications marketplacesChannelCatalogsPublications;
  	public MarketplacesChannelCatalogsSettings marketplacesChannelCatalogsSettings;
  	public MarketplacesOrdersAutoTransitions marketplacesOrdersAutoTransitions;
  	public MarketplacesOrdersBatches marketplacesOrdersBatches;
  	public MarketplacesOrdersExports marketplacesOrdersExports;
  	public MarketplacesOrdersGlobal marketplacesOrdersGlobal;
  	public MarketplacesOrdersList marketplacesOrdersList;
  	public MarketplacesOrdersOrder marketplacesOrdersOrder;
  	public MarketplacesOrdersSubscriptionsSubscriptions marketplacesOrdersSubscriptionsSubscriptions;
  	public MarketplacesOrdersV3Batches marketplacesOrdersV3Batches;
  	public MarketplacesOrdersV3Global marketplacesOrdersV3Global;
  	public MarketplacesOrdersV3List marketplacesOrdersV3List;
  	public MarketplacesOrdersV3Order marketplacesOrdersV3Order;
  	public OmInvoiceApiGeneration omInvoiceAPIGeneration;
  	public OmInvoiceApiSettings omInvoiceAPISettings;
  	public PublicChannelsPublicChannels publicChannelsPublicChannels;
  	public PublicListOfValuesLov publicListOfValuesLOV;
  	public PublicSecuritySecurity publicSecuritySecurity;
  	public UserListOfValuesLov userListOfValuesLOV;	

	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	
	private String _serverUrl;
	private String _language = "java";
	private String _sdkVersion = "0.0.1";
	private String _genVersion = "internal";

	public static class Builder {
		private HTTPClient client;
		
		private String serverUrl;
		private java.util.Map<String, String> params = new java.util.HashMap<String, String>();

		private Builder() {
		}

		public Builder setClient(HTTPClient client) {
			this.client = client;
			return this;
		}
		
		public Builder setServerURL(String serverUrl) {
			this.serverUrl = serverUrl;
			return this;
		}
		
		public Builder setServerURL(String serverUrl, java.util.Map<String, String> params) {
			this.serverUrl = serverUrl;
			this.params = params;
			return this;
		}
		
		public SDK build() throws Exception {
			return new SDK(this.client, this.serverUrl, this.params);
		}
	}

	public static Builder builder() {
		return new Builder();
	}

	private SDK(HTTPClient client, String serverUrl, java.util.Map<String, String> params) throws Exception {
		this._defaultClient = client;
		
		if (this._defaultClient == null) {
			this._defaultClient = new SpeakeasyHTTPClient();
		}
		
		if (this._securityClient == null) {
			this._securityClient = this._defaultClient;
		}

		if (serverUrl != null && !serverUrl.isBlank()) {
			this._serverUrl = openapisdk.utils.Utils.replaceParameters(serverUrl, params);
		}
		
		if (this._serverUrl == null) {
			this._serverUrl = SERVERS[0];
		}
		
		this.analyticsGlobal = new AnalyticsGlobal(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.analyticsOptimisations = new AnalyticsOptimisations(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.analyticsReports = new AnalyticsReports(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.analyticsRules = new AnalyticsRules(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.analyticsStatistics = new AnalyticsStatistics(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.analyticsTracking = new AnalyticsTracking(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.catalogsAuto = new CatalogsAuto(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.catalogsCatalog = new CatalogsCatalog(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.catalogsGlobal = new CatalogsGlobal(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.catalogsImportationCatalogInfo = new CatalogsImportationCatalogInfo(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.catalogsImportationProcess = new CatalogsImportationProcess(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.channelCatalogsCategories = new ChannelCatalogsCategories(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.channelCatalogsColumnMappings = new ChannelCatalogsColumnMappings(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.channelCatalogsExclusionFilters = new ChannelCatalogsExclusionFilters(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.channelCatalogsExportations = new ChannelCatalogsExportations(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.channelCatalogsGlobal = new ChannelCatalogsGlobal(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.channelCatalogsLegacyTrackingGlobal = new ChannelCatalogsLegacyTrackingGlobal(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.channelCatalogsProducts = new ChannelCatalogsProducts(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.channelCatalogsProductsOptimisation = new ChannelCatalogsProductsOptimisation(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.channelCatalogsProductsOverrides = new ChannelCatalogsProductsOverrides(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.channelCatalogsSettings = new ChannelCatalogsSettings(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.channelsChannelsGlobal = new ChannelsChannelsGlobal(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.customerAccount = new CustomerAccount(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.customerAlerts = new CustomerAlerts(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.customerContracts = new CustomerContracts(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.customerFriends = new CustomerFriends(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.customerGlobal = new CustomerGlobal(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.customerInvoices = new CustomerInvoices(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.customerRights = new CustomerRights(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.customerSecurity = new CustomerSecurity(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.customerShares = new CustomerShares(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.customerStores = new CustomerStores(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.marketplacesChannelCatalogsGlobal = new MarketplacesChannelCatalogsGlobal(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.marketplacesChannelCatalogsPublications = new MarketplacesChannelCatalogsPublications(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.marketplacesChannelCatalogsSettings = new MarketplacesChannelCatalogsSettings(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.marketplacesOrdersAutoTransitions = new MarketplacesOrdersAutoTransitions(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.marketplacesOrdersBatches = new MarketplacesOrdersBatches(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.marketplacesOrdersExports = new MarketplacesOrdersExports(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.marketplacesOrdersGlobal = new MarketplacesOrdersGlobal(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.marketplacesOrdersList = new MarketplacesOrdersList(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.marketplacesOrdersOrder = new MarketplacesOrdersOrder(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.marketplacesOrdersSubscriptionsSubscriptions = new MarketplacesOrdersSubscriptionsSubscriptions(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.marketplacesOrdersV3Batches = new MarketplacesOrdersV3Batches(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.marketplacesOrdersV3Global = new MarketplacesOrdersV3Global(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.marketplacesOrdersV3List = new MarketplacesOrdersV3List(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.marketplacesOrdersV3Order = new MarketplacesOrdersV3Order(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.omInvoiceAPIGeneration = new OmInvoiceApiGeneration(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.omInvoiceAPISettings = new OmInvoiceApiSettings(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.publicChannelsPublicChannels = new PublicChannelsPublicChannels(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.publicListOfValuesLOV = new PublicListOfValuesLov(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.publicSecuritySecurity = new PublicSecuritySecurity(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.userListOfValuesLOV = new UserListOfValuesLov(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
	}
	
}