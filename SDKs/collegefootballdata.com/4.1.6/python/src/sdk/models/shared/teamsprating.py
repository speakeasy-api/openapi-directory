import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class TeamSpRatingDefenseHavoc:
    db: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('db') }})
    front_seven: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frontSeven') }})
    total: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclasses.dataclass
class TeamSpRatingDefense:
    explosiveness: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explosiveness') }})
    havoc: Optional[TeamSpRatingDefenseHavoc] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('havoc') }})
    pasing: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pasing') }})
    passing_downs: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passingDowns') }})
    ranking: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ranking') }})
    rating: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rating') }})
    rushing: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rushing') }})
    standard_downs: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('standardDowns') }})
    success: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    

@dataclass_json
@dataclasses.dataclass
class TeamSpRatingOffense:
    explosiveness: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explosiveness') }})
    pace: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pace') }})
    passing: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passing') }})
    passing_downs: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passingDowns') }})
    ranking: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ranking') }})
    rating: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rating') }})
    run_rate: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runRate') }})
    rushing: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rushing') }})
    standard_downs: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('standardDowns') }})
    success: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    

@dataclass_json
@dataclasses.dataclass
class TeamSpRatingSpecialTeams:
    rating: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rating') }})
    

@dataclass_json
@dataclasses.dataclass
class TeamSpRating:
    conference: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conference') }})
    defense: Optional[TeamSpRatingDefense] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defense') }})
    offense: Optional[TeamSpRatingOffense] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offense') }})
    ranking: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ranking') }})
    rating: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rating') }})
    second_order_wins: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondOrderWins') }})
    sos: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sos') }})
    special_teams: Optional[TeamSpRatingSpecialTeams] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('specialTeams') }})
    team: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('team') }})
    year: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('year') }})
    
