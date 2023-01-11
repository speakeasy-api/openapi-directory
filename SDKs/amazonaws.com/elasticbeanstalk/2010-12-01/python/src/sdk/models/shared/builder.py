import dataclasses
from typing import Optional


@dataclasses.dataclass
class Builder:
    r"""Builder
    The builder used to build the custom platform.
    """
    
    arn: Optional[str] = dataclasses.field(default=None)
    
