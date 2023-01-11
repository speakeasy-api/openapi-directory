import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listcertificateauthoritiesrequest as shared_listcertificateauthoritiesrequest
from ..shared import listcertificateauthoritiesresponse as shared_listcertificateauthoritiesresponse


@dataclasses.dataclass
class ListCertificateAuthoritiesQueryParams:
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class ListCertificateAuthoritiesXAmzTargetEnum(str, Enum):
    ACM_PRIVATE_CA_LIST_CERTIFICATE_AUTHORITIES = "ACMPrivateCA.ListCertificateAuthorities"


@dataclasses.dataclass
class ListCertificateAuthoritiesHeaders:
    x_amz_target: ListCertificateAuthoritiesXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListCertificateAuthoritiesRequest:
    headers: ListCertificateAuthoritiesHeaders = dataclasses.field()
    query_params: ListCertificateAuthoritiesQueryParams = dataclasses.field()
    request: shared_listcertificateauthoritiesrequest.ListCertificateAuthoritiesRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListCertificateAuthoritiesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_next_token_exception: Optional[Any] = dataclasses.field(default=None)
    list_certificate_authorities_response: Optional[shared_listcertificateauthoritiesresponse.ListCertificateAuthoritiesResponse] = dataclasses.field(default=None)
    
