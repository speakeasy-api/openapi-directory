import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import putemailidentitydkimsigningattributesresponse as shared_putemailidentitydkimsigningattributesresponse


@dataclasses.dataclass
class PutEmailIdentityDkimSigningAttributesPathParams:
    email_identity: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmailIdentity', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutEmailIdentityDkimSigningAttributesHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PutEmailIdentityDkimSigningAttributesRequestBodySigningAttributes:
    r"""PutEmailIdentityDkimSigningAttributesRequestBodySigningAttributes
    An object that contains information about the tokens used for setting up Bring Your Own DKIM (BYODKIM).
    """
    
    domain_signing_private_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainSigningPrivateKey') }})
    domain_signing_selector: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainSigningSelector') }})
    
class PutEmailIdentityDkimSigningAttributesRequestBodySigningAttributesOriginEnum(str, Enum):
    AWS_SES = "AWS_SES"
    EXTERNAL = "EXTERNAL"


@dataclass_json
@dataclasses.dataclass
class PutEmailIdentityDkimSigningAttributesRequestBody:
    signing_attributes_origin: PutEmailIdentityDkimSigningAttributesRequestBodySigningAttributesOriginEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SigningAttributesOrigin') }})
    signing_attributes: Optional[PutEmailIdentityDkimSigningAttributesRequestBodySigningAttributes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SigningAttributes') }})
    

@dataclasses.dataclass
class PutEmailIdentityDkimSigningAttributesRequest:
    headers: PutEmailIdentityDkimSigningAttributesHeaders = dataclasses.field()
    path_params: PutEmailIdentityDkimSigningAttributesPathParams = dataclasses.field()
    request: PutEmailIdentityDkimSigningAttributesRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutEmailIdentityDkimSigningAttributesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    not_found_exception: Optional[Any] = dataclasses.field(default=None)
    put_email_identity_dkim_signing_attributes_response: Optional[shared_putemailidentitydkimsigningattributesresponse.PutEmailIdentityDkimSigningAttributesResponse] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    
