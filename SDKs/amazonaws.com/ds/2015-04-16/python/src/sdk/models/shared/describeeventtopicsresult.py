import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import eventtopic as shared_eventtopic


@dataclass_json
@dataclasses.dataclass
class DescribeEventTopicsResult:
    r"""DescribeEventTopicsResult
    The result of a DescribeEventTopic request.
    """
    
    event_topics: Optional[list[shared_eventtopic.EventTopic]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventTopics') }})
    
