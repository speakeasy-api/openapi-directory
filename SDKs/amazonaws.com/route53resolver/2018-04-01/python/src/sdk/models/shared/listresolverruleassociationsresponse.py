import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resolverruleassociation as shared_resolverruleassociation


@dataclass_json
@dataclasses.dataclass
class ListResolverRuleAssociationsResponse:
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    resolver_rule_associations: Optional[list[shared_resolverruleassociation.ResolverRuleAssociation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResolverRuleAssociations') }})
    
