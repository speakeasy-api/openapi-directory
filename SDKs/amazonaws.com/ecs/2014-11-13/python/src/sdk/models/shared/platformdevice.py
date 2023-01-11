import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import platformdevicetype_enum as shared_platformdevicetype_enum


@dataclass_json
@dataclasses.dataclass
class PlatformDevice:
    r"""PlatformDevice
    The devices that are available on the container instance. The only supported device type is a GPU.
    """
    
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: shared_platformdevicetype_enum.PlatformDeviceTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
