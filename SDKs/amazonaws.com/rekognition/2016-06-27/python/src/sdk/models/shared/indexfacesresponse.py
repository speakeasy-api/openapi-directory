import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import facerecord as shared_facerecord
from ..shared import orientationcorrection_enum as shared_orientationcorrection_enum
from ..shared import unindexedface as shared_unindexedface


@dataclass_json
@dataclasses.dataclass
class IndexFacesResponse:
    face_model_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FaceModelVersion') }})
    face_records: Optional[list[shared_facerecord.FaceRecord]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FaceRecords') }})
    orientation_correction: Optional[shared_orientationcorrection_enum.OrientationCorrectionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrientationCorrection') }})
    unindexed_faces: Optional[list[shared_unindexedface.UnindexedFace]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnindexedFaces') }})
    
