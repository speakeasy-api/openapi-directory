import dataclasses
from typing import Optional
from ..shared import publickeysummarylist as shared_publickeysummarylist


@dataclasses.dataclass
class PublicKeyList:
    r"""PublicKeyList
    A list of public keys you've added to CloudFront to use with features like field-level encryption.
    """
    
    max_items: int = dataclasses.field()
    quantity: int = dataclasses.field()
    items: Optional[list[shared_publickeysummarylist.PublicKeySummaryList]] = dataclasses.field(default=None)
    next_marker: Optional[str] = dataclasses.field(default=None)
    
