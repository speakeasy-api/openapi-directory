import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deviceundertest as shared_deviceundertest


@dataclass_json
@dataclasses.dataclass
class SuiteRunConfiguration:
    r"""SuiteRunConfiguration
    Gets suite run configuration.
    """
    
    primary_device: Optional[shared_deviceundertest.DeviceUnderTest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryDevice') }})
    selected_test_list: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectedTestList') }})
    
