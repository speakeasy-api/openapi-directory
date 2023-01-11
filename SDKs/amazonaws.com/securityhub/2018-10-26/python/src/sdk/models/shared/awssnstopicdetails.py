import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awssnstopicsubscription as shared_awssnstopicsubscription


@dataclass_json
@dataclasses.dataclass
class AwsSnsTopicDetails:
    r"""AwsSnsTopicDetails
    A wrapper type for the topic's ARN.
    """
    
    kms_master_key_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsMasterKeyId') }})
    owner: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Owner') }})
    subscription: Optional[list[shared_awssnstopicsubscription.AwsSnsTopicSubscription]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subscription') }})
    topic_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TopicName') }})
    
