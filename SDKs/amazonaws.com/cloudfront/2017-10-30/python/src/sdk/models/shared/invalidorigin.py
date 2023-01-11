import dataclasses
from typing import Optional


@dataclasses.dataclass
class InvalidOrigin:
    r"""InvalidOrigin
    The Amazon S3 origin server specified does not refer to a valid Amazon S3 bucket.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
