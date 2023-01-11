import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cloudwatchlogslogstream as shared_cloudwatchlogslogstream


@dataclass_json
@dataclasses.dataclass
class CloudWatchLogsConfiguration:
    r"""CloudWatchLogsConfiguration
    Describes the Amazon CloudWatch logs configuration for a layer.
    """
    
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Enabled') }})
    log_streams: Optional[list[shared_cloudwatchlogslogstream.CloudWatchLogsLogStream]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogStreams') }})
    
