import dataclasses
from typing import Optional
from ..shared import airtravelmultilegrequest as shared_airtravelmultilegrequest


AIRTRAVEL_MULTILEG_SERVERS = [
	"http://api.climatekuul.com:8000/footprint",
]


@dataclasses.dataclass
class AirtravelMultilegRequest:
    request: shared_airtravelmultilegrequest.AirtravelMultilegRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class AirtravelMultilegResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
