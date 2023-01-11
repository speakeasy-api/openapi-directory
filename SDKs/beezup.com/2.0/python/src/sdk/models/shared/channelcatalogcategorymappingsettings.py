import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ChannelCatalogCategoryMappingSettings:
    category_mapping_disabled_by_merchant: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryMappingDisabledByMerchant') }})
    
