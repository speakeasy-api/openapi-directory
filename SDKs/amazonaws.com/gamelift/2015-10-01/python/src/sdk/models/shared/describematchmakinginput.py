import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DescribeMatchmakingInput:
    r"""DescribeMatchmakingInput
    Represents the input for a request operation.
    """
    
    ticket_ids: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TicketIds') }})
    
