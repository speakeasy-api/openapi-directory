import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resolverruleassociation as shared_resolverruleassociation


@dataclass_json
@dataclasses.dataclass
class AssociateResolverRuleResponse:
    resolver_rule_association: Optional[shared_resolverruleassociation.ResolverRuleAssociation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResolverRuleAssociation') }})
    
