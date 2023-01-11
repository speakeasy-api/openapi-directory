import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import flowexecutionmessage as shared_flowexecutionmessage


@dataclass_json
@dataclasses.dataclass
class ListFlowExecutionMessagesResponse:
    messages: Optional[list[shared_flowexecutionmessage.FlowExecutionMessage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messages') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
