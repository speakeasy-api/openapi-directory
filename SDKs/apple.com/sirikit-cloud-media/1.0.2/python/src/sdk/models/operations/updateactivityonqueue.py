import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import updateactivityrequest as shared_updateactivityrequest
from ..shared import updateactivityresponse as shared_updateactivityresponse


@dataclasses.dataclass
class UpdateActivityOnQueueHeaders:
    accept_language: str = dataclasses.field(metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    user_agent: str = dataclasses.field(metadata={'header': { 'field_name': 'User-Agent', 'style': 'simple', 'explode': False }})
    x_applecloudextension_session_id: str = dataclasses.field(metadata={'header': { 'field_name': 'x-applecloudextension-session-id', 'style': 'simple', 'explode': False }})
    x_applecloudextension_retry_count: Optional[float] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-applecloudextension-retry-count', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateActivityOnQueueRequest:
    headers: UpdateActivityOnQueueHeaders = dataclasses.field()
    request: Optional[shared_updateactivityrequest.UpdateActivityRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateActivityOnQueueResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_activity_response: Optional[shared_updateactivityresponse.UpdateActivityResponse] = dataclasses.field(default=None)
    
