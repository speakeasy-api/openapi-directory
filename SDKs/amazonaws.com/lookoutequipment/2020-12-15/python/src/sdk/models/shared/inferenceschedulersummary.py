import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datauploadfrequency_enum as shared_datauploadfrequency_enum
from ..shared import inferenceschedulerstatus_enum as shared_inferenceschedulerstatus_enum


@dataclass_json
@dataclasses.dataclass
class InferenceSchedulerSummary:
    r"""InferenceSchedulerSummary
    Contains information about the specific inference scheduler, including data delay offset, model name and ARN, status, and so on. 
    """
    
    data_delay_offset_in_minutes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataDelayOffsetInMinutes') }})
    data_upload_frequency: Optional[shared_datauploadfrequency_enum.DataUploadFrequencyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataUploadFrequency') }})
    inference_scheduler_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InferenceSchedulerArn') }})
    inference_scheduler_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InferenceSchedulerName') }})
    model_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelArn') }})
    model_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelName') }})
    status: Optional[shared_inferenceschedulerstatus_enum.InferenceSchedulerStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
