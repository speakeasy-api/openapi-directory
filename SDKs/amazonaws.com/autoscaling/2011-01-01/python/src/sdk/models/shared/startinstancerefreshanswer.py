import dataclasses
from typing import Optional


@dataclasses.dataclass
class StartInstanceRefreshAnswer:
    instance_refresh_id: Optional[str] = dataclasses.field(default=None)
    
