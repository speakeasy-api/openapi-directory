import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourceendpointlistitem as shared_resourceendpointlistitem


@dataclass_json
@dataclasses.dataclass
class GetSignalingChannelEndpointOutput:
    resource_endpoint_list: Optional[list[shared_resourceendpointlistitem.ResourceEndpointListItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceEndpointList') }})
    
