import dataclasses
from typing import Optional


@dataclasses.dataclass
class OpenIDConnectProviderListEntry:
    r"""OpenIDConnectProviderListEntry
    Contains the Amazon Resource Name (ARN) for an IAM OpenID Connect provider.
    """
    
    arn: Optional[str] = dataclasses.field(default=None)
    
