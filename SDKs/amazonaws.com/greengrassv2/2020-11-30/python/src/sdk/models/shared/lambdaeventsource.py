import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lambdaeventsourcetype_enum as shared_lambdaeventsourcetype_enum


@dataclass_json
@dataclasses.dataclass
class LambdaEventSource:
    r"""LambdaEventSource
    Contains information about an event source for an Lambda function. The event source defines the topics on which this Lambda function subscribes to receive messages that run the function.
    """
    
    topic: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic') }})
    type: shared_lambdaeventsourcetype_enum.LambdaEventSourceTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
