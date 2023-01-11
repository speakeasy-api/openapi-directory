import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mergeoptiontypeenum_enum as shared_mergeoptiontypeenum_enum


@dataclass_json
@dataclasses.dataclass
class GetMergeOptionsOutput:
    base_commit_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseCommitId') }})
    destination_commit_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationCommitId') }})
    merge_options: list[shared_mergeoptiontypeenum_enum.MergeOptionTypeEnumEnum] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mergeOptions') }})
    source_commit_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceCommitId') }})
    
