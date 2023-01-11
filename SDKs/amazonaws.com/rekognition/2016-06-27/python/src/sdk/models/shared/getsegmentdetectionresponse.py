import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import audiometadata as shared_audiometadata
from ..shared import videojobstatus_enum as shared_videojobstatus_enum
from ..shared import segmentdetection as shared_segmentdetection
from ..shared import segmenttypeinfo as shared_segmenttypeinfo
from ..shared import videometadata as shared_videometadata


@dataclass_json
@dataclasses.dataclass
class GetSegmentDetectionResponse:
    audio_metadata: Optional[list[shared_audiometadata.AudioMetadata]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AudioMetadata') }})
    job_status: Optional[shared_videojobstatus_enum.VideoJobStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobStatus') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    segments: Optional[list[shared_segmentdetection.SegmentDetection]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Segments') }})
    selected_segment_types: Optional[list[shared_segmenttypeinfo.SegmentTypeInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SelectedSegmentTypes') }})
    status_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusMessage') }})
    video_metadata: Optional[list[shared_videometadata.VideoMetadata]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VideoMetadata') }})
    
