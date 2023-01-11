import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import loggercomponent_enum as shared_loggercomponent_enum
from ..shared import loggerlevel_enum as shared_loggerlevel_enum
from ..shared import loggertype_enum as shared_loggertype_enum


@dataclass_json
@dataclasses.dataclass
class Logger:
    r"""Logger
    Information about a logger
    """
    
    component: shared_loggercomponent_enum.LoggerComponentEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Component') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    level: shared_loggerlevel_enum.LoggerLevelEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Level') }})
    type: shared_loggertype_enum.LoggerTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    space: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Space') }})
    
