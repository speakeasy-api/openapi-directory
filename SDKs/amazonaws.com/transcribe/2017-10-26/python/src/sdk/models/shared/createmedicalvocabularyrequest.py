import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import languagecode_enum as shared_languagecode_enum
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class CreateMedicalVocabularyRequest:
    language_code: shared_languagecode_enum.LanguageCodeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LanguageCode') }})
    vocabulary_file_uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VocabularyFileUri') }})
    vocabulary_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VocabularyName') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
