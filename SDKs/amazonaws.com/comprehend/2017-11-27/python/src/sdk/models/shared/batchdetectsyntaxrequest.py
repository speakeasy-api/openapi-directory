import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import syntaxlanguagecode_enum as shared_syntaxlanguagecode_enum


@dataclass_json
@dataclasses.dataclass
class BatchDetectSyntaxRequest:
    language_code: shared_syntaxlanguagecode_enum.SyntaxLanguageCodeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LanguageCode') }})
    text_list: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TextList') }})
    
