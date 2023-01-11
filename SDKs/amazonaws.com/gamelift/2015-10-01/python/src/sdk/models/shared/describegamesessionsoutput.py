import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gamesession as shared_gamesession


@dataclass_json
@dataclasses.dataclass
class DescribeGameSessionsOutput:
    r"""DescribeGameSessionsOutput
    Represents the returned data in response to a request operation.
    """
    
    game_sessions: Optional[list[shared_gamesession.GameSession]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameSessions') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
