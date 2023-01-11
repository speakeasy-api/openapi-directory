import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import virtualinterface as shared_virtualinterface


@dataclass_json
@dataclasses.dataclass
class CreateTransitVirtualInterfaceResult:
    virtual_interface: Optional[shared_virtualinterface.VirtualInterface] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualInterface') }})
    
