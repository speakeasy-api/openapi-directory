import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class LoggingConfig:
    r"""LoggingConfig
    The logging configuration.
    """
    
    record_all_ros_topics: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recordAllRosTopics') }})
    
