import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import videojobstatus_enum as shared_videojobstatus_enum
from ..shared import personmatch as shared_personmatch
from ..shared import videometadata as shared_videometadata


@dataclass_json
@dataclasses.dataclass
class GetFaceSearchResponse:
    job_status: Optional[shared_videojobstatus_enum.VideoJobStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobStatus') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    persons: Optional[list[shared_personmatch.PersonMatch]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Persons') }})
    status_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusMessage') }})
    video_metadata: Optional[shared_videometadata.VideoMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VideoMetadata') }})
    
