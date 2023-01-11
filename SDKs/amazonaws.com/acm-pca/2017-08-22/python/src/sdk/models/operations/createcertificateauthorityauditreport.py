import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import createcertificateauthorityauditreportrequest as shared_createcertificateauthorityauditreportrequest
from ..shared import createcertificateauthorityauditreportresponse as shared_createcertificateauthorityauditreportresponse

class CreateCertificateAuthorityAuditReportXAmzTargetEnum(str, Enum):
    ACM_PRIVATE_CA_CREATE_CERTIFICATE_AUTHORITY_AUDIT_REPORT = "ACMPrivateCA.CreateCertificateAuthorityAuditReport"


@dataclasses.dataclass
class CreateCertificateAuthorityAuditReportHeaders:
    x_amz_target: CreateCertificateAuthorityAuditReportXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateCertificateAuthorityAuditReportRequest:
    headers: CreateCertificateAuthorityAuditReportHeaders = dataclasses.field()
    request: shared_createcertificateauthorityauditreportrequest.CreateCertificateAuthorityAuditReportRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateCertificateAuthorityAuditReportResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_certificate_authority_audit_report_response: Optional[shared_createcertificateauthorityauditreportresponse.CreateCertificateAuthorityAuditReportResponse] = dataclasses.field(default=None)
    invalid_args_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_arn_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_state_exception: Optional[Any] = dataclasses.field(default=None)
    request_failed_exception: Optional[Any] = dataclasses.field(default=None)
    request_in_progress_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    
