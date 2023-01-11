import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import topicrulelistitem as shared_topicrulelistitem


@dataclass_json
@dataclasses.dataclass
class ListTopicRulesResponse:
    r"""ListTopicRulesResponse
    The output from the ListTopicRules operation.
    """
    
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    rules: Optional[list[shared_topicrulelistitem.TopicRuleListItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    
