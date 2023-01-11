import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import createcertificatefromcsrresponse as shared_createcertificatefromcsrresponse


@dataclasses.dataclass
class CreateCertificateFromCsrQueryParams:
    set_as_active: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'setAsActive', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CreateCertificateFromCsrHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateCertificateFromCsrRequestBody:
    certificate_signing_request: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateSigningRequest') }})
    

@dataclasses.dataclass
class CreateCertificateFromCsrRequest:
    headers: CreateCertificateFromCsrHeaders = dataclasses.field()
    query_params: CreateCertificateFromCsrQueryParams = dataclasses.field()
    request: CreateCertificateFromCsrRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateCertificateFromCsrResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_certificate_from_csr_response: Optional[shared_createcertificatefromcsrresponse.CreateCertificateFromCsrResponse] = dataclasses.field(default=None)
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    unauthorized_exception: Optional[Any] = dataclasses.field(default=None)
    
