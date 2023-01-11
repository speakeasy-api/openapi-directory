import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import organizationresourcedetailedstatus_enum as shared_organizationresourcedetailedstatus_enum


@dataclass_json
@dataclasses.dataclass
class OrganizationResourceDetailedStatusFilters:
    r"""OrganizationResourceDetailedStatusFilters
    Status filter object to filter results based on specific member account ID or status type for an organization conformance pack.
    """
    
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountId') }})
    status: Optional[shared_organizationresourcedetailedstatus_enum.OrganizationResourceDetailedStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
