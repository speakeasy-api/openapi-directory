import dataclasses
from typing import Optional


@dataclasses.dataclass
class GenerateOrganizationsAccessReportResponse:
    job_id: Optional[str] = dataclasses.field(default=None)
    
