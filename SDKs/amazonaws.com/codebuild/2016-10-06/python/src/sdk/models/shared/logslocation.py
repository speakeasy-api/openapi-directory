import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cloudwatchlogsconfig as shared_cloudwatchlogsconfig
from ..shared import s3logsconfig as shared_s3logsconfig


@dataclass_json
@dataclasses.dataclass
class LogsLocation:
    r"""LogsLocation
    Information about build logs in CloudWatch Logs.
    """
    
    cloud_watch_logs: Optional[shared_cloudwatchlogsconfig.CloudWatchLogsConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudWatchLogs') }})
    cloud_watch_logs_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudWatchLogsArn') }})
    deep_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deepLink') }})
    group_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupName') }})
    s3_deep_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3DeepLink') }})
    s3_logs: Optional[shared_s3logsconfig.S3LogsConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3Logs') }})
    s3_logs_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3LogsArn') }})
    stream_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streamName') }})
    
