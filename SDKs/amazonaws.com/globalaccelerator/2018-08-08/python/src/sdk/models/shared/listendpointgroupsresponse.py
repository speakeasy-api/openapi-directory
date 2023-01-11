import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import endpointgroup as shared_endpointgroup


@dataclass_json
@dataclasses.dataclass
class ListEndpointGroupsResponse:
    endpoint_groups: Optional[list[shared_endpointgroup.EndpointGroup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointGroups') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
