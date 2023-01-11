import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import matchmakingticket as shared_matchmakingticket


@dataclass_json
@dataclasses.dataclass
class DescribeMatchmakingOutput:
    r"""DescribeMatchmakingOutput
    Represents the returned data in response to a request operation.
    """
    
    ticket_list: Optional[list[shared_matchmakingticket.MatchmakingTicket]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TicketList') }})
    
