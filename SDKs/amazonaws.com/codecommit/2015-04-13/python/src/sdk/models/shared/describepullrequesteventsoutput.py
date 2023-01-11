import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pullrequestevent as shared_pullrequestevent


@dataclass_json
@dataclasses.dataclass
class DescribePullRequestEventsOutput:
    pull_request_events: list[shared_pullrequestevent.PullRequestEvent] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pullRequestEvents') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
