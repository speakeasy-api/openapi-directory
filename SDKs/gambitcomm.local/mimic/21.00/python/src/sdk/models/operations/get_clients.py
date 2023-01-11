import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetClientsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_clients_200_application_json_object: Optional[dict[str, int]] = dataclasses.field(default=None)
    
