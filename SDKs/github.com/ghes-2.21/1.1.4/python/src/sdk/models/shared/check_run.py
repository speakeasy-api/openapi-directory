import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deployment_simple as shared_deployment_simple


@dataclass_json
@dataclasses.dataclass
class CheckRunCheckSuite:
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
class CheckRunConclusionEnum(str, Enum):
    SUCCESS = "success"
    FAILURE = "failure"
    NEUTRAL = "neutral"
    CANCELLED = "cancelled"
    SKIPPED = "skipped"
    TIMED_OUT = "timed_out"
    ACTION_REQUIRED = "action_required"


@dataclass_json
@dataclasses.dataclass
class CheckRunOutput:
    annotations_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotations_count') }})
    annotations_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotations_url') }})
    summary: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('summary') }})
    text: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
class CheckRunStatusEnum(str, Enum):
    QUEUED = "queued"
    IN_PROGRESS = "in_progress"
    COMPLETED = "completed"


@dataclass_json
@dataclasses.dataclass
class CheckRun:
    r"""CheckRun
    A check performed on the code of a given code change
    """
    
    app: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('app') }})
    check_suite: CheckRunCheckSuite = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('check_suite') }})
    completed_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('completed_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    conclusion: CheckRunConclusionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('conclusion') }})
    details_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('details_url') }})
    external_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_id') }})
    head_sha: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('head_sha') }})
    html_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    node_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    output: CheckRunOutput = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('output') }})
    pull_requests: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pull_requests') }})
    started_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('started_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: CheckRunStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    deployment: Optional[shared_deployment_simple.DeploymentSimple] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deployment') }})
    
