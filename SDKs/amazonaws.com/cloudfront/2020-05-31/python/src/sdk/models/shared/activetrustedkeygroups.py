import dataclasses
from typing import Optional
from ..shared import kgkeypairidslist as shared_kgkeypairidslist


@dataclasses.dataclass
class ActiveTrustedKeyGroups:
    r"""ActiveTrustedKeyGroups
    A list of key groups, and the public keys in each key group, that CloudFront can use to verify the signatures of signed URLs and signed cookies.
    """
    
    enabled: bool = dataclasses.field()
    quantity: int = dataclasses.field()
    items: Optional[list[shared_kgkeypairidslist.KgKeyPairIdsList]] = dataclasses.field(default=None)
    
