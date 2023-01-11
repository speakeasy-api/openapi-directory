import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import portprotocol_enum as shared_portprotocol_enum


@dataclass_json
@dataclasses.dataclass
class PortMapping:
    r"""PortMapping
    An object representing a virtual node listener port mapping.
    """
    
    port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    protocol: Optional[shared_portprotocol_enum.PortProtocolEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    
