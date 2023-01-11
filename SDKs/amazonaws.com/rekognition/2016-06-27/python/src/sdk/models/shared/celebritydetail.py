import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import boundingbox as shared_boundingbox
from ..shared import facedetail as shared_facedetail


@dataclass_json
@dataclasses.dataclass
class CelebrityDetail:
    r"""CelebrityDetail
    Information about a recognized celebrity.
    """
    
    bounding_box: Optional[shared_boundingbox.BoundingBox] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BoundingBox') }})
    confidence: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Confidence') }})
    face: Optional[shared_facedetail.FaceDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Face') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    urls: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Urls') }})
    
