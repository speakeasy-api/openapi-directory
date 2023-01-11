import dataclasses
from typing import Optional
from ..shared import healthcheckread as shared_healthcheckread


@dataclasses.dataclass
class GetHealthCheckResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    health_check_read: Optional[shared_healthcheckread.HealthCheckRead] = dataclasses.field(default=None)
    
