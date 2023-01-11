import dataclasses
from typing import Optional
from ..shared import signerlist as shared_signerlist


@dataclasses.dataclass
class ActiveTrustedSigners:
    r"""ActiveTrustedSigners
    A list of accounts and the active CloudFront key pairs in each account that CloudFront can use to verify the signatures of signed URLs and signed cookies.
    """
    
    enabled: bool = dataclasses.field()
    quantity: int = dataclasses.field()
    items: Optional[list[shared_signerlist.SignerList]] = dataclasses.field(default=None)
    
