import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import serviceresourcecost as shared_serviceresourcecost
from ..shared import costestimationresourcecollectionfilter as shared_costestimationresourcecollectionfilter
from ..shared import costestimationstatus_enum as shared_costestimationstatus_enum
from ..shared import costestimationtimerange as shared_costestimationtimerange


@dataclass_json
@dataclasses.dataclass
class GetCostEstimationResponse:
    costs: Optional[list[shared_serviceresourcecost.ServiceResourceCost]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Costs') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    resource_collection: Optional[shared_costestimationresourcecollectionfilter.CostEstimationResourceCollectionFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceCollection') }})
    status: Optional[shared_costestimationstatus_enum.CostEstimationStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    time_range: Optional[shared_costestimationtimerange.CostEstimationTimeRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeRange') }})
    total_cost: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalCost') }})
    
