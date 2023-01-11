import dataclasses
from ..shared import bulksmsrequest as shared_bulksmsrequest


@dataclasses.dataclass
class SendbatchPostHeaders:
    accept: str = dataclasses.field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    content_type: str = dataclasses.field(metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SendbatchPostRequest:
    headers: SendbatchPostHeaders = dataclasses.field()
    request: shared_bulksmsrequest.BulkSmsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SendbatchPostResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
