import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import loggingconfiguration as shared_loggingconfiguration
from ..shared import statemachinestatus_enum as shared_statemachinestatus_enum
from ..shared import tracingconfiguration as shared_tracingconfiguration
from ..shared import statemachinetype_enum as shared_statemachinetype_enum


@dataclass_json
@dataclasses.dataclass
class DescribeStateMachineOutput:
    creation_date: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    definition: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('definition') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    state_machine_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateMachineArn') }})
    type: shared_statemachinetype_enum.StateMachineTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    logging_configuration: Optional[shared_loggingconfiguration.LoggingConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loggingConfiguration') }})
    status: Optional[shared_statemachinestatus_enum.StateMachineStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tracing_configuration: Optional[shared_tracingconfiguration.TracingConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tracingConfiguration') }})
    
