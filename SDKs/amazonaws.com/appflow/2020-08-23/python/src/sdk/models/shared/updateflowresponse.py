import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import flowstatus_enum as shared_flowstatus_enum


@dataclass_json
@dataclasses.dataclass
class UpdateFlowResponse:
    flow_status: Optional[shared_flowstatus_enum.FlowStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flowStatus') }})
    
