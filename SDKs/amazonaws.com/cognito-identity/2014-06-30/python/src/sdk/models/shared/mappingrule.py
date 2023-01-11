import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mappingrulematchtype_enum as shared_mappingrulematchtype_enum


@dataclass_json
@dataclasses.dataclass
class MappingRule:
    r"""MappingRule
    A rule that maps a claim name, a claim value, and a match type to a role ARN.
    """
    
    claim: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Claim') }})
    match_type: shared_mappingrulematchtype_enum.MappingRuleMatchTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MatchType') }})
    role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleARN') }})
    value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
