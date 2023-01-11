import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cloudwatchloggingoption as shared_cloudwatchloggingoption
from ..shared import input as shared_input
from ..shared import output as shared_output
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class CreateApplicationRequest:
    r"""CreateApplicationRequest
    TBD
    """
    
    application_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationName') }})
    application_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationCode') }})
    application_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationDescription') }})
    cloud_watch_logging_options: Optional[list[shared_cloudwatchloggingoption.CloudWatchLoggingOption]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchLoggingOptions') }})
    inputs: Optional[list[shared_input.Input]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Inputs') }})
    outputs: Optional[list[shared_output.Output]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Outputs') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
