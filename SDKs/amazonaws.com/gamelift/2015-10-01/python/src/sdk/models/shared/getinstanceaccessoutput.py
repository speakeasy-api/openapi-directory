import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import instanceaccess as shared_instanceaccess


@dataclass_json
@dataclasses.dataclass
class GetInstanceAccessOutput:
    r"""GetInstanceAccessOutput
    Represents the returned data in response to a request operation.
    """
    
    instance_access: Optional[shared_instanceaccess.InstanceAccess] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceAccess') }})
    
