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
class UpdateStateMachineInput:
    state_machine_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateMachineArn') }})
    definition: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('definition') }})
    logging_configuration: Optional[shared_loggingconfiguration.LoggingConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loggingConfiguration') }})
    role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    tracing_configuration: Optional[shared_tracingconfiguration.TracingConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tracingConfiguration') }})
    
