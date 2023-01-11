import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import facedetail as shared_facedetail
from ..shared import reason_enum as shared_reason_enum


@dataclass_json
@dataclasses.dataclass
class UnindexedFace:
    r"""UnindexedFace
    A face that <a>IndexFaces</a> detected, but didn't index. Use the <code>Reasons</code> response attribute to determine why a face wasn't indexed.
    """
    
    face_detail: Optional[shared_facedetail.FaceDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FaceDetail') }})
    reasons: Optional[list[shared_reason_enum.ReasonEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Reasons') }})
    
