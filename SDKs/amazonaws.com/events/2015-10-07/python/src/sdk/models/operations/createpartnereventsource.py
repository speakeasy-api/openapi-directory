import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import createpartnereventsourcerequest as shared_createpartnereventsourcerequest
from ..shared import createpartnereventsourceresponse as shared_createpartnereventsourceresponse

class CreatePartnerEventSourceXAmzTargetEnum(str, Enum):
    AWS_EVENTS_CREATE_PARTNER_EVENT_SOURCE = "AWSEvents.CreatePartnerEventSource"


@dataclasses.dataclass
class CreatePartnerEventSourceHeaders:
    x_amz_target: CreatePartnerEventSourceXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreatePartnerEventSourceRequest:
    headers: CreatePartnerEventSourceHeaders = dataclasses.field()
    request: shared_createpartnereventsourcerequest.CreatePartnerEventSourceRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreatePartnerEventSourceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    concurrent_modification_exception: Optional[Any] = dataclasses.field(default=None)
    create_partner_event_source_response: Optional[shared_createpartnereventsourceresponse.CreatePartnerEventSourceResponse] = dataclasses.field(default=None)
    internal_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    operation_disabled_exception: Optional[Any] = dataclasses.field(default=None)
    resource_already_exists_exception: Optional[Any] = dataclasses.field(default=None)
    
