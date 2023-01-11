import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import loglevel_enum as shared_loglevel_enum


@dataclass_json
@dataclasses.dataclass
class GetV2LoggingOptionsResponse:
    default_log_level: Optional[shared_loglevel_enum.LogLevelEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultLogLevel') }})
    disable_all_logs: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableAllLogs') }})
    role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    
