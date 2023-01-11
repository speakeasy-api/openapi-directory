import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import productviewaggregationvalue as shared_productviewaggregationvalue
from ..shared import productviewsummary as shared_productviewsummary


@dataclass_json
@dataclasses.dataclass
class SearchProductsOutput:
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextPageToken') }})
    product_view_aggregations: Optional[dict[str, list[shared_productviewaggregationvalue.ProductViewAggregationValue]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductViewAggregations') }})
    product_view_summaries: Optional[list[shared_productviewsummary.ProductViewSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductViewSummaries') }})
    
