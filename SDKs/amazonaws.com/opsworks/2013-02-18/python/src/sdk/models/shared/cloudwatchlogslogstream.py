import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cloudwatchlogsencoding_enum as shared_cloudwatchlogsencoding_enum
from ..shared import cloudwatchlogsinitialposition_enum as shared_cloudwatchlogsinitialposition_enum
from ..shared import cloudwatchlogstimezone_enum as shared_cloudwatchlogstimezone_enum


@dataclass_json
@dataclasses.dataclass
class CloudWatchLogsLogStream:
    r"""CloudWatchLogsLogStream
    Describes the Amazon CloudWatch logs configuration for a layer. For detailed information about members of this data type, see the <a href=\"https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AgentReference.html\">CloudWatch Logs Agent Reference</a>.
    """
    
    batch_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BatchCount') }})
    batch_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BatchSize') }})
    buffer_duration: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BufferDuration') }})
    datetime_format: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatetimeFormat') }})
    encoding: Optional[shared_cloudwatchlogsencoding_enum.CloudWatchLogsEncodingEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Encoding') }})
    file: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('File') }})
    file_fingerprint_lines: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileFingerprintLines') }})
    initial_position: Optional[shared_cloudwatchlogsinitialposition_enum.CloudWatchLogsInitialPositionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InitialPosition') }})
    log_group_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogGroupName') }})
    multi_line_start_pattern: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MultiLineStartPattern') }})
    time_zone: Optional[shared_cloudwatchlogstimezone_enum.CloudWatchLogsTimeZoneEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeZone') }})
    
