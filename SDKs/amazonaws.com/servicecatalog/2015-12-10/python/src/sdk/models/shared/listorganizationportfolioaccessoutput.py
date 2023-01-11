import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import organizationnode as shared_organizationnode


@dataclass_json
@dataclasses.dataclass
class ListOrganizationPortfolioAccessOutput:
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextPageToken') }})
    organization_nodes: Optional[list[shared_organizationnode.OrganizationNode]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationNodes') }})
    
