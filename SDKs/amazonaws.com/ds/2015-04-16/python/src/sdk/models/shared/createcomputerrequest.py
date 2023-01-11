import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attribute as shared_attribute


@dataclass_json
@dataclasses.dataclass
class CreateComputerRequest:
    r"""CreateComputerRequest
    Contains the inputs for the <a>CreateComputer</a> operation.
    """
    
    computer_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComputerName') }})
    directory_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryId') }})
    password: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Password') }})
    computer_attributes: Optional[list[shared_attribute.Attribute]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComputerAttributes') }})
    organizational_unit_distinguished_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationalUnitDistinguishedName') }})
    
