import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import statustype_enum as shared_statustype_enum


@dataclasses.dataclass
class SSHPublicKey:
    r"""SSHPublicKey
    <p>Contains information about an SSH public key.</p> <p>This data type is used as a response element in the <a>GetSSHPublicKey</a> and <a>UploadSSHPublicKey</a> operations. </p>
    """
    
    fingerprint: str = dataclasses.field()
    ssh_public_key_body: str = dataclasses.field()
    ssh_public_key_id: str = dataclasses.field()
    status: shared_statustype_enum.StatusTypeEnum = dataclasses.field()
    user_name: str = dataclasses.field()
    upload_date: Optional[datetime] = dataclasses.field(default=None)
    
