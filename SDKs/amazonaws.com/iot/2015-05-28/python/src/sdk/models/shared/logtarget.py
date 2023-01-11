import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import logtargettype_enum as shared_logtargettype_enum


@dataclass_json
@dataclasses.dataclass
class LogTarget:
    r"""LogTarget
    A log target.
    """
    
    target_type: shared_logtargettype_enum.LogTargetTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetType') }})
    target_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetName') }})
    
