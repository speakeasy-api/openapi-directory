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
class ExecutionListItem:
    r"""ExecutionListItem
    Contains details about an execution.
    """
    
    execution_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionArn') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    start_date: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    state_machine_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateMachineArn') }})
    status: shared_executionstatus_enum.ExecutionStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    stop_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stopDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
