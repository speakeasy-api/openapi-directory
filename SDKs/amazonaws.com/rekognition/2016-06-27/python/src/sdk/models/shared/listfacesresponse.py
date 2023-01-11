import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import face as shared_face


@dataclass_json
@dataclasses.dataclass
class ListFacesResponse:
    face_model_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FaceModelVersion') }})
    faces: Optional[list[shared_face.Face]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Faces') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
