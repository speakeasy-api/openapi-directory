import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inferenceinputconfiguration as shared_inferenceinputconfiguration
from ..shared import inferenceoutputconfiguration as shared_inferenceoutputconfiguration
from ..shared import datauploadfrequency_enum as shared_datauploadfrequency_enum
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class CreateInferenceSchedulerRequest:
    client_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientToken') }})
    data_input_configuration: shared_inferenceinputconfiguration.InferenceInputConfiguration = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataInputConfiguration') }})
    data_output_configuration: shared_inferenceoutputconfiguration.InferenceOutputConfiguration = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataOutputConfiguration') }})
    data_upload_frequency: shared_datauploadfrequency_enum.DataUploadFrequencyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataUploadFrequency') }})
    inference_scheduler_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InferenceSchedulerName') }})
    model_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelName') }})
    role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    data_delay_offset_in_minutes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataDelayOffsetInMinutes') }})
    server_side_kms_key_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerSideKmsKeyId') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
