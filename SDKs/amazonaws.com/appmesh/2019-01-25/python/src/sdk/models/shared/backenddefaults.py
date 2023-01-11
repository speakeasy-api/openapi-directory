import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import clientpolicy as shared_clientpolicy


@dataclass_json
@dataclasses.dataclass
class BackendDefaults:
    r"""BackendDefaults
    An object that represents the default properties for a backend.
    """
    
    client_policy: Optional[shared_clientpolicy.ClientPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientPolicy') }})
    
