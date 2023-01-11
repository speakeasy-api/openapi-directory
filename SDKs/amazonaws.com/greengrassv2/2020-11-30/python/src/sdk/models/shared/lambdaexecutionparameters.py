import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lambdaeventsource as shared_lambdaeventsource
from ..shared import lambdainputpayloadencodingtype_enum as shared_lambdainputpayloadencodingtype_enum
from ..shared import lambdalinuxprocessparams as shared_lambdalinuxprocessparams


@dataclass_json
@dataclasses.dataclass
class LambdaExecutionParameters:
    r"""LambdaExecutionParameters
    Contains parameters for a Lambda function that runs on IoT Greengrass.
    """
    
    environment_variables: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentVariables') }})
    event_sources: Optional[list[shared_lambdaeventsource.LambdaEventSource]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventSources') }})
    exec_args: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('execArgs') }})
    input_payload_encoding_type: Optional[shared_lambdainputpayloadencodingtype_enum.LambdaInputPayloadEncodingTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputPayloadEncodingType') }})
    linux_process_params: Optional[shared_lambdalinuxprocessparams.LambdaLinuxProcessParams] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linuxProcessParams') }})
    max_idle_time_in_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxIdleTimeInSeconds') }})
    max_instances_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxInstancesCount') }})
    max_queue_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxQueueSize') }})
    pinned: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pinned') }})
    status_timeout_in_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusTimeoutInSeconds') }})
    timeout_in_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeoutInSeconds') }})
    
