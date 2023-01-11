import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import loggingconfiguration as shared_loggingconfiguration
from ..shared import tag as shared_tag
from ..shared import tracingconfiguration as shared_tracingconfiguration
from ..shared import statemachinetype_enum as shared_statemachinetype_enum


@dataclass_json
@dataclasses.dataclass
class CreateStateMachineInput:
    definition: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('definition') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    logging_configuration: Optional[shared_loggingconfiguration.LoggingConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loggingConfiguration') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    tracing_configuration: Optional[shared_tracingconfiguration.TracingConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tracingConfiguration') }})
    type: Optional[shared_statemachinetype_enum.StateMachineTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
