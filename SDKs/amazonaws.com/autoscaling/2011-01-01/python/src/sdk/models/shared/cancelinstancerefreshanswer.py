import dataclasses
from typing import Optional


@dataclasses.dataclass
class CancelInstanceRefreshAnswer:
    instance_refresh_id: Optional[str] = dataclasses.field(default=None)
    
