import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import loggingconfiguration as shared_loggingconfiguration
from ..shared import tracingconfiguration as shared_tracingconfiguration


@dataclass_json
@dataclasses.dataclass
class DescribeStateMachineForExecutionOutput:
    definition: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('definition') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    state_machine_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateMachineArn') }})
    update_date: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    logging_configuration: Optional[shared_loggingconfiguration.LoggingConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loggingConfiguration') }})
    tracing_configuration: Optional[shared_tracingconfiguration.TracingConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tracingConfiguration') }})
    
