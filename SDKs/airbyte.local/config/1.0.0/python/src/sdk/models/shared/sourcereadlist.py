import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sourceread as shared_sourceread


@dataclass_json
@dataclasses.dataclass
class SourceReadList:
    sources: list[shared_sourceread.SourceRead] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sources') }})
    
