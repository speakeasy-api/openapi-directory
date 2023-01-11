import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import interconnect as shared_interconnect


@dataclass_json
@dataclasses.dataclass
class Interconnects:
    interconnects: Optional[list[shared_interconnect.Interconnect]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interconnects') }})
    
