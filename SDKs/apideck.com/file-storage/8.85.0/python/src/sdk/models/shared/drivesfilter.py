import dataclasses
from typing import Optional


@dataclasses.dataclass
class DrivesFilter:
    group_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'group_id' }})
    
