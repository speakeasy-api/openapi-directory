import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import applicationstatus_enum as shared_applicationstatus_enum


@dataclass_json
@dataclasses.dataclass
class ApplicationVersionSummary:
    r"""ApplicationVersionSummary
    The summary of the application version.
    """
    
    application_status: shared_applicationstatus_enum.ApplicationStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationStatus') }})
    application_version_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationVersionId') }})
    
