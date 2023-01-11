import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from ..shared import publickeyconfig as shared_publickeyconfig


@dataclasses.dataclass
class PublicKey:
    r"""PublicKey
    A complex data type of public keys you add to CloudFront to use with features like field-level encryption.
    """
    
    created_time: datetime = dataclasses.field()
    id: str = dataclasses.field()
    public_key_config: shared_publickeyconfig.PublicKeyConfig = dataclasses.field()
    
