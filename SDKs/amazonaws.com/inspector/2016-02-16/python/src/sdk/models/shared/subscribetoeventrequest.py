import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inspectorevent_enum as shared_inspectorevent_enum


@dataclass_json
@dataclasses.dataclass
class SubscribeToEventRequest:
    event: shared_inspectorevent_enum.InspectorEventEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('event') }})
    resource_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceArn') }})
    topic_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('topicArn') }})
    
