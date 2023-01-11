import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import newpublicvirtualinterfaceallocation as shared_newpublicvirtualinterfaceallocation


@dataclass_json
@dataclasses.dataclass
class AllocatePublicVirtualInterfaceRequest:
    connection_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionId') }})
    new_public_virtual_interface_allocation: shared_newpublicvirtualinterfaceallocation.NewPublicVirtualInterfaceAllocation = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('newPublicVirtualInterfaceAllocation') }})
    owner_account: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownerAccount') }})
    
