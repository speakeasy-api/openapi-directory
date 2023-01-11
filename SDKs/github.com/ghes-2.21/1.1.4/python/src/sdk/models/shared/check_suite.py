import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import simple_commit as shared_simple_commit
from ..shared import pull_request_minimal as shared_pull_request_minimal
from ..shared import minimal_repository as shared_minimal_repository

class CheckSuiteConclusionEnum(str, Enum):
    SUCCESS = "success"
    FAILURE = "failure"
    NEUTRAL = "neutral"
    CANCELLED = "cancelled"
    SKIPPED = "skipped"
    TIMED_OUT = "timed_out"
    ACTION_REQUIRED = "action_required"

class CheckSuiteStatusEnum(str, Enum):
    QUEUED = "queued"
    IN_PROGRESS = "in_progress"
    COMPLETED = "completed"


@dataclass_json
@dataclasses.dataclass
class CheckSuite:
    r"""CheckSuite
    A suite of checks performed on the code of a given code change
    """
    
    after: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('after') }})
    app: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('app') }})
    before: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('before') }})
    check_runs_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('check_runs_url') }})
    conclusion: CheckSuiteConclusionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('conclusion') }})
    created_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    head_branch: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('head_branch') }})
    head_commit: shared_simple_commit.SimpleCommit = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('head_commit') }})
    head_sha: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('head_sha') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    latest_check_runs_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('latest_check_runs_count') }})
    node_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    pull_requests: list[shared_pull_request_minimal.PullRequestMinimal] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pull_requests') }})
    repository: shared_minimal_repository.MinimalRepository = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repository') }})
    status: CheckSuiteStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    updated_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
