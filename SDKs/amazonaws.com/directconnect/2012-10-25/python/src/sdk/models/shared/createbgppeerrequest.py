import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import newbgppeer as shared_newbgppeer


@dataclass_json
@dataclasses.dataclass
class CreateBgpPeerRequest:
    new_bgp_peer: Optional[shared_newbgppeer.NewBgpPeer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newBGPPeer') }})
    virtual_interface_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualInterfaceId') }})
    
