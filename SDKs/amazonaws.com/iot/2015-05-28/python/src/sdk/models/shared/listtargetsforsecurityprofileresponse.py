import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import securityprofiletarget as shared_securityprofiletarget


@dataclass_json
@dataclasses.dataclass
class ListTargetsForSecurityProfileResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    security_profile_targets: Optional[list[shared_securityprofiletarget.SecurityProfileTarget]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityProfileTargets') }})
    
