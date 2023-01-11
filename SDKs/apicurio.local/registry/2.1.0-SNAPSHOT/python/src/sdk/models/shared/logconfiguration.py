import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import loglevel_enum as shared_loglevel_enum


@dataclass_json
@dataclasses.dataclass
class LogConfiguration:
    level: shared_loglevel_enum.LogLevelEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('level') }})
    
