import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import logdestination as shared_logdestination
from ..shared import loglevel_enum as shared_loglevel_enum


@dataclass_json
@dataclasses.dataclass
class LoggingConfiguration:
    r"""LoggingConfiguration
    The <code>LoggingConfiguration</code> data type is used to set CloudWatch Logs options.
    """
    
    destinations: Optional[list[shared_logdestination.LogDestination]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinations') }})
    include_execution_data: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeExecutionData') }})
    level: Optional[shared_loglevel_enum.LogLevelEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('level') }})
    
