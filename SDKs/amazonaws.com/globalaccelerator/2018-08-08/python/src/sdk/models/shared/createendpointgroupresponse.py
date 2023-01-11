import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import endpointgroup as shared_endpointgroup


@dataclass_json
@dataclasses.dataclass
class CreateEndpointGroupResponse:
    endpoint_group: Optional[shared_endpointgroup.EndpointGroup] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointGroup') }})
    
