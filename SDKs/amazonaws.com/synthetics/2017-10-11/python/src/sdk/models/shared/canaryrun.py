import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import canaryrunstatus as shared_canaryrunstatus
from ..shared import canaryruntimeline as shared_canaryruntimeline


@dataclass_json
@dataclasses.dataclass
class CanaryRun:
    r"""CanaryRun
    This structure contains the details about one run of one canary.
    """
    
    artifact_s3_location: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ArtifactS3Location') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    status: Optional[shared_canaryrunstatus.CanaryRunStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    timeline: Optional[shared_canaryruntimeline.CanaryRunTimeline] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timeline') }})
    
