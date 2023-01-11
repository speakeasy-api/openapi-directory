import dataclasses
from typing import Optional


@dataclasses.dataclass
class BucketPermissionException:
    r"""BucketPermissionException
    The account specified does not have the appropriate bucket permissions.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
