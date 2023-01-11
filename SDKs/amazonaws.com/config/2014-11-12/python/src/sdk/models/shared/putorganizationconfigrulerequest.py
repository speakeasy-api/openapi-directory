import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import organizationcustomrulemetadata as shared_organizationcustomrulemetadata
from ..shared import organizationmanagedrulemetadata as shared_organizationmanagedrulemetadata


@dataclass_json
@dataclasses.dataclass
class PutOrganizationConfigRuleRequest:
    organization_config_rule_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationConfigRuleName') }})
    excluded_accounts: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExcludedAccounts') }})
    organization_custom_rule_metadata: Optional[shared_organizationcustomrulemetadata.OrganizationCustomRuleMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationCustomRuleMetadata') }})
    organization_managed_rule_metadata: Optional[shared_organizationmanagedrulemetadata.OrganizationManagedRuleMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationManagedRuleMetadata') }})
    
