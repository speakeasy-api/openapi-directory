import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datasetexportjob as shared_datasetexportjob


@dataclass_json
@dataclasses.dataclass
class DescribeDatasetExportJobResponse:
    dataset_export_job: Optional[shared_datasetexportjob.DatasetExportJob] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasetExportJob') }})
    
