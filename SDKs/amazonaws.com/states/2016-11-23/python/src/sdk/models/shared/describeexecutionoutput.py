import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cloudwatcheventsexecutiondatadetails as shared_cloudwatcheventsexecutiondatadetails
from ..shared import executionstatus_enum as shared_executionstatus_enum


@dataclass_json
@dataclasses.dataclass
class DescribeExecutionOutput:
    execution_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionArn') }})
    start_date: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    state_machine_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateMachineArn') }})
    status: shared_executionstatus_enum.ExecutionStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    input: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('input') }})
    input_details: Optional[shared_cloudwatcheventsexecutiondatadetails.CloudWatchEventsExecutionDataDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputDetails') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    output: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('output') }})
    output_details: Optional[shared_cloudwatcheventsexecutiondatadetails.CloudWatchEventsExecutionDataDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputDetails') }})
    stop_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stopDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    trace_header: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('traceHeader') }})
    
