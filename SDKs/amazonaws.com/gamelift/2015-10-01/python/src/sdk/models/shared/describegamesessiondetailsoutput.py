import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gamesessiondetail as shared_gamesessiondetail


@dataclass_json
@dataclasses.dataclass
class DescribeGameSessionDetailsOutput:
    r"""DescribeGameSessionDetailsOutput
    Represents the returned data in response to a request operation.
    """
    
    game_session_details: Optional[list[shared_gamesessiondetail.GameSessionDetail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameSessionDetails') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
