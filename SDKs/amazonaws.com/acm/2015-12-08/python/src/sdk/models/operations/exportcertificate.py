import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import exportcertificaterequest as shared_exportcertificaterequest
from ..shared import exportcertificateresponse as shared_exportcertificateresponse

class ExportCertificateXAmzTargetEnum(str, Enum):
    CERTIFICATE_MANAGER_EXPORT_CERTIFICATE = "CertificateManager.ExportCertificate"


@dataclasses.dataclass
class ExportCertificateHeaders:
    x_amz_target: ExportCertificateXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ExportCertificateRequest:
    headers: ExportCertificateHeaders = dataclasses.field()
    request: shared_exportcertificaterequest.ExportCertificateRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ExportCertificateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    export_certificate_response: Optional[shared_exportcertificateresponse.ExportCertificateResponse] = dataclasses.field(default=None)
    invalid_arn_exception: Optional[Any] = dataclasses.field(default=None)
    request_in_progress_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    
