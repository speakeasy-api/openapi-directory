import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import deleteeventsubscriptionmessage as shared_deleteeventsubscriptionmessage
from ..shared import deleteeventsubscriptionresponse as shared_deleteeventsubscriptionresponse

class DeleteEventSubscriptionXAmzTargetEnum(str, Enum):
    AMAZON_DM_SV20160101_DELETE_EVENT_SUBSCRIPTION = "AmazonDMSv20160101.DeleteEventSubscription"


@dataclasses.dataclass
class DeleteEventSubscriptionHeaders:
    x_amz_target: DeleteEventSubscriptionXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteEventSubscriptionRequest:
    headers: DeleteEventSubscriptionHeaders = dataclasses.field()
    request: shared_deleteeventsubscriptionmessage.DeleteEventSubscriptionMessage = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DeleteEventSubscriptionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_event_subscription_response: Optional[shared_deleteeventsubscriptionresponse.DeleteEventSubscriptionResponse] = dataclasses.field(default=None)
    invalid_resource_state_fault: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_fault: Optional[Any] = dataclasses.field(default=None)
    
