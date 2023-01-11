import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DetailScopeEnum(str, Enum):
    PARAMETER = "Parameter"
    REPORT = "Report"
    ITEM = "Item"


@dataclass_json
@dataclasses.dataclass
class Detail:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    scope: Optional[DetailScopeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    
