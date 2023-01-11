import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import simple_user as shared_simple_user

class AutoMergeMergeMethodEnum(str, Enum):
    MERGE = "merge"
    SQUASH = "squash"
    REBASE = "rebase"


@dataclass_json
@dataclasses.dataclass
class AutoMerge:
    r"""AutoMerge
    The status of auto merging a pull request.
    """
    
    commit_message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('commit_message') }})
    commit_title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('commit_title') }})
    enabled_by: shared_simple_user.SimpleUser = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled_by') }})
    merge_method: AutoMergeMergeMethodEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('merge_method') }})
    
