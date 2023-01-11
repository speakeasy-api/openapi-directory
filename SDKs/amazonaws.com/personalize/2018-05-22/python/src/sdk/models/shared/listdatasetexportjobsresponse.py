import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datasetexportjobsummary as shared_datasetexportjobsummary


@dataclass_json
@dataclasses.dataclass
class ListDatasetExportJobsResponse:
    dataset_export_jobs: Optional[list[shared_datasetexportjobsummary.DatasetExportJobSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasetExportJobs') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
