import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datasetimportjobsummary as shared_datasetimportjobsummary


@dataclass_json
@dataclasses.dataclass
class ListDatasetImportJobsResponse:
    dataset_import_jobs: Optional[list[shared_datasetimportjobsummary.DatasetImportJobSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasetImportJobs') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
