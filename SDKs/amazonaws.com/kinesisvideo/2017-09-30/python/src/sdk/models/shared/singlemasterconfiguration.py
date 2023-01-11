import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SingleMasterConfiguration:
    r"""SingleMasterConfiguration
    A structure that contains the configuration for the <code>SINGLE_MASTER</code> channel type.
    """
    
    message_ttl_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MessageTtlSeconds') }})
    
