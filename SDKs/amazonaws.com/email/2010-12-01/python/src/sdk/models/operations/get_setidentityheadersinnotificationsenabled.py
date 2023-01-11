import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetSetIdentityHeadersInNotificationsEnabledActionEnum(str, Enum):
    SET_IDENTITY_HEADERS_IN_NOTIFICATIONS_ENABLED = "SetIdentityHeadersInNotificationsEnabled"

class GetSetIdentityHeadersInNotificationsEnabledNotificationTypeEnum(str, Enum):
    BOUNCE = "Bounce"
    COMPLAINT = "Complaint"
    DELIVERY = "Delivery"

class GetSetIdentityHeadersInNotificationsEnabledVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_12_01 = "2010-12-01"


@dataclasses.dataclass
class GetSetIdentityHeadersInNotificationsEnabledQueryParams:
    action: GetSetIdentityHeadersInNotificationsEnabledActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    enabled: bool = dataclasses.field(metadata={'query_param': { 'field_name': 'Enabled', 'style': 'form', 'explode': True }})
    identity: str = dataclasses.field(metadata={'query_param': { 'field_name': 'Identity', 'style': 'form', 'explode': True }})
    notification_type: GetSetIdentityHeadersInNotificationsEnabledNotificationTypeEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'NotificationType', 'style': 'form', 'explode': True }})
    version: GetSetIdentityHeadersInNotificationsEnabledVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSetIdentityHeadersInNotificationsEnabledHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSetIdentityHeadersInNotificationsEnabledRequest:
    headers: GetSetIdentityHeadersInNotificationsEnabledHeaders = dataclasses.field()
    query_params: GetSetIdentityHeadersInNotificationsEnabledQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSetIdentityHeadersInNotificationsEnabledResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
