import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reconnectenum_enum as shared_reconnectenum_enum


@dataclass_json
@dataclasses.dataclass
class ClientProperties:
    r"""ClientProperties
    Describes an Amazon WorkSpaces client.
    """
    
    reconnect_enabled: Optional[shared_reconnectenum_enum.ReconnectEnumEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReconnectEnabled') }})
    
