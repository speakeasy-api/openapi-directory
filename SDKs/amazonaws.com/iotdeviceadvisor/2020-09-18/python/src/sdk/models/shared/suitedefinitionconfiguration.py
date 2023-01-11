import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deviceundertest as shared_deviceundertest


@dataclass_json
@dataclasses.dataclass
class SuiteDefinitionConfiguration:
    r"""SuiteDefinitionConfiguration
    Gets Suite Definition Configuration.
    """
    
    device_permission_role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('devicePermissionRoleArn') }})
    devices: Optional[list[shared_deviceundertest.DeviceUnderTest]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('devices') }})
    intended_for_qualification: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intendedForQualification') }})
    root_group: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rootGroup') }})
    suite_definition_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suiteDefinitionName') }})
    
