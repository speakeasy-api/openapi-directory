import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import committeesearch as shared_committeesearch


@dataclass_json
@dataclasses.dataclass
class CommitteeSearchList:
    results: Optional[list[shared_committeesearch.CommitteeSearch]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    
