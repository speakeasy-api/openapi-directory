import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import analyticsproductcolumnfilter as shared_analyticsproductcolumnfilter


@dataclass_json
@dataclasses.dataclass
class AnalyticsProductColumnFilters:
    additional_analytics_product_column_filters: Optional[dict[str, shared_analyticsproductcolumnfilter.AnalyticsProductColumnFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalAnalyticsProductColumnFilters') }})
    sku: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sku') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
