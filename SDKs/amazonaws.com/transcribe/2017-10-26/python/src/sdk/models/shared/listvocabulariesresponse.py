import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import vocabularystate_enum as shared_vocabularystate_enum
from ..shared import vocabularyinfo as shared_vocabularyinfo


@dataclass_json
@dataclasses.dataclass
class ListVocabulariesResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    status: Optional[shared_vocabularystate_enum.VocabularyStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    vocabularies: Optional[list[shared_vocabularyinfo.VocabularyInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Vocabularies') }})
    
