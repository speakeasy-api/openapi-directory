import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dataflowendpointlistitem as shared_dataflowendpointlistitem


@dataclass_json
@dataclasses.dataclass
class ListDataflowEndpointGroupsResponse:
    r"""ListDataflowEndpointGroupsResponse
    <p/>
    """
    
    dataflow_endpoint_group_list: Optional[list[shared_dataflowendpointlistitem.DataflowEndpointListItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataflowEndpointGroupList') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
