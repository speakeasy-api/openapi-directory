import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import face as shared_face


@dataclass_json
@dataclasses.dataclass
class FaceMatch:
    r"""FaceMatch
    Provides face metadata. In addition, it also provides the confidence in the match of this face with the input face.
    """
    
    face: Optional[shared_face.Face] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Face') }})
    similarity: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Similarity') }})
    
