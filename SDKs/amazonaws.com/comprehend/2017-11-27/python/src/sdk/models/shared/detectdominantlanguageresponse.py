import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dominantlanguage as shared_dominantlanguage


@dataclass_json
@dataclasses.dataclass
class DetectDominantLanguageResponse:
    languages: Optional[list[shared_dominantlanguage.DominantLanguage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Languages') }})
    
