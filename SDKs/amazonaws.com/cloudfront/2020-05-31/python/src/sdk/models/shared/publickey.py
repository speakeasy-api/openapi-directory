import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from ..shared import publickeyconfig as shared_publickeyconfig


@dataclasses.dataclass
class PublicKey:
    r"""PublicKey
    A public key that you can use with <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html\">signed URLs and signed cookies</a>, or with <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html\">field-level encryption</a>.
    """
    
    created_time: datetime = dataclasses.field()
    id: str = dataclasses.field()
    public_key_config: shared_publickeyconfig.PublicKeyConfig = dataclasses.field()
    
