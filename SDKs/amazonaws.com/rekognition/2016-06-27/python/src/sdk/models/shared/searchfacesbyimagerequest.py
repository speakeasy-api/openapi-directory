import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import image as shared_image
from ..shared import qualityfilter_enum as shared_qualityfilter_enum


@dataclass_json
@dataclasses.dataclass
class SearchFacesByImageRequest:
    collection_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CollectionId') }})
    image: shared_image.Image = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Image') }})
    face_match_threshold: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FaceMatchThreshold') }})
    max_faces: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxFaces') }})
    quality_filter: Optional[shared_qualityfilter_enum.QualityFilterEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QualityFilter') }})
    
