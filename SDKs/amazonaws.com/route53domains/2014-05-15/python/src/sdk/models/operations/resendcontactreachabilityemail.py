import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import resendcontactreachabilityemailrequest as shared_resendcontactreachabilityemailrequest
from ..shared import resendcontactreachabilityemailresponse as shared_resendcontactreachabilityemailresponse

class ResendContactReachabilityEmailXAmzTargetEnum(str, Enum):
    ROUTE53_DOMAINS_V20140515_RESEND_CONTACT_REACHABILITY_EMAIL = "Route53Domains_v20140515.ResendContactReachabilityEmail"


@dataclasses.dataclass
class ResendContactReachabilityEmailHeaders:
    x_amz_target: ResendContactReachabilityEmailXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ResendContactReachabilityEmailRequest:
    headers: ResendContactReachabilityEmailHeaders = dataclasses.field()
    request: shared_resendcontactreachabilityemailrequest.ResendContactReachabilityEmailRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ResendContactReachabilityEmailResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_input: Optional[Any] = dataclasses.field(default=None)
    operation_limit_exceeded: Optional[Any] = dataclasses.field(default=None)
    resend_contact_reachability_email_response: Optional[shared_resendcontactreachabilityemailresponse.ResendContactReachabilityEmailResponse] = dataclasses.field(default=None)
    unsupported_tld: Optional[Any] = dataclasses.field(default=None)
    
