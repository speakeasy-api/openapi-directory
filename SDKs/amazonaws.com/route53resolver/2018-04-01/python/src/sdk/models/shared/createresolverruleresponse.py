import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resolverrule as shared_resolverrule


@dataclass_json
@dataclasses.dataclass
class CreateResolverRuleResponse:
    resolver_rule: Optional[shared_resolverrule.ResolverRule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResolverRule') }})
    
