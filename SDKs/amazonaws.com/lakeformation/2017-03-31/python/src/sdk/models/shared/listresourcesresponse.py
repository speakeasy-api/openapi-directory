import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourceinfo as shared_resourceinfo


@dataclass_json
@dataclasses.dataclass
class ListResourcesResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    resource_info_list: Optional[list[shared_resourceinfo.ResourceInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceInfoList') }})
    
