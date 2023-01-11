import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import securityprofiletargetmapping as shared_securityprofiletargetmapping


@dataclass_json
@dataclasses.dataclass
class ListSecurityProfilesForTargetResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    security_profile_target_mappings: Optional[list[shared_securityprofiletargetmapping.SecurityProfileTargetMapping]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityProfileTargetMappings') }})
    
