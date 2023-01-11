import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import organizationconformancepackdetailedstatus as shared_organizationconformancepackdetailedstatus


@dataclass_json
@dataclasses.dataclass
class GetOrganizationConformancePackDetailedStatusResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    organization_conformance_pack_detailed_statuses: Optional[list[shared_organizationconformancepackdetailedstatus.OrganizationConformancePackDetailedStatus]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationConformancePackDetailedStatuses') }})
    
