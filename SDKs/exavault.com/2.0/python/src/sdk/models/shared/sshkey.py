import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sshkeyattributes as shared_sshkeyattributes


@dataclass_json
@dataclasses.dataclass
class SSHKeyRelationshipsOwnerUserData:
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class SSHKeyRelationshipsOwnerUser:
    data: Optional[SSHKeyRelationshipsOwnerUserData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class SSHKeyRelationships:
    owner_user: Optional[SSHKeyRelationshipsOwnerUser] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownerUser') }})
    
class SSHKeyTypeEnum(str, Enum):
    SSH_KEY = "sshKey"


@dataclass_json
@dataclasses.dataclass
class SSHKey:
    r"""SSHKey
    Object representing an SSH Key associated with a user.
    """
    
    attributes: Optional[shared_sshkeyattributes.SSHKeyAttributes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    relationships: Optional[SSHKeyRelationships] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationships') }})
    type: Optional[SSHKeyTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
