import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import socketaddress as shared_socketaddress
from ..shared import endpointstatus_enum as shared_endpointstatus_enum


@dataclass_json
@dataclasses.dataclass
class DataflowEndpoint:
    r"""DataflowEndpoint
    Information about a dataflow endpoint.
    """
    
    address: Optional[shared_socketaddress.SocketAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    mtu: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mtu') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    status: Optional[shared_endpointstatus_enum.EndpointStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
