import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ingestioninputconfiguration as shared_ingestioninputconfiguration
from ..shared import ingestionjobstatus_enum as shared_ingestionjobstatus_enum


@dataclass_json
@dataclasses.dataclass
class DataIngestionJobSummary:
    r"""DataIngestionJobSummary
    Provides information about a specified data ingestion job, including dataset information, data ingestion configuration, and status. 
    """
    
    dataset_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatasetArn') }})
    dataset_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatasetName') }})
    ingestion_input_configuration: Optional[shared_ingestioninputconfiguration.IngestionInputConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IngestionInputConfiguration') }})
    job_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobId') }})
    status: Optional[shared_ingestionjobstatus_enum.IngestionJobStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
