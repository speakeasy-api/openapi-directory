import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CustomerServiceMetricsFilterCriteria:
    r"""CustomerServiceMetricsFilterCriteria
    A complex data type that filters data for report creation. See CustomerServiceMetricsFilterCriteria for fields and descriptions.
    """
    
    customer_service_metric_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerServiceMetricType') }})
    evaluation_marketplace_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluationMarketplaceId') }})
    listing_categories: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listingCategories') }})
    shipping_regions: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingRegions') }})
    
