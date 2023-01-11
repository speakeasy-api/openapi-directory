import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import simulationjobsummary as shared_simulationjobsummary


@dataclass_json
@dataclasses.dataclass
class ListSimulationJobsResponse:
    simulation_job_summaries: list[shared_simulationjobsummary.SimulationJobSummary] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('simulationJobSummaries') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
