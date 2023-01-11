import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import topicrule as shared_topicrule


@dataclass_json
@dataclasses.dataclass
class GetTopicRuleResponse:
    r"""GetTopicRuleResponse
    The output from the GetTopicRule operation.
    """
    
    rule: Optional[shared_topicrule.TopicRule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rule') }})
    rule_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleArn') }})
    
