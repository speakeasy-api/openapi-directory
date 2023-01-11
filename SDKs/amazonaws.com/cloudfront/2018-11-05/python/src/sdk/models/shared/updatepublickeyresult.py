import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import publickey as shared_publickey


@dataclasses.dataclass
class UpdatePublicKeyResult:
    public_key: Optional[shared_publickey.PublicKey] = dataclasses.field(default=None)
    
