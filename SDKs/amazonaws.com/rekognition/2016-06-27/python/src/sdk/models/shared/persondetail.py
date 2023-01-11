import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import boundingbox as shared_boundingbox
from ..shared import facedetail as shared_facedetail


@dataclass_json
@dataclasses.dataclass
class PersonDetail:
    r"""PersonDetail
    Details about a person detected in a video analysis request.
    """
    
    bounding_box: Optional[shared_boundingbox.BoundingBox] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BoundingBox') }})
    face: Optional[shared_facedetail.FaceDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Face') }})
    index: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Index') }})
    
