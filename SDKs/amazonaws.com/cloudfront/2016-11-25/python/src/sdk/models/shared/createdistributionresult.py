import dataclasses
from typing import Optional
from ..shared import distribution as shared_distribution


@dataclasses.dataclass
class CreateDistributionResult:
    r"""CreateDistributionResult
    The returned result of the corresponding request.
    """
    
    distribution: Optional[shared_distribution.Distribution] = dataclasses.field(default=None)
    
