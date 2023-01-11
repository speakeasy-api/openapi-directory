import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import serviceactionsummary as shared_serviceactionsummary


@dataclass_json
@dataclasses.dataclass
class ListServiceActionsOutput:
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextPageToken') }})
    service_action_summaries: Optional[list[shared_serviceactionsummary.ServiceActionSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceActionSummaries') }})
    
