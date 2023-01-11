import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gamesessionqueue as shared_gamesessionqueue


@dataclass_json
@dataclasses.dataclass
class DescribeGameSessionQueuesOutput:
    r"""DescribeGameSessionQueuesOutput
    Represents the returned data in response to a request operation.
    """
    
    game_session_queues: Optional[list[shared_gamesessionqueue.GameSessionQueue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameSessionQueues') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
