import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CopyImageResult:
    r"""CopyImageResult
    Contains the output of CopyImage.
    """
    
    image_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
