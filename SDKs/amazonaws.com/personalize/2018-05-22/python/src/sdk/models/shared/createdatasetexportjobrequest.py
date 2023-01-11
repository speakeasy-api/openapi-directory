import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ingestionmode_enum as shared_ingestionmode_enum
from ..shared import datasetexportjoboutput as shared_datasetexportjoboutput


@dataclass_json
@dataclasses.dataclass
class CreateDatasetExportJobRequest:
    dataset_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasetArn') }})
    job_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobName') }})
    job_output: shared_datasetexportjoboutput.DatasetExportJobOutput = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobOutput') }})
    role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    ingestion_mode: Optional[shared_ingestionmode_enum.IngestionModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ingestionMode') }})
    
