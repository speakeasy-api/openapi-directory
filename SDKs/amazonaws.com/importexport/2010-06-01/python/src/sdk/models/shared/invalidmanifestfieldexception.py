import dataclasses
from typing import Optional


@dataclasses.dataclass
class InvalidManifestFieldException:
    r"""InvalidManifestFieldException
    One or more manifest fields was invalid. Please correct and resubmit.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
