import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import minimumhealthyhoststype_enum as shared_minimumhealthyhoststype_enum


@dataclass_json
@dataclasses.dataclass
class MinimumHealthyHosts:
    r"""MinimumHealthyHosts
    Information about minimum healthy instance.
    """
    
    type: Optional[shared_minimumhealthyhoststype_enum.MinimumHealthyHostsTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
