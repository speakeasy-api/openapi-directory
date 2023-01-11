import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import retainedmessagesummary as shared_retainedmessagesummary


@dataclass_json
@dataclasses.dataclass
class ListRetainedMessagesResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    retained_topics: Optional[list[shared_retainedmessagesummary.RetainedMessageSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retainedTopics') }})
    
