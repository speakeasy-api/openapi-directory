import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import beezup_common_additionalproductfiltersvalue as shared_beezup_common_additionalproductfiltersvalue


@dataclass_json
@dataclasses.dataclass
class ChannelCatalogProductFilters:
    additional_product_filters: Optional[dict[str, shared_beezup_common_additionalproductfiltersvalue.BeezUpCommonAdditionalProductFiltersValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalProductFilters') }})
    catalog_eans: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('catalogEans') }})
    catalog_mpns: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('catalogMpns') }})
    catalog_skus: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('catalogSkus') }})
    channel_eans: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelEans') }})
    channel_mpns: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelMpns') }})
    channel_skus: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelSkus') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
