import dataclasses
from typing import Optional


@dataclasses.dataclass
class TooManyStreamingDistributions:
    r"""TooManyStreamingDistributions
    Processing your request would cause you to exceed the maximum number of streaming distributions allowed.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
