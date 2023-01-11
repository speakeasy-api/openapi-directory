import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import activedirectorycomputerattribute as shared_activedirectorycomputerattribute


@dataclass_json
@dataclasses.dataclass
class LaunchProfileInitializationActiveDirectory:
    computer_attributes: Optional[list[shared_activedirectorycomputerattribute.ActiveDirectoryComputerAttribute]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computerAttributes') }})
    directory_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directoryId') }})
    directory_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directoryName') }})
    dns_ip_addresses: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dnsIpAddresses') }})
    organizational_unit_distinguished_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organizationalUnitDistinguishedName') }})
    studio_component_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('studioComponentId') }})
    studio_component_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('studioComponentName') }})
    
