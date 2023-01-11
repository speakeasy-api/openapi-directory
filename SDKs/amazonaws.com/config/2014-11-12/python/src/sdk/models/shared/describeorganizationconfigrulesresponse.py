import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import organizationconfigrule as shared_organizationconfigrule


@dataclass_json
@dataclasses.dataclass
class DescribeOrganizationConfigRulesResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    organization_config_rules: Optional[list[shared_organizationconfigrule.OrganizationConfigRule]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationConfigRules') }})
    
