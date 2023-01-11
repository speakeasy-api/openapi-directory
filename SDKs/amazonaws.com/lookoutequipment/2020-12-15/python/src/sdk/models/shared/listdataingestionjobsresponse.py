import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dataingestionjobsummary as shared_dataingestionjobsummary


@dataclass_json
@dataclasses.dataclass
class ListDataIngestionJobsResponse:
    data_ingestion_job_summaries: Optional[list[shared_dataingestionjobsummary.DataIngestionJobSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataIngestionJobSummaries') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
