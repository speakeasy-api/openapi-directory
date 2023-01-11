import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class UpdateVocabularyFilterRequest:
    vocabulary_filter_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VocabularyFilterName') }})
    vocabulary_filter_file_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VocabularyFilterFileUri') }})
    words: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Words') }})
    
