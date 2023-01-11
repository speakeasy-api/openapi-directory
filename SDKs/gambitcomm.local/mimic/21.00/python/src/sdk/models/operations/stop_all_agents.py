import dataclasses
from typing import Optional


@dataclasses.dataclass
class StopAllAgentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    stop_all_agents_200_application_json_object: Optional[dict[str, int]] = dataclasses.field(default=None)
    
