import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import face as shared_face
from ..shared import facedetail as shared_facedetail


@dataclass_json
@dataclasses.dataclass
class FaceRecord:
    r"""FaceRecord
    Object containing both the face metadata (stored in the backend database), and facial attributes that are detected but aren't stored in the database.
    """
    
    face: Optional[shared_face.Face] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Face') }})
    face_detail: Optional[shared_facedetail.FaceDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FaceDetail') }})
    
