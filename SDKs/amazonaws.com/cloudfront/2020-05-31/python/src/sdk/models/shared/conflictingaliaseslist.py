import dataclasses
from typing import Optional
from ..shared import conflictingaliases as shared_conflictingaliases


@dataclasses.dataclass
class ConflictingAliasesList:
    r"""ConflictingAliasesList
    A list of aliases (also called CNAMEs) and the CloudFront distributions and Amazon Web Services accounts that they are associated with. In the list, the distribution and account IDs are partially hidden, which allows you to identify the distributions and accounts that you own, but helps to protect the information of ones that you don’t own.
    """
    
    items: Optional[list[shared_conflictingaliases.ConflictingAliases]] = dataclasses.field(default=None)
    max_items: Optional[int] = dataclasses.field(default=None)
    next_marker: Optional[str] = dataclasses.field(default=None)
    quantity: Optional[int] = dataclasses.field(default=None)
    
