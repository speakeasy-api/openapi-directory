import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import devicepooltype_enum as shared_devicepooltype_enum


@dataclass_json
@dataclasses.dataclass
class ListDevicePoolsRequest:
    r"""ListDevicePoolsRequest
    Represents the result of a list device pools request.
    """
    
    arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    type: Optional[shared_devicepooltype_enum.DevicePoolTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
