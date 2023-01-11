import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import newprivatevirtualinterfaceallocation as shared_newprivatevirtualinterfaceallocation


@dataclass_json
@dataclasses.dataclass
class AllocatePrivateVirtualInterfaceRequest:
    connection_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionId') }})
    new_private_virtual_interface_allocation: shared_newprivatevirtualinterfaceallocation.NewPrivateVirtualInterfaceAllocation = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('newPrivateVirtualInterfaceAllocation') }})
    owner_account: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownerAccount') }})
    
