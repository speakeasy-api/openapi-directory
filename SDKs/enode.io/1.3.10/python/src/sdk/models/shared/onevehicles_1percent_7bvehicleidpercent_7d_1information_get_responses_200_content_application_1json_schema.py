import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Onevehicles1Percent7BvehicleIDPercent7D1informationGetResponses200ContentApplication1jsonSchema:
    r"""Onevehicles1Percent7BvehicleIDPercent7D1informationGetResponses200ContentApplication1jsonSchema
    Descriptive information about the Vehicle
    """
    
    brand: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('brand') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    model: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    year: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('year') }})
    
