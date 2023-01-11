import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import channelcatalogcategorymappingsettings as shared_channelcatalogcategorymappingsettings
from ..shared import channelcategorysettings as shared_channelcategorysettings
from ..shared import channelcostsettings as shared_channelcostsettings
from ..shared import channelcatalogcolumnmappingwithname as shared_channelcatalogcolumnmappingwithname
from ..shared import costsettings as shared_costsettings
from ..shared import exclusionfilter as shared_exclusionfilter
from ..shared import generalsettings as shared_generalsettings
from ..shared import channelcataloglinks as shared_channelcataloglinks
from ..shared import channelcatalogstate as shared_channelcatalogstate


@dataclass_json
@dataclasses.dataclass
class ChannelCatalog:
    r"""ChannelCatalog
    The channel catalog
    """
    
    channel_catalog_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelCatalogId') }})
    channel_category_settings: shared_channelcategorysettings.ChannelCategorySettings = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelCategorySettings') }})
    channel_cost_settings: shared_channelcostsettings.ChannelCostSettings = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelCostSettings') }})
    channel_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelId') }})
    channel_image_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelImageUrl') }})
    channel_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelName') }})
    enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    general_settings: shared_generalsettings.GeneralSettings = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('generalSettings') }})
    is_marketplace: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isMarketplace') }})
    links: shared_channelcataloglinks.ChannelCatalogLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    state: shared_channelcatalogstate.ChannelCatalogState = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    store_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('storeId') }})
    types: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('types') }})
    category_mapping_settings: Optional[shared_channelcatalogcategorymappingsettings.ChannelCatalogCategoryMappingSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryMappingSettings') }})
    column_mappings: Optional[list[shared_channelcatalogcolumnmappingwithname.ChannelCatalogColumnMappingWithName]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnMappings') }})
    cost_settings: Optional[shared_costsettings.CostSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('costSettings') }})
    exclusion_filters: Optional[list[shared_exclusionfilter.ExclusionFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exclusionFilters') }})
    export_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exportUrl') }})
    
