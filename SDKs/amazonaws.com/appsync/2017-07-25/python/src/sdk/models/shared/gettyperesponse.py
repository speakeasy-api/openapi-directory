import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import type as shared_type


@dataclass_json
@dataclasses.dataclass
class GetTypeResponse:
    type: Optional[shared_type.Type] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
