import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class CreateCustomVerificationEmailTemplateHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateCustomVerificationEmailTemplateRequestBody:
    failure_redirection_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureRedirectionURL') }})
    from_email_address: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FromEmailAddress') }})
    success_redirection_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuccessRedirectionURL') }})
    template_content: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplateContent') }})
    template_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplateName') }})
    template_subject: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplateSubject') }})
    

@dataclasses.dataclass
class CreateCustomVerificationEmailTemplateRequest:
    headers: CreateCustomVerificationEmailTemplateHeaders = dataclasses.field()
    request: CreateCustomVerificationEmailTemplateRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateCustomVerificationEmailTemplateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    already_exists_exception: Optional[Any] = dataclasses.field(default=None)
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    create_custom_verification_email_template_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    not_found_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    
