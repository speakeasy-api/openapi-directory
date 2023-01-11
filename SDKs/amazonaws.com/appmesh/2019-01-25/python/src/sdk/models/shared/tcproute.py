import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tcprouteaction as shared_tcprouteaction
from ..shared import tcptimeout as shared_tcptimeout


@dataclass_json
@dataclasses.dataclass
class TCPRoute:
    r"""TCPRoute
    An object that represents a TCP route type.
    """
    
    action: shared_tcprouteaction.TCPRouteAction = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    timeout: Optional[shared_tcptimeout.TCPTimeout] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    
