import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import celebrityrecognition as shared_celebrityrecognition
from ..shared import videojobstatus_enum as shared_videojobstatus_enum
from ..shared import videometadata as shared_videometadata


@dataclass_json
@dataclasses.dataclass
class GetCelebrityRecognitionResponse:
    celebrities: Optional[list[shared_celebrityrecognition.CelebrityRecognition]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Celebrities') }})
    job_status: Optional[shared_videojobstatus_enum.VideoJobStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobStatus') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    status_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusMessage') }})
    video_metadata: Optional[shared_videometadata.VideoMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VideoMetadata') }})
    
