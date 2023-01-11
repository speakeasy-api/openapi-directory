import dataclasses
from typing import Optional
from ..shared import ssh_key as shared_ssh_key


@dataclasses.dataclass
class EnterpriseAdminGetAllAuthorizedSSHKeysResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    ssh_keys: Optional[list[shared_ssh_key.SSHKey]] = dataclasses.field(default=None)
    
