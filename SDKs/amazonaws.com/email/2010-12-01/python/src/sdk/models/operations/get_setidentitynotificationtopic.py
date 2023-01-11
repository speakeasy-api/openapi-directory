import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetSetIdentityNotificationTopicActionEnum(str, Enum):
    SET_IDENTITY_NOTIFICATION_TOPIC = "SetIdentityNotificationTopic"

class GetSetIdentityNotificationTopicNotificationTypeEnum(str, Enum):
    BOUNCE = "Bounce"
    COMPLAINT = "Complaint"
    DELIVERY = "Delivery"

class GetSetIdentityNotificationTopicVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_12_01 = "2010-12-01"


@dataclasses.dataclass
class GetSetIdentityNotificationTopicQueryParams:
    action: GetSetIdentityNotificationTopicActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    identity: str = dataclasses.field(metadata={'query_param': { 'field_name': 'Identity', 'style': 'form', 'explode': True }})
    notification_type: GetSetIdentityNotificationTopicNotificationTypeEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'NotificationType', 'style': 'form', 'explode': True }})
    version: GetSetIdentityNotificationTopicVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    sns_topic: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'SnsTopic', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSetIdentityNotificationTopicHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSetIdentityNotificationTopicRequest:
    headers: GetSetIdentityNotificationTopicHeaders = dataclasses.field()
    query_params: GetSetIdentityNotificationTopicQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSetIdentityNotificationTopicResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
