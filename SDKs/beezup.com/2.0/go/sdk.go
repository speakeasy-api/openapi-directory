package sdk

import (
	"net/http"

	"openapi/pkg/utils"
)

var ServerList = []string{
	"https://api.beezup.com",
}

type HTTPClient interface {
	Do(req *http.Request) (*http.Response, error)
}

// SDK Documentation: https://api-docs.beezup.com/ - Find the documentation for BeezUP's API here
type SDK struct {
	AnalyticsGlobal                              *AnalyticsGlobal
	AnalyticsOptimisations                       *AnalyticsOptimisations
	AnalyticsReports                             *AnalyticsReports
	AnalyticsRules                               *AnalyticsRules
	AnalyticsStatistics                          *AnalyticsStatistics
	AnalyticsTracking                            *AnalyticsTracking
	CatalogsAuto                                 *CatalogsAuto
	CatalogsCatalog                              *CatalogsCatalog
	CatalogsGlobal                               *CatalogsGlobal
	CatalogsImportationCatalogInfo               *CatalogsImportationCatalogInfo
	CatalogsImportationProcess                   *CatalogsImportationProcess
	ChannelCatalogsCategories                    *ChannelCatalogsCategories
	ChannelCatalogsColumnMappings                *ChannelCatalogsColumnMappings
	ChannelCatalogsExclusionFilters              *ChannelCatalogsExclusionFilters
	ChannelCatalogsExportations                  *ChannelCatalogsExportations
	ChannelCatalogsGlobal                        *ChannelCatalogsGlobal
	ChannelCatalogsLegacyTrackingGlobal          *ChannelCatalogsLegacyTrackingGlobal
	ChannelCatalogsProducts                      *ChannelCatalogsProducts
	ChannelCatalogsProductsOptimisation          *ChannelCatalogsProductsOptimisation
	ChannelCatalogsProductsOverrides             *ChannelCatalogsProductsOverrides
	ChannelCatalogsSettings                      *ChannelCatalogsSettings
	ChannelsChannelsGlobal                       *ChannelsChannelsGlobal
	CustomerAccount                              *CustomerAccount
	CustomerAlerts                               *CustomerAlerts
	CustomerContracts                            *CustomerContracts
	CustomerFriends                              *CustomerFriends
	CustomerGlobal                               *CustomerGlobal
	CustomerInvoices                             *CustomerInvoices
	CustomerRights                               *CustomerRights
	CustomerSecurity                             *CustomerSecurity
	CustomerShares                               *CustomerShares
	CustomerStores                               *CustomerStores
	MarketplacesChannelCatalogsGlobal            *MarketplacesChannelCatalogsGlobal
	MarketplacesChannelCatalogsPublications      *MarketplacesChannelCatalogsPublications
	MarketplacesChannelCatalogsSettings          *MarketplacesChannelCatalogsSettings
	MarketplacesOrdersAutoTransitions            *MarketplacesOrdersAutoTransitions
	MarketplacesOrdersBatches                    *MarketplacesOrdersBatches
	MarketplacesOrdersExports                    *MarketplacesOrdersExports
	MarketplacesOrdersGlobal                     *MarketplacesOrdersGlobal
	MarketplacesOrdersList                       *MarketplacesOrdersList
	MarketplacesOrdersOrder                      *MarketplacesOrdersOrder
	MarketplacesOrdersSubscriptionsSubscriptions *MarketplacesOrdersSubscriptionsSubscriptions
	MarketplacesOrdersV3Batches                  *MarketplacesOrdersV3Batches
	MarketplacesOrdersV3Global                   *MarketplacesOrdersV3Global
	MarketplacesOrdersV3List                     *MarketplacesOrdersV3List
	MarketplacesOrdersV3Order                    *MarketplacesOrdersV3Order
	OMInvoiceAPIGeneration                       *OmInvoiceAPIGeneration
	OMInvoiceAPISettings                         *OmInvoiceAPISettings
	PublicChannelsPublicChannels                 *PublicChannelsPublicChannels
	PublicListOfValuesLOV                        *PublicListOfValuesLov
	PublicSecuritySecurity                       *PublicSecuritySecurity
	UserListOfValuesLOV                          *UserListOfValuesLov

	_defaultClient  HTTPClient
	_securityClient HTTPClient

	_serverURL  string
	_language   string
	_sdkVersion string
	_genVersion string
}

type SDKOption func(*SDK)

func WithServerURL(serverURL string, params map[string]string) SDKOption {
	return func(sdk *SDK) {
		if params != nil {
			serverURL = utils.ReplaceParameters(serverURL, params)
		}

		sdk._serverURL = serverURL
	}
}

func WithClient(client HTTPClient) SDKOption {
	return func(sdk *SDK) {
		sdk._defaultClient = client
	}
}

func New(opts ...SDKOption) *SDK {
	sdk := &SDK{
		_language:   "go",
		_sdkVersion: "",
		_genVersion: "internal",
	}
	for _, opt := range opts {
		opt(sdk)
	}

	if sdk._defaultClient == nil {
		sdk._defaultClient = http.DefaultClient
	}
	if sdk._securityClient == nil {

		sdk._securityClient = sdk._defaultClient

	}

	if sdk._serverURL == "" {
		sdk._serverURL = ServerList[0]
	}

	sdk.AnalyticsGlobal = NewAnalyticsGlobal(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.AnalyticsOptimisations = NewAnalyticsOptimisations(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.AnalyticsReports = NewAnalyticsReports(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.AnalyticsRules = NewAnalyticsRules(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.AnalyticsStatistics = NewAnalyticsStatistics(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.AnalyticsTracking = NewAnalyticsTracking(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.CatalogsAuto = NewCatalogsAuto(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.CatalogsCatalog = NewCatalogsCatalog(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.CatalogsGlobal = NewCatalogsGlobal(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.CatalogsImportationCatalogInfo = NewCatalogsImportationCatalogInfo(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.CatalogsImportationProcess = NewCatalogsImportationProcess(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.ChannelCatalogsCategories = NewChannelCatalogsCategories(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.ChannelCatalogsColumnMappings = NewChannelCatalogsColumnMappings(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.ChannelCatalogsExclusionFilters = NewChannelCatalogsExclusionFilters(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.ChannelCatalogsExportations = NewChannelCatalogsExportations(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.ChannelCatalogsGlobal = NewChannelCatalogsGlobal(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.ChannelCatalogsLegacyTrackingGlobal = NewChannelCatalogsLegacyTrackingGlobal(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.ChannelCatalogsProducts = NewChannelCatalogsProducts(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.ChannelCatalogsProductsOptimisation = NewChannelCatalogsProductsOptimisation(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.ChannelCatalogsProductsOverrides = NewChannelCatalogsProductsOverrides(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.ChannelCatalogsSettings = NewChannelCatalogsSettings(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.ChannelsChannelsGlobal = NewChannelsChannelsGlobal(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.CustomerAccount = NewCustomerAccount(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.CustomerAlerts = NewCustomerAlerts(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.CustomerContracts = NewCustomerContracts(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.CustomerFriends = NewCustomerFriends(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.CustomerGlobal = NewCustomerGlobal(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.CustomerInvoices = NewCustomerInvoices(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.CustomerRights = NewCustomerRights(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.CustomerSecurity = NewCustomerSecurity(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.CustomerShares = NewCustomerShares(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.CustomerStores = NewCustomerStores(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.MarketplacesChannelCatalogsGlobal = NewMarketplacesChannelCatalogsGlobal(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.MarketplacesChannelCatalogsPublications = NewMarketplacesChannelCatalogsPublications(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.MarketplacesChannelCatalogsSettings = NewMarketplacesChannelCatalogsSettings(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.MarketplacesOrdersAutoTransitions = NewMarketplacesOrdersAutoTransitions(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.MarketplacesOrdersBatches = NewMarketplacesOrdersBatches(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.MarketplacesOrdersExports = NewMarketplacesOrdersExports(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.MarketplacesOrdersGlobal = NewMarketplacesOrdersGlobal(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.MarketplacesOrdersList = NewMarketplacesOrdersList(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.MarketplacesOrdersOrder = NewMarketplacesOrdersOrder(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.MarketplacesOrdersSubscriptionsSubscriptions = NewMarketplacesOrdersSubscriptionsSubscriptions(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.MarketplacesOrdersV3Batches = NewMarketplacesOrdersV3Batches(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.MarketplacesOrdersV3Global = NewMarketplacesOrdersV3Global(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.MarketplacesOrdersV3List = NewMarketplacesOrdersV3List(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.MarketplacesOrdersV3Order = NewMarketplacesOrdersV3Order(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.OMInvoiceAPIGeneration = NewOmInvoiceAPIGeneration(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.OMInvoiceAPISettings = NewOmInvoiceAPISettings(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.PublicChannelsPublicChannels = NewPublicChannelsPublicChannels(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.PublicListOfValuesLOV = NewPublicListOfValuesLov(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.PublicSecuritySecurity = NewPublicSecuritySecurity(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.UserListOfValuesLOV = NewUserListOfValuesLov(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	return sdk
}
