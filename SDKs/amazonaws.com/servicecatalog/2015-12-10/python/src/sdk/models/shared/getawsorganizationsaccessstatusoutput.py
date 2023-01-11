import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accessstatus_enum as shared_accessstatus_enum


@dataclass_json
@dataclasses.dataclass
class GetAwsOrganizationsAccessStatusOutput:
    access_status: Optional[shared_accessstatus_enum.AccessStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessStatus') }})
    
