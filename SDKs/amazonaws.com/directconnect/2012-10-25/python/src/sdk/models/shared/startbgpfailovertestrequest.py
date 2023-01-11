import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class StartBgpFailoverTestRequest:
    virtual_interface_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualInterfaceId') }})
    bgp_peers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bgpPeers') }})
    test_duration_in_minutes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testDurationInMinutes') }})
    
