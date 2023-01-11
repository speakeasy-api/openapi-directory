import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listtagsforcertificaterequest as shared_listtagsforcertificaterequest
from ..shared import listtagsforcertificateresponse as shared_listtagsforcertificateresponse

class ListTagsForCertificateXAmzTargetEnum(str, Enum):
    CERTIFICATE_MANAGER_LIST_TAGS_FOR_CERTIFICATE = "CertificateManager.ListTagsForCertificate"


@dataclasses.dataclass
class ListTagsForCertificateHeaders:
    x_amz_target: ListTagsForCertificateXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListTagsForCertificateRequest:
    headers: ListTagsForCertificateHeaders = dataclasses.field()
    request: shared_listtagsforcertificaterequest.ListTagsForCertificateRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListTagsForCertificateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_arn_exception: Optional[Any] = dataclasses.field(default=None)
    list_tags_for_certificate_response: Optional[shared_listtagsforcertificateresponse.ListTagsForCertificateResponse] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    
