import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import launchprofilepersona_enum as shared_launchprofilepersona_enum


@dataclass_json
@dataclasses.dataclass
class NewLaunchProfileMember:
    persona: shared_launchprofilepersona_enum.LaunchProfilePersonaEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('persona') }})
    principal_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('principalId') }})
    
