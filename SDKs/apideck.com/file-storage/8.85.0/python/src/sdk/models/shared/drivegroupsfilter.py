import dataclasses
from typing import Optional


@dataclasses.dataclass
class DriveGroupsFilter:
    parent_group_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'parent_group_id' }})
    
