import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tunnel as shared_tunnel


@dataclass_json
@dataclasses.dataclass
class DescribeTunnelResponse:
    tunnel: Optional[shared_tunnel.Tunnel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tunnel') }})
    
