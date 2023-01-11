import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import triggertype_enum as shared_triggertype_enum


@dataclass_json
@dataclasses.dataclass
class StateChangeConfiguration:
    r"""StateChangeConfiguration
    Contains the configuration information of alarm state changes.
    """
    
    trigger_type: Optional[shared_triggertype_enum.TriggerTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerType') }})
    
