import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class BoxScorePlayersPpaAverage:
    passing: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passing') }})
    quarter1: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quarter1') }})
    quarter2: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quarter2') }})
    quarter3: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quarter3') }})
    quarter4: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quarter4') }})
    rushing: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rushing') }})
    total: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclasses.dataclass
class BoxScorePlayersPpaCumulative:
    passing: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passing') }})
    quarter1: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quarter1') }})
    quarter2: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quarter2') }})
    quarter3: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quarter3') }})
    quarter4: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quarter4') }})
    rushing: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rushing') }})
    total: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclasses.dataclass
class BoxScorePlayersPpa:
    average: Optional[BoxScorePlayersPpaAverage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('average') }})
    cumulative: Optional[BoxScorePlayersPpaCumulative] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cumulative') }})
    player: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('player') }})
    position: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    team: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('team') }})
    

@dataclass_json
@dataclasses.dataclass
class BoxScorePlayersUsage:
    passing: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passing') }})
    player: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('player') }})
    position: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    quarter1: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quarter1') }})
    quarter2: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quarter2') }})
    quarter3: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quarter3') }})
    quarter4: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quarter4') }})
    rushing: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rushing') }})
    team: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('team') }})
    total: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclasses.dataclass
class BoxScorePlayers:
    ppa: Optional[list[BoxScorePlayersPpa]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ppa') }})
    usage: Optional[list[BoxScorePlayersUsage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usage') }})
    

@dataclass_json
@dataclasses.dataclass
class BoxScoreTeamsCumulativePpaOverall:
    quarter1: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quarter1') }})
    quarter2: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quarter2') }})
    quarter3: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quarter3') }})
    quarter4: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quarter4') }})
    total: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclasses.dataclass
class BoxScoreTeamsCumulativePpaPassing:
    quarter1: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quarter1') }})
    quarter2: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quarter2') }})
    quarter3: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quarter3') }})
    quarter4: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quarter4') }})
    total: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclasses.dataclass
class BoxScoreTeamsCumulativePpaRushing:
    quarter1: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quarter1') }})
    quarter2: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quarter2') }})
    quarter3: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quarter3') }})
    quarter4: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quarter4') }})
    total: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclasses.dataclass
class BoxScoreTeamsCumulativePpa:
    overall: Optional[BoxScoreTeamsCumulativePpaOverall] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overall') }})
    passing: Optional[BoxScoreTeamsCumulativePpaPassing] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passing') }})
    plays: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plays') }})
    rushing: Optional[BoxScoreTeamsCumulativePpaRushing] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rushing') }})
    team: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('team') }})
    

@dataclass_json
@dataclasses.dataclass
class BoxScoreTeamsExplosivenessOverall:
    quarter1: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quarter1') }})
    quarter2: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quarter2') }})
    quarter3: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quarter3') }})
    quarter4: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quarter4') }})
    total: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclasses.dataclass
class BoxScoreTeamsExplosiveness:
    overall: Optional[BoxScoreTeamsExplosivenessOverall] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overall') }})
    team: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('team') }})
    

@dataclass_json
@dataclasses.dataclass
class BoxScoreTeamsFieldPosition:
    average_start: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('averageStart') }})
    average_starting_predicted_points: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('averageStartingPredictedPoints') }})
    team: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('team') }})
    

@dataclass_json
@dataclasses.dataclass
class BoxScoreTeamsHavoc:
    db: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('db') }})
    front_seven: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frontSeven') }})
    team: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('team') }})
    total: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclasses.dataclass
class BoxScoreTeamsPpaOverall:
    quarter1: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quarter1') }})
    quarter2: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quarter2') }})
    quarter3: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quarter3') }})
    quarter4: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quarter4') }})
    total: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclasses.dataclass
class BoxScoreTeamsPpaPassing:
    quarter1: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quarter1') }})
    quarter2: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quarter2') }})
    quarter3: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quarter3') }})
    quarter4: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quarter4') }})
    total: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclasses.dataclass
class BoxScoreTeamsPpaRushing:
    quarter1: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quarter1') }})
    quarter2: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quarter2') }})
    quarter3: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quarter3') }})
    quarter4: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quarter4') }})
    total: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclasses.dataclass
class BoxScoreTeamsPpa:
    overall: Optional[BoxScoreTeamsPpaOverall] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overall') }})
    passing: Optional[BoxScoreTeamsPpaPassing] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passing') }})
    plays: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plays') }})
    rushing: Optional[BoxScoreTeamsPpaRushing] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rushing') }})
    team: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('team') }})
    

@dataclass_json
@dataclasses.dataclass
class BoxScoreTeamsRushing:
    line_yards: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineYards') }})
    line_yards_average: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineYardsAverage') }})
    open_field_yards: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openFieldYards') }})
    open_field_yards_average: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openFieldYardsAverage') }})
    power_success: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('powerSuccess') }})
    second_level_yards: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondLevelYards') }})
    second_level_yards_average: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondLevelYardsAverage') }})
    stuff_rate: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stuffRate') }})
    team: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('team') }})
    

@dataclass_json
@dataclasses.dataclass
class BoxScoreTeamsScoringOpportunities:
    opportunities: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('opportunities') }})
    points: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('points') }})
    points_per_opportunity: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pointsPerOpportunity') }})
    team: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('team') }})
    

@dataclass_json
@dataclasses.dataclass
class BoxScoreTeamsSuccessRatesOverall:
    quarter1: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quarter1') }})
    quarter2: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quarter2') }})
    quarter3: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quarter3') }})
    quarter4: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quarter4') }})
    total: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclasses.dataclass
class BoxScoreTeamsSuccessRatesPassingDowns:
    quarter1: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quarter1') }})
    quarter2: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quarter2') }})
    quarter3: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quarter3') }})
    quarter4: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quarter4') }})
    total: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclasses.dataclass
class BoxScoreTeamsSuccessRatesStandardDowns:
    quarter1: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quarter1') }})
    quarter2: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quarter2') }})
    quarter3: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quarter3') }})
    quarter4: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quarter4') }})
    total: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclasses.dataclass
class BoxScoreTeamsSuccessRates:
    overall: Optional[BoxScoreTeamsSuccessRatesOverall] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overall') }})
    passing_downs: Optional[BoxScoreTeamsSuccessRatesPassingDowns] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passingDowns') }})
    standard_downs: Optional[BoxScoreTeamsSuccessRatesStandardDowns] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('standardDowns') }})
    team: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('team') }})
    

@dataclass_json
@dataclasses.dataclass
class BoxScoreTeams:
    cumulative_ppa: Optional[list[BoxScoreTeamsCumulativePpa]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cumulativePpa') }})
    explosiveness: Optional[list[BoxScoreTeamsExplosiveness]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explosiveness') }})
    field_position: Optional[list[BoxScoreTeamsFieldPosition]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldPosition') }})
    havoc: Optional[list[BoxScoreTeamsHavoc]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('havoc') }})
    ppa: Optional[list[BoxScoreTeamsPpa]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ppa') }})
    rushing: Optional[list[BoxScoreTeamsRushing]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rushing') }})
    scoring_opportunities: Optional[list[BoxScoreTeamsScoringOpportunities]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scoringOpportunities') }})
    success_rates: Optional[list[BoxScoreTeamsSuccessRates]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successRates') }})
    

@dataclass_json
@dataclasses.dataclass
class BoxScore:
    players: Optional[BoxScorePlayers] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('players') }})
    teams: Optional[BoxScoreTeams] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('teams') }})
    
