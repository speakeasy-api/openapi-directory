import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accesspropertyvalue_enum as shared_accesspropertyvalue_enum


@dataclass_json
@dataclasses.dataclass
class WorkspaceAccessProperties:
    r"""WorkspaceAccessProperties
    The device types and operating systems that can be used to access a WorkSpace. For more information, see <a href=\"https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-network-requirements.html\">Amazon WorkSpaces Client Network Requirements</a>.
    """
    
    device_type_android: Optional[shared_accesspropertyvalue_enum.AccessPropertyValueEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceTypeAndroid') }})
    device_type_chrome_os: Optional[shared_accesspropertyvalue_enum.AccessPropertyValueEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceTypeChromeOs') }})
    device_type_ios: Optional[shared_accesspropertyvalue_enum.AccessPropertyValueEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceTypeIos') }})
    device_type_linux: Optional[shared_accesspropertyvalue_enum.AccessPropertyValueEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceTypeLinux') }})
    device_type_osx: Optional[shared_accesspropertyvalue_enum.AccessPropertyValueEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceTypeOsx') }})
    device_type_web: Optional[shared_accesspropertyvalue_enum.AccessPropertyValueEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceTypeWeb') }})
    device_type_windows: Optional[shared_accesspropertyvalue_enum.AccessPropertyValueEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceTypeWindows') }})
    device_type_zero_client: Optional[shared_accesspropertyvalue_enum.AccessPropertyValueEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceTypeZeroClient') }})
    
