import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import logtype_enum as shared_logtype_enum


@dataclass_json
@dataclasses.dataclass
class LogSetup:
    r"""LogSetup
    An object representing the enabled or disabled Kubernetes control plane logs for your cluster.
    """
    
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    types: Optional[list[shared_logtype_enum.LogTypeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('types') }})
    
