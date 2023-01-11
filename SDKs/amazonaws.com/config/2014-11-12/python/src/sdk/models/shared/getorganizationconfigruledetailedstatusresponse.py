import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import memberaccountstatus as shared_memberaccountstatus


@dataclass_json
@dataclasses.dataclass
class GetOrganizationConfigRuleDetailedStatusResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    organization_config_rule_detailed_status: Optional[list[shared_memberaccountstatus.MemberAccountStatus]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationConfigRuleDetailedStatus') }})
    
