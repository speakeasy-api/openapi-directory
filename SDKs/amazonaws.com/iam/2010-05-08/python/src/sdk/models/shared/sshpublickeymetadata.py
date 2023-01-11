import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from ..shared import statustype_enum as shared_statustype_enum


@dataclasses.dataclass
class SSHPublicKeyMetadata:
    r"""SSHPublicKeyMetadata
    <p>Contains information about an SSH public key, without the key's body or fingerprint.</p> <p>This data type is used as a response element in the <a>ListSSHPublicKeys</a> operation.</p>
    """
    
    ssh_public_key_id: str = dataclasses.field()
    status: shared_statustype_enum.StatusTypeEnum = dataclasses.field()
    upload_date: datetime = dataclasses.field()
    user_name: str = dataclasses.field()
    
