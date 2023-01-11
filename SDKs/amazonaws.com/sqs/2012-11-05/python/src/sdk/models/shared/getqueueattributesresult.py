import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetQueueAttributesResult:
    r"""GetQueueAttributesResult
    A list of returned queue attributes.
    """
    
    attributes: Optional[dict[str, str]] = dataclasses.field(default=None)
    
