import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ruletypeoption_enum as shared_ruletypeoption_enum
from ..shared import tag as shared_tag
from ..shared import targetaddress as shared_targetaddress


@dataclass_json
@dataclasses.dataclass
class CreateResolverRuleRequest:
    creator_request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatorRequestId') }})
    domain_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainName') }})
    rule_type: shared_ruletypeoption_enum.RuleTypeOptionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleType') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    resolver_endpoint_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResolverEndpointId') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    target_ips: Optional[list[shared_targetaddress.TargetAddress]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetIps') }})
    
