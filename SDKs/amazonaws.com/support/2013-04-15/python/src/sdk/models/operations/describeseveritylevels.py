import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describeseveritylevelsrequest as shared_describeseveritylevelsrequest
from ..shared import describeseveritylevelsresponse as shared_describeseveritylevelsresponse

class DescribeSeverityLevelsXAmzTargetEnum(str, Enum):
    AWS_SUPPORT_20130415_DESCRIBE_SEVERITY_LEVELS = "AWSSupport_20130415.DescribeSeverityLevels"


@dataclasses.dataclass
class DescribeSeverityLevelsHeaders:
    x_amz_target: DescribeSeverityLevelsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeSeverityLevelsRequest:
    headers: DescribeSeverityLevelsHeaders = dataclasses.field()
    request: shared_describeseveritylevelsrequest.DescribeSeverityLevelsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeSeverityLevelsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_severity_levels_response: Optional[shared_describeseveritylevelsresponse.DescribeSeverityLevelsResponse] = dataclasses.field(default=None)
    internal_server_error: Optional[Any] = dataclasses.field(default=None)
    
