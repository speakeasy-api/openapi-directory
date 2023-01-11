import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import webhookactivityentry as shared_webhookactivityentry


@dataclass_json
@dataclasses.dataclass
class WebhookActivityResponse:
    r"""WebhookActivityResponse
    Session activity list response
    """
    
    data: Optional[list[shared_webhookactivityentry.WebhookActivityEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    response_status: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseStatus') }})
    returned_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnedResults') }})
    total_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalResults') }})
    
