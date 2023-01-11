import dataclasses
from typing import Optional


@dataclasses.dataclass
class ModifierGroupFilter:
    modifier_group_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'modifier_group_id' }})
    
