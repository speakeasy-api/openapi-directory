import dataclasses
from typing import Optional


@dataclasses.dataclass
class InvalidParameterException:
    r"""InvalidParameterException
    One or more parameters had an invalid value.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
