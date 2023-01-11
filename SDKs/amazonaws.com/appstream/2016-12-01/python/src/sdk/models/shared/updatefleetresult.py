import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import fleet as shared_fleet


@dataclass_json
@dataclasses.dataclass
class UpdateFleetResult:
    fleet: Optional[shared_fleet.Fleet] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Fleet') }})
    
