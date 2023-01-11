import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import subscribetoeventrequest as shared_subscribetoeventrequest

class SubscribeToEventXAmzTargetEnum(str, Enum):
    INSPECTOR_SERVICE_SUBSCRIBE_TO_EVENT = "InspectorService.SubscribeToEvent"


@dataclasses.dataclass
class SubscribeToEventHeaders:
    x_amz_target: SubscribeToEventXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SubscribeToEventRequest:
    headers: SubscribeToEventHeaders = dataclasses.field()
    request: shared_subscribetoeventrequest.SubscribeToEventRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SubscribeToEventResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    internal_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_input_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    no_such_entity_exception: Optional[Any] = dataclasses.field(default=None)
    service_temporarily_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    
