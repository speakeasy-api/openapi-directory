import dataclasses
from typing import Optional


@dataclasses.dataclass
class MaxAgeRule:
    r"""MaxAgeRule
    A lifecycle rule that deletes application versions after the specified number of days.
    """
    
    enabled: bool = dataclasses.field()
    delete_source_from_s3: Optional[bool] = dataclasses.field(default=None)
    max_age_in_days: Optional[int] = dataclasses.field(default=None)
    
