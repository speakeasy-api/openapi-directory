import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeregisterEventTopicRequest:
    r"""DeregisterEventTopicRequest
    Removes the specified directory as a publisher to the specified Amazon SNS topic.
    """
    
    directory_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryId') }})
    topic_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TopicName') }})
    
