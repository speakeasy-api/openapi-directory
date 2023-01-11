import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AssociateVirtualInterfaceRequest:
    connection_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionId') }})
    virtual_interface_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualInterfaceId') }})
    
