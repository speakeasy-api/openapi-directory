import dataclasses
from typing import Optional


@dataclasses.dataclass
class MissingManifestFieldException:
    r"""MissingManifestFieldException
    One or more required fields were missing from the manifest file. Please correct and resubmit.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
