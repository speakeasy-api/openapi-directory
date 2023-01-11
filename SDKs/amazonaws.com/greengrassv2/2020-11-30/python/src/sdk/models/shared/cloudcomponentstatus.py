import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cloudcomponentstate_enum as shared_cloudcomponentstate_enum


@dataclass_json
@dataclasses.dataclass
class CloudComponentStatus:
    r"""CloudComponentStatus
    Contains the status of a component in the IoT Greengrass service.
    """
    
    component_state: Optional[shared_cloudcomponentstate_enum.CloudComponentStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('componentState') }})
    errors: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    
