import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listcertificatesrequest as shared_listcertificatesrequest
from ..shared import listcertificatesresponse as shared_listcertificatesresponse


@dataclasses.dataclass
class ListCertificatesQueryParams:
    max_items: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxItems', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class ListCertificatesXAmzTargetEnum(str, Enum):
    CERTIFICATE_MANAGER_LIST_CERTIFICATES = "CertificateManager.ListCertificates"


@dataclasses.dataclass
class ListCertificatesHeaders:
    x_amz_target: ListCertificatesXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListCertificatesRequest:
    headers: ListCertificatesHeaders = dataclasses.field()
    query_params: ListCertificatesQueryParams = dataclasses.field()
    request: shared_listcertificatesrequest.ListCertificatesRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListCertificatesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_args_exception: Optional[Any] = dataclasses.field(default=None)
    list_certificates_response: Optional[shared_listcertificatesresponse.ListCertificatesResponse] = dataclasses.field(default=None)
    
