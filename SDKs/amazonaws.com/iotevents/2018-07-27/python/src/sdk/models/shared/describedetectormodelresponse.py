import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import detectormodel as shared_detectormodel


@dataclass_json
@dataclasses.dataclass
class DescribeDetectorModelResponse:
    detector_model: Optional[shared_detectormodel.DetectorModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectorModel') }})
    
