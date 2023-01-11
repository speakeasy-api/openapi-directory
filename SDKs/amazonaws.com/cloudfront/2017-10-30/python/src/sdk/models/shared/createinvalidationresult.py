import dataclasses
from typing import Optional
from ..shared import invalidation as shared_invalidation


@dataclasses.dataclass
class CreateInvalidationResult:
    r"""CreateInvalidationResult
    The returned result of the corresponding request.
    """
    
    invalidation: Optional[shared_invalidation.Invalidation] = dataclasses.field(default=None)
    
