import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AwsSnsTopicSubscription:
    r"""AwsSnsTopicSubscription
    A wrapper type for the attributes of an Amazon SNS subscription.
    """
    
    endpoint: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Endpoint') }})
    protocol: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Protocol') }})
    
