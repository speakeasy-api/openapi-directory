import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import team as shared_team


@dataclass_json
@dataclasses.dataclass
class TeamList:
    r"""TeamList
    Teams List
    """
    
    sum: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sum') }})
    teams: list[shared_team.Team] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('teams') }})
    
