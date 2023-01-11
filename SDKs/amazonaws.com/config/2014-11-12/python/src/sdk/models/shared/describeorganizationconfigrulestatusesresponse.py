import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import organizationconfigrulestatus as shared_organizationconfigrulestatus


@dataclass_json
@dataclasses.dataclass
class DescribeOrganizationConfigRuleStatusesResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    organization_config_rule_statuses: Optional[list[shared_organizationconfigrulestatus.OrganizationConfigRuleStatus]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationConfigRuleStatuses') }})
    
