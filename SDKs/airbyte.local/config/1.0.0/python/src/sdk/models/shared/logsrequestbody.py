import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import logtype_enum as shared_logtype_enum


@dataclass_json
@dataclasses.dataclass
class LogsRequestBody:
    log_type: shared_logtype_enum.LogTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('logType') }})
    
