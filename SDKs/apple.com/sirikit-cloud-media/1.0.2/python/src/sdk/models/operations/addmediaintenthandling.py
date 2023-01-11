import dataclasses
from typing import Any,Optional
from ..shared import addmediaintenthandlinginvocation as shared_addmediaintenthandlinginvocation
from ..shared import addmediaintenthandlingresolvemediaitemsinvocationresponse as shared_addmediaintenthandlingresolvemediaitemsinvocationresponse
from ..shared import addmediaintenthandlingresolvemediadestinationinvocationresponse as shared_addmediaintenthandlingresolvemediadestinationinvocationresponse
from ..shared import addmediaintenthandlingconfirminvocationresponse as shared_addmediaintenthandlingconfirminvocationresponse
from ..shared import addmediaintenthandlinghandleinvocationresponse as shared_addmediaintenthandlinghandleinvocationresponse
from ..shared import protocolexceptioninvocationresponse as shared_protocolexceptioninvocationresponse


@dataclasses.dataclass
class AddMediaIntentHandlingHeaders:
    accept_language: str = dataclasses.field(metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    request_timeout: float = dataclasses.field(metadata={'header': { 'field_name': 'Request-Timeout', 'style': 'simple', 'explode': False }})
    user_agent: str = dataclasses.field(metadata={'header': { 'field_name': 'User-Agent', 'style': 'simple', 'explode': False }})
    x_applecloudextension_session_id: str = dataclasses.field(metadata={'header': { 'field_name': 'x-applecloudextension-session-id', 'style': 'simple', 'explode': False }})
    x_applecloudextension_retry_count: Optional[float] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-applecloudextension-retry-count', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AddMediaIntentHandlingRequest:
    headers: AddMediaIntentHandlingHeaders = dataclasses.field()
    request: Optional[list[shared_addmediaintenthandlinginvocation.AddMediaIntentHandlingInvocation]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AddMediaIntentHandlingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    add_media_intent_handling_invocation_responses: Optional[list[Any]] = dataclasses.field(default=None)
    
