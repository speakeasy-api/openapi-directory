import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gatewaysummary as shared_gatewaysummary


@dataclass_json
@dataclasses.dataclass
class ListGatewaysResponse:
    gateway_summaries: list[shared_gatewaysummary.GatewaySummary] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gatewaySummaries') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
