import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describesolutionversionrequest as shared_describesolutionversionrequest
from ..shared import describesolutionversionresponse as shared_describesolutionversionresponse

class DescribeSolutionVersionXAmzTargetEnum(str, Enum):
    AMAZON_PERSONALIZE_DESCRIBE_SOLUTION_VERSION = "AmazonPersonalize.DescribeSolutionVersion"


@dataclasses.dataclass
class DescribeSolutionVersionHeaders:
    x_amz_target: DescribeSolutionVersionXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeSolutionVersionRequest:
    headers: DescribeSolutionVersionHeaders = dataclasses.field()
    request: shared_describesolutionversionrequest.DescribeSolutionVersionRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeSolutionVersionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_solution_version_response: Optional[shared_describesolutionversionresponse.DescribeSolutionVersionResponse] = dataclasses.field(default=None)
    invalid_input_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    
