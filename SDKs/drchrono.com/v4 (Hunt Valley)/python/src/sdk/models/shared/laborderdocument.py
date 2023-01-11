import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class LabOrderDocumentTypeEnum(str, Enum):
    REQ = "REQ"
    ABN = "ABN"
    R_A = "R-A"
    RES = "RES"


@dataclass_json
@dataclasses.dataclass
class LabOrderDocument:
    document: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('document') }})
    lab_order: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lab_order') }})
    type: LabOrderDocumentTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    timestamp: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    
