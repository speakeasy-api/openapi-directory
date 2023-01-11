import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getcallanalyticscategoryrequest as shared_getcallanalyticscategoryrequest
from ..shared import getcallanalyticscategoryresponse as shared_getcallanalyticscategoryresponse

class GetCallAnalyticsCategoryXAmzTargetEnum(str, Enum):
    TRANSCRIBE_GET_CALL_ANALYTICS_CATEGORY = "Transcribe.GetCallAnalyticsCategory"


@dataclasses.dataclass
class GetCallAnalyticsCategoryHeaders:
    x_amz_target: GetCallAnalyticsCategoryXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCallAnalyticsCategoryRequest:
    headers: GetCallAnalyticsCategoryHeaders = dataclasses.field()
    request: shared_getcallanalyticscategoryrequest.GetCallAnalyticsCategoryRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetCallAnalyticsCategoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    get_call_analytics_category_response: Optional[shared_getcallanalyticscategoryresponse.GetCallAnalyticsCategoryResponse] = dataclasses.field(default=None)
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    not_found_exception: Optional[Any] = dataclasses.field(default=None)
    
