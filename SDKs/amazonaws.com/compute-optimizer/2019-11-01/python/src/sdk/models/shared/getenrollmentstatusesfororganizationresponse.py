import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accountenrollmentstatus as shared_accountenrollmentstatus


@dataclass_json
@dataclasses.dataclass
class GetEnrollmentStatusesForOrganizationResponse:
    account_enrollment_statuses: Optional[list[shared_accountenrollmentstatus.AccountEnrollmentStatus]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountEnrollmentStatuses') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
