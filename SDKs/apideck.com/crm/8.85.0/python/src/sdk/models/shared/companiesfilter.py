import dataclasses
from typing import Optional


@dataclasses.dataclass
class CompaniesFilter:
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name' }})
    
