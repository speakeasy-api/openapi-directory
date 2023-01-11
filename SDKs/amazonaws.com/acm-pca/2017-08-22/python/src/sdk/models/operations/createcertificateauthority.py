import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import createcertificateauthorityrequest as shared_createcertificateauthorityrequest
from ..shared import createcertificateauthorityresponse as shared_createcertificateauthorityresponse

class CreateCertificateAuthorityXAmzTargetEnum(str, Enum):
    ACM_PRIVATE_CA_CREATE_CERTIFICATE_AUTHORITY = "ACMPrivateCA.CreateCertificateAuthority"


@dataclasses.dataclass
class CreateCertificateAuthorityHeaders:
    x_amz_target: CreateCertificateAuthorityXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateCertificateAuthorityRequest:
    headers: CreateCertificateAuthorityHeaders = dataclasses.field()
    request: shared_createcertificateauthorityrequest.CreateCertificateAuthorityRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateCertificateAuthorityResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_certificate_authority_response: Optional[shared_createcertificateauthorityresponse.CreateCertificateAuthorityResponse] = dataclasses.field(default=None)
    invalid_args_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_policy_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_tag_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    
