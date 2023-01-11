import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import channelcategorycolumnoverride as shared_channelcategorycolumnoverride


@dataclass_json
@dataclasses.dataclass
class ChannelCategory:
    r"""ChannelCategory
    The channel category
    """
    
    channel_category_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelCategoryId') }})
    channel_category_level: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelCategoryLevel') }})
    channel_category_path: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelCategoryPath') }})
    channel_category_channel_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelCategoryChannelCode') }})
    channel_category_column_overrides: Optional[dict[str, shared_channelcategorycolumnoverride.ChannelCategoryColumnOverride]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelCategoryColumnOverrides') }})
    channel_category_default_cost: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelCategoryDefaultCost') }})
    
