import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DomainJoinInfo:
    r"""DomainJoinInfo
    Describes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.
    """
    
    directory_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryName') }})
    organizational_unit_distinguished_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationalUnitDistinguishedName') }})
    
