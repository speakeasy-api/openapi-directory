import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import comparedface as shared_comparedface
from ..shared import knowngender as shared_knowngender


@dataclass_json
@dataclasses.dataclass
class Celebrity:
    r"""Celebrity
    Provides information about a celebrity recognized by the <a>RecognizeCelebrities</a> operation.
    """
    
    face: Optional[shared_comparedface.ComparedFace] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Face') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    known_gender: Optional[shared_knowngender.KnownGender] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KnownGender') }})
    match_confidence: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MatchConfidence') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    urls: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Urls') }})
    
