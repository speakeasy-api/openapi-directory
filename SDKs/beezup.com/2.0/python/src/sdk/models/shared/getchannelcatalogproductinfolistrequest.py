import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import beezup_common_catalogcategoryfilter as shared_beezup_common_catalogcategoryfilter
from ..shared import beezup_common_channelcategoryfilter as shared_beezup_common_channelcategoryfilter
from ..shared import productsetvisibilitycriteria as shared_productsetvisibilitycriteria
from ..shared import channelcatalogproductfilters as shared_channelcatalogproductfilters


@dataclass_json
@dataclasses.dataclass
class GetChannelCatalogProductInfoListRequest:
    criteria: shared_productsetvisibilitycriteria.ProductSetVisibilityCriteria = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('criteria') }})
    page_number: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageNumber') }})
    page_size: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageSize') }})
    catalog_category_filter: Optional[shared_beezup_common_catalogcategoryfilter.BeezUpCommonCatalogCategoryFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('catalogCategoryFilter') }})
    channel_category_filter: Optional[shared_beezup_common_channelcategoryfilter.BeezUpCommonChannelCategoryFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelCategoryFilter') }})
    overridden: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overridden') }})
    product_filters: Optional[shared_channelcatalogproductfilters.ChannelCatalogProductFilters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productFilters') }})
    
