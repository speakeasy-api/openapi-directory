import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import auditcheckrunstatus_enum as shared_auditcheckrunstatus_enum


@dataclass_json
@dataclasses.dataclass
class AuditCheckDetails:
    check_compliant: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checkCompliant') }})
    check_run_status: Optional[shared_auditcheckrunstatus_enum.AuditCheckRunStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checkRunStatus') }})
    error_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorCode') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    non_compliant_resources_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nonCompliantResourcesCount') }})
    suppressed_non_compliant_resources_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suppressedNonCompliantResourcesCount') }})
    total_resources_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalResourcesCount') }})
    
