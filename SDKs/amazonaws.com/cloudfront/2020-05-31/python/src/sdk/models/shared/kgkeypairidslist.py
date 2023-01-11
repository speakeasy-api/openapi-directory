import dataclasses
from typing import Optional
from ..shared import keypairids as shared_keypairids


@dataclasses.dataclass
class KgKeyPairIdsList:
    r"""KgKeyPairIdsList
    A list of identifiers for the public keys that CloudFront can use to verify the signatures of signed URLs and signed cookies.
    """
    
    key_group_id: Optional[str] = dataclasses.field(default=None)
    key_pair_ids: Optional[shared_keypairids.KeyPairIds] = dataclasses.field(default=None)
    
