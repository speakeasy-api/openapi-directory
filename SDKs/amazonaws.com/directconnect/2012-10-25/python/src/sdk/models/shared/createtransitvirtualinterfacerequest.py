import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import newtransitvirtualinterface as shared_newtransitvirtualinterface


@dataclass_json
@dataclasses.dataclass
class CreateTransitVirtualInterfaceRequest:
    connection_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionId') }})
    new_transit_virtual_interface: shared_newtransitvirtualinterface.NewTransitVirtualInterface = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('newTransitVirtualInterface') }})
    
