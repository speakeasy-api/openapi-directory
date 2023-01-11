import dataclasses
from typing import Optional


@dataclasses.dataclass
class PublicKeyConfig:
    r"""PublicKeyConfig
    Configuration information about a public key that you can use with <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html\">signed URLs and signed cookies</a>, or with <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html\">field-level encryption</a>.
    """
    
    caller_reference: str = dataclasses.field()
    encoded_key: str = dataclasses.field()
    name: str = dataclasses.field()
    comment: Optional[str] = dataclasses.field(default=None)
    
