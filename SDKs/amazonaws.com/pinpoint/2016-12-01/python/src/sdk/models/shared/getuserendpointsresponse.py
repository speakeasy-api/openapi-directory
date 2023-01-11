import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import endpointsresponse as shared_endpointsresponse


@dataclass_json
@dataclasses.dataclass
class GetUserEndpointsResponse:
    endpoints_response: shared_endpointsresponse.EndpointsResponse = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointsResponse') }})
    
