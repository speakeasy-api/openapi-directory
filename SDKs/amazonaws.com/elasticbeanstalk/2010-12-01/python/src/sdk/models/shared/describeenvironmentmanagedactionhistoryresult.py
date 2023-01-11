import dataclasses
from typing import Optional
from ..shared import managedactionhistoryitem as shared_managedactionhistoryitem


@dataclasses.dataclass
class DescribeEnvironmentManagedActionHistoryResult:
    r"""DescribeEnvironmentManagedActionHistoryResult
    A result message containing a list of completed and failed managed actions.
    """
    
    managed_action_history_items: Optional[list[shared_managedactionhistoryitem.ManagedActionHistoryItem]] = dataclasses.field(default=None)
    next_token: Optional[str] = dataclasses.field(default=None)
    
