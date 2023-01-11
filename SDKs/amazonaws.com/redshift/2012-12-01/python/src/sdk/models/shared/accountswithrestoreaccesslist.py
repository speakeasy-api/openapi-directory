import dataclasses
from typing import Optional


@dataclasses.dataclass
class AccountsWithRestoreAccessList:
    r"""AccountsWithRestoreAccessList
    Describes an Amazon Web Services account authorized to restore a snapshot.
    """
    
    account_alias: Optional[str] = dataclasses.field(default=None)
    account_id: Optional[str] = dataclasses.field(default=None)
    
