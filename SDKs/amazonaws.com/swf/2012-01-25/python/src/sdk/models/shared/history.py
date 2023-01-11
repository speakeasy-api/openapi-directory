import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import historyevent as shared_historyevent


@dataclass_json
@dataclasses.dataclass
class History:
    r"""History
    Paginated representation of a workflow history for a workflow execution. This is the up to date, complete and authoritative record of the events related to all tasks and events in the life of the workflow execution.
    """
    
    events: list[shared_historyevent.HistoryEvent] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
