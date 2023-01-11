import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import endpointresponse as shared_endpointresponse


@dataclass_json
@dataclasses.dataclass
class EndpointsResponse:
    r"""EndpointsResponse
    Provides information about all the endpoints that are associated with a user ID.
    """
    
    item: list[shared_endpointresponse.EndpointResponse] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Item') }})
    
