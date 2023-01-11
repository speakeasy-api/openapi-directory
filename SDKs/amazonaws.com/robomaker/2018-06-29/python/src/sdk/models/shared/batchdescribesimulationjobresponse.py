import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import simulationjob as shared_simulationjob


@dataclass_json
@dataclasses.dataclass
class BatchDescribeSimulationJobResponse:
    jobs: Optional[list[shared_simulationjob.SimulationJob]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobs') }})
    unprocessed_jobs: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unprocessedJobs') }})
    
