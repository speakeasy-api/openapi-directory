import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import channelcategorycolumnoverride as shared_channelcategorycolumnoverride
from ..shared import channelcategory as shared_channelcategory


@dataclass_json
@dataclasses.dataclass
class ChannelFirstLevelCategory:
    r"""ChannelFirstLevelCategory
    The first level category with his sub categories
    """
    
    channel_category_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelCategoryId') }})
    channel_category_level: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelCategoryLevel') }})
    channel_category_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelCategoryName') }})
    channel_category_channel_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelCategoryChannelCode') }})
    channel_category_column_overrides: Optional[dict[str, shared_channelcategorycolumnoverride.ChannelCategoryColumnOverride]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelCategoryColumnOverrides') }})
    channel_category_default_cost: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelCategoryDefaultCost') }})
    sub_categories: Optional[list[shared_channelcategory.ChannelCategory]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subCategories') }})
    
