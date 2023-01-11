import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class CreateMatchmakingRuleSetInput:
    r"""CreateMatchmakingRuleSetInput
    Represents the input for a request operation.
    """
    
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    rule_set_body: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleSetBody') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
