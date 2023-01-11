import dataclasses
from typing import Optional


@dataclasses.dataclass
class GenerateServiceLastAccessedDetailsResponse:
    job_id: Optional[str] = dataclasses.field(default=None)
    
