import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ChannelCatalogColumnMapping:
    r"""ChannelCatalogColumnMapping
    Represent a mapping between a channel column (considering channel category mapping) and a catalog column
    """
    
    channel_column_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelColumnId') }})
    catalog_column_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('catalogColumnId') }})
    channel_category_path: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelCategoryPath') }})
    
