import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CloudWatchLoggingOptionDescription:
    r"""CloudWatchLoggingOptionDescription
    Describes the Amazon CloudWatch logging option.
    """
    
    log_stream_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogStreamARN') }})
    cloud_watch_logging_option_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchLoggingOptionId') }})
    role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleARN') }})
    
