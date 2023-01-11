import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import errorhandlingconfig as shared_errorhandlingconfig


@dataclass_json
@dataclasses.dataclass
class EventBridgeDestinationProperties:
    r"""EventBridgeDestinationProperties
     The properties that are applied when Amazon EventBridge is being used as a destination. 
    """
    
    object: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('object') }})
    error_handling_config: Optional[shared_errorhandlingconfig.ErrorHandlingConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorHandlingConfig') }})
    
