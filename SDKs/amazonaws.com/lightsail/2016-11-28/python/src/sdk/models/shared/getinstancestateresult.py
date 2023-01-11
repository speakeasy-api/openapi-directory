import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import instancestate as shared_instancestate


@dataclass_json
@dataclasses.dataclass
class GetInstanceStateResult:
    state: Optional[shared_instancestate.InstanceState] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
