import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import grpctimeout as shared_grpctimeout
from ..shared import httptimeout as shared_httptimeout
from ..shared import tcptimeout as shared_tcptimeout


@dataclass_json
@dataclasses.dataclass
class ListenerTimeout:
    r"""ListenerTimeout
    An object that represents timeouts for different protocols.
    """
    
    grpc: Optional[shared_grpctimeout.GrpcTimeout] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grpc') }})
    http: Optional[shared_httptimeout.HTTPTimeout] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('http') }})
    http2: Optional[shared_httptimeout.HTTPTimeout] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('http2') }})
    tcp: Optional[shared_tcptimeout.TCPTimeout] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tcp') }})
    
