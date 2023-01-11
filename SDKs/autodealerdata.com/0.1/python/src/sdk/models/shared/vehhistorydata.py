import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import vehhistory as shared_vehhistory


@dataclass_json
@dataclasses.dataclass
class VehHistoryData:
    data: list[shared_vehhistory.VehHistory] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    vin: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('vin') }})
    
