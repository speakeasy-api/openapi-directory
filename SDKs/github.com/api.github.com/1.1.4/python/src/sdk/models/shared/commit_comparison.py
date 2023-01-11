import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import commit as shared_commit
from ..shared import diff_entry as shared_diff_entry

class CommitComparisonStatusEnum(str, Enum):
    DIVERGED = "diverged"
    AHEAD = "ahead"
    BEHIND = "behind"
    IDENTICAL = "identical"


@dataclass_json
@dataclasses.dataclass
class CommitComparison:
    r"""CommitComparison
    Commit Comparison
    """
    
    ahead_by: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ahead_by') }})
    base_commit: shared_commit.Commit = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('base_commit') }})
    behind_by: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('behind_by') }})
    commits: list[shared_commit.Commit] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('commits') }})
    diff_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('diff_url') }})
    files: list[shared_diff_entry.DiffEntry] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('files') }})
    html_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    merge_base_commit: shared_commit.Commit = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('merge_base_commit') }})
    patch_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('patch_url') }})
    permalink_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('permalink_url') }})
    status: CommitComparisonStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    total_commits: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_commits') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
