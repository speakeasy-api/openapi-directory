import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import eventsource_enum as shared_eventsource_enum
from ..shared import maximumexecutionfrequency_enum as shared_maximumexecutionfrequency_enum
from ..shared import messagetype_enum as shared_messagetype_enum


@dataclass_json
@dataclasses.dataclass
class SourceDetail:
    r"""SourceDetail
    Provides the source and the message types that trigger Config to evaluate your Amazon Web Services resources against a rule. It also provides the frequency with which you want Config to run evaluations for the rule if the trigger type is periodic. You can specify the parameter values for <code>SourceDetail</code> only for custom rules. 
    """
    
    event_source: Optional[shared_eventsource_enum.EventSourceEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventSource') }})
    maximum_execution_frequency: Optional[shared_maximumexecutionfrequency_enum.MaximumExecutionFrequencyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumExecutionFrequency') }})
    message_type: Optional[shared_messagetype_enum.MessageTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MessageType') }})
    
