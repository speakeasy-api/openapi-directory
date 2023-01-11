import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import autorollbackevent_enum as shared_autorollbackevent_enum


@dataclass_json
@dataclasses.dataclass
class AutoRollbackConfiguration:
    r"""AutoRollbackConfiguration
    Information about a configuration for automatically rolling back to a previous version of an application revision when a deployment is not completed successfully.
    """
    
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    events: Optional[list[shared_autorollbackevent_enum.AutoRollbackEventEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    
