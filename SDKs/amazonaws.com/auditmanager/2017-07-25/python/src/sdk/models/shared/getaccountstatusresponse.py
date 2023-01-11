import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accountstatus_enum as shared_accountstatus_enum


@dataclass_json
@dataclasses.dataclass
class GetAccountStatusResponse:
    status: Optional[shared_accountstatus_enum.AccountStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
