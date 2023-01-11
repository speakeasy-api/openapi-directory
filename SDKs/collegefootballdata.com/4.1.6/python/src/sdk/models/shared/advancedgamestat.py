import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AdvancedGameStatDefensePassingDowns:
    explosiveness: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explosiveness') }})
    ppa: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ppa') }})
    success_rate: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successRate') }})
    

@dataclass_json
@dataclasses.dataclass
class AdvancedGameStatDefensePassingPlays:
    explosiveness: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explosiveness') }})
    ppa: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ppa') }})
    success_rate: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successRate') }})
    total_ppa: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalPPA') }})
    

@dataclass_json
@dataclasses.dataclass
class AdvancedGameStatDefenseRushingPlays:
    explosiveness: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explosiveness') }})
    ppa: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ppa') }})
    success_rate: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successRate') }})
    total_ppa: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalPPA') }})
    

@dataclass_json
@dataclasses.dataclass
class AdvancedGameStatDefenseStandardDowns:
    explosiveness: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explosiveness') }})
    ppa: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ppa') }})
    success_rate: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successRate') }})
    

@dataclass_json
@dataclasses.dataclass
class AdvancedGameStatDefense:
    drives: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('drives') }})
    explosiveness: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explosiveness') }})
    line_yards: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineYards') }})
    line_yards_total: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineYardsTotal') }})
    open_field_yards: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openFieldYards') }})
    open_field_yards_total: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openFieldYardsTotal') }})
    passing_downs: Optional[AdvancedGameStatDefensePassingDowns] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passingDowns') }})
    passing_plays: Optional[AdvancedGameStatDefensePassingPlays] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passingPlays') }})
    plays: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plays') }})
    power_success: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('powerSuccess') }})
    ppa: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ppa') }})
    rushing_plays: Optional[AdvancedGameStatDefenseRushingPlays] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rushingPlays') }})
    second_level_yards: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondLevelYards') }})
    second_level_yards_total: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondLevelYardsTotal') }})
    standard_downs: Optional[AdvancedGameStatDefenseStandardDowns] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('standardDowns') }})
    stuff_rate: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stuffRate') }})
    success_rate: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successRate') }})
    total_ppa: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalPPA') }})
    

@dataclass_json
@dataclasses.dataclass
class AdvancedGameStatOffensePassingDowns:
    explosiveness: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explosiveness') }})
    ppa: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ppa') }})
    success_rate: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successRate') }})
    

@dataclass_json
@dataclasses.dataclass
class AdvancedGameStatOffensePassingPlays:
    explosiveness: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explosiveness') }})
    ppa: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ppa') }})
    success_rate: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successRate') }})
    total_ppa: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalPPA') }})
    

@dataclass_json
@dataclasses.dataclass
class AdvancedGameStatOffenseRushingPlays:
    explosiveness: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explosiveness') }})
    ppa: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ppa') }})
    success_rate: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successRate') }})
    total_ppa: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalPPA') }})
    

@dataclass_json
@dataclasses.dataclass
class AdvancedGameStatOffenseStandardDowns:
    explosiveness: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explosiveness') }})
    ppa: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ppa') }})
    success_rate: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successRate') }})
    

@dataclass_json
@dataclasses.dataclass
class AdvancedGameStatOffense:
    drives: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('drives') }})
    explosiveness: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explosiveness') }})
    line_yards: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineYards') }})
    line_yards_total: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineYardsTotal') }})
    open_field_yards: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openFieldYards') }})
    open_field_yards_total: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openFieldYardsTotal') }})
    passing_downs: Optional[AdvancedGameStatOffensePassingDowns] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passingDowns') }})
    passing_plays: Optional[AdvancedGameStatOffensePassingPlays] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passingPlays') }})
    plays: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plays') }})
    power_success: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('powerSuccess') }})
    ppa: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ppa') }})
    rushing_plays: Optional[AdvancedGameStatOffenseRushingPlays] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rushingPlays') }})
    second_level_yards: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondLevelYards') }})
    second_level_yards_total: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondLevelYardsTotal') }})
    standard_downs: Optional[AdvancedGameStatOffenseStandardDowns] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('standardDowns') }})
    stuff_rate: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stuffRate') }})
    success_rate: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successRate') }})
    total_ppa: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalPPA') }})
    

@dataclass_json
@dataclasses.dataclass
class AdvancedGameStat:
    defense: Optional[AdvancedGameStatDefense] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defense') }})
    game_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gameId') }})
    offense: Optional[AdvancedGameStatOffense] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offense') }})
    opponent: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('opponent') }})
    season: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('season') }})
    team: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('team') }})
    week: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('week') }})
    
