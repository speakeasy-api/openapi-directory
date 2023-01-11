import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import vocabularyfilterinfo as shared_vocabularyfilterinfo


@dataclass_json
@dataclasses.dataclass
class ListVocabularyFiltersResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    vocabulary_filters: Optional[list[shared_vocabularyfilterinfo.VocabularyFilterInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VocabularyFilters') }})
    
