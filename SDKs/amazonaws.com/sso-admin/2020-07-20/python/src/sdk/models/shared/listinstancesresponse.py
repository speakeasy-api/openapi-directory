import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import instancemetadata as shared_instancemetadata


@dataclass_json
@dataclasses.dataclass
class ListInstancesResponse:
    instances: Optional[list[shared_instancemetadata.InstanceMetadata]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Instances') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
