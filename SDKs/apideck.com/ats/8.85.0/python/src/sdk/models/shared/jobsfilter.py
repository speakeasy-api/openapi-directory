import dataclasses
from typing import Optional


@dataclasses.dataclass
class JobsFilter:
    job_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'job_id' }})
    
