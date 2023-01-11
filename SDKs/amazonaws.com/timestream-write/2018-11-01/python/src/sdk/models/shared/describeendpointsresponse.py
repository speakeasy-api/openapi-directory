import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import endpoint as shared_endpoint


@dataclass_json
@dataclasses.dataclass
class DescribeEndpointsResponse:
    endpoints: list[shared_endpoint.Endpoint] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Endpoints') }})
    
