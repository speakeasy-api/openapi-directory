import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class KeyGroupConfig:
    r"""KeyGroupConfig
    <p>A key group configuration.</p> <p>A key group contains a list of public keys that you can use with <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html\">CloudFront signed URLs and signed cookies</a>.</p>
    """
    
    items: list[dict[str, Any]] = dataclasses.field()
    name: str = dataclasses.field()
    comment: Optional[str] = dataclasses.field(default=None)
    
