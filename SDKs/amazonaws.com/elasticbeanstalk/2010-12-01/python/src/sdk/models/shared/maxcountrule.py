import dataclasses
from typing import Optional


@dataclasses.dataclass
class MaxCountRule:
    r"""MaxCountRule
    A lifecycle rule that deletes the oldest application version when the maximum count is exceeded.
    """
    
    enabled: bool = dataclasses.field()
    delete_source_from_s3: Optional[bool] = dataclasses.field(default=None)
    max_count: Optional[int] = dataclasses.field(default=None)
    
