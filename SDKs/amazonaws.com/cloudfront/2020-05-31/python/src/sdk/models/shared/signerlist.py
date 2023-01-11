import dataclasses
from typing import Optional
from ..shared import keypairids as shared_keypairids


@dataclasses.dataclass
class SignerList:
    r"""SignerList
    A list of accounts and the active CloudFront key pairs in each account that CloudFront can use to verify the signatures of signed URLs and signed cookies.
    """
    
    aws_account_number: Optional[str] = dataclasses.field(default=None)
    key_pair_ids: Optional[shared_keypairids.KeyPairIds] = dataclasses.field(default=None)
    
