import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import newpublicvirtualinterface as shared_newpublicvirtualinterface


@dataclass_json
@dataclasses.dataclass
class CreatePublicVirtualInterfaceRequest:
    connection_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionId') }})
    new_public_virtual_interface: shared_newpublicvirtualinterface.NewPublicVirtualInterface = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('newPublicVirtualInterface') }})
    
