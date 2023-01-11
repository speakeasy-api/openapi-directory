import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import celebritydetail as shared_celebritydetail


@dataclass_json
@dataclasses.dataclass
class CelebrityRecognition:
    r"""CelebrityRecognition
    Information about a detected celebrity and the time the celebrity was detected in a stored video. For more information, see GetCelebrityRecognition in the Amazon Rekognition Developer Guide.
    """
    
    celebrity: Optional[shared_celebritydetail.CelebrityDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Celebrity') }})
    timestamp: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timestamp') }})
    
