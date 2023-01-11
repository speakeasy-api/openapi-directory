import dataclasses
from typing import Optional


@dataclasses.dataclass
class MultipleRegionsException:
    r"""MultipleRegionsException
    Your manifest file contained buckets from multiple regions. A job is restricted to buckets from one region. Please correct and resubmit.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
