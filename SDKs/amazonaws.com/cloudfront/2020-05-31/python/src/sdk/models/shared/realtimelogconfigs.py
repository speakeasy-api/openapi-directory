import dataclasses
from typing import Optional
from ..shared import realtimelogconfig as shared_realtimelogconfig


@dataclasses.dataclass
class RealtimeLogConfigs:
    r"""RealtimeLogConfigs
    A list of real-time log configurations.
    """
    
    is_truncated: bool = dataclasses.field()
    marker: str = dataclasses.field()
    max_items: int = dataclasses.field()
    items: Optional[list[shared_realtimelogconfig.RealtimeLogConfig]] = dataclasses.field(default=None)
    next_marker: Optional[str] = dataclasses.field(default=None)
    
