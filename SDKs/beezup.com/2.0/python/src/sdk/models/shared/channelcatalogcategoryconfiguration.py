import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ChannelCatalogCategoryConfiguration:
    r"""ChannelCatalogCategoryConfiguration
    Represent a mapping between a catalog category path and a channel category path.
    The cost on this mapping can be applied.
    
    """
    
    auto_map_new_sub_categories: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoMapNewSubCategories') }})
    catalog_category_path: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('catalogCategoryPath') }})
    channel_category_path: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelCategoryPath') }})
    cost_value: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('costValue') }})
    
