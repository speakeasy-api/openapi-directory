import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AssociateResolverRuleRequest:
    resolver_rule_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResolverRuleId') }})
    vpc_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VPCId') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
