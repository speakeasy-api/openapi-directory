import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pullrequest as shared_pullrequest


@dataclass_json
@dataclasses.dataclass
class MergePullRequestByThreeWayOutput:
    pull_request: Optional[shared_pullrequest.PullRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pullRequest') }})
    
