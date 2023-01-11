import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class TranslateTextRequest:
    source_language_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceLanguageCode') }})
    target_language_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetLanguageCode') }})
    text: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Text') }})
    terminology_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TerminologyNames') }})
    
