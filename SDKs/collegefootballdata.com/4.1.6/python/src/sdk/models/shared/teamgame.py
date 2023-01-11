import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class TeamGameTeamsStats:
    category: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    stat: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stat') }})
    

@dataclass_json
@dataclasses.dataclass
class TeamGameTeams:
    conference: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conference') }})
    home_away: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('homeAway') }})
    points: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('points') }})
    school: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('school') }})
    stats: Optional[list[TeamGameTeamsStats]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stats') }})
    

@dataclass_json
@dataclasses.dataclass
class TeamGame:
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    teams: Optional[list[TeamGameTeams]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('teams') }})
    
