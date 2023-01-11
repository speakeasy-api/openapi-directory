import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import modifyeventsubscriptionmessage as shared_modifyeventsubscriptionmessage
from ..shared import modifyeventsubscriptionresponse as shared_modifyeventsubscriptionresponse

class ModifyEventSubscriptionXAmzTargetEnum(str, Enum):
    AMAZON_DM_SV20160101_MODIFY_EVENT_SUBSCRIPTION = "AmazonDMSv20160101.ModifyEventSubscription"


@dataclasses.dataclass
class ModifyEventSubscriptionHeaders:
    x_amz_target: ModifyEventSubscriptionXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ModifyEventSubscriptionRequest:
    headers: ModifyEventSubscriptionHeaders = dataclasses.field()
    request: shared_modifyeventsubscriptionmessage.ModifyEventSubscriptionMessage = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ModifyEventSubscriptionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    kms_access_denied_fault: Optional[Any] = dataclasses.field(default=None)
    kms_disabled_fault: Optional[Any] = dataclasses.field(default=None)
    kms_invalid_state_fault: Optional[Any] = dataclasses.field(default=None)
    kms_not_found_fault: Optional[Any] = dataclasses.field(default=None)
    kms_throttling_fault: Optional[Any] = dataclasses.field(default=None)
    modify_event_subscription_response: Optional[shared_modifyeventsubscriptionresponse.ModifyEventSubscriptionResponse] = dataclasses.field(default=None)
    resource_not_found_fault: Optional[Any] = dataclasses.field(default=None)
    resource_quota_exceeded_fault: Optional[Any] = dataclasses.field(default=None)
    sns_invalid_topic_fault: Optional[Any] = dataclasses.field(default=None)
    sns_no_authorization_fault: Optional[Any] = dataclasses.field(default=None)
    
