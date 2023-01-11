import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import logginglevel_enum as shared_logginglevel_enum


@dataclass_json
@dataclasses.dataclass
class LoggingOptions:
    r"""LoggingOptions
    Contains logging options.
    """
    
    level: shared_logginglevel_enum.LoggingLevelEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('level') }})
    
