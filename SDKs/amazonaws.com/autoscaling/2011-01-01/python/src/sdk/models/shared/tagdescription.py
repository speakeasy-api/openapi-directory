import dataclasses
from typing import Optional


@dataclasses.dataclass
class TagDescription:
    r"""TagDescription
    Describes a tag for an Auto Scaling group.
    """
    
    key: Optional[str] = dataclasses.field(default=None)
    propagate_at_launch: Optional[bool] = dataclasses.field(default=None)
    resource_id: Optional[str] = dataclasses.field(default=None)
    resource_type: Optional[str] = dataclasses.field(default=None)
    value: Optional[str] = dataclasses.field(default=None)
    
