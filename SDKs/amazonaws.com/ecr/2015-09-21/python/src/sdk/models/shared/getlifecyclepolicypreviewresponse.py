import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lifecyclepolicypreviewresult as shared_lifecyclepolicypreviewresult
from ..shared import lifecyclepolicypreviewstatus_enum as shared_lifecyclepolicypreviewstatus_enum
from ..shared import lifecyclepolicypreviewsummary as shared_lifecyclepolicypreviewsummary


@dataclass_json
@dataclasses.dataclass
class GetLifecyclePolicyPreviewResponse:
    lifecycle_policy_text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifecyclePolicyText') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    preview_results: Optional[list[shared_lifecyclepolicypreviewresult.LifecyclePolicyPreviewResult]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previewResults') }})
    registry_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registryId') }})
    repository_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryName') }})
    status: Optional[shared_lifecyclepolicypreviewstatus_enum.LifecyclePolicyPreviewStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    summary: Optional[shared_lifecyclepolicypreviewsummary.LifecyclePolicyPreviewSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('summary') }})
    
