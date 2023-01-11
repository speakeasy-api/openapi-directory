import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import updatemediaaffinityintenthandlinginvocation as shared_updatemediaaffinityintenthandlinginvocation
from ..shared import updatemediaaffinityintenthandlingresolvemediaitemsinvocationresponse as shared_updatemediaaffinityintenthandlingresolvemediaitemsinvocationresponse
from ..shared import updatemediaaffinityintenthandlingresolveaffinitytypeinvocationresponse as shared_updatemediaaffinityintenthandlingresolveaffinitytypeinvocationresponse
from ..shared import updatemediaaffinityintenthandlinghandleinvocationresponse as shared_updatemediaaffinityintenthandlinghandleinvocationresponse
from ..shared import protocolexceptioninvocationresponse as shared_protocolexceptioninvocationresponse


@dataclasses.dataclass
class UpdateMediaAffinityIntentHandlingHeaders:
    accept_language: str = dataclasses.field(metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    request_timeout: float = dataclasses.field(metadata={'header': { 'field_name': 'Request-Timeout', 'style': 'simple', 'explode': False }})
    user_agent: str = dataclasses.field(metadata={'header': { 'field_name': 'User-Agent', 'style': 'simple', 'explode': False }})
    x_applecloudextension_session_id: str = dataclasses.field(metadata={'header': { 'field_name': 'x-applecloudextension-session-id', 'style': 'simple', 'explode': False }})
    x_applecloudextension_retry_count: Optional[float] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-applecloudextension-retry-count', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateMediaAffinityIntentHandlingRequest:
    headers: UpdateMediaAffinityIntentHandlingHeaders = dataclasses.field()
    request: Optional[list[shared_updatemediaaffinityintenthandlinginvocation.UpdateMediaAffinityIntentHandlingInvocation]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateMediaAffinityIntentHandlingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_media_affinity_intent_handling_invocation_responses: Optional[list[Any]] = dataclasses.field(default=None)
    
