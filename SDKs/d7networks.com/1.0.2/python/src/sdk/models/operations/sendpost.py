import dataclasses
from typing import Any,Optional
from ..shared import sendsmsrequest as shared_sendsmsrequest


@dataclasses.dataclass
class SendPostHeaders:
    accept: str = dataclasses.field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    content_type: str = dataclasses.field(metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SendPostRequest:
    headers: SendPostHeaders = dataclasses.field()
    request: shared_sendsmsrequest.SendSmsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SendPostResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    send_post_500_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
