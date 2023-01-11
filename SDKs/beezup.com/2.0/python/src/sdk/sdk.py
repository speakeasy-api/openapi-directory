
__doc__ = """ SDK Documentation: https://api-docs.beezup.com/ - Find the documentation for BeezUP's API here"""
import requests

from . import utils

from .analytics_global import AnalyticsGlobal
from .analytics_optimisations import AnalyticsOptimisations
from .analytics_reports import AnalyticsReports
from .analytics_rules import AnalyticsRules
from .analytics_statistics import AnalyticsStatistics
from .analytics_tracking import AnalyticsTracking
from .catalogs_auto import CatalogsAuto
from .catalogs_catalog import CatalogsCatalog
from .catalogs_global import CatalogsGlobal
from .catalogs_importation_catalog_info import CatalogsImportationCatalogInfo
from .catalogs_importation_process import CatalogsImportationProcess
from .channel_catalogs_categories import ChannelCatalogsCategories
from .channel_catalogs_column_mappings import ChannelCatalogsColumnMappings
from .channel_catalogs_exclusion_filters import ChannelCatalogsExclusionFilters
from .channel_catalogs_exportations import ChannelCatalogsExportations
from .channel_catalogs_global import ChannelCatalogsGlobal
from .channel_catalogs_legacy_tracking_global import ChannelCatalogsLegacyTrackingGlobal
from .channel_catalogs_products import ChannelCatalogsProducts
from .channel_catalogs_products_optimisation import ChannelCatalogsProductsOptimisation
from .channel_catalogs_products_overrides import ChannelCatalogsProductsOverrides
from .channel_catalogs_settings import ChannelCatalogsSettings
from .channels_channels_global import ChannelsChannelsGlobal
from .customer_account import CustomerAccount
from .customer_alerts import CustomerAlerts
from .customer_contracts import CustomerContracts
from .customer_friends import CustomerFriends
from .customer_global import CustomerGlobal
from .customer_invoices import CustomerInvoices
from .customer_rights import CustomerRights
from .customer_security import CustomerSecurity
from .customer_shares import CustomerShares
from .customer_stores import CustomerStores
from .marketplaces_channel_catalogs_global import MarketplacesChannelCatalogsGlobal
from .marketplaces_channel_catalogs_publications import MarketplacesChannelCatalogsPublications
from .marketplaces_channel_catalogs_settings import MarketplacesChannelCatalogsSettings
from .marketplaces_orders_autotransitions import MarketplacesOrdersAutoTransitions
from .marketplaces_orders_batches import MarketplacesOrdersBatches
from .marketplaces_orders_exports import MarketplacesOrdersExports
from .marketplaces_orders_global import MarketplacesOrdersGlobal
from .marketplaces_orders_list import MarketplacesOrdersList
from .marketplaces_orders_order import MarketplacesOrdersOrder
from .marketplaces_orders_subscriptions_subscriptions import MarketplacesOrdersSubscriptionsSubscriptions
from .marketplaces_orders_v3_batches import MarketplacesOrdersV3Batches
from .marketplaces_orders_v3_global import MarketplacesOrdersV3Global
from .marketplaces_orders_v3_list import MarketplacesOrdersV3List
from .marketplaces_orders_v3_order import MarketplacesOrdersV3Order
from .om_invoice_api_generation import OmInvoiceAPIGeneration
from .om_invoice_api_settings import OmInvoiceAPISettings
from .public_channels_public_channels import PublicChannelsPublicChannels
from .public_list_of_values_lov import PublicListOfValuesLov
from .public_security_security import PublicSecuritySecurity
from .user_list_of_values_lov import UserListOfValuesLov


SERVERS = [
	"https://api.beezup.com",
]


class SDK:
    r"""SDK Documentation: https://api-docs.beezup.com/ - Find the documentation for BeezUP's API here"""
    analytics_global: AnalyticsGlobal
    analytics_optimisations: AnalyticsOptimisations
    analytics_reports: AnalyticsReports
    analytics_rules: AnalyticsRules
    analytics_statistics: AnalyticsStatistics
    analytics_tracking: AnalyticsTracking
    catalogs_auto: CatalogsAuto
    catalogs_catalog: CatalogsCatalog
    catalogs_global: CatalogsGlobal
    catalogs_importation_catalog_info: CatalogsImportationCatalogInfo
    catalogs_importation_process: CatalogsImportationProcess
    channel_catalogs_categories: ChannelCatalogsCategories
    channel_catalogs_column_mappings: ChannelCatalogsColumnMappings
    channel_catalogs_exclusion_filters: ChannelCatalogsExclusionFilters
    channel_catalogs_exportations: ChannelCatalogsExportations
    channel_catalogs_global: ChannelCatalogsGlobal
    channel_catalogs_legacy_tracking_global: ChannelCatalogsLegacyTrackingGlobal
    channel_catalogs_products: ChannelCatalogsProducts
    channel_catalogs_products_optimisation: ChannelCatalogsProductsOptimisation
    channel_catalogs_products_overrides: ChannelCatalogsProductsOverrides
    channel_catalogs_settings: ChannelCatalogsSettings
    channels_channels_global: ChannelsChannelsGlobal
    customer_account: CustomerAccount
    customer_alerts: CustomerAlerts
    customer_contracts: CustomerContracts
    customer_friends: CustomerFriends
    customer_global: CustomerGlobal
    customer_invoices: CustomerInvoices
    customer_rights: CustomerRights
    customer_security: CustomerSecurity
    customer_shares: CustomerShares
    customer_stores: CustomerStores
    marketplaces_channel_catalogs_global: MarketplacesChannelCatalogsGlobal
    marketplaces_channel_catalogs_publications: MarketplacesChannelCatalogsPublications
    marketplaces_channel_catalogs_settings: MarketplacesChannelCatalogsSettings
    marketplaces_orders_auto_transitions: MarketplacesOrdersAutoTransitions
    marketplaces_orders_batches: MarketplacesOrdersBatches
    marketplaces_orders_exports: MarketplacesOrdersExports
    marketplaces_orders_global: MarketplacesOrdersGlobal
    marketplaces_orders_list: MarketplacesOrdersList
    marketplaces_orders_order: MarketplacesOrdersOrder
    marketplaces_orders_subscriptions_subscriptions: MarketplacesOrdersSubscriptionsSubscriptions
    marketplaces_orders_v3_batches: MarketplacesOrdersV3Batches
    marketplaces_orders_v3_global: MarketplacesOrdersV3Global
    marketplaces_orders_v3_list: MarketplacesOrdersV3List
    marketplaces_orders_v3_order: MarketplacesOrdersV3Order
    om_invoice_api_generation: OmInvoiceAPIGeneration
    om_invoice_api_settings: OmInvoiceAPISettings
    public_channels_public_channels: PublicChannelsPublicChannels
    public_list_of_values_lov: PublicListOfValuesLov
    public_security_security: PublicSecuritySecurity
    user_list_of_values_lov: UserListOfValuesLov

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        self._init_sdks()


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        self._init_sdks()
    

    def config_client(self, client: requests.Session):
        self._client = client
        self._init_sdks()
    
    
    def _init_sdks(self):
        
        self.analytics_global = AnalyticsGlobal(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.analytics_optimisations = AnalyticsOptimisations(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.analytics_reports = AnalyticsReports(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.analytics_rules = AnalyticsRules(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.analytics_statistics = AnalyticsStatistics(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.analytics_tracking = AnalyticsTracking(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.catalogs_auto = CatalogsAuto(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.catalogs_catalog = CatalogsCatalog(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.catalogs_global = CatalogsGlobal(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.catalogs_importation_catalog_info = CatalogsImportationCatalogInfo(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.catalogs_importation_process = CatalogsImportationProcess(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.channel_catalogs_categories = ChannelCatalogsCategories(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.channel_catalogs_column_mappings = ChannelCatalogsColumnMappings(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.channel_catalogs_exclusion_filters = ChannelCatalogsExclusionFilters(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.channel_catalogs_exportations = ChannelCatalogsExportations(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.channel_catalogs_global = ChannelCatalogsGlobal(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.channel_catalogs_legacy_tracking_global = ChannelCatalogsLegacyTrackingGlobal(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.channel_catalogs_products = ChannelCatalogsProducts(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.channel_catalogs_products_optimisation = ChannelCatalogsProductsOptimisation(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.channel_catalogs_products_overrides = ChannelCatalogsProductsOverrides(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.channel_catalogs_settings = ChannelCatalogsSettings(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.channels_channels_global = ChannelsChannelsGlobal(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.customer_account = CustomerAccount(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.customer_alerts = CustomerAlerts(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.customer_contracts = CustomerContracts(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.customer_friends = CustomerFriends(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.customer_global = CustomerGlobal(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.customer_invoices = CustomerInvoices(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.customer_rights = CustomerRights(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.customer_security = CustomerSecurity(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.customer_shares = CustomerShares(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.customer_stores = CustomerStores(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.marketplaces_channel_catalogs_global = MarketplacesChannelCatalogsGlobal(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.marketplaces_channel_catalogs_publications = MarketplacesChannelCatalogsPublications(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.marketplaces_channel_catalogs_settings = MarketplacesChannelCatalogsSettings(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.marketplaces_orders_auto_transitions = MarketplacesOrdersAutoTransitions(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.marketplaces_orders_batches = MarketplacesOrdersBatches(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.marketplaces_orders_exports = MarketplacesOrdersExports(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.marketplaces_orders_global = MarketplacesOrdersGlobal(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.marketplaces_orders_list = MarketplacesOrdersList(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.marketplaces_orders_order = MarketplacesOrdersOrder(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.marketplaces_orders_subscriptions_subscriptions = MarketplacesOrdersSubscriptionsSubscriptions(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.marketplaces_orders_v3_batches = MarketplacesOrdersV3Batches(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.marketplaces_orders_v3_global = MarketplacesOrdersV3Global(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.marketplaces_orders_v3_list = MarketplacesOrdersV3List(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.marketplaces_orders_v3_order = MarketplacesOrdersV3Order(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.om_invoice_api_generation = OmInvoiceAPIGeneration(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.om_invoice_api_settings = OmInvoiceAPISettings(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.public_channels_public_channels = PublicChannelsPublicChannels(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.public_list_of_values_lov = PublicListOfValuesLov(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.public_security_security = PublicSecuritySecurity(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.user_list_of_values_lov = UserListOfValuesLov(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
    
    