import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import videojobstatus_enum as shared_videojobstatus_enum
from ..shared import labeldetection as shared_labeldetection
from ..shared import videometadata as shared_videometadata


@dataclass_json
@dataclasses.dataclass
class GetLabelDetectionResponse:
    job_status: Optional[shared_videojobstatus_enum.VideoJobStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobStatus') }})
    label_model_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LabelModelVersion') }})
    labels: Optional[list[shared_labeldetection.LabelDetection]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Labels') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    status_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusMessage') }})
    video_metadata: Optional[shared_videometadata.VideoMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VideoMetadata') }})
    
