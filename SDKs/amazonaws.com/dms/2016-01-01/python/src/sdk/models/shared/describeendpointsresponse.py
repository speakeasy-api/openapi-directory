import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import endpoint as shared_endpoint


@dataclass_json
@dataclasses.dataclass
class DescribeEndpointsResponse:
    r"""DescribeEndpointsResponse
    <p/>
    """
    
    endpoints: Optional[list[shared_endpoint.Endpoint]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Endpoints') }})
    marker: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Marker') }})
    
