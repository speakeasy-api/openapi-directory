import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tunnelsummary as shared_tunnelsummary


@dataclass_json
@dataclasses.dataclass
class ListTunnelsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    tunnel_summaries: Optional[list[shared_tunnelsummary.TunnelSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tunnelSummaries') }})
    
