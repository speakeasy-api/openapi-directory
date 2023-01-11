import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import textdetection as shared_textdetection


@dataclass_json
@dataclasses.dataclass
class DetectTextResponse:
    text_detections: Optional[list[shared_textdetection.TextDetection]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TextDetections') }})
    text_model_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TextModelVersion') }})
    
