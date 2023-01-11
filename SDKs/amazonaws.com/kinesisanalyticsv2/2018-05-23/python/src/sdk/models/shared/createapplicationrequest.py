import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import applicationconfiguration as shared_applicationconfiguration
from ..shared import applicationmode_enum as shared_applicationmode_enum
from ..shared import cloudwatchloggingoption as shared_cloudwatchloggingoption
from ..shared import runtimeenvironment_enum as shared_runtimeenvironment_enum
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class CreateApplicationRequest:
    application_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationName') }})
    runtime_environment: shared_runtimeenvironment_enum.RuntimeEnvironmentEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuntimeEnvironment') }})
    service_execution_role: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceExecutionRole') }})
    application_configuration: Optional[shared_applicationconfiguration.ApplicationConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationConfiguration') }})
    application_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationDescription') }})
    application_mode: Optional[shared_applicationmode_enum.ApplicationModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationMode') }})
    cloud_watch_logging_options: Optional[list[shared_cloudwatchloggingoption.CloudWatchLoggingOption]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchLoggingOptions') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
