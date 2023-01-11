import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import applicationmode_enum as shared_applicationmode_enum
from ..shared import applicationstatus_enum as shared_applicationstatus_enum
from ..shared import runtimeenvironment_enum as shared_runtimeenvironment_enum


@dataclass_json
@dataclasses.dataclass
class ApplicationSummary:
    r"""ApplicationSummary
    Provides application summary information, including the application Amazon Resource Name (ARN), name, and status.
    """
    
    application_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationARN') }})
    application_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationName') }})
    application_status: shared_applicationstatus_enum.ApplicationStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationStatus') }})
    application_version_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationVersionId') }})
    runtime_environment: shared_runtimeenvironment_enum.RuntimeEnvironmentEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuntimeEnvironment') }})
    application_mode: Optional[shared_applicationmode_enum.ApplicationModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationMode') }})
    
