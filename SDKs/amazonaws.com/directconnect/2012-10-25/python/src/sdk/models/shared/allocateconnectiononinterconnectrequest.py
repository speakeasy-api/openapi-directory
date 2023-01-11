import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AllocateConnectionOnInterconnectRequest:
    bandwidth: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandwidth') }})
    connection_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionName') }})
    interconnect_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interconnectId') }})
    owner_account: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownerAccount') }})
    vlan: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('vlan') }})
    
