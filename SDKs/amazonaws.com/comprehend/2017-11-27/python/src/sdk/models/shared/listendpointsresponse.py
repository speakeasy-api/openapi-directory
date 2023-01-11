import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import endpointproperties as shared_endpointproperties


@dataclass_json
@dataclasses.dataclass
class ListEndpointsResponse:
    endpoint_properties_list: Optional[list[shared_endpointproperties.EndpointProperties]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointPropertiesList') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
