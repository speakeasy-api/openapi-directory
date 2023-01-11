import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import channelcatalogcategorymappinginfolinks as shared_channelcatalogcategorymappinginfolinks


@dataclass_json
@dataclasses.dataclass
class ChannelCatalogCategoryConfigurationInfo:
    r"""ChannelCatalogCategoryConfigurationInfo
    For all catalog categories the current mapping applied
    """
    
    catalog_category_path: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('catalogCategoryPath') }})
    links: shared_channelcatalogcategorymappinginfolinks.ChannelCatalogCategoryMappingInfoLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    channel_category_path: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelCategoryPath') }})
    cost_value: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('costValue') }})
    
