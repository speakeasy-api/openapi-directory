import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PullRequestMergeResult:
    r"""PullRequestMergeResult
    Pull Request Merge Result
    """
    
    merged: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('merged') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    sha: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha') }})
    
