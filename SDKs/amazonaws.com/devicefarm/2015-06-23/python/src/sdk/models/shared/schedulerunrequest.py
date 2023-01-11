import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import schedulerunconfiguration as shared_schedulerunconfiguration
from ..shared import deviceselectionconfiguration as shared_deviceselectionconfiguration
from ..shared import executionconfiguration as shared_executionconfiguration
from ..shared import scheduleruntest as shared_scheduleruntest


@dataclass_json
@dataclasses.dataclass
class ScheduleRunRequest:
    r"""ScheduleRunRequest
    Represents a request to the schedule run operation.
    """
    
    project_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectArn') }})
    test: shared_scheduleruntest.ScheduleRunTest = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('test') }})
    app_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appArn') }})
    configuration: Optional[shared_schedulerunconfiguration.ScheduleRunConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configuration') }})
    device_pool_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('devicePoolArn') }})
    device_selection_configuration: Optional[shared_deviceselectionconfiguration.DeviceSelectionConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceSelectionConfiguration') }})
    execution_configuration: Optional[shared_executionconfiguration.ExecutionConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionConfiguration') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
