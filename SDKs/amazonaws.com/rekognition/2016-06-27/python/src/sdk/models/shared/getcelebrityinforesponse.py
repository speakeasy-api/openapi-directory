import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import knowngender as shared_knowngender


@dataclass_json
@dataclasses.dataclass
class GetCelebrityInfoResponse:
    known_gender: Optional[shared_knowngender.KnownGender] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KnownGender') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    urls: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Urls') }})
    
