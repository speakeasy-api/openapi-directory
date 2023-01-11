import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import changetokenstatus_enum as shared_changetokenstatus_enum


@dataclass_json
@dataclasses.dataclass
class GetChangeTokenStatusResponse:
    change_token_status: Optional[shared_changetokenstatus_enum.ChangeTokenStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeTokenStatus') }})
    
