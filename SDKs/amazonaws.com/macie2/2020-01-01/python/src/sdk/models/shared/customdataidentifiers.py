import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customdetection as shared_customdetection


@dataclass_json
@dataclasses.dataclass
class CustomDataIdentifiers:
    r"""CustomDataIdentifiers
    Provides information about custom data identifiers that produced a sensitive data finding, and the number of occurrences of the data that they detected for the finding.
    """
    
    detections: Optional[list[shared_customdetection.CustomDetection]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detections') }})
    total_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalCount') }})
    
