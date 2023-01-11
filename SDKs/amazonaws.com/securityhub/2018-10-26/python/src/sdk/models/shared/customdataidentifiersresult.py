import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customdataidentifiersdetections as shared_customdataidentifiersdetections


@dataclass_json
@dataclasses.dataclass
class CustomDataIdentifiersResult:
    r"""CustomDataIdentifiersResult
    Contains an instance of sensitive data that was detected by a customer-defined identifier.
    """
    
    detections: Optional[list[shared_customdataidentifiersdetections.CustomDataIdentifiersDetections]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Detections') }})
    total_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalCount') }})
    
