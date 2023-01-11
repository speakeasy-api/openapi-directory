import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import nodegroup as shared_nodegroup


@dataclass_json
@dataclasses.dataclass
class DeleteNodegroupResponse:
    nodegroup: Optional[shared_nodegroup.Nodegroup] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodegroup') }})
    
