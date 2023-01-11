import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import loglevel_enum as shared_loglevel_enum
from ..shared import logtarget as shared_logtarget


@dataclass_json
@dataclasses.dataclass
class LogTargetConfiguration:
    r"""LogTargetConfiguration
    The target configuration.
    """
    
    log_level: Optional[shared_loglevel_enum.LogLevelEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logLevel') }})
    log_target: Optional[shared_logtarget.LogTarget] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logTarget') }})
    
