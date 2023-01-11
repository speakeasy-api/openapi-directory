import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import translation as shared_translation


@dataclass_json
@dataclasses.dataclass
class TranslateResponse:
    translations: Optional[list[shared_translation.Translation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('translations') }})
    
