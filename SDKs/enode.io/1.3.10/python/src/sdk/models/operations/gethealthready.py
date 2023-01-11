import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetHealthReadyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_health_ready_503_application_json_string: Optional[str] = dataclasses.field(default=None)
    
