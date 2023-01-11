import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cloudwatchlogsloggroup as shared_cloudwatchlogsloggroup


@dataclass_json
@dataclasses.dataclass
class LogDestination:
    r"""LogDestination
    <p/>
    """
    
    cloud_watch_logs_log_group: Optional[shared_cloudwatchlogsloggroup.CloudWatchLogsLogGroup] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudWatchLogsLogGroup') }})
    
