import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import languagecode_enum as shared_languagecode_enum


@dataclass_json
@dataclasses.dataclass
class UpdateVocabularyRequest:
    language_code: shared_languagecode_enum.LanguageCodeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LanguageCode') }})
    vocabulary_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VocabularyName') }})
    phrases: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Phrases') }})
    vocabulary_file_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VocabularyFileUri') }})
    
