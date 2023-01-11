import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import appliedterminology as shared_appliedterminology


@dataclass_json
@dataclasses.dataclass
class TranslateTextResponse:
    source_language_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceLanguageCode') }})
    target_language_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetLanguageCode') }})
    translated_text: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TranslatedText') }})
    applied_terminologies: Optional[list[shared_appliedterminology.AppliedTerminology]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AppliedTerminologies') }})
    
