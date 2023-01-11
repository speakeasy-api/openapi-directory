import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import humanloopoutput as shared_humanloopoutput
from ..shared import humanloopstatus_enum as shared_humanloopstatus_enum


@dataclass_json
@dataclasses.dataclass
class DescribeHumanLoopResponse:
    creation_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    flow_definition_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FlowDefinitionArn') }})
    human_loop_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HumanLoopArn') }})
    human_loop_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HumanLoopName') }})
    human_loop_status: shared_humanloopstatus_enum.HumanLoopStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HumanLoopStatus') }})
    failure_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureCode') }})
    failure_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureReason') }})
    human_loop_output: Optional[shared_humanloopoutput.HumanLoopOutput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HumanLoopOutput') }})
    
