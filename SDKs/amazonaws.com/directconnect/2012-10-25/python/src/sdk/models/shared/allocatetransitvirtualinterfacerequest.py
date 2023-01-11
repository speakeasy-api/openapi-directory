import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import newtransitvirtualinterfaceallocation as shared_newtransitvirtualinterfaceallocation


@dataclass_json
@dataclasses.dataclass
class AllocateTransitVirtualInterfaceRequest:
    connection_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionId') }})
    new_transit_virtual_interface_allocation: shared_newtransitvirtualinterfaceallocation.NewTransitVirtualInterfaceAllocation = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('newTransitVirtualInterfaceAllocation') }})
    owner_account: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownerAccount') }})
    
