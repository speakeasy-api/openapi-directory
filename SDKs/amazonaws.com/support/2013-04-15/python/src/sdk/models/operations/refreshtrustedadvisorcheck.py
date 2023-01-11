import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import refreshtrustedadvisorcheckrequest as shared_refreshtrustedadvisorcheckrequest
from ..shared import refreshtrustedadvisorcheckresponse as shared_refreshtrustedadvisorcheckresponse

class RefreshTrustedAdvisorCheckXAmzTargetEnum(str, Enum):
    AWS_SUPPORT_20130415_REFRESH_TRUSTED_ADVISOR_CHECK = "AWSSupport_20130415.RefreshTrustedAdvisorCheck"


@dataclasses.dataclass
class RefreshTrustedAdvisorCheckHeaders:
    x_amz_target: RefreshTrustedAdvisorCheckXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RefreshTrustedAdvisorCheckRequest:
    headers: RefreshTrustedAdvisorCheckHeaders = dataclasses.field()
    request: shared_refreshtrustedadvisorcheckrequest.RefreshTrustedAdvisorCheckRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class RefreshTrustedAdvisorCheckResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_server_error: Optional[Any] = dataclasses.field(default=None)
    refresh_trusted_advisor_check_response: Optional[shared_refreshtrustedadvisorcheckresponse.RefreshTrustedAdvisorCheckResponse] = dataclasses.field(default=None)
    
