import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import worldexportjobsummary as shared_worldexportjobsummary


@dataclass_json
@dataclasses.dataclass
class ListWorldExportJobsResponse:
    world_export_job_summaries: list[shared_worldexportjobsummary.WorldExportJobSummary] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('worldExportJobSummaries') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
