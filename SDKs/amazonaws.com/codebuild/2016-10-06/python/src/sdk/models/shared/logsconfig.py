import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cloudwatchlogsconfig as shared_cloudwatchlogsconfig
from ..shared import s3logsconfig as shared_s3logsconfig


@dataclass_json
@dataclasses.dataclass
class LogsConfig:
    r"""LogsConfig
     Information about logs for a build project. These can be logs in CloudWatch Logs, built in a specified S3 bucket, or both. 
    """
    
    cloud_watch_logs: Optional[shared_cloudwatchlogsconfig.CloudWatchLogsConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudWatchLogs') }})
    s3_logs: Optional[shared_s3logsconfig.S3LogsConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3Logs') }})
    
