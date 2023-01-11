import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import facematch as shared_facematch
from ..shared import boundingbox as shared_boundingbox


@dataclass_json
@dataclasses.dataclass
class SearchFacesByImageResponse:
    face_matches: Optional[list[shared_facematch.FaceMatch]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FaceMatches') }})
    face_model_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FaceModelVersion') }})
    searched_face_bounding_box: Optional[shared_boundingbox.BoundingBox] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SearchedFaceBoundingBox') }})
    searched_face_confidence: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SearchedFaceConfidence') }})
    
