import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import triggereventtype_enum as shared_triggereventtype_enum


@dataclass_json
@dataclasses.dataclass
class TriggerConfig:
    r"""TriggerConfig
    Information about notification triggers for the deployment group.
    """
    
    trigger_events: Optional[list[shared_triggereventtype_enum.TriggerEventTypeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerEvents') }})
    trigger_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerName') }})
    trigger_target_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerTargetArn') }})
    
