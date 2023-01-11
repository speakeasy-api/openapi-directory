import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cloudwatchloggingoption as shared_cloudwatchloggingoption


@dataclass_json
@dataclasses.dataclass
class AddApplicationCloudWatchLoggingOptionRequest:
    application_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationName') }})
    cloud_watch_logging_option: shared_cloudwatchloggingoption.CloudWatchLoggingOption = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchLoggingOption') }})
    conditional_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConditionalToken') }})
    current_application_version_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrentApplicationVersionId') }})
    
