import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customroutingacceleratorattributes as shared_customroutingacceleratorattributes


@dataclass_json
@dataclasses.dataclass
class UpdateCustomRoutingAcceleratorAttributesResponse:
    accelerator_attributes: Optional[shared_customroutingacceleratorattributes.CustomRoutingAcceleratorAttributes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceleratorAttributes') }})
    
