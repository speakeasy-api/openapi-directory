from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ExecuteWebhookResponse:
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    status: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    status_code: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status_code' }})
    timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp' }})
    
