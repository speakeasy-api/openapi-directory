import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import iceserver as shared_iceserver


@dataclass_json
@dataclasses.dataclass
class GetIceServerConfigResponse:
    ice_server_list: Optional[list[shared_iceserver.IceServer]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IceServerList') }})
    
