import dataclasses
from typing import Optional


@dataclasses.dataclass
class PublicKeyConfig:
    r"""PublicKeyConfig
    Information about a public key you add to CloudFront to use with features like field-level encryption.
    """
    
    caller_reference: str = dataclasses.field()
    encoded_key: str = dataclasses.field()
    name: str = dataclasses.field()
    comment: Optional[str] = dataclasses.field(default=None)
    
