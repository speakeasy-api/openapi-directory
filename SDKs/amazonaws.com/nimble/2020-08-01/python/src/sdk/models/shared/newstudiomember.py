import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import studiopersona_enum as shared_studiopersona_enum


@dataclass_json
@dataclasses.dataclass
class NewStudioMember:
    persona: shared_studiopersona_enum.StudioPersonaEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('persona') }})
    principal_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('principalId') }})
    
