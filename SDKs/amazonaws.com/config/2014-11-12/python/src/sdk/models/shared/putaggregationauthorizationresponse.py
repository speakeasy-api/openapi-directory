import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import aggregationauthorization as shared_aggregationauthorization


@dataclass_json
@dataclasses.dataclass
class PutAggregationAuthorizationResponse:
    aggregation_authorization: Optional[shared_aggregationauthorization.AggregationAuthorization] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AggregationAuthorization') }})
    
