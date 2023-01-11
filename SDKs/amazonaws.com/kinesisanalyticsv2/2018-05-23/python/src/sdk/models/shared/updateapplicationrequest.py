import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import applicationconfigurationupdate as shared_applicationconfigurationupdate
from ..shared import cloudwatchloggingoptionupdate as shared_cloudwatchloggingoptionupdate
from ..shared import runconfigurationupdate as shared_runconfigurationupdate


@dataclass_json
@dataclasses.dataclass
class UpdateApplicationRequest:
    application_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationName') }})
    application_configuration_update: Optional[shared_applicationconfigurationupdate.ApplicationConfigurationUpdate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationConfigurationUpdate') }})
    cloud_watch_logging_option_updates: Optional[list[shared_cloudwatchloggingoptionupdate.CloudWatchLoggingOptionUpdate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchLoggingOptionUpdates') }})
    conditional_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConditionalToken') }})
    current_application_version_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrentApplicationVersionId') }})
    run_configuration_update: Optional[shared_runconfigurationupdate.RunConfigurationUpdate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RunConfigurationUpdate') }})
    service_execution_role_update: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceExecutionRoleUpdate') }})
    
