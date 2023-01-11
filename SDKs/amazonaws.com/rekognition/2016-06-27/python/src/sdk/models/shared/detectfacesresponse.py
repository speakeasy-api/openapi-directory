import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import facedetail as shared_facedetail
from ..shared import orientationcorrection_enum as shared_orientationcorrection_enum


@dataclass_json
@dataclasses.dataclass
class DetectFacesResponse:
    face_details: Optional[list[shared_facedetail.FaceDetail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FaceDetails') }})
    orientation_correction: Optional[shared_orientationcorrection_enum.OrientationCorrectionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrientationCorrection') }})
    
