import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import shotsegment as shared_shotsegment
from ..shared import technicalcuesegment as shared_technicalcuesegment
from ..shared import segmenttype_enum as shared_segmenttype_enum


@dataclass_json
@dataclasses.dataclass
class SegmentDetection:
    r"""SegmentDetection
    A technical cue or shot detection segment detected in a video. An array of <code>SegmentDetection</code> objects containing all segments detected in a stored video is returned by <a>GetSegmentDetection</a>. 
    """
    
    duration_frames: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DurationFrames') }})
    duration_millis: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DurationMillis') }})
    duration_smpte: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DurationSMPTE') }})
    end_frame_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndFrameNumber') }})
    end_timecode_smpte: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndTimecodeSMPTE') }})
    end_timestamp_millis: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndTimestampMillis') }})
    shot_segment: Optional[shared_shotsegment.ShotSegment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShotSegment') }})
    start_frame_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartFrameNumber') }})
    start_timecode_smpte: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartTimecodeSMPTE') }})
    start_timestamp_millis: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartTimestampMillis') }})
    technical_cue_segment: Optional[shared_technicalcuesegment.TechnicalCueSegment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TechnicalCueSegment') }})
    type: Optional[shared_segmenttype_enum.SegmentTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
