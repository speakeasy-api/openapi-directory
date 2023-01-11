import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import forwardingconfigstate_enum as shared_forwardingconfigstate_enum


@dataclass_json
@dataclasses.dataclass
class ForwardingConfig:
    r"""ForwardingConfig
    The forwarding configuration for a given property.
    """
    
    state: shared_forwardingconfigstate_enum.ForwardingConfigStateEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
