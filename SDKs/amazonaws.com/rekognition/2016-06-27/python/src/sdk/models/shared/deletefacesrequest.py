import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeleteFacesRequest:
    collection_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CollectionId') }})
    face_ids: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FaceIds') }})
    
