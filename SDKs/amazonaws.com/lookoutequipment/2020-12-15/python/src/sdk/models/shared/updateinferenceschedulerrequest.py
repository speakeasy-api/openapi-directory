import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inferenceinputconfiguration as shared_inferenceinputconfiguration
from ..shared import inferenceoutputconfiguration as shared_inferenceoutputconfiguration
from ..shared import datauploadfrequency_enum as shared_datauploadfrequency_enum


@dataclass_json
@dataclasses.dataclass
class UpdateInferenceSchedulerRequest:
    inference_scheduler_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InferenceSchedulerName') }})
    data_delay_offset_in_minutes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataDelayOffsetInMinutes') }})
    data_input_configuration: Optional[shared_inferenceinputconfiguration.InferenceInputConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataInputConfiguration') }})
    data_output_configuration: Optional[shared_inferenceoutputconfiguration.InferenceOutputConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataOutputConfiguration') }})
    data_upload_frequency: Optional[shared_datauploadfrequency_enum.DataUploadFrequencyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataUploadFrequency') }})
    role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    
