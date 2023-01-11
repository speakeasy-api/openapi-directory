import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import label as shared_label


@dataclass_json
@dataclasses.dataclass
class LabelDetection:
    r"""LabelDetection
    Information about a label detected in a video analysis request and the time the label was detected in the video. 
    """
    
    label: Optional[shared_label.Label] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Label') }})
    timestamp: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timestamp') }})
    
