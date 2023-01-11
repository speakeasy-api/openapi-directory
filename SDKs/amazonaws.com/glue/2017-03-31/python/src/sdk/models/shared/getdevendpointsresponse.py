import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import devendpoint as shared_devendpoint


@dataclass_json
@dataclasses.dataclass
class GetDevEndpointsResponse:
    dev_endpoints: Optional[list[shared_devendpoint.DevEndpoint]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DevEndpoints') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
