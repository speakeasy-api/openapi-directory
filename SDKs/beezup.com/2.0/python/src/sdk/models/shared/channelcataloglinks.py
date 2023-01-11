import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_getchannelcatalogcategorieslink as shared_links_getchannelcatalogcategorieslink
from ..shared import externallinks_getchannelinfolink as shared_externallinks_getchannelinfolink
from ..shared import links_configurechannelcatalogcolumnmappingslink as shared_links_configurechannelcatalogcolumnmappingslink
from ..shared import links_configurechannelcatalogcostsettingslink as shared_links_configurechannelcatalogcostsettingslink
from ..shared import links_configurechannelcataloggeneralsettingslink as shared_links_configurechannelcataloggeneralsettingslink
from ..shared import links_deletechannelcataloglink as shared_links_deletechannelcataloglink
from ..shared import links_disablechannelcataloglink as shared_links_disablechannelcataloglink
from ..shared import links_disablechannelcatalogcategorymappinglink as shared_links_disablechannelcatalogcategorymappinglink
from ..shared import links_enablechannelcataloglink as shared_links_enablechannelcataloglink
from ..shared import links_getchannelcatalogexclusionfilterslink as shared_links_getchannelcatalogexclusionfilterslink
from ..shared import links_getchannelcatalogexportationcacheinfolink as shared_links_getchannelcatalogexportationcacheinfolink
from ..shared import externallinks_getchannelcatalogmarketplacesettingslink as shared_externallinks_getchannelcatalogmarketplacesettingslink
from ..shared import links_getchannelcatalogproductinfolistlink as shared_links_getchannelcatalogproductinfolistlink
from ..shared import links_reenablechannelcatalogcategorymappinglink as shared_links_reenablechannelcatalogcategorymappinglink
from ..shared import links_getchannelcataloglink as shared_links_getchannelcataloglink


@dataclass_json
@dataclasses.dataclass
class ChannelCatalogLinks:
    r"""ChannelCatalogLinks
    Indicates the actions you can do on a channel catalog
    """
    
    self: shared_links_getchannelcataloglink.LinksGetChannelCatalogLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    category_mappings: Optional[shared_links_getchannelcatalogcategorieslink.LinksGetChannelCatalogCategoriesLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryMappings') }})
    channel_info: Optional[shared_externallinks_getchannelinfolink.ExternalLinksGetChannelInfoLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelInfo') }})
    configure_column_mappings: Optional[shared_links_configurechannelcatalogcolumnmappingslink.LinksConfigureChannelCatalogColumnMappingsLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configureColumnMappings') }})
    configure_cost_settings: Optional[shared_links_configurechannelcatalogcostsettingslink.LinksConfigureChannelCatalogCostSettingsLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configureCostSettings') }})
    configure_general_settings: Optional[shared_links_configurechannelcataloggeneralsettingslink.LinksConfigureChannelCatalogGeneralSettingsLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configureGeneralSettings') }})
    delete: Optional[shared_links_deletechannelcataloglink.LinksDeleteChannelCatalogLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    disable: Optional[shared_links_disablechannelcataloglink.LinksDisableChannelCatalogLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disable') }})
    disable_category_mappings: Optional[shared_links_disablechannelcatalogcategorymappinglink.LinksDisableChannelCatalogCategoryMappingLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableCategoryMappings') }})
    enable: Optional[shared_links_enablechannelcataloglink.LinksEnableChannelCatalogLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    exclusion_filters: Optional[shared_links_getchannelcatalogexclusionfilterslink.LinksGetChannelCatalogExclusionFiltersLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exclusionFilters') }})
    exportation_cache_info: Optional[shared_links_getchannelcatalogexportationcacheinfolink.LinksGetChannelCatalogExportationCacheInfoLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exportationCacheInfo') }})
    marketplace_settings: Optional[shared_externallinks_getchannelcatalogmarketplacesettingslink.ExternalLinksGetChannelCatalogMarketplaceSettingsLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marketplaceSettings') }})
    products: Optional[shared_links_getchannelcatalogproductinfolistlink.LinksGetChannelCatalogProductInfoListLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('products') }})
    reenable_category_mappings: Optional[shared_links_reenablechannelcatalogcategorymappinglink.LinksReenableChannelCatalogCategoryMappingLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reenableCategoryMappings') }})
    
