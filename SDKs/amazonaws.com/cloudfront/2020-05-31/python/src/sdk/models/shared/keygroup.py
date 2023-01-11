import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from ..shared import keygroupconfig as shared_keygroupconfig


@dataclasses.dataclass
class KeyGroup:
    r"""KeyGroup
    <p>A key group.</p> <p>A key group contains a list of public keys that you can use with <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html\">CloudFront signed URLs and signed cookies</a>.</p>
    """
    
    id: str = dataclasses.field()
    key_group_config: shared_keygroupconfig.KeyGroupConfig = dataclasses.field()
    last_modified_time: datetime = dataclasses.field()
    
