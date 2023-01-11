import dataclasses
from typing import Optional


@dataclasses.dataclass
class RefreshPreferences:
    r"""RefreshPreferences
    Describes the preferences for an instance refresh.
    """
    
    checkpoint_delay: Optional[int] = dataclasses.field(default=None)
    checkpoint_percentages: Optional[list[int]] = dataclasses.field(default=None)
    instance_warmup: Optional[int] = dataclasses.field(default=None)
    min_healthy_percentage: Optional[int] = dataclasses.field(default=None)
    skip_matching: Optional[bool] = dataclasses.field(default=None)
    
