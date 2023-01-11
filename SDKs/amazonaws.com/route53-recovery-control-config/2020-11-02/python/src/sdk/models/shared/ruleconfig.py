import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ruletype_enum as shared_ruletype_enum


@dataclass_json
@dataclasses.dataclass
class RuleConfig:
    r"""RuleConfig
    The rule configuration for an assertion rule. That is, the criteria that you set for specific assertion controls (routing controls) that specify how many controls must be enabled after a transaction completes.
    """
    
    inverted: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Inverted') }})
    threshold: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Threshold') }})
    type: shared_ruletype_enum.RuleTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
