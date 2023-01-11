import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describetrustedadvisorcheckrefreshstatusesrequest as shared_describetrustedadvisorcheckrefreshstatusesrequest
from ..shared import describetrustedadvisorcheckrefreshstatusesresponse as shared_describetrustedadvisorcheckrefreshstatusesresponse

class DescribeTrustedAdvisorCheckRefreshStatusesXAmzTargetEnum(str, Enum):
    AWS_SUPPORT_20130415_DESCRIBE_TRUSTED_ADVISOR_CHECK_REFRESH_STATUSES = "AWSSupport_20130415.DescribeTrustedAdvisorCheckRefreshStatuses"


@dataclasses.dataclass
class DescribeTrustedAdvisorCheckRefreshStatusesHeaders:
    x_amz_target: DescribeTrustedAdvisorCheckRefreshStatusesXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeTrustedAdvisorCheckRefreshStatusesRequest:
    headers: DescribeTrustedAdvisorCheckRefreshStatusesHeaders = dataclasses.field()
    request: shared_describetrustedadvisorcheckrefreshstatusesrequest.DescribeTrustedAdvisorCheckRefreshStatusesRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeTrustedAdvisorCheckRefreshStatusesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_trusted_advisor_check_refresh_statuses_response: Optional[shared_describetrustedadvisorcheckrefreshstatusesresponse.DescribeTrustedAdvisorCheckRefreshStatusesResponse] = dataclasses.field(default=None)
    internal_server_error: Optional[Any] = dataclasses.field(default=None)
    
