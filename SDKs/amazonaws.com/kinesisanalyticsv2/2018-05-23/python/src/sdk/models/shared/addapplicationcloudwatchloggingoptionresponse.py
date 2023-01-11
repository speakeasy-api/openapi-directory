import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cloudwatchloggingoptiondescription as shared_cloudwatchloggingoptiondescription


@dataclass_json
@dataclasses.dataclass
class AddApplicationCloudWatchLoggingOptionResponse:
    application_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationARN') }})
    application_version_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationVersionId') }})
    cloud_watch_logging_option_descriptions: Optional[list[shared_cloudwatchloggingoptiondescription.CloudWatchLoggingOptionDescription]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchLoggingOptionDescriptions') }})
    
