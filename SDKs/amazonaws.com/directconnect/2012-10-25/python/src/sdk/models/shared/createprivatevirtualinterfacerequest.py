import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import newprivatevirtualinterface as shared_newprivatevirtualinterface


@dataclass_json
@dataclasses.dataclass
class CreatePrivateVirtualInterfaceRequest:
    connection_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionId') }})
    new_private_virtual_interface: shared_newprivatevirtualinterface.NewPrivateVirtualInterface = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('newPrivateVirtualInterface') }})
    
