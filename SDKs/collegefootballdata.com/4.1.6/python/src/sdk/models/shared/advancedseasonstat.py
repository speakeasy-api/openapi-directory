import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AdvancedSeasonStatDefenseFieldPosition:
    average_predicted_points: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('averagePredictedPoints') }})
    average_start: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('averageStart') }})
    

@dataclass_json
@dataclasses.dataclass
class AdvancedSeasonStatDefenseHavoc:
    db: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('db') }})
    front_seven: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frontSeven') }})
    total: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclasses.dataclass
class AdvancedSeasonStatDefensePassingDowns:
    explosiveness: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explosiveness') }})
    ppa: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ppa') }})
    rate: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rate') }})
    success_rate: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successRate') }})
    

@dataclass_json
@dataclasses.dataclass
class AdvancedSeasonStatDefensePassingPlays:
    explosiveness: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explosiveness') }})
    ppa: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ppa') }})
    rate: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rate') }})
    success_rate: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successRate') }})
    total_ppa: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalPPA') }})
    

@dataclass_json
@dataclasses.dataclass
class AdvancedSeasonStatDefenseRushingPlays:
    explosiveness: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explosiveness') }})
    ppa: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ppa') }})
    rate: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rate') }})
    success_rate: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successRate') }})
    total_ppa: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalPPA') }})
    

@dataclass_json
@dataclasses.dataclass
class AdvancedSeasonStatDefenseStandardDowns:
    explosiveness: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explosiveness') }})
    ppa: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ppa') }})
    rate: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rate') }})
    success_rate: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successRate') }})
    

@dataclass_json
@dataclasses.dataclass
class AdvancedSeasonStatDefense:
    drives: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('drives') }})
    explosiveness: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explosiveness') }})
    field_position: Optional[AdvancedSeasonStatDefenseFieldPosition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldPosition') }})
    havoc: Optional[AdvancedSeasonStatDefenseHavoc] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('havoc') }})
    line_yards: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineYards') }})
    line_yards_total: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineYardsTotal') }})
    open_field_yards: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openFieldYards') }})
    open_field_yards_total: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openFieldYardsTotal') }})
    passing_downs: Optional[AdvancedSeasonStatDefensePassingDowns] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passingDowns') }})
    passing_plays: Optional[AdvancedSeasonStatDefensePassingPlays] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passingPlays') }})
    plays: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plays') }})
    points_per_opportunity: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pointsPerOpportunity') }})
    power_success: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('powerSuccess') }})
    ppa: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ppa') }})
    rushing_plays: Optional[AdvancedSeasonStatDefenseRushingPlays] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rushingPlays') }})
    second_level_yards: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondLevelYards') }})
    second_level_yards_total: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondLevelYardsTotal') }})
    standard_downs: Optional[AdvancedSeasonStatDefenseStandardDowns] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('standardDowns') }})
    stuff_rate: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stuffRate') }})
    success_rate: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successRate') }})
    total_ppa: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalPPA') }})
    

@dataclass_json
@dataclasses.dataclass
class AdvancedSeasonStatOffenseFieldPosition:
    average_predicted_points: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('averagePredictedPoints') }})
    average_start: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('averageStart') }})
    

@dataclass_json
@dataclasses.dataclass
class AdvancedSeasonStatOffenseHavoc:
    db: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('db') }})
    front_seven: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frontSeven') }})
    total: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclasses.dataclass
class AdvancedSeasonStatOffensePassingDowns:
    explosiveness: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explosiveness') }})
    ppa: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ppa') }})
    rate: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rate') }})
    success_rate: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successRate') }})
    

@dataclass_json
@dataclasses.dataclass
class AdvancedSeasonStatOffensePassingPlays:
    explosiveness: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explosiveness') }})
    ppa: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ppa') }})
    rate: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rate') }})
    success_rate: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successRate') }})
    total_ppa: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalPPA') }})
    

@dataclass_json
@dataclasses.dataclass
class AdvancedSeasonStatOffenseRushingPlays:
    explosiveness: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explosiveness') }})
    ppa: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ppa') }})
    rate: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rate') }})
    success_rate: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successRate') }})
    total_ppa: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalPPA') }})
    

@dataclass_json
@dataclasses.dataclass
class AdvancedSeasonStatOffenseStandardDowns:
    explosiveness: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explosiveness') }})
    ppa: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ppa') }})
    rate: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rate') }})
    success_rate: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successRate') }})
    

@dataclass_json
@dataclasses.dataclass
class AdvancedSeasonStatOffense:
    drives: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('drives') }})
    explosiveness: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explosiveness') }})
    field_position: Optional[AdvancedSeasonStatOffenseFieldPosition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldPosition') }})
    havoc: Optional[AdvancedSeasonStatOffenseHavoc] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('havoc') }})
    line_yards: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineYards') }})
    line_yards_total: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineYardsTotal') }})
    open_field_yards: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openFieldYards') }})
    open_field_yards_total: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openFieldYardsTotal') }})
    passing_downs: Optional[AdvancedSeasonStatOffensePassingDowns] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passingDowns') }})
    passing_plays: Optional[AdvancedSeasonStatOffensePassingPlays] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passingPlays') }})
    plays: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plays') }})
    points_per_opportunity: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pointsPerOpportunity') }})
    power_success: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('powerSuccess') }})
    ppa: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ppa') }})
    rushing_plays: Optional[AdvancedSeasonStatOffenseRushingPlays] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rushingPlays') }})
    second_level_yards: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondLevelYards') }})
    second_level_yards_total: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondLevelYardsTotal') }})
    standard_downs: Optional[AdvancedSeasonStatOffenseStandardDowns] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('standardDowns') }})
    stuff_rate: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stuffRate') }})
    success_rate: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successRate') }})
    total_ppa: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalPPA') }})
    

@dataclass_json
@dataclasses.dataclass
class AdvancedSeasonStat:
    conference: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conference') }})
    defense: Optional[AdvancedSeasonStatDefense] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defense') }})
    offense: Optional[AdvancedSeasonStatOffense] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offense') }})
    season: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('season') }})
    team: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('team') }})
    
