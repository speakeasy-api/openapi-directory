import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import triggerproperties as shared_triggerproperties
from ..shared import triggertype_enum as shared_triggertype_enum


@dataclass_json
@dataclasses.dataclass
class TriggerConfig:
    r"""TriggerConfig
    The trigger settings that determine how and when Amazon AppFlow runs the specified flow.
    """
    
    trigger_type: shared_triggertype_enum.TriggerTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TriggerType') }})
    trigger_properties: Optional[shared_triggerproperties.TriggerProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TriggerProperties') }})
    
