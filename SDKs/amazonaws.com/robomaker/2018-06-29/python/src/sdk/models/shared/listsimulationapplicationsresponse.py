import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import simulationapplicationsummary as shared_simulationapplicationsummary


@dataclass_json
@dataclasses.dataclass
class ListSimulationApplicationsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    simulation_application_summaries: Optional[list[shared_simulationapplicationsummary.SimulationApplicationSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('simulationApplicationSummaries') }})
    
