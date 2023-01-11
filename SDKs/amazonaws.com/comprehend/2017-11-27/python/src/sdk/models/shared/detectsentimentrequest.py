import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import languagecode_enum as shared_languagecode_enum


@dataclass_json
@dataclasses.dataclass
class DetectSentimentRequest:
    language_code: shared_languagecode_enum.LanguageCodeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LanguageCode') }})
    text: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Text') }})
    
