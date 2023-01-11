import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import facedetail as shared_facedetail


@dataclass_json
@dataclasses.dataclass
class FaceDetection:
    r"""FaceDetection
    Information about a face detected in a video analysis request and the time the face was detected in the video. 
    """
    
    face: Optional[shared_facedetail.FaceDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Face') }})
    timestamp: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timestamp') }})
    
