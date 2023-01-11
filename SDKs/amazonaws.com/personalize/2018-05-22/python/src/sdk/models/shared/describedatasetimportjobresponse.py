import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datasetimportjob as shared_datasetimportjob


@dataclass_json
@dataclasses.dataclass
class DescribeDatasetImportJobResponse:
    dataset_import_job: Optional[shared_datasetimportjob.DatasetImportJob] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasetImportJob') }})
    
