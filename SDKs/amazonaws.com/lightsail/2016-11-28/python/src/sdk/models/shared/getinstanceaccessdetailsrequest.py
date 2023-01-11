import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import instanceaccessprotocol_enum as shared_instanceaccessprotocol_enum


@dataclass_json
@dataclasses.dataclass
class GetInstanceAccessDetailsRequest:
    instance_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceName') }})
    protocol: Optional[shared_instanceaccessprotocol_enum.InstanceAccessProtocolEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    
