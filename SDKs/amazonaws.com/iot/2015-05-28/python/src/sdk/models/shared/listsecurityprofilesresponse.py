import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import securityprofileidentifier as shared_securityprofileidentifier


@dataclass_json
@dataclasses.dataclass
class ListSecurityProfilesResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    security_profile_identifiers: Optional[list[shared_securityprofileidentifier.SecurityProfileIdentifier]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityProfileIdentifiers') }})
    
