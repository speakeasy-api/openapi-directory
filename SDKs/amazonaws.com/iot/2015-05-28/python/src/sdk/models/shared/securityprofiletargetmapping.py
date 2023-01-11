import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import securityprofileidentifier as shared_securityprofileidentifier
from ..shared import securityprofiletarget as shared_securityprofiletarget


@dataclass_json
@dataclasses.dataclass
class SecurityProfileTargetMapping:
    r"""SecurityProfileTargetMapping
    Information about a security profile and the target associated with it.
    """
    
    security_profile_identifier: Optional[shared_securityprofileidentifier.SecurityProfileIdentifier] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityProfileIdentifier') }})
    target: Optional[shared_securityprofiletarget.SecurityProfileTarget] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    
