import dataclasses
from typing import Optional


@dataclasses.dataclass
class OptionGroupMembershipList:
    r"""OptionGroupMembershipList
    Provides information on the option groups the DB instance is a member of.
    """
    
    option_group_name: Optional[str] = dataclasses.field(default=None)
    status: Optional[str] = dataclasses.field(default=None)
    
