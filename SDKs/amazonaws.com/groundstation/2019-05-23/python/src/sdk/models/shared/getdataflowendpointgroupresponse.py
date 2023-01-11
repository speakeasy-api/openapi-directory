import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import endpointdetails as shared_endpointdetails


@dataclass_json
@dataclasses.dataclass
class GetDataflowEndpointGroupResponse:
    r"""GetDataflowEndpointGroupResponse
    <p/>
    """
    
    dataflow_endpoint_group_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataflowEndpointGroupArn') }})
    dataflow_endpoint_group_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataflowEndpointGroupId') }})
    endpoints_details: Optional[list[shared_endpointdetails.EndpointDetails]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpointsDetails') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
