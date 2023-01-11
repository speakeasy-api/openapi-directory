import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import worldgenerationjobsummary as shared_worldgenerationjobsummary


@dataclass_json
@dataclasses.dataclass
class ListWorldGenerationJobsResponse:
    world_generation_job_summaries: list[shared_worldgenerationjobsummary.WorldGenerationJobSummary] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('worldGenerationJobSummaries') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
