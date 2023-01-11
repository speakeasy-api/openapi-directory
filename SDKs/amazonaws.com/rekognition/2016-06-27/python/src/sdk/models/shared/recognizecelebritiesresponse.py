import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import celebrity as shared_celebrity
from ..shared import orientationcorrection_enum as shared_orientationcorrection_enum
from ..shared import comparedface as shared_comparedface


@dataclass_json
@dataclasses.dataclass
class RecognizeCelebritiesResponse:
    celebrity_faces: Optional[list[shared_celebrity.Celebrity]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CelebrityFaces') }})
    orientation_correction: Optional[shared_orientationcorrection_enum.OrientationCorrectionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrientationCorrection') }})
    unrecognized_faces: Optional[list[shared_comparedface.ComparedFace]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnrecognizedFaces') }})
    
