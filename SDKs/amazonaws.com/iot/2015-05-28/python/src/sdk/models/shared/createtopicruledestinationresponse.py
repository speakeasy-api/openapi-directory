import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import topicruledestination as shared_topicruledestination


@dataclass_json
@dataclasses.dataclass
class CreateTopicRuleDestinationResponse:
    topic_rule_destination: Optional[shared_topicruledestination.TopicRuleDestination] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topicRuleDestination') }})
    
