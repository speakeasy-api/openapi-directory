import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import logsconfigstatustype_enum as shared_logsconfigstatustype_enum


@dataclass_json
@dataclasses.dataclass
class CloudWatchLogsConfig:
    r"""CloudWatchLogsConfig
     Information about CloudWatch Logs for a build project. 
    """
    
    status: shared_logsconfigstatustype_enum.LogsConfigStatusTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    group_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupName') }})
    stream_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streamName') }})
    
