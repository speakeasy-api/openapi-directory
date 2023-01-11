import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import check_run as shared_check_run


@dataclasses.dataclass
class ChecksCreatePathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ChecksCreateRequestBodyActions:
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    identifier: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('identifier') }})
    label: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    
class ChecksCreateRequestBodyConclusionEnum(str, Enum):
    ACTION_REQUIRED = "action_required"
    CANCELLED = "cancelled"
    FAILURE = "failure"
    NEUTRAL = "neutral"
    SUCCESS = "success"
    SKIPPED = "skipped"
    STALE = "stale"
    TIMED_OUT = "timed_out"

class ChecksCreateRequestBodyOutputAnnotationsAnnotationLevelEnum(str, Enum):
    NOTICE = "notice"
    WARNING = "warning"
    FAILURE = "failure"


@dataclass_json
@dataclasses.dataclass
class ChecksCreateRequestBodyOutputAnnotations:
    annotation_level: ChecksCreateRequestBodyOutputAnnotationsAnnotationLevelEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotation_level') }})
    end_line: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_line') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    path: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    start_line: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_line') }})
    end_column: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_column') }})
    raw_details: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('raw_details') }})
    start_column: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_column') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass_json
@dataclasses.dataclass
class ChecksCreateRequestBodyOutputImages:
    alt: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('alt') }})
    image_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('image_url') }})
    caption: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caption') }})
    

@dataclass_json
@dataclasses.dataclass
class ChecksCreateRequestBodyOutput:
    r"""ChecksCreateRequestBodyOutput
    Check runs can accept a variety of data in the `output` object, including a `title` and `summary` and can optionally provide descriptive details about the run. See the [`output` object](https://docs.github.com/rest/reference/checks#output-object) description.
    """
    
    summary: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('summary') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    annotations: Optional[list[ChecksCreateRequestBodyOutputAnnotations]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotations') }})
    images: Optional[list[ChecksCreateRequestBodyOutputImages]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('images') }})
    text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    
class ChecksCreateRequestBodyStatusEnum(str, Enum):
    QUEUED = "queued"
    IN_PROGRESS = "in_progress"
    COMPLETED = "completed"


@dataclass_json
@dataclasses.dataclass
class ChecksCreateRequestBody:
    head_sha: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('head_sha') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    actions: Optional[list[ChecksCreateRequestBodyActions]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    completed_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completed_at') }})
    conclusion: Optional[ChecksCreateRequestBodyConclusionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conclusion') }})
    details_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details_url') }})
    external_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_id') }})
    output: Optional[ChecksCreateRequestBodyOutput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('output') }})
    started_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('started_at') }})
    status: Optional[ChecksCreateRequestBodyStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclasses.dataclass
class ChecksCreateRequest:
    path_params: ChecksCreatePathParams = dataclasses.field()
    request: Optional[ChecksCreateRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ChecksCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    check_run: Optional[shared_check_run.CheckRun] = dataclasses.field(default=None)
    
