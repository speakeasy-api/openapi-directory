import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RegisterEventTopicRequest:
    r"""RegisterEventTopicRequest
    Registers a new event topic.
    """
    
    directory_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryId') }})
    topic_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TopicName') }})
    
