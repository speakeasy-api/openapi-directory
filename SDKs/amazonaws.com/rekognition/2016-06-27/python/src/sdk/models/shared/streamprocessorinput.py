import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import kinesisvideostream as shared_kinesisvideostream


@dataclass_json
@dataclasses.dataclass
class StreamProcessorInput:
    r"""StreamProcessorInput
    Information about the source streaming video. 
    """
    
    kinesis_video_stream: Optional[shared_kinesisvideostream.KinesisVideoStream] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KinesisVideoStream') }})
    
