import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class PutAccountDetailsHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class PutAccountDetailsRequestBodyContactLanguageEnum(str, Enum):
    EN = "EN"
    JA = "JA"

class PutAccountDetailsRequestBodyMailTypeEnum(str, Enum):
    MARKETING = "MARKETING"
    TRANSACTIONAL = "TRANSACTIONAL"


@dataclass_json
@dataclasses.dataclass
class PutAccountDetailsRequestBody:
    mail_type: PutAccountDetailsRequestBodyMailTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MailType') }})
    use_case_description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UseCaseDescription') }})
    website_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WebsiteURL') }})
    additional_contact_email_addresses: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdditionalContactEmailAddresses') }})
    contact_language: Optional[PutAccountDetailsRequestBodyContactLanguageEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContactLanguage') }})
    production_access_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductionAccessEnabled') }})
    

@dataclasses.dataclass
class PutAccountDetailsRequest:
    headers: PutAccountDetailsHeaders = dataclasses.field()
    request: PutAccountDetailsRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutAccountDetailsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    conflict_exception: Optional[Any] = dataclasses.field(default=None)
    put_account_details_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    
