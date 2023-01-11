import dataclasses
from typing import Optional
from ..shared import keypairids as shared_keypairids


@dataclasses.dataclass
class SignerList:
    r"""SignerList
    A complex type that lists the AWS accounts that were included in the <code>TrustedSigners</code> complex type, as well as their active CloudFront key pair IDs, if any. 
    """
    
    aws_account_number: Optional[str] = dataclasses.field(default=None)
    key_pair_ids: Optional[shared_keypairids.KeyPairIds] = dataclasses.field(default=None)
    
