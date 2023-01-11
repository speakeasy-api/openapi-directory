import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import applicationconfigurationdescription as shared_applicationconfigurationdescription
from ..shared import applicationmaintenanceconfigurationdescription as shared_applicationmaintenanceconfigurationdescription
from ..shared import applicationmode_enum as shared_applicationmode_enum
from ..shared import applicationstatus_enum as shared_applicationstatus_enum
from ..shared import cloudwatchloggingoptiondescription as shared_cloudwatchloggingoptiondescription
from ..shared import runtimeenvironment_enum as shared_runtimeenvironment_enum


@dataclass_json
@dataclasses.dataclass
class ApplicationDetail:
    r"""ApplicationDetail
    Describes the application, including the application Amazon Resource Name (ARN), status, latest version, and input and output configurations.
    """
    
    application_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationARN') }})
    application_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationName') }})
    application_status: shared_applicationstatus_enum.ApplicationStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationStatus') }})
    application_version_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationVersionId') }})
    runtime_environment: shared_runtimeenvironment_enum.RuntimeEnvironmentEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuntimeEnvironment') }})
    application_configuration_description: Optional[shared_applicationconfigurationdescription.ApplicationConfigurationDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationConfigurationDescription') }})
    application_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationDescription') }})
    application_maintenance_configuration_description: Optional[shared_applicationmaintenanceconfigurationdescription.ApplicationMaintenanceConfigurationDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationMaintenanceConfigurationDescription') }})
    application_mode: Optional[shared_applicationmode_enum.ApplicationModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationMode') }})
    application_version_rolled_back_from: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationVersionRolledBackFrom') }})
    application_version_rolled_back_to: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationVersionRolledBackTo') }})
    application_version_updated_from: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationVersionUpdatedFrom') }})
    cloud_watch_logging_option_descriptions: Optional[list[shared_cloudwatchloggingoptiondescription.CloudWatchLoggingOptionDescription]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchLoggingOptionDescriptions') }})
    conditional_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConditionalToken') }})
    create_timestamp: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreateTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_update_timestamp: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdateTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    service_execution_role: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceExecutionRole') }})
    
