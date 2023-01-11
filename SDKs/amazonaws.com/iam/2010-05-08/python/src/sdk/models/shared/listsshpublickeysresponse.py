import dataclasses
from typing import Optional
from ..shared import sshpublickeymetadata as shared_sshpublickeymetadata


@dataclasses.dataclass
class ListSSHPublicKeysResponse:
    r"""ListSSHPublicKeysResponse
    Contains the response to a successful <a>ListSSHPublicKeys</a> request.
    """
    
    is_truncated: Optional[bool] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    ssh_public_keys: Optional[list[shared_sshpublickeymetadata.SSHPublicKeyMetadata]] = dataclasses.field(default=None)
    
