import dataclasses
from typing import Optional


@dataclasses.dataclass
class MalformedManifestException:
    r"""MalformedManifestException
    Your manifest is not well-formed.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
