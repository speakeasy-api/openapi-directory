import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reachabilitystatus_enum as shared_reachabilitystatus_enum


@dataclass_json
@dataclasses.dataclass
class GetContactReachabilityStatusResponse:
    domain_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainName') }})
    status: Optional[shared_reachabilitystatus_enum.ReachabilityStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
