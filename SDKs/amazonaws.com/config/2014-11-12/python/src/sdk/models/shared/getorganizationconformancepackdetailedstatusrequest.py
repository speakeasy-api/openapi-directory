import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import organizationresourcedetailedstatusfilters as shared_organizationresourcedetailedstatusfilters


@dataclass_json
@dataclasses.dataclass
class GetOrganizationConformancePackDetailedStatusRequest:
    organization_conformance_pack_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationConformancePackName') }})
    filters: Optional[shared_organizationresourcedetailedstatusfilters.OrganizationResourceDetailedStatusFilters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Filters') }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Limit') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
