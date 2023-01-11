import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sharedetails as shared_sharedetails
from ..shared import sharestatus_enum as shared_sharestatus_enum


@dataclass_json
@dataclasses.dataclass
class DescribePortfolioShareStatusOutput:
    organization_node_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationNodeValue') }})
    portfolio_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PortfolioId') }})
    portfolio_share_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PortfolioShareToken') }})
    share_details: Optional[shared_sharedetails.ShareDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShareDetails') }})
    status: Optional[shared_sharestatus_enum.ShareStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
