import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import vmmanagertype_enum as shared_vmmanagertype_enum
from ..shared import vmserveraddress as shared_vmserveraddress


@dataclass_json
@dataclasses.dataclass
class VMServer:
    r"""VMServer
    Represents a VM server.
    """
    
    vm_manager_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmManagerName') }})
    vm_manager_type: Optional[shared_vmmanagertype_enum.VMManagerTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmManagerType') }})
    vm_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmName') }})
    vm_path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmPath') }})
    vm_server_address: Optional[shared_vmserveraddress.VMServerAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmServerAddress') }})
    
