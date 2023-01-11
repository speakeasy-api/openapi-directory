import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import detector as shared_detector


@dataclass_json
@dataclasses.dataclass
class DescribeDetectorResponse:
    detector: Optional[shared_detector.Detector] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detector') }})
    
