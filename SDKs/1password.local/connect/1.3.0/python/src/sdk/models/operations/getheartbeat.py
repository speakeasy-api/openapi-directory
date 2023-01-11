import dataclasses
from typing import Optional


GET_HEARTBEAT_SERVERS = [
	"http://localhost:8080",
]


@dataclasses.dataclass
class GetHeartbeatRequest:
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class GetHeartbeatResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_heartbeat_200_text_plain_string: Optional[str] = dataclasses.field(default=None)
    
