import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import activedirectorycomputerattribute as shared_activedirectorycomputerattribute


@dataclass_json
@dataclasses.dataclass
class ActiveDirectoryConfiguration:
    r"""ActiveDirectoryConfiguration
    The configuration for a Microsoft Active Directory (Microsoft AD) studio resource.
    """
    
    computer_attributes: Optional[list[shared_activedirectorycomputerattribute.ActiveDirectoryComputerAttribute]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computerAttributes') }})
    directory_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directoryId') }})
    organizational_unit_distinguished_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organizationalUnitDistinguishedName') }})
    
