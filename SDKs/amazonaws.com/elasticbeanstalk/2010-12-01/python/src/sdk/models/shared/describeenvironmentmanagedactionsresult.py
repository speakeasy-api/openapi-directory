import dataclasses
from typing import Optional
from ..shared import managedaction as shared_managedaction


@dataclasses.dataclass
class DescribeEnvironmentManagedActionsResult:
    r"""DescribeEnvironmentManagedActionsResult
    The result message containing a list of managed actions.
    """
    
    managed_actions: Optional[list[shared_managedaction.ManagedAction]] = dataclasses.field(default=None)
    
