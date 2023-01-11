import dataclasses
from typing import Optional


@dataclasses.dataclass
class ResizeInfo:
    r"""ResizeInfo
    Describes a resize operation.
    """
    
    allow_cancel_resize: Optional[bool] = dataclasses.field(default=None)
    resize_type: Optional[str] = dataclasses.field(default=None)
    
