import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import comparefacesmatch as shared_comparefacesmatch
from ..shared import comparedsourceimageface as shared_comparedsourceimageface
from ..shared import orientationcorrection_enum as shared_orientationcorrection_enum
from ..shared import comparedface as shared_comparedface


@dataclass_json
@dataclasses.dataclass
class CompareFacesResponse:
    face_matches: Optional[list[shared_comparefacesmatch.CompareFacesMatch]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FaceMatches') }})
    source_image_face: Optional[shared_comparedsourceimageface.ComparedSourceImageFace] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceImageFace') }})
    source_image_orientation_correction: Optional[shared_orientationcorrection_enum.OrientationCorrectionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceImageOrientationCorrection') }})
    target_image_orientation_correction: Optional[shared_orientationcorrection_enum.OrientationCorrectionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetImageOrientationCorrection') }})
    unmatched_faces: Optional[list[shared_comparedface.ComparedFace]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnmatchedFaces') }})
    
