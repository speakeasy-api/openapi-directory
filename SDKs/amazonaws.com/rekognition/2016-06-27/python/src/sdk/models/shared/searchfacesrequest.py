import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SearchFacesRequest:
    collection_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CollectionId') }})
    face_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FaceId') }})
    face_match_threshold: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FaceMatchThreshold') }})
    max_faces: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxFaces') }})
    
