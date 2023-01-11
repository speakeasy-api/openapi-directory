import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import detectedproperties as shared_detectedproperties
from ..shared import encryption as shared_encryption
from ..shared import inputcaptions as shared_inputcaptions
from ..shared import timespan as shared_timespan


@dataclass_json
@dataclasses.dataclass
class JobInput:
    r"""JobInput
    Information about the file that you're transcoding.
    """
    
    aspect_ratio: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AspectRatio') }})
    container: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Container') }})
    detected_properties: Optional[shared_detectedproperties.DetectedProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DetectedProperties') }})
    encryption: Optional[shared_encryption.Encryption] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Encryption') }})
    frame_rate: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FrameRate') }})
    input_captions: Optional[shared_inputcaptions.InputCaptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputCaptions') }})
    interlaced: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Interlaced') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    resolution: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Resolution') }})
    time_span: Optional[shared_timespan.TimeSpan] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeSpan') }})
    
