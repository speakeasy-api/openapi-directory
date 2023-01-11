import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import iotjobabortconfig as shared_iotjobabortconfig
from ..shared import iotjobexecutionsrolloutconfig as shared_iotjobexecutionsrolloutconfig
from ..shared import iotjobtimeoutconfig as shared_iotjobtimeoutconfig


@dataclass_json
@dataclasses.dataclass
class DeploymentIoTJobConfiguration:
    r"""DeploymentIoTJobConfiguration
    Contains information about an IoT job configuration.
    """
    
    abort_config: Optional[shared_iotjobabortconfig.IoTJobAbortConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('abortConfig') }})
    job_executions_rollout_config: Optional[shared_iotjobexecutionsrolloutconfig.IoTJobExecutionsRolloutConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobExecutionsRolloutConfig') }})
    timeout_config: Optional[shared_iotjobtimeoutconfig.IoTJobTimeoutConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeoutConfig') }})
    
