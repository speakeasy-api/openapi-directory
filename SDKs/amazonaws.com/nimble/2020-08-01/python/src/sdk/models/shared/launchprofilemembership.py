import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import launchprofilepersona_enum as shared_launchprofilepersona_enum


@dataclass_json
@dataclasses.dataclass
class LaunchProfileMembership:
    identity_store_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identityStoreId') }})
    persona: Optional[shared_launchprofilepersona_enum.LaunchProfilePersonaEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('persona') }})
    principal_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('principalId') }})
    
