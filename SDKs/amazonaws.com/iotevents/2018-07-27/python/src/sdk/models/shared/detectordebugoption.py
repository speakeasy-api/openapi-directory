import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DetectorDebugOption:
    r"""DetectorDebugOption
    The detector model and the specific detectors (instances) for which the logging level is given.
    """
    
    detector_model_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectorModelName') }})
    key_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyValue') }})
    
