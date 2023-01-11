import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cloudwatchloggingoption as shared_cloudwatchloggingoption


@dataclass_json
@dataclasses.dataclass
class AddApplicationCloudWatchLoggingOptionRequest:
    application_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationName') }})
    cloud_watch_logging_option: shared_cloudwatchloggingoption.CloudWatchLoggingOption = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchLoggingOption') }})
    current_application_version_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrentApplicationVersionId') }})
    
