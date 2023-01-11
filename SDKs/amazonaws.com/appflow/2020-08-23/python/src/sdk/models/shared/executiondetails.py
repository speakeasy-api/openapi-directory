import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import executionstatus_enum as shared_executionstatus_enum


@dataclass_json
@dataclasses.dataclass
class ExecutionDetails:
    r"""ExecutionDetails
     Describes the details of the flow run, including the timestamp, status, and message. 
    """
    
    most_recent_execution_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mostRecentExecutionMessage') }})
    most_recent_execution_status: Optional[shared_executionstatus_enum.ExecutionStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mostRecentExecutionStatus') }})
    most_recent_execution_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mostRecentExecutionTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
