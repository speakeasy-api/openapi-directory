import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import simulationjobbatchsummary as shared_simulationjobbatchsummary


@dataclass_json
@dataclasses.dataclass
class ListSimulationJobBatchesResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    simulation_job_batch_summaries: Optional[list[shared_simulationjobbatchsummary.SimulationJobBatchSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('simulationJobBatchSummaries') }})
    
