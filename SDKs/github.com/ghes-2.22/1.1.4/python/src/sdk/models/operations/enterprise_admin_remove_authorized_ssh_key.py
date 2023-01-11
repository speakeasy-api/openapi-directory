import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ssh_key as shared_ssh_key


@dataclass_json
@dataclasses.dataclass
class EnterpriseAdminRemoveAuthorizedSSHKeyRequestBody:
    authorized_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorized_key') }})
    

@dataclasses.dataclass
class EnterpriseAdminRemoveAuthorizedSSHKeyRequest:
    request: Optional[EnterpriseAdminRemoveAuthorizedSSHKeyRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class EnterpriseAdminRemoveAuthorizedSSHKeyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    ssh_keys: Optional[list[shared_ssh_key.SSHKey]] = dataclasses.field(default=None)
    
