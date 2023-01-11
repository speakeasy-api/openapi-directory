import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import instance as shared_instance


@dataclass_json
@dataclasses.dataclass
class GetInstanceResponse:
    instance: Optional[shared_instance.Instance] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Instance') }})
    
