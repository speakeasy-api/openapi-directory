import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sensitivedatadetections as shared_sensitivedatadetections


@dataclass_json
@dataclasses.dataclass
class SensitiveDataResult:
    r"""SensitiveDataResult
    Contains a detected instance of sensitive data that are based on built-in identifiers.
    """
    
    category: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Category') }})
    detections: Optional[list[shared_sensitivedatadetections.SensitiveDataDetections]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Detections') }})
    total_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalCount') }})
    
