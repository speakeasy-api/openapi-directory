import dataclasses
from typing import Optional
from ..shared import invalidation as shared_invalidation


@dataclasses.dataclass
class GetInvalidationResult:
    r"""GetInvalidationResult
    The returned result of the corresponding request.
    """
    
    invalidation: Optional[shared_invalidation.Invalidation] = dataclasses.field(default=None)
    
