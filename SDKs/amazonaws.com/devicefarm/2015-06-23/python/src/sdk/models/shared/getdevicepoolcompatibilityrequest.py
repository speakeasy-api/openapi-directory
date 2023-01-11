import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import schedulerunconfiguration as shared_schedulerunconfiguration
from ..shared import scheduleruntest as shared_scheduleruntest
from ..shared import testtype_enum as shared_testtype_enum


@dataclass_json
@dataclasses.dataclass
class GetDevicePoolCompatibilityRequest:
    r"""GetDevicePoolCompatibilityRequest
    Represents a request to the get device pool compatibility operation.
    """
    
    device_pool_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('devicePoolArn') }})
    app_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appArn') }})
    configuration: Optional[shared_schedulerunconfiguration.ScheduleRunConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configuration') }})
    test: Optional[shared_scheduleruntest.ScheduleRunTest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('test') }})
    test_type: Optional[shared_testtype_enum.TestTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testType') }})
    
