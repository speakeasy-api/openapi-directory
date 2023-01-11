import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ChannelCatalogProductsCounters:
    r"""ChannelCatalogProductsCounters
    The channel catalog products counters. For each counter you will have a count.
    """
    
    disabled_product_count_excluding_uncategorized: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabledProductCountExcludingUncategorized') }})
    disabled_product_count_including_uncategorized: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabledProductCountIncludingUncategorized') }})
    excluded_product_count_excluding_uncategorized_and_disabled: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludedProductCountExcludingUncategorizedAndDisabled') }})
    excluded_product_count_including_uncategorized_and_disabled: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludedProductCountIncludingUncategorizedAndDisabled') }})
    existing_product_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('existingProductCount') }})
    uncategorized_product_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uncategorizedProductCount') }})
    
