import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class PutEmailIdentityMailFromAttributesPathParams:
    email_identity: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmailIdentity', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutEmailIdentityMailFromAttributesHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class PutEmailIdentityMailFromAttributesRequestBodyBehaviorOnMxFailureEnum(str, Enum):
    USE_DEFAULT_VALUE = "USE_DEFAULT_VALUE"
    REJECT_MESSAGE = "REJECT_MESSAGE"


@dataclass_json
@dataclasses.dataclass
class PutEmailIdentityMailFromAttributesRequestBody:
    behavior_on_mx_failure: Optional[PutEmailIdentityMailFromAttributesRequestBodyBehaviorOnMxFailureEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BehaviorOnMxFailure') }})
    mail_from_domain: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MailFromDomain') }})
    

@dataclasses.dataclass
class PutEmailIdentityMailFromAttributesRequest:
    headers: PutEmailIdentityMailFromAttributesHeaders = dataclasses.field()
    path_params: PutEmailIdentityMailFromAttributesPathParams = dataclasses.field()
    request: PutEmailIdentityMailFromAttributesRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutEmailIdentityMailFromAttributesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    not_found_exception: Optional[Any] = dataclasses.field(default=None)
    put_email_identity_mail_from_attributes_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    
