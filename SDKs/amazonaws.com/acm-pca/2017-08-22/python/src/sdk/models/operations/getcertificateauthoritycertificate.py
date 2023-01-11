import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getcertificateauthoritycertificaterequest as shared_getcertificateauthoritycertificaterequest
from ..shared import getcertificateauthoritycertificateresponse as shared_getcertificateauthoritycertificateresponse

class GetCertificateAuthorityCertificateXAmzTargetEnum(str, Enum):
    ACM_PRIVATE_CA_GET_CERTIFICATE_AUTHORITY_CERTIFICATE = "ACMPrivateCA.GetCertificateAuthorityCertificate"


@dataclasses.dataclass
class GetCertificateAuthorityCertificateHeaders:
    x_amz_target: GetCertificateAuthorityCertificateXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCertificateAuthorityCertificateRequest:
    headers: GetCertificateAuthorityCertificateHeaders = dataclasses.field()
    request: shared_getcertificateauthoritycertificaterequest.GetCertificateAuthorityCertificateRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetCertificateAuthorityCertificateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_certificate_authority_certificate_response: Optional[shared_getcertificateauthoritycertificateresponse.GetCertificateAuthorityCertificateResponse] = dataclasses.field(default=None)
    invalid_arn_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_state_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    
