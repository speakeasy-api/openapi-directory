import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pullrequest as shared_pullrequest


@dataclass_json
@dataclasses.dataclass
class CreatePullRequestOutput:
    pull_request: shared_pullrequest.PullRequest = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pullRequest') }})
    
