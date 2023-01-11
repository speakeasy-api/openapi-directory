import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import organizationconformancepack as shared_organizationconformancepack


@dataclass_json
@dataclasses.dataclass
class DescribeOrganizationConformancePacksResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    organization_conformance_packs: Optional[list[shared_organizationconformancepack.OrganizationConformancePack]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationConformancePacks') }})
    
