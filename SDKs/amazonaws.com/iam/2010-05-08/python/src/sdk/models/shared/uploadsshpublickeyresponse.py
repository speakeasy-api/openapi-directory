import dataclasses
from typing import Optional
from ..shared import sshpublickey as shared_sshpublickey


@dataclasses.dataclass
class UploadSSHPublicKeyResponse:
    r"""UploadSSHPublicKeyResponse
    Contains the response to a successful <a>UploadSSHPublicKey</a> request.
    """
    
    ssh_public_key: Optional[shared_sshpublickey.SSHPublicKey] = dataclasses.field(default=None)
    
