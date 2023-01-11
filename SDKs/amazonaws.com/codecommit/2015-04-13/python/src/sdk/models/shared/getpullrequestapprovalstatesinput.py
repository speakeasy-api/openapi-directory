import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetPullRequestApprovalStatesInput:
    pull_request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pullRequestId') }})
    revision_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionId') }})
    
