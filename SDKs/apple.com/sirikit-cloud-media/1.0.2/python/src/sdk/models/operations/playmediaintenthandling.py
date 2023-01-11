import dataclasses
from typing import Any,Optional
from ..shared import playmediaintenthandlinginvocation as shared_playmediaintenthandlinginvocation
from ..shared import playmediaintenthandlingresolvemediaitemsinvocationresponse as shared_playmediaintenthandlingresolvemediaitemsinvocationresponse
from ..shared import playmediaintenthandlingresolveplayshuffledinvocationresponse as shared_playmediaintenthandlingresolveplayshuffledinvocationresponse
from ..shared import playmediaintenthandlingresolveplaybackqueuelocationinvocationresponse as shared_playmediaintenthandlingresolveplaybackqueuelocationinvocationresponse
from ..shared import playmediaintenthandlingresolveplaybackrepeatmodeinvocationresponse as shared_playmediaintenthandlingresolveplaybackrepeatmodeinvocationresponse
from ..shared import playmediaintenthandlingresolveresumeplaybackinvocationresponse as shared_playmediaintenthandlingresolveresumeplaybackinvocationresponse
from ..shared import playmediaintenthandlinghandleinvocationresponse as shared_playmediaintenthandlinghandleinvocationresponse
from ..shared import protocolexceptioninvocationresponse as shared_protocolexceptioninvocationresponse


@dataclasses.dataclass
class PlayMediaIntentHandlingHeaders:
    accept_language: str = dataclasses.field(metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    request_timeout: float = dataclasses.field(metadata={'header': { 'field_name': 'Request-Timeout', 'style': 'simple', 'explode': False }})
    user_agent: str = dataclasses.field(metadata={'header': { 'field_name': 'User-Agent', 'style': 'simple', 'explode': False }})
    x_applecloudextension_session_id: str = dataclasses.field(metadata={'header': { 'field_name': 'x-applecloudextension-session-id', 'style': 'simple', 'explode': False }})
    x_applecloudextension_retry_count: Optional[float] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-applecloudextension-retry-count', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PlayMediaIntentHandlingRequest:
    headers: PlayMediaIntentHandlingHeaders = dataclasses.field()
    request: Optional[list[shared_playmediaintenthandlinginvocation.PlayMediaIntentHandlingInvocation]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PlayMediaIntentHandlingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    play_media_intent_handling_invocation_responses: Optional[list[Any]] = dataclasses.field(default=None)
    
