import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import connectionsummary as shared_connectionsummary


@dataclass_json
@dataclasses.dataclass
class ListConnectionsResponse:
    connection_summary_list: list[shared_connectionsummary.ConnectionSummary] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectionSummaryList') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
