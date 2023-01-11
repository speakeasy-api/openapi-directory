import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class TeamPpaDefenseCumulative:
    passing: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passing') }})
    rushing: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rushing') }})
    total: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclasses.dataclass
class TeamPpaDefense:
    cumulative: Optional[TeamPpaDefenseCumulative] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cumulative') }})
    first_down: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstDown') }})
    overall: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overall') }})
    passing: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passing') }})
    rushing: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rushing') }})
    second_down: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondDown') }})
    third_down: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thirdDown') }})
    

@dataclass_json
@dataclasses.dataclass
class TeamPpaOffenseCumulative:
    passing: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passing') }})
    rushing: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rushing') }})
    total: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclasses.dataclass
class TeamPpaOffense:
    cumulative: Optional[TeamPpaOffenseCumulative] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cumulative') }})
    first_down: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstDown') }})
    overall: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overall') }})
    passing: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passing') }})
    rushing: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rushing') }})
    second_down: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondDown') }})
    third_down: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thirdDown') }})
    

@dataclass_json
@dataclasses.dataclass
class TeamPpa:
    conference: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conference') }})
    defense: Optional[TeamPpaDefense] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defense') }})
    offense: Optional[TeamPpaOffense] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offense') }})
    season: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('season') }})
    team: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('team') }})
    
